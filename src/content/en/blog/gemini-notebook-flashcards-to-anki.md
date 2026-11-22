---
title: "How to Import Gemini Notebook Flashcards Into Anki"
description: "Download Gemini Notebook (formerly NotebookLM) flashcards as a CSV and import them into desktop Anki. Try three rows to see which settings keep your answers."
date: "2026-11-22"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/9039be31ec223e00ec01d2d95c225f037b4e30f259657923713dadf286ede796.webp"
keywords:
  - "NotebookLM flashcards to Anki"
  - "Gemini Notebook flashcards export"
  - "Anki CSV import"
---

Download your flashcards as a CSV from Gemini Notebook, formerly NotebookLM. In desktop Anki, map questions to **Front** and answers to **Back**, then set **Existing notes** to **Preserve** and **Match scope** to **Note type**. Say the Basic card you already study answers “What does la gare mean?” with “Railway station.” When you import that same question as a Basic note, Anki keeps your answer even if the CSV says “Train station” and you pick a different deck. [Google’s rename announcement](https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/)

![A tile restorer holds a blue star tile next to its match on a courtyard wall](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/9039be31ec223e00ec01d2d95c225f037b4e30f259657923713dadf286ede796.webp)

## Download the CSV from the flashcard viewer

Open your notebook and select your generated **Flashcards** in **Studio**. In the flashcard viewer, use the download control to save the CSV. Google says a publisher’s restrictions may block downloads if the notebook uses a Play Books ebook as a source. [Gemini Notebook flashcard help](https://support.google.com/gemininotebook/answer/16958963?hl=en)

## Check the fields in Anki’s import preview

1. In desktop Anki, choose **File > Import** and open your CSV. Use **Comma** as the separator for a comma-separated file. Leave **Allow HTML in fields** off for plain text. [Anki’s text import guide](https://docs.ankiweb.net/manual/importing/text-files)
2. Choose the standard **Basic** note type and the deck where you want new cards to go. Under **Field mapping**, select the question column for **Front** and the answer column for **Back**. Read a few rows in the preview.
3. If a line like `Question,Answer` shows up as a question and answer in the preview, remove that line from a copy of the CSV and reopen the copy. Save it in UTF-8 so characters such as `é` survive. In a test with that extra line, Anki imported it as a note.

For a plain CSV like the one below, Anki matches on the first field of notes that use the selected note type. In **Basic**, that field is **Front**. Check the note type of the cards you want Anki to recognize. Importing as **Basic** can add a second note with the same question if the existing note uses a different type. [Anki’s duplicate matching rules](https://docs.ankiweb.net/manual/importing/text-files#duplicates-and-updating)

## See what happens to the same question in another deck

Use **File > Switch Profile > Add** to create a test profile and leave it disconnected from AnkiWeb. A profile has its own collection, so you can test matches across decks there. Create two decks called `French core` and `Gemini Notebook trial`. In `French core`, add a standard **Basic** note with `What does la gare mean?` on the front and `Railway station` on the back. [Anki’s profile guide](https://docs.ankiweb.net/manual/profiles)

Save these three lines as `notebook-rehearsal.csv` in UTF-8. In the preview, check that the quoted coffee question stays in one field and `café` appears in the answer column. Import into `Gemini Notebook trial` using **Preserve** and **Note type**.

```csv
What does la gare mean?,Train station
"In French, how do you write coffee?",café
What is the English meaning of la gare?,Train station
```

| Existing notes | Match scope | Result starting with the single Basic note |
| --- | --- | --- |
| **Preserve** | **Note type** | Two new notes in `Gemini Notebook trial`. Anki matches the first question across decks and keeps `Railway station` in `French core`. |
| **Preserve** | **Note type and deck** | Three new notes in `Gemini Notebook trial`. Anki checks the destination deck for matches, so the first question ends up in both decks. |
| **Update** | **Note type** | Two new notes in `Gemini Notebook trial`. Anki changes the answer in `French core` to `Train station`. |

The third row asks about *la gare* in different words. It adds a note in all three runs because it has a different **Front**. Look for that kind of overlap when you review the new cards. To try a different setting, start again with a fresh test collection containing just the original note.

*The import results come from a test of Anki’s 26.09.4 backend on macOS. The export steps come from Google’s help. AI assisted with drafting and editing.*

## Import the file into your regular collection

Try your own export in the test profile to check the mapping. In your regular profile, choose **File > Create Backup** before importing. Confirm the destination deck and set **Existing notes** to **Preserve** and **Match scope** to **Note type**. [Anki’s backup guide](https://docs.ankiweb.net/manual/backups)

After importing, check the summary for how many notes Anki added and matched. In **Browse**, open a few new cards and find an existing card whose answer you wanted to keep.

If you’re making deliberate corrections to cards you already review, see the guide to [updating existing Anki notes from a CSV](/blog/anki-csv-update-existing-notes/). For ideas on reviewing the cards you’ve imported, see [how to turn NotebookLM flashcards into a spaced-repetition routine](/blog/notebooklm-flashcards-to-spaced-repetition/).
