import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PublicCatalogPackageCard } from "@/components/PublicCatalogPackageCard";
import { SiteFrame } from "@/components/SiteFrame";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import type { PublicCatalogReadModel } from "@/lib/publicCatalogReadModel";
import { PUBLIC_CATALOG_ROUTE_PATHNAME } from "@/lib/publicCatalogUrls";
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
        </header>
        {catalog.packages.length === 0 ? (
          <p className={styles.empty} role="status">
            {copy.emptyLabel}
          </p>
        ) : (
          <section className={styles.grid} aria-label={copy.title}>
            {catalog.packages.map((packageView) => (
              <PublicCatalogPackageCard
                key={packageView.packageMetadata.packageId}
                copy={copy}
                locale={locale}
                packageView={packageView}
              />
            ))}
          </section>
        )}
      </div>
    </SiteFrame>
  );
}
