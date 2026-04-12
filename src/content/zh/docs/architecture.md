---
title: 架构
description: System overview、public domains、supported clients 和 current offline-first data flow。
---

## System Overview

```text
iOS app / agent client        -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                       -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth        -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex redirect                 -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Principles

1. `app`、`api`、`auth` 使用分离的 public domains
2. Postgres 是 source of truth
3. iOS client 采用 local SQLite 与 sync 的 offline-first 模式
4. Web app、iOS client 与 external agent surface 共用同一个 workspace model
5. External agents 从 `GET https://api.flashcards-open-source-app.com/v1/` 开始

## Supported Clients

- `app.flashcards-open-source-app.com` 上的 web app
- 主 repository 中带 local SQLite storage 的 iOS app
- Google Play 上的 Android app
- 通过 discovery、OTP bootstrap 和 `Authorization: ApiKey` auth 接入的 external agent clients

## Data Model

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Data Flow

### Web

1. Browser 通过 `auth.<domain>` sign in
2. Web app 从 `api.<domain>` 加载 workspace data
3. AI chat requests 经过 `/chat/local-turn`
4. Review submissions 更新 scheduler state

### iOS

1. iOS app 先写入 local SQLite
2. Local changes 放入 outbox
3. Sync 通过 `/v1/workspaces/{workspaceId}/sync/push` 上传 changes
4. Sync 通过 `/v1/workspaces/{workspaceId}/sync/pull` 下载 remote updates
5. Local database 应用 changes 并推进 sync cursor

### External Agents

1. Agents 从 `GET /v1/` 开始
2. 第一阶段 OTP 在 `auth.<domain>` 上运行
3. Agent 获得 long-lived API key
4. Agent 加载 `/v1/agent/me`，列出 workspaces，必要时选择一个，然后使用 `/v1/agent/sql`

## Scheduling

Flashcards 使用 FSRS 作为 review scheduler。

Implementation notes:

- Backend 与 iOS 保持对齐的 FSRS implementations
- Web app 镜像 scheduling data contract，但不会再 ship 第三套 scheduler implementation
- Workspace-level scheduler settings 包括 desired retention、learning steps、relearning steps、max interval 和 fuzz
- Actual review timestamp 来自 `reviewedAtClient`

详细 contract 请参考 [main repository FSRS scheduling logic](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md)。

## Authentication

- 通过 Cognito 提供 email OTP
- Hosted web app 使用 shared-domain session cookies
- `auth.<domain>` 上的 agent OTP bootstrap 会返回 long-lived ApiKey
- `AUTH_MODE=none` 用于 local development
- `AUTH_MODE=cognito` 用于 production-like auth

## Deployment Shape

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda backend
- `auth.<domain>` -> API Gateway + Lambda auth service
- Postgres on AWS RDS

Root domain 可以保留为单独的 marketing site。如果在 bootstrap phase 中未使用，infrastructure 可以临时将其 redirect 到 `app.<domain>`。
