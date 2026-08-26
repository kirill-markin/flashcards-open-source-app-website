import "server-only";
import { NON_DEFAULT_LOCALES, type NonDefaultLocale } from "./localeConfig";
import {
  isPublicCatalogEnabled,
  readGeneratedPublicCatalogDump,
} from "./publicCatalogBuild";
import { createCachedPublicCatalogReader } from "./publicCatalogReadModel";
import type { PublicCatalogReadModel } from "./publicCatalogReadModel";

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

export function listPublicCatalogPackagePageLocaleParams(): Array<{
  locale: NonDefaultLocale;
  packageSlug: string;
}> {
  const catalog = readPublicCatalog();

  if (catalog === null) {
    return [];
  }

  return catalog.packages.flatMap((packageView) =>
    NON_DEFAULT_LOCALES.map((locale) => ({
      locale,
      packageSlug: packageView.packageMetadata.slug,
    })),
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
