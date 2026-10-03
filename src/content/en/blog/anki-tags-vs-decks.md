---
title: "Anki Tags vs Decks: Organize Overlapping Topics"
description: "Use Anki decks for separate review routines and tags for overlapping topics. Check note/card scope, search counts, and an optional three-card move."
date: "2026-10-03"
image: "/blog/anki-tags-vs-decks.png"
keywords:
  - "Anki tags vs decks"
  - "Anki hierarchical tags"
  - "organize Anki decks"
  - "Anki tags and notes"
  - "Anki study by tag"
---

The French word for a railway station belongs to your travel vocabulary, your list of places, and the lesson where you learned it. Creating three copies gives you three things to maintain. In Anki, you can keep its cards in one review deck and attach all three labels to the underlying note.

Keep decks for groups you routinely review separately. Use tags for overlapping topics and sources. Use a flag when only one particular card needs attention. Those choices let you find the same material in several ways without duplicating it or rebuilding your deck tree.

The worked example below has six notes and seven cards. Its commands follow Anki's desktop manual, checked on October 3, 2026; the expected counts are worked out from the example, not a hands-on test.

![A wardrobe volunteer clips one jacket sleeve while two ribbons mark the jacket-and-trousers outfit on its shared hanger](/blog/anki-tags-vs-decks.png)

## Give each layer a job

| Use | What it belongs to | A useful reason to choose it |
| --- | --- | --- |
| Deck | A card; each card has one deck | A course or language you review separately |
| Tag | A note; its sibling cards share the tag | A topic or source that overlaps other groups |
| Flag | An individual card; one flag at a time | One question or direction you want to inspect |

Tags apply to the whole note, even when you add them through one card. Flags affect only the selected card. Anki's [tag documentation](https://docs.ankiweb.net/editing.html#using-tags) and [flag documentation](https://docs.ankiweb.net/editing.html#using-flags) explain the distinction.

Decks can contain subdecks, with settings that affect ordinary review. A tag doesn't have its own scheduling preset or daily queue. See Anki's [deck concepts](https://docs.ankiweb.net/getting-started.html#decks) and [deck options](https://docs.ankiweb.net/deck-options.html).

You don't need to put everything into one huge deck. If your existing deck boundaries support your routine, add useful tags and keep those boundaries.

## A small library with overlapping topics

Imagine three existing source decks: **French::Lesson 01**, **French::Lesson 02**, and **French::Workbook**. They contain only the cards below, with no further subdecks. All seven cards are in ordinary decks.

Note A uses **Basic (and reversed card)**. Its Front field is `gare`, and its Back field is `railway station`. It produces A1, which asks for the English meaning, and A2, which asks for the French word. The other five notes use **Basic**, producing one card each. These [standard note types](https://docs.ankiweb.net/getting-started.html#note-types) make the note/card difference visible.

The A1–F1 labels identify cards in this example; you don't need to add them to your notes.

| Note: Front → Back | Cards | Existing deck | Topic tags to add | Source tag to add |
| --- | --- | --- | --- | --- |
| A: gare → railway station | A1, A2 | French::Lesson 01 | `topic::travel` `topic::places` | `source::lesson::01` |
| B: billet → ticket | B1 | French::Lesson 01 | `topic::travel` | `source::lesson::01` |
| C: musée → museum | C1 | French::Lesson 02 | `topic::places` | `source::lesson::02` |
| D: tourner → to turn | D1 | French::Lesson 02 | `topic::directions` | `source::lesson::02` |
| E: aller → to go | E1 | French::Workbook | `topic::travel` `topic::directions` | `source::workbook::01` |
| F: pont → bridge | F1 | French::Workbook | `topic::places` `topic::directions` | `source::workbook::01` |

The topics describe what you'll want to find later. The source tags record where the material came from. A station can belong to travel and places without needing another copy of either card.

These short word pairs keep the organization example easy to inspect. For your own language cards, include enough context to make the intended meaning clear, especially when asking for a translation in reverse.

## Add tags while the source is still clear

Start with **French::Lesson 01**: three cards from two notes. Its deck name is currently the only source label.

Open **Browse**, switch the table to **Cards**, and search:

```text
deck:"French::Lesson 01"
```

Select A1, A2, and B1. Choose **Notes → Add Tags** and enter:

```text
source::lesson::01
```

Then select A1 alone and add `topic::travel topic::places`; select B1 and add `topic::travel`. Spaces separate tags. A1 and A2 now share all three labels, although you selected only A1 for the topics. [Add Tags](https://docs.ankiweb.net/browsing.html#notes) works on notes.

Before applying a source tag to your own deck, check whether any selected card has siblings elsewhere. Anki allows a [note's cards to live in different decks](https://docs.ankiweb.net/getting-started.html#note-types). If A2 were in another deck, it would still receive `source::lesson::01`. That label should mean the note came from lesson one, rather than claiming that every card currently lives there.

You can stop here. Lesson-one material is now findable by source, and the cards can stay in their existing decks.

## Check what the searches actually select

For the full worked example, suppose you've added every tag in the library table. The cards still occupy their original decks. Run these searches in Cards mode for the card counts, then Notes mode for the note counts.

Each search includes `deck:French` to keep the exercise inside that deck tree. The expected results apply only to this six-note library.

| What you want | Exact search | Matching cards | Cards / notes |
| --- | --- | --- | --- |
| Everything in the example | `deck:French` | A1, A2, B1, C1, D1, E1, F1 | 7 / 6 |
| Travel AND places | `deck:French tag:topic::travel tag:topic::places` | A1, A2 | 2 / 1 |
| Travel OR directions | `deck:French (tag:topic::travel or tag:topic::directions)` | A1, A2, B1, D1, E1, F1 | 6 / 5 |
| Travel, excluding lesson one | `deck:French tag:topic::travel -tag:source::lesson::01` | E1 | 1 / 1 |
| Any lesson source, through its parent tag | `deck:French tag:source::lesson` | A1, A2, B1, C1, D1 | 5 / 4 |
| Travel OR directions, excluding workbook material | `deck:French (tag:topic::travel or tag:topic::directions) -tag:source::workbook` | A1, A2, B1, D1 | 4 / 3 |

Spaces mean AND, `or` accepts either condition, and `-` excludes a match. Parentheses group the OR conditions before the other restrictions apply. Quote deck names containing spaces. These rules are documented in [Anki's search syntax](https://docs.ankiweb.net/searching.html#simple-searches).

Double colons make a tag hierarchy: `source::lesson::01` sits under `source::lesson`. A [parent-tag search includes subtags](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes), so you don't need to add the parent separately. Hierarchical tags keep the source list manageable; the separate topic tags let travel, places, and directions overlap.

The travel-and-places result is two cards from one note: A in both directions. The OR result counts A once as a note, even though both cards match. A difference between card and note counts can be exactly what you intended.

If only A2's reverse question needs work, give A2 a red flag in Cards mode. With no other red flags in this example, `deck:French flag:1` finds A2 alone: one card, one note. A tag would also include A1. Anki documents [card-level flags](https://docs.ankiweb.net/editing.html#using-flags) and [their search numbers](https://docs.ankiweb.net/searching.html#flags).

## Move three cards only if it helps your review routine

Suppose you want lesson-one material in **French::Core**, an empty ordinary deck with no subdecks. The source tag now preserves the lesson information independently of the deck name.

Before the move, save a collection backup through **File → Export** as a `.colpkg` with media included. The [collection export](https://docs.ankiweb.net/exporting.html#collection-colpkg) includes scheduling; our [APKG versus COLPKG guide](/blog/anki-apkg-vs-colpkg/) explains the format choices.

Open **Options** for the source and destination. Compare their assigned presets, learning and relearning steps, FSRS parameters and desired retention if applicable, and daily limits. Also check which deck you'll click to study: its display order and limits affect the session. Preset edits can affect other decks using that preset. Anki's [deck-options manual](https://docs.ankiweb.net/deck-options.html#presets) explains which settings follow the card's deck and which follow the deck selected for study.

A move can change future scheduling through the destination's settings. Unchanged due dates immediately afterward don't prove that future intervals or review presentation will be identical. If the destination's behavior isn't what you want, keep the cards where they are and use the tags.

For the optional move, use **Cards mode** and search:

```text
deck:"French::Lesson 01" tag:source::lesson::01
```

Select A1, A2, and B1. Choose **Cards → Change Deck**, then select **French::Core**. Cards mode moves those three; Notes mode includes every sibling of the selected notes. Anki's [selection rules](https://docs.ankiweb.net/browsing.html#rows) explain why the mode matters.

## Check the move against a small ledger

Before moving, record each pilot card's direction, deck, and Due value; open **Cards → Info** for its review history. For new cards, Due is a queue position; otherwise, it's a date. See Anki's [browser columns](https://docs.ankiweb.net/browsing.html#columns) and [Info action](https://docs.ankiweb.net/browsing.html#cards).

Compare in the same sitting, before reviewing or changing options. This ledger assumes all proposed tags have been added and only A1, A2, and B1 are moving.

| Check | Before move | Accept after move |
| --- | --- | --- |
| `deck:French` | 7 cards / 6 notes | 7 cards / 6 notes |
| `deck:"French::Lesson 01"` | A1, A2, B1: 3 cards / 2 notes | 0 cards / 0 notes |
| `deck:"French::Core"` | 0 cards / 0 notes | A1, A2, B1: 3 cards / 2 notes |
| `deck:French tag:source::lesson::01` | A1, A2, B1: 3 cards / 2 notes | The same 3 cards / 2 notes |
| Travel AND places search above | A1, A2: 2 cards / 1 note | The same 2 cards / 1 note |
| Lesson two membership | C1, D1 in French::Lesson 02 | Those same cards in that deck |
| Workbook membership | E1, F1 in French::Workbook | Those same cards in that deck |
| Each pilot card's Due value and history | Copy your actual values | Compare with the recorded values; investigate a mismatch |
| Destination options | Compare before moving | The settings and review consequences you intended |

For your collection, substitute your own expected membership, including cards already in the destination.

An unexpected reverse card in a tag search is a reason to inspect the shared note. An unexpected sibling in the destination is a reason to check the mode used for the move. Extra cards in a deck search may come from subdecks, which the search includes. Resolve the difference before repeating the move on more material.

You can stop after tagging or after a successful three-card move. A smaller sidebar isn't a reason to change review settings you already rely on.

## Studying by tag comes next

Tags make a subset searchable; assigning them doesn't start a review session. Once the searches select what you expect, our [Anki filtered-deck guide](/blog/anki-filtered-decks-without-rescheduling/) covers using that subset for a short extra-practice session and choosing its scheduling setting.

Try the tag-first pilot before treating organization as a reason to move your collection to another app. If you still need a different workflow, the [Anki alternatives comparison](/blog/best-anki-alternatives/) weighs that decision against keeping a mature collection. For an overlapping topic, one useful label may be all the change you need.
