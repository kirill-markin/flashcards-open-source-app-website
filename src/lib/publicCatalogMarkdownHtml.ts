import type { Root } from "hast";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import gfm from "remark-gfm";
import math from "remark-math";
import remarkRehype from "remark-rehype";
import { visit } from "unist-util-visit";
import {
  markdownHandlers,
  renderMarkdownToHtml,
  sanitizeMarkdownHtml,
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

const imageGalleryClassName = "markdown-image-gallery";

function getImageGalleryColumnCount(imageCount: number): number {
  if (imageCount === 4) {
    return 2;
  }

  return Math.min(imageCount, 3);
}

/**
 * A paragraph holding only two or more images, separated by spaces, tabs, or
 * soft line breaks, is the cross-client image gallery. It is marked after the
 * sanitizer so the sanitizer schema keeps rejecting authored classes and data
 * attributes.
 */
function markImageGalleryParagraphs(): (tree: Root) => Root {
  return (tree: Root): Root => {
    const markedTree = structuredClone(tree);

    visit(markedTree, "element", (element) => {
      if (element.tagName !== "p") {
        return;
      }

      const isImageOnlyParagraph = element.children.every((child) => (
        (child.type === "element" && child.tagName === "img")
        || (child.type === "text" && /^[ \t\n]*$/u.test(child.value))
      ));
      const imageCount = element.children.filter((child) => (
        child.type === "element"
      )).length;

      if (isImageOnlyParagraph === false || imageCount < 2) {
        return;
      }

      element.properties.className = [imageGalleryClassName];
      element.properties.dataGalleryColumns = getImageGalleryColumnCount(imageCount);
    });

    return markedTree;
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

const publicCatalogCardHtmlProcessor = remark()
  .use(gfm)
  .use(math)
  .use(remarkRehype, { handlers: markdownHandlers })
  .use(sanitizeMarkdownHtml)
  .use(markImageGalleryParagraphs)
  .use(restrictKatexToAcceptedMath)
  .use(rehypeKatex, publicCatalogKatexOptions)
  .use(rehypeStringify)
  .freeze();

// The normalized Markdown fully determines the HTML, and every card renders once per
// locale, so each distinct card side is converted once per process.
const publicCatalogCardHtmlByMarkdown = new Map<string, string>();

async function renderNormalizedPublicCatalogCardMarkdownToHtml(
  markdown: string,
): Promise<string> {
  const cachedHtml = publicCatalogCardHtmlByMarkdown.get(markdown);

  if (cachedHtml !== undefined) {
    return cachedHtml;
  }

  const html = (await publicCatalogCardHtmlProcessor.process(markdown)).toString();

  publicCatalogCardHtmlByMarkdown.set(markdown, html);
  return html;
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
