---
title: "How to Export Flashcards World Cards and Import Them Into Nibomo"
description: "Export a Flashcards World set as CSV or Excel, bring the card text into Nibomo, and check both sides with a three-card example."
date: "2026-11-12"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/14bb47f99909a01f5349ecf1fbb0a3db7c946718487b01d4553aefb04452285b.webp"
keywords:
  - "Flashcards World export"
  - "Flashcards World CSV export"
  - "Flashcards World to Nibomo"
---

Start with one Flashcards World set and keep its export open while you check the copy in Nibomo. Pick a set with an accent, a comma in an answer, or a pair of quotation marks. Those are the details a card count can miss.

![A printmaker holds a test print beside its stamp, with the same three leaves and comma-shaped mark visible on both](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/14bb47f99909a01f5349ecf1fbb0a3db7c946718487b01d4553aefb04452285b.webp)

## Export one set from Flashcards World

Flashcards World documents two ways to get a CSV:

- **On the web**, open the set, go to **Edit Set**, and look for **Export** or **Download CSV**.
- **On iOS or Android**, open the side menu from the set list, choose **Export**, and pick one set. Save the CSV from your device's share sheet.

The web editor also offers an Excel export. Either format gives you a file you can inspect in a spreadsheet. Keep the original export, especially if it contains extra multiple-choice answers. For a basic flashcard, find the column with the prompt and the one with the correct answer. [Flashcards World export instructions](https://flashcards.world/help/import-export/#how-to-export-your-sets) · [Flashcards World web guide](https://flashcard.world/howto/)

## Import the CSV or Excel file into Nibomo

1. In the [Nibomo web app](https://app.nibomo.com/?locale=en), open the workspace where you want the cards.
2. Go to **Library → Import → Import from another app**.
3. Click **Choose files**, select your `.csv` or `.xlsx`, and click **Start import**. This starts an AI chat that can save cards directly into the current workspace.
4. When the chat finishes, open **Library → Cards**. Count the new cards and compare both sides with the source. Check a few rows with accents, punctuation or extra columns.

If the import menu is missing in your version of the app, you can attach the file in **AI chat** and ask it to import the front and back of each card. Keep Flashcards World for your original study history, media and multiple-choice settings. This guide covers moving card text.

## Preview both columns before saving

To check each pair before creating cards, open the export in a spreadsheet and copy the two columns you want. Select the prompt first and the correct answer second. Leave out any header row and extra answer choices.

In Nibomo, choose **Library → Import → Import from a spreadsheet**. Paste the cells, set **Between front and back** to **Tab** and **Between cards** to **New line**, then look at the preview. Fix any split rows or extra quotation marks there before clicking **Import** with the displayed card count.

## Check three cards with accents and punctuation

You can save this example as a UTF-8 file named `french-phrases.csv` and open it in a spreadsheet. Copy its cells for the preview route, or use the file to try the AI import.

```csv
café,coffee
À demain !,"See you tomorrow, then!"
Elle a dit « bonjour ».,"She said ""hello""."
```

Look for three cards whichever route you try. The first front should say `café`. The second back should say `See you tomorrow, then!` on a single card. The third back should say `She said "hello".` with one pair of quotes. In the CSV, the outer quotes keep the comma inside the answer, and doubled inner quotes represent a single quote mark each.

This AI-assisted guide uses Flashcards World's documentation for the export steps. In a local check, Nibomo's web spreadsheet parser and the import package it built preserved all three pairs after the example was converted to tab-separated rows. The AI file transfer still needs an end-to-end check with a real Flashcards World export.

Once the first set matches, import the rest one set at a time. The [Nibomo import guide](/docs/import-flashcards/) explains the file and spreadsheet options and how to split larger imports.
