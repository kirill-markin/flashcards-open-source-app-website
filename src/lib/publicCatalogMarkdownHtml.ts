import { renderMarkdownToHtml } from "./content/renderMarkdownToHtml";
import type { AppLocale } from "./i18n";
import {
  normalizePublicCatalogCardMarkdownFragment,
  normalizePublicCatalogDescriptionMarkdownFragment,
} from "./publicCatalogMarkdownFragment";

async function renderNormalizedPublicCatalogMarkdownToHtml(
  markdown: string,
  locale: AppLocale,
): Promise<string> {
  return renderMarkdownToHtml(markdown, locale);
}

export async function renderPublicCatalogDescriptionMarkdownToHtml(
  markdown: string,
  locale: AppLocale,
  sourceContext: string,
): Promise<string> {
  return renderNormalizedPublicCatalogMarkdownToHtml(
    normalizePublicCatalogDescriptionMarkdownFragment(
      markdown,
      locale,
      sourceContext,
    ),
    locale,
  );
}

export async function renderPublicCatalogCardMarkdownToHtml(
  markdown: string,
  locale: AppLocale,
  mediaDownloadUrlByKey: ReadonlyMap<string, string>,
  sourceContext: string,
): Promise<string> {
  return renderNormalizedPublicCatalogMarkdownToHtml(
    normalizePublicCatalogCardMarkdownFragment(
      markdown,
      locale,
      mediaDownloadUrlByKey,
      sourceContext,
    ),
    locale,
  );
}
