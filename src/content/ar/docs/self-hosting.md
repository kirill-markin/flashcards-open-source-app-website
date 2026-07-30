---
title: دليل الاستضافة الذاتية
description: شغّل Flashcards محليًا باستخدام PostgreSQL والمصادقة والخلفية والويب والإدارة، أو انشر مكدس AWS CDK الإنتاجي الموثق.
---

يدعم Flashcards مسارين مختلفين: بيئة تطوير محلية ونشرًا إنتاجيًا على AWS. يشغّل Docker Compose قاعدة PostgreSQL وعمليات الترحيل للتطوير المحلي؛ وهو ليس طريقة النشر في بيئة الإنتاج.

## متطلبات التطوير المحلي

- Git
- Bash
- GNU Make
- Docker مع Docker Compose
- Node.js 24
- npm

يشغّل ملف Docker Compose المرفق حاليًا PostgreSQL 18.4. ولا تحتاج إلى تثبيت PostgreSQL محليًا بشكل منفصل.

## البدء المحلي السريع

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

يشغّل `make db-up` قاعدة PostgreSQL وينفذ `scripts/deploy/migrate.sh` من خلال حاوية الترحيل. وباستخدام كلمات المرور الافتراضية المنسوخة من `.env.example`، تنشئ عملية الترحيل اتصالات التشغيل المحلية التالية:

- الخلفية: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- المصادقة: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- التقارير: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

إذا غيّرت `BACKEND_DB_PASSWORD` أو `AUTH_DB_PASSWORD` أو `REPORTING_DB_PASSWORD` في `.env`، فاستخدم كلمة المرور المعدّلة نفسها في عنوان URL للاتصال المطابق.

### تشغيل محلي فقط وسريع

لا يحمّل هدف Make الخاص بالخلفية ملف `.env` من الجذر. مرّر إعداداته المحلية المطلوبة صراحةً:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

شغّل العميلين في نافذتين منفصلتين للطرفية:

```bash
make web-dev
make admin-dev
```

لا يشغّل هذا المسار `make auth-dev` عمدًا. إن `AUTH_MODE=none` وضع غير آمن صراحةً ومخصص للجهاز المحلي فقط؛ فلا تستخدمه مطلقًا في بيئة منشورة.
ويغطي تطوير الخلفية الأساسية واكتشاف Agent API العام والويب والإدارة، لكنه لا يجعل Chat V2 متاحًا.

### مسار Cognito المحلي الكامل

يحمّل هدف المصادقة ملف `.env` من الجذر، بينما لا يحمّله هدف الخلفية. استبدل أولًا قيمة `DATABASE_URL` القديمة في ملف `.env` المنسوخ بعنوان URL لدور المصادقة، وأضف قيم Cognito الحقيقية الخاصة بك:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

شغّل المصادقة:

```bash
make auth-dev
```

في نافذة طرفية الخلفية، حمّل `.env` صراحةً، ثم تجاوز عنوان URL لقاعدة بيانات المصادقة بعنوان URL لدور الخلفية لهذه العملية:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

شغّل `make web-dev` و`make admin-dev` في نافذتين منفصلتين للطرفية. يحمّل كلا الهدفين ملف `.env` من الجذر.

تستخدم الخدمات العناوين المحلية التالية:

| الخدمة | العنوان |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| المصادقة، عند إعدادها | `http://localhost:8081` |
| Backend API | `http://localhost:8080/v1` |
| تطبيق الويب | `http://localhost:3000` |
| تطبيق الإدارة | `http://localhost:3001` |

أوقف PostgreSQL وحاوية الترحيل باستخدام:

```bash
make db-down
```

## الإعداد المحلي

ابدأ من `.env.example`؛ فهو يوثّق المتغيرات المتاحة والقيم المخصصة للاستخدام المحلي فقط. استبدل قيمة `DATABASE_URL` القديمة قبل تشغيل المصادقة، كما هو موضح أعلاه.

الإعدادات المحلية الرئيسية هي:

- `MIGRATION_DATABASE_URL` لعمليات ترحيل المخطط داخل Docker
- ضبط `DATABASE_URL` على دور `auth_app` في ملف `.env` من الجذر لاستخدام `make auth-dev`
- تمرير `DATABASE_URL` بدور `backend_app` إلى `make backend-dev`
- `AUTH_MODE` و`ALLOW_INSECURE_LOCAL_AUTH` لمصادقة الخلفية
- `BACKEND_ALLOWED_ORIGINS` لمصادر الويب والإدارة المحلية
- `ALLOWED_REDIRECT_URIS` و`COOKIE_DOMAIN` لمصادقة المتصفح
- قيم Cognito وتشفير الجلسة عند اختبار OTP حقيقي

تُعد Agent API جزءًا من الخلفية. وتتوفر وثيقة الاكتشاف المحلية العامة على `http://localhost:8080/v1/agent` بعد بدء الخلفية. تتطلب عمليات Agent المحمية مصادقة `ApiKey`، ولا تتوفر في مسار `AUTH_MODE=none`.

### نطاق الذكاء الاصطناعي حسب المسار

لا تشغّل الأوامر المحلية أعلاه عامل الدردشة غير المتزامن. كما يستخدم المسار السريع `AUTH_MODE=none`، وهو ما يرفضه Chat V2؛ ولا تؤدي إضافة مفتاح OpenAI أو حصة للضيوف إلى جعل هذا المسار قادرًا على استخدام الذكاء الاصطناعي. يوفر مسار Cognito المحلي الكامل وسيلة مصادقة مدعومة، لكنه لا يشغّل العامل أيضًا.

ينشئ نشر AWS CDK دالة Lambda للعامل ويضبط الخلفية لاستدعائها. تتيح بيانات اعتماد المزود، مثل `OPENAI_API_KEY`، استدعاءات النماذج للطلبات الموثقة والمدعومة. يفعّل `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` الذكاء الاصطناعي للضيوف ويحدّه بشكل منفصل؛ ولا يتحكم في الذكاء الاصطناعي للمستخدمين المسجّلين أو الموثقين برمز الحامل. إعدادات Langfuse اختيارية للتتبع.

## العملاء الأصليون

يحتوي المستودع نفسه على عميلَي iOS وAndroid، لكن أوامر الويب والخادم المحلية لا تبنيهما ولا توزعهما.

يقرأ مشروع iOS مضيفَي API والمصادقة المحليين من:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

أنشئه من المثال عند الحاجة:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

راجع [README الخاص بـ iOS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) و[README الخاص بـ Android](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) في المستودع لمسارات البناء والاختبار المنفصلة.

## يستخدم الإنتاج AWS CDK

النشر الإنتاجي المدعوم هو مكدس AWS CDK المرفق. وهو مبني على AWS وليس محايدًا تجاه مزودي الخدمات، ويتضمن:

- شبكة VPC وشبكات فرعية خاصة
- PostgreSQL 18 على Amazon RDS
- رمز OTP عبر البريد الإلكتروني بلا كلمة مرور باستخدام Amazon Cognito
- API Gateway وLambda لخدمات الخلفية والمصادقة وMCP
- دالة Lambda لعامل الدردشة غير المتزامن ودالة Lambda مخصصة لإرسال بريد Cognito
- S3 وCloudFront لتطبيقَي الويب والإدارة
- Secrets Manager لبيانات اعتماد قاعدة البيانات والجلسات والبريد والمراقبة والذكاء الاصطناعي الاختياري
- تنبيهات CloudWatch وإشعارات SNS وخطة نسخ احتياطي لـ RDS
- دور نشر GitHub Actions باستخدام OIDC
- نصوص إعداد Cloudflare للنطاقات العامة

يكشف النشر `app.<domain>` و`admin.<domain>` و`api.<domain>` و`auth.<domain>` و`mcp.<domain>`. ويمكنه أيضًا إنشاء إعادة توجيه لنطاق القمة عندما لا يكون النطاق الجذر مستخدمًا لشيء آخر.

شغّل مساعد الإنتاج من جهاز المشغّل مع:

- Node.js 24 وnpm
- Bash وGNU Make
- Docker قيد التشغيل
- AWS CLI موثّقًا في حساب النشر
- GitHub CLI موثّقًا في المستودع المستهدف
- `curl` و`jq` وPython 3

قبل النشر، اضبط قيم المشغّل في ملف `.env` من الجذر. تشمل المجموعة المطلوبة منطقة AWS والنطاق وبريد التنبيهات ومستودع GitHub وبيانات اعتماد Cloudflare وبيانات اعتماد Resend وإعداد Sentry للخلفية. بيانات اعتماد OpenAI وLangfuse اختيارية.

أمر النشر الأول المفضّل من جذر المستودع هو:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

يُطلب تثبيت حزمة المصادقة صراحةً حاليًا عند البدء من نسخة مستنسخة نظيفة، لأن مساعد النشر يحزم تلك الحزمة لكنه لا يثبتها. ينشئ المساعد موارد حقيقية في AWS وCloudflare وGitHub أو يغيّرها. راجع وثائق النشر في المستودع وتكاليف السحابة قبل تشغيله. فهو يمهّد CDK وينشر البنية التحتية وينفذ عمليات الترحيل ويرفع أصول الويب والإدارة ويضبط سجلات DNS العامة لـ `app` و`admin` و`api` و`auth` و`mcp` ما لم تتخطَّها، ويملأ إعدادات GitHub Actions الناقصة.

بعد النشر:

1. أكّد اشتراك SNS المرسل إلى صندوق بريد `ALERT_EMAIL`.
2. اضبط سجلات DNS المنفصلة لنطاق الإرسال في Resend وتحقق منها:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

يشغّل `first-deploy.sh` النص `scripts/cloudflare/setup-dns.sh` للنطاقات العامة للتطبيق افتراضيًا، لكنه لا يشغّل `setup-resend-domain.sh`؛ إذ ينشئ النص الأخير سجلات مرسل البريد لـ `mail.<domain>` ويتحقق من ذلك النطاق باستخدام Resend. وإذا نشرت باستخدام `--skip-dns`، فاضبط السجلات العامة بشكل منفصل كما هو موضح في دليل AWS CDK.

## قابلية نقل البيانات

ينقل استيراد حزم مساحة العمل وتصديرها البطاقات ووسومها والوسائط المرتبطة بها فقط. ولا ينقل سجل المراجعة أو حالة مجدول FSRS أو إعدادات مساحة العمل أو هياكل مجموعات البطاقات الكاملة أو بيانات الحساب.

تعامل مع الحزم بوصفها وسيلة لنقل المحتوى، لا ترحيلًا كاملًا من الاستضافة إلى الاستضافة الذاتية ولا نسخة احتياطية للتعافي من الكوارث. ويتحمل المشغّلون مسؤولية نسخ قاعدة بيانات PostgreSQL وتخزين الوسائط المنشورين احتياطيًا واستعادتهما.

## مسؤوليات المشغّل

تعني الاستضافة الذاتية أنك توفر وتصون:

- بنية AWS وتكاليفها
- إعداد DNS والنطاق في Cloudflare
- بيانات اعتماد تسليم البريد في Resend وسجلات النطاق
- إعداد المراقبة المطلوب في Sentry
- بيانات اعتماد مزود الذكاء الاصطناعي وLangfuse الاختيارية
- الأسرار والترقيات وعمليات الترحيل والتنبيهات والنسخ الاحتياطية واختبار الاستعادة
- بناء تطبيقات الهاتف الأصلية وتوزيعها إذا أردت إصداراتك الخاصة لنظامي iOS أو Android

يتضمن المكدس أتمتةً للعديد من هذه الأنظمة، لكنه لا يزال يتطلب مشغّلًا. ولا يحل Docker Compose محل هذه البنية الإنتاجية.

## وثائق النشر في المستودع

- [README الخاص بالمستودع](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [دليل نشر الخلفية والويب](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [دليل نشر AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [البنية التحتية لـ AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
