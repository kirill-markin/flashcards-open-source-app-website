---
title: "Anki Duplicate Note Types: Compare, Convert, and Remove Empty Types"
description: "Compare fields and templates, map existing notes to one Anki note type, and remove only unused definitions. Includes a cleanup worksheet and sync checks."
date: "2026-11-03"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3192d649b494ab799ab1d0178fbfa6ebca16c23592f0370b9a5579baaeebcf32.webp"
keywords:
  - "Anki duplicate note types"
  - "remove unused note types"
  - "Anki Basic numbers"
  - "Anki change note type"
---

`Basic`, `Basic-908e4`, another Basic with numbers: shared-deck imports can leave a confusing note-type list. When names collide, Anki adds characters to avoid merging or overwriting an existing type. Those extra characters don't prove the types are identical. [Anki's duplicate note-type FAQ](https://docs.ankiweb.net/faqs/removing-duplicate-note-types) describes these generally harmless copies.

To clean up **Anki duplicate note types**, compare their definitions, convert notes from an equivalent type into the keeper, then remove the empty definition. Keep genuinely different types and give them descriptive names.

This guide was substantially written and edited with AI using official desktop Anki documentation checked November 3, 2026. The illustration is AI-generated. No human migration test was performed. The worksheet below is a fictional example, not a tested migration result; menu wording can vary by version.

![An older man compares an empty wooden cutlery insert with a matching filled insert beside a ceramic utensil crock](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3192d649b494ab799ab1d0178fbfa6ebca16c23592f0370b9a5579baaeebcf32.webp)

## Compare what the types actually do

A note stores your field content; its templates define the questions generated from it. Changing its note type changes the definition it uses. If your problem is repeated study material, start with the separate [duplicate-card cleanup guide](/blog/anki-duplicate-cards/).

Open **Notes → Manage Note Types** and inspect each candidate's **Fields** and **Cards**:

1. Compare every field's name and meaning. Two fields called Front can still hold different kinds of information in the imported notes.
2. For **every card template**, compare the actual front and back HTML, including field replacements. A template called Card 1 with `{{Front}}` on its question side asks something different from Card 1 with `{{Back}}` there.
3. Compare the **Styling** CSS and any template options you rely on, such as a deck override. Preview several real notes, including notes with media or optional fields.

Anki's [template reference](https://docs.ankiweb.net/manual/templates/intro) explains the HTML, CSS, previews, and deck override. A matching preview alone is insufficient: [conditional replacements](https://docs.ankiweb.net/manual/templates/generation#conditional-replacement) can show different content or generate additional questions when a field is filled.

Use this three-type worksheet to record the decision:

| Type in the example | Comparison result | Starting count | Decision |
| --- | --- | --- | --- |
| `Basic` | Front, Back; one front-to-back card | 3 notes / 3 cards | Keep as the destination |
| `Basic-908e4` | Same field meanings, every template, styling, and relevant options as Basic | 2 notes / 2 cards | Convert these notes to Basic |
| `Basic-37a28` | Front, Back, Audio; its template uses Audio | 4 notes / 4 cards | Keep; rename to `Vocabulary with audio` |

These nine fictional notes each produce one card. The second row qualifies because the comparison found equivalent definitions, not because its name resembles Basic. The third contains useful differences. Renaming it makes those differences visible without moving any notes.

If either type has an extra question direction, different field meanings, or unfamiliar template logic, leave it separate during this cleanup. [Reverse cards](/blog/anki-reverse-cards/) show why counting templates matters: one note can produce more than one study question.

## Save a recovery copy and a before record

If you use AnkiWeb, sync outstanding reviews and edits from every device, then sync desktop again. Pause work on the other devices. **Change Note Type requires a one-way sync**, according to the [Browse manual](https://docs.ankiweb.net/manual/browsing#notes); finish collecting all changes before converting anything.

Use **File → Export** to save an **Anki Collection Package (`.colpkg`)** with **Include Media** enabled. This exports the whole collection with scheduling. Keep the file somewhere you can find it. Importing a collection package replaces the current cards in the open profile, so don't reimport it as a way to consolidate types. See the [export manual](https://docs.ankiweb.net/manual/exporting) and [APKG versus COLPKG guide](/blog/anki-apkg-vs-colpkg/).

To rehearse, create a separate profile through **File → Switch Profile** and import the backup there. Leave that profile disconnected from AnkiWeb. [Profiles have separate collections](https://docs.ankiweb.net/manual/profiles), and linking two profiles to one account can overwrite data.

Record both types' note and card counts. Save the source notes' field contents and tags for comparison. For representative studied cards, open **Cards → Info** and record the Note ID, Card ID, due information, interval, and recognizable review-history entries. [Card Info](https://docs.ankiweb.net/manual/stats#card-info) exposes the interval and history; [ID searches](https://docs.ankiweb.net/manual/searching#object-ids) let you find the same cards later. Include examples with images, sound, and optional fields when present.

## Map every field and card

Write the intended mapping before opening the conversion dialog. For the worksheet's equivalent pair:

| Source: Basic-908e4 | Destination: Basic | Acceptance check |
| --- | --- | --- |
| Front | Front | Same prompt, formatting, and media references |
| Back | Back | Same answer and supporting material |
| Card 1 | Card 1 | Same front-to-back question and answer |

Expand this ledger for **every source field and every card template** in your own types. Field mapping determines where stored content goes. Card mapping identifies which existing question corresponds to which destination template. Match by meaning and output, even when the labels match.

The Browse manual says changing note type doesn't affect scheduling. That statement isn't a promise that an incompatible conversion preserves every card: if a field or card template has no suitable destination, this simple consolidation doesn't apply. Cancel rather than accept an unmapped field, discard a useful question, or turn a studied recognition question into a production question.

## Convert, then account for the notes and cards

1. In Browse, select the source type in the sidebar. Inspect the search box to ensure the results cover that whole type, without unrelated deck or tag restrictions. Switch to **Notes** mode and confirm the source count: two in the example.
2. Choose **Edit → Select All**, then **Notes → Change Note Type**. Set Basic as the destination and check every field and card mapping against the ledger before saving.
3. Search for the keeper and source separately. Check counts in both **Notes** and **Cards** modes. The [Browse table modes](https://docs.ankiweb.net/manual/browsing#table-modes) count different units, so five cards doesn't necessarily mean five notes.

The worksheet's acceptance record should look like this:

| Check | Before | Accept afterward |
| --- | --- | --- |
| Basic | 3 notes / 3 cards | 5 notes / 5 cards |
| Basic-908e4 | 2 notes / 2 cards | 0 notes / 0 cards |
| Audio type | 4 notes / 4 cards | Same four notes and cards |
| All example material | 9 notes / 9 cards | 9 notes / 9 cards |

Compare the converted notes' fields and tags with the before record. Preview their questions and answers; open images and play audio. Locate the recorded cards with `cid:123,456`, replacing the numbers with your Card IDs, and compare their IDs, due information, intervals, and review histories before studying or rescheduling them.

Equal totals alone aren't enough: a missing card and an unexpected new card could cancel each other out. If a mapped card is missing or the content or history differs unexpectedly, stop before deleting anything or uploading the collection. Investigate against the backup; use the separate rehearsal profile to inspect it without replacing your working collection.

## Remove only the empty definition

Return to Manage Note Types. Delete the redundant type only after confirming that it shows **0 notes**. This removes an unused definition. **Notes → Delete** in Browse deletes selected notes and their cards; it is a different operation. Don't delete notes to make a type's counter reach zero.

After local checks pass, sync the corrected desktop collection. At the one-way prompt, **Upload** sends that desktop collection to AnkiWeb. Then sync the other devices and choose **Download** to receive it. Choosing Download on the corrected desktop would replace its local changes. If another device has acquired unsynced work, cancel and resolve that work before choosing a side. The [sync manual](https://docs.ankiweb.net/manual/syncing#conflicts) and [upload-or-download guide](/blog/anki-sync-upload-or-download/) explain those choices.

Let media syncing finish too: a one-way collection sync doesn't change the separate merging of media. On another device, check a converted note, its questions, and its images or audio before resuming study.
