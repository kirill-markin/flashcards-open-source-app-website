import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";

export interface HeaderLink {
  readonly href: string;
  readonly label: string;
}

export function getHeaderLinks(locale: AppLocale): ReadonlyArray<HeaderLink> {
  if (locale === "es") {
    return [
      { href: getLocalizedPathname(locale, "/features/"), label: "Funciones" },
      { href: getLocalizedPathname(locale, "/pricing/"), label: "Precios" },
      { href: getLocalizedPathname(locale, "/docs/"), label: "Documentacion" },
      { href: getLocalizedPathname(locale, "/blog/"), label: "Blog" },
    ];
  }

  return [
    { href: getLocalizedPathname(locale, "/features/"), label: "Features" },
    { href: getLocalizedPathname(locale, "/pricing/"), label: "Pricing" },
    { href: getLocalizedPathname(locale, "/docs/"), label: "Docs" },
    { href: getLocalizedPathname(locale, "/blog/"), label: "Blog" },
  ];
}
