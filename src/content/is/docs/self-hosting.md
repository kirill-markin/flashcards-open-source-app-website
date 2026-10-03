---
title: Leiðbeiningar um eigin hýsingu
description: Keyrðu Nibomo staðbundið með PostgreSQL, auðkenningu, bakenda, vefforriti og stjórnborði, eða settu upp skjalfestu AWS CDK-uppsetninguna fyrir raunumhverfi.
---

Nibomo styður tvær aðskildar leiðir: staðbundið þróunarumhverfi og uppsetningu í raunumhverfi á AWS. Docker Compose keyrir PostgreSQL og gagnagrunnsflutninga fyrir staðbundna þróun; það er ekki aðferðin til uppsetningar í raunumhverfi.

## Kröfur fyrir staðbundna þróun

- Git
- Bash
- GNU Make
- Docker með Docker Compose
- Node.js 24
- npm

Docker Compose-skráin sem fylgir keyrir nú PostgreSQL 18.4. Þú þarft ekki sérstaka staðbundna uppsetningu á PostgreSQL.

## Fljótleg staðbundin byrjun

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

`make db-up` ræsir PostgreSQL og keyrir `scripts/deploy/migrate.sh` í gegnum flutningsgáminn. Með sjálfgefnu lykilorðunum sem eru afrituð úr `.env.example` útbýr flutningurinn þessar staðbundnu tengingar fyrir keyrslu:

- bakendi: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- auðkenning: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- skýrslugerð: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Ef þú breytir `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` eða `REPORTING_DB_PASSWORD` í `.env` skaltu nota sama breytta lykilorðið í samsvarandi tengislóð.

### Hröð byrjun, eingöngu á eigin vél

Make-markmið bakendans hleður ekki `.env` í rótinni. Gefðu því nauðsynlegar staðbundnar stillingar beint:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Keyrðu biðlarana í aðskildum skipanagluggum:

```bash
make web-dev
make admin-dev
```

Þessi leið ræsir viljandi ekki `make auth-dev`. `AUTH_MODE=none` er yfirlýst óöruggur hamur, eingöngu ætlaður fyrir localhost; notaðu hann aldrei í uppsettu umhverfi.
Leiðin nær yfir þróun á kjarna bakendans, opinberri uppgötvun Agent API, vefforritinu og stjórnborðinu, en gerir Chat V2 ekki aðgengilegt.

### Fullt staðbundið Cognito-flæði

Auðkenningarmarkmiðið hleður `.env` í rótinni en bakendamarkmiðið gerir það ekki. Skiptu fyrst gamla `DATABASE_URL` í afrituðu `.env` út fyrir slóð auðkenningarhlutverksins og bættu við raunverulegum Cognito-gildum þínum:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Ræstu auðkenninguna:

```bash
make auth-dev
```

Í skipanaglugga bakendans skaltu hlaða `.env` handvirkt og svo yfirskrifa gagnagrunnsslóð auðkenningarinnar með slóð bakendahlutverksins fyrir það ferli:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Keyrðu `make web-dev` og `make admin-dev` hvort í sínum skipanaglugga. Bæði markmiðin hlaða `.env` í rótinni.

Þjónusturnar nota þessi staðbundnu vistföng:

| Þjónusta | Vistfang |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Auðkenning, þegar hún er stillt | `http://localhost:8081` |
| Bakenda-API | `http://localhost:8080/v1` |
| Vefforrit | `http://localhost:3000` |
| Stjórnborð | `http://localhost:3001` |

Stöðvaðu PostgreSQL og flutningsgáminn með:

```bash
make db-down
```

## Staðbundnar stillingar

Byrjaðu á `.env.example`; þar er lýst þeim breytum sem eru í boði og hvaða gildi eru eingöngu staðbundin. Skiptu út gamla `DATABASE_URL` þar áður en þú keyrir auðkenninguna, eins og sýnt er hér að ofan.

Helstu staðbundnu stillingarnar eru:

- `MIGRATION_DATABASE_URL` fyrir flutninga á gagnaskema inni í Docker
- `DATABASE_URL` stillt á hlutverkið `auth_app` í `.env` í rótinni fyrir `make auth-dev`
- `DATABASE_URL` gefið upp sem hlutverkið `backend_app` fyrir `make backend-dev`
- `AUTH_MODE` og `ALLOW_INSECURE_LOCAL_AUTH` fyrir auðkenningu bakendans
- `BACKEND_ALLOWED_ORIGINS` fyrir staðbundna uppruna vefforritsins og stjórnborðsins
- `ALLOWED_REDIRECT_URIS` og `COOKIE_DOMAIN` fyrir auðkenningu í vafra
- Cognito-gildin og gildin fyrir dulkóðun lotu þegar raunverulegur einnota kóði er prófaður

Agent API er hluti af bakendanum. Opinbera staðbundna uppgötvunarskjalið þess er aðgengilegt á `http://localhost:8080/v1/agent` eftir að bakendinn ræsist. Varðar aðgerðir Agent API krefjast `ApiKey`-auðkenningar og eru ekki í boði á `AUTH_MODE=none`-leiðinni.

### Gervigreind eftir leiðum

Staðbundnu skipanirnar hér að ofan ræsa ekki ósamstillta spjallvinnsluna. Hraða leiðin notar líka `AUTH_MODE=none`, sem Chat V2 hafnar; þótt OpenAI-lykli eða gestakvóta sé bætt við getur sú leið samt ekki notað gervigreind. Fulla staðbundna Cognito-flæðið leggur til studda auðkenningarleið en ræsir samt ekki vinnsluna.

AWS CDK-uppsetningin býr til Lambda-fall fyrir vinnsluna og stillir bakendann til að kalla á það. Aðgangsupplýsingar þjónustuaðila, svo sem `OPENAI_API_KEY`, virkja köll í líkanið fyrir studdar auðkenndar beiðnir. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` virkjar og takmarkar sérstaklega gervigreind fyrir gesti; það stýrir ekki gervigreind fyrir innskráða notendur eða beiðnir auðkenndar með bearer-tóka. Langfuse-stillingar eru valfrjálsar stillingar fyrir rakningu.

## Farsímabiðlarar

Sama kóðasafn inniheldur iOS- og Android-biðlarana, en staðbundnu skipanirnar fyrir vef og netþjón hvorki byggja þá né dreifa þeim.

iOS-verkefnið les staðbundnar slóðir API og auðkenningar úr:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Búðu hana til úr dæmaskránni þegar þörf krefur:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Sjá [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) og [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) í kóðasafninu fyrir aðskilin vinnuferli þeirra við smíði og prófanir.

## Raunumhverfið notar AWS CDK

Studda uppsetningin fyrir raunumhverfi er AWS CDK-staflinn sem fylgir. Hann byggir á AWS frekar en að vera óháður þjónustuaðila og inniheldur:

- VPC og lokuð undirnet
- PostgreSQL 18 á Amazon RDS
- innskráningu án lykilorðs með einnota kóða í tölvupósti í gegnum Amazon Cognito
- API Gateway og Lambda fyrir bakenda-, auðkenningar- og MCP-þjónusturnar
- Lambda-fall fyrir ósamstillta spjallvinnslu og Lambda-fall fyrir sérsniðna tölvupóstsendingu Cognito
- S3 og CloudFront fyrir vefforritið og stjórnborðið
- Secrets Manager fyrir aðgangsupplýsingar að gagnagrunni, lotum, tölvupósti, vöktun og valfrjálsri gervigreind
- CloudWatch-viðvaranir, SNS-tilkynningar og afritunaráætlun fyrir RDS
- OIDC-hlutverk fyrir uppsetningu með GitHub Actions
- Cloudflare-uppsetningarskriftur fyrir opinberu lénin

Uppsetningin gerir `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` og `mcp.<domain>` aðgengileg. Hún getur einnig búið til framvísun á grunnléninu þegar rótarlénið er ekki notað að öðru leyti.

Keyrðu hjálparforritið fyrir raunumhverfi úr rekstrarvél með:

- Node.js 24 og npm
- Bash og GNU Make
- Docker í gangi
- AWS CLI auðkennt gagnvart aðganginum sem sett er upp á
- GitHub CLI auðkennt gagnvart markkóðasafninu
- `curl`, `jq` og Python 3

Áður en þú setur upp skaltu stilla rekstrargildin í `.env` í rótinni. Nauðsynleg gildi eru meðal annars AWS-svæði, lén, netfang fyrir viðvaranir, GitHub-kóðasafn, aðgangsupplýsingar fyrir Cloudflare og Resend og Sentry-stillingar bakendans. Aðgangsupplýsingar fyrir OpenAI og Langfuse eru valfrjálsar.

Æskilegasta skipunin fyrir fyrstu uppsetningu, keyrð úr rót kóðasafnsins, er:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Eins og er þarf að setja auðkenningarpakkann upp sérstaklega í hreinu eintaki af kóðasafninu, því að hjálparforritið pakkar honum með en setur hann ekki upp. Hjálparforritið býr til eða breytir raunverulegum tilföngum hjá AWS, Cloudflare og GitHub. Farðu yfir skjölun kóðasafnsins um uppsetningu og skýjakostnað áður en þú keyrir það. Það frumstillir CDK, setur upp innviðina, keyrir gagnagrunnsflutninga, hleður upp skrám vefforritsins og stjórnborðsins, stillir opinberu DNS-færslurnar fyrir `app`, `admin`, `api`, `auth` og `mcp` nema því sé sleppt, og bætir við þeim stillingum GitHub Actions sem vantar.

Eftir uppsetninguna:

1. Staðfestu SNS-áskriftina sem send var í pósthólfið `ALERT_EMAIL`.
2. Stilltu og staðfestu aðskildu DNS-færslurnar fyrir sendingarlén Resend:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` keyrir sjálfgefið `scripts/cloudflare/setup-dns.sh` fyrir opinberu lén forritsins. Það keyrir ekki `setup-resend-domain.sh`; sú skrifta býr til færslurnar fyrir tölvupóstsendingu á `mail.<domain>` og staðfestir það lén hjá Resend. Ef þú setur upp með `--skip-dns` skaltu stilla opinberu færslurnar sérstaklega eins og lýst er í leiðbeiningunum um AWS CDK.

## Færanleiki gagna

Við inn- og útflutning vinnusvæðapakka eru eingöngu flutt spjöld, merki þeirra og tengdir miðlar. Upprifjunarsaga, staða FSRS-tímasetningar, stillingar vinnusvæðis, full uppbygging stokka og gögn aðgangs fylgja ekki með.

Líttu á pakka sem flutning á efni, ekki sem heildarflutning úr hýstu útgáfunni yfir í eigin hýsingu eða sem öryggisafrit fyrir endurheimt eftir áföll. Rekstraraðilar bera ábyrgð á að taka afrit af uppsetta PostgreSQL-gagnagrunninum og miðlageymslunni og endurheimta þau.

## Ábyrgð rekstraraðila

Eigin hýsing þýðir að þú útvegar og viðheldur:

- AWS-innviðum og kostnaði við þá
- DNS- og lénsstillingum í Cloudflare
- aðgangsupplýsingum fyrir tölvupóstsendingu Resend og lénsfærslum
- nauðsynlegum Sentry-stillingum fyrir vöktun
- valfrjálsum aðgangsupplýsingum fyrir gervigreindarþjónustu og Langfuse
- leyndarmálum, uppfærslum, gagnagrunnsflutningum, viðvörunum, afritum og prófunum á endurheimt
- smíði og dreifingu farsímaforrita ef þú vilt eigin útgáfur fyrir iOS eða Android

Staflinn inniheldur sjálfvirkni fyrir mörg þessara kerfa, en hann krefst samt rekstraraðila. Docker Compose kemur ekki í stað þessarar uppbyggingar fyrir raunumhverfi.

## Skjölun kóðasafnsins um uppsetningu

- [README kóðasafnsins](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Leiðbeiningar um uppsetningu bakenda og vefforrits](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Leiðbeiningar um uppsetningu með AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK-innviðir](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
