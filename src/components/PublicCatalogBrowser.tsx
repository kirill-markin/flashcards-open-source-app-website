"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { PublicCatalogPackageCard } from "@/components/PublicCatalogPackageCard";
import { getIntlLocale, type AppLocale } from "@/lib/i18n";
import type { PublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import { formatPublicCatalogNumber } from "@/lib/publicCatalogFormatting";
import {
  getPublicCatalogUrl,
  parsePublicCatalogQuery,
  queryPublicCatalogPackages,
  serializePublicCatalogQuery,
  type PublicCatalogBrowseData,
  type PublicCatalogQueryState,
  type PublicCatalogSort,
} from "@/lib/publicCatalogBrowse";
import pageStyles from "@/app/catalog/page.module.css";
import styles from "./PublicCatalogBrowser.module.css";

const publicCatalogUrlChangeEvent = "public-catalog-url-change";

interface PublicCatalogBrowserProps {
  readonly copy: PublicCatalogUiCopy;
  readonly data: PublicCatalogBrowseData;
  readonly locale: AppLocale;
}

function subscribeToCatalogUrl(onStoreChange: () => void): () => void {
  window.addEventListener("popstate", onStoreChange);
  window.addEventListener(publicCatalogUrlChangeEvent, onStoreChange);

  return (): void => {
    window.removeEventListener("popstate", onStoreChange);
    window.removeEventListener(publicCatalogUrlChangeEvent, onStoreChange);
  };
}

function getBrowserSearch(): string {
  return window.location.search;
}

function getServerSearch(): string {
  return "";
}

function subscribeToHydration(): () => void {
  return (): void => undefined;
}

function getClientHydrationSnapshot(): boolean {
  return true;
}

function getServerHydrationSnapshot(): boolean {
  return false;
}

function notifyCatalogUrlChange(): void {
  window.dispatchEvent(new Event(publicCatalogUrlChangeEvent));
}

function pushCatalogState(state: PublicCatalogQueryState): void {
  window.history.pushState(null, "", getPublicCatalogUrl(window.location.pathname, state));
  notifyCatalogUrlChange();
}

function replaceCatalogState(state: PublicCatalogQueryState): void {
  window.history.replaceState(null, "", getPublicCatalogUrl(window.location.pathname, state));
  notifyCatalogUrlChange();
}

function updateRepeatedValue(
  values: ReadonlyArray<string>,
  value: string,
  isSelected: boolean,
): ReadonlyArray<string> {
  if (isSelected) {
    return values.includes(value) ? values : [...values, value];
  }

  return values.filter((currentValue) => currentValue !== value);
}

function getSingleChoiceValue(value: string): string | null {
  return value === "" ? null : value;
}

function getSortValue(value: string): PublicCatalogSort {
  if (value === "relevance" || value === "title" || value === "newest") {
    return value;
  }

  throw new Error(`Unsupported public catalog sort value: ${value}`);
}

function formatResultCount(
  count: number,
  locale: AppLocale,
  copy: PublicCatalogUiCopy,
): string {
  const category = new Intl.PluralRules(getIntlLocale(locale)).select(count);

  return copy.browse.resultCountTemplates[category].replace(
    "{count}",
    formatPublicCatalogNumber(locale, count),
  );
}

function formatPageStatus(
  page: number,
  totalPages: number,
  locale: AppLocale,
  copy: PublicCatalogUiCopy,
): string {
  return copy.browse.pageStatusTemplate
    .replace("{page}", formatPublicCatalogNumber(locale, page))
    .replace("{total}", formatPublicCatalogNumber(locale, totalPages));
}

export function PublicCatalogBrowser({
  copy,
  data,
  locale,
}: PublicCatalogBrowserProps): React.JSX.Element {
  const isHydrated = useSyncExternalStore(
    subscribeToHydration,
    getClientHydrationSnapshot,
    getServerHydrationSnapshot,
  );
  const search = useSyncExternalStore(
    subscribeToCatalogUrl,
    getBrowserSearch,
    getServerSearch,
  );
  const state = parsePublicCatalogQuery(search, data);
  const result = queryPublicCatalogPackages(data.packages, state);
  const renderedPackages = isHydrated ? result.packages : data.packages;
  const renderedResultCount = isHydrated ? result.totalCount : data.packages.length;
  const resultStartRef = useRef<HTMLParagraphElement>(null);
  const paginationFocusPageRef = useRef<number | null>(null);

  useEffect(() => {
    if (paginationFocusPageRef.current !== result.page) {
      return;
    }

    paginationFocusPageRef.current = null;
    const resultStart = resultStartRef.current;

    if (resultStart === null) {
      throw new Error("Cannot focus public catalog results: result start target is missing.");
    }

    resultStart.focus({ preventScroll: true });
    resultStart.scrollIntoView({ block: "start" });
  }, [result.page]);

  const updateSearch = (q: string): void => {
    replaceCatalogState({ ...state, q, page: 1 });
  };
  const updateLanguage = (language: string, isSelected: boolean): void => {
    pushCatalogState({
      ...state,
      languages: updateRepeatedValue(state.languages, language, isSelected),
      page: 1,
    });
  };
  const updateTopic = (topic: string, isSelected: boolean): void => {
    pushCatalogState({
      ...state,
      topics: updateRepeatedValue(state.topics, topic, isSelected),
      page: 1,
    });
  };
  const clearFilters = (): void => {
    pushCatalogState({
      q: "",
      languages: [],
      topics: [],
      author: null,
      collection: null,
      license: null,
      sort: null,
      page: 1,
    });
  };
  const updatePage = (page: number): void => {
    paginationFocusPageRef.current = page;
    pushCatalogState({ ...state, page });
  };
  const hasActiveControls = serializePublicCatalogQuery({ ...state, page: 1 }) !== "";

  return (
    <div className={styles.browser} data-testid="catalog-browser">
      <details className={styles.filtersDetails} open>
        <summary className={styles.filtersSummary}>{copy.browse.showFiltersLabel}</summary>
        <aside className={styles.filtersPanel} aria-label={copy.browse.filtersLabel}>
          <div className={styles.filtersHeading}>
            <h2>{copy.browse.filtersLabel}</h2>
            <button
              className={styles.clearButton}
              disabled={hasActiveControls === false}
              onClick={clearFilters}
              type="button"
            >
              {copy.browse.clearFiltersLabel}
            </button>
          </div>
          <label className={styles.controlLabel} htmlFor="catalog-search">
            {copy.browse.searchLabel}
          </label>
          <input
            className={styles.textInput}
            data-testid="catalog-search"
            id="catalog-search"
            onChange={(event) => updateSearch(event.currentTarget.value)}
            placeholder={copy.browse.searchPlaceholder}
            type="search"
            value={state.q}
          />
          <fieldset className={styles.fieldset}>
            <legend>{copy.browse.languageLabel}</legend>
            <div className={styles.checkboxList}>
              {data.languages.map((language) => (
                <label className={styles.checkboxLabel} key={language}>
                  <input
                    checked={state.languages.includes(language)}
                    onChange={(event) => updateLanguage(language, event.currentTarget.checked)}
                    type="checkbox"
                  />
                  <span>{language}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset className={styles.fieldset}>
            <legend>{copy.browse.topicLabel}</legend>
            <div className={styles.checkboxList}>
              {data.topics.map((topic) => (
                <label className={styles.checkboxLabel} key={topic}>
                  <input
                    checked={state.topics.includes(topic)}
                    onChange={(event) => updateTopic(topic, event.currentTarget.checked)}
                    type="checkbox"
                  />
                  <span>{topic}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <label className={styles.controlLabel} htmlFor="catalog-author">
            {copy.browse.authorLabel}
          </label>
          <select
            className={styles.select}
            id="catalog-author"
            onChange={(event) => pushCatalogState({
              ...state,
              author: getSingleChoiceValue(event.currentTarget.value),
              page: 1,
            })}
            value={state.author ?? ""}
          >
            <option value="">{copy.browse.allAuthorsLabel}</option>
            {data.authors.map((author) => (
              <option key={author.value} value={author.value}>{author.label}</option>
            ))}
          </select>
          <label className={styles.controlLabel} htmlFor="catalog-collection">
            {copy.browse.collectionLabel}
          </label>
          <select
            className={styles.select}
            id="catalog-collection"
            onChange={(event) => pushCatalogState({
              ...state,
              collection: getSingleChoiceValue(event.currentTarget.value),
              page: 1,
            })}
            value={state.collection ?? ""}
          >
            <option value="">{copy.browse.allCollectionsLabel}</option>
            {data.collections.map((collection) => (
              <option key={collection.value} value={collection.value}>{collection.label}</option>
            ))}
          </select>
          <label className={styles.controlLabel} htmlFor="catalog-license">
            {copy.browse.licenseLabel}
          </label>
          <select
            className={styles.select}
            id="catalog-license"
            onChange={(event) => pushCatalogState({
              ...state,
              license: getSingleChoiceValue(event.currentTarget.value),
              page: 1,
            })}
            value={state.license ?? ""}
          >
            <option value="">{copy.browse.allLicensesLabel}</option>
            {data.licenses.map((license) => (
              <option key={license} value={license}>{license}</option>
            ))}
          </select>
        </aside>
      </details>
      <section className={styles.results} aria-label={copy.title}>
        <div className={styles.resultsToolbar}>
          <p
            aria-atomic="true"
            aria-live="polite"
            className={styles.resultsStart}
            data-testid="catalog-result-count"
            ref={resultStartRef}
            tabIndex={-1}
          >
            {formatResultCount(renderedResultCount, locale, copy)}
          </p>
          <label className={styles.sortControl} htmlFor="catalog-sort">
            <span>{copy.browse.sortLabel}</span>
            <select
              className={styles.select}
              data-testid="catalog-sort"
              id="catalog-sort"
              onChange={(event) => pushCatalogState({
                ...state,
                sort: getSortValue(event.currentTarget.value),
                page: 1,
              })}
              value={result.sort}
            >
              <option value="relevance">{copy.browse.sortRelevanceLabel}</option>
              <option value="title">{copy.browse.sortTitleLabel}</option>
              <option value="newest">{copy.browse.sortNewestLabel}</option>
            </select>
          </label>
        </div>
        {isHydrated && result.totalCount === 0 ? (
          <p className={pageStyles.empty} role="status">
            {copy.browse.noResultsLabel}
          </p>
        ) : (
          <div className={pageStyles.grid} data-testid="catalog-results">
            {renderedPackages.map((item) => (
              <PublicCatalogPackageCard
                copy={copy}
                key={item.packageView.packageMetadata.packageId}
                locale={locale}
                packageView={item.packageView}
              />
            ))}
          </div>
        )}
        {isHydrated && result.totalPages > 1 ? (
          <nav className={styles.pagination} aria-label={copy.browse.paginationLabel}>
            <button
              data-testid="catalog-previous-page"
              disabled={result.page === 1}
              onClick={() => updatePage(result.page - 1)}
              type="button"
            >
              {copy.browse.previousPageLabel}
            </button>
            <p aria-live="polite">
              {formatPageStatus(result.page, result.totalPages, locale, copy)}
            </p>
            <button
              data-testid="catalog-next-page"
              disabled={result.page === result.totalPages}
              onClick={() => updatePage(result.page + 1)}
              type="button"
            >
              {copy.browse.nextPageLabel}
            </button>
          </nav>
        ) : null}
      </section>
    </div>
  );
}
