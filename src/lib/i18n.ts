import { SITE_URL } from "@/lib/site";
import {
  DEFAULT_LOCALE,
  NON_DEFAULT_LOCALES,
  SUPPORTED_LOCALES,
  getOpenGraphLocale,
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
