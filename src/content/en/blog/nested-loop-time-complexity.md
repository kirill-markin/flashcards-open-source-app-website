---
title: "Nested Loop Time Complexity: Count the Work Before Big O"
description: "Practice nested loop time complexity with exact counts, triangular bounds, doubling steps, and a pointer that doesn't reset. Includes explained answers."
date: "2026-10-12"
image: "/blog/nested-loop-time-complexity.png"
keywords:
  - "nested loop time complexity"
  - "nested loops Big O"
  - "time complexity practice"
  - "triangular loop complexity"
  - "nested loops O(n)"
  - "dependent loop bounds"
---

A loop inside another loop can call its body eight times in total when `n = 8`. Another pair can make 64 calls. The indentation looks similar; the difference is how often the inner work repeats and whether its progress survives the next outer iteration.

To work out **nested loop time complexity**, count that work before assigning a Big O label. For each example below, write the inner counts, add them across the outer iterations, then include the cost of the body and loop control. Try the exercises before reading their answers. A complexity class is more useful when you can explain where it came from.

![A caretaker wipes a curved wooden bench in an outdoor amphitheater with progressively longer rows](/blog/nested-loop-time-complexity.png)

## Name the operation and its cost

All snippets are pseudocode. `range(a, b)` visits the integers from `a` through `b - 1`; it is empty when `a >= b`. It advances a counter without building a list. `n` and `m` are positive integers throughout. `op()` names one constant-cost operation that doesn't change loop bounds or counters.

We use a **unit-cost model**: assigning, comparing, and updating counters takes constant time, and the machine words are wide enough to hold all values involved without overflow. This is an abstract algorithm analysis. Arithmetic on arbitrarily large Python integers needs a different cost model.

Let `C(n)` count calls to `op()`. That exact count excludes loop conditions, counter updates, and setup. The full running time `T(n)` includes those too. Even an empty inner range requires a check, and its outer loop may still repeat many times.

The notation describes growth:

- `O(f(n))` gives an asymptotic upper bound: for sufficiently large inputs, the cost is at most a constant times `f(n)`.
- `Θ(f(n))` gives a tight bound: the cost is bounded above and below by positive constant multiples of `f(n)` for sufficiently large inputs.

A linear loop is both `O(n)` and `O(n²)`, but only the first is tight. We'll use `Θ` for the tight classes here. MIT's [Big Oh and Theta lecture](https://ocw.mit.edu/courses/6-100l-introduction-to-cs-and-programming-using-python-fall-2022/mit6_100l_f22_lec22.pdf) explains the distinction between operation counts, upper bounds, and tight growth.

## Multiply when every outer iteration does the same work

```text
for row in range(0, n):
    for column in range(0, m):
        op()
```

There are `n` rows and `m` calls per row, so `C(n, m) = nm`. Loop control adds work proportional to `n + nm`. Since `m >= 1`, the `nm` term covers the outer-loop work too, giving `Θ(nm)` time.

Keep both input sizes. Two collections with sizes `n` and `m` don't suddenly have equal lengths because their loops are nested. You can simplify to `Θ(n²)` if the task states `m = n`, or more generally `m = Θ(n)`.

If the inner loop instead visits a fixed four choices, the count is `4n` and the time is `Θ(n)`. Nested loops can take linear time when the inner bound doesn't grow with the input.

Two consecutive loops are different again. A loop with `n` constant-cost steps followed by one with `m` steps takes `Θ(n + m)`. Adding and multiplying describe different arrangements of work.

## Dependent loop bounds need a sum

Suppose a task inspects pairs of positions with at least one position between them:

```text
for left in range(0, n):
    for right in range(left + 2, n):
        op()
```

For `n = 6`, the inner counts are `4, 3, 2, 1, 0, 0`. The later starting position leaves fewer choices. Multiplying six outer iterations by four inner iterations would count work that never happens.

For `n >= 2`, the exact count is:

```text
C(n) = Σ from left = 0 to n - 1 of max(0, n - left - 2)
     = (n - 2)(n - 1) / 2
```

To derive the formula, write `1 + 2 + ... + q`, then write the same sum in reverse. Each of the `q` paired positions adds to `q + 1`, so twice the sum is `q(q + 1)`. Here `q = n - 2`; for `q = 0`, the sum is empty and equals zero.

The expanded count is `(n² - 3n + 2) / 2`, which has tight growth `Θ(n²)`. The full time is `Θ(n + C(n))` because each outer iteration also sets up and checks its inner range. That is still `Θ(n²)` as `n` grows. A triangular set of pairs reduces the count compared with a full square, but its growth remains quadratic.

For `n = 1` or `n = 2`, there are no calls to `op()`. The snippet still does constant work at those sizes. A zero body count doesn't mean a zero running time.

## A doubling outer loop can still give linear work

Here the outer counter doubles, while the inner bound follows that counter:

```text
width = 1
while width <= n:
    for slot in range(0, width + 2):
        op()
    width = 2 * width
```

At `n = 8`, `width` takes the values `1, 2, 4, 8`. The inner loop makes `3 + 4 + 6 + 10 = 23` calls.

Let `k = floor(log₂ n)`. `floor` rounds down to an integer, so `2ᵏ` is the largest power of two at most `n`. There are `k + 1` outer iterations, with widths `2⁰` through `2ᵏ`. The total is a geometric sum plus the two extra calls per stage:

```text
C(n) = Σ from t = 0 to k of (2ᵗ + 2)
     = 2^(k + 1) - 1 + 2(k + 1)
```

For the width terms, let `S = 1 + 2 + ... + 2ᵏ`. Subtracting `S` from `2S` cancels the middle terms and leaves `S = 2^(k + 1) - 1`.

If `p = 2ᵏ` is the largest visited width, then `p <= n < 2p`. The largest stage alone does more than `n/2` calls. All the width terms together sum to `2p - 1`, at most `2n - 1`. The extra terms add `2(k + 1)`, at most `2n` because `k + 1 <= n` for positive integers `n`. These lower and upper bounds give `Θ(n)` calls. The loop overhead adds no larger term, so the time is also `Θ(n)`.

Multiplying the number of stages by the largest stage gives an `O(n log n)` upper bound, but it overstates the tight growth. Most stages are much smaller than the last one.

Now change only the inner bound to `range(0, n + 2)`. Every stage does `n + 2` calls, so the exact count becomes `(n + 2)(k + 1)`. The time is `Θ(n(1 + log n))`, usually written `Θ(n log n)` as `n` grows. The added `1` also accounts for `n = 1`, when the body runs three times. Whether the inner bound follows `width` or stays fixed at `n` changes the result.

Princeton's [algorithm-analysis practice worksheet](https://www.cs.princeton.edu/courses/archive/spring20/cos226/precepts/Analysis_worked_examples.pdf) provides further practice with summations and geometric growth. Derive the counts from the actual endpoints, including inputs that aren't powers of two.

## Check whether the inner pointer resets

```text
cursor = 0
for end in range(0, n):
    while cursor <= end:
        op()
        cursor = cursor + 1
```

For `n = 4`, the calls process cursor values `0, 1, 2, 3`, once each. After the iteration for `end = 0`, the cursor is already `1`. It doesn't return to zero.

The cursor increases exactly `n` times across the whole snippet, giving `C(n) = n`. The outer loop also runs `n` times. Its inner condition succeeds `n` times in total and fails once per outer iteration: `2n` checks altogether. Counting loop control still gives `Θ(n)` time.

Move the initialization inside:

```text
for end in range(0, n):
    cursor = 0
    while cursor <= end:
        op()
        cursor = cursor + 1
```

Now each outer iteration starts over. The inner counts are `1, 2, ..., n`, totaling `n(n + 1)/2`. The time is `Θ(n²)`. One moved line changed the total work.

This is the counting idea behind many two-pointer algorithms: bound how far each pointer can move over the entire run. You still need a separate correctness argument for when it may move. The [sliding-window example with negative numbers](/blog/sliding-window-negative-numbers/) shows why a linear number of boundary moves can produce the wrong answer when the stopping rule is unsafe.

### Compare the counts at small sizes

These are calls to `op()`, not measured runtimes:

| `n` | Full square, `m = n` | Pairs with a gap | Doubling widths plus two | Persistent cursor | Reset cursor |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 0 | 3 | 1 | 1 |
| 2 | 4 | 0 | 7 | 2 | 3 |
| 4 | 16 | 3 | 13 | 4 | 10 |
| 8 | 64 | 21 | 23 | 8 | 36 |

The doubling count stays at `23` for `n = 9` because no new width is visited. Growth classes allow these steps; `Θ(n)` doesn't require an exact straight line at every input size.

## The body may contain more work than it looks like

```text
for row in range(0, n):
    for column in range(0, n):
        scan_all_m_items()
```

There are exactly `n²` calls to `scan_all_m_items()`. If each call takes `Θ(m)` time, with the same cost bounds across calls, the whole snippet takes `Θ(n²m)` time for positive `n` and `m`. The loop overhead is smaller or of the same order. If `m = n`, the time becomes `Θ(n³)`.

A function call is one line of code, not necessarily one constant-cost operation. Check whether the body scans, copies, sorts, performs expensive arithmetic, or calls another algorithm. If its cost depends on the loop indices, sum those individual costs instead of multiplying by one assumed body cost.

The same caution applies to a logarithmic search. The [binary-search practice guide](/blog/binary-search-practice/) separates the number of comparisons from the assumptions about indexing and comparison cost.

## Try five fresh counts before reading the answers

For each snippet, write the exact number of `op()` calls and the tight running-time class under the unit-cost model. State the inner count for each outer iteration, or explain how much progress survives between iterations. Check `n = 1`; in exercise 1, check `m = 1` too.

### 1. Every third slot

`n` and `m` are independent positive integers.

```text
for packet in range(0, n):
    slot = 1
    while slot < m:
        op()
        slot = slot + 3
```

### 2. A changing range

```text
for band in range(0, n):
    for point in range(band, 2 * band + 3):
        op()
```

### 3. A growing stage with a fixed-size body

```text
stage = 2
while stage <= n:
    for choice in range(0, 5):
        op()
    stage = 2 * stage
```

### 4. Two positions per round

```text
cursor = 0
for round in range(0, n):
    stop = min(n, 2 * round + 2)
    while cursor < stop:
        op()
        cursor = cursor + 1
```

### 5. Change where the reset happens

Take exercise 4 and move `cursor = 0` from before the outer loop to its first line, before the assignment to `stop`. Derive the count separately for even and odd `n`.

## Answers, with the missing step included

### 1. Every third slot

**`n ceil((m - 1)/3)` calls; `Θ(nm)` time.** `ceil` rounds up to an integer. Each inner loop visits `1, 4, 7, ...` below `m`: values of the form `1 + 3t`, with integer `t >= 0` and `t < (m - 1)/3`. There are `ceil((m - 1)/3)` such values. For `m = 8`, that's three calls per packet.

For `m = 1`, there are no calls, but the outer loop still takes `Θ(n)` time. The full cost is `Θ(n(1 + ceil((m - 1)/3)))`, which simplifies to `Θ(nm)` for all positive `m`. Keep the outer-loop cost when the inner body never runs.

### 2. A changing range

**`(n² + 5n)/2` calls; `Θ(n²)` time.** The inner count is `(2 band + 3) - band = band + 3`. Summing from `band = 0` to `n - 1` gives `n(n - 1)/2 + 3n`. At `n = 4`, the counts are `3 + 4 + 5 + 6 = 18`; at `n = 1`, there are three calls.

### 3. A growing stage with a fixed-size body

**`5 floor(log₂ n)` calls; `Θ(1 + log n)` time.** The visited stages are `2¹` through `2^floor(log₂ n)`. There are `floor(log₂ n)` stages, each making five calls. For `n = 1`, the while body never runs; initialization and the failed check take constant time. As `n` grows, the usual shorter notation is `Θ(log n)`.

### 4. Two positions per round

**`n` calls; `Θ(n)` time.** The stops increase until they reach `n`. The cursor advances through `0` to `n - 1` once, then stays at `n`; later rounds do no inner work. At `n = 7`, the per-round counts are `2, 2, 2, 1, 0, 0, 0`. At `n = 1`, the first stop is `1` and there is one call. Include all `n` outer iterations, even after the cursor finishes.

### 5. Change where the reset happens

**`Σ from r = 0 to n - 1 of min(n, 2r + 2)` calls; `Θ(n²)` time.** With a reset, each round repeats the scan up to its stop.

For even `n = 2h`, the first `h` counts are `2, 4, ..., 2h`. The remaining `h` counts are all `2h`:

```text
C(2h) = h(h + 1) + 2h²
      = 3h² + h
```

For odd `n = 2h + 1`, the first `h` counts are `2, 4, ..., 2h`. The remaining `h + 1` counts are all `2h + 1`:

```text
C(2h + 1) = h(h + 1) + (h + 1)(2h + 1)
          = 3h² + 4h + 1
```

At `n = 4`, the count is `2 + 4 + 4 + 4 = 14`; at `n = 5`, it's `2 + 4 + 5 + 5 + 5 = 21`. For `n = 1`, `h = 0`, the first group is empty, and the count is `1`. Both parity formulas have a leading quadratic term, so including loop control gives `Θ(n²)` time.

## Keep the mistake small enough to review

If an answer surprised you, save the reason you missed it. A card saying “nested loops are quadratic” would preserve the wrong shortcut. Give yourself enough code or bounds to reconstruct the argument:

| Card front | Card back |
| --- | --- |
| A cursor starts at `0` once before the outer loop, increases by one, and never exceeds `n`. Can it advance `n` times per outer iteration? | It can advance at most `n` times across the whole run. Count outer-loop overhead separately. |
| Outer widths are `1, 2, 4, ..., p`, with `p <= n < 2p`. What is their total? | `2p - 1`, so `Θ(n)`. Multiplying the stage count by `p` gives a loose upper bound. |
| Two nested loops make `n²` calls. Each call scans `m` items at constant cost per item. What is the total time? | `Θ(n²m)` for positive `n` and `m`. The call's body costs `Θ(m)`. |

The [coding-interview flashcard guide](/blog/how-to-use-flashcards-for-coding-interviews/) covers choosing corrections worth reviewing. After reviewing one, change a bound or move a reset and derive a fresh count on paper. Write the sum or the total pointer movement before writing the complexity label.
