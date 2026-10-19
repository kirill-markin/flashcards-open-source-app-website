import type { AppLocale } from "./i18n";
import {
  sendSiteAnalyticsEventWithIdentity,
  type SiteAnalyticsSentIdentity,
  type SiteDeviceCategory,
  type SitePageKind,
} from "./siteAnalyticsCollector";

/**
 * `site_page_engaged` is sent once per page view when the page has been visible for this long in
 * total and the visitor has produced at least one of the interactions below since that page view.
 */
const ENGAGEMENT_VISIBLE_MS = 10_000;
const ENGAGEMENT_INTERACTION_EVENT_NAMES = [
  "scroll",
  "pointerdown",
  "pointermove",
  "touchstart",
  "keydown",
] as const;

// Capture, because `scroll` does not bubble from a scrolled element up to the window.
const ENGAGEMENT_LISTENER_OPTIONS: AddEventListenerOptions = { capture: true, passive: true };

// Removes the current page view's listeners and timer. At most one page view is tracked at a time.
let stopActiveSitePageEngagementTracking: (() => void) | null = null;

// Hands the current page view's sent identity to its tracker; cleared together with the stop above.
let releaseActiveSitePageEngagement: ((pageView: SiteAnalyticsSentIdentity) => void) | null = null;

export function stopSitePageEngagementTracking(): void {
  const stop = stopActiveSitePageEngagementTracking;
  stopActiveSitePageEngagementTracking = null;
  releaseActiveSitePageEngagement = null;
  stop?.();
}

/**
 * Called once the current page view has been sent, with the identity it carried. Until then the
 * engaged event waits, so it never reaches the collector ahead of its page view.
 */
export function releaseSitePageEngagement(pageView: SiteAnalyticsSentIdentity): void {
  releaseActiveSitePageEngagement?.(pageView);
}

/** Starts tracking a new page view, ending the previous one's tracking without sending it. */
export function startSitePageEngagementTracking(
  locale: AppLocale,
  pageKind: SitePageKind,
  deviceCategory: SiteDeviceCategory,
): void {
  stopSitePageEngagementTracking();

  let accumulatedVisibleMs = 0;
  let visibleSince: number | null = document.visibilityState === "visible"
    ? performance.now()
    : null;
  let hasInteracted = false;
  let thresholdTimerId: number | null = null;
  let engagedAt: string | null = null;
  let sentPageView: SiteAnalyticsSentIdentity | null = null;

  function readVisibleMs(): number {
    return accumulatedVisibleMs + (visibleSince === null ? 0 : performance.now() - visibleSince);
  }

  function clearThresholdTimer(): void {
    if (thresholdTimerId !== null) {
      window.clearTimeout(thresholdTimerId);
      thresholdTimerId = null;
    }
  }

  function removeInteractionListeners(): void {
    for (const eventName of ENGAGEMENT_INTERACTION_EVENT_NAMES) {
      window.removeEventListener(eventName, handleInteraction, ENGAGEMENT_LISTENER_OPTIONS);
    }
  }

  function stop(): void {
    clearThresholdTimer();
    removeInteractionListeners();
    document.removeEventListener("visibilitychange", handleVisibilityChange);
  }

  /**
   * Reports join an engaged event to its page view only through the same cookie actor, or through
   * the same-day hash that exists only on rows sent without an id. So the page view's id is attached
   * only while it is still the current one; otherwise the event goes out with none, which discloses
   * no more than the page view did.
   */
  function sendWhenEngaged(): void {
    if (engagedAt === null) {
      if (hasInteracted === false || readVisibleMs() < ENGAGEMENT_VISIBLE_MS) {
        return;
      }

      engagedAt = new Date().toISOString();
      stop();
    }

    if (sentPageView === null) {
      return;
    }

    const pageViewAnonymousId = sentPageView.anonymousId;
    stopSitePageEngagementTracking();
    sendSiteAnalyticsEventWithIdentity(
      "site_page_engaged",
      engagedAt,
      locale,
      { page_kind: pageKind, device_category: deviceCategory },
      (currentAnonymousId) => currentAnonymousId === pageViewAnonymousId
        ? currentAnonymousId
        : null,
    );
  }

  function release(pageView: SiteAnalyticsSentIdentity): void {
    sentPageView = pageView;
    sendWhenEngaged();
  }

  function scheduleThresholdTimer(): void {
    clearThresholdTimer();
    const remainingMs = ENGAGEMENT_VISIBLE_MS - readVisibleMs();
    if (visibleSince === null || remainingMs <= 0) {
      return;
    }

    thresholdTimerId = window.setTimeout(() => {
      thresholdTimerId = null;
      scheduleThresholdTimer();
      sendWhenEngaged();
    }, remainingMs);
  }

  function handleInteraction(): void {
    hasInteracted = true;
    removeInteractionListeners();
    sendWhenEngaged();
  }

  function handleVisibilityChange(): void {
    if (document.visibilityState === "visible") {
      visibleSince ??= performance.now();
    } else if (visibleSince !== null) {
      accumulatedVisibleMs += performance.now() - visibleSince;
      visibleSince = null;
    }

    scheduleThresholdTimer();
  }

  for (const eventName of ENGAGEMENT_INTERACTION_EVENT_NAMES) {
    window.addEventListener(eventName, handleInteraction, ENGAGEMENT_LISTENER_OPTIONS);
  }
  document.addEventListener("visibilitychange", handleVisibilityChange);
  stopActiveSitePageEngagementTracking = stop;
  releaseActiveSitePageEngagement = release;
  scheduleThresholdTimer();
}
