import assert from "node:assert/strict";
import test from "node:test";
import {
  getPublicCatalogUrl,
  parsePublicCatalogQuery,
  PUBLIC_CATALOG_PAGE_SIZE,
  queryPublicCatalogPackages,
  serializePublicCatalogQuery,
  type PublicCatalogBrowseData,
  type PublicCatalogBrowsePackage,
  type PublicCatalogQueryState,
} from "./publicCatalogBrowse";
import {
  createPublicCatalogFilterAnalytics,
  createPublicCatalogInstallAnalytics,
  createPublicCatalogNavigationAnalytics,
  createPublicCatalogPaginationAnalytics,
  createPublicCatalogSearchAnalytics,
  createPublicCatalogSearchAnalyticsScheduler,
  createPublicCatalogSortAnalytics,
  subscribeToPublicCatalogUrlChanges,
  updatePendingPublicCatalogSearchAnalytics,
} from "./publicCatalogAnalytics";

function createPackage(
  slug: string,
  title: string,
  summary: string,
  authorSlug: string,
  authorName: string,
  languages: ReadonlyArray<string>,
  topics: ReadonlyArray<string>,
  license: string,
  publishedAt: string,
  collections: ReadonlyArray<Readonly<{ value: string; label: string }>>,
): PublicCatalogBrowsePackage {
  return {
    packageView: {
      packageMetadata: {
        packageId: `id-${slug}`,
        slug,
        title,
        summary,
        languageTags: languages,
        topicTags: topics,
        license,
        publishedAt,
      },
      author: {
        slug: authorSlug,
        displayName: authorName,
      },
      latestVersion: { cardCount: 10 },
      coverMediaAsset: null,
    },
    collections,
  };
}

const starterCollection = [{ value: "starter", label: "Starter Collection" }];
const advancedCollection = [{ value: "advanced", label: "Advanced Grammar" }];

function createBrowseData(
  packages: ReadonlyArray<PublicCatalogBrowsePackage>,
): PublicCatalogBrowseData {
  return {
    packages,
    languages: ["en", "es", "fr"],
    topics: ["grammar", "history"],
    authors: [
      { value: "author-one", label: "Author One" },
      { value: "author-two", label: "Author Two" },
    ],
    collections: [
      { value: "advanced", label: "Advanced Grammar" },
      { value: "starter", label: "Starter Collection" },
    ],
    licenses: ["CC0-1.0", "MIT"],
  };
}

const packages = [
  createPackage(
    "grammar",
    "Grammar",
    "An exact title match",
    "author-one",
    "Author One",
    ["en"],
    ["grammar"],
    "CC0-1.0",
    "2026-08-01T10:00:00.000Z",
    starterCollection,
  ),
  createPackage(
    "grammar-basics",
    "Grammar Basics",
    "A prefix title match",
    "author-one",
    "Author One",
    ["es"],
    ["history"],
    "MIT",
    "2026-08-03T10:00:00.000Z",
    starterCollection,
  ),
  createPackage(
    "advanced-grammar",
    "Advanced Grammar",
    "A title contains match",
    "author-two",
    "Author Two",
    ["fr"],
    ["grammar"],
    "CC0-1.0",
    "2026-08-02T10:00:00.000Z",
    advancedCollection,
  ),
];
const data = createBrowseData(packages);

test("creates aggregate-only search analytics", () => {
  const analytics = createPublicCatalogSearchAnalytics(
    "en",
    "private search text",
    2,
  );

  assert.deepEqual(analytics, {
    has_query: true,
    locale: "en",
    query_length: 19,
    result_count: 2,
  });
  assert.equal("query" in analytics, false);
  assert.equal(JSON.stringify(analytics).includes("private search text"), false);
});

test("creates privacy-limited payloads for every catalog analytics event", () => {
  const payloads = {
    filter: createPublicCatalogFilterAnalytics("en", "topic", "add", 4, 2),
    install: createPublicCatalogInstallAnalytics("en", "opaque-package-id", 3),
    navigation: createPublicCatalogNavigationAnalytics(
      "en",
      "opaque-package-id",
      "card_title",
    ),
    pagination: createPublicCatalogPaginationAnalytics("en", 2, 24, 3),
    search: createPublicCatalogSearchAnalytics("en", "private query", 4),
    sort: createPublicCatalogSortAnalytics("en", "newest", 4),
  };

  assert.deepEqual(payloads, {
    filter: {
      action: "add",
      category: "topic",
      locale: "en",
      result_count: 4,
      selected_count: 2,
    },
    install: {
      locale: "en",
      package_id: "opaque-package-id",
      version_number: 3,
    },
    navigation: {
      locale: "en",
      package_id: "opaque-package-id",
      placement: "card_title",
    },
    pagination: {
      locale: "en",
      page: 2,
      result_count: 24,
      total_pages: 3,
    },
    search: {
      has_query: true,
      locale: "en",
      query_length: 13,
      result_count: 4,
    },
    sort: {
      locale: "en",
      result_count: 4,
      sort: "newest",
    },
  });

  const serializedPayloads = JSON.stringify(payloads);

  assert.equal(serializedPayloads.includes("private query"), false);
  assert.equal(serializedPayloads.includes("package_slug"), false);
  assert.equal(serializedPayloads.includes("topic-value"), false);
  assert.equal(serializedPayloads.includes("https://"), false);
});

test("debounces rapid searches and emits only the settled search", () => {
  const callbacks = new Map<number, () => void>();
  const clearedTimeoutIds: number[] = [];
  const emittedAnalytics: Array<ReturnType<typeof createPublicCatalogSearchAnalytics>> = [];
  let nextTimeoutId = 1;
  const scheduler = createPublicCatalogSearchAnalyticsScheduler(
    600,
    (callback, delayMilliseconds) => {
      assert.equal(delayMilliseconds, 600);
      const timeoutId = nextTimeoutId;

      nextTimeoutId += 1;
      callbacks.set(timeoutId, callback);
      return timeoutId;
    },
    (timeoutId) => {
      clearedTimeoutIds.push(timeoutId);
      callbacks.delete(timeoutId);
    },
    (analytics) => emittedAnalytics.push(analytics),
  );
  const firstAnalytics = createPublicCatalogSearchAnalytics("en", "a", 3);
  const secondAnalytics = createPublicCatalogSearchAnalytics("en", "ab", 1);

  scheduler.schedule(firstAnalytics);
  scheduler.schedule(secondAnalytics);
  assert.deepEqual(clearedTimeoutIds, [1]);
  assert.equal(callbacks.has(1), false);
  callbacks.get(2)?.();
  assert.deepEqual(emittedAnalytics, [secondAnalytics]);
});

test("emits a normally settled search after the debounce deadline", () => {
  const callbacks = new Map<number, () => void>();
  const emittedAnalytics: Array<ReturnType<typeof createPublicCatalogSearchAnalytics>> = [];
  const scheduler = createPublicCatalogSearchAnalyticsScheduler(
    600,
    (callback) => {
      callbacks.set(1, callback);
      return 1;
    },
    (timeoutId) => callbacks.delete(timeoutId),
    (analytics) => emittedAnalytics.push(analytics),
  );
  const analytics = createPublicCatalogSearchAnalytics("en", "settled", 2);

  scheduler.schedule(analytics);
  callbacks.get(1)?.();

  assert.deepEqual(emittedAnalytics, [analytics]);
});

test("reschedules pending search analytics through filter sort and pagination changes", () => {
  const callbacks = new Map<number, () => void>();
  const clearedTimeoutIds: number[] = [];
  const emittedAnalytics: Array<ReturnType<typeof createPublicCatalogSearchAnalytics>> = [];
  let nextTimeoutId = 1;
  const scheduler = createPublicCatalogSearchAnalyticsScheduler(
    600,
    (callback) => {
      const timeoutId = nextTimeoutId;

      nextTimeoutId += 1;
      callbacks.set(timeoutId, callback);
      return timeoutId;
    },
    (timeoutId) => {
      clearedTimeoutIds.push(timeoutId);
      callbacks.delete(timeoutId);
    },
    (analytics) => emittedAnalytics.push(analytics),
  );
  const afterPagination = createPublicCatalogSearchAnalytics("en", "active", 4);

  scheduler.schedule(createPublicCatalogSearchAnalytics("en", "active", 10));
  updatePendingPublicCatalogSearchAnalytics(scheduler, "en", "active", 8);
  updatePendingPublicCatalogSearchAnalytics(scheduler, "en", "active", 6);
  updatePendingPublicCatalogSearchAnalytics(scheduler, "en", "active", 4);

  assert.deepEqual(clearedTimeoutIds, [1, 2, 3]);
  assert.deepEqual([...callbacks.keys()], [4]);
  callbacks.get(4)?.();
  assert.deepEqual(emittedAnalytics, [afterPagination]);

  updatePendingPublicCatalogSearchAnalytics(scheduler, "en", "active", 7);
  assert.deepEqual([...callbacks.keys()], [4]);
  assert.deepEqual(emittedAnalytics, [afterPagination]);
});

test("cancels a pending search when its query is discarded", () => {
  const callbacks = new Map<number, () => void>();
  const clearedTimeoutIds: number[] = [];
  const emittedAnalytics: Array<ReturnType<typeof createPublicCatalogSearchAnalytics>> = [];
  const scheduler = createPublicCatalogSearchAnalyticsScheduler(
    600,
    (callback) => {
      callbacks.set(1, callback);
      return 1;
    },
    (timeoutId) => {
      clearedTimeoutIds.push(timeoutId);
      callbacks.delete(timeoutId);
    },
    (analytics) => emittedAnalytics.push(analytics),
  );

  scheduler.schedule(createPublicCatalogSearchAnalytics("en", "discarded", 2));
  updatePendingPublicCatalogSearchAnalytics(scheduler, "en", "", 3);

  assert.deepEqual(clearedTimeoutIds, [1]);
  assert.equal(callbacks.has(1), false);
  assert.deepEqual(emittedAnalytics, []);
});

test("cancels discarded search telemetry before applying a popstate snapshot", () => {
  const callbacks = new Map<number, () => void>();
  const clearedTimeoutIds: number[] = [];
  const emittedAnalytics: Array<ReturnType<typeof createPublicCatalogSearchAnalytics>> = [];
  const eventSource = new EventTarget();
  let nextTimeoutId = 1;
  let storeChangeCount = 0;
  const scheduler = createPublicCatalogSearchAnalyticsScheduler(
    600,
    (callback) => {
      const timeoutId = nextTimeoutId;

      nextTimeoutId += 1;
      callbacks.set(timeoutId, callback);
      return timeoutId;
    },
    (timeoutId) => {
      clearedTimeoutIds.push(timeoutId);
      callbacks.delete(timeoutId);
    },
    (analytics) => emittedAnalytics.push(analytics),
  );
  const unsubscribe = subscribeToPublicCatalogUrlChanges(
    eventSource,
    "public-catalog-url-change",
    () => {
      storeChangeCount += 1;
    },
    scheduler.cancel,
  );

  scheduler.schedule(createPublicCatalogSearchAnalytics("en", "discarded", 0));
  eventSource.dispatchEvent(new Event("popstate"));

  assert.deepEqual(clearedTimeoutIds, [1]);
  assert.equal(callbacks.has(1), false);
  assert.equal(storeChangeCount, 1);
  assert.deepEqual(emittedAnalytics, []);

  scheduler.schedule(createPublicCatalogSearchAnalytics("en", "kept", 1));
  eventSource.dispatchEvent(new Event("public-catalog-url-change"));
  callbacks.get(2)?.();

  assert.deepEqual(clearedTimeoutIds, [1]);
  assert.equal(storeChangeCount, 2);
  assert.equal(emittedAnalytics.length, 1);
  unsubscribe();
});

test("removes URL listeners and cancels pending telemetry during unmount cleanup", () => {
  const callbacks = new Map<number, () => void>();
  const clearedTimeoutIds: number[] = [];
  const eventSource = new EventTarget();
  let storeChangeCount = 0;
  const scheduler = createPublicCatalogSearchAnalyticsScheduler(
    600,
    (callback) => {
      callbacks.set(1, callback);
      return 1;
    },
    (timeoutId) => {
      clearedTimeoutIds.push(timeoutId);
      callbacks.delete(timeoutId);
    },
    () => {
      throw new Error("Unmounted search analytics must not emit.");
    },
  );
  const unsubscribe = subscribeToPublicCatalogUrlChanges(
    eventSource,
    "public-catalog-url-change",
    () => {
      storeChangeCount += 1;
    },
    scheduler.cancel,
  );

  scheduler.schedule(createPublicCatalogSearchAnalytics("en", "pending", 1));
  unsubscribe();
  scheduler.cancel();
  eventSource.dispatchEvent(new Event("popstate"));
  eventSource.dispatchEvent(new Event("public-catalog-url-change"));

  assert.deepEqual(clearedTimeoutIds, [1]);
  assert.equal(callbacks.has(1), false);
  assert.equal(storeChangeCount, 0);
});

function createEmptyState(): PublicCatalogQueryState {
  return {
    q: "",
    languages: [],
    topics: [],
    author: null,
    collection: null,
    license: null,
    sort: null,
    page: 1,
  };
}

test("parses known query values and predictably ignores unknown values", () => {
  const state = parsePublicCatalogQuery(
    "?q=Alpha+Grammar&language=zz&language=es&language=en&language=es"
      + "&topic=history&topic=missing&author=missing&collection=starter"
      + "&license=CC0-1.0&sort=unsupported&page=-2&unrelated=value",
    data,
  );

  assert.deepEqual(state, {
    q: "Alpha Grammar",
    languages: ["en", "es"],
    topics: ["history"],
    author: null,
    collection: "starter",
    license: "CC0-1.0",
    sort: null,
    page: 1,
  });
});

test("serializes query state deterministically and omits empty or default values", () => {
  assert.equal(serializePublicCatalogQuery(createEmptyState()), "");
  assert.equal(
    serializePublicCatalogQuery({
      q: "Alpha Grammar",
      languages: ["es", "en"],
      topics: ["history"],
      author: "author-one",
      collection: "starter",
      license: "CC0-1.0",
      sort: "newest",
      page: 2,
    }),
    "?q=Alpha+Grammar&language=en&language=es&topic=history&author=author-one"
      + "&collection=starter&license=CC0-1.0&sort=newest&page=2",
  );
  assert.equal(
    serializePublicCatalogQuery({ ...createEmptyState(), q: "grammar", sort: "relevance" }),
    "?q=grammar",
  );
});

test("applies OR within repeated facets and AND between different facets", () => {
  const result = queryPublicCatalogPackages(packages, {
    ...createEmptyState(),
    languages: ["en", "es"],
    topics: ["grammar"],
    author: "author-one",
    collection: "starter",
  });

  assert.deepEqual(
    result.packages.map((item) => item.packageView.packageMetadata.slug),
    ["grammar"],
  );
});

test("ranks exact, prefix, and contains title matches deterministically", () => {
  const result = queryPublicCatalogPackages(packages, {
    ...createEmptyState(),
    q: "Grämmar",
  });

  assert.equal(result.sort, "relevance");
  assert.deepEqual(
    result.packages.map((item) => item.packageView.packageMetadata.slug),
    ["grammar", "grammar-basics", "advanced-grammar"],
  );
});

test("searches author, tag, license, and collection membership text", () => {
  assert.deepEqual(
    queryPublicCatalogPackages(packages, { ...createEmptyState(), q: "author two" })
      .packages.map((item) => item.packageView.packageMetadata.slug),
    ["advanced-grammar"],
  );
  assert.deepEqual(
    queryPublicCatalogPackages(packages, { ...createEmptyState(), q: "MIT history" })
      .packages.map((item) => item.packageView.packageMetadata.slug),
    ["grammar-basics"],
  );
  assert.deepEqual(
    queryPublicCatalogPackages(packages, { ...createEmptyState(), q: "starter" })
      .packages.map((item) => item.packageView.packageMetadata.slug),
    ["grammar", "grammar-basics"],
  );
});

test("supports explicit title and newest ordering with stable slug ties", () => {
  const sameDatePackages = packages.map((item) => ({
    ...item,
    packageView: {
      ...item.packageView,
      packageMetadata: {
        ...item.packageView.packageMetadata,
        publishedAt: "2026-08-02T10:00:00.000Z",
      },
    },
  }));

  assert.deepEqual(
    queryPublicCatalogPackages(packages, { ...createEmptyState(), sort: "title" })
      .packages.map((item) => item.packageView.packageMetadata.slug),
    ["advanced-grammar", "grammar", "grammar-basics"],
  );
  assert.deepEqual(
    queryPublicCatalogPackages(sameDatePackages, createEmptyState())
      .packages.map((item) => item.packageView.packageMetadata.slug),
    ["advanced-grammar", "grammar", "grammar-basics"],
  );
});

test("uses a fixed page size and clamps oversized pages to the final page", () => {
  const manyPackages = Array.from({ length: PUBLIC_CATALOG_PAGE_SIZE + 2 }, (_, index) =>
    createPackage(
      `package-${String(index).padStart(2, "0")}`,
      `Package ${index}`,
      "Summary",
      "author-one",
      "Author One",
      ["en"],
      ["grammar"],
      "CC0-1.0",
      `2026-07-${String(index + 1).padStart(2, "0")}T10:00:00.000Z`,
      starterCollection,
    ),
  );
  const result = queryPublicCatalogPackages(manyPackages, {
    ...createEmptyState(),
    page: 999,
  });

  assert.equal(result.totalCount, PUBLIC_CATALOG_PAGE_SIZE + 2);
  assert.equal(result.totalPages, 2);
  assert.equal(result.page, 2);
  assert.equal(result.packages.length, 2);
});

test("re-parses URL snapshots for back-forward state and preserves localized paths", () => {
  const firstState = parsePublicCatalogQuery("?language=en&page=2", data);
  const secondState = parsePublicCatalogQuery("?q=grammar&sort=title", data);

  assert.deepEqual(firstState.languages, ["en"]);
  assert.equal(firstState.page, 2);
  assert.equal(secondState.q, "grammar");
  assert.equal(secondState.sort, "title");
  assert.equal(
    getPublicCatalogUrl("/ar/catalog/", secondState),
    "/ar/catalog/?q=grammar&sort=title",
  );
});
