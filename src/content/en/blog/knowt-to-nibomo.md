---
title: "How to Move Knowt Flashcards to Nibomo with a PDF"
description: "Save a Knowt flashcard set as a PDF, import it into Nibomo, and check that long answers still match their questions across page breaks."
date: "2026-11-12"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/e8a23462627d807f47f59e12d3854792c4b2f77126f95bac64e99d3bf0c303e2.webp"
keywords:
  - "export Knowt flashcards"
  - "import Knowt flashcards to Nibomo"
  - "Knowt flashcards PDF"
---

To move Knowt flashcards to Nibomo, save the set as a PDF and upload it through **Library → Import → Import from Knowt**. Start with one small set that has a long answer. If that answer runs across a page break, check which card it lands on. A matching card count alone won’t catch a sentence on the wrong back.

![A conservator checks an orange fish design that spans two stained glass panes](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/e8a23462627d807f47f59e12d3854792c4b2f77126f95bac64e99d3bf0c303e2.webp)

## Export a Knowt flashcard set as a PDF

1. Open **Materials** in Knowt on the web and find your flashcard set.
2. Open the set’s three-dot menu and choose **Export as PDF**.
3. In the print dialog, choose **Save as PDF** under **Destination**, then click **Save**.

Open the file and make sure it includes the first and last cards. If a long answer crosses a page break, find where it picks up on the next page. If the printout cuts off part of the answer, keep the original set open so you can recover the missing text. See [Knowt’s export instructions](https://help.knowt.com/en/articles/10714472-how-can-i-export-my-flashcards) for the print dialog.

## Import the Knowt PDF into Nibomo

1. Open the [Nibomo web app](https://app.nibomo.com/?locale=en) and switch to the workspace where you want the cards.
2. Go to **Library → Import → Import from Knowt**. Select **Choose files** and pick the `.pdf` file. The limit is 30 MiB per file.
3. Select **Start import**. Nibomo opens a new AI chat and sends the PDF with a request to import the Knowt cards into that workspace. This step needs an internet connection.
4. When the chat reports what it saved, open **Library → Cards**. Compare the saved cards with the Knowt set, starting with the ones around any page break.

If you don’t see **Import from Knowt** in your installed app, open Nibomo in your browser and switch to the same workspace.

## Check the cards on either side of a page break

Say a two-card algebra set prints with “x = 5.” at the bottom of page one. Page two opens with “x = −5 also works because (−5)² = 25,” followed by the next question. In this example, the sentence at the top of page two belongs to the previous card. Here’s what the saved cards should look like:

| Front | Expected back |
| --- | --- |
| What are both solutions to x² = 25? | x = 5. x = −5 also works because (−5)² = 25. |
| What is the principal square root of 25? | 5. |

If the first back stops at “x = 5,” check whether the missing sentence landed on the second card. Both cards can be present and still teach the wrong answer. Use the original Knowt set to restore the sentence to the first back and remove it from the second if needed. If the chat saved only some cards, compare the saved cards with the Knowt set to find what’s missing. Ask the original chat to import only those cards, or add them manually.

Keep the original set and PDF until you’ve checked the result. The PDF carries the visible card content; keep Knowt as your record of past study sessions. For other file types, see the [Nibomo import guide](/docs/import-flashcards/).

*Nibomo publishes this guide. AI tools helped research and write it using Knowt’s help documentation and Nibomo’s import code. The algebra example shows the expected result for an illustrative PDF layout.*
