---
title: فن تعمیر
description: نظام کا جائزہ، عوامی ڈومینز، تعاون یافتہ کلائنٹس اور موجودہ آف لائن فرسٹ ڈیٹا فلو۔
---

## نظام کا جائزہ

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## اصول

1. `app`، `api` اور `auth` کے لیے الگ الگ عوامی ڈومینز
2. Postgres ڈیٹا کا مستند ماخذ ہے
3. iOS کلائنٹ آف لائن فرسٹ ہے اور مقامی SQLite کے ساتھ ہم وقت سازی استعمال کرتا ہے
4. ویب ایپ، iOS ایپ اور بیرونی ایجنٹس کی سطح ایک ہی ورک اسپیس ماڈل استعمال کرتی ہیں
5. بیرونی ایجنٹس `GET https://api.nibomo.com/v1/` سے شروع کرتے ہیں

## تعاون یافتہ کلائنٹس

- `app.nibomo.com` پر ویب ایپ
- مرکزی ریپوزٹری میں iOS ایپ، مقامی SQLite اسٹوریج کے ساتھ
- Google Play پر Android ایپ
- ڈسکوری، OTP کے ذریعے ابتدائی تیاری اور `Authorization: ApiKey` کے ذریعے بیرونی ایجنٹ کلائنٹس

## ڈیٹا ماڈل

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## ڈیٹا فلو

### ویب

1. براؤزر `auth.<domain>` کے ذریعے سائن اِن کرتا ہے۔
2. ویب ایپ ورک اسپیس کا ڈیٹا `api.<domain>` سے لوڈ کرتی ہے۔
3. AI چیٹ کی درخواستیں `/chat/local-turn` سے گزرتی ہیں۔
4. دہرائی جمع کرانے پر، ریکارڈ لکھتے وقت ہی شیڈیولر کی حالت اپ ڈیٹ ہو جاتی ہے۔

### iOS

1. iOS ایپ پہلے مقامی طور پر SQLite میں لکھتی ہے۔
2. مقامی تبدیلیاں ایک آؤٹ باکس میں قطار میں رکھی جاتی ہیں۔
3. ہم وقت سازی تبدیلیوں کو `/v1/workspaces/{workspaceId}/sync/push` کے ذریعے اپ لوڈ کرتی ہے۔
4. ہم وقت سازی ریموٹ اپ ڈیٹس کو `/v1/workspaces/{workspaceId}/sync/pull` کے ذریعے ڈاؤن لوڈ کرتی ہے۔
5. مقامی ڈیٹا بیس تبدیلیاں لاگو کرتا ہے اور ہم وقت سازی کا کرسر آگے بڑھاتا ہے۔

### بیرونی ایجنٹس

1. ایجنٹس `GET /v1/` سے شروع کرتے ہیں۔
2. OTP کے ذریعے ابتدائی تیاری `auth.<domain>` پر ہوتی ہے۔
3. ایجنٹ کو ایک طویل مدتی API کلید ملتی ہے۔
4. ایجنٹ `/v1/agent/me` لوڈ کرتا ہے، ورک اسپیسز کی فہرست لیتا ہے، ضرورت ہو تو ایک منتخب کرتا ہے، اور پھر `/v1/agent/sql/query` اور `/v1/agent/sql/execute` استعمال کرتا ہے۔

## شیڈیولنگ

Nibomo دہرائی کے شیڈیولر کے طور پر FSRS استعمال کرتا ہے۔

نفاذ سے متعلق نوٹس:

- بیک اینڈ اور iOS میں FSRS کے ایک جیسے، متوازی نفاذ رکھے جاتے ہیں
- ویب ایپ شیڈیولنگ ڈیٹا کے معاہدے کی پیروی کرتی ہے، لیکن شیڈیولر کی تیسری نقل شامل نہیں کرتی
- ورک اسپیس کی سطح کی شیڈیولر ترتیبات میں یاد رکھنے کا مطلوبہ ہدف، سیکھنے کے مراحل، دوبارہ سیکھنے کے مراحل، زیادہ سے زیادہ وقفہ اور fuzz شامل ہیں
- دہرائی کا اصل ٹائم اسٹیمپ `reviewedAtClient` سے آتا ہے

تفصیلی معاہدے کے لیے [مرکزی ریپوزٹری میں FSRS شیڈیولنگ کی منطق](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) دیکھیں۔

## تصدیق

- Cognito کے ذریعے ای میل OTP
- میزبان ویب ایپ کے لیے مشترکہ ڈومین والی براؤزر سیشن کوکیز
- `auth.<domain>` پر ایجنٹ کی OTP کے ذریعے ابتدائی تیاری، جس کا نتیجہ طویل مدتی ApiKey ہوتا ہے
- مقامی ڈیولپمنٹ کے لیے `AUTH_MODE=none`
- پروڈکشن جیسی تصدیق کے لیے `AUTH_MODE=cognito`

## تعیناتی کی ساخت

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda بیک اینڈ
- `auth.<domain>` -> API Gateway + Lambda تصدیقی سروس
- AWS RDS میں Postgres

روٹ ڈومین الگ مارکیٹنگ سائٹ پر رہ سکتا ہے۔ اگر ابتدائی تیاری کے دوران وہ خالی ہو تو انفراسٹرکچر عارضی طور پر اسے `app.<domain>` پر ری ڈائریکٹ کر سکتا ہے۔
