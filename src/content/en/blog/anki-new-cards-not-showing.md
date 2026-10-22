---
title: "Anki New Cards Not Showing? Trace the Daily Limits"
description: "Find why Anki shows new cards in Browse but none in study. Trace review caps, parent decks, Today only overrides, and the allowance already used."
date: "2026-10-22"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/982117c3f2eeb5c9ad9a23d913d5a9dc75ecf16bb6e3139dd3ab17ed8bf227e7.webp"
keywords:
  - "Anki new cards not showing"
  - "Anki new cards review limit"
  - "Anki Limits start from top"
  - "Anki Today only limit"
---

Four new cards were still there. A search found A, B, C, and D, with none buried or suspended. Yet Anki's scheduler offered **zero new cards and three reviews**, before any cards had been answered that day. The new-card limit was four. The review limit was three, and the three due reviews left no room for introductions under that cap.

That was one result from an automated demonstration using Anki 26.09.3. If your Anki new cards aren't showing, first check whether the cards are still new and available. Then trace the limits for the exact deck you select. Four cards in Browse doesn't promise four introductions today.

![A man checks a ground bolt on a closed bicycle-shed gate while four bicycles remain visible behind the slats](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/982117c3f2eeb5c9ad9a23d913d5a9dc75ecf16bb6e3139dd3ab17ed8bf227e7.webp)

## First, check what is actually new

In desktop Anki, open **Browse**, use **Cards** mode, and search the relevant deck tree. Replace `LimitLab` with your deck name:

```text
deck:LimitLab is:new
```

For a name with spaces, use `deck:"My Deck"`. The deck search includes subdecks. Count cards rather than notes: one note can produce several cards.

Then narrow the search:

```text
deck:LimitLab is:new -is:suspended -is:buried -deck:filtered
```

This excludes suspended cards, buried cards, and cards currently in filtered decks. The result gives you potential candidates, **not a forecast of today's study queue**. Anki documents these [card-state searches](https://docs.ankiweb.net/manual/searching#card-state).

If the count drops, inspect the excluded cards before touching a daily limit:

```text
deck:LimitLab is:new is:suspended
deck:LimitLab is:new is:buried
```

In two separate demonstration cases, suspending A or manually burying A left all four cards matching `is:new`. The narrower search found only B, C, and D; the scheduler offered three new cards. The [bury versus suspend guide](/blog/anki-bury-vs-suspend/) explains how to handle those states deliberately. Don't unsuspend everything just to increase the count.

If the broad search doesn't find an expected card, inspect its current deck and state. A card you've already answered may now be learning or review material. Calling it “new vocabulary” doesn't make it an Anki new card.

## Record the limits for the deck you actually study

Write down the full name of the deck you click to study. Open its **Options**, then inspect the relevant child and ancestor decks too. Keep these details together before editing anything:

| Record | What to capture |
| --- | --- |
| Study entry point | Exact selected deck and its position in the deck tree |
| Assigned preset | Its name and which other decks share it |
| New cards/day | Preset value, **This deck** override, and **Today only** override |
| Maximum reviews/day | The same three values |
| Already studied today | New introductions and reviews completed in the applicable decks |
| Collection-wide switches | **New cards ignore review limit** and **Limits start from top** |
| Candidate cards | Broad and narrowed search counts; any sibling or filtered-deck complications |

The three limit scopes are documented under [Per-Deck Daily Limits](https://docs.ankiweb.net/manual/deck-options#per-deck-daily-limits). An active **Today only** value takes precedence over **This deck**, which takes precedence over the preset. A preset showing four new cards therefore doesn't rule out a temporary zero on this deck.

The released [limit calculation](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/decks/limits.rs) also subtracts study already completed today. When new cards are subject to the review limit, introductions use that allowance too.

Both switches are collection-wide, marked **Global** in the released [daily-limit interface](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte). Cloning a preset won't isolate either switch.

## Compare your settings with these checked cases

These are observed scheduler-backend results. Desktop counters and mobile interfaces weren't tested. Each case started in a fresh disposable collection; changes in separate rows don't accumulate.

The baseline contained:

- Parent `LimitLab` and child `LimitLab::Biology`, with all seven cards in Biology.
- Four new Basic cards, A–D, from four separate notes, plus three due review cards, R1–R3.
- **4 new cards/day** and **20 maximum reviews/day** set through **This deck** on both decks. These overrode the shared preset's 20/200 defaults.
- Both collection-wide switches off, no temporary overrides, and nothing studied that day unless the case says otherwise.
- No add-ons, siblings, filtered cards, or learning cards at the start. `LimitLab` had no ancestor.

Each of the 11 cases ran with FSRS off and on: **22 fresh collections**, with the same new/review counts in both modes. Changing FSRS wasn't needed to explain these results.

### A review cap can leave no room for new cards

These cases selected Biology directly and changed its review limit to three:

| Case | New cards ignore review limit | New cards queued | Reviews queued |
| --- | --- | --- | --- |
| Three due reviews fill the three-card review allowance | Off | 0 | 3 |
| Same setup, with review-limit coupling disabled | On | 4 | 3 |

All four new cards passed the narrower search in both cases. With **New cards ignore review limit** off, the scheduler reserved the available review allowance for the three due reviews, leaving zero for new cards. Anki explains this setting under [New Cards Ignore Review Limit](https://docs.ankiweb.net/manual/deck-options#new-cards-ignore-review-limit).

Finishing those three reviews wouldn't create a new allowance under the unchanged cap: the completed reviews would count against today's limit. Raising only **New cards/day** wouldn't remove this blocker either.

The second row demonstrates what the switch controls; it isn't a default fix. If the review cap reflects the workload you want, zero introductions may be the intended result. Check your due reviews before deciding whether to admit more material.

### The parent can be the limiting deck

For these cases, the parent's new-card limit was zero and Biology's remained four. Review limits stayed at 20:

| Deck selected for study | Limits start from top | New cards queued | Reviews queued |
| --- | --- | --- | --- |
| `LimitLab` | Off | 0 | 3 |
| `LimitLab::Biology` | Off | 4 | 3 |
| `LimitLab::Biology` | On | 0 | 3 |

Selecting the parent applied its zero cap to the session. Selecting the child directly admitted four when **Limits start from top** was off. With that switch on, the parent's zero also applied during direct child study. See the manual's [ancestor-limit explanation](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top).

Choose the study entry point that matches your intended scope. If the parent is meant to cap all its children together, studying a child without that cap changes the plan. Inspect the parent's remaining allowance before changing a collection-wide switch.

### A Today only zero overrides a persistent four

These cases selected Biology directly, with its **This deck** new-card limit at four:

| Temporary new-card override | New cards queued | Reviews queued |
| --- | --- | --- |
| **Today only: 0** | 0 | 3 |
| Temporary override cleared; persistent four retained | 4 | 3 |

If your settings match the first row, changing the preset won't address the temporary zero. Clear or correct that specific override only if it no longer reflects today's plan. Save, then reopen Options to confirm the value and scope.

### Two per day means two introductions in total

For these cases, Biology's new-card limit started at two. The automation deliberately showed new cards before reviews, introduced A and then B, and answered each once with **Easy**. Both became future review cards, and the review log contained two answers. Only C and D still matched `is:new`.

| Daily new-card limit after those two introductions | New cards queued | Reviews queued |
| --- | --- | --- |
| 2 | 0 | 3 |
| Raised to 3 | 1: C | 3 |

Three meant one remaining introduction, not three extra cards. The Easy answers were a test method, not a grading recommendation. When checking what you've already studied, distinguish first introductions from repeated appearances during learning.

## Make one small change, then verify it

Use the matching case to name the blocker: “Today's zero override is active,” or “The parent's allowance is exhausted.” Decide whether that limit still serves your study plan. A correct zero needs no repair.

If a change is warranted, make it at the narrowest appropriate scope. A daily-limit correction for one deck can use **This deck**; a deliberate one-day exception can use **Today only**. The [preset guide](/blog/anki-deck-options-presets/) covers shared settings when more than one deck is involved.

Save, reopen Options, and compare the saved settings with your notes. Return to the **same selected deck** and check its study counts before answering more cards. When you next study normally, confirm that the expected introduction is offered. Answering cards during diagnosis changes the allowance you're measuring.

If new cards are available but the wrong ones appear first, use the [gather and sort guide](/blog/anki-new-card-order/). Diagnosing daily limits doesn't require resetting cards or changing their history. If the settings still don't explain zero, keep the search results, deck path, limits, client version, and study already completed when asking for help. Those details give someone a specific problem to investigate.

*Production and verification note: AI tools substantially wrote and edited this article and generated its illustration. Automated backend tests used released Anki 26.09.3 (Python package 26.9.3) on macOS 26.6.1, ARM64, with CPython 3.14.7, on October 22, 2026. These were 22 disposable demonstration collections, not Kirill's personal study history. There was no human review or desktop/mobile UI testing; interface placement and platform-specific behavior weren't verified.*
