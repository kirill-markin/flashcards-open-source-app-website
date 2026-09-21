import { notFound } from "next/navigation";
import {
  NON_DEFAULT_LOCALES,
  isNonDefaultLocale,
  type NonDefaultLocale,
} from "@/lib/localeConfig";
import { hasRouteTranslation } from "@/lib/routeTranslations";

export function getLocalizedRouteStaticParams(): Array<{
  locale: NonDefaultLocale;
}> {
  return NON_DEFAULT_LOCALES.map((locale) => ({ locale }));
}

// Routes whose content exists only in some locales must generate exactly those
// locales: every rendered page asserts that its own locale is an available
// translation, and `dynamicParams = false` turns the rest into a 404.
export function getTranslatedRouteStaticParams(
  routePathname: string
): Array<{ locale: NonDefaultLocale }> {
  return NON_DEFAULT_LOCALES.filter((locale) =>
    hasRouteTranslation(routePathname, locale)
  ).map((locale) => ({ locale }));
}

export function resolveNonDefaultLocaleOrNotFound(
  locale: string
): NonDefaultLocale {
  if (!isNonDefaultLocale(locale)) {
    notFound();
  }

  return locale;
}
