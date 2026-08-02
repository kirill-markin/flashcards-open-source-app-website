import type { Metadata } from "next";
import type { AppLocale } from "@/lib/i18n";
import {
  getAbsoluteUrl,
  getLocalizedPathname,
  getOpenGraphLocale,
} from "@/lib/i18n";
import { getLanguageAlternates } from "@/lib/routeTranslations";
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
  getPublicCatalogPackageRoutePathname,
  getPublicCatalogTopicRoutePathname,
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
  readonly description: string;
  readonly locale: AppLocale;
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
      languages: getLanguageAlternates(params.routePathname),
    },
    openGraph: {
      type: params.type,
      locale: getOpenGraphLocale(params.locale),
      siteName: SITE_NAME,
      url: pageUrl,
      title: params.title,
      description: params.description,
      images: [{ url: OPEN_GRAPH_IMAGE_URL }],
      publishedTime: params.publishedTime ?? undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: params.title,
      description: params.description,
      images: [TWITTER_IMAGE_URL],
    },
  };
}

export function createPublicCatalogRootMetadata(locale: AppLocale): Metadata {
  const copy = getPublicCatalogUiCopy(locale);

  return createPublicCatalogMetadata({
    description: copy.intro,
    locale,
    publishedTime: null,
    routePathname: PUBLIC_CATALOG_ROUTE_PATHNAME,
    title: copy.title,
    type: "website",
  });
}

export function createPublicCatalogAuthorsMetadata(locale: AppLocale): Metadata {
  const copy = getPublicCatalogDestinationCopy(locale);

  return createPublicCatalogMetadata({
    description: copy.authorsIntro,
    locale,
    publishedTime: null,
    routePathname: PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME,
    title: copy.authorsTitle,
    type: "website",
  });
}

export function createPublicCatalogCollectionsMetadata(locale: AppLocale): Metadata {
  const copy = getPublicCatalogDestinationCopy(locale);

  return createPublicCatalogMetadata({
    description: copy.collectionsIntro,
    locale,
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

  return createPublicCatalogMetadata({
    description: packageMetadata.summary,
    locale,
    publishedTime: packageMetadata.publishedAt,
    routePathname: getPublicCatalogPackageRoutePathname(packageMetadata.slug),
    title: packageMetadata.title,
    type: "article",
  });
}

export function createPublicCatalogAuthorMetadata(
  locale: AppLocale,
  author: PublicCatalogAuthor,
): Metadata {
  const copy = getPublicCatalogDestinationCopy(locale);

  return createPublicCatalogMetadata({
    description: author.bio === null || author.bio.trim() === ""
      ? copy.authorsIntro
      : author.bio,
    locale,
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
    description: collection.summary === "" ? copy.collectionsIntro : collection.summary,
    locale,
    publishedTime: collection.publishedAt,
    routePathname: getPublicCatalogCollectionRoutePathname(collection.slug),
    title: collection.title,
    type: "article",
  });
}

export function createPublicCatalogFacetMetadata(
  locale: AppLocale,
  facetKind: "language" | "topic",
  tag: string,
): Metadata {
  const copy = getPublicCatalogDestinationCopy(locale);
  const displayTag = formatPublicCatalogFacetTag(tag);
  const isLanguage = facetKind === "language";

  return createPublicCatalogMetadata({
    description: interpolatePublicCatalogCopy(
      isLanguage ? copy.languageIntroTemplate : copy.topicIntroTemplate,
      "tag",
      displayTag,
    ),
    locale,
    publishedTime: null,
    routePathname: isLanguage
      ? getPublicCatalogLanguageRoutePathname(tag)
      : getPublicCatalogTopicRoutePathname(tag),
    title: interpolatePublicCatalogCopy(
      isLanguage ? copy.languageTitleTemplate : copy.topicTitleTemplate,
      "tag",
      displayTag,
    ),
    type: "website",
  });
}
