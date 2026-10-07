import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - 無料・オープンソースの間隔反復アプリ",
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
        "復習に最適なタイミングを知らせ、オフラインでも使え、Web・iOS・Android 間で同期できる、無料・オープンソースのフラッシュカードアプリです。フラッシュカードの作成や改善には、必要なときだけ AI を活用できます。Nibomo は以前 Flashcards Open Source App という名前でした。",
      trustLine:
        "クレジットカード不要。広告なし。トライアルのカウントダウンなし。",
      primaryLink: {
        label: "始める",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "GitHubで見る",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "または、この URL で MCP 対応の AI クライアントを接続できます:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Nibomoの使い方",
      items: [
        {
          label: "01 · AIフラッシュカード",
          titleLines: [
            "学びたいことをAIに伝えましょう。",
          ],
          description: "テーマを説明するか、ノートを添付してください。AIが教材を質問と答えのあるフラッシュカードにするお手伝いをします。",
          linkLabel: "フラッシュカードを作成",
          imagePath: "/home/ai-flashcards.png",
          imageAlt: "テーマや添付したノートからフラッシュカードを作成するNibomoのAIチャット",
        },
        {
          label: "02 · 学習を始める",
          titleLines: [
            "一問ずつ、着実に。",
          ],
          description: "フラッシュカードを開き、答えを表示する前に思い出してみましょう。一枚ずつ、自分のペースで学習できます。",
          linkLabel: "学習を始める",
          imagePath: "/home/start-learning.png",
          imageAlt: "答えを表示するボタンがあるNibomoの復習用フラッシュカード",
        },
        {
          label: "03 · スマートな復習",
          titleLines: [
            "答えを確認。",
            "思い出しやすさを評価。",
          ],
          description: "答えを表示し、どのくらい簡単に思い出せたかを選びましょう。Nibomoは難しいカードを早めに、覚えているカードを後で再び表示します。",
          linkLabel: "フラッシュカードを復習",
          imagePath: "/home/smart-reviews.png",
          imageAlt: "答えと思い出しやすさの評価ボタンが表示されたNibomoのフラッシュカード",
        },
        {
          label: "04 · 学習の進捗",
          titleLines: [
            "学習を習慣にしましょう。",
          ],
          description: "カレンダーで学習した日を確認し、連続学習を続けましょう。復習を重ねるたびに、目標に一歩近づきます。",
          linkLabel: "進捗を確認",
          imagePath: "/home/your-progress.png",
          imageAlt: "連続学習カレンダーとランキングがあるNibomoの進捗画面",
        }
      ],
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
            "インターネット接続がなくても、モバイル端末で復習を続けられます。変更は自動で同期されます。",
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
    {
      type: "review_cta",
      titleLines: [
        "復習の計画はNibomoにおまかせ。",
        "あなたは学習に集中しましょう。",
      ],
      description: "学んでいることをフラッシュカードにして、最適なタイミングで復習し、もっと覚えましょう。",
    },
  ],
  body: "",
} as const;
