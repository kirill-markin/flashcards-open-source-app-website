---
title: MCP コネクタ
description: リモートの Flashcards MCP サーバーをカスタムコネクタとして追加します。クライアント向けの OAuth、ヘッドレス用途向けの API キー、読み取りと書き込みに分割された SQL ツールを備えています。
---

## 概要

Flashcards はリモートの MCP（Model Context Protocol）サーバーを動かしており、MCP クライアントや AI エージェントが期日を迎えたカードを読み取ったり、カードやデッキを作成・編集したりできます。

エージェントは 2 通りの方法で接続できます。この MCP サーバー経由（Claude や Cursor のような MCP クライアントに最適）か、CLI エージェント向けの [エージェント API ディスカバリー URL](/docs/api/) 経由です。どちらもユーザーごとの同じデータサーフェスに到達します。このページでは MCP サーバーについて説明します。

接続先は次のとおりです。

```text
https://mcp.flashcards-open-source-app.com/mcp
```

トランスポートは Streamable HTTP で、サーバーは小さく意図的に制限された SQL サーフェスを通じて 3 つのツールを公開します。これは [API リファレンス](/docs/api/) と同じユーザーごとのデータサーフェスであり、MCP サーバーは MCP を話すクライアントからそこに到達するためのコネクタに適した方法です。

## クライアントへの追加方法

ほとんどのクライアントでは、リモート MCP サーバーをカスタムコネクタとして追加します。

1. クライアントのコネクタまたは MCP サーバーの設定を開きます。
2. カスタムコネクタを追加し、サーバー URL `https://mcp.flashcards-open-source-app.com/mcp` を貼り付けます。
3. 対話型のクライアントでは、プロンプトが表示されたらブラウザで認可します。サーバーは OAuth 2.1 と Dynamic Client Registration を使用するため、貼り付けるクライアントシークレットも、事前に登録しておくアプリも不要です。
4. ヘッドレスまたは CLI で利用する場合は、ブラウザフローの代わりに、エージェント API キーを使って `Authorization: Bearer fca_…` ヘッダーを設定します。

認可後は、まず `list_workspaces` を 1 回呼び出してワークスペースを選び、読み取りには `sql_query` を、書き込みには `sql_execute` を使います。

## ツール

サーバーは 3 つのツールを公開します。読み取りと書き込みは意図的に分割されており、1 つのツールが安全な操作と破壊的な操作を混在させることはありません。

- `sql_query` — カードとデッキへの読み取り専用アクセス（`SHOW TABLES`、`DESCRIBE`、`SHOW COLUMNS`、`SELECT`）。
- `sql_execute` — カードとデッキへの書き込みアクセス（`INSERT`、`UPDATE`、`DELETE`）をアトミックなバッチとして実行します。
- `list_workspaces` — アクセスできるワークスペースの一覧を返します。各ワークスペースには `workspaceId`、名前、アクティブなカード数、最終アクティビティ、そして現在選択中のデフォルトかどうかが含まれます。返された `workspaceId` を `sql_query` と `sql_execute` の `workspaceId` 引数に使います。

SQL サーフェスは意図的に制限された方言であり、完全な PostgreSQL ではありません。文が対象にできるのは `workspace`、`cards`、`decks`、`review_events` の各リソースのみで、すべての文は自分のワークスペースに限定され、読み取りと書き込みは 1 文あたり `100` 行に制限されます。

## カードの契約

すべてのカードは 1 つの契約に従い、ツールはそれに依存しています。

- `front_text` は質問または復習用のプロンプトのみであり、答えを保持することはありません。
- `back_text` は答えを保持し、必要に応じて具体的な例を含めます。

`sql_execute` を通じてカードを生成するエージェントはこの契約に従うため、生成されるカードは間隔反復ですぐに復習できます。

## 認証

2 つの認可パスが、ユーザーごとの同じデータサーフェスに到達します。

### OAuth 2.1（対話型のコネクタクライアント）

サーバーは PKCE と Dynamic Client Registration を用いた authorization-code フローを実装しています。MCP URL をカスタムコネクタとして追加し、ブラウザで認可してください。クライアントシークレットを事前に共有することはありません。ディスカバリーは標準的です。

- Protected-resource メタデータ:
  `https://mcp.flashcards-open-source-app.com/.well-known/oauth-protected-resource`
- Authorization-server メタデータ:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API キー（ヘッドレスおよび CLI）

[API リファレンス](/docs/api/) に記載されているメール OTP ログインフローを通じて、長期間利用できる `fca_` エージェント API キーを取得し、それを Bearer トークンとして送信します。

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

これは REST エージェントサーフェスが受け付けるものと同じキーであり、ブラウザや OAuth のラウンドトリップは不要です。

両方のパスについて、正規かつ機械可読な記述は `https://api.flashcards-open-source-app.com/v1/`（`/v1/agent` にもミラーされています）のディスカバリーペイロードです。

## 安全性と範囲

SQL ツールは承認しても安全です。なぜなら、このサーフェスは任意のデータベースアクセスではなく、パーサーで強制される閉じた方言だからです。

- **クローズドな文の許可リスト**: `sql_query` は `SHOW TABLES`、`DESCRIBE`、`SHOW COLUMNS`、`SELECT` のみを受け付け、`sql_execute` は `INSERT`、`UPDATE`、`DELETE` のみを受け付けます。それ以外はすべて解析時に拒否されます。
- **限定されたリソース**: 文が触れられるのは `workspace`、`cards`、`decks`、`review_events` のみです。
- **ワークスペース単位の範囲**: すべての文は選択中のワークスペースに限定され、テナント間アクセスはできません。
- **上限**: 1 文あたり最大 `100` 行、1 バッチあたり最大 `50` 文、結果の上限はおよそ `12k` トークンです。変更バッチはアトミックに適用されます。
- **読み取り／書き込みの分離**: `sql_query` と `list_workspaces` は読み取り専用（`readOnlyHint`）で、`sql_execute` は書き込みを行います（`destructiveHint`）。

スタック全体 — アプリ、バックエンド、インフラ — はオープンソースであり、[セルフホスト](/docs/self-hosting/)できます。そのため、同じコネクタを自分のデプロイ環境に対して動かすことができます。
