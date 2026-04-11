import { SITE_URL } from "@/lib/site";
import { getTranslatedBlogPostSlugs } from "@/data/blog";
import { getTranslatedDocSlugs } from "@/data/docs";

export const DEFAULT_LOCALE = "en";
export const SUPPORTED_LOCALES = ["en", "es"] as const;
export const NON_DEFAULT_LOCALES = ["es"] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

interface LocaleResolution {
  readonly locale: AppLocale;
  readonly routePathname: string;
}

interface LocaleSwitcherEntry {
  readonly available: boolean;
  readonly href: string;
  readonly locale: AppLocale;
}

const OPEN_GRAPH_LOCALE_BY_APP_LOCALE: Readonly<Record<AppLocale, string>> = {
  en: "en_US",
  es: "es_ES",
};

const SHARED_TRANSLATED_ROUTE_PATHNAMES = [
  "/",
  "/features/",
  "/pricing/",
  "/privacy/",
  "/support/",
  "/terms/",
  "/docs/",
  "/blog/",
];

const TRANSLATED_ROUTE_PATHNAMES_BY_LOCALE: Readonly<
  Record<Exclude<AppLocale, typeof DEFAULT_LOCALE>, ReadonlySet<string>>
> = {
  es: new Set<string>([
    ...SHARED_TRANSLATED_ROUTE_PATHNAMES,
    ...getTranslatedDocSlugs("es").map((slug) => `/docs/${slug}/`),
    ...getTranslatedBlogPostSlugs("es").map((slug) => `/blog/${slug}/`),
  ]),
};

export function isSupportedLocale(value: string): value is AppLocale {
  return SUPPORTED_LOCALES.includes(value as AppLocale);
}

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

export function getOpenGraphLocale(locale: AppLocale): string {
  return OPEN_GRAPH_LOCALE_BY_APP_LOCALE[locale];
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

  if (locale === DEFAULT_LOCALE) {
    return true;
  }

  return TRANSLATED_ROUTE_PATHNAMES_BY_LOCALE[locale].has(
    normalizedRoutePathname
  );
}

export function getRouteLocales(
  routePathname: string
): ReadonlyArray<AppLocale> {
  const normalizedRoutePathname = normalizePathname(routePathname);
  const localizedLocales = NON_DEFAULT_LOCALES.filter((locale) =>
    hasRouteTranslation(normalizedRoutePathname, locale)
  );

  return [DEFAULT_LOCALE, ...localizedLocales];
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
    locale,
  }));
}
