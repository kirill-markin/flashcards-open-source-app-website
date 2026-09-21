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
  sv: {
    auth: {
      logIn: "Logga in",
      openApp: "Öppna appen",
      signUpFree: "Skapa gratiskonto",
      startStudyingFree: "Börja plugga gratis",
    },
    blog: {
      breadcrumbLabel: "Blogg",
      byPrefix: "Av",
      empty: "Inlägg kommer snart.",
      metaDescription: "Uppdateringar, guider och insikter om Nibomo.",
      notFoundDescription: "Det här blogginlägget finns inte.",
      notFoundTitle: "Hittades inte",
      readNextHeading: "Läs härnäst",
      title: "Blogg",
    },
    breadcrumbs: {
      ariaLabel: "Brödsmulor",
      homeLabel: "Start",
    },
    copyCodeField: {
      copied: "Kopierat",
      copy: "Kopiera",
      copyFailed: "Kopieringen misslyckades",
    },
    cta: {
      activityHeading: "Redo att börja repetera dina egna kort?",
      heading:
        "Lär dig mer och glöm mindre med gratis flashcards och intervallrepetition",
      buttonLabel: "Börja plugga gratis",
      featuresHeading:
        "Skapa bättre kort och repetera dem vid rätt tidpunkt.",
    },
    docs: {
      breadcrumbLabel: "Dokumentation",
      comingSoonDescription: "Den här dokumentationssidan håller på att skrivas.",
      comingSoonTitle: "Kommer snart",
      metaDescription:
        "Kom igång, guide för drift på egen server, API-referens och arkitekturöversikt.",
      title: "Dokumentation",
    },
    footer: {
      appsHeading: "Appar",
      blogLabel: "Blogg",
      builtByLabel: "Byggd av Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Dokumentation",
      featuresLabel: "Funktioner",
      inDevelopmentLabel: "Under utveckling",
      legalHeading: "Juridik",
      openSourceHeading: "Öppen källkod",
      operatedByLabel: "Drivs av SAMO DANNI EOOD",
      pricingLabel: "Priser",
      privacyPolicyLabel: "Integritetspolicy",
      productHeading: "Produkt",
      selfHostingGuideLabel: "Guide för drift på egen server",
      supportLabel: "Support",
      termsOfServiceLabel: "Användarvillkor",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "Pluggare räknas som nya sin första repetitionsdag och som återkommande om de har repeterat tidigare. En repetition räknas när någon väljer Igen, Svårt, Bra eller Lätt på ett kort.",
        dailyUniqueUsersChartTitle: "Pluggare per dag: nya och återkommande",
        dateRangeLabel: "Datumintervall",
        daysInRangeLabel: "Dagar i intervallet",
        description:
          "Se sammanlagd daglig repetitionsaktivitet på webben, iOS och Android. Publicerade siffror är sammanlagda antal och visar inte kortinnehåll, e-postadresser eller enskilda plugghistoriker.",
        eyebrow: "Aktivitet",
        lastUpdatedLabel: "Senast uppdaterad",
        peakDailyUniqueUsersLabel: "Toppnotering unika användare per dag",
        peakDailyVolumeLabel: "Toppnotering volym per dag",
        platformActivityChartDescription:
          "En repetition räknas när någon väljer Igen, Svårt, Bra eller Lätt på ett kort. Antalen är grupperade per plattform.",
        platformActivityChartTitle: "Repetitioner per dag och plattform",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Webb",
        },
        reviewUserCohortLabels: {
          new: "Nya",
          returning: "Återkommande",
        },
        reviewDateAxisLabel: "Repetitionsdatum",
        reviewEventsAxisLabel: "Repetitioner",
        rawSnapshotLabel: "Rådata (JSON)",
        sourceLabel: "Visa rådata (JSON)",
        title: "Aktivitet i Nibomo",
        totalReviewEventsLabel: "Totalt antal repetitioner",
        uniqueUsersAxisLabel: "Pluggare",
        usersWithReviewEventsLabel: "Pluggare",
      },
      agentHintDescription:
        "Anslut din AI-agent via MCP: lägg till Nibomo-servern i Claude, Cursor eller någon annan MCP-klient, så kan den läsa, skapa och redigera dina kort.",
      aiAgentSectionLabel: "FÖR AI-AGENTER",
      appPreviewAlt:
        "Skärmar i Nibomo-appen som visar repetition, svarsresultat, framsteg, AI-utkast och kortlista.",
      appPreviewAriaLabel: "Förhandsvisning av appen",
      appPreviewLabel: "FÖRHANDSVISNING AV APPEN",
      humanSectionLabel: "FÖR MÄNNISKOR",
    },
    legal: {
      lastUpdatedLabel: "Senast uppdaterad",
    },
    locale: {
      switcherAriaLabel: "Språkväljare",
    },
    localeSuggestion: {
      actionLabel: "Öppna den svenska versionen",
      dismissLabel: "Stäng språkförslaget",
      message: "Den här sidan finns på svenska.",
    },
    menuToggleLabel: "Öppna eller stäng menyn",
    navigation: {
      blog: "Blogg",
      dashboards: "Aktivitet",
      docs: "Dokumentation",
      features: "Funktioner",
      pricing: "Priser",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Skanna med telefonen",
      webApp: "Webbapp",
    },
  },
  da: {
    auth: {
      logIn: "Log ind",
      openApp: "Åbn app",
      signUpFree: "Opret gratis konto",
      startStudyingFree: "Begynd at lære gratis",
    },
    blog: {
      breadcrumbLabel: "Blog",
      byPrefix: "Af",
      empty: "Indlæg er på vej.",
      metaDescription: "Nyheder, vejledninger og indsigter om Nibomo.",
      notFoundDescription: "Dette blogindlæg findes ikke.",
      notFoundTitle: "Ikke fundet",
      readNextHeading: "Læs videre",
      title: "Blog",
    },
    breadcrumbs: {
      ariaLabel: "Brødkrummesti",
      homeLabel: "Forside",
    },
    copyCodeField: {
      copied: "Kopieret",
      copy: "Kopiér",
      copyFailed: "Kopiering mislykkedes",
    },
    cta: {
      activityHeading: "Klar til at begynde at repetere dine egne kort?",
      heading:
        "Lær mere og glem mindre med gratis flashcards til spaced repetition",
      buttonLabel: "Begynd at lære gratis",
      featuresHeading:
        "Lav bedre kort, og repeter dem på det rigtige tidspunkt.",
    },
    docs: {
      breadcrumbLabel: "Docs",
      comingSoonDescription: "Denne dokumentationsside er ved at blive skrevet.",
      comingSoonTitle: "Kommer snart",
      metaDescription:
        "Kom godt i gang, vejledning til selvhosting, API-reference og arkitekturoverblik.",
      title: "Dokumentation",
    },
    footer: {
      appsHeading: "Apps",
      blogLabel: "Blog",
      builtByLabel: "Bygget af Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Dokumentation",
      featuresLabel: "Funktioner",
      inDevelopmentLabel: "Under udvikling",
      legalHeading: "Juridisk",
      openSourceHeading: "Open Source",
      operatedByLabel: "Drevet af SAMO DANNI EOOD",
      pricingLabel: "Priser",
      privacyPolicyLabel: "Privatlivspolitik",
      productHeading: "Produkt",
      selfHostingGuideLabel: "Vejledning til selvhosting",
      supportLabel: "Support",
      termsOfServiceLabel: "Servicevilkår",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "Brugere tælles som nye på deres første repetitionsdag eller som tilbagevendende, hvis de har repeteret før. En repetition tælles med, når nogen vælger Igen, Svært, Godt eller Let på et kort.",
        dailyUniqueUsersChartTitle: "Daglige brugere: nye og tilbagevendende",
        dateRangeLabel: "Periode",
        daysInRangeLabel: "Dage i perioden",
        description:
          "Se den samlede daglige repetitionsaktivitet på web, iOS og Android. De offentliggjorte tal er samlede antal og afslører hverken kortenes indhold, e-mailadresser eller den enkeltes læringshistorik.",
        eyebrow: "Aktivitet",
        lastUpdatedLabel: "Sidst opdateret",
        peakDailyUniqueUsersLabel: "Flest unikke brugere på én dag",
        peakDailyVolumeLabel: "Højeste daglige volumen",
        platformActivityChartDescription:
          "En repetition tælles med, når nogen vælger Igen, Svært, Godt eller Let på et kort. Antallene er grupperet efter platform.",
        platformActivityChartTitle: "Daglige repetitioner pr. platform",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        reviewUserCohortLabels: {
          new: "Nye",
          returning: "Tilbagevendende",
        },
        reviewDateAxisLabel: "Repetitionsdato",
        reviewEventsAxisLabel: "Repetitioner",
        rawSnapshotLabel: "Rådata (JSON)",
        sourceLabel: "Se rådata (JSON)",
        title: "Nibomo-aktivitet",
        totalReviewEventsLabel: "Repetitioner i alt",
        uniqueUsersAxisLabel: "Brugere",
        usersWithReviewEventsLabel: "Brugere",
      },
      agentHintDescription:
        "Forbind din AI-agent via MCP: tilføj Nibomo-serveren til Claude, Cursor eller en anden MCP-klient, så kan den læse, oprette og redigere dine kort.",
      aiAgentSectionLabel: "TIL AI-AGENTER",
      appPreviewAlt:
        "Skærme fra Nibomo-appen med repetition, svarresultater, fremskridt, AI-udkast og kortliste.",
      appPreviewAriaLabel: "Forhåndsvisning af appen",
      appPreviewLabel: "FORHÅNDSVISNING AF APPEN",
      humanSectionLabel: "TIL MENNESKER",
    },
    legal: {
      lastUpdatedLabel: "Sidst opdateret",
    },
    locale: {
      switcherAriaLabel: "Sprogvælger",
    },
    localeSuggestion: {
      actionLabel: "Åbn den danske version",
      dismissLabel: "Luk sprogforslaget",
      message: "Denne side findes på dansk.",
    },
    menuToggleLabel: "Åbn eller luk menuen",
    navigation: {
      blog: "Blog",
      dashboards: "Aktivitet",
      docs: "Docs",
      features: "Funktioner",
      pricing: "Priser",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Scan den med din telefon",
      webApp: "Webapp",
    },
  },
  nb: {
    auth: {
      logIn: "Logg inn",
      openApp: "Åpne appen",
      signUpFree: "Registrer deg gratis",
      startStudyingFree: "Begynn å studere gratis",
    },
    blog: {
      breadcrumbLabel: "Blogg",
      byPrefix: "Av",
      empty: "Innlegg kommer snart.",
      metaDescription: "Nyheter, veiledninger og innsikt om Nibomo.",
      notFoundDescription: "Dette blogginnlegget finnes ikke.",
      notFoundTitle: "Ikke funnet",
      readNextHeading: "Les videre",
      title: "Blogg",
    },
    breadcrumbs: {
      ariaLabel: "Brødsmulesti",
      homeLabel: "Hjem",
    },
    copyCodeField: {
      copied: "Kopiert",
      copy: "Kopier",
      copyFailed: "Kopieringen mislyktes",
    },
    cta: {
      activityHeading: "Klar til å begynne å repetere dine egne kort?",
      heading:
        "Lær mer og glem mindre med gratis læringskort og intervallrepetisjon",
      buttonLabel: "Begynn å studere gratis",
      featuresHeading:
        "Lag bedre kort, og repeter dem til rett tid.",
    },
    docs: {
      breadcrumbLabel: "Dokumentasjon",
      comingSoonDescription: "Denne dokumentasjonssiden er under arbeid.",
      comingSoonTitle: "Kommer snart",
      metaDescription:
        "Kom i gang, guide til selvhosting, API-referanse og arkitekturoversikt.",
      title: "Dokumentasjon",
    },
    footer: {
      appsHeading: "Apper",
      blogLabel: "Blogg",
      builtByLabel: "Laget av Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Dokumentasjon",
      featuresLabel: "Funksjoner",
      inDevelopmentLabel: "Under utvikling",
      legalHeading: "Juridisk",
      openSourceHeading: "Åpen kildekode",
      operatedByLabel: "Drives av SAMO DANNI EOOD",
      pricingLabel: "Priser",
      privacyPolicyLabel: "Personvernerklæring",
      productHeading: "Produkt",
      selfHostingGuideLabel: "Guide til selvhosting",
      supportLabel: "Brukerstøtte",
      termsOfServiceLabel: "Vilkår for bruk",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "Brukere som repeterer, grupperes som nye på sin første repetisjonsdag, eller som tilbakevendende hvis de har repetert før. En repetisjon telles når noen velger Igjen, Vanskelig, Bra eller Lett på et kort.",
        dailyUniqueUsersChartTitle: "Daglige repeterende brukere: nye mot tilbakevendende",
        dateRangeLabel: "Datoperiode",
        daysInRangeLabel: "Dager i perioden",
        description:
          "Se samlet daglig repetisjonsaktivitet på tvers av web, iOS og Android. Publiserte tall er aggregerte antall og avslører ikke kortinnhold, e-postadresser eller studiehistorikken til enkeltpersoner.",
        eyebrow: "Aktivitet",
        lastUpdatedLabel: "Sist oppdatert",
        peakDailyUniqueUsersLabel: "Topp antall unike brukere per dag",
        peakDailyVolumeLabel: "Topp daglig volum",
        platformActivityChartDescription:
          "En repetisjon telles når noen velger Igjen, Vanskelig, Bra eller Lett på et kort. Tallene er gruppert etter plattform.",
        platformActivityChartTitle: "Daglige repetisjoner etter plattform",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        reviewUserCohortLabels: {
          new: "Nye",
          returning: "Tilbakevendende",
        },
        reviewDateAxisLabel: "Repetisjonsdato",
        reviewEventsAxisLabel: "Repetisjoner",
        rawSnapshotLabel: "Rådata (JSON)",
        sourceLabel: "Se rådata (JSON)",
        title: "Nibomo-aktivitet",
        totalReviewEventsLabel: "Repetisjoner totalt",
        uniqueUsersAxisLabel: "Repeterende brukere",
        usersWithReviewEventsLabel: "Repeterende brukere",
      },
      agentHintDescription:
        "Koble AI-agenten din til via MCP: legg Nibomo-serveren til i Claude, Cursor eller en hvilken som helst MCP-klient, så kan den lese, lage og redigere kortene dine.",
      aiAgentSectionLabel: "FOR AI-AGENTER",
      appPreviewAlt:
        "Skjermbilder fra Nibomo-appen som viser repetisjon, svarresultater, fremgang, AI-utkast og kortlister.",
      appPreviewAriaLabel: "Forhåndsvisning av appen",
      appPreviewLabel: "FORHÅNDSVISNING AV APPEN",
      humanSectionLabel: "FOR MENNESKER",
    },
    legal: {
      lastUpdatedLabel: "Sist oppdatert",
    },
    locale: {
      switcherAriaLabel: "Språkvelger",
    },
    localeSuggestion: {
      actionLabel: "Åpne den norske versjonen",
      dismissLabel: "Lukk språkforslaget",
      message: "Denne siden finnes på norsk.",
    },
    menuToggleLabel: "Vis/skjul meny",
    navigation: {
      blog: "Blogg",
      dashboards: "Aktivitet",
      docs: "Dokumentasjon",
      features: "Funksjoner",
      pricing: "Priser",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Skann den med mobilen",
      webApp: "Nettapp",
    },
  },
  fi: {
    auth: {
      logIn: "Kirjaudu sisään",
      openApp: "Avaa sovellus",
      signUpFree: "Rekisteröidy ilmaiseksi",
      startStudyingFree: "Aloita opiskelu ilmaiseksi",
    },
    blog: {
      breadcrumbLabel: "Blogi",
      byPrefix: "Kirjoittanut",
      empty: "Kirjoituksia tulossa pian.",
      metaDescription: "Nibomon päivityksiä, oppaita ja näkemyksiä.",
      notFoundDescription: "Tätä blogikirjoitusta ei ole olemassa.",
      notFoundTitle: "Ei löytynyt",
      readNextHeading: "Lue seuraavaksi",
      title: "Blogi",
    },
    breadcrumbs: {
      ariaLabel: "Murupolku",
      homeLabel: "Etusivu",
    },
    copyCodeField: {
      copied: "Kopioitu",
      copy: "Kopioi",
      copyFailed: "Kopiointi epäonnistui",
    },
    cta: {
      activityHeading: "Valmis aloittamaan omien korttiesi kertaamisen?",
      heading:
        "Opi enemmän ja unohda vähemmän ilmaisilla välistetyn kertauksen muistikorteilla",
      buttonLabel: "Aloita opiskelu ilmaiseksi",
      featuresHeading:
        "Luo parempia kortteja ja kertaa ne oikeaan aikaan.",
    },
    docs: {
      breadcrumbLabel: "Ohjeet",
      comingSoonDescription: "Tätä dokumentaatiosivua kirjoitetaan parhaillaan.",
      comingSoonTitle: "Tulossa pian",
      metaDescription:
        "Aloitusopas, itse ylläpidon opas, API-referenssi ja arkkitehtuurin yleiskuva.",
      title: "Dokumentaatio",
    },
    footer: {
      appsHeading: "Sovellukset",
      blogLabel: "Blogi",
      builtByLabel: "Tekijä Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Dokumentaatio",
      featuresLabel: "Ominaisuudet",
      inDevelopmentLabel: "Kehitteillä",
      legalHeading: "Juridiset tiedot",
      openSourceHeading: "Avoin lähdekoodi",
      operatedByLabel: "Ylläpitäjä SAMO DANNI EOOD",
      pricingLabel: "Hinnoittelu",
      privacyPolicyLabel: "Tietosuojaseloste",
      productHeading: "Tuote",
      selfHostingGuideLabel: "Itse ylläpidon opas",
      supportLabel: "Tuki",
      termsOfServiceLabel: "Käyttöehdot",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "Kertaajat ryhmitellään uusiksi ensimmäisenä kertauspäivänään tai palaaviksi, jos he ovat kerranneet aiemmin. Kertaus lasketaan, kun joku valitsee kortille Uudelleen, Vaikea, Hyvä tai Helppo.",
        dailyUniqueUsersChartTitle: "Päivittäiset kertaajat: uudet vs. palaavat",
        dateRangeLabel: "Aikaväli",
        daysInRangeLabel: "Päiviä aikavälillä",
        description:
          "Katso päivittäistä kertausaktiivisuutta verkossa, iOS:ssä ja Androidilla. Julkaistut luvut ovat koostelukuja eivätkä paljasta korttien sisältöä, sähköpostiosoitteita tai yksittäisiä opiskeluhistorioita.",
        eyebrow: "Aktiivisuus",
        lastUpdatedLabel: "Päivitetty viimeksi",
        peakDailyUniqueUsersLabel: "Päivittäisten yksittäisten käyttäjien huippu",
        peakDailyVolumeLabel: "Päivittäisen määrän huippu",
        platformActivityChartDescription:
          "Kertaus lasketaan, kun joku valitsee kortille Uudelleen, Vaikea, Hyvä tai Helppo. Määrät on ryhmitelty alustan mukaan.",
        platformActivityChartTitle: "Päivittäiset kertaukset alustoittain",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Verkko",
        },
        reviewUserCohortLabels: {
          new: "Uudet",
          returning: "Palaavat",
        },
        reviewDateAxisLabel: "Kertauspäivä",
        reviewEventsAxisLabel: "Kertaukset",
        rawSnapshotLabel: "Raakadata (JSON)",
        sourceLabel: "Katso raakadata (JSON)",
        title: "Nibomon aktiivisuus",
        totalReviewEventsLabel: "Kertauksia yhteensä",
        uniqueUsersAxisLabel: "Kertaajat",
        usersWithReviewEventsLabel: "Kertaajat",
      },
      agentHintDescription:
        "Yhdistä tekoälyagenttisi MCP:llä: lisää Nibomo-palvelin Claudeen, Cursoriin tai mihin tahansa MCP-sovellukseen, niin se voi lukea, luoda ja muokata korttejasi.",
      aiAgentSectionLabel: "TEKOÄLYAGENTEILLE",
      appPreviewAlt:
        "Nibomo-sovelluksen näkymiä: kertaus, vastausten tulokset, edistyminen, tekoälyluonnos ja korttilista.",
      appPreviewAriaLabel: "Sovelluksen esikatselu",
      appPreviewLabel: "SOVELLUKSEN ESIKATSELU",
      humanSectionLabel: "IHMISILLE",
    },
    legal: {
      lastUpdatedLabel: "Päivitetty viimeksi",
    },
    locale: {
      switcherAriaLabel: "Kielenvalitsin",
    },
    localeSuggestion: {
      actionLabel: "Avaa suomenkielinen versio",
      dismissLabel: "Sulje kieliehdotus",
      message: "Tämä sivu on saatavilla suomeksi.",
    },
    menuToggleLabel: "Näytä tai piilota valikko",
    navigation: {
      blog: "Blogi",
      dashboards: "Aktiivisuus",
      docs: "Ohjeet",
      features: "Ominaisuudet",
      pricing: "Hinnoittelu",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Skannaa se puhelimellasi",
      webApp: "Verkkosovellus",
    },
  },
  cs: {
    auth: {
      logIn: "Přihlásit se",
      openApp: "Otevřít aplikaci",
      signUpFree: "Zaregistrovat se zdarma",
      startStudyingFree: "Začít se učit zdarma",
    },
    blog: {
      breadcrumbLabel: "Blog",
      byPrefix: "Autor",
      empty: "Články brzy přibudou.",
      metaDescription: "Novinky, návody a postřehy o Nibomo.",
      notFoundDescription: "Tento článek na blogu neexistuje.",
      notFoundTitle: "Nenalezeno",
      readNextHeading: "Přečtěte si dál",
      title: "Blog",
    },
    breadcrumbs: {
      ariaLabel: "Drobečková navigace",
      homeLabel: "Domů",
    },
    copyCodeField: {
      copied: "Zkopírováno",
      copy: "Kopírovat",
      copyFailed: "Kopírování se nezdařilo",
    },
    cta: {
      activityHeading: "Chcete začít opakovat vlastní kartičky?",
      heading:
        "Naučte se víc a zapomeňte míň díky bezplatným kartičkám s rozloženým opakováním",
      buttonLabel: "Začít se učit zdarma",
      featuresHeading:
        "Vytvářejte lepší kartičky a opakujte je ve správný čas.",
    },
    docs: {
      breadcrumbLabel: "Dokumentace",
      comingSoonDescription: "Tato stránka dokumentace se právě píše.",
      comingSoonTitle: "Již brzy",
      metaDescription:
        "První kroky, návod na vlastní hostování, referenční příručka API a přehled architektury.",
      title: "Dokumentace",
    },
    footer: {
      appsHeading: "Aplikace",
      blogLabel: "Blog",
      builtByLabel: "Vytvořil Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Dokumentace",
      featuresLabel: "Funkce",
      inDevelopmentLabel: "Ve vývoji",
      legalHeading: "Právní informace",
      openSourceHeading: "Otevřený zdrojový kód",
      operatedByLabel: "Provozuje SAMO DANNI EOOD",
      pricingLabel: "Ceny",
      privacyPolicyLabel: "Zásady ochrany osobních údajů",
      productHeading: "Produkt",
      selfHostingGuideLabel: "Návod na vlastní hostování",
      supportLabel: "Podpora",
      termsOfServiceLabel: "Podmínky služby",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "Ty, kdo opakují, řadíme jako nové v den jejich prvního opakování, nebo jako vracející se, pokud opakovali už dřív. Opakování se počítá, když někdo u kartičky zvolí Znovu, Těžké, Dobré nebo Snadné.",
        dailyUniqueUsersChartTitle: "Denní opakující: noví vs. vracející se",
        dateRangeLabel: "Období",
        daysInRangeLabel: "Počet dní v období",
        description:
          "Podívejte se na souhrnnou denní aktivitu opakování na webu, iOS a Androidu. Zveřejněné údaje jsou souhrnné počty a neodhalují obsah kartiček, e-mailové adresy ani historii učení jednotlivců.",
        eyebrow: "Aktivita",
        lastUpdatedLabel: "Naposledy aktualizováno",
        peakDailyUniqueUsersLabel: "Maximum unikátních uživatelů za den",
        peakDailyVolumeLabel: "Maximum za den",
        platformActivityChartDescription:
          "Opakování se počítá, když někdo u kartičky zvolí Znovu, Těžké, Dobré nebo Snadné. Počty jsou seskupené podle platformy.",
        platformActivityChartTitle: "Denní opakování podle platformy",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        reviewUserCohortLabels: {
          new: "Noví",
          returning: "Vracející se",
        },
        reviewDateAxisLabel: "Datum opakování",
        reviewEventsAxisLabel: "Opakování",
        rawSnapshotLabel: "Nezpracovaná data (JSON)",
        sourceLabel: "Zobrazit nezpracovaná data (JSON)",
        title: "Aktivita Nibomo",
        totalReviewEventsLabel: "Opakování celkem",
        uniqueUsersAxisLabel: "Opakující",
        usersWithReviewEventsLabel: "Opakující",
      },
      agentHintDescription:
        "Připojte svého AI agenta přes MCP: přidejte server Nibomo do Claude, Cursoru nebo jakéhokoli MCP klienta a agent může číst, vytvářet a upravovat vaše kartičky.",
      aiAgentSectionLabel: "PRO AI AGENTY",
      appPreviewAlt:
        "Obrazovky aplikace Nibomo s opakováním, výsledky odpovědí, pokrokem, konceptem od AI a seznamem kartiček.",
      appPreviewAriaLabel: "Náhled aplikace",
      appPreviewLabel: "NÁHLED APLIKACE",
      humanSectionLabel: "PRO LIDI",
    },
    legal: {
      lastUpdatedLabel: "Naposledy aktualizováno",
    },
    locale: {
      switcherAriaLabel: "Přepínač jazyka",
    },
    localeSuggestion: {
      actionLabel: "Otevřít českou verzi",
      dismissLabel: "Zavřít nabídku jazyka",
      message: "Tato stránka je dostupná v češtině.",
    },
    menuToggleLabel: "Přepnout menu",
    navigation: {
      blog: "Blog",
      dashboards: "Aktivita",
      docs: "Dokumentace",
      features: "Funkce",
      pricing: "Ceny",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Naskenujte ho telefonem",
      webApp: "Webová aplikace",
    },
  },
  el: {
    auth: {
      logIn: "Σύνδεση",
      openApp: "Άνοιγμα εφαρμογής",
      signUpFree: "Δωρεάν εγγραφή",
      startStudyingFree: "Ξεκινήστε να μελετάτε δωρεάν",
    },
    blog: {
      breadcrumbLabel: "Ιστολόγιο",
      byPrefix: "Από",
      empty: "Τα άρθρα έρχονται σύντομα.",
      metaDescription: "Ενημερώσεις, οδηγοί και σκέψεις για το Nibomo.",
      notFoundDescription: "Αυτό το άρθρο δεν υπάρχει.",
      notFoundTitle: "Δεν βρέθηκε",
      readNextHeading: "Διαβάστε στη συνέχεια",
      title: "Ιστολόγιο",
    },
    breadcrumbs: {
      ariaLabel: "Διαδρομή πλοήγησης",
      homeLabel: "Αρχική",
    },
    copyCodeField: {
      copied: "Αντιγράφηκε",
      copy: "Αντιγραφή",
      copyFailed: "Η αντιγραφή απέτυχε",
    },
    cta: {
      activityHeading: "Έτοιμοι να ξεκινήσετε επαναλήψεις με τις δικές σας κάρτες;",
      heading:
        "Μάθετε περισσότερα και ξεχνάτε λιγότερα με δωρεάν κάρτες και επανάληψη σε διαστήματα",
      buttonLabel: "Ξεκινήστε να μελετάτε δωρεάν",
      featuresHeading:
        "Φτιάξτε καλύτερες κάρτες και επαναλάβετέ τις τη σωστή στιγμή.",
    },
    docs: {
      breadcrumbLabel: "Τεκμηρίωση",
      comingSoonDescription: "Αυτή η σελίδα τεκμηρίωσης γράφεται ακόμα.",
      comingSoonTitle: "Έρχεται σύντομα",
      metaDescription:
        "Πρώτα βήματα, οδηγός αυτοφιλοξενίας, αναφορά API και επισκόπηση της αρχιτεκτονικής.",
      title: "Τεκμηρίωση",
    },
    footer: {
      appsHeading: "Εφαρμογές",
      blogLabel: "Ιστολόγιο",
      builtByLabel: "Δημιουργήθηκε από τον Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Τεκμηρίωση",
      featuresLabel: "Δυνατότητες",
      inDevelopmentLabel: "Υπό ανάπτυξη",
      legalHeading: "Νομικά",
      openSourceHeading: "Ανοιχτός κώδικας",
      operatedByLabel: "Λειτουργεί από τη SAMO DANNI EOOD",
      pricingLabel: "Τιμολόγηση",
      privacyPolicyLabel: "Πολιτική απορρήτου",
      productHeading: "Προϊόν",
      selfHostingGuideLabel: "Οδηγός αυτοφιλοξενίας",
      supportLabel: "Υποστήριξη",
      termsOfServiceLabel: "Όροι χρήσης",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "Όσοι κάνουν επαναλήψεις μετρώνται ως νέοι την πρώτη ημέρα επανάληψής τους ή ως επανερχόμενοι αν είχαν κάνει επανάληψη και παλιότερα. Μια επανάληψη μετράει όταν κάποιος επιλέγει Ξανά, Δύσκολο, Καλό ή Εύκολο σε μια κάρτα.",
        dailyUniqueUsersChartTitle: "Καθημερινοί χρήστες επαναλήψεων: νέοι και επανερχόμενοι",
        dateRangeLabel: "Εύρος ημερομηνιών",
        daysInRangeLabel: "Ημέρες στο εύρος",
        description:
          "Δείτε τη συγκεντρωτική καθημερινή δραστηριότητα επαναλήψεων σε web, iOS και Android. Τα δημοσιευμένα νούμερα είναι συγκεντρωτικά και δεν αποκαλύπτουν περιεχόμενο καρτών, διευθύνσεις email ή ιστορικό μελέτης μεμονωμένων ατόμων.",
        eyebrow: "Δραστηριότητα",
        lastUpdatedLabel: "Τελευταία ενημέρωση",
        peakDailyUniqueUsersLabel: "Μέγιστοι μοναδικοί χρήστες ανά ημέρα",
        peakDailyVolumeLabel: "Μέγιστος ημερήσιος όγκος",
        platformActivityChartDescription:
          "Μια επανάληψη μετράει όταν κάποιος επιλέγει Ξανά, Δύσκολο, Καλό ή Εύκολο σε μια κάρτα. Τα σύνολα ομαδοποιούνται ανά πλατφόρμα.",
        platformActivityChartTitle: "Καθημερινές επαναλήψεις ανά πλατφόρμα",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Ιστός",
        },
        reviewUserCohortLabels: {
          new: "Νέοι",
          returning: "Επανερχόμενοι",
        },
        reviewDateAxisLabel: "Ημερομηνία επανάληψης",
        reviewEventsAxisLabel: "Επαναλήψεις",
        rawSnapshotLabel: "Ακατέργαστα δεδομένα (JSON)",
        sourceLabel: "Δείτε τα ακατέργαστα δεδομένα (JSON)",
        title: "Δραστηριότητα του Nibomo",
        totalReviewEventsLabel: "Σύνολο επαναλήψεων",
        uniqueUsersAxisLabel: "Χρήστες",
        usersWithReviewEventsLabel: "Χρήστες επαναλήψεων",
      },
      agentHintDescription:
        "Συνδέστε τον πράκτορα ΤΝ που χρησιμοποιείτε μέσω MCP: προσθέστε τον διακομιστή Nibomo στο Claude, στο Cursor ή σε οποιονδήποτε πελάτη MCP και θα μπορεί να διαβάζει, να δημιουργεί και να επεξεργάζεται τις κάρτες σας.",
      aiAgentSectionLabel: "ΓΙΑ ΠΡΑΚΤΟΡΕΣ ΤΝ",
      appPreviewAlt:
        "Οθόνες της εφαρμογής Nibomo με επανάληψη, αποτελέσματα απαντήσεων, πρόοδο, προσχέδιο από ΤΝ και λίστα καρτών.",
      appPreviewAriaLabel: "Προεπισκόπηση της εφαρμογής",
      appPreviewLabel: "ΠΡΟΕΠΙΣΚΟΠΗΣΗ ΕΦΑΡΜΟΓΗΣ",
      humanSectionLabel: "ΓΙΑ ΑΝΘΡΩΠΟΥΣ",
    },
    legal: {
      lastUpdatedLabel: "Τελευταία ενημέρωση",
    },
    locale: {
      switcherAriaLabel: "Επιλογή γλώσσας",
    },
    localeSuggestion: {
      actionLabel: "Άνοιγμα της ελληνικής έκδοσης",
      dismissLabel: "Κλείσιμο της πρότασης γλώσσας",
      message: "Αυτή η σελίδα είναι διαθέσιμη στα ελληνικά.",
    },
    menuToggleLabel: "Εναλλαγή μενού",
    navigation: {
      blog: "Ιστολόγιο",
      dashboards: "Δραστηριότητα",
      docs: "Τεκμηρίωση",
      features: "Δυνατότητες",
      pricing: "Τιμολόγηση",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Σαρώστε τον από το κινητό σας",
      webApp: "Εφαρμογή ιστού",
    },
  },
  ro: {
    auth: {
      logIn: "Autentificare",
      openApp: "Deschide aplicația",
      signUpFree: "Înregistrare gratuită",
      startStudyingFree: "Începe să studiezi gratuit",
    },
    blog: {
      breadcrumbLabel: "Blog",
      byPrefix: "De",
      empty: "Articolele urmează în curând.",
      metaDescription: "Noutăți, tutoriale și analize despre Nibomo.",
      notFoundDescription: "Acest articol de blog nu există.",
      notFoundTitle: "Nu a fost găsit",
      readNextHeading: "Citește în continuare",
      title: "Blog",
    },
    breadcrumbs: {
      ariaLabel: "Traseu de navigare",
      homeLabel: "Acasă",
    },
    copyCodeField: {
      copied: "Copiat",
      copy: "Copiază",
      copyFailed: "Copierea a eșuat",
    },
    cta: {
      activityHeading: "Ești gata să începi să recapitulezi propriile fișe?",
      heading:
        "Învață mai mult și uită mai puțin cu fișe gratuite cu repetiție spațiată",
      buttonLabel: "Începe să studiezi gratuit",
      featuresHeading:
        "Creează fișe mai bune și recapitulează-le la momentul potrivit.",
    },
    docs: {
      breadcrumbLabel: "Documentație",
      comingSoonDescription: "Această pagină de documentație este în curs de scriere.",
      comingSoonTitle: "În curând",
      metaDescription:
        "Primii pași, ghid de găzduire proprie, referință API și prezentarea arhitecturii.",
      title: "Documentație",
    },
    footer: {
      appsHeading: "Aplicații",
      blogLabel: "Blog",
      builtByLabel: "Creat de Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Documentație",
      featuresLabel: "Funcționalități",
      inDevelopmentLabel: "În dezvoltare",
      legalHeading: "Aspecte legale",
      openSourceHeading: "Open Source",
      operatedByLabel: "Operat de SAMO DANNI EOOD",
      pricingLabel: "Prețuri",
      privacyPolicyLabel: "Politica de confidențialitate",
      productHeading: "Produs",
      selfHostingGuideLabel: "Ghid de găzduire proprie",
      supportLabel: "Asistență",
      termsOfServiceLabel: "Termeni și condiții",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "Cei care recapitulează sunt grupați ca noi în prima lor zi de recapitulare sau ca reveniți dacă au mai recapitulat înainte. O recapitulare este numărată când cineva alege Din nou, Greu, Bine sau Ușor la o fișă.",
        dailyUniqueUsersChartTitle: "Cei care recapitulează zilnic: noi vs. reveniți",
        dateRangeLabel: "Interval de date",
        daysInRangeLabel: "Zile în interval",
        description:
          "Vezi activitatea zilnică agregată de recapitulare pe web, iOS și Android. Cifrele publicate sunt totaluri agregate și nu expun conținutul fișelor, adresele de e-mail sau istoricul de studiu al fiecărei persoane.",
        eyebrow: "Activitate",
        lastUpdatedLabel: "Ultima actualizare",
        peakDailyUniqueUsersLabel: "Maxim zilnic de utilizatori unici",
        peakDailyVolumeLabel: "Volum zilnic maxim",
        platformActivityChartDescription:
          "O recapitulare este numărată când cineva alege Din nou, Greu, Bine sau Ușor la o fișă. Totalurile sunt grupate pe platformă.",
        platformActivityChartTitle: "Recapitulări zilnice pe platformă",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        reviewUserCohortLabels: {
          new: "Noi",
          returning: "Reveniți",
        },
        reviewDateAxisLabel: "Data recapitulării",
        reviewEventsAxisLabel: "Recapitulări",
        rawSnapshotLabel: "Date brute (JSON)",
        sourceLabel: "Vezi datele brute (JSON)",
        title: "Activitatea Nibomo",
        totalReviewEventsLabel: "Total recapitulări",
        uniqueUsersAxisLabel: "Cei care recapitulează",
        usersWithReviewEventsLabel: "Cei care recapitulează",
      },
      agentHintDescription:
        "Conectează-ți agentul AI prin MCP: adaugă serverul Nibomo în Claude, Cursor sau orice client MCP și va putea citi, crea și edita fișele tale.",
      aiAgentSectionLabel: "PENTRU AGENȚI AI",
      appPreviewAlt:
        "Ecrane din aplicația Nibomo care arată recapitularea, rezultatele răspunsurilor, progresul, o ciornă AI și lista de fișe.",
      appPreviewAriaLabel: "Previzualizarea aplicației",
      appPreviewLabel: "PREVIZUALIZAREA APLICAȚIEI",
      humanSectionLabel: "PENTRU OAMENI",
    },
    legal: {
      lastUpdatedLabel: "Ultima actualizare",
    },
    locale: {
      switcherAriaLabel: "Selector de limbă",
    },
    localeSuggestion: {
      actionLabel: "Deschide versiunea în română",
      dismissLabel: "Închide sugestia de limbă",
      message: "Această pagină este disponibilă în română.",
    },
    menuToggleLabel: "Comută meniul",
    navigation: {
      blog: "Blog",
      dashboards: "Activitate",
      docs: "Documentație",
      features: "Funcționalități",
      pricing: "Prețuri",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Scanează-l de pe telefon",
      webApp: "Aplicație web",
    },
  },
  hu: {
    auth: {
      logIn: "Bejelentkezés",
      openApp: "Alkalmazás megnyitása",
      signUpFree: "Ingyenes regisztráció",
      startStudyingFree: "Kezdj el tanulni ingyen",
    },
    blog: {
      breadcrumbLabel: "Blog",
      byPrefix: "Szerző:",
      empty: "A bejegyzések hamarosan érkeznek.",
      metaDescription: "Hírek, útmutatók és háttér a Nibomóról.",
      notFoundDescription: "Ez a blogbejegyzés nem létezik.",
      notFoundTitle: "Nem található",
      readNextHeading: "Olvasd el ezt is",
      title: "Blog",
    },
    breadcrumbs: {
      ariaLabel: "Morzsamenü",
      homeLabel: "Főoldal",
    },
    copyCodeField: {
      copied: "Másolva",
      copy: "Másolás",
      copyFailed: "A másolás nem sikerült",
    },
    cta: {
      activityHeading: "Készen állsz, hogy a saját kártyáidat ismételd?",
      heading:
        "Tanulj többet és felejts kevesebbet ingyenes, szakaszos ismétléses tanulókártyákkal",
      buttonLabel: "Kezdj el tanulni ingyen",
      featuresHeading:
        "Készíts jobb kártyákat, és ismételd őket a megfelelő időben.",
    },
    docs: {
      breadcrumbLabel: "Dokumentáció",
      comingSoonDescription: "Ez a dokumentációs oldal még készül.",
      comingSoonTitle: "Hamarosan",
      metaDescription:
        "Első lépések, saját üzemeltetési útmutató, API-referencia és architektúra-áttekintés.",
      title: "Dokumentáció",
    },
    footer: {
      appsHeading: "Alkalmazások",
      blogLabel: "Blog",
      builtByLabel: "Készítette: Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Dokumentáció",
      featuresLabel: "Funkciók",
      inDevelopmentLabel: "Fejlesztés alatt",
      legalHeading: "Jogi információk",
      openSourceHeading: "Nyílt forráskód",
      operatedByLabel: "Üzemelteti: SAMO DANNI EOOD",
      pricingLabel: "Árak",
      privacyPolicyLabel: "Adatvédelmi tájékoztató",
      productHeading: "Termék",
      selfHostingGuideLabel: "Saját üzemeltetési útmutató",
      supportLabel: "Támogatás",
      termsOfServiceLabel: "Általános szerződési feltételek",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "Az ismétlők az első ismétlési napjukon újnak számítanak, és visszatérőnek, ha korábban is ismételtek. Egy ismétlés akkor számít bele, ha valaki az Újra, a Nehéz, a Jó vagy a Könnyű értékelést választja egy kártyán.",
        dailyUniqueUsersChartTitle: "Napi ismétlők: új és visszatérő",
        dateRangeLabel: "Időszak",
        daysInRangeLabel: "Napok az időszakban",
        description:
          "Nézd meg az összesített napi ismétlési aktivitást a weben, iOS-en és Androidon. A közölt számok összesítések, és nem fedik fel a kártyák tartalmát, az e-mail-címeket vagy az egyéni tanulási előzményeket.",
        eyebrow: "Aktivitás",
        lastUpdatedLabel: "Utoljára frissítve",
        peakDailyUniqueUsersLabel: "Csúcs napi egyedi felhasználók",
        peakDailyVolumeLabel: "Csúcs napi mennyiség",
        platformActivityChartDescription:
          "Egy ismétlés akkor számít bele, ha valaki az Újra, a Nehéz, a Jó vagy a Könnyű értékelést választja egy kártyán. A számok platform szerint vannak csoportosítva.",
        platformActivityChartTitle: "Napi ismétlések platformonként",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        reviewUserCohortLabels: {
          new: "Új",
          returning: "Visszatérő",
        },
        reviewDateAxisLabel: "Ismétlés dátuma",
        reviewEventsAxisLabel: "Ismétlések",
        rawSnapshotLabel: "Nyers adatok (JSON)",
        sourceLabel: "Nyers adatok megtekintése (JSON)",
        title: "Nibomo-aktivitás",
        totalReviewEventsLabel: "Összes ismétlés",
        uniqueUsersAxisLabel: "Ismétlők",
        usersWithReviewEventsLabel: "Ismétlők",
      },
      agentHintDescription:
        "Csatlakoztasd az AI-ügynöködet MCP-n keresztül: add hozzá a Nibomo-szervert a Claude-hoz, a Cursorhoz vagy bármely MCP-klienshez, és olvashatja, létrehozhatja és szerkesztheti a kártyáidat.",
      aiAgentSectionLabel: "AI-ÜGYNÖKÖKNEK",
      appPreviewAlt:
        "Nibomo-képernyők az ismétléssel, a válaszeredményekkel, a haladással, az AI-vázlattal és a kártyalistával.",
      appPreviewAriaLabel: "Alkalmazás előnézete",
      appPreviewLabel: "ALKALMAZÁS ELŐNÉZETE",
      humanSectionLabel: "EMBEREKNEK",
    },
    legal: {
      lastUpdatedLabel: "Utoljára frissítve",
    },
    locale: {
      switcherAriaLabel: "Nyelvválasztó",
    },
    localeSuggestion: {
      actionLabel: "Magyar változat megnyitása",
      dismissLabel: "Nyelvi javaslat bezárása",
      message: "Ez az oldal elérhető magyarul.",
    },
    menuToggleLabel: "Menü megnyitása",
    navigation: {
      blog: "Blog",
      dashboards: "Aktivitás",
      docs: "Dokumentáció",
      features: "Funkciók",
      pricing: "Árak",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Szkenneld be a telefonoddal",
      webApp: "Webalkalmazás",
    },
  },
  fa: {
    auth: {
      logIn: "ورود",
      openApp: "باز کردن برنامه",
      signUpFree: "ثبت‌نام رایگان",
      startStudyingFree: "رایگان شروع به مطالعه کنید",
    },
    blog: {
      breadcrumbLabel: "وبلاگ",
      byPrefix: "نوشتهٔ",
      empty: "نوشته‌ها به‌زودی منتشر می‌شوند.",
      metaDescription: "به‌روزرسانی‌ها، آموزش‌ها و نکته‌هایی دربارهٔ Nibomo.",
      notFoundDescription: "این نوشتهٔ وبلاگ وجود ندارد.",
      notFoundTitle: "پیدا نشد",
      readNextHeading: "خواندن بعدی",
      title: "وبلاگ",
    },
    breadcrumbs: {
      ariaLabel: "مسیر صفحه",
      homeLabel: "خانه",
    },
    copyCodeField: {
      copied: "کپی شد",
      copy: "کپی",
      copyFailed: "کپی ناموفق بود",
    },
    cta: {
      activityHeading: "آماده‌اید مرور کارت‌های خودتان را شروع کنید؟",
      heading:
        "با کارت‌های آموزشی رایگان و تکرار فاصله‌دار بیشتر یاد بگیرید و کمتر فراموش کنید",
      buttonLabel: "رایگان شروع به مطالعه کنید",
      featuresHeading:
        "کارت‌های بهتری بسازید و آن‌ها را در زمان مناسب مرور کنید.",
    },
    docs: {
      breadcrumbLabel: "مستندات",
      comingSoonDescription: "این صفحهٔ مستندات در حال نوشته شدن است.",
      comingSoonTitle: "به‌زودی",
      metaDescription:
        "شروع کار، راهنمای میزبانی شخصی، مرجع API و مروری بر معماری.",
      title: "مستندات",
    },
    footer: {
      appsHeading: "برنامه‌ها",
      blogLabel: "وبلاگ",
      builtByLabel: "ساختهٔ Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "مستندات",
      featuresLabel: "امکانات",
      inDevelopmentLabel: "در حال توسعه",
      legalHeading: "حقوقی",
      openSourceHeading: "متن‌باز",
      operatedByLabel: "اداره‌شده توسط SAMO DANNI EOOD",
      pricingLabel: "قیمت‌گذاری",
      privacyPolicyLabel: "سیاست حریم خصوصی",
      productHeading: "محصول",
      selfHostingGuideLabel: "راهنمای میزبانی شخصی",
      supportLabel: "پشتیبانی",
      termsOfServiceLabel: "شرایط استفاده از خدمات",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "مرورکنندگان در نخستین روز مرورشان جدید و اگر پیش‌تر مرور کرده باشند بازگشته دسته‌بندی می‌شوند. هر بار که کسی روی یک کارت دوباره، سخت، خوب یا آسان را انتخاب کند، یک مرور شمرده می‌شود.",
        dailyUniqueUsersChartTitle: "مرورکنندگان روزانه: جدید در برابر بازگشته",
        dateRangeLabel: "بازهٔ تاریخ",
        daysInRangeLabel: "روزهای بازه",
        description:
          "فعالیت مرور روزانه را به‌صورت تجمیعی در وب، iOS و Android ببینید. ارقام منتشرشده شمارش‌های تجمیعی هستند و محتوای کارت‌ها، نشانی‌های ایمیل یا تاریخچهٔ مطالعهٔ افراد را فاش نمی‌کنند.",
        eyebrow: "فعالیت",
        lastUpdatedLabel: "آخرین به‌روزرسانی",
        peakDailyUniqueUsersLabel: "بیشینهٔ کاربران یکتای روزانه",
        peakDailyVolumeLabel: "بیشینهٔ حجم روزانه",
        platformActivityChartDescription:
          "هر بار که کسی روی یک کارت دوباره، سخت، خوب یا آسان را انتخاب کند، یک مرور شمرده می‌شود. شمارش‌ها بر اساس پلتفرم گروه‌بندی شده‌اند.",
        platformActivityChartTitle: "مرورهای روزانه بر اساس پلتفرم",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "وب",
        },
        reviewUserCohortLabels: {
          new: "جدید",
          returning: "بازگشته",
        },
        reviewDateAxisLabel: "تاریخ مرور",
        reviewEventsAxisLabel: "مرورها",
        rawSnapshotLabel: "دادهٔ خام (JSON)",
        sourceLabel: "مشاهدهٔ دادهٔ خام (JSON)",
        title: "فعالیت Nibomo",
        totalReviewEventsLabel: "کل مرورها",
        uniqueUsersAxisLabel: "مرورکنندگان",
        usersWithReviewEventsLabel: "مرورکنندگان",
      },
      agentHintDescription:
        "عامل هوش مصنوعی خود را از طریق MCP وصل کنید: سرور Nibomo را به Claude، Cursor یا هر کلاینت MCP اضافه کنید تا بتواند کارت‌های شما را بخواند، بسازد و ویرایش کند.",
      aiAgentSectionLabel: "برای عامل‌های هوش مصنوعی",
      appPreviewAlt:
        "صفحه‌های برنامهٔ Nibomo شامل مرور، نتیجهٔ پاسخ، پیشرفت، پیش‌نویس هوش مصنوعی و فهرست کارت‌ها.",
      appPreviewAriaLabel: "پیش‌نمایش برنامه",
      appPreviewLabel: "پیش‌نمایش برنامه",
      humanSectionLabel: "برای افراد",
    },
    legal: {
      lastUpdatedLabel: "آخرین به‌روزرسانی",
    },
    locale: {
      switcherAriaLabel: "انتخاب زبان",
    },
    localeSuggestion: {
      actionLabel: "باز کردن نسخهٔ فارسی",
      dismissLabel: "بستن پیشنهاد زبان",
      message: "این صفحه به فارسی در دسترس است.",
    },
    menuToggleLabel: "باز و بسته کردن منو",
    navigation: {
      blog: "وبلاگ",
      dashboards: "فعالیت",
      docs: "مستندات",
      features: "امکانات",
      pricing: "قیمت‌گذاری",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "با گوشی خود آن را اسکن کنید",
      webApp: "برنامهٔ وب",
    },
  },
  ca: {
    auth: {
      logIn: "Inicia la sessió",
      openApp: "Obre l'app",
      signUpFree: "Registra't gratis",
      startStudyingFree: "Comença a estudiar gratis",
    },
    blog: {
      breadcrumbLabel: "Blog",
      byPrefix: "Per",
      empty: "Ben aviat hi haurà articles.",
      metaDescription: "Novetats, tutorials i idees sobre Nibomo.",
      notFoundDescription: "Aquest article del blog no existeix.",
      notFoundTitle: "No s'ha trobat",
      readNextHeading: "Llegeix a continuació",
      title: "Blog",
    },
    breadcrumbs: {
      ariaLabel: "Ruta de navegació",
      homeLabel: "Inici",
    },
    copyCodeField: {
      copied: "Copiat",
      copy: "Copia",
      copyFailed: "No s'ha pogut copiar",
    },
    cta: {
      activityHeading: "Vols començar a repassar les teves pròpies targetes?",
      heading:
        "Aprèn més i oblida menys amb targetes d'estudi gratuïtes de repetició espaiada",
      buttonLabel: "Comença a estudiar gratis",
      featuresHeading:
        "Crea targetes millors i repassa-les en el moment adequat.",
    },
    docs: {
      breadcrumbLabel: "Docs",
      comingSoonDescription: "Aquesta pàgina de la documentació s'està escrivint.",
      comingSoonTitle: "Properament",
      metaDescription:
        "Primers passos, guia d'autoallotjament, referència de l'API i visió general de l'arquitectura.",
      title: "Documentació",
    },
    footer: {
      appsHeading: "Apps",
      blogLabel: "Blog",
      builtByLabel: "Creat per Kirill Markin",
      copyrightLabel: "Nibomo",
      documentationLabel: "Documentació",
      featuresLabel: "Funcionalitats",
      inDevelopmentLabel: "En desenvolupament",
      legalHeading: "Legal",
      openSourceHeading: "Codi obert",
      operatedByLabel: "Operat per SAMO DANNI EOOD",
      pricingLabel: "Preus",
      privacyPolicyLabel: "Política de privadesa",
      productHeading: "Producte",
      selfHostingGuideLabel: "Guia d'autoallotjament",
      supportLabel: "Assistència",
      termsOfServiceLabel: "Condicions del servei",
    },
    home: {
      activity: {
        dailyUniqueUsersChartDescription:
          "Qui repassa compta com a nou el primer dia que repassa, o com a recurrent si ja havia repassat abans. Es compta un repàs quan algú tria Un altre cop, Difícil, Bé o Fàcil en una targeta.",
        dailyUniqueUsersChartTitle: "Persones que repassen cada dia: noves i recurrents",
        dateRangeLabel: "Interval de dates",
        daysInRangeLabel: "Dies de l'interval",
        description:
          "Consulta l'activitat de repàs diària agregada al web, a iOS i a Android. Les xifres publicades són recomptes agregats i no revelen el contingut de les targetes, les adreces de correu electrònic ni els historials d'estudi individuals.",
        eyebrow: "Activitat",
        lastUpdatedLabel: "Última actualització",
        peakDailyUniqueUsersLabel: "Màxim d'usuaris únics diaris",
        peakDailyVolumeLabel: "Volum diari màxim",
        platformActivityChartDescription:
          "Es compta un repàs quan algú tria Un altre cop, Difícil, Bé o Fàcil en una targeta. Els recomptes s'agrupen per plataforma.",
        platformActivityChartTitle: "Repassos diaris per plataforma",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        reviewUserCohortLabels: {
          new: "Noves",
          returning: "Recurrents",
        },
        reviewDateAxisLabel: "Data del repàs",
        reviewEventsAxisLabel: "Repassos",
        rawSnapshotLabel: "Dades en brut (JSON)",
        sourceLabel: "Mostra les dades en brut (JSON)",
        title: "Activitat de Nibomo",
        totalReviewEventsLabel: "Repassos totals",
        uniqueUsersAxisLabel: "Usuaris",
        usersWithReviewEventsLabel: "Usuaris que repassen",
      },
      agentHintDescription:
        "Connecta el teu agent d'IA per MCP: afegeix el servidor de Nibomo a Claude, Cursor o a qualsevol client MCP i podrà llegir, crear i editar les teves targetes.",
      aiAgentSectionLabel: "PER A AGENTS D'IA",
      appPreviewAlt:
        "Pantalles de l'app Nibomo amb els fluxos de repàs, resultats de la resposta, progrés, esborrany amb IA i llista de targetes.",
      appPreviewAriaLabel: "Vista prèvia de l'app",
      appPreviewLabel: "VISTA PRÈVIA DE L'APP",
      humanSectionLabel: "PER A PERSONES",
    },
    legal: {
      lastUpdatedLabel: "Última actualització",
    },
    locale: {
      switcherAriaLabel: "Selector d'idioma",
    },
    localeSuggestion: {
      actionLabel: "Obre la versió en català",
      dismissLabel: "Tanca el suggeriment d'idioma",
      message: "Aquesta pàgina està disponible en català.",
    },
    menuToggleLabel: "Obre el menú",
    navigation: {
      blog: "Blog",
      dashboards: "Activitat",
      docs: "Docs",
      features: "Funcionalitats",
      pricing: "Preus",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      scanQrHint: "Escaneja'l des del mòbil",
      webApp: "App web",
    },
  },
};

export function getUiCopy(locale: AppLocale): AppUiCopy {
  return UI_COPY_BY_LOCALE[locale];
}
