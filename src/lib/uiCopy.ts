import type { AppLocale } from "@/lib/localeConfig";

interface AppUiCopy {
  readonly auth: {
    readonly logIn: string;
    readonly openApp: string;
    readonly signUpFree: string;
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
      readonly daysInRangeLabel: string;
      readonly description: string;
      readonly eyebrow: string;
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
    readonly webApp: string;
  };
}

const UI_COPY_BY_LOCALE: Readonly<Record<AppLocale, AppUiCopy>> = {
  en: {
    auth: {
      logIn: "Log In",
      openApp: "Open App",
      signUpFree: "Sign Up Free",
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
      operatedByLabel: "Operated by Ozma Inc",
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
          "Unique users are split into new reviewers on their first review day and returning reviewers who reviewed before. A review means choosing Again, Hard, Good, or Easy on a card.",
        dailyUniqueUsersChartTitle: "Daily unique users with at least 1 review event - new vs returning",
        daysInRangeLabel: "Days in range",
        description:
          "A simpler build-time snapshot of public review activity. Metrics cover the full date range; charts show daily unique users and review events by platform.",
        eyebrow: "Public Activity",
        peakDailyUniqueUsersLabel: "Peak daily unique users",
        peakDailyVolumeLabel: "Peak daily volume",
        platformActivityChartDescription:
          "A review means choosing Again, Hard, Good, or Easy on a card. This chart shows review events by platform.",
        platformActivityChartTitle: "Daily review events by platform",
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
        reviewEventsAxisLabel: "Review events",
        sourceLabel: "Open Snapshot JSON",
        title: "Real review activity from the public API",
        totalReviewEventsLabel: "Total review events",
        uniqueUsersAxisLabel: "Unique users",
        usersWithReviewEventsLabel: "Users with review events",
      },
      agentHintDescription:
        "Share this discovery URL with your AI agent. It can sign up, create your account, and manage your Flashcards workspace for you.",
      aiAgentSectionLabel: "FOR AI AGENT",
      appPreviewAlt:
        "Flashcards app screens showing review, answer results, progress, AI draft, and card list flows.",
      appPreviewAriaLabel: "App preview",
      appPreviewLabel: "APP PREVIEW",
      humanSectionLabel: "FOR HUMAN",
    },
    legal: {
      lastUpdatedLabel: "Last updated",
    },
    locale: {
      switcherAriaLabel: "Language switcher",
    },
    menuToggleLabel: "Toggle menu",
    navigation: {
      blog: "Blog",
      dashboards: "Dashboards",
      docs: "Docs",
      features: "Features",
      pricing: "Pricing",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      webApp: "Web App",
    },
  },
  es: {
    auth: {
      logIn: "Iniciar sesión",
      openApp: "Abrir app",
      signUpFree: "Registrarse gratis",
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
      operatedByLabel: "Operado por Ozma Inc",
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
          "Los usuarios únicos se dividen entre nuevos usuarios en su primer día de repaso y usuarios recurrentes que ya habían repasado antes. Un repaso significa elegir Again, Hard, Good o Easy en una tarjeta.",
        dailyUniqueUsersChartTitle: "Usuarios únicos diarios con al menos 1 evento de repaso - nuevos vs recurrentes",
        daysInRangeLabel: "Días en el rango",
        description:
          "Un snapshot público más simple de la actividad de repasos, capturado durante el build. Las métricas cubren todo el rango de fechas; los gráficos muestran usuarios únicos diarios y eventos de repaso por plataforma.",
        eyebrow: "Actividad pública",
        peakDailyUniqueUsersLabel: "Pico diario de usuarios únicos",
        peakDailyVolumeLabel: "Pico diario de volumen",
        platformActivityChartDescription:
          "Un repaso significa elegir Again, Hard, Good o Easy en una tarjeta. Este gráfico muestra eventos de repaso por plataforma.",
        platformActivityChartTitle: "Eventos diarios de repaso por plataforma",
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
        reviewEventsAxisLabel: "Eventos de repaso",
        sourceLabel: "Abrir JSON del snapshot",
        title: "Actividad real desde la API pública",
        totalReviewEventsLabel: "Eventos de repaso totales",
        uniqueUsersAxisLabel: "Usuarios únicos",
        usersWithReviewEventsLabel: "Usuarios con eventos de repaso",
      },
      agentHintDescription:
        "Comparte esta URL de descubrimiento con tu agente de IA. Puede registrarte, crear tu cuenta y gestionar tu espacio de trabajo de Flashcards por ti.",
      aiAgentSectionLabel: "PARA AGENTE DE IA",
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
    menuToggleLabel: "Abrir menú",
    navigation: {
      blog: "Blog",
      dashboards: "Paneles",
      docs: "Docs",
      features: "Funciones",
      pricing: "Precios",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      webApp: "App web",
    },
  },
  ar: {
    auth: {
      logIn: "تسجيل الدخول",
      openApp: "فتح التطبيق",
      signUpFree: "التسجيل مجانًا",
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
      operatedByLabel: "تديره Ozma Inc",
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
          "ينقسم المستخدمون الفريدون إلى مستخدمين جدد في أول يوم مراجعة لهم ومستخدمين عائدين راجعوا من قبل. المراجعة تعني اختيار Again أو Hard أو Good أو Easy على بطاقة.",
        dailyUniqueUsersChartTitle: "المستخدمون الفريدون يوميًا مع حدث مراجعة واحد على الأقل - الجدد مقابل العائدين",
        daysInRangeLabel: "الأيام في النطاق",
        description:
          "لقطة أبسط لنشاط المراجعات العام يتم التقاطها وقت البناء. تغطي المقاييس كامل نطاق التاريخ، وتعرض الرسوم المستخدمين الفريدين يوميًا وأحداث المراجعة حسب المنصة.",
        eyebrow: "نشاط عام",
        peakDailyUniqueUsersLabel: "أعلى عدد يومي للمستخدمين الفريدين",
        peakDailyVolumeLabel: "أعلى حجم يومي",
        platformActivityChartDescription:
          "المراجعة تعني اختيار Again أو Hard أو Good أو Easy على بطاقة. يعرض هذا الرسم أحداث المراجعة حسب المنصة.",
        platformActivityChartTitle: "أحداث المراجعة اليومية حسب المنصة",
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
        reviewEventsAxisLabel: "أحداث المراجعة",
        sourceLabel: "فتح JSON الخاص باللقطة",
        title: "نشاط حقيقي من الـ API العامة",
        totalReviewEventsLabel: "إجمالي أحداث المراجعة",
        uniqueUsersAxisLabel: "المستخدمون الفريدون",
        usersWithReviewEventsLabel: "مستخدمون لديهم أحداث مراجعة",
      },
      agentHintDescription:
        "شارك رابط الاكتشاف هذا مع وكيل الذكاء الاصطناعي لديك. يمكنه التسجيل، إنشاء حسابك، وإدارة مساحة عمل Flashcards نيابةً عنك.",
      aiAgentSectionLabel: "لوكيل الذكاء الاصطناعي",
      appPreviewAlt:
        "شاشات Flashcards تعرض المراجعة والنتائج والتقدم ومسودة الذكاء الاصطناعي وقائمة البطاقات.",
      appPreviewAriaLabel: "معاينة التطبيق",
      appPreviewLabel: "معاينة التطبيق",
      humanSectionLabel: "للمستخدم البشري",
    },
    legal: {
      lastUpdatedLabel: "آخر تحديث",
    },
    locale: {
      switcherAriaLabel: "مبدّل اللغة",
    },
    menuToggleLabel: "تبديل القائمة",
    navigation: {
      blog: "المدونة",
      dashboards: "لوحات المعلومات",
      docs: "التوثيق",
      features: "الميزات",
      pricing: "الأسعار",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      webApp: "تطبيق الويب",
    },
  },
  de: {
    auth: {
      logIn: "Anmelden",
      openApp: "App öffnen",
      signUpFree: "Kostenlos starten",
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
      operatedByLabel: "Betrieben von Ozma Inc",
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
          "Eindeutige Nutzer werden in neue Reviewer an ihrem ersten Review-Tag und wiederkehrende Reviewer mit früheren Reviews aufgeteilt. Ein Review bedeutet, auf einer Karte Again, Hard, Good oder Easy zu wählen.",
        dailyUniqueUsersChartTitle: "Tägliche eindeutige Nutzer mit mindestens 1 Review-Ereignis - neu vs wiederkehrend",
        daysInRangeLabel: "Tage im Zeitraum",
        description:
          "Ein einfacherer Build-Time-Snapshot der öffentlichen Review-Aktivität. Die Metriken decken den gesamten Zeitraum ab; die Charts zeigen tägliche eindeutige Nutzer und Review-Ereignisse nach Plattform.",
        eyebrow: "Öffentliche Aktivität",
        peakDailyUniqueUsersLabel: "Höchste tägliche eindeutige Nutzer",
        peakDailyVolumeLabel: "Höchstes tägliches Volumen",
        platformActivityChartDescription:
          "Ein Review bedeutet, auf einer Karte Again, Hard, Good oder Easy zu wählen. Dieser Chart zeigt Review-Ereignisse nach Plattform.",
        platformActivityChartTitle: "Tägliche Review-Ereignisse nach Plattform",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        reviewUserCohortLabels: {
          new: "Neu",
          returning: "Wiederkehrend",
        },
        reviewDateAxisLabel: "Review-Datum",
        reviewEventsAxisLabel: "Review-Ereignisse",
        sourceLabel: "Snapshot-JSON öffnen",
        title: "Reale Aktivität aus der öffentlichen API",
        totalReviewEventsLabel: "Review-Ereignisse gesamt",
        uniqueUsersAxisLabel: "Eindeutige Nutzer",
        usersWithReviewEventsLabel: "Nutzer mit Review-Ereignissen",
      },
      agentHintDescription:
        "Teile diese Discovery-URL mit deinem KI-Agenten. Er kann sich registrieren, dein Konto anlegen und deinen Flashcards-Arbeitsbereich verwalten.",
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
    menuToggleLabel: "Menü umschalten",
    navigation: {
      blog: "Blog",
      dashboards: "Dashboards",
      docs: "Doku",
      features: "Funktionen",
      pricing: "Preise",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      webApp: "Web-App",
    },
  },
  hi: {
    auth: {
      logIn: "लॉग इन",
      openApp: "ऐप खोलें",
      signUpFree: "मुफ़्त शुरू करें",
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
      operatedByLabel: "Ozma Inc द्वारा संचालित",
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
          "Unique users को उनके पहले review दिन वाले नए reviewers और पहले review कर चुके वापस आने वाले reviewers में बांटा गया है। review का मतलब कार्ड पर Again, Hard, Good या Easy चुनना है।",
        dailyUniqueUsersChartTitle: "कम से कम 1 review event वाले रोज़ाना unique users - नए vs वापस आने वाले",
        daysInRangeLabel: "Range में दिन",
        description:
          "Public review activity का एक सरल build-time snapshot. Metrics पूरे date range को cover करते हैं; charts रोज़ाना unique users और platform के हिसाब से review events दिखाते हैं।",
        eyebrow: "पब्लिक एक्टिविटी",
        peakDailyUniqueUsersLabel: "Peak daily unique users",
        peakDailyVolumeLabel: "Peak daily volume",
        platformActivityChartDescription:
          "review का मतलब कार्ड पर Again, Hard, Good या Easy चुनना है। यह chart platform के हिसाब से review events दिखाता है।",
        platformActivityChartTitle: "Platform के हिसाब से daily review events",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "वेब",
        },
        reviewUserCohortLabels: {
          new: "नए",
          returning: "वापस आने वाले",
        },
        reviewDateAxisLabel: "Review date",
        reviewEventsAxisLabel: "Review events",
        sourceLabel: "Snapshot JSON खोलें",
        title: "Public API से वास्तविक activity",
        totalReviewEventsLabel: "Total review events",
        uniqueUsersAxisLabel: "Unique users",
        usersWithReviewEventsLabel: "Users with review events",
      },
      agentHintDescription:
        "यह discovery URL अपने AI agent के साथ साझा करें। वह साइन अप कर सकता है, आपका अकाउंट बना सकता है, और आपका Flashcards workspace मैनेज कर सकता है।",
      aiAgentSectionLabel: "AI AGENT के लिए",
      appPreviewAlt:
        "Flashcards की स्क्रीनें जिनमें review, results, progress, AI draft और cards list दिखाई देते हैं।",
      appPreviewAriaLabel: "ऐप प्रीव्यू",
      appPreviewLabel: "ऐप प्रीव्यू",
      humanSectionLabel: "इंसानों के लिए",
    },
    legal: {
      lastUpdatedLabel: "आख़िरी अपडेट",
    },
    locale: {
      switcherAriaLabel: "भाषा चयन",
    },
    menuToggleLabel: "मेनू खोलें",
    navigation: {
      blog: "ब्लॉग",
      dashboards: "डैशबोर्ड",
      docs: "डॉक्स",
      features: "फ़ीचर्स",
      pricing: "कीमत",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      webApp: "वेब ऐप",
    },
  },
  ja: {
    auth: {
      logIn: "ログイン",
      openApp: "アプリを開く",
      signUpFree: "無料で始める",
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
      operatedByLabel: "Ozma Inc が運営",
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
          "ユニークユーザーを、初めてレビューした日の新規ユーザーと、以前にもレビューしたリピーターに分けて表示します。レビューとは、カードで Again、Hard、Good、Easy のいずれかを選ぶことです。",
        dailyUniqueUsersChartTitle: "1 回以上のレビューイベントがある日別ユニークユーザー - 新規 vs リピーター",
        daysInRangeLabel: "期間内の日数",
        description:
          "公開レビュー活動をビルド時に取得した、よりシンプルなスナップショットです。指標は期間全体を対象にし、グラフは日別ユニークユーザーとプラットフォーム別レビューイベントを示します。",
        eyebrow: "公開アクティビティ",
        peakDailyUniqueUsersLabel: "日別ユニークユーザーの最大値",
        peakDailyVolumeLabel: "日別ボリュームの最大値",
        platformActivityChartDescription:
          "レビューとは、カードで Again、Hard、Good、Easy のいずれかを選ぶことです。このグラフはプラットフォーム別のレビューイベントを示します。",
        platformActivityChartTitle: "プラットフォーム別の日別レビューイベント",
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
        reviewEventsAxisLabel: "レビューイベント",
        sourceLabel: "Snapshot JSON を開く",
        title: "公開 API から見える実際のアクティビティ",
        totalReviewEventsLabel: "レビューイベント合計",
        uniqueUsersAxisLabel: "ユニークユーザー",
        usersWithReviewEventsLabel: "レビューイベントがあるユーザー",
      },
      agentHintDescription:
        "このディスカバリー URL を AI エージェントに共有してください。サインアップ、アカウント作成、Flashcards ワークスペースの管理まで任せられます。",
      aiAgentSectionLabel: "AI エージェント向け",
      appPreviewAlt:
        "レビュー、結果、進捗、AI 下書き、カード一覧を示す Flashcards の画面。",
      appPreviewAriaLabel: "アプリのプレビュー",
      appPreviewLabel: "アプリプレビュー",
      humanSectionLabel: "人向け",
    },
    legal: {
      lastUpdatedLabel: "最終更新",
    },
    locale: {
      switcherAriaLabel: "言語切替",
    },
    menuToggleLabel: "メニューを切り替える",
    navigation: {
      blog: "ブログ",
      dashboards: "ダッシュボード",
      docs: "ドキュメント",
      features: "機能",
      pricing: "料金",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      webApp: "ウェブアプリ",
    },
  },
  ru: {
    auth: {
      logIn: "Войти",
      openApp: "Открыть приложение",
      signUpFree: "Начать бесплатно",
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
      operatedByLabel: "Сервисом управляет Ozma Inc",
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
          "Уникальные пользователи разделены на новых пользователей в их первый день повторений и вернувшихся пользователей, которые повторяли раньше. Повторение означает выбор Again, Hard, Good или Easy на карточке.",
        dailyUniqueUsersChartTitle: "Дневные уникальные пользователи с минимум 1 событием повторения - новые vs вернувшиеся",
        daysInRangeLabel: "Дней в периоде",
        description:
          "Более простой build-time snapshot публичной активности повторений. Метрики покрывают весь период; графики показывают дневных уникальных пользователей и события повторений по платформам.",
        eyebrow: "Публичная активность",
        peakDailyUniqueUsersLabel: "Пик дневных уникальных пользователей",
        peakDailyVolumeLabel: "Пиковый дневной объём",
        platformActivityChartDescription:
          "Повторение означает выбор Again, Hard, Good или Easy на карточке. Этот график показывает события повторений по платформам.",
        platformActivityChartTitle: "Дневные события повторений по платформам",
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
        reviewEventsAxisLabel: "События повторений",
        sourceLabel: "Открыть Snapshot JSON",
        title: "Реальная активность из публичного API",
        totalReviewEventsLabel: "Всего событий повторений",
        uniqueUsersAxisLabel: "Уникальные пользователи",
        usersWithReviewEventsLabel: "Пользователи с событиями повторений",
      },
      agentHintDescription:
        "Поделитесь этим discovery URL со своим AI-агентом. Он сможет зарегистрироваться, создать аккаунт и управлять вашим рабочим пространством Flashcards.",
      aiAgentSectionLabel: "ДЛЯ AI-АГЕНТА",
      appPreviewAlt:
        "Экраны Flashcards с повторением, результатами, прогрессом, AI-черновиком и списком карточек.",
      appPreviewAriaLabel: "Предпросмотр приложения",
      appPreviewLabel: "ПРЕДПРОСМОТР ПРИЛОЖЕНИЯ",
      humanSectionLabel: "ДЛЯ ЧЕЛОВЕКА",
    },
    legal: {
      lastUpdatedLabel: "Последнее обновление",
    },
    locale: {
      switcherAriaLabel: "Переключатель языка",
    },
    menuToggleLabel: "Открыть меню",
    navigation: {
      blog: "Блог",
      dashboards: "Дашборды",
      docs: "Документация",
      features: "Возможности",
      pricing: "Цены",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      webApp: "Веб-приложение",
    },
  },
  zh: {
    auth: {
      logIn: "登录",
      openApp: "打开应用",
      signUpFree: "免费开始",
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
      operatedByLabel: "由 Ozma Inc 运营",
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
          "独立用户会拆分为首次复习当天的新用户，以及之前已经复习过的回访用户。复习是指在卡片上选择 Again、Hard、Good 或 Easy。",
        dailyUniqueUsersChartTitle: "每日独立用户，至少有 1 次复习事件 - 新用户 vs 回访用户",
        daysInRangeLabel: "范围内天数",
        description:
          "这是构建时捕获的公开复习活动简化快照。指标覆盖整个日期范围；图表展示每日独立用户，以及按平台划分的复习事件。",
        eyebrow: "公开活动",
        peakDailyUniqueUsersLabel: "每日独立用户峰值",
        peakDailyVolumeLabel: "每日复习量峰值",
        platformActivityChartDescription:
          "复习是指在卡片上选择 Again、Hard、Good 或 Easy。此图表按平台展示复习事件。",
        platformActivityChartTitle: "按平台划分的每日复习事件",
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
        reviewEventsAxisLabel: "复习事件",
        sourceLabel: "打开 Snapshot JSON",
        title: "来自公开 API 的真实活动数据",
        totalReviewEventsLabel: "复习事件总数",
        uniqueUsersAxisLabel: "独立用户",
        usersWithReviewEventsLabel: "有复习事件的用户",
      },
      agentHintDescription:
        "把这个 discovery URL 分享给你的 AI agent。它可以帮你注册、创建账号，并管理你的 Flashcards 工作区。",
      aiAgentSectionLabel: "面向 AI AGENT",
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
    menuToggleLabel: "切换菜单",
    navigation: {
      blog: "博客",
      dashboards: "仪表盘",
      docs: "文档",
      features: "功能",
      pricing: "价格",
    },
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      webApp: "网页应用",
    },
  },
};

export function getUiCopy(locale: AppLocale): AppUiCopy {
  return UI_COPY_BY_LOCALE[locale];
}
