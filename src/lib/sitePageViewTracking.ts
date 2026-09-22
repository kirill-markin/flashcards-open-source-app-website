"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { resolveAnalyticsVisitorIdentity } from "./analyticsVisitor";
import type { AppLocale } from "./i18n";
import {
  classifySiteSource,
  getSiteDeviceCategory,
  getSitePageKind,
  sendSiteAnalyticsEvent,
  SITE_PACKAGE_VERSION_ID_ATTRIBUTE,
  type SiteDeviceCategory,
  type SitePageKind,
  type SiteSource,
  warnAboutSiteAnalyticsFailure,
} from "./siteAnalyticsCollector";

// Module-scoped rather than a ref, so it survives both React strict mode's simulated remount and a
// layout remount on a locale change: the same URL is never reported twice in a row, and the page a
// client-side navigation left is the referrer of the one it reached.
let lastReportedPageUrl: string | null = null;

// The backend accepts only a lowercase UUID with a version digit of 1-8, the same shape the catalog
// install click sends.
const PACKAGE_VERSION_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

interface SitePageViewDraft {
  readonly locale: AppLocale;
  readonly clientOccurredAt: string;
  readonly pageKind: SitePageKind;
  readonly packageVersionId: string | null;
  readonly source: SiteSource;
  readonly deviceCategory: SiteDeviceCategory;
}

// The page view still waiting for this load's identity resolution. At most one exists: a newer
// draft sends the older one first.
let pendingSitePageView: SitePageViewDraft | null = null;

function readPackageVersionId(): string | null {
  return document
    .querySelector(`[${SITE_PACKAGE_VERSION_ID_ATTRIBUTE}]`)
    ?.getAttribute(SITE_PACKAGE_VERSION_ID_ATTRIBUTE) ?? null;
}

/**
 * Sends the pending draft exactly once. `sendSiteAnalyticsEvent` reads the visitor cookie at this
 * moment, so a draft sent before identity resolution settles goes out identity-free.
 */
function sendPendingSitePageView(): void {
  const draft = pendingSitePageView;
  if (draft === null) {
    return;
  }

  pendingSitePageView = null;
  window.removeEventListener("pagehide", sendPendingSitePageView);
  document.removeEventListener("visibilitychange", sendPendingSitePageViewWhenHidden);

  sendSiteAnalyticsEvent("site_page_viewed", draft.clientOccurredAt, draft.locale, {
    page_kind: draft.pageKind,
    ...(draft.packageVersionId === null ? {} : { package_version_id: draft.packageVersionId }),
    source: draft.source,
    device_category: draft.deviceCategory,
  });
}

function sendPendingSitePageViewWhenHidden(): void {
  if (document.visibilityState === "hidden") {
    sendPendingSitePageView();
  }
}

/**
 * The document's own referrer describes only the first page of a load. After a client-side
 * navigation, `document.referrer` still names that first page's referrer, so the page the visitor
 * actually came from - the previously reported one on this site - is classified instead.
 *
 * Everything is read now, and the event is sent once this load's identity resolution settles: a
 * first visit outside a consent jurisdiction is minted its visitor cookie by that request, and a
 * page view sent ahead of it would leave the first page a person sees unjoinable to what follows.
 * That request has no deadline of its own and `keepalive` protects only a request already started,
 * so a visitor leaving first - the fast bounce the funnel exists to count - sends the draft on the
 * way out instead of losing it.
 */
function reportSitePageView(locale: AppLocale, pageUrl: string): void {
  const clientOccurredAt = new Date().toISOString();
  const referrer = lastReportedPageUrl ?? document.referrer;
  lastReportedPageUrl = pageUrl;

  let pageKind = getSitePageKind(window.location.pathname);
  let packageVersionId: string | null = null;

  if (pageKind === "catalog_package") {
    const rawPackageVersionId = readPackageVersionId();
    if (rawPackageVersionId === null) {
      // A package URL whose page rendered not-found carries no package: it is not a deck page.
      pageKind = "other";
    } else {
      packageVersionId = rawPackageVersionId.toLowerCase();
      if (PACKAGE_VERSION_ID_PATTERN.test(packageVersionId) === false) {
        warnAboutSiteAnalyticsFailure(
          "site_page_viewed",
          "PACKAGE_VERSION_ID_INVALID",
          null,
          null,
        );
        packageVersionId = null;
      }
    }
  }

  sendPendingSitePageView();
  pendingSitePageView = {
    locale,
    clientOccurredAt,
    pageKind,
    packageVersionId,
    source: classifySiteSource(referrer, window.location.hostname),
    deviceCategory: getSiteDeviceCategory(),
  };
  window.addEventListener("pagehide", sendPendingSitePageView);
  document.addEventListener("visibilitychange", sendPendingSitePageViewWhenHidden);

  void resolveAnalyticsVisitorIdentity().then(sendPendingSitePageView);
}

/**
 * Reports `site_page_viewed` once for the first page of a load and once per client-side navigation
 * to a new pathname. Query-only changes, such as catalog filters, are not page views.
 */
export function useSitePageViewTracking(locale: AppLocale): void {
  const pathname = usePathname();

  useEffect(() => {
    const pageUrl = `${window.location.origin}${window.location.pathname}`;
    if (pageUrl === lastReportedPageUrl) {
      return;
    }

    reportSitePageView(locale, pageUrl);
  }, [locale, pathname]);
}
