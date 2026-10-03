---
title: API حوالہ
description: ڈسکوری، OTP کے ذریعے ابتدائی تیاری، ورک اسپیس سیٹ اپ اور شائع شدہ پڑھنے اور لکھنے والی SQL سطحوں کے لیے بیرونی ایجنٹ API۔
---

## جائزہ

یہ صفحہ Nibomo کے لیے بیرونی AI ایجنٹس کے موجودہ معاہدے کی دستاویز ہے۔

اگر آپ کا کلائنٹ MCP استعمال کرتا ہے تو [MCP کنیکٹر](/docs/mcp-connector/) جڑنے کا
سب سے آسان طریقہ ہے اور یہ اسی ڈیٹا سطح کو استعمال کرتا ہے۔ یہ صفحہ CLI ایجنٹس کے
استعمال کردہ HTTP ڈسکوری، SQL، رہنما اور دہرائی کے معاہدے کی دستاویز ہے۔

باضابطہ ڈسکوری انٹری پوائنٹ سے شروع کریں:

```text
GET https://api.nibomo.com/v1/
```

یہی ڈسکوری پے لوڈ `GET /v1/agent` پر بھی دستیاب ہے، لیکن `/v1/` ہی بنیادی عوامی انٹری پوائنٹ ہے۔

ڈسکوری جواب ایجنٹ کو بتاتا ہے کہ کیسے:

- ای میل OTP لاگ اِن شروع کرے
- OTP کے بدلے طویل مدتی API کلید حاصل کرے
- اکاؤنٹ کا سیاق و سباق لوڈ کرے
- ورک اسپیس بنائے یا منتخب کرے
- شائع شدہ SQL سطح کے ذریعے آگے بڑھے
- حوالہ جاتی رہنما حاصل کرے اور کارڈز کی ایک ایک کر کے دہرائی کرے

## رن ٹائم ڈسکوری اور سورس

OpenAPI دستیاب نہیں۔ نیچے دیے گئے چار سابقہ اسپیسیفکیشن URLs اب اسکیما کے بجائے `"openapiAvailable": false` کے ساتھ وہی JSON ڈسکوری نوٹس لوٹاتے ہیں:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

موجودہ رن ٹائم ڈسکوری کے لیے `GET https://api.nibomo.com/v1/` استعمال کریں۔ رن ٹائم روٹس کے لیے لوٹایا گیا `docs.discoveryUrl` اور نفاذ کی تفصیلات کے لیے `docs.source.agentRoutesUrl` دیکھیں۔

## تصدیق کی ابتدائی تیاری

OTP کے ذریعے ابتدائی تیاری تصدیق کی سروس پر ہوتی ہے:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

فلو یہ ہے:

1. `GET /v1/` کال کریں۔
2. صارف کی ای میل `send-code` کو بھیجیں۔
3. جواب سے `otpSessionToken` پڑھیں۔
4. صارف سے ای میل میں آنے والا تازہ ترین 8 ہندسوں کا کوڈ پوچھیں۔
5. `code`، `otpSessionToken` اور `label` کے ساتھ `verify-code` کال کریں۔
6. لوٹائی گئی API کلید کو چیٹ کی یادداشت سے باہر محفوظ کریں۔

تجویز کردہ انوائرمنٹ ویری ایبل:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

تصدیق شدہ درخواستیں یہ استعمال کرتی ہیں:

```text
Authorization: ApiKey <key>
```

ابتدائی تیاری کی مثال:

```bash
curl https://api.nibomo.com/v1/
```

```bash
curl -X POST https://auth.nibomo.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

```bash
curl -X POST https://auth.nibomo.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Codex on MacBook"
  }'
```

## لاگ اِن کے بعد ایجنٹ کی سطح

تصدیق کے بعد ایجنٹ کی موجودہ سطح یہ ہے:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (صرف پڑھنے کے لیے)
- `POST /v1/agent/sql/execute` (لکھنے کے لیے)
- `GET /v1/agent/guide/{topic}` (صرف پڑھنے کے لیے)
- `POST /v1/agent/reviews/next` (صرف پڑھنے کے لیے)
- `POST /v1/agent/reviews/reveal` (صرف پڑھنے کے لیے)
- `POST /v1/agent/reviews/submit` (لکھنے کے لیے)

عام ابتدائی تیاری اس طرح ہوتی ہے:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. ضرورت ہو تو `{"name":"Personal"}` کے ساتھ `POST /v1/agent/workspaces`
4. ضرورت ہو تو `POST /v1/agent/workspaces/{workspaceId}/select`
5. پڑھنے کے لیے `POST /v1/agent/sql/query` اور لکھنے کے لیے `POST /v1/agent/sql/execute` استعمال کریں

ورک اسپیس کا انتخاب ہر API کلید کنکشن کے لیے واضح طور پر کیا جاتا ہے۔ ایجنٹس کو اگلے قدم کا اندازہ لگانے کے بجائے لوٹائے گئے `instructions` متن، رن ٹائم روٹس کے لیے `docs.discoveryUrl` اور نفاذ کی تفصیلات کے لیے `docs.source.agentRoutesUrl` کی پیروی کرنی چاہیے۔

SQL اور دہرائی کے روٹس JSON باڈی میں ایک اختیاری `workspaceId` بھی قبول کرتے ہیں۔ یہ انتخاب بدلے بغیر ایک کال کے لیے اس ورک اسپیس کو ہدف بناتا ہے؛ منتخب ورک اسپیس استعمال کرنے کے لیے اسے چھوڑ دیں۔ اگر نہ کوئی انتخاب ہو اور نہ `workspaceId`، تو یہ `409 WORKSPACE_SELECTION_REQUIRED` لوٹاتے ہیں۔

## SQL سطح

`POST /v1/agent/sql/query` سختی سے صرف پڑھنے والی سطح ہے (`SHOW TABLES`، `DESCRIBE`، `SHOW COLUMNS`، `SELECT`) اور `POST /v1/agent/sql/execute` لکھنے والی سطح ہے (`INSERT`، `UPDATE`، `DELETE`)؛ ایک کال میں یا تو سب پڑھنے کے بیانات ہوں یا سب لکھنے کے۔

یہ جان بوجھ کر محدود ہے اور مکمل PostgreSQL نہیں ہے۔ یہ دستاویزات صرف تعاون یافتہ
ڈائلیکٹ کا احاطہ کرتی ہیں، PostgreSQL مطابقت کا حوالہ نہیں ہیں۔

پڑھنے کا کوئی بھی راستہ ڈیٹا کی مرمت نہیں کرتا، شیڈیولنگ کا دوبارہ حساب نہیں لگاتا اور کارڈ کی حالت نہیں بدلتا۔
کارڈز اور ڈیکس میں لکھنے کی ہر کارروائی کے لیے `POST /v1/agent/sql/execute` استعمال کریں۔ SQL نہ
`review_events` لکھ سکتا ہے اور نہ FSRS شیڈیولنگ کی حالت؛ دہرائیاں
`POST /v1/agent/reviews/submit` کے ذریعے درج کریں۔

بیانات کی موجودہ اقسام:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

شائع شدہ منطقی وسائل میں فی الحال شامل ہیں:

- `workspace`
- `cards`
- `decks`
- `review_events`

نوٹس:

- `LIMIT` کی طے شدہ قدر `100` ہے اور زیادہ سے زیادہ حد بھی `100` ہے
- مستحکم صفحہ بندی کے لیے `ORDER BY` استعمال کریں
- اسکیما جاننے کے لیے `SHOW TABLES` یا `DESCRIBE cards` استعمال کریں
- ہر SQL کال ایک ورک اسپیس تک محدود ہوتی ہے: باڈی میں دیا گیا `workspaceId`، یا منتخب ورک اسپیس

درخواست کی مثال:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

کارڈز کی کوئری کی مثال:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

تبدیلی کی مثال:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

`https://mcp.nibomo.com/mcp` پر OAuth 2.1 (Dynamic Client Registration + PKCE) کے ساتھ ایک ریموٹ MCP سرور بھی دستیاب ہے۔ یہ وہی SQL تقسیم `sql_query` (سختی سے صرف پڑھنے کے لیے) اور `sql_execute` (لکھنے کے لیے) کی صورت میں فراہم کرتا ہے، ساتھ ہی `list_workspaces`، `get_guide` اور دہرائی کے ٹولز `next_review_card`، `reveal_answer` اور `submit_review` بھی؛ دیکھیں [MCP کنیکٹر](/docs/mcp-connector/)۔

### حفاظت اور دائرہ کار

SQL سطح خام PostgreSQL نہیں بلکہ ایک محدود ڈائلیکٹ ہے جس کی پابندی پارسر کرواتا ہے۔ حفاظتی حدود یہ ہیں:

- **بیانات کی بند اجازت فہرست**: پڑھنے کے لیے صرف `SHOW TABLES`، `DESCRIBE`، `SHOW COLUMNS` اور `SELECT`، اور لکھنے کے لیے `INSERT`، `UPDATE` اور `DELETE`۔ اس کے علاوہ ہر چیز پارس کرتے وقت ہی مسترد ہو جاتی ہے۔
- **محدود وسائل**: بیانات صرف `workspace`، `cards`، `decks` اور `review_events` وسائل تک پہنچ سکتے ہیں۔
- **فی ورک اسپیس دائرہ**: ہر بیان ایک ایسے ورک اسپیس تک محدود ہوتا ہے جس تک آپ کی رسائی ہو، یعنی درخواست کی باڈی میں دیا گیا `workspaceId` یا آپ کا منتخب ورک اسپیس، اور کسی دوسرے ٹیننٹ تک کوئی رسائی نہیں ہوتی۔
- **سخت درخواستی باڈیز**: SQL اور دہرائی کے روٹس کسی نامعلوم باڈی فیلڈ کو مسترد کر دیتے ہیں، اس لیے غلط ہجے والا `workspaceId` منتخب ورک اسپیس پر چلنے کے بجائے ناکام ہو جاتا ہے۔
- **حدود**: فی بیان زیادہ سے زیادہ `100` قطاریں، فی بیچ زیادہ سے زیادہ `50` بیانات، اور نتیجے کی حد تقریباً `12k` ٹوکنز۔ تبدیلی کے بیچ ایٹامک طور پر لاگو ہوتے ہیں۔
- **پڑھنے اور لکھنے کی تقسیم**: `sql_query` اور `list_workspaces` سختی سے صرف پڑھنے کے لیے ہیں (`readOnlyHint`) اور کبھی ڈیٹا کی مرمت نہیں کرتے، شیڈیولنگ کا دوبارہ حساب نہیں لگاتے اور کارڈ کی حالت نہیں بدلتے۔ `sql_execute` لکھنے والا واحد SQL ٹول ہے اور لکھنے کی کارروائیاں انجام دیتا ہے (`destructiveHint`)؛ ایک کال میں یا تو سب پڑھنے کے بیانات ہوں یا سب لکھنے کے۔ SQL نہ `review_events` لکھ سکتا ہے اور نہ FSRS شیڈیولنگ کی حالت؛ صرف `POST /v1/agent/reviews/submit` (MCP میں `submit_review`) دہرائی درج کرتا ہے۔

## رہنما

`GET /v1/agent/guide/{topic}` ایک حوالہ جاتی رہنما `data.guide` میں لوٹاتا ہے، وہی متن جو MCP کا `get_guide` ٹول فراہم کرتا ہے۔ موضوعات:

- `sql_dialect`: مکمل SQL گرامر، حدود اور مثالیں
- `card_authoring`: کارڈ کا معاہدہ، ٹیگز، ڈپلیکیٹس کی جانچ اور فارمیٹنگ
- `bulk_authoring`: لکھنے کے بڑے کام کو حصوں میں بانٹنا اور اس کی جانچ کرنا
- `review_flow`: دہرائی اور درجہ بندی کا سلسلہ

نامعلوم موضوع پر `400` کے ساتھ تعاون یافتہ موضوعات کی فہرست لوٹائی جاتی ہے۔ کارڈز تیار کرنے، بڑی تعداد میں لکھنے یا دہرائی چلانے سے پہلے متعلقہ رہنما حاصل کریں، اور کوئی بیان مسترد ہونے کے بعد `sql_dialect` دوبارہ پڑھیں۔

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## دہرائیاں

دہرائی کے روٹس ایجنٹ کو سیکھنے والے سے ایک وقت میں ایک کارڈ پوچھنے اور ہر درجہ بندی کو کارڈ کے FSRS شیڈیول میں محفوظ کرنے دیتے ہیں۔ یہ وہی JSON آرگیومنٹس لیتے ہیں جو MCP کے دہرائی کے ٹولز لیتے ہیں:

- `POST /v1/agent/reviews/next` `cardId` اور `frontText` کے ساتھ `card` لوٹاتا ہے، یا جب کسی کارڈ کی دہرائی باقی نہ ہو تو `card: null`۔ اختیاری `tags` (ان میں سے کوئی بھی) یا `deckId` قطار کو محدود کرتا ہے، دونوں ایک ساتھ کبھی نہیں؛ باڈی کے بغیر درخواست بھی درست ہے۔
- `POST /v1/agent/reviews/reveal` کے لیے `cardId` لازمی ہے اور یہ اس کارڈ کا `backText` لوٹاتا ہے۔
- `POST /v1/agent/reviews/submit` کے لیے `cardId`، کلائنٹ کا بنایا ہوا `reviewId` UUID، `Again`، `Hard`، `Good` یا `Easy` میں سے ایک `rating`، اور سیکھنے والے کا IANA `reviewedTimeZone` لازمی ہیں۔ سرور دہرائی کا وقت درج کرتا ہے اور کارڈ کا نیا شیڈیول لوٹاتا ہے، جس میں `dueAt`، `state`، `reps` اور `lapses` شامل ہیں۔

تینوں روٹس اختیاری `workspaceId` قبول کرتے ہیں۔ جمع کرنے سے پہلے `reviewId` محفوظ کر لیں، اور اگر جمع ہونے کے بارے میں یقین نہ ہو تو بالکل وہی درخواست دوبارہ بھیجیں؛ اس سے کبھی دوسری دہرائی درج نہیں ہوتی۔ دہرائی کے روٹس یہ جوابات بھی دے سکتے ہیں:

- `409 REVIEW_EVENT_CONFLICT`: دہرائی پہلے ہی درج ہو چکی ہے، اور `error.details.reviewSchedule` میں کارڈ کا موجودہ شیڈیول ہوتا ہے۔
- `409 REVIEW_ID_CARD_MISMATCH`: یہ `reviewId` پہلے ہی کسی دوسرے کارڈ کی دہرائی کی شناخت ہے، اس لیے کچھ محفوظ نہیں ہوا؛ نئے `reviewId` کے ساتھ دوبارہ جمع کریں۔
- `409 REVIEW_STALE`: کارڈ کا محفوظ شدہ دہرائی کا وقت سرور کے موجودہ وقت کے برابر یا اس کے بعد کا ہے؛ کسی اور کارڈ کی دہرائی کریں۔
- `400 REVIEW_INPUT_INVALID`: کوئی آرگیومنٹ غائب، غلط یا غیر تعاون یافتہ ہے، جس میں `deckId` کے ساتھ `tags` دینا یا ایسا ٹیگ شامل ہے جو ورک اسپیس میں استعمال نہیں ہوتا۔

جمع کرانے کی مثال:

```bash
curl -X POST https://api.nibomo.com/v1/agent/reviews/submit \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "cardId":"693c4863-28a2-45e8-8f55-9fa31fc95ff2",
    "reviewId":"429bb7cc-40fb-49f3-bb50-48a5db2826d1",
    "rating":"Good",
    "reviewedTimeZone":"Europe/Sofia"
  }'
```

## انسانوں اور ہم وقت سازی کے APIs

Nibomo میں انسانی کلائنٹس اور آف لائن فرسٹ ہم وقت سازی کے لیے الگ APIs بھی ہیں، لیکن یہ بیرونی ایجنٹس کے لیے بنیادی معاہدہ نہیں ہیں:

- براؤزر فلوز مشترکہ ڈومین کوکیز کے ساتھ CSRF تحفظ استعمال کرتے ہیں
- آف لائن فرسٹ کلائنٹس `/v1/workspaces/{workspaceId}/sync/push` اور `/v1/workspaces/{workspaceId}/sync/pull` کے تحت نافذ شدہ ہم وقت سازی کے روٹس استعمال کرتے ہیں
- ہم وقت سازی کے روٹس بیرونی ایجنٹ کی سطح سے الگ ہیں
