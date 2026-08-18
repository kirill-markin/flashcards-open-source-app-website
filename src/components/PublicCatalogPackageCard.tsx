import Link from "next/link";
import { PublicCatalogCover } from "@/components/PublicCatalogCover";
import { TrackedPublicCatalogPackageLink } from "@/components/TrackedPublicCatalogPackageLink";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import type { PublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import { formatPublicCatalogCardCount } from "@/lib/publicCatalogFormatting";
import type { PublicCatalogPackageCardView } from "@/lib/publicCatalogReadModel";
import {
  getPublicCatalogAuthorRoutePathname,
  getPublicCatalogLanguageRoutePathname,
  getPublicCatalogPackageLocalizedPathname,
} from "@/lib/publicCatalogUrls";
import styles from "./PublicCatalogPackageCard.module.css";

interface PublicCatalogPackageCardProps {
  readonly copy: PublicCatalogUiCopy;
  readonly coverSizes: string;
  readonly locale: AppLocale;
  readonly packageView: PublicCatalogPackageCardView;
}

export function PublicCatalogPackageCard({
  copy,
  coverSizes,
  locale,
  packageView,
}: PublicCatalogPackageCardProps): React.JSX.Element {
  const { author, coverMediaAsset, latestVersion, packageMetadata } = packageView;
  const packageHref = getPublicCatalogPackageLocalizedPathname(
    locale,
    packageMetadata.slug,
    latestVersion.languageTags,
  );
  const authorHref = getLocalizedPathname(
    locale,
    getPublicCatalogAuthorRoutePathname(author.slug),
  );

  return (
    <article className={styles.card}>
      <TrackedPublicCatalogPackageLink
        className={styles.coverLink}
        href={packageHref}
        locale={locale}
        packageId={packageMetadata.packageId}
        placement="card_cover"
        tabIndex={-1}
      >
        <PublicCatalogCover
          coverMediaAsset={coverMediaAsset}
          placeholderLabel={copy.coverPlaceholderLabel}
          sizes={coverSizes}
          title={latestVersion.title}
        />
      </TrackedPublicCatalogPackageLink>
      <div className={styles.body}>
        <header className={styles.heading}>
          <h2 className={styles.title}>
            <TrackedPublicCatalogPackageLink
              className={styles.titleLink}
              href={packageHref}
              locale={locale}
              packageId={packageMetadata.packageId}
              placement="card_title"
              tabIndex={undefined}
            >
              {latestVersion.title}
            </TrackedPublicCatalogPackageLink>
          </h2>
          <p className={styles.byline}>
            {copy.byLabel}{" "}
            <Link className={styles.authorLink} href={authorHref}>
              {author.displayName}
            </Link>
          </p>
        </header>
        {latestVersion.summary === "" ? null : (
          <p className={styles.summary}>{latestVersion.summary}</p>
        )}
        <ul className={styles.facts}>
          <li className={styles.fact}>
            {formatPublicCatalogCardCount(
              locale,
              latestVersion.cardCount,
              copy,
            )}
          </li>
          {latestVersion.languageTags.map((languageTag) => (
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
        </ul>
      </div>
    </article>
  );
}
