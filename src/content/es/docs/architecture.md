---
title: Arquitectura
description: >-
  Descripción general del sistema, dominios públicos, clientes admitidos y el
  flujo de datos actual sin conexión.
---
## Descripción general del sistema

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Principios

1. Dominios públicos separados para `app`, `api` y `auth`
2. Postgres es la fuente de la verdad
3. El cliente iOS primero está fuera de línea con SQLite local más sincronización
4. La aplicación web, la aplicación de iOS y la superficie del agente externo comparten el mismo modelo de espacio de trabajo.
5. Los agentes externos comienzan desde `GET https://api.flashcards-open-source-app.com/v1/`

## Clientes admitidos

- Aplicación web en `app.flashcards-open-source-app.com`
- Aplicación iOS en el repositorio principal con almacenamiento SQLite local
- Aplicación de Android en Google Play
- Clientes de agentes externos a través de descubrimiento, arranque OTP y `Authorization: ApiKey`

## Modelo de datos

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Flujo de datos

### Web

1. El navegador inicia sesión a través de `auth.<domain>`.
2. La aplicación web carga datos del espacio de trabajo desde `api.<domain>`.
3. Las solicitudes de chat de IA pasan por `/chat/local-turn`.
4. Revisar los envíos y actualizar el estado del programador al escribir.

### iOS

1. La aplicación de iOS escribe primero localmente en SQLite.
2. Los cambios locales se ponen en cola en una bandeja de salida.
3. Sincronizar los cambios de carga a través de `/v1/workspaces/{workspaceId}/sync/push`.
4. Sincronizar descargas y actualizaciones remotas a través de `/v1/workspaces/{workspaceId}/sync/pull`.
5. La base de datos local aplica los cambios y avanza el cursor de sincronización.

### Agentes Externos

1. Los agentes comienzan con `GET /v1/`.
2. El arranque de OTP se ejecuta en `auth.<domain>`.
3. El agente recibe una clave API de larga duración.
4. El agente carga `/v1/agent/me`, enumera los espacios de trabajo, selecciona uno si es necesario y luego usa `/v1/agent/sql`.

## Programación

Flashcards utiliza FSRS como programador de revisiones.

Notas de implementación:

- El backend y iOS mantienen implementaciones de FSRS reflejadas
- la aplicación web refleja el contrato de datos de programación, pero no envía una tercera copia del programador
- La configuración del programador a nivel de espacio de trabajo incluye retención deseada, pasos de aprendizaje, pasos de reaprendizaje, intervalo máximo y confusión.
- la marca de tiempo de revisión real proviene de `reviewedAtClient`

Para obtener un contrato detallado, consulte [lógica de programación FSRS en el repositorio principal](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## autenticación

- OTP por correo electrónico a través de Cognito
- Cookies de sesión del navegador de dominio compartido para la aplicación web alojada
- Arranque del agente OTP en `auth.<domain>` con salida ApiKey de larga duración
- `AUTH_MODE=none` para el desarrollo local
- `AUTH_MODE=cognito` para autenticación similar a producción

## Forma de implementación

- `app.<domain>` -> NubeFront + S3
- `api.<domain>` -> API Gateway + motor Lambda
- `auth.<domain>` -> API Gateway + servicio de autenticación Lambda
- Postgres en AWS RDS

El dominio principal puede permanecer en un sitio de marketing independiente. Si está libre durante el arranque, la infraestructura puede redirigirlo temporalmente a `app.<domain>`.
