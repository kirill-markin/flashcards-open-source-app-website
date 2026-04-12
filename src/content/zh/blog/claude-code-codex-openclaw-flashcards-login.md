---
title: "如何把 Flashcards 登录交给 Claude Code、Codex 或 OpenClaw"
description: "Flashcards 提供一个面向代理的开源登录流程，从一个 discovery URL、email OTP 和 long-lived API key 开始。把一个 URL 交给 agent，再把最新的 8-digit email code 发给它，它就能完成 account 和 workspace setup。"
date: "2026-03-10"
keywords:
  - "claude code login"
  - "codex login"
  - "email otp api"
  - "agent onboarding"
  - "open source flashcards app"
---

大多数 login flows 仍然假设所有 setup steps 都要由人手工完成。

打开 login page，等待 code，复制 key，创建 API key，把它粘贴到另一款 tool 里，再向 agent 解释 docs，最后在 session 出问题时继续排查。

这些正是工具应该替你做掉的工作。

在 [Flashcards](https://flashcards-open-source-app.com/) 中，我们现在提供一个面向 agents 的 open-source login flow，它从一个 discovery URL 开始：

`https://api.flashcards-open-source-app.com/v1/`

这就是 primary entry point。相同 payload 也可以通过 `https://api.flashcards-open-source-app.com/v1/agent` 获取，但 current contract 是从 `/v1/` 开始的。

把这个 URL 给 Claude Code、Codex 或 OpenClaw。Agent 可以自己检查 flow、请求 email code、完成 verification、保存 API key、加载 account，并自行完成 workspace setup。

人类只需要做两件事：

- 提供 email address
- 发送最新的 8-digit email code

就这些。

## 一个 URL 就够了

Discovery endpoint 会在同一个 response 中返回 service description、auth model、first action 和 next-step instructions。

你不必为每个 tool 单独写 setup prompt，只要把这个 URL 给 agent，让它遵循 returned instructions 即可。

```text
GET https://api.flashcards-open-source-app.com/v1/
```

从高层看，agent 会立即知道：

- 这是 Flashcards service
- login 和 signup 使用 email OTP
- successful verification 会返回 long-lived API key
- login 之后的下一步是 account 与 workspace bootstrap

## Flow 是什么样的

这个 sequence 被故意设计得很小：

1. Agent 调用 discovery endpoint。
2. Agent 把 user email 发送到 `send-code`。
3. Flashcards 发送 8-digit code，并返回 `otpSessionToken`。
4. Agent 向 user 请求最新 code。
5. Agent 校验 code 并拿到 long-lived API key。
6. 调用 `/v1/agent/me` 和 `/v1/agent/workspaces`。
7. 创建或选择正确的 workspace，然后继续使用 `/v1/agent/sql`。

重要的是，agent 不会停在 “login successful” 这一句。它会继续完成 setup，然后开始真正的读写工作。

## 给 Claude Code 或 Codex 的 sample prompt

下面这样就足够了：

```text
Use this Flashcards discovery URL:
https://api.flashcards-open-source-app.com/v1/

Log in to my Flashcards account, load account context, and select or create the correct workspace.
Ask me only for the latest 8-digit email code when the flow requires it.
```

从这里开始，你不需要再手动解释 auth sequence。Discovery endpoint 已经完成了这件事。

## 第一个 request

第一个 call：

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

然后 agent 启动 OTP stage：

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

在 user 发来最新 code 之后，agent 就可以完成 verification：

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Claude Code on MacBook"
  }'
```

Successful response 会返回 long-lived API key。请立即把它保存在 conversation memory 之外：

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

## 之后会发生什么

Verification 完成后，agent 会从 auth 阶段转向 account usage：

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. 如果没有合适的 workspace，则 `POST /v1/agent/workspaces`
4. 如有需要，`POST /v1/agent/workspaces/{workspaceId}/select`
5. 然后执行 `POST /v1/agent/sql`

这样，这个 URL 就不只是一个 login gateway，而是整条路径的起点，使 agent 能够直接在你的 account 中工作。
