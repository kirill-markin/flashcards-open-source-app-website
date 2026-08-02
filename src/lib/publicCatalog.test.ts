import assert from "node:assert/strict";
import test from "node:test";
import { parsePublicCatalogBuildConfiguration } from "./publicCatalogBuild";
import { createPublicCatalogBrowseData } from "./publicCatalogBrowse";
import { getPublicCatalogAuthorBioExcerpt } from "./publicCatalogAuthor";
import { getPublicCatalogUiCopy } from "./publicCatalogCopy";
import { getPublicCatalogDestinationCopy } from "./publicCatalogDestinationCopy";
import {
  getPublicCatalogCoverAccessibleLabel,
  getPublicCatalogCoverInitial,
} from "./publicCatalogCover";
import {
  formatPublicCatalogCardCount,
  formatPublicCatalogDate,
  formatPublicCatalogNumber,
  formatPublicCatalogPackageCount,
} from "./publicCatalogFormatting";
import { parsePublicCatalogDump } from "./publicCatalogParser";
import {
  createCachedPublicCatalogReader,
  createPublicCatalogReadModel,
  getPublicCatalogAuthorBySlug,
  getPublicCatalogCollectionBySlug,
  getPublicCatalogCollectionsByPackageSlug,
  getPublicCatalogPackageBySlug,
  getPublicCatalogPackagesByAuthorSlug,
  getPublicCatalogPackagesByCollectionSlug,
  getPublicCatalogPackagesByLanguageTag,
  getPublicCatalogPackagesByTopicTag,
} from "./publicCatalogReadModel";
import type { PublicCatalogDump } from "./publicCatalogTypes";
import {
  getPublicCatalogAuthorRoutePathname,
  getPublicCatalogCollectionRoutePathname,
  getPublicCatalogLanguageRoutePathname,
  getPublicCatalogPackageRoutePathname,
  getPublicCatalogTopicRoutePathname,
  PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME,
  PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME,
  isPublicCatalogPageRoutePathname,
  resolvePublicCatalogRouteSegment,
} from "./publicCatalogUrls";
import { createPublicCatalogSitemapEntries } from "./publicCatalogSitemap";
import {
  createPublicCatalogAuthorJsonLd,
  createPublicCatalogCollectionJsonLd,
  createPublicCatalogFacetJsonLd,
  createPublicCatalogPackageJsonLd,
  createPublicCatalogRootJsonLd,
} from "./seo/publicCatalogStructuredData";
import { serializeStructuredData } from "./seo/structuredData";

type Mutable<T> = T extends ReadonlyArray<infer Item>
  ? Array<Mutable<Item>>
  : T extends object
    ? { -readonly [Key in keyof T]: Mutable<T[Key]> }
    : T;

type PublicCatalogDumpFixture = Mutable<PublicCatalogDump>;

function createValidDump(): PublicCatalogDumpFixture {
  return {
    schemaVersion: 1,
    generatedAt: "2026-08-02T12:00:00.000Z",
    authors: [
      {
        authorId: "author-1",
        slug: "author-one",
        displayName: "Author One",
        bio: "Author bio",
        websiteUrl: "https://example.com/author-one",
      },
    ],
    packages: [
      {
        packageId: "package-1",
        authorId: "author-1",
        slug: "canonical-package",
        title: "Canonical package title",
        summary: "Canonical package summary",
        description: "Canonical **package** description",
        languageTags: ["en", "es"],
        topicTags: ["grammar"],
        license: "CC0-1.0",
        contentWarning: null,
        coverPackageMediaKey: "cover.webp",
        latestPublishedVersionId: "version-2",
        publishedAt: "2026-08-02T10:00:00.000Z",
      },
    ],
    packageVersions: [
      {
        packageVersionId: "version-1",
        packageId: "package-1",
        versionNumber: 1,
        title: "Old version title",
        summary: "Old version summary",
        description: "Old version description",
        cardCount: 1,
        publishedAt: "2026-08-01T10:00:00.000Z",
        installUrl: "https://app.flashcards-open-source-app.com/catalog/import/version-1",
      },
      {
        packageVersionId: "version-2",
        packageId: "package-1",
        versionNumber: 2,
        title: "Non-canonical version title",
        summary: "Non-canonical version summary",
        description: "Non-canonical version description",
        cardCount: 2,
        publishedAt: "2026-08-02T10:00:00.000Z",
        installUrl: "https://app.flashcards-open-source-app.com/catalog/import/version-2",
      },
    ],
    cards: [
      {
        packageCardId: "card-old",
        packageVersionId: "version-1",
        ordinal: 0,
        frontText: "Old front",
        backText: "Old back",
        cardType: "basic",
        metadata: {},
        tags: [],
        mediaAssetKeys: [],
      },
      {
        packageCardId: "card-2",
        packageVersionId: "version-2",
        ordinal: 2,
        frontText: "Second front",
        backText: "Second back",
        cardType: "basic",
        metadata: { difficulty: 2, nested: { enabled: true } },
        tags: ["second"],
        mediaAssetKeys: [],
      },
      {
        packageCardId: "card-1",
        packageVersionId: "version-2",
        ordinal: 1,
        frontText: "First **front**",
        backText: "First [back](https://example.com)",
        cardType: "basic",
        metadata: {},
        tags: ["first"],
        mediaAssetKeys: ["inline.webp"],
      },
    ],
    mediaAssets: [
      {
        packageMediaAssetId: "media-old",
        packageId: "package-1",
        packageVersionId: "version-1",
        packageMediaKey: "old.webp",
        altText: "Old image",
        credit: null,
        license: "CC0-1.0",
        downloadUrlPath: "/catalog/package-versions/version-1/media-assets/old.webp/download-url",
      },
      {
        packageMediaAssetId: "media-cover",
        packageId: "package-1",
        packageVersionId: "version-2",
        packageMediaKey: "cover.webp",
        altText: "Cover image",
        credit: null,
        license: "CC0-1.0",
        downloadUrlPath: "/catalog/package-versions/version-2/media-assets/cover.webp/download-url",
      },
      {
        packageMediaAssetId: "media-inline",
        packageId: "package-1",
        packageVersionId: "version-2",
        packageMediaKey: "inline.webp",
        altText: "Inline image",
        credit: "Example credit",
        license: "CC-BY-4.0",
        downloadUrlPath: "/catalog/package-versions/version-2/media-assets/inline.webp/download-url",
      },
    ],
    collections: [
      {
        collectionId: "collection-1",
        slug: "starter-collection",
        title: "Starter collection",
        summary: "Collection summary",
        description: "Collection **description**",
        languageTags: ["en"],
        topicTags: ["grammar"],
        coverPackageId: "package-1",
        publishedAt: "2026-08-02T11:00:00.000Z",
      },
    ],
    collectionPackages: [
      {
        collectionId: "collection-1",
        packageId: "package-1",
        ordinal: 1,
      },
    ],
  };
}

test("parses the schema and builds latest-version-only lookup data", () => {
  const dump = parsePublicCatalogDump(createValidDump());
  const model = createPublicCatalogReadModel(dump);
  const packageView = getPublicCatalogPackageBySlug(model, "canonical-package");

  assert.ok(packageView);
  assert.equal(packageView.packageMetadata.title, "Canonical package title");
  assert.equal(packageView.latestVersion.packageVersionId, "version-2");
  assert.deepEqual(packageView.cards.map((card) => card.packageCardId), ["card-1", "card-2"]);
  assert.deepEqual(
    packageView.mediaAssets.map((mediaAsset) => mediaAsset.packageMediaAssetId),
    ["media-cover", "media-inline"],
  );
  assert.equal(packageView.coverMediaAsset?.packageMediaAssetId, "media-cover");
  assert.equal(packageView.packageMetadata.description, "Canonical **package** description");
  assert.equal(getPublicCatalogAuthorBySlug(model, "author-one")?.authorId, "author-1");
  assert.equal(
    getPublicCatalogCollectionBySlug(model, "starter-collection")?.collectionId,
    "collection-1",
  );
  assert.deepEqual(getPublicCatalogPackagesByAuthorSlug(model, "author-one"), [packageView]);
  assert.deepEqual(
    getPublicCatalogPackagesByCollectionSlug(model, "starter-collection"),
    [packageView],
  );
  assert.deepEqual(getPublicCatalogCollectionsByPackageSlug(model, "canonical-package"), [
    dump.collections[0],
  ]);
  assert.deepEqual(getPublicCatalogPackagesByLanguageTag(model, "es"), [packageView]);
  assert.deepEqual(getPublicCatalogPackagesByTopicTag(model, "grammar"), [packageView]);
  assert.deepEqual(model.languageTags, ["en", "es"]);
  assert.deepEqual(model.topicTags, ["grammar"]);
});

test("accepts nullable and empty author details while rejecting missing keys", () => {
  const nullableInput = createValidDump();
  nullableInput.authors[0].bio = null;
  nullableInput.authors[0].websiteUrl = null;

  const nullableAuthor = parsePublicCatalogDump(nullableInput).authors[0];

  assert.equal(nullableAuthor.bio, null);
  assert.equal(nullableAuthor.websiteUrl, null);

  const missingBioInput = createValidDump();
  const authorWithoutBio: Partial<PublicCatalogDumpFixture["authors"][number]> = {
    ...missingBioInput.authors[0],
  };
  delete authorWithoutBio.bio;

  assert.throws(
    () => parsePublicCatalogDump({
      ...missingBioInput,
      authors: [authorWithoutBio],
    }),
    /authors\[0\]\.bio must be a string/,
  );

  const missingWebsiteInput = createValidDump();
  const authorWithoutWebsite: Partial<PublicCatalogDumpFixture["authors"][number]> = {
    ...missingWebsiteInput.authors[0],
  };
  delete authorWithoutWebsite.websiteUrl;

  assert.throws(
    () => parsePublicCatalogDump({
      ...missingWebsiteInput,
      authors: [authorWithoutWebsite],
    }),
    /authors\[0\]\.websiteUrl must be a string/,
  );

  const emptyBioInput = createValidDump();
  emptyBioInput.authors[0].bio = "";

  assert.equal(parsePublicCatalogDump(emptyBioInput).authors[0].bio, "");

  const invalidWebsiteInput = createValidDump();
  invalidWebsiteInput.authors[0].websiteUrl = "http://example.com/author-one";

  assert.throws(
    () => parsePublicCatalogDump(invalidWebsiteInput),
    /authors\[0\]\.websiteUrl must be an absolute HTTPS URL/,
  );
});

test("does not expose historical records through the public read model", () => {
  const dump = parsePublicCatalogDump(createValidDump());
  const model = createPublicCatalogReadModel(dump);

  assert.equal(model.schemaVersion, 1);
  assert.equal(model.generatedAt, "2026-08-02T12:00:00.000Z");
  assert.equal("dump" in model, false);
  assert.equal("packageVersions" in model, false);
  assert.equal("cards" in model, false);
  assert.equal("mediaAssets" in model, false);
  assert.deepEqual(
    model.packages.map((packageView) => packageView.latestVersion.packageVersionId),
    ["version-2"],
  );
});

test("keeps collection packages in membership ordinal order", () => {
  const input = createValidDump();
  input.packages.push({
    packageId: "package-2",
    authorId: "author-1",
    slug: "second-package",
    title: "Second package",
    summary: "Second summary",
    description: "Second description",
    languageTags: ["fr"],
    topicTags: ["history"],
    license: "CC0-1.0",
    contentWarning: null,
    coverPackageMediaKey: null,
    latestPublishedVersionId: "version-3",
    publishedAt: "2026-08-02T11:30:00.000Z",
  });
  input.packageVersions.push({
    packageVersionId: "version-3",
    packageId: "package-2",
    versionNumber: 1,
    title: "Second package",
    summary: "Second summary",
    description: "Second description",
    cardCount: 0,
    publishedAt: "2026-08-02T11:30:00.000Z",
    installUrl: "https://app.flashcards-open-source-app.com/catalog/import/version-3",
  });
  input.collectionPackages.push({
    collectionId: "collection-1",
    packageId: "package-2",
    ordinal: 0,
  });

  const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));

  assert.deepEqual(
    getPublicCatalogPackagesByCollectionSlug(model, "starter-collection")?.map(
      (packageView) => packageView.packageMetadata.slug,
    ),
    ["second-package", "canonical-package"],
  );
});

test("creates escaped catalog JSON-LD from canonical read-model entities", () => {
  const input = createValidDump();
  input.authors[0].displayName = "Author < One";
  input.packages[0].topicTags = ["world history"];
  input.collections[0].topicTags = ["world history"];
  const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));
  const packageView = getPublicCatalogPackageBySlug(model, "canonical-package");
  const collection = getPublicCatalogCollectionBySlug(model, "starter-collection");
  const author = getPublicCatalogAuthorBySlug(model, "author-one");

  assert.ok(packageView);
  assert.ok(collection);
  assert.ok(author);

  const packageSchema = createPublicCatalogPackageJsonLd(
    [collection],
    "es",
    packageView,
  );

  assert.deepEqual(packageSchema["@type"], ["LearningResource", "Collection"]);
  assert.equal(
    packageSchema.url,
    "https://flashcards-open-source-app.com/es/catalog/packages/canonical-package/",
  );
  assert.equal(packageSchema.collectionSize, 2);
  assert.deepEqual(packageSchema.inLanguage, ["en", "es"]);
  assert.deepEqual(packageSchema.keywords, ["world history"]);
  assert.deepEqual(packageSchema.license, {
    "@type": "CreativeWork",
    name: "CC0-1.0",
  });
  assert.equal("@type" in packageSchema.author, false);
  assert.equal("image" in packageSchema, false);
  assert.equal("aggregateRating" in packageSchema, false);
  assert.equal("offers" in packageSchema, false);

  const rootSchema = createPublicCatalogRootJsonLd(model, "en");
  const rootItemList = rootSchema["@graph"][1];

  assert.equal(rootSchema["@graph"][0]["@type"], "CollectionPage");
  assert.equal(rootItemList["@type"], "ItemList");
  assert.equal(rootItemList.numberOfItems, 1);
  assert.equal(
    rootItemList.itemListElement[0]?.item.url,
    "https://flashcards-open-source-app.com/catalog/packages/canonical-package/",
  );

  const collectionSchema = createPublicCatalogCollectionJsonLd(
    collection,
    "en",
    model.packagesByCollectionId.get(collection.collectionId) ?? [],
  );
  const collectionItemList = collectionSchema["@graph"][1];

  assert.equal(
    collectionItemList.itemListOrder,
    "https://schema.org/ItemListOrderAscending",
  );
  assert.deepEqual(
    collectionItemList.itemListElement.map((item) => item.position),
    [1],
  );

  const authorSchema = createPublicCatalogAuthorJsonLd(author, "en");
  const authorEntity = authorSchema["@graph"][1];

  assert.equal(authorEntity["@type"], "Thing");
  assert.equal(authorSchema["@graph"][0]["@type"], "WebPage");
  assert.equal(JSON.stringify(authorSchema).includes("Person"), false);
  assert.equal(JSON.stringify(authorSchema).includes("Organization"), false);

  const facetSchema = createPublicCatalogFacetJsonLd(
    "topic",
    "de",
    model.packages,
    "world history",
  );

  assert.equal(
    facetSchema["@graph"][0].url,
    "https://flashcards-open-source-app.com/de/catalog/topics/world%20history/",
  );

  const serializedSchema = serializeStructuredData(packageSchema);

  assert.equal(serializedSchema.includes("<"), false);
  assert.equal(serializedSchema.includes("\\u003c"), true);
  assert.doesNotThrow(() => JSON.parse(serializedSchema));
});

test("creates deterministic localized catalog sitemap entries from real publish dates", () => {
  const input = createValidDump();
  input.packages[0].topicTags = ["world history"];
  input.collections[0].topicTags = ["world history"];
  input.packageVersions[1].publishedAt = "2026-08-03T09:00:00.000Z";
  const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));
  const entries = createPublicCatalogSitemapEntries(model);
  const entryByUrl = new Map(entries.map((entry) => [entry.url, entry]));
  const rootUrl = "https://flashcards-open-source-app.com/catalog/";
  const authorIndexUrl = "https://flashcards-open-source-app.com/catalog/authors/";
  const authorUrl =
    "https://flashcards-open-source-app.com/catalog/authors/author-one/";
  const collectionIndexUrl =
    "https://flashcards-open-source-app.com/catalog/collections/";
  const collectionUrl =
    "https://flashcards-open-source-app.com/catalog/collections/starter-collection/";
  const packageUrl =
    "https://flashcards-open-source-app.com/catalog/packages/canonical-package/";
  const languageFacetUrl =
    "https://flashcards-open-source-app.com/catalog/languages/en/";
  const percentFacetUrl =
    "https://flashcards-open-source-app.com/ja/catalog/topics/world%20history/";
  const latestVersionPublishedAt = "2026-08-03T09:00:00.000Z";

  assert.equal(entries.length, 72);
  assert.equal(entryByUrl.get(rootUrl)?.lastModified, latestVersionPublishedAt);
  assert.equal(entryByUrl.get(packageUrl)?.lastModified, latestVersionPublishedAt);
  assert.equal(entryByUrl.get(authorUrl)?.lastModified, latestVersionPublishedAt);
  assert.equal(entryByUrl.get(collectionUrl)?.lastModified, latestVersionPublishedAt);
  assert.equal(entryByUrl.get(languageFacetUrl)?.lastModified, latestVersionPublishedAt);
  assert.equal(entryByUrl.get(percentFacetUrl)?.lastModified, latestVersionPublishedAt);
  assert.equal(
    entryByUrl.get(authorIndexUrl)?.lastModified,
    "2026-08-02T10:00:00.000Z",
  );
  assert.equal(
    entryByUrl.get(collectionIndexUrl)?.lastModified,
    "2026-08-02T11:00:00.000Z",
  );
  assert.ok(entryByUrl.has(percentFacetUrl));
  assert.equal(
    entryByUrl.get(percentFacetUrl)?.alternates?.languages?.es,
    "https://flashcards-open-source-app.com/es/catalog/topics/world%20history/",
  );
  assert.equal(
    entryByUrl.get(percentFacetUrl)?.alternates?.languages?.["x-default"],
    "https://flashcards-open-source-app.com/catalog/topics/world%20history/",
  );
  assert.equal(entries.some((entry) => entry.url.includes("?")), false);
  assert.equal(entries.some((entry) => entry.url.includes("/import/")), false);
  assert.equal(entries.some((entry) => entry.url.includes("media-assets")), false);
  assert.equal(entries.some((entry) => entry.url.includes("download-url")), false);
});

test("includes collection-only tags in static facets without inventing package membership", () => {
  const input = createValidDump();
  input.collections[0].languageTags = ["zz"];
  input.collections[0].topicTags = ["collection-only"];

  const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));

  assert.deepEqual(model.languageTags, ["en", "es", "zz"]);
  assert.deepEqual(model.topicTags, ["collection-only", "grammar"]);
  assert.deepEqual(getPublicCatalogPackagesByLanguageTag(model, "zz"), []);
  assert.deepEqual(getPublicCatalogPackagesByTopicTag(model, "collection-only"), []);

  const browseData = createPublicCatalogBrowseData(model);

  assert.deepEqual(browseData.languages, ["en", "es"]);
  assert.deepEqual(browseData.topics, ["grammar"]);
  assert.equal("description" in browseData.packages[0].packageView.packageMetadata, false);
  assert.equal("cards" in browseData.packages[0].packageView, false);
  assert.equal("mediaAssets" in browseData.packages[0].packageView, false);

  const sitemapEntries = createPublicCatalogSitemapEntries(model);
  const collectionOnlyFacet = sitemapEntries.find(
    (entry) => entry.url
      === "https://flashcards-open-source-app.com/catalog/topics/collection-only/",
  );

  assert.equal(
    collectionOnlyFacet?.lastModified,
    "2026-08-02T11:00:00.000Z",
  );
});

test("excludes orphan authors and collections from browse controls", () => {
  const input = createValidDump();
  input.authors.push({
    authorId: "author-orphan",
    slug: "author-orphan",
    displayName: "Orphan Author",
    bio: null,
    websiteUrl: null,
  });

  const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));
  const orphanCollection = {
    ...input.collections[0],
    collectionId: "collection-orphan",
    slug: "orphan-collection",
    title: "Orphan Collection",
  };
  const modelWithOrphanCollection = {
    ...model,
    collectionBySlug: new Map([
      ...model.collectionBySlug,
      [orphanCollection.slug, orphanCollection] as const,
    ]),
  };
  const browseData = createPublicCatalogBrowseData(modelWithOrphanCollection);

  assert.deepEqual(browseData.authors, [
    { value: "author-one", label: "Author One" },
  ]);
  assert.deepEqual(browseData.collections, [
    { value: "starter-collection", label: "Starter collection" },
  ]);
});

test("reuses one read model while enabled and returns null while disabled", () => {
  let enabled = false;
  let dumpReadCount = 0;
  const readCatalog = createCachedPublicCatalogReader(
    () => enabled,
    () => {
      dumpReadCount += 1;
      return createValidDump();
    },
  );

  assert.equal(readCatalog(), null);
  assert.equal(dumpReadCount, 0);

  enabled = true;
  const firstCatalog = readCatalog();
  const secondCatalog = readCatalog();

  assert.ok(firstCatalog);
  assert.strictEqual(secondCatalog, firstCatalog);
  assert.equal(dumpReadCount, 1);

  enabled = false;
  assert.equal(readCatalog(), null);
  assert.equal(dumpReadCount, 1);
});

test("ignores unrelated extra fields while requiring the contract fields", () => {
  const input = createValidDump() as ReturnType<typeof createValidDump> & {
    unrelated?: string;
  };

  input.unrelated = "ignored";
  const dump = parsePublicCatalogDump(input);

  assert.equal("unrelated" in dump, false);
  assert.throws(
    () => parsePublicCatalogDump({ ...input, authors: undefined }),
    /authors must be an array/,
  );
});

test("allows Markdown and autolinks but rejects raw HTML", () => {
  const validInput = createValidDump();
  validInput.cards[1].frontText = "Visit <https://example.com>";

  assert.doesNotThrow(() => parsePublicCatalogDump(validInput));

  const invalidInput = createValidDump();
  invalidInput.cards[1].frontText = "<img src=x onerror=alert(1)>";

  assert.throws(
    () => parsePublicCatalogDump(invalidInput),
    /cards\[1\]\.frontText must not contain raw HTML/,
  );
});

test("rejects duplicate ordinals within their parent", () => {
  const input = createValidDump();
  input.cards[2].ordinal = input.cards[1].ordinal;

  assert.throws(
    () => parsePublicCatalogDump(input),
    /cards\.ordinal contains duplicate ordinal 2 for version-2/,
  );
});

test("rejects broken latest-version, media, and collection references", () => {
  const missingLatestVersion = createValidDump();
  missingLatestVersion.packages[0].latestPublishedVersionId = "missing-version";
  assert.throws(
    () => parsePublicCatalogDump(missingLatestVersion),
    /references missing latest published version missing-version/,
  );

  const missingCardMedia = createValidDump();
  missingCardMedia.cards[2].mediaAssetKeys = ["missing.webp"];
  assert.throws(
    () => parsePublicCatalogDump(missingCardMedia),
    /references missing media asset key missing.webp/,
  );

  const missingCollectionPackage = createValidDump();
  missingCollectionPackage.collectionPackages[0].packageId = "missing-package";
  assert.throws(
    () => parsePublicCatalogDump(missingCollectionPackage),
    /references missing package missing-package/,
  );
});

test("rejects latest-version card count mismatches", () => {
  const input = createValidDump();
  input.packageVersions[1].cardCount = 3;

  assert.throws(
    () => parsePublicCatalogDump(input),
    /cardCount does not match its cards\. cardCount=3, cards=2/,
  );
});

test("rejects historical-version card count mismatches", () => {
  const input = createValidDump();
  input.packageVersions[0].cardCount = 2;

  assert.throws(
    () => parsePublicCatalogDump(input),
    /package version version-1 cardCount does not match its cards\. cardCount=2, cards=1/,
  );
});

test("keeps the catalog disabled by default and requires an explicit URL when enabled", () => {
  assert.deepEqual(parsePublicCatalogBuildConfiguration(undefined, undefined), { enabled: false });
  assert.deepEqual(parsePublicCatalogBuildConfiguration("false", undefined), { enabled: false });
  assert.deepEqual(
    parsePublicCatalogBuildConfiguration("true", "https://api.example.com/catalog.json"),
    {
      enabled: true,
      dumpUrl: "https://api.example.com/catalog.json",
    },
  );
  assert.throws(
    () => parsePublicCatalogBuildConfiguration("true", undefined),
    /PUBLIC_CATALOG_DUMP_URL is required/,
  );
  assert.throws(
    () => parsePublicCatalogBuildConfiguration("yes", "https://api.example.com/catalog.json"),
    /PUBLIC_CATALOG_ENABLED must be exactly/,
  );
  assert.throws(
    () => parsePublicCatalogBuildConfiguration("true", "http:\/\/api.example.com/catalog.json"),
    /must be an absolute HTTPS URL/,
  );
});

test("builds canonical catalog destinations and identifies current catalog pages", () => {
  const ambiguousTags = ["history world", "history%20world", "100%"];

  assert.equal(
    resolvePublicCatalogRouteSegment("history%20world", ambiguousTags),
    "history world",
  );
  assert.equal(
    resolvePublicCatalogRouteSegment("history%2520world", ambiguousTags),
    "history%20world",
  );
  assert.equal(
    resolvePublicCatalogRouteSegment("100%25", ambiguousTags),
    "100%",
  );
  assert.equal(
    resolvePublicCatalogRouteSegment("history world", ambiguousTags),
    "history world",
  );
  assert.equal(resolvePublicCatalogRouteSegment("missing", ambiguousTags), undefined);
  assert.equal(
    getPublicCatalogPackageRoutePathname("canonical-package"),
    "/catalog/packages/canonical-package/",
  );
  assert.equal(
    getPublicCatalogAuthorRoutePathname("author-one"),
    "/catalog/authors/author-one/",
  );
  assert.equal(
    getPublicCatalogCollectionRoutePathname("starter-collection"),
    "/catalog/collections/starter-collection/",
  );
  assert.equal(
    getPublicCatalogLanguageRoutePathname("pt-BR"),
    "/catalog/languages/pt-BR/",
  );
  assert.equal(
    getPublicCatalogTopicRoutePathname("world history"),
    "/catalog/topics/world%20history/",
  );
  assert.equal(isPublicCatalogPageRoutePathname("/catalog/"), true);
  assert.equal(
    isPublicCatalogPageRoutePathname("/catalog/packages/canonical-package/"),
    true,
  );
  assert.equal(
    isPublicCatalogPageRoutePathname("/catalog/authors/author-one/"),
    true,
  );
  assert.equal(isPublicCatalogPageRoutePathname(PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME), true);
  assert.equal(isPublicCatalogPageRoutePathname(PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME), true);
  assert.equal(isPublicCatalogPageRoutePathname("/catalog/languages/pt-BR/"), true);
  assert.equal(isPublicCatalogPageRoutePathname("/catalog/topics/world%20history/"), true);
});

test("formats localized card counts with the required plural categories", () => {
  assert.equal(
    formatPublicCatalogCardCount("en", 1, getPublicCatalogUiCopy("en")),
    "1 card",
  );
  assert.equal(
    formatPublicCatalogCardCount("en", 2, getPublicCatalogUiCopy("en")),
    "2 cards",
  );
  assert.equal(
    formatPublicCatalogCardCount("es", 1, getPublicCatalogUiCopy("es")),
    "1 tarjeta",
  );
  assert.equal(
    formatPublicCatalogCardCount("de", 1, getPublicCatalogUiCopy("de")),
    "1 Karte",
  );
  assert.equal(
    formatPublicCatalogCardCount("hi", 2, getPublicCatalogUiCopy("hi")),
    "2 कार्ड",
  );
  assert.equal(
    formatPublicCatalogCardCount("ja", 2, getPublicCatalogUiCopy("ja")),
    "2枚のカード",
  );
  assert.equal(
    formatPublicCatalogCardCount("zh", 2, getPublicCatalogUiCopy("zh")),
    "2张卡片",
  );

  const arabicCopy = getPublicCatalogUiCopy("ar");

  assert.equal(formatPublicCatalogCardCount("ar", 0, arabicCopy), "٠ بطاقات");
  assert.equal(formatPublicCatalogCardCount("ar", 1, arabicCopy), "بطاقة واحدة");
  assert.equal(formatPublicCatalogCardCount("ar", 2, arabicCopy), "بطاقتان");
  assert.equal(formatPublicCatalogCardCount("ar", 3, arabicCopy), "٣ بطاقات");
  assert.equal(formatPublicCatalogCardCount("ar", 11, arabicCopy), "١١ بطاقة");
  assert.equal(formatPublicCatalogCardCount("ar", 100, arabicCopy), "١٠٠ بطاقة");

  const russianCopy = getPublicCatalogUiCopy("ru");

  assert.equal(formatPublicCatalogCardCount("ru", 1, russianCopy), "1 карточка");
  assert.equal(formatPublicCatalogCardCount("ru", 2, russianCopy), "2 карточки");
  assert.equal(formatPublicCatalogCardCount("ru", 5, russianCopy), "5 карточек");
  assert.equal(formatPublicCatalogCardCount("ru", 21, russianCopy), "21 карточка");
});

test("formats localized package counts", () => {
  assert.equal(
    formatPublicCatalogPackageCount("en", 1, getPublicCatalogDestinationCopy("en")),
    "1 package",
  );
  assert.equal(
    formatPublicCatalogPackageCount("es", 2, getPublicCatalogDestinationCopy("es")),
    "2 paquetes",
  );
  assert.equal(
    formatPublicCatalogPackageCount("ar", 2, getPublicCatalogDestinationCopy("ar")),
    "حزمتان",
  );
  assert.equal(
    formatPublicCatalogPackageCount("ru", 5, getPublicCatalogDestinationCopy("ru")),
    "5 пакетов",
  );
});

test("truncates author bio excerpts without splitting grapheme clusters", () => {
  const familyEmoji = "👨‍👩‍👧‍👦";
  const bio = `${"a".repeat(178)}${familyEmoji}bc`;

  assert.equal(
    getPublicCatalogAuthorBioExcerpt(bio, "en"),
    `${"a".repeat(178)}${familyEmoji}…`,
  );
  assert.equal(getPublicCatalogAuthorBioExcerpt(null, "en"), null);
  assert.equal(getPublicCatalogAuthorBioExcerpt("", "en"), null);
});

test("uses the shared locale mapping for Arabic catalog numbers and dates", () => {
  assert.equal(formatPublicCatalogNumber("ar", 12), "١٢");
  assert.equal(
    formatPublicCatalogDate("ar", "2026-08-02T11:00:00.000Z"),
    "٢ أغسطس ٢٠٢٦",
  );
});

test("announces a missing catalog cover placeholder once", () => {
  assert.equal(
    getPublicCatalogCoverAccessibleLabel(
      "Package title",
      null,
      "Cover preview unavailable",
    ),
    "Package title: Cover preview unavailable",
  );
  assert.equal(
    getPublicCatalogCoverAccessibleLabel(
      "Package title",
      "Cover alt text",
      "Cover preview unavailable",
    ),
    "Package title: Cover alt text. Cover preview unavailable",
  );
});

test("formats catalog cover initials without environment-specific locale casing", () => {
  assert.equal(getPublicCatalogCoverInitial("istanbul"), "I");
  assert.equal(getPublicCatalogCoverInitial("  ßeta"), "SS");
  assert.throws(
    () => getPublicCatalogCoverInitial("   "),
    /Public catalog package title must not be empty/,
  );
});
