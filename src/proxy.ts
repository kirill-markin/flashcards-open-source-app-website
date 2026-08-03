import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  LLMS_ASSET_PATHNAME,
  getMarkdownApiAssetPathname,
  getPagePathFromHtmlPathname,
  getPagePathFromMarkdownPathname,
} from "./lib/markdownAssetPaths";
import { getPublicCatalogFacetStaticPathname } from "./lib/publicCatalogUrls";

export function proxy(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host") ?? "";

  if (host === "www.flashcards-open-source-app.com") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.host = "flashcards-open-source-app.com";
    return NextResponse.redirect(redirectUrl, 308);
  }

  if (pathname.startsWith("/__markdown/")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/page-markdown/")) {
    return NextResponse.next();
  }

  if (pathname === "/llms.txt") {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = LLMS_ASSET_PATHNAME;
    return NextResponse.rewrite(rewriteUrl);
  }

  // --- Markdown serving: .md extension ---
  const markdownPagePath = getPagePathFromMarkdownPathname(pathname);
  if (markdownPagePath !== null) {
    const rewriteUrl = new URL(request.url);
    rewriteUrl.pathname = getMarkdownApiAssetPathname(markdownPagePath);
    return NextResponse.rewrite(rewriteUrl);
  }

  // --- Markdown serving: Accept header ---
  const accept = request.headers.get("accept") || "";
  if (
    accept.includes("text/markdown") &&
    !pathname.startsWith("/api/") &&
    !pathname.startsWith("/_next/")
  ) {
    const rewriteUrl = new URL(request.url);
    rewriteUrl.pathname = getMarkdownApiAssetPathname(
      getPagePathFromHtmlPathname(pathname)
    );
    return NextResponse.rewrite(rewriteUrl);
  }

  // --- Default: add Vary and Link headers ---
  const publicCatalogFacetStaticPathname = getPublicCatalogFacetStaticPathname(pathname);
  const response = publicCatalogFacetStaticPathname === null
    ? NextResponse.next()
    : NextResponse.rewrite(new URL(publicCatalogFacetStaticPathname, request.url));
  response.headers.append("Vary", "Accept");

  const cleanPath = pathname.replace(/\/+$/, "");
  const mdPath = cleanPath === "" ? "/.md" : `${cleanPath}.md`;
  response.headers.set(
    "Link",
    `<${mdPath}>; rel="alternate"; type="text/markdown"`
  );

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)|robots\\.txt).*)",
  ],
};
