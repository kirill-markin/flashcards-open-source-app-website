---
title: セルフホスティングガイド
description: PostgreSQL、認証、バックエンド、Web、管理の各サービスを使ってFlashcardsをローカルで動かす方法と、文書化されたAWS CDK本番スタックをデプロイする方法を説明します。
---

Flashcardsでは、ローカル開発環境とAWS上の本番環境という2つの異なる運用方法をサポートしています。Docker Composeは、ローカル開発用のPostgreSQLとマイグレーションを実行するためのものであり、本番環境のデプロイ方法ではありません。

## ローカル開発の要件

- Git
- Bash
- GNU Make
- Docker Compose対応のDocker
- Node.js 24
- npm

付属のDocker Composeファイルでは、現在PostgreSQL 18.4が動作します。PostgreSQLをローカルに別途インストールする必要はありません。

## ローカルでのクイックスタート

```bash
git clone https://github.com/kirill-markin/flashcards-open-source-app.git
cd flashcards-open-source-app
cp .env.example .env
make db-up
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
npm install --prefix apps/admin
```

`make db-up`はPostgreSQLを起動し、マイグレーションコンテナから`scripts/deploy/migrate.sh`を実行します。`.env.example`からコピーしたデフォルトパスワードを使用すると、マイグレーションによって次のローカル実行用接続が作成されます。

- バックエンド: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- 認証: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- レポート: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

`.env`の`BACKEND_DB_PASSWORD`、`AUTH_DB_PASSWORD`、`REPORTING_DB_PASSWORD`を変更した場合は、対応する接続URLにも同じ変更後のパスワードを使用してください。

### ローカルだけで素早く起動する

バックエンドのMakeターゲットは、ルートの`.env`を読み込みません。必要なローカル設定を明示的に渡します。

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

クライアントを別々のターミナルで実行します。

```bash
make web-dev
make admin-dev
```

この手順では、意図的に`make auth-dev`を起動しません。`AUTH_MODE=none`は明示的に安全でないlocalhost専用モードです。デプロイ済みの環境では絶対に使用しないでください。
この構成では、中核バックエンド、公開Agent APIのディスカバリー、Web、管理の各開発環境を利用できますが、Chat V2は利用できません。

### 完全なローカルCognitoフロー

認証ターゲットはルートの`.env`を読み込みますが、バックエンドターゲットは読み込みません。最初に、コピーした`.env`内の古い`DATABASE_URL`を認証ロールのURLへ置き換え、実際のCognito値を追加します。

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

認証サービスを起動します。

```bash
make auth-dev
```

バックエンド用ターミナルでは、`.env`を明示的に読み込んでから、そのプロセスの認証データベースURLをバックエンドロールのURLで上書きします。

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

`make web-dev`と`make admin-dev`は、それぞれ別のターミナルで実行します。どちらのターゲットもルートの`.env`を読み込みます。

各サービスは次のローカルアドレスを使用します。

| サービス | アドレス |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| 認証（設定済みの場合） | `http://localhost:8081` |
| Backend API | `http://localhost:8080/v1` |
| Webアプリ | `http://localhost:3000` |
| 管理アプリ | `http://localhost:3001` |

PostgreSQLとマイグレーションコンテナを停止するには、次を実行します。

```bash
make db-down
```

## ローカル設定

`.env.example`から始めてください。利用できる変数と、ローカル専用の値が記載されています。上記の手順どおり、認証サービスを起動する前に古い`DATABASE_URL`を置き換えます。

主なローカル設定は次のとおりです。

- Docker内でのスキーママイグレーションに使う`MIGRATION_DATABASE_URL`
- `make auth-dev`用に、ルートの`.env`で`DATABASE_URL`を`auth_app`ロールに設定
- `make backend-dev`へ`backend_app`ロールの`DATABASE_URL`を渡す
- バックエンド認証用の`AUTH_MODE`と`ALLOW_INSECURE_LOCAL_AUTH`
- ローカルのWeb、管理オリジン用の`BACKEND_ALLOWED_ORIGINS`
- ブラウザー認証用の`ALLOWED_REDIRECT_URIS`と`COOKIE_DOMAIN`
- 実際のOTPをテストするときのCognito値とセッション暗号化値

Agent APIはバックエンドの一部です。バックエンド起動後、公開ローカルディスカバリードキュメントを`http://localhost:8080/v1/agent`で確認できます。保護されたAgent操作には`ApiKey`認証が必要で、`AUTH_MODE=none`の構成では利用できません。

### 実行方法ごとのAIの範囲

上記のローカルコマンドでは、非同期チャットワーカーは起動しません。素早く起動する構成では、Chat V2が拒否する`AUTH_MODE=none`も使用します。OpenAIキーやゲスト用クォータを追加しても、この構成でAIが利用可能になるわけではありません。完全なローカルCognitoフローでは、サポート対象の認証方式を利用できますが、それでもワーカーは起動しません。

AWS CDKデプロイではワーカーLambdaを作成し、バックエンドから呼び出すよう設定します。`OPENAI_API_KEY`などのプロバイダー認証情報を設定すると、サポート対象の認証済みリクエストでモデルを呼び出せます。`GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP`は、ゲストのAI利用だけを別に有効化して制限します。サインイン済み、またはBearer認証済みのAIを制御するものではありません。Langfuse設定は任意のトレース設定です。

## ネイティブクライアント

同じリポジトリにiOSクライアントとAndroidクライアントが含まれていますが、ローカルのWeb／サーバーコマンドではビルドも配布も行いません。

iOSプロジェクトは、ローカルのAPIホストと認証ホストを次のファイルから読み込みます。

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

必要に応じて、サンプルから作成します。

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

個別のビルド、テスト手順については、リポジトリの[iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md)と[Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md)を参照してください。

## 本番環境ではAWS CDKを使用

サポートされている本番環境のデプロイ方法は、付属のAWS CDKスタックです。ベンダー中立ではなくAWSを前提としており、次のものが含まれます。

- VPCとプライベートサブネット
- Amazon RDS上のPostgreSQL 18
- Amazon CognitoによるパスワードレスのメールOTP
- バックエンド、認証、MCPの各サービス用API GatewayとLambda
- 非同期チャットワーカーLambdaとCognitoカスタムメール送信Lambda
- Webアプリと管理アプリ用のS3とCloudFront
- データベース、セッション、メール、監視、任意のAI認証情報用Secrets Manager
- CloudWatchアラーム、SNS通知、RDSバックアッププラン
- GitHub Actions用OIDCデプロイロール
- 公開ドメイン用のCloudflare設定スクリプト

デプロイによって`app.<domain>`、`admin.<domain>`、`api.<domain>`、`auth.<domain>`、`mcp.<domain>`が公開されます。ルートドメインをほかで使用していない場合は、apexリダイレクトも作成できます。

本番用ヘルパーは、次のものが用意された運用者のマシンで実行します。

- Node.js 24とnpm
- BashとGNU Make
- 実行中のDocker
- デプロイ先アカウントで認証済みのAWS CLI
- 対象リポジトリで認証済みのGitHub CLI
- `curl`、`jq`、Python 3

デプロイ前に、ルートの`.env`へ運用者用の値を設定します。必須項目には、AWSリージョン、ドメイン、アラート送信先メール、GitHubリポジトリ、Cloudflare認証情報、Resend認証情報、バックエンドのSentry設定が含まれます。OpenAIとLangfuseの認証情報は任意です。

リポジトリのルートから初回デプロイするときは、次のコマンドを推奨します。

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

クリーンなクローンでは、現在、認証パッケージを明示的にインストールする必要があります。デプロイ用ヘルパーはこのパッケージをバンドルしますが、インストールはしないためです。ヘルパーは実際のAWS、Cloudflare、GitHubリソースを作成または変更します。実行する前に、リポジトリのデプロイドキュメントとクラウド費用を確認してください。CDKをブートストラップし、インフラをデプロイし、マイグレーションを実行し、Webと管理のアセットをアップロードします。また、スキップしない限り、公開用の`app`、`admin`、`api`、`auth`、`mcp` DNSレコードを設定し、不足しているGitHub Actions設定を追加します。

デプロイ後に、次を行います。

1. `ALERT_EMAIL`の受信トレイに届いたSNS購読を確認します。
2. Resendの送信用ドメインに必要な別のDNSレコードを設定し、検証します。

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh`は、デフォルトで公開アプリケーションドメイン用の`scripts/cloudflare/setup-dns.sh`を実行します。`setup-resend-domain.sh`は実行しません。後者は`mail.<domain>`用のメール送信者レコードを作成し、そのドメインをResendで検証します。`--skip-dns`を付けてデプロイした場合は、AWS CDKガイドの手順に従って公開レコードを別に設定してください。

## データのポータビリティ

ワークスペースパッケージのインポート、エクスポートで移行できるのは、カード、そのタグ、関連メディアだけです。復習履歴、FSRSスケジューラーの状態、ワークスペース設定、完全なデッキ構造、アカウントデータは移行されません。

パッケージはコンテンツ移行用であり、ホスト版からセルフホスト版への完全な移行や災害復旧用バックアップではありません。デプロイ済みのPostgreSQLデータベースとメディアストレージのバックアップと復元は、運用者の責任です。

## 運用者の責任

セルフホストでは、次のものを自分で用意し、保守します。

- AWSインフラとその費用
- CloudflareのDNSとドメイン設定
- Resendのメール配信用認証情報とドメインレコード
- 必須のSentry監視設定
- 任意のAIプロバイダー認証情報とLangfuse認証情報
- シークレット、アップグレード、マイグレーション、アラート、バックアップ、復旧テスト
- 独自のiOS版やAndroid版が必要な場合のネイティブモバイルアプリのビルドと配布

スタックにはこれらの多くを自動化する仕組みが含まれますが、それでも運用者は必要です。Docker Composeがこの本番アーキテクチャの代わりになるわけではありません。

## リポジトリのデプロイドキュメント

- [リポジトリREADME](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [バックエンドとWebのデプロイガイド](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDKデプロイガイド](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDKインフラ](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
