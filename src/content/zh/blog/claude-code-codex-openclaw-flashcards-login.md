---
title: "如何让 Claude Code、Codex 或 OpenClaw 帮你登录 Flashcards"
description: "Flashcards 提供了一套开源的代理登录流程：一个 discovery URL、邮箱 OTP，以及长期有效的 API key。你只要把链接交给代理，再把邮件里的最新 8 位验证码发给它，它就能自己完成账户和工作区的初始化。"
date: "2026-03-10"
keywords:
  - "claude code login"
  - "codex login"
  - "email otp api"
  - "agent onboarding"
  - "open source flashcards app"
  - "open source api authentication"
---

现在大多数登录流程，依然默认所有初始化步骤都要由人亲手完成。

打开登录页。等验证码。复制令牌。手动创建 API key。再把它粘贴进另一个工具。还得把文档解释给代理听。中途一旦出问题，又得自己收拾会话状态。

这类工作，本来就应该交给工具处理。

在 [Flashcards](https://flashcards-open-source-app.com/) 里，我们现在提供了一套开源的代理登录流程，起点就是一个 discovery URL：

`https://api.flashcards-open-source-app.com/v1/`

这就是规范规定的标准入口。相同的 discovery payload 也可以通过 `https://api.flashcards-open-source-app.com/v1/agent` 获取，但当前约定的起点是 `/v1/`。

把这个 URL 交给 Claude Code、Codex 或 OpenClaw，代理就能自行理解流程、请求邮件验证码、完成校验、保存 API key、读取账户信息，并继续处理工作区初始化。

用户只需要做两件事：

- 提供邮箱地址
- 把邮件里最新的 8 位验证码发给代理

这就是这套流程的核心价值。

## 一个链接就够了

discovery 接口会在同一个响应里返回服务说明、认证模型、第一步该做什么，以及后续步骤的指引。

所以你不需要再为每个工具单独写一份接入说明。把这个 URL 交给代理，让它按照返回结果继续往下执行就够了。

```text
GET https://api.flashcards-open-source-app.com/v1/
```

代理拿到这个响应后，立刻就会明白四件事：

- 这是 Flashcards 服务
- 登录和注册都使用邮箱 OTP
- 验证成功后会返回一个长期有效的 API key
- 登录之后要继续完成账户和工作区初始化

## 整个流程是什么样的

整个流程被刻意压缩得很短。

1. 代理调用 discovery 接口。
2. 代理把用户邮箱发送到 `send-code`。
3. Flashcards 把 8 位验证码发到邮箱，并返回 `otpSessionToken`。
4. 代理向用户索取最新的验证码。
5. 代理验证验证码，并拿到长期有效的 API key。
6. 代理调用 `/v1/agent/me` 和 `/v1/agent/workspaces`。
7. 代理创建或选中正确的工作区，然后继续通过 `/v1/agent/sql` 工作。

这一点很重要，因为代理不会在“登录成功”后就停下来。它会继续完成后面的初始化步骤，并真正开始读写数据。

## 给 Claude Code 或 Codex 的示例提示词

下面这段提示词就够了：

```text
Use this Flashcards discovery URL:
https://api.flashcards-open-source-app.com/v1/

Log in to my Flashcards account, load account context, and select or create the correct workspace.
Ask me only for the latest 8-digit email code when the flow requires it.
```

之后你就不需要再手动解释认证流程了，接口本身已经把步骤交代清楚。

## 给 OpenClaw 的示例提示词

思路完全一样，只是写得更明确一些：

```text
Connect my Flashcards account using this URL:
https://api.flashcards-open-source-app.com/v1/

Follow the returned instructions, keep the API key secure, load my account, then continue to workspace setup.
If verification is needed, ask me for the latest 8-digit code from the email.
```

## 示例：discovery 响应

第一条请求如下：

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

返回结果的结构就是为了让终端代理无需猜测、可以直接继续往下执行：

```json
{
  "ok": true,
  "data": {
    "service": {
      "name": "flashcards-open-source-app",
      "version": "v1",
      "description": "Offline-first flashcards service with user-owned workspaces and a compact SQL agent surface."
    },
    "authentication": {
      "type": "email_otp_then_api_key",
      "sendCodeUrl": "https://auth.flashcards-open-source-app.com/api/agent/send-code",
      "verifyCodeUrl": "https://auth.flashcards-open-source-app.com/api/agent/verify-code"
    },
    "capabilitiesAfterLogin": [
      "Load account context",
      "Select a workspace",
      "Inspect the published SQL surface through OpenAPI and SQL introspection",
      "Read and write cards and decks through /agent/sql"
    ],
    "authBaseUrl": "https://auth.flashcards-open-source-app.com",
    "apiBaseUrl": "https://api.flashcards-open-source-app.com/v1",
    "surface": {
      "accountUrl": "https://api.flashcards-open-source-app.com/v1/agent/me",
      "workspacesUrl": "https://api.flashcards-open-source-app.com/v1/agent/workspaces",
      "sqlUrl": "https://api.flashcards-open-source-app.com/v1/agent/sql"
    }
  },
  "instructions": "Start with POST https://auth.flashcards-open-source-app.com/api/agent/send-code using the user's email, then POST https://auth.flashcards-open-source-app.com/api/agent/verify-code to obtain an API key. After login, call GET https://api.flashcards-open-source-app.com/v1/agent/me, then GET https://api.flashcards-open-source-app.com/v1/agent/workspaces?limit=100. If no workspace is selected for this API key, call POST https://api.flashcards-open-source-app.com/v1/agent/workspaces/{workspaceId}/select or create one with POST https://api.flashcards-open-source-app.com/v1/agent/workspaces using {\"name\":\"Personal\"}. After workspace bootstrap, use POST https://api.flashcards-open-source-app.com/v1/agent/sql for all shared card and deck reads and writes. Use https://api.flashcards-open-source-app.com/v1/agent/openapi.json for the full contract. The SQL surface is intentionally limited and is not full PostgreSQL.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

## 示例：发送邮件验证码

代理拿到用户邮箱之后，就会进入 OTP 这一步：

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{
    "email": "you@example.com"
  }'
```

服务端会把邮件发出去，并返回一个短期有效的验证会话：

```json
{
  "ok": true,
  "data": {
    "email": "you@example.com",
    "otpSessionToken": "...",
    "expiresInSeconds": 180,
    "authBaseUrl": "https://auth.flashcards-open-source-app.com",
    "apiBaseUrl": "https://api.flashcards-open-source-app.com/v1"
  },
  "instructions": "A verification code has been sent to the user's email. Ask for the 8-digit code from the email, then call verify_code with code, otpSessionToken, and a label for this agent connection. Read payload from data.* and do not expect resource fields at the top level. Select the next endpoint from instructions and confirm it with actions.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

这时候代理只需要短暂停一下，向用户要收件箱里最新的那组验证码。

## 示例：校验验证码并拿到 API key

用户把邮件里的验证码发回来之后，代理就可以完成登录：

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code": "12345678",
    "otpSessionToken": "...",
    "label": "Claude Code on MacBook"
  }'
```

验证成功后，会返回一个长期有效的 API key，以及下一步该做什么的指引：

```json
{
  "ok": true,
  "data": {
    "apiKey": "fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS",
    "authorizationScheme": "ApiKey",
    "apiBaseUrl": "https://api.flashcards-open-source-app.com/v1",
    "connection": {
      "connectionId": "connection-1",
      "label": "codex-import-bot",
      "createdAt": "2026-03-11T08:55:00.000Z",
      "lastUsedAt": null,
      "revokedAt": null
    }
  },
  "instructions": "Store this API key outside chat memory now. Use it in the Authorization header as 'ApiKey <key>'. Next call GET /v1/agent/me to load account context. Then call GET /v1/agent/workspaces?limit=100. If exactly one workspace exists, select it if needed. If no workspace exists, create one with POST /v1/agent/workspaces using {\"name\":\"Personal\"}. After a workspace is selected, use POST /v1/agent/sql for all data access. Use docs.openapiUrl for the full contract.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

这就是代理从“处理认证”切换到“开始使用账户”的分界点。

拿到这个 API key 之后，应当立刻把它保存在聊天上下文之外。最干净的做法，是先导出成环境变量，之后让代理重复复用：

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

## 示例：加载账户并继续进入工作区

下一条请求就是一次普通的带认证 API 调用：

```bash
curl https://api.flashcards-open-source-app.com/v1/agent/me \
  -H "Authorization: ApiKey YOUR_API_KEY"
```

返回结果会明确告诉代理，继续进入工作区初始化：

```json
{
  "ok": true,
  "data": {
    "userId": "user-123",
    "selectedWorkspaceId": null,
    "authTransport": "api_key",
    "profile": {
      "email": "you@example.com",
      "locale": "en",
      "createdAt": "2026-03-10T12:00:00.000Z"
    }
  },
  "instructions": "Next call GET https://api.flashcards-open-source-app.com/v1/agent/workspaces?limit=100 to inspect available workspaces for this API key. If data.nextCursor is not null, continue with the same endpoint and cursor=data.nextCursor until it becomes null. If no workspace is selected, call POST https://api.flashcards-open-source-app.com/v1/agent/workspaces/{workspaceId}/select. If no workspace exists, create one with POST https://api.flashcards-open-source-app.com/v1/agent/workspaces using {\"name\":\"Personal\"}. After a workspace is selected, use POST https://api.flashcards-open-source-app.com/v1/agent/sql for reads, writes, and SQL introspection. Read payload from data.* and use docs.openapiUrl for the full contract.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

从这里开始，代理就可以：

- 读取全部工作区
- 如果还没有工作区，就创建第一个工作区
- 如果有多个工作区，就选中正确的那个
- 查看发布在 `/v1/agent/openapi.json` 的公开契约
- 通过 `POST /v1/agent/sql` 执行读取、写入和 SQL 自省

这样一来，这个登录流程就不只是“技术上可行”，而是在实际使用中真正有价值。

`/v1/openapi.json` 和 `/v1/swagger.json` 这两个根级规范别名也存在，但面向代理的文档链接会刻意指向 `/v1/agent/openapi.json` 和 `/v1/agent/swagger.json`。

## 为什么这比手动设置 API key 更好

传统的 API 接入方式依然很别扭：

- 先在浏览器里登录
- 再打开设置页
- 手动创建令牌
- 把它复制到另一个工具里
- 还得一直开着文档，好让工具知道下一步做什么

而这套流程把其中大部分步骤都省掉了。

用户通过邮箱 OTP 证明身份，服务端再把长期有效的 API key 直接交给代理。同一种响应格式还会持续告诉代理下一步该做什么。

这对用户更简单，也更容易自动化。

## 这是开源的

Flashcards 是开源项目，所以你可以直接检查整个流程，而不是把它当成黑盒来用。

- 仓库： [github.com/kirill-markin/flashcards-open-source-app](https://github.com/kirill-markin/flashcards-open-source-app)
- Agent discovery 路由： [apps/backend/src/agentDiscovery.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentDiscovery.ts)
- Agent send-code 路由： [apps/auth/src/routes/agentSendCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentSendCode.ts)
- Agent verify-code 路由： [apps/auth/src/routes/agentVerifyCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentVerifyCode.ts)
- 账户与工作区初始化响应封装： [apps/backend/src/agentSetup.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentSetup.ts)

如果你关心开源 API 认证、邮箱 OTP 登录，或者代理接入流程的设计，这几份文件最值得读。

## 试试看

如果你想亲自试试这套流程，把这个 URL 交给你的代理：

`https://api.flashcards-open-source-app.com/v1/`

然后让它处理剩下的步骤。

有用的链接：

- [Flashcards 官网](https://flashcards-open-source-app.com/)
- [托管应用](https://app.flashcards-open-source-app.com/)
- [快速开始](https://flashcards-open-source-app.com/docs/getting-started/)
- [GitHub 仓库](https://github.com/kirill-markin/flashcards-open-source-app)

如果产品本身是开源的，认证流程又足够收敛，那么“让代理自己处理”这件事就应该真正可行。这正是这套流程存在的意义。
