---
title: "Mochi to Anki: Export CSV Without Losing Track of Your Cards"
description: "Move Mochi cards to Anki with the right CSV export, a worked field-mapping example, and checks for missing content, duplicates, and review history."
date: "2026-09-22"
image: "/blog/mochi-to-anki.png"
keywords:
  - "mochi to anki"
  - "export mochi to anki"
  - "mochi CSV export"
  - "mochi review history"
---

Mochi’s CSV export can move your card text to Anki, but it leaves review history behind. Save a native backup first, then check a small batch before importing the rest.

![A woman moves folded clothes from a travel-worn blue suitcase into separate wooden drawers](/blog/mochi-to-anki.png)

The steps below follow the official documentation, checked in September 2026. The vocabulary batch is a worked example; this guide does not claim a hands-on migration test.

## Keep a Mochi copy before exporting CSV

In Mochi's settings, use **Export everything** to save a `.mochi` file. Keep a dated copy outside the working folder where you'll edit CSV files. Mochi also documents backing up its user directory for a full local backup. See its [backup instructions](https://mochi.cards/docs/getting-started/backing-up/) for the locations on your operating system.

The native backup keeps attachments, templates, and review history. Keep it as your route back to Mochi; it’s a separate file from the CSV you’ll prepare for Anki. [Mochi backup contents](https://mochi.cards/docs/getting-started/backing-up/)

Record the source deck, card count, and export filename. Our [flashcard backup guide](/blog/how-to-back-up-flashcards/) covers keeping recoverable copies over time.

## Choose what each CSV row should contain

Mochi has two CSV modes:

| Export mode | What it contains | Choose it when |
| --- | --- | --- |
| Field values | Separate values from the card's fields | You want an Anki layout built around those fields |
| Pre-rendered sides | Front and Back columns | You want the existing sides without rebuilding the Mochi template |

Pre-rendered export combines every side after the first into Back. CSV also drops templates and review metadata; tags remain only if included in the text. [Mochi’s CSV documentation](https://mochi.cards/docs/import-and-export/exporting/)

For a word → meaning → sentence card, this reveals meaning and sentence together. If the sentence was a later hint, decide on a new review layout before migrating.

Export one deck with a consistent field layout first. If you’re still deciding whether to move, our [Mochi review and Anki comparison](/blog/mochi-alternative/) covers the broader differences.

## Map a three-field vocabulary card

Suppose your Mochi template has three fields: `Word`, `Meaning`, and `Example`. Here's a deliberately small practice batch:

| Word | Meaning | Example |
| --- | --- | --- |
| ahorrar | to save money | Quiero ahorrar para un viaje. |
| aunque | although | Aunque llueve, salimos. |
| el árbol | the tree | El árbol está cerca de casa. |

An Anki **note** holds fields. Card templates turn those fields into the questions you review. Basic creates one card per note; Basic (and reversed card) creates two. That distinction matters when you compare totals after importing. [Anki’s note and card explanation](https://docs.ankiweb.net/getting-started.html)

First, create a temporary Anki desktop profile through **File → Switch Profile → Add**. Each profile has its own collection. Leave this rehearsal profile disconnected from AnkiWeb: syncing two profiles to the same account can overwrite data. [Anki profiles](https://docs.ankiweb.net/profiles.html)

Inside that profile, create the note type for this example:

1. Open **Tools → Manage Note Types → Add**.
2. Choose **Clone: Basic**, then name the copy `Mochi Spanish`.
3. Select `Mochi Spanish` and open **Fields…**. Rename `Front` to `Word` and `Back` to `Meaning`, then add `Example` as the third field.

Make these changes to the named copy. Editing Basic itself would change the note type used by other Basic notes in that collection. [Anki note types and fields](https://docs.ankiweb.net/editing.html)

Keep one card template. In **Cards…**, use this front:

```html
{{Word}}
```

And this back:

```html
{{FrontSide}}
<hr id="answer">
{{Meaning}}
<br><br>
{{Example}}
```

Anki templates use HTML and determine which fields appear on each side. Preview both sides after changing the template. [Anki card templates](https://docs.ankiweb.net/templates/intro.html)

For the first row, the learner should see:

> **Question:** ahorrar
>
> **After revealing the answer:** ahorrar / to save money / Quiero ahorrar para un viaje.

Three rows should produce **three notes and three cards**. A reverse template would raise the count to six cards without duplicating notes.

Export field values from Mochi and inspect the column order. The practice data, arranged as `Word,Meaning,Example`, would look like this:

```csv
ahorrar,to save money,Quiero ahorrar para un viaje.
aunque,although,"Aunque llueve, salimos."
el árbol,the tree,El árbol está cerca de casa.
```

Save this practice batch as `mochi-spanish-sample.csv`. It has no heading row. Your real Mochi export may have a different column order or a row of column names; inspect it before applying this mapping.

## Import the sample before the whole deck

In the temporary profile, import the sample into a test deck using `Mochi Spanish`. Map columns 1–3 to `Word`, `Meaning`, and `Example`. Use UTF-8 CSV and check the separator preview. Quote fields containing commas or newlines; double embedded quotes. Remove ordinary column-name rows from a working copy. Enable **Allow HTML in fields** when importing HTML. [Anki text import](https://docs.ankiweb.net/importing/text-files.html)

Don't assume Mochi's “pre-rendered” label guarantees HTML. Inspect the exported content and the resulting card. A literal `**word**`, broken link, or missing line break needs attention before the full batch. Plain text vocabulary like the example avoids that formatting question.

| Check | Expected result for this example |
| --- | --- |
| Import totals | Three new notes, no unexpected updates or skips |
| Generated cards | Three, with one card template |
| Question side | Only the Spanish word |
| Answer side | Word, meaning, and example sentence |
| Punctuation | The comma stays in the `aunque` sentence |
| Characters | `árbol` and `está` retain their accents |
| Stray records | No note containing the column headings |

Once those three notes look right, repeat with a small export of your own cards. Include blank fields, long answers, quotation marks, repeated words, and any media you use. Check both the stored fields and the displayed answers: text can be present in a note yet absent from its card template.

## Check duplicates before importing into your real collection

Anki normally updates matching notes by first field and note type. Check duplicate handling and match scope: note type, or note type plus deck. A new deck alone may not isolate the import. Updates retain existing Anki scheduling. [Anki duplicate handling](https://docs.ankiweb.net/importing/text-files.html#duplicates-and-updating)

In our example, `Word` is the first field. Two source entries for `banco`, one for “bank” and one for “bench,” deserve a deliberate decision before import. Combine meanings if you want one question, or distinguish the prompts if you want separate questions. Don't let an unexplained import total make that decision for you.

Back up your real Anki collection before repeating the successful setup and mapping there. Keep the three invented practice notes in the test profile. Record the import settings, then investigate any unexpected updates or skips before retrying a batch.

## Media and review history need separate attention

CSV does not bundle media. For Anki text imports, copy files directly into `collection.media` and use field references such as `<img src="tree.jpg">` or `[sound:tree.mp3]`; enable HTML. [Anki media import](https://docs.ankiweb.net/importing/text-files.html#importing-media)

Mochi documents `.mochi` files as ZIP archives containing JSON and attachments. Extract a copy of your backup to inspect the media; keep the original intact. [Mochi’s native export format](https://mochi.cards/docs/import-and-export/exporting/)

Match each attachment to its Anki field reference before importing a media-heavy batch. Open the image and play the audio in Anki. A successful text import doesn’t establish that either works.

This CSV workflow leaves Mochi review history in your saved native copy. Newly created Anki cards start without your Mochi review dates or intervals. Expect to rebuild their schedule, and introduce batches at a pace you can handle. Keep the original Mochi collection available while you settle into Anki.

Save the checked import results beside your exports. Account for every source card: imported, deliberately combined, or held back for repair. Then move to the next batch.
