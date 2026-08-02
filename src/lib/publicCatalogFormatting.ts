import type { AppLocale } from "./localeConfig";
import { getIntlLocale } from "./localeConfig";
import type { PublicCatalogUiCopy } from "./publicCatalogCopy";

export function formatPublicCatalogNumber(
  locale: AppLocale,
  value: number,
): string {
  return new Intl.NumberFormat(getIntlLocale(locale)).format(value);
}

export function formatPublicCatalogDate(
  locale: AppLocale,
  timestamp: string,
): string {
  return new Intl.DateTimeFormat(getIntlLocale(locale), {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(timestamp));
}

export function formatPublicCatalogCardCount(
  locale: AppLocale,
  cardCount: number,
  copy: PublicCatalogUiCopy,
): string {
  const pluralCategory = new Intl.PluralRules(getIntlLocale(locale)).select(
    cardCount,
  );
  const formattedCardCount = formatPublicCatalogNumber(locale, cardCount);

  return copy.cardCountTemplates[pluralCategory].replace(
    "{count}",
    formattedCardCount,
  );
}
