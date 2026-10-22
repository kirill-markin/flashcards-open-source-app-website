import assert from "node:assert/strict";
import test from "node:test";
import { TrackedPublicCatalogPackageLink } from "../components/TrackedPublicCatalogPackageLink";
import type { PublicCatalogNavigationPlacement } from "./publicCatalogAnalytics";

interface VendorNavigationEvent {
  readonly name: string;
  readonly data: Readonly<{
    locale: string;
    package_id: string;
    placement: string;
  }>;
}

interface CollectorNavigationEvent {
  readonly eventName: string;
  readonly uiLocale: string;
  readonly anonymousId?: string;
  readonly properties: Readonly<{
    package_slug: string;
    placement: string;
    page_path?: string;
  }>;
}

test("catalog links report article and card placements with the current source path through existing consent gates", (context) => {
  const vendorEvents: VendorNavigationEvent[] = [];
  const collectorEvents: CollectorNavigationEvent[] = [];
  let collectionEnabled = true;
  const location = { pathname: "/es/blog/git-reset-restore-revert-practice/" };
  const privacyNavigator = { language: "en-US", globalPrivacyControl: false };
  const originalWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
  const originalNavigator = Object.getOwnPropertyDescriptor(globalThis, "navigator");
  context.after(() => {
    for (const [name, descriptor] of [
      ["window", originalWindow],
      ["navigator", originalNavigator],
    ] as const) {
      if (descriptor === undefined) {
        Reflect.deleteProperty(globalThis, name);
      } else {
        Object.defineProperty(globalThis, name, descriptor);
      }
    }
  });
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: {
      location,
      localStorage: {
        getItem: (key: string): string | null => key.endsWith("Consent.decision")
          ? "declined"
          : collectionEnabled ? null : "disabled",
      },
      va: (_type: string, event: VendorNavigationEvent): void => {
        vendorEvents.push(event);
      },
    },
  });
  Object.defineProperty(globalThis, "navigator", {
    configurable: true,
    value: privacyNavigator,
  });
  context.mock.method(globalThis, "fetch", async (_input: RequestInfo | URL, init: RequestInit): Promise<Response> => {
    assert.equal(typeof init.body, "string");
    collectorEvents.push(JSON.parse(init.body as string) as CollectorNavigationEvent);
    assert.equal(init.credentials, "omit");
    assert.equal(init.keepalive, true);
    return new Response(null, { status: 204 });
  });
  const warning = context.mock.method(console, "warn", (): void => {});
  const click = (placement: PublicCatalogNavigationPlacement): void => {
    const link = TrackedPublicCatalogPackageLink({
      children: "Study",
      className: "study",
      href: "/es/catalog/packages/git-commands-flashcards/",
      locale: "es",
      packageId: "package-id",
      packageSlug: "git-commands-flashcards",
      placement,
      tabIndex: undefined,
    });
    link.props.onClick();
  };

  for (const placement of [
    "article_start_side", "mid_article", "article_end",
    "card_cover", "card_title", "related_deck",
  ] as const) {
    click(placement);
    assert.deepEqual(vendorEvents.at(-1)?.data, {
      locale: "es", package_id: "package-id", placement,
    });
    assert.equal(vendorEvents.at(-1)?.name, "public_catalog_navigation");
    assert.equal(collectorEvents.at(-1)?.eventName, "site_catalog_deck_opened");
    assert.equal(collectorEvents.at(-1)?.uiLocale, "es");
    assert.equal(collectorEvents.at(-1)?.anonymousId, undefined);
    assert.deepEqual(collectorEvents.at(-1)?.properties, {
      package_slug: "git-commands-flashcards",
      placement,
      page_path: "/blog/git-reset-restore-revert-practice/",
    });
  }
  assert.equal(vendorEvents.length, 6);
  assert.equal(collectorEvents.length, 6);

  location.pathname = "/es/blog/unsupported%20slug/";
  click("article_end");
  assert.equal("page_path" in collectorEvents.at(-1)!.properties, false);
  assert.equal(warning.mock.callCount(), 1);

  location.pathname = "/es/catalog/";
  privacyNavigator.globalPrivacyControl = true;
  click("card_cover");
  assert.equal(vendorEvents.length, 7);
  assert.equal(collectorEvents.length, 8);
  assert.equal(collectorEvents.at(-1)?.properties.page_path, "/catalog/");
  assert.equal(collectorEvents.at(-1)?.anonymousId, undefined);

  collectionEnabled = false;
  click("article_end");
  assert.equal(vendorEvents.length, 7);
  assert.equal(collectorEvents.length, 8);
});
