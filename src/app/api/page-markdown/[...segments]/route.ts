import { NextResponse } from "next/server";
import { existsSync, readFileSync, realpathSync } from "fs";
import { isAbsolute, relative, resolve, sep } from "path";
import {
  getMarkdownAssetPathname,
  getPagePathFromMarkdownApiAssetSegments,
  getPagePathFromSegments,
} from "@/lib/markdownAssetPaths";

const CACHE_HEADERS = {
  "Content-Type": "text/markdown; charset=utf-8",
  "Cache-Control":
    "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
};

function isStrictlyWithin(parentPath: string, candidatePath: string): boolean {
  const relativePath = relative(parentPath, candidatePath);

  return relativePath !== ""
    && relativePath !== ".."
    && relativePath.startsWith(`..${sep}`) === false
    && isAbsolute(relativePath) === false;
}

function getAssetFilePath(pagePath: string): string | null {
  if (pagePath.includes("\\") || pagePath.includes("\0")) {
    return null;
  }

  const assetRootPath = resolve(process.cwd(), "public", "__markdown");
  const assetPathname = getMarkdownAssetPathname(pagePath);
  const assetPrefix = "/__markdown/";

  if (assetPathname.startsWith(assetPrefix) === false) {
    throw new Error(
      `Cannot resolve Markdown asset outside the configured pathname prefix: ${assetPathname}`,
    );
  }

  const candidatePath = resolve(assetRootPath, assetPathname.slice(assetPrefix.length));

  if (isStrictlyWithin(assetRootPath, candidatePath) === false || !existsSync(candidatePath)) {
    return null;
  }

  const resolvedAssetRootPath = realpathSync(assetRootPath);
  const resolvedCandidatePath = realpathSync(candidatePath);

  return isStrictlyWithin(resolvedAssetRootPath, resolvedCandidatePath)
    ? resolvedCandidatePath
    : null;
}

function createNotFoundResponse(segments: ReadonlyArray<string>): NextResponse {
  const notFound = `# 404\n\nPage not found: /${segments.join("/")}`;

  return new NextResponse(notFound, { status: 404, headers: CACHE_HEADERS });
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ segments: string[] }> }
): Promise<NextResponse> {
  const { segments } = await params;
  let pagePath: string;

  try {
    pagePath = getPagePathFromMarkdownApiAssetSegments(segments)
      ?? getPagePathFromSegments(segments);
  } catch (error: unknown) {
    if (error instanceof URIError) {
      return createNotFoundResponse(segments);
    }

    throw error;
  }

  const assetFilePath = getAssetFilePath(pagePath);

  if (assetFilePath === null) {
    return createNotFoundResponse(segments);
  }

  return new NextResponse(readFileSync(assetFilePath, "utf-8"), {
    status: 200,
    headers: CACHE_HEADERS,
  });
}
