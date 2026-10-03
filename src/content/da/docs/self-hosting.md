---
title: Vejledning til selvhosting
description: Kør Nibomo lokalt med PostgreSQL, godkendelse, backend, web og admin, eller udrul den dokumenterede produktionsstak med AWS CDK.
---

Nibomo understøtter to adskilte veje: et lokalt udviklingsmiljø og en produktionsudrulning på AWS. Docker Compose kører PostgreSQL og migreringer til lokal udvikling; det er ikke metoden til produktionsudrulning.

## Krav til lokal udvikling

- Git
- Bash
- GNU Make
- Docker med Docker Compose
- Node.js 24
- npm

Den medfølgende Docker Compose-fil kører i øjeblikket PostgreSQL 18.4. Du behøver ikke en separat lokal installation af PostgreSQL.

## Lokal hurtigstart

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

`make db-up` starter PostgreSQL og kører `scripts/deploy/migrate.sh` via migreringscontaineren. Med standardadgangskoderne kopieret fra `.env.example` opretter migreringen disse lokale runtime-forbindelser:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- auth: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- reporting: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Hvis du ændrer `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` eller `REPORTING_DB_PASSWORD` i `.env`, skal du bruge den samme ændrede adgangskode i den tilsvarende forbindelses-URL.

### Hurtig start kun til lokal brug

Backendens Make-target indlæser ikke `.env` i roden. Angiv de lokale indstillinger, den kræver, eksplicit:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Kør klienterne i separate terminaler:

```bash
make web-dev
make admin-dev
```

Denne vej starter bevidst ikke `make auth-dev`. `AUTH_MODE=none` er en udtrykkeligt usikker tilstand udelukkende til localhost; brug den aldrig i et udrullet miljø.
Den dækker udvikling af kernebackenden, den offentlige discovery i Agent API, web og admin, men den gør ikke Chat V2 tilgængelig.

### Fuldt lokalt Cognito-flow

Auth-targetet indlæser `.env` i roden, mens backend-targetet ikke gør. Erstat først den gamle `DATABASE_URL` i den kopierede `.env` med URL'en for auth-rollen, og tilføj dine rigtige Cognito-værdier:

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

I backendterminalen skal du eksplicit indlæse `.env` og derefter overskrive dens database-URL for auth med URL'en for backend-rollen for netop den proces:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Kør `make web-dev` og `make admin-dev` i hver sin terminal. Begge targets indlæser `.env` i roden.

Tjenesterne bruger disse lokale adresser:

| Tjeneste | Adresse |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Auth, når den er konfigureret | `http://localhost:8081` |
| Backend-API | `http://localhost:8080/v1` |
| Webapp | `http://localhost:3000` |
| Admin-app | `http://localhost:3001` |

Stop PostgreSQL og migreringscontaineren med:

```bash
make db-down
```

## Lokal konfiguration

Start fra `.env.example`; den dokumenterer de tilgængelige variabler, og hvilke værdier der kun gælder lokalt. Erstat dens gamle `DATABASE_URL`, før du kører auth, som vist ovenfor.

De vigtigste lokale indstillinger er:

- `MIGRATION_DATABASE_URL` til skemamigreringer inde i Docker
- `DATABASE_URL` sat til rollen `auth_app` i `.env` i roden til `make auth-dev`
- `DATABASE_URL` angivet som rollen `backend_app` til `make backend-dev`
- `AUTH_MODE` og `ALLOW_INSECURE_LOCAL_AUTH` til backendens godkendelse
- `BACKEND_ALLOWED_ORIGINS` til de lokale origins for web og admin
- `ALLOWED_REDIRECT_URIS` og `COOKIE_DOMAIN` til godkendelse i browseren
- Cognito-værdierne og værdierne til sessionskryptering, når du tester rigtig engangskode-login

Agent API er en del af backenden. Dets offentlige lokale discovery-dokument er tilgængeligt på `http://localhost:8080/v1/agent`, når backenden er startet. Beskyttede agentoperationer kræver `ApiKey`-godkendelse og er ikke tilgængelige på vejen med `AUTH_MODE=none`.

### AI-understøttelse efter vej

De lokale kommandoer ovenfor starter ikke den asynkrone chatworker. Den hurtige vej bruger også `AUTH_MODE=none`, som Chat V2 afviser; en OpenAI-nøgle eller en gæstekvote gør ikke AI tilgængelig på den vej. Det fulde lokale Cognito-flow leverer en understøttet godkendelsestransport, men starter stadig ikke workeren.

AWS CDK-udrulningen opretter worker-Lambdaen og konfigurerer backenden til at kalde den. Udbyderlegitimationsoplysninger som `OPENAI_API_KEY` muliggør modelkald for understøttede godkendte forespørgsler. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` aktiverer og begrænser separat AI for gæster; den styrer ikke AI for indloggede brugere eller for brugere, der er godkendt med bearer-token. Langfuse-indstillinger er valgfri konfiguration af tracing.

## Native klienter

Det samme repositorium indeholder iOS- og Android-klienterne, men de lokale web- og serverkommandoer hverken bygger eller distribuerer dem.

iOS-projektet læser lokale API- og auth-værter fra:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Opret den ud fra eksemplet, når det er nødvendigt:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Se repositoriets [iOS-README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) og [Android-README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) for deres separate arbejdsgange til build og test.

## Produktion bruger AWS CDK

Den understøttede produktionsudrulning er den medfølgende AWS CDK-stak. Den er bygget på AWS i stedet for at være leverandørneutral og omfatter:

- en VPC og private subnets
- PostgreSQL 18 på Amazon RDS
- Amazon Cognito med engangskode på e-mail uden adgangskode
- API Gateway og Lambda til backend-, auth- og MCP-tjenesterne
- en Lambda til den asynkrone chatworker og en Lambda til Cognitos brugerdefinerede e-mailafsender
- S3 og CloudFront til web- og admin-apps
- Secrets Manager til legitimationsoplysninger for database, sessioner, e-mail, overvågning og valgfri AI
- CloudWatch-alarmer, SNS-notifikationer og en backupplan for RDS
- en OIDC-udrulningsrolle til GitHub Actions
- Cloudflare-opsætningsscripts til de offentlige domæner

Udrulningen eksponerer `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` og `mcp.<domain>`. Den kan også oprette en omdirigering af apex-domænet, når roddomænet ellers ikke er i brug.

Kør produktionshjælperen fra en operatørmaskine med:

- Node.js 24 og npm
- Bash og GNU Make
- Docker, der kører
- AWS CLI logget ind på udrulningskontoen
- GitHub CLI logget ind med adgang til målrepositoriet
- `curl`, `jq` og Python 3

Før udrulningen skal du konfigurere operatørværdierne i `.env` i roden. Det påkrævede sæt omfatter AWS-region, domæne, e-mail til alarmer, GitHub-repositorium, Cloudflare-legitimationsoplysninger, Resend-legitimationsoplysninger og Sentry-konfiguration til backenden. Legitimationsoplysninger til OpenAI og Langfuse er valgfrie.

Den foretrukne kommando til den første udrulning fra repositoriets rod er:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Den eksplicitte installation af auth er i øjeblikket nødvendig fra et rent checkout, fordi udrulningshjælperen bundter den pakke, men ikke installerer den. Hjælperen opretter eller ændrer rigtige ressourcer i AWS, Cloudflare og GitHub. Gennemgå repositoriets udrulningsdokumentation og cloudomkostningerne, før du kører den. Den bootstrapper CDK, udruller infrastrukturen, kører migreringer, uploader web- og admin-assets, konfigurerer de offentlige DNS-poster for `app`, `admin`, `api`, `auth` og `mcp`, medmindre det springes over, og udfylder manglende konfiguration af GitHub Actions.

Efter udrulningen:

1. Bekræft SNS-abonnementet, der er sendt til indbakken for `ALERT_EMAIL`.
2. Konfigurer og verificer de separate DNS-poster for Resends afsenderdomæne:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` kører som standard `scripts/cloudflare/setup-dns.sh` for de offentlige applikationsdomæner. Scriptet kører ikke `setup-resend-domain.sh`; sidstnævnte opretter posterne for e-mailafsenderen til `mail.<domain>` og verificerer det domæne hos Resend. Hvis du udruller med `--skip-dns`, skal du konfigurere de offentlige poster separat som beskrevet i AWS CDK-vejledningen.

## Dataportabilitet

Import og eksport af arbejdsområdepakker overfører kun kort, deres tags og tilhørende medier. Det overfører ikke repetitionshistorik, FSRS-planlæggerens tilstand, indstillinger for arbejdsområdet, fulde bunkestrukturer eller kontodata.

Betragt pakker som overførsel af indhold, ikke som en komplet migrering fra hostet til selvhostet eller som backup til katastrofegendannelse. Operatører er ansvarlige for at tage backup af og gendanne den udrullede PostgreSQL-database og medielageret.

## Operatørens ansvar

Selvhosting betyder, at du leverer og vedligeholder:

- AWS-infrastruktur og dens omkostninger
- Cloudflare-DNS og domænekonfiguration
- legitimationsoplysninger og domæneposter til e-mailudsendelse via Resend
- påkrævet Sentry-konfiguration til overvågning
- valgfri legitimationsoplysninger til en AI-udbyder og Langfuse
- hemmeligheder, opgraderinger, migreringer, alarmer, backups og test af gendannelse
- native mobilbuilds og distribution, hvis du vil have dine egne iOS- eller Android-udgivelser

Stakken indeholder automatisering til mange af disse systemer, men den kræver stadig en operatør. Docker Compose erstatter ikke denne produktionsarkitektur.

## Repositoriets udrulningsdokumentation

- [Repositoriets README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Udrulningsvejledning til backend og web](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK-udrulningsvejledning](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK-infrastruktur](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
