---
title: Self-Hosting Guide
description: Run Flashcards locally with Postgres, auth, backend, and web, or deploy the documented AWS stack yourself.
---

## Requirements

- Docker
- Node.js 20+
- npm
- PostgreSQL 16+ via the provided Docker setup

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

Then run the services in separate terminals:

```bash
make auth-dev
make backend-dev
make web-dev
```

This starts:

1. `postgres` on port `5432`
2. `auth` on port `8081`
3. `backend` on port `8080`
4. `web` on port `3000`

Local URLs:

- `http://localhost:3000` for the web app
- `http://localhost:8080/v1` for the backend API
- `http://localhost:8081` for the auth service

## Configuration

Copy `.env.example` to `.env` and adjust:

- `DATABASE_URL` — Postgres connection string
- `AUTH_MODE` — `none` for local use, `cognito` for email OTP auth
- `BACKEND_ALLOWED_ORIGINS` — allowed browser origins for session-authenticated API requests
- `PUBLIC_API_BASE_URL` and `PUBLIC_AUTH_BASE_URL` — optional overrides when you want discovery responses to advertise custom public hosts

## iOS Local Config

The iOS app in the main repository reads its local API and auth hosts from:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Copy the example file if needed:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Then point it at your local or self-hosted `api` and `auth` domains.

## Updating

```bash
git pull
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

Restart the local services after dependency changes.

## AWS Deployment

The documented production shape is:

- CloudFront + S3 for `app.<domain>`
- API Gateway + Lambda for `api.<domain>`
- API Gateway + Lambda for `auth.<domain>`
- Postgres in AWS RDS
- Cognito for passwordless email OTP
- optional apex redirect when the root domain is otherwise unused

For the deployment details, see:

- [Repository README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Deployment guide](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/deployment.md)
- [AWS CDK infrastructure](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
