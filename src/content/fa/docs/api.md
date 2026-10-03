---
title: مرجع API
description: API عامل‌های خارجی برای کشف، آماده‌سازی اولیه با OTP، راه‌اندازی فضای کاری و رابط‌های SQL منتشرشده برای خواندن و نوشتن.
---

## نمای کلی

این صفحه قرارداد فعلی عامل‌های هوش مصنوعی خارجی را برای Nibomo مستند می‌کند.

اگر کلاینت شما از MCP پشتیبانی می‌کند، [اتصال‌دهندهٔ MCP](/docs/mcp-connector/) ساده‌ترین راه اتصال است و بر همین رابط داده بنا شده است. این صفحه قرارداد HTTP کشف، SQL، راهنماها و مرور را که عامل‌های خط فرمان استفاده می‌کنند مستند می‌کند.

از نقطهٔ ورود رسمی کشف شروع کنید:

```text
GET https://api.nibomo.com/v1/
```

همین محتوای کشف در `GET /v1/agent` هم در دسترس است، اما `/v1/` نقطهٔ ورود عمومی اصلی است.

پاسخ کشف به عامل می‌گوید چگونه:

- ورود با کد یک‌بارمصرف ایمیلی را آغاز کند
- کد یک‌بارمصرف را با یک کلید API بلندمدت مبادله کند
- اطلاعات حساب را بارگذاری کند
- یک فضای کاری بسازد یا انتخاب کند
- کار را از طریق رابط SQL منتشرشده ادامه دهد
- راهنماهای مرجع را دریافت کند و کارت‌ها را یکی‌یکی مرور کند

## کشف در زمان اجرا و کد منبع

OpenAPI در دسترس نیست. چهار نشانی زیر که پیش‌تر مشخصات API را برمی‌گرداندند، اکنون به‌جای طرح‌واره همان پیام کشف را در قالب JSON با `"openapiAvailable": false` برمی‌گردانند:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

برای کشف فعلی در زمان اجرا از `GET https://api.nibomo.com/v1/` استفاده کنید. برای مسیرهای زمان اجرا، `docs.discoveryUrl` برگشتی و برای جزئیات پیاده‌سازی، `docs.source.agentRoutesUrl` را دنبال کنید.

## آماده‌سازی اولیهٔ احراز هویت

آماده‌سازی اولیه با OTP روی سرویس احراز هویت اجرا می‌شود:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

روند کار:

1. `GET /v1/` را فراخوانی کنید.
2. ایمیل کاربر را به `send-code` بفرستید.
3. `otpSessionToken` را از پاسخ بخوانید.
4. آخرین کد ۸ رقمی را که به ایمیل کاربر فرستاده شده است از او بپرسید.
5. `verify-code` را با `code`، `otpSessionToken` و `label` فراخوانی کنید.
6. کلید API برگشتی را بیرون از حافظهٔ چت ذخیره کنید.

متغیر محیطی پیشنهادی:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

درخواست‌های احرازشده از این سرآیند استفاده می‌کنند:

```text
Authorization: ApiKey <key>
```

نمونهٔ ترتیب آماده‌سازی اولیه:

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

## رابط عامل پس از ورود

پس از تأیید، رابط فعلی عامل شامل این مسیرهاست:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (فقط خواندنی)
- `POST /v1/agent/sql/execute` (نوشتن)
- `GET /v1/agent/guide/{topic}` (فقط خواندنی)
- `POST /v1/agent/reviews/next` (فقط خواندنی)
- `POST /v1/agent/reviews/reveal` (فقط خواندنی)
- `POST /v1/agent/reviews/submit` (نوشتن)

آماده‌سازی اولیهٔ معمول این‌گونه است:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. در صورت نیاز، `POST /v1/agent/workspaces` با `{"name":"Personal"}`
4. در صورت نیاز، `POST /v1/agent/workspaces/{workspaceId}/select`
5. برای خواندن از `POST /v1/agent/sql/query` و برای نوشتن از `POST /v1/agent/sql/execute` استفاده کنید

انتخاب فضای کاری برای هر اتصال با کلید API به‌صورت صریح انجام می‌شود. عامل‌ها باید به‌جای حدس زدن گام بعدی، متن `instructions` برگشتی و `docs.discoveryUrl` را برای مسیرهای زمان اجرا و `docs.source.agentRoutesUrl` را برای جزئیات پیاده‌سازی دنبال کنند.

مسیرهای SQL و مرور یک `workspaceId` اختیاری را هم در بدنهٔ JSON می‌پذیرند. این مقدار فقط برای همان یک فراخوانی، آن فضای کاری را هدف قرار می‌دهد و انتخاب فعلی را تغییر نمی‌دهد؛ اگر آن را حذف کنید، فضای کاری انتخاب‌شده به کار می‌رود. اگر نه فضای کاری‌ای انتخاب شده باشد و نه `workspaceId` فرستاده شود، این مسیرها با `409 WORKSPACE_SELECTION_REQUIRED` پاسخ می‌دهند.

## رابط SQL

`POST /v1/agent/sql/query` رابط صرفاً خواندنی است (`SHOW TABLES`، `DESCRIBE`، `SHOW COLUMNS`، `SELECT`) و `POST /v1/agent/sql/execute` رابط نوشتن است (`INSERT`، `UPDATE`، `DELETE`)؛ هر فراخوانی باید یا تماماً خواندن باشد یا تماماً نوشتن.

این رابط عمداً محدود است و PostgreSQL کامل نیست. این مستندات فقط گویش پشتیبانی‌شده را پوشش می‌دهند و مرجع سازگاری با PostgreSQL نیستند.

هیچ مسیر خواندنی داده‌ها را ترمیم نمی‌کند، زمان‌بندی را دوباره محاسبه نمی‌کند یا وضعیت کارت را تغییر نمی‌دهد. برای هر عملیات نوشتن روی کارت‌ها و دسته‌ها از `POST /v1/agent/sql/execute` استفاده کنید. SQL نمی‌تواند در `review_events` یا وضعیت زمان‌بندی FSRS بنویسد؛ مرورها را از طریق `POST /v1/agent/reviews/submit` ثبت کنید.

خانواده‌های دستور فعلی:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

منابع منطقی منتشرشده در حال حاضر عبارت‌اند از:

- `workspace`
- `cards`
- `decks`
- `review_events`

نکته‌ها:

- مقدار پیش‌فرض `LIMIT` برابر `100` است و حداکثر آن هم `100` است
- وقتی به صفحه‌بندی پایدار نیاز دارید از `ORDER BY` استفاده کنید
- برای کشف طرح‌واره از `SHOW TABLES` یا `DESCRIBE cards` استفاده کنید
- هر فراخوانی SQL به یک فضای کاری محدود است: `workspaceId` موجود در بدنه یا فضای کاری انتخاب‌شده

نمونهٔ درخواست:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

نمونهٔ پرس‌وجوی کارت:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

نمونهٔ تغییر داده:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

یک سرور MCP راه‌دور هم در `https://mcp.nibomo.com/mcp` با OAuth 2.1 (Dynamic Client Registration + PKCE) در دسترس است. این سرور همان تفکیک SQL را به‌صورت `sql_query` (صرفاً خواندنی) و `sql_execute` (نوشتن) ارائه می‌کند، به‌همراه `list_workspaces`، `get_guide` و ابزارهای مرور `next_review_card`، `reveal_answer` و `submit_review`؛ [اتصال‌دهندهٔ MCP](/docs/mcp-connector/) را ببینید.

### ایمنی و دامنهٔ دسترسی

رابط SQL یک گویش محصور است که تجزیه‌گر آن را اعمال می‌کند، نه PostgreSQL خام. محدودیت‌های محافظتی عبارت‌اند از:

- **فهرست بستهٔ دستورهای مجاز**: برای خواندن فقط `SHOW TABLES`، `DESCRIBE`، `SHOW COLUMNS` و `SELECT` و برای نوشتن فقط `INSERT`، `UPDATE` و `DELETE`. هر چیز دیگری هنگام تجزیه رد می‌شود.
- **منابع محدود**: دستورها فقط می‌توانند به منابع `workspace`، `cards`، `decks` و `review_events` دسترسی داشته باشند.
- **محدودسازی به فضای کاری**: هر دستور به یک فضای کاری که به آن دسترسی دارید محدود است، یعنی `workspaceId` موجود در بدنهٔ درخواست یا فضای کاری انتخاب‌شدهٔ شما، و هیچ دسترسی‌ای به داده‌های مستأجران دیگر وجود ندارد.
- **بدنه‌های سخت‌گیرانهٔ درخواست**: مسیرهای SQL و مرور هر فیلد ناشناخته‌ای را در بدنه رد می‌کنند، بنابراین اگر `workspaceId` را اشتباه بنویسید، درخواست به‌جای اجرا روی فضای کاری انتخاب‌شده رد می‌شود.
- **سقف‌ها**: حداکثر `100` ردیف در هر دستور، حداکثر `50` دستور در هر مجموعه‌دستور (batch) و سقف نتیجه‌ای در حدود `12k` توکن. مجموعه‌دستورهای تغییر داده به‌صورت اتمی اعمال می‌شوند.
- **تفکیک خواندن و نوشتن**: `sql_query` و `list_workspaces` صرفاً خواندنی‌اند (`readOnlyHint`) و هرگز داده‌ها را ترمیم نمی‌کنند، زمان‌بندی را دوباره محاسبه نمی‌کنند یا وضعیت کارت را تغییر نمی‌دهند. `sql_execute` تنها ابزار نوشتن SQL است و عملیات نوشتن را انجام می‌دهد (`destructiveHint`)؛ هر فراخوانی باید یا تماماً خواندن باشد یا تماماً نوشتن. SQL نمی‌تواند در `review_events` یا وضعیت زمان‌بندی FSRS بنویسد؛ فقط `POST /v1/agent/reviews/submit` (در MCP، `submit_review`) مرور را ثبت می‌کند.

## راهنماها

`GET /v1/agent/guide/{topic}` یک راهنمای مرجع را در `data.guide` برمی‌گرداند؛ همان متنی که ابزار `get_guide` در MCP ارائه می‌کند. موضوع‌ها:

- `sql_dialect`: گرامر کامل SQL، محدودیت‌ها و نمونه‌ها
- `card_authoring`: قرارداد کارت، برچسب‌ها، بررسی موارد تکراری و قالب‌بندی
- `bulk_authoring`: تقسیم و بررسی یک کار نوشتن حجیم
- `review_flow`: چرخهٔ مرور و امتیازدهی

موضوع ناشناخته با `400` و فهرست موضوع‌های پشتیبانی‌شده پاسخ داده می‌شود. پیش از نوشتن کارت، نوشتن حجیم یا اجرای مرور، راهنمای مربوط را دریافت کنید و پس از رد شدن یک دستور، `sql_dialect` را دوباره بخوانید.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## مرورها

مسیرهای مرور به عامل امکان می‌دهند کارت‌به‌کارت از یادگیرنده سؤال بپرسد و هر امتیاز را در زمان‌بندی FSRS آن کارت ذخیره کند. این مسیرها همان آرگومان‌های JSON ابزارهای مرور MCP را می‌پذیرند:

- `POST /v1/agent/reviews/next` مقدار `card` را با `cardId` و `frontText` برمی‌گرداند، یا وقتی موعد مرور هیچ کارتی نرسیده باشد `card: null` را. `tags` اختیاری (تطابق با هر یک از برچسب‌ها) یا `deckId` صف را محدود می‌کند، اما هرگز هر دو با هم؛ درخواست بدون بدنه معتبر است.
- `POST /v1/agent/reviews/reveal` به `cardId` نیاز دارد و `backText` همان کارت را برمی‌گرداند.
- `POST /v1/agent/reviews/submit` به `cardId`، یک UUID به نام `reviewId` که کلاینت می‌سازد، یک `rating` با یکی از مقدارهای `Again`، `Hard`، `Good` یا `Easy` و `reviewedTimeZone` یادگیرنده در قالب IANA نیاز دارد. سرور زمان مرور را ثبت می‌کند و زمان‌بندی جدید کارت را، شامل `dueAt`، `state`، `reps` و `lapses`، برمی‌گرداند.

هر سه مسیر `workspaceId` اختیاری را می‌پذیرند. پیش از ارسال، `reviewId` را ذخیره کنید و ارسالی را که از نتیجه‌اش مطمئن نیستید با درخواستی کاملاً یکسان دوباره امتحان کنید؛ این کار هرگز مرور دومی ثبت نمی‌کند. مسیرهای مرور ممکن است این پاسخ‌ها را هم بدهند:

- `409 REVIEW_EVENT_CONFLICT`: این مرور پیش‌تر ثبت شده است و `error.details.reviewSchedule` زمان‌بندی فعلی کارت را در خود دارد.
- `409 REVIEW_ID_CARD_MISMATCH`: این `reviewId` پیش‌تر مرور کارت دیگری را مشخص کرده است، بنابراین چیزی ذخیره نشد؛ با یک `reviewId` جدید دوباره ارسال کنید.
- `409 REVIEW_STALE`: زمان مرور ذخیره‌شدهٔ کارت برابر با زمان فعلی سرور یا پس از آن است؛ کارت دیگری را مرور کنید.
- `400 REVIEW_INPUT_INVALID`: آرگومانی جا افتاده، نامعتبر است یا پشتیبانی نمی‌شود؛ از جمله ترکیب `tags` با `deckId` یا برچسبی که فضای کاری از آن استفاده نمی‌کند.

نمونهٔ ارسال:

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

## APIهای کاربران انسانی و همگام‌سازی

Nibomo همچنین APIهای جداگانه‌ای برای کلاینت‌های انسانی و همگام‌سازی آفلاین‌محور دارد، اما این‌ها قرارداد اصلی عامل‌های خارجی نیستند:

- جریان‌های مرورگر از کوکی‌های دامنهٔ مشترک به‌همراه محافظت CSRF استفاده می‌کنند
- کلاینت‌های آفلاین‌محور از مسیرهای همگام‌سازی پیاده‌سازی‌شده در `/v1/workspaces/{workspaceId}/sync/push` و `/v1/workspaces/{workspaceId}/sync/pull` استفاده می‌کنند
- مسیرهای همگام‌سازی از رابط عامل‌های خارجی جدا هستند
