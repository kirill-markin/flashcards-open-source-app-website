---
title: "Mochi Tags: Choose Inline Tags or Card Metadata"
description: "Choose inline or metadata tags in Mochi, organize nested topics, and use a four-card audit to check answer hints and tags in a Markdown export."
date: "2026-10-12"
image: "/blog/mochi-tags-inline-metadata.png"
keywords:
  - "Mochi tags"
  - "Mochi inline tags"
  - "Mochi metadata tags"
  - "Mochi hierarchical tags"
  - "Mochi Markdown export tags"
---

A Mochi card can have a tag that never appears in its Markdown. That matters when you export your notes: Mochi's Markdown export keeps tags included in the text, but drops tags stored only as metadata. Choose where each label belongs before applying it across a deck. [Mochi export documentation](https://mochi.cards/docs/import-and-export/exporting/)

For reusable study cards, there are two things to check: whether a tag gives away the answer, and whether the file you plan to keep actually contains it. The four-card audit below checks both.

![A wardrobe volunteer holds a jacket with a sewn cloth marker beside an empty hanger with a separate marker](/blog/mochi-tags-inline-metadata.png)

This guide follows Mochi's official documentation, checked October 12, 2026. The cards and worksheet are original examples, not results from a hands-on app test. Fill in the observation columns from your study view and exported files.

## Decide whether the label belongs in the text

Mochi supports tags embedded in Markdown and tags applied in the card footer. Inline `#tags` automatically become card metadata too. You don't need to add the same tag again in the footer. [Mochi card tags](https://mochi.cards/docs/cards/), [inline tag syntax](https://mochi.cards/docs/markdown/basic-formatting/)

| Your purpose | Representation to choose | What to inspect |
| --- | --- | --- |
| Organize cards in Mochi without adding labels to their source text | Footer metadata | Where those labels appear in the interface and during review |
| Keep topic labels inside portable Markdown notes | Inline tags | Their position on the card and presence in the exported file |

Choose per label. A topic you want in portable notes can be inline, while a temporary grouping label can stay in the footer. Keep a native `.mochi` copy as well if you want to preserve Mochi's organization and review data.

Footer metadata sits outside the card's Markdown. That doesn't establish that it's hidden during review. Inspect the displayed question before treating any answer-related tag as safe.

Use neutral topics such as `#math/geometry`, rather than the word you're trying to recall. A separate `#quiz-1` can record an overlapping purpose: the card belongs to geometry and to a particular quiz. You don't need a longer topic path to encode both.

Mochi hierarchical tags use forward slashes. In `#math/geometry`, `geometry` is nested under `math`. That describes the organization; it doesn't establish how a filter on the parent selects nested tags. [Mochi hierarchical-tag documentation](https://mochi.cards/docs/markdown/basic-formatting/)

## Make four cards before changing a whole deck

Create a small deck with plain Markdown cards and no template applied. Templates render their own Markdown instead of the card's raw text, which would add another variable to this audit. A line containing `---` separates the question and answer. [Mochi card rendering and sides](https://mochi.cards/docs/cards/)

Keep the A–D prefixes in the questions so you can identify the cards later. Paste each block into a separate card, without the surrounding code fence. B and C use the same question and labels, so you can compare where those labels are stored.

**A — unchanged control.** Add no tags in the text or footer.

```markdown
A — How many sides does a pentagon have?
---
Five.
```

**B — metadata only.** Add `math/geometry` and `quiz-1` through the card footer. Leave its Markdown exactly as shown.

```markdown
B — How many sides does a quadrilateral have?
---
Four.
```

**C — inline tags.** Put the same labels after the answer. Check the resulting tag hierarchy in Mochi.

```markdown
C — How many sides does a quadrilateral have?
---
Four.

#math/geometry #quiz-1
```

**D — an answer hint to catch.** This deliberately puts the answer in a tag on the question side.

```markdown
D — What is a polygon with six sides called?

#hexagon
---
A hexagon.
```

Inspect each card in the view you use for study, with the answer still unrevealed, then reveal it. Seeing both sides in the editor doesn't tell you what you'll see while recalling the answer. Note labels in the surrounding interface as well as the card content. On D, look specifically for `hexagon` before the reveal; on C, check when the topic labels become visible. Keep A untouched throughout.

## Open the export and account for every tag

Save a native copy first. **Settings → Export everything** creates a `.mochi` file; Mochi also documents backing up its local user directory. [Mochi backup instructions](https://mochi.cards/docs/getting-started/backing-up/)

Then export the four-card deck as Markdown. Mochi packages separate `.md` files in a ZIP, using card names for filenames and folders for subdecks. Native `.mochi` exports preserve tags, metadata, and review history; Markdown doesn't preserve that metadata. [Mochi export formats](https://mochi.cards/docs/import-and-export/exporting/)

Extract the Markdown ZIP and open all four files in a text editor. Match them by their A–D question prefixes. These are expectations from the documented formats, not observed results:

| Card | Tags in its Markdown source | Expected in its exported `.md` file | Labels visible before the answer? | Export observation |
| --- | --- | --- | --- | --- |
| A | None | No tag text; question and answer intact | — | — |
| B | None; labels are footer metadata | No `#math/geometry` or `#quiz-1` text | — | — |
| C | `#math/geometry #quiz-1` after the answer | Both strings after the answer | — | — |
| D | `#hexagon` before the side separator | The answer hint still present | — | — |

Don't stop after finding `geometry` somewhere in the folder. Check C's full path, B's absence of tag text, D's position relative to `---`, and the unchanged A. A missing file or altered control means you haven't isolated the tag question yet.

Finding tag strings in a file doesn't guarantee another app will recognize them as tags. Check the receiving app's import rules separately. For an Anki move, use the separate [Mochi-to-Anki mapping guide](/blog/mochi-to-anki/).

## Repair the hint, then export again

Replace D's Markdown with this version:

```markdown
D — What is a polygon with six sides called?
---
A hexagon.

#math/geometry #quiz-1
```

Inspect D's footer tags too. Don't assume deleting the inline word removed every metadata assignment: remove any remaining `hexagon` tag there, then check the study view again. Confirm that nothing visible before the reveal supplies the answer, including labels outside the card content.

Create a second Markdown export and repeat the ledger. Leave A, B, and C unchanged. Compare their files with the first-export counterparts: their card text and tag placement should stay the same. D should now contain the neutral tag strings after the answer, with no `#hexagon` anywhere in its text. Keep both exports in separate folders so the second doesn't overwrite the first.

Once the representation works, apply that choice to your real cards and save a fresh native export containing the changes. Keep it beside the checked Markdown copy. Use the [Mochi custom-view guide](/blog/mochi-custom-views-cram/) when you're ready to select a practice subset, or the [Mochi comparison](/blog/mochi-alternative/) for the broader product decision.
