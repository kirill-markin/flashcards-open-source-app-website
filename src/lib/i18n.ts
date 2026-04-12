import { SITE_URL } from "@/lib/site";
import { TRANSLATED_ROUTE_PATHNAMES_BY_LOCALE } from "@/data/generatedContentRegistry";
import {
  DEFAULT_LOCALE,
  NON_DEFAULT_LOCALES,
  SUPPORTED_LOCALES,
  getOpenGraphLocale,
  getLocaleShortLabel,
  isSupportedLocale,
  type AppLocale,
} from "@/lib/localeConfig";

export {
  DEFAULT_LOCALE,
  NON_DEFAULT_LOCALES,
  SUPPORTED_LOCALES,
  getOpenGraphLocale,
  isSupportedLocale,
};
export type { AppLocale };

interface LocaleResolution {
  readonly locale: AppLocale;
  readonly routePathname: string;
}

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

export function normalizePathname(pathname: string): string {
  const withoutQueryOrHash = pathname.split(/[?#]/, 1)[0] ?? pathname;
  const trimmed = withoutQueryOrHash.replace(/^\/+/, "").replace(/\/+$/, "");

  if (trimmed === "") {
    return "/";
  }

  return `/${trimmed}/`;
}

export function getLocalizedPathname(
  locale: AppLocale,
  routePathname: string
): string {
  const normalizedRoutePathname = normalizePathname(routePathname);

  if (locale === DEFAULT_LOCALE) {
    return normalizedRoutePathname;
  }

  if (normalizedRoutePathname === "/") {
    return `/${locale}/`;
  }

  return `/${locale}${normalizedRoutePathname}`;
}

export function getAbsoluteUrl(pathname: string): string {
  return new URL(pathname, SITE_URL).toString();
}

export function getMarkdownPathname(pathname: string): string {
  const normalizedPathname = normalizePathname(pathname);

  if (normalizedPathname === "/") {
    return "/.md";
  }

  return `${normalizedPathname.replace(/\/$/, "")}.md`;
}

export function resolveLocaleFromPathname(pathname: string): LocaleResolution {
  const normalizedPathname = normalizePathname(pathname);

  for (const locale of NON_DEFAULT_LOCALES) {
    const localeRootPathname = `/${locale}/`;

    if (normalizedPathname === localeRootPathname) {
      return {
        locale,
        routePathname: "/",
      };
    }

    if (normalizedPathname.startsWith(localeRootPathname)) {
      return {
        locale,
        routePathname: normalizePathname(
          normalizedPathname.slice(localeRootPathname.length - 1)
        ),
      };
    }
  }

  return {
    locale: DEFAULT_LOCALE,
    routePathname: normalizedPathname,
  };
}

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
