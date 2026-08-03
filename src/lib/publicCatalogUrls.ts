import { decodeUtf8Hex, encodeUtf8Hex } from "./markdownAssetPaths";

export const PUBLIC_CATALOG_ROUTE_PATHNAME = "/catalog/";
export const PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME = "/catalog/authors/";
export const PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME = "/catalog/collections/";
const publicCatalogFacetStaticParamPrefix = "__facet_";

function encodePublicCatalogFacetRouteSegment(tag: string): string {
  return encodeURIComponent(tag).replaceAll(".", "%2E");
}

export function getPublicCatalogFacetStaticParam(tag: string): string {
  return `${publicCatalogFacetStaticParamPrefix}${encodeUtf8Hex(
    encodePublicCatalogFacetRouteSegment(tag),
  )}`;
}

export function getPublicCatalogFacetStaticPathname(pathname: string): string | null {
  const routeMatch = pathname.match(
    /^(\/(?:es\/|ar\/|de\/|hi\/|ja\/|ru\/|zh\/)?catalog\/(?:languages|topics)\/)([^/]+)(\/)$/,
  );

  if (routeMatch === null) {
    return null;
  }

  const [, prefix, routeSegment, suffix] = routeMatch;

  if (prefix === undefined || routeSegment === undefined || suffix === undefined) {
    return null;
  }

  return `${prefix}${publicCatalogFacetStaticParamPrefix}${encodeUtf8Hex(routeSegment)}${suffix}`;
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

export function resolvePublicCatalogFacetStaticParam(
  staticParam: string,
  knownTags: ReadonlyArray<string>,
): string | undefined {
  if (staticParam.startsWith(publicCatalogFacetStaticParamPrefix) === false) {
    return undefined;
  }

  let publicRouteSegment: string;

  try {
    publicRouteSegment = decodeUtf8Hex(
      staticParam.slice(publicCatalogFacetStaticParamPrefix.length),
    );
  } catch (error: unknown) {
    if (error instanceof URIError) {
      return undefined;
    }

    throw error;
  }

  const canonicalStaticParam = `${publicCatalogFacetStaticParamPrefix}${encodeUtf8Hex(
    publicRouteSegment,
  )}`;

  return canonicalStaticParam === staticParam
    ? resolvePublicCatalogRouteSegment(publicRouteSegment, knownTags)
    : undefined;
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

export function getPublicCatalogTopicRoutePathname(topicTag: string): string {
  return `/catalog/topics/${encodePublicCatalogFacetRouteSegment(topicTag)}/`;
}

export function isPublicCatalogPageRoutePathname(
  routePathname: string,
): boolean {
  return routePathname === PUBLIC_CATALOG_ROUTE_PATHNAME
    || routePathname === PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME
    || routePathname === PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME
    || /^\/catalog\/(?:packages|authors|collections|languages|topics)\/[^/]+\/$/.test(
      routePathname,
    );
}
