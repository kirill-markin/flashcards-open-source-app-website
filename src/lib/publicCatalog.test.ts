import assert from "node:assert/strict";
import test from "node:test";
import { remark } from "remark";
import gfm from "remark-gfm";
import type { GlobalActivitySnapshot } from "./globalActivitySnapshot";
import { parsePublicCatalogBuildConfiguration } from "./publicCatalogBuild";
import { createPublicCatalogBrowseData } from "./publicCatalogBrowse";
import {
  getCanonicalPagePathname,
  getMarkdownAssetPathname,
  getPagePathnameFromMarkdownPathname,
} from "./markdownAssetPaths";
import {
  parseMarkdownAssetManifest,
  serializeMarkdownAssetManifest,
} from "./markdownAssetManifest";
import { renderMarkdownDocument } from "./markdownServe";
import { renderMarkdownToHtml } from "./content/renderMarkdownToHtml";
import { getPublicCatalogAuthorBioExcerpt } from "./publicCatalogAuthor";
import {
  getPublicCatalogUiCopy,
  interpolatePublicCatalogCardHeading,
} from "./publicCatalogCopy";
import { getPublicCatalogDestinationCopy } from "./publicCatalogDestinationCopy";
import {
  listPublicCatalogMarkdownPagePaths,
  renderPublicCatalogLlmsSection,
  renderPublicCatalogMarkdownDocument,
} from "./publicCatalogMarkdown";
import {
  getPublicCatalogCoverImage,
  getPublicCatalogCoverInitial,
  getPublicCatalogCoverPlaceholderAccessibleLabel,
  getPublicCatalogCoverRenderData,
} from "./publicCatalogCover";
import {
  formatPublicCatalogCardCount,
  formatPublicCatalogDate,
  formatPublicCatalogNumber,
  formatPublicCatalogPackageCount,
} from "./publicCatalogFormatting";
import {
  renderPublicCatalogCardMarkdownToHtml,
  renderPublicCatalogDescriptionMarkdownToHtml,
} from "./publicCatalogMarkdownHtml";
import {
  projectPublicCatalogCardMarkdownToPlainText,
} from "./publicCatalogMarkdownFragment";
import { parsePublicCatalogDump } from "./publicCatalogParser";
import {
  createCachedPublicCatalogReader,
  createPublicCatalogReadModel,
  getPublicCatalogAuthorBySlug,
  getPublicCatalogCollectionBySlug,
  getPublicCatalogCollectionCoverMediaAsset,
  getPublicCatalogCollectionsByPackageSlug,
  getPublicCatalogPackageBySlug,
  getPublicCatalogPackageCardTags,
  getPublicCatalogPackagesByAuthorSlug,
  getPublicCatalogPackagesByCollectionSlug,
  getPublicCatalogPackagesByLanguageTag,
} from "./publicCatalogReadModel";
import type { PublicCatalogDump } from "./publicCatalogTypes";
import {
  getPublicCatalogAuthorRoutePathname,
  getPublicCatalogCollectionRoutePathname,
  getPublicCatalogLanguageRoutePathname,
  getPublicCatalogPackageRoutePathname,
  getPublicCatalogRootUrl,
  PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME,
  PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME,
  isPublicCatalogPageRoutePathname,
  resolvePublicCatalogRouteSegment,
} from "./publicCatalogUrls";
import {
  assertUniquePublicCatalogFacetAliases,
  getMarkdownAssetDigest,
  getPublicCatalogFacetAlias,
  getPublicCatalogFacetInternalPathname,
  resolvePublicCatalogFacetAlias,
} from "./publicCatalogStaticAssets";
import { createPublicCatalogSitemapEntries } from "./publicCatalogSitemap";
import { getLocaleSwitcherEntries } from "./routeTranslations";
import {
  createPublicCatalogCollectionMetadata,
  createPublicCatalogPackageMetadata,
  createPublicCatalogRootMetadata,
} from "./seo/createPublicCatalogMetadata";
import {
  createPublicCatalogAuthorJsonLd,
  createPublicCatalogCollectionJsonLd,
  createPublicCatalogFacetJsonLd,
  createPublicCatalogPackageJsonLd,
  createPublicCatalogRootJsonLd,
} from "./seo/publicCatalogStructuredData";
import { serializeStructuredData } from "./seo/structuredData";
import { OPEN_GRAPH_IMAGE_URL, TWITTER_IMAGE_URL } from "./site";

type Mutable<T> = T extends ReadonlyArray<infer Item>
  ? Array<Mutable<Item>>
  : T extends object
    ? { -readonly [Key in keyof T]: Mutable<T[Key]> }
    : T;

type PublicCatalogDumpFixture = Mutable<PublicCatalogDump>;

interface MarkdownAstNode {
  readonly checked?: boolean | null;
  readonly children?: ReadonlyArray<MarkdownAstNode>;
  readonly depth?: number;
  readonly ordered?: boolean;
  readonly type: string;
  readonly url?: string;
  readonly value?: string;
}

const emptyActivitySnapshot: GlobalActivitySnapshot = {
  schemaVersion: 2,
  generatedAtUtc: "2026-08-02T12:00:00.000Z",
  asOfUtc: "2026-08-02T12:00:00.000Z",
  from: "2026-08-02",
  to: "2026-08-02",
  totals: {
    uniqueReviewingUsers: 0,
    reviewEvents: {
      total: 0,
      byPlatform: { web: 0, android: 0, ios: 0 },
    },
  },
  days: [],
};

const asciiControlCodePoints: ReadonlyArray<number> = [
  ...Array.from({ length: 32 }, (_unused, index): number => index),
  0x7F,
];
const percentEncodedAsciiControls: ReadonlyArray<string> = asciiControlCodePoints.flatMap(
  (codePoint) => {
    const hexadecimal = codePoint.toString(16).padStart(2, "0");
    const lowercase = `%${hexadecimal}`;
    const uppercase = `%${hexadecimal.toUpperCase()}`;

    return lowercase === uppercase ? [lowercase] : [lowercase, uppercase];
  },
);

const fixtureAuthorId = "00000000-0000-4000-a001-000000000001";
const fixturePackageId = "00000000-0000-4000-a002-000000000001";
const fixtureSecondPackageId = "00000000-0000-4000-a002-000000000002";
const fixtureOldVersionId = "00000000-0000-4000-a003-000000000001";
const fixtureLatestVersionId = "00000000-0000-4000-a003-000000000002";
const fixtureSecondVersionId = "00000000-0000-4000-a003-000000000003";
const fixtureOldCardId = "00000000-0000-4000-a004-000000000001";
const fixtureFirstCardId = "00000000-0000-4000-a004-000000000002";
const fixtureSecondCardId = "00000000-0000-4000-a004-000000000003";
const fixtureOldMediaId = "00000000-0000-4000-a005-000000000001";
const fixtureCoverMediaId = "00000000-0000-4000-a005-000000000002";
const fixtureInlineMediaId = "00000000-0000-4000-a005-000000000003";
const fixtureCollectionId = "00000000-0000-4000-a006-000000000001";
const missingVersionId = "00000000-0000-4000-a003-000000000099";
const missingMediaId = "00000000-0000-4000-a005-000000000099";
const missingPackageId = "00000000-0000-4000-a002-000000000099";
const orphanAuthorId = "00000000-0000-4000-a001-000000000099";
const orphanCollectionId = "00000000-0000-4000-a006-000000000099";

function parseMarkdownAst(markdown: string): MarkdownAstNode {
  return remark().parse(markdown) as MarkdownAstNode;
}

function listMarkdownAstNodes(node: MarkdownAstNode): ReadonlyArray<MarkdownAstNode> {
  return [node, ...(node.children ?? []).flatMap(listMarkdownAstNodes)];
}

function createValidDump(): PublicCatalogDumpFixture {
  return {
    schemaVersion: 1,
    generatedAt: "2026-08-02T12:00:00.000Z",
    authors: [
      {
        authorId: fixtureAuthorId,
        slug: "author-one",
        displayName: "Author One",
        bio: "Author bio",
        websiteUrl: "https://example.com/author-one",
      },
    ],
    packages: [
      {
        packageId: fixturePackageId,
        authorId: fixtureAuthorId,
        slug: "canonical-package",
        status: "published",
        latestPackageVersionId: fixtureLatestVersionId,
        versionCount: 2,
        publishedAt: "2026-08-02T10:00:00.000Z",
      },
    ],
    packageVersions: [
      {
        packageVersionId: fixtureOldVersionId,
        packageId: fixturePackageId,
        versionNumber: 1,
        status: "published",
        slug: "canonical-package",
        title: "Old version title",
        summary: "Old version summary",
        description: "Old version description",
        languageTags: ["old-language"],
        license: "Old license",
        contentWarning: "Old warning",
        coverMediaAssetId: fixtureOldMediaId,
        cardCount: 1,
        updatedAt: "2026-08-01T11:00:00.000Z",
        publishedAt: "2026-08-01T10:00:00.000Z",
        installUrl: `https://app.flashcards-open-source-app.com/catalog/import/${fixtureOldVersionId}`,
      },
      {
        packageVersionId: fixtureLatestVersionId,
        packageId: fixturePackageId,
        versionNumber: 2,
        status: "published",
        slug: "canonical-package",
        title: "Canonical package title",
        summary: "Canonical package summary",
        description: "Canonical **package** description",
        languageTags: ["en", "es"],
        license: "CC0-1.0",
        contentWarning: null,
        coverMediaAssetId: fixtureCoverMediaId,
        cardCount: 2,
        updatedAt: "2026-08-02T11:00:00.000Z",
        publishedAt: "2026-08-02T10:00:00.000Z",
        installUrl: `https://app.flashcards-open-source-app.com/catalog/import/${fixtureLatestVersionId}`,
      },
    ],
    cards: [
      {
        packageCardId: fixtureOldCardId,
        packageVersionId: fixtureOldVersionId,
        ordinal: 1,
        frontText: "Old front ![old](fcasset:old.webp)",
        backText: "Old back",
        cardType: "basic",
        tags: [],
        mediaAssetIds: [],
      },
      {
        packageCardId: fixtureSecondCardId,
        packageVersionId: fixtureLatestVersionId,
        ordinal: 2,
        frontText: "Second front",
        backText: "Second back",
        cardType: "basic",
        tags: ["second"],
        mediaAssetIds: [],
      },
      {
        packageCardId: fixtureFirstCardId,
        packageVersionId: fixtureLatestVersionId,
        ordinal: 1,
        frontText: "First **front** ![inline](fcasset:inline.webp)",
        backText: "First [back](https://example.com)",
        cardType: "basic",
        tags: ["first"],
        mediaAssetIds: [fixtureInlineMediaId],
      },
    ],
    mediaAssets: [
      {
        packageMediaAssetId: fixtureOldMediaId,
        packageVersionId: fixtureOldVersionId,
        packageMediaKey: "old.webp",
        altText: "Old image",
        credit: null,
        license: "CC0-1.0",
        mimeType: "image/webp",
        sizeBytes: 100,
        downloadUrl: `https://api.flashcards-open-source-app.com/v1/catalog/package-versions/${fixtureOldVersionId}/media-assets/old.webp/download`,
      },
      {
        packageMediaAssetId: fixtureCoverMediaId,
        packageVersionId: fixtureLatestVersionId,
        packageMediaKey: "cover.webp",
        altText: "Cover image",
        credit: null,
        license: "CC0-1.0",
        mimeType: "image/webp",
        sizeBytes: 200,
        downloadUrl: `https://api.flashcards-open-source-app.com/v1/catalog/package-versions/${fixtureLatestVersionId}/media-assets/cover.webp/download`,
      },
      {
        packageMediaAssetId: fixtureInlineMediaId,
        packageVersionId: fixtureLatestVersionId,
        packageMediaKey: "inline.webp",
        altText: "Inline image",
        credit: "Example credit",
        license: "CC-BY-4.0",
        mimeType: "image/webp",
        sizeBytes: 300,
        downloadUrl: `https://api.flashcards-open-source-app.com/v1/catalog/package-versions/${fixtureLatestVersionId}/media-assets/inline.webp/download`,
      },
    ],
    collections: [
      {
        collectionId: fixtureCollectionId,
        slug: "starter-collection",
        title: "Starter collection",
        summary: "Collection summary",
        description: "Collection **description**",
        languageTags: ["en"],
        coverPackageId: fixturePackageId,
        status: "published",
        updatedAt: "2026-08-02T11:30:00.000Z",
        publishedAt: "2026-08-02T11:00:00.000Z",
      },
    ],
    collectionPackages: [
      {
        collectionId: fixtureCollectionId,
        packageId: fixturePackageId,
        ordinal: 1,
      },
    ],
  };
}

test("accepts schema v1 and v2 while ignoring obsolete v1 topic fields", () => {
  const v1Input = createValidDump();
  const v1Dump = parsePublicCatalogDump({
    ...v1Input,
    packageVersions: v1Input.packageVersions.map((version) => ({
      ...version,
      topicTags: "obsolete-topic",
    })),
    collections: v1Input.collections.map((collection) => ({
      ...collection,
      topicTags: "obsolete-topic",
    })),
  });
  const v2Dump = parsePublicCatalogDump({
    ...createValidDump(),
    schemaVersion: 2,
  });
  const v1Version = v1Dump.packageVersions[0];
  const v1Collection = v1Dump.collections[0];

  assert.ok(v1Version);
  assert.ok(v1Collection);
  assert.equal(v1Dump.schemaVersion, 1);
  assert.equal(v2Dump.schemaVersion, 2);
  assert.equal("topicTags" in v1Version, false);
  assert.equal("topicTags" in v1Collection, false);
  assert.equal(
    JSON.stringify(createPublicCatalogReadModel(v1Dump)).includes("obsolete-topic"),
    false,
  );
  assert.throws(
    () => parsePublicCatalogDump({ ...createValidDump(), schemaVersion: 3 }),
    /schemaVersion must be one of 1, 2, received 3/,
  );
});

test("parses the schema and builds latest-version-only lookup data", () => {
  const dump = parsePublicCatalogDump(createValidDump());
  const model = createPublicCatalogReadModel(dump);
  const packageView = getPublicCatalogPackageBySlug(model, "canonical-package");

  assert.ok(packageView);
  assert.equal(packageView.latestVersion.title, "Canonical package title");
  assert.equal(packageView.latestVersion.packageVersionId, fixtureLatestVersionId);
  assert.deepEqual(
    packageView.cards.map((card) => card.packageCardId),
    [fixtureFirstCardId, fixtureSecondCardId],
  );
  assert.deepEqual(
    packageView.mediaAssets.map((mediaAsset) => mediaAsset.packageMediaAssetId),
    [fixtureCoverMediaId, fixtureInlineMediaId],
  );
  assert.equal(packageView.coverMediaAsset?.packageMediaAssetId, fixtureCoverMediaId);
  assert.deepEqual(
    createPublicCatalogBrowseData(model, "en").packages[0].packageView.coverMediaAsset,
    {
      altText: "Cover image",
      downloadUrl:
        `https://api.flashcards-open-source-app.com/v1/catalog/package-versions/${fixtureLatestVersionId}/media-assets/cover.webp/download`,
      mimeType: "image/webp",
    },
  );
  assert.deepEqual(
    getPublicCatalogCollectionCoverMediaAsset(model, dump.collections[0]),
    {
      altText: "Cover image",
      downloadUrl:
        `https://api.flashcards-open-source-app.com/v1/catalog/package-versions/${fixtureLatestVersionId}/media-assets/cover.webp/download`,
      mimeType: "image/webp",
    },
  );
  assert.equal(packageView.latestVersion.description, "Canonical **package** description");
  assert.equal(getPublicCatalogAuthorBySlug(model, "author-one")?.authorId, fixtureAuthorId);
  assert.equal(
    getPublicCatalogCollectionBySlug(model, "starter-collection")?.collectionId,
    fixtureCollectionId,
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
  assert.deepEqual(model.languageTags, ["en", "es"]);
  assert.deepEqual(
    createPublicCatalogBrowseData(model, "de").languages,
    ["de", "en", "es"],
  );
});

test("overrides only the U.S. citizenship package title in the website read model", () => {
  const citizenshipInput = createValidDump();
  citizenshipInput.packages[0].slug = "us-citizenship-test";
  citizenshipInput.packageVersions[1].title = "Catalog citizenship title";
  const citizenshipDump = parsePublicCatalogDump(citizenshipInput);
  const citizenshipPackage = getPublicCatalogPackageBySlug(
    createPublicCatalogReadModel(citizenshipDump),
    "us-citizenship-test",
  );

  assert.ok(citizenshipPackage);
  assert.deepEqual(citizenshipPackage.latestVersion, {
    ...citizenshipDump.packageVersions[1],
    title: "U.S. Citizenship Test Flashcards (2025-2026): All 128 Official Questions",
  });
  assert.equal(citizenshipDump.packageVersions[1].title, "Catalog citizenship title");

  const otherDump = parsePublicCatalogDump(createValidDump());
  const otherPackage = getPublicCatalogPackageBySlug(
    createPublicCatalogReadModel(otherDump),
    "canonical-package",
  );

  assert.ok(otherPackage);
  assert.strictEqual(otherPackage.latestVersion, otherDump.packageVersions[1]);
  assert.equal(otherPackage.latestVersion.title, "Canonical package title");
});

test("collects distinct card tags in ordered first-appearance order", () => {
  const input = createValidDump();
  input.cards[1].tags = ["shared", "second"];
  input.cards[2].tags = ["first", "shared"];
  const packageView = getPublicCatalogPackageBySlug(
    createPublicCatalogReadModel(parsePublicCatalogDump(input)),
    "canonical-package",
  );

  assert.ok(packageView);
  assert.deepEqual(
    getPublicCatalogPackageCardTags(packageView),
    ["first", "shared", "second"],
  );

  const emptyInput = createValidDump();
  emptyInput.cards[1].tags = [];
  emptyInput.cards[2].tags = [];
  const emptyPackageView = getPublicCatalogPackageBySlug(
    createPublicCatalogReadModel(parsePublicCatalogDump(emptyInput)),
    "canonical-package",
  );

  assert.ok(emptyPackageView);
  assert.deepEqual(getPublicCatalogPackageCardTags(emptyPackageView), []);
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
    [fixtureLatestVersionId],
  );
});

test("never renders or indexes an older emitted package version", () => {
  const model = createPublicCatalogReadModel(parsePublicCatalogDump(createValidDump()));
  const packageView = getPublicCatalogPackageBySlug(model, "canonical-package");

  assert.ok(packageView);
  assert.deepEqual(model.languageTags, ["en", "es"]);
  assert.deepEqual(
    packageView.cards.map((card) => card.packageCardId),
    [fixtureFirstCardId, fixtureSecondCardId],
  );
  assert.deepEqual(
    packageView.mediaAssets.map((mediaAsset) => mediaAsset.packageMediaAssetId),
    [fixtureCoverMediaId, fixtureInlineMediaId],
  );

  const browseRecord = JSON.stringify(createPublicCatalogBrowseData(model, "en"));
  const markdown = renderPublicCatalogMarkdownDocument(
    "catalog/packages/canonical-package",
    model,
  )?.markdown;
  const structuredData = JSON.stringify(
    createPublicCatalogPackageJsonLd([], "en", packageView),
  );

  assert.ok(markdown);
  assert.match(
    markdown,
    new RegExp(`https://app\\.flashcards-open-source-app\\.com/catalog/import/${fixtureLatestVersionId}`),
  );
  assert.match(
    markdown,
    new RegExp(
      `https://api\\.flashcards-open-source-app\\.com/v1/catalog/package-versions/${fixtureLatestVersionId}/media-assets/inline\\.webp/download`,
    ),
  );
  [browseRecord, markdown, structuredData].forEach((renderedOutput) => {
    assert.equal(renderedOutput.includes("Old version title"), false);
    assert.equal(renderedOutput.includes("Old version summary"), false);
    assert.equal(renderedOutput.includes("old-language"), false);
    assert.equal(renderedOutput.includes(`/catalog/import/${fixtureOldVersionId}`), false);
    assert.equal(
      renderedOutput.includes(`/package-versions/${fixtureOldVersionId}/media-assets/old.webp`),
      false,
    );
  });
});

test("keeps collection packages in membership ordinal order", () => {
  const input = createValidDump();
  input.packages.push({
    packageId: fixtureSecondPackageId,
    authorId: fixtureAuthorId,
    slug: "second-package",
    status: "published",
    latestPackageVersionId: fixtureSecondVersionId,
    versionCount: 1,
    publishedAt: "2026-08-02T11:30:00.000Z",
  });
  input.packageVersions.push({
    packageVersionId: fixtureSecondVersionId,
    packageId: fixtureSecondPackageId,
    versionNumber: 1,
    status: "published",
    slug: "second-package",
    title: "Second package",
    summary: "Second summary",
    description: "Second description",
    languageTags: ["fr"],
    license: "CC0-1.0",
    contentWarning: null,
    coverMediaAssetId: null,
    cardCount: 0,
    updatedAt: "2026-08-02T11:30:00.000Z",
    publishedAt: "2026-08-02T11:30:00.000Z",
    installUrl: `https://app.flashcards-open-source-app.com/catalog/import/${fixtureSecondVersionId}`,
  });
  input.collectionPackages[0].ordinal = 2;
  input.collectionPackages.push({
    collectionId: fixtureCollectionId,
    packageId: fixtureSecondPackageId,
    ordinal: 1,
  });

  const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));

  assert.deepEqual(
    getPublicCatalogPackagesByCollectionSlug(model, "starter-collection")?.map(
      (packageView) => packageView.packageMetadata.slug,
    ),
    ["second-package", "canonical-package"],
  );
});

test("accepts a public collection cover that is not a collection member", () => {
  const input = createValidDump();
  input.packages.push({
    packageId: fixtureSecondPackageId,
    authorId: fixtureAuthorId,
    slug: "second-package",
    status: "published",
    latestPackageVersionId: fixtureSecondVersionId,
    versionCount: 1,
    publishedAt: "2026-08-02T11:30:00.000Z",
  });
  input.packageVersions.push({
    packageVersionId: fixtureSecondVersionId,
    packageId: fixtureSecondPackageId,
    versionNumber: 1,
    status: "published",
    slug: "second-package",
    title: "Second package",
    summary: "Second summary",
    description: "Second description",
    languageTags: ["fr"],
    license: "CC0-1.0",
    contentWarning: null,
    coverMediaAssetId: null,
    cardCount: 0,
    updatedAt: "2026-08-02T11:30:00.000Z",
    publishedAt: "2026-08-02T11:30:00.000Z",
    installUrl: `https://app.flashcards-open-source-app.com/catalog/import/${fixtureSecondVersionId}`,
  });
  input.collections[0].coverPackageId = fixtureSecondPackageId;

  assert.doesNotThrow(() => parsePublicCatalogDump(input));
});

test("creates escaped catalog JSON-LD from canonical read-model entities", () => {
  const input = createValidDump();
  input.authors[0].displayName = "Author < One";
  input.packageVersions[1].languageTags = ["en", "world history"];
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
  const packageResource = packageSchema["@graph"][0];
  const quiz = packageSchema["@graph"][1];

  assert.ok(quiz);
  assert.deepEqual(packageResource["@type"], ["LearningResource", "Collection"]);
  assert.equal(
    packageResource.url,
    "https://flashcards-open-source-app.com/es/catalog/packages/canonical-package/",
  );
  assert.equal(packageResource.collectionSize, 2);
  assert.equal(packageResource.dateModified, packageView.latestVersion.updatedAt);
  assert.deepEqual(packageResource.inLanguage, ["en", "world history"]);
  assert.equal("keywords" in packageResource, false);
  assert.deepEqual(packageResource.license, {
    "@type": "CreativeWork",
    name: "CC0-1.0",
  });
  assert.deepEqual(packageResource.author, {
    "@id":
      "https://flashcards-open-source-app.com/es/catalog/authors/author-one/#author",
    name: "Author < One",
    url: "https://flashcards-open-source-app.com/es/catalog/authors/author-one/",
  });
  assert.deepEqual(packageResource.isPartOf, [{
    "@type": "CollectionPage",
    name: "Starter collection",
    url:
      "https://flashcards-open-source-app.com/es/catalog/collections/starter-collection/",
  }]);
  assert.deepEqual(packageResource.hasPart, { "@id": quiz["@id"] });
  assert.equal("@type" in packageResource.author, false);
  assert.equal("image" in packageResource, false);
  assert.equal("aggregateRating" in packageResource, false);
  assert.equal("offers" in packageResource, false);
  assert.equal(quiz["@type"], "Quiz");
  assert.deepEqual(
    quiz.about.map((about) => about.name),
    ["Canonical package title"],
  );
  assert.deepEqual(
    quiz.hasPart.map((question) => ({
      acceptedAnswer: question.acceptedAnswer,
      eduQuestionType: question.eduQuestionType,
      text: question.text,
    })),
    [
      {
        acceptedAnswer: {
          "@type": "Answer",
          text: "First back",
        },
        eduQuestionType: "Flashcard",
        text: "First front inline",
      },
      {
        acceptedAnswer: {
          "@type": "Answer",
          text: "Second back",
        },
        eduQuestionType: "Flashcard",
        text: "Second front",
      },
    ],
  );
  quiz.hasPart.forEach((question) => {
    assert.equal(Array.isArray(question.acceptedAnswer), false);
  });

  const rootSchema = createPublicCatalogRootJsonLd(model, "en");
  const rootItemList = rootSchema["@graph"][1];

  assert.equal(rootSchema["@graph"][0]["@type"], "CollectionPage");
  assert.equal("dateModified" in rootSchema["@graph"][0], false);
  assert.equal(rootItemList["@type"], "ItemList");
  assert.equal(rootItemList.numberOfItems, 1);
  assert.equal(
    rootItemList.itemListElement[0]?.item.url,
    "https://flashcards-open-source-app.com/catalog/packages/canonical-package/",
  );
  const emptyLocalizedRootItemList = createPublicCatalogRootJsonLd(
    model,
    "de",
  )["@graph"][1];

  assert.equal(emptyLocalizedRootItemList.numberOfItems, 0);
  assert.deepEqual(emptyLocalizedRootItemList.itemListElement, []);

  const collectionSchema = createPublicCatalogCollectionJsonLd(
    collection,
    "en",
    model.packagesByCollectionId.get(collection.collectionId) ?? [],
  );
  const collectionItemList = collectionSchema["@graph"][1];

  assert.equal(collectionSchema["@graph"][0].dateModified, collection.updatedAt);
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
    "de",
    model.packages,
    "en",
  );

  assert.equal(
    facetSchema["@graph"][0].url,
    "https://flashcards-open-source-app.com/de/catalog/languages/en/",
  );
  assert.equal("dateModified" in facetSchema["@graph"][0], false);

  const serializedSchema = serializeStructuredData(packageSchema);

  assert.equal(serializedSchema.includes("<"), false);
  assert.equal(serializedSchema.includes("\\u003c"), true);
  assert.doesNotThrow(() => JSON.parse(serializedSchema));
});

test("creates deterministic localized catalog sitemap entries from real timestamps", () => {
  const input = createValidDump();
  input.packageVersions[1].languageTags = ["en", "world history"];
  input.collections[0].languageTags = ["world history"];
  input.packageVersions[1].publishedAt = "2026-08-03T09:00:00.000Z";
  input.packageVersions[1].updatedAt = "2026-08-03T09:00:00.000Z";
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
    "https://flashcards-open-source-app.com/ja/catalog/languages/world%20history/";
  const latestVersionUpdatedAt = "2026-08-03T09:00:00.000Z";

  assert.equal(entries.length, 64);
  assert.equal(entryByUrl.get(rootUrl)?.lastModified, latestVersionUpdatedAt);
  assert.equal(entryByUrl.get(packageUrl)?.lastModified, latestVersionUpdatedAt);
  assert.equal(entryByUrl.get(authorUrl)?.lastModified, latestVersionUpdatedAt);
  assert.equal(entryByUrl.get(collectionUrl)?.lastModified, latestVersionUpdatedAt);
  assert.equal(entryByUrl.get(languageFacetUrl)?.lastModified, latestVersionUpdatedAt);
  assert.equal(entryByUrl.get(percentFacetUrl)?.lastModified, latestVersionUpdatedAt);
  assert.equal(
    entryByUrl.get(authorIndexUrl)?.lastModified,
    "2026-08-02T10:00:00.000Z",
  );
  assert.equal(
    entryByUrl.get(collectionIndexUrl)?.lastModified,
    "2026-08-02T11:30:00.000Z",
  );
  assert.ok(entryByUrl.has(percentFacetUrl));
  assert.equal(
    entryByUrl.get(percentFacetUrl)?.alternates?.languages?.es,
    "https://flashcards-open-source-app.com/es/catalog/languages/world%20history/",
  );
  assert.equal(
    entryByUrl.get(percentFacetUrl)?.alternates?.languages?.["x-default"],
    "https://flashcards-open-source-app.com/catalog/languages/world%20history/",
  );
  assert.equal(entries.some((entry) => entry.url.includes("?")), false);
  assert.equal(entries.some((entry) => entry.url.includes("/import/")), false);
  assert.equal(entries.some((entry) => entry.url.includes("media-assets")), false);
  assert.equal(entries.some((entry) => entry.url.includes("download-url")), false);
});

test("includes collection-only languages in static facets without inventing package membership", () => {
  const input = createValidDump();
  input.collections[0].languageTags = ["zz"];

  const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));

  assert.deepEqual(model.languageTags, ["en", "es", "zz"]);
  assert.deepEqual(getPublicCatalogPackagesByLanguageTag(model, "zz"), []);

  const browseData = createPublicCatalogBrowseData(model, "en");

  assert.deepEqual(browseData.languages, ["en", "es"]);
  assert.equal("description" in browseData.packages[0].packageView.packageMetadata, false);
  assert.equal("cards" in browseData.packages[0].packageView, false);
  assert.equal("mediaAssets" in browseData.packages[0].packageView, false);

  const sitemapEntries = createPublicCatalogSitemapEntries(model);
  const collectionOnlyFacet = sitemapEntries.find(
    (entry) => entry.url
      === "https://flashcards-open-source-app.com/catalog/languages/zz/",
  );

  assert.equal(
    collectionOnlyFacet?.lastModified,
    "2026-08-02T11:30:00.000Z",
  );
});

test("excludes orphan authors and collections from browse controls", () => {
  const input = createValidDump();
  input.authors.push({
    authorId: orphanAuthorId,
    slug: "author-orphan",
    displayName: "Orphan Author",
    bio: null,
    websiteUrl: null,
  });

  const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));
  const orphanCollection = {
    ...input.collections[0],
    collectionId: orphanCollectionId,
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
  const browseData = createPublicCatalogBrowseData(modelWithOrphanCollection, "en");

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

test("rejects URL dot segments in package and collection language fields", () => {
  const cases = [
    { entity: "packageVersions", field: "languageTags", value: "." },
    { entity: "packageVersions", field: "languageTags", value: ".." },
    { entity: "collections", field: "languageTags", value: "." },
    { entity: "collections", field: "languageTags", value: ".." },
  ] as const;

  cases.forEach(({ entity, field, value }) => {
    const input = createValidDump();

    input[entity][0][field] = [value];

    assert.throws(
      () => parsePublicCatalogDump(input),
      new RegExp(
        `${entity}\\[0\\]\\.${field}\\[0\\] must not be a URL dot segment\\. received=${value.replaceAll(".", "\\.")}$`,
      ),
    );
  });
});

test("accepts non-segment facet values that contain dots or collision characters", () => {
  const validTags = [
    "a.b",
    "...",
    ".leading",
    "trailing.",
    "日本語",
    "history%20world",
    "safe%2520value",
    "100%",
    "%ZZ",
    "history world",
    "history (100%)",
    "__facet_6869",
  ];
  const input = createValidDump();

  input.packageVersions[1].languageTags = validTags;
  input.collections[0].languageTags = validTags;

  const dump = parsePublicCatalogDump(input);

  assert.deepEqual(dump.packageVersions[1]?.languageTags, validTags);
  assert.deepEqual(dump.collections[0]?.languageTags, validTags);
});

test("rejects raw and recursively encoded controls or backslashes in every facet field", () => {
  const unsafeValues = [
    ...asciiControlCodePoints.map((codePoint) => String.fromCharCode(codePoint)),
    ...percentEncodedAsciiControls,
    "%250A",
    "%25250a",
    "%2509",
    "%25%30%41",
    "raw\\backslash",
    "%5c",
    "%255C",
  ];
  const fields = [
    { entity: "packageVersions", field: "languageTags" },
    { entity: "collections", field: "languageTags" },
  ] as const;

  fields.forEach(({ entity, field }) => {
    unsafeValues.forEach((unsafeValue) => {
      const input = createValidDump();

      input[entity][0][field] = [unsafeValue];

      assert.throws(
        () => parsePublicCatalogDump(input),
        (error: unknown) => {
          assert.ok(error instanceof Error);
          assert.match(error.message, new RegExp(`${entity}\\[0\\]\\.${field}\\[0\\]`));
          assert.match(
            error.message,
            /Control characters, backslashes, and their encoded variants are forbidden/,
          );
          assert.equal(error.message.endsWith(`received=${unsafeValue}`), true);
          return true;
        },
      );
    });
  });
});

test("rejects ill-formed Unicode before creating static facet aliases", () => {
  const packageInput = createValidDump();
  packageInput.packageVersions[1].languageTags = ["broken-\uD800"];

  assert.throws(
    () => parsePublicCatalogDump(packageInput),
    /packageVersions\[1\]\.languageTags\[0\] must be well-formed Unicode/,
  );

  const collectionInput = createValidDump();
  collectionInput.collections[0].languageTags = ["broken-\uDFFF"];

  assert.throws(
    () => parsePublicCatalogDump(collectionInput),
    /collections\[0\]\.languageTags\[0\] must be well-formed Unicode/,
  );
});

test("validates every snapshot identifier as a UUID", () => {
  const invalidPackageId = createValidDump();

  invalidPackageId.packages[0].packageId = "authored package slug";
  assert.throws(
    () => parsePublicCatalogDump(invalidPackageId),
    /packages\[0\]\.packageId must be a UUID.*received=authored package slug/,
  );

  const invalidVersionId = createValidDump();

  invalidVersionId.packageVersions[0].packageVersionId = "v".repeat(129);
  assert.throws(
    () => parsePublicCatalogDump(invalidVersionId),
    /packageVersions\[0\]\.packageVersionId must be a UUID/,
  );

  const uuidInput = createValidDump();
  const packageId = "123e4567-e89b-12d3-a456-426614174000";
  const oldVersionId = "123e4567-e89b-12d3-a456-426614174001";
  const latestVersionId = "123e4567-e89b-12d3-a456-426614174002";

  uuidInput.packages[0].packageId = packageId;
  uuidInput.packages[0].latestPackageVersionId = latestVersionId;
  uuidInput.packageVersions[0].packageId = packageId;
  uuidInput.packageVersions[0].packageVersionId = oldVersionId;
  uuidInput.packageVersions[1].packageId = packageId;
  uuidInput.packageVersions[1].packageVersionId = latestVersionId;
  uuidInput.cards[0].packageVersionId = oldVersionId;
  uuidInput.cards[1].packageVersionId = latestVersionId;
  uuidInput.cards[2].packageVersionId = latestVersionId;
  uuidInput.mediaAssets.forEach((mediaAsset) => {
    mediaAsset.packageVersionId = mediaAsset.packageMediaAssetId === fixtureOldMediaId
      ? oldVersionId
      : latestVersionId;
  });
  uuidInput.collections[0].coverPackageId = packageId;
  uuidInput.collectionPackages[0].packageId = packageId;

  assert.doesNotThrow(() => parsePublicCatalogDump(uuidInput));
});

test("rejects duplicate ordinals within their parent", () => {
  const input = createValidDump();
  input.cards[2].ordinal = input.cards[1].ordinal;

  assert.throws(
    () => parsePublicCatalogDump(input),
    new RegExp(`cards\\.ordinal contains duplicate ordinal 2 for ${fixtureLatestVersionId}`),
  );
});

test("rejects broken latest-version, media, and collection references", () => {
  const missingLatestVersion = createValidDump();
  missingLatestVersion.packages[0].latestPackageVersionId = missingVersionId;
  assert.throws(
    () => parsePublicCatalogDump(missingLatestVersion),
    new RegExp(`references missing latest package version ${missingVersionId}`),
  );

  const missingCardMedia = createValidDump();
  missingCardMedia.cards[2].mediaAssetIds = [missingMediaId];
  assert.throws(
    () => parsePublicCatalogDump(missingCardMedia),
    new RegExp(`references missing media asset ${missingMediaId}`),
  );

  const missingCollectionPackage = createValidDump();
  missingCollectionPackage.collectionPackages[0].packageId = missingPackageId;
  assert.throws(
    () => parsePublicCatalogDump(missingCollectionPackage),
    new RegExp(`references missing package ${missingPackageId}`),
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
    new RegExp(
      `package version ${fixtureOldVersionId} cardCount does not match its cards\\. cardCount=2, cards=1`,
    ),
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
  const ambiguousTags = [
    "history world",
    "history%20world",
    "100%",
    "__facet_invalid",
    "__facet_6869",
    "hi",
    "日本語 (100%)",
  ];

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
    resolvePublicCatalogRouteSegment("__facet_invalid", ambiguousTags),
    "__facet_invalid",
  );
  assert.equal(
    resolvePublicCatalogRouteSegment("__facet_6869", ambiguousTags),
    "__facet_6869",
  );
  ambiguousTags.forEach((tag) => {
    assert.equal(
      resolvePublicCatalogFacetAlias(
        getPublicCatalogFacetAlias("language", tag),
        "language",
        ambiguousTags,
      ),
      tag,
    );
  });
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
    getPublicCatalogLanguageRoutePathname("a.b"),
    "/catalog/languages/a%2Eb/",
  );
  assert.equal(resolvePublicCatalogRouteSegment("a%2Eb", ["a.b"]), "a.b");
  assert.match(
    getPublicCatalogFacetInternalPathname("es", "language", "history world"),
    /^\/catalog-facet-static\/es\/language\/[0-9a-f]{64}\/$/,
  );
  assert.equal(getPublicCatalogRootUrl("en"), "/catalog/?language=en");
  assert.equal(getPublicCatalogRootUrl("es"), "/es/catalog/?language=es");
  assert.equal(
    getLocaleSwitcherEntries("/catalog/").find((entry) => entry.locale === "es")?.href,
    "/es/catalog/?language=es",
  );
  assert.equal(
    getLocaleSwitcherEntries("/features/").find((entry) => entry.locale === "es")?.href,
    "/es/features/",
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
  assert.equal(isPublicCatalogPageRoutePathname("/catalog/topics/world%20history/"), false);
});

test("keeps public alias-looking facet values distinct from internal static params", () => {
  const input = createValidDump();
  const collisionTags = ["__facet_invalid", "__facet_6869", "hi", "日本語 (100%)"];

  input.packageVersions[1].languageTags = collisionTags;
  input.collections[0].languageTags = collisionTags;

  const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));
  const pagePaths = listPublicCatalogMarkdownPagePaths(model);

  collisionTags.forEach((tag) => {
    const publicPagePath = `catalog/languages/${encodeURIComponent(tag)}`;
    const markdown = renderPublicCatalogMarkdownDocument(publicPagePath, model)?.markdown;

    assert.ok(pagePaths.includes(publicPagePath));
    assert.ok(markdown);
    const renderedText = listMarkdownAstNodes(parseMarkdownAst(markdown))
      .filter((node) => node.type === "text")
      .map((node) => node.value ?? "")
      .join(" ");

    assert.ok(renderedText.includes(tag));
  });
});

test("renders useful localized catalog Markdown from the public read model", () => {
  const input = createValidDump();
  const packageUpdatedAt = "2026-08-03T11:00:00.000Z";
  const collectionUpdatedAt = "2026-08-04T11:30:00.000Z";

  input.packageVersions[1].title = "Canonical <package> *title*";
  input.packageVersions[1].updatedAt = packageUpdatedAt;
  input.collections[0].updatedAt = collectionUpdatedAt;
  const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));
  const pagePaths = listPublicCatalogMarkdownPagePaths(model);
  const packageDocument = renderPublicCatalogMarkdownDocument(
    "es/catalog/packages/canonical-package",
    model,
  );
  const rootDocument = renderPublicCatalogMarkdownDocument("catalog", model);
  const localizedRootDocument = renderPublicCatalogMarkdownDocument(
    "ar/catalog",
    model,
  );
  const collectionDocument = renderPublicCatalogMarkdownDocument(
    "catalog/collections/starter-collection",
    model,
  );

  assert.equal(pagePaths.length, 64);
  assert.ok(pagePaths.includes("catalog/packages/canonical-package"));
  assert.ok(pagePaths.includes("zh/catalog/languages/en"));
  assert.equal(pagePaths.some((pagePath) => pagePath.includes("/topics/")), false);
  assert.ok(packageDocument);
  assert.equal(packageDocument.locale, "es");
  assert.equal(
    packageDocument.markdown.startsWith("# Canonical &lt;package&gt; \\*title\\*"),
    true,
  );
  assert.match(packageDocument.markdown, /Versión: 2/);
  assert.match(packageDocument.markdown, /Tarjetas: 2 tarjetas/);
  assert.match(
    packageDocument.markdown,
    new RegExp(
      `Última actualización: ${formatPublicCatalogDate("es", packageUpdatedAt)}`,
    ),
  );
  assert.match(
    packageDocument.markdown,
    new RegExp(`https://app\\.flashcards-open-source-app\\.com/catalog/import/${fixtureLatestVersionId}`),
  );
  assert.match(packageDocument.markdown, /Canonical \*\*package\*\* description/);
  assert.match(packageDocument.markdown, /First \*\*front\*\*/);
  assert.match(
    packageDocument.markdown,
    /https:\/\/flashcards-open-source-app\.com\/es\/catalog\/authors\/author-one\//,
  );
  assert.ok(rootDocument);
  assert.equal(rootDocument.markdown.includes("/catalog/import/"), false);
  assert.equal(
    listMarkdownAstNodes(parseMarkdownAst(rootDocument.markdown)).some(
      (node) => node.type === "blockquote",
    ),
    false,
  );
  assert.ok(localizedRootDocument);
  assert.equal(
    listMarkdownAstNodes(parseMarkdownAst(localizedRootDocument.markdown)).some(
      (node) => node.type === "blockquote",
    ),
    false,
  );
  assert.ok(collectionDocument);
  assert.match(
    collectionDocument.markdown,
    new RegExp(
      `Last updated: ${formatPublicCatalogDate("en", collectionUpdatedAt)}`,
    ),
  );
  assert.match(collectionDocument.markdown, /Collection \*\*description\*\*/);
  assert.match(collectionDocument.markdown, /1\. \[Canonical/);
  assert.equal(
    collectionDocument.markdown.includes("Canonical &lt;package&gt; \\*title\\*"),
    true,
  );
});

test("renders one aggregate package Tags fact and omits empty card tags", () => {
  const input = createValidDump();
  input.cards[1].tags = ["shared", "second"];
  input.cards[2].tags = ["first", "shared"];
  const markdown = renderPublicCatalogMarkdownDocument(
    "catalog/packages/canonical-package",
    createPublicCatalogReadModel(parsePublicCatalogDump(input)),
  )?.markdown;

  assert.ok(markdown);
  assert.deepEqual(
    markdown.split("\n").filter((line) => line.includes("Tags:")),
    ["- Tags: first, shared, second"],
  );

  const emptyInput = createValidDump();
  emptyInput.cards[1].tags = [];
  emptyInput.cards[2].tags = [];
  const emptyMarkdown = renderPublicCatalogMarkdownDocument(
    "catalog/packages/canonical-package",
    createPublicCatalogReadModel(parsePublicCatalogDump(emptyInput)),
  )?.markdown;

  assert.ok(emptyMarkdown);
  assert.equal(emptyMarkdown.includes("Tags:"), false);
});

test("projects normalized card Markdown to complete ordered plain text", () => {
  const sourceContext = "Public catalog package version deck-version-1 card card-1 frontText";
  const plainText = projectPublicCatalogCardMarkdownToPlainText(
    [
      "# Heading **one**",
      "",
      "Paragraph with [link](https://example.com) and ![diagram](fcasset:inline.webp).",
      "",
      "- First item",
      "- Second `item`",
      "",
      "| Term | Meaning |",
      "| --- | --- |",
      "| GFM | Table **value** |",
      "",
      "Use `a  b` exactly.",
      "",
      "```python",
      "if ready:",
      "    print(\"a  b\")",
      "```",
    ].join("\n"),
    "en",
    new Map([["inline.webp", "https://example.com/inline.webp"]]),
    sourceContext,
  );

  assert.equal(
    plainText,
    [
      "Heading one",
      "",
      "Paragraph with link and diagram.",
      "",
      "First item",
      "Second item",
      "",
      "Term | Meaning",
      "GFM | Table value",
      "",
      "Use a  b exactly.",
      "",
      "if ready:",
      "    print(\"a  b\")",
    ].join("\n"),
  );
  assert.throws(
    () => projectPublicCatalogCardMarkdownToPlainText(
      "",
      "en",
      new Map(),
      sourceContext,
    ),
    /deck-version-1 card card-1 frontText must contain non-empty Markdown text/,
  );
});

test("renders safe canonical links for authored URLs and delimiter-looking facet paths", () => {
  const input = createValidDump();
  const languageTag = "history (100%))> <img";

  input.authors[0].websiteUrl = "https://example.com/author path)>?value=&gt;";
  input.packageVersions[1].installUrl =
    "https://app.flashcards-open-source-app.com/catalog/import/version 2)>%25";
  input.packageVersions[1].languageTags = [languageTag];
  input.collections[0].languageTags = [languageTag];

  const dump = parsePublicCatalogDump(input);
  const model = createPublicCatalogReadModel(dump);
  const languagePagePath = `catalog/languages/${encodeURIComponent(languageTag)}`;
  const documents = [
    renderPublicCatalogMarkdownDocument("catalog/authors/author-one", model)?.markdown,
    renderPublicCatalogMarkdownDocument("catalog/packages/canonical-package", model)?.markdown,
    renderMarkdownDocument(languagePagePath, {
      globalActivitySnapshot: emptyActivitySnapshot,
      publicCatalog: model,
    }).markdown,
  ];

  documents.forEach((markdown) => {
    assert.ok(markdown);
    const nodes = listMarkdownAstNodes(parseMarkdownAst(markdown));

    assert.equal(nodes.some((node) => node.type === "html"), false);
  });

  const renderedLinks = documents.flatMap((markdown) =>
    listMarkdownAstNodes(parseMarkdownAst(markdown ?? ""))
      .filter((node) => node.type === "link")
      .map((node) => node.url));
  const websiteUrl = dump.authors[0]?.websiteUrl;
  const installUrl = dump.packageVersions[1]?.installUrl;

  assert.ok(websiteUrl);
  assert.ok(installUrl);
  assert.ok(renderedLinks.includes(websiteUrl));
  assert.ok(renderedLinks.includes(installUrl));
  assert.ok(renderedLinks.includes(
    `https://flashcards-open-source-app.com/${languagePagePath}/`,
  ));
  assert.equal(documents.some((markdown) => markdown?.includes("<img")), false);
});

test("validates and localizes every authored Markdown destination form", async () => {
  const input = createValidDump();

  input.packageVersions[1].description = [
    "[Docs](/docs/getting-started/?view=full#section)",
    "",
    "[Already localized](/es/docs/api/#authentication)",
    "",
    "[Local fragment](#local-section)",
    "",
    "[Encoded fragment](#literal%2520percent)",
    "",
    "[External](HTTPS://Example.COM:443/a/../safe?value=1#part)",
    "",
    "[External percent](https://example.com/100%25/history%2520world)",
    "",
    "![Inline image](/icon.svg?theme=light#asset)",
  ].join("\n");
  input.collections[0].description = [
    "[Catalog reference][catalog-reference]",
    "",
    "![Reference image][reference-image]",
    "",
    "[catalog-reference]: /catalog/languages/history%2520world/?q=100%25#cards",
    "[reference-image]: https://cdn.example.com/path/../image.png",
  ].join("\n");
  input.cards[2].frontText = "[Card docs](/docs/api/)";
  input.cards[2].backText = [
    "[Card reference][card-reference]",
    "",
    "[card-reference]: http://example.com/card",
  ].join("\n");

  const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));
  const packageMarkdown = renderPublicCatalogMarkdownDocument(
    "es/catalog/packages/canonical-package",
    model,
  )?.markdown;
  const collectionMarkdown = renderPublicCatalogMarkdownDocument(
    "es/catalog/collections/starter-collection",
    model,
  )?.markdown;
  const defaultPackageMarkdown = renderPublicCatalogMarkdownDocument(
    "catalog/packages/canonical-package",
    model,
  )?.markdown;

  assert.ok(packageMarkdown);
  assert.ok(collectionMarkdown);
  assert.ok(defaultPackageMarkdown);
  const packageNodes = listMarkdownAstNodes(remark().use(gfm).parse(packageMarkdown) as MarkdownAstNode);
  const collectionNodes = listMarkdownAstNodes(
    remark().use(gfm).parse(collectionMarkdown) as MarkdownAstNode,
  );
  const packageDestinations = packageNodes
    .filter((node) => node.type === "link" || node.type === "image")
    .map((node) => node.url);
  const collectionDestinations = collectionNodes
    .filter((node) => node.type === "link" || node.type === "image")
    .map((node) => node.url);

  assert.ok(packageDestinations.includes("/es/docs/getting-started/?view=full#section"));
  assert.ok(packageDestinations.includes("/es/docs/api/#authentication"));
  assert.ok(packageDestinations.includes("#local-section"));
  assert.ok(packageDestinations.includes("#literal%2520percent"));
  assert.ok(packageDestinations.includes("https://example.com/safe?value=1#part"));
  assert.ok(packageDestinations.includes("https://example.com/100%25/history%2520world"));
  assert.ok(packageDestinations.includes("/icon.svg?theme=light#asset"));
  assert.ok(packageDestinations.includes("/es/docs/api/"));
  assert.ok(packageDestinations.includes("http://example.com/card"));
  assert.ok(collectionDestinations.includes(
    "/es/catalog/languages/history%2520world/?q=100%25#cards",
  ));
  assert.ok(collectionDestinations.includes("https://cdn.example.com/image.png"));
  assert.equal(
    [...packageNodes, ...collectionNodes].some((node) => node.type === "definition"),
    false,
  );
  assert.match(defaultPackageMarkdown, /\/docs\/getting-started\/\?view=full#section/);
  const html = await renderMarkdownToHtml(packageMarkdown, "es");

  assert.match(html, /href="\/es\/docs\/getting-started\/\?view=full#section"/);
  assert.doesNotMatch(`${packageMarkdown}\n${collectionMarkdown}\n${html}`, /javascript:|data:|file:/iu);
});

test("fails generated Markdown for unsafe authored destinations", () => {
  const cases: ReadonlyArray<Readonly<{
    apply: (input: PublicCatalogDumpFixture) => void;
    expectedContext: RegExp;
    pagePath: string;
  }>> = [
    {
      apply: (input) => {
        input.packageVersions[1].description = "[Unsafe](JaVaScRiPt:alert(1))";
      },
      expectedContext: /package [0-9a-f-]+ description/,
      pagePath: "catalog/packages/canonical-package",
    },
    {
      apply: (input) => {
        input.collections[0].description = [
          "[Unsafe][reference]",
          "",
          "[reference]: %6Aavascript:alert(1)",
        ].join("\n");
      },
      expectedContext: /collection [0-9a-f-]+ description/,
      pagePath: "catalog/collections/starter-collection",
    },
    {
      apply: (input) => {
        input.cards[2].frontText = "![Unsafe](data:text/html;base64,PHNjcmlwdD4=)";
      },
      expectedContext: /card [0-9a-f-]+ frontText/,
      pagePath: "catalog/packages/canonical-package",
    },
    {
      apply: (input) => {
        input.cards[2].backText = [
          "![Unsafe][image]",
          "",
          "[image]: //evil.example/image.png",
        ].join("\n");
      },
      expectedContext: /card [0-9a-f-]+ backText/,
      pagePath: "catalog/packages/canonical-package",
    },
    {
      apply: (input) => {
        input.packageVersions[1].description = "[Unsafe](file:///etc/passwd)";
      },
      expectedContext: /package [0-9a-f-]+ description/,
      pagePath: "catalog/packages/canonical-package",
    },
    {
      apply: (input) => {
        input.collections[0].description = "[Unsafe](https://example.com/%0Ahidden)";
      },
      expectedContext: /collection [0-9a-f-]+ description/,
      pagePath: "catalog/collections/starter-collection",
    },
    {
      apply: (input) => {
        input.packageVersions[1].description = "[Unsafe](https://example.com/%250Ahidden)";
      },
      expectedContext: /package [0-9a-f-]+ description/,
      pagePath: "catalog/packages/canonical-package",
    },
    {
      apply: (input) => {
        input.collections[0].description = [
          "[Unsafe][reference]",
          "",
          "[reference]: https://example.com/%25250a",
        ].join("\n");
      },
      expectedContext: /collection [0-9a-f-]+ description/,
      pagePath: "catalog/collections/starter-collection",
    },
    {
      apply: (input) => {
        input.cards[2].frontText = "![Unsafe](https://example.com/%2509image.png)";
      },
      expectedContext: /card [0-9a-f-]+ frontText/,
      pagePath: "catalog/packages/canonical-package",
    },
    {
      apply: (input) => {
        input.cards[2].backText = [
          "![Unsafe][image]",
          "",
          "[image]: https://example.com/%257Fimage.png",
        ].join("\n");
      },
      expectedContext: /card [0-9a-f-]+ backText/,
      pagePath: "catalog/packages/canonical-package",
    },
    {
      apply: (input) => {
        input.cards[2].frontText = "<https://example.com/%25%30%41>";
      },
      expectedContext: /card [0-9a-f-]+ frontText/,
      pagePath: "catalog/packages/canonical-package",
    },
    {
      apply: (input) => {
        input.packageVersions[1].description = "[Unsafe](/docs/%250A/private/)";
      },
      expectedContext: /package [0-9a-f-]+ description/,
      pagePath: "catalog/packages/canonical-package",
    },
    {
      apply: (input) => {
        input.collections[0].description = "[Unsafe](#section%2509)";
      },
      expectedContext: /collection [0-9a-f-]+ description/,
      pagePath: "catalog/collections/starter-collection",
    },
    {
      apply: (input) => {
        input.cards[2].frontText = "[Unsafe](jav\u0000ascript:alert(1))";
      },
      expectedContext: /card [0-9a-f-]+ frontText/,
      pagePath: "catalog/packages/canonical-package",
    },
    {
      apply: (input) => {
        input.packageVersions[1].description = "[Unsafe](/docs/%ZZ)";
      },
      expectedContext: /package [0-9a-f-]+ description/,
      pagePath: "catalog/packages/canonical-package",
    },
    {
      apply: (input) => {
        input.collections[0].description = "[Unsafe](/docs/%2e%2e/private/)";
      },
      expectedContext: /collection [0-9a-f-]+ description/,
      pagePath: "catalog/collections/starter-collection",
    },
  ];

  cases.forEach(({ apply, expectedContext, pagePath }) => {
    const input = createValidDump();

    apply(input);
    const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));

    assert.throws(
      () => renderPublicCatalogMarkdownDocument(pagePath, model),
      (error: unknown) => {
        assert.ok(error instanceof Error);
        assert.match(error.message, expectedContext);
        assert.match(error.message, /unsafe or unsupported Markdown destination/);
        return true;
      },
    );
  });
});

test("rejects every supported authored footnote construct before serialization", () => {
  const cases: ReadonlyArray<Readonly<{
    apply: (input: PublicCatalogDumpFixture) => void;
    expectedContext: RegExp;
    expectedNodeType: "footnoteDefinition" | "footnoteReference";
    pagePath: string;
  }>> = [
    {
      apply: (input) => {
        input.packageVersions[1].description = [
          "Before the footnote.",
          "",
          "[^unsafe]: [Unsafe](javascript:alert(1))",
          "",
          "After the footnote.[^unsafe]",
        ].join("\n");
      },
      expectedContext: /package [0-9a-f-]+ description/,
      expectedNodeType: "footnoteDefinition",
      pagePath: "catalog/packages/canonical-package",
    },
    {
      apply: (input) => {
        input.cards[2].frontText = "Normal neighboring content.[^missing]";
      },
      expectedContext: /card [0-9a-f-]+ frontText/,
      expectedNodeType: "footnoteReference",
      pagePath: "catalog/packages/canonical-package",
    },
    {
      apply: (input) => {
        input.collections[0].description = [
          "[^duplicate]: First definition.",
          "",
          "[^duplicate]: Second definition.",
        ].join("\n");
      },
      expectedContext: /collection [0-9a-f-]+ description/,
      expectedNodeType: "footnoteDefinition",
      pagePath: "catalog/collections/starter-collection",
    },
    {
      apply: (input) => {
        input.cards[2].frontText = "A reference from one card.[^shared]";
        input.cards[2].backText = "[^shared]: A definition in its sibling fragment.";
      },
      expectedContext: /card [0-9a-f-]+ frontText/,
      expectedNodeType: "footnoteReference",
      pagePath: "catalog/packages/canonical-package",
    },
  ];

  cases.forEach(({ apply, expectedContext, expectedNodeType, pagePath }) => {
    const input = createValidDump();

    apply(input);
    const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));

    assert.throws(
      () => renderPublicCatalogMarkdownDocument(pagePath, model),
      (error: unknown) => {
        assert.ok(error instanceof Error);
        assert.match(error.message, expectedContext);
        assert.match(error.message, new RegExp(`unsupported Markdown footnote ${expectedNodeType}`));
        return true;
      },
    );
  });

  const safeInput = createValidDump();

  safeInput.packageVersions[1].description = [
    "Normal neighboring content.",
    "",
    "Escaped footnote-like text: \\[^literal].",
    "",
    "Inline code: `code[^literal]`.",
  ].join("\n");
  const safeModel = createPublicCatalogReadModel(parsePublicCatalogDump(safeInput));

  listPublicCatalogMarkdownPagePaths(safeModel).forEach((pagePath) => {
    const markdown = renderPublicCatalogMarkdownDocument(pagePath, safeModel)?.markdown;

    assert.ok(markdown);
    const nodes = listMarkdownAstNodes(
      remark().use(gfm).parse(markdown) as MarkdownAstNode,
    );

    assert.equal(nodes.some((node) =>
      node.type === "footnoteDefinition" || node.type === "footnoteReference"), false);
  });
});

test("rejects raw and repeatedly encoded backslashes in every Markdown destination form", () => {
  const authoredCases: ReadonlyArray<Readonly<{
    apply: (input: PublicCatalogDumpFixture) => void;
    expectedContext: RegExp;
    pagePath: string;
  }>> = [
    {
      apply: (input) => {
        input.packageVersions[1].description = "[Inline](https:\\\\evil.example\\path)";
      },
      expectedContext: /package [0-9a-f-]+ description/,
      pagePath: "catalog/packages/canonical-package",
    },
    {
      apply: (input) => {
        input.packageVersions[1].description = [
          "[Reference][unsafe]",
          "",
          "[unsafe]: https://example.com/%5Cpath",
        ].join("\n");
      },
      expectedContext: /package [0-9a-f-]+ description/,
      pagePath: "catalog/packages/canonical-package",
    },
    {
      apply: (input) => {
        input.cards[2].frontText = "![Inline image](https://example.com/%5cpath)";
      },
      expectedContext: /card [0-9a-f-]+ frontText/,
      pagePath: "catalog/packages/canonical-package",
    },
    {
      apply: (input) => {
        input.cards[2].backText = [
          "![Reference image][unsafe]",
          "",
          "[unsafe]: https://example.com/%255Cpath",
        ].join("\n");
      },
      expectedContext: /card [0-9a-f-]+ backText/,
      pagePath: "catalog/packages/canonical-package",
    },
    {
      apply: (input) => {
        input.collections[0].description = "<https://example.com/%25255cpath>";
      },
      expectedContext: /collection [0-9a-f-]+ description/,
      pagePath: "catalog/collections/starter-collection",
    },
    {
      apply: (input) => {
        input.collections[0].description = "[Root path](/docs/%255C../private)";
      },
      expectedContext: /collection [0-9a-f-]+ description/,
      pagePath: "catalog/collections/starter-collection",
    },
    {
      apply: (input) => {
        input.packageVersions[1].description = "[Authority confusion](https:%5C%5Cevil.example/path)";
      },
      expectedContext: /package [0-9a-f-]+ description/,
      pagePath: "catalog/packages/canonical-package",
    },
    {
      apply: (input) => {
        input.cards[2].frontText = "[Mixed encodings](https://example.com/%25255C%255cpath)";
      },
      expectedContext: /card [0-9a-f-]+ frontText/,
      pagePath: "catalog/packages/canonical-package",
    },
  ];

  authoredCases.forEach(({ apply, expectedContext, pagePath }) => {
    const input = createValidDump();

    apply(input);
    const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));

    assert.throws(
      () => renderPublicCatalogMarkdownDocument(pagePath, model),
      (error: unknown) => {
        assert.ok(error instanceof Error);
        assert.match(error.message, expectedContext);
        assert.match(
          error.message,
          /Control characters, backslashes, and their encoded variants are forbidden/,
        );
        return true;
      },
    );
  });

  const generatedCases: ReadonlyArray<Readonly<{
    apply: (input: PublicCatalogDumpFixture) => void;
    expectedContext: RegExp;
  }>> = [
    {
      apply: (input) => {
        input.authors[0].websiteUrl = "https:\\\\evil.example\\author";
      },
      expectedContext: /authors\[0\]\.websiteUrl/,
    },
    {
      apply: (input) => {
        input.packageVersions[1].installUrl = "https://example.com/%255cinstall";
      },
      expectedContext: /packageVersions\[1\]\.installUrl/,
    },
  ];

  generatedCases.forEach(({ apply, expectedContext }) => {
    const input = createValidDump();

    apply(input);
    assert.throws(
      () => parsePublicCatalogDump(input),
      (error: unknown) => {
        assert.ok(error instanceof Error);
        assert.match(error.message, expectedContext);
        assert.match(
          error.message,
          /Control characters, backslashes, and their encoded variants are forbidden/,
        );
        return true;
      },
    );
  });
});

test("uses canonical package publication and version modification dates", () => {
  const input = createValidDump();
  const packagePublishedAt = "2026-07-30T09:00:00.000Z";
  const versionPublishedAt = "2026-08-02T10:00:00.000Z";
  const versionUpdatedAt = "2026-08-04T09:00:00.000Z";

  input.packages[0].publishedAt = packagePublishedAt;
  input.packageVersions[1].publishedAt = versionPublishedAt;
  input.packageVersions[1].updatedAt = versionUpdatedAt;

  const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));
  const packageView = getPublicCatalogPackageBySlug(model, "canonical-package");

  assert.ok(packageView);
  const markdown = renderPublicCatalogMarkdownDocument(
    "es/catalog/packages/canonical-package",
    model,
  )?.markdown;
  const jsonLd = createPublicCatalogPackageJsonLd([], "es", packageView);

  assert.ok(markdown);
  assert.match(markdown, new RegExp(formatPublicCatalogDate("es", packagePublishedAt)));
  assert.doesNotMatch(markdown, new RegExp(formatPublicCatalogDate("es", versionPublishedAt)));
  assert.match(markdown, new RegExp(formatPublicCatalogDate("es", versionUpdatedAt)));
  assert.equal(jsonLd["@graph"][0].datePublished, packagePublishedAt);
  assert.equal(jsonLd["@graph"][0].dateModified, versionUpdatedAt);
  assert.match(markdown, /Versión: 2/);
  assert.match(markdown, /Tarjetas: 2 tarjetas/);
});

test("rejects raw encoded repeated and malformed catalog HTTPS destinations", () => {
  const unsafeSuffixes = [
    ...asciiControlCodePoints.map((codePoint) =>
      `${String.fromCharCode(codePoint)}raw`),
    ...percentEncodedAsciiControls,
    "%250A",
    "%25250a",
    "%2509",
    "%25%30%41",
    "%ZZ",
  ];

  unsafeSuffixes.forEach((unsafeSuffix) => {
    const websiteInput = createValidDump();
    const websiteUrl = `https://example.com/${unsafeSuffix}`;

    websiteInput.authors[0].websiteUrl = websiteUrl;
    assert.throws(
      () => parsePublicCatalogDump(websiteInput),
      (error: unknown) => {
        assert.ok(error instanceof Error);
        assert.match(error.message, /authors\[0\]\.websiteUrl/);
        assert.equal(error.message.endsWith(`received=${websiteUrl}`), true);
        return true;
      },
    );

    const installInput = createValidDump();
    const installUrl = `https://example.com/${unsafeSuffix}`;

    installInput.packageVersions[1].installUrl = installUrl;
    assert.throws(
      () => parsePublicCatalogDump(installInput),
      (error: unknown) => {
        assert.ok(error instanceof Error);
        assert.match(error.message, /packageVersions\[1\]\.installUrl/);
        assert.equal(error.message.endsWith(`received=${installUrl}`), true);
        return true;
      },
    );
  });

  const safeInput = createValidDump();

  safeInput.authors[0].websiteUrl = "https://example.com/100%25/history%2520world";
  safeInput.packageVersions[1].installUrl = "https://example.com/literal%25/safe%2520value";
  const safeDump = parsePublicCatalogDump(safeInput);

  assert.equal(
    safeDump.authors[0]?.websiteUrl,
    "https://example.com/100%25/history%2520world",
  );
  assert.equal(
    safeDump.packageVersions[1]?.installUrl,
    "https://example.com/literal%25/safe%2520value",
  );
});

test("renders localized collection membership as one semantic ordered list", () => {
  const input = createValidDump();

  input.packages.push({
    packageId: fixtureSecondPackageId,
    authorId: fixtureAuthorId,
    slug: "second-package",
    status: "published",
    latestPackageVersionId: fixtureSecondVersionId,
    versionCount: 1,
    publishedAt: "2026-08-02T11:30:00.000Z",
  });
  input.packageVersions.push({
    packageVersionId: fixtureSecondVersionId,
    packageId: fixtureSecondPackageId,
    versionNumber: 1,
    status: "published",
    slug: "second-package",
    title: "Second package",
    summary: "Second summary",
    description: "Second description",
    languageTags: ["fr"],
    license: "CC0-1.0",
    contentWarning: null,
    coverMediaAssetId: null,
    cardCount: 0,
    updatedAt: "2026-08-02T11:30:00.000Z",
    publishedAt: "2026-08-02T11:30:00.000Z",
    installUrl: `https://app.flashcards-open-source-app.com/catalog/import/${fixtureSecondVersionId}`,
  });
  input.collectionPackages.push({
    collectionId: fixtureCollectionId,
    packageId: fixtureSecondPackageId,
    ordinal: 2,
  });

  const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));
  const markdown = renderPublicCatalogMarkdownDocument(
    "ar/catalog/collections/starter-collection",
    model,
  )?.markdown;

  assert.ok(markdown);
  const orderedLists = listMarkdownAstNodes(parseMarkdownAst(markdown))
    .filter((node) => node.type === "list" && node.ordered === true);

  assert.equal(orderedLists.length, 1);
  assert.equal(orderedLists[0]?.children?.length, 2);
  orderedLists[0]?.children?.forEach((listItem) => {
    const nestedDetails = listItem.children?.filter(
      (node) => node.type === "list" && node.ordered === false,
    ) ?? [];

    assert.equal(nestedDetails.length, 1);
    assert.ok((nestedDetails[0]?.children?.length ?? 0) >= 6);
  });
  assert.match(markdown, /^1\. /m);
  assert.match(markdown, /^2\. /m);
  assert.doesNotMatch(markdown, /^١\. /m);
});

test("isolates authored Markdown fragments from generated and sibling content", () => {
  const input = createValidDump();

  input.packageVersions[1].description = "Description code\n\n```text\nunclosed";
  input.cards[2].frontText = [
    "[Local reference][shared]",
    "",
    "[shared]: https://example.com/local-reference",
  ].join("\n");
  input.cards[2].backText = [
    "# Authored heading",
    "",
    "- authored list item",
    "",
    "[Must stay literal][other]",
  ].join("\n");
  input.cards[1].frontText = "[other]: https://example.com/leaked-reference";

  const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));
  const markdown = renderPublicCatalogMarkdownDocument(
    "catalog/packages/canonical-package",
    model,
  )?.markdown;

  assert.ok(markdown);
  const nodes = listMarkdownAstNodes(parseMarkdownAst(markdown));
  const links = nodes.filter((node) => node.type === "link").map((node) => node.url);
  const codeBlocks = nodes.filter((node) => node.type === "code");
  const cardHeadings = nodes.filter((node) => node.type === "heading" && node.depth === 3);

  assert.equal(nodes.some((node) => node.type === "html"), false);
  assert.equal(nodes.some((node) => node.type === "definition"), false);
  assert.equal(codeBlocks.length, 1);
  assert.equal(codeBlocks[0]?.value, "unclosed");
  assert.equal(cardHeadings.length, 2);
  assert.deepEqual(
    cardHeadings.map((heading) =>
      heading.children?.map((child) => child.value ?? "").join("")),
    [1, 2].map((cardNumber) =>
      interpolatePublicCatalogCardHeading(
        getPublicCatalogUiCopy("en"),
        formatPublicCatalogNumber("en", cardNumber),
      )),
  );
  assert.ok(nodes.some((node) =>
    node.type === "heading"
    && node.depth === 4
    && node.children?.some((child) => child.value === "Authored heading")));
  assert.ok(links.includes("https://example.com/local-reference"));
  assert.equal(links.includes("https://example.com/leaked-reference"), false);
  assert.ok(nodes.some((node) =>
    node.type === "text" && node.value?.includes("[Must stay literal][other]")));
});

test("renders authored images as inert content in generated catalog Markdown", () => {
  const input = createValidDump();

  input.packageVersions[1].description = [
    "![Package tracker](https://tracker.example/package.gif)",
    "",
    "[**![Linked package tracker](https://tracker.example/linked-package.gif)**](https://example.com/package-link)",
  ].join("\n");
  input.collections[0].description = [
    "![Collection tracker][collection-image]",
    "",
    "[![Linked collection tracker][linked-collection-image]][collection-link]",
    "",
    "[collection-image]: https://tracker.example/collection.gif",
    "[linked-collection-image]: https://tracker.example/linked-collection.gif",
    "[collection-link]: https://example.com/collection-link",
  ].join("\n");
  input.cards[2].frontText = "![](https://tracker.example/card-front.gif)";
  input.cards[2].backText = [
    "[![Linked card tracker][card-image]][card-link]",
    "",
    "[card-image]: https://tracker.example/linked-card.gif",
    "[card-link]: https://example.com/card-link",
  ].join("\n");

  const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));
  const packageMarkdown = renderPublicCatalogMarkdownDocument(
    "catalog/packages/canonical-package",
    model,
  )?.markdown;
  const collectionMarkdown = renderPublicCatalogMarkdownDocument(
    "catalog/collections/starter-collection",
    model,
  )?.markdown;

  assert.ok(packageMarkdown);
  assert.ok(collectionMarkdown);
  const nodes = [packageMarkdown, collectionMarkdown].flatMap((markdown) =>
    listMarkdownAstNodes(parseMarkdownAst(markdown)));
  const linkDestinations = nodes
    .filter((node) => node.type === "link")
    .map((node) => node.url);

  assert.equal(
    nodes.some((node) => node.type === "image" || node.type === "imageReference"),
    false,
  );
  assert.ok(linkDestinations.includes("https://tracker.example/package.gif"));
  assert.ok(linkDestinations.includes("https://example.com/package-link"));
  assert.equal(linkDestinations.includes("https://tracker.example/linked-package.gif"), false);
  assert.ok(linkDestinations.includes("https://tracker.example/collection.gif"));
  assert.ok(linkDestinations.includes("https://example.com/collection-link"));
  assert.equal(linkDestinations.includes("https://tracker.example/linked-collection.gif"), false);
  assert.ok(linkDestinations.includes("https://tracker.example/card-front.gif"));
  assert.ok(linkDestinations.includes("https://example.com/card-link"));
  assert.equal(linkDestinations.includes("https://tracker.example/linked-card.gif"), false);
  assert.ok(nodes.some((node) =>
    node.type === "text" && node.value === "Linked package tracker"));
  assert.ok(nodes.some((node) =>
    node.type === "text" && node.value === "Linked collection tracker"));
  assert.ok(nodes.some((node) =>
    node.type === "text" && node.value === "Linked card tracker"));
  assert.ok(nodes.some((node) =>
    node.type === "text" && node.value === "https://tracker.example/card-front.gif"));
});

test("renders catalog Markdown with safe images and nested heading depths", async () => {
  const packageDescriptionHtml = await renderPublicCatalogDescriptionMarkdownToHtml(
    [
      "# Package heading",
      "",
      "![Package tracker](https://tracker.example/package.gif)",
      "",
      "[Ordinary link](https://example.com/package)",
    ].join("\n"),
    "en",
    "Public catalog package package-1 description",
  );
  const collectionDescriptionHtml = await renderPublicCatalogDescriptionMarkdownToHtml(
    [
      "## Collection heading",
      "",
      "![Collection tracker](https://tracker.example/collection.gif)",
    ].join("\n"),
    "en",
    "Public catalog collection collection-1 description",
  );
  const cardHtml = await renderPublicCatalogCardMarkdownToHtml(
    [
      "# Card heading",
      "",
      "![Card tracker](https://tracker.example/card.gif)",
    ].join("\n"),
    "en",
    new Map(),
    "Public catalog card card-1 frontText",
  );
  const combinedHtml = `${packageDescriptionHtml}\n${collectionDescriptionHtml}\n${cardHtml}`;

  assert.doesNotMatch(combinedHtml, /<img\b/iu);
  assert.match(packageDescriptionHtml, /<h3>Package heading<\/h3>/u);
  assert.match(collectionDescriptionHtml, /<h3>Collection heading<\/h3>/u);
  assert.match(cardHtml, /<h4>Card heading<\/h4>/u);
  assert.doesNotMatch(combinedHtml, /<h[12]>/u);
  assert.match(
    packageDescriptionHtml,
    /href="https:\/\/tracker\.example\/package\.gif"[^>]*>Package tracker<\/a>/u,
  );
  assert.match(
    collectionDescriptionHtml,
    /href="https:\/\/tracker\.example\/collection\.gif"[^>]*>Collection tracker<\/a>/u,
  );
  assert.match(
    cardHtml,
    /href="https:\/\/tracker\.example\/card\.gif"[^>]*>Card tracker<\/a>/u,
  );
  assert.match(
    packageDescriptionHtml,
    /href="https:\/\/example\.com\/package"[^>]*>Ordinary link<\/a>/u,
  );
});

test("resolves only card-authorized managed media to public download URLs", async () => {
  const downloadUrl =
    `https://api.flashcards-open-source-app.com/v1/catalog/package-versions/${fixtureLatestVersionId}/media-assets/inline.webp/download`;
  const html = await renderPublicCatalogCardMarkdownToHtml(
    "![Managed media](fcasset:inline.webp)",
    "en",
    new Map([["inline.webp", downloadUrl]]),
    `Public catalog card ${fixtureFirstCardId} frontText`,
  );

  assert.match(html, new RegExp(`href="${downloadUrl}"[^>]*>Managed media</a>`));
  await assert.rejects(
    renderPublicCatalogCardMarkdownToHtml(
      "![Missing media](fcasset:missing.webp)",
      "en",
      new Map(),
      `Public catalog card ${fixtureFirstCardId} frontText`,
    ),
    /references unauthorized or missing media asset missing\.webp/,
  );
});

test("preserves enclosing links around authored images", async () => {
  const html = await renderPublicCatalogDescriptionMarkdownToHtml(
    [
      "[![Inline tracker](https://tracker.example/inline.gif)](https://example.com/inline)",
      "",
      "[![Reference tracker][reference-image]][reference-link]",
      "",
      "[reference-image]: https://tracker.example/reference.gif",
      "[reference-link]: https://example.com/reference",
    ].join("\n"),
    "en",
    "Public catalog package package-1 description",
  );

  assert.doesNotMatch(html, /<img\b/iu);
  assert.match(
    html,
    /href="https:\/\/example\.com\/inline"[^>]*>Inline tracker<\/a>/u,
  );
  assert.match(
    html,
    /href="https:\/\/example\.com\/reference"[^>]*>Reference tracker<\/a>/u,
  );
  assert.doesNotMatch(html, /href="https:\/\/tracker\.example\//u);
});

test("preserves supported GFM semantics while isolating authored fragments", async () => {
  const input = createValidDump();

  input.packageVersions[1].description = [
    "~~Removed text~~",
    "",
    "- [x] Completed task",
    "- [ ] Open task",
    "",
    "| Term | Destination |",
    "| --- | --- |",
    "| GFM | [Local table reference][table-reference] |",
    "",
    "[table-reference]: https://example.com/table-reference",
  ].join("\n");
  input.cards[2].frontText = "Visit www.example.com for details.";

  const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));
  const markdown = renderPublicCatalogMarkdownDocument(
    "catalog/packages/canonical-package",
    model,
  )?.markdown;

  assert.ok(markdown);
  const gfmTree = remark().use(gfm).parse(markdown) as MarkdownAstNode;
  const nodes = listMarkdownAstNodes(gfmTree);
  const html = await renderMarkdownToHtml(markdown, "en");

  assert.ok(nodes.some((node) => node.type === "delete"));
  assert.ok(nodes.some((node) => node.type === "table"));
  assert.ok(nodes.some((node) => node.type === "listItem" && node.checked === true));
  assert.ok(nodes.some((node) =>
    node.type === "link" && node.url === "https://example.com/table-reference"));
  assert.ok(nodes.some((node) =>
    node.type === "link" && node.url === "http://www.example.com/"));
  assert.equal(nodes.some((node) => node.type === "definition"), false);
  assert.equal(nodes.some((node) => node.type === "html"), false);
  assert.match(html, /<del>Removed text<\/del>/);
  assert.match(html, /type="checkbox"/);
  assert.match(html, /checked/);
  assert.match(html, /<table>/);
  assert.match(html, /href="https:\/\/example\.com\/table-reference"/);
});

test("keeps percent-encoded and literal-percent catalog Markdown assets distinct", () => {
  const input = createValidDump();
  input.packageVersions[1].languageTags = ["history world", "history%20world", "100%"];
  input.collections[0].languageTags = ["history world", "history%20world", "100%"];
  const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));
  const pagePaths = listPublicCatalogMarkdownPagePaths(model);
  const encodedSpacePath = "catalog/languages/history%20world";
  const literalPercentPath = "catalog/languages/history%2520world";

  assert.ok(pagePaths.includes(encodedSpacePath));
  assert.ok(pagePaths.includes(literalPercentPath));
  const encodedSpacePagePathname = getCanonicalPagePathname(encodedSpacePath);
  const literalPercentPagePathname = getCanonicalPagePathname(literalPercentPath);
  const encodedSpaceAssetPathname = getMarkdownAssetPathname(
    getMarkdownAssetDigest(encodedSpacePagePathname),
  );
  const literalPercentAssetPathname = getMarkdownAssetPathname(
    getMarkdownAssetDigest(literalPercentPagePathname),
  );

  assert.notEqual(
    encodedSpaceAssetPathname,
    literalPercentAssetPathname,
  );
  assert.equal(
    getPagePathnameFromMarkdownPathname("/catalog/languages/history%20world.md"),
    encodedSpacePagePathname,
  );
  assert.equal(
    getPagePathnameFromMarkdownPathname("/catalog/languages/history%2520world.md"),
    literalPercentPagePathname,
  );
  assert.match(
    renderPublicCatalogMarkdownDocument(literalPercentPath, model)?.markdown ?? "",
    /history%20world/,
  );
});

test("validates and canonically serializes the compact static delivery manifest", () => {
  const pagePathname = "/catalog/languages/history%2520world/";
  const assetPathname = getMarkdownAssetPathname(
    getMarkdownAssetDigest(pagePathname),
  );
  const facetPathname = getPublicCatalogFacetInternalPathname(
    "es",
    "language",
    "history%20world",
  );
  const serialized = serializeMarkdownAssetManifest({
    facets: { "/es/catalog/languages/history%2520world/": facetPathname },
    markdown: { [pagePathname]: assetPathname },
  });

  assert.deepEqual(parseMarkdownAssetManifest(serialized), {
    facets: { "/es/catalog/languages/history%2520world/": facetPathname },
    markdown: { [pagePathname]: assetPathname },
  });
  assert.throws(
    () => parseMarkdownAssetManifest('{"facets":{},"markdown":{"relative/":"/__markdown/invalid.md"}}'),
    /invalid Markdown entry/,
  );
  assert.throws(
    () => parseMarkdownAssetManifest(JSON.stringify({
      facets: {
        "/catalog/topics/history/":
          `/catalog-facet-static/en/topic/${"a".repeat(64)}/`,
      },
      markdown: {},
    })),
    /invalid facet entry/,
  );
  assert.doesNotThrow(() => assertUniquePublicCatalogFacetAliases(
    "language",
    ["history", "history%20", "😀".repeat(120)],
  ));
  assert.equal(
    getPublicCatalogFacetAlias("language", "history"),
    getPublicCatalogFacetAlias("language", "history"),
  );
});

test("derives catalog discovery links with an explicit root language", () => {
  const model = createPublicCatalogReadModel(parsePublicCatalogDump(createValidDump()));
  const section = renderPublicCatalogLlmsSection(model);

  assert.match(section, /\/catalog\/packages\/canonical-package\//);
  assert.match(section, /\/catalog\/authors\//);
  assert.match(section, /\/catalog\/authors\/author-one\//);
  assert.match(section, /\/catalog\/collections\//);
  assert.match(section, /\/catalog\/collections\/starter-collection\//);
  assert.match(section, /\/catalog\/\?language=en/);
  assert.equal(section.includes("/catalog/import/"), false);
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

test("formats localized deck counts", () => {
  assert.equal(
    formatPublicCatalogPackageCount("en", 1, getPublicCatalogDestinationCopy("en")),
    "1 deck",
  );
  assert.equal(
    formatPublicCatalogPackageCount("es", 2, getPublicCatalogDestinationCopy("es")),
    "2 mazos",
  );
  assert.equal(
    formatPublicCatalogPackageCount("ar", 2, getPublicCatalogDestinationCopy("ar")),
    "رزمتان",
  );
  assert.equal(
    formatPublicCatalogPackageCount("ru", 5, getPublicCatalogDestinationCopy("ru")),
    "5 колод",
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

test("announces a missing catalog cover placeholder", () => {
  assert.equal(
    getPublicCatalogCoverPlaceholderAccessibleLabel(
      "Package title",
      "Cover preview unavailable",
    ),
    "Package title: Cover preview unavailable",
  );
});

test("resolves collection cover placeholders when its package or media reference is absent", () => {
  const withoutPackageReference = createValidDump();
  withoutPackageReference.collections[0].coverPackageId = null;
  const packageReferenceModel = createPublicCatalogReadModel(
    parsePublicCatalogDump(withoutPackageReference),
  );

  assert.equal(
    getPublicCatalogCollectionCoverMediaAsset(
      packageReferenceModel,
      withoutPackageReference.collections[0],
    ),
    null,
  );

  const withoutMediaReference = createValidDump();
  withoutMediaReference.packageVersions[1].coverMediaAssetId = null;
  const mediaReferenceModel = createPublicCatalogReadModel(
    parsePublicCatalogDump(withoutMediaReference),
  );

  assert.equal(
    getPublicCatalogCollectionCoverMediaAsset(
      mediaReferenceModel,
      withoutMediaReference.collections[0],
    ),
    null,
  );
});

test("uses entity modification times and package covers in social metadata", () => {
  const model = createPublicCatalogReadModel(parsePublicCatalogDump(createValidDump()));
  const packageView = getPublicCatalogPackageBySlug(model, "canonical-package");
  const collection = getPublicCatalogCollectionBySlug(model, "starter-collection");
  const downloadUrl =
    `https://api.flashcards-open-source-app.com/v1/catalog/package-versions/${fixtureLatestVersionId}/media-assets/cover.webp/download`;

  assert.ok(packageView);
  assert.ok(collection);

  const metadata = createPublicCatalogPackageMetadata("en", packageView);
  const collectionMetadata = createPublicCatalogCollectionMetadata(
    "en",
    collection,
  );
  const packageOpenGraph = metadata.openGraph;
  const collectionOpenGraph = collectionMetadata.openGraph;

  assert.ok(packageOpenGraph?.type === "article");
  assert.ok(collectionOpenGraph?.type === "article");
  assert.equal(packageOpenGraph.modifiedTime, packageView.latestVersion.updatedAt);
  assert.equal(collectionOpenGraph.modifiedTime, collection.updatedAt);
  assert.deepEqual(metadata.openGraph?.images, [
    {
      alt: "Cover image",
      type: "image/webp",
      url: downloadUrl,
    },
  ]);
  assert.deepEqual(metadata.twitter?.images, [
    {
      alt: "Cover image",
      url: downloadUrl,
    },
  ]);
});

test("keeps package canonicals and hreflang localized independently of content language", () => {
  const model = createPublicCatalogReadModel(parsePublicCatalogDump(createValidDump()));
  const packageView = getPublicCatalogPackageBySlug(model, "canonical-package");

  assert.ok(packageView);
  const metadata = createPublicCatalogPackageMetadata("ja", packageView);

  assert.equal(
    metadata.alternates?.canonical,
    "https://flashcards-open-source-app.com/ja/catalog/packages/canonical-package/",
  );
  assert.equal(
    metadata.alternates?.languages?.es,
    "https://flashcards-open-source-app.com/es/catalog/packages/canonical-package/",
  );
  assert.equal(
    metadata.alternates?.languages?.["x-default"],
    "https://flashcards-open-source-app.com/catalog/packages/canonical-package/",
  );
});

test("uses the package title when social cover alt text is null or blank", () => {
  const model = createPublicCatalogReadModel(parsePublicCatalogDump(createValidDump()));
  const packageView = getPublicCatalogPackageBySlug(model, "canonical-package");

  assert.ok(packageView);

  const coverMediaAsset = packageView.coverMediaAsset;

  assert.ok(coverMediaAsset);

  for (const altText of [null, "   "]) {
    const metadata = createPublicCatalogPackageMetadata("en", {
      ...packageView,
      coverMediaAsset: {
        ...coverMediaAsset,
        altText,
      },
    });

    assert.deepEqual(metadata.openGraph?.images, [
      {
        alt: packageView.latestVersion.title,
        type: coverMediaAsset.mimeType,
        url: coverMediaAsset.downloadUrl,
      },
    ]);
    assert.deepEqual(metadata.twitter?.images, [
      {
        alt: packageView.latestVersion.title,
        url: coverMediaAsset.downloadUrl,
      },
    ]);
  }
});

test("keeps shared social images for catalog pages without a valid package cover", () => {
  const model = createPublicCatalogReadModel(parsePublicCatalogDump(createValidDump()));
  const packageView = getPublicCatalogPackageBySlug(model, "canonical-package");

  assert.ok(packageView);

  const coverMediaAsset = packageView.coverMediaAsset;

  assert.ok(coverMediaAsset);

  const metadataValues = [
    createPublicCatalogRootMetadata("en"),
    createPublicCatalogPackageMetadata("en", {
      ...packageView,
      coverMediaAsset: null,
    }),
    createPublicCatalogPackageMetadata("en", {
      ...packageView,
      coverMediaAsset: {
        ...coverMediaAsset,
        mimeType: "application/pdf",
      },
    }),
  ];

  for (const metadata of metadataValues) {
    assert.deepEqual(metadata.openGraph?.images, [{ url: OPEN_GRAPH_IMAGE_URL }]);
    assert.deepEqual(metadata.twitter?.images, [TWITTER_IMAGE_URL]);
  }
});

test("builds catalog cover render data for images and placeholders", () => {
  const downloadUrl =
    `https://api.flashcards-open-source-app.com/v1/catalog/package-versions/${fixtureLatestVersionId}/media-assets/cover.webp/download`;

  assert.deepEqual(
    getPublicCatalogCoverImage(
      "Package title",
      { altText: " Authored cover text ", downloadUrl, mimeType: "image/webp" },
    ),
    {
      altText: "Authored cover text",
      downloadUrl,
      mimeType: "image/webp",
    },
  );
  assert.deepEqual(
    getPublicCatalogCoverRenderData(
      "Package title",
      { altText: " Authored cover text ", downloadUrl, mimeType: "image/webp" },
      "Cover preview unavailable",
    ),
    {
      altText: "Authored cover text",
      downloadUrl,
      kind: "image",
    },
  );
  assert.deepEqual(
    getPublicCatalogCoverRenderData(
      "Package title",
      { altText: null, downloadUrl, mimeType: "image/webp" },
      "Cover preview unavailable",
    ),
    {
      altText: "Package title",
      downloadUrl,
      kind: "image",
    },
  );
  assert.deepEqual(
    getPublicCatalogCoverRenderData(
      "Package title",
      { altText: "Document", downloadUrl, mimeType: "application/pdf" },
      "Cover preview unavailable",
    ),
    {
      accessibleLabel: "Package title: Cover preview unavailable",
      initial: "P",
      kind: "placeholder",
    },
  );
  assert.deepEqual(
    getPublicCatalogCoverRenderData(
      "Package title",
      null,
      "Cover preview unavailable",
    ),
    {
      accessibleLabel: "Package title: Cover preview unavailable",
      initial: "P",
      kind: "placeholder",
    },
  );
});

test("uses placeholders when package and collection covers reference non-image media", () => {
  const input = createValidDump();
  const coverMediaAsset = input.mediaAssets.find(
    (mediaAsset) => mediaAsset.packageMediaAssetId === fixtureCoverMediaId,
  );

  assert.ok(coverMediaAsset);
  coverMediaAsset.mimeType = "application/pdf";

  const model = createPublicCatalogReadModel(parsePublicCatalogDump(input));
  const packageView = getPublicCatalogPackageBySlug(model, "canonical-package");
  const collection = getPublicCatalogCollectionBySlug(model, "starter-collection");

  assert.ok(packageView);
  assert.ok(collection);

  [
    getPublicCatalogCoverRenderData(
      packageView.latestVersion.title,
      packageView.coverMediaAsset,
      "Cover preview unavailable",
    ),
    getPublicCatalogCoverRenderData(
      collection.title,
      getPublicCatalogCollectionCoverMediaAsset(model, collection),
      "Cover preview unavailable",
    ),
  ].forEach((renderData) => {
    assert.equal(renderData.kind, "placeholder");
  });
});

test("formats catalog cover initials without environment-specific locale casing", () => {
  assert.equal(getPublicCatalogCoverInitial("istanbul"), "I");
  assert.equal(getPublicCatalogCoverInitial("  ßeta"), "SS");
  assert.throws(
    () => getPublicCatalogCoverInitial("   "),
    /Public catalog package title must not be empty/,
  );
});
