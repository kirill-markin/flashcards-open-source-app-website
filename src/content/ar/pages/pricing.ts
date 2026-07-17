import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "الأسعار",
  description:
    "التطبيق المستضاف وتجربة البطاقات التعليمية الأساسية مجانيان. ويمكنك أيضًا استضافة البرنامج المجاني ومفتوح المصدر بنفسك.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "الأسعار",
      intro:
        "التطبيق المستضاف والميزات الأساسية لإنشاء البطاقات التعليمية ومراجعتها مجانية.",
      tiers: [
        {
          type: "link_tier",
          name: "استضافة ذاتية",
          price: "مجاني",
          highlighted: false,
          bullets: [
            "برنامج مجاني ومفتوح المصدر",
            "الشيفرة المصدرية الكاملة على GitHub",
            "جميع الميزات الأساسية الحالية متضمنة",
            "نطاقك وبياناتك ونشرك",
            "أنت مسؤول عن أي تكاليف للبنية التحتية",
          ],
          cta: {
            label: "عرض على GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
        {
          type: "auth_tier",
          name: "مستضاف",
          price: "مجاني",
          highlighted: true,
          bullets: [
            "تطبيق ويب مستضاف ببنية تحتية مُدارة",
            "إنشاء البطاقات التعليمية ومراجعتها متضمنان",
            "لا حاجة إلى بطاقة ائتمان ولا يوجد عد تنازلي لفترة تجريبية",
            "تسجيل الدخول برمز يستخدم مرة واحدة عبر البريد الإلكتروني",
            "الخدمة حاليًا في المرحلة التجريبية وتُقدَّم على أساس بذل أفضل جهد",
            "قد نضيف ميزات مدفوعة اختيارية لاحقًا، لكن إنشاء البطاقات التعليمية ومراجعتها سيظلان مجانيين",
          ],
          cta: {
            label: "ابدأ الدراسة مجانًا",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
