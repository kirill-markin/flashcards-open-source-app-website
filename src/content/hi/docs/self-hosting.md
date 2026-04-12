---
title: Self-Hosting Guide
description: Flashcards को Postgres, auth, backend, और web के साथ locally चलाएं, या documented AWS stack खुद deploy करें।
---

## Requirements

- Docker
- Node.js 20+
- npm
- Bundled Docker setup के जरिए PostgreSQL 16+

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

फिर services को अलग terminal windows में चलाएं:

```bash
make auth-dev
make backend-dev
make web-dev
```

इससे यह शुरू होगा:

1. `postgres` on port `5432`
2. `auth` on port `8081`
3. `backend` on port `8080`
4. `web` on port `3000`

Local addresses:

- `http://localhost:3000` for the web app
- `http://localhost:8080/v1` for the backend API
- `http://localhost:8081` for the auth service

## Configuration

`.env.example` को `.env` में copy करें और ये values set करें:

- `DATABASE_URL` — Postgres connection string
- `AUTH_MODE` — local के लिए `none`, email OTP auth के लिए `cognito`
- `BACKEND_ALLOWED_ORIGINS` — session-backed API requests के लिए allowed origins
- `PUBLIC_API_BASE_URL` और `PUBLIC_AUTH_BASE_URL` — जब discovery responses में custom public hosts दिखाने हों तब optional overrides

## Local iOS Setup

Main repository में iOS app local API और auth hosts यहां से पढ़ता है:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

जरूरत हो तो example file copy करें:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

फिर इसे अपने local या self-hosted `api` और `auth` domains की ओर point करें।

## Updating

```bash
git pull
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

Dependency changes के बाद local services restart करें।

## AWS Deployment

Documented production shape:

- CloudFront + S3 for `app.<domain>`
- API Gateway + Lambda for `api.<domain>`
- API Gateway + Lambda for `auth.<domain>`
- Postgres on AWS RDS
- Cognito for passwordless email auth
- Optional apex redirect when the root domain is unused

Details:

- [Repository README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Deployment guide](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/deployment.md)
- [AWS CDK infrastructure](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
