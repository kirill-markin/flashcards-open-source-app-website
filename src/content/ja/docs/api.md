---
title: APIリファレンス
description: 外部エージェント向けAPIのディスカバリー、OTP認証の開始手順、ワークスペース設定、公開されているSQLインターフェースをまとめています。
---

## 概要

このページでは、Flashcards が現在外部 AI エージェント向けに公開している API 仕様を説明します。

最初に参照する正規のディスカバリー用エントリポイントは次のとおりです。

```text
GET https://api.flashcards-open-source-app.com/v1/
```

同じ内容のディスカバリーレスポンスは `GET /v1/agent` からも取得できますが、主要な公開エントリポイントは `/v1/` です。

このレスポンスには、エージェントが次の手順を進めるための情報が含まれます。

- メール OTP ログインを開始する
- OTP を長期間利用できる API キーに交換する
- アカウント情報を取得する
- ワークスペースを作成または選択する
- 公開されている SQL インターフェースの利用に進む

## 公開仕様

外部エージェント向け公開インターフェースの主な仕様 URL は次のとおりです。

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`

同等のルートエイリアスも用意されています。

- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

## 認証の開始手順

OTP を使った認証開始フローは auth サービスで実行します。

- `POST https://auth.flashcards-open-source-app.com/api/agent/send-code`
- `POST https://auth.flashcards-open-source-app.com/api/agent/verify-code`

手順は次のとおりです。

1. `GET /v1/` を呼び出す
2. ユーザーのメールアドレスを `send-code` に送信する
3. レスポンスから `otpSessionToken` を取得する
4. ユーザーに最新の 8 桁のメールコードを入力してもらう
5. `code`、`otpSessionToken`、`label` を指定して `verify-code` を呼び出す
6. 返却された API キーを、チャットメモリとは別の場所に保存する

推奨する環境変数:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

認証済みリクエストでは、次のヘッダーを使用します。

```text
Authorization: ApiKey <key>
```

認証開始フローの例:

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

## ログイン後に利用できるエージェント向け API

認証後に利用できる現在のエージェント向け API は次のとおりです。

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql`

一般的な初期設定の流れは次のとおりです。

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. 必要であれば `POST /v1/agent/workspaces` に `{"name":"Personal"}` を送る
4. 必要であれば `POST /v1/agent/workspaces/{workspaceId}/select` を呼ぶ
5. `POST /v1/agent/sql` を使う

ワークスペースの選択は、API キーごとの接続単位で明示的に行います。次の手順を推測するのではなく、各レスポンスに含まれる `instructions` と `docs.openapiUrl` に従ってください。

## SQL インターフェース

`POST /v1/agent/sql` は、外部エージェント向けに共通で提供される読み書き用インターフェースです。

これは意図的に制限されたものであり、完全な PostgreSQL ではありません。

現在利用できる文の種類:

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
- ワークスペースを選択した後の外部エージェント向け API は、そのワークスペースのデータに限定される

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

## Web クライアント向け API と同期 API

Flashcards には、人が利用するクライアント向けの別 API とオフラインファースト同期用 API もありますが、これらは外部エージェント向けの主要な契約ではありません。

- ブラウザ向けフローでは、共有ドメインの Cookie と CSRF 保護を使用します
- オフラインファーストのクライアントは `/v1/workspaces/{workspaceId}/sync/push` と `/v1/workspaces/{workspaceId}/sync/pull` を使用します
- これらの同期ルートは、意図的に外部エージェント向け OpenAPI には含めていません
