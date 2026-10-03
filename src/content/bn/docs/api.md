---
title: API রেফারেন্স
description: "বাইরের এজেন্টের API: ডিসকভারি, OTP দিয়ে প্রাথমিক অথেনটিকেশন, ওয়ার্কস্পেস সেটআপ আর প্রকাশিত পড়া ও লেখার SQL ইন্টারফেস।"
---

## সারসংক্ষেপ

এই পেজে বাইরের AI এজেন্টদের জন্য Nibomo-র বর্তমান কন্ট্র্যাক্ট বর্ণনা করা হয়েছে।

আপনার ক্লায়েন্ট MCP সমর্থন করলে [MCP কানেক্টর](/docs/mcp-connector/) যুক্ত হওয়ার
সবচেয়ে সহজ উপায়, আর এটি এই একই ডেটা ইন্টারফেসকে ঘিরে কাজ করে। এই পেজে CLI এজেন্টদের
ব্যবহৃত HTTP ডিসকভারি, SQL, গাইড ও পুনরালোচনার কন্ট্র্যাক্ট বর্ণনা করা হয়েছে।

আনুষ্ঠানিক ডিসকভারি প্রবেশপথ থেকে শুরু করুন:

```text
GET https://api.nibomo.com/v1/
```

একই ডিসকভারি পেলোড `GET /v1/agent`-এও পাওয়া যায়, তবে মূল প্রকাশ্য প্রবেশপথ হলো `/v1/`।

ডিসকভারি রেসপন্স এজেন্টকে জানায় কীভাবে:

- ইমেইল OTP লগইন শুরু করতে হয়
- OTP-র বদলে দীর্ঘমেয়াদি API কী নিতে হয়
- অ্যাকাউন্টের প্রসঙ্গ লোড করতে হয়
- ওয়ার্কস্পেস তৈরি বা বেছে নিতে হয়
- প্রকাশিত SQL ইন্টারফেস দিয়ে এগিয়ে যেতে হয়
- রেফারেন্স গাইড আনতে হয় আর একবারে একটি করে কার্ড পুনরালোচনা করতে হয়

## রানটাইম ডিসকভারি ও সোর্স

OpenAPI পাওয়া যায় না। নিচের চারটি আগের স্পেসিফিকেশন URL এখন স্কিমার বদলে `"openapiAvailable": false` সহ একই JSON ডিসকভারি নোটিশ ফেরত দেয়:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

বর্তমান রানটাইম ডিসকভারির জন্য `GET https://api.nibomo.com/v1/` ব্যবহার করুন। রানটাইম রুটের জন্য ফেরত আসা `docs.discoveryUrl` আর বাস্তবায়নের বিস্তারিতের জন্য `docs.source.agentRoutesUrl` অনুসরণ করুন।

## প্রাথমিক অথেনটিকেশন

OTP দিয়ে প্রাথমিক অথেনটিকেশন চলে অথেনটিকেশন সার্ভিসে:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

ধাপগুলো হলো:

1. `GET /v1/` কল করুন।
2. ব্যবহারকারীর ইমেইল `send-code`-এ পাঠান।
3. রেসপন্স থেকে `otpSessionToken` পড়ুন।
4. ব্যবহারকারীর কাছে ইমেইলে আসা সর্বশেষ ৮ অঙ্কের কোডটি চান।
5. `code`, `otpSessionToken` ও `label` দিয়ে `verify-code` কল করুন।
6. ফেরত আসা API কী চ্যাটের মেমরির বাইরে সংরক্ষণ করুন।

প্রস্তাবিত এনভায়রনমেন্ট ভেরিয়েবল:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

অথেনটিকেটেড অনুরোধে ব্যবহার হয়:

```text
Authorization: ApiKey <key>
```

প্রাথমিক অথেনটিকেশনের উদাহরণ:

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

## লগইনের পরে এজেন্টের ইন্টারফেস

যাচাইয়ের পরে এজেন্টের বর্তমান ইন্টারফেস হলো:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (শুধু পড়া)
- `POST /v1/agent/sql/execute` (লেখা)
- `GET /v1/agent/guide/{topic}` (শুধু পড়া)
- `POST /v1/agent/reviews/next` (শুধু পড়া)
- `POST /v1/agent/reviews/reveal` (শুধু পড়া)
- `POST /v1/agent/reviews/submit` (লেখা)

সাধারণত প্রাথমিক সেটআপ এমন হয়:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. দরকার হলে `{"name":"Personal"}` দিয়ে `POST /v1/agent/workspaces`
4. দরকার হলে `POST /v1/agent/workspaces/{workspaceId}/select`
5. পড়ার জন্য `POST /v1/agent/sql/query` আর লেখার জন্য `POST /v1/agent/sql/execute` ব্যবহার করুন

ওয়ার্কস্পেস বেছে নেওয়া প্রতিটি API কী সংযোগের জন্য আলাদাভাবে, স্পষ্টভাবে করতে হয়। পরের ধাপ আন্দাজ করার বদলে এজেন্টের উচিত ফেরত আসা `instructions` টেক্সট, রানটাইম রুটের জন্য `docs.discoveryUrl` আর বাস্তবায়নের বিস্তারিতের জন্য `docs.source.agentRoutesUrl` অনুসরণ করা।

SQL ও পুনরালোচনার রুট JSON বডিতে ঐচ্ছিক `workspaceId`-ও গ্রহণ করে। এটি বাছাই না বদলে একটি কলের জন্য সেই ওয়ার্কস্পেসকে লক্ষ্য করে; বেছে নেওয়া ওয়ার্কস্পেস ব্যবহার করতে এটি বাদ দিন। বাছাই বা `workspaceId` কোনোটিই না থাকলে রুটগুলো `409 WORKSPACE_SELECTION_REQUIRED` ফেরত দেয়।

## SQL ইন্টারফেস

`POST /v1/agent/sql/query` কঠোরভাবে শুধু পড়ার ইন্টারফেস (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), আর `POST /v1/agent/sql/execute` লেখার ইন্টারফেস (`INSERT`, `UPDATE`, `DELETE`); একটি কলে হয় সবই পড়া, নয়তো সবই লেখা থাকতে হবে।

এটি ইচ্ছাকৃতভাবে সীমিত এবং পূর্ণাঙ্গ PostgreSQL নয়। এই ডকসে কেবল সমর্থিত
ডায়ালেক্ট বর্ণনা করা হয়েছে, এটি PostgreSQL সামঞ্জস্যের কোনো রেফারেন্স নয়।

পড়ার কোনো পথ ডেটা মেরামত করে না, শিডিউলিং আবার হিসাব করে না বা কার্ডের অবস্থা বদলায় না।
কার্ড ও ডেকে প্রতিটি লেখার জন্য `POST /v1/agent/sql/execute` ব্যবহার করুন। SQL দিয়ে
`review_events` বা FSRS শিডিউলিংয়ের অবস্থা লেখা যায় না; পুনরালোচনা রেকর্ড করুন
`POST /v1/agent/reviews/submit` দিয়ে।

বর্তমান স্টেটমেন্টের ধরন:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

প্রকাশিত লজিক্যাল রিসোর্সগুলো বর্তমানে হলো:

- `workspace`
- `cards`
- `decks`
- `review_events`

নোট:

- `LIMIT`-এর ডিফল্ট `100` এবং সর্বোচ্চও `100`
- স্থির পেজিনেশন দরকার হলে `ORDER BY` ব্যবহার করুন
- স্কিমা জানতে `SHOW TABLES` বা `DESCRIBE cards` ব্যবহার করুন
- প্রতিটি SQL কল একটি ওয়ার্কস্পেসের মধ্যে সীমাবদ্ধ: বডিতে থাকা `workspaceId`, নয়তো বেছে নেওয়া ওয়ার্কস্পেস

অনুরোধের উদাহরণ:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

কার্ড কোয়েরির উদাহরণ:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

পরিবর্তনের উদাহরণ:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

OAuth 2.1 (Dynamic Client Registration + PKCE) ব্যবহার করে `https://mcp.nibomo.com/mcp`-এ একটি রিমোট MCP সার্ভারও আছে। এটি `sql_query` (কঠোরভাবে শুধু পড়া) ও `sql_execute` (লেখা) হিসেবে একই SQL বিভাজন দেয়, সঙ্গে আছে `list_workspaces`, `get_guide` আর পুনরালোচনার টুল `next_review_card`, `reveal_answer` ও `submit_review`; দেখুন [MCP কানেক্টর](/docs/mcp-connector/)।

### নিরাপত্তা ও পরিধি

SQL ইন্টারফেস সরাসরি PostgreSQL নয়, বরং পার্সার দিয়ে নিয়ন্ত্রিত একটি সীমাবদ্ধ ডায়ালেক্ট। সুরক্ষাব্যবস্থাগুলো হলো:

- **স্টেটমেন্টের বদ্ধ অনুমোদিত তালিকা**: পড়ার জন্য কেবল `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` ও `SELECT`, আর লেখার জন্য `INSERT`, `UPDATE` ও `DELETE`। বাকি সবকিছু পার্স করার সময়েই প্রত্যাখ্যাত হয়।
- **সীমিত রিসোর্স**: স্টেটমেন্ট কেবল `workspace`, `cards`, `decks` ও `review_events` রিসোর্স স্পর্শ করতে পারে।
- **ওয়ার্কস্পেস-ভিত্তিক পরিধি**: প্রতিটি স্টেটমেন্ট আপনার প্রবেশাধিকার থাকা একটি ওয়ার্কস্পেসের মধ্যে সীমাবদ্ধ, হয় অনুরোধের বডিতে থাকা `workspaceId`, নয়তো আপনার বেছে নেওয়া ওয়ার্কস্পেস; এক টেন্যান্ট থেকে অন্য টেন্যান্টে প্রবেশের সুযোগ নেই।
- **কঠোর অনুরোধ বডি**: SQL ও পুনরালোচনার রুট অজানা কোনো বডি ফিল্ড প্রত্যাখ্যান করে, তাই বানান ভুল করা `workspaceId` বেছে নেওয়া ওয়ার্কস্পেসে চলার বদলে ব্যর্থ হয়।
- **সীমা**: প্রতি স্টেটমেন্টে সর্বোচ্চ `100` সারি, প্রতি ব্যাচে সর্বোচ্চ `50` স্টেটমেন্ট, আর ফলাফলের সীমা মোটামুটি `12k` টোকেন। পরিবর্তনের ব্যাচ অ্যাটমিকভাবে প্রয়োগ হয়।
- **পড়া/লেখার বিভাজন**: `sql_query` ও `list_workspaces` কঠোরভাবে শুধু পড়ার (`readOnlyHint`) এবং কখনো ডেটা মেরামত করে না, শিডিউলিং আবার হিসাব করে না বা কার্ডের অবস্থা বদলায় না। `sql_execute` হলো লেখার একমাত্র SQL টুল এবং লেখার কাজ করে (`destructiveHint`); একটি কলে হয় সবই পড়া, নয়তো সবই লেখা থাকতে হবে। SQL দিয়ে `review_events` বা FSRS শিডিউলিংয়ের অবস্থা লেখা যায় না; কেবল `POST /v1/agent/reviews/submit` (MCP-তে `submit_review`) পুনরালোচনা রেকর্ড করে।

## গাইড

`GET /v1/agent/guide/{topic}` একটি রেফারেন্স গাইড ফেরত দেয় `data.guide`-এ; MCP-র `get_guide` টুলও ঠিক এই কনটেন্টই দেয়। বিষয়গুলো:

- `sql_dialect`: পূর্ণ SQL ব্যাকরণ, সীমা ও উদাহরণ
- `card_authoring`: কার্ড কন্ট্র্যাক্ট, ট্যাগ, ডুপ্লিকেট যাচাই ও ফরম্যাটিং
- `bulk_authoring`: বড় লেখার কাজ ভাগ করা ও যাচাই করা
- `review_flow`: পুনরালোচনা ও রেটিংয়ের চক্র

অজানা বিষয় চাইলে সমর্থিত বিষয়ের তালিকাসহ `400` ফেরত আসে। কার্ড তৈরি, একসঙ্গে বেশি পরিমাণে লেখা বা পুনরালোচনা চালানোর আগে সংশ্লিষ্ট গাইডটি আনুন, আর কোনো স্টেটমেন্ট প্রত্যাখ্যাত হলে `sql_dialect` আবার পড়ুন।

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## পুনরালোচনা

পুনরালোচনার রুটগুলো দিয়ে এজেন্ট একজন শিক্ষার্থীকে একবারে একটি কার্ড ধরে প্রশ্ন করতে পারে এবং প্রতিটি রেটিং কার্ডের FSRS শিডিউলে সংরক্ষণ করতে পারে। এগুলো MCP-র পুনরালোচনার টুলের মতো একই JSON আর্গুমেন্ট নেয়:

- `POST /v1/agent/reviews/next` ফেরত দেয় `cardId` ও `frontText` সহ `card`, অথবা কোনো কার্ডের সময় না হলে `card: null`। ঐচ্ছিক `tags` (যেকোনোটি) বা `deckId` দিয়ে কিউ সীমিত করা যায়, তবে দুটো একসঙ্গে নয়; বডি ছাড়া অনুরোধও বৈধ।
- `POST /v1/agent/reviews/reveal`-এর জন্য `cardId` লাগে এবং এটি সেই কার্ডের `backText` ফেরত দেয়।
- `POST /v1/agent/reviews/submit`-এর জন্য লাগে `cardId`, ক্লায়েন্টে তৈরি একটি `reviewId` UUID, `Again`, `Hard`, `Good` বা `Easy`-এর মধ্যে একটি `rating`, আর শিক্ষার্থীর IANA `reviewedTimeZone`। সার্ভার পুনরালোচনার সময় বসিয়ে দেয় এবং কার্ডের নতুন শিডিউল ফেরত দেয়, যার মধ্যে আছে `dueAt`, `state`, `reps` ও `lapses`।

তিনটি রুটই ঐচ্ছিক `workspaceId` গ্রহণ করে। জমা দেওয়ার আগে `reviewId` সংরক্ষণ করুন, আর কোনো জমা অনিশ্চিত থাকলে হুবহু একই অনুরোধ দিয়ে আবার চেষ্টা করুন; এতে কখনো দ্বিতীয় পুনরালোচনা রেকর্ড হয় না। পুনরালোচনার রুটগুলো এই উত্তরগুলোও দিতে পারে:

- `409 REVIEW_EVENT_CONFLICT`: পুনরালোচনাটি আগেই রেকর্ড হয়েছে, এবং `error.details.reviewSchedule`-এ কার্ডের বর্তমান শিডিউল থাকে।
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` আগে থেকেই অন্য একটি কার্ডের পুনরালোচনাকে চিহ্নিত করে, তাই কিছুই সংরক্ষিত হয়নি; নতুন `reviewId` দিয়ে আবার জমা দিন।
- `409 REVIEW_STALE`: কার্ডে সংরক্ষিত পুনরালোচনার সময় সার্ভারের বর্তমান সময়ের সমান বা তার পরে; অন্য একটি কার্ড পুনরালোচনা করুন।
- `400 REVIEW_INPUT_INVALID`: কোনো আর্গুমেন্ট নেই, অবৈধ বা অসমর্থিত, যার মধ্যে আছে `deckId`-এর সঙ্গে `tags` একসঙ্গে দেওয়া, বা এমন ট্যাগ যা ওয়ার্কস্পেসে ব্যবহার হয় না।

জমা দেওয়ার উদাহরণ:

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

## মানুষের ক্লায়েন্ট ও সিঙ্কের API

Nibomo-তে মানুষের ব্যবহৃত ক্লায়েন্ট আর অফলাইন-ফার্স্ট সিঙ্কের জন্য আলাদা API-ও আছে, তবে সেগুলো বাইরের এজেন্টদের মূল কন্ট্র্যাক্ট নয়:

- ব্রাউজারের ফ্লো শেয়ার করা ডোমেইনের কুকি আর CSRF সুরক্ষা ব্যবহার করে
- অফলাইন-ফার্স্ট ক্লায়েন্টরা `/v1/workspaces/{workspaceId}/sync/push` ও `/v1/workspaces/{workspaceId}/sync/pull`-এর অধীনে বাস্তবায়িত সিঙ্ক রুট ব্যবহার করে
- সিঙ্ক রুটগুলো বাইরের এজেন্টের ইন্টারফেস থেকে আলাদা
