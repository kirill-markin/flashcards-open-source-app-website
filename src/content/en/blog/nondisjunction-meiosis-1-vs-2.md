---
title: "Nondisjunction in Meiosis I vs II: Worked Practice"
description: "Trace chromosome separation errors through meiosis I and II, count all four products, and predict fertilization outcomes with explained practice questions."
date: "2026-10-13"
image: "/blog/nondisjunction-meiosis-1-vs-2.png"
keywords:
  - "nondisjunction meiosis 1 vs 2"
  - "nondisjunction practice problems"
  - "meiosis I nondisjunction gametes"
  - "meiosis II nondisjunction"
  - "n+1 n-1 gametes"
---

A gamete with one extra chromosome can result from an error in either meiosis I or II. Its count alone doesn't identify the division. Following all four products helps: a meiosis I error affects both branches; an error in just one meiosis II cell leaves the other branch untouched.

Track one chromosome pair in a **2n = 6** species, then try eight nondisjunction practice problems. For normal counts, start with [chromosome and chromatid counting](/blog/chromosome-chromatid-counting/).

![An orchard volunteer checks four baskets: two apples in one, none in its partner, and one in each remaining basket](/blog/nondisjunction-meiosis-1-vs-2.png)

## Set up the pair you're following

Normally, **homologs separate in meiosis I; sisters separate in meiosis II**. Nondisjunction is a failure of that separation: both go to the same destination. [OpenStax](https://openstax.org/books/biology-2e/pages/13-2-chromosomal-basis-of-inherited-disorders) distinguishes the two errors.

Our invented species has three chromosome kinds: A, B, and C, with two homologs of each. Its haploid number is **n = 3**: a normal product receives one of each kind.

Here, **n+1** means one extra chromosome, and **n−1** means one missing chromosome. Neither describes a change by a whole chromosome set.

Label the A homologs **A1 and A2**, not alleles. Each replicated homolog remains one chromosome with two sister chromatids. Each chromatid contains one complete double-stranded nuclear DNA molecule; after separation, each counts as a daughter chromosome. The [NHGRI chromatid definition](https://www.genome.gov/genetics-glossary/Chromatid) describes the attached sister pair.

Every example assumes:

- One nondisjunction event involving A, either in meiosis I or in just one of the two meiosis II cells.
- Normal segregation of B and C, and normal behavior in every other division.
- One DNA replication before meiosis I; none between divisions.
- No chromosome loss, breakage, or extra replication. Counts refer to completed divisions, including cytokinesis.

Count nuclear DNA only, excluding mitochondrial and chloroplast DNA.

Our four-product schematic doesn't represent four functional human eggs: [human oogenesis](https://www.ncbi.nlm.nih.gov/books/NBK10008/) produces one egg and polar bodies through unequal divisions.

## Meiosis I: both homologs enter one branch

After replication, the starting cell contains six chromosomes and twelve DNA molecules.

A1 and A2 both enter cell L during meiosis I; cell R receives neither. B and C separate normally: **each cell gets one B and one C**.

| After meiosis I | Replicated chromosomes present | Chromosomes | DNA molecules |
| --- | --- | ---: | ---: |
| Cell L | A1, A2, one B, one C | 4 | 8 |
| Cell R | One B, one C; no A | 2 | 4 |

Meiosis II proceeds normally. Each product from L receives a daughter chromosome from A1 and another from A2, plus B and C. Each product from R receives only B and C.

**The four final counts are 4, 4, 2, 2: two n+1 products and two n−1 products.** None has the normal chromosome complement. The products missing A aren't empty; the unaffected chromosomes are still there.

Meiosis II divides what's already in each branch. It can't send A back into cell R.

## Meiosis II: keep the other branch in view

This time meiosis I is normal. Cell L receives replicated A1, B, and C; cell R receives replicated A2, B, and C. Each has three chromosomes containing six DNA molecules.

In cell L's meiosis II, both A1-derived sister chromatids go into product L1. Product L2 gets neither. B and C separate normally. Cell R completes meiosis II normally too.

| Final product | A-derived chromosomes | Other chromosomes | Total chromosomes | DNA molecules |
| --- | ---: | --- | ---: | ---: |
| L1 | 2 | One B, one C | 4 | 4 |
| L2 | 0 | One B, one C | 2 | 2 |
| R1 | 1 | One B, one C | 3 | 3 |
| R2 | 1 | One B, one C | 3 | 3 |

**The four final counts are 4, 2, 3, 3: one n+1, one n−1, and two normal products.** An error in R would move the abnormal products to that branch. “Normal” means the normal chromosome complement; it doesn't mean genetically identical.

[MIT's introductory biology recitation](https://ocw.mit.edu/courses/7-013-introductory-biology-spring-2018/df03b2fc0a1a06d9f2283971b47b0d63_MIT7_013s18Rec4_slides.pdf#page=9) confirms this distinction: homolog nondisjunction affects four products; chromatid nondisjunction in one daughter cell affects two.

### A ledger that catches missing chromosomes

Both examples begin with twelve DNA molecules after replication. At the end, the totals remain twelve:

- Meiosis I error: **4 + 4 + 2 + 2 = 12**.
- Meiosis II error: **4 + 2 + 3 + 3 = 12**.

An extra chromosome in one product has a corresponding absence elsewhere; existing material is redistributed.

In these completed-stage counts, each chromosome after meiosis I contains two DNA molecules; each daughter chromosome after meiosis II contains one. [OpenStax's meiosis account](https://openstax.org/books/biology-2e/pages/11-1-the-process-of-meiosis) follows one replication through both divisions.

DNA-molecule count differs from DNA amount: chromosome lengths can differ, so four molecules needn't contain twice the DNA of two.

## What the products let you infer

Given **all four products from one meiosis**, the known n, and our single-error assumptions, compare the complete set:

| Error | What goes to the same destination | Four final products | Products with a normal complement |
| --- | --- | --- | ---: |
| Meiosis I | Both homologs of the affected pair | n+1, n+1, n−1, n−1 | 0 |
| Meiosis II in one cell | Both sisters of the affected chromosome | n+1, n−1, n, n | 2 |

A **single n+1 or n−1 product** is compatible with either division. Even one normal product only excludes the meiosis I error under this model; it doesn't establish that an error happened elsewhere. Mixing products from different meioses also removes the basis for this four-product comparison.

Don't diagnose the division from an arbitrary allele match: crossing over can change which alleles a chromatid carries. Here, follow chromosome counts and branches.

## Add the normal gamete at fertilization

A normal gamete contributes n chromosomes, including one A. Fertilization combines the contributions; see the [NHGRI explanation of haploid cells](https://www.genome.gov/genetics-glossary/haploid).

| Product used as a gamete | Normal partner | Zygote count | A chromosomes in zygote |
| --- | --- | --- | ---: |
| n+1 = 4 | n = 3 | 2n+1 = 7 | 3 |
| n−1 = 2 | n = 3 | 2n−1 = 5 | 1 |
| n = 3 | n = 3 | 2n = 6 | 2 |

Three copies of A give **trisomy for A**; one gives **monosomy for A**. Both are aneuploidy, a gain or loss of individual chromosomes, as described by [NHGRI](https://www.genome.gov/genetics-glossary/Aneuploidy).

Seven chromosomes means three A, two B, and two C. Triploidy requires three of every kind: **3n = 9**. These counts don't predict development or survival.

## Eight problems to solve before scrolling

Draw **one starting cell → two meiosis I cells → four final products**, keeping siblings grouped by branch. Use our stated assumptions.

### 1. Follow the missing pair

For 2n = 6, A1 and A2 both enter cell R during meiosis I. Give the chromosome and DNA-molecule counts in L and R after that division, then the chromosome counts in their four final products.

### 2. Change the affected branch

For 2n = 6, meiosis I is normal. A2's sisters undergo nondisjunction in cell R during meiosis II. List the number of A chromosomes and the total chromosome count in each final product.

### 3. Read a complete set

A species has 2n = 10. All four products of one meiosis have chromosome counts 6, 4, 5, and 5. Which division contains the error? Which products are siblings from the affected branch?

### 4. You only have one product

For 2n = 14, one final product contains eight chromosomes. Can its count identify meiosis I versus II nondisjunction? Give the two possible complete four-product patterns.

### 5. Find the broken ledger

A student predicts 4, 4, 3, and 2 final chromosomes after one meiosis I error in the 2n = 6 model. Explain what's wrong and repair the counts.

### 6. Calculate fertilization

For 2n = 12, a product missing the affected chromosome functions as a gamete and combines with a normal gamete. Give each gamete's chromosome count, the zygote count, and the number of copies of the affected chromosome in the zygote.

### 7. Extra chromosome or extra set?

For 2n = 8, an n+1 gamete combines with a normal gamete. Is the resulting zygote triploid? Give its chromosome count and the count a triploid zygote would have.

### 8. Test the assumptions

For 2n = 6, all four final products have counts 4, 2, 4, and 2, listed without sibling labels. A student labels this “meiosis II nondisjunction in one cell.” Does that fit? If meiosis I was normal, what additional error would produce this pattern?

## Answers and explanations

### 1. The deficit follows cell L

L has **2 chromosomes / 4 DNA molecules**; R has **4 chromosomes / 8 DNA molecules** after meiosis I. L's final products have **2, 2** chromosomes; R's have **4, 4**. B and C account for the two chromosomes in each deficient product.

### 2. Two normal products remain in L

L's products each have **one A, three chromosomes total**. R's have **two A, four total**, and **zero A, two total**. Their order within R can reverse: **3, 3, 4, 2**.

### 3. An error in meiosis II

Here n = 5: **n+1, n−1, n, n**. The six- and four-chromosome products are siblings from the affected branch; both five-chromosome products come from the normal branch.

### 4. Both divisions remain possible

Here n = 7. A meiosis I error gives **8, 8, 6, 6**; a meiosis II error gives **8, 6, 7, 7**. Both include an eight-chromosome product.

### 5. One branch can't gain a normal sibling

The proposed total is **13 DNA molecules**, exceeding the twelve after replication. Correct counts: **4, 4, 2, 2**. Both products from the deficient cell lack A; normal meiosis II can't supply it to one sibling.

### 6. A monosomic zygote

Here n = 6. The deficient gamete has **5 chromosomes**, and its normal partner has **6**. The zygote has **11 = 2n−1**, with **one copy** of the affected chromosome, supplied by the normal gamete. The other five kinds each have two copies.

### 7. Nine isn't three sets of four

Here n = 4. Fertilization gives **5 + 4 = 9 = 2n+1** chromosomes: three copies of one kind, two of each remaining kind. A triploid complement would have **12 = 3n**, three copies of every kind.

### 8. Both meiosis II branches would need errors

One meiosis II error leaves two normal three-chromosome products, so the claim doesn't fit. After normal meiosis I, nondisjunction of the affected chromosome in **both** meiosis II cells could give 4, 2 from each branch. That requires two errors and falls outside our single-error model. Under the original assumptions, these unordered counts instead point to meiosis I: siblings would be grouped as **4, 4** and **2, 2**.

## Keep a card for the step you missed

Save the missed decision as a card. The [guide to making better flashcards](/blog/how-to-make-better-flashcards/) explains how to keep questions answerable on their own.

| Front | Back |
| --- | --- |
| Can one n+1 gamete identify meiosis I versus II nondisjunction? | No. Either division can produce n+1. All four products distinguish them if one chromosome pair is affected by one error and every other division is normal. |
| Meiosis I is normal, then one meiosis II cell has a nondisjunction event. Why are two products normal? | The other meiosis I cell completes meiosis II normally. |
| An n−1 gamete combines with a normal n gamete. What's the zygote count? | 2n−1. The normal partner adds one copy of the chromosome the first gamete lacks. |

Next time, change 2n and draw before calculating. For alleles in normal gametes, try [monohybrid cross practice](/blog/monohybrid-cross-practice/).
