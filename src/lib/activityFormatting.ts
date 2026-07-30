import type { AppLocale } from "@/lib/i18n";

function getIntlLocale(locale: AppLocale): string {
  switch (locale) {
    case "ar":
      return "ar-SA";
    case "de":
      return "de-DE";
    case "en":
      return "en-US";
    case "es":
      return "es-ES";
    case "hi":
      return "hi-IN";
    case "ja":
      return "ja-JP";
    case "ru":
      return "ru-RU";
    case "zh":
      return "zh-CN";
  }
}

function parseActivityDate(value: string): Date {
  return new Date(`${value}T00:00:00.000Z`);
}

export function formatActivityNumber(
  locale: AppLocale,
  value: number,
): string {
  return new Intl.NumberFormat(getIntlLocale(locale)).format(value);
}

export function formatActivityDateRange(
  locale: AppLocale,
  from: string,
  to: string,
): string {
  return new Intl.DateTimeFormat(getIntlLocale(locale), {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).formatRange(parseActivityDate(from), parseActivityDate(to));
}

export function formatActivityTimestamp(
  locale: AppLocale,
  value: string,
): string {
  return new Intl.DateTimeFormat(getIntlLocale(locale), {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(new Date(value));
}
