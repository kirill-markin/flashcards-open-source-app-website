import type { PublicCatalogCoverMediaAsset } from "./publicCatalogReadModel";

export type PublicCatalogCoverImage = Readonly<{
  altText: string;
  downloadUrl: string;
  mimeType: string;
}>;

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

function isPublicCatalogCoverImageMimeType(mimeType: string): boolean {
  return mimeType === "image/jpeg"
    || mimeType === "image/png"
    || mimeType === "image/webp";
}

export function getPublicCatalogCoverImage(
  title: string,
  coverMediaAsset: PublicCatalogCoverMediaAsset | null,
): PublicCatalogCoverImage | null {
  if (
    coverMediaAsset === null
    || isPublicCatalogCoverImageMimeType(coverMediaAsset.mimeType) === false
  ) {
    return null;
  }

  const authoredAltText = coverMediaAsset.altText?.trim() ?? "";

  return {
    altText: authoredAltText === "" ? title : authoredAltText,
    downloadUrl: coverMediaAsset.downloadUrl,
    mimeType: coverMediaAsset.mimeType,
  };
}

export function getPublicCatalogCoverRenderData(
  title: string,
  coverMediaAsset: PublicCatalogCoverMediaAsset | null,
  placeholderLabel: string,
): PublicCatalogCoverRenderData {
  const coverImage = getPublicCatalogCoverImage(title, coverMediaAsset);

  if (coverImage === null) {
    return {
      accessibleLabel: getPublicCatalogCoverPlaceholderAccessibleLabel(
        title,
        placeholderLabel,
      ),
      initial: getPublicCatalogCoverInitial(title),
      kind: "placeholder",
    };
  }

  return {
    altText: coverImage.altText,
    downloadUrl: coverImage.downloadUrl,
    kind: "image",
  };
}
