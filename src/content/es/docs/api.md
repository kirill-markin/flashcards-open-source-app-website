---
title: Referencia de API
description: >-
  API de agente externo para descubrimiento, arranque OTP, configuración del
  espacio de trabajo y superficie SQL publicada.
---
## Descripción general

Esta página documenta el contrato actual de agente de IA externo para Flashcards.

Comience desde el punto de entrada del descubrimiento canónico:

```text
GET https://api.flashcards-open-source-app.com/v1/
```

La misma carga útil de descubrimiento también está disponible en `GET /v1/agent`, pero `/v1/` es el punto de entrada público principal.

La respuesta de descubrimiento le dice al agente cómo:

- iniciar sesión OTP por correo electrónico
- intercambiar la OTP por una clave API de larga duración
- cargar el contexto de la cuenta
- crear o seleccionar un espacio de trabajo
- continuar a través de la superficie SQL publicada

## Especificaciones publicadas

URL de especificaciones principales para la superficie del agente externo:

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`

También existen alias de raíz equivalentes:

- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

## Arranque de autenticación

El arranque OTP se ejecuta en el servicio de autenticación:

- `POST https://auth.flashcards-open-source-app.com/api/agent/send-code`
- `POST https://auth.flashcards-open-source-app.com/api/agent/verify-code`

El flujo es:

1. Llama a `GET /v1/`.
2. Envíe el correo electrónico del usuario a `send-code`.
3. Lea `otpSessionToken` de la respuesta.
4. Solicite al usuario el último código de correo electrónico de 8 dígitos.
5. Llame a `verify-code` con `code`, `otpSessionToken` y `label`.
6. Conserve la clave API devuelta fuera de la memoria del chat.

Variable de entorno recomendada:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Las solicitudes autenticadas utilizan:

```text
Authorization: ApiKey <key>
```

Secuencia de arranque de ejemplo:

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Codex on MacBook"
  }'
```

## Superficie del agente posterior al inicio de sesión

Después de la verificación, la superficie actual del agente es:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql`

El bootstrap típico se ve así:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Si es necesario, `POST /v1/agent/workspaces` con `{"name":"Personal"}`
4. Si es necesario, `POST /v1/agent/workspaces/{workspaceId}/select`
5. Utilice `POST /v1/agent/sql`

La selección del espacio de trabajo es explícita por conexión de clave API. Los agentes deben seguir el texto `instructions` devuelto y el campo `docs.openapiUrl` de cada sobre en lugar de adivinar el siguiente paso.

## Superficie SQL

`POST /v1/agent/sql` es la superficie de lectura/escritura compartida para agentes externos.

Está intencionalmente limitado y no es PostgreSQL completo.

Familias de declaraciones actuales:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Los recursos lógicos publicados actualmente incluyen:

- `workspace`
- `cards`
- `decks`
- `review_events`

Notas:

- `LIMIT` por defecto es `100` y tiene un límite de `100`
- use `ORDER BY` cuando necesite una paginación estable
- utilice `SHOW TABLES` o `DESCRIBE cards` para el descubrimiento de esquemas
- el contrato de agente externo tiene un alcance de espacio de trabajo después de la selección

Solicitud de ejemplo:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Ejemplo de consulta de tarjeta:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Mutación de ejemplo:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

## API humanas y de sincronización

Flashcards también incluye API independientes para clientes humanos y sincronización sin conexión, pero no son el contrato principal para agentes externos:

- los flujos del navegador utilizan cookies de dominio compartido más protección CSRF
- Los primeros clientes sin conexión utilizan rutas de sincronización implementadas en `/v1/workspaces/{workspaceId}/sync/push` y `/v1/workspaces/{workspaceId}/sync/pull`
- las rutas de sincronización están intencionalmente fuera de la superficie OpenAPI del agente externo
