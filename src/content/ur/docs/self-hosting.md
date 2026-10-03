---
title: خود میزبانی کا رہنما
description: Nibomo کو PostgreSQL، تصدیق، بیک اینڈ، ویب اور ایڈمن کے ساتھ مقامی طور پر چلائیں، یا دستاویزات میں بیان کردہ AWS CDK پروڈکشن اسٹیک تعینات کریں۔
---

Nibomo دو الگ راستوں کی سہولت دیتا ہے: مقامی ڈیولپمنٹ ماحول اور AWS پر پروڈکشن تعیناتی۔ Docker Compose مقامی ڈیولپمنٹ کے لیے PostgreSQL اور مائیگریشنز چلاتا ہے؛ یہ پروڈکشن تعیناتی کا طریقہ نہیں ہے۔

## مقامی ڈیولپمنٹ کے تقاضے

- Git
- Bash
- GNU Make
- Docker Compose سمیت Docker
- Node.js 24
- npm

فراہم کردہ Docker Compose فائل اس وقت PostgreSQL 18.4 چلاتی ہے۔ آپ کو PostgreSQL کی الگ مقامی تنصیب کی ضرورت نہیں۔

## فوری مقامی آغاز

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

`make db-up` PostgreSQL شروع کرتا ہے اور مائیگریشن کنٹینر کے ذریعے `scripts/deploy/migrate.sh` چلاتا ہے۔ `.env.example` سے نقل کیے گئے طے شدہ پاس ورڈز کے ساتھ مائیگریشن یہ مقامی رن ٹائم کنکشنز تیار کرتی ہے:

- بیک اینڈ: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- تصدیق: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- رپورٹنگ: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

اگر آپ `.env` میں `BACKEND_DB_PASSWORD`، `AUTH_DB_PASSWORD` یا `REPORTING_DB_PASSWORD` بدلیں تو متعلقہ کنکشن URL میں بھی وہی بدلا ہوا پاس ورڈ استعمال کریں۔

### صرف مقامی، تیز آغاز

بیک اینڈ کا Make ٹارگٹ روٹ `.env` لوڈ نہیں کرتا۔ اس کی ضروری مقامی ترتیبات واضح طور پر دیں:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

کلائنٹس الگ الگ ٹرمینلز میں چلائیں:

```bash
make web-dev
make admin-dev
```

یہ راستہ جان بوجھ کر `make auth-dev` شروع نہیں کرتا۔ `AUTH_MODE=none` واضح طور پر غیر محفوظ، صرف localhost کا موڈ ہے؛ اسے کسی تعینات شدہ ماحول میں کبھی استعمال نہ کریں۔
یہ بنیادی بیک اینڈ، عوامی Agent API ڈسکوری، ویب اور ایڈمن کی ڈیولپمنٹ کا احاطہ کرتا ہے، لیکن اس سے Chat V2 دستیاب نہیں ہوتا۔

### مکمل مقامی Cognito فلو

تصدیق کا ٹارگٹ روٹ `.env` لوڈ کرتا ہے، جبکہ بیک اینڈ کا ٹارگٹ نہیں کرتا۔ پہلے نقل کی گئی `.env` میں پرانے `DATABASE_URL` کو تصدیق کے رول والے URL سے بدلیں اور اپنی اصل Cognito ویلیوز شامل کریں:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

تصدیق شروع کریں:

```bash
make auth-dev
```

بیک اینڈ والے ٹرمینل میں `.env` واضح طور پر لوڈ کریں، پھر اس پراسیس کے لیے اس کے تصدیقی ڈیٹا بیس URL کو بیک اینڈ کے رول والے URL سے اوور رائیڈ کریں:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

`make web-dev` اور `make admin-dev` کو ان کے اپنے ٹرمینلز میں چلائیں۔ دونوں ٹارگٹس روٹ `.env` لوڈ کرتے ہیں۔

سروسز یہ مقامی پتے استعمال کرتی ہیں:

| سروس | پتا |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| تصدیق، جب کنفیگر ہو | `http://localhost:8081` |
| بیک اینڈ API | `http://localhost:8080/v1` |
| ویب ایپ | `http://localhost:3000` |
| ایڈمن ایپ | `http://localhost:3001` |

PostgreSQL اور مائیگریشن کنٹینر کو اس کمانڈ سے روکیں:

```bash
make db-down
```

## مقامی کنفیگریشن

`.env.example` سے شروع کریں؛ اس میں دستیاب متغیرات درج ہیں اور یہ بھی کہ کون سی ویلیوز صرف مقامی ہیں۔ تصدیق چلانے سے پہلے، جیسا کہ اوپر دکھایا گیا ہے، اس کا پرانا `DATABASE_URL` بدل دیں۔

اہم مقامی ترتیبات یہ ہیں:

- Docker کے اندر اسکیما مائیگریشنز کے لیے `MIGRATION_DATABASE_URL`
- `make auth-dev` کے لیے روٹ `.env` میں `auth_app` رول پر سیٹ کیا گیا `DATABASE_URL`
- `make backend-dev` کے لیے `backend_app` رول کے ساتھ دیا گیا `DATABASE_URL`
- بیک اینڈ کی تصدیق کے لیے `AUTH_MODE` اور `ALLOW_INSECURE_LOCAL_AUTH`
- مقامی ویب اور ایڈمن اوریجنز کے لیے `BACKEND_ALLOWED_ORIGINS`
- براؤزر کی تصدیق کے لیے `ALLOWED_REDIRECT_URIS` اور `COOKIE_DOMAIN`
- اصل OTP آزماتے وقت Cognito اور سیشن انکرپشن کی ویلیوز

Agent API بیک اینڈ کا حصہ ہے۔ بیک اینڈ شروع ہونے کے بعد اس کی عوامی مقامی ڈسکوری دستاویز `http://localhost:8080/v1/agent` پر دستیاب ہوتی ہے۔ تحفظ یافتہ Agent آپریشنز کے لیے `ApiKey` تصدیق درکار ہے اور یہ `AUTH_MODE=none` والے راستے میں دستیاب نہیں۔

### ہر راستے میں AI کا دائرہ

اوپر دی گئی مقامی کمانڈز غیر ہم وقتی چیٹ ورکر شروع نہیں کرتیں۔ تیز راستہ `AUTH_MODE=none` بھی استعمال کرتا ہے، جسے Chat V2 مسترد کر دیتا ہے؛ OpenAI کلید یا مہمان کوٹہ شامل کرنے سے بھی یہ راستہ AI کے قابل نہیں بنتا۔ مکمل مقامی Cognito فلو تصدیق کا ایک تعاون یافتہ ذریعہ فراہم کرتا ہے، لیکن یہ بھی ورکر شروع نہیں کرتا۔

AWS CDK تعیناتی ورکر Lambda بناتی ہے اور بیک اینڈ کو اسے کال کرنے کے لیے کنفیگر کرتی ہے۔ `OPENAI_API_KEY` جیسی فراہم کنندہ کی اسناد تعاون یافتہ، تصدیق شدہ درخواستوں کے لیے ماڈل کالز ممکن بناتی ہیں۔ `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` الگ سے مہمان AI کو فعال اور محدود کرتا ہے؛ یہ سائن اِن شدہ یا bearer ٹوکن سے تصدیق شدہ AI کو کنٹرول نہیں کرتا۔ Langfuse کی ترتیبات اختیاری ٹریسنگ کنفیگریشن ہیں۔

## نیٹو کلائنٹس

اسی ریپوزٹری میں iOS اور Android کلائنٹس بھی ہیں، لیکن مقامی ویب/سرور کمانڈز انہیں نہ بناتی ہیں اور نہ تقسیم کرتی ہیں۔

iOS پروجیکٹ مقامی API اور تصدیق کے ہوسٹس یہاں سے پڑھتا ہے:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

ضرورت ہو تو اسے مثال والی فائل سے بنائیں:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

ان کے الگ بلڈ اور ٹیسٹ ورک فلوز کے لیے ریپوزٹری کی [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) اور [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) دیکھیں۔

## پروڈکشن AWS CDK استعمال کرتا ہے

پروڈکشن تعیناتی کا تعاون یافتہ طریقہ ریپوزٹری میں شامل AWS CDK اسٹیک ہے۔ یہ کسی ایک فراہم کنندہ سے آزاد نہیں بلکہ AWS پر مبنی ہے، اور اس میں شامل ہیں:

- ایک VPC اور نجی سب نیٹس
- Amazon RDS پر PostgreSQL 18
- Amazon Cognito کے ذریعے پاس ورڈ کے بغیر ای میل OTP
- بیک اینڈ، تصدیق اور MCP سروسز کے لیے API Gateway اور Lambda
- ایک غیر ہم وقتی چیٹ ورکر Lambda اور ایک Cognito کسٹم ای میل سینڈر Lambda
- ویب اور ایڈمن ایپس کے لیے S3 اور CloudFront
- ڈیٹا بیس، سیشن، ای میل، نگرانی اور اختیاری AI اسناد کے لیے Secrets Manager
- CloudWatch الارمز، SNS اطلاعات اور RDS بیک اپ پلان
- GitHub Actions OIDC تعیناتی رول
- عوامی ڈومینز کے لیے Cloudflare سیٹ اپ اسکرپٹس

تعیناتی `app.<domain>`، `admin.<domain>`، `api.<domain>`، `auth.<domain>` اور `mcp.<domain>` فراہم کرتی ہے۔ اگر روٹ ڈومین کسی اور کام میں استعمال نہ ہو رہا ہو تو یہ اس کے لیے ری ڈائریکٹ بھی بنا سکتی ہے۔

پروڈکشن ہیلپر کسی آپریٹر مشین سے چلائیں جس میں یہ ہوں:

- Node.js 24 اور npm
- Bash اور GNU Make
- چلتا ہوا Docker
- تعیناتی والے اکاؤنٹ میں تصدیق شدہ AWS CLI
- ہدف ریپوزٹری میں تصدیق شدہ GitHub CLI
- `curl`، `jq` اور Python 3

تعیناتی سے پہلے روٹ `.env` میں آپریٹر کی ویلیوز کنفیگر کریں۔ لازمی ویلیوز میں AWS ریجن، ڈومین، الرٹ ای میل، GitHub ریپوزٹری، Cloudflare اسناد، Resend اسناد اور بیک اینڈ کی Sentry کنفیگریشن شامل ہیں۔ OpenAI اور Langfuse کی اسناد اختیاری ہیں۔

ریپوزٹری کے روٹ سے پہلی تعیناتی کی ترجیحی کمانڈ یہ ہے:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

ریپوزٹری کی صاف کاپی سے فی الحال تصدیق کے پیکیج کی واضح تنصیب ضروری ہے، کیونکہ تعیناتی ہیلپر اس پیکیج کو بنڈل تو کرتا ہے مگر انسٹال نہیں کرتا۔ یہ ہیلپر AWS، Cloudflare اور GitHub کے اصل وسائل بناتا یا بدلتا ہے۔ اسے چلانے سے پہلے ریپوزٹری کی تعیناتی دستاویزات اور کلاؤڈ کے اخراجات کا جائزہ لیں۔ یہ CDK کی ابتدائی تیاری کرتا ہے، انفراسٹرکچر تعینات کرتا ہے، مائیگریشنز چلاتا ہے، ویب اور ایڈمن کے اثاثے اپ لوڈ کرتا ہے، اگر چھوڑا نہ جائے تو عوامی `app`، `admin`، `api`، `auth` اور `mcp` DNS ریکارڈز کنفیگر کرتا ہے، اور GitHub Actions کی غائب کنفیگریشن بھر دیتا ہے۔

تعیناتی کے بعد:

1. `ALERT_EMAIL` ان باکس میں بھیجی گئی SNS سبسکرپشن کی تصدیق کریں۔
2. Resend کے الگ سینڈنگ ڈومین کے DNS ریکارڈز کنفیگر کریں اور ان کی تصدیق کریں:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` طے شدہ طور پر عوامی ایپلیکیشن ڈومینز کے لیے `scripts/cloudflare/setup-dns.sh` چلاتا ہے۔ یہ `setup-resend-domain.sh` نہیں چلاتا؛ یہ دوسری اسکرپٹ `mail.<domain>` کے لیے ای میل سینڈر ریکارڈز بناتی ہے اور Resend کے ساتھ اس ڈومین کی تصدیق کرتی ہے۔ اگر آپ `--skip-dns` کے ساتھ تعینات کریں تو عوامی ریکارڈز الگ سے کنفیگر کریں، جیسا کہ AWS CDK رہنما میں درج ہے۔

## ڈیٹا کی منتقلی

ورک اسپیس پیکیج کی درآمد اور برآمد صرف کارڈز، ان کے ٹیگز اور متعلقہ میڈیا منتقل کرتی ہے۔ یہ دہرائی کی تاریخ، FSRS شیڈیولر کی حالت، ورک اسپیس کی ترتیبات، ڈیکس کی مکمل ساخت یا اکاؤنٹ کا ڈیٹا منتقل نہیں کرتی۔

پیکیجز کو مواد کی منتقلی سمجھیں، میزبان سے خود میزبان کی طرف مکمل منتقلی یا آفت کی صورت میں بحالی کا بیک اپ نہیں۔ تعینات شدہ PostgreSQL ڈیٹا بیس اور میڈیا اسٹوریج کا بیک اپ لینا اور اسے بحال کرنا آپریٹرز کی ذمہ داری ہے۔

## آپریٹر کی ذمہ داریاں

خود میزبانی کا مطلب ہے کہ یہ سب آپ فراہم کرتے اور برقرار رکھتے ہیں:

- AWS انفراسٹرکچر اور اس کے اخراجات
- Cloudflare DNS اور ڈومین کنفیگریشن
- Resend ای میل ڈیلیوری کی اسناد اور ڈومین ریکارڈز
- لازمی Sentry نگرانی کی کنفیگریشن
- اختیاری AI فراہم کنندہ اور Langfuse کی اسناد
- سیکرٹس، اپ گریڈز، مائیگریشنز، الرٹس، بیک اپس اور بحالی کی جانچ
- اگر آپ اپنی iOS یا Android ریلیزز چاہتے ہیں تو نیٹو موبائل بلڈز اور ان کی تقسیم

اسٹیک میں ان میں سے کئی نظاموں کے لیے آٹومیشن شامل ہے، لیکن پھر بھی ایک آپریٹر درکار ہے۔ Docker Compose اس پروڈکشن فن تعمیر کا متبادل نہیں ہے۔

## ریپوزٹری کی تعیناتی دستاویزات

- [ریپوزٹری README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [بیک اینڈ اور ویب تعیناتی کا رہنما](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK تعیناتی کا رہنما](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK انفراسٹرکچر](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
