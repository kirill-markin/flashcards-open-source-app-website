---
title: "Geometric Distribution Practice: First Success and Attempt Limits"
description: "Practice first-success probabilities, at-least wording, and attempt limits with a checked outcome table and explained geometric-distribution problems."
date: "2026-10-24"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/4524e352cd6e1432e8e3dc43ce927da45e2afa21560821277bc69b3fd40aabe8.webp"
keywords:
  - "geometric distribution practice"
  - "first success probability"
  - "at least vs more than trials"
  - "geometric memoryless property"
  - "failures before first success"
---

Suppose you stop at the first success or after four attempts, whichever comes first. A log saying “4 attempts” then has two possible explanations: the fourth attempt succeeded, or all four failed. With independent trials and a success probability of 1/4, those events have probabilities **27/256** and **81/256**. The attempt count alone can't tell them apart.

For geometric distribution practice, start by defining **T as the trial number of the first success, including that successful trial**. Then T = k means k − 1 failures followed by a success. An attempt limit needs its own variable; it doesn't turn the last attempt into a guaranteed success.

All seven questions below have explained answers. The examples use assumed mathematical models, rather than measured success rates for people or equipment.

![A woman looks at four rope rings lying around a bare wooden peg after a ring-toss game](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/4524e352cd6e1432e8e3dc43ce927da45e2afa21560821277bc69b3fd40aabe8.webp)

## Decide what the variable counts

A geometric model applies when trials are independent, each trial has two outcome categories, and the probability p of success stays the same. Here, assume **0 < p < 1**. “Success” labels the outcome you're waiting for; “failure” labels the other outcome. [OpenStax's geometric-distribution lesson](https://openstax.org/books/introductory-statistics-2e/pages/4-4-geometric-distribution) introduces these conditions.

Write q = 1 − p for the failure probability. For T = k, the required sequence is:

**F F … F S: k − 1 failures, then one success.**

Independence lets us multiply the probabilities:

**P(T = k) = q^(k − 1) × p**, for k = 1, 2, 3, …

This is the convention used by [SciPy's geometric distribution](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.geom.html). Some materials instead count **N = the number of failures before the first success**. Then N = T − 1, its possible values begin at zero, and:

**P(N = n) = q^n × p**, for n = 0, 1, 2, …

Three trials until success means two failures before success. Check which convention a question or calculator uses before entering a number.

A question about the number of successes in a fixed number of trials needs a different variable. The [binomial distribution practice](/blog/binomial-distribution-practice/) covers that setup. Here, we're waiting for the first success and counting how long it takes.

## Keep the unfinished runs in the table

Take independent trials with **p = 1/4** and **q = 3/4**. First imagine that the sequence can continue until success, without an attempt limit. Looking only at the first four trials gives this table:

| Event | Required prefix | Exact probability | In units of 1/256 |
| --- | --- | ---: | ---: |
| First success on trial 1 | S | 1/4 | 64/256 |
| First success on trial 2 | FS | 3/16 | 48/256 |
| First success on trial 3 | FFS | 9/64 | 36/256 |
| First success on trial 4 | FFFS | 27/256 | 27/256 |
| No success in the first four trials | FFFF | 81/256 | 81/256 |
| Total | | **1** | **256/256** |

For example, first success on trial four requires **(3/4)^3 × (1/4) = 27/256**. Four failures require **(3/4)^4 = 81/256**, with no success factor at the end.

A prefix such as S leaves later outcomes unrestricted. It doesn't mean SFFF. If the first trial succeeds, T is already one, whatever the remaining hypothetical trials would produce.

Every one of the 16 possible four-trial S/F patterns belongs to exactly one row. Those patterns aren't equally likely when p = 1/4, so counting patterns alone won't give the probabilities.

Success by trial four includes the first four rows:

**P(T ≤ 4) = (64 + 48 + 36 + 27)/256 = 175/256.**

You can also exclude four failures: **1 − (3/4)^4 = 175/256**. Keep that unfinished FFFF row visible when adding an attempt limit.

## Translate “at least” before calculating

“At least four trials until success” allows a success on trial four. Only the first three trials must fail. “More than four trials” requires four failures.

| Wording about T | Event | What must happen | Probability when p = 1/4 |
| --- | --- | --- | ---: |
| Exactly four trials | T = 4 | FFFS | 27/256 |
| At least four trials | T ≥ 4 | First three are F | 27/64 |
| More than four trials | T > 4 | First four are F | 81/256 |
| Success by trial four | T ≤ 4 | At least one S in the first four | 175/256 |

For any positive integer k, the same reasoning gives:

- **P(T ≥ k) = q^(k − 1)**: the first k − 1 trials fail.
- **P(T > k) = q^k**: the first k trials fail.
- **P(T ≤ k) = 1 − q^k**: exclude k failures.
- **P(T < k) = 1 − q^(k − 1)**: success occurs within the first k − 1 trials.

At k = 1, these still work: T ≥ 1 is certain and T < 1 is impossible. Checking a small boundary value can catch an extra failure in the exponent.

## A cap changes the recorded variable

Now apply the stopping rule from the opening: stop after the first success **or after four attempts**, whichever comes first. Define **C = min(T, 4)** as the number of attempts actually performed. T still describes when success would first occur if trials could continue; C describes how many attempts this rule permits you to observe.

| Recorded attempts C | Underlying event | Probability |
| --- | --- | ---: |
| 1 | T = 1 | 1/4 |
| 2 | T = 2 | 3/16 |
| 3 | T = 3 | 9/64 |
| 4 | T = 4 or T > 4 | **27/256 + 81/256 = 27/64** |

C = 4 includes every run that reaches the fourth attempt. Reaching it requires three initial failures, so **P(C = 4) = q^3**. The fourth attempt can then succeed or fail. A log that distinguishes these outcomes needs a success/failure field alongside its attempt count.

C has no values above four and doesn't have the ordinary geometric distribution of T. The cap changes what you observe and record; it doesn't create dependence between the underlying trials.

Keeping only successful runs changes the question again. Among runs that succeed by trial four, the probability that success occurred on trial four is:

**P(T = 4 | T ≤ 4) = (27/256)/(175/256) = 27/175.**

The denominator includes only the successful runs. The [conditional probability table practice](/blog/conditional-probability-two-way-tables/) works through choosing this “given” group in more detail.

## Past failures don't make success due

After two failures, the next trial still succeeds with probability 1/4 under this model. The chance of at least one success in the next two trials is:

**P(T ≤ 4 | T > 2) = 1 − (3/4)^2 = 7/16.**

The condition T > 2 says that the first two trials failed. Once that's given, only the next two outcomes remain uncertain. You don't multiply by the probability of those first two failures again.

The geometric memoryless property states that, for nonnegative integers a and b:

**P(T > a + b | T > b) = P(T > a) = q^a.**

After b initial failures, the remaining waiting time has the same distribution as the original waiting time. [John Travis's probability text](https://math.mc.edu/travis/mathbook/Probability.old/GeometricDistribution.html) gives this property and the mean **E[T] = 1/p**.

For p = 1/4, the mean is four trials and the mean failure count is **E[N] = E[T] − 1 = 3**. Four is a long-run average across repetitions of the model. It doesn't guarantee success within four attempts: the table leaves probability 81/256 of still waiting.

Memorylessness relies on independent trials with constant p. If practice changes your chance of success, equipment deteriorates, or failures reveal information about an unknown success rate, revisit the model. A sequence of failures alone doesn't make a success “due.” A cap also keeps counting down: after two failures under a four-attempt limit, only two allowed attempts remain.

## Try seven questions before checking the answers

Write the variable and event first. Keep exact fractions until the last step. Unless a question changes the assumptions, use independent trials with the stated fixed success probability.

1. Trials have p = 1/5. Find the probability that the first success occurs on trial three, and the probability of success by trial three.
2. Using that same p = 1/5 model, compare “at least three trials until success” with “more than three trials until success.”
3. Return to p = 1/4. The first two trials failed. Given that information, what is the probability of success within the next two trials? Is it the same as the unconditional probability that the first success occurs on trial three or four?
4. With p = 1/4, stop at the first success or after four attempts. Find the probability that the recorded count C is four. Does C = 4 identify a successful run?
5. Keep only runs that succeeded within the four-attempt limit. What fraction of this group succeeded on the fourth attempt?
6. With p = 1/4, what is the smallest attempt limit k giving at least a 90% chance of success by that limit? Would using the mean waiting time as the limit achieve this?
7. Two trials are independent, but the success probability is 1/4 on the first and 1/2 on the second. Find the probability that the first success occurs on trial two. Can you use a constant-p geometric model?

### Answers with the events explained

**1. 16/125 on trial three; 61/125 by trial three.** First success on three requires FFS, so `P(T = 3) = (4/5)^2 × (1/5) = 16/125`. Success by three allows T = 1, 2, or 3. Excluding FFF gives `P(T ≤ 3) = 1 − (4/5)^3 = 61/125`. This complement already includes every way to succeed by the limit; it needs no extra factor of p.

**2. 16/25 for at least three; 64/125 for more than three.** T ≥ 3 requires two initial failures, giving `(4/5)^2 = 16/25`. T > 3 requires three failures, giving `(4/5)^3 = 64/125`. In the failures convention, N = T − 1, these events are N ≥ 2 and N ≥ 3 respectively.

**3. 7/16, given the two failures.** The next two trials both fail with probability 9/16, leaving 7/16 for at least one success. The unconditional event 2 < T ≤ 4 also requires the first two failures: `P(2 < T ≤ 4) = 9/64 + 27/256 = 63/256`. To condition on reaching that point, divide by `P(T > 2) = 9/16`, giving 7/16. The unconditional and conditional probabilities use different denominators.

**4. 27/64; the count doesn't identify the outcome.** Reaching attempt four requires FFF, so `P(C = 4) = (3/4)^3 = 27/64`. This includes both FFFS, probability 27/256, and FFFF, probability 81/256. An attempt count of four cannot tell you which occurred.

**5. 27/175.** Within the retained group, divide the fourth-trial success probability by the probability of any success within the limit: `(27/256)/(175/256) = 27/175`. Using 27/64 would describe the probability of reaching the final attempt across all runs, including failures.

**6. Nine attempts.** Require `1 − (3/4)^k ≥ 0.90`. Eight attempts give `1 − 6561/65536 ≈ 89.9887%`, just below the target. Nine give `1 − 19683/262144 ≈ 92.4915%`. Success-by-k probability increases with k, so these neighboring values establish the minimum. Keep enough precision: rounding the eight-attempt result to 90.0% would hide the shortfall. The mean of four trials gives only `175/256 ≈ 68.36%` success by the limit.

**7. 3/8; a constant-p geometric model doesn't apply.** First success on trial two requires failure then success: `(3/4) × (1/2) = 3/8`. Independence allows that multiplication, but the probabilities change between trials. Using p = 1/4 for both would give 3/16 and describe a different process.

## Save the decision you missed

Keep complete worked problems for calculation practice. For a recurring setup error, make a small recall prompt:

| Front | Back |
| --- | --- |
| T counts trials through the first success. What must happen for T ≥ 4? | The first three trials fail; trial four may succeed. |
| C = min(T, 4). Which events produce C = 4? | Success on trial four, or no success within four trials. |
| When does past failure leave the remaining geometric waiting time unchanged? | With independent trials and the same fixed success probability. |

Answer from memory before checking the back, then revisit the prompts on later days. Spacing out retrieval helps retain the event boundaries beyond today's practice session. You can use paper or add your own prompts to Nibomo; the [flashcard-writing guide](/blog/how-to-make-better-flashcards/) helps keep each card focused.

Then try a fresh problem with a different p or attempt limit, without the table in view. Include the event and the reason for its boundary in your answer. Recalling a formula and setting up a new problem are both useful practice.

*Production note: AI tools assisted substantially with research, drafting, both editorial passes, and constructing the original practice problems. Exact fraction calculations checked the worked probabilities, including enumeration of all 16 four-trial S/F patterns for the main table. The lesson hasn't been classroom-tested or reviewed by a human statistics educator. The illustration is AI-generated.*
