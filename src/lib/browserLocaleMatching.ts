import type { AppLocale } from "@/lib/localeConfig";

const PRIMARY_LANGUAGE_LOCALES = [
  "ar",
  "de",
  "en",
  "es",
  "hi",
  "ja",
  "ru",
] as const;

type PrimaryLanguageLocale = (typeof PRIMARY_LANGUAGE_LOCALES)[number];

function getCanonicalLanguage(rawLanguage: string): string | null {
  try {
    return Intl.getCanonicalLocales(rawLanguage)[0] ?? null;
  } catch (error: unknown) {
    if (error instanceof RangeError) {
      return null;
    }

    throw error;
  }
}

function isPrimaryLanguageLocale(
  primaryLanguage: string
): primaryLanguage is PrimaryLanguageLocale {
  return PRIMARY_LANGUAGE_LOCALES.includes(
    primaryLanguage as PrimaryLanguageLocale
  );
}

function isSimplifiedChineseLanguage(canonicalLanguage: string): boolean {
  const subtags = canonicalLanguage.split("-");
  const primaryLanguage = subtags[0] ?? "";
  const scriptOrRegion = subtags[1] ?? "";

  if (primaryLanguage !== "zh") {
    return false;
  }

  return (
    scriptOrRegion === "" ||
    scriptOrRegion === "CN" ||
    scriptOrRegion === "Hans" ||
    scriptOrRegion === "SG"
  );
}

function getMatchedLocale(canonicalLanguage: string): AppLocale | null {
  const primaryLanguage = canonicalLanguage.split("-", 1)[0] ?? "";

  if (isPrimaryLanguageLocale(primaryLanguage)) {
    return primaryLanguage;
  }

  if (isSimplifiedChineseLanguage(canonicalLanguage)) {
    return "zh";
  }

  return null;
}

export function getBrowserMatchedLocale(
  browserLanguages: ReadonlyArray<string>,
  availableLocales: ReadonlyArray<AppLocale>,
  currentLocale: AppLocale
): AppLocale | null {
  const availableLocaleSet: ReadonlySet<AppLocale> = new Set<AppLocale>(
    availableLocales
  );

  for (const rawLanguage of browserLanguages) {
    const canonicalLanguage = getCanonicalLanguage(rawLanguage);

    if (canonicalLanguage === null) {
      continue;
    }

    const matchedLocale = getMatchedLocale(canonicalLanguage);

    if (
      matchedLocale !== null &&
      matchedLocale !== currentLocale &&
      availableLocaleSet.has(matchedLocale)
    ) {
      return matchedLocale;
    }
  }

  return null;
}
