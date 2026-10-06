---
title: "RemNote Multiple-Choice Flashcards: Build, Import, and Check Answers"
description: "Create RemNote multiple-choice flashcards, paste indented options, check single and multiple correct answers, and repair questions that break when shuffled."
date: "2026-10-07"
image: "/blog/remnote-multiple-choice-flashcards.png"
keywords:
  - "RemNote multiple choice flashcards"
  - "RemNote multiple choice import"
  - "RemNote correct answer"
  - "RemNote multiple correct answers"
  - "RemNote MCQ flashcards"
---

Your question bank says the correct answer is C. You paste the question into RemNote, and the first option becomes correct instead. That is the documented text-import behavior, so a clean-looking card can quietly teach the wrong answer.

Before importing a whole set, check three questions: one with its answer originally in the third slot, one with two correct answers, and one whose wording depends on option order. That small rehearsal catches different problems. It also gives you a place to decide what should become a short-answer card after a miss.

**Documentation checked:** October 7, 2026. The original examples below are a worked exercise based on official documentation, not a report of hands-on RemNote testing. Use your own questions or material you have permission to reuse.

![A man checks a stainless-steel lid against an enamel saucepan while two differently sized lids rest on the counter.](/blog/remnote-multiple-choice-flashcards.png)

## Create a card and set its answer key

In the editor, type your question followed by `==A)`, then enter the options. A starts as correct; the others start as incorrect. Click an option's letter to change its status, or use `/mcr` for correct and `/mcw` for incorrect. Multiple correct answers are supported. These are the controls in RemNote's [card-creation guide](https://help.remnote.com/en/articles/6025481-creating-flashcards).

Write the expected answers separately before touching the controls. Record the **answer text**, because choices appear in random order during practice. “16” remains the answer even when it no longer appears beside C.

For a question with several correct answers, put “Select all that apply” in the prompt. Otherwise, the student has to guess whether the task asks for one answer or several.

## Start with these three questions

Here is an invented source set. The letters describe the original worksheet order; they aren't import syntax.

| Question | Original options | Expected answer | What it checks |
| --- | --- | --- | --- |
| What is `6 + 2 × 5` under the usual order of operations? | A: 40; B: 60; C: 16 | 16 only | Correct answer originally in slot three |
| A score qualifies if it is at least 70. Which scores qualify? Select all that apply. | A: 69; B: 70; C: 71 | 70 and 71 | Two correct options and an inclusive boundary |
| Which of 4, 6, and 9 are even? Choose the most complete answer. | A: 4; B: 6; C: All of the above | Intended: 4 and 6 together | Wording that depends on order |

The third question already needs repair. In the original order, C combines 4 and 6. But “above” names a position: if that choice moves first, there are no options above it. Rewrite the choice so its meaning survives a shuffle, even if the worksheet key accepts C.

For real material, add its source location beside your expected key: chapter and question number, a lecture page, or a link. That makes a disputed answer easier to investigate later.

## Paste options with their nesting intact

RemNote's [text-import guide](https://help.remnote.com/en/articles/9252072-how-to-import-flashcards-from-text) specifies `>>A)` on the question and indented options beneath it. The first option becomes correct. Consistent indentation creates the nesting; a deeper bullet under an option supplies detail shown after answering.

For the arithmetic question, move the verified answer to the first position before pasting:

```text
What is 6 + 2 × 5 under the usual order of operations? >>A)
  16
    Multiply first: 2 × 5 = 10; then add 6.
  40
    This comes from adding 6 + 2 before multiplying by 5.
  60
    This comes from multiplying all three numbers.
```

Don't paste the original “C” as the answer and expect it to identify an option. Don't leave “Answer: C” among the choices either. Keep that worksheet key in your source note, and make the card's correct status agree with the verified answer text.

The import documentation doesn't specify a marker for importing multiple correct answers. Use the documented editor controls after import rather than inventing a format such as `B,C` or assuming an asterisk will set correctness.

Here is the second question in its original order. **It needs manual correction before study**, because the first option is wrong:

```text
A score qualifies if it is at least 70. Which scores qualify? Select all that apply. >>A)
  69
    Below the threshold.
  70
    Equal to the threshold, so it qualifies.
  71
    Above the threshold, so it qualifies.
```

Make 69 incorrect and both 70 and 71 correct. Check all three statuses against your separate key. Marking 70 correct while forgetting to remove the default mark from 69 would leave another wrong card.

## Repair “all of the above” before shuffling

Rewrite the third question so every choice names its own content:

```text
Which choice lists every even number among 4, 6, and 9? >>A)
  4 and 6
    Both are divisible by 2; 9 is not.
  4 only
    This leaves out 6.
  6 only
    This leaves out 4.
  4, 6, and 9
    This incorrectly includes 9.
```

Now the correct answer remains true wherever it appears. The distractors also represent identifiable mistakes: leaving out one member or including a non-member.

Check “both A and B” and “the previous option” for the same problem. Replace references to display letters or positions with explicit content. Changing option order alone can't repair an option whose meaning depends on that order.

“None of the above” can mean *none of the other options*, regardless of position. If that's what you intend, say “None of the other options” and check it against every other choice. Use wording that names the choices it covers.

## Check the card before expanding the set

The [creation guide](https://help.remnote.com/en/articles/6025481-creating-flashcards) shows a preview button on the right of the card controls. Preview the cards, then practice the small set to inspect answer feedback and notes. Check these conditions before pasting more:

1. The arithmetic card has exactly three choices; only 16 is correct.
2. The threshold card has exactly three choices; both 70 and 71 are correct, and 69 is incorrect.
3. The repaired even-number card has four choices; only “4 and 6” is correct.
4. The nested explanations are visible after answering and match their intended options.
5. The question makes sense without its worksheet letter key or an answer-revealing heading.

If a choice became a separate question, inspect indentation. If the answer is wrong, compare the correct-status marks with your key. If the key is right but the explanation contradicts it, resolve the source disagreement before studying.

After a selection, RemNote suggests a rating that you can override. A lucky guess is a reason to reconsider that rating. Optional **AI Multiple Choice Explanations** live under **Settings > AI**, as [the same guide](https://help.remnote.com/en/articles/6025481-creating-flashcards) explains. Check generated reasoning against your source notes.

For supplementary references or context, **Extra Card Detail** is a Pro feature, applied with `/extra` or `/ecd`. Its [official guidance](https://help.remnote.com/en/articles/6751966-extra-card-detail-powerup) puts that detail on the back and recommends giving independently testable knowledge its own card. The import guide separately documents ordinary nested option explanations, as used above; those examples don't apply the power-up.

## Turn a repeated miss into a recall question

Suppose you keep choosing 71 but leaving out 70. The gap is the meaning of “at least,” so another identical multiple-choice attempt may tell you little. Try this short-answer contrast instead:

```text
How do “score at least 70” and “score greater than 70” differ at score 70? >> At least includes 70; greater than excludes it.
```

Then try a changed case without options: “The rule says a score must be greater than 70. Does 70 qualify?” Explain why before checking the answer. This tests whether you can apply the distinction after the familiar choices disappear.

RemNote's [multiple-choice learning guide](https://help.remnote.com/en/articles/8191873-using-multiple-choice-flashcards-effectively) warns about recognizing a repeated pattern without gaining knowledge you can use elsewhere. Keep a small multiple-choice component for exam-format practice and add recall cards for the gaps it exposes. The [basic versus cloze guide](/blog/cloze-deletion-vs-basic-flashcards/) can help choose that repair format.

If you encountered **Multiple-Choice Mode** while learning new exam cards, that's an AI feature described in [RemNote's exam documentation](https://help.remnote.com/en/articles/9101991-preparing-for-an-exam). The workflow here uses questions, choices, and answer keys you author. Use the [exam-scheduler walkthrough](/blog/remnote-exam-scheduler/) when you're ready to plan when to study the verified set.
