import { notFound } from "next/navigation";
import {
  NON_DEFAULT_LOCALES,
  isNonDefaultLocale,
  type NonDefaultLocale,
} from "@/lib/localeConfig";

export function getLocalizedRouteStaticParams(): Array<{
  locale: NonDefaultLocale;
}> {
  return NON_DEFAULT_LOCALES.map((locale) => ({ locale }));
}

export function resolveNonDefaultLocaleOrNotFound(
  locale: string
): NonDefaultLocale {
  if (!isNonDefaultLocale(locale)) {
    notFound();
  }

  return locale;
}
