---
title: "Anki APKG vs COLPKG: Which Export Should You Choose?"
description: "Choose the right Anki export for sharing, transfer, or backup. Compare APKG and COLPKG, scheduling and media options, then check the file before importing."
date: "2026-09-26"
image: "/blog/anki-apkg-vs-colpkg.png"
keywords:
  - "Anki APKG vs COLPKG"
  - "Anki deck package vs collection package"
  - "include scheduling information Anki"
  - "export Anki deck without progress"
  - "Anki collection import"
---

An Anki collection import can replace every card in the profile you have open. Before choosing between APKG and COLPKG, decide what should still be there afterward: your other decks, your review history, and any edits you made to shared notes.

Use an **APKG deck package** for selected study material and a **COLPKG collection package** to restore or copy the whole collection. The next decision is whether the file should carry your learning progress. Before importing into your daily collection, try the file in a separate profile and check the result.

This is a documentation-based guide for desktop Anki, checked September 26, 2026. The rehearsal below is a suggested verification procedure, not a report of a hands-on test.

![A baker slides one tray of bread out of a wheeled rack while the other trays remain in place.](/blog/anki-apkg-vs-colpkg.png)

## Choose the export by its destination

Open **File > Export** and choose the format and settings for the job:

| What you want | Export choice |
| --- | --- |
| Give someone a deck to study from scratch | `.apkg`; scheduling off, media on if needed |
| Transfer one deck with your own progress | `.apkg`; scheduling on, media on if needed |
| Restore or copy the whole collection | `.colpkg`; scheduling is included; enable media |

An `.apkg` can contain a deck and its child decks. Importing it adds or updates content. A `.colpkg` contains the whole collection and replaces the current cards when imported; existing media files are not deleted. Older collection exports named `collection.apkg` are the exception to the extension rule: treat those as collection packages. [Anki’s export manual](https://docs.ankiweb.net/exporting.html) documents these boundaries.

For an APKG, **Include Scheduling Information** carries progress such as review history and card intervals. Turning it off strips scheduling and the `marked` and `leech` tags. **Include Media** and **Include Deck Presets** are separate choices. Decide whether the recipient also needs your deck settings.

If the receiving client is older, use the export option **Support older Anki versions**. Renaming a file’s extension does not convert its contents.

## An APKG update can change your notes

“Add a deck” sounds harmless until you already have an earlier version of it. By default, Anki recognizes previously imported notes and updates them when the package contains newer versions. A matching deck name alone tells you little about which notes will change.

Anki 23.10 and later provides controls to always update notes and note types, or never update existing objects. Unconditional updates can overwrite your modifications. A changed note type can prevent ordinary updates. Modern versions also offer note-type merging, which preserves fields and templates from both versions, requires a full sync, and may mark other notes as modified. Read the [packaged-deck import documentation](https://docs.ankiweb.net/importing/packaged-decks.html) before choosing.

For someone else’s deck, leave **Import any learning progress** unselected unless you want their schedule. This control, available since Anki 23.10, removes incoming scheduling information and `marked`/`leech` tags. For your own transfer, enable it as well as the export’s scheduling option. Neither setting can recover history omitted from the file.

Treat two decisions separately: whose card content should win, and whose learning progress should arrive. “The import finished” answers neither.

## Set up a rehearsal profile

First, preserve the current collection. Anki’s [manual backup procedure](https://docs.ankiweb.net/backups.html) uses a `.colpkg` export with media enabled, stored somewhere safe outside the active collection. Automatic backups do not include images or sounds. If you are recovering an older state, keep a separate copy of the current state too; it may contain newer notes you still need.

On desktop, choose **File > Switch Profile**, add a profile named something obvious such as `Import rehearsal`, and open it. Leave it disconnected from AnkiWeb. Each [Anki profile](https://docs.ankiweb.net/profiles.html) has its own collection and settings, but add-ons are shared. This isolates collection data; it is not a security sandbox. Never connect the rehearsal profile to the AnkiWeb account used by your normal profile.

Choose the starting state according to what you need to prove:

- For a package going to a new recipient, start with the empty rehearsal collection. This exposes missing content or media without borrowing anything from your existing collection.
- For an update to material you already use, first import a backup of the **destination collection** into the rehearsal profile. Then import the candidate APKG there. An empty profile cannot reveal whether an update replaces your personal edits.
- For a whole-collection restore, import the candidate COLPKG into the rehearsal profile and inspect the saved state before deciding to restore it elsewhere.

Write down the filename and chosen import options. To repeat a rehearsal, create a fresh unsynced profile and recreate the starting state there. Reimporting a COLPKG alone does not clear media left by a previous attempt, so it can make an incomplete package appear to work.

## Check more than the deck name

Before the rehearsal, choose a few recognizable examples: a reviewed card, a recently edited note, an image or audio card, and a note outside the intended deck. Record what you expect each to look like afterward. For an update, record the destination’s version of the edited note too.

Use **Browse** to inspect the result. Its [Cards and Notes modes](https://docs.ankiweb.net/browsing.html) count different things, so compare cards with cards and notes with notes. In Cards mode, expose the Due, Interval, and Reviews columns; use Preview to inspect rendered cards. For a selected card, **Cards > Info** shows its [review history](https://docs.ankiweb.net/stats.html#card-info).

Your acceptance checks should cover:

1. **Scope.** Find the intended deck and its child decks. Compare the relevant counts with the source. Investigate unexpected additions or missing cards instead of accepting a familiar deck title.
2. **Content.** Open the recognizable edited note. Compare its fields and preview each relevant card direction. Decide in advance whether your wording or the package author’s wording should survive.
3. **Progress.** For a personal transfer, compare the sampled card’s interval and review-history entries with the source. For a fresh shared copy in an empty profile, check that the author’s history is absent. Do not grade cards during this inspection.
4. **Media.** Preview image cards and play audio. Run **Tools > Check Media** to inspect missing-file reports, as described in the [media manual](https://docs.ankiweb.net/media.html). It does not scan card templates, so a clean report does not replace checking the rendered cards. Files already present in a copied collection can hide omissions; use a fresh empty profile to check that the package carries its own media. The [missing Anki images guide](/blog/anki-images-not-showing/) covers failures here.
5. **Other material.** After an APKG update rehearsal, inspect an unrelated deck and any notes sharing the affected note type. Confirm that the intended update did not change their usable content or card rendering.

## Three decisions to try before the real import

Suppose you are sending a language deck to a friend. Your acceptance sentence might be: “They get the vocabulary and pronunciation audio, with no review history from me.” Choose the first row of the export table and rehearse in an empty profile. A package that displays the words but cannot play the audio fails that requirement.

Now suppose you are moving one studied deck into another existing profile. Write: “My history arrives, and the destination’s other study material remains usable.” Rehearse against a copy of that destination, paying particular attention to overlapping notes and note types. Successfully importing into an empty profile would leave half the requirement untested.

Finally, suppose you need yesterday’s whole collection after a damaging edit. Write: “The saved collection is the state I want to resume, and I have separately preserved anything newer that matters.” Inspect the recovery package in the rehearsal profile. Before replacing the live collection, follow Anki’s restore instructions and account for changes made after the backup.

Keep the filename, options, and acceptance sentence together until the real import is complete. Confirm the active profile before importing, use the options you rehearsed, and check the result again. The broader [flashcards backup guide](/blog/how-to-back-up-flashcards/) covers where to keep recovery copies. A rehearsal gives you evidence about the file and starting state you checked; changing either calls for another check.
