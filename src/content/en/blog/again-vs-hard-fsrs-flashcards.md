---
title: "Again vs Hard in FSRS (2026): Use the Four Flashcard Ratings"
description: "Learn when to press Again, Hard, Good, or Easy in FSRS-based flashcard apps. Use one honest recall rule and stop choosing buttons by the next interval."
date: "2026-07-17"
image: "/blog/again-vs-hard-fsrs-flashcards.png"
keywords:
  - "Again vs Hard FSRS"
  - "Anki Hard vs Again"
  - "Again Hard Good Easy"
  - "how to rate flashcards"
  - "FSRS ratings"
  - "when to press Again"
  - "when to press Hard"
  - "flashcard review ratings"
  - "two-button flashcard review"
---

You turn over a card and see the answer you could not produce five seconds ago. It looks completely familiar. `Again` feels harsh. `Hard` offers a less painful next interval. Your cursor starts negotiating.

The rule for **Again vs Hard in FSRS** is simple: decide whether recall failed or succeeded before you judge the effort. Choose Again when you could not recall the required answer or got it wrong. Choose Hard only when you recalled it correctly and the retrieval was seriously difficult.

Use the same two steps on every card:

1. Decide whether the answer was a failure or a success.
2. After a success, grade the effort as Hard, Good, or Easy.

This order keeps “almost knew it” from quietly becoming a pass.

![A hand choosing Again vs Hard in FSRS among the four flashcard ratings on a warm wooden desk](/blog/again-vs-hard-fsrs-flashcards.png)

## Again vs Hard in FSRS: failure first, effort second

The four ratings record two decisions: whether you remembered, then how difficult a successful recall felt.

| What happened before you revealed the answer? | Rating | Practical meaning |
| --- | --- | --- |
| You could not recall the required answer, or your answer was wrong | Again | Failed recall |
| You recalled it correctly after serious difficulty, doubt, or hesitation | Hard | Difficult successful recall |
| You recalled it correctly with ordinary mental effort | Good | Normal successful recall |
| You recalled it correctly with no meaningful effort | Easy | Effortless successful recall |

The official [Anki answer-button guide](https://docs.ankiweb.net/studying.html#answer-buttons) draws the same boundary: Again covers an incorrect or missing answer, while Hard is a correct answer recalled with doubt or delay. The [py-fsrs reference implementation](https://github.com/open-spaced-repetition/py-fsrs#quickstart) also defines Again as forgetting and the other three ratings as kinds of remembering.

## Again means the recall failed

Choose Again when the answer you produced was wrong, absent, or missing something required by the card.

Common Again moments include:

- “I do not know.”
- The correct answer appeared only after you revealed the back.
- You gave the opposite answer, wrong formula, wrong direction, or wrong condition.
- You needed a hint that was not already part of the card.
- You remembered only part of a card whose full answer was required.

Familiarity after the reveal does not change the attempt. Seeing `mitochondrial matrix` and thinking “of course” shows recognition now. The front asked whether you could retrieve it before seeing it.

The official [FSRS tutorial warns against pressing Hard after forgetting](https://github.com/open-spaced-repetition/fsrs4anki/blob/main/docs/tutorial.md), because FSRS treats Hard as successful recall. If the answer never arrived, Hard records the wrong result.

Again gives the scheduler useful data. The button records what happened; it is not a penalty for having a bad morning.

## Hard, Good, and Easy are all successful recall

Choose Hard when you produced the required answer and the retrieval was unusually difficult.

You might have:

- paused for a long time while the correct answer slowly came together
- felt strong doubt, then committed to the correct response before revealing it
- reconstructed the answer through several mental steps
- recalled the right distinction only after rejecting a tempting wrong one

The answer must still be correct. Hard does not mean “mostly wrong,” “recognized it afterward,” or “I want to see this sooner.”

**Good** is the normal successful rating. You recalled the answer with ordinary effort. You may have paused briefly or checked the wording in your head, but the retrieval was neither a struggle nor automatic.

**Easy** is for correct recall that felt effortless. The answer arrived cleanly, without meaningful hesitation.

There is no universal number of seconds that turns Good into Hard. A short vocabulary answer and a multi-step legal rule naturally take different amounts of time. FSRS does not turn your response time into a rating for you; the [official tutorial notes that review duration is not an FSRS scheduling input](https://github.com/open-spaced-repetition/fsrs4anki/blob/main/docs/tutorial.md#faq). Judge effort against the task written on the card.

If that judgment feels awkward every time, the card may be asking too much.

## Partial answers depend on what the card requires

Partial recall creates most of the honest edge cases. Start with the exact retrieval target written on the front.

Suppose the front says:

> Name the three branches of the celiac trunk.

You recall the left gastric and splenic arteries but miss the common hepatic artery. The card explicitly requires all three. This attempt failed, so choose Again.

Now suppose the front says:

> What does the celiac trunk supply?

You answer that it supplies the foregut, then reveal a back that says, “The foregut and its derivatives through three major branches.” If the card tests `foregut`, the extra wording may be explanation rather than required content. The attempt can pass.

The same principle works outside medicine:

- A language card tests meaning, and you use a valid synonym instead of the stored wording: usually a pass.
- A pronunciation card tests the stressed syllable, and you give the correct meaning with the wrong stress: failure for that card.
- A formula card requires the negative sign, and you omit it: failure.
- A history card asks for the main cause, and the back also includes an optional example: missing the example can still be a pass.

The [Anki manual's guidance for partial answers](https://docs.ankiweb.net/studying.html#answer-buttons) is practical: ask whether the response would count as a failure in the real context where you need the knowledge. A missing critical detail should usually produce Again. Missing nonessential wording can still pass, after which you grade the effort.

If you keep debating which details count, edit the card. A front with one clear target produces cleaner reviews than a private grading negotiation every morning. The broader [guide to making better flashcards](/blog/how-to-make-better-flashcards/) covers that repair work.

## A hint changes the attempt

A hint can help you learn, but it changes what you retrieved unaided.

If the front asks for the capital of Burkina Faso and you need “It starts with O” before recalling Ouagadougou, the original attempt failed. Choose Again when you record that review.

An intentional cue on the front is part of the card. If the front always includes a first letter, diagram, sentence context, or formula sheet, judge the answer with that cue present. You are grading the prompt you designed.

AI tutoring needs the same boundary. An AI can reveal a hint, compare text, or keep a session note. Its note is not an FSRS rating, and a fluent comparison does not prove that either answer is factually correct. [The AI flashcard tutor workflow](/blog/ai-flashcard-tutor-due-cards/) keeps first attempts separate from official reviews for this reason.

## Rate each attempt separately during relearning

After Again, a review card may return during the same session if the app uses a short relearning step. The delay depends on the app and its settings.

The [Anki relearning documentation](https://docs.ankiweb.net/deck-options.html#relearning-steps) calls Again on a review card a lapse. When relearning steps are configured, the failed card goes through them before returning to normal review.

Treat the return as a new attempt:

1. On the first appearance, you fail and choose Again.
2. The card returns after its configured relearning step.
3. You answer again before revealing the back.
4. If you now recall it correctly, choose Hard, Good, or Easy for that new attempt.

The first failure is already in the review history. A later success does not erase it, and the earlier failure does not force another Again. Each button records the attempt happening now.

Immediate success may feel suspicious because you saw the answer recently. That is normal during relearning. Grade the current attempt honestly and let the configured steps handle the short-term repetition.

## Do not choose a rating by the displayed interval

Many review screens show the next interval beside each button. The preview tells you what the scheduler would do after each rating. It is not a menu of dates.

The official [FSRS grading FAQ](https://github.com/open-spaced-repetition/fsrs4anki/blob/main/docs/tutorial.md#faq) says to choose the grade from how well you recalled the information and ignore the displayed intervals. Pressing Hard because Good looks “too far away” records a difficult success that did not happen. Avoiding Easy because its interval looks alarming also distorts the review history.

If the schedule consistently feels too aggressive or too busy, adjust the scheduling layer. Desired retention, relearning steps, and review load belong in settings and study planning; the [FSRS settings guide](/blog/fsrs-settings/) covers those tradeoffs.

The button should describe the answer. The scheduler can handle the date.

## Using only Again and Good is a valid simplification

Four buttons are useful when you can apply them consistently. There is no prize for turning every review into a tiny oral examination.

A two-button habit works like this:

- Again for every failed recall
- Good for every successful recall

Both the [Anki manual](https://docs.ankiweb.net/studying.html#answer-buttons) and the [FSRS tutorial](https://github.com/open-spaced-repetition/fsrs4anki/blob/main/docs/tutorial.md#faq) say Again/Good reviewing works. This approach records less detail about difficult and effortless successes. It may also give you a rule you can follow without hesitation.

Treat it as one valid simplification. Keep all four ratings if Hard and Easy describe real, repeatable differences in your reviews. Use Again and Good if the middle choices make you second-guess every card. The failure-versus-success boundary stays the same either way.

## Again vs Hard examples and edge cases

These examples apply the same rule while respecting the target written on each card.

| Review moment | Rating | Why |
| --- | --- | --- |
| For `abate`, you eventually say “to become less intense” after a serious struggle | Hard | The required meaning arrived correctly before the reveal |
| You cannot name the nerve that innervates the deltoid; `axillary nerve` feels obvious after the reveal | Again | Recognition after the reveal does not repair failed recall |
| You answer `to rush` for German `sich beeilen`, while the card tests meaning and stores `to hurry` | Hard, Good, or Easy | The synonym can satisfy the target; grade the effort next |
| You name duty, breach, and damages but omit causation from a card asking for all elements of negligence | Again | One required part of the list is missing |
| You correctly differentiate `x²eˣ` as `2xeˣ + x²eˣ` through a normal derivation | Usually Good | The expected work for this card matters more than raw speed |
| You answer “Golgi apparatus” only after an unplanned hint about flattened membrane stacks | Again | The original unaided attempt failed |
| You say the right concept and make a typing slip on a card that does not test spelling | Hard, Good, or Easy | The concept passed; grade effort according to the successful recall |

Typos show why scope matters. A typo can fail a spelling card and pass a concept card. Likewise, a slow derivation can be normal for mathematics and unusually difficult for a one-word fact. These examples are decisions about specific prompts, not universal grading laws.

## Repeated Again is a card-quality signal

Several honest Again ratings can mean the material is difficult. They can also expose a weak card.

Inspect a repeat offender when:

- the front accepts several reasonable answers
- the back contains several independent facts
- you understand the topic but cannot tell what the card wants
- two similar cards keep interfering
- the fact is too low-value to justify the review time

Rewrite, split, relearn, or remove the card instead of protecting it with Hard. The focused [leech-card cleanup guide](/blog/how-to-fix-leech-flashcards/) explains that workflow.

FSRS schedules the signal you give it. It cannot repair an unclear prompt, decide which missing detail mattered, or fact-check your spoken answer.

## How the four FSRS ratings fit Flashcards

[Flashcards Open Source App features](/features/) include front/back review with FSRS. You submit Again, Hard, Good, or Easy, and the backend uses that review to calculate the next due time.

Use the same two-step rule in that flow:

1. Compare what you produced with the required answer.
2. Record failure with Again, or grade successful recall as Hard, Good, or Easy.

The app records the rating you submit. You still compare your answer with the stored back and decide which rating fits. That human decision is why a clear card and a stable grading habit matter.

If you want to try the review flow, [open the app](https://app.flashcards-open-source-app.com/). The product supplies the four ratings and FSRS scheduling. Honest grading still belongs to you.

## FAQ about Again, Hard, Good, and Easy

### Is Hard a failed rating in FSRS?

No. Hard records successful recall with serious difficulty. Use Again when you failed to recall the required answer.

### What if I was almost correct?

Check the card's scope. Missing a critical fact, condition, sign, or required list item usually means Again. Different wording or a missing optional detail can still pass. Rewrite the card if the requirement is unclear.

### Should I press Again after a typo?

Only if spelling was part of the retrieval target. A typo can fail a spelling card and still pass a concept card. Grade the task written on the front.

### What if I guessed the correct answer?

Check what the card asks you to produce. A correct one-word answer can pass even if you felt doubtful; that doubt may make it Hard. If the card requires an explanation, calculation, or reason and you supplied only an unsupported guess, the required answer is incomplete.

### Should I choose Hard when Good shows a long interval?

No. Rate the retrieval you had, not the interval you want. Change settings or your study plan if the schedule needs adjustment.

### Can I use only Again and Good with FSRS?

Yes. Again for failures and Good for successes is a valid simplification. Four ratings add useful detail when you can apply them consistently.

### Does FSRS know whether my answer was factually correct?

No. FSRS schedules from the rating and review history. You still compare your answer with the stored back and, when accuracy matters, verify the card itself against a trusted source.

## Keep the Again vs Hard FSRS rule boring

The most reliable **Again vs Hard FSRS** habit is pleasantly boring: failure first, effort second.

Choose Again when the required answer did not arrive. For successful recall, use Hard when it was seriously difficult, Good when it took normal effort, and Easy when it was effortless. Judge partial answers by the card's real scope, count unplanned hints as help, and ignore the interval while choosing.

If four ratings create more debate than information, use Again and Good. If the same card keeps earning Again, inspect the card instead of softening the rating.

One honest button press gives FSRS a cleaner signal than ten seconds of bargaining with the schedule.
