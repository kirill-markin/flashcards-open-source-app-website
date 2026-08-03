import type { PublicCatalogCoverMediaAsset } from "./publicCatalogReadModel";

export type PublicCatalogCoverRenderData =
  | Readonly<{
      altText: string;
      downloadUrl: string;
      kind: "image";
    }>
  | Readonly<{
      accessibleLabel: string;
      initial: string;
      kind: "placeholder";
    }>;

export function getPublicCatalogCoverInitial(title: string): string {
  const [initial] = Array.from(title.trim());

  if (initial === undefined) {
    throw new Error("Public catalog package title must not be empty.");
  }

  return initial.toUpperCase();
}

export function getPublicCatalogCoverPlaceholderAccessibleLabel(
  title: string,
  placeholderLabel: string,
): string {
  return `${title}: ${placeholderLabel}`;
}

export function getPublicCatalogCoverRenderData(
  title: string,
  coverMediaAsset: PublicCatalogCoverMediaAsset | null,
  placeholderLabel: string,
): PublicCatalogCoverRenderData {
  if (coverMediaAsset === null) {
    return {
      accessibleLabel: getPublicCatalogCoverPlaceholderAccessibleLabel(
        title,
        placeholderLabel,
      ),
      initial: getPublicCatalogCoverInitial(title),
      kind: "placeholder",
    };
  }

  const authoredAltText = coverMediaAsset.altText?.trim() ?? "";

  return {
    altText: authoredAltText === "" ? title : authoredAltText,
    downloadUrl: coverMediaAsset.downloadUrl,
    kind: "image",
  };
}
