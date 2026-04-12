---
title: "كيف تترك لـ Claude Code أو Codex أو OpenClaw مهمة تسجيل الدخول إلى Flashcards"
description: "يوفر Flashcards تدفق تسجيل دخول مفتوح المصدر للوكلاء يبدأ من رابط اكتشاف واحد وOTP عبر البريد ومفتاح API طويل العمر. امنح وكيلك رابطًا واحدًا فقط، ثم أرسل له رمز البريد المكوّن من 8 أرقام ليكمل إعداد الحساب ومساحة العمل."
date: "2026-03-10"
keywords:
  - "claude code login"
  - "codex login"
  - "email otp api"
  - "agent onboarding"
  - "open source flashcards app"
---

ما تزال أغلب تدفقات تسجيل الدخول تفترض أن الإنسان سيقوم بكل خطوات الإعداد يدويًا.

افتح صفحة تسجيل الدخول، وانتظر الرمز، وانسخ المفتاح، وأنشئ مفتاح API، والصقه في أداة أخرى، ثم اشرح المستندات لوكيلك، وعالج الجلسة عندما يحدث خطأ.

هذا بالضبط نوع العمل الذي يجب أن تتولاه الأداة بدلًا منك.

في [Flashcards](https://flashcards-open-source-app.com/) أصبحنا نوفر تدفق تسجيل دخول مفتوح المصدر للوكلاء يبدأ من رابط اكتشاف واحد:

`https://api.flashcards-open-source-app.com/v1/`

هذه هي نقطة الدخول الأساسية. والحمولة نفسها متاحة أيضًا عبر `https://api.flashcards-open-source-app.com/v1/agent`، لكن العقد الحالي يبدأ من `/v1/`.

أعطِ هذا الرابط إلى Claude Code أو Codex أو OpenClaw. يستطيع الوكيل فحص التدفق، وطلب رمز البريد، والتحقق منه، وتخزين مفتاح API، وتحميل الحساب، ثم متابعة إعداد مساحة العمل بنفسه.

لا يحتاج الإنسان إلا إلى أمرين:

- مشاركة عنوان البريد الإلكتروني
- إرسال أحدث رمز بريد من 8 أرقام

هذا هو المقصود كله.

## رابط واحد يكفي

تعيد نقطة الاكتشاف وصف الخدمة ونموذج المصادقة وأول إجراء وتعليمات الخطوة التالية كلها في الاستجابة نفسها.

بدلًا من كتابة نص إعداد مخصص لكل أداة، يمكنك ببساطة توجيه الوكيل إلى الرابط وتركه يتبع التعليمات المعادة.

```text
GET https://api.flashcards-open-source-app.com/v1/
```

على مستوى عالٍ، يتعلم الوكيل مباشرة أن:

- هذه هي خدمة Flashcards
- تسجيل الدخول والتسجيل يستخدمان OTP عبر البريد
- التحقق الناجح يعيد مفتاح API طويل العمر
- الخطوة التالية بعد تسجيل الدخول هي تهيئة الحساب ومساحة العمل

## كيف يبدو التدفق

التسلسل صغير عمدًا:

1. يستدعي الوكيل نقطة الاكتشاف.
2. يرسل الوكيل بريد المستخدم إلى `send-code`.
3. يرسل Flashcards الرمز المكوّن من 8 أرقام ويعيد `otpSessionToken`.
4. يطلب الوكيل من المستخدم أحدث رمز.
5. يتحقق الوكيل من الرمز ويحصل على مفتاح API طويل العمر.
6. يستدعي `/v1/agent/me` و`/v1/agent/workspaces`.
7. ينشئ مساحة العمل الصحيحة أو يختارها، ثم يتابع عبر `/v1/agent/sql`.

المهم هنا أن الوكيل لا يتوقف عند عبارة "نجح تسجيل الدخول". بل يواصل بقية الإعداد ثم يبدأ القراءة والكتابة الحقيقية.

## مثال طلب لـ Claude Code أو Codex

يكفي هذا:

```text
Use this Flashcards discovery URL:
https://api.flashcards-open-source-app.com/v1/

Log in to my Flashcards account, load account context, and select or create the correct workspace.
Ask me only for the latest 8-digit email code when the flow requires it.
```

لا تحتاج بعد ذلك إلى شرح تسلسل المصادقة يدويًا. نقطة الاكتشاف تقوم بهذا بالفعل.

## أول طلب

أول استدعاء هو:

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

ثم يبدأ الوكيل مرحلة OTP:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

بعد أن يرسل المستخدم أحدث رمز، يمكن للوكيل إنهاء التحقق:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Claude Code on MacBook"
  }'
```

الاستجابة الناجحة تعيد مفتاح API طويل العمر. احفظه خارج ذاكرة المحادثة مباشرة:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

## ما الذي يحدث بعد ذلك

بعد التحقق، يتحول الوكيل من التفكير في المصادقة إلى استخدام الحساب:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. إذا لم توجد مساحة مناسبة، `POST /v1/agent/workspaces`
4. إذا لزم الأمر، `POST /v1/agent/workspaces/{workspaceId}/select`
5. بعد ذلك، `POST /v1/agent/sql`

وبهذا لا يكون الرابط مجرد بوابة تسجيل دخول، بل بداية مسار كامل يجعل الوكيل قادرًا على العمل داخل حسابك مباشرة.
