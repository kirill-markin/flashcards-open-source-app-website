---
title: ਆਪ ਹੋਸਟਿੰਗ ਗਾਈਡ
description: Nibomo ਨੂੰ PostgreSQL, ਪ੍ਰਮਾਣੀਕਰਨ, ਬੈਕਐਂਡ, ਵੈੱਬ ਅਤੇ ਐਡਮਿਨ ਸਮੇਤ ਲੋਕਲ ਤੌਰ ਉੱਤੇ ਚਲਾਓ, ਜਾਂ ਦਸਤਾਵੇਜ਼ੀ AWS CDK ਪ੍ਰੋਡਕਸ਼ਨ ਸਟੈਕ ਡਿਪਲੌਏ ਕਰੋ।
---

Nibomo ਦੋ ਵੱਖਰੇ ਰਾਹਾਂ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ: ਲੋਕਲ ਡਿਵੈਲਪਮੈਂਟ ਇਨਵਾਇਰਨਮੈਂਟ ਅਤੇ AWS ਉੱਤੇ ਪ੍ਰੋਡਕਸ਼ਨ ਡਿਪਲੌਇਮੈਂਟ। Docker Compose ਲੋਕਲ ਡਿਵੈਲਪਮੈਂਟ ਲਈ PostgreSQL ਅਤੇ ਮਾਈਗ੍ਰੇਸ਼ਨ ਚਲਾਉਂਦਾ ਹੈ; ਇਹ ਪ੍ਰੋਡਕਸ਼ਨ ਡਿਪਲੌਇਮੈਂਟ ਦਾ ਤਰੀਕਾ ਨਹੀਂ ਹੈ।

## ਲੋਕਲ ਡਿਵੈਲਪਮੈਂਟ ਲਈ ਲੋੜਾਂ

- Git
- Bash
- GNU Make
- Docker, Docker Compose ਸਮੇਤ
- Node.js 24
- npm

ਦਿੱਤੀ ਗਈ Docker Compose ਫਾਈਲ ਇਸ ਵੇਲੇ PostgreSQL 18.4 ਚਲਾਉਂਦੀ ਹੈ। ਤੁਹਾਨੂੰ PostgreSQL ਵੱਖਰੇ ਤੌਰ ਉੱਤੇ ਲੋਕਲ ਇੰਸਟਾਲ ਕਰਨ ਦੀ ਲੋੜ ਨਹੀਂ।

## ਲੋਕਲ ਤੇਜ਼ ਸ਼ੁਰੂਆਤ

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

`make db-up` PostgreSQL ਸ਼ੁਰੂ ਕਰਦਾ ਹੈ ਅਤੇ ਮਾਈਗ੍ਰੇਸ਼ਨ ਕੰਟੇਨਰ ਰਾਹੀਂ `scripts/deploy/migrate.sh` ਚਲਾਉਂਦਾ ਹੈ। `.env.example` ਤੋਂ ਕਾਪੀ ਕੀਤੇ ਮੂਲ ਪਾਸਵਰਡਾਂ ਨਾਲ, ਮਾਈਗ੍ਰੇਸ਼ਨ ਇਹ ਲੋਕਲ ਰਨਟਾਈਮ ਕਨੈਕਸ਼ਨ ਤਿਆਰ ਕਰਦਾ ਹੈ:

- ਬੈਕਐਂਡ: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- ਪ੍ਰਮਾਣੀਕਰਨ: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- ਰਿਪੋਰਟਿੰਗ: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

ਜੇ ਤੁਸੀਂ `.env` ਵਿੱਚ `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` ਜਾਂ `REPORTING_DB_PASSWORD` ਬਦਲਦੇ ਹੋ, ਤਾਂ ਮੇਲ ਖਾਂਦੇ ਕਨੈਕਸ਼ਨ URL ਵਿੱਚ ਵੀ ਉਹੀ ਬਦਲਿਆ ਹੋਇਆ ਪਾਸਵਰਡ ਵਰਤੋ।

### ਸਿਰਫ਼ ਲੋਕਲ ਤੇਜ਼ ਸ਼ੁਰੂਆਤ

ਬੈਕਐਂਡ ਵਾਲਾ Make ਟਾਰਗੇਟ ਰੂਟ `.env` ਲੋਡ ਨਹੀਂ ਕਰਦਾ। ਇਸ ਦੀਆਂ ਲੋੜੀਂਦੀਆਂ ਲੋਕਲ ਸੈਟਿੰਗਾਂ ਸਪਸ਼ਟ ਤੌਰ ਉੱਤੇ ਦਿਓ:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

ਕਲਾਇੰਟਾਂ ਨੂੰ ਵੱਖਰੇ ਟਰਮੀਨਲਾਂ ਵਿੱਚ ਚਲਾਓ:

```bash
make web-dev
make admin-dev
```

ਇਹ ਰਾਹ ਜਾਣ-ਬੁੱਝ ਕੇ `make auth-dev` ਸ਼ੁਰੂ ਨਹੀਂ ਕਰਦਾ। `AUTH_MODE=none` ਸਪਸ਼ਟ ਤੌਰ ਉੱਤੇ ਅਸੁਰੱਖਿਅਤ, ਸਿਰਫ਼ localhost ਲਈ ਮੋਡ ਹੈ; ਇਸ ਨੂੰ ਕਦੇ ਵੀ ਡਿਪਲੌਏ ਕੀਤੇ ਇਨਵਾਇਰਨਮੈਂਟ ਵਿੱਚ ਨਾ ਵਰਤੋ।
ਇਹ ਮੁੱਖ ਬੈਕਐਂਡ, ਜਨਤਕ Agent API ਡਿਸਕਵਰੀ, ਵੈੱਬ ਅਤੇ ਐਡਮਿਨ ਦੀ ਡਿਵੈਲਪਮੈਂਟ ਲਈ ਕਾਫ਼ੀ ਹੈ, ਪਰ ਇਸ ਨਾਲ Chat V2 ਉਪਲਬਧ ਨਹੀਂ ਹੁੰਦਾ।

### ਪੂਰਾ ਲੋਕਲ Cognito ਪ੍ਰਵਾਹ

ਪ੍ਰਮਾਣੀਕਰਨ ਵਾਲਾ ਟਾਰਗੇਟ ਰੂਟ `.env` ਲੋਡ ਕਰਦਾ ਹੈ, ਪਰ ਬੈਕਐਂਡ ਵਾਲਾ ਨਹੀਂ ਕਰਦਾ। ਪਹਿਲਾਂ ਕਾਪੀ ਕੀਤੀ `.env` ਵਿੱਚ ਪੁਰਾਣੇ `DATABASE_URL` ਦੀ ਥਾਂ ਪ੍ਰਮਾਣੀਕਰਨ ਰੋਲ ਵਾਲਾ URL ਲਿਖੋ ਅਤੇ ਆਪਣੀਆਂ ਅਸਲ Cognito ਵੈਲਿਊਜ਼ ਜੋੜੋ:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

ਪ੍ਰਮਾਣੀਕਰਨ ਸੇਵਾ ਸ਼ੁਰੂ ਕਰੋ:

```bash
make auth-dev
```

ਬੈਕਐਂਡ ਵਾਲੇ ਟਰਮੀਨਲ ਵਿੱਚ `.env` ਸਪਸ਼ਟ ਤੌਰ ਉੱਤੇ ਲੋਡ ਕਰੋ, ਫਿਰ ਉਸ ਪ੍ਰੋਸੈੱਸ ਲਈ ਇਸ ਦੇ ਪ੍ਰਮਾਣੀਕਰਨ ਡਾਟਾਬੇਸ URL ਦੀ ਥਾਂ ਬੈਕਐਂਡ ਰੋਲ ਵਾਲਾ URL ਦਿਓ:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

`make web-dev` ਅਤੇ `make admin-dev` ਨੂੰ ਉਨ੍ਹਾਂ ਦੇ ਆਪਣੇ ਟਰਮੀਨਲਾਂ ਵਿੱਚ ਚਲਾਓ। ਦੋਵੇਂ ਟਾਰਗੇਟ ਰੂਟ `.env` ਲੋਡ ਕਰਦੇ ਹਨ।

ਸੇਵਾਵਾਂ ਇਹ ਲੋਕਲ ਪਤੇ ਵਰਤਦੀਆਂ ਹਨ:

| ਸੇਵਾ | ਪਤਾ |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| ਪ੍ਰਮਾਣੀਕਰਨ, ਜਦੋਂ ਕੌਂਫ਼ਿਗਰ ਕੀਤਾ ਹੋਵੇ | `http://localhost:8081` |
| ਬੈਕਐਂਡ API | `http://localhost:8080/v1` |
| ਵੈੱਬ ਐਪ | `http://localhost:3000` |
| ਐਡਮਿਨ ਐਪ | `http://localhost:3001` |

PostgreSQL ਅਤੇ ਮਾਈਗ੍ਰੇਸ਼ਨ ਕੰਟੇਨਰ ਨੂੰ ਇਸ ਨਾਲ ਬੰਦ ਕਰੋ:

```bash
make db-down
```

## ਲੋਕਲ ਕੌਂਫ਼ਿਗਰੇਸ਼ਨ

`.env.example` ਤੋਂ ਸ਼ੁਰੂ ਕਰੋ; ਇਸ ਵਿੱਚ ਉਪਲਬਧ ਵੇਰੀਏਬਲਾਂ ਦਾ ਵੇਰਵਾ ਹੈ ਅਤੇ ਇਹ ਵੀ ਕਿ ਕਿਹੜੀਆਂ ਵੈਲਿਊਜ਼ ਸਿਰਫ਼ ਲੋਕਲ ਲਈ ਹਨ। ਪ੍ਰਮਾਣੀਕਰਨ ਸੇਵਾ ਚਲਾਉਣ ਤੋਂ ਪਹਿਲਾਂ, ਉੱਪਰ ਦੱਸੇ ਮੁਤਾਬਕ, ਇਸ ਦਾ ਪੁਰਾਣਾ `DATABASE_URL` ਬਦਲੋ।

ਮੁੱਖ ਲੋਕਲ ਸੈਟਿੰਗਾਂ ਇਹ ਹਨ:

- Docker ਅੰਦਰ ਸਕੀਮਾ ਮਾਈਗ੍ਰੇਸ਼ਨਾਂ ਲਈ `MIGRATION_DATABASE_URL`
- `make auth-dev` ਲਈ ਰੂਟ `.env` ਵਿੱਚ `auth_app` ਰੋਲ ਉੱਤੇ ਸੈੱਟ ਕੀਤਾ `DATABASE_URL`
- `make backend-dev` ਲਈ `backend_app` ਰੋਲ ਵਜੋਂ ਦਿੱਤਾ `DATABASE_URL`
- ਬੈਕਐਂਡ ਪ੍ਰਮਾਣੀਕਰਨ ਲਈ `AUTH_MODE` ਅਤੇ `ALLOW_INSECURE_LOCAL_AUTH`
- ਲੋਕਲ ਵੈੱਬ ਅਤੇ ਐਡਮਿਨ ਓਰਿਜਿਨਾਂ ਲਈ `BACKEND_ALLOWED_ORIGINS`
- ਬ੍ਰਾਊਜ਼ਰ ਪ੍ਰਮਾਣੀਕਰਨ ਲਈ `ALLOWED_REDIRECT_URIS` ਅਤੇ `COOKIE_DOMAIN`
- ਅਸਲ OTP ਦੀ ਜਾਂਚ ਕਰਦੇ ਸਮੇਂ Cognito ਅਤੇ ਸੈਸ਼ਨ ਇਨਕ੍ਰਿਪਸ਼ਨ ਦੀਆਂ ਵੈਲਿਊਜ਼

Agent API ਬੈਕਐਂਡ ਦਾ ਹਿੱਸਾ ਹੈ। ਬੈਕਐਂਡ ਸ਼ੁਰੂ ਹੋਣ ਤੋਂ ਬਾਅਦ ਇਸ ਦਾ ਜਨਤਕ ਲੋਕਲ ਡਿਸਕਵਰੀ ਦਸਤਾਵੇਜ਼ `http://localhost:8080/v1/agent` ਉੱਤੇ ਮਿਲਦਾ ਹੈ। ਸੁਰੱਖਿਅਤ Agent ਕਾਰਵਾਈਆਂ ਲਈ `ApiKey` ਪ੍ਰਮਾਣੀਕਰਨ ਲੋੜੀਂਦਾ ਹੈ ਅਤੇ ਇਹ `AUTH_MODE=none` ਵਾਲੇ ਰਾਹ ਵਿੱਚ ਉਪਲਬਧ ਨਹੀਂ ਹਨ।

### ਹਰ ਰਾਹ ਵਿੱਚ AI ਦਾ ਦਾਇਰਾ

ਉੱਪਰਲੀਆਂ ਲੋਕਲ ਕਮਾਂਡਾਂ ਅਸਿੰਕ੍ਰੋਨਸ ਚੈਟ ਵਰਕਰ ਸ਼ੁਰੂ ਨਹੀਂ ਕਰਦੀਆਂ। ਤੇਜ਼ ਰਾਹ `AUTH_MODE=none` ਵੀ ਵਰਤਦਾ ਹੈ, ਜਿਸ ਨੂੰ Chat V2 ਰੱਦ ਕਰਦਾ ਹੈ; OpenAI ਕੁੰਜੀ ਜਾਂ ਮਹਿਮਾਨ ਕੋਟਾ ਜੋੜਨ ਨਾਲ ਵੀ ਉਹ ਰਾਹ AI ਵਰਤਣ ਯੋਗ ਨਹੀਂ ਬਣਦਾ। ਪੂਰਾ ਲੋਕਲ Cognito ਪ੍ਰਵਾਹ ਇੱਕ ਸਮਰਥਿਤ ਪ੍ਰਮਾਣੀਕਰਨ ਟ੍ਰਾਂਸਪੋਰਟ ਦਿੰਦਾ ਹੈ, ਪਰ ਫਿਰ ਵੀ ਵਰਕਰ ਸ਼ੁਰੂ ਨਹੀਂ ਕਰਦਾ।

AWS CDK ਡਿਪਲੌਇਮੈਂਟ ਵਰਕਰ Lambda ਬਣਾਉਂਦੀ ਹੈ ਅਤੇ ਬੈਕਐਂਡ ਨੂੰ ਉਸ ਨੂੰ ਚਲਾਉਣ ਲਈ ਕੌਂਫ਼ਿਗਰ ਕਰਦੀ ਹੈ। `OPENAI_API_KEY` ਵਰਗੇ ਪ੍ਰੋਵਾਈਡਰ ਕ੍ਰੈਡੈਂਸ਼ੀਅਲ ਸਮਰਥਿਤ ਪ੍ਰਮਾਣਿਤ ਬੇਨਤੀਆਂ ਲਈ ਮਾਡਲ ਕਾਲਾਂ ਚਾਲੂ ਕਰਦੇ ਹਨ। `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` ਵੱਖਰੇ ਤੌਰ ਉੱਤੇ ਮਹਿਮਾਨਾਂ ਲਈ AI ਚਾਲੂ ਕਰਦਾ ਅਤੇ ਸੀਮਤ ਕਰਦਾ ਹੈ; ਇਹ ਸਾਈਨ ਇਨ ਕੀਤੇ ਜਾਂ bearer ਟੋਕਨ ਨਾਲ ਪ੍ਰਮਾਣਿਤ AI ਨੂੰ ਕੰਟਰੋਲ ਨਹੀਂ ਕਰਦਾ। Langfuse ਸੈਟਿੰਗਾਂ ਵਿਕਲਪਿਕ ਟ੍ਰੇਸਿੰਗ ਕੌਂਫ਼ਿਗਰੇਸ਼ਨ ਹਨ।

## ਨੇਟਿਵ ਕਲਾਇੰਟ

ਇਸੇ ਰਿਪੋਜ਼ਿਟਰੀ ਵਿੱਚ iOS ਅਤੇ Android ਕਲਾਇੰਟ ਹਨ, ਪਰ ਲੋਕਲ ਵੈੱਬ/ਸਰਵਰ ਕਮਾਂਡਾਂ ਉਨ੍ਹਾਂ ਨੂੰ ਨਾ ਬਿਲਡ ਕਰਦੀਆਂ ਹਨ ਅਤੇ ਨਾ ਵੰਡਦੀਆਂ ਹਨ।

iOS ਪ੍ਰੋਜੈਕਟ ਲੋਕਲ API ਅਤੇ ਪ੍ਰਮਾਣੀਕਰਨ ਹੋਸਟ ਇੱਥੋਂ ਪੜ੍ਹਦਾ ਹੈ:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

ਲੋੜ ਹੋਵੇ ਤਾਂ ਇਸ ਨੂੰ ਮਿਸਾਲ ਵਾਲੀ ਫਾਈਲ ਤੋਂ ਬਣਾਓ:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

ਉਨ੍ਹਾਂ ਦੇ ਵੱਖਰੇ ਬਿਲਡ ਅਤੇ ਟੈਸਟ ਵਰਕਫ਼ਲੋ ਲਈ ਰਿਪੋਜ਼ਿਟਰੀ ਦੀ [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) ਅਤੇ [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) ਵੇਖੋ।

## ਪ੍ਰੋਡਕਸ਼ਨ ਵਿੱਚ AWS CDK ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ

ਸਮਰਥਿਤ ਪ੍ਰੋਡਕਸ਼ਨ ਡਿਪਲੌਇਮੈਂਟ ਰਿਪੋਜ਼ਿਟਰੀ ਵਿੱਚ ਸ਼ਾਮਲ AWS CDK ਸਟੈਕ ਹੈ। ਇਹ ਕਿਸੇ ਵੀ ਪ੍ਰੋਵਾਈਡਰ ਤੋਂ ਸੁਤੰਤਰ ਨਹੀਂ, ਸਗੋਂ AWS ਉੱਤੇ ਆਧਾਰਿਤ ਹੈ, ਅਤੇ ਇਸ ਵਿੱਚ ਇਹ ਸ਼ਾਮਲ ਹਨ:

- ਇੱਕ VPC ਅਤੇ ਪ੍ਰਾਈਵੇਟ ਸਬਨੈੱਟ
- Amazon RDS ਉੱਤੇ PostgreSQL 18
- Amazon Cognito ਦਾ ਪਾਸਵਰਡ ਤੋਂ ਬਿਨਾਂ ਈਮੇਲ OTP
- ਬੈਕਐਂਡ, ਪ੍ਰਮਾਣੀਕਰਨ ਅਤੇ MCP ਸੇਵਾਵਾਂ ਲਈ API Gateway ਅਤੇ Lambda
- ਇੱਕ ਅਸਿੰਕ੍ਰੋਨਸ ਚੈਟ ਵਰਕਰ Lambda ਅਤੇ ਇੱਕ Cognito ਕਸਟਮ ਈਮੇਲ ਭੇਜਣ ਵਾਲਾ Lambda
- ਵੈੱਬ ਅਤੇ ਐਡਮਿਨ ਐਪਾਂ ਲਈ S3 ਅਤੇ CloudFront
- ਡਾਟਾਬੇਸ, ਸੈਸ਼ਨ, ਈਮੇਲ, ਮਾਨੀਟਰਿੰਗ ਅਤੇ ਵਿਕਲਪਿਕ AI ਕ੍ਰੈਡੈਂਸ਼ੀਅਲਾਂ ਲਈ Secrets Manager
- CloudWatch ਅਲਾਰਮ, SNS ਸੂਚਨਾਵਾਂ ਅਤੇ ਇੱਕ RDS ਬੈਕਅੱਪ ਪਲਾਨ
- ਇੱਕ GitHub Actions OIDC ਡਿਪਲੌਇਮੈਂਟ ਰੋਲ
- ਜਨਤਕ ਡੋਮੇਨਾਂ ਲਈ Cloudflare ਸੈੱਟਅੱਪ ਸਕ੍ਰਿਪਟਾਂ

ਡਿਪਲੌਇਮੈਂਟ `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` ਅਤੇ `mcp.<domain>` ਉਪਲਬਧ ਕਰਾਉਂਦੀ ਹੈ। ਜਦੋਂ ਰੂਟ ਡੋਮੇਨ ਹੋਰ ਕਿਤੇ ਵਰਤਿਆ ਨਾ ਜਾ ਰਿਹਾ ਹੋਵੇ, ਤਾਂ ਇਹ ਉਸ ਰੂਟ ਡੋਮੇਨ ਤੋਂ ਰੀਡਾਇਰੈਕਟ ਵੀ ਬਣਾ ਸਕਦੀ ਹੈ।

ਪ੍ਰੋਡਕਸ਼ਨ ਹੈਲਪਰ ਨੂੰ ਅਜਿਹੀ ਓਪਰੇਟਰ ਮਸ਼ੀਨ ਤੋਂ ਚਲਾਓ ਜਿਸ ਉੱਤੇ ਇਹ ਹੋਣ:

- Node.js 24 ਅਤੇ npm
- Bash ਅਤੇ GNU Make
- ਚੱਲਦਾ ਹੋਇਆ Docker
- ਡਿਪਲੌਇਮੈਂਟ ਵਾਲੇ ਖਾਤੇ ਵਿੱਚ ਪ੍ਰਮਾਣਿਤ AWS CLI
- ਟਾਰਗੇਟ ਰਿਪੋਜ਼ਿਟਰੀ ਲਈ ਪ੍ਰਮਾਣਿਤ GitHub CLI
- `curl`, `jq` ਅਤੇ Python 3

ਡਿਪਲੌਏ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਰੂਟ `.env` ਵਿੱਚ ਓਪਰੇਟਰ ਵੈਲਿਊਜ਼ ਕੌਂਫ਼ਿਗਰ ਕਰੋ। ਲੋੜੀਂਦੇ ਸੈੱਟ ਵਿੱਚ AWS ਰੀਜਨ, ਡੋਮੇਨ, ਅਲਰਟ ਈਮੇਲ, GitHub ਰਿਪੋਜ਼ਿਟਰੀ, Cloudflare ਕ੍ਰੈਡੈਂਸ਼ੀਅਲ, Resend ਕ੍ਰੈਡੈਂਸ਼ੀਅਲ ਅਤੇ ਬੈਕਐਂਡ Sentry ਕੌਂਫ਼ਿਗਰੇਸ਼ਨ ਸ਼ਾਮਲ ਹਨ। OpenAI ਅਤੇ Langfuse ਕ੍ਰੈਡੈਂਸ਼ੀਅਲ ਵਿਕਲਪਿਕ ਹਨ।

ਰਿਪੋਜ਼ਿਟਰੀ ਦੇ ਰੂਟ ਤੋਂ ਪਹਿਲੀ ਡਿਪਲੌਇਮੈਂਟ ਲਈ ਤਰਜੀਹੀ ਕਮਾਂਡ ਇਹ ਹੈ:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

ਸਾਫ਼ ਚੈੱਕਆਊਟ ਵਿੱਚ ਇਸ ਵੇਲੇ ਪ੍ਰਮਾਣੀਕਰਨ ਪੈਕੇਜ ਨੂੰ ਵੱਖਰੇ ਤੌਰ ਉੱਤੇ ਇੰਸਟਾਲ ਕਰਨਾ ਪੈਂਦਾ ਹੈ, ਕਿਉਂਕਿ ਡਿਪਲੌਇਮੈਂਟ ਹੈਲਪਰ ਉਸ ਪੈਕੇਜ ਨੂੰ ਬੰਡਲ ਤਾਂ ਕਰਦਾ ਹੈ ਪਰ ਇੰਸਟਾਲ ਨਹੀਂ ਕਰਦਾ। ਹੈਲਪਰ ਅਸਲ AWS, Cloudflare ਅਤੇ GitHub ਰਿਸੋਰਸ ਬਣਾਉਂਦਾ ਜਾਂ ਬਦਲਦਾ ਹੈ। ਇਸ ਨੂੰ ਚਲਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਰਿਪੋਜ਼ਿਟਰੀ ਦੇ ਡਿਪਲੌਇਮੈਂਟ ਦਸਤਾਵੇਜ਼ ਅਤੇ ਕਲਾਊਡ ਦੇ ਖਰਚੇ ਵੇਖ ਲਓ। ਇਹ CDK ਨੂੰ ਬੂਟਸਟ੍ਰੈਪ ਕਰਦਾ ਹੈ, ਬੁਨਿਆਦੀ ਢਾਂਚਾ ਡਿਪਲੌਏ ਕਰਦਾ ਹੈ, ਮਾਈਗ੍ਰੇਸ਼ਨ ਚਲਾਉਂਦਾ ਹੈ, ਵੈੱਬ ਅਤੇ ਐਡਮਿਨ ਦੀਆਂ ਫਾਈਲਾਂ ਅੱਪਲੋਡ ਕਰਦਾ ਹੈ, ਛੱਡਣ ਲਈ ਨਾ ਕਿਹਾ ਜਾਵੇ ਤਾਂ ਜਨਤਕ `app`, `admin`, `api`, `auth` ਅਤੇ `mcp` DNS ਰਿਕਾਰਡ ਕੌਂਫ਼ਿਗਰ ਕਰਦਾ ਹੈ, ਅਤੇ GitHub Actions ਦੀ ਗੁੰਮ ਕੌਂਫ਼ਿਗਰੇਸ਼ਨ ਭਰਦਾ ਹੈ।

ਡਿਪਲੌਇਮੈਂਟ ਤੋਂ ਬਾਅਦ:

1. `ALERT_EMAIL` ਇਨਬਾਕਸ ਵਿੱਚ ਭੇਜੀ ਗਈ SNS ਸਬਸਕ੍ਰਿਪਸ਼ਨ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ।
2. Resend ਦੇ ਭੇਜਣ ਵਾਲੇ ਡੋਮੇਨ ਦੇ ਵੱਖਰੇ DNS ਰਿਕਾਰਡ ਕੌਂਫ਼ਿਗਰ ਕਰੋ ਅਤੇ ਉਨ੍ਹਾਂ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` ਮੂਲ ਰੂਪ ਵਿੱਚ ਜਨਤਕ ਐਪਲੀਕੇਸ਼ਨ ਡੋਮੇਨਾਂ ਲਈ `scripts/cloudflare/setup-dns.sh` ਚਲਾਉਂਦੀ ਹੈ। ਇਹ `setup-resend-domain.sh` ਨਹੀਂ ਚਲਾਉਂਦੀ; ਉਹ ਸਕ੍ਰਿਪਟ `mail.<domain>` ਲਈ ਈਮੇਲ ਭੇਜਣ ਵਾਲੇ ਰਿਕਾਰਡ ਬਣਾਉਂਦੀ ਹੈ ਅਤੇ Resend ਨਾਲ ਉਸ ਡੋਮੇਨ ਦੀ ਪੁਸ਼ਟੀ ਕਰਦੀ ਹੈ। ਜੇ ਤੁਸੀਂ `--skip-dns` ਨਾਲ ਡਿਪਲੌਏ ਕਰਦੇ ਹੋ, ਤਾਂ ਜਨਤਕ ਰਿਕਾਰਡ AWS CDK ਗਾਈਡ ਵਿੱਚ ਦੱਸੇ ਮੁਤਾਬਕ ਵੱਖਰੇ ਤੌਰ ਉੱਤੇ ਕੌਂਫ਼ਿਗਰ ਕਰੋ।

## ਡਾਟੇ ਨੂੰ ਨਾਲ ਲਿਜਾਣਾ

ਵਰਕਸਪੇਸ ਪੈਕੇਜ ਦਾ ਇੰਪੋਰਟ ਅਤੇ ਐਕਸਪੋਰਟ ਸਿਰਫ਼ ਕਾਰਡ, ਉਨ੍ਹਾਂ ਦੇ ਟੈਗ ਅਤੇ ਸਬੰਧਿਤ ਮੀਡੀਆ ਲਿਜਾਂਦਾ ਹੈ। ਇਹ ਦੁਹਰਾਈ ਦਾ ਇਤਿਹਾਸ, FSRS ਸ਼ਡਿਊਲਰ ਦੀ ਸਥਿਤੀ, ਵਰਕਸਪੇਸ ਸੈਟਿੰਗਾਂ, ਡੈੱਕਾਂ ਦੇ ਪੂਰੇ ਢਾਂਚੇ ਜਾਂ ਖਾਤੇ ਦਾ ਡਾਟਾ ਨਹੀਂ ਲਿਜਾਂਦਾ।

ਪੈਕੇਜਾਂ ਨੂੰ ਸਮੱਗਰੀ ਲਿਜਾਣ ਦਾ ਸਾਧਨ ਸਮਝੋ, ਹੋਸਟ ਕੀਤੀ ਤੋਂ ਆਪ ਹੋਸਟ ਕੀਤੀ ਇੰਸਟਾਲੇਸ਼ਨ ਵੱਲ ਪੂਰੀ ਮਾਈਗ੍ਰੇਸ਼ਨ ਜਾਂ ਆਫ਼ਤ ਤੋਂ ਬਹਾਲੀ ਵਾਲਾ ਬੈਕਅੱਪ ਨਹੀਂ। ਡਿਪਲੌਏ ਕੀਤੇ PostgreSQL ਡਾਟਾਬੇਸ ਅਤੇ ਮੀਡੀਆ ਸਟੋਰੇਜ ਦਾ ਬੈਕਅੱਪ ਲੈਣਾ ਅਤੇ ਬਹਾਲ ਕਰਨਾ ਓਪਰੇਟਰਾਂ ਦੀ ਜ਼ਿੰਮੇਵਾਰੀ ਹੈ।

## ਓਪਰੇਟਰ ਦੀਆਂ ਜ਼ਿੰਮੇਵਾਰੀਆਂ

ਆਪ ਹੋਸਟਿੰਗ ਦਾ ਮਤਲਬ ਹੈ ਕਿ ਇਹ ਸਭ ਤੁਸੀਂ ਦਿੰਦੇ ਅਤੇ ਸੰਭਾਲਦੇ ਹੋ:

- AWS ਬੁਨਿਆਦੀ ਢਾਂਚਾ ਅਤੇ ਇਸ ਦੇ ਖਰਚੇ
- Cloudflare DNS ਅਤੇ ਡੋਮੇਨ ਕੌਂਫ਼ਿਗਰੇਸ਼ਨ
- Resend ਈਮੇਲ ਡਿਲੀਵਰੀ ਕ੍ਰੈਡੈਂਸ਼ੀਅਲ ਅਤੇ ਡੋਮੇਨ ਰਿਕਾਰਡ
- ਲੋੜੀਂਦੀ Sentry ਮਾਨੀਟਰਿੰਗ ਕੌਂਫ਼ਿਗਰੇਸ਼ਨ
- ਵਿਕਲਪਿਕ AI ਪ੍ਰੋਵਾਈਡਰ ਅਤੇ Langfuse ਕ੍ਰੈਡੈਂਸ਼ੀਅਲ
- ਸੀਕ੍ਰੇਟ, ਅੱਪਗ੍ਰੇਡ, ਮਾਈਗ੍ਰੇਸ਼ਨ, ਅਲਰਟ, ਬੈਕਅੱਪ ਅਤੇ ਬਹਾਲੀ ਦੀ ਜਾਂਚ
- ਨੇਟਿਵ ਮੋਬਾਈਲ ਬਿਲਡ ਅਤੇ ਵੰਡ, ਜੇ ਤੁਸੀਂ ਆਪਣੇ iOS ਜਾਂ Android ਰਿਲੀਜ਼ ਚਾਹੁੰਦੇ ਹੋ

ਸਟੈਕ ਵਿੱਚ ਇਨ੍ਹਾਂ ਵਿੱਚੋਂ ਕਈ ਸਿਸਟਮਾਂ ਲਈ ਆਟੋਮੇਸ਼ਨ ਸ਼ਾਮਲ ਹੈ, ਪਰ ਫਿਰ ਵੀ ਇਸ ਨੂੰ ਇੱਕ ਓਪਰੇਟਰ ਦੀ ਲੋੜ ਹੈ। Docker Compose ਇਸ ਪ੍ਰੋਡਕਸ਼ਨ ਆਰਕੀਟੈਕਚਰ ਦੀ ਥਾਂ ਨਹੀਂ ਲੈਂਦਾ।

## ਰਿਪੋਜ਼ਿਟਰੀ ਦੇ ਡਿਪਲੌਇਮੈਂਟ ਦਸਤਾਵੇਜ਼

- [ਰਿਪੋਜ਼ਿਟਰੀ README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [ਬੈਕਐਂਡ ਅਤੇ ਵੈੱਬ ਡਿਪਲੌਇਮੈਂਟ ਗਾਈਡ](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK ਡਿਪਲੌਇਮੈਂਟ ਗਾਈਡ](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK ਬੁਨਿਆਦੀ ਢਾਂਚਾ](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
