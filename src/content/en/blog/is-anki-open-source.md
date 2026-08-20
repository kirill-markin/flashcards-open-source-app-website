---
title: "Is Anki Open Source in 2026? Desktop, AnkiMobile, AnkiDroid, and AnkiWeb"
description: "Desktop Anki and AnkiDroid are open source; AnkiMobile and AnkiWeb are not. Compare licenses, price, offline use, and the self-hosted sync server."
date: "2026-08-20"
image: "/blog/is-anki-open-source.png"
keywords:
  - "is Anki open source"
  - "Anki open source"
  - "Anki license"
  - "is AnkiMobile open source"
  - "is AnkiDroid open source"
  - "is AnkiWeb open source"
  - "self-host Anki"
  - "Anki sync server"
---

Is Anki open source? **Desktop Anki is, and AnkiDroid is too. The complete AnkiMobile app and the hosted AnkiWeb service are not.** Anki's public codebase also includes an official self-hosted sync server, but that server replaces synchronization only. It is not a deployable copy of AnkiWeb.

That mixed answer is easy to miss. Finding Anki on GitHub tells you about the computer application and its sync server; it does not make every product carrying the Anki name open source.

**Facts checked:** August 20, 2026.

![A boatbuilder inspects an exposed wooden hull beside a community-built rowboat, sealed tender, and small private transfer dock](/blog/is-anki-open-source.png)

## The useful answer, surface by surface

Open source, free of charge, offline, and self-hostable are four different properties. An app can be paid and work offline, or be free to use while its source stays private. Here is the 2026 map.

| Surface | Source and license | Price | Offline use | What you can self-host or control |
| --- | --- | --- | --- | --- |
| **Anki desktop** for Windows, macOS, and Linux | **Open source.** The main codebase is AGPL-3.0-or-later, with listed exceptions and bundled components under other licenses. | **Free.** | **Yes.** The collection, scheduling data, and downloaded media are local. | Build or modify the client. The same repository contains the official sync server. |
| **AnkiMobile** for iPhone and iPad | **Source not public.** The complete official iOS app is not open source. | **Paid.** The stated US price is a $25 one-time purchase; local App Store pricing and taxes vary. | **Yes.** Reviews work after the collection and required media are on the device. | You cannot rebuild the official app from published source, but it can connect to the official self-hosted sync server. |
| **AnkiDroid** for Android | **Open source.** Its repository lists GPL-3.0 for the main project, AGPL-3.0 for some backend code, and LGPL-3.0 for its API. | **Free.** | **Yes.** It keeps a local collection on the Android device. | Inspect, fork, and contribute to AnkiDroid; connect it to a compatible self-hosted sync server. |
| **AnkiWeb** | **Source not public.** Anki's maintainer has explicitly said AnkiWeb is not open source. | **Free.** | **No.** It is a hosted browser service. | There is no official package for deploying the complete AnkiWeb service yourself. |
| **Official Anki sync server** | **Open source.** Its code lives in the Anki repository under that repository's licensing. | **No software charge.** You provide and pay for the machine, storage, and network. | Not a study client. | Host collection and media sync for compatible clients. It provides no AnkiWeb browser interface. |

The [official Anki website](https://apps.ankiweb.net/) draws the product lines clearly: AnkiMobile is the official iOS app and its purchases fund Anki development, while AnkiDroid is free and developed by contributors. Shared formats and sync compatibility do not turn them into one codebase.

## What the Anki license lets you do

The [ankitects/anki repository](https://github.com/ankitects/anki) publishes the computer version's source. Its [license file](https://github.com/ankitects/anki/blob/main/LICENSE) identifies the main code as GNU Affero General Public License version 3 or later. It also lists BSD-licensed contributions and included components under other licenses.

You can read the covered code, build it, change it, and maintain a fork. The AGPL is a strong copyleft license rather than a permissive license such as MIT, so those freedoms come with conditions.

At a high level, distributing a modified covered version can trigger source-sharing requirements. The AGPL also adds a network clause: if users interact over a network with your modified covered program, they must be offered the corresponding source. The [Free Software Foundation's AGPL explanation](https://www.gnu.org/licenses/why-affero-gpl.html) gives the plain-language version. Running the unmodified desktop app, or making a private local change for yourself, is a different situation from distributing a fork or operating a modified service for other users.

This is a practical summary, not legal advice. If you plan to combine Anki code with proprietary software, distribute a modified build, or offer a modified network service, read the exact license and its listed exceptions and get appropriate legal guidance.

## The 2026 stewardship change does not close the desktop code

In February 2026, Damien Elmes [announced a gradual transition](https://forums.ankiweb.net/t/ankis-growing-up/68610) of Anki's business operations and open-source stewardship to the AnkiHub team. He described it as a step back rather than a departure and said he would remain involved. The announcement also said that governance, decision-making, and the transition timeline were still being worked out.

The public product commitments were more specific. In a [follow-up clarification](https://forums.ankiweb.net/t/ankis-growing-up/68610/110), Elmes wrote that the computer version and future releases would remain free and open source, ordinary syncing would stay free, and AnkiMobile would remain a $25 US one-time purchase.

So the accurate 2026 description is a gradual stewardship transition with a stated commitment to keep desktop Anki open source—not a completed handoff with every governance detail settled.

## AnkiMobile is official, paid, offline, and closed source

AnkiMobile is the official iPhone and iPad client. Its complete source is not public; Elmes has [explained directly why AnkiMobile is not open source](https://forums.ankiweb.net/t/hide-unhide-decks-poll/44281/20).

Its price is part of the wider project's funding model. The [official pricing FAQ](https://faqs.ankiweb.net/why-does-ankimobile-cost-more-than-a-typical-mobile-app.html) says AnkiMobile sales support work on the free computer version and online synchronization service. This is why “Anki is free” also needs a platform name attached: desktop Anki, AnkiDroid, and AnkiWeb are free to use; the official iOS app is paid.

Closed source does not mean online-only. AnkiMobile stores a local collection, works offline once the needed cards and media have arrived, and can use a custom sync server URL. Those are separate capabilities. The detailed [Anki offline guide](/blog/does-anki-work-offline/) covers media preparation and later sync.

What you cannot do is audit and rebuild the complete official iOS client, fix an iOS-specific issue in its public repository, or distribute your own fork of AnkiMobile from published source.

## AnkiDroid is open source and self-governed

AnkiDroid is not AnkiMobile rebuilt for Android. It is a separate Android project that works with Anki collections and sync. The official Anki site says it is developed by contributors; the AnkiDroid project describes itself as a semi-official port, and the 2026 transition announcement says it will remain self-governed.

The [AnkiDroid repository](https://github.com/ankidroid/Anki-Android) is public and accepts code and translation contributions. Its README lists the licenses by component: GPL-3.0 for the main project, AGPL-3.0 for some backend code, and LGPL-3.0 for the AnkiDroid API.

For a developer, the consequence is simple: Android changes go through the AnkiDroid project. They do not go into the AnkiMobile source, and not every Android component uses the desktop application's license.

## AnkiWeb is free to use, not open source

AnkiWeb provides hosted accounts, collection and media synchronization, and browser study. The wider hosted Anki site also has shared-deck and add-on directories. These public services are easy to blur together when someone says “AnkiWeb,” but none is reproduced by installing the official sync server.

The source boundary itself is unambiguous. In a direct reply about the browser client, Anki's maintainer said [AnkiWeb is not open source](https://forums.ankiweb.net/t/questions-about-https-ankiweb-net-decks-and-https-ankiuser-net-study/33292/2). There is no official deployment package for the complete service.

AnkiWeb is also not an offline web app. For offline study, use a prepared desktop or mobile client. Free access, public source, offline use, and self-hosting remain separate questions.

## What the self-hosted Anki sync server actually replaces

Anki provides an official [self-hosted sync server](https://docs.ankiweb.net/sync-server.html). You can run the server bundled with desktop Anki or install a smaller Python or Rust implementation without the desktop GUI dependencies. You define the users and passwords, choose the storage location, run the process, and point compatible clients at its URL.

It replaces the path that synchronizes collections and media between clients. It does **not** give you a private copy of the complete AnkiWeb product. You do not get:

- the AnkiWeb browser study interface;
- public shared-deck or add-on directories;
- AnkiWeb's signup and account-management website;
- a web administration product for a school or company.

That last point matters for teams. The manual describes the server as an advanced feature aimed at individual or family use. Users are configured on the server, and its maintainers say additions such as a REST API or external database support are unlikely to be accepted because simplicity is a design goal.

If your requirement is “keep desktop and mobile clients in sync through infrastructure I control,” this server fits. If your requirement is “deploy my own AnkiWeb,” it does not. There is no next installation step that turns the sync server into the hosted web application.

Self-hosting also moves operational work to you. The manual warns that newer clients may depend on sync protocol changes, so server and client versions need to stay compatible. The server listens over unencrypted HTTP by default; for remote access, the documented options include restricting it to a trusted network, using a VPN, or placing an HTTPS reverse proxy in front. You also own credentials, storage, backups, upgrades, and restore testing.

## Pick the codebase before you pick the issue

For developers, this small map prevents a lot of wasted searching:

- Desktop behavior, scheduling code, templates, and the official sync server live in the [ankitects/anki repository](https://github.com/ankitects/anki).
- Android-specific work belongs in the [AnkiDroid repository](https://github.com/ankidroid/Anki-Android).
- A desktop add-on may be easier to maintain than a permanent fork when the extension points already cover your change.
- There is no public complete AnkiMobile repository for an iOS-specific patch.
- There is no official open-source AnkiWeb deployment to fork.

Finding desktop Anki's source is the start of the map, not proof that an iOS screen or AnkiWeb page lives somewhere inside it.

## Which boundary matters for you?

For most learners, the mixed source model is not a reason to leave Anki. Its mature review workflows, add-ons, templates, documentation, and migration tooling may matter far more than source access for every surface.

For privacy-conscious learners, start with the smallest system that meets the need. One offline desktop collection requires no sync server. If several devices must sync through infrastructure you control, the official server is the narrower option. It gives you more control over synchronized data, along with responsibility for network security and recovery.

For self-hosters, test with one account before moving a real collection. Confirm every client can connect, put encryption in front of remote traffic, keep versions aligned, and prove that both collection and media data can be restored from backup.

For contributors, choose the surface first. Desktop and Android have public contribution paths. AnkiMobile and AnkiWeb do not expose their complete source for the same workflow.

## A note about Flashcards and whole-stack control

> **Disclosure:** I am Kirill Markin, and I build [Flashcards](https://flashcards-open-source-app.com/). Its [MIT-licensed repository](https://github.com/kirill-markin/flashcards-open-source-app) includes the web app, iOS and Android clients, authentication, backend, sync, and AWS infrastructure. That is a broader source and self-hosting boundary than Anki's sync-only server. Flashcards is also much younger and weaker in maturity, add-ons, and Anki migration fidelity, so it is not the default winner.

Flashcards has [documented whole-stack AWS self-hosting](/docs/self-hosting/), but it is not a one-command generic deployment. The operator owns AWS, Cloudflare, authentication, email delivery, database recovery, monitoring, upgrades, and the separate build and distribution of native apps. The [self-hosted Flashcards guide](/blog/self-hosted-open-source-flashcards-app-for-spaced-repetition/) gives the shorter product view, while [Anki vs Flashcards](/blog/anki-vs-flashcards-open-source-app/) covers the maturity and workflow tradeoffs.

If you want to compare more projects, the [open-source flashcard apps guide](/blog/best-open-source-flashcard-apps-2026/) applies the same license, offline, sync, migration, and self-hosting questions across several tools.

## The honest answer

Is Anki open source? **Desktop Anki and AnkiDroid are. AnkiMobile and AnkiWeb are not.** The official Anki sync server is open source and self-hostable, but it synchronizes collections and media; it does not reproduce the AnkiWeb website.

For a mature local study tool, desktop Anki remains the obvious open-source surface. For private multi-device sync, add the official sync server and accept the operational work. If you need to inspect, modify, and deploy every client and service in one product stack, Anki does not provide that complete boundary today.
