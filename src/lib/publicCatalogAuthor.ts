import type { AppLocale } from "./localeConfig";
import { getIntlLocale } from "./localeConfig";

const publicCatalogAuthorBioExcerptGraphemeLimit = 180;

export function getPublicCatalogAuthorBioExcerpt(
  bio: string | null,
  locale: AppLocale,
): string | null {
  if (bio === null) {
    return null;
  }

  const normalizedBio = bio.replace(/\s+/g, " ").trim();
  const segmenter = new Intl.Segmenter(getIntlLocale(locale), {
    granularity: "grapheme",
  });
  const graphemes = [...segmenter.segment(normalizedBio)].map(
    ({ segment }) => segment,
  );

  if (graphemes.length === 0) {
    return null;
  }

  if (graphemes.length <= publicCatalogAuthorBioExcerptGraphemeLimit) {
    return normalizedBio;
  }

  return `${graphemes
    .slice(0, publicCatalogAuthorBioExcerptGraphemeLimit - 1)
    .join("")
    .trimEnd()}…`;
}
