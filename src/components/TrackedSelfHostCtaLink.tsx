"use client";

import type { AppLocale } from "@/lib/i18n";
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import { reportSiteOutboundClick } from "@/lib/siteInteractionEvents";
import { trackVercelAnalyticsEvent } from "@/lib/vercelAnalytics";

const SELF_HOST_CTA_PLACEMENT = "pricing";

interface TrackedSelfHostCtaLinkProps {
  readonly className: string;
  readonly href: string;
  readonly label: string;
  readonly locale: AppLocale;
}

export function TrackedSelfHostCtaLink({
  className,
  href,
  label,
  locale,
}: TrackedSelfHostCtaLinkProps): React.JSX.Element {
  const trackSelfHostCtaClick = (): void => {
    trackVercelAnalyticsEvent("self_host_cta_click", {
      locale,
      placement: SELF_HOST_CTA_PLACEMENT,
    });
    // The repository this leads to is one destination of a generic fact: a click off the site.
    reportSiteOutboundClick("repository", locale, SELF_HOST_CTA_PLACEMENT);
  };

  return (
    <a
      className={className}
      href={href}
      {...getExternalLinkAttributes(href)}
      onClick={trackSelfHostCtaClick}
    >
      {label}
    </a>
  );
}
