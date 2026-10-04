import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "無料で始める。AI をもっと使うなら Premium。",
  description:
    "ホスト型アプリを無料で使い始め、月額 USD 6.99 の Premium にアップグレードして AI チャットをもっと使うか、オープンソースのスタックを自分の AWS インフラでセルフホストできます。",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "無料で始める。AI をもっと使うなら Premium。",
      intro:
        "クレジットカード不要でホスト型アプリを無料で使い始め、Premium を追加して AI チャットをもっと使うか、オープンソースのスタックを自分の AWS インフラで無料でセルフホストできます。",
      tiers: [
        {
          type: "auth_tier",
          name: "無料",
          price: "無料",
          highlighted: true,
          bullets: [
            "毎月50件の AI チャットメッセージ",
            "自分の OpenAI API キーを利用可能。その利用分は月間上限にカウントされません",
            "Web、iOS、Android 間の同期を利用可能",
            "カード数、ファイル数、総ストレージ容量にプラン別の上限なし（ファイル単位・操作単位の通常の技術的制限は適用）",
            "ホスト型とセルフホスト環境の間でカード、タグ、メディアをインポート・エクスポート",
            "メールのワンタイムコードでパスワードなしでサインイン",
          ],
          cta: {
            label: "ホスト型アプリを無料で使う",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/月",
          highlighted: false,
          bullets: [
            "対象となる新規登録者は7日間の無料トライアルを利用可能（支払い方法の登録が必要）",
            "毎月1000件の AI チャットメッセージ",
            "カスタムアクセントカラー",
            "無料プランのすべての機能",
            "1つのサブスクリプションで、Web、iOS、Android のアカウントに対応",
            "USD 建ての税込み価格。決済画面では現地通貨で価格が表示される場合があります",
            "毎月更新。いつでも解約でき、期間終了まで引き続き利用可能",
          ],
          cta: {
            label: "7日間の無料トライアルを開始",
            href: "https://app.nibomo.com",
          },
        },
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
      ],
    },
  ],
  body: "",
} as const;
