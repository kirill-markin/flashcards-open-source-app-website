import { getLocalizedPathname, type AppLocale } from "./i18n";

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
