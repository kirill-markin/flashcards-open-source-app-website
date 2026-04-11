import { existsSync, readFileSync } from "fs";
import matter from "gray-matter";
import { hasTranslatedDocSlug } from "@/data/docs";
import { getDocFilePath } from "@/lib/content/paths";
import type { AppLocale } from "@/lib/i18n";

interface DocFrontmatterInput {
  readonly description?: unknown;
  readonly title?: unknown;
}

export interface DocContent {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly bodyMarkdown: string;
}

export interface DocEntry {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
}

function assertNonEmptyString(
  value: unknown,
  fieldName: string,
  filePath: string
): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Invalid docs ${fieldName} in ${filePath}`);
  }

  return value.trim();
}

export function hasDocTranslation(slug: string, locale: AppLocale): boolean {
  return hasTranslatedDocSlug(locale, slug);
}

export function listTranslatedDocSlugs(
  locale: AppLocale,
  slugs: ReadonlyArray<string>
): ReadonlyArray<string> {
  return slugs.filter((slug) => hasDocTranslation(slug, locale));
}

export function readDoc(locale: AppLocale, slug: string): DocContent | null {
  const filePath = getDocFilePath(locale, slug);

  if (!existsSync(filePath)) {
    return null;
  }

  const raw = readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as DocFrontmatterInput;

  return {
    slug,
    title: assertNonEmptyString(frontmatter.title, "title", filePath),
    description: assertNonEmptyString(frontmatter.description, "description", filePath),
    bodyMarkdown: content.trim(),
  };
}

export function getDocs(
  locale: AppLocale,
  slugs: ReadonlyArray<string>
): ReadonlyArray<DocEntry> {
  return slugs.map((slug) => readDoc(locale, slug))
    .filter((doc): doc is NonNullable<typeof doc> => doc !== null)
    .map((doc) => ({
      slug: doc.slug,
      title: doc.title,
      description: doc.description,
    }));
}
