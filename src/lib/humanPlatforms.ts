import type { AppLocale } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";

export type PlatformImage = {
  readonly alt: string;
  readonly height: number;
  readonly src: string;
  readonly width: number;
};

export type ActiveHumanPlatform = {
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

export const APP_STORE_URL =
  "https://apps.apple.com/app/flashcards-open-source-app/id6760538964";

export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&pcampaignid=web_share";

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
      href: webEntryHref,
      kind: "active",
      label: uiCopy.platforms.webApp,
    },
    {
      href: APP_STORE_URL,
      image: APP_STORE_IMAGE,
      kind: "active",
      label: uiCopy.platforms.appStore,
    },
    {
      href: GOOGLE_PLAY_URL,
      image: GOOGLE_PLAY_IMAGE,
      kind: "active",
      label: uiCopy.platforms.googlePlay,
    },
  ];
}
