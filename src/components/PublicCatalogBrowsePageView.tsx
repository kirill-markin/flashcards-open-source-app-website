import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PublicCatalogBrowser } from "@/components/PublicCatalogBrowser";
import { PublicCatalogNavigation } from "@/components/PublicCatalogNavigation";
import { SiteFrame } from "@/components/SiteFrame";
import { StructuredDataScript } from "@/components/StructuredDataScript";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import type { PublicCatalogReadModel } from "@/lib/publicCatalogReadModel";
import { createPublicCatalogBrowseData } from "@/lib/publicCatalogBrowse";
import { PUBLIC_CATALOG_ROUTE_PATHNAME } from "@/lib/publicCatalogUrls";
import { createPublicCatalogRootJsonLd } from "@/lib/seo/publicCatalogStructuredData";
import styles from "@/app/catalog/page.module.css";

interface PublicCatalogBrowsePageViewProps {
  readonly catalog: PublicCatalogReadModel;
  readonly locale: AppLocale;
}

export function PublicCatalogBrowsePageView({
  catalog,
  locale,
}: PublicCatalogBrowsePageViewProps): React.JSX.Element {
  const copy = getPublicCatalogUiCopy(locale);

  return (
    <SiteFrame locale={locale} routePathname={PUBLIC_CATALOG_ROUTE_PATHNAME}>
      <StructuredDataScript value={createPublicCatalogRootJsonLd(catalog, locale)} />
      <div className={styles.container}>
        <header className={styles.introPanel}>
          <Breadcrumbs
            items={[
              {
                label: copy.breadcrumbLabel,
                href: getLocalizedPathname(locale, PUBLIC_CATALOG_ROUTE_PATHNAME),
              },
            ]}
            locale={locale}
          />
          <h1 className={styles.title}>{copy.title}</h1>
          <p className={styles.intro}>{copy.intro}</p>
          <PublicCatalogNavigation currentSection="packages" locale={locale} />
        </header>
        {catalog.packages.length === 0 ? (
          <p className={styles.empty} role="status">
            {copy.emptyLabel}
          </p>
        ) : (
          <PublicCatalogBrowser
            copy={copy}
            data={createPublicCatalogBrowseData(catalog)}
            locale={locale}
          />
        )}
      </div>
    </SiteFrame>
  );
}
