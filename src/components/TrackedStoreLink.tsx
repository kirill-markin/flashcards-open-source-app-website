"use client";

import { track } from "@vercel/analytics";
import type { StoreAnalyticsPlatform } from "@/lib/humanPlatforms";

const STORE_LINK_PLACEMENT = "footer";

interface TrackedStoreLinkProps {
  readonly href: string;
  readonly label: string;
  readonly platform: StoreAnalyticsPlatform;
}

export const TrackedStoreLink: React.FC<TrackedStoreLinkProps> = ({
  href,
  label,
  platform,
}) => {
  const trackStoreLinkClick = (): void => {
    track("store_link_click", {
      platform,
      placement: STORE_LINK_PLACEMENT,
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackStoreLinkClick}
    >
      {label}
    </a>
  );
};
