---
title: セルフホスティングガイド
description: Postgres、auth、backend、web を使って Flashcards をローカルで動かす方法と、ドキュメント化された AWS 構成を自分でデプロイする方法を案内します。
---

## 必要なもの

- Docker
- Node.js 20+
- npm
- 付属の Docker セットアップで動かす PostgreSQL 16+

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

これで次のサービスが起動します。

1. `postgres` がポート `5432`
2. `auth` がポート `8081`
3. `backend` がポート `8080`
4. `web` がポート `3000`

ローカルでのアクセス先:

- Web アプリ: `http://localhost:3000`
- バックエンド API: `http://localhost:8080/v1`
- Auth サービス: `http://localhost:8081`

## 設定

`.env.example` を `.env` にコピーし、必要に応じて次の項目を調整します。

- `DATABASE_URL` — Postgres の接続文字列
- `AUTH_MODE` — ローカル利用では `none`、メール OTP 認証を使う場合は `cognito`
- `BACKEND_ALLOWED_ORIGINS` — セッション認証付き API リクエストを許可するブラウザのオリジン
- `PUBLIC_API_BASE_URL` と `PUBLIC_AUTH_BASE_URL` — ディスカバリレスポンスで独自の公開ホストを案内したい場合に使う任意の上書き設定

## iOS のローカル設定

メインリポジトリの iOS アプリは、ローカルの API / auth ホスト設定を次のファイルから読み込みます。

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

必要であれば、サンプルファイルをコピーしてください。

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

そのうえで、ローカル環境またはセルフホスト環境の `api` / `auth` ドメインを指すように設定します。

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
- ルートドメインをほかに使わない場合は、任意で apex redirect を設定

詳しくは:

- [Repository README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Deployment guide](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/deployment.md)
- [AWS CDK infrastructure](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
