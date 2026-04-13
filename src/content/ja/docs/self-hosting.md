---
title: セルフホスティングガイド
description: Postgres、認証サービス、バックエンド、Webアプリを使って Flashcards をローカルで動かす方法と、ドキュメントで案内している AWS 構成を自分でデプロイする方法を紹介します。
---

## 必要なもの

- Docker
- Node.js 20+
- npm
- 付属の Docker 構成で動かす PostgreSQL 16+

## クイックスタート

```bash
git clone https://github.com/kirill-markin/flashcards-open-source-app.git
cd flashcards-open-source-app
cp .env.example .env
make db-up
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

続いて、各サービスを別々のターミナルで起動します。

```bash
make auth-dev
make backend-dev
make web-dev
```

次のサービスが起動します。

1. `postgres` がポート `5432`
2. `auth` がポート `8081`
3. `backend` がポート `8080`
4. `web` がポート `3000`

ローカル環境でのアクセス先:

- Webアプリ: `http://localhost:3000`
- バックエンド API: `http://localhost:8080/v1`
- 認証サービス: `http://localhost:8081`

## 設定

`.env.example` を `.env` にコピーし、必要に応じて次の項目を調整してください。

- `DATABASE_URL` — Postgres の接続文字列
- `AUTH_MODE` — ローカル利用では `none`、メール OTP 認証を使う場合は `cognito`
- `BACKEND_ALLOWED_ORIGINS` — セッション認証付き API リクエストを許可するブラウザのオリジン
- `PUBLIC_API_BASE_URL` と `PUBLIC_AUTH_BASE_URL` — ディスカバリー応答で独自の公開ホストを案内したい場合に使う任意の上書き値

## iOS のローカル設定

メインリポジトリの iOS アプリは、ローカルの API / 認証ホスト設定を次のファイルから読み込みます。

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

必要であれば、サンプルファイルをコピーしてください。

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

その後、ローカル環境またはセルフホスト環境の `api` / `auth` ドメインを指すように設定します。

## 更新

```bash
git pull
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

依存関係を更新したあとは、ローカルの各サービスを再起動してください。

## AWS へのデプロイ

ドキュメントで案内している本番構成は次のとおりです。

- `app.<domain>` に CloudFront + S3
- `api.<domain>` に API Gateway + Lambda
- `auth.<domain>` に API Gateway + Lambda
- AWS RDS 上の Postgres
- パスワードレスのメール OTP 認証に Cognito
- ルートドメインをほかに使わない場合は、必要に応じて apex ドメインからのリダイレクトを設定

詳しい手順は次を参照してください。

- [リポジトリの README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [デプロイガイド](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/deployment.md)
- [AWS CDK インフラ構成](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
