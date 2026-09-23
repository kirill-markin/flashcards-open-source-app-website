"use client";

import { getAppUrl, getLoginUrl, getSignupUrl } from "@/lib/auth";
import { getSiteAppEntryImpressionAttributes } from "@/lib/appEntryImpressionAttributes";
import {
  trackAppEntryClick,
  type AppEntryPlacement,
} from "@/lib/appEntryTracking";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";
import { useLoggedInCookie } from "@/lib/useLoggedInCookie";
import styles from "./AuthButton.module.css";

interface AuthButtonProps {
  readonly locale: AppLocale;
  readonly placement: AppEntryPlacement;
  readonly signupLabel: string;
}

export const AuthButton: React.FC<AuthButtonProps> = ({
  locale,
  placement,
  signupLabel,
}) => {
  const loggedIn = useLoggedInCookie();
  const uiCopy = getUiCopy(locale);
  const loginRedirectPath = getLocalizedPathname(locale, "/");
  const handleLoginClick = (): void => {
    trackAppEntryClick("login", locale, placement);
  };
  const handleOpenAppClick = (): void => {
    trackAppEntryClick("open_app", locale, placement);
  };
  const handleSignupClick = (): void => {
    trackAppEntryClick("signup", locale, placement);
  };
  // The two anchors of the signed-out state, log in and sign up, sit side by side and both carry
  // the mark, so they resolve to one impression key and the placement reports once rather than
  // twice. The header renders this component twice, once per placement, and those two never share
  // a key: `header_desktop` is in every document and a media query hides it below 900px, while
  // `header_mobile` is in the document only while the menu is open, so each reports exactly where
  // it is displayed.
  const impressionAttributes = getSiteAppEntryImpressionAttributes("web_app", placement);

  if (loggedIn) {
    return (
      <a
        href={getAppUrl()}
        className={styles.signupButton}
        {...impressionAttributes}
        onClick={handleOpenAppClick}
      >
        {uiCopy.auth.openApp}
      </a>
    );
  }

  return (
    <div className={styles.buttonGroup}>
      <a
        href={getLoginUrl(loginRedirectPath)}
        className={styles.loginButton}
        {...impressionAttributes}
        onClick={handleLoginClick}
      >
        {uiCopy.auth.logIn}
      </a>
      <a
        href={getSignupUrl()}
        className={styles.signupButton}
        {...impressionAttributes}
        onClick={handleSignupClick}
      >
        {signupLabel}
      </a>
    </div>
  );
};
