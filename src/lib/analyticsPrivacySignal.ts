"use client";

/**
 * Global Privacy Control and Do Not Track, the opt-out signals this site honours before anything
 * else it does about analytics.
 *
 * A browser that raises one is never asked for a visitor identity, never shown the consent banner
 * and never reports an event, so the suppression sits ahead of both the identity request and the
 * collector rather than only in front of the collector: asking `GET /v1/analytics/visitor` outside
 * a consent jurisdiction mints a 13-month cookie, which is precisely what the signal opts out of.
 */

interface NavigatorPrivacySignals {
  readonly globalPrivacyControl?: boolean;
  readonly msDoNotTrack?: string | null;
}

interface WindowPrivacySignals {
  readonly doNotTrack?: string | null;
}

export function hasAnalyticsPrivacySignal(): boolean {
  const privacyNavigator = navigator as Navigator & NavigatorPrivacySignals;
  const privacyWindow = window as Window & WindowPrivacySignals;

  return (
    privacyNavigator.globalPrivacyControl === true ||
    privacyNavigator.doNotTrack === "1" ||
    privacyNavigator.msDoNotTrack === "1" ||
    privacyWindow.doNotTrack === "1"
  );
}
