---
title: "Anki Conditional Card Generation: Add an Optional Question"
description: "Create an extra Anki question only when its prompt and answer are filled. Use a three-note rehearsal to check templates, card counts, and empty-card cleanup."
date: "2026-10-21"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/df93343271d627e68537ae1963578bd21905dae635b5405a2aaaebba715da94a.webp"
keywords:
  - "Anki conditional card generation"
  - "Anki conditional replacement"
  - "optional Anki cards"
  - "require two fields Anki"
  - "Anki blank back"
---

Three Anki notes can produce four cards: one basic question for each note, plus an application question on the one note that has both an extra prompt and its answer. When you add a note with either extra field empty, Anki skips that additional card.

For this setup, clone **Basic**, keep its original card type, and add a second card type whose **entire front sits inside conditions for both extra fields**. The answer field helps decide whether Anki generates the question, but the answer itself stays hidden until you reveal it. No separate enable/disable field is needed.

The three-note rehearsal below ran on October 21, 2026, in a disposable collection using Anki's released Python/Rust backend package **26.9.3**, on **macOS 26.6.1 arm64 with Python 3.14.7**. Desktop instructions were checked against the official manual and release **26.09.3** source; the desktop GUI wasn't tested.

![A cobbler completes a matching pair of brown shoes on a shelf while two single shoes remain on the workbench](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/df93343271d627e68537ae1963578bd21905dae635b5405a2aaaebba715da94a.webp)

## Give the extra question its own fields

A note stores information. Anki uses card templates to turn that information into questions you can review. Here, each note has a core question and, optionally, a separate question that asks you to apply the same fact:

| Field | Purpose | Required for this recipe |
| --- | --- | --- |
| `Front` | Core question | Always filled |
| `Back` | Core answer | Always filled |
| `ApplyPrompt` | Optional application question | Filled only when wanted |
| `ApplyAnswer` | Answer to that application question | Must be filled to generate the extra card |

A note type defines these fields and its card templates. Editing it affects every note using that type throughout the collection, including other decks. Selecting a deck doesn't limit a template edit. Anki's [note-type explanation](https://docs.ankiweb.net/manual/getting-started#note-types) describes this shared structure.

Start with a new clone and new example notes. Adapting notes you've already studied requires a backup and separate decisions about field and card-type mappings. The [add-field guide](/blog/anki-add-field-existing-notes/) explains how to isolate a selected group in a clone. Keep reviewed notes out of this rehearsal.

## Configure the clone before adding notes

For the full rehearsal, use a separate desktop profile through **File → Switch Profile → Add**, and leave it disconnected from AnkiWeb. The deliberate empty-card cleanup later belongs in this disposable profile.

1. From Anki's main window, open **Tools → Manage Note Types → Add**. Choose **Clone: Basic** for an unmodified Basic type, click **OK**, and name it `Optional application rehearsal`. Use a distinct name if that one already exists.
2. Close the manager and open **Add**. Select `Optional application rehearsal` as the note type. Open **Fields…**, then use **Add** to create `ApplyPrompt` and `ApplyAnswer`, with exactly that capitalization. Keep `Front` and `Back`, then close the Fields window.
3. Before adding any notes, open **Cards…**. Keep the original **Card 1** as the core question, using the templates below.
4. In the Cards window, choose **Options → Add Card Type**. Select the new **Card 2** and replace its front and back with the application templates below. Save before entering the three notes.

The manual documents [cloning and field editing](https://docs.ankiweb.net/manual/editing#adding-a-note-type) and the [Cards window](https://docs.ankiweb.net/manual/templates/intro#the-templates-screen). In released Anki 26.09.3, **Add Card Type** copies the currently selected template into the new type; replace that copy rather than leaving a duplicate core question. See the [released add-card implementation](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/clayout.py#L698-L713) and [Options action](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/clayout.py#L795-L798).

### Card 1: keep the core question

**Front Template:**

```html
{{Front}}
```

**Back Template:**

```html
{{FrontSide}}
<hr id=answer>
{{Back}}
```

Keep this first card type in place. Its question remains available independently of the optional fields, provided `Front` is filled. Fill `Back` too: this core template doesn't check whether its answer is empty.

### Card 2: require both application fields

**Front Template:**

```html
{{#ApplyPrompt}}
{{#ApplyAnswer}}
{{ApplyPrompt}}
{{/ApplyAnswer}}
{{/ApplyPrompt}}
```

**Back Template:**

```html
{{FrontSide}}
<hr id=answer>
{{ApplyAnswer}}
```

`{{#ApplyPrompt}}` includes the enclosed template content when `ApplyPrompt` is nonempty. The nested `{{#ApplyAnswer}}` condition requires the answer field too. Only `{{ApplyPrompt}}` is printed on the front; `{{#ApplyAnswer}}` tests for content without printing the answer. Field names are [case-sensitive](https://docs.ankiweb.net/manual/templates/fields#basic-replacements).

This is **Anki conditional card generation** built with conditional replacement. The conditions control what the front displays and, because they enclose the whole front, whether Anki generates a new card. Putting the checks only on the back can still create a question with no answer. Keep the entire application front inside both conditions, including any labels or extra text you add later. Anki documents both [requiring two fields and avoiding blank backs](https://docs.ankiweb.net/manual/templates/generation#conditional-replacement).

## Add these three notes and expect four cards

Enter the examples as plain text. Add the tag `conditional-rehearsal` to each note, and leave fields marked “empty” blank. Don't type the word `empty`.

| Note | Front | Back | ApplyPrompt | ApplyAnswer |
| --- | --- | --- | --- | --- |
| A | How many centimeters are in one meter? | 100 cm | A ribbon is 2.4 m long. How many centimeters is that? | 240 cm |
| B | How many seconds are in one minute? | 60 s | empty | 180 s |
| C | How many grams are in one kilogram? | 1000 g | A bag has a mass of 1.5 kg. How many grams is that? | empty |

B's lone answer and C's lone prompt deliberately test incomplete pairs. They aren't finished application questions.

Open **Browse** and search `tag:conditional-rehearsal`. Confirm the search finds only these examples. Compare **Notes** and **Cards** modes:

| Note | Core card | Application card | Initial total |
| --- | --- | --- | --- |
| A | Present | Present: both fields filled | 2 |
| B | Present | Absent: prompt missing | 1 |
| C | Present | Absent: answer missing | 1 |

The result is **three notes and four cards**. In Cards mode, select each row and use **Preview** to check its question and revealed answer. Notes mode previews only the first card of each note, so use Cards mode to check the application card too. See [Browser preview](https://docs.ankiweb.net/manual/browsing#editing-area).

A's application front should show the ribbon question without `240 cm`; revealing the answer should show `240 cm`. The backend rehearsal checked that exact separation. If an intended card exists but its question is invisible, use the [blank-card diagnosis](/blog/anki-blank-cards/) before deleting it.

## Fill a missing answer, then clear a different one

In Browse, set C's `ApplyAnswer` to `1500 g` and finish editing the note. Anki generates C's application card automatically. You now have **five cards**, and its new question should appear in Cards mode Preview.

Next, in this disposable rehearsal only, clear A's `ApplyAnswer`. Its existing application card remains. The count stays **five**, even though the condition now fails. The backend returned Anki's built-in “The front of this card is blank” warning for that card. An empty card can display that warning rather than a completely blank screen.

Anki generates newly eligible cards when a note changes, but keeps previously generated cards that become empty to avoid accidental deletion. Removing those cards is a separate action. These are the documented [generation and deletion rules](https://docs.ankiweb.net/manual/templates/generation#card-generation-%26-deletion).

| Rehearsal stage | A cards | B cards | C cards | Total |
| --- | --- | --- | --- | --- |
| Initial three notes | 2 | 1 | 1 | 4 |
| Fill C's ApplyAnswer | 2 | 1 | 2 | 5 |
| Clear A's ApplyAnswer | 2 | 1 | 2 | 5 |
| Remove A's reported empty application card | 1 | 1 | 2 | 4 |

## Decide whether to pause or remove a question

If you want to pause A's application question, restore its `ApplyAnswer` to `240 cm` and **suspend that individual card**. For real notes, keep both application fields filled when suspending. Suspension keeps the card available for later; the [bury versus suspend guide](/blog/anki-bury-vs-suspend/) shows how to select it separately from its core sibling.

For an obsolete application question, save any field text you want to keep before clearing a required field. Then use **Tools → Empty Cards**. Inspect every entry before deleting anything: this report covers the **whole collection**, and your Browse search doesn't limit it. The desktop dialog deletes cards from the whole report; it doesn't let you select just A's row. If unrelated cards appear, close the dialog and investigate them first. See the [released Empty Cards dialog](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/emptycards.py).

In the disposable profile, proceed with deletion only if the report contains A's application card and nothing else. Return to Browse and confirm that the tag search now finds **three notes and four cards**, including A's core question.

In the backend rehearsal, the empty-card report contained **only A's application card**. Removing that reported card left all three notes and all three original core card IDs intact. The final count was four. This verifies those counts and IDs; the run didn't test review scheduling or history preservation, mobile clients, sync, or desktop interaction.

Never use Browser **Delete** just to remove this optional question: it deletes the note and its sibling cards. Anki documents [note deletion in Browse](https://docs.ankiweb.net/manual/browsing#notes).

There is also an all-empty-note exception. Adding a new note whose templates generate no questions creates a placeholder using the first card type. The backend rehearsal confirmed this too. Keep `Front` populated in these examples so that exception doesn't interfere with the optional-card check. See [adding empty notes](https://docs.ankiweb.net/manual/templates/generation#adding-empty-notes).

Once the disposable rehearsal matches the counts and previews, create the same type in your normal collection for new notes. Before changing a real collection's structure, sync outstanding work from other devices and save a collection backup. Structural edits can require a one-way sync; if prompted, use the [upload-or-download guide](/blog/anki-sync-upload-or-download/) to identify the collection containing the work you intend to keep. Leave the rehearsal profile unsynced.

*AI agents researched and wrote this guide and ran the disposable backend rehearsal described above. The illustration is AI-generated. Nibomo publishes this guide and also makes a flashcard app; this procedure works entirely in Anki.*
