---
title: API 参考
description: 面向外部智能代理的 API，涵盖发现入口、OTP 登录引导、工作区设置以及公开的 SQL 接口。
---

## 概览

本页说明 Flashcards 当前面向外部智能代理公开的 API 约定。

请从规范的发现入口开始：

```text
GET https://api.flashcards-open-source-app.com/v1/
```

同一份发现响应也可以通过 `GET /v1/agent` 获取，但 `/v1/` 才是主要的公开入口。

发现响应会告诉智能代理如何：

- 发起邮箱 OTP 登录
- 将 OTP 换取为长期有效的 API 密钥
- 读取账户上下文
- 创建或选择工作区
- 继续调用已公开的 SQL 接口

## 已发布规范

面向外部智能代理接口的主要规范 URL 如下：

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`

此外也提供等价的根路径别名：

- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

## 认证引导

OTP 引导流程运行在认证服务上：

- `POST https://auth.flashcards-open-source-app.com/api/agent/send-code`
- `POST https://auth.flashcards-open-source-app.com/api/agent/verify-code`

流程如下：

1. 调用 `GET /v1/`。
2. 将用户的邮箱地址发送到 `send-code`。
3. 从响应中读取 `otpSessionToken`。
4. 向用户获取最新的 8 位邮件验证码。
5. 使用 `code`、`otpSessionToken` 和 `label` 调用 `verify-code`。
6. 将返回的 API 密钥持久保存在聊天上下文之外。

推荐使用以下环境变量：

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

已认证请求使用以下头部：

```text
Authorization: ApiKey <key>
```

引导流程示例：

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

完成验证后，目前可用的智能代理接口如下：

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql`

典型的接入顺序如下：

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. 如有需要，调用 `POST /v1/agent/workspaces` 并传入 `{"name":"Personal"}`
4. 如有需要，调用 `POST /v1/agent/workspaces/{workspaceId}/select`
5. 使用 `POST /v1/agent/sql`

工作区选择需要针对每个 API 密钥连接显式完成。智能代理应以每个响应封装返回的 `instructions` 文本和 `docs.openapiUrl` 字段为准，不要自行猜测下一步。

## SQL 接口

`POST /v1/agent/sql` 是外部智能代理共用的读写入口。

该接口刻意限制了能力边界，并不是完整的 PostgreSQL。

当前支持的语句类别如下：

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

当前已公开的逻辑资源包括：

- `workspace`
- `cards`
- `decks`
- `review_events`

说明：

- `LIMIT` 的默认值为 `100`，上限也是 `100`
- 如果需要稳定分页，请使用 `ORDER BY`
- 可使用 `SHOW TABLES` 或 `DESCRIBE cards` 进行结构探查
- 完成工作区选择后，外部智能代理接口的作用范围即限定在所选 workspace 内

示例请求：

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

卡片查询示例：

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

写入示例：

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

## 面向人工用户和同步的 API

Flashcards 也提供面向人工用户客户端和离线优先同步的独立 API，但它们并不是外部智能代理的主要接口约定：

- 浏览器流程使用共享域 cookie，并配合 CSRF 保护
- 离线优先客户端使用 `/v1/workspaces/{workspaceId}/sync/push` 与 `/v1/workspaces/{workspaceId}/sync/pull` 下已实现的同步路由
- 这些同步路由有意不纳入外部智能代理的 OpenAPI 接口范围
