---
title: API संदर्भ
description: डिस्कव्हरी, OTP द्वारे सुरुवातीचे प्रमाणीकरण, कार्यक्षेत्र सेटअप आणि प्रकाशित SQL वाचन व लेखन इंटरफेससाठी बाह्य एजंट API.
---

## आढावा

हे पान Nibomo साठी बाह्य AI एजंटचा सध्याचा करार स्पष्ट करते.

तुमचा क्लायंट MCP वापरत असेल, तर [MCP कनेक्टर](/docs/mcp-connector/) हा जोडण्याचा सर्वात सोपा मार्ग आहे आणि तो याच डेटा इंटरफेसवर आधारित आहे. हे पान CLI एजंट वापरत असलेला HTTP डिस्कव्हरी, SQL, मार्गदर्शक आणि उजळणी करार स्पष्ट करते.

अधिकृत डिस्कव्हरी प्रवेश बिंदूपासून सुरुवात करा:

```text
GET https://api.nibomo.com/v1/
```

हाच डिस्कव्हरी पेलोड `GET /v1/agent` वरही उपलब्ध आहे, पण `/v1/` हा मुख्य सार्वजनिक प्रवेश बिंदू आहे.

डिस्कव्हरी प्रतिसाद एजंटला पुढील गोष्टी कशा करायच्या ते सांगतो:

- ईमेल OTP लॉगिन सुरू करणे
- OTP च्या बदल्यात दीर्घकाळ वैध राहणारी API की मिळवणे
- खात्याचा संदर्भ लोड करणे
- कार्यक्षेत्र तयार करणे किंवा निवडणे
- प्रकाशित SQL इंटरफेसद्वारे पुढे काम करणे
- संदर्भ मार्गदर्शक मिळवणे आणि एका वेळी एका कार्डाची उजळणी करणे

## रनटाइम डिस्कव्हरी आणि स्रोत

OpenAPI उपलब्ध नाही. खालील चार जुन्या स्पेसिफिकेशन URL आता स्कीमाऐवजी `"openapiAvailable": false` असलेली तीच JSON डिस्कव्हरी सूचना परत करतात:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

सध्याच्या रनटाइम डिस्कव्हरीसाठी `GET https://api.nibomo.com/v1/` वापरा. रनटाइम रूटसाठी परत आलेले `docs.discoveryUrl` आणि अंमलबजावणीच्या तपशिलांसाठी `docs.source.agentRoutesUrl` पाहा.

## सुरुवातीचे प्रमाणीकरण

OTP द्वारे सुरुवातीचे प्रमाणीकरण auth सेवेवर चालते:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

प्रक्रिया अशी आहे:

1. `GET /v1/` कॉल करा.
2. वापरकर्त्याचा ईमेल `send-code` ला पाठवा.
3. प्रतिसादातून `otpSessionToken` वाचा.
4. वापरकर्त्याकडून ईमेलवर आलेला सर्वात नवा 8 अंकी कोड मागा.
5. `code`, `otpSessionToken` आणि `label` सह `verify-code` कॉल करा.
6. परत आलेली API की चॅटच्या स्मृतीबाहेर जतन करा.

शिफारस केलेला एन्व्हायर्नमेंट व्हेरिएबल:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

प्रमाणीकृत विनंत्यांमध्ये हे वापरले जाते:

```text
Authorization: ApiKey <key>
```

सुरुवातीच्या प्रमाणीकरणाचा नमुना क्रम:

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

## लॉगिननंतरचा एजंट इंटरफेस

पडताळणीनंतर सध्याचा एजंट इंटरफेस असा आहे:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (फक्त वाचन)
- `POST /v1/agent/sql/execute` (लेखन)
- `GET /v1/agent/guide/{topic}` (फक्त वाचन)
- `POST /v1/agent/reviews/next` (फक्त वाचन)
- `POST /v1/agent/reviews/reveal` (फक्त वाचन)
- `POST /v1/agent/reviews/submit` (लेखन)

सामान्य सुरुवात अशी दिसते:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. गरज असल्यास, `{"name":"Personal"}` सह `POST /v1/agent/workspaces`
4. गरज असल्यास, `POST /v1/agent/workspaces/{workspaceId}/select`
5. वाचनासाठी `POST /v1/agent/sql/query` आणि लेखनासाठी `POST /v1/agent/sql/execute` वापरा

कार्यक्षेत्राची निवड प्रत्येक API की कनेक्शनसाठी स्पष्टपणे केली जाते. पुढची पायरी अंदाजाने ठरवण्याऐवजी एजंटनी परत आलेला `instructions` मजकूर, रनटाइम रूटसाठी `docs.discoveryUrl` आणि अंमलबजावणीच्या तपशिलांसाठी `docs.source.agentRoutesUrl` यांचे पालन करावे.

SQL आणि उजळणी रूट JSON बॉडीमध्ये ऐच्छिक `workspaceId` देखील स्वीकारतात. तो निवड न बदलता एका कॉलसाठी त्या कार्यक्षेत्राला लक्ष्य करतो; निवडलेले कार्यक्षेत्र वापरायचे असल्यास तो वगळा. कार्यक्षेत्र निवडलेले नसेल आणि `workspaceId` ही दिलेला नसेल, तर हे रूट `409 WORKSPACE_SELECTION_REQUIRED` परत करतात.

## SQL इंटरफेस

`POST /v1/agent/sql/query` हा काटेकोरपणे फक्त वाचनाचा इंटरफेस आहे (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) आणि `POST /v1/agent/sql/execute` हा लेखनाचा इंटरफेस आहे (`INSERT`, `UPDATE`, `DELETE`); एका कॉलमध्ये एकतर सर्व वाचन किंवा सर्व लेखन असावे.

तो जाणीवपूर्वक मर्यादित ठेवला आहे आणि पूर्ण PostgreSQL नाही. हे दस्तऐवज फक्त समर्थित डायलेक्ट स्पष्ट करतात; ते PostgreSQL सुसंगततेचा संदर्भ नाहीत.

कोणताही वाचनाचा मार्ग डेटा दुरुस्त करत नाही, वेळापत्रक पुन्हा मोजत नाही किंवा कार्डाची स्थिती बदलत नाही. कार्ड आणि डेकच्या प्रत्येक लेखनासाठी `POST /v1/agent/sql/execute` वापरा. SQL `review_events` किंवा FSRS वेळापत्रकाची स्थिती लिहू शकत नाही; उजळण्या `POST /v1/agent/reviews/submit` द्वारे नोंदवा.

सध्याचे स्टेटमेंट प्रकार:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

सध्या प्रकाशित लॉजिकल रिसोर्स:

- `workspace`
- `cards`
- `decks`
- `review_events`

टिपा:

- `LIMIT` चे डीफॉल्ट मूल्य `100` आहे आणि कमाल मर्यादाही `100` आहे
- स्थिर पेजिनेशन हवे असल्यास `ORDER BY` वापरा
- स्कीमा शोधण्यासाठी `SHOW TABLES` किंवा `DESCRIBE cards` वापरा
- प्रत्येक SQL कॉल एकाच कार्यक्षेत्रापुरता मर्यादित असतो: बॉडीमधील `workspaceId`, किंवा निवडलेले कार्यक्षेत्र

नमुना विनंती:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

कार्डांसाठी नमुना क्वेरी:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

नमुना बदल:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

OAuth 2.1 (Dynamic Client Registration + PKCE) वापरणारा रिमोट MCP सर्व्हरही `https://mcp.nibomo.com/mcp` वर उपलब्ध आहे. तो हीच SQL विभागणी `sql_query` (काटेकोरपणे फक्त वाचन) आणि `sql_execute` (लेखन) म्हणून देतो, तसेच `list_workspaces`, `get_guide` आणि उजळणीची साधने `next_review_card`, `reveal_answer` व `submit_review` देतो; [MCP कनेक्टर](/docs/mcp-connector/) पाहा.

### सुरक्षा आणि व्याप्ती

SQL इंटरफेस कच्च्या PostgreSQL ऐवजी पार्सरद्वारे नियंत्रित, मर्यादित डायलेक्ट आहे. सुरक्षा मर्यादा अशा आहेत:

- **स्टेटमेंटची बंद परवानगी यादी**: वाचनासाठी फक्त `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` आणि `SELECT`, आणि लेखनासाठी `INSERT`, `UPDATE` आणि `DELETE`. इतर काहीही पार्सिंगच्या वेळीच नाकारले जाते.
- **मर्यादित रिसोर्स**: स्टेटमेंट फक्त `workspace`, `cards`, `decks` आणि `review_events` या रिसोर्सपर्यंत पोहोचू शकतात.
- **प्रत्येक कार्यक्षेत्रापुरती व्याप्ती**: प्रत्येक स्टेटमेंट तुम्हाला प्रवेश असलेल्या एकाच कार्यक्षेत्रापुरते मर्यादित असते, म्हणजे विनंतीच्या बॉडीमधील `workspaceId` किंवा तुमचे निवडलेले कार्यक्षेत्र; इतर टेनंटच्या डेटापर्यंत कोणताही प्रवेश नाही.
- **काटेकोर विनंती बॉडी**: SQL आणि उजळणी रूट अज्ञात बॉडी फील्ड नाकारतात, त्यामुळे चुकीचे स्पेलिंग असलेला `workspaceId` निवडलेल्या कार्यक्षेत्रावर चालण्याऐवजी अयशस्वी होतो.
- **मर्यादा**: प्रत्येक स्टेटमेंटमध्ये जास्तीत जास्त `100` ओळी, प्रत्येक बॅचमध्ये जास्तीत जास्त `50` स्टेटमेंट आणि निकालाची मर्यादा सुमारे `12k` टोकन. बदलांच्या बॅच ॲटॉमिक पद्धतीने लागू होतात.
- **वाचन/लेखन विभागणी**: `sql_query` आणि `list_workspaces` काटेकोरपणे फक्त वाचनासाठी आहेत (`readOnlyHint`) आणि ते कधीही डेटा दुरुस्त करत नाहीत, वेळापत्रक पुन्हा मोजत नाहीत किंवा कार्डाची स्थिती बदलत नाहीत. `sql_execute` हे SQL लेखनाचे एकमेव साधन आहे आणि ते लेखन करते (`destructiveHint`); एका कॉलमध्ये एकतर सर्व वाचन किंवा सर्व लेखन असावे. SQL `review_events` किंवा FSRS वेळापत्रकाची स्थिती लिहू शकत नाही; फक्त `POST /v1/agent/reviews/submit` (MCP मध्ये `submit_review`) उजळणी नोंदवते.

## मार्गदर्शक

`GET /v1/agent/guide/{topic}` `data.guide` मध्ये एक संदर्भ मार्गदर्शक परत करतो; MCP चे `get_guide` साधन देते तोच मजकूर. विषय:

- `sql_dialect`: संपूर्ण SQL व्याकरण, मर्यादा आणि उदाहरणे
- `card_authoring`: कार्डाचा करार, टॅग, डुप्लिकेट तपासणी आणि फॉरमॅटिंग
- `bulk_authoring`: मोठे लेखन काम विभागणे आणि तपासणे
- `review_flow`: उजळणी आणि रेटिंगचे चक्र

अज्ञात विषयासाठी समर्थित विषयांच्या यादीसह `400` उत्तर मिळते. कार्डे तयार करण्याआधी, मोठ्या प्रमाणात लिहिण्याआधी किंवा उजळणी चालवण्याआधी संबंधित मार्गदर्शक मिळवा, आणि एखादे स्टेटमेंट नाकारले गेल्यावर `sql_dialect` पुन्हा वाचा.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## उजळण्या

उजळणी रूटमुळे एजंट शिकणाऱ्याला एका वेळी एक कार्ड विचारू शकतो आणि प्रत्येक रेटिंग कार्डाच्या FSRS वेळापत्रकात जतन करू शकतो. ते MCP उजळणी साधनांसारखेच JSON आर्ग्युमेंट घेतात:

- `POST /v1/agent/reviews/next` हा `cardId` आणि `frontText` असलेले `card` परत करतो, किंवा काहीही बाकी नसेल तेव्हा `card: null`. ऐच्छिक `tags` (यांपैकी कोणताही एक जुळला तरी) किंवा `deckId` रांग मर्यादित करतो, पण दोन्ही एकत्र कधीच नाही; बॉडी नसलेली विनंतीही वैध आहे.
- `POST /v1/agent/reviews/reveal` ला `cardId` आवश्यक आहे आणि तो त्या कार्डाचा `backText` परत करतो.
- `POST /v1/agent/reviews/submit` ला `cardId`, क्लायंटने तयार केलेला `reviewId` UUID, `Again`, `Hard`, `Good` किंवा `Easy` यांपैकी एक `rating` आणि शिकणाऱ्याचा IANA `reviewedTimeZone` आवश्यक आहे. सर्व्हर उजळणीची वेळ नोंदवतो आणि `dueAt`, `state`, `reps` आणि `lapses` यांसह कार्डाचे नवे वेळापत्रक परत करतो.

तिन्ही रूट ऐच्छिक `workspaceId` स्वीकारतात. सबमिट करण्याआधी `reviewId` जतन करा, आणि सबमिशन झाले की नाही याची खात्री नसेल तर तीच विनंती जशीच्या तशी पुन्हा पाठवा; त्यामुळे दुसरी उजळणी कधीच नोंदवली जात नाही. उजळणी रूट पुढील उत्तरेही देऊ शकतात:

- `409 REVIEW_EVENT_CONFLICT`: उजळणी आधीच नोंदवली गेली आहे, आणि `error.details.reviewSchedule` मध्ये कार्डाचे सध्याचे वेळापत्रक असते.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` आधीच दुसऱ्या कार्डाच्या उजळणीची ओळख आहे, त्यामुळे काहीही जतन झाले नाही; नव्या `reviewId` सह पुन्हा सबमिट करा.
- `409 REVIEW_STALE`: कार्डाची जतन केलेली उजळणीची वेळ सर्व्हरच्या सध्याच्या वेळेइतकी किंवा त्यानंतरची आहे; दुसऱ्या कार्डाची उजळणी करा.
- `400 REVIEW_INPUT_INVALID`: एखादे आर्ग्युमेंट गहाळ, अवैध किंवा असमर्थित आहे, यात `deckId` सोबत दिलेले `tags` किंवा कार्यक्षेत्रात वापरला न जाणारा टॅग यांचाही समावेश आहे.

नमुना सबमिशन:

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

## मानवी क्लायंट आणि समक्रमणासाठी API

Nibomo मध्ये मानवी क्लायंट आणि ऑफलाइन-फर्स्ट समक्रमणासाठी स्वतंत्र API देखील आहेत, पण ते बाह्य एजंटसाठीचा मुख्य करार नाहीत:

- ब्राउझरमधील प्रक्रिया सामायिक डोमेनवरील कुकीज आणि CSRF संरक्षण वापरतात
- ऑफलाइन-फर्स्ट क्लायंट `/v1/workspaces/{workspaceId}/sync/push` आणि `/v1/workspaces/{workspaceId}/sync/pull` अंतर्गत अंमलात आणलेले समक्रमण रूट वापरतात
- समक्रमण रूट बाह्य एजंट इंटरफेसपासून वेगळे आहेत
