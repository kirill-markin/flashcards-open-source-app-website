---
title: સેલ્ફ-હોસ્ટિંગ માર્ગદર્શિકા
description: PostgreSQL, પ્રમાણીકરણ, બૅકએન્ડ, વેબ અને ઍડમિન સાથે Nibomo લોકલ રીતે ચલાવો, અથવા દસ્તાવેજીકૃત AWS CDK પ્રોડક્શન સ્ટૅક ડિપ્લોય કરો.
---

Nibomo બે અલગ માર્ગને સપોર્ટ કરે છે: લોકલ ડેવલપમેન્ટ એન્વાયરનમેન્ટ અને AWS પર પ્રોડક્શન ડિપ્લોયમેન્ટ. Docker Compose લોકલ ડેવલપમેન્ટ માટે PostgreSQL અને માઇગ્રેશન ચલાવે છે; તે પ્રોડક્શન ડિપ્લોયમેન્ટની પદ્ધતિ નથી.

## લોકલ ડેવલપમેન્ટ માટેની જરૂરિયાતો

- Git
- Bash
- GNU Make
- Docker Compose સાથે Docker
- Node.js 24
- npm

આપેલી Docker Compose ફાઇલ હાલમાં PostgreSQL 18.4 ચલાવે છે. તમારે PostgreSQL નું અલગ લોકલ ઇન્સ્ટોલેશન કરવાની જરૂર નથી.

## લોકલ ઝડપી શરૂઆત

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

`make db-up` PostgreSQL શરૂ કરે છે અને માઇગ્રેશન કન્ટેનર દ્વારા `scripts/deploy/migrate.sh` ચલાવે છે. `.env.example` માંથી કૉપી થયેલા મૂળભૂત પાસવર્ડ સાથે, માઇગ્રેશન આ લોકલ રનટાઇમ કનેક્શન તૈયાર કરે છે:

- બૅકએન્ડ: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- પ્રમાણીકરણ: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- રિપોર્ટિંગ: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

જો તમે `.env` માં `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` કે `REPORTING_DB_PASSWORD` બદલો, તો સંબંધિત કનેક્શન URL માં પણ એ જ બદલેલો પાસવર્ડ વાપરો.

### ઝડપી, ફક્ત લોકલ શરૂઆત

બૅકએન્ડનો Make ટાર્ગેટ રૂટ `.env` લોડ કરતો નથી. તેને જરૂરી લોકલ સેટિંગ્સ સ્પષ્ટ રીતે આપો:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

ક્લાયન્ટને અલગ અલગ ટર્મિનલમાં ચલાવો:

```bash
make web-dev
make admin-dev
```

આ માર્ગ જાણીજોઈને `make auth-dev` શરૂ કરતો નથી. `AUTH_MODE=none` સ્પષ્ટ રીતે અસુરક્ષિત, ફક્ત localhost માટેનો મોડ છે; ડિપ્લોય કરેલા એન્વાયરનમેન્ટમાં તેને ક્યારેય વાપરશો નહીં.
તે મુખ્ય બૅકએન્ડ, જાહેર Agent API ડિસ્કવરી, વેબ અને ઍડમિનના ડેવલપમેન્ટ માટે પૂરતો છે, પણ તેમાં Chat V2 ઉપલબ્ધ નથી.

### સંપૂર્ણ લોકલ Cognito ફ્લો

auth ટાર્ગેટ રૂટ `.env` લોડ કરે છે, જ્યારે બૅકએન્ડ ટાર્ગેટ કરતો નથી. પહેલાં કૉપી કરેલી `.env` માંનું જૂનું `DATABASE_URL` auth રોલના URL થી બદલો અને તમારાં સાચાં Cognito મૂલ્યો ઉમેરો:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

auth શરૂ કરો:

```bash
make auth-dev
```

બૅકએન્ડ ટર્મિનલમાં `.env` સ્પષ્ટ રીતે લોડ કરો, પછી એ પ્રોસેસ માટે તેના auth ડેટાબેઝ URL ને બૅકએન્ડ રોલના URL થી ઓવરરાઇડ કરો:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

`make web-dev` અને `make admin-dev` ને તેમના પોતાના ટર્મિનલમાં ચલાવો. બંને ટાર્ગેટ રૂટ `.env` લોડ કરે છે.

સેવાઓ આ લોકલ સરનામાં વાપરે છે:

| સેવા | સરનામું |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| પ્રમાણીકરણ, ગોઠવેલું હોય ત્યારે | `http://localhost:8081` |
| બૅકએન્ડ API | `http://localhost:8080/v1` |
| વેબ ઍપ | `http://localhost:3000` |
| ઍડમિન ઍપ | `http://localhost:3001` |

PostgreSQL અને માઇગ્રેશન કન્ટેનર આ રીતે બંધ કરો:

```bash
make db-down
```

## લોકલ કન્ફિગરેશન

`.env.example` થી શરૂઆત કરો; તેમાં ઉપલબ્ધ વેરિએબલ અને કયાં મૂલ્યો ફક્ત લોકલ માટે છે તે દર્શાવેલું છે. auth ચલાવતાં પહેલાં, ઉપર બતાવ્યા પ્રમાણે, તેનું જૂનું `DATABASE_URL` બદલો.

મુખ્ય લોકલ સેટિંગ્સ આ છે:

- Docker ની અંદર સ્કીમા માઇગ્રેશન માટે `MIGRATION_DATABASE_URL`
- `make auth-dev` માટે રૂટ `.env` માં `auth_app` રોલ પર સેટ કરેલું `DATABASE_URL`
- `make backend-dev` માટે `backend_app` રોલ તરીકે આપેલું `DATABASE_URL`
- બૅકએન્ડ પ્રમાણીકરણ માટે `AUTH_MODE` અને `ALLOW_INSECURE_LOCAL_AUTH`
- લોકલ વેબ અને ઍડમિન ઑરિજિન માટે `BACKEND_ALLOWED_ORIGINS`
- બ્રાઉઝર પ્રમાણીકરણ માટે `ALLOWED_REDIRECT_URIS` અને `COOKIE_DOMAIN`
- સાચા OTP નું પરીક્ષણ કરતી વખતે Cognito અને સેશન એન્ક્રિપ્શનનાં મૂલ્યો

Agent API બૅકએન્ડનો ભાગ છે. બૅકએન્ડ શરૂ થયા પછી તેનો જાહેર લોકલ ડિસ્કવરી દસ્તાવેજ `http://localhost:8080/v1/agent` પર ઉપલબ્ધ હોય છે. સુરક્ષિત Agent કામગીરી માટે `ApiKey` પ્રમાણીકરણ જરૂરી છે, અને તે `AUTH_MODE=none` માર્ગમાં ઉપલબ્ધ નથી.

### માર્ગ પ્રમાણે AI ની ઉપલબ્ધતા

ઉપરના લોકલ કમાન્ડ અસિંક્રોનસ ચૅટ વર્કર શરૂ કરતા નથી. ઝડપી માર્ગ `AUTH_MODE=none` પણ વાપરે છે, જેને Chat V2 નકારે છે; OpenAI કી કે અતિથિ ક્વોટા ઉમેરવાથી એ માર્ગમાં AI ચાલુ થતું નથી. સંપૂર્ણ લોકલ Cognito ફ્લો સપોર્ટેડ પ્રમાણીકરણ ટ્રાન્સપોર્ટ આપે છે, છતાં તે પણ વર્કર શરૂ કરતો નથી.

AWS CDK ડિપ્લોયમેન્ટ વર્કર Lambda બનાવે છે અને તેને કૉલ કરવા માટે બૅકએન્ડ ગોઠવે છે. `OPENAI_API_KEY` જેવાં પ્રોવાઇડર ક્રેડેન્શિયલ સપોર્ટેડ પ્રમાણિત વિનંતીઓ માટે મૉડલ કૉલ ચાલુ કરે છે. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` અલગથી અતિથિ AI ચાલુ કરે છે અને તેને મર્યાદિત કરે છે; તે સાઇન ઇન કરેલા કે bearer ટોકનથી પ્રમાણિત AI ને નિયંત્રિત કરતું નથી. Langfuse સેટિંગ્સ વૈકલ્પિક ટ્રેસિંગ કન્ફિગરેશન છે.

## નેટિવ ક્લાયન્ટ

આ જ રિપોઝિટરીમાં iOS અને Android ક્લાયન્ટ છે, પણ લોકલ વેબ/સર્વર કમાન્ડ તેમને બિલ્ડ કે વિતરિત કરતા નથી.

iOS પ્રોજેક્ટ લોકલ API અને પ્રમાણીકરણ હોસ્ટ અહીંથી વાંચે છે:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

જરૂર પડે ત્યારે તેને ઉદાહરણ ફાઇલમાંથી બનાવો:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

તેમના અલગ બિલ્ડ અને ટેસ્ટ વર્કફ્લો માટે રિપોઝિટરીનાં [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) અને [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) જુઓ.

## પ્રોડક્શન AWS CDK વાપરે છે

સપોર્ટેડ પ્રોડક્શન ડિપ્લોયમેન્ટ સાથે આવેલું AWS CDK સ્ટૅક છે. તે વેન્ડર-નિરપેક્ષ નથી, પણ AWS આધારિત છે, અને તેમાં આ સામેલ છે:

- એક VPC અને પ્રાઇવેટ સબનેટ
- Amazon RDS પર PostgreSQL 18
- Amazon Cognito દ્વારા પાસવર્ડ વગરનો ઈમેલ OTP
- બૅકએન્ડ, પ્રમાણીકરણ અને MCP સેવાઓ માટે API Gateway અને Lambda
- અસિંક્રોનસ ચૅટ વર્કર Lambda અને Cognito કસ્ટમ ઈમેલ સેન્ડર Lambda
- વેબ અને ઍડમિન ઍપ માટે S3 અને CloudFront
- ડેટાબેઝ, સેશન, ઈમેલ, મોનિટરિંગ અને વૈકલ્પિક AI ક્રેડેન્શિયલ માટે Secrets Manager
- CloudWatch અલાર્મ, SNS સૂચનાઓ અને RDS બૅકઅપ પ્લાન
- GitHub Actions OIDC ડિપ્લોયમેન્ટ રોલ
- જાહેર ડોમેન માટે Cloudflare સેટઅપ સ્ક્રિપ્ટ

ડિપ્લોયમેન્ટ `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` અને `mcp.<domain>` ઉપલબ્ધ કરાવે છે. જો રૂટ ડોમેન બીજે ક્યાંય વપરાતું ન હોય, તો તે એપેક્સ રીડાયરેક્ટ પણ બનાવી શકે છે.

પ્રોડક્શન હેલ્પર એવા ઑપરેટર મશીન પરથી ચલાવો જેમાં આ હોય:

- Node.js 24 અને npm
- Bash અને GNU Make
- ચાલુ Docker
- ડિપ્લોયમેન્ટ ખાતામાં પ્રમાણિત AWS CLI
- લક્ષ્ય રિપોઝિટરીમાં પ્રમાણિત GitHub CLI
- `curl`, `jq` અને Python 3

ડિપ્લોય કરતાં પહેલાં, રૂટ `.env` માં ઑપરેટરનાં મૂલ્યો ગોઠવો. જરૂરી મૂલ્યોમાં AWS રીજન, ડોમેન, અલર્ટ ઈમેલ, GitHub રિપોઝિટરી, Cloudflare ક્રેડેન્શિયલ, Resend ક્રેડેન્શિયલ અને બૅકએન્ડ Sentry કન્ફિગરેશન સામેલ છે. OpenAI અને Langfuse ક્રેડેન્શિયલ વૈકલ્પિક છે.

રિપોઝિટરીના રૂટમાંથી પહેલા ડિપ્લોયમેન્ટ માટે ભલામણ કરેલ કમાન્ડ આ છે:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

સ્વચ્છ ચેકઆઉટમાંથી auth નું આ સ્પષ્ટ ઇન્સ્ટોલેશન હાલમાં જરૂરી છે, કારણ કે ડિપ્લોયમેન્ટ હેલ્પર એ પૅકેજને બંડલ તો કરે છે પણ ઇન્સ્ટોલ કરતો નથી. હેલ્પર સાચાં AWS, Cloudflare અને GitHub રિસોર્સ બનાવે છે કે બદલે છે. તેને ચલાવતાં પહેલાં રિપોઝિટરીનું ડિપ્લોયમેન્ટ દસ્તાવેજીકરણ અને ક્લાઉડ ખર્ચ તપાસો. તે CDK બૂટસ્ટ્રેપ કરે છે, ઇન્ફ્રાસ્ટ્રક્ચર ડિપ્લોય કરે છે, માઇગ્રેશન ચલાવે છે, વેબ અને ઍડમિન એસેટ અપલોડ કરે છે, છોડી દેવાનું કહ્યું ન હોય તો જાહેર `app`, `admin`, `api`, `auth` અને `mcp` DNS રેકોર્ડ ગોઠવે છે, અને ખૂટતું GitHub Actions કન્ફિગરેશન ભરે છે.

ડિપ્લોયમેન્ટ પછી:

1. `ALERT_EMAIL` ઇનબૉક્સમાં મોકલાયેલું SNS સબ્સ્ક્રિપ્શન કન્ફર્મ કરો.
2. Resend ના સેન્ડિંગ ડોમેન માટેના અલગ DNS રેકોર્ડ ગોઠવો અને ચકાસો:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` મૂળભૂત રીતે જાહેર ઍપ્લિકેશન ડોમેન માટે `scripts/cloudflare/setup-dns.sh` ચલાવે છે. તે `setup-resend-domain.sh` ચલાવતું નથી; એ સ્ક્રિપ્ટ `mail.<domain>` માટે ઈમેલ મોકલનારના રેકોર્ડ બનાવે છે અને Resend સાથે એ ડોમેનની ચકાસણી કરે છે. જો તમે `--skip-dns` સાથે ડિપ્લોય કરો, તો AWS CDK માર્ગદર્શિકામાં દર્શાવ્યા પ્રમાણે જાહેર રેકોર્ડ અલગથી ગોઠવો.

## ડેટાની પોર્ટેબિલિટી

કાર્યક્ષેત્રના પૅકેજનું ઇમ્પોર્ટ અને એક્સપોર્ટ ફક્ત કાર્ડ, તેમના ટૅગ અને સંબંધિત મીડિયા ટ્રાન્સફર કરે છે. તે પુનરાવર્તનનો ઇતિહાસ, FSRS શેડ્યૂલરની સ્થિતિ, કાર્યક્ષેત્રનાં સેટિંગ્સ, ડેકનું સંપૂર્ણ માળખું કે ખાતાનો ડેટા ટ્રાન્સફર કરતું નથી.

પૅકેજને સામગ્રીના ટ્રાન્સફર તરીકે જુઓ, હોસ્ટ કરેલી સેવામાંથી સેલ્ફ-હોસ્ટિંગ પર સંપૂર્ણ સ્થળાંતર કે ડિઝાસ્ટર રિકવરી બૅકઅપ તરીકે નહીં. ડિપ્લોય કરેલા PostgreSQL ડેટાબેઝ અને મીડિયા સ્ટોરેજનો બૅકઅપ લેવાની અને તેને પુનઃસ્થાપિત કરવાની જવાબદારી ઑપરેટરની છે.

## ઑપરેટરની જવાબદારીઓ

સેલ્ફ-હોસ્ટિંગનો અર્થ છે કે આ બધું તમે પૂરું પાડો અને જાળવો:

- AWS ઇન્ફ્રાસ્ટ્રક્ચર અને તેનો ખર્ચ
- Cloudflare DNS અને ડોમેન કન્ફિગરેશન
- Resend ઈમેલ ડિલિવરી ક્રેડેન્શિયલ અને ડોમેન રેકોર્ડ
- જરૂરી Sentry મોનિટરિંગ કન્ફિગરેશન
- વૈકલ્પિક AI પ્રોવાઇડર અને Langfuse ક્રેડેન્શિયલ
- સિક્રેટ, અપગ્રેડ, માઇગ્રેશન, અલર્ટ, બૅકઅપ અને રિસ્ટોરનું પરીક્ષણ
- જો તમને તમારાં પોતાનાં iOS કે Android રિલીઝ જોઈતાં હોય, તો નેટિવ મોબાઇલ બિલ્ડ અને તેનું વિતરણ

સ્ટૅકમાં આમાંની ઘણી સિસ્ટમ માટે ઑટોમેશન સામેલ છે, છતાં તેને ચલાવવા માટે ઑપરેટરની જરૂર રહે છે. Docker Compose આ પ્રોડક્શન આર્કિટેક્ચરનું સ્થાન લેતું નથી.

## રિપોઝિટરીનું ડિપ્લોયમેન્ટ દસ્તાવેજીકરણ

- [રિપોઝિટરી README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [બૅકએન્ડ અને વેબ ડિપ્લોયમેન્ટ માર્ગદર્શિકા](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK ડિપ્લોયમેન્ટ માર્ગદર્શિકા](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK ઇન્ફ્રાસ્ટ્રક્ચર](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
