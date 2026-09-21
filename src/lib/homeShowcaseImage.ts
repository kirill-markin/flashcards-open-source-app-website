import type { AppLocale } from "@/lib/i18n";

const HOME_SHOWCASE_IMAGE_BY_LOCALE: Readonly<Record<AppLocale, string>> = {
  en: "/home/app-screens-showcase-en.png",
  es: "/home/app-screens-showcase-es.png",
  ar: "/home/app-screens-showcase-ar.png",
  de: "/home/app-screens-showcase-de.png",
  hi: "/home/app-screens-showcase-hi.png",
  ja: "/home/app-screens-showcase-ja.png",
  fr: "/home/app-screens-showcase-fr.png",
  pt: "/home/app-screens-showcase-pt.png",
  ru: "/home/app-screens-showcase-ru.png",
  zh: "/home/app-screens-showcase-zh.png",
  it: "/home/app-screens-showcase-it.png",
  ko: "/home/app-screens-showcase-ko.png",
  id: "/home/app-screens-showcase-id.png",
  tr: "/home/app-screens-showcase-tr.png",
  nl: "/home/app-screens-showcase-nl.png",
  pl: "/home/app-screens-showcase-pl.png",
  vi: "/home/app-screens-showcase-vi.png",
  th: "/home/app-screens-showcase-th.png",
  uk: "/home/app-screens-showcase-uk.png",
  he: "/home/app-screens-showcase-he.png",
};

export function getHomeShowcaseImagePath(locale: AppLocale): string {
  return HOME_SHOWCASE_IMAGE_BY_LOCALE[locale];
}
