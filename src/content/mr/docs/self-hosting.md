---
title: स्वतः होस्टिंग मार्गदर्शक
description: PostgreSQL, प्रमाणीकरण, बॅकएंड, वेब आणि ॲडमिनसह Nibomo लोकल चालवा, किंवा दस्तऐवजीकरण केलेला AWS CDK प्रोडक्शन स्टॅक डिप्लॉय करा.
---

Nibomo दोन वेगळे मार्ग देते: लोकल डेव्हलपमेंट वातावरण आणि AWS वर प्रोडक्शन डिप्लॉयमेंट. Docker Compose लोकल डेव्हलपमेंटसाठी PostgreSQL आणि मायग्रेशन चालवते; ती प्रोडक्शन डिप्लॉयमेंटची पद्धत नाही.

## लोकल डेव्हलपमेंटसाठी आवश्यक गोष्टी

- Git
- Bash
- GNU Make
- Docker Compose सह Docker
- Node.js 24
- npm

दिलेली Docker Compose फाइल सध्या PostgreSQL 18.4 चालवते. वेगळे लोकल PostgreSQL इन्स्टॉल करण्याची गरज नाही.

## लोकल झटपट सुरुवात

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

`make db-up` PostgreSQL सुरू करते आणि मायग्रेशन कंटेनरमधून `scripts/deploy/migrate.sh` चालवते. `.env.example` मधून कॉपी केलेल्या डीफॉल्ट पासवर्डसह, मायग्रेशन पुढील लोकल रनटाइम कनेक्शन तयार करते:

- बॅकएंड: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- प्रमाणीकरण: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- रिपोर्टिंग: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

तुम्ही `.env` मध्ये `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` किंवा `REPORTING_DB_PASSWORD` बदलल्यास, संबंधित कनेक्शन URL मध्येही तोच बदललेला पासवर्ड वापरा.

### फक्त लोकलसाठी जलद सुरुवात

बॅकएंडचे Make टार्गेट रूट `.env` लोड करत नाही. त्याच्या आवश्यक लोकल सेटिंग्ज स्पष्टपणे द्या:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

क्लायंट वेगवेगळ्या टर्मिनलमध्ये चालवा:

```bash
make web-dev
make admin-dev
```

हा मार्ग जाणीवपूर्वक `make auth-dev` सुरू करत नाही. `AUTH_MODE=none` हा स्पष्टपणे असुरक्षित, फक्त localhost साठीचा मोड आहे; डिप्लॉय केलेल्या वातावरणात तो कधीही वापरू नका.
यात मुख्य बॅकएंड, सार्वजनिक Agent API डिस्कव्हरी, वेब आणि ॲडमिन डेव्हलपमेंट समाविष्ट आहे, पण त्यामुळे Chat V2 उपलब्ध होत नाही.

### संपूर्ण लोकल Cognito प्रक्रिया

प्रमाणीकरणाचे टार्गेट रूट `.env` लोड करते, तर बॅकएंडचे टार्गेट करत नाही. आधी कॉपी केलेल्या `.env` मधील जुना `DATABASE_URL` auth रोलच्या URL ने बदला आणि तुमची खरी Cognito मूल्ये जोडा:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

प्रमाणीकरण सेवा सुरू करा:

```bash
make auth-dev
```

बॅकएंडच्या टर्मिनलमध्ये `.env` स्पष्टपणे लोड करा, मग त्या प्रक्रियेसाठी त्यातील auth डेटाबेस URL बॅकएंड रोलच्या URL ने ओव्हरराइड करा:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

`make web-dev` आणि `make admin-dev` त्यांच्या स्वतंत्र टर्मिनलमध्ये चालवा. दोन्ही टार्गेट रूट `.env` लोड करतात.

सेवा पुढील लोकल पत्ते वापरतात:

| सेवा | पत्ता |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| प्रमाणीकरण (कॉन्फिगर केले असल्यास) | `http://localhost:8081` |
| बॅकएंड API | `http://localhost:8080/v1` |
| वेब ॲप | `http://localhost:3000` |
| ॲडमिन ॲप | `http://localhost:3001` |

PostgreSQL आणि मायग्रेशन कंटेनर असे थांबवा:

```bash
make db-down
```

## लोकल कॉन्फिगरेशन

`.env.example` पासून सुरुवात करा; त्यात उपलब्ध व्हेरिएबल आणि कोणती मूल्ये फक्त लोकलसाठी आहेत हे नोंदवलेले आहे. वर दाखवल्याप्रमाणे, प्रमाणीकरण सेवा चालवण्याआधी त्यातील जुना `DATABASE_URL` बदला.

मुख्य लोकल सेटिंग्ज:

- Docker मधील स्कीमा मायग्रेशनसाठी `MIGRATION_DATABASE_URL`
- `make auth-dev` साठी रूट `.env` मध्ये `auth_app` रोलवर सेट केलेला `DATABASE_URL`
- `make backend-dev` साठी `backend_app` रोल म्हणून दिलेला `DATABASE_URL`
- बॅकएंड प्रमाणीकरणासाठी `AUTH_MODE` आणि `ALLOW_INSECURE_LOCAL_AUTH`
- लोकल वेब आणि ॲडमिन ओरिजिनसाठी `BACKEND_ALLOWED_ORIGINS`
- ब्राउझर प्रमाणीकरणासाठी `ALLOWED_REDIRECT_URIS` आणि `COOKIE_DOMAIN`
- खरा OTP तपासताना Cognito आणि सेशन एन्क्रिप्शनची मूल्ये

Agent API हा बॅकएंडचाच भाग आहे. बॅकएंड सुरू झाल्यावर त्याचा सार्वजनिक लोकल डिस्कव्हरी दस्तऐवज `http://localhost:8080/v1/agent` वर उपलब्ध असतो. संरक्षित Agent क्रियांसाठी `ApiKey` प्रमाणीकरण आवश्यक आहे आणि त्या `AUTH_MODE=none` मार्गात उपलब्ध नाहीत.

### मार्गानुसार AI ची व्याप्ती

वरील लोकल कमांड असिंक्रोनस चॅट वर्कर सुरू करत नाहीत. शिवाय जलद मार्ग `AUTH_MODE=none` वापरतो, आणि Chat V2 हा मोड नाकारतो; OpenAI की किंवा अतिथी कोटा जोडल्याने तो मार्ग AI वापरण्याजोगा होत नाही. संपूर्ण लोकल Cognito प्रक्रिया समर्थित प्रमाणीकरण पद्धत पुरवते, पण तीदेखील वर्कर सुरू करत नाही.

AWS CDK डिप्लॉयमेंट वर्कर Lambda तयार करते आणि बॅकएंडला तो कॉल करण्यासाठी कॉन्फिगर करते. `OPENAI_API_KEY` सारखी प्रोव्हायडर क्रेडेन्शियल समर्थित प्रमाणीकृत विनंत्यांसाठी मॉडेल कॉल सक्षम करतात. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` स्वतंत्रपणे अतिथी AI सक्षम करतो आणि मर्यादित करतो; तो साइन इन केलेल्या किंवा bearer द्वारे प्रमाणीकृत AI वर नियंत्रण ठेवत नाही. Langfuse सेटिंग्ज ऐच्छिक ट्रेसिंग कॉन्फिगरेशन आहेत.

## नेटिव्ह क्लायंट

याच रिपॉझिटरीमध्ये iOS आणि Android क्लायंट आहेत, पण लोकल वेब/सर्व्हर कमांड ते बिल्ड किंवा वितरित करत नाहीत.

iOS प्रोजेक्ट लोकल API आणि auth होस्ट येथून वाचतो:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

गरज असेल तेव्हा ती उदाहरण फाइलपासून तयार करा:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

त्यांच्या स्वतंत्र बिल्ड आणि टेस्ट प्रक्रियांसाठी रिपॉझिटरीतील [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) आणि [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) पाहा.

## प्रोडक्शनसाठी AWS CDK

समर्थित प्रोडक्शन डिप्लॉयमेंट म्हणजे सोबत दिलेला AWS CDK स्टॅक. तो कोणत्याही विशिष्ट प्रोव्हायडरपासून स्वतंत्र नसून AWS वर आधारित आहे आणि त्यात हे समाविष्ट आहे:

- VPC आणि खासगी सबनेट
- Amazon RDS वर PostgreSQL 18
- Amazon Cognito द्वारे पासवर्डशिवाय ईमेल OTP
- बॅकएंड, प्रमाणीकरण आणि MCP सेवांसाठी API Gateway आणि Lambda
- असिंक्रोनस चॅट वर्कर Lambda आणि Cognito चा कस्टम ईमेल सेंडर Lambda
- वेब आणि ॲडमिन ॲपसाठी S3 आणि CloudFront
- डेटाबेस, सेशन, ईमेल, मॉनिटरिंग आणि ऐच्छिक AI क्रेडेन्शियलसाठी Secrets Manager
- CloudWatch अलार्म, SNS सूचना आणि RDS बॅकअप योजना
- GitHub Actions OIDC डिप्लॉयमेंट रोल
- सार्वजनिक डोमेनसाठी Cloudflare सेटअप स्क्रिप्ट

डिप्लॉयमेंट `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` आणि `mcp.<domain>` उपलब्ध करते. मूळ डोमेन इतर कशासाठी वापरला जात नसेल, तर ते apex रीडायरेक्टही तयार करू शकते.

प्रोडक्शन हेल्पर ऑपरेटरच्या मशीनवरून चालवा, ज्यावर हे असावे:

- Node.js 24 आणि npm
- Bash आणि GNU Make
- चालू असलेले Docker
- डिप्लॉयमेंट खात्यासाठी प्रमाणीकृत AWS CLI
- लक्ष्य रिपॉझिटरीसाठी प्रमाणीकृत GitHub CLI
- `curl`, `jq` आणि Python 3

डिप्लॉय करण्याआधी रूट `.env` मध्ये ऑपरेटरची मूल्ये कॉन्फिगर करा. आवश्यक मूल्यांमध्ये AWS रीजन, डोमेन, अलर्ट ईमेल, GitHub रिपॉझिटरी, Cloudflare क्रेडेन्शियल, Resend क्रेडेन्शियल आणि बॅकएंडचे Sentry कॉन्फिगरेशन यांचा समावेश आहे. OpenAI आणि Langfuse क्रेडेन्शियल ऐच्छिक आहेत.

रिपॉझिटरीच्या रूटमधून पहिल्या डिप्लॉयमेंटसाठी शिफारस केलेली कमांड:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

स्वच्छ चेकआउटमधून सुरुवात करताना auth चे हे स्पष्ट इन्स्टॉल सध्या आवश्यक आहे, कारण डिप्लॉयमेंट हेल्पर ते पॅकेज बंडल करतो पण इन्स्टॉल करत नाही. हेल्पर खरी AWS, Cloudflare आणि GitHub संसाधने तयार करतो किंवा बदलतो. तो चालवण्याआधी रिपॉझिटरीतील डिप्लॉयमेंट दस्तऐवजीकरण आणि क्लाउडचा खर्च तपासा. तो CDK बूटस्ट्रॅप करतो, पायाभूत सुविधा डिप्लॉय करतो, मायग्रेशन चालवतो, वेब आणि ॲडमिनचे ॲसेट अपलोड करतो, वगळले नसल्यास सार्वजनिक `app`, `admin`, `api`, `auth` आणि `mcp` DNS रेकॉर्ड कॉन्फिगर करतो आणि GitHub Actions चे गहाळ कॉन्फिगरेशन भरतो.

डिप्लॉयमेंटनंतर:

1. `ALERT_EMAIL` इनबॉक्सवर आलेल्या SNS सबस्क्रिप्शनची पुष्टी करा.
2. Resend मधून ईमेल पाठवणाऱ्या डोमेनचे स्वतंत्र DNS रेकॉर्ड कॉन्फिगर करा आणि पडताळा:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` डीफॉल्टनुसार सार्वजनिक ॲप्लिकेशन डोमेनसाठी `scripts/cloudflare/setup-dns.sh` चालवते. ते `setup-resend-domain.sh` चालवत नाही; ही स्क्रिप्ट `mail.<domain>` साठी ईमेल पाठवण्याचे रेकॉर्ड तयार करते आणि Resend सोबत तो डोमेन पडताळते. तुम्ही `--skip-dns` सह डिप्लॉय केल्यास, AWS CDK मार्गदर्शकात सांगितल्याप्रमाणे सार्वजनिक रेकॉर्ड स्वतंत्रपणे कॉन्फिगर करा.

## डेटाची पोर्टेबिलिटी

कार्यक्षेत्र पॅकेजची आयात आणि निर्यात फक्त कार्डे, त्यांचे टॅग आणि संबंधित मीडिया हस्तांतरित करते. उजळणीचा इतिहास, FSRS शेड्युलरची स्थिती, कार्यक्षेत्राच्या सेटिंग्ज, डेकची संपूर्ण रचना किंवा खात्याचा डेटा हस्तांतरित होत नाही.

पॅकेजना सामग्रीचे हस्तांतरण समजा; होस्ट केलेल्या सेवेतून स्वतः होस्ट केलेल्या सेवेत संपूर्ण स्थलांतर किंवा आपत्तीनंतरच्या पुनर्प्राप्तीसाठीचा बॅकअप नव्हे. डिप्लॉय केलेल्या PostgreSQL डेटाबेसचा आणि मीडिया स्टोरेजचा बॅकअप घेणे आणि तो पुनर्संचयित करणे ही ऑपरेटरची जबाबदारी आहे.

## ऑपरेटरच्या जबाबदाऱ्या

स्वतः होस्टिंग म्हणजे पुढील गोष्टी तुम्ही पुरवता आणि सांभाळता:

- AWS पायाभूत सुविधा आणि तिचा खर्च
- Cloudflare DNS आणि डोमेन कॉन्फिगरेशन
- Resend ईमेल वितरणाची क्रेडेन्शियल आणि डोमेन रेकॉर्ड
- आवश्यक Sentry मॉनिटरिंग कॉन्फिगरेशन
- ऐच्छिक AI प्रोव्हायडर आणि Langfuse क्रेडेन्शियल
- सीक्रेट, अपग्रेड, मायग्रेशन, अलर्ट, बॅकअप आणि पुनर्संचयनाची चाचणी
- तुमच्या स्वतःच्या iOS किंवा Android रिलीझ हव्या असल्यास नेटिव्ह मोबाइल बिल्ड आणि वितरण

स्टॅकमध्ये यांपैकी अनेक प्रणालींसाठी ऑटोमेशन आहे, पण तरीही ऑपरेटरची गरज असते. Docker Compose या प्रोडक्शन आर्किटेक्चरची जागा घेत नाही.

## रिपॉझिटरीतील डिप्लॉयमेंट दस्तऐवजीकरण

- [रिपॉझिटरी README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [बॅकएंड आणि वेब डिप्लॉयमेंट मार्गदर्शक](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK डिप्लॉयमेंट मार्गदर्शक](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK पायाभूत सुविधा](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
