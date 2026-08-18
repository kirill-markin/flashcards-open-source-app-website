"use client";

import { track } from "@vercel/analytics";
import type { StoreAnalyticsPlatform } from "@/lib/humanPlatforms";
import { StoreQrHoverLink } from "./StoreQrHoverLink";

const STORE_LINK_PLACEMENT = "footer";

interface TrackedStoreLinkProps {
  readonly hint: string;
  readonly href: string;
  readonly label: string;
  readonly platform: StoreAnalyticsPlatform;
  readonly qrSvgMarkup: string;
}

export const TrackedStoreLink: React.FC<TrackedStoreLinkProps> = ({
  hint,
  href,
  label,
  platform,
  qrSvgMarkup,
}) => {
  const trackStoreLinkClick = (): void => {
    track("store_link_click", {
      platform,
      placement: STORE_LINK_PLACEMENT,
    });
  };

  return (
    <StoreQrHoverLink
      ariaLabel={label}
      className={undefined}
      hint={hint}
      href={href}
      onClick={trackStoreLinkClick}
      qrSvgMarkup={qrSvgMarkup}
    >
      {label}
    </StoreQrHoverLink>
  );
};
