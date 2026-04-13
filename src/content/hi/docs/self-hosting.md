---
title: स्व-होस्टिंग मार्गदर्शिका
description: Flashcards को Postgres, auth, backend और web के साथ अपने लोकल सिस्टम पर चलाएं, या दस्तावेज़ में बताए गए AWS स्टैक को स्वयं डिप्लॉय करें।
---

## आवश्यकताएँ

- Docker
- Node.js 20+
- npm
- दिए गए Docker सेटअप के जरिए PostgreSQL 16+

## त्वरित शुरुआत

```bash
git clone https://github.com/kirill-markin/flashcards-open-source-app.git
cd flashcards-open-source-app
cp .env.example .env
make db-up
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

इसके बाद सेवाओं को अलग-अलग टर्मिनल विंडो में चलाएं:

```bash
make auth-dev
make backend-dev
make web-dev
```

इससे ये सेवाएं शुरू होंगी:

1. `postgres`, पोर्ट `5432` पर
2. `auth`, पोर्ट `8081` पर
3. `backend`, पोर्ट `8080` पर
4. `web`, पोर्ट `3000` पर

लोकल पते:

- `http://localhost:3000` वेब ऐप के लिए
- `http://localhost:8080/v1` बैकएंड API के लिए
- `http://localhost:8081` auth सेवा के लिए

## विन्यास

`.env.example` को `.env` में कॉपी करें और फिर इन मानों को अपने सेटअप के अनुसार समायोजित करें:

- `DATABASE_URL` — Postgres से कनेक्ट करने वाला URL
- `AUTH_MODE` — लोकल उपयोग के लिए `none`, email OTP auth के लिए `cognito`
- `BACKEND_ALLOWED_ORIGINS` — session-authenticated API requests के लिए अनुमति प्राप्त ब्राउज़र स्रोत
- `PUBLIC_API_BASE_URL` और `PUBLIC_AUTH_BASE_URL` — जब आप discovery responses में अपने सार्वजनिक होस्ट दिखाना चाहें, तब वैकल्पिक मान

## iOS का लोकल विन्यास

मुख्य रिपॉज़िटरी में iOS app अपने लोकल API और auth होस्ट की जानकारी यहां से पढ़ता है:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

ज़रूरत हो तो उदाहरण फ़ाइल कॉपी करें:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

इसके बाद इसे अपने लोकल या स्वयं होस्ट किए गए `api` और `auth` domains की ओर निर्देशित करें।

## अद्यतन करना

```bash
git pull
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

डिपेंडेंसी बदलने के बाद लोकल सेवाओं को फिर से शुरू करें।

## AWS पर परिनियोजन

दस्तावेज़ में वर्णित परिनियोजन संरचना इस प्रकार है:

- `app.<domain>` के लिए CloudFront + S3
- `api.<domain>` के लिए API Gateway + Lambda
- `auth.<domain>` के लिए API Gateway + Lambda
- AWS RDS में Postgres
- बिना पासवर्ड वाले email OTP के लिए Cognito
- यदि root domain किसी और उपयोग में नहीं है, तो वैकल्पिक `apex redirect`

डिप्लॉयमेंट की जानकारी यहां देखें:

- [Repository README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Deployment guide](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/deployment.md)
- [AWS CDK infrastructure](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
