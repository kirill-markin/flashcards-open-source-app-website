---
title: APIリファレンス
description: 外部エージェント向けAPIのディスカバリー、OTP認証の開始手順、ワークスペース設定、公開されている読み取り用および書き込み用のSQLインターフェースをまとめています。
---

## 概要

このページでは、Nibomo が現在外部 AI エージェント向けに公開している API 仕様を説明します。

クライアントが MCP に対応している場合は、[MCP コネクタ](/docs/mcp-connector/) を使うのが最も簡単な接続方法で、この同じデータサーフェスをラップしています。このページでは、CLI エージェントが使う HTTP ディスカバリー、SQL、ガイド、復習の仕様を説明します。

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
- リファレンスガイドを取得し、カードを 1 枚ずつ復習する

## ランタイムディスカバリとソース

OpenAPI は利用できません。次の 4 つの旧仕様 URL は、スキーマではなく `"openapiAvailable": false` を含む同じ JSON ディスカバリ通知を返すようになりました。

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`
- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

現在のランタイムディスカバリには `GET https://api.flashcards-open-source-app.com/v1/` を使用してください。返された `docs.discoveryUrl` でランタイムルートを確認し、`docs.source.agentRoutesUrl` で実装の詳細を確認してください。

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
- `POST /v1/agent/sql/query`（読み取り専用）
- `POST /v1/agent/sql/execute`（書き込み）
- `GET /v1/agent/guide/{topic}`（読み取り専用）
- `POST /v1/agent/reviews/next`（読み取り専用）
- `POST /v1/agent/reviews/reveal`（読み取り専用）
- `POST /v1/agent/reviews/submit`（書き込み）

一般的な初期設定の流れは次のとおりです。

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. 必要であれば `POST /v1/agent/workspaces` に `{"name":"Personal"}` を送る
4. 必要であれば `POST /v1/agent/workspaces/{workspaceId}/select` を呼ぶ
5. 読み取りには `POST /v1/agent/sql/query` を、書き込みには `POST /v1/agent/sql/execute` を使う

ワークスペースの選択は、API キーごとの接続単位で明示的に行います。次の手順を推測するのではなく、各レスポンスに含まれる `instructions` とランタイムルート用の `docs.discoveryUrl`、実装の詳細用の `docs.source.agentRoutesUrl` に従ってください。

SQL ルートと復習ルートは、JSON ボディ内のオプションの `workspaceId` も受け付けます。これを指定すると、選択を変更せずに 1 回の呼び出しだけそのワークスペースを対象にします。省略すると選択中のワークスペースを使います。選択も `workspaceId` もない場合、これらのルートは `409 WORKSPACE_SELECTION_REQUIRED` を返します。

## SQL インターフェース

`POST /v1/agent/sql/query` は厳密な読み取り専用インターフェース（`SHOW TABLES`、`DESCRIBE`、`SHOW COLUMNS`、`SELECT`）で、`POST /v1/agent/sql/execute` は書き込み用インターフェース（`INSERT`、`UPDATE`、`DELETE`）です。1 回の呼び出しはすべて読み取り、またはすべて書き込みのいずれかでなければなりません。

これは意図的に制限されたものであり、完全な PostgreSQL ではありません。このドキュメントはサポートされる方言だけを扱い、PostgreSQL 互換性リファレンスではありません。

読み取り経路がデータを修復したり、スケジュールを再計算したり、カード状態を変更したりすることはありません。カードとデッキの書き込みにはすべて `POST /v1/agent/sql/execute` を使います。SQL では `review_events` や FSRS のスケジューリング状態を書き込めません。復習は `POST /v1/agent/reviews/submit` で記録します。

現在利用できる文の種類:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
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
- すべての SQL 呼び出しは 1 つのワークスペース（ボディ内の `workspaceId`、または選択中のワークスペース）に限定される

リクエスト例:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

カード取得の例:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

更新の例:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

リモート MCP サーバーも `https://mcp.flashcards-open-source-app.com/mcp` で利用でき、OAuth 2.1（Dynamic Client Registration + PKCE）を使用します。同じ SQL の分割を `sql_query`（厳密な読み取り専用）と `sql_execute`（書き込み）として公開し、さらに `list_workspaces`、`get_guide`、復習ツールの `next_review_card`、`reveal_answer`、`submit_review` も提供します。詳しくは [MCP コネクタ](/docs/mcp-connector/) を参照してください。

### 安全性と範囲

SQL サーフェスは生の PostgreSQL ではなく、パーサーで強制される制限付きの方言です。ガードレールは次のとおりです。

- **クローズドな文の許可リスト**: 読み取りは `SHOW TABLES`、`DESCRIBE`、`SHOW COLUMNS`、`SELECT` のみ、書き込みは `INSERT`、`UPDATE`、`DELETE` のみです。それ以外はすべて解析時に拒否されます。
- **限定されたリソース**: 文が触れられるのは `workspace`、`cards`、`decks`、`review_events` の各リソースだけです。
- **ワークスペース単位の範囲**: すべての文は、アクセスできる 1 つのワークスペース（リクエストボディ内の `workspaceId`、または選択中のワークスペース）に限定され、テナント間アクセスはできません。
- **厳格なリクエストボディ**: SQL ルートと復習ルートは未知のボディフィールドを拒否します。そのため、`workspaceId` のスペルを誤ると、選択中のワークスペースに対して実行されるのではなく失敗します。
- **上限**: 1 文あたり最大 `100` 行、1 バッチあたり最大 `50` 文、結果の上限はおよそ `12k` トークンです。変更バッチはアトミックに適用されます。
- **読み取り／書き込みの分離**: `sql_query` と `list_workspaces` は厳密な読み取り専用（`readOnlyHint`）であり、データを修復したり、スケジュールを再計算したり、カード状態を変更したりすることはありません。`sql_execute` は唯一の SQL 書き込みツールで、書き込みを行います（`destructiveHint`）。1 回の呼び出しはすべて読み取りかすべて書き込みのどちらかでなければなりません。SQL では `review_events` や FSRS のスケジューリング状態を書き込めません。復習を記録できるのは `POST /v1/agent/reviews/submit`（MCP では `submit_review`）だけです。

## ガイド

`GET /v1/agent/guide/{topic}` は 1 つのリファレンスガイドを `data.guide` で返します。これは MCP の `get_guide` ツールが返すものと同じ本文です。トピック:

- `sql_dialect`: SQL の完全な文法、制限、例
- `card_authoring`: カードの契約、タグ、重複チェック、書式
- `bulk_authoring`: 大規模な書き込み作業の分割と検証
- `review_flow`: 復習と評価のループ

未知のトピックを指定すると、サポートされているトピックの一覧とともに `400` が返されます。カードを作成する前、一括で書き込む前、または復習を実行する前には対応するガイドを取得し、文が拒否された後は `sql_dialect` を読み直してください。

```bash
curl https://api.flashcards-open-source-app.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## 復習

復習ルートを使うと、エージェントは学習者にカードを 1 枚ずつ出題し、各評価をカードの FSRS スケジュールに保存できます。これらのルートは MCP の復習ツールと同じ JSON 引数を受け取ります。

- `POST /v1/agent/reviews/next` は `cardId` と `frontText` を含む `card` を返し、期日を迎えたカードがない場合は `card: null` を返します。オプションの `tags`（いずれかに一致）または `deckId` でキューを絞り込めますが、両方を同時には指定できません。ボディのないリクエストも有効です。
- `POST /v1/agent/reviews/reveal` は `cardId` を必須とし、そのカードの `backText` を返します。
- `POST /v1/agent/reviews/submit` は `cardId`、クライアントで生成した `reviewId` UUID、`Again`、`Hard`、`Good`、`Easy` のいずれかの `rating`、学習者の IANA `reviewedTimeZone` を必須とします。サーバーが復習時刻を記録し、`dueAt`、`state`、`reps`、`lapses` を含むカードの新しいスケジュールを返します。

3 つのルートはすべてオプションの `workspaceId` を受け付けます。送信前に `reviewId` を保存しておき、送信結果が不確かな場合はまったく同じリクエストで再試行してください。復習が二重に記録されることはありません。復習ルートは次のレスポンスを返すこともあります。

- `409 REVIEW_EVENT_CONFLICT`: その復習はすでに記録されており、`error.details.reviewSchedule` にカードの現在のスケジュールが含まれます。
- `409 REVIEW_ID_CARD_MISMATCH`: その `reviewId` はすでに別のカードの復習を識別しているため、何も保存されていません。新しい `reviewId` で再度送信してください。
- `409 REVIEW_STALE`: カードに保存されている復習時刻が現在のサーバー時刻と同じか、それより後です。別のカードを復習してください。
- `400 REVIEW_INPUT_INVALID`: 引数が欠けている、無効である、またはサポートされていません。`tags` と `deckId` の併用や、ワークスペースで使われていないタグの指定もこれに含まれます。

送信の例:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/reviews/submit \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "cardId":"693c4863-28a2-45e8-8f55-9fa31fc95ff2",
    "reviewId":"429bb7cc-40fb-49f3-bb50-48a5db2826d1",
    "rating":"Good",
    "reviewedTimeZone":"Europe/Sofia"
  }'
```

## Web クライアント向け API と同期 API

Nibomo には、人が利用するクライアント向けの別 API とオフラインファースト同期用 API もありますが、これらは外部エージェント向けの主要な契約ではありません。

- ブラウザ向けフローでは、共有ドメインの Cookie と CSRF 保護を使用します
- オフラインファーストのクライアントは `/v1/workspaces/{workspaceId}/sync/push` と `/v1/workspaces/{workspaceId}/sync/pull` を使用します
- これらの同期ルートは、外部エージェント向けインターフェースとは別です
