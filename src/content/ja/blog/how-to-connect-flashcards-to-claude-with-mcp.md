---
title: "NibomoのフラッシュカードをMCPでClaudeに接続する方法"
description: "リモートMCPコネクタでNibomoをClaude Desktopやブラウザ版に接続します。確認済みの接続手順に沿ってツール権限を設定し、最初のフラッシュカードを保存してみましょう。"
date: "2026-06-23"
updated: "2026-09-20"
image: "/blog/how-to-connect-nibomo-to-claude-mcp.png"
keywords:
  - "Nibomo Claude コネクタ"
  - "Claude MCP フラッシュカード"
  - "NibomoをClaudeに接続"
  - "Claudeでフラッシュカードを作成"
---

ClaudeはカスタムMCPコネクタを使って、Nibomoのワークスペースにフラッシュカードを直接保存できます。サーバーURLを1つ追加してNibomoにログインし、Claudeが毎回確認せずに実行できる操作を選びます。

以下の設定手順は、2026年9月20日にClaude Desktopで確認しました。対象は、Desktop版とブラウザ版の通常のClaudeチャットで使うリモートコネクタです。Claude Code、Codexなどのターミナルエージェントを使う場合は、別記事の[エージェント用ログインガイド](/blog/claude-code-codex-openclaw-flashcards-login/)を参照してください。

![資料の閲覧権限と変更前の承認を、図書館での受け渡しで表したイラスト](/blog/how-to-connect-nibomo-to-claude-mcp.png)

## Claudeのコネクタ設定にNibomoを追加する

Nibomoのアカウントと、Claudeのカスタムコネクタを利用できる環境が必要です。NibomoはリモートMCPサーバーを使うため、端末へのインストールは不要です。この接続方法は、Anthropicの[カスタムコネクタガイド](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)にも記載されています。

1. Claude Desktopの **Settings > Connectors** を開くか、[ブラウザのConnectors設定](https://claude.ai/customize/connectors)を開きます。
2. **Add custom connector**（カスタムコネクタを追加）を選びます。
3. 名前に **Nibomo** と入力し、次のサーバーURLを貼り付けます。

   ```text
   https://mcp.nibomo.com/mcp
   ```

4. **Continue** をクリックします。
5. 認証画面では、**Sign in now**（今すぐサインイン）と **Register automatically (DCR)**（自動登録）を選択したままにします。カスタムヘッダーと詳細設定は既定のままにしてください。
6. **Add**、続いて **Connect** をクリックします。

![ClaudeのAdd custom connector画面に入力されたNibomoの名前とMCPサーバーURL](/blog/claude-mcp-nibomo-add-connector.png)

## ログインしてアクセスを許可する

接続を完了するため、Claudeがブラウザを開きます。先に確認画面が表示されたら、**Continue connecting** を選んでください。

Nibomoの認証ページのドメインは `auth.flashcards-open-source-app.com` です。すでにNibomoにログインしていれば、そのセッションが認識される場合があります。そうでなければ、アカウントにログインしてください。同意画面には **Claude wants to connect to your Nibomo account** と表示され、フラッシュカードと復習データの読み取り・書き込み権限について説明されています。

接続先が意図したアカウントであることを確認し、**Allow access** をクリックします。**Connected** と表示されたら、Claude Desktopを使っている場合は **Open desktop app** を選んでください。コネクタ設定に戻ると、**Nibomo** と `https://mcp.nibomo.com/mcp` が表示されているはずです。

## 書き込みは承認制にしておく

このコネクタには、学習教材の読み取り、変更、復習結果の記録に使うツールがあります。**Settings > Connectors** でNibomoを開き、ツールの権限を確認してください。ここで紹介する設定では、5つの読み取りツールを **Always allow**（常に許可）にし、2つの書き込みツールは **Needs approval**（承認が必要）のままにします。

| 権限 | ツール |
| --- | --- |
| **Always allow** | Get flashcards usage guide; List flashcards workspaces; Next flashcard question; Reveal flashcard answer; Nibomo SQL query (read-only) |
| **Needs approval** | Nibomo SQL execute (write); Submit flashcard review |

これでClaudeはワークスペースを探したりカードを読んだりできますが、データの変更や復習結果の送信には承認を求めます。読み取りにも承認を求めたい場合は、読み取りツールも承認が必要な設定にできます。

![Claudeに接続されたNibomo。読み取りツールは許可され、書き込みツールは承認が必要な設定](/blog/claude-mcp-flashcards-connector-settings.png)

## カードを1枚作り、保存されたことを確認する

会話を開き、チャットのコネクタメニューでNibomoが有効になっていることを確認します。最初は、保存先とカードの内容を明確にして、まずは1枚だけ作成を頼んでみましょう。

```text
Nibomoで私のワークスペースを一覧表示し、どれを使うか私に確認してください。
その後、フラッシュカードを1枚作成してください。
表面: HTTP 404は何を意味しますか？
裏面: リクエストされたリソースがサーバー上に見つからなかったことを意味します。
タグ: web-basics
```

ワークスペースを選び、Claudeの書き込みリクエストを確認します。内容と保存先が正しければ承認してください。その後、[Nibomo](https://app.nibomo.com/)を開き、保存されたカードの表面に質問、裏面に答えがあることを確認します。このガイドの動作確認では、接続と権限設定の保存までを確認しており、カードの作成は行っていません。この最初のテストで、選んだワークスペースにClaudeがカードを保存できることも確かめられます。

Claudeがチャットにカードの文章を書くだけの場合は、設定でNibomoが接続済みか、その会話で有効か、**Nibomo SQL execute (write)** がブロックされていないかを確認してください。そのうえで、Nibomoを使ってカードを保存するよう、はっきりと依頼してください。

まとめて多くのカードを作る場合は、[Claudeでフラッシュカードを作る方法](/blog/how-to-use-claude-to-make-flashcards/)で、役立つ質問と答えの作り方を紹介しています。HTTPコードを学んでいるなら、既存の[HTTPステータスコードのフラッシュカードデッキ](/catalog/packages/http-status-code-flashcards/)から始めることもできます。

## 以前のコネクタURLを使っている場合

以前のエンドポイント `https://mcp.flashcards-open-source-app.com/mcp` も引き続き使えます。新しく接続する場合は `https://mcp.nibomo.com/mcp` を使ってください。URLを切り替える際は、Nibomoへのアクセスを再度許可する必要があります。

このガイドで確認した手順に沿う場合は、**Settings > Connectors** で以前のコネクタを開き、**Disconnect**、続いて **More options > Remove** を選びます。上記の手順でNibomoを追加し、新しいURLと、このガイドで紹介したツールが表示されることを確認してください。

アプリを初めて使う方は、[使い始めガイド](/docs/getting-started/)で、最初のカードを保存した後のワークスペースの使い方と学習の流れを確認できます。
