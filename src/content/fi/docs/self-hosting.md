---
title: Itse ylläpidon opas
description: Aja Nibomoa paikallisesti PostgreSQL:n, tunnistautumisen, taustapalvelun, verkkosovelluksen ja hallintasovelluksen kanssa tai ota käyttöön dokumentoitu AWS CDK -tuotantopino.
---

Nibomo tukee kahta erillistä polkua: paikallista kehitysympäristöä ja tuotantokäyttöönottoa AWS:ssä. Docker Compose ajaa PostgreSQL:n ja migraatiot paikallista kehitystä varten; sitä ei ole tarkoitettu tuotantokäyttöönottoon.

## Paikallisen kehityksen vaatimukset

- Git
- Bash
- GNU Make
- Docker ja Docker Compose
- Node.js 24
- npm

Mukana tuleva Docker Compose -tiedosto ajaa tällä hetkellä PostgreSQL 18.4:ää. Erillistä paikallista PostgreSQL-asennusta ei tarvita.

## Paikallinen pika-aloitus

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

`make db-up` käynnistää PostgreSQL:n ja ajaa `scripts/deploy/migrate.sh`-skriptin migraatiokontin kautta. Kun käytössä ovat tiedostosta `.env.example` kopioidut oletussalasanat, migraatio luo nämä paikalliset ajonaikaiset yhteydet:

- taustapalvelu: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- tunnistautuminen: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- raportointi: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Jos muutat tiedostossa `.env` arvoa `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` tai `REPORTING_DB_PASSWORD`, käytä samaa muutettua salasanaa vastaavassa yhteys-URL:ssä.

### Nopea käynnistys vain paikallisesti

Taustapalvelun Make-kohde ei lataa juuren `.env`-tiedostoa. Anna sen vaatimat paikalliset asetukset erikseen:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Aja asiakassovellukset erillisissä päätteissä:

```bash
make web-dev
make admin-dev
```

Tämä polku ei tarkoituksella käynnistä komentoa `make auth-dev`. `AUTH_MODE=none` on nimenomaisesti turvaton, vain localhostiin tarkoitettu tila; älä koskaan käytä sitä käyttöönotetussa ympäristössä.
Se kattaa taustapalvelun ytimen, julkisen Agent API -discoveryn sekä verkko- ja hallintasovelluksen kehityksen, mutta Chat V2 ei ole sen kautta käytettävissä.

### Täysi paikallinen Cognito-kulku

Tunnistautumispalvelun kohde lataa juuren `.env`-tiedoston, mutta taustapalvelun kohde ei. Korvaa ensin kopioidun `.env`-tiedoston vanha `DATABASE_URL` tunnistautumisroolin URL-osoitteella ja lisää todelliset Cognito-arvosi:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Käynnistä tunnistautumispalvelu:

```bash
make auth-dev
```

Lataa taustapalvelun päätteessä `.env` erikseen ja korvaa sitten sen tunnistautumistietokannan URL taustapalvelun roolin URL-osoitteella kyseistä prosessia varten:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Aja `make web-dev` ja `make admin-dev` omissa päätteissään. Molemmat kohteet lataavat juuren `.env`-tiedoston.

Palvelut käyttävät näitä paikallisia osoitteita:

| Palvelu | Osoite |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Tunnistautuminen, kun määritetty | `http://localhost:8081` |
| Taustapalvelun API | `http://localhost:8080/v1` |
| Verkkosovellus | `http://localhost:3000` |
| Hallintasovellus | `http://localhost:3001` |

Pysäytä PostgreSQL ja migraatiokontti komennolla:

```bash
make db-down
```

## Paikallinen määritys

Aloita tiedostosta `.env.example`; se dokumentoi käytettävissä olevat muuttujat ja sen, mitkä arvot ovat vain paikallisia. Korvaa sen vanha `DATABASE_URL` ennen tunnistautumispalvelun ajamista, kuten yllä näytettiin.

Tärkeimmät paikalliset asetukset ovat:

- `MIGRATION_DATABASE_URL` skeemamigraatioille Dockerin sisällä
- `DATABASE_URL` asetettuna juuren `.env`-tiedostossa `auth_app`-rooliin komentoa `make auth-dev` varten
- `DATABASE_URL` annettuna `backend_app`-roolina komennolle `make backend-dev`
- `AUTH_MODE` ja `ALLOW_INSECURE_LOCAL_AUTH` taustapalvelun tunnistautumista varten
- `BACKEND_ALLOWED_ORIGINS` paikallisen verkko- ja hallintasovelluksen alkuperiä varten
- `ALLOWED_REDIRECT_URIS` ja `COOKIE_DOMAIN` selaintunnistautumista varten
- Cognito- ja istunnon salausarvot, kun testaat todellista OTP:tä

Agent API on osa taustapalvelua. Sen julkinen paikallinen discovery-dokumentti on saatavilla osoitteessa `http://localhost:8080/v1/agent`, kun taustapalvelu on käynnistynyt. Suojatut Agent-toiminnot vaativat `ApiKey`-tunnistautumisen, eivätkä ne ole käytettävissä `AUTH_MODE=none`-polulla.

### Tekoälyn saatavuus poluittain

Yllä olevat paikalliset komennot eivät käynnistä asynkronista chat-työprosessia. Nopea polku käyttää lisäksi tilaa `AUTH_MODE=none`, jonka Chat V2 hylkää; OpenAI-avaimen tai vieraskiintiön lisääminen ei saa tekoälyä toimimaan tällä polulla. Täysi paikallinen Cognito-kulku tarjoaa tuetun tunnistautumistavan, mutta sekään ei käynnistä työprosessia.

AWS CDK -käyttöönotto luo työprosessin Lambdan ja määrittää taustapalvelun kutsumaan sitä. Palveluntarjoajan tunnukset, kuten `OPENAI_API_KEY`, mahdollistavat mallikutsut tuetuissa tunnistautuneissa pyynnöissä. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` ottaa erikseen käyttöön ja rajoittaa vieraiden tekoälyn käyttöä; se ei ohjaa kirjautuneiden tai bearer-tunnistautuneiden käyttäjien tekoälyä. Langfuse-asetukset ovat valinnaisia jäljitysmäärityksiä.

## Natiivit asiakassovellukset

Sama repositorio sisältää iOS- ja Android-asiakassovellukset, mutta paikalliset verkko- ja palvelinkomennot eivät käännä tai jakele niitä.

iOS-projekti lukee paikalliset API- ja tunnistautumisisännät tiedostosta:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Luo se tarvittaessa esimerkkitiedostosta:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Erilliset käännös- ja testityönkulut on kuvattu repositorion [iOS-README:ssä](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) ja [Android-README:ssä](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md).

## Tuotannossa käytetään AWS CDK:ta

Tuettu tuotantokäyttöönotto on mukana tuleva AWS CDK -pino. Se perustuu AWS:ään eikä ole toimittajariippumaton, ja se sisältää:

- VPC:n ja yksityiset aliverkot
- PostgreSQL 18:n Amazon RDS:ssä
- Amazon Cognito -palvelun salasanattoman sähköposti-OTP:n
- API Gatewayn ja Lambdan taustapalvelua, tunnistautumista ja MCP-palveluja varten
- asynkronisen chat-työprosessin Lambdan ja Cognito-palvelun mukautetun sähköpostilähettäjän Lambdan
- S3:n ja CloudFrontin verkko- ja hallintasovelluksia varten
- Secrets Managerin tietokannan, istuntojen, sähköpostin, valvonnan ja valinnaisten tekoälypalvelujen tunnuksille
- CloudWatch-hälytykset, SNS-ilmoitukset ja RDS-varmuuskopiointisuunnitelman
- GitHub Actionsin OIDC-käyttöönottoroolin
- Cloudflaren määritysskriptit julkisille verkkotunnuksille

Käyttöönotto tarjoaa osoitteet `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` ja `mcp.<domain>`. Se voi myös luoda juuriverkkotunnuksen uudelleenohjauksen, jos juuriverkkotunnus ei ole muuten käytössä.

Aja tuotannon apuskripti ylläpitäjän koneelta, jossa on:

- Node.js 24 ja npm
- Bash ja GNU Make
- käynnissä oleva Docker
- käyttöönottotiliin tunnistautunut AWS CLI
- kohderepositorioon tunnistautunut GitHub CLI
- `curl`, `jq` ja Python 3

Määritä ylläpitäjän arvot juuren `.env`-tiedostoon ennen käyttöönottoa. Pakollisiin arvoihin kuuluvat AWS-alue, verkkotunnus, hälytysten sähköpostiosoite, GitHub-repositorio, Cloudflare-tunnukset, Resend-tunnukset ja taustapalvelun Sentry-määritys. OpenAI- ja Langfuse-tunnukset ovat valinnaisia.

Ensimmäisen käyttöönoton suositeltu komento repositorion juuresta on:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Tunnistautumispaketin erillinen asennus vaaditaan tällä hetkellä puhtaassa työkopiossa, koska käyttöönoton apuskripti paketoi sen mutta ei asenna sitä. Apuskripti luo tai muuttaa todellisia AWS-, Cloudflare- ja GitHub-resursseja. Tutustu repositorion käyttöönottodokumentaatioon ja pilvikustannuksiin ennen sen ajamista. Se alustaa CDK:n, ottaa infrastruktuurin käyttöön, ajaa migraatiot, lähettää verkko- ja hallintasovelluksen tiedostot palveluun, määrittää julkiset `app`-, `admin`-, `api`-, `auth`- ja `mcp`-DNS-tietueet, ellei tätä ohiteta, ja täydentää puuttuvat GitHub Actions -määritykset.

Käyttöönoton jälkeen:

1. Vahvista SNS-tilaus, joka lähetettiin `ALERT_EMAIL`-postilaatikkoon.
2. Määritä ja vahvista erilliset Resendin lähetysverkkotunnuksen DNS-tietueet:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` ajaa oletuksena `scripts/cloudflare/setup-dns.sh`-skriptin julkisille sovellusverkkotunnuksille. Se ei aja skriptiä `setup-resend-domain.sh`; jälkimmäinen luo sähköpostin lähettäjän tietueet verkkotunnukselle `mail.<domain>` ja vahvistaa kyseisen verkkotunnuksen Resendissä. Jos otat palvelun käyttöön valitsimella `--skip-dns`, määritä julkiset tietueet erikseen AWS CDK -oppaan ohjeiden mukaan.

## Datan siirrettävyys

Työtilapakettien tuonti ja vienti siirtää vain kortit, niiden tunnisteet ja niihin liittyvän median. Se ei siirrä kertaushistoriaa, FSRS-ajoittimen tilaa, työtilan asetuksia, täydellisiä pakkarakenteita eikä tilitietoja.

Käsittele paketteja sisällön siirtona, ei täydellisenä siirtona isännöidystä palvelusta itse ylläpidettyyn eikä varmuuskopiona häiriöistä palautumista varten. Ylläpitäjät vastaavat käyttöönotetun PostgreSQL-tietokannan ja mediatallennuksen varmuuskopioinnista ja palauttamisesta.

## Ylläpitäjän vastuut

Itse ylläpito tarkoittaa, että hankit ja ylläpidät itse:

- AWS-infrastruktuurin ja sen kustannukset
- Cloudflaren DNS- ja verkkotunnusmääritykset
- Resendin sähköpostin toimitustunnukset ja verkkotunnuksen tietueet
- vaaditun Sentry-valvonnan määrityksen
- valinnaiset tekoälypalveluntarjoajan ja Langfusen tunnukset
- salaisuudet, päivitykset, migraatiot, hälytykset, varmuuskopiot ja palautuksen testauksen
- natiivit mobiilikäännökset ja niiden jakelun, jos haluat omat iOS- tai Android-julkaisut

Pino sisältää automaatiota monille näistä järjestelmistä, mutta se vaatii silti ylläpitäjän. Docker Compose ei korvaa tätä tuotantoarkkitehtuuria.

## Repositorion käyttöönottodokumentaatio

- [Repositorion README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Taustapalvelun ja verkkosovelluksen käyttöönotto-opas](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK -käyttöönotto-opas](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK -infrastruktuuri](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
