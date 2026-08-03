import type { MetadataRoute } from "next";
import {
  DEFAULT_LOCALE,
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
  getPublicCatalogLanguageRoutePathname,
  getPublicCatalogPackageRoutePathname,
  getPublicCatalogTopicRoutePathname,
  PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME,
  PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME,
  PUBLIC_CATALOG_ROUTE_PATHNAME,
} from "@/lib/publicCatalogUrls";

type SitemapEntry = MetadataRoute.Sitemap[number];

interface CatalogSitemapRoute {
  readonly lastModified: string | null;
  readonly priority: number;
  readonly routePathname: string;
}

function getCatalogLanguageAlternates(
  routePathname: string,
): Readonly<Record<string, string>> {
  const alternates: Record<string, string> = {};

  SUPPORTED_LOCALES.forEach((locale) => {
    alternates[locale] = getAbsoluteUrl(
      getLocalizedPathname(locale, routePathname),
    );
  });
  alternates["x-default"] = getAbsoluteUrl(
    getLocalizedPathname(DEFAULT_LOCALE, routePathname),
  );

  return alternates;
}

function createLocalizedCatalogSitemapEntries(
  route: CatalogSitemapRoute,
): ReadonlyArray<SitemapEntry> {
  const alternates = getCatalogLanguageAlternates(route.routePathname);

  return SUPPORTED_LOCALES.map((locale: AppLocale) => ({
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
  return packageView.latestVersion.publishedAt
    > packageView.packageMetadata.publishedAt
    ? packageView.latestVersion.publishedAt
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
  const collectionsPublishedAt = getNewestPublishedAt(
    [...catalog.collectionBySlug.values()].map(
      (collection) => collection.publishedAt,
    ),
  );
  const rootAndIndexRoutes: ReadonlyArray<CatalogSitemapRoute> = [
    {
      lastModified: packagesLastModified,
      priority: 0.7,
      routePathname: PUBLIC_CATALOG_ROUTE_PATHNAME,
    },
    {
      lastModified: packagesPublishedAt,
      priority: 0.6,
      routePathname: PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME,
    },
    {
      lastModified: collectionsPublishedAt,
      priority: 0.6,
      routePathname: PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME,
    },
  ];
  const packageRoutes = catalog.packages.map((packageView) => ({
    lastModified: getPackageLastModified(packageView),
    priority: 0.6,
    routePathname: getPublicCatalogPackageRoutePathname(
      packageView.packageMetadata.slug,
    ),
  }));
  const authorRoutes = [...catalog.authorBySlug.values()].map((author) => ({
    lastModified: getNewestPackageLastModified(
      catalog.packagesByAuthorId.get(author.authorId) ?? [],
    ),
    priority: 0.5,
    routePathname: getPublicCatalogAuthorRoutePathname(author.slug),
  }));
  const collectionRoutes = [...catalog.collectionBySlug.values()].map(
    (collection) => ({
      lastModified: getNewestPublishedAt([
        collection.publishedAt,
        ...(catalog.packagesByCollectionId.get(collection.collectionId) ?? [])
          .map(getPackageLastModified),
      ]),
      priority: 0.5,
      routePathname: getPublicCatalogCollectionRoutePathname(collection.slug),
    }),
  );
  const languageRoutes = catalog.languageTags.map((languageTag) => ({
    lastModified: getNewestPublishedAt(
      [
        ...(catalog.packagesByLanguageTag.get(languageTag) ?? []).map(
          getPackageLastModified,
        ),
        ...[...catalog.collectionBySlug.values()]
          .filter((collection) => collection.languageTags.includes(languageTag))
          .map((collection) => collection.publishedAt),
      ],
    ),
    priority: 0.4,
    routePathname: getPublicCatalogLanguageRoutePathname(languageTag),
  }));
  const topicRoutes = catalog.topicTags.map((topicTag) => ({
    lastModified: getNewestPublishedAt(
      [
        ...(catalog.packagesByTopicTag.get(topicTag) ?? []).map(
          getPackageLastModified,
        ),
        ...[...catalog.collectionBySlug.values()]
          .filter((collection) => collection.topicTags.includes(topicTag))
          .map((collection) => collection.publishedAt),
      ],
    ),
    priority: 0.4,
    routePathname: getPublicCatalogTopicRoutePathname(topicTag),
  }));

  return [
    ...rootAndIndexRoutes,
    ...packageRoutes,
    ...authorRoutes,
    ...collectionRoutes,
    ...languageRoutes,
    ...topicRoutes,
  ];
}

export function createPublicCatalogSitemapEntries(
  catalog: PublicCatalogReadModel,
): MetadataRoute.Sitemap {
  return createCatalogRoutes(catalog).flatMap(
    createLocalizedCatalogSitemapEntries,
  );
}
