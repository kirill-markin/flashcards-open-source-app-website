"use client";

import type { AppLocale } from "@/lib/i18n";
import {
  sendSiteAnalyticsEvent,
  type SiteConsentPlacement,
} from "@/lib/siteAnalyticsCollector";

/**
 * What this site reports about its own consent banner and its own collection switch: that the
 * banner was shown and what it was answered, and that collection was turned off or back on. The two
 * answers carry the placement they were given in and nothing else; the other three facts are the
 * decision itself and carry nothing beside it.
 *
 * Four of the five are identity-free, and nothing here strips an identifier because nothing here
 * attaches one: `sendSiteAnalyticsEvent` reads the visitor id only for a name outside
 * `SITE_IDENTITY_FREE_EVENT_NAMES`, and the collector refuses one of those four that arrives with an
 * id claimed. The grant is the exception and the one event of the five that may carry the
 * identifier - the one the answer it reports has just allowed.
 */

export function reportSiteConsentPromptShown(locale: AppLocale): void {
  sendSiteAnalyticsEvent("site_consent_prompt_shown", new Date().toISOString(), locale, {});
}

/**
 * Reported once the grant has landed, so the identifier it carries is the one that answer has just
 * allowed - whenever the stored answer can be read back. A browser that refuses the `localStorage`
 * write, Safari private browsing among them, is the case where it cannot: it holds the fresh
 * `analytics_visitor` cookie, but no grant reads back, so `isAnalyticsIdentityConsented` stays
 * false, `readAnalyticsAnonymousId` answers null, and this one event leaves identity-free like the
 * other four.
 */
export function reportSiteConsentGranted(
  locale: AppLocale,
  placement: SiteConsentPlacement,
): void {
  sendSiteAnalyticsEvent("site_consent_granted", new Date().toISOString(), locale, {
    placement,
  });
}

export function reportSiteConsentDeclined(
  locale: AppLocale,
  placement: SiteConsentPlacement,
): void {
  sendSiteAnalyticsEvent("site_consent_declined", new Date().toISOString(), locale, {
    placement,
  });
}

/**
 * Sent before `recordSiteAnalyticsCollectionDecision("disabled")`, never after it. That call sets
 * the module-level decision before it notifies its listeners, so from the moment it returns
 * `isSiteAnalyticsCollectionEnabled` answers false and `sendSiteAnalyticsEvent` drops the event on
 * its first line. The privacy policy promises this one last event, so it has to leave before the
 * switch it reports moves.
 */
export function reportSiteCollectionDisabled(locale: AppLocale): void {
  sendSiteAnalyticsEvent("site_collection_disabled", new Date().toISOString(), locale, {});
}

/** The mirror image: sent after the decision is recorded, because before it that gate drops it. */
export function reportSiteCollectionEnabled(locale: AppLocale): void {
  sendSiteAnalyticsEvent("site_collection_enabled", new Date().toISOString(), locale, {});
}
