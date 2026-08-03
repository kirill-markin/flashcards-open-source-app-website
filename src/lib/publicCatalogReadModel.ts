import type {
  PublicCatalogAuthor,
  PublicCatalogCard,
  PublicCatalogCollection,
  PublicCatalogDump,
  PublicCatalogMediaAsset,
  PublicCatalogPackage,
  PublicCatalogPackageVersion,
} from "./publicCatalogTypes";

export type PublicCatalogPackageView = Readonly<{
  packageMetadata: PublicCatalogPackage;
  author: PublicCatalogAuthor;
  latestVersion: PublicCatalogPackageVersion;
  cards: ReadonlyArray<PublicCatalogCard>;
  mediaAssets: ReadonlyArray<PublicCatalogMediaAsset>;
  coverMediaAsset: PublicCatalogMediaAsset | null;
}>;

export type PublicCatalogPackageCardView = Readonly<{
  packageMetadata: Pick<
    PublicCatalogPackage,
    | "packageId"
    | "slug"
    | "publishedAt"
  >;
  author: Pick<PublicCatalogAuthor, "slug" | "displayName">;
  latestVersion: Pick<
    PublicCatalogPackageVersion,
    | "title"
    | "summary"
    | "languageTags"
    | "topicTags"
    | "license"
    | "cardCount"
  >;
  coverMediaAsset: Pick<PublicCatalogMediaAsset, "altText"> | null;
}>;

export type PublicCatalogReadModel = Readonly<{
  schemaVersion: PublicCatalogDump["schemaVersion"];
  generatedAt: string;
  packages: ReadonlyArray<PublicCatalogPackageView>;
  packageBySlug: ReadonlyMap<string, PublicCatalogPackageView>;
  authorBySlug: ReadonlyMap<string, PublicCatalogAuthor>;
  collectionBySlug: ReadonlyMap<string, PublicCatalogCollection>;
  packagesByAuthorId: ReadonlyMap<string, ReadonlyArray<PublicCatalogPackageView>>;
  packagesByCollectionId: ReadonlyMap<string, ReadonlyArray<PublicCatalogPackageView>>;
  collectionsByPackageId: ReadonlyMap<string, ReadonlyArray<PublicCatalogCollection>>;
  packagesByLanguageTag: ReadonlyMap<string, ReadonlyArray<PublicCatalogPackageView>>;
  packagesByTopicTag: ReadonlyMap<string, ReadonlyArray<PublicCatalogPackageView>>;
  languageTags: ReadonlyArray<string>;
  topicTags: ReadonlyArray<string>;
}>;

export type PublicCatalogReader = () => PublicCatalogReadModel | null;

export function createCachedPublicCatalogReader(
  isEnabled: () => boolean,
  readDump: () => PublicCatalogDump,
): PublicCatalogReader {
  let cachedCatalog: PublicCatalogReadModel | undefined;

  return (): PublicCatalogReadModel | null => {
    if (isEnabled() === false) {
      return null;
    }

    if (cachedCatalog === undefined) {
      cachedCatalog = createPublicCatalogReadModel(readDump());
    }

    return cachedCatalog;
  };
}

function groupBy<T>(
  values: ReadonlyArray<T>,
  getKeys: (item: T) => ReadonlyArray<string>,
): ReadonlyMap<string, ReadonlyArray<T>> {
  const groups = new Map<string, Array<T>>();

  values.forEach((item) => {
    getKeys(item).forEach((key) => {
      const group = groups.get(key);

      if (group === undefined) {
        groups.set(key, [item]);
        return;
      }

      group.push(item);
    });
  });

  return groups;
}

function getRequiredValue<K, V>(
  values: ReadonlyMap<K, V>,
  key: K,
  context: string,
): V {
  const value = values.get(key);

  if (value === undefined) {
    throw new Error(`Cannot create public catalog read model: missing ${context}.`);
  }

  return value;
}

export function createPublicCatalogReadModel(dump: PublicCatalogDump): PublicCatalogReadModel {
  const authorsById = new Map(dump.authors.map((author) => [author.authorId, author]));
  const versionsById = new Map(
    dump.packageVersions.map((version) => [version.packageVersionId, version]),
  );
  const cardsByVersionId = groupBy(dump.cards, (card) => [card.packageVersionId]);
  const mediaByVersionId = groupBy(dump.mediaAssets, (mediaAsset) => [
    mediaAsset.packageVersionId,
  ]);
  const mediaById = new Map(
    dump.mediaAssets.map((mediaAsset) => [mediaAsset.packageMediaAssetId, mediaAsset]),
  );
  const packageViewsById = new Map<string, PublicCatalogPackageView>();
  const packages = dump.packages.map((packageMetadata): PublicCatalogPackageView => {
    const author = getRequiredValue(
      authorsById,
      packageMetadata.authorId,
      `author ${packageMetadata.authorId} for package ${packageMetadata.packageId}`,
    );
    const latestVersion = getRequiredValue(
      versionsById,
      packageMetadata.latestPackageVersionId,
      `latest version ${packageMetadata.latestPackageVersionId} for package ${packageMetadata.packageId}`,
    );
    const cards = [...(cardsByVersionId.get(latestVersion.packageVersionId) ?? [])].sort(
      (firstCard, secondCard) => firstCard.ordinal - secondCard.ordinal,
    );
    const mediaAssets = mediaByVersionId.get(latestVersion.packageVersionId) ?? [];
    const coverMediaAsset = latestVersion.coverMediaAssetId === null
      ? null
      : mediaById.get(latestVersion.coverMediaAssetId);

    if (coverMediaAsset === undefined) {
      throw new Error(
        `Cannot create public catalog read model: missing cover media ${latestVersion.coverMediaAssetId} for package ${packageMetadata.packageId}.`,
      );
    }

    const packageView: PublicCatalogPackageView = {
      packageMetadata,
      author,
      latestVersion,
      cards,
      mediaAssets,
      coverMediaAsset,
    };

    packageViewsById.set(packageMetadata.packageId, packageView);

    return packageView;
  });
  const packagesByAuthorId = groupBy(packages, (packageView) => [
    packageView.packageMetadata.authorId,
  ]);
  const packagesByCollectionId = new Map<string, ReadonlyArray<PublicCatalogPackageView>>();
  const collectionsByPackageId = new Map<string, Array<PublicCatalogCollection>>();
  const membershipsByCollectionId = groupBy(dump.collectionPackages, (membership) => [
    membership.collectionId,
  ]);

  dump.collections.forEach((collection) => {
    const memberships = [...(membershipsByCollectionId.get(collection.collectionId) ?? [])].sort(
      (firstMembership, secondMembership) => firstMembership.ordinal - secondMembership.ordinal,
    );
    const collectionPackages = memberships.map((membership) =>
      getRequiredValue(
        packageViewsById,
        membership.packageId,
        `package ${membership.packageId} for collection ${collection.collectionId}`,
      ),
    );

    packagesByCollectionId.set(collection.collectionId, collectionPackages);

    memberships.forEach((membership) => {
      const packageCollections = collectionsByPackageId.get(membership.packageId);

      if (packageCollections === undefined) {
        collectionsByPackageId.set(membership.packageId, [collection]);
        return;
      }

      packageCollections.push(collection);
    });
  });

  return {
    schemaVersion: dump.schemaVersion,
    generatedAt: dump.generatedAt,
    packages,
    packageBySlug: new Map(
      packages.map((packageView) => [packageView.packageMetadata.slug, packageView]),
    ),
    authorBySlug: new Map(dump.authors.map((author) => [author.slug, author])),
    collectionBySlug: new Map(
      dump.collections.map((collection) => [collection.slug, collection]),
    ),
    packagesByAuthorId,
    packagesByCollectionId,
    collectionsByPackageId,
    packagesByLanguageTag: groupBy(packages, (packageView) =>
      packageView.latestVersion.languageTags,
    ),
    packagesByTopicTag: groupBy(packages, (packageView) =>
      packageView.latestVersion.topicTags,
    ),
    languageTags: [...new Set([
      ...packages.flatMap((packageView) => packageView.latestVersion.languageTags),
      ...dump.collections.flatMap((collection) => collection.languageTags),
    ])].sort(),
    topicTags: [...new Set([
      ...packages.flatMap((packageView) => packageView.latestVersion.topicTags),
      ...dump.collections.flatMap((collection) => collection.topicTags),
    ])].sort(),
  };
}

export function getPublicCatalogPackageBySlug(
  model: PublicCatalogReadModel,
  slug: string,
): PublicCatalogPackageView | undefined {
  return model.packageBySlug.get(slug);
}

export function getPublicCatalogAuthorBySlug(
  model: PublicCatalogReadModel,
  slug: string,
): PublicCatalogAuthor | undefined {
  return model.authorBySlug.get(slug);
}

export function getPublicCatalogCollectionBySlug(
  model: PublicCatalogReadModel,
  slug: string,
): PublicCatalogCollection | undefined {
  return model.collectionBySlug.get(slug);
}

export function getPublicCatalogPackagesByAuthorSlug(
  model: PublicCatalogReadModel,
  slug: string,
): ReadonlyArray<PublicCatalogPackageView> | undefined {
  const author = getPublicCatalogAuthorBySlug(model, slug);

  return author === undefined ? undefined : model.packagesByAuthorId.get(author.authorId) ?? [];
}

export function getPublicCatalogPackagesByCollectionSlug(
  model: PublicCatalogReadModel,
  slug: string,
): ReadonlyArray<PublicCatalogPackageView> | undefined {
  const collection = getPublicCatalogCollectionBySlug(model, slug);

  return collection === undefined
    ? undefined
    : model.packagesByCollectionId.get(collection.collectionId) ?? [];
}

export function getPublicCatalogCollectionsByPackageSlug(
  model: PublicCatalogReadModel,
  slug: string,
): ReadonlyArray<PublicCatalogCollection> | undefined {
  const packageView = getPublicCatalogPackageBySlug(model, slug);

  return packageView === undefined
    ? undefined
    : model.collectionsByPackageId.get(packageView.packageMetadata.packageId) ?? [];
}

export function getPublicCatalogPackagesByLanguageTag(
  model: PublicCatalogReadModel,
  languageTag: string,
): ReadonlyArray<PublicCatalogPackageView> {
  return model.packagesByLanguageTag.get(languageTag) ?? [];
}

export function getPublicCatalogPackagesByTopicTag(
  model: PublicCatalogReadModel,
  topicTag: string,
): ReadonlyArray<PublicCatalogPackageView> {
  return model.packagesByTopicTag.get(topicTag) ?? [];
}
