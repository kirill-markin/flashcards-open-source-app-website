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

## Git media guard

Keep upload sources and temporary outputs outside Git; `.media/` is an ignored local staging directory. Upload with `npm run media:add -- /absolute/path/image.png`, use its printed public URL in content, and commit the manifest. Use `media:replace` for an occupied logical path; immutable old URLs remain valid.

Opt in once per clone with Node 24:

```sh
npm run media:hooks
```

This sets repository-local `core.hooksPath=.githooks`, shared by its worktrees. It never runs automatically during dependency installation. The installer refuses an existing custom hooks path. To retain custom hooks, add `node scripts/checkMediaGit.ts staged` to your pre-commit hook and `node scripts/checkMediaGit.ts pre-push "$@"` to your pre-push hook, preserving Git's pre-push stdin. Run hooks from the repository root.

Pre-commit inspects the index. Pre-push inspects every actual nondeleted ref update, excluding commits already reachable from server-advertised tips available locally. Local branches are never trusted exclusions. Fetch the remote before pushing if its previous tip is unavailable. A new branch is checked against the server's existing history, rather than against an empty tree; existing historical media and deletions are allowed. A media blob added in one introduced commit and deleted in another still fails. Remove it from the introduced commits before retrying; deleting it only from the final tree is insufficient.

The guard rejects raster, video, audio and archive extensions, common binary media signatures under any filename, binary files over 32 KiB, and every file over 2 MiB. UTF-8 text such as the current lockfile is allowed within that limit. The only raster/icon exceptions, each at most 32 KiB, are `public/icon-preview.png`, `public/logo-512.png`, `src/app/favicon.ico` and `src/app/icon-preview.png`. SVG and small font files remain source assets.

The `Media Git guard` GitHub Actions job runs integration tests and inspects every commit introduced since the explicit pull-request base SHA or push event's previous SHA. It fetches that SHA explicitly, including across a history rewrite. `Catalog test suite` remains a separate check. `main` protection requires pull requests even for admins, with no required human approvals, passing `Catalog test suite` and `Media Git guard` checks, and a successful Vercel preview before merging; branches need not be up to date. Admin bypass, direct pushes and force pushes are disabled. Local hooks are bypassable; GitHub Actions cannot reject an already accepted branch push. Native server-side media push rules are unavailable for this public repository.

After a coordinated history rewrite, make a fresh clone or recreate worktrees from the rewritten `origin/main`. Export only your intended source edits as a patch first; reapply and review them in the fresh checkout. Do not merge an old branch or push stale ancestry back into the repository. The guard will reject prohibited media in that introduced history.
