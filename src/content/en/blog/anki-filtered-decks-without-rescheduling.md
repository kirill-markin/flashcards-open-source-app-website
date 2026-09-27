---
title: "Anki Filtered Decks: Extra Practice Without Changing Due Dates"
description: "Use Anki filtered decks for a short extra practice session, check your card selection, and return cards without changing their scheduled due dates."
date: "2026-09-27"
image: "/blog/anki-filtered-decks-without-rescheduling.png"
keywords:
  - "Anki filtered decks"
  - "Anki without rescheduling"
  - "Anki custom study"
  - "Anki preview mode"
  - "filtered deck rebuild"
---

Your exam includes one topic you want to practise again tonight, even though its cards aren't due yet. You want a short rehearsal and then tomorrow's normal routine. Anki filtered decks can do that: turn off **Reschedule cards based on my answers** to use preview mode and preserve the cards' original scheduling when they return home. [Anki's manual documents this setting](https://docs.ankiweb.net/filtered-decks.html#rescheduling).

Use this for extra practice when preserving due dates is the point. Keep ordinary due reviews in your normal routine. An unchanged due date doesn't prove that a session is invisible to every statistic, review-history view, or FSRS process.

These desktop instructions were checked against official documentation on September 27, 2026. The biology example below is a proposed rehearsal, not a report of a hands-on app test.

![A gardener inspects a potted seedling above a tray with empty slots, with two other pots waiting beside it](/blog/anki-filtered-decks-without-rescheduling.png)

## Find a small set worth practising

Imagine a deck named **Biology 101**, with an existing **cell-division** tag. Open **Browse** and try:

```text
deck:"Biology 101" tag:cell-division is:review -is:learn prop:due>=1
```

Replace the deck and tag names with yours. Spaces join conditions with AND; quotes keep the deck name together. The deck term includes subdecks. `is:review -is:learn` selects review cards outside learning or relearning, and `prop:due>=1` restricts them to tomorrow or later. Remove that last term if you also want today's or overdue cards. See [Anki's search documentation](https://docs.ankiweb.net/searching.html).

For this first rehearsal, narrow the search until it shows **one to three cards**. An existing, more specific tag or an extra word from your cards can help. For example, append `anaphase` and inspect the results. The search matches note content, so check the actual questions rather than assuming every result tests the same thing.

Choose a concrete purpose: “distinguish chromosome alignment from separation” gives you something to check after practice. “Review biology” doesn't tell you when to stop.

## Save the starting dates before Build

In the browser, switch to **Cards** mode. Show **Question**, **Card**, **Deck**, and **Due** using the column-heading menu. Notes mode can combine several cards; this comparison needs individual cards. The [browser manual explains the columns](https://docs.ankiweb.net/browsing.html#columns).

Record **every matching card** before creating the filtered deck. With at most three matches, you won't need to guess which cards Anki will pick when due dates are tied. Copy each question, its card type or direction, home deck, and due date. Use this worksheet, replacing the imaginary questions with your own:

| Question, card type, and home deck | Due before Build | Due after return | Gap found during practice |
| --- | --- | --- | --- |
| Chromosomes line up at which stage? / Card 1 / Biology 101 | Copy date | Compare later | |
| What separates during anaphase? / Card 1 / Biology 101 | Copy date | Compare later | |
| How does cytokinesis differ from mitosis? / Card 1 / Biology 101 | Copy date | Compare later | |

Delete unused rows. If two cards are still hard to distinguish, choose a clearer small set before continuing. This is a quick rehearsal; there's no need to document a whole chapter.

## Build, practise, and return the cards

Open **Tools → Create Filtered Deck**. Name it **Cell division rehearsal**, paste the exact search you just checked, set the limit to **3**, and choose **Order due**. Disable rescheduling, then click **Build**. Anki temporarily gathers eligible cards according to the search, limit, and order. Custom Study offers presets too.

Preview mode has four buttons. **Again**, **Hard**, and **Good** use configurable delays; **Easy** returns a card home. Check the delays before answering. [The filtered-deck manual describes these controls](https://docs.ankiweb.net/filtered-decks.html#steps--returning).

Try to answer before revealing the back. Write down a specific gap, such as “confused chromosome alignment with separation.” Once you've practised the small set, use **Empty** to return any remaining cards. It keeps the filtered deck available. **Rebuild** runs its selection again, so it can bring back cards you've already practised.

Back in Browse, find the recorded cards in their home decks and compare their due dates. Make this comparison in the same sitting, before ordinary reviews or manual scheduling changes. Your worksheet should now answer two useful questions: did the dates stay the same, and what needs more work?

## When the result needs a closer look

| What you notice | What to check |
| --- | --- |
| Fewer cards arrived than Browse showed | Filtered decks exclude suspended, buried, and other filtered-deck cards. Don't unhide cards just to reach three; [bury and suspend have different purposes](/blog/anki-bury-vs-suspend/). |
| The same question appears again | Check the preview delay and whether you used Rebuild. Judge scheduling by the date after return. |
| A date looks different | Confirm the card is home, then match its question, card type, and date display to your worksheet. |
| The difference remains | Check the rescheduling setting and **Cards → Info** history. Note any ordinary reviews or scheduling edits between measurements. |

Resolve a persistent mismatch before expanding the session. Keep the starting dates and what you clicked; don't overwrite them with **Set Due Date** or **Reset** while investigating.

Once the rehearsal behaves as expected, widen the search and choose a limit that fits the time you have. If practice exposed an ambiguous question, [rewrite that card](/blog/how-to-make-better-flashcards/) before repeating it. And if a temporary practice session was the only feature you thought Anki lacked, you can keep your collection where it is. Our [Anki alternatives comparison](/blog/best-anki-alternatives/) covers when staying makes sense.
