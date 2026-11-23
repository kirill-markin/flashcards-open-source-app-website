---
title: "Matched Pairs Design Practice for AP Statistics"
description: "Design and check a matched pairs experiment for AP Statistics. Follow two worked examples, then answer five questions on pairing and random assignment."
date: "2026-11-23"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/9489b698bde7ebb3e3a3ea3284e9ced9c32acbf5d54d0ae1930b8c02b844f267.webp"
keywords:
  - "matched pairs design practice"
  - "matched pairs design AP Statistics"
  - "matched pairs experiment"
  - "random assignment within pairs"
---

Imagine cutting two test pieces from each of four boards to compare two wood finishes. Should one coin flip decide which piece gets finish A on every board, or should each board get its own flip? Each finish goes on four pieces either way.

In a **matched pairs design**, you match two units that are similar in a way that could affect the outcome, then randomly assign one to each treatment. You can also give both treatments to each unit in random order and pair its two results. In an AP Statistics free response, write the random step so someone else could carry it out. [College Board’s fall 2026 framework, section 1.13.B.4](https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description.pdf#page=58).

![A leatherworker sets a waxed swatch beside a matte swatch cut from the same hide](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/9489b698bde7ebb3e3a3ea3284e9ced9c32acbf5d54d0ae1930b8c02b844f267.webp)

## Flip once per board

To compare water resistance, cut two equal-sized pieces from each board and label them left and right. The pieces are the experimental units because they receive the finishes. The two pieces from each board form a **block**. Using both finishes on every board keeps the source of the wood fixed within each comparison. [Practice identifying experimental units](/blog/experimental-unit-practice/).

Flip a fair coin independently for each board. On heads, put A on the left and B on the right. On tails, reverse the finishes. After equal curing times, weigh each piece. Expose all pieces to water for the same time, blot them the same way, then reweigh to find the mass gain in grams.

Here’s one possible assignment. The mass gains are fictional.

| Board | Flip | Finishes, left to right | Gain with A (g) | Gain with B (g) | B − A (g) |
| --- | --- | --- | ---: | ---: | ---: |
| 1 | Heads | A, B | 5 | 7 | +2 |
| 2 | Tails | B, A | 9 | 8 | −1 |
| 3 | Heads | A, B | 3 | 6 | +3 |
| 4 | Tails | B, A | 8 | 8 | 0 |

Check board 2. Its left piece got B and gained 8 g. Its right piece got A and gained 9 g. The B − A difference is 8 − 9 = −1 g. Across all four boards, pieces with B gained 1 g more on average. In this test, less gain means better water resistance. Keep the board ID with each pair of readings so you can check the match. [Practice analyzing paired measurements](/blog/paired-vs-independent-samples/).

One shared flip allows two layouts, with A on the same side of every board. Four independent flips give 2⁴ = 16 equally likely layouts, each with both finishes on every board. If you draw four of all eight pieces for A, only 16 of 70 possible layouts put both finishes on every board.

## When one person tries both conditions

Six volunteers proofread once in quiet (A) and once with steady background sound (B). Use two similar passages with the same number of planted typos. Everyone reads the first passage in session one and the second in session two. Count the typos correctly marked in three minutes per session.

Write the volunteer IDs on six identical slips, mix them, and draw them without replacement. Assign the first three A then B and the rest B then A. In the draw 4, 1, 6, 2, 5, 3, volunteer 2 gets B first. If they catch eight typos then six, their B − A difference is 8 − 6 = +2 typos.

Each volunteer serves as their own match. With three people in each order, a harder second passage that affects everyone equally lowers scores equally for A and B. Someone distracted by the sound after it stops might still score lower in quiet. An earlier treatment affecting a later score is **carryover**. If you expect it, you could pair volunteers by baseline skill and randomly assign one condition per person within each pair. [Penn State’s lesson on crossover designs](https://online.stat.psu.edu/stat509/Lesson12).

## Five study plans to check

Write the actual assignment steps where a plan needs repair. All five situations are hypothetical.

1. **One coin for eight benches.** Each bench holds two similar seedlings, one nearer the window. One flip decides which position gets fertilizer A on every bench. The other position gets B. Rewrite the assignment and explain why it matters.
2. **Eight runners per group.** A coach draws eight of 16 names at random for warm-up A and assigns the rest to B. A student calls this matched pairs because the groups have equal sizes. The coach has baseline lap times. How could the coach design a matched pairs experiment?
3. **Everyone starts on paper.** Students each solve a paper puzzle first and an on-screen puzzle second. The class wants to compare completion times. Repair the treatment order and name one effect the original plan mixes with format.
4. **Two readings per visitor.** Researchers record one week of screen time before and one week after library visitors independently switched their phone settings. What creates the pairs, and who assigned the settings?
5. **Three pots per shelf.** Four greenhouse shelves hold three pots apiece. On each shelf, randomly assign one pot to each of three soil mixes. Name the blocks and classify the design.

## Explained answers

1. Flip a fair coin independently for each bench. Heads assigns A nearer the window and B farther away. Tails reverses them. One shared fair flip gives each seedling a 50% chance of A, but in any run it puts the same fertilizer on the window side of every bench. A light effect could look like a fertilizer effect.
2. The original plan is completely randomized. Sort the runners by baseline lap time and pair adjacent runners. Label each pair’s runners 1 and 2. Flip a fair coin independently per pair. Heads gives A to runner 1. Tails gives A to runner 2. Give the other runner B.
3. Flip a fair coin independently for each student. Heads gives paper first and tails gives screen first. Everyone uses the other format second. Use two comparable puzzles, one per round. Give everyone the same puzzle for that round in their assigned format. In the original plan, practice could make the screen format look faster.
4. Each visitor supplies a before-and-after pair. The visitors chose their own settings, so the researchers collected paired observational data. Changes over time could contribute to the difference. [Review what random assignment lets you conclude](/blog/random-sampling-vs-random-assignment/).
5. Each shelf is a block of three pots. This is a randomized block experiment with three treatments per block. To compare two mixes in matched pairs, use two pots per shelf. Flip a fair coin on each shelf to decide which pot gets the first mix. Give the other pot the second mix.

## Recall the rule on a fresh problem

Tomorrow, sketch an assignment plan for two tiles from each kiln batch that will get different coatings. Check for one fresh flip per batch and one tile per coating. Matching by batch keeps firing conditions comparable.

For more prompts on what defines a matched pairs design and why researchers block, try the [250-card English AP Statistics deck](/catalog/packages/ap-statistics-flashcards/). Answer before revealing the back, then try again a few days later. Practicing recall at spaced intervals can make the rule easier to remember when you see a new problem. [Research on spaced retrieval](https://pubmed.ncbi.nlm.nih.gov/21574747/).

*AI assisted with drafting the text and exercises. The illustration was AI-generated.*
