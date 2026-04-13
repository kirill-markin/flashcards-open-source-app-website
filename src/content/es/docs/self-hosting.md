---
title: Guía de autoalojamiento
description: >-
  Ejecuta Flashcards en local con Postgres, autenticación, backend y web, o
  despliega por tu cuenta la arquitectura de AWS documentada.
---
## Requisitos

- Docker
- Node.js 20+
- npm
- PostgreSQL 16+ mediante la configuración de Docker incluida

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

Después, arranca los servicios en terminales independientes:

```bash
make auth-dev
make backend-dev
make web-dev
```

Esto pone en marcha:

1. `postgres` en el puerto `5432`
2. `auth` en el puerto `8081`
3. `backend` en el puerto `8080`
4. `web` en el puerto `3000`

URL locales:

- `http://localhost:3000` para la aplicación web
- `http://localhost:8080/v1` para la API del backend
- `http://localhost:8081` para el servicio de autenticación

## Configuración

Copia `.env.example` a `.env` y ajusta estos valores:

- `DATABASE_URL` — cadena de conexión de Postgres
- `AUTH_MODE` — `none` para uso local, `cognito` para autenticación OTP por correo electrónico
- `BACKEND_ALLOWED_ORIGINS` — orígenes del navegador permitidos para solicitudes a la API autenticadas mediante sesión
- `PUBLIC_API_BASE_URL` y `PUBLIC_AUTH_BASE_URL` — sobrescrituras opcionales si quieres que las respuestas de descubrimiento anuncien hosts públicos personalizados

## Configuración local de iOS

La aplicación para iOS del repositorio principal toma los hosts locales de la API y del servicio de autenticación de:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Si hace falta, copia el archivo de ejemplo:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Después, configura en ese archivo los dominios `api` y `auth`, ya sean locales o autoalojados.

## Actualización

```bash
git pull
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

Reinicia los servicios locales después de actualizar dependencias.

## Despliegue en AWS

La arquitectura de producción documentada es:

- CloudFront + S3 para `app.<domain>`
- API Gateway + Lambda para `api.<domain>`
- API Gateway + Lambda para `auth.<domain>`
- Postgres en AWS RDS
- Cognito para OTP por correo electrónico sin contraseña
- Redirección opcional del dominio raíz cuando ese dominio no se use para otra cosa

Para ver los detalles del despliegue, consulta:

- [README del repositorio](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Guía de despliegue](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/deployment.md)
- [Infraestructura de AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
