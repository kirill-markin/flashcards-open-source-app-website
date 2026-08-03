import type {
  Blockquote,
  BlockContent,
  Definition,
  DefinitionContent,
  ImageReference,
  Heading,
  LinkReference,
  List,
  ListItem,
  Nodes,
  Paragraph,
  PhrasingContent,
  Root,
  RootContent,
  Table,
  TableCell,
  TableRow,
} from "mdast";
import { remark } from "remark";
import gfm from "remark-gfm";
import {
  DEFAULT_LOCALE,
  getLocalizedPathname,
  resolveLocaleFromPathname,
  type AppLocale,
} from "./i18n";
import { assertSafeMarkdownDestinationInput } from "./markdownLinks";
import { isPublicCatalogPageRoutePathname } from "./publicCatalogUrls";
import { hasRouteTranslation } from "./routeTranslations";

interface MarkdownFragmentContext {
  readonly definitions: ReadonlyMap<string, Definition>;
  readonly locale: AppLocale;
  readonly sourceContext: string;
}

function createInvalidDestinationError(
  context: MarkdownFragmentContext,
  destination: string,
): Error {
  return new Error(
    `${context.sourceContext} contains an unsafe or unsupported Markdown destination. `
      + `Only absolute HTTP(S) URLs, root-relative site paths, and fragment references are allowed. received=${destination}`,
  );
}

function localizeRootRelativeDestination(
  destination: string,
  locale: AppLocale,
): string {
  const parsedDestination = new URL(destination, "https://catalog.invalid");
  const { locale: destinationLocale, routePathname } = resolveLocaleFromPathname(
    parsedDestination.pathname,
  );

  if (
    locale === DEFAULT_LOCALE
    || destinationLocale !== DEFAULT_LOCALE
    || (
      isPublicCatalogPageRoutePathname(routePathname) === false
      && hasRouteTranslation(routePathname, locale) === false
    )
  ) {
    return `${parsedDestination.pathname}${parsedDestination.search}${parsedDestination.hash}`;
  }

  const localizedPathname = getLocalizedPathname(locale, routePathname);
  const pathname = parsedDestination.pathname.endsWith("/") || localizedPathname === "/"
    ? localizedPathname
    : localizedPathname.replace(/\/$/, "");

  return `${pathname}${parsedDestination.search}${parsedDestination.hash}`;
}

function normalizeAuthoredMarkdownDestination(
  destination: string,
  context: MarkdownFragmentContext,
): string {
  assertSafeMarkdownDestinationInput(destination, context.sourceContext);

  if (destination.startsWith("#")) {
    return destination;
  }

  if (destination.startsWith("/")) {
    if (destination.startsWith("//")) {
      throw createInvalidDestinationError(context, destination);
    }

    const suffixIndex = destination.search(/[?#]/u);
    const pathname = suffixIndex === -1 ? destination : destination.slice(0, suffixIndex);
    const decodedPathname = decodeURI(pathname);
    const containsDotSegment = decodedPathname
      .split("/")
      .some((segment) => segment === "." || segment === "..");

    const parsedDestination = new URL(destination, "https://catalog.invalid");

    if (
      decodedPathname === ""
      || containsDotSegment
      || parsedDestination.origin !== "https://catalog.invalid"
    ) {
      throw createInvalidDestinationError(context, destination);
    }

    return localizeRootRelativeDestination(
      `${parsedDestination.pathname}${parsedDestination.search}${parsedDestination.hash}`,
      context.locale,
    );
  }

  let parsedDestination: URL;

  try {
    parsedDestination = new URL(destination);
  } catch {
    throw createInvalidDestinationError(context, destination);
  }

  if (
    (parsedDestination.protocol !== "http:" && parsedDestination.protocol !== "https:")
    || parsedDestination.username !== ""
    || parsedDestination.password !== ""
  ) {
    throw createInvalidDestinationError(context, destination);
  }

  return parsedDestination.toString();
}

function createUnsupportedFootnoteError(
  sourceContext: string,
  nodeType: "footnoteDefinition" | "footnoteReference",
): Error {
  return new Error(
    `${sourceContext} contains an unsupported Markdown footnote ${nodeType}. `
      + "Footnote definitions and references are not supported in public catalog content.",
  );
}

function containsUnescapedFootnoteReference(value: string): boolean {
  for (let index = 0; index < value.length - 2; index += 1) {
    if (value[index] !== "[" || value[index + 1] !== "^") {
      continue;
    }

    let precedingBackslashCount = 0;

    for (
      let precedingIndex = index - 1;
      precedingIndex >= 0 && value[precedingIndex] === "\\";
      precedingIndex -= 1
    ) {
      precedingBackslashCount += 1;
    }

    if (precedingBackslashCount % 2 !== 0) {
      continue;
    }

    const closingBracketIndex = value.indexOf("]", index + 2);

    if (
      closingBracketIndex > index + 2
      && value.slice(index + 2, closingBracketIndex).includes("\n") === false
      && value.slice(index + 2, closingBracketIndex).includes("\r") === false
    ) {
      return true;
    }
  }

  return false;
}

function assertNoAuthoredFootnotes(
  node: Nodes,
  sourceContext: string,
  markdown: string,
): void {
  if (node.type === "footnoteDefinition" || node.type === "footnoteReference") {
    throw createUnsupportedFootnoteError(sourceContext, node.type);
  }

  if (node.type === "text") {
    const startOffset = node.position?.start.offset;
    const endOffset = node.position?.end.offset;
    const sourceText = startOffset === undefined || endOffset === undefined
      ? node.value
      : markdown.slice(startOffset, endOffset);

    if (containsUnescapedFootnoteReference(sourceText)) {
      throw createUnsupportedFootnoteError(sourceContext, "footnoteReference");
    }
  }

  if ("children" in node) {
    node.children.forEach((child) => {
      assertNoAuthoredFootnotes(child, sourceContext, markdown);
    });
  }
}

function collectDefinitionsFromListItem(
  listItem: ListItem,
  definitions: Map<string, Definition>,
): void {
  collectDefinitions(listItem.children, definitions);
}

function collectHeadingDepthsFromListItem(
  listItem: ListItem,
  headingDepths: Heading["depth"][],
): void {
  collectHeadingDepths(listItem.children, headingDepths);
}

function collectHeadingDepths(
  nodes: ReadonlyArray<RootContent>,
  headingDepths: Heading["depth"][],
): void {
  nodes.forEach((node) => {
    if (node.type === "heading") {
      headingDepths.push(node.depth);
      return;
    }

    if (node.type === "blockquote") {
      collectHeadingDepths(node.children, headingDepths);
      return;
    }

    if (node.type === "list") {
      node.children.forEach((listItem) =>
        collectHeadingDepthsFromListItem(listItem, headingDepths));
    }
  });
}

function collectDefinitions(
  nodes: ReadonlyArray<RootContent>,
  definitions: Map<string, Definition>,
): void {
  nodes.forEach((node) => {
    if (node.type === "definition") {
      if (definitions.has(node.identifier) === false) {
        definitions.set(node.identifier, node);
      }
      return;
    }

    if (node.type === "blockquote") {
      collectDefinitions(node.children, definitions);
      return;
    }

    if (node.type === "list") {
      node.children.forEach((listItem) =>
        collectDefinitionsFromListItem(listItem, definitions));
    }
  });
}

function normalizeLinkReference(
  node: LinkReference,
  context: MarkdownFragmentContext,
): PhrasingContent {
  const definition = context.definitions.get(node.identifier);
  const children = normalizePhrasingContent(node.children, context);

  if (definition === undefined) {
    return { ...node, children };
  }

  return {
    type: "link",
    url: definition.url,
    title: definition.title,
    children,
  };
}

function normalizeImageReference(
  node: ImageReference,
  context: MarkdownFragmentContext,
): PhrasingContent {
  const definition = context.definitions.get(node.identifier);

  if (definition === undefined) {
    return node;
  }

  return {
    type: "image",
    url: definition.url,
    title: definition.title,
    alt: node.alt,
  };
}

function normalizePhrasingContent(
  nodes: ReadonlyArray<PhrasingContent>,
  context: MarkdownFragmentContext,
): PhrasingContent[] {
  return nodes.map((node): PhrasingContent => {
    if (node.type === "html") {
      throw new Error("Public catalog authored Markdown must not contain raw HTML.");
    }

    if (node.type === "linkReference") {
      return normalizeLinkReference(node, context);
    }

    if (node.type === "imageReference") {
      return normalizeImageReference(node, context);
    }

    if (node.type === "image") {
      return {
        ...node,
        url: normalizeAuthoredMarkdownDestination(node.url, context),
      };
    }

    if (
      node.type === "delete"
      || node.type === "emphasis"
      || node.type === "link"
      || node.type === "strong"
    ) {
      return {
        ...node,
        ...(node.type === "link"
          ? { url: normalizeAuthoredMarkdownDestination(node.url, context) }
          : {}),
        children: normalizePhrasingContent(node.children, context),
      };
    }

    return node;
  });
}

function normalizeParagraph(
  paragraph: Paragraph,
  context: MarkdownFragmentContext,
): Paragraph {
  return {
    ...paragraph,
    children: normalizePhrasingContent(paragraph.children, context),
  };
}

function normalizeListItem(
  listItem: ListItem,
  context: MarkdownFragmentContext,
  headingDepthOffset: number,
): ListItem {
  return {
    ...listItem,
    children: normalizeRootContent(
      listItem.children,
      context,
      headingDepthOffset,
    ) as Array<
      BlockContent | DefinitionContent
    >,
  };
}

function normalizeList(
  list: List,
  context: MarkdownFragmentContext,
  headingDepthOffset: number,
): List {
  return {
    ...list,
    children: list.children.map((listItem) =>
      normalizeListItem(listItem, context, headingDepthOffset)),
  };
}

function normalizeBlockquote(
  blockquote: Blockquote,
  context: MarkdownFragmentContext,
  headingDepthOffset: number,
): Blockquote {
  return {
    ...blockquote,
    children: normalizeRootContent(
      blockquote.children,
      context,
      headingDepthOffset,
    ) as Array<
      BlockContent | DefinitionContent
    >,
  };
}

function normalizeTableCell(
  tableCell: TableCell,
  context: MarkdownFragmentContext,
): TableCell {
  return {
    ...tableCell,
    children: normalizePhrasingContent(tableCell.children, context),
  };
}

function normalizeTableRow(
  tableRow: TableRow,
  context: MarkdownFragmentContext,
): TableRow {
  return {
    ...tableRow,
    children: tableRow.children.map((tableCell) =>
      normalizeTableCell(tableCell, context)),
  };
}

function normalizeTable(
  table: Table,
  context: MarkdownFragmentContext,
): Table {
  return {
    ...table,
    children: table.children.map((tableRow) =>
      normalizeTableRow(tableRow, context)),
  };
}

function normalizeRootContent(
  nodes: ReadonlyArray<RootContent>,
  context: MarkdownFragmentContext,
  headingDepthOffset: number,
): RootContent[] {
  return nodes.flatMap((node): RootContent[] => {
    if (node.type === "definition") {
      return [];
    }

    if (node.type === "html") {
      throw new Error("Public catalog authored Markdown must not contain raw HTML.");
    }

    if (node.type === "blockquote") {
      return [normalizeBlockquote(node, context, headingDepthOffset)];
    }

    if (node.type === "list") {
      return [normalizeList(node, context, headingDepthOffset)];
    }

    if (node.type === "table") {
      return [normalizeTable(node, context)];
    }

    if (node.type === "paragraph") {
      return [normalizeParagraph(node, context)];
    }

    if (node.type === "heading") {
      return [{
        ...node,
        depth: Math.min(6, node.depth + headingDepthOffset) as Heading["depth"],
        children: normalizePhrasingContent(node.children, context),
      }];
    }

    return [node];
  });
}

function normalizePublicCatalogMarkdownFragment(
  markdown: string,
  minimumHeadingDepth: Heading["depth"],
  locale: AppLocale,
  sourceContext: string,
): string {
  const processor = remark().use(gfm);
  const parsedRoot = processor.parse(markdown) as Root;
  const definitions = new Map<string, Definition>();
  const headingDepths: Heading["depth"][] = [];

  assertNoAuthoredFootnotes(parsedRoot, sourceContext, markdown);

  collectDefinitions(parsedRoot.children, definitions);
  collectHeadingDepths(parsedRoot.children, headingDepths);

  const normalizedDefinitions = new Map(
    [...definitions].map(([identifier, definition]): [string, Definition] => [
      identifier,
      {
        ...definition,
        url: normalizeAuthoredMarkdownDestination(definition.url, {
          definitions,
          locale,
          sourceContext,
        }),
      },
    ]),
  );
  const context: MarkdownFragmentContext = {
    definitions: normalizedDefinitions,
    locale,
    sourceContext,
  };

  const shallowestHeadingDepth = headingDepths.length === 0
    ? minimumHeadingDepth
    : Math.min(...headingDepths);
  const headingDepthOffset = Math.max(0, minimumHeadingDepth - shallowestHeadingDepth);

  const normalizedRoot: Root = {
    ...parsedRoot,
    children: normalizeRootContent(
      parsedRoot.children,
      context,
      headingDepthOffset,
    ),
  };

  return processor.stringify(normalizedRoot).trim();
}

export function normalizePublicCatalogDescriptionMarkdownFragment(
  markdown: string,
  locale: AppLocale,
  sourceContext: string,
): string {
  return normalizePublicCatalogMarkdownFragment(markdown, 3, locale, sourceContext);
}

export function normalizePublicCatalogCardMarkdownFragment(
  markdown: string,
  locale: AppLocale,
  sourceContext: string,
): string {
  return normalizePublicCatalogMarkdownFragment(markdown, 4, locale, sourceContext);
}
