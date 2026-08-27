import type {
  PublicCatalogPackageCardView,
  PublicCatalogPackageView,
} from "./publicCatalogReadModel";
import type { PublicCatalogCollection } from "./publicCatalogTypes";

const RELATED_PACKAGE_LIMIT = 6;
const WORD_SEGMENTER = new Intl.Segmenter("und", { granularity: "word" });

type WeightedTerms = ReadonlyMap<string, number>;
type PackageVector = Readonly<{
  magnitude: number;
  terms: WeightedTerms;
}>;

type RankedPackage = Readonly<{
  packageView: PublicCatalogPackageView;
  semanticScore: number;
  sharesLanguage: boolean;
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

function tokenize(value: string): ReadonlyArray<string> {
  const normalizedValue = value.normalize("NFKC").toLowerCase();

  return [...WORD_SEGMENTER.segment(normalizedValue)]
    .filter((segment) => segment.isWordLike === true)
    .map((segment) => segment.segment);
}

function addTextField(
  terms: Map<string, number>,
  value: string,
  fieldWeight: number,
): void {
  const tokens = tokenize(value);

  if (tokens.length === 0) {
    return;
  }

  const tokenWeight = fieldWeight / tokens.length;

  tokens.forEach((token) => {
    terms.set(token, (terms.get(token) ?? 0) + tokenWeight);
  });
}

function addCollectionTerms(
  terms: Map<string, number>,
  collections: ReadonlyArray<PublicCatalogCollection>,
): void {
  collections.forEach((collection) => {
    terms.set(`collection:${collection.collectionId}`, 12);
    addTextField(terms, collection.slug, 6);
    addTextField(terms, collection.title, 6);
    addTextField(terms, collection.summary, 2);
    addTextField(terms, collection.description, 1);
  });
}

function createWeightedTerms(
  packageView: PublicCatalogPackageView,
  collections: ReadonlyArray<PublicCatalogCollection>,
): WeightedTerms {
  const terms = new Map<string, number>();
  const { latestVersion } = packageView;

  addTextField(terms, latestVersion.title, 8);
  addTextField(terms, latestVersion.summary, 3);
  addTextField(terms, latestVersion.description, 1);
  addTextField(
    terms,
    packageView.cards.flatMap((card) => card.tags).join(" "),
    8,
  );
  addTextField(
    terms,
    packageView.cards
      .flatMap((card) => [card.frontText, card.backText])
      .join(" "),
    1,
  );
  addCollectionTerms(terms, collections);

  return terms;
}

function createPackageVectors(
  packages: ReadonlyArray<PublicCatalogPackageView>,
  collectionsByPackageId: ReadonlyMap<
    string,
    ReadonlyArray<PublicCatalogCollection>
  >,
): ReadonlyMap<string, PackageVector> {
  const weightedTermsByPackageId = new Map(
    packages.map((packageView): [string, WeightedTerms] => [
      packageView.packageMetadata.packageId,
      createWeightedTerms(
        packageView,
        collectionsByPackageId.get(packageView.packageMetadata.packageId) ?? [],
      ),
    ]),
  );
  const documentFrequencyByTerm = new Map<string, number>();

  weightedTermsByPackageId.forEach((terms) => {
    terms.forEach((_weight, term) => {
      documentFrequencyByTerm.set(
        term,
        (documentFrequencyByTerm.get(term) ?? 0) + 1,
      );
    });
  });

  return new Map([...weightedTermsByPackageId].map(
    ([packageId, weightedTerms]): [string, PackageVector] => {
      const terms = new Map<string, number>();
      let squaredMagnitude = 0;

      weightedTerms.forEach((termFrequency, term) => {
        const documentFrequency = documentFrequencyByTerm.get(term);

        if (documentFrequency === undefined) {
          throw new Error(
            `Cannot build public catalog recommendation vector: missing document frequency for term ${term}.`,
          );
        }

        const inverseDocumentFrequency =
          Math.log((packages.length + 1) / (documentFrequency + 1)) + 1;
        const weight = termFrequency * inverseDocumentFrequency;

        terms.set(term, weight);
        squaredMagnitude += weight * weight;
      });

      return [packageId, { terms, magnitude: Math.sqrt(squaredMagnitude) }];
    },
  ));
}

function getSemanticScore(
  firstVector: PackageVector,
  secondVector: PackageVector,
): number {
  if (firstVector.magnitude === 0 || secondVector.magnitude === 0) {
    return 0;
  }

  const [shorterTerms, longerTerms] = firstVector.terms.size <= secondVector.terms.size
    ? [firstVector.terms, secondVector.terms]
    : [secondVector.terms, firstVector.terms];
  let dotProduct = 0;

  shorterTerms.forEach((weight, term) => {
    dotProduct += weight * (longerTerms.get(term) ?? 0);
  });

  return dotProduct / (firstVector.magnitude * secondVector.magnitude);
}

function hasSharedLanguage(
  firstPackage: PublicCatalogPackageView,
  secondPackage: PublicCatalogPackageView,
): boolean {
  const firstLanguageTags = new Set(firstPackage.latestVersion.languageTags);

  return secondPackage.latestVersion.languageTags.some((languageTag) =>
    firstLanguageTags.has(languageTag));
}

function createPackageCardView(
  packageView: PublicCatalogPackageView,
): PublicCatalogPackageCardView {
  const { author, coverMediaAsset, latestVersion, packageMetadata } = packageView;

  return {
    packageMetadata: {
      packageId: packageMetadata.packageId,
      slug: packageMetadata.slug,
      publishedAt: packageMetadata.publishedAt,
    },
    author: {
      slug: author.slug,
      displayName: author.displayName,
    },
    latestVersion: {
      title: latestVersion.title,
      summary: latestVersion.summary,
      languageTags: latestVersion.languageTags,
      license: latestVersion.license,
      cardCount: latestVersion.cardCount,
    },
    coverMediaAsset: coverMediaAsset === null
      ? null
      : {
          altText: coverMediaAsset.altText,
          downloadUrl: coverMediaAsset.downloadUrl,
          mimeType: coverMediaAsset.mimeType,
        },
  };
}

function compareRankedPackages(
  firstPackage: RankedPackage,
  secondPackage: RankedPackage,
): number {
  return Number(secondPackage.sharesLanguage) - Number(firstPackage.sharesLanguage)
    || secondPackage.semanticScore - firstPackage.semanticScore
    || compareStrings(
      secondPackage.packageView.packageMetadata.publishedAt,
      firstPackage.packageView.packageMetadata.publishedAt,
    )
    || compareStrings(
      firstPackage.packageView.packageMetadata.slug,
      secondPackage.packageView.packageMetadata.slug,
    )
    || compareStrings(
      firstPackage.packageView.packageMetadata.packageId,
      secondPackage.packageView.packageMetadata.packageId,
    );
}

export function createPublicCatalogRelatedPackagesByPackageId(
  packages: ReadonlyArray<PublicCatalogPackageView>,
  collectionsByPackageId: ReadonlyMap<
    string,
    ReadonlyArray<PublicCatalogCollection>
  >,
): ReadonlyMap<string, ReadonlyArray<PublicCatalogPackageCardView>> {
  const packageVectors = createPackageVectors(packages, collectionsByPackageId);
  const packageCardsById = new Map(
    packages.map((packageView): [string, PublicCatalogPackageCardView] => [
      packageView.packageMetadata.packageId,
      createPackageCardView(packageView),
    ]),
  );

  return new Map(packages.map((packageView): [
    string,
    ReadonlyArray<PublicCatalogPackageCardView>,
  ] => {
    const packageId = packageView.packageMetadata.packageId;
    const packageVector = packageVectors.get(packageId);

    if (packageVector === undefined) {
      throw new Error(
        `Cannot build public catalog recommendations: missing vector for package ${packageId}.`,
      );
    }

    const relatedPackages = packages
      .filter((candidate) => candidate.packageMetadata.packageId !== packageId)
      .map((candidate): RankedPackage => {
        const candidateId = candidate.packageMetadata.packageId;
        const candidateVector = packageVectors.get(candidateId);

        if (candidateVector === undefined) {
          throw new Error(
            `Cannot build public catalog recommendations: missing vector for candidate package ${candidateId}.`,
          );
        }

        return {
          packageView: candidate,
          semanticScore: getSemanticScore(packageVector, candidateVector),
          sharesLanguage: hasSharedLanguage(packageView, candidate),
        };
      })
      .sort(compareRankedPackages)
      .slice(0, RELATED_PACKAGE_LIMIT)
      .map(({ packageView: candidate }) => {
        const candidateCard = packageCardsById.get(candidate.packageMetadata.packageId);

        if (candidateCard === undefined) {
          throw new Error(
            `Cannot build public catalog recommendations: missing card view for candidate package ${candidate.packageMetadata.packageId}.`,
          );
        }

        return candidateCard;
      });

    return [packageId, relatedPackages];
  }));
}
