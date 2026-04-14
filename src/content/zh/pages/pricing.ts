import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "定价",
  description:
    "可免费自托管，也可使用托管式 Cloud Beta。项目开源，所有方案均提供完整功能。",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "定价",
      intro: "每个方案都包含全部功能，不做功能限制。",
      tiers: [
        {
          type: "link_tier",
          name: "Self-Hosted",
          price: "免费",
          highlighted: false,
          bullets: [
            "GitHub 上提供完整源代码",
            "可在本地部署 Postgres、认证、后端和 Web 应用栈",
            "包含当前全部功能",
            "使用你自己的域名，数据和部署都由你掌控",
            "可按自己的学习流程调整整套技术栈",
          ],
          cta: {
            label: "前往 GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
        {
          type: "auth_tier",
          name: "Cloud Beta",
          price: "测试期间免费",
          highlighted: true,
          bullets: [
            "部署在项目域名下的托管式 Web 应用",
            "电子邮件 OTP 验证登录",
            "基于共享域名的浏览器登录流程",
            "托管式 AWS 基础设施",
            "在产品持续迭代阶段抢先体验",
          ],
          cta: {
            label: "立即开始",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
