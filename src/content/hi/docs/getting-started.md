---
title: शुरुआत कैसे करें
description: iPhone, iPad, Mac या Android ऐप, वेब ऐप, किसी AI एजेंट या अपने सर्वर से शुरुआत करें।
---

शुरुआत करने के कई तरीके हैं, सबसे लोकप्रिय तरीके से शुरू करते हुए:

- **iPhone, iPad और Mac ऐप**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Android ऐप**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **होस्टेड वेब ऐप**: [app.nibomo.com](https://app.nibomo.com)
- **AI एजेंट**: [MCP कनेक्टर](/docs/mcp-connector/) या `https://api.nibomo.com/v1/` पर API
- **स्वयं होस्टिंग**: [सेल्फ-होस्टिंग गाइड](/docs/self-hosting/)

## मोबाइल और डेस्कटॉप ऐप

अपने डिवाइस के लिए नेटिव ऐप इंस्टॉल करें:

- iPhone, iPad और Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

ऐप आपके कार्ड डिवाइस पर ही रखते हैं, इसलिए आप ऑफ़लाइन भी रिव्यू कर सकते हैं, और दोबारा ऑनलाइन होने पर सब कुछ सिंक हो जाता है। आप गेस्ट के रूप में शुरू कर सकते हैं और बाद में साइन इन कर सकते हैं।

### होम स्क्रीन विजेट

Nibomo ऐप iPhone, iPad, Mac और Android पर एक समीक्षा विजेट जोड़ता है। यह तीन आकारों में आता है:

- **छोटा**: कितने कार्ड देय हैं और आपकी पढ़ाई का सिलसिला
- **मध्यम**: कितने कार्ड देय हैं और आपके अगले कार्ड का प्रश्न
- **बड़ा**: कितने कार्ड देय हैं, आपका अगला प्रश्न और आपका सिलसिला

जब कुछ भी देय नहीं होता, तो विजेट “सब पूरा हुआ” दिखाता है और बताता है कि अगला कार्ड कब देय होगा। यह कभी उत्तर नहीं दिखाता। समीक्षा खोलने के लिए विजेट पर टैप करें; मध्यम या बड़ा विजेट उसी कार्ड पर समीक्षा खोलता है जो उसमें दिख रहा है। विजेट सभी के लिए मुफ़्त हैं, गेस्ट के लिए भी।

iPhone, iPad या Mac पर विजेट जोड़ने के लिए विजेट गैलरी खोलें, Nibomo चुनें और फिर कोई आकार चुनें। Android पर विजेट की सूची से Nibomo विजेट जोड़ें, फिर उसका आकार बदलें; लेआउट आकार के हिसाब से बदल जाता है।

## होस्टेड वेब ऐप

शुरुआत करने का सबसे तेज़ तरीका होस्टेड वेब ऐप है:

1. [app.nibomo.com](https://app.nibomo.com) खोलें
2. अपने ईमेल पर मिलने वाले passwordless OTP से साइन इन करें
3. कार्ड बनाएँ, देय कार्डों की समीक्षा करें, और अपने कार्यक्षेत्र के डेटा तथा संलग्न फ़ाइलों के साथ AI चैट का उपयोग करें

इस होस्टेड विकल्प के लिए आपको कुछ भी स्थापित करने या सर्वर तैयार करने की जरूरत नहीं पड़ती।

## एजेंट जोड़ना

Claude, ChatGPT और Cursor जैसे MCP क्लाइंट [MCP कनेक्टर गाइड](/docs/mcp-connector/) के ज़रिए जुड़ सकते हैं।

अगर आप Claude Code, Codex, या OpenClaw को सीधे जोड़ना चाहते हैं, तो यहाँ से शुरू करें:

```text
GET https://api.nibomo.com/v1/
```

इस पते से मिलने वाला जवाब एजेंट को email OTP login, लंबे समय तक चलने वाली API key बनाने, खाता लोड करने, workspace तैयार करने, और उपलब्ध SQL surface तक पहुँचने की प्रक्रिया समझाता है।

यही जानकारी `GET /v1/agent` पर भी उपलब्ध है, लेकिन सार्वजनिक उपयोग के लिए `/v1/` ही आधिकारिक प्रवेश बिंदु है।

## स्वयं होस्टिंग

अगर आप इसका अपना संस्करण स्वयं चलाना चाहते हैं, तो [सेल्फ-होस्टिंग गाइड](/docs/self-hosting/) देखें।

## आज आपको क्या मिलता है

- कार्ड, पुनरावलोकन, और AI चैट के लिए होस्टेड वेब ऐप
- local SQLite storage और offline-first sync के साथ नेटिव iPhone, iPad, Mac और Android ऐप
- अलग `api` और `auth` domains पर साझा बैकएंड और प्रमाणीकरण सेवाएँ
- discovery, OTP, और ApiKey auth के जरिए बाहरी एजेंटों को जोड़ने की सार्वजनिक प्रक्रिया
- AWS पर open-source deployment path, जिसमें Postgres मुख्य डेटा स्रोत है

## रिपॉजिटरी की दिशा

यह परियोजना offline-first सोच के साथ बनाई गई है।

आज इस रिपॉजिटरी में वेब ऐप, iOS ऐप, प्रमाणीकरण सेवा, backend API, बाहरी एजेंटों के लिए कनेक्शन प्रवाह, और Google Play पर प्रकाशित Android ऐप शामिल हैं।
