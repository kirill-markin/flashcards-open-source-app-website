"use client";

import { track } from "@vercel/analytics";
import { getAppUrl, getSignupUrl, getLoginUrl } from "@/lib/auth";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";
import { useLoggedInCookie } from "@/lib/useLoggedInCookie";
import styles from "./AuthButton.module.css";

export type AuthButtonPlacement =
  | "header_desktop"
  | "header_mobile"
  | "home_hero"
  | "pricing";

interface AuthButtonProps {
  readonly locale: AppLocale;
  readonly placement: AuthButtonPlacement;
}

function trackAppEntryClick(placement: AuthButtonPlacement): void {
  track("app_entry_click", {
    platform: "web",
    placement,
  });
}

export const AuthButton: React.FC<AuthButtonProps> = ({ locale, placement }) => {
  const loggedIn = useLoggedInCookie();
  const uiCopy = getUiCopy(locale);
  const loginRedirectPath = getLocalizedPathname(locale, "/");
  const handleAppEntryClick = (): void => {
    trackAppEntryClick(placement);
  };

  if (loggedIn) {
    return (
      <a
        href={getAppUrl()}
        className={styles.signupButton}
        onClick={handleAppEntryClick}
      >
        {uiCopy.auth.openApp}
      </a>
    );
  }

  return (
    <div className={styles.buttonGroup}>
      <a href={getLoginUrl(loginRedirectPath)} className={styles.loginButton}>
        {uiCopy.auth.logIn}
      </a>
      <a href={getSignupUrl()} className={styles.signupButton}>
        {uiCopy.auth.signUpFree}
      </a>
    </div>
  );
};
