import type { NextConfig } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  MARKDOWN_MANIFEST_ENVIRONMENT_VARIABLE,
  MARKDOWN_MANIFEST_FILE_PATH,
} from "./src/lib/markdownAssetPaths";
import {
  parseMarkdownAssetManifest,
  serializeMarkdownAssetManifest,
} from "./src/lib/markdownAssetManifest";
import { marketingMediaManifest } from "./src/lib/marketingMedia";
import { BLOG_ARTICLE_PROXY_PATH_PATTERN } from "./src/lib/blogRouting";
import { createUnprefixedLegacyRedirects, LOCALIZED_LEGACY_PATH_PATTERN } from "./src/lib/legacyRedirects";

function createTrailingSlashRedirects(proxyPathPatterns: readonly string[]): Array<{
  source: string;
  destination: string;
  permanent: true;
  missing?: Array<{ type: "header"; key: string }>;
}> {
  // Next redirects run before Proxy. Leave the original slash form for legacy and retired paths.
  const outsideProxyPaths = `(?!(?:${proxyPathPatterns.join("|")}))`;
  return [
    {
      source: `/:file(${outsideProxyPaths}(?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/]+\\.\\w+)/`,
      destination: "/:file",
      permanent: true,
      missing: [{ type: "header", key: "x-nextjs-data" }],
    },
    {
      // Next adds an optional slash to custom redirects, so reject it explicitly.
      source: `/:notfile(${outsideProxyPaths}(?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/\\.]+(?!/))`,
      destination: "/:notfile/",
      permanent: true,
    },
  ];
}

function readMarkdownAssetManifest(): string {
  const filePath = join(process.cwd(), MARKDOWN_MANIFEST_FILE_PATH);
  let serialized: string;

  try {
    serialized = readFileSync(filePath, "utf-8");
  } catch (error: unknown) {
    throw new Error(
      `Cannot read generated Markdown asset manifest: ${filePath}. Run npm run generate:static-content first.`,
      { cause: error },
    );
  }

  return serializeMarkdownAssetManifest(parseMarkdownAssetManifest(serialized)).trim();
}

const markdownAssetManifestJson = readMarkdownAssetManifest();
const hasRetiredBlogPaths = parseMarkdownAssetManifest(markdownAssetManifestJson).retired.length > 0;

const nextConfig: NextConfig = {
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      // Both API host families. A media `downloadUrl` comes straight off the backend payload, so a
      // package version minted before the cutover still names the old host, and a pattern list
      // naming only one of them makes `next/image` throw on every image from the other side.
      {
        protocol: "https",
        hostname: "api.nibomo.com",
        port: "",
        pathname: "/v1/catalog/package-versions/*/media-assets/*/download",
        search: "",
      },
      {
        protocol: "https",
        hostname: "api.flashcards-open-source-app.com",
        port: "",
        pathname: "/v1/catalog/package-versions/*/media-assets/*/download",
        search: "",
      },
      {
        protocol: "https",
        hostname: "czaixyl0esghkd4s.public.blob.vercel-storage.com",
        port: "",
        pathname: "/marketing/*",
        search: "",
      },
      {
        protocol: "https",
        hostname: "d2bq3tvt7zf1kf.cloudfront.net",
        port: "",
        pathname: "/catalog/media/**",
        search: "",
      },
    ],
    unoptimized: false,
  },
  // Non-canonical package pages render on first request and read two generated
  // files from process.cwd() at runtime: the catalog dump
  // (readGeneratedPublicCatalogDump) and the footer's store QR codes
  // (readGeneratedStoreQrCodes). Neither is traced automatically, so list both.
  outputFileTracingIncludes: {
    "/\\[locale\\]/catalog/packages/\\[packageSlug\\]": [
      "./.generated/public-catalog.json",
      "./.generated/store-qr-codes.json",
    ],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    SITE_NAME: "Nibomo",
    [MARKDOWN_MANIFEST_ENVIRONMENT_VARIABLE]: markdownAssetManifestJson,
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },
  async headers() {
    const headers = [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=86400, stale-while-revalidate=604800",
          },
          {
            key: "Vary",
            value: "Accept",
          },
        ],
      },
      {
        source: "/:directory(blog|home|features)/:image(.*\\.(?:png|jpe?g|webp|avif|gif|tiff?))",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
    ];

    if (process.env.VERCEL_ENV !== "production") {
      headers.push({
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      });
    }

    return headers;
  },
  async redirects() {
    return [
      ...createTrailingSlashRedirects([
        LOCALIZED_LEGACY_PATH_PATTERN,
        ...(hasRetiredBlogPaths ? [BLOG_ARTICLE_PROXY_PATH_PATTERN] : []),
      ]),
      ...createUnprefixedLegacyRedirects(),
      ...marketingMediaManifest.map(({ publicPath, url }) => ({
        source: publicPath.replaceAll(".", "\\."),
        destination: url,
        permanent: false,
      })),
    ];
  },
};

export default nextConfig;
