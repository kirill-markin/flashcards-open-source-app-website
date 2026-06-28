"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import type { AppLocale } from "@/lib/i18n";

export type BlogCtaPlacement =
  | "article_start_side"
  | "mid_article"
  | "article_end";

interface TrackedBlogCtaLinkProps {
  readonly className: string;
  readonly href: string;
  readonly label: string;
  readonly locale: AppLocale;
  readonly placement: BlogCtaPlacement;
}

export function TrackedBlogCtaLink({
  className,
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
  };

  return (
    <Link href={href} className={className} onClick={trackBlogCtaClick}>
      {label}
    </Link>
  );
}
