import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PublicCatalogNavigation } from "@/components/PublicCatalogNavigation";
import { PublicCatalogPackageCard } from "@/components/PublicCatalogPackageCard";
import { SiteFrame } from "@/components/SiteFrame";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import {
  getPublicCatalogDestinationCopy,
  interpolatePublicCatalogCopy,
} from "@/lib/publicCatalogDestinationCopy";
import {
  formatPublicCatalogFacetTag,
  formatPublicCatalogPackageCount,
} from "@/lib/publicCatalogFormatting";
import type { PublicCatalogPackageView } from "@/lib/publicCatalogReadModel";
import {
  getPublicCatalogLanguageRoutePathname,
  getPublicCatalogTopicRoutePathname,
  PUBLIC_CATALOG_ROUTE_PATHNAME,
} from "@/lib/publicCatalogUrls";
import styles from "@/app/catalog/destinations.module.css";

interface PublicCatalogFacetPageViewProps {
  readonly facetKind: "language" | "topic";
  readonly locale: AppLocale;
  readonly packages: ReadonlyArray<PublicCatalogPackageView>;
  readonly tag: string;
}

export function PublicCatalogFacetPageView({
  facetKind,
  locale,
  packages,
  tag,
}: PublicCatalogFacetPageViewProps): React.JSX.Element {
  const catalogCopy = getPublicCatalogUiCopy(locale);
  const copy = getPublicCatalogDestinationCopy(locale);
  const displayTag = formatPublicCatalogFacetTag(tag);
  const routePathname = facetKind === "language"
    ? getPublicCatalogLanguageRoutePathname(tag)
    : getPublicCatalogTopicRoutePathname(tag);
  const titleTemplate = facetKind === "language"
    ? copy.languageTitleTemplate
    : copy.topicTitleTemplate;
  const introTemplate = facetKind === "language"
    ? copy.languageIntroTemplate
    : copy.topicIntroTemplate;
  const title = interpolatePublicCatalogCopy(titleTemplate, "tag", displayTag);
  const intro = interpolatePublicCatalogCopy(introTemplate, "tag", displayTag);

  return (
    <SiteFrame locale={locale} routePathname={routePathname}>
      <div className={styles.container}>
        <header className={styles.panel}>
          <Breadcrumbs
            items={[
              {
                label: catalogCopy.breadcrumbLabel,
                href: getLocalizedPathname(locale, PUBLIC_CATALOG_ROUTE_PATHNAME),
              },
              {
                label: title,
                href: getLocalizedPathname(locale, routePathname),
              },
            ]}
            locale={locale}
          />
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.intro}>{intro}</p>
          <p className={styles.metadata}>
            {formatPublicCatalogPackageCount(locale, packages.length, copy)}
          </p>
          <PublicCatalogNavigation currentSection={null} locale={locale} />
        </header>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{copy.facetPackagesHeading}</h2>
          {packages.length === 0 ? (
            <p className={styles.empty}>{catalogCopy.emptyLabel}</p>
          ) : (
            <div className={styles.packageGrid}>
              {packages.map((packageView) => (
                <PublicCatalogPackageCard
                  key={packageView.packageMetadata.packageId}
                  copy={catalogCopy}
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
