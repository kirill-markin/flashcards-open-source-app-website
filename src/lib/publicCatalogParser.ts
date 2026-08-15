import { remark } from "remark";
import {
  assertNoForbiddenUrlInputCharacters,
  canonicalizeHttpsUrl,
} from "./markdownLinks";
import {
  publicCatalogSchemaVersions,
  type PublicCatalogAuthor,
  type PublicCatalogCard,
  type PublicCatalogCollection,
  type PublicCatalogCollectionPackage,
  type PublicCatalogDump,
  type PublicCatalogMediaAsset,
  type PublicCatalogPackage,
  type PublicCatalogPackageVersion,
  type PublicCatalogSchemaVersion,
} from "./publicCatalogTypes";

type MarkdownAstNode = Readonly<{
  type: string;
  children?: ReadonlyArray<MarkdownAstNode>;
}>;

function assertRecord(value: unknown, context: string): Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error(`Public catalog ${context} must be an object.`);
  }

  return value as Record<string, unknown>;
}

function assertArray(value: unknown, context: string): ReadonlyArray<unknown> {
  if (Array.isArray(value) === false) {
    throw new Error(`Public catalog ${context} must be an array.`);
  }

  return value;
}

function assertString(value: unknown, context: string): string {
  if (typeof value !== "string") {
    throw new Error(`Public catalog ${context} must be a string.`);
  }

  return value;
}

function assertNonEmptyString(value: unknown, context: string): string {
  const stringValue = assertString(value, context);

  if (stringValue.trim() === "") {
    throw new Error(`Public catalog ${context} must not be empty.`);
  }

  return stringValue;
}

function assertFacetTag(value: unknown, context: string): string {
  const tag = assertString(value, context);

  if (tag.isWellFormed() === false) {
    throw new Error(`Public catalog ${context} must be well-formed Unicode.`);
  }

  assertNoForbiddenUrlInputCharacters(tag, `Public catalog ${context}`);

  if (tag.trim() === "") {
    throw new Error(`Public catalog ${context} must not be empty.`);
  }

  if (tag === "." || tag === "..") {
    throw new Error(
      `Public catalog ${context} must not be a URL dot segment. received=${tag}`,
    );
  }

  return tag;
}

function assertUuid(value: unknown, context: string): string {
  const identifier = assertNonEmptyString(value, context);

  if (
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/iu
      .test(identifier) === false
  ) {
    throw new Error(
      `Public catalog ${context} must be a UUID. received=${identifier}`,
    );
  }

  return identifier;
}

function assertNullableString(value: unknown, context: string): string | null {
  if (value === null) {
    return null;
  }

  return assertString(value, context);
}

function assertNonNegativeInteger(value: unknown, context: string): number {
  if (typeof value !== "number" || Number.isInteger(value) === false || value < 0) {
    throw new Error(`Public catalog ${context} must be a non-negative integer.`);
  }

  return value;
}

function assertPositiveInteger(value: unknown, context: string): number {
  if (typeof value !== "number" || Number.isInteger(value) === false || value <= 0) {
    throw new Error(`Public catalog ${context} must be a positive integer.`);
  }

  return value;
}

function assertCanonicalUtcTimestamp(value: unknown, context: string): string {
  const stringValue = assertNonEmptyString(value, context);
  const timestamp = new Date(stringValue);

  if (Number.isNaN(timestamp.getTime()) || timestamp.toISOString() !== stringValue) {
    throw new Error(`Public catalog ${context} must be a canonical UTC timestamp.`);
  }

  return stringValue;
}

function assertSlug(value: unknown, context: string): string {
  const slug = assertNonEmptyString(value, context);

  if (/^[a-z0-9](?:[a-z0-9-]{0,118}[a-z0-9])?$/.test(slug) === false) {
    throw new Error(
      `Public catalog ${context} must use at most 120 lowercase letters, numbers, and hyphens without leading or trailing hyphens. received=${slug}`,
    );
  }

  return slug;
}

function assertPackageMediaKey(value: unknown, context: string): string {
  const packageMediaKey = assertNonEmptyString(value, context);

  if (/^[a-z0-9][a-z0-9._-]{0,127}$/.test(packageMediaKey) === false) {
    throw new Error(
      `Public catalog ${context} must use at most 128 lowercase letters, numbers, dots, underscores, or hyphens. received=${packageMediaKey}`,
    );
  }

  return packageMediaKey;
}

function assertHttpsUrl(value: unknown, context: string): string {
  const stringValue = assertNonEmptyString(value, context);

  return canonicalizeHttpsUrl(stringValue, `Public catalog ${context}`);
}

function assertNullableHttpsUrl(value: unknown, context: string): string | null {
  return value === null ? null : assertHttpsUrl(value, context);
}

function assertPublishedStatus(value: unknown, context: string): "published" {
  if (value !== "published") {
    throw new Error(`Public catalog ${context} must be published. received=${String(value)}`);
  }

  return value;
}

function assertSchemaVersion(value: unknown): PublicCatalogSchemaVersion {
  const schemaVersion = publicCatalogSchemaVersions.find(
    (supportedVersion) => supportedVersion === value,
  );

  if (schemaVersion === undefined) {
    throw new Error(
      `Public catalog schemaVersion must be one of ${publicCatalogSchemaVersions.join(", ")}, received ${String(value)}.`,
    );
  }

  return schemaVersion;
}

function assertNoRawHtmlNode(node: MarkdownAstNode, context: string): void {
  if (node.type === "html") {
    throw new Error(`Public catalog ${context} must not contain raw HTML.`);
  }

  node.children?.forEach((child) => {
    assertNoRawHtmlNode(child, context);
  });
}

function assertMarkdown(value: unknown, context: string): string {
  const markdown = assertString(value, context);
  const tree = remark().parse(markdown) as MarkdownAstNode;

  assertNoRawHtmlNode(tree, context);

  return markdown;
}

function parseUniqueStringArray(
  value: unknown,
  context: string,
  parseItem: (item: unknown, itemContext: string) => string,
): ReadonlyArray<string> {
  const values = assertArray(value, context).map((item, index) =>
    parseItem(item, `${context}[${index}]`),
  );
  const seenValues = new Set<string>();

  values.forEach((item, index) => {
    if (seenValues.has(item)) {
      throw new Error(`Public catalog ${context} contains duplicate value ${item} at index ${index}.`);
    }

    seenValues.add(item);
  });

  return values;
}

function parseAuthor(value: unknown, index: number): PublicCatalogAuthor {
  const context = `authors[${index}]`;
  const record = assertRecord(value, context);

  return {
    authorId: assertUuid(record.authorId, `${context}.authorId`),
    slug: assertSlug(record.slug, `${context}.slug`),
    displayName: assertNonEmptyString(record.displayName, `${context}.displayName`),
    bio: assertNullableString(record.bio, `${context}.bio`),
    websiteUrl: assertNullableHttpsUrl(record.websiteUrl, `${context}.websiteUrl`),
  };
}

function parsePackage(value: unknown, index: number): PublicCatalogPackage {
  const context = `packages[${index}]`;
  const record = assertRecord(value, context);

  return {
    packageId: assertUuid(record.packageId, `${context}.packageId`),
    authorId: assertUuid(record.authorId, `${context}.authorId`),
    slug: assertSlug(record.slug, `${context}.slug`),
    status: assertPublishedStatus(record.status, `${context}.status`),
    latestPackageVersionId: assertUuid(
      record.latestPackageVersionId,
      `${context}.latestPackageVersionId`,
    ),
    versionCount: assertPositiveInteger(record.versionCount, `${context}.versionCount`),
    publishedAt: assertCanonicalUtcTimestamp(record.publishedAt, `${context}.publishedAt`),
  };
}

function parsePackageVersion(value: unknown, index: number): PublicCatalogPackageVersion {
  const context = `packageVersions[${index}]`;
  const record = assertRecord(value, context);

  return {
    packageVersionId: assertUuid(
      record.packageVersionId,
      `${context}.packageVersionId`,
    ),
    packageId: assertUuid(record.packageId, `${context}.packageId`),
    versionNumber: assertPositiveInteger(record.versionNumber, `${context}.versionNumber`),
    status: assertPublishedStatus(record.status, `${context}.status`),
    slug: assertSlug(record.slug, `${context}.slug`),
    title: assertNonEmptyString(record.title, `${context}.title`),
    summary: assertString(record.summary, `${context}.summary`),
    description: assertMarkdown(record.description, `${context}.description`),
    languageTags: parseUniqueStringArray(
      record.languageTags,
      `${context}.languageTags`,
      assertFacetTag,
    ),
    license: assertNonEmptyString(record.license, `${context}.license`),
    contentWarning: assertNullableString(record.contentWarning, `${context}.contentWarning`),
    coverMediaAssetId: record.coverMediaAssetId === null
      ? null
      : assertUuid(record.coverMediaAssetId, `${context}.coverMediaAssetId`),
    cardCount: assertNonNegativeInteger(record.cardCount, `${context}.cardCount`),
    updatedAt: assertCanonicalUtcTimestamp(record.updatedAt, `${context}.updatedAt`),
    publishedAt: assertCanonicalUtcTimestamp(record.publishedAt, `${context}.publishedAt`),
    installUrl: assertHttpsUrl(record.installUrl, `${context}.installUrl`),
  };
}

function parseCard(value: unknown, index: number): PublicCatalogCard {
  const context = `cards[${index}]`;
  const record = assertRecord(value, context);

  return {
    packageCardId: assertUuid(record.packageCardId, `${context}.packageCardId`),
    packageVersionId: assertUuid(
      record.packageVersionId,
      `${context}.packageVersionId`,
    ),
    ordinal: assertPositiveInteger(record.ordinal, `${context}.ordinal`),
    frontText: assertMarkdown(record.frontText, `${context}.frontText`),
    backText: assertMarkdown(record.backText, `${context}.backText`),
    cardType: assertNonEmptyString(record.cardType, `${context}.cardType`),
    tags: parseUniqueStringArray(record.tags, `${context}.tags`, assertNonEmptyString),
    mediaAssetIds: parseUniqueStringArray(
      record.mediaAssetIds,
      `${context}.mediaAssetIds`,
      assertUuid,
    ),
  };
}

function parseMediaAsset(value: unknown, index: number): PublicCatalogMediaAsset {
  const context = `mediaAssets[${index}]`;
  const record = assertRecord(value, context);

  return {
    packageMediaAssetId: assertUuid(
      record.packageMediaAssetId,
      `${context}.packageMediaAssetId`,
    ),
    packageVersionId: assertUuid(
      record.packageVersionId,
      `${context}.packageVersionId`,
    ),
    packageMediaKey: assertPackageMediaKey(
      record.packageMediaKey,
      `${context}.packageMediaKey`,
    ),
    altText: assertNullableString(record.altText, `${context}.altText`),
    credit: assertNullableString(record.credit, `${context}.credit`),
    license: assertNullableString(record.license, `${context}.license`),
    mimeType: assertNonEmptyString(record.mimeType, `${context}.mimeType`),
    sizeBytes: assertNonNegativeInteger(record.sizeBytes, `${context}.sizeBytes`),
    downloadUrl: assertHttpsUrl(record.downloadUrl, `${context}.downloadUrl`),
  };
}

function parseCollection(value: unknown, index: number): PublicCatalogCollection {
  const context = `collections[${index}]`;
  const record = assertRecord(value, context);

  return {
    collectionId: assertUuid(record.collectionId, `${context}.collectionId`),
    slug: assertSlug(record.slug, `${context}.slug`),
    title: assertNonEmptyString(record.title, `${context}.title`),
    summary: assertString(record.summary, `${context}.summary`),
    description: assertMarkdown(record.description, `${context}.description`),
    languageTags: parseUniqueStringArray(
      record.languageTags,
      `${context}.languageTags`,
      assertFacetTag,
    ),
    coverPackageId: record.coverPackageId === null
      ? null
      : assertUuid(record.coverPackageId, `${context}.coverPackageId`),
    status: assertPublishedStatus(record.status, `${context}.status`),
    updatedAt: assertCanonicalUtcTimestamp(record.updatedAt, `${context}.updatedAt`),
    publishedAt: assertCanonicalUtcTimestamp(record.publishedAt, `${context}.publishedAt`),
  };
}

function parseCollectionPackage(value: unknown, index: number): PublicCatalogCollectionPackage {
  const context = `collectionPackages[${index}]`;
  const record = assertRecord(value, context);

  return {
    collectionId: assertUuid(record.collectionId, `${context}.collectionId`),
    packageId: assertUuid(record.packageId, `${context}.packageId`),
    ordinal: assertPositiveInteger(record.ordinal, `${context}.ordinal`),
  };
}

function assertUniqueValues<T>(
  values: ReadonlyArray<T>,
  getValue: (item: T) => string,
  context: string,
): void {
  const seenValues = new Set<string>();

  values.forEach((item) => {
    const value = getValue(item);

    if (seenValues.has(value)) {
      throw new Error(`Public catalog ${context} contains duplicate value ${value}.`);
    }

    seenValues.add(value);
  });
}

function groupBy<T>(
  values: ReadonlyArray<T>,
  getKey: (item: T) => string,
): ReadonlyMap<string, ReadonlyArray<T>> {
  const groups = new Map<string, Array<T>>();

  values.forEach((item) => {
    const key = getKey(item);
    const group = groups.get(key);

    if (group === undefined) {
      groups.set(key, [item]);
      return;
    }

    group.push(item);
  });

  return groups;
}

function assertUniqueOrdinals<T>(
  groups: ReadonlyMap<string, ReadonlyArray<T>>,
  getOrdinal: (item: T) => number,
  context: string,
): void {
  groups.forEach((items, groupId) => {
    const ordinals = new Set<number>();

    items.forEach((item) => {
      const ordinal = getOrdinal(item);

      if (ordinals.has(ordinal)) {
        throw new Error(
          `Public catalog ${context} contains duplicate ordinal ${ordinal} for ${groupId}.`,
        );
      }

      ordinals.add(ordinal);
    });
  });
}

function assertReferentialIntegrity(dump: PublicCatalogDump): void {
  const authorIds = new Set(dump.authors.map((author) => author.authorId));
  const packagesById = new Map(
    dump.packages.map((catalogPackage) => [catalogPackage.packageId, catalogPackage]),
  );
  const versionsById = new Map(
    dump.packageVersions.map((version) => [version.packageVersionId, version]),
  );
  const versionsByPackageId = groupBy(
    dump.packageVersions,
    (version) => version.packageId,
  );
  const mediaAssetsById = new Map(
    dump.mediaAssets.map((mediaAsset) => [mediaAsset.packageMediaAssetId, mediaAsset]),
  );
  const collectionsById = new Map(
    dump.collections.map((collection) => [collection.collectionId, collection]),
  );
  const cardsByVersionId = groupBy(dump.cards, (card) => card.packageVersionId);
  const mediaByVersionAndKey = new Map<string, PublicCatalogMediaAsset>();

  dump.packages.forEach((catalogPackage) => {
    if (authorIds.has(catalogPackage.authorId) === false) {
      throw new Error(
        `Public catalog package ${catalogPackage.packageId} references missing author ${catalogPackage.authorId}.`,
      );
    }

    const packageVersions = versionsByPackageId.get(catalogPackage.packageId) ?? [];

    if (catalogPackage.versionCount !== packageVersions.length) {
      throw new Error(
        `Public catalog package ${catalogPackage.packageId} versionCount does not match its packageVersions. versionCount=${catalogPackage.versionCount}, packageVersions=${packageVersions.length}.`,
      );
    }

    const latestVersion = versionsById.get(catalogPackage.latestPackageVersionId);

    if (latestVersion === undefined) {
      throw new Error(
        `Public catalog package ${catalogPackage.packageId} references missing latest package version ${catalogPackage.latestPackageVersionId}.`,
      );
    }

    if (latestVersion.packageId !== catalogPackage.packageId) {
      throw new Error(
        `Public catalog package ${catalogPackage.packageId} references latest version ${latestVersion.packageVersionId} owned by package ${latestVersion.packageId}.`,
      );
    }

    const highestVersionNumber = Math.max(
      ...packageVersions.map((version) => version.versionNumber),
    );

    if (latestVersion.versionNumber !== highestVersionNumber) {
      throw new Error(
        `Public catalog package ${catalogPackage.packageId} latest version ${latestVersion.packageVersionId} is not the highest emitted version. latestVersionNumber=${latestVersion.versionNumber}, highestVersionNumber=${highestVersionNumber}.`,
      );
    }
  });

  dump.packageVersions.forEach((version) => {
    if (packagesById.has(version.packageId) === false) {
      throw new Error(
        `Public catalog package version ${version.packageVersionId} references missing package ${version.packageId}.`,
      );
    }

    const versionCards = cardsByVersionId.get(version.packageVersionId) ?? [];

    if (version.cardCount !== versionCards.length) {
      throw new Error(
        `Public catalog package version ${version.packageVersionId} cardCount does not match its cards. cardCount=${version.cardCount}, cards=${versionCards.length}.`,
      );
    }
  });

  dump.cards.forEach((card) => {
    if (versionsById.has(card.packageVersionId) === false) {
      throw new Error(
        `Public catalog card ${card.packageCardId} references missing package version ${card.packageVersionId}.`,
      );
    }
  });

  dump.mediaAssets.forEach((mediaAsset) => {
    const version = versionsById.get(mediaAsset.packageVersionId);

    if (version === undefined) {
      throw new Error(
        `Public catalog media asset ${mediaAsset.packageMediaAssetId} references missing package version ${mediaAsset.packageVersionId}.`,
      );
    }

    const mediaKey = `${mediaAsset.packageVersionId}\u0000${mediaAsset.packageMediaKey}`;

    if (mediaByVersionAndKey.has(mediaKey)) {
      throw new Error(
        `Public catalog mediaAssets contains duplicate packageMediaKey ${mediaAsset.packageMediaKey} for version ${mediaAsset.packageVersionId}.`,
      );
    }

    mediaByVersionAndKey.set(mediaKey, mediaAsset);
  });

  dump.cards.forEach((card) => {
    card.mediaAssetIds.forEach((mediaAssetId) => {
      const mediaAsset = mediaAssetsById.get(mediaAssetId);

      if (mediaAsset === undefined) {
        throw new Error(
          `Public catalog card ${card.packageCardId} references missing media asset ${mediaAssetId}.`,
        );
      }

      if (mediaAsset.packageVersionId !== card.packageVersionId) {
        throw new Error(
          `Public catalog card ${card.packageCardId} references media asset ${mediaAssetId} owned by version ${mediaAsset.packageVersionId}, not card version ${card.packageVersionId}.`,
        );
      }
    });
  });

  dump.packageVersions.forEach((version) => {
    if (version.coverMediaAssetId === null) {
      return;
    }

    const mediaAsset = mediaAssetsById.get(version.coverMediaAssetId);

    if (mediaAsset === undefined) {
      throw new Error(
        `Public catalog package version ${version.packageVersionId} references missing cover media asset ${version.coverMediaAssetId}.`,
      );
    }

    if (mediaAsset.packageVersionId !== version.packageVersionId) {
      throw new Error(
        `Public catalog package version ${version.packageVersionId} references cover media asset ${version.coverMediaAssetId} owned by version ${mediaAsset.packageVersionId}.`,
      );
    }
  });

  dump.collectionPackages.forEach((membership) => {
    if (collectionsById.has(membership.collectionId) === false) {
      throw new Error(
        `Public catalog collection membership references missing collection ${membership.collectionId}.`,
      );
    }

    if (packagesById.has(membership.packageId) === false) {
      throw new Error(
        `Public catalog collection ${membership.collectionId} references missing package ${membership.packageId}.`,
      );
    }
  });

  dump.collections.forEach((collection) => {
    if (collection.coverPackageId === null) {
      return;
    }

    if (packagesById.has(collection.coverPackageId) === false) {
      throw new Error(
        `Public catalog collection ${collection.collectionId} references missing cover package ${collection.coverPackageId}.`,
      );
    }

  });
}

function assertUniqueness(dump: PublicCatalogDump): void {
  assertUniqueValues(dump.authors, (author) => author.authorId, "authors.authorId");
  assertUniqueValues(dump.authors, (author) => author.slug, "authors.slug");
  assertUniqueValues(dump.packages, (catalogPackage) => catalogPackage.packageId, "packages.packageId");
  assertUniqueValues(dump.packages, (catalogPackage) => catalogPackage.slug, "packages.slug");
  assertUniqueValues(
    dump.packageVersions,
    (version) => version.packageVersionId,
    "packageVersions.packageVersionId",
  );
  assertUniqueValues(dump.cards, (card) => card.packageCardId, "cards.packageCardId");
  assertUniqueValues(
    dump.mediaAssets,
    (mediaAsset) => mediaAsset.packageMediaAssetId,
    "mediaAssets.packageMediaAssetId",
  );
  assertUniqueValues(
    dump.collections,
    (collection) => collection.collectionId,
    "collections.collectionId",
  );
  assertUniqueValues(dump.collections, (collection) => collection.slug, "collections.slug");

  const versionsByPackageId = groupBy(dump.packageVersions, (version) => version.packageId);
  const cardsByVersionId = groupBy(dump.cards, (card) => card.packageVersionId);
  const membershipsByCollectionId = groupBy(
    dump.collectionPackages,
    (membership) => membership.collectionId,
  );

  assertUniqueOrdinals(
    versionsByPackageId,
    (version) => version.versionNumber,
    "packageVersions.versionNumber",
  );
  assertUniqueOrdinals(cardsByVersionId, (card) => card.ordinal, "cards.ordinal");
  assertUniqueOrdinals(
    membershipsByCollectionId,
    (membership) => membership.ordinal,
    "collectionPackages.ordinal",
  );

  membershipsByCollectionId.forEach((memberships, collectionId) => {
    assertUniqueValues(
      memberships,
      (membership) => membership.packageId,
      `collectionPackages.packageId for collection ${collectionId}`,
    );
  });
}

export function parsePublicCatalogDump(value: unknown): PublicCatalogDump {
  const record = assertRecord(value, "root");
  const schemaVersion = assertSchemaVersion(record.schemaVersion);

  const dump: PublicCatalogDump = {
    schemaVersion,
    generatedAt: assertCanonicalUtcTimestamp(record.generatedAt, "generatedAt"),
    authors: assertArray(record.authors, "authors").map(parseAuthor),
    packages: assertArray(record.packages, "packages").map(parsePackage),
    packageVersions: assertArray(record.packageVersions, "packageVersions").map(
      parsePackageVersion,
    ),
    cards: assertArray(record.cards, "cards").map(parseCard),
    mediaAssets: assertArray(record.mediaAssets, "mediaAssets").map(parseMediaAsset),
    collections: assertArray(record.collections, "collections").map(parseCollection),
    collectionPackages: assertArray(record.collectionPackages, "collectionPackages").map(
      parseCollectionPackage,
    ),
  };

  assertUniqueness(dump);
  assertReferentialIntegrity(dump);

  return dump;
}
