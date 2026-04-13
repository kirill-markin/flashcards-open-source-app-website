---
title: アーキテクチャ
description: システム全体像、公開ドメイン、対応クライアント、現在のオフラインファーストのデータフローをまとめています。
---

## システム概要

```text
iOS アプリ / 外部エージェントクライアント -> api.<domain>  -> API Gateway -> Lambda バックエンド -> Postgres
Web アプリ                               -> app.<domain>  -> CloudFront -> SPA
ブラウザ / エージェント認証             -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
ルートドメインのフォールバック          -> <domain>      -> CloudFront リダイレクト -> app.<domain>
```

## 基本原則

1. `app`、`api`、`auth` はそれぞれ独立した公開ドメインを使う
2. Postgres を正本データストアとする
3. iOS クライアントは、ローカル SQLite と同期を組み合わせたオフラインファーストを前提とする
4. Web アプリ、iOS アプリ、外部エージェント向けインターフェースは、同じワークスペースのデータモデルを共有する
5. 外部エージェントは `GET https://api.flashcards-open-source-app.com/v1/` を起点にする

## 対応クライアント

- `app.flashcards-open-source-app.com` で提供する Web アプリ
- メインリポジトリに含まれる、ローカル SQLite ストレージを使う iOS アプリ
- Google Play で配布している Android アプリ
- 接続案内用エンドポイント、OTP による初期認証、`Authorization: ApiKey` に対応した外部エージェントクライアント

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
2. Web アプリは `api.<domain>` からワークスペースデータを読み込む
3. AI チャットのリクエストは `/chat/local-turn` を通る
4. 復習結果の送信時に、書き込みとあわせてスケジューラ状態を更新する

### iOS

1. iOS アプリは、まず SQLite にローカル保存する
2. ローカルの変更は送信待ちキュー（outbox）に積まれる
3. 同期では `/v1/workspaces/{workspaceId}/sync/push` を使って変更をアップロードする
4. 同期では `/v1/workspaces/{workspaceId}/sync/pull` を使ってリモート更新をダウンロードする
5. ローカルデータベースが変更を適用し、同期カーソルを進める

### 外部エージェント

1. エージェントは `GET /v1/` から開始する
2. OTP による初期認証は `auth.<domain>` 上で行う
3. エージェントは長期間有効な API キーを受け取る
4. エージェントは `/v1/agent/me` を読み込み、ワークスペース一覧を取得し、必要に応じて選択してから `/v1/agent/sql` を使う

## スケジューリング

Flashcards は、復習スケジューラとして FSRS を採用しています。

実装上のポイント:

- バックエンドと iOS では、対応する FSRS 実装をそろえている
- Web アプリはスケジューリング用のデータ契約を共有するが、3つ目の独立したスケジューラ実装は持たない
- ワークスペース単位のスケジューラ設定には、目標保持率（`desired retention`）、学習ステップ（`learning steps`）、再学習ステップ（`relearning steps`）、最大間隔（`maximum interval`）、`fuzz` が含まれる
- 実際の復習時刻は `reviewedAtClient` を基準にする

詳しくは、[メインリポジトリの FSRS スケジューリング仕様](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) を参照してください。

## 認証

- Cognito によるメール OTP
- ホスト版 Web アプリ向けの共有ドメインのブラウザセッション Cookie
- `auth.<domain>` 上の OTP による外部エージェント初期認証で、長期間有効な ApiKey を発行する
- ローカル開発では `AUTH_MODE=none`
- 本番相当の認証では `AUTH_MODE=cognito`

## デプロイ構成

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda バックエンド
- `auth.<domain>` -> API Gateway + Lambda auth service
- Postgres は AWS RDS で動かす

ルートドメインは別のマーケティングサイトとして運用できます。立ち上げ初期にまだ未使用であれば、インフラ側で一時的に `app.<domain>` へリダイレクトすることもできます。
