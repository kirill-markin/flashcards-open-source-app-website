---
title: "Crossing Over vs Independent Assortment: Trace the Products"
description: "Distinguish crossing over from independent assortment with a worked chromatid trace, the limits of 2^n, and practice questions with explained answers."
date: "2026-11-02"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/70e47ee7eb3715a964e57d2a0624f5e37d914184fe2b154d398b9e961d7a1e26.webp"
keywords:
  - "crossing over vs independent assortment"
  - "independent assortment gamete types"
  - "crossing over nonsister chromatids"
  - "2^n gametes"
  - "meiosis practice"
---

Four products of meiosis can contain only two distinct marker combinations. In the example below, one specified crossover changes that to four. The number of products stays the same, so counting them won't explain the difference.

**Crossing over exchanges DNA segments between nonsister chromatids of homologous chromosomes. Independent assortment determines which homologs from different pairs travel together.** Follow the chromatids through both divisions, and these two sources of variation become easier to separate. Then you can see why the familiar **2^n** calculation counts possibilities across many meioses rather than products from one cell.

![An adult inspects two socks with exchanged toe sections beside two unchanged socks](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/70e47ee7eb3715a964e57d2a0624f5e37d914184fe2b154d398b9e961d7a1e26.webp)

## What changes in each mechanism

| Mechanism | What happens | When it happens | What to follow |
| --- | --- | --- | --- |
| Crossing over | Nonsister chromatids of homologous chromosomes exchange corresponding DNA segments | Prophase I | The allele arrangement along each chromatid |
| Independent assortment | Each homologous pair orients independently of the other pairs before the homologs separate | Orientation in metaphase I; separation in anaphase I | Which homolog from each pair reaches the same pole |

These events can occur in the same meiosis: a homolog being sorted may already contain exchanged DNA. The [NHGRI crossing-over definition](https://www.genome.gov/genetics-glossary/Crossing-Over) explains the exchange, and [OpenStax's meiosis account](https://openstax.org/books/biology-2e/pages/11-1-the-process-of-meiosis) describes the stages and chromosome movements.

## Give every chromatid a label

Use an invented diploid organism with **2n = 4**. Its haploid number is **n = 2**, and its chromosomes form two homologous pairs: **pair 1** and **pair 2**.

The letters represent **marker alleles** at particular chromosome positions, or loci:

- **Pair 1:** the maternally inherited homolog carries **AB**; the paternally inherited homolog carries **ab**. A/a and B/b occupy two loci on this chromosome, giving the arrangement **AB/ab**.
- **Pair 2:** the two homologs carry **C** and **c** at a locus on a different chromosome.

A slash separates homologs. A combined label such as **ABC** means “a pair-1 chromosome carrying AB and a pair-2 chromosome carrying C.” It doesn't put all three loci on one chromosome. Uppercase and lowercase distinguish alleles; this exercise makes no assumptions about dominance or phenotype.

Start after DNA replication. Pair 1 now consists of two replicated chromosomes, each with two sister chromatids:

| Pair-1 chromatid label | Homolog of origin | Starting markers |
| --- | --- | --- |
| maternal-1 | Maternally inherited pair-1 homolog | AB |
| maternal-2 | Maternally inherited pair-1 homolog | AB |
| paternal-1 | Paternally inherited pair-1 homolog | ab |
| paternal-2 | Paternally inherited pair-1 homolog | ab |

**Maternal-1 and maternal-2 are sisters** because they arose by replication of the same homolog. Paternal-1 and paternal-2 form the other sister pair. **Maternal-2 and paternal-2 are nonsisters** because they belong to different homologs. The numbers distinguish chromatids within a homolog; they don't identify chromosome pairs.

Place the loci in this order: **centromere — A/a — B/b — chromosome end**. The crossover will be between A/a and B/b, away from the centromere. After exchange, keep each chromatid label with its centromere-containing portion. “Maternal-2” will therefore identify a chromatid's origin even when part of its DNA has come from the paternal homolog.

The worked trace assumes:

- Homologs separate normally in meiosis I, and sisters separate normally in meiosis II.
- Maternal-2 and paternal-2 undergo one reciprocal crossover between A/a and B/b, with no other exchanges.
- There is no mutation, gene conversion, chromosome loss, or additional DNA replication.
- We track four haploid products. These needn't be four functional gametes; human oogenesis, for example, doesn't produce four functional eggs.

This marker model simplifies the physical requirements for segregation and crossover placement. The no-crossover comparison below also assumes normal segregation so that we can isolate assortment. For a separate exercise on chromosome and DNA-molecule totals, use the [chromosome and chromatid counting guide](/blog/chromosome-chromatid-counting/).

## First follow assortment without exchange

Temporarily remove crossing over from the model. This **no-crossover counterfactual** keeps AB and ab intact while allowing the homologs to segregate normally. It shows what assortment alone changes; it isn't a description of how normal meiosis generally proceeds without crossing over.

Choose one metaphase-I orientation. The **AB homolog and C homolog face pole L**, while the **ab homolog and c homolog face pole R**. Call the two resulting meiosis-I branches L and R.

Meiosis I separates the homologs. L receives replicated AB and C chromosomes; R receives replicated ab and c chromosomes. Meiosis II then separates their sisters:

| Final product | Pair-1 markers | Pair-2 marker | Combined marker label |
| --- | --- | --- | --- |
| L1 | AB | C | ABC |
| L2 | AB | C | ABC |
| R1 | ab | c | abc |
| R2 | ab | c | abc |

That's **four products containing two distinct marker combinations**. Without exchange, sisters have the same markers, so the two products from each branch match.

Now reverse pair 2's orientation while leaving pair 1 as it was. AB goes with c into L, and ab goes with C into R. This meiosis yields **ABc, ABc, abC, abC**.

Across the two alternative orientations, the possible combinations are **ABC, ABc, abC, abc**. Assortment changes the pair-2 partner accompanying AB or ab. It leaves the linked A/B arrangement along each chromatid intact.

## Add one crossover, then follow both divisions

Return to the starting chromatids. In prophase I, **maternal-2 and paternal-2 exchange corresponding segments between A/a and B/b**. Each retains its centromere and A/a region, and receives the other's segment containing B/b.

| Pair-1 chromatid | Before exchange | After exchange | A/B marker classification |
| --- | --- | --- | --- |
| maternal-1 | AB | AB | Parental combination |
| maternal-2 | AB | Ab | Recombinant combination |
| paternal-1 | ab | ab | Parental combination |
| paternal-2 | ab | aB | Recombinant combination |

Here, **parental** means matching a starting marker arrangement, AB or ab. **Recombinant** means a new arrangement of those markers, Ab or aB. The exchange rearranges existing alleles; it creates no new allele in this model.

Only two of the four chromatids participate. Maternal-1 retains AB, and paternal-1 retains ab. Maternal-1 and maternal-2 remain sisters despite now differing at B/b: their shared replication origin hasn't changed.

Use the original metaphase-I orientation. The maternal pair-1 homolog faces L with C; the paternal pair-1 homolog faces R with c. Meiosis I separates these homologs while each pair of sisters remains joined at the centromere:

| After meiosis I | Pair-1 sisters still joined | Pair-2 replicated chromosome |
| --- | --- | --- |
| Branch L | maternal-1 = AB; maternal-2 = Ab | Both sisters carry C |
| Branch R | paternal-1 = ab; paternal-2 = aB | Both sisters carry c |

There is **no DNA replication between meiosis I and meiosis II**. Meiosis II separates the sisters already present. Assign them to the final products as follows:

| Final product | Pair-1 chromatid received | Pair-2 marker | Combined marker label |
| --- | --- | --- | --- |
| L1 | maternal-1: AB | C | ABC |
| L2 | maternal-2: Ab | C | AbC |
| R1 | paternal-1: ab | c | abc |
| R2 | paternal-2: aB | c | aBc |

The product names within either branch can swap. The complete set is still **ABC, AbC, abc, aBc**. Both L products carry C because that replicated homolog entered L in meiosis I; both R products carry c.

Each product has **two chromosomes**, one from each pair. Crossing over has changed the marker arrangements while leaving the haploid number unchanged. Two of the four final pair-1 chromosomes have recombinant A/B arrangements. That **2/4 result belongs to this specified single crossover**; it isn't a measured recombination fraction across many meioses.

To work with linked markers and offspring probabilities across many gametes, continue with [dihybrid cross practice](/blog/dihybrid-cross-practice/). Here, the task is to account for every product of one meiotic cell.

## What 2^n counts

For independent assortment, **n is the haploid chromosome number**, which also equals the number of homologous pairs in the starting diploid cell. Each pair offers two homolog choices for a product. Ignoring crossing over, that gives **2^n possible whole-chromosome origin combinations across meioses**.

For **2n = 6**, there are three pairs: **n = 3**, so **2³ = 8**. Using 2⁶ = 64 would count the diploid chromosome total as the number of pairs.

Label the maternally and paternally inherited homolog choices M and P. Reading the columns in pair order gives the eight possible combinations:

| Pair 1 | Pair 2 | Pair 3 |
| --- | --- | --- |
| M | M | M |
| M | M | P |
| M | P | M |
| M | P | P |
| P | M | M |
| P | M | P |
| P | P | M |
| P | P | P |

**One meiosis doesn't produce all eight.** Under the no-crossover counterfactual, one orientation could yield **MMM, MMM, PPP, PPP**. Another could yield MPP twice and PMM twice. Each has four products representing two complementary origin combinations.

Keep origin combinations separate from visible marker patterns, too. If both pair-3 homologs carry the same allele at the marker you observe, that marker can't tell you whether M or P was inherited. The eight origin combinations can then produce fewer than eight distinguishable marker patterns.

Crossing over adds another layer: a recombinant chromosome contains DNA from both parental homologs, which the whole-chromosome 2^n count leaves out. Nor does this formula establish independent inheritance for every pair of loci. A and B in our trace are physically linked on one chromosome; [OpenStax's linkage explanation](https://openstax.org/books/biology-2e/pages/13-1-chromosomal-theory-and-genetic-linkage) describes how linkage and crossing over affect inheritance.

## Seven questions to try with the tables covered

Use the marker model above, assume normal segregation, and add no events beyond those specified. Where a question asks for the products, list all four.

1. **Name the mechanism.** One meiosis sends the pair-1 maternal homolog with C; another sends it with c. No marker segments have changed. What explains this difference? What event would explain AB becoming Ab along a chromatid?
2. **Choose the partners.** Among maternal-1, maternal-2, paternal-1, and paternal-2, which pairs are sisters? Why are maternal-2 and paternal-2 nonsister partners in the specified crossover?
3. **Reverse pair 2.** Keep the specified crossover and the same pair-1 branch assignment, but send c into L and C into R. What are the four final marker combinations?
4. **Move the exchange site.** Replace the crossover between A and B with an exchange of matching terminal segments beyond B/b, still involving maternal-2 and paternal-2. There are no other marker differences in those segments. Which A/B combinations appear afterward? Does an unchanged A/B pattern prove that no DNA exchange occurred?
5. **Find the counting error.** For a species with 2n = 8, a student predicts 256 possible assortment combinations and says one meiosis produces all of them. Correct both claims, ignoring crossing over for the combination count.
6. **Hide a marker difference.** In the n = 3 assortment table, both pair-3 homologs carry D at the only marker observed on that chromosome. Pair 1 has E/e, and pair 2 has F/f. Ignoring crossing over, how many distinct E/F/D marker patterns can assortment produce? How many whole-chromosome origin combinations are still possible?
7. **Check a proposed output.** With the specified crossover and original C-to-L orientation, a student lists ABC, Abc, abc, aBC. Each product has two chromosomes. Does this list fit the specified meiosis? Repair it and explain why the chromosome count didn't reveal the error.

## Answers with the reasoning included

### 1. Orientation versus exchange

**Independent assortment** accounts for the change in pair-1/pair-2 groupings: each pair can orient independently of the other. To turn AB into Ab in this model requires a **crossover between A and B involving AB and ab nonsister chromatids**. That exchange produces Ab and aB. Orientation alone doesn't change the marker arrangement along a chromatid.

### 2. Sisterhood follows replication origin

The sister pairs are **maternal-1/maternal-2** and **paternal-1/paternal-2**. Maternal-2 and paternal-2 belong to different homologs, making them nonsisters. Allele matching doesn't establish sisterhood, and crossing over doesn't change which chromatids arose from replication of the same homolog.

### 3. The same crossover with the other orientation

L produces **ABc and Abc**; R produces **abC and aBC**. The crossover still gives AB, Ab, ab, and aB on pair 1. Reversing pair 2 changes which C/c allele accompanies the pair-1 chromosomes in each branch.

### 4. An exchange the markers don't reveal

The four chromatids still carry **AB, AB, ab, ab** at the observed loci. The exchanged terminal segment contains neither A/a nor B/b, so those markers remain unchanged. A DNA exchange occurred, but this marker set doesn't reveal it. A chromatid can participate in a crossover without being recombinant at the particular markers being scored.

### 5. Four pairs give sixteen possibilities

**2n = 8 means n = 4**, giving **2⁴ = 16** possible whole-chromosome origin combinations across meioses. The prediction of 256 incorrectly uses 2n as the exponent: 2⁸ = 256. One meiosis has **four haploid products** in this schematic. With crossing over excluded, those products represent two complementary origin combinations, each appearing twice.

### 6. Four marker patterns, eight origin combinations

The visible patterns are **EFD, EfD, eFD, efD**: **four** in total. Either pair-3 homolog supplies D, so that marker can't distinguish the two origin choices. There are still **2³ = 8 whole-chromosome origin combinations**, even though some look identical at the observed markers.

### 7. The chromosome count misses the routing error

The correct set is **ABC, AbC, abc, aBc**. In the specified orientation, L receives the C homolog, so both L products must carry C. R receives the c homolog, so both R products must carry c. The proposed Abc and aBC attach the wrong pair-2 markers to those pair-1 chromatids. They still contain one chromosome from each pair, which is why a chromosome count alone can't expose the mistake.

## Turn a missed step into a recall prompt

Close the article and reconstruct the crossover table from **AB/ab**. Then reverse pair 2's orientation and list the four products again. Rebuilding the route shows whether you can apply the mechanism to a changed condition.

Keep that condition in any short recall question: “Ignoring crossing over, what does 2^n count?” or “After the specified crossover, must sisters still match at B/b?” Review the complete trace alongside the definitions. Regular recall and spaced review can support long-term retention; practice with changed examples also asks you to use what you remember.

The [English AP Biology Flashcards: Complete Course Review](/catalog/packages/ap-biology-flashcards-complete-course-review/) is a broad, unofficial 540-card deck that covers meiosis, crossing over, and independent assortment. Use it for review beyond this worksheet; all seven worksheet answers are included above. If you're making your own cards, the [guide to making better flashcards](/blog/how-to-make-better-flashcards/) explains how to write focused prompts that make sense on their own.

*Production note: This article uses AI-assisted research, drafting, editorial review, and illustration. The examples are invented teaching exercises, and their marker outputs were checked by enumeration. They are not laboratory or classroom findings. The editorial review was performed by AI, not a human subject specialist.*
