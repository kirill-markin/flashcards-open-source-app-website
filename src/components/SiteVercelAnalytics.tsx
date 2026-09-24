"use client";

import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";
import { useEffect, useSyncExternalStore } from "react";
import { subscribeToAnalyticsConsent } from "@/lib/analyticsConsent";
import { mayReportToVercelAnalytics } from "@/lib/vercelAnalytics";

/**
 * The vendor's own last word before anything leaves the browser: `beforeSend` is handed every
 * pageview and every custom event, and returning `null` drops it. It asks the same
 * `mayReportToVercelAnalytics` the mount below and the custom events in `src/lib/vercelAnalytics.ts`
 * ask, at send time rather than at mount, so it holds for a switch flipped in the middle of a
 * session.
 *
 * This is the half that unmounting cannot cover. `<Analytics />` injects the beacon script into
 * `document.head` and registers nothing to undo it, so a browser that flipped the switch off keeps
 * the script - and the `window.va` queue it installed - for the rest of the document. Its Global
 * Privacy Control clause is unreachable while the mount gate below holds, because such a document
 * never loads the script at all; it is here so that relaxing the mount gate cannot quietly let the
 * vendor send.
 *
 * It gates every pageview and every custom event the vendor's own API produces. Whether it also
 * gates the session beacon implied by `AnalyticsProps.sessionEndpoint` could not be established
 * here: the vendor package ships only the loader, and the sending code is the remote script.
 */
function keepVercelBeaconSilentWhileVendorReportingIsOff(
  event: BeforeSendEvent,
): BeforeSendEvent | null {
  return mayReportToVercelAnalytics() ? event : null;
}

// Whether this document has already mounted the island. Module-scoped, because the question is
// about the document rather than about one React instance: the shared layout remounts on a locale
// change, and the script the first mount injected is still there afterwards.
let hasMountedVercelBeacon = false;

/**
 * Vercel Web Analytics' pageview beacon, kept out of the document until this browser is known to
 * collect and known not to raise Global Privacy Control.
 *
 * `<Analytics />` is a client island that beacons a pageview on mount and on every client-side
 * navigation with nothing to ask before it does, so the mount is what decides whether the vendor
 * script is ever loaded. The server renders nothing: the answer lives in this browser's storage and
 * cannot be known until hydration, and sending nothing until it is known is the only direction that
 * cannot report a visit the visitor turned off. A browser that arrives with collection off
 * therefore loads no vendor script at all unless it turns collection back on, and a browser raising
 * Global Privacy Control loads none for the whole document: the signal does not change mid-session.
 *
 * Once mounted, it stays mounted, and `beforeSend` does the suppressing from there on. Unmounting
 * on the way off would buy nothing - the injected script and the `window.va` queue survive it - and
 * every flip back on would remount the island, whose mount fires a fresh pageview for a page the
 * visitor never navigated to again. The mount gate therefore protects exactly the browsers that
 * arrive silent: the one with collection already off, and the one raising Global Privacy Control.
 */
export function SiteVercelAnalytics(): React.JSX.Element | null {
  const isVendorReportingAllowed = useSyncExternalStore(
    subscribeToAnalyticsConsent,
    mayReportToVercelAnalytics,
    () => false,
  );

  useEffect(() => {
    if (isVendorReportingAllowed) {
      hasMountedVercelBeacon = true;
    }
  }, [isVendorReportingAllowed]);

  return isVendorReportingAllowed || hasMountedVercelBeacon ? (
    <Analytics beforeSend={keepVercelBeaconSilentWhileVendorReportingIsOff} />
  ) : null;
}
