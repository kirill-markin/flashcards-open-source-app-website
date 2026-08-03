const MARKDOWN_ASSET_PREFIX = "/__markdown";
const MARKDOWN_API_ASSET_PREFIX = "/api/page-markdown/__asset";

export const LLMS_ASSET_PATHNAME = `${MARKDOWN_ASSET_PREFIX}/llms.txt`;

function normalizePagePath(pagePath: string): string {
  if (pagePath === "") {
    return "";
  }

  return pagePath.replace(/^\/+/, "").replace(/\/+$/, "");
}

export function getMarkdownAssetPathname(pagePath: string): string {
  const normalizedPagePath = normalizePagePath(pagePath);

  if (normalizedPagePath === "") {
    return `${MARKDOWN_ASSET_PREFIX}/home.md`;
  }

  return `${MARKDOWN_ASSET_PREFIX}/${normalizedPagePath}.md`;
}

export function encodeUtf8Hex(value: string): string {
  if (value === "") {
    return "root";
  }

  return [...new TextEncoder().encode(value)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export function decodeUtf8Hex(value: string): string {
  if (value === "root") {
    return "";
  }

  if (/^(?:[0-9a-f]{2})+$/.test(value) === false) {
    throw new URIError(`Invalid Markdown API asset path encoding: ${value}`);
  }

  const bytes = new Uint8Array(
    value.match(/[0-9a-f]{2}/g)?.map((byte) => Number.parseInt(byte, 16)) ?? [],
  );

  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch (error: unknown) {
    throw new URIError(`Invalid Markdown API asset path UTF-8 encoding: ${value}`, {
      cause: error,
    });
  }
}

export function getMarkdownApiAssetPathname(pagePath: string): string {
  return `${MARKDOWN_API_ASSET_PREFIX}/${encodeUtf8Hex(pagePath)}.md`;
}

export function getPagePathFromMarkdownApiAssetSegments(
  segments: ReadonlyArray<string>,
): string | null {
  if (segments.length !== 2 || segments[0] !== "__asset") {
    return null;
  }

  const encodedPagePath = segments[1];

  if (encodedPagePath === undefined || encodedPagePath.endsWith(".md") === false) {
    throw new URIError("Markdown API asset path encoding is missing.");
  }

  return decodeUtf8Hex(encodedPagePath.slice(0, -3));
}

export function getPagePathFromHtmlPathname(pathname: string): string {
  return pathname.replace(/^\/+/, "").replace(/\/+$/, "");
}

export function getPagePathFromMarkdownPathname(pathname: string): string | null {
  if (pathname === "/llms.txt" || !pathname.endsWith(".md")) {
    return null;
  }

  return pathname.slice(1, -3);
}

export function getPagePathFromSegments(
  segments: ReadonlyArray<string>
): string {
  if (segments.length === 0) {
    return "";
  }

  if (segments.length === 1 && segments[0] === "home") {
    return "";
  }

  return segments.join("/");
}
