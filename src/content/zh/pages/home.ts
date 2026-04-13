import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - 开源间隔重复闪卡应用",
  description:
    "用这款支持间隔重复、AI 聊天和代理接入的开源闪卡应用，创建卡片、学得更多、忘得更少。",
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
        "这是一款支持间隔重复、免密码认证、AI 聊天和代理接入流程的开源闪卡应用。你今天就可以直接使用托管版 Web 应用，通过一个发现 URL 连接 Claude Code、Codex 或 OpenClaw，并让 Web、iOS 与代理工作流共享同一套后端模型。",
      primaryLink: {
        label: "开始使用",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "在 GitHub 查看",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      hintText: "先对这个发现 URL 发起 GET 请求：",
      hintLink: {
        label: "https://api.flashcards-open-source-app.com/v1/",
        href: "https://api.flashcards-open-source-app.com/v1/",
      },
    },
    {
      type: "feature_list",
      title: "功能",
      intro:
        "一套聚焦而完整的闪卡方案：托管 Web 应用、仓库内的 iOS 客户端、面向外部代理的 API，以及已经就绪的自托管基础设施。",
      items: [
        {
          title: "间隔重复",
          description:
            "通过 FSRS 调度和简洁的评分流程来复习卡片。后端与 iOS 客户端保持一致的调度器行为。",
        },
        {
          title: "Web 应用与 AI 聊天",
          description:
            "在托管 Web 应用中创建卡片、浏览你的卡片库、复习到期内容，并使用支持文件附件的 AI 聊天。",
        },
        {
          title: "免密码认证",
          description:
            "通过 Cognito 发送邮箱一次性验证码，并在 auth 与 app 子域之间共享同域 Cookie。",
        },
        {
          title: "面向代理的接入流程",
          description:
            "把发现 URL 交给 AI 代理，确认最新的 8 位邮箱验证码，然后让它完成登录、API 密钥设置、账户加载、工作区选择和 SQL 发现。",
        },
        {
          title: "自托管",
          description:
            "在本地运行 Postgres，分别启动 auth、backend 和 web，并继续掌控自己的 AWS 部署路径。",
        },
        {
          title: "离线优先客户端",
          description:
            "仓库已经包含支持本地 SQLite 和同步的 iOS 应用，Android 应用也已在 Google Play 上架。",
        },
      ],
    },
  ],
  body: "",
} as const;
