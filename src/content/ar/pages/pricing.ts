import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "الأسعار",
  description:
    "استضافة ذاتية مجانية أو نسخة سحابية تجريبية مستضافة. المشروع مفتوح المصدر ولا توجد مزايا محجوبة.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "الأسعار",
      intro: "كل المزايا متاحة في كل خطة. لا يوجد حجب للمزايا.",
      tiers: [
        {
          type: "link_tier",
          name: "استضافة ذاتية",
          price: "مجاني",
          highlighted: false,
          bullets: [
            "الشيفرة الكاملة على GitHub",
            "حزمة محلية من Postgres وauth والخلفية والويب",
            "كل المزايا الحالية متضمنة",
            "نطاقك وبياناتك ونشرك أنت",
            "عدّل الحزمة بما يناسب أسلوب تعلمك",
          ],
          cta: {
            label: "عرض على GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
        {
          type: "auth_tier",
          name: "النسخة السحابية التجريبية",
          price: "مجاني خلال البيتا",
          highlighted: true,
          bullets: [
            "تطبيق ويب مستضاف على نطاق المشروع",
            "مصادقة OTP عبر البريد",
            "تدفق تسجيل دخول بملفات تعريف ارتباط مشتركة النطاق",
            "بنية AWS مُدارة",
            "وصول مبكر بينما المنتج ما يزال يتطور",
          ],
          cta: {
            label: "ابدأ الآن",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
