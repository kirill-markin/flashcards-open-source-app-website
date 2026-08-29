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

type CatalogPackageSlugRedirect = Readonly<{
  retiredSlug: string;
  replacementSlug: string;
}>;

type PermanentRedirect = Readonly<{
  source: string;
  destination: string;
  permanent: true;
}>;

const catalogPackageSlugRedirects: ReadonlyArray<CatalogPackageSlugRedirect> = [
  {
    retiredSlug: "algebra-based-physics-1-flashcards",
    replacementSlug: "ap-physics-1-flashcards",
  },
  {
    retiredSlug: "advanced-high-school-chemistry-flashcards",
    replacementSlug: "ap-chemistry-flashcards",
  },
  {
    retiredSlug: "five-unit-psychology-course-review",
    replacementSlug: "ap-psychology-flashcards",
  },
];

const catalogUiPathPrefixes: ReadonlyArray<string> = [
  "",
  "/es",
  "/ar",
  "/de",
  "/hi",
  "/ja",
  "/ru",
  "/zh",
];

function createPermanentCatalogPackageRedirects(): Array<PermanentRedirect> {
  return catalogPackageSlugRedirects.flatMap(({ retiredSlug, replacementSlug }) =>
    catalogUiPathPrefixes.flatMap((localePrefix) => {
      const retiredPath = `${localePrefix}/catalog/packages/${retiredSlug}`;
      const replacementPath = `${localePrefix}/catalog/packages/${replacementSlug}`;

      return [
        {
          source: `${retiredPath}/`,
          destination: `${replacementPath}/`,
          permanent: true,
        },
        {
          source: `${retiredPath}.md`,
          destination: `${replacementPath}.md`,
          permanent: true,
        },
      ];
    }),
  );
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

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.flashcards-open-source-app.com",
        port: "",
        pathname: "/v1/catalog/package-versions/*/media-assets/*/download",
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
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    SITE_URL: "https://flashcards-open-source-app.com/",
    SITE_NAME: "Flashcards",
    APP_URL: "https://app.flashcards-open-source-app.com",
    AUTH_URL: "https://auth.flashcards-open-source-app.com",
    [MARKDOWN_MANIFEST_ENVIRONMENT_VARIABLE]: readMarkdownAssetManifest(),
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
    return createPermanentCatalogPackageRedirects();
  },
};

export default nextConfig;
