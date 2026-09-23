"use client";

import { useEffect } from "react";
import { AnalyticsConsentBanner } from "@/components/AnalyticsConsentBanner";
import { AnalyticsConsentWithdrawal } from "@/components/AnalyticsConsentWithdrawal";
import { resolveAnalyticsVisitorIdentity } from "@/lib/analyticsVisitor";
import { useSiteAppEntryImpressionTracking } from "@/lib/appEntryImpressionTracking";
import type { AppLocale } from "@/lib/i18n";
import { useSitePageViewTracking } from "@/lib/sitePageViewTracking";

interface SiteAnalyticsProps {
  readonly locale: AppLocale;
  readonly privacyPolicyPathname: string;
}

/**
 * Starts this page load's analytics identity, reports every page view and every impression of a
 * CTA that leads into the product, and carries the two consent surfaces: the strip that asks about
 * the cookie, and the corner control holding the way back from that answer and the switch that
 * turns collection off altogether. The corner control is always there; the strip joins it
 * underneath while a first-time visitor is being asked.
 *
 * Mounted from the shared layout document rather than from the page frame, so every route asks on
 * the same terms - a visitor landing on a catalog deck is asked exactly like one on the home page.
 */
export function SiteAnalytics({
  locale,
  privacyPolicyPathname,
}: SiteAnalyticsProps): React.JSX.Element {
  useEffect(() => {
    void resolveAnalyticsVisitorIdentity();
  }, []);
  useSitePageViewTracking(locale);
  useSiteAppEntryImpressionTracking(locale);

  return (
    <>
      <AnalyticsConsentBanner
        locale={locale}
        privacyPolicyPathname={privacyPolicyPathname}
      />
      <AnalyticsConsentWithdrawal locale={locale} />
    </>
  );
}
