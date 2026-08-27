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
  return (tree: Root): Root => {
    const sanitizedTree = sanitize(tree, markdownSanitizeSchema);

    if (sanitizedTree.type !== "root") {
      throw new Error("Catalog Markdown sanitizer returned a non-root tree.");
    }

    return sanitizedTree;
  };
}

/**
 * `transformPublicCatalogCardMathBlocks` rewrites every formula it does not
 * accept to plain text, so the only remaining `math-display` and `math-inline`
 * elements are accepted formulas and keep their classes. A fenced ` ```math `
 * block still reaches this stage as a bare `language-math` element, which
 * `rehype-katex` would otherwise render, so that class is stripped.
 *
 * That rests on `mdast-util-to-markdown` escaping every dollar a phrasing
 * `text` node holds: a node type serialized verbatim would hand unaccepted
 * dollars back to `remark-math` here, and this class filter would stop
 * guarding them.
 */
function restrictKatexToAcceptedMath(): (tree: Root) => Root {
  return (tree: Root): Root => {
    const restrictedTree = structuredClone(tree);

    visit(restrictedTree, "element", (element) => {
      const classNames = element.properties.className;

      if (
        Array.isArray(classNames) === false
        || classNames.includes("math-display")
        || classNames.includes("math-inline")
      ) {
        return;
      }

      const restrictedClassNames = classNames.filter((className) => (
        className !== "language-math"
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
    .use(restrictKatexToAcceptedMath)
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
