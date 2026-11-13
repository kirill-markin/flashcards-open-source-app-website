import type { AppLocale } from "./localeConfig";

const PREVIEW_CAPTURE_LOCALES: Readonly<Partial<Record<AppLocale, AppLocale>>> = {
  "en-au": "en",
  "en-ca": "en",
  "en-gb": "en",
  "fr-ca": "fr",
};

export function getHomeShowcaseCapturePath(locale: AppLocale): string {
  return `/home/app-screens-showcase-${locale}.png`;
}

export function getHomeShowcaseImagePath(locale: AppLocale): string {
  return getHomeShowcaseCapturePath(PREVIEW_CAPTURE_LOCALES[locale] ?? locale);
}
