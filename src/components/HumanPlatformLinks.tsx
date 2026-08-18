"use client";

import { track } from "@vercel/analytics";
import Image from "next/image";
import { trackAppEntryClick } from "@/lib/appEntryTracking";
import {
  getHumanPlatforms,
  type StoreAnalyticsPlatform,
} from "@/lib/humanPlatforms";
import { getAppUrl, getLoginUrl } from "@/lib/auth";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import type { StoreQrCodes } from "@/lib/storeQrCodes";
import { getUiCopy } from "@/lib/uiCopy";
import { useLoggedInCookie } from "@/lib/useLoggedInCookie";
import { StoreQrHoverLink } from "./StoreQrHoverLink";
import styles from "./HumanPlatformLinks.module.css";

const STORE_LINK_PLACEMENT = "home_human_access";

function trackStoreLinkClick(platform: StoreAnalyticsPlatform): void {
  track("store_link_click", {
    platform,
    placement: STORE_LINK_PLACEMENT,
  });
}

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

interface HumanPlatformLinksProps {
  readonly locale: AppLocale;
  readonly storeQrCodes: StoreQrCodes;
}

export const HumanPlatformLinks: React.FC<HumanPlatformLinksProps> = ({
  locale,
  storeQrCodes,
}) => {
  const uiCopy = getUiCopy(locale);
  const loggedIn = useLoggedInCookie();
  const webEntryHref = loggedIn
    ? getAppUrl()
    : getLoginUrl(getLocalizedPathname(locale, "/"));
  const webEntryAction = loggedIn ? "open_app" : "login";
  const platforms = getHumanPlatforms(webEntryHref, locale);

  return (
    <div className={styles.platformList}>
      {platforms.map((platform) => {
        if (platform.kind === "active") {
          const externalLinkAttributes = getExternalLinkAttributes(platform.href);
          const trackPlatformClick = (): void => {
            if (platform.analytics.kind === "store") {
              trackStoreLinkClick(platform.analytics.platform);
              return;
            }

            trackAppEntryClick(
              webEntryAction,
              locale,
              "home_human_access",
            );
          };
          const platformContent = platform.image ? (
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
          );

          if (platform.analytics.kind === "store") {
            return (
              <StoreQrHoverLink
                key={platform.label}
                ariaLabel={platform.label}
                className={styles.platformLink}
                hint={uiCopy.platforms.scanQrHint}
                href={platform.href}
                onClick={trackPlatformClick}
                qrSvgMarkup={storeQrCodes[platform.analytics.platform]}
              >
                {platformContent}
              </StoreQrHoverLink>
            );
          }

          return (
            <a
              key={platform.label}
              href={platform.href}
              {...externalLinkAttributes}
              className={styles.platformLink}
              aria-label={platform.label}
              onClick={trackPlatformClick}
            >
              {platformContent}
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
