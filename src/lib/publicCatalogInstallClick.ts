import type { AppLocale } from "./i18n";
import type { PublicCatalogInstallPlacement } from "./publicCatalogAnalytics";
import {
  classifySiteSource,
  getSiteDeviceCategory,
  sendSiteAnalyticsEvent,
  warnAboutSiteAnalyticsFailure,
} from "./siteAnalyticsCollector";

// Both app host families. The catalog install links the backend renders move to the new host at the
// web cutover, and a validator naming only one of them would reject every link on one side of that
// day and silently stop reporting the funnel step this whole path exists for.
const CATALOG_APP_HOSTNAMES: ReadonlyArray<string> = [
  "app.nibomo.com",
  "app.flashcards-open-source-app.com",
];
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const PACKAGE_VERSION_PATH_PATTERN =
  /^\/catalog\/import\/([0-9a-f-]+)\/?$/i;

function getPackageVersionId(installUrl: URL): string {
  if (
    installUrl.protocol !== "https:"
    || CATALOG_APP_HOSTNAMES.includes(installUrl.hostname.toLowerCase()) === false
  ) {
    throw new TypeError("Catalog install URL must use a canonical app origin.");
  }

  const pathMatch = PACKAGE_VERSION_PATH_PATTERN.exec(installUrl.pathname);
  const packageVersionId = pathMatch?.[1] ?? "";
  if (UUID_PATTERN.test(packageVersionId) === false) {
    throw new TypeError("Catalog install URL must end with a package version UUID.");
  }

  return packageVersionId.toLowerCase();
}

export function reportPublicCatalogInstallClick(
  href: string,
  locale: AppLocale,
  placement: PublicCatalogInstallPlacement,
): void {
  let packageVersionId: string;
  try {
    packageVersionId = getPackageVersionId(new URL(href));
  } catch {
    warnAboutSiteAnalyticsFailure(
      "catalog_install_clicked",
      "CLIENT_SETUP_ERROR",
      null,
      null,
    );
    return;
  }

  sendSiteAnalyticsEvent("catalog_install_clicked", new Date().toISOString(), locale, {
    package_version_id: packageVersionId,
    placement,
    source: classifySiteSource(document.referrer, window.location.hostname),
    device_category: getSiteDeviceCategory(),
  });
}
