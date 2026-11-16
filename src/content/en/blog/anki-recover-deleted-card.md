---
title: "How to Recover a Deleted Anki Card From deleted.txt"
description: "Recover a deleted Anki card from one row in deleted.txt and keep your recent reviews. Use Undo if you just deleted it and want the original history back."
date: "2026-11-16"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/8b1edfbed81887c5a12527504bf92ee0ad1944cf593e20f2f19c334c2db594b3.webp"
keywords:
  - "recover deleted Anki card"
  - "deleted.txt"
  - "Anki deletion log"
---

Just deleted a note in desktop Anki? If **Edit → Undo Delete Note** refers to that deletion, use it now. Undo can bring back the original cards with their intervals and review history. The menu names the last action. If you’ve already reviewed more cards or made other edits, repeated Undo can reverse those changes too. [How Undo affects reviews](/blog/anki-undo-review/)

If you’re unsure whether you deleted it, open **Browse**, clear the search filters, and look for a word or phrase from either side of the card. A card that still shows up may be [buried or suspended](/blog/anki-bury-vs-suspend/). Anki stores the wording in a note, which can make cards in both directions. Deleting the note removes every card it generated. [Anki’s Browse guide](https://docs.ankiweb.net/manual/browsing)

If Undo is out of reach, import a single row from Anki’s `deleted.txt` log to recover the wording. Anki generates new cards from that row. If you need the old scheduling or review history, open a backup from before the deletion in a **separate, unsynced profile** to see what it contains. [How to open an Anki backup in a temporary profile](/blog/recover-deleted-anki-deck/)

![A woman compares two matching burgundy socks over a laundromat lost-and-found basket](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/8b1edfbed81887c5a12527504bf92ee0ad1944cf593e20f2f19c334c2db594b3.webp)

## Copy the deletion log from your profile

Open Anki’s data folder, then open the folder named for the profile where you deleted the note. Copy `deleted.txt` to your desktop or another folder you can easily find. You’ll edit the copy in a plain-text editor and import it into that same Anki profile. [Anki’s deletion log documentation](https://docs.ankiweb.net/manual/backups#deletion-log)

| System | Default Anki data folder |
| --- | --- |
| Windows | `%APPDATA%\Anki2` |
| macOS | `~/Library/Application Support/Anki2` |
| Linux | `~/.local/share/Anki2` |

Flatpak builds and custom installations can use different folders. If the log or the row you need is missing, look for a backup made before the deletion. [Anki’s file locations](https://docs.ankiweb.net/manual/files#user-data)

## Keep just the row for your note

Say the log contains `mesa` and `ventana`, and you want `ventana` back. Search the copy for `ventana` and read the rest of the row to make sure it’s the entry you want. Keep any header lines already at the top of the file and the entire `ventana` row, including the tabs between columns. Remove all other note rows from the copy and save it as a UTF-8 text file called `recover-one.txt`.

This is the one-row file from the test. Use the row from your own log, with its own IDs.

```text
#guid column:1
#notetype column:2
#nid	mid	fields
1794830827635	1794830827628	ventana	<b>window</b>
```

Anki 26.09.4 writes the numeric note ID in the first column, which `#guid column:1` tells the importer to read as a GUID. The second value is the numeric note type ID. After that come the fields, `ventana` and `<b>window</b>` in this case. For the import to work, the note type needs to exist in your profile with its fields in the same order. [Anki 26.09.4’s deletion log writer](https://github.com/ankitects/anki/blob/26.09.4/qt/aqt/main.py#L1669-L1682)

## Import the row and check your cards

1. If your log has both `#guid column:1` and `#notetype column:2`, choose **File → Import** in the original profile and open `recover-one.txt`. Set **Field separator** to **Tab**, set **Existing notes** to **Preserve**, and choose the destination deck. The test used `Vocabulary`.
2. Turn on **Allow HTML in fields** if the row contains markup you want Anki to render, such as `<b>window</b>`. Check the preview for a single note row with the values in the expected columns. [Anki’s text import settings](https://docs.ankiweb.net/manual/importing/text-files)
3. If the preview looks right, import and check the report for one new note. If Anki reports a match, search **Browse** for that note before you try again. In **Cards** mode, preview the recovered cards and check their deck. `Basic (and reversed card)` makes `ventana → window` and `window → ventana`. A template deck override can send a card to a different deck.
4. Open **Browse → Cards → Info** on a card you reviewed in another deck and look for today’s review entry. Check that each recovered card has an empty review history. [Anki’s Card Info guide](https://docs.ankiweb.net/manual/stats#card-info)

If either import header is missing or the preview splits the row in the wrong places, use **Add** once you can tell which text belongs in each field. Pick the deck and note type, then copy the fields from the log. For the example, that’s `ventana` on the front and `window` on the back, with bold applied in the editor. [Anki’s guide to adding notes](https://docs.ankiweb.net/manual/editing#adding-cards-and-notes)

Reapply any tags you need. The log saves the text of the fields, including references to images or recordings. Those references work when the files are still in your profile’s `collection.media` folder. If a file is missing, recover it separately. [How to trace a missing Anki image](/blog/anki-images-not-showing/)

## What the one-note test recovered

An automated macOS test ran Anki 26.09.4’s deletion log code and Python backend against a disposable collection. Immediate Undo restored the original note and the reviewed card, including their IDs and the card’s interval and review history. After redoing the deletion, the test imported just the `ventana` row and got one new note, two fresh cards in `Vocabulary`, and the bold markup in the answer field. Anki found no `mesa` note after the import. The test compared the `Biology` card’s due value, interval, review and lapse counts, and review history before and after recovery and found them identical.

The test covered local collection behavior through Python. The desktop instructions come from Anki’s manual and released source. This article was written with AI assistance.
