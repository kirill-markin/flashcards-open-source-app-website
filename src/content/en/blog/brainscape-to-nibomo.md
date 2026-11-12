---
title: "How to Export Brainscape Flashcards to CSV and Import Them Into Nibomo"
description: "Export a deck with Brainscape Pro, move clarifiers and footnotes into a two-column CSV, and check the cards Nibomo saves."
date: "2026-11-12"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/4af0b82b5734c4ee7279b1ce0b0ec413a03f5b7bfb3a75dbe4e32d19c7cfb898.webp"
keywords:
  - "Brainscape CSV export"
  - "export Brainscape flashcards"
  - "import Brainscape flashcards into Nibomo"
  - "Brainscape to Nibomo"
---

A Brainscape answer can have a clarifier or footnote you still want to see after you flip the card. When you move the deck to Nibomo, put that text in the answer cell of your CSV. Try a few cards first so you can check that the extra text lands on the right side.

![A fieldworker tucks a small stream sketch inside the back cover of a notebook beside a creek.](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/4af0b82b5734c4ee7279b1ce0b0ec413a03f5b7bfb3a75dbe4e32d19c7cfb898.webp)

## Export a deck from Brainscape

In Brainscape, open the deck's options menu and choose the export option. You'll need **Brainscape Pro** to export a deck. Choose CSV where offered, keep the original download, and work on a copy. If you already have the questions and answers in a spreadsheet, save a CSV from that sheet and skip the export. [Brainscape's backup instructions](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards) · [Brainscape's guide to editing and export formats](https://brainscape.zendesk.com/hc/en-us/articles/17765084963725-Tips-for-creating-and-editing-your-flashcards-in-Brainscape)

## Prepare a two-column CSV

Open the copy in a spreadsheet editor and identify the question and answer text. Brainscape cards can also have separate fields for prompts, clarifiers, and footnotes. Compare a card with extra fields against your file to see which text made it into the export. If you want to keep a note that the file leaves out, add it from the original card. [Brainscape's guide to card fields](https://brainscape.zendesk.com/hc/en-us/articles/30335658039309-Importing-data-into-multiple-fields-on-the-flashcards)

Make one row per card with two columns, `Front` and `Back`. Keep a hint on the front if you want to see it before answering. Put explanations, examples, and notes that give away the answer on the back.

This example uses made-up rows and column names. Use the headings and card text in your own file.

| Question | Answer | Answer clarifier |
| --- | --- | --- |
| What is a watershed? | An area of land that drains to a common outlet. | The outlet could be a stream, lake, or bay. |
| What does a contour line connect? | Points at the same elevation. | |

Append the first card's clarifier to its answer cell and save the two columns as a UTF-8 CSV. The quotes around the first answer keep its commas inside the same cell.

```csv
Front,Back
What is a watershed?,"An area of land that drains to a common outlet. The outlet could be a stream, lake, or bay."
What does a contour line connect?,Points at the same elevation.
```

## Import into Nibomo and check what saved

1. Open your destination workspace in Nibomo and go to **Library → Import → Import from Brainscape**. If the option is missing from your installed app, try [Nibomo on the web](https://app.nibomo.com/?locale=en).
2. Click **Choose files**, select the CSV, then click **Start import**. Nibomo opens a new AI chat and sends the file. This step needs an internet connection, and the chat can save cards as it works.
3. When the chat finishes, open **Library → Cards**. Compare the number of new cards with the number of data rows, then compare both sides of a few cards with the spreadsheet. For the example above, look for two cards. The watershed answer should include both sentences, the contour-line answer should end at “elevation,” and neither card should contain the column headings.

For a big deck, start with a small file that includes a plain card and one with an extra field. If the results look right, send the remaining rows in batches. If the chat stops mid-import, check what it saved and retry with the missing rows to avoid duplicates.

The CSV workflow carries card text. Keep Brainscape available for images, audio, confidence ratings, and study history you want to refer to. Your imported cards start a fresh review schedule in Nibomo.

## Preview cards before saving

Use this method with single-line cells. Before copying, replace line breaks inside questions and answers with spaces. With **New line** selected, Nibomo treats every line break as the start of a new card, even inside a cell.

Copy the two spreadsheet columns without the headings. Sign in to Nibomo, then go to **Library → Import → Import from a spreadsheet** and paste them there. Set **Between front and back** to **Tab** and **Between cards** to **New line**. Check that each answer, including any clarifier or footnote, is complete in the preview before importing. This path also works if you can't find the Brainscape option. See the [Nibomo import guide](/docs/import-flashcards/) for both workflows and file limits.
