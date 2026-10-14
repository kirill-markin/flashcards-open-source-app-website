---
title: "RemNote Backup Restore: Recover Missing Notes Without Duplicates"
description: "Recover a missing RemNote document from a backup while keeping newer notes. Use a temporary local knowledge base, compare versions, and check media and history."
date: "2026-10-14"
image: "/blog/remnote-backup-restore.png"
keywords:
  - "RemNote backup restore"
  - "recover deleted RemNote notes"
  - "RemNote restore backup"
  - "RemNote duplicate notes after import"
  - "RemNote backup images"
---

Your missing lab notes might be in an older backup. So might the unfinished version of the lab you corrected later. A useful recovery brings back the missing document while keeping the newer work.

For a selective RemNote backup restore, inspect the old backup in a **temporary Local Only knowledge base**, then export the missing document. A full historical import into a populated main KB can create near-duplicates after notes change. [RemNote's backup guide](https://help.remnote.com/en/articles/6301627-remnote-backups). Keeping the transfer small reduces that risk; you still need to check for existing copies.

This guide was produced with AI assistance using official documentation checked October 14, 2026. No hands-on restore was performed. The lab example and worksheets are hypothetical planning tools, not observations from a student's account.

![A woman fits one reclaimed blue tile into an existing courtyard mosaic beside an older tile fragment](/blog/remnote-backup-restore.png)

## Check whether the document actually needs a backup

A note missing from its usual folder isn't necessarily deleted. RemNote's [missing-notes guide](https://help.remnote.com/en/articles/6301581-help-i-deleted-my-notes-or-they-ve-gone-missing) recommends its in-app missing-note tool, undo for a recent mistake, search for moved notes, and checking the Trash. Deleted bullets stay in the Trash for at least two weeks. The guide also covers Complete Trash, orphans, and notes left on another device before syncing finished.

Use those checks first, then choose a route from what you can establish:

| What you find | What to do next |
| --- | --- |
| The document exists elsewhere in the current KB | Read it and move it back. Record its location so you don't import another copy. |
| The deleted document is available in Trash | Restore it there, then check its contents and location. |
| Erased strokes or shapes are missing from a handwritten document or PDF | Open that document's **… > View Drawing Trash** and look for the erased content. This is separate from the global Trash. |
| One document is absent, but your other current notes are healthy | Continue with selective recovery below. |
| The whole KB is lost or unusable | Follow the whole-KB section of the official backup guide or ask RemNote support. |
| You can't tell which situation applies | Keep the evidence you have and finish the missing-note checks before importing anything. |

The worksheet below assumes that you have current material worth preserving. If a card's note is present but the card doesn't enter practice, use the [RemNote cards-not-showing checks](/blog/remnote-cards-not-showing/). An absent card in the queue alone isn't evidence that its document needs recovery.

## Write down what must survive

Here's a hypothetical case with three dates:

- **October 10:** a backup contains Lab 3 and Lab 4. Lab 3 still has an incorrect dilution calculation.
- **October 12:** Lab 3 has the corrected calculation and a new explanation. Lab 5 has been added. Lab 4 is missing, and this day's backup also lacks it.
- **October 14:** you notice the gap and start recovery. You want October 10's Lab 4 alongside the current Lab 3 and Lab 5.

The October 10 backup has the document you need, but its surrounding course folder contains older work. Choose **Lab 4 and its children** as the recovery unit. “Children” means the nested bullets under that document. Lab 3 and Lab 5 stay outside the transfer.

Before changing the main KB, save an independent current-state copy. **Settings > Export > Full RemNote (Complete)** is the native whole-KB export route. [Moving content between knowledge bases](https://help.remnote.com/en/articles/7868482-moving-content-between-knowledge-bases) documents it. Give the file a recognizable name, such as `biology-before-lab4-recovery-2026-10-14`, and record where you saved it. Keep it outside the working KB folder; the [flashcard backup guide](/blog/how-to-back-up-flashcards/) explains independent storage.

RemNote's native export excludes image and PDF files, so the export alone isn't a complete media copy. [Export format documentation](https://help.remnote.com/en/articles/7898019-exporting-and-printing-notes). Preserve the current KB's available media separately, using the location described below.

Write a short preservation record:

```text
Current KB name:
Current-state export filename and saved location:
Current media copy location:
Missing document and expected parent path:
Recent text to preserve: Lab 3, corrected dilution calculation
Recent document to preserve: Lab 5, newest paragraph
Existing references into the missing document:
Recovery start date:
```

Replace the lab entries with concrete examples from your notes. A recognizable sentence is more useful than “Lab 3 should be fine.” Avoid unrelated edits and new review ratings during the comparison, so your record remains meaningful.

## Inspect a candidate away from your current notes

Find cloud daily backups under **Settings > Backups**, or desktop local backups under **Settings > Backups > Local Backups**. [Backup locations](https://help.remnote.com/en/articles/6301627-remnote-backups). Start with a candidate from before the suspected loss.

On the desktop app, create a new KB using the **+ beside Settings > Knowledge Base Settings**. Choose **Local Only** and give it a distinct name, such as “Lab 4 recovery — October 10.” Local KBs work on the desktop and don't sync to RemNote's servers. [Knowledge-base creation and switching](https://help.remnote.com/en/articles/7867942-multiple-knowledge-bases).

In the selected empty temporary KB, use **Settings > Import > RemNote** to open the backup file. [Selective restore instructions](https://help.remnote.com/en/articles/6301627-remnote-backups). Explore the restored notes before transferring anything.

For another candidate, use another distinctly named empty local KB. Keeping candidates separate makes the comparison easier to follow; several historical imports in one place would blur which file supplied which version.

Fill in a candidate ledger as you inspect. These rows show hypothetical findings:

| Candidate | Missing content and hierarchy | Later work to protect | Media, history, and relationships | Decision |
| --- | --- | --- | --- | --- |
| October 12 | Course folder is present; Lab 4 is absent | Corrected Lab 3 and new Lab 5 are present | No Lab 4 content to inspect | Reject for Lab 4 recovery |
| October 10 | Lab 4 has the expected method, results, and nested discussion; Lab 3 is older | Keep current Lab 3 and Lab 5 outside the transfer | Diagram file availability unknown; record a card's historical review dates; Lab 4 has a reference outside its subtree | Candidate for Lab 4 only; investigate the open checks |

An earlier date is a starting point for inspection, not proof of completeness. Read the expected sections and look for the last result you remember adding. If several backups contain Lab 4, choose by the content you need rather than the newest filename alone.

The candidate also sets the limit of what you can compare. If it contains reviews only through October 10, it provides no evidence that reviews made after that date can be recovered from this file.

## Transfer the smallest useful document once

Open the chosen Lab 4 document in the temporary KB. Use **… > Export > RemNote (Complete)** and save its export. This route includes the selected document or bullet and its children. [Native document transfer](https://help.remnote.com/en/articles/7868482-moving-content-between-knowledge-bases).

Before the main import, compare the filename with your record: it should be the **Lab 4 document export**, not the full historical backup. Search the current KB once more for the title and distinctive result text. If a copy exists, compare its content and decide which version you need before adding anything.

Switch to the recorded main KB, confirm its name, and import the selected document file through **Settings > Import > RemNote**. Import once, inspect where Lab 4 landed, and place it under the intended parent.

Copying and pasting between KBs loses references, portals, and flashcard learning history. RemNote recommends native export for transfers that preserve progress. [Transfer limitations](https://help.remnote.com/en/articles/7868482-moving-content-between-knowledge-bases). That recommendation doesn't establish that a reference crossing the exported subtree's boundary will reconnect correctly in your current KB.

Suppose current Lab 5 contains a reference to the missing Lab 4 result. Recovering that result's text doesn't prove that this existing reference now targets it. Follow the reference after import and compare what it shows with the result you intended. If it remains broken, record it as unresolved. Also inspect any reference from recovered Lab 4 to a document outside the export. Expanding the import to the old course folder would bring Lab 3's outdated calculation into the job; investigate the specific relationship first.

## A diagram placeholder doesn't contain the diagram

Look for available media in the KB's **`files` folder**, under the **Local Storage Location** shown in its settings. RemNote's [local-to-synced media instructions](https://help.remnote.com/en/articles/6758834-how-do-i-move-content-from-a-local-kb-to-a-synced-kb) describe copying files from a local source's folder to a synced destination's folder and restarting the app. That procedure assumes the source actually has the files. It doesn't establish a general archive-to-local media recovery route.

A restored note entry and a surviving file are separate pieces of evidence. In this example, Lab 4's diagram remains **unknown** until you open it and recognize its contents. Importing an old database backup doesn't establish that you still possess the attachment bytes.

Keep the original KB's available `files` folder and any independent media copies. Don't rename or prune files while investigating. If a copy prompts you to replace existing media, stop and check both paths and the conflicting files before proceeding. Record a missing file as missing; repeating the note import won't supply its bytes.

If your recovery involves an available local media source and a synced destination, see the [RemNote local-to-synced guide](/blog/remnote-local-to-synced-knowledge-base/) for that procedure and second-device checks. For another storage situation or an unavailable attachment, give RemNote support the source type, destination type, backup date, and file evidence you have.

## Check both the recovered notes and the newer work

Fill in the expectations before importing. Afterwards, record **pass**, **repair**, or **unknown** with a concrete observation; use “not used” where appropriate.

| Check | Before import: concrete expectation | After import: observation |
| --- | --- | --- |
| Recovered document | Lab 4 method, result value, discussion children, intended parent path |  |
| Newer correction | Lab 3's corrected calculation and explanation |  |
| Newer document | Lab 5 and its distinctive newest paragraph |  |
| Duplicate check | Locations of any existing Lab 4 title or distinctive result text |  |
| Relationship inside Lab 4 | A specific reference or portal and the content it should show |  |
| Relationship across the boundary | Lab 5's reference to Lab 4, or Lab 4's link to another document |  |
| Reviewed card | A chosen question, answer, and historical review dates recorded from the candidate |  |
| Media | A recognizable diagram detail or PDF page that must open |  |

A total note count can't show whether Lab 3 kept the corrected number. Matching Lab 4's text can't show whether its diagram opens or Lab 5's reference works. Check each outcome separately.

Compare the recovered card's historical entries with the candidate before giving it new ratings. A card appearing in notes doesn't demonstrate restored learning history. These examples help you assess the recovery; they can't prove that every item in the KB survived.

Keep the candidate KB, source files, current-state copy, and ledger while a relationship or attachment needs investigation. If you already imported a full historical backup into the main KB, stop further imports and give RemNote support the filename, date, destination, and resulting changes.

In the hypothetical case, recovery is ready for study when Lab 4's required content is back, current Lab 3 and Lab 5 remain intact, and the essential media, history, and relationship checks pass. A single unresolved Lab 5 reference is still an open task, even if all three lab titles now appear.
