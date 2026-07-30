---
title: "Aplicación de tarjetas de código abierto y autoalojada para repetición espaciada"
description: "Aloja por tu cuenta la pila de código abierto de Flashcards en local para desarrollo o despliega en AWS su infraestructura de producción documentada con CDK."
date: "2026-03-08"
updated: "2026-07-30"
image: "/home/app-screens-showcase-es.png"
keywords:
  - "aplicación de tarjetas de código abierto"
  - "aplicación de tarjetas autoalojada"
  - "aplicación de repetición espaciada"
  - "alternativa a Anki"
  - "alternativa a Quizlet"
  - "tarjetas con IA"
---

Sí, Flashcards se puede autoalojar. Todo el código de la aplicación y de la infraestructura es de código abierto y se distribuye bajo la licencia MIT. Puedes ejecutar los servicios en local para desarrollo o desplegar en AWS la pila de producción documentada del repositorio. Si no quieres gestionar infraestructura, la [aplicación alojada](https://app.flashcards-open-source-app.com/) sigue estando disponible.

![Pantallas móviles de Flashcards Open Source App para repaso, progreso, chat con IA y tarjetas](/home/app-screens-showcase-es.png)

## Qué se puede autoalojar

El repositorio contiene los servicios y la infraestructura del sistema principal de Flashcards:

- la aplicación web y la aplicación de administración
- la API del backend y el servicio de autenticación sin contraseña
- el esquema de PostgreSQL, las migraciones, la sincronización y la programación de repasos basada en FSRS
- el servidor MCP y la API para agentes
- la pila de AWS CDK para redes, base de datos, autenticación, API, alojamiento web estático, secretos, copias de seguridad, monitorización y CI/CD

También incluye clientes nativos para iOS y Android. Estas aplicaciones se compilan por separado; desplegar la pila de AWS no publica por ti tus propias versiones en la App Store ni en Google Play.

Hay dos formas compatibles de ejecutar la pila del servidor:

1. **Desarrollo local:** Docker Compose ejecuta PostgreSQL y la tarea de migración. Los scripts del repositorio ejecutan en el host los servidores de desarrollo de autenticación, backend, web y administración.
2. **Producción en AWS:** la pila de CDK incluida despliega la arquitectura de AWS documentada y conecta sus dominios públicos mediante Cloudflare.

Docker Compose no es un despliegue de producción con un solo comando. La ruta de producción es específica para AWS y el proyecto no afirma que su infraestructura sea independiente del proveedor.

## Qué incluye ahora el repositorio

Esto es más que un editor de tarjetas independiente. El repositorio actual incluye:

- un cliente web en React y un cliente de administración
- clientes nativos para iOS con SwiftUI y para Android con Jetpack Compose
- almacenamiento local con prioridad para el uso sin conexión y sincronización para los clientes de usuario
- tarjetas con anverso y reverso, etiquetas, contenido multimedia relacionado y repaso con FSRS
- códigos de un solo uso por correo electrónico sin contraseña mediante Amazon Cognito y el servicio de autenticación
- chat con IA respaldado por un proceso asíncrono desplegado y credenciales de modelos proporcionadas por el operador
- un punto de conexión MCP para clientes de IA compatibles
- una API para agentes destinada a herramientas de terminal y otros flujos de trabajo automatizados

La [documentación de arquitectura](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/architecture.md) es la mejor fuente para conocer los límites actuales de los servicios. La [guía de la API](/docs/api/) pública explica el punto de entrada de la API para agentes alojada.

## Aplicación alojada frente a despliegue autoalojado

| Área | Aplicación alojada | Despliegue autoalojado |
| --- | --- | --- |
| Configuración inicial | Abre la aplicación e inicia sesión | Configura cuentas, secretos y dominios, y despliega la pila de AWS |
| Infraestructura | Gestionada por el proyecto Flashcards | Gestionada en tus cuentas de AWS y Cloudflare |
| Base de datos y copias de seguridad | Gestionadas por el servicio | RDS, la política de copias de seguridad, las migraciones y la recuperación son responsabilidad tuya |
| Autenticación y correo electrónico | Gestionados por el servicio | Cognito, junto con tus credenciales de envío de correo y el DNS |
| IA | Usa la configuración del servicio alojado | Usa el proceso asíncrono desplegado y tus credenciales de modelos; el acceso de invitados tiene una cuota independiente |
| Monitorización | Gestionada por el servicio | CloudWatch/SNS y tu configuración de Sentry |
| Actualizaciones | Distribuidas por el servicio alojado | Tú descargas, validas, despliegas y monitorizas las actualizaciones |
| Coste | Se aplican las condiciones del plan alojado | Pagas directamente los costes de AWS y de otros proveedores |

El autoalojamiento te da el control del despliegue y de la base de datos. También te hace responsable de las actualizaciones de seguridad, los secretos, la disponibilidad, las copias de seguridad, la entrega de correo, la monitorización y los costes de la nube.

## Requisitos e inicio rápido en local

El desarrollo local requiere actualmente Git, Bash, GNU Make, Docker con Docker Compose, Node.js 24 y npm. El archivo de Compose incluido ejecuta PostgreSQL 18.4 y aplica las migraciones de la base de datos.

Desde la raíz del repositorio:

```bash
git clone https://github.com/kirill-markin/flashcards-open-source-app.git
cd flashcards-open-source-app
cp .env.example .env
make db-up
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
npm install --prefix apps/admin
```

Para el inicio exclusivamente local más corto, ejecuta el backend con el rol creado por la migración y habilita de forma explícita la autenticación local no segura:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Después, ejecuta los clientes en terminales independientes:

```bash
make web-dev
make admin-dev
```

Esto no inicia deliberadamente el servicio de autenticación de Cognito. La [Guía de autoalojamiento](/docs/self-hosting/) explica las URL de base de datos separadas y los pasos para cargar las variables de entorno necesarios para un flujo completo con Cognito y `make auth-dev`. La aplicación web se ejecuta en `http://localhost:3000`, la aplicación de administración en `http://localhost:3001`, el backend en `http://localhost:8080/v1` y la autenticación con Cognito, cuando está configurada, en `http://localhost:8081`.

Este inicio rápido cubre el desarrollo del backend principal, la web y la aplicación de administración. No habilita Chat V2: esas rutas no aceptan el transporte `AUTH_MODE=none` y los comandos locales no inician el proceso asíncrono del chat.

Para producción, usa el flujo de primer despliegue del repositorio en lugar de Docker Compose:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

La instalación explícita de autenticación es necesaria actualmente en una copia limpia porque el asistente de despliegue empaqueta ese módulo, pero no instala sus dependencias. A continuación, el asistente crea y actualiza recursos reales en la nube. Lee la [guía de despliegue del backend y la web](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md) y la [guía de despliegue de AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md) antes de ejecutarlo.

## La portabilidad de datos es útil, pero deliberadamente limitada

La importación y exportación de paquetes de Flashcards abarca las tarjetas, sus etiquetas y el contenido multimedia relacionado. **No** transfiere el historial de repasos, el estado del planificador FSRS, la configuración del espacio de trabajo, las estructuras completas de los mazos ni los datos de la cuenta.

Esta diferencia importa si vas a pasar del servicio alojado a tu propio despliegue o viceversa. El paquete portable permite transferir contenido, pero no constituye una migración completa de la base de datos ni de la cuenta. Para disponer de una copia de seguridad operativa completa, quien gestione una instalación autoalojada también debe ocuparse de la base de datos PostgreSQL y del almacenamiento multimedia creados por la pila de AWS.

## IA y credenciales de servicios externos

El código fuente no incluye cuentas en la nube, créditos para modelos ni credenciales de producción. Quien gestione una instalación autoalojada debe proporcionar la configuración correspondiente:

- credenciales y una cuenta de AWS para la pila de CDK
- un dominio y credenciales de Cloudflare para la configuración de DNS documentada
- credenciales de Resend para el envío de correo electrónico
- configuración de Sentry para la monitorización obligatoria del backend
- credenciales opcionales de OpenAI y Langfuse para la IA y el seguimiento
- configuración de GitHub para el flujo de despliegue incluido

La IA es opcional en el despliegue de AWS. La pila de CDK despliega el proceso asíncrono del chat y las credenciales de modelos habilitan las solicitudes de IA autenticadas compatibles. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` controla por separado el uso de IA de los invitados; no es un interruptor global para la IA de usuarios que han iniciado sesión o se autentican mediante un token de tipo bearer. Si conectas MCP u otro cliente de IA externo, los datos de las tarjetas incluidos en una solicitud pueden ser procesados por ese proveedor externo según sus propias condiciones; autoalojar la base de datos no mantiene esas solicitudes dentro de tu infraestructura.

## Limitaciones operativas y de una beta real

Flashcards sigue siendo un producto en una fase temprana. El repositorio está activo, las migraciones y la configuración de despliegue pueden cambiar, y el autoalojamiento presupone que sabes gestionar una aplicación en AWS.

La pila de CDK incluye copias de seguridad, alarmas, secretos y automatización del despliegue, pero esos componentes siguen necesitando una persona responsable. Deberías contar con estas tareas:

- revisar los cambios de infraestructura antes de desplegarlos
- monitorizar las versiones y las comprobaciones de puntos de conexión públicos
- confirmar las suscripciones a alertas y el DNS del dominio de correo
- proteger y rotar las credenciales
- probar las restauraciones y planificar los costes de AWS
- compilar y distribuir las aplicaciones móviles nativas por separado si quieres publicar tus propias versiones

Si este trabajo operativo no te resulta útil, la aplicación alojada es la opción más sencilla.

## Breve comparación con Anki y Quizlet

Anki es una opción madura de código abierto con un gran ecosistema y flujos de trabajo sólidos en el escritorio. Quizlet es un servicio de consumo gestionado que ofrece una experiencia de estudio con poca configuración. Ambos pueden ser la elección adecuada según prefieras una herramienta local consolidada o una plataforma completamente gestionada.

Flashcards sigue otro camino: un repositorio abierto para web, aplicaciones móviles, API e infraestructura, construido alrededor de FSRS, la sincronización, los flujos de trabajo con IA, MCP y una opción de autoalojamiento en AWS. Es más joven que Anki y, cuando se autoaloja, requiere bastante más trabajo operativo que Quizlet. La razón para elegirlo es que esta combinación se ajuste a tus necesidades, no que toda persona que estudie deba gestionar una pila en la nube.

## Prueba la aplicación alojada o ejecuta tu propia pila

- [Abrir la aplicación alojada](https://app.flashcards-open-source-app.com/)
- [Leer la Guía de autoalojamiento](/docs/self-hosting/)
- [Ver el código fuente en GitHub](https://github.com/kirill-markin/flashcards-open-source-app)

Usa la versión alojada si quieres estudiar sin mantener infraestructura. Usa la opción autoalojada si el control del despliegue compensa el trabajo que suponen AWS, DNS, correo electrónico, monitorización y actualizaciones.
