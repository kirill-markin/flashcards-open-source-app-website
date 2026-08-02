import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PublicCatalogCover } from "@/components/PublicCatalogCover";
import { PublicCatalogNavigation } from "@/components/PublicCatalogNavigation";
import { SiteFrame } from "@/components/SiteFrame";
import { StructuredDataScript } from "@/components/StructuredDataScript";
import { renderMarkdownToHtml } from "@/lib/content/renderMarkdownToHtml";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import { getPublicCatalogDestinationCopy } from "@/lib/publicCatalogDestinationCopy";
import {
  formatPublicCatalogCardCount,
  formatPublicCatalogDate,
  formatPublicCatalogNumber,
} from "@/lib/publicCatalogFormatting";
import type { PublicCatalogPackageView } from "@/lib/publicCatalogReadModel";
import type { PublicCatalogCollection } from "@/lib/publicCatalogTypes";
import {
  getPublicCatalogAuthorRoutePathname,
  getPublicCatalogCollectionRoutePathname,
  getPublicCatalogLanguageRoutePathname,
  getPublicCatalogPackageRoutePathname,
  getPublicCatalogTopicRoutePathname,
  PUBLIC_CATALOG_ROUTE_PATHNAME,
} from "@/lib/publicCatalogUrls";
import { createPublicCatalogPackageJsonLd } from "@/lib/seo/publicCatalogStructuredData";
import styles from "@/app/catalog/packages/[packageSlug]/page.module.css";

interface PublicCatalogPackagePageViewProps {
  readonly collections: ReadonlyArray<PublicCatalogCollection>;
  readonly locale: AppLocale;
  readonly packageView: PublicCatalogPackageView;
}

interface RenderedCard {
  readonly backHtml: string;
  readonly frontHtml: string;
  readonly packageCardId: string;
  readonly tags: ReadonlyArray<string>;
}

async function renderCards(
  locale: AppLocale,
  packageView: PublicCatalogPackageView,
): Promise<ReadonlyArray<RenderedCard>> {
  return Promise.all(
    packageView.cards.map(async (card): Promise<RenderedCard> => {
      const [frontHtml, backHtml] = await Promise.all([
        renderMarkdownToHtml(card.frontText, locale),
        renderMarkdownToHtml(card.backText, locale),
      ]);

      return {
        backHtml,
        frontHtml,
        packageCardId: card.packageCardId,
        tags: card.tags,
      };
    }),
  );
}

export async function PublicCatalogPackagePageView({
  collections,
  locale,
  packageView,
}: PublicCatalogPackagePageViewProps): Promise<React.JSX.Element> {
  const copy = getPublicCatalogUiCopy(locale);
  const destinationCopy = getPublicCatalogDestinationCopy(locale);
  const { author, coverMediaAsset, latestVersion, packageMetadata } = packageView;
  const packageRoutePathname = getPublicCatalogPackageRoutePathname(
    packageMetadata.slug,
  );
  const [descriptionHtml, renderedCards] = await Promise.all([
    renderMarkdownToHtml(packageMetadata.description, locale),
    renderCards(locale, packageView),
  ]);
  const installLinkAttributes = getExternalLinkAttributes(
    latestVersion.installUrl,
  );

  return (
    <SiteFrame locale={locale} routePathname={packageRoutePathname}>
      <article className={styles.container}>
        <StructuredDataScript
          value={createPublicCatalogPackageJsonLd(collections, locale, packageView)}
        />
        <section className={styles.packagePanel}>
          <header className={styles.intro}>
            <Breadcrumbs
              items={[
                {
                  label: copy.breadcrumbLabel,
                  href: getLocalizedPathname(
                    locale,
                    PUBLIC_CATALOG_ROUTE_PATHNAME,
                  ),
                },
                {
                  label: packageMetadata.title,
                  href: getLocalizedPathname(locale, packageRoutePathname),
                },
              ]}
              locale={locale}
            />
            <PublicCatalogNavigation currentSection="packages" locale={locale} />
            <div className={styles.hero}>
              <div className={styles.coverColumn}>
                <PublicCatalogCover
                  coverMediaAsset={coverMediaAsset}
                  placeholderLabel={copy.coverPlaceholderLabel}
                  title={packageMetadata.title}
                />
              </div>
              <div className={styles.heroContent}>
                <h1 className={styles.title}>{packageMetadata.title}</h1>
                {packageMetadata.summary === "" ? null : (
                  <p className={styles.summary}>{packageMetadata.summary}</p>
                )}
                <p className={styles.byline}>
                  {copy.byLabel}{" "}
                  <Link
                    href={getLocalizedPathname(
                      locale,
                      getPublicCatalogAuthorRoutePathname(author.slug),
                    )}
                  >
                    {author.displayName}
                  </Link>
                </p>
                <a
                  className={styles.installButton}
                  href={latestVersion.installUrl}
                  {...installLinkAttributes}
                >
                  {copy.installLabel}
                </a>
              </div>
            </div>
          </header>

          <div className={styles.details}>
            <dl className={styles.factGrid}>
              <div className={styles.fact}>
                <dt>{copy.cardsLabel}</dt>
                <dd>
                  {formatPublicCatalogCardCount(
                    locale,
                    latestVersion.cardCount,
                    copy,
                  )}
                </dd>
              </div>
              <div className={styles.fact}>
                <dt>{copy.versionLabel}</dt>
                <dd>
                  {formatPublicCatalogNumber(
                    locale,
                    latestVersion.versionNumber,
                  )}
                </dd>
              </div>
              <div className={styles.fact}>
                <dt>{copy.publishedLabel}</dt>
                <dd>
                  <time dateTime={packageMetadata.publishedAt}>
                    {formatPublicCatalogDate(
                      locale,
                      packageMetadata.publishedAt,
                    )}
                  </time>
                </dd>
              </div>
              <div className={styles.fact}>
                <dt>{copy.licenseLabel}</dt>
                <dd>{packageMetadata.license}</dd>
              </div>
              {packageMetadata.languageTags.length === 0 ? null : (
                <div className={styles.fact}>
                  <dt>{copy.languagesLabel}</dt>
                  <dd className={styles.facetList}>
                    {packageMetadata.languageTags.map((languageTag) => (
                      <Link
                        key={languageTag}
                        href={getLocalizedPathname(
                          locale,
                          getPublicCatalogLanguageRoutePathname(languageTag),
                        )}
                      >
                        {languageTag}
                      </Link>
                    ))}
                  </dd>
                </div>
              )}
              {packageMetadata.topicTags.length === 0 ? null : (
                <div className={styles.fact}>
                  <dt>{copy.topicsLabel}</dt>
                  <dd className={styles.facetList}>
                    {packageMetadata.topicTags.map((topicTag) => (
                      <Link
                        key={topicTag}
                        href={getLocalizedPathname(
                          locale,
                          getPublicCatalogTopicRoutePathname(topicTag),
                        )}
                      >
                        {topicTag}
                      </Link>
                    ))}
                  </dd>
                </div>
              )}
              {collections.length === 0 ? null : (
                <div className={styles.fact}>
                  <dt>{destinationCopy.collectionsContainingLabel}</dt>
                  <dd className={styles.facetList}>
                    {collections.map((collection) => (
                      <Link
                        key={collection.collectionId}
                        href={getLocalizedPathname(
                          locale,
                          getPublicCatalogCollectionRoutePathname(collection.slug),
                        )}
                      >
                        {collection.title}
                      </Link>
                    ))}
                  </dd>
                </div>
              )}
            </dl>

            {packageMetadata.contentWarning === null ? null : (
              <aside className={styles.warning}>
                <strong>{copy.contentWarningLabel}</strong>
                <p>{packageMetadata.contentWarning}</p>
              </aside>
            )}

            <section className={styles.descriptionSection}>
              <h2>{copy.descriptionHeading}</h2>
              <div
                className={styles.markdown}
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
              />
            </section>
          </div>
        </section>

        <section className={styles.cardsPanel}>
          <h2>{copy.cardPreviewsHeading}</h2>
          {renderedCards.length === 0 ? (
            <p className={styles.empty}>{copy.noCardPreviewsLabel}</p>
          ) : (
            <ol className={styles.cardList}>
              {renderedCards.map((card, index) => (
                <li key={card.packageCardId} className={styles.card}>
                  <span className={styles.cardNumber} aria-hidden="true">
                    {formatPublicCatalogNumber(locale, index + 1)}
                  </span>
                  <div className={styles.cardSide}>
                    <h3>{copy.cardFrontLabel}</h3>
                    <div
                      className={styles.markdown}
                      dangerouslySetInnerHTML={{ __html: card.frontHtml }}
                    />
                  </div>
                  <div className={styles.cardSide}>
                    <h3>{copy.cardBackLabel}</h3>
                    <div
                      className={styles.markdown}
                      dangerouslySetInnerHTML={{ __html: card.backHtml }}
                    />
                  </div>
                  {card.tags.length === 0 ? null : (
                    <div className={styles.tags}>
                      <span>{copy.tagsLabel}</span>
                      <ul>
                        {card.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          )}
        </section>
      </article>
    </SiteFrame>
  );
}
