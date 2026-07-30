import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "利用無料。セルフホストも無料。",
  description:
    "ベータ期間中は AI と同期を含むホスト型アプリを無料で利用できます。オープンソースのスタックを自分の AWS インフラでセルフホストすることもできます。",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "利用無料。セルフホストも無料。",
      intro:
        "クレジットカード不要でホスト型アプリを無料利用するか、オープンソースのスタックを自分の AWS インフラで運用できます。",
      tiers: [
        {
          type: "link_tier",
          name: "セルフホスト",
          price: "無料",
          highlighted: false,
          bullets: [
            "アプリケーションと AWS CDK インフラはオープンソース",
            "AWS への完全なデプロイ手順と、Docker/Postgres を使うローカル開発環境",
            "インフラと、メール・監視・AI の認証情報は運用者が用意して管理",
            "インフラと外部プロバイダーの費用は運用者が負担",
            "ホスト型とセルフホスト環境の間でカード、タグ、メディアをインポート・エクスポート",
          ],
          cta: {
            label: "GitHub からセルフホスト",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
        {
          type: "auth_tier",
          name: "ホスト型",
          price: "無料",
          highlighted: true,
          bullets: [
            "ベータ期間中は AI 機能を利用可能",
            "Web、iOS、Android 間の同期を利用可能",
            "ベータ期間中はカード数、ファイル数、総ストレージ容量にプラン別の上限なし（ファイル単位・操作単位の通常の技術的制限は適用）",
            "ホスト型とセルフホスト環境の間でカード、タグ、メディアをインポート・エクスポート",
            "メールのワンタイムコードでパスワードなしでサインイン",
            "基本的なカード作成・復習機能は今後も無料。AI の利用量が多い場合は、将来自分のプロバイダー API キーまたは有料オプションが必要になる可能性があります",
          ],
          cta: {
            label: "ホスト型アプリを無料で使う",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
