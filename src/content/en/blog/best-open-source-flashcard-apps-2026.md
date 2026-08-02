---
title: "Best Open-Source Flashcard Apps in 2026"
description: "Compare the best open-source flashcard apps by license, platforms, offline use, scheduler, sync, imports, exports, and real self-hosting."
date: "2026-08-02"
image: "/blog/best-open-source-flashcard-apps-2026.png"
keywords:
  - "best open source flashcard apps"
  - "open source flashcard app"
  - "self hosted flashcards"
  - "offline flashcard app"
  - "spaced repetition app"
  - "open source spaced repetition"
---

A GitHub link tells you surprisingly little about a flashcard app. The desktop client may be open source while the iPhone app is proprietary. A Docker image may give you a browser app but no sync for native clients. And an offline flashcard app can still have a completely closed-source core.

So this comparison of the **best open source flashcard apps** checks the boundaries that matter after installation: license, platforms, offline use, scheduler, sync, import and export, and exactly what you can self-host. The shortlist covers Anki, Flashcards, Mnemosyne, and SiYuan, followed by Mochi as a proprietary local-first comparison.

> **Disclosure:** I am Kirill Markin, and I build [Flashcards](https://flashcards-open-source-app.com/), one of the products covered here. It belongs in the shortlist because the repository includes the web app, native clients, backend, sync, and production infrastructure under the MIT license. I do not treat it as the automatic winner. Anki is more mature, Mnemosyne offers a focused desktop workflow and stronger Anki migration, SiYuan is a broader knowledge system, and Mochi is easier to consider if open source is optional.

**Facts checked:** August 2, 2026.

![Warm desk comparing five open-source and offline flashcard systems by scheduling, sync, export, and self-hosting](/blog/best-open-source-flashcard-apps-2026.png)

## What “open source,” “offline,” and “self-hosted” mean here

I included a product in the open-source group when the source for its core user-facing app is published with stated licensing terms. I then checked each option against the same practical questions rather than treating repository stars as a quality score.

- **Open source** describes the legal rights attached to the code. It does not promise offline access, a maintained mobile app, or an installable server.
- **Offline use** means an installed client can create or review cards from local data without contacting a server. Proprietary software can meet this requirement.
- **Self-hosted sync** means you operate the service that exchanges data among clients. It may provide no browser interface at all.
- **Full web-app self-hosting** means your deployment includes an application people can use in a browser. Native clients may still need separate builds, distribution, or a different sync system.

Those distinctions are the main point of the article. “Has source,” “works offline,” and “runs in Docker” are not interchangeable promises.

## Open-source flashcard apps compared

The four genuinely open-source entries come first. Mochi sits last because its offline behavior and portable formats make it relevant to the same search, but its core application is proprietary.

| Product | License / source status | Platforms | Offline | Scheduler | Sync | Import / export | Exact self-hosting scope |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Anki](https://github.com/ankitects/anki) | [Desktop core: AGPL-3.0-or-later, with some BSD-3-Clause portions](https://raw.githubusercontent.com/ankitects/anki/main/LICENSE); AnkiDroid is a separate open-source project; official AnkiMobile is proprietary | Windows, macOS, Linux; Android through AnkiDroid; iOS through AnkiMobile; hosted browser study through AnkiWeb | Native desktop and mobile clients work offline | [FSRS and legacy SM-2](https://docs.ankiweb.net/deck-options) | AnkiWeb or the official self-hosted sync server | [Text, packaged Anki decks, and Mnemosyne `.db` import](https://docs.ankiweb.net/importing/intro.html); [text, `.apkg`, and `.colpkg` export](https://docs.ankiweb.net/exporting.html) | **Sync only.** The official server is not self-hosted AnkiWeb and adds no browser study UI |
| [Flashcards](https://github.com/kirill-markin/flashcards-open-source-app) | MIT; web, iOS, Android, backend, sync, and infrastructure are in one repository | [Web, iOS, Android](https://github.com/kirill-markin/flashcards-open-source-app#available-on) | Local-first writes in IndexedDB or SQLite; queued changes sync after reconnection | [FSRS](/docs/architecture/#scheduling) | Hosted sync or the self-hosted production stack | `flashcards.zip` moves cards, tags, and related media only; reviewed AI-assisted TXT/CSV drafting is lossy; no direct `.apkg` import | **Full stack, with caveats.** Production is AWS-centered and depends on several external services; Docker Compose is development-only |
| [Mnemosyne](https://mnemosyne-proj.org/) | [Licensing varies by component](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE): the [core uses AGPL v3 plus an extra name/attribution provision](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE), while [openSM2sync uses LGPL v3](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) | [Windows, macOS, Linux, Android; browser review through a running desktop server](https://mnemosyne-proj.org/download-mnemosyne.php) | Local desktop use and offline Android review; Android cannot edit cards | Adaptive scheduling from 0–5 recall grades | Built-in sync to your own desktop or headless server | [Full Anki import with custom card types and learning data](https://mnemosyne-proj.org/features), plus plain text and older formats; sharing and text exports are not full backups | **Sync plus limited browser review.** You run a Mnemosyne instance; this is not a hosted web product |
| [SiYuan](https://github.com/siyuan-note/siyuan) | AGPL-3.0; the official project also links open-source Android, iOS, and HarmonyOS clients | Windows, macOS, Linux, Android, iOS, HarmonyOS; browser use through Docker | Full local use offline | [FSRS](https://b3log.org/siyuan/en/) | Official end-to-end encrypted sync or paid third-party cloud storage support | General app supports Markdown and data imports plus Markdown, PDF, Word, HTML, and data exports; no documented `.apkg` importer | **Full browser app through Docker.** Docker is browser-only and does not act as sync for desktop or mobile clients |
| [Mochi](https://mochi.cards/) | Proprietary core; its [public repositories contain integrations](https://github.com/mochi-cards/open-source), not the app itself | [Web, Windows, macOS, Linux, iOS, Android](https://mochi.cards/docs/getting-started/download-and-install/) | Full offline use without an account; browser storage can be cleared by the browser | Undisclosed adaptive scheduler with Remembered / Forgot responses and a 90% default target recall | Hosted paid sync | Imports `.mochi`, Anki `.apkg`, Markdown, and CSV; exports `.mochi`, Markdown, and CSV with different metadata coverage | **None.** No supported self-hosted core app or sync service |

This is a decision aid, not a feature-completeness score. A direct `.apkg` importer may matter more than self-hosting when you have ten years of review history. A browser UI may matter more than mobile editing in a classroom. Start with the requirement that would make you reject an app.

## Anki: mature, flexible, and complicated at the edges

Anki remains the safest choice for a complex existing collection. Its card templates, add-on ecosystem, scheduling controls, and package formats have had years to mature. If those are the reasons you use Anki, moving to a younger app may solve nothing.

The source story is mixed rather than uniformly open. The [desktop license](https://raw.githubusercontent.com/ankitects/anki/main/LICENSE) is AGPL-3.0-or-later, with some portions under BSD-3-Clause and bundled components under other licenses. [AnkiDroid](https://github.com/ankidroid/Anki-Android) is a separate open-source Android project. The official AnkiMobile iOS app is proprietary, and AnkiWeb is a hosted browser service. The native clients work offline; AnkiWeb supplies browser access when you use the hosted ecosystem.

Anki supports both [FSRS and the older SM-2 scheduler](https://docs.ankiweb.net/deck-options). Its migration story is the strongest in this comparison: Anki imports text files, packaged decks, and Mnemosyne 2.0 databases, while exports can include text, `.apkg`, or `.colpkg` packages with configurable media and scheduling data.

Self-hosting has a narrower meaning. The [official sync server](https://docs.ankiweb.net/sync-server.html) synchronizes compatible Anki clients for advanced operators who do not want AnkiWeb. It does not host the AnkiWeb interface, so it gives you neither browser study nor a self-hosted account website. Client and server versions also need to stay compatible as the protocol changes.

Choose Anki for mature templates, add-ons, reliable package migration, and broad client availability. Its drawback for this comparison is not capability; it is the split between an open desktop core, separate Android project, proprietary official iOS client, and hosted web service.

## Flashcards: full-stack source with an AWS-sized operator job

Flashcards makes a different trade. Its MIT-licensed repository contains the browser app, iOS and Android clients, backend, offline sync, and infrastructure. That gives an operator access to more of the product stack than Anki's official sync server does, but it also gives the operator considerably more work.

The web app stores local data in IndexedDB, while iOS uses SQLite and Android uses Room over SQLite. The [offline-first architecture](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/architecture.md#offline-first-sync) writes locally, queues operations in an outbox, and pushes them after a client reconnects. Reviews use [FSRS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Hosted and self-hosted deployments support the same web, sync, and API-shaped product model.

“Full-stack self-hosting” needs the long version. The supported [production self-hosting guide](/docs/self-hosting/) uses AWS CDK, not a vendor-neutral Docker production bundle. It requires AWS infrastructure and Cognito, Cloudflare DNS, Resend email delivery, and Sentry configuration. You own secrets, migrations, alarms, backups, restore tests, and upgrades. The repository's Docker Compose setup starts PostgreSQL and migrations for local development; it is explicitly not the production path. The native apps live in the repository, but private iOS and Android builds must be built and distributed separately. Read the [architecture overview](/docs/architecture/) before calling it a one-command deployment.

Migration is the bigger user-facing limitation. A `flashcards.zip` package moves cards, tags, and related media between Flashcards workspaces. It does not move review history, FSRS state, workspace settings, full deck structures, or accounts. It is content transfer, not a complete backup or lossless hosted-to-self-hosted migration.

There is no direct Anki `.apkg` importer. The supported [TXT/CSV migration workflow](/blog/migrate-from-anki-txt-export-open-source-flashcards/) asks AI to draft cards from exported text and then requires the user to review the draft. Templates, scheduling state, and deck structure are not preserved, and even simple content needs checking. That workflow is useful for rebuilding mostly text-based cards, not for claiming exact Anki compatibility.

Choose Flashcards when you specifically want a modern open-source web and native stack, FSRS, offline-first clients, and an operator-controlled backend. Choose Anki for collection fidelity, or Mnemosyne when a traditional local app with self-run sync covers the ownership boundary you need.

## Mnemosyne: focused desktop study and self-run sync

Mnemosyne is the least sprawling option here. It is a traditional desktop spaced repetition app with strong local behavior, an Android review client, Anki migration, and a sync protocol you can host from a desktop or headless instance.

Its licensing deserves precise wording. The [root license file](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) says different components use different licenses. The [Mnemosyne core license](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) is AGPL v3 with an extra provision requiring the Mnemosyne name to be clearly visible in derived work, with the exact form discussed with the maintainers. The nested [openSM2sync license](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) is LGPL v3. One link cannot accurately describe both components.

The current download page lists version 2.11 for Windows, macOS, and Linux, plus an Android client for offline reviews and desktop sync. On other mobile platforms, the documented option is browser review through a web server running on your desktop. The [Android client does not support editing cards](https://mnemosyne-proj.org/help/android-client), so it is a review companion rather than a full mobile editor.

Scheduling uses a 0–5 self-rating to adapt future intervals. Mnemosyne also has a plugin architecture that can replace core parts such as the scheduler or database. Its [built-in sync](https://mnemosyne-proj.org/help/syncing) merges cards and learning data across multiple machines and lets one desktop or headless process act as the server. The desktop web server can expose reviews in a browser, but the official feature page warns that this browser server has no security features. It is not a polished multi-user web service.

Import is one of Mnemosyne's best reasons to switch: the project documents full Anki import with custom card types and learning data, along with plain text, SuperMemo, and CueCard formats. Export needs more care. The `.cards` flow is designed for [sharing selected cards](https://mnemosyne-proj.org/help/sharing-cards), not preserving your complete learning state. For a full move or backup, the [multi-computer guide](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) tells you to copy the data directory instead.

Choose Mnemosyne if you want local desktop ownership and self-hosted sync without operating a cloud application stack. Check the Android editing limit and the browser server's security boundary before relying on it away from your desktop.

## SiYuan: a self-hosted knowledge base that happens to have flashcards

SiYuan is the outlier in the open-source group. It is primarily a privacy-focused knowledge management system with block references, documents, databases, and built-in FSRS flashcards. That is appealing when notes create the cards. It can feel like a lot of software when all you want is a review queue.

The [official repository](https://github.com/siyuan-note/siyuan) is AGPL-3.0 and links the open-source UI, kernel, Android, iOS, and HarmonyOS projects. Desktop and mobile apps store data locally and continue to work offline. Native apps can use SiYuan's end-to-end encrypted cloud sync; paid members can configure supported third-party cloud storage. That native sync path is separate from Docker hosting.

Docker runs a real browser-accessible SiYuan application, but the repository lists three important limitations: desktop and mobile apps cannot connect to it, Markdown import is unavailable, and PDF, HTML, and Word export is unavailable. In other words, Docker mode is browser-only and is not a private sync server for the native clients.

The general application has a broader import/export surface, including Markdown and SiYuan data packages on import and Markdown with assets, PDF, Word, HTML, and data formats on export. Those general capabilities should not be copied into the Docker column without the limitations. I found no direct Anki `.apkg` importer in the official documentation.

Choose SiYuan when the primary goal is a local or self-hosted knowledge base and flashcards should live inside it. For a focused Anki migration, Anki or Mnemosyne offers a more direct card model and clearer learning-data transfer.

## Mochi: excellent offline behavior does not make the core open source

Mochi belongs in this decision even though it does not qualify for the open-source shortlist. It is a calm, Markdown-oriented flashcard and notes app for macOS, Windows, Linux, iOS, Android, and the web. The desktop and mobile apps can run [completely offline without an account](https://mochi.cards/docs/getting-started/download-and-install/). The web version also uses offline browser storage, which the documentation warns can be cleared unexpectedly.

Its scheduler offers two responses, Remembered and Forgot. The documentation describes adaptive intervals, relearning behavior, and a [90% default target recall](https://mochi.cards/docs/reviewing/due-today/), but does not publish the formula. Cross-device sync is a paid hosted feature.

Portability is a strength. Mochi [imports Anki `.apkg` files including review history](https://mochi.cards/docs/import-and-export/importing/), but strips CSS and JavaScript and converts HTML to Markdown, so custom presentation will not arrive intact. It also imports Markdown, CSV, and its native `.mochi` format.

The [native `.mochi` archive](https://mochi.cards/docs/import-and-export/mochi-format-reference/) can include decks, cards, attachments, tags, templates, and reviews. [Markdown and CSV exports](https://mochi.cards/docs/import-and-export/exporting/) are easier to inspect in other tools but lose documented metadata such as review history, order, or templates. Current docs therefore do not support the old claim that Mochi exports never carry review history; the native format does.

Mochi's [open-source repositories](https://github.com/mochi-cards/open-source) contain integrations, plugins, and related tools, not the core application or a deployable sync service. There is no supported self-hosting path. Choose it when offline use, Markdown, and `.apkg` migration matter more than source access.

## Which spaced repetition app fits your constraint?

There is no automatic winner. The useful decision is the one that starts with what you refuse to compromise on.

- **Choose Anki** for the most mature templates, add-ons, package migration, and client ecosystem. Its official self-hosting covers sync, not AnkiWeb.
- **Choose Flashcards** for one MIT-licensed web/native/backend repository and a supported full production deployment. Accept the AWS-centered stack, external service dependencies, operator work, and lossy Anki migration.
- **Choose Mnemosyne** for focused local desktop study, strong Anki import, and a self-run sync server. Android cannot edit, and browser review is tied to your running instance.
- **Choose SiYuan** when notes and documents are the main system and FSRS flashcards belong inside it. Docker gives you a browser app, not native-client sync.
- **Choose Mochi** when a proprietary but fully offline Markdown app with direct `.apkg` import is acceptable. There is no core source or self-hosting.

If Anki already works and none of these constraints hurts, keeping it is a sensible result. Switching spaced repetition apps creates real work, especially when templates, media, and years of scheduling history are involved. For more products outside the open-source requirement, see the [broader Anki alternatives comparison](/blog/best-anki-alternatives/).

## Migration checklist before moving everything

Use one representative deck before touching the full collection. Include the awkward cards: custom fields, clozes, images, audio, nested decks, tags, and enough review history to reveal scheduler differences.

1. Export a complete backup from the current app and leave that file unchanged.
2. Record card counts, field names, tags, deck structure, media counts, and a sample of due dates.
3. Confirm whether the destination reads the native format or only text, CSV, or Markdown. Importing the words is not the same as preserving the collection.
4. Inspect formatting, clozes, templates, media, tags, and review history separately after the test import.
5. Review offline on every device you intend to use. Check which edits queue locally and which still require a server.
6. Create disposable conflicting edits and confirm how sync resolves them before trusting it with real material.
7. For self hosted flashcards, perform an upgrade, a backup, and an actual restore. A running container is not a recovery plan.
8. Study in both apps for several days before deleting, freezing, or resetting the old setup.

Export formats deserve their own check. Anki packages can preserve much more than text. Mnemosyne's sharing export omits learning data. Flashcards packages move content rather than complete learning state. Mochi's native archive carries more metadata than its Markdown and CSV exports. SiYuan's Docker deployment removes import/export commands available in the general app.

## Why Scholarsome and OpenCards are not in the shortlist

[Scholarsome](https://scholarsome.com/) is open source and self-hostable, but its official homepage still places “Spaced repetition system implementation” under features coming soon. That rules it out of a comparison centered on recurring scheduled review, even if its other study modes are useful.

[OpenCards](https://github.com/holgerbrandl/opencards) is a desktop flashcard app built around PowerPoint and Markdown files. I left it out because the official repository's [latest tagged release is v2.5.1 from January 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1), and its [latest repository commit is from June 2018](https://github.com/holgerbrandl/opencards/commits/master/). Those are precise project facts, not a claim that the software has no value. They do make it difficult to recommend for a new multi-device setup in 2026.

## The honest shortlist

Anki offers the deepest mature flashcard ecosystem, but “open-source Anki” becomes a mixed story once Android, iOS, hosted web access, and self-hosted sync are separated. Flashcards exposes the broadest full product stack here, with the largest production operations burden and weakest lossless migration. Mnemosyne keeps local study and self-run sync focused. SiYuan provides a genuine Docker-hosted browser app around a much larger notes system. Mochi proves that excellent offline behavior and portability do not require an open-source core.

The best open source flashcard app is the one whose ownership boundary matches your real requirement. Check the license, test the hardest migration case, and decide whether you need local data, self-hosted sync, or a complete browser deployment. They solve different problems.
