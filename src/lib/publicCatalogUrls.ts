import {
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

export function getPublicCatalogPackagePageLocales(): ReadonlyArray<AppLocale> {
  return SUPPORTED_LOCALES;
}

/**
 * Locales whose package route is canonical: every audience locale of the deck,
 * in SUPPORTED_LOCALES order. Package routes in other locales repeat the same
 * untranslated deck content and canonicalize into this set.
 */
export function getPublicCatalogPackageCanonicalLocales(
  packageSlug: string,
  languageTags: ReadonlyArray<string>,
): ReadonlyArray<AppLocale> {
  const audienceLocales = getPublicCatalogPackageAudienceLocales(languageTags);

  if (audienceLocales.length === 0) {
    throw new Error(
      `Cannot resolve public catalog canonical locales: package ${packageSlug} has no supported audience locale in languageTags [${languageTags.join(", ")}]. Add a supported locale to the package language tags.`,
    );
  }

  return audienceLocales;
}

export function resolvePublicCatalogPackageCanonicalLocale(
  packageSlug: string,
  languageTags: ReadonlyArray<string>,
  locale: AppLocale,
): AppLocale {
  const canonicalLocales = getPublicCatalogPackageCanonicalLocales(
    packageSlug,
    languageTags,
  );

  return canonicalLocales.includes(locale) ? locale : canonicalLocales[0];
}

export function getPublicCatalogPackageLocalizedPathname(
  locale: AppLocale,
  packageSlug: string,
): string {
  return getLocalizedPathname(
    locale,
    getPublicCatalogPackageRoutePathname(packageSlug),
  );
}

/**
 * The package route in the deck's canonical locale: `locale` itself when it is
 * an audience locale of the deck, otherwise the first audience locale.
 */
export function getPublicCatalogPackageCanonicalPathname(
  locale: AppLocale,
  packageSlug: string,
  languageTags: ReadonlyArray<string>,
): string {
  return getLocalizedPathname(
    resolvePublicCatalogPackageCanonicalLocale(packageSlug, languageTags, locale),
    getPublicCatalogPackageRoutePathname(packageSlug),
  );
}

export function getPublicCatalogLanguageAlternates(
  routePathname: string,
  locales: ReadonlyArray<AppLocale>,
): Readonly<Record<string, string>> {
  if (locales.length === 0) {
    throw new Error(
      `Cannot create public catalog language alternates: route ${routePathname} has no alternate locale.`,
    );
  }

  // Locales stay in SUPPORTED_LOCALES order, so the first one is the canonical
  // of the cluster: DEFAULT_LOCALE for routes that cover every locale, and the
  // first audience locale for a package restricted to its audience.
  const canonicalLocale = locales[0];
  const alternates: Record<string, string> = {};

  locales.forEach((locale) => {
    alternates[locale] = getAbsoluteUrl(
      getLocalizedPathname(locale, routePathname),
    );
  });
  alternates["x-default"] = getAbsoluteUrl(
    getLocalizedPathname(canonicalLocale, routePathname),
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
