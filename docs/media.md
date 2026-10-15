# Marketing media

## Upload setup

Use Node 24 and `npm ci`. The public Vercel Blob store is connected to the website project. Put its `BLOB_READ_WRITE_TOKEN` in `.env.media.local` in the main checkout, with file permissions `0600`; never commit it. Upload commands locate this single file via Git's common directory, including from worktrees. An explicitly supplied `BLOB_READ_WRITE_TOKEN` environment variable takes precedence. Website builds and public downloads require no credentials.

## Add and replace

```sh
npm run media:add -- /absolute/path/article.png
npm run media:add -- /absolute/path/panel.png /home/new-panel.png
npm run media:replace -- /absolute/path/updated-panel.png /home/new-panel.png
```

Add defaults to `/blog/<filename>.webp`; the optional second argument selects a logical path under `/blog`, `/home` or `/features`. Add rejects occupied paths with different source bytes. Replace requires an existing path and updates only that mapping. Both preserve the exact original in Blob and publish an auto-oriented WebP at quality 85 without resizing. Animated and multipage inputs are rejected by add and replace.

The printed JSON includes the immediately usable public `url`, dimensions, SHA-256 and byte count, plus `original` when delivery differs. Use the Blob `url` in new content. Existing `/blog`, `/home` and `/features` image URLs issue temporary 307 redirects to immutable Blob URLs from the manifest. Their original imported bytes live in Blob; the checkout retains logos, SVGs and other small brand assets.

The normal renderer resolves managed public paths with `getMarketingMediaUrl` in Server Components before passing immutable Blob URLs to Next Image or client components. Use the same helper or an immutable Blob `url` for new Next Image sources so replacement changes optimized `src` and `srcset` URLs.

Every object uses a content-hash pathname, disallows overwrites and has a one-year cache lifetime. Replacement retains prior objects and URLs. Commit the sorted `src/content/media-manifest.json` with the content change. Keep source files outside Git. Concurrent upload commands are rejected; after an interrupted process, remove `.generated/media-publishing.lock` only after confirming that process has stopped.

## Import existing images

```sh
npm run media:migrate
```

Import recursively publishes raster files under `public/blog`, `public/home` and `public/features` byte-for-byte, with matching logical paths. It saves the manifest after each completed image, so rerunning resumes. Each published object's public bytes are checksum-verified before recording it. Import rejects conflicting mappings and never deletes source files. Remove an imported local raster only after its manifest entry and public checksum have been verified. Development and builds use the tracked manifest without downloading media or loading upload credentials.

## CDN behavior

Compatibility redirects use `Cache-Control: public, max-age=0, must-revalidate` so browsers revalidate the pointer. Replacement publishes a new immutable URL; deploying the updated manifest changes the redirect destination. Blob CDN serves the final image with a one-year cache lifetime. The existing `Vary: Accept` behavior and Markdown negotiation remain in place. Each manifest entry consumes one redirect; account for existing redirects and generated platform routes before approaching Vercel’s 1,024-route limit.

## Regenerate localized walkthroughs

```sh
npm run generate:home-images -- es
npm run media:replace -- .generated/media/home/ai-flashcards-es.png /home/ai-flashcards-es.png
npm run media:replace -- .generated/media/home/start-learning-es.png /home/start-learning-es.png
npm run media:replace -- .generated/media/home/smart-reviews-es.png /home/smart-reviews-es.png
npm run media:replace -- .generated/media/home/your-progress-es.png /home/your-progress-es.png
```

Pass one or more supported non-English locales, or omit arguments for all of them. The generator downloads only the selected showcase originals and four shared template originals, verifies checksums, and writes PNGs under ignored `.generated/media/home`. It uses the manifest’s `original` asset when present, preserving source geometry even after WebP publishing. Inspect generated images before publishing. Replace updates existing logical paths; use `media:add -- <staged-file> /home/<new-name>.png` for a new path. Commit the updated manifest, and retain no generated raster in Git.
