import type {
  Blockquote,
  BlockContent,
  Definition,
  DefinitionContent,
  Image,
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
import math from "remark-math";
import {
  DEFAULT_LOCALE,
  getLocalizedPathname,
  resolveLocaleFromPathname,
  type AppLocale,
} from "./i18n";
import { assertSafeMarkdownDestinationInput } from "./markdownLinks";
import {
  escapeRejectedPublicCatalogCardMath,
  transformPublicCatalogCardMathBlocks,
} from "./publicCatalogCardMath";
import { isPublicCatalogSharedPageRoutePathname } from "./publicCatalogUrls";
import { hasRouteTranslation } from "./routeTranslations";
import { SITE_URL } from "./site";

interface MarkdownFragmentContext {
  readonly authorizedImageDefinitionIdentifiers: ReadonlySet<string>;
  readonly definitions: ReadonlyMap<string, Definition>;
  readonly locale: AppLocale;
  readonly resolveDestination: (destination: string) => MarkdownDestinationResolution;
  readonly sourceContext: string;
}

interface MarkdownDestinationResolution {
  readonly destination: string;
  readonly isAuthorizedImage: boolean;
}

const packageRelativeMediaFileNamePattern = /^[A-Za-z0-9][A-Za-z0-9._-]*$/u;
const siteOrigin = new URL(SITE_URL).origin;

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
      isPublicCatalogSharedPageRoutePathname(routePathname) === false
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
): MarkdownDestinationResolution {
  const resolution = context.resolveDestination(destination);
  const resolvedDestination = resolution.destination;

  assertSafeMarkdownDestinationInput(resolvedDestination, context.sourceContext);

  if (resolvedDestination.startsWith("#")) {
    return resolution;
  }

  if (resolvedDestination.startsWith("/")) {
    if (resolvedDestination.startsWith("//")) {
      throw createInvalidDestinationError(context, resolvedDestination);
    }

    const suffixIndex = resolvedDestination.search(/[?#]/u);
    const pathname = suffixIndex === -1
      ? resolvedDestination
      : resolvedDestination.slice(0, suffixIndex);
    const decodedPathname = decodeURI(pathname);
    const containsDotSegment = decodedPathname
      .split("/")
      .some((segment) => segment === "." || segment === "..");

    const parsedDestination = new URL(resolvedDestination, "https://catalog.invalid");

    if (
      decodedPathname === ""
      || containsDotSegment
      || parsedDestination.origin !== "https://catalog.invalid"
    ) {
      throw createInvalidDestinationError(context, resolvedDestination);
    }

    return {
      ...resolution,
      destination: localizeRootRelativeDestination(
        `${parsedDestination.pathname}${parsedDestination.search}${parsedDestination.hash}`,
        context.locale,
      ),
    };
  }

  let parsedDestination: URL;

  try {
    parsedDestination = new URL(resolvedDestination);
  } catch {
    throw createInvalidDestinationError(context, resolvedDestination);
  }

  if (
    (parsedDestination.protocol !== "http:" && parsedDestination.protocol !== "https:")
    || parsedDestination.username !== ""
    || parsedDestination.password !== ""
  ) {
    throw createInvalidDestinationError(context, resolvedDestination);
  }

  return {
    ...resolution,
    destination: parsedDestination.toString(),
  };
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
  const children = normalizeLinkedPhrasingContent(node.children, context);

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

function getAuthoredImageLabel(
  alt: string | null | undefined,
  fallback: string,
): string {
  return alt === null || alt === undefined || alt.trim() === "" ? fallback : alt;
}

function normalizeAuthoredImageAsText(
  node: Image | ImageReference,
  context: MarkdownFragmentContext,
): PhrasingContent {
  if (node.type === "image") {
    const resolution = normalizeAuthoredMarkdownDestination(node.url, context);

    if (resolution.isAuthorizedImage) {
      return {
        ...node,
        url: resolution.destination,
      };
    }

    return {
      type: "text",
      value: getAuthoredImageLabel(node.alt, resolution.destination),
    };
  }

  const definition = context.definitions.get(node.identifier);

  if (
    definition !== undefined
    && context.authorizedImageDefinitionIdentifiers.has(node.identifier)
  ) {
    return {
      type: "image",
      url: definition.url,
      title: definition.title,
      alt: node.alt,
    };
  }

  return {
    type: "text",
    value: getAuthoredImageLabel(node.alt, definition?.url ?? node.identifier),
  };
}

function normalizeAuthoredImageAsLink(
  node: Image | ImageReference,
  context: MarkdownFragmentContext,
): PhrasingContent {
  if (node.type === "image") {
    const resolution = normalizeAuthoredMarkdownDestination(node.url, context);

    if (resolution.isAuthorizedImage) {
      return {
        ...node,
        url: resolution.destination,
      };
    }

    return {
      type: "link",
      url: resolution.destination,
      title: node.title,
      children: [{
        type: "text",
        value: getAuthoredImageLabel(node.alt, resolution.destination),
      }],
    };
  }

  const definition = context.definitions.get(node.identifier);

  if (definition === undefined) {
    return normalizeAuthoredImageAsText(node, context);
  }

  if (context.authorizedImageDefinitionIdentifiers.has(node.identifier)) {
    return {
      type: "image",
      url: definition.url,
      title: definition.title,
      alt: node.alt,
    };
  }

  return {
    type: "link",
    url: definition.url,
    title: definition.title,
    children: [{
      type: "text",
      value: getAuthoredImageLabel(node.alt, definition.url),
    }],
  };
}

function normalizeLinkedPhrasingContent(
  nodes: ReadonlyArray<PhrasingContent>,
  context: MarkdownFragmentContext,
): PhrasingContent[] {
  return nodes.map((node): PhrasingContent => {
    if (node.type === "html") {
      throw new Error("Public catalog authored Markdown must not contain raw HTML.");
    }

    if (node.type === "image" || node.type === "imageReference") {
      return normalizeAuthoredImageAsText(node, context);
    }

    if (node.type === "linkReference") {
      return normalizeLinkReference(node, context);
    }

    if (node.type === "link") {
      return {
        ...node,
        url: normalizeAuthoredMarkdownDestination(node.url, context).destination,
        children: normalizeLinkedPhrasingContent(node.children, context),
      };
    }

    if (
      node.type === "delete"
      || node.type === "emphasis"
      || node.type === "strong"
    ) {
      return {
        ...node,
        children: normalizeLinkedPhrasingContent(node.children, context),
      };
    }

    return node;
  });
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

    if (node.type === "image" || node.type === "imageReference") {
      return normalizeAuthoredImageAsLink(node, context);
    }

    if (node.type === "link") {
      return {
        ...node,
        url: normalizeAuthoredMarkdownDestination(node.url, context).destination,
        children: normalizeLinkedPhrasingContent(node.children, context),
      };
    }

    if (node.type === "delete" || node.type === "emphasis" || node.type === "strong") {
      return {
        ...node,
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

function createNormalizedPublicCatalogMarkdownRoot(
  markdown: string,
  parsedRoot: Root,
  minimumHeadingDepth: Heading["depth"],
  locale: AppLocale,
  resolveDestination: (destination: string) => MarkdownDestinationResolution,
  sourceContext: string,
): Root {
  const definitions = new Map<string, Definition>();
  const headingDepths: Heading["depth"][] = [];

  assertNoAuthoredFootnotes(parsedRoot, sourceContext, markdown);

  collectDefinitions(parsedRoot.children, definitions);
  collectHeadingDepths(parsedRoot.children, headingDepths);

  const authorizedImageDefinitionIdentifiers = new Set<string>();
  const normalizedDefinitions = new Map(
    [...definitions].map(([identifier, definition]): [string, Definition] => {
      const resolution = normalizeAuthoredMarkdownDestination(definition.url, {
        authorizedImageDefinitionIdentifiers,
        definitions,
        locale,
        resolveDestination,
        sourceContext,
      });

      if (resolution.isAuthorizedImage) {
        authorizedImageDefinitionIdentifiers.add(identifier);
      }

      return [
        identifier,
        {
          ...definition,
          url: resolution.destination,
        },
      ];
    }),
  );
  const context: MarkdownFragmentContext = {
    authorizedImageDefinitionIdentifiers,
    definitions: normalizedDefinitions,
    locale,
    resolveDestination,
    sourceContext,
  };

  const shallowestHeadingDepth = headingDepths.length === 0
    ? minimumHeadingDepth
    : Math.min(...headingDepths);
  const headingDepthOffset = Math.max(0, minimumHeadingDepth - shallowestHeadingDepth);

  return {
    ...parsedRoot,
    children: normalizeRootContent(
      parsedRoot.children,
      context,
      headingDepthOffset,
    ),
  };
}

function getPlainTextChildSeparator(node: Nodes): string {
  if (node.type === "root" || node.type === "blockquote") {
    return "\n\n";
  }

  if (node.type === "list" || node.type === "listItem" || node.type === "table") {
    return "\n";
  }

  if (node.type === "tableRow") {
    return " | ";
  }

  return "";
}

interface ProjectedPlainTextSegment {
  readonly preserveWhitespace: boolean;
  readonly value: string;
}

function projectMarkdownNodeToPlainTextSegments(
  node: Nodes,
): ReadonlyArray<ProjectedPlainTextSegment> {
  if (node.type === "inlineCode" || node.type === "code") {
    return [{ preserveWhitespace: true, value: node.value }];
  }

  if (node.type === "inlineMath" || node.type === "math") {
    return [{ preserveWhitespace: true, value: node.value }];
  }

  if (node.type === "text") {
    return [{ preserveWhitespace: false, value: node.value }];
  }

  if (node.type === "image") {
    return [{
      preserveWhitespace: false,
      value: getAuthoredImageLabel(node.alt, node.url),
    }];
  }

  if (node.type === "break") {
    return [{ preserveWhitespace: false, value: "\n" }];
  }

  if (node.type === "list" && node.ordered) {
    const start = node.start ?? 1;
    const separator = getPlainTextChildSeparator(node);
    const projectedItems = node.children.flatMap((listItem, index) => {
      const segments = projectMarkdownNodeToPlainTextSegments(listItem);

      return segments.some((segment) => segment.value !== "")
        ? [{ index, segments }]
        : [];
    });

    return projectedItems.flatMap(
      ({ index, segments }, emittedIndex): ReadonlyArray<ProjectedPlainTextSegment> => {
        return [
          ...(emittedIndex === 0
            ? []
            : [{ preserveWhitespace: false, value: separator }]),
          { preserveWhitespace: false, value: `${start + index}. ` },
          ...segments,
        ];
      },
    );
  }

  if ("children" in node) {
    const childSegments = node.children
      .map(projectMarkdownNodeToPlainTextSegments)
      .filter((segments) => segments.some((segment) => segment.value !== ""));
    const separator = getPlainTextChildSeparator(node);

    return childSegments.flatMap((segments, index) => [
      ...(index === 0 || separator === ""
        ? []
        : [{ preserveWhitespace: false, value: separator }]),
      ...segments,
    ]);
  }

  return [];
}

function normalizeProjectedProseWhitespace(value: string): string {
  return value
    .replace(/[^\S\r\n]+/gu, " ")
    .replace(/ *\r?\n */gu, "\n")
    .replace(/\n{3,}/gu, "\n\n");
}

function normalizeProjectedPlainTextSegments(
  segments: ReadonlyArray<ProjectedPlainTextSegment>,
): string {
  const normalizedSegments: ProjectedPlainTextSegment[] = [];

  segments.forEach((segment) => {
    const value = segment.preserveWhitespace
      ? segment.value
      : normalizeProjectedProseWhitespace(segment.value);

    if (value === "") {
      return;
    }

    const previousSegment = normalizedSegments[normalizedSegments.length - 1];

    if (
      segment.preserveWhitespace === false
      && previousSegment?.preserveWhitespace === false
    ) {
      normalizedSegments[normalizedSegments.length - 1] = {
        preserveWhitespace: false,
        value: normalizeProjectedProseWhitespace(previousSegment.value + value),
      };
      return;
    }

    normalizedSegments.push({
      preserveWhitespace: segment.preserveWhitespace,
      value,
    });
  });

  if (normalizedSegments.length === 0) {
    return "";
  }

  const firstSegment = normalizedSegments[0];

  if (firstSegment?.preserveWhitespace === false) {
    normalizedSegments[0] = {
      preserveWhitespace: false,
      value: firstSegment.value.trimStart(),
    };
  }

  const lastSegmentIndex = normalizedSegments.length - 1;
  const lastSegment = normalizedSegments[lastSegmentIndex];

  if (lastSegment?.preserveWhitespace === false) {
    normalizedSegments[lastSegmentIndex] = {
      preserveWhitespace: false,
      value: lastSegment.value.trimEnd(),
    };
  }

  return normalizedSegments.map((segment) => segment.value).join("");
}

export function normalizePublicCatalogDescriptionMarkdownFragment(
  markdown: string,
  locale: AppLocale,
  sourceContext: string,
): string {
  const processor = remark().use(gfm);
  const normalizedRoot = createNormalizedPublicCatalogMarkdownRoot(
    markdown,
    processor.parse(markdown) as Root,
    3,
    locale,
    (destination) => ({ destination, isAuthorizedImage: false }),
    sourceContext,
  );

  return processor.stringify(normalizedRoot).trim();
}

function createCardMediaDestinationResolver(
  mediaDownloadUrlByKey: ReadonlyMap<string, string>,
  locale: AppLocale,
  sourceContext: string,
): (destination: string) => MarkdownDestinationResolution {
  return (destination): MarkdownDestinationResolution => {
    if (destination.startsWith("fcasset:")) {
      const packageMediaKey = destination.slice("fcasset:".length);
      const downloadUrl = mediaDownloadUrlByKey.get(packageMediaKey);

      if (downloadUrl === undefined) {
        throw new Error(
          `${sourceContext} references unauthorized or missing media asset ${packageMediaKey}.`,
        );
      }

      return { destination: downloadUrl, isAuthorizedImage: true };
    }

    if (destination.startsWith("media/") === false) {
      if (destination.startsWith(siteOrigin) && URL.canParse(destination)) {
        const parsedDestination = new URL(destination);

        if (parsedDestination.origin === siteOrigin) {
          const localizedDestination = localizeRootRelativeDestination(
            `${parsedDestination.pathname}${parsedDestination.search}${parsedDestination.hash}`,
            locale,
          );

          return {
            destination: `${parsedDestination.origin}${localizedDestination}`,
            isAuthorizedImage: false,
          };
        }
      }

      return { destination, isAuthorizedImage: false };
    }

    const pathSegments = destination.split("/");
    const fileName = pathSegments[1];

    if (
      pathSegments.length !== 2
      || fileName === undefined
      || packageRelativeMediaFileNamePattern.test(fileName) === false
    ) {
      throw new Error(
        `${sourceContext} contains an unsafe or malformed package-relative media path. `
          + "The legacy form must be media/<filename>, where the filename starts with a letter or number "
          + `and contains only letters, numbers, dots, underscores, or hyphens. received=${destination}`,
      );
    }

    if (mediaDownloadUrlByKey.size === 0) {
      throw new Error(
        `${sourceContext} references unauthorized or missing package-relative media asset ${destination}.`,
      );
    }

    if (mediaDownloadUrlByKey.size !== 1) {
      throw new Error(
        `${sourceContext} cannot safely resolve package-relative media asset ${destination} `
          + `because the card authorizes ${mediaDownloadUrlByKey.size} media assets. `
          + "Use an fcasset:<package-media-key> destination to disambiguate the asset.",
      );
    }

    const downloadUrl = mediaDownloadUrlByKey.values().next().value;

    if (downloadUrl === undefined) {
      throw new Error(
        `${sourceContext} references package-relative media asset ${destination} without a download URL.`,
      );
    }

    return { destination: downloadUrl, isAuthorizedImage: true };
  };
}

function escapeStandaloneNumericCardText(markdown: string, parsedRoot: Root): string {
  const onlyRootChild = parsedRoot.children[0];
  const onlyListItem = onlyRootChild?.type === "list"
    ? onlyRootChild.children[0]
    : undefined;
  const markerStartOffset = onlyRootChild?.position?.start.offset;
  const marker = markerStartOffset === undefined
    ? undefined
    : /^\d{1,9}\./u.exec(markdown.slice(markerStartOffset))?.[0];

  if (
    parsedRoot.children.length !== 1
    || onlyRootChild?.type !== "list"
    || onlyRootChild.ordered !== true
    || onlyRootChild.children.length !== 1
    || onlyListItem?.children.length !== 0
    || markerStartOffset === undefined
    || marker === undefined
  ) {
    return markdown;
  }

  const periodOffset = markerStartOffset + marker.length - 1;

  return `${markdown.slice(0, periodOffset)}\\${markdown.slice(periodOffset)}`;
}

/**
 * Escapes the dollar signs the card math contract leaves literal, then parses
 * the escaped source so `remark-math` segments the card the way the contract
 * does before the math transform confirms each node.
 */
function parsePublicCatalogCardMathRoot(
  markdown: string,
  sourceContext: string,
): { readonly markdown: string; readonly root: Root } {
  const processor = remark().use(gfm).use(math);
  const parsedRoot = processor.parse(markdown) as Root;
  const parseableMarkdown = escapeStandaloneNumericCardText(markdown, parsedRoot);
  const mathNormalizedMarkdown = escapeRejectedPublicCatalogCardMath(
    parseableMarkdown === markdown
      ? parsedRoot
      : processor.parse(parseableMarkdown) as Root,
    parseableMarkdown,
    sourceContext,
  );

  return {
    markdown: mathNormalizedMarkdown,
    root: transformPublicCatalogCardMathBlocks(
      processor.parse(mathNormalizedMarkdown) as Root,
      mathNormalizedMarkdown,
      sourceContext,
    ),
  };
}

export function normalizePublicCatalogCardMarkdownFragment(
  markdown: string,
  locale: AppLocale,
  mediaDownloadUrlByKey: ReadonlyMap<string, string>,
  sourceContext: string,
): string {
  const processor = remark().use(gfm).use(math);
  const parsedCard = parsePublicCatalogCardMathRoot(markdown, sourceContext);
  const normalizedRoot = createNormalizedPublicCatalogMarkdownRoot(
    parsedCard.markdown,
    parsedCard.root,
    4,
    locale,
    createCardMediaDestinationResolver(
      mediaDownloadUrlByKey,
      locale,
      sourceContext,
    ),
    sourceContext,
  );

  return processor.stringify(normalizedRoot).trim();
}

export function projectPublicCatalogCardMarkdownToPlainText(
  markdown: string,
  locale: AppLocale,
  mediaDownloadUrlByKey: ReadonlyMap<string, string>,
  sourceContext: string,
): string {
  const parsedCard = parsePublicCatalogCardMathRoot(markdown, sourceContext);
  const normalizedRoot = createNormalizedPublicCatalogMarkdownRoot(
    parsedCard.markdown,
    parsedCard.root,
    4,
    locale,
    createCardMediaDestinationResolver(
      mediaDownloadUrlByKey,
      locale,
      sourceContext,
    ),
    sourceContext,
  );
  const plainText = normalizeProjectedPlainTextSegments(
    projectMarkdownNodeToPlainTextSegments(normalizedRoot),
  );

  if (plainText.trim() === "") {
    throw new Error(`${sourceContext} must contain non-empty Markdown text.`);
  }

  return plainText;
}
