import { join } from "path";
import type { AppLocale } from "@/lib/i18n";

const CONTENT_ROOT_DIR = join(process.cwd(), "src/content");

type StructuredMarketingPageSlug = "features" | "home" | "pricing";
type MarkdownBackedPageSlug = "privacy" | "support" | "terms";

function getPagesDirectory(locale: AppLocale): string {
  return join(CONTENT_ROOT_DIR, locale, "pages");
}

export function getDocsDirectory(locale: AppLocale): string {
  return join(CONTENT_ROOT_DIR, locale, "docs");
}

export function getDocFilePath(locale: AppLocale, slug: string): string {
  return join(getDocsDirectory(locale), `${slug}.md`);
}

export function getBlogDirectory(locale: AppLocale): string {
  return join(CONTENT_ROOT_DIR, locale, "blog");
}

export function getBlogFilePath(locale: AppLocale, slug: string): string {
  return join(getBlogDirectory(locale), `${slug}.md`);
}

export function getStructuredMarketingPageFilePath(
  locale: AppLocale,
  slug: StructuredMarketingPageSlug
): string {
  return join(getPagesDirectory(locale), `${slug}.ts`);
}

export function getMarkdownMarketingPageFilePath(
  locale: AppLocale,
  slug: MarkdownBackedPageSlug
): string {
  return join(getPagesDirectory(locale), slug, "index.md");
}
