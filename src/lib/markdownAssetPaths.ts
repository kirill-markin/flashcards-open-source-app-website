export const MARKDOWN_ASSET_PREFIX = "/__markdown";
export const LLMS_ASSET_PATHNAME = `${MARKDOWN_ASSET_PREFIX}/llms.txt`;
export const MARKDOWN_MANIFEST_FILE_PATH = ".generated/markdown-asset-manifest.json";
export const MARKDOWN_MANIFEST_ENVIRONMENT_VARIABLE = "MARKDOWN_ASSET_MANIFEST_JSON";

const markdownAssetPattern = /^\/__markdown\/[0-9a-f]{64}\.md$/;

export function getCanonicalPagePathname(pagePath: string): string {
  return pagePath === "" ? "/" : `/${pagePath}/`;
}

export function getMarkdownAssetPathname(digest: string): string {
  const pathname = `${MARKDOWN_ASSET_PREFIX}/${digest}.md`;

  if (markdownAssetPattern.test(pathname) === false) {
    throw new Error(`Invalid Markdown asset digest: ${digest}`);
  }

  return pathname;
}

export function getPagePathnameFromMarkdownPathname(
  pathname: string,
): string | null {
  if (pathname === "/.md") {
    return "/";
  }

  if (
    pathname.startsWith("/") === false
    || pathname.endsWith(".md") === false
    || pathname.endsWith("/.md")
  ) {
    return null;
  }

  return `${pathname.slice(0, -3)}/`;
}

export function getMarkdownPathnameFromPagePathname(pathname: string): string {
  return pathname === "/" ? "/.md" : `${pathname.slice(0, -1)}.md`;
}

export function isMarkdownAssetPathname(value: string): boolean {
  return markdownAssetPattern.test(value);
}
