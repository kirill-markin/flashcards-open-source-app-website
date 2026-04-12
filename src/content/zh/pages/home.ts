import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - 开源间隔重复",
  description:
    "使用这款面向间隔重复、AI 聊天和代理接入的开源闪卡应用，创建卡片、学得更多、忘得更少。",
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
        "一款带有间隔重复、免密码认证、AI 聊天和代理友好 onboarding 流程的开源闪卡应用。今天就可以使用托管版 Web 应用，通过一个 discovery URL 连接 Claude Code、Codex 或 OpenClaw，并让 Web、iOS 与 agent workflows 共用同一个 backend model。",
      primaryLink: {
        label: "开始使用",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "在 GitHub 查看",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      hintText: "先对这个 discovery URL 执行 GET:",
      hintLink: {
        label: "https://api.flashcards-open-source-app.com/v1/",
        href: "https://api.flashcards-open-source-app.com/v1/",
      },
    },
    {
      type: "feature_list",
      title: "功能",
      intro:
        "一个聚焦的闪卡技术栈：托管 Web 应用、仓库中的 iOS client、外部 agent API，以及已经准备好的 self-hosting 基础设施。",
      items: [
        {
          title: "间隔重复",
          description:
            "使用 FSRS scheduling 和简单的评分流程来复习卡片。Backend 与 iOS client 保持一致的 scheduler 行为。",
        },
        {
          title: "Web 应用与 AI 聊天",
          description:
            "在托管 Web 应用中创建卡片、浏览你的 collection、复习 due items，并使用带 file attachments 的 AI 聊天。",
        },
        {
          title: "免密码认证",
          description:
            "通过 Cognito 提供 email OTP，并在 auth 与 app subdomains 之间共享 domain cookies。",
        },
        {
          title: "代理友好 onboarding",
          description:
            "把 discovery URL 交给 AI agent，确认最新的 8-digit email code，让它完成 login、API key setup、account loading、workspace selection 和 SQL discovery。",
        },
        {
          title: "Self-Hosted",
          description:
            "在本地运行 Postgres，分别启动 auth、backend 和 web，并保持对 AWS deployment path 的控制权。",
        },
        {
          title: "Offline-First Clients",
          description:
            "仓库中已经包含带本地 SQLite 和 sync 的 iOS app，Android app 也已在 Google Play 上架。",
        },
      ],
    },
  ],
  body: "",
} as const;
