---
title: "Three-Set Venn Diagram Problems: Practice with Answers"
description: "Solve three-set Venn diagram problems with an eight-region table, inclusive-overlap checks, original practice questions, and explained answers."
date: "2026-10-18"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/96677b7f7c945be838719c7de0c1f464cac75fbb053b94a1df3ecd92e768f3a5.webp"
keywords:
  - "three-set Venn diagram problems"
  - "three circle Venn diagram practice"
  - "exactly two sets"
  - "inclusion exclusion"
  - "Venn diagram probability"
---

Twenty-four photographs belong to both A and B. Ten of those also belong to C. The part of the diagram that belongs to A and B **only** contains 14 photographs. Putting 24 there and another 10 in the center would count those ten twice.

To solve three-set Venn diagram problems, fill the center, the three pair-only overlaps, the three single-set regions, and finally the space outside the circles. Keep an eight-region membership table beside the drawing. Every item goes in exactly one row, making a missing or negative count easier to spot.

![A stagehand stands where amber, rose, and blue pools of light overlap on a wooden theatre stage](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/96677b7f7c945be838719c7de0c1f464cac75fbb053b94a1df3ecd92e768f3a5.webp)

All collections and counts below are invented for practice. Counts are exact whole numbers. Whenever a question asks for a probability, select one item uniformly at random from the stated collection, so each item has the same chance of selection.

## Read “both” before filling the circles

Use `n(A)` for the number of items in set A. The symbol `∩` means “and”; `∪` means inclusive “or,” allowing membership in both sets. A whole-set total includes every region inside that circle, including its overlaps.

An **inclusive pair count**, such as `n(A ∩ B)`, includes items that also belong to C. An **exclusive pair count**, described as “A and B only” or “A and B but not C,” leaves C out.

| Supplied wording | Does it include the center? | Where the count belongs |
| --- | --- | --- |
| A and B; n(A ∩ B) | Yes | A–B-only region plus the center |
| A and B only; A and B but not C | No | A–B-only region |
| All three; n(A ∩ B ∩ C) | It is the center | Center only |

In these exercises, every pair count is explicitly identified as inclusive or exclusive. If a real question leaves “both” ambiguous, establish its meaning before calculating. Subtract the center from an inclusive pair count once. An exclusive pair count is already ready to place.

## Build the eight-region ledger

Suppose a collection contains **120 photographs**. A means the photograph shows water, B means it includes a person, and C means it was taken at night.

The set totals are `n(A) = 58`, `n(B) = 52`, and `n(C) = 44`. The **inclusive** pair counts are `n(A ∩ B) = 24`, `n(A ∩ C) = 20`, and `n(B ∩ C) = 18`. Exactly **10** photographs belong to all three sets.

Draw a rectangle for the whole collection, labeled `U: 120 photographs`. Inside it, draw three circles labeled A, B, and C. Arrange them so every pair overlaps and there is a shared central region. Leave space inside the rectangle but outside the circles.

The [OpenStax lesson on three sets](https://openstax.org/books/contemporary-mathematics/pages/1-5-set-operations-with-three-sets) explains the eight regions and filling from the center outward. Each photograph has a yes/no answer for A, B, and C. Those three decisions give `2 × 2 × 2 = 8` possible membership rows:

| Region | In A? | In B? | In C? | Calculation | Count |
| --- | --- | --- | --- | --- | ---: |
| All three | Yes | Yes | Yes | Given | 10 |
| A and B only | Yes | Yes | No | 24 − 10 | 14 |
| A and C only | Yes | No | Yes | 20 − 10 | 10 |
| B and C only | No | Yes | Yes | 18 − 10 | 8 |
| A only | Yes | No | No | 58 − 14 − 10 − 10 | 24 |
| B only | No | Yes | No | 52 − 14 − 8 − 10 | 20 |
| C only | No | No | Yes | 44 − 10 − 8 − 10 | 16 |
| None | No | No | No | 120 − 102 | 18 |

Transfer the rows to the circles in this order:

1. Put **10** in the shared center.
2. Put **14** in A and B outside C, **10** in A and C outside B, and **8** in B and C outside A. These are the pair-only regions.
3. Put **24** in A alone, **20** in B alone, and **16** in C alone. Each is what remains of a whole-set total after its three overlap regions are filled.
4. Add the seven inside counts to get **102**, then put `120 − 102 = 18` outside all three circles but inside the rectangle.

The two entries of 10 occupy different regions: A-and-C-only and all three. Locate an entry by its memberships, even when another region has the same count. A zero count would still need its own region.

Check the supplied totals by adding the relevant rows. The four regions in A give `24 + 14 + 10 + 10 = 58`; B gives `20 + 14 + 8 + 10 = 52`; C gives `16 + 10 + 8 + 10 = 44`. Each inclusive pair must also match: `14 + 10 = 24` for A and B, `10 + 10 = 20` for A and C, and `8 + 10 = 18` for B and C. Finally, all eight counts add to 120.

## Select regions before adding

The words **exactly**, **at least**, and **only** change which rows qualify. The [Indian Hills Community College worksheet](https://webcontent.indianhills.edu/_myhills/courses/MAT110/documents/venn.pdf) includes three-set questions using these distinctions. On your drawing, lightly shade the requested regions before adding them. For our photographs:

| Requested count | Rows to add | Answer |
| --- | --- | ---: |
| Exactly one set | A only, B only, C only | 24 + 20 + 16 = 60 |
| Exactly two sets | The three pair-only rows | 14 + 10 + 8 = 32 |
| At least two sets | Pair-only rows and all three | 32 + 10 = 42 |
| At least one set | All seven rows inside the circles | 102 |
| None of the sets | Outside all circles | 18 |
| A or B, but not C | A only, B only, A and B only | 24 + 20 + 14 = 58 |

Adding the supplied pair counts gives `24 + 20 + 18 = 62`. That is neither exactly two nor at least two: each center photograph appears in all three inclusive pair counts.

For exactly two sets, remove those three center contributions: `62 − 3 × 10 = 32`. For at least two sets, keep one center contribution: `62 − 2 × 10 = 42`. The ledger makes both adjustments visible.

### Check the union with inclusion–exclusion

The union `A ∪ B ∪ C` means membership in at least one set. With inclusive intersections, the three-set inclusion–exclusion formula is:

`n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C)`

For the photographs:

`58 + 52 + 44 − 24 − 20 − 18 + 10 = 102`

Adding the three set totals counts a center photograph three times. Subtracting the three pair intersections removes it three times, leaving zero. Adding the triple intersection puts it back once. Then `120 − 102 = 18` photographs are outside the union.

Use this as a total check alongside the region counts. It doesn't replace them: a union between zero and the collection size can still hide an impossible negative region. Question 7 gives an example.

## Use the given group for probability

For the photograph collection, find **P(A given B ∪ C)**: among photographs that include a person or were taken at night, including those meeting both conditions, what fraction show water?

The denominator is the inclusive union B or C:

`n(B ∪ C) = 52 + 44 − 18 = 78`

Within those 78 photographs, the qualifying A rows are A-and-B-only, A-and-C-only, and all three:

`14 + 10 + 10 = 34`

Therefore, **P(A given B ∪ C) = 34/78 = 17/39**, about 43.6%. The same numerator comes from `24 + 20 − 10 = 34`: the two inclusive A intersections share the center, so subtract it once.

The 24 A-only photographs don't qualify for the given group. Dividing by 120 would instead calculate the probability of A **and** membership in B or C, without the condition.

The general rule is `P(A given D) = P(A ∩ D) / P(D)`, with `P(D) > 0`, as given in [OpenStax's probability lesson](https://openstax.org/books/introductory-statistics-2e/pages/3-3-two-basic-rules-of-probability). Here D is `B ∪ C`. Because photographs are equally likely, the same whole-collection denominator cancels: `(34/120) / (78/120) = 34/78`.

Our [two-way-table practice](/blog/conditional-probability-two-way-tables/) gives more exercises on choosing the given group. Overlapping circles alone don't tell you whether events are independent; the [mutually exclusive vs independent events guide](/blog/mutually-exclusive-vs-independent-events/) explains how to check that separately.

## Seven three-set Venn diagram practice questions

Keep the full calculations on paper. For each dataset, draw the three circles inside a rectangle and copy the eight membership rows without their answers. For probabilities, name the given group before writing a fraction. Try each question before reading its explained answer below.

### Inclusive counts: questions 1–3

An archive has **80 records**, each of which may have labels A, B, and C. There are 40 records in A, 34 in B, and 28 in C. The **inclusive** pair counts are 18 in A and B, 14 in A and C, and 12 in B and C. Six records have all three labels.

1. Complete all eight region counts, including records with none of the labels.
2. Find the counts belonging to exactly two sets and at least two sets. What is the probability a uniformly selected record belongs to exactly two sets?
3. Find P(A given B or C). State the numerator and denominator before simplifying.

### An unknown center: question 4

A separate collection contains **100 items**. The set totals are 50 in A, 44 in B, and 36 in C. The **inclusive** pair counts are 22 in A and B, 18 in A and C, and 16 in B and C. Eighteen items belong to none of the sets.

4. Find how many items belong to all three sets, then complete the other seven regions.

### Counts already split into regions: questions 5–6

For a new collection of **60 items**, the following counts are **exclusive**:

| A only | B only | C only | A and B only | A and C only | B and C only | All three | None |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 12 | 9 | 7 | 8 | 5 | 4 | 3 | 12 |

5. Find the three whole-set totals and the three inclusive pair counts. Should you subtract 3 from the supplied A-and-B-only count of 8?
6. Given that an item belongs to at least one set, what is the probability it belongs to exactly two sets?

### A report that cannot be correct: question 7

A report describes **70 items**, with 20 in A, 30 in B, and 28 in C. Its **inclusive** pair counts are 15 in A and B, 14 in A and C, and 12 in B and C. Five items supposedly belong to all three sets.

7. Inclusion–exclusion gives a union of 42, which fits within 70. Can these exact counts form a valid Venn diagram? Show the region that decides the answer.

## Explained answers

### 1. Six in the center leaves sixteen outside

Start with the given 6, then subtract it from each inclusive pair count:

`A and B only = 18 − 6 = 12`

`A and C only = 14 − 6 = 8`

`B and C only = 12 − 6 = 6`

The single-set regions follow: `A only = 40 − 12 − 8 − 6 = 14`, `B only = 34 − 12 − 6 − 6 = 10`, and `C only = 28 − 8 − 6 − 6 = 8`.

| A only | B only | C only | A and B only | A and C only | B and C only | All three | None |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 14 | 10 | 8 | 12 | 8 | 6 | 6 | 16 |

The seven inside regions total `14 + 10 + 8 + 12 + 8 + 6 + 6 = 64`, leaving `80 − 64 = 16` outside. For example, the four A regions reconstruct `14 + 12 + 8 + 6 = 40`. Check B, C, and the inclusive pairs the same way.

### 2. Exactly two excludes the center

**Exactly two: `12 + 8 + 6 = 26` records.** At least two adds the all-three region once: `26 + 6 = 32` records.

The unconditional probability of exactly two uses all 80 records: **`26/80 = 13/40 = 32.5%`**. Using 32 as the numerator would answer “at least two.”

### 3. Restrict the denominator to fifty records

The given group is B or C, so the denominator is `34 + 28 − 12 = 50`. Within that group, A contributes `12 + 8 + 6 = 26` records. Thus **P(A given B ∪ C) = `26/50 = 13/25 = 52%`**.

Using the inclusive intersections also gives `18 + 14 − 6 = 26`. The center belongs in the numerator once.

### 4. Use “none” to recover the union

Eighteen items are outside, so **82** are inside: `100 − 18 = 82`. Let `x` be the missing center count. Inclusion–exclusion gives:

`82 = 50 + 44 + 36 − 22 − 18 − 16 + x = 74 + x`

Therefore, **`x = 8`**. Now work outward with 8 in the center:

| A only | B only | C only | A and B only | A and C only | B and C only | All three | None |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 18 | 14 | 10 | 14 | 10 | 8 | 8 | 18 |

For example, A-and-B-only is `22 − 8 = 14`, and A-only is `50 − 14 − 10 − 8 = 18`. The seven inside entries add to 82; with the 18 outside, all 100 items are accounted for.

### 5. Add the center to an exclusive pair count

Each whole set contains four regions:

- **A: `12 + 8 + 5 + 3 = 28`**
- **B: `9 + 8 + 4 + 3 = 24`**
- **C: `7 + 5 + 4 + 3 = 19`**

The inclusive pair counts are **A and B: `8 + 3 = 11`**, **A and C: `5 + 3 = 8`**, and **B and C: `4 + 3 = 7`**.

Don't subtract 3 from the given 8. The phrase “A and B only” has already excluded the center. Subtracting it again would erase three valid members of that exclusive region.

### 6. Condition on the forty-eight inside items

Exactly two sets contain `8 + 5 + 4 = 17` items. At least one contains `60 − 12 = 48` items. The requested probability is **`17/48`**, about **35.4%**.

The ratio `17/60` would describe exactly two among the entire collection. The condition removes the 12 outside items from the denominator.

### 7. A negative region rejects the report

The pair-only regions would be `15 − 5 = 10`, `14 − 5 = 9`, and `12 − 5 = 7`. But A-only would then be:

`20 − 10 − 9 − 5 = −4`

**The inputs are inconsistent.** A-only cannot contain negative four items. The A-and-B-only region, A-and-C-only region, and center already require `10 + 9 + 5 = 24` items inside A, whose reported total is only 20.

The union calculation still gives `20 + 30 + 28 − 15 − 14 − 12 + 5 = 42`. Checking only that 42 lies between 0 and 70 misses the contradiction. Every disjoint region must be a nonnegative whole number, and the regions must reconstruct all supplied totals.

Don't replace −4 with zero. Keeping the other region counts would make A total 24, contradicting the supplied 20. The contradiction doesn't uniquely identify which reported input is wrong. Check the original counts and whether the pair counts were meant to be inclusive or exclusive before trying again.

## Keep a short reminder for the missed step

If you miss a question, identify the decision that went wrong before making a repair card. Keep the complete eight-region reconstruction as a paper exercise. Use a short card to recall the step you missed:

| Front | Back |
| --- | --- |
| n(A ∩ B) is 19 and all three is 7. How many belong to A and B only? | 12. The inclusive pair count includes the center, so subtract 7 once. |
| Which three-set regions count toward exactly two sets? | A and B only, A and C only, and B and C only. Exclude the center. |
| For P(A given B ∪ C), which group supplies the denominator? | Every item in B or C, including those in both. Its count must be positive. |
| A union count fits within the collection, but one exclusive region is negative. Is the model valid? | No. Every disjoint region needs a nonnegative count; a plausible union is insufficient. |

The [guide to making better flashcards](/blog/how-to-make-better-flashcards/) explains how to give a prompt one clear retrieval task. After reviewing a reminder, return to the missed exercise with a blank diagram. Label the inputs inclusive or exclusive before placing the center.

*AI tools assisted with source research, drafting, exercise creation, editorial passes, and the article illustration. Counts and fractions were checked computationally. The examples are invented practice data; the editorial passes do not constitute human expert review.*
