---
title: مرجع API
description: واجهة API خارجية للوكلاء للاكتشاف وبدء OTP وإعداد مساحة العمل وسطح SQL المنشور.
---

## نظرة عامة

توثّق هذه الصفحة العقد الخارجي الحالي لوكلاء الذكاء الاصطناعي في Flashcards.

ابدأ من نقطة الاكتشاف الأساسية:

```text
GET https://api.flashcards-open-source-app.com/v1/
```

الحمولة نفسها متاحة أيضًا عبر `GET /v1/agent`، لكن `/v1/` هو نقطة الدخول العامة الأساسية.

تخبر استجابة الاكتشاف الوكيل كيف:

- يبدأ تسجيل الدخول عبر OTP بالبريد
- يستبدل OTP بمفتاح API طويل العمر
- يحمّل سياق الحساب
- ينشئ أو يختار مساحة عمل
- يتابع عبر سطح SQL المنشور

## المواصفات المنشورة

عناوين المواصفات الأساسية لسطح الوكيل الخارجي:

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`

وتوجد أيضًا أسماء بديلة من الجذر:

- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

## تهيئة المصادقة

تعمل مرحلة OTP الأولى على خدمة auth:

- `POST https://auth.flashcards-open-source-app.com/api/agent/send-code`
- `POST https://auth.flashcards-open-source-app.com/api/agent/verify-code`

التدفق هو:

1. نفّذ `GET /v1/`.
2. أرسل بريد المستخدم إلى `send-code`.
3. اقرأ `otpSessionToken` من الاستجابة.
4. اطلب من المستخدم أحدث رمز بريد مكوّن من 8 أرقام.
5. استدعِ `verify-code` مع `code` و`otpSessionToken` و`label`.
6. خزّن مفتاح API المُعاد خارج ذاكرة المحادثة.

متغير البيئة المقترح:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

تستخدم الطلبات الموثّقة:

```text
Authorization: ApiKey <key>
```

## سطح الوكيل بعد تسجيل الدخول

بعد التحقق، يصبح السطح الحالي كالآتي:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql`

التهيئة المعتادة تبدو هكذا:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. إذا لزم الأمر، `POST /v1/agent/workspaces` مع `{"name":"Personal"}`
4. إذا لزم الأمر، `POST /v1/agent/workspaces/{workspaceId}/select`
5. استخدم `POST /v1/agent/sql`

اختيار مساحة العمل صريح لكل اتصال بمفتاح API. يجب على الوكلاء اتباع نص `instructions` و`docs.openapiUrl` المُعادين بدل التخمين.

## سطح SQL

`POST /v1/agent/sql` هو سطح القراءة والكتابة المشترك للوكلاء الخارجيين.

هو محدود عمدًا وليس PostgreSQL كاملًا.

العائلات الحالية للأوامر:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

الموارد المنطقية المنشورة حاليًا تشمل:

- `workspace`
- `cards`
- `decks`
- `review_events`

ملاحظات:

- القيمة الافتراضية لـ `LIMIT` هي `100` والحد الأقصى أيضًا `100`
- استخدم `ORDER BY` عندما تحتاج إلى ترقيم صفحات ثابت
- استخدم `SHOW TABLES` أو `DESCRIBE cards` لاكتشاف المخطط
- العقد الخارجي بعد الاختيار يكون ضمن نطاق مساحة العمل

مثال طلب:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

## واجهات API البشرية والمزامنة

يتضمن Flashcards أيضًا واجهات منفصلة للعملاء البشريين ولمزامنة العمل دون اتصال أولًا، لكنها ليست العقد الرئيسي للوكلاء الخارجيين:

- تستخدم تدفقات المتصفح ملفات تعريف ارتباط مشتركة النطاق مع حماية CSRF
- يستخدم العملاء الذين يعملون دون اتصال أولًا مسارات المزامنة المنفذة تحت `/v1/workspaces/{workspaceId}/sync/push` و`/v1/workspaces/{workspaceId}/sync/pull`
- تبقى مسارات المزامنة عمدًا خارج سطح OpenAPI الخارجي للوكلاء
