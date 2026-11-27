---
title: "Poisson Process Practice for Overlapping Intervals"
description: "Practice Poisson process counts in overlapping intervals. Find joint and conditional probabilities in a worked example, then try three exercises with answers."
date: "2026-11-27"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3b671978d0f37422527ef3513b3f3ee3a490174fc79638cf407b4093aeb61513.webp"
keywords:
  - "Poisson process overlapping intervals"
  - "Poisson process practice"
  - "Poisson process joint probability"
  - "Poisson process conditional probability"
  - "independent increments"
---

Two reports track arrivals at the same loading dock. The first covers the opening 20 minutes. The second starts 10 minutes after opening and runs to the 40-minute mark. A truck arriving 15 minutes after opening would appear in both reports. Before any arrivals are observed, what’s the probability that the first report counts exactly one arrival and the second counts exactly two?

For this hypothetical dock, assume a homogeneous Poisson process with a constant rate of **6 arrivals per hour**. Counts in disjoint time intervals are independent, a property called *independent increments*. Split the two windows at the edges of their overlap to use that property. [University of Minnesota’s Poisson process lecture notes](https://www.biostat.umn.edu/~baolin/teaching/probmods/ipm_poisson.html)

![Blue and amber crop guides overlap around a cyclist in a street photograph](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3b671978d0f37422527ef3513b3f3ee3a490174fc79638cf407b4093aeb61513.webp)

## Split the windows into three pieces

Let **A** count arrivals in `(0, 20]` and **B** count arrivals in `(10, 40]`, with times measured in minutes after opening. The parenthesis excludes the left endpoint and the square bracket includes the right endpoint. An arrival exactly 10 minutes after opening would count toward A alone. One exactly 20 minutes after opening would count toward both.

The rate is **0.1 arrivals per minute**. Multiply that rate by the length of an interval in minutes to get its Poisson mean, the expected number of arrivals in that interval. The 20-minute piece after the overlap, for example, has a mean of 2 arrivals.

| Piece | Interval in minutes | Length in minutes | Poisson mean | Count |
| --- | --- | ---: | ---: | --- |
| First window only | `(0, 10]` | 10 | 1 | L |
| Both windows | `(10, 20]` | 10 | 1 | S |
| Second window only | `(20, 40]` | 20 | 2 | R |

The three intervals are disjoint, so their counts L, S, and R are independent. The window totals are **A = L + S** and **B = S + R**. The same shared count S appears in both equations. [Aditya Mahajan’s course example on overlapping intervals](https://adityam.github.io/probability-and-random-signals/poisson-processes.html#exm-poisson-overlapping-intervals)

For a Poisson count X with mean μ, the probability of exactly k arrivals is `P(X = k) = e^(−μ) × μ^k / k!`, where k is a nonnegative integer, e is the base of the natural logarithm, and k! is k factorial. For example, **P(R = 2) = e⁻² × 2² / 2! = 2e⁻²**. For practice counting successes in a fixed number of independent trials with a common success probability, see the [binomial distribution worksheet](/blog/binomial-distribution-practice/).

## Find the joint probability

If A = 1 and B = 2, the overlap can contain zero or one arrival. Every shared arrival counts toward A, which has room for just one. Once the shared count S is set, subtract it from the two target totals to get L and R.

| Shared count S | Left count L = 1 − S | Right count R = 2 − S | Probability of the three counts |
| ---: | ---: | ---: | ---: |
| 0 | 1 | 2 | e⁻¹ × e⁻¹ × 2e⁻² = 2e⁻⁴ |
| 1 | 0 | 1 | e⁻¹ × e⁻¹ × 2e⁻² = 2e⁻⁴ |

Within each row, multiply the probabilities for S, L, and R because the three counts are independent. For the first row that’s `P(S = 0) × P(L = 1) × P(R = 2)`. Across the rows, add the probabilities because the cases are mutually exclusive. Only one value of S can occur in a given run.

**P(A = 1, B = 2) = 2e⁻⁴ + 2e⁻⁴ = 4e⁻⁴ ≈ 0.07326.**

For other target counts a and b in these windows, list S from 0 through the smaller of a and b. Each row then has L = a − S and R = b − S. This gives every possible set of piece counts that makes A = a and B = b.

### Why multiplying the window probabilities gives a different answer

A covers 20 minutes and has a Poisson mean of 2. B covers 30 minutes and has a Poisson mean of 3. Their marginal probabilities, calculated one window at a time, are **P(A = 1) = 2e⁻²** and **P(B = 2) = (9/2)e⁻³**.

Multiplying those probabilities would give **9e⁻⁵ ≈ 0.06064**. That product assumes independence between the window totals. An arrival in the overlap increases both totals, so the joint calculation accounts for that arrival through their shared count S.

## When the first report already shows one arrival

What’s the probability the second report shows two? In `P(B = 2 | A = 1)`, the vertical bar means “given that.” Divide the joint probability by P(A = 1) to restrict the calculation to runs where the first report shows one arrival.

**P(B = 2 | A = 1) = P(A = 1, B = 2) / P(A = 1) = 4e⁻⁴ / (2e⁻²) = 2e⁻² ≈ 0.27067.**

For more practice choosing the denominator when the given event changes, try the [conditional probability exercises with two-way tables](/blog/conditional-probability-two-way-tables/).

## Try three variations at the same rate

1. What’s the probability that both original reports show zero arrivals?
2. What’s the probability that the first report shows zero arrivals and the second shows exactly two?
3. Change the intervals to `(0, 10]` and `(10, 30]`. What’s the probability of exactly one arrival in each? Which interval would count an arrival exactly 10 minutes after opening?

### Answers

1. **e⁻⁴ ≈ 0.01832.** Every piece must be empty, so multiply `e⁻¹ × e⁻¹ × e⁻²`. You can also calculate the probability of zero arrivals over the full 40 minutes, where the Poisson mean is 4.
2. **2e⁻⁴ ≈ 0.03663.** A = 0 forces L = 0 and S = 0. Both of B’s arrivals must fall in the right piece, so R = 2. Multiply `e⁻¹ × e⁻¹ × 2e⁻²`.
3. **2e⁻³ ≈ 0.09957.** The time 10 belongs to the first interval only. The intervals are disjoint, so their counts are independent. Their means are 1 and 2, giving `e⁻¹ × 2e⁻²` for one arrival in each.

*AI tools helped write this worksheet. The numerical answers were checked by enumerating counts in the disjoint intervals.*
