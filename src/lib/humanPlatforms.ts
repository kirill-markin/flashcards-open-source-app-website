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

export const getHumanPlatforms = (
  webEntryHref: string,
): readonly HumanPlatform[] => [
  {
    href: webEntryHref,
    kind: "active",
    label: "Web App",
  },
  {
    image: APP_STORE_IMAGE,
    kind: "disabled",
    label: "App Store",
    tooltip: "iOS App Store release is in development.",
  },
  {
    href: GOOGLE_PLAY_URL,
    image: GOOGLE_PLAY_IMAGE,
    kind: "active",
    label: "Google Play",
  },
];
