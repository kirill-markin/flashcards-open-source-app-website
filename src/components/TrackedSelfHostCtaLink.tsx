"use client";

import { track } from "@vercel/analytics";
import type { AppLocale } from "@/lib/i18n";
import { getExternalLinkAttributes } from "@/lib/linkTargets";

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
    track("self_host_cta_click", {
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
