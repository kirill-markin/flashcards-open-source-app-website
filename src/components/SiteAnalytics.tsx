"use client";

import { useEffect } from "react";
import { AnalyticsConsentBanner } from "@/components/AnalyticsConsentBanner";
import { resolveAnalyticsVisitorIdentity } from "@/lib/analyticsVisitor";
import { useSiteAppEntryImpressionTracking } from "@/lib/appEntryImpressionTracking";
import type { AppLocale } from "@/lib/i18n";
import { useSitePageViewTracking } from "@/lib/sitePageViewTracking";

interface SiteAnalyticsProps {
  readonly locale: AppLocale;
  readonly privacyPolicyPathname: string;
}

/** Reports page views and product CTA impressions; privacy settings live on the Privacy page. */
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
    <AnalyticsConsentBanner
      locale={locale}
      privacyPolicyPathname={privacyPolicyPathname}
    />
  );
}
