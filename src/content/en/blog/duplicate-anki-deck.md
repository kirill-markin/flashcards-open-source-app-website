---
title: "How to Duplicate an Anki Deck Without Changing the Original"
description: "Duplicate a simple Anki deck as independent notes, check copied templates and new study progress, and choose a separate profile when you need a fuller rehearsal."
date: "2026-10-16"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/22c0be912d056fccce744a81f3c313f0f91d7a68780aeefd5f96c22ccbcaaa76.webp"
keywords:
  - "how to duplicate an Anki deck"
  - "duplicate Anki deck"
  - "copy Anki deck without changing original"
  - "independent Anki copy"
---

Two notes can produce four Anki cards. Copying their text is only half the job: if the new notes still use the original note type, a template edit can change how both decks look.

To **duplicate a simple Anki deck with independent notes and templates**, export its notes as text without identifiers, clone its note type, and import into a new deck using the clone. Choose the duplicate action rather than updating existing notes. The copied cards start new; the original cards keep their progress.

The worked example below checks both kinds of independence: changing an answer and changing a card template. It uses the standard two-field **Basic (and reversed card)** note type, without media or template deck overrides. For a complex deck or a copy that retains learning progress, use the separate-profile alternative below.

![A ceramicist cuts a triangular notch into a copied hexagonal paper pattern while the intact master lies beside it](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/22c0be912d056fccce744a81f3c313f0f91d7a68780aeefd5f96c22ccbcaaa76.webp)

## A new deck name doesn't make new notes

A deck holds cards. Notes hold fields, and note types hold the templates that generate cards. Moving cards to another deck doesn't give you separate note content. Even when notes are separate, sharing a note type still connects their template edits.

An APKG round trip also needs care. Anki recognizes notes already present in the collection and can update them; renaming the package isn't an instruction to create independent copies. This follows Anki's [packaged-deck import rules](https://docs.ankiweb.net/manual/importing/packaged-decks).

Choose what you actually need before copying:

| Your goal | Useful approach |
| --- | --- |
| Rewrite simple notes and their layout independently | Text export, fresh notes, cloned note type |
| Rehearse changes to a richer deck, optionally keeping progress | APKG in a separate, unsynced profile |
| Put the same fact under several topics | [Tags](/blog/anki-tags-vs-decks/) |
| Do extra exam practice without another permanent set of notes | [A filtered deck](/blog/anki-filtered-decks-without-rescheduling/) |

If the duplicates already exist accidentally, use the [duplicate-card cleanup guide](/blog/anki-duplicate-cards/). Here, creating new identities is deliberate.

## Set up a small copy you can inspect

Before applying the method to valuable material, save a collection backup using the [APKG and COLPKG guide](/blog/anki-apkg-vs-colpkg/). Rehearse with demonstration notes first.

Create a deck named `Copy rehearsal::Source`. Add these two notes with the unchanged **Basic (and reversed card)** type:

| Front | Back |
| --- | --- |
| triangle | A polygon with three sides. |
| hexagon | A polygon with six sides. |

That makes two notes and four cards: each shape can be asked in both directions. Review one source card once so you have progress to protect. In Browse, select each source card and open **Cards > Info** to record its Note ID, Card ID, scheduling information, and review history. The [browser manual](https://docs.ankiweb.net/manual/browsing#cards) describes this action. Record the note fields and source template text too. Don't study or reschedule the source during the comparison.

Create an empty deck called `Copy rehearsal::Copy`.

Next, open **Tools > Manage Note Types > Add**, choose the **Clone** entry for the source's **Basic (and reversed card)** type, and name it `Copy rehearsal reversed`. Leave its fields and templates unchanged for now. [Anki's note-type instructions](https://docs.ankiweb.net/manual/editing#adding-a-note-type) distinguish cloning an existing type from adding a stock type.

The destination deck and cloned type solve different problems. You need both for this exercise.

Deck settings are a third connection. New decks use the **Default** options preset, and editing a shared preset affects all decks assigned to it, as Anki's [preset documentation](https://docs.ankiweb.net/manual/deck-options#presets) explains. Leave Options unchanged during this rehearsal. Before changing shared preset settings for the copy, use **Clone Preset** and confirm the copy uses that separate preset. The [deck-options guide](/blog/anki-deck-options-presets/) covers the checks, including collection-wide settings that a separate preset cannot isolate.

## Export only the two note fields

Through **File > Export**, choose **Notes in Plain Text** and select the source deck. Use these settings:

| Export setting | Choice |
| --- | --- |
| Include HTML and media references | On |
| Include tags | Off for this exercise |
| Include deck name | Off |
| Include note type name | Off |
| Include unique identifier | Off |

These controls are present in the [released Anki 26.09.3 text exporter](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/import_export/exporting.py); their [English labels are in the release source](https://github.com/ankitects/anki/blob/26.09.3/ftl/core/exporting.ftl). The [export manual](https://docs.ankiweb.net/manual/exporting) explains that note fields are tab-separated.

The exported UTF-8 file in the backend test contained exactly this text. The space between each shape and answer is a tab:

```text
#separator:tab
#html:true
triangle	A polygon with three sides.
hexagon	A polygon with six sides.
```

There are two data rows. The lines beginning with `#` tell Anki how to read them. Don't add a `Front` / `Back` data row. If you manually prepare a file with such a heading, remove that row before importing.

Leaving out the GUID removes the exported note identity. Leaving out deck and note-type columns lets you choose the destination explicitly. Don't invent replacement GUIDs. Anki creates them for new notes.

## Import once into the cloned type

Open the text file through **File > Import**. Before accepting, inspect the preview:

| Import setting | Required value |
| --- | --- |
| Field separator | Tab |
| Note type | Copy rehearsal reversed |
| Deck | Copy rehearsal::Copy |
| Field mapping | Column 1 → Front; column 2 → Back |
| Existing notes | Duplicate |
| Match scope | Note type |
| Allow HTML in fields | On |
| GUID, deck, or note-type columns | None |

**Duplicate** means create a new note. It is the released label for importing matches as new notes, as shown in Anki's [import controls](https://github.com/ankitects/anki/blob/26.09.3/ftl/core/importing.ftl). Don't select **Update** for this task. Our [CSV update guide](/blog/anki-csv-update-existing-notes/) covers the opposite goal: preserving existing note identities.

A nonempty GUID can prevent the duplicate action from making a copy. A deck column or note-type column can also direct the import away from your chosen destination. These are documented [text-import rules](https://docs.ankiweb.net/manual/importing/text-files), so inspect the file as well as the dropdowns.

Confirm the preview shows `triangle` under Front and its complete answer under Back. Import **once**. Importing again with the duplicate action creates more notes; repeated imports aren't a way to repair a bad mapping.

## Check the copy ledger, then make two edits

In Browse, compare Notes mode with Notes mode and Cards mode with Cards mode. For this exact example, the expected totals are:

| Check | Source after copying | Copy after importing |
| --- | --- | --- |
| Notes | Same 2 | 2 new notes |
| Cards | Same 4 | 4 new cards |
| Note IDs and Card IDs | Original identities | Different identities |
| Recorded source review | Still present | Not copied |
| Note type | Original reversed type | Copy rehearsal reversed |

Counts alone can't prove independence. Check the copied triangle's fields, then change its Back to:

```text
A polygon with three sides and three angles.
```

Reopen the source triangle. Its Back should still be `A polygon with three sides.`

Now open the copied note's card-template editor. Confirm it names `Copy rehearsal reversed`, select Card 1, and append this to its front template:

```html
<p>Copy layout check</p>
```

Preview that copied card. Check the original type's Card 1 separately: its front template should remain `{{Front}}`, with no added marker. This second check catches a shared note type that an answer edit would miss. Remove the marker from the cloned template after checking it.

Compare the source Card IDs, due information, intervals, and recorded history with your earlier record. The same original cards should remain. The copied cards should be new, with no source review history. Starting fresh is part of this method; copying the wording doesn't copy what you've learned.

If the totals or edits disagree with the ledger, stop and inspect the first mismatch. Check destination type, field mapping, identity columns, and whether the file was imported twice before attempting a larger copy.

## What the backend test actually established

On October 16, 2026, an automated rehearsal ran with Anki's released Python package **26.9.3** on **macOS 26.6.1, Apple silicon**, in a fresh disposable collection. The corresponding desktop release is [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3). No existing user profile or AnkiWeb account was accessed.

The test created the two notes, recorded one genuine scheduled answer, exported the two-field text, cloned the note type, and imported with the backend's `DUPLICATE` action. It then performed the answer and template edits above.

| Measurement | Observed result |
| --- | --- |
| Text rows exported / notes added | 2 / 2 |
| Copy cards / cards in the new state | 4 / 4 |
| Copy review-log entries | 0 |
| Source review-log entries | 1, unchanged |
| Copied note IDs and GUIDs | Distinct from the source |
| Source fields, card identities, scheduling fields, and review rows | Unchanged after both edits |
| Original / cloned Card 1 front template | `{{Front}}` / original plus the marker |

This was a backend API test, not a desktop click-through. It didn't test mobile clients, AnkiWeb, media, add-ons, cloze notes, image occlusion, or custom template routing. The desktop instructions combine that bounded result with the official manual and released UI source.

## Use a separate profile for a fuller rehearsal

For a deck with media, several note types, or learning progress you want to preserve, export an **APKG** with the needed media and deck presets. Include scheduling on export if you want progress, and enable **Import any learning progress** when importing. Both sides must permit it; the import option can't recreate history omitted from the file. See the [package guide](/blog/anki-apkg-vs-colpkg/) for the full procedure.

Create an empty profile through **File > Switch Profile** and import there. Leave it disconnected from AnkiWeb. The same note identities can exist in separate collections without being a second editable copy inside your daily collection.

Anki warns that connecting two profiles to the same AnkiWeb account can overwrite their data. Add-ons are shared across profiles, so this isolates collection data rather than the whole application. The [profiles manual](https://docs.ankiweb.net/manual/profiles) also discourages using profiles to divide everyday study content.

Finally, fresh note identities in one profile don't create separate media files. That profile still has a shared media store. The text recipe above deliberately excludes media: it establishes independent fields, templates, and new learning state for a simple deck, not a lossless cloning process for every Anki deck.

*Production note: This article was researched, drafted, and edited with substantial AI assistance. The automated backend rehearsal used demonstration data; desktop GUI steps were checked against documentation and released source rather than executed. The illustration was AI-generated. These editorial passes do not imply human review.*
