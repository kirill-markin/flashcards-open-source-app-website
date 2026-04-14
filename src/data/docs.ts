import type { AppLocale } from "@/lib/localeConfig";
import {
  DOC_SLUGS,
  TRANSLATED_DOC_SLUGS_BY_LOCALE,
} from "@/data/contentRegistry";

export { DOC_SLUGS };

export function getTranslatedDocSlugs(
  locale: AppLocale
): ReadonlyArray<string> {
  return TRANSLATED_DOC_SLUGS_BY_LOCALE[locale];
}

export function hasTranslatedDocSlug(
  locale: AppLocale,
  slug: string
): boolean {
  return TRANSLATED_DOC_SLUGS_BY_LOCALE[locale].includes(slug);
}
