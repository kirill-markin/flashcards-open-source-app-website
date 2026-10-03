---
title: Návod na vlastné hosťovanie
description: Spustite Nibomo lokálne s PostgreSQL, autentifikáciou, backendom, webom a administráciou, alebo nasaďte zdokumentovaný produkčný stack AWS CDK.
---

Nibomo podporuje dva samostatné postupy: lokálne vývojové prostredie a produkčné nasadenie na AWS. Docker Compose spúšťa PostgreSQL a migrácie pre lokálny vývoj; nie je to spôsob produkčného nasadenia.

## Požiadavky na lokálny vývoj

- Git
- Bash
- GNU Make
- Docker s Docker Compose
- Node.js 24
- npm

Priložený súbor Docker Compose aktuálne spúšťa PostgreSQL 18.4. Samostatnú lokálnu inštaláciu PostgreSQL nepotrebujete.

## Rýchly lokálny štart

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

`make db-up` spustí PostgreSQL a cez migračný kontajner vykoná `scripts/deploy/migrate.sh`. S predvolenými heslami skopírovanými z `.env.example` migrácia pripraví tieto lokálne pripojenia, ktoré služby používajú za behu:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- auth: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- reporting: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Ak v `.env` zmeníte `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` alebo `REPORTING_DB_PASSWORD`, rovnaké zmenené heslo použite aj v príslušnej URL adrese pripojenia.

### Rýchly štart len pre lokálne prostredie

Cieľ Make pre backend nenačítava koreňový `.env`. Potrebné lokálne nastavenia mu odovzdajte explicitne:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Klientov spustite v samostatných termináloch:

```bash
make web-dev
make admin-dev
```

Tento postup zámerne nespúšťa `make auth-dev`. `AUTH_MODE=none` je výslovne nezabezpečený režim len pre localhost; nikdy ho nepoužívajte v nasadenom prostredí.
Pokrýva vývoj jadra backendu, verejného zisťovania Agent API, webu a administrácie, ale Chat V2 v ňom dostupný nie je.

### Úplný lokálny postup s Cognito

Cieľ pre auth načítava koreňový `.env`, cieľ pre backend nie. Najprv v skopírovanom `.env` nahraďte starý `DATABASE_URL` URL adresou roly auth a doplňte svoje skutočné hodnoty Cognito:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Spustite auth:

```bash
make auth-dev
```

V termináli backendu explicitne načítajte `.env` a potom pre tento proces prepíšte URL adresu databázy pre auth URL adresou roly backendu:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

`make web-dev` a `make admin-dev` spustite každý vo vlastnom termináli. Oba ciele načítavajú koreňový `.env`.

Služby používajú tieto lokálne adresy:

| Služba | Adresa |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Auth, ak je nakonfigurovaný | `http://localhost:8081` |
| Backend API | `http://localhost:8080/v1` |
| Webová aplikácia | `http://localhost:3000` |
| Administrátorská aplikácia | `http://localhost:3001` |

PostgreSQL a migračný kontajner zastavíte príkazom:

```bash
make db-down
```

## Lokálna konfigurácia

Začnite od `.env.example`; opisuje dostupné premenné a ktoré hodnoty sú len lokálne. Pred spustením auth v ňom nahraďte starý `DATABASE_URL`, ako je uvedené vyššie.

Hlavné lokálne nastavenia sú:

- `MIGRATION_DATABASE_URL` pre migrácie schémy v Dockeri
- `DATABASE_URL` nastavený na rolu `auth_app` v koreňovom `.env` pre `make auth-dev`
- `DATABASE_URL` odovzdaný ako rola `backend_app` pre `make backend-dev`
- `AUTH_MODE` a `ALLOW_INSECURE_LOCAL_AUTH` pre autentifikáciu backendu
- `BACKEND_ALLOWED_ORIGINS` pre lokálne pôvody webu a administrácie
- `ALLOWED_REDIRECT_URIS` a `COOKIE_DOMAIN` pre autentifikáciu v prehliadači
- hodnoty Cognito a šifrovania relácie, keď testujete skutočný OTP

Agent API je súčasťou backendu. Jeho verejný lokálny zisťovací dokument je po spustení backendu dostupný na `http://localhost:8080/v1/agent`. Chránené operácie Agent API vyžadujú autentifikáciu `ApiKey` a v postupe s `AUTH_MODE=none` nie sú dostupné.

### Rozsah AI podľa postupu

Lokálne príkazy vyššie nespúšťajú asynchrónny chatový worker. Rýchly postup navyše používa `AUTH_MODE=none`, ktorý Chat V2 odmieta; ani pridaním kľúča OpenAI alebo kvóty pre hostí tento postup podporu AI nezíska. Úplný lokálny postup s Cognito poskytuje podporovaný spôsob autentifikácie, ale ani on worker nespúšťa.

Nasadenie AWS CDK vytvorí Lambdu workera a nakonfiguruje backend tak, aby ju volal. Prístupové údaje poskytovateľa, napríklad `OPENAI_API_KEY`, umožňujú volania modelu pre podporované autentifikované požiadavky. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` samostatne zapína a obmedzuje AI pre hostí; neriadi AI pre prihlásených používateľov ani pre požiadavky autentifikované tokenom Bearer. Nastavenia Langfuse sú voliteľnou konfiguráciou trasovania.

## Natívni klienti

Rovnaký repozitár obsahuje klientov pre iOS a Android, ale lokálne príkazy pre web a server ich nezostavujú ani nedistribuujú.

Projekt pre iOS načítava lokálne hostiteľské mená API a auth z:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

V prípade potreby ho vytvorte z príkladu:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Ich samostatné postupy zostavenia a testovania nájdete v [README pre iOS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) a [README pre Android](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) v repozitári.

## Produkcia používa AWS CDK

Podporovaným produkčným nasadením je priložený stack AWS CDK. Je postavený na AWS, nie je nezávislý od poskytovateľa a zahŕňa:

- VPC a privátne podsiete
- PostgreSQL 18 na Amazon RDS
- e-mailový OTP bez hesla cez Amazon Cognito
- API Gateway a Lambda pre služby backendu, auth a MCP
- Lambdu asynchrónneho chatového workera a Lambdu vlastného odosielateľa e-mailov pre Cognito
- S3 a CloudFront pre webovú a administrátorskú aplikáciu
- Secrets Manager pre prístupové údaje k databáze, reláciám, e-mailu, monitoringu a voliteľne k AI
- alarmy CloudWatch, notifikácie SNS a plán zálohovania RDS
- rolu nasadenia GitHub Actions OIDC
- skripty na nastavenie Cloudflare pre verejné domény

Nasadenie sprístupňuje `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` a `mcp.<domain>`. Ak hlavná doména nie je inak využitá, môže pre ňu vytvoriť aj presmerovanie.

Produkčný pomocný skript spúšťajte z počítača operátora, na ktorom je:

- Node.js 24 a npm
- Bash a GNU Make
- spustený Docker
- AWS CLI prihlásené do účtu pre nasadenie
- GitHub CLI prihlásené do cieľového repozitára
- `curl`, `jq` a Python 3

Pred nasadením nakonfigurujte hodnoty operátora v koreňovom `.env`. Povinná sada zahŕňa región AWS, doménu, e-mail pre upozornenia, repozitár GitHub, prístupové údaje Cloudflare, prístupové údaje Resend a konfiguráciu Sentry pre backend. Prístupové údaje OpenAI a Langfuse sú voliteľné.

Odporúčaný príkaz na prvé nasadenie z koreňa repozitára je:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Explicitná inštalácia auth je pri čistom checkoute zatiaľ potrebná, pretože pomocný skript na nasadenie tento balík pribaľuje, ale neinštaluje ho. Pomocný skript vytvára alebo mení skutočné prostriedky v AWS, Cloudflare a GitHube. Pred spustením si prečítajte dokumentáciu nasadenia v repozitári a skontrolujte náklady na cloud. Skript inicializuje CDK, nasadí infraštruktúru, spustí migrácie, nahrá súbory webovej a administrátorskej aplikácie, nakonfiguruje verejné DNS záznamy `app`, `admin`, `api`, `auth` a `mcp`, ak to nevynecháte, a doplní chýbajúcu konfiguráciu GitHub Actions.

Po nasadení:

1. Potvrďte odber SNS odoslaný do schránky `ALERT_EMAIL`.
2. Nakonfigurujte a overte samostatné DNS záznamy odosielacej domény Resend:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` predvolene spúšťa `scripts/cloudflare/setup-dns.sh` pre verejné aplikačné domény. Nespúšťa `setup-resend-domain.sh`; ten vytvára záznamy odosielateľa e-mailov pre `mail.<domain>` a overuje túto doménu v Resend. Ak nasadzujete s `--skip-dns`, verejné záznamy nakonfigurujte samostatne podľa návodu AWS CDK.

## Prenositeľnosť dát

Import a export balíkov pracovného priestoru prenáša iba kartičky, ich štítky a súvisiace médiá. Neprenáša históriu opakovania, stav plánovača FSRS, nastavenia pracovného priestoru, úplné štruktúry balíčkov ani údaje účtu.

Balíky berte ako prenos obsahu, nie ako úplnú migráciu z hosťovanej na vlastnú inštaláciu ani ako zálohu na obnovu po havárii. Za zálohovanie a obnovu nasadenej databázy PostgreSQL a úložiska médií zodpovedajú operátori.

## Zodpovednosti operátora

Vlastné hosťovanie znamená, že sami zabezpečujete a udržiavate:

- infraštruktúru AWS a jej náklady
- DNS v Cloudflare a konfiguráciu domény
- prístupové údaje na doručovanie e-mailov cez Resend a záznamy domény
- povinnú konfiguráciu monitoringu Sentry
- voliteľné prístupové údaje poskytovateľa AI a Langfuse
- tajné kľúče, aktualizácie, migrácie, upozornenia, zálohy a testovanie obnovy
- natívne mobilné zostavenia a distribúciu, ak chcete vlastné vydania pre iOS alebo Android

Stack obsahuje automatizáciu pre mnohé z týchto systémov, ale stále vyžaduje operátora. Docker Compose túto produkčnú architektúru nenahrádza.

## Dokumentácia nasadenia v repozitári

- [README repozitára](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Návod na nasadenie backendu a webu](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Návod na nasadenie AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [Infraštruktúra AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
