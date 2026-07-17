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

type AppEntryAction = "login" | "open_app" | "signup";

function isHeaderPlacement(placement: AuthButtonPlacement): boolean {
  return placement === "header_desktop" || placement === "header_mobile";
}

function trackAppEntryClick(
  action: AppEntryAction,
  locale: AppLocale,
  placement: AuthButtonPlacement
): void {
  track("app_entry_click", {
    action,
    locale,
    platform: "web",
    placement,
  });
}

export const AuthButton: React.FC<AuthButtonProps> = ({ locale, placement }) => {
  const loggedIn = useLoggedInCookie();
  const uiCopy = getUiCopy(locale);
  const loginRedirectPath = getLocalizedPathname(locale, "/");
  const signupLabel = isHeaderPlacement(placement)
    ? uiCopy.auth.signUpFree
    : uiCopy.auth.startStudyingFree;
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
