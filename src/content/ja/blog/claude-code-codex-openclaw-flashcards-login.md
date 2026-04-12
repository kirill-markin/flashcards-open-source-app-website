---
title: "Claude Code、Codex、OpenClaw に Flashcards のログインを任せる方法"
description: "Flashcards には、1つの discovery URL、メール OTP、長期有効 API キーから始まる open-source の agent login flow があります。エージェントには1つの URL だけ渡し、あとは8桁のメールコードを送れば、account と workspace setup を完了できます。"
date: "2026-03-10"
keywords:
  - "claude code login"
  - "codex login"
  - "email otp api"
  - "agent onboarding"
  - "open source flashcards app"
---

多くの login flows は、まだ setup の全手順を人間が手作業で行う前提になっています。

Login page を開き、code を待ち、key をコピーし、API key を作り、別の tool に貼り付け、docs を agent に説明し、session が壊れたら troubleshooting する。

本来こうした作業こそ tool が肩代わりすべきです。

[Flashcards](https://flashcards-open-source-app.com/) では、今や agents 向けの open-source login flow を1つの discovery URL から始められます:

`https://api.flashcards-open-source-app.com/v1/`

これが primary entry point です。同じ payload は `https://api.flashcards-open-source-app.com/v1/agent` にもありますが、current contract は `/v1/` から始まります。

この URL を Claude Code、Codex、OpenClaw に渡せば、agent は flow を調べ、email code を求め、verify し、API key を保存し、account を load し、workspace setup まで自分で進められます。

人間に必要なのは次の2つだけです:

- email address を渡す
- 最新の8桁メールコードを送る

それだけです。

## 1つの URL で十分

Discovery endpoint は service description、auth model、first action、next-step instructions をすべて1つの response で返します。

各 tool ごとに custom setup prompt を書く代わりに、その URL を agent に渡して returned instructions に従わせればよいのです。

```text
GET https://api.flashcards-open-source-app.com/v1/
```

高いレベルでは agent はすぐに次を理解します:

- これは Flashcards service である
- login と signup は email OTP を使う
- successful verification は long-lived API key を返す
- login 後の next step は account と workspace bootstrap である

## Flow はどう見えるか

Sequence は意図的に小さくなっています:

1. Agent が discovery endpoint を呼ぶ
2. Agent が user email を `send-code` に送る
3. Flashcards が8桁 code を送り、`otpSessionToken` を返す
4. Agent が user に最新 code を求める
5. Agent が code を verify して long-lived API key を受け取る
6. `/v1/agent/me` と `/v1/agent/workspaces` を呼ぶ
7. 適切な workspace を create / select し、`/v1/agent/sql` へ進む

重要なのは、agent が “login successful” で止まらないことです。Setup を最後まで進め、そのまま実際の読み書きを始めます。

## Claude Code や Codex への sample prompt

これだけで十分です:

```text
Use this Flashcards discovery URL:
https://api.flashcards-open-source-app.com/v1/

Log in to my Flashcards account, load account context, and select or create the correct workspace.
Ask me only for the latest 8-digit email code when the flow requires it.
```

これ以降、認証手順を人間が手で説明する必要はありません。Discovery endpoint がすでにそれを行います。

## 最初の request

最初の call:

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

その後 agent は OTP stage を開始します:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

User が最新 code を送ったら agent は verification を完了できます:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Claude Code on MacBook"
  }'
```

Successful response は long-lived API key を返します。すぐに conversation memory の外へ保存してください:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

## その後に起こること

Verification の後、agent は auth から account usage へ移ります:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. 適切な workspace がなければ `POST /v1/agent/workspaces`
4. 必要なら `POST /v1/agent/workspaces/{workspaceId}/select`
5. その後 `POST /v1/agent/sql`

この URL は単なる login gateway ではありません。Agent があなたの account 内で直接作業できるようになるまでの一連の path の始点になります。
