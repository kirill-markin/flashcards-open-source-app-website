---
title: Empezando
description: >-
  Comience con la aplicación para iPhone, iPad, Mac o Android, la aplicación
  web, un agente de IA o su propio servidor.
---
Hay varias formas de comenzar, ordenadas de más a menos populares:

- **Aplicación para iPhone, iPad y Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Aplicación para Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Aplicación web alojada**: [app.nibomo.com](https://app.nibomo.com)
- **Agentes de IA**: el [conector MCP](/docs/mcp-connector/) o la API en `https://api.nibomo.com/v1/`
- **Autoalojamiento**: la [Guía de autoalojamiento](/docs/self-hosting/)

## Aplicaciones para móvil y escritorio

Instale la aplicación nativa para su dispositivo:

- iPhone, iPad y Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Las aplicaciones guardan sus tarjetas en el dispositivo, así que puede repasar sin conexión, y se sincronizan cuando vuelve a estar en línea. Puede empezar como invitado e iniciar sesión más tarde.

### Widgets de la pantalla de inicio

La aplicación Nibomo añade el widget Repasar a iPhone, iPad, Mac y Android. Está disponible en tres tamaños:

- **Pequeño**: cuántas tarjetas tiene pendientes y su racha de estudio
- **Mediano**: cuántas tarjetas tiene pendientes y la pregunta de su siguiente tarjeta
- **Grande**: cuántas tarjetas tiene pendientes, su siguiente pregunta y su racha

Cuando no hay nada pendiente, el widget muestra «Todo al día» y cuándo toca la siguiente tarjeta. Nunca muestra una respuesta. Toque el widget para abrir Repasar; un widget mediano o grande abre Repasar directamente en la tarjeta que muestra. Los widgets son gratuitos para todos, incluidos los invitados.

Otros ocho widgets muestran su progreso: «Actividad», «Año», «Hoy», «Repasos», «Rachas», «Calendario», «Próximos» y «Panel». En iPhone y iPad, también puede poner el widget «Tarjetas pendientes» en la pantalla bloqueada, y la [guía de widgets](/blog/flashcard-widget/) los muestra todos.

Para añadir uno en iPhone, iPad o Mac, abra la galería de widgets, elija Nibomo y seleccione un tamaño. En Android, añada un widget de Nibomo desde la lista de widgets y luego cambie su tamaño; el diseño se adapta al tamaño.

## Aplicación web alojada

La forma más rápida de comenzar es la aplicación web alojada:

1. Abra [app.nibomo.com](https://app.nibomo.com)
2. Inicie sesión con su correo electrónico utilizando OTP sin contraseña
3. Cree tarjetas, revise los elementos pendientes y utilice el chat de IA con datos del espacio de trabajo y archivos adjuntos.

No se requiere instalación ni configuración del servidor para la ruta alojada.

## Configuración del agente

Los clientes MCP como Claude, ChatGPT y Cursor pueden conectarse mediante la [guía del conector MCP](/docs/mcp-connector/).

Si desea que Claude Code, Codex u OpenClaw se conecten directamente, comience desde:

```text
GET https://api.nibomo.com/v1/
```

Esa respuesta de descubrimiento guía al agente a través del inicio de sesión OTP por correo electrónico, la creación de claves API de larga duración, la carga de cuentas, el arranque del espacio de trabajo y la superficie SQL publicada.

La misma carga útil también está disponible en `GET /v1/agent`, pero `/v1/` es el punto de entrada público canónico.

## Autohospedado

Si prefiere ejecutar su propia instancia, consulte la [Guía de autoalojamiento](/docs/self-hosting/).

## Lo que obtienes hoy

- Aplicación web alojada para tarjetas, reseñas y chat de IA
- Aplicaciones nativas para iPhone, iPad, Mac y Android con almacenamiento SQLite local y sincronización que prioriza el uso sin conexión
- Servicios de autenticación y backend compartidos en dominios `api` y `auth` separados
- Incorporación de agentes externos a través de descubrimiento, OTP y autenticación ApiKey
- Ruta de implementación de código abierto en AWS con Postgres como fuente de verdad

## Dirección del repositorio

El proyecto está fuera de línea primero.

Actualmente, el repositorio incluye la aplicación web, la aplicación de iOS, el servicio de autenticación, la API de backend, el flujo de agente externo y la aplicación de Android publicada en Google Play.
