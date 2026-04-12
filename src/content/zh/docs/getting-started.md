---
title: 快速开始
description: 从 hosted web app 开始，或通过 discovery URL 连接 agent，或自行在本地运行 stack。
---

## Hosted Web App

最快的开始方式是使用 hosted web app：

1. 打开 [app.flashcards-open-source-app.com](https://app.flashcards-open-source-app.com)
2. 使用 passwordless email OTP 登录
3. 创建 cards、复习 due items，并结合 workspace data 与 file attachments 使用 AI chat

Hosted path 不需要 installation 或 server setup。

## Agent Setup

如果你希望直接连接 Claude Code、Codex 或 OpenClaw，请从这里开始：

```text
GET https://api.flashcards-open-source-app.com/v1/
```

这个 discovery response 会告诉 agent 如何进行 email OTP login、创建 long-lived API key、加载 account、完成 workspace bootstrap，并继续使用 published SQL surface。

同样的 payload 也可以通过 `GET /v1/agent` 获得，但 `/v1/` 是 primary public entry point。

## Self-Hosting

如果你想运行自己的 copy，请查看 [self-hosting guide](/docs/self-hosting/)。

## 今天可以获得什么

- 用于 cards、review 和 AI chat 的 hosted web app
- 主 repository 中带 local SQLite 和 offline-first sync 的 iOS client
- 分离在 `api` 与 `auth` domains 上的 backend 与 auth services
- 通过 discovery、OTP 和 ApiKey auth 完成 external agent setup
- 以 Postgres 为 source of truth 的 AWS open-source deployment path

## Repository Direction

Project 按 offline-first 方向设计。

当前 repository 包含 web app、iOS app、auth service、backend API、external agent flow，以及已在 Google Play 发布的 Android app。
