---
title: 快速开始
description: 可以从 iPhone、iPad、Mac 或 Android 应用、Web 应用、AI 智能代理或你自己的服务器开始。
---

有多种上手方式，按受欢迎程度排列：

- **iPhone、iPad 和 Mac 应用**：[App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Android 应用**：[Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **托管版 Web 应用**：[app.nibomo.com](https://app.nibomo.com)
- **AI 智能代理**：[MCP 连接器](/docs/mcp-connector/) 或 `https://api.nibomo.com/v1/` 上的 API
- **自托管**：[自托管指南](/docs/self-hosting/)

## 移动端和桌面端应用

安装适用于你设备的原生应用：

- iPhone、iPad 和 Mac：[App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android：[Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

应用会把卡片保存在设备上，离线时也能复习，恢复联网后自动同步。你可以先以访客身份开始，之后再登录。

### 主屏幕小组件

Nibomo 应用为 iPhone、iPad、Mac 和 Android 提供“复习”小组件，共有三种尺寸：

- **小号**：到期卡片数量和连续学习天数
- **中号**：到期卡片数量和下一张卡片的问题
- **大号**：到期卡片数量、下一个问题和连续学习天数

没有到期卡片时，小组件会显示“全部完成”以及下一张卡片的到期时间。小组件从不显示答案。轻点小组件即可打开“复习”；中号或大号小组件会直接在其显示的卡片上打开“复习”。小组件对所有人免费，访客也不例外。

另有 8 款小组件展示你的学习进度：“活动”“年度”“今天”“复习量”“连续记录”“日历”“即将到期”和“仪表板”。在 iPhone 和 iPad 上，你还可以把“待复习卡片”小组件放到锁定屏幕上；[小组件指南](/blog/flashcard-widget/)逐一介绍了它们。

要在 iPhone、iPad 或 Mac 上添加小组件，请打开小组件库，选择 Nibomo，然后选择尺寸。在 Android 上，请从小组件列表中添加所需的 Nibomo 小组件，再调整其大小；布局会随尺寸变化。

## 托管版 Web 应用

最快的上手方式是直接使用托管版 Web 应用：

1. 打开 [app.nibomo.com](https://app.nibomo.com)
2. 使用无密码邮箱 OTP 登录
3. 创建卡片、复习到期内容，并结合工作区数据和文件附件使用 AI 对话功能

使用托管版时，无需安装任何软件，也不需要自行配置服务器。

## 智能代理接入

Claude、ChatGPT 和 Cursor 等 MCP 客户端可以按照 [MCP 连接器指南](/docs/mcp-connector/) 接入。

如果你希望让 Claude Code、Codex 或 OpenClaw 直接接入，请从以下入口开始：

```text
GET https://api.nibomo.com/v1/
```

该发现接口的响应会引导智能代理完成邮箱 OTP 登录、创建长期有效的 API key、加载账户信息、初始化工作区，并继续使用已公开的 SQL 接口。

相同的响应也可以通过 `GET /v1/agent` 获取，但 `/v1/` 才是标准的公开入口。

## 自托管

如果你想运行自己的实例，请查看 [自托管指南](/docs/self-hosting/)。

## 当前可用能力

- 可用于卡片管理、复习和 AI 对话的托管版 Web 应用
- 适用于 iPhone、iPad、Mac 和 Android 的原生应用，使用本地 SQLite 存储并支持离线优先同步
- 分别部署在独立 `api` 与 `auth` 域名上的共享后端和认证服务
- 通过发现入口、OTP 和 `ApiKey` 认证接入外部智能代理的完整流程
- 以 Postgres 为权威数据源、可在 AWS 上自行部署的开源方案

## 仓库方向

该项目采用离线优先设计。

当前主仓库已包含 Web 应用、iOS 应用、认证服务、后端 API、外部智能代理接入流程，以及已发布到 Google Play 的 Android 应用。
