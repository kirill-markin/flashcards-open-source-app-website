---
title: 隐私政策
description: Flashcards 的隐私政策。
slug: privacy
sections:
  - type: legal_page
    lastUpdated: 2026年3月
---
## 我们收集什么

当你使用 hosted cloud beta 时，我们会存储用于 authentication 的 email address，以及运行服务所需的 learning data，包括 cards、review history 和 workspace metadata。Self-hosted instances 不会向我们发送数据，除非你部署了会这样做的 copy。

## 运营方

Hosted Flashcards service 由 Ozma Inc. 运营。Flashcards 由 Kirill Markin 创建，[ozma.io](https://ozma.io/) 是与 hosted service 相关的 company website。

## AI Features

如果你在 hosted app 中使用 AI chat，你输入的 prompts、请求所需的 card-derived context、uploaded files、uploaded images，以及 dictated audio 或 transcription requests 可能会发送给服务器上配置的 third-party AI providers。具体使用哪个 provider 取决于请求发生时的 hosted server configuration。

## 我们如何使用你的数据

你的数据用于提供 authentication、cloud sync 和 optional AI features。我们不会出售你的数据，也不会将其用于 advertising。Authentication 和 workspace access 由 public repository 中 documented 的 backend services 处理。

## Data Storage

Hosted cloud data 存储在 AWS infrastructure 中，其中 primary application data 使用 Postgres。Data 在传输过程中会被加密，service operators 可能会保留用于运行和 debug hosted beta 所需的 operational logs。

## Cookies

我们在 login flow 中使用 `session`、`refresh` 和 `logged_in` 等 authentication cookies。Site 正常工作不需要 tracking cookies 或 third-party analytics。

## Data Deletion

对于 self-hosted instances，你可以直接控制 database。对于 hosted app，你可以在 iOS app 中删除 account；如果需要额外帮助删除 hosted data，也可以联系 support。

## Support

关于 privacy 的问题，请联系 [kirill+flashcards@kirill-markin.com](mailto:kirill+flashcards@kirill-markin.com) 或使用 [support page](/support/)。

## Open Source

整个 codebase 都是 open source。你可以准确 audit application 对数据做了什么。
