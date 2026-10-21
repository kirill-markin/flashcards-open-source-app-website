---
title: "Dihybrid Cross Practice: Gametes, Ratios, and Linkage"
description: "Solve dihybrid crosses with explained answers, weighted gametes, and a linkage comparison showing when the familiar 9:3:3:1 ratio fails."
date: "2026-10-21"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/970ece00a569cf5f3a96a26049e1439203ec71251fda09e9da7b879f2c7e94a8.webp"
keywords:
  - "dihybrid cross practice"
  - "dihybrid cross problems with answers"
  - "linked genes practice"
  - "dihybrid test cross"
  - "coupling and repulsion"
  - "gamete probabilities"
---

> **For broader review:** the [unofficial AP Biology flashcard deck in English](/catalog/packages/ap-biology-flashcards-complete-course-review/) covers the course, including inheritance and linkage. It isn't a dedicated dihybrid practice deck; all problems and answers below are available here.

An AaBb × AaBb cross gives a 6.25% chance of aabb offspring under independent assortment. With linked loci, that chance can become 16% or 1%, depending on chromosome phase and recombination. The parent genotypes are still written AaBb.

In dihybrid cross practice, the genotype letters alone don't always give you the gamete probabilities. Start with those probabilities to derive the ratio.

Try the six questions before checking the answers.

![A florist ties yellow and purple daisies into a mixed pair beside same-color and mixed flower pairs](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/970ece00a569cf5f3a96a26049e1439203ec71251fda09e9da7b879f2c7e94a8.webp)

## Set the assumptions before choosing a ratio

We follow two autosomal loci, or gene positions, with alleles A/a and B/b. At each locus, a diploid parent carries two alleles; each gamete carries one. A is completely dominant over a, and B over b.

| Notation | Meaning |
| --- | --- |
| A_B_ | Dominant phenotype at both loci |
| A_bb | Dominant at A, recessive at B |
| aaB_ | Recessive at A, dominant at B |
| aabb | Recessive at both loci |

The underscore means either allele can occupy that position: A_ includes AA and Aa.

Assume equal segregation at each locus, random fertilization, no interaction between loci that changes these phenotype assignments, and no mutation, transmission distortion, or genotype-dependent survival. These are hypothetical probabilities, not observations of an organism.

A **dihybrid** is heterozygous at two loci: AaBb here. A 9:3:3:1 phenotype ratio requires AaBb × AaBb, independent assortment, and the stated dominance assumptions. [OpenStax explains the independent-assortment model](https://openstax.org/books/biology-2e/pages/12-3-laws-of-inheritance). If one-locus genotype notation still feels awkward, work through the [monohybrid cross practice](/blog/monohybrid-cross-practice/) first.

## Write a gamete ledger

Use this small worksheet before drawing any square:

1. Write both parent genotypes.
2. State whether the loci assort independently or are linked. For linked loci, record chromosome phase and recombination fraction.
3. List each parent's gametes and their probabilities; each parent's column must total 1.
4. Multiply probabilities for a gamete from each parent, then add combinations that give the requested outcome.
5. State the phenotype order whenever writing a ratio.

For an expected count, multiply the number of offspring by the outcome's probability. This gives an average prediction under the model; observed counts can vary.

For independently assorting loci in AaBb, P(A) = P(a) = 1/2 and P(B) = P(b) = 1/2. Within that parent's gametes:

**P(AB) = P(A) × P(B) = 1/4.**

Ab, aB, and ab also have probability 1/4 each. A gamete carries one allele from each locus.

## The independent AaBb × AaBb square

Rows represent one parent's gametes; columns represent the other's. Each gamete has probability 1/4.

| × | AB | Ab | aB | ab |
| --- | --- | --- | --- | --- |
| AB | AABB | AABb | AaBB | AaBb |
| Ab | AABb | AAbb | AaBb | Aabb |
| aB | AaBB | AaBb | aaBB | aaBb |
| ab | AaBb | Aabb | aaBb | aabb |

Each cell has probability 1/4 × 1/4 = 1/16. Counting phenotype classes gives:

| Phenotype | Probability | Ratio part |
| --- | ---: | ---: |
| A_B_ | 9/16 | 9 |
| A_bb | 3/16 | 3 |
| aaB_ | 3/16 | 3 |
| aabb | 1/16 | 1 |

There are **16 ordered gamete-pair cells but nine distinct offspring genotypes**. AaBb appears in four cells, so its probability is 4/16. AABB appears once. Counting distinct genotype names as equally likely would lose that difference.

You can also calculate P(A_B_) = P(A_) × P(B_) = 3/4 × 3/4 = 9/16 under independent assortment. That shortcut needs independence between the loci.

## Keep AaBb, change the chromosome phase

For linked loci, the chromosome arrangement matters. **Phase** tells you which alleles share a homologous chromosome:

- **Coupling, AB/ab:** A and B are together on one homolog; a and b are together on the other.
- **Repulsion, Ab/aB:** A shares a homolog with b; a shares the other with B.

Both arrangements are AaBb. A slash separates the two homologs, not two gametes.

The **parental** gamete combinations match those written on the two homologs: AB and ab in coupling, Ab and aB in repulsion. **Recombinant** combinations mix alleles from those homologs. Which gametes count as recombinant therefore depends on phase.

Let the supplied recombination fraction be **r = 0.20**. In this model, recombinant gametes make up 20% of the gametes. This doesn't mean 20% of meioses have a crossover, or specify a physical DNA distance.

With equal reciprocal classes, each parental gamete has probability (1 − r)/2 = 0.40; each recombinant gamete has probability r/2 = 0.10. [Columbia's linkage lecture](https://www.columbia.edu/cu/biology/courses/c2005/lectures/lec22_10.html) describes parental and recombinant allele arrangements.

| Gamete | Independent AaBb | Coupling AB/ab, r = 0.20 | Repulsion Ab/aB, r = 0.20 |
| --- | ---: | ---: | ---: |
| AB | 0.25 | 0.40 | 0.10 |
| Ab | 0.25 | 0.10 | 0.40 |
| aB | 0.25 | 0.10 | 0.40 |
| ab | 0.25 | 0.40 | 0.10 |

Each column still gives P(a) = 1/2 and P(b) = 1/2. Linkage changes their **joint probability**: how often a and b travel together.

Random fertilization still lets us multiply probabilities from the two parents. It doesn't make A and B independent within one parent's gametes.

### A test cross makes the gametes visible

In a dihybrid test cross, AaBb × aabb, the recessive tester produces only ab gametes. Each offspring phenotype therefore reveals which gamete the heterozygote contributed. The [University of Nebraska's test-cross lesson](https://passel2.unl.edu/view/lesson/26d8d3fed309/9) explains this readout.

| Heterozygote's gamete | Offspring genotype | Phenotype | Coupling, r = 0.20 | Repulsion, r = 0.20 |
| --- | --- | --- | ---: | ---: |
| AB | AaBb | A_B_ | 40% | 10% |
| Ab | Aabb | A_bb | 10% | 40% |
| aB | aaBb | aaB_ | 10% | 40% |
| ab | aabb | aabb | 40% | 10% |

Independent assortment would give 25% in each class: **1:1:1:1**, rather than the self-cross's 9:3:3:1.

### AaBb × AaBb has three different outcomes

Now cross two parents with the same arrangement in each row:

| AaBb × AaBb model | A_B_ | A_bb | aaB_ | aabb |
| --- | ---: | ---: | ---: | ---: |
| Independent assortment | 56.25% | 18.75% | 18.75% | 6.25% |
| AB/ab × AB/ab, r = 0.20 in both | 66% | 9% | 9% | 16% |
| Ab/aB × Ab/aB, r = 0.20 in both | 51% | 24% | 24% | 1% |

For aabb, both parents must supply ab. Coupling gives 0.40² = 0.16; repulsion gives 0.10² = 0.01.

In all three rows, P(aa) = P(bb) = 1/4. To find A_B_, subtract offspring recessive at either locus, counting their overlap only once:

**P(A_B_) = 1 − P(aa) − P(bb) + P(aabb).**

Coupling gives 1 − 0.25 − 0.25 + 0.16 = 0.66. Repulsion gives 0.51. Then P(A_bb) = P(bb) − P(aabb), and similarly for aaB_.

A 16-cell square remains usable for these linked crosses, but its cells need weights. In coupling, AB × AB has probability 0.16, while Ab × Ab has probability 0.01. Sixteen cells don't guarantee sixteen equal chances.

## Six dihybrid cross practice problems

Keep the stated assumptions. Write the gamete ledger first.

1. **Independent self-cross:** AaBb × AaBb. Find P(aabb), P(Aabb), and the expected number of A_B_ offspring among 160 offspring.
2. **A different second parent:** The loci assort independently in AaBb × Aabb. Find the phenotype ratio in A_B_:A_bb:aaB_:aabb order and expected counts among 80 offspring.
3. **Coupling test cross:** AB/ab × ab/ab, with r = 0.20 in the heterozygote. Find expected counts in those four phenotype classes among 400 offspring. How many are expected to be recombinant?
4. **Repulsion self-cross:** Ab/aB × Ab/aB, with r = 0.20 in both parents. Calculate P(aabb) and P(A_B_) without filling a square.
5. **Missing information:** A question says “AaBb × aabb; the loci are linked.” Can you calculate four numerical phenotype probabilities? What if it also specifies AB/ab but gives no recombination fraction?
6. **Boundary cases:** For an AB/ab heterozygote, list gamete probabilities when r = 0 and when r = 0.50. Does r = 0.50 prove the loci are on different chromosomes? Does random fertilization make linked alleles assort independently?

## Explained answers

### 1. Independent self-cross

Both parents produce AB, Ab, aB, ab at 1/4 each. Thus P(aabb) = P(ab × ab) = **1/16**.

Aabb comes from Ab × ab or ab × Ab: 1/16 + 1/16 = **1/8**. Expected A_B_ offspring = 160 × 9/16 = **90**. An expected count isn't a promise of exactly 90.

### 2. AaBb × Aabb

AaBb produces four gametes at 1/4 each; Aabb produces Ab and ab at 1/2 each. At A, Aa × Aa gives P(A_) = 3/4. At B, Bb × bb gives P(B_) = P(bb) = 1/2.

Independent assortment gives **3/8, 3/8, 1/8, 1/8**, so the ratio is **3:3:1:1** and expected counts are **30, 30, 10, 10**. Changing the parent changes the ratio.

### 3. Coupling test cross

AB and ab have probability 0.40 each; Ab and aB have probability 0.10 each. The tester contributes ab with probability 1.

Expected counts are **160, 40, 40, 160**. Recombinants are Ab and aB, giving **80 expected recombinant offspring**. Observed finite counts fluctuate; a departure from equal counts alone doesn't establish linkage without assessing sampling variation.

### 4. Repulsion self-cross

Each parent supplies ab with probability 0.10, so **P(aabb) = 0.01**. Each still supplies a half the time and b half the time, giving P(aa) = P(bb) = 1/4. Therefore:

P(A_B_) = 1 − 1/4 − 1/4 + 0.01 = **0.51**.

Multiplying 3/4 × 3/4 here would incorrectly assume independence between the loci.

### 5. Missing phase or recombination fraction

**There isn't enough information for a numerical answer.** You need phase and recombination fraction, or equivalent gamete-frequency information.

Knowing AB/ab supplies phase, but leaves r unknown. In this test cross, P(A_B_) = P(aabb) = (1 − r)/2 and P(A_bb) = P(aaB_) = r/2. You can't replace r with an invented value.

### 6. Boundary cases

At **r = 0**, AB and ab each have probability 1/2; Ab and aB have probability 0.

At **r = 0.50**, all four gametes have probability 1/4. This behaves like independent assortment for these two-locus crosses. It doesn't prove different chromosomes: sufficiently separated loci on the same chromosome can show a recombination fraction near 50%. [OpenStax discusses linkage and this limit](https://openstax.org/books/biology-2e/pages/13-1-chromosomal-theory-and-genetic-linkage).

Random fertilization concerns pairing gametes from the parents. It doesn't change either parent's gamete frequencies.

## Keep the method available from memory

After solving the worksheet, close it and reconstruct the three gamete columns: independent, coupling, repulsion. Explain why their marginal allele probabilities match while P(ab) changes. Regular recall and spaced review can support long-term retention; return to complete crosses too, so remembering a definition doesn't replace applying it.

*Production note: AI tools researched and drafted this article, created the exercises and illustration, and performed two English editorial passes. A separate exact-fraction calculation enumerated the gamete pairs to check the numerical cross tables. These are invented teaching examples, not laboratory or classroom findings; the editorial passes do not constitute human or specialist review.*
