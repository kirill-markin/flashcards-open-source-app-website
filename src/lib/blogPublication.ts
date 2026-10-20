import { existsSync, readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import { getBlogDirectory, getBlogFilePath } from "./content/paths";
import { RECOMMENDATION_ANALYSIS_SLUG_BY_LOCALIZED_SLUG } from "./blogSlugs";
import { getLocalizedPathname } from "./i18n";
import { SUPPORTED_LOCALES, type AppLocale } from "./localeConfig";

export interface BlogPublicationState {
  readonly slug: string;
  readonly status: "published" | "retired";
  readonly retiredAt?: string;
  readonly retirementReason?: string;
  readonly retirementEvidence?: string;
}

const cachedStates = new Map<AppLocale, ReadonlyArray<BlogPublicationState>>();

function optionalString(value: unknown, field: string, filePath: string): string | undefined {
  if (value === undefined) {
    return undefined;
  }
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Invalid blog ${field} in ${filePath}: expected a nonempty string.`);
  }
  return value.trim();
}

function readPublicationState(locale: AppLocale, fileName: string): BlogPublicationState {
  const slug = fileName.slice(0, -3);
  const filePath = getBlogFilePath(locale, slug);
  const { data } = matter(readFileSync(filePath, "utf-8"));
  if (data.status !== undefined && data.status !== "published" && data.status !== "retired") {
    throw new Error(`Invalid blog status in ${filePath}: expected published or retired.`);
  }
  return {
    slug,
    status: data.status === "retired" ? "retired" : "published",
    retiredAt: optionalString(data.retiredAt, "retiredAt", filePath),
    retirementReason: optionalString(data.retirementReason, "retirementReason", filePath),
    retirementEvidence: optionalString(data.retirementEvidence, "retirementEvidence", filePath),
  };
}

export function listBlogPublicationStates(locale: AppLocale): ReadonlyArray<BlogPublicationState> {
  const cached = cachedStates.get(locale);
  if (cached !== undefined) {
    return cached;
  }

  const directory = getBlogDirectory(locale);
  const states = existsSync(directory)
    ? readdirSync(directory)
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => readPublicationState(locale, fileName))
    : [];
  cachedStates.set(locale, states);
  return states;
}

export function listPublishedBlogPostSlugs(locale: AppLocale): ReadonlyArray<string> {
  return listBlogPublicationStates(locale)
    .filter((post) => post.status === "published")
    .map((post) => post.slug)
    .sort((left, right) => left.localeCompare(right));
}

export function listRetiredBlogPathnames(): ReadonlyArray<string> {
  return SUPPORTED_LOCALES.flatMap((locale) => {
    const states = listBlogPublicationStates(locale);
    const publishedSlugs = new Set(states
      .filter((post) => post.status === "published")
      .map((post) => post.slug));
    return states.filter((post) => post.status === "retired").flatMap((post) => {
      const analysisSlug = RECOMMENDATION_ANALYSIS_SLUG_BY_LOCALIZED_SLUG[post.slug] ?? post.slug;
      const aliases = Object.entries(RECOMMENDATION_ANALYSIS_SLUG_BY_LOCALIZED_SLUG)
        .filter(([, target]) => target === analysisSlug)
        .map(([alias]) => alias);
      return [...new Set([post.slug, analysisSlug, ...aliases])]
        .filter((slug) => !publishedSlugs.has(slug))
        .map((slug) => getLocalizedPathname(locale, `/blog/${slug}/`));
    });
  });
}
