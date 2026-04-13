---
title: API संदर्भ
description: खोज, OTP की शुरुआती प्रक्रिया, workspace की तैयारी, और प्रकाशित SQL इंटरफ़ेस के लिए बाहरी एजेंट API का संदर्भ.
---

## परिचय

यह पेज Flashcards के लिए बाहरी AI एजेंटों के मौजूदा अनुबंध का विवरण देता है।

शुरुआत मानक खोज प्रवेश बिंदु से करें:

```text
GET https://api.flashcards-open-source-app.com/v1/
```

यही जानकारी `GET /v1/agent` पर भी उपलब्ध है, लेकिन `/v1/` ही मुख्य सार्वजनिक प्रवेश बिंदु है।

यह जानकारी किसी एजेंट को बताती है कि वह कैसे:

- email OTP login शुरू करे
- OTP को लंबे समय तक मान्य रहने वाली API key में बदल दे
- account context प्राप्त करे
- workspace बनाए या चुने
- प्रकाशित SQL इंटरफ़ेस के जरिए आगे बढ़े

## प्रकाशित विनिर्देश

बाहरी एजेंट इंटरफ़ेस के लिए मुख्य विनिर्देश URLs:

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`

इनके समकक्ष root aliases भी उपलब्ध हैं:

- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

## प्रमाणीकरण की शुरुआती प्रक्रिया

OTP की शुरुआती प्रक्रिया auth सेवा पर चलती है:

- `POST https://auth.flashcards-open-source-app.com/api/agent/send-code`
- `POST https://auth.flashcards-open-source-app.com/api/agent/verify-code`

यह क्रम इस प्रकार है:

1. `GET /v1/` पर अनुरोध भेजें।
2. उपयोगकर्ता का ईमेल `send-code` पर भेजें।
3. उत्तर से `otpSessionToken` पढ़ें।
4. उपयोगकर्ता से सबसे हाल का 8-digit email code पूछें।
5. `verify-code` को `code`, `otpSessionToken`, और `label` के साथ भेजें।
6. वापस मिली API key को chat memory के बाहर सुरक्षित रखें।

अनुशंसित परिवेश चर:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

प्रमाणित अनुरोधों में यह header उपयोग होता है:

```text
Authorization: ApiKey <key>
```

उदाहरण क्रम:

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

## लॉग इन के बाद उपलब्ध एजेंट इंटरफ़ेस

सत्यापन के बाद उपलब्ध एजेंट इंटरफ़ेस यह है:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql`

सामान्य शुरुआती क्रम इस तरह होता है:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. जरूरत हो तो `POST /v1/agent/workspaces` with `{"name":"Personal"}`
4. जरूरत हो तो `POST /v1/agent/workspaces/{workspaceId}/select`
5. `POST /v1/agent/sql` का उपयोग करें

हर API key connection के लिए workspace selection अलग से स्पष्ट रूप से किया जाता है। अगला कदम अनुमान से तय करने के बजाय एजेंटों को हर API उत्तर में मिले `instructions` text और `docs.openapiUrl` field का पालन करना चाहिए।

## SQL इंटरफ़ेस

`POST /v1/agent/sql` बाहरी एजेंटों के लिए पढ़ने-लिखने का साझा इंटरफ़ेस है।

इसे जानबूझकर सीमित रखा गया है; यह पूरा PostgreSQL नहीं है।

फ़िलहाल समर्थित स्टेटमेंट प्रकार:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

फ़िलहाल प्रकाशित तार्किक संसाधनों में ये शामिल हैं:

- `workspace`
- `cards`
- `decks`
- `review_events`

ध्यान देने योग्य बातें:

- `LIMIT` का default `100` है और इसकी अधिकतम सीमा भी `100` ही है
- स्थिर pagination चाहिए तो `ORDER BY` का उपयोग करें
- schema जानने के लिए `SHOW TABLES` या `DESCRIBE cards` का उपयोग करें
- selection के बाद यह बाहरी एजेंट अनुबंध workspace-scoped हो जाता है

उदाहरण अनुरोध:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

उदाहरण कार्ड क्वेरी:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

उदाहरण बदलाव अनुरोध:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

## उपयोगकर्ता और समन्वयन API

Flashcards में उपयोगकर्ता क्लाइंट और offline-first sync के लिए अलग APIs भी हैं, लेकिन बाहरी एजेंटों के लिए वे मुख्य अनुबंध नहीं हैं:

- browser आधारित flows shared-domain cookies और CSRF protection का उपयोग करते हैं
- offline-first क्लाइंट `/v1/workspaces/{workspaceId}/sync/push` और `/v1/workspaces/{workspaceId}/sync/pull` के तहत लागू किए गए sync routes का उपयोग करते हैं
- sync routes को जानबूझकर बाहरी एजेंट OpenAPI इंटरफ़ेस से बाहर रखा गया है
