---
title: API リファレンス
description: Discovery、OTP による初期認証、workspace セットアップ、公開 SQL API を案内する external agent API。
---

## 概要

このページでは、Flashcards が外部 AI agent 向けに現在公開している外部 API 契約を説明します。

まず、正規の Discovery endpoint は次のとおりです。

```text
GET https://api.flashcards-open-source-app.com/v1/
```

同じ内容の discovery response は `GET /v1/agent` からも取得できますが、公開用の主要 endpoint は `/v1/` です。

discovery response には、agent が次の手順を進めるために必要な情報が含まれます。

- email OTP ログインを開始する
- OTP を長期利用できる API key に交換する
- アカウント情報を読み込む
- workspace を作成または選択する
- 公開されている SQL API の利用に進む

## 公開仕様

外部 agent 向け API の主要な仕様 URL は次のとおりです。

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`

同等のルート直下の別名 URL も提供しています。

- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

## 認証の初期セットアップ

OTP による初期認証は auth service で行います。

- `POST https://auth.flashcards-open-source-app.com/api/agent/send-code`
- `POST https://auth.flashcards-open-source-app.com/api/agent/verify-code`

手順は次のとおりです。

1. `GET /v1/` を実行する
2. ユーザーのメールアドレスを `send-code` に送信する
3. レスポンスから `otpSessionToken` を取得する
4. ユーザーに最新の 8 桁のメールコードを入力してもらう
5. `verify-code` を `code`、`otpSessionToken`、`label` とともに呼ぶ
6. 返却された API key は、チャットの記憶領域とは別の場所に保存する

推奨する環境変数:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

認証付きリクエストでは、次のヘッダーを使用します。

```text
Authorization: ApiKey <key>
```

初期セットアップの例:

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Codex on MacBook"
  }'
```

## ログイン後に利用できる agent API

認証後に利用できる現在の agent API は次のとおりです。

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql`

一般的な初期化の流れ:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. 必要であれば `POST /v1/agent/workspaces` に `{"name":"Personal"}` を送る
4. 必要なら `POST /v1/agent/workspaces/{workspaceId}/select`
5. `POST /v1/agent/sql` を使う

workspace の選択は、API key ごとの接続単位で明示的に行います。次に何を呼ぶかを推測せず、各レスポンスに含まれる `instructions` テキストと `docs.openapiUrl` に従ってください。

## SQL API

`POST /v1/agent/sql` は、外部 agent 向けに共通で提供される読み書き用 API です。

この API は意図的に制限されており、完全な PostgreSQL ではありません。

現在利用できるステートメント種別:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

現在公開されている論理リソース:

- `workspace`
- `cards`
- `decks`
- `review_events`

注意事項:

- `LIMIT` のデフォルト値は `100` で、上限も `100`
- 安定したページネーションが必要な場合は `ORDER BY` を使う
- スキーマを確認するには `SHOW TABLES` または `DESCRIBE cards` を使う
- 外部 agent 向け API は workspace を選択した後、その workspace にスコープされる

リクエスト例:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

カード取得の例:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

更新の例:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

## Human クライアント向け API と Sync API

Flashcards には Human クライアント向け API や offline-first sync 用 API もありますが、これらは外部 agent 向けの主要な API 契約ではありません。

- browser 向けのフローでは shared-domain cookie と CSRF protection を使う
- offline-first client は `/v1/workspaces/{workspaceId}/sync/push` と `/v1/workspaces/{workspaceId}/sync/pull` を使う
- sync route は意図的に外部 agent 向け OpenAPI には含めていない
