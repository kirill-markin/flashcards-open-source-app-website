import "server-only";
import { createCachedPublicCatalogReader } from "./publicCatalogReadModel";
import type { PublicCatalogReadModel } from "./publicCatalogReadModel";
import {
  isPublicCatalogEnabled,
  readGeneratedPublicCatalogDump,
} from "./publicCatalogBuild";

const readCachedPublicCatalog = createCachedPublicCatalogReader(
  isPublicCatalogEnabled,
  () => readGeneratedPublicCatalogDump(process.cwd()),
);

export function readPublicCatalog(): PublicCatalogReadModel | null {
  return readCachedPublicCatalog();
}

export function listPublicCatalogPackageSlugs(): ReadonlyArray<string> {
  const catalog = readPublicCatalog();

  if (catalog === null) {
    return [];
  }

  return catalog.packages.map(
    (packageView) => packageView.packageMetadata.slug,
  );
}

export function listPublicCatalogAuthorSlugs(): ReadonlyArray<string> {
  return [...(readPublicCatalog()?.authorBySlug.keys() ?? [])];
}

export function listPublicCatalogCollectionSlugs(): ReadonlyArray<string> {
  return [...(readPublicCatalog()?.collectionBySlug.keys() ?? [])];
}

export function listPublicCatalogLanguageTags(): ReadonlyArray<string> {
  return readPublicCatalog()?.languageTags ?? [];
}
