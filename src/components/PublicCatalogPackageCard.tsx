import Link from "next/link";
import { PublicCatalogCover } from "@/components/PublicCatalogCover";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import type { PublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import { formatPublicCatalogCardCount } from "@/lib/publicCatalogFormatting";
import type { PublicCatalogPackageCardView } from "@/lib/publicCatalogReadModel";
import {
  getPublicCatalogAuthorRoutePathname,
  getPublicCatalogLanguageRoutePathname,
  getPublicCatalogPackageRoutePathname,
  getPublicCatalogTopicRoutePathname,
} from "@/lib/publicCatalogUrls";
import styles from "./PublicCatalogPackageCard.module.css";

interface PublicCatalogPackageCardProps {
  readonly copy: PublicCatalogUiCopy;
  readonly locale: AppLocale;
  readonly packageView: PublicCatalogPackageCardView;
}

export function PublicCatalogPackageCard({
  copy,
  locale,
  packageView,
}: PublicCatalogPackageCardProps): React.JSX.Element {
  const { author, coverMediaAsset, latestVersion, packageMetadata } = packageView;
  const packageHref = getLocalizedPathname(
    locale,
    getPublicCatalogPackageRoutePathname(packageMetadata.slug),
  );
  const authorHref = getLocalizedPathname(
    locale,
    getPublicCatalogAuthorRoutePathname(author.slug),
  );

  return (
    <article className={styles.card}>
      <Link className={styles.coverLink} href={packageHref} tabIndex={-1}>
        <PublicCatalogCover
          coverMediaAsset={coverMediaAsset}
          placeholderLabel={copy.coverPlaceholderLabel}
          title={packageMetadata.title}
        />
      </Link>
      <div className={styles.body}>
        <header className={styles.heading}>
          <h2 className={styles.title}>
            <Link className={styles.titleLink} href={packageHref}>
              {packageMetadata.title}
            </Link>
          </h2>
          <p className={styles.byline}>
            {copy.byLabel}{" "}
            <Link className={styles.authorLink} href={authorHref}>
              {author.displayName}
            </Link>
          </p>
        </header>
        {packageMetadata.summary === "" ? null : (
          <p className={styles.summary}>{packageMetadata.summary}</p>
        )}
        <ul className={styles.facts}>
          <li className={styles.fact}>
            {formatPublicCatalogCardCount(
              locale,
              latestVersion.cardCount,
              copy,
            )}
          </li>
          {packageMetadata.languageTags.map((languageTag) => (
            <li key={languageTag}>
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
          {packageMetadata.topicTags.map((topicTag) => (
            <li key={topicTag}>
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
          <li className={styles.fact}>{packageMetadata.license}</li>
        </ul>
      </div>
    </article>
  );
}
