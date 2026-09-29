---
title: "Mochi Typed Answers: Cloze Blanks and Accepted Variants"
description: "Set up Mochi typed answers, distinguish accepted variants from required answers, and use a small worksheet to check spelling and multi-part prompts."
date: "2026-09-29"
image: "/blog/mochi-typed-answers.png"
keywords:
  - "Mochi typed answers"
  - "Mochi Type hidden text"
  - "Mochi cloze"
  - "Mochi input multiple answers"
---

You write a card expecting “color,” then remember that “colour” is correct too. Either spelling can answer the question. Ask for the two English month names beginning with M, though, and “March” alone is incomplete. Both cards involve more than one accepted word, but they need different rules.

For **Mochi typed answers**, use a cloze blank when you want to type hidden text. Use a custom input when you need to list accepted variants or require several answers. The examples below give you a small set of cards and trial responses to check before reusing a pattern across a deck.

This guide follows Mochi's official documentation, checked September 29, 2026. The examples and worksheet are original teaching material; they haven't been tested in the app.

![A fruit grower accepts differently shaped ripe pears into one crate while keeping a bruised pear aside](/blog/mochi-typed-answers.png)

## Turn a hidden word into a typed answer

Create an ordinary card without a template and paste this into its Markdown editor. Copy the contents of each example, without the surrounding code fences.

```markdown
English spelling practice: use the US spelling.
The {{color}} of the sky is blue.
```

Double braces create a cloze deletion: text hidden during review. Enable **Settings → Preferences → Cards → Type hidden text** to enter the missing text and receive an automatic correctness check. [Mochi hidden-text documentation](https://mochi.cards/docs/reviewing/cloze-deletions/)

You can also enable the setting through a deck's **Deck preferences**. A disposable deck lets you try these examples without changing the setup of your study material. [Mochi advanced formatting](https://mochi.cards/docs/markdown/advanced-formatting/)

The example specifies US spelling because that's the exercise. If spelling conventions don't matter to your learning goal, rejecting a valid regional spelling would distract from it. Use explicit alternatives for that situation.

If your pasted text doesn't appear, check whether the card has a template. Mochi renders the template's Markdown instead of the card's own Markdown when a template is applied. [Mochi card documentation](https://mochi.cards/docs/cards/)

## Accept either spelling with an input element

Mochi's custom `<input>` checks a response against its `value`. A pipe character, `|`, separates accepted variants. [Mochi input reference](https://mochi.cards/docs/markdown/advanced-formatting/#input)

```html
Complete the sentence with the English noun. US or UK spelling is accepted.
The ___ of the sky is blue.

<input value="color|colour">
```

Here, the intended answer is one word, with two accepted spellings. The pipe belongs in the card definition. The learner should enter one spelling.

Keep the prompt and accepted forms in agreement. Consider this weaker card:

```html
English: big
<input value="large">
```

“Huge” and “enormous” could be reasonable responses to that vague cue. Continually adding synonyms would make the card harder to maintain without making its task clearer. A narrower prompt is easier to judge:

```html
English adjective: the opposite of "small," beginning with l.
<input value="large">
```

The initial-letter clue makes this a supported vocabulary exercise. If you want unaided recall, choose a prompt with a more specific meaning instead of simply removing the clue and restoring the ambiguity. Listing accepted forms doesn't establish automatic synonym recognition.

## Require both answers when both matter

Mochi documents `&` as the separator for multiple required answers inside `value`. [Mochi input reference](https://mochi.cards/docs/markdown/advanced-formatting/#input)

```html
English calendar vocabulary: name both months beginning with M.
<input value="March & May">
```

The intended answer contains both March and May. Neither name appears in the prompt, and neither is sufficient alone. Changing the attribute to `March|May` would allow alternatives, which doesn't match the question.

The documentation establishes the authoring separator. It doesn't explain exactly how learners should separate multiple answers in the response, or whether order matters. Try the inputs in the worksheet below on this disposable card and record what your app accepts. The `&` in the definition isn't enough evidence to prescribe a response format.

Avoid combining pipes and ampersands in one value until you've verified how your intended combination behaves. The cited reference doesn't define their precedence. Two focused cards can be easier to reason about than a complicated answer expression.

## Use a small acceptance worksheet

Before trying the cards, write your intended rule in plain English. For the spelling card, either listed spelling counts; a misspelling doesn't. For the month card, require both correct months and no additional month. Keep those rules separate from the feedback Mochi actually displays.

Review each trial as a fresh response. First find a format the app accepts for both month names; then use that same format to check reversed order, duplicates, and extra answers. Otherwise, a rejected response may tell you only that its separator wasn't accepted.

| Card | Trial response | Intended rule or question to resolve | Observed result |
| --- | --- | --- | --- |
| `color\|colour` | `color` | Accept the listed US spelling | — |
| `color\|colour` | `colour` | Accept the listed UK spelling | — |
| `color\|colour` | `colur` | Reject a spelling error | — |
| `color\|colour` | `Color` | Does capitalization affect matching? | — |
| `color\|colour` | `color` with one space before and after | Are surrounding spaces ignored? | — |
| `March & May` | `March` | Reject: one required month is missing | — |
| `March & May` | `May` | Reject: the other month is missing | — |
| `March & May` | `March & May`, then `March, May` | Find an accepted format for both answers | — |
| `March & May` | Both months in reverse order | Accept under our rule; does the app agree? | — |
| `March & May` | `March` twice | Reject: repetition doesn't supply May | — |
| `March & May` | Both correct months plus `June` | Reject under our rule: an extra wrong answer | — |

The last three rows depend on finding a usable response format. If neither suggested format works, leave them unresolved and check the behavior in your Mochi version before building more multi-answer cards. The table records a learning requirement and an experiment, not a claim that Mochi rejects extra text or repeated answers.

For language cards, add a separate accent check:

```html
French: summer. Include the accents.
<input value="été">
```

Try `été`, `ete`, and `Été`. Your intended spelling rule can be strict even if the app's comparison turns out to be more permissive. The cited documentation doesn't specify case, whitespace, or accent normalization, so these rows are experiments to run, not predicted results.

If a valid answer fails, check the card definition and response format before adding aliases. Then decide whether the prompt needs a narrower scope or another accepted form. If an incomplete answer passes, split the task into simpler cards or judge completeness yourself; don't let the automatic feedback stand in for the rule you meant to practice.

## Keep answer rules separate from review groups

Numbered cloze syntax such as `{{1::answer}}` controls which hidden text belongs to a review group. Mochi documents separate schedules and histories for those groups. That is a different concern from accepting one of several spellings or requiring several answers in an input. [Mochi cloze groups](https://mochi.cards/docs/reviewing/cloze-deletions/)

The sources cited here don't establish separate histories for custom input elements or explain how their correctness checks determine scheduler grades. Treat answer feedback and review scheduling as separate things to verify.

For prompts that also run in the opposite direction, use the [Mochi reverse-card guide](/blog/mochi-reverse-cards/) to check the clues on each side. If you're comparing the wider workflow, the [Mochi alternative comparison](/blog/mochi-alternative/) covers that decision.

Reuse a pattern once its wording and observed behavior agree. Keep the small worksheet: when you add a new kind of answer, it gives you a concrete way to check whether the card still asks and rewards what you intended.
