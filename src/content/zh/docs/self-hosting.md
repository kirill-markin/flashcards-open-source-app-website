---
title: Self-Hosting Guide
description: 使用 Postgres、auth、backend 和 web 在本地运行 Flashcards，或自行部署 documented AWS stack。
---

## Requirements

- Docker
- Node.js 20+
- npm
- 通过 bundled Docker setup 提供的 PostgreSQL 16+

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

然后在不同 terminal windows 中启动 services：

```bash
make auth-dev
make backend-dev
make web-dev
```

会启动：

1. `postgres` on port `5432`
2. `auth` on port `8081`
3. `backend` on port `8080`
4. `web` on port `3000`

Local addresses:

- `http://localhost:3000` for the web app
- `http://localhost:8080/v1` for the backend API
- `http://localhost:8081` for the auth service

## Configuration

将 `.env.example` 复制为 `.env`，并设置以下值：

- `DATABASE_URL` — Postgres connection string
- `AUTH_MODE` — 本地使用 `none`，email OTP auth 使用 `cognito`
- `BACKEND_ALLOWED_ORIGINS` — session-backed API requests 的 allowed origins
- `PUBLIC_API_BASE_URL` 和 `PUBLIC_AUTH_BASE_URL` — 如果你希望在 discovery responses 中返回自定义 public hosts，可使用 optional overrides

## Local iOS Setup

主 repository 中的 iOS app 会从这里读取 local API 与 auth hosts：

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

如有需要，复制 example file：

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

然后将其指向你本地或 self-hosted 的 `api` 与 `auth` domains。

## Updating

```bash
git pull
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

Dependency changes 后请重启 local services。

## AWS Deployment

Documented production shape:

- CloudFront + S3 for `app.<domain>`
- API Gateway + Lambda for `api.<domain>`
- API Gateway + Lambda for `auth.<domain>`
- Postgres on AWS RDS
- Cognito for passwordless email auth
- Optional apex redirect when the root domain is unused

详情请见：

- [Repository README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Deployment guide](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/deployment.md)
- [AWS CDK infrastructure](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
