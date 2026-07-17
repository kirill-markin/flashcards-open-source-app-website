import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "料金",
  description:
    "ホスト型アプリと、カードの作成・復習を含む基本体験は無料です。無料のオープンソースソフトウェアをセルフホストすることもできます。",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "料金",
      intro:
        "ホスト型アプリと、カードを作成・復習する基本機能は無料です。",
      tiers: [
        {
          type: "link_tier",
          name: "セルフホスト",
          price: "無料",
          highlighted: false,
          bullets: [
            "無料のオープンソースソフトウェア",
            "完全なソースコードを GitHub で公開",
            "現在提供しているすべての基本機能を利用可能",
            "ドメイン、データ、デプロイ先を自分で管理",
            "インフラ費用は利用者が負担",
          ],
          cta: {
            label: "GitHubで見る",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
        {
          type: "auth_tier",
          name: "ホスト型",
          price: "無料",
          highlighted: true,
          bullets: [
            "管理されたインフラで提供するホスト型 Web アプリ",
            "現在の基本的なカード作成・復習機能を含む",
            "クレジットカード不要、トライアル期限のカウントダウンなし",
            "メールのワンタイムコードによる認証",
            "サービスは現在ベータ版で、ベストエフォートで提供",
            "将来、任意の有料機能を追加する場合がありますが、基本的なカード作成・復習機能は無料のままです",
          ],
          cta: {
            label: "無料で学習を始める",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
