---
title: API ਹਵਾਲਾ
description: ਬਾਹਰੀ ਏਜੰਟਾਂ ਲਈ API, ਜਿਸ ਵਿੱਚ ਡਿਸਕਵਰੀ, OTP ਬੂਟਸਟ੍ਰੈਪ, ਵਰਕਸਪੇਸ ਸੈੱਟਅੱਪ ਅਤੇ ਪ੍ਰਕਾਸ਼ਿਤ ਪੜ੍ਹਨ ਤੇ ਲਿਖਣ ਵਾਲੇ SQL ਇੰਟਰਫ਼ੇਸ ਸ਼ਾਮਲ ਹਨ।
---

## ਝਲਕ

ਇਹ ਸਫ਼ਾ Nibomo ਲਈ ਬਾਹਰੀ AI ਏਜੰਟਾਂ ਦੇ ਮੌਜੂਦਾ ਕੰਟਰੈਕਟ ਦਾ ਵੇਰਵਾ ਦਿੰਦਾ ਹੈ।

ਜੇ ਤੁਹਾਡਾ ਕਲਾਇੰਟ MCP ਸਮਝਦਾ ਹੈ, ਤਾਂ [MCP ਕਨੈਕਟਰ](/docs/mcp-connector/) ਜੁੜਨ ਦਾ
ਸਭ ਤੋਂ ਸੌਖਾ ਤਰੀਕਾ ਹੈ ਅਤੇ ਇਹ ਇਸੇ ਡਾਟਾ ਇੰਟਰਫ਼ੇਸ ਉੱਤੇ ਬਣਿਆ ਹੈ। ਇਹ ਸਫ਼ਾ CLI ਏਜੰਟਾਂ ਵੱਲੋਂ
ਵਰਤੇ ਜਾਂਦੇ HTTP ਡਿਸਕਵਰੀ, SQL, ਗਾਈਡ ਅਤੇ ਦੁਹਰਾਈ ਦੇ ਕੰਟਰੈਕਟ ਦਾ ਵੇਰਵਾ ਦਿੰਦਾ ਹੈ।

ਅਧਿਕਾਰਤ ਡਿਸਕਵਰੀ ਐਂਟਰੀ ਪੁਆਇੰਟ ਤੋਂ ਸ਼ੁਰੂ ਕਰੋ:

```text
GET https://api.nibomo.com/v1/
```

ਇਹੀ ਡਿਸਕਵਰੀ ਪੇਲੋਡ `GET /v1/agent` ਉੱਤੇ ਵੀ ਮਿਲਦਾ ਹੈ, ਪਰ `/v1/` ਹੀ ਮੁੱਖ ਜਨਤਕ ਐਂਟਰੀ ਪੁਆਇੰਟ ਹੈ।

ਡਿਸਕਵਰੀ ਜਵਾਬ ਏਜੰਟ ਨੂੰ ਦੱਸਦਾ ਹੈ ਕਿ:

- ਈਮੇਲ OTP ਲੌਗ ਇਨ ਕਿਵੇਂ ਸ਼ੁਰੂ ਕਰਨਾ ਹੈ
- OTP ਦੇ ਬਦਲੇ ਲੰਮੇ ਸਮੇਂ ਤੱਕ ਚੱਲਣ ਵਾਲੀ API ਕੁੰਜੀ ਕਿਵੇਂ ਲੈਣੀ ਹੈ
- ਖਾਤੇ ਦਾ ਸੰਦਰਭ ਕਿਵੇਂ ਲੋਡ ਕਰਨਾ ਹੈ
- ਵਰਕਸਪੇਸ ਕਿਵੇਂ ਬਣਾਉਣਾ ਜਾਂ ਚੁਣਨਾ ਹੈ
- ਪ੍ਰਕਾਸ਼ਿਤ SQL ਇੰਟਰਫ਼ੇਸ ਰਾਹੀਂ ਅੱਗੇ ਕਿਵੇਂ ਵਧਣਾ ਹੈ
- ਹਵਾਲਾ ਗਾਈਡਾਂ ਕਿਵੇਂ ਲੈਣੀਆਂ ਹਨ ਅਤੇ ਕਾਰਡਾਂ ਨੂੰ ਇੱਕ-ਇੱਕ ਕਰਕੇ ਕਿਵੇਂ ਦੁਹਰਾਉਣਾ ਹੈ

## ਰਨਟਾਈਮ ਡਿਸਕਵਰੀ ਅਤੇ ਸੋਰਸ

OpenAPI ਉਪਲਬਧ ਨਹੀਂ ਹੈ। ਹੇਠਾਂ ਦਿੱਤੇ ਚਾਰ ਪੁਰਾਣੇ ਸਪੈਸੀਫ਼ਿਕੇਸ਼ਨ URL ਹੁਣ ਸਕੀਮਾ ਦੀ ਥਾਂ `"openapiAvailable": false` ਵਾਲਾ ਉਹੀ JSON ਡਿਸਕਵਰੀ ਨੋਟਿਸ ਵਾਪਸ ਕਰਦੇ ਹਨ:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

ਮੌਜੂਦਾ ਰਨਟਾਈਮ ਡਿਸਕਵਰੀ ਲਈ `GET https://api.nibomo.com/v1/` ਵਰਤੋ। ਰਨਟਾਈਮ ਰੂਟਾਂ ਲਈ ਵਾਪਸ ਮਿਲਿਆ `docs.discoveryUrl` ਖੋਲ੍ਹੋ, ਅਤੇ ਲਾਗੂਕਰਨ ਦੇ ਵੇਰਵਿਆਂ ਲਈ `docs.source.agentRoutesUrl`।

## ਪ੍ਰਮਾਣੀਕਰਨ ਬੂਟਸਟ੍ਰੈਪ

OTP ਬੂਟਸਟ੍ਰੈਪ ਪ੍ਰਮਾਣੀਕਰਨ ਸੇਵਾ ਉੱਤੇ ਚੱਲਦਾ ਹੈ:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

ਪ੍ਰਵਾਹ ਇਹ ਹੈ:

1. `GET /v1/` ਕਾਲ ਕਰੋ।
2. ਵਰਤੋਂਕਾਰ ਦੀ ਈਮੇਲ `send-code` ਨੂੰ ਭੇਜੋ।
3. ਜਵਾਬ ਵਿੱਚੋਂ `otpSessionToken` ਪੜ੍ਹੋ।
4. ਵਰਤੋਂਕਾਰ ਤੋਂ ਈਮੇਲ ਵਿੱਚ ਆਇਆ ਸਭ ਤੋਂ ਨਵਾਂ 8 ਅੰਕਾਂ ਦਾ ਕੋਡ ਪੁੱਛੋ।
5. `code`, `otpSessionToken` ਅਤੇ `label` ਨਾਲ `verify-code` ਕਾਲ ਕਰੋ।
6. ਵਾਪਸ ਮਿਲੀ API ਕੁੰਜੀ ਚੈਟ ਦੀ ਮੈਮਰੀ ਤੋਂ ਬਾਹਰ ਸੰਭਾਲੋ।

ਸਿਫ਼ਾਰਸ਼ੀ ਇਨਵਾਇਰਨਮੈਂਟ ਵੇਰੀਏਬਲ:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

ਪ੍ਰਮਾਣਿਤ ਬੇਨਤੀਆਂ ਇਹ ਵਰਤਦੀਆਂ ਹਨ:

```text
Authorization: ApiKey <key>
```

ਬੂਟਸਟ੍ਰੈਪ ਕ੍ਰਮ ਦੀ ਮਿਸਾਲ:

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

## ਲੌਗ ਇਨ ਤੋਂ ਬਾਅਦ ਏਜੰਟ ਇੰਟਰਫ਼ੇਸ

ਪੁਸ਼ਟੀ ਤੋਂ ਬਾਅਦ, ਮੌਜੂਦਾ ਏਜੰਟ ਇੰਟਰਫ਼ੇਸ ਇਹ ਹੈ:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (ਸਿਰਫ਼ ਪੜ੍ਹਨ ਲਈ)
- `POST /v1/agent/sql/execute` (ਲਿਖਣ ਲਈ)
- `GET /v1/agent/guide/{topic}` (ਸਿਰਫ਼ ਪੜ੍ਹਨ ਲਈ)
- `POST /v1/agent/reviews/next` (ਸਿਰਫ਼ ਪੜ੍ਹਨ ਲਈ)
- `POST /v1/agent/reviews/reveal` (ਸਿਰਫ਼ ਪੜ੍ਹਨ ਲਈ)
- `POST /v1/agent/reviews/submit` (ਲਿਖਣ ਲਈ)

ਆਮ ਬੂਟਸਟ੍ਰੈਪ ਇਸ ਤਰ੍ਹਾਂ ਹੁੰਦਾ ਹੈ:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. ਲੋੜ ਹੋਵੇ ਤਾਂ `{"name":"Personal"}` ਨਾਲ `POST /v1/agent/workspaces`
4. ਲੋੜ ਹੋਵੇ ਤਾਂ `POST /v1/agent/workspaces/{workspaceId}/select`
5. ਪੜ੍ਹਨ ਲਈ `POST /v1/agent/sql/query` ਅਤੇ ਲਿਖਣ ਲਈ `POST /v1/agent/sql/execute` ਵਰਤੋ

ਵਰਕਸਪੇਸ ਦੀ ਚੋਣ ਹਰ API ਕੁੰਜੀ ਕਨੈਕਸ਼ਨ ਲਈ ਸਪਸ਼ਟ ਤੌਰ ਉੱਤੇ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਏਜੰਟਾਂ ਨੂੰ ਅਗਲੇ ਕਦਮ ਦਾ ਅੰਦਾਜ਼ਾ ਲਾਉਣ ਦੀ ਥਾਂ ਵਾਪਸ ਮਿਲੇ `instructions` ਟੈਕਸਟ ਅਤੇ ਰਨਟਾਈਮ ਰੂਟਾਂ ਲਈ `docs.discoveryUrl`, ਨਾਲ ਹੀ ਲਾਗੂਕਰਨ ਦੇ ਵੇਰਵਿਆਂ ਲਈ `docs.source.agentRoutesUrl` ਦੀ ਪਾਲਣਾ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ।

SQL ਅਤੇ ਦੁਹਰਾਈ ਵਾਲੇ ਰੂਟ JSON ਬਾਡੀ ਵਿੱਚ ਇੱਕ ਵਿਕਲਪਿਕ `workspaceId` ਵੀ ਲੈਂਦੇ ਹਨ। ਇਹ ਚੋਣ ਬਦਲੇ ਬਿਨਾਂ ਸਿਰਫ਼ ਇੱਕ ਕਾਲ ਲਈ ਉਸ ਵਰਕਸਪੇਸ ਨੂੰ ਨਿਸ਼ਾਨਾ ਬਣਾਉਂਦਾ ਹੈ; ਚੁਣਿਆ ਹੋਇਆ ਵਰਕਸਪੇਸ ਵਰਤਣ ਲਈ ਇਸ ਨੂੰ ਛੱਡ ਦਿਓ। ਜੇ ਨਾ ਕੋਈ ਚੋਣ ਹੋਵੇ ਅਤੇ ਨਾ `workspaceId`, ਤਾਂ ਉਹ `409 WORKSPACE_SELECTION_REQUIRED` ਜਵਾਬ ਦਿੰਦੇ ਹਨ।

## SQL ਇੰਟਰਫ਼ੇਸ

`POST /v1/agent/sql/query` ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਿਰਫ਼ ਪੜ੍ਹਨ ਵਾਲਾ ਇੰਟਰਫ਼ੇਸ ਹੈ (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) ਅਤੇ `POST /v1/agent/sql/execute` ਲਿਖਣ ਵਾਲਾ ਇੰਟਰਫ਼ੇਸ ਹੈ (`INSERT`, `UPDATE`, `DELETE`); ਇੱਕ ਕਾਲ ਵਿੱਚ ਜਾਂ ਤਾਂ ਸਾਰੇ ਪੜ੍ਹਨ ਵਾਲੇ ਸਟੇਟਮੈਂਟ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ ਜਾਂ ਸਾਰੇ ਲਿਖਣ ਵਾਲੇ।

ਇਹ ਜਾਣ-ਬੁੱਝ ਕੇ ਸੀਮਤ ਰੱਖਿਆ ਗਿਆ ਹੈ ਅਤੇ ਪੂਰਾ PostgreSQL ਨਹੀਂ ਹੈ। ਇਹ ਦਸਤਾਵੇਜ਼ ਸਿਰਫ਼
ਸਮਰਥਿਤ ਡਾਇਲੈਕਟ ਬਾਰੇ ਹਨ, PostgreSQL ਨਾਲ ਅਨੁਕੂਲਤਾ ਦਾ ਹਵਾਲਾ ਨਹੀਂ।

ਕੋਈ ਵੀ ਪੜ੍ਹਨ ਵਾਲਾ ਰਾਹ ਡਾਟਾ ਠੀਕ ਨਹੀਂ ਕਰਦਾ, ਸ਼ਡਿਊਲਿੰਗ ਦੁਬਾਰਾ ਨਹੀਂ ਗਿਣਦਾ ਅਤੇ ਕਾਰਡ ਦੀ ਸਥਿਤੀ ਨਹੀਂ ਬਦਲਦਾ।
ਕਾਰਡਾਂ ਅਤੇ ਡੈੱਕਾਂ ਵਿੱਚ ਹਰ ਲਿਖਤ ਲਈ `POST /v1/agent/sql/execute` ਵਰਤੋ। SQL
`review_events` ਜਾਂ FSRS ਸ਼ਡਿਊਲਿੰਗ ਦੀ ਸਥਿਤੀ ਵਿੱਚ ਨਹੀਂ ਲਿਖ ਸਕਦਾ; ਦੁਹਰਾਈਆਂ
`POST /v1/agent/reviews/submit` ਰਾਹੀਂ ਦਰਜ ਕਰੋ।

ਮੌਜੂਦਾ ਸਟੇਟਮੈਂਟ ਕਿਸਮਾਂ:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

ਇਸ ਵੇਲੇ ਪ੍ਰਕਾਸ਼ਿਤ ਲਾਜ਼ੀਕਲ ਰਿਸੋਰਸ ਇਹ ਹਨ:

- `workspace`
- `cards`
- `decks`
- `review_events`

ਨੋਟ:

- `LIMIT` ਮੂਲ ਰੂਪ ਵਿੱਚ `100` ਹੁੰਦਾ ਹੈ ਅਤੇ ਇਸ ਦੀ ਵੱਧ ਤੋਂ ਵੱਧ ਹੱਦ `100` ਹੈ
- ਸਥਿਰ ਪੇਜੀਨੇਸ਼ਨ ਚਾਹੀਦੀ ਹੋਵੇ ਤਾਂ `ORDER BY` ਵਰਤੋ
- ਸਕੀਮਾ ਜਾਣਨ ਲਈ `SHOW TABLES` ਜਾਂ `DESCRIBE cards` ਵਰਤੋ
- ਹਰ SQL ਕਾਲ ਇੱਕ ਵਰਕਸਪੇਸ ਤੱਕ ਸੀਮਤ ਹੁੰਦੀ ਹੈ: ਬਾਡੀ ਵਿਚਲਾ `workspaceId`, ਜਾਂ ਚੁਣਿਆ ਹੋਇਆ ਵਰਕਸਪੇਸ

ਬੇਨਤੀ ਦੀ ਮਿਸਾਲ:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

ਕਾਰਡ ਕੁਐਰੀ ਦੀ ਮਿਸਾਲ:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

ਬਦਲਾਅ ਦੀ ਮਿਸਾਲ:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

`https://mcp.nibomo.com/mcp` ਉੱਤੇ OAuth 2.1 (Dynamic Client Registration + PKCE) ਵਾਲਾ ਇੱਕ ਰਿਮੋਟ MCP ਸਰਵਰ ਵੀ ਉਪਲਬਧ ਹੈ। ਇਹ ਇਸੇ SQL ਵੰਡ ਨੂੰ `sql_query` (ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਿਰਫ਼ ਪੜ੍ਹਨ ਲਈ) ਅਤੇ `sql_execute` (ਲਿਖਣ ਲਈ) ਵਜੋਂ ਦਿੰਦਾ ਹੈ, ਨਾਲ ਹੀ `list_workspaces`, `get_guide` ਅਤੇ ਦੁਹਰਾਈ ਵਾਲੇ ਟੂਲ `next_review_card`, `reveal_answer` ਤੇ `submit_review` ਵੀ; [MCP ਕਨੈਕਟਰ](/docs/mcp-connector/) ਵੇਖੋ।

### ਸੁਰੱਖਿਆ ਅਤੇ ਦਾਇਰਾ

SQL ਇੰਟਰਫ਼ੇਸ ਕੱਚਾ PostgreSQL ਨਹੀਂ, ਸਗੋਂ ਸੀਮਤ ਦਾਇਰੇ ਵਾਲਾ ਡਾਇਲੈਕਟ ਹੈ, ਜਿਸ ਦੇ ਨਿਯਮ ਪਾਰਸਰ ਲਾਗੂ ਕਰਦਾ ਹੈ। ਸੁਰੱਖਿਆ ਦੀਆਂ ਹੱਦਾਂ ਇਹ ਹਨ:

- **ਸਟੇਟਮੈਂਟਾਂ ਦੀ ਬੰਦ ਮਨਜ਼ੂਰ ਸੂਚੀ**: ਪੜ੍ਹਨ ਲਈ ਸਿਰਫ਼ `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` ਅਤੇ `SELECT`, ਅਤੇ ਲਿਖਣ ਲਈ `INSERT`, `UPDATE` ਅਤੇ `DELETE`। ਹੋਰ ਕੁਝ ਵੀ ਪਾਰਸ ਕਰਨ ਵੇਲੇ ਹੀ ਰੱਦ ਹੋ ਜਾਂਦਾ ਹੈ।
- **ਸੀਮਤ ਰਿਸੋਰਸ**: ਸਟੇਟਮੈਂਟ ਸਿਰਫ਼ `workspace`, `cards`, `decks` ਅਤੇ `review_events` ਰਿਸੋਰਸਾਂ ਤੱਕ ਪਹੁੰਚ ਸਕਦੇ ਹਨ।
- **ਹਰ ਵਰਕਸਪੇਸ ਤੱਕ ਸੀਮਤ ਦਾਇਰਾ**: ਹਰ ਸਟੇਟਮੈਂਟ ਤੁਹਾਡੀ ਪਹੁੰਚ ਵਾਲੇ ਇੱਕ ਵਰਕਸਪੇਸ ਤੱਕ ਸੀਮਤ ਹੁੰਦਾ ਹੈ, ਜਾਂ ਤਾਂ ਬੇਨਤੀ ਦੀ ਬਾਡੀ ਵਿਚਲਾ `workspaceId` ਜਾਂ ਤੁਹਾਡਾ ਚੁਣਿਆ ਹੋਇਆ ਵਰਕਸਪੇਸ, ਅਤੇ ਦੂਜੇ ਵਰਕਸਪੇਸਾਂ (ਟੈਨੈਂਟਾਂ) ਤੱਕ ਕੋਈ ਪਹੁੰਚ ਨਹੀਂ ਹੁੰਦੀ।
- **ਸਖ਼ਤ ਬੇਨਤੀ ਬਾਡੀਆਂ**: SQL ਅਤੇ ਦੁਹਰਾਈ ਵਾਲੇ ਰੂਟ ਬਾਡੀ ਵਿੱਚ ਕੋਈ ਵੀ ਅਣਜਾਣ ਫ਼ੀਲਡ ਰੱਦ ਕਰ ਦਿੰਦੇ ਹਨ, ਇਸ ਲਈ ਗਲਤ ਲਿਖਿਆ `workspaceId` ਚੁਣੇ ਹੋਏ ਵਰਕਸਪੇਸ ਉੱਤੇ ਚੱਲਣ ਦੀ ਥਾਂ ਫੇਲ੍ਹ ਹੋ ਜਾਂਦਾ ਹੈ।
- **ਹੱਦਾਂ**: ਹਰ ਸਟੇਟਮੈਂਟ ਵਿੱਚ ਵੱਧ ਤੋਂ ਵੱਧ `100` ਕਤਾਰਾਂ, ਹਰ ਬੈਚ ਵਿੱਚ ਵੱਧ ਤੋਂ ਵੱਧ `50` ਸਟੇਟਮੈਂਟ, ਅਤੇ ਨਤੀਜੇ ਦੀ ਹੱਦ ਲਗਭਗ `12k` ਟੋਕਨ। ਬਦਲਾਅ ਵਾਲੇ ਬੈਚ ਇਕੱਠੇ, ਐਟੌਮਿਕ ਤਰੀਕੇ ਨਾਲ ਲਾਗੂ ਹੁੰਦੇ ਹਨ।
- **ਪੜ੍ਹਨ ਅਤੇ ਲਿਖਣ ਦੀ ਵੰਡ**: `sql_query` ਅਤੇ `list_workspaces` ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਿਰਫ਼ ਪੜ੍ਹਨ ਲਈ ਹਨ (`readOnlyHint`) ਅਤੇ ਕਦੇ ਵੀ ਡਾਟਾ ਠੀਕ ਨਹੀਂ ਕਰਦੇ, ਸ਼ਡਿਊਲਿੰਗ ਦੁਬਾਰਾ ਨਹੀਂ ਗਿਣਦੇ ਜਾਂ ਕਾਰਡ ਦੀ ਸਥਿਤੀ ਨਹੀਂ ਬਦਲਦੇ। `sql_execute` ਹੀ ਇਕਲੌਤਾ SQL ਲਿਖਣ ਵਾਲਾ ਟੂਲ ਹੈ ਅਤੇ ਲਿਖਤਾਂ ਕਰਦਾ ਹੈ (`destructiveHint`); ਇੱਕ ਕਾਲ ਵਿੱਚ ਜਾਂ ਤਾਂ ਸਾਰੇ ਪੜ੍ਹਨ ਵਾਲੇ ਸਟੇਟਮੈਂਟ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ ਜਾਂ ਸਾਰੇ ਲਿਖਣ ਵਾਲੇ। SQL `review_events` ਜਾਂ FSRS ਸ਼ਡਿਊਲਿੰਗ ਦੀ ਸਥਿਤੀ ਵਿੱਚ ਨਹੀਂ ਲਿਖ ਸਕਦਾ; ਸਿਰਫ਼ `POST /v1/agent/reviews/submit` (MCP ਵਿੱਚ `submit_review`) ਹੀ ਦੁਹਰਾਈ ਦਰਜ ਕਰਦਾ ਹੈ।

## ਗਾਈਡਾਂ

`GET /v1/agent/guide/{topic}` ਇੱਕ ਹਵਾਲਾ ਗਾਈਡ `data.guide` ਵਿੱਚ ਵਾਪਸ ਕਰਦਾ ਹੈ, ਉਹੀ ਸਮੱਗਰੀ ਜੋ MCP ਦਾ `get_guide` ਟੂਲ ਦਿੰਦਾ ਹੈ। ਵਿਸ਼ੇ:

- `sql_dialect`: ਪੂਰਾ SQL ਵਿਆਕਰਨ, ਹੱਦਾਂ ਅਤੇ ਮਿਸਾਲਾਂ
- `card_authoring`: ਕਾਰਡ ਦਾ ਕੰਟਰੈਕਟ, ਟੈਗ, ਡੁਪਲੀਕੇਟ ਕਾਰਡਾਂ ਦੀ ਜਾਂਚ ਅਤੇ ਫ਼ਾਰਮੈਟਿੰਗ
- `bulk_authoring`: ਵੱਡੇ ਲਿਖਣ ਵਾਲੇ ਕੰਮ ਨੂੰ ਹਿੱਸਿਆਂ ਵਿੱਚ ਵੰਡਣਾ ਅਤੇ ਜਾਂਚਣਾ
- `review_flow`: ਦੁਹਰਾਈ ਅਤੇ ਰੇਟਿੰਗ ਦਾ ਚੱਕਰ

ਅਣਜਾਣ ਵਿਸ਼ੇ ਉੱਤੇ ਸਮਰਥਿਤ ਵਿਸ਼ਿਆਂ ਦੀ ਸੂਚੀ ਨਾਲ `400` ਜਵਾਬ ਮਿਲਦਾ ਹੈ। ਕਾਰਡ ਬਣਾਉਣ, ਵੱਡੀ ਮਾਤਰਾ ਵਿੱਚ ਲਿਖਣ ਜਾਂ ਦੁਹਰਾਈ ਚਲਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਮਿਲਦੀ-ਜੁਲਦੀ ਗਾਈਡ ਲਓ, ਅਤੇ ਕੋਈ ਸਟੇਟਮੈਂਟ ਰੱਦ ਹੋਣ ਤੋਂ ਬਾਅਦ `sql_dialect` ਦੁਬਾਰਾ ਪੜ੍ਹੋ।

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## ਦੁਹਰਾਈਆਂ

ਦੁਹਰਾਈ ਵਾਲੇ ਰੂਟ ਏਜੰਟ ਨੂੰ ਸਿੱਖਣ ਵਾਲੇ ਤੋਂ ਇੱਕ ਵਾਰ ਵਿੱਚ ਇੱਕ ਕਾਰਡ ਪੁੱਛਣ ਅਤੇ ਹਰ ਰੇਟਿੰਗ ਕਾਰਡ ਦੇ FSRS ਸ਼ਡਿਊਲ ਵਿੱਚ ਸੰਭਾਲਣ ਦਿੰਦੇ ਹਨ। ਇਹ MCP ਦੇ ਦੁਹਰਾਈ ਵਾਲੇ ਟੂਲਾਂ ਵਾਂਗ ਹੀ JSON ਆਰਗੂਮੈਂਟ ਲੈਂਦੇ ਹਨ:

- `POST /v1/agent/reviews/next` ਇੱਕ `card` ਵਾਪਸ ਕਰਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ `cardId` ਅਤੇ `frontText` ਹੁੰਦੇ ਹਨ, ਜਾਂ ਜਦੋਂ ਕਿਸੇ ਕਾਰਡ ਦੀ ਦੁਹਰਾਈ ਬਾਕੀ ਨਾ ਹੋਵੇ ਤਾਂ `card: null`। ਵਿਕਲਪਿਕ `tags` (ਇਨ੍ਹਾਂ ਵਿੱਚੋਂ ਕੋਈ ਵੀ ਟੈਗ) ਜਾਂ `deckId` ਕਤਾਰ ਨੂੰ ਸੀਮਤ ਕਰਦਾ ਹੈ, ਪਰ ਦੋਵੇਂ ਇਕੱਠੇ ਕਦੇ ਨਹੀਂ; ਬਿਨਾਂ ਬਾਡੀ ਵਾਲੀ ਬੇਨਤੀ ਵੀ ਜਾਇਜ਼ ਹੈ।
- `POST /v1/agent/reviews/reveal` ਲਈ `cardId` ਲਾਜ਼ਮੀ ਹੈ ਅਤੇ ਇਹ ਉਸ ਕਾਰਡ ਦਾ `backText` ਵਾਪਸ ਕਰਦਾ ਹੈ।
- `POST /v1/agent/reviews/submit` ਲਈ `cardId`, ਕਲਾਇੰਟ ਵੱਲੋਂ ਬਣਾਇਆ `reviewId` UUID, `Again`, `Hard`, `Good` ਜਾਂ `Easy` ਵਿੱਚੋਂ ਇੱਕ `rating`, ਅਤੇ ਸਿੱਖਣ ਵਾਲੇ ਦਾ IANA `reviewedTimeZone` ਲਾਜ਼ਮੀ ਹਨ। ਸਰਵਰ ਦੁਹਰਾਈ ਦਾ ਸਮਾਂ ਦਰਜ ਕਰਦਾ ਹੈ ਅਤੇ ਕਾਰਡ ਦਾ ਨਵਾਂ ਸ਼ਡਿਊਲ ਵਾਪਸ ਕਰਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ `dueAt`, `state`, `reps` ਅਤੇ `lapses` ਸ਼ਾਮਲ ਹਨ।

ਤਿੰਨੇ ਰੂਟ ਵਿਕਲਪਿਕ `workspaceId` ਲੈਂਦੇ ਹਨ। ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ `reviewId` ਸੰਭਾਲ ਲਓ, ਅਤੇ ਜੇ ਭੇਜਣ ਦੇ ਨਤੀਜੇ ਬਾਰੇ ਯਕੀਨ ਨਾ ਹੋਵੇ, ਤਾਂ ਬਿਲਕੁਲ ਉਹੀ ਬੇਨਤੀ ਦੁਬਾਰਾ ਭੇਜੋ; ਇਸ ਨਾਲ ਦੂਜੀ ਦੁਹਰਾਈ ਕਦੇ ਦਰਜ ਨਹੀਂ ਹੁੰਦੀ। ਦੁਹਰਾਈ ਵਾਲੇ ਰੂਟ ਇਹ ਜਵਾਬ ਵੀ ਦੇ ਸਕਦੇ ਹਨ:

- `409 REVIEW_EVENT_CONFLICT`: ਦੁਹਰਾਈ ਪਹਿਲਾਂ ਹੀ ਦਰਜ ਹੋ ਚੁੱਕੀ ਹੈ, ਅਤੇ `error.details.reviewSchedule` ਵਿੱਚ ਕਾਰਡ ਦਾ ਮੌਜੂਦਾ ਸ਼ਡਿਊਲ ਹੁੰਦਾ ਹੈ।
- `409 REVIEW_ID_CARD_MISMATCH`: ਇਹ `reviewId` ਪਹਿਲਾਂ ਹੀ ਕਿਸੇ ਹੋਰ ਕਾਰਡ ਦੀ ਦੁਹਰਾਈ ਦੀ ਪਛਾਣ ਵਜੋਂ ਵਰਤਿਆ ਜਾ ਚੁੱਕਾ ਹੈ, ਇਸ ਲਈ ਕੁਝ ਵੀ ਸੰਭਾਲਿਆ ਨਹੀਂ ਗਿਆ; ਨਵੇਂ `reviewId` ਨਾਲ ਦੁਬਾਰਾ ਭੇਜੋ।
- `409 REVIEW_STALE`: ਕਾਰਡ ਦਾ ਸੰਭਾਲਿਆ ਦੁਹਰਾਈ ਸਮਾਂ ਸਰਵਰ ਦੇ ਮੌਜੂਦਾ ਸਮੇਂ ਦੇ ਬਰਾਬਰ ਜਾਂ ਉਸ ਤੋਂ ਬਾਅਦ ਦਾ ਹੈ; ਕੋਈ ਹੋਰ ਕਾਰਡ ਦੁਹਰਾਓ।
- `400 REVIEW_INPUT_INVALID`: ਕੋਈ ਆਰਗੂਮੈਂਟ ਗੁੰਮ, ਗਲਤ ਜਾਂ ਅਸਮਰਥਿਤ ਹੈ, ਜਿਸ ਵਿੱਚ `deckId` ਨਾਲ ਮਿਲਾਏ `tags` ਜਾਂ ਅਜਿਹਾ ਟੈਗ ਸ਼ਾਮਲ ਹੈ ਜੋ ਵਰਕਸਪੇਸ ਵਿੱਚ ਵਰਤਿਆ ਨਹੀਂ ਜਾਂਦਾ।

ਭੇਜਣ ਦੀ ਮਿਸਾਲ:

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

## ਲੋਕਾਂ ਲਈ ਅਤੇ ਸਿੰਕ ਵਾਲੇ API

Nibomo ਵਿੱਚ ਲੋਕਾਂ ਵੱਲੋਂ ਵਰਤੇ ਜਾਂਦੇ ਕਲਾਇੰਟਾਂ ਅਤੇ ਆਫ਼ਲਾਈਨ-ਫ਼ਸਟ ਸਿੰਕ ਲਈ ਵੱਖਰੇ API ਵੀ ਹਨ, ਪਰ ਉਹ ਬਾਹਰੀ ਏਜੰਟਾਂ ਲਈ ਮੁੱਖ ਕੰਟਰੈਕਟ ਨਹੀਂ ਹਨ:

- ਬ੍ਰਾਊਜ਼ਰ ਵਾਲੇ ਪ੍ਰਵਾਹ ਸਾਂਝੇ ਡੋਮੇਨ ਵਾਲੀਆਂ ਕੂਕੀਜ਼ ਅਤੇ CSRF ਸੁਰੱਖਿਆ ਵਰਤਦੇ ਹਨ
- ਆਫ਼ਲਾਈਨ-ਫ਼ਸਟ ਕਲਾਇੰਟ `/v1/workspaces/{workspaceId}/sync/push` ਅਤੇ `/v1/workspaces/{workspaceId}/sync/pull` ਹੇਠਲੇ ਲਾਗੂ ਕੀਤੇ ਸਿੰਕ ਰੂਟ ਵਰਤਦੇ ਹਨ
- ਸਿੰਕ ਰੂਟ ਬਾਹਰੀ ਏਜੰਟ ਇੰਟਰਫ਼ੇਸ ਤੋਂ ਵੱਖਰੇ ਹਨ
