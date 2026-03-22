"use client";

import { getAppUrl, getSignupUrl, getLoginUrl } from "@/lib/auth";
import { useLoggedInCookie } from "@/lib/useLoggedInCookie";
import styles from "./AuthButton.module.css";

export const AuthButton: React.FC = () => {
  const loggedIn = useLoggedInCookie();

  if (loggedIn) {
    return (
      <a href={getAppUrl()} className={styles.signupButton}>
        Open App
      </a>
    );
  }

  return (
    <div className={styles.buttonGroup}>
      <a href={getLoginUrl("/")} className={styles.loginButton}>
        Log In
      </a>
      <a href={getSignupUrl()} className={styles.signupButton}>
        Sign Up Free
      </a>
    </div>
  );
};
