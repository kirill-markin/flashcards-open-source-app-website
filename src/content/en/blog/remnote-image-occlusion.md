---
title: "RemNote Image Occlusion: Individual vs Sequence Cards"
description: "Choose individual or sequence cards for RemNote image occlusion. Rehearse three labels, set their order, and check that the practice tasks you want remain enabled."
date: "2026-10-05"
image: "/blog/remnote-image-occlusion.png"
keywords:
  - "RemNote image occlusion"
  - "RemNote test in sequence"
  - "RemNote image occlusion order"
  - "individual image occlusion cards"
---

Suppose a diagram puts the final stage in its upper-left corner and the first stage near the bottom. Reading across the page gives you the wrong route. You might need to name any stage someone points at, rehearse the labels along the route, or explain the whole route without the picture. Those are different practice goals, even though the source stays the same.

For RemNote image occlusion, choose individual or sequence practice based on what you need to recall. This small rehearsal follows the current official documentation; check the expected behavior in your installed version as you work through it. A separate blank-sheet check will show whether you can also reproduce the route unaided.

![A woman holds a cord threaded through three different wooden beads, with matching spare beads in separate ceramic dishes](/blog/remnote-image-occlusion.png)

## Decide what you need to recall

Make a simple image of this fictional workshop route. It is an exercise, not an industry procedure:

```text
Dispatch <-------- Inspect
                      ^
                      |
                   Intake
```

The route is **Intake → Inspect → Dispatch**. The layout makes **Dispatch → Inspect → Intake** an easy order to use while drawing boxes. For this exercise, deliberately draw the masks in that second order so you have a mismatch to correct.

Choose your goal before opening the editor:

- For individual label recall, answer “Which stage is this?” at any of the three locations.
- For ordered label practice, name the stages as their targets appear along the route.
- If you need both, keep both kinds of practice. Answering Inspect after Intake doesn't establish that you can name Inspect on its own.

If you must explain the whole route from memory, add the blank-sheet check below. During image practice, arrows and positions can supply the order while you recall the labels.

Open the image with Ctrl+click, Cmd+click on Mac, or its hover button. Draw three separate, unmerged masks, one per label. Find **Enable Test In Sequence Card** in the gear menu. [RemNote’s image occlusion guide](https://help.remnote.com/en/articles/6511625-image-occlusion-cards) documents these options:

| Setting | Individual tasks | Sequence task | Total |
| --- | --- | --- | --- |
| Test boxes individually (default) | Intake, Inspect, Dispatch | None | 3 |
| Test boxes in sequence | None | Three labels in the chosen order | 1 |
| Both | Intake, Inspect, Dispatch | Three labels in the chosen order | 4 |

This ledger assumes all three masks are enabled. The totals describe configured practice tasks, not today's due-card count. Choose the row matching your written goal.

## Make the order deliberate

In sequence mode or **Both**, numbers appear above the masks in creation order. Click them to change the order. [Official sequence instructions](https://help.remnote.com/en/articles/6511625-image-occlusion-cards).

For the workshop exercise, assign:

| Target | Desired number |
| --- | --- |
| Intake | 1 |
| Inspect | 2 |
| Dispatch | 3 |

Read the numbers back as a route before leaving the editor. Don't accept “there are three numbers” as the check. Read **1: Intake, 2: Inspect, 3: Dispatch** and compare that with the arrows in your source image.

Then inspect the actual sequence card during practice. Name each target before revealing it, and record whether the targets follow Intake, Inspect, Dispatch. If the first target is Dispatch, return to the editor and inspect the numbers before redrawing anything. Checking the card this way distinguishes the order you drew the masks from the order you intended to practice.

**Hide All, Test One** controls concealment; merging groups masks. [RemNote’s guide](https://help.remnote.com/en/articles/6511625-image-occlusion-cards). Neither is the order check you need here. Leave the masks unmerged so the task ledger still applies.

## Put the picture away for one check

A correct sequence attempt checks label recall at targets supplied in order. It doesn't establish that you can reconstruct the order yourself: you may still be following the diagram's arrows or remembering where each stage sits.

Close the image and any notes showing the answer. On a blank sheet, use only this prompt:

> Write the complete workshop route from start to finish.

Write your answer before reopening the diagram. For this exercise, the acceptance criterion is **all three names in the order Intake → Inspect → Dispatch, without consulting the picture, notes, or card reveals**. Having the right names in a different order, omitting a stage, or looking back for a hint leaves this check incomplete.

Record ordered label practice and unaided route recall separately. Passing one and missing the other tells you what still needs rehearsal. If you also chose individual practice, check that you can name a target such as Inspect without first walking through Intake. The blank-sheet exercise adds no RemNote card to the 3/1/4 ledger.

## Check which tasks remain enabled

Inspect each mask's toggle and the sequence setting. **Disable All Cards** doesn't disable the sequence card. [RemNote documents this exception](https://help.remnote.com/en/articles/6511625-image-occlusion-cards).

To stop practicing this image entirely, choose **Test boxes individually**, then disable the masks. Recheck both controls. Checking only the individual masks leaves a sequence task unaccounted for.

For a **Both** setup you want to keep, account for Intake, Inspect, and Dispatch as individual targets, then account for the sequence task. Compare enabled tasks with the ledger. What happens to appear in one review session isn't a complete inventory of the practice you configured.

If a wanted task is enabled but unavailable in practice, that is a separate investigation. The guide to [RemNote cards not showing](/blog/remnote-cards-not-showing/) covers queue availability.

## The sequence numbers don't order your whole queue

RemNote schedules separate cards through spaced repetition; it doesn't guarantee a fixed order across the ordinary queue. Its [explanation of card order](https://help.remnote.com/en/articles/8038791-can-i-make-my-cards-appear-in-a-specific-order) distinguishes independent reviews from learning an ordered answer.

Use that distinction when diagnosing this exercise. An individual Dispatch question appearing before Intake isn't evidence that the workshop sequence is reversed. Check target order inside the sequence task. Judge unaided route recall with the picture put away.

If your source is a text outline rather than an image, [RemNote multi-line cards](/blog/remnote-multi-line-cards/) address lists and sets. For this diagram, pick the practice tasks you need, set their target order deliberately, and use the blank-sheet check whenever your goal includes explaining the route without visual cues.
