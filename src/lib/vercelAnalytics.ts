"use client";

/**
 * The one way this site reports anything to Vercel Web Analytics, and the one place that decides
 * whether it may.
 *
 * Vercel's own `track` is deliberately imported nowhere else. The collection switch in the corner
 * control promises a browser that turned it off sends nothing about the visit at all, and that
 * promise covers this vendor exactly as much as it covers our own collector, so every custom event
 * goes through one gate. The pageview beacon is the other half and is gated by
 * `src/components/SiteVercelAnalytics.tsx`, which keeps `<Analytics />` out of the document until
 * this browser is known to collect and hands the vendor a `beforeSend` that drops whatever the
 * already-injected script would still send after the switch is flipped mid-session.
 *
 * Global Privacy Control is honoured here and not at `sendSiteAnalyticsEvent`: the law points that
 * signal at third-party measurement, so a browser raising it hands this vendor nothing while it
 * keeps reporting identity-free rows to our own collector.
 *
 * Both halves - the mount, and the two send paths - ask `mayReportToVercelAnalytics` rather than
 * restating the rule. Stated once, a third condition or a change to either clause cannot reach one
 * half and miss the other, which is how the vendor would end up receiving custom events from a
 * document the mount gate would have kept it out of.
 */

import { track } from "@vercel/analytics";
import { isSiteAnalyticsCollectionEnabled } from "./analyticsConsent";
import { hasAnalyticsPrivacySignal } from "./analyticsPrivacySignal";

type VercelAnalyticsProperties = NonNullable<Parameters<typeof track>[1]>;

/**
 * Whether this browser may hand the vendor anything at all: it collects, and it does not raise
 * Global Privacy Control, which this site honours against third-party measurement.
 *
 * Read live on every call rather than captured, because the collection switch is flipped
 * mid-session and the already-injected beacon script outlives the flip.
 */
export function mayReportToVercelAnalytics(): boolean {
  return (
    isSiteAnalyticsCollectionEnabled() && hasAnalyticsPrivacySignal() === false
  );
}

export function trackVercelAnalyticsEvent(
  eventName: string,
  properties: VercelAnalyticsProperties,
): void {
  if (mayReportToVercelAnalytics() === false) {
    return;
  }

  track(eventName, properties);
}
