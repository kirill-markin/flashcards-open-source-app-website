import { BreadcrumbStructuredData } from "@/components/BreadcrumbStructuredData";
import { PublicCatalogNavigation } from "@/components/PublicCatalogNavigation";
import { PublicCatalogPackageCard } from "@/components/PublicCatalogPackageCard";
import { SiteFrame } from "@/components/SiteFrame";
import { StructuredDataScript } from "@/components/StructuredDataScript";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import {
  getPublicCatalogDestinationCopy,
  interpolatePublicCatalogCopy,
} from "@/lib/publicCatalogDestinationCopy";
import { formatPublicCatalogPackageCount } from "@/lib/publicCatalogFormatting";
import {
  getPublicCatalogLanguageNameInLocale,
  getPublicCatalogLanguageNames,
} from "@/lib/publicCatalogLanguageNames";
import type { PublicCatalogPackageView } from "@/lib/publicCatalogReadModel";
import {
  getPublicCatalogLanguageRoutePathname,
  getPublicCatalogRootUrl,
} from "@/lib/publicCatalogUrls";
import { createPublicCatalogFacetJsonLd } from "@/lib/seo/publicCatalogStructuredData";
import styles from "@/app/catalog/destinations.module.css";

interface PublicCatalogFacetPageViewProps {
  readonly locale: AppLocale;
  readonly packages: ReadonlyArray<PublicCatalogPackageView>;
  readonly tag: string;
}

export function PublicCatalogFacetPageView({
  locale,
  packages,
  tag,
}: PublicCatalogFacetPageViewProps): React.JSX.Element {
  const catalogCopy = getPublicCatalogUiCopy(locale);
  const copy = getPublicCatalogDestinationCopy(locale);
  const languageName = getPublicCatalogLanguageNameInLocale(tag, locale);
  const routePathname = getPublicCatalogLanguageRoutePathname(tag);
  const title = interpolatePublicCatalogCopy(
    copy.languageTitleTemplate,
    "tag",
    languageName,
  );
  const intro = interpolatePublicCatalogCopy(
    copy.languageIntroTemplate,
    "tag",
    languageName,
  );

  return (
    <SiteFrame locale={locale} routePathname={routePathname}>
      <StructuredDataScript
        value={createPublicCatalogFacetJsonLd(locale, packages, tag)}
      />
      <div className={styles.container}>
        <header className={styles.panel}>
          <BreadcrumbStructuredData
            items={[
              {
                label: catalogCopy.breadcrumbLabel,
                href: getPublicCatalogRootUrl(locale),
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
                  coverSizes="(max-width: 700px) calc(100vw - 60px), 440px"
                  languageNames={getPublicCatalogLanguageNames(
                    packageView.latestVersion.languageTags,
                  )}
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
