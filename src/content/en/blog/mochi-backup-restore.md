---
title: "Mochi Backup and Restore: Recover Cards Without Losing New Work"
description: "Recover Mochi cards from Trash or a native backup, preserve newer work, and check cards, attachments, and review history before restoring your study setup."
date: "2026-10-02"
image: "/blog/mochi-backup-restore.png"
keywords:
  - "Mochi backup and restore"
  - "recover deleted Mochi cards"
  - "Mochi Trash"
  - ".mochi backup"
  - "Mochi user directory"
---

Your missing Mochi cards might still be in Trash. Or they might be in last week's backup, alongside an older version of everything else. Recovering those cards shouldn't cost you the vocabulary you added yesterday or the reviews you've completed since the backup.

Start by checking whether the cards are archived or trashed. If you need a backup, preserve today's collection and open the older copy in an isolated local environment before changing the surviving one. For a few lost cards, you can recover their content by hand while keeping newer work in place. Combining old and new native review histories needs a separate recovery plan.

This guide follows Mochi's official documentation, checked October 2, 2026. The recovery ledger is an original worked example. The isolation procedure is a precaution based on those sources, not a hands-on recovery test or a documented cloud-sync recovery method.

![A woman fits a recovered cream tile into a mosaic while an older fragment rests separately and the blue border stays in place](/blog/mochi-backup-restore.png)

## Check where the cards went

A quiet review queue doesn't prove that cards have been deleted. Check the deck itself and remove view restrictions that could hide the material. Our [Mochi custom views guide](/blog/mochi-custom-views-cram/) explains how to compare the visible set with the cards you actually want.

| What you find | What to do next |
| --- | --- |
| The card or deck is archived | Unarchive it if you want it back in regular reviews. |
| The missing cards are in Trash | Use **Restore** on the affected items. Check the recovered content before continuing. |
| Trash was emptied, or the cards were deleted from Trash | Look for a backup made before the deletion. |
| The card is present but absent from one view | Investigate the view and review status before importing anything. |

Archived cards keep their content and history while leaving **New cards** and **Due today**. You can reverse archiving from the card or deck menu. [Mochi archiving documentation](https://mochi.cards/docs/reviewing/archiving/)

Mochi distinguishes moving cards to Trash from permanently deleting them; its [official interface text](https://github.com/mochi-cards/mochi-translations/blob/master/translations.edn) includes **Trash**, **Restore**, and a reminder that trashed cards can be restored. Once permanently deleted, cards require a backup or export for recovery. Cloud sync isn't a documented way to resurrect them. [Mochi card deletion rules](https://mochi.cards/docs/cards/)

## Save the collection that survived

Before trying an older backup, record the missing deck, approximate deletion time, and identifiable card titles. Then preserve the current state, including the work that still looks fine.

In **Settings**, use **Export everything** to save a current `.mochi` file. Name it clearly, for example `mochi-current-2026-10-02.mochi`. For a complete local snapshot, also close Mochi and copy its entire user directory. If the app won't open, start with the directory copy. Keep these backups outside Mochi's working directory. [Mochi backup instructions](https://mochi.cards/docs/getting-started/backing-up/)

Keep the older backup untouched too. Work from a duplicate, and record whether it contains the whole collection or only one deck. A filename is a clue to its date and scope; inspecting the contents is the check.

| Copy you have | What it can preserve |
| --- | --- |
| Native `.mochi` export | Cards, deck structure, templates and fields, attachments, tags, order, and review history |
| Mochi user directory | Local collection, media, history, settings, and login state |
| Markdown or CSV export | Readable card material, with losses that make it unsuitable for a complete native restore |

Mochi's [export documentation](https://mochi.cards/docs/import-and-export/exporting/) describes those format differences. Markdown and CSV exports omit review history and templates; Markdown also omits card order. A readable copy is still useful when the only goal is recovering text. For CSV migration into another app, use the separate [Mochi-to-Anki guide](/blog/mochi-to-anki/).

## Open the backup away from your live collection

Use the installed desktop app with separate local data. One practical option is a separate operating-system user account. Prepare that account and install Mochi if needed, then confirm that its local library is empty without signing into your live Mochi account. A new deck inside your existing library doesn't provide this separation.

Keep the recovery environment disconnected from the network during inspection. These are suggested precautions to keep the old and current copies apart; Mochi's docs don't provide a conflict-resolution promise for reconnecting restored data.

### If you have a `.mochi` file

Open the empty local library in the separate OS account. Use Mochi's **Import Deck** action to select a duplicate of the old `.mochi` file. Leave the recovery copy unsigned-in and offline.

Native import preserves history, order, templates, fields, tags, and attachments. The official [import guide](https://mochi.cards/docs/import-and-export/importing/) recommends this format for backups. It also describes updating an existing deck through the native format, but doesn't establish how to reconcile an old backup with newer edits and reviews. Use the empty library to inspect what the backup actually contains.

### If you have a user-directory backup

Close Mochi in the separate OS account. Preserve any directory it created there, then replace it with a duplicate of the old backup at that account's Mochi data location:

| Operating system | Mochi user directory |
| --- | --- |
| Windows | `%APPDATA%\Mochi` |
| macOS | `~/Library/Application Support/Mochi` |
| Linux | `$XDG_CONFIG_HOME/mochi`, or `~/.config/mochi` |

Mochi documents replacing this folder **while the app is closed**. The folder includes login state, so disconnect the network **before the first launch of the restored copy**, even in a separate OS account. The paths refer to that account's home or configuration directory. Keep your primary account's folder untouched. [Mochi directory backup and restore](https://mochi.cards/docs/getting-started/backing-up/)

If the restored copy doesn't open or its contents look wrong, stop and keep both originals. Don't troubleshoot by replacing your primary collection.

## Compare the old and new work in one ledger

Suppose you made a full backup on **September 27**. On **October 2**, ten Spanish cards are missing, but you've also added physiology cards and completed more reviews. These numbers are an example, not an observed recovery result.

| Material | September 27 backup | October 2 surviving copy | What must survive recovery |
| --- | --- | --- | --- |
| Spanish deck | 80 cards | 70 cards after ten were permanently deleted | The ten missing cards, plus the surviving 70 |
| Spanish audio card: “ahorrar” | Present, with audio and earlier reviews | Missing | Text and playable audio; old history if required |
| Physiology deck | 40 cards | 52 cards | The twelve newer cards |
| Physiology answer: “Where does filtration occur?” | Older answer | Corrected September 29 | The corrected answer |
| Reviews in both decks | Records through the backup date | Includes September 28–October 1 reviews | The later review records |

Replacing today's user directory with the September 27 directory would recover the ten Spanish cards while removing twelve physiology cards, the corrected answer, and later reviews from the working copy. That's a whole local snapshot replacement. Importing a `.mochi` file is a different operation; this example doesn't assume that native import always replaces the whole collection.

Finding “ahorrar” in the backup proves that one card is available. It doesn't prove that the backup is a suitable replacement for today's collection. Fill in a ledger like this before deciding what to restore. Check identifiable questions as well as counts: two collections can have the same total and different cards.

In the isolated copy, inspect a plain-text card, a template-based card, and cards with images or audio. Reveal every side, check field values, and open or play attachments. For representative review records, compare the review date, due date, interval, and remembered/forgot result; Mochi documents these as part of native history. [Mochi review-history export details](https://mochi.cards/docs/reviewing/fsrs/)

Compare dates with the backup date rather than expecting later sessions to exist there. Record anything missing before moving on.

## Choose how much you actually need to recover

For a few missing cards, manually copy their text and fields from the isolated copy into newly created cards in your surviving collection. Save and reattach the recovered media, then check the finished cards. These are new cards with new review histories; keep the native originals if the older histories matter.

In the worked example, this route leaves you with 80 Spanish cards and all 52 physiology cards. Check that the corrected physiology answer and the September 28–October 1 reviews on surviving cards are still there. The ten recreated Spanish cards begin new histories. Their earlier review records remain in the preserved backup, rather than being merged into the live cards.

If you need to combine native histories or recover a large deck while retaining newer work, stop before reimporting into the live collection. Ask [Mochi support](mailto:info@mochi.cards) for a procedure appropriate to your backups and current version. Include the two dates, backup scope, affected decks, and ledger. The [native format reference](https://mochi.cards/docs/import-and-export/mochi-format-reference/) describes IDs and review records, but that structure alone doesn't establish safe collision or history-merge behavior.

A whole-library replacement is a separate decision: every newer item you've listed needs a preservation plan first. Likewise, don't reconnect the restored directory or sign the imported recovery copy into your live account merely because it looks correct offline. The sources checked here don't guarantee which state will win after reconnection.

Once the recovered material is in your intended study collection, check it against the ledger and create a fresh dated native backup. Keep the earlier originals until you're satisfied with the result. Our [flashcard backup guide](/blog/how-to-back-up-flashcards/) covers keeping recovery copies outside the device you study on.
