export const DEFAULT_LOCALE = "en";
export const SUPPORTED_LOCALES = [
  "en",
  "es",
  "ar",
  "de",
  "hi",
  "ja",
  "ru",
  "zh",
] as const;
export const NON_DEFAULT_LOCALES = [
  "es",
  "ar",
  "de",
  "hi",
  "ja",
  "ru",
  "zh",
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

export function getLocaleShortLabel(locale: AppLocale): string {
  return LOCALE_DEFINITIONS[locale].shortLabel;
}

export function getLocaleNativeName(locale: AppLocale): string {
  return LOCALE_DEFINITIONS[locale].nativeName;
}
