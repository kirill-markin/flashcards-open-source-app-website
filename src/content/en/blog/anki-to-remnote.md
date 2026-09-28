---
title: "Anki to RemNote: Check Cards, Media, and Review History"
description: "Import an Anki deck into RemNote with a small rehearsal. Check templates, media, review history, and due states before moving your full collection."
date: "2026-09-28"
image: "/blog/anki-to-remnote.png"
keywords:
  - "Anki to RemNote"
  - "import Anki decks into RemNote"
  - "RemNote Anki import"
  - "Anki review history RemNote"
---

You can import Anki decks into RemNote using an `.apkg` file. The more useful question is whether your familiar cards will still ask the right questions, play their audio, and reach you at a sensible time. A successful upload doesn't answer all three.

Start with a small, representative import and a written record of what you expect. Keep Anki as your study source until that rehearsal passes. This guide is based on official documentation checked September 28, 2026. The worksheet is a proposed migration check; no hands-on migration was performed for this article.

![A woman checks whether a worn wooden armchair fits comfortably at a blue table while two matching chairs wait nearby.](/blog/anki-to-remnote.png)

## Choose the cards that would expose a problem

Pick coverage over a round number of cards. Ten simple vocabulary questions won't tell you whether a complicated anatomy template survives. Include every format you depend on, plus three study states: a long-reviewed card due in the future, a card due now, and an unseen card.

Use a small existing deck if it covers those cases. Otherwise, select representative notes in Anki's browser and use **Notes > Export Notes**, choosing **Selected Notes**. RemNote documents this way to prepare a limited `.apkg` in its [Anki import guide](https://help.remnote.com/en/articles/6751471-importing-from-anki).

Before exporting, give each example a recognizable label, such as its question text plus its deck. Record the original in the worksheet below. Include the export date so you can distinguish a migration difference from another day's reviews in Anki.

## Copy this migration worksheet

Use one row per example, repeating a row when you need to cover different templates. The same card can cover several checks. Mark each result **pass**, **repair**, or **unknown**, with a short explanation; an unchecked cell doesn't count as a pass.

| Example to include | Record in Anki | Check in RemNote |
| --- | --- | --- |
| Basic question, including its reverse if used | Every question and expected answer | Each intended direction exists; answers stay hidden until revealed |
| Cloze with several blanks | Which blanks belong to each question | The intended words are hidden together; surrounding text gives the right context |
| Image occlusion | Image, covered region, expected answer | The same region is hidden; labels remain readable at study size |
| Audio card | File or speech mechanism; when it plays | Listen on the device you'll study with |
| Custom note with extra fields | Meaning of each field and each generated question | Fields remain understandable and every intended question is usable |
| Established review card due later | Recent review dates, current interval, next due date | Record accessible history, displayed due state, and queue placement separately |
| Due card and unseen card | Which is already learned and which is new | Identify how each enters practice before giving a rating |

Add a result column when you copy the table. Include any dependency missing here, such as a formula or a particular script. The worksheet should describe your collection, including the bits you would miss during tomorrow's study session.

## Export the sample and import it into RemNote

First save an Anki collection backup with media. Export your rehearsal material as an `.apkg`, including scheduling information, deck presets, and media. Anki's scheduling export includes review history. Its [export manual](https://docs.ankiweb.net/exporting.html) explains these options; our [APKG versus COLPKG guide](/blog/anki-apkg-vs-colpkg/) covers the distinction between a deck transfer and a collection backup.

In RemNote, open your username menu, choose **Import > Anki**, select the `.apkg`, and choose **Import Cards**, following the [official walkthrough](https://help.remnote.com/en/articles/6751471-importing-from-anki).

Keep the imported material clearly identifiable during the rehearsal. Don't begin by reorganizing everything into lecture notes. Compare each imported example with its original while both are easy to find, and record its review state before doing any practice that changes it.

## Check whether each question still works

RemNote supports basic, cloze, image-occlusion, and many custom note types. Its [documented limitations](https://help.remnote.com/en/articles/6751471-importing-from-anki) exclude imported template CSS, custom JavaScript, and on-the-fly TTS. Image-occlusion imports require the original note-type and field names.

That distinction matters for audio. A recording and speech generated from text are different dependencies. If your cards rely on on-demand speech, treat that as a repair to investigate before moving. For recorded audio, listen through the relevant passage on your usual study device; a visible playback control doesn't establish that the recording works.

For notes with multiple fields, RemNote's [importer notes](https://help.remnote.com/en/articles/6330674-notes-on-remnote-importers) describe conversion into tables and acknowledge imperfect results. Open one of those examples as editable material as well as a flashcard. Find its explanation, try editing a field in the imported copy, and check that you still understand which question it belongs to.

A changed font may be acceptable. A missing diagram label, an answer exposed on the front, or a button that no longer reveals required information is a failed question. Record that distinction. For each failure, write the smallest repair you would accept and estimate how many similar notes need it. Try that repair on the sample before committing to a deck's worth of edits.

## Review history, due state, and the queue need separate checks

RemNote's [switching guide](https://help.remnote.com/en/articles/8664083-switching-from-anki-to-remnote) says Anki card schedules are preserved. Its [importer notes](https://help.remnote.com/en/articles/6330674-notes-on-remnote-importers) say review history can transfer, but also describe imported flashcards entering **Need to Learn**. The [Anki import walkthrough](https://help.remnote.com/en/articles/6751471-importing-from-anki) makes that queue statement too.

Those statements don't fully explain how an already-reviewed Anki card's imported schedule interacts with Need to Learn. They aren't enough to promise either identical daily queues or a complete reset of every imported card.

Inspect your established review example **before rating it**. Record three things independently:

1. **History:** can you find evidence of the earlier reviews?
2. **Due state:** what interval or next-review information is shown, and how does it compare with your export-time record?
3. **Practice placement:** where does the card appear, and what action would introduce it into regular study?

Compare the due-now and unseen examples too. If you can't inspect a value, mark it unknown. If an unexplained difference would change your study workload, pause the migration and ask RemNote support about that specific example. Keep the export and your observations. Avoid rating a large batch just to make the queue look familiar.

The cited import documentation also doesn't establish identical future scheduling, transferred FSRS weights, or equivalent Anki add-on behavior. Include any such requirement in your decision instead of assuming it follows from imported history.

## Make the switch only after the sample passes

Proceed when every required question works, essential media plays, and you understand how the sampled old and new cards will enter practice. Accept cosmetic differences deliberately. Complete necessary repairs and recheck the affected examples before relying on the imported deck.

Stop if answers are missing, an essential template fails, or the history and queue behavior remain unexplained. A partially usable import gives you specific problems to investigate. If editing the imported notes feels awkward even after those checks pass, revisit the [RemNote alternatives comparison](/blog/remnote-alternative/) before investing in repairs.

When you're ready to switch, make a fresh backup and final export. Reviews and edits made in Anki since the rehearsal won't be present in its old file. Decide how you'll handle the rehearsal content before importing again; don't assume another upload will merge it cleanly. Repeat the worksheet on the final import, then choose one app for ongoing reviews of that material.

Keep the backup and worksheet until the new workflow has proved usable in ordinary study. They give you something concrete to compare when a question looks unfamiliar a week later.
