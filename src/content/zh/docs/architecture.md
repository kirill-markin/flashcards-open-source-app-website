---
title: 架构
description: 系统概览、公开域名、支持的客户端，以及当前以离线优先为核心的数据流。
---

## 系统概览

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## 原则

1. `app`、`api` 和 `auth` 分别使用独立的公开域名
2. Postgres 是唯一的真实数据源
3. iOS 客户端采用离线优先模式，本地使用 SQLite，并通过同步机制与服务端对齐
4. 网页应用、iOS 应用和外部代理接口共享同一套工作区数据模型
5. 外部代理从 `GET https://api.flashcards-open-source-app.com/v1/` 开始接入

## 支持的客户端

- 运行在 `app.flashcards-open-source-app.com` 的网页应用
- 主仓库中的 iOS 应用，使用本地 SQLite 存储
- Google Play 上的 Android 应用
- 通过发现流程、OTP bootstrap 和 `Authorization: ApiKey` 接入的外部代理客户端

## 数据模型

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## 数据流

### 网页端

1. 浏览器通过 `auth.<domain>` 完成登录。
2. 网页应用从 `api.<domain>` 加载工作区数据。
3. AI 聊天请求通过 `/chat/local-turn`。
4. 复习提交在写入时会更新调度器状态。

### iOS

1. iOS 应用先把数据写入本地 SQLite。
2. 本地变更会进入待发送队列。
3. 同步通过 `/v1/workspaces/{workspaceId}/sync/push` 上传变更。
4. 同步通过 `/v1/workspaces/{workspaceId}/sync/pull` 拉取远端更新。
5. 本地数据库应用这些变更，并推进同步游标。

### 外部代理

1. 代理客户端从 `GET /v1/` 开始。
2. OTP 引导流程在 `auth.<domain>` 上完成。
3. 代理客户端会获得一个长期有效的 API 密钥。
4. 代理客户端加载 `/v1/agent/me`，列出可用工作区，必要时选择其中一个，然后使用 `/v1/agent/sql`。

## 调度

Flashcards 使用 FSRS 作为复习调度器。

实现说明：

- 后端和 iOS 保持两套相互镜像的 FSRS 实现
- 网页应用会遵循同一份调度数据契约，但不会再额外内置第三套调度器实现
- 工作区级别的调度设置包括 desired retention、learning steps、relearning steps、maximum interval 和 fuzz
- 实际的复习时间戳来自 `reviewedAtClient`

更详细的契约说明，请参阅 [FSRS scheduling logic in the main repository](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md)。

## 认证

- 通过 Cognito 提供邮箱 OTP 登录
- 托管的网页应用使用跨子域共享的浏览器会话 cookie
- `auth.<domain>` 上的代理客户端 OTP bootstrap 会返回长期有效的 ApiKey
- `AUTH_MODE=none` 用于本地开发
- `AUTH_MODE=cognito` 用于接近生产环境的认证方式

## 部署形态

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda backend
- `auth.<domain>` -> API Gateway + Lambda auth service
- Postgres 部署在 AWS RDS 上

顶级域名可以继续保留给独立的营销网站使用。如果在初始部署阶段还未占用，基础设施也可以临时将其重定向到 `app.<domain>`。
