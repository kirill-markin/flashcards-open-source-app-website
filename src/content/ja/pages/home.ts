import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - オープンソースの間隔反復アプリ",
  description:
    "間隔反復、AI チャット、エージェント向け導入フローに対応したオープンソースのフラッシュカードアプリです。カードを作り、理解を深め、忘れにくい学習を続けられます。",
  slug: "home",
  sections: [
    {
      type: "hero",
      titleLines: [
        "カードを作る。",
        "より深く学ぶ。",
        "忘れにくくする。",
      ],
      subtitle:
        "間隔反復、パスワードレス認証、AI チャット、エージェント向け導入フローを備えたオープンソースのフラッシュカードアプリです。今すぐ公開中の Web アプリを使い始められ、Claude Code、Codex、OpenClaw からも 1 つの URL で接続できます。Web、iOS、エージェントの各ワークフローを、同じバックエンド基盤で一貫して運用できます。",
      primaryLink: {
        label: "始める",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "GitHubで見る",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      hintText: "最初に、この URL へ GET リクエストを送ってください:",
      hintLink: {
        label: "https://api.flashcards-open-source-app.com/v1/",
        href: "https://api.flashcards-open-source-app.com/v1/",
      },
    },
    {
      type: "feature_list",
      title: "特長",
      intro:
        "必要な要素を無駄なくまとめたフラッシュカード基盤です。公開中の Web アプリ、リポジトリに含まれる iOS クライアント、外部エージェント向け API、そしてセルフホスティングに必要な基盤まで、一通りそろっています。",
      items: [
        {
          title: "間隔反復",
          description:
            "FSRS によるスケジューリングとシンプルな評価フローで、カードを無理なく復習できます。バックエンドと iOS クライアントで、スケジューラの挙動をそろえています。",
        },
        {
          title: "Web アプリと AI チャット",
          description:
            "ホスト版の Web アプリでカードを作成し、コレクションを管理し、復習期限が来た項目をこなしながら、ファイル添付に対応した AI チャットも使えます。",
        },
        {
          title: "パスワードレス認証",
          description:
            "Cognito のメール OTP と、auth / app のサブドメイン間で共有されるドメイン Cookie を使ったパスワードレス認証です。",
        },
        {
          title: "エージェント向けオンボーディング",
          description:
            "AI エージェントに接続用 URL を渡し、最新の 8 桁のメールコードを確認するだけで、ログイン、API キーの設定、アカウント情報の取得、ワークスペースの選択、公開された SQL インターフェースの利用開始まで進められます。",
        },
        {
          title: "セルフホスティング対応",
          description:
            "Postgres をローカルで動かし、認証サービス、バックエンド、Web を個別に起動しながら、AWS へのデプロイ経路も自分で管理できます。",
        },
        {
          title: "オフラインファーストのクライアント",
          description:
            "リポジトリには、ローカル SQLite と同期機能を備えた iOS アプリがすでに含まれており、Android アプリも Google Play で公開されています。",
        },
      ],
    },
  ],
  body: "",
} as const;
