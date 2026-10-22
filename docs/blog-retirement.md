# Localized blog retirement

Add `status: retired` to the frontmatter of an individual file in
`src/content/<locale>/blog/`. Keep its complete frontmatter and article body in Git.
An absent status or `status: published` publishes the source. Flags are stored per
source; retiring English does not mechanically retire its translations. Editorial
decisions cover the complete verified article family, including every translation.
Apply a family decision to all its members.

Optional frontmatter fields are `retiredAt` (a quoted date), `retirementReason`, and
`retirementEvidence` (a string pointing to the decision ledger). These describe
the decision; none is required to retire the URL. The ledger holds the per-URL
metrics, observation windows, coverage limits, policy, and source revisions.

The publication registry excludes retired sources from static HTML parameters,
public readers, listings, recommendations, language alternates, sitemap, Markdown
assets, and `llms.txt`. English source records remain available internally for
recommendation vectors used by healthy translations.

The static-content build records retired paths in the Markdown asset manifest.
The existing proxy returns an empty HTTP 410 for HTML and a brief 410 Markdown
response for direct `.md` requests and negotiated Markdown, including slash
variants. Known mapped spellings in `blogSlugs.ts` also return 410 unless that
spelling has its own published source in the same locale. Private asset guards
and path-preserving legacy-domain redirects still apply. This adds no request-time
filesystem reads or HTML rendering.

Deploy the changed sources through the normal static-content build. Removing a
flag and retirement-only metadata restores a source through another build and
deploy; retain the decision ledger in Git. Generated assets are replaced
as a complete set. The first retirement changes slash handling so retired variants
reach the proxy before redirects; healthy routes retain their canonical redirects.
