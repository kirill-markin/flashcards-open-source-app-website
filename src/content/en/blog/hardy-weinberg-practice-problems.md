---
title: "Hardy–Weinberg Practice Problems: Alleles and Expected Counts"
description: "Practice Hardy–Weinberg calculations with explained answers: count alleles, use recessive phenotypes carefully, and separate observed from expected genotypes."
date: "2026-10-17"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/f0c9713d09f0ffbe6a2435094fa9018388fd0e8e096e716b2a19334060eabdea.webp"
keywords:
  - "Hardy Weinberg practice problems"
  - "allele frequency from genotype counts"
  - "Hardy Weinberg expected genotype counts"
  - "q vs q squared"
  - "heterozygote frequency"
  - "Hardy Weinberg problems with answers"
---

A fictional population has 90 AA, 60 Aa, and 50 aa organisms. Its a allele frequency is 0.4. Taking the square root of the aa frequency gives 0.5 instead. Both calculations are easy; only one counts the alleles actually present.

The first decision in Hardy–Weinberg practice problems is what your starting data describe. **Count alleles from observed genotypes. Use p², 2pq, and q² for Hardy–Weinberg expectations.** The worked ledger below shows why those are different jobs, followed by seven problems with explained answers.

![Two pairs of adults practice a partner dance in a sunlit hall, each pairing a rust-colored top with a cream one](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/f0c9713d09f0ffbe6a2435094fa9018388fd0e8e096e716b2a19334060eabdea.webp)

## Know what you're counting

Every example here follows one **autosomal locus**, a location on a non-sex chromosome, with two alleles, A and a. Each diploid organism has two copies of this locus: AA, Aa, or aa. AA and aa are homozygous; Aa is heterozygous.

We define **p = frequency of A** and **q = frequency of a** among the allele copies. These letters don't inherently mean dominant, recessive, common, or rare. We specify complete dominance only in the phenotype problems that need it.

For N organisms, there are **2N allele copies**. One AA contributes two A copies; one Aa contributes one of each; one aa contributes two a copies. The [University of Tennessee's Hardy–Weinberg lesson](https://lgross.utk.edu/LGrossTIEMwebsite/home/gross/public_html/bioed/bealsmodules/hardy-weinberg.html) describes this allele-counting method.

| Starting information | First step | What it gives you |
| --- | --- | --- |
| Observed AA, Aa, and aa counts | p = (2 × AA count + Aa count) / (2N); q = (2 × aa count + Aa count) / (2N) | Allele frequencies in the counted group, without assuming equilibrium |
| An allele frequency and a Hardy–Weinberg model | Find the other frequency with p + q = 1 | Inputs for expected genotype frequencies |
| A recessive phenotype frequency, complete dominance, and a Hardy–Weinberg model | Set q² equal to that phenotype frequency; take its nonnegative square root | A model-based value of q |
| A recessive phenotype frequency and complete dominance, without equilibrium | Identify the aa group; leave the other genotypes unresolved | Usually insufficient information for a unique allele frequency |

**p + q = 1 is bookkeeping for two alleles.** It holds even when observed genotype proportions don't match Hardy–Weinberg expectations.

If the question gives two particular parents and asks about their offspring, start with their gametes instead. The [monohybrid cross practice](/blog/monohybrid-cross-practice/) covers that setup.

## A worked allele ledger

Our first fictional census contains 200 organisms. Keep the organism count and the allele count in separate columns:

| Observed genotype | Organisms | A copies | a copies |
| --- | ---: | ---: | ---: |
| AA | 90 | 180 | 0 |
| Aa | 60 | 60 | 60 |
| aa | 50 | 0 | 100 |
| **Total** | **200** | **240** | **160** |

There are 400 allele copies in total:

- **p = 240 / 400 = 0.6**, or 60% A.
- **q = 160 / 400 = 0.4**, or 40% a.

The observed genotype frequencies use a different denominator: 90/200 = 0.45 AA, 60/200 = 0.30 Aa, and 50/200 = 0.25 aa. A frequency of 0.25 aa means 25% of the organisms are aa. It doesn't mean 25% of all allele copies are a; the heterozygotes contribute a copies too.

### Now calculate Hardy–Weinberg expected counts

Under a Hardy–Weinberg model, the expected genotype frequencies are **p² for AA, 2pq for Aa, and q² for aa**. The two routes to a heterozygote are A then a and a then A: pq + qp = 2pq. The frequencies sum to (p + q)² = 1. [OpenStax explains these random-pairing expectations](https://openstax.org/books/biology-2e/pages/19-1-population-evolution).

For p = 0.6, q = 0.4, and N = 200:

| Genotype | Observed count | Hardy–Weinberg frequency | Expected count: N × frequency |
| --- | ---: | ---: | ---: |
| AA | 90 | 0.6² = 0.36 | 200 × 0.36 = **72** |
| Aa | 60 | 2 × 0.6 × 0.4 = 0.48 | 200 × 0.48 = **96** |
| aa | 50 | 0.4² = 0.16 | 200 × 0.16 = **32** |
| **Total** | **200** | **1** | **200** |

The observed counts stay 90, 60, and 50. Calculating expectations doesn't replace them.

For Hardy–Weinberg equilibrium to persist across generations, the idealized conditions include random mating with respect to the locus, an effectively large population so genetic drift is negligible, and no selection, migration, or mutation affecting its allele frequencies. These are the model conditions described in the [University of Tennessee lesson](https://lgross.utk.edu/LGrossTIEMwebsite/home/gross/public_html/bioed/bealsmodules/hardy-weinberg.html). You don't need them to count the allele copies in an observed group.

### Same allele frequencies, different genotype counts

Consider a second hypothetical census: 72 AA, 96 Aa, and 32 aa organisms. Count its alleles directly:

- A copies: 2 × 72 + 96 = **240**.
- a copies: 2 × 32 + 96 = **160**.
- Total: 400 copies, so **p = 0.6 and q = 0.4 again**.

The two censuses have identical allele frequencies. Their genotypes are distributed differently: the first has 60 heterozygotes; the second has 96. These are two constructed groups, not observations of a population changing over time.

This distinction matters when interpreting a mismatch. Genotype proportions can differ without allele frequencies differing, as [Berkeley's population-genetics notes explain](https://ib.berkeley.edu/courses/ib162/HWDeriv.htm). In a finite sample, chance variation also matters. A mismatch alone doesn't identify natural selection, establish a change across generations, or demonstrate statistical significance. Conversely, matching the expected proportions doesn't prove that all biological assumptions hold.

## When q² really is the starting point

For the first census, the observed aa frequency is 50/200 = 0.25. Square-rooting it gives 0.5, yet the ledger gives q = 0.4. The error is treating an observed genotype frequency as a Hardy–Weinberg expectation without establishing that model.

A phenotype is an observable trait. A worksheet may say: “Assume Hardy–Weinberg equilibrium. Under complete dominance, 16% of organisms show the recessive phenotype.” Then aa is the recessive group, and the model gives:

1. **q² = 0.16**.
2. **q = √0.16 = 0.4**. Frequencies can't be negative.
3. **p = 1 − 0.4 = 0.6**.
4. **2pq = 2 × 0.6 × 0.4 = 0.48**.

Here, 16% refers to aa organisms; 40% refers to a allele copies; 48% is the expected heterozygote frequency. Write the category beside each number so an organism percentage stays distinct from an allele-copy percentage.

When a phenotype percentage comes from a real finite sample, inferring q this way is an estimate under the model. The practice problems below treat supplied percentages as exact worksheet inputs.

## Seven Hardy–Weinberg practice problems

All data are fictional. Use one diploid autosomal locus with A and a. Label frequencies and counts as observed or model-based. Try the problems before reading the answers.

### 1. Count first

A census contains 70 AA, 80 Aa, and 50 aa organisms. Find the number of organisms N, the total number of allele copies, and p and q. Is an equilibrium assumption needed?

### 2. Build the expected distribution

In a Hardy–Weinberg model, p = 0.65 and N = 400. Calculate q, all three expected genotype frequencies, and all three expected genotype counts.

### 3. Compare observed and expected

Use the census from problem 1. Calculate the Hardy–Weinberg expected counts using its allele frequencies. A student rounds each expected count to a whole organism before making a comparison. Is that necessary? Do different observed and expected counts by themselves prove selection?

### 4. Start from a recessive phenotype

In a hypothetical plant population, AA and Aa plants have striped pods, and aa plants have plain pods. Assume complete dominance and Hardy–Weinberg equilibrium. Plain pods occur in 16% of plants. For N = 625, find p, q, and expected counts of AA, Aa, and aa. What is the expected number with striped pods?

### 5. Remove the equilibrium assumption

Keep the complete-dominance phenotype model from problem 4. This time, 9 of 100 plants have plain pods, and no equilibrium assumption is given. Can you determine q uniquely? Calculate q for both possible censuses below:

- 91 AA, 0 Aa, 9 aa.
- 0 AA, 91 Aa, 9 aa.

### 6. An exact numerical match

A census contains 36 AA, 48 Aa, and 16 aa organisms. Calculate p and q, then the Hardy–Weinberg expected counts. Does an exact match prove random mating, no selection, and the other assumptions?

### 7. Work backward from heterozygotes

A Hardy–Weinberg model gives 2pq = 0.32. A student concludes q = 0.32. Explain the error and find both possible pairs of p and q. Can the heterozygote frequency tell you which allele is more common?

## Answers with the reasoning shown

### 1. p = 0.55 and q = 0.45

N = 70 + 80 + 50 = **200**, so there are **400 allele copies**.

- A copies = 2 × 70 + 80 = 220; **p = 220/400 = 0.55**.
- a copies = 2 × 50 + 80 = 180; **q = 180/400 = 0.45**.

These are observed allele frequencies from the census. No equilibrium assumption is needed. The checks are 220 + 180 = 400 and 0.55 + 0.45 = 1. Dividing either allele count by 200 would use the number of organisms where the number of copies belongs.

### 2. Expected counts: 169 AA, 182 Aa, 49 aa

First find **q = 1 − 0.65 = 0.35**.

| Genotype | Expected frequency | Expected count among 400 |
| --- | ---: | ---: |
| AA | 0.65² = 0.4225 | **169** |
| Aa | 2 × 0.65 × 0.35 = 0.455 | **182** |
| aa | 0.35² = 0.1225 | **49** |

The frequencies sum to 1 and the expected counts to 400. These are model expectations, not a report of genotypes counted in a sample.

### 3. Fractional expectations are valid

Using p = 0.55, q = 0.45, and N = 200:

| Genotype | Observed count | Expected count |
| --- | ---: | ---: |
| AA | 70 | 200 × 0.55² = **60.5** |
| Aa | 80 | 200 × 2 × 0.55 × 0.45 = **99** |
| aa | 50 | 200 × 0.45² = **40.5** |

The expected counts sum to 200. Keep the halves: an expectation can be fractional even though an observed count is a whole number. Rounding isn't required and can change the total.

The comparison shows a numerical mismatch. It doesn't by itself establish statistical significance or tell you its cause. Diagnosing selection would require further evidence; this calculation supplies neither a statistical test nor observations across generations.

### 4. Expected striped count: 525

Plain plants are aa under the stated phenotype model. With equilibrium supplied, **q² = 0.16**, so **q = 0.4** and **p = 0.6**.

- AA: 625 × 0.36 = **225**.
- Aa: 625 × 0.48 = **300**.
- aa: 625 × 0.16 = **100**.

Striped plants include AA and Aa: 225 + 300 = **525**. The genotype counts sum to 625, and the two phenotype counts sum to 525 + 100 = 625. Don't add the genotype and phenotype totals together; they describe the same plants.

### 5. Nine plain plants don't fix q

Both proposed censuses contain nine aa plants and 91 striped plants. Their allele counts differ:

| Possible census | a copies | q among 200 allele copies |
| --- | ---: | ---: |
| 91 AA, 0 Aa, 9 aa | 2 × 9 + 0 = 18 | **0.09** |
| 0 AA, 91 Aa, 9 aa | 2 × 9 + 91 = 109 | **0.545** |

The first puts every striped plant in AA; the second puts every striped plant in Aa. Intermediate allocations give other q values between these extremes. Without the equilibrium assumption, **the phenotype count doesn't determine a unique q**.

Taking √0.09 = 0.3 would impose a Hardy–Weinberg relationship that the question never supplied. It wouldn't count the a copies in either proposed census.

### 6. Matching counts don't verify the assumptions

N = 100, with 200 allele copies:

- p = (2 × 36 + 48)/200 = **0.6**.
- q = (2 × 16 + 48)/200 = **0.4**.

The expected counts are 100 × 0.36 = **36 AA**, 100 × 0.48 = **48 Aa**, and 100 × 0.16 = **16 aa**. They match the census exactly.

This establishes a numerical match for this locus and group. The counts alone don't establish how the organisms mated or whether selection, migration, and mutation were absent.

### 7. Two allele-frequency pairs fit

The value 0.32 describes heterozygous organisms, not a allele copies. Substitute q = 1 − p:

**2p(1 − p) = 0.32**

Rearrange and factor:

**p² − p + 0.16 = 0**

**(p − 0.2)(p − 0.8) = 0**

The possibilities are **p = 0.2, q = 0.8** or **p = 0.8, q = 0.2**. Both give 2pq = 0.32. Swapping the two allele frequencies leaves their product unchanged, so the heterozygote frequency alone doesn't identify the more common allele.

## Turn the recurring error into one card

Make a card for the decision you missed, then solve a fresh numerical example on paper. A whole worked solution on one card is easy to recognize without being able to reconstruct it.

| If you missed… | Flashcard front | Flashcard back |
| --- | --- | --- |
| The denominator | For N diploid organisms at one autosomal locus, how many allele copies are counted? | 2N. An Aa organism contributes one A and one a. |
| q versus q² | Under Hardy–Weinberg equilibrium, what do q and q² describe? | q: a allele frequency. q²: expected aa genotype frequency. |
| The starting assumption | Can an observed aa frequency always be square-rooted to obtain q? | No. That step uses the Hardy–Weinberg model; full observed genotype counts allow direct allele counting. |
| Frequencies versus counts | Under Hardy–Weinberg equilibrium, how do you turn heterozygote frequency into an expected count? | N × 2pq. Use the number of organisms, not 2N. |

The [guide to making better flashcards](/blog/how-to-make-better-flashcards/) explains how to keep each prompt answerable on its own. For a broader revision plan, the [AP Biology flashcard guide](/blog/how-to-use-flashcards-for-ap-biology/) shows how to combine cards with practice.

On your next worksheet, write three labels before calculating: **given data, observed or expected, requested category**. Then choose the equation. That short pause keeps an allele frequency from quietly becoming a genotype frequency halfway through the solution.

*Preparation note: This article was developed with substantial AI assistance for research, drafting, and editing. Its fictional examples are original, and the numerical results were checked with read-only SQL calculations in BigQuery. It hasn't been reviewed by a human biology expert or validated in a classroom. The illustration was AI-generated.*
