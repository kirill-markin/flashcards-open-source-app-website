import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - تطبيق بطاقات مجاني ومفتوح المصدر للتكرار المتباعد",
  description:
    "أنشئ بطاقات وتعلّم أكثر وتنس أقل مع تطبيق بطاقات مجاني ومفتوح المصدر يدعم تكرار FSRS المتباعد والدراسة دون اتصال ومساعدة الذكاء الاصطناعي وMCP.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "مجاني ومفتوح المصدر",
      titleLines: [
        "أنشئ بطاقات.",
        "تعلّم أكثر.",
        "انس أقل.",
      ],
      subtitle:
        "تطبيق بطاقات مجاني ومفتوح المصدر، مع تكرار متباعد بخوارزمية FSRS، ودراسة دون اتصال، ومساعدة بالذكاء الاصطناعي. ادرس عبر الويب أو iOS أو Android، ووصّل وكلاء الذكاء الاصطناعي عبر MCP.",
      trustLine:
        "لا حاجة إلى بطاقة ائتمان. بلا إعلانات. بلا عدّ تنازلي لفترة تجريبية.",
      primaryLink: {
        label: "ابدأ الآن",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "عرض على GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "أضف خادم MCP هذا إلى عميل الذكاء الاصطناعي لديك:",
          link: {
            label: "https://mcp.flashcards-open-source-app.com/mcp",
            href: "https://mcp.flashcards-open-source-app.com/mcp",
          },
        },
      ],
    },
    {
      type: "public_activity",
    },
    {
      type: "feature_list",
      title: "المزايا",
      intro:
        "حزمة بطاقات مركزة: تطبيق ويب مستضاف، وعميل iOS داخل المستودع، وخادم MCP للوكلاء، وبنية جاهزة بالفعل للاستضافة الذاتية.",
      items: [
        {
          title: "تكرار متباعد",
          description:
            "راجع البطاقات باستخدام جدولة FSRS وتدفق تقييم بسيط. يحافظ كل من الخلفية وعميل iOS على السلوك نفسه للمجدول.",
        },
        {
          title: "تطبيق ويب ودردشة ذكاء اصطناعي",
          description:
            "أنشئ بطاقات، وتصفح مجموعتك، وراجع العناصر المستحقة، واستخدم دردشة الذكاء الاصطناعي مع الملفات المرفقة داخل تطبيق الويب المستضاف.",
        },
        {
          title: "تسجيل دخول بلا كلمة مرور",
          description:
            "رمز OTP عبر البريد باستخدام Cognito مع ملفات تعريف ارتباط مشتركة النطاق بين نطاقي المصادقة والتطبيق.",
        },
        {
          title: "إعداد جاهز للوكلاء",
          description:
            "أضِف خادم MCP الخاص بـ Flashcards إلى عميل الذكاء الاصطناعي لديك، وامنحه الإذن مرة واحدة، ودعه يحمّل مساحة عملك وينشئ بطاقاتك ويحررها ويراجعها نيابةً عنك.",
        },
        {
          title: "استضافة ذاتية",
          description:
            "شغّل Postgres محليًا، وابدأ auth والخلفية والويب بشكل منفصل، واحتفظ بالتحكم الكامل في مسار النشر على AWS.",
        },
        {
          title: "عملاء يعملون دون اتصال أولًا",
          description:
            "يتضمن المستودع بالفعل تطبيق iOS مع SQLite محلي ومزامنة، كما أن تطبيق Android متاح الآن على Google Play.",
        },
      ],
    },
  ],
  body: "",
} as const;
