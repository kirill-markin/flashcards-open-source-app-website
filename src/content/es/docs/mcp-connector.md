---
title: Conector MCP
description: Añada el servidor MCP remoto de Flashcards como un conector personalizado, con OAuth para clientes, una clave API para uso headless y herramientas SQL de lectura y escritura separadas.
---

## Descripción general

Flashcards ejecuta un servidor MCP (Model Context Protocol) remoto para que los
clientes MCP y los agentes de IA puedan leer sus tarjetas pendientes, repasarlas
con usted una pregunta a la vez y crear o editar tarjetas y mazos por usted.

Los agentes pueden conectarse de dos maneras: a través de este servidor MCP
(mejor para clientes MCP como Claude o Cursor), o mediante la [URL de
descubrimiento de la API de agentes](/docs/api/) para agentes de CLI. Ambas
alcanzan la misma superficie de datos por usuario; esta página cubre el servidor
MCP.

Conéctese a él en:

```text
https://mcp.flashcards-open-source-app.com/mcp
```

El transporte es Streamable HTTP, y el servidor expone siete herramientas: dos
herramientas SQL sobre una superficie SQL pequeña e intencionalmente limitada,
una lista de espacios de trabajo, una guía de referencia y tres herramientas de
repaso. Es la misma superficie de datos por usuario que la [referencia de API](/docs/api/); el servidor MCP es la
forma compatible con conectores de alcanzarla desde clientes que hablan MCP.

## Cómo añadirlo en su cliente

La mayoría de los clientes añaden un servidor MCP remoto como un conector
personalizado:

1. Abra la configuración de conectores o de servidor MCP de su cliente.
2. Añada un conector personalizado y pegue la URL del servidor `https://mcp.flashcards-open-source-app.com/mcp`.
3. Para clientes interactivos, autorice en el navegador cuando se le solicite. El
   servidor usa OAuth 2.1 con Dynamic Client Registration, por lo que no hay
   ningún client secret que pegar ni ninguna aplicación que registrar primero.
4. Para uso headless o de CLI, configure un encabezado `Authorization: Bearer fca_…`
   con su clave API de agente en lugar del flujo del navegador.

Después de autorizar, llame a `list_workspaces` una vez para elegir un espacio de
trabajo, luego use `sql_query` para lecturas y `sql_execute` para escrituras de
tarjetas y mazos. Para repasar, llame a `next_review_card`, luego a
`reveal_answer` y luego a `submit_review`.

## Herramientas

El servidor expone siete herramientas. Las lecturas y las escrituras están
separadas a propósito para que una sola herramienta nunca mezcle operaciones
seguras y destructivas.

- `sql_query` — acceso estrictamente de solo lectura a sus tarjetas y mazos
  (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — acceso de escritura a sus tarjetas y mazos (`INSERT`, `UPDATE`,
  `DELETE`) como un lote atómico.
- `list_workspaces` — lista estrictamente de solo lectura de los espacios de
  trabajo a los que puede acceder, cada uno con su `workspaceId`, nombre,
  recuento de tarjetas activas, última actividad y si es su predeterminado
  actualmente seleccionado. Use un `workspaceId` devuelto para el argumento
  opcional `workspaceId` de las herramientas SQL y de repaso.
- `get_guide` — guía de referencia estrictamente de solo lectura para un tema:
  `sql_dialect`, `card_authoring`, `bulk_authoring` o `review_flow`. No lee datos
  del espacio de trabajo.
- `next_review_card` — estrictamente de solo lectura: devuelve la siguiente
  tarjeta que repasar, solo el anverso, en el mismo orden de cola que las
  aplicaciones. Opcionalmente, `tags` o `deckId` acota la cola.
- `reveal_answer` — estrictamente de solo lectura: devuelve el reverso de una
  tarjeta después de que el estudiante haya intentado responder su anverso.
- `submit_review` — registra una calificación `Again`, `Hard`, `Good` o `Easy` y
  avanza la programación FSRS de la tarjeta.

La superficie SQL es un dialecto intencionalmente limitado y no es PostgreSQL
completo. Esta documentación cubre solo el dialecto compatible, no una referencia
de compatibilidad con PostgreSQL. Las instrucciones solo pueden dirigirse a los
recursos `workspace`, `cards`, `decks` y `review_events`, cada instrucción tiene
el alcance de su propio espacio de trabajo, y las lecturas y escrituras tienen un
límite de `100` filas por instrucción.

## Repasos

Las herramientas de repaso permiten a un agente preguntar a un estudiante una
tarjeta a la vez y guardar cada calificación en la programación FSRS de la
tarjeta:

1. `next_review_card` devuelve un `cardId` y `frontText`, o `card: null` cuando
   no hay nada pendiente.
2. Después de que el estudiante responda, `reveal_answer` devuelve el `backText`
   de esa tarjeta.
3. `submit_review` recibe el `cardId`, un UUID `reviewId` generado por el
   cliente, un `rating` y el `reviewedTimeZone` IANA del estudiante. El servidor
   asigna la hora del repaso y devuelve la nueva programación de la tarjeta.

Reintente un envío incierto con el mismo `reviewId`; nunca registra un segundo
repaso. Un envío también puede responder:

- `409 REVIEW_EVENT_CONFLICT` — el repaso ya se había registrado, y los detalles
  del error contienen la programación actual de la tarjeta.
- `409 REVIEW_ID_CARD_MISMATCH` — el `reviewId` ya identifica un repaso de otra
  tarjeta, por lo que no se guardó nada; envíe de nuevo con un nuevo `reviewId`.
- `409 REVIEW_STALE` — la hora de repaso almacenada de la tarjeta es igual o
  posterior a la hora actual del servidor; repase otra tarjeta.

Los repasos solo se registran mediante `submit_review`: SQL no puede escribir
`review_events` ni el estado de programación FSRS. Llame a `get_guide` con el
tema `review_flow` para conocer las reglas completas de repaso y calificación.

## Contrato de la tarjeta

Cada tarjeta sigue un contrato, y las herramientas dependen de él:

- `front_text` es únicamente una pregunta o indicación de repaso y nunca contiene
  la respuesta.
- `back_text` contiene la respuesta, opcionalmente con un ejemplo concreto.

Los agentes que generan tarjetas a través de `sql_execute` siguen este contrato,
de modo que las tarjetas que crean son inmediatamente repasables con repetición
espaciada.

## Autenticación

Dos rutas de autorización alcanzan la misma superficie de datos por usuario.

### OAuth 2.1 (clientes de conector interactivos)

El servidor implementa el flujo de código de autorización con PKCE y Dynamic
Client Registration. Añada la URL de MCP como un conector personalizado y autorice
en el navegador; ningún client secret se comparte previamente. El descubrimiento
es estándar:

- Metadatos de recurso protegido:
  `https://mcp.flashcards-open-source-app.com/.well-known/oauth-protected-resource`
- Metadatos del servidor de autorización:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### Clave API (headless y CLI)

Obtenga una clave API de agente `fca_` de larga duración mediante el flujo de
inicio de sesión OTP por correo electrónico documentado en la [referencia de
API](/docs/api/), luego envíela como un token Bearer:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Esta es la misma clave que acepta la superficie REST del agente, y no necesita
ningún navegador ni ida y vuelta de OAuth.

La descripción canónica legible por máquina de ambas rutas es la carga útil de
descubrimiento en `https://api.flashcards-open-source-app.com/v1/` (reflejada en
`/v1/agent`).

## Seguridad y alcance

Las herramientas SQL son seguras de aprobar porque la superficie es un dialecto
contenido y validado por el analizador, en lugar de un acceso arbitrario a la base
de datos:

- **Lista de instrucciones cerrada**: `sql_query` acepta únicamente `SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS` y `SELECT`; `sql_execute` acepta únicamente `INSERT`,
  `UPDATE` y `DELETE`. Cualquier otra cosa se rechaza en el análisis.
- **Recursos limitados**: las instrucciones solo pueden tocar `workspace`, `cards`,
  `decks` y `review_events`.
- **Alcance por espacio de trabajo**: cada instrucción SQL y cada repaso tienen el
  alcance de un espacio de trabajo al que puede acceder, ya sea el `workspaceId`
  que usted pasa o su predeterminado seleccionado, sin acceso entre inquilinos.
- **Argumentos estrictos**: cada herramienta rechaza un argumento desconocido, por
  lo que un `workspaceId` mal escrito falla en lugar de ejecutarse contra su
  espacio de trabajo predeterminado.
- **Límites**: hasta `100` filas por instrucción, hasta `50` instrucciones por lote
  y un límite de resultados de aproximadamente `12k` tokens. Los lotes de mutación
  se aplican de forma atómica.
- **División de lectura/escritura**: `sql_query`, `list_workspaces`, `get_guide`,
  `next_review_card` y `reveal_answer` son estrictamente de solo lectura
  (`readOnlyHint`) y nunca reparan datos, recalculan la programación ni cambian el
  estado de las tarjetas. `sql_execute` y `submit_review` son las únicas
  herramientas de escritura (`destructiveHint`): `sql_execute` escribe tarjetas y
  mazos, y `submit_review` registra un repaso y avanza la programación de su
  tarjeta.

Toda la pila —aplicación, backend e infraestructura— es de código abierto y se
puede [autoalojar](/docs/self-hosting/), por lo que puede ejecutar el mismo
conector contra su propio despliegue.
