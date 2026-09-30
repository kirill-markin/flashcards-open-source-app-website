---
title: "Mochi Image Occlusion: Choose Masks That Test One Answer"
description: "Plan Mochi diagram cards with a worked example: decide which masks belong together, catch visible answer clues, and make each review easy to grade."
date: "2026-09-30"
image: "/blog/mochi-image-occlusion.png"
keywords:
  - "Mochi image occlusion"
  - "Mochi diagram cards"
  - "merge Mochi masks"
  - "image occlusion flashcards"
---

A garden plan has four beds, and two carry the same label: “herbs.” Cover one label and you may still be able to read the answer elsewhere on the image. Cover every label in one large rectangle and you've also hidden the layout you wanted to learn.

**Mochi image occlusion** uses diagram cards to cover parts of an image. Planning a useful card starts with the answer you want to recall. Two separate boxes can belong to one answer; two neighboring boxes can test different facts.

The workflow below follows Mochi's official documentation, checked September 30, 2026. The garden plan is an original practice exercise, not a report of a tested app session.

![A gardener lays an opaque cloth over one of two covered garden beds while the brick paths remain visible](/blog/mochi-image-occlusion.png)

## Start with an image you can grade

Draw a fictional community garden in any simple image editor: four rectangles for beds, a path between them, and a gate at the bottom. Put a bed ID outside each rectangle and a planting label inside it:

| Bed | Position on the plan | Label inside the bed |
| --- | --- | --- |
| A | Upper left | herbs |
| B | Upper right | beans |
| C | Lower left | peas |
| D | Lower right | herbs |

Keep the drawing plain. Identical bed outlines avoid plant illustrations that give away the labels. The IDs, gate, and path let you identify a location without spelling out what grows there.

For this exercise, the task is to name the planting category at the target bed or beds. “Herbs” is the complete answer for A and D together. “Basil” would be incomplete: it's a possible example of an herb, but it doesn't name the category written on this plan.

Pairing A and D also gives you a clue: the two beds share a category. That's acceptable for this practice task. If your goal is to identify each location independently, keep them separate and consider individual crops that remove the duplicate label while preserving enough context to recognize the bed.

## Create the diagram card in Mochi

Open the **New Card** dropdown, select **New diagram card**, and use **Choose image** to load your drawing. Draw a rectangle over each planting label, add an optional caption, then select **Save**. These are the documented [Mochi diagram creation steps](https://mochi.cards/docs/reviewing/cloze-deletions/).

Keep each rectangle small enough to preserve the bed outline and ID, with a little margin around the covered word. A surviving first letter or the end of “herbs” can become an unintended hint.

A suitable caption for this exercise is:

> Name the planting category at the active target bed or beds. Give one category.

Mochi's [diagram-card documentation](https://mochi.cards/docs/cards/diagram-cards/) describes an image, blocked regions, and an optional Markdown caption. Unmerged regions have separate review histories and schedules. Decide what belongs together while planning the card, before you build a large collection.

## Group the masks around the question

Here is the proposed mask plan. A through D refer to the bed IDs in the drawing, not names you need to enter in Mochi.

| Masks | What they cover | Complete response | What the review tests |
| --- | --- | --- | --- |
| A + D | Both occurrences of “herbs” | herbs | One shared category for the two target beds |
| B | “beans” | beans | The category at B, independently |
| C | “peas” | peas | The category at C, independently |

To group the two herb-label masks, edit the card, activate the **Selection** tool, select those two boxes, and choose **Merge**. Mochi documents this as combining masks into one review. [See the mask-merging instructions](https://mochi.cards/docs/reviewing/cloze-deletions/).

A and D belong together here because the intended question is “Which category belongs in these two beds?” Both locations require the same response. Two small masks preserve the path and other beds between them; a single large rectangle would cover that context too.

Keep B and C separate. If you remember beans but forget peas, the two prompts let you record that difference. Merging them would require one grading decision for two different answers.

You can deliberately make a task that needs both answers. A separate exercise could ask, “Name the categories in beds B and C, in that order.” The complete response would be “beans, peas,” and remembering only beans would be incomplete. Put that requirement in the prompt before practicing. The number of rectangles alone doesn't tell you what counts as a correct response.

## Check the saved card before making more

Open the small example for review on the device you normally use. Inspect every planned target before revealing it. The table describes your intended exercise; the review screen shows whether the saved card delivers it.

1. **Identify the target.** You should immediately know which bed or beds need an answer. If you have to guess, simplify the drawing, enlarge the bed IDs, or split the exercise into smaller images.
2. **Look for answer clues.** Check the caption, title, legend, uncovered text, and repeated labels. During the herbs prompt, neither occurrence should supply a readable answer. Correct the masks or prepare a cleaner source image if one does.
3. **Check the remaining context.** Keep the IDs and enough of the path and gate visible to orient yourself. If a mask hides something you need to identify the bed, reduce it or rearrange the source drawing.
4. **Answer, then reveal.** For A and D, the expected response is “herbs.” For B, it's “beans”; for C, “peas.” Say your answer before revealing the label, then judge it against the requirement you set.

Don't assume how the other masks will appear while a target is active. Inspect the saved card at your usual screen size. A visible duplicate or a partially covered word can turn a recall prompt into a reading exercise.

If that happens, fix the card before treating a successful answer as evidence that you remembered it. Likewise, if you hesitate over whether a partial answer counts, tighten the prompt or separate the questions.

## Take the same approach to your own diagrams

A repeated label is a reason to inspect both locations. Whether they belong in one review depends on what you need to know. Naming a shared category, identifying each location, and recalling a list are different tasks, even when they use the same image.

For broader decisions about labels, relationships, and sequences, use the [guide to turning diagrams into flashcards](/blog/how-to-turn-diagrams-into-flashcards/). For Mochi's wider notes and review workflow, see the [Mochi flashcards review](/blog/mochi-alternative/).

Start with one image and write down the complete response for each target. Once you can identify the target, answer without visible clues, and grade it without negotiating with yourself, you have a pattern worth reusing.
