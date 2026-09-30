---
title: "RemNote Cards Not Showing: Find New Cards Before Resetting Anything"
description: "Find missing RemNote practice cards by checking the new-card queue, document priority, and disabled cards, then trace one example before changing a whole deck."
date: "2026-09-30"
image: "/blog/remnote-cards-not-showing.png"
keywords:
  - "RemNote cards not showing"
  - "RemNote new cards not appearing"
  - "RemNote Learn New Cards"
  - "RemNote Need to Learn queue"
  - "RemNote paused cards"
---

Your cards are visible in RemNote's notes, but the questions you expected never turn up during practice. Before importing them again or resetting a deck, pick one missing question and trace it from its source document to the session you opened.

For new imported, shared, or AI-generated cards, check **Learn New Cards** first. RemNote holds these separately until their first practice. Cards you write yourself ordinarily enter the schedule when created; exam scheduling can change that workflow. [RemNote's new-card guide](https://help.remnote.com/en/articles/16213222-managing-new-cards) explains the usual distinction.

The useful result is a reason for one question's absence. Once you have that, you can decide whether the rest of the material needs the same fix.

![A stage manager invites one performer from the wings onto a wooden rehearsal stage while another waits behind](/blog/remnote-cards-not-showing.png)

## Start with one identifiable question

Choose a prompt you recognize and locate its source. “My biology cards” is too broad for this check; “the membrane question in Tuesday's lecture document” is useful. If a note contains several questions or directions, identify the particular one you're missing.

Keep this first inspection read-only. Reimporting the material, moving a whole folder, or rating unfamiliar cards just to change a counter makes it harder to work out what happened.

Copy this worksheet into a temporary note. Use a private identifier for the question if you might later share the record.

| Record | What to write down |
| --- | --- |
| Card and origin | Short identifier; manually written, imported, shared, or AI-generated; any previous review history |
| Source | Exact document and parent path; where you were trying to study it |
| Preview | Whether the intended question and answer exist as a card |
| Enablement | Card control's state; any disabled ancestor you find |
| Priority | Document setting and other known placements of the same card |
| Waiting or due | Labels or dates actually displayed; “unknown” where needed |
| Session | Exact entry point, scope, mode, and filters |
| Observation | One change made; whether this question appeared during real practice |

A total increasing somewhere on the screen doesn't establish that your question is available in the intended session. Keep following the same example through the checks below.

## Find the new-card entry point

New-card counts are separate from due-review counts. A document's regular spaced-repetition practice starts with due cards and reaches new ones afterward. To begin with fresh material, open the arrow beside the card counter and choose **Learn New Cards**. A folder's **Learn New** banner appears only when it is **Currently Studying**. [Official instructions](https://help.remnote.com/en/articles/16213222-managing-new-cards).

If you arrived here looking for RemNote's “Need to Learn” queue, record your screen's actual label and use the documented entry point above. A small daily review count alone doesn't mean your import failed.

For an upcoming exam, check **Learn New Content** on the Flashcard Home. It can include manually created cards spread out by the exam scheduler, alongside imported and AI-generated material. **Due Reviews** is the daily review area. [RemNote's Flashcard Home guide](https://help.remnote.com/en/articles/7925835-the-flashcard-home).

Already reviewed these cards in Anki? Preserve that distinction in your record. The general new-card rule doesn't settle how a particular imported review history and schedule will behave. Use the [Anki-to-RemNote migration checks](/blog/anki-to-remnote/) before treating established cards as unseen material.

## Check enablement, then priority

Click the card's arrow to open its preview and inspect **Enable Cards**. Disabled cards remain in notes but are excluded from study. An ancestor's **Disable Descendant Cards** setting cannot be overridden by enabling its child individually. [Enablement instructions](https://help.remnote.com/en/articles/7950982-setting-priorities-and-disabling-flashcards).

To inspect document priority, find the document in Flashcard Home and open **… → Priority**. [Document controls](https://help.remnote.com/en/articles/7925835-the-flashcard-home).

An effectively **Paused** card stays out of normal queues, with an exception for explicitly practicing the paused document itself. Its scheduling clock keeps running. The label on one document isn't always decisive: hierarchy and other placements, including portals and sources, can change effective priority. [Priority rules](https://help.remnote.com/en/articles/7950982-setting-priorities-and-disabling-flashcards).

Before changing an ancestor setting, consider its scope. If it covers a semester's notes and you want one lesson today, releasing the whole semester is a larger change than this investigation needs. Record the cause first, then choose which material you intend to restore.

If the preview contains the wrong question or an oversized answer, repair that before studying. The [RemNote multi-line card guide](/blog/remnote-multi-line-cards/) helps separate a list, a set, and independent questions.

## Check what the session includes

Open **Flashcards → Cards** to inspect the Cards Table. Its **Practice with Spaced Repetition** option uses due cards from your filtered selection. **Practice All Flashcards** includes cards that aren't due; with answer recording on, your performance affects scheduling. For document or folder previews without changing review history, use **Practice Without Recording Answer Choices**. [Practice-mode documentation](https://help.remnote.com/en/articles/6904503-practicing-specific-flashcards).

Record which mode you used. Finding a question during a preview doesn't prove it was due today, and a preview isn't evidence that you've introduced it into scheduled learning.

For a document assembled through portals, check what's expanded: only visible portal cards join that document's practice queue. [Portal practice behavior](https://help.remnote.com/en/articles/6904503-practicing-specific-flashcards). Start from the original source document when untangling a complicated arrangement, and keep the destination session in your worksheet so you can return to the original problem.

## Three missing cards, three different next steps

Suppose you've added biology material and can't find three questions during daily practice. This is a hypothetical worksheet, not a report from a RemNote test account.

| Question | Recorded observation | Next action |
| --- | --- | --- |
| A: membrane definition | AI-generated, enabled, waiting to be learned | Open Learn New Cards for a genuine first attempt |
| B: transport comparison | Enable Cards is unchecked; no ancestor block found | Enable it if still wanted, then check its waiting or due state |
| C: diffusion example | Previously reviewed in RemNote; due date is next week | Leave its schedule alone if today's goal is due reviews |

Each row gives you something specific to do. B still needs a scheduling check after its immediate obstacle is removed. C doesn't require a repair. A bulk reset would lose these distinctions.

For A, suppose you want to learn just the membrane material today. Review the questions for clarity, then attempt that small set with answer recording on. Rate what you actually recall. In the worksheet, record whether the missing prompt appeared and which session showed it. Stop after your intended material; emptying the entire waiting queue isn't the goal.

## If the result still doesn't fit

Keep the unresolved worksheet and send a concise report to RemNote support. Replace private study material with neutral identifiers:

```text
Device/app version:
Card origin and previous review history:
Source document and parent structure (anonymized):
Preview and enablement observations:
Document priorities / ancestor settings:
Displayed waiting or due status:
Exact practice entry point, mode, and filters:
Expected result:
Observed result:
One change tried and its result:
```

Include a cropped, redacted screenshot if it clarifies the controls. A reproducible mismatch for one question gives support a clearer starting point than “some of my cards never appear.”
