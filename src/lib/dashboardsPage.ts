import type { AppLocale } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";

export const DASHBOARDS_ROUTE_PATHNAME = "/dashboards/";

export function getDashboardsPageTitle(locale: AppLocale): string {
  return getUiCopy(locale).home.activity.title;
}

export function getDashboardsPageDescription(locale: AppLocale): string {
  return getUiCopy(locale).home.activity.description;
}
