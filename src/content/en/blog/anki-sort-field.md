---
title: "Anki Sort Field: Put the Browser in Order Without Moving Cards"
description: "Change Anki's Sort Field, fix prefixed lesson-number order, and check that questions, new-card positions, and first-field duplicate checks stay separate."
date: "2026-10-23"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3574b84f7b2375bfeef4866d55a61f17e6a96ac4f9d8629042038393d11b56c3.webp"
keywords:
  - "Anki sort field"
  - "Anki change sort field"
  - "Anki sort numbers"
  - "Anki Browser order"
---

Your Anki notes already have a `Lesson` field, but the Browser shows a column full of questions. You want to find lesson 2 beside lesson 1 while editing. Moving Lesson above Front would change more than you need.

**Select Lesson in Fields…, enable “Sort by this field…”, save, then sort the Browser's Sort Field column in ascending order.** Keep Front in its original position. This changes the Browser's label and sorting key for that note type; it doesn't assign a new study position to its cards.

A three-note backend rehearsal shows the distinction. It also catches a small numbering trap: `Lesson 10` came before `Lesson 2`, while bare numbers sorted differently in the same Anki version. The desktop instructions below follow the official manual and released code; the GUI wasn't tested.

![A caretaker replaces a wooden locker’s number 2 plaque with 002 beside closed lockers numbered 001 and 010](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3574b84f7b2375bfeef4866d55a61f17e6a96ac4f9d8629042038393d11b56c3.webp)

## Choose the note type before changing its sort field

The Sort Field setting belongs to a **note type**. Changing it affects every note using that type, including notes whose cards are in other decks. Selecting three rows in one deck doesn't restrict the setting to those rows.

Check the note type of a representative note before opening Fields. If all its notes should use Lesson as their Browser label, edit that type. If only a subset should change, give that subset a separate note type first. Our [guide to adding a field to existing Anki notes](/blog/anki-add-field-existing-notes/) explains shared versus cloned note types and the conversion checks. Use it if Lesson doesn't exist yet, too.

Before editing a real note type, save a collection backup. For the small exercise here, create a fresh, empty profile disconnected from AnkiWeb, so the rehearsal can't alter your study collection.

The example uses a clone of stock Basic named `Sort field rehearsal`, with Lesson appended after Front and Back. Its single card template is unchanged: Front supplies the question and Back supplies the answer. Lesson is metadata only.

## Change the Browser label without moving Front

For an existing note type with a suitable field:

1. Open **Browse**, select a representative note, and check its note type.
2. Open **Fields…** and select **Lesson** in the field list.
3. Enable **Sort by this field…** and save. Leave the field sequence alone.
4. Return to the Browser. If **Sort Field** isn't visible, enable it from the column-header menu. Click that column's header to sort by it; click again if the order is descending.
5. Inspect the values and row order. A Browser sorted by **Due** will still be sorted by Due until you select a different column.

Only one field per note type supplies Sort Field. Anki's [field customization manual](https://docs.ankiweb.net/manual/editing#customizing-fields) describes this selector. In the [released Fields dialog code](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/fields.py#L218), the selector sets the sort index; moving a field is a separate operation.

The **Reposition** button in Fields changes the field sequence. **Cards → Reposition** in the Browser changes new-card positions. Neither is necessary to choose Lesson as the Browser's sort field, and there's no template edit to make.

After changing the sort field, Anki may ask you to upload or download at the next sync. Use the [one-way sync guide](/blog/anki-sync-upload-or-download/) to identify which collection contains the work you want to keep before choosing.

## Try three notes with deliberately awkward lesson labels

Add these notes in A, B, C order to the rehearsal type. A, B, and C are labels used in this article, not extra note fields. The questions describe invented workshop markers.

| Note | Front | Back | Lesson | Initial new-card position |
| --- | --- | --- | --- | --- |
| A | Which marker means ready? | green | `Lesson 2` | 1 |
| B | Which marker means waiting? | yellow | `Lesson 10` | 2 |
| C | Which marker means rejected? | red | `Lesson 1` | 3 |

With Lesson selected as Sort Field and the column sorted ascending, the executed backend rehearsal returned **C → B → A**:

```text
Lesson 1
Lesson 10
Lesson 2
```

For these prefixed positive integer lesson labels, change only the Lesson values to a consistent three-digit width:

| Note | New Lesson value |
| --- | --- |
| A | `Lesson 002` |
| B | `Lesson 010` |
| C | `Lesson 001` |

The backend returned **C → A → B**, matching lessons 1, 2, and 10. In your Browser, check that the ascending Sort Field column now reads `Lesson 001`, `Lesson 002`, `Lesson 010`. Three digits cover this naming scheme through lesson 999. Choose a width that fits your own integer range before editing a larger set, and check a small sample first.

Don't apply this as a blanket rule that Anki sorts every number alphabetically. A separate control using bare `1`, `2`, and `10` already returned **C → A → B** in the tested version. The demonstrated padding fix is for the `Lesson …` labels above; it doesn't establish rules for decimals, version numbers, or other text formats.

## Check the cards as well as the row order

The rehearsal ran on October 23, 2026, using Anki's Python backend package 26.9.3, corresponding to [Anki release 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3), with Python 3.14 on macOS 26.6.1 ARM64. It created the notes, selected Lesson as the sort field, changed the labels, and compared the collection before and after.

| Check | Recorded result |
| --- | --- |
| Note and card count | Still 3 notes and 3 cards |
| Field sequence | Still Front, Back, Lesson |
| Note IDs and GUIDs | Unchanged |
| Rendered question and answer HTML | Identical for every card |
| New-card positions | Still A = 1, B = 2, C = 3 |
| Card identity and template | Same card IDs, note/deck links, and template index |
| Compared scheduling fields and flags | Unchanged, including queue, due, interval, ease factor, and review/lapse counts |

Sorting by Lesson therefore put C first while A still held new-card position 1. The released [Browser sorting implementation](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/search/mod.rs#L376) corroborates the separation: Sort Field orders by the note's stored sort value. The [notes-mode implementation](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/search/mod.rs#L405), used in the rehearsal, uses that value too.

For your own sample, use Browser Preview to check the question and answer, compare card counts, and inspect due information before and after. If your real goal is to introduce lesson 1 before lesson 2 during study, continue with the [Anki new-card order guide](/blog/anki-new-card-order/), which covers positions and the deck's gather and sort settings.

All three tested cards were new. No reviews were completed, so this run doesn't establish preservation of mature review history. It also didn't test a desktop study session, mobile clients, or sync.

## Front still controls the automatic duplicate warning

Choosing Lesson as Sort Field leaves Front as the first field. Anki's [automatic duplicate check](https://docs.ankiweb.net/manual/editing#duplicate-check) uses that first field within the note type.

Two unsaved candidate notes checked against the rehearsal collection confirmed the distinction:

| Candidate | Duplicate-check result |
| --- | --- |
| Same Front as A, different Lesson | Duplicate |
| A new Front, same Lesson as A | Normal |

Those candidates weren't added, so the collection remained at three notes and three cards. Sharing a lesson label doesn't by itself mean you've repeated a question.

CSV updates have their own matching options. Changing Sort Field doesn't choose the CSV match key. If you're editing lessons in a spreadsheet, check the [CSV update workflow](/blog/anki-csv-update-existing-notes/) before importing; no CSV import was executed for this article.

Once Lesson is visible in the right order and the original prompts and positions still match your records, the Browser change is complete. If you rehearsed in a separate profile, return to your normal profile and repeat the scoped change there. Keep the rehearsal profile disconnected from AnkiWeb.

*Prepared with AI assistance, official documentation, released-source inspection, and the backend rehearsal described above. The article illustration is AI-generated.*
