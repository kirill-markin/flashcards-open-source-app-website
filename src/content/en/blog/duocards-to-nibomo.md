---
title: "How to Export DuoCards Vocabulary and Import It Into Nibomo"
description: "Download your DuoCards vocabulary as a CSV, check for missing translations, and turn three word pairs into Nibomo flashcards before importing the rest."
date: "2026-11-12"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/ff09828336aa67f631a91d5b631e569e7c03ef7db8db7db7a55a78d48e4dce16.webp"
keywords:
  - "DuoCards export"
  - "DuoCards CSV export"
  - "DuoCards to Nibomo"
---

A DuoCards export can give you the words you’ve saved without their translations. In one documented Italian export, `Parola` holds the word and `Livello` holds its study status, such as `In apprendimento` (“Learning”). Check what’s in your own CSV, then try making three cards with answers you’ve checked. [DuoCards export example in a public importer test](https://github.com/alessiomartini/flash-cards-app/blob/ea6696357b59778982e28193280db53fd4d57ac6/core/src/test/kotlin/com/engvocab/core/importer/DelimitedTextParserTest.kt#L500-L521)

![A market stallholder sets a third patterned cup on its matching saucer](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/ff09828336aa67f631a91d5b631e569e7c03ef7db8db7db7a55a78d48e4dce16.webp)

## Download your DuoCards word list

1. Sign in to DuoCards in a web browser and open the learning page.
2. Scroll below Memo’s Garden and open **Cards**. Click the download icon on the right to save the CSV.
3. Open the file through your spreadsheet’s import menu and select UTF-8 if asked. If the entire row lands in one cell, open the CSV in a text editor and look at the header. For a header like `Parola;Livello`, select the semicolon as the column separator.

[DuoCards export FAQ](https://duocards.com/en/faqs/#query-cards-export) · [DuoCards team’s CSV instructions](https://duocards.userjot.com/board/p/export-of-cards)

## Give each word a translation

Make a new sheet with two columns named `Front` and `Back`. Put the word or phrase you want to recall in `Front`. If your export includes translations, check the first few against their DuoCards cards before copying them into `Back`. If it only lists words and study levels, open the matching DuoCards cards and copy the translations yourself. Set aside any word whose meaning you can’t verify yet.

Save a few completed rows as a UTF-8 CSV. Here’s a practice file with three Spanish-to-English pairs. The quotes keep the comma inside each phrase when the CSV is read.

```csv
Front,Back
la brújula,the compass
te echo de menos,I miss you
"No, gracias.","No, thank you."
```

If an example sentence helps you remember the meaning, you can copy it into the answer cell. The prepared CSV creates new text cards. Keep your original DuoCards deck for its audio, images, and review history.

## Import three cards and check them

In the Nibomo web app, open the workspace where you want the cards. Go to **Library → Import → Import from another app**. Select **Choose files**, add the prepared CSV, then click **Start import** to send it to AI chat.

If your version lacks **Import from another app**, open **AI**, attach the same CSV, and send this request.

> Create one card per data row in this workspace. Use Front and Back exactly as written. Treat the first row as column headers.

[Getting started with Nibomo](/docs/getting-started/)

Once the chat finishes, open **Library → Cards**. With the practice CSV, you should find these three pairs.

| Front | Back |
| --- | --- |
| la brújula | the compass |
| te echo de menos | I miss you |
| No, gracias. | No, thank you. |

Check that `brújula` kept its accent, the commas stayed inside the phrases, and `Front,Back` was skipped. If a study status appears as an answer, check that the working CSV’s `Back` column contains translations. Once the saved cards match, import the remaining verified rows and leave the trial rows out of the next file.

This AI-assisted guide draws on DuoCards’ published instructions, one public CSV example, and Nibomo’s web app source. The sample pairs illustrate the expected cards.
