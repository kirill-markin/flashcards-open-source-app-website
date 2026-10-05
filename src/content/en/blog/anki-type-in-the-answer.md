---
title: "Anki Type in the Answer: Set Up Cards and Check What Gets Compared"
description: "Set up Anki typed answers, keep the comparison field short, separate synonyms and explanations, and check the typing box in a real review."
date: "2026-10-05"
image: "/blog/anki-type-in-the-answer.png"
keywords:
  - "Anki type in the answer"
  - "Anki typed answers"
  - "Basic type in the answer"
  - "Anki answer comparison"
  - "Anki typing box not showing"
---

Anki can highlight a difference between `bike` and `bicycle` even when either word answers your question. Its **type in the answer** feature compares your input with a stored answer. You still decide how well you recalled it and choose the review rating. [Anki's typed-answer documentation](https://docs.ankiweb.net/templates/fields.html#checking-your-answer)

That comparison is useful when a missing letter matters. For vocabulary questions with several valid answers, you need to decide which differences matter before you start reviewing. Keep one short comparison target, put reminders elsewhere, and check the result during desktop study.

![A man checks a tan replacement button against a blue overshirt cuff, with the original navy button resting on cloth in his lap](/blog/anki-type-in-the-answer.png)

## Start with a fresh typed-answer note

In Anki desktop, open **Add**, click the note-type button near the top, and select **Basic (type in the answer)**. This built-in type has **Front** and **Back** fields and creates one card with a typing box. [Anki's standard note types](https://docs.ankiweb.net/getting-started.html#note-types)

Fill the fields like this, then add the note:

| Field | Text |
| --- | --- |
| Front | Fill both gaps and type the whole word: a__o__odate (“provide enough space for”). |
| Back | accommodate |

This is assisted spelling practice. The cue identifies the intended word while leaving the two letter pairs for you to supply. A definition alone would allow other words, making an exact spelling target harder to grade fairly.

Keep **Back** to `accommodate`. If you append “two c's and two m's,” that reminder becomes part of the expected text. The desktop reviewer reads the comparison target from the field named in the typing instruction. [Released Anki reviewer implementation](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/reviewer.py#L706-L752)

For a card with reminders or alternatives, use the separate fields below.

## Decide what a correct answer means

Fill out this worksheet before making a batch of cards. The examples cover three different tasks; each needs its own rule for judging recall.

| Task | Front | Back | Supporting text | What counts as correct? |
| --- | --- | --- | --- | --- |
| Exact spelling with a cue | Fill both gaps and type the whole word: a__o__odate (“provide enough space for”). | `accommodate` | Explanation: two c's and two m's | Type the complete word with both letter pairs correct. |
| One valid synonym | Give one English synonym for “begin.” | `start` | Alternatives: commence. Explanation: one verb is enough. | Give a valid synonym, even if it differs from the stored word. |
| Explain a distinction | How does recognizing a word differ from recalling it? | Recognition identifies a presented word; recall produces it without seeing it. | Use an ordinary Basic card for this row. | Explain both sides in your own words. |

The synonym question permits `commence`, so a text difference from `start` doesn't make that response a failed recall. If you want to practice one particular word instead, write a question that identifies it.

Putting `start / commence` into **Back** doesn't make either word an automatically accepted answer. The built-in comparison receives one expected text and your supplied text; it doesn't interpret the field as a synonym list. [Anki's comparison call](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/reviewer.py#L754-L777)

For the explanation row, typing the model sentence would add a wording requirement to a meaning question. An ordinary Basic card leaves you free to explain the distinction and judge whether both parts are present. Our [guide to better flashcard prompts](/blog/how-to-make-better-flashcards/) covers questions that are difficult to grade.

## Give reminders their own fields

Clone the note type before changing its templates. Note types are shared across the collection, so a separate deck alone won't isolate an edit. [Anki's collection-wide note types](https://docs.ankiweb.net/getting-started.html#note-types)

On desktop:

1. Open **Tools → Manage Note Types → Add** from the main window.
2. Choose the **Clone** entry for your unmodified **Basic (type in the answer)** type. Click **OK** and name the clone `Short typed answer`.
3. Close the manager, open **Add**, and select `Short typed answer` with the note-type button.
4. Click **Fields…** and add two fields named exactly `Alternatives` and `Explanation`. Keep `Front` and `Back`.
5. Click **Cards…** and replace the clone's front and back templates with the snippets below.

The [note-type creation instructions](https://docs.ankiweb.net/editing.html#adding-a-note-type) cover cloning and adding fields. **Cards…** opens the [template editor](https://docs.ankiweb.net/templates/intro.html#the-templates-screen).

**Front Template**

```html
{{Front}}
<br>
{{type:Back}}
```

**Back Template**

```html
{{FrontSide}}
<hr id=answer>
{{Back}}
{{#Alternatives}}
<p>Also acceptable: {{Alternatives}}</p>
{{/Alternatives}}
{{#Explanation}}
<p>{{Explanation}}</p>
{{/Explanation}}
```

`{{type:Back}}` selects **Back** for comparison. `{{FrontSide}}` carries that instruction to the answer side, where the reviewer displays the comparison. Use one typing target per card, with its content on one line. [Typed-answer template rules](https://docs.ankiweb.net/templates/fields.html#checking-your-answer)

In this design, **Alternatives** shows other acceptable answers after the reveal. **Explanation** holds your reminder or reasoning. Neither field changes the comparison target. Leave either field empty when the note doesn't need it; its paragraph will stay hidden. [Conditional field display](https://docs.ankiweb.net/templates/generation.html#conditional-replacement)

## Check three disposable cards during study

The typing box doesn't appear in the preview dialog or AnkiWeb. Use the desktop reviewer to check it. [Where typed answers appear](https://docs.ankiweb.net/templates/fields.html#checking-your-answer)

Create a scratch deck called `Typed answer trials`. In **Add**, select that deck and your `Short typed answer` clone. Add exactly three fresh notes, one per row below. Set all four fields for each note, including the empty ones.

| Front | Back | Alternatives | Explanation |
| --- | --- | --- | --- |
| Trial 1 — Fill both gaps and type the whole word: a__o__odate (“provide enough space for”). | accommodate | Leave empty | Two c's and two m's. |
| Trial 2 — Fill both gaps and type the whole word: a__o__odate (“provide enough space for”). | accommodate | Leave empty | Two c's and two m's. |
| Trial 3 — Give one English synonym for “begin.” | start | commence | One valid verb is enough. |

The different **Trial** labels identify separate notes and separate attempts. Open the scratch deck and click **Study Now**. Follow the row matching the card's label, whatever order Anki presents them in. Enter the supplied input, then click **Show Answer**.

These are expected observations based on the official documentation and released desktop code, rather than results of a hands-on test:

| Card | Input to type | Expected observation | Meaning for the question |
| --- | --- | --- | --- |
| Trial 1 | `accommodate` | Input matches **Back**; the spelling reminder appears below. | The spelling satisfies the prompt. |
| Trial 2 | `acommodate` | The comparison shows the missing c; the reminder appears below. | This fails the spelling requirement. |
| Trial 3 | `commence` | Input differs from `start`; “Also acceptable: commence” appears below. | The synonym satisfies the prompt, despite the text difference. |

For these three disposable checks, choose **Easy** after each reveal to advance, then delete the three scratch notes when finished. You're supplying predetermined inputs to inspect the template, so these ratings say nothing about your memory. Confirm that each question appears above the box and that its reminder or alternative appears only after the reveal.

During real study, grade the recall you actually performed: **Again** for an incorrect or forgotten answer, **Hard** for a correct answer that took a long time or left you doubtful, **Good** for correct recall with some effort, and **Easy** for effortless recall. [Anki's answer-button guidance](https://docs.ankiweb.net/studying.html#answer-buttons)

## If the typing box is missing

Check the note in desktop study first. Then inspect its selected note type, the front template, and the field named in `{{type:Back}}`. Field names are case-sensitive. [Field replacement rules](https://docs.ankiweb.net/templates/fields.html#basic-replacements)

**Back** must contain text: the released desktop reviewer removes the input for an empty target and displays a warning for an unknown field. [Reviewer field handling](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/reviewer.py#L706-L752)

For several independent answers, split the question into focused cards. For questions built from blanks, see [Anki cloze numbers](/blog/anki-cloze-numbers/). Keep each typing target short enough that you can tell what the comparison is checking.
