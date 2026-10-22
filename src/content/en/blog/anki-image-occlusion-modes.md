---
title: "Anki Image Occlusion: Hide All or Hide One?"
description: "Compare Anki’s native image-occlusion modes with a three-label practice diagram. Audit visible clues, card counts, grouped masks, and answer reveals."
date: "2026-10-16"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/cbfd18c939166ed531395ca7851e1f90cb7f7e01edc8b48280a30318926b8e62.webp"
keywords:
  - "Anki image occlusion"
  - "hide all guess one"
  - "hide one guess one"
  - "Anki image occlusion groups"
---

A mask covers the word “sieve,” but the legend underneath still says “B = sieve.” Your Anki image-occlusion card has hidden the label and left the answer on the screen. Switching modes won't fix that.

Use **Hide All, Guess One** when the other masked labels should stay unavailable as clues. Use **Hide One, Guess One** when those labels belong in the question's context. Both choices need a check of the whole image, including legends and captions.

This guide covers native desktop Anki. AI agents researched and drafted it from Anki's documentation and released **26.09.3** source, checked on October 16, 2026, and designed the original practice exercise. The table gives expected screen states from that research. No Anki session or learner study was run for this article. The practice diagram was made with drawing code; the hero image was generated with AI.

![A woman covers one wallpaper motif with plain paper while matching burgundy diamonds remain visible around it](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/cbfd18c939166ed531395ca7851e1f90cb7f7e01edc8b48280a30318926b8e62.webp)

## What the two modes hide

Anki's [native image-occlusion documentation](https://docs.ankiweb.net/manual/editing#image-occlusion) describes two modes, selected per note:

| Mode | Question side | After showing the answer |
| --- | --- | --- |
| Hide All, Guess One | Every mask area is covered; the current target is distinguished from the others | The current target is revealed; other mask areas stay covered |
| Hide One, Guess One | The current target is covered; other mask areas are visible | The current target is revealed too |

“All” refers to your mask areas. The unmasked diagram remains visible. Neither mode means “hide the entire image,” and Hide All doesn't ask you to answer every label at once.

That leaves a practical decision: which surrounding information should be available when you name this part? More coverage changes the question, but it doesn't automatically make a better card.

## Download a diagram with a deliberate leak

[Save the seed-sorter practice PNG](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/48a2c85fb103697f7a57d09a3f6a033d1efb5d255fd1aee56aab5abd7de256e4.png). It's an original illustration of a fictional machine, made for a naming exercise rather than engineering instruction.

![Three identical boxes labeled A, B, and C, containing hopper, sieve, and tray, with arrows between them and a redundant answer key below a crop guide](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/f4ff0375684fcfbec1c373d9695af03092bc042c3cb719df7cf11b6989dbf403.webp)

The three identical boxes avoid pictures of the components that would identify them immediately. Their visible IDs and arrows preserve the layout:

| Box ID | Label inside | Position |
| --- | --- | --- |
| A | hopper | First |
| B | sieve | Middle |
| C | tray | Last |

Below the crop guide, the key repeats all three assignments. Keep that version, then save a second copy cropped above the key. Preserve all three boxes, their IDs, and the arrows.

Make four separate practice notes, one for each condition below. In desktop Anki, choose **Add → Type → Image Occlusion → Select Image**. Load the appropriate image, draw three separate rectangles over the inside labels, and set the note's mode before clicking **Add**. Leave the IDs and arrows visible. The [manual](https://docs.ankiweb.net/manual/editing#image-occlusion) documents this creation flow.

Give each rectangle enough margin to cover the entire word. A surviving “s” or the tail of “sieve” would introduce another clue and spoil the comparison.

For this audit, inspect the card targeting **B** every time. Its question is “Name component B”; the complete response is **sieve**. Each note also creates A and C cards, so use a general **Header** such as “Name the component at the highlighted target.” The Header appears on both sides of every card. Keep answers out of it; explanations belong in **Back Extra**, which appears on the answer side. Use **Toggle Mask Editor** to access those fields.

## Compare these four conditions

Before revealing an answer, record what you can actually read. Compare your screen with these expected states. Keep the same words fully covered between modes; change only the source image and mode. This checks available clues, not which condition produces better learning.

| Source image | Mode | Expected question state for B | Available route to the answer |
| --- | --- | --- | --- |
| Original, key included | Hide All, Guess One | All three inside labels covered; key visible | Read “B = sieve” in the key |
| Original, key included | Hide One, Guess One | B covered; hopper, tray, and key visible | Read the key; other labels also remain |
| Cropped, key removed | Hide All, Guess One | All three labels covered; IDs and arrows visible | Recall B's assigned name from its position |
| Cropped, key removed | Hide One, Guess One | B covered; hopper and tray visible | Recall B, or infer sieve by elimination if the three-word inventory is known |

The first two conditions expose the same direct leak. Covering more inside labels doesn't remove an answer elsewhere in the source image. Crop the key before deciding that a mode solved the problem.

The last two expose a subtler difference. If you know the inventory is exactly *hopper, sieve, tray*, seeing hopper and tray leaves sieve as the unused word. That inference can produce the right answer without independent recall of B's name.

With all three words covered, that particular elimination route disappears. Position still supplies a cue: B is the middle box. A correct answer can show that you remember the mapping on this drawing. It doesn't establish that you understand what a sieve does. The fictional diagram contains no explanation of its operation.

Choose the cropped Hide All condition if you want to check the name at B without the neighboring names. Choose the cropped Hide One condition if those names are intentional context for the task. Difficulty alone can't choose for you; first decide what information the question should provide.

## Check the reveal and the card count

Say “sieve” before showing the answer. In the Hide All condition, expect B's word to become visible while A and C remain masked. In Hide One, A and C were already visible. Check that the newly revealed word matches your response.

In Hide All, **Toggle Masks** can temporarily expose the remaining covered areas. Use it after your answer to inspect the full diagram. It is a reveal aid, not another permanent occlusion mode. This behavior is described in the [editing documentation](https://docs.ankiweb.net/manual/editing#editing-io-notes) and implemented in the released [reviewer source](https://github.com/ankitects/anki/blob/29bb700b951e3f0c0cb69b77c0180fc1fe33e6ba/ts/routes/image-occlusion/review.ts).

Now inspect the cards belonging to one practice note in Browse. Three independent masks produce **three cards in either mode** when the note is first added. Check the note's cards, rather than today's review queue: the number presented today isn't the number generated.

## Group B and C only if you want one combined answer

Create another new note from the cropped image for this check. Draw the three masks, then group B and C **before clicking Add for the first time**. With **Select**, select the B and C masks and choose **Group selection**. Anki's [grouping documentation](https://docs.ankiweb.net/manual/editing#editing-io-notes) explains that grouped shapes create one card.

Set the Header to “Name the highlighted components from left to right,” then add the note. This prompt also works for the separate A target. Compare the two setups at their initial save:

| Mask arrangement before first Add | Cards created | Complete response for each target |
| --- | --- | --- |
| A, B, C separate | 3 | A: hopper; B: sieve; C: tray |
| A separate, B + C grouped | 2 | A: hopper; B + C: sieve, tray |

On the grouped card, both B and C are targets. Answer **“sieve, tray”**, in that order, before revealing. “Sieve” alone is incomplete. You make one grading decision for the combined response, so keep the masks separate if you want to record success on B independently of C.

These are two separately created notes, not a claim that editing a saved three-card note automatically removes its third card. Regrouping existing notes also needs separate attention to their cards, schedules, and review history.

## Put the audit to work on your next image

Before adding a batch, inspect one target with the answer hidden. Check for a duplicate label, legend, partial word, or caption that supplies the answer. Then ask whether visible neighboring labels are useful context or an unintended shortcut. Finally, reveal the answer and verify that the response is precise enough to grade.

If you need to test function, sequence, or relationships, write a question that asks for that knowledge. If the image itself fails to appear, use the [missing Anki images workflow](/blog/anki-images-not-showing/) before changing masks.
