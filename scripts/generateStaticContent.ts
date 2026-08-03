import { mkdirSync, renameSync, rmSync, writeFileSync } from "fs";
import { basename, dirname, join } from "path";
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
import {
  getPublicCatalogLanguageRoutePathname,
  getPublicCatalogTopicRoutePathname,
} from "../src/lib/publicCatalogUrls";
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
    ["topic", publicCatalog.topicTags, getPublicCatalogTopicRoutePathname],
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
  const [snapshot, catalogDump] = await Promise.all([
    fetchGlobalActivitySnapshot(),
    catalogConfiguration.enabled
      ? fetchPublicCatalogDump(catalogConfiguration.dumpUrl)
      : Promise.resolve(null),
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
