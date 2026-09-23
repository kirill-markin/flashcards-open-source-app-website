"use client";

import type { StoreAnalyticsPlatform } from "@/lib/humanPlatforms";
import type { AppLocale } from "@/lib/i18n";
import {
  classifySiteSource,
  getSiteDeviceCategory,
  getSitePageKind,
  sendSiteAnalyticsEvent,
  type SiteAppEntryTarget,
} from "@/lib/siteAnalyticsCollector";
import { trackVercelAnalyticsEvent } from "@/lib/vercelAnalytics";

export type AppEntryAction = "login" | "open_app" | "signup";

export type AppEntryPlacement =
  | "header_desktop"
  | "header_mobile"
  | "home_human_access"
  | "home_hero"
  | "footer"
  | "pricing"
  | "features_end"
  | "activity_end";

const STORE_APP_ENTRY_TARGETS: Readonly<Record<StoreAnalyticsPlatform, SiteAppEntryTarget>> = {
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
): SiteAppEntryTarget {
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
