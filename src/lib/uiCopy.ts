import type { AppLocale } from "@/lib/localeConfig";

interface AppUiCopy {
  readonly analyticsConsentBanner: {
    readonly allow: string;
    readonly decline: string;
    readonly error: string;
    readonly label: string;
    readonly message: string;
    readonly privacyPolicy: string;
  };
  readonly analyticsConsentWithdrawal: {
    readonly close: string;
    readonly link: string;
    readonly off: string;
    readonly on: string;
    readonly title: string;
    readonly toggleDescription: string;
    readonly toggleTitle: string;
  };
  readonly auth: {
    readonly logIn: string;
    readonly openApp: string;
    readonly signUpFree: string;
    readonly startStudyingFree: string;
  };
  readonly blog: {
    readonly breadcrumbLabel: string;
    readonly byPrefix: string;
    readonly empty: string;
    readonly metaDescription: string;
    readonly notFoundDescription: string;
    readonly notFoundTitle: string;
    readonly readNextHeading: string;
    readonly title: string;
  };
  readonly breadcrumbs: {
    readonly ariaLabel: string;
    readonly homeLabel: string;
  };
  readonly copyCodeField: {
    readonly copied: string;
    readonly copy: string;
    readonly copyFailed: string;
  };
  readonly cta: {
    readonly activityHeading: string;
    readonly heading: string;
    readonly buttonLabel: string;
    readonly featuresHeading: string;
  };
  readonly docs: {
    readonly breadcrumbLabel: string;
    readonly comingSoonDescription: string;
    readonly comingSoonTitle: string;
    readonly metaDescription: string;
    readonly title: string;
  };
  readonly footer: {
    readonly appsHeading: string;
    readonly blogLabel: string;
    readonly builtByLabel: string;
    readonly copyrightLabel: string;
    readonly documentationLabel: string;
    readonly featuresLabel: string;
    readonly inDevelopmentLabel: string;
    readonly legalHeading: string;
    readonly openSourceHeading: string;
    readonly operatedByLabel: string;
    readonly pricingLabel: string;
    readonly privacyPolicyLabel: string;
    readonly productHeading: string;
    readonly selfHostingGuideLabel: string;
    readonly supportLabel: string;
    readonly termsOfServiceLabel: string;
  };
  readonly home: {
    readonly activity: {
      readonly dailyUniqueUsersChartDescription: string;
      readonly dailyUniqueUsersChartTitle: string;
      readonly dateRangeLabel: string;
      readonly daysInRangeLabel: string;
      readonly description: string;
      readonly eyebrow: string;
      readonly lastUpdatedLabel: string;
      readonly peakDailyUniqueUsersLabel: string;
      readonly peakDailyVolumeLabel: string;
      readonly platformActivityChartDescription: string;
      readonly platformActivityChartTitle: string;
      readonly platformLabels: {
        readonly android: string;
        readonly ios: string;
        readonly web: string;
      };
      readonly reviewUserCohortLabels: {
        readonly new: string;
        readonly returning: string;
      };
      readonly reviewDateAxisLabel: string;
      readonly reviewEventsAxisLabel: string;
      readonly rawSnapshotLabel: string;
      readonly sourceLabel: string;
      readonly title: string;
      readonly totalReviewEventsLabel: string;
      readonly uniqueUsersAxisLabel: string;
      readonly usersWithReviewEventsLabel: string;
    };
    readonly agentHintDescription: string;
    readonly aiAgentSectionLabel: string;
    readonly appPreviewAlt: string;
    readonly appPreviewAriaLabel: string;
    readonly appPreviewLabel: string;
    readonly humanSectionLabel: string;
  };
  readonly legal: {
    readonly lastUpdatedLabel: string;
  };
  readonly locale: {
    readonly switcherAriaLabel: string;
  };
  readonly localeSuggestion: {
    readonly actionLabel: string;
    readonly dismissLabel: string;
    readonly message: string;
  };
  readonly menuToggleLabel: string;
  readonly navigation: {
    readonly blog: string;
    readonly dashboards: string;
    readonly docs: string;
    readonly features: string;
    readonly pricing: string;
  };
  readonly platforms: {
    readonly appStore: string;
    readonly googlePlay: string;
    readonly scanQrHint: string;
    readonly webApp: string;
  };
}

const UI_COPY_BY_LOCALE: Readonly<Record<AppLocale, AppUiCopy>> = {
  en: {
    analyticsConsentBanner: {
      allow: "Allow",
      decline: "Decline",
      error: "That did not go through. Please try again.",
      label: "Analytics cookies",
      message: "We use a cookie and other browser storage to measure how the site gets used. Until you choose, this site stores nothing on this device and sends nothing that identifies you.",
      privacyPolicy: "Privacy Policy",
    },
    analyticsConsentWithdrawal: {
      close: "Close",
      link: "Analytics cookies",
      off: "Off",
      on: "On",
      title: "Analytics",
      toggleDescription: "When this is off, this site gives this browser no identifier and stores nothing for analytics.",
      toggleTitle: "Allow analytics cookies",
    },
    auth: {
      logIn: "Log In",
      openApp: "Open App",
      signUpFree: "Sign Up Free",
      startStudyingFree: "Start studying free",
    },
    blog: {
      breadcrumbLabel: "Blog",
      byPrefix: "By",
      empty: "Posts coming soon.",
      metaDescription: "Updates, tutorials, and insights about Nibomo.",
      notFoundDescription: "This blog post does not exist.",
      notFoundTitle: "Not Found",
      readNextHeading: "Read next",
      title: "Blog",
    },
    breadcrumbs: {
      ariaLabel: "Breadcrumb",
      homeLabel: "Home",
    },
    copyCodeField: {
      copied: "Copied",
      copy: "Copy",
      copyFailed: "Copy failed",
    },
    cta: {
      activityHeading: "Ready to start reviewing your own cards?",
      heading:
        "Learn more and forget less with free spaced-repetition flashcards",
      buttonLabel: "Start studying free",
      featuresHeading:
        "Create better cards and review them at the right time.",
    },
    docs: {
      breadcrumbLabel: "Docs",
      comingSoonDescription: "This documentation page is being written.",
      comingSoonTitle: "Coming Soon",
      metaDescription:
        "Getting started, self-hosting guide, API reference, and architecture overview.",
      title: "Documentation",
    },
    footer: {
      appsHeading: "Apps",
      blogLabel: "Blog",
      builtByLabel: "Built by Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Documentation",
      featuresLabel: "Features",
      inDevelopmentLabel: "In Development",
      legalHeading: "Legal",
      openSourceHeading: "Open Source",
      operatedByLabel: "Operated by SAMO DANNI EOOD",
      pricingLabel: "Pricing",
      privacyPolicyLabel: "Privacy Policy",
      productHeading: "Product",
      selfHostingGuideLabel: "Self-Hosting Guide",
      supportLabel: "Support",
      termsOfServiceLabel: "Terms of Service",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "Reviewers are grouped as new on their first review day or returning if they reviewed before. A review is counted when someone chooses Again, Hard, Good, or Easy on a card.",
        dailyUniqueUsersChartTitle: "Daily reviewers: new vs returning",
        dateRangeLabel: "Date range",
        daysInRangeLabel: "Days in range",
        description:
          "See aggregate daily review activity across web, iOS, and Android. Published figures are aggregate counts and do not expose card content, email addresses, or individual study histories.",
        eyebrow: "Activity",
        lastUpdatedLabel: "Last updated",
        peakDailyUniqueUsersLabel: "Peak daily unique users",
        peakDailyVolumeLabel: "Peak daily volume",
        platformActivityChartDescription:
          "A review is counted when someone chooses Again, Hard, Good, or Easy on a card. Counts are grouped by platform.",
        platformActivityChartTitle: "Daily reviews by platform",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        reviewUserCohortLabels: {
          new: "New",
          returning: "Returning",
        },
        reviewDateAxisLabel: "Review date",
        reviewEventsAxisLabel: "Reviews",
        rawSnapshotLabel: "Raw data (JSON)",
        sourceLabel: "View raw data (JSON)",
        title: "Nibomo activity",
        totalReviewEventsLabel: "Total reviews",
        uniqueUsersAxisLabel: "Reviewers",
        usersWithReviewEventsLabel: "Reviewers",
      },
      agentHintDescription:
        "Connect your AI agent over MCP: add the Nibomo server to Claude, Cursor, or any MCP client and it can read, create, and edit your cards.",
      aiAgentSectionLabel: "FOR AI AGENTS",
      appPreviewAlt:
        "Nibomo app screens showing review, answer results, progress, AI draft, and card list flows.",
      appPreviewAriaLabel: "App preview",
      appPreviewLabel: "APP PREVIEW",
      humanSectionLabel: "FOR PEOPLE",
    },
    legal: {
      lastUpdatedLabel: "Last updated",
    },
    locale: {
      switcherAriaLabel: "Language switcher",
    },
    localeSuggestion: {
      actionLabel: "Open the English version",
      dismissLabel: "Close language suggestion",
      message: "This page is available in English.",
    },
    menuToggleLabel: "Toggle menu",
    navigation: {
      blog: "Blog",
      dashboards: "Activity",
      docs: "Docs",
      features: "Features",
      pricing: "Pricing",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Scan it from your phone",
      webApp: "Web App",
    },
  },
  es: {
    analyticsConsentBanner: {
      allow: "Permitir",
      decline: "Rechazar",
      error: "No ha funcionado. Inténtalo de nuevo.",
      label: "Cookies de analítica",
      message: "Usamos una cookie y otro almacenamiento del navegador para medir cómo se usa el sitio. Hasta que elijas, este sitio no guarda nada en este dispositivo ni envía nada que te identifique.",
      privacyPolicy: "Política de privacidad",
    },
    analyticsConsentWithdrawal: {
      close: "Cerrar",
      link: "Cookies de analítica",
      off: "Desactivado",
      on: "Activado",
      title: "Analítica",
      toggleDescription: "Cuando está desactivado, este sitio no da ningún identificador a este navegador y no guarda nada para analítica.",
      toggleTitle: "Permitir cookies de analítica",
    },
    auth: {
      logIn: "Iniciar sesión",
      openApp: "Abrir app",
      signUpFree: "Registrarse gratis",
      startStudyingFree: "Empieza a estudiar gratis",
    },
    blog: {
      breadcrumbLabel: "Blog",
      byPrefix: "Por",
      empty: "Próximamente habrá publicaciones.",
      metaDescription: "Novedades, tutoriales e ideas sobre Nibomo.",
      notFoundDescription: "Esta entrada del blog no existe.",
      notFoundTitle: "No encontrado",
      readNextHeading: "Seguir leyendo",
      title: "Blog",
    },
    breadcrumbs: {
      ariaLabel: "Ruta de navegación",
      homeLabel: "Inicio",
    },
    copyCodeField: {
      copied: "Copiado",
      copy: "Copiar",
      copyFailed: "Error al copiar",
    },
    cta: {
      activityHeading: "¿Listo para empezar a repasar tus propias tarjetas?",
      heading:
        "Aprende más y olvida menos con flashcards gratis de repetición espaciada",
      buttonLabel: "Empieza a estudiar gratis",
      featuresHeading:
        "Crea mejores tarjetas y repásalas en el momento adecuado.",
    },
    docs: {
      breadcrumbLabel: "Documentación",
      comingSoonDescription: "Esta página de documentación se está escribiendo.",
      comingSoonTitle: "Próximamente",
      metaDescription:
        "Primeros pasos, guía de autoalojamiento, referencia de la API y resumen de la arquitectura.",
      title: "Documentación",
    },
    footer: {
      appsHeading: "Apps",
      blogLabel: "Blog",
      builtByLabel: "Creado por Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Documentación",
      featuresLabel: "Funciones",
      inDevelopmentLabel: "En desarrollo",
      legalHeading: "Legal",
      openSourceHeading: "Código abierto",
      operatedByLabel: "Operado por SAMO DANNI EOOD",
      pricingLabel: "Precios",
      privacyPolicyLabel: "Política de privacidad",
      productHeading: "Producto",
      selfHostingGuideLabel: "Guía de autoalojamiento",
      supportLabel: "Soporte",
      termsOfServiceLabel: "Términos del servicio",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "Las personas se agrupan como nuevas en su primer día de repaso o recurrentes si ya habían repasado antes. Un repaso se cuenta cuando alguien elige Again, Hard, Good o Easy en una tarjeta.",
        dailyUniqueUsersChartTitle: "Personas que repasan cada día: nuevas y recurrentes",
        dateRangeLabel: "Rango de fechas",
        daysInRangeLabel: "Días en el rango",
        description:
          "Consulta la actividad diaria agregada de repasos en la web, iOS y Android. Las cifras publicadas son recuentos agregados y no exponen el contenido de las tarjetas, las direcciones de correo electrónico ni los historiales de estudio individuales.",
        eyebrow: "Actividad",
        lastUpdatedLabel: "Última actualización",
        peakDailyUniqueUsersLabel: "Pico diario de usuarios únicos",
        peakDailyVolumeLabel: "Pico diario de volumen",
        platformActivityChartDescription:
          "Un repaso se cuenta cuando alguien elige Again, Hard, Good o Easy en una tarjeta. Los recuentos se agrupan por plataforma.",
        platformActivityChartTitle: "Repasos diarios por plataforma",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        reviewUserCohortLabels: {
          new: "Nuevos",
          returning: "Recurrentes",
        },
        reviewDateAxisLabel: "Fecha de repaso",
        reviewEventsAxisLabel: "Repasos",
        rawSnapshotLabel: "Datos sin procesar (JSON)",
        sourceLabel: "Ver datos sin procesar (JSON)",
        title: "Actividad de Nibomo",
        totalReviewEventsLabel: "Repasos totales",
        uniqueUsersAxisLabel: "Personas",
        usersWithReviewEventsLabel: "Personas que han repasado",
      },
      agentHintDescription:
        "Conecta tu agente de IA por MCP: añade el servidor de Nibomo a Claude, Cursor o cualquier cliente MCP y podrá leer, crear y editar tus tarjetas.",
      aiAgentSectionLabel: "PARA AGENTES DE IA",
      appPreviewAlt:
        "Pantallas de Nibomo con repaso, resultados, progreso, borrador con IA y lista de tarjetas.",
      appPreviewAriaLabel: "Vista previa de la app",
      appPreviewLabel: "VISTA PREVIA DE LA APP",
      humanSectionLabel: "PARA PERSONAS",
    },
    legal: {
      lastUpdatedLabel: "Última actualización",
    },
    locale: {
      switcherAriaLabel: "Selector de idioma",
    },
    localeSuggestion: {
      actionLabel: "Abrir la versión en español",
      dismissLabel: "Cerrar sugerencia de idioma",
      message: "Esta página está disponible en español.",
    },
    menuToggleLabel: "Abrir menú",
    navigation: {
      blog: "Blog",
      dashboards: "Actividad",
      docs: "Docs",
      features: "Funciones",
      pricing: "Precios",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Escanéalo desde tu teléfono",
      webApp: "App web",
    },
  },
  ar: {
    analyticsConsentBanner: {
      allow: "السماح",
      decline: "الرفض",
      error: "لم تنجح العملية. حاول مرة أخرى.",
      label: "ملفات تعريف الارتباط للتحليلات",
      message: "نستخدم ملف تعريف ارتباط ووسائل تخزين أخرى في المتصفح لقياس كيفية استخدام الموقع. قبل اختيارك، لا يُخزِّن هذا الموقع شيئًا على هذا الجهاز ولا يُرسِل أي شيء يعرّف بك.",
      privacyPolicy: "سياسة الخصوصية",
    },
    analyticsConsentWithdrawal: {
      close: "إغلاق",
      link: "ملفات تعريف الارتباط للتحليلات",
      off: "متوقف",
      on: "مفعّل",
      title: "التحليلات",
      toggleDescription: "عند إيقافه، لا يمنح هذا الموقع هذا المتصفح أي معرّف ولا يخزّن شيئًا لأغراض التحليلات.",
      toggleTitle: "السماح بملفات تعريف الارتباط للتحليلات",
    },
    auth: {
      logIn: "تسجيل الدخول",
      openApp: "فتح التطبيق",
      signUpFree: "التسجيل مجانًا",
      startStudyingFree: "ابدأ الدراسة مجانًا",
    },
    blog: {
      breadcrumbLabel: "المدونة",
      byPrefix: "بواسطة",
      empty: "ستتوفر مقالات قريبًا.",
      metaDescription: "تحديثات ودروس وأفكار حول Nibomo.",
      notFoundDescription: "مقالة المدونة هذه غير موجودة.",
      notFoundTitle: "غير موجود",
      readNextHeading: "اقرأ التالي",
      title: "المدونة",
    },
    breadcrumbs: {
      ariaLabel: "مسار التنقل",
      homeLabel: "الرئيسية",
    },
    copyCodeField: {
      copied: "تم النسخ",
      copy: "نسخ",
      copyFailed: "فشل النسخ",
    },
    cta: {
      activityHeading: "هل أنت مستعد لبدء مراجعة بطاقاتك؟",
      heading:
        "تعلّم أكثر وانسَ أقل مع بطاقات مجانية بالتكرار المتباعد",
      buttonLabel: "ابدأ الدراسة مجانًا",
      featuresHeading: "أنشئ بطاقات أفضل وراجعها في الوقت المناسب.",
    },
    docs: {
      breadcrumbLabel: "التوثيق",
      comingSoonDescription: "يتم إعداد صفحة التوثيق هذه الآن.",
      comingSoonTitle: "قريبًا",
      metaDescription:
        "البدء السريع، دليل الاستضافة الذاتية، مرجع API، ونظرة عامة على البنية.",
      title: "التوثيق",
    },
    footer: {
      appsHeading: "التطبيقات",
      blogLabel: "المدونة",
      builtByLabel: "بناء Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "التوثيق",
      featuresLabel: "الميزات",
      inDevelopmentLabel: "قيد التطوير",
      legalHeading: "قانوني",
      openSourceHeading: "مفتوح المصدر",
      operatedByLabel: "تديره SAMO DANNI EOOD",
      pricingLabel: "الأسعار",
      privacyPolicyLabel: "سياسة الخصوصية",
      productHeading: "المنتج",
      selfHostingGuideLabel: "دليل الاستضافة الذاتية",
      supportLabel: "الدعم",
      termsOfServiceLabel: "شروط الخدمة",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "يُصنّف المراجعون إلى جدد في أول يوم مراجعة لهم أو عائدين إذا سبق لهم أن راجعوا. تُحتسب المراجعة عند اختيار Again أو Hard أو Good أو Easy على بطاقة.",
        dailyUniqueUsersChartTitle: "المراجعون يوميًا: الجدد والعائدون",
        dateRangeLabel: "النطاق الزمني",
        daysInRangeLabel: "الأيام في النطاق",
        description:
          "اطّلع على نشاط المراجعة اليومي الإجمالي عبر الويب وiOS وAndroid. الأرقام المنشورة هي أعداد إجمالية ولا تكشف محتوى البطاقات أو عناوين البريد الإلكتروني أو سجلات الدراسة الفردية.",
        eyebrow: "النشاط",
        lastUpdatedLabel: "آخر تحديث",
        peakDailyUniqueUsersLabel: "أعلى عدد يومي للمستخدمين الفريدين",
        peakDailyVolumeLabel: "أعلى حجم يومي",
        platformActivityChartDescription:
          "تُحتسب المراجعة عند اختيار Again أو Hard أو Good أو Easy على بطاقة. تُجمع الأعداد حسب المنصة.",
        platformActivityChartTitle: "المراجعات اليومية حسب المنصة",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "الويب",
        },
        reviewUserCohortLabels: {
          new: "مستخدمون جدد",
          returning: "مستخدمون عائدون",
        },
        reviewDateAxisLabel: "تاريخ المراجعة",
        reviewEventsAxisLabel: "المراجعات",
        rawSnapshotLabel: "البيانات الأولية (JSON)",
        sourceLabel: "عرض البيانات الأولية (JSON)",
        title: "نشاط Nibomo",
        totalReviewEventsLabel: "إجمالي المراجعات",
        uniqueUsersAxisLabel: "المراجعون",
        usersWithReviewEventsLabel: "المراجعون",
      },
      agentHintDescription:
        "اربط وكيل الذكاء الاصطناعي عبر MCP: أضف خادم Nibomo إلى Claude أو Cursor أو أي عميل MCP، وسيتمكن من قراءة بطاقاتك وإنشائها وتحريرها.",
      aiAgentSectionLabel: "لوكلاء الذكاء الاصطناعي",
      appPreviewAlt:
        "شاشات Nibomo تعرض المراجعة والنتائج والتقدم ومسودة الذكاء الاصطناعي وقائمة البطاقات.",
      appPreviewAriaLabel: "معاينة التطبيق",
      appPreviewLabel: "معاينة التطبيق",
      humanSectionLabel: "للبشر",
    },
    legal: {
      lastUpdatedLabel: "آخر تحديث",
    },
    locale: {
      switcherAriaLabel: "مبدّل اللغة",
    },
    localeSuggestion: {
      actionLabel: "افتح النسخة العربية",
      dismissLabel: "إغلاق اقتراح اللغة",
      message: "هذه الصفحة متوفرة بالعربية.",
    },
    menuToggleLabel: "تبديل القائمة",
    navigation: {
      blog: "المدونة",
      dashboards: "النشاط",
      docs: "التوثيق",
      features: "الميزات",
      pricing: "الأسعار",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "امسحه ضوئيًا من هاتفك",
      webApp: "تطبيق الويب",
    },
  },
  de: {
    analyticsConsentBanner: {
      allow: "Erlauben",
      decline: "Ablehnen",
      error: "Das hat nicht geklappt. Bitte versuche es erneut.",
      label: "Analyse-Cookies",
      message: "Wir nutzen ein Cookie und weiteren Browser-Speicher, um zu messen, wie die Website genutzt wird. Bis zu deiner Wahl speichert diese Website nichts auf diesem Gerät und sendet nichts, was dich identifiziert.",
      privacyPolicy: "Datenschutzerklärung",
    },
    analyticsConsentWithdrawal: {
      close: "Schließen",
      link: "Analyse-Cookies",
      off: "Aus",
      on: "An",
      title: "Analyse",
      toggleDescription: "Wenn dies aus ist, gibt diese Website diesem Browser keine Kennung und speichert nichts für Analysen.",
      toggleTitle: "Analyse-Cookies erlauben",
    },
    auth: {
      logIn: "Anmelden",
      openApp: "App öffnen",
      signUpFree: "Kostenlos starten",
      startStudyingFree: "Kostenlos lernen",
    },
    blog: {
      breadcrumbLabel: "Blog",
      byPrefix: "Von",
      empty: "Beiträge folgen in Kürze.",
      metaDescription: "Updates, Anleitungen und Einblicke zu Nibomo.",
      notFoundDescription: "Dieser Blogbeitrag existiert nicht.",
      notFoundTitle: "Nicht gefunden",
      readNextHeading: "Weiterlesen",
      title: "Blog",
    },
    breadcrumbs: {
      ariaLabel: "Breadcrumb",
      homeLabel: "Start",
    },
    copyCodeField: {
      copied: "Kopiert",
      copy: "Kopieren",
      copyFailed: "Kopieren fehlgeschlagen",
    },
    cta: {
      activityHeading: "Bereit, deine eigenen Karten zu wiederholen?",
      heading:
        "Lerne mehr und vergiss weniger mit kostenlosen Spaced-Repetition-Flashcards",
      buttonLabel: "Kostenlos lernen",
      featuresHeading:
        "Erstelle bessere Karten und wiederhole sie zum richtigen Zeitpunkt.",
    },
    docs: {
      breadcrumbLabel: "Dokumentation",
      comingSoonDescription: "Diese Dokumentationsseite wird gerade erstellt.",
      comingSoonTitle: "Demnächst",
      metaDescription:
        "Erste Schritte, Self-Hosting-Leitfaden, API-Referenz und Architekturüberblick.",
      title: "Dokumentation",
    },
    footer: {
      appsHeading: "Apps",
      blogLabel: "Blog",
      builtByLabel: "Entwickelt von Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Dokumentation",
      featuresLabel: "Funktionen",
      inDevelopmentLabel: "In Entwicklung",
      legalHeading: "Rechtliches",
      openSourceHeading: "Open Source",
      operatedByLabel: "Betrieben von SAMO DANNI EOOD",
      pricingLabel: "Preise",
      privacyPolicyLabel: "Datenschutz",
      productHeading: "Produkt",
      selfHostingGuideLabel: "Self-Hosting-Leitfaden",
      supportLabel: "Support",
      termsOfServiceLabel: "Nutzungsbedingungen",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "Lernende gelten am ersten Wiederholungstag als neu und danach als wiederkehrend. Eine Wiederholung wird gezählt, wenn auf einer Karte Again, Hard, Good oder Easy gewählt wird.",
        dailyUniqueUsersChartTitle: "Tägliche Lernende: neu vs. wiederkehrend",
        dateRangeLabel: "Zeitraum",
        daysInRangeLabel: "Tage im Zeitraum",
        description:
          "Sieh dir die aggregierte tägliche Wiederholungsaktivität im Web, auf iOS und Android an. Die veröffentlichten Zahlen sind aggregierte Zählwerte und legen weder Karteninhalte noch E-Mail-Adressen oder individuelle Lernverläufe offen.",
        eyebrow: "Aktivität",
        lastUpdatedLabel: "Zuletzt aktualisiert",
        peakDailyUniqueUsersLabel: "Höchste tägliche eindeutige Nutzer",
        peakDailyVolumeLabel: "Höchstes tägliches Volumen",
        platformActivityChartDescription:
          "Eine Wiederholung wird gezählt, wenn auf einer Karte Again, Hard, Good oder Easy gewählt wird. Die Zählwerte sind nach Plattform gruppiert.",
        platformActivityChartTitle: "Tägliche Wiederholungen nach Plattform",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        reviewUserCohortLabels: {
          new: "Neu",
          returning: "Wiederkehrend",
        },
        reviewDateAxisLabel: "Wiederholungsdatum",
        reviewEventsAxisLabel: "Wiederholungen",
        rawSnapshotLabel: "Rohdaten (JSON)",
        sourceLabel: "Rohdaten ansehen (JSON)",
        title: "Nibomo-Aktivität",
        totalReviewEventsLabel: "Wiederholungen gesamt",
        uniqueUsersAxisLabel: "Lernende",
        usersWithReviewEventsLabel: "Lernende",
      },
      agentHintDescription:
        "Verbinde deinen KI-Agenten über MCP: Füge den Nibomo-Server zu Claude, Cursor oder einem beliebigen MCP-Client hinzu, und er kann deine Karten lesen, erstellen und bearbeiten.",
      aiAgentSectionLabel: "FÜR KI-AGENTEN",
      appPreviewAlt:
        "Nibomo-Bildschirme mit Review, Ergebnissen, Fortschritt, KI-Entwurf und Kartenliste.",
      appPreviewAriaLabel: "App-Vorschau",
      appPreviewLabel: "APP-VORSCHAU",
      humanSectionLabel: "FÜR MENSCHEN",
    },
    legal: {
      lastUpdatedLabel: "Zuletzt aktualisiert",
    },
    locale: {
      switcherAriaLabel: "Sprachauswahl",
    },
    localeSuggestion: {
      actionLabel: "Deutsche Version öffnen",
      dismissLabel: "Sprachvorschlag schließen",
      message: "Diese Seite ist auf Deutsch verfügbar.",
    },
    menuToggleLabel: "Menü umschalten",
    navigation: {
      blog: "Blog",
      dashboards: "Aktivität",
      docs: "Doku",
      features: "Funktionen",
      pricing: "Preise",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Mit dem Handy scannen",
      webApp: "Web-App",
    },
  },
  hi: {
    analyticsConsentBanner: {
      allow: "अनुमति दें",
      decline: "मना करें",
      error: "यह नहीं हो पाया। फिर से कोशिश करें।",
      label: "एनालिटिक्स कुकीज़",
      message: "साइट कैसे इस्तेमाल होती है यह मापने के लिए हम एक कुकी और ब्राउज़र का कुछ और स्टोरेज इस्तेमाल करते हैं। आपके चुनने तक यह साइट इस डिवाइस पर कुछ भी सेव नहीं करती और आपकी पहचान बताने वाला कुछ भी नहीं भेजती।",
      privacyPolicy: "गोपनीयता नीति",
    },
    analyticsConsentWithdrawal: {
      close: "बंद करें",
      link: "एनालिटिक्स कुकीज़",
      off: "बंद",
      on: "चालू",
      title: "एनालिटिक्स",
      toggleDescription: "बंद होने पर यह साइट इस ब्राउज़र को कोई पहचानकर्ता नहीं देती और एनालिटिक्स के लिए कुछ भी सेव नहीं करती।",
      toggleTitle: "एनालिटिक्स कुकीज़ की अनुमति दें",
    },
    auth: {
      logIn: "लॉग इन",
      openApp: "ऐप खोलें",
      signUpFree: "मुफ़्त शुरू करें",
      startStudyingFree: "मुफ़्त पढ़ाई शुरू करें",
    },
    blog: {
      breadcrumbLabel: "ब्लॉग",
      byPrefix: "द्वारा",
      empty: "पोस्ट जल्द आएंगी।",
      metaDescription: "Nibomo के बारे में अपडेट, गाइड और जानकारी।",
      notFoundDescription: "यह ब्लॉग पोस्ट मौजूद नहीं है।",
      notFoundTitle: "नहीं मिला",
      readNextHeading: "आगे पढ़ें",
      title: "ब्लॉग",
    },
    breadcrumbs: {
      ariaLabel: "ब्रेडक्रंब",
      homeLabel: "होम",
    },
    copyCodeField: {
      copied: "कॉपी हो गया",
      copy: "कॉपी करें",
      copyFailed: "कॉपी नहीं हुआ",
    },
    cta: {
      activityHeading: "अपने कार्ड दोहराना शुरू करने के लिए तैयार हैं?",
      heading:
        "मुफ़्त स्पेस्ड रिपिटीशन फ़्लैशकार्ड से बेहतर सीखें और कम भूलें",
      buttonLabel: "मुफ़्त पढ़ाई शुरू करें",
      featuresHeading:
        "बेहतर कार्ड बनाएँ और उन्हें सही समय पर दोहराएँ।",
    },
    docs: {
      breadcrumbLabel: "डॉक्स",
      comingSoonDescription: "यह डॉक्स पेज अभी लिखा जा रहा है।",
      comingSoonTitle: "जल्द आ रहा है",
      metaDescription:
        "शुरुआत, self-hosting गाइड, API रेफ़रेंस और architecture overview.",
      title: "डॉक्यूमेंटेशन",
    },
    footer: {
      appsHeading: "ऐप्स",
      blogLabel: "ब्लॉग",
      builtByLabel: "Kirill Markin द्वारा बनाया गया",
      copyrightLabel: "Nibomo",
      documentationLabel: "डॉक्यूमेंटेशन",
      featuresLabel: "फ़ीचर्स",
      inDevelopmentLabel: "विकास में",
      legalHeading: "कानूनी",
      openSourceHeading: "ओपन सोर्स",
      operatedByLabel: "SAMO DANNI EOOD द्वारा संचालित",
      pricingLabel: "कीमत",
      privacyPolicyLabel: "प्राइवेसी पॉलिसी",
      productHeading: "प्रोडक्ट",
      selfHostingGuideLabel: "Self-hosting गाइड",
      supportLabel: "सपोर्ट",
      termsOfServiceLabel: "सेवा की शर्तें",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "पहले रिव्यू के दिन लोगों को नया और उसके बाद वापस आने वाला माना जाता है। कार्ड पर Again, Hard, Good या Easy चुनने पर एक रिव्यू गिना जाता है।",
        dailyUniqueUsersChartTitle: "रोज़ाना रिव्यू करने वाले: नए और वापस आने वाले",
        dateRangeLabel: "तारीख़ की सीमा",
        daysInRangeLabel: "सीमा में दिन",
        description:
          "वेब, iOS और Android पर रोज़ की कुल रिव्यू गतिविधि देखें। प्रकाशित आंकड़े केवल कुल गिनती हैं; इनमें कार्ड का कॉन्टेंट, ईमेल पते या किसी व्यक्ति का पढ़ाई का इतिहास शामिल नहीं है।",
        eyebrow: "गतिविधि",
        lastUpdatedLabel: "आख़िरी अपडेट",
        peakDailyUniqueUsersLabel: "रोज़ाना रिव्यू करने वालों का शिखर",
        peakDailyVolumeLabel: "रोज़ाना रिव्यू का शिखर",
        platformActivityChartDescription:
          "कार्ड पर Again, Hard, Good या Easy चुनने पर एक रिव्यू गिना जाता है। गिनती को प्लैटफ़ॉर्म के हिसाब से समूहित किया गया है।",
        platformActivityChartTitle: "प्लैटफ़ॉर्म के हिसाब से रोज़ाना रिव्यू",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "वेब",
        },
        reviewUserCohortLabels: {
          new: "नए",
          returning: "वापस आने वाले",
        },
        reviewDateAxisLabel: "रिव्यू की तारीख़",
        reviewEventsAxisLabel: "रिव्यू",
        rawSnapshotLabel: "मूल डेटा (JSON)",
        sourceLabel: "मूल डेटा देखें (JSON)",
        title: "Nibomo गतिविधि",
        totalReviewEventsLabel: "कुल रिव्यू",
        uniqueUsersAxisLabel: "रिव्यू करने वाले",
        usersWithReviewEventsLabel: "रिव्यू करने वाले",
      },
      agentHintDescription:
        "अपने AI agent को MCP से कनेक्ट करें: Nibomo server को Claude, Cursor या किसी भी MCP client में जोड़ें और वह आपके cards पढ़, बना और संपादित कर सकता है।",
      aiAgentSectionLabel: "AI एजेंट्स के लिए",
      appPreviewAlt:
        "Nibomo की स्क्रीनें जिनमें review, results, progress, AI draft और cards list दिखाई देते हैं।",
      appPreviewAriaLabel: "ऐप प्रीव्यू",
      appPreviewLabel: "ऐप प्रीव्यू",
      humanSectionLabel: "लोगों के लिए",
    },
    legal: {
      lastUpdatedLabel: "आख़िरी अपडेट",
    },
    locale: {
      switcherAriaLabel: "भाषा चयन",
    },
    localeSuggestion: {
      actionLabel: "हिन्दी संस्करण खोलें",
      dismissLabel: "भाषा सुझाव बंद करें",
      message: "यह पेज हिन्दी में उपलब्ध है।",
    },
    menuToggleLabel: "मेनू खोलें",
    navigation: {
      blog: "ब्लॉग",
      dashboards: "गतिविधि",
      docs: "डॉक्स",
      features: "फ़ीचर्स",
      pricing: "कीमत",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "इसे अपने फ़ोन से स्कैन करें",
      webApp: "वेब ऐप",
    },
  },
  ja: {
    analyticsConsentBanner: {
      allow: "許可",
      decline: "拒否",
      error: "うまくいきませんでした。もう一度お試しください。",
      label: "分析用Cookie",
      message: "サイトの使われ方を把握するために、Cookieとブラウザーのその他の保存領域を使います。選ぶまで、このサイトはこの端末に何も保存せず、あなたを特定できるものも送信しません。",
      privacyPolicy: "プライバシーポリシー",
    },
    analyticsConsentWithdrawal: {
      close: "閉じる",
      link: "分析用Cookie",
      off: "オフ",
      on: "オン",
      title: "分析",
      toggleDescription: "オフのとき、このサイトはこのブラウザーに識別子を与えず、分析のために何も保存しません。",
      toggleTitle: "分析用Cookieを許可",
    },
    auth: {
      logIn: "ログイン",
      openApp: "アプリを開く",
      signUpFree: "無料で始める",
      startStudyingFree: "無料で学習を始める",
    },
    blog: {
      breadcrumbLabel: "ブログ",
      byPrefix: "著者",
      empty: "記事は準備中です。",
      metaDescription: "Nibomo に関する更新、ガイド、考察。",
      notFoundDescription: "このブログ記事は存在しません。",
      notFoundTitle: "見つかりません",
      readNextHeading: "次に読む",
      title: "ブログ",
    },
    breadcrumbs: {
      ariaLabel: "パンくず",
      homeLabel: "ホーム",
    },
    copyCodeField: {
      copied: "コピーしました",
      copy: "コピー",
      copyFailed: "コピーに失敗しました",
    },
    cta: {
      activityHeading: "自分のカードの復習を始めませんか？",
      heading:
        "無料の間隔反復フラッシュカードで、より深く学び、忘れにくくする",
      buttonLabel: "無料で学習を始める",
      featuresHeading:
        "より良いカードを作り、最適なタイミングで復習しましょう。",
    },
    docs: {
      breadcrumbLabel: "ドキュメント",
      comingSoonDescription: "このドキュメントページは準備中です。",
      comingSoonTitle: "近日公開",
      metaDescription:
        "始め方、セルフホスティングガイド、API リファレンス、アーキテクチャ概要。",
      title: "ドキュメント",
    },
    footer: {
      appsHeading: "アプリ",
      blogLabel: "ブログ",
      builtByLabel: "Kirill Markin が開発",
      copyrightLabel: "Nibomo",
      documentationLabel: "ドキュメント",
      featuresLabel: "機能",
      inDevelopmentLabel: "開発中",
      legalHeading: "法務",
      openSourceHeading: "オープンソース",
      operatedByLabel: "SAMO DANNI EOOD が運営",
      pricingLabel: "料金",
      privacyPolicyLabel: "プライバシーポリシー",
      productHeading: "プロダクト",
      selfHostingGuideLabel: "セルフホスティングガイド",
      supportLabel: "サポート",
      termsOfServiceLabel: "利用規約",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "初めてレビューした日は新規、それ以降はリピーターとして集計します。カードで Again、Hard、Good、Easy のいずれかを選ぶと、レビュー 1 回として数えられます。",
        dailyUniqueUsersChartTitle: "日別レビューユーザー：新規とリピーター",
        dateRangeLabel: "対象期間",
        daysInRangeLabel: "期間内の日数",
        description:
          "ウェブ、iOS、Android 全体の日別レビュー活動を集計値で確認できます。公開される数値は集計データであり、カードの内容、メールアドレス、個人の学習履歴は公開されません。",
        eyebrow: "アクティビティ",
        lastUpdatedLabel: "最終更新",
        peakDailyUniqueUsersLabel: "日別ユニークユーザーの最大値",
        peakDailyVolumeLabel: "日別ボリュームの最大値",
        platformActivityChartDescription:
          "カードで Again、Hard、Good、Easy のいずれかを選ぶと、レビュー 1 回として数えられます。集計値はプラットフォーム別に表示します。",
        platformActivityChartTitle: "プラットフォーム別の日別レビュー",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "ウェブ",
        },
        reviewUserCohortLabels: {
          new: "新規",
          returning: "リピーター",
        },
        reviewDateAxisLabel: "レビュー日",
        reviewEventsAxisLabel: "レビュー",
        rawSnapshotLabel: "生データ（JSON）",
        sourceLabel: "生データを見る（JSON）",
        title: "Nibomo のアクティビティ",
        totalReviewEventsLabel: "レビュー合計",
        uniqueUsersAxisLabel: "レビューユーザー",
        usersWithReviewEventsLabel: "レビューユーザー",
      },
      agentHintDescription:
        "AI エージェントを MCP で接続しましょう。Nibomo サーバーを Claude や Cursor など任意の MCP クライアントに追加すれば、カードの閲覧・作成・編集を任せられます。",
      aiAgentSectionLabel: "AI エージェント向け",
      appPreviewAlt:
        "レビュー、結果、進捗、AI 下書き、カード一覧を示す Nibomo の画面。",
      appPreviewAriaLabel: "アプリのプレビュー",
      appPreviewLabel: "アプリプレビュー",
      humanSectionLabel: "利用者向け",
    },
    legal: {
      lastUpdatedLabel: "最終更新",
    },
    locale: {
      switcherAriaLabel: "言語切替",
    },
    localeSuggestion: {
      actionLabel: "日本語版を開く",
      dismissLabel: "言語の提案を閉じる",
      message: "このページは日本語で利用できます。",
    },
    menuToggleLabel: "メニューを切り替える",
    navigation: {
      blog: "ブログ",
      dashboards: "アクティビティ",
      docs: "ドキュメント",
      features: "機能",
      pricing: "料金",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "スマホで読み取ってください",
      webApp: "ウェブアプリ",
    },
  },
  fr: {
    analyticsConsentBanner: {
      allow: "Autoriser",
      decline: "Refuser",
      error: "Ça n'a pas marché. Réessayez.",
      label: "Cookies de mesure",
      message: "Nous utilisons un cookie et d'autres stockages du navigateur pour mesurer l'usage du site. Avant votre choix, ce site ne stocke rien sur cet appareil et n'envoie rien qui vous identifie.",
      privacyPolicy: "Politique de confidentialité",
    },
    analyticsConsentWithdrawal: {
      close: "Fermer",
      link: "Cookies de mesure",
      off: "Désactivé",
      on: "Activé",
      title: "Mesure d'audience",
      toggleDescription: "Quand c'est désactivé, ce site ne donne aucun identifiant à ce navigateur et ne stocke rien à des fins de mesure.",
      toggleTitle: "Autoriser les cookies de mesure",
    },
    auth: {
      logIn: "Se connecter",
      openApp: "Ouvrir l'app",
      signUpFree: "S'inscrire gratuitement",
      startStudyingFree: "Commencer gratuitement",
    },
    blog: {
      breadcrumbLabel: "Blog",
      byPrefix: "Par",
      empty: "Les articles arrivent bientôt.",
      metaDescription: "Actualités, tutoriels et analyses sur Nibomo.",
      notFoundDescription: "Cet article de blog n'existe pas.",
      notFoundTitle: "Introuvable",
      readNextHeading: "À lire ensuite",
      title: "Blog",
    },
    breadcrumbs: {
      ariaLabel: "Fil d'Ariane",
      homeLabel: "Accueil",
    },
    copyCodeField: {
      copied: "Copié",
      copy: "Copier",
      copyFailed: "Échec de la copie",
    },
    cta: {
      activityHeading: "Prêt à réviser vos propres cartes ?",
      heading:
        "Apprenez plus et oubliez moins avec des flashcards gratuites à répétition espacée",
      buttonLabel: "Commencer gratuitement",
      featuresHeading:
        "Créez de meilleures cartes et révisez-les au bon moment.",
    },
    docs: {
      breadcrumbLabel: "Documentation",
      comingSoonDescription: "Cette page de documentation est en cours de rédaction.",
      comingSoonTitle: "Bientôt disponible",
      metaDescription:
        "Premiers pas, guide d'auto-hébergement, référence de l'API et aperçu de l'architecture.",
      title: "Documentation",
    },
    footer: {
      appsHeading: "Applications",
      blogLabel: "Blog",
      builtByLabel: "Créé par Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Documentation",
      featuresLabel: "Fonctionnalités",
      inDevelopmentLabel: "En développement",
      legalHeading: "Mentions légales",
      openSourceHeading: "Open source",
      operatedByLabel: "Exploité par SAMO DANNI EOOD",
      pricingLabel: "Tarifs",
      privacyPolicyLabel: "Politique de confidentialité",
      productHeading: "Produit",
      selfHostingGuideLabel: "Guide d'auto-hébergement",
      supportLabel: "Assistance",
      termsOfServiceLabel: "Conditions d'utilisation",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "Les personnes sont comptées comme nouvelles le jour de leur première révision, puis comme récurrentes. Une révision est comptée quand quelqu'un choisit À revoir, Difficile, Correct ou Facile sur une carte.",
        dailyUniqueUsersChartTitle: "Personnes qui révisent chaque jour : nouvelles et récurrentes",
        dateRangeLabel: "Période",
        daysInRangeLabel: "Jours dans la période",
        description:
          "Consultez l'activité de révision quotidienne agrégée sur le web, iOS et Android. Les chiffres publiés sont des totaux agrégés et ne révèlent ni le contenu des cartes, ni les adresses e-mail, ni les historiques d'étude individuels.",
        eyebrow: "Activité",
        lastUpdatedLabel: "Dernière mise à jour",
        peakDailyUniqueUsersLabel: "Pic quotidien d'utilisateurs uniques",
        peakDailyVolumeLabel: "Pic quotidien de volume",
        platformActivityChartDescription:
          "Une révision est comptée quand quelqu'un choisit À revoir, Difficile, Correct ou Facile sur une carte. Les totaux sont groupés par plateforme.",
        platformActivityChartTitle: "Révisions quotidiennes par plateforme",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        reviewUserCohortLabels: {
          new: "Nouvelles",
          returning: "Récurrentes",
        },
        reviewDateAxisLabel: "Date de révision",
        reviewEventsAxisLabel: "Révisions",
        rawSnapshotLabel: "Données brutes (JSON)",
        sourceLabel: "Voir les données brutes (JSON)",
        title: "Activité de Nibomo",
        totalReviewEventsLabel: "Total des révisions",
        uniqueUsersAxisLabel: "Personnes",
        usersWithReviewEventsLabel: "Personnes ayant révisé",
      },
      agentHintDescription:
        "Connectez votre agent IA via MCP : ajoutez le serveur Nibomo à Claude, Cursor ou n'importe quel client MCP, et il pourra lire, créer et modifier vos cartes.",
      aiAgentSectionLabel: "POUR LES AGENTS IA",
      appPreviewAlt:
        "Écrans de Nibomo avec la révision, les résultats, la progression, le brouillon IA et la liste des cartes.",
      appPreviewAriaLabel: "Aperçu de l'app",
      appPreviewLabel: "APERÇU DE L'APP",
      humanSectionLabel: "POUR LES HUMAINS",
    },
    legal: {
      lastUpdatedLabel: "Dernière mise à jour",
    },
    locale: {
      switcherAriaLabel: "Sélecteur de langue",
    },
    localeSuggestion: {
      actionLabel: "Ouvrir la version française",
      dismissLabel: "Fermer la suggestion de langue",
      message: "Cette page est disponible en français.",
    },
    menuToggleLabel: "Ouvrir le menu",
    navigation: {
      blog: "Blog",
      dashboards: "Activité",
      docs: "Docs",
      features: "Fonctionnalités",
      pricing: "Tarifs",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Scannez-le depuis votre téléphone",
      webApp: "App web",
    },
  },
  pt: {
    analyticsConsentBanner: {
      allow: "Permitir",
      decline: "Recusar",
      error: "Não deu certo. Tente de novo.",
      label: "Cookies de análise",
      message: "Usamos um cookie e outros armazenamentos do navegador para medir como o site é usado. Até você escolher, este site não guarda nada neste dispositivo e não envia nada que identifique você.",
      privacyPolicy: "Política de Privacidade",
    },
    analyticsConsentWithdrawal: {
      close: "Fechar",
      link: "Cookies de análise",
      off: "Desligado",
      on: "Ligado",
      title: "Análise",
      toggleDescription: "Quando está desligado, este site não dá nenhum identificador a este navegador e não guarda nada para análise.",
      toggleTitle: "Permitir cookies de análise",
    },
    auth: {
      logIn: "Entrar",
      openApp: "Abrir o app",
      signUpFree: "Criar conta grátis",
      startStudyingFree: "Comece a estudar grátis",
    },
    blog: {
      breadcrumbLabel: "Blog",
      byPrefix: "Por",
      empty: "Os posts chegam em breve.",
      metaDescription: "Novidades, tutoriais e análises sobre o Nibomo.",
      notFoundDescription: "Este post do blog não existe.",
      notFoundTitle: "Não encontrado",
      readNextHeading: "Leia a seguir",
      title: "Blog",
    },
    breadcrumbs: {
      ariaLabel: "Trilha de navegação",
      homeLabel: "Início",
    },
    copyCodeField: {
      copied: "Copiado",
      copy: "Copiar",
      copyFailed: "Falha ao copiar",
    },
    cta: {
      activityHeading: "Pronto para revisar seus próprios cartões?",
      heading:
        "Aprenda mais e esqueça menos com flashcards gratuitos de repetição espaçada",
      buttonLabel: "Comece a estudar grátis",
      featuresHeading:
        "Crie cartões melhores e revise cada um na hora certa.",
    },
    docs: {
      breadcrumbLabel: "Documentação",
      comingSoonDescription: "Esta página de documentação está sendo escrita.",
      comingSoonTitle: "Em breve",
      metaDescription:
        "Primeiros passos, guia de auto-hospedagem, referência da API e visão geral da arquitetura.",
      title: "Documentação",
    },
    footer: {
      appsHeading: "Apps",
      blogLabel: "Blog",
      builtByLabel: "Criado por Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Documentação",
      featuresLabel: "Recursos",
      inDevelopmentLabel: "Em desenvolvimento",
      legalHeading: "Jurídico",
      openSourceHeading: "Código aberto",
      operatedByLabel: "Operado por SAMO DANNI EOOD",
      pricingLabel: "Preços",
      privacyPolicyLabel: "Política de Privacidade",
      productHeading: "Produto",
      selfHostingGuideLabel: "Guia de auto-hospedagem",
      supportLabel: "Suporte",
      termsOfServiceLabel: "Termos de Serviço",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "As pessoas contam como novas no primeiro dia em que revisam e como recorrentes se já tinham revisado antes. Uma revisão é contada quando alguém escolhe De novo, Difícil, Bom ou Fácil em um cartão.",
        dailyUniqueUsersChartTitle: "Pessoas que revisam por dia: novas e recorrentes",
        dateRangeLabel: "Período",
        daysInRangeLabel: "Dias no período",
        description:
          "Veja a atividade diária agregada de revisões na web, no iOS e no Android. Os números publicados são contagens agregadas e não expõem o conteúdo dos cartões, endereços de e-mail nem históricos de estudo individuais.",
        eyebrow: "Atividade",
        lastUpdatedLabel: "Última atualização",
        peakDailyUniqueUsersLabel: "Pico diário de usuários únicos",
        peakDailyVolumeLabel: "Pico diário de volume",
        platformActivityChartDescription:
          "Uma revisão é contada quando alguém escolhe De novo, Difícil, Bom ou Fácil em um cartão. As contagens são agrupadas por plataforma.",
        platformActivityChartTitle: "Revisões diárias por plataforma",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        reviewUserCohortLabels: {
          new: "Novas",
          returning: "Recorrentes",
        },
        reviewDateAxisLabel: "Data da revisão",
        reviewEventsAxisLabel: "Revisões",
        rawSnapshotLabel: "Dados brutos (JSON)",
        sourceLabel: "Ver dados brutos (JSON)",
        title: "Atividade do Nibomo",
        totalReviewEventsLabel: "Total de revisões",
        uniqueUsersAxisLabel: "Pessoas",
        usersWithReviewEventsLabel: "Pessoas que revisaram",
      },
      agentHintDescription:
        "Conecte seu agente de IA via MCP: adicione o servidor do Nibomo ao Claude, ao Cursor ou a qualquer cliente MCP e ele poderá ler, criar e editar seus cartões.",
      aiAgentSectionLabel: "PARA AGENTES DE IA",
      appPreviewAlt:
        "Telas do Nibomo com revisão, resultados, progresso, rascunho com IA e lista de cartões.",
      appPreviewAriaLabel: "Prévia do app",
      appPreviewLabel: "PRÉVIA DO APP",
      humanSectionLabel: "PARA PESSOAS",
    },
    legal: {
      lastUpdatedLabel: "Última atualização",
    },
    locale: {
      switcherAriaLabel: "Seletor de idioma",
    },
    localeSuggestion: {
      actionLabel: "Abrir a versão em português",
      dismissLabel: "Fechar sugestão de idioma",
      message: "Esta página está disponível em português.",
    },
    menuToggleLabel: "Abrir menu",
    navigation: {
      blog: "Blog",
      dashboards: "Atividade",
      docs: "Docs",
      features: "Recursos",
      pricing: "Preços",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Escaneie com o celular",
      webApp: "App web",
    },
  },
  ru: {
    analyticsConsentBanner: {
      allow: "Разрешить",
      decline: "Отклонить",
      error: "Не получилось. Попробуйте ещё раз.",
      label: "Аналитические cookie",
      message: "Мы используем cookie и другое хранилище браузера, чтобы понимать, как пользуются сайтом. До вашего выбора этот сайт ничего не сохраняет на этом устройстве и не отправляет ничего, что вас идентифицирует.",
      privacyPolicy: "Политика конфиденциальности",
    },
    analyticsConsentWithdrawal: {
      close: "Закрыть",
      link: "Аналитические cookie",
      off: "Выкл.",
      on: "Вкл.",
      title: "Аналитика",
      toggleDescription: "Когда выключено, сайт не выдаёт этому браузеру идентификатор и ничего не сохраняет для аналитики.",
      toggleTitle: "Разрешить аналитические cookie",
    },
    auth: {
      logIn: "Войти",
      openApp: "Открыть приложение",
      signUpFree: "Начать бесплатно",
      startStudyingFree: "Начать учиться бесплатно",
    },
    blog: {
      breadcrumbLabel: "Блог",
      byPrefix: "Автор",
      empty: "Публикации скоро появятся.",
      metaDescription: "Обновления, руководства и заметки о Nibomo.",
      notFoundDescription: "Эта запись блога не существует.",
      notFoundTitle: "Не найдено",
      readNextHeading: "Читать дальше",
      title: "Блог",
    },
    breadcrumbs: {
      ariaLabel: "Хлебные крошки",
      homeLabel: "Главная",
    },
    copyCodeField: {
      copied: "Скопировано",
      copy: "Копировать",
      copyFailed: "Не удалось скопировать",
    },
    cta: {
      activityHeading: "Готовы начать повторять свои карточки?",
      heading:
        "Учитесь больше и забывайте меньше с бесплатными карточками для интервального повторения",
      buttonLabel: "Начать учиться бесплатно",
      featuresHeading:
        "Создавайте качественные карточки и повторяйте их в нужное время.",
    },
    docs: {
      breadcrumbLabel: "Документация",
      comingSoonDescription: "Эта страница документации сейчас готовится.",
      comingSoonTitle: "Скоро",
      metaDescription:
        "Быстрый старт, руководство по self-hosting, API и обзор архитектуры.",
      title: "Документация",
    },
    footer: {
      appsHeading: "Приложения",
      blogLabel: "Блог",
      builtByLabel: "Создано Кириллом Маркиным",
      copyrightLabel: "Nibomo",
      documentationLabel: "Документация",
      featuresLabel: "Возможности",
      inDevelopmentLabel: "В разработке",
      legalHeading: "Правовая информация",
      openSourceHeading: "Open Source",
      operatedByLabel: "Сервисом управляет SAMO DANNI EOOD",
      pricingLabel: "Цены",
      privacyPolicyLabel: "Политика конфиденциальности",
      productHeading: "Продукт",
      selfHostingGuideLabel: "Руководство по self-hosting",
      supportLabel: "Поддержка",
      termsOfServiceLabel: "Условия использования",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "В первый день повторений пользователи считаются новыми, а затем — вернувшимися. Повторение засчитывается при выборе Again, Hard, Good или Easy на карточке.",
        dailyUniqueUsersChartTitle: "Пользователи с повторениями по дням: новые и вернувшиеся",
        dateRangeLabel: "Период",
        daysInRangeLabel: "Дней в периоде",
        description:
          "Посмотрите агрегированную дневную активность повторений в веб-версии, iOS и Android. Публикуются только суммарные показатели: они не раскрывают содержимое карточек, адреса электронной почты и индивидуальную историю обучения.",
        eyebrow: "Активность",
        lastUpdatedLabel: "Последнее обновление",
        peakDailyUniqueUsersLabel: "Пик дневных уникальных пользователей",
        peakDailyVolumeLabel: "Пиковый дневной объём",
        platformActivityChartDescription:
          "Повторение засчитывается при выборе Again, Hard, Good или Easy на карточке. Показатели сгруппированы по платформам.",
        platformActivityChartTitle: "Ежедневные повторения по платформам",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Веб",
        },
        reviewUserCohortLabels: {
          new: "Новые",
          returning: "Вернувшиеся",
        },
        reviewDateAxisLabel: "Дата повторения",
        reviewEventsAxisLabel: "Повторения",
        rawSnapshotLabel: "Исходные данные (JSON)",
        sourceLabel: "Посмотреть исходные данные (JSON)",
        title: "Активность Nibomo",
        totalReviewEventsLabel: "Всего повторений",
        uniqueUsersAxisLabel: "Пользователи",
        usersWithReviewEventsLabel: "Пользователи с повторениями",
      },
      agentHintDescription:
        "Подключите своего AI-агента по MCP: добавьте сервер Nibomo в Claude, Cursor или любой MCP-клиент, и он сможет читать, создавать и редактировать ваши карточки.",
      aiAgentSectionLabel: "ДЛЯ AI-АГЕНТОВ",
      appPreviewAlt:
        "Экраны Nibomo с повторением, результатами, прогрессом, AI-черновиком и списком карточек.",
      appPreviewAriaLabel: "Предпросмотр приложения",
      appPreviewLabel: "ПРЕДПРОСМОТР ПРИЛОЖЕНИЯ",
      humanSectionLabel: "ДЛЯ ЛЮДЕЙ",
    },
    legal: {
      lastUpdatedLabel: "Последнее обновление",
    },
    locale: {
      switcherAriaLabel: "Переключатель языка",
    },
    localeSuggestion: {
      actionLabel: "Открыть русскую версию",
      dismissLabel: "Закрыть предложение языка",
      message: "Эта страница доступна на русском.",
    },
    menuToggleLabel: "Открыть меню",
    navigation: {
      blog: "Блог",
      dashboards: "Активность",
      docs: "Документация",
      features: "Возможности",
      pricing: "Цены",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Отсканируйте с телефона",
      webApp: "Веб-приложение",
    },
  },
  zh: {
    analyticsConsentBanner: {
      allow: "允许",
      decline: "拒绝",
      error: "没有成功，请再试一次。",
      label: "分析 Cookie",
      message: "我们使用一个 Cookie 和浏览器的其他存储来了解网站的使用情况。在你做出选择之前，本网站不会在此设备上存储任何内容，也不会发送任何能识别你的信息。",
      privacyPolicy: "隐私政策",
    },
    analyticsConsentWithdrawal: {
      close: "关闭",
      link: "分析 Cookie",
      off: "关闭",
      on: "开启",
      title: "分析",
      toggleDescription: "关闭后，本网站不会给此浏览器任何标识符，也不会为分析存储任何内容。",
      toggleTitle: "允许分析 Cookie",
    },
    auth: {
      logIn: "登录",
      openApp: "打开应用",
      signUpFree: "免费开始",
      startStudyingFree: "免费开始学习",
    },
    blog: {
      breadcrumbLabel: "博客",
      byPrefix: "作者",
      empty: "文章即将发布。",
      metaDescription: "关于 Nibomo 的更新、教程和思考。",
      notFoundDescription: "这篇博客文章不存在。",
      notFoundTitle: "未找到",
      readNextHeading: "继续阅读",
      title: "博客",
    },
    breadcrumbs: {
      ariaLabel: "面包屑导航",
      homeLabel: "首页",
    },
    copyCodeField: {
      copied: "已复制",
      copy: "复制",
      copyFailed: "复制失败",
    },
    cta: {
      activityHeading: "准备好开始复习自己的卡片了吗？",
      heading: "用免费的间隔重复闪卡学得更多，忘得更少",
      buttonLabel: "免费开始学习",
      featuresHeading: "创建更好的卡片，并在合适的时间复习。",
    },
    docs: {
      breadcrumbLabel: "文档",
      comingSoonDescription: "该文档页面正在编写中。",
      comingSoonTitle: "即将推出",
      metaDescription: "快速开始、自托管指南、API 参考和架构概览。",
      title: "文档",
    },
    footer: {
      appsHeading: "应用",
      blogLabel: "博客",
      builtByLabel: "由 Kirill Markin 构建",
      copyrightLabel: "Nibomo",
      documentationLabel: "文档",
      featuresLabel: "功能",
      inDevelopmentLabel: "开发中",
      legalHeading: "法律",
      openSourceHeading: "开源",
      operatedByLabel: "由 SAMO DANNI EOOD 运营",
      pricingLabel: "价格",
      privacyPolicyLabel: "隐私政策",
      productHeading: "产品",
      selfHostingGuideLabel: "自托管指南",
      supportLabel: "支持",
      termsOfServiceLabel: "服务条款",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "用户首次复习当天计为新用户，之后计为回访用户。在卡片上选择 Again、Hard、Good 或 Easy 时，会计为一次复习。",
        dailyUniqueUsersChartTitle: "每日复习用户：新用户与回访用户",
        dateRangeLabel: "日期范围",
        daysInRangeLabel: "范围内天数",
        description:
          "查看网页、iOS 和 Android 上汇总的每日复习活动。发布的数字均为汇总计数，不会公开卡片内容、电子邮件地址或个人学习记录。",
        eyebrow: "活动",
        lastUpdatedLabel: "最后更新",
        peakDailyUniqueUsersLabel: "每日独立用户峰值",
        peakDailyVolumeLabel: "每日复习量峰值",
        platformActivityChartDescription:
          "在卡片上选择 Again、Hard、Good 或 Easy 时，会计为一次复习。计数按平台分组。",
        platformActivityChartTitle: "各平台每日复习次数",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "网页",
        },
        reviewUserCohortLabels: {
          new: "新用户",
          returning: "回访用户",
        },
        reviewDateAxisLabel: "复习日期",
        reviewEventsAxisLabel: "复习次数",
        rawSnapshotLabel: "原始数据（JSON）",
        sourceLabel: "查看原始数据（JSON）",
        title: "Nibomo 活动",
        totalReviewEventsLabel: "复习总数",
        uniqueUsersAxisLabel: "复习用户",
        usersWithReviewEventsLabel: "复习用户",
      },
      agentHintDescription:
        "通过 MCP 连接你的 AI agent：把 Nibomo 服务器添加到 Claude、Cursor 或任意 MCP 客户端，它就能为你读取、创建和编辑卡片。",
      aiAgentSectionLabel: "面向 AI 智能体",
      appPreviewAlt:
        "Nibomo 应用界面，展示复习、结果、进度、AI 草稿和卡片列表流程。",
      appPreviewAriaLabel: "应用预览",
      appPreviewLabel: "应用预览",
      humanSectionLabel: "面向用户",
    },
    legal: {
      lastUpdatedLabel: "最后更新",
    },
    locale: {
      switcherAriaLabel: "语言切换",
    },
    localeSuggestion: {
      actionLabel: "打开简体中文版",
      dismissLabel: "关闭语言建议",
      message: "此页面有简体中文版本。",
    },
    menuToggleLabel: "切换菜单",
    navigation: {
      blog: "博客",
      dashboards: "活动",
      docs: "文档",
      features: "功能",
      pricing: "价格",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "用手机扫描",
      webApp: "网页应用",
    },
  },
  it: {
    analyticsConsentBanner: {
      allow: "Consenti",
      decline: "Rifiuta",
      error: "Non ha funzionato. Riprova.",
      label: "Cookie di analisi",
      message: "Usiamo un cookie e altra archiviazione del browser per misurare come viene usato il sito. Finché non scegli, questo sito non memorizza nulla su questo dispositivo e non invia nulla che ti identifichi.",
      privacyPolicy: "Informativa sulla privacy",
    },
    analyticsConsentWithdrawal: {
      close: "Chiudi",
      link: "Cookie di analisi",
      off: "Disattivo",
      on: "Attivo",
      title: "Analisi",
      toggleDescription: "Quando è disattivato, questo sito non assegna alcun identificatore a questo browser e non memorizza nulla per le analisi.",
      toggleTitle: "Consenti i cookie di analisi",
    },
    auth: {
      logIn: "Accedi",
      openApp: "Apri l'app",
      signUpFree: "Registrati gratis",
      startStudyingFree: "Inizia a studiare gratis",
    },
    blog: {
      breadcrumbLabel: "Blog",
      byPrefix: "Di",
      empty: "Gli articoli arrivano presto.",
      metaDescription: "Novità, guide e approfondimenti su Nibomo.",
      notFoundDescription: "Questo articolo del blog non esiste.",
      notFoundTitle: "Non trovato",
      readNextHeading: "Da leggere dopo",
      title: "Blog",
    },
    breadcrumbs: {
      ariaLabel: "Percorso di navigazione",
      homeLabel: "Home",
    },
    copyCodeField: {
      copied: "Copiato",
      copy: "Copia",
      copyFailed: "Copia non riuscita",
    },
    cta: {
      activityHeading: "Pronto a iniziare a ripassare le tue carte?",
      heading:
        "Impara di più e dimentica di meno con flashcard gratuite a ripetizione dilazionata",
      buttonLabel: "Inizia a studiare gratis",
      featuresHeading:
        "Crea carte migliori e ripassale al momento giusto.",
    },
    docs: {
      breadcrumbLabel: "Documentazione",
      comingSoonDescription: "Questa pagina della documentazione è in preparazione.",
      comingSoonTitle: "In arrivo",
      metaDescription:
        "Primi passi, guida al self-hosting, riferimento API e panoramica dell'architettura.",
      title: "Documentazione",
    },
    footer: {
      appsHeading: "App",
      blogLabel: "Blog",
      builtByLabel: "Creato da Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Documentazione",
      featuresLabel: "Funzionalità",
      inDevelopmentLabel: "In sviluppo",
      legalHeading: "Note legali",
      openSourceHeading: "Open Source",
      operatedByLabel: "Gestito da SAMO DANNI EOOD",
      pricingLabel: "Prezzi",
      privacyPolicyLabel: "Informativa sulla privacy",
      productHeading: "Prodotto",
      selfHostingGuideLabel: "Guida al self-hosting",
      supportLabel: "Supporto",
      termsOfServiceLabel: "Termini di servizio",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "Chi ripassa conta come nuovo nel primo giorno di ripasso e come di ritorno se aveva già ripassato prima. Un ripasso viene conteggiato quando qualcuno sceglie Di nuovo, Difficile, Bene o Facile su una carta.",
        dailyUniqueUsersChartTitle: "Utenti che ripassano ogni giorno: nuovi e di ritorno",
        dateRangeLabel: "Intervallo di date",
        daysInRangeLabel: "Giorni nell'intervallo",
        description:
          "Guarda l'attività di ripasso giornaliera aggregata su web, iOS e Android. Le cifre pubblicate sono conteggi aggregati e non rivelano il contenuto delle carte, gli indirizzi email o lo storico di studio delle singole persone.",
        eyebrow: "Attività",
        lastUpdatedLabel: "Ultimo aggiornamento",
        peakDailyUniqueUsersLabel: "Picco di utenti unici giornalieri",
        peakDailyVolumeLabel: "Picco di volume giornaliero",
        platformActivityChartDescription:
          "Un ripasso viene conteggiato quando qualcuno sceglie Di nuovo, Difficile, Bene o Facile su una carta. I conteggi sono raggruppati per piattaforma.",
        platformActivityChartTitle: "Ripassi giornalieri per piattaforma",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        reviewUserCohortLabels: {
          new: "Nuovi",
          returning: "Di ritorno",
        },
        reviewDateAxisLabel: "Data del ripasso",
        reviewEventsAxisLabel: "Ripassi",
        rawSnapshotLabel: "Dati grezzi (JSON)",
        sourceLabel: "Vedi i dati grezzi (JSON)",
        title: "Attività di Nibomo",
        totalReviewEventsLabel: "Ripassi totali",
        uniqueUsersAxisLabel: "Utenti",
        usersWithReviewEventsLabel: "Utenti che ripassano",
      },
      agentHintDescription:
        "Collega il tuo agente AI via MCP: aggiungi il server Nibomo a Claude, Cursor o a qualsiasi client MCP e potrà leggere, creare e modificare le tue carte.",
      aiAgentSectionLabel: "PER GLI AGENTI AI",
      appPreviewAlt:
        "Schermate di Nibomo con ripasso, risultati, progressi, bozza AI ed elenco delle carte.",
      appPreviewAriaLabel: "Anteprima dell'app",
      appPreviewLabel: "ANTEPRIMA DELL'APP",
      humanSectionLabel: "PER LE PERSONE",
    },
    legal: {
      lastUpdatedLabel: "Ultimo aggiornamento",
    },
    locale: {
      switcherAriaLabel: "Selettore della lingua",
    },
    localeSuggestion: {
      actionLabel: "Apri la versione italiana",
      dismissLabel: "Chiudi il suggerimento di lingua",
      message: "Questa pagina è disponibile in italiano.",
    },
    menuToggleLabel: "Apri il menu",
    navigation: {
      blog: "Blog",
      dashboards: "Attività",
      docs: "Docs",
      features: "Funzionalità",
      pricing: "Prezzi",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Scansiona dal telefono",
      webApp: "App web",
    },
  },
  ko: {
    analyticsConsentBanner: {
      allow: "허용",
      decline: "거부",
      error: "처리하지 못했습니다. 다시 시도해 주세요.",
      label: "분석 쿠키",
      message: "사이트가 어떻게 사용되는지 측정하기 위해 쿠키와 브라우저 저장소를 사용합니다. 선택하기 전까지는 이 기기에 아무것도 저장하지 않고, 신원을 알 수 있는 정보도 보내지 않습니다.",
      privacyPolicy: "개인정보 처리방침",
    },
    analyticsConsentWithdrawal: {
      close: "닫기",
      link: "분석 쿠키",
      off: "끔",
      on: "켬",
      title: "분석",
      toggleDescription: "꺼져 있으면 이 사이트는 이 브라우저에 식별자를 부여하지 않고 분석을 위해 아무것도 저장하지 않습니다.",
      toggleTitle: "분석 쿠키 허용",
    },
    auth: {
      logIn: "로그인",
      openApp: "앱 열기",
      signUpFree: "무료로 가입",
      startStudyingFree: "무료로 학습 시작",
    },
    blog: {
      breadcrumbLabel: "블로그",
      byPrefix: "작성자",
      empty: "글이 곧 올라옵니다.",
      metaDescription: "Nibomo 관련 소식과 사용법, 인사이트.",
      notFoundDescription: "이 블로그 글은 존재하지 않습니다.",
      notFoundTitle: "찾을 수 없음",
      readNextHeading: "다음 글",
      title: "블로그",
    },
    breadcrumbs: {
      ariaLabel: "탐색 경로",
      homeLabel: "홈",
    },
    copyCodeField: {
      copied: "복사됨",
      copy: "복사",
      copyFailed: "복사 실패",
    },
    cta: {
      activityHeading: "내 카드로 복습을 시작해 볼까요?",
      heading:
        "무료 간격 반복 플래시카드로 더 많이 배우고 덜 잊어버리세요",
      buttonLabel: "무료로 학습 시작",
      featuresHeading:
        "더 좋은 카드를 만들고 알맞은 때에 복습하세요.",
    },
    docs: {
      breadcrumbLabel: "문서",
      comingSoonDescription: "이 문서 페이지는 작성 중입니다.",
      comingSoonTitle: "준비 중",
      metaDescription:
        "시작 가이드, 셀프 호스팅 가이드, API 레퍼런스, 아키텍처 개요.",
      title: "문서",
    },
    footer: {
      appsHeading: "앱",
      blogLabel: "블로그",
      builtByLabel: "Kirill Markin 제작",
      copyrightLabel: "Nibomo",
      documentationLabel: "문서",
      featuresLabel: "기능",
      inDevelopmentLabel: "개발 중",
      legalHeading: "법적 고지",
      openSourceHeading: "오픈 소스",
      operatedByLabel: "SAMO DANNI EOOD 운영",
      pricingLabel: "요금",
      privacyPolicyLabel: "개인정보처리방침",
      productHeading: "제품",
      selfHostingGuideLabel: "셀프 호스팅 가이드",
      supportLabel: "지원",
      termsOfServiceLabel: "이용약관",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "복습한 사람은 첫 복습일에는 신규로, 이전에 복습한 적이 있으면 재방문으로 분류됩니다. 카드에서 다시, 어려움, 좋음, 쉬움 중 하나를 고르면 복습 1회로 집계됩니다.",
        dailyUniqueUsersChartTitle: "일별 복습 사용자: 신규와 재방문",
        dateRangeLabel: "기간",
        daysInRangeLabel: "기간 내 일수",
        description:
          "웹, iOS, Android 전체의 일별 복습 활동을 집계해서 볼 수 있습니다. 공개되는 수치는 집계값이며 카드 내용, 이메일 주소, 개인 학습 기록은 드러나지 않습니다.",
        eyebrow: "활동",
        lastUpdatedLabel: "마지막 업데이트",
        peakDailyUniqueUsersLabel: "일별 순 사용자 최대치",
        peakDailyVolumeLabel: "일별 복습량 최대치",
        platformActivityChartDescription:
          "카드에서 다시, 어려움, 좋음, 쉬움 중 하나를 고르면 복습 1회로 집계됩니다. 집계는 플랫폼별로 나뉩니다.",
        platformActivityChartTitle: "플랫폼별 일별 복습",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "웹",
        },
        reviewUserCohortLabels: {
          new: "신규",
          returning: "재방문",
        },
        reviewDateAxisLabel: "복습 날짜",
        reviewEventsAxisLabel: "복습",
        rawSnapshotLabel: "원본 데이터(JSON)",
        sourceLabel: "원본 데이터 보기(JSON)",
        title: "Nibomo 활동",
        totalReviewEventsLabel: "전체 복습",
        uniqueUsersAxisLabel: "복습 사용자",
        usersWithReviewEventsLabel: "복습 사용자",
      },
      agentHintDescription:
        "MCP로 AI 에이전트를 연결하세요. Claude, Cursor 등 MCP 클라이언트에 Nibomo 서버를 추가하면 에이전트가 카드를 읽고, 만들고, 수정할 수 있습니다.",
      aiAgentSectionLabel: "AI 에이전트용",
      appPreviewAlt:
        "복습, 채점 결과, 진행 상황, AI 초안, 카드 목록 화면을 보여 주는 Nibomo 앱.",
      appPreviewAriaLabel: "앱 미리 보기",
      appPreviewLabel: "앱 미리 보기",
      humanSectionLabel: "사람용",
    },
    legal: {
      lastUpdatedLabel: "마지막 업데이트",
    },
    locale: {
      switcherAriaLabel: "언어 전환",
    },
    localeSuggestion: {
      actionLabel: "한국어 버전 열기",
      dismissLabel: "언어 추천 닫기",
      message: "이 페이지는 한국어로 볼 수 있습니다.",
    },
    menuToggleLabel: "메뉴 전환",
    navigation: {
      blog: "블로그",
      dashboards: "활동",
      docs: "문서",
      features: "기능",
      pricing: "요금",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "휴대폰으로 스캔하세요",
      webApp: "웹 앱",
    },
  },
  id: {
    analyticsConsentBanner: {
      allow: "Izinkan",
      decline: "Tolak",
      error: "Tindakan itu tidak berhasil. Silakan coba lagi.",
      label: "Cookie analitik",
      message: "Kami memakai cookie dan penyimpanan peramban lain untuk mengukur cara situs ini dipakai. Sebelum Anda memilih, situs ini tidak menyimpan apa pun di perangkat ini dan tidak mengirim apa pun yang mengidentifikasi Anda.",
      privacyPolicy: "Kebijakan Privasi",
    },
    analyticsConsentWithdrawal: {
      close: "Tutup",
      link: "Cookie analitik",
      off: "Nonaktif",
      on: "Aktif",
      title: "Analitik",
      toggleDescription: "Saat nonaktif, situs ini tidak memberi pengenal apa pun pada peramban ini dan tidak menyimpan apa pun untuk analitik.",
      toggleTitle: "Izinkan cookie analitik",
    },
    auth: {
      logIn: "Masuk",
      openApp: "Buka Aplikasi",
      signUpFree: "Daftar Gratis",
      startStudyingFree: "Mulai belajar gratis",
    },
    blog: {
      breadcrumbLabel: "Blog",
      byPrefix: "Oleh",
      empty: "Artikel segera hadir.",
      metaDescription: "Pembaruan, panduan, dan catatan tentang Nibomo.",
      notFoundDescription: "Artikel blog ini tidak ada.",
      notFoundTitle: "Tidak Ditemukan",
      readNextHeading: "Baca berikutnya",
      title: "Blog",
    },
    breadcrumbs: {
      ariaLabel: "Remah roti",
      homeLabel: "Beranda",
    },
    copyCodeField: {
      copied: "Tersalin",
      copy: "Salin",
      copyFailed: "Gagal menyalin",
    },
    cta: {
      activityHeading: "Siap mulai meninjau kartu Anda sendiri?",
      heading:
        "Belajar lebih banyak, lupa lebih sedikit dengan kartu pengulangan berjarak gratis",
      buttonLabel: "Mulai belajar gratis",
      featuresHeading:
        "Buat kartu yang lebih baik dan tinjau pada waktu yang tepat.",
    },
    docs: {
      breadcrumbLabel: "Dokumentasi",
      comingSoonDescription: "Halaman dokumentasi ini sedang ditulis.",
      comingSoonTitle: "Segera Hadir",
      metaDescription:
        "Langkah awal, panduan self-hosting, referensi API, dan gambaran arsitektur.",
      title: "Dokumentasi",
    },
    footer: {
      appsHeading: "Aplikasi",
      blogLabel: "Blog",
      builtByLabel: "Dibuat oleh Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Dokumentasi",
      featuresLabel: "Fitur",
      inDevelopmentLabel: "Dalam Pengembangan",
      legalHeading: "Legal",
      openSourceHeading: "Open Source",
      operatedByLabel: "Dioperasikan oleh SAMO DANNI EOOD",
      pricingLabel: "Harga",
      privacyPolicyLabel: "Kebijakan Privasi",
      productHeading: "Produk",
      selfHostingGuideLabel: "Panduan Self-Hosting",
      supportLabel: "Dukungan",
      termsOfServiceLabel: "Ketentuan Layanan",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "Peninjau dihitung sebagai baru pada hari tinjauan pertamanya, atau kembali jika sudah pernah meninjau. Satu tinjauan dihitung saat seseorang memilih Ulangi, Sulit, Bagus, atau Mudah pada sebuah kartu.",
        dailyUniqueUsersChartTitle: "Peninjau harian: baru vs kembali",
        dateRangeLabel: "Rentang tanggal",
        daysInRangeLabel: "Hari dalam rentang",
        description:
          "Lihat aktivitas tinjauan harian secara gabungan di web, iOS, dan Android. Angka yang dipublikasikan adalah jumlah gabungan dan tidak menampilkan isi kartu, alamat email, atau riwayat belajar perorangan.",
        eyebrow: "Aktivitas",
        lastUpdatedLabel: "Terakhir diperbarui",
        peakDailyUniqueUsersLabel: "Puncak pengguna unik harian",
        peakDailyVolumeLabel: "Puncak volume harian",
        platformActivityChartDescription:
          "Satu tinjauan dihitung saat seseorang memilih Ulangi, Sulit, Bagus, atau Mudah pada sebuah kartu. Jumlahnya dikelompokkan menurut platform.",
        platformActivityChartTitle: "Tinjauan harian menurut platform",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        reviewUserCohortLabels: {
          new: "Baru",
          returning: "Kembali",
        },
        reviewDateAxisLabel: "Tanggal tinjauan",
        reviewEventsAxisLabel: "Tinjauan",
        rawSnapshotLabel: "Data mentah (JSON)",
        sourceLabel: "Lihat data mentah (JSON)",
        title: "Aktivitas Nibomo",
        totalReviewEventsLabel: "Total tinjauan",
        uniqueUsersAxisLabel: "Peninjau",
        usersWithReviewEventsLabel: "Peninjau",
      },
      agentHintDescription:
        "Hubungkan agen AI Anda lewat MCP: tambahkan server Nibomo ke Claude, Cursor, atau klien MCP mana pun, lalu agen itu bisa membaca, membuat, dan mengedit kartu Anda.",
      aiAgentSectionLabel: "UNTUK AGEN AI",
      appPreviewAlt:
        "Layar aplikasi Nibomo yang menampilkan tinjauan, hasil jawaban, progres, draf AI, dan daftar kartu.",
      appPreviewAriaLabel: "Pratinjau aplikasi",
      appPreviewLabel: "PRATINJAU APLIKASI",
      humanSectionLabel: "UNTUK MANUSIA",
    },
    legal: {
      lastUpdatedLabel: "Terakhir diperbarui",
    },
    locale: {
      switcherAriaLabel: "Pengalih bahasa",
    },
    localeSuggestion: {
      actionLabel: "Buka versi bahasa Indonesia",
      dismissLabel: "Tutup saran bahasa",
      message: "Halaman ini tersedia dalam bahasa Indonesia.",
    },
    menuToggleLabel: "Alihkan menu",
    navigation: {
      blog: "Blog",
      dashboards: "Aktivitas",
      docs: "Dokumentasi",
      features: "Fitur",
      pricing: "Harga",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Pindai dari ponsel Anda",
      webApp: "Aplikasi Web",
    },
  },
  tr: {
    analyticsConsentBanner: {
      allow: "İzin ver",
      decline: "Reddet",
      error: "Bu işlem tamamlanamadı. Lütfen tekrar deneyin.",
      label: "Analiz çerezleri",
      message: "Sitenin nasıl kullanıldığını ölçmek için bir çerez ve diğer tarayıcı depolamasını kullanıyoruz. Siz seçim yapana kadar bu site bu cihaza hiçbir şey kaydetmez ve sizi tanımlayan hiçbir şey göndermez.",
      privacyPolicy: "Gizlilik Politikası",
    },
    analyticsConsentWithdrawal: {
      close: "Kapat",
      link: "Analiz çerezleri",
      off: "Kapalı",
      on: "Açık",
      title: "Analiz",
      toggleDescription: "Kapalıyken bu site bu tarayıcıya hiçbir tanımlayıcı vermez ve analiz için hiçbir şey saklamaz.",
      toggleTitle: "Analiz çerezlerine izin ver",
    },
    auth: {
      logIn: "Giriş Yap",
      openApp: "Uygulamayı Aç",
      signUpFree: "Ücretsiz Kaydol",
      startStudyingFree: "Ücretsiz çalışmaya başla",
    },
    blog: {
      breadcrumbLabel: "Blog",
      byPrefix: "Yazan",
      empty: "Yazılar yakında.",
      metaDescription: "Nibomo hakkında güncellemeler, rehberler ve notlar.",
      notFoundDescription: "Bu blog yazısı mevcut değil.",
      notFoundTitle: "Bulunamadı",
      readNextHeading: "Bunları da okuyun",
      title: "Blog",
    },
    breadcrumbs: {
      ariaLabel: "Sayfa yolu",
      homeLabel: "Ana sayfa",
    },
    copyCodeField: {
      copied: "Kopyalandı",
      copy: "Kopyala",
      copyFailed: "Kopyalanamadı",
    },
    cta: {
      activityHeading: "Kendi kartlarınızı tekrar etmeye hazır mısınız?",
      heading:
        "Ücretsiz aralıklı tekrar bilgi kartlarıyla daha çok öğrenin, daha az unutun",
      buttonLabel: "Ücretsiz çalışmaya başla",
      featuresHeading:
        "Daha iyi kartlar oluşturun ve onları doğru zamanda tekrar edin.",
    },
    docs: {
      breadcrumbLabel: "Dokümanlar",
      comingSoonDescription: "Bu dokümantasyon sayfası hazırlanıyor.",
      comingSoonTitle: "Yakında",
      metaDescription:
        "Başlangıç rehberi, kendi sunucunuzda barındırma rehberi, API referansı ve mimari özeti.",
      title: "Dokümantasyon",
    },
    footer: {
      appsHeading: "Uygulamalar",
      blogLabel: "Blog",
      builtByLabel: "Kirill Markin tarafından geliştirildi",
      copyrightLabel: "Nibomo",
      documentationLabel: "Dokümantasyon",
      featuresLabel: "Özellikler",
      inDevelopmentLabel: "Geliştiriliyor",
      legalHeading: "Yasal",
      openSourceHeading: "Açık Kaynak",
      operatedByLabel: "SAMO DANNI EOOD tarafından işletiliyor",
      pricingLabel: "Fiyatlandırma",
      privacyPolicyLabel: "Gizlilik Politikası",
      productHeading: "Ürün",
      selfHostingGuideLabel: "Kendi Sunucunuzda Barındırma Rehberi",
      supportLabel: "Destek",
      termsOfServiceLabel: "Kullanım Koşulları",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "Tekrar yapanlar ilk tekrar günlerinde yeni, daha önce tekrar yaptılarsa geri dönen olarak gruplanır. Bir kart Yeniden, Zor, İyi veya Kolay olarak değerlendirildiğinde bir tekrar sayılır.",
        dailyUniqueUsersChartTitle: "Günlük tekrar yapanlar: yeni ve geri dönen",
        dateRangeLabel: "Tarih aralığı",
        daysInRangeLabel: "Aralıktaki gün sayısı",
        description:
          "Web, iOS ve Android genelindeki toplu günlük tekrar etkinliğini görün. Yayımlanan rakamlar toplu sayımlardır; kart içeriğini, e-posta adreslerini veya kişisel çalışma geçmişlerini açığa çıkarmaz.",
        eyebrow: "Etkinlik",
        lastUpdatedLabel: "Son güncelleme",
        peakDailyUniqueUsersLabel: "En yüksek günlük tekil kullanıcı",
        peakDailyVolumeLabel: "En yüksek günlük hacim",
        platformActivityChartDescription:
          "Bir kart Yeniden, Zor, İyi veya Kolay olarak değerlendirildiğinde bir tekrar sayılır. Sayımlar platforma göre gruplanır.",
        platformActivityChartTitle: "Platforma göre günlük tekrarlar",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        reviewUserCohortLabels: {
          new: "Yeni",
          returning: "Geri dönen",
        },
        reviewDateAxisLabel: "Tekrar tarihi",
        reviewEventsAxisLabel: "Tekrarlar",
        rawSnapshotLabel: "Ham veri (JSON)",
        sourceLabel: "Ham veriyi görüntüle (JSON)",
        title: "Nibomo etkinliği",
        totalReviewEventsLabel: "Toplam tekrar",
        uniqueUsersAxisLabel: "Tekrar yapanlar",
        usersWithReviewEventsLabel: "Tekrar yapanlar",
      },
      agentHintDescription:
        "AI agent'ınızı MCP üzerinden bağlayın: Nibomo sunucusunu Claude, Cursor veya herhangi bir MCP istemcisine ekleyin; kartlarınızı okuyabilir, oluşturabilir ve düzenleyebilir.",
      aiAgentSectionLabel: "AI AGENT'LAR İÇİN",
      appPreviewAlt:
        "Nibomo uygulamasının tekrar, yanıt sonuçları, ilerleme, AI taslağı ve kart listesi ekranları.",
      appPreviewAriaLabel: "Uygulama önizlemesi",
      appPreviewLabel: "UYGULAMA ÖNİZLEMESİ",
      humanSectionLabel: "İNSANLAR İÇİN",
    },
    legal: {
      lastUpdatedLabel: "Son güncelleme",
    },
    locale: {
      switcherAriaLabel: "Dil seçici",
    },
    localeSuggestion: {
      actionLabel: "Türkçe sürümü aç",
      dismissLabel: "Dil önerisini kapat",
      message: "Bu sayfa Türkçe olarak mevcut.",
    },
    menuToggleLabel: "Menüyü aç/kapat",
    navigation: {
      blog: "Blog",
      dashboards: "Etkinlik",
      docs: "Dokümanlar",
      features: "Özellikler",
      pricing: "Fiyatlandırma",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Telefonunuzla tarayın",
      webApp: "Web Uygulaması",
    },
  },
  nl: {
    analyticsConsentBanner: {
      allow: "Toestaan",
      decline: "Weigeren",
      error: "Dat is niet gelukt. Probeer het opnieuw.",
      label: "Analytische cookies",
      message: "We gebruiken een cookie en andere browseropslag om te meten hoe de site wordt gebruikt. Tot je een keuze maakt, slaat deze site niets op dit apparaat op en stuurt hij niets waarmee je te herkennen bent.",
      privacyPolicy: "Privacybeleid",
    },
    analyticsConsentWithdrawal: {
      close: "Sluiten",
      link: "Analytische cookies",
      off: "Uit",
      on: "Aan",
      title: "Analyse",
      toggleDescription: "Als dit uit staat, geeft deze site deze browser geen identificatie en slaat hij niets op voor analyse.",
      toggleTitle: "Analytische cookies toestaan",
    },
    auth: {
      logIn: "Aanmelden",
      openApp: "App openen",
      signUpFree: "Gratis registreren",
      startStudyingFree: "Gratis beginnen met leren",
    },
    blog: {
      breadcrumbLabel: "Blog",
      byPrefix: "Door",
      empty: "Berichten volgen binnenkort.",
      metaDescription: "Updates, handleidingen en inzichten over Nibomo.",
      notFoundDescription: "Dit blogbericht bestaat niet.",
      notFoundTitle: "Niet gevonden",
      readNextHeading: "Lees verder",
      title: "Blog",
    },
    breadcrumbs: {
      ariaLabel: "Kruimelpad",
      homeLabel: "Home",
    },
    copyCodeField: {
      copied: "Gekopieerd",
      copy: "Kopiëren",
      copyFailed: "Kopiëren mislukt",
    },
    cta: {
      activityHeading: "Klaar om je eigen kaarten te herhalen?",
      heading:
        "Leer meer en vergeet minder met gratis flashcards met gespreide herhaling",
      buttonLabel: "Gratis beginnen met leren",
      featuresHeading:
        "Maak betere kaarten en herhaal ze op het juiste moment.",
    },
    docs: {
      breadcrumbLabel: "Docs",
      comingSoonDescription: "Deze documentatiepagina wordt nog geschreven.",
      comingSoonTitle: "Binnenkort",
      metaDescription:
        "Aan de slag, handleiding voor selfhosting, API-referentie en architectuuroverzicht.",
      title: "Documentatie",
    },
    footer: {
      appsHeading: "Apps",
      blogLabel: "Blog",
      builtByLabel: "Gemaakt door Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Documentatie",
      featuresLabel: "Functies",
      inDevelopmentLabel: "In ontwikkeling",
      legalHeading: "Juridisch",
      openSourceHeading: "Open Source",
      operatedByLabel: "Beheerd door SAMO DANNI EOOD",
      pricingLabel: "Prijzen",
      privacyPolicyLabel: "Privacybeleid",
      productHeading: "Product",
      selfHostingGuideLabel: "Handleiding voor selfhosting",
      supportLabel: "Support",
      termsOfServiceLabel: "Gebruiksvoorwaarden",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "Leerders tellen als nieuw op hun eerste herhaaldag en als terugkerend als ze al eerder hebben herhaald. Een herhaling telt mee wanneer iemand op een kaart Opnieuw, Moeilijk, Goed of Makkelijk kiest.",
        dailyUniqueUsersChartTitle: "Leerders per dag: nieuw en terugkerend",
        dateRangeLabel: "Periode",
        daysInRangeLabel: "Dagen in periode",
        description:
          "Bekijk de dagelijkse herhaalactiviteit op het web, iOS en Android in totalen. De gepubliceerde cijfers zijn totalen en tonen geen kaartinhoud, e-mailadressen of individuele leergeschiedenis.",
        eyebrow: "Activiteit",
        lastUpdatedLabel: "Laatst bijgewerkt",
        peakDailyUniqueUsersLabel: "Piek unieke gebruikers per dag",
        peakDailyVolumeLabel: "Piekvolume per dag",
        platformActivityChartDescription:
          "Een herhaling telt mee wanneer iemand op een kaart Opnieuw, Moeilijk, Goed of Makkelijk kiest. De aantallen zijn gegroepeerd per platform.",
        platformActivityChartTitle: "Dagelijkse herhalingen per platform",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        reviewUserCohortLabels: {
          new: "Nieuw",
          returning: "Terugkerend",
        },
        reviewDateAxisLabel: "Herhaaldatum",
        reviewEventsAxisLabel: "Herhalingen",
        rawSnapshotLabel: "Ruwe data (JSON)",
        sourceLabel: "Ruwe data bekijken (JSON)",
        title: "Nibomo-activiteit",
        totalReviewEventsLabel: "Totaal herhalingen",
        uniqueUsersAxisLabel: "Leerders",
        usersWithReviewEventsLabel: "Leerders",
      },
      agentHintDescription:
        "Verbind je AI-agent via MCP: voeg de Nibomo-server toe aan Claude, Cursor of een andere MCP-client en hij kan je kaarten lezen, maken en bewerken.",
      aiAgentSectionLabel: "VOOR AI-AGENTS",
      appPreviewAlt:
        "Nibomo-schermen met herhalen, antwoordresultaten, voortgang, AI-concept en kaartenlijst.",
      appPreviewAriaLabel: "App-voorbeeld",
      appPreviewLabel: "APP-VOORBEELD",
      humanSectionLabel: "VOOR MENSEN",
    },
    legal: {
      lastUpdatedLabel: "Laatst bijgewerkt",
    },
    locale: {
      switcherAriaLabel: "Taalkeuze",
    },
    localeSuggestion: {
      actionLabel: "Nederlandse versie openen",
      dismissLabel: "Taalsuggestie sluiten",
      message: "Deze pagina is beschikbaar in het Nederlands.",
    },
    menuToggleLabel: "Menu openen of sluiten",
    navigation: {
      blog: "Blog",
      dashboards: "Activiteit",
      docs: "Docs",
      features: "Functies",
      pricing: "Prijzen",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Scan met je telefoon",
      webApp: "Web-app",
    },
  },
  pl: {
    analyticsConsentBanner: {
      allow: "Zezwól",
      decline: "Odrzuć",
      error: "Nie udało się. Spróbuj ponownie.",
      label: "Pliki cookie analityczne",
      message: "Używamy pliku cookie i innej pamięci przeglądarki, aby mierzyć, jak korzysta się z witryny. Do czasu Twojego wyboru witryna nic nie zapisuje na tym urządzeniu i nie wysyła niczego, co Cię identyfikuje.",
      privacyPolicy: "Polityka prywatności",
    },
    analyticsConsentWithdrawal: {
      close: "Zamknij",
      link: "Analityczne pliki cookie",
      off: "Wył.",
      on: "Wł.",
      title: "Analityka",
      toggleDescription: "Gdy jest wyłączone, witryna nie nadaje tej przeglądarce żadnego identyfikatora i nic nie zapisuje na potrzeby analityki.",
      toggleTitle: "Zezwalaj na analityczne pliki cookie",
    },
    auth: {
      logIn: "Zaloguj się",
      openApp: "Otwórz aplikację",
      signUpFree: "Załóż darmowe konto",
      startStudyingFree: "Zacznij się uczyć za darmo",
    },
    blog: {
      breadcrumbLabel: "Blog",
      byPrefix: "Autor",
      empty: "Wpisy pojawią się wkrótce.",
      metaDescription: "Aktualizacje, poradniki i przemyślenia o Nibomo.",
      notFoundDescription: "Ten wpis na blogu nie istnieje.",
      notFoundTitle: "Nie znaleziono",
      readNextHeading: "Czytaj dalej",
      title: "Blog",
    },
    breadcrumbs: {
      ariaLabel: "Ścieżka nawigacji",
      homeLabel: "Strona główna",
    },
    copyCodeField: {
      copied: "Skopiowano",
      copy: "Kopiuj",
      copyFailed: "Nie udało się skopiować",
    },
    cta: {
      activityHeading: "Gotowy, aby zacząć powtarzać własne karty?",
      heading:
        "Ucz się więcej i zapominaj mniej dzięki darmowym fiszkom z powtórkami rozłożonymi w czasie",
      buttonLabel: "Zacznij się uczyć za darmo",
      featuresHeading:
        "Twórz lepsze karty i powtarzaj je w odpowiednim momencie.",
    },
    docs: {
      breadcrumbLabel: "Dokumentacja",
      comingSoonDescription: "Ta strona dokumentacji jest w przygotowaniu.",
      comingSoonTitle: "Wkrótce",
      metaDescription:
        "Pierwsze kroki, przewodnik po self-hostingu, opis API i przegląd architektury.",
      title: "Dokumentacja",
    },
    footer: {
      appsHeading: "Aplikacje",
      blogLabel: "Blog",
      builtByLabel: "Twórca: Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Dokumentacja",
      featuresLabel: "Funkcje",
      inDevelopmentLabel: "W rozwoju",
      legalHeading: "Informacje prawne",
      openSourceHeading: "Open Source",
      operatedByLabel: "Operatorem jest SAMO DANNI EOOD",
      pricingLabel: "Cennik",
      privacyPolicyLabel: "Polityka prywatności",
      productHeading: "Produkt",
      selfHostingGuideLabel: "Przewodnik po self-hostingu",
      supportLabel: "Wsparcie",
      termsOfServiceLabel: "Warunki korzystania",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "Uczący się są liczeni jako nowi w pierwszym dniu powtórek, a później jako powracający. Powtórka jest liczona, gdy ktoś wybierze na karcie Jeszcze raz, Trudne, Dobre lub Łatwe.",
        dailyUniqueUsersChartTitle: "Uczący się dziennie: nowi i powracający",
        dateRangeLabel: "Zakres dat",
        daysInRangeLabel: "Dni w zakresie",
        description:
          "Zobacz zbiorczą dzienną aktywność powtórek w wersji webowej, na iOS i Androidzie. Publikowane liczby są danymi zbiorczymi i nie ujawniają treści kart, adresów e-mail ani indywidualnej historii nauki.",
        eyebrow: "Aktywność",
        lastUpdatedLabel: "Ostatnia aktualizacja",
        peakDailyUniqueUsersLabel: "Szczyt dziennych unikalnych użytkowników",
        peakDailyVolumeLabel: "Szczytowy dzienny wolumen",
        platformActivityChartDescription:
          "Powtórka jest liczona, gdy ktoś wybierze na karcie Jeszcze raz, Trudne, Dobre lub Łatwe. Liczby są pogrupowane według platformy.",
        platformActivityChartTitle: "Dzienne powtórki według platformy",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        reviewUserCohortLabels: {
          new: "Nowi",
          returning: "Powracający",
        },
        reviewDateAxisLabel: "Data powtórki",
        reviewEventsAxisLabel: "Powtórki",
        rawSnapshotLabel: "Dane surowe (JSON)",
        sourceLabel: "Zobacz dane surowe (JSON)",
        title: "Aktywność Nibomo",
        totalReviewEventsLabel: "Łącznie powtórek",
        uniqueUsersAxisLabel: "Uczący się",
        usersWithReviewEventsLabel: "Uczący się",
      },
      agentHintDescription:
        "Podłącz swojego agenta AI przez MCP: dodaj serwer Nibomo do Claude, Cursora lub dowolnego klienta MCP, a będzie mógł czytać, tworzyć i edytować Twoje karty.",
      aiAgentSectionLabel: "DLA AGENTÓW AI",
      appPreviewAlt:
        "Ekrany Nibomo z powtórką, wynikami odpowiedzi, postępem, szkicem AI i listą kart.",
      appPreviewAriaLabel: "Podgląd aplikacji",
      appPreviewLabel: "PODGLĄD APLIKACJI",
      humanSectionLabel: "DLA LUDZI",
    },
    legal: {
      lastUpdatedLabel: "Ostatnia aktualizacja",
    },
    locale: {
      switcherAriaLabel: "Przełącznik języka",
    },
    localeSuggestion: {
      actionLabel: "Otwórz polską wersję",
      dismissLabel: "Zamknij sugestię języka",
      message: "Ta strona jest dostępna po polsku.",
    },
    menuToggleLabel: "Przełącz menu",
    navigation: {
      blog: "Blog",
      dashboards: "Aktywność",
      docs: "Dokumentacja",
      features: "Funkcje",
      pricing: "Cennik",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Zeskanuj telefonem",
      webApp: "Aplikacja webowa",
    },
  },
  vi: {
    analyticsConsentBanner: {
      allow: "Cho phép",
      decline: "Từ chối",
      error: "Thao tác không thành công. Vui lòng thử lại.",
      label: "Cookie phân tích",
      message: "Chúng tôi dùng cookie và bộ nhớ trình duyệt khác để đo cách trang web được sử dụng. Cho đến khi bạn chọn, trang web không lưu gì trên thiết bị này và không gửi bất kỳ thông tin nào nhận dạng bạn.",
      privacyPolicy: "Chính sách quyền riêng tư",
    },
    analyticsConsentWithdrawal: {
      close: "Đóng",
      link: "Cookie phân tích",
      off: "Tắt",
      on: "Bật",
      title: "Phân tích",
      toggleDescription: "Khi tắt, trang web không cấp cho trình duyệt này bất kỳ mã nhận dạng nào và không lưu gì cho việc phân tích.",
      toggleTitle: "Cho phép cookie phân tích",
    },
    auth: {
      logIn: "Đăng nhập",
      openApp: "Mở ứng dụng",
      signUpFree: "Đăng ký miễn phí",
      startStudyingFree: "Học miễn phí ngay",
    },
    blog: {
      breadcrumbLabel: "Blog",
      byPrefix: "Bởi",
      empty: "Bài viết sẽ sớm có.",
      metaDescription: "Cập nhật, hướng dẫn và góc nhìn về Nibomo.",
      notFoundDescription: "Bài viết này không tồn tại.",
      notFoundTitle: "Không tìm thấy",
      readNextHeading: "Đọc tiếp",
      title: "Blog",
    },
    breadcrumbs: {
      ariaLabel: "Đường dẫn điều hướng",
      homeLabel: "Trang chủ",
    },
    copyCodeField: {
      copied: "Đã sao chép",
      copy: "Sao chép",
      copyFailed: "Sao chép thất bại",
    },
    cta: {
      activityHeading: "Sẵn sàng ôn tập thẻ của chính bạn chưa?",
      heading:
        "Học nhiều hơn và quên ít hơn với thẻ ghi nhớ lặp lại ngắt quãng miễn phí",
      buttonLabel: "Học miễn phí ngay",
      featuresHeading:
        "Tạo thẻ tốt hơn và ôn tập đúng lúc.",
    },
    docs: {
      breadcrumbLabel: "Tài liệu",
      comingSoonDescription: "Trang tài liệu này đang được viết.",
      comingSoonTitle: "Sắp có",
      metaDescription:
        "Bắt đầu, hướng dẫn tự lưu trữ, tài liệu API và tổng quan kiến trúc.",
      title: "Tài liệu",
    },
    footer: {
      appsHeading: "Ứng dụng",
      blogLabel: "Blog",
      builtByLabel: "Được xây dựng bởi Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Tài liệu",
      featuresLabel: "Tính năng",
      inDevelopmentLabel: "Đang phát triển",
      legalHeading: "Pháp lý",
      openSourceHeading: "Mã nguồn mở",
      operatedByLabel: "Vận hành bởi SAMO DANNI EOOD",
      pricingLabel: "Giá",
      privacyPolicyLabel: "Chính sách bảo mật",
      productHeading: "Sản phẩm",
      selfHostingGuideLabel: "Hướng dẫn tự lưu trữ",
      supportLabel: "Hỗ trợ",
      termsOfServiceLabel: "Điều khoản dịch vụ",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "Người ôn tập được tính là mới trong ngày ôn tập đầu tiên, và là quay lại nếu đã ôn tập trước đó. Một lượt ôn tập được tính khi ai đó chọn Làm lại, Khó, Tốt hoặc Dễ trên một thẻ.",
        dailyUniqueUsersChartTitle: "Người ôn tập mỗi ngày: mới và quay lại",
        dateRangeLabel: "Khoảng thời gian",
        daysInRangeLabel: "Số ngày trong khoảng",
        description:
          "Xem hoạt động ôn tập tổng hợp theo ngày trên web, iOS và Android. Các số liệu công bố đều là số liệu tổng hợp và không tiết lộ nội dung thẻ, địa chỉ email hay lịch sử học của từng người.",
        eyebrow: "Hoạt động",
        lastUpdatedLabel: "Cập nhật lần cuối",
        peakDailyUniqueUsersLabel: "Đỉnh người dùng duy nhất theo ngày",
        peakDailyVolumeLabel: "Đỉnh khối lượng theo ngày",
        platformActivityChartDescription:
          "Một lượt ôn tập được tính khi ai đó chọn Làm lại, Khó, Tốt hoặc Dễ trên một thẻ. Số liệu được nhóm theo nền tảng.",
        platformActivityChartTitle: "Lượt ôn tập mỗi ngày theo nền tảng",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        reviewUserCohortLabels: {
          new: "Mới",
          returning: "Quay lại",
        },
        reviewDateAxisLabel: "Ngày ôn tập",
        reviewEventsAxisLabel: "Lượt ôn tập",
        rawSnapshotLabel: "Dữ liệu thô (JSON)",
        sourceLabel: "Xem dữ liệu thô (JSON)",
        title: "Hoạt động của Nibomo",
        totalReviewEventsLabel: "Tổng lượt ôn tập",
        uniqueUsersAxisLabel: "Người ôn tập",
        usersWithReviewEventsLabel: "Người ôn tập",
      },
      agentHintDescription:
        "Kết nối AI agent của bạn qua MCP: thêm máy chủ Nibomo vào Claude, Cursor hoặc bất kỳ MCP client nào, và nó có thể đọc, tạo và sửa thẻ của bạn.",
      aiAgentSectionLabel: "DÀNH CHO AI AGENT",
      appPreviewAlt:
        "Các màn hình Nibomo hiển thị ôn tập, kết quả trả lời, tiến độ, bản nháp AI và danh sách thẻ.",
      appPreviewAriaLabel: "Xem trước ứng dụng",
      appPreviewLabel: "XEM TRƯỚC ỨNG DỤNG",
      humanSectionLabel: "DÀNH CHO CON NGƯỜI",
    },
    legal: {
      lastUpdatedLabel: "Cập nhật lần cuối",
    },
    locale: {
      switcherAriaLabel: "Bộ chọn ngôn ngữ",
    },
    localeSuggestion: {
      actionLabel: "Mở phiên bản tiếng Việt",
      dismissLabel: "Đóng gợi ý ngôn ngữ",
      message: "Trang này có sẵn bằng tiếng Việt.",
    },
    menuToggleLabel: "Bật/tắt menu",
    navigation: {
      blog: "Blog",
      dashboards: "Hoạt động",
      docs: "Tài liệu",
      features: "Tính năng",
      pricing: "Giá",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Quét bằng điện thoại của bạn",
      webApp: "Ứng dụng web",
    },
  },
  th: {
    analyticsConsentBanner: {
      allow: "อนุญาต",
      decline: "ไม่อนุญาต",
      error: "ดำเนินการไม่สำเร็จ โปรดลองอีกครั้ง",
      label: "คุกกี้วิเคราะห์",
      message: "เราใช้คุกกี้และพื้นที่จัดเก็บอื่นในเบราว์เซอร์เพื่อวัดการใช้งานเว็บไซต์ จนกว่าคุณจะเลือก เว็บไซต์นี้จะไม่เก็บอะไรไว้บนอุปกรณ์นี้และไม่ส่งข้อมูลที่ระบุตัวคุณ",
      privacyPolicy: "นโยบายความเป็นส่วนตัว",
    },
    analyticsConsentWithdrawal: {
      close: "ปิด",
      link: "คุกกี้วิเคราะห์",
      off: "ปิด",
      on: "เปิด",
      title: "การวิเคราะห์",
      toggleDescription: "เมื่อปิดอยู่ เว็บไซต์นี้จะไม่ให้ตัวระบุใดแก่เบราว์เซอร์นี้ และไม่เก็บข้อมูลใดเพื่อการวิเคราะห์",
      toggleTitle: "อนุญาตคุกกี้วิเคราะห์",
    },
    auth: {
      logIn: "เข้าสู่ระบบ",
      openApp: "เปิดแอป",
      signUpFree: "สมัครใช้งานฟรี",
      startStudyingFree: "เริ่มเรียนฟรี",
    },
    blog: {
      breadcrumbLabel: "บล็อก",
      byPrefix: "โดย",
      empty: "บทความจะมาเร็ว ๆ นี้",
      metaDescription: "อัปเดต บทแนะนำ และมุมมองเกี่ยวกับ Nibomo",
      notFoundDescription: "ไม่มีบทความนี้อยู่",
      notFoundTitle: "ไม่พบหน้านี้",
      readNextHeading: "อ่านต่อ",
      title: "บล็อก",
    },
    breadcrumbs: {
      ariaLabel: "เส้นทางนำทาง",
      homeLabel: "หน้าแรก",
    },
    copyCodeField: {
      copied: "คัดลอกแล้ว",
      copy: "คัดลอก",
      copyFailed: "คัดลอกไม่สำเร็จ",
    },
    cta: {
      activityHeading: "พร้อมเริ่มทบทวนการ์ดของคุณเองแล้วหรือยัง",
      heading:
        "เรียนรู้ได้มากขึ้นและลืมน้อยลงด้วยการ์ดคำถามคำตอบแบบทบทวนเว้นระยะที่ใช้ได้ฟรี",
      buttonLabel: "เริ่มเรียนฟรี",
      featuresHeading:
        "สร้างการ์ดที่ดีขึ้นและทบทวนในเวลาที่เหมาะสม",
    },
    docs: {
      breadcrumbLabel: "เอกสาร",
      comingSoonDescription: "หน้าเอกสารนี้กำลังเขียนอยู่",
      comingSoonTitle: "เร็ว ๆ นี้",
      metaDescription:
        "การเริ่มต้นใช้งาน คู่มือการโฮสต์เอง เอกสารอ้างอิง API และภาพรวมสถาปัตยกรรม",
      title: "เอกสารประกอบ",
    },
    footer: {
      appsHeading: "แอป",
      blogLabel: "บล็อก",
      builtByLabel: "สร้างโดย Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "เอกสารประกอบ",
      featuresLabel: "ฟีเจอร์",
      inDevelopmentLabel: "อยู่ระหว่างพัฒนา",
      legalHeading: "ข้อกฎหมาย",
      openSourceHeading: "โอเพนซอร์ส",
      operatedByLabel: "ดำเนินการโดย SAMO DANNI EOOD",
      pricingLabel: "ราคา",
      privacyPolicyLabel: "นโยบายความเป็นส่วนตัว",
      productHeading: "ผลิตภัณฑ์",
      selfHostingGuideLabel: "คู่มือการโฮสต์เอง",
      supportLabel: "การสนับสนุน",
      termsOfServiceLabel: "ข้อกำหนดการใช้งาน",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "ผู้ทบทวนจะนับเป็นผู้ใช้ใหม่ในวันที่ทบทวนครั้งแรก และนับเป็นผู้กลับมาหากเคยทบทวนมาก่อน การทบทวนจะถูกนับเมื่อมีคนเลือก อีกครั้ง ยาก ดี หรือ ง่าย บนการ์ด",
        dailyUniqueUsersChartTitle: "ผู้ทบทวนรายวัน: ใหม่เทียบกับผู้กลับมา",
        dateRangeLabel: "ช่วงวันที่",
        daysInRangeLabel: "จำนวนวันในช่วง",
        description:
          "ดูภาพรวมกิจกรรมการทบทวนรายวันบนเว็บ iOS และ Android ตัวเลขที่เผยแพร่เป็นยอดรวม ไม่เปิดเผยเนื้อหาการ์ด อีเมล หรือประวัติการเรียนของแต่ละคน",
        eyebrow: "กิจกรรม",
        lastUpdatedLabel: "อัปเดตล่าสุด",
        peakDailyUniqueUsersLabel: "ผู้ใช้ไม่ซ้ำรายวันสูงสุด",
        peakDailyVolumeLabel: "ปริมาณรายวันสูงสุด",
        platformActivityChartDescription:
          "การทบทวนจะถูกนับเมื่อมีคนเลือก อีกครั้ง ยาก ดี หรือ ง่าย บนการ์ด โดยนับแยกตามแพลตฟอร์ม",
        platformActivityChartTitle: "การทบทวนรายวันแยกตามแพลตฟอร์ม",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "เว็บ",
        },
        reviewUserCohortLabels: {
          new: "ใหม่",
          returning: "กลับมา",
        },
        reviewDateAxisLabel: "วันที่ทบทวน",
        reviewEventsAxisLabel: "การทบทวน",
        rawSnapshotLabel: "ข้อมูลดิบ (JSON)",
        sourceLabel: "ดูข้อมูลดิบ (JSON)",
        title: "กิจกรรมของ Nibomo",
        totalReviewEventsLabel: "การทบทวนทั้งหมด",
        uniqueUsersAxisLabel: "ผู้ทบทวน",
        usersWithReviewEventsLabel: "ผู้ทบทวน",
      },
      agentHintDescription:
        "เชื่อมต่อ AI agent ของคุณผ่าน MCP: เพิ่มเซิร์ฟเวอร์ Nibomo ใน Claude, Cursor หรือไคลเอ็นต์ MCP ใดก็ได้ แล้วมันจะอ่าน สร้าง และแก้ไขการ์ดของคุณได้",
      aiAgentSectionLabel: "สำหรับ AI Agent",
      appPreviewAlt:
        "หน้าจอแอป Nibomo แสดงการทบทวน ผลการตอบ ความคืบหน้า ร่างจาก AI และรายการการ์ด",
      appPreviewAriaLabel: "ตัวอย่างแอป",
      appPreviewLabel: "ตัวอย่างแอป",
      humanSectionLabel: "สำหรับผู้ใช้งาน",
    },
    legal: {
      lastUpdatedLabel: "อัปเดตล่าสุด",
    },
    locale: {
      switcherAriaLabel: "ตัวเลือกภาษา",
    },
    localeSuggestion: {
      actionLabel: "เปิดเวอร์ชันภาษาไทย",
      dismissLabel: "ปิดคำแนะนำภาษา",
      message: "หน้านี้มีให้อ่านเป็นภาษาไทย",
    },
    menuToggleLabel: "เปิด/ปิดเมนู",
    navigation: {
      blog: "บล็อก",
      dashboards: "กิจกรรม",
      docs: "เอกสาร",
      features: "ฟีเจอร์",
      pricing: "ราคา",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "สแกนจากมือถือของคุณ",
      webApp: "เว็บแอป",
    },
  },
  uk: {
    analyticsConsentBanner: {
      allow: "Дозволити",
      decline: "Відхилити",
      error: "Не вдалося. Спробуйте ще раз.",
      label: "Аналітичні cookie",
      message: "Ми використовуємо cookie та інше сховище браузера, щоб вимірювати, як користуються сайтом. Доки ви не зробите вибір, сайт нічого не зберігає на цьому пристрої й не надсилає даних, які вас ідентифікують.",
      privacyPolicy: "Політика конфіденційності",
    },
    analyticsConsentWithdrawal: {
      close: "Закрити",
      link: "Аналітичні cookie",
      off: "Вимк.",
      on: "Увімк.",
      title: "Аналітика",
      toggleDescription: "Коли вимкнено, сайт не надає цьому браузеру ідентифікатора й нічого не зберігає для аналітики.",
      toggleTitle: "Дозволити аналітичні cookie",
    },
    auth: {
      logIn: "Увійти",
      openApp: "Відкрити застосунок",
      signUpFree: "Почати безкоштовно",
      startStudyingFree: "Почати навчання безкоштовно",
    },
    blog: {
      breadcrumbLabel: "Блог",
      byPrefix: "Автор",
      empty: "Публікації скоро з'являться.",
      metaDescription: "Оновлення, посібники та нотатки про Nibomo.",
      notFoundDescription: "Такого запису в блозі немає.",
      notFoundTitle: "Не знайдено",
      readNextHeading: "Читати далі",
      title: "Блог",
    },
    breadcrumbs: {
      ariaLabel: "Навігаційний ланцюжок",
      homeLabel: "Головна",
    },
    copyCodeField: {
      copied: "Скопійовано",
      copy: "Копіювати",
      copyFailed: "Не вдалося скопіювати",
    },
    cta: {
      activityHeading: "Готові почати повторювати власні картки?",
      heading:
        "Вивчайте більше й забувайте менше з безкоштовними картками для інтервального повторення",
      buttonLabel: "Почати навчання безкоштовно",
      featuresHeading:
        "Створюйте кращі картки й повторюйте їх у потрібний час.",
    },
    docs: {
      breadcrumbLabel: "Документація",
      comingSoonDescription: "Ця сторінка документації зараз готується.",
      comingSoonTitle: "Незабаром",
      metaDescription:
        "Швидкий старт, посібник із self-hosting, довідник API та огляд архітектури.",
      title: "Документація",
    },
    footer: {
      appsHeading: "Застосунки",
      blogLabel: "Блог",
      builtByLabel: "Створив Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Документація",
      featuresLabel: "Можливості",
      inDevelopmentLabel: "У розробці",
      legalHeading: "Правова інформація",
      openSourceHeading: "Open Source",
      operatedByLabel: "Сервісом керує SAMO DANNI EOOD",
      pricingLabel: "Ціни",
      privacyPolicyLabel: "Політика конфіденційності",
      productHeading: "Продукт",
      selfHostingGuideLabel: "Посібник із self-hosting",
      supportLabel: "Підтримка",
      termsOfServiceLabel: "Умови використання",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "У перший день повторень користувач вважається новим, а якщо він повторював раніше — таким, що повернувся. Повторення зараховується, коли на картці обирають оцінку «Ще раз», «Важко», «Добре» або «Легко».",
        dailyUniqueUsersChartTitle: "Користувачі з повтореннями за днями: нові та ті, хто повернувся",
        dateRangeLabel: "Період",
        daysInRangeLabel: "Днів у періоді",
        description:
          "Подивіться сукупну щоденну активність повторень у вебі, на iOS та Android. Публікуються лише загальні підрахунки: вони не розкривають вміст карток, електронні адреси та індивідуальну історію навчання.",
        eyebrow: "Активність",
        lastUpdatedLabel: "Останнє оновлення",
        peakDailyUniqueUsersLabel: "Пік денних унікальних користувачів",
        peakDailyVolumeLabel: "Піковий денний обсяг",
        platformActivityChartDescription:
          "Повторення зараховується, коли на картці обирають оцінку «Ще раз», «Важко», «Добре» або «Легко». Підрахунки згруповані за платформами.",
        platformActivityChartTitle: "Щоденні повторення за платформами",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Веб",
        },
        reviewUserCohortLabels: {
          new: "Нові",
          returning: "Повернулися",
        },
        reviewDateAxisLabel: "Дата повторення",
        reviewEventsAxisLabel: "Повторення",
        rawSnapshotLabel: "Вихідні дані (JSON)",
        sourceLabel: "Переглянути вихідні дані (JSON)",
        title: "Активність Nibomo",
        totalReviewEventsLabel: "Усього повторень",
        uniqueUsersAxisLabel: "Користувачі",
        usersWithReviewEventsLabel: "Користувачі з повтореннями",
      },
      agentHintDescription:
        "Підключіть свого AI-агента через MCP: додайте сервер Nibomo в Claude, Cursor чи будь-який MCP-клієнт, і він зможе читати, створювати та редагувати ваші картки.",
      aiAgentSectionLabel: "ДЛЯ AI-АГЕНТІВ",
      appPreviewAlt:
        "Екрани застосунку Nibomo з повторенням, результатами відповідей, прогресом, AI-чернеткою та списком карток.",
      appPreviewAriaLabel: "Попередній перегляд застосунку",
      appPreviewLabel: "ПОПЕРЕДНІЙ ПЕРЕГЛЯД ЗАСТОСУНКУ",
      humanSectionLabel: "ДЛЯ ЛЮДЕЙ",
    },
    legal: {
      lastUpdatedLabel: "Останнє оновлення",
    },
    locale: {
      switcherAriaLabel: "Перемикач мови",
    },
    localeSuggestion: {
      actionLabel: "Відкрити українську версію",
      dismissLabel: "Закрити пропозицію мови",
      message: "Ця сторінка доступна українською.",
    },
    menuToggleLabel: "Відкрити меню",
    navigation: {
      blog: "Блог",
      dashboards: "Активність",
      docs: "Документація",
      features: "Можливості",
      pricing: "Ціни",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Відскануйте з телефона",
      webApp: "Вебзастосунок",
    },
  },
  he: {
    analyticsConsentBanner: {
      allow: "אישור",
      decline: "דחייה",
      error: "זה לא עבר. נסה שוב.",
      label: "עוגיות אנליטיקה",
      message: "אנחנו משתמשים בעוגייה ובאחסון דפדפן נוסף כדי למדוד את השימוש באתר. עד שתבחר, האתר לא שומר דבר במכשיר הזה ולא שולח מידע שמזהה אותך.",
      privacyPolicy: "מדיניות הפרטיות",
    },
    analyticsConsentWithdrawal: {
      close: "סגירה",
      link: "עוגיות ניתוח",
      off: "כבוי",
      on: "פעיל",
      title: "ניתוח",
      toggleDescription: "כשזה כבוי, האתר לא נותן לדפדפן הזה שום מזהה ולא שומר דבר לצורכי ניתוח.",
      toggleTitle: "לאפשר עוגיות ניתוח",
    },
    auth: {
      logIn: "התחברות",
      openApp: "פתיחת האפליקציה",
      signUpFree: "הרשמה בחינם",
      startStudyingFree: "להתחיל ללמוד בחינם",
    },
    blog: {
      breadcrumbLabel: "בלוג",
      byPrefix: "מאת",
      empty: "פוסטים יתפרסמו בקרוב.",
      metaDescription: "עדכונים, מדריכים ותובנות על Nibomo.",
      notFoundDescription: "הפוסט הזה לא קיים.",
      notFoundTitle: "לא נמצא",
      readNextHeading: "להמשך קריאה",
      title: "בלוג",
    },
    breadcrumbs: {
      ariaLabel: "מסלול ניווט",
      homeLabel: "דף הבית",
    },
    copyCodeField: {
      copied: "הועתק",
      copy: "העתקה",
      copyFailed: "ההעתקה נכשלה",
    },
    cta: {
      activityHeading: "רוצה להתחיל לחזור על הכרטיסים שלך?",
      heading:
        "ללמוד יותר ולשכוח פחות עם כרטיסי לימוד חינמיים בחזרה מרווחת",
      buttonLabel: "להתחיל ללמוד בחינם",
      featuresHeading:
        "ליצור כרטיסים טובים יותר ולחזור עליהם בזמן הנכון.",
    },
    docs: {
      breadcrumbLabel: "תיעוד",
      comingSoonDescription: "עמוד התיעוד הזה נמצא בכתיבה.",
      comingSoonTitle: "בקרוב",
      metaDescription:
        "צעדים ראשונים, מדריך אירוח עצמי, מדריך API וסקירת ארכיטקטורה.",
      title: "תיעוד",
    },
    footer: {
      appsHeading: "אפליקציות",
      blogLabel: "בלוג",
      builtByLabel: "נבנה על ידי Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "תיעוד",
      featuresLabel: "תכונות",
      inDevelopmentLabel: "בפיתוח",
      legalHeading: "מידע משפטי",
      openSourceHeading: "קוד פתוח",
      operatedByLabel: "מופעל על ידי SAMO DANNI EOOD",
      pricingLabel: "תמחור",
      privacyPolicyLabel: "מדיניות פרטיות",
      productHeading: "מוצר",
      selfHostingGuideLabel: "מדריך אירוח עצמי",
      supportLabel: "תמיכה",
      termsOfServiceLabel: "תנאי השימוש",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "לומדים נספרים כחדשים ביום החזרה הראשון שלהם, וכחוזרים אם כבר ביצעו חזרות בעבר. חזרה נספרת כשמישהו מדרג כרטיס שוב, קשה, טוב או קל.",
        dailyUniqueUsersChartTitle: "לומדים יומיים: חדשים מול חוזרים",
        dateRangeLabel: "טווח תאריכים",
        daysInRangeLabel: "ימים בטווח",
        description:
          "ראה את פעילות החזרות היומית המצטברת ברשת, ב-iOS וב-Android. המספרים המפורסמים הם נתונים מצטברים ואינם חושפים תוכן של כרטיסים, כתובות אימייל או היסטוריית לימוד אישית.",
        eyebrow: "פעילות",
        lastUpdatedLabel: "עודכן לאחרונה",
        peakDailyUniqueUsersLabel: "שיא משתמשים ייחודיים ליום",
        peakDailyVolumeLabel: "שיא נפח יומי",
        platformActivityChartDescription:
          "חזרה נספרת כשמישהו מדרג כרטיס שוב, קשה, טוב או קל. הספירות מקובצות לפי פלטפורמה.",
        platformActivityChartTitle: "חזרות יומיות לפי פלטפורמה",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "רשת",
        },
        reviewUserCohortLabels: {
          new: "חדשים",
          returning: "חוזרים",
        },
        reviewDateAxisLabel: "תאריך החזרה",
        reviewEventsAxisLabel: "חזרות",
        rawSnapshotLabel: "נתונים גולמיים (JSON)",
        sourceLabel: "הצגת הנתונים הגולמיים (JSON)",
        title: "הפעילות ב-Nibomo",
        totalReviewEventsLabel: "סך החזרות",
        uniqueUsersAxisLabel: "לומדים",
        usersWithReviewEventsLabel: "לומדים",
      },
      agentHintDescription:
        "חבר את סוכן ה-AI שלך דרך MCP: הוסף את שרת Nibomo ל-Claude, ל-Cursor או לכל לקוח MCP, והוא יוכל לקרוא, ליצור ולערוך את הכרטיסים שלך.",
      aiAgentSectionLabel: "לסוכני AI",
      appPreviewAlt:
        "מסכי Nibomo עם חזרה, תוצאות תשובה, התקדמות, טיוטת AI ורשימת כרטיסים.",
      appPreviewAriaLabel: "תצוגה מקדימה של האפליקציה",
      appPreviewLabel: "תצוגה מקדימה של האפליקציה",
      humanSectionLabel: "לאנשים",
    },
    legal: {
      lastUpdatedLabel: "עודכן לאחרונה",
    },
    locale: {
      switcherAriaLabel: "בחירת שפה",
    },
    localeSuggestion: {
      actionLabel: "פתיחת הגרסה העברית",
      dismissLabel: "סגירת הצעת השפה",
      message: "הדף הזה זמין בעברית.",
    },
    menuToggleLabel: "פתיחת התפריט",
    navigation: {
      blog: "בלוג",
      dashboards: "פעילות",
      docs: "תיעוד",
      features: "תכונות",
      pricing: "תמחור",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "סרוק מהטלפון",
      webApp: "אפליקציית רשת",
    },
  },
};

export function getUiCopy(locale: AppLocale): AppUiCopy {
  return UI_COPY_BY_LOCALE[locale];
}
