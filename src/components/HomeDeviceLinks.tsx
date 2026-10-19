"use client";

import { getSiteAppEntryImpressionAttributes } from "@/lib/appEntryImpressionAttributes";
import { getStoreAppEntryTarget, trackAppEntryClick } from "@/lib/appEntryTracking";
import { getAppUrl } from "@/lib/auth";
import { getHomeDeviceCopy } from "@/lib/homeDeviceCopy";
import { getHumanDevicePlatforms, type HumanDevice, type HumanDevicePlatform } from "@/lib/humanPlatforms";
import type { AppLocale } from "@/lib/i18n";
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import type { StoreQrCodes } from "@/lib/storeQrCodes";
import { getUiCopy } from "@/lib/uiCopy";
import { trackStoreLinkClick } from "./HumanPlatformLinks";
import { StoreQrHoverLink } from "./StoreQrHoverLink";
import styles from "./HomeDeviceLinks.module.css";

function DeviceIcon({ device }: Readonly<{ device: HumanDevice }>): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {device === "iphone" && <><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M10 5h4M11 19h2" /></>}
      {device === "ipad" && <><rect x="3" y="2" width="18" height="20" rx="2.5" /><path d="M11 19h2" /></>}
      {device === "mac" && <><rect x="4" y="3" width="16" height="13" rx="1.5" /><path d="m4 16-2 4h20l-2-4M10 17h4" /></>}
      {device === "android" && <><path d="M6 8h12a1 1 0 0 1 1 1v8H5V9a1 1 0 0 1 1-1Zm0 0a6 6 0 0 1 12 0M8 3 6 1m10 2 2-2M2 9v7m20-7v7M8 17v5m8-5v5" /><path d="M8 6h.01M16 6h.01" /></>}
      {device === "web" && <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a16 16 0 0 1 0 18 16 16 0 0 1 0-18Z" /></>}
    </svg>
  );
}

interface DeviceFilterLinkProps {
  readonly locale: AppLocale;
  readonly platform: HumanDevicePlatform;
  readonly storeQrCodes: StoreQrCodes;
}

function DeviceFilterLink({ locale, platform, storeQrCodes }: DeviceFilterLinkProps): React.JSX.Element {
  const content = <><DeviceIcon device={platform.device} /><span>{platform.label}</span></>;
  const target = platform.analytics.kind === "store" ? getStoreAppEntryTarget(platform.analytics.platform) : "web_app";
  const impressionAttributes = getSiteAppEntryImpressionAttributes(target, "home_human_access");
  const onClick = (): void => {
    if (platform.analytics.kind === "store") {
      trackStoreLinkClick(platform.analytics.platform, locale);
      return;
    }
    trackAppEntryClick("open_app", locale, "home_human_access");
  };

  if (platform.device === "mac" || platform.device === "web") {
    return (
      <a href={platform.href} {...getExternalLinkAttributes(platform.href)} {...impressionAttributes} onClick={onClick} data-testid={`home-device-${platform.device}`}>
        {content}
      </a>
    );
  }

  return (
    <span className={styles.qrDeviceLink} data-testid={`home-device-${platform.device}`}>
      <StoreQrHoverLink
        ariaLabel={platform.label}
        className={undefined}
        hint={getUiCopy(locale).platforms.scanQrHint}
        href={platform.href}
        impressionAttributes={impressionAttributes}
        locale={locale}
        onClick={onClick}
        placement="home_human_access"
        qrSvgMarkup={storeQrCodes[platform.device]}
        target={platform.device === "android" ? "google_play" : "app_store"}
      >
        {content}
      </StoreQrHoverLink>
    </span>
  );
}

interface HomeDeviceLinksProps {
  readonly locale: AppLocale;
  readonly storeQrCodes: StoreQrCodes;
}

export function HomeDeviceLinks({ locale, storeQrCodes }: HomeDeviceLinksProps): React.JSX.Element {
  const copy = getHomeDeviceCopy(locale);
  const platforms = getHumanDevicePlatforms(getAppUrl("/", locale), locale);
  return (
    <div className={styles.deviceFilters} role="group" aria-label={copy.byDevice} data-testid="home-device-links">
      <span className={styles.deviceFilterLabel}>{copy.byDevice}</span>
      <div className={styles.deviceFilterLinks}>
        {platforms.map((platform) => <DeviceFilterLink key={platform.device} platform={platform} locale={locale} storeQrCodes={storeQrCodes} />)}
      </div>
    </div>
  );
}
