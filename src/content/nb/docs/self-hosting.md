---
title: Guide til selvhosting
description: Kjør Nibomo lokalt med PostgreSQL, autentisering, backend, web og administrasjon, eller rull ut den dokumenterte produksjonsstakken med AWS CDK.
---

Nibomo støtter to ulike veier: et lokalt utviklingsmiljø og en produksjonsutrulling på AWS. Docker Compose kjører PostgreSQL og migreringer for lokal utvikling; det brukes ikke til produksjonsutrulling.

## Krav for lokal utvikling

- Git
- Bash
- GNU Make
- Docker med Docker Compose
- Node.js 24
- npm

Den medfølgende Docker Compose-filen kjører for øyeblikket PostgreSQL 18.4. Du trenger ikke en egen lokal PostgreSQL-installasjon.

## Rask lokal start

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

`make db-up` starter PostgreSQL og kjører `scripts/deploy/migrate.sh` via migreringscontaineren. Med standardpassordene som er kopiert fra `.env.example`, oppretter migreringen disse lokale kjøretidstilkoblingene:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- auth: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- rapportering: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Hvis du endrer `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` eller `REPORTING_DB_PASSWORD` i `.env`, må du bruke det samme endrede passordet i den tilhørende tilkoblings-URL-en.

### Rask start kun lokalt

Make-målet for backend laster ikke inn `.env` i rotmappen. Oppgi de nødvendige lokale innstillingene eksplisitt:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Kjør klientene i separate terminaler:

```bash
make web-dev
make admin-dev
```

Denne veien starter bevisst ikke `make auth-dev`. `AUTH_MODE=none` er en bevisst usikker modus som bare er ment for localhost; bruk den aldri i et utrullet miljø.
Veien dekker utvikling av kjernebackenden, offentlig discovery for Agent API, web og administrasjon, men gjør ikke Chat V2 tilgjengelig.

### Full lokal Cognito-flyt

Auth-målet laster inn `.env` i rotmappen, mens backend-målet ikke gjør det. Erstatt først den gamle `DATABASE_URL` i den kopierte `.env` med URL-en for auth-rollen, og legg til dine egne Cognito-verdier:

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

I backend-terminalen laster du eksplisitt inn `.env` og overstyrer deretter database-URL-en for auth med URL-en for backend-rollen for den prosessen:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Kjør `make web-dev` og `make admin-dev` i hver sin terminal. Begge målene laster inn `.env` i rotmappen.

Tjenestene bruker disse lokale adressene:

| Tjeneste | Adresse |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Auth, når den er konfigurert | `http://localhost:8081` |
| Backend-API | `http://localhost:8080/v1` |
| Nettapp | `http://localhost:3000` |
| Administrasjonsapp | `http://localhost:3001` |

Stopp PostgreSQL og migreringscontaineren med:

```bash
make db-down
```

## Lokal konfigurasjon

Start fra `.env.example`; den dokumenterer de tilgjengelige variablene og hvilke verdier som bare gjelder lokalt. Erstatt den gamle `DATABASE_URL` der før du kjører auth, som vist ovenfor.

De viktigste lokale innstillingene er:

- `MIGRATION_DATABASE_URL` for skjemamigreringer inne i Docker
- `DATABASE_URL` satt til rollen `auth_app` i `.env` i rotmappen for `make auth-dev`
- `DATABASE_URL` sendt med som rollen `backend_app` for `make backend-dev`
- `AUTH_MODE` og `ALLOW_INSECURE_LOCAL_AUTH` for autentisering i backenden
- `BACKEND_ALLOWED_ORIGINS` for de lokale opphavene til web og administrasjon
- `ALLOWED_REDIRECT_URIS` og `COOKIE_DOMAIN` for autentisering i nettleseren
- Cognito-verdiene og verdiene for øktkryptering når du tester ekte OTP

Agent API er en del av backenden. Det offentlige lokale discovery-dokumentet er tilgjengelig på `http://localhost:8080/v1/agent` etter at backenden har startet. Beskyttede agentoperasjoner krever `ApiKey`-autentisering og er ikke tilgjengelige på veien med `AUTH_MODE=none`.

### AI-omfang per vei

De lokale kommandoene ovenfor starter ikke den asynkrone chat-workeren. Den raske veien bruker dessuten `AUTH_MODE=none`, som Chat V2 avviser; å legge til en OpenAI-nøkkel eller en gjestekvote gir ikke den veien AI-støtte. Den fullstendige lokale Cognito-flyten gir en støttet autentiseringstransport, men starter fortsatt ikke workeren.

AWS CDK-utrullingen oppretter worker-Lambdaen og konfigurerer backenden til å kalle den. Leverandørlegitimasjon som `OPENAI_API_KEY` aktiverer modellkall for støttede autentiserte forespørsler. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` aktiverer og begrenser AI for gjester separat; den styrer ikke AI for innloggede brukere eller for bearer-autentiserte forespørsler. Langfuse-innstillingene er valgfri konfigurasjon for sporing.

## Native klienter

Det samme repositoriet inneholder iOS- og Android-klientene, men de lokale web- og serverkommandoene verken bygger eller distribuerer dem.

iOS-prosjektet leser lokale verter for API og autentisering fra:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Opprett den fra eksempelet ved behov:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Se [iOS-README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) og [Android-README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) i repositoriet for de separate arbeidsflytene for bygging og testing.

## Produksjon bruker AWS CDK

Den støttede produksjonsutrullingen er den medfølgende AWS CDK-stakken. Den er basert på AWS i stedet for å være leverandørnøytral, og omfatter:

- en VPC og private subnett
- PostgreSQL 18 på Amazon RDS
- Amazon Cognito med passordløs engangskode på e-post
- API Gateway og Lambda for backend-, autentiserings- og MCP-tjenestene
- en asynkron chat-worker-Lambda og en Lambda for egendefinert e-postavsender i Cognito
- S3 og CloudFront for nett- og administrasjonsappene
- Secrets Manager for legitimasjon til database, økter, e-post, overvåking og valgfri AI
- CloudWatch-alarmer, SNS-varsler og en sikkerhetskopieringsplan for RDS
- en OIDC-utrullingsrolle for GitHub Actions
- Cloudflare-skript for oppsett av de offentlige domenene

Utrullingen eksponerer `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` og `mcp.<domain>`. Den kan også opprette en apex-omdirigering når rotdomenet ellers ikke er i bruk.

Kjør produksjonshjelperen fra en operatørmaskin med:

- Node.js 24 og npm
- Bash og GNU Make
- Docker som kjører
- AWS CLI autentisert mot utrullingskontoen
- GitHub CLI autentisert mot målrepositoriet
- `curl`, `jq` og Python 3

Før utrullingen konfigurerer du operatørverdiene i `.env` i rotmappen. Det påkrevde settet omfatter AWS-region, domene, e-postadresse for varsler, GitHub-repositorium, Cloudflare-legitimasjon, Resend-legitimasjon og Sentry-konfigurasjon for backenden. Legitimasjon for OpenAI og Langfuse er valgfri.

Den foretrukne kommandoen for første utrulling fra roten av repositoriet er:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Den eksplisitte installasjonen av auth er foreløpig nødvendig fra en ren utsjekk, fordi utrullingshjelperen bundler pakken, men ikke installerer den. Hjelperen oppretter eller endrer ekte ressurser i AWS, Cloudflare og GitHub. Gå gjennom utrullingsdokumentasjonen i repositoriet og skykostnadene før du kjører den. Den kjører førstegangsoppsett av CDK, ruller ut infrastrukturen, kjører migreringer, laster opp ressurser for web og administrasjon, konfigurerer de offentlige DNS-postene for `app`, `admin`, `api`, `auth` og `mcp` med mindre dette hoppes over, og fyller inn manglende konfigurasjon for GitHub Actions.

Etter utrullingen:

1. Bekreft SNS-abonnementet som ble sendt til innboksen for `ALERT_EMAIL`.
2. Konfigurer og verifiser de separate DNS-postene for avsenderdomenet i Resend:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` kjører som standard `scripts/cloudflare/setup-dns.sh` for de offentlige applikasjonsdomenene. Det kjører ikke `setup-resend-domain.sh`; sistnevnte oppretter DNS-postene for e-postavsenderen på `mail.<domain>` og verifiserer domenet hos Resend. Hvis du ruller ut med `--skip-dns`, må du konfigurere de offentlige postene separat, slik det er dokumentert i AWS CDK-guiden.

## Dataportabilitet

Import og eksport av pakker for arbeidsområder overfører bare kort, taggene deres og tilhørende medier. De overfører ikke repetisjonshistorikk, tilstanden til FSRS-planleggeren, innstillinger for arbeidsområdet, fullstendige kortstokkstrukturer eller kontodata.

Behandle pakker som overføring av innhold, ikke som en fullstendig migrering fra hostet til selvhostet eller som sikkerhetskopi for katastrofegjenoppretting. Operatører er ansvarlige for å sikkerhetskopiere og gjenopprette den utrullede PostgreSQL-databasen og medielagringen.

## Operatørens ansvar

Selvhosting betyr at du skaffer og vedlikeholder:

- AWS-infrastruktur og kostnadene for den
- Cloudflare-DNS og domenekonfigurasjon
- legitimasjon for e-postlevering via Resend og domeneposter
- påkrevd konfigurasjon for overvåking med Sentry
- valgfri legitimasjon for AI-leverandør og Langfuse
- hemmeligheter, oppgraderinger, migreringer, varsler, sikkerhetskopier og testing av gjenoppretting
- native mobilbygg og distribusjon hvis du vil ha dine egne iOS- eller Android-utgivelser

Stakken inneholder automatisering for mange av disse systemene, men krever likevel en operatør. Docker Compose erstatter ikke denne produksjonsarkitekturen.

## Utrullingsdokumentasjon i repositoriet

- [README for repositoriet](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Guide til utrulling av backend og web](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Guide til utrulling med AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK-infrastruktur](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
