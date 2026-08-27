import katex from "katex";
import type { KatexOptions, TrustContext } from "katex";
import type { Nodes, Parents, Root, RootContent } from "mdast";
import { EXIT, SKIP, visit } from "unist-util-visit";

const digitPattern = /^[0-9]$/u;
/** A backslash escaping one ASCII punctuation character, as CommonMark reads it. */
const markdownEscapePattern = /\\([!"#$%&'()*+,./:;<=>?@[\\\]^_`{|}~-])/gu;
const openingRunIndentPattern = /^ {0,3}$/u;
const singleLineBreakPattern = /^(?:\r\n|\r|\n)$/u;
const spaceOnlyPattern = /^[ \t]*$/u;
const rejectedTrustedKatexCommandColor =
  "public-catalog-rejected-trust-command";

interface KatexWithParser {
  readonly __parse: (
    formulaSource: string,
    options: KatexOptions,
  ) => ReadonlyArray<unknown>;
}

type PublicCatalogMathMode = "display" | "inline";

interface PublicCatalogNodeSource {
  readonly delimitedSource: string;
  readonly endIndex: number;
  readonly startIndex: number;
}

interface PublicCatalogMathSource extends PublicCatalogNodeSource {
  readonly formulaSource: string;
  readonly mathMode: PublicCatalogMathMode;
}

/** One source line of the card side, without its line ending. */
interface MarkdownLine {
  readonly endIndex: number;
  readonly startIndex: number;
  readonly value: string;
}

/** A maximal run of unescaped dollar signs on one source line. */
interface DollarRun {
  readonly length: number;
  readonly startColumn: number;
}

/** A half-open source range the math scan must not read. */
interface SourceRange {
  readonly endIndex: number;
  readonly startIndex: number;
}

/** A formula recognized directly in the Markdown source. */
interface SourceMathConstruct {
  readonly endIndex: number;
  readonly formulaSource: string;
  readonly startIndex: number;
}

/**
 * The formulas the source rules accept inside one top-level paragraph, plus
 * the code spans that scan stepped over.
 */
interface ParagraphMathScan {
  readonly codeSpanRanges: ReadonlyArray<SourceRange>;
  readonly constructs: ReadonlyArray<SourceMathConstruct>;
  readonly firstLineIndex: number;
  readonly lastLineIndex: number;
  readonly mathMode: PublicCatalogMathMode;
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

function splitMarkdownLines(markdown: string): ReadonlyArray<MarkdownLine> {
  const lines: MarkdownLine[] = [];
  const lineEndingPattern = /\r\n|\r|\n/gu;
  let lineStartIndex = 0;

  for (
    let lineEnding = lineEndingPattern.exec(markdown);
    lineEnding !== null;
    lineEnding = lineEndingPattern.exec(markdown)
  ) {
    lines.push({
      endIndex: lineEnding.index,
      startIndex: lineStartIndex,
      value: markdown.slice(lineStartIndex, lineEnding.index),
    });
    lineStartIndex = lineEnding.index + lineEnding[0].length;
  }

  lines.push({
    endIndex: markdown.length,
    startIndex: lineStartIndex,
    value: markdown.slice(lineStartIndex),
  });

  return lines;
}

function findLineIndex(
  lines: ReadonlyArray<MarkdownLine>,
  offset: number,
  sourceContext: string,
): number {
  const lineIndex = lines.findIndex((line) => (
    offset >= line.startIndex && offset <= line.endIndex
  ));

  if (lineIndex === -1) {
    throw new Error(
      `${sourceContext} math guard could not locate the source line at offset ${offset}.`,
    );
  }

  return lineIndex;
}

/** A blank line holds only spaces and tabs, as CommonMark defines it. */
function isBlankMarkdownLine(line: MarkdownLine): boolean {
  return spaceOnlyPattern.test(line.value);
}

/**
 * The delimiter guards treat only the ASCII space, the ASCII tab, and the end
 * of the line as space. Every other character, the non-breaking space
 * included, is a non-space character.
 */
function isSpaceCharacter(character: string | undefined): boolean {
  return character === undefined || character === " " || character === "\t";
}

function isDigitCharacter(character: string | undefined): boolean {
  return character !== undefined && digitPattern.test(character);
}

function readDollarRuns(lineValue: string): ReadonlyArray<DollarRun> {
  const runs: DollarRun[] = [];
  let column = 0;

  while (column < lineValue.length) {
    if (lineValue[column] === "\\") {
      column += 2;
      continue;
    }

    if (lineValue[column] !== "$") {
      column += 1;
      continue;
    }

    let runLength = 1;

    while (lineValue[column + runLength] === "$") {
      runLength += 1;
    }

    runs.push({ length: runLength, startColumn: column });
    column += runLength;
  }

  return runs;
}

function readBacktickRunLength(region: string, runStartOffset: number): number {
  let runLength = 1;

  while (region[runStartOffset + runLength] === "`") {
    runLength += 1;
  }

  return runLength;
}

/**
 * Joins the scanned lines back into one contiguous region, because CommonMark
 * resolves a code span inside one block and a span may cross a line break of
 * the paragraph. Each line ending contributes as many characters as it holds,
 * so `lines[firstLineIndex].startIndex + offset` stays the source index.
 */
function readParagraphRegion(
  lines: ReadonlyArray<MarkdownLine>,
  firstLineIndex: number,
  lastLineIndex: number,
): string {
  let region = lines[firstLineIndex].value;

  for (
    let lineIndex = firstLineIndex + 1;
    lineIndex <= lastLineIndex;
    lineIndex += 1
  ) {
    const line = lines[lineIndex];

    region += "\n".repeat(line.startIndex - lines[lineIndex - 1].endIndex);
    region += line.value;
  }

  return region;
}

/**
 * Finds the run that closes a code span opened by a run of `openingRunLength`
 * backticks. Backslash escapes do not work in code spans, so this scan applies
 * no escape handling at all: a backtick run directly after a backslash still
 * closes the span, which is how CommonMark reads `` `foo\` ``.
 */
function findClosingBacktickRunOffset(
  region: string,
  searchStartOffset: number,
  openingRunLength: number,
): number | null {
  let offset = searchStartOffset;

  while (offset < region.length) {
    if (region[offset] !== "`") {
      offset += 1;
      continue;
    }

    const runLength = readBacktickRunLength(region, offset);

    if (runLength === openingRunLength) {
      return offset;
    }

    offset += runLength;
  }

  return null;
}

/**
 * Reads the source ranges the inline code spans of one paragraph cover. Code
 * spans take precedence over math and are never scanned for math delimiters,
 * so a dollar inside one of these ranges neither opens nor closes a formula
 * and is never escaped. A run of backticks opens a span that closes on the
 * next run holding exactly as many backticks, and a run with no such closer is
 * literal text that covers nothing.
 *
 * The scan carries the open and closed state through a single pass, because
 * escape handling differs on the two sides of a span boundary: outside a span
 * `` \` `` is an escaped backtick that opens nothing, while inside one the
 * backslash is literal content that must never hide the closing run.
 */
function readParagraphCodeSpanRanges(
  lines: ReadonlyArray<MarkdownLine>,
  firstLineIndex: number,
  lastLineIndex: number,
): ReadonlyArray<SourceRange> {
  const region = readParagraphRegion(lines, firstLineIndex, lastLineIndex);
  const regionStartIndex = lines[firstLineIndex].startIndex;
  const ranges: SourceRange[] = [];
  let offset = 0;

  while (offset < region.length) {
    if (region[offset] === "\\") {
      offset += 2;
      continue;
    }

    if (region[offset] !== "`") {
      offset += 1;
      continue;
    }

    const openingRunLength = readBacktickRunLength(region, offset);
    const closingRunOffset = findClosingBacktickRunOffset(
      region,
      offset + openingRunLength,
      openingRunLength,
    );

    if (closingRunOffset === null) {
      // The run opens no span, so it is literal text and the scan resumes
      // right after it with escape handling active again.
      offset += openingRunLength;
      continue;
    }

    ranges.push({
      endIndex: regionStartIndex + closingRunOffset + openingRunLength,
      startIndex: regionStartIndex + offset,
    });
    offset = closingRunOffset + openingRunLength;
  }

  return ranges;
}

function isInsideCodeSpan(
  index: number,
  codeSpanRanges: ReadonlyArray<SourceRange>,
): boolean {
  return codeSpanRanges.some((range) => (
    index >= range.startIndex && index < range.endIndex
  ));
}

/**
 * Scans one source line for inline formulas using the pandoc
 * `tex_math_dollars` delimiter guards. Only a run of exactly one dollar can
 * delimit inline math, inline math never spans lines, and a dollar a code span
 * covers is not part of the scan at all.
 */
function scanInlineMathSpans(
  line: MarkdownLine,
  codeSpanRanges: ReadonlyArray<SourceRange>,
): ReadonlyArray<SourceMathConstruct> {
  const runs = readDollarRuns(line.value).filter((run) => (
    isInsideCodeSpan(line.startIndex + run.startColumn, codeSpanRanges) === false
  ));
  const spans: SourceMathConstruct[] = [];
  let runIndex = 0;

  while (runIndex < runs.length) {
    const openingRun = runs[runIndex];

    if (
      openingRun.length !== 1
      || isSpaceCharacter(line.value[openingRun.startColumn + 1])
    ) {
      runIndex += 1;
      continue;
    }

    if (runIndex + 1 >= runs.length) {
      // The line holds no later dollar, so nothing on it is left to scan.
      break;
    }

    const closingRun = runs[runIndex + 1];

    if (closingRun.length !== 1) {
      // The attempt fails at the display fence sequence, and the scan
      // continues after that whole run.
      runIndex += 2;
      continue;
    }

    if (
      isSpaceCharacter(line.value[closingRun.startColumn - 1])
      || isDigitCharacter(line.value[closingRun.startColumn + 1])
    ) {
      // The dollar that failed as a closer is the next candidate opener.
      runIndex += 1;
      continue;
    }

    spans.push({
      endIndex: line.startIndex + closingRun.startColumn + 1,
      formulaSource: line.value.slice(
        openingRun.startColumn + 1,
        closingRun.startColumn,
      ),
      startIndex: line.startIndex + openingRun.startColumn,
    });
    runIndex += 2;
  }

  return spans;
}

/**
 * Reads the display formula that opens on `lineIndex`, following the
 * source-level rules of `docs/review-markdown-rendering.md`. The opening run
 * must begin its own block, and the closing run must hold exactly as many
 * dollars as the opening run.
 */
function readDisplayMathConstruct(
  lines: ReadonlyArray<MarkdownLine>,
  lineIndex: number,
): SourceMathConstruct | null {
  const openingLine = lines[lineIndex];
  const openingLineRuns = readDollarRuns(openingLine.value);

  if (openingLineRuns.length === 0) {
    return null;
  }

  const openingRun = openingLineRuns[0];

  if (
    openingRun.length < 2
    || openingRunIndentPattern.test(
      openingLine.value.slice(0, openingRun.startColumn),
    ) === false
    || (lineIndex > 0 && isBlankMarkdownLine(lines[lineIndex - 1]) === false)
  ) {
    return null;
  }

  const startIndex = openingLine.startIndex + openingRun.startColumn;
  const bodyStartColumn = openingRun.startColumn + openingRun.length;

  if (openingLineRuns.length > 1) {
    const closingRun = openingLineRuns[1];

    if (
      closingRun.length !== openingRun.length
      || spaceOnlyPattern.test(
        openingLine.value.slice(closingRun.startColumn + closingRun.length),
      ) === false
      || (
        lineIndex + 1 < lines.length
        && isBlankMarkdownLine(lines[lineIndex + 1]) === false
      )
    ) {
      return null;
    }

    return {
      endIndex: openingLine.startIndex + closingRun.startColumn + closingRun.length,
      formulaSource: openingLine.value.slice(
        bodyStartColumn,
        closingRun.startColumn,
      ),
      startIndex,
    };
  }

  if (spaceOnlyPattern.test(openingLine.value.slice(bodyStartColumn)) === false) {
    return null;
  }

  for (
    let closingLineIndex = lineIndex + 1;
    closingLineIndex < lines.length;
    closingLineIndex += 1
  ) {
    const closingLine = lines[closingLineIndex];
    const closingLineRuns = readDollarRuns(closingLine.value);

    if (closingLineRuns.length !== 1) {
      continue;
    }

    const closingRun = closingLineRuns[0];

    if (
      openingRunIndentPattern.test(
        closingLine.value.slice(0, closingRun.startColumn),
      ) === false
      || spaceOnlyPattern.test(
        closingLine.value.slice(closingRun.startColumn + closingRun.length),
      ) === false
    ) {
      continue;
    }

    if (closingRun.length !== openingRun.length) {
      return null;
    }

    return {
      endIndex: closingLine.startIndex + closingRun.startColumn + closingRun.length,
      formulaSource: lines
        .slice(lineIndex + 1, closingLineIndex)
        .map((bodyLine) => bodyLine.value)
        .join("\n"),
      startIndex,
    };
  }

  return null;
}

function requireNodeSource(
  markdown: string,
  node: Nodes,
  sourceContext: string,
): PublicCatalogNodeSource {
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
    startIndex,
  };
}

/**
 * Accepts a display formula for a flow math node whose opening run begins a
 * display construct in the source. `remark-math` emits a flow math node only
 * for the multiple-line shape; the single-line shape arrives as an inline math
 * node and `scanParagraphMath` promotes it to display.
 */
function readDisplayMathSource(
  markdown: string,
  lines: ReadonlyArray<MarkdownLine>,
  node: Nodes,
  sourceContext: string,
): PublicCatalogMathSource | null {
  const source = requireNodeSource(markdown, node, sourceContext);
  const lineIndex = findLineIndex(lines, source.startIndex, sourceContext);
  const construct = readDisplayMathConstruct(lines, lineIndex);

  if (construct === null || construct.startIndex !== source.startIndex) {
    return null;
  }

  return {
    ...source,
    formulaSource: construct.formulaSource,
    mathMode: "display",
  };
}

function sourceKey(source: PublicCatalogNodeSource): string {
  return `${source.startIndex}:${source.endIndex}`;
}

function containsReferenceDefinition(tree: Root): boolean {
  let containsDefinition = false;

  visit(tree, "definition", () => {
    containsDefinition = true;
    return EXIT;
  });

  return containsDefinition;
}

/**
 * Reads every formula the source rules accept inside one top-level paragraph.
 * The escape pass and the accept pass segment a paragraph with this one scan,
 * so they can never disagree about the same card side.
 */
function scanParagraphMath(
  lines: ReadonlyArray<MarkdownLine>,
  paragraph: PublicCatalogNodeSource,
  sourceContext: string,
): ParagraphMathScan {
  const firstLineIndex = findLineIndex(
    lines,
    paragraph.startIndex,
    sourceContext,
  );
  const lastLineIndex = findLineIndex(lines, paragraph.endIndex, sourceContext);
  const displayConstruct = readDisplayMathConstruct(lines, firstLineIndex);

  if (
    displayConstruct !== null
    && displayConstruct.startIndex === paragraph.startIndex
    && displayConstruct.endIndex === paragraph.endIndex
  ) {
    // A display body is LaTeX source rather than Markdown, so it holds no
    // code spans and every dollar in the paragraph belongs to the construct.
    return {
      codeSpanRanges: [],
      constructs: [displayConstruct],
      firstLineIndex,
      lastLineIndex,
      mathMode: "display",
    };
  }

  const codeSpanRanges = readParagraphCodeSpanRanges(
    lines,
    firstLineIndex,
    lastLineIndex,
  );
  const constructs: SourceMathConstruct[] = [];

  for (
    let lineIndex = firstLineIndex;
    lineIndex <= lastLineIndex;
    lineIndex += 1
  ) {
    constructs.push(...scanInlineMathSpans(lines[lineIndex], codeSpanRanges));
  }

  return {
    codeSpanRanges,
    constructs,
    firstLineIndex,
    lastLineIndex,
    mathMode: "inline",
  };
}

/**
 * Math is eligible only in a top-level paragraph whose children are ordinary
 * text or formula spans. `remark-math` segments a paragraph more loosely than
 * the source rules do, so a child the scan places inside an accepted formula
 * is part of that formula source and does not make the paragraph ineligible:
 * `Cost $ 5$x **b** y$ done` arrives with a `strong` child that the accepted
 * span `$x **b** y$` covers. An inline code span is neither, so a paragraph
 * that holds one outside every formula keeps its dollars literal.
 */
function isMathEligibleParagraph(
  node: Extract<RootContent, { type: "paragraph" }>,
  constructs: ReadonlyArray<SourceMathConstruct>,
): boolean {
  return node.children.every((paragraphChild) => {
    if (
      paragraphChild.type === "text" || paragraphChild.type === "inlineMath"
    ) {
      return true;
    }

    const startIndex = paragraphChild.position?.start.offset;
    const endIndex = paragraphChild.position?.end.offset;

    if (startIndex === undefined || endIndex === undefined) {
      return false;
    }

    return constructs.some((construct) => (
      startIndex >= construct.startIndex && endIndex <= construct.endIndex
    ));
  });
}

function collectAcceptedMathSources(
  tree: Root,
  markdown: string,
  lines: ReadonlyArray<MarkdownLine>,
  sourceContext: string,
): ReadonlyArray<PublicCatalogMathSource> {
  if (containsReferenceDefinition(tree)) {
    return [];
  }

  const sources: PublicCatalogMathSource[] = [];

  for (const child of tree.children) {
    if (child.type === "math") {
      const source = readDisplayMathSource(
        markdown,
        lines,
        child,
        sourceContext,
      );

      if (source !== null) {
        sources.push(source);
      }

      continue;
    }

    if (child.type !== "paragraph") {
      continue;
    }

    const paragraph = requireNodeSource(markdown, child, sourceContext);
    const scan = scanParagraphMath(lines, paragraph, sourceContext);

    if (isMathEligibleParagraph(child, scan.constructs) === false) {
      continue;
    }

    for (const paragraphChild of child.children) {
      if (paragraphChild.type !== "inlineMath") {
        continue;
      }

      // Upstream node boundaries are never authoritative, so a node is
      // accepted only when the scan recognizes exactly the same span.
      const source = requireNodeSource(markdown, paragraphChild, sourceContext);
      const construct = scan.constructs.find((candidate) => (
        candidate.startIndex === source.startIndex
        && candidate.endIndex === source.endIndex
      ));

      if (construct === undefined) {
        continue;
      }

      sources.push({
        ...source,
        formulaSource: construct.formulaSource,
        mathMode: scan.mathMode,
      });
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
        displayMode: source.mathMode === "display",
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

/**
 * `normalizePublicCatalogCardMarkdownFragment` stringifies the transformed
 * tree back to Markdown, and the `mdast-util-math` serializers read only
 * `value` and `meta`, so an accepted formula carries nothing else. The
 * `language-math math-display` and `language-math math-inline` classes that
 * `rehype-katex` renders are created by the re-parse in
 * `publicCatalogMarkdownHtml.ts`.
 */
function markAcceptedDisplayMath(
  node: Extract<Nodes, { type: "math" }>,
  source: PublicCatalogMathSource,
): void {
  node.value = source.formulaSource;
  node.meta = null;
}

function markAcceptedInlineMath(
  node: Extract<Nodes, { type: "inlineMath" }>,
  source: PublicCatalogMathSource,
): void {
  node.value = source.formulaSource;
}

function createPromotedDisplayMath(
  node: Extract<Nodes, { type: "inlineMath" }>,
  source: PublicCatalogMathSource,
): Extract<RootContent, { type: "math" }> {
  return {
    type: "math",
    value: source.formulaSource,
    meta: null,
    position: node.position,
  };
}

/**
 * A rejected display construct that directly follows a text line belongs to
 * that paragraph, so its literal source is appended there instead of becoming
 * a second paragraph.
 */
function mergeLiteralDisplayMathIntoParagraph(
  transformedChildren: ReadonlyArray<RootContent>,
  markdown: string,
  node: Extract<Nodes, { type: "math" }>,
  source: PublicCatalogNodeSource,
): boolean {
  const previousChild = transformedChildren[transformedChildren.length - 1];
  const nodePosition = node.position;

  if (
    previousChild === undefined
    || previousChild.type !== "paragraph"
    || previousChild.position === undefined
    || nodePosition === undefined
  ) {
    return false;
  }

  const paragraphPosition = previousChild.position;
  const paragraphEndIndex = paragraphPosition.end.offset;

  if (
    paragraphEndIndex === undefined
    || singleLineBreakPattern.test(
      markdown.slice(paragraphEndIndex, source.startIndex),
    ) === false
  ) {
    return false;
  }

  previousChild.children.push({
    type: "text",
    value: markdown.slice(paragraphEndIndex, source.endIndex),
    position: { start: paragraphPosition.end, end: nodePosition.end },
  });
  previousChild.position = {
    start: paragraphPosition.start,
    end: nodePosition.end,
  };
  return true;
}

function transformRootChildren(
  children: ReadonlyArray<RootContent>,
  markdown: string,
  acceptedSourcesByKey: ReadonlyMap<string, PublicCatalogMathSource>,
  sourceContext: string,
): RootContent[] {
  const transformedChildren: RootContent[] = [];

  for (const child of children) {
    if (child.type === "math") {
      const source = requireNodeSource(markdown, child, sourceContext);
      const acceptedSource = acceptedSourcesByKey.get(sourceKey(source));

      if (acceptedSource !== undefined) {
        markAcceptedDisplayMath(child, acceptedSource);
        transformedChildren.push(child);
        continue;
      }

      if (
        mergeLiteralDisplayMathIntoParagraph(
          transformedChildren,
          markdown,
          child,
          source,
        )
      ) {
        continue;
      }

      transformedChildren.push({
        type: "paragraph",
        children: [{
          type: "text",
          value: source.delimitedSource,
          position: child.position,
        }],
        position: child.position,
      });
      continue;
    }

    if (child.type === "paragraph" && child.children.length === 1) {
      const onlyChild = child.children[0];

      if (onlyChild.type === "inlineMath") {
        const source = requireNodeSource(markdown, onlyChild, sourceContext);
        const acceptedSource = acceptedSourcesByKey.get(sourceKey(source));

        if (acceptedSource?.mathMode === "display") {
          transformedChildren.push(
            createPromotedDisplayMath(onlyChild, acceptedSource),
          );
          continue;
        }
      }
    }

    transformedChildren.push(child);
  }

  return transformedChildren;
}

/**
 * Collects every dollar sign inside a math-eligible top-level paragraph that
 * the source rules leave literal. Dollars a code span covers are not math
 * delimiters and are never escaped, because a backslash inside a code span is
 * literal text rather than an escape.
 */
function collectRejectedDollarIndexes(
  tree: Root,
  markdown: string,
  lines: ReadonlyArray<MarkdownLine>,
  sourceContext: string,
): ReadonlyArray<number> {
  const rejectedIndexes: number[] = [];

  for (const child of tree.children) {
    if (child.type !== "paragraph") {
      continue;
    }

    const paragraph = requireNodeSource(markdown, child, sourceContext);
    const scan = scanParagraphMath(lines, paragraph, sourceContext);

    if (isMathEligibleParagraph(child, scan.constructs) === false) {
      continue;
    }

    for (
      let lineIndex = scan.firstLineIndex;
      lineIndex <= scan.lastLineIndex;
      lineIndex += 1
    ) {
      const line = lines[lineIndex];

      for (const run of readDollarRuns(line.value)) {
        const runStartIndex = line.startIndex + run.startColumn;

        if (isInsideCodeSpan(runStartIndex, scan.codeSpanRanges)) {
          continue;
        }

        const isAccepted = scan.constructs.some((construct) => (
          runStartIndex >= construct.startIndex
          && runStartIndex < construct.endIndex
        ));

        if (isAccepted) {
          continue;
        }

        for (let runOffset = 0; runOffset < run.length; runOffset += 1) {
          rejectedIndexes.push(runStartIndex + runOffset);
        }
      }
    }
  }

  return rejectedIndexes;
}

/**
 * Escapes every dollar sign that the source rules leave literal inside a
 * math-eligible top-level paragraph.
 *
 * `remark-math` closes a text-math span on the first later run of the same
 * size and applies no delimiter guards, so it can swallow a span this contract
 * accepts: `A $100 bond with yield $r$ pays` arrives as a single `inlineMath`
 * node holding `100 bond with yield `, with no node left for `$r$`. Escaping
 * the rejected dollars first makes the parser segment the paragraph exactly
 * the way the source rules do, so the transform below only ever has to confirm
 * the nodes it is handed.
 */
export function escapeRejectedPublicCatalogCardMath(
  tree: Root,
  markdown: string,
  sourceContext: string,
): string {
  if (containsReferenceDefinition(tree)) {
    return markdown;
  }

  // The rewrite below copies the source forward once, so the indexes have to
  // be strictly ascending: a repeated or backwards index would duplicate
  // source text instead of escaping a dollar.
  const rejectedIndexes = [
    ...new Set(collectRejectedDollarIndexes(
      tree,
      markdown,
      splitMarkdownLines(markdown),
      sourceContext,
    )),
  ].sort((leftIndex, rightIndex) => leftIndex - rightIndex);
  let escapedMarkdown = "";
  let copiedIndex = 0;

  for (const rejectedIndex of rejectedIndexes) {
    escapedMarkdown += `${markdown.slice(copiedIndex, rejectedIndex)}\\`;
    copiedIndex = rejectedIndex;
  }

  return escapedMarkdown + markdown.slice(copiedIndex);
}

/**
 * Decodes the CommonMark backslash escapes of a rejected formula's delimited
 * source before that source becomes literal text. `mdast-util-to-markdown`
 * escapes whatever a `text` node holds, so an author's `\$` would otherwise
 * reach the page as a visible backslash instead of the dollar sign it stands
 * for, which is the same reading the escape pass gives every other rejected
 * dollar.
 */
function decodeMarkdownEscapes(delimitedSource: string): string {
  return delimitedSource.replace(markdownEscapePattern, "$1");
}

export function transformPublicCatalogCardMathBlocks(
  tree: Root,
  markdown: string,
  sourceContext: string,
): Root {
  const transformedTree = structuredClone(tree);
  const lines = splitMarkdownLines(markdown);
  const acceptedSources = collectAcceptedMathSources(
    transformedTree,
    markdown,
    lines,
    sourceContext,
  );
  const acceptedSourcesByKey = new Map(
    acceptedSources.map((source) => [sourceKey(source), source]),
  );

  assertValidAcceptedMathSources(acceptedSources, sourceContext);

  transformedTree.children = transformRootChildren(
    transformedTree.children,
    markdown,
    acceptedSourcesByKey,
    sourceContext,
  );

  visit(transformedTree, "inlineMath", (node, index, parent) => {
    const source = requireNodeSource(markdown, node, sourceContext);
    const acceptedSource = acceptedSourcesByKey.get(sourceKey(source));

    if (acceptedSource !== undefined) {
      markAcceptedInlineMath(node, acceptedSource);
      return;
    }

    replaceParentChild(parent, index, {
      type: "text",
      value: decodeMarkdownEscapes(source.delimitedSource),
      position: node.position,
    }, sourceContext);
    return SKIP;
  });

  visit(transformedTree, "math", (node, index, parent) => {
    if (parent?.type === "root") {
      // Top-level display math is already accepted or literalized above.
      return;
    }

    replaceParentChild(parent, index, {
      type: "paragraph",
      children: [{
        type: "text",
        value: createContainerMathLiteral(node),
        position: node.position,
      }],
      position: node.position,
    }, sourceContext);
    return SKIP;
  });

  return transformedTree;
}
