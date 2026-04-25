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
      readonly cumulativeLabel: string;
      readonly dailyActivityChartTitle: string;
      readonly description: string;
      readonly eyebrow: string;
      readonly peakDayLabel: string;
      readonly platformActivityChartTitle: string;
      readonly platformLabels: {
        readonly android: string;
        readonly ios: string;
        readonly web: string;
      };
      readonly sourceLabel: string;
      readonly title: string;
      readonly totalReviewEventsLabel: string;
      readonly uniqueReviewersLabel: string;
      readonly updatedLabel: string;
      readonly utcLabel: string;
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
        cumulativeLabel: "Cumulative up to the snapshot date",
        dailyActivityChartTitle: "Daily review volume and unique reviewers",
        description:
          "This section is rendered from the public global snapshot captured at build time and reuses the chart framing from the admin analytics views. Totals are cumulative; the charts show daily review activity across web, Android, and iOS.",
        eyebrow: "Public Activity",
        peakDayLabel: "Peak day",
        platformActivityChartTitle: "Daily platform mix",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        sourceLabel: "Open Snapshot JSON",
        title: "Real review activity from the public API",
        totalReviewEventsLabel: "Review events",
        uniqueReviewersLabel: "Unique reviewers",
        updatedLabel: "Updated",
        utcLabel: "Rendered from UTC snapshot data",
      },
      agentHintDescription:
        "Share this discovery URL with your AI agent. It can sign up, create your account, and manage your Flashcards workspace for you.",
      aiAgentSectionLabel: "FOR AI AGENT",
      appPreviewAlt:
        "Flashcards app screens showing review, cards, AI, editing, open source, and server setup flows.",
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
        cumulativeLabel: "Acumulado hasta la fecha del snapshot",
        dailyActivityChartTitle: "Volumen diario de repasos y revisores únicos",
        description:
          "Esta sección se renderiza con el snapshot global público capturado durante el build y reutiliza el estilo de gráficos de las vistas analíticas del panel admin. Los totales son acumulados; los gráficos muestran la actividad diaria en web, Android e iOS.",
        eyebrow: "Actividad pública",
        peakDayLabel: "Pico diario",
        platformActivityChartTitle: "Mezcla diaria por plataforma",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        sourceLabel: "Abrir JSON del snapshot",
        title: "Actividad real desde la API pública",
        totalReviewEventsLabel: "Eventos de repaso",
        uniqueReviewersLabel: "Revisores únicos",
        updatedLabel: "Actualizado",
        utcLabel: "Renderizado con datos UTC del snapshot",
      },
      agentHintDescription:
        "Comparte esta URL de descubrimiento con tu agente de IA. Puede registrarte, crear tu cuenta y gestionar tu espacio de trabajo de Flashcards por ti.",
      aiAgentSectionLabel: "PARA AGENTE DE IA",
      appPreviewAlt:
        "Pantallas de Flashcards con repaso, tarjetas, IA, edición, código abierto y configuración del servidor.",
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
        cumulativeLabel: "إجمالي تراكمي حتى تاريخ اللقطة",
        dailyActivityChartTitle: "حجم المراجعات اليومي والمراجعين الفريدين",
        description:
          "يُعرض هذا القسم من اللقطة العالمية العامة التي يتم التقاطها وقت البناء، ويستخدم نفس أسلوب الرسوم في لوحات تحليلات المشرف. الإجماليات تراكمية، وتعرض الرسوم النشاط اليومي عبر الويب وAndroid وiOS.",
        eyebrow: "نشاط عام",
        peakDayLabel: "أعلى يوم",
        platformActivityChartTitle: "التوزيع اليومي حسب المنصة",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "الويب",
        },
        sourceLabel: "فتح JSON الخاص باللقطة",
        title: "نشاط حقيقي من الـ API العامة",
        totalReviewEventsLabel: "أحداث المراجعة",
        uniqueReviewersLabel: "المراجعون الفريدون",
        updatedLabel: "آخر تحديث",
        utcLabel: "معروض من بيانات لقطة UTC",
      },
      agentHintDescription:
        "شارك رابط الاكتشاف هذا مع وكيل الذكاء الاصطناعي لديك. يمكنه التسجيل، إنشاء حسابك، وإدارة مساحة عمل Flashcards نيابةً عنك.",
      aiAgentSectionLabel: "لوكيل الذكاء الاصطناعي",
      appPreviewAlt:
        "شاشات Flashcards تعرض المراجعة والبطاقات والذكاء الاصطناعي والتحرير ومسارات الإعداد والاستضافة.",
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
        cumulativeLabel: "Kumuliert bis zum Snapshot-Datum",
        dailyActivityChartTitle: "Tägliches Review-Volumen und eindeutige Reviewer",
        description:
          "Dieser Bereich wird aus dem öffentlichen Global Snapshot gerendert, der zur Build-Zeit erfasst wurde, und übernimmt die Chart-Sprache aus den Admin-Analytics-Ansichten. Die Summen sind kumulativ; die Charts zeigen die tägliche Aktivität auf Web, Android und iOS.",
        eyebrow: "Öffentliche Aktivität",
        peakDayLabel: "Spitzentag",
        platformActivityChartTitle: "Täglicher Plattform-Mix",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Web",
        },
        sourceLabel: "Snapshot-JSON öffnen",
        title: "Reale Aktivität aus der öffentlichen API",
        totalReviewEventsLabel: "Review-Ereignisse",
        uniqueReviewersLabel: "Eindeutige Reviewer",
        updatedLabel: "Aktualisiert",
        utcLabel: "Aus UTC-Snapshot-Daten gerendert",
      },
      agentHintDescription:
        "Teile diese Discovery-URL mit deinem KI-Agenten. Er kann sich registrieren, dein Konto anlegen und deinen Flashcards-Arbeitsbereich verwalten.",
      aiAgentSectionLabel: "FÜR KI-AGENTEN",
      appPreviewAlt:
        "Flashcards-Bildschirme mit Review, Karten, KI, Bearbeitung, Open Source und Server-Setup.",
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
        cumulativeLabel: "स्नैपशॉट तारीख तक का संचयी डेटा",
        dailyActivityChartTitle: "रोज़ाना review volume और unique reviewers",
        description:
          "यह सेक्शन build time पर कैप्चर किए गए public global snapshot से render होता है और admin analytics views वाली chart style का उपयोग करता है। totals cumulative हैं; charts web, Android और iOS पर रोज़ की activity दिखाते हैं।",
        eyebrow: "पब्लिक एक्टिविटी",
        peakDayLabel: "सबसे बड़ा दिन",
        platformActivityChartTitle: "रोज़ाना platform mix",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "वेब",
        },
        sourceLabel: "Snapshot JSON खोलें",
        title: "Public API से वास्तविक activity",
        totalReviewEventsLabel: "Review events",
        uniqueReviewersLabel: "Unique reviewers",
        updatedLabel: "अपडेट किया गया",
        utcLabel: "UTC snapshot data से रेंडर किया गया",
      },
      agentHintDescription:
        "यह discovery URL अपने AI agent के साथ साझा करें। वह साइन अप कर सकता है, आपका अकाउंट बना सकता है, और आपका Flashcards workspace मैनेज कर सकता है।",
      aiAgentSectionLabel: "AI AGENT के लिए",
      appPreviewAlt:
        "Flashcards की स्क्रीनें जिनमें review, cards, AI, editing, open source और server setup दिखाई देता है।",
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
        cumulativeLabel: "スナップショット日時点の累計",
        dailyActivityChartTitle: "日別レビュー量とユニークレビュアー",
        description:
          "このセクションはビルド時に取得した公開グローバルスナップショットからレンダリングされ、管理画面の分析ビューに近いチャート表現を使います。合計値は累計で、グラフは web、Android、iOS の日次アクティビティを示します。",
        eyebrow: "公開アクティビティ",
        peakDayLabel: "最大日",
        platformActivityChartTitle: "日別プラットフォーム構成",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "ウェブ",
        },
        sourceLabel: "Snapshot JSON を開く",
        title: "公開 API から見える実際のアクティビティ",
        totalReviewEventsLabel: "レビューイベント",
        uniqueReviewersLabel: "ユニークレビュアー",
        updatedLabel: "更新日時",
        utcLabel: "UTC スナップショットデータを表示",
      },
      agentHintDescription:
        "このディスカバリー URL を AI エージェントに共有してください。サインアップ、アカウント作成、Flashcards ワークスペースの管理まで任せられます。",
      aiAgentSectionLabel: "AI エージェント向け",
      appPreviewAlt:
        "レビュー、カード、AI、編集、オープンソース、サーバー設定を示す Flashcards の画面。",
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
        cumulativeLabel: "Накоплено на дату снимка",
        dailyActivityChartTitle: "Дневной объём повторений и уникальные пользователи",
        description:
          "Этот блок рендерится из публичного global snapshot, полученного во время build, и использует визуальный язык графиков из admin analytics. Суммы накопительные, а графики показывают дневную активность в web, Android и iOS.",
        eyebrow: "Публичная активность",
        peakDayLabel: "Пиковый день",
        platformActivityChartTitle: "Дневная смесь платформ",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "Веб",
        },
        sourceLabel: "Открыть Snapshot JSON",
        title: "Реальная активность из публичного API",
        totalReviewEventsLabel: "События повторения",
        uniqueReviewersLabel: "Уникальные пользователи",
        updatedLabel: "Обновлено",
        utcLabel: "Показано по данным UTC snapshot",
      },
      agentHintDescription:
        "Поделитесь этим discovery URL со своим AI-агентом. Он сможет зарегистрироваться, создать аккаунт и управлять вашим рабочим пространством Flashcards.",
      aiAgentSectionLabel: "ДЛЯ AI-АГЕНТА",
      appPreviewAlt:
        "Экраны Flashcards с повторением, карточками, AI, редактированием, open source и настройкой сервера.",
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
        cumulativeLabel: "累计到快照日期",
        dailyActivityChartTitle: "每日复习量与独立复习用户",
        description:
          "这个模块使用 build 时捕获的公开全局快照渲染，并沿用 admin analytics 视图里的图表表达方式。总数是累计值，图表展示 web、Android 和 iOS 的每日活动。",
        eyebrow: "公开活动",
        peakDayLabel: "峰值日期",
        platformActivityChartTitle: "每日平台构成",
        platformLabels: {
          android: "Android",
          ios: "iOS",
          web: "网页",
        },
        sourceLabel: "打开 Snapshot JSON",
        title: "来自公开 API 的真实活动数据",
        totalReviewEventsLabel: "复习事件",
        uniqueReviewersLabel: "独立复习用户",
        updatedLabel: "更新时间",
        utcLabel: "基于 UTC 快照数据渲染",
      },
      agentHintDescription:
        "把这个 discovery URL 分享给你的 AI agent。它可以帮你注册、创建账号，并管理你的 Flashcards 工作区。",
      aiAgentSectionLabel: "面向 AI AGENT",
      appPreviewAlt:
        "Flashcards 应用界面，展示复习、卡片、AI、编辑、开源和服务器配置流程。",
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
