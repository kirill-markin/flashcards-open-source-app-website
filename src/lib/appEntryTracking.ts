"use client";

import type { StoreAnalyticsPlatform } from "@/lib/humanPlatforms";
import type { AppLocale } from "@/lib/i18n";
import {
  classifySiteSource,
  getSiteDeviceCategory,
  getSitePageKind,
  sendSiteAnalyticsEvent,
  type SiteAppEntryStoreTarget,
  type SiteAppEntryTarget,
} from "@/lib/siteAnalyticsCollector";
import { trackVercelAnalyticsEvent } from "@/lib/vercelAnalytics";

export type AppEntryAction = "login" | "open_app" | "signup";

/**
 * Every place a CTA into the product can sit. A runtime list rather than a bare union, because the
 * impression observer reads the placement back out of the DOM and has to be able to refuse a value
 * the collector's own pattern would refuse; deriving the type from the list keeps the two from
 * drifting apart.
 */
export const APP_ENTRY_PLACEMENTS = [
  "header_desktop",
  "header_mobile",
  "home_human_access",
  "home_hero",
  "footer",
  "pricing",
  "features_end",
  "activity_end",
] as const;

export type AppEntryPlacement = typeof APP_ENTRY_PLACEMENTS[number];

const STORE_APP_ENTRY_TARGETS: Readonly<
  Record<StoreAnalyticsPlatform, SiteAppEntryStoreTarget>
> = {
  android: "google_play",
  ios: "app_store",
};

/** Reports a click into the web app or a store to the product collector as `site_app_entry_clicked`. */
export function reportSiteAppEntryClick(
  target: SiteAppEntryTarget,
  locale: AppLocale,
  placement: string,
): void {
  sendSiteAnalyticsEvent("site_app_entry_clicked", new Date().toISOString(), locale, {
    target,
    page_kind: getSitePageKind(window.location.pathname),
    placement,
    source: classifySiteSource(document.referrer, window.location.hostname),
    device_category: getSiteDeviceCategory(),
  });
}

export function getStoreAppEntryTarget(
  platform: StoreAnalyticsPlatform,
): SiteAppEntryStoreTarget {
  return STORE_APP_ENTRY_TARGETS[platform];
}

export function trackAppEntryClick(
  action: AppEntryAction,
  locale: AppLocale,
  placement: AppEntryPlacement
): void {
  trackVercelAnalyticsEvent("app_entry_click", {
    action,
    locale,
    platform: "web",
    placement,
  });
  reportSiteAppEntryClick("web_app", locale, placement);
}
