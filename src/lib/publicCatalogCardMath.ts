import katex from "katex";
import type { KatexOptions, TrustContext } from "katex";
import type { Nodes, Paragraph, Parents, Root, RootContent } from "mdast";
import { EXIT, SKIP, visit } from "unist-util-visit";

const displayMathOpenPattern = /^[ \t]*\$\$[ \t]*(?:\r\n|\r|\n)/u;
const displayMathClosePattern = /(?:\r\n|\r|\n)[ \t]*\$\$[ \t]*$/u;
const rejectedTrustedKatexCommandColor =
  "public-catalog-rejected-trust-command";

interface KatexWithParser {
  readonly __parse: (
    formulaSource: string,
    options: KatexOptions,
  ) => ReadonlyArray<unknown>;
}

interface PublicCatalogMathSource {
  readonly delimitedSource: string;
  readonly endIndex: number;
  readonly formulaSource: string;
  readonly startIndex: number;
}

const publicCatalogKatex = katex as typeof katex & KatexWithParser;

function createRejectedTrustedKatexCommandError(command: string): Error {
  return new Error(
    `KaTeX command ${command} requires trusted output, which public catalog formulas do not allow. `
      + "Remove the command or replace it with LaTeX that does not require HTML or URL access.",
  );
}

function rejectTrustedKatexCommand(context: TrustContext): never {
  throw createRejectedTrustedKatexCommandError(context.command);
}

export const publicCatalogKatexOptions = {
  errorColor: rejectedTrustedKatexCommandColor,
  trust: rejectTrustedKatexCommand,
} satisfies Readonly<KatexOptions>;

function isRecord(value: unknown): value is Readonly<Record<string, unknown>> {
  return typeof value === "object" && value !== null;
}

function readKatexText(value: unknown): string | null {
  if (Array.isArray(value)) {
    const textParts = value.map(readKatexText);

    if (textParts.some((textPart) => textPart === null)) {
      return null;
    }

    return textParts.join("");
  }

  if (isRecord(value) === false) {
    return null;
  }

  if (value.type === "textord" && typeof value.text === "string") {
    return value.text;
  }

  if (value.type === "text") {
    return readKatexText(value.body);
  }

  return null;
}

function findRejectedTrustedKatexCommand(
  value: unknown,
  visited: WeakSet<object>,
): string | null {
  if (typeof value !== "object" || value === null) {
    return null;
  }

  if (visited.has(value)) {
    return null;
  }

  visited.add(value);

  if (Array.isArray(value)) {
    for (const item of value) {
      const command = findRejectedTrustedKatexCommand(item, visited);

      if (command !== null) {
        return command;
      }
    }

    return null;
  }

  if (isRecord(value) === false) {
    return null;
  }

  if (
    value.type === "color"
    && value.color === rejectedTrustedKatexCommandColor
  ) {
    const command = readKatexText(value.body);

    if (command === null || command.startsWith("\\") === false) {
      throw new Error(
        "KaTeX returned a rejected trust-command node without recognizable command text.",
      );
    }

    return command;
  }

  for (const [key, child] of Object.entries(value)) {
    if (key === "loc") {
      continue;
    }

    const command = findRejectedTrustedKatexCommand(child, visited);

    if (command !== null) {
      return command;
    }
  }

  return null;
}

function assertKatexParseTreeDoesNotRequireTrust(
  formulaSource: string,
  options: KatexOptions,
): void {
  const parseTree = publicCatalogKatex.__parse(formulaSource, options);
  const rejectedCommand = findRejectedTrustedKatexCommand(
    parseTree,
    new WeakSet(),
  );

  if (rejectedCommand !== null) {
    throw createRejectedTrustedKatexCommandError(rejectedCommand);
  }
}

function requireNodeSource(
  markdown: string,
  node: Nodes,
  sourceContext: string,
): PublicCatalogMathSource {
  const startIndex = node.position?.start.offset;
  const endIndex = node.position?.end.offset;

  if (startIndex === undefined || endIndex === undefined) {
    throw new Error(
      `${sourceContext} math parser returned a ${node.type} node without source offsets.`,
    );
  }

  return {
    delimitedSource: markdown.slice(startIndex, endIndex),
    endIndex,
    formulaSource: node.type === "math" || node.type === "inlineMath"
      ? node.value
      : "",
    startIndex,
  };
}

function readInlineMathSource(
  markdown: string,
  node: Nodes,
  sourceContext: string,
): PublicCatalogMathSource | null {
  const source = requireNodeSource(markdown, node, sourceContext);
  const { delimitedSource } = source;

  if (
    delimitedSource.length < 2
    || delimitedSource.startsWith("$$")
    || delimitedSource.endsWith("$$")
    || /[\r\n]/u.test(delimitedSource)
  ) {
    return null;
  }

  let precedingBackslashCount = 0;

  for (
    let index = delimitedSource.length - 2;
    index >= 0 && delimitedSource[index] === "\\";
    index -= 1
  ) {
    precedingBackslashCount += 1;
  }

  if (precedingBackslashCount % 2 !== 0) {
    return null;
  }

  return {
    ...source,
    formulaSource: delimitedSource.slice(1, -1),
  };
}

function readDisplayMathSource(
  markdown: string,
  node: Nodes,
  sourceContext: string,
): PublicCatalogMathSource | null {
  const source = requireNodeSource(markdown, node, sourceContext);
  const openMatch = displayMathOpenPattern.exec(source.delimitedSource);
  const closeMatch = displayMathClosePattern.exec(source.delimitedSource);

  if (
    openMatch === null
    || closeMatch === null
    || openMatch[0].length > closeMatch.index
  ) {
    return null;
  }

  return {
    ...source,
    formulaSource: source.delimitedSource.slice(
      openMatch[0].length,
      closeMatch.index,
    ),
  };
}

function sourceKey(source: PublicCatalogMathSource): string {
  return `${source.startIndex}:${source.endIndex}`;
}

function nodeSourceKey(node: Nodes, sourceContext: string): string {
  const startIndex = node.position?.start.offset;
  const endIndex = node.position?.end.offset;

  if (startIndex === undefined || endIndex === undefined) {
    throw new Error(
      `${sourceContext} math parser returned a ${node.type} node without source offsets.`,
    );
  }

  return `${startIndex}:${endIndex}`;
}

function containsReferenceDefinition(tree: Root): boolean {
  let containsDefinition = false;

  visit(tree, "definition", () => {
    containsDefinition = true;
    return EXIT;
  });

  return containsDefinition;
}

function collectAcceptedMathSources(
  tree: Root,
  markdown: string,
  sourceContext: string,
): ReadonlyArray<PublicCatalogMathSource> {
  if (containsReferenceDefinition(tree)) {
    return [];
  }

  const sources: PublicCatalogMathSource[] = [];

  for (const child of tree.children) {
    if (child.type === "math") {
      const source = readDisplayMathSource(markdown, child, sourceContext);

      if (source !== null) {
        sources.push(source);
      }

      continue;
    }

    if (
      child.type !== "paragraph"
      || child.children.every((paragraphChild) => (
        paragraphChild.type === "text" || paragraphChild.type === "inlineMath"
      )) === false
    ) {
      continue;
    }

    for (const paragraphChild of child.children) {
      if (paragraphChild.type !== "inlineMath") {
        continue;
      }

      const source = readInlineMathSource(
        markdown,
        paragraphChild,
        sourceContext,
      );

      if (source !== null) {
        sources.push(source);
      }
    }
  }

  return sources;
}

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function assertValidAcceptedMathSources(
  sources: ReadonlyArray<PublicCatalogMathSource>,
  sourceContext: string,
): void {
  sources.forEach((source) => {
    try {
      const katexOptions = {
        ...publicCatalogKatexOptions,
        displayMode: true,
        throwOnError: true,
      } satisfies Readonly<KatexOptions>;

      assertKatexParseTreeDoesNotRequireTrust(
        source.formulaSource,
        katexOptions,
      );
      katex.renderToString(source.formulaSource, katexOptions);
    } catch (error) {
      throw new Error(
        `${sourceContext} contains invalid supported LaTeX formula `
          + `${JSON.stringify(source.delimitedSource)}. `
          + `KaTeX error: ${getErrorMessage(error)}`,
        { cause: error },
      );
    }
  });
}

function replaceParentChild(
  parent: Parents | undefined,
  index: number | undefined,
  replacement: Nodes,
  sourceContext: string,
): void {
  if (parent === undefined || index === undefined) {
    throw new Error(
      `${sourceContext} math guard could not replace a node without its parent and index.`,
    );
  }

  const children = parent.children as Nodes[];
  children[index] = replacement;
}

function createContainerMathLiteral(
  node: Extract<Nodes, { type: "math" }>,
): string {
  const openingDelimiter = node.meta === null || node.meta === undefined
    ? "$$"
    : `$$${node.meta}`;

  return `${openingDelimiter}\n${node.value}\n$$`;
}

function markAcceptedMath(
  node: Extract<Nodes, { type: "math" }>,
  source: PublicCatalogMathSource,
): void {
  node.value = source.formulaSource;
  node.meta = null;
  node.data = {
    hName: "pre",
    hChildren: [{
      type: "element",
      tagName: "code",
      properties: {
        className: ["language-math", "math-display"],
      },
      children: [{ type: "text", value: source.formulaSource }],
    }],
  };
}

function createAcceptedInlineMathBlock(
  node: Extract<Nodes, { type: "inlineMath" }>,
  source: PublicCatalogMathSource,
): Extract<RootContent, { type: "math" }> {
  const mathNode: Extract<RootContent, { type: "math" }> = {
    type: "math",
    value: source.formulaSource,
    meta: null,
    position: node.position,
  };

  markAcceptedMath(mathNode, source);
  return mathNode;
}

function splitAcceptedMathParagraph(
  paragraph: Paragraph,
  acceptedSourcesByKey: ReadonlyMap<string, PublicCatalogMathSource>,
  sourceContext: string,
): ReadonlyArray<RootContent> {
  const blocks: RootContent[] = [];
  let textChildren: Paragraph["children"] = [];

  function flushTextChildren(): void {
    if (textChildren.length === 0) {
      return;
    }

    blocks.push({
      type: "paragraph",
      children: textChildren,
    });
    textChildren = [];
  }

  for (const child of paragraph.children) {
    if (child.type === "inlineMath") {
      const source = acceptedSourcesByKey.get(
        nodeSourceKey(child, sourceContext),
      );

      if (source === undefined) {
        throw new Error(
          `${sourceContext} math guard lost an accepted inline formula during paragraph splitting.`,
        );
      }

      flushTextChildren();
      blocks.push(createAcceptedInlineMathBlock(child, source));
      continue;
    }

    textChildren.push(child);
  }

  flushTextChildren();
  return blocks;
}

export function transformPublicCatalogCardMathBlocks(
  tree: Root,
  markdown: string,
  sourceContext: string,
): Root {
  const transformedTree = structuredClone(tree);
  const acceptedSources = collectAcceptedMathSources(
    transformedTree,
    markdown,
    sourceContext,
  );
  const acceptedSourcesByKey = new Map(
    acceptedSources.map((source) => [sourceKey(source), source]),
  );

  assertValidAcceptedMathSources(acceptedSources, sourceContext);

  visit(transformedTree, "inlineMath", (node, index, parent) => {
    const source = requireNodeSource(markdown, node, sourceContext);

    if (acceptedSourcesByKey.has(sourceKey(source))) {
      return;
    }

    replaceParentChild(parent, index, {
      type: "text",
      value: source.delimitedSource,
      position: node.position,
    }, sourceContext);
    return SKIP;
  });

  visit(transformedTree, "math", (node, index, parent) => {
    const source = requireNodeSource(markdown, node, sourceContext);
    const acceptedSource = acceptedSourcesByKey.get(sourceKey(source));

    if (acceptedSource !== undefined) {
      markAcceptedMath(node, acceptedSource);
      return;
    }

    replaceParentChild(parent, index, {
      type: "paragraph",
      children: [{
        type: "text",
        value: parent?.type === "root"
          ? source.delimitedSource
          : createContainerMathLiteral(node),
        position: node.position,
      }],
      position: node.position,
    }, sourceContext);
    return SKIP;
  });

  transformedTree.children = transformedTree.children.flatMap((child) => {
    if (
      child.type !== "paragraph"
      || child.children.some((paragraphChild) => (
        paragraphChild.type === "inlineMath"
      )) === false
    ) {
      return [child];
    }

    return splitAcceptedMathParagraph(
      child,
      acceptedSourcesByKey,
      sourceContext,
    );
  });

  return transformedTree;
}
