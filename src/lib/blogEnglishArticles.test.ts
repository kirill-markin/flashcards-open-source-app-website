import assert from "node:assert/strict";
import { existsSync, mkdirSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import test, { type TestContext } from "node:test";
import { RECOMMENDATION_ANALYSIS_SLUG_BY_LOCALIZED_SLUG } from "./blogSlugs";

function readArticleFileNames(directory: string): ReadonlyArray<string> {
  return readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name)
    .sort();
}

function assertEnglishAnalogues(contentDirectory: string): void {
  const englishDirectory = join(contentDirectory, "en", "blog");
  const englishFiles = new Set(readArticleFileNames(englishDirectory));
  const missing: string[] = [];
  const locales = readdirSync(contentDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name !== "en")
    .map((entry) => entry.name)
    .sort();

  for (const locale of locales) {
    const blogDirectory = join(contentDirectory, locale, "blog");

    if (!existsSync(blogDirectory)) {
      continue;
    }

    for (const fileName of readArticleFileNames(blogDirectory)) {
      const slug = fileName.slice(0, -3);
      const englishSlug = RECOMMENDATION_ANALYSIS_SLUG_BY_LOCALIZED_SLUG[slug] ?? slug;
      const englishFileName = `${englishSlug}.md`;

      if (!englishFiles.has(englishFileName)) {
        missing.push(`${join(blogDirectory, fileName)} -> ${join(englishDirectory, englishFileName)}`);
      }
    }
  }

  if (missing.length > 0) {
    throw new Error(`Localized blog articles are missing English analogues:\n${missing.join("\n")}`);
  }
}

function createContentDirectory(t: TestContext, articlePaths: ReadonlyArray<string>): string {
  const directory = mkdtempSync(join(tmpdir(), "blog-english-articles-"));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  mkdirSync(join(directory, "en", "blog"), { recursive: true });

  for (const articlePath of articlePaths) {
    const filePath = join(directory, articlePath);
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, "# Article\n");
  }

  return directory;
}

test("every localized source blog article has an English analogue", () => {
  assertEnglishAnalogues(join(process.cwd(), "src", "content"));
});

test("allows English-only articles, partial translations, and mapped English slugs", (t) => {
  const articlePaths = ["en/blog/english-only.md", "en/blog/shared.md", "es/blog/shared.md"];

  for (const [localizedSlug, englishSlug] of Object.entries(RECOMMENDATION_ANALYSIS_SLUG_BY_LOCALIZED_SLUG)) {
    articlePaths.push(`es/blog/${localizedSlug}.md`, `en/blog/${englishSlug}.md`);
  }

  const directory = createContentDirectory(t, articlePaths);
  mkdirSync(join(directory, "fr", "pages"), { recursive: true });

  assertEnglishAnalogues(directory);
});

test("rejects a localized article without an English file and reports both paths", (t) => {
  const directory = createContentDirectory(t, ["es/blog/orphan.md"]);

  assert.throws(() => assertEnglishAnalogues(directory), {
    message: `Localized blog articles are missing English analogues:\n${join(directory, "es/blog/orphan.md")} -> ${join(directory, "en/blog/orphan.md")}`,
  });
});

test("requires an existing English target for mapped localized slugs", (t) => {
  for (const [localizedSlug, englishSlug] of Object.entries(RECOMMENDATION_ANALYSIS_SLUG_BY_LOCALIZED_SLUG)) {
    const directory = createContentDirectory(t, [`es/blog/${localizedSlug}.md`]);

    assert.throws(() => assertEnglishAnalogues(directory), {
      message: `Localized blog articles are missing English analogues:\n${join(directory, "es/blog", `${localizedSlug}.md`)} -> ${join(directory, "en/blog", `${englishSlug}.md`)}`,
    });
  }
});
