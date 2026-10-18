"use client";

import { getAppUrl } from "@/lib/auth";
import { getSiteAppEntryImpressionAttributes } from "@/lib/appEntryImpressionAttributes";
import {
  trackAppEntryClick,
  type AppEntryPlacement,
} from "@/lib/appEntryTracking";
import type { AppLocale } from "@/lib/i18n";
import styles from "./AuthButton.module.css";

interface AuthButtonProps {
  readonly locale: AppLocale;
  readonly placement: AppEntryPlacement;
  readonly label: string;
}

export const AuthButton: React.FC<AuthButtonProps> = ({
  locale,
  placement,
  label,
}) => {
  const handleOpenAppClick = (): void => {
    trackAppEntryClick("open_app", locale, placement);
  };

  return (
    <a
      href={getAppUrl("/", locale)}
      className={styles.appButton}
      {...getSiteAppEntryImpressionAttributes("web_app", placement)}
      onClick={handleOpenAppClick}
    >
      {label}
    </a>
  );
};
