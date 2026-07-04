---
title: "Why Are There So Many Anki Reviews in 2026? Fix Review Spikes Without Quitting Spaced Repetition"
description: "Seeing far more Anki reviews than you expected? Here is a practical 2026 guide to why review counts spike with FSRS, new-card limits, learning steps, and retention settings, plus how to bring the queue back under control without resetting your deck."
date: "2026-07-04"
image: "/blog/why-are-there-so-many-anki-reviews.png"
keywords:
  - "why are there so many anki reviews"
  - "too many reviews anki"
  - "anki more reviews than expected"
  - "fsrs too many reviews"
  - "anki review spikes"
  - "desired retention anki"
  - "new cards and reviews anki"
  - "how to lower anki reviews"
---

Last Tuesday a deck that usually gives me about 140 reviews showed up with 487. Same deck. Same subject. Same phone. The only thing that changed was my expression.

That is usually when people start searching **why are there so many Anki reviews**, **too many reviews Anki**, or **Anki more reviews than expected**.

The annoying part is that the spike often feels random. You did not import 5,000 cards that morning. You just changed a few settings, started using FSRS, had one productive week adding cards, or missed a couple of days. Then the bill arrived.

Usually there is a real reason for the spike. Usually you can fix it without resetting the deck.

![Warm desk scene with a hand sorting flashcards after an Anki review-count spike](/blog/why-are-there-so-many-anki-reviews.png)

## Why this got worse in 2026

Two things changed.

More people are using FSRS now, which is good. It is a better scheduler than the old default for many learners, and it gives you a real workload lever through desired retention.

At the same time, card creation got much cheaper. AI can turn notes, slides, transcripts, PDFs, and random study material into a big batch of plausible cards before you have had time to ask whether you want to review all of them next week.

That combination creates the same story over and over:

- intake goes up
- early reviews still feel manageable
- the queue swells a few days later
- FSRS gets blamed for a problem that often started at intake

Sometimes FSRS really did make the queue heavier. Often it just exposed a workload that was already on the way.

## Start with one question: what changed in the last week?

Before you touch settings, look backward.

Most review spikes come from one recent change:

- you raised new cards
- you imported or generated a batch
- you changed learning or relearning steps
- you raised desired retention
- you missed a few days
- you kept a lot of weak cards that should have been cleaned up earlier

That sounds obvious, but it prevents the classic bad reaction: changing six things in one sitting and learning nothing from it.

## The queue tells you which problem you have

Do not diagnose from the headline number alone. Look at what kind of cards exploded.

| If the spike is mostly... | The usual cause | First place to look |
| --- | --- | --- |
| New and learning cards | Intake or step churn | New-card limit and learning steps |
| Young review cards | You added too much recently | Intake from the last few days |
| Mature cards returning sooner than expected | Retention target or FSRS expectations | Desired retention and deck quality |
| Overdue cards after missed days | Backlog | Recovery plan, not scheduler tuning |

That distinction matters.

If the queue is mostly overdue because you stopped reviewing for a while, go read [How to Catch Up on Flashcards After Falling Behind in 2026](/blog/how-to-catch-up-on-flashcards-after-falling-behind/). That is a backlog problem. This article is for the version where you kept using the deck and the review count still got weird.

## The most common cause is still simple: too many new cards

This is the boring answer behind a lot of **new cards and reviews Anki** searches.

New cards are not one-time work. They create:

- the first learning pass
- short-term repeats
- young reviews over the next few days
- a larger steady-state queue later if you keep the same intake rate

The Anki manual says this pretty plainly: if you keep learning 20 new cards a day, you can expect roughly 200 reviews a day once things settle, and fewer new cards is the direct way to reduce the burden. That explanation is in the [new cards/day section of the manual](https://docs.ankiweb.net/deck-options.html#new-cardsday).

That is why a deck can look calm on Monday and rude by Friday. The cost lands later.

This also shows up in real user reports. In [this Anki forum thread about more reviews than expected with new card settings](https://forums.ankiweb.net/t/many-more-reviews-than-expected-with-new-card-settings/62292), the problem was not a mystery bug. The review consequences of the intake rate were just bigger than the learner expected.

If you raised new cards recently, start there. If you need a cleaner rule for sustainable intake, [How Many New Flashcards Per Day in 2026](/blog/how-many-new-flashcards-per-day/) goes deeper.

## FSRS gets blamed for learning-step churn all the time

Sometimes the spike is not really about long-term scheduling. It is about cards looping around in learning or relearning and eating the day before they ever become normal reviews.

The Anki manual recommends keeping FSRS learning and relearning steps shorter than one day, and it explicitly says long `(re)learning` steps are not recommended with FSRS because they get in the way of the scheduler and create awkward timing. That guidance is in the [FSRS section of the deck options manual](https://docs.ankiweb.net/deck-options.html#fsrs).

So if your steps look dramatic, or if you keep failing fuzzy cards that should probably be rewritten, the deck can feel like it is spamming you even though the real issue is short-loop churn.

This is one reason people say **FSRS too many reviews** when the problem is actually upstream from FSRS.

## Desired retention is a workload dial

This is the part many people underestimate after switching to FSRS.

Higher desired retention means the scheduler aims to bring cards back sooner so you are more likely to remember them when they appear. That can be useful. It also means more reviews.

The [desired retention section in the Anki manual](https://docs.ankiweb.net/deck-options.html#desired-retention) says that higher retention shortens intervals and increases reviews. The FSRS wiki on [optimal retention](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) makes the same point from the workload side.

Typing `0.95` instead of `0.90` feels like a tiny change.

Living with the difference often does not.

So if your question is really **desired retention Anki**, and the queue got heavier right after you changed that setting, the app is not behaving randomly. It is doing the work you asked for.

If you want a full guide to the settings layer, read [FSRS Settings in 2026](/blog/fsrs-settings/). That article is about tuning. This one is about diagnosing the spike before you start tuning.

## "FSRS is showing cards too often" can mean several different things

There is a recent Anki forum thread called [FSRS 6 - Seeing cards too Often](https://forums.ankiweb.net/t/fsrs-6-seeing-cards-too-often/60745), and the complaint is familiar: a learner feels like cards marked `Good` are coming back much sooner than expected.

Sometimes that means:

- desired retention is set higher than the learner's real schedule can comfortably support
- learning steps are still doing too much work
- the deck contains too many weak or duplicate cards
- expectations were shaped by older scheduling behavior rather than by what the material actually needs

FSRS is not magic. It is just a scheduler. If you give it a bloated deck and a high retention target, it will schedule that bloated deck very professionally.

## Anki will not automatically save you from an aggressive intake rate

Many learners want something like this:

"If today already has 250 reviews due, stop showing me new cards automatically."

Reasonable idea. Not standard Anki behavior out of the box.

There is a whole forum discussion asking for a [dynamic daily new card limit based on total daily reviews count](https://forums.ankiweb.net/t/dynamic-daily-new-card-limit-based-on-total-daily-reviews-count/65120). People keep asking for that because the default workflow does not tightly link intake to daily capacity.

So if the queue keeps spiking, one practical fix is still the unglamorous one:

- lower the new-card cap
- hold it steady for a week or two
- raise it only after the queue proves it can handle it

That forum discussion on [how many new cards to add each week](https://forums.ankiweb.net/t/how-to-judge-how-many-new-cards-i-should-be-adding-each-week/66159) lands in the same place: the right number depends on your review time, subject difficulty, and whether the cards are actually clean.

## Some review spikes are really bad-card spikes

This gets missed because the due count looks like a settings problem.

Bad cards increase workload in two ways:

- they take longer to answer
- they get failed more often, so they come back sooner

That means one vague card does not only waste time once. It keeps sending invoices.

I would look hard at the deck if you keep seeing:

- cards testing multiple facts at once
- answers long enough to negotiate with
- duplicate AI-generated cards
- cards you never understood well enough before memorizing
- tiny details that are not worth their future review cost

If that sounds more like your situation, [How to Prune a Flashcard Deck in 2026](/blog/how-to-prune-a-flashcard-deck/) is probably the better next read.

## A five-minute diagnostic for Anki review spikes

If I had to debug **Anki review spikes** quickly, I would use this table:

| Symptom | Most likely cause | First fix |
| --- | --- | --- |
| Due count jumped a few days after raising new cards | Intake outran review capacity | Lower new cards and leave them there |
| Learning and relearning counts are bloated | Step churn or weak cards | Shorten steps and fix bad cards |
| Mature cards feel too frequent after switching to FSRS | Desired retention is too high, or expectations are off | Lower retention slightly and observe |
| One missed stretch created a giant pile | Backlog | Pause new cards and recover steadily |
| Review time feels awful even when the due count is moderate | Card quality problem | Rewrite, suspend, or delete weak cards |

Notice what is missing from the first-fix column.

Not "reset the deck."

That is usually the expensive mistake.

## How to lower Anki reviews without resetting the deck

If your real search is **how to lower Anki reviews**, I would do the fixes in this order.

### 1. Lower new cards first

This reduces future pressure without erasing scheduling history.

For some overloaded decks, setting new cards to zero for a few days is not dramatic. It is maintenance.

### 2. Keep learning and relearning steps short

With FSRS, long step ladders often create more churn than value.

### 3. Adjust desired retention only after intake is under control

Retention is a real workload lever. It is just not the first lever I would pull.

### 4. Remove cards that keep wasting time

Delete low-value cards. Suspend non-priority material. Rewrite important cards that are badly written.

### 5. Separate backlog recovery from normal tuning

If the spike happened because you missed days, treat it as backlog recovery instead of as a pure settings issue.

## The right fix depends on which number hurts

This sounds small, but it keeps the work honest.

If the painful number is:

- **reviews due**, lower intake and possibly retention
- **learning count**, clean up steps and weak cards
- **time spent per session**, improve card quality and review flow

That last case is common. Some people do not actually have too many reviews. They have reviews that are too slow and too annoying. If that is you, [How to Review Flashcards Faster in 2026](/blog/how-to-review-flashcards-faster/) will help more than another round of scheduler tweaks.

## Where Flashcards fits without pretending to be magic

[Flashcards features](/features/) are useful here for one practical reason: the product covers the part before review and the part during review.

That matters because a lot of review spikes start before the first review day. They start when too many cards enter the live deck, or when AI-generated drafts are accepted without enough editing.

Flashcards can help with the boring parts that matter:

- draft cards from source material
- edit front/back cards before they become permanent review debt
- review with FSRS once the deck is worth scheduling

That is useful. It is not a promise that software can cancel workload math. If you feed any spaced repetition system more cards than your week can support, the queue eventually pushes back.

## The fix is usually less dramatic than the spike

When people search **why are there so many Anki reviews**, they are often bracing for some hidden technical answer.

Usually the answer is more ordinary:

- you added cards faster than your schedule could carry
- your learning steps are causing extra churn
- your retention target is asking for more work than you want
- your deck contains cards that should have been cleaned up earlier

Annoying, yes. Mysterious, usually no.

Do the boring diagnosis first.

Lower new cards before you panic.

Keep learning steps short.

Treat desired retention like a workload dial.

Delete weak cards faster.

And do not reset the deck unless the deck itself is genuinely broken. Most review spikes are not a reason to start over. They are a reason to tighten the system you already have.
