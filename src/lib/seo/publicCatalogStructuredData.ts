import type { AppLocale } from "@/lib/i18n";
import { getAbsoluteUrl, getLocalizedPathname } from "@/lib/i18n";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import {
  getPublicCatalogDestinationCopy,
  interpolatePublicCatalogCopy,
} from "@/lib/publicCatalogDestinationCopy";
import { formatPublicCatalogFacetTag } from "@/lib/publicCatalogFormatting";
import type {
  PublicCatalogPackageView,
  PublicCatalogReadModel,
} from "@/lib/publicCatalogReadModel";
import type {
  PublicCatalogAuthor,
  PublicCatalogCollection,
} from "@/lib/publicCatalogTypes";
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

interface CatalogThingReference {
  readonly "@id": string;
  readonly name: string;
  readonly url: string;
}

interface CatalogListItem {
  readonly "@type": "ListItem";
  readonly item: CatalogThingReference;
  readonly position: number;
}

interface CatalogItemList {
  readonly "@id": string;
  readonly "@type": "ItemList";
  readonly itemListElement: ReadonlyArray<CatalogListItem>;
  readonly itemListOrder:
    | "https://schema.org/ItemListOrderAscending"
    | "https://schema.org/ItemListUnordered";
  readonly name: string;
  readonly numberOfItems: number;
}

interface CatalogCollectionPage {
  readonly "@id": string;
  readonly "@type": "CollectionPage";
  readonly datePublished?: string;
  readonly description: string;
  readonly inLanguage: AppLocale;
  readonly mainEntity: Readonly<{ "@id": string }>;
  readonly name: string;
  readonly url: string;
}

interface CatalogCollectionPageJsonLd {
  readonly "@context": "https://schema.org";
  readonly "@graph": readonly [CatalogCollectionPage, CatalogItemList];
}

interface CatalogLicenseCreativeWork {
  readonly "@type": "CreativeWork";
  readonly name: string;
}

interface CatalogCollectionReference {
  readonly "@type": "CollectionPage";
  readonly name: string;
  readonly url: string;
}

export interface PublicCatalogPackageJsonLd {
  readonly "@context": "https://schema.org";
  readonly "@id": string;
  readonly "@type": readonly ["LearningResource", "Collection"];
  readonly author: CatalogThingReference;
  readonly collectionSize: number;
  readonly datePublished: string;
  readonly description: string;
  readonly inLanguage?: ReadonlyArray<string>;
  readonly isPartOf?: ReadonlyArray<CatalogCollectionReference>;
  readonly keywords?: ReadonlyArray<string>;
  readonly license: CatalogLicenseCreativeWork;
  readonly name: string;
  readonly url: string;
}

interface ConservativeCatalogAuthorThing {
  readonly "@id": string;
  readonly "@type": "Thing";
  readonly description?: string;
  readonly name: string;
  readonly sameAs?: string;
  readonly url: string;
}

interface ConservativeCatalogAuthorPage {
  readonly "@id": string;
  readonly "@type": "WebPage";
  readonly description: string;
  readonly inLanguage: AppLocale;
  readonly mainEntity: Readonly<{ "@id": string }>;
  readonly name: string;
  readonly url: string;
}

export interface PublicCatalogAuthorJsonLd {
  readonly "@context": "https://schema.org";
  readonly "@graph": readonly [
    ConservativeCatalogAuthorPage,
    ConservativeCatalogAuthorThing,
  ];
}

interface CatalogListEntity {
  readonly name: string;
  readonly routePathname: string;
}

interface CreateCatalogCollectionPageJsonLdParams {
  readonly datePublished: string | null;
  readonly description: string;
  readonly entities: ReadonlyArray<CatalogListEntity>;
  readonly locale: AppLocale;
  readonly name: string;
  readonly ordered: boolean;
  readonly routePathname: string;
}

function getCatalogAbsoluteUrl(locale: AppLocale, routePathname: string): string {
  return getAbsoluteUrl(getLocalizedPathname(locale, routePathname));
}

function createCatalogCollectionPageJsonLd(
  params: CreateCatalogCollectionPageJsonLdParams,
): CatalogCollectionPageJsonLd {
  const pageUrl = getCatalogAbsoluteUrl(params.locale, params.routePathname);
  const itemListId = `${pageUrl}#items`;
  const page: CatalogCollectionPage = {
    "@id": pageUrl,
    "@type": "CollectionPage",
    description: params.description,
    inLanguage: params.locale,
    mainEntity: { "@id": itemListId },
    name: params.name,
    url: pageUrl,
    ...(params.datePublished === null
      ? {}
      : { datePublished: params.datePublished }),
  };
  const itemList: CatalogItemList = {
    "@id": itemListId,
    "@type": "ItemList",
    itemListElement: params.entities.map((entity, index) => ({
      "@type": "ListItem",
      item: {
        "@id": getCatalogAbsoluteUrl(params.locale, entity.routePathname),
        name: entity.name,
        url: getCatalogAbsoluteUrl(params.locale, entity.routePathname),
      },
      position: index + 1,
    })),
    itemListOrder: params.ordered
      ? "https://schema.org/ItemListOrderAscending"
      : "https://schema.org/ItemListUnordered",
    name: params.name,
    numberOfItems: params.entities.length,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [page, itemList],
  };
}

function createPackageListEntities(
  packages: ReadonlyArray<PublicCatalogPackageView>,
): ReadonlyArray<CatalogListEntity> {
  return packages.map((packageView) => ({
    name: packageView.packageMetadata.title,
    routePathname: getPublicCatalogPackageRoutePathname(
      packageView.packageMetadata.slug,
    ),
  }));
}

export function createPublicCatalogRootJsonLd(
  catalog: PublicCatalogReadModel,
  locale: AppLocale,
): CatalogCollectionPageJsonLd {
  const copy = getPublicCatalogUiCopy(locale);

  return createCatalogCollectionPageJsonLd({
    datePublished: null,
    description: copy.intro,
    entities: createPackageListEntities(catalog.packages),
    locale,
    name: copy.title,
    ordered: false,
    routePathname: PUBLIC_CATALOG_ROUTE_PATHNAME,
  });
}

export function createPublicCatalogAuthorsJsonLd(
  catalog: PublicCatalogReadModel,
  locale: AppLocale,
): CatalogCollectionPageJsonLd {
  const copy = getPublicCatalogDestinationCopy(locale);

  return createCatalogCollectionPageJsonLd({
    datePublished: null,
    description: copy.authorsIntro,
    entities: [...catalog.authorBySlug.values()].map((author) => ({
      name: author.displayName,
      routePathname: getPublicCatalogAuthorRoutePathname(author.slug),
    })),
    locale,
    name: copy.authorsTitle,
    ordered: false,
    routePathname: PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME,
  });
}

export function createPublicCatalogCollectionsJsonLd(
  catalog: PublicCatalogReadModel,
  locale: AppLocale,
): CatalogCollectionPageJsonLd {
  const copy = getPublicCatalogDestinationCopy(locale);

  return createCatalogCollectionPageJsonLd({
    datePublished: null,
    description: copy.collectionsIntro,
    entities: [...catalog.collectionBySlug.values()].map((collection) => ({
      name: collection.title,
      routePathname: getPublicCatalogCollectionRoutePathname(collection.slug),
    })),
    locale,
    name: copy.collectionsTitle,
    ordered: false,
    routePathname: PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME,
  });
}

export function createPublicCatalogFacetJsonLd(
  facetKind: "language" | "topic",
  locale: AppLocale,
  packages: ReadonlyArray<PublicCatalogPackageView>,
  tag: string,
): CatalogCollectionPageJsonLd {
  const copy = getPublicCatalogDestinationCopy(locale);
  const displayTag = formatPublicCatalogFacetTag(tag);
  const isLanguage = facetKind === "language";

  return createCatalogCollectionPageJsonLd({
    datePublished: null,
    description: interpolatePublicCatalogCopy(
      isLanguage ? copy.languageIntroTemplate : copy.topicIntroTemplate,
      "tag",
      displayTag,
    ),
    entities: createPackageListEntities(packages),
    locale,
    name: interpolatePublicCatalogCopy(
      isLanguage ? copy.languageTitleTemplate : copy.topicTitleTemplate,
      "tag",
      displayTag,
    ),
    ordered: false,
    routePathname: isLanguage
      ? getPublicCatalogLanguageRoutePathname(tag)
      : getPublicCatalogTopicRoutePathname(tag),
  });
}

export function createPublicCatalogCollectionJsonLd(
  collection: PublicCatalogCollection,
  locale: AppLocale,
  packages: ReadonlyArray<PublicCatalogPackageView>,
): CatalogCollectionPageJsonLd {
  const copy = getPublicCatalogDestinationCopy(locale);

  return createCatalogCollectionPageJsonLd({
    datePublished: collection.publishedAt,
    description: collection.summary === "" ? copy.collectionsIntro : collection.summary,
    entities: createPackageListEntities(packages),
    locale,
    name: collection.title,
    ordered: true,
    routePathname: getPublicCatalogCollectionRoutePathname(collection.slug),
  });
}

export function createPublicCatalogPackageJsonLd(
  collections: ReadonlyArray<PublicCatalogCollection>,
  locale: AppLocale,
  packageView: PublicCatalogPackageView,
): PublicCatalogPackageJsonLd {
  const packageMetadata = packageView.packageMetadata;
  const packageUrl = getCatalogAbsoluteUrl(
    locale,
    getPublicCatalogPackageRoutePathname(packageMetadata.slug),
  );
  const authorUrl = getCatalogAbsoluteUrl(
    locale,
    getPublicCatalogAuthorRoutePathname(packageView.author.slug),
  );

  return {
    "@context": "https://schema.org",
    "@id": `${packageUrl}#resource`,
    "@type": ["LearningResource", "Collection"],
    author: {
      "@id": `${authorUrl}#author`,
      name: packageView.author.displayName,
      url: authorUrl,
    },
    collectionSize: packageView.latestVersion.cardCount,
    datePublished: packageMetadata.publishedAt,
    description: packageMetadata.summary,
    license: {
      "@type": "CreativeWork",
      name: packageMetadata.license,
    },
    name: packageMetadata.title,
    url: packageUrl,
    ...(packageMetadata.languageTags.length === 0
      ? {}
      : { inLanguage: packageMetadata.languageTags }),
    ...(packageMetadata.topicTags.length === 0
      ? {}
      : { keywords: packageMetadata.topicTags }),
    ...(collections.length === 0
      ? {}
      : {
          isPartOf: collections.map((collection) => ({
            "@type": "CollectionPage" as const,
            name: collection.title,
            url: getCatalogAbsoluteUrl(
              locale,
              getPublicCatalogCollectionRoutePathname(collection.slug),
            ),
          })),
        }),
  };
}

export function createPublicCatalogAuthorJsonLd(
  author: PublicCatalogAuthor,
  locale: AppLocale,
): PublicCatalogAuthorJsonLd {
  const copy = getPublicCatalogDestinationCopy(locale);
  const pageUrl = getCatalogAbsoluteUrl(
    locale,
    getPublicCatalogAuthorRoutePathname(author.slug),
  );
  const authorId = `${pageUrl}#author`;
  const description = author.bio === null || author.bio.trim() === ""
    ? copy.authorsIntro
    : author.bio;
  const page: ConservativeCatalogAuthorPage = {
    "@id": pageUrl,
    "@type": "WebPage",
    description,
    inLanguage: locale,
    mainEntity: { "@id": authorId },
    name: author.displayName,
    url: pageUrl,
  };
  const authorThing: ConservativeCatalogAuthorThing = {
    "@id": authorId,
    "@type": "Thing",
    name: author.displayName,
    url: pageUrl,
    ...(author.bio === null || author.bio.trim() === ""
      ? {}
      : { description: author.bio }),
    ...(author.websiteUrl === null ? {} : { sameAs: author.websiteUrl }),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [page, authorThing],
  };
}
