import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - オープンソースの間隔反復",
  description:
    "間隔反復、AIチャット、エージェント向けオンボーディングに対応したオープンソースのフラッシュカードアプリで、カードを作り、より多く学び、より少なく忘れましょう。",
  slug: "home",
  sections: [
    {
      type: "hero",
      titleLines: [
        "カードを作る。",
        "もっと学ぶ。",
        "忘れにくくする。",
      ],
      subtitle:
        "間隔反復、パスワードレス認証、AIチャット、そしてエージェント向けオンボーディングを備えたオープンソースのフラッシュカードアプリです。今日からホスト版Webアプリを使い、Claude Code、Codex、OpenClaw を1つの discovery URL で接続し、Web、iOS、エージェントのワークフローを同じバックエンドモデルで保てます。",
      primaryLink: {
        label: "始める",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "GitHubで見る",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      hintText: "まずはこの discovery URL に GET してください:",
      hintLink: {
        label: "https://api.flashcards-open-source-app.com/v1/",
        href: "https://api.flashcards-open-source-app.com/v1/",
      },
    },
    {
      type: "feature_list",
      title: "機能",
      intro:
        "必要なものに絞ったフラッシュカード構成です。ホスト版Webアプリ、リポジトリ内のiOSクライアント、外部エージェントAPI、そして self-hosting 用の基盤がそろっています。",
      items: [
        {
          title: "間隔反復",
          description:
            "FSRS スケジューリングとシンプルな評価フローでカードを復習できます。バックエンドと iOS クライアントでスケジューラの動作を揃えています。",
        },
        {
          title: "WebアプリとAIチャット",
          description:
            "ホスト版Webアプリでカードを作成し、コレクションを閲覧し、期限の来た項目を復習し、ファイル添付付きの AI チャットを使えます。",
        },
        {
          title: "パスワードレス認証",
          description:
            "Cognito を使ったメール OTP と、auth / app サブドメイン間で共有されるドメインCookieを利用します。",
        },
        {
          title: "エージェント向けオンボーディング",
          description:
            "AI エージェントに discovery URL を渡し、最新の8桁メールコードを確認するだけで、ログイン、APIキー設定、アカウント読み込み、ワークスペース選択、SQL discovery まで完了させられます。",
        },
        {
          title: "Self-Hosted",
          description:
            "Postgres をローカルで動かし、auth、backend、web を個別に起動して、AWS へのデプロイ経路も自分で管理できます。",
        },
        {
          title: "Offline-First Clients",
          description:
            "リポジトリにはすでにローカル SQLite と sync を備えた iOS アプリが含まれており、Android アプリも Google Play で利用できます。",
        },
      ],
    },
  ],
  body: "",
} as const;
