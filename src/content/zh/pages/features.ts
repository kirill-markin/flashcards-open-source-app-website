import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "功能",
  description:
    "FSRS 复习、卡片创建、AI 对话、面向 Agent 的接入流程、免密码认证、自托管，以及离线优先客户端。",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "功能",
      intro:
        "一套聚焦而完整的闪卡产品组合：托管式 Web 应用、仓库内提供的 iOS 客户端、对外开放的 Agent API，以及已准备就绪的自托管基础设施。",
      items: [
        {
          title: "FSRS 复习",
          description:
            "到期卡片会由 FSRS 安排复习节奏。提交四档评分中的任意一种后，后端会根据客户端记录的复习时间戳更新下一次复习时间。",
        },
        {
          title: "卡片创建与 AI 对话",
          description:
            "你可以在 Web 客户端中创建正反面卡片，并结合工作区数据和文件附件使用 AI 对话，其中也包括纯文本上传内容。",
        },
        {
          title: "面向 Agent 的接入流程",
          description:
            "只需将 Claude Code、Codex 或 OpenClaw 指向 discovery 地址，Agent 就能走完整套认证流程、保存 API 密钥、加载账户上下文、选择正确的工作区，并继续通过精简的 /v1/agent/sql 接口工作。人工只需提供最新的 8 位邮箱验证码。",
        },
        {
          title: "免密码认证",
          description:
            "邮箱 OTP 认证运行在独立的认证服务上。浏览器会话会复用共享域 Cookie，因此登录状态可以在各个子域之间自然延续。",
        },
        {
          title: "自托管部署方案",
          description:
            "你可以在本地运行 Postgres、认证服务、后端和 Web 客户端。生产环境部署也已通过 CDK、CloudFront、API Gateway、Lambda 和 RDS 接入 AWS。",
        },
        {
          title: "已发布的 Agent API",
          description:
            "当前对外公开的接口契约已覆盖 discovery 接口、OTP 引导流程、工作区选择，以及围绕工作区、卡片、卡组和复习事件定义的 SQL 方言。",
        },
        {
          title: "离线优先客户端",
          description:
            "仓库中已经提供支持本地 SQLite 和后端同步路由的 iOS 客户端，Android 应用也已上架 Google Play。",
        },
      ],
    },
  ],
  body: "",
} as const;
