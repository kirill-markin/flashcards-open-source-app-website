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
  readonly openGraphLocale: string;
  readonly shortLabel: string;
}

const LOCALE_DEFINITIONS: Readonly<Record<AppLocale, LocaleDefinition>> = {
  en: {
    direction: "ltr",
    openGraphLocale: "en_US",
    shortLabel: "EN",
  },
  es: {
    direction: "ltr",
    openGraphLocale: "es_ES",
    shortLabel: "ES",
  },
  ar: {
    direction: "rtl",
    openGraphLocale: "ar_SA",
    shortLabel: "AR",
  },
  de: {
    direction: "ltr",
    openGraphLocale: "de_DE",
    shortLabel: "DE",
  },
  hi: {
    direction: "ltr",
    openGraphLocale: "hi_IN",
    shortLabel: "HI",
  },
  ja: {
    direction: "ltr",
    openGraphLocale: "ja_JP",
    shortLabel: "JA",
  },
  ru: {
    direction: "ltr",
    openGraphLocale: "ru_RU",
    shortLabel: "RU",
  },
  zh: {
    direction: "ltr",
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
