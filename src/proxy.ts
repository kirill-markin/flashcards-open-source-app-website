import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  LLMS_ASSET_PATHNAME,
  getMarkdownPathnameFromPagePathname,
  getPagePathnameFromMarkdownPathname,
} from "./lib/markdownAssetPaths";
import { parseMarkdownAssetManifest } from "./lib/markdownAssetManifest";
import { SITE_URL } from "./lib/site";

const markdownManifest = parseMarkdownAssetManifest(
  process.env.MARKDOWN_ASSET_MANIFEST_JSON
    ?? (() => {
      throw new Error("MARKDOWN_ASSET_MANIFEST_JSON is required by the Markdown proxy.");
    })(),
);

const markdownCacheControl =
  "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400";

function createEmptyNotFoundResponse(): NextResponse {
  return new NextResponse(null, { status: 404 });
}

function setMarkdownHeaders(
  response: NextResponse,
  pagePathname: string,
): NextResponse {
  response.headers.set("Content-Type", "text/markdown; charset=utf-8");
  response.headers.set("Cache-Control", markdownCacheControl);
  response.headers.set("Vary", "Accept");
  response.headers.set(
    "Link",
    `<${new URL(pagePathname, SITE_URL).toString()}>; rel="canonical", <${pagePathname}>; rel="alternate"; type="text/html"`,
  );
  return response;
}

function createMarkdownResponse(
  request: NextRequest,
  pagePathname: string,
): NextResponse {
  const assetPathname = markdownManifest.markdown[pagePathname];

  if (assetPathname === undefined) {
    return setMarkdownHeaders(
      new NextResponse(`# 404\n\nPage not found: ${pagePathname}\n`, { status: 404 }),
      pagePathname,
    );
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = assetPathname;
  return setMarkdownHeaders(NextResponse.rewrite(rewriteUrl), pagePathname);
}

function isPrivatePathname(pathname: string): boolean {
  return pathname === "/__markdown"
    || pathname.startsWith("/__markdown/")
    || pathname === "/catalog-facet-static"
    || pathname.startsWith("/catalog-facet-static/")
    || pathname === "/api/page-markdown"
    || pathname.startsWith("/api/page-markdown/");
}

export function proxy(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host") ?? "";

  if (host === "www.flashcards-open-source-app.com") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.host = "flashcards-open-source-app.com";
    return NextResponse.redirect(redirectUrl, 308);
  }

  if (isPrivatePathname(pathname)) {
    return createEmptyNotFoundResponse();
  }

  if (pathname === "/llms.txt") {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = LLMS_ASSET_PATHNAME;
    const response = NextResponse.rewrite(rewriteUrl);
    response.headers.set("Content-Type", "text/plain; charset=utf-8");
    response.headers.set("Cache-Control", "public, max-age=3600, s-maxage=3600");
    response.headers.set("Vary", "Accept");
    return response;
  }

  const directMarkdownPagePathname = getPagePathnameFromMarkdownPathname(pathname);

  if (directMarkdownPagePathname !== null) {
    return createMarkdownResponse(request, directMarkdownPagePathname);
  }

  const accept = request.headers.get("accept") ?? "";

  if (
    accept.includes("text/markdown")
    && pathname.startsWith("/api/") === false
    && pathname.startsWith("/_next/") === false
  ) {
    if (pathname !== "/" && pathname.endsWith("/") === false) {
      return createEmptyNotFoundResponse();
    }

    return createMarkdownResponse(request, pathname);
  }

  const internalFacetPathname = markdownManifest.facets[pathname];
  const response = internalFacetPathname === undefined
    ? NextResponse.next()
    : NextResponse.rewrite(new URL(internalFacetPathname, request.url));
  response.headers.set("Vary", "Accept");
  const pagePathname = pathname === "/" || pathname.endsWith("/")
    ? pathname
    : `${pathname}/`;
  response.headers.set(
    "Link",
    `<${getMarkdownPathnameFromPagePathname(pagePathname)}>; rel="alternate"; type="text/markdown"`,
  );

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)|robots\\.txt).*)",
  ],
};
