---
title: راهنمای میزبانی شخصی
description: Nibomo را به‌صورت محلی با PostgreSQL، احراز هویت، بک‌اند، وب و پنل مدیریت اجرا کنید یا مجموعهٔ تولیدی مستندشدهٔ AWS CDK را مستقر کنید.
---

Nibomo از دو مسیر متمایز پشتیبانی می‌کند: یک محیط توسعهٔ محلی و یک استقرار تولیدی روی AWS. Docker Compose برای توسعهٔ محلی PostgreSQL و مهاجرت‌های پایگاه داده را اجرا می‌کند؛ روش استقرار تولیدی نیست.

## پیش‌نیازهای توسعهٔ محلی

- Git
- Bash
- GNU Make
- Docker به‌همراه Docker Compose
- Node.js 24
- npm

فایل Docker Compose ارائه‌شده در حال حاضر PostgreSQL 18.4 را اجرا می‌کند. به نصب جداگانهٔ PostgreSQL محلی نیازی ندارید.

## شروع سریع محلی

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

`make db-up` پایگاه دادهٔ PostgreSQL را راه‌اندازی می‌کند و `scripts/deploy/migrate.sh` را از طریق کانتینر مهاجرت اجرا می‌کند. با رمزهای عبور پیش‌فرضی که از `.env.example` کپی شده‌اند، مهاجرت این اتصال‌های محلی زمان اجرا را فراهم می‌کند:

- بک‌اند: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- احراز هویت: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- گزارش‌گیری: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

اگر `BACKEND_DB_PASSWORD`، `AUTH_DB_PASSWORD` یا `REPORTING_DB_PASSWORD` را در `.env` تغییر دهید، همان رمز عبور تغییریافته را در نشانی اتصال متناظر به کار ببرید.

### شروع سریع فقط محلی

هدف Make بک‌اند، فایل `.env` ریشه را بارگذاری نمی‌کند. تنظیمات محلی لازم آن را به‌صورت صریح بدهید:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

کلاینت‌ها را در ترمینال‌های جداگانه اجرا کنید:

```bash
make web-dev
make admin-dev
```

این مسیر عمداً `make auth-dev` را اجرا نمی‌کند. `AUTH_MODE=none` حالتی صراحتاً ناامن و فقط برای localhost است؛ هرگز از آن در محیط مستقرشده استفاده نکنید.
این مسیر توسعهٔ هستهٔ بک‌اند، کشف عمومی Agent API، وب و پنل مدیریت را پوشش می‌دهد، اما Chat V2 را در دسترس قرار نمی‌دهد.

### جریان کامل محلی با Cognito

هدف احراز هویت فایل `.env` ریشه را بارگذاری می‌کند، اما هدف بک‌اند نه. ابتدا `DATABASE_URL` قدیمی را در `.env` کپی‌شده با نشانی نقش احراز هویت جایگزین کنید و مقادیر واقعی Cognito خود را اضافه کنید:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

احراز هویت را اجرا کنید:

```bash
make auth-dev
```

در ترمینال بک‌اند، `.env` را به‌صورت صریح بارگذاری کنید و سپس نشانی پایگاه دادهٔ احراز هویت آن را برای همان فرایند با نشانی نقش بک‌اند جایگزین کنید:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

`make web-dev` و `make admin-dev` را هر کدام در ترمینال جداگانهٔ خودش اجرا کنید. هر دو هدف `.env` ریشه را بارگذاری می‌کنند.

سرویس‌ها از این نشانی‌های محلی استفاده می‌کنند:

| سرویس | نشانی |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| احراز هویت، در صورت پیکربندی | `http://localhost:8081` |
| API بک‌اند | `http://localhost:8080/v1` |
| برنامهٔ وب | `http://localhost:3000` |
| برنامهٔ مدیریت | `http://localhost:3001` |

PostgreSQL و کانتینر مهاجرت را با این دستور متوقف کنید:

```bash
make db-down
```

## پیکربندی محلی

از `.env.example` شروع کنید؛ این فایل متغیرهای موجود و مقادیری را که فقط محلی هستند مستند می‌کند. همان‌طور که بالاتر نشان داده شد، پیش از اجرای احراز هویت، `DATABASE_URL` قدیمی آن را جایگزین کنید.

تنظیمات اصلی محلی عبارت‌اند از:

- `MIGRATION_DATABASE_URL` برای مهاجرت‌های طرح‌واره درون Docker
- `DATABASE_URL` که در `.env` ریشه روی نقش `auth_app` برای `make auth-dev` تنظیم می‌شود
- `DATABASE_URL` که به‌عنوان نقش `backend_app` به `make backend-dev` داده می‌شود
- `AUTH_MODE` و `ALLOW_INSECURE_LOCAL_AUTH` برای احراز هویت بک‌اند
- `BACKEND_ALLOWED_ORIGINS` برای مبداهای محلی وب و پنل مدیریت
- `ALLOWED_REDIRECT_URIS` و `COOKIE_DOMAIN` برای احراز هویت در مرورگر
- مقادیر Cognito و رمزگذاری نشست، هنگام آزمایش OTP واقعی

Agent API بخشی از بک‌اند است. سند کشف عمومی محلی آن پس از اجرای بک‌اند در `http://localhost:8080/v1/agent` در دسترس است. عملیات محافظت‌شدهٔ Agent به احراز هویت `ApiKey` نیاز دارند و در مسیر `AUTH_MODE=none` در دسترس نیستند.

### پوشش هوش مصنوعی در هر مسیر

دستورهای محلی بالا پردازشگر ناهمگام چت (worker) را اجرا نمی‌کنند. مسیر سریع همچنین از `AUTH_MODE=none` استفاده می‌کند که Chat V2 آن را رد می‌کند؛ افزودن کلید OpenAI یا سهمیهٔ مهمان هم به این مسیر قابلیت هوش مصنوعی نمی‌دهد. جریان کامل محلی با Cognito یک سازوکار انتقال احراز هویت پشتیبانی‌شده فراهم می‌کند، اما همچنان پردازشگر را اجرا نمی‌کند.

استقرار AWS CDK تابع Lambda پردازشگر را می‌سازد و بک‌اند را برای فراخوانی آن پیکربندی می‌کند. اعتبارنامه‌های ارائه‌دهنده مانند `OPENAI_API_KEY` فراخوانی مدل را برای درخواست‌های احرازشدهٔ پشتیبانی‌شده فعال می‌کنند. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` به‌طور جداگانه هوش مصنوعی مهمان را فعال و محدود می‌کند؛ این متغیر هوش مصنوعی کاربرانی را که وارد حساب شده‌اند یا با توکن bearer احراز هویت شده‌اند کنترل نمی‌کند. تنظیمات Langfuse پیکربندی اختیاری ردیابی هستند.

## کلاینت‌های بومی

همین مخزن شامل کلاینت‌های iOS و Android است، اما دستورهای محلی وب و سرور آن‌ها را نمی‌سازند و توزیع نمی‌کنند.

پروژهٔ iOS میزبان‌های محلی API و احراز هویت را از این فایل می‌خواند:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

در صورت نیاز آن را از روی نمونه بسازید:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

برای روندهای جداگانهٔ ساخت و آزمایش آن‌ها، [README مربوط به iOS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) و [README مربوط به Android](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) در مخزن را ببینید.

## محیط تولید از AWS CDK استفاده می‌کند

استقرار تولیدی پشتیبانی‌شده، مجموعهٔ AWS CDK همراه مخزن است. این مجموعه به AWS وابسته است و مستقل از ارائه‌دهنده نیست و شامل این موارد است:

- یک VPC و زیرشبکه‌های خصوصی
- PostgreSQL 18 روی Amazon RDS
- کد یک‌بارمصرف ایمیلی بدون رمز عبور با Amazon Cognito
- API Gateway و Lambda برای سرویس‌های بک‌اند، احراز هویت و MCP
- یک Lambda برای پردازشگر ناهمگام چت و یک Lambda برای ارسال‌کنندهٔ ایمیل سفارشی Cognito
- S3 و CloudFront برای برنامه‌های وب و مدیریت
- Secrets Manager برای اعتبارنامه‌های پایگاه داده، نشست، ایمیل و پایش، و اعتبارنامه‌های اختیاری هوش مصنوعی
- هشدارهای CloudWatch، اعلان‌های SNS و یک برنامهٔ پشتیبان‌گیری RDS
- یک نقش استقرار OIDC برای GitHub Actions
- اسکریپت‌های راه‌اندازی Cloudflare برای دامنه‌های عمومی

این استقرار `app.<domain>`، `admin.<domain>`، `api.<domain>`، `auth.<domain>` و `mcp.<domain>` را در دسترس قرار می‌دهد. وقتی دامنهٔ ریشه کاربرد دیگری نداشته باشد، می‌تواند یک تغییر مسیر برای دامنهٔ اصلی (apex) هم بسازد.

ابزار کمکی استقرار تولیدی را از رایانهٔ اپراتوری اجرا کنید که این موارد را داشته باشد:

- Node.js 24 و npm
- Bash و GNU Make
- Docker در حال اجرا
- AWS CLI که با حساب استقرار احراز هویت شده باشد
- GitHub CLI که برای مخزن مقصد احراز هویت شده باشد
- `curl`، `jq` و Python 3

پیش از استقرار، مقادیر اپراتور را در `.env` ریشه پیکربندی کنید. مجموعهٔ الزامی شامل منطقهٔ AWS، دامنه، ایمیل هشدار، مخزن GitHub، اعتبارنامه‌های Cloudflare، اعتبارنامه‌های Resend و پیکربندی Sentry بک‌اند است. اعتبارنامه‌های OpenAI و Langfuse اختیاری‌اند.

دستور ترجیحی برای نخستین استقرار از ریشهٔ مخزن این است:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

نصب صریح بستهٔ احراز هویت در حال حاضر در یک checkout تمیز لازم است، زیرا ابزار کمکی استقرار آن بسته را باندل می‌کند اما نصبش نمی‌کند. این ابزار کمکی منابع واقعی AWS، Cloudflare و GitHub را می‌سازد یا تغییر می‌دهد. پیش از اجرای آن، مستندات استقرار مخزن و هزینه‌های ابری را بررسی کنید. این ابزار CDK را bootstrap می‌کند، زیرساخت را مستقر می‌کند، مهاجرت‌ها را اجرا می‌کند، فایل‌های برنامه‌های وب و مدیریت را بارگذاری می‌کند، رکوردهای DNS عمومی `app`، `admin`، `api`، `auth` و `mcp` را پیکربندی می‌کند (مگر اینکه این مرحله رد شود) و پیکربندی‌های ناموجود GitHub Actions را تکمیل می‌کند.

پس از استقرار:

1. اشتراک SNS را که به صندوق ورودی `ALERT_EMAIL` فرستاده شده تأیید کنید.
2. رکوردهای DNS جداگانهٔ دامنهٔ ارسال Resend را پیکربندی و تأیید کنید:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` به‌طور پیش‌فرض `scripts/cloudflare/setup-dns.sh` را برای دامنه‌های عمومی برنامه اجرا می‌کند. این اسکریپت `setup-resend-domain.sh` را اجرا نمی‌کند؛ اسکریپت دوم رکوردهای ارسال‌کنندهٔ ایمیل را برای `mail.<domain>` می‌سازد و آن دامنه را در Resend تأیید می‌کند. اگر با `--skip-dns` مستقر کنید، رکوردهای عمومی را همان‌طور که در راهنمای AWS CDK مستند شده جداگانه پیکربندی کنید.

## قابلیت انتقال داده‌ها

درون‌ریزی و برون‌ریزی بستهٔ فضای کاری فقط کارت‌ها، برچسب‌های آن‌ها و رسانه‌های مرتبط را منتقل می‌کند. تاریخچهٔ مرور، وضعیت زمان‌بند FSRS، تنظیمات فضای کاری، ساختار کامل دسته‌ها یا داده‌های حساب را منتقل نمی‌کند.

بسته‌ها را ابزاری برای انتقال محتوا بدانید، نه مهاجرت کامل از نسخهٔ میزبانی‌شده به میزبانی شخصی یا نسخهٔ پشتیبان برای بازیابی پس از حادثه. پشتیبان‌گیری و بازیابی پایگاه دادهٔ PostgreSQL مستقرشده و فضای ذخیره‌سازی رسانه بر عهدهٔ اپراتورهاست.

## مسئولیت‌های اپراتور

میزبانی شخصی یعنی این موارد را خودتان تأمین و نگهداری می‌کنید:

- زیرساخت AWS و هزینه‌های آن
- DNS در Cloudflare و پیکربندی دامنه
- اعتبارنامه‌های تحویل ایمیل Resend و رکوردهای دامنه
- پیکربندی الزامی پایش Sentry
- اعتبارنامه‌های اختیاری ارائه‌دهندهٔ هوش مصنوعی و Langfuse
- اطلاعات محرمانه (secrets)، ارتقاها، مهاجرت‌ها، هشدارها، پشتیبان‌گیری‌ها و آزمایش بازیابی
- ساخت و توزیع نسخه‌های بومی موبایل، اگر می‌خواهید نسخه‌های iOS یا Android خودتان را منتشر کنید

این مجموعه برای بسیاری از این سیستم‌ها خودکارسازی دارد، اما همچنان به یک اپراتور نیاز دارد. Docker Compose جایگزین این معماری تولیدی نیست.

## مستندات استقرار در مخزن

- [README مخزن](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [راهنمای استقرار بک‌اند و وب](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [راهنمای استقرار AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [زیرساخت AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
