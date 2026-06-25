---
title: API संदर्भ
description: खोज, OTP की शुरुआती प्रक्रिया, workspace की तैयारी, और प्रकाशित पढ़ने व लिखने के SQL इंटरफ़ेस के लिए बाहरी एजेंट API का संदर्भ.
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
- `POST /v1/agent/sql/query` (केवल पढ़ने के लिए)
- `POST /v1/agent/sql/execute` (लिखने के लिए)

सामान्य शुरुआती क्रम इस तरह होता है:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. जरूरत हो तो `POST /v1/agent/workspaces` with `{"name":"Personal"}`
4. जरूरत हो तो `POST /v1/agent/workspaces/{workspaceId}/select`
5. पढ़ने के लिए `POST /v1/agent/sql/query` और लिखने के लिए `POST /v1/agent/sql/execute` का उपयोग करें

हर API key connection के लिए workspace selection अलग से स्पष्ट रूप से किया जाता है। अगला कदम अनुमान से तय करने के बजाय एजेंटों को हर API उत्तर में मिले `instructions` text और `docs.openapiUrl` field का पालन करना चाहिए।

## SQL इंटरफ़ेस

`POST /v1/agent/sql/query` सख्ती से केवल पढ़ने का इंटरफ़ेस है (`SHOW TABLES`, `DESCRIBE`, `SELECT`) और `POST /v1/agent/sql/execute` लिखने का इंटरफ़ेस है (`INSERT`, `UPDATE`, `DELETE`); एक ही कॉल या तो पूरी तरह पढ़ने की होनी चाहिए या पूरी तरह लिखने की।

इसे जानबूझकर सीमित रखा गया है; यह पूरा PostgreSQL नहीं है। ये दस्तावेज़ केवल
समर्थित बोली को कवर करते हैं, PostgreSQL compatibility reference नहीं हैं।

कोई भी read path डेटा की मरम्मत, scheduling की पुनर्गणना, या कार्ड state में
बदलाव नहीं करता। हर write के लिए `POST /v1/agent/sql/execute` का उपयोग करें।

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
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

उदाहरण कार्ड क्वेरी:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

उदाहरण बदलाव अनुरोध:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

`https://mcp.flashcards-open-source-app.com/mcp` पर एक रिमोट MCP सर्वर भी उपलब्ध है, जो OAuth 2.1 (Dynamic Client Registration + PKCE) का उपयोग करता है। यह वही विभाजन दो टूल के रूप में देता है, `sql_query` (सख्ती से केवल पढ़ने के लिए) और `sql_execute` (लिखने के लिए), साथ ही सख्ती से केवल पढ़ने वाला `list_workspaces`।

### सुरक्षा और दायरा

SQL सतह कच्चे PostgreSQL के बजाय एक सीमित, पार्सर-लागू बोली है। सुरक्षा उपाय इस प्रकार हैं:

- **बंद स्टेटमेंट अनुमति-सूची**: पढ़ने के लिए केवल `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` और `SELECT`, तथा लिखने के लिए `INSERT`, `UPDATE` और `DELETE`। बाकी सब कुछ पार्स के समय अस्वीकार कर दिया जाता है।
- **सीमित संसाधन**: स्टेटमेंट केवल `workspace`, `cards`, `decks` और `review_events` संसाधनों को ही छू सकते हैं।
- **प्रति-वर्कस्पेस दायरा**: हर स्टेटमेंट आपके चुने हुए वर्कस्पेस तक सीमित है, किसी अन्य टेनेंट तक पहुँच नहीं।
- **सीमाएँ**: प्रति स्टेटमेंट अधिकतम `100` पंक्तियाँ, प्रति बैच अधिकतम `50` स्टेटमेंट, और परिणाम की सीमा लगभग `12k` टोकन। म्यूटेशन बैच परमाणु रूप से लागू होते हैं।
- **पढ़ने/लिखने का विभाजन**: `sql_query` और `list_workspaces` सख्ती से केवल पढ़ने के लिए हैं (`readOnlyHint`) और डेटा की मरम्मत, scheduling की पुनर्गणना, या कार्ड state में बदलाव कभी नहीं करते। `sql_execute` एकमात्र write tool है और लिखने का कार्य करता है (`destructiveHint`); एक ही कॉल या तो पूरी तरह पढ़ने की होनी चाहिए या पूरी तरह लिखने की।

## उपयोगकर्ता और समन्वयन API

Flashcards में उपयोगकर्ता क्लाइंट और offline-first sync के लिए अलग APIs भी हैं, लेकिन बाहरी एजेंटों के लिए वे मुख्य अनुबंध नहीं हैं:

- browser आधारित flows shared-domain cookies और CSRF protection का उपयोग करते हैं
- offline-first क्लाइंट `/v1/workspaces/{workspaceId}/sync/push` और `/v1/workspaces/{workspaceId}/sync/pull` के तहत लागू किए गए sync routes का उपयोग करते हैं
- sync routes को जानबूझकर बाहरी एजेंट OpenAPI इंटरफ़ेस से बाहर रखा गया है
