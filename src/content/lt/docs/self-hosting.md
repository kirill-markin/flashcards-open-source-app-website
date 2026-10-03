---
title: Talpinimo savame serveryje vadovas
description: Paleiskite Nibomo vietoje su PostgreSQL, autentifikavimu, serverine dalimi, žiniatinklio ir administravimo programėlėmis arba įdiekite dokumentuotą AWS CDK produkcinę sistemą.
---

Nibomo palaiko du atskirus kelius: vietinę kūrimo aplinką ir produkcinį diegimą AWS. Docker Compose vietinei kūrimo aplinkai paleidžia PostgreSQL ir migracijas; tai nėra produkcinio diegimo būdas.

## Reikalavimai vietinei kūrimo aplinkai

- Git
- Bash
- GNU Make
- Docker su Docker Compose
- Node.js 24
- npm

Pateiktas Docker Compose failas šiuo metu paleidžia PostgreSQL 18.4. Atskirai diegti PostgreSQL vietoje nereikia.

## Greitas paleidimas vietoje

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

`make db-up` paleidžia PostgreSQL ir per migracijų konteinerį vykdo `scripts/deploy/migrate.sh`. Su numatytaisiais slaptažodžiais, nukopijuotais iš `.env.example`, migracija parengia šiuos vietinius vykdymo ryšius:

- serverinė dalis: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- autentifikavimas: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- ataskaitos: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Jei `.env` faile pakeisite `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` ar `REPORTING_DB_PASSWORD`, tą patį pakeistą slaptažodį naudokite ir atitinkamame ryšio URL.

### Greitas paleidimas tik vietoje

Serverinės dalies Make tikslas neįkelia šakninio `.env`. Jam reikalingus vietinius nustatymus perduokite aiškiai:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Klientus paleiskite atskiruose terminaluose:

```bash
make web-dev
make admin-dev
```

Šis kelias sąmoningai nepaleidžia `make auth-dev`. `AUTH_MODE=none` yra aiškiai nesaugus režimas, skirtas tik localhost aplinkai; niekada nenaudokite jo įdiegtoje aplinkoje.
Jis tinka pagrindinės serverinės dalies, viešo Agent API aptikimo, žiniatinklio ir administravimo programėlių kūrimui, tačiau Chat V2 šiuo keliu nepasiekiamas.

### Visa vietinė Cognito eiga

Autentifikavimo tikslas įkelia šakninį `.env`, o serverinės dalies tikslas – ne. Pirmiausia nukopijuotame `.env` faile pakeiskite senąjį `DATABASE_URL` autentifikavimo vaidmens URL ir pridėkite tikras Cognito reikšmes:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Paleiskite autentifikavimą:

```bash
make auth-dev
```

Serverinės dalies terminale aiškiai įkelkite `.env`, tada tam procesui jame esantį autentifikavimo duomenų bazės URL pakeiskite serverinės dalies vaidmens URL:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

`make web-dev` ir `make admin-dev` paleiskite atskiruose terminaluose. Abu tikslai įkelia šakninį `.env`.

Paslaugos naudoja šiuos vietinius adresus:

| Paslauga | Adresas |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Autentifikavimas, kai sukonfigūruotas | `http://localhost:8081` |
| Serverinės dalies API | `http://localhost:8080/v1` |
| Žiniatinklio programėlė | `http://localhost:3000` |
| Administravimo programėlė | `http://localhost:3001` |

PostgreSQL ir migracijų konteinerį sustabdykite komanda:

```bash
make db-down
```

## Vietinė konfigūracija

Pradėkite nuo `.env.example`; jame aprašyti galimi kintamieji ir nurodyta, kurios reikšmės skirtos tik vietinei aplinkai. Prieš paleisdami autentifikavimą, pakeiskite jame esantį senąjį `DATABASE_URL`, kaip parodyta aukščiau.

Pagrindiniai vietiniai nustatymai:

- `MIGRATION_DATABASE_URL` schemos migracijoms Docker viduje
- `DATABASE_URL`, šakniniame `.env` nustatytas `auth_app` vaidmeniui, skirtas `make auth-dev`
- `DATABASE_URL`, perduodamas kaip `backend_app` vaidmuo, skirtas `make backend-dev`
- `AUTH_MODE` ir `ALLOW_INSECURE_LOCAL_AUTH` serverinės dalies autentifikavimui
- `BACKEND_ALLOWED_ORIGINS` vietinės žiniatinklio ir administravimo programėlių kilmėms
- `ALLOWED_REDIRECT_URIS` ir `COOKIE_DOMAIN` naršyklės autentifikavimui
- Cognito ir sesijos šifravimo reikšmės, kai testuojamas tikras vienkartinis kodas

Agent API priklauso serverinei daliai. Ją paleidus, viešas vietinis Agent API aptikimo dokumentas pasiekiamas adresu `http://localhost:8080/v1/agent`. Apsaugotoms Agent operacijoms reikia `ApiKey` autentifikavimo, todėl `AUTH_MODE=none` kelyje jos nepasiekiamos.

### DI galimybės pagal kelią

Aukščiau pateiktos vietinės komandos nepaleidžia asinchroninio pokalbių vykdyklio. Greitasis kelias taip pat naudoja `AUTH_MODE=none`, kurį Chat V2 atmeta; pridėjus OpenAI raktą ar svečio kvotą, šis kelias DI galimybių neįgyja. Visa vietinė Cognito eiga suteikia palaikomą autentifikavimo būdą, tačiau vykdyklio vis tiek nepaleidžia.

AWS CDK diegimas sukuria vykdyklio Lambda funkciją ir sukonfigūruoja serverinę dalį taip, kad ši ją iškviestų. Teikėjo prieigos duomenys, pavyzdžiui, `OPENAI_API_KEY`, įjungia modelio iškvietimus palaikomoms autentifikuotoms užklausoms. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` atskirai įjungia ir riboja svečių DI; jis nevaldo DI prisijungusiems ar bearer raktu autentifikuotiems naudotojams. Langfuse nustatymai yra neprivaloma sekimo konfigūracija.

## Natyvieji klientai

Toje pačioje saugykloje yra iOS ir Android klientai, tačiau vietinės žiniatinklio ir serverio komandos jų nesukompiliuoja ir neplatina.

iOS projektas vietinius API ir autentifikavimo serverių adresus nuskaito iš:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Prireikus sukurkite jį iš pavyzdžio:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Atskiros kompiliavimo ir testavimo eigos aprašytos saugyklos [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) ir [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md).

## Produkcinė aplinka naudoja AWS CDK

Palaikomas produkcinio diegimo būdas – kartu pateikiama AWS CDK sistema. Ji pritaikyta AWS, o ne neutrali tiekėjų atžvilgiu, ir apima:

- VPC ir privačius potinklius
- PostgreSQL 18 Amazon RDS paslaugoje
- Amazon Cognito prisijungimą be slaptažodžio el. pašto vienkartiniu kodu
- API Gateway ir Lambda serverinės dalies, autentifikavimo ir MCP paslaugoms
- asinchroninio pokalbių vykdyklio Lambda funkciją ir Cognito pasirinktinio el. laiškų siuntėjo Lambda funkciją
- S3 ir CloudFront žiniatinklio ir administravimo programėlėms
- Secrets Manager prieigos duomenims saugoti: duomenų bazės, sesijų, el. pašto, stebėsenos ir, jei naudojama, DI
- CloudWatch įspėjimus, SNS pranešimus ir RDS atsarginių kopijų planą
- GitHub Actions OIDC diegimo vaidmenį
- Cloudflare sąrankos scenarijus viešiems domenams

Diegimas atveria `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` ir `mcp.<domain>`. Jei šakninis domenas niekam kitam nenaudojamas, diegimas taip pat gali sukurti šakninio domeno (apex) peradresavimą.

Produkcinio diegimo pagalbinį scenarijų paleiskite iš operatoriaus kompiuterio, kuriame yra:

- Node.js 24 ir npm
- Bash ir GNU Make
- veikiantis Docker
- AWS CLI, prisijungęs prie diegimo paskyros
- GitHub CLI, turintis autentifikuotą prieigą prie tikslinės saugyklos
- `curl`, `jq` ir Python 3

Prieš diegdami sukonfigūruokite operatoriaus reikšmes šakniniame `.env`. Privalomos reikšmės apima AWS regioną, domeną, įspėjimų el. pašto adresą, GitHub saugyklą, Cloudflare prieigos duomenis, Resend prieigos duomenis ir serverinės dalies Sentry konfigūraciją. OpenAI ir Langfuse prieigos duomenys neprivalomi.

Rekomenduojama pirmojo diegimo komanda iš saugyklos šakninio katalogo:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Dirbant su švaria saugyklos kopija, šiuo metu būtina atskirai įdiegti auth paketą, nes diegimo pagalbinis scenarijus šį paketą supakuoja, bet jo neįdiegia. Pagalbinis scenarijus sukuria arba keičia tikrus AWS, Cloudflare ir GitHub išteklius. Prieš jį paleisdami peržiūrėkite saugyklos diegimo dokumentaciją ir debesijos išlaidas. Jis paruošia CDK (bootstrap), įdiegia infrastruktūrą, vykdo migracijas, įkelia žiniatinklio ir administravimo programėlių failus, sukonfigūruoja viešus `app`, `admin`, `api`, `auth` ir `mcp` DNS įrašus, nebent šis žingsnis praleidžiamas, ir užpildo trūkstamą GitHub Actions konfigūraciją.

Po diegimo:

1. Patvirtinkite SNS prenumeratą, išsiųstą į `ALERT_EMAIL` pašto dėžutę.
2. Sukonfigūruokite ir patikrinkite atskirus Resend siuntimo domeno DNS įrašus:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` pagal numatytuosius nustatymus vykdo `scripts/cloudflare/setup-dns.sh` viešiems programėlių domenams. Jis nevykdo `setup-resend-domain.sh`; pastarasis sukuria el. laiškų siuntėjo įrašus `mail.<domain>` ir patvirtina tą domeną Resend paslaugoje. Jei diegiate su `--skip-dns`, viešus įrašus sukonfigūruokite atskirai, kaip aprašyta AWS CDK vadove.

## Duomenų perkeliamumas

Darbo srities paketų importas ir eksportas perkelia tik korteles, jų žymas ir susijusią mediją. Jie neperkelia kartojimo istorijos, FSRS planuoklio būsenos, darbo srities nustatymų, visos kaladžių struktūros ar paskyros duomenų.

Paketus laikykite turinio perkėlimo priemone, o ne visišku perkėlimu iš mūsų talpinamos versijos į savo serverį ar atsargine kopija atkūrimui po avarijos. Operatoriai patys atsako už įdiegtos PostgreSQL duomenų bazės ir medijos saugyklos atsarginių kopijų kūrimą ir atkūrimą.

## Operatoriaus atsakomybė

Talpindami savame serveryje patys parūpinate ir prižiūrite:

- AWS infrastruktūrą ir jos išlaidas
- Cloudflare DNS ir domeno konfigūraciją
- Resend el. laiškų pristatymo prieigos duomenis ir domeno įrašus
- privalomą Sentry stebėsenos konfigūraciją
- neprivalomus DI teikėjo ir Langfuse prieigos duomenis
- slaptus duomenis, atnaujinimus, migracijas, įspėjimus, atsargines kopijas ir atkūrimo testavimą
- natyvių mobiliųjų programėlių kompiliavimą ir platinimą, jei norite išleisti savo iOS ar Android versijas

Sistemoje yra daugelio šių sistemų automatizavimo priemonių, tačiau ją vis tiek turi prižiūrėti operatorius. Docker Compose nepakeičia šios produkcinės architektūros.

## Saugyklos diegimo dokumentacija

- [Saugyklos README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Serverinės dalies ir žiniatinklio diegimo vadovas](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK diegimo vadovas](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK infrastruktūra](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
