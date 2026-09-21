/**
 * Auth utilities for the marketing site.
 *
 * The marketing site checks for the `logged_in` cookie — a non-HttpOnly UI indicator set by the
 * auth host on the shared `nibomo.com` domain. It carries no security value; the real JWT
 * verification happens in the app.
 */

import { PRODUCT_APP_ORIGIN, PRODUCT_AUTH_ORIGIN } from "@/lib/site";

export const getLoginUrl = (redirectPath: string): string => {
  const redirectUri = `${PRODUCT_APP_ORIGIN}${redirectPath}`;
  return `${PRODUCT_AUTH_ORIGIN}/login?redirect_uri=${encodeURIComponent(redirectUri)}`;
};

export const getSignupUrl = (): string => {
  const redirectUri = PRODUCT_APP_ORIGIN;
  return `${PRODUCT_AUTH_ORIGIN}/login?redirect_uri=${encodeURIComponent(redirectUri)}`;
};

export const getAppUrl = (): string => PRODUCT_APP_ORIGIN;

export const LOGGED_IN_COOKIE_NAME = "logged_in";
