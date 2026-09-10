import type { AppLocale } from "@/lib/i18n";
import { getAbsoluteUrl, getLocalizedPathname } from "@/lib/i18n";
import { getPublicCatalogCardMediaDownloadUrls } from "@/lib/publicCatalogCardMedia";
import { getPublicCatalogCoverImage } from "@/lib/publicCatalogCover";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import {
  getPublicCatalogDestinationCopy,
  interpolatePublicCatalogCopy,
} from "@/lib/publicCatalogDestinationCopy";
import { formatPublicCatalogFacetTag } from "@/lib/publicCatalogFormatting";
import { projectPublicCatalogCardMarkdownToPlainText } from "@/lib/publicCatalogMarkdownFragment";
import type {
  PublicCatalogPackageView,
  PublicCatalogReadModel,
} from "@/lib/publicCatalogReadModel";
import type {
  PublicCatalogAuthor,
  PublicCatalogCollection,
  PublicCatalogPackageVersion,
} from "@/lib/publicCatalogTypes";
import {
  getPublicCatalogAuthorRoutePathname,
  getPublicCatalogCollectionRoutePathname,
  getPublicCatalogLanguageRoutePathname,
  getPublicCatalogPackageRoutePathname,
  resolvePublicCatalogPackageCanonicalLocale,
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
  readonly dateModified?: string;
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

interface CatalogEntityReference {
  readonly "@id": string;
}

interface PublicCatalogPackageResource {
  readonly "@id": string;
  readonly "@type": readonly ["LearningResource", "Collection"];
  readonly author: CatalogThingReference;
  readonly collectionSize: number;
  readonly dateModified: string;
  readonly datePublished: string;
  readonly description: string;
  readonly hasPart?: CatalogEntityReference;
  readonly image?: string;
  readonly inLanguage: ReadonlyArray<string>;
  readonly isAccessibleForFree: true;
  readonly isPartOf?: ReadonlyArray<CatalogCollectionReference>;
  readonly learningResourceType: "Flashcards";
  readonly license: CatalogLicenseCreativeWork;
  readonly name: string;
  readonly url: string;
}

interface CatalogQuizAbout {
  readonly "@type": "Thing";
  readonly name: string;
}

interface CatalogQuizAnswer {
  readonly "@type": "Answer";
  readonly text: string;
}

interface CatalogQuizQuestion {
  readonly "@type": "Question";
  readonly acceptedAnswer: CatalogQuizAnswer;
  readonly eduQuestionType: "Flashcard";
  readonly text: string;
}

interface CatalogAlignmentObject {
  readonly "@type": "AlignmentObject";
  readonly alignmentType: "educationalLevel" | "educationalSubject";
  readonly educationalFramework?: string;
  readonly targetName: string;
}

interface CatalogQuiz {
  readonly "@id": string;
  readonly "@type": "Quiz";
  readonly about: ReadonlyArray<CatalogQuizAbout>;
  readonly educationalAlignment?: ReadonlyArray<CatalogAlignmentObject>;
  readonly hasPart: ReadonlyArray<CatalogQuizQuestion>;
  readonly image?: string;
  readonly isPartOf: CatalogEntityReference;
  readonly name: string;
  readonly url: string;
}

export interface PublicCatalogPackageJsonLd {
  readonly "@context": "https://schema.org";
  readonly "@graph": readonly [PublicCatalogPackageResource, CatalogQuiz?];
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
  readonly locale: AppLocale;
  readonly name: string;
  readonly routePathname: string;
}

interface CreateCatalogCollectionPageJsonLdParams {
  readonly dateModified: string | null;
  readonly datePublished: string | null;
  readonly description: string;
  readonly entities: ReadonlyArray<CatalogListEntity>;
  readonly locale: AppLocale;
  readonly name: string;
  readonly ordered: boolean;
  readonly routePathname: string;
}

interface CatalogEducationalAlignmentFields {
  readonly framework: string | null;
  readonly level: string | null;
  readonly subject: string | null;
}

function getCatalogAbsoluteUrl(locale: AppLocale, routePathname: string): string {
  return getAbsoluteUrl(getLocalizedPathname(locale, routePathname));
}

/**
 * The snapshot parser keeps a present-but-empty alignment field as `""`, so an
 * unclassified deck must be read as absent instead of emitting an empty value.
 */
function readCatalogAlignmentValue(value: string | null): string | null {
  return value === null || value.trim() === "" ? null : value;
}

function readCatalogEducationalAlignmentFields(
  version: PublicCatalogPackageVersion,
): CatalogEducationalAlignmentFields {
  return {
    framework: readCatalogAlignmentValue(version.educationalFramework),
    level: readCatalogAlignmentValue(version.educationalLevel),
    subject: readCatalogAlignmentValue(version.educationalSubject),
  };
}

function createCatalogAlignmentObject(
  alignmentType: CatalogAlignmentObject["alignmentType"],
  targetName: string,
  framework: string | null,
): CatalogAlignmentObject {
  return {
    "@type": "AlignmentObject",
    alignmentType,
    targetName,
    ...(framework === null ? {} : { educationalFramework: framework }),
  };
}

/**
 * The subject carries the alignment: without it there is nothing for a level to
 * align to, so an unclassified deck emits no `educationalAlignment` at all.
 */
function createCatalogEducationalAlignment(
  fields: CatalogEducationalAlignmentFields,
): ReadonlyArray<CatalogAlignmentObject> {
  if (fields.subject === null) {
    return [];
  }

  return [
    createCatalogAlignmentObject(
      "educationalSubject",
      fields.subject,
      fields.framework,
    ),
    ...(fields.level === null
      ? []
      : [createCatalogAlignmentObject(
          "educationalLevel",
          fields.level,
          fields.framework,
        )]),
  ];
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
    ...(params.dateModified === null
      ? {}
      : { dateModified: params.dateModified }),
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
        "@id": getCatalogAbsoluteUrl(entity.locale, entity.routePathname),
        name: entity.name,
        url: getCatalogAbsoluteUrl(entity.locale, entity.routePathname),
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

/**
 * A list entry names the deck's canonical route instead of the rendering-locale
 * one. A deck is canonical only on its audience-locale routes: the
 * rendering-locale route is disavowed by the deck page's own `rel=canonical`
 * and is left out of the sitemap, so an `item.url` pointing there would name a
 * URL the site itself says is not the deck. It also gives a deck one `@id` per
 * canonical (audience) route, shared by every rendering locale that
 * canonicalizes into it, matching the identity
 * `createPublicCatalogPackageJsonLd` already builds from the canonical route.
 * The visible card link keeps following the rendering locale, which is where
 * the interface language and the internal linking belong; only the
 * machine-readable pointer moves. Author and collection entries stay on the
 * rendering locale because those pages are self-canonical in every locale.
 */
function createPackageListEntities(
  packages: ReadonlyArray<PublicCatalogPackageView>,
  locale: AppLocale,
): ReadonlyArray<CatalogListEntity> {
  return packages.map((packageView) => ({
    locale: resolvePublicCatalogPackageCanonicalLocale(
      packageView.packageMetadata.slug,
      packageView.latestVersion.languageTags,
      locale,
    ),
    name: packageView.latestVersion.title,
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
    dateModified: null,
    datePublished: null,
    description: copy.intro,
    // These entries stay on the rendering locale only because the list is
    // filtered through `packagesByLanguageTag`: every deck it names already has
    // the rendering locale as an audience locale, so that route is the
    // canonical one. If the root ever lists decks outside the rendering locale,
    // this list starts naming canonical routes like the facet and collection
    // lists do.
    entities: createPackageListEntities(
      catalog.packagesByLanguageTag.get(locale) ?? [],
      locale,
    ),
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
    dateModified: null,
    datePublished: null,
    description: copy.authorsIntro,
    entities: [...catalog.authorBySlug.values()].map((author) => ({
      locale,
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
    dateModified: null,
    datePublished: null,
    description: copy.collectionsIntro,
    entities: [...catalog.collectionBySlug.values()].map((collection) => ({
      locale,
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
  locale: AppLocale,
  packages: ReadonlyArray<PublicCatalogPackageView>,
  tag: string,
): CatalogCollectionPageJsonLd {
  const copy = getPublicCatalogDestinationCopy(locale);
  const displayTag = formatPublicCatalogFacetTag(tag);

  return createCatalogCollectionPageJsonLd({
    dateModified: null,
    datePublished: null,
    description: interpolatePublicCatalogCopy(
      copy.languageIntroTemplate,
      "tag",
      displayTag,
    ),
    entities: createPackageListEntities(packages, locale),
    locale,
    name: interpolatePublicCatalogCopy(
      copy.languageTitleTemplate,
      "tag",
      displayTag,
    ),
    ordered: false,
    routePathname: getPublicCatalogLanguageRoutePathname(tag),
  });
}

export function createPublicCatalogCollectionJsonLd(
  collection: PublicCatalogCollection,
  locale: AppLocale,
  packages: ReadonlyArray<PublicCatalogPackageView>,
): CatalogCollectionPageJsonLd {
  const copy = getPublicCatalogDestinationCopy(locale);

  return createCatalogCollectionPageJsonLd({
    dateModified: collection.updatedAt,
    datePublished: collection.publishedAt,
    description: collection.summary === "" ? copy.collectionsIntro : collection.summary,
    entities: createPackageListEntities(packages, locale),
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
  const latestVersion = packageView.latestVersion;
  // A deck is canonical only on its audience-locale routes, so `url` matches the
  // `rel=canonical` the page itself emits and every `@id` follows the same
  // route: one `@id` per canonical (audience) route, shared by every
  // non-audience route that canonicalizes into it, instead of a separate
  // identity on each of the eight rendering locales. Author and collection pages
  // are self-canonical in every locale, so their URLs keep following the
  // rendering locale.
  const canonicalLocale = resolvePublicCatalogPackageCanonicalLocale(
    packageMetadata.slug,
    latestVersion.languageTags,
    locale,
  );
  const packageUrl = getCatalogAbsoluteUrl(
    canonicalLocale,
    getPublicCatalogPackageRoutePathname(packageMetadata.slug),
  );
  const authorUrl = getCatalogAbsoluteUrl(
    locale,
    getPublicCatalogAuthorRoutePathname(packageView.author.slug),
  );
  const resourceId = `${packageUrl}#resource`;
  const quizId = `${packageUrl}#quiz`;
  const coverImage = getPublicCatalogCoverImage(
    latestVersion.title,
    packageView.coverMediaAsset,
  );
  const questions = packageView.cards.map((card): CatalogQuizQuestion => {
    const mediaDownloadUrls = getPublicCatalogCardMediaDownloadUrls(
      card,
      packageView.mediaAssets,
    );
    const cardContext =
      `Public catalog package version ${latestVersion.packageVersionId} card ${card.packageCardId}`;

    return {
      "@type": "Question",
      acceptedAnswer: {
        "@type": "Answer",
        text: projectPublicCatalogCardMarkdownToPlainText(
          card.backText,
          locale,
          mediaDownloadUrls,
          `${cardContext} backText`,
        ),
      },
      eduQuestionType: "Flashcard",
      text: projectPublicCatalogCardMarkdownToPlainText(
        card.frontText,
        locale,
        mediaDownloadUrls,
        `${cardContext} frontText`,
      ),
    };
  });
  const resource: PublicCatalogPackageResource = {
    "@id": resourceId,
    "@type": ["LearningResource", "Collection"],
    author: {
      "@id": `${authorUrl}#author`,
      name: packageView.author.displayName,
      url: authorUrl,
    },
    collectionSize: packageView.latestVersion.cardCount,
    dateModified: latestVersion.updatedAt,
    datePublished: packageMetadata.publishedAt,
    description: latestVersion.summary,
    inLanguage: latestVersion.languageTags,
    isAccessibleForFree: true,
    learningResourceType: "Flashcards",
    license: {
      "@type": "CreativeWork",
      name: latestVersion.license,
    },
    name: latestVersion.title,
    url: packageUrl,
    ...(coverImage === null ? {} : { image: coverImage.downloadUrl }),
    ...(questions.length === 0 ? {} : { hasPart: { "@id": quizId } }),
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

  if (questions.length === 0) {
    return {
      "@context": "https://schema.org",
      "@graph": [resource],
    };
  }

  const alignmentFields = readCatalogEducationalAlignmentFields(latestVersion);
  const educationalAlignment = createCatalogEducationalAlignment(alignmentFields);
  const quiz: CatalogQuiz = {
    "@id": quizId,
    "@type": "Quiz",
    about: [
      {
        "@type": "Thing",
        name: latestVersion.title,
      },
      ...(alignmentFields.subject === null
        ? []
        : [{ "@type": "Thing" as const, name: alignmentFields.subject }]),
    ],
    hasPart: questions,
    isPartOf: { "@id": resourceId },
    name: latestVersion.title,
    url: packageUrl,
    ...(educationalAlignment.length === 0 ? {} : { educationalAlignment }),
    ...(coverImage === null ? {} : { image: coverImage.downloadUrl }),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [resource, quiz],
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
