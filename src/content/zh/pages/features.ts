import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Flashcards 功能",
  description:
    "探索免费开源闪卡应用的 FSRS 间隔重复、AI 辅助创建、离线学习、数据导出和自行托管功能。",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "功能",
      intro:
        "创建实用闪卡、按时复习、离线学习并掌控学习数据所需的功能，都集中在这里。",
      items: [
        {
          title: "用 FSRS 更聪明地复习",
          description:
            "复习今天到期的闪卡。FSRS 会让较难的闪卡更早出现，并延长熟悉闪卡的再次出现间隔。",
        },
        {
          title: "AI 辅助创建闪卡",
          description:
            "让 AI 帮你创建闪卡、优化措辞或解释答案。最终保存哪些内容，由你决定。",
        },
        {
          title: "离线学习与自动同步",
          description:
            "没有网络时也能在移动设备上继续复习。更改会自动同步，让你可以在 Web、iOS 或 Android 上接着学习。",
        },
        {
          title: "导入、导出并掌控数据",
          description:
            "随时将学习资料导入或导出。便携式导出包包含你的闪卡、标签和相关媒体。",
        },
        {
          title: "支持 AI 代理",
          description:
            "通过 MCP 或 Agent API 连接 AI 代理，让它们帮助创建、改进和整理闪卡。",
        },
        {
          title: "免费且可自行托管",
          description:
            "免费使用托管版应用、查看开源代码，或在自己的基础设施上运行。",
        },
      ],
    },
  ],
  body: "",
} as const;
