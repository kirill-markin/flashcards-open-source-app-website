---
title: आर्किटेक्चर
description: सिस्टम का अवलोकन, सार्वजनिक डोमेन, समर्थित क्लाइंट, और मौजूदा offline-first डेटा प्रवाह।
---

## सिस्टम का अवलोकन

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## सिद्धांत

1. `app`, `api`, और `auth` के लिए अलग-अलग सार्वजनिक डोमेन रखे गए हैं
2. Postgres ही अंतिम डेटा स्रोत है
3. iOS क्लाइंट local SQLite और sync के सहारे offline-first ढंग से काम करता है
4. वेब ऐप, iOS ऐप, और बाहरी एजेंट इंटरफ़ेस एक ही workspace मॉडल साझा करते हैं
5. बाहरी एजेंट `GET https://api.flashcards-open-source-app.com/v1/` से शुरू होते हैं

## समर्थित क्लाइंट

- `app.flashcards-open-source-app.com` पर चलने वाला वेब ऐप
- मुख्य रिपॉज़िटरी में local SQLite storage वाला iOS ऐप
- Google Play पर उपलब्ध Android ऐप
- डिस्कवरी, OTP bootstrap, और `Authorization: ApiKey` के ज़रिए जुड़ने वाले बाहरी एजेंट क्लाइंट

## डेटा मॉडल

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## डेटा प्रवाह

### वेब

1. ब्राउज़र `auth.<domain>` के माध्यम से साइन इन करता है।
2. वेब ऐप `api.<domain>` से workspace से जुड़ा डेटा लोड करता है।
3. AI chat अनुरोध `/chat/local-turn` के माध्यम से जाते हैं।
4. review जमा होने पर लिखने के समय scheduler state अपडेट होती है।

### iOS

1. iOS ऐप पहले local SQLite में लिखता है।
2. स्थानीय बदलावों को outbox में कतारबद्ध किया जाता है।
3. Sync `/v1/workspaces/{workspaceId}/sync/push` के माध्यम से बदलाव upload करती है।
4. Sync `/v1/workspaces/{workspaceId}/sync/pull` के माध्यम से दूरस्थ बदलाव डाउनलोड करती है।
5. स्थानीय database इन बदलावों को apply करता है और sync cursor को आगे बढ़ाता है।

### बाहरी एजेंट

1. एजेंट `GET /v1/` से शुरू होते हैं।
2. OTP bootstrap `auth.<domain>` पर चलता है।
3. एजेंट को एक long-lived API key मिलती है।
4. एजेंट `/v1/agent/me` लोड करता है, workspaces की सूची पढ़ता है, ज़रूरत पड़ने पर एक चुनता है, और फिर `/v1/agent/sql` का उपयोग करता है।

## शेड्यूलिंग

Flashcards में review scheduler के लिए FSRS का उपयोग होता है।

कार्यान्वयन संबंधी टिप्पणियाँ:

- backend और iOS, FSRS के ऐसे इम्प्लीमेंटेशन बनाए रखते हैं जो एक-दूसरे से मेल खाते हैं
- वेब ऐप scheduling data contract के अनुरूप रहता है, लेकिन scheduler की तीसरी अलग implementation शामिल नहीं करता
- workspace-level scheduler settings में desired retention, learning steps, relearning steps, maximum interval, और fuzz शामिल होते हैं
- वास्तविक review timestamp `reviewedAtClient` से लिया जाता है

विस्तृत डेटा अनुबंध के लिए [FSRS scheduling logic in the main repository](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) देखें।

## प्रमाणीकरण

- Cognito के ज़रिए email OTP
- होस्ट किए गए वेब ऐप के लिए shared-domain browser session cookies
- `auth.<domain>` पर agent OTP bootstrap, जिससे long-lived ApiKey मिलता है
- स्थानीय development के लिए `AUTH_MODE=none`
- production-जैसी auth व्यवस्था के लिए `AUTH_MODE=cognito`

## परिनियोजन संरचना

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda backend
- `auth.<domain>` -> API Gateway + Lambda auth service
- AWS RDS पर Postgres

apex डोमेन अलग मार्केटिंग साइट पर रह सकता है। अगर bootstrap के दौरान वह खाली हो, तो इन्फ्रास्ट्रक्चर उसे अस्थायी रूप से `app.<domain>` पर redirect कर सकता है।
