---
title: "Cómo dejar que Claude Code, Codex u OpenClaw inicien sesión en Flashcards por ti"
description: "Flashcards expone un flujo de acceso para agentes, de código abierto, basado en una única URL de descubrimiento, un OTP por correo electrónico y una clave API de larga duración. Dale a tu agente un enlace, reenvíale el código de 8 dígitos y deja que termine por sí solo la configuración de la cuenta y del espacio de trabajo."
date: "2026-03-10"
keywords:
  - "login en claude code"
  - "login en codex"
  - "api otp por correo electrónico"
  - "onboarding de agentes"
  - "app flashcards open source"
  - "autenticación api open source"
---

La mayoría de los flujos de inicio de sesión siguen dando por hecho que el humano hará a mano todo el trabajo de configuración.

Abre una página de inicio de sesión. Espera el código. Copia el token. Crea una clave API. Pégala en una herramienta. Explícale la documentación a tu agente. Repara la sesión cuando algo falle.

Ese es exactamente el tipo de trabajo que una herramienta debería hacer por ti.

En [Flashcards](https://flashcards-open-source-app.com/), ahora exponemos un flujo de acceso para agentes, de código abierto, que empieza desde una única URL de descubrimiento:

`https://api.flashcards-open-source-app.com/v1/`

Ese es el punto de entrada canónico. La misma carga de descubrimiento también está disponible en `https://api.flashcards-open-source-app.com/v1/agent`, pero el contrato actual empieza en `/v1/`.

Dale esa URL a Claude Code, Codex u OpenClaw. El agente puede inspeccionar el flujo, pedir el código del correo, verificarlo, guardar la clave API, cargar la cuenta y continuar por su cuenta con la configuración del espacio de trabajo.

La persona solo tiene que hacer dos cosas:

- compartir la dirección de correo electrónico
- reenviar el último código de 8 dígitos recibido por correo

Ese es el objetivo.

## Un solo enlace basta

El endpoint de descubrimiento devuelve en la misma respuesta la descripción del servicio, el modelo de autenticación, la primera acción y las instrucciones del siguiente paso.

Así que, en lugar de escribir un texto de incorporación distinto para cada herramienta, puedes limitarte a pasarle la URL al agente y dejar que siga las instrucciones que reciba.

```text
GET https://api.flashcards-open-source-app.com/v1/
```

A grandes rasgos, el agente aprende de inmediato cuatro cosas:

- que este es el servicio de Flashcards
- que tanto el inicio de sesión como el registro usan OTP por correo electrónico
- que una verificación correcta devuelve una clave API de larga duración
- que, después de iniciar sesión, el siguiente paso es inicializar la cuenta y el espacio de trabajo

## Cómo es el flujo

La secuencia es intencionadamente corta.

1. El agente llama al endpoint de descubrimiento.
2. El agente envía el correo del usuario a `send-code`.
3. Flashcards manda por correo el código de 8 dígitos y devuelve un `otpSessionToken`.
4. El agente le pide al usuario ese código más reciente.
5. El agente verifica el código y recibe una clave API de larga duración.
6. El agente llama a `/v1/agent/me` y `/v1/agent/workspaces`.
7. El agente crea o selecciona el espacio de trabajo correcto y luego sigue con `/v1/agent/sql`.

Esto importa porque el agente no se queda en un simple "inicio de sesión correcto". Puede seguir con el resto del flujo de configuración y pasar a lecturas y escrituras reales.

## Ejemplo de prompt para Claude Code o Codex

Esto basta.

Los siguientes prompts están en inglés a propósito, para que puedas copiarlos y pegarlos tal cual en la herramienta:

```text
Use this Flashcards discovery URL:
https://api.flashcards-open-source-app.com/v1/

Log in to my Flashcards account, load account context, and select or create the correct workspace.
Ask me only for the latest 8-digit email code when the flow requires it.
```

Después de eso, no necesitas explicar manualmente la secuencia de autenticación. El endpoint ya lo hace.

## Ejemplo de prompt para OpenClaw

La misma idea, un poco más explícita:

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

Y la respuesta está diseñada para que los agentes de terminal puedan seguir el flujo sin tener que adivinar nada:

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

## Ejemplo: enviar el código por correo

Una vez que el agente tiene el correo del usuario, empieza el paso del OTP:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{
    "email": "you@example.com"
  }'
```

El servidor envía el correo y devuelve una sesión de verificación de corta duración:

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

En este punto, el agente solo se detiene el tiempo justo para pedirle al usuario el código más reciente de su bandeja de entrada.

## Ejemplo: verificar el código y obtener la clave API

Cuando el usuario reenvía el código del correo, el agente ya puede terminar el inicio de sesión:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code": "12345678",
    "otpSessionToken": "...",
    "label": "Claude Code on MacBook"
  }'
```

Una verificación correcta devuelve una clave API de larga duración junto con las instrucciones del siguiente paso:

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

Ese es el punto en el que el agente deja de pensar en la autenticación y pasa a usar la cuenta.

Guarda esa clave fuera de la memoria del chat en cuanto la recibas. La forma más limpia de hacerlo es exportarla una vez y dejar que tu agente la reutilice:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

## Ejemplo: cargar la cuenta y seguir con los espacios de trabajo

La siguiente petición ya es una llamada autenticada normal a la API:

```bash
curl https://api.flashcards-open-source-app.com/v1/agent/me \
  -H "Authorization: ApiKey YOUR_API_KEY"
```

La respuesta le indica al agente que siga con la inicialización del espacio de trabajo:

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

A partir de ahí, el agente puede:

- cargar todos los espacios de trabajo
- crear el primer espacio de trabajo si no existe ninguno
- seleccionar el espacio de trabajo correcto si existen varios
- inspeccionar el contrato publicado en `/v1/agent/openapi.json`
- usar `POST /v1/agent/sql` para lecturas, escrituras e introspección SQL

Eso hace que el flujo de inicio de sesión sea útil en la práctica, no solo técnicamente correcto.

Los alias de la especificación raíz en `/v1/openapi.json` y `/v1/swagger.json` también existen, pero los enlaces de documentación específicos del agente apuntan intencionadamente a `/v1/agent/openapi.json` y `/v1/agent/swagger.json`.

## Por qué esto es mejor que configurar una clave API a mano

El proceso habitual de incorporación a una API sigue siendo incómodo:

- iniciar sesión en el navegador
- abrir ajustes
- crear manualmente un token
- copiarlo a otra herramienta
- dejar la documentación abierta para que la herramienta sepa qué hacer después

Este flujo elimina la mayor parte de todo eso.

El usuario demuestra su identidad mediante OTP por correo. El servicio emite una clave API de larga duración directamente al agente. Y el mismo formato de respuesta le sigue indicando al agente cuál es el siguiente paso.

Eso es más simple para el usuario y más fácil de automatizar.

## Esto es código abierto

Flashcards es de código abierto, así que puedes inspeccionar el flujo entero en lugar de tratarlo como una caja negra.

- Repositorio: [github.com/kirill-markin/flashcards-open-source-app](https://github.com/kirill-markin/flashcards-open-source-app)
- Ruta de descubrimiento del agente: [apps/backend/src/agentDiscovery.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentDiscovery.ts)
- Ruta `send-code` del agente: [apps/auth/src/routes/agentSendCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentSendCode.ts)
- Ruta `verify-code` del agente: [apps/auth/src/routes/agentVerifyCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentVerifyCode.ts)
- Respuestas de arranque de cuenta y espacio de trabajo: [apps/backend/src/agentSetup.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentSetup.ts)

Si te interesa la autenticación de código abierto para APIs, el inicio de sesión con OTP por correo o el diseño de incorporación para agentes, esos son los archivos que merece la pena leer.

## Pruébalo

Si quieres probar el flujo, dale a tu agente esta URL:

`https://api.flashcards-open-source-app.com/v1/`

Y deja que se encargue del resto.

Enlaces útiles:

- [Sitio web de Flashcards](https://flashcards-open-source-app.com/)
- [Aplicación alojada](https://app.flashcards-open-source-app.com/)
- [Primeros pasos](https://flashcards-open-source-app.com/docs/getting-started/)
- [Repositorio en GitHub](https://github.com/kirill-markin/flashcards-open-source-app)

Si el producto es de código abierto y el flujo de autenticación es lo bastante acotado, "deja que lo gestione el agente" debería funcionar de verdad. Para eso existe este flujo.
