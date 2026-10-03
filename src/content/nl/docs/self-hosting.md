---
title: Handleiding voor selfhosting
description: Draai Nibomo lokaal met PostgreSQL, authenticatie, backend, web en admin, of deploy de gedocumenteerde AWS CDK-productiestack.
---

Nibomo ondersteunt twee aparte routes: een lokale ontwikkelomgeving en een productiedeployment op AWS. Docker Compose draait PostgreSQL en migraties voor lokale ontwikkeling; het is geen methode voor productiedeployment.

## Vereisten voor lokale ontwikkeling

- Git
- Bash
- GNU Make
- Docker met Docker Compose
- Node.js 24
- npm

Het meegeleverde Docker Compose-bestand draait op dit moment PostgreSQL 18.4. Je hebt geen aparte lokale PostgreSQL-installatie nodig.

## Lokale snelstart

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

`make db-up` start PostgreSQL en voert `scripts/deploy/migrate.sh` uit via de migratiecontainer. Met de standaardwachtwoorden uit `.env.example` richt de migratie deze lokale runtimeverbindingen in:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- auth: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- rapportage: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Wijzig je `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` of `REPORTING_DB_PASSWORD` in `.env`, gebruik dan hetzelfde gewijzigde wachtwoord in de bijbehorende verbindings-URL.

### Snelle start, alleen lokaal

Het Make-target voor de backend laadt de `.env` in de root niet. Geef de vereiste lokale instellingen expliciet mee:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Draai de clients in aparte terminals:

```bash
make web-dev
make admin-dev
```

Deze route start bewust geen `make auth-dev`. `AUTH_MODE=none` is een expliciet onveilige modus die alleen voor localhost bedoeld is; gebruik hem nooit in een gedeployde omgeving.
Deze route dekt de ontwikkeling van de kernbackend, de openbare discovery van de Agent API, web en admin, maar maakt Chat V2 niet beschikbaar.

### Volledige lokale Cognito-flow

Het auth-target laadt de `.env` in de root, het backend-target niet. Vervang eerst de verouderde `DATABASE_URL` in de gekopieerde `.env` door de URL van de auth-rol en voeg je echte Cognito-waarden toe:

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

Laad in de backendterminal expliciet `.env` en overschrijf daarna voor dat proces de database-URL van auth met de URL van de backendrol:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Draai `make web-dev` en `make admin-dev` elk in een eigen terminal. Beide targets laden de `.env` in de root.

De diensten gebruiken deze lokale adressen:

| Dienst | Adres |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Auth, indien geconfigureerd | `http://localhost:8081` |
| Backend-API | `http://localhost:8080/v1` |
| Web-app | `http://localhost:3000` |
| Admin-app | `http://localhost:3001` |

Stop PostgreSQL en de migratiecontainer met:

```bash
make db-down
```

## Lokale configuratie

Begin met `.env.example`; daarin staan de beschikbare variabelen en welke waarden alleen lokaal zijn. Vervang de verouderde `DATABASE_URL` erin voordat je auth draait, zoals hierboven beschreven.

De belangrijkste lokale instellingen zijn:

- `MIGRATION_DATABASE_URL` voor schemamigraties binnen Docker
- `DATABASE_URL` ingesteld op de rol `auth_app` in de `.env` in de root voor `make auth-dev`
- `DATABASE_URL` meegegeven als de rol `backend_app` voor `make backend-dev`
- `AUTH_MODE` en `ALLOW_INSECURE_LOCAL_AUTH` voor authenticatie in de backend
- `BACKEND_ALLOWED_ORIGINS` voor de lokale origins van web en admin
- `ALLOWED_REDIRECT_URIS` en `COOKIE_DOMAIN` voor authenticatie in de browser
- de waarden voor Cognito en sessieversleuteling als je echte OTP test

De Agent API maakt deel uit van de backend. Het openbare lokale discoverydocument is beschikbaar op `http://localhost:8080/v1/agent` zodra de backend draait. Beveiligde Agent-bewerkingen vereisen `ApiKey`-authenticatie en zijn niet beschikbaar in de route met `AUTH_MODE=none`.

### AI-mogelijkheden per route

De lokale opdrachten hierboven starten de asynchrone chatworker niet. De snelle route gebruikt bovendien `AUTH_MODE=none`, wat Chat V2 weigert; met een extra OpenAI-sleutel of gastquotum wordt die route niet geschikt voor AI. De volledige lokale Cognito-flow levert wel een ondersteund authenticatietransport, maar start de worker nog steeds niet.

De AWS CDK-deployment maakt de worker-Lambda aan en configureert de backend om die aan te roepen. Providercredentials zoals `OPENAI_API_KEY` maken modelaanroepen mogelijk voor ondersteunde geauthenticeerde verzoeken. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` schakelt AI voor gasten apart in en begrenst die; het heeft geen invloed op AI voor aangemelde gebruikers of bij authenticatie met een bearer-token. Instellingen voor Langfuse zijn optionele tracingconfiguratie.

## Native clients

Dezelfde repository bevat de iOS- en Android-clients, maar de lokale web- en serveropdrachten bouwen of distribueren die niet.

Het iOS-project leest de lokale API- en auth-hosts uit:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Maak dat bestand indien nodig aan op basis van het voorbeeld:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Zie de [iOS-README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) en de [Android-README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) in de repository voor hun eigen build- en testworkflows.

## Productie gebruikt AWS CDK

De ondersteunde productiedeployment is de meegeleverde AWS CDK-stack. Die is gebaseerd op AWS en niet leveranciersonafhankelijk, en omvat:

- een VPC en private subnets
- PostgreSQL 18 op Amazon RDS
- wachtwoordloze OTP per e-mail via Amazon Cognito
- API Gateway en Lambda voor de backend-, auth- en MCP-diensten
- een Lambda voor de asynchrone chatworker en een Lambda voor de aangepaste e-mailverzender van Cognito
- S3 en CloudFront voor de web- en admin-apps
- Secrets Manager voor credentials van database, sessies, e-mail, monitoring en optioneel AI
- CloudWatch-alarmen, SNS-meldingen en een RDS-backupplan
- een OIDC-deploymentrol voor GitHub Actions
- Cloudflare-scripts voor het instellen van de openbare domeinen

De deployment stelt `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` en `mcp.<domain>` beschikbaar. Ze kan ook een apex-redirect aanmaken als het rootdomein verder niet in gebruik is.

Draai de productiehelper vanaf een operatormachine met:

- Node.js 24 en npm
- Bash en GNU Make
- Docker, actief
- de AWS CLI, geauthenticeerd bij het deploymentaccount
- de GitHub CLI, geauthenticeerd bij de doelrepository
- `curl`, `jq` en Python 3

Configureer vóór het deployen de operatorwaarden in de `.env` in de root. De vereiste set omvat de AWS-regio, het domein, het e-mailadres voor alerts, de GitHub-repository, Cloudflare-credentials, Resend-credentials en de Sentry-configuratie voor de backend. Credentials voor OpenAI en Langfuse zijn optioneel.

De aanbevolen opdracht voor de eerste deployment vanuit de root van de repository is:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

De expliciete installatie van auth is op dit moment nodig vanuit een schone checkout, omdat de deploymenthelper dat pakket bundelt maar niet installeert. De helper maakt echte resources aan bij AWS, Cloudflare en GitHub of wijzigt ze. Lees de deploymentdocumentatie in de repository en bekijk de cloudkosten voordat je hem uitvoert. Hij bootstrapt CDK, deployt de infrastructuur, voert migraties uit, uploadt de assets van web en admin, configureert de openbare DNS-records voor `app`, `admin`, `api`, `auth` en `mcp` tenzij je dat overslaat, en vult ontbrekende GitHub Actions-configuratie aan.

Na de deployment:

1. Bevestig het SNS-abonnement dat naar de inbox van `ALERT_EMAIL` is gestuurd.
2. Configureer en verifieer de aparte DNS-records voor het verzenddomein van Resend:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` voert standaard `scripts/cloudflare/setup-dns.sh` uit voor de openbare applicatiedomeinen. Het voert `setup-resend-domain.sh` niet uit; dat laatste script maakt de records voor de e-mailverzender aan voor `mail.<domain>` en verifieert dat domein bij Resend. Deploy je met `--skip-dns`, configureer de openbare records dan apart zoals beschreven in de AWS CDK-handleiding.

## Overdraagbaarheid van data

Importeren en exporteren van werkruimtepakketten verplaatst alleen kaarten, hun tags en bijbehorende media. Herhaalgeschiedenis, de status van de FSRS-planner, werkruimte-instellingen, volledige deckstructuren en accountgegevens gaan niet mee.

Beschouw pakketten als een manier om inhoud over te zetten, niet als een volledige migratie van gehost naar zelf gehost of als back-up voor noodherstel. Operators zijn zelf verantwoordelijk voor het maken en terugzetten van back-ups van de gedeployde PostgreSQL-database en de mediaopslag.

## Verantwoordelijkheden van de operator

Bij selfhosting regel en onderhoud je zelf:

- de AWS-infrastructuur en de kosten daarvan
- Cloudflare-DNS en domeinconfiguratie
- Resend-credentials voor e-mailbezorging en domeinrecords
- de vereiste Sentry-monitoringconfiguratie
- optionele credentials voor een AI-provider en Langfuse
- secrets, upgrades, migraties, alerts, back-ups en het testen van herstel
- native mobiele builds en distributie als je eigen iOS- of Android-releases wilt

De stack bevat automatisering voor veel van deze systemen, maar heeft nog steeds een operator nodig. Docker Compose vervangt deze productiearchitectuur niet.

## Deploymentdocumentatie in de repository

- [README van de repository](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Deploymenthandleiding voor backend en web](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK-deploymenthandleiding](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK-infrastructuur](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
