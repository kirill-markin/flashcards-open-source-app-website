export const PUBLIC_CATALOG_ROUTE_PATHNAME = "/catalog/";

export function getPublicCatalogPackageRoutePathname(
  packageSlug: string,
): string {
  return `/catalog/packages/${encodeURIComponent(packageSlug)}/`;
}

export function getPublicCatalogAuthorRoutePathname(authorSlug: string): string {
  return `/catalog/authors/${encodeURIComponent(authorSlug)}/`;
}

export function getPublicCatalogLanguageRoutePathname(
  languageTag: string,
): string {
  return `/catalog/languages/${encodeURIComponent(languageTag)}/`;
}

export function getPublicCatalogTopicRoutePathname(topicTag: string): string {
  return `/catalog/topics/${encodeURIComponent(topicTag)}/`;
}

export function isPublicCatalogPageRoutePathname(
  routePathname: string,
): boolean {
  return routePathname === PUBLIC_CATALOG_ROUTE_PATHNAME
    || /^\/catalog\/packages\/[a-z0-9](?:[a-z0-9-]{0,118}[a-z0-9])?\/$/.test(
      routePathname,
    );
}
