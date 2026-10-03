---
title: சொந்த இயக்க வழிகாட்டி
description: PostgreSQL, அங்கீகாரம், பின்தளம், வலை, நிர்வாகம் ஆகியவற்றுடன் Nibomo ஐ உள்ளூரில் இயக்குங்கள், அல்லது ஆவணப்படுத்தப்பட்ட AWS CDK உற்பத்தி அடுக்கை நிறுவுங்கள்.
---

Nibomo இரண்டு தனித்தனி வழிகளை ஆதரிக்கிறது: உள்ளூர் மேம்பாட்டுச் சூழல், AWS இல் உற்பத்திப் பயன்படுத்தல். உள்ளூர் மேம்பாட்டுக்காக Docker Compose PostgreSQL ஐயும் இடப்பெயர்வுகளையும் இயக்குகிறது; அது உற்பத்திப் பயன்படுத்தல் முறை அல்ல.

## உள்ளூர் மேம்பாட்டுக்கான தேவைகள்

- Git
- Bash
- GNU Make
- Docker Compose உடன் Docker
- Node.js 24
- npm

வழங்கப்பட்ட Docker Compose கோப்பு தற்போது PostgreSQL 18.4 ஐ இயக்குகிறது. தனியாக உள்ளூரில் PostgreSQL ஐ நிறுவத் தேவையில்லை.

## உள்ளூர் விரைவுத் தொடக்கம்

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

`make db-up` PostgreSQL ஐத் தொடங்கி, இடப்பெயர்வுக் கொள்கலன் வழியாக `scripts/deploy/migrate.sh` ஐ இயக்குகிறது. `.env.example` இலிருந்து நகலெடுக்கப்பட்ட இயல்புக் கடவுச்சொற்களுடன், இடப்பெயர்வு பின்வரும் உள்ளூர் இயக்க நேர இணைப்புகளை அமைக்கிறது:

- பின்தளம்: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- அங்கீகாரம்: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- அறிக்கையிடல்: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

`.env` இல் `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` அல்லது `REPORTING_DB_PASSWORD` ஐ மாற்றினால், பொருந்தும் இணைப்பு URL இலும் அதே மாற்றிய கடவுச்சொல்லைப் பயன்படுத்துங்கள்.

### விரைவான உள்ளூர் மட்டுமான தொடக்கம்

பின்தள Make இலக்கு மூலக் கோப்புறையின் `.env` ஐ ஏற்றுவதில்லை. அதற்குத் தேவையான உள்ளூர் அமைப்புகளை வெளிப்படையாகக் கொடுங்கள்:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

கிளையண்டுகளைத் தனித்தனி முனையங்களில் இயக்குங்கள்:

```bash
make web-dev
make admin-dev
```

இந்த வழி வேண்டுமென்றே `make auth-dev` ஐத் தொடங்குவதில்லை. `AUTH_MODE=none` என்பது வெளிப்படையாகவே பாதுகாப்பற்ற, localhost க்கு மட்டுமான முறை; நிறுவப்பட்டு இயங்கும் சூழலில் அதை ஒருபோதும் பயன்படுத்தாதீர்கள்.
இது முக்கியப் பின்தளம், பொது Agent API கண்டறிதல், வலை, நிர்வாக மேம்பாடு ஆகியவற்றை உள்ளடக்குகிறது, ஆனால் Chat V2 ஐக் கிடைக்கச் செய்வதில்லை.

### முழு உள்ளூர் Cognito ஓட்டம்

அங்கீகார இலக்கு மூலக் கோப்புறையின் `.env` ஐ ஏற்றுகிறது, பின்தள இலக்கு ஏற்றுவதில்லை. முதலில் நகலெடுத்த `.env` இல் உள்ள பழைய `DATABASE_URL` ஐ அங்கீகாரப் பங்கின் URL ஆல் மாற்றி, உங்கள் உண்மையான Cognito மதிப்புகளைச் சேருங்கள்:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

அங்கீகாரத்தைத் தொடங்குங்கள்:

```bash
make auth-dev
```

பின்தள முனையத்தில் `.env` ஐ வெளிப்படையாக ஏற்றி, பின்னர் அந்தச் செயல்முறைக்கு மட்டும் அதன் அங்கீகாரத் தரவுத்தள URL ஐப் பின்தளப் பங்கின் URL ஆல் மேலெழுதுங்கள்:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

`make web-dev`, `make admin-dev` ஆகியவற்றை அவற்றுக்கான தனி முனையங்களில் இயக்குங்கள். இரண்டு இலக்குகளும் மூலக் கோப்புறையின் `.env` ஐ ஏற்றுகின்றன.

சேவைகள் இந்த உள்ளூர் முகவரிகளைப் பயன்படுத்துகின்றன:

| சேவை | முகவரி |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| அங்கீகாரம், அமைக்கப்பட்டிருந்தால் | `http://localhost:8081` |
| பின்தள API | `http://localhost:8080/v1` |
| வலைச் செயலி | `http://localhost:3000` |
| நிர்வாகச் செயலி | `http://localhost:3001` |

PostgreSQL ஐயும் இடப்பெயர்வுக் கொள்கலனையும் இவ்வாறு நிறுத்துங்கள்:

```bash
make db-down
```

## உள்ளூர் உள்ளமைவு

`.env.example` இலிருந்து தொடங்குங்கள்; கிடைக்கும் மாறிகளையும், எந்த மதிப்புகள் உள்ளூருக்கு மட்டுமானவை என்பதையும் அது ஆவணப்படுத்துகிறது. மேலே காட்டியபடி, அங்கீகாரத்தை இயக்குவதற்கு முன் அதில் உள்ள பழைய `DATABASE_URL` ஐ மாற்றுங்கள்.

முக்கிய உள்ளூர் அமைப்புகள்:

- Docker க்குள் திட்டவரைவு இடப்பெயர்வுகளுக்கு `MIGRATION_DATABASE_URL`
- `make auth-dev` க்காக மூலக் கோப்புறையின் `.env` இல் `auth_app` பங்குக்கு அமைக்கப்பட்ட `DATABASE_URL`
- `make backend-dev` க்கு `backend_app` பங்காகக் கொடுக்கப்படும் `DATABASE_URL`
- பின்தள அங்கீகாரத்துக்கு `AUTH_MODE`, `ALLOW_INSECURE_LOCAL_AUTH`
- உள்ளூர் வலை, நிர்வாக மூலங்களுக்கு `BACKEND_ALLOWED_ORIGINS`
- உலாவி அங்கீகாரத்துக்கு `ALLOWED_REDIRECT_URIS`, `COOKIE_DOMAIN`
- உண்மையான OTP ஐச் சோதிக்கும்போது Cognito, அமர்வு மறையாக்க மதிப்புகள்

Agent API பின்தளத்தின் ஒரு பகுதி. பின்தளம் தொடங்கிய பிறகு, அதன் பொது உள்ளூர் கண்டறிதல் ஆவணம் `http://localhost:8080/v1/agent` இல் கிடைக்கும். பாதுகாக்கப்பட்ட Agent செயல்பாடுகளுக்கு `ApiKey` அங்கீகாரம் தேவை; அவை `AUTH_MODE=none` வழியில் கிடைக்காது.

### வழி வாரியாக AI வரம்பு

மேலே உள்ள உள்ளூர் கட்டளைகள் ஒத்திசைவற்ற அரட்டைப் பணியாளரைத் தொடங்குவதில்லை. விரைவு வழி `AUTH_MODE=none` ஐயும் பயன்படுத்துகிறது, அதை Chat V2 நிராகரிக்கிறது; OpenAI விசையையோ விருந்தினர் ஒதுக்கீட்டையோ சேர்ப்பதால் அந்த வழி AI திறன் பெறுவதில்லை. முழு உள்ளூர் Cognito ஓட்டம் ஆதரிக்கப்படும் அங்கீகாரப் பரிமாற்ற முறையை வழங்குகிறது, ஆனால் அதுவும் பணியாளரைத் தொடங்குவதில்லை.

AWS CDK பயன்படுத்தல் பணியாளர் Lambda வை உருவாக்கி, அதை அழைக்கும்படி பின்தளத்தை உள்ளமைக்கிறது. `OPENAI_API_KEY` போன்ற வழங்குநர் சான்றுகள் ஆதரிக்கப்படும் அங்கீகரிக்கப்பட்ட கோரிக்கைகளுக்கு மாதிரி அழைப்புகளைச் சாத்தியமாக்குகின்றன. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` தனியாக விருந்தினர் AI ஐ இயக்கி, அதற்கு வரம்பிடுகிறது; உள்நுழைந்த அல்லது bearer மூலம் அங்கீகரிக்கப்பட்ட AI ஐ அது கட்டுப்படுத்துவதில்லை. Langfuse அமைப்புகள் விருப்பத்தேர்வான தடமறிதல் உள்ளமைவு.

## நேட்டிவ் கிளையண்டுகள்

அதே களஞ்சியத்தில் iOS, Android கிளையண்டுகள் உள்ளன, ஆனால் உள்ளூர் வலை/சேவையகக் கட்டளைகள் அவற்றை உருவாக்குவதோ விநியோகிப்பதோ இல்லை.

iOS திட்டம் உள்ளூர் API, அங்கீகார ஹோஸ்ட்களை இங்கிருந்து படிக்கிறது:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

தேவைப்படும்போது எடுத்துக்காட்டிலிருந்து அதை உருவாக்குங்கள்:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

அவற்றின் தனித்தனி உருவாக்க, சோதனைப் பணிப்பாய்வுகளுக்குக் களஞ்சியத்தின் [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md), [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) ஆகியவற்றைப் பாருங்கள்.

## உற்பத்திக்கு AWS CDK

ஆதரிக்கப்படும் உற்பத்திப் பயன்படுத்தல், உடன் வரும் AWS CDK அடுக்கு. இது எந்த வழங்குநரையும் சாராதது அல்ல, AWS அடிப்படையிலானது; இதில் அடங்குபவை:

- ஒரு VPC, தனியார் துணைவலைகள்
- Amazon RDS இல் PostgreSQL 18
- Amazon Cognito கடவுச்சொல் இல்லாத மின்னஞ்சல் OTP
- பின்தளம், அங்கீகாரம், MCP சேவைகளுக்கு API Gateway, Lambda
- ஒத்திசைவற்ற அரட்டைப் பணியாளர் Lambda, Cognito தனிப்பயன் மின்னஞ்சல் அனுப்புநர் Lambda
- வலை, நிர்வாகச் செயலிகளுக்கு S3, CloudFront
- தரவுத்தளம், அமர்வு, மின்னஞ்சல், கண்காணிப்பு, விருப்பத்தேர்வான AI சான்றுகளுக்கு Secrets Manager
- CloudWatch எச்சரிக்கைகள், SNS அறிவிப்புகள், RDS காப்புப்பிரதித் திட்டம்
- GitHub Actions OIDC பயன்படுத்தல் பங்கு
- பொது டொமைன்களுக்கான Cloudflare அமைப்பு ஸ்கிரிப்டுகள்

பயன்படுத்தல் `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>`, `mcp.<domain>` ஆகியவற்றை வெளிப்படுத்துகிறது. மூல டொமைன் வேறு எதற்கும் பயன்படுத்தப்படாதபோது, அதற்கான ஒரு திருப்பிவிடலையும் (apex redirect) அது உருவாக்க முடியும்.

உற்பத்தி உதவிக் கருவியை இயக்குபவரின் கணினியிலிருந்து இயக்குங்கள்; அதில் இவை தேவை:

- Node.js 24, npm
- Bash, GNU Make
- இயங்கும் Docker
- பயன்படுத்தல் கணக்கில் அங்கீகரிக்கப்பட்ட AWS CLI
- இலக்குக் களஞ்சியத்தில் அங்கீகரிக்கப்பட்ட GitHub CLI
- `curl`, `jq`, Python 3

பயன்படுத்துவதற்கு முன், மூலக் கோப்புறையின் `.env` இல் இயக்குபவருக்கான மதிப்புகளை உள்ளமையுங்கள். தேவையான மதிப்புகளில் AWS மண்டலம், டொமைன், எச்சரிக்கை மின்னஞ்சல், GitHub களஞ்சியம், Cloudflare சான்றுகள், Resend சான்றுகள், பின்தள Sentry உள்ளமைவு ஆகியவை அடங்கும். OpenAI, Langfuse சான்றுகள் விருப்பத்தேர்வானவை.

களஞ்சியத்தின் மூலக் கோப்புறையிலிருந்து முதல் பயன்படுத்தலுக்கு விரும்பப்படும் கட்டளை:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

சுத்தமான checkout இலிருந்து தொடங்கும்போது, அங்கீகாரப் பொதியை வெளிப்படையாக நிறுவுவது தற்போது அவசியம்; ஏனெனில் பயன்படுத்தல் உதவிக் கருவி அந்தப் பொதியை உள்ளடக்குகிறது, ஆனால் நிறுவுவதில்லை. உதவிக் கருவி உண்மையான AWS, Cloudflare, GitHub வளங்களை உருவாக்குகிறது அல்லது மாற்றுகிறது. அதை இயக்குவதற்கு முன் களஞ்சியத்தின் பயன்படுத்தல் ஆவணங்களையும் கிளவுட் செலவுகளையும் சரிபாருங்கள். அது CDK ஐத் தொடக்க அமைப்பு செய்து, உள்கட்டமைப்பை நிறுவி, இடப்பெயர்வுகளை இயக்கி, வலை, நிர்வாகச் செயலிகளின் கோப்புகளைப் பதிவேற்றி, தவிர்க்கப்படாவிட்டால் பொது `app`, `admin`, `api`, `auth`, `mcp` DNS பதிவுகளை உள்ளமைத்து, விடுபட்ட GitHub Actions உள்ளமைவை நிரப்புகிறது.

பயன்படுத்தலுக்குப் பிறகு:

1. `ALERT_EMAIL` அஞ்சல்பெட்டிக்கு அனுப்பப்பட்ட SNS சந்தாவை உறுதிப்படுத்துங்கள்.
2. தனியான Resend அனுப்பும் டொமைன் DNS பதிவுகளை உள்ளமைத்துச் சரிபாருங்கள்:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` இயல்பாகப் பொதுச் செயலி டொமைன்களுக்கு `scripts/cloudflare/setup-dns.sh` ஐ இயக்குகிறது. அது `setup-resend-domain.sh` ஐ இயக்குவதில்லை; பின்னது `mail.<domain>` க்கான மின்னஞ்சல் அனுப்புநர் பதிவுகளை உருவாக்கி, அந்த டொமைனை Resend உடன் சரிபார்க்கிறது. `--skip-dns` உடன் பயன்படுத்தலை இயக்கினால், AWS CDK வழிகாட்டியில் ஆவணப்படுத்தியபடி பொதுப் பதிவுகளைத் தனியாக உள்ளமையுங்கள்.

## தரவுப் பெயர்வுத்திறன்

பணியிடப் பொதி இறக்குமதியும் ஏற்றுமதியும் அட்டைகள், அவற்றின் குறிச்சொற்கள், தொடர்புடைய ஊடகங்கள் ஆகியவற்றை மட்டுமே கொண்டு செல்கின்றன. மீள்பயிற்சி வரலாறு, FSRS திட்டமிடுபொறி நிலை, பணியிட அமைப்புகள், முழு அட்டைத் தொகுப்புக் கட்டமைப்புகள், கணக்குத் தரவு ஆகியவற்றை அவை கொண்டு செல்வதில்லை.

பொதிகளை உள்ளடக்கப் பரிமாற்றமாகக் கருதுங்கள்; தளத்தில் இயங்குவதிலிருந்து சொந்தமாக இயக்குவதற்கான முழுமையான இடப்பெயர்வாகவோ, பேரிடர் மீட்புக் காப்புப்பிரதியாகவோ அல்ல. பயன்படுத்தப்பட்ட PostgreSQL தரவுத்தளத்தையும் ஊடகச் சேமிப்பகத்தையும் காப்புப்பிரதி எடுப்பதும் மீட்டெடுப்பதும் இயக்குபவர்களின் பொறுப்பு.

## இயக்குபவரின் பொறுப்புகள்

சொந்தமாக இயக்குவது என்றால் நீங்கள் இவற்றை வழங்கிப் பராமரிக்கிறீர்கள்:

- AWS உள்கட்டமைப்பும் அதன் செலவுகளும்
- Cloudflare DNS, டொமைன் உள்ளமைவு
- Resend மின்னஞ்சல் விநியோகச் சான்றுகள், டொமைன் பதிவுகள்
- தேவையான Sentry கண்காணிப்பு உள்ளமைவு
- விருப்பத்தேர்வான AI வழங்குநர், Langfuse சான்றுகள்
- ரகசியங்கள், மேம்படுத்தல்கள், இடப்பெயர்வுகள், எச்சரிக்கைகள், காப்புப்பிரதிகள், மீட்டெடுப்புச் சோதனை
- உங்கள் சொந்த iOS அல்லது Android வெளியீடுகள் வேண்டுமென்றால், நேட்டிவ் மொபைல் உருவாக்கங்களும் விநியோகமும்

இந்த அமைப்புகளில் பலவற்றுக்கான தானியக்கம் அடுக்கில் உள்ளது, ஆனால் அதை இயக்க இன்னும் ஒருவர் தேவை. Docker Compose இந்த உற்பத்திக் கட்டமைப்புக்கு மாற்றாகாது.

## களஞ்சியப் பயன்படுத்தல் ஆவணங்கள்

- [களஞ்சிய README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [பின்தள, வலைப் பயன்படுத்தல் வழிகாட்டி](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK பயன்படுத்தல் வழிகாட்டி](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK உள்கட்டமைப்பு](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
