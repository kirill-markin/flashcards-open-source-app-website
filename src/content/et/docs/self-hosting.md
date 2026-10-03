---
title: Ise majutamise juhend
description: Käivita Nibomo kohalikult koos PostgreSQL-i, autentimise, taustsüsteemi, veebi- ja administraatorirakendusega või juuruta dokumenteeritud AWS CDK tootmislahendus.
---

Nibomo toetab kahte eraldi teed: kohalikku arenduskeskkonda ja tootmisjuurutust AWS-is. Docker Compose käivitab kohalikuks arenduseks PostgreSQL-i ja migratsioonid; see ei ole tootmisjuurutuse meetod.

## Kohaliku arenduse nõuded

- Git
- Bash
- GNU Make
- Docker koos Docker Compose'iga
- Node.js 24
- npm

Kaasasolev Docker Compose'i fail käivitab praegu PostgreSQL 18.4. Eraldi kohalikku PostgreSQL-i paigaldust pole vaja.

## Kohalik kiirstart

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

`make db-up` käivitab PostgreSQL-i ja käitab migratsioonikonteineri kaudu skripti `scripts/deploy/migrate.sh`. Failist `.env.example` kopeeritud vaikeparoolidega loob migratsioon järgmised kohalikud käitusaegsed ühendused:

- taustsüsteem: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- autentimine: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- aruandlus: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Kui muudad failis `.env` väärtust `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` või `REPORTING_DB_PASSWORD`, kasuta sama muudetud parooli vastavas ühenduse URL-is.

### Kiire ainult kohalik käivitus

Taustsüsteemi Make'i siht ei laadi juurkataloogi faili `.env`. Anna selle nõutavad kohalikud sätted selgesõnaliselt ette:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Käivita kliendid eraldi terminalides:

```bash
make web-dev
make admin-dev
```

See tee jätab teadlikult `make auth-dev` käivitamata. `AUTH_MODE=none` on selgelt ebaturvaline režiim, mis on mõeldud ainult localhostile; ära kasuta seda kunagi juurutatud keskkonnas.
See hõlmab taustsüsteemi põhiosa, avaliku Agent API avastuse, veebi- ja administraatorirakenduse arendust, kuid ei tee Chat V2 kättesaadavaks.

### Täielik kohalik Cognito voog

Autentimise siht laadib juurkataloogi faili `.env`, taustsüsteemi siht aga mitte. Kõigepealt asenda kopeeritud failis `.env` pärandväärtus `DATABASE_URL` autentimisrolli URL-iga ja lisa oma tegelikud Cognito väärtused:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Käivita autentimine:

```bash
make auth-dev
```

Laadi taustsüsteemi terminalis fail `.env` selgesõnaliselt ja kirjuta seejärel selles määratud autentimisandmebaasi URL selle protsessi jaoks üle taustsüsteemi rolli URL-iga:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Käivita `make web-dev` ja `make admin-dev` kumbki oma terminalis. Mõlemad sihid laadivad juurkataloogi faili `.env`.

Teenused kasutavad järgmisi kohalikke aadresse:

| Teenus | Aadress |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Autentimine, kui see on seadistatud | `http://localhost:8081` |
| Taustsüsteemi API | `http://localhost:8080/v1` |
| Veebirakendus | `http://localhost:3000` |
| Administraatorirakendus | `http://localhost:3001` |

Peata PostgreSQL ja migratsioonikonteiner käsuga:

```bash
make db-down
```

## Kohalik konfiguratsioon

Alusta failist `.env.example`; see dokumenteerib saadaolevad muutujad ja selle, millised väärtused on ainult kohalikud. Asenda selle pärandväärtus `DATABASE_URL` enne autentimise käivitamist, nagu ülal näidatud.

Peamised kohalikud sätted on:

- `MIGRATION_DATABASE_URL` skeemimigratsioonide jaoks Dockeris
- `DATABASE_URL`, mis on juurkataloogi failis `.env` seatud rollile `auth_app`, käsu `make auth-dev` jaoks
- `DATABASE_URL`, mis antakse rollina `backend_app` käsule `make backend-dev`
- `AUTH_MODE` ja `ALLOW_INSECURE_LOCAL_AUTH` taustsüsteemi autentimiseks
- `BACKEND_ALLOWED_ORIGINS` kohalike veebi- ja administraatorirakenduse päritolude jaoks
- `ALLOWED_REDIRECT_URIS` ja `COOKIE_DOMAIN` brauseri autentimiseks
- Cognito ja seansi krüpteerimise väärtused, kui testid päris ühekordset koodi

Agent API on taustsüsteemi osa. Selle avalik kohalik avastusdokument on pärast taustsüsteemi käivitamist saadaval aadressil `http://localhost:8080/v1/agent`. Kaitstud Agent API toimingud nõuavad `ApiKey` autentimist ega ole `AUTH_MODE=none` tee puhul saadaval.

### AI ulatus tee kaupa

Ülaltoodud kohalikud käsud ei käivita asünkroonset vestlustöötlejat. Kiire tee kasutab ka režiimi `AUTH_MODE=none`, mille Chat V2 tagasi lükkab; OpenAI võtme või külaliskvoodi lisamine ei muuda seda teed AI-d toetavaks. Täielik kohalik Cognito voog annab toetatud autentimistranspordi, kuid ei käivita samuti töötlejat.

AWS CDK juurutus loob töötleja Lambda ja seadistab taustsüsteemi seda välja kutsuma. Teenusepakkuja ligipääsuandmed, nagu `OPENAI_API_KEY`, võimaldavad mudelikutseid toetatud autenditud päringute puhul. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` lubab ja piirab eraldi külaliste AI kasutust; see ei mõjuta sisselogitud ega bearer-tõendiga autenditud AI kasutust. Langfuse'i sätted on valikuline jälgimiskonfiguratsioon.

## Natiivsed kliendid

Samas koodihoidlas on iOS-i ja Androidi kliendid, kuid kohalikud veebi- ja serverikäsud neid ei ehita ega levita.

iOS-i projekt loeb kohalikud API ja autentimise hostid failist:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Loo see vajaduse korral näidisfailist:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Nende eraldi ehitamise ja testimise töövoogude kohta vaata koodihoidla [iOS-i README-faili](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) ja [Androidi README-faili](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md).

## Tootmises kasutatakse AWS CDK-d

Toetatud tootmisjuurutus on kaasasolev AWS CDK lahendus. See on AWS-põhine, mitte teenusepakkujast sõltumatu, ja sisaldab:

- VPC-d ja privaatseid alamvõrke
- PostgreSQL 18 teenuses Amazon RDS
- Amazon Cognito paroolita sisselogimist e-posti ühekordse koodiga
- API Gateway't ja Lambdat taustsüsteemi, autentimise ja MCP teenuste jaoks
- asünkroonse vestlustöötleja Lambdat ja Cognito kohandatud e-kirjade saatja Lambdat
- S3 ja CloudFronti veebi- ja administraatorirakenduse jaoks
- Secrets Managerit andmebaasi, seansi, e-posti, seire ja valikuliste AI ligipääsuandmete jaoks
- CloudWatchi häireid, SNS-teavitusi ja RDS-i varundusplaani
- GitHub Actionsi OIDC juurutusrolli
- Cloudflare'i seadistusskripte avalike domeenide jaoks

Juurutus teeb kättesaadavaks aadressid `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` ja `mcp.<domain>`. Samuti saab see luua juurdomeeni ümbersuunamise, kui juurdomeen pole muuks otstarbeks kasutusel.

Käivita tootmise abiskript haldaja masinast, kus on:

- Node.js 24 ja npm
- Bash ja GNU Make
- töötav Docker
- juurutuskonto jaoks autenditud AWS CLI
- sihthoidla jaoks autenditud GitHub CLI
- `curl`, `jq` ja Python 3

Enne juurutamist seadista haldaja väärtused juurkataloogi failis `.env`. Nõutud väärtuste hulka kuuluvad AWS-i piirkond, domeen, häireteadete e-posti aadress, GitHubi koodihoidla, Cloudflare'i ligipääsuandmed, Resendi ligipääsuandmed ja taustsüsteemi Sentry konfiguratsioon. OpenAI ja Langfuse'i ligipääsuandmed on valikulised.

Eelistatud esimese juurutuse käsk koodihoidla juurkataloogist on:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Autentimispaketi eraldi paigaldamine on puhtast väljavõttest alustades praegu vajalik, sest juurutuse abiskript komplekteerib selle paketi, kuid ei paigalda seda. Abiskript loob või muudab päris AWS-i, Cloudflare'i ja GitHubi ressursse. Enne selle käivitamist tutvu koodihoidla juurutusdokumentatsiooni ja pilvekuludega. See teeb CDK algseadistuse, juurutab taristu, käitab migratsioonid, laadib üles veebi- ja administraatorirakenduse failid, seadistab avalikud DNS-kirjed `app`, `admin`, `api`, `auth` ja `mcp`, kui seda ei jäeta vahele, ning täidab puuduvad GitHub Actionsi seaded.

Pärast juurutust:

1. Kinnita SNS-i tellimus, mis saadeti `ALERT_EMAIL` aadressi postkasti.
2. Seadista ja kontrolli eraldi Resendi saatmisdomeeni DNS-kirjeid:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` käivitab vaikimisi avalike rakendusdomeenide jaoks skripti `scripts/cloudflare/setup-dns.sh`. See ei käivita skripti `setup-resend-domain.sh`; viimane loob e-kirjade saatja kirjed domeenile `mail.<domain>` ja kinnitab selle domeeni Resendis. Kui juurutad lipuga `--skip-dns`, seadista avalikud kirjed eraldi, nagu on kirjeldatud AWS CDK juhendis.

## Andmete teisaldatavus

Tööruumi paketi import ja eksport kannavad üle ainult kaardid, nende sildid ja seotud meedia. Need ei kanna üle kordamisajalugu, FSRS-i ajastaja olekut, tööruumi sätteid, kaardipakkide täielikke struktuure ega kontoandmeid.

Käsitle pakette sisu ülekandena, mitte täieliku üleminekuna majutatud teenuselt ise majutatud paigaldusele ega avariitaaste varukoopiana. Haldajad vastutavad juurutatud PostgreSQL-i andmebaasi ja meediasalvestuse varundamise ja taastamise eest.

## Haldaja kohustused

Ise majutamine tähendab, et pakud ja hooldad ise:

- AWS-i taristut ja selle kulusid
- Cloudflare'i DNS-i ja domeeni konfiguratsiooni
- Resendi e-kirjade edastamise ligipääsuandmeid ja domeenikirjeid
- nõutavat Sentry seirekonfiguratsiooni
- valikulisi AI-teenusepakkuja ja Langfuse'i ligipääsuandmeid
- saladusi, uuendusi, migratsioone, häireid, varukoopiaid ja taastamise testimist
- natiivsete mobiilirakenduste ehitamist ja levitamist, kui soovid oma iOS-i või Androidi väljalaskeid

Lahendus sisaldab automatiseerimist paljude nende süsteemide jaoks, kuid vajab siiski haldajat. Docker Compose ei asenda seda tootmisarhitektuuri.

## Koodihoidla juurutusdokumentatsioon

- [Koodihoidla README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Taustsüsteemi ja veebi juurutusjuhend](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK juurutusjuhend](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK taristu](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
