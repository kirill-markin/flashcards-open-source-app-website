import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - 免费开源的间隔重复闪卡应用",
  description:
    "免费开源闪卡应用，支持 FSRS 间隔重复、AI 辅助创建、离线学习与同步、数据导出和自行托管。",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "免费且开源",
      titleLines: [
        "创建闪卡。",
        "更聪明地复习。",
        "记住更多。",
      ],
      subtitle:
        "一款免费的闪卡应用，会在恰当的时间安排复习，支持离线使用，并在 Web、iOS 和 Android 之间同步。需要创建或改进闪卡时，可以选择让 AI 帮忙。",
      trustLine: "无需信用卡。没有广告。没有试用倒计时。",
      primaryLink: {
        label: "开始使用",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "在 GitHub 查看",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "或使用此 URL 连接任何支持 MCP 的 AI 客户端：",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Nibomo 如何运作",
      items: [
        {
          label: "01 · AI 闪卡",
          titleLines: [
            "告诉 AI 你想学什么。",
          ],
          description: "描述一个主题或上传笔记。AI 帮你把学习材料转化为包含问题和答案的闪卡。",
          linkLabel: "创建闪卡",
          imagePath: "/home/ai-flashcards-zh.png",
          imageAlt: "Nibomo AI 聊天根据主题或上传的笔记创建闪卡",
        },
        {
          label: "02 · 开始学习",
          titleLines: [
            "一次专注一个问题。",
          ],
          description: "打开闪卡，在查看答案前先尝试回忆。按自己的节奏学习，一次一张卡片。",
          linkLabel: "开始学习",
          imagePath: "/home/start-learning-zh.png",
          imageAlt: "带有显示答案按钮的 Nibomo 复习闪卡",
        },
        {
          label: "03 · 智能复习",
          titleLines: [
            "核对答案。",
            "评价回忆的难易程度。",
          ],
          description: "查看答案，并选择回忆起来有多容易。Nibomo 会更早让你复习困难的卡片，更晚再次展示熟悉的卡片。",
          linkLabel: "复习闪卡",
          imagePath: "/home/smart-reviews-zh.png",
          imageAlt: "显示答案和回忆难易评价选项的 Nibomo 闪卡",
        },
        {
          label: "04 · 你的进度",
          titleLines: [
            "让学习成为习惯。",
          ],
          description: "在日历中查看学习日期，保持连续学习。每次复习都让你离目标更近一步。",
          linkLabel: "查看进度",
          imagePath: "/home/your-progress-zh.png",
          imageAlt: "Nibomo 进度页面，显示连续学习日历和排行榜",
        }
      ],
    },
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
            "没有网络连接，也能在移动设备上继续复习。更改会自动同步。",
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
    {
      type: "review_cta",
      titleLines: [
        "让 Nibomo 规划你的复习。",
        "你只需专注学习。",
      ],
      description: "把正在学习的内容做成闪卡，在合适的时间复习，记住更多。",
    },
  ],
  body: "",
} as const;
