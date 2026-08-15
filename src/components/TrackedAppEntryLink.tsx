"use client";

import {
  trackAppEntryClick,
  type AppEntryAction,
  type AppEntryPlacement,
} from "@/lib/appEntryTracking";
import type { AppLocale } from "@/lib/i18n";
import { getExternalLinkAttributes } from "@/lib/linkTargets";

interface TrackedAppEntryLinkProps {
  readonly action: AppEntryAction;
  readonly href: string;
  readonly label: string;
  readonly locale: AppLocale;
  readonly placement: AppEntryPlacement;
}

export function TrackedAppEntryLink({
  action,
  href,
  label,
  locale,
  placement,
}: TrackedAppEntryLinkProps): React.JSX.Element {
  const handleClick = (): void => {
    trackAppEntryClick(action, locale, placement);
  };

  return (
    <a
      href={href}
      {...getExternalLinkAttributes(href)}
      onClick={handleClick}
    >
      {label}
    </a>
  );
}
