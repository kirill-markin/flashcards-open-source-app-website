"use client";

import { isSiteAnalyticsCollectionEnabled } from "@/lib/analyticsConsent";
import type { AppLocale } from "@/lib/i18n";
import {
  classifySiteSource,
  getSiteDeviceCategory,
  getSitePageKind,
  sendSiteAnalyticsEvent,
  type SiteCopyTarget,
  type SiteLocaleSuggestionOutcome,
  type SiteOutboundTarget,
} from "@/lib/siteAnalyticsCollector";

/**
 * Reports a click on a link that leaves this site to the product collector as
 * `site_outbound_clicked`. A click that enters the product is `site_app_entry_clicked` instead, and
 * one that stays here is `site_internal_cta_clicked`.
 */
export function reportSiteOutboundClick(
  target: SiteOutboundTarget,
  locale: AppLocale,
  placement: string,
): void {
  sendSiteAnalyticsEvent("site_outbound_clicked", new Date().toISOString(), locale, {
    target,
    page_kind: getSitePageKind(window.location.pathname),
    placement,
    source: classifySiteSource(document.referrer, window.location.hostname),
    device_category: getSiteDeviceCategory(),
  });
}

/**
 * Reports copying a value the page offers as `site_copy_action`. It carries no acquisition and no
 * device: a copy is an act on a page already reported by its page view, which carries both.
 */
export function reportSiteCopyAction(
  target: SiteCopyTarget,
  locale: AppLocale,
  placement: string,
): void {
  sendSiteAnalyticsEvent("site_copy_action", new Date().toISOString(), locale, {
    target,
    page_kind: getSitePageKind(window.location.pathname),
    placement,
  });
}

/**
 * The banner shows already reported by this document, keyed by the offered language, the language
 * the page is in and the page the offer was made on. The collection switch is read before the key
 * is taken, exactly as `reportStoreQrShown` in `src/components/StoreQrHoverLink.tsx` reads it and
 * for the same reason: the corner control notifies listeners rather than reloading the page, so a
 * key spent while the collector was dropping sends could never be reported in this document again.
 *
 * The banner's own effect recomputes on every dependency change and on every `languagechange`, so
 * it offers the same language many times over one page and the key swallows the repeats. The page
 * is in the key because `SiteFrame` mounts the banner afresh on every client-side navigation: the
 * same offer on the next article is a genuinely new offer, and a key coarser than the page would
 * drop it while keeping the answer, which is the half of the pair that makes the rate. The path is
 * read raw and only ever compared here, never sent, so the collector contract is untouched; the
 * locale prefix it carries cannot split a key that already holds the page's language.
 */
const reportedLocaleSuggestionShowKeys = new Set<string>();

/**
 * The two languages of one suggestion. They are named rather than positional because both are an
 * `AppLocale` and both pass the collector's language-tag shape, so a swapped pair would be stored
 * without complaint and would invert every suggestion rate computed from it.
 */
export interface SiteLocaleSuggestionOffer {
  /** The language offered. */
  readonly suggestedLocale: AppLocale;
  /** The language the page is in, which is the event's interface language. */
  readonly currentLocale: AppLocale;
}

export interface SiteLocaleSuggestionAnswer extends SiteLocaleSuggestionOffer {
  readonly outcome: SiteLocaleSuggestionOutcome;
}

/**
 * Reports the language-suggestion banner becoming visible as `site_locale_suggestion_shown`. The
 * pair says what was offered instead of what.
 */
export function reportSiteLocaleSuggestionShown({
  suggestedLocale,
  currentLocale,
}: SiteLocaleSuggestionOffer): void {
  if (isSiteAnalyticsCollectionEnabled() === false) {
    return;
  }

  const showKey = `${suggestedLocale}|${currentLocale}|${window.location.pathname}`;
  if (reportedLocaleSuggestionShowKeys.has(showKey)) {
    return;
  }

  reportedLocaleSuggestionShowKeys.add(showKey);

  sendSiteAnalyticsEvent("site_locale_suggestion_shown", new Date().toISOString(), currentLocale, {
    suggested_locale: suggestedLocale,
    page_kind: getSitePageKind(window.location.pathname),
  });
}

/** Reports the answer to that banner, following the shown event on the same two locales. */
export function reportSiteLocaleSuggestionAnswered({
  suggestedLocale,
  currentLocale,
  outcome,
}: SiteLocaleSuggestionAnswer): void {
  sendSiteAnalyticsEvent(
    "site_locale_suggestion_answered",
    new Date().toISOString(),
    currentLocale,
    {
      suggested_locale: suggestedLocale,
      outcome,
      page_kind: getSitePageKind(window.location.pathname),
    },
  );
}
