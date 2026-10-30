---
title: "Anki Retention Statistics: Read the Counts Before Changing FSRS"
description: "Reconcile Anki review counts, Answer Buttons, and retention with a verified eight-event example. Check scope and ratings before changing FSRS settings."
date: "2026-10-27"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/7d2f5b941e3fff567c40bd953326dae0d111028c5f671a124aafe362aa7489b5.webp"
keywords:
  - "Anki retention statistics"
  - "Anki true retention"
  - "Anki answer buttons"
  - "Anki review count"
  - "young vs mature cards"
---

Eight answers on four cards produced 62.5% successful answers and 66.7% retention in the same Anki backend experiment. Both numbers were correct: five of the eight answers succeeded, but only three records qualified for retention, and two of those passed.

When **Anki retention statistics** seem inconsistent, check the counts before changing FSRS. A learning retry can increase the answer count without entering the retention calculation. Two graphs can also use different dates or classify the same event differently.

The worked example below gives you all eight records, their counts, and a short audit for your own history. It uses synthetic inputs processed by released Anki code; it doesn't represent a person's study session or demonstrate how the scheduler normally produces reviews.

![A woman lifts a coarse sieve above a finer sieve and a pan of sand beside a river](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/7d2f5b941e3fff567c40bd953326dae0d111028c5f671a124aafe362aa7489b5.webp)

## Start with what each number counts

Three quantities can describe the same history:

| Quantity | Meaning | This example |
| --- | --- | --- |
| Distinct cards | Different cards represented in the records | 4 |
| Answer events | Recorded answers, including repeated attempts | 8 |
| Records eligible for retention | Answers included by the retention filter | 3 |

Here, **Again is a failure; Hard, Good, and Easy are passes**. Hard means successful recall with difficulty. If you couldn't recall the answer, pressing Hard would record a success that didn't happen. The [Anki answer-button guide](https://docs.ankiweb.net/manual/studying#answer-buttons) explains the grading boundary; our [Again vs Hard guide](/blog/again-vs-hard-fsrs-flashcards/) works through ambiguous cases.

Retention uses this fraction:

```text
retention = passes / (passes + failures)
```

The denominator is the part to investigate. Anki's [released retention code](https://github.com/ankitects/anki/blob/29bb700b951e3f0c0cb69b77c0180fc1fe33e6ba/rslib/src/stats/graphs/retention.rs) filters records before counting them. The [display calculation](https://github.com/ankitects/anki/blob/29bb700b951e3f0c0cb69b77c0180fc1fe33e6ba/ts/routes/graphs/true-retention.ts) returns N/A when the denominator is empty.

## Eight events you can count by hand

The experiment used Anki's Python package **26.9.3**, corresponding to the desktop [26.09.3 release](https://github.com/ankitects/anki/releases/tag/26.09.3), on CPython 3.13.17 and macOS 26.6.1, arm64. Four demonstration Basic cards received synthetic review-log entries in an isolated collection. Anki's released Rust backend then calculated the graphs.

A–D are readable card labels. Every event has a different timestamp within one Anki study day. The resulting intervals were supplied as inputs, too: no scheduling run generated them.

| Event | Card | Answer | Previous interval | Log kind | Resulting interval |
| --- | --- | --- | --- | --- | --- |
| 1 | A | Again | 30 days | Review | 10 minutes |
| 2 | A | Good | 10 minutes | Relearning | 1 day |
| 3 | B | Hard | 10 days | Review | 20 days |
| 4 | C | Again | 1 minute | Learning | 1 minute |
| 5 | C | Again | 1 minute | Learning | 1 minute |
| 6 | C | Good | 1 minute | Learning | 1 day |
| 7 | D | Good | 21 days | Review | 45 days |
| 8 | D | Good | 45 days | Filtered, without rescheduling | 1 minute |

In the internal inputs, minute intervals were negative seconds: `-600` for 10 minutes and `-60` for 1 minute. Day intervals were positive integers. The review-log `factor` was `2500` for events 1–7 and `0` for event 8; the filtered kind together with that zero identifies practice without rescheduling. These details describe the experiment. You don't need to edit an Anki database to audit your statistics.

Events 1, 4, and 5 failed. Events 2, 3, 6, 7, and 8 passed:

```text
5 successful answers / 8 answers = 62.5%
```

The backend's Today output returned `answer_count = 8` and `correct_count = 5`. It also returned three learning, three review, one relearning, and one early/filtered answer. These are answer events, so A, C, and D each contribute more than once. The [Today code](https://github.com/ankitects/anki/blob/29bb700b951e3f0c0cb69b77c0180fc1fe33e6ba/rslib/src/stats/graphs/today.rs) shows how that aggregation works.

## Why Answer Buttons splits the same eight events

In the examined release, Answer Buttons puts Learning, Relearning, and Filtered records in its Learning bucket. Ordinary Review records enter Young or Mature according to their **previous interval**: below 21 days is Young; 21 days or more is Mature. Manual and Rescheduled records are omitted. These rules come from the [released Answer Buttons code](https://github.com/ankitects/anki/blob/29bb700b951e3f0c0cb69b77c0180fc1fe33e6ba/rslib/src/stats/graphs/buttons.rs).

The backend returned these one-month counts:

| Answer Buttons bucket | Events | Again | Hard | Good | Easy | Successful answers |
| --- | --- | --- | --- | --- | --- | --- |
| Learning | 2, 4, 5, 6, 8 | 2 | 0 | 3 | 0 | 3/5 = 60% |
| Young | 3 | 0 | 1 | 0 | 0 | 1/1 = 100% |
| Mature | 1, 7 | 1 | 0 | 1 | 0 | 1/2 = 50% |

The buckets add up to eight answers and five successes. The Learning label includes A's relearning success and D's filtered practice, as well as C's learning attempts.

For **young vs mature cards**, don't substitute the card's age or current interval for the previous interval recorded at the event. D's event 7 is Mature because its previous interval was 21 days. Its resulting interval of 45 days doesn't decide that classification.

Even a shared label can hide different counting rules. Today's backend mature counter returned **three answers and two successes**, including filtered event 8. Answer Buttons placed that filtered event in Learning and returned **two Mature answers and one success**. Comparing those mature percentages would compare different records.

## Why true retention keeps only three events

The pinned retention implementation requires a rating and excludes filtered practice without rescheduling. It then accepts ordinary Review records, or other qualifying records whose previous interval represents at least one day. For this ledger, that leaves:

| Events | Retention treatment | Reason |
| --- | --- | --- |
| 1 | Mature failure | Review, previous interval 30 days, Again |
| 2 | Excluded | Relearning after a 10-minute previous interval |
| 3 | Young pass | Review, previous interval 10 days, Hard |
| 4–6 | Excluded | Learning after one-minute previous intervals |
| 7 | Mature pass | Review, previous interval 21 days, Good |
| 8 | Excluded | Filtered practice without rescheduling |

| Retention group | Passes | Failures | Retention |
| --- | --- | --- | --- |
| Young | 1 | 0 | 100% |
| Mature | 1 | 1 | 50% |
| Total | 2 | 1 | 66.7% |

All the input records fall on the same study day, so Today and Month contain the same three eligible events. A's later success doesn't erase its earlier failure. C's short learning attempts contribute nothing to this retention denominator.

This example doesn't establish that every Learning or Relearning record is excluded. Other records can qualify through their previous interval. The 21-day Young/Mature explanation here applies to ordinary positive day intervals; unusual long steps stored as negative seconds require closer inspection of the version's implementation.

## The manual and this release differ on one detail

The current [Anki statistics manual](https://docs.ankiweb.net/manual/stats), checked October 27, 2026, says retention counts only a card's first review each day. The examined release's graph-loading and retention code did not deduplicate eligible records by card and day.

A separate controlled probe added a ninth synthetic event: another ordinary Review for D on the same study day, with Good, a previous interval of 45 days, a resulting interval of 90 days, and factor `2500`. The backend retained both qualifying Review records for D:

| Output after the added record | Result |
| --- | --- |
| Total retention | 3 passes, 1 failure: 75% |
| Mature retention | 2 passes, 1 failure: 66.7% |
| Today answers | 9 answers, 6 successes |

That establishes how the released backend counted the supplied records. It doesn't establish that Anki normally schedules two such reviews on one day. The records were injected, and the short relearning retry in the original ledger still doesn't qualify.

For this pinned release, taking each card's first daily row is therefore insufficient to reproduce the backend result. Use eligible records and retain the version alongside your calculation. This finding is limited to the Python backend at release commit `29bb700b951e3f0c0cb69b77c0180fc1fe33e6ba`; it isn't an all-version or all-client claim.

## Audit your own counts before touching FSRS

Open Statistics and record the scope alongside the percentage. The [statistics manual](https://docs.ankiweb.net/manual/stats) describes deck and collection scope and filtering with search expressions.

| Check | What to record |
| --- | --- |
| App and version | The client and exact release number |
| Card selection | Selected deck and subdecks, the collection, or the search filter |
| Available history | The history range loaded into Statistics |
| Graph period | Each graph or retention row's own period, such as Month or Today |
| Study-day boundary | The configured rollover time; this experiment used the default 4 a.m. |
| Counts | Passes and failures, or answer-button counts, alongside the percentage |

An Anki study day needn't start at midnight. Grouping records by a calendar date or UTC date can produce another mismatch. Match the card selection, available history, graph period, and study-day boundary before comparing results.

Inspect one card whose repeated attempts might explain the difference. On desktop, the documented **I** shortcut during study opens Card Info. Its history can help you identify the answers and learning or relearning attempts involved. When checking historical classifications, remember that the graphs use the previous interval at each event, which can differ from the current interval shown in the Browser.

If the totals still disagree, keep the exact version, scopes, raw counts, and that concrete history example together. Those details make the discrepancy possible to investigate.

## Four quick checks

Try these before reading the answers.

1. One matching group has 9 passes from 10 eligible answers. Another has 1 pass from 2. What is their combined retention?
2. A retention row has zero passes and zero failures. Should it show 0% or 100%?
3. A Review event had a previous interval of 20 days and a resulting interval of 35 days. Which Answer Buttons bucket does it enter under the examined rules?
4. A card fails after a 30-day interval, then succeeds after a 10-minute relearning step. What does that pair contribute to retention under the examined rules?

### Answers

1. **10/12 = 83.3%.** Add counts before dividing: `(9 + 1) / (10 + 2)`. Averaging 90% and 50% gives 70%, incorrectly assigning equal weight to groups with different numbers of answers.
2. **N/A.** There are no eligible records in that row. An empty denominator establishes neither failure nor success.
3. **Young.** The previous interval was below 21 days. The new 35-day interval doesn't reclassify that historical event.
4. **One Mature failure.** The ordinary Review failure qualifies; the short relearning success doesn't. Across all answers, the pair still contains one success in two attempts. Neither fraction establishes permanent mastery.

To practice the count-weighting step in the first check, try the [weighted average flashcards](/catalog/packages/weighted-average-flashcards/). They include combining group percentages using their counts. For your Anki history, use the eligible records established by the audit.

## Make the settings decision after the audit

Desired retention is a target you choose for FSRS scheduling. Observed retention describes eligible answers in a particular historical scope. An aggregate across several decks or presets needn't match one deck's target, and three eligible answers provide little evidence for a settings change.

First make the counts reproducible. Then compare longer, matching windows and their sample counts, while keeping grading consistent. Use Again when recall fails, even when that lowers the percentage.

The [FSRS settings guide](/blog/fsrs-settings/) covers desired retention, optimization, and workload decisions once the audit is clear. A retention percentage alone isn't an exam grade or evidence that a particular parameter change will improve learning.

## Method and limits

On October 27, 2026, the experiment created an isolated collection, inserted the eight synthetic records above, and called the released Rust backend through `graphs(search='', days=0)`. The blank search covered the collection; `days=0` requested all history. A second call followed the added ninth record. Source inspection covered [graph loading](https://github.com/ankitects/anki/blob/29bb700b951e3f0c0cb69b77c0180fc1fe33e6ba/rslib/src/stats/graphs/mod.rs), [review-log filtering](https://github.com/ankitects/anki/blob/29bb700b951e3f0c0cb69b77c0180fc1fe33e6ba/rslib/src/revlog/mod.rs), and the linked Today, Answer Buttons, retention, and display calculations at the pinned release commit.

This verified filtering and numerical aggregation for controlled inputs. It didn't exercise the desktop interface, generate review sequences through the scheduler, use a person's study history, or measure a learning improvement. The ledger supplies the inputs needed to check the article's arithmetic without changing your collection.

*AI tools performed the source research and backend experiment and assisted substantially with drafting, editing, and exercise construction. The illustration is AI-generated. Kirill Markin owns Nibomo; the experiment is not his personal study experience.*
