"use client";

import { getAppUrl } from "@/lib/auth";
import { getSiteAppEntryImpressionAttributes } from "@/lib/appEntryImpressionAttributes";
import {
  trackAppEntryClick,
  type AppEntryPlacement,
} from "@/lib/appEntryTracking";
import type { AppLocale } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";

interface AuthAwareAppCtaLinkProps {
  readonly locale: AppLocale;
  readonly placement: AppEntryPlacement;
}

export function AuthAwareAppCtaLink({
  locale,
  placement,
}: AuthAwareAppCtaLinkProps): React.JSX.Element {
  const uiCopy = getUiCopy(locale);
  const handleClick = (): void => {
    trackAppEntryClick("open_app", locale, placement);
  };

  return (
    <a
      href={getAppUrl("/", locale)}
      {...getSiteAppEntryImpressionAttributes("web_app", placement)}
      onClick={handleClick}
    >
      {uiCopy.auth.startStudyingFree}
    </a>
  );
}
