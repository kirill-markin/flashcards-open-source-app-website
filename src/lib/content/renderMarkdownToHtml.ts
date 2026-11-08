import type { Root } from "hast";
import { defaultSchema, sanitize } from "hast-util-sanitize";
import type { Schema } from "hast-util-sanitize";
import { defaultHandlers } from "mdast-util-to-hast";
import type { Handlers } from "mdast-util-to-hast";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import gfm from "remark-gfm";
import html from "remark-html";
import remarkRehype from "remark-rehype";
import type { AppLocale } from "@/lib/i18n";
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import { localizeInternalLinks } from "@/lib/localizeInternalLinks";

type MarkdownLinkState = Parameters<typeof defaultHandlers.link>[0];
type MarkdownLinkNode = Parameters<typeof defaultHandlers.link>[1];
type MarkdownLinkElement = ReturnType<typeof defaultHandlers.link>;

export const markdownSanitizeSchema: Schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    a: [
      ...(defaultSchema.attributes?.a ?? []),
      ["target", "_blank"],
      ["rel", "noopener", "noreferrer"],
    ],
    code: [["className", /^language-./u, "math-inline", "math-display"]],
  },
};

function renderMarkdownLink(
  state: MarkdownLinkState,
  node: MarkdownLinkNode
): MarkdownLinkElement {
  const linkElement = defaultHandlers.link(state, node);
  const externalLinkAttributes = getExternalLinkAttributes(node.url);

  if (
    externalLinkAttributes.target === undefined ||
    externalLinkAttributes.rel === undefined
  ) {
    return linkElement;
  }

  return {
    ...linkElement,
    properties: {
      ...linkElement.properties,
      rel: externalLinkAttributes.rel.split(" "),
      target: externalLinkAttributes.target,
    },
  };
}

export const markdownHandlers = {
  link: renderMarkdownLink,
} satisfies Readonly<Handlers>;

export function sanitizeMarkdownHtml(): (tree: Root) => Root {
  return (tree: Root): Root => {
    const sanitizedTree = sanitize(tree, markdownSanitizeSchema);

    if (sanitizedTree.type !== "root") {
      throw new Error("Markdown sanitizer returned a non-root tree.");
    }

    return sanitizedTree;
  };
}

/**
 * Docs, blog, and legal pages are authored in this repository, so their
 * headings get GitHub-style ids (`## Scheduling` -> `id="scheduling"`, non-Latin
 * letters kept, repeats suffixed `-1`, `-2`). The ids are added after the
 * sanitizer: its clobber rule still prefixes every id the Markdown itself
 * produces, and only these derived heading ids stay unprefixed so
 * `/docs/architecture/#scheduling` resolves. Catalog Markdown is user-authored
 * and keeps `renderMarkdownToHtml`, which adds no heading ids.
 */
const contentPageHtmlProcessor = remark()
  .use(gfm)
  .use(remarkRehype, { handlers: markdownHandlers })
  .use(sanitizeMarkdownHtml)
  .use(rehypeSlug)
  .use(rehypeStringify)
  .freeze();

export function prepareMarkdownForHtml(
  markdown: string,
  locale: AppLocale,
): string {
  return localizeInternalLinks(markdown, locale);
}

export async function renderMarkdownToHtml(
  markdown: string,
  locale: AppLocale
): Promise<string> {
  const result = await remark()
    .use(gfm)
    .use(html, {
      handlers: markdownHandlers,
      sanitize: markdownSanitizeSchema,
    })
    .process(prepareMarkdownForHtml(markdown, locale));
  return result.toString();
}

export async function renderContentPageMarkdownToHtml(
  markdown: string,
  locale: AppLocale
): Promise<string> {
  const result = await contentPageHtmlProcessor.process(
    prepareMarkdownForHtml(markdown, locale),
  );
  return result.toString();
}
