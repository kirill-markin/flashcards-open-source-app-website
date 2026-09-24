"use client";

import { getSiteAppEntryImpressionAttributes } from "@/lib/appEntryImpressionAttributes";
import {
  getStoreAppEntryTarget,
  reportSiteAppEntryClick,
} from "@/lib/appEntryTracking";
import type { StoreAnalyticsPlatform } from "@/lib/humanPlatforms";
import type { AppLocale } from "@/lib/i18n";
import { trackVercelAnalyticsEvent } from "@/lib/vercelAnalytics";
import { StoreQrHoverLink } from "./StoreQrHoverLink";

const STORE_LINK_PLACEMENT = "footer";

interface TrackedStoreLinkProps {
  readonly hint: string;
  readonly href: string;
  readonly label: string;
  readonly locale: AppLocale;
  readonly platform: StoreAnalyticsPlatform;
  readonly qrSvgMarkup: string;
}

export const TrackedStoreLink: React.FC<TrackedStoreLinkProps> = ({
  hint,
  href,
  label,
  locale,
  platform,
  qrSvgMarkup,
}) => {
  const storeTarget = getStoreAppEntryTarget(platform);
  const trackStoreLinkClick = (): void => {
    trackVercelAnalyticsEvent("store_link_click", {
      platform,
      placement: STORE_LINK_PLACEMENT,
    });
    reportSiteAppEntryClick(storeTarget, locale, STORE_LINK_PLACEMENT);
  };

  return (
    <StoreQrHoverLink
      ariaLabel={label}
      className={undefined}
      hint={hint}
      href={href}
      impressionAttributes={getSiteAppEntryImpressionAttributes(
        storeTarget,
        STORE_LINK_PLACEMENT,
      )}
      locale={locale}
      onClick={trackStoreLinkClick}
      placement={STORE_LINK_PLACEMENT}
      qrSvgMarkup={qrSvgMarkup}
      target={storeTarget}
    >
      {label}
    </StoreQrHoverLink>
  );
};
