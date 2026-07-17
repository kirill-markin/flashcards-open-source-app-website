import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "定价",
  description:
    "托管应用和核心闪卡体验免费，也可免费使用开源软件自行托管。",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "定价",
      intro: "托管应用以及核心的闪卡创建和复习功能免费。",
      tiers: [
        {
          type: "link_tier",
          name: "自行托管",
          price: "免费",
          highlighted: false,
          bullets: [
            "免费开源软件",
            "GitHub 上提供完整源代码",
            "包含当前所有核心功能",
            "使用你自己的域名，数据和部署都由你掌控",
            "基础设施费用由你自行承担",
          ],
          cta: {
            label: "前往 GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
        {
          type: "auth_tier",
          name: "托管版",
          price: "免费",
          highlighted: true,
          bullets: [
            "由我们管理基础设施的托管 Web 应用",
            "包含当前核心的闪卡创建和复习功能",
            "无需信用卡，也没有试用倒计时",
            "通过电子邮件一次性验证码登录",
            "服务目前处于测试阶段，按尽力而为原则提供",
            "未来可能会增加可选付费功能，但核心的闪卡创建和复习功能将始终免费",
          ],
          cta: {
            label: "免费开始学习",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
