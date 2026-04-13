---
title: はじめに
description: ホスト版 Web アプリから始めることも、公開された案内用エンドポイント経由でエージェントを接続することも、自分でローカル環境を立ち上げることもできます。
---

## ホスト版 Web アプリ

最短で始めるなら、ホスト版 Web アプリを使う方法がおすすめです。

1. [app.flashcards-open-source-app.com](https://app.flashcards-open-source-app.com) を開きます
2. パスワードレスのメール OTP でサインインします
3. カードを作成し、期限の来た項目を復習し、ワークスペースのデータやファイル添付を使って AI チャットを利用します

この方法では、インストールやサーバー設定は必要ありません。

## エージェントのセットアップ

Claude Code、Codex、OpenClaw を直接接続する場合は、まず次のエンドポイントから始めます。

```text
GET https://api.flashcards-open-source-app.com/v1/
```

このレスポンスには、メール OTP によるログイン、長期間利用できる API key の作成、アカウント情報の読み込み、ワークスペースの初期設定、そして公開されている SQL インターフェースの利用開始までの手順が含まれています。

同じ内容は `GET /v1/agent` でも取得できますが、正式な公開エントリポイントは `/v1/` です。

## セルフホスティング

自分でインスタンスを運用したい場合は、[セルフホスティングガイド](/docs/self-hosting/) を参照してください。

## 現在利用できるもの

- カード作成、復習、AI チャットを利用できるホスト版 Web アプリ
- メインリポジトリに含まれる、ローカル SQLite と offline-first sync を備えた iOS クライアント
- 別ドメインの `api` と `auth` で提供される共有バックエンドおよび認証サービス
- discovery、OTP、ApiKey 認証を使った外部エージェント向け接続フロー
- Postgres を正本データストアとして使う AWS 向けのオープンソース構成

## リポジトリの方向性

このプロジェクトは offline-first を前提に設計されています。

現在のリポジトリには、web app、iOS app、auth service、backend API、外部エージェント向けフロー、そして Google Play で公開中の Android app が含まれています。
