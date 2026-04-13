import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "料金",
  description:
    "セルフホストは無料。ホスト型クラウドベータもベータ期間中は無料です。オープンソースで、プランによる機能制限はありません。",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "料金",
      intro: "どのプランでも全機能を利用できます。プランによる機能制限はありません。",
      tiers: [
        {
          type: "link_tier",
          name: "セルフホスト",
          price: "無料",
          highlighted: false,
          bullets: [
            "完全なソースコードを GitHub で公開",
            "ローカルの Postgres、認証、バックエンド、Web をまとめた構成",
            "現在提供している全機能を利用可能",
            "ドメイン、データ、デプロイ先を自分で管理",
            "自分の学習フローに合わせて構成を調整可能",
          ],
          cta: {
            label: "GitHubで見る",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
        {
          type: "auth_tier",
          name: "クラウドベータ",
          price: "ベータ期間中は無料",
          highlighted: true,
          bullets: [
            "プロジェクトのドメインで提供されるホスト型 Web アプリ",
            "メール OTP 認証",
            "共有ドメインを使ったブラウザーログインフロー",
            "AWS 上で管理されるインフラ",
            "進化中のプロダクトを早い段階から利用可能",
          ],
          cta: {
            label: "始める",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
