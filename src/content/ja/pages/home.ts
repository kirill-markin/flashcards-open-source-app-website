import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - 無料・オープンソースの間隔反復アプリ",
  description:
    "FSRS による間隔反復、AI を使ったフラッシュカード作成、オフライン学習と同期、エクスポート、セルフホストに対応した無料・オープンソースアプリです。",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "無料・オープンソース",
      titleLines: [
        "カードを作る。",
        "賢く復習する。",
        "もっと覚える。",
      ],
      subtitle:
        "復習に最適なタイミングを知らせ、オフラインでも使え、Web・iOS・Android 間で同期できる、無料・オープンソースのフラッシュカードアプリです。フラッシュカードの作成や改善には、必要なときだけ AI を活用できます。",
      trustLine:
        "クレジットカード不要。広告なし。トライアルのカウントダウンなし。",
      primaryLink: {
        label: "始める",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "GitHubで見る",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "この MCP サーバーを AI クライアントに追加してください:",
          link: {
            label: "https://mcp.flashcards-open-source-app.com/mcp",
            href: "https://mcp.flashcards-open-source-app.com/mcp",
          },
        },
      ],
    },
    {
      type: "public_activity",
    },
    {
      type: "feature_list",
      title: "特長",
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
