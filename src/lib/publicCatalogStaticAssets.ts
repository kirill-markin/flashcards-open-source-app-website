import { createHash } from "node:crypto";
import type { AppLocale } from "./localeConfig";

export type PublicCatalogFacetKind = "language";

function createNamespacedDigest(namespace: string, value: string): string {
  const namespaceBytes = Buffer.from(namespace, "utf-8");
  const valueBytes = Buffer.from(value, "utf-8");
  const framing = Buffer.allocUnsafe(8);

  framing.writeUInt32BE(namespaceBytes.length, 0);
  framing.writeUInt32BE(valueBytes.length, 4);

  return createHash("sha256")
    .update(framing)
    .update(namespaceBytes)
    .update(valueBytes)
    .digest("hex");
}

export function getMarkdownAssetDigest(pagePathname: string): string {
  return createNamespacedDigest("markdown-page:v1", pagePathname);
}

export function getPublicCatalogFacetAlias(
  facetKind: PublicCatalogFacetKind,
  tag: string,
): string {
  return createNamespacedDigest(`catalog-facet:${facetKind}:v1`, tag);
}

export function getPublicCatalogFacetInternalPathname(
  locale: AppLocale,
  facetKind: PublicCatalogFacetKind,
  tag: string,
): string {
  return `/catalog-facet-static/${locale}/${facetKind}/${getPublicCatalogFacetAlias(facetKind, tag)}/`;
}

export function resolvePublicCatalogFacetAlias(
  alias: string,
  facetKind: PublicCatalogFacetKind,
  knownTags: ReadonlyArray<string>,
): string | undefined {
  return knownTags.find((tag) => getPublicCatalogFacetAlias(facetKind, tag) === alias);
}

export function assertUniquePublicCatalogFacetAliases(
  facetKind: PublicCatalogFacetKind,
  tags: ReadonlyArray<string>,
): void {
  const tagByAlias = new Map<string, string>();

  tags.forEach((tag) => {
    const alias = getPublicCatalogFacetAlias(facetKind, tag);
    const existingTag = tagByAlias.get(alias);

    if (existingTag !== undefined && existingTag !== tag) {
      throw new Error(
        `Public catalog ${facetKind} facet SHA-256 collision: ${JSON.stringify(existingTag)} and ${JSON.stringify(tag)}.`,
      );
    }

    tagByAlias.set(alias, tag);
  });
}
