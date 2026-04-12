import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - تكرار متباعد مفتوح المصدر",
  description:
    "أنشئ بطاقات وتعلّم أكثر وتنس أقل مع تطبيق بطاقات مفتوح المصدر يجمع بين التكرار المتباعد ودردشة الذكاء الاصطناعي وإعدادًا جاهزًا للوكلاء.",
  slug: "home",
  sections: [
    {
      type: "hero",
      titleLines: [
        "أنشئ بطاقات.",
        "تعلّم أكثر.",
        "انس أقل.",
      ],
      subtitle:
        "تطبيق بطاقات مفتوح المصدر مع تكرار متباعد وتسجيل دخول بلا كلمة مرور ودردشة ذكاء اصطناعي وتدفق إعداد جاهز للوكلاء. استخدم تطبيق الويب المستضاف اليوم، ووصل Claude Code أو Codex أو OpenClaw عبر رابط اكتشاف واحد، وأبقِ الويب وiOS والوكلاء على نموذج الخلفية نفسه.",
      primaryLink: {
        label: "ابدأ الآن",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "عرض على GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      hintText: "ابدأ بطلب GET على رابط الاكتشاف هذا:",
      hintLink: {
        label: "https://api.flashcards-open-source-app.com/v1/",
        href: "https://api.flashcards-open-source-app.com/v1/",
      },
    },
    {
      type: "feature_list",
      title: "المزايا",
      intro:
        "حزمة بطاقات مركزة: تطبيق ويب مستضاف، وعميل iOS داخل المستودع، وواجهة API خارجية للوكلاء، وبنية جاهزة بالفعل للاستضافة الذاتية.",
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
            "أعطِ وكيل الذكاء الاصطناعي رابط الاكتشاف، وأكد أحدث رمز بريد مكوّن من 8 أرقام، ودعه يُنهي تسجيل الدخول وإعداد مفتاح API وتحميل الحساب واختيار مساحة العمل واكتشاف SQL.",
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
