import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PublicCatalogNavigation } from "@/components/PublicCatalogNavigation";
import { PublicCatalogPackageCard } from "@/components/PublicCatalogPackageCard";
import { SiteFrame } from "@/components/SiteFrame";
import { renderMarkdownToHtml } from "@/lib/content/renderMarkdownToHtml";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import { getPublicCatalogDestinationCopy } from "@/lib/publicCatalogDestinationCopy";
import {
  formatPublicCatalogDate,
  formatPublicCatalogPackageCount,
} from "@/lib/publicCatalogFormatting";
import type { PublicCatalogPackageView } from "@/lib/publicCatalogReadModel";
import type { PublicCatalogCollection } from "@/lib/publicCatalogTypes";
import {
  getPublicCatalogCollectionRoutePathname,
  getPublicCatalogLanguageRoutePathname,
  getPublicCatalogTopicRoutePathname,
  PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME,
  PUBLIC_CATALOG_ROUTE_PATHNAME,
} from "@/lib/publicCatalogUrls";
import styles from "@/app/catalog/destinations.module.css";

interface PublicCatalogCollectionPageViewProps {
  readonly collection: PublicCatalogCollection;
  readonly locale: AppLocale;
  readonly packages: ReadonlyArray<PublicCatalogPackageView>;
}

export async function PublicCatalogCollectionPageView({
  collection,
  locale,
  packages,
}: PublicCatalogCollectionPageViewProps): Promise<React.JSX.Element> {
  const catalogCopy = getPublicCatalogUiCopy(locale);
  const copy = getPublicCatalogDestinationCopy(locale);
  const routePathname = getPublicCatalogCollectionRoutePathname(collection.slug);
  const descriptionHtml = await renderMarkdownToHtml(collection.description, locale);

  return (
    <SiteFrame locale={locale} routePathname={routePathname}>
      <div className={styles.narrowContainer}>
        <header className={styles.panel}>
          <Breadcrumbs
            items={[
              {
                label: catalogCopy.breadcrumbLabel,
                href: getLocalizedPathname(locale, PUBLIC_CATALOG_ROUTE_PATHNAME),
              },
              {
                label: copy.collectionsTitle,
                href: getLocalizedPathname(locale, PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME),
              },
              {
                label: collection.title,
                href: getLocalizedPathname(locale, routePathname),
              },
            ]}
            locale={locale}
          />
          <h1 className={styles.title}>{collection.title}</h1>
          {collection.summary === "" ? null : (
            <p className={styles.summary}>{collection.summary}</p>
          )}
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
            {collection.topicTags.map((topicTag) => (
              <li key={`topic:${topicTag}`}>
                <Link
                  className={styles.facetLink}
                  href={getLocalizedPathname(
                    locale,
                    getPublicCatalogTopicRoutePathname(topicTag),
                  )}
                >
                  {topicTag}
                </Link>
              </li>
            ))}
          </ul>
          <p className={styles.metadata}>
            {catalogCopy.publishedLabel}: {" "}
            <time dateTime={collection.publishedAt}>
              {formatPublicCatalogDate(locale, collection.publishedAt)}
            </time>
          </p>
          <PublicCatalogNavigation currentSection="collections" locale={locale} />
        </header>
        {collection.description.trim() === "" ? null : (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{copy.collectionAboutHeading}</h2>
            <div
              className={styles.markdown}
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />
          </section>
        )}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{copy.collectionPackagesHeading}</h2>
            <span className={styles.metadata}>
              {formatPublicCatalogPackageCount(locale, packages.length, copy)}
            </span>
          </div>
          {packages.length === 0 ? (
            <p className={styles.empty}>{copy.collectionEmptyLabel}</p>
          ) : (
            <ol className={styles.orderedList}>
              {packages.map((packageView) => (
                <li key={packageView.packageMetadata.packageId}>
                  <PublicCatalogPackageCard
                    copy={catalogCopy}
                    locale={locale}
                    packageView={packageView}
                  />
                </li>
              ))}
            </ol>
          )}
        </section>
      </div>
    </SiteFrame>
  );
}
