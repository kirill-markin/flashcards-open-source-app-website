import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - オープンソースの間隔反復フラッシュカード",
  description:
    "間隔反復、AIチャット、エージェント向けオンボーディングに対応したオープンソースのフラッシュカードアプリで、カードを作成し、学びを深め、忘れにくい学習を続けられます。",
  slug: "home",
  sections: [
    {
      type: "hero",
      titleLines: [
        "カードを作る。",
        "学びを深める。",
        "忘れにくくする。",
      ],
      subtitle:
        "間隔反復、パスワードレス認証、AIチャット、エージェント対応のオンボーディングを備えたオープンソースのフラッシュカードアプリです。すぐにホスト版の Web アプリを使い始められ、Claude Code、Codex、OpenClaw も 1 つの discovery URL から接続できます。Web、iOS、エージェントの各ワークフローを、同じバックエンドモデルのまま運用できます。",
      primaryLink: {
        label: "始める",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "GitHubで見る",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      hintText: "まずはこの discovery URL に GET リクエストを送ってください:",
      hintLink: {
        label: "https://api.flashcards-open-source-app.com/v1/",
        href: "https://api.flashcards-open-source-app.com/v1/",
      },
    },
    {
      type: "feature_list",
      title: "機能",
      intro:
        "必要な機能に絞ったフラッシュカード基盤です。ホスト版の Web アプリ、リポジトリに含まれる iOS クライアント、外部エージェント向け API、そしてセルフホスティングに必要な基盤までそろっています。",
      items: [
        {
          title: "間隔反復",
          description:
            "FSRS スケジューリングとシンプルな評価フローでカードを復習できます。バックエンドと iOS クライアントで、スケジューラの挙動を一貫させています。",
        },
        {
          title: "WebアプリとAIチャット",
          description:
            "ホスト版の Web アプリでカードを作成し、コレクションを見渡し、復習期限の来た項目をこなしながら、ファイル添付対応の AI チャットも使えます。",
        },
        {
          title: "パスワードレス認証",
          description:
            "Cognito によるメール OTP と、auth / app サブドメイン間で共有されるドメイン Cookie を利用します。",
        },
        {
          title: "エージェント向けオンボーディング",
          description:
            "AI エージェントに discovery URL を渡し、最新の 8 桁のメールコードを確認するだけで、ログイン、API キー設定、アカウント読み込み、ワークスペース選択、SQL discovery まで進められます。",
        },
        {
          title: "セルフホスト対応",
          description:
            "Postgres をローカルで動かし、auth、backend、web を個別に起動しながら、AWS へのデプロイ経路も自分で管理できます。",
        },
        {
          title: "オフラインファーストのクライアント",
          description:
            "リポジトリには、ローカル SQLite と同期機能を備えた iOS アプリがすでに含まれており、Android アプリも Google Play で利用できます。",
        },
      ],
    },
  ],
  body: "",
} as const;
