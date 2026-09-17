---
title: API 参考
description: 面向外部智能代理的 API，涵盖发现入口、OTP 登录准备流程、工作区配置以及已公开的读取和写入 SQL 能力。
---

## 概览

本页介绍 Nibomo 当前面向外部智能代理公开的 API 约定。

如果你的客户端支持 MCP，[MCP 连接器](/docs/mcp-connector/) 是最简单的连接方式，
并且封装的是同一套数据接口。本页介绍 CLI 智能代理使用的
HTTP 发现、SQL、指南和复习约定。

请从标准发现入口开始：

```text
GET https://api.flashcards-open-source-app.com/v1/
```

同一份发现响应也可以通过 `GET /v1/agent` 获取，但 `/v1/` 才是首选的公开入口。

发现响应会告诉智能代理如何：

- 发起邮箱 OTP 登录流程
- 将 OTP 换成长期有效的 API 密钥
- 读取账户上下文
- 创建或选择工作区
- 继续调用已公开的 SQL 能力
- 获取参考指南，并逐张复习卡片

## 运行时发现与源代码

OpenAPI 已不可用。以下四个旧规范 URL 现在不会返回架构，而是返回同一份包含 `"openapiAvailable": false` 的 JSON 发现通知：

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`
- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

请使用 `GET https://api.flashcards-open-source-app.com/v1/` 获取当前运行时发现信息。请根据返回的 `docs.discoveryUrl` 查找运行时路由，并通过 `docs.source.agentRoutesUrl` 查看实现细节。

## 认证准备流程

OTP 登录准备流程运行在认证服务上：

- `POST https://auth.flashcards-open-source-app.com/api/agent/send-code`
- `POST https://auth.flashcards-open-source-app.com/api/agent/verify-code`

流程如下：

1. 调用 `GET /v1/`。
2. 将用户的邮箱地址发送给 `send-code`。
3. 从响应里读取 `otpSessionToken`。
4. 向用户获取最新收到的 8 位邮件验证码。
5. 携带 `code`、`otpSessionToken` 和 `label` 调用 `verify-code`。
6. 将返回的 API 密钥持久保存在聊天记忆之外。

推荐使用以下环境变量名称：

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

已认证请求需使用以下请求头：

```text
Authorization: ApiKey <key>
```

登录准备流程示例：

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

## 登录后的代理接口

完成验证后，目前开放给智能代理的接口如下：

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query`（只读）
- `POST /v1/agent/sql/execute`（写入）
- `GET /v1/agent/guide/{topic}`（只读）
- `POST /v1/agent/reviews/next`（只读）
- `POST /v1/agent/reviews/reveal`（只读）
- `POST /v1/agent/reviews/submit`（写入）

典型接入流程如下：

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. 如有需要，调用 `POST /v1/agent/workspaces` 并传入 `{"name":"Personal"}`
4. 如有需要，调用 `POST /v1/agent/workspaces/{workspaceId}/select`
5. 读取时使用 `POST /v1/agent/sql/query`，写入时使用 `POST /v1/agent/sql/execute`

工作区选择需要针对每个 API 密钥连接显式执行。智能代理应以响应中返回的 `instructions` 文本、用于运行时路由的 `docs.discoveryUrl` 以及用于实现细节的 `docs.source.agentRoutesUrl` 为准，不要自行猜测下一步。

SQL 路由和复习路由还接受 JSON 请求体中的可选 `workspaceId`。它只让单次调用作用于该工作区，而不会更改已选择的工作区；省略它则使用所选工作区。如果既没有选择工作区，也没有提供 `workspaceId`，这些路由会返回 `409 WORKSPACE_SELECTION_REQUIRED`。

## SQL 接口

`POST /v1/agent/sql/query` 是严格只读入口（`SHOW TABLES`、`DESCRIBE`、`SHOW COLUMNS`、`SELECT`），`POST /v1/agent/sql/execute` 是写入入口（`INSERT`、`UPDATE`、`DELETE`）；单次调用必须全部为读取或全部为写入。

该接口经过有意限制，并不是完整的 PostgreSQL。这些文档只描述受支持的方言，而不是
PostgreSQL 兼容性参考。

任何读取路径都不会修复数据、重新计算排期或更改卡片状态。所有卡片和卡组写入都应使用
`POST /v1/agent/sql/execute`。SQL 无法写入 `review_events` 或 FSRS 排期状态；请通过
`POST /v1/agent/reviews/submit` 记录复习。

当前支持的语句类型如下：

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

当前已公开的逻辑资源包括：

- `workspace`
- `cards`
- `decks`
- `review_events`

注意事项：

- `LIMIT` 默认值为 `100`，最大值也为 `100`
- 如果需要稳定分页，请使用 `ORDER BY`
- 可使用 `SHOW TABLES` 或 `DESCRIBE cards` 探查结构
- 每次 SQL 调用都限定在一个工作区内：请求体中的 `workspaceId`，或所选工作区

示例请求：

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

卡片查询示例：

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

更新示例：

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

此外还提供远程 MCP 服务器，地址为 `https://mcp.flashcards-open-source-app.com/mcp`，使用 OAuth 2.1（Dynamic Client Registration + PKCE）。它以 `sql_query`（严格只读）和 `sql_execute`（写入）提供相同的 SQL 拆分，另外还提供 `list_workspaces`、`get_guide`，以及复习工具 `next_review_card`、`reveal_answer` 和 `submit_review`；详见 [MCP 连接器](/docs/mcp-connector/)。

### 安全与作用域

SQL 接口是一个受限的、由解析器强制约束的方言，而非原生 PostgreSQL。其防护措施包括：

- **封闭的语句白名单**：读取仅支持 `SHOW TABLES`、`DESCRIBE`、`SHOW COLUMNS` 和 `SELECT`，写入仅支持 `INSERT`、`UPDATE` 和 `DELETE`。其他任何语句都会在解析阶段被拒绝。
- **受限的资源**：语句只能访问 `workspace`、`cards`、`decks` 和 `review_events` 这几个资源。
- **按工作区作用域**：每条语句都限定在你可以访问的某一个工作区内，即请求体中的 `workspaceId` 或你所选的工作区，不存在跨租户访问。
- **严格的请求体**：SQL 路由和复习路由会拒绝未知的请求体字段，因此拼写错误的 `workspaceId` 会直接失败，而不会在所选工作区上运行。
- **上限**：每条语句最多 `100` 行，每个批次最多 `50` 条语句，结果上限约为 `12k` 个 token。变更批次以原子方式应用。
- **读写分离**：`sql_query` 和 `list_workspaces` 为严格只读（`readOnlyHint`），不会修复数据、重新计算排期或更改卡片状态。`sql_execute` 是唯一的 SQL 写入工具，执行写入（`destructiveHint`）；单次调用必须全部为读取或全部为写入。SQL 无法写入 `review_events` 或 FSRS 排期状态；只有 `POST /v1/agent/reviews/submit`（MCP `submit_review`）会记录复习。

## 指南

`GET /v1/agent/guide/{topic}` 会在 `data.guide` 中返回一份参考指南，内容与 MCP `get_guide` 工具提供的相同。主题如下：

- `sql_dialect`：完整的 SQL 语法、限制和示例
- `card_authoring`：卡片约定、标签、重复检查和格式
- `bulk_authoring`：拆分并验证大型写入任务
- `review_flow`：复习与评分循环

未知主题会返回 `400`，并附带受支持的主题列表。在编写卡片、批量写入或进行复习之前，请先获取对应的指南；语句被拒绝后，请重新阅读 `sql_dialect`。

```bash
curl https://api.flashcards-open-source-app.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## 复习

复习路由让智能代理可以一次一张卡片地考查学习者，并将每次评分保存到该卡片的 FSRS 排期中。它们接受与 MCP 复习工具相同的 JSON 参数：

- `POST /v1/agent/reviews/next` 返回包含 `cardId` 和 `frontText` 的 `card`；没有待复习卡片时返回 `card: null`。可选的 `tags`（匹配其中任意一个）或 `deckId` 用于缩小队列范围，但二者不能同时使用；不带请求体的请求也是有效的。
- `POST /v1/agent/reviews/reveal` 需要 `cardId`，并返回该卡片的 `backText`。
- `POST /v1/agent/reviews/submit` 需要 `cardId`、一个由客户端生成的 `reviewId` UUID、取值为 `Again`、`Hard`、`Good` 或 `Easy` 的 `rating`，以及学习者的 IANA `reviewedTimeZone`。服务器会写入复习时间戳，并返回该卡片的新排期，包括 `dueAt`、`state`、`reps` 和 `lapses`。

这三个路由都接受可选的 `workspaceId`。请在提交前持久保存 `reviewId`，并使用完全相同的请求重试结果不确定的提交；这绝不会记录第二次复习。复习路由还可能返回：

- `409 REVIEW_EVENT_CONFLICT`：该复习已被记录，`error.details.reviewSchedule` 中带有该卡片当前的排期。
- `409 REVIEW_ID_CARD_MISMATCH`：该 `reviewId` 已标识另一张卡片的复习，因此没有存储任何内容；请使用新的 `reviewId` 重新提交。
- `409 REVIEW_STALE`：该卡片已存储的复习时间等于或晚于当前服务器时间；请复习另一张卡片。
- `400 REVIEW_INPUT_INVALID`：某个参数缺失、无效或不受支持，包括将 `tags` 与 `deckId` 组合使用，或使用了工作区中未使用的标签。

提交示例：

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

## 面向人工用户与同步场景的 API

Nibomo 也提供供人工用户客户端和离线优先同步场景使用的独立 API，但这些并不是外部智能代理的主要接口约定：

- 浏览器流程使用共享域 Cookie，并配合 CSRF 保护
- 离线优先客户端使用 `/v1/workspaces/{workspaceId}/sync/push` 与 `/v1/workspaces/{workspaceId}/sync/pull` 下已实现的同步路由
- 这些同步路由与外部智能代理接口相互独立
