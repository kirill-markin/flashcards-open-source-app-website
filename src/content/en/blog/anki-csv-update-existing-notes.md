---
title: "Anki CSV Import: Update Notes Without Creating Duplicates"
description: "Use a small Anki CSV rehearsal to check field matching, note types, deck scope, and edits before updating the notes you already study."
date: "2026-09-29"
image: "/blog/anki-csv-update-existing-notes.png"
keywords:
  - "Anki CSV update existing notes"
  - "Anki import duplicates"
  - "Anki CSV import"
  - "Anki first field matching"
  - "Anki GUID"
---

You correct an answer in your spreadsheet, import the CSV, and expect the Anki note you've already studied to change. Then you rewrite a question and expect the same thing. Those two edits can produce different results: one update and one new note.

For an ordinary CSV update, keep the first note field unchanged and use the same note type. Choose **Update** for existing notes; **Ignore** skips matches, and the duplicate option adds copies. Updates preserve scheduling. See [Anki's matching rules](https://docs.ankiweb.net/importing/text-files.html#duplicates-and-updating).

The exercise below gives you two files, a prediction for each row, and a final worksheet to compare with Anki. These are documentation-derived expectations, checked September 29, 2026. We haven't executed this rehearsal in Anki.

![A cobbler fits a new rubber sole to a worn leather boot while its removed sole rests on the workbench](/blog/anki-csv-update-existing-notes.png)

## Start somewhere you can throw away

In desktop Anki, use **File > Switch Profile** to create a disposable profile. Leave it disconnected from AnkiWeb. [Each profile has its own collection](https://docs.ankiweb.net/profiles.html).

Start with zero notes. Create a deck called `CSV rehearsal`, and use the standard **Basic** note type, with its unchanged Front and Back fields and single card template. Don't use Basic (and reversed card), cloze notes, or a customized template for this exercise.

A new deck alone doesn't isolate the rehearsal from your existing notes. Keep this first attempt simple: no media, tags, custom IDs, or GUID columns.

## Import two notes, then predict the next import

Save this as `rehearsal-start.csv` in UTF-8. Copy only the two data lines; don't add a `Front,Back` heading row.

```csv
Which planet is closest to the Sun?,Mercury
What is the chemical symbol for gold?,Au
```

Before importing, set up the preview as follows:

| Setting | Use for both imports |
| --- | --- |
| Separator | Comma |
| Note type | Basic |
| Destination deck | CSV rehearsal |
| Column 1 | Front |
| Column 2 | Back |
| Existing notes | Update |
| Match scope | Note type |
| HTML interpretation | Off |

In the preview, check that the entire planet question maps to Front and `Mercury` maps to Back. These [text-import options](https://docs.ankiweb.net/importing/text-files.html) apply to both files.

Import once. The expected starting state is **two notes and two cards**. Open Browse and inspect both answers. If you see a heading row, a whole CSV line in Front, or more than two notes, stop here and resolve that before proceeding.

Now save a second file, `rehearsal-edit.csv`:

```csv
Which planet is closest to the Sun?,Mercury is the closest planet to the Sun.
Gold has which chemical symbol?,Au
What is the chemical symbol for silver?,Ag
```

Before importing, write down your prediction for each row:

| Incoming row | Intended edit | Expected result in this setup |
| --- | --- | --- |
| Planet question | Expand the answer | Update the existing planet note |
| Reworded gold question | Rewrite the prompt | Add a note; leave the original gold note present |
| Silver question | Add new material | Add a note |

The gold row is the useful trap. To a person, both questions ask the same thing. In this setup, their Front values differ. Your spreadsheet contains three rows, but that doesn't mean Anki should finish with three notes.

## Check the actual content, not just the import message

Import the second file once with the same settings. The predicted change is **one update and two additions**, giving **four notes and four cards**:

| Front | Back |
| --- | --- |
| Which planet is closest to the Sun? | Mercury is the closest planet to the Sun. |
| What is the chemical symbol for gold? | Au |
| Gold has which chemical symbol? | Au |
| What is the chemical symbol for silver? | Ag |

In Browse, find the planet question and confirm there's just one copy with the expanded answer. Then search for gold and inspect both prompts. The old question surviving is part of the expected outcome, even though it was absent from the second CSV.

Keep a short record beside your files: starting count, predicted additions, predicted updates, final count, and anything unexpected. A correct total alone isn't sufficient; two wrong changes can cancel each other numerically.

These fresh cards can't demonstrate preserved review history. For that check, use a copy of an already-studied note later. Record its due date and interval before and after importing, without reviewing it between those checks.

## When your results disagree with the worksheet

Use the first unexpected row as your investigation point. Avoid importing the full file repeatedly while changing several settings at once.

| What you see | What to inspect next |
| --- | --- |
| A second planet note | Compare Front values, note types, and the existing-note action |
| The planet row was skipped or its short answer remains | Inspect the existing-note action and Back mapping |
| A question appears as an answer | Reopen the column mapping preview |
| Two gold questions | Expected here; decide how you'll identify prompt edits |
| An unexpected total | Count notes, then inspect each of the four expected rows |

**Note type** scope matches across decks; **Note type and deck** restricts matches to the destination deck. Updates stay in their current decks. Template overrides can redirect new cards. [Anki documents these distinctions](https://docs.ankiweb.net/importing/text-files.html).

Write the intended deck beside each row in your own worksheet. That exposes a separate question from “did the text change?”: “did I update the note I meant to update?” The same concern comes up when [moving CSV material from Mochi to Anki](/blog/mochi-to-anki/).

## If you need to rewrite Front, preserve the GUID

For first-field edits, export notes with their Anki-generated GUIDs. Preserve those values and `#guid column:N`, where `N` is the GUID column number. Never invent GUIDs or substitute spreadsheet row numbers. [Anki's GUID instructions](https://docs.ankiweb.net/importing/text-files.html#guid-column) explain identity matching.

Use this for wording corrections to the same question. If you're replacing the fact being tested, consider a new note so its history reflects learning that fact.

For your next rehearsal, pick one awkward question from the exported copy. Save its original row separately, change only its wording, and predict one update with zero additions. Keep the export's separator and headers intact instead of treating it as another comma-separated sample. Check the preview, then inspect the resulting note and its history. When sorting the spreadsheet, select complete rows so each identifier stays beside its content.

## Apply the same worksheet to your real collection

Back up before making the real update. A `.colpkg` collection package includes scheduling; importing it replaces the current collection's cards. Import your rehearsal copy only into a separate unsynced profile. See [Anki's export documentation](https://docs.ankiweb.net/exporting.html) and our [APKG versus COLPKG guide](/blog/anki-apkg-vs-colpkg/).

Choose a small representative batch: an answer correction, a prompt rewrite, and a genuinely new note. Record the expected outcome for each, rehearse against the copied collection, and compare content, counts, decks, and scheduling. Once those agree, you have a concrete basis for importing the larger file.
