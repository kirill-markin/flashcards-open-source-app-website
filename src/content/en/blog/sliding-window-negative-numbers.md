---
title: "Sliding Window with Negative Numbers: Why the Sum Loop Fails"
description: "See why a sum-based sliding window fails with negative numbers. Trace a counterexample, work through a prefix-sum deque, and practice choosing valid assumptions."
date: "2026-10-10"
image: "/blog/sliding-window-negative-numbers.png"
keywords:
  - "sliding window with negative numbers"
  - "why sliding window fails with negative numbers"
  - "shortest subarray sum at least k"
  - "prefix sums monotonic deque"
  - "sliding window practice"
---

The array `[2, -3, 5]` has a one-element answer to “find the shortest subarray with sum at least `4`”: `[5]`. The familiar expand-and-shrink sum loop returns length `3`. It finds a valid window, removes `2`, sees the sum fall below `4`, and stops shrinking. The negative value has hidden a better answer one step away.

Using a **sliding window with negative numbers** requires checking what justifies each boundary move. A rolling sum still adds up correctly. The failure comes from deciding that an invalid window means every shorter suffix is invalid too. Work through that mistake first, then trace a prefix-sum deque for the shortest-subarray task.

![A hiker pauses where a coastal path descends into a hollow before climbing the opposite slope](/blog/sliding-window-negative-numbers.png)

## Fix the task before choosing the loop

Given a sequence of integers and a **positive integer `k`**, return the length of its shortest **nonempty, contiguous** subarray whose sum is at least `k`. Values may be negative, zero, or positive. Return **`-1`** if no qualifying subarray exists, including for empty input.

All indices below are zero-based. We write a subarray as `[left, right)`: include `left`, exclude `right`, and give it length `right - left`.

Input restrictions change the algorithm. LeetCode's [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) restricts the values to positive integers and uses `0` when no answer exists. Its [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) allows signed integers and uses `-1`. We'll use signed values and `-1`, with empty input defined explicitly above. The examples here are independent of those problem statements.

## What the positive-input loop knows

For positive values, appending an element increases the sum. Removing the first element decreases it. That gives this familiar pseudocode:

```text
left = 0
sum = 0
best = infinity

for right from 0 through n - 1:
    sum = sum + values[right]

    while sum >= k:
        best = min(best, right - left + 1)
        sum = sum - values[left]
        left = left + 1

return -1 if best is infinity, otherwise best
```

At a fixed right endpoint, the loop records valid windows while moving `left` forward. Once the sum drops below `k`, removing more positive values cannot make it valid again. There is no hidden valid suffix beyond that stopping point.

A start removed after producing a valid window also needn't be saved for later endpoints: those would produce longer windows from the same start. This second argument remains true even with signed values. The unsafe step is stopping at an invalid window without checking the remaining suffixes.

Zeros preserve the needed direction too: with nonnegative input, shrinking cannot increase the sum. The sum needn't change strictly on every move.

With signed input, appending a negative value can reduce the sum, and removing one can increase it. “Below the target, so stop shrinking” no longer rules out shorter answers.

## Watch the loop stop too early

Use `[2, -3, 5]` with `k = 4`:

| Action | Current window | Sum | Best length |
| --- | --- | --- | --- |
| Append `2` | `[2]` | `2` | None |
| Append `-3` | `[2, -3]` | `-1` | None |
| Append `5` | `[2, -3, 5]` | `4` | `3` |
| Remove `2` | `[-3, 5]` | `2` | `3` |
| Stop: sum is below `4` | `[-3, 5]` | `2` | `3` |

Removing the next value, `-3`, would leave `[5]` with sum `5` and length `1`. The loop never tries it.

An even smaller change makes the failure look different. Keep the same array and set `k = 5`. The total sum is only `4`, so the loop never enters its shrinking phase and returns `-1`. The answer is still `[5]`, length `1`. An invalid full window can hide a valid suffix.

Changing `>=` to `>` would reject sums exactly equal to `k` and still leave this failure. Adjusting an index won't repair the missing assumption either. We need a valid reason to discard candidate starts.

## Turn each range sum into two prefix sums

Let `P[r]` be the sum of the first `r` elements. Start with `P[0] = 0`, then compute:

```text
P[r + 1] = P[r] + values[r]
```

The sum of `[left, right)` is:

```text
P[right] - P[left]
```

For each endpoint `right`, we want an earlier `left` satisfying `P[right] - P[left] >= k`, with the smallest possible `right - left`.

A small prefix value helps the sum qualify. A later prefix index helps the length shrink. Sometimes one start has the smaller prefix and another has the later index, so neither is always better. We need to retain both until there's a reason to discard one.

A **deque** is a queue that supports adding or removing items at either end. Store prefix **indices** in it, with two properties:

- Indices increase from front to back.
- Their prefix values also increase **strictly** from front to back.

The original prefix array can rise and fall. Only the candidates kept in the deque are monotonic. The [USACO Guide's sliding-window chapter](https://usaco.guide/gold/sliding-window?lang=cpp) explains the general monotonic-queue idea; the discard arguments below apply specifically to our shortest-subarray task.

## Why both kinds of deletion are safe

There are two separate reasons to remove a candidate. Keep them separate when explaining the algorithm.

### Remove a qualifying start from the front

Suppose the front index is `left` and `P[right] - P[left] >= k`. Record the length `right - left`, then remove `left`.

Any future endpoint `future > right` would give that same start a length `future - left > right - left`. We've already recorded a shorter valid answer from it. Keeping it cannot improve the global minimum.

Repeat while the front qualifies. Each next candidate starts later, so it may give a shorter answer at the current endpoint. Once the front fails, every candidate behind it fails too: their prefix values are larger, so subtracting them gives a smaller sum.

### Remove a dominated start from the back

Suppose an earlier candidate `old` has `P[old] >= P[right]`. Remove `old` before adding `right` as a candidate for future endpoints.

For every `future > right`:

```text
P[future] - P[right] >= P[future] - P[old]
future - right < future - old
```

Starting at `right` gives at least as much sum and a shorter range. Whenever the old start could qualify in the future, the new start would qualify and beat its length.

The old start cannot qualify at the current endpoint either: `P[right] - P[old] <= 0`, while `k` is positive. Earlier endpoints have already been processed. Removing this candidate loses no answer that could improve the result.

Equality belongs in this removal condition. If two starts have the same prefix sum, the later one gives the same future sums with shorter lengths. Keeping the earlier copy adds no useful candidate.

## Put the two proofs into one loop

This is pseudocode for the signed-input contract above, with `n` equal to the input length. `D.front` and `D.back` refer to prefix indices; deque removals operate at the named end. `infinity` means that no qualifying length has been recorded yet.

```text
P = prefix sums, including P[0] = 0
D = empty deque
best = infinity

for right from 0 through n:
    while D is nonempty and P[right] - P[D.front] >= k:
        best = min(best, right - D.front)
        remove D.front

    while D is nonempty and P[D.back] >= P[right]:
        remove D.back

    append right to D

return -1 if best is infinity, otherwise best
```

First record qualifying answers. Then discard starts dominated by the new prefix. Append the new index last, so all starts examined at this endpoint are earlier indices and describe nonempty ranges. Including `P[0]` lets the algorithm consider ranges starting at the first element; it doesn't create an empty answer.

Each of the `n + 1` prefix indices enters once and leaves at most once, through either end. The total deque work is therefore `O(n)`, even though one iteration may remove several indices. With constant-time deque operations and arithmetic, the algorithm takes `O(n)` time and `O(n)` extra space for the prefix array and deque. An implementation must use a numeric type that can hold whole prefix sums, rather than just individual input values.

## Trace every prefix, including the empty one

Use `values = [3, -4, 2, 1, -2, 6]` and `k = 5`.

The prefixes are `[0, 3, -1, 1, 2, 0, 6]`. In the table, `index:value` means a prefix index and its prefix sum. Deques are shown **after appending the current index**.

| `right` | `P[right]` | Front removals and recorded lengths | Back removals | Deque after this step | Best |
| --- | --- | --- | --- | --- | --- |
| `0` | `0` | None | None | `[0:0]` | None |
| `1` | `3` | None: `3 - 0 < 5` | None | `[0:0, 1:3]` | None |
| `2` | `-1` | None: `-1 - 0 < 5` | Remove `1:3`, then `0:0` | `[2:-1]` | None |
| `3` | `1` | None: `1 - (-1) < 5` | None | `[2:-1, 3:1]` | None |
| `4` | `2` | None: `2 - (-1) < 5` | None | `[2:-1, 3:1, 4:2]` | None |
| `5` | `0` | None: `0 - (-1) < 5` | Remove `4:2`, then `3:1` | `[2:-1, 5:0]` | None |
| `6` | `6` | Remove `2:-1`: sum `7`, length `4`; then `5:0`: sum `6`, length `1` | None | `[6:6]` | `1` |

At `right = 2`, the new prefix `-1` beats both old candidates: it is smaller and occurs later. At `right = 5`, prefix `0` beats the candidates with prefix values `2` and `1`, but it doesn't beat the earlier prefix `-1`. Those two surviving starts offer different advantages.

At the final endpoint, start `2` gives `[2, 1, -2, 6]`, sum `7`, length `4`. Start `5` gives `[6]`, sum `6`, length `1`. Both get checked in the same iteration. A single `if` for front removal would miss the second answer.

## Predict these cases before reading the answers

Keep `k` positive and use `-1` for no answer. For each shortest-subarray case, write the prefix array and identify a qualifying range, or explain why none exists.

1. `[4, -2, 3]`, `k = 5`. What is the shortest length?
2. `[0, -2, 0]`, `k = 1`. What should the algorithm return?
3. `[2, -2, 3]`, `k = 3`. At prefix index `2`, should the deque retain index `0` or index `2`, both with prefix value `0`?
4. `[2, 1, 4]`, `k = 4`. Just before processing the final prefix, the deque contains indices `[0, 1, 2]`. How many front removals occur?
5. `[]`, `k = 2`. Does including `P[0] = 0` create an answer?
6. Change the task: for `[4, -6, 5, 1]`, calculate the sum of **each length-two window**. Does the negative value invalidate a rolling sum?

### Answers and the assumption each case checks

| Case | Answer | Explanation |
| --- | --- | --- |
| 1 | Length `3` | Prefixes are `[0, 4, 2, 5]`. The full range sums to `5`; singleton sums are below `5`, and length-two sums are `2` and `1`. |
| 2 | `-1` | Prefixes are `[0, 0, -2, -2]`. Every element is nonpositive, so no nonempty range can reach positive `1`. |
| 3 | Keep index `2`; answer length `1` | Prefixes are `[0, 2, 0, 3]`. Index `2` dominates index `0` at equal prefix value. The later `[3]` reaches the target. |
| 4 | Three removals; answer length `1` | Prefixes are `[0, 2, 3, 7]`. At endpoint `3`, starts `0`, `1`, and `2` give sums `7`, `5`, and `4`, with lengths `3`, `2`, and `1`. |
| 5 | `-1` | There is only one prefix. It is appended without comparison to an earlier start, so no nonempty range is considered. |
| 6 | `-2`, `-1`, `6`; rolling sum is valid | Start with `4 + (-6) = -2`; subtract `4` and add `5` to get `-1`; subtract `-6` and add `1` to get `6`. No sum-based boundary decision is needed. |

## Negative numbers don't forbid every sliding window

The fixed-length calculation above works because the next boundary positions are specified by the task. Subtract the outgoing value, add the incoming value, and keep going. Signs don't change that identity.

The deque algorithm depends on both **sum at least `k`** and **shortest length**. The back-removal proof guarantees that a replacement start gives at least as much sum. That works for a lower threshold, but a larger sum can overshoot an exact target. Changing the comparison to `== k` doesn't adapt this deque to exact-sum queries.

Changing the objective can also make a discarded start useful:

- **Count subarrays with sum exactly `k`:** keep frequencies of earlier prefix values. At each endpoint, count occurrences of `P[right] - k`, then add the current prefix to the frequencies. Equal prefixes must retain their counts; removing them would lose distinct ranges.
- **Find the maximum subarray sum with no length restriction:** maximize `P[right] - P[left]` by keeping the smallest earlier prefix, or use the usual Kadane recurrence. The qualifying-front removal above solves a different question.

Before choosing a loop, write the condition and the objective. “Contiguous range” is a useful clue, but it doesn't prove that moving a boundary based only on the current sum is safe.

## Keep a small correction, then return to practice

If you chose the positive-input loop for signed input, record the failed assumption in your [coding-interview mistake log](/blog/how-to-use-flashcards-for-coding-interviews/). A few narrow cards can preserve the parts you had trouble explaining:

| Card front | Card back |
| --- | --- |
| Shortest sum at least `4`: why does shrinking `[2, -3, 5]` stop too early? | After removing `2`, the sum is `2`. Removing `-3` next would raise it to `5`, but the sum-based loop has already stopped. |
| Shortest signed-input sum: why can a qualifying deque front be removed after recording its length? | A future endpoint would give the same start a longer range than the valid one already recorded. |
| Two prefix starts have equal values. Which survives for shortest-length queries? | The later index: every future sum is equal, and its range is shorter. |

Choose a card because it fixes a mistake you made. [What should go on a flashcard](/blog/what-should-go-on-a-flashcard/) gives a filter for keeping the review set small. For another assumption-and-boundary exercise, [binary search practice](/blog/binary-search-practice/) follows the same habit of justifying what each update discards.

Then close the trace and try `[1, -2, 4, 2]` with `k = 6`. Write the prefixes, track the deque, and explain each removal before checking your result.

The prefixes are `[0, 1, -1, 3, 5]`; the answer is length **`2`**, from `[4, 2]`. Prefix index `2` removes the earlier candidates before becoming the winning start. Explain why those removals are safe without referring to the pseudocode. That's the reasoning to carry into your next problem.
