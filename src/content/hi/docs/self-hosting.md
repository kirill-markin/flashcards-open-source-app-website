---
title: स्व-होस्टिंग गाइड
description: Flashcards को PostgreSQL, ऑथ, बैकएंड, वेब और एडमिन के साथ लोकल रूप से चलाएँ या दस्तावेज़ित AWS CDK प्रोडक्शन स्टैक डिप्लॉय करें।
---

Flashcards दो अलग रास्तों का समर्थन करता है: लोकल डेवलपमेंट एनवायरनमेंट और AWS पर प्रोडक्शन डिप्लॉयमेंट। Docker Compose लोकल डेवलपमेंट के लिए PostgreSQL और माइग्रेशन चलाता है; यह प्रोडक्शन डिप्लॉयमेंट का तरीका नहीं है।

## लोकल डेवलपमेंट की ज़रूरतें

- Git
- Bash
- GNU Make
- Docker के साथ Docker Compose
- Node.js 24
- npm

दी गई Docker Compose फ़ाइल अभी PostgreSQL 18.4 चलाती है। आपको अलग से लोकल PostgreSQL इंस्टॉल करने की ज़रूरत नहीं है।

## लोकल क्विक स्टार्ट

```bash
git clone https://github.com/kirill-markin/flashcards-open-source-app.git
cd flashcards-open-source-app
cp .env.example .env
make db-up
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
npm install --prefix apps/admin
```

`make db-up` PostgreSQL शुरू करता है और माइग्रेशन कंटेनर के ज़रिए `scripts/deploy/migrate.sh` चलाता है। `.env.example` से कॉपी किए डिफ़ॉल्ट पासवर्ड के साथ माइग्रेशन ये लोकल रनटाइम कनेक्शन बनाता है:

- बैकएंड: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- ऑथ: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- रिपोर्टिंग: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

अगर आप `.env` में `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` या `REPORTING_DB_PASSWORD` बदलते हैं, तो उससे संबंधित कनेक्शन URL में भी वही बदला हुआ पासवर्ड इस्तेमाल करें।

### तेज़, केवल-लोकल स्टार्ट

बैकएंड Make टार्गेट रूट `.env` लोड नहीं करता। उसकी ज़रूरी लोकल सेटिंग स्पष्ट रूप से पास करें:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

क्लाइंट को अलग-अलग टर्मिनल में चलाएँ:

```bash
make web-dev
make admin-dev
```

यह रास्ता जानबूझकर `make auth-dev` शुरू नहीं करता। `AUTH_MODE=none` स्पष्ट रूप से असुरक्षित और केवल localhost के लिए बना मोड है; इसे कभी भी डिप्लॉय किए एनवायरनमेंट में इस्तेमाल न करें।
यह मुख्य बैकएंड, सार्वजनिक Agent API डिस्कवरी, वेब और एडमिन डेवलपमेंट को कवर करता है, लेकिन Chat V2 उपलब्ध नहीं कराता।

### पूरा लोकल Cognito फ़्लो

ऑथ टार्गेट रूट `.env` लोड करता है, जबकि बैकएंड टार्गेट ऐसा नहीं करता। पहले कॉपी किए `.env` में पुराने `DATABASE_URL` को ऑथ भूमिका के URL से बदलें और अपने वास्तविक Cognito मान जोड़ें:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

ऑथ शुरू करें:

```bash
make auth-dev
```

बैकएंड टर्मिनल में `.env` को स्पष्ट रूप से लोड करें, फिर उस प्रोसेस के लिए उसका ऑथ डेटाबेस URL बैकएंड भूमिका के URL से ओवरराइड करें:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

`make web-dev` और `make admin-dev` को उनके अपने टर्मिनल में चलाएँ। दोनों टार्गेट रूट `.env` लोड करते हैं।

सेवाएँ इन लोकल पतों का इस्तेमाल करती हैं:

| सेवा | पता |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| ऑथ, कॉन्फ़िगर होने पर | `http://localhost:8081` |
| Backend API | `http://localhost:8080/v1` |
| वेब ऐप | `http://localhost:3000` |
| एडमिन ऐप | `http://localhost:3001` |

PostgreSQL और माइग्रेशन कंटेनर को रोकने के लिए:

```bash
make db-down
```

## लोकल कॉन्फ़िगरेशन

`.env.example` से शुरू करें; इसमें उपलब्ध वेरिएबल और केवल लोकल इस्तेमाल वाले मान दस्तावेज़ित हैं। ऊपर बताए अनुसार, ऑथ चलाने से पहले इसका पुराना `DATABASE_URL` बदलें।

मुख्य लोकल सेटिंग ये हैं:

- Docker के अंदर स्कीमा माइग्रेशन के लिए `MIGRATION_DATABASE_URL`
- `make auth-dev` के लिए रूट `.env` में `DATABASE_URL` को `auth_app` भूमिका पर सेट करना
- `make backend-dev` को `backend_app` भूमिका वाला `DATABASE_URL` पास करना
- बैकएंड ऑथेंटिकेशन के लिए `AUTH_MODE` और `ALLOW_INSECURE_LOCAL_AUTH`
- लोकल वेब और एडमिन ओरिजिन के लिए `BACKEND_ALLOWED_ORIGINS`
- ब्राउज़र ऑथेंटिकेशन के लिए `ALLOWED_REDIRECT_URIS` और `COOKIE_DOMAIN`
- वास्तविक OTP का परीक्षण करते समय Cognito और सेशन एन्क्रिप्शन के मान

Agent API बैकएंड का हिस्सा है। बैकएंड शुरू होने के बाद उसका सार्वजनिक लोकल डिस्कवरी दस्तावेज़ `http://localhost:8080/v1/agent` पर उपलब्ध होता है। सुरक्षित Agent ऑपरेशन के लिए `ApiKey` ऑथेंटिकेशन चाहिए और वे `AUTH_MODE=none` रास्ते में उपलब्ध नहीं हैं।

### रास्ते के अनुसार AI का दायरा

ऊपर दिए लोकल कमांड एसिंक्रोनस चैट वर्कर शुरू नहीं करते। तेज़ रास्ता `AUTH_MODE=none` भी इस्तेमाल करता है, जिसे Chat V2 अस्वीकार करता है; OpenAI कुंजी या गेस्ट कोटा जोड़ने से यह रास्ता AI-सक्षम नहीं बनता। पूरा लोकल Cognito फ़्लो समर्थित ऑथ ट्रांसपोर्ट देता है, लेकिन वह भी वर्कर शुरू नहीं करता।

AWS CDK डिप्लॉयमेंट वर्कर Lambda बनाता है और बैकएंड को उसे इनवोक करने के लिए कॉन्फ़िगर करता है। `OPENAI_API_KEY` जैसे प्रदाता क्रेडेंशियल समर्थित ऑथेंटिकेटेड अनुरोधों के लिए मॉडल कॉल चालू करते हैं। `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` अलग से गेस्ट AI चालू करता और सीमित करता है; यह साइन-इन या बेयरर-ऑथेंटिकेटेड AI को नियंत्रित नहीं करता। Langfuse सेटिंग वैकल्पिक ट्रेसिंग कॉन्फ़िगरेशन हैं।

## नेटिव क्लाइंट

इसी रिपॉज़िटरी में iOS और Android क्लाइंट शामिल हैं, लेकिन लोकल वेब/सर्वर कमांड उन्हें बिल्ड या वितरित नहीं करते।

iOS प्रोजेक्ट लोकल API और ऑथ होस्ट यहाँ से पढ़ता है:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

ज़रूरत होने पर इसे उदाहरण से बनाएँ:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

उनके अलग बिल्ड और टेस्ट वर्कफ़्लो के लिए रिपॉज़िटरी की [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) और [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) देखें।

## प्रोडक्शन में AWS CDK का इस्तेमाल होता है

समर्थित प्रोडक्शन डिप्लॉयमेंट में शामिल AWS CDK स्टैक इस्तेमाल होता है। यह विक्रेता-निरपेक्ष होने के बजाय AWS-आधारित है और इसमें ये चीज़ें शामिल हैं:

- VPC और निजी सबनेट
- Amazon RDS पर PostgreSQL 18
- Amazon Cognito से पासवर्डलेस ईमेल OTP
- बैकएंड, ऑथ और MCP सेवाओं के लिए API Gateway और Lambda
- एसिंक्रोनस चैट वर्कर Lambda और Cognito कस्टम ईमेल सेंडर Lambda
- वेब और एडमिन ऐप के लिए S3 और CloudFront
- डेटाबेस, सेशन, ईमेल, मॉनिटरिंग और वैकल्पिक AI क्रेडेंशियल के लिए Secrets Manager
- CloudWatch अलार्म, SNS नोटिफ़िकेशन और RDS बैकअप प्लान
- GitHub Actions OIDC डिप्लॉयमेंट भूमिका
- सार्वजनिक डोमेन के लिए Cloudflare सेटअप स्क्रिप्ट

डिप्लॉयमेंट `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` और `mcp.<domain>` उपलब्ध कराता है। रूट डोमेन का कहीं और इस्तेमाल न होने पर यह एपेक्स रीडायरेक्ट भी बना सकता है।

प्रोडक्शन हेल्पर को ऑपरेटर मशीन से इन चीज़ों के साथ चलाएँ:

- Node.js 24 और npm
- Bash और GNU Make
- चलता हुआ Docker
- डिप्लॉयमेंट अकाउंट में ऑथेंटिकेटेड AWS CLI
- टार्गेट रिपॉज़िटरी में ऑथेंटिकेटेड GitHub CLI
- `curl`, `jq` और Python 3

डिप्लॉय करने से पहले रूट `.env` में ऑपरेटर के मान कॉन्फ़िगर करें। ज़रूरी मानों में AWS क्षेत्र, डोमेन, अलर्ट ईमेल, GitHub रिपॉज़िटरी, Cloudflare क्रेडेंशियल, Resend क्रेडेंशियल और बैकएंड Sentry कॉन्फ़िगरेशन शामिल हैं। OpenAI और Langfuse क्रेडेंशियल वैकल्पिक हैं।

रिपॉज़िटरी की रूट से पहले डिप्लॉय के लिए यह कमांड बेहतर है:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

साफ़ क्लोन से शुरू करने पर अभी ऑथ पैकेज को स्पष्ट रूप से इंस्टॉल करना पड़ता है, क्योंकि डिप्लॉयमेंट हेल्पर उस पैकेज को बंडल करता है लेकिन इंस्टॉल नहीं करता। हेल्पर वास्तविक AWS, Cloudflare और GitHub संसाधन बनाता या बदलता है। इसे चलाने से पहले रिपॉज़िटरी का डिप्लॉयमेंट दस्तावेज़ और क्लाउड लागत देखें। यह CDK बूटस्ट्रैप करता है, इन्फ्रास्ट्रक्चर डिप्लॉय करता है, माइग्रेशन चलाता है, वेब और एडमिन एसेट अपलोड करता है, छोड़े न जाने पर `app`, `admin`, `api`, `auth` और `mcp` के सार्वजनिक DNS रिकॉर्ड कॉन्फ़िगर करता है और GitHub Actions की अनुपलब्ध कॉन्फ़िगरेशन भरता है।

डिप्लॉयमेंट के बाद:

1. `ALERT_EMAIL` इनबॉक्स में भेजे गए SNS सब्सक्रिप्शन की पुष्टि करें।
2. Resend के अलग सेंडिंग-डोमेन DNS रिकॉर्ड कॉन्फ़िगर और सत्यापित करें:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` डिफ़ॉल्ट रूप से सार्वजनिक ऐप्लिकेशन डोमेन के लिए `scripts/cloudflare/setup-dns.sh` चलाता है। यह `setup-resend-domain.sh` नहीं चलाता; बाद वाला `mail.<domain>` के लिए ईमेल-सेंडर रिकॉर्ड बनाकर उस डोमेन को Resend से सत्यापित करता है। अगर आप `--skip-dns` के साथ डिप्लॉय करते हैं, तो AWS CDK गाइड के अनुसार सार्वजनिक रिकॉर्ड अलग से कॉन्फ़िगर करें।

## डेटा पोर्टेबिलिटी

वर्कस्पेस पैकेज इम्पोर्ट और एक्सपोर्ट केवल कार्ड, उनके टैग और संबंधित मीडिया ट्रांसफ़र करता है। यह रिव्यू इतिहास, FSRS शेड्यूलर स्टेट, वर्कस्पेस सेटिंग, पूरे डेक की संरचना या अकाउंट डेटा ट्रांसफ़र नहीं करता।

पैकेज को सामग्री ट्रांसफ़र मानें, न कि संपूर्ण होस्टेड-से-स्व-होस्टेड माइग्रेशन या डिज़ास्टर-रिकवरी बैकअप। डिप्लॉय किए PostgreSQL डेटाबेस और मीडिया स्टोरेज का बैकअप और रिस्टोर ऑपरेटर की ज़िम्मेदारी है।

## ऑपरेटर की ज़िम्मेदारियाँ

स्व-होस्टिंग में आप ये चीज़ें देते और संभालते हैं:

- AWS इन्फ्रास्ट्रक्चर और उसकी लागत
- Cloudflare DNS और डोमेन कॉन्फ़िगरेशन
- Resend ईमेल डिलीवरी क्रेडेंशियल और डोमेन रिकॉर्ड
- ज़रूरी Sentry मॉनिटरिंग कॉन्फ़िगरेशन
- वैकल्पिक AI प्रदाता और Langfuse क्रेडेंशियल
- सीक्रेट, अपग्रेड, माइग्रेशन, अलर्ट, बैकअप और रिस्टोर परीक्षण
- अपने iOS या Android रिलीज़ चाहिए तो नेटिव मोबाइल बिल्ड और वितरण

स्टैक में इनमें से कई सिस्टम के लिए ऑटोमेशन शामिल है, लेकिन इसे फिर भी एक ऑपरेटर चाहिए। Docker Compose इस प्रोडक्शन आर्किटेक्चर की जगह नहीं लेता।

## रिपॉज़िटरी डिप्लॉयमेंट दस्तावेज़

- [रिपॉज़िटरी README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [बैकएंड और वेब डिप्लॉयमेंट गाइड](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK डिप्लॉयमेंट गाइड](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK इन्फ्रास्ट्रक्चर](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
