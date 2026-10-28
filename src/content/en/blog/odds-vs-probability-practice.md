---
title: "Odds vs Probability: Practice with In-Favor and Against Ratios"
description: "Convert odds in favor and odds against to probability, repair denominator mistakes, and check original practice problems with explained answers."
date: "2026-10-23"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/300d936d9b8b535da0ae9927b07283c8a4565e45d26c80b9c808a7325a429523.webp"
keywords:
  - "odds vs probability"
  - "odds in favor"
  - "odds against"
  - "convert odds to probability"
  - "odds probability practice"
---

A box contains 18 matte tiles and 12 glossy tiles. Pick one tile with every tile equally likely. The probability of matte is 18/30, while the odds in favor of matte are 18:12. The same box gives two ratios because their second numbers answer different questions.

**Probability compares an event with all possibilities. Odds in favor compare the event with its complement—everything outside the event. Odds against reverse that comparison.** To convert odds in favor a:b to probability, use a/(a + b). For odds against a:b, use b/(a + b).

The worked examples and ten practice problems below use fictional collections and exact probabilities. The count-ratio method used here assumes every item in the stated collection has the same chance of selection. Raw counts alone don't establish the selection probabilities; the final problem shows why that assumption matters.

![A craftsperson steadies a wooden gate with a narrow terracotta section and a wider unpainted section inside one frame](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/300d936d9b8b535da0ae9927b07283c8a4565e45d26c80b9c808a7325a429523.webp)

## Keep the total separate from the other outcomes

Let E be the event you care about. Its complement, written “not E” here, contains every outcome outside E. If E means “matte,” not E means “glossy” in the opening box: those are the only two finishes.

For this uniform selection:

| Quantity | Calculation | Meaning |
|---|---|---|
| Probability of matte | 18/30 = 3/5 = 60% | Matte tiles divided by all tiles |
| Odds in favor of matte | 18:12 = 3:2 | Matte tiles compared with glossy tiles |
| Odds against matte | 12:18 = 2:3 | Glossy tiles compared with matte tiles |

“3:2 in favor” describes three event parts for every two other parts. All possibilities occupy five parts. It doesn't say there are literally five tiles: the box has 30, and both counts were divided by six.

More generally, odds compare the probability of E with the probability of not E. The item-count ratio works here because all tiles are equally likely: (18/30):(12/30) simplifies to 18:12. With unequal chances of selection, use the probabilities assigned by the model rather than the physical counts.

These definitions and conversions follow [OpenStax's lesson on odds](https://openstax.org/books/contemporary-mathematics/pages/7-7-what-are-the-odds). Here is the compact reference, with p meaning P(E):

| Starting information | Probability of E | Odds in favor of E | Odds against E |
|---|---|---|---|
| Odds in favor a:b | a/(a + b) | a:b | b:a |
| Odds against a:b | b/(a + b) | b:a | a:b |
| Probability p | p | p:(1 − p) | (1 − p):p |

The ratio parts must be nonnegative and cannot both be zero. In every conversion, name E first and keep that event fixed. Label the two parts “event” and “other,” then add them to get the total. For odds against, “event” belongs to the second part. Swapping in-favor odds for against odds reverses the ratio; it doesn't change the event under discussion.

## Three phrases, three answers

The word beside the numbers matters:

| Statement about E | Probability of E | Reason |
|---|---|---|
| “3 in 5” | 3/5 | Five is already the total |
| “3:5 in favor” | 3/8 | Three event parts and five other parts |
| “3:5 against” | 5/8 | Three other parts and five event parts |

Writing 3/5 for all three loses information carried by “in,” “in favor,” and “against.” If a question says only “the odds are 3:5,” establish which direction it means before converting.

For the reverse conversion, suppose P(E) is exactly 35%. Write the probability and its complement with a common denominator:

**p = 35/100 = 7/20; 1 − p = 13/20.**

The odds in favor are (7/20):(13/20) = **7:13**. The odds against are **13:7**. Check the first ratio by converting back: 7/(7 + 13) = 7/20 = 35%.

That round trip is a useful check. If your returned probability differs from the starting one, recheck the direction and whether you used the total or the complement.

You can also check which side of 1/2 the answer belongs on. If the event part is smaller than the other part, P(E) must be below 1/2. For “3:5 against,” the event gets five parts, so its probability must be above 1/2. This catches a reversed numerator before you simplify a fraction.

## A single odds number has a different scale

Odds in favor can also be written as one number, o = p/(1 − p), when p < 1. [UCLA's introduction to odds](https://stats.oarc.ucla.edu/stata/faq/how-do-i-interpret-odds-ratios-in-logistic-regression/) gives this definition. For a colon ratio a:b with b > 0, the numeric odds are a/b.

Numeric odds **0.5** therefore mean 0.5:1, or 1:2 in favor. Their probability is:

**p = o/(1 + o) = 0.5/1.5 = 1/3.**

A probability of **0.5**, by comparison, means 50% and gives numeric odds 0.5/(1 − 0.5) = **1**, or **1:1** in favor. Keep the label attached to a decimal; “0.5” alone doesn't tell you which quantity it represents.

Probability stays between 0 and 1. Finite numeric odds can exceed 1: the opening box has odds 18/12 = 1.5, corresponding to a probability of 0.6. Equal odds, 1:1, correspond to a probability of 1/2.

At the endpoints, p:(1 − p) gives **0:1** for probability zero and **1:0** for probability one. The finite numeric formula is zero at p = 0 and undefined at p = 1 because it divides by zero. Numeric odds grow without bound as p approaches 1 from below; infinity isn't a finite result of division by zero.

## Choose the group before calculating its odds

A fictional storage area has these tokens. Each token is on exactly one shelf and is either blue or another color.

| Shelf | Blue | Other colors | Total |
|---|---:|---:|---:|
| A | 12 | 8 | 20 |
| B | 6 | 24 | 30 |
| Total | 18 | 32 | 50 |

Select one token uniformly from all 50. For the event “blue,” probability is **18/50 = 9/25**, and odds in favor are **18:32 = 9:16**.

Now learn that the token is from shelf A. Within that shelf, probability of blue is **12/20 = 3/5**, and odds in favor are **12:8 = 3:2**. Restricting the group changes both the event count and the other count.

If instead you learn that the token is blue and ask whether it came from A, use the Blue column: probability is **12/18 = 2/3**, and odds in favor of A are **12:6 = 2:1**.

Reversing a condition changes the group and the question. Finding odds against merely swaps event and complement within the same group. For more practice choosing that group, use the [conditional probability two-way-table worksheet](/blog/conditional-probability-two-way-tables/).

To move from one group to a comparison between two groups, use the [relative risk vs odds ratio flashcards](/catalog/packages/relative-risk-odds-ratio-flashcards/). They practice dividing probabilities for relative risk and dividing event-to-other odds for an odds ratio, with the outcome and comparison direction stated.

## Odds and probability practice

Try the questions before reading the answers. Write what each ratio part represents. Treat all stated probabilities and ratios as exact. Whenever a question says “uniformly,” every individual item in that collection has the same chance of selection.

1. An envelope contains 14 stamped cards and 21 unstamped cards. Select one uniformly. Find the probability of stamped, the odds in favor of stamped, and the odds against stamped.
2. The odds against event E are 7:2. Find P(E) and the odds in favor of E.
3. P(E) = 72%. Find the odds in favor and the odds against as whole-number ratios.
4. A collection of 64 equally likely items has odds 5:3 in favor of an item having a stripe. How many striped and unstriped items are there?
5. A learner writes, “Odds 1:4 in favor mean 25%, or 1 in 4.” Repair the statement. What odds in favor would give 25%?
6. A box contains exactly 22 tokens, each equally likely to be selected. Can its odds in favor of selecting blue be exactly 3:2? Explain what the answer says about this box and about probability 3/5 in general.
7. A model reports numeric odds in favor o = 0.5. A learner converts this to 50%. Find the correct probability and explain the error.
8. Use the shelf table above, starting with uniform selection from all 50 tokens. Given that a token is blue, find the odds **against** its coming from A. Explain why you cannot use shelf A's eight other-colored tokens in this ratio.
9. Write the odds in favor in colon form for P(E) = 0 and P(E) = 1. In each case, can you calculate finite numeric odds using p/(1 − p)?
10. A selector chooses one token from three blue tokens and one plain token. Each individual blue token has selection probability 1/6; the plain token has selection probability 1/2. Find P(blue) and the odds in favor of blue. Explain why counting tokens would give the wrong answer.

## Answers with the interpretation attached

**1. Probability 2/5; in favor 2:3; against 3:2.** There are 35 cards altogether. Probability uses 14/35 = 2/5. In-favor odds use 14:21 = 2:3; against odds use 21:14 = 3:2. The unstamped count is 21, not the total of 35.

**2. P(E) = 2/9; in favor 2:7.** “Against 7:2” assigns seven parts to not E and two to E. There are nine parts altogether, and E receives two of them. As a check, in-favor odds 2:7 return probability 2/(2 + 7).

**3. In favor 18:7; against 7:18.** P(E) = 72/100 = 18/25. Its complement is 7/25. Clearing the common denominator gives 18:7 in favor. Using 18:25 would compare the event with the total rather than its complement.

**4. Forty striped and 24 unstriped items.** The odds have eight parts in total, so one part represents 64/8 = 8 items. Five parts give 40 striped items and three parts give 24 unstriped items. Check both the total, 40 + 24 = 64, and the ratio, 40:24 = 5:3.

**5. Odds 1:4 in favor mean 20%, or 1 in 5.** There is one event part plus four other parts. P(E) = 1/(1 + 4) = 1/5. A probability of 25% is 1/4, leaving complement 3/4, so its in-favor odds are 1:3.

**6. No, under this exact uniform count model.** Odds 3:2 require P(blue) = 3/5. Applying that fraction to 22 gives 22 × 3/5 = 13.2 blue tokens, which cannot be a whole-token count. An exact 3:2 split requires a total divisible by five. For example, uniform selection from 12 blue and eight other tokens gives P(blue) = 12/20 = 3/5. This rules out the specified 22-token box; it doesn't rule out probability 3/5 in general. An approximate or rounded ratio would be a different question.

**7. Probability 1/3.** Numeric odds 0.5 are the ratio of event probability to complement probability. They mean 0.5:1 = 1:2 in favor, giving P(E) = 1/(1 + 2). Treating the odds value as a probability skips the conversion. Probability 50% would give numeric odds 1.

**8. Odds against A are 1:2 within the blue group.** Of the 18 blue tokens, six are from B and 12 are from A. Against A therefore means B:A = 6:12 = 1:2. Shelf A's eight other-colored tokens are excluded by the condition “blue.” The corresponding probability of A remains 12/18 = 2/3.

**9. Colon odds 0:1 and 1:0, respectively.** At p = 0, numeric odds are 0/(1 − 0) = 0. At p = 1, the denominator is zero, so finite numeric odds are undefined. The colon notation can still display the event-to-complement weights without evaluating that quotient.

**10. P(blue) = 1/2; odds in favor 1:1.** Add the probabilities of the three distinct blue outcomes: 1/6 + 1/6 + 1/6 = 1/2. Plain also has probability 1/2, and all four selection probabilities sum to one. The blue-to-plain probability ratio is therefore (1/2):(1/2) = 1:1. The physical count ratio 3:1 fails because the tokens aren't equally likely to be selected. Uniform selection from the same four tokens would be a different model.

## Repair the decision you missed

After checking an answer, name the error before doing another calculation: wrong direction, wrong total, wrong given group, or an unjustified equal-likelihood assumption. A short card can make that particular decision easier to recall.

| Flashcard front | Flashcard back |
|---|---|
| Odds against E are a:b. Which part belongs to E, and what is P(E)? | b belongs to E. P(E) = b/(a + b). |
| Why do odds 1:4 in favor give 20%? | One event part plus four other parts makes five total parts: 1/5 = 20%. |
| What assumption lets us use event count / total count for these selections? | Every item in the stated collection is equally likely to be selected. |
| Numeric odds in favor are 0.5. What is the probability? | 0.5/(1 + 0.5) = 1/3; odds 0.5 mean 1:2 in favor. |

Regular recall and spaced review give you later opportunities to retrieve these distinctions, which can support long-term retention. Keep solving new problems too: recalling a formula doesn't establish that you've chosen the right group or interpreted the ratio correctly.

The [guide to making better flashcards](/blog/how-to-make-better-flashcards/) covers keeping each prompt focused. Use paper cards or create your own in Nibomo; the [getting started guide](/docs/getting-started/) explains the app. Then return to a missed exercise with its answer covered and write “event,” “other,” and “total” beside the relevant numbers.

*Production note: AI assisted with source research and writing. The example and answer arithmetic was checked separately with exact-fraction Python calculations; those checks verify the stated models, not real-world outcomes. The article illustration is AI-generated.*
