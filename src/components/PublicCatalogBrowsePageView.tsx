import { BreadcrumbStructuredData } from "@/components/BreadcrumbStructuredData";
import { PublicCatalogBrowser } from "@/components/PublicCatalogBrowser";
import { SiteFrame } from "@/components/SiteFrame";
import { MarketingHeading, getMarketingHeadingBadge } from "@/components/MarketingHeading";
import { StructuredDataScript } from "@/components/StructuredDataScript";
import type { AppLocale } from "@/lib/i18n";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import type { PublicCatalogReadModel } from "@/lib/publicCatalogReadModel";
import { createPublicCatalogBrowseData } from "@/lib/publicCatalogBrowse";
import {
  getPublicCatalogRootSearch,
  getPublicCatalogRootUrl,
  PUBLIC_CATALOG_ROUTE_PATHNAME,
} from "@/lib/publicCatalogUrls";
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
  const browseData = createPublicCatalogBrowseData(catalog, locale);

  return (
    <SiteFrame locale={locale} routePathname={PUBLIC_CATALOG_ROUTE_PATHNAME}>
      <StructuredDataScript value={createPublicCatalogRootJsonLd(catalog, locale)} />
      <div className={styles.container}>
        <BreadcrumbStructuredData
          items={[
            {
              label: copy.breadcrumbLabel,
              href: getPublicCatalogRootUrl(locale),
            },
          ]}
          locale={locale}
        />
        <PublicCatalogBrowser
          copy={copy}
          data={browseData}
          heading={<MarketingHeading badge={getMarketingHeadingBadge(locale, "catalog")} title={copy.title} />}
          initialSearch={getPublicCatalogRootSearch(locale)}
          locale={locale}
        />
      </div>
    </SiteFrame>
  );
}
