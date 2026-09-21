import { mkdirSync, writeFileSync } from "fs";
import { dirname } from "path";
import type { GlobalActivitySnapshot } from "../src/lib/globalActivitySnapshot";
import type { PublicCatalogDump } from "../src/lib/publicCatalogTypes";
import { createPublicCatalogReadModel } from "../src/lib/publicCatalogReadModel";
import { renderMarkdownDocument } from "../src/lib/markdownServe";

export interface MarkdownPageRenderJob {
  readonly outputFilePath: string;
  readonly pagePath: string;
}

export interface MarkdownRenderTask {
  readonly catalogDump: PublicCatalogDump | null;
  readonly pages: ReadonlyArray<MarkdownPageRenderJob>;
  readonly snapshot: GlobalActivitySnapshot;
}

function renderAndWriteMarkdownPages(task: MarkdownRenderTask): void {
  const publicCatalog = task.catalogDump === null
    ? null
    : createPublicCatalogReadModel(task.catalogDump);

  task.pages.forEach((page) => {
    const result = renderMarkdownDocument(page.pagePath, {
      globalActivitySnapshot: task.snapshot,
      publicCatalog,
    });

    if (result.status !== 200) {
      throw new Error(`Failed to render Markdown asset for page path: ${page.pagePath}`);
    }

    mkdirSync(dirname(page.outputFilePath), { recursive: true });
    writeFileSync(page.outputFilePath, result.markdown, "utf-8");
  });
}

// Forked by scripts/generateStaticContent.ts with one task over IPC. A throw exits
// non-zero, which the parent reports; disconnecting lets a finished worker exit.
process.once("message", (task: MarkdownRenderTask) => {
  if (process.disconnect === undefined) {
    throw new Error("Markdown render worker must be started with an IPC channel by scripts/generateStaticContent.ts.");
  }

  renderAndWriteMarkdownPages(task);
  process.disconnect();
});
