---
title: API Reference
description: 用于 discovery、OTP bootstrap、workspace setup 和 published SQL surface 的 external agent API。
---

## Overview

本页记录 Flashcards 当前面向 AI agents 的 external contract。

Primary discovery entry point:

```text
GET https://api.flashcards-open-source-app.com/v1/
```

同样的 payload 也可通过 `GET /v1/agent` 获取，但 `/v1/` 是 primary public entry point。

Discovery response 会告诉 agent 如何：

- 启动 email OTP login
- 将 OTP 交换为 long-lived API key
- 加载 account context
- 创建或选择 workspace
- 继续进入 published SQL surface

## Published Specs

External agent surface 的主要 spec URLs：

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`

Root aliases:

- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

## Auth Bootstrap

第一阶段 OTP 运行在 auth service 上：

- `POST https://auth.flashcards-open-source-app.com/api/agent/send-code`
- `POST https://auth.flashcards-open-source-app.com/api/agent/verify-code`

Flow:

1. 执行 `GET /v1/`
2. 把 user email 发送到 `send-code`
3. 从 response 读取 `otpSessionToken`
4. 向 user 请求最新的 8-digit email code
5. 使用 `code`、`otpSessionToken` 和 `label` 调用 `verify-code`
6. 将 returned API key 保存在 conversation memory 之外

Suggested environment variable:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Authenticated requests use:

```text
Authorization: ApiKey <key>
```

## Post-Login Agent Surface

Verification 之后的 current surface：

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql`

Typical bootstrap:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. 如有需要，`POST /v1/agent/workspaces` with `{"name":"Personal"}`
4. 如有需要，`POST /v1/agent/workspaces/{workspaceId}/select`
5. 使用 `POST /v1/agent/sql`

Workspace selection 对每个 API key connection 都是显式的。Agents 应该遵循 returned `instructions` 和 `docs.openapiUrl`，而不是猜测。

## SQL Surface

`POST /v1/agent/sql` 是 external agents 共享的 read/write surface。

它被有意限制，并不是 full PostgreSQL。

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

- 默认 `LIMIT` 为 `100`，最大值也是 `100`
- 需要 stable pagination 时请使用 `ORDER BY`
- 使用 `SHOW TABLES` 或 `DESCRIBE cards` 做 schema discovery
- External contract 在完成 selection 后会变成 workspace-scoped

Example request:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

## Human And Sync APIs

Flashcards 还包含面向 human clients 和 offline-first sync 的其他 APIs，但它们不是 external agents 的 primary contract：

- Browser flows 使用 shared-domain cookies 和 CSRF protection
- Offline-first clients 使用 `/v1/workspaces/{workspaceId}/sync/push` 与 `/v1/workspaces/{workspaceId}/sync/pull` 下的 sync routes
- Sync routes 被有意排除在 external agent OpenAPI surface 之外
