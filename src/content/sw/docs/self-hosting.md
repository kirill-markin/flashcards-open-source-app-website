---
title: Mwongozo wa kujipangia mwenyewe
description: Endesha Nibomo kwenye kompyuta yako ukiwa na PostgreSQL, uthibitishaji, backend, wavuti na programu ya usimamizi, au sambaza mrundikano wa uzalishaji wa AWS CDK ulioelezwa kwenye nyaraka.
---

Nibomo inaunga mkono njia mbili tofauti: mazingira ya uendelezaji wa ndani na usambazaji wa uzalishaji kwenye AWS. Docker Compose huendesha PostgreSQL na uhamishaji wa skima kwa ajili ya uendelezaji wa ndani; si njia ya usambazaji wa uzalishaji.

## Mahitaji ya uendelezaji wa ndani

- Git
- Bash
- GNU Make
- Docker pamoja na Docker Compose
- Node.js 24
- npm

Faili ya Docker Compose iliyotolewa kwa sasa huendesha PostgreSQL 18.4. Huhitaji kusakinisha PostgreSQL tofauti kwenye kompyuta yako.

## Kuanza haraka kwenye kompyuta yako

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

`make db-up` huanzisha PostgreSQL na huendesha `scripts/deploy/migrate.sh` kupitia kontena la uhamishaji. Kwa manenosiri chaguo-msingi yaliyonakiliwa kutoka `.env.example`, uhamishaji huandaa miunganisho hii ya ndani ya wakati wa uendeshaji:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- uthibitishaji: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- ripoti: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Ukibadilisha `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` au `REPORTING_DB_PASSWORD` katika `.env`, tumia nenosiri hilohilo jipya kwenye URL ya muunganisho inayolingana.

### Kuanza haraka kwa matumizi ya ndani pekee

Lengo la Make la backend halipakii `.env` ya mzizi. Pitisha mipangilio yake ya ndani inayohitajika waziwazi:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Endesha viteja katika vituo tofauti vya amri:

```bash
make web-dev
make admin-dev
```

Njia hii kwa makusudi haianzishi `make auth-dev`. `AUTH_MODE=none` ni hali isiyo salama kwa makusudi, ya localhost pekee; kamwe usiitumie katika mazingira yaliyosambazwa.
Inashughulikia uendelezaji wa backend kuu, ugunduzi wa umma wa Agent API, wavuti na programu ya usimamizi, lakini haifanyi Chat V2 ipatikane.

### Mtiririko kamili wa Cognito wa ndani

Lengo la uthibitishaji hupakia `.env` ya mzizi, wakati lengo la backend halipakii. Kwanza badilisha `DATABASE_URL` ya zamani kwenye `.env` uliyonakili kwa URL ya jukumu la uthibitishaji, na uongeze thamani zako halisi za Cognito:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Anzisha uthibitishaji:

```bash
make auth-dev
```

Katika kituo cha amri cha backend, pakia `.env` waziwazi, kisha batilisha URL yake ya hifadhidata ya uthibitishaji kwa URL ya jukumu la backend kwa mchakato huo:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Endesha `make web-dev` na `make admin-dev` kila moja katika kituo chake cha amri. Malengo yote mawili hupakia `.env` ya mzizi.

Huduma hutumia anwani hizi za ndani:

| Huduma | Anwani |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Uthibitishaji, ukisanidiwa | `http://localhost:8081` |
| API ya backend | `http://localhost:8080/v1` |
| Programu ya wavuti | `http://localhost:3000` |
| Programu ya usimamizi | `http://localhost:3001` |

Simamisha PostgreSQL na kontena la uhamishaji kwa:

```bash
make db-down
```

## Usanidi wa ndani

Anza na `.env.example`; inaeleza vigeu vinavyopatikana na thamani zipi ni za ndani pekee. Badilisha `DATABASE_URL` yake ya zamani kabla ya kuendesha uthibitishaji, kama ilivyoonyeshwa hapo juu.

Mipangilio mikuu ya ndani ni:

- `MIGRATION_DATABASE_URL` kwa uhamishaji wa skima ndani ya Docker
- `DATABASE_URL` iliyowekwa kwa jukumu la `auth_app` katika `.env` ya mzizi kwa `make auth-dev`
- `DATABASE_URL` inayopitishwa kama jukumu la `backend_app` kwa `make backend-dev`
- `AUTH_MODE` na `ALLOW_INSECURE_LOCAL_AUTH` kwa uthibitishaji wa backend
- `BACKEND_ALLOWED_ORIGINS` kwa asili za ndani za wavuti na programu ya usimamizi
- `ALLOWED_REDIRECT_URIS` na `COOKIE_DOMAIN` kwa uthibitishaji wa kivinjari
- thamani za Cognito na za usimbaji fiche wa kipindi unapojaribu OTP halisi

Agent API ni sehemu ya backend. Hati yake ya umma ya ugunduzi wa ndani inapatikana kwenye `http://localhost:8080/v1/agent` baada ya backend kuanza. Operesheni za Agent zilizolindwa huhitaji uthibitishaji wa `ApiKey` na hazipatikani katika njia ya `AUTH_MODE=none`.

### Uwezo wa AI kulingana na njia

Amri za ndani zilizo hapo juu haziwashi mfanyakazi wa gumzo anayefanya kazi chinichini. Njia ya haraka pia hutumia `AUTH_MODE=none`, ambayo Chat V2 huikataa; kuongeza ufunguo wa OpenAI au mgao wa wageni hakuifanyi njia hiyo iweze kutumia AI. Mtiririko kamili wa Cognito wa ndani hutoa njia ya uthibitishaji inayotumika, lakini bado hauwashi mfanyakazi huyo.

Usambazaji wa AWS CDK huunda Lambda ya mfanyakazi na husanidi backend ili iiite. Vitambulisho vya mtoa huduma kama `OPENAI_API_KEY` huwezesha kuita modeli kwa maombi yaliyothibitishwa yanayotumika. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` kwa upande wake huwezesha AI ya wageni na kuiwekea kikomo; haidhibiti AI ya watumiaji walioingia wala ya waliothibitishwa kwa tokeni ya bearer. Mipangilio ya Langfuse ni usanidi wa hiari wa ufuatiliaji.

## Viteja asilia

Hazina hiyohiyo ina viteja vya iOS na Android, lakini amri za ndani za wavuti/seva haziviundi wala haziwasambazi.

Mradi wa iOS husoma seva za ndani za API na uthibitishaji kutoka:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Iunde kutoka kwenye mfano inapohitajika:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Angalia [README ya iOS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) na [README ya Android](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) za hazina kwa mitiririko yao tofauti ya kuunda na kujaribu.

## Uzalishaji hutumia AWS CDK

Usambazaji wa uzalishaji unaotumika ni mrundikano wa AWS CDK uliojumuishwa. Unategemea AWS badala ya kutofungamana na mtoa huduma yeyote, na unajumuisha:

- VPC na subnet za faragha
- PostgreSQL 18 kwenye Amazon RDS
- OTP ya barua pepe bila nenosiri ya Amazon Cognito
- API Gateway na Lambda kwa huduma za backend, uthibitishaji na MCP
- Lambda ya mfanyakazi wa gumzo anayefanya kazi chinichini na Lambda maalum ya Cognito ya kutuma barua pepe
- S3 na CloudFront kwa programu za wavuti na usimamizi
- Secrets Manager kwa vitambulisho vya hifadhidata, kipindi, barua pepe, ufuatiliaji, na vya hiari vya AI
- kengele za CloudWatch, arifa za SNS, na mpango wa nakala rudufu wa RDS
- jukumu la usambazaji la GitHub Actions OIDC
- skripti za usanidi wa Cloudflare kwa vikoa vya umma

Usambazaji hutoa `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` na `mcp.<domain>`. Unaweza pia kuunda uelekezaji wa kikoa kikuu wakati kikoa cha mzizi hakitumiki kwa jambo jingine.

Endesha kisaidizi cha uzalishaji kutoka kwenye kompyuta ya mwendeshaji yenye:

- Node.js 24 na npm
- Bash na GNU Make
- Docker inayoendeshwa
- AWS CLI iliyothibitishwa kwenye akaunti ya usambazaji
- GitHub CLI iliyothibitishwa kwenye hazina lengwa
- `curl`, `jq` na Python 3

Kabla ya kusambaza, sanidi thamani za mwendeshaji katika `.env` ya mzizi. Seti inayohitajika inajumuisha eneo la AWS, kikoa, barua pepe ya tahadhari, hazina ya GitHub, vitambulisho vya Cloudflare, vitambulisho vya Resend, na usanidi wa Sentry wa backend. Vitambulisho vya OpenAI na Langfuse ni vya hiari.

Amri inayopendekezwa ya usambazaji wa kwanza kutoka kwenye mzizi wa hazina ni:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Kwa sasa, kwenye nakala safi ya hazina, ni lazima kusakinisha kifurushi cha uthibitishaji kwa amri tofauti, kwa sababu kisaidizi cha usambazaji hukijumuisha kifurushi hicho lakini hakikisakinishi. Kisaidizi huunda au hubadilisha rasilimali halisi za AWS, Cloudflare na GitHub. Kagua nyaraka za usambazaji za hazina na gharama za wingu kabla ya kukiendesha. Huanzisha CDK, husambaza miundombinu, huendesha uhamishaji wa skima, hupakia rasilimali za wavuti na usimamizi, husanidi rekodi za DNS za umma za `app`, `admin`, `api`, `auth` na `mcp` isipokuwa zimerukwa, na hujaza usanidi wa GitHub Actions unaokosekana.

Baada ya usambazaji:

1. Thibitisha usajili wa SNS uliotumwa kwenye kikasha cha `ALERT_EMAIL`.
2. Sanidi na uthibitishe rekodi tofauti za DNS za kikoa cha kutuma barua pepe cha Resend:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` huendesha `scripts/cloudflare/setup-dns.sh` kwa vikoa vya umma vya programu kwa chaguo-msingi. Haiendeshi `setup-resend-domain.sh`; hiyo ya pili huunda rekodi za mtumaji wa barua pepe za `mail.<domain>` na huthibitisha kikoa hicho kwa Resend. Ukisambaza kwa `--skip-dns`, sanidi rekodi za umma kando kama ilivyoelezwa katika mwongozo wa AWS CDK.

## Uhamishaji wa data

Kuleta na kutoa kifurushi cha nafasi ya kazi huhamisha kadi, lebo zake, na midia inayohusiana pekee. Hakuhamishi historia ya marudio, hali ya kipanga ratiba cha FSRS, mipangilio ya nafasi ya kazi, miundo kamili ya makundi ya kadi, wala data ya akaunti.

Chukulia vifurushi kama uhamishaji wa maudhui, si uhamisho kamili kutoka huduma iliyopangishwa kwenda ya kujipangia mwenyewe wala nakala rudufu ya kurejesha baada ya maafa. Waendeshaji wanawajibika kuhifadhi nakala rudufu na kurejesha hifadhidata ya PostgreSQL iliyosambazwa na hifadhi ya midia.

## Majukumu ya mwendeshaji

Kujipangia mwenyewe kunamaanisha unatoa na kudumisha:

- miundombinu ya AWS na gharama zake
- DNS ya Cloudflare na usanidi wa kikoa
- vitambulisho vya utumaji barua pepe vya Resend na rekodi za kikoa
- usanidi unaohitajika wa ufuatiliaji wa Sentry
- vitambulisho vya hiari vya mtoa huduma wa AI na vya Langfuse
- siri, masasisho, uhamishaji wa skima, tahadhari, nakala rudufu, na majaribio ya urejeshaji
- uundaji na usambazaji wa programu asilia za simu ikiwa unataka matoleo yako mwenyewe ya iOS au Android

Mrundikano unajumuisha uendeshaji wa kiotomatiki kwa mifumo mingi kati ya hii, lakini bado unahitaji mwendeshaji. Docker Compose haichukui nafasi ya muundo huu wa uzalishaji.

## Nyaraka za usambazaji za hazina

- [README ya hazina](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Mwongozo wa usambazaji wa backend na wavuti](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Mwongozo wa usambazaji wa AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [Miundombinu ya AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
