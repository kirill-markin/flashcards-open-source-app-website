import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "定价",
  description:
    "免费 self-hosting 或托管 cloud beta。开源，无 feature gating。",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "定价",
      intro: "每个方案都包含全部功能，没有 feature gating。",
      tiers: [
        {
          type: "link_tier",
          name: "Self-Hosted",
          price: "免费",
          highlighted: false,
          bullets: [
            "GitHub 上的完整 source code",
            "本地 Postgres + auth + backend + web stack",
            "包含所有当前功能",
            "你的域名、你的数据、你的 deployment",
            "按自己的 learning workflow 调整 stack",
          ],
          cta: {
            label: "在 GitHub 查看",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
        {
          type: "auth_tier",
          name: "Cloud Beta",
          price: "测试期间免费",
          highlighted: true,
          bullets: [
            "项目域名下的托管 Web 应用",
            "Email OTP authentication",
            "Shared-domain browser login flow",
            "托管的 AWS infrastructure",
            "产品持续演进中的 early access",
          ],
          cta: {
            label: "开始使用",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
