export const publicCatalogSchemaVersion = 1;

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
  status: "published";
  latestPackageVersionId: string;
  versionCount: number;
  publishedAt: string;
}>;

export type PublicCatalogPackageVersion = Readonly<{
  packageVersionId: string;
  packageId: string;
  versionNumber: number;
  status: "published";
  slug: string;
  title: string;
  summary: string;
  description: string;
  languageTags: ReadonlyArray<string>;
  topicTags: ReadonlyArray<string>;
  license: string;
  contentWarning: string | null;
  coverMediaAssetId: string | null;
  cardCount: number;
  updatedAt: string;
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
  tags: ReadonlyArray<string>;
  mediaAssetIds: ReadonlyArray<string>;
}>;

export type PublicCatalogMediaAsset = Readonly<{
  packageMediaAssetId: string;
  packageVersionId: string;
  packageMediaKey: string;
  altText: string | null;
  credit: string | null;
  license: string | null;
  mimeType: string;
  sizeBytes: number;
  downloadUrl: string;
}>;

export type PublicCatalogCollection = Readonly<{
  collectionId: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  languageTags: ReadonlyArray<string>;
  topicTags: ReadonlyArray<string>;
  coverPackageId: string | null;
  status: "published";
  updatedAt: string;
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
