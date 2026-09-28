---
title: "Mochi CSV Import: Match Columns to Template Fields"
description: "Import a spreadsheet into Mochi with matching CSV headers, a small template example, and checks for blank cards, shifted columns, and missing text."
date: "2026-09-28"
image: "/blog/mochi-csv-import.png"
keywords:
  - "Mochi CSV import"
  - "import spreadsheet into Mochi"
  - "Mochi template fields"
  - "Mochi blank cards"
---

A spreadsheet can have all the right words and still produce blank-looking Mochi cards. For a **Mochi CSV import** into a templated deck, the column headers need to match the template's fields. Set up that destination before importing, then check three records before sending over your whole vocabulary list.

![A bicycle mechanic matches a wrench to its fitted tool case while a socket rests beside an empty recess](/blog/mochi-csv-import.png)

This walkthrough uses Mochi's official documentation, checked September 28, 2026. The CSV and expected results are original worked examples, not a report of a hands-on app test.

## Decide where the columns should go

Mochi documents two CSV import behaviors:

| Destination deck | Meaning of each CSV column |
| --- | --- |
| Has a template | A field, matched by the header's field name or field ID |
| Has no template | A separate card side |

For a plain question-and-answer spreadsheet, importing two columns without a template may be enough. Use a template when you want several pieces of information arranged together, such as a meaning and example sentence on the answer side. [Mochi CSV import documentation](https://mochi.cards/docs/import-and-export/importing/)

Our example uses three columns but two sides. The learner sees a Spanish expression first, then its English meaning and an optional Spanish sentence. Keeping the sentence with the answer prevents it from giving away the word before recall.

## Create the matching template first

Create an empty rehearsal deck named `CSV practice`. In that deck, choose **Add Template → New template** and name the template `Spanish CSV`. Add three text fields named exactly `Term`, `Meaning`, and `Example`.

Following Mochi's [template creation steps](https://mochi.cards/docs/templates/intro-to-templates/), put this in the template's Markdown editor. The double-angle-bracket placeholders insert the corresponding field values:

```markdown
Spanish → English

## <<Term>>

---

<<Meaning>>

<<#Example>>
**Example:** <<Example>>
<</Example>>
```

The `---` line separates the two card sides. [Mochi card sides](https://mochi.cards/docs/cards/)

The block around `Example` includes both its label and its value, so an empty example won't leave a lonely “Example:” on the answer. This follows Mochi's [conditional rendering syntax](https://mochi.cards/docs/templates/conditional-rendering/).

Use these short field names throughout the rehearsal. You can choose different names for your own deck later, but changing names while diagnosing an import adds another thing to compare.

## Save this three-record CSV

Copy the following into a plain-text file named `spanish-practice.csv`, saved as UTF-8. Or put the same values into three spreadsheet columns and export that sheet as a comma-separated CSV. In a spreadsheet, enter ordinary text; let its CSV exporter handle quotation marks.

```csv
Term,Meaning,Example
la llave,the key,La llave está en mi bolsillo.
de repente,suddenly,"De repente, dijo ""hola""."
el jueves,Thursday,
```

The first record checks a straightforward sentence and the accented `á`. The second deliberately includes punctuation that can expose a malformed CSV. The third leaves the optional example empty.

In CSV, commas separate fields. Enclose a value containing a comma, quotation mark, or line break in double quotes; double any quotation marks inside it. Thus `"De repente, dijo ""hola""."` represents one value: `De repente, dijo "hola".` [RFC 4180 CSV format](https://www.rfc-editor.org/info/rfc4180/)

The final comma in `el jueves,Thursday,` separates the second field from an empty third field. Don't add a space or the word “blank” after it. Before importing, reopen the exported file as text and compare its first line with `Term,Meaning,Example`. Also check that your spreadsheet hasn't exported semicolons between columns.

## Import into the prepared deck and compare

Start Mochi's CSV import, choose `spanish-practice.csv`, and select the prepared `CSV practice` deck as the destination. Use comma-separated parsing for this file and treat the first row as headers. Confirm that the destination already has `Spanish CSV` assigned before completing the import. Mochi's [changelog](https://mochi.cards/changelog/) documents the destination-deck selection and CSV parsing options.

Open all three imported cards. Each first side should show `Spanish → English` followed by the term. These are the expected contents; the meaning and example belong on the same answer side:

| Term on the first side | Meaning on the answer side | Example below the meaning |
| --- | --- | --- |
| la llave | the key | **Example:** La llave está en mi bolsillo. |
| de repente | suddenly | **Example:** De repente, dijo "hola". |
| el jueves | Thursday | Nothing: no example text or label |

Check the accented `á` in the first sentence and the comma and single pair of quotation marks in the second. Expect three cards, with no extra card containing `Term`, `Meaning`, and `Example`. Inspect the field values as well as the visible sides. A populated field and a correctly rendered answer are separate checks.

## If a card looks wrong, inspect the smallest piece

Use the symptom to decide what to compare next:

| Symptom | First check | Next action |
| --- | --- | --- |
| Prompt label appears but the word is absent | Is the card's `Term` field empty? | If so, compare the source value and header; if populated, check `<<Term>>` in the layout |
| Sentence ends at “De repente” or text lands in another field | The exported second record | Compare its quotes with the sample above |
| Field contains text but the layout omits it | Template placeholder | Compare its spelling with the populated field |
| A card contains the column names | Header handling during import | Keep the first row in the file and treat it as headers |
| Existing cards look empty after assigning a template | Whether they have field data or only raw Markdown | Inspect a copy with the template removed |

For that last case, Mochi preserves existing raw Markdown but ignores it while the template is applied. Removing the template reveals it again; you still need to put the text into fields to use the new layout. [Applying templates to existing cards](https://mochi.cards/docs/templates/intro-to-templates/)

For your next attempt, use another empty rehearsal deck with the corrected setup. Don't assume importing the same CSV again will update or deduplicate the previous cards.

## Move on to your own spreadsheet

Keep an untouched copy of the original spreadsheet. Before changing an established deck, make a recoverable backup; our [flashcard backup guide](/blog/how-to-back-up-flashcards/) covers that separately.

Replace the three sample records with a small selection from your own sheet: the longest answer, a sentence with punctuation, and any text using another writing system. Only expand to the remaining rows when the field values, visible answers, and card count agree. Keep a note of which rows you've imported so the rehearsal doesn't accidentally become part of a second batch.

If you're still choosing where to keep the collection, the broader [Mochi review and Anki comparison](/blog/mochi-alternative/) covers that decision. If you meant to move cards out of Mochi, use the separate [Mochi-to-Anki export guide](/blog/mochi-to-anki/).
