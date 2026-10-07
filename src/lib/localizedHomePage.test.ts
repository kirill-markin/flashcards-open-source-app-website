import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { readPageContent } from "./content/readPageContent";
import { SUPPORTED_LOCALES } from "./localeConfig";
import { getUiCopy } from "./uiCopy";

const englishHome = readPageContent("home", "en");
const englishWalkthrough = englishHome.sections.find((section) => section.type === "app_walkthrough");
const englishCta = englishHome.sections.find((section) => section.type === "review_cta");
assert.ok(englishWalkthrough);
assert.ok(englishCta);

for (const locale of SUPPORTED_LOCALES) {
  test(`${locale} home ships the complete redesigned layout with localized copy`, () => {
    const home = readPageContent("home", locale);
    assert.deepEqual(home.sections.map((section) => section.type), [
      "hero", "app_walkthrough", "feature_list", "review_cta",
    ]);
    const walkthrough = home.sections.find((section) => section.type === "app_walkthrough");
    const features = home.sections.find((section) => section.type === "feature_list");
    const cta = home.sections.find((section) => section.type === "review_cta");
    assert.ok(walkthrough);
    assert.ok(features);
    assert.ok(cta);
    assert.equal(walkthrough.items.length, 4);
    assert.equal(features.items.length, 6);
    walkthrough.items.forEach((item, index) => {
      assert.ok(existsSync(join(process.cwd(), "public", item.imagePath)));
      if (locale !== "en") {
        const englishItem = englishWalkthrough.items[index];
        assert.notEqual(item.label, englishItem.label);
        assert.notDeepEqual(item.titleLines, englishItem.titleLines);
        assert.notEqual(item.description, englishItem.description);
        assert.notEqual(item.linkLabel, englishItem.linkLabel);
        assert.notEqual(item.imageAlt, englishItem.imageAlt);
      }
    });
    if (locale !== "en") {
      assert.notEqual(walkthrough.title, englishWalkthrough.title);
      assert.notDeepEqual(cta.titleLines, englishCta.titleLines);
      assert.notEqual(cta.description, englishCta.description);
      const platformCopy = getUiCopy(locale).platforms;
      assert.notEqual(platformCopy.downloadBadgeCaption, getUiCopy("en").platforms.downloadBadgeCaption);
      assert.notEqual(platformCopy.tryBadgeCaption, getUiCopy("en").platforms.tryBadgeCaption);
    }
  });
}
