import { existsSync, readdirSync, writeFileSync } from "fs";
import { join } from "path";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "../src/lib/localeConfig";

const CONTENT_ROOT = join(process.cwd(), "src", "content");
const OUTPUT_PATH = join(
  process.cwd(),
  "src",
  "data",
  "generatedContentRegistry.ts"
);
const CANONICAL_DOC_SLUGS = [
  "getting-started",
  "self-hosting",
  "api",
  "architecture",
] as const;
const STRUCTURED_MARKETING_PAGE_SLUGS = [
  "home",
  "features",
  "pricing",
] as const;
const MARKDOWN_MARKETING_PAGE_SLUGS = [
  "privacy",
  "support",
  "terms",
] as const;

function getLocaleDirectory(locale: string): string {
  return join(CONTENT_ROOT, locale);
}

function getDocsDirectory(locale: string): string {
  return join(getLocaleDirectory(locale), "docs");
}

function getBlogDirectory(locale: string): string {
  return join(getLocaleDirectory(locale), "blog");
}

function getPagesDirectory(locale: string): string {
  return join(getLocaleDirectory(locale), "pages");
}

function listMarkdownSlugs(directoryPath: string): ReadonlyArray<string> {
  if (!existsSync(directoryPath)) {
    return [];
  }

  return readdirSync(directoryPath)
    .filter((entry) => entry.endsWith(".md"))
    .map((entry) => entry.replace(/\.md$/, ""))
    .sort((left, right) => left.localeCompare(right));
}

function getTranslatedDocSlugs(locale: string): ReadonlyArray<string> {
  return CANONICAL_DOC_SLUGS.filter((slug) =>
    existsSync(join(getDocsDirectory(locale), `${slug}.md`))
  );
}

function getTranslatedBlogSlugs(locale: string): ReadonlyArray<string> {
  return listMarkdownSlugs(getBlogDirectory(locale));
}

function getTranslatedMarketingPageSlugs(locale: string): ReadonlyArray<string> {
  const pagesDirectory = getPagesDirectory(locale);
  const structuredSlugs = STRUCTURED_MARKETING_PAGE_SLUGS.filter((slug) =>
    existsSync(join(pagesDirectory, `${slug}.ts`))
  );
  const markdownSlugs = MARKDOWN_MARKETING_PAGE_SLUGS.filter((slug) =>
    existsSync(join(pagesDirectory, slug, "index.md"))
  );

  return [...structuredSlugs, ...markdownSlugs];
}

function getMarketingRoutePathname(slug: string): string {
  if (slug === "home") {
    return "/";
  }

  return `/${slug}/`;
}

function getRoutePathnames(locale: string): ReadonlyArray<string> {
  const marketingRoutes = getTranslatedMarketingPageSlugs(locale).map(
    getMarketingRoutePathname
  );
  const docSlugs = getTranslatedDocSlugs(locale);
  const blogSlugs = getTranslatedBlogSlugs(locale);
  const docsRoutes =
    docSlugs.length === 0
      ? []
      : ["/docs/", ...docSlugs.map((slug) => `/docs/${slug}/`)];
  const blogRoutes =
    blogSlugs.length === 0
      ? []
      : ["/blog/", ...blogSlugs.map((slug) => `/blog/${slug}/`)];

  return [...marketingRoutes, ...docsRoutes, ...blogRoutes];
}

function formatRecord(entries: Readonly<Record<string, ReadonlyArray<string>>>): string {
  return JSON.stringify(entries, null, 2);
}

function main(): void {
  const defaultBlogSlugs = getTranslatedBlogSlugs(DEFAULT_LOCALE);
  const translatedDocSlugsByLocale = Object.fromEntries(
    SUPPORTED_LOCALES.map((locale) => [locale, getTranslatedDocSlugs(locale)])
  );
  const translatedBlogSlugsByLocale = Object.fromEntries(
    SUPPORTED_LOCALES.map((locale) => [locale, getTranslatedBlogSlugs(locale)])
  );
  const translatedRoutePathnamesByLocale = Object.fromEntries(
    SUPPORTED_LOCALES.map((locale) => [locale, getRoutePathnames(locale)])
  );
  const output = `import type { AppLocale } from "@/lib/localeConfig";

export const DOC_SLUGS = ${JSON.stringify(CANONICAL_DOC_SLUGS, null, 2)} as const;
export const BLOG_POST_SLUGS = ${JSON.stringify(defaultBlogSlugs, null, 2)} as const;

export const TRANSLATED_DOC_SLUGS_BY_LOCALE: Readonly<Record<AppLocale, ReadonlyArray<string>>> = ${formatRecord(
    translatedDocSlugsByLocale
  )} as const;

export const TRANSLATED_BLOG_POST_SLUGS_BY_LOCALE: Readonly<Record<AppLocale, ReadonlyArray<string>>> = ${formatRecord(
    translatedBlogSlugsByLocale
  )} as const;

export const TRANSLATED_ROUTE_PATHNAMES_BY_LOCALE: Readonly<Record<AppLocale, ReadonlyArray<string>>> = ${formatRecord(
    translatedRoutePathnamesByLocale
  )} as const;
`;

  writeFileSync(OUTPUT_PATH, output, "utf-8");
}

main();
