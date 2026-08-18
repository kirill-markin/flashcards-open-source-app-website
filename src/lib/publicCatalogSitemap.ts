import type { MetadataRoute } from "next";
import {
  getAbsoluteUrl,
  getLocalizedPathname,
  SUPPORTED_LOCALES,
  type AppLocale,
} from "@/lib/i18n";
import type {
  PublicCatalogPackageView,
  PublicCatalogReadModel,
} from "@/lib/publicCatalogReadModel";
import {
  getPublicCatalogAuthorRoutePathname,
  getPublicCatalogCollectionRoutePathname,
  getPublicCatalogLanguageAlternates,
  getPublicCatalogLanguageRoutePathname,
  getPublicCatalogPackageAudienceLocales,
  getPublicCatalogPackagePageLocales,
  getPublicCatalogPackageRoutePathname,
  PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME,
  PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME,
  PUBLIC_CATALOG_ROUTE_PATHNAME,
} from "@/lib/publicCatalogUrls";

type SitemapEntry = MetadataRoute.Sitemap[number];

interface CatalogSitemapRoute {
  readonly alternateLocales: ReadonlyArray<AppLocale>;
  readonly lastModified: string | null;
  readonly pageLocales: ReadonlyArray<AppLocale>;
  readonly priority: number;
  readonly routePathname: string;
}

function createLocalizedCatalogSitemapEntries(
  route: CatalogSitemapRoute,
): ReadonlyArray<SitemapEntry> {
  const alternates = getPublicCatalogLanguageAlternates(
    route.routePathname,
    route.alternateLocales,
  );

  return route.pageLocales.map((locale) => ({
    url: getAbsoluteUrl(getLocalizedPathname(locale, route.routePathname)),
    changeFrequency: "monthly" as const,
    priority: route.priority,
    alternates: { languages: alternates },
    ...(route.lastModified === null
      ? {}
      : { lastModified: route.lastModified }),
  }));
}

function getNewestPublishedAt(
  publishedDates: ReadonlyArray<string>,
): string | null {
  return publishedDates.reduce<string | null>(
    (newestPublishedAt, publishedAt) =>
      newestPublishedAt === null || publishedAt > newestPublishedAt
        ? publishedAt
        : newestPublishedAt,
    null,
  );
}

function getPackageLastModified(
  packageView: PublicCatalogPackageView,
): string {
  return packageView.latestVersion.updatedAt
    > packageView.packageMetadata.publishedAt
    ? packageView.latestVersion.updatedAt
    : packageView.packageMetadata.publishedAt;
}

function getNewestPackageLastModified(
  packages: ReadonlyArray<PublicCatalogPackageView>,
): string | null {
  return getNewestPublishedAt(packages.map(getPackageLastModified));
}

function getNewestPackagePublishedAt(
  packages: ReadonlyArray<PublicCatalogPackageView>,
): string | null {
  return getNewestPublishedAt(
    packages.map((packageView) => packageView.packageMetadata.publishedAt),
  );
}

function createCatalogRoutes(
  catalog: PublicCatalogReadModel,
): ReadonlyArray<CatalogSitemapRoute> {
  const packagesLastModified = getNewestPackageLastModified(catalog.packages);
  const packagesPublishedAt = getNewestPackagePublishedAt(catalog.packages);
  const collectionsUpdatedAt = getNewestPublishedAt(
    [...catalog.collectionBySlug.values()].map(
      (collection) => collection.updatedAt,
    ),
  );
  const rootAndIndexRoutes: ReadonlyArray<CatalogSitemapRoute> = [
    {
      alternateLocales: SUPPORTED_LOCALES,
      lastModified: packagesLastModified,
      pageLocales: SUPPORTED_LOCALES,
      priority: 0.7,
      routePathname: PUBLIC_CATALOG_ROUTE_PATHNAME,
    },
    {
      alternateLocales: SUPPORTED_LOCALES,
      lastModified: packagesPublishedAt,
      pageLocales: SUPPORTED_LOCALES,
      priority: 0.6,
      routePathname: PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME,
    },
    {
      alternateLocales: SUPPORTED_LOCALES,
      lastModified: collectionsUpdatedAt,
      pageLocales: SUPPORTED_LOCALES,
      priority: 0.6,
      routePathname: PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME,
    },
  ];
  const packageRoutes = catalog.packages.map((packageView) => ({
    alternateLocales: getPublicCatalogPackageAudienceLocales(
      packageView.latestVersion.languageTags,
    ),
    lastModified: getPackageLastModified(packageView),
    pageLocales: getPublicCatalogPackagePageLocales(
      packageView.latestVersion.languageTags,
    ),
    priority: 0.6,
    routePathname: getPublicCatalogPackageRoutePathname(
      packageView.packageMetadata.slug,
    ),
  }));
  const authorRoutes = [...catalog.authorBySlug.values()].map((author) => ({
    alternateLocales: SUPPORTED_LOCALES,
    lastModified: getNewestPackageLastModified(
      catalog.packagesByAuthorId.get(author.authorId) ?? [],
    ),
    pageLocales: SUPPORTED_LOCALES,
    priority: 0.5,
    routePathname: getPublicCatalogAuthorRoutePathname(author.slug),
  }));
  const collectionRoutes = [...catalog.collectionBySlug.values()].map(
    (collection) => ({
      alternateLocales: SUPPORTED_LOCALES,
      lastModified: getNewestPublishedAt([
        collection.updatedAt,
        ...(catalog.packagesByCollectionId.get(collection.collectionId) ?? [])
          .map(getPackageLastModified),
      ]),
      pageLocales: SUPPORTED_LOCALES,
      priority: 0.5,
      routePathname: getPublicCatalogCollectionRoutePathname(collection.slug),
    }),
  );
  const languageRoutes = catalog.languageTags.map((languageTag) => ({
    alternateLocales: SUPPORTED_LOCALES,
    lastModified: getNewestPublishedAt(
      [
        ...(catalog.packagesByLanguageTag.get(languageTag) ?? []).map(
          getPackageLastModified,
        ),
        ...[...catalog.collectionBySlug.values()]
          .filter((collection) => collection.languageTags.includes(languageTag))
          .map((collection) => collection.updatedAt),
      ],
    ),
    pageLocales: SUPPORTED_LOCALES,
    priority: 0.4,
    routePathname: getPublicCatalogLanguageRoutePathname(languageTag),
  }));
  return [
    ...rootAndIndexRoutes,
    ...packageRoutes,
    ...authorRoutes,
    ...collectionRoutes,
    ...languageRoutes,
  ];
}

export function createPublicCatalogSitemapEntries(
  catalog: PublicCatalogReadModel,
): MetadataRoute.Sitemap {
  return createCatalogRoutes(catalog).flatMap(
    createLocalizedCatalogSitemapEntries,
  );
}
