---
title: "How to Export Selected Anki Cards: Check the Scope"
description: "Export selected Anki cards, check sibling cards and unused fields, and make a two-field, one-way copy when that's all the recipient needs."
date: "2026-10-17"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/cab529222c52a44a9ece1298849d839e0cc1c3d954f493324fd96ae0a4bc21a6.webp"
keywords:
  - "export selected Anki cards"
  - "Anki export selected notes"
  - "Anki cards vs notes export"
  - "export one direction Anki"
  - "Anki hidden fields export"
---

Two highlighted card rows can produce four exported cards. In the Anki backend rehearsal below, exporting the notes behind the forward questions for “harbor” and “meadow” also included their reverse questions. A separate note-text export included an editor memo that neither card displayed.

To **export selected Anki cards** on desktop, open **Browse**, find and select the batch, then choose **Notes → Export Notes**. Check that the export dialog says **Selected Notes** and choose your format. That wording matters: this Browser action exports through the selected cards' notes, so selecting only the forward rows doesn't establish a one-direction export.

If you want the original notes and their card types, inspect the resulting package. If the recipient needs only a simple word-and-definition pair, the two-field recipe below creates fresh Basic notes with one card each, then checks the package in an empty recipient collection.

![A woman opens a wooden nesting doll to reveal a smaller figure, beside another opened doll and an untouched closed one](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/cab529222c52a44a9ece1298849d839e0cc1c3d954f493324fd96ae0a4bc21a6.webp)

## What your selection actually means

A note stores fields. Card templates turn those fields into questions. One vocabulary note can therefore produce a word-to-definition card and a definition-to-word sibling. The [Anki reverse-card guide](/blog/anki-reverse-cards/) explains how those directions are generated.

In released Anki **26.09.3**, the Browser's Export Notes action asks for selected **note IDs**, including when the Browser displays card rows. The export dialog passes that note selection to the exporters. This is visible in the released [Browser action](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/browser.py#L1047-L1051) and [export dialog](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/import_export/exporting.py#L140-L160).

Those interface details were checked in source. The exports and imports described below were executed through Anki's Python backend. The rehearsal supplied the note IDs that the Browser action would use; it didn't involve selecting rows in the desktop interface.

A useful export request names both the material and its shape: “Send these two vocabulary pairs as two new forward cards, with only Front and Back.” A count of highlighted rows leaves the second half undecided.

## What left the three-note collection

The demonstration collection contained three fictional notes and six cards. Its note type was a copy of **Basic (and reversed card)** with an extra **EditorMemo** field. Neither template rendered that field.

| Front | Back | EditorMemo | Cards in the source |
| --- | --- | --- | --- |
| harbor | a sheltered place for ships | DEMO-MEMO-A | Forward in Export rehearsal; reverse in Elsewhere, suspended |
| meadow | a field of grass | DEMO-MEMO-B | Forward and reverse in Export rehearsal |
| orchard | land with fruit trees | DEMO-CONTROL | Forward and reverse in Export rehearsal |

The intended selection was just the two forward rows for harbor and meadow. Their two note IDs went into each export. Orchard was an unselected control. One source card also had a recorded review, so the package check could distinguish source progress from a fresh recipient's state.

Here is what the backend produced:

| Export format and settings | Observed output | What to check before sharing |
| --- | --- | --- |
| Notes in Plain Text; HTML and all optional columns off | 2 data rows, 3 fields per row | EditorMemo remained alongside Front and Back |
| Cards in Plain Text; HTML off | 4 data rows, 2 columns per row | Both directions appeared for each selected note |
| Anki Deck Package (.apkg); scheduling, media, deck presets, and older-version support off | Empty recipient received 2 notes and 4 cards | Both siblings and the EditorMemo field arrived; harbor's reverse was in Elsewhere |

Orchard was absent from all three outputs. The selection limited **which notes** were included. It didn't reduce each selected note to the highlighted direction or the fields visible during study.

The APKG recipient had four new cards and no review-history rows. The source's suspended reverse was **not suspended in the recipient** with scheduling disabled. Suspension hadn't excluded it from the file, and it didn't keep that imported sibling out of study either.

The source's fields, card IDs, recorded card states, scheduling values, and review rows were unchanged after these exports. There was no need to remove fields or templates from the master collection to fix the outgoing copy.

## Note fields and card text give different files

For these two selected notes, **Notes in Plain Text** returned the following data. The gaps between fields are tabs:

```text
#separator:tab
#html:false
harbor	a sheltered place for ships	DEMO-MEMO-A
meadow	a field of grass	DEMO-MEMO-B
```

Turning off optional columns omitted metadata such as tags and deck names. EditorMemo was an ordinary note field, so it still appeared. Anki's [export manual](https://docs.ankiweb.net/manual/exporting) describes this format as note contents with tab-separated fields.

**Cards in Plain Text** returned these four data rows instead:

```text
#separator:tab
#html:false
harbor	a sheltered place for ships
a sheltered place for ships	harbor
meadow	a field of grass
a field of grass	meadow
```

This format starts from the templates' question and answer output. It then processes that output for text export; with HTML off, it strips HTML. It doesn't reproduce the study screen or preserve its layout. The released [card-text exporter](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/import_export/text/csv/export.rs#L64-L161) also removes the repeated question before the standard answer separator.

EditorMemo was absent because these templates didn't use it. Another template could expose another field, so card-text export doesn't guarantee that private material will be excluded.

Use note text when you need the underlying fields for a spreadsheet, and inspect every column before sending it. Use card text when you need the generated questions and answers, checking the directions and row count. Template-added text may be present. Neither format is a substitute for an Anki backup.

## Export your batch, then inspect the destination

In Browse, finish the search before selecting rows. Check recognizable examples at the edges of the batch, and confirm that an unrelated note is absent. The [Anki search-filter guide](/blog/anki-search-filters/) covers combining filters when the batch needs more than a deck name.

Choose **Notes → Export Notes**, confirm **Selected Notes**, and select the format. For an APKG intended for someone starting fresh, leave **Include scheduling information** off. Decide separately whether media and deck presets belong in the package. The [APKG versus COLPKG guide](/blog/anki-apkg-vs-colpkg/) covers those choices and whole-collection backups.

For a text file, open the exported file itself. Count data records separately from the `#` header lines, check the columns, and look for reverse questions or fields you didn't intend to share.

For an APKG, import it into a fresh, empty, unsynced desktop profile. Use Browse in both Notes and Cards modes, inspect all decks created by the import, and open the note editor as well as Preview. Preview checks what a learner sees; the editor checks what the recipient also has stored. In this rehearsal, checking only Export rehearsal would have missed the sibling in Elsewhere.

An empty recipient checks the contents of the outgoing file. If the real destination already has related notes, rehearse that import separately with a copy of the destination: APKG imports can update matching notes.

## Make a smaller copy with two fields and one direction

For a small batch of ordinary text pairs, you can make the intended contents explicit. This recipe was rehearsed with the two example rows, unchanged stock **Basic**, and empty collections. It creates new notes with one forward card each.

Use it when fresh text is the desired result. It discards the original note identity, extra fields, card templates, and review history. Media, rich HTML, Cloze, image occlusion, and add-on behavior were outside this rehearsal.

1. **Keep the master collection intact.** Work from a local Notes in Plain Text export or copy the intended Front and Back values into a new file. Leave the original notes and templates alone. An export containing editor memos is an intermediate file to inspect, not the file to send.
2. **Prepare only the intended two columns.** Save the following as a UTF-8 plain-text file. Each data row contains one literal tab between the word and definition. Exclude EditorMemo, GUIDs, tags, deck columns, and note-type columns.

   ```text
   #separator:tab
   #html:false
   harbor	a sheltered place for ships
   meadow	a field of grass
   ```

3. **Create an empty preparation profile.** On desktop, use **File → Switch Profile**, add a profile such as `Share preparation`, and open it. Leave it disconnected from AnkiWeb. [Profiles have separate collections, while add-ons are shared](https://docs.ankiweb.net/manual/profiles); don't connect this temporary profile to your normal AnkiWeb account.
4. **Import the text once.** Use **File → Import** and select the new file. Choose unchanged stock **Basic** and a new deck such as `Shared vocabulary`. Confirm a tab separator, HTML disabled, column 1 mapped to Front, and column 2 to Back. Set **Existing notes** to **Duplicate**, and **Match scope** to **Note type**, matching the backend rehearsal. Check the preview before importing. The [text-import manual](https://docs.ankiweb.net/manual/importing/text-files) explains field mappings, headers, and duplicate handling.
5. **Inspect the preparation collection.** Expect two notes and two cards. Each note should contain only Front and Back. Preview both cards: harbor asks for its definition, and meadow asks for its definition. Search for `orchard` and the demo memo values; none should be present. Don't study or grade the cards during inspection.
6. **If you need an APKG, export this prepared batch.** Select its notes in Browse and use **Notes → Export Notes**. Choose the deck package format. For this text-only example, disable scheduling, media, deck presets, and older-version support, matching the rehearsal.
7. **Check that package in another empty recipient profile.** Import it with **Import any learning progress** off. Repeat the note count, card count, field, and Preview checks. This last import verifies the file you're about to share.

The rehearsed package gave the second empty recipient **2 notes, 2 cards, 2 new cards, and no review history**. Its note type had only Front and Back. Neither EditorMemo nor orchard was present.

For your own batch, write the expected note and card counts before importing. The example contains no tabs or line breaks inside its field values; more complex text needs the escaping described in Anki's import manual. A spreadsheet or editor can also change separators or encoding, so inspect the actual saved file and its import preview.

This smaller copy has a different purpose from [duplicating an Anki deck inside an existing collection](/blog/duplicate-anki-deck/). Keep it separate from your master. Before sending any export, check the recipient's cards, stored fields, and decks against the result you intended.

## How this guide was checked

Checked October 17, 2026 against Anki 26.09.3's released desktop source and the **26.9.3 Python package** on macOS 26.6.1, arm64. Automated backend rehearsals created temporary collections with fictional data, exported all three formats using the same selected note IDs, and imported the APKG files into empty collections. The two-field import and its later package import were also executed.

The desktop menus were checked in released source; the GUI, mobile clients, media, custom rich templates, and add-ons were not tested. No personal Anki profile or AnkiWeb account was used. AI tools substantially assisted the research, test scripts, drafting, and editorial work; this guide has not had human review. The illustration was AI-generated.
