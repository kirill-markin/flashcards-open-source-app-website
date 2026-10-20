"use client";

import type { StoreAnalyticsPlatform } from "@/lib/humanPlatforms";
import type { AppLocale } from "@/lib/i18n";
import {
  classifySiteSource,
  getSiteDeviceCategory,
  getSitePageKind,
  sendSiteAnalyticsEvent,
  type SiteAppEntryAction,
  type SiteAppEntryStoreTarget,
  type SiteAppEntryTarget,
} from "@/lib/siteAnalyticsCollector";
import { trackVercelAnalyticsEvent } from "@/lib/vercelAnalytics";

export type AppEntryAction = SiteAppEntryAction;

export const APP_ENTRY_PLACEMENTS = [
  "header_desktop",
  "header_mobile",
  "home_human_access",
  "home_main_app_store",
  "home_main_google_play",
  "home_main_web",
  "home_device_iphone",
  "home_device_ipad",
  "home_device_mac",
  "home_device_android",
  "home_device_web",
  "home_hero",
  "home_walkthrough",
  "home_review_cta",
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

export function reportSiteAppEntryClick(
  target: SiteAppEntryTarget,
  locale: AppLocale,
  placement: string,
  url: string,
  action?: AppEntryAction,
): void {
  sendSiteAnalyticsEvent("site_app_entry_clicked", new Date().toISOString(), locale, {
    target,
    page_kind: getSitePageKind(window.location.pathname),
    placement,
    source: classifySiteSource(document.referrer, window.location.hostname),
    device_category: getSiteDeviceCategory(),
    url,
    ...(action === undefined ? {} : { action }),
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
  placement: AppEntryPlacement,
  url: string,
): void {
  trackVercelAnalyticsEvent("app_entry_click", {
    action,
    locale,
    platform: "web",
    placement,
  });
  reportSiteAppEntryClick("web_app", locale, placement, url, action);
}
