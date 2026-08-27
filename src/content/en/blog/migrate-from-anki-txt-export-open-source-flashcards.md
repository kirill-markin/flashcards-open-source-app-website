---
title: "How to Migrate from Anki in 2026: A Safe TXT Export Workflow"
description: "Migrate text-based Anki cards without risking the original collection. Make a .colpkg backup, export notes as TXT, test fields and media, then rebuild a small deck safely."
date: "2026-03-13"
updated: "2026-08-27"
image: "/blog/migrate-from-anki-txt-export-open-source-flashcards.png"
keywords:
  - "migrate from Anki"
  - "Anki export TXT"
  - "export Anki deck"
  - "Anki to flashcards"
  - "Anki migration"
  - "Notes in Plain Text"
  - ".colpkg backup"
---

The safest way to migrate from Anki starts with two exports, not one. Make a `.colpkg` file with media so you can recover the original collection. Then make a **Notes in Plain Text** export for the content you want to move.

Those files solve different problems. The collection package is your way back. The TXT file is the portable working copy. Keeping that distinction clear stops you from treating a list of card text as if it were a full Anki backup.

This workflow is for text-based decks and destinations that can work from TXT or CSV. The text export does not preserve Anki's scheduler state, templates, add-ons, or media files. You will test a representative deck first, inspect every field, and leave the original collection untouched until the result is good enough to use.

> **Disclosure:** I am Kirill Markin, and I build [Flashcards](https://flashcards-open-source-app.com/). This guide is explicit about the cases where staying in Anki, or choosing a destination that imports `.apkg`, is the better decision.

**Facts checked:** August 27, 2026.

![A botanist keeps the original plant intact beside a protected backup cutting and three test cuttings](/blog/migrate-from-anki-txt-export-open-source-flashcards.png)

## First, decide whether TXT is the right route

Anki stores more than the words you see during review. A note can have several fields. A note type and its card templates decide how those fields become one or more cards. The collection also contains scheduling information, while media lives as separate files referenced from note content.

A text export takes only part of that system. Use this table before spending time cleaning the file:

| Your Anki setup | Is TXT a sensible migration path? | Safer decision |
| --- | --- | --- |
| Basic front/back notes with little or no media | **Yes** | Export a representative deck, map the fields, and test the destination |
| Several predictable text fields, such as term, definition, and example | **Usually** | Decide which fields become the front and back before importing |
| Cloze notes that you are willing to rewrite as ordinary questions and answers | **Sometimes** | Test a few clozes and inspect the result card by card |
| Custom HTML that only changes simple formatting | **Sometimes** | Check whether the destination renders, strips, or exposes the HTML |
| Images or audio that are useful but not essential | **Sometimes** | Move the text first, then attach and verify media separately |
| Templates, CSS, JavaScript, add-ons, or generated reverse cards are essential | **Usually no** | Stay in Anki or choose a destination with compatible Anki package import |
| Existing due dates, review history, or personalized scheduling state are essential | **No** | Keep studying in Anki or use a migration path that explicitly preserves scheduling |
| Image Occlusion or media-heavy notes carry the meaning | **No for TXT alone** | Use a package-aware destination and test media fidelity before switching |

The main question is simple: if you reduced each note to its text fields, would you still have the material you need? If the answer is no, TXT is the wrong migration format.

## The two-export safety model

Do both exports before changing anything in Anki or creating a large deck elsewhere.

| File | What it is for | What it protects |
| --- | --- | --- |
| `.colpkg` with **Include media** enabled | Recovery | The collection's notes, cards, decks, note types, scheduling information, and bundled local media |
| **Notes in Plain Text** `.txt` | Portability | The contents of exported note fields, separated by tabs |

The [Anki export documentation](https://docs.ankiweb.net/exporting.html) says a collection package contains the entire collection with scheduling included. Its media option decides whether local images, audio, and other files are bundled. Anki's [backup guide](https://docs.ankiweb.net/backups.html) recommends storing a manual collection package somewhere safe, such as another device or cloud storage.

The TXT file is deliberately narrower. Anki writes note fields into a text file and separates fields with tabs. When HTML and media references are included, you can also see the markup stored inside those fields. That makes the content inspectable and reusable, but it does not turn the file into a portable copy of the whole Anki system.

A `.colpkg` protects collection data. It does not package the Anki application or your add-on code, so keep a separate record of any add-ons your workflow depends on.

If you want a broader backup routine beyond this migration, see [how to back up flashcards](/blog/how-to-back-up-flashcards/).

## Export 1: make the recovery `.colpkg`

Use the desktop Anki app and follow the official manual's recovery path. If media matters to your cards, run **Tools > Check Media** first; Anki's [media guide](https://docs.ankiweb.net/media.html) says this reports files referenced by notes but missing from the media folder.

1. Open **File > Export**.
2. Select **Anki collection package (`.colpkg`)** as the export format.
3. Enable **Include media**.
4. Save the file outside Anki's profile folder.
5. Copy it to a second location that is not the computer holding your collection.

Give the file a date in its name, for example `anki-collection-2026-08-27.colpkg`. Then check that the file exists in both locations and has a non-zero file size.

Do not “test” this backup by importing it over your live collection. Anki warns that importing a `.colpkg` deletes and replaces the current cards; existing media files are not deleted. If you ever need to restore it, follow the official restore instructions and expect collection changes made after the backup to be lost.

This is the file you keep even if the TXT migration works. It preserves the collection state that the text export cannot represent.

## Export 2: make a small Notes in Plain Text sample

Start with a representative deck, not your full collection. Pick a deck that contains the awkward cases you actually use: an extra field, a tag you care about, a formatted answer, a cloze, and a media reference if those exist in the wider collection.

Then:

1. Open **File > Export** again.
2. Choose **Notes in Plain Text**.
3. Set the export scope to the representative deck.
4. Enable **Include HTML and media references** so the sample exposes formatting and file dependencies. This keeps references visible; it does not put the media files inside the TXT file.
5. Enable **Include tags** if you plan to keep them. You will still need to map and verify them in the destination.
6. Save the result as a `.txt` file and leave the source collection in place.

Anki calls this a notes export for a reason. It exports the stored fields, not a screenshot of each rendered card. If one note creates forward and reverse cards through templates, the text file still describes the note fields; it does not carry the destination-neutral logic that generated those two review cards.

Once this small sample works, repeat the same process for the remaining suitable decks. A failed sample costs a little inspection time. A failed full migration creates a cleanup project.

## Open the TXT file before giving it to any importer or AI

Do not treat the export as an opaque attachment. Open it in a text editor that can reveal tabs, or import a copy into a spreadsheet without overwriting the original.

Recent Anki exports may begin with lines such as `#separator:tab`, `#html:true`, or `#tags column:...`. These are file headers, not notes. Keep them in the untouched original, but exclude them if you copy a few note rows into a separate test file for a destination that does not understand Anki headers.

Check five things:

1. **Field count:** Each row should have the number of tab-separated fields you expect. Anki's [text import guide](https://docs.ankiweb.net/importing/text-files.html) explains that field separators matter and that fields can be mapped independently.
2. **Field order:** Write down what each column means: Front, Back, Example, Source, or something else. Field names and card-side meaning may not be obvious from raw rows.
3. **HTML:** Look for fragments such as `<b>`, `<br>`, or `<div>`. Anki embeds formatting as HTML when it is included in the export. Another app may render it, strip it, or show it as text.
4. **Cloze markup:** Search for strings such as `{{c1::Paris}}`. A generic front/back destination will not inherit Anki's cloze-generation behavior just because that text exists in a field.
5. **Media references:** Search for `<img src="...">` and `[sound:...]`. The reference is not the image or audio file. Anki stores those files separately in its media folder.

Also inspect tags if you rely on them. Anki's [text import guide](https://docs.ankiweb.net/importing/text-files.html) supports a dedicated tags field and a `#tags column` header, but your destination may use a different format. Your migration keeps tags only if you included them, mapped them deliberately, and verified the created cards. Never assume a familiar `parent::child` hierarchy survived because a few tag names appear in the sample.

Do not replace every tab with a comma as a quick cleanup. A tab is the boundary between fields. Changing separators without proper CSV quoting can turn commas, quotes, or line breaks inside the content into broken rows.

I would make a tiny mapping note next to the export:

```text
Column 1 -> front
Column 2 -> back
Column 3 -> append to back as an example
Column 4 -> keep as tags only after review
HTML -> strip except for line breaks
Cloze markup -> rewrite manually
```

That short note makes the migration repeatable. It also gives you something concrete to compare with the destination's result.

## What survives, and what stops at the TXT boundary

| Anki data or behavior | In Notes in Plain Text? | What to do |
| --- | --- | --- |
| Note field text | **Yes** | Map each tab-separated column deliberately |
| Simple formatting | **As embedded HTML when included** | Test how the destination handles it; strip or rewrite when needed |
| Tags | **Only if included in the export** | Map the tag column deliberately and verify names and hierarchy |
| Images and audio | **References may appear; files do not travel inside TXT** | Keep the `.colpkg` recovery copy and move required media separately |
| Card templates and CSS | **No** | Rebuild the card shape or choose a package-aware importer |
| JavaScript or add-on behavior | **No** | Keep using Anki if the behavior is part of the learning workflow |
| Cloze behavior | **No** | Convert cloze syntax into supported card types or ordinary Q&A cards |
| Multiple cards generated from one note | **Not as template behavior** | Decide which directions should become separate destination cards |
| Deck names and hierarchy | **Only if included as export metadata** | Map names deliberately; do not expect the destination to rebuild the structure |
| Deck presets | **No** | Recreate only the settings you still need |
| Due dates, intervals, review history, and scheduler state | **No** | Treat destination cards as a new review history |

That last row is the expensive one. Card content and scheduling are different assets. A successful **Anki export TXT** can preserve the words while still resetting every card's learning state.

Sharing a scheduler family does not make two apps' card histories interchangeable. A destination cannot infer your old due dates, stability, difficulty, or review events from question-and-answer text. If that history matters, read [what FSRS stores and calculates](/blog/what-is-fsrs/) before deciding to reset it.

## Run a reversible test in the destination

Keep Anki as the source of truth during the test. Create a temporary destination deck, import or draft only the representative sample, and inspect every result. Nothing in this stage requires deleting, editing, or suspending the original notes.

Your verification pass should answer:

- Did every expected note create the right number of cards?
- Did the correct fields land on the front and back?
- Did tabs, quotes, line breaks, non-Latin text, and code snippets survive?
- Is HTML rendered correctly, exposed as raw markup, or removed?
- Were clozes converted intentionally rather than copied as broken syntax?
- Do tags still mean what they meant in Anki?
- Are media-dependent cards understandable, and are required files present?
- Did the destination create duplicates?
- Is it clear that scheduling starts from scratch?

Compare the sample against Anki side by side. Do not accept “most of it looks fine” when one missing field could affect every note in a large export.

If the test fails, remove the temporary cards using the destination's own cleanup flow, then change the mapping or cleanup process. Your Anki collection and both export files remain intact. That is what makes the test reversible.

## Using the TXT file with Flashcards Open Source App

Flashcards does not have a direct Anki importer. It cannot read `.apkg` or `.colpkg` and reconstruct Anki templates, media, or review history.

The current hosted path is AI-assisted drafting from file attachments. Open the [hosted app using the getting-started guide](/docs/getting-started/), attach the TXT or a carefully prepared CSV file in AI chat, and explicitly ask for a small draft without saving anything. Review the proposed cards in chat; only then ask the assistant to save the approved batch.

A useful first request is specific about the mapping and cautious about side effects:

```text
Read the attached Anki Notes in Plain Text export. Do not save cards yet.
Treat tabs as field separators. Use column 1 as the front and column 2 as
the back. Append column 3 under "Example". Show a small sample first, keep
the source wording, and flag rows with HTML, cloze markup, missing fields,
or media references instead of guessing.
```

Adjust that request to match the mapping you wrote down after inspecting the file. If the drafts are overloaded or vague, use the checklist for [fixing AI flashcards before review](/blog/how-to-fix-ai-flashcards/). AI helps with repetitive restructuring here; it is not evidence that the migration preserved the source correctly.

After you approve a small batch, save it to a temporary test deck, add a migration tag, and run the same verification list. Your tested result is the only useful proof for this particular Anki collection.

## Scale up without making the move irreversible

Once the representative deck passes:

1. Group the remaining decks by note shape instead of exporting everything into one ambiguous file.
2. Export and inspect one group at a time.
3. Reuse a written field mapping only when the note types really match.
4. Review each created batch before moving to the next.
5. Keep the `.colpkg`, the untouched TXT files, and Anki itself.

Choose a clear cutover point if you decide to study the new cards. Reviewing the same material in both apps creates two independent schedules that immediately diverge. The old Anki schedule remains available in the recovery copy, but it will not keep up with reviews performed elsewhere.

There is no prize for deleting Anki quickly. Keep the original collection until the new deck has survived normal use and you are comfortable with everything the TXT path left behind.

## When you should not migrate from Anki this way

Stay in Anki, or choose a destination that explicitly imports `.apkg`, when your collection depends on:

- complex note types or several generated card directions;
- custom templates, CSS, JavaScript, or add-ons;
- cloze behavior you do not want to rebuild;
- Image Occlusion, audio, or images that carry essential information;
- deck presets and organization that must transfer exactly;
- review history or current scheduling that you cannot afford to reset.

Anki is a strong fit for those workflows. TXT migration is not a verdict on the app; it is a narrow tool for people whose valuable asset is mostly the note content. The broader [Anki vs Flashcards comparison](/blog/anki-vs-flashcards-open-source-app/) covers the product tradeoffs without assuming that everyone should switch.

## The safe version is intentionally boring

To migrate from Anki without risking the original collection, keep the process plain:

1. Export a `.colpkg` with media and store it elsewhere.
2. Export a representative deck as **Notes in Plain Text**.
3. Inspect tabs, fields, HTML, clozes, tags, and media references.
4. Write an explicit source-to-destination mapping.
5. Build a temporary sample deck and verify every card.
6. Scale up only after the sample passes.
7. Keep Anki and the recovery package while the new workflow proves itself.

The TXT file moves content. The `.colpkg` protects the collection. Once you stop asking one file to do both jobs, an Anki migration becomes much easier to reason about—and much easier to reverse.
