---
title: アーキテクチャ
description: システム全体像、公開ドメイン、対応クライアント、現在の offline-first データフロー。
---

## システム概要

```text
iOS app / agent client        -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                       -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth        -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                 -> <domain>      -> CloudFront redirect -> app.<domain>
```

## 基本原則

1. `app`、`api`、`auth` は公開ドメインを分離する
2. 正本データは Postgres に置く
3. iOS client は local SQLite と sync を組み合わせた offline-first を前提にする
4. Web app、iOS app、外部 agent 向けインターフェースは同じ workspace model を共有する
5. 外部 agent は `GET https://api.flashcards-open-source-app.com/v1/` を起点にする

## 対応クライアント

- `app.flashcards-open-source-app.com` で提供している web app
- メインリポジトリに含まれる、ローカル SQLite ストレージを使う iOS app
- Google Play で配布している Android app
- discovery、OTP bootstrap、`Authorization: ApiKey` に対応した外部 agent client

## データモデル

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## データフロー

### Web

1. ブラウザは `auth.<domain>` 経由でサインインする
2. Web app は `api.<domain>` からワークスペースデータを読み込む
3. AI チャットのリクエストは `/chat/local-turn` を通る
4. 復習結果の送信時にスケジューラ状態を更新する

### iOS

1. iOS app は最初に local SQLite へ書き込む
2. ローカルの変更は outbox に積まれる
3. sync は `/v1/workspaces/{workspaceId}/sync/push` で変更を upload する
4. sync は `/v1/workspaces/{workspaceId}/sync/pull` でリモート側の更新を download する
5. local database が変更を適用し、sync cursor を進める

### 外部エージェント

1. agent は `GET /v1/` から開始する
2. OTP bootstrap は `auth.<domain>` 上で実行する
3. agent は長期間有効な API key を受け取る
4. agent は `/v1/agent/me` を読み込み、workspace 一覧を取得し、必要なら選択してから `/v1/agent/sql` を使う

## スケジューリング

Flashcards では、復習スケジューラとして FSRS を使います。

実装上のポイント:

- backend と iOS は対応する FSRS 実装をそろえている
- web app はスケジューリング用のデータ契約を共有するが、3つ目のスケジューラ実装は持たない
- workspace 単位のスケジューラ設定には desired retention、learning steps、relearning steps、maximum interval、fuzz が含まれる
- 実際の復習時刻は `reviewedAtClient` を使う

詳しくは [メインリポジトリの FSRS scheduling logic](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) を参照してください。

## 認証

- Cognito を使った email OTP
- ホスト版 web app 向けの共有ドメインのブラウザセッション cookie
- `auth.<domain>` 上の agent OTP bootstrap で長期間有効な ApiKey を発行する
- ローカル開発では `AUTH_MODE=none`
- 本番相当の認証では `AUTH_MODE=cognito`

## デプロイ構成

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda backend
- `auth.<domain>` -> API Gateway + Lambda auth service
- AWS RDS 上の Postgres

apex domain は別のマーケティングサイトとして運用できます。立ち上げ段階でまだ空いているなら、インフラ側で一時的に `app.<domain>` へ redirect することもできます。
