import type { AppLocale } from "@/lib/localeConfig";
import {
  BLOG_POST_SLUGS,
  TRANSLATED_BLOG_POST_SLUGS_BY_LOCALE,
} from "@/data/generatedContentRegistry";

export { BLOG_POST_SLUGS };

export function getTranslatedBlogPostSlugs(
  locale: AppLocale
): ReadonlyArray<string> {
  return TRANSLATED_BLOG_POST_SLUGS_BY_LOCALE[locale];
}

export function hasTranslatedBlogPostSlug(
  locale: AppLocale,
  slug: string
): boolean {
  return TRANSLATED_BLOG_POST_SLUGS_BY_LOCALE[locale].includes(slug);
}
