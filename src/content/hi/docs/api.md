---
title: API Reference
description: Discovery, OTP bootstrap, workspace setup, और published SQL surface के लिए external agent API।
---

## Overview

यह page Flashcards में AI agents के लिए current external contract document करती है।

Primary discovery entry point:

```text
GET https://api.flashcards-open-source-app.com/v1/
```

वही payload `GET /v1/agent` से भी उपलब्ध है, लेकिन `/v1/` primary public entry point है।

Discovery response agent को बताती है कि वह कैसे:

- email OTP login शुरू करे
- OTP को long-lived API key से exchange करे
- account context load करे
- workspace create या select करे
- published SQL surface के जरिए आगे बढ़े

## Published Specs

External agent surface की main spec URLs:

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`

Root aliases:

- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

## Auth Bootstrap

पहला OTP stage auth service पर चलता है:

- `POST https://auth.flashcards-open-source-app.com/api/agent/send-code`
- `POST https://auth.flashcards-open-source-app.com/api/agent/verify-code`

Flow:

1. `GET /v1/` चलाएं।
2. User email को `send-code` पर भेजें।
3. Response से `otpSessionToken` पढ़ें।
4. User से latest 8-digit email code मांगें।
5. `verify-code` को `code`, `otpSessionToken`, और `label` के साथ call करें।
6. Returned API key को conversation memory के बाहर store करें।

Suggested environment variable:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Authenticated requests use:

```text
Authorization: ApiKey <key>
```

## Post-Login Agent Surface

Verification के बाद current surface:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql`

Typical bootstrap:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. If needed, `POST /v1/agent/workspaces` with `{"name":"Personal"}`
4. If needed, `POST /v1/agent/workspaces/{workspaceId}/select`
5. Use `POST /v1/agent/sql`

हर API key connection के लिए workspace selection explicit है। Agents को guess करने के बजाय returned `instructions` और `docs.openapiUrl` follow करने चाहिए।

## SQL Surface

`POST /v1/agent/sql` external agents के लिए shared read/write surface है।

यह जानबूझकर limited है, full PostgreSQL नहीं।

Current command families:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Current published logical resources:

- `workspace`
- `cards`
- `decks`
- `review_events`

Notes:

- Default `LIMIT` `100` है और maximum भी `100`
- Stable pagination चाहिए तो `ORDER BY` इस्तेमाल करें
- Schema discover करने के लिए `SHOW TABLES` या `DESCRIBE cards` इस्तेमाल करें
- External contract post-selection workspace-scoped होता है

Example request:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

## Human And Sync APIs

Flashcards में human clients और offline-first sync के लिए अलग APIs भी शामिल हैं, लेकिन वे external agents के लिए primary contract नहीं हैं:

- Browser flows CSRF protection के साथ shared-domain cookies इस्तेमाल करते हैं
- Offline-first clients `/v1/workspaces/{workspaceId}/sync/push` और `/v1/workspaces/{workspaceId}/sync/pull` के तहत sync routes इस्तेमाल करते हैं
- Sync routes जानबूझकर external agent OpenAPI surface से बाहर रखी गई हैं
