---
title: Návod na vlastní hostování
description: Spusťte Nibomo lokálně s PostgreSQL, autentizací, backendem, webem a administrací, nebo nasaďte zdokumentovaný produkční stack na AWS CDK.
---

Nibomo podporuje dvě odlišné cesty: místní vývojové prostředí a produkční nasazení na AWS. Docker Compose spouští PostgreSQL a migrace pro místní vývoj; není to způsob produkčního nasazení.

## Požadavky pro místní vývoj

- Git
- Bash
- GNU Make
- Docker s Docker Compose
- Node.js 24
- npm

Přiložený soubor Docker Compose aktuálně spouští PostgreSQL 18.4. Samostatnou místní instalaci PostgreSQL nepotřebujete.

## Rychlý start lokálně

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

`make db-up` spustí PostgreSQL a přes migrační kontejner provede `scripts/deploy/migrate.sh`. S výchozími hesly zkopírovanými z `.env.example` migrace připraví tato místní připojení pro běh:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- auth: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- reporting: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Pokud v `.env` změníte `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` nebo `REPORTING_DB_PASSWORD`, použijte stejné změněné heslo i v odpovídající URL připojení.

### Rychlý start jen pro místní běh

Make target backendu nenačítá kořenový `.env`. Předejte mu potřebná místní nastavení explicitně:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Klienty spusťte v samostatných terminálech:

```bash
make web-dev
make admin-dev
```

Tato cesta záměrně nespouští `make auth-dev`. `AUTH_MODE=none` je výslovně nezabezpečený režim jen pro localhost; nikdy ho nepoužívejte v nasazeném prostředí.
Pokrývá vývoj jádra backendu, veřejného discovery Agent API, webu a administrace, Chat V2 ale nezpřístupní.

### Úplný místní postup s Cognito

Target pro autentizaci kořenový `.env` načítá, target backendu ne. Nejprve ve zkopírovaném `.env` nahraďte starší `DATABASE_URL` adresou URL role pro autentizaci a doplňte své skutečné hodnoty Cognito:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Spusťte autentizaci:

```bash
make auth-dev
```

V terminálu backendu explicitně načtěte `.env` a pak pro tento proces přepište jeho URL databáze pro autentizaci na URL role backendu:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

`make web-dev` a `make admin-dev` spusťte každý ve vlastním terminálu. Oba targety kořenový `.env` načítají.

Služby používají tyto místní adresy:

| Služba | Adresa |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Autentizace, pokud je nastavená | `http://localhost:8081` |
| Backend API | `http://localhost:8080/v1` |
| Webová aplikace | `http://localhost:3000` |
| Administrace | `http://localhost:3001` |

PostgreSQL a migrační kontejner zastavíte příkazem:

```bash
make db-down
```

## Místní konfigurace

Vyjděte z `.env.example`; popisuje dostupné proměnné a určuje, které hodnoty jsou jen pro místní použití. Před spuštěním autentizace v něm nahraďte starší `DATABASE_URL`, jak je ukázáno výše.

Hlavní místní nastavení:

- `MIGRATION_DATABASE_URL` pro migrace schématu uvnitř Dockeru
- `DATABASE_URL` nastavené na roli `auth_app` v kořenovém `.env` pro `make auth-dev`
- `DATABASE_URL` předané jako role `backend_app` pro `make backend-dev`
- `AUTH_MODE` a `ALLOW_INSECURE_LOCAL_AUTH` pro autentizaci backendu
- `BACKEND_ALLOWED_ORIGINS` pro místní originy webu a administrace
- `ALLOWED_REDIRECT_URIS` a `COOKIE_DOMAIN` pro autentizaci v prohlížeči
- hodnoty Cognito a šifrování relací, pokud testujete skutečný OTP

Agent API je součástí backendu. Jeho veřejný místní discovery dokument je po spuštění backendu dostupný na `http://localhost:8080/v1/agent`. Chráněné operace Agent API vyžadují autentizaci `ApiKey` a na cestě s `AUTH_MODE=none` dostupné nejsou.

### Rozsah AI podle cesty

Výše uvedené místní příkazy nespouštějí asynchronní chat worker. Rychlá cesta navíc používá `AUTH_MODE=none`, který Chat V2 odmítá; přidání klíče OpenAI nebo kvóty pro hosty z této cesty AI funkční neudělá. Úplný místní postup s Cognito poskytuje podporovaný způsob autentizace, worker ale stále nespouští.

Nasazení přes AWS CDK vytvoří Lambdu pro worker a nastaví backend tak, aby ji volal. Přístupové údaje poskytovatele, například `OPENAI_API_KEY`, umožňují volání modelu u podporovaných ověřených požadavků. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` samostatně zapíná a omezuje AI pro hosty; AI pro přihlášené uživatele ani AI ověřenou bearer tokenem neřídí. Nastavení Langfuse jsou volitelnou konfigurací trasování.

## Nativní klienti

Stejný repozitář obsahuje klienty pro iOS a Android, místní příkazy pro web a server je ale nesestavují ani nedistribuují.

Projekt pro iOS načítá místní hostitele API a autentizace z:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

V případě potřeby ho vytvořte z ukázkového souboru:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Jejich samostatné postupy sestavení a testování popisují v repozitáři [README pro iOS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) a [README pro Android](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md).

## Produkce používá AWS CDK

Podporovaným produkčním nasazením je přiložený stack AWS CDK. Je postavený na AWS, nikoli nezávislý na dodavateli, a zahrnuje:

- VPC a privátní podsítě
- PostgreSQL 18 na Amazon RDS
- Amazon Cognito s přihlašováním bez hesla přes e-mailový OTP
- API Gateway a Lambda pro služby backendu, autentizace a MCP
- Lambdu s asynchronním chat workerem a Lambdu s vlastním odesílatelem e-mailů pro Cognito
- S3 a CloudFront pro webovou aplikaci a administraci
- Secrets Manager pro přístupové údaje k databázi, relacím, e-mailu, monitoringu a volitelně k AI
- alarmy CloudWatch, oznámení SNS a plán záloh RDS
- roli pro nasazení přes GitHub Actions OIDC
- skripty Cloudflare pro nastavení veřejných domén

Nasazení zpřístupňuje `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` a `mcp.<domain>`. Pokud kořenová doména není jinak využitá, může vytvořit i přesměrování z apex domény.

Produkční pomocný skript spouštějte z počítače provozovatele, na kterém je:

- Node.js 24 a npm
- Bash a GNU Make
- spuštěný Docker
- AWS CLI přihlášené k účtu pro nasazení
- GitHub CLI přihlášené k cílovému repozitáři
- `curl`, `jq` a Python 3

Před nasazením nastavte hodnoty provozovatele v kořenovém `.env`. Povinné hodnoty zahrnují region AWS, doménu, e-mail pro upozornění, repozitář na GitHubu, přístupové údaje ke Cloudflare a Resend a konfiguraci Sentry pro backend. Přístupové údaje k OpenAI a Langfuse jsou volitelné.

Doporučený příkaz pro první nasazení z kořene repozitáře:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Explicitní instalace balíku pro autentizaci je z čistého checkoutu zatím nutná, protože pomocný skript pro nasazení tento balík přibaluje, ale neinstaluje. Pomocný skript vytváří nebo mění skutečné prostředky v AWS, Cloudflare a na GitHubu. Před spuštěním si projděte dokumentaci k nasazení v repozitáři a náklady na cloud. Skript provede bootstrap CDK, nasadí infrastrukturu, spustí migrace, nahraje soubory webu a administrace, nastaví veřejné DNS záznamy `app`, `admin`, `api`, `auth` a `mcp`, pokud to nevypnete, a doplní chybějící konfiguraci GitHub Actions.

Po nasazení:

1. Potvrďte odběr SNS odeslaný do schránky `ALERT_EMAIL`.
2. Nastavte a ověřte samostatné DNS záznamy odesílací domény pro Resend:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` ve výchozím nastavení spouští `scripts/cloudflare/setup-dns.sh` pro veřejné domény aplikace. `setup-resend-domain.sh` nespouští; ten vytváří záznamy odesílatele e-mailů pro `mail.<domain>` a ověřuje tuto doménu u Resend. Pokud nasazujete s `--skip-dns`, nastavte veřejné záznamy zvlášť podle návodu k AWS CDK.

## Přenositelnost dat

Import a export balíků pracovního prostoru přenáší pouze kartičky, jejich štítky a související média. Nepřenáší historii opakování, stav plánovače FSRS, nastavení pracovního prostoru, úplnou strukturu balíčků ani data účtu.

Berte balíky jako přenos obsahu, nikoli jako úplnou migraci z hostované verze na vlastní hostování ani jako zálohu pro obnovu po havárii. Za zálohování a obnovu nasazené databáze PostgreSQL a úložiště médií odpovídají provozovatelé.

## Odpovědnost provozovatele

Vlastní hostování znamená, že zajišťujete a udržujete:

- infrastrukturu AWS a její náklady
- DNS v Cloudflare a konfiguraci domény
- přístupové údaje k doručování e-mailů přes Resend a doménové záznamy
- povinnou konfiguraci monitoringu Sentry
- volitelné přístupové údaje k poskytovateli AI a k Langfuse
- tajné klíče, aktualizace, migrace, upozornění, zálohy a testování obnovy
- nativní mobilní buildy a jejich distribuci, pokud chcete vlastní vydání pro iOS nebo Android

Stack obsahuje automatizaci pro mnoho z těchto systémů, provozovatele ale stále potřebuje. Docker Compose tuto produkční architekturu nenahrazuje.

## Dokumentace k nasazení v repozitáři

- [README repozitáře](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Návod k nasazení backendu a webu](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Návod k nasazení přes AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [Infrastruktura AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
