---
title: "Claude Code, Codex, या OpenClaw को Flashcards login संभालने दें"
description: "Flashcards एक open-source agent login flow देता है जो एक discovery URL, email OTP, और long-lived API key से शुरू होता है। अपने agent को एक URL दें, फिर 8-digit email code भेजें ताकि वह account और workspace setup पूरा कर सके।"
date: "2026-03-10"
keywords:
  - "claude code login"
  - "codex login"
  - "email otp api"
  - "agent onboarding"
  - "open source flashcards app"
---

ज़्यादातर login flows अभी भी मानते हैं कि setup के सारे manual steps इंसान ही करेगा।

Login page खोलो, code का इंतज़ार करो, key copy करो, API key बनाओ, उसे किसी दूसरी tool में paste करो, docs समझाओ, और session टूटने पर troubleshooting करो।

यही वह काम है जो tool को आपके लिए संभालना चाहिए।

[Flashcards](https://flashcards-open-source-app.com/) में अब हमारे पास agents के लिए open-source login flow है जो एक discovery URL से शुरू होता है:

`https://api.flashcards-open-source-app.com/v1/`

यही primary entry point है। वही payload `https://api.flashcards-open-source-app.com/v1/agent` पर भी उपलब्ध है, लेकिन current contract `/v1/` से शुरू होता है।

यह URL Claude Code, Codex, या OpenClaw को दें। Agent flow inspect कर सकता है, email code मांग सकता है, उसे verify कर सकता है, API key store कर सकता है, account load कर सकता है, और workspace setup खुद पूरा कर सकता है।

इंसान को सिर्फ दो चीजें करनी हैं:

- email address देना
- latest 8-digit email code भेजना

बस इतना ही।

## एक URL काफी है

Discovery endpoint service description, auth model, first action, और next-step instructions सब एक ही response में लौटाती है।

हर tool के लिए custom setup prompt लिखने के बजाय, आप agent को URL दे सकते हैं और उसे returned instructions follow करने दे सकते हैं।

```text
GET https://api.flashcards-open-source-app.com/v1/
```

उच्च स्तर पर agent तुरंत सीख लेता है कि:

- यह Flashcards service है
- login और signup email OTP पर चलते हैं
- successful verification long-lived API key लौटाती है
- login के बाद next step account और workspace bootstrap है

## Flow कैसा दिखता है

Sequence जानबूझकर छोटा है:

1. Agent discovery endpoint call करता है।
2. Agent user email को `send-code` पर भेजता है।
3. Flashcards 8-digit code भेजता है और `otpSessionToken` लौटाता है।
4. Agent user से latest code मांगता है।
5. Agent code verify करता है और long-lived API key प्राप्त करता है।
6. वह `/v1/agent/me` और `/v1/agent/workspaces` call करता है।
7. सही workspace create या select करता है, फिर `/v1/agent/sql` के जरिए आगे बढ़ता है।

महत्वपूर्ण बात यह है कि agent सिर्फ “login successful” पर नहीं रुकता। वह setup पूरा करके असली पढ़ना-लिखना शुरू करता है।

## Claude Code या Codex के लिए sample prompt

इतना काफी है:

```text
Use this Flashcards discovery URL:
https://api.flashcards-open-source-app.com/v1/

Log in to my Flashcards account, load account context, and select or create the correct workspace.
Ask me only for the latest 8-digit email code when the flow requires it.
```

इसके बाद आपको manually auth sequence समझाने की जरूरत नहीं पड़ती। Discovery endpoint यह काम पहले से करती है।

## पहला request

पहला call:

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

फिर agent OTP stage शुरू करता है:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

User latest code भेजने के बाद agent verification पूरी कर सकता है:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Claude Code on MacBook"
  }'
```

Successful response long-lived API key लौटाती है। इसे तुरंत conversation memory के बाहर store करें:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

## उसके बाद क्या होता है

Verification के बाद agent auth से account usage में शिफ्ट होता है:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. अगर सही workspace नहीं है, `POST /v1/agent/workspaces`
4. ज़रूरत हो तो `POST /v1/agent/workspaces/{workspaceId}/select`
5. फिर `POST /v1/agent/sql`

इस तरह URL सिर्फ login gateway नहीं रहता। यह उस पूरे path की शुरुआत बन जाता है जो agent को सीधे आपके account के भीतर काम करने लायक बना देता है।
