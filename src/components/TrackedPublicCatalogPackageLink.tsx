"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { AppLocale } from "@/lib/i18n";
import {
  createPublicCatalogNavigationAnalytics,
  type PublicCatalogNavigationPlacement,
} from "@/lib/publicCatalogAnalytics";
import { reportPublicCatalogDeckOpen } from "@/lib/publicCatalogSiteEvents";
import { trackPublicCatalogEvent } from "@/lib/publicCatalogTracking";

interface TrackedPublicCatalogPackageLinkProps {
  readonly children: ReactNode;
  readonly className: string;
  readonly href: string;
  readonly locale: AppLocale;
  readonly packageId: string;
  // The deck the product collector names, where `packageId` is the one the vendor event names.
  readonly packageSlug: string;
  readonly placement: PublicCatalogNavigationPlacement;
  readonly tabIndex: number | undefined;
}

export function TrackedPublicCatalogPackageLink({
  children,
  className,
  href,
  locale,
  packageId,
  packageSlug,
  placement,
  tabIndex,
}: TrackedPublicCatalogPackageLinkProps): React.JSX.Element {
  const trackNavigation = (): void => {
    trackPublicCatalogEvent(
      "public_catalog_navigation",
      createPublicCatalogNavigationAnalytics(locale, packageId, placement),
    );
    reportPublicCatalogDeckOpen(locale, packageSlug, placement);
  };

  return (
    <Link
      className={className}
      href={href}
      onClick={trackNavigation}
      tabIndex={tabIndex}
    >
      {children}
    </Link>
  );
}
