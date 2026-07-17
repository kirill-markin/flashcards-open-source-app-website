import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - 免费开源的间隔重复闪卡应用",
  description:
    "使用这款免费的开源闪卡应用创建卡片，学得更多，忘得更少；它支持 FSRS 间隔重复、离线学习、AI 辅助和 MCP。",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "免费且开源",
      titleLines: [
        "创建卡片。",
        "学得更多。",
        "忘得更少。",
      ],
      subtitle:
        "一款免费的开源闪卡应用，支持 FSRS 间隔重复、离线学习和 AI 辅助。你可以在 Web、iOS 或 Android 上学习，也可以通过 MCP 连接 AI 代理。",
      trustLine: "无需信用卡。没有广告。没有试用倒计时。",
      primaryLink: {
        label: "开始使用",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "在 GitHub 查看",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "把这个 MCP 服务器添加到你的 AI 客户端：",
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
      title: "功能",
      intro:
        "一套聚焦且完整的闪卡方案：托管版 Web 应用、仓库内的 iOS 客户端、面向 AI 代理的 MCP 服务器，以及已经就绪的自托管基础设施。",
      items: [
        {
          title: "间隔重复",
          description:
            "借助 FSRS 调度和简洁的评分流程复习卡片。后端与 iOS 客户端的调度行为保持一致。",
        },
        {
          title: "Web 应用与 AI 对话",
          description:
            "在托管版 Web 应用中创建卡片、浏览卡片库、复习到期内容，并使用支持文件附件的 AI 对话。",
        },
        {
          title: "免密码登录",
          description:
            "通过 Cognito 发送邮箱一次性验证码，并在 auth 与 app 两个子域之间共享同一域下的 Cookie。",
        },
        {
          title: "代理接入就绪",
          description:
            "把 Flashcards MCP 服务器添加到你的 AI 客户端，授权一次，它就能加载你的工作区，并为你创建、编辑和复习卡片。",
        },
        {
          title: "自托管",
          description:
            "在本地运行 Postgres，分别启动 auth、backend 和 web 三个服务，并继续掌控自己的 AWS 部署路径。",
        },
        {
          title: "离线优先客户端",
          description:
            "仓库中已经包含支持本地 SQLite 与同步功能的 iOS 应用，Android 应用也已上线 Google Play。",
        },
      ],
    },
  ],
  body: "",
} as const;
