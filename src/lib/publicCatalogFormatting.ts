import type { AppLocale } from "./localeConfig";
import { getIntlLocale } from "./localeConfig";
import type { PublicCatalogUiCopy } from "./publicCatalogCopy";
import type { PublicCatalogDestinationCopy } from "./publicCatalogDestinationCopy";
import type { PublicCatalogPackageVersion } from "./publicCatalogTypes";

export type PublicCatalogPackageAlignmentFact = Readonly<{
  label: string;
  value: string;
}>;

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

export function formatPublicCatalogPackageCount(
  locale: AppLocale,
  packageCount: number,
  copy: PublicCatalogDestinationCopy,
): string {
  const pluralCategory = new Intl.PluralRules(getIntlLocale(locale)).select(
    packageCount,
  );

  return copy.packageCountTemplates[pluralCategory].replace(
    "{count}",
    formatPublicCatalogNumber(locale, packageCount),
  );
}

export function formatPublicCatalogFacetTag(tag: string): string {
  return tag.normalize("NFC").trim();
}

// Single source of truth for the visible educational alignment rows shared by the
// package page and its generated Markdown. Only the labels are localized: the values
// stay verbatim in the language the deck author wrote them. A blank value counts as
// absent so that a visible row and the package JSON-LD alignment fields never disagree.
export function getPublicCatalogPackageAlignmentFacts(
  latestVersion: PublicCatalogPackageVersion,
  copy: PublicCatalogUiCopy,
): ReadonlyArray<PublicCatalogPackageAlignmentFact> {
  const candidates: ReadonlyArray<
    Readonly<{ label: string; value: string | null }>
  > = [
    { label: copy.subjectLabel, value: latestVersion.educationalSubject },
    { label: copy.levelLabel, value: latestVersion.educationalLevel },
  ];

  return candidates.flatMap<PublicCatalogPackageAlignmentFact>(({ label, value }) =>
    value === null || value.trim() === "" ? [] : [{ label, value }]);
}
