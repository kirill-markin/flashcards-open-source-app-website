import { TRANSLATED_ROUTE_PATHNAMES_BY_LOCALE } from "@/data/contentRegistry";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  getLocaleShortLabel,
  type AppLocale,
} from "@/lib/localeConfig";
import {
  getAbsoluteUrl,
  getLocalizedPathname,
  normalizePathname,
  resolveLocaleFromPathname,
} from "@/lib/i18n";

interface LocaleSwitcherEntry {
  readonly available: boolean;
  readonly href: string;
  readonly label: string;
  readonly locale: AppLocale;
}

const TRANSLATED_ROUTE_PATH_SET_BY_LOCALE: Readonly<
  Record<AppLocale, ReadonlySet<string>>
> = SUPPORTED_LOCALES.reduce<Record<AppLocale, ReadonlySet<string>>>(
  (routePathSetByLocale, locale) => ({
    ...routePathSetByLocale,
    [locale]: new Set<string>(TRANSLATED_ROUTE_PATHNAMES_BY_LOCALE[locale]),
  }),
  {} as Record<AppLocale, ReadonlySet<string>>
);

export function hasRouteTranslation(
  routePathname: string,
  locale: AppLocale
): boolean {
  const normalizedRoutePathname = normalizePathname(routePathname);

  return TRANSLATED_ROUTE_PATH_SET_BY_LOCALE[locale].has(normalizedRoutePathname);
}

export function getRouteLocales(
  routePathname: string
): ReadonlyArray<AppLocale> {
  const normalizedRoutePathname = normalizePathname(routePathname);

  return SUPPORTED_LOCALES.filter((locale) =>
    hasRouteTranslation(normalizedRoutePathname, locale)
  );
}

export function getAvailableLocalizedPathname(
  locale: AppLocale,
  routePathname: string
): string {
  if (hasRouteTranslation(routePathname, locale)) {
    return getLocalizedPathname(locale, routePathname);
  }

  return getLocalizedPathname(DEFAULT_LOCALE, routePathname);
}

export function getLanguageAlternates(
  routePathname: string
): Readonly<Record<string, string>> | undefined {
  const locales = getRouteLocales(routePathname);

  if (locales.length < 2) {
    return undefined;
  }

  const alternates: Record<string, string> = {};

  locales.forEach((locale) => {
    alternates[locale] = getAbsoluteUrl(
      getLocalizedPathname(locale, routePathname)
    );
  });
  alternates["x-default"] = getAbsoluteUrl(
    getLocalizedPathname(DEFAULT_LOCALE, routePathname)
  );

  return alternates;
}

export function getLocaleSwitcherEntries(
  pathname: string
): ReadonlyArray<LocaleSwitcherEntry> {
  const { routePathname } = resolveLocaleFromPathname(pathname);

  return SUPPORTED_LOCALES.map((locale) => ({
    available: hasRouteTranslation(routePathname, locale),
    href: getLocalizedPathname(locale, routePathname),
    label: getLocaleShortLabel(locale),
    locale,
  }));
}
