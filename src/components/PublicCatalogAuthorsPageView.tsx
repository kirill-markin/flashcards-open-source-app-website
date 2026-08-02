import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PublicCatalogNavigation } from "@/components/PublicCatalogNavigation";
import { SiteFrame } from "@/components/SiteFrame";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getPublicCatalogAuthorBioExcerpt } from "@/lib/publicCatalogAuthor";
import { getPublicCatalogDestinationCopy } from "@/lib/publicCatalogDestinationCopy";
import { formatPublicCatalogPackageCount } from "@/lib/publicCatalogFormatting";
import type { PublicCatalogReadModel } from "@/lib/publicCatalogReadModel";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import {
  getPublicCatalogAuthorRoutePathname,
  PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME,
  PUBLIC_CATALOG_ROUTE_PATHNAME,
} from "@/lib/publicCatalogUrls";
import styles from "@/app/catalog/destinations.module.css";

interface PublicCatalogAuthorsPageViewProps {
  readonly catalog: PublicCatalogReadModel;
  readonly locale: AppLocale;
}

export function PublicCatalogAuthorsPageView({
  catalog,
  locale,
}: PublicCatalogAuthorsPageViewProps): React.JSX.Element {
  const catalogCopy = getPublicCatalogUiCopy(locale);
  const copy = getPublicCatalogDestinationCopy(locale);
  const authors = [...catalog.authorBySlug.values()];

  return (
    <SiteFrame locale={locale} routePathname={PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME}>
      <div className={styles.container}>
        <header className={styles.panel}>
          <Breadcrumbs
            items={[
              {
                label: catalogCopy.breadcrumbLabel,
                href: getLocalizedPathname(locale, PUBLIC_CATALOG_ROUTE_PATHNAME),
              },
              {
                label: copy.authorsTitle,
                href: getLocalizedPathname(locale, PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME),
              },
            ]}
            locale={locale}
          />
          <h1 className={styles.title}>{copy.authorsTitle}</h1>
          <p className={styles.intro}>{copy.authorsIntro}</p>
          <PublicCatalogNavigation currentSection="authors" locale={locale} />
        </header>
        <ul className={styles.list}>
          {authors.map((author) => {
            const packages = catalog.packagesByAuthorId.get(author.authorId) ?? [];
            const bioExcerpt = getPublicCatalogAuthorBioExcerpt(author.bio, locale);

            return (
              <li className={styles.entityCard} key={author.authorId}>
                <h2 className={styles.cardTitle}>
                  <Link
                    className={styles.titleLink}
                    href={getLocalizedPathname(
                      locale,
                      getPublicCatalogAuthorRoutePathname(author.slug),
                    )}
                  >
                    {author.displayName}
                  </Link>
                </h2>
                {bioExcerpt === null ? null : (
                  <p className={styles.cardBio}>{bioExcerpt}</p>
                )}
                <p className={styles.metadata}>
                  {formatPublicCatalogPackageCount(locale, packages.length, copy)}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </SiteFrame>
  );
}
