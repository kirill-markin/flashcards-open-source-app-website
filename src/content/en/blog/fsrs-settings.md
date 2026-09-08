---
title: "Best FSRS Settings for Anki in 2026: Retention, Steps, and Review Load"
description: "Choose safe Anki FSRS settings for desired retention, learning steps, optimization, rescheduling, and workload in Anki 26.08 with FSRS-6."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "FSRS settings"
  - "best FSRS settings"
  - "Anki FSRS settings"
  - "desired retention FSRS"
  - "FSRS learning steps"
  - "FSRS simulator"
  - "optimize FSRS parameters"
  - "FSRS-6"
---

Moving Anki's desired retention from 90% to 95% sounds like a small change. It is not a five-percent increase in work. FSRS must shorten intervals as the target rises, and a mature collection can produce a much heavier review queue. If you also enable **Reschedule cards on change**, part of that workload may arrive immediately.

The best FSRS settings are therefore not a parameter string to copy. They are a sequence of decisions: set the workload you can sustain, choose the recall target inside that budget, fit the model to your own history, and leave existing due dates alone unless you deliberately want to rebuild them.

The labels and behavior below match the [Anki 26.08 release](https://github.com/ankitects/anki/releases/tag/26.08) and its FSRS-6 controls. If you first need the model rather than the settings, read [What Is FSRS?](/blog/what-is-fsrs/). If you are still choosing a scheduler, start with [FSRS vs SM-2](/blog/fsrs-vs-sm-2/).

> **Disclosure:** I am Kirill Markin, and I build [Flashcards Open Source App](/features/). Anki offers personalized parameter fitting and experimental workload simulators that Flashcards does not currently offer. The comparison near the end keeps those differences explicit.

**Facts checked:** September 8, 2026.

![Canal lock operator tests water flow on a scale model before changing the full-size lock](/blog/fsrs-settings-v2.png)

## The short answer: start here

For most Anki users, these are safe starting choices, not universal settings:

| Setting or habit | Safe starting choice | Why |
| --- | --- | --- |
| Desired retention | `0.90` | It is Anki's default and balances recall with review load. |
| FSRS parameters | Use **Optimize Current Preset**; do not paste or hand-edit weights | The optimizer fits the model to your review history. |
| Optimization frequency | Monthly at most; every few months is usually enough | Anki does not recommend frequent optimization. |
| Learning steps | Keep a small number of steps that finish the same day | Long step chains delay the model-based schedule. |
| Relearning steps | Keep them minimal and under one day | The same boundary applies after a failed review card. |
| Reschedule cards on change | Off | New settings can take effect through future reviews without rebuilding today's queue. |
| Maximum interval | Keep the 100-year default | A shorter ceiling forces mature cards back more often. |
| New cards/day | Set it from a workload you can sustain | Every new card creates learning work now and reviews later. |
| Again versus Hard | Again means failed recall; Hard means difficult success | Incorrect ratings give the model incorrect history. |

If reviews are manageable and your setup is already close to this, there may be nothing to fix. Settings maintenance is not studying.

## Keep three decisions separate

People often mix desired retention, FSRS parameters, and daily workload into one idea. They control different things:

- **Desired retention** is your recall target. You choose it from your goals and available study time.
- **FSRS parameters** fit the memory model to review history. Anki's optimizer calculates them.
- **New-card and review limits** control how much material enters the system and how much due work Anki can show each day.

This separation makes troubleshooting much easier. A large queue does not automatically mean your parameters are wrong. A high-stakes deck does not automatically need a separate parameter preset. And lowering desired retention will not repair an intake rate that was never sustainable.

## Choose desired retention from workload, not ambition

Desired retention tells FSRS how likely you want to be to remember a review card when it comes due. At `0.90`, FSRS schedules around a predicted 90% chance of recall. That is a model target, not a guarantee that every session or exam will produce exactly 90% correct answers.

The tradeoff works in both directions:

- Raise desired retention, and intervals become shorter as reviews increase.
- Lower it, and intervals become longer as failures increase.
- Push it too low, and the extra relearning after failures can consume part of the time you hoped to save.

Anki defaults to 90%. Its [desired-retention guidance](https://docs.ankiweb.net/deck-options.html#desired-retention) warns that workload rises quickly as the target approaches 100% and recommends staying below 97%. The official [optimal-retention explanation](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) covers the other end of the curve: very low retention can also be inefficient because forgotten cards need more work.

Start at `0.90`, then change it only after checking the workload. A higher target can make sense for material where forgetting has a real cost. A lower target can make sense when reviews are displacing more valuable study. Neither change fixes vague cards, dishonest ratings, or too many new cards.

### Deck retention and preset parameters have different scope

In Anki 26.08, **Desired retention** offers two scopes: **Shared Preset** and **This deck**. You can therefore keep related decks on one parameter preset while giving a particular deck its own retention target.

Use that override when the cost of forgetting differs. A licensing-exam deck may justify a higher target than a low-priority reference deck even if both use the same fitted model.

FSRS parameters do not become deck-specific when you choose **This deck**. By default, Anki fits parameters from the review history of all decks assigned to the current preset. If groups of decks differ wildly in subjective difficulty, separate presets are the supported way to fit them separately.

## Use Help Me Decide and the Simulator for different questions

Anki 26.08 exposes two separate experimental controls:

- **Help Me Decide (Experimental)** shows a personalized retention-workload curve. Use it to ask, “What retention target fits the reviews or minutes I can sustain?”
- **FSRS Simulator (Experimental)** estimates how one configuration may behave over time. Use it to compare changes to retention, new-card intake, review limits, and maximum interval.

The [FSRS Simulator documentation](https://docs.ankiweb.net/deck-options.html#the-simulator) lists its core inputs:

- days to simulate
- additional new cards to simulate
- new cards per day
- maximum reviews per day
- maximum interval
- desired retention and the preset's FSRS parameters

The simulation also uses the real memory states of cards in the preset. That makes it more useful for a mature collection than multiplying today's due count by a generic percentage.

Run three scenarios before changing the live setup:

1. Your current retention and new-card intake.
2. The retention target you are considering.
3. The same target with fewer new cards per day.

The third run tests a common alternative: keep the recall target and slow the stream of new material. If that produces a manageable forecast, you do not need to accept more forgetting just to calm the queue. The deeper intake guide is [How Many New Flashcards per Day?](/blog/how-many-new-flashcards-per-day/).

Both tools are estimates. Missed days, edited cards, new material, and changing rating habits can move real workload away from the graph. Use the comparison to choose a direction, not to promise an exact queue months from now.

Older guides may instead mention **Compute Minimum Recommended Retention**, or CMRR. Anki removed that feature in version 25.07. It is not the current workflow for choosing desired retention.

## Optimize FSRS parameters from your own history

Desired retention expresses your goal. FSRS parameters describe how the model fits your reviews.

In Anki 26.08, use **Optimize Current Preset** to fit the parameters for the active preset. By default, Anki includes review history from every deck using that preset; you can adjust the search if the fitting set should be narrower. **Optimize All Presets** updates every preset in one operation.

Do not type weights manually or copy them from Reddit, a video, or somebody else's deck. Their cards, review timing, and rating habits are not your history. A clean row of [FSRS-6 weights](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) is not a transferable study strategy.

Re-optimize only after meaningful new review history has accumulated. The Anki manual says once a month is sufficient, while the 26.08 in-app guidance says once every few months is sufficient. The practical conclusion is the same: there is no reason to optimize every week, let alone after every session.

### Use the health check with the current preset

Enable **Check health when optimizing (slow)** when you want Anki to assess how well FSRS can adapt to the current preset's history. This check runs with **Optimize Current Preset**, not **Optimize All Presets**.

If the result is poor, inspect the data before touching the weights. The [Anki FSRS parameter guidance](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) names common causes: fewer than a few hundred reviews, using Hard after a failure, and failing to press Again when recall fails. With little useful history, keep the defaults and optimize later instead of borrowing another user's parameters.

## Again means failed recall; Hard is a pass

This habit matters as much as any setting.

Use **Again** when you could not produce the required answer or got it wrong. Use **Hard** only when you recalled it correctly, but with serious effort or hesitation. Good and Easy are also passing grades.

Pressing Hard to avoid a short Again interval records a success after a failure. FSRS then learns from the wrong event. Choose the button that describes the recall, not the interval you want from the labels above the buttons.

Ambiguous cards make honest ratings harder. If a prompt asks for five facts and you remember four, the scheduling problem began in the editor. Split or rewrite the card. For cards that keep failing despite repeated reviews, use [How to Fix Leech Flashcards](/blog/how-to-fix-leech-flashcards/).

## Keep FSRS learning steps short—or leave them empty deliberately

Learning and relearning steps control short returns before the regular long-term schedule takes over. They are not another retention target.

Anki's FSRS guidance recommends two constraints:

- every step should be shorter than one day and possible to complete on the same day
- the number of same-day repetitions should stay small

Long chains such as `1m 10m 1d 3d` carry an old SM-2 habit into FSRS. Steps of a day or more delay model-based scheduling and can create confusing button labels, including Hard showing a longer interval than Good.

A compact sequence such as `1m 10m`, with a `10m` relearning step, is a conservative baseline when it fits your sessions. More same-day repetitions are not automatically better.

Anki 26.08 also allows either (re)learning-step field to be empty. With FSRS enabled, the empty field delegates that short-term scheduling to FSRS. This is experimental, and an Again interval may be one day or longer. Keep short manual steps if you need a predictable same-day return; clear a field only when you intentionally accept FSRS choosing that timing.

## Keep Reschedule cards on change off for a gradual transition

With **Reschedule cards on change** off—the default—enabling FSRS or changing desired retention or parameters does not immediately rewrite existing due dates. The new configuration applies as cards are reviewed in the future, so the queue changes gradually.

Saving one of those FSRS changes with the option on recalculates due dates immediately. Depending on the new target and card states, many cards can become due at once. Anki also adds review entries for rescheduled cards, increasing collection size.

This option is useful only when you actually want a retroactive rebuild. For a mature collection:

1. Create a fresh backup and confirm you know how to undo or restore it.
2. Run the Simulator with the proposed settings.
3. Choose one configuration change; do not combine several experiments.
4. When you save it, enable rescheduling only if you want the immediate due-date rewrite and can absorb the result.

Anki explicitly recommends a backup when switching from SM-2 with rescheduling. The broader [flashcard backup guide](/blog/how-to-back-up-flashcards/) explains why the recovery path matters as much as the backup file.

## Keep the maximum interval generous

Anki's maximum interval defaults to 100 years. That looks odd until you remember that it is a ceiling, not a promise that every mature card will disappear for a century.

Shortening the ceiling forces well-known cards back sooner and increases workload. At the cap, Hard, Good, and Easy can all show the same delay because none may exceed the maximum.

A shorter maximum interval can be reasonable when an exam creates a real horizon, the material changes often, or a professional rule requires repeated exposure regardless of predicted memory. Coordinate that ceiling with the calendar and the Simulator instead of choosing a small number from anxiety. [How to Study for an Exam With FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) covers that narrower case.

For ordinary long-term learning, leave the cap generous. Desired retention already controls when predicted recall should trigger a review.

## New-card intake is part of the workload decision

FSRS can distribute reviews; it cannot make unlimited intake sustainable. Every new card creates learning work now and review work later.

When the queue is too heavy, inspect these before lowering desired retention:

- new cards per day
- large imports or generated card batches
- a maximum-reviews limit that keeps hiding due work
- leeches and vague cards consuming repeated attempts
- missed review days

Use **Additional new cards to simulate** when you know a deck will grow. A forecast based only on today's collection will not represent the workload after a large import.

If the result is too high, reduce intake and simulate again. That preserves the recall target without asking the scheduler to tolerate more forgetting.

## Anki and Flashcards expose different FSRS controls

Both products use FSRS-6, but Anki FSRS settings do not map one-for-one onto Flashcards Open Source App.

| Capability | Anki 26.08 | Flashcards Open Source App |
| --- | --- | --- |
| Desired retention | **Shared Preset** or **This deck** | Configurable per workspace; default `0.90` |
| FSRS parameters | **Optimize Current Preset** or **Optimize All Presets** from review history | Official FSRS-6 default weights are pinned and not user-configurable in v1 |
| Learning steps | Configurable; empty-field scheduling by FSRS is experimental | Configurable per workspace; defaults to `1m 10m` |
| Relearning steps | Configurable; empty-field scheduling by FSRS is experimental | Configurable per workspace; defaults to `10m` |
| Maximum interval | Default 100 years | Default 36,500 days, also 100 years |
| Settings changes | Future reviews by default; optional retroactive rescheduling | Future reviews only; existing due dates are not rebuilt |
| Workload tools | **Help Me Decide (Experimental)** and **FSRS Simulator (Experimental)** | No equivalent workload simulator in v1 |

Flashcards uses the standard Again, Hard, Good, and Easy ratings and keeps card-level FSRS memory state. Its backend, iOS, and Android schedulers are independent implementations kept on the same behavior; the web review flow reuses the backend scheduler rather than adding a fourth copy.

These boundaries and defaults are documented in the public [Flashcards FSRS scheduling specification](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). The tradeoff is straightforward: Flashcards provides a practical workspace-level FSRS-6 setup, while Anki provides finer scope, personalized fitting, and simulation. If those controls are essential, Anki is the stronger fit.

## A safer workflow for a mature collection

If you already have months or years of review history, use this order:

1. **Fix rating semantics.** Again is failure; Hard is difficult success.
2. **Optimize the current preset.** Fit your own history instead of editing or copying weights.
3. **Run the health check if needed.** Treat thin or inconsistent history as a data problem.
4. **Use Help Me Decide.** Choose a retention range from reviews or minutes you can sustain.
5. **Run the Simulator.** Compare the current setup, the proposed target, and lower new-card intake.
6. **Change one live input.** Adjust retention or intake first, then observe the real queue.
7. **Keep steps short.** Remove day-long learning and relearning chains; use empty fields only as an experiment.
8. **Leave the maximum interval generous.** Shorten it only for a defined horizon or requirement.
9. **Keep rescheduling off.** If you need an immediate rebuild, back up first and plan for the resulting queue.

This sequence keeps a mature schedule reversible for as long as possible. It also prevents three different problems—the model fit, the recall goal, and the flow of new material—from collapsing into one settings puzzle.

## FAQ about the best FSRS settings

### Is 90% the best desired retention for FSRS?

It is the safest general starting point because it is Anki's default and avoids the sharpest part of the high-retention workload curve. The best value for one deck depends on the cost of forgetting and the workload you can sustain. Check **Help Me Decide (Experimental)** before changing it.

### Should I set desired retention to 95%?

Only after checking the added reviews or minutes. A clean, high-stakes deck may justify 95%; a large casual collection may become unnecessarily heavy. Do not enable retroactive rescheduling at the same time unless you deliberately want an immediate due-date rebuild.

### How often should I optimize FSRS parameters?

Monthly is already frequent enough, and Anki 26.08's in-app guidance says once every few months is sufficient. Optimize after meaningful new history has accumulated, not on a daily or weekly schedule.

### Should FSRS learning steps be empty?

Empty learning or relearning steps let Anki 26.08 delegate the corresponding short-term schedule to FSRS. The feature is experimental, and Again may be scheduled a day or more away. Minimal same-day steps remain the conservative choice.

### Does changing FSRS settings reschedule existing Anki cards?

Not by default. With **Reschedule cards on change** off, new settings affect future reviews without immediately rebuilding the queue. Turning it on changes due dates and can make many cards due, so back up first.

### Is CMRR still part of Anki?

No. Anki removed Compute Minimum Recommended Retention in version 25.07. In Anki 26.08, use **Help Me Decide (Experimental)** and **FSRS Simulator (Experimental)** to compare retention with estimated workload.

### Does Flashcards use the same settings as Anki?

It uses FSRS-6 and exposes desired retention, learning steps, relearning steps, maximum interval, and fuzz per workspace. It does not copy Anki's full settings model: weights are pinned in v1, changes are forward-only, and there is no personalized parameter optimization or workload simulator.

## Set the workload before the percentage

Good FSRS settings make the review queue serve a real study plan. Start at 90%, estimate the work, control new-card intake, and raise retention only when remembering more is worth the extra reviews. Keep steps short, the maximum interval generous, and the rating data honest.

Then leave the settings screen. The scheduler needs consistent reviews more than it needs another evening of tuning.
