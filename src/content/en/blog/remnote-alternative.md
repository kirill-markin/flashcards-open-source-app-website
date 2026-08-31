---
title: "RemNote Alternatives in 2026: Free and Open-Source Options"
description: "Compare RemNote alternatives for notes, PDFs, cards, price, and self-hosting. See what migrates, what breaks, and how to rehearse a safe move."
date: "2026-03-19"
updated: "2026-08-31"
image: "/blog/remnote-alternative.png"
keywords:
  - "remnote alternative"
  - "remnote alternatives"
  - "remnote open source"
  - "remnote free alternative"
  - "remnote vs anki"
  - "open source remnote alternative"
  - "self hosted remnote alternative"
  - "offline flashcards app"
---

RemNote labels its Anki export **Flashcards Only**. Bullets without cards are skipped, and the package is not your linked notes, PDFs, or Reader workflow. A replacement can accept every prompt and answer while still leaving behind the system that made those cards useful.

The best **RemNote alternative** is the route that fixes your reason for leaving without quietly removing the part of RemNote that still works. For some people that is price. For others, it is plain local files, a deeper card system, or source code they can run themselves.

> **Disclosure:** I am Kirill Markin, and I build [Flashcards](/), one of the products compared here. Flashcards is not a full RemNote replacement. RemNote has the strongest integrated notes-and-PDF workflow in this comparison, while Anki has the most mature card system and migration formats.

**Facts and prices checked:** August 31, 2026. Listed prices use public US pricing and annual billing where stated; taxes, regions, app stores, and beta terms can change the amount.

![An archive conservator tests a small transfer from an intact linked study dossier into separate card, file, and block systems](/blog/remnote-alternative.png)

## Start with the reason you want to leave

- **Price:** Check whether RemNote Free already covers your real workflow. It includes unlimited notes, flashcards, and synced devices, but limits annotated documents and some advanced features.
- **A card workflow that feels too tied to notes:** Try Anki. It gives cards, templates, imports, and FSRS more room to be the main system.
- **Plain local note files:** Split the job between Obsidian for Markdown notes and Anki for review. This is less integrated, but the ownership boundary is much clearer.
- **Open-source connected notes with PDFs and built-in cards:** Logseq is the closest route here, with a serious 2026 qualification: its new database version is beta, its new iOS app and real-time sync are alpha, and its new Android app is not yet open for testing.
- **Source and self-hosting for a focused card stack:** Consider Flashcards if front/back cards are enough and you accept a fresh schedule plus a substantial AWS operator job.
- **PDF reading, linked highlights, and cards in one place:** Stay with RemNote. None of the other routes reproduces that workflow cleanly.

That last answer is easy to overlook. Switching is not progress when the alternative fixes a licensing preference but breaks tomorrow's study session.

## RemNote alternatives: the decision matrix

| Route | Best reason to choose it | Notes and PDFs | Scheduler | Offline and ownership | Price checked Aug. 31, 2026 | Main migration boundary |
|---|---|---|---|---|---|---|
| **Stay with RemNote** | Connected notes, source reading, and cards belong together | Native knowledge base and Reader with linked PDF highlights, notes, and cards | FSRS-6 beta with manual opt-in and weight training; SM-2 remains the default | Desktop and mobile work offline after login; local-only desktop knowledge bases are available | Free; Pro US$8/month yearly; Pro with AI US$18/month yearly | Native export is best for restoring into RemNote, but currently omits images and PDFs |
| **Anki** | Cards, templates, add-ons, and collection fidelity come first | No integrated connected-note or PDF-reading workspace | Mature FSRS controls, optimized parameters, desired retention, and workload simulation | Local desktop/mobile collections; open desktop core and official self-hosted sync server | Desktop, AnkiWeb, and AnkiDroid are free; official AnkiMobile is a paid iOS app | RemNote exports cards to `.apkg`, not the whole note system; verify scheduling data and media in a test import |
| **Obsidian + Anki** | You want plain local Markdown notes without giving up a mature card scheduler | Obsidian owns local notes and attachments; Anki owns cards; no single integrated Reader-to-review loop | Anki FSRS | Local Markdown vault plus local Anki collection; Obsidian itself is free but proprietary | Obsidian free; optional Sync starts at US$4/month yearly; Anki pricing as above | RemNote Markdown and Anki exports create two systems; live RemNote links between notes, sources, and cards do not become one portable workflow |
| **Logseq** | You specifically want an open-source, notes-first outliner with PDFs and built-in cards | Linked blocks, PDF annotation, and four-grade card review | Built-in four-grade scheduler; the [docs link its new algorithm](https://github.com/logseq/docs/blob/master/db-version.md#cards) to the original FSRS project | AGPL-licensed app; database-version data can be exported as SQLite, EDN, or lossy standard Markdown | Free open-source app | Current database version is beta; its new iOS app and real-time sync are alpha, its new Android app is not yet open for testing, and old Logseq SRS state is not compatible with the new card algorithm |
| **Flashcards** | You want simple cards in an open web/mobile/backend stack | No note knowledge base, backlinks, PDF reader, or native desktop app | FSRS-6 with fixed weights and fewer tuning controls than Anki or RemNote | Offline-first web, iOS, and Android; MIT-licensed full stack with an AWS production path | Hosted app free during beta; self-hosting adds infrastructure and provider costs | No direct RemNote or Anki importer; content can be rebuilt, but review history and FSRS state do not move |

This is not a feature score. A PDF-heavy student can lose more by moving to the “most open” option than they gain from its license. Someone with a simple vocabulary deck may be paying for a note system they no longer use. Start with the row that describes your constraint, then test its migration boundary.

Free and open source are separate filters. RemNote Free and Obsidian cost nothing for the core app but are proprietary. Anki's desktop core, Logseq, and Flashcards publish source; AnkiMobile is still a paid iOS app, and self-hosting Flashcards still creates cloud costs.

## Stay with RemNote when the connected workflow is the product

RemNote combines the steps that most alternatives separate. Its [Reader](https://help.remnote.com/en/articles/6690975-learning-from-pdfs-and-files-with-the-remnote-reader) can keep a PDF open beside your notes, paste references back to exact highlights, and turn those notes or highlights into flashcards. The Free plan lets you annotate three documents; the current [pricing page](https://www.remnote.com/pricing) lists unlimited annotated documents on Pro.

Its scheduler is no longer an obvious reason to leave. RemNote now documents [FSRS-6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) as a beta option that you enable manually. After at least 1,000 reviews, it can train weights from your own history. Anki still offers deeper controls, but a learner who likes RemNote's notes and PDFs does not need to abandon them merely to use FSRS.

Offline behavior is also better than “works in an open browser tab.” RemNote's [desktop and mobile apps](https://help.remnote.com/en/articles/6752029-offline-mode) can edit notes and review cards offline after installation and login. Desktop keeps a complete local copy of images and PDFs. Mobile and web may lack uncached media, and the web app cannot start from a closed or refreshed tab without a connection.

If you started this search for a **RemNote free alternative**, test the Free plan before moving. If source access is the problem, local mode is not the same as open source or self-hosting. The separate guide to [whether RemNote is open source](/blog/is-remnote-open-source/) covers that boundary in detail.

## RemNote vs Anki: choose which object is central

The useful **RemNote vs Anki** distinction is not “notes versus no notes.” Anki also stores notes, but an Anki note is a set of fields that [card templates](https://docs.ankiweb.net/templates/intro.html) turn into review cards. RemNote starts with documents and connected bullets that can become cards. One is a mature card-production system; the other is a study workspace around notes and sources.

Choose Anki when custom fields, generated card variants, HTML/CSS templates, add-ons, or years of review history are central. Its current [FSRS settings](https://docs.ankiweb.net/deck-options.html#fsrs) include parameter optimization, desired retention, and workload simulation. Its [exports](https://docs.ankiweb.net/exporting.html) can preserve a full collection in `.colpkg`, while `.apkg` deck packages can include scheduling information, presets, and media.

RemNote provides an Anki exit route, but the label matters: [Anki export is “Flashcards Only”](https://help.remnote.com/en/articles/7898019-exporting-notes). Bullets without cards are excluded. RemNote keeps parent context in exported cards and flattens multiple-choice behavior, but the export is not your knowledge base, PDF library, or complete reading workflow. The official RemNote export page also does not promise that every part of your scheduling state will arrive in Anki. Test it before treating the route as lossless.

Anki is the strongest card-first choice here. It is not the cleanest replacement for RemNote Reader. If you still annotate papers and write connected notes, pair it with a note tool instead of forcing Anki to become one. The [broader Anki alternatives guide](/blog/best-anki-alternatives/) covers more card-focused options.

## Obsidian plus Anki: local files, with a deliberate split

Some people searching for RemNote alternatives do not need another all-in-one app. They want notes that remain ordinary files and a review system that can mature independently. Obsidian plus Anki is the clean version of that split.

[Obsidian stores notes](https://obsidian.md/help/Files%2Band%2Bfolders/How%2BObsidian%2Bstores%2Bdata) as Markdown-formatted plain text in a local folder. The app is free without an account; optional [Obsidian Sync](https://obsidian.md/pricing) starts at US$4 per month when billed yearly. Obsidian is not open source, but the note files are directly readable and can be backed up with ordinary file tools.

Use RemNote's Markdown export for the note side and its `.apkg` export for the card side. Expect cleanup. A nested outline exported as readable Markdown is not the same thing as live RemNote references, portals, templates, or PDF pins. Once notes and cards live in two apps, edits no longer propagate between them automatically either.

This route works when local file ownership matters more than a seamless “highlight, link, make card, review” loop. It is a bad bargain when that loop is exactly why you chose RemNote.

## Logseq: the open-source notes-first option is in transition

Logseq deserves a place in an **open-source RemNote alternative** comparison because it is genuinely notes-first. The official [AGPL-licensed repository](https://github.com/logseq/logseq) describes a knowledge-management app with linked blocks and PDF annotation. The [current database-version docs](https://github.com/logseq/docs/blob/master/db-version.md#cards) add built-in cards: tag a block, see when it is due, and review it with four grades.

The current status matters more than the feature list. Logseq's own repository says the database version is beta, while its new iOS app and real-time sync are alpha; the current database-version docs say the Android app is not yet open for alpha testing. Logseq explicitly warns that data loss is possible and recommends a non-critical test graph plus backups. Its [database-version change notes](https://github.com/logseq/docs/blob/master/db-version-changes.md#high-level-changes) also say the new card algorithm does not import the properties or SRS data from older Logseq flashcards.

Portability needs equally careful wording. Current [database-version export documentation](https://github.com/logseq/docs/blob/master/db-version.md#export-and-import) offers SQLite with assets, EDN, and standard Markdown. It says EDN is the only editable export that fully captures graph data, yet does not recommend EDN as the only backup. Standard Markdown omits properties and timestamps.

So Logseq is the route to evaluate when open source, linked notes, PDFs, and built-in cards all matter. It is not the route I would use for a one-day move of a critical medical-school knowledge base in August 2026. Run it beside RemNote first and let the current transition settle around your actual devices.

## Flashcards: open full stack, narrow study model

Flashcards makes almost the opposite trade from RemNote. Its [features](/features/) center on front/back Markdown cards, decks, tags, media, FSRS review, offline-first clients, and AI-assisted card drafting. It has no connected-note knowledge base, PDF reader, native desktop app, or direct RemNote importer.

The source boundary is broad: the MIT-licensed repository includes web, iOS, Android, authentication, backend, sync, and infrastructure. The supported [production self-hosting guide](/docs/self-hosting/) uses AWS CDK. It is not a one-command local appliance. Operators own cloud costs, secrets, migrations, monitoring, backups, restore tests, and separately built mobile apps.

Migration is the larger limitation for an existing RemNote user. Flashcards imports its own `flashcards.zip` packages, not RemNote Markdown or Anki `.apkg`. Those packages carry cards, tags, and referenced media, but not review history, FSRS state, workspace settings, full deck structure, or accounts. AI chat can turn exported text into reviewed card drafts; that is rebuilding content, not continuing the old collection. The [TXT migration guide](/blog/migrate-from-anki-txt-export-open-source-flashcards/) shows that lossy boundary step by step.

Choose Flashcards for a fresh or simple card workspace when whole-stack source access matters. Keep RemNote for connected study, and choose Anki when migration fidelity or advanced card structure matters. For the narrower card-system comparison, see [Anki vs Flashcards](/blog/anki-vs-flashcards-open-source-app/) and the [open-source flashcard apps guide](/blog/best-open-source-flashcard-apps-2026/).

## What will not migrate cleanly from RemNote

RemNote has several useful exports, but no single file recreates the product elsewhere.

- **The complete RemNote export** is the best restore format for RemNote. It currently omits images and PDFs.
- **The Anki `.apkg` export** contains flashcards only. Bullets without cards disappear from that route, and the result is not your linked note system.
- **Markdown, HTML, OPML, and text** make content easier to read elsewhere. They do not make another app understand every RemNote-specific relationship or workflow.
- **PDF highlights and sources** need their own check. RemNote Reader can download a PDF with highlights, but do not assume the complete knowledge-base export contains that file.
- **Settings, themes, and plugins** are not included in a manual RemNote backup, according to the [backup documentation](https://help.remnote.com/en/articles/6301627-remnote-backups).
- **Review state** should be verified card by card in the destination. An import that preserves the question and answer can still restart the schedule.

This is why “supports Markdown” or “imports Anki” is not enough. Portability has layers: readable notes, usable media, linked sources, card structure, and learning history.

## Rehearse the exit before you cancel

Make the move reversible. One quiet hour now is cheaper than discovering a missing PDF during exam week.

1. Create a fresh manual **RemNote (Complete)** export and keep it unchanged.
2. On desktop, copy the local `.db.zip` backups and the `files` folder. Download any original or annotated PDFs you cannot replace.
3. Pick a small, awkward sample: nested notes, references, one PDF, images, clozes or multiple-choice cards, tags, and cards with meaningful review history.
4. Export that sample in every format the candidate route needs—usually Markdown for notes and `.apkg` for Anki.
5. Import into a disposable vault, graph, profile, or workspace. Compare counts, formatting, links, media, card fronts and backs, and due states with RemNote side by side.
6. Work offline on every device you plan to use. Then reconnect and confirm that edits and reviews arrive where expected.
7. Restore the complete backup into a temporary local RemNote knowledge base. A downloaded archive becomes a recovery plan only after you have opened it successfully.
8. Study in both systems for at least several real sessions. Cancel only after the replacement survives the daily workflow, an export, and a restore.

Keep the source exports even after the move. A successful import proves compatibility with today's version of the destination, not permanent access to every piece of the old system.

## The practical shortlist

- **Stay with RemNote** if linked notes and PDF study are the valuable part. Its Free plan or local-only knowledge base may already solve the constraint.
- **Choose Anki** if cards, templates, FSRS controls, and migration fidelity come first.
- **Choose Obsidian plus Anki** if plain local note files justify running two tools.
- **Evaluate Logseq** if you need open-source connected notes and built-in cards, but keep the test non-critical while its current database and sync stack are still beta and alpha.
- **Choose Flashcards** if a simple fresh card system and whole-stack source access matter more than notes, PDFs, or schedule continuity.

I build Flashcards, and I would still keep RemNote for a PDF-heavy connected notebook or choose Anki for a complex established collection. Flashcards is the narrower choice: front/back cards, an open stack, and a new schedule.

Once you know which boundary you can accept, test only that route. If Flashcards fits, the [getting started guide](/docs/getting-started/) shows the hosted and self-hosted entry points. If it does not, keeping RemNote is a valid decision too.
