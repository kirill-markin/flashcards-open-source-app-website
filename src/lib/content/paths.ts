import { join } from "path";
import type { AppLocale } from "@/lib/i18n";

const CONTENT_ROOT_DIR = join(process.cwd(), "src/content");

type ContentSection = "blog" | "docs" | "pages";
type StructuredMarketingPageSlug = "features" | "home" | "pricing";
type MarkdownBackedPageSlug = "privacy" | "support" | "terms";

export function getLocaleContentDirectory(locale: AppLocale): string {
  return join(CONTENT_ROOT_DIR, locale);
}

export function getLocaleSectionDirectory(
  locale: AppLocale,
  section: ContentSection
): string {
  return join(getLocaleContentDirectory(locale), section);
}

export function getDocsDirectory(locale: AppLocale): string {
  return getLocaleSectionDirectory(locale, "docs");
}

export function getDocFilePath(locale: AppLocale, slug: string): string {
  return join(getDocsDirectory(locale), `${slug}.md`);
}

export function getBlogDirectory(locale: AppLocale): string {
  return getLocaleSectionDirectory(locale, "blog");
}

export function getBlogFilePath(locale: AppLocale, slug: string): string {
  return join(getBlogDirectory(locale), `${slug}.md`);
}

export function getStructuredMarketingPageFilePath(
  locale: AppLocale,
  slug: StructuredMarketingPageSlug
): string {
  return join(getLocaleSectionDirectory(locale, "pages"), `${slug}.ts`);
}

export function getMarkdownMarketingPageFilePath(
  locale: AppLocale,
  slug: MarkdownBackedPageSlug
): string {
  return join(getLocaleSectionDirectory(locale, "pages"), slug, "index.md");
}
