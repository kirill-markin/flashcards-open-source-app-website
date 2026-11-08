import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import matter from "gray-matter";
import {
  renderContentPageMarkdownToHtml,
  renderMarkdownToHtml,
} from "./renderMarkdownToHtml";

test("content page headings get GitHub-style ids that keep non-Latin letters", async () => {
  const markdown = [
    "## Scheduling",
    "### Data Flow: Web & iOS",
    "## Планирование повторений",
    "## Againは想起に失敗したという意味",
    "## Scheduling",
  ].join("\n\n");

  const html = await renderContentPageMarkdownToHtml(markdown, "en");

  assert.match(html, /<h2 id="scheduling">Scheduling<\/h2>/);
  assert.match(html, /<h3 id="data-flow-web--ios">/);
  assert.match(html, /<h2 id="планирование-повторений">/);
  assert.match(html, /<h2 id="againは想起に失敗したという意味">/);
  assert.match(html, /<h2 id="scheduling-1">Scheduling<\/h2>/);
});

test("content page heading ids restart for every document", async () => {
  const first = await renderContentPageMarkdownToHtml("## Auth", "en");
  const second = await renderContentPageMarkdownToHtml("## Auth", "en");

  assert.match(first, /<h2 id="auth">/);
  assert.match(second, /<h2 id="auth">/);
});

test("the English architecture doc exposes the #scheduling anchor", async () => {
  const { content } = matter(readFileSync("src/content/en/docs/architecture.md", "utf8"));
  const html = await renderContentPageMarkdownToHtml(content, "en");

  assert.match(html, /<h2 id="scheduling">Scheduling<\/h2>/);
});

test("ids from Markdown itself stay clobber-prefixed and catalog Markdown gets no heading ids", async () => {
  const markdown = "## Notes\n\nText[^1].\n\n[^1]: Footnote.";

  const pageHtml = await renderContentPageMarkdownToHtml(markdown, "en");
  const catalogHtml = await renderMarkdownToHtml(markdown, "en");

  assert.match(pageHtml, /id="user-content-/);
  assert.doesNotMatch(pageHtml, /id="fn/);
  assert.match(catalogHtml, /<h2>Notes<\/h2>/);
  assert.equal(
    pageHtml.replace(/<h2 id="notes">/, "<h2>").trimEnd(),
    catalogHtml.trimEnd(),
  );
});
