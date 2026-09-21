"use client";

import { useEffect } from "react";
import { AnalyticsConsentBanner } from "@/components/AnalyticsConsentBanner";
import { AnalyticsConsentWithdrawal } from "@/components/AnalyticsConsentWithdrawal";
import { resolveAnalyticsVisitorIdentity } from "@/lib/analyticsVisitor";
import type { AppLocale } from "@/lib/i18n";

interface SiteAnalyticsProps {
  readonly locale: AppLocale;
  readonly privacyPolicyPathname: string;
}

/**
 * Starts this page load's analytics identity and carries the two consent surfaces: the question, and
 * the way back from an answer already given. Exactly one of them is ever on screen.
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
