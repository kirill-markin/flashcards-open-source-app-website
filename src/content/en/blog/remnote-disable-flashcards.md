---
title: "RemNote Disable Flashcards: Keep the Notes, Choose the Scope"
description: "Turn off selected RemNote flashcards without deleting notes. Compare card controls, paused documents, and descendant scope, then check a small example."
date: "2026-11-01"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/34fb95a25bccf06664a3c29342b4249622a2fc4f2254ac89ff3bddee58b07595.webp"
keywords:
  - "RemNote disable flashcards"
  - "RemNote keep notes without flashcards"
  - "RemNote pause vs disable"
  - "Disable Descendant Cards RemNote"
---

An old semester can still be useful reference material after you've finished studying it. RemNote lets you disable flashcards while keeping the notes. The choice is how much practice you want to switch off: one question, a branch of notes, or a document that also displays questions from elsewhere.

Write down the questions you want to stop practicing before changing a whole folder. Two questions can appear next to each other in a lecture document while belonging to different parts of your knowledge base.

![A woman traces a climbing plant to its own pot while two separately rooted plants share a wooden trellis](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/34fb95a25bccf06664a3c29342b4249622a2fc4f2254ac89ff3bddee58b07595.webp)

## Choose the control that matches your intention

| Intended scope | Control |
| --- | --- |
| One unwanted question | Click its arrow; uncheck **Enable Cards** |
| A real branch of notes | Select its root; type `/ddc` and choose **Disable Descendant Cards** |
| A document | Set its priority to **Paused** |

The [official enablement guide](https://help.remnote.com/en/articles/7950982-setting-priorities-and-disabling-flashcards) documents these controls. Document priority is available through **Flashcards → document's … → Priority**, as shown in the [Flashcard Home guide](https://help.remnote.com/en/articles/7925835-the-flashcard-home).

For a one-question change, check the actual prompt and direction first. A bullet can generate several questions; clicking its arrow lets you inspect the card configuration. [RemNote's card-creation guide](https://help.remnote.com/en/articles/6025481-creating-flashcards) explains the directions. For a diagram, use the separate [image-occlusion controls](/blog/remnote-image-occlusion/), including the sequence-card exception.

## A small example before the semester folder

Suppose you want to stop reviewing two old lecture questions while continuing a shared question and an unrelated control. The following is an original, hypothetical exercise. The expected outcomes follow the linked documentation checked on November 1, 2026; they aren't results from an executed RemNote session.

Use disposable notes for the rehearsal. Create these three top-level documents with one forward-only basic card per question (`>>`); keep headings as plain text. The [creation guide](https://help.remnote.com/en/articles/6025481-creating-flashcards) documents that syntax. The bracketed portal line is an instruction to perform, not a card to create.

```text
Old lecture
  Lecture questions
    L1: Which token opens the exercise? >> cedar
    L2: Which token closes the exercise? >> pebble
  [portal showing S1 from Shared reference]

Shared reference
  S1: Which token joins the two notes? >> bridge

Control
  C1: Which token stays outside the lecture? >> kite
```

Create S1 in **Shared reference** first. In **Old lecture**, type `((` and select S1 to show it through a portal. Keep S1 visible and expanded. A portal displays the same note rather than a separate copy; edits affect the original too. [Portal instructions](https://help.remnote.com/en/articles/6030742-portals).

Set **Old lecture** and **Control** to **Currently Studying** and **Shared reference** to **No Priority**. Keep all four questions individually enabled. Use no nested documents, extra portals, sources, exam settings, or disabled ancestors. These assumptions make the comparison manageable; a real knowledge base may need a wider inspection.

Before trying either control, write your target:

```text
Stop ordinary review: L1, L2
Retain practice: S1, C1
Retain note text: L1, L2, S1, C1
```

Treat the next two rows as independent trials. Restore the starting setup between them, so you're comparing one change at a time.

| Trial | One change | Expected ordinary-review eligibility | Notes retained |
| --- | --- | --- | --- |
| A | Apply `/ddc` to Old lecture | L1, L2 excluded; S1, C1 retained | All four |
| B | Set Old lecture to Paused | L1, L2, S1 excluded; C1 retained | All four |

These are eligibility expectations, not today's due-card counts. Trial A matches the written intention. L1 and L2 belong beneath **Old lecture**, while S1's original parent is **Shared reference**. Seeing S1 beside the lecture questions doesn't make it a real descendant. Trial B reaches that visible portal question too. [RemNote documents this distinction](https://help.remnote.com/en/articles/7950982-setting-priorities-and-disabling-flashcards).

## Check the shared question at its source

S1's original **No Priority** placement doesn't protect it in Trial B: RemNote ignores No Priority when another priority applies. A separate **Maintaining** or **Currently Studying** placement wins over Paused. [Effective-priority rules](https://help.remnote.com/en/articles/7950982-setting-priorities-and-disabling-flashcards).

For an optional variation, restore the starting setup, set **Shared reference** to **Maintaining**, then pause **Old lecture**. Predict the result before reading on.

The expected result is **L1 and L2 excluded; S1 and C1 retained**, with all four note texts still readable. The changed source priority rescues S1; it has no connection to L1 or L2. That one setting changes whether pausing Old lecture matches your intention.

Record the original location and the portal destination separately. Don't delete S1 to remove its lecture appearance, and don't edit its question merely to mark it as old lecture material. The exercise needs one shared question whose text stays unchanged throughout.

If your goal is gathering wanted questions from several documents, the [tagged-subset guide](/blog/remnote-tags-flashcards/) covers that separate task.

## Inspect, then reverse the same change

For document inspections without changing review history, use **Practice Without Recording Answer Choices** with **Practice All Flashcards**. The all-card mode avoids filtering by due dates; with recording enabled, it still affects scheduling. Only visible portal cards enter that document's practice scope. [Practice-mode documentation](https://help.remnote.com/en/articles/6904503-practicing-specific-flashcards).

**Paused** permits explicitly practicing the paused document; its scheduling clock keeps running. [Pause behavior](https://help.remnote.com/en/articles/7950982-setting-priorities-and-disabling-flashcards). Opening Old lecture directly in Trial B therefore can't establish whether its cards are excluded from ordinary review.

Keep expected results separate from observations. For each trial, record the target IDs, exact control changed, actual practice entry point, questions shown, and whether all four note texts remain readable. In Trial B, also record the priorities at both S1 placements. Leave “not checked” where you haven't inspected something, including ordinary-queue behavior. A changed counter alone doesn't finish this comparison.

Undo at the same level: recheck **Enable Cards**, remove the root's `/ddc` powerup, or restore prior priority. Enabling a child can't override an ancestor's `/ddc`. [Reversal instructions](https://help.remnote.com/en/articles/7950982-setting-priorities-and-disabling-flashcards).

After restoring the starting setup, compare the same four IDs again. Check retained text separately from practice availability, and inspect current due states before returning a large semester to daily review. Don't plan around an assumed queue size after the break.

If a wanted question still fails to appear, stop making broader changes and use the [missing-card investigation](/blog/remnote-cards-not-showing/). Once the small rehearsal matches your intention, apply that same scope decision to the real notes.

*Production note: This article used substantial AI drafting and two AI editorial passes. The example is based on documentation rather than a live product test. The illustration was AI-generated.*
