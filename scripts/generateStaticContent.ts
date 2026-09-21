import { fork, type ChildProcess } from "child_process";
import { mkdirSync, renameSync, rmSync, writeFileSync } from "fs";
import { availableParallelism } from "os";
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
} from "../src/lib/markdownServe";
import type {
  MarkdownPageRenderJob,
  MarkdownRenderTask,
} from "./renderMarkdownAssetsWorker";

interface MarkdownAssetLocation {
  readonly assetPathname: string;
  readonly canonicalPagePathname?: string;
}

interface GeneratedAsset extends MarkdownAssetLocation {
  readonly content: string;
}

interface MarkdownPageAsset {
  readonly assetPathname: string;
  readonly canonicalPagePathname: string;
  readonly pagePath: string;
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

function getStagedAssetFilePath(stagingDirectory: string, assetPathname: string): string {
  return join(stagingDirectory, basename(assetPathname));
}

function writeGeneratedAsset(
  stagingDirectory: string,
  asset: GeneratedAsset,
): void {
  const outputFilePath = getStagedAssetFilePath(stagingDirectory, asset.assetPathname);

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

function listMarkdownPageAssets(
  publicCatalog: PublicCatalogReadModel | null,
): ReadonlyArray<MarkdownPageAsset> {
  return listMarkdownPagePaths(publicCatalog).map((pagePath): MarkdownPageAsset => {
    const canonicalPagePathname = getCanonicalPagePathname(pagePath);

    return {
      assetPathname: getMarkdownAssetPathname(
        getMarkdownAssetDigest(canonicalPagePathname),
      ),
      canonicalPagePathname,
      pagePath,
    };
  });
}

function runMarkdownRenderWorker(
  task: MarkdownRenderTask,
  runningWorkers: Set<ChildProcess>,
): Promise<void> {
  return new Promise((resolve, reject) => {
    const worker = fork(join(__dirname, "renderMarkdownAssetsWorker.ts"), {
      serialization: "advanced",
    });
    runningWorkers.add(worker);

    worker.once("error", (error) => {
      runningWorkers.delete(worker);
      reject(error);
    });
    worker.once("exit", (exitCode, signal) => {
      runningWorkers.delete(worker);
      if (exitCode === 0) {
        resolve();
        return;
      }

      reject(new Error(
        `Markdown render worker failed. exitCode=${exitCode}, signal=${signal}, pageCount=${task.pages.length}, firstPagePath=${JSON.stringify(task.pages[0]?.pagePath)}`,
      ));
    });
    worker.send(task, (sendError) => {
      if (sendError !== null) {
        worker.kill();
        reject(sendError);
      }
    });
  });
}

// Each locale copy of a page repeats the same card work, which the per-process caches
// share, so a slice of one locale count keeps a package's pages in at most two workers.
// Dealing slices round-robin spreads the uneven package sizes evenly across workers.
function dealPagesToWorkers(
  pages: ReadonlyArray<MarkdownPageRenderJob>,
  workerCount: number,
): ReadonlyArray<ReadonlyArray<MarkdownPageRenderJob>> {
  const pagesByWorker = Array.from(
    { length: workerCount },
    (): Array<MarkdownPageRenderJob> => [],
  );

  pages.forEach((page, pageIndex) => {
    pagesByWorker[Math.floor(pageIndex / SUPPORTED_LOCALES.length) % workerCount]?.push(page);
  });

  return pagesByWorker.filter((workerPages) => workerPages.length > 0);
}

// Rendering is CPU-bound, so it runs in one process per available core. Processes rather
// than worker threads, because ICU serializes Intl formatter construction across the
// threads of one process. Each worker writes its own assets instead of sending hundreds
// of megabytes back.
async function writeMarkdownPageAssets(
  pages: ReadonlyArray<MarkdownPageAsset>,
  snapshot: GlobalActivitySnapshot,
  catalogDump: PublicCatalogDump | null,
  stagingDirectory: string,
): Promise<void> {
  const renderJobs = pages.map((page): MarkdownPageRenderJob => ({
    outputFilePath: getStagedAssetFilePath(stagingDirectory, page.assetPathname),
    pagePath: page.pagePath,
  }));

  const workerCount = availableParallelism();
  console.log(`Rendering ${renderJobs.length} markdown page assets in ${workerCount} worker processes.`);

  // One failed worker fails the build, so the rest are stopped rather than left to finish
  // work that will be thrown away - or, if one never received its task, to hold the build
  // open until the platform's time limit.
  const runningWorkers = new Set<ChildProcess>();
  try {
    await Promise.all(
      dealPagesToWorkers(renderJobs, workerCount).map((workerPages) =>
        runMarkdownRenderWorker({ catalogDump, pages: workerPages, snapshot }, runningWorkers)),
    );
  } catch (error) {
    for (const worker of runningWorkers) {
      worker.kill();
    }
    throw error;
  }
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
  assets: ReadonlyArray<MarkdownAssetLocation>,
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
  const markdownPageAssets = listMarkdownPageAssets(publicCatalog);
  const llmsAsset = generateLlmsAsset(snapshot, publicCatalog);
  const manifest = createMarkdownAssetManifest(
    [...markdownPageAssets, llmsAsset],
    publicCatalog,
  );

  writeGeneratedGlobalActivitySnapshot(snapshot);
  writeGeneratedStoreQrCodes(storeQrCodes);
  if (catalogDump === null) {
    removeGeneratedPublicCatalogDump(process.cwd());
  } else {
    writeGeneratedPublicCatalogDump(catalogDump);
  }
  rmSync(stagingDirectory, { recursive: true, force: true });
  mkdirSync(stagingDirectory, { recursive: true });
  await writeMarkdownPageAssets(markdownPageAssets, snapshot, catalogDump, stagingDirectory);
  writeGeneratedAsset(stagingDirectory, llmsAsset);
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
