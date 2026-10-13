---
title: "Anki Search: Check Your Filters Before a Bulk Change"
description: "Audit Anki search filters with a worked card ledger. Check parentheses, exclusions, subdecks, and Cards versus Notes mode before changing a batch."
date: "2026-10-13"
image: "/blog/anki-search-filters.png"
keywords:
  - "Anki search filters"
  - "Anki search OR"
  - "Anki search parentheses"
  - "Anki Cards vs Notes mode"
  - "Anki search subdecks"
---

An Anki search can return two cards, show two notes, and still move four cards when you change their deck. The search may be correct. The operation can simply reach further than the rows suggest.

Before a bulk change, check **Anki search filters** in three steps: predict which cards match, confirm whether Browse displays cards or notes, and identify what the chosen operation affects. Parentheses group the alternatives. Cards versus Notes mode determines what your selected rows represent; the operation determines what changes.

The eight-card worksheet below makes those differences visible. It uses fictional data and manually derived results, based on Anki's current documentation and released **26.09.3** source, checked October 13, 2026. It isn't a hands-on app test. AI assisted the drafting and editing.

![A man lifts one mustard wool mitten while its clipped partner hangs beside it in a cloakroom](/blog/anki-search-filters.png)

## Write down the batch you actually want

Suppose you're preparing Spanish material for a wording edit. Your intended batch is:

> Cards in Spanish and its subdecks, whose notes have either an edit::word or edit::sentence tag, excluding notes tagged keep and cards that are suspended.

That sentence gives each filter a job. The two edit tags are alternatives. The deck and exclusions apply to both alternatives.

Start with a small ledger. These four notes each produce two cards, using templates named **Forward** and **Reverse**. Both directions display the Front field: as the question on Forward and the answer on Reverse. Tags belong to the note, so both siblings inherit the same tag search result.

| Note label | Front field | Tags |
| --- | --- | --- |
| N101 | casa | `edit::word` |
| N102 | perro | `edit::sentence`, `keep` |
| N103 | agua | `edit::word` |
| N104 | mesa | `edit::sentence` |

Here are all eight cards. There are no filtered decks or buried cards in this example. “Active” means unsuspended; review due dates don't enter these searches.

| Card label | Note | Template | Deck | State |
| --- | --- | --- | --- | --- |
| C1 | N101 | Forward | Spanish | Active review |
| C2 | N101 | Reverse | Spanish::Core | New, suspended |
| C3 | N102 | Forward | Spanish::Core | Review, suspended |
| C4 | N102 | Reverse | Spanish::Core | Active review |
| C5 | N103 | Forward | Spanish::Extra | Active new |
| C6 | N103 | Reverse | Archive | Active new |
| C7 | N104 | Forward | French | Active review |
| C8 | N104 | Reverse | French | Review, suspended |

The C and N labels are worksheet shorthand, not Anki search IDs. Notice the two deliberate traps: N103 has a sibling outside Spanish, and N101's two cards have different suspension states.

## Build the search one restriction at a time

Anki joins space-separated terms with AND. `or` supplies an alternative, parentheses group it, and a leading minus excludes a term. See the official [simple-search rules](https://docs.ankiweb.net/manual/searching#simple-searches).

Use this complete query:

```text
deck:Spanish (tag:edit::word or tag:edit::sentence) -tag:keep -is:suspended
```

Walk through it before selecting rows:

| Search stage | Matching cards | Rows in Notes mode |
| --- | --- | --- |
| `deck:Spanish` | C1, C2, C3, C4, C5 | N101, N102, N103 |
| Add `(tag:edit::word or tag:edit::sentence)` | C1, C2, C3, C4, C5 | N101, N102, N103 |
| Add `-tag:keep` | C1, C2, C5 | N101, N103 |
| Add `-is:suspended` | C1, C5 | N101, N103 |

The tag restriction leaves the first result unchanged because every Spanish card here belongs to a note carrying one of those tags. Excluding `keep` removes both C3 and C4. Excluding suspended cards then removes C2, while its sibling C1 remains.

Two notes remain after the last two stages. Their identical row count hides a real change: three matching cards became two. Record the identities as well as the count.

## Remove the parentheses and watch the scope change

Compare the correct search with this one:

```text
deck:Spanish tag:edit::word or tag:edit::sentence -tag:keep -is:suspended
```

It has two branches:

```text
(deck:Spanish tag:edit::word) or (tag:edit::sentence -tag:keep -is:suspended)
```

The left branch admits C1, C2 and C5. It has no suspension exclusion, so C2 returns. The right branch admits C7. It has no deck restriction, so a French card returns.

| Query | Matching cards | Rows in Notes mode |
| --- | --- | --- |
| With grouped edit tags | C1, C5 | N101, N103 |
| Without grouped edit tags | C1, C2, C5, C7 | N101, N103, N104 |

This gives you two useful counterexamples to inspect in a real collection: a suspended card carrying the first tag, and an active card outside the intended deck carrying the second tag. Finding either in the result exposes the mistake without reading every row.

Moving an exclusion to the end of a search doesn't make it apply to every OR branch. Put the alternatives inside parentheses, then place the shared restrictions outside them.

## Check what a deck name includes

`deck:Spanish` includes Spanish subdecks. It doesn't mean “only cards stored directly in Spanish.” Tag searches also include child tags. Anki documents both hierarchies under [tags, decks, cards and notes](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes).

On this ledger:

| Query | Matching cards | Rows in Notes mode |
| --- | --- | --- |
| `deck:Spanish -deck:Spanish::Extra` | C1, C2, C3, C4 | N101, N102 |
| `deck:Spanish -deck:Spanish::*` | C1 | N101 |

The first removes the Extra branch. The second removes every subdeck, leaving the card stored directly in Spanish. If your real deck name contains spaces, quote it, for example `deck:"Spanish Practice"`.

For a broader organization decision, see [Anki tags versus decks](/blog/anki-tags-vs-decks/). Here, the useful question is narrower: does this deck restriction include the children you intend to change?

## Notes mode still requires one card to satisfy the card filters

N103 has a new Forward card in Spanish::Extra and a new Reverse card in Archive. Try:

```text
deck:Spanish card:Reverse is:new -is:suspended
```

**Expected result: no cards and no notes.** C2 is a new Reverse card in Spanish::Core, but it's suspended. C6 is an active new Reverse card, but it's in Archive. C5 is in Spanish::Extra and active new, but it's Forward.

Switching to Notes mode doesn't combine C5's deck with C6's template to make N103 match. For these combined card conditions, Anki's [released search implementation](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/search/sqlwriter.rs) filters joined card/note rows and returns distinct matching note IDs. A single card must pass the AND conditions before its note appears.

That's different from what happens after you select the note.

## Selection can reach siblings the search excluded

Return to the correct full query. C1 and C5 match; Notes mode displays N101 and N103. Suppose you select every displayed row and choose **Cards → Change Deck**, moving the selection to a different deck. Treat the two rows below as separate scenarios starting from the original ledger:

| Browse mode | Selected rows | Cards moved |
| --- | --- | --- |
| Cards | C1, C5 | C1, C5 |
| Notes | N101, N103 | C1, C2, C5, C6 |

C2 can move despite failing the suspension filter. C6 can move despite failing the deck filter. In Notes mode, Change Deck acts on all cards belonging to the selected notes. See Anki's [row-selection explanation](https://docs.ankiweb.net/manual/browsing#rows), the released [selection implementation](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/table/state.py), and the [Change Deck action](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/browser.py#L844-L873).

Note operations have their own scope, even in Cards mode. Adding a tag to selected C1 and C5 changes N101 and N103, so that tag also belongs to the notes behind C2 and C6. Editing N101's Front field changes the text rendered on both C1 and suspended C2. Editing N103's Front changes both C5 and C6 in Archive. The search exclusion prevents those siblings from matching; it doesn't isolate their shared fields.

For the wording edit that started this example, decide whether both directions should receive the change. If only one direction's wording should differ, a shared-field edit can't provide that separation. Use the [find-and-replace guide](/blog/anki-find-and-replace/) once you've confirmed the note-level scope.

This worksheet uses Change Deck to make the scope predictable. For pausing questions, follow [bury versus suspend](/blog/anki-bury-vs-suspend/); for choosing among separate copies, use the [duplicate-card guide](/blog/anki-duplicate-cards/).

## Audit your actual selection before applying the change

1. Write one sentence naming the deck boundary, alternatives, exclusions and intended operation.
2. Build the query in stages in Cards mode. Inspect the **Deck** and **Card(s)** columns and a few expected inclusions and exclusions. Card(s) shows the template name in this mode.
3. Open **Cards → Info** for boundary cases and copy their actual IDs. Use `cid:123,456` for particular cards or `nid:123` to inspect a note's siblings without the original deck restriction, replacing these example numbers. The manual describes [ID searches](https://docs.ankiweb.net/manual/searching#object-ids).
4. Decide whether the operation should affect matching cards, their notes, or every sibling of those notes. Choose the mode and selection accordingly, then check the selected rows again.
5. After applying the change, inspect those same IDs. A changed tag, state or deck can make a correct result disappear from the original search.

## Try the ledger without the answers beside it

For each search, write down the matching card labels and the rows you'd see in Notes mode:

1. `deck:Spanish -(tag:keep or is:suspended)`
2. `deck:Spanish card:Reverse`
3. `deck:Spanish card:Reverse is:new`

For the third search, also predict which cards **Change Deck** would move if you selected all results in Cards mode, then separately in Notes mode. Use the original ledger for each prediction.

### Compare your predictions

| Query | Matching cards | Rows in Notes mode |
| --- | --- | --- |
| `deck:Spanish -(tag:keep or is:suspended)` | C1, C5 | N101, N103 |
| `deck:Spanish card:Reverse` | C2, C4 | N101, N102 |
| `deck:Spanish card:Reverse is:new` | C2 | N101 |

The third search includes suspended C2 because newness and suspension are separate properties. Adding `-is:suspended` leaves no results. Change Deck from Cards mode would move C2 alone; from Notes mode, selecting N101 would move both C1 and C2.

If your prediction differs, resolve that difference before changing the batch. A small set of named counterexamples tells you more than a reassuring result count.
