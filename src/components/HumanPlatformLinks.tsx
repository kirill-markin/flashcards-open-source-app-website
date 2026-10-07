"use client";

import Image from "next/image";
import { getSiteAppEntryImpressionAttributes } from "@/lib/appEntryImpressionAttributes";
import {
  getStoreAppEntryTarget,
  reportSiteAppEntryClick,
  trackAppEntryClick,
} from "@/lib/appEntryTracking";
import {
  getHumanPlatforms,
  type HumanPlatform,
  type StoreAnalyticsPlatform,
} from "@/lib/humanPlatforms";
import { getAppUrl, getLoginUrl } from "@/lib/auth";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import type { StoreQrCodes } from "@/lib/storeQrCodes";
import { getUiCopy } from "@/lib/uiCopy";
import { useLoggedInCookie } from "@/lib/useLoggedInCookie";
import { trackVercelAnalyticsEvent } from "@/lib/vercelAnalytics";
import { StoreQrHoverLink } from "./StoreQrHoverLink";
import styles from "./HumanPlatformLinks.module.css";

const STORE_LINK_PLACEMENT = "home_human_access";

function trackStoreLinkClick(
  platform: StoreAnalyticsPlatform,
  locale: AppLocale,
): void {
  trackVercelAnalyticsEvent("store_link_click", {
    platform,
    placement: STORE_LINK_PLACEMENT,
  });
  reportSiteAppEntryClick(
    getStoreAppEntryTarget(platform),
    locale,
    STORE_LINK_PLACEMENT,
  );
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
  readonly appearance?: "cards" | "badges";
}

function getBadgeOrder(platform: HumanPlatform): number {
  if (platform.kind === "disabled") {
    return 3;
  }
  if (platform.analytics.kind === "store") {
    return platform.analytics.platform === "android" ? 0 : 1;
  }
  return 2;
}

export const HumanPlatformLinks: React.FC<HumanPlatformLinksProps> = ({
  locale,
  storeQrCodes,
  appearance = "cards",
}) => {
  const uiCopy = getUiCopy(locale);
  const loggedIn = useLoggedInCookie();
  const webEntryHref = loggedIn
    ? getAppUrl()
    : getLoginUrl(getLocalizedPathname(locale, "/"));
  const webEntryAction = loggedIn ? "open_app" : "login";
  const platforms = getHumanPlatforms(webEntryHref, locale);
  const orderedPlatforms = appearance === "badges"
    ? platforms.toSorted((first, second) => getBadgeOrder(first) - getBadgeOrder(second))
    : platforms;

  return (
    <div className={appearance === "badges"
      ? `${styles.platformList} ${styles.badges}`
      : styles.platformList}>
      {orderedPlatforms.map((platform) => {
        if (platform.kind === "active") {
          const externalLinkAttributes = getExternalLinkAttributes(platform.href);
          const trackPlatformClick = (): void => {
            if (platform.analytics.kind === "store") {
              trackStoreLinkClick(platform.analytics.platform, locale);
              return;
            }

            trackAppEntryClick(
              webEntryAction,
              locale,
              "home_human_access",
            );
          };
          const platformContent = appearance === "badges" &&
            platform.analytics.kind === "store" &&
            platform.analytics.platform === "android" ? (
            <>
              <span className={styles.playMark}>
                <Image src="/home/google-play-lockup.png" alt="" width={300} height={61} />
              </span>
              <span className={styles.badgeText}>
                <span className={styles.badgeCaption}>{uiCopy.platforms.downloadBadgeCaption}</span>
                <span className={styles.badgeName}>{platform.label}</span>
              </span>
            </>
          ) : appearance === "badges" && locale !== "en" &&
            platform.analytics.kind === "store" &&
            platform.analytics.platform === "ios" ? (
            <>
              <svg viewBox="9 8 20 23" fill="currentColor" className={styles.platformIcon} aria-hidden="true">
                <path d="M24.76888,20.30068a4.94881,4.94881,0,0,1,2.35656-4.15206,5.06566,5.06566,0,0,0-3.99116-2.15768c-1.67924-.17626-3.30719,1.00483-4.1629,1.00483-.87227,0-2.18977-.98733-3.6085-.95814a5.31529,5.31529,0,0,0-4.47292,2.72787c-1.934,3.34842-.49141,8.26947,1.3612,10.97608.9269,1.32535,2.01018,2.8058,3.42763,2.7533,1.38706-.05753,1.9051-.88448,3.5794-.88448,1.65876,0,2.14479.88448,3.591.8511,1.48838-.02416,2.42613-1.33124,3.32051-2.66914a10.962,10.962,0,0,0,1.51842-3.09251A4.78205,4.78205,0,0,1,24.76888,20.30068Z" />
                <path d="M22.03725,12.21089a4.87248,4.87248,0,0,0,1.11452-3.49062,4.95746,4.95746,0,0,0-3.20758,1.65961,4.63634,4.63634,0,0,0-1.14371,3.36139A4.09905,4.09905,0,0,0,22.03725,12.21089Z" />
              </svg>
              <span className={styles.badgeText}>
                <span className={styles.badgeCaption}>{uiCopy.platforms.downloadBadgeCaption}</span>
                <span className={styles.badgeName}>{platform.label}</span>
              </span>
            </>
          ) : platform.image ? (
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
              {appearance === "badges" ? (
                <span className={styles.badgeText}>
                  <span className={styles.badgeCaption}>{uiCopy.platforms.tryBadgeCaption}</span>
                  <span className={styles.badgeName}>{platform.label}</span>
                </span>
              ) : (
                <span className={styles.platformLabel}>{platform.label}</span>
              )}
            </>
          );

          if (platform.analytics.kind === "store") {
            const storeTarget = getStoreAppEntryTarget(platform.analytics.platform);

            return (
              <StoreQrHoverLink
                key={platform.label}
                ariaLabel={platform.label}
                className={styles.platformLink}
                hint={uiCopy.platforms.scanQrHint}
                href={platform.href}
                impressionAttributes={getSiteAppEntryImpressionAttributes(
                  storeTarget,
                  STORE_LINK_PLACEMENT,
                )}
                locale={locale}
                onClick={trackPlatformClick}
                placement={STORE_LINK_PLACEMENT}
                qrSvgMarkup={storeQrCodes[platform.analytics.platform]}
                target={storeTarget}
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
              {...getSiteAppEntryImpressionAttributes("web_app", "home_human_access")}
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
