---
title: "Hypergeometric Distribution Practice With Worked Answers"
description: "Build a hypergeometric probability table, find which counts are possible, and compare cutoffs with and without replacement. Includes six worked practice questions."
date: "2026-11-06"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/dd5aa36a5a91c5e1b97e058e97562526e5522788924970be5a25ef6ddeaacc21.webp"
keywords:
  - "hypergeometric distribution practice"
  - "hypergeometric distribution worked examples"
  - "probability mass function"
  - "sampling without replacement"
  - "hypergeometric vs binomial"
---

An eight-item batch has five flagged items and three unflagged ones. Pick six different items at random for a mock inspection and you’re guaranteed at least three flagged items. Even if you take all three unflagged items, you still have three places to fill.

What if you want the inspection to raise a signal at most 20% of the time? To choose a cutoff, build a hypergeometric probability table. It tells you how often each flagged count occurs.

![Six costume jackets on a wheeled rail and two still hanging on the wall](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/dd5aa36a5a91c5e1b97e058e97562526e5522788924970be5a25ef6ddeaacc21.webp)

## Find the counts that can happen

Let **X** be the number of flagged items in the sample. Three is the minimum, and five is the most the batch can supply. Four is possible too. Take four flagged items and two unflagged items. The **support** of X, the set of counts with positive probability, is **{3, 4, 5}**.

The same reasoning works when a population has **N** distinct items, **K** of them flagged, and you sample **n** items. In the hypergeometric model, you sample without replacement and each subset of size n is equally likely.

- **Lower bound** = max(0, n − (N − K)). Fill as many places as possible with the N − K unflagged items. Any places still open must go to flagged items.
- **Upper bound** = min(n, K). You can use at most K flagged items, and you have only n places.

Both endpoints and every integer in between are possible. The two bounds can coincide. If you sample the entire population, for instance, X is always K. [OpenStax introduces the sampling model](https://openstax.org/books/introductory-statistics-2e/pages/4-5-hypergeometric-distribution).

## Build the whole probability table

Read **C(a, b)** as “a choose b.” It counts the ways to choose b items from a distinct items when order doesn’t matter. The [combinations practice guide](/blog/permutations-vs-combinations-practice/) shows how to calculate it by hand.

The **probability mass function (PMF)** gives the probability of each exact count. For every x in the support, use

**P(X = x) = C(K, x) × C(N − K, n − x) / C(N, n).**

The denominator counts all equally likely samples. To get the numerator, choose x flagged items and n − x unflagged items. Each choice from the flagged group can go with any choice from the unflagged group, so multiply the two counts. Outside the support, the probability is zero. [Penn State’s probability course gives the formula and its bounds](https://online.stat.psu.edu/stat414/Lesson07).

In the eight-item batch, **C(8, 6) = 28**. To check the count by hand, identify each sample by the two items it leaves out. Leaving out two flagged items gives C(5, 2) = 10 choices and leaves three flagged in the sample. Leaving out one of each gives 5 × 3 = 15 choices and leaves four flagged. Leaving out two unflagged items gives C(3, 2) = 3 choices and leaves all five flagged.

| Flagged items in sample, x | Count from the formula | P(X = x) |
| --- | ---: | ---: |
| 3 | C(5, 3) × C(3, 3) = 10 | 10/28 |
| 4 | C(5, 4) × C(3, 2) = 15 | 15/28 |
| 5 | C(5, 5) × C(3, 1) = 3 | 3/28 |

The sample counts add to 28, and the probabilities add to one. The middle row is the most likely because 15 different samples give you four flags.

## Use the table to choose a cutoff

In the mock inspection, the sample triggers a signal if it contains at least c flagged items. Find the smallest integer cutoff c from 1 through 6 that triggers a signal for at most 20% of random samples.

- A cutoff of **4** includes both the four-flag and five-flag rows. **P(X ≥ 4) = (15 + 3)/28 = 18/28**, about 64.3%.
- A cutoff of **5** includes only the five-flag row. **P(X ≥ 5) = 3/28**, about 10.7%.

Choose **5**. It meets the 20% limit. Every cutoff below 4 includes all the samples that already put 4 over the limit. A cutoff of 6 never triggers a signal because the batch has only five flagged items.

## Hypergeometric vs binomial with the same starting rate

Start with the same eight items again. This time, make six independent draws, returning each item before drawing the next one. The flagged probability is 5/8 on every draw, so the new flagged count **Y** has a binomial distribution with six trials and p = 5/8. The same item can count more than once.

Now all counts from 0 through 6 are possible. Six unflagged draws in a row have probability **P(Y = 0) = (3/8)⁶**. For the cutoff of five, add the probabilities of exactly five and exactly six flags. With exactly five flags, the single unflagged draw can occur in any of six positions.

**P(Y ≥ 5) = 6 × (5/8)⁵ × (3/8) + (5/8)⁶ = 71,875/262,144**, about **27.4%**.

The cutoff of five now exceeds 20%. Both procedures start with a 5/8 chance of drawing a flag. If you keep a flagged first pick out, the next draw has a 4/7 chance of a flag. If you put it back and draw independently, the chance stays at 5/8. For more work with independent trials, use the [binomial distribution practice worksheet](/blog/binomial-distribution-practice/).

## Six practice questions

Assume each subset of the requested size is equally likely. For each question, write down the possible counts and circle the ones the question asks for before you calculate.

1. **Build a PMF.** A box holds 12 labeled tiles, three marked with a star. You sample four without replacement. Let X count stars. Find the support and P(X = x) for each possible x.
2. **Read the event.** In the same tile problem, what’s the probability of exactly two stars? What’s the probability of at least one?
3. **Find the forced minimum.** You pick eight of nine labeled cards without replacement. Two have a stripe. What counts of striped cards are possible, and what is the probability of each?
4. **Diagnose an answer.** Six of eight labeled items are sampled without replacement. Five of the eight are flagged. A classmate says the probability of exactly five flagged items is 1/3 because there are three possible flagged counts. Where does the argument go wrong?
5. **Keep the starting fraction.** A batch of 16 labeled items has ten flagged and six unflagged items. You sample six without replacement. Find the probability of zero flagged items. Why does it differ from the eight-item example, where you also pick six and the flagged fraction is also 5/8?
6. **Choose an integer cutoff.** Return to the tile problem in question 1. You score a point if the four tiles contain at least c stars. Among c = 1, 2, 3, 4, what’s the smallest cutoff that lets you score in at most one quarter of random samples?

## Worked answers

### 1. The support is {0, 1, 2, 3}

There are nine plain tiles, enough to fill all four places. Three stars are available, so the largest count is three. There are **C(12, 4) = 495** equally likely samples.

| x | Samples with x stars | P(X = x) |
| --- | ---: | ---: |
| 0 | C(3, 0) × C(9, 4) = 126 | 126/495 |
| 1 | C(3, 1) × C(9, 3) = 252 | 252/495 |
| 2 | C(3, 2) × C(9, 2) = 108 | 108/495 |
| 3 | C(3, 3) × C(9, 1) = 9 | 9/495 |

The sample counts sum to 495. In the zero-star row, C(3, 0) = 1 because there’s exactly one way to select no stars.

### 2. Exactly two is 12/55, and at least one is 41/55

“Exactly two” uses the two-star row, so **P(X = 2) = 108/495 = 12/55**. “At least one” includes one, two, and three stars. The complement is zero stars, which occurs in 126 samples, so **P(X ≥ 1) = 1 − 126/495 = 41/55**.

### 3. One stripe has probability 2/9, and two stripes have probability 7/9

Leaving out one card determines the entire sample. You leave out a striped card in two of the nine cases, so **P(X = 1) = 2/9**. Leaving out any of the seven plain cards gives **P(X = 2) = 7/9**. Since the sample leaves out just one card, at least one stripe must stay in.

### 4. The three counts represent different numbers of samples

Each of the 28 six-item subsets has the same probability. To get exactly five flags, take all five flagged items and choose one of the three unflagged items. Only three subsets qualify, giving **P(X = 5) = 3/28**. The classmate divided by three as if the possible counts had equal chances. The PMF shows that they occur in 10, 15, and 3 samples, respectively.

### 5. Zero flagged items has probability 1/8008

You can take all six unflagged items, which gives exactly one qualifying subset out of **C(16, 6) = 8008**. In the eight-item batch, the three unflagged items can fill only half the sample, so the probability is zero. Both batches give the same chance on the first draw. Only the larger one has enough unflagged items to fill all six places.

### 6. The smallest cutoff is two

A cutoff of one gives **P(X ≥ 1) = 369/495**, above one quarter. A cutoff of two includes the two- and three-star rows, giving **P(X ≥ 2) = (108 + 9)/495 = 117/495**, about **23.6%**. Two is the first cutoff that meets the limit.

## Review the step where you got stuck

The [English probability without replacement flashcard deck](/catalog/packages/probability-without-replacement-flashcards/) has 43 cards for practicing how to update the remaining counts, follow a sequence of draws, and use complements. The [probability without replacement guide](/blog/probability-without-replacement/) works through those calculations on paper.

Between worksheets, use the cards to recall the setup steps from memory. For this example, cover the answers and explain why the six picks have to include at least three flags. Check your reasoning and try again in a later session. Spacing out recall practice can help you remember the reasoning longer. [Karpicke and Bauernschmidt studied spaced retrieval and later recall (PDF)](https://learninglab.psych.purdue.edu/downloads/2011/2011_Karpicke_Bauernschmidt_JEPLMC.pdf).

*Production note. AI tools assisted with research, drafting, editing, and exercise design. The examples and worked answers were checked by exact counting. The illustration is AI-generated.*
