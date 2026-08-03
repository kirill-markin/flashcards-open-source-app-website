import type {
  PublicCatalogCard,
  PublicCatalogMediaAsset,
} from "./publicCatalogTypes";

export function getPublicCatalogCardMediaDownloadUrls(
  card: Pick<PublicCatalogCard, "packageCardId" | "mediaAssetIds">,
  mediaAssets: ReadonlyArray<PublicCatalogMediaAsset>,
): ReadonlyMap<string, string> {
  const mediaAssetsById = new Map(
    mediaAssets.map((mediaAsset) => [mediaAsset.packageMediaAssetId, mediaAsset]),
  );

  return new Map(card.mediaAssetIds.map((mediaAssetId): [string, string] => {
    const mediaAsset = mediaAssetsById.get(mediaAssetId);

    if (mediaAsset === undefined) {
      throw new Error(
        `Public catalog card ${card.packageCardId} references unavailable media asset ${mediaAssetId}.`,
      );
    }

    return [mediaAsset.packageMediaKey, mediaAsset.downloadUrl];
  }));
}
