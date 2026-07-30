---
title: "間隔反復に対応したセルフホスト可能なオープンソースのFlashcardsアプリ"
description: "オープンソースのFlashcardsスタックを開発用にローカルでセルフホストするか、文書化されたAWS CDKインフラをデプロイして本番用の間隔反復アプリを運用できます。"
date: "2026-03-08"
updated: "2026-07-30"
image: "/home/app-screens-showcase-ja.png"
keywords:
  - "オープンソース フラッシュカード アプリ"
  - "セルフホスト フラッシュカード アプリ"
  - "間隔反復 アプリ"
  - "Anki 代替"
  - "Quizlet 代替"
  - "AI フラッシュカード"
---

Flashcardsはセルフホストできます。アプリケーションとインフラの全コードがMITライセンスでオープンソースとして公開されています。開発用に各サービスをローカルで動かすことも、リポジトリで文書化された本番スタックをAWSへデプロイすることもできます。インフラを自分で運用したくない場合は、引き続き[ホスト版アプリ](https://app.flashcards-open-source-app.com/)を利用できます。

![復習、進捗、AIチャット、カードを表示したオープンソースFlashcardsアプリのモバイル画面](/home/app-screens-showcase-ja.png)

## セルフホストできるもの

リポジトリには、Flashcardsの中核システムで使われるサービスとインフラが含まれています。

- Webアプリと管理アプリ
- バックエンドAPIとパスワードレス認証サービス
- PostgreSQLのスキーマ、マイグレーション、同期、FSRSベースの復習スケジューリング
- MCPサーバーと機械向けのAgent API
- ネットワーク、データベース、認証、API、静的Webホスティング、シークレット、バックアップ、監視、CI/CDに対応するAWS CDKスタック

ネイティブのiOSクライアントとAndroidクライアントも含まれています。これらは別個にビルドするアプリであり、AWSスタックをデプロイしても、独自のApp Store版やGoogle Play版が自動で公開されるわけではありません。

サーバー側のスタックを動かす方法は、次の2つがサポートされています。

1. **ローカル開発:** Docker ComposeでPostgreSQLとマイグレーションジョブを実行します。認証、バックエンド、Web、管理の各開発サーバーは、リポジトリのスクリプトを使ってホスト上で実行します。
2. **AWS上の本番環境:** 付属のCDKスタックで、文書化されたAWSアーキテクチャをデプロイし、公開ドメインをCloudflare経由で接続します。

Docker Composeは、本番環境を1コマンドでデプロイする仕組みではありません。本番用の手順はAWS固有であり、ベンダー中立なインフラを提供しているという位置づけでもありません。

## 現在のリポジトリに含まれるもの

これは単体のフラッシュカードエディターにとどまりません。現在のリポジトリには、次のものが含まれています。

- React製のWebクライアントと管理クライアント
- SwiftUI製のネイティブiOSクライアントとJetpack Compose製のネイティブAndroidクライアント
- ユーザー向けクライアントのオフラインファーストなローカルストレージと同期
- 表裏のあるカード、タグ、関連メディア、FSRSによる復習
- Amazon Cognitoと認証サービスによるパスワードレスのメールOTP
- デプロイ済みの非同期ワーカーと運用者が用意するモデル認証情報を使うAIチャット
- 対応するAIクライアント向けのMCPエンドポイント
- ターミナルツールなどの自動ワークフロー向けAgent API

現在のサービス境界を確認するには、[アーキテクチャドキュメント](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/architecture.md)が最適です。公開されている[APIガイド](/docs/api/)では、ホスト版Agent APIのエントリーポイントを説明しています。

## ホスト版とセルフホスト版の比較

| 項目 | ホスト版アプリ | セルフホスト環境 |
| --- | --- | --- |
| 初期設定 | アプリを開いてサインイン | アカウント、シークレット、ドメインを設定し、AWSスタックをデプロイ |
| インフラ | Flashcardsプロジェクトが運用 | 自分のAWSアカウントとCloudflareアカウントで運用 |
| データベースとバックアップ | 管理済み | RDS、バックアップ方針、マイグレーション、復旧は自分で管理 |
| 認証とメール | 管理済み | Cognitoに加えて、自分のメール配信用認証情報とDNSが必要 |
| AI | ホスト版サービスの設定を使用 | デプロイしたワーカーと自分のモデル認証情報を使用。ゲストアクセスには別枠のクォータあり |
| 監視 | 管理済み | CloudWatch/SNSと自分のSentry設定 |
| アップデート | ホスト版サービスから提供 | 自分で取得、検証、デプロイ、監視 |
| 費用 | ホスト版プランの条件が適用 | AWSなど各プロバイダーの費用を直接負担 |

セルフホストでは、デプロイ環境とデータベースを自分で管理できます。その一方で、セキュリティアップデート、シークレット、可用性、バックアップ、メール配信、監視、クラウド費用も自分の責任になります。

## 必要なものとローカルでのクイックスタート

現在、ローカル開発にはGit、Bash、GNU Make、Docker Compose対応のDocker、Node.js 24、npmが必要です。付属のComposeファイルでPostgreSQL 18.4を起動し、データベースマイグレーションを適用します。

リポジトリのルートで次を実行します。

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

ローカルだけで最短起動するには、マイグレーションで作成されたロールを使ってバックエンドを起動し、安全でないローカル認証を明示的に有効にします。

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

続いて、クライアントを別々のターミナルで実行します。

```bash
make web-dev
make admin-dev
```

この手順では、意図的にCognito認証サービスを起動しません。`make auth-dev`を使った完全なCognitoフローに必要なデータベースURLの使い分けと環境変数の読み込み手順は、[セルフホスティングガイド](/docs/self-hosting/)に記載されています。Webアプリは`http://localhost:3000`、管理アプリは`http://localhost:3001`、バックエンドは`http://localhost:8080/v1`、設定済みのCognito認証は`http://localhost:8081`で動作します。

このクイックスタートで利用できるのは、中核となるバックエンド、Web、管理の開発環境です。Chat V2は利用できません。これらのルートは`AUTH_MODE=none`による認証を受け付けず、ローカルコマンドでは非同期チャットワーカーも起動しないためです。

本番環境ではDocker Composeではなく、リポジトリの初回デプロイ手順を使用します。

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

クリーンなクローンでは、現在、認証パッケージを明示的にインストールする必要があります。デプロイ用ヘルパーはこのパッケージをバンドルしますが、インストールはしないためです。その後、ヘルパーは実際のクラウドリソースを作成、更新します。実行する前に、[バックエンドとWebのデプロイガイド](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)と[AWS CDKデプロイガイド](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)を確認してください。

## データのポータビリティは便利だが、意図的に限定されている

Flashcardsのパッケージでインポート、エクスポートできるのは、カード、そのタグ、関連メディアです。**復習履歴、FSRSスケジューラーの状態、ワークスペース設定、完全なデッキ構造、アカウントデータ**は移行されません。

ホスト版サービスと独自環境の間を移行する場合は、この違いが重要です。ポータブルパッケージはコンテンツを移すための仕組みであり、データベースやアカウントを完全に移行するものではありません。運用環境を完全にバックアップするには、セルフホストの運用者がAWSスタックによって作成されたPostgreSQLデータベースとメディアストレージも管理する必要があります。

## AIと外部サービスの認証情報

ソースコードには、クラウドアカウント、モデルの利用枠、本番用の認証情報は含まれていません。セルフホストの運用者は、必要な設定を自分で用意します。

- CDKスタック用のAWSアカウントとAWS認証情報
- 文書化されたDNS設定に使うドメインとCloudflare認証情報
- メール配信用のResend認証情報
- 必須のバックエンド監視用Sentry設定
- AIとトレース用の任意のOpenAI認証情報とLangfuse認証情報
- 付属のデプロイワークフロー用GitHub設定

AWS環境ではAIは任意です。CDKスタックは非同期チャットワーカーをデプロイし、モデル認証情報を設定すると、サポート対象の認証済みAIリクエストを処理できます。`GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP`はゲストのAI利用だけを別に制御します。サインイン済み、またはBearer認証済みのAIを一括で切り替える設定ではありません。MCPなどの外部AIクライアントを接続すると、リクエストに含まれるカードデータが、その外部プロバイダーの規約に従って処理される場合があります。データベースをセルフホストしても、そのリクエストまで自分のインフラ内にとどまるわけではありません。

## ベータ版と運用上の制約

Flashcardsはまだ初期段階の製品です。リポジトリは活発に更新されており、マイグレーションやデプロイ設定は変更される可能性があります。セルフホストするには、AWSアプリケーションの運用に対応できることが前提です。

CDKスタックにはバックアップ、アラーム、シークレット、デプロイ自動化が含まれますが、それでも運用者が必要です。次の作業を想定してください。

- デプロイ前にインフラ変更を確認する
- リリースと公開エンドポイントのチェックを監視する
- アラート購読とメールドメインのDNSを確認する
- 認証情報を保護し、ローテーションする
- 復旧をテストし、AWS費用を計画する
- 独自のリリースが必要なら、ネイティブモバイルアプリを別にビルドして配布する

この運用作業が必要でないなら、ホスト版アプリのほうがシンプルです。

## Anki、Quizletとの簡単な比較

Ankiは、大きなエコシステムと強力なデスクトップワークフローを持つ、成熟したオープンソースの選択肢です。Quizletは、少ない設定ですぐ学習できるマネージド型の一般向けサービスです。実績のあるローカルツールと完全に管理されたプラットフォームのどちらを重視するかによって、いずれも適切な選択肢になり得ます。

Flashcardsは別の道を選んでいます。FSRS、同期、AIワークフロー、MCP、AWSでのセルフホストを軸に、Web、モバイル、API、インフラを公開するリポジトリです。Ankiより新しく、セルフホスト時の運用作業はQuizletよりはるかに多くなります。選ぶ理由は、この組み合わせが自分の要件に合うからであって、すべての学習者がクラウドスタックを運用すべきだからではありません。

## ホスト版を試すか、自分のスタックを動かす

- [ホスト版アプリを開く](https://app.flashcards-open-source-app.com/)
- [セルフホスティングガイドを読む](/docs/self-hosting/)
- [GitHubでソースを見る](https://github.com/kirill-markin/flashcards-open-source-app)

インフラを保守せずに学習したい場合はホスト版を使ってください。デプロイ環境を管理できる利点が、AWS、DNS、メール、監視、更新の運用負担に見合う場合はセルフホストを選んでください。
