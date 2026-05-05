import type { Metadata } from "next";
import type { AppLocale } from "@/lib/i18n";
import {
  DASHBOARDS_ROUTE_PATHNAME,
  getDashboardsPageDescription,
  getDashboardsPageTitle,
} from "@/lib/dashboardsPage";
import { createPageMetadata } from "@/lib/seo/createPageMetadata";

export function createDashboardsPageMetadata(locale: AppLocale): Metadata {
  return createPageMetadata({
    title: getDashboardsPageTitle(locale),
    description: getDashboardsPageDescription(locale),
    locale,
    routePathname: DASHBOARDS_ROUTE_PATHNAME,
    openGraphType: "website",
  });
}
