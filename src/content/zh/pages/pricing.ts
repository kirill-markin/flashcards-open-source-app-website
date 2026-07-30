import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "使用免费，自行托管也免费。",
  description:
    "测试期间可免费使用包含 AI 和同步功能的托管应用，也可在自己的 AWS 基础设施上自行托管开源技术栈。",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "使用免费，自行托管也免费。",
      intro:
        "无需信用卡即可免费使用托管应用，也可在自己的 AWS 基础设施上运行开源技术栈。",
      tiers: [
        {
          type: "link_tier",
          name: "自行托管",
          price: "免费",
          highlighted: false,
          bullets: [
            "应用和 AWS CDK 基础设施均为开源",
            "提供完整的 AWS 部署路径，以及基于 Docker/Postgres 的本地开发路径",
            "基础设施以及电子邮件、监控和 AI 凭证均由运营者提供和维护",
            "基础设施和第三方服务商费用由运营者承担",
            "可在托管版与自行托管版之间导入和导出卡片、标签及媒体",
          ],
          cta: {
            label: "从 GitHub 自行托管",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
        {
          type: "auth_tier",
          name: "托管版",
          price: "免费",
          highlighted: true,
          bullets: [
            "测试期间包含 AI 功能",
            "包含 Web、iOS 和 Android 之间的同步",
            "测试期间，卡片、文件或总存储空间不设按套餐划分的配额；仍适用正常的单文件和单次操作技术限制",
            "可在托管版与自行托管版之间导入和导出卡片、标签及媒体",
            "使用电子邮件一次性验证码免密码登录",
            "核心卡片创建和复习功能将保持免费；较高的 AI 用量日后可能需要使用你自己的服务商 API 密钥或付费方案",
          ],
          cta: {
            label: "免费使用托管应用",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
