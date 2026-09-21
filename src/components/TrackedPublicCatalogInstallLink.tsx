"use client";

import type { AppLocale } from "@/lib/i18n";
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import {
  createPublicCatalogInstallAnalytics,
  type PublicCatalogInstallPlacement,
} from "@/lib/publicCatalogAnalytics";
import { reportPublicCatalogInstallClick } from "@/lib/publicCatalogInstallClick";
import { trackPublicCatalogEvent } from "@/lib/publicCatalogTracking";

interface TrackedPublicCatalogInstallLinkProps {
  readonly className: string;
  readonly href: string;
  readonly label: string;
  readonly locale: AppLocale;
  readonly packageId: string;
  readonly placement: PublicCatalogInstallPlacement;
}

export function TrackedPublicCatalogInstallLink({
  className,
  href,
  label,
  locale,
  packageId,
  placement,
}: TrackedPublicCatalogInstallLinkProps): React.JSX.Element {
  const activateInstall = (): void => {
    trackPublicCatalogEvent(
      "public_catalog_install",
      createPublicCatalogInstallAnalytics(packageId, placement),
    );

    reportPublicCatalogInstallClick(href, locale, placement);
  };

  const activatePrimaryInstall = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ): void => {
    if (event.button === 0) {
      activateInstall();
    }
  };

  const activateMiddleInstall = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ): void => {
    if (event.button === 1) {
      activateInstall();
    }
  };

  return (
    <a
      className={className}
      href={href}
      {...getExternalLinkAttributes(href)}
      onAuxClick={activateMiddleInstall}
      onClick={activatePrimaryInstall}
    >
      {label}
    </a>
  );
}
