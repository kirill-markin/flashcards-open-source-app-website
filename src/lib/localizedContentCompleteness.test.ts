import assert from "node:assert/strict";
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { CORE_DOCS_LOCALES, SUPPORTED_LOCALES } from "./localeConfig";

const LOCALES_WITH_CORE_DOCS: ReadonlySet<string> = new Set(CORE_DOCS_LOCALES);
const CORE_DOC_FILE_NAMES = ["getting-started.md", "mcp-connector.md"] as const;
const LEGAL_PAGE_SLUGS: ReadonlyArray<string> = ["privacy", "support", "terms"];

function readDocFileNames(directory: string): ReadonlyArray<string> {
  return readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name)
    .sort();
}

function findMissingLocalizedContent(contentDirectory: string): ReadonlyArray<string> {
  const englishDocFileNames = readDocFileNames(join(contentDirectory, "en", "docs"));
  const expectedPaths = SUPPORTED_LOCALES.flatMap((locale) => {
    const docFileNames = LOCALES_WITH_CORE_DOCS.has(locale)
      ? CORE_DOC_FILE_NAMES
      : englishDocFileNames;

    return [
      ...docFileNames.map((fileName) => join(contentDirectory, locale, "docs", fileName)),
      ...LEGAL_PAGE_SLUGS.map((slug) => join(contentDirectory, locale, "pages", slug, "index.md")),
    ];
  });

  return expectedPaths.filter((path) => !existsSync(path));
}

test("every supported locale ships its required docs and the privacy, support, and terms pages", () => {
  const missingPaths = findMissingLocalizedContent(join(process.cwd(), "src", "content"));

  assert.deepEqual(
    missingPaths,
    [],
    `Supported locales are missing docs or legal pages:\n${missingPaths.join("\n")}`,
  );
});
