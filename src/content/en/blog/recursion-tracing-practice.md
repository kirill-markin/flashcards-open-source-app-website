---
title: "Recursion Tracing Practice: Calls, Returns, and Output"
description: "Trace recursive calls with worked stack-frame tables, printed-output predictions, and practice problems that separate return values from visible output."
date: "2026-10-16"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/88d1c9e546b7ae5e871c335a2529408912cdf356a493b956dd7e410f5d2831b3.webp"
keywords:
  - "recursion tracing practice"
  - "recursive call stack practice"
  - "recursion output questions"
  - "tracing recursive functions"
  - "recursion return values"
---

A recursive call returns `2`. Its caller still has `+ 2` to do, and the caller above that has `+ 4` waiting. If you write down only the arguments on the way down, those unfinished operations are easy to lose.

For **recursion tracing practice**, give each call its own ID and record what it must do after its child returns. Work through the three traces below, then try the six questions on paper before opening an interpreter.

![A woman places the smallest nesting doll into an open shell while the larger shells and their tops wait](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/88d1c9e546b7ae5e871c335a2529408912cdf356a493b956dd7e410f5d2831b3.webp)

## Keep a place for the caller to resume

A *frame* is one invocation's working space: its arguments, local variables, and current place in the function. Python gives each call its own local namespace, as the [Python tutorial on defining functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions) explains. Two calls with the same argument still have separate frames.

A `return` exits the current invocation and passes its value to the caller. A bare `return`, or reaching the end of a function, returns `None`. See the [Python return statement reference](https://docs.python.org/3/reference/simple_stmts.html#the-return-statement). Printing adds text to the output; it doesn't supply that function's return value.

All working snippets here are Python 3 and assume **small nonnegative integer inputs**. They omit input validation so the trace stays visible. The broken examples are marked separately. Don't run a broken call whose arguments move away from its stopping condition.

We'll count **maximum depth** as the largest number of this recursive function's frames alive together, including its base-case frame. The module or surrounding test code doesn't count. **Total calls** counts every invocation, even after it has returned.

## Work one call all the way back

```python
def score(n: int) -> int:
    if n == 0:
        return 2
    child: int = score(n - 1)
    return child + 2 * n
```

Trace `score(3)`. Name its invocations `A`, `B`, `C`, and `D` in the order they start. Each caller pauses at `score(n - 1)`; its assignment to `child` completes only when that call returns.

| Step | Frame (`n`) | Event | Additions still waiting |
| --- | --- | --- | --- |
| 1 | A (`3`) | Call B: `score(2)` | A: `+ 6` |
| 2 | B (`2`) | Call C: `score(1)` | A: `+ 6`; B: `+ 4` |
| 3 | C (`1`) | Call D: `score(0)` | A: `+ 6`; B: `+ 4`; C: `+ 2` |
| 4 | D (`0`) | Return `2` to C | A: `+ 6`; B: `+ 4`; C: `+ 2` |
| 5 | C (`1`) | Set `child = 2`; return `4` to B | A: `+ 6`; B: `+ 4` |
| 6 | B (`2`) | Set `child = 4`; return `8` to A | A: `+ 6` |
| 7 | A (`3`) | Set `child = 8`; return `14` | Nothing |

The answer is **`14`**, with **four calls** and **maximum depth four**. The function prints nothing. Running `print(score(3))` would print `14` because the surrounding `print` receives the returned value.

The base case finishes D. It doesn't finish A, B, or C. Those callers resume in reverse order, each using its own `n`: C still has `n = 1`, even though D had `n = 0`.

When you get stuck, write the pending expression before following the child. For A, that expression is `child + 6`. On return, replace `child` with the received value: `8 + 6`.

## Printed output has its own timeline

```python
def walk(n: int) -> None:
    print("down", n)
    if n == 0:
        return
    walk(n - 1)
    print("up", n)
```

For `walk(2)`, the output is:

```text
down 2
down 1
down 0
up 1
up 2
```

The first `print` runs as each frame starts. The second waits for the recursive child to finish. At `n = 0`, the bare `return` exits before the second `print`, so there is no `up 0`.

Every invocation returns `None`. That value isn't printed by a plain call to `walk(2)`. If you write `print(walk(2))`, the same five lines appear, followed by `None`: the outer `print` waits for the entire call to finish.

Keep an output column beside the frame ledger. Add a line only when execution reaches a `print`. Add a return value to the caller's ledger when execution reaches a `return` or the function ends.

## Two children need separate invocation identities

```python
def fork(n: int) -> int:
    if n == 0:
        return 1
    left: int = fork(n - 1)
    right: int = fork(n - 1)
    return left + right + 1
```

In `fork(2)`, A completes its entire left call before starting its right call. The assignments make that order explicit.

```text
A: fork(2) -> 7
├── B: fork(1) -> 3
│   ├── C: fork(0) -> 1
│   └── D: fork(0) -> 1
└── E: fork(1) -> 3
    ├── F: fork(0) -> 1
    └── G: fork(0) -> 1
```

Calls **start** in order `A, B, C, D, E, F, G`. They **return** in order `C, D, B, F, G, E, A`. B receives `1` from C, then `1` from D, and returns `1 + 1 + 1 = 3`. A later receives `3` from each child and returns `7`.

There are **seven calls**, but **maximum depth is three**. At the deepest point on the first branch, A, B, and C are alive together. C has returned before D starts. B has returned before E starts. Drawing seven nodes doesn't mean seven frames coexist.

Give repeated arguments separate rows: B and E both receive `1`, yet both execute their bodies. For more practice counting executions, try the [nested-loop counting worksheet](/blog/nested-loop-time-complexity/).

## Six questions to try without running them

Each question stands alone. Copy its function and trace the stated call. Record visible output and the final return separately; for counting questions, include the initial and base calls.

### 1. Finish the waiting additions

```python
def bump(n: int) -> int:
    if n == 0:
        return 1
    child: int = bump(n - 1)
    return child + 4
```

For `bump(2)`, give the return, total calls, maximum depth, and output. Write the two pending additions before resolving them.

### 2. Predict both sides of the call

```python
def announce(n: int) -> None:
    print(n)
    if n == 0:
        return
    announce(n - 1)
    print(n + 10)
```

Write every output line for `announce(2)` and give its return value. Would the base invocation print `10`?

### 3. Count calls when a value is used twice

```python
def double_value(n: int) -> int:
    if n == 0:
        return 1
    child: int = double_value(n - 1)
    return child + child
```

For `double_value(3)`, give the return, total calls, and maximum depth. Then replace the last two lines with `return double_value(n - 1) + double_value(n - 1)`. Give the new call count and explain whether the return changes.

### 4. Find the dropped return

This function is intentionally broken. Its `int` return annotation states the intended contract: return `5` for every permitted input.

```python
def badge(n: int) -> int:
    if n == 0:
        return 5
    badge(n - 1)
```

What do `badge(0)` and `badge(2)` actually return? Repair one line so the child value reaches the original caller. Does changing the recursive line to `print(badge(n - 1))` repair the contract?

### 5. Check that the base case is reachable

This intentionally broken function should count complete pairs in `n` items, with `n` a nonnegative integer:

```python
def pairs(n: int) -> int:
    if n == 0:
        return 0
    return pairs(n - 2) + 1
```

Trace `pairs(4)` by hand. For `pairs(3)`, write the first four arguments only; **don't execute it**. Change the stopping condition so both calls meet the stated contract.

### 6. Separate inner prints from the outer print

```python
def receipt(n: int) -> int:
    if n == 0:
        return 2
    child: int = receipt(n - 1)
    print(child)
    return child + 3
```

Write the output of `print(receipt(2))`. Which lines come from inside `receipt`, and which one comes from the outer `print`?

## Check the reason, not just the answer

1. **`bump(2)` returns `9`; three calls, depth three, no output.** The pending work is `bump(1) + 4`, with another `+ 4` waiting inside `bump(1)`. The base returns `1`, so the returning values are `1 → 5 → 9`.

2. **`announce(2)` returns `None` and prints these five lines:**

   ```text
   2
   1
   0
   11
   12
   ```

   The base prints `0` and exits before the final statement. There is no `10` line. The waiting callers resume with their original `n` values.

3. **`double_value(3)` returns `8`, with four calls and depth four.** The returning values are `1 → 2 → 4 → 8`. Adding `child` twice reuses one computed value.

   After the replacement, the return remains `8`, but each non-base invocation starts two children. The four levels contain `1`, `2`, `4`, and `8` calls: **15 calls in total**, still with maximum depth four. Both versions print nothing.

4. **`badge(0)` returns `5`; `badge(2)` returns `None`.** The base returns `5` to the `n = 1` caller, which discards it and reaches the end. The `n = 2` caller then discards that `None` and also reaches the end.

   Replace `badge(n - 1)` with `return badge(n - 1)`. Changing it to `print(badge(n - 1))` would print `5`, then `None`, for `badge(2)`, and still return `None`.

5. **`pairs(4)` returns `2`: arguments `4 → 2 → 0`, values `0 → 1 → 2`.** Starting at `3` gives `3 → 1 → -1 → -3`; subtracting two from an odd integer never reaches zero.

   Change the condition to `if n <= 1:`. Zero or one item contains zero complete pairs, so the repaired `pairs(3)` returns `1`; `pairs(4)` still returns `2`. A decreasing argument must also reach a stopping case.

6. **`print(receipt(2))` produces these three lines:**

   ```text
   2
   5
   8
   ```

   Inside `receipt`, the `n = 1` frame receives `2`, prints it, and returns `5`. The `n = 2` frame receives `5`, prints it, and returns `8`. Only then does the outer `print` print `8`. Calling `receipt(2)` on its own prints the first two lines and returns `8`.

If a result differs from yours, find the first ledger row where the two traces disagree. Repeating only the final number won't reveal whether you lost a return, skipped a pending statement, or counted a reused value as another call. The [Boston University recursion tracing lab](https://www.cs.bu.edu/courses/cs112/old/18spring/labs/lab4.html) offers more call-and-return exercises once these examples feel manageable.

## Reuse this blank trace sheet

Write the input domain and base condition above the table. Give every new invocation a new ID, even when its argument matches an earlier call. Record each call, print, or return as a separate event; include the printed text or the returned value and its recipient. Add rows as needed.

| Step | Frame (argument) | Event | Work still waiting | Active frame IDs after event |
| --- | --- | --- | --- | --- |
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |
| 6 | | | | |

Start with the initial invocation's entry so it counts toward calls and depth. On a child-call event, add the child to the active list; on a return, remove the returning frame. Below the table, record **total calls**, **maximum depth**, **final return**, and **output lines**.

For a fresh attempt, use `score(2)`, `walk(3)`, or `fork(1)` and hide the worked examples. After tracing, check the waiting work on every returning frame before checking your final answer.

## Save a repair card after a mistake

Choose a card only if it addresses an error you made. The [guide to making better flashcards](/blog/how-to-make-better-flashcards/) covers keeping each prompt narrow enough to answer from memory.

| Front | Back |
| --- | --- |
| A caller executes `child = f(n - 1)`, then `return child + 4`. Its child returns `5`. What happens next? | The caller stores `5`, resumes at the next statement, and returns `9`. Its own frame still has work to do. |
| A recursive function calls `f(n - 1)` as a bare statement. Does the child's return automatically become the caller's return? | No. To forward that value, use `return f(n - 1)`. A caller that reaches its end returns `None`. |
| A recursive function subtracts two until `n == 0`. Why is input `3` a problem? | Its arguments stay odd: `3, 1, -1, ...`. Zero is unreachable. The base condition must cover the intended domain; a complete-pairs count can stop at `n <= 1`. |

After reviewing a card, change a small input and trace again. The next attempt should require you to recover the reasoning, including where each caller resumes.

*This worksheet and its original practice examples were developed with substantial AI assistance. An AI coding agent checked the worked examples and safe exercise variants by running isolated snippets with Python 3.12.14 on macOS on October 16, 2026. Those checks covered return values, output, call order, call counts, and depth; they weren't a study of learning outcomes. The broken `pairs(3)` call was traced without executing it.*
