"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import type { AppLocale } from "@/lib/i18n";
import { reportSiteInternalCtaClick } from "@/lib/internalCtaTracking";

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
    track("blog_try_app_cta_click", {
      placement,
      locale,
    });
    reportSiteInternalCtaClick("home", locale, placement);
  };

  return (
    <Link href={href} onClick={trackBlogCtaClick}>
      {label}
    </Link>
  );
}
