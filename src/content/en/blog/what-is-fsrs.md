---
title: "What Is FSRS? How the Spaced Repetition Scheduler Works (2026)"
description: "FSRS predicts when each flashcard may be forgotten, then schedules the next review around your desired retention. Learn how ratings, memory states, and settings fit."
date: "2026-08-25"
image: "/blog/what-is-fsrs.png"
keywords:
  - "what is FSRS"
  - "FSRS spaced repetition"
  - "how FSRS works"
  - "Free Spaced Repetition Scheduler"
  - "FSRS algorithm"
  - "Anki FSRS"
  - "desired retention"
---

You reveal a flashcard, remember the answer with some effort, and press Good. The card disappears for a while. Another card gets Again and returns much sooner. FSRS does not know that one answer was about anatomy and the other about Spanish. It sees the timing, the card's existing memory state, and the rating you chose.

**FSRS, or Free Spaced Repetition Scheduler, is an open-source scheduling algorithm that estimates how likely you are to recall each card and chooses a next review date around a retention target.** It uses review history, elapsed time, and the four ratings Again, Hard, Good, and Easy. The flashcard app still handles the cards, review screen, learning steps, and other product features.

That is the short answer to **what is FSRS**. To understand how FSRS works, you need three quantities—Difficulty, Stability, and Retrievability—and one important detail: they do not all behave like stored scores.

**Facts checked:** August 25, 2026.

![A greenhouse caretaker checks three plant reservoirs at different water levels and refills the one that reached its threshold](/blog/what-is-fsrs.png)

## FSRS is the scheduler, not the flashcard app

Anki can use FSRS. Flashcards Open Source App uses FSRS. Other products and libraries can implement it too. The [open-spaced-repetition project](https://github.com/open-spaced-repetition) publishes the model, implementations, and supporting tools openly.

The product and scheduler have different jobs:

| Layer | What it does |
| --- | --- |
| Flashcard app | Stores cards, shows the review screen, syncs data, and records the rating you choose |
| FSRS scheduler | Updates the card's memory state and calculates a suitable next interval |
| FSRS optimizer | Fits model parameters to review history when the host app offers optimization |
| You | Decide what the card should test, produce an answer, and rate the attempt honestly |

This distinction clears up phrases such as **Anki FSRS**. Anki is the app; FSRS is the scheduler enabled inside it. The same distinction matters when comparing [Anki, SuperMemo, and FSRS](/blog/anki-vs-supermemo-vs-fsrs/): Anki and SuperMemo are products, while FSRS can sit inside a product.

The optimizer is separate from the day-to-day scheduler. The scheduler can start with default parameters. An optimizer can later analyze compatible review history and find parameters that fit those reviews better. It does not rewrite your cards or choose how important the material is to you.

## The FSRS mental model: two carried states and one live estimate

The official [FSRS algorithm documentation](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm) describes a Difficulty–Stability–Retrievability model, usually shortened to DSR. In FSRS-6, Difficulty and Stability make up the memory state carried from one review to the next. Retrievability is calculated for a particular moment from Stability and the elapsed time.

That distinction matters. Retrievability falls as the clock moves even when nobody edits the card. The scheduler can calculate it when needed instead of treating it as a third fixed input.

### Difficulty: how resistant this memory is to improvement

**Difficulty** estimates how hard it is to increase a card's memory stability. Under the model, a card with higher difficulty tends to gain less stability from a successful review than an easier card in the same conditions.

This is not an objective score for the topic. FSRS has not read your anatomy definition or checked your Spanish grammar. Difficulty is an internal estimate built from the review pattern and ratings attached to that card.

### Stability: how slowly the memory fades

**Stability** describes how slowly the memory fades. More precisely, it is the interval at which the model's predicted probability of recall reaches 90%.

That 90% is part of the definition of stability, even when your chosen desired retention is different. Stability is a scale inside the memory model, not automatically the card's next interval. After a successful review, stability generally grows, so the card can wait longer before reaching the same predicted recall level.

### Retrievability: the chance of recall right now

**Retrievability** is the model's predicted probability that you can recall the card now. Soon after a successful review, it is high; as time passes, it falls along the model's forgetting curve.

Retrievability is a prediction, not a sensor reading from your brain. FSRS cannot know with certainty whether the answer will appear when the card opens. It estimates the probability from the card's state, elapsed time, parameters, and review history.

Put the three together and the mental model stays manageable:

- Difficulty affects how readily stability changes.
- Stability controls how quickly retrievability falls.
- Retrievability locates the card on that curve at the current moment.

## How FSRS works during a real review

For a card that has reached long-term review, the scheduling loop is roughly this:

1. FSRS calculates current retrievability from the card's stability and the time since its last review.
2. You reveal the answer and choose Again, Hard, Good, or Easy.
3. FSRS updates difficulty and stability using that rating and the card's previous state.
4. It calculates when predicted retrievability will approach your desired retention.
5. The host app applies relevant rules such as a maximum interval or fuzz, then stores the next due time.

The [published FSRS formulas](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) define those updates. You do not need to calculate them while studying. The practical point is that the next interval comes from a changing card-level estimate rather than a fixed ladder such as “one day, then three days, then one week.”

### One card, several reviews

Take a card that asks for the role of the hippocampus. Exact intervals depend on the app, settings, review timing, parameters, and rating, so this timeline is deliberately qualitative.

| Review moment | Your rating | What happens next |
| --- | --- | --- |
| You see the new card and recall the answer normally | Good | The app may continue a configured learning step before the card reaches long-term review |
| The card later reaches long-term review, and recall takes serious effort | Hard | FSRS treats this as a difficult success and gives the shortest of the successful long-term choices for that state |
| On a later review, you cannot produce the answer | Again | FSRS applies its failure update; the app may also send the card through a relearning step |
| The card returns and you recall it normally | Good | FSRS updates Difficulty and Stability from the new success, then calculates another interval around the retention target |

The sequence matters. Hard records successful recall; Again records failure. Again also does not erase the earlier history and turn the card into a blank new card.

## What Again, Hard, Good, and Easy tell FSRS

The four buttons describe the recall that just happened:

- **Again:** you failed to recall the required answer or got it wrong.
- **Hard:** you recalled it correctly, but with serious difficulty or hesitation.
- **Good:** you recalled it correctly with normal effort.
- **Easy:** you recalled it correctly with little or no meaningful effort.

The official [Anki FSRS documentation](https://docs.ankiweb.net/deck-options.html#fsrs) makes the critical boundary explicit: Again is failure, while Hard is successful recall. Pressing Hard after forgetting gives the scheduler the wrong signal and can push later intervals too far out.

Choose the rating from your recall, not from the interval shown above the button. If Good sends the card farther away than you expected, that is a settings question. Changing the rating to get a preferred date changes the review history instead of fixing the setting.

Partial answers and vague cards make this harder than the four labels suggest. The detailed [Again vs Hard guide](/blog/again-vs-hard-fsrs-flashcards/) covers those cases. A reliable short rule is failure first, effort second: use Again for a failed attempt; choose Hard, Good, or Easy only after a successful one.

FSRS accepts the rating you submit. It does not objectively grade your spoken or typed answer.

## Desired retention turns the model into a review date

**Desired retention** is the probability of recall you want the scheduler to target when a card becomes due. If it is set to `0.90`, the scheduler aims to bring cards back around the point where the model predicts a 90% chance of successful recall.

This is a model target, not a promise that exactly nine out of every ten cards will always be correct. Predictions can be imperfect, rating habits can change, and real study conditions are messy.

There is a useful connection back to Stability here. Stability is defined at 90% retrievability, so with desired retention set to `0.90`, a review card's calculated long-term interval is closely tied to its Stability. Rounding, fuzz, and maximum-interval limits can still change the date you see. A card that is still learning follows the app's short-step workflow instead.

The workload tradeoff is direct:

- Higher desired retention brings cards back sooner and creates more reviews.
- Lower desired retention allows longer intervals and more forgetting.

The [Anki manual's desired-retention section](https://docs.ankiweb.net/deck-options.html#desired-retention) warns that workload rises quickly as the target approaches 100%. No single value fits every deck and goal.

The optimizer does not learn desired retention. It expresses your study goal. The parameters describe the memory model; the retention target tells the scheduler where on that model you want to review.

For practical choices and workload tradeoffs, use the separate [FSRS settings guide](/blog/fsrs-settings/).

## The optimizer is optional, and desired retention is still your choice

FSRS formulas use a set of weights, usually called **parameters**, to update Difficulty and Stability and model forgetting. An implementation can use default parameters. A host app with an optimizer can fit parameters to compatible review history instead.

In current Anki, the **Optimize** action analyzes review history and generates parameters fitted to it. The [Anki parameter documentation](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) advises users not to edit the values manually or copy someone else's parameters. Other FSRS apps may use defaults without offering this feature.

“Optimized” has a narrow meaning here: the parameters fit the supplied review data better according to the optimizer. It does not mean the cards are accurate, the study plan is sensible, or every future prediction will be correct.

Defaults still matter. The scheduler can work without personalized fitting and still maintain a separate memory state for each card.

## Learning steps handle a different timescale

New cards often get another look within minutes before long-term spacing begins. A failed review card may also return quickly. Flashcard apps expose these short delays as **learning steps** and **relearning steps**.

- Learning steps are short, configured delays while a new card is being introduced.
- Relearning steps are short delays after Again on a card that had already reached long-term review.
- After the card graduates, its next long-term interval comes from the FSRS memory model.

This is why changing a ten-minute learning step is different from changing desired retention. The step directly controls a short-term return. Desired retention shapes model-based long-term intervals. The scheduler may still update memory during learning, depending on the implementation, so learning steps are a workflow boundary rather than a separate theory of memory.

Anki's current [learning-step guidance for FSRS](https://docs.ankiweb.net/deck-options.html#learning-steps) recommends steps that can be completed on the same day. It also offers an experimental option to let FSRS handle short-term scheduling when the step fields are empty. Other apps can make different choices, so check what your own app supports before copying Anki settings.

## What FSRS cannot decide for you

FSRS can schedule bad input very carefully. The cards do not become better because the intervals are sophisticated.

The scheduler cannot:

- understand what the card means
- verify whether the stored answer is true or current
- decide whether a partial answer should count
- repair an ambiguous prompt or an overloaded back
- know whether the fact matters to your goals
- make an unsustainable stream of new cards manageable by itself
- guarantee that you complete reviews when they are due

Suppose a card asks, “Explain the immune system.” Repeated Again ratings may produce more reviews, but no scheduler can turn that broad prompt into one clear retrieval task. The fix belongs in the card editor. The [guide to making better flashcards](/blog/how-to-make-better-flashcards/) covers that layer.

This boundary helps diagnose study problems. Strange long-term timing points toward settings, rating history, or implementation. Constant arguments with the back of the card point toward card quality. A huge queue may come from new-card intake rather than the FSRS algorithm itself.

## How Flashcards implements FSRS

> **Disclosure:** I am Kirill Markin, and I build [Flashcards Open Source App](/features/). This section describes released product behavior; it is not a claim that every learner should leave another app.

Flashcards currently implements **FSRS-6** by mirroring the official `ts-fsrs` 5.2.3 scheduling flow. It uses the standard Again, Hard, Good, and Easy ratings. The backend, iOS, and Android schedulers follow the same behavior, while the web review flow reuses the backend scheduler.

The current defaults are desired retention of `0.90`, learning steps of 1 and 10 minutes, a 10-minute relearning step, a 36,500-day maximum interval, and fuzz enabled. Workspace owners can adjust those settings. Changes affect future reviews only; existing due dates are not silently rebuilt.

Flashcards pins the official FSRS-6 default weights in v1. They are not user-configurable, and the product does not currently fit personalized FSRS parameters from each user's history. That limitation matters when comparing it with Anki's optimizer.

The public [Flashcards FSRS scheduling specification](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) documents the current state model, defaults, settings boundary, and cross-platform parity rules. The broader [features page](/features/) shows how the scheduler fits into the product rather than presenting FSRS as an app by itself.

## FAQ about FSRS

### What does FSRS stand for?

FSRS stands for **Free Spaced Repetition Scheduler**. It is an open scheduler for calculating when flashcards should return.

### Is FSRS only for Anki?

No. Anki includes an FSRS implementation, but FSRS is a scheduler that other apps and libraries can implement. Product features such as editing, sync, imports, and review UI come from the host app.

### Does FSRS know whether my answer is correct?

No. FSRS receives the rating recorded by the app. You still compare your answer with the card and decide whether the attempt was Again, Hard, Good, or Easy.

### Are Difficulty, Stability, and Retrievability all stored on a card?

Not necessarily. In FSRS-6, Difficulty and Stability form the carried memory state. Retrievability is calculated for a moment in time from Stability and elapsed time. An app may store additional scheduling fields for its own workflow.

### Does 90% desired retention mean I will remember 90% of everything?

No. It tells the scheduler to target a 90% predicted recall probability when cards become due. It is not a guarantee for every card, study session, exam, or real-world situation.

### Do I need optimized FSRS parameters?

Not to begin. FSRS can use default parameters. If your app supports optimization and you have useful review history, fitted parameters can reflect that history better. Do not copy another person's parameters.

### Is FSRS better than SM-2?

They use different scheduling models. FSRS adds an explicit retention target and updates a card-level memory model instead of relying on the same interval-and-ease-factor structure. The focused [FSRS vs SM-2 comparison](/blog/fsrs-vs-sm-2/) covers the evidence and tradeoffs without mixing them with app features.

### Which FSRS setting should I understand first?

Start with desired retention because it directly expresses the recall-versus-workload tradeoff. Then check learning and relearning steps. Leave model parameters alone unless your app provides a supported optimization workflow.

## Remember the handoff

The app shows the card. You judge the recall. FSRS updates Difficulty and Stability, calculates Retrievability for the current time, and chooses another review around desired retention. Learning steps handle short returns, and an optional optimizer can fit the model parameters to review history.

That handoff shows where to fix a problem. Adjust settings when workload or long-term timing feels wrong. Edit the card when the prompt or answer is wrong. Rate the attempt honestly when the review happens.

FSRS can choose a model-based date. The useful signal still starts with a clear card and the button you press.
