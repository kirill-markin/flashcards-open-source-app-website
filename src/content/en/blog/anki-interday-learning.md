---
title: "Why Anki Interday Learning Uses Your Review Limit"
description: "See when an Anki learning step crosses into the next study day, how it uses the review limit, and what Interday learning/review order changes."
date: "2026-11-25"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c4bc780c1d61efcbe1bd4597c578fb97f3fd58b526fb7326729eb4c5ba7e46ff.webp"
keywords:
  - "Anki interday learning"
  - "Interday learning/review order"
  - "Anki review limit"
  - "intraday learning"
  - "Anki day boundary"
---

Two review slots, two ordinary reviews due, and Anki queued only one of them. A due interday learning card took the other slot, even with **Show after reviews** selected. Anki fills the available review slots with eligible interday steps first, then uses the remaining slots for ordinary reviews. **Interday learning/review order** arranges the cards that made it into the queue. [Anki’s review limit](https://docs.ankiweb.net/manual/deck-options#maximum-reviewsday), [released scheduler code](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/rslib/src/scheduler/queue/builder/gathering.rs)

![A baker lowers a loaf into a two-slot wooden crate. A blue-wrapped loaf fills the other slot, and a third loaf rests on the bench.](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c4bc780c1d61efcbe1bd4597c578fb97f3fd58b526fb7326729eb4c5ba7e46ff.webp)

## A ten-minute step can cross into the next study day

Say your Anki day starts at 4 a.m. An answer at 10 p.m. that schedules a ten-minute learning step puts the card on a timer. That’s *intraday learning*. Give the same answer a few minutes before 4 a.m. and the step can cross the rollover. Anki converts the delay to a day-based interval, and the card can be due as soon as the next study day starts. That’s *interday learning*. Midnight can pass within the same Anki day. Look up your own rollover under **Preferences → Review → Scheduler → Next day starts at**. [Anki’s day boundaries](https://docs.ankiweb.net/manual/deck-options#day-boundaries), [Anki’s scheduler preferences](https://docs.ankiweb.net/manual/preferences#scheduler)

The rule also applies to a relearning step after you press **Again** on a review. In four answer tests, the scheduler kept the step on a timer when the delay fit before the rollover and scheduled it for the next study day when the delay crossed it. The cards remained in learning or relearning. Once a card has finished its steps, its next due date is for an ordinary review. [Anki’s day boundaries](https://docs.ankiweb.net/manual/deck-options#day-boundaries), [Anki’s relearning steps](https://docs.ankiweb.net/manual/deck-options#relearning-steps)

## The same three cards with two or three review slots

For each run in the table, the deck started with one due interday learning step, **L**, and two ordinary reviews, **R1** and **R2**. R1 was due a day earlier than R2, so it came first under the default review sort. Each run used a fresh collection with one deck and no prior answers, new cards or siblings. The table shows the starting queue before the first answer. [Anki review sort order](/blog/anki-review-sort-order/)

| Interday learning/review order | Two review slots | Three review slots |
| --- | --- | --- |
| Show before reviews | L → R1 | L → R1 → R2 |
| Mix with reviews | R1 → L | R1 → L → R2 |
| Show after reviews | R1 → L | R1 → R2 → L |

With two slots, L and R1 made it into the queue in every run. Under **Show after reviews**, L appeared after the one review that fit, and R2 stayed due. With a third slot, R2 fit as well. The **Mix with reviews** row records the order observed in these runs. [Anki’s interday display order](https://docs.ankiweb.net/manual/deck-options#interday-learning/review-order)

If you have one review slot left and one eligible interday step, the step can take the whole allowance. In the one-slot test, an interday **relearning** step was the only card queued under **Show after reviews**. In the zero-slot test, the scheduler still queued a ready *same-day* learning step. Same-day steps can appear even after you use up your review allowance. [Released scheduler code](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/rslib/src/scheduler/queue/builder/gathering.rs)

## Check your remaining slots and the cards due

1. Open **Options → Display Order → Interday learning/review order** for the deck you clicked to study. If you clicked a parent deck, its display order applies across the session. The order comes from the assigned preset, so changing a shared preset affects other decks that use it. [Anki’s subdeck options](https://docs.ankiweb.net/manual/deck-options#subdecks), [Anki preset guide](/blog/anki-deck-options-presets/)
2. Under **Daily Limits → Maximum reviews/day**, check **This deck** and **Today only** for overrides. Count what’s left after any study in the current Anki day. If ten slots were available and you’ve used eight, use the two-slot column. When studying a parent deck, check its overall allowance and the individual subdeck limits. If **Limits start from top** is enabled, higher-level limits also apply when you select a subdeck. [Anki’s daily limits](https://docs.ankiweb.net/manual/deck-options#daily-limits)
3. In **Browse**, switch to **Cards** mode and search `deck:"Your Deck" is:learn is:due` with your deck’s name. This finds due learning and relearning candidates, including same-day steps. With zero slots, the test search returned both the same-day and interday steps. Only the same-day step appeared in the starting queue. [Anki’s card-state searches](https://docs.ankiweb.net/manual/searching#card-state)
4. To check a candidate, right-click the card, choose **Info**, and find the latest answer in the review history. Compare its date and time with your rollover and the step you remember choosing. If you picked a short learning step just before rollover and the history shows a one-day **Interval** on that answer, the scheduler recorded a day-based delay. The **Due** column alone displays dates for both kinds of step. [Anki’s Card Info guide](https://docs.ankiweb.net/manual/stats#card-info), [released Due column code](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/rslib/src/browser_table.rs#L499-L521)

New cards have their own display setting. If a due card is missing with room under the applicable limits, also check whether a sibling from the same note was queued ahead of it. [Anki’s new/review order](https://docs.ankiweb.net/manual/deck-options#new/review-order), [Anki sibling burying](/blog/anki-bury-siblings/)

*AI tools drafted this guide and ran eight starting-queue cases and four answer cases in disposable collections. The answer cases used **Good** on new cards and **Again** on reviews with delays on each side of rollover. All runs used the released Anki 26.09.4 backend with CPython 3.13.17 on ARM64 macOS 26.6.1. The Desktop instructions follow Anki’s manual and the released code. [Anki 26.09.4 release](https://github.com/ankitects/anki/releases/tag/26.09.4)*
