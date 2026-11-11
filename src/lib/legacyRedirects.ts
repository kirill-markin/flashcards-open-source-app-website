import { NON_DEFAULT_LOCALES, isNonDefaultLocale } from "./localeConfig";

const LEGACY_PATH_REPLACEMENTS: ReadonlyMap<string, string> = new Map([
  ["/features", ""],
  ["/catalog/packages/algebra-based-physics-1-flashcards", "/catalog/packages/ap-physics-1-flashcards"],
  ["/catalog/packages/advanced-high-school-chemistry-flashcards", "/catalog/packages/ap-chemistry-flashcards"],
  ["/catalog/packages/five-unit-psychology-course-review", "/catalog/packages/ap-psychology-flashcards"],
]);

// Next also serializes route regex sources without flags.
export const LOCALIZED_LEGACY_PATH_PATTERN = (
  `(?:${NON_DEFAULT_LOCALES.join("|")})(?:${[...LEGACY_PATH_REPLACEMENTS.keys()].join("|")})(?:\\.md)?/?$`
).replace(/[a-z]/g, (letter) => `[${letter}${letter.toUpperCase()}]`);

export function createUnprefixedLegacyRedirects(): Array<{
  source: string;
  destination: string;
  permanent: true;
}> {
  return Array.from(LEGACY_PATH_REPLACEMENTS).flatMap(([source, destination]) => [
    { source: `${source}/`, destination: `${destination}/`, permanent: true },
    { source: `${source}.md`, destination: `${destination || "/"}.md`, permanent: true },
  ]);
}

export function getLocalizedLegacyRedirectPathname(pathname: string): string | null {
  const match = /^\/([^/]+)(\/.+?)(\.md)?\/?$/i.exec(pathname);
  if (match === null) {
    return null;
  }

  const [, localePrefix, legacyPath, markdownSuffix] = match;
  const locale = localePrefix.toLowerCase();
  if (!isNonDefaultLocale(locale)) {
    return null;
  }

  const replacement = LEGACY_PATH_REPLACEMENTS.get(legacyPath.toLowerCase());
  return replacement === undefined ? null : `/${locale}${replacement}${markdownSuffix === undefined ? "/" : ".md"}`;
}
