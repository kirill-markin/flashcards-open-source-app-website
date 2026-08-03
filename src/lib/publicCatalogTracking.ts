"use client";

import { track } from "@vercel/analytics";
import type {
  PublicCatalogFilterAnalytics,
  PublicCatalogInstallAnalytics,
  PublicCatalogNavigationAnalytics,
  PublicCatalogPaginationAnalytics,
  PublicCatalogSearchAnalytics,
  PublicCatalogSortAnalytics,
} from "./publicCatalogAnalytics";

interface PublicCatalogAnalyticsByEventName {
  readonly public_catalog_filter: PublicCatalogFilterAnalytics;
  readonly public_catalog_install: PublicCatalogInstallAnalytics;
  readonly public_catalog_navigation: PublicCatalogNavigationAnalytics;
  readonly public_catalog_pagination: PublicCatalogPaginationAnalytics;
  readonly public_catalog_search: PublicCatalogSearchAnalytics;
  readonly public_catalog_sort: PublicCatalogSortAnalytics;
}

export type PublicCatalogAnalyticsEventName = keyof PublicCatalogAnalyticsByEventName;

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

export function trackPublicCatalogEvent<EventName extends PublicCatalogAnalyticsEventName>(
  eventName: EventName,
  properties: PublicCatalogAnalyticsByEventName[EventName],
): void {
  const analyticsProperties: Readonly<Record<string, string | number | boolean>> = {
    ...properties,
  };

  try {
    track(eventName, analyticsProperties);
  } catch (error: unknown) {
    console.warn("public_catalog_analytics_error", {
      errorMessage: getErrorMessage(error),
      eventName,
    });
  }
}
