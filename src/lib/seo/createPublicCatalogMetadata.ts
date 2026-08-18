import type { Metadata } from "next";
import type { AppLocale } from "@/lib/i18n";
import {
  getAbsoluteUrl,
  getLocalizedPathname,
  getOpenGraphLocale,
  SUPPORTED_LOCALES,
} from "@/lib/i18n";
import {
  getPublicCatalogCoverImage,
  type PublicCatalogCoverImage,
} from "@/lib/publicCatalogCover";
import type { PublicCatalogPackageView } from "@/lib/publicCatalogReadModel";
import type {
  PublicCatalogAuthor,
  PublicCatalogCollection,
} from "@/lib/publicCatalogTypes";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import {
  getPublicCatalogDestinationCopy,
  interpolatePublicCatalogCopy,
} from "@/lib/publicCatalogDestinationCopy";
import { formatPublicCatalogFacetTag } from "@/lib/publicCatalogFormatting";
import {
  getPublicCatalogAuthorRoutePathname,
  getPublicCatalogCollectionRoutePathname,
  getPublicCatalogLanguageRoutePathname,
  getPublicCatalogLanguageAlternates,
  getPublicCatalogPackageAudienceLocales,
  getPublicCatalogPackageRoutePathname,
  PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME,
  PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME,
  PUBLIC_CATALOG_ROUTE_PATHNAME,
} from "@/lib/publicCatalogUrls";
import {
  OPEN_GRAPH_IMAGE_URL,
  SITE_NAME,
  SITE_URL,
  TWITTER_IMAGE_URL,
} from "@/lib/site";

interface CreatePublicCatalogMetadataParams {
  readonly alternateLocales: ReadonlyArray<AppLocale>;
  readonly description: string;
  readonly image: PublicCatalogCoverImage | null;
  readonly locale: AppLocale;
  readonly modifiedTime: string | null;
  readonly publishedTime: string | null;
  readonly routePathname: string;
  readonly title: string;
  readonly type: "article" | "website";
}

export function createPublicCatalogMetadata(
  params: CreatePublicCatalogMetadataParams,
): Metadata {
  const localizedPathname = getLocalizedPathname(
    params.locale,
    params.routePathname,
  );
  const pageUrl = getAbsoluteUrl(localizedPathname);

  return {
    metadataBase: new URL(SITE_URL),
    title: params.title,
    description: params.description,
    alternates: {
      canonical: pageUrl,
      languages: getPublicCatalogLanguageAlternates(
        params.routePathname,
        params.alternateLocales,
      ),
    },
    openGraph: {
      type: params.type,
      locale: getOpenGraphLocale(params.locale),
      siteName: SITE_NAME,
      url: pageUrl,
      title: params.title,
      description: params.description,
      images: [params.image === null
        ? { url: OPEN_GRAPH_IMAGE_URL }
        : {
            alt: params.image.altText,
            type: params.image.mimeType,
            url: params.image.downloadUrl,
          }],
      modifiedTime: params.modifiedTime ?? undefined,
      publishedTime: params.publishedTime ?? undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: params.title,
      description: params.description,
      images: [params.image === null
        ? TWITTER_IMAGE_URL
        : {
            alt: params.image.altText,
            url: params.image.downloadUrl,
          }],
    },
  };
}

export function createPublicCatalogRootMetadata(locale: AppLocale): Metadata {
  const copy = getPublicCatalogUiCopy(locale);

  return createPublicCatalogMetadata({
    alternateLocales: SUPPORTED_LOCALES,
    description: copy.intro,
    image: null,
    locale,
    modifiedTime: null,
    publishedTime: null,
    routePathname: PUBLIC_CATALOG_ROUTE_PATHNAME,
    title: copy.title,
    type: "website",
  });
}

export function createPublicCatalogAuthorsMetadata(locale: AppLocale): Metadata {
  const copy = getPublicCatalogDestinationCopy(locale);

  return createPublicCatalogMetadata({
    alternateLocales: SUPPORTED_LOCALES,
    description: copy.authorsIntro,
    image: null,
    locale,
    modifiedTime: null,
    publishedTime: null,
    routePathname: PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME,
    title: copy.authorsTitle,
    type: "website",
  });
}

export function createPublicCatalogCollectionsMetadata(locale: AppLocale): Metadata {
  const copy = getPublicCatalogDestinationCopy(locale);

  return createPublicCatalogMetadata({
    alternateLocales: SUPPORTED_LOCALES,
    description: copy.collectionsIntro,
    image: null,
    locale,
    modifiedTime: null,
    publishedTime: null,
    routePathname: PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME,
    title: copy.collectionsTitle,
    type: "website",
  });
}

export function createPublicCatalogPackageMetadata(
  locale: AppLocale,
  packageView: PublicCatalogPackageView,
): Metadata {
  const packageMetadata = packageView.packageMetadata;
  const latestVersion = packageView.latestVersion;

  return createPublicCatalogMetadata({
    alternateLocales: getPublicCatalogPackageAudienceLocales(
      latestVersion.languageTags,
    ),
    description: latestVersion.summary,
    image: getPublicCatalogCoverImage(
      latestVersion.title,
      packageView.coverMediaAsset,
    ),
    locale,
    modifiedTime: latestVersion.updatedAt,
    publishedTime: packageMetadata.publishedAt,
    routePathname: getPublicCatalogPackageRoutePathname(packageMetadata.slug),
    title: latestVersion.title,
    type: "article",
  });
}

export function createPublicCatalogAuthorMetadata(
  locale: AppLocale,
  author: PublicCatalogAuthor,
): Metadata {
  const copy = getPublicCatalogDestinationCopy(locale);

  return createPublicCatalogMetadata({
    alternateLocales: SUPPORTED_LOCALES,
    description: author.bio === null || author.bio.trim() === ""
      ? copy.authorsIntro
      : author.bio,
    image: null,
    locale,
    modifiedTime: null,
    publishedTime: null,
    routePathname: getPublicCatalogAuthorRoutePathname(author.slug),
    title: interpolatePublicCatalogCopy(
      copy.authorPackagesHeadingTemplate,
      "name",
      author.displayName,
    ),
    type: "website",
  });
}

export function createPublicCatalogCollectionMetadata(
  locale: AppLocale,
  collection: PublicCatalogCollection,
): Metadata {
  const copy = getPublicCatalogDestinationCopy(locale);

  return createPublicCatalogMetadata({
    alternateLocales: SUPPORTED_LOCALES,
    description: collection.summary === "" ? copy.collectionsIntro : collection.summary,
    image: null,
    locale,
    modifiedTime: collection.updatedAt,
    publishedTime: collection.publishedAt,
    routePathname: getPublicCatalogCollectionRoutePathname(collection.slug),
    title: collection.title,
    type: "article",
  });
}

export function createPublicCatalogFacetMetadata(
  locale: AppLocale,
  tag: string,
): Metadata {
  const copy = getPublicCatalogDestinationCopy(locale);
  const displayTag = formatPublicCatalogFacetTag(tag);

  return createPublicCatalogMetadata({
    alternateLocales: SUPPORTED_LOCALES,
    description: interpolatePublicCatalogCopy(
      copy.languageIntroTemplate,
      "tag",
      displayTag,
    ),
    image: null,
    locale,
    modifiedTime: null,
    publishedTime: null,
    routePathname: getPublicCatalogLanguageRoutePathname(tag),
    title: interpolatePublicCatalogCopy(
      copy.languageTitleTemplate,
      "tag",
      displayTag,
    ),
    type: "website",
  });
}
