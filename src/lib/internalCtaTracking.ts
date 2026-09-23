"use client";

import type { AppLocale } from "@/lib/i18n";
import {
  classifySiteSource,
  getSiteDeviceCategory,
  getSitePageKind,
  sendSiteAnalyticsEvent,
  type SiteInternalCtaTarget,
} from "@/lib/siteAnalyticsCollector";

/**
 * Reports a click on a CTA that stays on this site to the product collector as
 * `site_internal_cta_clicked`. A click that enters the product is `site_app_entry_clicked` instead.
 */
export function reportSiteInternalCtaClick(
  target: SiteInternalCtaTarget,
  locale: AppLocale,
  placement: string,
): void {
  sendSiteAnalyticsEvent("site_internal_cta_clicked", new Date().toISOString(), locale, {
    target,
    page_kind: getSitePageKind(window.location.pathname),
    placement,
    source: classifySiteSource(document.referrer, window.location.hostname),
    device_category: getSiteDeviceCategory(),
  });
}
