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
 * `productAnalyticsSiteSearchQueryPattern` spells it: lowercase letters, caseless letters, digits,
 * spaces and hyphens within 64 characters, with neither end a space nor a hyphen. `\p{Lo}` is what
 * admits the scripts that have no case at all. The privacy policy publishes this bound in every
 * locale the site ships, so one extra character class or a different length would make that promise
 * under-state what is collected.
 *
 * Those classes are narrow by construction: the shape admits them and nothing else, so anything
 * outside them - a format character such as the U+200C in `کتاب‌ها`, a period, a symbol -
 * makes a query report its length and result count with no text at all, and combining marks and
 * modifier letters (`\p{Lm}`) are the cases ordinary spelling runs into. That is a rule about
 * marks, not about scripts: `किताब` is dropped for its vowel signs, `กรุงเทพ` for its vowel mark,
 * `ラーメン` for the U+30FC modifier letter, any decomposed input for the mark its decomposition
 * produced, and `İstanbul` for the U+0307 that lowercasing a Turkish dotted capital leaves behind -
 * while `कमल`, `ไทย` and `istanbul`, which carry no mark, all report their text. It is not an
 * exclusion of the caseless scripts either: `\p{Lo}` carries Han, Hangul, kana, Arabic and Hebrew
 * through unchanged, and Greek and Cyrillic are `\p{Ll}` once lowercased. A search with no text in
 * the series is one this shape cannot carry, not a malformed query.
 */
const PUBLIC_CATALOG_SEARCH_QUERY_PATTERN =
  /^[\p{Ll}\p{Lo}\p{Nd}](?:[\p{Ll}\p{Lo}\p{Nd} -]{0,62}[\p{Ll}\p{Lo}\p{Nd}])?$/u;

export interface PublicCatalogSearchQuery {
  readonly queryLength: number;
  readonly queryText: string | null;
}

/**
 * The search text as it may be reported, beside how long it was. The text is lowercased, trimmed
 * and has its whitespace runs collapsed, and it is answered only when the result fits the shape
 * above; a query that does not fit answers null and is reported by its length alone, never
 * shortened to fit, because half a query is a different query. The composition form is left as
 * typed. Canonical normalization is a full round trip - it decomposes first and recomposes only
 * what is not a composition exclusion - so it would split precomposed letters the shape admits
 * today (Devanagari U+0958-U+095F, Bengali U+09DC/U+09DD/U+09DF, Gurmukhi
 * U+0A33/U+0A36/U+0A59-U+0A5B/U+0A5E and Oriya U+0B5C/U+0B5D) into a base letter plus a combining
 * mark the shape rejects, losing the text of searches that report it now: `सड़क` reports its text as
 * typed and would report none after `NFC`. The collector holds the text to this same pattern and
 * does not normalize before it does, so a composition form the shape declines here is one ingest
 * would refuse anyway.
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
