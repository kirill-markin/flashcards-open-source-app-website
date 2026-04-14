import type { AppLocale } from "@/lib/i18n";

const HOME_SHOWCASE_IMAGE_BY_LOCALE: Readonly<Record<AppLocale, string>> = {
  en: "/home/app-screens-showcase-en.png",
  es: "/home/app-screens-showcase-es.png",
  ar: "/home/app-screens-showcase-ar.png",
  de: "/home/app-screens-showcase-de.png",
  hi: "/home/app-screens-showcase-hi.png",
  ja: "/home/app-screens-showcase-ja.png",
  ru: "/home/app-screens-showcase-ru.png",
  zh: "/home/app-screens-showcase-zh.png",
};

export function getHomeShowcaseImagePath(locale: AppLocale): string {
  return HOME_SHOWCASE_IMAGE_BY_LOCALE[locale];
}
