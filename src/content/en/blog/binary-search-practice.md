---
title: "Binary Search Practice: Boundaries, Duplicates, and Off-by-One Errors"
description: "Practice binary search with a lower-bound trace, duplicate values, missing targets, and off-by-one bug diagnoses. Includes explained answers and review cards."
date: "2026-10-04"
image: "/blog/binary-search-practice.png"
keywords:
  - "binary search practice"
  - "binary search lower bound"
  - "binary search duplicates"
  - "binary search off by one"
  - "binary search loop invariant"
---

Search for `6` in `[2, 6, 6, 6, 11, 17]`. The first midpoint lands on a `6`, but returning there would give index `3`. If the task asks for the first occurrence, the answer is index `1`. Finding an equal value hasn't finished the job.

This **binary search practice** uses one implementation throughout: lower bound with a half-open search window. Work through the trace, solve the cases before reading the answers, then diagnose four broken edits. You'll practice explaining each boundary update rather than recalling a loop that looks familiar.

![A gardener holds a wooden measuring stick beside a row of potted saplings arranged from short to tall](/blog/binary-search-practice.png)

## Decide what the function returns

For a sorted sequence of length `n`, lower bound returns the first index whose value is **at least the target**. If every value is smaller, it returns `n`: the position just past the last element.

That position is an insertion point, including when the target is absent. Inserting there puts a new copy before any existing equal values. This is the behavior documented for Python's [bisect_left](https://docs.python.org/3/library/bisect.html#bisect.bisect_left).

All indices here are zero-based. The input must be sorted in **nondecreasing** order, so duplicates are allowed. It must also stay unchanged during the search. The function assumes that contract; it doesn't sort or scan to validate the input. Checking every adjacent pair would take linear work before the search begins.

## Keep one boundary convention

The window `[lo, hi)` includes `lo` and excludes `hi`. Start with `lo = 0` and `hi = n`.

```python
from collections.abc import Sequence


def lower_bound(values: Sequence[int], target: int) -> int:
    """Requires nondecreasing values that stay unchanged during the call."""
    lo: int = 0
    hi: int = len(values)

    while lo < hi:
        mid: int = lo + (hi - lo) // 2
        if values[mid] < target:
            lo = mid + 1
        else:
            hi = mid

    return lo
```

The **binary search loop invariant** describes what is already known:

- `0 <= lo <= hi <= n`.
- Every element before `lo` is smaller than the target.
- Every element from `hi` onward is at least the target.

If `values[mid] < target`, sorted order lets us rule out everything through `mid`, so `lo` becomes `mid + 1`. Otherwise, `mid` already belongs to the known right region; set `hi = mid`. It may still be the answer. Cornell's [binary-search lecture](https://www.cs.cornell.edu/courses/cs2110/2026fa/lectures/lec05/#binary-search) develops this half-open invariant and these updates.

The unclassified elements occupy `[lo, hi)`. The answer boundary satisfies `lo <= answer <= hi`, so it can be `hi`. Setting `hi = mid` excludes that element from further inspection while keeping its position as a possible answer.

At initialization, both known regions are empty. During an iteration, `lo <= mid < hi`, so either update strictly reduces `hi - lo`. At termination, `lo == hi`: all indices before the returned index hold smaller values; all indices at or beyond it hold values at least the target. If the return is `n`, that second region is empty.

## Trace the duplicates before trying another case

Use `[2, 6, 6, 6, 11, 17]` and target `6`. Record the bounds **before** each comparison:

| Step | `lo` | `hi` | `mid` | `values[mid]` | Update |
| --- | --- | --- | --- | --- | --- |
| 1 | `0` | `6` | `3` | `6` | `hi = 3` |
| 2 | `0` | `3` | `1` | `6` | `hi = 1` |
| 3 | `0` | `1` | `0` | `2` | `lo = 1` |

Now `lo == hi == 1`, so return `1`. The two equality comparisons moved the right boundary toward the first copy. Returning on the first equality would have answered a different question: where *some* copy appears.

When tracing by hand, write `lo`, `hi`, `mid`, the compared value, and the next bounds. A list of midpoint values alone can hide a boundary that never moves.

## Solve these six cases without running the code

For each case, give the midpoint indices visited, the returned index, and whether the target is present. Check the partition at the returned index: every value before it must be smaller than the target; every value starting at it must be at least the target. Either region can be empty.

1. `[1, 5, 5, 9, 14]`, target `5`.
2. `[1, 5, 5, 9, 14]`, target `8`.
3. `[1, 5, 5, 9, 14]`, target `20`.
4. `[1, 5, 5, 9, 14]`, target `0`.
5. `[]`, target `12`.
6. `[12]`, target `12`.

### Answers and the boundary each one finds

| Case | Midpoint indices | Return | Present? | Explanation |
| --- | --- | --- | --- | --- |
| 1 | `2 → 1 → 0` | `1` | Yes | Equality narrows left twice; only `1` is smaller than `5` |
| 2 | `2 → 4 → 3` | `3` | No | `1, 5, 5` are smaller than `8`; `9, 14` are at least `8` |
| 3 | `2 → 4` | `5` | No | Every element is smaller than `20`; the right region is empty |
| 4 | `2 → 1 → 0` | `0` | No | No element is smaller than `0`; the whole sequence is on the right |
| 5 | None | `0` | No | The initial window is empty, so no indexing occurs |
| 6 | `0` | `0` | Yes | Equality sets `hi = 0`; the first position is the answer |

Cases 1 and 4 visit the same indices and return different boundaries. The comparison result controls the update; the path of midpoints alone isn't the answer.

### Membership needs one more check

```python
def contains(values: Sequence[int], target: int) -> bool:
    index: int = lower_bound(values, target)
    return index < len(values) and values[index] == target
```

This function requires the same sorted, unchanged input. Python's `and` stops when the range check is false, so the sentinel is never indexed. The equality check rejects insertion points for missing targets, as in case 2. Python's documentation gives the same distinction in its [exact-match lookup recipe](https://docs.python.org/3/library/bisect.html#searching-sorted-lists).

## Catch four boundary bugs with small inputs

Change only the stated line of the original function. Before reading the diagnosis, trace the suggested input and name the failed property: progress, boundary correctness, or the initial invariant.

| Broken edit | Counterexample | What happens |
| --- | --- | --- |
| Replace `lo = mid + 1` with `lo = mid` | `[5]`, target `6` | Bounds stay `[0, 1)` forever; `mid` remains `0` |
| Replace `hi = mid` with `hi = mid - 1` | `[4, 9]`, target `9` | First `mid` is `1`; `hi` becomes `0`, and the function returns `0` instead of `1` |
| Replace `< target` with `<= target` | `[7, 7]`, target `7` | Equality moves `lo` past the copies; return `2` instead of `0` |
| Initialize `hi = len(values) - 1` | `[3]`, target `8` | The loop never runs; return `0` instead of the end position `1` |

The second edit skips a valid answer boundary. The third changes which side owns equality: it finds the first position strictly greater than the target, also called upper bound. That's a different contract. The fourth breaks the initialization: the supposedly known right region already contains `3`, which isn't at least `8`.

Also try `[9, 2, 7]` with target `7` using the unchanged function. It visits indices `1` and `2` and returns `2`, despite an earlier value, `9`, being at least `7`. The partition check fails. This is a violated sorted-input precondition, not a reason to patch the loop.

## Account for the work you actually do

Each iteration cuts the number of unclassified elements to at most half its previous size, giving `O(log n)` element comparisons for nonempty input. CMU's [binary-search notes](https://www.cs.cmu.edu/~15122-archive/s26/handouts/lectures/06-binsearch.pdf) explain the logarithmic bound from halving. With constant-time length, indexing, arithmetic, and comparisons, this loop takes `O(log n)` time. The `Sequence[int]` annotation alone doesn't guarantee those costs for custom sequences.

Only a fixed number of variables are kept, giving `O(1)` extra space under the usual algorithmic model. There is no slicing, copied subarray, or recursion stack. Empty input takes constant time.

Finding an insertion point also doesn't make inserting cheap. Inserting into a Python list can shift later elements and takes `O(n)` time; Python's [bisect performance notes](https://docs.python.org/3/library/bisect.html#performance-notes) separate that cost from the search.

## Save the correction you needed, then solve a fresh problem

Make a card for a mistake you actually made. Include the convention and a small input so the answer has enough context:

| Card front | Card back |
| --- | --- |
| Half-open lower bound: `[5]`, target `6`. Why does `lo = mid` stall? | `mid == lo == 0`; the bounds don't change. Use `lo = mid + 1` to discard the known-smaller element. |
| Lower bound returns `3` for target `8` in `[1, 5, 5, 9, 14]`. Does that prove membership? | No. Index `3` holds `9`. Check the index is in range, then check equality. |
| Lower bound: midpoint equals the target in a sequence with duplicates. Which update preserves the first-copy search? | `hi = mid`. That position may be the boundary; an earlier equal value may still exist. |

Keep these in [Nibomo](/) or your existing review tool. The [coding-interview flashcard guide](/blog/how-to-use-flashcards-for-coding-interviews/) covers choosing what to retain from practice; the [Coding Interview Patterns deck](/catalog/packages/coding-interview-patterns-flashcards/) offers broader pattern questions. Reviewing a correction should lead back to a new trace or implementation attempt.

For that next attempt, close the code and write the function from memory. Sensor readings are `[-6, -1, 3, 3, 8, 12, 20]`. Find how many readings are **strictly below `4`**, without counting them one by one. Then repeat for threshold `21`.

Lower bound gives the count directly: **`4`** and **`7`**. For threshold `4`, the midpoints are `3 → 5 → 4`; for `21`, they're `3 → 5 → 6`. Explain why the returned index counts smaller elements, and why `7` is a valid answer even though it isn't a readable index. That's the boundary reasoning to carry into the next problem.
