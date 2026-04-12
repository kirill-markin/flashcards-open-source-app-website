---
title: Self-Hosting Guide
description: Postgres、auth、backend、web を使って Flashcards をローカル実行するか、documented AWS stack を自分で deploy します。
---

## Requirements

- Docker
- Node.js 20+
- npm
- Bundled Docker setup による PostgreSQL 16+

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

次に services を別々の terminal windows で起動します:

```bash
make auth-dev
make backend-dev
make web-dev
```

起動されるもの:

1. `postgres` on port `5432`
2. `auth` on port `8081`
3. `backend` on port `8080`
4. `web` on port `3000`

Local addresses:

- `http://localhost:3000` for the web app
- `http://localhost:8080/v1` for the backend API
- `http://localhost:8081` for the auth service

## Configuration

`.env.example` を `.env` にコピーし、以下を設定します:

- `DATABASE_URL` — Postgres connection string
- `AUTH_MODE` — local では `none`、email OTP auth では `cognito`
- `BACKEND_ALLOWED_ORIGINS` — session-backed API requests の allowed origins
- `PUBLIC_API_BASE_URL` と `PUBLIC_AUTH_BASE_URL` — discovery responses で custom public hosts を返したい場合の optional overrides

## Local iOS Setup

Main repository の iOS app は以下から local API / auth hosts を読み込みます:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

必要なら example file をコピーします:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

その後、local または self-hosted の `api` / `auth` domains を指すように設定してください。

## Updating

```bash
git pull
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

Dependencies を変更した後は local services を再起動してください。

## AWS Deployment

Documented production shape:

- CloudFront + S3 for `app.<domain>`
- API Gateway + Lambda for `api.<domain>`
- API Gateway + Lambda for `auth.<domain>`
- Postgres on AWS RDS
- Cognito for passwordless email auth
- Optional apex redirect when the root domain is unused

詳しくは:

- [Repository README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Deployment guide](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/deployment.md)
- [AWS CDK infrastructure](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
