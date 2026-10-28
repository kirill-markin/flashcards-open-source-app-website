---
title: "Anki Hint Fields: Show a Clue, Then Reveal the Explanation"
description: "Add an optional hint to an Anki card and show it with the answer. Complete templates, empty-field checks, and a three-card backend comparison."
date: "2026-10-28"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3b087a310eb8140551020afe31c37268af67892b0fd0604b1f91213e577a8a78.webp"
keywords:
  - "Anki hint fields"
  - "Anki show hint"
  - "Anki hint field on back"
  - "Anki FrontSide hint"
  - "optional hint Anki"
---

An Anki hint can be hidden again just when you want to read it with the answer. A back template built with `{{FrontSide}}` can carry the front's hidden hint onto the back, complete with another link to open it. The clue is there; it still isn't plain explanation text.

For an ordinary Basic card, use **`{{hint:Hint}}` on the front and a conditional `{{Hint}}` on the back**. Write the question field explicitly on the back instead of copying `{{FrontSide}}`. That gives you an optional clue before answering and one visible copy after answering, while notes without a hint keep working.

The templates below were checked in an automated Anki backend experiment on October 28, 2026. It compared two back templates using the same front and three demonstration notes, checking rendered HTML and audio-tag extraction. Desktop clicking and audio playback weren't tested; the two-note rehearsal below lets you check the text interaction in your own setup.

![A woman lifts a corner of a blue cloth to reveal one wooden puzzle piece while a man works on the arrangement](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3b087a310eb8140551020afe31c37268af67892b0fd0604b1f91213e577a8a78.webp)

## Set up a small rehearsal first

This recipe is for a clone of stock **Basic**, with `Front`, `Back`, and one new field named `Hint`. Keep its existing single card type, `Card 1`.

Start in a separate Anki desktop profile, left disconnected from AnkiWeb. You can create one through **File → Switch Profile**. Use new demonstration notes there before adapting a live collection.

1. Open **Tools → Manage Note Types → Add**, choose **Clone: Basic**, and name it `Basic with Hint`.
2. Select that type, open **Fields**, and add `Hint`. Keep `Front` and `Back`.
3. Open **Cards** for the cloned type. Replace its **Front Template** and **Back Template** with the pair below. Keep the existing styling and the single card type.
4. Add the two text notes in the next section, using `Basic with Hint`.

The [official note-type and field guide](https://docs.ankiweb.net/manual/editing#adding-a-note-type) documents those controls. Names are case-sensitive: `Hint`, `hint`, and `Hints` aren't interchangeable.

A template belongs to a note type, so editing it affects every note using that type across decks. If you're adapting existing notes, use the scoped [add-a-field guide](/blog/anki-add-field-existing-notes/) for backup and note-type choices. The rehearsal here doesn't require converting or importing existing notes.

## Paste this front and back pair

**Front Template**

```html
{{Front}}
{{hint:Hint}}
```

**Back Template**

```html
{{Front}}
<hr id=answer>
{{Back}}
{{#Hint}}<p>Hint: {{Hint}}</p>{{/Hint}}
```

`Front` remains outside the optional block, so an empty hint doesn't remove the question. The back prints the answer, then prints the hint paragraph only when that field has content. Anki's [hint-field documentation](https://docs.ankiweb.net/manual/templates/fields#hint-fields) describes the built-in filter; you don't need an add-on or custom JavaScript for this recipe.

Use this complete pair in the stock Basic clone described above. A customized front may include images from separate fields, special formatting, cloze deletions, or a typed-answer box. That content needs its own adaptation; replacing it with `{{Front}}` would leave it out.

## Try one filled hint and one empty hint

Create these two notes. Leave the second note's `Hint` field genuinely empty.

| Field | Filled-hint note | Empty-hint note |
| --- | --- | --- |
| `Front` | What is 6 × 7? | What is 8 × 4? |
| `Back` | 42 | 32 |
| `Hint` | Think of 6 × 5, then add two more sixes. | *(empty)* |

Open them in **Browse → Preview** and check both sides. On the filled note, look for the question and a link labeled **Hint**. Click the link: the clue should appear without showing `42`. Then reveal the answer and check that `42` and the clue are both visible, with no extra hint link. Repeat from a fresh preview without clicking the clue first; the back should still show it openly.

On the empty note, the front should show `What is 8 × 4?` with no hint link. The back should show `32` with no leftover `Hint:` label.

Those expectations match the backend output from the text examples:

| Example | Front HTML produced | Back HTML produced by the paired templates |
| --- | --- | --- |
| Filled `Hint` | Question, a `Hint` link, and the clue in a hidden container | Question, answer `42`, and a normal paragraph containing the clue |
| Empty `Hint` | Question with no hint link | Question and answer `32`, with no hint paragraph |

The released renderer used the field name, `Hint`, as the link label. Some documentation describes a “show hint” link; don't treat that wording difference as a failed setup.

The clue already exists in the front's HTML, even while it's visually hidden. A hint field is a display choice, so don't put private material there. Keep the answer in `Back` if you want to attempt the question before seeing it.

## Why the hint stays hidden with FrontSide

Here is the back template used for the comparison:

```html
{{FrontSide}}
<hr id=answer>
{{Back}}
```

With the same front template and filled note, the backend returned a hint link and a container with `display: none` on **both** sides. Copying the front's rendered content preserved the hidden wrapper. With the explicit back template above, the answer HTML instead contained:

```html
What is 6 × 7?
<hr id=answer>
42
<p>Hint: Think of 6 × 5, then add two more sixes.</p>
```

That's the useful distinction: the front applies the `hint:` filter, while the back prints the field's contents directly. Removing `{{FrontSide}}` also avoids carrying a hidden copy of the clue into an answer that already prints it openly.

For this guide, an AI agent ran Anki's Python backend package **26.9.3**, corresponding to desktop [release 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3), in a new disposable collection on macOS 26.6.1, arm64, with Python 3.13.17. It added `Hint` to the Basic structure, created three new demonstration notes, and rendered their cards with `Card.render_output(reload=True, browser=False)` before and after changing the back template. The [released hint-filter source](https://github.com/ankitects/anki/blob/29bb700b951e3f0c0cb69b77c0180fc1fe33e6ba/rslib/src/template_filters.rs), at revision `29bb700b951e3f0c0cb69b77c0180fc1fe33e6ba`, was also inspected.

The collection stayed at three cards, all 16 compared card-table columns were unchanged, and review-history rows stayed at zero. These were new cards. That result doesn't establish what a change would do to an existing reviewed collection. The experiment didn't run the desktop UI, JavaScript interaction, playback, scheduling, sync, or mobile clients, and it didn't measure learning outcomes.

## Audio needs a separate check

The third demonstration note used this content:

| Field | Value |
| --- | --- |
| `Front` | Identify the demonstration sound. |
| `Back` | Demo answer |
| `Hint` | `[sound:hint-demo.mp3]` |

There was no actual audio file. Even inside the hidden hint wrapper, the renderer extracted `hint-demo.mp3` into its **question audio tags**. The `{{FrontSide}}` back produced no answer audio tag. With the explicit back, the renderer also extracted the filename into the **answer audio tags**. These are extraction results, not evidence that any sound played.

Don't use a hint field as an audio autoplay switch. The [Anki manual's audio warning](https://docs.ankiweb.net/manual/templates/fields#hint-fields) says audio can play regardless of opening the hint. Keep this recipe to text clues; if you later add sound, use a real file and check playback in Preview and study on each device you use. The [Anki audio troubleshooting guide](/blog/anki-audio-not-playing/) covers missing files and playback checks.

## Diagnose the result before changing more

| What you see | What to inspect |
| --- | --- |
| The hint needs another click after showing the answer | Look for `{{FrontSide}}` or `{{hint:Hint}}` on the back. Use the explicit back pair to print it openly. |
| The answer has a hint link as well as the visible clue | Check whether the back includes both `{{FrontSide}}` and raw `{{Hint}}`. The inherited front brings a hidden copy with it; use the explicit back to keep just the visible copy. |
| An empty hint leaves a `Hint:` label | Put the label inside `{{#Hint}}…{{/Hint}}`, as in the complete template. |
| The whole question vanishes when `Hint` is empty | Check whether `{{Front}}` was placed inside a `{{#Hint}}` block. Keep the question outside it; the [blank-card guide](/blog/anki-blank-cards/) covers other causes. |
| Anki reports an unknown field | Compare the field name and capitalization with the template, and confirm you're editing the intended note type. |

Finish the filled and empty checks in the rehearsal profile before adapting your study notes. If you later use the template on another device, check both examples there too; the backend experiment doesn't cover that client.

When the learning target is an unaided answer and you can answer only after opening the clue, that attempt missed the target. Use Again rather than turning assisted recall into Hard. Anki's [answer-button guidance](https://docs.ankiweb.net/manual/studying#answer-buttons) treats Hard as a correct but difficult answer; the [Again versus Hard guide](/blog/again-vs-hard-fsrs-flashcards/) explains that boundary. The visible explanation on the back can help you understand the miss without changing what you recalled beforehand.

*AI tools performed the research and backend experiment and substantially assisted with drafting and editing. The illustration is AI-generated. Kirill Markin owns Nibomo, another flashcard app; these results aren't his personal study experience. This setup works within Anki and requires no Nibomo account.*
