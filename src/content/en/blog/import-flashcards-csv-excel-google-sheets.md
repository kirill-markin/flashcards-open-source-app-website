---
title: "Import Flashcards From CSV, Excel, or Google Sheets"
description: "Turn two spreadsheet columns into Nibomo flashcards. Try a three-card example, fix split answers in the preview, or upload a CSV or Excel file to AI chat."
date: "2026-11-12"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3e4ca473282df44df1c2e66b03511f8028cf153588b3933e08b516e8fe08ddd4.webp"
keywords:
  - "import flashcards from CSV"
  - "Excel to flashcards"
  - "Google Sheets to flashcards"
  - "Nibomo spreadsheet import"
---

The comma in `Bonjour, ça va ?` belongs on the front of the card. Paste a raw CSV into Nibomo with **Comma** as the separator and the front can end up as just `"Bonjour`. Copy the cells from Excel or Google Sheets and use a tab between the two columns to keep the question intact.

In the [Nibomo web app](https://app.nibomo.com/?locale=en), open the workspace where you want the cards. **Library → Import → Import from a spreadsheet** gives you an editable preview of the rows you paste. **Import from another app** accepts a `.csv` or `.xlsx` file and sends it to AI chat. Use the web app if those options are missing from your installed app.

![A hand lifts the cord connecting one of three pairs of knitted mittens on a wooden bench](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3e4ca473282df44df1c2e66b03511f8028cf153588b3933e08b516e8fe08ddd4.webp)

## Try it with three cards

Save this as `french-practice.csv` in UTF-8 and open it in Excel or Google Sheets. The station answer takes up two lines inside a single cell. CSV quotes can hold both a comma and a line break inside a field. [CSV format reference](https://www.rfc-editor.org/rfc/rfc4180#section-2)

```csv
Front,Back
"Bonjour, ça va ?","Hi, how are you?"
Où est la gare ?,"Where is the station?
Ask this when you need directions."
Merci,Thank you
```

1. In a copy of the sheet, replace the line break in **B3** with a space. Copy **A2:B4** so the first column supplies the fronts, the second supplies the backs, and the header stays in the sheet.
2. In Nibomo, open **Library → Import → Import from a spreadsheet**. Paste into **Terms and definitions**. Set **Between front and back** to **Tab** and **Between cards** to **New line**.

You can also copy this block straight into Nibomo. It has a tab between each question and answer.

```text
Bonjour, ça va ?	Hi, how are you?
Où est la gare ?	Where is the station? Ask this when you need directions.
Merci	Thank you
```

The preview should have three cards in this order.

| Front | Back |
| --- | --- |
| Bonjour, ça va ? | Hi, how are you? |
| Où est la gare ? | Where is the station? Ask this when you need directions. |
| Merci | Thank you |

To put the line break back, edit **Back** on the station card in the preview. Put `Ask this when you need directions.` on its own line. Make the edit after choosing separators, since changing a separator rebuilds the preview from the pasted text. Select **Import 3 cards**, then open the cards in **Library** and compare both sides with the original sheet.

## Why three rows can turn into five

Paste the raw CSV sample with **Comma** and **New line** and the text parser returns five entries. It splits each line at the first comma and treats quotes as ordinary characters. The header becomes a card, the greeting gets cut off after `"Bonjour`, and the second line of the station answer becomes a front with an empty back. The preview flags that empty back. The chopped greeting still has text on both sides, so check the wording as well as the count.

If your own preview shows a header card, copy the range again without the header. If an answer spills into a separate card, replace the line breaks inside cells in a copy of the sheet and paste again. Restore any line breaks you need in the preview. If backs are empty across the whole preview, check that you copied both columns and chose **Tab**. For an isolated blank, fill in the missing side or delete that entry, then check the count again.

## Upload a CSV or Excel file to AI chat

If you have a `.csv` or `.xlsx` file you want AI chat to read, make a small test copy with just the front and back columns. Keep the original file so you can compare the wording later.

- In Excel, you can use the `.xlsx` file as-is. To export one tab, select it and use **File → Save As** or **Save a Copy** to save a CSV. [Microsoft’s CSV export instructions](https://support.microsoft.com/en-us/excel/save-a-workbook-to-text-format-txt-or-csv)
- In Google Sheets, select the tab with your cards and choose **File → Download → Comma-separated values (.csv)**. [Google Sheets download instructions](https://support.google.com/docs/answer/9331167?hl=en)

Open the exported CSV in a spreadsheet once to check that it contains the rows you meant to send. In Nibomo, choose **Library → Import → Import from another app → Choose files**, attach the file, and select **Start import**. This opens a new AI chat and needs an internet connection.

For the sample, look for three saved cards in **Library**. Check the comma in the French greeting and the comma in its English answer. Open the station card and check that both lines are on the back. AI can change the wording or split a row, so compare the result before uploading the rest of your spreadsheet. If the chat stops partway through, see which cards it already saved before retrying.

The three-card paste and the five-entry CSV example were checked against Nibomo's text parser. The edited station answer also kept its line break in the generated import package. For file limits and other formats, see the [Nibomo import guide](/docs/import-flashcards/).
