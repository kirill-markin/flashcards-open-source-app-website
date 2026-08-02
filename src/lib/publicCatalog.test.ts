import assert from "node:assert/strict";
import test from "node:test";
import { parsePublicCatalogBuildConfiguration } from "./publicCatalogBuild";
import { parsePublicCatalogDump } from "./publicCatalogParser";
import {
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
