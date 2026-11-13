import { isSupportedLocale, type AppLocale } from "@/lib/localeConfig";

function getBrowserLanguage(rawLanguage: string): Intl.Locale | null {
  try {
    return new Intl.Locale(rawLanguage);
  } catch (error: unknown) {
    if (error instanceof RangeError) {
      return null;
    }

    throw error;
  }
}

function getLocaleCandidates(browserLanguage: Intl.Locale): ReadonlyArray<string> {
  const { baseName, language, region, script } = browserLanguage;

  if (language === "zh") {
    if (script === "Hant" || script === "Hans") {
      return [script === "Hant" ? "zh-hant" : "zh"];
    }

    if (script !== undefined) {
      return [];
    }

    if (region === "TW" || region === "HK" || region === "MO") {
      return ["zh-hant"];
    }

    return baseName === "zh" || region === "CN" || region === "SG" ? ["zh"] : [];
  }

  // Browsers may use the Norwegian macrolanguage or Nynorsk.
  if (language === "no" || language === "nn") {
    return ["nb"];
  }

  return baseName === language ? [language] : [baseName.toLowerCase(), language];
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
    const browserLanguage = getBrowserLanguage(rawLanguage);

    if (browserLanguage === null) {
      continue;
    }

    const matchedLocale = getLocaleCandidates(browserLanguage).find(
      (locale): locale is AppLocale =>
        isSupportedLocale(locale) && availableLocaleSet.has(locale),
    );

    if (matchedLocale !== undefined && matchedLocale !== excludedLocale) {
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
