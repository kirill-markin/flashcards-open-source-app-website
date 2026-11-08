"use client";

import Link from "next/link";
import { getSiteAppEntryImpressionAttributes } from "@/lib/appEntryImpressionAttributes";
import { getStoreAppEntryTarget, trackAppEntryClick, type AppEntryPlacement } from "@/lib/appEntryTracking";
import { getAppUrl } from "@/lib/auth";
import { getHomeDeviceCopy } from "@/lib/homeDeviceCopy";
import { getHumanDevicePlatforms, type HumanDevice, type HumanDevicePlatform } from "@/lib/humanPlatforms";
import type { AppLocale } from "@/lib/i18n";
import { reportSiteInternalCtaClick } from "@/lib/internalCtaTracking";
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

function McpIcon(): React.JSX.Element {
  return (
    <svg viewBox="2 7 190 190" fill="none" stroke="currentColor" strokeWidth="12.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M25 97.8528L92.8823 29.9706C102.255 20.598 117.451 20.598 126.823 29.9706C136.196 39.3431 136.196 54.5391 126.823 63.9117L75.5581 115.177" />
      <path d="M76.2653 114.47L126.823 63.9117C136.196 54.5391 151.392 54.5391 160.765 63.9117L161.118 64.2652C170.491 73.6378 170.491 88.8338 161.118 98.2063L99.7248 159.6C96.6006 162.724 96.6006 167.789 99.7248 170.913L112.331 183.52" />
      <path d="M109.853 46.9411L59.6482 97.1457C50.2757 106.518 50.2757 121.714 59.6482 131.087C69.0208 140.459 84.2168 140.459 93.5894 131.087L143.794 80.8822" />
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
  const placement: AppEntryPlacement = `home_device_${platform.device}`;
  const impressionAttributes = getSiteAppEntryImpressionAttributes(target, placement);
  const onClick = (): void => {
    if (platform.analytics.kind === "store") {
      trackStoreLinkClick(platform.analytics.platform, locale, placement, platform.href);
      return;
    }
    trackAppEntryClick("open_app", locale, placement, platform.href);
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
        placement={placement}
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
  readonly mcpHref: string;
  readonly storeQrCodes: StoreQrCodes;
}

export function HomeDeviceLinks({ locale, mcpHref, storeQrCodes }: HomeDeviceLinksProps): React.JSX.Element {
  const copy = getHomeDeviceCopy(locale);
  const platforms = getHumanDevicePlatforms(getAppUrl("/", locale), locale);
  return (
    <div className={styles.deviceFilters} role="group" aria-label={copy.byDevice} data-testid="home-device-links">
      <span className={styles.deviceFilterLabel}>{copy.byDevice}</span>
      <div className={styles.deviceFilterLinks}>
        {platforms.map((platform) => <DeviceFilterLink key={platform.device} platform={platform} locale={locale} storeQrCodes={storeQrCodes} />)}
        <Link href={mcpHref} onClick={() => reportSiteInternalCtaClick("mcp", locale, "home_device_mcp")} data-testid="home-device-mcp">
          <McpIcon /><span>MCP</span>
        </Link>
      </div>
    </div>
  );
}
