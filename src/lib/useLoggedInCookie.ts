"use client";

import { useSyncExternalStore } from "react";
import { LOGGED_IN_COOKIE_NAME } from "@/lib/auth";

const hasLoggedInCookie = (): boolean =>
  document.cookie
    .split(";")
    .some((cookieValue) => cookieValue.trim().startsWith(`${LOGGED_IN_COOKIE_NAME}=`));

const subscribeToCookieChanges = (
  onStoreChange: () => void,
): (() => void) => {
  window.addEventListener("focus", onStoreChange);
  window.addEventListener("pageshow", onStoreChange);

  return (): void => {
    window.removeEventListener("focus", onStoreChange);
    window.removeEventListener("pageshow", onStoreChange);
  };
};

const getLoggedInSnapshot = (): boolean => hasLoggedInCookie();

const getLoggedInServerSnapshot = (): boolean => false;

export const useLoggedInCookie = (): boolean =>
  useSyncExternalStore(
    subscribeToCookieChanges,
    getLoggedInSnapshot,
    getLoggedInServerSnapshot,
  );
