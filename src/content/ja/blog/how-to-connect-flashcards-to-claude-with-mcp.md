---
title: "ClaudeにNibomoをMCPで接続して、チャットからカードを作る方法"
description: "ClaudeにNibomoのMCPカスタムコネクタを追加し、ツール権限を確認しながら、ClaudeのチャットからNibomoワークスペースへ直接カードを作成する実践ガイドです。"
date: "2026-06-23"
image: "/blog/how-to-connect-flashcards-to-claude-with-mcp.png"
keywords:
  - "Claude MCP フラッシュカード"
  - "ClaudeにNibomoを接続"
  - "Claude カスタムコネクタ Nibomo"
  - "Claudeでフラッシュカードを作る"
  - "Nibomo MCP コネクタ"
  - "Claude コネクタ フラッシュカード"
  - "Nibomo Claude コネクタ"
  - "Claude MCP カード作成"
  - "Nibomo remote MCP"
  - "Claude Nibomo ワークスペース"
---

昨日、Claudeの中からNibomoにテスト用カードを1枚追加しました。1分もかかりませんでした。良かったのは、見せるためのデモっぽさではありません。Claudeがどのワークスペースを使うか確認し、書き込み操作の承認を求め、そのまま実際のアプリにカードを保存してくれたことです。きれいなチャット画面の中に置きっぱなしにならなかった。

今 **Claude MCP フラッシュカード** を調べる意味は、そこにあります。

Claudeから直接Nibomoのワークスペースにカードを作りたいなら、セットアップは短いです。Nibomoのカスタムコネクタを追加し、ツール権限を確認し、チャットで有効にして、Claudeが保存しようとしたタイミングで書き込みを承認する。それで動きます。

![ClaudeがNibomoのMCPサーバーに接続され、チャットからフラッシュカードを作成している画面](/blog/how-to-connect-flashcards-to-claude-with-mcp.png)

## これはディレクトリ掲載ではなく、カスタムコネクタです

最初に1つ大事な点があります。NibomoはClaudeに **custom connector** として、**remote MCP** で接続します。

なので、Claudeの公式コネクタディレクトリに、最初からNibomoアプリが載っている前提で探し回る必要はありません。通常の流れは、Claudeの [connector settings page](https://claude.ai/customize/connectors) を開き、プラスボタンを押して **Add custom connector** を選び、自分でNibomoのMCP URLを貼り付けます。

Nibomoコネクタの正確なURLはこれです。

`https://mcp.nibomo.com/mcp`

直接リンク: [mcp.nibomo.com/mcp](https://mcp.nibomo.com/mcp)

## 接続前に知っておきたいこと

思っている以上に大事なのは2点です。

1つ目。Claudeはremote MCPサーバーに、あなたのノートPCからではなくAnthropicのクラウド基盤から接続します。つまり、そのサーバーは公開インターネットから到達できる必要があります。Nibomoはすでにその条件を満たしているので、使うべきなのは上の公開MCPエンドポイントです。

2つ目。コネクタ権限は、本物のツール権限として扱ったほうがいいです。信頼できるサーバーだけに接続し、各ツールで何ができるのかを確認し、書き込み操作を許可する前に承認リクエストをきちんと読みます。

## ClaudeにNibomo MCPコネクタを追加する方法

個人のClaudeアカウントなら、設定手順は次のとおりです。

1. [Customize > Connectors](https://claude.ai/customize/connectors) を開く。
2. `+` をクリックする。
3. **Add custom connector** を選ぶ。
4. コネクタ名を入力し、`https://mcp.nibomo.com/mcp` を貼り付ける。
5. コネクタを追加する。
6. **Connect** をクリックし、Claudeに求められたらログインフローを完了する。
7. チャットで使い始める前に、ツール権限を確認する。

TeamまたはEnterpriseワークスペースを使っている場合は、OwnerかPrimary Ownerが **Organization settings > Connectors > Add > Custom > Web** からカスタムコネクタを追加できます。ただし、そのあと各ユーザー側でも接続と認証は必要です。

## 最初の権限設定は控えめでいい

カードを作るときに関係するのは、Nibomoコネクタのツールのうち次の4つです。

- `list_workspaces` は利用可能なワークスペース一覧の取得
- `sql_query` は読み取り専用アクセス
- `get_guide` はClaudeが最初の書き込みの前に読むカード作成ルールの取得
- `sql_execute` はカード作成のような書き込み操作

Claudeでは各ツールごとに **Always allow**、**Needs approval**、**Blocked** を設定できます。

最初の設定としては、読み取り専用ツールは **Always allow**、書き込みツールは **Needs approval** のままにしておくのが無難です。これならClaudeはワークスペースを確認したり、データを読んだりできます。一方で、カード作成が見えない裏側の処理になりません。

このページにあるコネクタ設定のスクリーンショットも、その形です。`list_workspaces` と `sql_query` は許可済みで、`sql_execute` はまだあなたの承認が必要です。

![Claudeのコネクタ設定で、Nibomo MCPの読み取りツールが常時許可、書き込みツールが承認待ちになっている画面](/blog/claude-mcp-flashcards-connector-settings.png)

あとで緩めたくなれば変えられます。最初からそこまで開ける必要はありません。

## 使いたいチャットでコネクタを有効にする

セットアップ後はClaudeの会話を開き、そのチャットでコネクタが使える状態か確認します。今の流れでは、会話内の `+` ボタンか `/` メニューからコネクタを有効にし、必要ならそのチャット専用のツールアクセスも調整できます。

Claudeがコネクタを使うべき場面で使っていないなら、先に見るべきなのは次です。

- Nibomoコネクタが設定画面で接続済みか
- 今のチャットでコネクタが有効か
- 書き込みツールが **Blocked** になっていないか

「Claudeがテキストしか返さず、カードを作ってくれない」というときは、だいたいこれで直ります。

## Claudeに何と頼めばいいか

ここは素直なプロンプトで十分です。変に構える必要はありません。

最初の例として使いやすいのは、こんな感じです。

```text
Nibomoに新しいフラッシュカードを作成してください。
Front: What does HTTP 404 mean?
Back: The requested resource was not found on the server.
Tag: web-basics
どのワークスペースを使うべきか分からなければ、確認してください。
```

```text
何かを作成する前に、私のNibomoワークスペースを一覧で見せてください。語学学習用カードにいちばん合いそうなものも教えてください。
```

```text
Nibomoに新しいスペイン語のフラッシュカードを作成してください。
Front: How do you say "I would like a coffee" in Spanish?
Back: Me gustaría un café.
Tags: spanish, travel
Personalワークスペースを使ってください。
```

いきなり50枚ではなく、まず1枚か2枚で始めるのがいいです。確かめたいのは、大量投入そのものではなく、コネクタの流れ、ワークスペースの選択、承認の出方だからです。

## 実際のカード作成フローはかなり普通です

この部分は拍子抜けするくらい普通です。

Claudeに、Nibomoへカードを作ってほしいと頼みます。ワークスペースが複数あり、どれが既定か明確でなければ、Claudeが保存先を聞いてきます。そのあと、`sql_execute` がまだ **Needs approval** のままなら、Claudeは書き込みツールを使い、あなたの承認を待ちます。

この挙動で正しいです。

書き込みリクエストを確認し、承認して、そのあとClaudeに最後まで進めさせます。下のスクリーンショットでは、Claudeがどのワークスペースを使うか確認し、Nibomoへの書き込み操作を実行し、テストカードの追加成功まで報告しています。

![Claudeがワークスペースを確認したうえで、Nibomo MCPコネクタ経由でテスト用フラッシュカードを作成しているチャット画面](/blog/claude-mcp-flashcards-create-card.png)

ツール呼び出しを細かく見たいのでなければ、生のSQLそのものを気にする必要はありません。重要なのは流れです。

1. Claudeにカード作成を依頼する
2. 聞かれたらワークスペースを選ぶ
3. 書き込み操作を確認して承認する
4. 保存されたカードの内容を確認する

これで、Claude自体をレビュー用アプリだと思い込まずに、**Claudeでフラッシュカードを作る** 流れを始められます。

## いくつか正直な限界

この設定は便利ですが、魔法ではありません。

ClaudeはNibomo内でカードを作る手伝いができます。読み取りツール経由でワークスペースを見たり、データを確認したりもできます。ただし、それはClaudeが作るすべてのカードが良いという意味ではありませんし、すべての書き込みリクエストを無条件で承認していいという意味でもありません。

私ならClaudeは下書きと入力の層として使い、その後で重要な部分はNibomo側で見ます。

- 弱いカードの手直し
- デッキやタグの整理
- 間隔反復でのレビュー
- 普段使っている端末上の本物のワークスペースでの学習

ツール接続の前に、まずカード作成プロンプト自体を整えたいなら、[2026年にClaudeでフラッシュカードを作る方法](/ja/blog/how-to-use-claude-to-make-flashcards/) のほうが先です。カード作成より広い勉強フローを見たいなら、[2026年にClaudeで勉強する方法](/ja/blog/how-to-use-claude-for-studying/) がつながります。

## Claudeがカードを作ったら、実際のアプリで見直す

このセットアップでいちばん良いのは、ここです。カードが見栄えのいいAI会話の中に残りません。あとで本当に復習できるNibomoへ着地します。

ホスト版のWebアプリを開いてもいいし、スマホでカードを確認してもいいし、そのままいつもの学習フローへ進めます。

- [Nibomo web app](https://app.flashcards-open-source-app.com/)
- [App StoreのNibomo for iPhone and iPad](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- [Google PlayのNibomo for Android](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

![Nibomoの復習体験を、ホスト版Webアプリとモバイルアプリで見せる画面](/home/app-screens-showcase-en.png)

まだ製品を触っていないなら、[使い始めガイド](/ja/docs/getting-started/) が最短です。

## 要点だけならこうです

**NibomoをClaudeに接続したい** なら、実際の流れはこれです。

1. Claudeの [custom connector settings](https://claude.ai/customize/connectors) を開く
2. `https://mcp.nibomo.com/mcp` を追加する
3. 接続し、権限を確認する
4. 最初は読み取りツールを開け、書き込みツールは承認制にしておく
5. 使いたいチャットでコネクタを有効にする
6. Claudeにカード作成を頼む
7. 書き込みリクエストを承認する
8. Nibomoで保存済みカードを確認する

これで、見せかけの統合でも、手作業のコピペでもなく、初日から書き込み操作を自分で管理しながら、Claudeのチャットから実際のNibomoワークスペースまでつなげられます。
