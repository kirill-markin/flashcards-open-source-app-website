---
title: "How to Move Gizmo Flashcards to Anki With a CSV"
description: "Copy complete Gizmo prompts and answers into a UTF-8 CSV, test the import in desktop Anki, and catch missing answers and duplicate fronts."
date: "2026-11-17"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/5ad1d1a70bb2123be8ded5fe90b93ba1daec68dd1a6d554edd37388b70790273.webp"
keywords:
  - "Gizmo to Anki"
  - "move Gizmo flashcards to Anki"
  - "Anki CSV import"
---

A PDF from one public Gizmo deck showed pairs labeled **Front** and **Back**, and one answer was cut short. To move your own Gizmo cards to desktop Anki, check both sides against the source, put one complete pair on each row of a CSV, and import the file with Anki's **Basic** note type. [Public Gizmo deck test](/blog/gizmo-export-pdf/)

![An archive worker compares a film strip with a matching print of a pier while a creased strip lies off to one side](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/5ad1d1a70bb2123be8ded5fe90b93ba1daec68dd1a6d554edd37388b70790273.webp)

## Check the cards in Gizmo

Copy cards you own or have permission to reuse. For a card you can edit, open its three-dot menu and choose **Edit** to see the front and back text. Put the prompt in the first column of your spreadsheet and the answer in the second. Check the cells together against the original so the right answer stays with each prompt. [Gizmo's card editor](https://help.gizmo.ai/en/articles/13761411-how-do-i-edit-or-manage-my-cards)

If you'd like a reference you can scan, find the deck in **My Decks**, open its three-dot menu, and choose **Print**. In the browser's print dialog, choose **Save as PDF**. Compare a long answer in the PDF with the original, then check every pair you copy from the file. If a prompt or answer is missing or cut short, recover the full text from Gizmo before copying the card. [Gizmo's PDF instructions](https://help.gizmo.ai/en/articles/18228622-how-do-i-export-print-or-download-my-cards-as-a-pdf)

Keep a list of cards you still need to repair, including any that depend on an image, recording, or quiz interaction. This CSV carries the prompt and answer as text. Rebuild cards that need media or quiz behavior separately, and keep the original Gizmo deck for those cards and your review history. New cards in Anki start with a fresh schedule.

## Make a two-column CSV

Save the example below as `gizmo-practice.csv` in a plain-text editor using UTF-8. The first two lines tell Anki to use commas as separators and read the fields as plain text. Start the card rows immediately below them. A spreadsheet heading such as `Front,Back` would be read as another card. [Anki's text file format](https://docs.ankiweb.net/manual/importing/text-files)

```csv
#separator:Comma
#html:false
What does banco mean in a money context?,bank
What does banco mean in a park?,bench
What does árbol mean?,"tree, as in ""a tall tree"""
```

The two `banco` prompts give each meaning its own context and Anki a distinct first field for each note. If two of your prompts are identical, compare the answers before you export. Keep one row for an exact repeat. For different answers, make each prompt specific enough to tell you which answer to recall.

In the last row, the outer quotes keep the comma inside the answer. Each doubled inner quote becomes one visible quote in `tree, as in "a tall tree"`. For your own cards, export the two columns from your spreadsheet as a comma-separated UTF-8 CSV. Let the spreadsheet handle quoting, then add the two Anki directive lines at the top in a plain-text editor. [Anki's CSV quoting and UTF-8 guidance](https://docs.ankiweb.net/manual/importing/text-files)

## Try the import in a temporary Anki profile

1. In desktop Anki, open **File → Switch Profile → Add**. Open the temporary profile, leave it disconnected from AnkiWeb, and create a deck called `Gizmo rehearsal`. [Anki's profile guide](https://docs.ankiweb.net/manual/profiles)
2. Choose **File → Import** and open `gizmo-practice.csv`. Select the standard **Basic** note type and the rehearsal deck. Under **Field mapping**, map column 1 to **Front** and column 2 to **Back**. Check that **Field separator** is **Comma**, the preview shows two columns, and **Allow HTML in fields** is off. Fix the CSV before importing if either field is split, missing, or garbled in the preview. [Anki's text import guide](https://docs.ankiweb.net/manual/importing/text-files)
3. Set **Existing notes** to **Preserve** and **Match scope** to **Note type**. Import the file. With the standard Basic note type, the three rows should give you three notes and three cards. In **Browse**, select the rehearsal deck and check which answer goes with each `banco` prompt. Check the accent, comma, and quotes on the `árbol` card too. [Anki's Basic note type](https://docs.ankiweb.net/manual/getting-started#note-types) · [Anki's Browse window](https://docs.ankiweb.net/manual/browsing)
4. Rehearse with a small CSV from your own deck before preparing the full import. Include a long answer and any pair that's easy to mix up. Compare the number of newly added notes with the number of complete pairs in the file and check the imported fronts and backs. Resolve blank fields, misplaced answers, and unexpected matches before continuing.

## Check for matches in your usual Anki profile

Before importing into your usual profile, back up the collection. In **File → Export**, choose **Anki collection package (.colpkg)** and include media if your collection has images or audio you want to keep in the backup. [Anki's backup guide](https://docs.ankiweb.net/manual/backups#manual-colpkg-backups)

Open the full CSV with **File → Import**, pick the destination deck, and check the same Basic field mapping and two-column preview. Use **Preserve** for this import. If Anki finds a Basic note with the same front, **Preserve** leaves that note alone. With **Match scope** set to **Note type**, that match can be in another deck, so choosing a new destination deck can still leave some cards out. **Note type and deck** checks only notes of that type that have a card in the destination deck. **Update** changes an existing match in place, and **Duplicate** creates another note. [Anki's duplicate matching guide](https://docs.ankiweb.net/manual/importing/text-files#duplicates-and-updating) · [Anki's released import labels](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/ftl/core/importing.ftl#L143-L156)

After importing, check the report and open the destination deck in **Browse**. If the report shows an unexpected match or fewer new notes than you expected, compare the matching fronts and backs before importing again. An existing note with the same answer may be all you need. If the answers differ, clarify the incoming prompt and try the corrected row. Keep unresolved cards on your repair list and leave the Gizmo deck available for comparison.

## What the sample test checked

An automated test on Apple silicon macOS ran the exact CSV above through Anki's Python backend 26.9.4 using a disposable collection. The import created three notes and three cards. The stored front and back text matched the file after decoding HTML entities. Reimporting with **Existing notes** set to **Preserve** reported three first-field matches and kept the totals at three. With **Match scope** set to **Note type**, selecting a different destination deck also matched all three notes and added zero cards to that deck. The desktop menu steps follow Anki's manual and the interface text in the corresponding release. [Anki release 26.09.4](https://github.com/ankitects/anki/releases/tag/26.09.4)

*AI was used to research, draft, and edit this guide and create its cover image.*
