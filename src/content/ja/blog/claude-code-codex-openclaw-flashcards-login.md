---
title: "Claude Code、Codex、OpenClaw に Flashcards へのログインを任せる方法"
description: "Flashcards では、1つの discovery URL、メール OTP、長期利用できる API キーを軸にしたオープンソースのエージェント向けログインフローを公開しています。エージェントには URL を1つ渡し、あとはメールに届く8桁のコードを返すだけで、アカウント確認からワークスペース準備まで進められます。"
date: "2026-03-10"
keywords:
  - "claude code login"
  - "codex login"
  - "email otp api"
  - "agent onboarding"
  - "open source flashcards app"
---

多くのログインフローは、今でも人間が最初から最後まで手作業で設定する前提のままです。

ログイン画面を開き、コードを待ち、トークンをコピーし、API キーを作り、別のツールに貼り付け、次に何をすべきかをドキュメントで確認し、途中で問題が起きたらセッションを直す。

本来、そうした手間こそツール側が引き受けるべきです。

[Flashcards](https://flashcards-open-source-app.com/) では、1つの discovery URL から始められる、オープンソースのエージェント向けログインフローを公開しました。

`https://api.flashcards-open-source-app.com/v1/`

これが正式な入口です。同じ discovery レスポンスは `https://api.flashcards-open-source-app.com/v1/agent` でも取得できますが、現行の仕様は `/v1/` を起点にしています。

この URL を Claude Code、Codex、OpenClaw に渡せば、エージェントはフローを確認し、メールコードの送信を依頼し、それを検証し、API キーを保管し、アカウント情報を読み込み、そのままワークスペースの準備まで自力で進められます。

人間がやることは2つだけです。

- メールアドレスを伝える
- メールに届いた最新の8桁コードを返す

それで終わりです。

## 1つのリンクで足りる

discovery endpoint は、サービスの説明、認証方式、最初の操作、次に何をすべきかという指示を、1つのレスポンスでまとめて返します。

そのため、ツールごとに専用のオンボーディング文面を書く代わりに、エージェントへ URL を渡し、返ってきた指示どおりに進めさせれば済みます。

```text
GET https://api.flashcards-open-source-app.com/v1/
```

大まかに言えば、エージェントはここで次の4点をすぐ理解できます。

- これは Flashcards のサービスである
- ログインと登録はどちらもメール OTP を使う
- 検証に成功すると長期利用できる API キーが返る
- ログイン後はアカウント確認とワークスペースの初期化に進む

## フローの流れ

手順は意図的に小さくまとめています。

1. エージェントが discovery endpoint を呼ぶ
2. エージェントがユーザーのメールアドレスを `send-code` に送る
3. Flashcards が8桁コードをメールで送り、`otpSessionToken` を返す
4. エージェントがユーザーに最新のコードをたずねる
5. エージェントがコードを検証し、長期利用できる API キーを受け取る
6. `/v1/agent/me` と `/v1/agent/workspaces` を呼ぶ
7. 適切なワークスペースを作成または選択し、`/v1/agent/sql` に進む

大事なのは、エージェントが「ログイン成功」で止まらないことです。セットアップの残りもそのまま進め、実際の読み書きまで続けられます。

## Claude Code や Codex に渡すプロンプト例

これだけで十分です。

```text
この Flashcards の discovery URL を使ってください:
https://api.flashcards-open-source-app.com/v1/

Flashcards の自分のアカウントにログインし、アカウント情報を読み込み、適切なワークスペースを選ぶか作成してください。
フロー上で必要になったときだけ、メールに届いた最新の8桁コードを私に聞いてください。
```

認証手順を人間があとから細かく説明する必要はありません。この endpoint がすでにそれを伝えています。

## OpenClaw に渡すプロンプト例

考え方は同じで、少しだけ明示的にします。

```text
この URL を使って Flashcards のアカウントに接続してください:
https://api.flashcards-open-source-app.com/v1/

返ってきた指示に従い、API キーを安全に保管し、アカウント情報を読み込んだうえで、ワークスペースの準備まで進めてください。
検証が必要になったら、メールに届いた最新の8桁コードを私に聞いてください。
```

## 例: discovery レスポンス

最初のリクエストはこれです。

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

レスポンスは、端末上で動くエージェントが推測に頼らず追える形になっています。

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

## 例: メールコードを送る

エージェントがユーザーのメールアドレスを受け取ったら、OTP の手順を始めます。

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{
    "email": "you@example.com"
  }'
```

サーバーはメールを送り、短時間だけ有効な検証セッションを返します。

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

この時点でエージェントが止まるのは、受信箱に届いた最新コードをユーザーに聞く短い間だけです。

## 例: コードを検証して API キーを受け取る

ユーザーがメールコードを返したら、エージェントはログインを最後まで完了できます。

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code": "12345678",
    "otpSessionToken": "...",
    "label": "Claude Code on MacBook"
  }'
```

検証に成功すると、長期利用できる API キーと次の手順が返ります。

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

ここが、エージェントが認証を終え、実際にアカウントを使い始める受け渡し地点です。

このキーはすぐにチャットの記憶の外へ保存してください。いちばん分かりやすいのは、一度 `export` してエージェントに再利用させる方法です。

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

## 例: アカウント情報を読み込み、ワークスペースへ進む

次のリクエストは、通常の認証付き API 呼び出しです。

```bash
curl https://api.flashcards-open-source-app.com/v1/agent/me \
  -H "Authorization: ApiKey YOUR_API_KEY"
```

レスポンスは、ワークスペース準備へ続けるようエージェントに伝えます。

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

ここから先、エージェントは次のことができます。

- すべてのワークスペースを読み込む
- まだ存在しなければ最初のワークスペースを作る
- 複数ある場合は正しいワークスペースを選ぶ
- `/v1/agent/openapi.json` に公開されている仕様を確認する
- `POST /v1/agent/sql` で読み取り、書き込み、SQL のイントロスペクションを行う

つまり、このログインフローは理屈のうえで正しいだけでなく、実際に役立つ形になっています。

`/v1/openapi.json` と `/v1/swagger.json` にあるルート仕様エイリアスも使えますが、エージェント向けのドキュメントリンクは意図的に `/v1/agent/openapi.json` と `/v1/agent/swagger.json` を指しています。

## 手動で API キーを用意するよりよい理由

よくある API の導入手順は、まだかなり不便です。

- ブラウザでログインする
- 設定画面を開く
- 手作業でトークンを作る
- それを別のツールへコピーする
- そのツールが次に何をすべきか分かるよう、ドキュメントを開いたままにしておく

このフローなら、その大半を省けます。

ユーザーはメール OTP で本人確認を行い、サービスは長期利用できる API キーを直接エージェントへ発行します。そして同じレスポンス形式のまま、次に進むべき手順をエージェントへ示し続けます。

そのほうが、ユーザーにとって単純で、自動化もしやすくなります。

## これはオープンソースです

Flashcards はオープンソースなので、ブラックボックスとして扱うのではなく、フロー全体を自分で確認できます。

- Repository: [github.com/kirill-markin/flashcards-open-source-app](https://github.com/kirill-markin/flashcards-open-source-app)
- Agent discovery route: [apps/backend/src/agentDiscovery.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentDiscovery.ts)
- Agent send-code route: [apps/auth/src/routes/agentSendCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentSendCode.ts)
- Agent verify-code route: [apps/auth/src/routes/agentVerifyCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentVerifyCode.ts)
- Account and workspace bootstrap envelopes: [apps/backend/src/agentSetup.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentSetup.ts)

オープンソースの API 認証、メール OTP ログイン、エージェント向けオンボーディング設計に関心があるなら、まず読むべきなのはこれらのファイルです。

## 試してみる

このフローを試したいなら、エージェントに次の URL を渡してください。

`https://api.flashcards-open-source-app.com/v1/`

あとはエージェントに任せれば大丈夫です。

参考リンク:

- [Flashcards website](https://flashcards-open-source-app.com/)
- [Hosted app](https://app.flashcards-open-source-app.com/)
- [Getting started](https://flashcards-open-source-app.com/docs/getting-started/)
- [GitHub repository](https://github.com/kirill-markin/flashcards-open-source-app)

プロダクトがオープンソースで、認証フローが十分に絞り込まれていれば、「エージェントに任せる」が本当に機能するはずです。
このフローは、そのために作られています。
