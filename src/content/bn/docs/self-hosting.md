---
title: সেলফ-হোস্টিং গাইড
description: PostgreSQL, অথেনটিকেশন, ব্যাকএন্ড, ওয়েব ও অ্যাডমিনসহ Nibomo লোকালি চালান, অথবা ডকুমেন্টেশনে বর্ণিত AWS CDK প্রোডাকশন স্ট্যাক ডিপ্লয় করুন।
---

Nibomo দুটি আলাদা পথ সমর্থন করে: একটি লোকাল ডেভেলপমেন্ট পরিবেশ আর AWS-এ একটি প্রোডাকশন ডিপ্লয়মেন্ট। Docker Compose লোকাল ডেভেলপমেন্টের জন্য PostgreSQL ও মাইগ্রেশন চালায়; এটি প্রোডাকশন ডিপ্লয়মেন্টের পদ্ধতি নয়।

## লোকাল ডেভেলপমেন্টের প্রয়োজনীয়তা

- Git
- Bash
- GNU Make
- Docker, সঙ্গে Docker Compose
- Node.js 24
- npm

দেওয়া Docker Compose ফাইলটি বর্তমানে PostgreSQL 18.4 চালায়। আলাদা করে লোকালি PostgreSQL ইনস্টল করার দরকার নেই।

## লোকালি দ্রুত শুরু

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

`make db-up` PostgreSQL চালু করে এবং মাইগ্রেশন কনটেইনারের মাধ্যমে `scripts/deploy/migrate.sh` চালায়। `.env.example` থেকে কপি করা ডিফল্ট পাসওয়ার্ড থাকলে মাইগ্রেশন এই লোকাল রানটাইম সংযোগগুলো তৈরি করে:

- ব্যাকএন্ড: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- অথেনটিকেশন: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- রিপোর্টিং: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

`.env`-এ `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` বা `REPORTING_DB_PASSWORD` বদলালে সংশ্লিষ্ট সংযোগের URL-এও সেই বদলানো পাসওয়ার্ডই ব্যবহার করুন।

### দ্রুত, শুধু লোকাল শুরু

ব্যাকএন্ডের Make টার্গেট রুটের `.env` লোড করে না। এর প্রয়োজনীয় লোকাল সেটিংস স্পষ্টভাবে দিন:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

ক্লায়েন্টগুলো আলাদা আলাদা টার্মিনালে চালান:

```bash
make web-dev
make admin-dev
```

এই পথ ইচ্ছাকৃতভাবে `make auth-dev` চালু করে না। `AUTH_MODE=none` একটি স্পষ্টভাবে অনিরাপদ, কেবল localhost-এর মোড; কোনো ডিপ্লয় করা পরিবেশে এটি কখনো ব্যবহার করবেন না।
এটি মূল ব্যাকএন্ড, পাবলিক Agent API ডিসকভারি, ওয়েব ও অ্যাডমিনের ডেভেলপমেন্ট কভার করে, কিন্তু এতে Chat V2 পাওয়া যায় না।

### পূর্ণ লোকাল Cognito ফ্লো

অথেনটিকেশন টার্গেট রুটের `.env` লোড করে, কিন্তু ব্যাকএন্ড টার্গেট করে না। প্রথমে কপি করা `.env`-এ পুরোনো `DATABASE_URL`-কে অথেনটিকেশন রোলের URL দিয়ে বদলে দিন এবং আপনার আসল Cognito মানগুলো যোগ করুন:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

অথেনটিকেশন চালু করুন:

```bash
make auth-dev
```

ব্যাকএন্ডের টার্মিনালে স্পষ্টভাবে `.env` লোড করুন, তারপর সেই প্রসেসের জন্য এর অথেনটিকেশন ডেটাবেস URL-কে ব্যাকএন্ড রোলের URL দিয়ে ওভাররাইড করুন:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

`make web-dev` ও `make admin-dev` তাদের নিজস্ব টার্মিনালে চালান। দুটো টার্গেটই রুটের `.env` লোড করে।

সার্ভিসগুলো এই লোকাল ঠিকানা ব্যবহার করে:

| সার্ভিস | ঠিকানা |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| অথেনটিকেশন, কনফিগার করা থাকলে | `http://localhost:8081` |
| ব্যাকএন্ড API | `http://localhost:8080/v1` |
| ওয়েব অ্যাপ | `http://localhost:3000` |
| অ্যাডমিন অ্যাপ | `http://localhost:3001` |

PostgreSQL আর মাইগ্রেশন কনটেইনার বন্ধ করুন এভাবে:

```bash
make db-down
```

## লোকাল কনফিগারেশন

`.env.example` থেকে শুরু করুন; এতে উপলব্ধ ভেরিয়েবলগুলো আর কোন মানগুলো কেবল লোকালের জন্য, তা লেখা আছে। অথেনটিকেশন চালানোর আগে এর পুরোনো `DATABASE_URL` বদলে দিন, যেমন ওপরে দেখানো হয়েছে।

মূল লোকাল সেটিংসগুলো হলো:

- Docker-এর ভেতরে স্কিমা মাইগ্রেশনের জন্য `MIGRATION_DATABASE_URL`
- `make auth-dev`-এর জন্য রুটের `.env`-এ `auth_app` রোলে সেট করা `DATABASE_URL`
- `make backend-dev`-এর জন্য `backend_app` রোল হিসেবে দেওয়া `DATABASE_URL`
- ব্যাকএন্ডের অথেনটিকেশনের জন্য `AUTH_MODE` ও `ALLOW_INSECURE_LOCAL_AUTH`
- লোকাল ওয়েব ও অ্যাডমিন অরিজিনের জন্য `BACKEND_ALLOWED_ORIGINS`
- ব্রাউজারের অথেনটিকেশনের জন্য `ALLOWED_REDIRECT_URIS` ও `COOKIE_DOMAIN`
- আসল OTP পরীক্ষা করার সময় Cognito ও সেশন এনক্রিপশনের মানগুলো

Agent API ব্যাকএন্ডেরই অংশ। ব্যাকএন্ড চালু হওয়ার পর এর পাবলিক লোকাল ডিসকভারি ডকুমেন্ট `http://localhost:8080/v1/agent`-এ পাওয়া যায়। সুরক্ষিত Agent অপারেশনের জন্য `ApiKey` অথেনটিকেশন লাগে, আর `AUTH_MODE=none` পথে এগুলো পাওয়া যায় না।

### কোন পথে কতটা AI

ওপরের লোকাল কমান্ডগুলো অ্যাসিঙ্ক্রোনাস চ্যাট ওয়ার্কার চালু করে না। দ্রুত পথটি `AUTH_MODE=none`-ও ব্যবহার করে, যা Chat V2 প্রত্যাখ্যান করে; একটি OpenAI কী বা গেস্ট কোটা যোগ করলেও সেই পথে AI চলে না। পূর্ণ লোকাল Cognito ফ্লো একটি সমর্থিত অথেনটিকেশন ট্রান্সপোর্ট দেয়, কিন্তু তখনও ওয়ার্কার চালু করে না।

AWS CDK ডিপ্লয়মেন্ট ওয়ার্কার Lambda তৈরি করে এবং ব্যাকএন্ডকে সেটি চালানোর জন্য কনফিগার করে। `OPENAI_API_KEY`-এর মতো প্রোভাইডারের ক্রেডেনশিয়াল সমর্থিত অথেনটিকেটেড অনুরোধে মডেল কল চালু করে। `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` আলাদাভাবে গেস্ট AI চালু ও সীমিত করে; এটি সাইন ইন করা বা bearer দিয়ে অথেনটিকেটেড AI নিয়ন্ত্রণ করে না। Langfuse সেটিংস হলো ঐচ্ছিক ট্রেসিং কনফিগারেশন।

## নেটিভ ক্লায়েন্ট

একই রিপোজিটরিতে iOS ও Android ক্লায়েন্ট আছে, কিন্তু লোকাল ওয়েব/সার্ভারের কমান্ডগুলো সেগুলো বিল্ড বা বিতরণ করে না।

iOS প্রজেক্ট লোকাল API ও অথেনটিকেশন হোস্ট পড়ে এখান থেকে:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

দরকার হলে উদাহরণ থেকে এটি তৈরি করুন:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

তাদের আলাদা বিল্ড ও টেস্ট ওয়ার্কফ্লোর জন্য রিপোজিটরির [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) ও [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) দেখুন।

## প্রোডাকশনে AWS CDK ব্যবহার হয়

সমর্থিত প্রোডাকশন ডিপ্লয়মেন্ট হলো অন্তর্ভুক্ত AWS CDK স্ট্যাক। এটি ভেন্ডর-নিরপেক্ষ নয়, বরং AWS-ভিত্তিক, এবং এতে আছে:

- একটি VPC ও প্রাইভেট সাবনেট
- Amazon RDS-এ PostgreSQL 18
- Amazon Cognito দিয়ে পাসওয়ার্ড ছাড়া ইমেইল OTP
- ব্যাকএন্ড, অথেনটিকেশন ও MCP সার্ভিসের জন্য API Gateway ও Lambda
- একটি অ্যাসিঙ্ক্রোনাস চ্যাট ওয়ার্কার Lambda আর একটি Cognito কাস্টম ইমেইল সেন্ডার Lambda
- ওয়েব ও অ্যাডমিন অ্যাপের জন্য S3 ও CloudFront
- ডেটাবেস, সেশন, ইমেইল, মনিটরিং আর ঐচ্ছিক AI ক্রেডেনশিয়ালের জন্য Secrets Manager
- CloudWatch অ্যালার্ম, SNS নোটিফিকেশন আর একটি RDS ব্যাকআপ প্ল্যান
- একটি GitHub Actions OIDC ডিপ্লয়মেন্ট রোল
- পাবলিক ডোমেইনের জন্য Cloudflare সেটআপ স্ক্রিপ্ট

ডিপ্লয়মেন্টটি `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` ও `mcp.<domain>` উন্মুক্ত করে। রুট ডোমেইন অন্য কোনো কাজে ব্যবহার না হলে এটি একটি অ্যাপেক্স রিডাইরেক্টও তৈরি করতে পারে।

প্রোডাকশন হেল্পারটি এমন একটি অপারেটর মেশিন থেকে চালান, যেখানে আছে:

- Node.js 24 ও npm
- Bash ও GNU Make
- চালু অবস্থায় Docker
- ডিপ্লয়মেন্ট অ্যাকাউন্টে অথেনটিকেটেড AWS CLI
- টার্গেট রিপোজিটরিতে অথেনটিকেটেড GitHub CLI
- `curl`, `jq` ও Python 3

ডিপ্লয় করার আগে রুটের `.env`-এ অপারেটরের মানগুলো কনফিগার করুন। প্রয়োজনীয় মানের মধ্যে আছে AWS রিজিয়ন, ডোমেইন, অ্যালার্টের ইমেইল, GitHub রিপোজিটরি, Cloudflare ক্রেডেনশিয়াল, Resend ক্রেডেনশিয়াল আর ব্যাকএন্ডের Sentry কনফিগারেশন। OpenAI ও Langfuse ক্রেডেনশিয়াল ঐচ্ছিক।

রিপোজিটরির রুট থেকে প্রথম ডিপ্লয়মেন্টের পছন্দের কমান্ড হলো:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

পরিষ্কার চেকআউট থেকে বর্তমানে অথেনটিকেশন প্যাকেজটি আলাদাভাবে ইনস্টল করা জরুরি, কারণ ডিপ্লয়মেন্ট হেল্পার প্যাকেজটি বান্ডল করে কিন্তু ইনস্টল করে না। হেল্পারটি আসল AWS, Cloudflare ও GitHub রিসোর্স তৈরি করে বা বদলায়। এটি চালানোর আগে রিপোজিটরির ডিপ্লয়মেন্ট ডকুমেন্টেশন আর ক্লাউডের খরচ দেখে নিন। এটি CDK বুটস্ট্র্যাপ করে, ইনফ্রাস্ট্রাকচার ডিপ্লয় করে, মাইগ্রেশন চালায়, ওয়েব ও অ্যাডমিনের অ্যাসেট আপলোড করে, বাদ না দিলে পাবলিক `app`, `admin`, `api`, `auth` ও `mcp` DNS রেকর্ড কনফিগার করে, আর GitHub Actions-এর অনুপস্থিত কনফিগারেশন পূরণ করে।

ডিপ্লয়মেন্টের পরে:

1. `ALERT_EMAIL` ইনবক্সে পাঠানো SNS সাবস্ক্রিপশন নিশ্চিত করুন।
2. Resend-এর পাঠানোর ডোমেইনের আলাদা DNS রেকর্ডগুলো কনফিগার ও যাচাই করুন:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` ডিফল্টভাবে পাবলিক অ্যাপ্লিকেশন ডোমেইনের জন্য `scripts/cloudflare/setup-dns.sh` চালায়। এটি `setup-resend-domain.sh` চালায় না; শেষেরটি `mail.<domain>`-এর জন্য ইমেইল পাঠানোর রেকর্ড তৈরি করে এবং Resend-এ সেই ডোমেইন যাচাই করে। `--skip-dns` দিয়ে ডিপ্লয় করলে AWS CDK গাইডে বর্ণিত পদ্ধতিতে পাবলিক রেকর্ডগুলো আলাদাভাবে কনফিগার করুন।

## ডেটা স্থানান্তরযোগ্যতা

ওয়ার্কস্পেসের প্যাকেজ ইমপোর্ট ও এক্সপোর্ট কেবল কার্ড, তাদের ট্যাগ আর সংশ্লিষ্ট মিডিয়া স্থানান্তর করে। এটি পুনরালোচনার ইতিহাস, FSRS শিডিউলারের অবস্থা, ওয়ার্কস্পেসের সেটিংস, পূর্ণ ডেকের কাঠামো বা অ্যাকাউন্টের ডেটা স্থানান্তর করে না।

প্যাকেজকে কনটেন্ট স্থানান্তর হিসেবে দেখুন, হোস্ট করা থেকে সেলফ-হোস্টেডে পূর্ণ মাইগ্রেশন বা দুর্যোগ পুনরুদ্ধারের ব্যাকআপ হিসেবে নয়। ডিপ্লয় করা PostgreSQL ডেটাবেস ও মিডিয়া স্টোরেজের ব্যাকআপ ও পুনরুদ্ধারের দায়িত্ব অপারেটরের।

## অপারেটরের দায়িত্ব

সেলফ-হোস্টিং মানে আপনি নিজে দেবেন ও রক্ষণাবেক্ষণ করবেন:

- AWS ইনফ্রাস্ট্রাকচার ও তার খরচ
- Cloudflare DNS ও ডোমেইন কনফিগারেশন
- Resend ইমেইল পাঠানোর ক্রেডেনশিয়াল ও ডোমেইন রেকর্ড
- প্রয়োজনীয় Sentry মনিটরিং কনফিগারেশন
- ঐচ্ছিক AI প্রোভাইডার ও Langfuse ক্রেডেনশিয়াল
- সিক্রেট, আপগ্রেড, মাইগ্রেশন, অ্যালার্ট, ব্যাকআপ আর পুনরুদ্ধারের পরীক্ষা
- নিজের iOS বা Android রিলিজ চাইলে নেটিভ মোবাইল বিল্ড ও বিতরণ

স্ট্যাকে এসবের অনেকগুলোর জন্য অটোমেশন আছে, তবুও একজন অপারেটর লাগে। Docker Compose এই প্রোডাকশন আর্কিটেকচারের বিকল্প নয়।

## রিপোজিটরির ডিপ্লয়মেন্ট ডকুমেন্টেশন

- [রিপোজিটরির README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [ব্যাকএন্ড ও ওয়েব ডিপ্লয়মেন্ট গাইড](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK ডিপ্লয়মেন্ট গাইড](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK ইনফ্রাস্ট্রাকচার](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
