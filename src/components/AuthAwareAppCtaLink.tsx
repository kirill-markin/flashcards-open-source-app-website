"use client";

import { getAppUrl, getSignupUrl } from "@/lib/auth";
import {
  trackAppEntryClick,
  type AppEntryAction,
  type AppEntryPlacement,
} from "@/lib/appEntryTracking";
import type { AppLocale } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";
import { useLoggedInCookie } from "@/lib/useLoggedInCookie";

interface AuthAwareAppCtaLinkProps {
  readonly locale: AppLocale;
  readonly placement: AppEntryPlacement;
}

export function AuthAwareAppCtaLink({
  locale,
  placement,
}: AuthAwareAppCtaLinkProps): React.JSX.Element {
  const loggedIn = useLoggedInCookie();
  const uiCopy = getUiCopy(locale);
  const action: AppEntryAction = loggedIn ? "open_app" : "signup";
  const href = loggedIn ? getAppUrl() : getSignupUrl();
  const label = loggedIn
    ? uiCopy.auth.openApp
    : uiCopy.auth.startStudyingFree;
  const handleClick = (): void => {
    trackAppEntryClick(action, locale, placement);
  };

  return (
    <a href={href} onClick={handleClick}>
      {label}
    </a>
  );
}
