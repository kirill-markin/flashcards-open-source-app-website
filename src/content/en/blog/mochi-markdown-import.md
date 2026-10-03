---
title: "Mochi Markdown Import: Separate Cards, Sides, and Attachments"
description: "Import Markdown into Mochi with a three-card sample, distinct card and side separators, an attachment check, and fixes for merged or blank cards."
date: "2026-10-03"
image: "/blog/mochi-markdown-import.png"
keywords:
  - "Mochi Markdown import"
  - "import Markdown flashcards into Mochi"
  - "Mochi card delimiter"
  - "Markdown flashcards with images"
  - "Mochi front and back separator"
---

Three questions in a Markdown file don't automatically become three Mochi cards. A **Mochi Markdown import** needs one boundary between cards and another between a question and its answer. Use a distinct batch marker for the first job and `---` for the second, then check three cards before importing your notes.

![A woman sorts shells and pebbles into three separate wooden boxes, each divided into two compartments](/blog/mochi-markdown-import.png)

This walkthrough follows Mochi's official documentation, checked October 3, 2026. The sample and expected results are original worked examples; they haven't been tested in the app.

## Give each separator one job

Mochi can create one card per Markdown file or split a single file using a delimiter you choose. [Mochi Markdown import documentation](https://mochi.cards/docs/import-and-export/importing/)

| File arrangement | Starts a different card | Starts another side |
| --- | --- | --- |
| One `.md` file per card | A different file | `---` on its own line |
| Several cards in one `.md` file | Your chosen batch delimiter | `---` on its own line |

The front and back separator, `---`, belongs **inside** each card. Mochi allows more than two sides, so additional side separators can produce additional reveals. This example uses exactly two sides per card. [Mochi card sides](https://mochi.cards/docs/cards/)

Create an empty deck named `Markdown rehearsal` with no template assigned. A template renders its own Markdown and field values instead of the card's raw Markdown. A plain deck makes the imported source easier to inspect. If you want spreadsheet columns to populate template fields, follow the [Mochi CSV import guide](/blog/mochi-csv-import/) instead.

## Save a small batch you can inspect

Copy this block into a plain-text file named `python-rehearsal.md`. Leave out the enclosing four-backtick fence, and keep the file after importing.

````markdown
Which Python literal represents no value?
---
`None`.

CARD_BREAK_7Q9

Which Python statement prints ready?
---
```python
print("ready")
```

CARD_BREAK_7Q9

Which Python function returns the number of items in a list?
---
`len` — for example, `len([10, 20, 30])` returns `3`.
````

There are two batch markers and three side separators. The marker is `CARD_BREAK_7Q9`; use that exact text as the Mochi card delimiter. Put it only between complete cards, with no marker before the first question or after the last answer. Don't add YAML frontmatter or an article title to this card file.

For your own material, choose a marker that appears nowhere in the content, including code examples. Search the whole file before adding it at the boundaries. Using `---` as the batch delimiter would also split the questions from their answers.

The second answer checks a fenced code block. Mochi documents triple backticks and an optional language name such as `python` for syntax highlighting. [Mochi code formatting](https://mochi.cards/docs/markdown/basic-formatting/)

Keep literal separator lines out of this first rehearsal. Mochi's docs don't establish that a `---` line inside a code fence is protected from side splitting, or that a fence protects text matching your batch delimiter. If you're studying Markdown and need such an example, rehearse that card separately and inspect its sides before adding it to a larger batch.

## Import, then compare the actual content

A user in Mochi's official [Markdown import options discussion](https://forum.mochi.cards/posts/425/importing-and-markdown-import-options) describes the sidebar route **Import → Markdown**, the multiple-cards-per-file option, a delimiter box, and destination-deck selection. That feedback corroborates the interface labels; it isn't a test of the current workflow.

In the Markdown importer, choose multiple cards per file, enter `CARD_BREAK_7Q9`, select `python-rehearsal.md`, and set `Markdown rehearsal` as the destination.

Use this table to judge the result. These are the intended contents, not observed test results.

| Exact question on side 1 | Expected answer on side 2 | Detail to check |
| --- | --- | --- |
| Which Python literal represents no value? | `None`. | Inline code followed by a period |
| Which Python statement prints ready? | `print("ready")` | One code block with ordinary double quotes; no visible fence marks |
| Which Python function returns the number of items in a list? | `len` — for example, `len([10, 20, 30])` returns `3`. | Function name, list argument, and result all survive |

You should have **three cards with two sides each**. Each first side contains one question; the next side contains its answer. Reject the batch if a card is empty, a batch marker remains visible, or several questions share a card. Compare by question text rather than list position.

Open each card's Markdown editor as well as its rendered view. A correct count can hide misplaced answers, and a display problem can hide text that's still present in the source.

## Bring a local image with the Markdown file

For Markdown flashcards with images, Mochi requires an attachment reference in the source and the attachment selected alongside the `.md` file during import. [Mochi attachment import instructions](https://mochi.cards/docs/import-and-export/importing/)

Make a small PNG showing three boxes in a row and save it as `three-items.png` beside your source file. Open the PNG to check the drawing, then replace the third card's answer with:

```markdown
`len` — for example, `len([10, 20, 30])` returns `3`.

![Three boxes representing three list items](three-items.png)
```

This is Mochi's documented [Markdown attachment syntax](https://mochi.cards/docs/markdown/advanced-formatting/). The reference names the image; it doesn't contain the image data.

Use a fresh empty deck for this version. Select **both `python-rehearsal.md` and `three-items.png`** in the import file picker. Keep the reference and selected filename identical, including the extension. Placing the PNG beside the source file alone doesn't complete the documented attachment step.

The expected result is still three cards, each with two sides. The first two cards should match the table. On the third answer, check the text and the actual three-box drawing. Alt text or a missing-image indicator doesn't pass the image check; an extra card containing an image filename doesn't pass the count check.

## When the result looks wrong

Correct the source or import setting, then try again in a fresh empty deck so earlier attempts don't obscure the count.

| Symptom | First thing to compare | Correction to try |
| --- | --- | --- |
| All three questions share a card | Import mode and delimiter box | Choose multiple cards per file and enter `CARD_BREAK_7Q9` |
| Questions and answers become separate cards | Batch delimiter | Replace `---` in the delimiter box with `CARD_BREAK_7Q9` |
| Extra or empty cards appear | Every occurrence of the batch marker | Keep the two intended boundaries; remove unintended occurrences |
| A question and answer share a side | That card's source | Put `---` on its own line between them |
| A card has an unexpected third side | Additional `---` lines | Compare them with the intended two-side layout, including any examples |
| Text exists in the editor but the card looks blank or different | Applied template | Inspect the raw card without a template |
| The code answer shows backticks | Opening and closing fences | Match the sample's triple-backtick fence lines |
| The image is missing | Reference filename and selected files | Match `three-items.png` and select the actual PNG with the Markdown |

Applying a template doesn't delete the original card Markdown, but it replaces that Markdown during rendering. Check the editor before rewriting text that only appears to be missing. [Mochi templates and raw card content](https://mochi.cards/docs/cards/)

The import docs don't spell out delimiter whitespace rules. Copy the sample's spelling and placement without assuming extra spaces will be trimmed. If the result still differs, keep the source and record the import mode, entered delimiter, and unexpected card contents for Mochi support.

## One file per card is another option

If your notes already live in separate files, split the sample into these three `.md` files and omit both batch markers:

| File | Content from the sample |
| --- | --- |
| `none.md` | First question, its `---` line, and answer |
| `print.md` | Second question, its `---` line, and the complete fenced answer |
| `length.md` | Third question, its `---` line, and answer |

Import with the one-card-per-file option into an empty deck. Apply the same three-card comparison. For the image version, keep the image reference in `length.md` and include the PNG in your file selection.

A batch file keeps everything in one editor window. Separate files make card boundaries visible in the file list. Choose whichever fits how you maintain the source.

## Keep the source, and back up the deck separately

This is an import of selected files. It doesn't establish a watched-folder connection, and the documentation doesn't promise that importing again will update or deduplicate existing Markdown cards. Keep your originals and a record of which batch you accepted.

Markdown imports don't preserve review history or card order. For a recoverable Mochi backup, use a native `.mochi` export, which includes history, attachments, templates, and fields. [Mochi native export documentation](https://mochi.cards/docs/import-and-export/exporting/) The [Mochi backup and restore guide](/blog/mochi-backup-restore/) covers that procedure.

After the sample passes, try a small batch of your own material with your longest answer and any code or local media you use. Check the prompts, revealed answers, side counts, and attachments before expanding. If you're deciding whether this workflow fits your study habits, the broader [Mochi review and alternatives](/blog/mochi-alternative/) covers the app choice.
