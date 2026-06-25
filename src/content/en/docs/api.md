---
title: API Reference
description: External agent API for discovery, OTP bootstrap, workspace setup, and the published read and write SQL surfaces.
---

## Overview

This page documents the current external AI-agent contract for Flashcards.

If your client speaks MCP, the [MCP connector](/docs/mcp-connector/) is the
simplest way to connect and wraps this same data surface. This page documents the
HTTP discovery and SQL contract used by CLI agents.

Start from the canonical discovery entrypoint:

```text
GET https://api.flashcards-open-source-app.com/v1/
```

The same discovery payload is also available at `GET /v1/agent`, but `/v1/` is the primary public entrypoint.

The discovery response tells an agent how to:

- start email OTP login
- exchange the OTP for a long-lived API key
- load account context
- create or select a workspace
- continue through the published SQL surface

## Published Specs

Primary spec URLs for the external agent surface:

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`

Equivalent root aliases also exist:

- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

## Authentication Bootstrap

OTP bootstrap runs on the auth service:

- `POST https://auth.flashcards-open-source-app.com/api/agent/send-code`
- `POST https://auth.flashcards-open-source-app.com/api/agent/verify-code`

The flow is:

1. Call `GET /v1/`.
2. Send the user's email to `send-code`.
3. Read `otpSessionToken` from the response.
4. Ask the user for the latest 8-digit email code.
5. Call `verify-code` with `code`, `otpSessionToken`, and `label`.
6. Persist the returned API key outside chat memory.

Recommended environment variable:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Authenticated requests use:

```text
Authorization: ApiKey <key>
```

Example bootstrap sequence:

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Codex on MacBook"
  }'
```

## Post-Login Agent Surface

After verification, the current agent surface is:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (read-only)
- `POST /v1/agent/sql/execute` (write)

Typical bootstrap looks like this:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. If needed, `POST /v1/agent/workspaces` with `{"name":"Personal"}`
4. If needed, `POST /v1/agent/workspaces/{workspaceId}/select`
5. Use `POST /v1/agent/sql/query` for reads and `POST /v1/agent/sql/execute` for writes

The workspace selection is explicit per API key connection. Agents should follow the returned `instructions` text and `docs.openapiUrl` field from each envelope instead of guessing the next step.

## SQL Surface

`POST /v1/agent/sql/query` is the strictly read-only surface (`SHOW TABLES`, `DESCRIBE`, `SELECT`) and `POST /v1/agent/sql/execute` is the write surface (`INSERT`, `UPDATE`, `DELETE`); a single call must be all reads or all writes.

It is intentionally limited and is not full PostgreSQL. These docs cover only
the supported dialect, not a PostgreSQL compatibility reference.

No read path repairs data, recalculates scheduling, or changes card state. Use
`POST /v1/agent/sql/execute` for every write.

Current statement families:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Published logical resources currently include:

- `workspace`
- `cards`
- `decks`
- `review_events`

Notes:

- `LIMIT` defaults to `100` and is capped at `100`
- use `ORDER BY` when you need stable pagination
- use `SHOW TABLES` or `DESCRIBE cards` for schema discovery
- the external agent contract is workspace-scoped after selection

Example request:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Example card query:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Example mutation:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

A remote MCP server is also available at `https://mcp.flashcards-open-source-app.com/mcp` using OAuth 2.1 (Dynamic Client Registration + PKCE). It exposes the same split as two tools, `sql_query` (strictly read-only) and `sql_execute` (write), plus strictly read-only `list_workspaces`.

### Safety And Scope

The SQL surface is a contained, parser-enforced dialect rather than raw PostgreSQL. The guardrails are:

- **Closed statement allowlist**: only `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, and `SELECT` for reads, and `INSERT`, `UPDATE`, and `DELETE` for writes. Anything else is rejected at parse time.
- **Limited resources**: statements can only touch the `workspace`, `cards`, `decks`, and `review_events` resources.
- **Per-workspace scoping**: every statement is scoped to your selected workspace, with no cross-tenant access.
- **Caps**: up to `100` rows per statement, up to `50` statements per batch, and a result cap of roughly `12k` tokens. Mutation batches apply atomically.
- **Read/write split**: `sql_query` and `list_workspaces` are strictly read-only (`readOnlyHint`) and never repair data, recalculate scheduling, or change card state. `sql_execute` is the only write tool and performs writes (`destructiveHint`); a single call must be all reads or all writes.

## Human And Sync APIs

Flashcards also includes separate APIs for human clients and offline-first sync, but they are not the main contract for external agents:

- browser flows use shared-domain cookies plus CSRF protection
- offline-first clients use implemented sync routes under `/v1/workspaces/{workspaceId}/sync/push` and `/v1/workspaces/{workspaceId}/sync/pull`
- sync routes are intentionally outside the external agent OpenAPI surface
