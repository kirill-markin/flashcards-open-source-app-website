"use client";

import type { AppLocale } from "@/lib/i18n";
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import { reportSiteOutboundClick } from "@/lib/siteInteractionEvents";

const SOURCE_CODE_LINK_PLACEMENT = "footer";

interface TrackedSourceCodeLinkProps {
  readonly href: string;
  readonly label: string;
  readonly locale: AppLocale;
}

export function TrackedSourceCodeLink({
  href,
  label,
  locale,
}: TrackedSourceCodeLinkProps): React.JSX.Element {
  const trackSourceCodeLinkClick = (): void => {
    // The repository this leads to is one destination of a generic fact: a click off the site.
    reportSiteOutboundClick("repository", locale, SOURCE_CODE_LINK_PLACEMENT);
  };

  return (
    <a
      href={href}
      {...getExternalLinkAttributes(href)}
      onClick={trackSourceCodeLinkClick}
    >
      {label}
    </a>
  );
}
