export const DOC_SLUGS: ReadonlyArray<string> = [
  "getting-started",
  "self-hosting",
  "api",
  "architecture",
] as const;

type ContentLocale = "en" | "es";

const TRANSLATED_DOC_SLUGS_BY_LOCALE: Readonly<
  Record<ContentLocale, ReadonlyArray<string>>
> = {
  en: DOC_SLUGS,
  es: DOC_SLUGS,
};

export function getTranslatedDocSlugs(
  locale: ContentLocale
): ReadonlyArray<string> {
  return TRANSLATED_DOC_SLUGS_BY_LOCALE[locale];
}

export function hasTranslatedDocSlug(
  locale: ContentLocale,
  slug: string
): boolean {
  return TRANSLATED_DOC_SLUGS_BY_LOCALE[locale].includes(slug);
}
