"use client";

import { usePathname } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";
import {
  isSiteAnalyticsCollectionEnabled,
  subscribeToAnalyticsConsent,
} from "./analyticsConsent";
import { resolveAnalyticsVisitorIdentity } from "./analyticsVisitor";
import type { AppLocale } from "./i18n";
import {
  classifySiteReferrerHost,
  classifySiteSource,
  getSiteDeviceCategory,
  getSitePageKind,
  getSitePagePath,
  readSiteCampaignParameters,
  sendSiteAnalyticsEvent,
  SITE_PACKAGE_VERSION_ID_ATTRIBUTE,
  type SiteCampaignParameters,
  type SiteDeviceCategory,
  type SitePageKind,
  type SiteReferrerHost,
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
  readonly pagePath: string | null;
  readonly packageVersionId: string | null;
  readonly source: SiteSource;
  readonly deviceCategory: SiteDeviceCategory;
  readonly referrerHost: SiteReferrerHost | null;
  readonly campaign: SiteCampaignParameters;
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
 * Takes the parked draft off this page's listeners and answers it, so a draft is either sent or
 * dropped exactly once and never leaves behind a listener that could send it afterwards.
 */
function takePendingSitePageView(): SitePageViewDraft | null {
  const draft = pendingSitePageView;
  if (draft === null) {
    return null;
  }

  pendingSitePageView = null;
  window.removeEventListener("pagehide", sendPendingSitePageView);
  document.removeEventListener("visibilitychange", sendPendingSitePageViewWhenHidden);

  return draft;
}

/**
 * Sends the pending draft exactly once. `sendSiteAnalyticsEvent` reads the visitor cookie at this
 * moment, so a draft sent before identity resolution settles goes out identity-free.
 */
function sendPendingSitePageView(): void {
  const draft = takePendingSitePageView();
  if (draft === null) {
    return;
  }

  sendSiteAnalyticsEvent("site_page_viewed", draft.clientOccurredAt, draft.locale, {
    page_kind: draft.pageKind,
    ...(draft.pagePath === null ? {} : { page_path: draft.pagePath }),
    ...(draft.packageVersionId === null ? {} : { package_version_id: draft.packageVersionId }),
    source: draft.source,
    device_category: draft.deviceCategory,
    ...(draft.referrerHost === null ? {} : { referrer_host: draft.referrerHost }),
    ...(draft.campaign.utmSource === null ? {} : { utm_source: draft.campaign.utmSource }),
    ...(draft.campaign.utmMedium === null ? {} : { utm_medium: draft.campaign.utmMedium }),
    ...(draft.campaign.utmCampaign === null ? {} : { utm_campaign: draft.campaign.utmCampaign }),
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
 * actually came from - the previously reported one on this site - is classified instead. Both the
 * source and the referrer host are read from it, so a client-side navigation reports no host: it
 * came from this site. The campaign is the one on the address being viewed, which after the first
 * page is normally none.
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
  const pagePath = getSitePagePath(window.location.pathname);
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
    pagePath,
    packageVersionId,
    source: classifySiteSource(referrer, window.location.hostname),
    deviceCategory: getSiteDeviceCategory(),
    referrerHost: classifySiteReferrerHost(referrer, window.location.hostname),
    campaign: readSiteCampaignParameters(window.location.search),
  };
  window.addEventListener("pagehide", sendPendingSitePageView);
  document.addEventListener("visibilitychange", sendPendingSitePageViewWhenHidden);

  void resolveAnalyticsVisitorIdentity().then(sendPendingSitePageView);
}

/**
 * Reports `site_page_viewed` once for the first page of a load and once per client-side navigation
 * to a new pathname. Query-only changes, such as catalog filters, are not page views.
 *
 * The collection switch is read here as well as inside the collector so that switching it off takes
 * effect at once: nothing is reported while it is off, and the draft waiting for this load's
 * identity resolution is dropped rather than parked, so a visit made with the switch off sends
 * nothing then or later. Off is read before hydration, the same direction the Vercel island reads it
 * in: the first answer a browser gives must never be one that reports a visit it turned off.
 *
 * Turning the switch back on replays nothing. The plain same-URL guard below is all that decides
 * what happens next, so a visitor standing on the page that was already reported gets no second
 * report for it, and a page whose URL differs from the last reported one is reported as the current
 * view it is rather than as a retroactive record of anything that happened while the switch was off.
 */
export function useSitePageViewTracking(locale: AppLocale): void {
  const pathname = usePathname();
  const isCollectionEnabled = useSyncExternalStore(
    subscribeToAnalyticsConsent,
    isSiteAnalyticsCollectionEnabled,
    () => false,
  );

  useEffect(() => {
    if (isCollectionEnabled === false) {
      // A draft parked before the switch went off is dropped here, listeners and all, so that
      // nothing about this visit can leave afterwards.
      //
      // `getServerSnapshot` answers off, so this branch also runs once on the first post-hydration
      // pass of every load, before the real value arrives. It stays cheap on purpose: with no draft
      // parked yet it reads one module variable and returns, touching neither the DOM nor the
      // network.
      takePendingSitePageView();

      return;
    }

    const pageUrl = `${window.location.origin}${window.location.pathname}`;
    if (pageUrl === lastReportedPageUrl) {
      return;
    }

    reportSitePageView(locale, pageUrl);
  }, [isCollectionEnabled, locale, pathname]);
}
