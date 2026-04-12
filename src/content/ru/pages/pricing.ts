import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Цены",
  description:
    "Бесплатный self-hosting или hosted cloud beta. Open source, без feature gating.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Цены",
      intro: "Все функции доступны в каждом плане. Без feature gating.",
      tiers: [
        {
          type: "link_tier",
          name: "Self-Hosted",
          price: "Бесплатно",
          highlighted: false,
          bullets: [
            "Полный source code на GitHub",
            "Локальный Postgres + auth + backend + web stack",
            "Все текущие функции включены",
            "Ваш домен, ваши данные, ваш deployment",
            "Настройте stack под свой learning workflow",
          ],
          cta: {
            label: "Открыть на GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
        {
          type: "auth_tier",
          name: "Cloud Beta",
          price: "Бесплатно во время беты",
          highlighted: true,
          bullets: [
            "Hosted web app на домене проекта",
            "Email OTP authentication",
            "Shared-domain browser login flow",
            "Управляемая AWS infrastructure",
            "Ранний доступ, пока продукт еще развивается",
          ],
          cta: {
            label: "Начать",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
