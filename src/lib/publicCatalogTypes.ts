export const publicCatalogSchemaVersion = 1;

export type PublicCatalogJsonPrimitive = string | number | boolean | null;

export type PublicCatalogJsonValue =
  | PublicCatalogJsonPrimitive
  | PublicCatalogJsonObject
  | ReadonlyArray<PublicCatalogJsonValue>;

export type PublicCatalogJsonObject = Readonly<{
  [key: string]: PublicCatalogJsonValue;
}>;

export type PublicCatalogAuthor = Readonly<{
  authorId: string;
  slug: string;
  displayName: string;
  bio: string | null;
  websiteUrl: string | null;
}>;

export type PublicCatalogPackage = Readonly<{
  packageId: string;
  authorId: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  languageTags: ReadonlyArray<string>;
  topicTags: ReadonlyArray<string>;
  license: string;
  contentWarning: string | null;
  coverPackageMediaKey: string | null;
  latestPublishedVersionId: string;
  publishedAt: string;
}>;

export type PublicCatalogPackageVersion = Readonly<{
  packageVersionId: string;
  packageId: string;
  versionNumber: number;
  title: string;
  summary: string;
  description: string;
  cardCount: number;
  publishedAt: string;
  installUrl: string;
}>;

export type PublicCatalogCard = Readonly<{
  packageCardId: string;
  packageVersionId: string;
  ordinal: number;
  frontText: string;
  backText: string;
  cardType: string;
  metadata: PublicCatalogJsonObject;
  tags: ReadonlyArray<string>;
  mediaAssetKeys: ReadonlyArray<string>;
}>;

export type PublicCatalogMediaAsset = Readonly<{
  packageMediaAssetId: string;
  packageId: string;
  packageVersionId: string;
  packageMediaKey: string;
  altText: string;
  credit: string | null;
  license: string;
  downloadUrlPath: string;
}>;

export type PublicCatalogCollection = Readonly<{
  collectionId: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  languageTags: ReadonlyArray<string>;
  topicTags: ReadonlyArray<string>;
  coverPackageId: string;
  publishedAt: string;
}>;

export type PublicCatalogCollectionPackage = Readonly<{
  collectionId: string;
  packageId: string;
  ordinal: number;
}>;

export type PublicCatalogDump = Readonly<{
  schemaVersion: typeof publicCatalogSchemaVersion;
  generatedAt: string;
  authors: ReadonlyArray<PublicCatalogAuthor>;
  packages: ReadonlyArray<PublicCatalogPackage>;
  packageVersions: ReadonlyArray<PublicCatalogPackageVersion>;
  cards: ReadonlyArray<PublicCatalogCard>;
  mediaAssets: ReadonlyArray<PublicCatalogMediaAsset>;
  collections: ReadonlyArray<PublicCatalogCollection>;
  collectionPackages: ReadonlyArray<PublicCatalogCollectionPackage>;
}>;
