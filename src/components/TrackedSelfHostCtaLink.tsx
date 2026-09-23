"use client";

import type { AppLocale } from "@/lib/i18n";
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import { trackVercelAnalyticsEvent } from "@/lib/vercelAnalytics";

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
      placement: "pricing",
    });
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
