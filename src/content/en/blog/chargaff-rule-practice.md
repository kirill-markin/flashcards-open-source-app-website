---
title: "Chargaff’s Rule Practice: DNA Base Percentages and Counts"
description: "Solve DNA base-percentage problems with worked examples, a practice quiz, and checks for single-strand data, GC content, and base-pair counts."
date: "2026-11-17"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2e39ed452cece6fd03bf74dc5735231bd06f9ab8905060de2801e9e8e69cc729.webp"
keywords:
  - "Chargaff's rule practice"
  - "DNA base percentages"
  - "GC content"
  - "DNA base pair calculations"
---

A DNA sample contains 28% adenine. If that percentage counts both strands of a fully paired DNA molecule, thymine is also 28%. If it describes just one strand, you can't find that strand's thymine percentage from adenine alone. Before calculating, identify which bases went into the total.

This Chargaff's rule practice uses an **idealized, fully paired DNA model containing only A, T, G, and C**. Every A pairs with T, and every G pairs with C. Treat the percentages in the exercises as exact.

![An outfitter places a pair of ochre hiking boots beside a pair of blue boots in wooden cubbies](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2e39ed452cece6fd03bf74dc5735231bd06f9ab8905060de2801e9e8e69cc729.webp)

## Write down what the percentage counts

A complete DNA duplex contains two paired strands. Each A–T pair contributes one A and one T; each G–C pair contributes one G and one C. Across the whole molecule, that gives **A = T** and **G = C**, the equalities used in these Chargaff's rule calculations. [OpenStax explains complementary pairing and the resulting equal amounts](https://openstax.org/books/organic-chemistry/pages/28-2-base-pairing-in-dna).

Each nucleotide carries one base. A base percentage therefore means:

**Base percentage = count of that base ÷ total nucleotides counted × 100.**

The denominator—the total you divide by—changes when you switch between one strand and the whole molecule.

| What you're counting | What you can use |
| --- | --- |
| All nucleotides in both paired strands | A% = T%; G% = C%; all four add to 100% |
| Nucleotides in one strand only | All four add to 100%; A% need not equal T%, and G% need not equal C% |
| A strand and its full complement, separately | A% in one equals T% in the other; G% in one equals C% in the other |
| Base pairs in a fully paired molecule | Each pair contains two nucleotides; 600 bp means 1,200 nucleotides total |

The strands are complementary, rather than necessarily identical. [OpenStax's DNA structure overview illustrates the paired strands](https://openstax.org/books/concepts-biology/pages/9-1-the-structure-of-dna). The one-strand and denominator distinctions above follow from counting each side separately; the examples below work through those deductions.

## Start with a whole-molecule percentage

**Worked example: adenine is 28% of all nucleotides in a fully paired DNA molecule. Find T, G, and C.**

1. A and T occur in equal amounts, so **T = 28%**.
2. A and T together use **28 + 28 = 56%** of the total.
3. G and C share the remaining **100 − 56 = 44%** equally.
4. **G = 22% and C = 22%**.

Check: 28 + 28 + 22 + 22 = 100. Each base's percentage matches its pairing partner's.

For a whole duplex, if A is *x*%, then T is *x*% and each of G and C is **(50 − x)%**. That's half of the amount left after A and T. In this model, no individual base can exceed 50% of the whole-duplex total: its partner would need the same share.

**GC content** is G% + C%. Here it's 44%. You can also work backward: a fully paired molecule with 44% GC has G = C = 22%, leaving A = T = 28%.

## A single strand needs a separate row

**Worked example: one strand has A = 40%, T = 10%, G = 30%, and C = 20%. Find its complement and the whole-duplex percentages.**

Every A in the given strand pairs with a T in its partner. Swap A with T and G with C to get the complementary strand's composition:

| Base | Given strand | Complementary strand | Both strands together |
| --- | --- | --- | --- |
| A | 40% | 10% | 25% |
| T | 10% | 40% | 25% |
| G | 30% | 20% | 25% |
| C | 20% | 30% | 25% |

Because the strands are fully paired, they have equal lengths. Their percentages have equal weight, so whole-duplex A is **(40 + 10) ÷ 2 = 25%**.

Check with 100 nucleotides per strand: the first contains 40 A bases and its partner contains 10. Together that's **50 A out of 200 nucleotides**, or 25%. Adding 40% and 10% without dividing by two would give the wrong denominator.

GC content is **30 + 20 = 50%** in the given strand and **20 + 30 = 50%** in its complement. It is also 50% across the complete duplex. Taking the full complement swaps the individual G and C percentages while keeping their sum unchanged.

Reversing the order in which you read a strand doesn't change its base counts. For questions that also ask for a sequence, use the end-label checks in the [DNA reverse complement practice](/blog/dna-reverse-complement-practice/). For transcription problems, the [coding vs template strand worksheet](/blog/coding-vs-template-strand/) helps you identify which strand you're given.

## Convert base pairs before counting bases

**Worked example: a fully paired DNA molecule is 600 bp long and has 36% GC content. How many A, T, G, and C nucleotides does it contain?**

The molecule contains **600 × 2 = 1,200 nucleotides** across both strands. G and C each account for 18%; A and T split the remaining 64%, giving 32% each.

| Base | Percentage of all nucleotides | Count in the whole molecule |
| --- | --- | --- |
| A | 32% | 0.32 × 1,200 = 384 |
| T | 32% | 384 |
| G | 18% | 0.18 × 1,200 = 216 |
| C | 18% | 216 |

Check: 384 + 384 + 216 + 216 = 1,200 nucleotides.

There are **216 G–C pairs**. Each contains one of the 216 G nucleotides and one of the 216 C nucleotides, so those pairs contain **432 nucleotides altogether**. The remaining 384 pairs are A–T pairs: 216 + 384 = 600 bp.

You can also find the G–C pair count directly: **36% of 600 pairs = 216 pairs**. The same GC fraction works because every pair contributes exactly two nucleotides. Keep the units beside the answer: 216 G–C pairs contain 432 G-and-C nucleotides.

## Try these eight questions

Use the fully paired A/T/G/C model whenever a question specifies a duplex. For each calculation, label what you're counting: nucleotides in one strand, nucleotides in both strands, or base pairs. These are original exercises.

1. Adenine makes up **18% of all nucleotides in a DNA duplex**. Find T%, G%, and C%.
2. Guanine makes up **27% of all nucleotides in a DNA duplex**. Find A%, T%, C%, and GC content.
3. A DNA duplex has **46% GC content**. Find the percentage of each base and its AT content.
4. One **200-nucleotide strand** contains **80 A, 40 T, 50 G, and 30 C**. Give the base counts in its full complement, then the base percentages across both strands together.
5. A single strand contains **35% A**. No other composition data are given. Can you determine T% on that same strand? Which base percentage can you determine in its full complement?
6. A DNA duplex is **750 bp long**, with **40% GC content**. Find the whole-molecule nucleotide count, the count of each base, and the number of G–C pairs.
7. A DNA duplex contains **1,200 nucleotides in total**, including **360 A**. Find its length in bp, the counts of T, G, and C, and its GC content.
8. A DNA sample has **A = 30%, T = 30%, G = 20%, and C = 20%**. Its strand structure isn't given. Do these percentages prove that it is double-stranded?

## Check your answers

1. **T = 18%, G = 32%, C = 32%.** A and T occupy 36% of all duplex nucleotides, leaving 64% for G and C.
2. **A = 23%, T = 23%, C = 27%; GC = 54%.** G and C use 54% of all duplex nucleotides, leaving 46% for A and T.
3. **A = 27%, T = 27%, G = 23%, C = 23%; AT = 54%.** Split GC equally between G and C, then split the remaining 54% between A and T. All percentages count both strands.
4. **Complement: A = 40, T = 80, G = 30, C = 50. Whole duplex: A = 30%, T = 30%, G = 20%, C = 20%.** Both strands together contain 400 nucleotides: 120 A, 120 T, 80 G, and 80 C. Divide each count by 400, not 200.
5. **Same-strand T% is undetermined. The complement has 35% T.** Pairing maps the given strand's A to its partner's T; it doesn't give the original strand's T. For example, A/T/G/C percentages of 35/15/25/25 and 35/25/20/20 both fit the supplied information. They would produce whole-duplex A percentages of 25% and 30%, respectively, so whole-duplex A% is undetermined too.
6. **1,500 nucleotides: A = 450, T = 450, G = 300, C = 300; 300 G–C pairs.** G and C are each 20% of all 1,500 nucleotides, while A and T are each 30%. The 300 G–C pairs contain 600 nucleotides.
7. **600 bp; T = 360, G = 240, C = 240; GC = 40%.** A = T leaves 1,200 − 720 = 480 nucleotides for G and C. GC content is 480 ÷ 1,200 × 100 = 40%.
8. **No. Those proportions are consistent with a fully paired duplex, but don't establish pairing.** A single strand could also have those proportions: `AAATTTGGCC` contains 3 A, 3 T, 2 G, and 2 C. Conversely, unequal A and T in data explicitly taken from one strand don't show that the original molecule lacked a complementary strand. Composition data need a stated sampling context before you can apply the whole-duplex equalities.

## Revisit the denominator you missed

When an answer goes wrong, save a short prompt about the decision that caused it. “600 bp: how many nucleotides across both strands?” checks a different step from “36% GC: what percentage is G?” Try each from memory before uncovering the answer, then return after a gap. Regular recall with spaced review helps you retain the steps rather than just recognize a worked solution.

For wider English-language review, the [AP Biology flashcards](/catalog/packages/ap-biology-flashcards-complete-course-review/) include DNA base pairing among broader course topics. Use that deck for broader recall and the eight questions here for denominator and count practice.

*This worksheet was drafted with AI assistance. Its examples and practice questions were created for this article, and the numerical answers were checked by calculation.*
