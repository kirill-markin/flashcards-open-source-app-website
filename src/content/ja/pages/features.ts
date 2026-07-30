import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Flashcards の機能",
  description:
    "FSRS による間隔反復、AI を使ったフラッシュカード作成、オフライン学習、エクスポート、セルフホストに対応した無料・オープンソースアプリです。",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "機能",
      intro:
        "役立つフラッシュカードの作成、最適なタイミングでの復習、オフライン学習、学習データの管理に必要な機能がそろっています。",
      items: [
        {
          title: "FSRS で賢く復習",
          description:
            "今日が期限のフラッシュカードを復習しましょう。FSRS は難しいフラッシュカードを早めに、覚えたフラッシュカードをより長い間隔で表示します。",
        },
        {
          title: "AI を使ったフラッシュカード作成",
          description:
            "AI にフラッシュカードの作成や文章の改善、答えの説明を手伝ってもらえます。保存する内容は自分で決められます。",
        },
        {
          title: "オフライン学習と自動同期",
          description:
            "インターネットがなくてもモバイル端末で復習できます。変更は自動で同期され、Web・iOS・Android のどこからでも続けられます。",
        },
        {
          title: "データをインポート・エクスポートして自分で管理",
          description:
            "学習素材はいつでも出し入れできます。持ち運べるエクスポートには、フラッシュカード、タグ、関連メディアが含まれます。",
        },
        {
          title: "AI エージェントと連携",
          description:
            "MCP または Agent API で接続すると、AI エージェントがフラッシュカードの作成、改善、整理を手伝えます。",
        },
        {
          title: "無料でセルフホスト可能",
          description:
            "ホスト版を無料で使う、オープンソースのコードを確認する、自分の環境で運用するという選択ができます。",
        },
      ],
    },
  ],
  body: "",
} as const;
