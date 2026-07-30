"use client";

import { getAppUrl, getLoginUrl, getSignupUrl } from "@/lib/auth";
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

  if (loggedIn) {
    return (
      <a
        href={getAppUrl()}
        className={styles.signupButton}
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
        onClick={handleLoginClick}
      >
        {uiCopy.auth.logIn}
      </a>
      <a
        href={getSignupUrl()}
        className={styles.signupButton}
        onClick={handleSignupClick}
      >
        {signupLabel}
      </a>
    </div>
  );
};
