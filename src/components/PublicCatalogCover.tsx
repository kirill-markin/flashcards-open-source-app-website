import type { PublicCatalogMediaAsset } from "@/lib/publicCatalogTypes";
import { getPublicCatalogCoverAccessibleLabel } from "@/lib/publicCatalogCover";
import styles from "./PublicCatalogCover.module.css";

interface PublicCatalogCoverProps {
  readonly coverMediaAsset: PublicCatalogMediaAsset | null;
  readonly placeholderLabel: string;
  readonly title: string;
}

function getTitleInitial(title: string): string {
  const [initial] = Array.from(title.trim());

  if (initial === undefined) {
    throw new Error("Public catalog package title must not be empty.");
  }

  return initial.toLocaleUpperCase();
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
        {getTitleInitial(title)}
      </span>
    </div>
  );
}
