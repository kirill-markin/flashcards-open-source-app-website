"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { AppLocale } from "@/lib/i18n";
import {
  createPublicCatalogNavigationAnalytics,
  type PublicCatalogNavigationPlacement,
} from "@/lib/publicCatalogAnalytics";
import { trackPublicCatalogEvent } from "@/lib/publicCatalogTracking";

interface TrackedPublicCatalogPackageLinkProps {
  readonly children: ReactNode;
  readonly className: string;
  readonly href: string;
  readonly locale: AppLocale;
  readonly packageId: string;
  readonly placement: PublicCatalogNavigationPlacement;
  readonly tabIndex: number | undefined;
}

export function TrackedPublicCatalogPackageLink({
  children,
  className,
  href,
  locale,
  packageId,
  placement,
  tabIndex,
}: TrackedPublicCatalogPackageLinkProps): React.JSX.Element {
  const trackNavigation = (): void => {
    trackPublicCatalogEvent(
      "public_catalog_navigation",
      createPublicCatalogNavigationAnalytics(locale, packageId, placement),
    );
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
