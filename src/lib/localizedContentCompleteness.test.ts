import assert from "node:assert/strict";
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { SUPPORTED_LOCALES } from "./localeConfig";

const LEGAL_PAGE_SLUGS: ReadonlyArray<string> = ["privacy", "support", "terms"];

function readDocFileNames(directory: string): ReadonlyArray<string> {
  return readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name)
    .sort();
}

function findMissingLocalizedContent(contentDirectory: string): ReadonlyArray<string> {
  const englishDocFileNames = readDocFileNames(join(contentDirectory, "en", "docs"));
  const expectedPaths = SUPPORTED_LOCALES.flatMap((locale) => [
    ...englishDocFileNames.map((fileName) => join(contentDirectory, locale, "docs", fileName)),
    ...LEGAL_PAGE_SLUGS.map((slug) => join(contentDirectory, locale, "pages", slug, "index.md")),
  ]);

  return expectedPaths.filter((path) => !existsSync(path));
}

test("every supported locale ships every doc and the privacy, support, and terms pages", () => {
  const missingPaths = findMissingLocalizedContent(join(process.cwd(), "src", "content"));

  assert.deepEqual(
    missingPaths,
    [],
    `Supported locales are missing docs or legal pages:\n${missingPaths.join("\n")}`,
  );
});
