"use client";

import Image from "next/image";
import { getAppUrl, getLoginUrl } from "@/lib/auth";
import { useLoggedInCookie } from "@/lib/useLoggedInCookie";
import styles from "./HumanPlatformLinks.module.css";

type ActivePlatform = {
  readonly imageAlt?: string;
  readonly imageHeight?: number;
  readonly imageSrc?: string;
  readonly imageWidth?: number;
  readonly href: string;
  readonly label: string;
  readonly state: "active";
};

type DisabledPlatform = {
  readonly imageAlt: string;
  readonly imageHeight: number;
  readonly imageSrc: string;
  readonly imageWidth: number;
  readonly label: string;
  readonly state: "disabled";
};

type HumanPlatform = ActivePlatform | DisabledPlatform;

const getHumanPlatforms = (loggedIn: boolean): readonly HumanPlatform[] => {
  const webEntryHref = loggedIn ? getAppUrl() : getLoginUrl("/");

  return [
    {
      href: webEntryHref,
      label: "Web App",
      state: "active",
    },
    {
      label: "App Store",
      imageAlt: "Official App Store badge",
      imageHeight: 40,
      imageSrc: "/home/app-store-badge.svg",
      imageWidth: 120,
      state: "disabled",
    },
    {
      label: "Google Play",
      imageAlt: "Official Google Play lockup",
      imageHeight: 61,
      imageSrc: "/home/google-play-lockup.png",
      imageWidth: 300,
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
            >
              <WebIcon />
              <span className={styles.platformLabel}>{platform.label}</span>
            </a>
          );
        }

        return (
          <span
            key={platform.label}
            className={styles.platformDisabled}
            aria-disabled="true"
            aria-label={`${platform.label}. In development. Coming soon.`}
            data-tooltip="In development. Coming soon."
            tabIndex={0}
          >
            <Image
              src={platform.imageSrc}
              alt={platform.imageAlt}
              width={platform.imageWidth}
              height={platform.imageHeight}
              className={styles.platformBadge}
            />
          </span>
        );
      })}
    </div>
  );
};
