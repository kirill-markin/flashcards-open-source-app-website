import { mkdirSync, rmSync, writeFileSync } from "fs";
import { dirname, join } from "path";
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
  LLMS_ASSET_PATHNAME,
  getMarkdownAssetPathname,
} from "../src/lib/markdownAssetPaths";
import {
  listMarkdownPagePaths,
  renderLlmsText,
  renderMarkdownDocument,
} from "../src/lib/markdownServe";

interface GeneratedAsset {
  readonly assetPathname: string;
  readonly content: string;
}

function getOutputDirectory(): string {
  return join(process.cwd(), "public", "__markdown");
}

function getOutputFilePath(assetPathname: string): string {
  return join(process.cwd(), "public", assetPathname);
}

function writeGeneratedAsset(asset: GeneratedAsset): void {
  const outputFilePath = getOutputFilePath(asset.assetPathname);

  mkdirSync(dirname(outputFilePath), { recursive: true });
  writeFileSync(outputFilePath, asset.content, "utf-8");
}

function writeGeneratedGlobalActivitySnapshot(snapshot: GlobalActivitySnapshot): void {
  const outputFilePath = getGlobalActivitySnapshotGeneratedFilePath(process.cwd());

  mkdirSync(dirname(outputFilePath), { recursive: true });
  writeFileSync(outputFilePath, serializeGlobalActivitySnapshot(snapshot), "utf-8");
}

function writeGeneratedPublicCatalogDump(dump: PublicCatalogDump): void {
  const outputFilePath = getPublicCatalogGeneratedFilePath(process.cwd());

  mkdirSync(dirname(outputFilePath), { recursive: true });
  writeFileSync(outputFilePath, serializePublicCatalogDump(dump), "utf-8");
}

function generateMarkdownAssets(snapshot: GlobalActivitySnapshot): ReadonlyArray<GeneratedAsset> {
  return listMarkdownPagePaths().map((pagePath): GeneratedAsset => {
    const result = renderMarkdownDocument(pagePath, {
      globalActivitySnapshot: snapshot,
    });

    if (result.status !== 200) {
      throw new Error(`Failed to render Markdown asset for page path: ${pagePath}`);
    }

    return {
      assetPathname: getMarkdownAssetPathname(pagePath),
      content: result.markdown,
    };
  });
}

function generateLlmsAsset(snapshot: GlobalActivitySnapshot): GeneratedAsset {
  return {
    assetPathname: LLMS_ASSET_PATHNAME,
    content: renderLlmsText(snapshot),
  };
}

async function main(): Promise<void> {
  const outputDirectory = getOutputDirectory();
  const catalogConfiguration = parsePublicCatalogBuildConfiguration(
    process.env[publicCatalogEnabledEnvironmentVariable],
    process.env[publicCatalogDumpUrlEnvironmentVariable],
  );
  const [snapshot, catalogDump] = await Promise.all([
    fetchGlobalActivitySnapshot(),
    catalogConfiguration.enabled
      ? fetchPublicCatalogDump(catalogConfiguration.dumpUrl)
      : Promise.resolve(null),
  ]);
  const assets = [...generateMarkdownAssets(snapshot), generateLlmsAsset(snapshot)];

  rmSync(outputDirectory, { recursive: true, force: true });
  writeGeneratedGlobalActivitySnapshot(snapshot);
  if (catalogDump === null) {
    removeGeneratedPublicCatalogDump(process.cwd());
  } else {
    writeGeneratedPublicCatalogDump(catalogDump);
  }
  assets.forEach(writeGeneratedAsset);
}

main().catch((error: unknown) => {
  const errorMessage = error instanceof Error ? error.message : String(error);

  console.error("generate_static_content_error", { errorMessage });
  process.exitCode = 1;
});
