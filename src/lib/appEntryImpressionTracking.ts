"use client";

import { usePathname } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";
import {
  isSiteAnalyticsCollectionEnabled,
  subscribeToAnalyticsConsent,
} from "./analyticsConsent";
import {
  SITE_APP_ENTRY_PLACEMENT_ATTRIBUTE,
  SITE_APP_ENTRY_TARGET_ATTRIBUTE,
} from "./appEntryImpressionAttributes";
import { APP_ENTRY_PLACEMENTS, type AppEntryPlacement } from "./appEntryTracking";
import type { AppLocale } from "./i18n";
import {
  classifySiteSource,
  getSiteDeviceCategory,
  getSitePageKind,
  sendSiteAnalyticsEvent,
  warnAboutSiteAnalyticsFailure,
  type SiteAppEntryTarget,
  type SitePageKind,
} from "./siteAnalyticsCollector";

/**
 * The impression half of `site_app_entry_clicked`: the CTA that leads into the product was on
 * screen long enough to be read. Without it the click is a count with no denominator.
 *
 * A CTA declares itself in the markup with the two attributes below rather than wiring an observer
 * of its own, the way the catalog package page declares its package id for the page view. One
 * document-scoped observer then watches every one of them, which is what lets a CTA the current
 * viewport does not show - the desktop header button is in every document and a media query hides
 * it below 900px, where it reports `isIntersecting: false` - report only where it is actually
 * displayed, and what lets a CTA mounted later, such as the mobile menu's, which exists only while
 * that menu is open, be picked up without every call site repeating the same effect.
 */

const SITE_APP_ENTRY_SELECTOR = `[${SITE_APP_ENTRY_TARGET_ATTRIBUTE}]`;

/**
 * Half of the element's area on screen, held for a second. Both halves cost something and the
 * direction of the error is chosen deliberately, because `analytics.product_events` is append-only:
 * an impression reported twice inflates the denominator permanently and quietly makes every
 * conversion rate wrong, while a missed one only leaves the rate slightly high. So a CTA swept past
 * in a fast scroll, or one whose bottom half never enters the viewport, is a false negative we
 * accept; the false positive left is a CTA on screen and unread, which no browser signal can tell
 * apart from a read one.
 */
const IMPRESSION_VISIBLE_RATIO = 0.5;
const IMPRESSION_DWELL_MS = 1000;

/**
 * The impressions already reported by this document, keyed by target, placement and page kind.
 *
 * Module-scoped rather than held in a component, exactly as the page view tracker's own guard is,
 * so it survives React strict mode's simulated remount and the frame remount a back navigation
 * causes: a remounted CTA re-runs the dwell delay and would otherwise report a second impression
 * under a key this document has already reported.
 *
 * Every property a click can vary on has to be in the key or the clicks differing on the missing
 * one join to nothing. A placement is a container - the footer and the home platform grid each
 * offer the web app, the App Store and Google Play side by side - so `target` varies inside one
 * placement, and a client-side navigation varies `page_kind` under a CTA that never moved. The
 * remaining two properties are derived from the document's own referrer and user agent, so neither
 * can change inside one document load and neither belongs in the key.
 */
const reportedImpressionKeys = new Set<string>();

const SITE_APP_ENTRY_TARGETS: ReadonlyArray<SiteAppEntryTarget> = [
  "web_app",
  "app_store",
  "google_play",
];

function parseSiteAppEntryTarget(value: string | null): SiteAppEntryTarget | null {
  return SITE_APP_ENTRY_TARGETS.find((target) => target === value) ?? null;
}

/**
 * Both attributes are parsed against their own union rather than only checked for presence. The
 * typed helper cannot write anything else today, but the observer reads the DOM, not the helper,
 * and an unvalidated placement - an empty attribute is the easy one - would be posted to a
 * collector whose pattern refuses it, losing the impression at the far end instead of here.
 */
function parseSiteAppEntryPlacement(value: string | null): AppEntryPlacement | null {
  return APP_ENTRY_PLACEMENTS.find((placement) => placement === value) ?? null;
}

/**
 * `page_kind`, `source` and `device_category` are read exactly as `reportSiteAppEntryClick` reads
 * them, from the current pathname and the document's own referrer and user agent, so an impression
 * and the click it precedes always agree and the two join by equality.
 *
 * The key is taken before the send rather than after it: a request that fails is not retried, which
 * keeps the one error this data cannot recover from - a denominator counted twice - impossible.
 */
function reportSiteAppEntryImpression(
  element: Element,
  pageKind: SitePageKind,
  locale: AppLocale,
): void {
  const target = parseSiteAppEntryTarget(element.getAttribute(SITE_APP_ENTRY_TARGET_ATTRIBUTE));
  const placement = parseSiteAppEntryPlacement(
    element.getAttribute(SITE_APP_ENTRY_PLACEMENT_ATTRIBUTE),
  );

  if (target === null || placement === null) {
    warnAboutSiteAnalyticsFailure(
      "site_app_entry_shown",
      "APP_ENTRY_ATTRIBUTES_INVALID",
      null,
      null,
    );
    return;
  }

  const impressionKey = `${target}|${placement}|${pageKind}`;
  if (reportedImpressionKeys.has(impressionKey)) {
    return;
  }

  reportedImpressionKeys.add(impressionKey);

  sendSiteAnalyticsEvent("site_app_entry_shown", new Date().toISOString(), locale, {
    target,
    page_kind: pageKind,
    placement,
    source: classifySiteSource(document.referrer, window.location.hostname),
    device_category: getSiteDeviceCategory(),
  });
}

/**
 * Setting up the observer is wrapped the way the collector wraps its own send: a browser that
 * cannot build one reports no impressions and otherwise carries on, rather than throwing out of an
 * effect on a marketing page.
 */
function createImpressionObserver(
  onEntries: IntersectionObserverCallback,
): IntersectionObserver | null {
  try {
    return new IntersectionObserver(onEntries, { threshold: IMPRESSION_VISIBLE_RATIO });
  } catch {
    warnAboutSiteAnalyticsFailure("site_app_entry_shown", "CLIENT_SETUP_ERROR", null, null);
    return null;
  }
}

/**
 * Watches every app-entry CTA in the document and reports `site_app_entry_shown` once per target,
 * placement and page kind per document load.
 *
 * The observer is rebuilt on every navigation, which is what makes a CTA that never moved report
 * again under the page kind it is now under: a footer link that stays on screen across a
 * client-side navigation gets no new intersection callback of its own, so re-observing is the only
 * thing that can notice it. Rebuilding also clears the pending dwells, so no timer started on one
 * page can report under another.
 *
 * The collection switch is read here as well as inside the collector, the way the page view tracker
 * reads it, so that turning it off stops the observation itself rather than only the send. `off`
 * before hydration means the first pass of every load observes nothing, and the real value one
 * render later starts it. Turning it back on replays nothing: what is on screen at that moment is
 * reported as the current view it is, and anything already reported stays reported once.
 */
export function useSiteAppEntryImpressionTracking(locale: AppLocale): void {
  const pathname = usePathname();
  const isCollectionEnabled = useSyncExternalStore(
    subscribeToAnalyticsConsent,
    isSiteAnalyticsCollectionEnabled,
    () => false,
  );

  useEffect(() => {
    if (isCollectionEnabled === false) {
      return;
    }

    const pageKind = getSitePageKind(window.location.pathname);
    const dwellTimers = new Map<Element, number>();

    const clearDwell = (element: Element): void => {
      const timer = dwellTimers.get(element);
      if (timer === undefined) {
        return;
      }

      window.clearTimeout(timer);
      dwellTimers.delete(element);
    };

    const clearAllDwells = (): void => {
      for (const timer of dwellTimers.values()) {
        window.clearTimeout(timer);
      }

      dwellTimers.clear();
    };

    const observer = createImpressionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting === false) {
          clearDwell(entry.target);
          continue;
        }

        if (dwellTimers.has(entry.target)) {
          continue;
        }

        const timer = window.setTimeout(() => {
          dwellTimers.delete(entry.target);

          // An element taken out of the document mid-dwell - the mobile menu closing over its
          // own CTA - was never shown for the full second, and a detached element reports no
          // further intersection change that could clear the timer.
          if (entry.target.isConnected === false) {
            return;
          }

          // The same reasoning as the `visibilitychange` handler below, for the gap that handler
          // cannot cover: this timer and that event are queued independently, so a dwell that
          // matured in the same turn the document was hidden asks the state itself rather than
          // trusting that the cancellation arrived first.
          if (document.visibilityState === "hidden") {
            return;
          }

          reportSiteAppEntryImpression(entry.target, pageKind, locale);
        }, IMPRESSION_DWELL_MS);

        dwellTimers.set(entry.target, timer);
      }
    });

    if (observer === null) {
      return;
    }

    // Observing a target already observed does nothing, so rescanning is free of any effect on a
    // dwell already running.
    const observeAppEntryCtasWithin = (root: Element): void => {
      if (root.matches(SITE_APP_ENTRY_SELECTOR)) {
        observer.observe(root);
      }

      for (const element of root.querySelectorAll(SITE_APP_ENTRY_SELECTOR)) {
        observer.observe(element);
      }
    };

    observeAppEntryCtasWithin(document.body);

    /**
     * A dwell claims the CTA was on screen for a continuous second, but only the rendering
     * lifecycle can say it left the screen, and timers keep running when rendering is suspended: a
     * backgrounded tab, a minimised window, a locked phone. Left alone, the timer would report a
     * page a visitor looked at for a tenth of a second, and an impression that should not exist is
     * the one error an append-only table never recovers from.
     *
     * Becoming visible again re-observes from scratch, because re-observing a target the observer
     * already holds delivers no entry: without the disconnect, a CTA that never moved - the header
     * and hero of a page opened in a background tab - would lose its impression for the whole life
     * of the document rather than for the time the visitor was away.
     */
    const handleVisibilityChange = (): void => {
      if (document.visibilityState === "hidden") {
        clearAllDwells();
        return;
      }

      observer.disconnect();
      observeAppEntryCtasWithin(document.body);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // CTAs that appear after this effect runs - the mobile menu's, the auth buttons once the
    // logged-in cookie is read - would otherwise never be watched at all. Only the added subtrees
    // are scanned rather than the whole document, because on a catalog page the card grid
    // re-renders on every filter keystroke and a full-document `querySelectorAll` per batch would
    // be paid there over thousands of nodes that can never carry the mark.
    const mutationObserver = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node instanceof Element) {
            observeAppEntryCtasWithin(node);
          }
        }
      }
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      mutationObserver.disconnect();
      observer.disconnect();
      clearAllDwells();
    };
  }, [isCollectionEnabled, locale, pathname]);
}
