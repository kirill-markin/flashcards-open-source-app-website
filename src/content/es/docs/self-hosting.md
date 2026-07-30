---
title: Guía de autoalojamiento
description: Ejecuta Flashcards en local con PostgreSQL, autenticación, backend, web y administración, o despliega la pila de producción documentada con AWS CDK.
---

Flashcards admite dos rutas diferentes: un entorno de desarrollo local y un despliegue de producción en AWS. Docker Compose ejecuta PostgreSQL y las migraciones para el desarrollo local; no es el método de despliegue en producción.

## Requisitos para el desarrollo local

- Git
- Bash
- GNU Make
- Docker con Docker Compose
- Node.js 24
- npm

El archivo de Docker Compose incluido ejecuta actualmente PostgreSQL 18.4. No necesitas instalar PostgreSQL por separado en local.

## Inicio rápido en local

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

`make db-up` inicia PostgreSQL y ejecuta `scripts/deploy/migrate.sh` mediante el contenedor de migración. Con las contraseñas predeterminadas copiadas de `.env.example`, la migración configura estas conexiones locales para los procesos en ejecución:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- autenticación: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- informes: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Si cambias `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` o `REPORTING_DB_PASSWORD` en `.env`, usa la misma contraseña nueva en la URL de conexión correspondiente.

### Inicio rápido solo en local

El objetivo de Make para el backend no carga el archivo `.env` de la raíz. Pasa de forma explícita la configuración local que necesita:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Ejecuta los clientes en terminales independientes:

```bash
make web-dev
make admin-dev
```

Esta ruta no inicia deliberadamente `make auth-dev`. `AUTH_MODE=none` es un modo expresamente no seguro y exclusivo para localhost; no lo uses nunca en un entorno desplegado.
Cubre el desarrollo del backend principal, el descubrimiento público de la API para agentes, la web y la aplicación de administración, pero no habilita Chat V2.

### Flujo local completo con Cognito

El objetivo de autenticación carga el archivo `.env` de la raíz, mientras que el objetivo del backend no lo hace. Primero sustituye el valor heredado de `DATABASE_URL` en el archivo `.env` copiado por la URL del rol de autenticación y añade tus valores reales de Cognito:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Inicia la autenticación:

```bash
make auth-dev
```

En la terminal del backend, carga `.env` de forma explícita y después sustituye su URL de base de datos de autenticación por la URL del rol del backend para ese proceso:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Ejecuta `make web-dev` y `make admin-dev` en sus propias terminales. Ambos objetivos cargan el archivo `.env` de la raíz.

Los servicios usan estas direcciones locales:

| Servicio | Dirección |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Autenticación, cuando está configurada | `http://localhost:8081` |
| API backend | `http://localhost:8080/v1` |
| Aplicación web | `http://localhost:3000` |
| Aplicación de administración | `http://localhost:3001` |

Detén PostgreSQL y el contenedor de migración con:

```bash
make db-down
```

## Configuración local

Empieza por `.env.example`, que documenta las variables disponibles y qué valores son solo para uso local. Sustituye su valor heredado de `DATABASE_URL` antes de ejecutar la autenticación, como se muestra arriba.

Los principales ajustes locales son:

- `MIGRATION_DATABASE_URL` para las migraciones del esquema dentro de Docker
- `DATABASE_URL` con el rol `auth_app` en el archivo `.env` de la raíz para `make auth-dev`
- `DATABASE_URL` pasada con el rol `backend_app` para `make backend-dev`
- `AUTH_MODE` y `ALLOW_INSECURE_LOCAL_AUTH` para la autenticación del backend
- `BACKEND_ALLOWED_ORIGINS` para los orígenes de la web y la aplicación de administración locales
- `ALLOWED_REDIRECT_URIS` y `COOKIE_DOMAIN` para la autenticación en el navegador
- los valores de Cognito y del cifrado de sesiones cuando pruebes códigos de un solo uso reales

La API para agentes forma parte del backend. Su documento público de descubrimiento local está disponible en `http://localhost:8080/v1/agent` una vez iniciado el backend. Las operaciones protegidas para agentes requieren autenticación `ApiKey` y no están disponibles con la ruta `AUTH_MODE=none`.

### Alcance de la IA según la ruta

Los comandos locales anteriores no inician el proceso asíncrono del chat. La ruta rápida también usa `AUTH_MODE=none`, que Chat V2 rechaza; añadir una clave de OpenAI o una cuota para invitados no dota de IA a esa ruta. El flujo local completo con Cognito proporciona un transporte de autenticación compatible, pero tampoco inicia ese proceso.

El despliegue con AWS CDK crea la función Lambda del proceso asíncrono y configura el backend para invocarla. Las credenciales del proveedor, como `OPENAI_API_KEY`, habilitan las llamadas a modelos para las solicitudes autenticadas compatibles. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` habilita y limita por separado la IA para invitados; no controla la IA de usuarios que han iniciado sesión o se autentican mediante un token de tipo bearer. Los ajustes de Langfuse son una configuración opcional de seguimiento.

## Clientes nativos

El mismo repositorio contiene los clientes para iOS y Android, pero los comandos locales para web y servidor no los compilan ni distribuyen.

El proyecto de iOS lee los hosts locales de la API y la autenticación de:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Créalo a partir del ejemplo cuando lo necesites:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Consulta el [README de iOS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) y el [README de Android](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) del repositorio para conocer sus flujos independientes de compilación y pruebas.

## Producción usa AWS CDK

El despliegue de producción compatible es la pila de AWS CDK incluida. Está basada en AWS, no es independiente del proveedor, e incluye:

- una VPC y subredes privadas
- PostgreSQL 18 en Amazon RDS
- códigos de un solo uso por correo electrónico sin contraseña mediante Amazon Cognito
- API Gateway y Lambda para los servicios de backend, autenticación y MCP
- una función Lambda para el proceso asíncrono del chat y otra para el remitente de correo personalizado de Cognito
- S3 y CloudFront para las aplicaciones web y de administración
- Secrets Manager para la base de datos, las sesiones, el correo electrónico, la monitorización y las credenciales opcionales de IA
- alarmas de CloudWatch, notificaciones de SNS y un plan de copias de seguridad de RDS
- un rol de despliegue OIDC para GitHub Actions
- scripts de configuración de Cloudflare para los dominios públicos

El despliegue expone `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` y `mcp.<domain>`. También puede crear una redirección del dominio raíz cuando este no se usa para otra cosa.

Ejecuta el asistente de producción desde un equipo de operador que tenga:

- Node.js 24 y npm
- Bash y GNU Make
- Docker en ejecución
- la CLI de AWS autenticada en la cuenta de despliegue
- la CLI de GitHub autenticada en el repositorio de destino
- `curl`, `jq` y Python 3

Antes de desplegar, configura los valores del operador en el archivo `.env` de la raíz. Los valores obligatorios incluyen la región de AWS, el dominio, el correo electrónico para alertas, el repositorio de GitHub, las credenciales de Cloudflare y Resend, y la configuración de Sentry para el backend. Las credenciales de OpenAI y Langfuse son opcionales.

El comando recomendado para el primer despliegue desde la raíz del repositorio es:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

La instalación explícita de autenticación es necesaria actualmente en una copia limpia porque el asistente de despliegue empaqueta ese módulo, pero no instala sus dependencias. El asistente crea o modifica recursos reales de AWS, Cloudflare y GitHub. Revisa la documentación de despliegue del repositorio y los costes de la nube antes de ejecutarlo. Inicializa CDK, despliega la infraestructura, ejecuta las migraciones, sube los recursos de las aplicaciones web y de administración, configura los registros DNS públicos `app`, `admin`, `api`, `auth` y `mcp` salvo que se omitan, y completa la configuración que falte de GitHub Actions.

Después del despliegue:

1. Confirma la suscripción de SNS enviada al buzón de `ALERT_EMAIL`.
2. Configura y verifica por separado los registros DNS del dominio de envío de Resend:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` ejecuta de forma predeterminada `scripts/cloudflare/setup-dns.sh` para los dominios públicos de la aplicación. No ejecuta `setup-resend-domain.sh`; este último crea los registros del remitente de correo para `mail.<domain>` y verifica ese dominio con Resend. Si despliegas con `--skip-dns`, configura los registros públicos por separado tal como se documenta en la guía de AWS CDK.

## Portabilidad de datos

La importación y exportación de paquetes de espacios de trabajo solo transfiere las tarjetas, sus etiquetas y el contenido multimedia relacionado. No transfiere el historial de repasos, el estado del planificador FSRS, la configuración del espacio de trabajo, las estructuras completas de los mazos ni los datos de la cuenta.

Considera los paquetes una forma de transferir contenido, no una migración completa entre el servicio alojado y una instalación propia ni una copia de seguridad para recuperación ante desastres. Quien gestiona la instalación es responsable de realizar copias de seguridad y restaurar la base de datos PostgreSQL y el almacenamiento multimedia desplegados.

## Responsabilidades del operador

El autoalojamiento implica que debes proporcionar y mantener:

- la infraestructura de AWS y sus costes
- la configuración del dominio y el DNS de Cloudflare
- las credenciales de Resend para el envío de correo y los registros del dominio
- la configuración obligatoria de monitorización de Sentry
- las credenciales opcionales del proveedor de IA y de Langfuse
- los secretos, las actualizaciones, las migraciones, las alertas, las copias de seguridad y las pruebas de restauración
- las compilaciones y la distribución de las aplicaciones móviles nativas si quieres publicar tus propias versiones para iOS o Android

La pila automatiza muchos de estos sistemas, pero sigue necesitando una persona que los gestione. Docker Compose no sustituye esta arquitectura de producción.

## Documentación de despliegue del repositorio

- [README del repositorio](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Guía de despliegue del backend y la web](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Guía de despliegue de AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [Infraestructura de AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
