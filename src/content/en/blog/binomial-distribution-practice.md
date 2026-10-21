---
title: "Binomial Distribution Practice: Check the Model, Then Calculate"
description: "Practice binomial probability with a checked distribution, exactly and at-least questions, and counterexamples that separate constant rates from independence."
date: "2026-10-21"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/01c6c52e512bcbcb20f473e7fbfc1406e385c89578ba2dccd72fad5dfefb467a.webp"
keywords:
  - "binomial distribution practice"
  - "binomial probability practice"
  - "binomial conditions"
  - "exactly vs at least probability"
  - "binomial distribution examples"
---

**Review the rules between practice sessions:** the [English AP Statistics flashcard deck](/catalog/packages/ap-statistics-flashcards/) covers binomial conditions, the probability formula, and complements within a broader 250-card statistics deck. Use regular retrieval and spaced review to help retain those rules over time. All worked solutions to this worksheet are below.

Five trials, each with a 40% chance of success, can produce very different success counts. With independent trials, exactly two successes has probability **0.3456**. With one shared random switch controlling all five results, exactly two successes is impossible—even though each individual result still has a 40% success probability.

Start binomial distribution practice by checking how the results are generated. Then define what you count and translate the question before calculating. The examples here are invented mathematical models with specified probabilities, not observations of real equipment or people.

![An older man turns one tilt wand that moves five connected wooden blind slats together](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/01c6c52e512bcbcb20f473e7fbfc1406e385c89578ba2dccd72fad5dfefb467a.webp)

## Check all four binomial conditions

The standard binomial trial model counts successes across a fixed number of trials. These four conditions justify using it:

1. **A fixed number n.** Set the number of trials before seeing their results.
2. **Two outcome categories.** Classify each trial as success or failure, using the same definition throughout. “Success” simply labels the outcome you're counting; a rolled die, for example, can be classified as “six” or “not six.”
3. **One success probability p.** Each trial has the same probability of success before any results are observed.
4. **Mutually independent trials.** Learning the results of any group of other trials doesn't change a trial's success probability. Checking pairs alone isn't enough: mutual independence concerns the whole collection.

Define **X = the number of successes**. Its values must be whole numbers between 0 and n. If a condition fails, this recipe no longer justifies a binomial calculation. Examine the actual process; the counterexamples below show what can change. Also check that you're counting successes, rather than measuring how long you wait for one.

[OpenStax's binomial distribution lesson](https://openstax.org/books/introductory-statistics-2e/pages/4-3-binomial-distribution) introduces the model. Cambridge's [NRICH Binomial Conditions problem](https://nrich.maths.org/problems/binomial-conditions) explores why equal success probabilities and independence need separate checks. A historical “40% success rate” alone establishes neither condition for a new sequence of trials.

## Count positions as well as successes

For our main model, run **five mutually independent trials**, each producing S with probability 2/5 and F with probability 3/5. Let X count the S results. The notation **X ~ Binomial(5, 2/5)** says that X has a binomial distribution with n = 5 and p = 2/5.

Start with one ordered pattern, **SSFFF**. Independence lets us multiply its five probabilities:

**P(SSFFF) = (2/5)² × (3/5)³ = 108/3125 = 0.03456.**

“Exactly two successes” leaves their positions open. SSFFF, SFSFF, and FFFSS all qualify. There are ten ways to choose the two success positions:

**C(5, 2) = 5! / (2! × 3!) = 10.**

C(n, k), read as “n choose k,” counts the choices of k positions among n. The general expression is **C(n, k) = n! / (k! × (n − k)!)**. A factorial multiplies the positive integers up to its argument: 3! = 3 × 2 × 1, for example, and 0! = 1.

Each of the ten patterns contains two S factors and three F factors, so each has probability 0.03456. Only one ordered pattern can occur in a run. These are mutually exclusive alternatives, and their probabilities add:

**P(X = 2) = 10 × 0.03456 = 0.3456.**

The same reasoning gives the binomial probability formula:

**P(X = k) = C(n, k) × pᵏ × (1 − p)ⁿ⁻ᵏ**, for k = 0, 1, …, n.

Multiply along one pattern; add across the qualifying patterns. Leaving out C(n, k) calculates the probability of one specified pattern instead of accounting for every arrangement with k successes.

## Build the whole distribution once

With n = 5 and p = 2/5, the formula gives the following distribution. Keeping a common denominator of 3125 makes the total easy to check.

| Success count k | C(5, k) | P(X = k), exact | P(X = k), decimal |
| --- | ---: | ---: | ---: |
| 0 | 1 | 243/3125 | 0.07776 |
| 1 | 5 | 810/3125 | 0.25920 |
| 2 | 10 | 1080/3125 | 0.34560 |
| 3 | 10 | 720/3125 | 0.23040 |
| 4 | 5 | 240/3125 | 0.07680 |
| 5 | 1 | 32/3125 | 0.01024 |
| Total | | **3125/3125** | **1.00000** |

There are six possible counts and 32 ordered S/F patterns. Patterns with the same success count are equally likely, but patterns with different counts aren't when p = 2/5. The middle counts also have more possible arrangements than the extremes.

For a binomial count, the mean is **np = 2** and the variance is **np(1 − p) = 6/5**. The standard deviation is √(6/5), about 1.095 successes. OpenStax gives these formulas in the lesson linked above. A mean of 2 doesn't promise two successes in each run; the separate [expected value worksheet](/blog/expected-value-practice/) explains how to interpret a probability-weighted mean.

## Translate the boundary before adding

“At least three” includes three. “More than three” excludes it. Write the allowed counts first, then select the table rows.

| Wording | Event | Included counts | Probability |
| --- | --- | --- | ---: |
| Exactly three | X = 3 | 3 | 0.23040 |
| At least three | X ≥ 3 | 3, 4, 5 | 0.31744 |
| More than three | X > 3 | 4, 5 | 0.08704 |
| At most two | X ≤ 2 | 0, 1, 2 | 0.68256 |
| Fewer than two | X < 2 | 0, 1 | 0.33696 |

For at least three successes, add the final three rows:

**P(X ≥ 3) = (720 + 240 + 32)/3125 = 992/3125 = 0.31744.**

Its complement gives the same answer: **P(X ≥ 3) = 1 − P(X ≤ 2) = 1 − 0.68256**. Subtracting P(X ≤ 3) would remove the three-success row as well, leaving X > 3.

If your calculator's cumulative function returns P(X ≤ k), use **1 − cumulative(2)** for “at least three.” Check which boundary the function includes. The name of a calculator command doesn't replace writing the event.

## Same rate, different dependence

Change the five-result procedure. One random switch B is on with probability 2/5 and off with probability 3/5. All five positions display S when B is on; all display F when it's off. Let Y count successes.

Each position still has success probability 2/5 before the switch is observed. The distribution of Y is:

| Count Y | Probability |
| --- | ---: |
| 0 | 3/5 |
| 1, 2, 3, or 4 | 0 each |
| 5 | 2/5 |

Seeing one S reveals that every other position is S. The results are dependent, and **P(Y = 2) = 0** directly contradicts the 0.3456 predicted by Binomial(5, 2/5).

Both counts nevertheless have mean 2. For the switch model, `0 × 3/5 + 5 × 2/5 = 2`. Equal individual success rates and equal means can hide very different distributions.

The other condition can fail separately too. Take two independent trials with success probabilities 1/5 and 4/5. The probability of exactly one success is:

**(1/5)(1/5) + (4/5)(4/5) = 17/25 = 0.68.**

The first product describes success then failure; the second describes failure then success. Replacing both probabilities with their average, 1/2, would give a Binomial(2, 1/2) probability of **2 × (1/2) × (1/2) = 0.5**. That substitution changes the model, even though it preserves the mean success count of 1.

## Try these problems before checking the answers

For each problem, name the random variable and check the model. Write the requested event in symbols before doing the arithmetic.

1. In the original five-trial model, find the probability of at least one success.
2. In that model, find the probability of between two and four successes, inclusive. Would `P(X ≤ 4) − P(X ≤ 2)` work?
3. Run independent trials with success probability 2/5 until the first success. Is the number of trials a Binomial(5, 2/5) variable?
4. A bag contains six marked and four unmarked tokens. Draw three uniformly at random without replacement. Find the probability of exactly two marked tokens. Can you use Binomial(3, 0.6) exactly?

### Answers and model checks

**1. 0.92224.** X counts successes in five independent trials with constant p = 2/5. The requested event is X ≥ 1. Exclude the only other possibility, zero successes:

`P(X ≥ 1) = 1 − P(X = 0) = 1 − 243/3125 = 2882/3125 = 0.92224`.

Using p = 0.4 alone would answer a question about one trial.

**2. 0.65280.** The event is 2 ≤ X ≤ 4. Add the two-, three-, and four-success rows:

`P(2 ≤ X ≤ 4) = (1080 + 720 + 240)/3125 = 2040/3125 = 0.65280`.

The proposed subtraction removes X = 2, so it gives P(3 ≤ X ≤ 4). Use **P(X ≤ 4) − P(X ≤ 1)** to retain the lower boundary.

**3. No; this is a geometric waiting time.** Let T count the trials needed to reach the first success, including the successful trial. T can exceed five: the stopping rule doesn't set a fixed number of trials. For example, T = 3 requires two failures followed by a success:

`P(T = 3) = (3/5)² × (2/5) = 18/125`.

A binomial variable counts successes in a fixed run. T measures the length of a run that ends when a success occurs.

**4. 1/2; the exact count follows a hypergeometric distribution.** Let M count marked tokens among the three draws. Given a marked first draw, the next success probability is 5/9; given an unmarked first draw, it's 6/9. The draws aren't independent.

Count equally likely subsets of three distinct tokens. There are `C(10, 3) = 120` in total. Choose two of the six marked tokens and one of the four unmarked tokens to get `C(6, 2) × C(4, 1) = 15 × 4 = 60` qualifying subsets. Thus:

`P(M = 2) = 60/120 = 1/2`.

Binomial(3, 0.6) would instead give `3 × 0.6² × 0.4 = 0.432`, so it isn't exact for this bag. For calculations that follow the changing collection draw by draw, continue with the [probability without replacement guide](/blog/probability-without-replacement/).

## Keep the decision available for next time

After solving, turn a missed decision into a small retrieval prompt. Try “Which counts does X > 3 include when n = 5?” or “Does a constant success probability prove independence?” Answer from memory, then check: **4 and 5**; **no—the shared-switch model is a counterexample**.

Revisit those prompts in spaced review sessions, alongside fresh problems that require you to choose the model and complete the calculation. The [flashcard-writing guide](/blog/how-to-make-better-flashcards/) helps keep a card focused. A full worked problem still needs room for assumptions, notation, and arithmetic.

*Production note: AI tools assisted substantially with research, writing, editorial revision, and constructing these original exercises. Exact fraction arithmetic checked the core distributions and counterexamples, including enumeration of all 32 five-trial patterns and all 120 three-token subsets. These are mathematical checks; the worksheet hasn't been classroom-tested or reviewed by a human statistics educator. The illustration is AI-generated.*
