"use client";

/**
 * The one way this site reports anything to Vercel Web Analytics.
 *
 * Vercel's own `track` is deliberately imported nowhere else. The collection switch in the corner
 * control promises a browser that turned it off sends nothing about the visit at all, and that
 * promise covers this vendor exactly as much as it covers our own collector, so every custom event
 * goes through one gate. The pageview beacon is the other half and is gated by
 * `src/components/SiteVercelAnalytics.tsx`, which keeps `<Analytics />` out of the document until
 * this browser is known to collect and hands the vendor a `beforeSend` that drops whatever the
 * already-injected script would still send after the switch is flipped mid-session.
 *
 * Global Privacy Control and Do Not Track are deliberately not consulted here, unlike
 * `sendSiteAnalyticsEvent`: extending those signals to this vendor changes behaviour for browsers
 * that never touched the switch, which is a separate decision and out of scope for this change.
 */

import { track } from "@vercel/analytics";
import { isSiteAnalyticsCollectionEnabled } from "./analyticsConsent";

type VercelAnalyticsProperties = NonNullable<Parameters<typeof track>[1]>;

export function trackVercelAnalyticsEvent(
  eventName: string,
  properties: VercelAnalyticsProperties,
): void {
  if (isSiteAnalyticsCollectionEnabled() === false) {
    return;
  }

  track(eventName, properties);
}
