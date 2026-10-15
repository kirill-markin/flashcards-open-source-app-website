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
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "./src/lib/localeConfig";
import { marketingMediaManifest } from "./src/lib/marketingMedia";

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

// Derived from SUPPORTED_LOCALES so a new locale never silently loses its
// catalog redirects. This mirrors getLocalizedPathname from src/lib/i18n.ts,
// which cannot be imported here because it resolves "@/" path aliases that
// next.config.ts does not support.
const catalogUiPathPrefixes: ReadonlyArray<string> = SUPPORTED_LOCALES.map(
  (locale) => (locale === DEFAULT_LOCALE ? "" : `/${locale}`),
);

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

function createRetiredFeaturesRedirects(): Array<PermanentRedirect> {
  return SUPPORTED_LOCALES.flatMap((locale) => {
    const localePrefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;

    return [
      {
        source: `${localePrefix}/features/`,
        destination: `${localePrefix}/`,
        permanent: true,
      },
      {
        source: `${localePrefix}/features.md`,
        destination: locale === DEFAULT_LOCALE ? "/.md" : `${localePrefix}.md`,
        permanent: true,
      },
    ];
  });
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
      {
        source: "/:directory(blog|home|features)/:image(.*\\.(?:png|jpe?g|webp|avif|gif|tiff?))",
        headers: [
          { key: "x-vercel-enable-rewrite-caching", value: "1" },
          { key: "Vercel-CDN-Cache-Control", value: "public, max-age=86400" },
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
  async rewrites() {
    return marketingMediaManifest.map(({ publicPath, url }) => ({
      source: publicPath.replaceAll(".", "\\."),
      destination: url,
    }));
  },
  async redirects() {
    return [
      ...createPermanentCatalogPackageRedirects(),
      ...createRetiredFeaturesRedirects(),
    ];
  },
};

export default nextConfig;
