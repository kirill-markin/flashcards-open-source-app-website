---
title: "Anki Reverse Cards: Add Both Directions to Existing Notes"
description: "Add Anki reverse cards to existing Basic notes, choose optional reverses, check field and card mappings, and keep the original direction's review progress."
date: "2026-10-02"
image: "/blog/anki-reverse-cards.png"
keywords:
  - "Anki reverse cards"
  - "Anki Basic and reversed card"
  - "Anki optional reversed card"
  - "add reverse cards to existing Anki notes"
  - "Anki change note type"
---

Recognizing a French word and producing it from an English cue are two different questions. Anki can make both from one note, with separate schedules for the two cards. You don't need to enter the vocabulary twice. [Anki's notes and fields explanation](https://docs.ankiweb.net/getting-started.html#notes--fields)

To add **Anki reverse cards** to existing ordinary Basic notes, select the notes in Browse and use **Notes → Change Note Type**. Choose **Basic (and reversed card)** for both directions on every selected note, or **Basic (optional reversed card)** to choose reverses individually. Keep the old forward card mapped to the new forward card type. [Desktop conversion instructions on Anki's forum](https://forums.ankiweb.net/t/swap-front-to-back-for-testing-yourself/29805)

These desktop instructions follow Anki's documentation and released 26.09.3 source, checked October 2, 2026. The worksheet below works out the expected results; it isn't a hands-on test.

![A recreational table-tennis player practices a backhand return with one paddle in a community hall](/blog/anki-reverse-cards.png)

## Choose which questions deserve a reverse

The built-in types give you three choices:

| Note type | Questions generated |
| --- | --- |
| Basic | Front → Back |
| Basic (and reversed card) | Front → Back and Back → Front |
| Basic (optional reversed card) | Front → Back; also Back → Front when Add Reverse contains text |

These are Anki's [standard note types](https://docs.ankiweb.net/getting-started.html#note-types). Optional reversal is useful when a deck mixes vocabulary pairs with explanations or ordinary question-and-answer notes.

Read the current Back as a question. Could you give one clear answer without seeing the Front? Check the meaning, language, and expected form.

Imagine these three existing Basic notes in a French study deck. The third is a reminder about a fictional lesson:

| Note | Current Front | Current Back | Add Reverse after conversion | Intended cards |
| --- | --- | --- | --- | --- |
| A | la clé | key (for a lock) | `y` | la clé → key (for a lock); key (for a lock) → la clé |
| B | le vélo | bicycle | `y` | le vélo → bicycle; bicycle → le vélo |
| C | Why is the lesson on Thursday? | The teacher is unavailable on Wednesday. | empty | Original question only |

For A and B, decide that the answer includes the French article, and whether synonyms also count as correct. In a deck mixing languages, “bicycle” also needs a language cue. Make the expected response clear before generating another question.

C shows why automatic swapping can fail. “The teacher is unavailable on Wednesday” doesn't tell you to recall the exact question “Why is the lesson on Thursday?” Keep it forward-only. If you need another question, write that question explicitly. Our [guide to better flashcard prompts](/blog/how-to-make-better-flashcards/) covers that decision.

## Convert a small batch of existing notes

This recipe assumes unchanged built-in **Basic** notes with **Front**, **Back**, and one forward card. Custom fields, edited templates, and Cloze notes need their own mapping decisions; don't apply this table to them.

First, sync any outstanding work from other devices and bring desktop up to date. Save a collection export before changing the structure; the [APKG versus COLPKG guide](/blog/anki-apkg-vs-colpkg/) explains the backup choice and media setting.

On desktop:

1. Open **Browse**, switch to **Notes** mode, and find the Basic notes you intend to convert. Start with a small selection such as A, B, and C.
2. Select only those notes and use **Notes → Add Tags** to apply an unused tag, for example `reverse-check-20261002`. Replace the entire search with `tag:reverse-check-20261002` and confirm that it finds only your batch. Keep this search for the checks below. A `note:Basic` filter won't find the converted notes. [Anki's tag action](https://docs.ankiweb.net/browsing.html#notes) and [tag searches](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)
3. Compare the batch's row counts in **Notes** and **Cards** modes. For one studied forward card, record its interval and a recognizable review-history entry using **Cards → Info**. Return to Notes mode and select the batch. [Anki's Card Info documentation](https://docs.ankiweb.net/stats.html#card-info)
4. Choose **Notes → Change Note Type**. Select **Basic (optional reversed card)** for the worksheet, or **Basic (and reversed card)** if every selected note needs both directions.
5. Check both the field mappings and the card-type mappings below, then save.

Change Note Type acts on the selected notes. Editing the templates of a shared note type applies to notes using that type throughout the collection, including other decks. A deck selection doesn't limit a shared template edit. See Anki's [collection-wide note-type model](https://docs.ankiweb.net/getting-started.html#note-types) and [template behavior](https://docs.ankiweb.net/templates/intro.html).

### Keep the fields and card types aligned

A **note type** defines the fields and the available questions. Its **card types** define individual directions, called Card 1 and Card 2 here. Changing the note type therefore involves two mappings: where the text goes, and which new card type keeps an existing card.

For each **new destination**, select the listed **old source**. Anki 26.09.3 displays the source dropdown before the destination label, as shown in the [released mapping row](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/change-notetype/MapperRow.svelte).

| Mapping | New destination | Select this old source |
| --- | --- | --- |
| Field | Front | Front |
| Field | Back | Back |
| Field, optional type only | Add Reverse | Nothing |
| Card type | Card 1, forward | Card 1, original forward |
| Card type | Card 2, reverse | Nothing |

**Nothing** for Add Reverse leaves that new field empty. Nothing for Card 2 means no existing card supplies that direction; Anki generates a new reverse card when the note qualifies.

Swapping Front and Back changes the question attached to the old card. Assigning the old Card 1 to the new reverse card type carries its progress into the opposite direction. Keep the original text and Card 1 aligned to preserve the studied forward question.

The [released conversion implementation](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/notetype/notetypechange.rs) preserves mapped cards and removes old cards whose card types aren't mapped. Scheduling preservation depends on retaining the right card mapping; it isn't a guarantee for dropped cards or every possible conversion.

## Fill Add Reverse, then compare counts

For the optional type, put `y` in **Add Reverse** on A and B and leave C empty. Any text enables the reverse; `y` is just a convenient marker, and the marker itself isn't displayed on either card. [Anki's reverse-card generation rules](https://docs.ankiweb.net/templates/generation.html#reverse-cards)

With the batch's tag search, the worksheet predicts:

| Stage | Notes | Cards |
| --- | --- | --- |
| Before conversion | 3 | 3 |
| Optional type, all Add Reverse fields empty | 3 | 3 |
| Optional type, A and B enabled | 3 | 5 |
| Alternative: all three converted to and-reversed | 3 | 6 |

The last row is an alternative that creates C's unhelpful reverse too. Converting **N** ordinary one-card notes to the optional type and enabling **R** reverses gives **N notes and N + R cards**, with unchanged templates and populated Front and Back fields.

Rerun `tag:reverse-check-20261002`, switch to **Cards** mode, and select each row in turn to use **Preview**. Notes mode groups siblings and previews only the first card, so it can't verify every reverse. [Anki's Browser modes and preview](https://docs.ankiweb.net/browsing.html#editing-area)

Check that A and B each have both expected prompts, C has one, and the note count remains three. Compare the sampled forward card's interval and review entry with your record. Its reverse is a new card with its own learning progress; recognizing the word well doesn't supply a review history for producing it. Once this batch matches the worksheet, apply the same checks to a larger selection.

## A missing review isn't always a missing card

If the reverse exists in Browse but doesn't appear during study, inspect its state and due information before changing the note again. Daily limits and sibling burying can affect which cards appear. [Anki's daily limits](https://docs.ankiweb.net/deck-options.html#daily-limits) and [burying options](https://docs.ankiweb.net/deck-options.html#burying) describe those controls.

Use the [bury versus suspend guide](/blog/anki-bury-vs-suspend/) to find hidden cards. If the reverse doesn't exist in the batch's tag search in Cards mode, return to the generation checks: the chosen note type, Add Reverse, and the field content.

## If you later stop studying a reverse

To pause a direction while keeping it, [suspend that card separately from its sibling](/blog/anki-bury-vs-suspend/).

For an optional reverse you intend to remove, clearing **Add Reverse** makes an already generated reverse empty. It doesn't immediately delete that card. **Tools → Empty Cards** is a separate cleanup step with a list to inspect before deletion. [Anki's card-generation and deletion rules](https://docs.ankiweb.net/templates/generation.html#card-generation--deletion) explain why.

The report covers the collection; the batch's Browse search doesn't limit it. Inspect all entries, including unrelated notes, before deciding to remove anything. The [cloze-number guide's empty-card section](/blog/anki-cloze-numbers/#after-renumbering-check-for-empty-cards) explains this scope using Anki's released cleanup implementation.

Don't use Browser **Delete** to remove one direction: it deletes the note and its cards. [Anki's note deletion action](https://docs.ankiweb.net/browsing.html#notes)

Finally, note-type conversion requires a one-way sync. Once the converted desktop collection contains all the work you intend to keep, upload it to AnkiWeb and download that state on the other devices when prompted. If another device has unsynced work, resolve that first using the [upload-or-download guide](/blog/anki-sync-upload-or-download/). These are the documented [one-way sync rules](https://docs.ankiweb.net/syncing.html#conflicts).
