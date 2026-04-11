import type { AppLocale } from "@/lib/i18n";

interface AppUiCopy {
  readonly auth: {
    readonly logIn: string;
    readonly openApp: string;
    readonly signUpFree: string;
  };
  readonly copyCodeField: {
    readonly copied: string;
    readonly copy: string;
    readonly copyFailed: string;
  };
  readonly blog: {
    readonly breadcrumbLabel: string;
    readonly byPrefix: string;
    readonly empty: string;
    readonly notFoundDescription: string;
    readonly notFoundTitle: string;
    readonly readNextHeading: string;
    readonly title: string;
  };
  readonly breadcrumbs: {
    readonly ariaLabel: string;
    readonly homeLabel: string;
  };
  readonly docs: {
    readonly breadcrumbLabel: string;
    readonly comingSoonDescription: string;
    readonly comingSoonTitle: string;
    readonly title: string;
  };
  readonly footer: {
    readonly appsHeading: string;
    readonly blogLabel: string;
    readonly builtByLabel: string;
    readonly copyrightLabel: string;
    readonly documentationLabel: string;
    readonly featuresLabel: string;
    readonly legalHeading: string;
    readonly openSourceHeading: string;
    readonly operatedByLabel: string;
    readonly pricingLabel: string;
    readonly privacyPolicyLabel: string;
      readonly productHeading: string;
      readonly selfHostingGuideLabel: string;
      readonly inDevelopmentLabel: string;
      readonly supportLabel: string;
      readonly termsOfServiceLabel: string;
    };
  readonly home: {
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
    readonly englishLabel: string;
    readonly spanishLabel: string;
    readonly switcherAriaLabel: string;
  };
  readonly menuToggleLabel: string;
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
    copyCodeField: {
      copied: "Copied",
      copy: "Copy",
      copyFailed: "Copy failed",
    },
    blog: {
      breadcrumbLabel: "Blog",
      byPrefix: "By",
      empty: "Posts coming soon.",
      notFoundDescription: "This blog post does not exist.",
      notFoundTitle: "Not Found",
      readNextHeading: "Read next",
      title: "Blog",
    },
    breadcrumbs: {
      ariaLabel: "Breadcrumb",
      homeLabel: "Home",
    },
    docs: {
      breadcrumbLabel: "Docs",
      comingSoonDescription: "This documentation page is being written.",
      comingSoonTitle: "Coming Soon",
      title: "Documentation",
    },
    footer: {
      appsHeading: "Apps",
      blogLabel: "Blog",
      builtByLabel: "Built by Kirill Markin",
      copyrightLabel: "Flashcards Open Source App",
      documentationLabel: "Documentation",
      featuresLabel: "Features",
      legalHeading: "Legal",
      openSourceHeading: "Open Source",
      operatedByLabel: "Operated by Ozma Inc",
      pricingLabel: "Pricing",
      privacyPolicyLabel: "Privacy Policy",
      productHeading: "Product",
      selfHostingGuideLabel: "Self-Hosting Guide",
      inDevelopmentLabel: "In Development",
      supportLabel: "Support",
      termsOfServiceLabel: "Terms of Service",
    },
    home: {
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
      englishLabel: "EN",
      spanishLabel: "ES",
      switcherAriaLabel: "Language switcher",
    },
    menuToggleLabel: "Toggle menu",
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      webApp: "Web App",
    },
  },
  es: {
    auth: {
      logIn: "Iniciar sesion",
      openApp: "Abrir app",
      signUpFree: "Registrarse gratis",
    },
    copyCodeField: {
      copied: "Copiado",
      copy: "Copiar",
      copyFailed: "Error al copiar",
    },
    blog: {
      breadcrumbLabel: "Blog",
      byPrefix: "Por",
      empty: "Publicaciones proximamente.",
      notFoundDescription: "Esta entrada del blog no existe.",
      notFoundTitle: "No encontrado",
      readNextHeading: "Sigue leyendo",
      title: "Blog",
    },
    breadcrumbs: {
      ariaLabel: "Migas de pan",
      homeLabel: "Inicio",
    },
    docs: {
      breadcrumbLabel: "Documentacion",
      comingSoonDescription: "Esta pagina de documentacion se esta escribiendo.",
      comingSoonTitle: "Proximamente",
      title: "Documentacion",
    },
    footer: {
      appsHeading: "Apps",
      blogLabel: "Blog",
      builtByLabel: "Creado por Kirill Markin",
      copyrightLabel: "Flashcards Open Source App",
      documentationLabel: "Documentacion",
      featuresLabel: "Funciones",
      legalHeading: "Legal",
      openSourceHeading: "Codigo abierto",
      operatedByLabel: "Operado por Ozma Inc",
      pricingLabel: "Precios",
      privacyPolicyLabel: "Politica de privacidad",
      productHeading: "Producto",
      selfHostingGuideLabel: "Guia de autoalojamiento",
      inDevelopmentLabel: "En desarrollo",
      supportLabel: "Soporte",
      termsOfServiceLabel: "Terminos del servicio",
    },
    home: {
      agentHintDescription:
        "Comparte esta URL de descubrimiento con tu agente de IA. Puede registrarte, crear tu cuenta y gestionar tu espacio de trabajo de Flashcards por ti.",
      aiAgentSectionLabel: "PARA AGENTE DE IA",
      appPreviewAlt:
        "Pantallas de Flashcards con revision, tarjetas, IA, edicion, codigo abierto y flujos de configuracion del servidor.",
      appPreviewAriaLabel: "Vista previa de la app",
      appPreviewLabel: "VISTA PREVIA DE LA APP",
      humanSectionLabel: "PARA PERSONAS",
    },
    legal: {
      lastUpdatedLabel: "Ultima actualizacion",
    },
    locale: {
      englishLabel: "EN",
      spanishLabel: "ES",
      switcherAriaLabel: "Selector de idioma",
    },
    menuToggleLabel: "Abrir menu",
    platforms: {
      appStore: "App Store",
      googlePlay: "Google Play",
      webApp: "App web",
    },
  },
};

export function getUiCopy(locale: AppLocale): AppUiCopy {
  return UI_COPY_BY_LOCALE[locale];
}
