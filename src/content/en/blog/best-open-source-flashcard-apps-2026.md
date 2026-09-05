---
title: "Best Open-Source Flashcard Apps in 2026: 6 FOSS Options Compared"
description: "Compare six maintained open-source flashcard apps by source coverage, offline data, sync, Anki import, export, self-hosting, and recovery."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "best open source flashcard apps"
  - "open source flashcard app"
  - "open source spaced repetition"
  - "self hosted flashcards"
  - "offline flashcard app"
  - "Anki open source alternative"
  - "FOSS flashcards"
---

Anki is still the best open-source flashcard app for most people in 2026. The interesting part starts when “open source” is not your only hard requirement.

Perhaps you need a browser app on your own server. Or a deck you can read as plain Markdown. Or a private notes system that creates flashcards. Those requirements point to different products, and a public GitHub repository does not settle the decision.

An open desktop client can sit beside a closed iPhone app. A Docker container can host a browser UI without syncing native clients. An import can recover the words while losing the templates, media, and years of review history that made the collection useful.

Six projects passed this review. I compared their licensed source, latest stable release, local data, scheduler, sync, Anki migration, export, and exact self-hosted surface. That last boundary matters more than most feature lists admit.

> **Disclosure:** I am Kirill Markin, and I build [Flashcards](https://flashcards-open-source-app.com/), one of the six apps below. Its MIT repository covers the web app, native clients, backend, sync, and infrastructure. I have not ranked it first. Anki is the safer default, Mnemosyne has a more established Anki migration path, and several choices here are much easier to operate.

**Facts checked:** September 5, 2026. Stable releases are separated from work that exists only on a default branch.

![A hiker compares six open backpacks and tests a backup kit before choosing an open-source flashcard app](/blog/best-open-source-flashcard-apps-2026-v2.png)

## The short answer

| Your main requirement | Best fit | Why | The catch to test first |
| --- | --- | --- | --- |
| A dependable general-purpose system or a complex existing collection | [Anki](https://apps.ankiweb.net/) | Mature cards and templates, FSRS, add-ons, broad clients, and rich package exports | The official iOS app and AnkiWeb are not part of the open-source desktop code; self-hosting gives you sync, not AnkiWeb |
| A focused desktop alternative with established Anki import | [Mnemosyne](https://mnemosyne-proj.org/) | Local study, Anki card-type and learning-data import, and a sync server you can run yourself | Version 2.11 is still the latest stable release; Android reviews but cannot edit |
| Notes and flashcards inside one local knowledge base | [SiYuan](https://b3log.org/siyuan/en/) | Offline native apps, built-in FSRS, and a genuine Docker-hosted browser app | Docker clients cannot sync with the native apps, and several Docker import/export commands are unavailable |
| Source for the web, mobile, backend, and infrastructure | [Flashcards](https://github.com/kirill-markin/flashcards-open-source-app) | One MIT monorepo with a documented production deployment | The supported production stack is AWS-centered, and migration from Anki is lossy |
| A younger local-first desktop app with direct APKG import | [Recall](https://github.com/Madlezz/Recall) | FSRS, desktop builds, a PWA, local databases, and an optional encrypted relay | Import keeps only a scheduling snapshot, handles the first two note fields, and skips audio |
| Human-readable Markdown decks with no network dependency | [Essentialist](https://github.com/essentialist-app/essentialist) | Plain deck files and a deliberately offline desktop/Android app | There is no sync, and progress lives in a separate hidden database |

This is not a feature score. Start with the failure you cannot accept. If you have ten years of Anki reviews, migration fidelity matters more than a cleaner interface. If you operate a school deployment, browser access and a proven restore may matter more than add-ons.

## What counted as an open-source flashcard app

I used four gates:

1. **The core study experience has published source and an explicit open-source license.** A directory of integrations around an unpublished core does not count.
2. **Spaced repetition works today.** A roadmap entry or a generic quiz mode is not enough.
3. **There is a released build or a clearly documented official deployment.** Recent commits alone do not make a prototype a safe recommendation.
4. **Official sources expose enough of the data boundary to audit it.** I needed concrete answers about offline storage, sync, import/export, or hosting—not a vague promise that users “own their data.”

Stars were not a cutoff. They reward age and publicity as much as product fit. Maturity still matters, though. Anki, Mnemosyne, and SiYuan have established releases and operating models. Recall and Essentialist earned narrower places because their released behavior is documented well enough to make a specific recommendation.

“Maintained” also needs two checks. A tagged release tells you what users can install; the default branch tells you where the project is going. Essentialist is the cleanest example. Its stable release documents SM-2, while its current branch documents FSRS. The table below records SM-2.

## Six FOSS flashcard apps compared

| App | Stable version checked | Platforms | Offline data | Scheduler | Sync | Anki migration and exit path | Self-hosted surface |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), August 5, 2026 | Windows, macOS, Linux; separate Android and iOS clients; AnkiWeb | Installed clients study from local collections | FSRS or legacy SM-2 | AnkiWeb or the official self-hosted sync server | Imports text, APKG/COLPKG, and Mnemosyne databases; exports text or packages with selectable media and scheduling | **Sync server only.** No self-hosted AnkiWeb or browser study UI |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), November 12, 2023; repository activity continued in 2026 | Windows, macOS, Linux, Android; limited browser review | Desktop is local; Android reviews offline but cannot edit | Adaptive 0–5 recall grading | Built-in sync to a desktop or headless instance | Officially documents full Anki import with custom card types and learning data; its sharing export is not a full backup | **Sync plus limited browser review.** The browser server has no security features |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), August 30, 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; browser via Docker | Native clients keep the workspace locally | FSRS | Paid official E2EE sync or paid third-party S3/WebDAV integration | General app imports Markdown/data and exports several document/data formats; no documented APKG importer | **Full browser app.** Docker cannot sync native clients and removes some import/export commands |
| **Flashcards** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), September 1, 2026 | Web, iOS, Android | IndexedDB on web; SQLite on iOS; Room over SQLite on Android; local writes queue for sync | FSRS | Hosted or operator-deployed backend | Its own ZIP moves cards, tags, source metadata, and referenced media, but not decks, learning state, settings, or accounts; no APKG importer | **Full web/backend stack.** Production deployment is AWS-centered; private native builds are separate |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), July 31, 2026 | Windows, macOS, Linux; installable PWA | SQLite on desktop; IndexedDB in the browser; no account or telemetry by default | FSRS | Desktop folder sync or an optional encrypted Cloudflare Worker/R2 relay | Desktop APKG import reads the first two fields, decks, tags, an approximate scheduling snapshot, and images; JSON and Recall archive exports | **Encrypted snapshot relay only.** It does not host the PWA |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), October 10, 2025; source activity continued in 2026 | Android APK, macOS DMG, Linux Flatpak; Windows from source | No network access; deck content is Markdown | Stable release: SM-2; default branch: FSRS | None | Markdown preserves card content; a hidden sidecar database preserves progress | **Nothing to host.** Back up the Markdown file and its sidecar together |

## 1. Anki is the safest default

Anki wins on the unglamorous parts. It can represent complex note types, generate sibling cards from templates, keep media with the collection, and carry years of scheduling data. The stable desktop release for this audit is [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). The newer 26.09b2 build is marked as a beta, so it is not the baseline here.

The open-source boundary is mixed. The [desktop repository is AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), with listed exceptions for bundled components. [AnkiDroid](https://github.com/ankidroid/Anki-Android) is a separate open-source Android project. AnkiMobile and AnkiWeb are official surfaces, but their source is not included in those repositories. The longer version is in [Is Anki Open Source?](/blog/is-anki-open-source/).

Installed clients keep local collections, so ordinary review works without a connection. AnkiWeb is the online surface. If offline behavior is the deciding factor, [Does Anki Work Offline?](/blog/does-anki-work-offline/) separates what stays local from what waits for sync.

Anki supports [FSRS and its older scheduler](https://docs.ankiweb.net/deck-options.html). Its export formats are the strongest migration starting point in this group. A [COLPKG contains the whole collection with scheduling](https://docs.ankiweb.net/exporting.html), while APKG exports can include scheduling information and media when you select those options. Anki also imports text, Anki packages, and Mnemosyne 2.0 databases.

That rich source package does not promise a perfect import elsewhere. A destination still has to understand the templates, card-generation rules, media references, and scheduler fields inside it. It simply has more information to work with than a CSV file.

The [official self-hosted server](https://docs.ankiweb.net/sync-server.html) is intentionally small. It synchronizes compatible Anki clients; it does not provide AnkiWeb, browser review, or an account portal. It listens over unencrypted HTTP by default, and the guide recommends keeping it on a local network or putting a VPN or HTTPS reverse proxy in front. Client and server versions also need to remain compatible.

Choose Anki when collection fidelity, templates, add-ons, or broad client support comes first. Look elsewhere only when a specific boundary—such as a self-hosted browser UI or fully published mobile stack—matters more.

## 2. Mnemosyne keeps local study focused

Mnemosyne feels like a desktop study tool because that is what it is. It does not bring a knowledge base or cloud platform along for the ride. You get a local database, a traditional spaced-repetition workflow, an Android review companion, and a sync server that can run on a desktop or headless machine.

Its latest stable release is still [2.11 from November 2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). The repository received changes in 2026, but that does not turn those changes into a stable installer. Test 2.11 on the operating systems you plan to keep for the next few years.

The license also needs more than one badge. The [root license map](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) assigns LGPL v3 to openSM2sync and separate terms to the rest of Mnemosyne. The [main-program license](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) applies AGPL v3 plus an extra provision requiring the Mnemosyne name to remain clearly visible in derived work, with the exact form discussed with the maintainers. Read that text before redistributing a modified build.

The [Android client reviews offline but cannot edit cards](https://mnemosyne-proj.org/help/android-client). Other devices can use a browser review server started from the desktop app, but the official feature page warns that the server has no security features. It is a handy LAN interface, not a polished public web application.

Migration is Mnemosyne’s best argument against simply staying with Anki. The official features page documents [full Anki import, including custom card types and learning data](https://mnemosyne-proj.org/features). Its [built-in sync](https://mnemosyne-proj.org/help/syncing) merges cards and learning data and can target a machine you control.

The normal export command is a trap for backups. It is designed to share selected cards and omits your learning data. To move or recover the complete system, the [multiple-computers guide](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) tells you to copy the full data directory.

Mnemosyne is the strongest focused open-source Anki alternative here. The trade is a slow stable-release cadence, limited mobile editing, and a browser surface that needs a careful network boundary.

## 3. SiYuan works when notes are the real system

SiYuan is a privacy-first knowledge-management application with flashcards built into the same block-and-document model. That is useful when your notes create the review material. It is a lot of machinery when you only want a queue of cards.

The [AGPL-3.0 repository](https://github.com/siyuan-note/siyuan) links the UI, kernel, mobile apps, data layer, and FSRS component. Version [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2) is the stable release checked here. Desktop and mobile clients store the workspace locally and continue to work offline.

Sync is not part of the free local-storage tier. The [official pricing page](https://b3log.org/siyuan/en/pricing.html) offers end-to-end encrypted official sync with the subscription, while paid Pro features add integrations for your own S3 or WebDAV storage. The project also warns against placing a live workspace in a generic file-sync folder because concurrent edits can corrupt or overwrite data.

Docker runs a real browser application, but it does not turn into a sync server for the installed apps. The [v3.8.2 Docker documentation](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) says desktop and mobile clients cannot connect to it. Docker also removes Markdown import and PDF, HTML, and Word export. Those commands exist in the broader native application, so copying the general feature list into a Docker deployment plan would be misleading.

I found no official APKG importer. SiYuan can move Markdown and its own data formats, but an Anki collection needs a more deliberate rebuild.

Choose SiYuan when the knowledge base is the primary product and flashcards belong inside it. If you want a direct Anki replacement, Mnemosyne and Anki have clearer migration boundaries.

## 4. Flashcards exposes more of the stack—and asks you to run it

Flashcards publishes the widest product boundary in this comparison. The MIT monorepo includes the web app, iOS and Android clients, backend, authentication service, synchronization, admin application, database migrations, and AWS infrastructure. The stable release used here is [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Later work on the default branch is not counted as released behavior.

The [architecture](/docs/architecture/) is offline-first, but “offline” means something slightly different on each client. The web app keeps its local source of truth in IndexedDB. iOS uses SQLite, and Android uses Room over SQLite. Changes are written locally and queued in an outbox before sync. That design handles an interrupted connection; it does not make browser storage permanent or remove the need to test a cold start on each device.

Flashcards’ own ZIP package is a content-transfer format, not an account backup. In v1.23.0, its [package schema](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) carries front and back content, tags, card type, source metadata, and package metadata; referenced media is bundled separately. It does not carry deck structure, review history, FSRS state, workspace settings, or accounts.

There is no APKG importer in v1.23.0. The documented [Anki TXT/CSV migration workflow](/blog/migrate-from-anki-txt-export-open-source-flashcards/) uses exported text to rebuild cards and requires a human review. Templates, scheduling state, deck structure, and bundled media do not survive that route automatically. It is reasonable for a simple text deck and a poor choice for a heavily customized collection.

The [self-hosting guide](/docs/self-hosting/) is equally explicit. Production uses an AWS CDK stack with RDS, Cognito, API Gateway and Lambda, S3 and CloudFront, secrets, alarms, and backups. Cloudflare DNS, Resend email, and Sentry configuration sit outside AWS. Docker Compose runs local development; it is not the supported production package. Operators who want private iOS or Android binaries build and distribute those separately.

Choose Flashcards when owning the complete web/native/backend source boundary justifies that operating work. Choose Anki or Mnemosyne when preserving an existing collection is the harder requirement.

## 5. Recall is modern, but read the importer closely

Recall is the youngest main recommendation. It made the list because [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) provides versioned desktop builds, an installable PWA, explicit local storage, FSRS, data exports, and a documented self-hosted sync design.

The MIT-licensed desktop app uses SQLite; the PWA uses IndexedDB. Neither needs an account, and the project says telemetry is off by default. Desktop releases cover Windows, macOS, and Linux.

The APKG importer is useful, but the README’s phrase “review history” is too generous for the tagged implementation. The [v1.3.0 importer source](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) does not read Anki’s review log. It reads the current card state, interval, repetition and lapse counts, plus FSRS stability and difficulty when Anki stored them. For older cards without those FSRS fields, Recall estimates them from SM-2 values.

Content conversion has sharp edges too. The importer uses the first two note fields as front and back rather than reproducing Anki note types and templates. It keeps deck names and tags. It extracts common image formats and rewrites their references, but skips audio and other media. Because the importer is a Tauri command, direct APKG migration is a desktop feature, not a browser-PWA feature.

That is much better than a plain-text rebuild, but it is not collection fidelity. Test clozes, sibling cards, extra fields, HTML/CSS, images, audio, due dates, and repeated notes before trusting a large move.

Recall has two sync paths. Desktop can write a snapshot to a folder managed by Dropbox, Drive, or another file-sync tool. The optional relay uses a Cloudflare Worker and R2 bucket. According to the tagged [sync design](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md), clients encrypt snapshots with AES-GCM before upload; the relay sees ciphertext, not card data or the key. Updates use optimistic concurrency and retry one conflict, but they still merge complete snapshots rather than fields. There is no maintainer-funded public relay—you deploy it and enter its URL.

JSON and Recall archive exports give you an exit path. Restore one into a clean profile before calling it a backup.

Choose Recall when you want a modern local-first desktop/PWA experience and can accept a young project plus an importer that preserves a useful snapshot rather than the whole Anki system.

## 6. Essentialist makes the deck easy to read, not the whole state

Essentialist has the smallest boundary here. Each deck is a Markdown file you can open in a text editor, keep in version control, or copy with ordinary file tools. The application intentionally makes no network requests.

The latest stable release is [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Its assets include Android, macOS, and Linux builds; Windows users build from source. The [tagged README](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) identifies SM-2 as the scheduler.

The [default-branch README](https://github.com/essentialist-app/essentialist/blob/main/README.md) now identifies FSRS, and the repository received source changes in 2026. That is useful direction, not a reason to label the 2025 binary as FSRS.

Markdown also covers less than it first appears. Card text lives in the visible file, while progress lives in a hidden database named `.<deck file>.db`. Copying `sample.md` without `.sample.md.db` saves the questions and answers but loses the learning state.

There is no built-in device sync or server. You can place the files in your own synchronized folder, but then conflict handling and recovery become your problem.

Choose Essentialist when readable Markdown and a no-network workflow are the point. It is not a seamless multi-device system, and one visible file is not a complete backup.

## Four active projects worth watching

These projects have real 2026 work behind them. They stay outside the main six because a recommendation needs more than interesting source code.

| Project | What is already concrete | What still blocks a main-list recommendation |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | AGPL source, FSRS/SM-2/Leitner schedulers, Docker deployment, a managed service, CSV import, and data export | Created in July 2026; no versioned application release. Its GitHub release is an audio pack rather than an app milestone |
| [Openlet](https://github.com/ChloeVPin/openlet) | MIT web app with FSRS, CSV import, image occlusion, and a documented Supabase/Vercel architecture | No tagged release, and the official documentation does not yet define a complete offline, export, and self-host recovery boundary |
| [Prep](https://github.com/Zamua/prep-app) | MIT source, FSRS, hosted use, and a documented deployment on the self-hostable celld runtime | No tagged release; self-hosting also means operating celld and object storage, not deploying a standalone flashcard binary |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | GPLv3 Kotlin mobile app, FSRS/SM-2, an Android release, and APKG import with templates and media | Created in 2026; iOS requires a source build, and the official docs do not define general phone-to-phone sync |

Several familiar names fail the gate for simpler reasons. Mochi’s [open-source repository](https://github.com/mochi-cards/open-source) is a collection of integrations, not the core application. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) is open source and self-hostable, but its official README still places spaced repetition under “Features coming soon.” [OpenCards](https://github.com/holgerbrandl/opencards) has not released since [v2.5.1 in January 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1), and its repository has not received a code change since 2018.

If source access is optional, the [broader Anki alternatives comparison](/blog/best-anki-alternatives/) includes products that answer a different question.

## Test migration in five separate layers

“Imports Anki” is almost useless without the next sentence. A migration can succeed in one layer and fail in four others.

| Layer | What to compare | The misleading success signal |
| --- | --- | --- |
| Card content | Every field, cloze marker, tag, special character, and repeated note | The total card count is close |
| Structure | Note types, templates, generated sibling cards, and nested decks | Front and back text appeared somewhere |
| Media | Images and audio were copied, resolve locally, and play offline | The importer recognized the filenames |
| Learning state | Review log, state, due date, interval, lapses, and scheduler parameters | Imported cards are present but quietly restart as new |
| Exit and recovery | A documented export or backup can rebuild the same system elsewhere | A readable text export is treated as a full backup |

Build one deliberately awkward test deck before moving the real collection. Include extra fields, clozes, forward and reverse templates, nested decks, tags, images, audio, and enough review history to reveal whether the destination kept it.

Keep the untouched source backup. After import, compare note, card, and media counts separately. Inspect due dates instead of trusting a “scheduling imported” message. Review offline on every device you intend to use. Then create disposable conflicting edits on two devices and watch what sync does.

Run both systems for a few days. Deleting the old collection is the last step, not proof that the new one worked.

## Self-hosting is complete only after a restore

The products above use “self-hosted” for very different shapes:

- Anki and Mnemosyne run **sync services** while installed clients remain the study interface.
- SiYuan Docker runs a **browser application** that native clients cannot use as their sync server.
- Recall runs an **encrypted snapshot relay**, not the PWA itself.
- Flashcards deploys a **full web and backend stack**, while native apps remain separate builds.
- Essentialist has **no server**; the ownership boundary is the local files.

Once that surface is clear, test the part operators tend to postpone:

1. Create cards, attach media, complete reviews, and sync from two clients.
2. Capture every documented database, object-storage bucket, local file, secret, and configuration value.
3. Restore into an empty account, machine, or isolated deployment.
4. Compare card count, media, review history, due state, login, and client sync.
5. Upgrade the restored copy and complete another review cycle.

If the rebuild still depends on the old machine, you have a running service. You do not have a verified backup.

## Frequently asked questions

### What is the best open-source flashcard app in 2026?

Anki is the best default for most learners. It combines a mature collection model, FSRS, broad client coverage, and the richest first-party backup and export formats. The qualification is that its official iOS and web surfaces are not covered by the open-source desktop repository, and its self-hosted server provides sync rather than browser study.

### What is the best open-source Anki alternative?

Mnemosyne is the most established focused alternative and officially documents import of Anki custom card types and learning data. Recall looks more modern and imports APKG files directly on desktop, but it converts the first two note fields, keeps only a scheduling snapshot, imports images rather than audio, and does not carry the full review log.

### Can I self-host Anki?

Yes, you can run Anki’s official sync server for compatible clients. No, it is not a self-hosted replacement for AnkiWeb: there is no browser study interface.

### Does open source mean offline?

No. Open source describes licensing and access to source. Offline behavior depends on where the client stores data and which actions need a service. The reverse is also true: an app can keep its data locally without publishing its core source.

### Does self-hosting guarantee portability?

No. Self-hosting controls where a service runs. Portability depends on exports, complete backups, and a restore you have actually tested. A database on your server can still be hard to migrate, and a readable Markdown deck can still omit review state stored beside it.

## My recommendation

Keep or choose **Anki** unless one of its boundaries causes a real problem. Pick **Mnemosyne** for focused local desktop study and established Anki import. Use **SiYuan** when flashcards belong inside a larger knowledge base. Consider **Flashcards** when owning the full web/native/backend source justifies an AWS production stack. Choose **Recall** for a modern local-first client after testing its conversion limits. Choose **Essentialist** when plain Markdown and zero network access matter more than sync.

The best open-source flashcard app is not the repository with the longest feature list. It is the one whose source, offline data, migration, sync, hosting, and recovery boundaries match the system you are actually willing to own.
