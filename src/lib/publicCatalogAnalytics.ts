import type { AppLocale } from "./i18n";
import type { PublicCatalogSort } from "./publicCatalogBrowse";

export const PUBLIC_CATALOG_SEARCH_SETTLE_DELAY_MS = 600;

export type PublicCatalogFilterCategory =
  | "all"
  | "author"
  | "collection"
  | "language"
  | "license";

export type PublicCatalogFilterAction =
  | "add"
  | "clear"
  | "remove"
  | "select";

export type PublicCatalogNavigationPlacement = "card_cover" | "card_title";
export type PublicCatalogInstallPlacement = "top" | "middle" | "bottom";

export interface PublicCatalogFilterAnalytics {
  readonly action: PublicCatalogFilterAction;
  readonly category: PublicCatalogFilterCategory;
  readonly locale: AppLocale;
  readonly result_count: number;
  readonly selected_count: number;
}

export interface PublicCatalogInstallAnalytics {
  readonly package_id: string;
  readonly placement: PublicCatalogInstallPlacement;
}

export interface PublicCatalogNavigationAnalytics {
  readonly locale: AppLocale;
  readonly package_id: string;
  readonly placement: PublicCatalogNavigationPlacement;
}

export interface PublicCatalogPaginationAnalytics {
  readonly locale: AppLocale;
  readonly page: number;
  readonly result_count: number;
  readonly total_pages: number;
}

export interface PublicCatalogSearchAnalytics {
  readonly has_query: boolean;
  readonly locale: AppLocale;
  readonly query_length: number;
  readonly result_count: number;
}

export interface PublicCatalogSortAnalytics {
  readonly locale: AppLocale;
  readonly result_count: number;
  readonly sort: PublicCatalogSort;
}

export interface PublicCatalogSearchAnalyticsScheduler {
  readonly cancel: () => void;
  readonly rescheduleIfPending: (analytics: PublicCatalogSearchAnalytics) => void;
  readonly schedule: (analytics: PublicCatalogSearchAnalytics) => void;
}

export interface PublicCatalogUrlEventSource {
  readonly addEventListener: (type: string, listener: EventListener) => void;
  readonly removeEventListener: (type: string, listener: EventListener) => void;
}

type SetAnalyticsTimeout = (
  callback: () => void,
  delayMilliseconds: number,
) => number;

type ClearAnalyticsTimeout = (timeoutId: number) => void;

export function createPublicCatalogSearchAnalytics(
  locale: AppLocale,
  query: string,
  resultCount: number,
): PublicCatalogSearchAnalytics {
  return {
    has_query: query.trim() !== "",
    locale,
    query_length: [...query].length,
    result_count: resultCount,
  };
}

export function createPublicCatalogFilterAnalytics(
  locale: AppLocale,
  category: PublicCatalogFilterCategory,
  action: PublicCatalogFilterAction,
  resultCount: number,
  selectedCount: number,
): PublicCatalogFilterAnalytics {
  return {
    action,
    category,
    locale,
    result_count: resultCount,
    selected_count: selectedCount,
  };
}

export function createPublicCatalogInstallAnalytics(
  packageId: string,
  placement: PublicCatalogInstallPlacement,
): PublicCatalogInstallAnalytics {
  return {
    package_id: packageId,
    placement,
  };
}

export function createPublicCatalogNavigationAnalytics(
  locale: AppLocale,
  packageId: string,
  placement: PublicCatalogNavigationPlacement,
): PublicCatalogNavigationAnalytics {
  return {
    locale,
    package_id: packageId,
    placement,
  };
}

export function createPublicCatalogPaginationAnalytics(
  locale: AppLocale,
  page: number,
  resultCount: number,
  totalPages: number,
): PublicCatalogPaginationAnalytics {
  return {
    locale,
    page,
    result_count: resultCount,
    total_pages: totalPages,
  };
}

export function createPublicCatalogSortAnalytics(
  locale: AppLocale,
  sort: PublicCatalogSort,
  resultCount: number,
): PublicCatalogSortAnalytics {
  return {
    locale,
    result_count: resultCount,
    sort,
  };
}

export function createPublicCatalogSearchAnalyticsScheduler(
  delayMilliseconds: number,
  setAnalyticsTimeout: SetAnalyticsTimeout,
  clearAnalyticsTimeout: ClearAnalyticsTimeout,
  emitAnalytics: (analytics: PublicCatalogSearchAnalytics) => void,
): PublicCatalogSearchAnalyticsScheduler {
  let timeoutId: number | null = null;

  const cancel = (): void => {
    if (timeoutId === null) {
      return;
    }

    clearAnalyticsTimeout(timeoutId);
    timeoutId = null;
  };

  const schedule = (analytics: PublicCatalogSearchAnalytics): void => {
    cancel();
    timeoutId = setAnalyticsTimeout(() => {
      timeoutId = null;
      emitAnalytics(analytics);
    }, delayMilliseconds);
  };

  const rescheduleIfPending = (analytics: PublicCatalogSearchAnalytics): void => {
    if (timeoutId === null) {
      return;
    }

    schedule(analytics);
  };

  return { cancel, rescheduleIfPending, schedule };
}

export function updatePendingPublicCatalogSearchAnalytics(
  scheduler: PublicCatalogSearchAnalyticsScheduler,
  locale: AppLocale,
  query: string,
  resultCount: number,
): void {
  if (query.trim() === "") {
    scheduler.cancel();
    return;
  }

  scheduler.rescheduleIfPending(
    createPublicCatalogSearchAnalytics(locale, query, resultCount),
  );
}

export function subscribeToPublicCatalogUrlChanges(
  eventSource: PublicCatalogUrlEventSource,
  urlChangeEventName: string,
  onStoreChange: () => void,
  onExternalUrlChange: () => void,
): () => void {
  const onPopState = (): void => {
    onExternalUrlChange();
    onStoreChange();
  };

  eventSource.addEventListener("popstate", onPopState);
  eventSource.addEventListener(urlChangeEventName, onStoreChange);

  return (): void => {
    eventSource.removeEventListener("popstate", onPopState);
    eventSource.removeEventListener(urlChangeEventName, onStoreChange);
  };
}
