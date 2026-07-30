---
title: Self-Hosting Guide
description: Run Flashcards locally with PostgreSQL, auth, backend, web, and admin, or deploy the documented AWS CDK production stack.
---

Flashcards supports two distinct paths: a local development environment and a production deployment on AWS. Docker Compose runs PostgreSQL and migrations for local development; it is not the production deployment method.

## Local development requirements

- Git
- Bash
- GNU Make
- Docker with Docker Compose
- Node.js 24
- npm

The provided Docker Compose file currently runs PostgreSQL 18.4. You do not need a separate local PostgreSQL installation.

## Local quick start

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

`make db-up` starts PostgreSQL and runs `scripts/deploy/migrate.sh` through the migration container. With the default passwords copied from `.env.example`, the migration provisions these local runtime connections:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- auth: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- reporting: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

If you change `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD`, or `REPORTING_DB_PASSWORD` in `.env`, use the same changed password in the matching connection URL.

### Fast local-only start

The backend Make target does not load root `.env`. Pass its required local settings explicitly:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Run the clients in separate terminals:

```bash
make web-dev
make admin-dev
```

This path deliberately does not start `make auth-dev`. `AUTH_MODE=none` is an explicitly insecure localhost-only mode; never use it in a deployed environment.
It covers core backend, public Agent API discovery, web, and admin development, but it does not make Chat V2 available.

### Full local Cognito flow

The auth target loads root `.env`, while the backend target does not. First replace the legacy `DATABASE_URL` in the copied `.env` with the auth role URL and add your real Cognito values:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Start auth:

```bash
make auth-dev
```

In the backend terminal, explicitly load `.env`, then override its auth database URL with the backend role URL for that process:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Run `make web-dev` and `make admin-dev` in their own terminals. Both targets load root `.env`.

The services use these local addresses:

| Service | Address |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Auth, when configured | `http://localhost:8081` |
| Backend API | `http://localhost:8080/v1` |
| Web app | `http://localhost:3000` |
| Admin app | `http://localhost:3001` |

Stop PostgreSQL and the migration container with:

```bash
make db-down
```

## Local configuration

Start from `.env.example`; it documents the available variables and which values are local-only. Replace its legacy `DATABASE_URL` before running auth, as shown above.

The main local settings are:

- `MIGRATION_DATABASE_URL` for schema migrations inside Docker
- `DATABASE_URL` set to the `auth_app` role in root `.env` for `make auth-dev`
- `DATABASE_URL` passed as the `backend_app` role for `make backend-dev`
- `AUTH_MODE` and `ALLOW_INSECURE_LOCAL_AUTH` for backend authentication
- `BACKEND_ALLOWED_ORIGINS` for the local web and admin origins
- `ALLOWED_REDIRECT_URIS` and `COOKIE_DOMAIN` for browser authentication
- the Cognito and session encryption values when testing real OTP

The Agent API is part of the backend. Its public local discovery document is available at `http://localhost:8080/v1/agent` after the backend starts. Protected Agent operations require `ApiKey` authentication and are not available in the `AUTH_MODE=none` path.

### AI scope by path

The local commands above do not start the asynchronous chat worker. The fast path also uses `AUTH_MODE=none`, which Chat V2 rejects; adding an OpenAI key or guest quota does not make that path AI-capable. The full local Cognito flow supplies a supported auth transport, but it still does not start the worker.

The AWS CDK deployment creates the worker Lambda and configures the backend to invoke it. Provider credentials such as `OPENAI_API_KEY` enable model calls for supported authenticated requests. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` separately enables and limits guest AI; it does not control signed-in or bearer-authenticated AI. Langfuse settings are optional tracing configuration.

## Native clients

The same repository contains the iOS and Android clients, but the local web/server commands do not build or distribute them.

The iOS project reads local API and auth hosts from:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Create it from the example when needed:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

See the repository's [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) and [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) for their separate build and test workflows.

## Production uses AWS CDK

The supported production deployment is the included AWS CDK stack. It is AWS-based rather than vendor-neutral and includes:

- a VPC and private subnets
- PostgreSQL 18 on Amazon RDS
- Amazon Cognito passwordless email OTP
- API Gateway and Lambda for the backend, auth, and MCP services
- an asynchronous chat worker Lambda and a Cognito custom email sender Lambda
- S3 and CloudFront for the web and admin apps
- Secrets Manager for database, session, email, monitoring, and optional AI credentials
- CloudWatch alarms, SNS notifications, and an RDS backup plan
- a GitHub Actions OIDC deployment role
- Cloudflare setup scripts for the public domains

The deployment exposes `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>`, and `mcp.<domain>`. It can also create an apex redirect when the root domain is otherwise unused.

Run the production helper from an operator machine with:

- Node.js 24 and npm
- Bash and GNU Make
- Docker running
- the AWS CLI authenticated to the deployment account
- the GitHub CLI authenticated to the target repository
- `curl`, `jq`, and Python 3

Before deploying, configure the operator values in the root `.env`. The required set includes the AWS region, domain, alert email, GitHub repository, Cloudflare credentials, Resend credentials, and backend Sentry configuration. OpenAI and Langfuse credentials are optional.

The preferred first deployment command from the repository root is:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

The explicit auth install is currently required from a clean checkout because the deployment helper bundles that package but does not install it. The helper creates or changes real AWS, Cloudflare, and GitHub resources. Review the repository deployment documentation and cloud costs before running it. It bootstraps CDK, deploys the infrastructure, runs migrations, uploads web and admin assets, configures the public `app`, `admin`, `api`, `auth`, and `mcp` DNS records unless skipped, and populates missing GitHub Actions configuration.

After the deployment:

1. Confirm the SNS subscription sent to the `ALERT_EMAIL` inbox.
2. Configure and verify the separate Resend sending-domain DNS records:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` runs `scripts/cloudflare/setup-dns.sh` for the public application domains by default. It does not run `setup-resend-domain.sh`; the latter creates the email-sender records for `mail.<domain>` and verifies that domain with Resend. If you deploy with `--skip-dns`, configure the public records separately as documented in the AWS CDK guide.

## Data portability

Workspace package import and export transfers cards, their tags, and related media only. It does not transfer review history, FSRS scheduler state, workspace settings, full deck structures, or account data.

Treat packages as content transfer, not as a complete hosted-to-self-hosted migration or disaster-recovery backup. Operators are responsible for backing up and restoring the deployed PostgreSQL database and media storage.

## Operator responsibilities

Self-hosting means you provide and maintain:

- AWS infrastructure and its costs
- Cloudflare DNS and domain configuration
- Resend email delivery credentials and domain records
- required Sentry monitoring configuration
- optional AI provider and Langfuse credentials
- secrets, upgrades, migrations, alerts, backups, and restore testing
- native mobile builds and distribution if you want your own iOS or Android releases

The stack includes automation for many of these systems, but it still requires an operator. Docker Compose does not replace this production architecture.

## Repository deployment documentation

- [Repository README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Backend and web deployment guide](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK deployment guide](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK infrastructure](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
