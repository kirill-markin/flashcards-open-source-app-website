import { existsSync, readdirSync } from "fs";
import { STRUCTURED_PAGE_CONTENT_BY_LOCALE } from "@/content/structuredPageModules";
import {
  getBlogDirectory,
  getDocsDirectory,
  getMarkdownMarketingPageFilePath,
} from "@/lib/content/paths";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  type AppLocale,
} from "@/lib/localeConfig";
import { DASHBOARDS_ROUTE_PATHNAME } from "@/lib/dashboardsPage";

type StructuredMarketingPageSlug = "home" | "features" | "pricing";
type MarkdownBackedMarketingPageSlug = "privacy" | "support" | "terms";
type MarketingPageSlug =
  | StructuredMarketingPageSlug
  | MarkdownBackedMarketingPageSlug;

const STRUCTURED_MARKETING_PAGE_SLUGS: ReadonlyArray<StructuredMarketingPageSlug> = [
  "home",
  "features",
  "pricing",
] as const;

const MARKDOWN_BACKED_MARKETING_PAGE_SLUGS: ReadonlyArray<MarkdownBackedMarketingPageSlug> = [
  "privacy",
  "support",
  "terms",
] as const;

const MARKETING_PAGE_SLUGS: ReadonlyArray<MarketingPageSlug> = [
  ...STRUCTURED_MARKETING_PAGE_SLUGS,
  ...MARKDOWN_BACKED_MARKETING_PAGE_SLUGS,
];
const STATIC_ROUTE_PATHNAMES: ReadonlyArray<string> = [
  DASHBOARDS_ROUTE_PATHNAME,
] as const;
const PREFERRED_DOC_SLUG_ORDER: ReadonlyArray<string> = [
  "getting-started",
  "self-hosting",
  "api",
  "architecture",
];

function buildLocaleRecord<T>(
  getValue: (locale: AppLocale) => T
): Readonly<Record<AppLocale, T>> {
  return Object.fromEntries(
    SUPPORTED_LOCALES.map((locale) => [locale, getValue(locale)])
  ) as Record<AppLocale, T>;
}

function listMarkdownSlugs(directoryPath: string): ReadonlyArray<string> {
  if (!existsSync(directoryPath)) {
    return [];
  }

  return readdirSync(directoryPath)
    .filter((entry) => entry.endsWith(".md"))
    .map((entry) => entry.replace(/\.md$/, ""))
    .sort((leftSlug, rightSlug) => leftSlug.localeCompare(rightSlug));
}

function orderCanonicalDocSlugs(
  docSlugs: ReadonlyArray<string>
): ReadonlyArray<string> {
  const availableDocSlugs = new Set(docSlugs);
  const preferredDocSlugs = PREFERRED_DOC_SLUG_ORDER.filter((slug) =>
    availableDocSlugs.has(slug)
  );
  const additionalDocSlugs = docSlugs.filter(
    (slug) => !PREFERRED_DOC_SLUG_ORDER.includes(slug)
  );

  return [...preferredDocSlugs, ...additionalDocSlugs];
}

function filterCanonicalSlugs(
  canonicalSlugs: ReadonlyArray<string>,
  localizedSlugs: ReadonlyArray<string>
): ReadonlyArray<string> {
  const localizedSlugSet = new Set(localizedSlugs);

  return canonicalSlugs.filter((slug) => localizedSlugSet.has(slug));
}

function getMarketingRoutePathname(slug: MarketingPageSlug): string {
  if (slug === "home") {
    return "/";
  }

  return `/${slug}/`;
}

function hasStructuredMarketingPageTranslation(
  slug: StructuredMarketingPageSlug,
  locale: AppLocale
): boolean {
  return STRUCTURED_PAGE_CONTENT_BY_LOCALE[locale][slug] !== undefined;
}

function hasMarkdownMarketingPageTranslation(
  slug: MarkdownBackedMarketingPageSlug,
  locale: AppLocale
): boolean {
  return existsSync(getMarkdownMarketingPageFilePath(locale, slug));
}

function hasMarketingPageTranslation(
  slug: MarketingPageSlug,
  locale: AppLocale
): boolean {
  if (STRUCTURED_MARKETING_PAGE_SLUGS.includes(slug as StructuredMarketingPageSlug)) {
    return hasStructuredMarketingPageTranslation(
      slug as StructuredMarketingPageSlug,
      locale
    );
  }

  return hasMarkdownMarketingPageTranslation(
    slug as MarkdownBackedMarketingPageSlug,
    locale
  );
}

function listTranslatedMarketingRoutePathnames(
  locale: AppLocale
): ReadonlyArray<string> {
  return MARKETING_PAGE_SLUGS.filter((slug) =>
    hasMarketingPageTranslation(slug, locale)
  ).map((slug) => getMarketingRoutePathname(slug));
}

function listTranslatedDocSlugs(locale: AppLocale): ReadonlyArray<string> {
  return filterCanonicalSlugs(
    DOC_SLUGS,
    listMarkdownSlugs(getDocsDirectory(locale))
  );
}

function listTranslatedBlogPostSlugs(locale: AppLocale): ReadonlyArray<string> {
  return filterCanonicalSlugs(
    BLOG_POST_SLUGS,
    listMarkdownSlugs(getBlogDirectory(locale))
  );
}

function listTranslatedContentRoutePathnames(
  contentSectionPathname: "/blog/" | "/docs/",
  slugs: ReadonlyArray<string>
): ReadonlyArray<string> {
  if (slugs.length === 0) {
    return [];
  }

  return [
    contentSectionPathname,
    ...slugs.map((slug) => `${contentSectionPathname}${slug}/`),
  ];
}

function listTranslatedRoutePathnames(locale: AppLocale): ReadonlyArray<string> {
  const translatedDocSlugs = listTranslatedDocSlugs(locale);
  const translatedBlogPostSlugs = listTranslatedBlogPostSlugs(locale);

  return [
    ...listTranslatedMarketingRoutePathnames(locale),
    ...STATIC_ROUTE_PATHNAMES,
    ...listTranslatedContentRoutePathnames("/docs/", translatedDocSlugs),
    ...listTranslatedContentRoutePathnames("/blog/", translatedBlogPostSlugs),
  ];
}

export const DOC_SLUGS: ReadonlyArray<string> = orderCanonicalDocSlugs(
  listMarkdownSlugs(getDocsDirectory(DEFAULT_LOCALE))
);

export const BLOG_POST_SLUGS: ReadonlyArray<string> = listMarkdownSlugs(
  getBlogDirectory(DEFAULT_LOCALE)
);

export const TRANSLATED_DOC_SLUGS_BY_LOCALE: Readonly<
  Record<AppLocale, ReadonlyArray<string>>
> = buildLocaleRecord(listTranslatedDocSlugs);

export const TRANSLATED_BLOG_POST_SLUGS_BY_LOCALE: Readonly<
  Record<AppLocale, ReadonlyArray<string>>
> = buildLocaleRecord(listTranslatedBlogPostSlugs);

export const TRANSLATED_ROUTE_PATHNAMES_BY_LOCALE: Readonly<
  Record<AppLocale, ReadonlyArray<string>>
> = buildLocaleRecord(listTranslatedRoutePathnames);
