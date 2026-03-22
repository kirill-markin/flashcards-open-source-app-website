"use client";

import type { ReactNode } from "react";
import { getAppUrl, getLoginUrl } from "@/lib/auth";
import { useLoggedInCookie } from "@/lib/useLoggedInCookie";
import styles from "./HumanPlatformLinks.module.css";

type ActivePlatform = {
  readonly href: string;
  readonly icon: ReactNode;
  readonly label: string;
  readonly state: "active";
};

type DisabledPlatform = {
  readonly icon: ReactNode;
  readonly label: string;
  readonly state: "disabled";
};

type HumanPlatform = ActivePlatform | DisabledPlatform;

const getHumanPlatforms = (loggedIn: boolean): readonly HumanPlatform[] => {
  const webEntryHref = loggedIn ? getAppUrl() : getLoginUrl("/");

  return [
    {
      href: webEntryHref,
      icon: <WebIcon />,
      label: "Web",
      state: "active",
    },
    {
      icon: <AppStoreIcon />,
      label: "App Store",
      state: "disabled",
    },
    {
      icon: <GooglePlayIcon />,
      label: "Google Play",
      state: "disabled",
    },
  ];
};

function WebIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      className={styles.platformIcon}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.25" />
      <path d="M3.75 12h16.5" />
      <path d="M12 3.75c2.2 2.2 3.5 5.13 3.5 8.25S14.2 18.05 12 20.25c-2.2-2.2-3.5-5.13-3.5-8.25S9.8 5.95 12 3.75Z" />
    </svg>
  );
}

function AppStoreIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      className={styles.platformIcon}
      aria-hidden="true"
    >
      <path d="M8.25 18.25h7.5" />
      <path d="m9.15 6.25 5.2 9" />
      <path d="m14.85 6.25-5.2 9" />
      <path d="M7.15 13.65h9.7" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      className={styles.platformIcon}
      aria-hidden="true"
    >
      <path d="M6.75 5.25v13.5l10.5-6.75-10.5-6.75Z" />
      <path d="M6.75 5.25 17.25 12" />
      <path d="M6.75 18.75 17.25 12" />
    </svg>
  );
}

export const HumanPlatformLinks: React.FC = () => {
  const loggedIn = useLoggedInCookie();
  const platforms = getHumanPlatforms(loggedIn);

  return (
    <div className={styles.platformList}>
      {platforms.map((platform) => {
        if (platform.state === "active") {
          return (
            <a
              key={platform.label}
              href={platform.href}
              className={styles.platformLink}
              aria-label={platform.label}
              title={platform.label}
            >
              {platform.icon}
              <span className={styles.platformLabel}>{platform.label}</span>
            </a>
          );
        }

        return (
          <span
            key={platform.label}
            className={styles.platformDisabled}
            aria-disabled="true"
            title={`${platform.label} coming soon`}
          >
            {platform.icon}
            <span className={styles.platformLabel}>{platform.label}</span>
          </span>
        );
      })}
    </div>
  );
};
