---
title: Import flashcards into Nibomo
description: Move your cards from Quizlet, Anki, or another flashcard app. Find the right export format and learn how to check your cards before a large import.
---

Open [Nibomo](https://app.nibomo.com/?locale=en), switch to the workspace where you want the cards, then go to **Library > Import**. Under **From another app**, choose the app you used. Each brand has its own entry, even when it uses the same file format as another app.

The options below are available in the web app. If you don't see the menu or the source you need on iPhone, iPad, Mac, or Android, use the web app. If you use Nibomo as a guest on your device, sign in there first. In the web app, sign in to the same Nibomo account and select the workspace where you want the cards before importing.

## Choose your source

| Source | What to bring | Import method |
| --- | --- | --- |
| Quizlet | Copied export text | Paste into the Quizlet import screen |
| Anki | `.apkg` deck or `.colpkg` collection | Choose files |
| Noji | `.csv` or `.ofc` | Choose files |
| Knowt | `.pdf` | Choose files |
| RemNote | `.apkg`, `.md`, or `.txt` | Choose files |
| Brainscape | `.csv` | Choose files |
| StudySmarter | `.csv` | Choose files |
| Cram | `.csv` | Choose files |
| Mochi | `.mochi` | Choose files |
| SuperMemo | `.xml` | Choose files |
| AlgoApp (formerly AnkiApp) | `.zip` or `.xml` | Choose files |
| Another app | `.csv`, `.txt`, `.xlsx`, `.pdf`, `.json`, `.xml`, `.md`, `.docx`, or `.zip` | Choose files under **Import from another app** |
| Spreadsheet | Copied rows with a front and back for each card | Paste under **Import from a spreadsheet** |
| Nibomo | A `flashcards.zip` exported by Nibomo | Preview under **Import from Nibomo** |

For AlgoApp, look for **AnkiApp** if your import menu shows the former name. Anki is a separate entry.

For an older Excel `.xls` file, save it as `.xlsx` or `.csv` before importing, or copy the front and back columns and [paste them into the spreadsheet importer](#paste-from-a-spreadsheet).

## Import from another flashcard app

1. In the source app, export the cards you want to move. For Quizlet, open your set, choose **Export**, and copy the text. A tab between term and definition and a new line between cards work well. You can export only original sets you created yourself, and only on the Quizlet website.
2. In Nibomo, go to **Library > Import** and open the matching entry. Paste the copied text for Quizlet. For other sources, choose the exported file or files. If your app has no entry but gives you a supported export, such as a PDF, use **Import from another app**.
3. Select **Start import**. Nibomo opens a new AI chat and sends the import request with your files or pasted text. This requires an internet connection. Each AI import file can be up to **30 MiB**. If yours is larger, try exporting smaller decks or sets separately.
4. Check the result in **Library**. AI chat can save cards in batches as it goes. If it stops partway through, check which cards are already in Nibomo and ask it to continue with the rest before you retry the whole export.

### Check a small import first

Keep the original export and start with one small deck or set. Compare the card count and check a few fronts and backs, tags, and any images or special formatting you rely on. If you want AI chat to show you a sample before saving, ask it to preview a small batch without saving. You can do this by attaching the export in a new AI chat and writing your own request instead of using **Start import**.

Cards imported by AI start as new cards in Nibomo. Previous review history and due dates don't carry over. How much of the original organization, formatting, and media comes through depends on what the export contains and what AI chat can read from it. Check the result before relying on it or deleting anything in the source app.

## Paste from a spreadsheet

Use **Library > Import > Import from a spreadsheet** for plain front and back pairs. Copy two columns from your spreadsheet, leaving out the header row, then paste them into the import screen. For spreadsheet cells, start with **Tab** between the front and back and **New line** between cards. Change the separators if your text uses something else.

Preview the cards, fix any incomplete rows, and choose any tags you want to apply. Then select **Import** to save the cards. This route doesn't use AI chat.

## Import a Nibomo ZIP

Use **Library > Import > Import from Nibomo** for a `flashcards.zip` previously exported from Nibomo. Choose the ZIP without unpacking it. Check the card and media counts and any warnings in the preview, then confirm the import and inspect individual cards and media in **Library**. This route can carry the cards, tags, and media in the package. It doesn't use AI chat.
