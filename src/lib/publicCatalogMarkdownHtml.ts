import type { Root } from "hast";
import { sanitize } from "hast-util-sanitize";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import gfm from "remark-gfm";
import math from "remark-math";
import remarkRehype from "remark-rehype";
import { visit } from "unist-util-visit";
import {
  markdownHandlers,
  markdownSanitizeSchema,
  renderMarkdownToHtml,
} from "./content/renderMarkdownToHtml";
import type { AppLocale } from "./i18n";
import {
  normalizePublicCatalogCardMarkdownFragment,
  normalizePublicCatalogDescriptionMarkdownFragment,
} from "./publicCatalogMarkdownFragment";
import { publicCatalogKatexOptions } from "./publicCatalogCardMath";

async function renderNormalizedPublicCatalogMarkdownToHtml(
  markdown: string,
  locale: AppLocale,
): Promise<string> {
  return renderMarkdownToHtml(markdown, locale);
}

function sanitizeMarkdownHtml(): (tree: Root) => Root {
  return (tree: Root): Root => sanitize(tree, markdownSanitizeSchema);
}

function restrictKatexToAcceptedDisplayMath(): (tree: Root) => Root {
  return (tree: Root): Root => {
    const restrictedTree = structuredClone(tree);

    visit(restrictedTree, "element", (element) => {
      const classNames = element.properties.className;

      if (
        Array.isArray(classNames) === false
        || classNames.includes("math-display")
      ) {
        return;
      }

      const restrictedClassNames = classNames.filter((className) => (
        className !== "language-math" && className !== "math-inline"
      ));

      if (restrictedClassNames.length === 0) {
        delete element.properties.className;
        return;
      }

      element.properties.className = restrictedClassNames;
    });

    return restrictedTree;
  };
}

async function renderNormalizedPublicCatalogCardMarkdownToHtml(
  markdown: string,
): Promise<string> {
  const result = await remark()
    .use(gfm)
    .use(math)
    .use(remarkRehype, { handlers: markdownHandlers })
    .use(sanitizeMarkdownHtml)
    .use(restrictKatexToAcceptedDisplayMath)
    .use(rehypeKatex, publicCatalogKatexOptions)
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
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
  return renderNormalizedPublicCatalogCardMarkdownToHtml(
    normalizePublicCatalogCardMarkdownFragment(
      markdown,
      locale,
      mediaDownloadUrlByKey,
      sourceContext,
    ),
  );
}
