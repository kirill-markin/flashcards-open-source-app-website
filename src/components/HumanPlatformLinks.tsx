"use client";

import Image from "next/image";
import { getHumanPlatforms } from "@/lib/humanPlatforms";
import { getAppUrl, getLoginUrl } from "@/lib/auth";
import { useLoggedInCookie } from "@/lib/useLoggedInCookie";
import styles from "./HumanPlatformLinks.module.css";

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
  const webEntryHref = loggedIn ? getAppUrl() : getLoginUrl("/");
  const platforms = getHumanPlatforms(webEntryHref);

  return (
    <div className={styles.platformList}>
      {platforms.map((platform) => {
        if (platform.kind === "active") {
          return (
            <a
              key={platform.label}
              href={platform.href}
              className={styles.platformLink}
              aria-label={platform.label}
            >
              {platform.image ? (
                <Image
                  src={platform.image.src}
                  alt={platform.image.alt}
                  width={platform.image.width}
                  height={platform.image.height}
                  className={styles.platformBadge}
                />
              ) : (
                <>
                  <WebIcon />
                  <span className={styles.platformLabel}>{platform.label}</span>
                </>
              )}
            </a>
          );
        }

        return (
          <span
            key={platform.label}
            className={styles.platformDisabled}
            aria-disabled="true"
            aria-label={`${platform.label}. ${platform.tooltip}`}
            data-tooltip={platform.tooltip}
            tabIndex={0}
          >
            <Image
              src={platform.image.src}
              alt={platform.image.alt}
              width={platform.image.width}
              height={platform.image.height}
              className={styles.platformBadge}
            />
          </span>
        );
      })}
    </div>
  );
};
