---
title: "Cómo conectar Nibomo a ChatGPT con MCP"
description: "Conecta Nibomo a ChatGPT mediante MCP, inicia sesión con OAuth, configura los permisos y comprueba la conexión guardando una tarjeta de estudio."
date: "2026-09-20"
image: "/blog/how-to-connect-nibomo-to-chatgpt-with-mcp.png"
keywords:
  - "conectar Nibomo a ChatGPT"
  - "Nibomo ChatGPT MCP"
  - "conector de tarjetas de estudio para ChatGPT"
  - "configuración MCP de Nibomo"
---

Para conectar Nibomo a ChatGPT, añade su servidor MCP como plugin personalizado e inicia sesión en tu cuenta de Nibomo. Los dos pasos son necesarios: Nibomo puede aparecer en la página de plugins de ChatGPT antes de que hayas terminado de iniciar sesión.

La conexión usa MCP, un estándar que permite a un asistente de IA acceder a las herramientas de otra aplicación. Introduces la dirección del servidor, autorizas el acceso y le pides a ChatGPT que trabaje con tus tarjetas de estudio en lenguaje natural. No hace falta programar.

![Un florista presenta un ramo de muestra a un cliente para que lo apruebe antes de preparar los demás](/blog/how-to-connect-nibomo-to-chatgpt-with-mcp.png)

Esta configuración usa el modo de desarrollador de ChatGPT, **Developer mode**. Añadirás Nibomo directamente mediante la URL de su servidor.

**Nota sobre la verificación:** Capturamos las pantallas de configuración el 20 de septiembre de 2026 y guardamos la configuración del plugin personalizado. La ventana emergente de inicio de sesión no se abrió en nuestro navegador integrado, así que no pudimos completar OAuth ni probar llamadas a herramientas con autenticación. Las peticiones de ejemplo que encontrarás más abajo te sirven para comprobar tu propia conexión; no hemos verificado la creación de tarjetas con esta configuración.

## Abre el formulario para añadir un plugin personalizado

Necesitas una cuenta de Nibomo y una cuenta o espacio de trabajo de ChatGPT con acceso a conexiones MCP personalizadas. Si aún no has usado Nibomo, sigue primero la [guía de primeros pasos](/docs/getting-started/) para tener un espacio de trabajo que puedas seleccionar.

En ChatGPT, abre **Settings → Security and login → Developer mode** y activa el modo de desarrollador. Después, abre **Plugins** y usa el botón **+** o la opción **Create app** para añadir una conexión. En nuestra sesión, el formulario se titulaba **New Plugin**. OpenAI explica estos pasos en su [guía para conectarse a ChatGPT](https://developers.openai.com/plugins/deploy/connect-chatgpt).

La disponibilidad y los nombres de las opciones pueden variar según la cuenta y el espacio de trabajo. Si no aparece **Developer mode** o la opción para crear una conexión, consulta la guía oficial y las restricciones de tu espacio de trabajo.

Rellena el formulario:

| Campo | Valor |
| --- | --- |
| Name (nombre) | `Nibomo` |
| Description (descripción) | `Lee, escribe y repasa tus tarjetas de estudio con repetición espaciada.` |
| Connection (conexión) | Server URL |
| Server URL (URL del servidor) | `https://mcp.nibomo.com/mcp` |
| Authentication (autenticación) | OAuth |

Usa la dirección completa, incluido el `/mcp` final. La descripción es opcional y sirve para reconocer la conexión más adelante. No necesitas generar una clave de API para esta configuración con OAuth.

![Formulario New Plugin de ChatGPT con la URL del servidor MCP de Nibomo y la autenticación OAuth seleccionada](/blog/chatgpt-mcp-nibomo-create-connector.png)

Lee la advertencia sobre servidores personalizados, marca la casilla de aceptación si quieres continuar y pulsa **Create**. El botón está debajo de la zona visible en la captura. Esto añade tu conexión personalizada; no significa que OpenAI haya revisado Nibomo ni que figure en su directorio público.

## Termina de iniciar sesión en Nibomo

En **Add Nibomo to ChatGPT**, selecciona **Sign in with Nibomo** y completa la autorización con la cuenta de Nibomo donde tienes tus tarjetas.

![Pantalla Add Nibomo to ChatGPT con el botón Sign in with Nibomo, antes de iniciar sesión](/blog/chatgpt-mcp-nibomo-sign-in.png)

El servicio de autenticación de Nibomo usa `auth.flashcards-open-source-app.com`. Es normal ver ese dominio durante el inicio de sesión, aunque la dirección MCP use `mcp.nibomo.com`.

Si no se abre ninguna ventana de inicio de sesión, prueba a seguir los pasos en tu navegador habitual. Para volver a iniciar sesión, abre **Nibomo → Plugin actions (…) → Manage → Connect another account**. Después, comprueba la lista de espacios de trabajo como se explica más abajo para confirmar que ChatGPT puede acceder a tu cuenta.

## Decide cuándo debe pedir permiso ChatGPT

En **Settings → Plugins → Permissions**, la pantalla que capturamos ofrece **Always ask** (preguntar siempre), **Allow read actions** (permitir acciones de lectura) y **Allow low-risk actions** (permitir acciones de bajo riesgo).

Elige **Allow read actions** para que ChatGPT pueda mostrar la lista de espacios de trabajo y leer tarjetas sin preguntar, y te pida aprobación cuando vaya a hacer cambios. Elige **Always ask** si también quieres aprobar las lecturas.

![Permisos de plugins de ChatGPT con la opción Allow read actions seleccionada](/blog/chatgpt-mcp-nibomo-permissions.png)

Este ajuste es global para los plugins. Al cambiarlo, también afecta a otros plugins; no es un permiso exclusivo de Nibomo.

En Nibomo, consultar la lista de espacios de trabajo, leer tarjetas, obtener instrucciones, mostrar la siguiente pregunta de repaso y revelar una respuesta son acciones de lectura. Crear o editar tarjetas y registrar un repaso son acciones de escritura. En la actividad de ChatGPT pueden aparecer nombres de herramientas como `list_workspaces`, `sql_query` o `sql_execute`, pero no tienes que escribir SQL. La [documentación del conector MCP](/docs/mcp-connector/) describe la interfaz.

## Comprueba la conexión con una tarjeta

Abre un chat con Nibomo seleccionado. Empieza con una petición que no cambie nada:

> Usa Nibomo para mostrar la lista de mis espacios de trabajo. No crees ni cambies nada.

Comprueba que los espacios de trabajo de la lista pertenecen a tu cuenta. Si ChatGPT no puede usar Nibomo o te pide conectar una cuenta, vuelve al inicio de sesión. Cuando la consulta funcione, indica el espacio de trabajo de destino antes de guardar cualquier tarjeta.

Después, pide un borrador:

> Prepara un borrador de una sola tarjeta de estudio sobre HTTP 404. Pon solo una pregunta en el anverso y la respuesta en el reverso. Enséñame las dos caras antes de guardar nada.

Una tarjeta adecuada sería:

| Cara | Contenido |
| --- | --- |
| Anverso | ¿Qué significa el código de estado HTTP 404? |
| Reverso | El servidor no ha encontrado el recurso solicitado. Por ejemplo, la URL puede apuntar a una página que no existe. |

Cuando te convenza el borrador, indica el destino:

> Guarda solo esta tarjeta en mi espacio de trabajo [nombre del espacio de trabajo] de Nibomo. No crees ninguna otra tarjeta.

Revisa la tarjeta y el espacio de trabajo en la solicitud de aprobación de ChatGPT antes de autorizar el cambio. Después, pídele a ChatGPT que consulte la tarjeta guardada y te la muestre. Abre Nibomo en la web o en tu teléfono con la misma cuenta, selecciona ese espacio de trabajo y deja que se sincronice. Busca la tarjeta y comprueba sus dos caras para confirmar que se ha guardado correctamente.

## Si la conexión sigue sin funcionar

Comprueba primero la URL configurada: `https://mcp.nibomo.com/mcp`. El dominio MCP anterior sigue funcionando, pero, si cambias una conexión existente a la nueva dirección, tendrás que volver a iniciar sesión. Los tokens de autorización están vinculados a la dirección del servidor.

Si ChatGPT indica que no ha podido guardar la tarjeta, pídele que consulte el espacio de trabajo antes de volver a intentar guardarla. Así reduces el riesgo de crear un duplicado cuando no esté claro el resultado del primer intento. Si la tarjeta ya está guardada en el servidor, pero aún no aparece en tu teléfono, comprueba allí la cuenta, el espacio de trabajo y el estado de la sincronización.

Tras esta comprobación con una tarjeta, puedes seguir el mismo proceso de borrador y aprobación con tu propio material de estudio. La [guía para crear tarjetas de estudio con ChatGPT](/blog/how-to-use-chatgpt-to-make-flashcards/) explica cómo elegir preguntas útiles y mantener cada tarjeta centrada en un solo concepto.
