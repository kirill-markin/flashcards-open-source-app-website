---
title: 快速开始
description: 先从托管版 Web 应用开始，或通过发现入口 URL 连接智能代理，也可以自行在本地运行整套服务。
---

## 托管版 Web 应用

最快的上手方式是直接使用托管版 Web 应用：

1. 打开 [app.flashcards-open-source-app.com](https://app.flashcards-open-source-app.com)
2. 使用无密码邮箱 OTP 登录
3. 创建卡片、复习到期内容，并结合工作区数据和文件附件使用 AI 对话

选择托管版时，无需安装任何软件，也不需要自行配置服务器。

## 智能代理接入

如果你希望让 Claude Code、Codex 或 OpenClaw 直接接入，请从以下入口开始：

```text
GET https://api.flashcards-open-source-app.com/v1/
```

这个发现响应会引导智能代理完成邮箱 OTP 登录、创建长期有效的 API key、加载账户信息、初始化工作区，并继续使用已公开的 SQL 接口。

同一份响应也可以通过 `GET /v1/agent` 获取，但 `/v1/` 才是标准的公开入口。

## 自托管

如果你想运行自己的实例，请查看 [自托管指南](/docs/self-hosting/)。

## 当前可用内容

- 用于卡片管理、复习和 AI 对话的托管版 Web 应用
- 主仓库中的 iOS 客户端，使用本地 SQLite 并支持 offline-first 同步
- 部署在独立 `api` 与 `auth` 域名上的共享后端与认证服务
- 通过发现入口、OTP 和 ApiKey 认证完成的外部智能代理接入流程
- 以 Postgres 为事实来源、可在 AWS 上开源部署的完整路径

## 仓库方向

该项目采用 offline-first 设计。

当前主仓库已包含 Web 应用、iOS 应用、认证服务、后端 API、外部智能代理接入流程，以及已在 Google Play 发布的 Android 应用。
