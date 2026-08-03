import type { PublicCatalogMediaAsset } from "@/lib/publicCatalogTypes";
import {
  getPublicCatalogCoverAccessibleLabel,
  getPublicCatalogCoverInitial,
} from "@/lib/publicCatalogCover";
import styles from "./PublicCatalogCover.module.css";

interface PublicCatalogCoverProps {
  readonly coverMediaAsset: Pick<PublicCatalogMediaAsset, "altText"> | null;
  readonly placeholderLabel: string;
  readonly title: string;
}

export function PublicCatalogCover({
  coverMediaAsset,
  placeholderLabel,
  title,
}: PublicCatalogCoverProps): React.JSX.Element {
  const accessibleLabel = getPublicCatalogCoverAccessibleLabel(
    title,
    coverMediaAsset?.altText ?? null,
    placeholderLabel,
  );

  return (
    <div
      className={styles.cover}
      role="img"
      aria-label={accessibleLabel}
      title={placeholderLabel}
    >
      <span className={styles.initial} aria-hidden="true">
        {getPublicCatalogCoverInitial(title)}
      </span>
    </div>
  );
}
