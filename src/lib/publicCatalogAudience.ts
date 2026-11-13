import { isSupportedLocale, SUPPORTED_LOCALES, type AppLocale } from "./localeConfig";

const BASE_AUDIENCE_BY_REGIONAL_LOCALE = {
  "en-au": "en",
  "en-ca": "en",
  "en-gb": "en",
  "fr-ca": "fr",
  "pt-pt": "pt",
} as const satisfies Readonly<Record<string, AppLocale>>;

type RegionalCatalogLocale = keyof typeof BASE_AUDIENCE_BY_REGIONAL_LOCALE;
export type PublicCatalogAudienceTag = Exclude<AppLocale, RegionalCatalogLocale>;

function isRegionalCatalogLocale(locale: string): locale is RegionalCatalogLocale {
  return Object.hasOwn(BASE_AUDIENCE_BY_REGIONAL_LOCALE, locale);
}

export function getPublicCatalogAudienceTag(locale: AppLocale): PublicCatalogAudienceTag {
  return isRegionalCatalogLocale(locale) ? BASE_AUDIENCE_BY_REGIONAL_LOCALE[locale] : locale;
}

export function isPublicCatalogAudienceTag(tag: string): tag is PublicCatalogAudienceTag {
  return isSupportedLocale(tag) && !isRegionalCatalogLocale(tag);
}

export const PUBLIC_CATALOG_AUDIENCE_TAGS: ReadonlyArray<PublicCatalogAudienceTag> =
  SUPPORTED_LOCALES.filter(isPublicCatalogAudienceTag);
