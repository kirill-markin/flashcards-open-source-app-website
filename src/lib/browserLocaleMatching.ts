import type { AppLocale } from "@/lib/localeConfig";

const PRIMARY_LANGUAGE_LOCALES = [
  "ar",
  "bg",
  "bn",
  "ca",
  "cs",
  "da",
  "de",
  "el",
  "en",
  "es",
  "et",
  "fa",
  "fi",
  "fr",
  "gu",
  "he",
  "hi",
  "hr",
  "hu",
  "id",
  "is",
  "it",
  "ja",
  "kn",
  "ko",
  "lt",
  "lv",
  "ml",
  "mr",
  "nb",
  "nl",
  "pa",
  "pl",
  "pt",
  "ro",
  "ru",
  "sk",
  "sl",
  "sv",
  "sw",
  "ta",
  "te",
  "th",
  "tr",
  "uk",
  "ur",
  "vi",
  "zu",
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

function getBrowserLocaleMatch(
  browserLanguages: ReadonlyArray<string>,
  availableLocales: ReadonlyArray<AppLocale>,
  excludedLocale: AppLocale | null
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
      matchedLocale !== excludedLocale &&
      availableLocaleSet.has(matchedLocale)
    ) {
      return matchedLocale;
    }
  }

  return null;
}

export function getBrowserPreferredLocale(
  browserLanguages: ReadonlyArray<string>,
  availableLocales: ReadonlyArray<AppLocale>
): AppLocale | null {
  return getBrowserLocaleMatch(browserLanguages, availableLocales, null);
}

export function getBrowserMatchedLocale(
  browserLanguages: ReadonlyArray<string>,
  availableLocales: ReadonlyArray<AppLocale>,
  currentLocale: AppLocale
): AppLocale | null {
  return getBrowserLocaleMatch(browserLanguages, availableLocales, currentLocale);
}
