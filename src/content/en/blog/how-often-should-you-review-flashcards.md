---
title: "How Often Should You Review Flashcards? Let FSRS Set the Schedule"
description: "Check due cards daily—not every card daily. Learn how FSRS adapts review intervals to your recall, target retention, and sustainable workload."
date: "2026-07-19"
image: "/blog/how-often-should-you-review-flashcards.png"
keywords:
  - "how often should you review flashcards"
  - "should I review flashcards every day"
  - "best flashcard review schedule"
  - "spaced repetition schedule"
  - "1 3 7 flashcard schedule"
  - "FSRS review schedule"
  - "when to review flashcards"
  - "daily flashcard reviews"
  - "flashcard review intervals"
---

At 7:40 on Monday morning, you open a 600-card deck before work and find 23 cards due. **How often should you review flashcards?** Check the due queue daily when practical, but do not review every card every day. Review the 23 cards that are due, then stop. Let each card’s next interval expand or contract from how well you actually recalled it.

![A learner checking how often to review flashcards with the daily FSRS due queue](/blog/how-often-should-you-review-flashcards.png)

That small distinction removes most of the confusion. “Daily” describes the habit of checking the queue. It does not mean every card belongs in every session.

## Should I review flashcards every day?

A daily check-in is useful because due cards get a predictable place in your routine. Individual cards still follow separate calendars.

On a normal day:

- open the review queue
- answer the cards that are due
- add new cards only if your plan has room for them
- leave future cards alone
- close the app when the queue is clear

Some days that may take a short coffee break. Other days will be heavier because you recently added material or several difficult cards returned together. The goal is a routine you can reopen tomorrow, not a heroic session that makes you avoid the deck for three days.

If daily review is impossible, choose the most frequent rhythm you can sustain. Reviewing on weekdays, for example, still gives the scheduler real recall data. You will have more overdue cards after a weekend, and some intervals will be less tidy, but the system has not become useless. A reliable five-day habit beats a theoretical seven-day plan you keep abandoning.

## Why the 1-3-7 flashcard schedule is not universal

The `1-3-7-14` recipe is easy to remember: review after one day, then three, seven, and fourteen. It can be a reasonable manual scaffold when all you have is paper and a calendar. It is not a universal memory timetable.

Consider two cards introduced together. One asks for a familiar Spanish word that you recall immediately. The other asks you to distinguish two similar biochemical pathways, and you fail it twice. Giving both cards the same next four dates ignores the evidence you just produced.

The date when you need the knowledge also matters. In a 2008 experiment with more than 1,350 participants, the spacing gap associated with the best test performance changed with the delay before the final test. Longer retention intervals called for different gaps; the study did not uncover one calendar that works for every goal ([Cepeda et al., 2008](https://escholarship.org/uc/item/0kp5q19x)).

So a fixed **1-3-7 flashcard schedule** is better treated as a starting rule for a manual system. Software can make a more specific decision for each card without asking you to maintain hundreds of dates.

## How FSRS sets the next review interval

FSRS is a spaced-repetition scheduler. After a review, it updates a model of that card’s memory state and calculates another interval. You provide the useful signal by attempting the answer before revealing it and then choosing Again, Hard, Good, or Easy honestly.

In Flashcards Open Source App, the current scheduler is FSRS-6 and the default desired retention is `0.90`. Long-term intervals use the card’s current stability, the elapsed calendar days since its last review, target retention, the maximum interval, and deterministic fuzz. New and failed cards can also pass through short learning or relearning steps before entering or returning to long-term review. Those are product-specific facts documented in the public [FSRS scheduling source of truth](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

In plain English:

- a clean successful recall can support a longer gap
- a difficult success usually earns less expansion
- a failed mature card returns through relearning, while a failed new card stays in learning
- repeated history gives the scheduler more information than a single generic calendar

FSRS does not inspect your thoughts or fact-check the answer. It receives the rating you submit. It also does not know the exact moment you would otherwise forget a fact. The interval is a model-based scheduling decision toward a retention target, not a promise about what your brain will do at 3:15 next Thursday.

If the line between Again and Hard keeps causing trouble, use the fuller guide to [Again, Hard, Good, and Easy](/blog/again-vs-hard-fsrs-flashcards/). Choosing a more convenient interval instead of the truthful rating gives the scheduler a false signal.

## Different cards should move at different speeds

An adaptive schedule becomes easier to trust when you look at cards as separate histories rather than one deck-wide plan.

| What happened during review | Honest signal | Likely scheduling direction |
| --- | --- | --- |
| A common word came back immediately and confidently | Easy | Let the interval expand more |
| You derived the right formula with ordinary effort | Good | Continue normal interval growth |
| You separated two similar concepts correctly after a real struggle | Hard | Use a more cautious successful interval |
| The name would not come until you revealed the back | Again | Record the failure and relearn sooner |

These are directions, not promised day counts. The same Good rating can produce different intervals for two cards because their stability, elapsed time, and earlier reviews differ.

Card design matters too. A vague prompt that asks for five facts at once will collect messy ratings no matter how clever the scheduler is. Split overloaded cards, remove low-value details, and keep the required answer clear. FSRS schedules the card you made; it cannot quietly rewrite it into a better one.

## What a daily due-queue habit looks like

Attach the review to a cue that already exists: the first coffee, a train ride, lunch, or the moment you open your laptop. The exact hour matters less than making the check predictable.

A useful session has five parts:

1. Start with due reviews before opening a batch of new cards.
2. Read the front and make a real retrieval attempt.
3. Reveal the back only after you have committed to an answer.
4. Rate the attempt, not the interval you wish you had.
5. Stop when the due queue is empty.

That fourth step is where a schedule either stays informative or turns into theatre. Pressing Hard after a failure because Again returns too soon records a success that did not happen. Pressing Easy to make an annoying card disappear does the same damage in the other direction.

You also do not need to race. A calm, focused review is usually faster than checking every answer twice and negotiating with every button. If the queue routinely consumes more time than you have, the [guide to reviewing flashcards faster](/blog/how-to-review-flashcards-faster/) covers card cleanup and session friction in more detail.

The review itself should use active recall. Reading the front and thinking “yes, I know that” is recognition, not a retrieval attempt. The distinction between the scheduling system and the mental work is explained in [active recall vs spaced repetition](/blog/active-recall-vs-spaced-repetition/).

## What should you do when nothing is due?

You are allowed to be finished.

An empty due queue means the scheduler has no review due at that moment. You do not need to browse future cards until studying feels sufficiently serious. Repeatedly pulling them forward spends time on earlier, often easier retrievals and replaces part of the adaptive schedule with extra repetitions you chose yourself.

If you still have study time, use it deliberately:

- learn the source material before turning it into cards
- edit a confusing card you noticed earlier
- add a small planned batch of new cards
- practice applying the knowledge in problems, conversation, or writing
- stop and use the time elsewhere

There are valid reasons to study beyond the due queue. An exam may need targeted practice. A presentation tomorrow may justify a rehearsal. You may also want a short learning session with new cards. Name that activity for what it is instead of pretending every extra pass was required by spaced repetition.

## Missed days and backlogs change the workload

A due date is not an expiration date. If you miss Tuesday, open the deck on Wednesday and review what is overdue. Late long-term review cards use the extra elapsed calendar days and your new rating in the next FSRS update. Learning and relearning cards stay on their short-term path even when answered later, and the next due time starts from when you actually review them. This behavior is documented in the [scheduler specification](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

One missed day rarely calls for a special rescue plan. Do the due cards, rate them normally, and continue. Do not reset the deck or mark cards Easy just to make the number fall faster.

A large backlog needs a different workload plan:

- pause new cards so the queue stops receiving fresh demand
- choose a daily amount you can repeat
- work through the due queue the app presents
- rewrite or remove cards that keep wasting time
- keep ratings honest even when progress feels slow

The scheduler can adapt after late reviews, but it cannot make an hour of overdue work fit into ten minutes. Nor can it guarantee that every forgotten card will recover on the same timeline. If several missed days have turned into a wall of reviews, use the dedicated [flashcard backlog recovery plan](/blog/how-to-catch-up-on-flashcards-after-falling-behind/) rather than trying to clear everything in one night.

## An exam deadline changes the planning

Long-term spaced repetition assumes there will be a later date. An exam gives the deck a hard boundary.

Work backward from test day. Introduce important cards early enough to produce useful review history, slow or stop new-card intake before the final days, and keep completing due reviews. Near the exam, add targeted practice for weak topics and any material the normal queue would not show again before the test.

That extra practice is deadline-driven cramming layered on top of the schedule. It may be entirely sensible. Keep it separate from rating manipulation: a failed answer remains Again even when you dislike the short interval, and an easy answer does not become Hard because you want another look tomorrow.

Desired retention can also affect workload, but changing a setting late is not a time machine. Under Flashcards' [forward-only settings contract](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md), workspace changes affect future reviews only; changing desired retention does not recalculate existing due dates. The full [FSRS exam-planning guide](/blog/how-to-study-for-an-exam-with-fsrs/) covers the intake, stabilization, and final-review phases without turning this article into a second exam guide.

## Paper flashcards need a manual approximation

Paper cards cannot calculate a memory state or quietly move their own due dates. You have to supply the queue.

A simple box system is enough:

- keep new and failed cards in a frequent-review box
- move successful cards into progressively less frequent boxes
- bring a card closer when recall fails
- move it farther away after repeated clean recall
- write the next review date on a divider or calendar

This is where a fixed recipe such as 1-3-7-14 can be convenient. Use it as the initial spacing for your boxes, then change course when the evidence disagrees. A stubborn card can return sooner. A stable card can move farther out. You do not gain anything by reviewing the entire physical stack every evening.

Paper has useful qualities: no device, no account, and easy sketching. The tradeoff is administrative work. You must track missed dates, decide which pile is due, and apply your promotion rule consistently. An app earns its place by handling that bookkeeping, not by changing the basic job of retrieving an answer.

## Desired retention and new cards shape the schedule

The **best flashcard review schedule** is partly a workload choice. Desired retention tells an FSRS scheduler how likely you want a card to be recalled when it comes due. A higher target generally creates shorter intervals and more reviews, as the official [Anki FSRS manual](https://docs.ankiweb.net/deck-options.html#fsrs) explains.

The manual describes `0.90` as Anki's default and warns that workload rises quickly as desired retention approaches `1.0`. That is useful general FSRS context, not a claim that every Anki option exists in Flashcards. For this product's defaults and boundaries, use the [Flashcards scheduler document](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

A `0.90` target does not mean “review each card every ten days,” and it does not guarantee that exactly 90% of every small session will be correct. It guides interval calculation from the card’s current memory estimate.

Before raising retention because the schedule feels too relaxed, check the rest of the system:

- Can your normal week carry more reviews?
- Are you adding cards faster than you can maintain them?
- Are failures caused by spacing, or by unclear cards and weak understanding?
- Is the higher target temporary for an exam or permanent?

The [FSRS settings guide](/blog/fsrs-settings/) goes deeper on that tradeoff. If reviews are already growing, adjust intake first with a sustainable [new-cards-per-day limit](/blog/how-many-new-flashcards-per-day/).

## What the research can and cannot tell you

Research gives strong reasons to space retrieval, but it does not hand every learner one perfect sequence of dates.

[Cepeda and colleagues](https://escholarship.org/uc/item/0kp5q19x) showed that the useful gap changed with the intended retention interval. Their experiment involved learning facts, one later review, and a final test; it supports adapting spacing to the time horizon, not treating `1-3-7-14` as a universal law. It did not test FSRS-6 or this app.

A 2026 systematic review in medical education included 14 studies, with 13 studies and 21,415 learners in the meta-analysis. The pooled result favored spaced repetition over standard study on objective tests, but the interventions were mixed: flashcards, emailed multiple-choice questions, and classroom quizzes. The authors explicitly called for more work on intervention design and longer-term outcomes ([Maye & Hurley, 2026](https://doi.org/10.1111/tct.70353)).

That boundary matters. The review supports spaced repetition in medical-education settings. It does not establish one best interval, prove that every flashcard app produces the same result, or show that scheduling can rescue inaccurate cards and distracted reviews.

Use the evidence for the broad decision: distribute real retrieval attempts over time. Use your card history, goal, and available workload for the practical schedule.

## Let the due queue stay pleasantly boring

The answer to **how often should you review flashcards** is simple enough to survive a busy week: check the due queue daily when practical, review what is due, and leave the rest of the deck alone.

Let easy, stable cards move away. Let difficult cards return more cautiously. Record failures honestly. When nothing is due, stop or do a clearly separate learning activity. When life interrupts, return to the overdue queue without resetting your history.

FSRS handles the dates; you handle the recall. If you want that schedule without maintaining a paper calendar, see the [Flashcards features](/features/) and [getting-started guide](/docs/getting-started/). The useful routine is not complicated: open, retrieve, rate, close, come back tomorrow.
