---
title: Empezando
description: >-
  Comience con la aplicación web alojada, conecte un agente a través de la URL
  de descubrimiento o ejecute la pila local usted mismo.
---
## Aplicación web alojada

La forma más rápida de comenzar es la aplicación web alojada:

1. Abra [app.flashcards-open-source-app.com](https://app.flashcards-open-source-app.com)
2. Inicie sesión con su correo electrónico utilizando OTP sin contraseña
3. Cree tarjetas, revise los elementos pendientes y utilice el chat de IA con datos del espacio de trabajo y archivos adjuntos.

No se requiere instalación ni configuración del servidor para la ruta alojada.

## Configuración del agente

Si desea que Claude Code, Codex u OpenClaw se conecten directamente, comience desde:

```text
GET https://api.flashcards-open-source-app.com/v1/
```

Esa respuesta de descubrimiento guía al agente a través del inicio de sesión OTP por correo electrónico, la creación de claves API de larga duración, la carga de cuentas, el arranque del espacio de trabajo y la superficie SQL publicada.

La misma carga útil también está disponible en `GET /v1/agent`, pero `/v1/` es el punto de entrada público canónico.

## Autohospedado

Si prefiere ejecutar su propia instancia, consulte la [Guía de autohospedaje](/docs/self-hosting/).

## Lo que obtienes hoy

- Aplicación web alojada para tarjetas, reseñas y chat de IA
- Cliente iOS en el repositorio principal con SQLite local y sincronización sin conexión
- Servicios de autenticación y backend compartidos en dominios `api` y `auth` separados
- Incorporación de agentes externos a través de descubrimiento, OTP y autenticación ApiKey
- Ruta de implementación de código abierto en AWS con Postgres como fuente de verdad

## Dirección del repositorio

El proyecto está fuera de línea primero.

Actualmente, el repositorio incluye la aplicación web, la aplicación de iOS, el servicio de autenticación, la API de backend, el flujo de agente externo y la aplicación de Android publicada en Google Play.
