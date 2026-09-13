"use client";

import type { AppLocale } from "@/lib/i18n";
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import {
  createPublicCatalogInstallAnalytics,
  type PublicCatalogInstallPlacement,
} from "@/lib/publicCatalogAnalytics";
import { activatePublicCatalogInstallJourney } from "@/lib/publicCatalogInstallJourney";
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
  const activateInstall = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ): void => {
    trackPublicCatalogEvent(
      "public_catalog_install",
      createPublicCatalogInstallAnalytics(packageId, placement),
    );

    const activatedHref = activatePublicCatalogInstallJourney(
      href,
      locale,
      placement,
    );
    if (activatedHref === href) {
      return;
    }

    const link = event.currentTarget;
    link.href = activatedHref;
    window.setTimeout(() => {
      link.href = href;
    }, 0);
  };

  const activatePrimaryInstall = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ): void => {
    if (event.button === 0) {
      activateInstall(event);
    }
  };

  const activateMiddleInstall = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ): void => {
    if (event.button === 1) {
      activateInstall(event);
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
