import { getIntlLocale, type AppLocale } from "./localeConfig";

type ArticleCountTemplates = Readonly<Partial<Record<Intl.LDMLPluralRule, string>>>;

const ARTICLE_COUNT_TEMPLATES: Readonly<Record<AppLocale, ArticleCountTemplates>> = {
  en: { one: "{count} article", other: "{count} articles" },
  es: { one: "{count} artículo", many: "{count} artículos", other: "{count} artículos" },
  ar: { zero: "{count} مقالات", one: "{count} مقالة", two: "{count} مقالتان", few: "{count} مقالات", many: "{count} مقالة", other: "{count} مقالة" },
  de: { one: "{count} Artikel", other: "{count} Artikel" },
  hi: { one: "{count} लेख", other: "{count} लेख" },
  ja: { other: "{count}件の記事" },
  fr: { one: "{count} article", many: "{count} articles", other: "{count} articles" },
  pt: { one: "{count} artigo", many: "{count} artigos", other: "{count} artigos" },
  ru: { one: "{count} статья", few: "{count} статьи", many: "{count} статей", other: "{count} статьи" },
  zh: { other: "{count} 篇文章" },
  it: { one: "{count} articolo", many: "{count} articoli", other: "{count} articoli" },
  ko: { other: "{count}개의 글" },
  id: { other: "{count} artikel" },
  tr: { one: "{count} yazı", other: "{count} yazı" },
  nl: { one: "{count} artikel", other: "{count} artikelen" },
  pl: { one: "{count} artykuł", few: "{count} artykuły", many: "{count} artykułów", other: "{count} artykułu" },
  vi: { other: "{count} bài viết" },
  th: { other: "{count} บทความ" },
  uk: { one: "{count} стаття", few: "{count} статті", many: "{count} статей", other: "{count} статті" },
  he: { one: "{count} מאמר", two: "{count} מאמרים", other: "{count} מאמרים" },
  sv: { one: "{count} artikel", other: "{count} artiklar" },
  da: { one: "{count} artikel", other: "{count} artikler" },
  nb: { one: "{count} artikkel", other: "{count} artikler" },
  fi: { one: "{count} artikkeli", other: "{count} artikkelia" },
  cs: { one: "{count} článek", few: "{count} články", many: "{count} článku", other: "{count} článků" },
  el: { one: "{count} άρθρο", other: "{count} άρθρα" },
  ro: { one: "{count} articol", few: "{count} articole", other: "{count} articole" },
  hu: { one: "{count} cikk", other: "{count} cikk" },
  fa: { one: "{count} مقاله", other: "{count} مقاله" },
  ca: { one: "{count} article", many: "{count} articles", other: "{count} articles" },
  bn: { one: "{count} নিবন্ধ", other: "{count} নিবন্ধ" },
  gu: { one: "{count} લેખ", other: "{count} લેખ" },
  kn: { one: "{count} ಲೇಖನ", other: "{count} ಲೇಖನಗಳು" },
  ml: { one: "{count} ലേഖനം", other: "{count} ലേഖനങ്ങൾ" },
  mr: { one: "{count} लेख", other: "{count} लेख" },
  pa: { one: "{count} ਲੇਖ", other: "{count} ਲੇਖ" },
  ta: { one: "{count} கட்டுரை", other: "{count} கட்டுரைகள்" },
  te: { one: "{count} వ్యాసం", other: "{count} వ్యాసాలు" },
  ur: { one: "{count} مضمون", other: "{count} مضامین" },
  sw: { one: "{count} makala", other: "{count} makala" },
  bg: { one: "{count} статия", other: "{count} статии" },
  et: { one: "{count} artikkel", other: "{count} artiklit" },
  hr: { one: "{count} članak", few: "{count} članka", other: "{count} članaka" },
  is: { one: "{count} grein", other: "{count} greinar" },
  lt: { one: "{count} straipsnis", few: "{count} straipsniai", many: "{count} straipsnio", other: "{count} straipsnių" },
  lv: { zero: "{count} rakstu", one: "{count} raksts", other: "{count} raksti" },
  sk: { one: "{count} článok", few: "{count} články", many: "{count} článku", other: "{count} článkov" },
  sl: { one: "{count} članek", two: "{count} članka", few: "{count} članki", other: "{count} člankov" },
  zu: { one: "{count} isihloko", other: "{count} izihloko" },
};

export function formatBlogArticleCount(locale: AppLocale, count: number): string {
  if (!Number.isSafeInteger(count) || count < 0) {
    throw new Error(`Invalid blog article count for ${locale}: ${count}. Expected a non-negative safe integer.`);
  }

  const intlLocale = getIntlLocale(locale);
  const category = new Intl.PluralRules(intlLocale).select(count);
  const template = ARTICLE_COUNT_TEMPLATES[locale][category];

  if (template === undefined) {
    throw new Error(`Missing blog article count translation for ${locale}, plural category ${category}, count ${count}.`);
  }

  return template.replace("{count}", new Intl.NumberFormat(intlLocale).format(count));
}
