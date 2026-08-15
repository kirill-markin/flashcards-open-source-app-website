import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PublicCatalogNavigation } from "@/components/PublicCatalogNavigation";
import { PublicCatalogPackageCard } from "@/components/PublicCatalogPackageCard";
import { SiteFrame } from "@/components/SiteFrame";
import { StructuredDataScript } from "@/components/StructuredDataScript";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import {
  getPublicCatalogDestinationCopy,
  interpolatePublicCatalogCopy,
} from "@/lib/publicCatalogDestinationCopy";
import { formatPublicCatalogPackageCount } from "@/lib/publicCatalogFormatting";
import type { PublicCatalogPackageView } from "@/lib/publicCatalogReadModel";
import type { PublicCatalogAuthor } from "@/lib/publicCatalogTypes";
import {
  getPublicCatalogAuthorRoutePathname,
  getPublicCatalogRootUrl,
  PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME,
} from "@/lib/publicCatalogUrls";
import { createPublicCatalogAuthorJsonLd } from "@/lib/seo/publicCatalogStructuredData";
import styles from "@/app/catalog/destinations.module.css";

interface PublicCatalogAuthorPageViewProps {
  readonly author: PublicCatalogAuthor;
  readonly locale: AppLocale;
  readonly packages: ReadonlyArray<PublicCatalogPackageView>;
}

export function PublicCatalogAuthorPageView({
  author,
  locale,
  packages,
}: PublicCatalogAuthorPageViewProps): React.JSX.Element {
  const catalogCopy = getPublicCatalogUiCopy(locale);
  const copy = getPublicCatalogDestinationCopy(locale);
  const routePathname = getPublicCatalogAuthorRoutePathname(author.slug);
  const packagesHeading = interpolatePublicCatalogCopy(
    copy.authorPackagesHeadingTemplate,
    "name",
    author.displayName,
  );

  return (
    <SiteFrame locale={locale} routePathname={routePathname}>
      <StructuredDataScript value={createPublicCatalogAuthorJsonLd(author, locale)} />
      <div className={styles.narrowContainer}>
        <header className={styles.panel}>
          <Breadcrumbs
            items={[
              {
                label: catalogCopy.breadcrumbLabel,
                href: getPublicCatalogRootUrl(locale),
              },
              {
                label: copy.authorsTitle,
                href: getLocalizedPathname(locale, PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME),
              },
              {
                label: author.displayName,
                href: getLocalizedPathname(locale, routePathname),
              },
            ]}
            locale={locale}
          />
          <h1 className={styles.title}>{author.displayName}</h1>
          {author.bio === null || author.bio.trim() === "" ? null : (
            <p className={styles.bio}>{author.bio}</p>
          )}
          {author.websiteUrl === null ? null : (
            <a
              className={styles.websiteLink}
              href={author.websiteUrl}
              {...getExternalLinkAttributes(author.websiteUrl)}
            >
              {copy.authorWebsiteLabel}
            </a>
          )}
          <PublicCatalogNavigation currentSection="authors" locale={locale} />
        </header>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{packagesHeading}</h2>
            <span className={styles.metadata}>
              {formatPublicCatalogPackageCount(locale, packages.length, copy)}
            </span>
          </div>
          {packages.length === 0 ? (
            <p className={styles.empty}>{copy.authorNoPackagesLabel}</p>
          ) : (
            <div className={styles.packageGrid}>
              {packages.map((packageView) => (
                <PublicCatalogPackageCard
                  key={packageView.packageMetadata.packageId}
                  copy={catalogCopy}
                  coverSizes="(max-width: 700px) calc(100vw - 60px), 440px"
                  locale={locale}
                  packageView={packageView}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </SiteFrame>
  );
}
