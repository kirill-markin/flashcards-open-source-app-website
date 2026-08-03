"use client";

import type { AppLocale } from "@/lib/i18n";
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import { createPublicCatalogInstallAnalytics } from "@/lib/publicCatalogAnalytics";
import { trackPublicCatalogEvent } from "@/lib/publicCatalogTracking";

interface TrackedPublicCatalogInstallLinkProps {
  readonly className: string;
  readonly href: string;
  readonly label: string;
  readonly locale: AppLocale;
  readonly packageId: string;
  readonly versionNumber: number;
}

export function TrackedPublicCatalogInstallLink({
  className,
  href,
  label,
  locale,
  packageId,
  versionNumber,
}: TrackedPublicCatalogInstallLinkProps): React.JSX.Element {
  const trackInstall = (): void => {
    trackPublicCatalogEvent(
      "public_catalog_install",
      createPublicCatalogInstallAnalytics(locale, packageId, versionNumber),
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
