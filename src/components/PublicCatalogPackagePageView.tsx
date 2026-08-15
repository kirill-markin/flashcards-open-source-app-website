import Link from "next/link";
import { AncestorBreadcrumbs } from "@/components/Breadcrumbs";
import { PublicCatalogCover } from "@/components/PublicCatalogCover";
import { SiteFrame } from "@/components/SiteFrame";
import { StructuredDataScript } from "@/components/StructuredDataScript";
import { TrackedPublicCatalogInstallLink } from "@/components/TrackedPublicCatalogInstallLink";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import {
  getPublicCatalogUiCopy,
  interpolatePublicCatalogCardHeading,
} from "@/lib/publicCatalogCopy";
import { getPublicCatalogCardMediaDownloadUrls } from "@/lib/publicCatalogCardMedia";
import { getPublicCatalogDestinationCopy } from "@/lib/publicCatalogDestinationCopy";
import {
  formatPublicCatalogCardCount,
  formatPublicCatalogDate,
  formatPublicCatalogNumber,
} from "@/lib/publicCatalogFormatting";
import {
  renderPublicCatalogCardMarkdownToHtml,
  renderPublicCatalogDescriptionMarkdownToHtml,
} from "@/lib/publicCatalogMarkdownHtml";
import {
  getPublicCatalogPackageCardTags,
  type PublicCatalogCoverMediaAsset,
  type PublicCatalogPackageView,
} from "@/lib/publicCatalogReadModel";
import type { PublicCatalogCollection } from "@/lib/publicCatalogTypes";
import {
  getPublicCatalogAuthorRoutePathname,
  getPublicCatalogCollectionRoutePathname,
  getPublicCatalogLanguageRoutePathname,
  getPublicCatalogPackageRoutePathname,
  getPublicCatalogRootUrl,
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
}

interface PublicCatalogStudyCtaProps {
  readonly helper: string;
  readonly href: string;
  readonly label: string;
  readonly locale: AppLocale;
  readonly packageId: string;
  readonly versionNumber: number;
}

interface PublicCatalogCardListStudyCtaProps extends PublicCatalogStudyCtaProps {
  readonly cardCount: string;
  readonly coverMediaAsset: PublicCatalogCoverMediaAsset | null;
  readonly placeholderLabel: string;
  readonly title: string;
}

function PublicCatalogStudyCta({
  helper,
  href,
  label,
  locale,
  packageId,
  versionNumber,
}: PublicCatalogStudyCtaProps): React.JSX.Element {
  return (
    <div className={styles.ctaBlock}>
      <TrackedPublicCatalogInstallLink
        className={styles.installButton}
        href={href}
        label={label}
        locale={locale}
        packageId={packageId}
        versionNumber={versionNumber}
      />
      <p className={styles.installHelper}>{helper}</p>
    </div>
  );
}

function PublicCatalogCardListStudyCta({
  cardCount,
  coverMediaAsset,
  helper,
  href,
  label,
  locale,
  packageId,
  placeholderLabel,
  title,
  versionNumber,
}: PublicCatalogCardListStudyCtaProps): React.JSX.Element {
  return (
    <div className={styles.cardListCtaCard}>
      <div className={styles.cardListCtaCover}>
        <PublicCatalogCover
          coverMediaAsset={coverMediaAsset}
          placeholderLabel={placeholderLabel}
          sizes="(max-width: 700px) calc(100vw - 88px), 240px"
          title={title}
        />
      </div>
      <div className={styles.cardListCtaContent}>
        <p className={styles.cardListCtaMeta}>{cardCount}</p>
        <h3 className={styles.cardListCtaTitle}>{title}</h3>
        <PublicCatalogStudyCta
          helper={helper}
          href={href}
          label={label}
          locale={locale}
          packageId={packageId}
          versionNumber={versionNumber}
        />
      </div>
    </div>
  );
}

async function renderCards(
  locale: AppLocale,
  packageView: PublicCatalogPackageView,
): Promise<ReadonlyArray<RenderedCard>> {
  return Promise.all(
    packageView.cards.map(async (card): Promise<RenderedCard> => {
      const mediaDownloadUrls = getPublicCatalogCardMediaDownloadUrls(
        card,
        packageView.mediaAssets,
      );
      const cardContext =
        `Public catalog package version ${packageView.latestVersion.packageVersionId} card ${card.packageCardId}`;
      const [frontHtml, backHtml] = await Promise.all([
        renderPublicCatalogCardMarkdownToHtml(
          card.frontText,
          locale,
          mediaDownloadUrls,
          `${cardContext} frontText`,
        ),
        renderPublicCatalogCardMarkdownToHtml(
          card.backText,
          locale,
          mediaDownloadUrls,
          `${cardContext} backText`,
        ),
      ]);

      return {
        backHtml,
        frontHtml,
        packageCardId: card.packageCardId,
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
  const cardTags = getPublicCatalogPackageCardTags(packageView);
  const packageRoutePathname = getPublicCatalogPackageRoutePathname(
    packageMetadata.slug,
  );
  const [descriptionHtml, renderedCards] = await Promise.all([
    renderPublicCatalogDescriptionMarkdownToHtml(
      latestVersion.description,
      locale,
      `Public catalog package ${packageMetadata.packageId} description`,
    ),
    renderCards(locale, packageView),
  ]);
  const midpointCardCount =
    renderedCards.length >= 100 ? Math.ceil(renderedCards.length / 2) : null;
  const formattedCardCount = formatPublicCatalogCardCount(
    locale,
    latestVersion.cardCount,
    copy,
  );
  const studyCtaProps: PublicCatalogStudyCtaProps = {
    helper: copy.installHelper,
    href: latestVersion.installUrl,
    label: copy.installLabel,
    locale,
    packageId: packageMetadata.packageId,
    versionNumber: latestVersion.versionNumber,
  };
  const cardListStudyCtaProps: PublicCatalogCardListStudyCtaProps = {
    ...studyCtaProps,
    cardCount: formattedCardCount,
    coverMediaAsset,
    placeholderLabel: copy.coverPlaceholderLabel,
    title: latestVersion.title,
  };

  return (
    <SiteFrame locale={locale} routePathname={packageRoutePathname}>
      <article className={styles.container}>
        <StructuredDataScript
          value={createPublicCatalogPackageJsonLd(collections, locale, packageView)}
        />
        <section className={styles.packagePanel}>
          <AncestorBreadcrumbs
            ancestors={[
              {
                label: copy.breadcrumbLabel,
                href: getPublicCatalogRootUrl(locale),
              },
            ]}
            currentPage={{
              label: latestVersion.title,
              href: getLocalizedPathname(locale, packageRoutePathname),
            }}
            locale={locale}
          />
          <div className={styles.pageGrid}>
            <header className={styles.titleBlock}>
              <h1 className={styles.title}>{latestVersion.title}</h1>
              {latestVersion.summary === "" ? null : (
                <p className={styles.summary}>{latestVersion.summary}</p>
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
            </header>

            <aside className={styles.sideBlock}>
              <div className={styles.coverFrame}>
                <PublicCatalogCover
                  coverMediaAsset={coverMediaAsset}
                  placeholderLabel={copy.coverPlaceholderLabel}
                  sizes="(max-width: 700px) calc(100vw - 60px), 280px"
                  title={latestVersion.title}
                />
              </div>
              <PublicCatalogStudyCta {...studyCtaProps} />
              <section className={styles.deckDetails}>
                <h2>{copy.deckDetailsHeading}</h2>
                <dl className={styles.detailsList}>
                  <div className={styles.fact}>
                    <dt>{copy.cardsLabel}</dt>
                    <dd>{formattedCardCount}</dd>
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
                    <dt>{copy.lastUpdatedLabel}</dt>
                    <dd>
                      <time dateTime={latestVersion.updatedAt}>
                        {formatPublicCatalogDate(locale, latestVersion.updatedAt)}
                      </time>
                    </dd>
                  </div>
                  <div className={styles.fact}>
                    <dt>{copy.licenseLabel}</dt>
                    <dd>{latestVersion.license}</dd>
                  </div>
                  {latestVersion.languageTags.length === 0 ? null : (
                    <div className={styles.fact}>
                      <dt>{copy.languagesLabel}</dt>
                      <dd className={styles.facetList}>
                        {latestVersion.languageTags.map((languageTag) => (
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
                  {cardTags.length === 0 ? null : (
                    <div className={styles.fact}>
                      <dt>{copy.tagsLabel}</dt>
                      <dd>{cardTags.join(", ")}</dd>
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
              </section>
            </aside>

            <div className={styles.descriptionBlock}>
              {latestVersion.contentWarning === null ? null : (
                <aside className={styles.warning}>
                  <strong>{copy.contentWarningLabel}</strong>
                  <p>{latestVersion.contentWarning}</p>
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
          </div>
        </section>

        <section className={styles.cardsPanel}>
          <h2>{copy.cardPreviewsHeading}</h2>
          {renderedCards.length === 0 ? (
            <p className={styles.empty}>{copy.noCardPreviewsLabel}</p>
          ) : (
            <>
              <ol className={styles.cardList} role="list">
                {renderedCards.map((card, index) => {
                  const cardHeading = interpolatePublicCatalogCardHeading(
                    copy,
                    formatPublicCatalogNumber(locale, index + 1),
                  );

                  return (
                    <li key={card.packageCardId}>
                      <article className={styles.card}>
                        <h3 className={styles.cardHeading}>{cardHeading}</h3>
                        <div className={styles.cardSides}>
                          <div className={styles.cardSide}>
                            <p className={styles.cardSideLabel}>
                              {copy.cardFrontLabel}
                            </p>
                            <div
                              className={styles.markdown}
                              dangerouslySetInnerHTML={{ __html: card.frontHtml }}
                            />
                          </div>
                          <div className={styles.cardSide}>
                            <p className={styles.cardSideLabel}>
                              {copy.cardBackLabel}
                            </p>
                            <div
                              className={styles.markdown}
                              dangerouslySetInnerHTML={{ __html: card.backHtml }}
                            />
                          </div>
                        </div>
                      </article>
                      {index + 1 === midpointCardCount ? (
                        <div className={styles.cardListCta}>
                          <PublicCatalogCardListStudyCta
                            {...cardListStudyCtaProps}
                          />
                        </div>
                      ) : null}
                    </li>
                  );
                })}
              </ol>
              <div className={styles.cardListEndCta}>
                <PublicCatalogCardListStudyCta {...cardListStudyCtaProps} />
              </div>
            </>
          )}
        </section>
      </article>
    </SiteFrame>
  );
}
