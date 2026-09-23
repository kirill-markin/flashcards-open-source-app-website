"use client";

import { reportSiteAppEntryClick } from "@/lib/appEntryTracking";
import type { AppLocale } from "@/lib/i18n";
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import { trackVercelAnalyticsEvent } from "@/lib/vercelAnalytics";

export type BlogCtaPlacement =
  | "article_start_side"
  | "mid_article"
  | "article_end";

interface TrackedBlogCtaLinkProps {
  readonly href: string;
  readonly label: string;
  readonly locale: AppLocale;
  readonly placement: BlogCtaPlacement;
}

export function TrackedBlogCtaLink({
  href,
  label,
  locale,
  placement,
}: TrackedBlogCtaLinkProps): React.JSX.Element {
  const trackBlogCtaClick = (): void => {
    trackVercelAnalyticsEvent("blog_try_app_cta_click", {
      placement,
      locale,
    });
    reportSiteAppEntryClick("web_app", locale, placement);
  };

  return (
    <a
      href={href}
      {...getExternalLinkAttributes(href)}
      onClick={trackBlogCtaClick}
    >
      {label}
    </a>
  );
}
