---
title: "Three-Point Testcross Practice: Gene Order and Double Crossovers"
description: "Infer gene order from eight progeny classes, count double crossovers in both intervals, and solve six three-point testcross practice problems with answers."
date: "2026-11-04"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/6ba69c50092beddbab749853d5bd72d8e9b3c7628af2ad29690f0af4d92955f7.webp"
keywords:
  - "three point testcross practice"
  - "gene mapping practice"
  - "double crossover"
  - "three point cross gene order"
---

The same 1,000 offspring below give an outer-marker recombination frequency of **28%** and an estimated map length of **32 cM**. Both calculations are correct. The difference comes from 20 double-recombinant offspring that the outer markers can't reveal.

This three-point testcross practice starts with eight progeny classes and works backward to a chromosome map. If you need to predict offspring from a known two-locus arrangement first, use [dihybrid cross practice](/blog/dihybrid-cross-practice/). For the physical exchange between chromatids, see [crossing over versus independent assortment](/blog/crossing-over-vs-independent-assortment/).

![A gardener looks along a path that crosses a winding stream twice on two wooden footbridges](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/6ba69c50092beddbab749853d5bd72d8e9b3c7628af2ad29690f0af4d92955f7.webp)

## Know what the offspring labels reveal

Cross a triple heterozygote, AaBbCc, with a homozygous recessive tester, aabbcc. The tester supplies only abc. With complete dominance and separately scorable traits, each offspring phenotype reveals the heterozygote's gamete. An offspring with genotype AabbCc, for example, received **AbC** from the heterozygote. The [University of Richmond's linkage notes](https://facultystaff.richmond.edu/~lrunyenj/bio554/lectnotes/ch5.html) explain this readout and the three-point method.

These are invented teaching counts. Assume equal genotype viability, reliable scoring, no segregation distortion, and short enough intervals to neglect additional undetected exchanges within either interval. For this standard exercise, identify the largest reciprocal pair as parental and the smallest as double recombinant. That ranking is a classroom inference, not proof from abundance alone.

## Find the middle gene before calculating distances

The input lists alleles in **A–C–B order**. That's a notation convention, not the chromosome order. Each label records one gamete from the heterozygote.

| Input label, A–C–B | Offspring |
| --- | ---: |
| ACB | 350 |
| acb | 350 |
| Acb | 90 |
| aCB | 90 |
| AcB | 50 |
| aCb | 50 |
| ACb | 10 |
| acB | 10 |
| **Total** | **1,000** |

The parental pair is **ACB/acb**; the double-recombinant pair is **ACb/acB**. In the parental notation ACB/acb, the slash separates the two allele arrangements carried on the heterozygote's homologous chromosomes; this arrangement is its **phase**. Compare each double recombinant with the parental type that matches at two loci:

- ACB → ACb changes only B/b.
- acb → acB also changes only B/b.

**B is the middle gene.** A double-recombinant gamete retains the parental combination of outer alleles while the middle allele switches. The order is A–B–C, equivalently C–B–A. The comparison establishes that order; the input's letter sequence doesn't.

Now rewrite every label in map order. Keep allele case attached to its gene: **AcB becomes ABc**, not AbC.

| Input A–C–B | Map order A–B–C | Count | Class under the model |
| --- | --- | ---: | --- |
| ACB | ABC | 350 | Parental |
| acb | abc | 350 | Parental |
| Acb | Abc | 90 | Single crossover, A–B |
| aCB | aBC | 90 | Single crossover, A–B |
| AcB | ABc | 50 | Single crossover, B–C |
| aCb | abC | 50 | Single crossover, B–C |
| ACb | AbC | 10 | Double crossover |
| acB | aBc | 10 | Double crossover |

## Count double recombinants in both intervals

For each interval, count offspring whose two-marker combination differs from both parental combinations. For A–B, parental combinations are AB and ab; recombinants carry Ab or aB. For B–C, parental combinations are BC and bc; recombinants carry Bc or bC. Divide each recombinant count by the total offspring count, then multiply by 100 for the short-interval estimate in centimorgans (cM).

**A–B:** (90 + 90 + 10 + 10) / 1,000 = **0.20**, giving approximately **20 cM**.

**B–C:** (50 + 50 + 10 + 10) / 1,000 = **0.12**, giving approximately **12 cM**.

```text
A ── 20 cM ── B ── 12 cM ── C
```

Each double recombinant contributes once to each interval numerator. The denominator stays 1,000. The [CSUN three-point mapping lecture](https://www.csun.edu/~cmalone/pdf360/Ch06-2%203pt.pdf) illustrates this counting rule. These genetic distance estimates don't specify DNA lengths in base pairs; [OpenStax's genetic-mapping section](https://openstax.org/books/biology-2e/pages/13-1-chromosomal-theory-and-genetic-linkage) provides the linkage background.

For the outer A–C pair, recombinant combinations are Ac and aC. Those occur in the four single-crossover rows: **(90 + 90 + 50 + 50)/1,000 = 28%**. Double recombinants AbC/aBc retain parental AC/ac combinations, hiding their exchanges from that two-marker count.

The interval sum is **20 + 12 = 32 cM**. In this model:

**outer recombination fraction = 0.20 + 0.12 − 2 × 0.02 = 0.28.**

Here 0.02 is the fraction of sampled gametes classified as double recombinant, 20/1,000. It isn't the fraction of meioses containing two crossovers: the table records one transmitted gamete per offspring, not all four products of each meiosis. With longer intervals, undetected multiple exchanges also limit these simple distance estimates.

## Six problems to solve with the worked map covered

Keep the assumptions above. Questions 1–4 use the 1,000-offspring dataset.

1. Identify the parental and double-recombinant pairs in A–B–C notation. Which gene is in the middle? Show both comparisons.
2. Assign all eight classes and calculate both interval distances. A student reports 18 cM and 10 cM. What was omitted?
3. Another student adds the 20 double recombinants to the outer-marker recombinant count and reports 30 cM. Calculate the outer recombination frequency and interval-sum length separately.
4. Write the map starting at C. Which distance sits beside C? Does reversing the drawing alter the parental phase?
5. Use the new testcross table below, whose labels are in **P–Q–R order**. Find gene order, rewrite the parental pair in map order, assign the crossover pairs, and calculate both intervals and the outer recombination frequency.
6. A report gives only “AaBbCc × aabbcc; 1,000 offspring.” Can you determine gene order or distances? Would knowing ABC/abc phase be enough? What if eight reported classes were approximately equal?

| Question 5 input, P–Q–R | Offspring |
| --- | ---: |
| PqR | 240 |
| pQr | 240 |
| PQR | 40 |
| pqr | 40 |
| PQr | 15 |
| pqR | 15 |
| Pqr | 5 |
| pQR | 5 |

## Answers and checks

### 1. Compare matching outer alleles

Parentals are **ABC/abc**; double recombinants are **AbC/aBc**. ABC → AbC and abc → aBc each change only B/b, placing **B in the middle**.

### 2. Include both double-recombinant rows

ABC/abc are parental; Abc/aBC are A–B singles; ABc/abC are B–C singles; AbC/aBc are doubles. The interval counts are **200 and 120**, giving **20 and 12 cM**. The student's 180 and 100 omit the **20 doubles from each interval**.

### 3. Separate the two quantities

Outer recombination frequency is **280/1,000 = 28%**. Interval-sum length is **(280 + 2 × 20)/1,000 × 100 = 32 cM**. Adding doubles once gives 30, which matches neither quantity: doubles contribute to both intervals and neither outer-marker recombinant class.

### 4. Reverse the whole drawing

**C — 12 cM — B — 20 cM — A.** Distances follow their gene pairs. The phase stays the same biologically; written in C–B–A order, ABC/abc becomes CBA/cba. Reversing a map changes neither chromosome arrangement nor inheritance.

### 5. R is in the middle

The largest pair, **PqR/pQr**, is parental; the smallest, **Pqr/pQR**, is double recombinant. PqR → Pqr and pQr → pQR change only R/r. Choose **P–R–Q**, or its reverse Q–R–P. The parental pair rewrites as **PRq/prQ**: P and Q are in repulsion, with their uppercase alleles on opposite homologs.

In the original P–Q–R notation:

- P–R singles: **PQr/pqR**, 15 + 15.
- R–Q singles: **PQR/pqr**, 40 + 40.
- Doubles: **Pqr/pQR**, 5 + 5.

Total = **600**. P–R = (30 + 10)/600 × 100 = **6⅔ cM**; R–Q = (80 + 10)/600 × 100 = **15 cM**. The map sums to **21⅔ cM**. Outer P–Q recombinants are PQ/pq: (40 + 40 + 15 + 15)/600 = **18⅓%**. The difference is twice the double-recombinant percentage: 2 × 10/600 × 100 = **3⅓ percentage points**.

### 6. Counts and assumptions carry the information

**Neither genotype nor sample size supplies a map.** ABC/abc adds phase, but still supplies no recombination frequencies. You need informative progeny-class counts or equivalent linkage information.

Approximately equal classes don't identify a reliable parental or double-recombinant pair by rank. They can be consistent with independent assortment or markers whose linkage isn't detectable in that sample. Tiny count differences alone don't justify assigning a middle gene.

For another attempt, cover the class assignments and rebuild both interval numerators from the raw table. Put a missed decision on a paper card or make a card in Nibomo using the [getting-started guide](/docs/getting-started/). Keep the parental phase and relevant counts in the prompt, so the answer follows from the information supplied.

*Production note: AI tools researched, drafted, and edited this article, created the fictional exercises, and generated the illustration. Independent calculations checked the class totals, gene-order comparisons, interval counts, and outer-marker frequencies. The examples are fictional, and the article hasn't had human specialist review.*
