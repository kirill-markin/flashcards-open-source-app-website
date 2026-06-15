---
title: "How to Back Up Flashcards in 2026: Anki Backup, Quizlet Export, and a Deck You Still Own"
description: "Need a real flashcards backup plan in 2026? Here is how to back up Anki, export what Quizlet actually allows, save media, keep a plain-text copy, and avoid getting stuck in one study app."
image: "/blog/how-to-back-up-flashcards.png"
date: "2026-06-15"
keywords:
  - "back up flashcards"
  - "how to back up flashcards"
  - "anki backup"
  - "export anki deck"
  - "quizlet export"
  - "flashcards backup"
  - "study data backup"
  - "open source flashcards"
  - "plain text flashcards"
---

A flashcards deck looks small right up until you try to rebuild it.

Then it is suddenly 1,800 cards, two years of review history, a stack of screenshots, and one very annoying weekend you did not plan to spend on export cleanup.

That is why **back up flashcards** is a practical search in 2026. People are not asking because backup sounds responsible. They are asking because they finally noticed how much study time is trapped inside one app.

This guide stays narrow: how to keep your cards portable, readable, and recoverable if you use Anki now, rely on Quizlet exports sometimes, or want your next deck to be easier to own.

![Warm study desk with flashcards backup setup, source notes, media files, and a laptop export screen](/blog/how-to-back-up-flashcards.png)

## Why this feels more urgent in 2026

On **February 2, 2026**, the Anki forums published the ["Anki's Growing Up"](https://forums.ankiweb.net/t/ankis-growing-up/68610) announcement about the project's ownership transition.

That announcement did not mean your deck became unsafe overnight. It did remind a lot of people of one useful distinction: trusting a tool is not the same as owning your study data.

The same thing shows up on the Quizlet side in a less dramatic way. The export path exists, but it is narrower than people expect. If your cards matter, portability is not something to postpone until the night you want to migrate.

## Sync helps. A backup rescues you.

People often say they are backed up when what they really mean is that their deck syncs across devices.

Better than nothing, yes. Same thing, no.

Sync protects convenience. A backup protects recovery.

If a bad edit, broken import, or accidental deletion syncs everywhere, you have simply distributed the problem faster.

## The boring backup stack I would actually use

The first useful rule is to stop looking for one perfect backup format.

I would keep four layers:

1. one full app-native backup
2. one plain-text or Markdown copy of the important card content
3. one copy of the media or original source files
4. one second location outside the device I use every day

That sounds slightly excessive until one layer fails and the other three save the deck.

Each layer covers a different failure:

- app-native backup helps you restore the deck structure and review state
- plain text keeps the content portable
- media backup protects the images, audio, and attachments the text format may drop
- second-location storage protects you from losing the laptop, phone, or local drive

If you only keep the app-native layer, you are trusting one product to stay readable forever. If you only keep plain text, you lose review state and often media. The stack works because the layers do different jobs.

## For Anki, keep both the recovery copy and the portable copy

This is where many Anki backup plans stop halfway.

The [Anki backup docs](https://docs.ankiweb.net/backups.html) are clear about the split:

- automatic backups include card text and scheduling information
- automatic backups do not include sounds or image files
- a manual `.colpkg` export with `include media` creates the fuller collection copy

The [Anki exporting docs](https://docs.ankiweb.net/exporting.html) add the other important detail: a collection package exports your entire collection with scheduling included.

So I would keep three Anki habits, not one:

1. let Anki keep its normal automatic backups for quick recovery
2. make a periodic `.colpkg` export with media for a real restore point
3. export important note content as plain text when you want portability outside Anki

That third step matters because an Anki backup is good at restoring Anki. It is less good at helping you inspect the deck with ordinary tools later.

One more detail is worth saying out loud because people learn it the hard way: the safe pattern is to export cleanly, then store the export. It is not "point Dropbox at the live database and hope that counts as an Anki backup."

## For Quizlet, export early and assume less than you wish

Quizlet export is useful. It is not a full clone of your study setup.

As of **June 15, 2026**, [Quizlet's export help page](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) says you can export terms and definitions from your own sets. The practical limits matter just as much:

- copied sets cannot be exported
- image exports are not available
- exporting is available on the website, not in the app

So if a Quizlet set matters, export it while it is still:

- yours
- mostly text
- easy to identify
- still close to the original source material

Do not wait until the night you want to migrate. Do not wait until you forgot which sets were copied. Do not assume screenshots are a real backup format.

This is one reason the repo already has a dedicated guide on [exporting Quizlet sets and turning them into FSRS flashcards](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). The export step is not glamorous, but it is the part that determines whether you have a real exit path later.

## Plain text is the most underrated flashcards backup

If I had to keep one extra copy beyond the app-native backup, I would choose plain text or Markdown almost every time.

It does not preserve everything. That is exactly why it is useful. It keeps the card content alive outside the product that happened to host it this year.

A plain-text copy is ugly in the right way:

- you can open it on any machine
- you can inspect it without special tooling
- you can search it fast
- you can version it
- you can feed it into a new import path later
- you can hand it to another tool without screen-scraping your own study life

This matters even more now because a lot of decks are built from notes, transcripts, OCR, PDFs, and AI-assisted cleanup. Once the useful part is stored as readable text, your future options get much better.

That is also why [Flashcards](/features/) is a reasonable landing spot after cleanup. The current product supports AI chat with plain text and file attachments, so a cleaned export does not have to sit there as dead backup material. It can become draft input for a better deck.

## Back up the source, not only the final card

This is the habit people skip when they only think in app terms.

If you study from:

- your own Markdown notes
- a plain-text export from another app
- OCR from handwritten pages
- transcript snippets
- your own vocabulary lists
- question-bank error logs

then those source files are part of the backup too.

Sometimes rebuilding from source is easier than restoring a messy old deck. Sometimes the deck is bloated, but the source notes are still clean.

Sometimes you do not want every old card back. You want a smaller and better set from the material that still matters.

That is why source backups matter. They give you two honest options later: restore the old deck if that is easiest, or rebuild the good parts if that is smarter.

## Media is where a lot of backup plans quietly fail

Text-backed decks are the easy case. The trouble starts when the deck depends on:

- anatomy images
- diagram screenshots
- pronunciation audio
- whiteboard photos
- handwritten note crops
- image occlusion style study material

If your backup saves the text but drops the files, you may have technically kept the deck while functionally losing the thing you were studying.

That is why media needs its own checkpoint and folder, not a vague promise that it is probably attached somewhere.

For Anki, that means using the export path that includes media when you want a real collection backup. For Quizlet, it means accepting the export limitation early and storing the original images or source materials separately. For your own AI-assisted workflows, it means keeping the original PDF, screenshot batch, transcript, or note export somewhere calm and obvious.

I would rather have one boring folder called `flashcards-sources-2026-06` than one bad evening where I realize I saved the prompts but not the diagrams.

## A good flashcards backup also makes migration easier

This is the part many people miss. Backups are not only for disaster recovery.

They are also for the day you decide the workflow has outgrown the tool.

That is what made the Anki ownership discussion useful. Even people who were not leaving started thinking about portability. That instinct was healthy.

If your material is backed up as:

- a full collection export
- a portable text copy
- preserved source files

then moving later becomes much less dramatic.

That is true whether you move from Anki, from Quizlet, or from some AI study tool that was great at generation and weak at long-term review.

If the Anki side is your problem right now, the practical follow-up is already here:

- [How to Migrate from Anki in 2026](/blog/migrate-from-anki-txt-export-open-source-flashcards/)

If the issue is broader ownership and inspectability, this one fits next:

- [Self-Hosted Open Source Flashcards App for Spaced Repetition](/blog/self-hosted-open-source-flashcards-app-for-spaced-repetition/)

## Where Flashcards fits if you want the next deck to be easier to own

If I were setting up a new deck with ownership in mind, I would care about a few product qualities first:

- open-source code
- a hosted path now and a self-hosted path later
- offline-first clients where it matters
- plain front/back cards that stay portable
- AI attached to real data, not only to one-shot generation demos

That is the shape [Flashcards](/) is already moving toward.

The current public docs are enough to make the direction concrete:

- the [architecture docs](/docs/architecture/) describe the shared workspace model across web, iOS, and external agents
- the iOS client is documented as local SQLite plus sync
- the external agent flow starts from a published discovery URL
- the [self-hosting guide](/docs/self-hosting/) gives you a real path to run the stack yourself

That does not remove the need for backups. Nothing does.

It does give you a healthier setup for the next deck:

- keep raw source text
- draft or clean cards in the app
- review with FSRS
- keep the stack inspectable
- keep self-hosting available if you ever want it

That is closer to ownership than leaving all of your memory work inside one closed interface and hoping the export story stays good later.

## The flashcards backup checklist I would actually keep

If you want the shortest useful version, do this:

1. Export a full backup from the app you use now.
2. Keep a plain-text or Markdown copy of the important card content.
3. Save the media or original source files in a separate folder.
4. Put a copy on a second device or cloud storage location.
5. Repeat the backup after major deck changes, not only once per year.
6. When starting new decks, prefer tools and workflows that keep export and self-hosting on the table.

That is enough to cover most of the real risk without turning studying into a file-management hobby.

## The practical rule for backing up flashcards in 2026

If your deck would hurt to lose, it deserves a boring backup.

Keep the full app-native copy. Keep the portable text. Keep the media. Keep one copy somewhere else. Then build the next stage of your study workflow in a product that does not make portability feel like a side quest.

If you want a cleaner place to do that with the next deck, start with [Getting Started](/docs/getting-started/), skim [Features](/features/), and keep the [Self-Hosting Guide](/docs/self-hosting/) in the back of your mind.

That is the version of **back up flashcards** I trust in 2026: boring exports, readable text, separate media, and a study stack that leaves you options later.
