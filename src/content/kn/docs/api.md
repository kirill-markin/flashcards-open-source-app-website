---
title: API ಉಲ್ಲೇಖ
description: ಡಿಸ್ಕವರಿ, OTP ಬೂಟ್‌ಸ್ಟ್ರ್ಯಾಪ್, ಕಾರ್ಯಸ್ಥಳ ಸೆಟಪ್ ಮತ್ತು ಪ್ರಕಟಿತ ಓದುವ ಹಾಗೂ ಬರೆಯುವ SQL ಇಂಟರ್ಫೇಸ್‌ಗಳಿಗಾಗಿ ಬಾಹ್ಯ ಏಜೆಂಟ್ API.
---

## ಸಮಗ್ರ ನೋಟ

ಈ ಪುಟವು Nibomo ಗಾಗಿ ಬಾಹ್ಯ AI ಏಜೆಂಟ್‌ಗಳ ಪ್ರಸ್ತುತ ಕಾಂಟ್ರ್ಯಾಕ್ಟ್ ಅನ್ನು ದಾಖಲಿಸುತ್ತದೆ.

ನಿಮ್ಮ ಕ್ಲೈಂಟ್ MCP ಬೆಂಬಲಿಸಿದರೆ, [MCP ಕನೆಕ್ಟರ್](/docs/mcp-connector/) ಸಂಪರ್ಕಿಸಲು
ಅತ್ಯಂತ ಸರಳ ಮಾರ್ಗ, ಮತ್ತು ಅದು ಇದೇ ಡೇಟಾ ಇಂಟರ್ಫೇಸ್ ಅನ್ನು ಒಳಗೊಂಡಿದೆ. ಈ ಪುಟವು CLI ಏಜೆಂಟ್‌ಗಳು
ಬಳಸುವ HTTP ಡಿಸ್ಕವರಿ, SQL, ಮಾರ್ಗದರ್ಶಿ ಮತ್ತು ಪುನರಾವರ್ತನೆಯ ಕಾಂಟ್ರ್ಯಾಕ್ಟ್ ಅನ್ನು ದಾಖಲಿಸುತ್ತದೆ.

ಅಧಿಕೃತ ಡಿಸ್ಕವರಿ ಪ್ರವೇಶ ಬಿಂದುವಿನಿಂದ ಆರಂಭಿಸಿ:

```text
GET https://api.nibomo.com/v1/
```

ಇದೇ ಡಿಸ್ಕವರಿ ಪೇಲೋಡ್ `GET /v1/agent` ನಲ್ಲಿಯೂ ಲಭ್ಯವಿದೆ, ಆದರೆ ಪ್ರಾಥಮಿಕ ಸಾರ್ವಜನಿಕ ಪ್ರವೇಶ ಬಿಂದು `/v1/` ಆಗಿದೆ.

ಡಿಸ್ಕವರಿ ಪ್ರತಿಕ್ರಿಯೆ ಏಜೆಂಟ್‌ಗೆ ಈ ಕೆಲಸಗಳನ್ನು ಹೇಗೆ ಮಾಡಬೇಕು ಎಂದು ತಿಳಿಸುತ್ತದೆ:

- ಇಮೇಲ್ OTP ಲಾಗಿನ್ ಆರಂಭಿಸುವುದು
- OTP ಅನ್ನು ದೀರ್ಘಾವಧಿಯ API ಕೀಗೆ ಬದಲಾಯಿಸಿಕೊಳ್ಳುವುದು
- ಖಾತೆಯ ಸಂದರ್ಭವನ್ನು ಲೋಡ್ ಮಾಡುವುದು
- ಕಾರ್ಯಸ್ಥಳವನ್ನು ರಚಿಸುವುದು ಅಥವಾ ಆಯ್ಕೆ ಮಾಡುವುದು
- ಪ್ರಕಟಿತ SQL ಇಂಟರ್ಫೇಸ್ ಮೂಲಕ ಮುಂದುವರಿಯುವುದು
- ಉಲ್ಲೇಖ ಮಾರ್ಗದರ್ಶಿಗಳನ್ನು ಪಡೆಯುವುದು ಮತ್ತು ಕಾರ್ಡ್‌ಗಳನ್ನು ಒಂದೊಂದಾಗಿ ಪುನರಾವರ್ತಿಸುವುದು

## ರನ್‌ಟೈಮ್ ಡಿಸ್ಕವರಿ ಮತ್ತು ಸೋರ್ಸ್

OpenAPI ಲಭ್ಯವಿಲ್ಲ. ಕೆಳಗಿನ ನಾಲ್ಕು ಹಿಂದಿನ ಸ್ಪೆಸಿಫಿಕೇಶನ್ URL ಗಳು ಈಗ ಸ್ಕೀಮಾದ ಬದಲು `"openapiAvailable": false` ಇರುವ ಅದೇ JSON ಡಿಸ್ಕವರಿ ಸೂಚನೆಯನ್ನು ಹಿಂದಿರುಗಿಸುತ್ತವೆ:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

ಪ್ರಸ್ತುತ ರನ್‌ಟೈಮ್ ಡಿಸ್ಕವರಿಗಾಗಿ `GET https://api.nibomo.com/v1/` ಬಳಸಿ. ರನ್‌ಟೈಮ್ ಮಾರ್ಗಗಳಿಗಾಗಿ ಹಿಂದಿರುಗಿದ `docs.discoveryUrl` ಅನ್ನು ಮತ್ತು ಅನುಷ್ಠಾನದ ವಿವರಗಳಿಗಾಗಿ `docs.source.agentRoutesUrl` ಅನ್ನು ಅನುಸರಿಸಿ.

## ದೃಢೀಕರಣ ಬೂಟ್‌ಸ್ಟ್ರ್ಯಾಪ್

OTP ಬೂಟ್‌ಸ್ಟ್ರ್ಯಾಪ್ ದೃಢೀಕರಣ ಸೇವೆಯಲ್ಲಿ ನಡೆಯುತ್ತದೆ:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

ಹಂತಗಳು ಹೀಗಿವೆ:

1. `GET /v1/` ಕರೆ ಮಾಡಿ.
2. ಬಳಕೆದಾರರ ಇಮೇಲ್ ಅನ್ನು `send-code` ಗೆ ಕಳುಹಿಸಿ.
3. ಪ್ರತಿಕ್ರಿಯೆಯಿಂದ `otpSessionToken` ಓದಿ.
4. ಇಮೇಲ್‌ಗೆ ಬಂದ ಇತ್ತೀಚಿನ 8 ಅಂಕಿಯ ಕೋಡ್ ಅನ್ನು ಬಳಕೆದಾರರಿಂದ ಕೇಳಿ ಪಡೆಯಿರಿ.
5. `code`, `otpSessionToken` ಮತ್ತು `label` ಜೊತೆಗೆ `verify-code` ಕರೆ ಮಾಡಿ.
6. ಹಿಂದಿರುಗಿದ API ಕೀಯನ್ನು ಚಾಟ್ ಮೆಮೊರಿಯ ಹೊರಗೆ ಉಳಿಸಿಡಿ.

ಶಿಫಾರಸು ಮಾಡಲಾದ ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ವೇರಿಯೇಬಲ್:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

ದೃಢೀಕೃತ ವಿನಂತಿಗಳು ಇದನ್ನು ಬಳಸುತ್ತವೆ:

```text
Authorization: ApiKey <key>
```

ಬೂಟ್‌ಸ್ಟ್ರ್ಯಾಪ್ ಅನುಕ್ರಮದ ಉದಾಹರಣೆ:

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

## ಲಾಗಿನ್ ನಂತರದ ಏಜೆಂಟ್ ಇಂಟರ್ಫೇಸ್

ಪರಿಶೀಲನೆಯ ನಂತರ, ಪ್ರಸ್ತುತ ಏಜೆಂಟ್ ಇಂಟರ್ಫೇಸ್ ಹೀಗಿದೆ:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (ಓದಲು ಮಾತ್ರ)
- `POST /v1/agent/sql/execute` (ಬರೆಯುವಿಕೆ)
- `GET /v1/agent/guide/{topic}` (ಓದಲು ಮಾತ್ರ)
- `POST /v1/agent/reviews/next` (ಓದಲು ಮಾತ್ರ)
- `POST /v1/agent/reviews/reveal` (ಓದಲು ಮಾತ್ರ)
- `POST /v1/agent/reviews/submit` (ಬರೆಯುವಿಕೆ)

ಸಾಮಾನ್ಯ ಬೂಟ್‌ಸ್ಟ್ರ್ಯಾಪ್ ಹೀಗಿರುತ್ತದೆ:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. ಅಗತ್ಯವಿದ್ದರೆ, `{"name":"Personal"}` ಜೊತೆಗೆ `POST /v1/agent/workspaces`
4. ಅಗತ್ಯವಿದ್ದರೆ, `POST /v1/agent/workspaces/{workspaceId}/select`
5. ಓದುವಿಕೆಗಾಗಿ `POST /v1/agent/sql/query` ಮತ್ತು ಬರೆಯುವಿಕೆಗಾಗಿ `POST /v1/agent/sql/execute` ಬಳಸಿ

ಕಾರ್ಯಸ್ಥಳದ ಆಯ್ಕೆಯನ್ನು ಪ್ರತಿ API ಕೀ ಸಂಪರ್ಕಕ್ಕೂ ಸ್ಪಷ್ಟವಾಗಿ ಮಾಡಲಾಗುತ್ತದೆ. ಮುಂದಿನ ಹಂತವನ್ನು ಊಹಿಸುವ ಬದಲು, ಏಜೆಂಟ್‌ಗಳು ಹಿಂದಿರುಗಿದ `instructions` ಪಠ್ಯವನ್ನು, ರನ್‌ಟೈಮ್ ಮಾರ್ಗಗಳಿಗಾಗಿ `docs.discoveryUrl` ಅನ್ನು ಮತ್ತು ಅನುಷ್ಠಾನದ ವಿವರಗಳಿಗಾಗಿ `docs.source.agentRoutesUrl` ಅನ್ನು ಅನುಸರಿಸಬೇಕು.

SQL ಮತ್ತು ಪುನರಾವರ್ತನೆಯ ಮಾರ್ಗಗಳು JSON ಬಾಡಿಯಲ್ಲಿ ಐಚ್ಛಿಕ `workspaceId` ಅನ್ನೂ ಸ್ವೀಕರಿಸುತ್ತವೆ. ಅದು ಆಯ್ಕೆಯನ್ನು ಬದಲಾಯಿಸದೆ ಒಂದು ಕರೆಗೆ ಮಾತ್ರ ಆ ಕಾರ್ಯಸ್ಥಳವನ್ನು ಗುರಿಯಾಗಿಸುತ್ತದೆ; ಆಯ್ಕೆ ಮಾಡಿದ ಕಾರ್ಯಸ್ಥಳವನ್ನು ಬಳಸಲು ಅದನ್ನು ಬಿಟ್ಟುಬಿಡಿ. ಆಯ್ಕೆಯೂ ಇಲ್ಲದೆ `workspaceId` ಕೂಡ ಇಲ್ಲದಿದ್ದರೆ, ಅವು `409 WORKSPACE_SELECTION_REQUIRED` ಉತ್ತರ ನೀಡುತ್ತವೆ.

## SQL ಇಂಟರ್ಫೇಸ್

`POST /v1/agent/sql/query` ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಓದಲು ಮಾತ್ರ ಇರುವ ಇಂಟರ್ಫೇಸ್ (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), ಮತ್ತು `POST /v1/agent/sql/execute` ಬರೆಯುವ ಇಂಟರ್ಫೇಸ್ (`INSERT`, `UPDATE`, `DELETE`); ಒಂದೇ ಕರೆಯಲ್ಲಿ ಎಲ್ಲವೂ ಓದುವಿಕೆ ಅಥವಾ ಎಲ್ಲವೂ ಬರೆಯುವಿಕೆ ಆಗಿರಬೇಕು.

ಇದು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಸೀಮಿತವಾಗಿದೆ ಮತ್ತು ಪೂರ್ಣ PostgreSQL ಅಲ್ಲ. ಈ ದಾಖಲೆಗಳು
ಬೆಂಬಲಿತ ಡಯಲೆಕ್ಟ್ ಅನ್ನು ಮಾತ್ರ ಒಳಗೊಂಡಿವೆ, PostgreSQL ಹೊಂದಾಣಿಕೆಯ ಉಲ್ಲೇಖವಲ್ಲ.

ಯಾವುದೇ ಓದುವ ಮಾರ್ಗವು ಡೇಟಾವನ್ನು ದುರಸ್ತಿ ಮಾಡುವುದಿಲ್ಲ, ವೇಳಾಪಟ್ಟಿಯನ್ನು ಮರುಲೆಕ್ಕ ಮಾಡುವುದಿಲ್ಲ ಅಥವಾ ಕಾರ್ಡ್‌ನ ಸ್ಥಿತಿಯನ್ನು ಬದಲಾಯಿಸುವುದಿಲ್ಲ.
ಪ್ರತಿಯೊಂದು ಕಾರ್ಡ್ ಮತ್ತು ಡೆಕ್ ಬರೆಯುವಿಕೆಗೆ `POST /v1/agent/sql/execute` ಬಳಸಿ. SQL
`review_events` ಅಥವಾ FSRS ವೇಳಾಪಟ್ಟಿಯ ಸ್ಥಿತಿಯನ್ನು ಬರೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ; ಪುನರಾವರ್ತನೆಗಳನ್ನು
`POST /v1/agent/reviews/submit` ಮೂಲಕ ದಾಖಲಿಸಿ.

ಪ್ರಸ್ತುತ ಸ್ಟೇಟ್‌ಮೆಂಟ್ ಪ್ರಕಾರಗಳು:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

ಪ್ರಸ್ತುತ ಪ್ರಕಟಿತ ತಾರ್ಕಿಕ ಸಂಪನ್ಮೂಲಗಳು:

- `workspace`
- `cards`
- `decks`
- `review_events`

ಟಿಪ್ಪಣಿಗಳು:

- `LIMIT` ಡೀಫಾಲ್ಟ್ ಆಗಿ `100` ಮತ್ತು ಗರಿಷ್ಠ ಮಿತಿಯೂ `100`
- ಸ್ಥಿರವಾದ ಪೇಜಿನೇಶನ್ ಬೇಕಿದ್ದಾಗ `ORDER BY` ಬಳಸಿ
- ಸ್ಕೀಮಾ ತಿಳಿಯಲು `SHOW TABLES` ಅಥವಾ `DESCRIBE cards` ಬಳಸಿ
- ಪ್ರತಿಯೊಂದು SQL ಕರೆಯೂ ಒಂದೇ ಕಾರ್ಯಸ್ಥಳಕ್ಕೆ ಸೀಮಿತ: ಬಾಡಿಯಲ್ಲಿರುವ `workspaceId`, ಅಥವಾ ಆಯ್ಕೆ ಮಾಡಿದ ಕಾರ್ಯಸ್ಥಳ

ವಿನಂತಿಯ ಉದಾಹರಣೆ:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

ಕಾರ್ಡ್ ಕ್ವೆರಿಯ ಉದಾಹರಣೆ:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

ಬದಲಾವಣೆಯ ಉದಾಹರಣೆ:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

OAuth 2.1 (Dynamic Client Registration + PKCE) ಬಳಸುವ ರಿಮೋಟ್ MCP ಸರ್ವರ್ `https://mcp.nibomo.com/mcp` ನಲ್ಲಿಯೂ ಲಭ್ಯವಿದೆ. ಅದು ಇದೇ SQL ವಿಭಜನೆಯನ್ನು `sql_query` (ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಓದಲು ಮಾತ್ರ) ಮತ್ತು `sql_execute` (ಬರೆಯುವಿಕೆ) ಆಗಿ ಒದಗಿಸುತ್ತದೆ, ಜೊತೆಗೆ `list_workspaces`, `get_guide`, ಮತ್ತು ಪುನರಾವರ್ತನೆಯ ಟೂಲ್‌ಗಳಾದ `next_review_card`, `reveal_answer` ಹಾಗೂ `submit_review` ಅನ್ನೂ ಒದಗಿಸುತ್ತದೆ; [MCP ಕನೆಕ್ಟರ್](/docs/mcp-connector/) ನೋಡಿ.

### ಸುರಕ್ಷತೆ ಮತ್ತು ವ್ಯಾಪ್ತಿ

SQL ಇಂಟರ್ಫೇಸ್ ಕಚ್ಚಾ PostgreSQL ಅಲ್ಲ, ಬದಲಿಗೆ ಪಾರ್ಸರ್ ಜಾರಿಗೊಳಿಸುವ, ನಿರ್ಬಂಧಿತ ಡಯಲೆಕ್ಟ್. ಸುರಕ್ಷಾ ಮಿತಿಗಳು ಹೀಗಿವೆ:

- **ಮುಚ್ಚಿದ ಸ್ಟೇಟ್‌ಮೆಂಟ್ ಅನುಮತಿ ಪಟ್ಟಿ**: ಓದುವಿಕೆಗೆ `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` ಮತ್ತು `SELECT` ಮಾತ್ರ, ಬರೆಯುವಿಕೆಗೆ `INSERT`, `UPDATE` ಮತ್ತು `DELETE` ಮಾತ್ರ. ಉಳಿದ ಎಲ್ಲವನ್ನೂ ಪಾರ್ಸ್ ಸಮಯದಲ್ಲೇ ತಿರಸ್ಕರಿಸಲಾಗುತ್ತದೆ.
- **ಸೀಮಿತ ಸಂಪನ್ಮೂಲಗಳು**: ಸ್ಟೇಟ್‌ಮೆಂಟ್‌ಗಳು `workspace`, `cards`, `decks` ಮತ್ತು `review_events` ಸಂಪನ್ಮೂಲಗಳನ್ನು ಮಾತ್ರ ಮುಟ್ಟಬಹುದು.
- **ಪ್ರತಿ ಕಾರ್ಯಸ್ಥಳದ ವ್ಯಾಪ್ತಿ**: ಪ್ರತಿಯೊಂದು ಸ್ಟೇಟ್‌ಮೆಂಟ್ ನಿಮಗೆ ಪ್ರವೇಶವಿರುವ ಒಂದೇ ಕಾರ್ಯಸ್ಥಳಕ್ಕೆ ಸೀಮಿತ, ಅಂದರೆ ವಿನಂತಿಯ ಬಾಡಿಯಲ್ಲಿರುವ `workspaceId` ಅಥವಾ ನೀವು ಆಯ್ಕೆ ಮಾಡಿದ ಕಾರ್ಯಸ್ಥಳ; ಬೇರೆ ಟೆನೆಂಟ್‌ಗಳ ಡೇಟಾಗೆ ಪ್ರವೇಶವಿಲ್ಲ.
- **ಕಟ್ಟುನಿಟ್ಟಾದ ವಿನಂತಿ ಬಾಡಿಗಳು**: SQL ಮತ್ತು ಪುನರಾವರ್ತನೆಯ ಮಾರ್ಗಗಳು ಅಪರಿಚಿತ ಬಾಡಿ ಫೀಲ್ಡ್ ಅನ್ನು ತಿರಸ್ಕರಿಸುತ್ತವೆ, ಆದ್ದರಿಂದ ತಪ್ಪಾಗಿ ಬರೆದ `workspaceId` ಆಯ್ಕೆ ಮಾಡಿದ ಕಾರ್ಯಸ್ಥಳದ ಮೇಲೆ ಚಲಿಸುವ ಬದಲು ವಿಫಲವಾಗುತ್ತದೆ.
- **ಮಿತಿಗಳು**: ಪ್ರತಿ ಸ್ಟೇಟ್‌ಮೆಂಟ್‌ಗೆ ಗರಿಷ್ಠ `100` ಸಾಲುಗಳು, ಪ್ರತಿ ಬ್ಯಾಚ್‌ಗೆ ಗರಿಷ್ಠ `50` ಸ್ಟೇಟ್‌ಮೆಂಟ್‌ಗಳು, ಮತ್ತು ಫಲಿತಾಂಶಕ್ಕೆ ಸುಮಾರು `12k` ಟೋಕನ್‌ಗಳ ಮಿತಿ. ಬದಲಾವಣೆಯ ಬ್ಯಾಚ್‌ಗಳು ಅಟಾಮಿಕ್ ಆಗಿ ಅನ್ವಯವಾಗುತ್ತವೆ.
- **ಓದು/ಬರಹ ವಿಭಜನೆ**: `sql_query` ಮತ್ತು `list_workspaces` ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಓದಲು ಮಾತ್ರ (`readOnlyHint`), ಮತ್ತು ಅವು ಎಂದಿಗೂ ಡೇಟಾ ದುರಸ್ತಿ ಮಾಡುವುದಿಲ್ಲ, ವೇಳಾಪಟ್ಟಿಯನ್ನು ಮರುಲೆಕ್ಕ ಮಾಡುವುದಿಲ್ಲ ಅಥವಾ ಕಾರ್ಡ್‌ನ ಸ್ಥಿತಿಯನ್ನು ಬದಲಾಯಿಸುವುದಿಲ್ಲ. `sql_execute` ಬರೆಯುವ ಏಕೈಕ SQL ಟೂಲ್ ಮತ್ತು ಅದು ಬರೆಯುವಿಕೆಗಳನ್ನು ನಡೆಸುತ್ತದೆ (`destructiveHint`); ಒಂದೇ ಕರೆಯಲ್ಲಿ ಎಲ್ಲವೂ ಓದುವಿಕೆ ಅಥವಾ ಎಲ್ಲವೂ ಬರೆಯುವಿಕೆ ಆಗಿರಬೇಕು. SQL `review_events` ಅಥವಾ FSRS ವೇಳಾಪಟ್ಟಿಯ ಸ್ಥಿತಿಯನ್ನು ಬರೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ; `POST /v1/agent/reviews/submit` (MCP `submit_review`) ಮಾತ್ರ ಪುನರಾವರ್ತನೆಯನ್ನು ದಾಖಲಿಸುತ್ತದೆ.

## ಮಾರ್ಗದರ್ಶಿಗಳು

`GET /v1/agent/guide/{topic}` ಒಂದು ಉಲ್ಲೇಖ ಮಾರ್ಗದರ್ಶಿಯನ್ನು `data.guide` ನಲ್ಲಿ ಹಿಂದಿರುಗಿಸುತ್ತದೆ; MCP `get_guide` ಟೂಲ್ ನೀಡುವುದೂ ಇದೇ ಪಠ್ಯ. ವಿಷಯಗಳು:

- `sql_dialect`: ಸಂಪೂರ್ಣ SQL ವ್ಯಾಕರಣ, ಮಿತಿಗಳು ಮತ್ತು ಉದಾಹರಣೆಗಳು
- `card_authoring`: ಕಾರ್ಡ್ ಕಾಂಟ್ರ್ಯಾಕ್ಟ್, ಟ್ಯಾಗ್‌ಗಳು, ನಕಲು ಪರಿಶೀಲನೆ ಮತ್ತು ಫಾರ್ಮ್ಯಾಟಿಂಗ್
- `bulk_authoring`: ದೊಡ್ಡ ಬರೆಯುವ ಕೆಲಸವನ್ನು ವಿಭಜಿಸುವುದು ಮತ್ತು ಪರಿಶೀಲಿಸುವುದು
- `review_flow`: ಪುನರಾವರ್ತನೆ ಮತ್ತು ರೇಟಿಂಗ್ ಚಕ್ರ

ಅಪರಿಚಿತ ವಿಷಯಕ್ಕೆ ಬೆಂಬಲಿತ ವಿಷಯಗಳ ಪಟ್ಟಿಯೊಂದಿಗೆ `400` ಉತ್ತರ ಬರುತ್ತದೆ. ಕಾರ್ಡ್‌ಗಳನ್ನು ರಚಿಸುವ, ದೊಡ್ಡ ಪ್ರಮಾಣದಲ್ಲಿ ಬರೆಯುವ ಅಥವಾ ಪುನರಾವರ್ತನೆ ನಡೆಸುವ ಮೊದಲು ಸಂಬಂಧಿತ ಮಾರ್ಗದರ್ಶಿಯನ್ನು ಪಡೆಯಿರಿ, ಮತ್ತು ಸ್ಟೇಟ್‌ಮೆಂಟ್ ತಿರಸ್ಕೃತವಾದ ನಂತರ `sql_dialect` ಅನ್ನು ಮತ್ತೆ ಓದಿ.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## ಪುನರಾವರ್ತನೆಗಳು

ಪುನರಾವರ್ತನೆಯ ಮಾರ್ಗಗಳು ಏಜೆಂಟ್‌ಗೆ ಕಲಿಕಾರ್ಥಿಯನ್ನು ಒಂದು ಬಾರಿಗೆ ಒಂದು ಕಾರ್ಡ್‌ನಂತೆ ಪ್ರಶ್ನಿಸಲು ಮತ್ತು ಪ್ರತಿಯೊಂದು ರೇಟಿಂಗ್ ಅನ್ನು ಕಾರ್ಡ್‌ನ FSRS ವೇಳಾಪಟ್ಟಿಗೆ ಉಳಿಸಲು ಅವಕಾಶ ನೀಡುತ್ತವೆ. ಅವು MCP ಪುನರಾವರ್ತನೆಯ ಟೂಲ್‌ಗಳಂತೆಯೇ ಅದೇ JSON ಆರ್ಗ್ಯುಮೆಂಟ್‌ಗಳನ್ನು ಸ್ವೀಕರಿಸುತ್ತವೆ:

- `POST /v1/agent/reviews/next` `cardId` ಮತ್ತು `frontText` ಇರುವ `card` ಅನ್ನು ಹಿಂದಿರುಗಿಸುತ್ತದೆ, ಅಥವಾ ಯಾವುದೂ ಬಾಕಿ ಇಲ್ಲದಿದ್ದಾಗ `card: null` ಹಿಂದಿರುಗಿಸುತ್ತದೆ. ಐಚ್ಛಿಕ `tags` (ಇವುಗಳಲ್ಲಿ ಯಾವುದಾದರೂ ಇದ್ದರೆ ಸಾಕು) ಅಥವಾ `deckId` ಸರದಿಯನ್ನು ಕಿರಿದಾಗಿಸುತ್ತದೆ, ಆದರೆ ಎರಡನ್ನೂ ಒಟ್ಟಿಗೆ ಬಳಸಲಾಗದು; ಬಾಡಿ ಇಲ್ಲದ ವಿನಂತಿಯೂ ಮಾನ್ಯ.
- `POST /v1/agent/reviews/reveal` ಗೆ `cardId` ಅಗತ್ಯ, ಮತ್ತು ಅದು ಆ ಕಾರ್ಡ್‌ನ `backText` ಹಿಂದಿರುಗಿಸುತ್ತದೆ.
- `POST /v1/agent/reviews/submit` ಗೆ `cardId`, ಕ್ಲೈಂಟ್ ರಚಿಸಿದ `reviewId` UUID, `Again`, `Hard`, `Good` ಅಥವಾ `Easy` ಇವುಗಳಲ್ಲಿ ಒಂದು `rating`, ಮತ್ತು ಕಲಿಕಾರ್ಥಿಯ IANA `reviewedTimeZone` ಅಗತ್ಯ. ಸರ್ವರ್ ಪುನರಾವರ್ತನೆಯ ಸಮಯವನ್ನು ದಾಖಲಿಸಿ, `dueAt`, `state`, `reps` ಮತ್ತು `lapses` ಸೇರಿದಂತೆ ಕಾರ್ಡ್‌ನ ಹೊಸ ವೇಳಾಪಟ್ಟಿಯನ್ನು ಹಿಂದಿರುಗಿಸುತ್ತದೆ.

ಈ ಮೂರೂ ಮಾರ್ಗಗಳು ಐಚ್ಛಿಕ `workspaceId` ಅನ್ನು ಸ್ವೀಕರಿಸುತ್ತವೆ. ಸಲ್ಲಿಸುವ ಮೊದಲು `reviewId` ಅನ್ನು ಉಳಿಸಿಡಿ, ಮತ್ತು ಫಲಿತಾಂಶ ಖಚಿತವಿಲ್ಲದ ಸಲ್ಲಿಕೆಯನ್ನು ಅದೇ ವಿನಂತಿಯೊಂದಿಗೆ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ; ಅದು ಎಂದಿಗೂ ಎರಡನೇ ಪುನರಾವರ್ತನೆಯನ್ನು ದಾಖಲಿಸುವುದಿಲ್ಲ. ಪುನರಾವರ್ತನೆಯ ಮಾರ್ಗಗಳು ಈ ಉತ್ತರಗಳನ್ನೂ ನೀಡಬಹುದು:

- `409 REVIEW_EVENT_CONFLICT`: ಪುನರಾವರ್ತನೆ ಈಗಾಗಲೇ ದಾಖಲಾಗಿದೆ, ಮತ್ತು `error.details.reviewSchedule` ಕಾರ್ಡ್‌ನ ಪ್ರಸ್ತುತ ವೇಳಾಪಟ್ಟಿಯನ್ನು ಒಳಗೊಂಡಿರುತ್ತದೆ.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` ಈಗಾಗಲೇ ಬೇರೊಂದು ಕಾರ್ಡ್‌ನ ಪುನರಾವರ್ತನೆಯನ್ನು ಗುರುತಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಏನನ್ನೂ ಉಳಿಸಲಾಗಿಲ್ಲ; ಹೊಸ `reviewId` ಜೊತೆಗೆ ಮತ್ತೆ ಸಲ್ಲಿಸಿ.
- `409 REVIEW_STALE`: ಕಾರ್ಡ್‌ನಲ್ಲಿ ಉಳಿಸಿರುವ ಪುನರಾವರ್ತನೆಯ ಸಮಯ ಪ್ರಸ್ತುತ ಸರ್ವರ್ ಸಮಯಕ್ಕೆ ಸಮ ಅಥವಾ ಅದರ ನಂತರದ್ದು; ಬೇರೊಂದು ಕಾರ್ಡ್ ಪುನರಾವರ್ತಿಸಿ.
- `400 REVIEW_INPUT_INVALID`: ಒಂದು ಆರ್ಗ್ಯುಮೆಂಟ್ ಇಲ್ಲ, ಅಮಾನ್ಯವಾಗಿದೆ ಅಥವಾ ಬೆಂಬಲಿತವಲ್ಲ; `deckId` ಜೊತೆಗೆ ಸೇರಿಸಿದ `tags` ಅಥವಾ ಕಾರ್ಯಸ್ಥಳ ಬಳಸದ ಟ್ಯಾಗ್ ಕೂಡ ಇದರಲ್ಲಿ ಸೇರುತ್ತದೆ.

ಸಲ್ಲಿಕೆಯ ಉದಾಹರಣೆ:

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

## ಮಾನವ ಮತ್ತು ಸಿಂಕ್ API ಗಳು

Nibomo ಮಾನವ ಕ್ಲೈಂಟ್‌ಗಳಿಗೆ ಮತ್ತು ಆಫ್‌ಲೈನ್-ಫಸ್ಟ್ ಸಿಂಕ್‌ಗೆ ಪ್ರತ್ಯೇಕ API ಗಳನ್ನೂ ಹೊಂದಿದೆ, ಆದರೆ ಅವು ಬಾಹ್ಯ ಏಜೆಂಟ್‌ಗಳ ಮುಖ್ಯ ಕಾಂಟ್ರ್ಯಾಕ್ಟ್ ಅಲ್ಲ:

- ಬ್ರೌಸರ್ ಫ್ಲೋಗಳು ಹಂಚಿಕೆಯ ಡೊಮೇನ್ ಕುಕೀಗಳು ಮತ್ತು CSRF ರಕ್ಷಣೆಯನ್ನು ಬಳಸುತ್ತವೆ
- ಆಫ್‌ಲೈನ್-ಫಸ್ಟ್ ಕ್ಲೈಂಟ್‌ಗಳು `/v1/workspaces/{workspaceId}/sync/push` ಮತ್ತು `/v1/workspaces/{workspaceId}/sync/pull` ಅಡಿಯಲ್ಲಿ ಅನುಷ್ಠಾನಗೊಂಡ ಸಿಂಕ್ ಮಾರ್ಗಗಳನ್ನು ಬಳಸುತ್ತವೆ
- ಸಿಂಕ್ ಮಾರ್ಗಗಳು ಬಾಹ್ಯ ಏಜೆಂಟ್ ಇಂಟರ್ಫೇಸ್‌ನಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿವೆ
