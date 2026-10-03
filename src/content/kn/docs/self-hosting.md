---
title: ಸ್ವಂತ ಹೋಸ್ಟಿಂಗ್ ಮಾರ್ಗದರ್ಶಿ
description: PostgreSQL, ದೃಢೀಕರಣ, ಬ್ಯಾಕೆಂಡ್, ವೆಬ್ ಮತ್ತು ಅಡ್ಮಿನ್ ಜೊತೆಗೆ Nibomo ಅನ್ನು ಲೋಕಲ್ ಆಗಿ ಚಲಾಯಿಸಿ, ಅಥವಾ ದಾಖಲಿಸಲಾದ AWS CDK ಪ್ರೊಡಕ್ಷನ್ ಸ್ಟ್ಯಾಕ್ ಅನ್ನು ಡಿಪ್ಲಾಯ್ ಮಾಡಿ.
---

Nibomo ಎರಡು ಪ್ರತ್ಯೇಕ ಮಾರ್ಗಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ: ಲೋಕಲ್ ಡೆವಲಪ್‌ಮೆಂಟ್ ಪರಿಸರ ಮತ್ತು AWS ಮೇಲಿನ ಪ್ರೊಡಕ್ಷನ್ ಡಿಪ್ಲಾಯ್‌ಮೆಂಟ್. Docker Compose ಲೋಕಲ್ ಡೆವಲಪ್‌ಮೆಂಟ್‌ಗಾಗಿ PostgreSQL ಮತ್ತು ಮೈಗ್ರೇಶನ್‌ಗಳನ್ನು ಚಲಾಯಿಸುತ್ತದೆ; ಅದು ಪ್ರೊಡಕ್ಷನ್ ಡಿಪ್ಲಾಯ್‌ಮೆಂಟ್ ವಿಧಾನವಲ್ಲ.

## ಲೋಕಲ್ ಡೆವಲಪ್‌ಮೆಂಟ್‌ನ ಅವಶ್ಯಕತೆಗಳು

- Git
- Bash
- GNU Make
- Docker Compose ಸಹಿತ Docker
- Node.js 24
- npm

ಒದಗಿಸಲಾದ Docker Compose ಫೈಲ್ ಪ್ರಸ್ತುತ PostgreSQL 18.4 ಅನ್ನು ಚಲಾಯಿಸುತ್ತದೆ. ಪ್ರತ್ಯೇಕವಾಗಿ ಲೋಕಲ್ PostgreSQL ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವ ಅಗತ್ಯವಿಲ್ಲ.

## ಲೋಕಲ್ ತ್ವರಿತ ಆರಂಭ

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

`make db-up` PostgreSQL ಅನ್ನು ಆರಂಭಿಸುತ್ತದೆ ಮತ್ತು ಮೈಗ್ರೇಶನ್ ಕಂಟೇನರ್ ಮೂಲಕ `scripts/deploy/migrate.sh` ಚಲಾಯಿಸುತ್ತದೆ. `.env.example` ನಿಂದ ನಕಲಿಸಿದ ಡೀಫಾಲ್ಟ್ ಪಾಸ್‌ವರ್ಡ್‌ಗಳೊಂದಿಗೆ, ಮೈಗ್ರೇಶನ್ ಈ ಲೋಕಲ್ ರನ್‌ಟೈಮ್ ಸಂಪರ್ಕಗಳನ್ನು ಸಿದ್ಧಪಡಿಸುತ್ತದೆ:

- ಬ್ಯಾಕೆಂಡ್: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- ದೃಢೀಕರಣ: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- ರಿಪೋರ್ಟಿಂಗ್: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

`.env` ನಲ್ಲಿ `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` ಅಥವಾ `REPORTING_DB_PASSWORD` ಬದಲಾಯಿಸಿದರೆ, ಹೊಂದಿಕೆಯಾಗುವ ಸಂಪರ್ಕ URL ನಲ್ಲಿಯೂ ಅದೇ ಬದಲಾದ ಪಾಸ್‌ವರ್ಡ್ ಬಳಸಿ.

### ವೇಗದ, ಲೋಕಲ್‌ಗೆ ಮಾತ್ರ ಸೀಮಿತ ಆರಂಭ

ಬ್ಯಾಕೆಂಡ್ Make ಟಾರ್ಗೆಟ್ ರೂಟ್ `.env` ಅನ್ನು ಲೋಡ್ ಮಾಡುವುದಿಲ್ಲ. ಅದಕ್ಕೆ ಬೇಕಾದ ಲೋಕಲ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ನೀಡಿ:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

ಕ್ಲೈಂಟ್‌ಗಳನ್ನು ಪ್ರತ್ಯೇಕ ಟರ್ಮಿನಲ್‌ಗಳಲ್ಲಿ ಚಲಾಯಿಸಿ:

```bash
make web-dev
make admin-dev
```

ಈ ಮಾರ್ಗ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ `make auth-dev` ಅನ್ನು ಆರಂಭಿಸುವುದಿಲ್ಲ. `AUTH_MODE=none` ಸ್ಪಷ್ಟವಾಗಿ ಅಸುರಕ್ಷಿತವಾದ, localhost ಗೆ ಮಾತ್ರ ಸೀಮಿತ ಮೋಡ್; ಡಿಪ್ಲಾಯ್ ಮಾಡಿದ ಪರಿಸರದಲ್ಲಿ ಇದನ್ನು ಎಂದಿಗೂ ಬಳಸಬೇಡಿ.
ಇದು ಮುಖ್ಯ ಬ್ಯಾಕೆಂಡ್, ಸಾರ್ವಜನಿಕ Agent API ಡಿಸ್ಕವರಿ, ವೆಬ್ ಮತ್ತು ಅಡ್ಮಿನ್ ಡೆವಲಪ್‌ಮೆಂಟ್ ಅನ್ನು ಒಳಗೊಳ್ಳುತ್ತದೆ, ಆದರೆ Chat V2 ಅನ್ನು ಲಭ್ಯವಾಗಿಸುವುದಿಲ್ಲ.

### ಸಂಪೂರ್ಣ ಲೋಕಲ್ Cognito ಫ್ಲೋ

ದೃಢೀಕರಣ ಟಾರ್ಗೆಟ್ ರೂಟ್ `.env` ಅನ್ನು ಲೋಡ್ ಮಾಡುತ್ತದೆ, ಆದರೆ ಬ್ಯಾಕೆಂಡ್ ಟಾರ್ಗೆಟ್ ಮಾಡುವುದಿಲ್ಲ. ಮೊದಲು ನಕಲಿಸಿದ `.env` ನಲ್ಲಿರುವ ಹಳೆಯ `DATABASE_URL` ಅನ್ನು ದೃಢೀಕರಣ ರೋಲ್‌ನ URL ನಿಂದ ಬದಲಾಯಿಸಿ ಮತ್ತು ನಿಮ್ಮ ನೈಜ Cognito ಮೌಲ್ಯಗಳನ್ನು ಸೇರಿಸಿ:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

ದೃಢೀಕರಣವನ್ನು ಆರಂಭಿಸಿ:

```bash
make auth-dev
```

ಬ್ಯಾಕೆಂಡ್ ಟರ್ಮಿನಲ್‌ನಲ್ಲಿ, `.env` ಅನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಲೋಡ್ ಮಾಡಿ, ನಂತರ ಆ ಪ್ರಕ್ರಿಯೆಗೆ ಮಾತ್ರ ಅದರ ದೃಢೀಕರಣ ಡೇಟಾಬೇಸ್ URL ಅನ್ನು ಬ್ಯಾಕೆಂಡ್ ರೋಲ್‌ನ URL ನಿಂದ ಅತಿಕ್ರಮಿಸಿ:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

`make web-dev` ಮತ್ತು `make admin-dev` ಅನ್ನು ಅವುಗಳದೇ ಟರ್ಮಿನಲ್‌ಗಳಲ್ಲಿ ಚಲಾಯಿಸಿ. ಎರಡೂ ಟಾರ್ಗೆಟ್‌ಗಳು ರೂಟ್ `.env` ಅನ್ನು ಲೋಡ್ ಮಾಡುತ್ತವೆ.

ಸೇವೆಗಳು ಈ ಲೋಕಲ್ ವಿಳಾಸಗಳನ್ನು ಬಳಸುತ್ತವೆ:

| ಸೇವೆ | ವಿಳಾಸ |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| ದೃಢೀಕರಣ, ಕಾನ್ಫಿಗರ್ ಮಾಡಿದ್ದಾಗ | `http://localhost:8081` |
| ಬ್ಯಾಕೆಂಡ್ API | `http://localhost:8080/v1` |
| ವೆಬ್ ಆ್ಯಪ್ | `http://localhost:3000` |
| ಅಡ್ಮಿನ್ ಆ್ಯಪ್ | `http://localhost:3001` |

PostgreSQL ಮತ್ತು ಮೈಗ್ರೇಶನ್ ಕಂಟೇನರ್ ಅನ್ನು ಇದರಿಂದ ನಿಲ್ಲಿಸಿ:

```bash
make db-down
```

## ಲೋಕಲ್ ಕಾನ್ಫಿಗರೇಶನ್

`.env.example` ನಿಂದ ಆರಂಭಿಸಿ; ಲಭ್ಯವಿರುವ ವೇರಿಯೇಬಲ್‌ಗಳನ್ನು ಮತ್ತು ಯಾವ ಮೌಲ್ಯಗಳು ಲೋಕಲ್‌ಗೆ ಮಾತ್ರ ಎಂಬುದನ್ನು ಅದು ದಾಖಲಿಸುತ್ತದೆ. ಮೇಲೆ ತೋರಿಸಿದಂತೆ, ದೃಢೀಕರಣವನ್ನು ಚಲಾಯಿಸುವ ಮೊದಲು ಅದರ ಹಳೆಯ `DATABASE_URL` ಅನ್ನು ಬದಲಾಯಿಸಿ.

ಮುಖ್ಯ ಲೋಕಲ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳು:

- Docker ಒಳಗಿನ ಸ್ಕೀಮಾ ಮೈಗ್ರೇಶನ್‌ಗಳಿಗಾಗಿ `MIGRATION_DATABASE_URL`
- `make auth-dev` ಗಾಗಿ ರೂಟ್ `.env` ನಲ್ಲಿ `auth_app` ರೋಲ್‌ಗೆ ಹೊಂದಿಸಿದ `DATABASE_URL`
- `make backend-dev` ಗಾಗಿ `backend_app` ರೋಲ್ ಆಗಿ ನೀಡಿದ `DATABASE_URL`
- ಬ್ಯಾಕೆಂಡ್ ದೃಢೀಕರಣಕ್ಕಾಗಿ `AUTH_MODE` ಮತ್ತು `ALLOW_INSECURE_LOCAL_AUTH`
- ಲೋಕಲ್ ವೆಬ್ ಮತ್ತು ಅಡ್ಮಿನ್ ಆರಿಜಿನ್‌ಗಳಿಗಾಗಿ `BACKEND_ALLOWED_ORIGINS`
- ಬ್ರೌಸರ್ ದೃಢೀಕರಣಕ್ಕಾಗಿ `ALLOWED_REDIRECT_URIS` ಮತ್ತು `COOKIE_DOMAIN`
- ನೈಜ OTP ಪರೀಕ್ಷಿಸುವಾಗ Cognito ಮತ್ತು ಸೆಷನ್ ಎನ್‌ಕ್ರಿಪ್ಶನ್ ಮೌಲ್ಯಗಳು

Agent API ಬ್ಯಾಕೆಂಡ್‌ನ ಭಾಗ. ಬ್ಯಾಕೆಂಡ್ ಆರಂಭವಾದ ನಂತರ ಅದರ ಸಾರ್ವಜನಿಕ ಲೋಕಲ್ ಡಿಸ್ಕವರಿ ದಾಖಲೆ `http://localhost:8080/v1/agent` ನಲ್ಲಿ ಲಭ್ಯವಿರುತ್ತದೆ. ಸಂರಕ್ಷಿತ Agent ಕಾರ್ಯಾಚರಣೆಗಳಿಗೆ `ApiKey` ದೃಢೀಕರಣ ಅಗತ್ಯ, ಮತ್ತು ಅವು `AUTH_MODE=none` ಮಾರ್ಗದಲ್ಲಿ ಲಭ್ಯವಿಲ್ಲ.

### ಮಾರ್ಗದ ಪ್ರಕಾರ AI ವ್ಯಾಪ್ತಿ

ಮೇಲಿನ ಲೋಕಲ್ ಕಮಾಂಡ್‌ಗಳು ಅಸಿಂಕ್ರೊನಸ್ ಚಾಟ್ ವರ್ಕರ್ ಅನ್ನು ಆರಂಭಿಸುವುದಿಲ್ಲ. ವೇಗದ ಮಾರ್ಗವು `AUTH_MODE=none` ಅನ್ನೂ ಬಳಸುತ್ತದೆ, ಅದನ್ನು Chat V2 ತಿರಸ್ಕರಿಸುತ್ತದೆ; OpenAI ಕೀ ಅಥವಾ ಅತಿಥಿ ಕೋಟಾ ಸೇರಿಸಿದರೂ ಆ ಮಾರ್ಗದಲ್ಲಿ AI ಕೆಲಸ ಮಾಡುವುದಿಲ್ಲ. ಸಂಪೂರ್ಣ ಲೋಕಲ್ Cognito ಫ್ಲೋ ಬೆಂಬಲಿತ ದೃಢೀಕರಣ ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್ ಅನ್ನು ಒದಗಿಸುತ್ತದೆ, ಆದರೆ ಅದೂ ವರ್ಕರ್ ಅನ್ನು ಆರಂಭಿಸುವುದಿಲ್ಲ.

AWS CDK ಡಿಪ್ಲಾಯ್‌ಮೆಂಟ್ ವರ್ಕರ್ Lambda ಅನ್ನು ರಚಿಸುತ್ತದೆ ಮತ್ತು ಅದನ್ನು ಕರೆಯಲು ಬ್ಯಾಕೆಂಡ್ ಅನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡುತ್ತದೆ. `OPENAI_API_KEY` ನಂತಹ ಪೂರೈಕೆದಾರರ ಕ್ರೆಡೆನ್ಶಿಯಲ್‌ಗಳು ಬೆಂಬಲಿತ ದೃಢೀಕೃತ ವಿನಂತಿಗಳಿಗೆ ಮಾಡೆಲ್ ಕರೆಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತವೆ. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` ಪ್ರತ್ಯೇಕವಾಗಿ ಅತಿಥಿ AI ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ ಮತ್ತು ಮಿತಿಗೊಳಿಸುತ್ತದೆ; ಸೈನ್ ಇನ್ ಆದ ಅಥವಾ bearer ದೃಢೀಕೃತ AI ಅನ್ನು ಅದು ನಿಯಂತ್ರಿಸುವುದಿಲ್ಲ. Langfuse ಸೆಟ್ಟಿಂಗ್‌ಗಳು ಐಚ್ಛಿಕ ಟ್ರೇಸಿಂಗ್ ಕಾನ್ಫಿಗರೇಶನ್.

## ನೇಟಿವ್ ಕ್ಲೈಂಟ್‌ಗಳು

ಅದೇ ರೆಪೊಸಿಟರಿಯಲ್ಲಿ iOS ಮತ್ತು Android ಕ್ಲೈಂಟ್‌ಗಳಿವೆ, ಆದರೆ ಲೋಕಲ್ ವೆಬ್/ಸರ್ವರ್ ಕಮಾಂಡ್‌ಗಳು ಅವುಗಳನ್ನು ಬಿಲ್ಡ್ ಮಾಡುವುದಿಲ್ಲ ಅಥವಾ ವಿತರಿಸುವುದಿಲ್ಲ.

iOS ಪ್ರಾಜೆಕ್ಟ್ ಲೋಕಲ್ API ಮತ್ತು ದೃಢೀಕರಣ ಹೋಸ್ಟ್‌ಗಳನ್ನು ಇಲ್ಲಿಂದ ಓದುತ್ತದೆ:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

ಅಗತ್ಯವಿದ್ದಾಗ ಉದಾಹರಣೆ ಫೈಲ್‌ನಿಂದ ಅದನ್ನು ರಚಿಸಿ:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

ಅವುಗಳ ಪ್ರತ್ಯೇಕ ಬಿಲ್ಡ್ ಮತ್ತು ಟೆಸ್ಟ್ ಪ್ರಕ್ರಿಯೆಗಳಿಗಾಗಿ ರೆಪೊಸಿಟರಿಯ [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) ಮತ್ತು [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) ನೋಡಿ.

## ಪ್ರೊಡಕ್ಷನ್ AWS CDK ಬಳಸುತ್ತದೆ

ಬೆಂಬಲಿತ ಪ್ರೊಡಕ್ಷನ್ ಡಿಪ್ಲಾಯ್‌ಮೆಂಟ್ ಎಂದರೆ ಒಳಗೊಂಡಿರುವ AWS CDK ಸ್ಟ್ಯಾಕ್. ಇದು ವೆಂಡರ್-ತಟಸ್ಥವಲ್ಲ, AWS ಆಧಾರಿತ, ಮತ್ತು ಇದರಲ್ಲಿ ಇವು ಸೇರಿವೆ:

- ಒಂದು VPC ಮತ್ತು ಖಾಸಗಿ ಸಬ್‌ನೆಟ್‌ಗಳು
- Amazon RDS ಮೇಲೆ PostgreSQL 18
- Amazon Cognito ಪಾಸ್‌ವರ್ಡ್ ಇಲ್ಲದ ಇಮೇಲ್ OTP
- ಬ್ಯಾಕೆಂಡ್, ದೃಢೀಕರಣ ಮತ್ತು MCP ಸೇವೆಗಳಿಗಾಗಿ API Gateway ಮತ್ತು Lambda
- ಅಸಿಂಕ್ರೊನಸ್ ಚಾಟ್ ವರ್ಕರ್ Lambda ಮತ್ತು Cognito ಕಸ್ಟಮ್ ಇಮೇಲ್ ಸೆಂಡರ್ Lambda
- ವೆಬ್ ಮತ್ತು ಅಡ್ಮಿನ್ ಆ್ಯಪ್‌ಗಳಿಗಾಗಿ S3 ಮತ್ತು CloudFront
- ಡೇಟಾಬೇಸ್, ಸೆಷನ್, ಇಮೇಲ್, ಮಾನಿಟರಿಂಗ್ ಮತ್ತು ಐಚ್ಛಿಕ AI ಕ್ರೆಡೆನ್ಶಿಯಲ್‌ಗಳಿಗಾಗಿ Secrets Manager
- CloudWatch ಅಲಾರಂಗಳು, SNS ಅಧಿಸೂಚನೆಗಳು ಮತ್ತು RDS ಬ್ಯಾಕಪ್ ಯೋಜನೆ
- GitHub Actions OIDC ಡಿಪ್ಲಾಯ್‌ಮೆಂಟ್ ರೋಲ್
- ಸಾರ್ವಜನಿಕ ಡೊಮೇನ್‌ಗಳಿಗಾಗಿ Cloudflare ಸೆಟಪ್ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳು

ಡಿಪ್ಲಾಯ್‌ಮೆಂಟ್ `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` ಮತ್ತು `mcp.<domain>` ಅನ್ನು ಸಾರ್ವಜನಿಕಗೊಳಿಸುತ್ತದೆ. ಮೂಲ ಡೊಮೇನ್ ಬೇರೆ ಯಾವುದಕ್ಕೂ ಬಳಕೆಯಲ್ಲಿಲ್ಲದಿದ್ದರೆ, ಡಿಪ್ಲಾಯ್‌ಮೆಂಟ್ ಆ ಮೂಲ ಡೊಮೇನ್‌ನಿಂದ ರಿಡೈರೆಕ್ಟ್ ಅನ್ನೂ ರಚಿಸಬಹುದು.

ಪ್ರೊಡಕ್ಷನ್ ಹೆಲ್ಪರ್ ಅನ್ನು ಇವು ಇರುವ ಆಪರೇಟರ್ ಕಂಪ್ಯೂಟರ್‌ನಿಂದ ಚಲಾಯಿಸಿ:

- Node.js 24 ಮತ್ತು npm
- Bash ಮತ್ತು GNU Make
- ಚಾಲನೆಯಲ್ಲಿರುವ Docker
- ಡಿಪ್ಲಾಯ್‌ಮೆಂಟ್ ಖಾತೆಗೆ ದೃಢೀಕರಿಸಿದ AWS CLI
- ಗುರಿ ರೆಪೊಸಿಟರಿಗೆ ದೃಢೀಕರಿಸಿದ GitHub CLI
- `curl`, `jq` ಮತ್ತು Python 3

ಡಿಪ್ಲಾಯ್ ಮಾಡುವ ಮೊದಲು, ರೂಟ್ `.env` ನಲ್ಲಿ ಆಪರೇಟರ್ ಮೌಲ್ಯಗಳನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ. ಅಗತ್ಯ ಮೌಲ್ಯಗಳಲ್ಲಿ AWS ರೀಜನ್, ಡೊಮೇನ್, ಅಲರ್ಟ್ ಇಮೇಲ್, GitHub ರೆಪೊಸಿಟರಿ, Cloudflare ಕ್ರೆಡೆನ್ಶಿಯಲ್‌ಗಳು, Resend ಕ್ರೆಡೆನ್ಶಿಯಲ್‌ಗಳು ಮತ್ತು ಬ್ಯಾಕೆಂಡ್ Sentry ಕಾನ್ಫಿಗರೇಶನ್ ಸೇರಿವೆ. OpenAI ಮತ್ತು Langfuse ಕ್ರೆಡೆನ್ಶಿಯಲ್‌ಗಳು ಐಚ್ಛಿಕ.

ರೆಪೊಸಿಟರಿಯ ರೂಟ್‌ನಿಂದ ಮೊದಲ ಡಿಪ್ಲಾಯ್‌ಮೆಂಟ್‌ಗೆ ಶಿಫಾರಸು ಮಾಡಲಾದ ಕಮಾಂಡ್:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

ಡಿಪ್ಲಾಯ್‌ಮೆಂಟ್ ಹೆಲ್ಪರ್ ಆ ಪ್ಯಾಕೇಜ್ ಅನ್ನು ಬಂಡಲ್ ಮಾಡುತ್ತದೆ ಆದರೆ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ಸ್ವಚ್ಛ ಚೆಕ್‌ಔಟ್‌ನಿಂದ ಆರಂಭಿಸುವಾಗ ಸದ್ಯಕ್ಕೆ ದೃಢೀಕರಣ ಪ್ಯಾಕೇಜ್ ಅನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವುದು ಅಗತ್ಯ. ಹೆಲ್ಪರ್ ನೈಜ AWS, Cloudflare ಮತ್ತು GitHub ಸಂಪನ್ಮೂಲಗಳನ್ನು ರಚಿಸುತ್ತದೆ ಅಥವಾ ಬದಲಾಯಿಸುತ್ತದೆ. ಅದನ್ನು ಚಲಾಯಿಸುವ ಮೊದಲು ರೆಪೊಸಿಟರಿಯ ಡಿಪ್ಲಾಯ್‌ಮೆಂಟ್ ದಾಖಲೆಗಳನ್ನು ಮತ್ತು ಕ್ಲೌಡ್ ವೆಚ್ಚಗಳನ್ನು ಪರಿಶೀಲಿಸಿ. ಅದು CDK ಅನ್ನು ಬೂಟ್‌ಸ್ಟ್ರ್ಯಾಪ್ ಮಾಡುತ್ತದೆ, ಇನ್‌ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ಅನ್ನು ಡಿಪ್ಲಾಯ್ ಮಾಡುತ್ತದೆ, ಮೈಗ್ರೇಶನ್‌ಗಳನ್ನು ಚಲಾಯಿಸುತ್ತದೆ, ವೆಬ್ ಮತ್ತು ಅಡ್ಮಿನ್ ಅಸೆಟ್‌ಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡುತ್ತದೆ, ಬಿಟ್ಟುಬಿಡದ ಹೊರತು ಸಾರ್ವಜನಿಕ `app`, `admin`, `api`, `auth` ಮತ್ತು `mcp` DNS ರೆಕಾರ್ಡ್‌ಗಳನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡುತ್ತದೆ, ಮತ್ತು ಇಲ್ಲದಿರುವ GitHub Actions ಕಾನ್ಫಿಗರೇಶನ್ ಅನ್ನು ತುಂಬುತ್ತದೆ.

ಡಿಪ್ಲಾಯ್‌ಮೆಂಟ್ ನಂತರ:

1. `ALERT_EMAIL` ಇನ್‌ಬಾಕ್ಸ್‌ಗೆ ಕಳುಹಿಸಲಾದ SNS ಚಂದಾದಾರಿಕೆಯನ್ನು ದೃಢೀಕರಿಸಿ.
2. ಪ್ರತ್ಯೇಕ Resend ಕಳುಹಿಸುವ ಡೊಮೇನ್‌ನ DNS ರೆಕಾರ್ಡ್‌ಗಳನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ ಪರಿಶೀಲಿಸಿ:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` ಡೀಫಾಲ್ಟ್ ಆಗಿ ಸಾರ್ವಜನಿಕ ಅಪ್ಲಿಕೇಶನ್ ಡೊಮೇನ್‌ಗಳಿಗಾಗಿ `scripts/cloudflare/setup-dns.sh` ಚಲಾಯಿಸುತ್ತದೆ. ಅದು `setup-resend-domain.sh` ಅನ್ನು ಚಲಾಯಿಸುವುದಿಲ್ಲ; ಎರಡನೆಯದು `mail.<domain>` ಗಾಗಿ ಇಮೇಲ್ ಕಳುಹಿಸುವವರ ರೆಕಾರ್ಡ್‌ಗಳನ್ನು ರಚಿಸುತ್ತದೆ ಮತ್ತು ಆ ಡೊಮೇನ್ ಅನ್ನು Resend ನಲ್ಲಿ ಪರಿಶೀಲಿಸುತ್ತದೆ. ನೀವು `--skip-dns` ಜೊತೆಗೆ ಡಿಪ್ಲಾಯ್ ಮಾಡಿದರೆ, AWS CDK ಮಾರ್ಗದರ್ಶಿಯಲ್ಲಿ ದಾಖಲಿಸಿರುವಂತೆ ಸಾರ್ವಜನಿಕ ರೆಕಾರ್ಡ್‌ಗಳನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಕಾನ್ಫಿಗರ್ ಮಾಡಿ.

## ಡೇಟಾ ಪೋರ್ಟಬಿಲಿಟಿ

ಕಾರ್ಯಸ್ಥಳ ಪ್ಯಾಕೇಜ್‌ನ ಇಂಪೋರ್ಟ್ ಮತ್ತು ಎಕ್ಸ್‌ಪೋರ್ಟ್ ಕಾರ್ಡ್‌ಗಳು, ಅವುಗಳ ಟ್ಯಾಗ್‌ಗಳು ಮತ್ತು ಸಂಬಂಧಿತ ಮೀಡಿಯಾವನ್ನು ಮಾತ್ರ ವರ್ಗಾಯಿಸುತ್ತದೆ. ಅದು ಪುನರಾವರ್ತನೆಯ ಇತಿಹಾಸ, FSRS ಶೆಡ್ಯೂಲರ್ ಸ್ಥಿತಿ, ಕಾರ್ಯಸ್ಥಳದ ಸೆಟ್ಟಿಂಗ್‌ಗಳು, ಸಂಪೂರ್ಣ ಡೆಕ್ ರಚನೆಗಳು ಅಥವಾ ಖಾತೆಯ ಡೇಟಾವನ್ನು ವರ್ಗಾಯಿಸುವುದಿಲ್ಲ.

ಪ್ಯಾಕೇಜ್‌ಗಳನ್ನು ವಿಷಯ ವರ್ಗಾವಣೆ ಎಂದು ಪರಿಗಣಿಸಿ, ಹೋಸ್ಟ್ ಮಾಡಿದ ಸೇವೆಯಿಂದ ಸ್ವಂತ ಹೋಸ್ಟಿಂಗ್‌ಗೆ ಸಂಪೂರ್ಣ ಮೈಗ್ರೇಶನ್ ಅಥವಾ ವಿಪತ್ತು ಮರುಪ್ರಾಪ್ತಿ ಬ್ಯಾಕಪ್ ಎಂದು ಅಲ್ಲ. ಡಿಪ್ಲಾಯ್ ಮಾಡಿದ PostgreSQL ಡೇಟಾಬೇಸ್ ಮತ್ತು ಮೀಡಿಯಾ ಸ್ಟೋರೇಜ್‌ನ ಬ್ಯಾಕಪ್ ಮತ್ತು ಮರುಸ್ಥಾಪನೆಗೆ ಆಪರೇಟರ್‌ಗಳೇ ಜವಾಬ್ದಾರರು.

## ಆಪರೇಟರ್‌ನ ಜವಾಬ್ದಾರಿಗಳು

ಸ್ವಂತ ಹೋಸ್ಟಿಂಗ್ ಎಂದರೆ ಇವುಗಳನ್ನು ನೀವೇ ಒದಗಿಸಿ ನಿರ್ವಹಿಸುತ್ತೀರಿ:

- AWS ಇನ್‌ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ಮತ್ತು ಅದರ ವೆಚ್ಚಗಳು
- Cloudflare DNS ಮತ್ತು ಡೊಮೇನ್ ಕಾನ್ಫಿಗರೇಶನ್
- Resend ಇಮೇಲ್ ವಿತರಣಾ ಕ್ರೆಡೆನ್ಶಿಯಲ್‌ಗಳು ಮತ್ತು ಡೊಮೇನ್ ರೆಕಾರ್ಡ್‌ಗಳು
- ಅಗತ್ಯವಿರುವ Sentry ಮಾನಿಟರಿಂಗ್ ಕಾನ್ಫಿಗರೇಶನ್
- ಐಚ್ಛಿಕ AI ಪೂರೈಕೆದಾರ ಮತ್ತು Langfuse ಕ್ರೆಡೆನ್ಶಿಯಲ್‌ಗಳು
- ಸೀಕ್ರೆಟ್‌ಗಳು, ಅಪ್‌ಗ್ರೇಡ್‌ಗಳು, ಮೈಗ್ರೇಶನ್‌ಗಳು, ಅಲರ್ಟ್‌ಗಳು, ಬ್ಯಾಕಪ್‌ಗಳು ಮತ್ತು ಮರುಸ್ಥಾಪನೆಯ ಪರೀಕ್ಷೆ
- ನಿಮ್ಮದೇ iOS ಅಥವಾ Android ಬಿಡುಗಡೆಗಳು ಬೇಕಿದ್ದರೆ, ನೇಟಿವ್ ಮೊಬೈಲ್ ಬಿಲ್ಡ್‌ಗಳು ಮತ್ತು ವಿತರಣೆ

ಈ ಸ್ಟ್ಯಾಕ್ ಇವುಗಳಲ್ಲಿ ಹಲವು ವ್ಯವಸ್ಥೆಗಳಿಗೆ ಆಟೊಮೇಶನ್ ಅನ್ನು ಒಳಗೊಂಡಿದೆ, ಆದರೆ ಅದಕ್ಕೆ ಈಗಲೂ ಒಬ್ಬ ಆಪರೇಟರ್ ಬೇಕು. Docker Compose ಈ ಪ್ರೊಡಕ್ಷನ್ ಆರ್ಕಿಟೆಕ್ಚರ್‌ಗೆ ಪರ್ಯಾಯವಲ್ಲ.

## ರೆಪೊಸಿಟರಿಯ ಡಿಪ್ಲಾಯ್‌ಮೆಂಟ್ ದಾಖಲೆಗಳು

- [ರೆಪೊಸಿಟರಿ README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [ಬ್ಯಾಕೆಂಡ್ ಮತ್ತು ವೆಬ್ ಡಿಪ್ಲಾಯ್‌ಮೆಂಟ್ ಮಾರ್ಗದರ್ಶಿ](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK ಡಿಪ್ಲಾಯ್‌ಮೆಂಟ್ ಮಾರ್ಗದರ್ಶಿ](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK ಇನ್‌ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
