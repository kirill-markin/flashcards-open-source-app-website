import type { Image, ImageReference, Nodes, Root } from "mdast";
import { remark } from "remark";
import gfm from "remark-gfm";
import { renderMarkdownToHtml } from "./content/renderMarkdownToHtml";
import type { AppLocale } from "./i18n";
import {
  normalizePublicCatalogCardMarkdownFragment,
  normalizePublicCatalogDescriptionMarkdownFragment,
} from "./publicCatalogMarkdownFragment";

function getAuthoredImageLabel(node: Image | ImageReference): string {
  if (node.alt !== null && node.alt !== undefined && node.alt.trim() !== "") {
    return node.alt;
  }

  return node.type === "image" ? node.url : node.identifier;
}

function replaceAuthoredImagesWithText(node: Nodes): Nodes {
  if (node.type === "image" || node.type === "imageReference") {
    return { type: "text", value: getAuthoredImageLabel(node) };
  }

  if ("children" in node) {
    return {
      ...node,
      children: node.children.map(replaceAuthoredImagesWithText),
    } as Nodes;
  }

  return node;
}

function replaceAuthoredImagesWithLinks(node: Nodes): Nodes {
  if (node.type === "image") {
    const label = getAuthoredImageLabel(node);

    return {
      type: "link",
      url: node.url,
      title: node.title,
      children: [{ type: "text", value: label }],
    };
  }

  if (node.type === "imageReference") {
    return replaceAuthoredImagesWithText(node);
  }

  if (node.type === "link" || node.type === "linkReference") {
    return {
      ...node,
      children: node.children.map(replaceAuthoredImagesWithText),
    } as Nodes;
  }

  if ("children" in node) {
    return {
      ...node,
      children: node.children.map(replaceAuthoredImagesWithLinks),
    } as Nodes;
  }

  return node;
}

function replaceAuthoredMarkdownImages(markdown: string): string {
  const processor = remark().use(gfm);
  const parsedRoot = processor.parse(markdown) as Root;
  const normalizedRoot = replaceAuthoredImagesWithLinks(parsedRoot) as Root;

  return processor.stringify(normalizedRoot).trim();
}

async function renderNormalizedPublicCatalogMarkdownToHtml(
  markdown: string,
  locale: AppLocale,
): Promise<string> {
  return renderMarkdownToHtml(replaceAuthoredMarkdownImages(markdown), locale);
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
  sourceContext: string,
): Promise<string> {
  return renderNormalizedPublicCatalogMarkdownToHtml(
    normalizePublicCatalogCardMarkdownFragment(
      markdown,
      locale,
      sourceContext,
    ),
    locale,
  );
}
