---
title: "Anki: Add a Field to Existing Notes Without Changing the Question"
description: "Add a Source field to existing Anki notes, choose shared or cloned note-type scope, show it only after the answer, and check cards and review history."
date: "2026-10-19"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/e0088d2ea8ea46fcb4e1b64f17079d36d2e24a221d3206b5024e6474a7804c54.webp"
keywords:
  - "Anki add field existing notes"
  - "Anki Source field"
  - "Anki extra field not showing"
  - "Anki field vs template"
  - "add explanation to Anki cards"
---

Adding a `Source` field to an Anki note doesn't make the source appear on its card. Even filling the field leaves the rendered card unchanged until its template includes `{{Source}}`. That separation is useful: you can add a citation or explanation after the answer while keeping the question exactly as it was.

For a selected group of ordinary Basic notes, **clone their note type, convert only those notes to the unchanged clone, then add the field and its display block to the Back Template**. Keep the existing single card template. This gives each note somewhere to store the extra text without creating another question.

The procedure below includes a three-note rehearsal run with Anki's Python backend package 26.9.3, corresponding to release 26.09.3, on macOS on October 19, 2026. Desktop instructions follow the current manual and released source; the GUI itself wasn't tested.

![A gallery assistant slides a provenance slip into a clear pocket on the back of a picture frame beside a landscape painting](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/e0088d2ea8ea46fcb4e1b64f17079d36d2e24a221d3206b5024e6474a7804c54.webp)

## First decide which notes should gain the field

Fields and card layouts belong to a **note type**. The text you enter in a field belongs to an individual **note**. Decks hold cards, so opening one deck before editing Basic doesn't limit that edit to the deck.

Suppose two workshop notes use Basic in one deck, and an unrelated reading-club note uses Basic in another:

| Note | Deck | Front → Back | Starting card state |
| --- | --- | --- | --- |
| A | `Field lab` | Workshop intake: which color marks an item awaiting inspection? → yellow | Reviewed once with Easy |
| B | `Field lab` | Workshop intake: which color marks an item ready for collection? → green | Suspended |
| C | `Other lessons` | What day does the fictional reading club meet? → Tuesday | New |

These are invented examples. Each note starts with `Front` and `Back` and produces one `Card 1`.

| Your intended scope | What to edit | Result for note C |
| --- | --- | --- |
| All notes using the existing Basic type, across decks | Basic itself | C also gains a blank `Source` field and uses the updated template |
| Only A and B | A clone named `Basic with Source`, after converting A and B to it | C keeps its original Basic fields and layout |

Use the second route for the small rehearsal below. A and B will share the new field definition and template, but they can have different source text. Anki's [template introduction](https://docs.ankiweb.net/manual/templates/intro) explains how one template controls the cards that use it.

## Back up, then choose a small selection

If you use several devices, sync their outstanding work before making structural changes, then sync the desktop collection you'll edit. Pause studying elsewhere until the change has reached those devices.

Save a whole-collection backup through **File → Export → Anki collection package (.colpkg)**, with media included. Anki's [backup manual](https://docs.ankiweb.net/manual/backups#manual-colpkg-backups) explains the format; automatic backups omit images and sounds.

To try the change on a copy first, use **File → Switch Profile** to add and open a separate profile, then **File → Import** to load that backup there. Keep this rehearsal profile disconnected from AnkiWeb. The [APKG versus COLPKG guide](/blog/anki-apkg-vs-colpkg/) covers that setup in more detail.

Start with two recognizable Basic notes and one Basic note to leave alone. Record the cards' decks, due information, intervals, review counts, and suspension state. For the reviewed example, open **Cards → Info** and record its review-history entries. [Anki's Card Info documentation](https://docs.ankiweb.net/manual/stats#card-info) describes this view.

This walkthrough assumes ordinary Basic with two fields and one card template. Cloze, reversed cards, and custom shared-deck types need their own field and template mapping.

## Clone first, while the structure still matches

1. From Anki's main window, open **Tools → Manage Note Types → Add**. Choose **Clone: Basic**, meaning the existing Basic type used by your selected notes. Name it `Basic with Source` and close the manager. Use an unused name; if that name already exists, choose a distinct one and use it throughout these steps. Leave its fields and card template unchanged for now. The manual distinguishes [cloning an existing type from adding a stock type](https://docs.ankiweb.net/manual/editing#adding-a-note-type).
2. Open **Browse** and switch to **Notes** mode. Find and select only the two intended notes, A and B in the example. Check their text and note type before proceeding; leave C unselected.
3. Choose **Notes → Change Note Type**, select `Basic with Source`, and check the field mappings `Front → Front` and `Back → Back`, plus the card-template mapping `Card 1 → Card 1`. Confirm the conversion. Both types still have two fields and one template, which keeps this mapping straightforward. Anki documents this operation under [Notes actions](https://docs.ankiweb.net/manual/browsing#notes). If your search was restricted to Basic, update it to the cloned type to find the converted notes again.
4. Select one converted note and open **Fields…**. Confirm that the dialog is for `Basic with Source`, click **Add**, enter exactly `Source`, and save. Keep `Front` and `Back` in their existing positions. Both converted notes now have an empty Source field; C still has two fields. See [Customizing Fields](https://docs.ankiweb.net/manual/editing#customizing-fields).

Fill A's Source with `Fictional workshop handbook, section 2`. Leave B's Source empty. Select each note and use **Preview** at the top of the editing area. It should still show the original question and answer for both cards. The data is stored, but the card hasn't been told to display it.

You don't need to reset or reschedule the cards, export and reimport the selected notes, or add another card type.

## Put Source below the existing answer

With A selected, open **Cards…**, confirm you're editing `Basic with Source`, and choose **Back Template**. Append this block after the existing answer content:

```html
{{#Source}}
<div>Source: {{Source}}</div>
{{/Source}}
```

Keep the original `{{FrontSide}}`, answer divider, and `{{Back}}`. For an unchanged stock Basic template, the complete back will look like this:

```html
{{FrontSide}}

<hr id=answer>

{{Back}}

{{#Source}}
<div>Source: {{Source}}</div>
{{/Source}}
```

Leave **Front Template** as `{{Front}}` and keep the single `Card 1` template. Save the change. No styling changes are needed for this example.

The outer lines make the entire source block conditional: when Source is empty, the label disappears too. Anki's [conditional replacement documentation](https://docs.ankiweb.net/manual/templates/generation#conditional-replacement) describes that behavior. Field names are [case-sensitive](https://docs.ankiweb.net/manual/templates/fields#basic-replacements), so `{{source}}` won't reference a field named `Source`.

In Preview, A should ask the same workshop question as before. Reveal its answer: `yellow`, followed by `Source: Fictional workshop handbook, section 2`. B should still show `green` after revealing the answer, with no empty “Source:” label. Check C as well: its original fields and card should remain unchanged.

For an explanation field instead, use `Explanation` as the field name and replace all three `Source` references and the visible label in the small block to match. Put the explanation on the back if it should be available only after answering. Creating another question is a separate decision covered by the [reverse-card guide](/blog/anki-reverse-cards/).

## If you want the field on every Basic note

Skip the clone and conversion. Select the existing Basic type in **Tools → Manage Note Types**, add `Source` through **Fields…**, then append the same conditional block to its existing Back Template through **Cards…**.

In the example, A, B, and C all gain the new field, despite C being in another deck. Filling A's Source still leaves B and C blank. Their answers display no label because the template block is conditional.

Choose this route when that shared structure is intentional. A blank field doesn't change the question, but the field definition and future template edits now apply to every note using that type.

## What the four backend runs preserved

The rehearsal used four fresh collections: the shared route and the cloned route, each tested once with legacy SM-2 scheduling and once with FSRS enabled. Every collection had the three notes above, three cards split between the two named decks, and one actual review-history row before the edits.

| Check | Shared route, both schedulers | Cloned route, both schedulers |
| --- | --- | --- |
| Notes and cards | 3 notes, 3 cards before and after | 3 notes, 3 cards before and after |
| Note IDs, GUIDs, Front and Back text | Retained | Retained |
| Original card IDs and note/deck links | Retained | Retained |
| Compared scheduling and card-state fields | Unchanged | Unchanged |
| Review-history rows | The same single row | The same single row |
| Rendered questions | Unchanged for A, B, and C | Unchanged for A, B, and C |
| Answer-only source | Shown on A; label absent on B and C | Shown on A; label absent on B; C untouched |
| C's fields | Gains blank Source | Retains only Front and Back |

The comparison covered each card's ID, note ID, deck ID, template ordinal, type, queue, due value, interval, ease factor, review and lapse counts, remaining learning steps, original due/deck values, flags, and stored data. Those values and the complete review-history row matched before and after. In the cloned FSRS run, for example, A kept its six-day interval and one review, and B stayed suspended. Each run was compared with its own starting state.

Adding the field alone changed none of the rendered questions or answers. Filling A's field alone also left its rendered answer unchanged. Only the template edit made the source visible. In the cloned route, C's stored note values and rendered card matched the originals exactly.

These results cover this small Basic transformation. Note modification metadata can change; the database as a whole isn't byte-identical. The rehearsal didn't test future scheduling decisions, personal collections, media, add-ons, mobile clients, or AnkiWeb sync. The desktop instructions were checked against the manual and released source for [field editing](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/fields.py), [cloning note types](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/models.py), and [note-type mapping](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/change-notetype/ChangeNotetypePage.svelte).

## Check your cards, then finish syncing

Use Browse's **Cards** mode to compare card counts and the sampled cards' decks, due information, intervals, and review counts. Confirm the suspended card stays suspended and compare the reviewed card's **Cards → Info** history. Use Preview to inspect the question and revealed answer without grading cards. The [browser's editing-area documentation](https://docs.ankiweb.net/manual/browsing#editing-area) explains Preview.

If something looks wrong, inspect the relevant layer:

| What you see | What to check |
| --- | --- |
| Source is filled in the editor but absent from the answer | The Back Template must include the block, on the note type this note actually uses |
| An error names a missing field | Match `Source` exactly in Fields and every template reference, including capitalization |
| A bare “Source:” appears on a blank note | Put the label inside the conditional block |
| The source appears before revealing the answer | Remove its reference from Front Template and keep it on Back Template |
| Another deck gained Source | Its notes share the edited note type; deck selection doesn't isolate a field edit |

If you rehearsed in a separate profile, leave it unsynced. Return to your normal profile, repeat the same scoped change there, and check the result again.

Changing note type and adding a field require a [one-way collection sync](https://docs.ankiweb.net/manual/syncing#conflicts). After checking the edited collection in your normal profile, upload it to AnkiWeb, then sync the other devices and download when prompted, provided those devices have no separate work still to preserve. If they do, cancel and resolve that work first using the [upload-or-download guide](/blog/anki-sync-upload-or-download/). Check the filled and blank examples on the receiving device before continuing study.

*AI assistance was used for research and writing, and an AI agent ran the backend rehearsal described above. The illustration is AI-generated. This guide is published by Nibomo, another flashcard app; it doesn't require leaving Anki.*
