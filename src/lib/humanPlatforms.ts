import type { AppLocale } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";
import { getHomeDeviceCopy } from "@/lib/homeDeviceCopy";

export type PlatformImage = {
  readonly alt: string;
  readonly height: number;
  readonly src: string;
  readonly width: number;
};

export type StoreAnalyticsPlatform = "ios" | "android";

export type HumanPlatformAnalytics =
  | Readonly<{
    kind: "store";
    platform: StoreAnalyticsPlatform;
  }>
  | Readonly<{
    kind: "web_app";
  }>;

export type ActiveHumanPlatform = {
  readonly analytics: HumanPlatformAnalytics;
  readonly href: string;
  readonly image?: PlatformImage;
  readonly kind: "active";
  readonly label: string;
};

export type DisabledHumanPlatform = {
  readonly image: PlatformImage;
  readonly kind: "disabled";
  readonly label: string;
  readonly tooltip: string;
};

export type HumanPlatform = ActiveHumanPlatform | DisabledHumanPlatform;

export type HumanDevice = "iphone" | "ipad" | "mac" | "android" | "web";
export type HumanDevicePlatform = ActiveHumanPlatform & Readonly<{ device: HumanDevice }>;

// Store campaign URLs are encoded into the hover QR codes at build time, and the Google Play one
// already sits exactly on the 4px-per-module scan floor. Lengthening a campaign URL can push
// it to a denser symbol and hard-fail the prebuild; see assertStoreQrCodeIsScannable in
// scripts/generateStoreQrCodes.ts for the check and the remedy.
export const APP_STORE_URL =
  "https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8";

export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site";

function getAppleDeviceUrl(device: "iphone" | "ipad" | "mac"): string {
  const url = new URL(APP_STORE_URL);
  url.searchParams.set("platform", device);
  return url.href;
}

export const STORE_QR_URLS = {
  ios: APP_STORE_URL,
  android: GOOGLE_PLAY_URL,
  iphone: getAppleDeviceUrl("iphone"),
  ipad: getAppleDeviceUrl("ipad"),
} as const;

export type StoreQrCodeTarget = keyof typeof STORE_QR_URLS;

export function getHumanDevicePlatforms(
  webEntryHref: string,
  locale: AppLocale,
): readonly HumanDevicePlatform[] {
  return [
    { device: "iphone", label: "iPhone", href: STORE_QR_URLS.iphone, kind: "active", analytics: { kind: "store", platform: "ios" } },
    { device: "ipad", label: "iPad", href: STORE_QR_URLS.ipad, kind: "active", analytics: { kind: "store", platform: "ios" } },
    { device: "mac", label: "Mac", href: getAppleDeviceUrl("mac"), kind: "active", analytics: { kind: "store", platform: "ios" } },
    { device: "android", label: "Android", href: STORE_QR_URLS.android, kind: "active", analytics: { kind: "store", platform: "android" } },
    { device: "web", label: getHomeDeviceCopy(locale).web, href: webEntryHref, kind: "active", analytics: { kind: "web_app" } },
  ];
}

export const CANONICAL_APP_STORE_URL =
  "https://apps.apple.com/us/app/flashcards-open-source-app/id6760538964";

export const CANONICAL_GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app";

const APP_STORE_IMAGE: PlatformImage = {
  alt: "Official App Store badge",
  height: 40,
  src: "/home/app-store-badge.svg",
  width: 120,
};

const GOOGLE_PLAY_IMAGE: PlatformImage = {
  alt: "Official Google Play lockup",
  height: 61,
  src: "/home/google-play-lockup.png",
  width: 300,
};

export function getHumanPlatforms(
  webEntryHref: string,
  locale: AppLocale
): readonly HumanPlatform[] {
  const uiCopy = getUiCopy(locale);

  return [
    {
      analytics: {
        kind: "store",
        platform: "ios",
      },
      href: APP_STORE_URL,
      image: APP_STORE_IMAGE,
      kind: "active",
      label: uiCopy.platforms.appStore,
    },
    {
      analytics: {
        kind: "store",
        platform: "android",
      },
      href: GOOGLE_PLAY_URL,
      image: GOOGLE_PLAY_IMAGE,
      kind: "active",
      label: uiCopy.platforms.googlePlay,
    },
    {
      analytics: {
        kind: "web_app",
      },
      href: webEntryHref,
      kind: "active",
      label: uiCopy.platforms.webApp,
    },
  ];
}
