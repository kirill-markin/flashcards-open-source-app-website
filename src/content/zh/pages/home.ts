import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - 开源间隔重复闪卡应用",
  description:
    "用这款支持间隔重复、AI 对话和代理接入的开源闪卡应用创建卡片，学得更多，忘得更少。",
  slug: "home",
  sections: [
    {
      type: "hero",
      titleLines: [
        "创建卡片。",
        "学得更多。",
        "忘得更少。",
      ],
      subtitle:
        "这是一款支持间隔重复、免密码登录、AI 对话和代理接入的开源闪卡应用。现在就可以直接使用托管版 Web 应用，通过一个入口 URL 连接 Claude Code、Codex 或 OpenClaw，并让 Web、iOS 与代理工作流共用同一套后端。",
      primaryLink: {
        label: "开始使用",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "在 GitHub 查看",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      hintText: "先向这个入口 URL 发起 GET 请求：",
      hintLink: {
        label: "https://api.flashcards-open-source-app.com/v1/",
        href: "https://api.flashcards-open-source-app.com/v1/",
      },
    },
    {
      type: "feature_list",
      title: "功能",
      intro:
        "一套聚焦且完整的闪卡方案：托管版 Web 应用、仓库内的 iOS 客户端、面向外部代理的 API，以及已经就绪的自托管基础设施。",
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
            "把入口 URL 交给 AI 代理，确认最新的 8 位邮箱验证码，然后让它完成登录、API 密钥配置、加载账户信息、选择工作区和 SQL 探查。",
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
