---
title: "Mochi FSRS: Switch Schedulers and Check Your Review Queue"
description: "Enable FSRS in Mochi, keep existing review history, and audit new, learned, and archived cards. Separate retention settings from new-card intake and cram mode."
date: "2026-10-04"
image: "/blog/mochi-fsrs.png"
keywords:
  - "Mochi FSRS"
  - "Mochi FSRS settings"
  - "Mochi target retention"
  - "Mochi new cards"
  - "Mochi review history"
---

A card can be visible in your Mochi deck and still have no place in today's scheduled reviews. It might be new, scheduled for later, or archived. Switching the scheduler doesn't complete the learning phase for you. Before changing settings to find a missing card, check its state and the queue you're opening.

Mochi uses its own algorithm by default and offers FSRS as an alternative. The useful first experiment is small: record five existing cards, change one setting, then compare their state, history, and due dates separately.

This guide follows official documentation checked October 4, 2026. The worksheet and diagnosis exercises are suggested audits, not results from a hands-on app test. I am Kirill Markin, and I build [Nibomo](/).

![A cellist adjusts the brass weight on a wooden metronome while holding a well-worn cello](/blog/mochi-fsrs.png)

## Start with the card's state

Mochi separates learning from recall. Open a deck and choose **New cards** to work through material that hasn't entered regular study. Choose **Add to reviews** when you're comfortable enough to begin scheduled recall; choose **Again** when it needs another look. The enrollment action makes the card learned. [Mochi's learning and review guide](https://mochi.cards/docs/getting-started/reviewing-cards/)

**Due today** contains learned cards that are due, including overdue ones. You can open a particular deck and click **Review** to study its due material. A learned card with a future due date needn't appear today. [Mochi due-date documentation](https://mochi.cards/docs/reviewing/due-today/)

An archived card stays outside both ordinary queues while retaining its content and history. An archived deck excludes its cards and subdecks too. Check both levels when investigating a missing card. [Mochi archiving rules](https://mochi.cards/docs/reviewing/archiving/)

## Make a five-card record before switching

Choose real cards from your existing collection that cover the cases below. The geography prompts are illustrative; A–E are worksheet labels, not Mochi IDs. Don't reset or archive cards just to manufacture the sample. If a case doesn't exist in your collection, leave that row unused.

| Card | Before: state and queue | After switching, before reviewing | Deliberate next action |
| --- | --- | --- | --- |
| A — Name the largest ocean | New; ready to learn | Record actual state and queue | Use Add to reviews when ready |
| B — Explain latitude versus longitude | New; still unfamiliar | Record actual state and queue | Study the distinction; use Again for another look |
| C — Give the equator's latitude | Learned; due today | Record current due status, date if available, and history | Review normally if still due |
| D — Define an archipelago | Learned; future due date | Record current due status, date if available, and history | Follow its actual schedule |
| E — Describe delta formation | Learned, then archived | Record archive status and retained history | Leave archived if it belongs in reference material |

Keep two kinds of evidence beside the worksheet:

- **Current observation:** deck, new/learned state, card and deck archive status, queue membership, and observation time. Write down the current due date if your version exposes it. Otherwise record due/not due from the queue or due-status view, mark the date “not observed,” and note any view restrictions. A missing card alone doesn't establish that it isn't due.
- **Historical record:** the last ordinary review's date and result, with the due date and interval stored for that event. A native `.mochi` export preserves history; Markdown and CSV don't. [Mochi export formats](https://mochi.cards/docs/import-and-export/exporting/)

The [native format reference](https://mochi.cards/docs/import-and-export/mochi-format-reference/) defines due and interval fields inside review records. Those fields document what was recorded for a review. They don't document a current-date display in the app or prove that the last recorded due date still governs the card. Don't copy an old event's date into your current-observation column without checking it.

Record the scheduling algorithm and any displayed retention target, parameters, and daily new-card limit too. Keep a dated backup before experimenting. Mochi's [backup documentation](https://mochi.cards/docs/getting-started/backing-up/) distinguishes a user-directory snapshot, including settings, from a native collection export. Our [Mochi backup and restore guide](/blog/mochi-backup-restore/) covers that boundary and recovery.

The five rows let you check identities. “Three cards due” can't tell you whether the expected three are present.

## Enable FSRS with the other settings held steady

Open **Settings → Review Settings → Scheduling algorithm** and select **FSRS**. Existing learned cards use their history without a reset. This is an app-settings control; sampling one deck doesn't isolate the switch to that deck. [Mochi FSRS instructions](https://mochi.cards/docs/reviewing/fsrs/)

Keep the retention target and parameters steady; if starting FSRS for the first time, use its supplied defaults. **Target retention rate** is a recall-probability goal: raising it means more reviews. It doesn't guarantee your quiz score or recall on any particular attempt. Custom parameters are supported; Mochi has no built-in optimizer. [Mochi's retention guidance](https://mochi.cards/docs/reviewing/fsrs/)

Our [FSRS settings guide](/blog/fsrs-settings/) describes Anki's controls. Use Mochi's instructions for this change.

Fill in the after column **before answering cards**, using the same observation method as before. The docs don't establish exactly when current due dates recalculate. Record what you can observe; leave unavailable dates unknown. Separating this checkpoint from later answers makes any difference easier to investigate.

## Then observe one ordinary review session

Review due cards normally and enroll a ready new card through the learning workflow. Update the ledger after each action, noting the session mode and time. You don't need to review all five: D may still be scheduled for later, and E may belong in reference material.

Don't expect A and B to behave alike merely because both began as new. Readiness determines which one you enroll. **Limit new cards per day**, in Review Settings, caps the new-card queue separately from the retention target. Keep that limit steady too. **Resetting review history** returns a learned card to new status and isn't needed to enable FSRS. [Mochi new-card controls](https://mochi.cards/docs/reviewing/new-cards/)

You can select the Mochi algorithm again. That changes the scheduler; it doesn't undo later reviews. The documentation doesn't promise a rollback to your earlier due dates. [Mochi scheduler switching](https://mochi.cards/docs/reviewing/fsrs/)

## Try these diagnoses before touching parameters

These are hypothetical exercises. The named state explains each example, but a real missing card can have several restrictions at once.

**A is still new after you remembered it in Cram.** The session was extra practice. Cram responses don't change normal intervals or history, so that answer didn't enroll A. Use **Add to reviews** when ready. If A is also missing from New cards, investigate the daily cap and archive status. [Mochi Cram documentation](https://mochi.cards/docs/reviewing/cramming/)

**D has earlier reviews but isn't in Due today.** If its current due date is in the future, waiting is expected. History proves previous activity, not today's eligibility. If the date is unavailable, check current due status and other exclusions before deciding why it's absent. For extra practice now, our [custom views and Cram guide](/blog/mochi-custom-views-cram/) covers selecting a subset.

**E keeps its history but appears in neither queue.** Its archived state explains the exclusion. Check whether that was intentional. If you want regular reviews again, inspect the deck's archive status too; changing only the card may leave a deck-level exclusion in place.

**C is missing from the deck view you're inspecting.** Check filters, search, and subdeck scope before concluding that it disappeared. Visibility in a saved view and eligibility for scheduled review are different observations. A corrected filter may reveal C while another condition still excludes it from a queue. [Mochi custom-view documentation](https://mochi.cards/docs/decks/custom-views/)

## Give the binary grades a clear question

FSRS keeps Mochi's **Remembered / Forgot** buttons, mapped to Good and Again. [Mochi grading guidance](https://mochi.cards/docs/reviewing/fsrs/)

Suppose a card asks for all four cardinal directions and you produce three. Decide the required answer before revealing it, rather than negotiating a pass afterward. Better still, split a troublesome multi-part prompt into smaller questions, such as “Which cardinal direction is opposite east?” That makes the recall decision easier to judge consistently.

If the five cards behave as their recorded states explain, continue ordinary study and keep the ledger for the next session. Five cards can check the workflow; they can't establish a long-term retention improvement. If one behaves unexpectedly, capture its state, observed dates, view, and session mode for a useful problem report. For the broader product decision, see the [Mochi comparison](/blog/mochi-alternative/).
