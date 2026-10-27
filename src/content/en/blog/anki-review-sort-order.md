---
title: "Anki Review Sort Order: Due Dates, Intervals, and FSRS"
description: "Predict Anki review order from due dates and intervals, see how limits change the selected cards, and distinguish FSRS retrievability from relative overdueness."
date: "2026-10-27"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/90dedb66991db5fe5bc0a4fb4be558892de55c4f8ae1fe36acfbbffc0f086326.webp"
keywords:
  - "Anki review sort order"
  - "Anki review order"
  - "ascending retrievability"
  - "relative overdueness"
  - "Anki ascending intervals"
---

A card that's ten days overdue can appear after one that's only two days overdue in Anki. Give the first an 80-day interval and the second a two-day interval: **Relative overdueness** puts the second first under SM-2. **Due date, then random** puts the ten-day-overdue card first. Both results follow the chosen setting.

To change Anki review order, open **Options → Display Order → Review sort order** for the deck you select to study. Due dates, intervals, and FSRS retrievability measure different things. With a daily review limit, the setting can also change which due cards enter today's queue.

The examples below use ordinary desktop decks and released [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3), checked on October 27, 2026. The calculations were checked separately; no Anki application or complete scheduler session was run.

![A mechanic checks a narrow bicycle tire beside a broader tire in a workshop](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/90dedb66991db5fe5bc0a4fb4be558892de55c4f8ae1fe36acfbbffc0f086326.webp)

## Pick the quantity you want to sort by

Start with the result you're trying to get:

| What should come first? | Review sort order | What it compares |
| --- | --- | --- |
| The oldest due date | Due date, then random | Stored due dates; ties are randomized |
| The shortest scheduled interval | Ascending intervals | Intervals, from shortest to longest |
| The longest scheduled interval | Descending intervals | Intervals, from longest to shortest |
| The greatest lateness relative to its interval, under SM-2 | Relative overdueness | Overdue time in relation to interval length |
| The lowest estimated probability of recall, with FSRS | Ascending retrievability | Current estimated retrievability |

These labels and comparisons come from the released [review-order choices](https://github.com/ankitects/anki/blob/29bb700b951e3f0c0cb69b77c0180fc1fe33e6ba/ts/routes/deck-options/choices.ts) and [ordering implementation](https://github.com/ankitects/anki/blob/29bb700b951e3f0c0cb69b77c0180fc1fe33e6ba/rslib/src/storage/card/mod.rs). None of these quantities is simply “the order I added the cards.”

In Anki, **Ascending intervals** means shortest interval first among eligible reviews. It doesn't mean oldest due date first, and it doesn't bring future reviews into an ordinary deck's due queue. For cards you haven't introduced yet, use the separate [new-card gather and sort settings](/blog/anki-new-card-order/).

## Follow six cards through four settings

Imagine a deck containing only the following cards. Today is collection day **100**; these numbers are day counters, so you can compare them without calendar dates.

| Card | Due day | Interval in days | Days overdue today |
| --- | --- | --- | --- |
| A | 90 | 80 | 10 |
| B | 98 | 2 | 2 |
| C | 100 | 1 | 0 |
| D | 99 | 5 | 1 |
| E | 96 | 25 | 4 |
| F | 101 | 3 | Not due yet |

Each is a review card from its own one-card Basic note. There are no siblings, new cards, learning or relearning cards, buried or suspended cards, or filtered decks. Nothing has been studied today. Begin with room for at least five reviews under every applicable daily limit.

Each row below starts from this same untouched deck. The sequences describe the first appearance of each due review card; any relearning repetitions after an answer fall outside the comparison.

F is excluded under every setting because its due day is tomorrow. The remaining five produce these sequences:

| Setting | Expected first review appearances |
| --- | --- |
| Due date, then random | A → E → B → D → C |
| Ascending intervals | C → B → D → E → A |
| Descending intervals | A → E → D → B → C |
| Relative overdueness, with SM-2 | B → D → E → A → C |

Read the first row as due days **90, 96, 98, 99, 100**. Read the second as intervals **1, 2, 5, 25, 80**. A leads the due-date row because it has waited longest past its due date, then moves to the end of ascending intervals because its interval is longest.

For the SM-2 relative-overdueness row, compare overdue days divided by interval, largest first:

- B: **2 / 2 = 1**
- D: **1 / 5 = 0.20**
- E: **4 / 25 = 0.16**
- A: **10 / 80 = 0.125**
- C: **0 / 1 = 0**

B is a whole interval late. A has waited longer in calendar days, but its delay is a smaller fraction of its much longer interval. This ratio explains the order for these unequal values. The released SM-2 calculation includes a small adjustment, so don't use this simplified arithmetic to predict exact ties.

Anki also adds a randomized tie-breaker. The due dates, intervals, and relative-overdueness scores in these comparisons have no ties, so that tie-breaker doesn't affect the sequences shown.

## A three-review limit changes the selected cards

Return to the untouched deck and leave an effective allowance of **three reviews**. There are still no learning cards consuming that allowance.

| Setting | Three admitted review cards, in order | Due cards left outside this set |
| --- | --- | --- |
| Due date, then random | A → E → B | C, D |
| Ascending intervals | C → B → D | A, E |
| Descending intervals | A → E → D | B, C |
| Relative overdueness, with SM-2 | B → D → E | A, C |

The difference now includes selection. Anki works through due candidates in the configured order and admits them while deck and parent limits allow. Its released [gathering code](https://github.com/ankitects/anki/blob/29bb700b951e3f0c0cb69b77c0180fc1fe33e6ba/rslib/src/scheduler/queue/builder/gathering.rs) applies those limits as it gathers cards.

With ascending intervals, A doesn't fit today's three places. Switching to descending intervals admits A and leaves B outside instead. Neither change alters A's stored due date or interval just by selecting the sort option.

In a deck tree, a subdeck's remaining limit can exclude a candidate even while the selected parent's total still has room. Today's configured maximum also isn't necessarily today's remaining allowance: account for study already completed and any **This deck** or **Today only** overrides. Interday learning cards use the review allowance before ordinary reviews are gathered, so a limit of three needn't leave three places for ordinary reviews in a real collection.

## FSRS retrievability needs a separate example

Retrievability is the estimated probability that you can recall a card now. A due date and interval alone aren't enough to calculate its actual FSRS retrievability: the calculation also uses stored memory data and elapsed time. **Ascending retrievability** places lower estimates first. Difficulty is a different measure; “difficult” and “least likely to be recalled right now” aren't interchangeable.

Anki 26.09.3 offers both **Relative overdueness** and **Ascending retrievability** with FSRS enabled. They compare different values: ascending retrievability uses the raw recall estimate, while relative overdueness also accounts for the card's stored desired retention.

When retention targets differ, the two settings can produce opposite orders.

For a separate calculation, suppose P and Q are eligible, due review cards with valid FSRS memory data yielding these supplied estimates. Both have a stored decay value of **−0.5**:

| Card | Current retrievability | Stored desired retention |
| --- | --- | --- |
| P | 82% | 85% |
| Q | 86% | 95% |

**Ascending retrievability gives P → Q:** 82% is lower than 86%.

**FSRS Relative overdueness gives Q → P.** With the supplied decay of −0.5, the released score simplifies to `−(R² − 1) / (target² − 1)`. Here, `R` is current retrievability and `target` is stored desired retention, both as decimals. It gives approximately **−2.671 for Q** and **−1.181 for P**, sorted ascending. Q comes first despite its higher raw chance of recall because the comparison also accounts for its higher retention target.

This calculation follows the [released FSRS SQL functions](https://github.com/ankitects/anki/blob/29bb700b951e3f0c0cb69b77c0180fc1fe33e6ba/rslib/src/storage/sqlite.rs). The target comes from stored card data; don't assume an unsaved value in an Options dialog is already the value used for that card. Missing memory data has separate handling and falls outside this example.

The [current manual's review-sort section](https://docs.ankiweb.net/manual/deck-options#review-sort-order) says enabling FSRS removes Relative overdueness. The examples here follow the pinned 26.09.3 release, whose menu choices and implementation include both settings.

P and Q aren't conversions of the earlier SM-2 ledger. Their retrievability estimates are supplied inputs. The two examples demonstrate different comparisons; neither identifies a universal best review sort order.

## Check the deck you actually click

When you study a parent deck, its display-order settings control the session, including reviews drawn from subdecks. Editing a child's Review sort order won't control a session started from its parent. For example, if `Languages` uses Ascending intervals and `Languages::Spanish` uses Due date, then random, clicking `Languages` uses Ascending intervals for those Spanish reviews too. Anki documents this [selected-deck rule](https://docs.ankiweb.net/manual/deck-options#display-order).

Before saving a change, check the assigned preset and which other decks share it. Review sort order is a preset setting. If only one deck should change, [clone and assign a separate preset](/blog/anki-deck-options-presets/) before editing that setting. Daily-limit overrides have their own scope.

If the next card still surprises you, record these details together:

| Check | What it can explain |
| --- | --- |
| Selected study deck, preset, Review sort order, and FSRS state | Which comparison controls the session |
| Card state, due date, interval, and available FSRS data | Whether your predicted order uses the right inputs |
| Remaining review allowance and applicable parent/subdeck limits | Why an otherwise due card wasn't admitted |
| Buried or suspended state and sibling-burying settings | Why an apparent candidate is unavailable |
| Learning/relearning appearances, Interday learning/review order, and New/review order | Why another category interrupts the review sequence |

Learning and relearning cards have their own timing and mixing controls. A card that was a review before you answered Again can return as a relearning repetition. **New/review order** controls how new cards mix with reviews; it doesn't replace Review sort order. The manual separates these [display-order controls](https://docs.ankiweb.net/manual/deck-options#newreview-order).

Sibling burying can also remove a card when another card from the same note is gathered. Use the [bury and suspend checks](/blog/anki-bury-vs-suspend/) to distinguish that from a sort problem.

Compare the first appearances of ordinary review cards separately from learning repetitions. If the sequence still disagrees, save the card values, selected deck, saved settings, Anki version, relevant add-ons, and observed sequence together. Those details let you check a specific ordering decision instead of guessing from the total due count.

*This article was drafted and edited with AI assistance, and its illustration was generated with AI. Its fictional ordering examples were checked with SQLite and Python against Anki 26.09.3's released ordering expressions. Those checks verify the example calculations, not an Anki application session or learning outcomes.*
