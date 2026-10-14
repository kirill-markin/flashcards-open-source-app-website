import assert from "node:assert/strict";
import test from "node:test";
import { readPageContent } from "./content/readPageContent";
import { SUPPORTED_LOCALES } from "./localeConfig";
import { getPricingCards, getPricingTerms } from "./pricingCards";
import { getPricingExperienceCopy } from "./pricingExperienceCopy";

for (const locale of SUPPORTED_LOCALES) {
  test(`${locale} pricing has three complete localized plan summaries`, () => {
    const section = readPageContent("pricing", locale).sections.find(section => section.type === "pricing_tiers");
    assert.ok(section);
    const cards = getPricingCards(section, locale);
    assert.deepEqual(cards.map(card => card.kind), ["free", "premium", "selfHosted"]);
    const copy = getPricingExperienceCopy(locale);
    assert.equal(copy.heading.length, 2);
    cards.forEach(card => {
      assert.equal(card.features.length, 3);
      assert.ok(card.features.every(feature => feature.trim().length > 0));
      assert.ok(card.description.trim().length > 0);
      assert.ok(card.actionLabel.trim().length > 0);
      if (locale !== "en") {
        const english = getPricingExperienceCopy("en");
        assert.ok(!english.descriptions.includes(card.description));
      }
    });
    assert.ok(getPricingTerms(section, locale).includes(section.tiers[1].bullets[0].split(";")[0]) || locale === "en");

  });
}

test("pricing rejects an incomplete plan list with an actionable error", () => {
  const section = readPageContent("pricing", "en").sections.find(section => section.type === "pricing_tiers");
  assert.ok(section);
  assert.throws(() => getPricingCards({ ...section, tiers: section.tiers.slice(0, 2) }, "en"), /two hosted plans.*en/u);
});
