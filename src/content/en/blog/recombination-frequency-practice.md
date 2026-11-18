---
title: "Recombination Frequency Practice: Read a Two-Gene Testcross"
description: "Identify parental and recombinant offspring, distinguish cis and trans phase, and calculate recombination frequency with worked examples and practice answers."
date: "2026-11-18"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c01122146c5bd09e7e1945e375dde824326d3759fb54fd6176d8cd658759feb9.webp"
keywords:
  - "recombination frequency practice"
  - "testcross problems"
  - "parental and recombinant offspring"
  - "cis trans linkage"
---

An **AaBb** offspring can be parental in one testcross and recombinant in another. The allele arrangement in the heterozygous parent decides. Write it down before adding counts.

This recombination frequency practice sheet assumes Mendelian segregation, accurately scored markers, and no fertilization or survival differences that distort counts. The six exercises use invented teaching data.

![A baker sorts round and elongated rolls with seeded and plain crusts into four trays](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c01122146c5bd09e7e1945e375dde824326d3759fb54fd6176d8cd658759feb9.webp)

This AI-assisted worksheet uses the genetics sources linked below.

## Read the gamete inside each offspring

A two-gene testcross pairs a double heterozygote, **AaBb**, with a double-recessive tester, **aabb**. The tester contributes **ab** every time. The offspring genotype therefore reveals which gamete came from the heterozygote, as in [OpenStax's testcross explanation](https://openstax.org/books/biology-2e/pages/13-1-chromosomal-theory-and-genetic-linkage).

| Offspring genotype | Tester contribution | Heterozygote's gamete |
| --- | --- | --- |
| AaBb | ab | AB |
| Aabb | ab | Ab |
| aaBb | ab | aB |
| aabb | ab | ab |

Each gamete contains one allele per gene. **Aa** is a diploid genotype, not a gamete label here. For terminology, use the [chromosome and chromatid counting guide](/blog/chromosome-chromatid-counting/).

## Cis and trans change which classes count

The genotype **AaBb** alone doesn't show phase: which alleles sit together on each homologous chromosome. A slash separates the two homologs.

| Phase | Arrangement | Parental gametes | Recombinant gametes |
| --- | --- | --- | --- |
| Cis, or coupling | AB/ab | AB and ab | Ab and aB |
| Trans, or repulsion | Ab/aB | Ab and aB | AB and ab |

“Parental” means the original allele combinations carried by the heterozygote's homologs. Uppercase letters don't automatically mark a parental combination.

When phase is unknown, two clearly larger reciprocal classes usually suggest the parentals under these assumptions. Small samples or selection can make this unreliable. Use supplied phase whenever available.

## Calculate the same quantity in either phase

**RF (%) = (offspring from both recombinant classes ÷ total offspring in all four classes) × 100**

Compare these two invented testcrosses:

| Offspring | Cis parent AB/ab | Trans parent Ab/aB |
| --- | ---: | ---: |
| AaBb | 456 | 52 |
| aabb | 444 | 48 |
| Aabb | 52 | 456 |
| aaBb | 48 | 444 |
| Total | 1,000 | 1,000 |

For the cis parent, **Aabb + aaBb** are recombinant: (52 + 48) ÷ 1,000 × 100 = **10%**.

For the trans parent, **AaBb + aabb** are recombinant: (52 + 48) ÷ 1,000 × 100 = **10%** again.

RF estimates the fraction of recombinant gametes represented among the scored offspring. It doesn't directly give the percentage of meioses containing a crossover. A single crossover involves two of four chromatids; [trace those products here](/blog/crossing-over-vs-independent-assortment/).

## Keep the map-distance claim small

For a short linked interval, **RF in percent approximately equals map distance in centimorgans (cM)**. An 8% result gives an estimate of about 8 cM under that approximation. This is genetic distance, not a fixed number of DNA bases.

Over longer intervals, multiple crossovers can restore parental combinations at the two endpoints. A two-point testcross misses those exchanges and underestimates map distance. The [Jackson Laboratory genetics text](https://www.informatics.jax.org/silverbook/chapters/7-2.shtml) explains this limitation.

Under the standard model, the **expected two-point recombinant fraction has a maximum of 50%**. Genes on different chromosomes can give 50%; sufficiently distant genes on the same chromosome can also behave that way. [OpenStax discusses both possibilities](https://openstax.org/books/biology-2e/pages/13-1-chromosomal-theory-and-genetic-linkage). A result near 50% doesn't establish a distance of 50 cM or prove separate chromosomes.

Observed counts are samples. With phase established independently, their recombinant fraction can exceed 50% by chance.

## Six testcross problems

All crosses use an **aabb** tester. Write the recombinant gametes, their offspring classes, the numerator, and the total before calculating. Answers follow the entire set.

| Problem | Given | Find |
| --- | --- | --- |
| 1 | AB/ab parent; AaBb 228, aabb 232, Aabb 19, aaBb 21 | RF and approximate short-interval distance |
| 2 | Ab/aB parent; AaBb 32, aabb 28, Aabb 271, aaBb 269 | Parental classes and RF |
| 3 | Phase unknown; AaBb 54, aabb 46, Aabb 354, aaBb 346 | Likely phase and estimated RF |
| 4 | AB/ab parent; expected RF 6%; 1,200 offspring | Expected count in each class |
| 5 | AaBb, aabb, Aabb, aaBb: 250 offspring each | RF and what it establishes about chromosome location |
| 6 | Phase independently known as AB/ab; AaBb 4, aabb 5, Aabb 6, aaBb 5 | Observed RF and whether the counts are impossible |

For problem 4, assume the two parental classes have equal expected frequencies, as do the two recombinant classes.

## Answers with the missing steps

### 1. Add both recombinant classes

The cis parent starts with **AB and ab**, so recombinant gametes are **Ab and aB**. Their offspring are **Aabb and aaBb**. Total = 228 + 232 + 19 + 21 = **500**. RF = (19 + 21) ÷ 500 × 100 = **8%**, or approximately **8 cM** for a short interval. Counting just 19 would miss the other recombinant class.

### 2. Follow the supplied trans phase

Parental gametes are **Ab and aB**, producing **Aabb and aaBb**. Recombinant gametes **AB and ab** produce **AaBb and aabb**. Total = **600**; RF = (32 + 28) ÷ 600 × 100 = **10%**. The double heterozygote offspring belongs in the recombinant numerator here.

### 3. Infer phase before calculating

The larger classes, **Aabb and aaBb**, reveal gametes **Ab and aB**, suggesting **trans: Ab/aB**. The likely recombinant gametes are **AB and ab**, producing **AaBb and aabb**. Total = **800**; estimated RF = (54 + 46) ÷ 800 × 100 = **12.5%**. Calling the less frequent classes recombinant depends on the no-distortion assumptions above; their low counts alone don't prove their identity.

### 4. Split each category into two

Expected recombinant total = 0.06 × 1,200 = **72**, giving **36 Aabb and 36 aaBb**. Expected parental total = 1,200 − 72 = **1,128**, giving **564 AaBb and 564 aabb**. Check: 36 + 36 + 564 + 564 = 1,200. Actual samples needn't match those expectations exactly.

### 5. Half the offspring are recombinant in either phase

With cis phase, recombinant gametes **Ab and aB** produce **Aabb and aaBb**. With trans phase, recombinant gametes **AB and ab** produce **AaBb and aabb**. Either way, observed RF = (250 + 250) ÷ 1,000 × 100 = **50%**. These counts don't reveal phase or distinguish different chromosomes from widely separated loci on one chromosome. More mapping information is needed.

### 6. A sample can cross the expected limit

Known cis phase makes **Ab and aB** the recombinant gametes, producing **Aabb and aaBb**. Total = **20**; observed RF = (6 + 5) ÷ 20 × 100 = **55%**. The counts are possible through sampling variation, including when the underlying fraction is 50%. Keep the known phase; don't relabel the smaller classes to force the estimate below 50%. This small sample doesn't establish linkage or a 55 cM distance.

For broader English-language recall, the [AP Biology flashcard deck](/catalog/packages/ap-biology-flashcards-complete-course-review/) includes linkage and recombination concepts. Regular recall with spaced review can help retain the definitions; keep solving fresh count problems to practice choosing the numerator. If your next task is testing an association statistically, use the [chi-square independence practice](/blog/chi-square-independence-practice/).
