---
title: "Claude Code, Codex, या OpenClaw को Flashcards में आपके लिए लॉग इन कैसे करने दें"
description: "Flashcards एजेंटों के लिए एक खुला लॉग-इन तरीका उपलब्ध कराता है, जो एक शुरुआती URL, ईमेल OTP, और लंबे समय तक मान्य API कुंजी पर आधारित है। अपने एजेंट को बस एक लिंक दें, फिर ईमेल से आया 8-अंकों का कोड भेजें, और उसे खाता व कार्य-क्षेत्र की शुरुआती तैयारी पूरी करने दें।"
date: "2026-03-10"
keywords:
  - "claude code login"
  - "codex login"
  - "email otp api"
  - "एजेंट प्रारंभिक सेटअप"
  - "ओपन सोर्स फ्लैशकार्ड ऐप"
  - "ओपन सोर्स API प्रमाणीकरण"
---

ज़्यादातर लॉग-इन प्रक्रियाएँ आज भी यह मानकर बनाई जाती हैं कि सेटअप का सारा काम इंसान अपने हाथ से करेगा।

लॉग-इन पेज खोलिए। कोड आने का इंतज़ार कीजिए। टोकन कॉपी कीजिए। API कुंजी बनाइए। उसे किसी दूसरे टूल में चिपकाइए। एजेंट को ज़रूरी दस्तावेज़ समझाइए। कुछ गड़बड़ हो जाए तो सत्र फिर से ठीक कीजिए।

असल में यही वह काम है जो कोई टूल आपके लिए संभालना चाहिए।

[Flashcards](https://flashcards-open-source-app.com/) में अब हम एजेंटों के लिए एक खुला लॉग-इन तरीका उपलब्ध कराते हैं, जो इस एक शुरुआती URL से शुरू होता है:

`https://api.flashcards-open-source-app.com/v1/`

यही आधिकारिक शुरुआती URL है। वही जानकारी `https://api.flashcards-open-source-app.com/v1/agent` पर भी उपलब्ध है, लेकिन मौजूदा API अनुबंध `/v1/` से शुरू होता है।

यह URL Claude Code, Codex, या OpenClaw को दे दीजिए। एजेंट खुद पूरी प्रक्रिया समझ सकता है, ईमेल वाला कोड मांग सकता है, उसे सत्यापित कर सकता है, API कुंजी सुरक्षित रख सकता है, खाते की जानकारी ले सकता है, और कार्य-क्षेत्र के शुरुआती सेटअप तक आगे बढ़ सकता है।

इंसान को सिर्फ़ दो काम करने होते हैं:

- ईमेल पता साझा करना
- ईमेल में आया ताज़ा 8-अंकों का कोड वापस भेजना

यही इस पूरी प्रक्रिया का मकसद है।

## एक लिंक ही काफी है

Discovery endpoint एक ही जवाब में सेवा का परिचय, प्रमाणीकरण का तरीका, पहला कदम, और आगे के निर्देश लौटा देती है।

इसलिए हर टूल के लिए अलग शुरुआती निर्देश लिखने के बजाय, आप एजेंट को सिर्फ़ यह URL दे सकते हैं और उसे लौटाए गए निर्देशों का पालन करने दे सकते हैं।

```text
GET https://api.flashcards-open-source-app.com/v1/
```

सारांश रूप में एजेंट तुरंत चार बातें समझ लेता है:

- यह Flashcards सेवा है
- लॉग-इन और पंजीकरण दोनों ईमेल OTP से होते हैं
- सफल सत्यापन पर लंबे समय तक मान्य API कुंजी मिलती है
- लॉग-इन के बाद अगला कदम खाते और कार्य-क्षेत्र का शुरुआती सेटअप है

## यह क्रम कैसे चलता है

यह क्रम जानबूझकर छोटा रखा गया है।

1. एजेंट discovery endpoint को कॉल करता है।
2. एजेंट उपयोगकर्ता का ईमेल `send-code` पर भेजता है।
3. Flashcards ईमेल से 8-अंकों का कोड भेजता है और `otpSessionToken` लौटाता है।
4. एजेंट उपयोगकर्ता से वही ताज़ा कोड मांगता है।
5. एजेंट कोड सत्यापित करता है और लंबे समय तक मान्य API कुंजी प्राप्त करता है।
6. एजेंट `/v1/agent/me` और `/v1/agent/workspaces` को कॉल करता है।
7. एजेंट सही कार्य-क्षेत्र बनाता या चुनता है, फिर `/v1/agent/sql` के जरिए आगे बढ़ता है।

यह इसलिए महत्वपूर्ण है क्योंकि एजेंट सिर्फ़ "लॉग-इन सफल हुआ" तक सीमित नहीं रहता। वह बाकी शुरुआती प्रक्रिया भी पूरी कर सकता है और फिर असली पढ़ने-लिखने का काम शुरू कर सकता है।

## Claude Code या Codex के लिए उदाहरण प्रॉम्प्ट

इतना काफी है:

```text
Use this Flashcards discovery URL:
https://api.flashcards-open-source-app.com/v1/

Log in to my Flashcards account, load account context, and select or create the correct workspace.
Ask me only for the latest 8-digit email code when the flow requires it.
```

इसके बाद आपको प्रमाणीकरण का क्रम अलग से समझाने की ज़रूरत नहीं रहती। Endpoint पहले से यह बता देता है।

## OpenClaw के लिए उदाहरण प्रॉम्प्ट

विचार वही है, बस थोड़ा अधिक स्पष्ट:

```text
Connect my Flashcards account using this URL:
https://api.flashcards-open-source-app.com/v1/

Follow the returned instructions, keep the API key secure, load my account, then continue to workspace setup.
If verification is needed, ask me for the latest 8-digit code from the email.
```

## उदाहरण: discovery जवाब

यह पहला अनुरोध है:

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

और जवाब इस तरह बनाया गया है कि टर्मिनल एजेंट बिना अनुमान लगाए आगे बढ़ सकें:

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

## उदाहरण: ईमेल कोड भेजना

जब एजेंट के पास उपयोगकर्ता का ईमेल आ जाता है, तो वह OTP चरण शुरू करता है:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{
    "email": "you@example.com"
  }'
```

Server ईमेल भेजता है और कम समय के लिए मान्य सत्यापन सत्र लौटाता है:

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

इस चरण पर एजेंट केवल उतनी देर रुकता है, जितनी देर उसे उपयोगकर्ता से inbox में आया ताज़ा कोड पूछने में लगती है।

## उदाहरण: कोड सत्यापित करके API कुंजी पाना

जब उपयोगकर्ता ईमेल कोड भेज देता है, तो एजेंट लॉग-इन पूरा कर सकता है:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code": "12345678",
    "otpSessionToken": "...",
    "label": "Claude Code on MacBook"
  }'
```

सफल सत्यापन पर लंबे समय तक मान्य API कुंजी और अगले कदमों के निर्देश मिलते हैं:

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

यहीं वह बिंदु आता है जहाँ एजेंट प्रमाणीकरण के बारे में सोचना छोड़कर खाते का इस्तेमाल शुरू कर देता है।

इस कुंजी को तुरंत चैट स्मृति के बाहर सुरक्षित रखें। सबसे साफ़ तरीका यह है कि इसे एक बार export कर दें और एजेंट को आगे से वही दोबारा इस्तेमाल करने दें:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

## उदाहरण: खाता लोड करना और कार्य-क्षेत्रों तक पहुँचना

अगला अनुरोध एक सामान्य authenticated API कॉल होता है:

```bash
curl https://api.flashcards-open-source-app.com/v1/agent/me \
  -H "Authorization: ApiKey YOUR_API_KEY"
```

यह जवाब एजेंट को बताता है कि अब कार्य-क्षेत्र के शुरुआती सेटअप की ओर बढ़ना है:

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

इसके बाद एजेंट यह सब कर सकता है:

- सभी कार्य-क्षेत्र लोड करना
- अगर एक भी कार्य-क्षेत्र न हो, तो पहला कार्य-क्षेत्र बनाना
- अगर कई कार्य-क्षेत्र हों, तो सही कार्य-क्षेत्र चुनना
- `/v1/agent/openapi.json` पर प्रकाशित अनुबंध देखना
- `POST /v1/agent/sql` के जरिए पढ़ना, लिखना, और SQL introspection करना

यही बात इस लॉग-इन प्रक्रिया को व्यवहार में उपयोगी बनाती है, सिर्फ़ तकनीकी रूप से सही नहीं।

`/v1/openapi.json` और `/v1/swagger.json` पर root spec aliases भी मौजूद हैं, लेकिन एजेंट के लिए दिए गए प्रलेखन लिंक जानबूझकर `/v1/agent/openapi.json` और `/v1/agent/swagger.json` की ओर इशारा करते हैं।

## यह हाथ से किए जाने वाले API कुंजी सेटअप से बेहतर क्यों है

सामान्य API शुरूआती प्रक्रिया अभी भी असुविधाजनक है:

- ब्राउज़र में लॉग इन करना
- सेटिंग्स खोलना
- टोकन हाथ से बनाना
- उसे किसी दूसरे टूल में कॉपी करना
- और दस्तावेज़ खुले रखना ताकि टूल को अगला कदम पता रहे

यह तरीका उस झंझट का बड़ा हिस्सा हटा देता है।

उपयोगकर्ता ईमेल OTP के ज़रिए अपनी पहचान साबित करता है। सेवा सीधे एजेंट को लंबे समय तक मान्य API कुंजी दे देती है। वही जवाब एजेंट को अगले कदम भी बताता रहता है।

यह उपयोगकर्ता के लिए भी सरल है और स्वचालन के लिए भी आसान।

## यह खुला स्रोत है

Flashcards खुला स्रोत है, इसलिए आप पूरे तरीके को किसी बंद व्यवस्था की तरह मानकर भरोसा करने के बजाय खुद देख सकते हैं।

- Repository: [github.com/kirill-markin/flashcards-open-source-app](https://github.com/kirill-markin/flashcards-open-source-app)
- एजेंट discovery route: [apps/backend/src/agentDiscovery.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentDiscovery.ts)
- एजेंट send-code route: [apps/auth/src/routes/agentSendCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentSendCode.ts)
- एजेंट verify-code route: [apps/auth/src/routes/agentVerifyCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentVerifyCode.ts)
- खाते और कार्य-क्षेत्र के शुरुआती envelope: [apps/backend/src/agentSetup.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentSetup.ts)

अगर आपकी दिलचस्पी खुला-स्रोत API प्रमाणीकरण, ईमेल OTP लॉग-इन, या एजेंट के शुरुआती डिज़ाइन में है, तो पढ़ने के लिए यही सबसे महत्वपूर्ण फ़ाइलें हैं।

## इसे आज़माएँ

अगर आप इस तरीके को परखना चाहते हैं, तो अपने एजेंट को यह URL दें:

`https://api.flashcards-open-source-app.com/v1/`

फिर बाकी काम उसे करने दें।

काम के लिंक:

- [Flashcards website](https://flashcards-open-source-app.com/)
- [Hosted app](https://app.flashcards-open-source-app.com/)
- [Getting started](https://flashcards-open-source-app.com/docs/getting-started/)
- [GitHub repository](https://github.com/kirill-markin/flashcards-open-source-app)

अगर उत्पाद खुला स्रोत हो और प्रमाणीकरण का तरीका इतना सीमित और साफ़ हो, तो "एजेंट को संभालने दो" सचमुच काम करना चाहिए। यही इस पूरी प्रक्रिया का उद्देश्य है।
