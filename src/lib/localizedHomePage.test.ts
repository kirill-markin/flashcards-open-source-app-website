import assert from "node:assert/strict";
import test from "node:test";
import { readPageContent } from "./content/readPageContent";
import { SUPPORTED_LOCALES } from "./localeConfig";
import { getUiCopy } from "./uiCopy";
import { getHomeExperienceCopy } from "./homeExperienceCopy";
import { marketingMediaManifest } from "./marketingMedia";
import { getHomeShowcaseImagePath } from "./homeShowcaseImage";

const mediaPaths = new Set(marketingMediaManifest.map(({ publicPath }) => publicPath));

const englishHome = readPageContent("home", "en");
const englishWalkthrough = englishHome.sections.find((section) => section.type === "app_walkthrough");
const englishCta = englishHome.sections.find((section) => section.type === "review_cta");
assert.ok(englishWalkthrough);
assert.ok(englishCta);

for (const locale of SUPPORTED_LOCALES) {
  test(`${locale} home ships the complete redesigned layout with localized copy`, () => {
    assert.ok(mediaPaths.has(getHomeShowcaseImagePath(locale)), `Missing showcase source for ${locale}`);
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
    assert.equal(walkthrough.items.length, 3);
    assert.equal(features.items.length, 5);
    const hero = home.sections.find(section=>section.type === "hero");
    assert.ok(hero);
    const copy = getHomeExperienceCopy(locale);
    assert.deepEqual(hero.titleLines,[copy.heading[0],copy.heading.slice(1).join("")]);
    assert.equal(features.title,copy.features[1]);
    assert.deepEqual(cta.titleLines,[copy.footerTitle]);
    for(const field of [copy.flow,copy.story,copy.features,copy.heroCard,copy.reviewCard,copy.controls,copy.recall,copy.ratings,copy.outcomes,copy.agents]){
      assert.ok(field.every(value=>typeof value === "string" && value.trim().length>0));
    }
    assert.equal(copy.ratings.length,4);
    assert.equal(copy.outcomes.length,4);
    walkthrough.items.forEach((item, index) => {
      assert.ok(mediaPaths.has(item.imagePath), `Missing published image: ${item.imagePath}`);
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
      const englishCopy = getHomeExperienceCopy("en");
      assert.notDeepEqual(copy.heading,englishCopy.heading);
      assert.notDeepEqual(copy.controls,englishCopy.controls);
      assert.notDeepEqual(copy.ratings,englishCopy.ratings);
      assert.notDeepEqual(copy.outcomes,englishCopy.outcomes);
      assert.notEqual(walkthrough.title, englishWalkthrough.title);
      assert.notDeepEqual(cta.titleLines, englishCta.titleLines);
      assert.notEqual(cta.description, englishCta.description);
      const platformCopy = getUiCopy(locale).platforms;
      assert.notEqual(platformCopy.downloadBadgeCaption, getUiCopy("en").platforms.downloadBadgeCaption);
      assert.notEqual(platformCopy.tryBadgeCaption, getUiCopy("en").platforms.tryBadgeCaption);
    }
  });
}
