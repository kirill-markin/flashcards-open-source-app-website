import type { AppLocale } from "./localeConfig";

const PREVIEW_CAPTURE_LOCALES: Readonly<Partial<Record<AppLocale, AppLocale>>> = {
  "zh-hant": "en",
  "en-au": "en",
  "en-ca": "en",
  "en-gb": "en",
  "fr-ca": "fr",
  "pt-pt": "pt",
  ms: "en",
  or: "en",
};

export function getHomeShowcaseCapturePath(locale: AppLocale): string {
  return `/home/app-screens-showcase-${locale}.png`;
}

export function getHomeShowcaseImagePath(locale: AppLocale): string {
  return getHomeShowcaseCapturePath(PREVIEW_CAPTURE_LOCALES[locale] ?? locale);
}
