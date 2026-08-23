import { defaultSchema } from "hast-util-sanitize";
import type { Schema } from "hast-util-sanitize";
import { defaultHandlers } from "mdast-util-to-hast";
import type { Handlers } from "mdast-util-to-hast";
import { remark } from "remark";
import gfm from "remark-gfm";
import html from "remark-html";
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
