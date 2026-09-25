"use client";

import type { AppLocale } from "./i18n";
import type {
  PublicCatalogFilterAction,
  PublicCatalogFilterCategory,
  PublicCatalogNavigationPlacement,
} from "./publicCatalogAnalytics";
import type { PublicCatalogSort } from "./publicCatalogBrowse";
import { sendSiteAnalyticsEvent } from "./siteAnalyticsCollector";

/**
 * The shape the collector accepts for the reported search text, spelled exactly as the catalog's
 * `productAnalyticsSiteSearchQueryPattern` spells it: lowercase letters, caseless letters, modifier
 * letters, non-spacing and spacing marks, digits, spaces and hyphens within 64 characters, with
 * neither end a space nor a hyphen. The two must stay character for character equal: the collector
 * refuses the whole event when a property misses its pattern, so a site shape wider than the
 * backend's loses entire searches, and a narrower one drops text the backend would keep. The
 * privacy policy publishes this bound in every locale the site ships, so one extra character class
 * or a different length would make that promise under-state what is collected.
 *
 * Marks (`\p{Mn}`, `\p{Mc}`) and modifier letters (`\p{Lm}`) are inside the bound because across
 * most scripts they are how an ordinary word is spelled rather than an ornament on one: `किताब`,
 * `গ্রাম`, `தமிழ்` and `กรุงเทพ` carry vowel signs or a virama, `ラーメン` carries the U+30FC length
 * mark, any decomposed input carries the mark its decomposition produced, and lowercasing
 * `İstanbul` leaves a U+0307 combining dot. `\p{Lo}` carries the scripts that have no case at all -
 * Han, Hangul, kana, Arabic, Hebrew, Thai and the Indic letters themselves - and Greek and Cyrillic
 * are `\p{Ll}` once lowercased. Format characters stay outside the bound, so the U+200C in `کتاب‌ها`
 * still makes a query report its length and result count with no text, as do punctuation and
 * symbols. A search with no text in the series is one this shape cannot carry, not a malformed query.
 */
const PUBLIC_CATALOG_SEARCH_QUERY_PATTERN =
  /^[\p{Ll}\p{Lo}\p{Lm}\p{Mn}\p{Mc}\p{Nd}](?:[\p{Ll}\p{Lo}\p{Lm}\p{Mn}\p{Mc}\p{Nd} -]{0,62}[\p{Ll}\p{Lo}\p{Lm}\p{Mn}\p{Mc}\p{Nd}])?$/u;

export interface PublicCatalogSearchQuery {
  readonly queryLength: number;
  readonly queryText: string | null;
}

/**
 * The search text as it may be reported, beside how long it was. The text is lowercased, trimmed
 * and has its whitespace runs collapsed, and it is answered only when the result fits the shape
 * above; a query that does not fit answers null and is reported by its length alone, never
 * shortened to fit, because half a query is a different query. The composition form is left as
 * typed, and with marks inside the shape every form of a word reports its text: `सड़क` does whether
 * its second letter arrives as the precomposed U+095C or as U+0921 plus the U+093C nukta, and
 * `café` does with its `é` precomposed or as `e` plus U+0301. The remaining effect is that one word
 * typed in two composition forms is stored as two different strings, because the collector does not
 * normalize either. That is left as typed on purpose: the row records what the visitor searched
 * for, and folding the forms together belongs to the query that reads the series, which can apply
 * `NFC` itself without this module deciding for every later reader which form is the word.
 *
 * The two numbers here are not measured on the same string, and on one row they can disagree. The
 * length is the text as typed, counted in code points, which is what the privacy policy promises
 * and what the vendor event puts under the same property name. The 64-character bound belongs to
 * the normalized text alone, so `"  hello   world  "` reports a length of 17 and a text of
 * `hello world`.
 */
export function readPublicCatalogSearchQuery(query: string): PublicCatalogSearchQuery {
  const normalizedQuery = query
    .trim()
    .toLowerCase()
    .replace(/\s+/gu, " ");

  return {
    queryLength: [...query].length,
    queryText: PUBLIC_CATALOG_SEARCH_QUERY_PATTERN.test(normalizedQuery)
      ? normalizedQuery
      : null,
  };
}

/**
 * Reports a settled public catalog search. `query_length` travels beside `query_text` rather than
 * being derived from it, because the text is absent for every query that misses the shape above and
 * the length is then the only thing left about that search.
 *
 * Every reporter below takes the browser's own browse types - `PublicCatalogSort`,
 * `PublicCatalogFilterAction`, `PublicCatalogFilterCategory`, `PublicCatalogNavigationPlacement` -
 * rather than literals, so handing them to the collector is the assignment where a sort, a facet or
 * a card part the catalog gains stops compiling, instead of a whole event series the collector
 * refuses in production with no local signal.
 */
export function reportPublicCatalogSearch(
  locale: AppLocale,
  query: string,
  resultCount: number,
): void {
  const { queryLength, queryText } = readPublicCatalogSearchQuery(query);

  sendSiteAnalyticsEvent("site_catalog_searched", new Date().toISOString(), locale, {
    query_length: queryLength,
    result_count: resultCount,
    ...(queryText === null ? {} : { query_text: queryText }),
  });
}

export function reportPublicCatalogFilter(
  locale: AppLocale,
  category: PublicCatalogFilterCategory,
  action: PublicCatalogFilterAction,
  resultCount: number,
  selectedCount: number,
): void {
  sendSiteAnalyticsEvent("site_catalog_filtered", new Date().toISOString(), locale, {
    action,
    category,
    result_count: resultCount,
    selected_count: selectedCount,
  });
}

export function reportPublicCatalogSort(
  locale: AppLocale,
  sort: PublicCatalogSort,
  resultCount: number,
): void {
  sendSiteAnalyticsEvent("site_catalog_sorted", new Date().toISOString(), locale, {
    sort,
    result_count: resultCount,
  });
}

export function reportPublicCatalogPagination(
  locale: AppLocale,
  page: number,
  resultCount: number,
  totalPages: number,
): void {
  sendSiteAnalyticsEvent("site_catalog_paginated", new Date().toISOString(), locale, {
    page,
    total_pages: totalPages,
    result_count: resultCount,
  });
}

/**
 * The deck a browse ended on. The slug is the one the catalog snapshot carries, which the parser
 * already holds to the collector's slug shape at build time, so a deck that reaches a listing card
 * has a reportable slug by construction.
 */
export function reportPublicCatalogDeckOpen(
  locale: AppLocale,
  packageSlug: string,
  placement: PublicCatalogNavigationPlacement,
): void {
  sendSiteAnalyticsEvent("site_catalog_deck_opened", new Date().toISOString(), locale, {
    package_slug: packageSlug,
    placement,
  });
}
