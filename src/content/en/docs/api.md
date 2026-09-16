---
title: API Reference
description: External agent API for discovery, OTP bootstrap, workspace setup, and the published read and write SQL surfaces.
---

## Overview

This page documents the current external AI-agent contract for Flashcards.

If your client speaks MCP, the [MCP connector](/docs/mcp-connector/) is the
simplest way to connect and wraps this same data surface. This page documents the
HTTP discovery, SQL, guide, and review contract used by CLI agents.

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
- fetch reference guides and review cards one at a time

## Runtime Discovery And Source

OpenAPI is unavailable. The four former specification URLs below now return the same JSON discovery notice with `"openapiAvailable": false` instead of a schema:

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`
- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

Use `GET https://api.flashcards-open-source-app.com/v1/` for current runtime discovery. Follow the returned `docs.discoveryUrl` for runtime routes and `docs.source.agentRoutesUrl` for implementation details.

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
- `GET /v1/agent/guide/{topic}` (read-only)
- `POST /v1/agent/reviews/next` (read-only)
- `POST /v1/agent/reviews/reveal` (read-only)
- `POST /v1/agent/reviews/submit` (write)

Typical bootstrap looks like this:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. If needed, `POST /v1/agent/workspaces` with `{"name":"Personal"}`
4. If needed, `POST /v1/agent/workspaces/{workspaceId}/select`
5. Use `POST /v1/agent/sql/query` for reads and `POST /v1/agent/sql/execute` for writes

The workspace selection is explicit per API key connection. Agents should follow the returned `instructions` text and `docs.discoveryUrl` for runtime routes, plus `docs.source.agentRoutesUrl` for implementation details, instead of guessing the next step.

The SQL and review routes also accept an optional `workspaceId` in the JSON body. It targets that workspace for one call without changing the selection; omit it to use the selected workspace. With neither a selection nor a `workspaceId`, they answer `409 WORKSPACE_SELECTION_REQUIRED`.

## SQL Surface

`POST /v1/agent/sql/query` is the strictly read-only surface (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) and `POST /v1/agent/sql/execute` is the write surface (`INSERT`, `UPDATE`, `DELETE`); a single call must be all reads or all writes.

It is intentionally limited and is not full PostgreSQL. These docs cover only
the supported dialect, not a PostgreSQL compatibility reference.

No read path repairs data, recalculates scheduling, or changes card state. Use
`POST /v1/agent/sql/execute` for every card and deck write. SQL cannot write
`review_events` or FSRS scheduling state; record reviews through
`POST /v1/agent/reviews/submit`.

Current statement families:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
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
- every SQL call is scoped to one workspace: the `workspaceId` in the body, or the selected workspace

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

A remote MCP server is also available at `https://mcp.flashcards-open-source-app.com/mcp` using OAuth 2.1 (Dynamic Client Registration + PKCE). It exposes the same SQL split as `sql_query` (strictly read-only) and `sql_execute` (write), plus `list_workspaces`, `get_guide`, and the review tools `next_review_card`, `reveal_answer`, and `submit_review`; see the [MCP connector](/docs/mcp-connector/).

### Safety And Scope

The SQL surface is a contained, parser-enforced dialect rather than raw PostgreSQL. The guardrails are:

- **Closed statement allowlist**: only `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, and `SELECT` for reads, and `INSERT`, `UPDATE`, and `DELETE` for writes. Anything else is rejected at parse time.
- **Limited resources**: statements can only touch the `workspace`, `cards`, `decks`, and `review_events` resources.
- **Per-workspace scoping**: every statement is scoped to one workspace you can access, either the `workspaceId` in the request body or your selected workspace, with no cross-tenant access.
- **Strict request bodies**: the SQL and review routes reject an unknown body field, so a misspelled `workspaceId` fails instead of running against the selected workspace.
- **Caps**: up to `100` rows per statement, up to `50` statements per batch, and a result cap of roughly `12k` tokens. Mutation batches apply atomically.
- **Read/write split**: `sql_query` and `list_workspaces` are strictly read-only (`readOnlyHint`) and never repair data, recalculate scheduling, or change card state. `sql_execute` is the only SQL write tool and performs writes (`destructiveHint`); a single call must be all reads or all writes. SQL cannot write `review_events` or FSRS scheduling state; only `POST /v1/agent/reviews/submit` (MCP `submit_review`) records a review.

## Guides

`GET /v1/agent/guide/{topic}` returns one reference guide in `data.guide`, the same body the MCP `get_guide` tool serves. Topics:

- `sql_dialect`: the full SQL grammar, limits, and examples
- `card_authoring`: the card contract, tags, duplicate checks, and formatting
- `bulk_authoring`: splitting and verifying a large write job
- `review_flow`: the review and rating loop

An unknown topic answers `400` with the list of supported topics. Fetch the matching guide before authoring cards, writing in bulk, or running a review, and re-read `sql_dialect` after a rejected statement.

```bash
curl https://api.flashcards-open-source-app.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Reviews

The review routes let an agent quiz a learner one card at a time and save each rating to the card's FSRS schedule. They take the same JSON arguments as the MCP review tools:

- `POST /v1/agent/reviews/next` returns `card` with `cardId` and `frontText`, or `card: null` when nothing is due. Optional `tags` (any of) or `deckId` narrows the queue, never both; a request with no body is valid.
- `POST /v1/agent/reviews/reveal` requires `cardId` and returns that card's `backText`.
- `POST /v1/agent/reviews/submit` requires `cardId`, a client-generated `reviewId` UUID, a `rating` of `Again`, `Hard`, `Good`, or `Easy`, and the learner's IANA `reviewedTimeZone`. The server stamps the review time and returns the card's new schedule, including `dueAt`, `state`, `reps`, and `lapses`.

All three routes accept the optional `workspaceId`. Persist the `reviewId` before submitting, and retry an uncertain submission with the identical request; it never records a second review. The review routes can also answer:

- `409 REVIEW_EVENT_CONFLICT`: the review was already recorded, and `error.details.reviewSchedule` carries the card's current schedule.
- `409 REVIEW_ID_CARD_MISMATCH`: the `reviewId` already identifies a review of a different card, so nothing was stored; submit again with a new `reviewId`.
- `409 REVIEW_STALE`: the card's stored review time is at or after the current server time; review another card.
- `400 REVIEW_INPUT_INVALID`: an argument is missing, invalid, or unsupported, including `tags` combined with `deckId` or a tag the workspace does not use.

Example submission:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/reviews/submit \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "cardId":"693c4863-28a2-45e8-8f55-9fa31fc95ff2",
    "reviewId":"429bb7cc-40fb-49f3-bb50-48a5db2826d1",
    "rating":"Good",
    "reviewedTimeZone":"Europe/Sofia"
  }'
```

## Human And Sync APIs

Flashcards also includes separate APIs for human clients and offline-first sync, but they are not the main contract for external agents:

- browser flows use shared-domain cookies plus CSRF protection
- offline-first clients use implemented sync routes under `/v1/workspaces/{workspaceId}/sync/push` and `/v1/workspaces/{workspaceId}/sync/pull`
- sync routes are separate from the external agent surface
