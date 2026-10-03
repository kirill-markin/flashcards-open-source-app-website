---
title: Vodnik za lastno gostovanje
description: Nibomo poženite lokalno s PostgreSQL, storitvijo za preverjanje pristnosti, zalednim sistemom, spletno in skrbniško aplikacijo ali namestite dokumentirani produkcijski sistem AWS CDK.
---

Nibomo podpira dve ločeni poti: lokalno razvojno okolje in produkcijsko namestitev na AWS. Docker Compose za lokalni razvoj poganja PostgreSQL in migracije; za produkcijsko namestitev ni namenjen.

## Zahteve za lokalni razvoj

- Git
- Bash
- GNU Make
- Docker z Docker Compose
- Node.js 24
- npm

Priložena datoteka Docker Compose trenutno poganja PostgreSQL 18.4. Ločene lokalne namestitve PostgreSQL ne potrebujete.

## Hiter lokalni začetek

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

`make db-up` zažene PostgreSQL in prek vsebnika za migracije izvede `scripts/deploy/migrate.sh`. S privzetimi gesli, kopiranimi iz `.env.example`, migracija pripravi te lokalne povezave za izvajanje:

- zaledni sistem: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- preverjanje pristnosti: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- poročanje: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Če v `.env` spremenite `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` ali `REPORTING_DB_PASSWORD`, uporabite isto spremenjeno geslo v ustreznem URL-ju povezave.

### Hiter začetek samo za lokalno okolje

Cilj Make za zaledni sistem ne naloži korenske datoteke `.env`. Njegove zahtevane lokalne nastavitve podajte izrecno:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Odjemalce zaženite v ločenih terminalih:

```bash
make web-dev
make admin-dev
```

Ta pot namenoma ne zažene `make auth-dev`. `AUTH_MODE=none` je izrecno nevaren način samo za localhost; nikoli ga ne uporabljajte v nameščenem okolju.
Zajema razvoj osnovnega zalednega sistema, javnega odkrivanja Agent API, spletne in skrbniške aplikacije, vendar Chat V2 na njej ni na voljo.

### Celoten lokalni tok s Cognito

Cilj za preverjanje pristnosti naloži korensko datoteko `.env`, cilj za zaledni sistem pa ne. Najprej v kopirani datoteki `.env` zamenjajte zastareli `DATABASE_URL` z URL-jem vloge za preverjanje pristnosti in dodajte svoje dejanske vrednosti Cognito:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Zaženite storitev za preverjanje pristnosti:

```bash
make auth-dev
```

V terminalu zalednega sistema izrecno naložite `.env`, nato pa za ta proces njegov URL zbirke podatkov za preverjanje pristnosti preglasite z URL-jem vloge zalednega sistema:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Ukaza `make web-dev` in `make admin-dev` zaženite vsakega v svojem terminalu. Oba cilja naložita korensko datoteko `.env`.

Storitve uporabljajo te lokalne naslove:

| Storitev | Naslov |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Storitev za preverjanje pristnosti (če je nastavljena) | `http://localhost:8081` |
| Zaledni API | `http://localhost:8080/v1` |
| Spletna aplikacija | `http://localhost:3000` |
| Skrbniška aplikacija | `http://localhost:3001` |

PostgreSQL in vsebnik za migracije ustavite z:

```bash
make db-down
```

## Lokalna konfiguracija

Začnite z `.env.example`; v njej so opisane razpoložljive spremenljivke in navedeno, katere vrednosti so samo za lokalno okolje. Pred zagonom storitve za preverjanje pristnosti v njej zamenjajte zastareli `DATABASE_URL`, kot je prikazano zgoraj.

Glavne lokalne nastavitve so:

- `MIGRATION_DATABASE_URL` za migracije sheme v Dockerju
- `DATABASE_URL` v korenski datoteki `.env`, nastavljen na vlogo `auth_app`, za `make auth-dev`
- `DATABASE_URL` z vlogo `backend_app`, podan za `make backend-dev`
- `AUTH_MODE` in `ALLOW_INSECURE_LOCAL_AUTH` za preverjanje pristnosti v zalednem sistemu
- `BACKEND_ALLOWED_ORIGINS` za lokalna izvora spletne in skrbniške aplikacije
- `ALLOWED_REDIRECT_URIS` in `COOKIE_DOMAIN` za preverjanje pristnosti v brskalniku
- vrednosti za Cognito in šifriranje sej, ko preizkušate pravo prijavo z enkratno kodo

Agent API je del zalednega sistema. Njegov javni lokalni dokument za odkrivanje je po zagonu zalednega sistema na voljo na `http://localhost:8080/v1/agent`. Zaščitene operacije za agente zahtevajo preverjanje pristnosti `ApiKey` in na poti `AUTH_MODE=none` niso na voljo.

### Obseg AI glede na pot

Zgornji lokalni ukazi ne zaženejo asinhronega delavca za klepet. Hitra pot poleg tega uporablja `AUTH_MODE=none`, ki ga Chat V2 zavrne; tudi če dodate ključ OpenAI ali kvoto za goste, AI na tej poti ne deluje. Celoten lokalni tok s Cognito zagotavlja podprt transport za preverjanje pristnosti, vendar delavca še vedno ne zažene.

Namestitev AWS CDK ustvari Lambdo delavca in zaledni sistem nastavi tako, da jo kliče. Poverilnice ponudnika, kot je `OPENAI_API_KEY`, omogočijo klice modela za podprte zahteve s preverjeno pristnostjo. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` ločeno omogoči in omeji AI za goste; ne nadzoruje AI za prijavljene uporabnike ali uporabnike, preverjene z žetonom Bearer. Nastavitve Langfuse so neobvezna konfiguracija sledenja.

## Izvorni odjemalci

Isti repozitorij vsebuje odjemalca za iOS in Android, vendar ju lokalni ukazi za splet in strežnik ne zgradijo in ne distribuirajo.

Projekt iOS bere lokalna gostitelja API in storitve za preverjanje pristnosti iz:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Po potrebi ga ustvarite iz primera:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Za njune ločene postopke gradnje in testiranja si oglejte [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) in [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) v repozitoriju.

## Produkcija uporablja AWS CDK

Podprta produkcijska namestitev je priloženi sistem AWS CDK. Temelji na AWS in ni neodvisen od ponudnika, vključuje pa:

- VPC in zasebna podomrežja
- PostgreSQL 18 na Amazon RDS
- Amazon Cognito s prijavo brez gesla z enkratno kodo po e-pošti
- API Gateway in Lambda za zaledni sistem, preverjanje pristnosti in storitve MCP
- asinhronega delavca za klepet v Lambdi in Lambdo za pošiljanje e-pošte po meri za Cognito
- S3 in CloudFront za spletno in skrbniško aplikacijo
- Secrets Manager za poverilnice zbirke podatkov, sej, e-pošte, nadzora in neobvezne poverilnice AI
- alarme CloudWatch, obvestila SNS in načrt varnostnega kopiranja RDS
- vlogo OIDC za namestitev prek GitHub Actions
- skripte za nastavitev Cloudflare za javne domene

Namestitev izpostavi `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` in `mcp.<domain>`. Ko korenska domena sicer ni v uporabi, lahko ustvari tudi preusmeritev korenske domene.

Produkcijski pomočnik zaženite na operaterskem računalniku, ki ima:

- Node.js 24 in npm
- Bash in GNU Make
- zagnan Docker
- AWS CLI, prijavljen v račun za namestitev
- GitHub CLI, prijavljen v račun z dostopom do ciljnega repozitorija
- `curl`, `jq` in Python 3

Pred namestitvijo v korenski datoteki `.env` nastavite operaterske vrednosti. Zahtevani nabor vključuje regijo AWS, domeno, e-poštni naslov za opozorila, repozitorij GitHub, poverilnice Cloudflare, poverilnice Resend in konfiguracijo Sentry za zaledni sistem. Poverilnice OpenAI in Langfuse so neobvezne.

Priporočeni ukaz za prvo namestitev iz korena repozitorija je:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Izrecna namestitev paketa za preverjanje pristnosti je v čistem izvodu trenutno potrebna, ker pomočnik za namestitev ta paket združi v sveženj, ne namesti pa ga. Pomočnik ustvari ali spremeni prave vire AWS, Cloudflare in GitHub. Pred zagonom preglejte dokumentacijo za namestitev v repozitoriju in stroške oblaka. Pomočnik izvede začetno nastavitev CDK, namesti infrastrukturo, izvede migracije, naloži datoteke spletne in skrbniške aplikacije, nastavi javne zapise DNS `app`, `admin`, `api`, `auth` in `mcp`, razen če jih preskočite, ter dopolni manjkajočo konfiguracijo GitHub Actions.

Po namestitvi:

1. Potrdite naročnino SNS, poslano v nabiralnik `ALERT_EMAIL`.
2. Nastavite in preverite ločene zapise DNS za domeno za pošiljanje prek Resend:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` privzeto zažene `scripts/cloudflare/setup-dns.sh` za javne domene aplikacije. Ne zažene `setup-resend-domain.sh`; ta ustvari zapise pošiljatelja e-pošte za `mail.<domain>` in to domeno preveri pri Resend. Če namestite z `--skip-dns`, javne zapise nastavite ločeno, kot je opisano v vodniku AWS CDK.

## Prenosljivost podatkov

Uvoz in izvoz paketov delovnega prostora preneseta samo kartice, njihove oznake in pripadajočo predstavnost. Ne preneseta zgodovine ponavljanja, stanja razporejevalnika FSRS, nastavitev delovnega prostora, celotne strukture kompletov ali podatkov računa.

Pakete obravnavajte kot prenos vsebine, ne kot popolno selitev z gostovane namestitve na lastni strežnik ali varnostno kopijo za obnovo po nesreči. Operaterji so odgovorni za varnostno kopiranje in obnovo nameščene zbirke podatkov PostgreSQL in shrambe predstavnosti.

## Odgovornosti operaterja

Lastno gostovanje pomeni, da sami zagotavljate in vzdržujete:

- infrastrukturo AWS in njene stroške
- DNS Cloudflare in konfiguracijo domene
- poverilnice za dostavo e-pošte Resend in zapise domene
- zahtevano konfiguracijo nadzora Sentry
- neobvezne poverilnice ponudnika AI in Langfuse
- skrivnosti, nadgradnje, migracije, opozorila, varnostne kopije in preizkušanje obnove
- gradnjo in distribucijo izvornih mobilnih aplikacij, če želite lastne izdaje za iOS ali Android

Rešitev vključuje avtomatizacijo za številne od teh sistemov, vendar še vedno potrebuje operaterja. Docker Compose ne nadomešča te produkcijske arhitekture.

## Dokumentacija za namestitev v repozitoriju

- [README repozitorija](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Vodnik za namestitev zalednega sistema in spleta](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Vodnik za namestitev AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [Infrastruktura AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
