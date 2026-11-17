---
title: "Negative Binomial Distribution Practice: Trials or Failures?"
description: "Work through negative binomial problems with checked sequences, trials-versus-failures conventions, and explained answers for exact and by-trial probabilities."
date: "2026-11-17"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3ef9b27a630f753b8444d99682f85ae135474f9be780d07d0d054a892d5f0a41.webp"
keywords:
  - "negative binomial distribution practice"
  - "trials until rth success"
  - "failures before rth success"
  - "binomial vs negative binomial"
---

Two successes in four trials can happen in six different orders. Only three of those orders put the second success on trial four. Confuse these events and, with independent trials of constant success probability, your answer will be twice what it should be.

Start negative binomial distribution practice by writing what the variable counts. We'll use **T for the number of trials through the rth success**, including the final successful trial. The examples below are invented mathematical models with explicitly assumed probabilities.

![A woman selects a second sound apple while two bruised apples lie apart on a cloth](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3ef9b27a630f753b8444d99682f85ae135474f9be780d07d0d054a892d5f0a41.webp)

## Fix the final success before counting

Assume mutually independent trials, each classified as success S or failure F, with the same success probability **p**, where 0 < p < 1. Choose a positive integer target **r** before the trials begin, then continue until the rth success.

For **T = n**, trial n must succeed. Among the preceding n − 1 trials, exactly r − 1 must succeed. This gives:

**P(T = n) = C(n − 1, r − 1) × p^r × (1 − p)^(n − r)**

for integers n = r, r + 1, … ; the probability is zero for smaller trial counts. Here **C(a, b) = a!/[b!(a − b)!]** counts choices of b positions from a, with 0! = 1.

[Berkeley's negative binomial lesson](https://www.stat.berkeley.edu/~stark/SticiGui/Text/randomVariables.htm) derives this trials-through-success convention. If r = 1, the coefficient becomes C(n − 1, 0) = 1: the formula reduces to the [geometric first-success model](/blog/geometric-distribution-practice/).

### Enumerate a small case

Set **r = 2 and p = 1/3**. Exactly four trials until the second success requires one of these paths:

| Path | Successes before trial four | Final trial | Path probability |
| --- | ---: | --- | ---: |
| SFFS | 1 | S | 4/81 |
| FSFS | 1 | S | 4/81 |
| FFSS | 1 | S | 4/81 |

Each path contains two successes and two failures, so its probability is `(1/3)² × (2/3)² = 4/81`. Adding gives **P(T = 4) = 12/81 = 4/27**.

The coefficient is **C(3, 1) = 3**: choose where the first success goes among the first three trials. The last position is already fixed as S. Using C(4, 2) = 6 also counts SSFF, SFSF, and FSSF. Those four-trial sequences reach their second success earlier, so they don't belong to T = 4.

The [binomial distribution worksheet](/blog/binomial-distribution-practice/) counts successes in a fixed number of trials. A negative binomial stopping-time problem fixes the target success count and asks how many trials it takes.

## Trials and failures differ by r

Another convention defines **F = failures before the rth success**. Every completed run contains exactly r successes, so:

**F = T − r**, and **T = F + r**.

| Convention | Possible values | Exact probability |
| --- | --- | --- |
| Trials T | r, r + 1, … | C(n − 1, r − 1) p^r (1 − p)^(n − r) |
| Failures F | 0, 1, … | C(f + r − 1, r − 1) p^r (1 − p)^f |

The [official SciPy `nbinom` documentation](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.nbinom.html) uses failures. With r = 2 and p = 1/3, finishing on trial four means F = 2. After importing `nbinom` from `scipy.stats`, use:

| Question | SciPy call | Result |
| --- | --- | --- |
| Finish exactly on trial four | `nbinom.pmf(2, 2, 1/3)` | 4/27 ≈ 0.148148 |
| Finish by trial four | `nbinom.cdf(2, 2, 1/3)` | 11/27 ≈ 0.407407 |

The call signature is `pmf(k, n, p)` or `cdf(k, n, p)`: **k counts failures**, and SciPy's **n is our r**, the target number of successes. Translate your variable before entering the numbers.

## “By trial n” includes earlier finishes

Imagine generating all n trial results, even if the stopping rule would finish earlier. Let **Xₙ** count successes in those n independent trials, so Xₙ has a binomial distribution with parameters n and p. The rth success has arrived by trial n exactly when Xₙ ≥ r:

**P(T ≤ n) = P(Xₙ ≥ r) = 1 − P(Xₙ ≤ r − 1)**.

For r = 2, p = 1/3, and n = 4:

**P(T ≤ 4) = 1 − [(2/3)^4 + 4(1/3)(2/3)^3] = 11/27**.

Adding the finishing-time probabilities gives the same result: `P(T = 2) + P(T = 3) + P(T = 4) = 1/9 + 4/27 + 4/27 = 11/27`.

For positive integer n, the wording determines which trials to count:

| Wording | Event | Equivalent success count |
| --- | --- | --- |
| By trial n | T ≤ n | At least r successes in the first n trials |
| Before trial n | T < n | At least r successes in the first n − 1 trials |
| At least n trials | T ≥ n | Fewer than r successes in the first n − 1 trials |
| More than n trials | T > n | Fewer than r successes in the first n trials |

## Seven exercises with explained answers

Try each question before reading its answer. Unless a question changes the model, assume independent trials with constant p.

### 1. Third success on trial five

With r = 3 and p = 1/2, find P(T = 5). How many failures occur?

**Answer: 3/16, with two failures.** Choose two success positions among the first four; the fifth is fixed as S. Thus `C(4, 2)(1/2)^3(1/2)^2 = 6/32 = 3/16`. The same event is F = 2.

### 2. Second success by trial four

With r = 2 and p = 1/3, find the probability of finishing by trial four and the probability of still waiting afterward.

**Answer: 11/27 and 16/27.** From the binomial complement, `P(T ≤ 4) = 1 − P(X₄ = 0) − P(X₄ = 1) = 11/27`. Still waiting is T > 4: `1 − 11/27 = 16/27`. Finishing exactly on four has the smaller probability 4/27.

### 3. At least four trials

Keep r = 2 and p = 1/3. Does “at least four trials” have probability 16/27?

**Answer: no; P(T ≥ 4) = 20/27.** To need at least four trials, the first three must contain fewer than two successes: `(2/3)^3 + 3(1/3)(2/3)^2 = 20/27`. The proposed 16/27 excludes finishing on four. Their difference, 4/27, is exactly P(T = 4).

### 4. Before five versus by five

With r = 3 and p = 1/2, compare P(T < 5) and P(T ≤ 5).

**Answer: 5/16 and 1/2.** Before five includes finishes on trials three and four: `1/8 + 3/16 = 5/16`. By five also includes the trial-five result from exercise 1: `5/16 + 3/16 = 1/2`. Since F = T − 3 is an integer, these events become F ≤ 1 and F ≤ 2, respectively.

### 5. Still waiting after three trials

With r = 2 and p = 1/2, you're still waiting after three trials. Find P(T ≤ 5 | T > 3). Would knowing exactly one success occurred change the answer?

**Answer: 5/8; with exactly one success, 3/4.** Across all eight equally likely three-trial prefixes, four qualify for T > 3: FFF, SFF, FSF, FFS. Their conditional weights are equal. From FFF, both next trials must succeed, probability 1/4. From each other prefix, at least one must succeed, probability 3/4. The average is `(1/4 + 3 × 3/4)/4 = 5/8`.

Knowing exactly one success removes FFF and leaves 3/4. Waiting for a second success can mean that you still need one success or both. The elapsed trial count alone doesn't tell you which. The [conditional probability practice](/blog/conditional-probability-two-way-tables/) explains how to choose the group you're conditioning on.

### 6. Independent trials, changing probabilities

The first two trials each have p = 1/2; the third has p = 1/4. All are independent. Find the probability of the second success on trial three.

**Answer: 1/8.** The qualifying paths SFS and FSS each have probability `(1/2)(1/2)(1/4) = 1/16`. Add them to get 1/8. A constant-p negative binomial model doesn't apply. Substituting p = 1/2 throughout would give 1/4 and describe a different process.

### 7. Equal probabilities, shared outcomes

A single fair coin toss selects an infinite sequence: heads gives all S, tails gives all F. Each position individually has success probability 1/2. Is the time to the second success negative binomial?

**Answer: no.** The trials are dependent. Half the time T = 2; otherwise the second success never arrives. Thus P(T = 2) = 1/2, whereas independent p = 1/2 trials give 1/4. Equal individual probabilities don't establish independence.

## Turn one mistake into a recall prompt

If you missed the coefficient, save: “For independent trials with constant p, why does P(T = n) use C(n − 1, r − 1)?” The answer is that **trial n is fixed as a success, leaving r − 1 success positions to choose among the first n − 1 trials**.

If you mixed up conventions, try: “With r = 3 and F = T − r, what failure-count event equals T ≤ 8?” Answer: **F ≤ 5**. Review the prompt on a later day, then solve a fresh problem. Paper or Nibomo can hold your prompts; the [flashcard-writing guide](/blog/how-to-make-better-flashcards/) helps keep each one focused.

*Production note: AI tools assisted with research, drafting, and constructing these original exercises. Exact fraction arithmetic and enumeration checked the core probabilities, including all 16 four-trial and 32 five-trial S/F patterns.*
