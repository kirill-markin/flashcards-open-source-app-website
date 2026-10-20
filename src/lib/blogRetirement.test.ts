import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import test from "node:test";
import { NextRequest } from "next/server";
import { unstable_getResponseFromNextConfig } from "next/experimental/testing/server";
import type { GlobalActivitySnapshot } from "./globalActivitySnapshot";
import { parseMarkdownAssetManifest, serializeMarkdownAssetManifest } from "./markdownAssetManifest";

test("localized retirement excludes publication while retaining sources and serving 410 variants", async (t) => {
  const originalDirectory = process.cwd();
  const originalManifest = process.env.MARKDOWN_ASSET_MANIFEST_JSON;
  const directory = mkdtempSync(join(tmpdir(), "blog-retirement-"));
  t.after(() => {
    process.chdir(originalDirectory);
    if (originalManifest === undefined) {
      delete process.env.MARKDOWN_ASSET_MANIFEST_JSON;
    } else {
      process.env.MARKDOWN_ASSET_MANIFEST_JSON = originalManifest;
    }
    rmSync(directory, { recursive: true, force: true });
  });

  function writeArticle(locale: string, slug: string, status: string): string {
    const filePath = join(directory, "src/content", locale, "blog", `${slug}.md`);
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, `---\ntitle: ${slug}\ndescription: Retrieval practice memory\ndate: "2026-01-01"\n${status}---\nPreserved article body about retrieval practice.\n`);
    return filePath;
  }

  const retiredSourcePath = writeArticle("en", "shared", "status: retired\nretirementEvidence: docs/retirement-ledger.md\n");
  const retiredSource = readFileSync(retiredSourcePath, "utf-8");
  writeArticle("es", "shared", "");
  writeArticle("en", "spanish-retired", "");
  writeArticle("es", "spanish-retired", "status: retired\n");
  writeArticle("en", "active", "status: published\n");
  writeArticle("es", "active", "");
  writeArticle("en", "how-to-use-flashcards-for-algebra-based-physics-1", "status: retired\n");
  writeArticle("es", "how-to-use-flashcards-for-ap-physics-1", "");
  mkdirSync(join(directory, "src/content/en/docs"), { recursive: true });
  process.chdir(directory);

  const blog = await import("./blog");
  const publication = await import("./blogPublication");
  const registry = await import("../data/blog");
  const routes = await import("./routeTranslations");
  const markdown = await import("./markdownServe");
  const metadata = await import("./seo/createBlogPostMetadata");
  assert.equal(blog.readBlogPost("en", "shared"), null);
  assert.equal(await blog.readBlogPostContent("en", "shared"), null);
  assert.ok(blog.readBlogPost("es", "shared"));
  assert.equal(blog.readBlogPost("es", "spanish-retired"), null);
  assert.ok(blog.readBlogPost("en", "spanish-retired"));
  assert.ok(!registry.BLOG_POST_SLUGS.includes("shared"));
  assert.ok(!registry.getTranslatedBlogPostSlugs("es").includes("spanish-retired"));
  assert.equal(blog.hasBlogTranslation("shared", "en"), false);
  assert.equal(routes.hasRouteTranslation("/blog/shared/", "en"), false);
  assert.deepEqual(routes.getRouteLocales("/blog/shared/"), ["es"]);
  assert.equal(routes.getLanguageAlternates("/blog/shared/"), undefined);
  assert.equal(metadata.createBlogPostMetadata("en", "shared").alternates, undefined);
  assert.ok(!blog.listBlogPosts("en").some((post) => post.slug === "shared"));
  assert.ok(!blog.getRecommendedBlogPosts("es", "active", 10).some((post) => post.slug === "spanish-retired"));
  assert.ok(blog.getRecommendedBlogPosts("es", "shared", 10).some((post) => post.slug === "how-to-use-flashcards-for-ap-physics-1"));
  assert.ok(!markdown.listMarkdownPagePaths(null).includes("blog/shared"));
  assert.ok(markdown.listMarkdownPagePaths(null).includes("es/blog/shared"));
  assert.ok(!markdown.renderBlogListingMarkdown("en").markdown.includes("/blog/shared/"));
  assert.ok(!markdown.renderBlogPostMarkdown("en", "shared").markdown.includes("Preserved article body"));

  const snapshot: GlobalActivitySnapshot = {
    schemaVersion: 3,
    generatedAtUtc: "2026-10-20T00:00:00.000Z",
    asOfUtc: "2026-10-20T00:00:00.000Z",
    from: "2026-10-19",
    to: "2026-10-19",
    totals: { uniqueReviewingUsers: 1, reviewEvents: { total: 1, byPlatform: { web: 1, android: 0, ios: 0, agent: 0, unattributed: 0 } } },
    days: [{ date: "2026-10-19", uniqueReviewingUsers: 1, newReviewingUsers: 1, returningReviewingUsers: 0, reviewEvents: { total: 1, byPlatform: { web: 1, android: 0, ios: 0, agent: 0, unattributed: 0 } } }],
  };
  assert.ok(!markdown.renderLlmsText(snapshot, null).includes("/blog/shared/"));

  const retired = publication.listRetiredBlogPathnames();
  assert.ok(retired.includes("/blog/shared/"));
  assert.ok(retired.includes("/blog/how-to-use-flashcards-for-ap-physics-1/"));
  assert.ok(!retired.includes("/es/blog/shared/"));
  assert.ok(!retired.includes("/es/blog/how-to-use-flashcards-for-ap-physics-1/"));
  assert.equal(publication.listBlogPublicationStates("en").find((post) => post.slug === "shared")?.retirementEvidence, "docs/retirement-ledger.md");

  const manifest = serializeMarkdownAssetManifest({
    retired,
    facets: {},
    markdown: { "/es/blog/shared/": `/__markdown/${"a".repeat(64)}.md` },
  });
  process.env.MARKDOWN_ASSET_MANIFEST_JSON = manifest;
  mkdirSync(join(directory, ".generated"));
  writeFileSync(join(directory, ".generated/markdown-asset-manifest.json"), manifest);
  const { default: nextConfig } = await import("../../next.config");
  assert.equal(nextConfig.skipTrailingSlashRedirect, true);
  for (const pathname of ["/blog/shared", "/blog/shared/", "/blog/shared.md", "/blog/shared.md/"]) {
    const configResponse = await unstable_getResponseFromNextConfig({ url: `https://nibomo.com${pathname}`, nextConfig });
    assert.equal(configResponse.headers.get("Location"), null, `${pathname} must reach Proxy`);
  }
  for (const pathname of [
    "/pricing/",
    "/blog/",
    "/blog/active/",
    "/es/blog/shared/",
    "/catalog/",
    "/catalog/packages/ap-physics-1-flashcards/",
    "/es/catalog/packages/ap-physics-1-flashcards/",
    "/assets/example.svg",
    "/blog/example.png",
    "/__markdown/secret.md",
  ]) {
    const configResponse = await unstable_getResponseFromNextConfig({ url: `https://nibomo.com${pathname}`, nextConfig });
    assert.equal(configResponse.status, 200, `${pathname} must not redirect`);
    assert.equal(configResponse.headers.get("Location"), null, `${pathname} must not redirect`);
  }
  for (const [pathname, destination] of [
    ["/pricing", "/pricing/"],
    ["/blog", "/blog/"],
    ["/catalog", "/catalog/"],
    ["/catalog/packages/ap-physics-1-flashcards", "/catalog/packages/ap-physics-1-flashcards/"],
    ["/es/catalog/packages/ap-physics-1-flashcards", "/es/catalog/packages/ap-physics-1-flashcards/"],
    ["/assets/example.svg/", "/assets/example.svg"],
    ["/blog/example.png/", "/blog/example.png"],
  ]) {
    const configResponse = await unstable_getResponseFromNextConfig({ url: `https://nibomo.com${pathname}`, nextConfig });
    assert.equal(configResponse.status, 308);
    assert.equal(configResponse.headers.get("Location"), `https://nibomo.com${destination}`);
  }
  const { proxy } = await import("../proxy");
  for (const pagePath of retired) {
    for (const pathname of [pagePath, pagePath.slice(0, -1), `${pagePath.slice(0, -1)}.md`, `${pagePath.slice(0, -1)}.md/`]) {
      for (const accept of ["text/html", "text/markdown"]) {
        const response = proxy(new NextRequest(`https://nibomo.com${pathname}?source=test`, { headers: { accept } }));
        assert.equal(response.status, 410, `${pathname} ${accept}`);
        assert.equal(response.headers.get("Location"), null);
        assert.equal(response.headers.get("Link"), null);
        assert.equal(response.headers.get("Vary"), "Accept");
        assert.ok(!(await response.text()).includes("Preserved article body"));
        if (pathname.includes(".md") || accept === "text/markdown") {
          assert.equal(response.headers.get("Content-Type"), "text/markdown; charset=utf-8");
        }
      }
    }
  }
  const healthy = proxy(new NextRequest("https://nibomo.com/es/blog/shared/"));
  assert.equal(healthy.status, 200);
  assert.match(healthy.headers.get("Link") ?? "", /shared\.md/);
  assert.equal(proxy(new NextRequest("https://nibomo.com/es/blog/shared.md")).headers.get("x-middleware-rewrite"), `https://nibomo.com/__markdown/${"a".repeat(64)}.md`);
  assert.equal(proxy(new NextRequest("https://nibomo.com/es/blog/shared")).headers.get("Location"), "https://nibomo.com/es/blog/shared/");
  assert.equal(proxy(new NextRequest("https://nibomo.com/__markdown/secret.md")).status, 404);
  assert.equal(proxy(new NextRequest("https://flashcards-open-source-app.com/blog/shared", { headers: { host: "flashcards-open-source-app.com" } })).headers.get("Location"), "https://nibomo.com/blog/shared");
  assert.equal(readFileSync(retiredSourcePath, "utf-8"), retiredSource);
});

test("retired manifest paths must be canonical", () => {
  for (const retired of [["blog/retired/"], ["/blog/retired"], ["/blog/../retired/"], ["/blog/retired/?x=1"]]) {
    assert.throws(() => parseMarkdownAssetManifest(JSON.stringify({ facets: {}, markdown: {}, retired })), /retired must be an array of canonical/);
  }
});
