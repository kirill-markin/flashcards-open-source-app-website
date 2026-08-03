import Image from "next/image";
import { getPublicCatalogCoverRenderData } from "@/lib/publicCatalogCover";
import type { PublicCatalogCoverMediaAsset } from "@/lib/publicCatalogReadModel";
import styles from "./PublicCatalogCover.module.css";

interface PublicCatalogCoverProps {
  readonly coverMediaAsset: PublicCatalogCoverMediaAsset | null;
  readonly placeholderLabel: string;
  readonly sizes: string;
  readonly title: string;
}

export function PublicCatalogCover({
  coverMediaAsset,
  placeholderLabel,
  sizes,
  title,
}: PublicCatalogCoverProps): React.JSX.Element {
  const renderData = getPublicCatalogCoverRenderData(
    title,
    coverMediaAsset,
    placeholderLabel,
  );

  if (renderData.kind === "image") {
    return (
      <div className={styles.cover}>
        <Image
          alt={renderData.altText}
          className={styles.image}
          fill
          sizes={sizes}
          src={renderData.downloadUrl}
        />
      </div>
    );
  }

  return (
    <div
      className={styles.cover}
      role="img"
      aria-label={renderData.accessibleLabel}
      title={placeholderLabel}
    >
      <span className={styles.initial} aria-hidden="true">
        {renderData.initial}
      </span>
    </div>
  );
}
