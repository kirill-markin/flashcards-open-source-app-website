---
title: مرجع API
description: واجهة API خارجية للوكلاء للاكتشاف وبدء OTP وإعداد مساحة العمل وسطحَي SQL المنشورَين للقراءة والكتابة.
---

## نظرة عامة

توثّق هذه الصفحة العقد الخارجي الحالي لوكلاء الذكاء الاصطناعي في Nibomo.

إذا كان عميلك يتحدث بروتوكول MCP، فإن [موصّل MCP](/docs/mcp-connector/) هو
أبسط طريقة للاتصال، وهو يغلّف سطح البيانات نفسه. توثّق هذه الصفحة عقد HTTP
للاكتشاف وSQL والأدلة والمراجعة الذي يستخدمه وكلاء سطر الأوامر.

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
- يجلب الأدلة المرجعية ويراجع البطاقات بطاقةً تلو الأخرى

## الاكتشاف في وقت التشغيل والمصدر

OpenAPI غير متاح. تعيد عناوين المواصفات الأربعة السابقة أدناه إشعار اكتشاف JSON نفسه مع `"openapiAvailable": false` بدلًا من مخطط:

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`
- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

استخدم `GET https://api.flashcards-open-source-app.com/v1/` للاكتشاف الحالي في وقت التشغيل. اتبع `docs.discoveryUrl` المُعاد لمسارات التشغيل و`docs.source.agentRoutesUrl` لتفاصيل التنفيذ.

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

مثال تسلسل التهيئة:

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Codex on MacBook"
  }'
```

## سطح الوكيل بعد تسجيل الدخول

بعد التحقق، يصبح السطح الحالي كالآتي:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (للقراءة فقط)
- `POST /v1/agent/sql/execute` (للكتابة)
- `GET /v1/agent/guide/{topic}` (للقراءة فقط)
- `POST /v1/agent/reviews/next` (للقراءة فقط)
- `POST /v1/agent/reviews/reveal` (للقراءة فقط)
- `POST /v1/agent/reviews/submit` (للكتابة)

التهيئة المعتادة تبدو هكذا:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. إذا لزم الأمر، `POST /v1/agent/workspaces` مع `{"name":"Personal"}`
4. إذا لزم الأمر، `POST /v1/agent/workspaces/{workspaceId}/select`
5. استخدم `POST /v1/agent/sql/query` للقراءة و`POST /v1/agent/sql/execute` للكتابة

اختيار مساحة العمل صريح لكل اتصال بمفتاح API. يجب على الوكلاء اتباع نص `instructions` المُعاد و`docs.discoveryUrl` لمسارات التشغيل، إضافة إلى `docs.source.agentRoutesUrl` لتفاصيل التنفيذ، بدل التخمين.

تقبل مسارات SQL والمراجعة أيضًا `workspaceId` اختياريًا في جسم JSON. وهو يستهدف مساحة العمل تلك لاستدعاء واحد دون تغيير الاختيار؛ احذفه لاستخدام مساحة العمل المحددة. وإذا لم يوجد اختيار ولا `workspaceId`، فإنها تجيب بـ `409 WORKSPACE_SELECTION_REQUIRED`.

## سطح SQL

`POST /v1/agent/sql/query` هو سطح القراءة فقط بشكل صارم (`SHOW TABLES` و`DESCRIBE` و`SHOW COLUMNS` و`SELECT`) و`POST /v1/agent/sql/execute` هو سطح الكتابة (`INSERT` و`UPDATE` و`DELETE`)؛ يجب أن يكون الطلب الواحد إما قراءات بالكامل أو كتابات بالكامل.

هو محدود عمدًا وليس PostgreSQL كاملًا. تغطي هذه الوثائق اللهجة المدعومة فقط،
وليست مرجع توافق مع PostgreSQL.

لا يصلح أي مسار قراءة البيانات، ولا يعيد حساب الجدولة، ولا يغيّر حالة البطاقة.
استخدم `POST /v1/agent/sql/execute` لكل كتابة للبطاقات والمجموعات. لا يمكن لـ SQL
كتابة `review_events` أو حالة جدولة FSRS؛ سجّل المراجعات عبر
`POST /v1/agent/reviews/submit`.

العائلات الحالية للأوامر:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
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
- كل استدعاء SQL مقيّد بمساحة عمل واحدة: `workspaceId` في جسم الطلب، أو مساحة العمل المحددة

مثال طلب:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

مثال استعلام بطاقات:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

مثال تعديل:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

يتوفر أيضًا خادم MCP بعيد على `https://mcp.flashcards-open-source-app.com/mcp` باستخدام OAuth 2.1 (Dynamic Client Registration + PKCE). يكشف تقسيم SQL نفسه عبر `sql_query` (للقراءة فقط بشكل صارم) و`sql_execute` (للكتابة)، بالإضافة إلى `list_workspaces` و`get_guide` وأدوات المراجعة `next_review_card` و`reveal_answer` و`submit_review`؛ راجع [موصّل MCP](/docs/mcp-connector/).

### الأمان والنطاق

سطح SQL هو لهجة محتواة ومفروضة من المحلّل اللغوي وليس PostgreSQL كاملًا. وسائل الحماية هي:

- **قائمة عبارات مغلقة**: فقط `SHOW TABLES` و`DESCRIBE` و`SHOW COLUMNS` و`SELECT` للقراءة، و`INSERT` و`UPDATE` و`DELETE` للكتابة. وأي شيء آخر يُرفض أثناء التحليل.
- **موارد محدودة**: لا يمكن للعبارات أن تمسّ سوى موارد `workspace` و`cards` و`decks` و`review_events`.
- **النطاق لكل مساحة عمل**: كل عبارة مقيّدة بمساحة عمل واحدة يمكنك الوصول إليها، إما `workspaceId` في جسم الطلب أو مساحة العمل المحددة لديك، بدون وصول عبر المستأجرين.
- **أجسام طلبات صارمة**: ترفض مسارات SQL والمراجعة أي حقل غير معروف في جسم الطلب، لذا يفشل `workspaceId` المكتوب بشكل خاطئ بدلًا من التنفيذ على مساحة العمل المحددة.
- **الحدود**: حتى `100` صف لكل عبارة، وحتى `50` عبارة لكل دفعة، وحد للنتائج يبلغ نحو `12k` رمز. وتُطبَّق دفعات التعديل بشكل ذرّي.
- **الفصل بين القراءة والكتابة**: `sql_query` و`list_workspaces` للقراءة فقط بشكل صارم (`readOnlyHint`) ولا تصلح البيانات أو تعيد حساب الجدولة أو تغيّر حالة البطاقة. `sql_execute` هو أداة الكتابة الوحيدة لـ SQL وينفّذ عمليات الكتابة (`destructiveHint`)؛ ويجب أن يكون الاستدعاء الواحد إما كله قراءة أو كله كتابة. لا يمكن لـ SQL كتابة `review_events` أو حالة جدولة FSRS؛ ولا يسجّل المراجعة إلا `POST /v1/agent/reviews/submit` (أداة MCP `submit_review`).

## الأدلة

يعيد `GET /v1/agent/guide/{topic}` دليلًا مرجعيًا واحدًا في `data.guide`، وهو المحتوى نفسه الذي تقدّمه أداة MCP `get_guide`. المواضيع:

- `sql_dialect`: قواعد SQL الكاملة والحدود والأمثلة
- `card_authoring`: عقد البطاقة والوسوم والتحقق من التكرارات والتنسيق
- `bulk_authoring`: تقسيم مهمة كتابة كبيرة والتحقق منها
- `review_flow`: حلقة المراجعة والتقييم

يؤدي الموضوع غير المعروف إلى استجابة `400` مع قائمة المواضيع المدعومة. اجلب الدليل المناسب قبل إنشاء البطاقات أو الكتابة بالجملة أو تشغيل مراجعة، وأعد قراءة `sql_dialect` بعد رفض أي عبارة.

```bash
curl https://api.flashcards-open-source-app.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## المراجعات

تتيح مسارات المراجعة للوكيل أن يختبر المتعلم بطاقةً تلو الأخرى وأن يحفظ كل تقييم في جدول FSRS الخاص بالبطاقة. وهي تأخذ وسائط JSON نفسها التي تأخذها أدوات المراجعة في MCP:

- يعيد `POST /v1/agent/reviews/next` الحقل `card` مع `cardId` و`frontText`، أو `card: null` عندما لا يكون هناك ما هو مستحق. ويضيّق `tags` الاختياري (أيٌّ منها) أو `deckId` طابور المراجعة، ولا يُستخدمان معًا أبدًا؛ والطلب بدون جسم صالح.
- يتطلب `POST /v1/agent/reviews/reveal` قيمة `cardId` ويعيد `backText` لتلك البطاقة.
- يتطلب `POST /v1/agent/reviews/submit` قيمة `cardId`، و`reviewId` بصيغة UUID يولّده العميل، و`rating` بإحدى القيم `Again` أو `Hard` أو `Good` أو `Easy`، و`reviewedTimeZone` الخاص بالمتعلم بصيغة IANA. يضع الخادم الطابع الزمني للمراجعة ويعيد الجدول الجديد للبطاقة، بما في ذلك `dueAt` و`state` و`reps` و`lapses`.

تقبل المسارات الثلاثة كلها `workspaceId` الاختياري. خزّن `reviewId` قبل الإرسال، وأعد محاولة الإرسال غير المؤكد بالطلب نفسه تمامًا؛ فلن يسجّل ذلك مراجعة ثانية أبدًا. وقد تعيد مسارات المراجعة أيضًا أحد الردود التالية:

- `409 REVIEW_EVENT_CONFLICT`: سُجّلت المراجعة بالفعل، ويحمل `error.details.reviewSchedule` الجدول الحالي للبطاقة.
- `409 REVIEW_ID_CARD_MISMATCH`: يعرّف `reviewId` بالفعل مراجعةً لبطاقة مختلفة، لذا لم يُخزَّن شيء؛ أرسل مجددًا باستخدام `reviewId` جديد.
- `409 REVIEW_STALE`: وقت المراجعة المخزّن للبطاقة يساوي وقت الخادم الحالي أو يأتي بعده؛ راجع بطاقة أخرى.
- `400 REVIEW_INPUT_INVALID`: أحد الوسائط مفقود أو غير صالح أو غير مدعوم، بما في ذلك استخدام `tags` مع `deckId` معًا أو وسم لا تستخدمه مساحة العمل.

مثال إرسال:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/reviews/submit \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "cardId":"693c4863-28a2-45e8-8f55-9fa31fc95ff2",
    "reviewId":"429bb7cc-40fb-49f3-bb50-48a5db2826d1",
    "rating":"Good",
    "reviewedTimeZone":"Europe/Sofia"
  }'
```

## واجهات API البشرية والمزامنة

يتضمن Nibomo أيضًا واجهات منفصلة للعملاء البشريين ولمزامنة العمل دون اتصال أولًا، لكنها ليست العقد الرئيسي للوكلاء الخارجيين:

- تستخدم تدفقات المتصفح ملفات تعريف ارتباط مشتركة النطاق مع حماية CSRF
- يستخدم العملاء الذين يعملون دون اتصال أولًا مسارات المزامنة المنفذة تحت `/v1/workspaces/{workspaceId}/sync/push` و`/v1/workspaces/{workspaceId}/sync/pull`
- تبقى مسارات المزامنة منفصلة عن السطح الخارجي للوكلاء
