---
title: "RemNote Cloze Cards: Merge Blanks and Check the Question"
description: "Create RemNote cloze cards, merge blanks when they belong together, and use a small rehearsal to check question count, hints, and answer leaks."
date: "2026-10-05"
image: "/blog/remnote-cloze-cards.png"
keywords:
  - "RemNote cloze cards"
  - "merge clozes in RemNote"
  - "RemNote multiple clozes"
  - "RemNote cloze hints"
---

Paste a sentence with two blanks into RemNote, and each blank becomes an independent question. That works when you want to recall each missing part separately. If you expected to supply both together, you've made a different task. RemNote's [text-import guide](https://help.remnote.com/en/articles/9252072-how-to-import-flashcards-from-text) says you can't pre-merge clozes in the pasted text.

Before changing the grouping, write down what a complete answer should contain. Then inspect one small example. Counting questions and reading their fronts will tell you more than counting highlighted words in your notes.

![A cobbler draws one cotton dust cloth over a matched pair of leather shoes](/blog/remnote-cloze-cards.png)

## Create the blanks

To create RemNote cloze cards, select text and press `{`, or use the cloze button in the formatting toolbar. When typing a new cloze, enclose its text in `{{` and `}}`. [Official creation instructions](https://help.remnote.com/en/articles/6025481-creating-flashcards).

Keep enough of the sentence visible to identify the task. Hiding an entire paragraph can leave you with little to work from. Hiding one word can leave so many clues that you're barely recalling anything. If you need help choosing the format itself, see the [cloze versus basic flashcards guide](/blog/cloze-deletion-vs-basic-flashcards/).

The rehearsal below is hypothetical, based on RemNote's documentation rather than a hands-on test. It uses an invented rule so you can judge each prompt without checking outside facts. The fronts and counts are expected results to compare with your own notes.

## Start with four questions

Suppose Harbor Club lends tripods to its members. Borrowing one requires a brass token and the equipment steward's signature. Members return tripods to the south storeroom, and the closing steward inspects them.

Paste this plaintext into an otherwise empty practice document:

```text
Harbor Club practice rules
  Borrowing a tripod requires {{a brass token}} and {{the equipment steward's signature}}.
  Tripods must be returned to {{the south storeroom}}.
  Who inspects returned tripods? >> The closing steward.
```

Keep the three question lines at the same indentation level. RemNote infers nesting from indentation; `>>` separates a basic question from its answer. [Text-import syntax](https://help.remnote.com/en/articles/9252072-how-to-import-flashcards-from-text).

Expect **four generated questions**: two from the borrowing bullet, one from the return-location bullet, and one basic question. This is the count for this example's content, not a prediction of how many cards are due in your practice queue.

Here are the expected fronts and answers. `[...]` represents hidden text. The table shows question content, not RemNote's exact interface; the parent context is omitted here and checked below.

| Question | Expected front | Answer to recall |
| --- | --- | --- |
| Borrowing item | Borrowing a tripod requires [...] and the equipment steward's signature. | A brass token |
| Borrowing approval | Borrowing a tripod requires a brass token and [...]. | The equipment steward's signature |
| Return location | Tripods must be returned to [...]. | The south storeroom |
| Inspection role | Who inspects returned tripods? | The closing steward |

Read the borrowing fronts carefully. Each supplies the other requirement. That's suitable for two narrower questions: “Which item?” and “Whose approval?” Neither asks you to produce the entire borrowing requirement unaided.

That difference matters when judging your answer. Recalling the token while the signature is visible tells you whether you remembered the token. It doesn't establish that you could name both requirements from scratch.

## Merge clozes when the pair is the answer

Now suppose your goal is to state everything a member must supply before borrowing a tripod. The token and signature belong in one answer. Decide that **both requirements must be recalled** before editing the bullet.

To merge clozes in RemNote, use the drop-down beside a blank. For multiple clozes within one bullet, it lets you hide all the sections together or hide each separately. Choose the together option for the borrowing bullet. [Cloze grouping documentation](https://help.remnote.com/en/articles/6025481-creating-flashcards).

The expected paired front is:

```text
Borrowing a tripod requires [...] and [...].
```

Its complete answer is **a brass token and the equipment steward's signature**. Remembering only the token leaves this task incomplete. Equivalent wording is fine if it identifies the same item and approval; the exercise doesn't require reciting the sentence word for word.

Only the borrowing question changes:

| Source bullet | Independent version | Paired version |
| --- | --- | --- |
| Borrowing: two blanks | 2 questions | 1 question with both blanks hidden |
| Return location: one blank | 1 question | 1 question |
| Inspection: basic question | 1 question | 1 question |
| Total for this rehearsal | **4 questions** | **3 questions** |

The return location and inspection role still have their own questions. Combining answers from several child bullets is a different task, covered in the [RemNote multi-line card guide](/blog/remnote-multi-line-cards/).

Here, merging fits a goal that requires the complete pair. A smaller count alone isn't a reason to group material. Keep the four-question version if you want to judge recall of the item and approval independently.

## Read the hints and parent context too

To add RemNote cloze hints, click near the relevant blank and type `/hint`. RemNote's [hint guide](https://help.remnote.com/en/articles/9626898-mastering-flashcards-with-effective-hints) recommends using hints to narrow the question without supplying the answer.

For the independent borrowing questions, `required item` and `required approval` name the two tasks. `Made of brass` gives away part of the item answer. The sentence may already be clear enough, so there's no need to add a hint just because the feature exists.

For the paired question, `both requirements` reinforces the acceptance rule without naming either answer. A hint containing `token` or `signature` would do some of the recall for you. If several blanks need explanations, try rewriting the visible sentence before adding more clues.

RemNote also shows ancestor bullets as context during practice. [Context behavior](https://help.remnote.com/en/articles/6025481-creating-flashcards). In this rehearsal, the parent `Harbor Club practice rules` identifies the source. Replacing it with `Brass token and equipment signature` would expose the pair before you answered.

Use the same check on your real notes. A lecture heading or copied explanation above a cloze may contain the phrase you're trying to recall. Read everything visible on the front, not just the sentence containing the blank.

## Diagnose one bullet before editing the document

A bullet can generate both a basic card and cloze cards. [Supported card combinations](https://help.remnote.com/en/articles/6025481-creating-flashcards). If you find an extra question, inspect what it asks before deleting or recreating the note. It may test something useful, or it may repeat a task you already covered.

Use this worksheet for one troublesome bullet:

| Observation | Next check |
| --- | --- |
| Two questions, but you wanted one paired answer | Check grouping within that bullet; inspect the front with both blanks hidden |
| One paired question, but you want two independent judgments | Choose separate clozes and inspect each front |
| More generated questions than your plan includes | Look for another card type on the bullet and decide whether its question belongs |
| The answer is visible elsewhere on the front | Rewrite the leaking sentence, hint, or ancestor context |
| Several answers seem reasonable | Name the intended task more precisely or write an explicit basic question |

For your own example, record four things: the complete answer you want, the expected question count, everything visible on the front, and the change needed. Reinspect that bullet after editing it. Once it works, apply the same reasoning to the next one. If the questions are correct but absent from practice, continue with the [RemNote cards-not-showing guide](/blog/remnote-cards-not-showing/).

Stop when every expected question exists, its front asks the task you chose, and the visible text doesn't supply the answer. For Harbor Club, that means four questions for independent recall or three for the paired borrowing requirement. You should be able to explain what makes each answer complete without reopening the source rule.
