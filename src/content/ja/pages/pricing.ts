import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "料金",
  description:
    "無料の self-hosting か、ホスト版 cloud beta。オープンソースで、機能制限はありません。",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "料金",
      intro: "すべてのプランで全機能を利用できます。機能制限はありません。",
      tiers: [
        {
          type: "link_tier",
          name: "Self-Hosted",
          price: "無料",
          highlighted: false,
          bullets: [
            "GitHub 上の完全なソースコード",
            "ローカル Postgres + auth + backend + web stack",
            "現在の全機能を利用可能",
            "あなたのドメイン、あなたのデータ、あなたのデプロイ",
            "自分の学習フローに合わせて stack を変更可能",
          ],
          cta: {
            label: "GitHubで見る",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
        {
          type: "auth_tier",
          name: "Cloud Beta",
          price: "ベータ期間中は無料",
          highlighted: true,
          bullets: [
            "プロジェクトドメイン上のホスト版Webアプリ",
            "メール OTP 認証",
            "shared-domain browser login flow",
            "管理された AWS インフラ",
            "製品進化中の early access",
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
