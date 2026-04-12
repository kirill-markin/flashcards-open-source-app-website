---
title: "كيف تترك لـ Claude Code أو Codex أو OpenClaw مهمة تسجيل الدخول إلى Flashcards"
description: "يوفر Flashcards تدفق تسجيل دخول مفتوح المصدر للوكلاء يبدأ من رابط اكتشاف واحد وOTP عبر البريد ومفتاح API طويل العمر. امنح وكيلك رابطًا واحدًا، ثم أرسل له أحدث رمز بريد مكوّن من 8 أرقام ودعه يكمل إعداد الحساب ومساحة العمل بنفسه."
date: "2026-03-10"
keywords:
  - "claude code login"
  - "codex login"
  - "email otp api"
  - "agent onboarding"
  - "open source flashcards app"
  - "open source api authentication"
---

ما تزال معظم تدفقات تسجيل الدخول تفترض أن الإنسان هو من سيتولى كل أعمال الإعداد يدويًا.

تفتح صفحة تسجيل الدخول، وتنتظر الرمز، وتنسخ المفتاح، وتنشئ مفتاح API، ثم تلصقه في أداة أخرى، وتشرح لوكيلك ما الذي تقوله المستندات، وتعود لإصلاح الجلسة عندما يحدث أي خلل.

وهذا بالضبط النوع من العمل الذي يفترض أن تتكفل به الأداة بدلًا منك.

في [Flashcards](https://flashcards-open-source-app.com/) نوفر الآن تدفق تسجيل دخول مفتوح المصدر للوكلاء يبدأ من رابط اكتشاف واحد:

`https://api.flashcards-open-source-app.com/v1/`

هذه هي نقطة الدخول الرسمية. والحمولة نفسها متاحة أيضًا على `https://api.flashcards-open-source-app.com/v1/agent`، لكن العقد الحالي يبدأ من `/v1/`.

أعطِ هذا الرابط إلى Claude Code أو Codex أو OpenClaw. يستطيع الوكيل فحص التدفق، وطلب رمز البريد، والتحقق منه، وتخزين مفتاح API، وتحميل الحساب، ثم متابعة تهيئة مساحة العمل بنفسه.

ولا يحتاج الإنسان إلا إلى أمرين فقط:

- مشاركة عنوان البريد الإلكتروني
- إرسال أحدث رمز مكوّن من 8 أرقام من الرسالة البريدية

وهذه هي الفكرة كلها.

## رابط واحد يكفي

تعيد نقطة الاكتشاف وصف الخدمة، ونموذج المصادقة، وأول خطوة مطلوبة، وتعليمات الخطوة التالية كلها في الاستجابة نفسها.

لذلك، بدلًا من كتابة تعليمات إعداد مخصصة لكل أداة، يمكنك ببساطة توجيه الوكيل إلى هذا الرابط وتركه يتبع التعليمات التي تعود من الخدمة.

```text
GET https://api.flashcards-open-source-app.com/v1/
```

وعلى مستوى عالٍ، يتعلم الوكيل فورًا أربع نقاط:

- هذه هي خدمة Flashcards
- تسجيل الدخول والتسجيل كلاهما يعتمدان على OTP عبر البريد الإلكتروني
- التحقق الناجح يعيد مفتاح API طويل العمر
- بعد تسجيل الدخول تأتي مرحلة تهيئة الحساب ومساحة العمل

## كيف يبدو التدفق

التسلسل مقصود أن يكون صغيرًا ومباشرًا.

1. يستدعي الوكيل نقطة الاكتشاف.
2. يرسل الوكيل بريد المستخدم إلى `send-code`.
3. يرسل Flashcards الرمز المكوّن من 8 أرقام عبر البريد ويعيد `otpSessionToken`.
4. يطلب الوكيل من المستخدم أحدث رمز وصله في البريد.
5. يتحقق الوكيل من الرمز ويحصل على مفتاح API طويل العمر.
6. يستدعي `/v1/agent/me` و`/v1/agent/workspaces`.
7. ينشئ مساحة العمل الصحيحة أو يختارها، ثم يواصل عبر `/v1/agent/sql`.

وهذه نقطة مهمة، لأن الوكيل لا يتوقف عند عبارة "نجح تسجيل الدخول". بل يواصل ما تبقى من الإعداد ويدخل بعدها مباشرة في عمليات القراءة والكتابة الفعلية.

## مثال prompt لـ Claude Code أو Codex

يمكنك نسخ هذا النص كما هو:

```text
Use this Flashcards discovery URL:
https://api.flashcards-open-source-app.com/v1/

Log in to my Flashcards account, load account context, and select or create the correct workspace.
Ask me only for the latest 8-digit email code when the flow requires it.
```

بعد ذلك، لا تحتاج إلى شرح تسلسل المصادقة يدويًا. نقطة الاكتشاف تقوم بهذا أصلًا.

## مثال prompt لـ OpenClaw

الفكرة نفسها، لكن بصياغة أكثر مباشرة قليلًا. ويمكنك أيضًا نسخ النص التالي كما هو:

```text
Connect my Flashcards account using this URL:
https://api.flashcards-open-source-app.com/v1/

Follow the returned instructions, keep the API key secure, load my account, then continue to workspace setup.
If verification is needed, ask me for the latest 8-digit code from the email.
```

## مثال: استجابة الاكتشاف

هذا هو أول طلب:

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

وصُممت الاستجابة بحيث تتمكن الوكلاء العاملة من الطرفية من اتباعها من دون تخمين:

```json
{
  "ok": true,
  "data": {
    "service": {
      "name": "flashcards-open-source-app",
      "version": "v1",
      "description": "Offline-first flashcards service with user-owned workspaces and a compact SQL agent surface."
    },
    "authentication": {
      "type": "email_otp_then_api_key",
      "sendCodeUrl": "https://auth.flashcards-open-source-app.com/api/agent/send-code",
      "verifyCodeUrl": "https://auth.flashcards-open-source-app.com/api/agent/verify-code"
    },
    "capabilitiesAfterLogin": [
      "Load account context",
      "Select a workspace",
      "Inspect the published SQL surface through OpenAPI and SQL introspection",
      "Read and write cards and decks through /agent/sql"
    ],
    "authBaseUrl": "https://auth.flashcards-open-source-app.com",
    "apiBaseUrl": "https://api.flashcards-open-source-app.com/v1",
    "surface": {
      "accountUrl": "https://api.flashcards-open-source-app.com/v1/agent/me",
      "workspacesUrl": "https://api.flashcards-open-source-app.com/v1/agent/workspaces",
      "sqlUrl": "https://api.flashcards-open-source-app.com/v1/agent/sql"
    }
  },
  "instructions": "Start with POST https://auth.flashcards-open-source-app.com/api/agent/send-code using the user's email, then POST https://auth.flashcards-open-source-app.com/api/agent/verify-code to obtain an API key. After login, call GET https://api.flashcards-open-source-app.com/v1/agent/me, then GET https://api.flashcards-open-source-app.com/v1/agent/workspaces?limit=100. If no workspace is selected for this API key, call POST https://api.flashcards-open-source-app.com/v1/agent/workspaces/{workspaceId}/select or create one with POST https://api.flashcards-open-source-app.com/v1/agent/workspaces using {\"name\":\"Personal\"}. After workspace bootstrap, use POST https://api.flashcards-open-source-app.com/v1/agent/sql for all shared card and deck reads and writes. Use https://api.flashcards-open-source-app.com/v1/agent/openapi.json for the full contract. The SQL surface is intentionally limited and is not full PostgreSQL.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

## مثال: إرسال رمز البريد

بمجرد أن يعرف الوكيل بريد المستخدم، يبدأ خطوة OTP:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{
    "email": "you@example.com"
  }'
```

يرسل الخادم الرسالة البريدية ويعيد جلسة تحقق قصيرة العمر:

```json
{
  "ok": true,
  "data": {
    "email": "you@example.com",
    "otpSessionToken": "...",
    "expiresInSeconds": 180,
    "authBaseUrl": "https://auth.flashcards-open-source-app.com",
    "apiBaseUrl": "https://api.flashcards-open-source-app.com/v1"
  },
  "instructions": "A verification code has been sent to the user's email. Ask for the 8-digit code from the email, then call verify_code with code, otpSessionToken, and a label for this agent connection. Read payload from data.* and do not expect resource fields at the top level. Select the next endpoint from instructions and confirm it with actions.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

وعند هذه النقطة يتوقف الوكيل فقط بالقدر اللازم ليسأل المستخدم عن أحدث رمز وصل إلى بريده.

## مثال: التحقق من الرمز والحصول على مفتاح API

بعد أن يرسل المستخدم رمز البريد، يستطيع الوكيل إنهاء تسجيل الدخول:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code": "12345678",
    "otpSessionToken": "...",
    "label": "Claude Code on MacBook"
  }'
```

يعيد التحقق الناجح مفتاح API طويل العمر مع تعليمات الخطوة التالية:

```json
{
  "ok": true,
  "data": {
    "apiKey": "fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS",
    "authorizationScheme": "ApiKey",
    "apiBaseUrl": "https://api.flashcards-open-source-app.com/v1",
    "connection": {
      "connectionId": "connection-1",
      "label": "codex-import-bot",
      "createdAt": "2026-03-11T08:55:00.000Z",
      "lastUsedAt": null,
      "revokedAt": null
    }
  },
  "instructions": "Store this API key outside chat memory now. Use it in the Authorization header as 'ApiKey <key>'. Next call GET /v1/agent/me to load account context. Then call GET /v1/agent/workspaces?limit=100. If exactly one workspace exists, select it if needed. If no workspace exists, create one with POST /v1/agent/workspaces using {\"name\":\"Personal\"}. After a workspace is selected, use POST /v1/agent/sql for all data access. Use docs.openapiUrl for the full contract.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

هذه هي لحظة التسليم التي يتوقف عندها الوكيل عن التفكير في المصادقة ويبدأ استخدام الحساب فعليًا.

احفظ هذا المفتاح خارج ذاكرة المحادثة فورًا. وأبسط نمط عملي هنا هو تصديره مرة واحدة ثم ترك وكيلك يعيد استخدامه:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

## مثال: تحميل الحساب ومتابعة العمل على مساحات العمل

الطلب التالي هو استدعاء API موثّق عادي:

```bash
curl https://api.flashcards-open-source-app.com/v1/agent/me \
  -H "Authorization: ApiKey YOUR_API_KEY"
```

وتوضح الاستجابة للوكيل أنه يجب أن يواصل نحو تهيئة مساحة العمل:

```json
{
  "ok": true,
  "data": {
    "userId": "user-123",
    "selectedWorkspaceId": null,
    "authTransport": "api_key",
    "profile": {
      "email": "you@example.com",
      "locale": "en",
      "createdAt": "2026-03-10T12:00:00.000Z"
    }
  },
  "instructions": "Next call GET https://api.flashcards-open-source-app.com/v1/agent/workspaces?limit=100 to inspect available workspaces for this API key. If data.nextCursor is not null, continue with the same endpoint and cursor=data.nextCursor until it becomes null. If no workspace is selected, call POST https://api.flashcards-open-source-app.com/v1/agent/workspaces/{workspaceId}/select. If no workspace exists, create one with POST https://api.flashcards-open-source-app.com/v1/agent/workspaces using {\"name\":\"Personal\"}. After a workspace is selected, use POST https://api.flashcards-open-source-app.com/v1/agent/sql for reads, writes, and SQL introspection. Read payload from data.* and use docs.openapiUrl for the full contract.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

ومن هناك يستطيع الوكيل أن:

- يحمّل كل مساحات العمل
- ينشئ أول مساحة عمل إذا لم توجد أي مساحة بعد
- يختار مساحة العمل الصحيحة إذا كانت هناك عدة مساحات
- يفحص العقد المنشور على `/v1/agent/openapi.json`
- يستخدم `POST /v1/agent/sql` للقراءة والكتابة واستكشاف طبقة SQL

وهذا ما يجعل تدفق تسجيل الدخول مفيدًا عمليًا، لا مجرد تدفق صحيح من الناحية التقنية.

توجد أيضًا aliases للمواصفات الجذرية على `/v1/openapi.json` و`/v1/swagger.json`، لكن روابط المستندات المخصصة للوكلاء تشير عمدًا إلى `/v1/agent/openapi.json` و`/v1/agent/swagger.json`.

## لماذا هذا أفضل من إعداد مفتاح API يدويًا

نمط الإعداد التقليدي لـ API ما يزال مزعجًا:

- تسجل الدخول من المتصفح
- تفتح صفحة الإعدادات
- تنشئ token يدويًا
- تنسخه إلى أداة أخرى
- وتُبقي المستندات مفتوحة حتى تعرف الأداة ما الذي ينبغي أن تفعله بعد ذلك

هذا التدفق يختصر معظم ذلك.

المستخدم يثبت هويته عبر OTP في البريد. والخدمة تصدر مفتاح API طويل العمر مباشرة إلى الوكيل. ثم يواصل نفس شكل الاستجابة إخبار الوكيل بما يجب أن يفعله بعد ذلك.

وهذا أبسط للمستخدم وأسهل للأتمتة.

## هذا مفتوح المصدر

Flashcards مشروع مفتوح المصدر، لذلك يمكنك فحص التدفق كاملًا بدل التعامل معه كصندوق أسود.

- المستودع: [github.com/kirill-markin/flashcards-open-source-app](https://github.com/kirill-markin/flashcards-open-source-app)
- مسار اكتشاف الوكيل: [apps/backend/src/agentDiscovery.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentDiscovery.ts)
- مسار `send-code` الخاص بالوكيل: [apps/auth/src/routes/agentSendCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentSendCode.ts)
- مسار `verify-code` الخاص بالوكيل: [apps/auth/src/routes/agentVerifyCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentVerifyCode.ts)
- أغلفة تهيئة الحساب ومساحة العمل: [apps/backend/src/agentSetup.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentSetup.ts)

إذا كنت مهتمًا بمصادقة API المفتوحة المصدر، أو بتسجيل الدخول عبر OTP في البريد، أو بتصميم onboarding للوكلاء، فهذه هي الملفات المهمة التي تستحق القراءة.

## جرّبه

إذا أردت اختبار التدفق، فأعطِ وكيلك هذا الرابط:

`https://api.flashcards-open-source-app.com/v1/`

ثم اتركه يتولى الباقي.

روابط مفيدة:

- [موقع Flashcards](https://flashcards-open-source-app.com/)
- [التطبيق المستضاف](https://app.flashcards-open-source-app.com/)
- [البدء السريع](https://flashcards-open-source-app.com/docs/getting-started/)
- [مستودع GitHub](https://github.com/kirill-markin/flashcards-open-source-app)

إذا كان المنتج مفتوح المصدر وكان تدفق المصادقة ضيقًا وواضحًا بالقدر الكافي، فالمفترض أن عبارة "دع الوكيل يتولى الأمر" تعمل فعلًا. وهذا هو الغرض من هذا التدفق.
