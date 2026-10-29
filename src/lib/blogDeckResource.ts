import { getAbsoluteUrl } from "./i18n";
import { getIntlLocale, type AppLocale } from "./localeConfig";
import { escapeMarkdownText, renderMarkdownLink } from "./markdownLinks";
import { getPublicCatalogUiCopy } from "./publicCatalogCopy";
import { formatPublicCatalogCardCount } from "./publicCatalogFormatting";
import {
  getPublicCatalogPackageBySlug,
  type PublicCatalogCoverMediaAsset,
  type PublicCatalogReadModel,
} from "./publicCatalogReadModel";
import { getPublicCatalogPackageLocalizedPathname } from "./publicCatalogUrls";

const PACKAGE_SLUG_BY_ARTICLE_AND_LOCALE: Readonly<
  Record<string, Readonly<Partial<Record<AppLocale, string>>>>
> = {
  "find-mtime-vs-ctime": { en: "linux-command-line-flashcards" },
  "rate-law-initial-rates-practice": { en: "ap-chemistry-flashcards" },
  "force-displacement-graph-practice": { en: "ap-physics-1-flashcards" },
  "static-kinetic-friction-practice": { en: "ap-physics-1-flashcards" },
  "momentum-collisions-practice": { en: "ap-physics-1-flashcards" },
  "serial-dilution-practice": { en: "ap-chemistry-flashcards" },
  "git-reflog-recover-lost-commits": { en: "git-commands-flashcards" },
  "git-reset-restore-revert-practice": { en: "git-commands-flashcards" },
  "sql-group-by-having-practice": { en: "postgresql-sql-interview-problems" },
  "sql-left-join-on-vs-where": { en: "postgresql-sql-interview-problems" },
  "sql-null-not-in-practice": { en: "postgresql-sql-interview-problems" },
  "sql-row-number-rank-dense-rank": { en: "postgresql-sql-interview-problems" },
  "sql-rows-vs-range-practice": { en: "postgresql-sql-interview-problems" },
  "sql-union-vs-union-all-practice": { en: "postgresql-sql-interview-problems" },
  "us-state-abbreviations": { en: "us-state-abbreviations-flashcards" },
  "anatomical-directional-terms": {
    en: "anatomical-directional-terms",
    ar: "anatomical-directional-terms-ar",
    bg: "anatomical-directional-terms-bg",
    bn: "anatomical-directional-terms-bn",
    ca: "anatomical-directional-terms-ca",
    cs: "anatomical-directional-terms-cs",
    da: "anatomical-directional-terms-da",
    de: "anatomical-directional-terms-de",
    el: "anatomical-directional-terms-el",
    es: "anatomical-directional-terms-es",
    et: "anatomical-directional-terms-et",
    fa: "anatomical-directional-terms-fa",
    fi: "anatomical-directional-terms-fi",
    fr: "anatomical-directional-terms-fr",
    gu: "anatomical-directional-terms-gu",
    he: "anatomical-directional-terms-he",
    hi: "anatomical-directional-terms-hi",
    hr: "anatomical-directional-terms-hr",
    hu: "anatomical-directional-terms-hu",
    id: "anatomical-directional-terms-id",
    is: "anatomical-directional-terms-is",
    it: "anatomical-directional-terms-it",
    ja: "anatomical-directional-terms-ja",
    kn: "anatomical-directional-terms-kn",
    ko: "anatomical-directional-terms-ko",
    lt: "anatomical-directional-terms-lt",
    lv: "anatomical-directional-terms-lv",
    ml: "anatomical-directional-terms-ml",
    mr: "anatomical-directional-terms-mr",
    nb: "anatomical-directional-terms-nb",
    nl: "anatomical-directional-terms-nl",
    pa: "anatomical-directional-terms-pa",
    pl: "anatomical-directional-terms-pl",
    pt: "anatomical-directional-terms-pt",
    ro: "anatomical-directional-terms-ro",
    ru: "anatomical-directional-terms-ru",
    sk: "anatomical-directional-terms-sk",
    sl: "anatomical-directional-terms-sl",
    sv: "anatomical-directional-terms-sv",
    sw: "anatomical-directional-terms-sw",
    ta: "anatomical-directional-terms-ta",
    te: "anatomical-directional-terms-te",
    th: "anatomical-directional-terms-th",
    tr: "anatomical-directional-terms-tr",
    uk: "anatomical-directional-terms-uk",
    ur: "anatomical-directional-terms-ur",
    vi: "anatomical-directional-terms-vi",
    zh: "anatomical-directional-terms-zh",
    zu: "anatomical-directional-terms-zu",
  },
  "planes-of-movement": { en: "anatomical-planes-movements-flashcards" },
  "amino-acid-side-chain-chart": { en: "amino-acid-side-chain-properties-flashcards" },
  "cytoskeleton-structure-and-function": { en: "cytoskeleton-flashcards" },
  "chromosome-chromatid-counting": { en: "chromosome-chromatid-counting-flashcards" },
  "coding-vs-template-strand": { en: "coding-template-strand-transcription-flashcards" },
  "formal-charge-vs-oxidation-number": { en: "formal-charge-vs-oxidation-number-flashcards" },
  "electron-geometry-vs-molecular-geometry": { en: "vsepr-molecular-geometry-flashcards" },
  "periodic-table-flashcards": {
    en: "periodic-table-elements",
    es: "tabla-periodica-elementos-tarjetas-espanol",
    ru: "periodic-table-elements-russian-flashcards",
  },
  "metric-prefixes-flashcards": { en: "metric-prefix-flashcards" },
  "si-base-and-derived-units": { en: "si-units-flashcards" },
  "converting-squared-cubed-units": { en: "squared-cubed-unit-conversion-flashcards" },
  "significant-figures-mixed-operations": { en: "significant-figures-mixed-operations-flashcards" },
  "dimensional-analysis-equations": { en: "dimensional-analysis-equation-flashcards" },
  "how-to-memorize-the-unit-circle": { en: "unit-circle-degrees-radians-coordinates" },
  "recurring-decimals-to-fractions": { en: "recurring-decimals-to-fractions-flashcards" },
  "truth-values-conjunction-disjunction": { en: "truth-table-flashcards" },
  "bayes-theorem-practice": { en: "bayes-theorem-base-rate-flashcards" },
  "conditional-probability-two-way-tables": { en: "conditional-probability-two-way-table-flashcards" },
  "relative-risk-vs-odds-ratio-practice": { en: "relative-risk-odds-ratio-flashcards" },
  "random-sampling-vs-random-assignment": { en: "random-sampling-vs-random-assignment-flashcards" },
  "negative-reinforcement-vs-punishment": { en: "operant-conditioning-flashcards" },
  "proactive-vs-retroactive-interference": { en: "proactive-retroactive-interference-flashcards" },
  "circle-of-fifths-practice": { en: "circle-of-fifths-flashcards" },
  "relative-vs-parallel-minor": { en: "relative-vs-parallel-minor-flashcards" },
  "triad-chord-spelling": { en: "triad-chord-spelling-flashcards" },
  "bass-clef-notes": { en: "music-note-flashcards-treble-bass" },
  "morse-code-alphabet": { en: "morse-code-alphabet-numbers" },
  "common-network-ports": { en: "common-network-port-numbers-flashcards" },
  "ipv4-subnetting-practice": { en: "ipv4-subnetting-practice-flashcards" },
  "past-simple-vs-past-participle": { en: "past-simple-vs-past-participle-flashcards" },
  "comma-splice-vs-fused-sentence": { en: "comma-splice-fused-sentence-flashcards" },
  "medical-terminology-flashcards": {
    en: "medical-terminology-word-parts",
    es: "terminologia-medica-prefijos-raices-sufijos",
  },
  "us-constitutional-amendments-flashcards": { en: "us-constitutional-amendments" },
  "us-citizenship-test-flashcards": {
    en: "us-citizenship-test",
    ru: "us-citizenship-test-russian",
  },
  "how-to-use-flashcards-for-ap-biology": { en: "ap-biology-flashcards-complete-course-review" },
  "how-to-use-flashcards-for-ap-psychology": { en: "ap-psychology-flashcards" },
  "ap-statistics-flashcards": { en: "ap-statistics-flashcards" },
  "comptia-a-plus-flashcards": { en: "comptia-a-plus-220-1201-220-1202-flashcards" },
  "comptia-network-plus-flashcards": { en: "comptia-network-plus-n10-009-flashcards" },
  "how-to-use-flashcards-for-security-plus": { en: "comptia-security-plus-sy0-701-flashcards" },
  "how-to-use-flashcards-for-aws-solutions-architect-associate": { en: "aws-solutions-architect-associate-saa-c03-flashcards" },
  "ccsp-flashcards": {
    en: "ccsp-2026-exam-flashcards",
    ja: "ccsp-2026-japanese-flashcards",
  },
  "asvab-flashcards": { en: "asvab-flashcards-complete-review" },
  "california-permit-test-flashcards": {
    en: "california-permit-test-flashcards",
    es: "examen-manejo-california-espanol-tarjetas",
  },
  "faa-part-107-flashcards": { en: "faa-part-107-flashcards" },
  "ham-radio-technician-flashcards": { en: "ham-radio-technician-2026-2030-flashcards" },
  "how-to-use-flashcards-for-the-fe-exam": { en: "fe-exam-engineering-equations-units-flashcards" },
  "toefl-flashcards": { en: "toefl-ibt-task-strategy-flashcards" },
  "eu-ai-act-2026-flashcards": { en: "eu-ai-act-2026-essentials-flashcards" },
};

export interface BlogDeckResource {
  readonly packageId: string;
  readonly packageSlug: string;
  readonly title: string;
  readonly summary: string;
  readonly coverMediaAsset: PublicCatalogCoverMediaAsset | null;
  readonly cardCountLabel: string;
  readonly languageLabel: string;
  readonly packageHref: string;
}

export function renderBlogDeckResourceMarkdown(
  resource: BlogDeckResource,
  locale: AppLocale,
): string {
  const copy = getPublicCatalogUiCopy(locale);
  const studyLink = renderMarkdownLink(
    copy.installLabel,
    getAbsoluteUrl(resource.packageHref),
    "Blog deck study link",
  );

  return [
    `**${escapeMarkdownText(resource.title)}**`,
    ...(resource.summary === "" ? [] : [escapeMarkdownText(resource.summary)]),
    escapeMarkdownText(`${resource.cardCountLabel} · ${resource.languageLabel}`),
    studyLink,
  ].join("\n\n");
}

export function resolveBlogDeckResource(
  slug: string,
  locale: AppLocale,
  catalog: PublicCatalogReadModel | null,
): BlogDeckResource | null {
  const packageSlug = PACKAGE_SLUG_BY_ARTICLE_AND_LOCALE[slug]?.[locale];

  if (packageSlug === undefined || catalog === null) {
    return null;
  }

  const packageView = getPublicCatalogPackageBySlug(catalog, packageSlug);

  if (packageView === undefined) {
    throw new Error(
      `Cannot resolve study resource for blog article ${slug} in locale ${locale}: published catalog package ${packageSlug} is missing. Restore the package or remove the article association.`,
    );
  }

  const { latestVersion, packageMetadata } = packageView;

  if (!latestVersion.languageTags.includes(locale)) {
    throw new Error(
      `Cannot resolve study resource for blog article ${slug} in locale ${locale}: published catalog package ${packageSlug} has languageTags [${latestVersion.languageTags.join(", ")}], which do not include ${locale}. Correct the package language tags or the article association.`,
    );
  }

  const copy = getPublicCatalogUiCopy(locale);
  const languageNames = new Intl.DisplayNames([getIntlLocale(locale)], {
    type: "language",
  });
  const languages = latestVersion.languageTags.map((languageTag) => {
    const name = languageNames.of(languageTag);

    if (name === undefined) {
      throw new Error(
        `Cannot name study resource language ${languageTag} for article ${slug} in locale ${locale}.`,
      );
    }

    return `${name} (${languageTag})`;
  });

  return {
    packageId: packageMetadata.packageId,
    packageSlug,
    title: latestVersion.title,
    summary: latestVersion.summary,
    coverMediaAsset: packageView.coverMediaAsset,
    cardCountLabel: formatPublicCatalogCardCount(locale, latestVersion.cardCount, copy),
    languageLabel: `${copy.languagesLabel}: ${languages.join(", ")}`,
    packageHref: getPublicCatalogPackageLocalizedPathname(locale, packageSlug),
  };
}
