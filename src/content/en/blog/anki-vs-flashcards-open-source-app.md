---
title: "Anki vs Nibomo (2026): Which App Should You Use?"
description: "Compare Anki and Nibomo on FSRS, offline use, mobile apps, AI, migration, self-hosting, and data control before you switch."
date: "2026-04-25"
updated: "2026-11-08"
image: "/blog/anki-vs-flashcards-open-source-app-v2.png"
keywords:
  - "Anki vs Nibomo"
  - "Anki alternative"
  - "open source Anki alternative"
  - "FSRS flashcard app"
  - "self-hosted flashcards app"
---

If Anki already holds your cards and review history, switching apps is a data-migration decision before it is a design preference. Anki can export a deck or an entire collection with scheduling data and media. Nibomo's AI chat can read an attached `.apkg` and turn it into cards, but every card starts as new, so it can't continue the review queue you have today.

That boundary decides most **Anki vs Nibomo** comparisons. Stay with Anki when collection fidelity, templates, add-ons, shared decks, or an established review habit matter most. Try Nibomo when you can start with a new or mostly text-based deck and care more about whole-stack source access, offline-first sync, built-in AI, or agent workflows.

> **Disclosure:** I am Kirill Markin, and I build [Nibomo](https://nibomo.com/). I have a clear interest in the product, so this comparison treats Anki as the default for workflows that Nibomo cannot yet reproduce.

**Facts checked:** August 23, 2026; Home Screen widget details checked November 7, 2026; Anki `.apkg` import details checked November 8, 2026.

![A traveler carries one archive box across a narrow test bridge while a well-used railway remains open behind them](/blog/anki-vs-flashcards-open-source-app-v2.png)

## Quick verdict

| Your constraint | Anki | Nibomo | Better fit today |
| --- | --- | --- | --- |
| You need to preserve a complex collection and its review history | A `.colpkg` keeps the full collection and schedule; an `.apkg` can include review history, deck presets, and media | AI chat turns an attached `.apkg` into cards, but review history, scheduling, and templates stay behind; it moves content, not the collection | **Anki** |
| You want FSRS | Supports FSRS, parameter optimization from review history, desired retention, and deck presets | Uses pinned FSRS-6 weights across web, iOS, Android, and the backend; workspace settings do not optimize weights from your reviews | **Either**; Anki is stronger for personal optimization and schedule continuity |
| You study without internet | Installed desktop, iOS, and Android clients keep local collections; AnkiWeb remains online-only | Web, iOS, and Android write card and review changes locally first; sign-in, initial hydration, sync, AI, and uncached media need a connection | **Either**, after testing your exact devices and media |
| You want a Home Screen widget | [AnkiDroid](https://github.com/ankidroid/Anki-Android) has deck and card-count widgets; AnkiMobile on iPhone and iPad has none, and users [still ask for one](https://forums.ankiweb.net/t/ankimobile-widget/32633) | Free Review widgets for iPhone, iPad, Mac, and Android show the due count and your next card's question; a tap opens Review | **Nibomo** on Apple devices; **either** on Android |
| You rely on templates, add-ons, or shared decks | Deep official workflows and a large community ecosystem | Focused front/back workflow; no equivalent add-on or shared-deck ecosystem | **Anki** |
| You want built-in AI and agent access | Possible through third-party add-ons and integrations | AI chat with workspace context and files, plus MCP and a public Agent API | **Nibomo** |
| You want to control the server | Official self-hosted server replaces collection and media sync | Documented AWS deployment covers web, auth, backend, sync, AI worker, and infrastructure | Depends whether you need **sync only** or the **whole stack** |
| You want source for the complete client-and-service stack | Desktop Anki and the sync server are public; AnkiDroid is a separate public project; the complete AnkiMobile and AnkiWeb source is not public | Web, iOS, Android, auth, backend, sync, agent surfaces, and infrastructure are MIT-licensed in one repository | **Nibomo** |

The safest answer for a serious existing Anki user is usually to stay. Nibomo becomes a sensible trial when one of its different boundaries solves a real problem—not merely because its interface is newer.

## Anki's maturity is part of the product

The [current Anki desktop release is 26.08.1](https://apps.ankiweb.net/), available for Windows, macOS, and Linux. The same official page links the paid official AnkiMobile client for iPhone and iPad and the free, contributor-built AnkiDroid client for Android. AnkiWeb provides browser study and synchronization between those local clients.

More important than the release number is everything accumulated around the collection format. Anki has:

- note types that can generate several cards from one note;
- editable HTML/CSS [card templates](https://docs.ankiweb.net/templates/intro.html);
- an official [add-on system](https://docs.ankiweb.net/addons.html), with the usual maintenance risk that an Anki update can break an add-on;
- public [shared decks](https://docs.ankiweb.net/getting-started.html#shared-decks);
- established import, export, backup, statistics, and troubleshooting workflows.

Its [packaged exports](https://docs.ankiweb.net/exporting.html) also carry more structure than a plain card list. A `.colpkg` can contain the entire collection, including all decks and scheduling information, with media as an export option. An `.apkg` can contain a deck's cards, notes, and note types, plus optional scheduling information, deck presets, and media. That is useful for backup, device transfer, and migration to software that understands Anki packages.

Nibomo does not match this depth. It has [released web, iOS, and Android clients](https://github.com/kirill-markin/flashcards-open-source-app#available-on), but no native Windows, macOS, or Linux client, comparable add-on catalog, shared-deck ecosystem, template engine, or one-click Anki package importer. If any of those holds your study workflow together, changing apps would remove working capability.

## Both use FSRS, but your scheduler state will not move

FSRS is not a reason by itself to leave Anki. Anki's [FSRS settings](https://docs.ankiweb.net/deck-options.html#fsrs) can optimize parameters from your review history, set desired retention, and apply different presets to different decks. It is a mature, configurable FSRS implementation.

Nibomo also uses FSRS rather than a fixed interval or ease-factor scheduler. The current implementation keeps the familiar Again, Hard, Good, and Easy ratings and mirrors FSRS-6 behavior across its backend, iOS, and Android clients; the web review flow reuses the backend scheduler module. Workspace settings cover desired retention, learning and relearning steps, maximum interval, and fuzz, but the FSRS weights are pinned rather than optimized from your review history. Those settings are forward-only: a change affects future reviews without recomputing existing card state. The [scheduling documentation](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) describes the exact state and cross-platform parity rules.

These are two capable FSRS implementations, not one shared schedule. Nibomo cannot ingest Anki review events, stability, difficulty, due dates, or optimized parameters. Imported card content starts a new scheduling history. If your current Anki queue has years of useful signal, that loss matters more than the fact that both apps say “FSRS.”

## Offline behavior has two different shapes

Anki's installed clients keep a collection on the device. You can review and make ordinary edits offline, then use [AnkiWeb sync](https://docs.ankiweb.net/syncing.html) after reconnecting. Reviews and note edits normally merge across devices; note-type and template changes can require a one-way sync. AnkiWeb itself is an online browser service, not an offline web app. The detailed [Anki offline guide](/blog/does-anki-work-offline/) covers media preparation and conflict handling.

Nibomo is offline-first across its clients. The [architecture](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/architecture.md#offline-first-sync) uses IndexedDB on the web and SQLite on iOS; the [Android app uses Room over SQLite](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md#platform-baseline). A card edit or review is written locally, queued in an outbox, and pushed when the network returns. Review events are append-only, while current card, deck, and workspace-settings state uses last-writer-wins metadata. Media metadata syncs separately from the file bytes, which move through client upload and download queues.

Offline-first does not mean that every feature is offline. AI calls, sign-in, initial hydration, and synchronization need network services. Each client needs the relevant workspace data before it disconnects, and media works offline only after that client has cached the file bytes. Whichever app you choose, rehearse the exact phone or laptop in airplane mode before relying on it for travel.

## Creation is where the workflows really diverge

Anki gives you control close to the card format. Fields, note types, templates, imports, and add-ons can support highly specific workflows. That flexibility is difficult to replace if you use cloze variants, custom styling, language tooling, media-heavy notes, or automation built around the Anki collection.

Nibomo keeps a narrower card model and puts more automation inside the product. The [hosted app](/docs/getting-started/) includes AI chat with workspace context and file attachments. You can ask it to draft or rewrite cards. That is useful for turning text, CSV, or an Anki `.apkg` into editable front/back cards, but it is not a format-preserving import.

The other released difference is machine access. Nibomo exposes an [Agent API](/docs/api/) and an MCP connector for tools such as Claude Code and Codex. Agents can authenticate, select a workspace, query the published data surface, and create or edit cards. If your workflow starts in a terminal or an AI agent, this is a first-class path rather than an add-on layered onto the desktop app.

That convenience has a network boundary too. Hosted AI depends on the hosted services, and a self-hosted operator must configure the model provider and run the production chat worker. The quick local Docker setup does not provide the complete AI path.

## “Open source” and “self-hosted” need a boundary

Anki is open source, but not every Anki surface has the same source model. The [desktop repository](https://github.com/ankitects/anki) is licensed primarily under [AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/main/LICENSE) with listed exceptions. [AnkiDroid](https://github.com/ankidroid/Anki-Android) is a separate open-source Android project. Anki's maintainer has confirmed that the complete [AnkiMobile](https://forums.ankiweb.net/t/hide-unhide-decks-poll/44281/20) iOS app and [AnkiWeb](https://forums.ankiweb.net/t/questions-about-https-ankiweb-net-decks-and-https-ankiuser-net-study/33292/2) service are not public source.

Anki's official [self-hosted sync server](https://docs.ankiweb.net/sync-server.html) stores and synchronizes collection and media data for compatible clients. It does not deploy the AnkiWeb browser interface, account site, or shared-deck and add-on directories. That narrow scope can be an advantage: if all you need is private sync between mature clients, there is less infrastructure to operate. The server still needs compatible versions, backups, credentials, and encryption in front of its default HTTP listener.

The shorter [Anki open-source boundary guide](/blog/is-anki-open-source/) covers each client without repeating the full license map here.

Nibomo publishes a broader boundary. Its [MIT-licensed repository](https://github.com/kirill-markin/flashcards-open-source-app) contains the web app, iOS and Android clients, auth, backend, sync, MCP and agent surfaces, and AWS infrastructure. You can inspect and change the system as a whole.

Whole-stack self-hosting also means whole-stack operations. The supported [production self-hosting path](/docs/self-hosting/) uses AWS CDK with RDS, Cognito, API Gateway, Lambda, S3, CloudFront, Cloudflare configuration, email delivery, monitoring, and backups. It is not a vendor-neutral one-command deployment. You maintain cloud costs, secrets, upgrades, migrations, restore tests, and any native apps you build and distribute. Docker Compose is for local development, not production.

So the self-hosting decision is not simply “Nibomo can, Anki cannot.” Anki offers a smaller self-hosted sync component around mature local clients. Nibomo offers a larger deployable product stack with a much larger operator surface.

## Data control is not the same as migration fidelity

Nibomo can export and import its own [portable `flashcards.zip` workspace package](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/apps/backend/src/workspacePackages). Its `cards.json` contains the selected cards' front and back text, card type, tags, and package or card-source metadata; the ZIP also contains media referenced by those cards. It does **not** preserve the original card IDs, review history, FSRS state, workspace settings, deck structures, or account data. A self-hosted operator needs database and media backups for disaster recovery.

Anki's full collection export is more complete at the user level. This is an important counterweight to Nibomo's broader source repository: readable source and deployable infrastructure do not automatically produce a more faithful personal-data export.

Moving from Anki to Nibomo is currently a content transfer through AI chat:

1. Export the deck from Anki as `.apkg` with **Support older Anki versions** ticked. Nibomo gives the AI the list of media file names only for that older format. The test package was an older-format file built with a script, not an Anki export.
2. Attach the file in Nibomo AI chat and ask it to turn the deck into cards. Each file can be up to 30 MB.
3. The AI reads the package and saves the cards directly; in the test there was no draft or confirmation step.
4. Compare card counts, fronts, backs, tags, and images with Anki. Check images in particular.

In a test with a small sample deck, basic cards, tags, and an image came through. Each basic-and-reversed note became two one-way cards, cloze notes became question-and-answer cards, and subdecks became flat Nibomo decks. Review history, due dates, FSRS memory, note types, template HTML/CSS, and add-on behavior don't transfer. The [`.apkg` import guide](/blog/import-anki-apkg/) shows the whole run. The older [TXT migration guide](/blog/migrate-from-anki-txt-export-open-source-flashcards/) still works for text-only decks. If your review history has to move too, see the [broader Anki alternatives comparison](/blog/best-anki-alternatives/) instead.

## Run a low-risk representative-deck trial

Do not migrate your whole profile to find out whether the new review screen feels comfortable. Test the hardest normal slice of your real workflow while Anki remains the source of truth.

1. **Back up Anki first.** Export a full `.colpkg` with scheduling information and media, then keep it somewhere outside the active profile.
2. **Choose one representative deck.** Include the card types, tags, cloze behavior, images, audio, formulas, and review history that would expose a bad migration.
3. **Export the deck as `.apkg`.** That file is both your Anki-native copy and what you attach in Nibomo's AI chat.
4. **Check the result, don't assume it.** Compare card counts, fronts, backs, tags, formatting, and images with Anki.
5. **Assume the queue restarts.** Check that a fresh FSRS history is acceptable for this material. Do not expect answers in one app to update the other.
6. **Test the released surfaces you will use.** Review and edit on web, iOS, or Android, take a device offline, reconnect, and confirm the changes and media arrive where expected.
7. **Keep both systems until the constraint is proven.** A successful import is not proof that the daily review, sync, export, and recovery workflow fits you.

The trial may end with two tools: established decks stay in Anki, while a new subject starts in Nibomo. That is a cleaner result than forcing a complete switch.

## Who should use Anki?

Choose Anki if you:

- already trust its review queue and do not want to reset scheduling history;
- depend on custom note types, templates, add-ons, shared decks, or exact media behavior;
- want mature desktop tools, complete collection exports, and years of community documentation;
- want FSRS parameter optimization from your own review history;
- need a self-hosted sync server, but not a self-hosted browser app and backend stack.

For an exam or another high-stakes workflow already running well, staying with Anki is not resistance to change. It protects working study infrastructure.

## Who should try Nibomo?

Try Nibomo if you:

- are starting a new deck or have mostly simple front/back material;
- want one MIT-licensed repository covering web, iOS, Android, backend, auth, sync, and infrastructure;
- prefer offline-first local writes with automatic synchronization;
- want built-in AI that turns source files, including an Anki `.apkg`, into cards you can edit;
- want MCP or Agent API access from terminal and AI tools;
- accept AWS-based self-hosting work and the current gaps in migration and export fidelity.

You can start with the [hosted app](https://app.nibomo.com/), read [getting started](/docs/getting-started/), or inspect the [source](https://github.com/kirill-markin/flashcards-open-source-app). None of those requires moving an existing Anki collection.

## The practical answer

For most established users comparing **Anki vs Nibomo**, Anki should remain the main app. It has the stronger collection model, migration fidelity, customization surface, and ecosystem, while already offering FSRS and reliable offline clients.

Nibomo is a credible open source Anki alternative for a narrower group: people willing to start a fresh schedule in exchange for whole-stack source access, released web and native apps, offline-first sync, built-in AI, and agent workflows. Test that trade with one representative deck. If the limitation you wanted to escape actually disappears, expand from there.
