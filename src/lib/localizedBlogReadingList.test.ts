import assert from "node:assert/strict";
import test from "node:test";
import { formatBlogArticleCount } from "./blogExperienceCopy";
import { getIntlLocale, SUPPORTED_LOCALES } from "./localeConfig";

test("every blog locale has article counts for empty, singular, plural and large lists", () => {
  const counts = [0, 1, 2, 3, 4, 5, 11, 21, 101, 261, 1_000_000];

  for (const locale of SUPPORTED_LOCALES) {
    const numbers = new Intl.NumberFormat(getIntlLocale(locale));
    for (const count of counts) {
      const label = formatBlogArticleCount(locale, count);
      assert.ok(label.includes(numbers.format(count)), `${locale}: ${label}`);
      assert.ok(!label.includes("{count}"), `${locale}: unresolved count placeholder`);
    }
  }
});

test("article counts use the locale's grammar and numeral system", () => {
  assert.equal(formatBlogArticleCount("en", 1), "1 article");
  assert.equal(formatBlogArticleCount("en", 261), "261 articles");
  assert.equal(formatBlogArticleCount("ru", 1), "1 статья");
  assert.equal(formatBlogArticleCount("ru", 2), "2 статьи");
  assert.equal(formatBlogArticleCount("ru", 5), "5 статей");
  assert.equal(formatBlogArticleCount("ru", 21), "21 статья");
  assert.equal(formatBlogArticleCount("ar", 0), "٠ مقالات");
  assert.equal(formatBlogArticleCount("ar", 11), "١١ مقالة");
  assert.equal(formatBlogArticleCount("ja", 12), "12件の記事");
});

test("invalid article counts fail with locale and count context", () => {
  for (const count of [-1, 1.5, Infinity, NaN]) {
    assert.throws(() => formatBlogArticleCount("en", count), /Invalid blog article count for en/);
  }
});
