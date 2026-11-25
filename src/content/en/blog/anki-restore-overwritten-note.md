---
title: "How to Restore an Overwritten Anki Note Without Losing Reviews"
description: "Recover overwritten Anki text from a backup. Copy the old field into your existing note and check that the card still has its review history and due date."
date: "2026-11-25"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2684efef10af63d474dd2b9ed622623fb7dd84e1da220daba597515283d1b9de.webp"
keywords:
  - "Anki restore overwritten note"
  - "recover overwritten Anki text"
  - "Anki note field from backup"
  - "keep Anki review history"
---

Your Anki card for *un délai* suddenly says “A delivery address.” You’ve already improved the question and reviewed the card since your last good backup. To get the answer back and keep that newer work, open the backup in a separate desktop profile and copy the old answer into the note you study today.

![A guitar repairer holds a tuning peg above the empty hole beside five installed pegs](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2684efef10af63d474dd2b9ed622623fb7dd84e1da220daba597515283d1b9de.webp)

## Check the field and try Undo

Open **Browse** in desktop Anki and select the affected card. Read its fields in the editor. This guide uses one existing **Basic** note with plain text in **Front** and **Back**. If the most recent action under **Edit → Undo** is the overwrite you just made, undo it and check the field. If you’ve since reviewed cards or made edits you want to keep, use the backup steps below. Undo reverses the most recent operation first. [Anki’s Browse manual](https://docs.ankiweb.net/manual/browsing#edit)

If the editor still has the right wording but the card looks blank, check the template. If the note or the whole deck has gone missing, use its own recovery procedure. [Blank Anki cards](/blog/anki-blank-cards/) · [Deleted Anki note](/blog/anki-recover-deleted-card/) · [Deleted Anki deck](/blog/recover-deleted-anki-deck/)

## Save your current collection and identify the card

If you use AnkiWeb, open **Preferences → Syncing** and turn off **Automatically sync on profile open/close** before switching profiles. On macOS, **Preferences** is in the **Anki** menu. On Windows and Linux, it’s under **Tools**. Leave syncing paused until you’ve checked the repair. [Anki’s sync preferences](https://docs.ankiweb.net/manual/preferences#synchronisation)

Choose **File → Export**, select **Anki Collection Package (.colpkg)**, and enable **Include media**. Save it outside Anki’s data folder as something like `before-note-repair.colpkg`. This saves your current collection with its scheduling and any local images and audio. [Anki’s collection export options](https://docs.ankiweb.net/manual/exporting#collection-colpkg)

In **Browse**, switch to **Cards** mode if needed, select the card, and open **Cards → Info**. Save the **Note ID** so you can find the same note in both profiles. Also record the **Card ID**, the due date and interval if shown, and the latest entry in the review history. Compare those with the same card after the repair. [Anki’s Card Info](https://docs.ankiweb.net/manual/stats#card-info) · [Anki’s ID search syntax](https://docs.ankiweb.net/manual/searching#object-ids)

## Find the old wording in a separate profile

Find the `backups` folder inside the folder named for your usual profile. The default Anki data folder is `%APPDATA%\Anki2` on Windows, `~/Library/Application Support/Anki2` on macOS, and `~/.local/share/Anki2` on Linux. [Anki’s data folders](https://docs.ankiweb.net/manual/files#user-data)

1. Use the date and time in the filename to find the newest completed `.colpkg` from before the overwrite. Copy it to a folder outside Anki’s data folder and leave the original in place. Anki prunes older automatic backups over time. [Anki’s automatic backups](https://docs.ankiweb.net/manual/backups#automatic-backups)
2. In Anki, choose **File → Switch Profile**. Click **Add**, name the temporary profile **Read Old Backup**, then select it and click **Open**. Keep this profile signed out of AnkiWeb. Each profile has its own collection. [Anki’s profiles manual](https://docs.ankiweb.net/manual/profiles#profiles-window)
3. With **Read Old Backup** open, use **File → Import** and select the copied pre-edit `.colpkg`. Confirm the import after checking that you’re in the temporary profile. A collection package replaces the cards and review history in the active profile with the ones in the package. [How Anki imports collection packages](https://docs.ankiweb.net/manual/exporting#what-happens-on-import)
4. Open **Browse** and search for `nid:123`, replacing `123` with your saved **Note ID**. Check that the note matches and the field contains the wording you need. If the text was already overwritten in that snapshot, try an earlier backup in the same temporary profile. If none contains it, check the source you used to make the note. [Anki’s ID search syntax](https://docs.ankiweb.net/manual/searching#object-ids)

If the old field refers to a missing image or audio file, look for the file in a media-inclusive export or the original material. Anki’s automatic backups omit images and audio. [What automatic backups include](https://docs.ankiweb.net/manual/backups#automatic-backups)

## Copy the old field into the current note

Copy the text you need from the backup. Switch back to your usual profile through **File → Switch Profile** and run the same `nid:` search in **Browse**. Paste the recovered text into the affected field of that note. In the French example, you only edit **Back**. [Anki’s note editor](https://docs.ankiweb.net/manual/browsing#editing-area)

The note stores the wording. The card it generates has its own schedule and review history. Editing the answer on this Basic note keeps the same card, so the review still belongs to it. [Anki’s notes and cards](https://docs.ankiweb.net/manual/getting-started#key-concepts)

| What to check | Old backup | Before the repair | After the repair |
| --- | --- | --- | --- |
| Front | What does un délai mean? | In a delivery estimate, what does un délai mean? | In a delivery estimate, what does un délai mean? |
| Back | A time limit or a period of time. | A delivery address. | A time limit or a period of time. |
| Review history | No reviews | One review | The same review |

## Check the answer and the review history

In your usual profile, click **Preview** in **Browse** and read both sides without doing a review. Then open **Cards → Info** and compare the saved IDs, due date, interval, and latest review entry. Check another recent edit or review you expected to keep. In the test, the separate note for *une adresse* still read “An address.” [Anki’s Browse preview](https://docs.ankiweb.net/manual/browsing#editing-area) · [Anki’s Card Info](https://docs.ankiweb.net/manual/stats#card-info)

If your note generates several cards, preview each one. Changes to a conditional field or a cloze number can change which cards Anki generates. [Anki’s card generation rules](https://docs.ankiweb.net/manual/templates/generation)

Once those checks pass, use **Sync** in your usual profile and restore your automatic sync setting if you changed it. If Anki asks you to choose **Upload** or **Download**, cancel the prompt and check which copy has the changes you need. A one-way sync can replace the repaired collection or newer work on other devices. [Anki’s sync conflict guide](https://docs.ankiweb.net/manual/syncing#conflicts)

*AI researched, drafted, and edited this guide and generated its illustration. The French example uses fictional study data. An automated test used the official Anki 26.09.4 backend on macOS with two disposable collections. After reopening the repaired collection, the test checked the rendered answer, the newer question, the original IDs, the due date, the interval, the identical review entry, and the separate French note. The desktop menu steps follow Anki’s manual and released source. Kirill Markin builds Nibomo and publishes this site.*
