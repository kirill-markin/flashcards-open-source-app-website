---
title: "RemNote Multi-Line Cards: Choose Sets, Lists, or Separate Questions"
description: "Learn when to use RemNote set or list cards, convert existing bullets, and repair oversized answers with worked examples and a short preview check."
date: "2026-09-27"
image: "/blog/remnote-multi-line-cards.png"
keywords:
  - "RemNote multi-line cards"
  - "RemNote list cards"
  - "RemNote set cards"
  - "RemNote multi-line flashcards"
  - "convert bullets to flashcards"
---

An outline can put three deliverables, a procedure, and the reason behind one step under the same heading. Turn that heading into a flashcard, and “What do I need to remember?” suddenly has several different answers. The bullets were useful notes. The review question needs a narrower job.

For RemNote multi-line cards, start with that job: recalling the members of a group, recalling a sequence, or answering individual questions. Those choices lead to different cards even when the source notes look identical.

![A person uses a crochet hook to repair one loose stitch in a rust-colored blanket](/blog/remnote-multi-line-cards.png)

## Choose what counts as a complete answer

RemNote set cards reveal their answer items together. RemNote list cards reveal items in sequence. A multi-line card defaults to a set; numbered answer items make it a list. [RemNote’s multi-line guide](https://help.remnote.com/en/articles/9216774-multi-line-list-set-flashcards) documents these modes.

Use this decision before converting your notes:

| What you need to recall | Card design | Example prompt |
| --- | --- | --- |
| Every member of a small, defined group | Set | Which three deliverables belong in the club handoff? |
| A specified order | List | What is the club’s three-stage handoff sequence? |
| A reason, condition, or decision | Separate question | What should a member do if the handoff check fails? |

The word “defined” matters. “What belongs in a photo handoff?” could invite dozens of reasonable answers. Naming the club’s rule makes the expected answer bounded. Adding “three” is appropriate when the count is part of the requirement; leave it out if remembering the count is itself the task.

## Repair one overloaded outline

Here’s an invented photo-club rule for this exercise, not a general photography standard. The club requires three deliverables: selected photos, a captions file, and a credits file. Members assemble those files, check them against the assignment, then send them. If the check fails, they fix the files and check again before sending.

As notes, that might become:

```text
Photo-club handoff
  Selected photos
  Captions file
  Credits file
  Assemble the files
  Check against the assignment
  Send the handoff
  If the check fails, fix the files and check again
```

Making every child part of one answer leaves an awkward grading problem. Someone might recall all the deliverables but forget what to do after a failed check. They have recalled one useful thing and missed another. The heading doesn't say which mattered.

Separate the notes by the decision each prompt asks you to make.

### Keep the deliverables together

Use a set when the actual requirement is remembering the whole group. Saying “credits, photos, captions” should satisfy this example just as well as the order in the notes.

To create one directly in the editor, type your question followed by `>>>`, or type `>>` and press Enter. Then enter the answer items on separate child lines. [RemNote’s card-creation documentation](https://help.remnote.com/en/articles/6025481-creating-flashcards) explains these triggers.

The following blocks are **text to paste into RemNote**, not a sequence of keyboard actions. In pasted outlines, `>>>` marks a multi-line prompt, and indented bullets supply its answer items. Keep indentation consistent. [RemNote’s text-import guide](https://help.remnote.com/en/articles/9252072-how-to-import-flashcards-from-text) describes that syntax.

```text
- Which three deliverables belong in the photo-club handoff? >>>
  - Selected photos
  - Captions file
  - Credits file
```

Acceptance check: all three file categories count, in any order. “The photos and some text” is too vague to establish that captions and credits were both remembered.

### Keep a sequence only if its order is the target

For this exercise, suppose the club asks new members to recite its three-stage sequence. That gives a reason to make a list card. Use the text-import delimiter `>>1.`; RemNote numbers the nested items in their pasted order. [Text-import documentation](https://help.remnote.com/en/articles/9252072-how-to-import-flashcards-from-text).

```text
- What is the photo-club's three-stage handoff sequence? >>1.
  - Assemble the required files
  - Check them against the assignment
  - Send the handoff
```

Acceptance check: “send, assemble, check” fails even though it contains the right verbs. If you only need help at one troublesome transition, a focused question about that transition may be enough. Don't add a sequence card just because your notes happen to be numbered.

### Give the exception its own question

The failed-check rule needs its own prompt. Use `>>` between the question and its answer to make a basic card. Keep the answer on that line. [RemNote’s basic-card instructions](https://help.remnote.com/en/articles/6025481-creating-flashcards) cover this format.

```text
What should a photo-club member do if the handoff check fails? >> Fix the files and check again before sending.
```

You could also ask why the check happens before sending, if explaining that relationship is a learning goal. Avoid automatically making a separate question for every word. The useful split is between things you need to judge independently.

## Convert bullets you already have

Before converting the example outline, create a parent for the deliverables and move just those three items beneath it. Keep the procedure and exception outside that answer. Use “Which three deliverables belong in the photo-club handoff?” as the parent, so the prompt defines what you need to recall.

Select those answer children and choose **Multi-line Card Item** from the `/` menu; their parent becomes the prompt. For a list card, first make the children multi-line answer items, then select them and choose **List Item** in the omnibar. Numbering ordinary notes alone isn't this conversion. To exclude an answer item, select it and choose **Remove from Back of Card** in the toolbar. [Official conversion instructions](https://help.remnote.com/en/articles/9216774-multi-line-list-set-flashcards).

A line break alone doesn't express the intent to review each fact as its own question. If you want individual questions, write individual prompts.

## Preview the question, then judge the answer

RemNote provides a preview button beside the card and shows ancestor bullets as context during review. Check that context too: an ancestor can accidentally expose the answer. [Card preview and context](https://help.remnote.com/en/articles/6025481-creating-flashcards).

| Preview check | Pass condition for this example | Repair if it fails |
| --- | --- | --- |
| Prompt scope | Clearly asks for deliverables or stages | Replace the broad heading with a question |
| Answer membership | Deliverables contain only the three file categories | Remove procedure or explanation bullets from that answer |
| Order | Sequence follows assemble, check, send | Reorder the stages; don't impose an order on deliverables |
| Visible context | Helps identify the club rule without supplying the answer | Move the question out from under revealing text |
| Exception | Failed-check question has its own complete answer | Separate it from the sequence |

During review, rate list items individually. On a set, mark forgotten items with their X buttons, then rate the remembered items. If you recalled none, press **Forgot** a second time to mark everything forgotten. RemNote can show partial cards for difficult items before returning to the full group. [Rating and partial cards](https://help.remnote.com/en/articles/9216774-multi-line-list-set-flashcards).

For the deliverables example, remembering photos and captions doesn't establish recall of credits. Decide what you recalled before revealing the answer, then grade that attempt. Partial practice also doesn't remove the need to repair a vague prompt.

Take one existing outline through this process before converting a whole document. The result should have an answer boundary you can explain without reopening the original notes. For more prompt examples, see [how to make better flashcards](/blog/how-to-make-better-flashcards/). If your remaining question is whether RemNote fits your workflow, the [RemNote alternatives guide](/blog/remnote-alternative/) covers that separate decision.
