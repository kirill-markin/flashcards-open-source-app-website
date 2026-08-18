import {
  DEFAULT_LOCALE,
  getAbsoluteUrl,
  getLocalizedPathname,
  SUPPORTED_LOCALES,
  type AppLocale,
} from "./i18n";

export const PUBLIC_CATALOG_ROUTE_PATHNAME = "/catalog/";
export const PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME = "/catalog/authors/";
export const PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME = "/catalog/collections/";

export function encodePublicCatalogFacetRouteSegment(tag: string): string {
  return encodeURIComponent(tag).replaceAll(".", "%2E");
}

export function resolvePublicCatalogRouteSegment(
  routeSegment: string,
  knownTags: ReadonlyArray<string>,
): string | undefined {
  const canonicalMatch = knownTags.find(
    (tag) => encodePublicCatalogFacetRouteSegment(tag) === routeSegment,
  );

  if (canonicalMatch !== undefined) {
    return canonicalMatch;
  }

  return knownTags.includes(routeSegment) ? routeSegment : undefined;
}

export function getPublicCatalogPackageRoutePathname(
  packageSlug: string,
): string {
  return `/catalog/packages/${encodeURIComponent(packageSlug)}/`;
}

export function getPublicCatalogPackageAudienceLocales(
  languageTags: ReadonlyArray<string>,
): ReadonlyArray<AppLocale> {
  return SUPPORTED_LOCALES.filter((locale) => languageTags.includes(locale));
}

export function getPublicCatalogPackagePageLocales(
  languageTags: ReadonlyArray<string>,
): ReadonlyArray<AppLocale> {
  const audienceLocales = getPublicCatalogPackageAudienceLocales(languageTags);

  return audienceLocales.includes(DEFAULT_LOCALE)
    ? audienceLocales
    : [DEFAULT_LOCALE, ...audienceLocales];
}

export function getPublicCatalogPackagePageLocale(
  locale: AppLocale,
  languageTags: ReadonlyArray<string>,
): AppLocale {
  return getPublicCatalogPackagePageLocales(languageTags).includes(locale)
    ? locale
    : DEFAULT_LOCALE;
}

export function getPublicCatalogPackageLocalizedPathname(
  locale: AppLocale,
  packageSlug: string,
  languageTags: ReadonlyArray<string>,
): string {
  return getLocalizedPathname(
    getPublicCatalogPackagePageLocale(locale, languageTags),
    getPublicCatalogPackageRoutePathname(packageSlug),
  );
}

export function getPublicCatalogLanguageAlternates(
  routePathname: string,
  locales: ReadonlyArray<AppLocale>,
): Readonly<Record<string, string>> {
  const alternates: Record<string, string> = {};

  locales.forEach((locale) => {
    alternates[locale] = getAbsoluteUrl(
      getLocalizedPathname(locale, routePathname),
    );
  });
  alternates["x-default"] = getAbsoluteUrl(
    getLocalizedPathname(DEFAULT_LOCALE, routePathname),
  );

  return alternates;
}

export function getPublicCatalogAuthorRoutePathname(authorSlug: string): string {
  return `/catalog/authors/${encodeURIComponent(authorSlug)}/`;
}

export function getPublicCatalogCollectionRoutePathname(
  collectionSlug: string,
): string {
  return `/catalog/collections/${encodeURIComponent(collectionSlug)}/`;
}

export function getPublicCatalogLanguageRoutePathname(
  languageTag: string,
): string {
  return `/catalog/languages/${encodePublicCatalogFacetRouteSegment(languageTag)}/`;
}

export function getPublicCatalogRootSearch(locale: AppLocale): string {
  const searchParams = new URLSearchParams({ language: locale });

  return `?${searchParams}`;
}

export function getPublicCatalogRootUrl(locale: AppLocale): string {
  return `${getLocalizedPathname(locale, PUBLIC_CATALOG_ROUTE_PATHNAME)}${getPublicCatalogRootSearch(locale)}`;
}

export function isPublicCatalogPageRoutePathname(
  routePathname: string,
): boolean {
  return routePathname === PUBLIC_CATALOG_ROUTE_PATHNAME
    || routePathname === PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME
    || routePathname === PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME
    || /^\/catalog\/(?:packages|authors|collections|languages)\/[^/]+\/$/.test(
      routePathname,
    );
}

export function isPublicCatalogSharedPageRoutePathname(
  routePathname: string,
): boolean {
  return isPublicCatalogPageRoutePathname(routePathname)
    && /^\/catalog\/packages\/[^/]+\/$/.test(routePathname) === false;
}
