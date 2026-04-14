import type { AppLocale } from "@/lib/i18n";
import {
  DEFAULT_LOCALE,
  getLocalizedPathname,
  normalizePathname,
  resolveLocaleFromPathname,
} from "@/lib/i18n";
import { hasRouteTranslation } from "@/lib/routeTranslations";
import { SITE_URL } from "@/lib/site";

const SITE_URL_WITHOUT_TRAILING_SLASH = SITE_URL.replace(/\/$/, "");
const MARKDOWN_LINK_DESTINATION_PATTERN = /\]\((\/[^)\s]+)\)/g;
const ABSOLUTE_SITE_URL_PATTERN = new RegExp(
  `${SITE_URL_WITHOUT_TRAILING_SLASH.replaceAll(".", "\\.")}(\\/[^\\s)"]*)`,
  "g"
);

function localizePathname(pathnameWithSuffix: string, locale: AppLocale): string {
  if (locale === DEFAULT_LOCALE) {
    return pathnameWithSuffix;
  }

  const hashIndex = pathnameWithSuffix.indexOf("#");
  const hash =
    hashIndex >= 0 ? pathnameWithSuffix.slice(hashIndex) : "";
  const withoutHash =
    hashIndex >= 0 ? pathnameWithSuffix.slice(0, hashIndex) : pathnameWithSuffix;
  const queryIndex = withoutHash.indexOf("?");
  const query =
    queryIndex >= 0 ? withoutHash.slice(queryIndex) : "";
  const pathname =
    queryIndex >= 0 ? withoutHash.slice(0, queryIndex) : withoutHash;
  const normalizedPathname = normalizePathname(pathname);
  const { locale: resolvedLocale, routePathname } =
    resolveLocaleFromPathname(normalizedPathname);

  if (resolvedLocale === locale || !hasRouteTranslation(routePathname, locale)) {
    return pathnameWithSuffix;
  }

  const localizedPathname = getLocalizedPathname(locale, routePathname);
  const basePathname =
    pathname.endsWith("/") || localizedPathname === "/"
      ? localizedPathname
      : localizedPathname.replace(/\/$/, "");

  return `${basePathname}${query}${hash}`;
}

export function localizeInternalLinks(
  markdown: string,
  locale: AppLocale
): string {
  if (locale === DEFAULT_LOCALE) {
    return markdown;
  }

  return markdown
    .replace(MARKDOWN_LINK_DESTINATION_PATTERN, (fullMatch, destination) => {
      return fullMatch.replace(destination, localizePathname(destination, locale));
    })
    .replace(ABSOLUTE_SITE_URL_PATTERN, (_match, pathname) => {
      return `${SITE_URL_WITHOUT_TRAILING_SLASH}${localizePathname(
        pathname,
        locale
      )}`;
    });
}
