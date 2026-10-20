---
title: "Expected Value Practice: Probability Tables, Payoffs, and Meaning"
description: "Practice expected value with probability tables, point payoffs, entry costs, and explained answers. Learn what the mean does—and doesn't—predict."
date: "2026-10-20"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/baa6868938b9b75e11b2606104e537100cd60d6c5c0ea4c1b8f039ac31ce08be.webp"
keywords:
  - "expected value practice"
  - "expected value probability table"
  - "expected payoff"
  - "expected value vs most likely outcome"
  - "fair game expected value"
---

A bag pays out 0, 4, or 12 points. Its expected payout is **2.4 points**, even though you can never draw a 2.4-point token. Charge 3 points to play, and the expected change becomes **−0.6 points**. Both answers are correct; they describe different quantities.

Expected value practice needs more than multiplying a few numbers. You need to decide what the numbers measure, attach the right probabilities, and explain the result. The six exercises below let you practice those decisions after a worked example. All models use a finite list of values, and all game rewards and costs are points.

![A woman checks a driftwood mobile balancing three small pale stones against one larger dark stone](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/baa6868938b9b75e11b2606104e537100cd60d6c5c0ea4c1b8f039ac31ce08be.webp)

## Define what one trial measures

Imagine a classroom game with ten tokens of the same size and shape, distinguished by their labels:

- Six tokens pay 0 points.
- Three tokens pay 4 points.
- One token pays 12 points.

Draw one token uniformly at random, so each token has the same chance of being selected. Let **X be the gross payout in points from that draw**, before any fee. X is a random variable: it assigns a number to each result. Naming the quantity now prevents an easy mistake later: treating the payout as the change in your score.

For this finite distribution, expected value is the probability-weighted mean:

**E(X) = Σ x × P(X = x)**

The `Σ` means to add the contribution from every distinct value x. Multiply each value by its probability, then add those products. [UBC's expected value lesson](https://blogs.ubc.ca/math105/discrete-random-variables/expected-value/) gives this definition and explains why the outcomes must have numerical values.

Before calculating, check that the table covers the whole distribution. Every probability must be between 0 and 1, inclusive, and the probabilities must add to 1. The payout values themselves can be zero, positive, or negative.

| Payout x, in points | Tokens with that payout | P(X = x) | Contribution x × P(X = x), in points |
| --- | --- | --- | --- |
| 0 | 6 | 6/10 | 0 |
| 4 | 3 | 3/10 | 1.2 |
| 12 | 1 | 1/10 | 1.2 |
| Total | 10 | 1 | **2.4** |

The 4-point and 12-point payouts contribute equally to the mean. One is smaller but three times as likely.

Calculating `(0 + 4 + 12) / 3` would give about 5.33 points. That calculation gives equal weight to the three **distinct labels**, although the labels aren't equally likely. You could instead average all ten token labels, counting repetitions: `(0 + 0 + 0 + 0 + 0 + 0 + 4 + 4 + 4 + 12) / 10 = 2.4`.

Keep the zero row. Its contribution is zero, but its probability accounts for six of the ten tokens. Dropping it and redistributing its probability changes the experiment.

## Subtract the fee from every outcome

Suppose every draw costs 3 points, including draws that pay nothing. Define **N = X − 3** as your net change in points.

| Gross payout X, in points | Net change N, in points | Probability | Net contribution, in points |
| --- | --- | --- | --- |
| 0 | −3 | 0.6 | −1.8 |
| 4 | 1 | 0.3 | 0.3 |
| 12 | 9 | 0.1 | 0.9 |
| Total | | 1 | **−0.6** |

You can calculate the same result directly: **E(N) = E(X) − 3 = 2.4 − 3 = −0.6 points**. A fixed subtraction shifts the expectation by that amount; this follows from the [linearity properties in Berkeley's Stat 20 notes](https://stat20.berkeley.edu/spring-2026/3-generalization/05-ev-se/notes.html).

Don't subtract the fee only from positive payouts. The zero-payout outcome still costs 3 points. Don't subtract it again after using the net-change table either; that table already includes the cost.

A **fair game has zero expected net change**, after accounting for the fee. [Berkeley's SticiGui chapter on expected value](https://www.stat.berkeley.edu/users/stark/SticiGui/Text/expectation.htm) uses this definition of a fair bet. Here, a fee of 2.4 points would make the game fair. That doesn't require equal chances of gaining and losing points: at that fee, six tokens produce a loss and four produce a gain, but the weighted gains and losses cancel.

## The mean doesn't tell you the next result

For the original bag, the most likely gross payout is **0 points**, with probability 0.6. The expected gross payout is **2.4 points**. The most likely value is called the **mode**; finding it means looking for the largest probability, rather than adding weighted contributions.

To interpret 2.4 as a long-run average, return the token after each draw, remix the bag, and make each draw independently under the same conditions. As the number of draws grows, the probability that the average payout lies within any fixed positive distance of 2.4 points approaches 1. [SticiGui's explanation of the law of large numbers](https://www.stat.berkeley.edu/users/stark/SticiGui/Text/expectation.htm) describes this connection.

For ten such draws, the expected total gross payout is `10 × 2.4 = 24` points, and the expected total net change with the 3-point fee is `10 × (−0.6) = −6` points. These are expectations, not promised totals. Ten draws needn't contain exactly six zeros, three fours, and one twelve. A run of zeros doesn't make a twelve due on the next independent draw.

The mean also leaves out spread. Compare two point changes:

| Option | Possible changes | Expected change |
| --- | --- | --- |
| A | Always +2 points | 2 points |
| B | −2 or +6 points, each with probability 1/2 | (−2)/2 + 6/2 = 2 points |

Their means match, but A is constant and B varies. Expected value alone can't tell you whether an option has a possible loss or a guaranteed outcome. If you need to describe variation too, the [standard deviation vs standard error guide](/blog/standard-deviation-vs-standard-error/) separates spread in values from uncertainty in an estimated mean.

## Three head counts don't mean three equal probabilities

Toss two fair coins independently. Let H count the heads. The possible counts are 0, 1, and 2, but you can't give each a probability of 1/3.

| Coin sequence | Head count H | Sequence probability |
| --- | --- | --- |
| TT | 0 | 1/4 |
| TH | 1 | 1/4 |
| HT | 1 | 1/4 |
| HH | 2 | 1/4 |

Group sequences with the same count: `P(H = 0) = 1/4`, `P(H = 1) = 1/2`, and `P(H = 2) = 1/4`. Exactly one head has two ways to happen.

The correct expectation is `0 × 1/4 + 1 × 1/2 + 2 × 1/4 = 1` head. Averaging the three counts with incorrect equal weights also gives 1: `(0 + 1 + 2) / 3 = 1`. **A correct final mean can hide a wrong probability model.** Exercise 3 changes the payoffs to expose that error.

Fairness and independence together make the four sequences equally likely. TH and HT are mutually exclusive alternatives whose probabilities add. The [mutually exclusive vs independent events guide](/blog/mutually-exclusive-vs-independent-events/) explains that distinction. If the problem gives a condition, work out probabilities within that condition first; see [conditional probability with two-way tables](/blog/conditional-probability-two-way-tables/).

## Try the worksheet before reading the answers

Write what your random variable measures, build its value/probability/contribution table, and finish with a sentence giving the units and meaning. These are original exercises built from invented classroom models.

1. A waiting time W is 0 minutes with probability 1/5, 2 minutes with probability 2/5, and 6 minutes with probability 2/5. Find E(W). Can that time occur on one trial?
2. Six equally likely tokens have payouts `0, 0, 1, 3, 4, 6` points. Find the expected gross payout and the expected net change if each draw costs 2 points.
3. Toss the two fair independent coins above. A game pays 0 points for no heads, 2 points for exactly one head, and 8 points for two heads. Find the expected gross payout and the fair entry fee. Compare the correct answer with `(0 + 2 + 8) / 3`. Why did equal weighting give the right mean for head counts but fail here?
4. A net change X can only be `−2, 1, or 6` points, with probabilities `0.2, p, and 0.4`, respectively. Find p, then E(X).
5. Someone lists payouts of `0, 5, and 10` points with probabilities `0.3, 0.4, and 0.4`, respectively, calculates a weighted sum of 6 points, and calls it the expectation. Is that a valid distribution?
6. For the original ten-token bag and 3-point fee, a learner says: “The expected net change is −0.6 points, so losing points on the next draw is certain.” Correct the statement and find the probability of a loss on that draw.

### Answers with the decision that matters

1. **3.2 minutes.** Calculate `0 × 1/5 + 2 × 2/5 + 6 × 2/5 = 16/5`. The waiting time itself is always 0, 2, or 6 minutes; 3.2 describes the distribution's mean.
2. **7/3 points gross; 1/3 point net.** The gross expectation is `(0 + 0 + 1 + 3 + 4 + 6) / 6 = 14/6`. Averaging these six entries works because they represent equally likely tokens, including both zeros. Subtract the 2-point fee once: `7/3 − 2 = 1/3`.
3. **3 points gross; a 3-point fair fee.** The contributions are `0 × 1/4`, `2 × 1/2 = 1`, and `8 × 1/4 = 2`. Their sum is 3 points. Equal weighting gives `10/3` points because it ignores the two sequences that produce exactly one head. For head counts, the wrong weights happened to balance around 1; that agreement doesn't carry over to this payoff rule. Subtracting a 3-point fee gives zero expected net change.
4. **p = 0.4; expected net change 2.4 points.** The probabilities must sum to 1, so `p = 1 − 0.2 − 0.4 = 0.4`. Then `E(X) = (−2) × 0.2 + 1 × 0.4 + 6 × 0.4 = −0.4 + 0.4 + 2.4 = 2.4` points. Negative values are allowed; negative probabilities aren't.
5. **Invalid as supplied.** The probabilities add to 1.1. The arithmetic produces 6 points, but these weights don't form a probability distribution. Check the problem or source data before calculating an expectation; silently changing the probabilities would invent a different model.
6. **A loss has probability 0.6.** Only the zero-payout tokens produce negative net change: −3 points. The other tokens produce +1 or +9 points. The negative expectation describes a weighted mean, while a single draw can still produce a gain.

## Review the mistake you actually made

Before accepting an answer, check that every probability is between 0 and 1, the probabilities sum to 1, and the mean lies between the smallest and largest values in your table, inclusive. Then confirm that your units and gross/net definition match the question. These checks catch errors; passing them doesn't prove every probability is correct, as the head-count example showed.

Turn a missed decision into a short recall prompt. For example: “Two fair independent coins: why isn't exactly one head a 1/3 event?” Answer: “TH and HT are two of the four equally likely sequences, so its probability is 1/2.” Save that as an ordinary card in Nibomo or on paper, then try a fresh payoff problem. The [flashcard-writing guide](/blog/how-to-make-better-flashcards/) helps keep each prompt focused on one decision.

*AI tools assisted substantially with source research, writing, editorial revision, and constructing the original exercises. Arithmetic was checked against the stated models; the exercises haven't been validated in a classroom. The illustration is AI-generated.*
