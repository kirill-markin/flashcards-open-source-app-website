---
title: "How to Import a Saved Cram CSV Into Nibomo"
description: "Find a saved Cram CSV after the shutdown, import it into Nibomo, and check that commas and multiline answers stay with the right cards."
date: "2026-11-13"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c389def3cbf6df5bb404372e65c501ebaffb7ffcf586827a21527bd594f3ab03.webp"
keywords:
  - "Cram CSV"
  - "import Cram flashcards"
  - "Cram to Nibomo"
---

Cram retired on November 9, 2026. If you saved a CSV before the shutdown, you can use it to make new flashcards in Nibomo. Open the file before you upload it. An answer can span two lines in a CSV and still belong to one card.

![Hands open an old envelope to reveal one clear sleeve with red, green, and blue projector gels and another with folded graph paper](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c389def3cbf6df5bb404372e65c501ebaffb7ffcf586827a21527bd594f3ab03.webp)

## Find your saved Cram flashcards

Search Downloads for files ending in `.csv` and try words from your deck title. Check your study folders, synced drives, old devices, and backups too. If a filename looks generic, open the file in a spreadsheet app and look for a question or term you remember beside its answer.

Cram disabled logins and ended downloads after the shutdown. If you still have the URL of a deck you made public, try searching for it in a third-party web archive. You may find a saved page with readable cards. [Cram's retirement notice](https://cram-support.zendesk.com/hc/en-us/articles/44009761289623-Important-Update-Cram-is-Retiring-Everything-You-Need-to-Know)

If you find card text in old notes or a saved page, put the questions in one spreadsheet column and the answers in the next. To paste them directly into Nibomo, replace any line breaks inside each cell with spaces so the preview reads each pair as one card. [Nibomo's spreadsheet import instructions](/docs/import-flashcards/#paste-from-a-spreadsheet)

## Check what belongs on each card

Keep the original file. In your spreadsheet, check a few rows to see which cells hold the front and back. If you have a large deck, copy a few complete rows into a separate sheet and save that as a sample CSV. Include the headings if your file has them and pick rows with punctuation or line breaks you want to keep.

This example uses made-up cards and column headings. Work from the pairs and any headings in your own file.

```csv
Front,Back
What are the primary colors of light?,"Red, green, and blue."
How do you find the area of a rectangle?,"Multiply length by width.
Use square units in the answer."
```

This CSV has two cards. In a spreadsheet, all three colors should appear in one answer cell, and both sentences about area should appear together in the next answer cell. The double quotes keep commas and line breaks inside a single cell. If an answer spills into another column or row, reopen the file using your spreadsheet app's CSV import option and select the comma separator for comma-separated data. If it's still split, put the complete answer back in one cell in your copy before saving.

## Import the CSV and check the saved cards

1. Open [Nibomo on the web](https://app.nibomo.com/?locale=en) and select the workspace where you want the cards.
2. Go to **Library → Import**. Under **From another app**, select **Import from Cram**.
3. Select **Choose files**, pick the CSV, then select **Start import**. Nibomo opens a new AI chat and sends the file. The chat needs an internet connection to read the CSV and can save cards as it goes.
4. When the chat finishes, open **Library → Cards**. Compare the new card count with the number of card pairs, then check a few fronts and backs. For the sample above, expect two cards. Look for all three colors on the first back and both sentences on the second. If the line break matters, check it on the saved card too.

If the sample looks right, import the remaining rows. If the chat stops partway through, check which cards it saved before sending the missing rows. Uploading the whole file again can create duplicates. The imported cards start a fresh review schedule in Nibomo.

*This AI-assisted guide draws on Cram's retirement notice, Nibomo's documentation, and the Nibomo web app source. The sample shows the expected result. Kirill Markin builds Nibomo and publishes this site.*
