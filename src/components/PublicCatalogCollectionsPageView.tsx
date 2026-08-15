import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PublicCatalogCover } from "@/components/PublicCatalogCover";
import { PublicCatalogNavigation } from "@/components/PublicCatalogNavigation";
import { SiteFrame } from "@/components/SiteFrame";
import { StructuredDataScript } from "@/components/StructuredDataScript";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import { getPublicCatalogDestinationCopy } from "@/lib/publicCatalogDestinationCopy";
import { formatPublicCatalogPackageCount } from "@/lib/publicCatalogFormatting";
import {
  getPublicCatalogCollectionCoverMediaAsset,
  type PublicCatalogReadModel,
} from "@/lib/publicCatalogReadModel";
import {
  getPublicCatalogCollectionRoutePathname,
  getPublicCatalogLanguageRoutePathname,
  getPublicCatalogRootUrl,
  PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME,
} from "@/lib/publicCatalogUrls";
import { createPublicCatalogCollectionsJsonLd } from "@/lib/seo/publicCatalogStructuredData";
import styles from "@/app/catalog/destinations.module.css";

interface PublicCatalogCollectionsPageViewProps {
  readonly catalog: PublicCatalogReadModel;
  readonly locale: AppLocale;
}

export function PublicCatalogCollectionsPageView({
  catalog,
  locale,
}: PublicCatalogCollectionsPageViewProps): React.JSX.Element {
  const catalogCopy = getPublicCatalogUiCopy(locale);
  const copy = getPublicCatalogDestinationCopy(locale);
  const collections = [...catalog.collectionBySlug.values()];

  return (
    <SiteFrame locale={locale} routePathname={PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME}>
      <StructuredDataScript value={createPublicCatalogCollectionsJsonLd(catalog, locale)} />
      <div className={styles.container}>
        <header className={styles.panel}>
          <Breadcrumbs
            items={[
              {
                label: catalogCopy.breadcrumbLabel,
                href: getPublicCatalogRootUrl(locale),
              },
              {
                label: copy.collectionsTitle,
                href: getLocalizedPathname(locale, PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME),
              },
            ]}
            locale={locale}
          />
          <h1 className={styles.title}>{copy.collectionsTitle}</h1>
          <p className={styles.intro}>{copy.collectionsIntro}</p>
          <PublicCatalogNavigation currentSection="collections" locale={locale} />
        </header>
        <ul className={styles.collectionGrid}>
          {collections.map((collection) => {
            const packages = catalog.packagesByCollectionId.get(collection.collectionId) ?? [];
            const collectionHref = getLocalizedPathname(
              locale,
              getPublicCatalogCollectionRoutePathname(collection.slug),
            );

            return (
              <li className={styles.collectionCard} key={collection.collectionId}>
                <Link className={styles.collectionCoverLink} href={collectionHref} tabIndex={-1}>
                  <PublicCatalogCover
                    coverMediaAsset={getPublicCatalogCollectionCoverMediaAsset(
                      catalog,
                      collection,
                    )}
                    placeholderLabel={catalogCopy.coverPlaceholderLabel}
                    sizes="(max-width: 700px) calc(100vw - 56px), (max-width: 980px) calc(50vw - 38px), 390px"
                    title={collection.title}
                  />
                </Link>
                <div className={styles.collectionCardBody}>
                  <h2 className={styles.cardTitle}>
                    <Link className={styles.titleLink} href={collectionHref}>
                      {collection.title}
                    </Link>
                  </h2>
                  {collection.summary === "" ? null : (
                    <p className={styles.cardSummary}>{collection.summary}</p>
                  )}
                  <p className={styles.metadata}>
                    {formatPublicCatalogPackageCount(locale, packages.length, copy)}
                  </p>
                  <ul className={styles.facets}>
                    {collection.languageTags.map((languageTag) => (
                      <li key={`language:${languageTag}`}>
                        <Link
                          className={styles.facetLink}
                          href={getLocalizedPathname(
                            locale,
                            getPublicCatalogLanguageRoutePathname(languageTag),
                          )}
                        >
                          {languageTag}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </SiteFrame>
  );
}
