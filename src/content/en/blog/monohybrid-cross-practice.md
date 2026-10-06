---
title: "Monohybrid Cross Practice: Ratios, Probability, and Test Crosses"
description: "Work through monohybrid crosses with explained answers, from gametes and Punnett squares to test crosses, expected counts, and small-sample probability."
date: "2026-10-06"
image: "/blog/monohybrid-cross-practice.png"
keywords:
  - "monohybrid cross practice"
  - "monohybrid cross practice problems with answers"
  - "genotype and phenotype ratio"
  - "test cross probability"
  - "Punnett square practice"
---

Two plants can show the same dominant trait and still produce different offspring when crossed with a recessive plant. One parent genotype produces only dominant-looking offspring; the other gives each offspring a 50% chance of showing the recessive trait. Looking at the parent isn't enough to choose between them.

Monohybrid cross practice starts with the parents: **write their genotypes, derive their gametes, then calculate offspring probabilities**. You're following inheritance at one locus, a particular location on a chromosome. The familiar 3:1 phenotype ratio belongs to a particular cross under particular assumptions. It isn't an answer to every single-trait question.

The worked case and eight questions below use an invented plant model. Try the questions on a blank page before scrolling to the explained answers.

![A woman compares slices from two similar loaves, one with plain crumb and one with raisins](/blog/monohybrid-cross-practice.png)

## Set up the inheritance model

We follow one **autosomal locus**, a location on a non-sex chromosome, with two alleles called H and h. An [allele](https://www.genome.gov/genetics-glossary/Allele) is a version of a DNA sequence at a particular location. Our parents are **diploid**: they have two sets of chromosomes, so each has two copies of this locus. The possible allele combinations are HH, Hh, and hh.

In our hypothetical plants, H is completely dominant over h for pod surface. HH and Hh plants have ridged seed pods; hh plants have smooth pods. **Genotype** means the allele combination here; **phenotype** means the observed pod surface. The NHGRI definitions of [genotype](https://www.genome.gov/genetics-glossary/genotype) and [phenotype](https://www.genome.gov/genetics-glossary/Phenotype) distinguish the genetic description from the observable trait.

HH and hh are **homozygous**, with matching alleles; Hh is **heterozygous**, with two different alleles. Hh and hH describe the same genotype in this model. Write the capital letter first to keep the answers consistent.

All examples assume:

- Diploid parents, one autosomal locus, and only H and h at that locus.
- Complete dominance: every HH and Hh offspring is ridged, and every hh offspring is smooth. The environment doesn't change that assigned phenotype.
- Equal segregation: an Hh parent contributes either allele with probability 1/2. Gametes unite randomly at fertilization.
- No new mutations at this locus and no survival differences among the genotypes that change the proportions we observe.
- Independent offspring outcomes while the parent genotypes stay fixed.

These are model assumptions, not a claim that every real trait behaves this way. The symbols are practice notation, not the name of a real pod-surface gene.

## Write gametes before filling the square

A **gamete** is a reproductive cell, such as an egg or sperm cell, with one set of chromosomes. It carries **one allele at this locus**. An HH parent contributes H, not an “HH gamete.” Equal segregation gives a heterozygote equal chances of contributing either allele, as described in [OpenStax's law of segregation](https://openstax.org/books/concepts-biology/pages/8-2-laws-of-inheritance).

| Parent genotype | Possible gamete allele | Probability |
| --- | --- | ---: |
| HH | H | 1 |
| Hh | H or h | 1/2 each |
| hh | h | 1 |

A probability of 1 means 100%; 1/2 means 50%. We'll use P(Hh) to mean “the probability that an offspring has genotype Hh.” Always attach the probability to what you're calculating: a gamete allele, an offspring genotype, or a phenotype.

Dominance describes the phenotype of the heterozygote. It doesn't give H a transmission advantage: an Hh parent still contributes h with probability 1/2. “Dominant” also doesn't tell you which allele is more common in a population.

Use this answer format for each cross:

1. **Parents:** ___ × ___
2. **Gametes:** each parent's possible allele and its probability.
3. **Offspring genotypes:** probabilities, then a ratio with the order stated.
4. **Offspring phenotypes:** probabilities, then a ratio with the traits named.
5. **Requested result:** one-offspring probability, expected count, several-offspring probability, or a conclusion about a parent.

If gamete formation is the confusing step, the [chromosome and chromatid counting guide](/blog/chromosome-chromatid-counting/) explains what separates during meiosis.

## A fully worked cross: Hh × Hh

Cross two heterozygous ridged-pod plants. Each parent contributes H with probability 1/2 and h with probability 1/2. Put one parent's gametes across the top and the other's down the side of a **Punnett square**, a grid of the possible fertilization outcomes:

| Gamete from parent 1 ↓ / parent 2 → | H (1/2) | h (1/2) |
| --- | --- | --- |
| H (1/2) | HH (1/4) | Hh (1/4) |
| h (1/2) | Hh (1/4) | hh (1/4) |

Each cell combines one allele from each parent. For example, P(HH) = 1/2 × 1/2 = 1/4. There are two routes to Hh: H from parent 1 with h from parent 2, or h from parent 1 with H from parent 2. Add those distinct routes: 1/4 + 1/4 = 1/2.

The resulting **genotype ratio, HH:Hh:hh, is 1:2:1**. The probabilities are 1/4, 1/2, and 1/4, which sum to 1. A ratio gives the relative proportions in the stated category order; it doesn't specify the size of an actual group.

Combine HH and Hh to count ridged offspring: 1/4 + 1/2 = 3/4. Smooth offspring must be hh, with probability 1/4. The **phenotype ratio, ridged:smooth, is 3:1**. That ratio has two categories; the genotype ratio has three.

The square describes possibilities for each fertilization. Its four cells don't promise four offspring, one of each cell type.

### Expected counts and repeated outcomes

For N offspring, the expected count in a category is **N × its probability**. With 28 offspring from Hh × Hh, the expected genotype counts are 7 HH, 14 Hh, and 7 hh; the expected phenotype counts are 21 ridged and 7 smooth. An actual group can have different counts. Even a fractional expectation is valid: for seven offspring, the expected smooth count is 7 × 1/4 = 1.75, although the observed count must be a whole number.

Independence means an earlier offspring's outcome doesn't change the next offspring's probabilities for these fixed parents. After three ridged offspring from Hh × Hh, the next still has a 1/4 chance of being smooth. Smooth offspring aren't “due” to make the group match 3:1.

Multiply probabilities to find the chance of a specified sequence of independent outcomes. For two offspring from Hh × Hh, the chance that both are smooth is 1/4 × 1/4 = 1/16. For mutually exclusive alternatives, add their probabilities. These are the [product and sum rules used in genetic crosses](https://openstax.org/books/biology-2e/pages/12-3-laws-of-inheritance).

Order matters when a question specifies a sequence. “First ridged, then smooth” describes one order; “one ridged and one smooth, in either order” includes two. Count the allowed arrangements before adding them. The [independent events practice](/blog/mutually-exclusive-vs-independent-events/) covers that probability distinction with other examples.

## What a test cross can tell you

A ridged parent could be HH or Hh. A **test cross** pairs it with a homozygous recessive parent, hh. [OpenStax's test-cross explanation](https://openstax.org/books/biology-2e/pages/12-2-characteristics-and-traits) uses this comparison to distinguish the possible dominant-parent genotypes.

- If the parent is HH, HH × hh produces Hh offspring with probability 1: all are ridged.
- If the parent is Hh, Hh × hh produces Hh and hh with probability 1/2 each: the expected ridged:smooth ratio is 1:1.

A smooth offspring must receive h from both parents. Under our assumptions, finding even one smooth offspring establishes that the ridged parent is Hh.

Finding no smooth offspring in a finite sample leaves both genotypes possible. If the ridged parent is Hh, the chance that all n offspring are ridged is **(1/2)^n**. The same observation has probability 1 if the parent is HH. An all-ridged sample therefore favors HH, but doesn't prove it.

Keep the direction of the question clear. The probability of an observation **assuming Hh** differs from the probability that the parent is Hh **given the observation**. That reverse question also needs information about how likely each parent genotype was before the cross. Don't turn an offspring calculation into a parent-genotype probability without that information.

## Eight monohybrid cross practice problems

All questions use the hypothetical ridged/smooth pod model and the assumptions above. Use the answer format to show your reasoning. Finish this section before checking the answers.

### 1. Identify the gametes

List the gamete allele or alleles and their probabilities for HH, Hh, and hh. A student says an Hh plant makes H gametes 75% of the time because H is dominant. Correct the claim.

### 2. Cross opposite homozygotes

Cross HH × hh. Give the offspring genotype ratio in **HH:Hh:hh** order and the phenotype ratio in **ridged:smooth** order. Keep all categories, including any with zero probability. What is the probability that one offspring is heterozygous?

### 3. Same phenotype, different genotypes

Cross HH × Hh. Give both ratios using the same category orders as question 2. A student predicts all HH offspring because every offspring is ridged. Explain the error.

### 4. Predict a group of offspring

Hh × Hh produces 44 offspring. Find the expected counts for HH, Hh, and hh, then for ridged and smooth phenotypes. Would observing 13 smooth offspring contradict the model?

### 5. Specify the order

Cross Hh × hh. For three independent offspring, find:

- The probability that the first two are ridged and the third is smooth.
- The probability of exactly two ridged and one smooth, in any order.

Show the arrangements included in the second answer.

### 6. A recessive offspring appears

A ridged plant of unknown genotype is crossed with hh. Among ten offspring, nine are ridged and one is smooth. What is the unknown parent's genotype? Does the observed 9:1 phenotype count mean its gametes have a 9:1 allele probability ratio?

### 7. No recessive offspring appears

A different ridged plant of unknown genotype is crossed with hh. All five offspring are ridged. Calculate the probability of this outcome **if the unknown parent is Hh**. Does the observation prove that the parent is HH? Is your calculated probability the chance that the parent is Hh?

### 8. Change one parent

For Hh × Hh, select an offspring at random from those with ridged pods. What is the probability that it is Hh? Now change the cross to HH × Hh and answer the same question. Explain what changed even though you're selecting the same phenotype.

## Answers with the reasoning shown

### 1. One allele per gamete

HH contributes H with probability 1; Hh contributes H or h with probability 1/2 each; hh contributes h with probability 1. The student's 75% confuses expression with transmission. Complete dominance makes an Hh plant ridged; equal segregation still gives its two alleles equal transmission probabilities.

### 2. Every offspring is Hh

The HH parent contributes H with probability 1, and the hh parent contributes h with probability 1. Every combination is Hh.

**HH:Hh:hh = 0:1:0; ridged:smooth = 1:0. P(Hh) = 1, or 100%.** All offspring have the dominant phenotype and carry a recessive allele. The zeros preserve the requested category order: no HH, no hh, and no smooth offspring are possible under this model.

### 3. All ridged, half heterozygous

The HH parent always contributes H. The Hh parent contributes H or h with probability 1/2 each. H + H produces HH with probability 1/2; H + h produces Hh with probability 1/2.

**HH:Hh:hh = 1:1:0; ridged:smooth = 1:0.** All offspring are ridged because each receives H from the HH parent. Phenotype alone doesn't distinguish HH from Hh. The student has grouped the offspring by their appearance and mistaken that group for a single genotype.

### 4. Expected smooth count: 11

Hh × Hh gives genotype probabilities 1/4, 1/2, and 1/4:

| Category | Expected count among 44 offspring |
| --- | ---: |
| HH | 44 × 1/4 = **11** |
| Hh | 44 × 1/2 = **22** |
| hh | 44 × 1/4 = **11** |
| Ridged | 44 × 3/4 = **33** |
| Smooth | 44 × 1/4 = **11** |

The genotype counts sum to 44, as do the phenotype counts. These are two ways of grouping the same offspring; don't add all five rows together. Observing 13 smooth offspring is possible under the model. An expectation of 11 is not a guaranteed result, and a difference from that count alone doesn't establish a different inheritance pattern.

### 5. One sequence versus three arrangements

In Hh × hh, each offspring has probability 1/2 of being ridged and 1/2 of being smooth. For the specified sequence, multiply:

**P(ridged, ridged, smooth) = 1/2 × 1/2 × 1/2 = 1/8 = 12.5%.**

Exactly two ridged offspring in any order allows three arrangements:

1. Ridged, ridged, smooth.
2. Ridged, smooth, ridged.
3. Smooth, ridged, ridged.

Each arrangement has probability 1/8. They are mutually exclusive: a particular set of first, second, and third offspring can have only one of those arrangements. Add them: **3 × 1/8 = 3/8 = 37.5%**. Multiplying just once would count only one allowed order.

### 6. The parent is Hh

The smooth offspring is hh, so the unknown parent contributed h. That parent is ridged, so it also has H. Its genotype must therefore be **Hh** under the stated assumptions.

The observed 9:1 count is a sample result. This parent's gamete probabilities remain **P(H) = P(h) = 1/2**, and the cross's expected phenotype ratio remains ridged:smooth = 1:1. Ten offspring needn't split into five ridged and five smooth. The recessive offspring reveals an allele the parent carries; the observed counts don't redefine the model's transmission probabilities.

### 7. Evidence for HH, without proof

If the parent is Hh, each offspring from Hh × hh has probability 1/2 of being ridged. For all five:

**P(all five ridged | parent Hh) = (1/2)^5 = 1/32 = 3.125%.**

The vertical bar means “given” or “assuming.” Read this as: “The probability of all five being ridged, assuming the parent is Hh.”

HH × hh gives all ridged offspring with probability 1, or 100%. The observation is more likely under HH than under Hh, so it supports HH. But an Hh parent can also produce five ridged offspring. The result doesn't prove HH, and 3.125% isn't P(parent Hh | all five ridged). That would reverse what is assumed and what is being calculated.

A longer all-ridged run becomes less likely under Hh, but its probability remains greater than zero for any finite number of offspring. Without the starting probabilities of HH and Hh, we can't assign a probability to the parent's genotype after observing the cross.

### 8. Restrict the possibilities to ridged offspring

For Hh × Hh, P(Hh) = 1/2 and P(ridged) = 3/4. Every Hh offspring belongs to the ridged group. To find the Hh share of that group, divide:

**P(Hh | ridged) = (1/2) / (3/4) = 2/3.**

Within the equally likely cells of that cross's square, three give ridged offspring and two of those are Hh. Knowing the phenotype excludes hh, leaving HH and the two routes to Hh.

For HH × Hh, P(Hh) = 1/2 and P(ridged) = 1. Every offspring is already in the ridged group:

**P(Hh | ridged) = (1/2) / 1 = 1/2.**

Changing a parent changed the genotype distribution. The word “ridged” didn't change, but the proportions of HH and Hh within that group did. The [conditional probability practice](/blog/conditional-probability-two-way-tables/) develops the same step of restricting the group before dividing.

## Make a flashcard for the missed decision

Save a prompt that targets the error you made. If you calculated correctly but answered for phenotypes instead of genotypes, another multiplication drill won't address that mistake.

| Flashcard front | Flashcard back |
| --- | --- |
| At one autosomal locus, what gamete allele does an HH parent contribute under ordinary segregation? | H with probability 1. Each gamete carries one allele at the locus. |
| Under complete dominance, what are the ratios for Hh × Hh? | HH:Hh:hh = 1:2:1; dominant:recessive phenotype = 3:1. |
| In the ridged/smooth model, what does one smooth offspring from a test cross with hh establish about a ridged parent? | The parent is Hh: the smooth offspring must have received h from it, and its ridged phenotype requires H. |
| In the ridged/smooth model, does a test cross giving five ridged offspring prove the unknown parent is HH? | No. An Hh parent can also produce that sample, with probability (1/2)^5 = 1/32. |

Keep the cross and dominance assumption on cards that ask for a ratio. The [guide to making better flashcards](/blog/how-to-make-better-flashcards/) explains how to keep a prompt narrow and answerable without the original worksheet.

After reviewing a missed step, change one parent genotype and solve again on a blank page. Write the gamete probabilities before the ratio. That gives you a way to rebuild the answer when the question stops looking familiar.
