---
title: "Is RemNote Open Source in 2026? Code, Local Data, and Self-Hosting"
description: "RemNote's core app is not open source today. See what its public GitHub code covers, what local knowledge bases and exports control, and what you cannot self-host."
date: "2026-08-21"
image: "/blog/is-remnote-open-source.png"
keywords:
  - "RemNote open source"
  - "is RemNote open source"
  - "RemNote GitHub"
  - "RemNote self hosted"
  - "RemNote local knowledge base"
  - "RemNote export"
  - "open source RemNote alternative"
---

Is RemNote open source? **No—not the core app.** As of August 21, 2026, RemNote does not publish its core client or server as an open-source project under an open-source license.

RemNote does publish code on GitHub, and it offers useful forms of control through local-only knowledge bases, offline apps, backups, exports, plugins, and a local MCP server. None of those gives you a buildable copy of the complete product. Its promise to release all code if the company winds down is also conditional: it grants no source or self-hosting rights today.

**Facts checked:** August 21, 2026.

![A photographer handles a sealed vintage camera beside interchangeable lenses, negatives, archive envelopes, and a cable release in a darkroom](/blog/is-remnote-open-source.png)

## First, separate the seven kinds of control

The **RemNote open source** question gets confusing because several useful product properties can look like the same kind of control:

- **Free** describes price. RemNote has a [free plan](https://www.remnote.com/pricing), but software can be free to use and proprietary.
- **Offline** describes whether the app keeps working without a network connection.
- **Local** describes where a particular knowledge base or file is stored.
- **Exportable** means you can take out a copy of some or all of your data in documented formats.
- **Plugin-extensible** means developers can add behavior through an API.
- **Open source** means the relevant source is published under a license that grants rights to use, study, modify, and redistribute it.
- **Self-hostable** means there is a runnable deployment you can operate on infrastructure you control.

RemNote has the first five properties in meaningful forms. Its core product does not currently have the last two.

## RemNote's control boundary in one map

| Capability | What you control today | Where the boundary stops |
| --- | --- | --- |
| **Core application** | You can use the official web, desktop, and mobile apps. | The official client and server source are not currently published as an open-source project. |
| **Public GitHub code** | You can inspect public plugins, templates, themes, translations, support code, and forks. Some repositories have open-source licenses. | They do not provide the core RemNote client, hosted service, or a complete deployment. Public code without a confirmed license is not automatically open source. |
| **Local knowledge base** | On desktop, the knowledge base stays on your computer and does not pass through RemNote's servers. | It works through the proprietary desktop app, does not sync to another device, and optional integrations can have their own data flows. |
| **Offline use** | Desktop and mobile can edit notes and review cards after installation and login; desktop stores a complete local copy of media. | Offline mode does not provide source code. Web cold starts, uncached mobile/web media, most AI features, and plugins have offline limits. |
| **Local files and backups** | The desktop app keeps its working database, uploaded files, and local backups on disk. | Having recovery files does not provide a self-hosted RemNote application or sync server. |
| **Exports** | You can export native RemNote data, OPML, cards-only Anki packages, HTML, Markdown, and text. | No single export reproduces the product. Complete exports currently omit images and PDFs. |
| **Local MCP server** | A desktop AI agent can read the current knowledge base, or read and write it when you grant that mode. | RemNote must stay open; the connector does not expose the app's source, a server deployment, image contents, or the flashcard queue. |
| **Hosted sync** | Synced knowledge bases work across devices and receive cloud backups. | RemNote operates the service. There is no documented official self-hosted sync server. |
| **Wind-down promise** | RemNote says it will release all code if the company winds down. | The condition has not happened, so the promise is not a present open-source release or license. |

This map is more useful than a yes-or-no badge. A student protecting sensitive notes may care most about local storage. A developer auditing application behavior needs source. A self-hoster needs a deployable service, documentation, and an upgrade path. Solving one requirement does not solve the others.

## What the RemNote GitHub organization actually contains

The [official RemNote GitHub organization](https://github.com/remnoteio) currently lists 17 public repositories. They cover plugin templates, themes and snippets, a translation archive, plugins, updater or support code, and forks of supporting libraries. The [official plugins repository](https://github.com/remnoteio/remnote-official-plugins), for example, contains documented examples built with RemNote's plugin SDK.

That code is useful. It gives plugin authors examples, exposes part of the extension boundary, and lets the community improve tools around RemNote.

It does not expose the core application boundary. I found no official public repository there that lets you build the full desktop client, reproduce the hosted web app, deploy RemNote's sync service, or trace the complete server-side data path.

Licensing also varies. GitHub identifies MIT licenses for several projects, including the React plugin template and the gamepad plugin. It currently reports no detected license for `remnote-official-plugins`, the archived translation repository, and some other public repositories. That does not prove those projects can never be used under any terms, but it does mean you should not label every public RemNote repository open source. Check the actual repository and license before reusing code.

This conclusion is based on RemNote's current official public repositories and documentation. It is not a claim about the company's private code or internal systems.

## The wind-down promise is useful, but it is not a current license

In April 2023, RemNote published a three-part continuity commitment. Its [guaranteed access clause](https://help.remnote.com/en/articles/6085006-can-i-trust-you-ll-be-around-for-the-long-haul) says that if RemNote ever winds down, the company will release all code as an open-source project so people could run the desktop app or independently host RemNote.

The timing changes the meaning. The statement describes a future sequence:

1. RemNote must wind down.
2. The company would then release the code.
3. The community could work from that future release.

Until that condition occurs and code appears with an actual license, the promise is not source access. It does not let you audit today's core implementation, maintain a current fork, or deploy an officially released RemNote server.

The promise may still reduce one kind of long-term access risk. It just should not be described as “RemNote is open source.” This is a practical source and product-boundary review, not legal advice.

## A local knowledge base is a real privacy boundary

A [RemNote local knowledge base](https://help.remnote.com/en/articles/7867942-multiple-knowledge-bases) is desktop-only and stays on your computer's hard drive. RemNote says it never syncs to another device or passes through the company's servers. For work that must stay out of RemNote's cloud, this is meaningful control.

It comes with a practical tradeoff: the same knowledge base is unavailable on your phone, tablet, or another computer through RemNote sync. You also take responsibility for off-site backups. The feature gives you local data custody, not a private RemNote cloud.

The distinction is worth stating plainly:

> A local RemNote knowledge base can stay off RemNote's servers while still depending on proprietary RemNote software to open and edit it.

For synced knowledge bases, the [privacy documentation](https://help.remnote.com/en/articles/7974260-privacy-of-your-notes) describes a different boundary. RemNote says data is encrypted at rest and protected with TLS in transit, but it does not currently offer end-to-end encryption. Staff access to note contents is limited to explicit cases such as temporary support access or a copy you send to support.

Local storage is not a blanket promise that no feature can send data elsewhere. RemNote's AI features, plugins, and file-conversion integrations can introduce separate data flows. Review their settings and permissions even when the underlying knowledge base is local.

Privacy and source availability should be evaluated separately. Closed-source software can keep a local file off a vendor's server. Open-source software can still send data to a hosted service if that is how it is configured.

## Offline use gives resilience, not self-hosting

RemNote's [offline mode](https://help.remnote.com/en/articles/6752029-offline-mode) is stronger than a browser tab that simply fails when Wi-Fi disappears. After the apps are downloaded and the user has logged in, the desktop and mobile apps can edit notes and review flashcards offline for as long as needed. Changes to a synced knowledge base upload when the connection returns.

The desktop app has the widest offline boundary because it stores a complete local copy of images and PDFs. Mobile and web use limited caches, so older media may be unavailable. The web app can keep working if it was already open, but it cannot start from a closed or refreshed tab while offline. Most AI features and plugins are unavailable without a connection.

This makes the desktop app useful for travel, unstable internet, and local access to a complete media library. It does not create a RemNote server on your machine. When a synced knowledge base reconnects, it still syncs through RemNote's hosted service.

If your real question is whether RemNote's notes-first and PDF workflow justifies that boundary, the [RemNote alternatives comparison](/blog/remnote-alternative/) covers the product tradeoffs rather than repeating them here.

## Backups and exports solve two different problems

The [desktop app](https://help.remnote.com/en/articles/6030835-desktop-app) exposes a local storage location for each knowledge base. RemNote's [backup documentation](https://help.remnote.com/en/articles/6301627-remnote-backups) says this folder contains the working database, dated local backups, and uploaded files such as images, PDFs, and audio. Both synced and local knowledge bases generate local desktop backups. Synced knowledge bases also receive daily cloud backups when they change.

Those copies are mainly for recovery. Keep another backup away from the same disk if the knowledge base matters: a local database and its local backups can fail together with the drive.

A [RemNote export](https://help.remnote.com/en/articles/7898019-exporting-notes) addresses portability instead:

- **RemNote (Complete)** preserves the native structure for re-import into RemNote, but currently omits images and PDFs.
- **OPML** moves an outline into tools that understand the format.
- **Anki (.apkg)** exports flashcards only; bullets without cards are left out.
- **HTML, Markdown, and text** make note content readable in more places, with decreasing structure and formatting.

Before relying on a RemNote export as an exit plan, test it with a small but difficult document: nested bullets, references, flashcards, images, and a PDF. Open the result in the intended destination and check what survived. Downloading a file proves that export works; it does not prove that your full workflow can continue elsewhere.

## The local MCP server is an integration boundary

RemNote's [built-in MCP server](https://help.remnote.com/en/articles/16424066-connecting-ai-agents-to-remnote-with-mcp) lets a desktop AI client work with the knowledge base currently open in RemNote. You can grant read-only access or read-and-write access. Requests reach a local endpoint rather than passing through RemNote's servers.

There are deliberate limits. RemNote must remain open, the agent sees one current knowledge base, and the connector does not work through the RemNote web or mobile apps. It cannot access the flashcard queue or read the contents of images. The setup prompt contains an access token, so protect it like any other credential. Data an agent reads is also subject to that AI client's privacy policy.

This is useful local automation. It is not evidence that the RemNote app is open source, and it does not let an agent run RemNote without the proprietary desktop application. An API or connector exposes selected operations; source access exposes implementation. They solve different jobs.

## Can RemNote be self-hosted?

No supported **RemNote self-hosted** product appears in the current official documentation. RemNote does not document a complete self-hosted deployment or an official self-hosted sync server. The documented product paths are:

- a local-only desktop knowledge base with no cross-device sync;
- a synced knowledge base using RemNote's hosted service;
- the desktop app's local MCP endpoint for an AI client.

None is a self-hosted RemNote service. The local knowledge base gives up sync, MCP requires the running desktop app, and offline edits return to hosted sync when a synced knowledge base reconnects.

This is a documentation and product-boundary finding, not a claim about every service RemNote runs internally. A supported self-hosted edition would need official deployment instructions, server code or packages, licensing terms, an upgrade path, and a clear list of compatible clients. I found no such current offering in RemNote's official documentation or GitHub organization.

## Which kind of control do you actually need?

RemNote may still be the right choice when connected notes, backlinks, PDF reading, a native desktop app, and a mature study workflow matter more than core source access. For one desktop knowledge base that must stay off RemNote's servers, local-only mode is a concrete option. For ordinary multi-device study, hosted sync and offline apps may be the simpler trade.

Look for another product when your hard requirement is one of these:

- inspect or modify the complete client and server source now;
- deploy multi-device sync on infrastructure you operate;
- maintain a fork if the vendor changes direction;
- verify application behavior beyond documented interfaces;
- use end-to-end encryption for a synced knowledge base.

If you need an **open-source RemNote alternative**, decide whether the notes-and-PDF workspace or the flashcard system is the non-negotiable part. [Anki's source boundary](/blog/is-anki-open-source/) includes open desktop and Android clients plus a self-hosted sync server, but not every Anki surface is open. The [open-source flashcard apps guide](/blog/best-open-source-flashcard-apps-2026/) compares several other license and hosting boundaries. Neither automatically replaces RemNote's connected knowledge base.

## Disclosure: I build Flashcards

> **Disclosure:** I am Kirill Markin, and I build [Flashcards](https://flashcards-open-source-app.com/). Its MIT-licensed repository includes the web app, iOS and Android clients, authentication, backend, sync, MCP service, and AWS infrastructure. That is a broader current source boundary than RemNote provides, but it does not make Flashcards the better product for every study workflow.

Flashcards covers a narrower learning workflow. It has no connected note knowledge base, PDF reader, native desktop app, or direct RemNote importer. RemNote is more mature and much stronger when notes, references, and source documents are the center of study. Moving for the license alone can mean losing the workflow that made the collection useful.

Flashcards has a documented [whole-stack AWS self-hosting path](/docs/self-hosting/), but it is not a one-command local appliance. An operator owns AWS, Cloudflare, authentication, email delivery, monitoring, upgrades, database recovery, and separate native-app builds. Its [remote MCP connector](/docs/mcp-connector/) can reach cards and decks without keeping a desktop app open; RemNote's local connector reaches the current knowledge base but not the review queue. These are different product shapes, not a simple better-or-worse ladder.

If privacy matters more than branding, [private flashcards with AI](/blog/private-flashcards-with-ai/) offers a checklist for separating local storage, sync, AI-provider access, and self-hosting across a study workflow.

## The honest answer

Is RemNote open source in 2026? **No—not the core app.** Its official public repositories expose useful plugin, template, and supporting code. Local knowledge bases, offline use, local backups, exports, and MCP still provide meaningful control over data and workflows.

Those features do not grant current access to the complete application source, and RemNote does not document a supported self-hosted product or sync server. The promise to publish all code after a future wind-down is a continuity promise, not today's license.

Choose RemNote when its connected notes, PDFs, desktop app, and maturity justify that proprietary boundary. Choose an open-source alternative when present-day auditability, modification, redistribution, or operating the complete service yourself is the requirement you cannot trade away.
