---
title: "Conditional Probability from Venn Diagrams: Practice with Answers"
description: "Find conditional probability from two-circle Venn diagrams. Shade the given group, work with complements, and check eight practice questions with worked answers."
date: "2026-11-19"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/9f8c909372e8a1dd115c55c9fbb9cd87a379d70aa8327055d3f01a8b797870c5.webp"
keywords:
  - "conditional probability from Venn diagrams"
  - "Venn diagram probability practice"
  - "P(A given B)"
  - "complementary events"
---

Suppose a library recorded 50 loans, including 28 for illustrated books. If you pick a loan at random and learn that it was for an illustrated book, only those 28 loans are still possible. Eight were for illustrated paperbacks, so the probability that the book was a paperback is 8/28.

To find **conditional probability from a Venn diagram**, lightly shade every region that matches the words after “given.” Then darken the regions within that group that also match what the question asks for. Add the counts in both shades for the denominator and the dark counts for the numerator.

![A naturalist counts mussels inside a square sampling frame on a rocky shore](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/9f8c909372e8a1dd115c55c9fbb9cd87a379d70aa8327055d3f01a8b797870c5.webp)

## Read the four regions

For these loans, **A** means the book was a paperback and **B** means it was illustrated. The rectangle represents all 50 loans. Each loan goes in exactly one region, including the space outside both circles. For each example and exercise, select one loan or item uniformly at random from the stated collection, so each has the same chance of being picked.

| Region | What the loan was for | Count |
| --- | --- | ---: |
| A only | Paperback without illustrations | 12 |
| A ∩ B | Illustrated paperback | 8 |
| B only | Illustrated book in another format | 20 |
| Neither | Book in another format without illustrations | 10 |

The symbol ∩ means “and.” The 8 loans in the overlap count toward the total for each circle. To add up the whole rectangle, count each of the four regions once. Use the printed counts because the areas in this sketch are schematic. [OpenStax’s lesson on probability and Venn diagrams](https://openstax.org/books/introductory-statistics-2e/pages/3-5-tree-and-venn-diagrams)

## Change the given group on the same diagram

![Two views of the same four loan counts. The upper view shades 8 in the overlap dark and 20 in B only pale. The lower view shades 12 in A only dark and 10 outside both circles pale.](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/b18fe127994f88d1df99a1f6a75ee54aa67cee9cf5ec1cf381993542738c33b4.webp)

The same four counts appear in both views. Follow the shading to see which counts each question uses.

- **P(A | B)** means “the probability of a paperback, given an illustrated book.” Shade all of B. The dark 8 in the overlap and the pale 20 in B only give 28 eligible loans. The 8 in the overlap are the paperbacks. **P(A | B) = 8/(8 + 20) = 2/7**, about 28.6%.
- **P(A | Bᶜ)** means “the probability of a paperback, given a book without illustrations.” The complement Bᶜ covers the part of the rectangle outside circle B. It includes the dark 12 in A only and the pale 10 outside both circles. The 12 in A only are the paperbacks. **P(A | Bᶜ) = 12/(12 + 10) = 6/11**, about 54.5%.

The formal rule is **P(A | B) = P(A ∩ B) / P(B)**, with **P(B) > 0**. With equally likely loans, the full collection size cancels. In the first view, (8/50) ÷ (28/50) = 8/28. An empty qualifying region gives probability zero when the given group has a positive count. An empty given group makes the conditional probability undefined. [OpenStax’s conditional probability rule](https://openstax.org/books/introductory-statistics-2e/pages/3-3-two-basic-rules-of-probability)

When **“A or B”** is the condition, shade A only, the overlap, and B only. Inclusive “or” means at least one of the two. **“Exactly one of A and B”** gives you just A only and B only.

## Venn diagram probability practice

Copy the rectangle and circles onto paper. Mark the eligible regions for each question before adding any counts. Write the fraction before simplifying so you can trace each number back to the drawing.

### Use the 50 library loans for questions 1–5

1. Reverse the condition from the upper view. Given that the book was a paperback, what is the probability it was illustrated?
2. Given that the book was in a format other than paperback, what is the probability it had no illustrations?
3. Given that the book was a paperback or was illustrated, what is the probability it was a paperback? Use inclusive “or.”
4. Given that the book had exactly one of the two properties (paperback or illustrated), what is the probability it was a paperback?
5. Given that the book was illustrated, what is the probability it was in a format other than paperback? Check that the two format categories within B have probabilities that add to 1.

### Use these 24 posters for questions 6–7

An exhibit has 24 posters. Nine were printed in blue, seven were signed, and eight have neither property. No poster has both.

6. Given that the poster is signed, what is the probability it was printed in blue?
7. A student says P(printed in blue | signed and printed in blue) equals 1 because every poster in the overlap is printed in blue. Is that calculation valid for these posters?

### Rebuild the circles for question 8

8. A collection has 60 photographs. Of these, 29 show a bridge and 32 were taken at night. Eleven have neither property. Find the count in each of the four regions. Then find the probability that a photograph was taken at night, given that it shows no bridge.

## Worked answers

1. **8/20 = 2/5.** Reversing the condition keeps the overlap of 8 and switches the given group to circle A. Add 12 + 8 to get the 20 paperback loans in the denominator.
2. **10/30 = 1/3.** B only and neither make up the space outside A, so 20 + 10 loans are eligible. The 10 outside both circles were for books without illustrations.
3. **20/40 = 1/2.** Inclusive “or” covers all three regions inside the circles, so the denominator is 12 + 8 + 20 = 40. The two regions in A give 12 + 8 = 20 paperbacks.
4. **12/32 = 3/8.** Exactly one property makes the A-only and B-only regions eligible. The denominator is 12 + 20 = 32, and the 12 in A only are the paperbacks.
5. **20/28 = 5/7.** Within B, the 20 loans in B only were for books in other formats. The paperback share is 8/28, so the two shares add to (20 + 8)/28 = 1. The given group stays B when you take the complement of the event being asked for.
6. **0/7 = 0.** The given group has seven signed posters. Zero of those were printed in blue.
7. **Undefined.** The condition selects the overlap itself. It contains zero posters, so the fraction would be 0/0.
8. **The overlap is 12 and the requested probability is 20/31.** The number inside at least one circle is 60 − 11 = 49. Adding the two circle totals gives 29 + 32 = 61. Each photograph in the overlap appears twice in that sum, so the extra 61 − 49 = 12 gives the overlap. Bridge only has 29 − 12 = 17, night only has 32 − 12 = 20, and neither has 11. Check that 17 + 12 + 20 + 11 = 60. Outside the bridge circle, there are 20 + 11 = 31 photographs and 20 were taken at night.

## Make a card for a missed step

If you left the “neither” count out of Bᶜ, put “Which two Venn regions belong to Bᶜ?” on the front of a card and “A only and outside both circles” on the back. Try recalling the answer tomorrow and again a few days later. Spacing out recall can help you remember the step. [Karpicke and Bauernschmidt’s study on spaced recall](https://pubmed.ncbi.nlm.nih.gov/21574747/)

- To practice the same denominator choice in rows and columns, try the [two-way-table exercises](/blog/conditional-probability-two-way-tables/) or the [44 English practice cards based on two-way tables](/catalog/packages/conditional-probability-two-way-table-flashcards/).
- For circles with a third property, try the [three-set Venn diagram exercises](/blog/three-set-venn-diagram-problems/).

*Prepared with AI assistance. The examples are fictional and use exact counts.*
