---
title: "Memoization Practice With a Blocked Grid"
description: "Practice memoization on a 4×4 grid with obstacles. Trace cache hits and zero results, choose a cache key, and check your answers in Python."
date: "2026-11-23"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/80600f94c5a38c1dc53984afe114623ad4e8c053a0df2838d36867992dcd4619.webp"
keywords:
  - "memoization practice"
  - "memoization cache hit"
  - "grid paths with obstacles"
  - "Python functools.cache"
  - "cache key"
---

Go down then right on the grid below, or right then down. Both routes land on `(1, 1)`, where the two exits are blocked. The first time you get there, you work out that there are zero ways to finish. The second time, you can get that `0` from the cache.

Try tracing the calls on paper and marking which ones reuse a stored answer. Then run the Python example to check your count.

![Two tiled walkways meet at a closed swimming pool gate where an attendant stands](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/80600f94c5a38c1dc53984afe114623ad4e8c053a0df2838d36867992dcd4619.webp)

## Set up the path count

Start at `S` and move down (`D`) or right (`R`) until you reach `G`. Rows and columns start at `0`. A dot marks an open square, and `#` marks a block.

```text
          column
          0 1 2 3
row   0   S . . .
      1   . . # .
      2   . # . .
      3   . . . G
```

`paths(row, col)` counts the ways to finish from the given square. Return `0` for a block or a position beyond the board. Return `1` at the goal because you've completed a route with zero moves left. On any other square, add the counts from the square below and the square to the right. For this trace, finish the down call first.

On a fixed board, every route that reaches a square has the same options from there. The row and column are enough to identify the subproblem. Memoization saves the result when a call returns so the next call with the same arguments can reuse it. This is top-down dynamic programming. The call at `(0, 0)` starts with the full problem and solves smaller ones as it reaches them.

## Trace the return to `(1, 1)`

Start with an empty cache. Number each call as you reach it, beginning with `paths(0, 0)`. Mark a miss when you run the function body and write down the result once the call returns. On a hit, reuse the stored value and skip the body. If you lose track of which call resumes after a return, revisit the [worked recursion traces](/blog/recursion-tracing-practice/).

Fill in the gaps between these checkpoints on paper.

| Attempt | Position | Called from | Cache | Value on return |
| --- | --- | --- | --- | --- |
| 1 | `(0, 0)` | Start | Miss | `2` |
| 10 | `(3, 3)` | `(3, 2)` | Miss | `1` |
| 11 | `(2, 1)` | `(2, 0)` | Miss | `0` |
| 12 | `(1, 1)` | `(1, 0)` | Miss | `0` |
| 13 | `(2, 1)` | `(1, 1)` | Hit | `0` |
| 14 | `(1, 2)` | `(1, 1)` | Miss | `0` |
| 15 | `(0, 1)` | `(0, 0)` | Miss | `1` |
| 16 | `(1, 1)` | `(0, 1)` | Hit | `0` |
| 18 | `(1, 2)` | `(0, 2)` | Hit | `0` |
| 22 | `(3, 3)` | `(2, 3)` | Hit | `1` |

Attempt 12 finishes after both exits yield `0`. It gets the first zero from the cache, since attempt 11 already visited the block at `(2, 1)`. When attempt 16 reaches `(1, 1)` again, it gets the stored `0` in one lookup. The starting call adds `1` from each branch. The two routes are `DDDRRR` and `RRRDDD`.

## Check the trace in Python

Run this script in Python 3.9 or later. Every call to `show_paths` creates a fresh cached function for that board. Inside it, `@cache` looks up results by the arguments `row` and `col` and stores any returned count, including `0`. See the [Python documentation for `functools.cache`](https://docs.python.org/3/library/functools.html#functools.cache).

```python
from functools import cache


def show_paths(blocked: frozenset[tuple[int, int]]) -> None:
    @cache
    def paths(row: int, col: int) -> int:
        if row == 4 or col == 4 or (row, col) in blocked:
            return 0
        if (row, col) == (3, 3):
            return 1

        down: int = paths(row + 1, col)
        right: int = paths(row, col + 1)
        return down + right

    print(paths(0, 0))
    print(paths.cache_info())


show_paths(frozenset({(1, 2), (2, 1)}))
```

```text
2
CacheInfo(hits=4, misses=21, maxsize=None, currsize=21)
```

The trace has 25 call attempts. The 21 misses are the ones that run the body. They include the call to `paths(4, 0)`, which steps below the board and stores `0`.

If you implement the cache with a dictionary, give each board an empty `memo` at the start. Check for the key before computing the count.

```python
key = (row, col)
if key in memo:
    return memo[key]
```

On a miss, compute `total`, assign `memo[key] = total`, and return it. Store base-case results too, including `0` for a block and `1` for the goal.

## Five predictions to try on paper

Start each question from the original board, with blocks at `(1, 2)` and `(2, 1)`.

1. **Call the start again.** Duplicate the two `print` lines inside `show_paths`. What does the second `paths(0, 0)` return, and which cache counter changes?
2. **Open one square.** Remove the block at `(1, 2)` and keep `(2, 1)` blocked. How many routes can finish from `(1, 1)` now? Predict the total from `(0, 0)`, then run `show_paths(frozenset({(2, 1)}))` to check the total and see the new cache counts.
3. **Use only `row` as the key.** Compare the true counts from `(1, 0)` and `(1, 1)`. What goes wrong if both squares use the same cache key?
4. **Edit the board with the cache still in use.** Suppose `blocked` is a mutable `set`. After the first `paths(0, 0)` returns, remove `(1, 2)` from that set and call the same cached function again. What does it return, and how would you get the updated count?
5. **Look up a stored zero.** The dictionary is `{(1, 1): 0}` and `key = (1, 1)`. Does `if memo.get(key)` take the hit branch? Write a check that does.

## Worked answers

1. The second call returns **2** from the entry for `(0, 0)`. It skips both child calls. The totals become **5 hits and 21 misses**.
2. From `(1, 1)`, the down move is still blocked. Moving right gets you to `(1, 2)`, where two downs and one right can go in any order. That gives **3** routes from `(1, 1)`. From the start, three routes reach the newly opened square (`DRR`, `RDR`, `RRD`), and each can continue in three ways. Adding those nine routes to the original two gives **11**. A fresh run has **7 hits and 22 misses**.
3. `(1, 0)` has **1** route, with two downs followed by three rights. `(1, 1)` has **0** because both exits are blocked. Using `row` gives both squares the key `1`, so a hit can pick up the other square's count. The pair `(row, col)` gives each square its own entry.
4. The same helper returns **2** because the cached result for `(0, 0)` still holds the old count. Run `paths.cache_clear()` after the edit and call `paths(0, 0)` again to get **11**. You can also create a fresh helper for the edited board, as `show_paths` does for each call.
5. `memo.get(key)` returns `0`, which Python treats as false. Use `if key in memo`, then return `memo[key]`. On the original board, the truthiness check reuses only the goal's `1`. The path count stays **2**, with **1 hit and 26 misses**.

Tomorrow, cover the trace and explain why the second call to `(1, 1)` returns `0` in one lookup. A few days later, redraw the board from the prompt and try to reconstruct the base cases and cache key from memory.

For another round, try writing a recurrence for the obstacle-free Unique Paths prompt before flipping the card to see its binomial solution. For Climbing Stairs, work out how many ways finish with a one-step move and how many finish with a two-step move. Both cards are in the English [Blind 75 Python solutions deck](/catalog/packages/blind-75-python-solutions/).

*Nibomo produced this worksheet with AI assistance and verified the example outputs by running Python.*
