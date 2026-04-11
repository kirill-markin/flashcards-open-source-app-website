---
title: Guía de autohospedaje
description: >-
  Ejecute Flashcards localmente con Postgres, autenticación, backend y web, o
  implemente usted mismo la pila de AWS documentada.
---
## Requisitos

- acoplador
- Nodo.js 20+
- mpn
- PostgreSQL 16+ a través de la configuración de Docker proporcionada

## Inicio rápido

```bash
git clone https://github.com/kirill-markin/flashcards-open-source-app.git
cd flashcards-open-source-app
cp .env.example .env
make db-up
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

Luego ejecute los servicios en terminales separadas:

```bash
make auth-dev
make backend-dev
make web-dev
```

Esto comienza:

1. `postgres` en el puerto `5432`
2. `auth` en el puerto `8081`
3. `backend` en el puerto `8080`
4. `web` en el puerto `3000`

URL locales:

- `http://localhost:3000` para la aplicación web
- `http://localhost:8080/v1` para la API de backend
- `http://localhost:8081` para el servicio de autenticación

## Configuración

Copia `.env.example` a `.env` y ajusta:

- `DATABASE_URL` — Cadena de conexión de Postgres
- `AUTH_MODE` — `none` para uso local, `cognito` para autenticación OTP de correo electrónico
- `BACKEND_ALLOWED_ORIGINS` — orígenes de navegador permitidos para solicitudes de API autenticadas por sesión
- `PUBLIC_API_BASE_URL` y `PUBLIC_AUTH_BASE_URL`: anulaciones opcionales cuando desea que las respuestas de descubrimiento anuncien hosts públicos personalizados

## Configuración local de iOS

La aplicación de iOS en el repositorio principal lee su API local y sus hosts de autenticación desde:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Copie el archivo de ejemplo si es necesario:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Luego, apúntelo a sus dominios `api` y `auth` locales o autohospedados.

## Actualizando

```bash
git pull
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

Reinicie los servicios locales después de los cambios de dependencia.

## Implementación de AWS

La forma de producción documentada es:

- CloudFront + S3 para `app.<domain>`
- API Gateway + Lambda para `api.<domain>`
- API Gateway + Lambda para `auth.<domain>`
- Postgres en AWS RDS
- Cognito para OTP de correo electrónico sin contraseña
- redirección de ápice opcional cuando el dominio raíz no se utiliza

Para obtener detalles sobre la implementación, consulte:

- [Repositorio README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Guía de implementación](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/deployment.md)
- [Infraestructura de AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
