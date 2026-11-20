---
title: "How to Update a Shared Anki Deck Without Losing Progress"
description: "Reimport an updated Anki deck, choose whether to keep your edits, and check your review history. See what happened in six tested APKG imports."
date: "2026-11-20"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/8fd56eda734ad02788b1279d67d8f041c018b80f872b08d99a56a157c987cf19.webp"
keywords:
  - "update a shared Anki deck"
  - "reimport an APKG"
  - "Anki Merge note types"
  - "keep Anki review history"
---

The new version of your shared Anki deck fixes an answer you've already studied and adds a card you want. You've also edited that answer yourself. Keep the original deck in place and try the author's updated `.apkg` on a copy of your collection. Leave **Import any learning progress** off. Under **Updates**, choose **Update notes → Never** to keep your edits, or try **Always** if you're happy for the author's corrections to replace them. [Anki's packaged-deck manual](https://docs.ankiweb.net/manual/importing/packaged-decks)

Anki matches notes by an internal ID called a GUID. A rebuilt deck can have the same name and question text and still add duplicates if the notes have new IDs. Look for an update to the same shared deck. [Anki's APKG importer](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/rslib/src/import_export/package/apkg/import/notes.rs#L333-L351)

![A printmaker compares a fresh ginkgo print with an earlier proof marked in pencil](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/8fd56eda734ad02788b1279d67d8f041c018b80f872b08d99a56a157c987cf19.webp)

## Try the update on a copy of your collection

1. In desktop Anki, use **File → Export** and select **Anki collection package (.colpkg)** with **Include Media** enabled. Save the file separately as your backup. It holds your entire collection, including scheduling, images, and audio. [Anki's export manual](https://docs.ankiweb.net/manual/exporting)
2. Use **File → Switch Profile** to add and open a temporary profile. Leave it disconnected from AnkiWeb. Check the profile name before using **File → Import** to load your `.colpkg` there. A collection package replaces the collection in the open profile. [Anki's profile manual](https://docs.ankiweb.net/manual/profiles) · [APKG vs COLPKG](/blog/anki-apkg-vs-colpkg/)
3. In **Browse**, pick a reviewed card the author changed and record its current answer. Open **Cards → Info** and record the card ID, due date, interval, and a prior review. Then use **File → Import** to open the updated `.apkg`. Leave **Import any learning progress** off to exclude the sharer's reviews and scheduling. [Card Info](https://docs.ankiweb.net/manual/stats#card-info) · [Anki's packaged-deck manual](https://docs.ankiweb.net/manual/importing/packaged-decks)

## Choose which answer to keep

- **Keep your edits and add new notes.** Set **Update notes** and **Update note types** to **Never** and leave **Merge note types** off.
- **Accept corrections to matching notes.** Try **Update notes → Always**. It can replace your text even if you edited it later than the author. Anki 26.09.4 skips matching notes with identical edit timestamps under this setting, so check the answers you expected to change.
- **Prefer the newer edit.** Use **Update notes → If newer**. Anki compares when each note was last edited, independent of when you reviewed its cards. [Import options](https://github.com/ankitects/anki/blob/26.09.4/ftl/core/importing.ftl) · [Anki's timestamp comparison](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/rslib/src/import_export/package/apkg/import/notes.rs#L521-L531)

If you want a few corrections alongside your own wording, open the author's package in a separate empty profile without AnkiWeb and copy the changes you want into your existing notes.

In the test deck, one card asked what a brayer does. The learner's copy got an **Easy** review and a personal edit after the updated package was exported. The update corrected the answer and added a card about aligning a print. A third edition added a **Source** field to the note type, which defines the fields and card templates.

| Update tested | Update notes | Merge note types | What happened to the reviewed card's note |
| --- | --- | --- | --- |
| Corrected answer and new card | **Always** | Off | The author's answer replaced the personal edit |
| Corrected answer and new card | **Never** | Off | The personal edit stayed |
| Corrected answer and new card | **If newer** | Off | The later personal edit stayed |
| Same update with a new field | **Always** | Off | Anki reported a conflict and kept the personal edit |
| Same update with a new field | **Always** | On | The author's answer and **Source** value came through |

**Update note types** was set to **If newer** for all five rows. The last row was also tested with **Update note types → Always**, with the same result.

## When Anki says the note type has changed

If the import log says notes were skipped because their note type changed, check the affected answers in **Browse**. In the test with merging off, Anki added the new card under a separate note type. The brayer note kept its personal answer and original fields. [Anki's FAQ on skipped updates](https://docs.ankiweb.net/faqs/some-updates-were-ignored-because-the-note-type-has-changed)

If you want the corrections and the field changes, try **Merge note types** in a fresh rehearsal profile loaded from the same backup. Inspect the resulting fields and preview cards from other notes that use the same type. Merging can affect those notes too. [Anki's packaged-deck manual](https://docs.ankiweb.net/manual/importing/packaged-decks#updating)

## Check the card you already studied

Compare the old card's answer with the update choice you made. Open **Cards → Info** again and compare its card ID, due date, interval, and prior review. Then find the added card and check that it shows up as **New** with an empty review history. In all six test runs, the new card arrived and the reviewed card kept its ID, due date, interval, and review record.

Once the rehearsal looks right, repeat the same import and checks in your regular profile. If you plan to merge note types and use AnkiWeb, sync your other devices, then sync desktop before importing. A note-type merge requires a full sync. After checking the import, upload from desktop if it holds all the work you want to keep. If both copies contain changes you still need, cancel the prompt and back up both before choosing a direction. [Anki's sync manual](https://docs.ankiweb.net/manual/syncing#conflicts) · [How to choose upload or download](/blog/anki-sync-upload-or-download/)

AI assisted with the draft and ran six update imports of exported `.apkg` files using Anki's Python package 26.09.4 on macOS. The tests used isolated sample collections with incoming learning progress off. The desktop instructions follow Anki's manual and released interface code. Desktop clicks, media changes, and live sync were outside the test. The cover illustration was AI-generated.
