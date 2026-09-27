---
title: "Mochi Reverse Cards: Two-Way Vocabulary Without Answer Leaks"
description: "Set up Mochi reverse cards, choose two-sided or separate vocabulary prompts, and catch ambiguous cues and example sentences that reveal the answer."
date: "2026-09-27"
image: "/blog/mochi-reverse-cards.png"
keywords:
  - "mochi reverse cards"
  - "mochi bidirectional cards"
  - "Mochi multi-sided cards"
  - "vocabulary flashcards"
---

A Spanish word, its English meaning, and an example sentence fit neatly on three Mochi sides. Turn on reverse reviews, though, and the example sentence becomes your starting point. If it contains the Spanish word you're trying to remember, you've already seen the answer.

**Mochi reverse cards** need a useful question at both ends. A two-sided pair suits straightforward vocabulary. A longer sequence can hold an explanation. When the two directions need different clues, separate cards give you room to write each question properly.

![A walker pauses on a wooden footbridge to study a fork in the trail, holding her folded map at her side](/blog/mochi-reverse-cards.png)

This guide follows Mochi's official documentation, checked September 27, 2026. The vocabulary layouts are original worked examples, not results from a hands-on app test.

## Enable reverse reviews for one card first

Mochi calls the setting **Review reverse**. You can enable it for an individual card, a deck, or globally:

| Scope | Documented path |
| --- | --- |
| One card | Open the card → more menu → **Review reverse** |
| One deck | Open the deck → more menu → **Review Settings** → **Review cards in reverse** → **Review reverse** |
| Global | **Settings → Review Settings** → **Review cards in reverse** → **Review reverse** |

Forward and reverse directions have separate review histories and spaced-repetition schedules. Changes apply to future reviews without altering existing history. [Mochi reverse-review documentation](https://mochi.cards/docs/reviewing/review-reverse/)

Start with one card while checking its wording. Enable reversal for a whole deck once you've checked that its cards work both ways. Before choosing the global setting, look through your other material too: an explanation ending with “For example…” may make a poor opening question.

## A two-sided vocabulary card

For a plain Markdown card without a template, use this layout:

```markdown
Spanish → English: give the meaning.
la ventana
---
English → Spanish: give the noun with its article.
the window
```

A line containing `---` separates sides. Add another separator for a third side. Mochi's [card documentation](https://mochi.cards/docs/cards/) describes showing one side and asking you to recall the next. If your card uses a template, edit the corresponding template or fields instead: Mochi renders the template in place of the card's Markdown.

With reverse reviews enabled, the pair gives you two tasks:

| Starting cue | Answer to produce before revealing |
| --- | --- |
| `la ventana` | the window |
| `the window` | la ventana |

The instruction on each side tells you what counts. In the Spanish answer, `ventana` without `la` misses the requested article. Decide whether spelling matters too: say your answer for speaking practice, or write it before revealing if written accuracy is the target.

Vocabulary learners often call these recognition and production directions. Both can involve retrieval from memory. Seeing `la ventana` and supplying its meaning is still a recall task; seeing the English cue asks you to retrieve the Spanish form. Being able to answer one doesn't establish that you can answer the other.

## Why an extra side can reveal the answer

Consider this three-sided version:

```markdown
la ventana
---
the window
---
La ventana está abierta.
The window is open.
```

As a forward sequence, it lets you recall the meaning and then read a usage example. The last reveal is supporting material. Without a more specific question, you have no reason to predict that particular sentence from “the window.”

Mochi's [API reference](https://mochi.cards/docs/api/) defines reverse order as bottom to top. Applied to this example, the order is **sentence → meaning → word**. The starting side already contains both `ventana` and `window`, so it gives away the vocabulary you're supposed to retrieve.

This is the useful distinction between Mochi multi-sided cards and bidirectional cards: extra sides extend the sequence; reversal runs it in the other direction. The documented separate schedules are for forward and reverse reviews. Don't plan around an independent schedule for every side or every possible pairing.

Keep this example forward-only if you want the sentence as an explanation. For a vocabulary test in both directions, use the shorter pair. If you need a sentence on each prompt, write two cards with different wording.

## Separate cards let you choose different clues

A reverse cue can hide the answer and still be too vague. “Bank” might mean a financial institution or the edge of a river. Even after you've narrowed the meaning, a full sentence may have several valid translations. Asking for one noun in context makes the expected response easier to judge.

Here are two cards for Spanish `el banco`, using the financial meaning. Create them separately and keep reverse review off for both.

**Card 1: understand a word in context.**

```markdown
What does “banco” mean in this sentence?
Tengo una cuenta en este banco.
---
bank — the financial institution
“I have an account at this bank.”
```

**Card 2: produce the Spanish noun.**

```markdown
Complete the sentence with the Spanish noun for a financial bank.
Tengo una cuenta en este ____.
---
banco
Tengo una cuenta en este banco.
```

Card 1 asks for the English meaning. Card 2 asks for the Spanish noun. You don't need to reproduce the full translated sentence to answer either one.

The second prompt supplies grammar clues, including `este`. That's intentional: the target is the noun in this sentence. A clue becomes an answer leak when it displays what you meant to retrieve. Here, `banco` stays hidden. If you're also testing the article, use “the bank, financial institution; include the Spanish article” as the prompt and `el banco` as the answer instead.

Apply the same check to hints, headings, and images. A labeled picture of a window is useful when you're learning the word; a visible `ventana` label defeats a prompt asking you to produce `ventana`.

Our [guide to making better flashcards](/blog/how-to-make-better-flashcards/) covers narrowing questions further. The [language-learning guide](/blog/how-to-use-flashcards-for-language-learning/) puts vocabulary cards alongside broader study practice.

## Check five cards before reversing the deck

Pick five vocabulary cards, including one with an example sentence and one with several possible meanings. For each card:

1. Write the answer you want from each direction. Include any required article, spelling, or meaning restriction.
2. Look only at the first side, then only at the last. Check whether either starting side reveals its expected answer through an example, translation, heading, or image label.
3. Answer each question before revealing anything. If another response would also be reasonable, narrow the cue or record the alternatives you'll accept.
4. Choose the layout: a reversible pair, a forward explanation sequence, or two separately written questions.

The three-sided `ventana` card fails step two because its last side contains the target word. The bare cue “bank” fails step three because it leaves the meaning open. These need different repairs: remove the visible answer from the first prompt; add enough context to the second.

Once those five cards ask clear questions in both directions, check the rest of the deck before enabling reversal for all of it. The setting changes the review order. The wording decides what you actually practice.
