import { mkdirSync, renameSync, rmSync, writeFileSync } from "fs";
import { basename, dirname, join } from "path";
import QRCode from "qrcode";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "../src/lib/humanPlatforms";
import {
  getStoreQrCodesGeneratedFilePath,
  serializeStoreQrCodes,
  type StoreQrCodes,
} from "../src/lib/storeQrCodes";
import {
  fetchGlobalActivitySnapshot,
  getGlobalActivitySnapshotGeneratedFilePath,
  serializeGlobalActivitySnapshot,
  type GlobalActivitySnapshot,
} from "../src/lib/globalActivitySnapshot";
import {
  fetchPublicCatalogDump,
  getPublicCatalogGeneratedFilePath,
  parsePublicCatalogBuildConfiguration,
  publicCatalogDumpUrlEnvironmentVariable,
  publicCatalogEnabledEnvironmentVariable,
  removeGeneratedPublicCatalogDump,
  serializePublicCatalogDump,
} from "../src/lib/publicCatalogBuild";
import type { PublicCatalogDump } from "../src/lib/publicCatalogTypes";
import {
  createPublicCatalogReadModel,
  type PublicCatalogReadModel,
} from "../src/lib/publicCatalogReadModel";
import {
  LLMS_ASSET_PATHNAME,
  MARKDOWN_MANIFEST_FILE_PATH,
  getCanonicalPagePathname,
  getMarkdownAssetPathname,
} from "../src/lib/markdownAssetPaths";
import {
  serializeMarkdownAssetManifest,
  type MarkdownAssetManifest,
} from "../src/lib/markdownAssetManifest";
import { getLocalizedPathname } from "../src/lib/i18n";
import { SUPPORTED_LOCALES } from "../src/lib/localeConfig";
import {
  assertUniquePublicCatalogFacetAliases,
  getMarkdownAssetDigest,
  getPublicCatalogFacetInternalPathname,
  type PublicCatalogFacetKind,
} from "../src/lib/publicCatalogStaticAssets";
import { getPublicCatalogLanguageRoutePathname } from "../src/lib/publicCatalogUrls";
import {
  listMarkdownPagePaths,
  renderLlmsText,
  renderMarkdownDocument,
} from "../src/lib/markdownServe";

interface GeneratedAsset {
  readonly assetPathname: string;
  readonly canonicalPagePathname?: string;
  readonly content: string;
}

// Single source of truth for the rendered QR size: qrcode emits width/height attributes
// from this value and no stylesheet resizes the symbol, so the size this file asserts is
// the size the browser paints. A longer store URL needs a denser symbol, so
// assertStoreQrCodeIsScannable fails the prebuild once this width stops being enough.
const storeQrCodeSvgOptions = {
  color: {
    dark: "#000000",
    light: "#ffffff",
  },
  errorCorrectionLevel: "M",
  margin: 2,
  type: "svg",
  width: 228,
} as const;

// Phone cameras need roughly 4 rendered pixels per module to decode a QR code off a screen.
const minimumStoreQrModulePixelSize = 4;

// The viewBox spans the symbol plus both quiet-zone margins, which is exactly what the
// width is stretched over, so the quiet zone is included here by design. This is
// deliberately not the bare module count: dividing by that would loosen the floor.
function getStoreQrSymbolModuleSpan(svgMarkup: string, storeUrl: string): number {
  const viewBoxMatch = svgMarkup.match(/viewBox="0 0 (\d+) (\d+)"/);

  if (viewBoxMatch === null || viewBoxMatch[1] !== viewBoxMatch[2]) {
    throw new Error(
      `Generated store QR code for ${storeUrl} has no square integer viewBox, so its module span cannot be measured. head=${svgMarkup.slice(0, 160)}`,
    );
  }

  return Number(viewBoxMatch[1]);
}

function assertStoreQrCodeIsScannable(svgMarkup: string, storeUrl: string): void {
  const moduleSpan = getStoreQrSymbolModuleSpan(svgMarkup, storeUrl);
  const modulePixelSize = storeQrCodeSvgOptions.width / moduleSpan;

  if (modulePixelSize < minimumStoreQrModulePixelSize) {
    throw new Error(
      `Store QR code for ${storeUrl} is not scannable: ${moduleSpan} modules rendered at ${storeQrCodeSvgOptions.width}px give ${modulePixelSize.toFixed(2)}px per module, below the ${minimumStoreQrModulePixelSize}px floor. Shorten the store URL in src/lib/humanPlatforms.ts, or raise storeQrCodeSvgOptions.width in scripts/generateStaticContent.ts to at least ${moduleSpan * minimumStoreQrModulePixelSize}px.`,
    );
  }
}

async function generateStoreQrCodes(): Promise<StoreQrCodes> {
  const [ios, android] = await Promise.all([
    QRCode.toString(APP_STORE_URL, storeQrCodeSvgOptions),
    QRCode.toString(GOOGLE_PLAY_URL, storeQrCodeSvgOptions),
  ]);

  assertStoreQrCodeIsScannable(ios, APP_STORE_URL);
  assertStoreQrCodeIsScannable(android, GOOGLE_PLAY_URL);

  return {
    android,
    ios,
  };
}

function getOutputDirectory(): string {
  return join(process.cwd(), "public", "__markdown");
}

function getStagingDirectory(): string {
  return join(process.cwd(), "public", "__markdown-staging");
}

function writeGeneratedAsset(
  stagingDirectory: string,
  asset: GeneratedAsset,
): void {
  const outputFilePath = join(stagingDirectory, basename(asset.assetPathname));

  mkdirSync(dirname(outputFilePath), { recursive: true });
  writeFileSync(outputFilePath, asset.content, "utf-8");
}

function writeGeneratedGlobalActivitySnapshot(snapshot: GlobalActivitySnapshot): void {
  const outputFilePath = getGlobalActivitySnapshotGeneratedFilePath(process.cwd());

  mkdirSync(dirname(outputFilePath), { recursive: true });
  writeFileSync(outputFilePath, serializeGlobalActivitySnapshot(snapshot), "utf-8");
}

function writeGeneratedStoreQrCodes(qrCodes: StoreQrCodes): void {
  const outputFilePath = getStoreQrCodesGeneratedFilePath(process.cwd());

  mkdirSync(dirname(outputFilePath), { recursive: true });
  writeFileSync(outputFilePath, serializeStoreQrCodes(qrCodes), "utf-8");
}

function writeGeneratedPublicCatalogDump(dump: PublicCatalogDump): void {
  const outputFilePath = getPublicCatalogGeneratedFilePath(process.cwd());

  mkdirSync(dirname(outputFilePath), { recursive: true });
  writeFileSync(outputFilePath, serializePublicCatalogDump(dump), "utf-8");
}

function generateMarkdownAssets(
  snapshot: GlobalActivitySnapshot,
  publicCatalog: PublicCatalogReadModel | null,
): ReadonlyArray<GeneratedAsset> {
  return listMarkdownPagePaths(publicCatalog).map((pagePath): GeneratedAsset => {
    const result = renderMarkdownDocument(pagePath, {
      globalActivitySnapshot: snapshot,
      publicCatalog,
    });

    if (result.status !== 200) {
      throw new Error(`Failed to render Markdown asset for page path: ${pagePath}`);
    }

    const canonicalPagePathname = getCanonicalPagePathname(pagePath);

    return {
      assetPathname: getMarkdownAssetPathname(
        getMarkdownAssetDigest(canonicalPagePathname),
      ),
      canonicalPagePathname,
      content: result.markdown,
    };
  });
}

function generateLlmsAsset(
  snapshot: GlobalActivitySnapshot,
  publicCatalog: PublicCatalogReadModel | null,
): GeneratedAsset {
  return {
    assetPathname: LLMS_ASSET_PATHNAME,
    content: renderLlmsText(snapshot, publicCatalog),
  };
}

function createFacetManifestEntries(
  publicCatalog: PublicCatalogReadModel | null,
): Readonly<Record<string, string>> {
  if (publicCatalog === null) {
    return {};
  }

  const facets: ReadonlyArray<readonly [
    PublicCatalogFacetKind,
    ReadonlyArray<string>,
    (tag: string) => string,
  ]> = [
    ["language", publicCatalog.languageTags, getPublicCatalogLanguageRoutePathname],
  ];
  const entries: Array<readonly [string, string]> = [];

  facets.forEach(([facetKind, tags, getRoutePathname]) => {
    assertUniquePublicCatalogFacetAliases(facetKind, tags);
    SUPPORTED_LOCALES.forEach((locale) => {
      tags.forEach((tag) => {
        entries.push([
          getLocalizedPathname(locale, getRoutePathname(tag)),
          getPublicCatalogFacetInternalPathname(locale, facetKind, tag),
        ]);
      });
    });
  });

  return Object.fromEntries(entries);
}

function createMarkdownAssetManifest(
  assets: ReadonlyArray<GeneratedAsset>,
  publicCatalog: PublicCatalogReadModel | null,
): MarkdownAssetManifest {
  const pagePathnameByAsset = new Map<string, string>();
  const markdownEntries = assets.flatMap((asset): Array<readonly [string, string]> => {
    if (asset.canonicalPagePathname === undefined) {
      return [];
    }

    const existingPagePathname = pagePathnameByAsset.get(asset.assetPathname);

    if (
      existingPagePathname !== undefined
      && existingPagePathname !== asset.canonicalPagePathname
    ) {
      throw new Error(
        `Markdown SHA-256 collision: ${existingPagePathname} and ${asset.canonicalPagePathname}.`,
      );
    }

    pagePathnameByAsset.set(asset.assetPathname, asset.canonicalPagePathname);
    return [[asset.canonicalPagePathname, asset.assetPathname]];
  });

  return {
    facets: createFacetManifestEntries(publicCatalog),
    markdown: Object.fromEntries(markdownEntries),
  };
}

async function main(): Promise<void> {
  const outputDirectory = getOutputDirectory();
  const stagingDirectory = getStagingDirectory();
  const manifestFilePath = join(process.cwd(), MARKDOWN_MANIFEST_FILE_PATH);
  const manifestStagingFilePath = `${manifestFilePath}.staging`;
  const catalogConfiguration = parsePublicCatalogBuildConfiguration(
    process.env[publicCatalogEnabledEnvironmentVariable],
    process.env[publicCatalogDumpUrlEnvironmentVariable],
  );
  const [snapshot, catalogDump, storeQrCodes] = await Promise.all([
    fetchGlobalActivitySnapshot(),
    catalogConfiguration.enabled
      ? fetchPublicCatalogDump(catalogConfiguration.dumpUrl)
      : Promise.resolve(null),
    generateStoreQrCodes(),
  ]);
  const publicCatalog = catalogDump === null
    ? null
    : createPublicCatalogReadModel(catalogDump);
  const assets = [
    ...generateMarkdownAssets(snapshot, publicCatalog),
    generateLlmsAsset(snapshot, publicCatalog),
  ];
  const manifest = createMarkdownAssetManifest(assets, publicCatalog);

  writeGeneratedGlobalActivitySnapshot(snapshot);
  writeGeneratedStoreQrCodes(storeQrCodes);
  if (catalogDump === null) {
    removeGeneratedPublicCatalogDump(process.cwd());
  } else {
    writeGeneratedPublicCatalogDump(catalogDump);
  }
  rmSync(stagingDirectory, { recursive: true, force: true });
  mkdirSync(stagingDirectory, { recursive: true });
  assets.forEach((asset) => writeGeneratedAsset(stagingDirectory, asset));
  mkdirSync(dirname(manifestFilePath), { recursive: true });
  writeFileSync(
    manifestStagingFilePath,
    serializeMarkdownAssetManifest(manifest),
    "utf-8",
  );

  rmSync(outputDirectory, { recursive: true, force: true });
  renameSync(stagingDirectory, outputDirectory);
  rmSync(manifestFilePath, { force: true });
  renameSync(manifestStagingFilePath, manifestFilePath);
}

main().catch((error: unknown) => {
  const errorMessage = error instanceof Error ? error.message : String(error);

  console.error("generate_static_content_error", { errorMessage });
  process.exitCode = 1;
});
