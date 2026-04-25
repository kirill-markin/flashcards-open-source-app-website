---
title: "FSRS Settings in 2026: Desired Retention, Learning Steps, and Review Load Without Over-Tweaking"
description: "A practical 2026 guide to FSRS settings for flashcards: desired retention, learning steps, maximum interval, new-card limits, and when to stop tuning the scheduler."
date: "2026-04-25"
keywords:
  - "FSRS settings"
  - "Anki FSRS settings"
  - "desired retention FSRS"
  - "FSRS learning steps"
  - "best FSRS settings"
  - "FSRS review load"
  - "spaced repetition settings"
  - "FSRS flashcards"
---

The weirdest FSRS mistake is not setting retention too high or too low. It is spending three evenings tuning a scheduler for a deck where half the cards still ask questions like "Explain chapter 4."

I understand why it happens. Once people decide FSRS is better than SM-2, the next search is usually **FSRS settings** or **Anki FSRS settings**. The algorithm sounds serious, the settings look mathematical, and suddenly reviewing flashcards feels like configuring a production database.

It does not need to be that dramatic.

![Warm desk with flashcards, a small retention dial, and a calm evening study setup](/blog/fsrs-settings.png)

## FSRS settings are a workload decision, not a personality test

The biggest setting in FSRS is not really a memory setting.

It is a tradeoff setting.

When you raise desired retention, you are saying you want cards to come back earlier so you forget less often. That can be good. It also means more reviews. When you lower it, you accept more forgetting in exchange for a lighter queue.

That is not a moral question. It is an operating question.

If your daily review queue already feels heavy, raising retention because it sounds more serious can make the whole system worse. If you are preparing for a high-stakes exam and the deck is clean, a small increase can make sense.

The problem starts when people try to find the "best" FSRS setting without looking at their actual day.

## Start with desired retention

Desired retention is the setting most people should understand first.

In plain language, it tells the scheduler how likely you want to be to remember a card when it comes due. A desired retention of `0.90` means the system is aiming for about 90% recall at review time.

The [Anki manual](https://docs.ankiweb.net/deck-options.html#desired-retention) puts this tradeoff very directly: higher desired retention shortens intervals and increases reviews, and the workload rises quickly as the value gets close to 1.0.

That last part is the trap.

Going from 90% to 95% does not feel like a big change when you type it into a settings box. In daily life, it can feel like the app suddenly found a second job for you.

So I would start boring:

- use the default if your reviews are manageable
- lower the target only if the queue is clearly too heavy and forgetting is still acceptable
- raise it only when the material justifies the extra time
- change it slowly, then watch what happens

The goal is not to win the settings screen. The goal is to keep reviewing.

## Why 90 percent is a sane default, not a law

The default 90% target is a good center of gravity.

It is not a magic number.

For casual language learning, a slightly lower target may be fine if it keeps the habit alive. For medical, legal, finance, or certification material, you may want a bit more certainty, especially near an exam. For a messy deck full of weak AI-generated cards, raising retention often just makes you see bad cards more often.

That last one is painful but useful.

If a card is poorly written, FSRS settings cannot turn it into a good learning object. They can only decide when the bad card comes back.

Before moving retention upward, I would ask a simpler question: would this deck get better if I deleted 15% of it?

Often yes.

## Do not copy someone else's FSRS parameters

Desired retention is meant to be chosen by you.

FSRS parameters are not.

The point of optimizing parameters is that the scheduler can learn from your review history. Copying another learner's parameters because they posted a nice screenshot defeats the point. Their cards, recall habits, deck maturity, and answer-button behavior are not yours.

The [FSRS optimal retention documentation](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) is useful because it frames retention as a balance between knowledge and workload, not as a number to borrow from a stranger.

The practical version is simple:

- do not manually edit FSRS parameters unless you know exactly why
- do not paste parameters from a forum post
- optimize from your own review history when the tool supports it
- treat parameter tuning as maintenance, not entertainment

This is one of those places where doing less is genuinely more professional.

## Keep learning steps boring

Learning steps are where many people keep old SM-2 habits alive.

They add long chains like `1m 10m 1d 3d` because it feels careful. With FSRS, that can get awkward. The scheduler is supposed to take over long-term timing after the first learning phase. If your learning steps stretch across days, you are delaying the part of the system you switched to FSRS for.

The Anki manual recommends keeping learning and relearning steps shorter than one day when using FSRS, and keeping the number of steps minimal.

That is good advice.

For most decks, I would rather keep learning steps short and spend the saved time improving cards:

- split overloaded prompts
- shorten long answers
- turn recognition cards into recall cards
- delete cards that exist only because AI generated them politely

The scheduler works better when the card itself is worth scheduling.

## Be careful with maximum interval

Maximum interval looks harmless because it feels like a safety limit.

It can also quietly create extra work.

If you cap intervals too aggressively, mature cards keep returning even when FSRS would have pushed them farther out. That may be useful for a narrow exam window or for facts you truly want to keep warm. It is usually not useful as a general anxiety setting.

A very short maximum interval turns spaced repetition into something closer to repeated checking.

That is expensive.

I would only lower maximum interval when there is a real reason:

- the exam date is close
- the material expires or changes
- the deck is for critical operational knowledge
- you have measured the workload and can afford it

Otherwise, let easy mature cards stay away long enough to make room for the cards that actually need you.

## Use new-card limits before you blame FSRS

Most review-load problems are intake problems.

The scheduler gets blamed because it is the part that shows up every morning with the bill. But the bill usually came from yesterday's new cards, last week's import, or the 300-card AI batch that looked efficient for about twelve minutes.

If reviews are too high, I would check these before touching FSRS settings:

- how many new cards you add per day
- how many cards you generated but never edited
- how many cards test multiple facts at once
- how many stale cards should be suspended or deleted

This pairs with a more general planning question:

- [How Many New Flashcards Per Day in 2026?](https://flashcards-open-source-app.com/blog/how-many-new-flashcards-per-day/)

FSRS can schedule a good deck more calmly. It cannot make an oversized deck small.

## What I would change for exams

Exam decks are different because the date is real.

If the exam is close, the best FSRS setting is not always the one that would make sense for a long-term language deck. You may accept a heavier workload for a few weeks because the material matters now.

I would still avoid heroic settings.

For exams, I would change the workflow before I change the algorithm:

1. stop adding new cards earlier than feels comfortable
2. keep desired retention near the normal range unless the deck is clean
3. use tags or filtered review for weak topics
4. raise workload only when the calendar can actually absorb it
5. protect the final week from giant imports

This longer guide fits that scenario better:

- [How to Study for an Exam With FSRS in 2026](https://flashcards-open-source-app.com/blog/how-to-study-for-an-exam-with-fsrs/)

The short version: exams justify stricter review. They do not justify chaos.

## Where Flashcards fits this setup

[Flashcards](https://flashcards-open-source-app.com/) treats FSRS as part of the product contract, not as a badge on a landing page.

The current product direction already matches the settings that matter for serious review:

- front/back cards instead of vague note blobs
- AI-assisted drafting, with the expectation that you still edit
- FSRS scheduling for the actual review loop
- workspace-level settings such as desired retention, learning steps, relearning steps, maximum interval, and fuzz
- hosted web app plus open-source code for people who care how the system works

That last part matters for FSRS-heavy users.

If you care enough to search **best FSRS settings**, you probably also care whether the product is hiding the scheduler behind vague marketing words. I would rather use a tool that makes the review model part of the product's real design.

## A simple FSRS settings checklist

If I were setting up a new deck today, I would keep the checklist short:

| Setting | Practical default | When to revisit it |
|---|---|---|
| Desired retention | Start around the normal default | Reviews are too heavy, or the material needs higher recall |
| FSRS parameters | Optimize from your own history | You have enough review history and the tool supports it |
| Learning steps | Keep them short and minimal | Same-day learning feels too rushed or too repetitive |
| Relearning steps | Keep them simple | Failed mature cards keep returning in an unhelpful rhythm |
| Maximum interval | Leave generous unless there is a reason | Exam windows, critical knowledge, or measured retention gaps |
| New cards/day | Set lower than your ambition | Daily reviews are crowding out real life |

Not glamorous.

Useful.

## The best FSRS setting is the one you can keep reviewing

People usually search **FSRS settings** because they want the algorithm to be precise.

That is reasonable. FSRS is better than older scheduling when the implementation is done well and the deck is not a mess. But the practical win does not come from endless tuning. It comes from making a few calm choices, then letting the scheduler do its job while you improve the cards.

Use desired retention as a workload lever.

Keep learning steps short.

Do not copy parameters.

Control new cards before blaming the scheduler.

And if the whole thing still feels heavy, the answer may not be another settings change. It may be a smaller, cleaner deck.

## Try FSRS without turning studying into settings maintenance

If you want to try that workflow:

- [Open Flashcards](https://flashcards-open-source-app.com/)
- [Open the app](https://app.flashcards-open-source-app.com/)
- [Read the features page](https://flashcards-open-source-app.com/features/)
- [Compare FSRS and SM-2](https://flashcards-open-source-app.com/blog/fsrs-vs-sm-2/)
- [View the source on GitHub](https://github.com/kirill-markin/flashcards-open-source-app)
