import { TrackedPublicCatalogInstallLink } from "@/components/TrackedPublicCatalogInstallLink";
import { TrackedPublicCatalogPackageLink } from "@/components/TrackedPublicCatalogPackageLink";
import type { BlogDeckResource } from "@/lib/blogDeckResource";
import type { AppLocale } from "@/lib/i18n";
import type { PublicCatalogInstallPlacement } from "@/lib/publicCatalogAnalytics";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";

interface BlogDeckCtaProps {
  readonly className: string;
  readonly locale: AppLocale;
  readonly placement: PublicCatalogInstallPlacement;
  readonly resource: BlogDeckResource;
}

export function BlogDeckCta({
  className,
  locale,
  placement,
  resource,
}: BlogDeckCtaProps): React.JSX.Element {
  const copy = getPublicCatalogUiCopy(locale);

  return (
    <aside
      className={className}
      data-blog-deck-resource={resource.packageSlug}
      data-testid={`blog-deck-${placement}`}
    >
      <h2 dir="auto">{resource.title}</h2>
      <p>{resource.cardCountLabel} · {resource.languageLabel}</p>
      <div>
        <TrackedPublicCatalogInstallLink
          className="blogDeckStudy"
          href={resource.studyHref}
          label={copy.installLabel}
          locale={locale}
          packageId={resource.packageId}
          placement={placement}
          testId={`blog-deck-${placement}-study`}
        />
        <TrackedPublicCatalogPackageLink
          className="blogDeckPreview"
          href={resource.previewHref}
          locale={locale}
          packageId={resource.packageId}
          packageSlug={resource.packageSlug}
          placement="related_deck"
          tabIndex={undefined}
          testId={`blog-deck-${placement}-preview`}
        >
          {copy.cardPreviewsHeading}
        </TrackedPublicCatalogPackageLink>
      </div>
      <p>{copy.installHelper}</p>
    </aside>
  );
}
