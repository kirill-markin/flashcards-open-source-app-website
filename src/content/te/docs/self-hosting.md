---
title: సొంత హోస్టింగ్ గైడ్
description: PostgreSQL, ప్రామాణీకరణ, బ్యాకెండ్, వెబ్, అడ్మిన్‌తో Nibomo ను లోకల్‌గా నడపండి, లేదా డాక్యుమెంట్ చేసిన AWS CDK ప్రొడక్షన్ స్టాక్‌ను డిప్లాయ్ చేయండి.
---

Nibomo రెండు వేర్వేరు మార్గాలకు మద్దతు ఇస్తుంది: లోకల్ డెవలప్‌మెంట్ ఎన్విరాన్‌మెంట్, AWS పై ప్రొడక్షన్ డిప్లాయ్‌మెంట్. Docker Compose లోకల్ డెవలప్‌మెంట్ కోసం PostgreSQL ను, మైగ్రేషన్‌లను నడుపుతుంది; అది ప్రొడక్షన్ డిప్లాయ్‌మెంట్ పద్ధతి కాదు.

## లోకల్ డెవలప్‌మెంట్ అవసరాలు

- Git
- Bash
- GNU Make
- Docker Compose తో Docker
- Node.js 24
- npm

అందించిన Docker Compose ఫైల్ ప్రస్తుతం PostgreSQL 18.4 ను నడుపుతుంది. మీకు వేరుగా లోకల్ PostgreSQL ఇన్‌స్టాలేషన్ అవసరం లేదు.

## లోకల్ క్విక్ స్టార్ట్

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

`make db-up` PostgreSQL ను ప్రారంభించి, మైగ్రేషన్ కంటైనర్ ద్వారా `scripts/deploy/migrate.sh` ను నడుపుతుంది. `.env.example` నుంచి కాపీ చేసిన డిఫాల్ట్ పాస్‌వర్డ్‌లతో, మైగ్రేషన్ ఈ లోకల్ రన్‌టైమ్ కనెక్షన్‌లను సిద్ధం చేస్తుంది:

- బ్యాకెండ్: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- ప్రామాణీకరణ: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- రిపోర్టింగ్: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

మీరు `.env` లో `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` లేదా `REPORTING_DB_PASSWORD` ను మార్చితే, సంబంధిత కనెక్షన్ URL లో కూడా అదే మార్చిన పాస్‌వర్డ్‌ను వాడండి.

### వేగవంతమైన, లోకల్‌కు మాత్రమే పరిమితమైన ప్రారంభం

బ్యాకెండ్ Make టార్గెట్ రూట్ `.env` ను లోడ్ చేయదు. దానికి అవసరమైన లోకల్ సెట్టింగ్‌లను స్పష్టంగా పంపండి:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

క్లయింట్లను వేర్వేరు టెర్మినల్‌లలో నడపండి:

```bash
make web-dev
make admin-dev
```

ఈ మార్గం ఉద్దేశపూర్వకంగా `make auth-dev` ను ప్రారంభించదు. `AUTH_MODE=none` స్పష్టంగా అసురక్షితమైన, localhost కు మాత్రమే పరిమితమైన మోడ్; దాన్ని ఎప్పుడూ డిప్లాయ్ చేసిన ఎన్విరాన్‌మెంట్‌లో వాడవద్దు.
ఇది ప్రధాన బ్యాకెండ్, పబ్లిక్ Agent API డిస్కవరీ, వెబ్, అడ్మిన్ డెవలప్‌మెంట్‌ను కవర్ చేస్తుంది, కానీ Chat V2 ను అందుబాటులోకి తీసుకురాదు.

### పూర్తి లోకల్ Cognito ఫ్లో

ప్రామాణీకరణ టార్గెట్ రూట్ `.env` ను లోడ్ చేస్తుంది, బ్యాకెండ్ టార్గెట్ చేయదు. ముందుగా కాపీ చేసిన `.env` లోని పాత `DATABASE_URL` ను ప్రామాణీకరణ రోల్ URL తో భర్తీ చేసి, మీ నిజమైన Cognito విలువలను జోడించండి:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

ప్రామాణీకరణ సేవను ప్రారంభించండి:

```bash
make auth-dev
```

బ్యాకెండ్ టెర్మినల్‌లో, `.env` ను స్పష్టంగా లోడ్ చేసి, ఆ ప్రాసెస్ కోసం దానిలోని ప్రామాణీకరణ డేటాబేస్ URL ను బ్యాకెండ్ రోల్ URL తో ఓవర్‌రైడ్ చేయండి:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

`make web-dev`, `make admin-dev` ను వాటి సొంత టెర్మినల్‌లలో నడపండి. ఈ రెండు టార్గెట్‌లూ రూట్ `.env` ను లోడ్ చేస్తాయి.

సేవలు ఈ లోకల్ చిరునామాలను వాడతాయి:

| సేవ | చిరునామా |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| ప్రామాణీకరణ, కాన్ఫిగర్ చేసినప్పుడు | `http://localhost:8081` |
| బ్యాకెండ్ API | `http://localhost:8080/v1` |
| వెబ్ యాప్ | `http://localhost:3000` |
| అడ్మిన్ యాప్ | `http://localhost:3001` |

PostgreSQL ను, మైగ్రేషన్ కంటైనర్‌ను ఇలా ఆపండి:

```bash
make db-down
```

## లోకల్ కాన్ఫిగరేషన్

`.env.example` నుంచి మొదలుపెట్టండి; అందుబాటులో ఉన్న వేరియబుల్‌లను, వాటిలో ఏ విలువలు లోకల్‌కు మాత్రమే అనే దాన్ని అది వివరిస్తుంది. పైన చూపినట్లుగా, ప్రామాణీకరణ సేవను నడిపే ముందు దానిలోని పాత `DATABASE_URL` ను భర్తీ చేయండి.

ప్రధాన లోకల్ సెట్టింగ్‌లు:

- Docker లోపల స్కీమా మైగ్రేషన్‌ల కోసం `MIGRATION_DATABASE_URL`
- `make auth-dev` కోసం రూట్ `.env` లో `auth_app` రోల్‌కు సెట్ చేసిన `DATABASE_URL`
- `make backend-dev` కోసం `backend_app` రోల్‌గా పంపే `DATABASE_URL`
- బ్యాకెండ్ ప్రామాణీకరణ కోసం `AUTH_MODE`, `ALLOW_INSECURE_LOCAL_AUTH`
- లోకల్ వెబ్, అడ్మిన్ ఆరిజిన్‌ల కోసం `BACKEND_ALLOWED_ORIGINS`
- బ్రౌజర్ ప్రామాణీకరణ కోసం `ALLOWED_REDIRECT_URIS`, `COOKIE_DOMAIN`
- నిజమైన OTP ని పరీక్షించేటప్పుడు Cognito, సెషన్ ఎన్‌క్రిప్షన్ విలువలు

Agent API బ్యాకెండ్‌లో భాగం. బ్యాకెండ్ ప్రారంభమైన తర్వాత దాని పబ్లిక్ లోకల్ డిస్కవరీ డాక్యుమెంట్ `http://localhost:8080/v1/agent` వద్ద అందుబాటులో ఉంటుంది. రక్షిత Agent ఆపరేషన్‌లకు `ApiKey` ప్రామాణీకరణ అవసరం, అవి `AUTH_MODE=none` మార్గంలో అందుబాటులో ఉండవు.

### మార్గాన్ని బట్టి AI పరిధి

పైన ఉన్న లోకల్ కమాండ్‌లు అసింక్రోనస్ చాట్ వర్కర్‌ను ప్రారంభించవు. వేగవంతమైన మార్గం `AUTH_MODE=none` ను కూడా వాడుతుంది, దాన్ని Chat V2 తిరస్కరిస్తుంది; OpenAI కీని లేదా అతిథి కోటాను జోడించినా ఆ మార్గంలో AI పనిచేయదు. పూర్తి లోకల్ Cognito ఫ్లో మద్దతు ఉన్న ప్రామాణీకరణ ట్రాన్స్‌పోర్ట్‌ను అందిస్తుంది, కానీ అది కూడా వర్కర్‌ను ప్రారంభించదు.

AWS CDK డిప్లాయ్‌మెంట్ వర్కర్ Lambda ను సృష్టించి, దాన్ని పిలిచేలా బ్యాకెండ్‌ను కాన్ఫిగర్ చేస్తుంది. `OPENAI_API_KEY` వంటి ప్రొవైడర్ క్రెడెన్షియల్స్ మద్దతు ఉన్న ప్రామాణీకరించిన అభ్యర్థనలకు మోడల్ కాల్‌లను సాధ్యం చేస్తాయి. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` అతిథి AI ని విడిగా ఎనేబుల్ చేసి, పరిమితం చేస్తుంది; సైన్ ఇన్ చేసిన లేదా bearer ప్రామాణీకరణతో వచ్చే AI ని ఇది నియంత్రించదు. Langfuse సెట్టింగ్‌లు ఐచ్ఛిక ట్రేసింగ్ కాన్ఫిగరేషన్.

## నేటివ్ క్లయింట్లు

ఇదే రిపాజిటరీలో iOS, Android క్లయింట్లు ఉన్నాయి, కానీ లోకల్ వెబ్/సర్వర్ కమాండ్‌లు వాటిని బిల్డ్ చేయవు, పంపిణీ చేయవు.

iOS ప్రాజెక్ట్ లోకల్ API, ప్రామాణీకరణ హోస్ట్‌లను ఇక్కడి నుంచి చదువుతుంది:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

అవసరమైనప్పుడు ఉదాహరణ ఫైల్ నుంచి దాన్ని సృష్టించండి:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

వాటి వేర్వేరు బిల్డ్, టెస్ట్ ప్రక్రియల కోసం రిపాజిటరీలోని [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md), [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) చూడండి.

## ప్రొడక్షన్ AWS CDK ను వాడుతుంది

మద్దతు ఉన్న ప్రొడక్షన్ డిప్లాయ్‌మెంట్ అంటే రిపాజిటరీలో చేర్చిన AWS CDK స్టాక్. ఇది వెండర్-న్యూట్రల్ కాదు, AWS పైనే ఆధారపడి ఉంటుంది; ఇందులో ఇవి ఉంటాయి:

- ఒక VPC, ప్రైవేట్ సబ్‌నెట్‌లు
- Amazon RDS పై PostgreSQL 18
- Amazon Cognito పాస్‌వర్డ్ లేని ఈమెయిల్ OTP
- బ్యాకెండ్, ప్రామాణీకరణ, MCP సేవల కోసం API Gateway, Lambda
- ఒక అసింక్రోనస్ చాట్ వర్కర్ Lambda, ఒక Cognito కస్టమ్ ఈమెయిల్ సెండర్ Lambda
- వెబ్, అడ్మిన్ యాప్‌ల కోసం S3, CloudFront
- డేటాబేస్, సెషన్, ఈమెయిల్, మానిటరింగ్, ఐచ్ఛిక AI క్రెడెన్షియల్స్ కోసం Secrets Manager
- CloudWatch అలారాలు, SNS నోటిఫికేషన్‌లు, ఒక RDS బ్యాకప్ ప్లాన్
- ఒక GitHub Actions OIDC డిప్లాయ్‌మెంట్ రోల్
- పబ్లిక్ డొమైన్ల కోసం Cloudflare సెటప్ స్క్రిప్ట్‌లు

డిప్లాయ్‌మెంట్ `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>`, `mcp.<domain>` ను అందుబాటులోకి తెస్తుంది. రూట్ డొమైన్ మరెక్కడా వాడకంలో లేకపోతే, అది అపెక్స్ రీడైరెక్ట్‌ను కూడా సృష్టించగలదు.

ప్రొడక్షన్ హెల్పర్‌ను ఆపరేటర్ మెషీన్ నుంచి నడపండి, దానిలో ఇవి ఉండాలి:

- Node.js 24, npm
- Bash, GNU Make
- నడుస్తున్న Docker
- డిప్లాయ్‌మెంట్ ఖాతాకు ప్రామాణీకరించిన AWS CLI
- లక్ష్య రిపాజిటరీకి ప్రామాణీకరించిన GitHub CLI
- `curl`, `jq`, Python 3

డిప్లాయ్ చేసే ముందు, రూట్ `.env` లో ఆపరేటర్ విలువలను కాన్ఫిగర్ చేయండి. తప్పనిసరి విలువల్లో AWS ప్రాంతం, డొమైన్, అలర్ట్ ఈమెయిల్, GitHub రిపాజిటరీ, Cloudflare క్రెడెన్షియల్స్, Resend క్రెడెన్షియల్స్, బ్యాకెండ్ Sentry కాన్ఫిగరేషన్ ఉంటాయి. OpenAI, Langfuse క్రెడెన్షియల్స్ ఐచ్ఛికం.

రిపాజిటరీ రూట్ నుంచి మొదటి డిప్లాయ్‌మెంట్ కోసం సిఫార్సు చేసిన కమాండ్:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

క్లీన్ చెక్‌అవుట్ నుంచి ప్రస్తుతం ప్రామాణీకరణ ప్యాకేజీని విడిగా ఇన్‌స్టాల్ చేయడం తప్పనిసరి, ఎందుకంటే డిప్లాయ్‌మెంట్ హెల్పర్ ఆ ప్యాకేజీని బండిల్ చేస్తుంది కానీ ఇన్‌స్టాల్ చేయదు. హెల్పర్ నిజమైన AWS, Cloudflare, GitHub రిసోర్సులను సృష్టిస్తుంది లేదా మారుస్తుంది. దాన్ని నడిపే ముందు రిపాజిటరీ డిప్లాయ్‌మెంట్ డాక్యుమెంటేషన్‌ను, క్లౌడ్ ఖర్చులను పరిశీలించండి. ఇది CDK ను బూట్‌స్ట్రాప్ చేస్తుంది, మౌలిక సదుపాయాలను డిప్లాయ్ చేస్తుంది, మైగ్రేషన్‌లను నడుపుతుంది, వెబ్, అడ్మిన్ అసెట్‌లను అప్‌లోడ్ చేస్తుంది, దాటవేయమని చెప్పకపోతే పబ్లిక్ `app`, `admin`, `api`, `auth`, `mcp` DNS రికార్డులను కాన్ఫిగర్ చేస్తుంది, లేని GitHub Actions కాన్ఫిగరేషన్‌ను నింపుతుంది.

డిప్లాయ్‌మెంట్ తర్వాత:

1. `ALERT_EMAIL` ఇన్‌బాక్స్‌కు పంపిన SNS సబ్‌స్క్రిప్షన్‌ను నిర్ధారించండి.
2. వేరుగా ఉండే Resend సెండింగ్-డొమైన్ DNS రికార్డులను కాన్ఫిగర్ చేసి ధృవీకరించండి:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` డిఫాల్ట్‌గా పబ్లిక్ అప్లికేషన్ డొమైన్ల కోసం `scripts/cloudflare/setup-dns.sh` ను నడుపుతుంది. ఇది `setup-resend-domain.sh` ను నడపదు; ఆ స్క్రిప్ట్ `mail.<domain>` కోసం ఈమెయిల్ సెండర్ రికార్డులను సృష్టించి, ఆ డొమైన్‌ను Resend తో ధృవీకరిస్తుంది. మీరు `--skip-dns` తో డిప్లాయ్ చేస్తే, AWS CDK గైడ్‌లో వివరించినట్లుగా పబ్లిక్ రికార్డులను వేరుగా కాన్ఫిగర్ చేయండి.

## డేటా పోర్టబిలిటీ

వర్క్‌స్పేస్ ప్యాకేజీ ఇంపోర్ట్, ఎక్స్‌పోర్ట్ కార్డులను, వాటి ట్యాగ్‌లను, సంబంధిత మీడియాను మాత్రమే బదిలీ చేస్తుంది. ఇది పునశ్చరణ చరిత్రను, FSRS షెడ్యూలర్ స్థితిని, వర్క్‌స్పేస్ సెట్టింగ్‌లను, పూర్తి డెక్ నిర్మాణాలను లేదా ఖాతా డేటాను బదిలీ చేయదు.

ప్యాకేజీలను కంటెంట్ బదిలీగా మాత్రమే పరిగణించండి; అవి హోస్ట్ చేసిన సేవ నుంచి సొంత హోస్టింగ్‌కు పూర్తి మైగ్రేషన్ గానీ విపత్తు పునరుద్ధరణ బ్యాకప్ గానీ కాదు. డిప్లాయ్ చేసిన PostgreSQL డేటాబేస్‌ను, మీడియా స్టోరేజ్‌ను బ్యాకప్ చేయడం, పునరుద్ధరించడం ఆపరేటర్ల బాధ్యత.

## ఆపరేటర్ బాధ్యతలు

సొంత హోస్టింగ్ అంటే మీరు వీటిని సమకూర్చి నిర్వహించాలి:

- AWS మౌలిక సదుపాయాలు, వాటి ఖర్చులు
- Cloudflare DNS, డొమైన్ కాన్ఫిగరేషన్
- Resend ఈమెయిల్ డెలివరీ క్రెడెన్షియల్స్, డొమైన్ రికార్డులు
- తప్పనిసరి Sentry మానిటరింగ్ కాన్ఫిగరేషన్
- ఐచ్ఛిక AI ప్రొవైడర్, Langfuse క్రెడెన్షియల్స్
- సీక్రెట్‌లు, అప్‌గ్రేడ్‌లు, మైగ్రేషన్‌లు, అలర్ట్‌లు, బ్యాకప్‌లు, పునరుద్ధరణ పరీక్షలు
- మీ సొంత iOS లేదా Android విడుదలలు కావాలంటే నేటివ్ మొబైల్ బిల్డ్‌లు, వాటి పంపిణీ

ఈ వ్యవస్థల్లో చాలా వాటికి స్టాక్‌లో ఆటోమేషన్ ఉంది, అయినప్పటికీ దానికి ఒక ఆపరేటర్ అవసరం. Docker Compose ఈ ప్రొడక్షన్ ఆర్కిటెక్చర్‌కు ప్రత్యామ్నాయం కాదు.

## రిపాజిటరీ డిప్లాయ్‌మెంట్ డాక్యుమెంటేషన్

- [రిపాజిటరీ README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [బ్యాకెండ్, వెబ్ డిప్లాయ్‌మెంట్ గైడ్](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK డిప్లాయ్‌మెంట్ గైడ్](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK మౌలిక సదుపాయాలు](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
