---
title: Руководство по self-hosting
description: Запустите Flashcards локально с Postgres, auth, backend и web или разверните documented AWS stack самостоятельно.
---

## Requirements

- Docker
- Node.js 20+
- npm
- PostgreSQL 16+ через bundled Docker setup

## Quick Start

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

Затем запустите services в отдельных terminal windows:

```bash
make auth-dev
make backend-dev
make web-dev
```

Это поднимет:

1. `postgres` on port `5432`
2. `auth` on port `8081`
3. `backend` on port `8080`
4. `web` on port `3000`

Local addresses:

- `http://localhost:3000` for the web app
- `http://localhost:8080/v1` for the backend API
- `http://localhost:8081` for the auth service

## Configuration

Скопируйте `.env.example` в `.env` и настройте:

- `DATABASE_URL` — строка подключения к Postgres
- `AUTH_MODE` — `none` локально и `cognito` для email OTP auth
- `BACKEND_ALLOWED_ORIGINS` — allowed origins для session-backed API requests
- `PUBLIC_API_BASE_URL` и `PUBLIC_AUTH_BASE_URL` — optional overrides, если вы хотите возвращать в discovery responses собственные public hosts

## Local iOS Setup

iOS app в основном repository читает local API и auth hosts из:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

При необходимости скопируйте example file:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

После этого укажите local или self-hosted `api` и `auth` domains.

## Updating

```bash
git pull
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

После dependency changes перезапустите local services.

## AWS Deployment

Documented production shape:

- CloudFront + S3 for `app.<domain>`
- API Gateway + Lambda for `api.<domain>`
- API Gateway + Lambda for `auth.<domain>`
- Postgres on AWS RDS
- Cognito for passwordless email auth
- Optional apex redirect when the root domain is unused

Подробности:

- [Repository README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Deployment guide](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/deployment.md)
- [AWS CDK infrastructure](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
