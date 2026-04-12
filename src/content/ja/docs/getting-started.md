---
title: はじめに
description: Hosted web app から始めるか、agent を discovery URL で接続するか、自分で stack をローカル実行します。
---

## Hosted Web App

最も早く始める方法は hosted web app です:

1. [app.flashcards-open-source-app.com](https://app.flashcards-open-source-app.com) を開く
2. Passwordless email OTP でサインインする
3. Cards を作成し、due items を review し、workspace data や file attachments と共に AI chat を使う

Hosted path に installation や server setup は必要ありません。

## Agent Setup

Claude Code、Codex、OpenClaw を直接接続したい場合は次から始めます:

```text
GET https://api.flashcards-open-source-app.com/v1/
```

この discovery response は、agent に email OTP login、long-lived API key creation、account loading、workspace bootstrap、そして published SQL surface へ進む方法を伝えます。

同じ payload は `GET /v1/agent` でも利用できますが、`/v1/` が primary public entry point です。

## Self-Hosting

自分の copy を動かしたい場合は [セルフホスティングガイド](/docs/self-hosting/) を見てください。

## 今日できること

- Cards、review、AI chat のための hosted web app
- Main repository 内の local SQLite と offline-first sync を備えた iOS client
- 別々の `api` と `auth` domains 上の shared backend / auth services
- Discovery、OTP、ApiKey auth による external agent setup
- Postgres を source of truth とする AWS 向け open-source deployment path

## Repository Direction

Project は offline-first の方向で設計されています。

現在の repository には web app、iOS app、auth service、backend API、external agent flow、そして Google Play 公開済みの Android app が含まれます。
