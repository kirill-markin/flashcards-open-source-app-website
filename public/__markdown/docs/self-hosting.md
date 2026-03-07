# Self-Hosting Guide

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

## Configuration

Copy `.env.example` to `.env` and adjust:

- `DATABASE_URL` — Postgres connection string
- `AUTH_MODE` — `none` for local use, `cognito` for email OTP auth
- `BACKEND_ALLOWED_ORIGINS` — allowed browser origins for session-authenticated API requests

## Updating

```bash
git pull
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

Restart the local services after dependency changes.

## AWS Deployment

For production deployment on AWS (CloudFront + S3 + API Gateway + Lambda + RDS + Cognito), see the [AWS CDK guide](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws).

---
*[View the styled HTML version of this page](https://flashcards-open-source-app.com/docs/self-hosting/)*

*Tip: Append `.md` to any URL on https://flashcards-open-source-app.com to get a clean Markdown version of that page.*