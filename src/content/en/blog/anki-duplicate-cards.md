---
title: "Anki Duplicate Cards: Find Copies and Choose What to Keep"
description: "Diagnose Anki duplicate cards, compare matching notes, and choose which copy to keep. Includes a small cleanup worksheet and checks for review history."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "Anki duplicate cards"
  - "Anki find duplicates"
  - "delete duplicate Anki notes"
  - "Anki duplicate notes"
  - "Anki review history"
---

You recognize a question you've already reviewed, but Anki presents it as new. Another copy might have arrived through an import. Or you're seeing a second question generated from the same note. The difference matters: deleting a browser row can remove every card belonging to that note, including the direction you meant to keep.

To clean up **Anki duplicate cards**, first identify where the repetition comes from. For separate notes, use **Notes → Find Duplicates** to find candidates, compare their content and each card's history, then choose one copy individually. A matching field gives you a place to investigate; it doesn't decide which material deserves deletion.

These desktop instructions follow Anki's documentation and released source, checked October 4, 2026. The fictional worksheet below describes expected results; it isn't a hands-on test.

![A chess club member compares an extra pale rook with two worn rooks on a wooden board](/blog/anki-duplicate-cards.png)

## First, find out what is repeating

A note stores fields such as Front and Back. Templates generate its cards. One vocabulary note can produce recognition and production questions, each with its own schedule. Those are siblings. See [Anki's notes and fields explanation](https://docs.ankiweb.net/getting-started.html#notes--fields).

In Browse, use **Cards** mode and open **Cards → Info** for each suspicious row. Compare the Note IDs. The same Note ID means the cards belong to one note; different IDs mean separate notes. Copy an actual ID into `nid:123`, replacing `123`, to inspect that note's cards without a deck restriction. Anki documents [IDs and their searches](https://docs.ankiweb.net/searching.html#object-ids).

| What you find | Likely explanation | Next step |
| --- | --- | --- |
| Same note, opposite question directions | Intended siblings | Check whether both questions are useful |
| Same note, identical rendered questions | Possibly duplicated card templates | Compare the templates and previews |
| Different notes, apparently identical questions | Candidate duplicate notes | Compare the complete notes before choosing a keeper |

For intended siblings, the [reverse-card guide](/blog/anki-reverse-cards/) explains the two directions. If only one should pause, [suspend that card](/blog/anki-bury-vs-suspend/). Suspension keeps it in the collection; it doesn't remove a duplicate.

For identical templates, follow [Anki's extra-copies diagnosis](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html). Removing a template affects every note using that note type, including other decks. Treat that as a separate structural change, not a quick way to delete today's repeated question.

## Find duplicate notes within an explicit scope

Open **Notes → Find Duplicates** and select the field you want to compare, such as **Front**. By default, Anki searches across note types containing that field. Use **Optional filter** to set the scope, then click **Search**. These are the documented [Find Duplicates controls](https://docs.ankiweb.net/browsing.html#finding-duplicates).

For a deck named `Cleanup practice`, enter:

```text
deck:"Cleanup practice"
```

Deck searches include subdecks. Remove the filter to look across the collection when copies may be in different decks. A clean result inside one deck doesn't rule out a copy elsewhere. [Anki's deck search syntax](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Click a result group to inspect its notes. **Tag Duplicates** adds `duplicate` to all matching notes, including any keeper. The [released tagging implementation](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py) includes every note in each group. **Don't delete all `tag:duplicate` results.** Use the tag to gather candidates, then choose the unwanted notes individually.

This search compares the selected field. It cannot decide that two prompts test the same fact. Reworded questions may need a separate manual search, while identical prompts can belong to different languages or course contexts.

## Try these three decisions on paper

Imagine six notes in `Cleanup practice`, with no subdecks. A and B use unchanged **Basic (and reversed card)** templates, producing two cards each. C–F use **Basic**, producing one each. All eight cards are in that deck. The letters identify this example only; Anki's real Note IDs and Card IDs are numbers.

| Notes | Front → Back | Fictional learning state | Decision |
| --- | --- | --- | --- |
| A and B | `le vélo` → `bicycle` | A: 12 recognition reviews, 3 production reviews; B: both cards new | Keep A; B is the first deletion candidate |
| C and D | `Chemical symbol for silver?` → `Ag` | C: 20 reviews; D: 6 reviews | Compare both histories; choose which card to continue |
| E and F | E: `bank` → `financial institution`; F: `bank` → `side of a river` | Different intended meanings | Keep both; clarify the prompts with context |

The Front search can group all three pairs. Only the first pair offers an easy decision. Before accepting B as redundant, compare **every field**, media, tags, note type, and rendered direction. Perhaps B contains pronunciation audio that A lacks, or generates a question A doesn't have.

If useful content belongs to the same learning goal, copy it deliberately into the keeper and preview the result. Preserve useful source tags too. If you're replacing the fact being tested, create a new question rather than attaching unrelated learning to an old history.

For C and D, “more reviews” is a clue, not an automatic rule. Inspect the dated review entries, ratings, current interval, and due information for both cards. A card with more reviews may simply have needed more relearning. Choose the history you intend to continue, after checking that its question and answer are useful. If the answers conflict, check the learning source first; review count cannot establish correctness.

Keeping C and deleting D does **not combine their histories**. C continues with its own learning state. Anki's [Card Info](https://docs.ankiweb.net/stats.html#card-info) shows history per card. Deleted notes' review-log entries remain available in whole-collection statistics, but disappear from deck-specific statistics; they aren't transferred into the keeper. See the manual's [deleted-note statistics explanation](https://docs.ankiweb.net/stats.html#more).

If you're undecided, postpone deletion. Record what needs checking and, if necessary, suspend the unwanted questions while you investigate.

## Delete one confirmed copy, then check the ledger

Before deleting real material, sync outstanding work from your other devices, then sync desktop so its collection includes that work. Anki's [sync manual](https://docs.ankiweb.net/syncing.html) explains the process. Through **File → Export**, save an **Anki Collection Package (`.colpkg`)** with **Include Media** enabled. It contains all decks and their scheduling, including review history. Store the file safely: importing it replaces the open profile's current cards with the saved collection, rather than merging the two. [Collection export documentation](https://docs.ankiweb.net/exporting.html#collection-colpkg)

If you want to rehearse the deletion, create a separate profile through **File → Switch Profile** and import that backup there. Leave the rehearsal profile disconnected from AnkiWeb. [Profiles have separate collections](https://docs.ankiweb.net/profiles.html); connecting both profiles to the same account can overwrite one collection with the other. Our [APKG versus COLPKG guide](/blog/anki-apkg-vs-colpkg/) covers the backup and import boundaries.

For the worksheet, call A's recognition card A1 and its production card A2; B1 and B2 are B's corresponding cards. In **Cards → Info**, record A's two actual Card IDs, due information, intervals, and recognizable history entries. Record B's Note ID too. Make the before-and-after comparison in the same session, without reviewing or rescheduling either copy.

To delete duplicate Anki notes one at a time:

1. Replace the Browse search with B's actual `nid:` search. In **Cards** mode, inspect every result and preview both directions. For real material, check for siblings in other decks too; leave the deck filter out of this search.
2. Switch to **Notes** mode. Confirm that the single result is the unwanted B note, select it alone, and choose **Notes → Delete**. Anki's [Delete action](https://docs.ankiweb.net/browsing.html#notes) removes the selected note and all its cards, even when invoked from a single Cards row.
3. Repeat B's Note ID search to confirm it returns no results. Search for A's recorded Card IDs with `cid:`, separated by a comma, and compare both cards' Info with your record.
4. Search `deck:"Cleanup practice"` and compare its row counts in **Notes** and **Cards** modes. Check the remaining notes against the ledger below.

The expected result of deleting only B is:

| Check | Before | Accept afterward |
| --- | --- | --- |
| Whole example deck | 6 notes / 8 cards | 5 notes / 6 cards |
| Bicycle pair | A1, A2, B1, B2 | A1 and A2 only |
| A's card IDs, due information, intervals, history | Your recorded values | The same cards, schedule, and history entries |
| B's Note ID search | B's two cards | No results |
| Silver and bank notes | C, D, E, F | Those same four notes remain |

One deleted note accounts for two removed cards here. Deleting A instead of B would produce the same totals while removing the studied cards you intended to keep. Check identities as well as counts, and don't reset or reschedule the keeper as part of cleanup.

A collection-wide review graph can still include reviews of removed cards. Use the surviving card's Info and identity to verify its progress, rather than expecting the graph to shrink.

Once this one group matches your ledger, handle the next group with its own keeper decision. If you rehearsed in a copy, repeat the confirmed cleanup in your real profile first. After checking that collection, sync desktop, then sync your other devices before studying there. If imports caused the copies, use the [CSV update guide](/blog/anki-csv-update-existing-notes/) before the next import. If you duplicated notes to place one fact under several topics, [tags can represent that overlap](/blog/anki-tags-vs-decks/) without another learning history to maintain.
