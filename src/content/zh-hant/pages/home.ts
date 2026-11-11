import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo｜免費開源的間隔重複閃卡應用程式",
  description:
    "免費開源的閃卡應用程式，支援 FSRS 間隔重複、AI 輔助製作閃卡、離線學習與同步、主畫面小工具和自行架設。",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "免費開源",
      titleLines: [
        "製作閃卡",
        "更有效地複習",
        "記住更多",
      ],
      subtitle:
        "免費閃卡應用程式，在適當的時間安排每次複習，可離線使用，並在網頁版、iOS 和 Android 之間同步。",
      trustLine: "免信用卡、無廣告、無試用期限。",
      primaryLink: {
        label: "開始使用",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "前往 GitHub 查看",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "也可以用這個網址連接任何支援 MCP 的 AI 用戶端",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "如何使用 Nibomo",
      items: [
        {
          label: "01 / 製作閃卡",
          titleLines: ["把正在學的內容做成閃卡"],
          description:
            "附上筆記或描述主題，請 AI 幫你整理成問答，再選擇要儲存的閃卡。",
          linkLabel: "製作閃卡",
          imagePath: "/home/ai-flashcards.png",
          imageAlt: "Nibomo 的 AI 聊天功能根據主題或附上的筆記製作閃卡",
        },
        {
          label: "02 / 先想一想",
          titleLines: ["翻卡前先試著回想"],
          description:
            "一次看一個問題，先試著回想。查看答案後，再為回想的難易程度評分。",
          linkLabel: "開始學習",
          imagePath: "/home/start-learning.png",
          imageAlt: "Nibomo 的複習閃卡和「顯示答案」按鈕",
        },
        {
          label: "03 / 加深印象",
          titleLines: ["在適當的時間回來複習"],
          description:
            "你的評分會影響下次複習的時間。較難的閃卡會提早出現，熟悉的閃卡則會隔久一點再出現。",
          linkLabel: "複習閃卡",
          imagePath: "/home/smart-reviews.png",
          imageAlt: "Nibomo 閃卡顯示答案，以及「重來」、「困難」、「良好」和「簡單」四個複習評分選項",
        },
        {
          label: "04 · 學習進度",
          titleLines: ["把學習變成習慣"],
          description:
            "在行事曆上查看學習紀錄，維持連續學習。每次複習都能讓你更接近目標。",
          linkLabel: "查看學習進度",
          imagePath: "/home/your-progress.png",
          imageAlt: "Nibomo 的進度畫面顯示連續學習行事曆和評分排行榜",
        },
      ],
    },
    {
      type: "feature_list",
      title: "主要功能",
      intro:
        "製作實用的閃卡、在適當的時間複習、離線繼續學習，並自行掌握學習資料。",
      items: [
        {
          title: "用 FSRS 更有效地複習",
          description:
            "複習今天到期的閃卡。FSRS 會讓較難的閃卡提早出現，並延長熟悉閃卡的複習間隔。",
        },
        {
          title: "讓 AI 幫你打草稿",
          description:
            "把筆記整理成閃卡草稿，儲存前可以逐張修改。",
        },
        {
          title: "沒有網路也能繼續學",
          description:
            "用手機離線複習，重新連線後再同步。",
        },
        {
          title: "一眼看到下一張閃卡",
          description:
            "iPhone、iPad、Mac 和 Android 的主畫面小工具可顯示待複習的閃卡、下一個問題和學習進度。",
        },
        {
          title: "隨時帶走你的閃卡",
          description:
            "可匯入及匯出閃卡、標籤和媒體檔案。",
        },
        {
          title: "讓 AI 助理幫你整理",
          description:
            "透過 MCP 或 Agent API 製作、編輯及整理閃卡。",
        },
        {
          title: "免費使用，也能自行架設",
          description:
            "免費學習、查看原始碼，或自行架設 Nibomo。",
        },
      ],
    },
    {
      type: "review_cta",
      titleLines: [
        "讓 Nibomo 安排複習",
        "你只管專心學習",
      ],
      description:
        "把正在學的內容做成閃卡，在適當的時間複習，就能記住更多。",
    },
  ],
  body: "",
} as const;
