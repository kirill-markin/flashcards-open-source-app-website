import type { AppLocale } from "@/lib/i18n";
import { DASHBOARDS_ROUTE_PATHNAME } from "@/lib/dashboardsPage";
import { getAvailableLocalizedPathname } from "@/lib/routeTranslations";
import { isPublicCatalogEnabled } from "@/lib/publicCatalogBuild";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import { PUBLIC_CATALOG_ROUTE_PATHNAME } from "@/lib/publicCatalogUrls";
import { getUiCopy } from "@/lib/uiCopy";

export interface HeaderLink {
  readonly href: string;
  readonly label: string;
}

export function getHeaderLinks(locale: AppLocale): ReadonlyArray<HeaderLink> {
  const uiCopy = getUiCopy(locale);
  const catalogLinks: ReadonlyArray<HeaderLink> = isPublicCatalogEnabled()
    ? [
      {
        href: getAvailableLocalizedPathname(
          locale,
          PUBLIC_CATALOG_ROUTE_PATHNAME,
        ),
        label: getPublicCatalogUiCopy(locale).navigationLabel,
      },
    ]
    : [];

  return [
    {
      href: getAvailableLocalizedPathname(locale, DASHBOARDS_ROUTE_PATHNAME),
      label: uiCopy.navigation.dashboards,
    },
    ...catalogLinks,
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
