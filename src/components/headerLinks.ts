import type { AppLocale } from "@/lib/i18n";
import { DASHBOARDS_ROUTE_PATHNAME } from "@/lib/dashboardsPage";
import { getAvailableLocalizedPathname } from "@/lib/routeTranslations";
import { getUiCopy } from "@/lib/uiCopy";

export interface HeaderLink {
  readonly href: string;
  readonly label: string;
}

export function getHeaderLinks(locale: AppLocale): ReadonlyArray<HeaderLink> {
  const uiCopy = getUiCopy(locale);

  return [
    {
      href: getAvailableLocalizedPathname(locale, DASHBOARDS_ROUTE_PATHNAME),
      label: uiCopy.navigation.dashboards,
    },
    {
      href: getAvailableLocalizedPathname(locale, "/features/"),
      label: uiCopy.navigation.features,
    },
    {
      href: getAvailableLocalizedPathname(locale, "/pricing/"),
      label: uiCopy.navigation.pricing,
    },
    {
      href: getAvailableLocalizedPathname(locale, "/docs/"),
      label: uiCopy.navigation.docs,
    },
    {
      href: getAvailableLocalizedPathname(locale, "/blog/"),
      label: uiCopy.navigation.blog,
    },
  ];
}
