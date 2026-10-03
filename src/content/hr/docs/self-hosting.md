---
title: Vodič za vlastito hostiranje
description: Pokrenite Nibomo lokalno s PostgreSQL-om, autentifikacijom, backendom, webom i administracijom ili implementirajte dokumentirani produkcijski stack s AWS CDK-om.
---

Nibomo podržava dva zasebna puta: lokalno razvojno okruženje i produkcijsku implementaciju na AWS-u. Docker Compose pokreće PostgreSQL i migracije za lokalni razvoj; nije namijenjen produkcijskoj implementaciji.

## Preduvjeti za lokalni razvoj

- Git
- Bash
- GNU Make
- Docker s Docker Composeom
- Node.js 24
- npm

Priložena Docker Compose datoteka trenutačno pokreće PostgreSQL 18.4. Zasebna lokalna instalacija PostgreSQL-a nije vam potrebna.

## Brzi lokalni početak

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

`make db-up` pokreće PostgreSQL i izvršava `scripts/deploy/migrate.sh` putem kontejnera za migracije. Sa zadanim lozinkama kopiranima iz `.env.example`, migracija postavlja ove lokalne veze koje usluge koriste pri radu:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- auth: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- izvještavanje: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Ako u `.env` promijenite `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` ili `REPORTING_DB_PASSWORD`, istu promijenjenu lozinku upišite i u odgovarajući URL veze.

### Brzi isključivo lokalni početak

Make cilj za backend ne učitava korijenski `.env`. Njegove obavezne lokalne postavke proslijedite izričito:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Klijente pokrenite u zasebnim terminalima:

```bash
make web-dev
make admin-dev
```

Ovaj put namjerno ne pokreće `make auth-dev`. `AUTH_MODE=none` je izričito nesiguran način rada samo za localhost; nikad ga ne koristite u implementiranom okruženju.
Pokriva razvoj osnovnog backenda, javnog otkrivanja Agent API-ja, weba i administracije, ali ne omogućuje Chat V2.

### Potpuni lokalni tok s Cognitom

Cilj za auth učitava korijenski `.env`, a cilj za backend ne. Najprije u kopiranom `.env` zamijenite naslijeđeni `DATABASE_URL` URL-om uloge za auth i dodajte svoje stvarne Cognito vrijednosti:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Pokrenite auth:

```bash
make auth-dev
```

U terminalu za backend izričito učitajte `.env`, a zatim za taj proces njegov URL baze podataka za auth zamijenite URL-om uloge za backend:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Pokrenite `make web-dev` i `make admin-dev`, svaki u svom terminalu. Oba cilja učitavaju korijenski `.env`.

Usluge koriste ove lokalne adrese:

| Usluga | Adresa |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Auth, kad je konfiguriran | `http://localhost:8081` |
| Backend API | `http://localhost:8080/v1` |
| Web aplikacija | `http://localhost:3000` |
| Administratorska aplikacija | `http://localhost:3001` |

PostgreSQL i kontejner za migracije zaustavite naredbom:

```bash
make db-down
```

## Lokalna konfiguracija

Krenite od `.env.example`; ta datoteka dokumentira dostupne varijable i koje su vrijednosti samo lokalne. Prije pokretanja autha zamijenite njezin naslijeđeni `DATABASE_URL`, kako je prikazano gore.

Glavne lokalne postavke su:

- `MIGRATION_DATABASE_URL` za migracije sheme unutar Dockera
- `DATABASE_URL` postavljen na ulogu `auth_app` u korijenskom `.env` za `make auth-dev`
- `DATABASE_URL` proslijeđen kao uloga `backend_app` za `make backend-dev`
- `AUTH_MODE` i `ALLOW_INSECURE_LOCAL_AUTH` za autentifikaciju backenda
- `BACKEND_ALLOWED_ORIGINS` za lokalna ishodišta weba i administracije
- `ALLOWED_REDIRECT_URIS` i `COOKIE_DOMAIN` za autentifikaciju u pregledniku
- Cognito vrijednosti i vrijednosti za šifriranje sesije kad testirate stvarni OTP

Agent API dio je backenda. Njegov javni lokalni dokument za otkrivanje dostupan je na `http://localhost:8080/v1/agent` nakon pokretanja backenda. Zaštićene operacije Agent API-ja zahtijevaju autentifikaciju `ApiKey` i nisu dostupne na putu s `AUTH_MODE=none`.

### Opseg AI-ja ovisno o putu

Gornje lokalne naredbe ne pokreću asinkroni chat worker. Brzi put usto koristi `AUTH_MODE=none`, koji Chat V2 odbija; dodavanje OpenAI ključa ili kvote za goste ne osposobljava taj put za AI. Potpuni lokalni tok s Cognitom pruža podržani način prijenosa autentifikacije, ali ni on ne pokreće worker.

Implementacija s AWS CDK-om izrađuje worker Lambdu i konfigurira backend da je poziva. Pristupni podaci pružatelja usluge, kao što je `OPENAI_API_KEY`, omogućuju pozive modela za podržane autentificirane zahtjeve. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` zasebno omogućuje i ograničava AI za goste; ne upravlja AI-jem za prijavljene korisnike ni za zahtjeve autentificirane bearer tokenom. Postavke za Langfuse neobavezna su konfiguracija praćenja.

## Nativni klijenti

Isti repozitorij sadrži iOS i Android klijente, ali ih lokalne naredbe za web i poslužitelj ne grade niti distribuiraju.

iOS projekt čita lokalne API i auth hostove iz:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Po potrebi izradite tu datoteku iz primjera:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Za njihove zasebne tokove izgradnje i testiranja pogledajte [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) i [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) u repozitoriju.

## Produkcija koristi AWS CDK

Podržana produkcijska implementacija je priloženi AWS CDK stack. Vezan je uz AWS, a ne neovisan o dobavljaču, i uključuje:

- VPC i privatne podmreže
- PostgreSQL 18 na Amazon RDS-u
- Amazon Cognito prijavu bez lozinke OTP kodom iz e-pošte
- API Gateway i Lambdu za backend, auth i MCP usluge
- Lambdu za asinkroni chat worker i Lambdu za prilagođeno slanje e-pošte iz Cognita
- S3 i CloudFront za web i administratorsku aplikaciju
- Secrets Manager za tajne baze podataka, sesije, e-pošte i nadzora te za neobavezne AI pristupne podatke
- CloudWatch alarme, SNS obavijesti i plan sigurnosnih kopija za RDS
- ulogu za implementaciju putem GitHub Actions OIDC-a
- Cloudflare skripte za postavljanje javnih domena

Implementacija izlaže `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` i `mcp.<domain>`. Može izraditi i preusmjeravanje apex domene kad se korijenska domena inače ne koristi.

Produkcijsku pomoćnu skriptu pokrenite s operatorskog računala koje ima:

- Node.js 24 i npm
- Bash i GNU Make
- pokrenut Docker
- AWS CLI autentificiran na račun za implementaciju
- GitHub CLI autentificiran na ciljni repozitorij
- `curl`, `jq` i Python 3

Prije implementacije konfigurirajte operatorske vrijednosti u korijenskom `.env`. Obavezni skup uključuje AWS regiju, domenu, e-poštu za upozorenja, GitHub repozitorij, Cloudflare pristupne podatke, Resend pristupne podatke i Sentry konfiguraciju backenda. Pristupni podaci za OpenAI i Langfuse neobavezni su.

Preporučena naredba za prvu implementaciju iz korijena repozitorija je:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Izričita instalacija autha trenutačno je potrebna u čistom checkoutu jer pomoćna skripta za implementaciju pakira taj paket, ali ga ne instalira. Pomoćna skripta izrađuje ili mijenja stvarne resurse na AWS-u, Cloudflareu i GitHubu. Prije pokretanja pregledajte dokumentaciju za implementaciju u repozitoriju i troškove u oblaku. Skripta inicijalizira CDK, implementira infrastrukturu, pokreće migracije, prenosi resurse weba i administracije, konfigurira javne DNS zapise za `app`, `admin`, `api`, `auth` i `mcp`, osim ako to preskočite, te popunjava nedostajuću konfiguraciju za GitHub Actions.

Nakon implementacije:

1. Potvrdite SNS pretplatu poslanu u sandučić `ALERT_EMAIL`.
2. Konfigurirajte i provjerite zasebne DNS zapise domene za slanje putem Resenda:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` prema zadanim postavkama pokreće `scripts/cloudflare/setup-dns.sh` za javne domene aplikacije. Ne pokreće `setup-resend-domain.sh`; ta skripta izrađuje zapise pošiljatelja e-pošte za `mail.<domain>` i provjerava tu domenu kod Resenda. Ako implementirate s `--skip-dns`, javne zapise konfigurirajte zasebno, kako je dokumentirano u vodiču za AWS CDK.

## Prenosivost podataka

Uvoz i izvoz paketa radnog prostora prenose samo kartice, njihove oznake i pripadajuće medijske datoteke. Ne prenose povijest ponavljanja, stanje FSRS raspoređivača, postavke radnog prostora, potpune strukture špilova ni podatke računa.

Pakete smatrajte prijenosom sadržaja, a ne potpunom migracijom s hostirane na vlastito hostiranu instalaciju ni sigurnosnom kopijom za oporavak od katastrofe. Operatori su odgovorni za izradu sigurnosnih kopija i vraćanje implementirane PostgreSQL baze podataka i pohrane medijskih datoteka.

## Odgovornosti operatora

Vlastito hostiranje znači da sami osiguravate i održavate:

- AWS infrastrukturu i njezine troškove
- Cloudflare DNS i konfiguraciju domene
- Resend pristupne podatke za dostavu e-pošte i zapise domene
- obaveznu konfiguraciju Sentry nadzora
- neobavezne pristupne podatke AI pružatelja usluge i Langfusea
- tajne, nadogradnje, migracije, upozorenja, sigurnosne kopije i testiranje vraćanja
- nativne mobilne buildove i distribuciju ako želite vlastita izdanja za iOS ili Android

Stack uključuje automatizaciju za mnoge od tih sustava, ali i dalje zahtijeva operatora. Docker Compose ne zamjenjuje ovu produkcijsku arhitekturu.

## Dokumentacija za implementaciju u repozitoriju

- [README repozitorija](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Vodič za implementaciju backenda i weba](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Vodič za implementaciju s AWS CDK-om](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK infrastruktura](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
