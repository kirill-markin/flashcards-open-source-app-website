"use client";

import { getAppUrl, getSignupUrl, getLoginUrl } from "@/lib/auth";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";
import { useLoggedInCookie } from "@/lib/useLoggedInCookie";
import styles from "./AuthButton.module.css";

interface AuthButtonProps {
  readonly locale: AppLocale;
}

export const AuthButton: React.FC<AuthButtonProps> = ({ locale }) => {
  const loggedIn = useLoggedInCookie();
  const uiCopy = getUiCopy(locale);
  const loginRedirectPath = getLocalizedPathname(locale, "/");

  if (loggedIn) {
    return (
      <a href={getAppUrl()} className={styles.signupButton}>
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
