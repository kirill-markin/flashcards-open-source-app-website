import { PublicCatalogCover } from "@/components/PublicCatalogCover";
import { TrackedPublicCatalogPackageLink } from "@/components/TrackedPublicCatalogPackageLink";
import type { BlogCtaPlacement } from "@/components/TrackedBlogCtaLink";
import type { BlogDeckResource } from "@/lib/blogDeckResource";
import type { AppLocale } from "@/lib/i18n";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import styles from "./BlogDeckCta.module.css";

interface BlogDeckCtaProps {
  readonly locale: AppLocale;
  readonly placement: BlogCtaPlacement;
  readonly resource: BlogDeckResource;
}

export function BlogDeckCta({
  locale,
  placement,
  resource,
}: BlogDeckCtaProps): React.JSX.Element {
  const copy = getPublicCatalogUiCopy(locale);
  const isCompact = placement === "article_start_side";

  return (
    <aside
      className={`${styles.panel} ${isCompact ? styles.compactSide : styles.full}`}
      data-blog-deck-resource={resource.packageSlug}
      data-testid={`blog-deck-${placement}`}
    >
      <PublicCatalogCover
        coverMediaAsset={resource.coverMediaAsset}
        placeholderLabel={copy.coverPlaceholderLabel}
        sizes={isCompact ? "220px" : "(max-width: 768px) 90vw, 420px"}
        title={resource.title}
      />
      <div className={styles.body}>
        <h2 className={styles.heading} dir="auto">
          {resource.title}
        </h2>
        {resource.summary === "" ? null : (
          <p className={styles.summary} dir="auto">
            {resource.summary}
          </p>
        )}
        <p className={styles.facts}>
          {resource.cardCountLabel} · {resource.languageLabel}
        </p>
        <TrackedPublicCatalogPackageLink
          className={styles.study}
          href={resource.packageHref}
          locale={locale}
          packageId={resource.packageId}
          packageSlug={resource.packageSlug}
          placement={placement}
          tabIndex={undefined}
          testId={`blog-deck-${placement}-study`}
        >
          {copy.installLabel}
        </TrackedPublicCatalogPackageLink>
      </div>
    </aside>
  );
}
