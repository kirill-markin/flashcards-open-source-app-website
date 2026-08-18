import type { AppLocale } from "./localeConfig";
import type {
  PublicCatalogPackageCardView,
  PublicCatalogReadModel,
} from "./publicCatalogReadModel";

export const PUBLIC_CATALOG_PAGE_SIZE = 24;

export const PUBLIC_CATALOG_SORT_VALUES = [
  "relevance",
  "title",
  "newest",
] as const;

export type PublicCatalogSort = (typeof PUBLIC_CATALOG_SORT_VALUES)[number];

export type PublicCatalogBrowseChoice = Readonly<{
  value: string;
  label: string;
}>;

export type PublicCatalogBrowsePackage = Readonly<{
  packageView: PublicCatalogPackageCardView;
  collections: ReadonlyArray<PublicCatalogBrowseChoice>;
}>;

export type PublicCatalogBrowseData = Readonly<{
  packages: ReadonlyArray<PublicCatalogBrowsePackage>;
  languages: ReadonlyArray<string>;
  authors: ReadonlyArray<PublicCatalogBrowseChoice>;
  collections: ReadonlyArray<PublicCatalogBrowseChoice>;
}>;

export type PublicCatalogQueryState = Readonly<{
  q: string;
  languages: ReadonlyArray<string>;
  author: string | null;
  collection: string | null;
  sort: PublicCatalogSort | null;
  page: number;
}>;

export type PublicCatalogQueryResult = Readonly<{
  packages: ReadonlyArray<PublicCatalogBrowsePackage>;
  totalCount: number;
  totalPages: number;
  page: number;
  sort: PublicCatalogSort;
}>;

function compareStrings(firstValue: string, secondValue: string): number {
  if (firstValue < secondValue) {
    return -1;
  }

  if (firstValue > secondValue) {
    return 1;
  }

  return 0;
}

function compareChoices(
  firstChoice: PublicCatalogBrowseChoice,
  secondChoice: PublicCatalogBrowseChoice,
): number {
  return compareStrings(
    normalizePublicCatalogSearchText(firstChoice.label),
    normalizePublicCatalogSearchText(secondChoice.label),
  ) || compareStrings(firstChoice.value, secondChoice.value);
}

function getUniqueSortedValues(values: ReadonlyArray<string>): ReadonlyArray<string> {
  return [...new Set(values)].sort(compareStrings);
}

function getUniqueSortedChoices(
  choices: ReadonlyArray<PublicCatalogBrowseChoice>,
): ReadonlyArray<PublicCatalogBrowseChoice> {
  const choiceByValue = new Map<string, PublicCatalogBrowseChoice>();

  choices.forEach((choice) => {
    if (choiceByValue.has(choice.value) === false) {
      choiceByValue.set(choice.value, choice);
    }
  });

  return [...choiceByValue.values()].sort(compareChoices);
}

export function createPublicCatalogBrowseData(
  catalog: PublicCatalogReadModel,
  defaultAudienceLanguage: AppLocale,
): PublicCatalogBrowseData {
  const packages = catalog.packages.map((packageView): PublicCatalogBrowsePackage => {
    const collections = (catalog.collectionsByPackageId.get(
      packageView.packageMetadata.packageId,
    ) ?? []).map((collection): PublicCatalogBrowseChoice => ({
      value: collection.slug,
      label: collection.title,
    }));

    return {
      packageView: {
        packageMetadata: {
          packageId: packageView.packageMetadata.packageId,
          slug: packageView.packageMetadata.slug,
          publishedAt: packageView.packageMetadata.publishedAt,
        },
        author: {
          slug: packageView.author.slug,
          displayName: packageView.author.displayName,
        },
        latestVersion: {
          title: packageView.latestVersion.title,
          summary: packageView.latestVersion.summary,
          languageTags: packageView.latestVersion.languageTags,
          license: packageView.latestVersion.license,
          cardCount: packageView.latestVersion.cardCount,
        },
        coverMediaAsset: packageView.coverMediaAsset === null
          ? null
          : {
              altText: packageView.coverMediaAsset.altText,
              downloadUrl: packageView.coverMediaAsset.downloadUrl,
              mimeType: packageView.coverMediaAsset.mimeType,
            },
      },
      collections: [...collections].sort(compareChoices),
    };
  });
  const authors = getUniqueSortedChoices(
    packages.map(({ packageView }) => ({
      value: packageView.author.slug,
      label: packageView.author.displayName,
    })),
  );
  const collections = getUniqueSortedChoices(
    packages.flatMap((catalogPackage) => catalogPackage.collections),
  );

  return {
    packages,
    languages: getUniqueSortedValues(
      [
        defaultAudienceLanguage,
        ...packages.flatMap(({ packageView }) => packageView.latestVersion.languageTags),
      ],
    ),
    authors,
    collections,
  };
}

export function normalizePublicCatalogSearchText(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/\p{Mark}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/gu, " ");
}

function getDefaultPublicCatalogSort(query: string): PublicCatalogSort {
  return normalizePublicCatalogSearchText(query) === "" ? "newest" : "relevance";
}

export function resolvePublicCatalogSort(
  state: PublicCatalogQueryState,
): PublicCatalogSort {
  return state.sort ?? getDefaultPublicCatalogSort(state.q);
}

function parseRepeatedChoice(
  searchParams: URLSearchParams,
  key: "language",
  choices: ReadonlyArray<string>,
): ReadonlyArray<string> {
  const requestedValues = new Set(searchParams.getAll(key));

  return choices.filter((choice) => requestedValues.has(choice));
}

function parseSingleChoice(
  searchParams: URLSearchParams,
  key: "author" | "collection",
  choices: ReadonlyArray<string>,
): string | null {
  const requestedValue = searchParams.get(key);

  return requestedValue !== null && choices.includes(requestedValue)
    ? requestedValue
    : null;
}

function parsePage(searchParams: URLSearchParams): number {
  const value = searchParams.get("page");

  if (value === null || /^[1-9]\d*$/.test(value) === false) {
    return 1;
  }

  const page = Number(value);

  return Number.isSafeInteger(page) ? page : 1;
}

export function parsePublicCatalogQuery(
  search: string,
  data: PublicCatalogBrowseData,
  defaultAudienceLanguage: AppLocale,
): PublicCatalogQueryState {
  if (data.languages.includes(defaultAudienceLanguage) === false) {
    throw new Error(
      `Public catalog default audience language must be an available choice. received=${defaultAudienceLanguage}`,
    );
  }

  const searchParams = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  const q = searchParams.get("q") ?? "";
  const requestedSort = searchParams.get("sort");
  const supportedSort = PUBLIC_CATALOG_SORT_VALUES.find(
    (sortValue) => sortValue === requestedSort,
  ) ?? null;

  return {
    q,
    languages: searchParams.has("language")
      ? parseRepeatedChoice(searchParams, "language", data.languages)
      : [defaultAudienceLanguage],
    author: parseSingleChoice(
      searchParams,
      "author",
      data.authors.map((choice) => choice.value),
    ),
    collection: parseSingleChoice(
      searchParams,
      "collection",
      data.collections.map((choice) => choice.value),
    ),
    sort: supportedSort === getDefaultPublicCatalogSort(q) ? null : supportedSort,
    page: parsePage(searchParams),
  };
}

export function serializePublicCatalogQuery(state: PublicCatalogQueryState): string {
  const searchParams = new URLSearchParams();

  if (normalizePublicCatalogSearchText(state.q) !== "") {
    searchParams.set("q", state.q);
  }

  if (state.author !== null) {
    searchParams.set("author", state.author);
  }

  if (state.collection !== null) {
    searchParams.set("collection", state.collection);
  }

  if (state.sort !== null && state.sort !== getDefaultPublicCatalogSort(state.q)) {
    searchParams.set("sort", state.sort);
  }

  if (state.page > 1) {
    searchParams.set("page", String(state.page));
  }

  if (state.languages.length === 0) {
    searchParams.append("language", "");
  } else {
    [...state.languages].sort(compareStrings).forEach((language) => {
      searchParams.append("language", language);
    });
  }

  return `?${searchParams}`;
}

export function getPublicCatalogUrl(
  pathname: string,
  state: PublicCatalogQueryState,
): string {
  return `${pathname}${serializePublicCatalogQuery(state)}`;
}

function matchesFilters(
  item: PublicCatalogBrowsePackage,
  state: PublicCatalogQueryState,
): boolean {
  const { latestVersion } = item.packageView;

  return (state.languages.length === 0
      || state.languages.some((language) => latestVersion.languageTags.includes(language)))
    && (state.author === null || item.packageView.author.slug === state.author)
    && (state.collection === null
      || item.collections.some((collection) => collection.value === state.collection));
}

function scoreSearchField(value: string, term: string, weight: number): number {
  if (value === term) {
    return weight * 4;
  }

  if (value.startsWith(term)) {
    return weight * 3;
  }

  if (value.includes(term)) {
    return weight * 2;
  }

  return 0;
}

function getSearchScore(item: PublicCatalogBrowsePackage, query: string): number | null {
  const normalizedQuery = normalizePublicCatalogSearchText(query);

  if (normalizedQuery === "") {
    return 0;
  }

  const { latestVersion } = item.packageView;
  const title = normalizePublicCatalogSearchText(latestVersion.title);
  const fields = [
    { value: title, weight: 100 },
    { value: normalizePublicCatalogSearchText(latestVersion.summary), weight: 35 },
    { value: normalizePublicCatalogSearchText(item.packageView.author.displayName), weight: 45 },
    ...latestVersion.languageTags.map((value) => ({
      value: normalizePublicCatalogSearchText(value),
      weight: 25,
    })),
    { value: normalizePublicCatalogSearchText(latestVersion.license), weight: 20 },
    ...item.collections.flatMap((collection) => [
      { value: normalizePublicCatalogSearchText(collection.label), weight: 30 },
      { value: normalizePublicCatalogSearchText(collection.value), weight: 20 },
    ]),
  ];
  const tokenScores = normalizedQuery.split(" ").map((term) =>
    Math.max(...fields.map((field) => scoreSearchField(field.value, term, field.weight))),
  );

  if (tokenScores.some((score) => score === 0)) {
    return null;
  }

  return tokenScores.reduce((total, score) => total + score, 0)
    + scoreSearchField(title, normalizedQuery, 150);
}

function compareByTitle(
  firstItem: PublicCatalogBrowsePackage,
  secondItem: PublicCatalogBrowsePackage,
): number {
  return compareStrings(
    normalizePublicCatalogSearchText(firstItem.packageView.latestVersion.title),
    normalizePublicCatalogSearchText(secondItem.packageView.latestVersion.title),
  ) || compareStrings(
    firstItem.packageView.packageMetadata.slug,
    secondItem.packageView.packageMetadata.slug,
  );
}

function compareByNewest(
  firstItem: PublicCatalogBrowsePackage,
  secondItem: PublicCatalogBrowsePackage,
): number {
  return compareStrings(
    secondItem.packageView.packageMetadata.publishedAt,
    firstItem.packageView.packageMetadata.publishedAt,
  ) || compareStrings(
    firstItem.packageView.packageMetadata.slug,
    secondItem.packageView.packageMetadata.slug,
  );
}

export function queryPublicCatalogPackages(
  packages: ReadonlyArray<PublicCatalogBrowsePackage>,
  state: PublicCatalogQueryState,
): PublicCatalogQueryResult {
  const rankedPackages = packages
    .filter((item) => matchesFilters(item, state))
    .map((item) => ({ item, score: getSearchScore(item, state.q) }))
    .filter((rankedItem): rankedItem is Readonly<{
      item: PublicCatalogBrowsePackage;
      score: number;
    }> => rankedItem.score !== null);
  const sort = resolvePublicCatalogSort(state);
  const sortedPackages = [...rankedPackages].sort((firstItem, secondItem) => {
    if (sort === "relevance") {
      return secondItem.score - firstItem.score
        || compareByTitle(firstItem.item, secondItem.item);
    }

    if (sort === "title") {
      return compareByTitle(firstItem.item, secondItem.item);
    }

    return compareByNewest(firstItem.item, secondItem.item);
  });
  const totalCount = sortedPackages.length;
  const totalPages = Math.ceil(totalCount / PUBLIC_CATALOG_PAGE_SIZE);
  const page = Math.min(state.page, Math.max(totalPages, 1));
  const pageStart = (page - 1) * PUBLIC_CATALOG_PAGE_SIZE;

  return {
    packages: sortedPackages
      .slice(pageStart, pageStart + PUBLIC_CATALOG_PAGE_SIZE)
      .map((rankedItem) => rankedItem.item),
    totalCount,
    totalPages,
    page,
    sort,
  };
}
