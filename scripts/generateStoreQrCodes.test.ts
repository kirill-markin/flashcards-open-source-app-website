import assert from "node:assert/strict";
import test from "node:test";
import QRCode from "qrcode";
import { getAppUrl } from "../src/lib/auth";
import { getHomeDeviceCopy } from "../src/lib/homeDeviceCopy";
import { getHumanDevicePlatforms, getHumanPlatforms, STORE_QR_URLS } from "../src/lib/humanPlatforms";
import { SUPPORTED_LOCALES } from "../src/lib/localeConfig";
import { parseStoreQrCodes, serializeStoreQrCodes, type StoreQrCodes } from "../src/lib/storeQrCodes";
import { generateStoreQrCodes } from "./generateStoreQrCodes";

const appleCampaignUrl = "https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8";
const googleCampaignUrl = "https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site";
const expectedQrUrls = {
  ios: appleCampaignUrl,
  android: googleCampaignUrl,
  iphone: `${appleCampaignUrl}&platform=iphone`,
  ipad: `${appleCampaignUrl}&platform=ipad`,
} as const;

test("every localized homepage keeps all five devices and the existing store destinations", () => {
  for (const locale of SUPPORTED_LOCALES) {
    const webEntryHref = getAppUrl("/", locale);
    const devices = getHumanDevicePlatforms(webEntryHref, locale);
    assert.deepEqual(devices.map(({ device, href, analytics }) => ({ device, href, analytics })), [
      { device: "iphone", href: expectedQrUrls.iphone, analytics: { kind: "store", platform: "ios" } },
      { device: "ipad", href: expectedQrUrls.ipad, analytics: { kind: "store", platform: "ios" } },
      { device: "mac", href: `${appleCampaignUrl}&platform=mac`, analytics: { kind: "store", platform: "ios" } },
      { device: "android", href: googleCampaignUrl, analytics: { kind: "store", platform: "android" } },
      { device: "web", href: webEntryHref, analytics: { kind: "web_app" } },
    ]);
    assert.deepEqual(devices.slice(0, 4).map(({ label }) => label), ["iPhone", "iPad", "Mac", "Android"]);
    assert.deepEqual(getHumanPlatforms(webEntryHref, locale).filter((platform) => platform.kind === "active").map(({ href }) => href), [
      appleCampaignUrl, googleCampaignUrl, webEntryHref,
    ]);
    const copy = getHomeDeviceCopy(locale);
    assert.equal(devices[4].label, copy.web);
    assert.ok(copy.web.trim().length > 0);
    assert.ok(copy.byDevice.trim().length > 0);
    if (locale !== "en") assert.notEqual(copy.byDevice, "By device");
  }
});

test("build-time QR codes encode the exact clickable campaigns and retain the scan floor", async () => {
  assert.deepEqual(STORE_QR_URLS, expectedQrUrls);
  const codes = await generateStoreQrCodes();
  assert.deepEqual(Object.keys(codes).sort(), ["android", "ios", "ipad", "iphone"]);

  for (const key of Object.keys(expectedQrUrls) as ReadonlyArray<keyof StoreQrCodes>) {
    const href = expectedQrUrls[key];
    const expectedSvg = await QRCode.toString(href, {
      color: { dark: "#000000", light: "#ffffff" },
      errorCorrectionLevel: "M",
      margin: 2,
      type: "svg",
      width: 228,
    });
    assert.equal(codes[key], expectedSvg, `QR for ${key} must encode its exact campaign URL`);
    const moduleSpan = QRCode.create(href, { errorCorrectionLevel: "M" }).modules.size + 4;
    assert.ok(228 / moduleSpan >= 4, `QR for ${key} must render at four pixels per module including its quiet zone`);
    assert.match(codes[key], /width="228" height="228"/);
  }

  assert.deepEqual(parseStoreQrCodes(JSON.parse(serializeStoreQrCodes(codes))), codes);
  assert.equal("mac" in codes, false);
  assert.equal("web" in codes, false);
});

test("the static QR parser refuses missing device assets", () => {
  const completeCodes: StoreQrCodes = { ios: "<svg/>", android: "<svg/>", iphone: "<svg/>", ipad: "<svg/>" };
  for (const key of Object.keys(completeCodes) as ReadonlyArray<keyof StoreQrCodes>) {
    assert.throws(() => parseStoreQrCodes({ ...completeCodes, [key]: undefined }), new RegExp(`Store QR code ${key} must be SVG markup`));
  }
});
