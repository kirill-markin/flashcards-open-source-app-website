"use client";

import { track } from "@vercel/analytics";
import type { AppLocale } from "@/lib/i18n";

export type AppEntryAction = "login" | "open_app" | "signup";

export type AppEntryPlacement =
  | "header_desktop"
  | "header_mobile"
  | "home_human_access"
  | "home_hero"
  | "footer"
  | "pricing"
  | "features_end"
  | "activity_end";

export function trackAppEntryClick(
  action: AppEntryAction,
  locale: AppLocale,
  placement: AppEntryPlacement
): void {
  track("app_entry_click", {
    action,
    locale,
    platform: "web",
    placement,
  });
}
