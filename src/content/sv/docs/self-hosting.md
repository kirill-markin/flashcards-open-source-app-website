---
title: Guide för drift på egen server
description: Kör Nibomo lokalt med PostgreSQL, autentisering, backend, webb och admin, eller driftsätt den dokumenterade produktionsstacken med AWS CDK.
---

Nibomo stöder två separata vägar: en lokal utvecklingsmiljö och en produktionsdriftsättning på AWS. Docker Compose kör PostgreSQL och migreringar för lokal utveckling; det är inte metoden för produktionsdriftsättning.

## Krav för lokal utveckling

- Git
- Bash
- GNU Make
- Docker med Docker Compose
- Node.js 24
- npm

Den medföljande Docker Compose-filen kör för närvarande PostgreSQL 18.4. Du behöver ingen separat lokal installation av PostgreSQL.

## Lokal snabbstart

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

`make db-up` startar PostgreSQL och kör `scripts/deploy/migrate.sh` via migreringscontainern. Med standardlösenorden som kopierats från `.env.example` skapar migreringen dessa lokala anslutningar för körning:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- auth: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- rapportering: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Om du ändrar `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` eller `REPORTING_DB_PASSWORD` i `.env` ska du använda samma nya lösenord i motsvarande anslutnings-URL.

### Snabb start enbart lokalt

Make-målet för backend läser inte in `.env` i roten. Ange därför de lokala inställningar som krävs uttryckligen på kommandoraden:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Kör klienterna i separata terminaler:

```bash
make web-dev
make admin-dev
```

Den här vägen startar medvetet inte `make auth-dev`. `AUTH_MODE=none` är ett uttryckligen osäkert läge enbart för localhost; använd det aldrig i en driftsatt miljö.
Den räcker för att utveckla kärnbackend, den publika discovery-funktionen i Agent API, webb och admin, men den gör inte Chat V2 tillgängligt.

### Fullständigt lokalt Cognito-flöde

Make-målet för auth läser in `.env` i roten, men målet för backend gör det inte. Ersätt först den äldre `DATABASE_URL` i den kopierade `.env` med URL:en för auth-rollen och lägg till dina riktiga Cognito-värden:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Starta auth:

```bash
make auth-dev
```

I backendterminalen läser du uttryckligen in `.env` och ersätter sedan, för just den processen, dess databas-URL för auth med URL:en för backend-rollen:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Kör `make web-dev` och `make admin-dev` i var sin terminal. Båda målen läser in `.env` i roten.

Tjänsterna använder dessa lokala adresser:

| Tjänst | Adress |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Auth, när den är konfigurerad | `http://localhost:8081` |
| Backend-API | `http://localhost:8080/v1` |
| Webbapp | `http://localhost:3000` |
| Adminapp | `http://localhost:3001` |

Stoppa PostgreSQL och migreringscontainern med:

```bash
make db-down
```

## Lokal konfiguration

Utgå från `.env.example`; den dokumenterar de tillgängliga variablerna och vilka värden som bara gäller lokalt. Ersätt dess äldre `DATABASE_URL` innan du kör auth, som visas ovan.

De viktigaste lokala inställningarna är:

- `MIGRATION_DATABASE_URL` för schemamigreringar i Docker
- `DATABASE_URL` satt till rollen `auth_app` i `.env` i roten för `make auth-dev`
- `DATABASE_URL` angiven som rollen `backend_app` för `make backend-dev`
- `AUTH_MODE` och `ALLOW_INSECURE_LOCAL_AUTH` för autentisering i backend
- `BACKEND_ALLOWED_ORIGINS` för de lokala ursprungen för webb och admin
- `ALLOWED_REDIRECT_URIS` och `COOKIE_DOMAIN` för autentisering i webbläsaren
- värdena för Cognito och sessionskryptering när du testar riktig OTP

Agent API är en del av backend. Dess publika lokala discovery-dokument finns på `http://localhost:8080/v1/agent` när backend har startat. Skyddade agentåtgärder kräver `ApiKey`-autentisering och är inte tillgängliga i vägen med `AUTH_MODE=none`.

### AI-omfattning per väg

De lokala kommandona ovan startar inte den asynkrona chattworkern. Den snabba vägen använder dessutom `AUTH_MODE=none`, som Chat V2 avvisar; att lägga till en OpenAI-nyckel eller en gästkvot ger inte den vägen stöd för AI. Det fullständiga lokala Cognito-flödet ger en autentiseringstransport som stöds, men det startar fortfarande inte workern.

Driftsättningen med AWS CDK skapar worker-Lambdan och konfigurerar backend att anropa den. Leverantörsuppgifter som `OPENAI_API_KEY` aktiverar modellanrop för autentiserade förfrågningar som stöds. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` aktiverar och begränsar separat AI för gäster; den styr inte AI för inloggade användare eller för bearer-autentiserade förfrågningar. Langfuse-inställningarna är valfri konfiguration för spårning.

## Inbyggda klienter

Samma repo innehåller iOS- och Android-klienterna, men de lokala webb- och serverkommandona bygger eller distribuerar dem inte.

iOS-projektet läser lokala API- och autentiseringsvärdar från:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Skapa den från exemplet vid behov:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Se repots [iOS-README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) och [Android-README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) för deras separata arbetsflöden för bygge och test.

## Produktion använder AWS CDK

Den produktionsdriftsättning som stöds är den medföljande AWS CDK-stacken. Den är byggd för AWS snarare än leverantörsneutral och innehåller:

- ett VPC och privata subnät
- PostgreSQL 18 på Amazon RDS
- e-postinloggning med engångskod utan lösenord via Amazon Cognito
- API Gateway och Lambda för backend-, autentiserings- och MCP-tjänsterna
- en Lambda för den asynkrona chattworkern och en Lambda för anpassad e-postavsändning i Cognito
- S3 och CloudFront för webb- och adminapparna
- Secrets Manager för databas-, sessions-, e-post- och övervakningsuppgifter samt valfria AI-uppgifter
- CloudWatch-larm, SNS-aviseringar och en plan för RDS-säkerhetskopiering
- en OIDC-driftsättningsroll för GitHub Actions
- Cloudflare-skript för konfiguration av de publika domänerna

Driftsättningen exponerar `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` och `mcp.<domain>`. Den kan också skapa en omdirigering för apex-domänen när rotdomänen annars inte används.

Kör hjälpskriptet för produktion från en operatörsdator med:

- Node.js 24 och npm
- Bash och GNU Make
- Docker igång
- AWS CLI autentiserat mot driftsättningskontot
- GitHub CLI autentiserat mot målrepot
- `curl`, `jq` och Python 3

Konfigurera operatörsvärdena i `.env` i roten innan du driftsätter. De obligatoriska värdena omfattar AWS-region, domän, e-postadress för larm, GitHub-repo, Cloudflare-uppgifter, Resend-uppgifter och Sentry-konfiguration för backend. OpenAI- och Langfuse-uppgifter är valfria.

Det rekommenderade kommandot för den första driftsättningen från repots rot är:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Den uttryckliga installationen av auth krävs för närvarande från en ren utcheckning eftersom hjälpskriptet för driftsättning paketerar det paketet men inte installerar det. Hjälpskriptet skapar eller ändrar riktiga resurser i AWS, Cloudflare och GitHub. Gå igenom repots driftsättningsdokumentation och molnkostnaderna innan du kör det. Det initierar CDK, driftsätter infrastrukturen, kör migreringar, laddar upp filerna för webb och admin, konfigurerar de publika DNS-posterna för `app`, `admin`, `api`, `auth` och `mcp` om du inte hoppar över det steget, och fyller i saknad konfiguration för GitHub Actions.

Efter driftsättningen:

1. Bekräfta SNS-prenumerationen som skickats till inkorgen för `ALERT_EMAIL`.
2. Konfigurera och verifiera de separata DNS-posterna för Resends avsändardomän:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` kör som standard `scripts/cloudflare/setup-dns.sh` för de publika applikationsdomänerna. Det kör inte `setup-resend-domain.sh`; det skriptet skapar DNS-posterna för e-postavsändning på `mail.<domain>` och verifierar den domänen hos Resend. Om du driftsätter med `--skip-dns` måste du konfigurera de publika posterna separat enligt guiden för AWS CDK.

## Dataportabilitet

Import och export av arbetsytepaket överför endast kort, deras taggar och tillhörande media. De överför inte repetitionshistorik, FSRS-schemaläggarens tillstånd, arbetsytans inställningar, fullständiga kortleksstrukturer eller kontouppgifter.

Se paketen som överföring av innehåll, inte som en fullständig migrering från molndrift till egen server eller som säkerhetskopia för katastrofåterställning. Operatörer ansvarar för att säkerhetskopiera och återställa den driftsatta PostgreSQL-databasen och medielagringen.

## Operatörens ansvar

Drift på egen server innebär att du tillhandahåller och underhåller:

- AWS-infrastruktur och dess kostnader
- Cloudflare-DNS och domänkonfiguration
- Resend-uppgifter för e-postleverans och domänens DNS-poster
- den obligatoriska Sentry-konfigurationen för övervakning
- valfria uppgifter för AI-leverantör och Langfuse
- hemligheter, uppgraderingar, migreringar, larm, säkerhetskopior och test av återställning
- bygge och distribution av de inbyggda mobilapparna om du vill ge ut egna versioner för iOS eller Android

Stacken innehåller automatisering för många av dessa system, men den kräver fortfarande en operatör. Docker Compose ersätter inte den här produktionsarkitekturen.

## Repots driftsättningsdokumentation

- [Repots README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Guide för driftsättning av backend och webb](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Guide för driftsättning med AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK-infrastruktur](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
