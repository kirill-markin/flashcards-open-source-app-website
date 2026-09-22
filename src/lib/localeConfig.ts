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
  "bg",
  "et",
  "hr",
  "is",
  "lt",
  "lv",
  "sk",
  "sl",
  "zu",
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
  "bg",
  "et",
  "hr",
  "is",
  "lt",
  "lv",
  "sk",
  "sl",
  "zu",
] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];
export type NonDefaultLocale = (typeof NON_DEFAULT_LOCALES)[number];
export type LocaleDirection = "ltr" | "rtl";

interface LocaleDefinition {
  readonly direction: LocaleDirection;
  readonly englishName: string;
  readonly nativeName: string;
  readonly openGraphLocale: string;
}

const LOCALE_DEFINITIONS: Readonly<Record<AppLocale, LocaleDefinition>> = {
  en: {
    direction: "ltr",
    englishName: "English",
    nativeName: "English",
    openGraphLocale: "en_US",
  },
  es: {
    direction: "ltr",
    englishName: "Spanish",
    nativeName: "Español",
    openGraphLocale: "es_ES",
  },
  ar: {
    direction: "rtl",
    englishName: "Arabic",
    nativeName: "العربية",
    openGraphLocale: "ar_SA",
  },
  de: {
    direction: "ltr",
    englishName: "German",
    nativeName: "Deutsch",
    openGraphLocale: "de_DE",
  },
  hi: {
    direction: "ltr",
    englishName: "Hindi",
    nativeName: "हिन्दी",
    openGraphLocale: "hi_IN",
  },
  ja: {
    direction: "ltr",
    englishName: "Japanese",
    nativeName: "日本語",
    openGraphLocale: "ja_JP",
  },
  fr: {
    direction: "ltr",
    englishName: "French",
    nativeName: "Français",
    openGraphLocale: "fr_FR",
  },
  pt: {
    direction: "ltr",
    englishName: "Portuguese (Brazil)",
    nativeName: "Português (Brasil)",
    openGraphLocale: "pt_BR",
  },
  ru: {
    direction: "ltr",
    englishName: "Russian",
    nativeName: "Русский",
    openGraphLocale: "ru_RU",
  },
  zh: {
    direction: "ltr",
    englishName: "Chinese (Simplified)",
    nativeName: "简体中文",
    openGraphLocale: "zh_CN",
  },
  it: {
    direction: "ltr",
    englishName: "Italian",
    nativeName: "Italiano",
    openGraphLocale: "it_IT",
  },
  ko: {
    direction: "ltr",
    englishName: "Korean",
    nativeName: "한국어",
    openGraphLocale: "ko_KR",
  },
  id: {
    direction: "ltr",
    englishName: "Indonesian",
    nativeName: "Bahasa Indonesia",
    openGraphLocale: "id_ID",
  },
  tr: {
    direction: "ltr",
    englishName: "Turkish",
    nativeName: "Türkçe",
    openGraphLocale: "tr_TR",
  },
  nl: {
    direction: "ltr",
    englishName: "Dutch",
    nativeName: "Nederlands",
    openGraphLocale: "nl_NL",
  },
  pl: {
    direction: "ltr",
    englishName: "Polish",
    nativeName: "Polski",
    openGraphLocale: "pl_PL",
  },
  vi: {
    direction: "ltr",
    englishName: "Vietnamese",
    nativeName: "Tiếng Việt",
    openGraphLocale: "vi_VN",
  },
  th: {
    direction: "ltr",
    englishName: "Thai",
    nativeName: "ไทย",
    openGraphLocale: "th_TH",
  },
  uk: {
    direction: "ltr",
    englishName: "Ukrainian",
    nativeName: "Українська",
    openGraphLocale: "uk_UA",
  },
  he: {
    direction: "rtl",
    englishName: "Hebrew",
    nativeName: "עברית",
    openGraphLocale: "he_IL",
  },
  sv: {
    direction: "ltr",
    englishName: "Swedish",
    nativeName: "Svenska",
    openGraphLocale: "sv_SE",
  },
  da: {
    direction: "ltr",
    englishName: "Danish",
    nativeName: "Dansk",
    openGraphLocale: "da_DK",
  },
  nb: {
    direction: "ltr",
    englishName: "Norwegian Bokmål",
    nativeName: "Norsk bokmål",
    openGraphLocale: "nb_NO",
  },
  fi: {
    direction: "ltr",
    englishName: "Finnish",
    nativeName: "Suomi",
    openGraphLocale: "fi_FI",
  },
  cs: {
    direction: "ltr",
    englishName: "Czech",
    nativeName: "Čeština",
    openGraphLocale: "cs_CZ",
  },
  el: {
    direction: "ltr",
    englishName: "Greek",
    nativeName: "Ελληνικά",
    openGraphLocale: "el_GR",
  },
  ro: {
    direction: "ltr",
    englishName: "Romanian",
    nativeName: "Română",
    openGraphLocale: "ro_RO",
  },
  hu: {
    direction: "ltr",
    englishName: "Hungarian",
    nativeName: "Magyar",
    openGraphLocale: "hu_HU",
  },
  fa: {
    direction: "rtl",
    englishName: "Persian",
    nativeName: "فارسی",
    openGraphLocale: "fa_IR",
  },
  ca: {
    direction: "ltr",
    englishName: "Catalan",
    nativeName: "Català",
    openGraphLocale: "ca_ES",
  },
  bn: {
    direction: "ltr",
    englishName: "Bengali",
    nativeName: "বাংলা",
    openGraphLocale: "bn_IN",
  },
  gu: {
    direction: "ltr",
    englishName: "Gujarati",
    nativeName: "ગુજરાતી",
    openGraphLocale: "gu_IN",
  },
  kn: {
    direction: "ltr",
    englishName: "Kannada",
    nativeName: "ಕನ್ನಡ",
    openGraphLocale: "kn_IN",
  },
  ml: {
    direction: "ltr",
    englishName: "Malayalam",
    nativeName: "മലയാളം",
    openGraphLocale: "ml_IN",
  },
  mr: {
    direction: "ltr",
    englishName: "Marathi",
    nativeName: "मराठी",
    openGraphLocale: "mr_IN",
  },
  pa: {
    direction: "ltr",
    englishName: "Punjabi",
    nativeName: "ਪੰਜਾਬੀ",
    openGraphLocale: "pa_IN",
  },
  ta: {
    direction: "ltr",
    englishName: "Tamil",
    nativeName: "தமிழ்",
    openGraphLocale: "ta_IN",
  },
  te: {
    direction: "ltr",
    englishName: "Telugu",
    nativeName: "తెలుగు",
    openGraphLocale: "te_IN",
  },
  ur: {
    direction: "rtl",
    englishName: "Urdu",
    nativeName: "اردو",
    openGraphLocale: "ur_PK",
  },
  sw: {
    direction: "ltr",
    englishName: "Swahili",
    nativeName: "Kiswahili",
    openGraphLocale: "sw_KE",
  },
  bg: {
    direction: "ltr",
    englishName: "Bulgarian",
    nativeName: "Български",
    openGraphLocale: "bg_BG",
  },
  et: {
    direction: "ltr",
    englishName: "Estonian",
    nativeName: "Eesti",
    openGraphLocale: "et_EE",
  },
  hr: {
    direction: "ltr",
    englishName: "Croatian",
    nativeName: "Hrvatski",
    openGraphLocale: "hr_HR",
  },
  is: {
    direction: "ltr",
    englishName: "Icelandic",
    nativeName: "Íslenska",
    openGraphLocale: "is_IS",
  },
  lt: {
    direction: "ltr",
    englishName: "Lithuanian",
    nativeName: "Lietuvių",
    openGraphLocale: "lt_LT",
  },
  lv: {
    direction: "ltr",
    englishName: "Latvian",
    nativeName: "Latviešu",
    openGraphLocale: "lv_LV",
  },
  sk: {
    direction: "ltr",
    englishName: "Slovak",
    nativeName: "Slovenčina",
    openGraphLocale: "sk_SK",
  },
  sl: {
    direction: "ltr",
    englishName: "Slovenian",
    nativeName: "Slovenščina",
    openGraphLocale: "sl_SI",
  },
  zu: {
    direction: "ltr",
    englishName: "Zulu",
    nativeName: "isiZulu",
    openGraphLocale: "zu_ZA",
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

export function getLocaleNativeName(locale: AppLocale): string {
  return LOCALE_DEFINITIONS[locale].nativeName;
}

export function getLocaleEnglishName(locale: AppLocale): string {
  return LOCALE_DEFINITIONS[locale].englishName;
}
