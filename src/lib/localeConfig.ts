export const DEFAULT_LOCALE = "en";
export const SUPPORTED_LOCALES = [
  "en",
  "es",
  "ar",
  "de",
  "hi",
  "ja",
  "fr",
  "pt",
  "ru",
  "zh",
  "it",
  "ko",
  "id",
  "tr",
  "nl",
  "pl",
  "vi",
  "th",
  "uk",
  "he",
  "sv",
  "da",
  "nb",
  "fi",
  "cs",
  "el",
  "ro",
  "hu",
  "fa",
  "ca",
  "bn",
  "gu",
  "kn",
  "ml",
  "mr",
  "pa",
  "ta",
  "te",
  "ur",
  "sw",
] as const;
export const NON_DEFAULT_LOCALES = [
  "es",
  "ar",
  "de",
  "hi",
  "ja",
  "fr",
  "pt",
  "ru",
  "zh",
  "it",
  "ko",
  "id",
  "tr",
  "nl",
  "pl",
  "vi",
  "th",
  "uk",
  "he",
  "sv",
  "da",
  "nb",
  "fi",
  "cs",
  "el",
  "ro",
  "hu",
  "fa",
  "ca",
  "bn",
  "gu",
  "kn",
  "ml",
  "mr",
  "pa",
  "ta",
  "te",
  "ur",
  "sw",
] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];
export type NonDefaultLocale = (typeof NON_DEFAULT_LOCALES)[number];
export type LocaleDirection = "ltr" | "rtl";

interface LocaleDefinition {
  readonly direction: LocaleDirection;
  readonly nativeName: string;
  readonly openGraphLocale: string;
  readonly shortLabel: string;
}

const LOCALE_DEFINITIONS: Readonly<Record<AppLocale, LocaleDefinition>> = {
  en: {
    direction: "ltr",
    nativeName: "English",
    openGraphLocale: "en_US",
    shortLabel: "EN",
  },
  es: {
    direction: "ltr",
    nativeName: "Español",
    openGraphLocale: "es_ES",
    shortLabel: "ES",
  },
  ar: {
    direction: "rtl",
    nativeName: "العربية",
    openGraphLocale: "ar_SA",
    shortLabel: "AR",
  },
  de: {
    direction: "ltr",
    nativeName: "Deutsch",
    openGraphLocale: "de_DE",
    shortLabel: "DE",
  },
  hi: {
    direction: "ltr",
    nativeName: "हिन्दी",
    openGraphLocale: "hi_IN",
    shortLabel: "HI",
  },
  ja: {
    direction: "ltr",
    nativeName: "日本語",
    openGraphLocale: "ja_JP",
    shortLabel: "JA",
  },
  fr: {
    direction: "ltr",
    nativeName: "Français",
    openGraphLocale: "fr_FR",
    shortLabel: "FR",
  },
  pt: {
    direction: "ltr",
    nativeName: "Português (Brasil)",
    openGraphLocale: "pt_BR",
    shortLabel: "PT",
  },
  ru: {
    direction: "ltr",
    nativeName: "Русский",
    openGraphLocale: "ru_RU",
    shortLabel: "RU",
  },
  zh: {
    direction: "ltr",
    nativeName: "简体中文",
    openGraphLocale: "zh_CN",
    shortLabel: "ZH",
  },
  it: {
    direction: "ltr",
    nativeName: "Italiano",
    openGraphLocale: "it_IT",
    shortLabel: "IT",
  },
  ko: {
    direction: "ltr",
    nativeName: "한국어",
    openGraphLocale: "ko_KR",
    shortLabel: "KO",
  },
  id: {
    direction: "ltr",
    nativeName: "Bahasa Indonesia",
    openGraphLocale: "id_ID",
    shortLabel: "ID",
  },
  tr: {
    direction: "ltr",
    nativeName: "Türkçe",
    openGraphLocale: "tr_TR",
    shortLabel: "TR",
  },
  nl: {
    direction: "ltr",
    nativeName: "Nederlands",
    openGraphLocale: "nl_NL",
    shortLabel: "NL",
  },
  pl: {
    direction: "ltr",
    nativeName: "Polski",
    openGraphLocale: "pl_PL",
    shortLabel: "PL",
  },
  vi: {
    direction: "ltr",
    nativeName: "Tiếng Việt",
    openGraphLocale: "vi_VN",
    shortLabel: "VI",
  },
  th: {
    direction: "ltr",
    nativeName: "ไทย",
    openGraphLocale: "th_TH",
    shortLabel: "TH",
  },
  uk: {
    direction: "ltr",
    nativeName: "Українська",
    openGraphLocale: "uk_UA",
    shortLabel: "UK",
  },
  he: {
    direction: "rtl",
    nativeName: "עברית",
    openGraphLocale: "he_IL",
    shortLabel: "HE",
  },
  sv: {
    direction: "ltr",
    nativeName: "Svenska",
    openGraphLocale: "sv_SE",
    shortLabel: "SV",
  },
  da: {
    direction: "ltr",
    nativeName: "Dansk",
    openGraphLocale: "da_DK",
    shortLabel: "DA",
  },
  nb: {
    direction: "ltr",
    nativeName: "Norsk bokmål",
    openGraphLocale: "nb_NO",
    shortLabel: "NB",
  },
  fi: {
    direction: "ltr",
    nativeName: "Suomi",
    openGraphLocale: "fi_FI",
    shortLabel: "FI",
  },
  cs: {
    direction: "ltr",
    nativeName: "Čeština",
    openGraphLocale: "cs_CZ",
    shortLabel: "CS",
  },
  el: {
    direction: "ltr",
    nativeName: "Ελληνικά",
    openGraphLocale: "el_GR",
    shortLabel: "EL",
  },
  ro: {
    direction: "ltr",
    nativeName: "Română",
    openGraphLocale: "ro_RO",
    shortLabel: "RO",
  },
  hu: {
    direction: "ltr",
    nativeName: "Magyar",
    openGraphLocale: "hu_HU",
    shortLabel: "HU",
  },
  fa: {
    direction: "rtl",
    nativeName: "فارسی",
    openGraphLocale: "fa_IR",
    shortLabel: "FA",
  },
  ca: {
    direction: "ltr",
    nativeName: "Català",
    openGraphLocale: "ca_ES",
    shortLabel: "CA",
  },
  bn: {
    direction: "ltr",
    nativeName: "বাংলা",
    openGraphLocale: "bn_IN",
    shortLabel: "BN",
  },
  gu: {
    direction: "ltr",
    nativeName: "ગુજરાતી",
    openGraphLocale: "gu_IN",
    shortLabel: "GU",
  },
  kn: {
    direction: "ltr",
    nativeName: "ಕನ್ನಡ",
    openGraphLocale: "kn_IN",
    shortLabel: "KN",
  },
  ml: {
    direction: "ltr",
    nativeName: "മലയാളം",
    openGraphLocale: "ml_IN",
    shortLabel: "ML",
  },
  mr: {
    direction: "ltr",
    nativeName: "मराठी",
    openGraphLocale: "mr_IN",
    shortLabel: "MR",
  },
  pa: {
    direction: "ltr",
    nativeName: "ਪੰਜਾਬੀ",
    openGraphLocale: "pa_IN",
    shortLabel: "PA",
  },
  ta: {
    direction: "ltr",
    nativeName: "தமிழ்",
    openGraphLocale: "ta_IN",
    shortLabel: "TA",
  },
  te: {
    direction: "ltr",
    nativeName: "తెలుగు",
    openGraphLocale: "te_IN",
    shortLabel: "TE",
  },
  ur: {
    direction: "rtl",
    nativeName: "اردو",
    openGraphLocale: "ur_PK",
    shortLabel: "UR",
  },
  sw: {
    direction: "ltr",
    nativeName: "Kiswahili",
    openGraphLocale: "sw_KE",
    shortLabel: "SW",
  },
};

export function isSupportedLocale(value: string): value is AppLocale {
  return SUPPORTED_LOCALES.includes(value as AppLocale);
}

export function isNonDefaultLocale(value: string): value is NonDefaultLocale {
  return NON_DEFAULT_LOCALES.includes(value as NonDefaultLocale);
}

export function getLocaleDirection(locale: AppLocale): LocaleDirection {
  return LOCALE_DEFINITIONS[locale].direction;
}

export function isRtlLocale(locale: AppLocale): boolean {
  return getLocaleDirection(locale) === "rtl";
}

export function getOpenGraphLocale(locale: AppLocale): string {
  return LOCALE_DEFINITIONS[locale].openGraphLocale;
}

export function getIntlLocale(locale: AppLocale): string {
  return LOCALE_DEFINITIONS[locale].openGraphLocale.replace("_", "-");
}

export function getLocaleShortLabel(locale: AppLocale): string {
  return LOCALE_DEFINITIONS[locale].shortLabel;
}

export function getLocaleNativeName(locale: AppLocale): string {
  return LOCALE_DEFINITIONS[locale].nativeName;
}
