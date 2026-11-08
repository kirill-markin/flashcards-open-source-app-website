---
title: はじめに
description: iPhone、iPad、Mac、Android のアプリ、Webアプリ、AI エージェント、自分のサーバーから始める方法を案内します。
---

始め方はいくつかあります。よく使われている順に紹介します。

- **iPhone、iPad、Mac 向けアプリ**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Android アプリ**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **ホスト版Webアプリ**: [app.nibomo.com](https://app.nibomo.com)
- **AI エージェント**: [MCP コネクタ](/docs/mcp-connector/) または `https://api.nibomo.com/v1/` の API
- **セルフホスティング**: [セルフホスティングガイド](/docs/self-hosting/)

## モバイル・デスクトップアプリ

お使いのデバイス向けのネイティブアプリをインストールします。

- iPhone、iPad、Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

アプリはカードをデバイス上に保存するため、オフラインでも復習でき、オンラインに戻ると同期されます。ゲストとして始めて、後からサインインすることもできます。

### ホーム画面ウィジェット

Nibomo アプリは、iPhone、iPad、Mac、Android に「復習」ウィジェットを追加します。サイズは 3 種類です。

- **小**: 復習待ちのカード数と連続学習の日数
- **中**: 復習待ちのカード数と次のカードの問題
- **大**: 復習待ちのカード数、次の問題、連続学習の日数

復習待ちのカードがないときは、ウィジェットに「すべて完了」と次のカードの復習時刻が表示されます。答えが表示されることはありません。ウィジェットをタップすると「復習」が開きます。中または大のウィジェットでは、表示中のカードから「復習」が始まります。ウィジェットはゲストを含め、誰でも無料で使えます。

ほかにも「アクティビティ」「年間」「今日」「復習数」「連続記録」「カレンダー」「今後の予定」「ダッシュボード」の 8 つのウィジェットで、学習の進み具合を確認できます。iPhone では「復習待ちカード」ウィジェットをロック画面にも置けます。各ウィジェットは[ウィジェットガイド](/blog/flashcard-widget/)で紹介しています。

iPhone、iPad、Mac で追加するには、ウィジェットギャラリーを開き、Nibomo を選んでからサイズを選びます。Android では、ウィジェットの一覧から Nibomo のウィジェットを追加してから、サイズを変更します。レイアウトはサイズに合わせて変わります。

## ホスト版Webアプリ

最も手軽に始めるなら、ホスト版Webアプリがおすすめです。

1. [app.nibomo.com](https://app.nibomo.com) を開きます
2. パスワードレスのメール OTP でサインインします
3. カードを作成し、復習期限が来た項目をこなし、ワークスペースのデータやファイル添付を使って AI チャットを利用します

この方法なら、インストールやサーバー設定は不要です。

## エージェントのセットアップ

Claude、ChatGPT、Cursor などの MCP クライアントは、[MCP コネクタガイド](/docs/mcp-connector/) の手順で接続できます。

Claude Code、Codex、OpenClaw を直接接続する場合は、まず次のURLから始めます。

```text
GET https://api.nibomo.com/v1/
```

このディスカバリーレスポンスには、メール OTP によるログイン、長期利用向け API key の作成、アカウント情報の取得、ワークスペースの初期化、公開されている SQL インターフェースの利用開始までに必要な情報が含まれています。

同じ内容は `GET /v1/agent` でも取得できますが、正式な公開エントリーポイントは `/v1/` です。

## セルフホスティング

自分でインスタンスを運用したい場合は、[セルフホスティングガイド](/docs/self-hosting/) を参照してください。

## 現在利用できるもの

- カード作成、復習、AIチャットを利用できるホスト版Webアプリ
- ローカル SQLite ストレージとオフラインファースト同期を備えた、iPhone、iPad、Mac、Android 向けネイティブアプリ
- `api` ドメインと `auth` ドメインで分けて提供される共有バックエンドと認証サービス
- ディスカバリー、OTP、ApiKey 認証による外部エージェント向けの接続フロー
- Postgres を正本データストアとする、AWS 上でのオープンソース運用構成

## リポジトリの方向性

このプロジェクトはオフラインファーストを前提に設計されています。

現在のリポジトリには、Webアプリ、iOS アプリ、認証サービス、バックエンド API、外部エージェント向けフロー、そして Google Play で公開中の Android アプリが含まれています。
