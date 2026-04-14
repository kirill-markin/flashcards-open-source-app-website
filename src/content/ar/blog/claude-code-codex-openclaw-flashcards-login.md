---
title: "كيف تجعل Claude Code أو Codex أو OpenClaw يسجّل الدخول إلى Flashcards بدلًا منك"
description: "يوفّر Flashcards مسار تسجيل دخول مفتوح المصدر للوكلاء يبدأ من رابط اكتشاف واحد، ورمز تحقق لمرة واحدة عبر البريد الإلكتروني، ومفتاح API طويل الأمد. أعطِ وكيلك رابطًا واحدًا، ثم أرسل له أحدث رمز مكوّن من 8 أرقام من البريد، ودعه يُكمل إعداد الحساب ومساحة العمل بنفسه."
date: "2026-03-10"
keywords:
  - "claude code login"
  - "codex login"
  - "email otp api"
  - "agent onboarding"
  - "open source flashcards app"
  - "open source api authentication"
---

ما تزال معظم مسارات تسجيل الدخول تفترض أن المستخدم هو من سينفّذ كل خطوات الإعداد يدويًا.

تفتح صفحة تسجيل الدخول، وتنتظر الرمز، وتنسخ المفتاح، وتنشئ مفتاح API، ثم تلصقه في أداة أخرى، وتشرح لوكيلك ما الذي تقوله المستندات، ثم تعود لإصلاح الجلسة إذا حدث أي خلل.

وهذا بالضبط النوع من العمل الذي يفترض أن تتكفّل به الأداة بدلًا منك.

في [Flashcards](https://flashcards-open-source-app.com/) نتيح الآن مسار تسجيل دخول مفتوح المصدر للوكلاء يبدأ من رابط اكتشاف واحد:

`https://api.flashcards-open-source-app.com/v1/`

هذه هي نقطة الدخول الأساسية. والحمولة نفسها متاحة أيضًا على `https://api.flashcards-open-source-app.com/v1/agent`، لكن المسار المعتمد حاليًا يبدأ من `/v1/`.

أعطِ هذا الرابط إلى Claude Code أو Codex أو OpenClaw. يستطيع الوكيل فحص المسار، وطلب رمز البريد الإلكتروني، والتحقق منه، وتخزين مفتاح API، وتحميل بيانات الحساب، ثم متابعة إعداد مساحة العمل بنفسه.

ولا يحتاج المستخدم إلا إلى أمرين فقط:

- مشاركة عنوان البريد الإلكتروني
- إرسال أحدث رمز مكوّن من 8 أرقام وصله في البريد

وهذه هي الفكرة كلها.

## رابط واحد يكفي

تعيد نقطة الاكتشاف وصف الخدمة، وآلية المصادقة، وأول خطوة مطلوبة، وتعليمات الخطوة التالية كلها في الاستجابة نفسها.

لذلك، بدلًا من كتابة نص إعداد مخصص لكل أداة، يمكنك ببساطة توجيه الوكيل إلى هذا الرابط وتركه يتبع التعليمات التي تعود بها الخدمة.

```text
GET https://api.flashcards-open-source-app.com/v1/
```

وعلى مستوى عام، يتعرّف الوكيل فورًا إلى أربع نقاط:

- هذه هي خدمة Flashcards
- تسجيل الدخول وإنشاء الحساب يعتمدان معًا على رمز تحقق لمرة واحدة عبر البريد الإلكتروني
- التحقق الناجح يعيد مفتاح API طويل الأمد
- بعد تسجيل الدخول تبدأ تهيئة الحساب ومساحة العمل

## كيف يسير هذا المسار

هذا التسلسل قصير ومقصود أن يكون مباشرًا.

1. يستدعي الوكيل نقطة الاكتشاف.
2. يرسل الوكيل بريد المستخدم إلى `send-code`.
3. يرسل Flashcards الرمز المكوّن من 8 أرقام عبر البريد ويعيد `otpSessionToken`.
4. يطلب الوكيل من المستخدم أحدث رمز وصله في البريد.
5. يتحقق الوكيل من الرمز ويحصل على مفتاح API طويل الأمد.
6. يستدعي `/v1/agent/me` و`/v1/agent/workspaces`.
7. ينشئ مساحة العمل الصحيحة أو يختارها، ثم يواصل عبر `/v1/agent/sql`.

وهذه نقطة مهمة، لأن الوكيل لا يتوقف عند عبارة "نجح تسجيل الدخول"، بل يستطيع إكمال بقية الإعداد ثم الانتقال مباشرة إلى عمليات القراءة والكتابة الفعلية.

## مثال على طلب موجّه إلى Claude Code أو Codex

يكفي هذا النص:

```text
استخدم رابط الاكتشاف هذا الخاص بـ Flashcards:
https://api.flashcards-open-source-app.com/v1/

سجّل الدخول إلى حسابي في Flashcards، وحمّل سياق الحساب، ثم اختر مساحة العمل الصحيحة أو أنشئها.
لا تطلب مني إلا أحدث رمز بريد إلكتروني مكوّن من 8 أرقام عندما يحتاج التدفق إليه.
```

بعد ذلك، لا تحتاج إلى شرح تسلسل المصادقة يدويًا. نقطة الاكتشاف تشرح ذلك أصلًا.

## مثال على طلب موجّه إلى OpenClaw

الفكرة نفسها، لكن بصياغة أكثر صراحة قليلًا:

```text
اربط حسابي في Flashcards باستخدام هذا الرابط:
https://api.flashcards-open-source-app.com/v1/

اتبع التعليمات التي تعود من الخدمة، واحفظ مفتاح API بأمان، وحمّل حسابي، ثم تابع إلى إعداد مساحة العمل.
إذا احتجت إلى التحقق، فاطلب مني أحدث رمز مكوّن من 8 أرقام من البريد الإلكتروني.
```

## مثال: استجابة الاكتشاف

هذا هو أول طلب:

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

وصُممت الاستجابة بحيث تتمكن الوكلاء العاملة في الطرفية من اتباعها من دون حاجة إلى التخمين:

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

## مثال: إرسال رمز التحقق عبر البريد الإلكتروني

بمجرد أن يحصل الوكيل على بريد المستخدم، يبدأ خطوة رمز التحقق:

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

وعند هذه النقطة لا يتوقف الوكيل إلا بالقدر اللازم ليسأل المستخدم عن أحدث رمز وصله في بريده.

## مثال: التحقق من الرمز والحصول على مفتاح API

بعد أن يرسل المستخدم رمز البريد، يستطيع الوكيل إكمال تسجيل الدخول:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code": "12345678",
    "otpSessionToken": "...",
    "label": "Claude Code on MacBook"
  }'
```

يعيد التحقق الناجح مفتاح API طويل الأمد مع تعليمات الخطوة التالية:

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

هنا ينتقل الوكيل من المصادقة إلى استخدام الحساب فعليًا.

احفظ هذا المفتاح خارج ذاكرة المحادثة فورًا. وأبسط طريقة عملية هنا هي تصديره مرة واحدة ثم ترك وكيلك يعيد استخدامه:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

## مثال: تحميل بيانات الحساب ومتابعة مساحات العمل

الطلب التالي هو استدعاء API موثّق اعتيادي:

```bash
curl https://api.flashcards-open-source-app.com/v1/agent/me \
  -H "Authorization: ApiKey YOUR_API_KEY"
```

وتوضح الاستجابة للوكيل أن عليه مواصلة تهيئة مساحة العمل:

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

- يحمّل جميع مساحات العمل
- ينشئ أول مساحة عمل إذا لم تكن هناك أي مساحة بعد
- يختار مساحة العمل الصحيحة إذا كانت هناك عدة مساحات
- يراجع الواجهة المنشورة على `/v1/agent/openapi.json`
- يستخدم `POST /v1/agent/sql` للقراءة والكتابة واستكشاف واجهة SQL

وهذا ما يجعل مسار تسجيل الدخول مفيدًا عمليًا، لا مجرد مسار صحيح من الناحية التقنية.

توجد أيضًا المسارات البديلة للمواصفات الجذرية على `/v1/openapi.json` و`/v1/swagger.json`، لكن روابط المستندات المخصصة للوكلاء تشير عمدًا إلى `/v1/agent/openapi.json` و`/v1/agent/swagger.json`.

## لماذا هذا أفضل من إعداد مفتاح API يدويًا

ما يزال نمط إعداد API المعتاد مرهقًا:

- تسجّل الدخول من المتصفح
- تفتح الإعدادات
- تنشئ مفتاحًا يدويًا
- تنسخه إلى أداة أخرى
- وتبقي المستندات مفتوحة حتى تعرف الأداة ما الذي ينبغي أن تفعله بعد ذلك

هذا المسار يختصر معظم ذلك.

يثبت المستخدم هويته عبر رمز تحقق لمرة واحدة يُرسل إلى البريد الإلكتروني. ثم تصدر الخدمة مفتاح API طويل الأمد مباشرة إلى الوكيل. وبعد ذلك تواصل الاستجابة نفسها إرشاد الوكيل إلى الخطوة التالية.

وهذا أبسط للمستخدم وأسهل للأتمتة.

## هذا المشروع مفتوح المصدر

Flashcards مشروع مفتوح المصدر، لذلك يمكنك فحص هذا المسار كاملًا بدل التعامل معه كصندوق أسود.

- المستودع: [github.com/kirill-markin/flashcards-open-source-app](https://github.com/kirill-markin/flashcards-open-source-app)
- مسار اكتشاف الوكيل: [apps/backend/src/agentDiscovery.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentDiscovery.ts)
- مسار `send-code` الخاص بالوكيل: [apps/auth/src/routes/agentSendCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentSendCode.ts)
- مسار `verify-code` الخاص بالوكيل: [apps/auth/src/routes/agentVerifyCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentVerifyCode.ts)
- أغلفة تهيئة الحساب ومساحة العمل: [apps/backend/src/agentSetup.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentSetup.ts)

إذا كنت مهتمًا بمصادقة API مفتوحة المصدر، أو بتسجيل الدخول عبر رمز تحقق يُرسل بالبريد الإلكتروني، أو بتصميم تهيئة الوكلاء، فهذه هي الملفات الأهم للقراءة.

## جرّب المسار

إذا أردت اختبار هذا المسار، فأعطِ وكيلك هذا الرابط:

`https://api.flashcards-open-source-app.com/v1/`

ثم دعه يتولى الباقي.

روابط مفيدة:

- [موقع Flashcards](https://flashcards-open-source-app.com/)
- [التطبيق المستضاف](https://app.flashcards-open-source-app.com/)
- [البدء](https://flashcards-open-source-app.com/docs/getting-started/)
- [مستودع GitHub](https://github.com/kirill-markin/flashcards-open-source-app)

إذا كان المنتج مفتوح المصدر وكانت واجهة المصادقة محددة وواضحة بما يكفي، فمن المفترض أن تنجح عبارة "دع الوكيل يتولى الأمر" فعلًا. وهذا هو الغرض من هذا المسار.
