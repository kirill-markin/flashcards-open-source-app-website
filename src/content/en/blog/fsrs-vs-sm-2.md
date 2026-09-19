---
title: "FSRS vs SM-2: Differences, Review Load, and Switching in Anki"
description: "Compare FSRS with SM-2, understand what retention benchmarks can tell you, and switch Anki scheduling without rescheduling your whole collection at once."
date: "2026-03-12"
updated: "2026-09-19"
image: "/blog/fsrs-vs-sm-2.png"
keywords:
  - "FSRS vs SM-2"
  - "sm-2 vs fsrs"
  - "FSRS vs SM2 Anki"
  - "is FSRS better than SM2"
  - "switch Anki to FSRS"
  - "spaced repetition algorithm"
---

Anki lets you switch schedulers while keeping your cards and review history. The useful **FSRS vs SM-2** comparison is therefore quite practical: how will the next review date be chosen, and will the resulting routine suit you?

For most Anki learners with compatible clients, **FSRS is a sensible choice for long-term scheduling**. Its memory model gives you an explicit recall target and can learn from your review history. Those are useful reasons to switch. A smaller queue tomorrow, or a particular percentage of time saved, isn't guaranteed.

**Facts checked:** September 19, 2026.

![A baker checks a round of dough by pressing it with one fingertip while two more rounds rest under a cloth](/blog/fsrs-vs-sm-2.png)

## First, which SM-2 are we comparing?

The [original SM-2 algorithm](https://super-memory.com/english/ol/sm2.htm) grades answers from zero to five. Successful repetitions begin with intervals of one and six days. Later intervals multiply the previous interval by an ease factor, which changes with answer ratings.

Anki's legacy scheduler modifies that design. It uses four answer buttons, configurable learning steps, and adjustments for late reviews, among other differences. “SM-2” is common shorthand for this scheduler, but the original formula and Anki's implementation aren't interchangeable. The [Anki algorithm FAQ](https://faqs.ankiweb.net/what-spaced-repetition-algorithm.html) explains the distinction.

FSRS, short for Free Spaced Repetition Scheduler, models each card's memory state. Difficulty describes how hard it is to strengthen the memory; stability describes how slowly it fades; retrievability estimates the chance of recalling it now. An optimizer fits model parameters to review history, while defaults let the scheduler work without that history. The official [ABC of FSRS](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/ABC-of-FSRS) and our [FSRS explanation](/blog/what-is-fsrs/) cover the model in more detail.

| Question | Original SM-2 | Anki's legacy scheduler | FSRS |
| --- | --- | --- | --- |
| What drives interval growth? | Previous interval and ease factor | Ease-based rules with Anki's adjustments | Updated memory estimates and a recall target |
| Does it adapt to individual cards? | Yes | Yes | Yes |
| Can you choose a recall target directly? | No | No | Yes, through desired retention |
| Can it fit model parameters to review history? | No | No | Yes, when the app supplies an optimizer |

Both approaches respond to your answers. The useful difference is how FSRS connects those answers to a model of forgetting and a chosen recall target. SM-2's age alone is no reason to dismiss it, and a longer interval alone doesn't demonstrate better scheduling.

## What the evidence can actually tell you

Claims about FSRS tend to mix three questions: how accurately it predicts recall, how efficiently it schedules in a simulation, and what happens during someone's actual studying.

**Recall prediction** compares estimated chances of remembering with later review outcomes. The public [spaced-repetition benchmark](https://github.com/open-spaced-repetition/srs-benchmark) evaluates models on recorded reviews. Read its results alongside the model version and evaluation conditions, including treatment of same-day reviews. A research version in a benchmark table may differ from the version your app runs. The table isn't a direct experiment comparing your study time under Anki's two schedulers.

The metrics need interpretation too. Log loss scores probability predictions, penalizing confident mistakes; calibration checks whether predicted success rates match observed ones. The [FSRS metric explanation](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Metric) describes these measures. Neither directly measures minutes spent studying or exam performance.

**Workload simulation** estimates what could happen under a model and specified assumptions. The efficiency claims in the [FSRS overview](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/ABC-of-FSRS) include simulation results. These help explain the case for FSRS, but they don't establish how much less work your collection will require.

**Your actual outcome** includes recall, review time, and whether you can keep up. A lighter queue with more forgetting may represent a different tradeoff. To decide whether the change helped you, observe both workload and recall while keeping material and habits reasonably comparable.

## Should you switch now?

| Your situation | Reasonable next move |
| --- | --- |
| Your clients support FSRS and you want scheduling with a recall target | Enable FSRS with a gradual transition |
| Your routine works and an exam is days away | Wait until afterward to introduce an unfamiliar variable |
| A device uses an incompatible client | Update that client before switching |
| You press Hard when you've forgotten the answer | Correct the rating habit before judging either scheduler |
| You're behind after a large import or missed sessions | Address intake and backlog alongside the scheduler decision |
| You're building a small educational scheduler | Original SM-2 is useful for teaching ease-based interval rules |

The exam and backlog advice is practical judgment, not a finding from a scheduler trial. Your immediate constraint may be how much material you've taken on. For that problem, start with [why Anki reviews pile up](/blog/why-are-there-so-many-anki-reviews/).

## Switch without rebuilding the whole queue

Use the [Anki FSRS manual](https://docs.ankiweb.net/deck-options.html#fsrs) for current controls:

1. Sync, make a backup, and check client and scheduling add-on compatibility.
2. Enable FSRS in deck options. This applies across presets, rather than to one deck alone.
3. Optimize using your own history. Defaults are usable if history is insufficient; don't copy someone else's parameters.
4. Start with the default 90% desired retention unless you have a reason to change it. Higher targets mean more reviews.
5. Leave **Reschedule cards on change** off. New scheduling then takes effect as cards are reviewed, without immediately changing all due dates.

Our [FSRS settings guide](/blog/fsrs-settings/) covers learning steps, retention choices, and optimization in detail.

Keep ratings consistent: **Again means failed recall; Hard means successful but difficult recall**. Grade the answer you produced, rather than selecting the interval you prefer. See [Anki's rating guidance](https://docs.ankiweb.net/studying.html) and our [Again versus Hard guide](/blog/again-vs-hard-fsrs-flashcards/) for partial answers.

## Keep a small observation sheet

Before switching, record a typical week; use more weeks if your schedule varies. Repeat the same observations afterward. This is a practical log for making decisions, not a controlled experiment. Copy the sheet and fill in the last two columns:

| Measure | What to record consistently | Before: dates ___ | After: dates ___ |
| --- | --- | --- | --- |
| Review attempts | All attempts, including repeated cards | ___ | ___ |
| Review time | Minutes, using the same timing method | ___ | ___ |
| Scheduled recall | Successful answers / attempts for the same card group; exclude immediate relearning | ___ / ___ | ___ / ___ |
| New cards | Actual intake, including imports | ___ | ___ |
| Overdue work | Missed days and backlog at week's end | ___ | ___ |
| Other changes | Retention target, card edits, outside study, rating habits, interruptions | ___ | ___ |

Choose what counts as acceptable recall before looking at the outcome. For example, record the minimum recall level you would accept and the weekly review time you can sustain. These are your working limits, not a promise that a scheduler will meet them.

If new-card intake halves, a smaller queue doesn't establish that FSRS caused the reduction. If you rewrite ambiguous prompts, better recall has another plausible explanation. Recording these changes is more useful than trying to make the numbers look better.

A gradual switch also mixes intervals created under both schedulers. Cards with long intervals may take months to return, so early observations mostly describe the transition. Avoid declaring a winner after a quiet weekend.

If review time falls and recall stays acceptable across comparable weeks, you have a practical reason to keep the setup. If recall becomes unacceptable, inspect missed days, card quality, ratings, and your target before attributing the change to the algorithm. If time stays high, check whether new material or overdue work accounts for it.

You can make this decision entirely within Anki. [Nibomo](/features/) also uses FSRS; choosing it is a separate decision about authoring, review, and sync workflows. You don't need to migrate your collection to use FSRS.
