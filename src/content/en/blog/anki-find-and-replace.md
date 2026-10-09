---
title: "Anki Find and Replace: Bulk Edit One Field at a Time"
description: "Correct repeated text in Anki with a small rehearsal, explicit note and field selection, unchanged control notes, and checks for both card directions."
date: "2026-10-09"
image: "/blog/anki-find-and-replace.png"
keywords:
  - "Anki find and replace"
  - "Anki bulk edit"
  - "Anki replace text in one field"
  - "Anki selected notes only"
  - "Anki find and replace regex"
---

You spot `recieve` in several Anki answers. Replacing it with `receive` sounds straightforward, until the same typo appears in a quotation you want to keep. A bulk edit needs two boundaries: which notes can change, and which field within those notes can change.

On desktop, open **Browse**, select the intended notes, and choose **Notes → Find and Replace**. Keep **Selected notes only** checked, choose the specific field, and turn regular expressions off for an ordinary text correction. [Anki's Find and Replace documentation](https://docs.ankiweb.net/browsing.html#find-and-replace) describes these controls.

The rehearsal below gives you exact starting text, two small edits, and unchanged controls to inspect. Its expected results come from Anki's documentation and released 26.09.3 source, checked October 9, 2026. We haven't executed this rehearsal in Anki.

![A woman paints the masked upper rail of a garden gate while its wooden slats and neighboring fence remain untouched](/blog/anki-find-and-replace.png)

## Search results aren't an editing boundary

Searching determines which rows Browse displays. With **Selected notes only** enabled, selecting rows determines which notes Find and Replace can edit. In Cards mode, selecting either card of a note includes that note in the operation. A Back-field edit can therefore affect both directions made from it.

**Keep Selected notes only checked.** In released Anki 26.09.3, unchecking it expands replacement to all notes in the collection, including notes outside the current search or deck. The [released replacement handler](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/search/service/mod.rs) searches the whole collection when no selected-note IDs are supplied.

Field choice is a separate boundary. **Back** means the stored field named Back, even when a reverse card displays that field as its question. **All Fields** would also edit matching quotations, source notes, or prompts. Choose the field you intend to change.

Within that field, Find and Replace replaces every matching occurrence on each selected note. Selecting one card doesn't limit the edit to one rendered side or one occurrence.

## Build a four-note rehearsal

Use **File → Switch Profile** to create and open a disposable desktop profile. Leave it disconnected from AnkiWeb and start with zero notes; [profiles have separate collections](https://docs.ankiweb.net/profiles.html).

Set up the note type once:

1. Create a deck named `Find and Replace rehearsal`.
2. Open **Tools → Manage Note Types → Add**. Choose **Add: Basic (and reversed card)** and name the new type `Replacement rehearsal`.
3. Select that type, open **Fields**, and add a third field named `Source`. Keep Front and Back unchanged.
4. Leave both card templates unchanged. They use Front and Back; Source is stored on the note but isn't displayed on either card.

These are the documented [note-type and field controls](https://docs.ankiweb.net/editing.html#adding-a-note-type). Use **Add**, rather than cloning a type whose templates you may have modified. If your existing study notes need another direction, use the [Anki reverse-card guide](/blog/anki-reverse-cards/) separately.

Open **Add** and choose **Replacement rehearsal** as the type and **Find and Replace rehearsal** as the deck. Add exactly the four notes below. A–D are worksheet labels, not extra fields.

For this exercise, enter Front, Back, and Source through each field's **`</>` HTML editor**. Replace its entire contents with the exact single-line text, without the surrounding backticks, HTML tags, or extra spaces. This avoids pasted formatting that could interfere with the later anchored replacement. Replace the entire Tags box for each note too, so the previous note's tags don't carry over.

| Note | Front | Back | Tags |
| --- | --- | --- | --- |
| A | `recevoir` | `Answer: recieve` | `replace-demo replace-batch` |
| B | `recevoir un colis` | `Answer: recieve a parcel` | `replace-demo replace-batch` |
| C | `recevoir (control)` | `Answer: recieve` | `replace-demo replace-control` |
| D | `une étiquette` | `a label; example: Answer: receive` | `replace-demo replace-batch` |

For **all four notes**, enter exactly `Copied spelling: recieve` in **Source**. It represents a quotation whose original spelling must remain unchanged. Click **Add** once for each completed note.

In Browse, use the **Cards/Notes switch beside the search box** to enter Notes mode and search `tag:replace-demo`. Expect **four notes**. Switch to Cards mode and expect **eight cards**, two per note. All Front and Back values are nonempty, and the unchanged built-in type generates both directions. [Anki's reverse-card generation rules](https://docs.ankiweb.net/templates/generation.html#reverse-cards) explain the count.

Return to Notes mode before replacing anything. If the fields, tags, or counts disagree, correct the setup first.

## Correct the typo in Back only

Replace the entire Browse search with:

```text
tag:replace-batch
```

You should see A, B, and D: **three notes**, representing **six cards**. C must be absent. Click in the results table and use **Edit → Select All**. Confirm that all three rows are selected before opening **Notes → Find and Replace**.

Set every control explicitly; Anki can retain the field, regex, and case choices from a previous operation:

| Control | First replacement |
| --- | --- |
| Find | `recieve` |
| Replace With | `receive` |
| In | `Back` |
| Selected notes only | Checked |
| Treat input as regular expression | Unchecked |
| Ignore case | Unchecked |

Apply the replacement once. Expect **two changed notes out of three selected**: A and B. D has no `recieve` in Back. The reported count is changed notes, not text occurrences or cards; several replacements within one note would still count as one changed note.

Search `tag:replace-demo` again and click each note to inspect its fields, including C:

| Note | Expected Back after the first replacement |
| --- | --- |
| A | `Answer: receive` |
| B | `Answer: receive a parcel` |
| C | `Answer: recieve` |
| D | `a label; example: Answer: receive` |

All Front values and all four Source values must still match the starting state. C staying unchanged checks note selection. Source keeping `recieve` on the selected notes checks field selection. A reassuring replacement count doesn't prove either boundary by itself.

## Optional: remove a label only at the start

Once the first table matches, suppose you also want to remove the exact leading label `Answer: ` from A and B. D contains that text inside an example and should keep it. A small regex can express this boundary: `^` anchors the match to the beginning of the stored field.

Return to `tag:replace-batch` in Notes mode, confirm A, B, and D, and use **Edit → Select All** in the results table again. Open Find and Replace with these settings:

| Control | Second replacement |
| --- | --- |
| Find | `^Answer: `, including the space after the colon |
| Replace With | Empty; enter no spaces or quotation marks |
| In | `Back` |
| Selected notes only | Checked |
| Treat input as regular expression | Checked |
| Ignore case | Unchecked |

Apply once. Expect **two changed notes out of three** again. Search `tag:replace-demo` and inspect the final state:

| Note | Unchanged Front | Final Back |
| --- | --- | --- |
| A | `recevoir` | `receive` |
| B | `recevoir un colis` | `receive a parcel` |
| C | `recevoir (control)` | `Answer: recieve` |
| D | `une étiquette` | `a label; example: Answer: receive` |

Every Source remains `Copied spelling: recieve`; every tag remains as entered. The full rehearsal still has **four notes and eight cards**. All Front and Back fields remain nonempty, and neither card template changed.

That count belongs to this setup. Editing notes can generate additional cards if previously empty questions become eligible. Making an existing card's question empty doesn't immediately delete that card; Anki provides **Tools → Empty Cards** for inspecting and removing those cards. Changes to cloze numbers or conditional fields need their own checks against the [card-generation rules](https://docs.ankiweb.net/templates/generation.html#card-generation--deletion).

This regex is for the exact plain-text fields above. Don't broaden it to remove anything before a colon or strip arbitrary HTML. When you next open the dialog, explicitly turn regex off again for a literal correction.

## Preview both directions

With `tag:replace-demo` in the search box, switch to Cards mode. Select each of the eight rows individually and open **Preview**, checking its question and answer. Notes mode previews only the first card of each note, so it can't finish this audit.

After both replacements, A should ask `recevoir` → `receive` in one direction and `receive` → `recevoir` in the other. B should ask `recevoir un colis` → `receive a parcel` and the reverse. C keeps its original typo in both directions. D keeps its interior `Answer: ` text. Source should appear on none of the cards.

This is also a meaning check. Changing Back changes the reverse prompt, so read it as a question and confirm it still asks for the answer you intended. A field can be edited correctly while the resulting flashcard becomes confusing.

## When visible text doesn't match

Anki stores field content as HTML. A visible phrase can cross formatting tags, contain an HTML entity, or come partly from the card template. Find and Replace operates on the stored field text.

For example, a Front field stored as:

```html
<b>rec</b>ieve
```

can display as `recieve`. With Front as the sort field, a normal Browse search can find that visible word across formatting. A literal replacement of `recieve` won't match the stored string: `</b>` interrupts it. Anki documents this [searching distinction](https://docs.ankiweb.net/searching.html#simple-searches); searching across formatting is limited to the sort field.

Select one affected note and inspect the field in its **`</>` HTML editor**. If `^Answer: ` finds nothing, check for an opening `<div>`, formatting tag, or leading whitespace before the label. If the label exists only in the card template, it isn't field text to replace. Fix one understood example before deciding on a batch operation; removing all tags can damage formatting and media.

Browse field searches also have their own syntax: `Back:receive` normally asks for the whole field to match, while `Back:*receive*` finds that text within a longer field. [Anki's field-search rules](https://docs.ankiweb.net/searching.html#limiting-to-a-field) apply to Browse, not to the literal Find box. Don't copy those wildcard stars into a literal replacement.

## Take one real note through the same checks

Before editing your real collection, sync outstanding work and make a backup. **File → Create Backup** saves card data and scheduling but excludes media. To include sounds and images, use **File → Export**, choose **Anki collection package (.colpkg)**, and enable **Include media**. See [Anki's backup instructions](https://docs.ankiweb.net/backups.html) and the [APKG versus COLPKG guide](/blog/anki-apkg-vs-colpkg/).

Choose one existing note with the target text. Give it an unused batch tag, search for that tag in Notes mode, and select only that note. Record its original fields, card count, and intended final text. For a studied card, record its Card ID, due information, interval, and a recognizable review entry in **Cards → Info**; [Card Info](https://docs.ankiweb.net/stats.html#card-info) exposes that history. Don't review it between comparisons.

Run the literal replacement in one field, inspect protected fields, and preview every sibling card. Compare the sampled card information afterward. The fresh rehearsal checks expected content and scope; it can't establish what happened to the history of your already-studied cards.

If the replacement is wrong, use **Edit → Undo** immediately, before another edit, then inspect the fields again. Undo reverts the most recent operation. Restoring a backup is broader: it loses changes made after that backup. Once the one-note result matches your written expectation, select a small tagged batch and repeat the same field, count, control, and direction checks.
