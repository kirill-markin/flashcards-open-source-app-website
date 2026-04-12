import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "功能",
  description:
    "FSRS 复习、卡片创建、AI 聊天、代理 onboarding、免密码认证、self-hosting 和 offline-first clients。",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "功能",
      intro:
        "一个聚焦的闪卡技术栈：托管 Web 应用、仓库中的 iOS client、外部 agent API，以及已经准备好的 self-hosting 基础设施。",
      items: [
        {
          title: "FSRS Review",
          description:
            "Due cards 使用 FSRS 进行调度。提交四种评分之一后，backend 会使用 client review timestamp 更新下一次 review 时间。",
        },
        {
          title: "Card Creation And Chat",
          description:
            "通过 web client 创建正反面 cards，并结合 workspace data 与 file attachments 使用 AI chat，包括 plain text uploads。",
        },
        {
          title: "代理友好 onboarding",
          description:
            "将 Claude Code、Codex 或 OpenClaw 指向 discovery URL，agent 就可以走完整个 auth flow、保存 API key、加载 account context、选择正确的 workspace，并继续使用紧凑的 /v1/agent/sql surface。人类只需要提供最新的 8-digit email code。",
        },
        {
          title: "Passwordless Auth",
          description:
            "Email OTP authentication 运行在独立的 auth service 上。Browser sessions 会复用 shared-domain cookies，因此登录可以在 subdomains 之间顺畅工作。",
        },
        {
          title: "Self-Hosted Stack",
          description:
            "在本地运行 Postgres、auth、backend 和 web client。Production deployment 已经通过 CDK、CloudFront、API Gateway、Lambda 和 RDS 接好 AWS。",
        },
        {
          title: "Published Agent API",
          description:
            "当前外部 contract 覆盖 discovery、OTP bootstrap、workspace selection，以及运行在 workspace、cards、decks 和 review events 之上的 published SQL dialect。",
        },
        {
          title: "Offline-First Clients",
          description:
            "仓库中已经提供带本地 SQLite 和 backend sync routes 的 iOS client，Android app 也已在 Google Play 上可用。",
        },
      ],
    },
  ],
  body: "",
} as const;
