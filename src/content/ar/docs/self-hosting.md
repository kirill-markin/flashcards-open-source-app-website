---
title: دليل الاستضافة الذاتية
description: شغّل Flashcards محليًا مع Postgres وauth والخلفية والويب، أو انشر حزمة AWS الموثقة بنفسك.
---

## المتطلبات

- Docker
- Node.js 20+
- npm
- PostgreSQL 16+ عبر إعداد Docker المرفق

## البدء السريع

```bash
git clone https://github.com/kirill-markin/flashcards-open-source-app.git
cd flashcards-open-source-app
cp .env.example .env
make db-up
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

ثم شغّل الخدمات في نوافذ طرفية منفصلة:

```bash
make auth-dev
make backend-dev
make web-dev
```

سيؤدي ذلك إلى تشغيل:

1. `postgres` على المنفذ `5432`
2. `auth` على المنفذ `8081`
3. `backend` على المنفذ `8080`
4. `web` على المنفذ `3000`

العناوين المحلية:

- `http://localhost:3000` لتطبيق الويب
- `http://localhost:8080/v1` لواجهة backend API
- `http://localhost:8081` لخدمة المصادقة

## الإعداد

انسخ `.env.example` إلى `.env` ثم اضبط القيم التالية:

- `DATABASE_URL` — سلسلة اتصال Postgres
- `AUTH_MODE` — استخدم `none` محليًا و`cognito` لمصادقة OTP عبر البريد
- `BACKEND_ALLOWED_ORIGINS` — الأصول المسموح بها لطلبات API الخاصة بالجلسات
- `PUBLIC_API_BASE_URL` و`PUBLIC_AUTH_BASE_URL` — بدائل اختيارية عندما تريد أن تعرض استجابات الاكتشاف مضيفين عامين مخصصين

## إعداد iOS المحلي

يقرأ تطبيق iOS في المستودع الرئيسي مضيفي API وauth المحليين من:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

انسخ ملف المثال إذا لزم الأمر:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

بعد ذلك وجّهه إلى نطاقي `api` و`auth` المحليين أو المستضافين ذاتيًا.

## التحديث

```bash
git pull
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

أعد تشغيل الخدمات المحلية بعد تغيير الاعتمادات.

## نشر AWS

شكل الإنتاج الموثق هو:

- CloudFront + S3 لـ `app.<domain>`
- API Gateway + Lambda لـ `api.<domain>`
- API Gateway + Lambda لـ `auth.<domain>`
- Postgres في AWS RDS
- Cognito لمصادقة البريد بلا كلمة مرور
- إعادة توجيه اختيارية للنطاق الجذر عند عدم استخدامه

للتفاصيل راجع:

- [README الخاص بالمستودع](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [دليل النشر](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/deployment.md)
- [بنية AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
