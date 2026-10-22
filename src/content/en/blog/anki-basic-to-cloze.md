---
title: "Anki Basic to Cloze: Convert Notes Without Losing the Answer"
description: "Convert existing Anki Basic notes to Cloze with a two-note rehearsal: assemble complete sentences, map both fields, and check cards and review history."
date: "2026-10-11"
image: "/blog/anki-basic-to-cloze.png"
keywords:
  - "Anki Basic to Cloze"
  - "convert Basic notes to Cloze"
  - "Anki Change Note Type"
  - "Cloze field mapping"
  - "Anki conversion review history"
---

A Basic note might have a question on the Front and just `yellow tag` on the Back. Changing its type to Cloze won't turn those two fields into a sentence. You still have to assemble the context and mark the answer to hide.

To convert **Anki Basic to Cloze**, open desktop **Browse**, select the notes, and use **Notes → Change Note Type**. Choose the actual **Cloze** type and check where both old fields go. Then edit **Text** into a complete cloze sentence before reviewing it. [Anki's conversion instructions](https://docs.ankiweb.net/manual/browsing#notes)

The two-note rehearsal below follows Anki's manual and [released 26.09.3 source](https://github.com/ankitects/anki/releases/tag/26.09.3), checked October 11, 2026. It works out the expected result; it isn't a hands-on test. The scope is unchanged, standard **Basic** notes: plain-text **Front** and **Back**, with one existing card per note, converted to standard **Cloze** with **Text** and **Extra**.

![A gardener moves a rosemary plant with its roots intact into a larger pot beside a separate young seedling](/blog/anki-basic-to-cloze.png)

## First decide whether the sentence improves the question

Convert a note when its information fits a sentence whose visible words give you useful context. Keep Basic when the direct question already asks for the answer you need, especially an explanation or a decision.

For example, these are invented instructions for a fictional repair club:

| Note | Original Front | Original Back |
| --- | --- | --- |
| A | What label goes on a tool awaiting inspection at the repair club? | yellow tag |
| B | What two details belong in the repair club's intake log? | item ID and reported fault. Record both before assigning a repair. |

A can become a single sentence completion. B needs an extra decision: keep recalling both details together, or practice each separately? This rehearsal chooses separate blanks, so B's new question changes. That matters when checking its old review history.

Write a small worksheet outside Anki before changing anything. Copy each original Front and Back exactly, including explanations, and draft the final fields below. Keep the worksheet until the converted batch passes every check. This gives you the original wording even after you replace the mapped answer text.

| Note | Prepared final Text | Prepared final Extra |
| --- | --- | --- |
| A | `At the repair club, a {{c1::yellow tag}} marks a tool awaiting inspection.` | What label goes on a tool awaiting inspection at the repair club? |
| B | `The repair club's intake log records the {{c1::item ID}} and the {{c2::reported fault}}.` | What two details belong in the repair club's intake log? Record both before assigning a repair. |

The standard Cloze type shows **Extra** on the answer side. It can retain the old question and useful explanation without showing them while you answer. **Text** contains the sentence and its `{{c1::answer}}` markup. [Anki's Cloze fields and syntax](https://docs.ankiweb.net/manual/editing#cloze-deletion)

This table preserves B's explanation by explicitly moving it into Extra. Mapping alone wouldn't do that separation. If your notes contain media, custom fields, or edited templates, stop at this scope boundary: preserve all their content and design a mapping for that actual note type before converting. Don't use this two-field recipe to discard material that doesn't fit.

## Convert only the two rehearsal notes

Sync outstanding work from your devices, bring desktop up to date, and save a current collection backup. The [APKG versus COLPKG guide](/blog/anki-apkg-vs-colpkg/) explains export formats and media settings.

On desktop:

1. Open **Browse** in **Notes** mode and select only the two existing Basic notes you've prepared.
2. Apply an unused tag with **Notes → Add Tags**, such as `basic-cloze-check-20261011`. Replace the search with `tag:basic-cloze-check-20261011` and confirm that it finds only your two notes. Use that search throughout the rehearsal; a Basic note-type filter will stop finding them after conversion.
3. Switch to **Cards** mode. There should be two cards. For each, use **Cards → Info** to record its **Card ID**, state, due information, and interval if applicable. Record a recognizable review-history entry, or note that its history is empty. [Anki's Card Info reference](https://docs.ankiweb.net/manual/stats#card-info)
4. Return to **Notes** mode, select both notes, and choose **Notes → Change Note Type**. In the dialog, choose **Cloze** and set the field mappings below before saving.

Use the built-in Cloze type for this recipe. Renaming Basic or adding `{{cloze:Front}}` to its template doesn't turn it into a Cloze note type. Anki handles Cloze specially; custom versions must be based on Cloze too. [Anki's explanation of the special note type](https://docs.ankiweb.net/manual/editing#cloze-deletion)

### Map the answer to Text and the question to Extra

Each new destination field gets one old source field. Anki doesn't concatenate Front and Back for you. Its released UI places the old-source dropdown before the new-destination label. [Released mapping row](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/change-notetype/MapperRow.svelte) and [field-mapping implementation](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/change-notetype/lib.ts)

| New destination | Select this old source | Immediately after conversion |
| --- | --- | --- |
| Text | Back | The original answer, including any explanation in Back |
| Extra | Front | The original question |

Set both rows explicitly. The standard Basic-to-Cloze default uses field order: **Front → Text** and **Back → Extra**. That can leave the question in Text and the answer on the answer side, with no cloze to generate a useful prompt. [Anki's released default-field mapping](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/notetype/notetypechange.rs)

Our mapping retains both fields while putting the answer where we'll assemble the sentence. It still needs that edit: A's Text will initially be only `yellow tag`, and B's will still be its original answer and explanation.

### There is no manual Card 1 mapping here

Conversions involving Cloze use special card handling. Anki shows a Cloze explanation instead of the normal card-template mapping controls. You can't manually assign the old Basic Card 1 to c2 in this dialog: card numbers remain unchanged. [Released conversion UI](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/change-notetype/ChangeNotetypePage.svelte) and [its Cloze explanation](https://github.com/ankitects/anki/blob/26.09.3/ftl/core/change-notetype.ftl)

For the unchanged one-card Basic notes in this recipe, the existing card keeps its identity, schedule, and review history. Its internal card number is **0**, which is also the number Anki uses for **c1**. Adding a c1 deletion therefore gives the retained card its new prompt. A **c2** deletion uses internal number **1**, so Anki generates another card with its own identity and no inherited reviews. This follows the released [conversion implementation](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/notetype/notetypechange.rs) and [card-generation logic](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/notetype/cardgen.rs#L148-L168). These conclusions apply to the standard one-card starting layout specified here.

The forward/reverse card mapping in the [reverse-card guide](/blog/anki-reverse-cards/) applies to regular note types. Use the Cloze behavior above for this conversion.

## Finish Text before studying anything

Save the conversion, stay in Browse, and edit each note into the prepared fields from the worksheet. **Immediately after conversion, Text has no cloze markup yet.** The old cards remain, but they don't yet have a usable cloze question. Don't review this temporary state or run Empty Cards to clean it up. Complete the sentences first.

For A, replace `yellow tag` in Text with:

```text
At the repair club, a {{c1::yellow tag}} marks a tool awaiting inspection.
```

Keep its original question in Extra.

For B, copy the explanation `Record both before assigning a repair.` into Extra after the retained question. Then replace Text with:

```text
The repair club's intake log records the {{c1::item ID}} and the {{c2::reported fault}}.
```

Compare both fields with the external worksheet before leaving each note. That catches a lost explanation as well as a missing answer.

Anki generates a card for each distinct cloze number. [Cloze generation rules](https://docs.ankiweb.net/manual/templates/generation#cloze-templates) predict this final ledger:

| Note | Card | Expected front | Answer to recall |
| --- | --- | --- | --- |
| A | c1, existing card | At the repair club, a [...] marks a tool awaiting inspection. | yellow tag |
| B | c1, existing card | The repair club's intake log records the [...] and the reported fault. | item ID |
| B | c2, new card | The repair club's intake log records the item ID and the [...]. | reported fault |

The batch starts with **two notes and two cards** and ends with **two notes and three cards**. If you instead want B to ask for the pair together, put both deletions under c1 in its prepared sentence; that version should finish with two cards total. Choose the version before editing. The [cloze-number guide](/blog/anki-cloze-numbers/) explains grouping and later renumbering.

## Accept the batch only after checking the cards

Rerun the tag search in **Cards** mode. Select each of the three rows and use **Preview** to inspect both sides. Notes-mode preview shows only the first card of a note, so it would miss B's c2 question. [Anki's preview behavior](https://docs.ankiweb.net/manual/browsing#editing-area)

Compare the result with the ledger:

- Both original answers are present. Extra shows each retained question on the answer side, and B's explanation appears there on both sibling cards.
- Each front hides the intended phrase and leaves enough context to identify it.
- The two-note count remains two; the chosen separate-blank version has three cards.
- A's c1 and B's c1 have their recorded old Card IDs, scheduling information, and review entries.
- B's c2 has a different Card ID and no inherited reviews from its old Basic card.

Use **Cards → Info** again for the identity and history comparison before reviewing or rescheduling any card. If the result differs, stop and inspect the fields, note type, and selected batch before expanding the conversion. Browser **Delete** removes a note and its cards; it isn't a repair for a missing cloze. [Anki's deletion action](https://docs.ankiweb.net/manual/browsing#notes)

A preserved schedule tells you that the old card survived. It doesn't show that you've mastered the new cue. A now supplies a sentence rather than a direct question; B's c1 supplies half of the old two-part answer. Grade what the new front actually asks, and keep Basic if that extra help defeats your recall goal.

Once the rehearsal passes, prepare and convert another small batch with the same checks. Note-type conversion requires a one-way sync: when desktop holds the complete collection you intend to keep, upload it to AnkiWeb and download that state on the other devices when prompted. Resolve unsynced work first; the [upload-or-download guide](/blog/anki-sync-upload-or-download/) explains that decision, alongside [Anki's sync conflict rules](https://docs.ankiweb.net/manual/syncing#conflicts).
