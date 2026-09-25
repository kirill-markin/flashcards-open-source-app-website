"use client";

import type { AppLocale } from "@/lib/i18n";
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import type { SiteOutboundTarget } from "@/lib/siteAnalyticsCollector";
import { reportSiteOutboundClick } from "@/lib/siteInteractionEvents";

interface TrackedOutboundLinkProps {
  readonly className?: string;
  readonly href: string;
  readonly label: string;
  readonly locale: AppLocale;
  /** A snake_case slug: the collector refuses the whole event for any other shape. */
  readonly placement: string;
  /** Replaces the external-link `rel`, so it must already carry `noopener noreferrer`. */
  readonly rel?: string;
  readonly target: SiteOutboundTarget;
}

export function TrackedOutboundLink({
  className,
  href,
  label,
  locale,
  placement,
  rel,
  target,
}: TrackedOutboundLinkProps): React.JSX.Element {
  const handleClick = (): void => {
    reportSiteOutboundClick(target, locale, placement);
  };

  return (
    <a
      className={className}
      href={href}
      {...getExternalLinkAttributes(href)}
      {...(rel === undefined ? {} : { rel })}
      onClick={handleClick}
    >
      {label}
    </a>
  );
}
