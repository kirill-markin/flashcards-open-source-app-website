import type { AppLocale } from "@/lib/localeConfig";

interface AppUiCopy {
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
      metaDescription: "Updates, tutorials, and insights about Flashcards.",
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
      copyrightLabel: "Flashcards Open Source App",
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
        title: "Flashcards activity",
        totalReviewEventsLabel: "Total reviews",
        uniqueUsersAxisLabel: "Reviewers",
        usersWithReviewEventsLabel: "Reviewers",
      },
      agentHintDescription:
        "Connect your AI agent over MCP: add the Flashcards server to Claude, Cursor, or any MCP client and it can read, create, and edit your cards.",
      aiAgentSectionLabel: "FOR AI AGENTS",
      appPreviewAlt:
        "Flashcards app screens showing review, answer results, progress, AI draft, and card list flows.",
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
      metaDescription: "Novedades, tutoriales e ideas sobre Flashcards.",
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
      copyrightLabel: "Flashcards Open Source App",
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
        title: "Actividad de Flashcards",
        totalReviewEventsLabel: "Repasos totales",
        uniqueUsersAxisLabel: "Personas",
        usersWithReviewEventsLabel: "Personas que han repasado",
      },
      agentHintDescription:
        "Conecta tu agente de IA por MCP: añade el servidor de Flashcards a Claude, Cursor o cualquier cliente MCP y podrá leer, crear y editar tus tarjetas.",
      aiAgentSectionLabel: "PARA AGENTES DE IA",
      appPreviewAlt:
        "Pantallas de Flashcards con repaso, resultados, progreso, borrador con IA y lista de tarjetas.",
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
      metaDescription: "تحديثات ودروس وأفكار حول Flashcards.",
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
      copyrightLabel: "Flashcards Open Source App",
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
        title: "نشاط Flashcards",
        totalReviewEventsLabel: "إجمالي المراجعات",
        uniqueUsersAxisLabel: "المراجعون",
        usersWithReviewEventsLabel: "المراجعون",
      },
      agentHintDescription:
        "اربط وكيل الذكاء الاصطناعي عبر MCP: أضف خادم Flashcards إلى Claude أو Cursor أو أي عميل MCP، وسيتمكن من قراءة بطاقاتك وإنشائها وتحريرها.",
      aiAgentSectionLabel: "لوكلاء الذكاء الاصطناعي",
      appPreviewAlt:
        "شاشات Flashcards تعرض المراجعة والنتائج والتقدم ومسودة الذكاء الاصطناعي وقائمة البطاقات.",
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
      metaDescription: "Updates, Anleitungen und Einblicke zu Flashcards.",
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
      copyrightLabel: "Flashcards Open Source App",
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
        title: "Flashcards-Aktivität",
        totalReviewEventsLabel: "Wiederholungen gesamt",
        uniqueUsersAxisLabel: "Lernende",
        usersWithReviewEventsLabel: "Lernende",
      },
      agentHintDescription:
        "Verbinde deinen KI-Agenten über MCP: Füge den Flashcards-Server zu Claude, Cursor oder einem beliebigen MCP-Client hinzu, und er kann deine Karten lesen, erstellen und bearbeiten.",
      aiAgentSectionLabel: "FÜR KI-AGENTEN",
      appPreviewAlt:
        "Flashcards-Bildschirme mit Review, Ergebnissen, Fortschritt, KI-Entwurf und Kartenliste.",
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
      metaDescription: "Flashcards के बारे में अपडेट, गाइड और जानकारी।",
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
      copyrightLabel: "Flashcards Open Source App",
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
        title: "Flashcards गतिविधि",
        totalReviewEventsLabel: "कुल रिव्यू",
        uniqueUsersAxisLabel: "रिव्यू करने वाले",
        usersWithReviewEventsLabel: "रिव्यू करने वाले",
      },
      agentHintDescription:
        "अपने AI agent को MCP से कनेक्ट करें: Flashcards server को Claude, Cursor या किसी भी MCP client में जोड़ें और वह आपके cards पढ़, बना और संपादित कर सकता है।",
      aiAgentSectionLabel: "AI एजेंट्स के लिए",
      appPreviewAlt:
        "Flashcards की स्क्रीनें जिनमें review, results, progress, AI draft और cards list दिखाई देते हैं।",
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
      metaDescription: "Flashcards に関する更新、ガイド、考察。",
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
      copyrightLabel: "Flashcards Open Source App",
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
        title: "Flashcards のアクティビティ",
        totalReviewEventsLabel: "レビュー合計",
        uniqueUsersAxisLabel: "レビューユーザー",
        usersWithReviewEventsLabel: "レビューユーザー",
      },
      agentHintDescription:
        "AI エージェントを MCP で接続しましょう。Flashcards サーバーを Claude や Cursor など任意の MCP クライアントに追加すれば、カードの閲覧・作成・編集を任せられます。",
      aiAgentSectionLabel: "AI エージェント向け",
      appPreviewAlt:
        "レビュー、結果、進捗、AI 下書き、カード一覧を示す Flashcards の画面。",
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
  ru: {
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
      metaDescription: "Обновления, руководства и заметки о Flashcards.",
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
      copyrightLabel: "Flashcards Open Source App",
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
        title: "Активность Flashcards",
        totalReviewEventsLabel: "Всего повторений",
        uniqueUsersAxisLabel: "Пользователи",
        usersWithReviewEventsLabel: "Пользователи с повторениями",
      },
      agentHintDescription:
        "Подключите своего AI-агента по MCP: добавьте сервер Flashcards в Claude, Cursor или любой MCP-клиент, и он сможет читать, создавать и редактировать ваши карточки.",
      aiAgentSectionLabel: "ДЛЯ AI-АГЕНТОВ",
      appPreviewAlt:
        "Экраны Flashcards с повторением, результатами, прогрессом, AI-черновиком и списком карточек.",
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
      metaDescription: "关于 Flashcards 的更新、教程和思考。",
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
      copyrightLabel: "Flashcards Open Source App",
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
        title: "Flashcards 活动",
        totalReviewEventsLabel: "复习总数",
        uniqueUsersAxisLabel: "复习用户",
        usersWithReviewEventsLabel: "复习用户",
      },
      agentHintDescription:
        "通过 MCP 连接你的 AI agent：把 Flashcards 服务器添加到 Claude、Cursor 或任意 MCP 客户端，它就能为你读取、创建和编辑卡片。",
      aiAgentSectionLabel: "面向 AI 智能体",
      appPreviewAlt:
        "Flashcards 应用界面，展示复习、结果、进度、AI 草稿和卡片列表流程。",
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
};

export function getUiCopy(locale: AppLocale): AppUiCopy {
  return UI_COPY_BY_LOCALE[locale];
}
