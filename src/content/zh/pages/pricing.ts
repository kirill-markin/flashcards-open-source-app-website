import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "免费开始，升级 Premium 获得更多 AI。",
  description:
    "在托管应用上免费开始；每月 USD 6.99 升级到 Premium，获得更多 AI 聊天；或在自己的 AWS 基础设施上自行托管开源技术栈。",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "免费开始，升级 Premium 获得更多 AI。",
      intro:
        "无需信用卡即可在托管应用上免费开始，添加 Premium 获得更多 AI 聊天，也可在自己的 AWS 基础设施上免费自行托管开源技术栈。",
      tiers: [
        {
          type: "auth_tier",
          name: "免费版",
          price: "免费",
          highlighted: true,
          bullets: [
            "每月 50 条 AI 聊天消息",
            "可使用你自己的 OpenAI API 密钥；其用量不计入每月限额",
            "包含 Web、iOS 和 Android 之间的同步",
            "卡片、文件或总存储空间不设按套餐划分的配额；仍适用正常的单文件和单次操作技术限制",
            "可在托管版与自行托管版之间导入和导出卡片、标签及媒体",
            "使用电子邮件一次性验证码免密码登录",
          ],
          cta: {
            label: "免费使用托管应用",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/月",
          highlighted: false,
          bullets: [
            "符合条件的新订阅用户可享 7 天免费试用；需要提供付款方式",
            "每月 1000 条 AI 聊天消息",
            "自定义强调色",
            "包含免费版的全部功能",
            "你的账户在 Web、iOS 和 Android 上共用一份订阅",
            "以美元计价，包含税费；结账时可能显示当地货币价格",
            "按月续订；可随时取消，访问权限保留至当期结束",
          ],
          cta: {
            label: "开始 7 天免费试用",
            href: "https://app.nibomo.com",
          },
        },
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
      ],
    },
  ],
  body: "",
} as const;
