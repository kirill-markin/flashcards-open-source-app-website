---
title: "Anki: Remove Reverse Cards from Selected Notes"
description: "Remove Anki reverse cards from selected notes, map the forward direction correctly, and check card identities and progress without changing other decks."
date: "2026-11-02"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/33661c64928157b25e1e6a7eef4d8f6e509fb930e43be0338c50e7dc9bcaa0d9.webp"
keywords:
  - "Anki remove reverse cards"
  - "delete reverse cards Anki"
  - "Anki Basic and reversed to Basic"
  - "Anki keep forward card review history"
  - "Anki change note type"
---

One French vocabulary note can produce two Anki cards: French → English and English → French. If you've decided to keep only recognition practice for some notes, you can remove their reverse cards while keeping the forward cards you've already studied.

On desktop Anki, select those notes in **Browse**, switch to **Notes** mode, and choose **Notes → Change Note Type**. Convert **Basic (and reversed card)** to **Basic**, keeping old forward **Card 1** as the source for new Card 1. Keep the fields aligned too: **Front → Front** and **Back → Back**. Old reverse Card 2 has no destination and is removed from the selected notes. This follows [Anki's reverse-card FAQ](https://docs.ankiweb.net/faqs/cards-are-reversed-appearing-twice).

The recipe below covers unchanged built-in note types with populated Front and Back fields. Its three-note worksheet checks both the cards you keep and a pair in another deck that should stay untouched. The expected results come from documentation and released Anki 26.09.3 source, checked November 2, 2026; this isn't a hands-on test.

![A repairer unclips a canvas bag's shoulder strap while its fixed handles remain intact, beside a second bag with its strap removed and an untouched third bag](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/33661c64928157b25e1e6a7eef4d8f6e509fb930e43be0338c50e7dc9bcaa0d9.webp)

## Choose whether to pause or remove the reverse

A note holds the text. Its templates generate cards, and each card has its own learning history. Choose the action by what you want to keep:

| Your intention | Suitable action | Scope |
| --- | --- | --- |
| Stop reviewing a reverse for now | Suspend that card in Cards mode | The selected card stays in the collection with its progress |
| Make selected and-reversed notes forward-only | Change those notes to Basic | Reverse cards belonging to the selected notes are removed |
| Remove the reverse template from a shared note type | Edit that note type's card templates | Notes using that template across the collection are affected, including other decks |
| Remove the vocabulary entry altogether | Delete the note | The note and all its cards are deleted |

If you might want the same reverse card back with its existing progress, [suspension is the simpler choice](/blog/anki-bury-vs-suspend/). In **Cards** mode, preview the intended reverse, select only its row, and use **Cards → Toggle Suspend**. In Notes mode, the selection includes the note's cards together. Anki documents these [Browser actions and modes](https://docs.ankiweb.net/manual/browsing#menus-and-actions).

Don't select a reverse row and press **Delete** to remove only that direction. Browser deletion deletes the note and its cards, even if you selected just one sibling. If the repeated question might come from a separate note, use the [duplicate-card diagnosis](/blog/anki-duplicate-cards/) first.

## Save a recovery copy before changing the structure

First, sync outstanding work from your other devices, then sync desktop. Through **File → Export**, save an **Anki Collection Package (`.colpkg`)** with **Include Media** enabled. It includes all decks and their scheduling. Importing a collection package replaces the open profile's current cards with the saved collection; keep it as a recovery copy rather than importing it into your working profile to check the file. See [Anki's export documentation](https://docs.ankiweb.net/manual/exporting#collection-colpkg) and the [APKG versus COLPKG guide](/blog/anki-apkg-vs-colpkg/).

For a rehearsal, create a separate profile through **File → Switch Profile** and import the backup there. Leave that profile disconnected from AnkiWeb. Linking two profiles to one account can overwrite one collection with the other, as [Anki's profile rules](https://docs.ankiweb.net/manual/profiles) explain. A successful rehearsal still needs to be repeated in your real profile before you sync the result.

## Record the notes and cards you intend to keep

Here is the worksheet. All three notes start as unchanged **Basic (and reversed card)**, with two cards each. Both cards from each note are in its listed deck. The two decks have no subdecks.

| Note | Deck | Front | Back | Decision |
| --- | --- | --- | --- | --- |
| A | French recognition | la clé | key (for a lock) | Keep forward only |
| B | French recognition | le vélo | bicycle | Keep forward only |
| C | French production | la fenêtre | window | Keep both directions |

Call the forward cards A1, B1, and C1, and the reverse cards A2, B2, and C2. These are worksheet labels; Anki's actual Note IDs and Card IDs are numbers. For this example, assume A1, B1, C1, and C2 have already been reviewed, so there is progress to compare.

Before converting anything:

1. Open **Browse** in **Notes** mode. Find A and B, select only those two notes, and use **Notes → Add Tags** to apply an unused tag, such as `forward-only-20261102`.
2. Replace the entire search with `tag:forward-only-20261102`. Confirm that it finds exactly A and B: **2 notes** in Notes mode and **4 cards** in Cards mode. A tag belongs to the note, so it gathers both directions.
3. Give C a different unused tag, such as `reverse-control-20261102`. Its tag search should show **1 note / 2 cards**.
4. In **Cards** mode, preview all six cards individually. Open **Cards → Info** and record all three Note IDs and all six Card IDs. For A1, B1, C1, and C2, also record the due information, interval, and a recognizable dated review-history entry.

Anki's [Card Info](https://docs.ankiweb.net/manual/stats#card-info) shows each card's history. Its [ID searches](https://docs.ankiweb.net/manual/searching#object-ids) let you find the exact objects later: `nid:123` finds one note's cards, and `cid:123,456` finds the listed cards. Replace those example numbers with your recorded IDs. Leave deck restrictions out of these identity checks so a sibling in another deck isn't hidden.

Make the before-and-after comparison in the same session, without studying, resetting, or rescheduling the cards between checks. For the whole worksheet, the search `tag:forward-only-20261102 or tag:reverse-control-20261102` should show **3 notes / 6 cards** before conversion.

## Map old Card 1 to new Card 1

Return to `tag:forward-only-20261102` in **Notes** mode. Select A and B only, choose **Notes → Change Note Type**, and select the unchanged built-in **Basic** destination. Custom fields, edited templates, and Cloze notes need their own mapping decisions; don't apply this table to them.

Check the field mappings and card-type mapping separately. Field mapping controls where the text goes. Card-type mapping controls which existing card continues under the destination template.

In Anki 26.09.3, the **old source dropdown appears before the new destination label**, as shown in the [released mapping component](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/change-notetype/MapperRow.svelte). Read each row as “take this old source and put it in this new destination.”

| Mapping | Select this old source | New destination |
| --- | --- | --- |
| Field | Front | Front |
| Field | Back | Back |
| Card type | Card 1, forward | Card 1, forward |

Basic has one destination card type. **Old Card 2 should not be assigned to it.** Keeping old Card 1 leaves old Card 2 unmapped; that is how this conversion discards the reverse. You don't need to delete the shared reverse template or run Empty Cards afterward.

Watch for these mapping mistakes before saving:

- **Old Card 2 → new Card 1:** retains the reverse card's identity and progress, then attaches them to the destination's forward question. The original forward card is dropped.
- **Nothing → new Card 1:** retains neither original card for that destination. The newly generated forward card doesn't continue the forward card you studied.
- **Swapped Front and Back fields:** changes the question served by the forward template, even if the Card 1 identity survives.

With the intended mapping, A1 and B1 remain the same forward cards. The [released conversion code](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/notetype/notetypechange.rs) removes unmapped card types within the selected Note IDs and retains mapped cards without resetting their learning state. This supports the checks below for this specific conversion; it isn't a guarantee for arbitrary note types.

Confirm the mappings, then save the conversion.

## Check identities as well as counts

Use the recorded tags and IDs after conversion. A and B now use Basic, so a search limited to **Basic (and reversed card)** will no longer find them.

| Check | Before | Expected after converting A and B |
| --- | --- | --- |
| A-and-B tag, Notes mode | 2 notes | The same 2 Note IDs |
| A-and-B tag, Cards mode | A1, A2, B1, B2 | A1 and B1 only |
| A1 and B1 | Recorded forward questions, IDs, due information, intervals, history | Same identities, questions, schedule, and history entries |
| Recorded A2 and B2 Card ID search | 2 reverse cards | No results |
| C's tag and recorded IDs | C1 and C2 on note C | Same Note ID, both original Card IDs, unchanged questions and progress |
| Combined worksheet tag search | 3 notes / 6 cards | The same 3 Note IDs / 4 cards |

In Cards mode, search for each recorded forward Card ID and preview it. A1 should still ask `la clé`, and B1 should still ask `le vélo`. Compare their Info with your record. Then search for the recorded A2 and B2 IDs; they should be absent. Repeat C's ID checks, preview both directions, and compare its due information, intervals, and recorded history entries.

**Four remaining cards alone don't establish a correct result.** Mapping old Card 2 to new Card 1 could produce the same total while discarding the studied forward cards you meant to preserve. The right questions must still belong to the right surviving cards.

If a check fails, stop before converting more notes or syncing the result to other devices. Compare the result with your mapping and recovery copy. Don't reset the surviving cards to make the totals look tidy.

## Why the other deck keeps its reverse

C wasn't selected for conversion. A and B move to Basic; C remains on Basic (and reversed card), with its two templates and two cards.

Removing Card 2 through the **Cards…** template editor has a broader scope. Anki's [released template-removal code](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/clayout.py) counts cards using that shared note type and template across the collection. It doesn't use the Browse selection as its boundary. A deck filter therefore doesn't make a shared template edit local to that deck.

C checks the part of the collection you deliberately excluded. If you had removed the shared reverse template instead of converting A and B, C's reverse would be affected too.

## Sync the verified collection, then resume study

If you rehearsed in a separate profile, return to your real profile, repeat the confirmed conversion there, and check that result before syncing.

Changing note types requires a one-way sync. Once your real desktop collection contains all the work you intend to keep and the checks pass, sync it and choose **Upload** to send that collection to AnkiWeb. Sync the other devices and choose **Download** when prompted to replace their collection with that state. These are Anki's [one-way sync rules](https://docs.ankiweb.net/manual/syncing#conflicts).

If another device still has unsynced work, resolve that before choosing a side. A one-way collection sync preserves one collection state rather than merging both. The [upload-or-download guide](/blog/anki-sync-upload-or-download/) explains that decision.

Removing A2 and B2 means giving up those card identities. Converting the notes back later can generate reverse cards again, but it doesn't restore the removed cards' former schedules. Suspension keeps those same cards available if you want the option to resume later.

For **Basic (optional reversed card)**, clearing Add Reverse is a different operation: an existing reverse becomes empty and needs a separate **Tools → Empty Cards** cleanup. That report covers the collection, beyond the current Browse search. The [optional reverse-card guide](/blog/anki-reverse-cards/) covers those checks. Keep that cleanup separate from this and-reversed-to-Basic recipe.

*Production note: AI tools performed substantial source research, drafting, editing, and illustration. The worksheet is an original, hypothetical example derived from Anki's documentation and released 26.09.3 source, the latest release checked on November 2, 2026. No desktop or mobile flow was executed, and the article doesn't claim personal testing or human review by Kirill Markin.*
