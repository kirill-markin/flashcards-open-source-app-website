---
title: API リファレンス
description: Discovery、OTP bootstrap、workspace setup、published SQL surface のための external agent API。
---

## Overview

このページは Flashcards における AI agents 向けの current external contract を説明します。

Primary discovery entry point:

```text
GET https://api.flashcards-open-source-app.com/v1/
```

同じ payload は `GET /v1/agent` でも利用できますが、`/v1/` が primary public entry point です。

Discovery response は agent に次の方法を伝えます:

- email OTP login を開始する
- OTP を long-lived API key に交換する
- account context を読み込む
- workspace を create / select する
- published SQL surface へ進む

## Published Specs

External agent surface の main spec URLs:

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`

Root aliases:

- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

## Auth Bootstrap

最初の OTP stage は auth service 上で動きます:

- `POST https://auth.flashcards-open-source-app.com/api/agent/send-code`
- `POST https://auth.flashcards-open-source-app.com/api/agent/verify-code`

Flow:

1. `GET /v1/` を実行する
2. User email を `send-code` に送る
3. Response から `otpSessionToken` を読む
4. User に最新の8桁メールコードを聞く
5. `verify-code` を `code`、`otpSessionToken`、`label` とともに呼ぶ
6. Returned API key を conversation memory の外に保存する

Suggested environment variable:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Authenticated requests use:

```text
Authorization: ApiKey <key>
```

## Post-Login Agent Surface

Verification 後の current surface:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql`

Typical bootstrap:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. 必要なら `POST /v1/agent/workspaces` with `{"name":"Personal"}`
4. 必要なら `POST /v1/agent/workspaces/{workspaceId}/select`
5. `POST /v1/agent/sql` を使う

Workspace selection は各 API key connection で明示的です。Agents は推測せず、returned `instructions` と `docs.openapiUrl` に従うべきです。

## SQL Surface

`POST /v1/agent/sql` は external agents 向けの shared read/write surface です。

これは意図的に制限されており、full PostgreSQL ではありません。

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

- Default `LIMIT` は `100`、maximum も `100`
- Stable pagination が必要なら `ORDER BY` を使う
- Schema discovery には `SHOW TABLES` や `DESCRIBE cards` を使う
- External contract は post-selection で workspace-scoped になる

Example request:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

## Human And Sync APIs

Flashcards には human clients と offline-first sync 向けの separate APIs もありますが、external agents の primary contract ではありません:

- Browser flows は CSRF protection と shared-domain cookies を使う
- Offline-first clients は `/v1/workspaces/{workspaceId}/sync/push` と `/v1/workspaces/{workspaceId}/sync/pull` の sync routes を使う
- Sync routes は intentional に external agent OpenAPI surface の外に置かれている
