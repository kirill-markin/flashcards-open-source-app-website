import { TrackedPublicCatalogPackageLink } from "@/components/TrackedPublicCatalogPackageLink";
import type { BlogDeckResource } from "@/lib/blogDeckResource";
import type { AppLocale } from "@/lib/i18n";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";

interface BlogDeckCtaProps {
  readonly className: string;
  readonly locale: AppLocale;
  readonly resource: BlogDeckResource;
}

export function BlogDeckCta({
  className,
  locale,
  resource,
}: BlogDeckCtaProps): React.JSX.Element {
  const copy = getPublicCatalogUiCopy(locale);

  return (
    <aside
      className={className}
      data-blog-deck-resource={resource.packageSlug}
      data-testid="blog-deck-top"
    >
      <h2 dir="auto">{resource.title}</h2>
      <p>{resource.cardCountLabel} · {resource.languageLabel}</p>
      <div>
        <TrackedPublicCatalogPackageLink
          className="blogDeckStudy"
          href={resource.packageHref}
          locale={locale}
          packageId={resource.packageId}
          packageSlug={resource.packageSlug}
          placement="related_deck"
          tabIndex={undefined}
          testId="blog-deck-top-study"
        >
          {copy.installLabel}
        </TrackedPublicCatalogPackageLink>
      </div>
    </aside>
  );
}
