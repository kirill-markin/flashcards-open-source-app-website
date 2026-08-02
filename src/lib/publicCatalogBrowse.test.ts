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
