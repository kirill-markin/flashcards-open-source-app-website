---
title: >-
  Cómo permitir que Claude Code, Codex u OpenClaw inicien sesión en Flashcards
  por usted
description: >-
  Flashcards expone un flujo de inicio de sesión de agente de código abierto
  creado en torno a una URL de descubrimiento, una OTP de correo electrónico y
  una clave API de larga duración. Proporcione a su agente un enlace, envíele el
  código de correo electrónico de 8 dígitos y deje que finalice la configuración
  de la cuenta y el espacio de trabajo.
date: '2026-03-10'
keywords:
  - inicio de sesión con código claude
  - iniciar sesión en el códice
  - api de otp de correo electrónico
  - incorporación de agentes
  - aplicación de tarjetas didácticas de código abierto
  - autenticación de API de código abierto
---
La mayoría de los flujos de inicio de sesión todavía asumen que el humano hará todo el trabajo de configuración a mano.

Abra una página de inicio de sesión. Espere el código. Copia la ficha. Cree una clave API. Pégalo en una herramienta. Explíquele los documentos a su agente. Arregle la sesión cuando algo salga mal.

Ese es exactamente el tipo de trabajo que una herramienta debería realizar por usted.

En [Flashcards](https://flashcards-open-source-app.com/), ahora exponemos un flujo de inicio de sesión de agente de código abierto que comienza desde una URL de descubrimiento:

`https://api.flashcards-open-source-app.com/v1/`

Ese es el punto de entrada canónico. La misma carga útil de descubrimiento también está disponible en `https://api.flashcards-open-source-app.com/v1/agent`, pero el contrato actual comienza en `/v1/`.

Proporcione esa URL a Claude Code, Codex u OpenClaw. El agente puede inspeccionar el flujo, solicitar el código de correo electrónico, verificarlo, almacenar la clave API, cargar la cuenta y continuar con la configuración del espacio de trabajo por sí solo.

El humano sólo necesita hacer dos cosas:

- compartir la dirección de correo electrónico
- devolver el último código de 8 dígitos del correo electrónico

Ese es el punto.

## Un enlace es suficiente

El punto final de descubrimiento devuelve la descripción del servicio, el modelo de autenticación, la primera acción y las instrucciones del siguiente paso en la misma respuesta.

Entonces, en lugar de escribir un texto de incorporación personalizado para cada herramienta, puede simplemente indicarle al agente la URL y dejar que siga las instrucciones devueltas.

```text
GET https://api.flashcards-open-source-app.com/v1/
```

En un nivel alto, el agente aprende inmediatamente cuatro cosas:

- este es el servicio de Flashcards
- el inicio de sesión y el registro utilizan OTP por correo electrónico
- la verificación exitosa devuelve una clave API de larga duración
- Después de iniciar sesión, el siguiente paso es el arranque de la cuenta y el espacio de trabajo.

## Cómo se ve el flujo

La secuencia es intencionalmente pequeña.

1. El agente llama al punto final de descubrimiento.
2. El agente envía el correo electrónico del usuario a `send-code`.
3. Flashcards envía por correo electrónico el código de 8 dígitos y devuelve un `otpSessionToken`.
4. El agente le pide al usuario el último código.
5. El agente verifica el código y recibe una clave API de larga duración.
6. El agente llama a `/v1/agent/me` y a `/v1/agent/workspaces`.
7. El agente crea o selecciona el espacio de trabajo correcto y luego continúa con `/v1/agent/sql`.

Eso es importante porque el agente no se detiene en "el inicio de sesión se realizó correctamente". Puede continuar con el resto del flujo de configuración y realizar lecturas y escrituras reales.

## Ejemplo de mensaje para Claude Code o Codex

Esto es suficiente:

```text
Use this Flashcards discovery URL:
https://api.flashcards-open-source-app.com/v1/

Log in to my Flashcards account, load account context, and select or create the correct workspace.
Ask me only for the latest 8-digit email code when the flow requires it.
```

Después de eso, no es necesario que explique manualmente la secuencia de autenticación. El punto final ya lo hace.

## Ejemplo de mensaje para OpenClaw

Misma idea, un poco más explícita:

```text
Connect my Flashcards account using this URL:
https://api.flashcards-open-source-app.com/v1/

Follow the returned instructions, keep the API key secure, load my account, then continue to workspace setup.
If verification is needed, ask me for the latest 8-digit code from the email.
```

## Ejemplo: respuesta de descubrimiento

Esta es la primera petición:

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

Y la respuesta está diseñada para que los agentes terminales puedan seguirla sin adivinar:

```json
{
  "ok": true,
  "data": {
    "service": {
      "name": "flashcards-open-source-app",
      "version": "v1",
      "description": "Offline-first flashcards service with user-owned workspaces and a compact SQL agent surface."
    },
    "authentication": {
      "type": "email_otp_then_api_key",
      "sendCodeUrl": "https://auth.flashcards-open-source-app.com/api/agent/send-code",
      "verifyCodeUrl": "https://auth.flashcards-open-source-app.com/api/agent/verify-code"
    },
    "capabilitiesAfterLogin": [
      "Load account context",
      "Select a workspace",
      "Inspect the published SQL surface through OpenAPI and SQL introspection",
      "Read and write cards and decks through /agent/sql"
    ],
    "authBaseUrl": "https://auth.flashcards-open-source-app.com",
    "apiBaseUrl": "https://api.flashcards-open-source-app.com/v1",
    "surface": {
      "accountUrl": "https://api.flashcards-open-source-app.com/v1/agent/me",
      "workspacesUrl": "https://api.flashcards-open-source-app.com/v1/agent/workspaces",
      "sqlUrl": "https://api.flashcards-open-source-app.com/v1/agent/sql"
    }
  },
  "instructions": "Start with POST https://auth.flashcards-open-source-app.com/api/agent/send-code using the user's email, then POST https://auth.flashcards-open-source-app.com/api/agent/verify-code to obtain an API key. After login, call GET https://api.flashcards-open-source-app.com/v1/agent/me, then GET https://api.flashcards-open-source-app.com/v1/agent/workspaces?limit=100. If no workspace is selected for this API key, call POST https://api.flashcards-open-source-app.com/v1/agent/workspaces/{workspaceId}/select or create one with POST https://api.flashcards-open-source-app.com/v1/agent/workspaces using {\"name\":\"Personal\"}. After workspace bootstrap, use POST https://api.flashcards-open-source-app.com/v1/agent/sql for all shared card and deck reads and writes. Use https://api.flashcards-open-source-app.com/v1/agent/openapi.json for the full contract. The SQL surface is intentionally limited and is not full PostgreSQL.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

## Ejemplo: enviar el código de correo electrónico

Una vez que el agente tiene el correo electrónico del usuario, inicia el paso OTP:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{
    "email": "you@example.com"
  }'
```

El servidor envía el correo electrónico y devuelve una sesión de verificación de corta duración:

```json
{
  "ok": true,
  "data": {
    "email": "you@example.com",
    "otpSessionToken": "...",
    "expiresInSeconds": 180,
    "authBaseUrl": "https://auth.flashcards-open-source-app.com",
    "apiBaseUrl": "https://api.flashcards-open-source-app.com/v1"
  },
  "instructions": "A verification code has been sent to the user's email. Ask for the 8-digit code from the email, then call verify_code with code, otpSessionToken, and a label for this agent connection. Read payload from data.* and do not expect resource fields at the top level. Select the next endpoint from instructions and confirm it with actions.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

En este punto, el agente hace una pausa sólo el tiempo suficiente para pedirle al usuario el código más reciente de su bandeja de entrada.

## Ejemplo: verificar el código y obtener la clave API

Después de que el usuario devuelve el código de correo electrónico, el agente puede finalizar el inicio de sesión:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code": "12345678",
    "otpSessionToken": "...",
    "label": "Claude Code on MacBook"
  }'
```

La verificación exitosa devuelve una clave API de larga duración más las instrucciones del siguiente paso:

```json
{
  "ok": true,
  "data": {
    "apiKey": "fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS",
    "authorizationScheme": "ApiKey",
    "apiBaseUrl": "https://api.flashcards-open-source-app.com/v1",
    "connection": {
      "connectionId": "connection-1",
      "label": "codex-import-bot",
      "createdAt": "2026-03-11T08:55:00.000Z",
      "lastUsedAt": null,
      "revokedAt": null
    }
  },
  "instructions": "Store this API key outside chat memory now. Use it in the Authorization header as 'ApiKey <key>'. Next call GET /v1/agent/me to load account context. Then call GET /v1/agent/workspaces?limit=100. If exactly one workspace exists, select it if needed. If no workspace exists, create one with POST /v1/agent/workspaces using {\"name\":\"Personal\"}. After a workspace is selected, use POST /v1/agent/sql for all data access. Use docs.openapiUrl for the full contract.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

Ese es el punto de transferencia donde el agente deja de pensar en la autenticación y comienza a usar la cuenta.

Guarde esa clave fuera de la memoria del chat de inmediato. El patrón más limpio es exportarlo una vez y dejar que su agente lo reutilice:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

## Ejemplo: cargar cuenta y continuar a espacios de trabajo

La siguiente solicitud es una llamada API autenticada normal:

```bash
curl https://api.flashcards-open-source-app.com/v1/agent/me \
  -H "Authorization: ApiKey YOUR_API_KEY"
```

La respuesta le dice al agente que continúe con el arranque del espacio de trabajo:

```json
{
  "ok": true,
  "data": {
    "userId": "user-123",
    "selectedWorkspaceId": null,
    "authTransport": "api_key",
    "profile": {
      "email": "you@example.com",
      "locale": "en",
      "createdAt": "2026-03-10T12:00:00.000Z"
    }
  },
  "instructions": "Next call GET https://api.flashcards-open-source-app.com/v1/agent/workspaces?limit=100 to inspect available workspaces for this API key. If data.nextCursor is not null, continue with the same endpoint and cursor=data.nextCursor until it becomes null. If no workspace is selected, call POST https://api.flashcards-open-source-app.com/v1/agent/workspaces/{workspaceId}/select. If no workspace exists, create one with POST https://api.flashcards-open-source-app.com/v1/agent/workspaces using {\"name\":\"Personal\"}. After a workspace is selected, use POST https://api.flashcards-open-source-app.com/v1/agent/sql for reads, writes, and SQL introspection. Read payload from data.* and use docs.openapiUrl for the full contract.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

Desde allí el agente puede:

- cargar todos los espacios de trabajo
- crear el primer espacio de trabajo si no existe ninguno
- seleccione el espacio de trabajo correcto si existen varios
- inspeccionar el contrato publicado en `/v1/agent/openapi.json`
- use `POST /v1/agent/sql` para lecturas, escrituras e introspección SQL

Eso hace que el flujo de inicio de sesión sea útil en la práctica, no sólo técnicamente correcto.

Los alias de especificación raíz en `/v1/openapi.json` y `/v1/swagger.json` también existen, pero los enlaces de documentos específicos del agente apuntan intencionalmente a `/v1/agent/openapi.json` y `/v1/agent/swagger.json`.

## Por qué esto es mejor que la configuración manual de la clave API

El patrón habitual de incorporación de API sigue siendo incómodo:

- inicie sesión en el navegador
- configuración abierta
- crear un token manualmente
- cópialo en otra herramienta
- mantenga los documentos abiertos para que la herramienta sepa qué hacer a continuación

Este flujo elimina la mayor parte de eso.

El usuario acredita su identidad a través de OTP de correo electrónico. El servicio emite una clave API de larga duración directamente al agente. El mismo formato de respuesta sigue diciéndole al agente lo que viene a continuación.

Eso es más sencillo para el usuario y más fácil de automatizar.

## Esto es de código abierto

Flashcards es de código abierto, por lo que puedes inspeccionar todo el flujo en lugar de tratarlo como una caja negra.

- Repositorio: [github.com/kirill-markin/flashcards-open-source-app](https://github.com/kirill-markin/flashcards-open-source-app)
- Ruta de descubrimiento del agente: [apps/backend/src/agentDiscovery.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentDiscovery.ts)
- Ruta del código de envío del agente: [apps/auth/src/routes/agentSendCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentSendCode.ts)
- Ruta del código de verificación del agente: [apps/auth/src/routes/agentVerifyCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentVerifyCode.ts)
- Sobres de arranque de cuenta y espacio de trabajo: [apps/backend/src/agentSetup.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentSetup.ts)

Si le interesa la autenticación API de código abierto, el inicio de sesión OTP por correo electrónico o el diseño de incorporación de agentes, esos archivos son los que debe leer.

## Pruébalo

Si desea probar el flujo, proporcione a su agente esta URL:

`https://api.flashcards-open-source-app.com/v1/`

Luego deja que él se encargue del resto.

Enlaces útiles:

- [Sitio web de tarjetas didácticas](https://flashcards-open-source-app.com/)
- [Aplicación alojada](https://app.flashcards-open-source-app.com/)
- [Empezando](https://flashcards-open-source-app.com/docs/getting-started/)
- [repositorio de GitHub](https://github.com/kirill-markin/flashcards-open-source-app)

Si el producto es de código abierto y el flujo de autenticación es lo suficientemente limitado, "dejar que el agente se encargue" debería funcionar. Para eso es este flujo.
