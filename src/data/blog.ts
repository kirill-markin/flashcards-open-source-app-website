export const BLOG_POST_SLUGS: ReadonlyArray<string> = [
  "anki-vs-quizlet-vs-open-source-flashcards-app",
  "best-anki-alternatives",
  "best-offline-flashcards-app",
  "brainscape-alternative",
  "claude-code-codex-openclaw-flashcards-login",
  "fsrs-vs-sm-2",
  "how-many-new-flashcards-per-day",
  "how-to-catch-up-on-flashcards-after-falling-behind",
  "how-to-make-better-flashcards",
  "how-to-study-for-an-exam-with-fsrs",
  "how-to-turn-a-pdf-into-flashcards",
  "how-to-turn-a-podcast-into-flashcards",
  "how-to-turn-an-article-into-flashcards",
  "how-to-turn-chatgpt-study-mode-into-flashcards",
  "how-to-turn-diagrams-into-flashcards",
  "how-to-turn-handwritten-notes-into-flashcards",
  "how-to-turn-kindle-highlights-into-flashcards",
  "how-to-turn-lecture-recordings-into-flashcards",
  "how-to-turn-notion-notes-into-flashcards",
  "how-to-turn-practice-questions-into-flashcards",
  "how-to-turn-voice-notes-into-flashcards",
  "how-to-use-chatgpt-to-make-flashcards",
  "how-to-use-chatgpt-voice-for-language-learning",
  "how-to-use-flashcards-for-language-learning",
  "memrise-alternative",
  "migrate-from-anki-txt-export-open-source-flashcards",
  "mochi-alternative",
  "notebooklm-flashcards-to-spaced-repetition",
  "quizlet-alternative",
  "remnote-alternative",
  "self-hosted-open-source-flashcards-app-for-spaced-repetition",
  "turn-notes-into-flashcards",
  "youtube-to-flashcards",
] as const;

type ContentLocale = "en" | "es";

const TRANSLATED_BLOG_POST_SLUGS_BY_LOCALE: Readonly<
  Record<ContentLocale, ReadonlyArray<string>>
> = {
  en: BLOG_POST_SLUGS,
  es: BLOG_POST_SLUGS,
};

export function getTranslatedBlogPostSlugs(
  locale: ContentLocale
): ReadonlyArray<string> {
  return TRANSLATED_BLOG_POST_SLUGS_BY_LOCALE[locale];
}

export function hasTranslatedBlogPostSlug(
  locale: ContentLocale,
  slug: string
): boolean {
  return TRANSLATED_BLOG_POST_SLUGS_BY_LOCALE[locale].includes(slug);
}
