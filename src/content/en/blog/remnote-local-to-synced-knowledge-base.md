---
title: "Move a RemNote Local Knowledge Base to Sync, Including Images and PDFs"
description: "Move a local RemNote knowledge base to sync with a native export and a separate media copy. Check notes, review history, images, and PDFs before switching."
date: "2026-10-01"
image: "/blog/remnote-local-to-synced-knowledge-base.png"
keywords:
  - "RemNote local to synced knowledge base"
  - "RemNote missing images after import"
  - "RemNote export images"
  - "RemNote local knowledge base sync"
  - "RemNote PDF migration"
---

A RemNote import can bring back your lecture notes while leaving their diagrams and PDFs missing. The native export doesn't include those files. To move a RemNote local knowledge base to a synced knowledge base, transfer the notes with **Full RemNote (Complete)**, then copy the media separately. [RemNote's export guide](https://help.remnote.com/en/articles/7898019-exporting-and-printing-notes) explains this gap.

Use a fresh, empty synced destination and keep the local original while you check the result. Finish by opening your actual study material on a second device, including its attachments.

This guide follows official documentation checked October 1, 2026. The worksheet is a proposed transfer check; no hands-on migration was performed for this article.

![A friend hands a wooden oar to a woman in a rowboat beside a quiet lakeside jetty, with the matching oar already aboard](/blog/remnote-local-to-synced-knowledge-base.png)

## Create a destination you can recognize

A local knowledge base (KB) works only in RemNote's desktop app and never syncs to its servers. A synced KB is available on devices where you're logged in. Moving your material into one deliberately puts it on RemNote's servers. [Knowledge-base documentation](https://help.remnote.com/en/articles/7867942-multiple-knowledge-bases).

Start on the desktop containing your local notes. Click the **+** beside **Settings > Knowledge Base Settings** and choose the synced type. Give it a distinct name, such as “Biology — synced transfer,” then select it. [Creation and switching instructions](https://help.remnote.com/en/articles/7867942-multiple-knowledge-bases).

Keep this record somewhere you can consult while switching KBs:

```text
Source local KB name:
Source Local Storage Location:
Destination synced KB name:
Destination Local Storage Location:
Export filename and date:
Independent copy of export and source files folder:
Second device to check:
```

Read each storage path from that KB's settings. Don't infer it from a folder name you remember. You'll use both paths for the media copy, so a second “Biology” isn't a helpful destination name during this job.

## Choose your comparison before exporting

Pick a few existing examples that cover how you study. “Membrane diagram under Lecture 3” gives you something to find again; “biology notes” doesn't. While transferring, leave the source's notes and reviews unchanged so those examples remain useful for comparison.

Copy the worksheet below and fill in the first column with identifiable source examples. Leave the result columns blank until you inspect them. Write **pass**, **repair**, or **unknown**, with a short observation; use “not used” for a feature absent from your source.

| Source example and expectation | Destination after note import | Desktop after media copy | Second device |
| --- | --- | --- | --- |
| Nested note: parent path, child text, order |  |  |  |
| Reference or portal: linked bullet and expected content |  |  |  |
| Reviewed card: question, answer, recorded review dates |  |  |  |
| Image: note location and a recognizable diagram detail |  |  |  |
| PDF: document, page, and an existing highlight if used |  |  |  |

The note-import column checks text, relationships, and history. For the image and PDF rows, it checks whether the attachment's note entry arrived. The later columns check whether the file actually opens. Keeping these observations separate helps you see which part of the transfer needs attention.

## Export the local KB, then import once

Copying and pasting bullets loses references, portals, and flashcard learning history. Cutting and pasting between desktop and web, or for a large migration, can also lose connections and history. RemNote recommends native export for larger transfers that preserve progress. [Moving content between knowledge bases](https://help.remnote.com/en/articles/7868482-moving-content-between-knowledge-bases).

Switch back to the **source local KB**. Open **Settings > Export**, select that KB, set the format to **Full RemNote (Complete)**, and click **Export**. This exports the whole KB. [Full-KB export instructions](https://help.remnote.com/en/articles/7868482-moving-content-between-knowledge-bases).

Keep an independent copy of the export and the source's `files` folder before importing. Use a location separate from the working KB folder; the [flashcard backup guide](/blog/how-to-back-up-flashcards/) covers that choice.

Select the **empty synced destination** and confirm its name against your record. Open **Settings > Import > RemNote**, select the export file, and click **Open**. Settings, the KB name, themes, and plugin installations and settings aren't included in the export; record any configuration you need separately. [Backup and import instructions](https://help.remnote.com/en/articles/6301627-remnote-backups).

Don't use **Anki (Flashcards Only)** as an intermediate format. It ignores bullets without flashcards, so it won't carry your complete notes. [Export formats](https://help.remnote.com/en/articles/7898019-exporting-and-printing-notes).

Now fill in the worksheet's note-import column. Follow the reference, expand the portal, and compare the reviewed card with its source. Inspect its recorded history before giving it new ratings in the destination. Preserving learning progress is the documented aim; check what arrived rather than assuming every scheduling detail transferred.

## Copy the images and PDFs separately

In the source KB's settings, find **Local Storage Location**. Open that location in Finder or your file manager, then open its `files` folder. Repeat for the destination KB. Copy the contents of the **source `files` folder into the destination `files` folder**, then restart RemNote. RemNote says the media will become visible and begin uploading for other devices. [Official media-transfer procedure](https://help.remnote.com/en/articles/6758834-how-do-i-move-content-from-a-local-kb-to-a-synced-kb).

Keep the operation inside `files`; leave the rest of each storage folder untouched. Copy the existing files without renaming or pruning them. If your file manager asks you to replace existing files, stop and verify both paths against your record. Investigate the prompt before proceeding.

After restarting, select the destination and fill in the worksheet's desktop media column. Open the actual diagram and the selected PDF page, including an existing highlight if you use one. An attachment placeholder doesn't count as a working attachment.

## Open the same examples on a second device

Log into RemNote on your second device and select the exact synced destination from your record. Repeat the relevant worksheet checks there: open the nested note, follow its links, inspect the reviewed card, and open the image and PDF examples.

Don't mark the transfer complete just because a document title appears. Read the diagram's labels and visit the PDF page you chose. If an item opens on the desktop but you can't open it here, record that difference and leave the row unresolved.

A few examples can't prove that every item survived. Choose examples that exercise your essential formats, and investigate any broader mismatch before depending on the destination for tomorrow's study.

## When something is missing

| Observation | Next check |
| --- | --- |
| Text arrived through paste, but relationships or history are missing | Use the native export route into a fresh, empty synced destination. Keep the source intact. |
| An expected note is absent after import | Compare the selected KB and export filename with your record. Confirm that you exported the source's whole KB, rather than one document. |
| Notes arrived, but images or PDFs are missing on the desktop | Check both storage paths and the direction of the `files` copy. Confirm that you restarted RemNote. |
| Media opens on the desktop but not on the second device | Confirm the account and destination KB there. Keep the row unresolved until the same attachment opens. |
| A card exists in notes but doesn't appear during practice | Follow the [RemNote cards-not-showing checks](/blog/remnote-cards-not-showing/). Queue eligibility is a separate question from whether the note imported. |
| You already imported the full export more than once | Stop importing. Record which file went into which KB and ask RemNote support how to recover that specific state. |

Importing an older complete backup into a populated KB can create near-duplicates after notes have changed. [RemNote's recovery guide](https://help.remnote.com/en/articles/6301627-remnote-backups) warns about this. Repeating the note import is a poor repair for a missing attachment.

Switch to the synced destination for ongoing edits and reviews once the required worksheet rows pass and important unknowns are resolved. Keep the local source, independent export, media copy, and record while you establish that the new setup works in ordinary study. They'll give you a concrete comparison if a familiar card or diagram looks wrong later.
