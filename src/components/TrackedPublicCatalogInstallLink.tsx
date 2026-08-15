"use client";

import { getExternalLinkAttributes } from "@/lib/linkTargets";
import {
  createPublicCatalogInstallAnalytics,
  type PublicCatalogInstallPlacement,
} from "@/lib/publicCatalogAnalytics";
import { trackPublicCatalogEvent } from "@/lib/publicCatalogTracking";

interface TrackedPublicCatalogInstallLinkProps {
  readonly className: string;
  readonly href: string;
  readonly label: string;
  readonly packageId: string;
  readonly placement: PublicCatalogInstallPlacement;
}

export function TrackedPublicCatalogInstallLink({
  className,
  href,
  label,
  packageId,
  placement,
}: TrackedPublicCatalogInstallLinkProps): React.JSX.Element {
  const trackInstall = (): void => {
    trackPublicCatalogEvent(
      "public_catalog_install",
      createPublicCatalogInstallAnalytics(packageId, placement),
    );
  };

  return (
    <a
      className={className}
      href={href}
      {...getExternalLinkAttributes(href)}
      onClick={trackInstall}
    >
      {label}
    </a>
  );
}
