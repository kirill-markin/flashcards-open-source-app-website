---
title: "Claude Code、Codex、OpenClaw から Flashcards にログインする方法"
description: "Flashcards は、1 つのディスカバリー URL とメール OTP、長期利用できる API キーを組み合わせた、オープンソースのエージェント向けログインフローを公開しています。エージェントには URL を 1 つ渡し、メールで届く最新の 8 桁コードを返すだけで、アカウント情報の読み込みからワークスペースの準備まで進められます。"
date: "2026-03-10"
keywords:
  - "Claude Code ログイン"
  - "Codex ログイン"
  - "メール OTP API"
  - "エージェント ログイン"
  - "オープンソース フラッシュカード アプリ"
  - "オープンソース API 認証"
---

いまでも多くのログインフローは、人間が最初から最後まで手で設定する前提のままです。

ログイン画面を開く。コードを待つ。トークンをコピーする。API キーを作る。別のツールに貼り付ける。エージェントにドキュメントの内容を説明する。途中でおかしくなったセッションを手で直す。

本来、こういう作業こそツールが肩代わりすべきです。

[Flashcards](https://flashcards-open-source-app.com/) では、1 つのディスカバリー URL から始められる、オープンソースのエージェント向けログインフローを公開しています。

`https://api.flashcards-open-source-app.com/v1/`

これが正式な入口です。同じディスカバリーペイロードは `https://api.flashcards-open-source-app.com/v1/agent` でも取得できますが、現行の仕様は `/v1/` を起点にしています。

この URL を Claude Code、Codex、OpenClaw に渡せば、エージェントはフローを確認し、メールコードの送信を依頼し、コードを検証し、API キーを保存し、アカウント情報を読み込み、そのままワークスペースの準備まで自力で進められます。

人間がやることは 2 つだけです。

- メールアドレスを伝える
- メールに届いた最新の 8 桁コードを返す

それだけです。

## 1 つのリンクで始められる

ディスカバリーエンドポイントは、サービスの説明、認証方式、最初に実行する操作、次の手順を 1 つのレスポンスにまとめて返します。

そのため、ツールごとに専用のオンボーディング文面を書く代わりに、エージェントへ URL を渡し、返ってきた指示どおりに進めさせれば済みます。

```text
GET https://api.flashcards-open-source-app.com/v1/
```

大まかに言うと、エージェントはここで次の 4 点をすぐ理解できます。

- これは Flashcards のサービスである
- ログインと登録はどちらもメール OTP を使う
- 検証に成功すると長期利用できる API キーが返る
- ログイン後はアカウント確認とワークスペース初期化に進む

## フロー全体の流れ

手順は意図的に小さくまとめています。

1. エージェントがディスカバリーエンドポイントを呼ぶ
2. エージェントがユーザーのメールアドレスを `send-code` に送る
3. Flashcards が 8 桁コードをメールで送り、`otpSessionToken` を返す
4. エージェントがユーザーに最新のコードを尋ねる
5. エージェントがコードを検証し、長期利用できる API キーを受け取る
6. `/v1/agent/me` と `/v1/agent/workspaces` を呼ぶ
7. 適切なワークスペースを作成または選択し、`/v1/agent/sql` に進む

大事なのは、エージェントが「ログインできた」で止まらないことです。残りのセットアップもそのまま進めて、実際の読み書きまで続けられます。

## Claude Code や Codex に渡すプロンプト例

これだけで十分です。

```text
Use this Flashcards discovery URL:
https://api.flashcards-open-source-app.com/v1/

Log in to my Flashcards account, load account context, and select or create the correct workspace.
Ask me only for the latest 8-digit email code when the flow requires it.
```

そのあとに認証手順を人間が細かく説明する必要はありません。このエンドポイントがすでにそれを伝えています。

## OpenClaw に渡すプロンプト例

考え方は同じで、少しだけ明示的にします。

```text
Connect my Flashcards account using this URL:
https://api.flashcards-open-source-app.com/v1/

Follow the returned instructions, keep the API key secure, load my account, then continue to workspace setup.
If verification is needed, ask me for the latest 8-digit code from the email.
```

## 例: ディスカバリー応答

最初のリクエストはこれです。

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

レスポンスは、ターミナルで動くエージェントが推測に頼らず追える形になっています。

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

この時点でエージェントが止まるのは、受信トレイに届いた最新コードをユーザーに聞く短いあいだだけです。

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

ここが、エージェントが認証のことを忘れて実際にアカウントを使い始める切り替え地点です。

このキーは、すぐにチャットの記憶の外へ保存してください。いちばん分かりやすいのは、一度 `export` してエージェントに再利用させるやり方です。

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

## 例: アカウント情報を読み込み、ワークスペースへ進む

次のリクエストは、通常の認証付き API 呼び出しです。

```bash
curl https://api.flashcards-open-source-app.com/v1/agent/me \
  -H "Authorization: ApiKey YOUR_API_KEY"
```

レスポンスは、ワークスペースの準備へそのまま進むようエージェントに伝えます。

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

つまり、このログインフローは理屈のうえで正しいだけでなく、実際に使えるところまでつながっています。

`/v1/openapi.json` と `/v1/swagger.json` にあるルート仕様エイリアスも使えますが、エージェント向けのドキュメントリンクは意図的に `/v1/agent/openapi.json` と `/v1/agent/swagger.json` を指しています。

## 手動で API キーを用意するより、この方法がよい理由

よくある API 導入の流れは、まだかなり面倒です。

- ブラウザでログインする
- 設定画面を開く
- 手作業でトークンを作る
- それを別のツールへコピーする
- そのツールが次に何をすべきか分かるよう、ドキュメントを開いたままにしておく

このフローなら、その大半を省けます。

ユーザーはメール OTP で本人確認を行い、サービスは長期利用できる API キーを直接エージェントへ発行します。そして同じレスポンス形式のまま、次に進むべき手順をエージェントへ示し続けます。

そのほうがユーザーにとって単純で、自動化もしやすくなります。

## これはオープンソースです

Flashcards はオープンソースなので、ブラックボックスとして扱うのではなく、フロー全体を自分で確認できます。

- リポジトリ: [github.com/kirill-markin/flashcards-open-source-app](https://github.com/kirill-markin/flashcards-open-source-app)
- エージェント向けディスカバリールート: [apps/backend/src/agentDiscovery.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentDiscovery.ts)
- エージェント向け `send-code` ルート: [apps/auth/src/routes/agentSendCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentSendCode.ts)
- エージェント向け `verify-code` ルート: [apps/auth/src/routes/agentVerifyCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentVerifyCode.ts)
- アカウント確認とワークスペース初期化のレスポンス定義: [apps/backend/src/agentSetup.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentSetup.ts)

オープンソースの API 認証、メール OTP ログイン、エージェント向けオンボーディング設計に関心があるなら、まず読むべきなのはこれらのファイルです。

## 試してみる

このフローを試したいなら、エージェントに次の URL を渡してください。

`https://api.flashcards-open-source-app.com/v1/`

あとはエージェントに任せれば大丈夫です。

参考リンク:

- [Flashcards 公式サイト](https://flashcards-open-source-app.com/)
- [ホスト版アプリ](https://app.flashcards-open-source-app.com/)
- [スタートガイド](https://flashcards-open-source-app.com/docs/getting-started/)
- [GitHub リポジトリ](https://github.com/kirill-markin/flashcards-open-source-app)

プロダクトがオープンソースで、認証フローが十分に細く保たれていれば、「エージェントに任せる」が本当に機能するはずです。このフローは、そのために作られています。
