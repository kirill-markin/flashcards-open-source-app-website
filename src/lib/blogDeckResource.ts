import { getAbsoluteUrl } from "./i18n";
import { getIntlLocale, type AppLocale } from "./localeConfig";
import { escapeMarkdownText, renderMarkdownLink } from "./markdownLinks";
import { getPublicCatalogUiCopy } from "./publicCatalogCopy";
import { formatPublicCatalogCardCount } from "./publicCatalogFormatting";
import {
  getPublicCatalogPackageBySlug,
  type PublicCatalogCoverMediaAsset,
  type PublicCatalogReadModel,
} from "./publicCatalogReadModel";
import { getPublicCatalogPackageLocalizedPathname } from "./publicCatalogUrls";

const PACKAGE_SLUG_BY_ARTICLE_SLUG: Readonly<Record<string, string>> = {
  "git-reset-restore-revert-practice": "git-commands-flashcards",
  "us-state-abbreviations": "us-state-abbreviations-flashcards",
};

export interface BlogDeckResource {
  readonly packageId: string;
  readonly packageSlug: string;
  readonly title: string;
  readonly summary: string;
  readonly coverMediaAsset: PublicCatalogCoverMediaAsset | null;
  readonly cardCountLabel: string;
  readonly languageLabel: string;
  readonly packageHref: string;
}

export function renderBlogDeckResourceMarkdown(
  resource: BlogDeckResource,
  locale: AppLocale,
): string {
  const copy = getPublicCatalogUiCopy(locale);
  const studyLink = renderMarkdownLink(
    copy.installLabel,
    getAbsoluteUrl(resource.packageHref),
    "Blog deck study link",
  );

  return [
    `**${escapeMarkdownText(resource.title)}**`,
    ...(resource.summary === "" ? [] : [escapeMarkdownText(resource.summary)]),
    escapeMarkdownText(`${resource.cardCountLabel} · ${resource.languageLabel}`),
    studyLink,
  ].join("\n\n");
}

export function resolveBlogDeckResource(
  slug: string,
  locale: AppLocale,
  catalog: PublicCatalogReadModel | null,
): BlogDeckResource | null {
  const packageSlug = PACKAGE_SLUG_BY_ARTICLE_SLUG[slug];

  if (packageSlug === undefined || catalog === null) {
    return null;
  }

  const packageView = getPublicCatalogPackageBySlug(catalog, packageSlug);

  if (packageView === undefined) {
    throw new Error(
      `Cannot resolve study resource for blog article ${slug}: published catalog package ${packageSlug} is missing. Restore the package or remove the article association.`,
    );
  }

  const { latestVersion, packageMetadata } = packageView;
  const copy = getPublicCatalogUiCopy(locale);
  const languageNames = new Intl.DisplayNames([getIntlLocale(locale)], {
    type: "language",
  });
  const languages = latestVersion.languageTags.map((languageTag) => {
    const name = languageNames.of(languageTag);

    if (name === undefined) {
      throw new Error(
        `Cannot name study resource language ${languageTag} for article ${slug} in locale ${locale}.`,
      );
    }

    return `${name} (${languageTag})`;
  });

  return {
    packageId: packageMetadata.packageId,
    packageSlug,
    title: latestVersion.title,
    summary: latestVersion.summary,
    coverMediaAsset: packageView.coverMediaAsset,
    cardCountLabel: formatPublicCatalogCardCount(locale, latestVersion.cardCount, copy),
    languageLabel: `${copy.languagesLabel}: ${languages.join(", ")}`,
    packageHref: getPublicCatalogPackageLocalizedPathname(locale, packageSlug),
  };
}
