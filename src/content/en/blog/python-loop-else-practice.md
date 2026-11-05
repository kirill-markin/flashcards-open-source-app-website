---
title: "Python for/else and while/else Practice: 8 Output Exercises"
description: "Predict Python loop-else output with eight runnable exercises and explained answers. Trace break, continue, empty input, nested loops, returns, and exceptions."
date: "2026-11-05"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/daeb7034e2f50a30a09bf36edd2244453fd3c74a3972fba041a953ad152ce39a.webp"
keywords:
  - "Python for else practice"
  - "Python while else"
  - "break continue nested loops"
  - "Python loop else output"
  - "Python for else not found"
---

A Python search can check its last item and still skip the loop's `else`. An empty search can run that `else` without checking anything. To explain either result, follow how the loop ends.

**A `for` loop runs its `else` when its iterator runs out of items. A `while` loop runs its `else` when its condition tests false.** An executed `break` skips the `else` of the loop it exits. Leaving through `return` or an exception also skips it. `continue` skips the rest of one iteration, then requests the next item or rechecks the condition.

These eight output exercises cover both `for/else` and `while/else`, ending with a repair for a misplaced not-found message. Each Python block is a complete, separate program; all outputs were checked with CPython 3.14.7. Write your prediction before scrolling to the answer, then compare both the printed lines and the reason each loop ended.

![A theater volunteer finds a rust-red scarf on the last seat beside the aisle](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/daeb7034e2f50a30a09bf36edd2244453fd3c74a3972fba041a953ad152ce39a.webp)

## Keep an exit-path ledger

Use a small table as you trace: **which loop, how it ends, whether its `else` runs**. “Inner loop for target 7 | `break` | skipped” is enough for one row. A nested program may need several rows because the same inner loop runs more than once.

Use these rules to fill it in:

| Event for the loop being traced | Does its `else` run? | Where control goes |
| --- | --- | --- |
| A `for` iterator has no next item, including on the first request | Yes | Into `else`, then after the loop |
| A `while` condition tests false, including on the first check | Yes | Into `else`, then after the loop |
| An executed `break` exits this loop | No | After this loop's `else` |
| An executed `continue` | Not decided yet | Request the next item or recheck the condition |
| A `return` leaves the enclosing function | No | To the caller |
| An exception escapes this loop | No | To a matching handler outside it, or farther up the call stack |

Here, **exhaustion** means that the iterator has no next item. It can happen before the body runs at all. For `while`, a false first condition check also leads straight to `else`. These are normal completion paths, as defined in the [Python language reference's `while` and `for` rules](https://docs.python.org/3.14/reference/compound_stmts.html#the-while-statement).

“No break” is a useful reminder, but it misses `return` and exceptions that escape the loop. The [Python tutorial's loop-`else` section](https://docs.python.org/3.14/tutorial/controlflow.html#else-clauses-on-loops) makes that distinction too. The exercises use ordinary synchronous loops, with no `finally` that changes an exit.

## 1. Empty input still reaches `else`

Start with an empty list. Predict whether anything inside the loop body prints, and whether `not found` prints.

```python
numbers: list[int] = []
for number in numbers:
    print("checking", number)
    if number == 7:
        print("found")
        break
else:
    print("not found")
print("after search")
```

**Output:**

```text
not found
after search
```

The iterator has no first item. The body never runs, so neither `checking` nor `found` is printed. The loop reaches exhaustion immediately and enters `else`.

The `else` aligns with `for`, so it belongs to the whole search. Here, “not found” includes an empty input. Entering loop `else` doesn't mean the body ran at least once.

## 2. A break on the last item still counts

Both searches below visit every item in the list. Predict which one prints `not found`.

```python
for target in [7, 8]:
    print("target", target)
    for number in [4, 7]:
        print("checking", number)
        if number == target:
            print("found", number)
            break
    else:
        print("not found")
    print("after search")
```

**Output:**

```text
target 7
checking 4
checking 7
found 7
after search
target 8
checking 4
checking 7
not found
after search
```

For target `7`, the body reaches `break` on the last item. It exits before the loop requests another item and discovers exhaustion. For target `8`, neither iteration executes `break`; the next request finds no item, and the inner `else` runs.

| Search | Last body event | Inner loop exit | Inner `else` |
| --- | --- | --- | --- |
| Target `7` | Print `found 7`, then `break` | `break` | Skipped |
| Target `8` | Compare `7` with `8` | Iterator exhausted on the next request | Runs |

Both searches checked `4` and `7`, but only the second requested another item and reached exhaustion. Record that final event in the ledger. The outer loop simply runs the two searches; the `else` belongs to the inner loop.

## 3. `continue` can lead straight to `else`

Every iteration below reaches `continue`, including the final one.

```python
for number in [2, 4]:
    if number % 2 == 0:
        print("skip", number)
        continue
    print("odd", number)
else:
    print("finished")
print("after loop")
```

**Output:**

```text
skip 2
skip 4
finished
after loop
```

The first `continue` skips `print("odd", number)` and requests the next item. The second does the same, but there is no next item. Exhaustion then takes execution into `else`.

Every item reached `continue`, but none caused the loop to exit early. The skipped lines are inside the body; `else` is outside it and remains reachable when the iterator runs out.

If a `for` body unexpectedly runs zero times because its iterator was consumed earlier, the same exhaustion rule applies. The [iterator-exhaustion worksheet](/blog/python-iterator-exhaustion/) traces where those values went.

## 4. Trace the condition in `while/else`

This countdown has three inputs. Track the condition check separately from the `break` check.

```python
def countdown(remaining: int) -> None:
    print("start", remaining)
    while remaining > 0:
        print("remaining", remaining)
        if remaining == 2:
            print("stop early")
            break
        remaining -= 1
    else:
        print("condition false")
    print("after countdown")

countdown(0)
countdown(1)
countdown(3)
```

**Output:**

```text
start 0
condition false
after countdown
start 1
remaining 1
condition false
after countdown
start 3
remaining 3
remaining 2
stop early
after countdown
```

For `0`, the first condition check is false. Python enters `else` without entering the body. For `1`, the body decrements `remaining` to `0`; the next condition check is false, so `else` runs.

For `3`, the first iteration decrements `remaining` to `2`. The condition is still true, so the next iteration starts and executes `break`. The condition never tests false, and `else` is skipped.

When adding `continue` to a `while` loop, trace the next condition check too. If you skip the statement that changes the condition's inputs, the loop may keep repeating and never reach either its `else` or the code after it.

## 5. An inner break leaves the outer `else` available

There are two `else` clauses here. Identify the loop each one belongs to before predicting the output.

```python
rows: list[list[int]] = [[0, 7], [2, 3]]
for row_index, row in enumerate(rows):
    for number in row:
        if number == 7:
            print("found in row", row_index)
            break
    else:
        print("missing from row", row_index)
else:
    print("all rows visited")
print("after grid")
```

**Output:**

```text
found in row 0
missing from row 1
all rows visited
after grid
```

The first row's inner loop breaks when it finds `7`. That skips the inner `else` for row `0`. Control then reaches the end of the outer body and moves to row `1`.

The second row contains no `7`, so its inner loop exhausts and prints `missing from row 1`. After both rows, the outer iterator exhausts. Its `else` prints `all rows visited` even though an inner loop executed `break` earlier.

| Loop run | Exit event | Its `else` |
| --- | --- | --- |
| Inner loop for row `0` | `break` | Skipped |
| Inner loop for row `1` | Exhaustion | Runs |
| Outer loop over `rows` | Exhaustion | Runs |

The outer message reports that all rows were visited. Changing it to `not found anywhere` would introduce a bug: this outer loop finishes even when an inner search finds `7`. A `break` exits only the innermost loop containing it. One way to stop the whole search is to put both loops in a function and return the match, as the next exercise illustrates for a single loop.

## 6. Returning skips the loop's `else`

Trace both calls. The function returns an integer when it finds a positive number, or `None` when the search completes without one.

```python
def first_positive(numbers: list[int]) -> int | None:
    for number in numbers:
        print("checking", number)
        if number > 0:
            return number
    else:
        print("no positive number")
    return None

print("result", first_positive([0, 3]))
print("result", first_positive([0, -1]))
```

**Output:**

```text
checking 0
checking 3
result 3
checking 0
checking -1
no positive number
result None
```

The first call reaches `return number` with `number` equal to `3`. That leaves the whole function, skipping both the loop's `else` and the final `return None`. The loop contains no `break`, yet its `else` still doesn't run.

The second call exhausts its list iterator, enters `else`, then reaches `return None`. The caller's `print` runs after the function has finished, which is why each `result` follows that call's tracing lines.

For this function, the no-match print could also go after the loop without an `else`: a successful return already leaves the function. Use loop `else` when it makes the completion path clearer; it isn't required for every search.

## 7. Catching an exception outside doesn't resume the loop

Trace where execution goes after `int("bad")` fails. Include the statements after the loop and after the exception handler in your prediction.

```python
try:
    for text in ["4", "bad", "7"]:
        print("reading", text)
        number = int(text)
        print("number", number)
    else:
        print("all converted")
    print("after loop")
except ValueError:
    print("caught ValueError")
print("after handler")
```

**Output:**

```text
reading 4
number 4
reading bad
caught ValueError
after handler
```

`int("bad")` raises `ValueError`. The error leaves the loop and the `try` body, so execution skips `all converted`, `after loop`, and the remaining input `"7"`. The matching handler prints its message, then execution continues after the whole `try` statement.

Catching the error outside the loop doesn't resume the loop. The position of the handler matters: an error caught inside the body can allow later iterations and eventual exhaustion. In this program, the handler sits outside, so the loop has already been left.

This is a loop `else`, attached to `for` inside `try`. A `try` statement can also have its own `else`, with different entry rules. The [try/except/finally worksheet](/blog/python-try-except-finally-practice/) separates that case and explains how cleanup can affect pending returns and exceptions.

## 8. Repair a misplaced `else`

A not-found message should describe the whole search. This faulty function prints it too soon, once for each nonmatching item. The repaired version changes only the indentation of `else` and its body.

Before reading the output, trace both functions for targets `7` and `8`. In each case, count the result messages and identify whether `else` belongs to `if` or `for`.

```python
def faulty_search(numbers: list[int], target: int) -> None:
    for number in numbers:
        if number == target:
            print("found", number)
            break
        else:
            print("not found")

def repaired_search(numbers: list[int], target: int) -> None:
    for number in numbers:
        if number == target:
            print("found", number)
            break
    else:
        print("not found")

for target in [7, 8]:
    print("faulty target", target)
    faulty_search([4, 7], target)
    print("repaired target", target)
    repaired_search([4, 7], target)
```

**Output:**

```text
faulty target 7
not found
found 7
repaired target 7
found 7
faulty target 8
not found
not found
repaired target 8
not found
```

In `faulty_search`, the `else` belongs to `if`. It prints a failure for each item that doesn't match. That produces a false failure before a later success for target `7`, and two failure messages for target `8`. On empty input it would print nothing, because the body never runs.

The repair moves `else` to the same indentation as `for`. The existing `break` now suppresses that loop `else` when a match is found. If the search exhausts instead, it prints `not found` once, including for empty input.

The repair needs both the loop-level `else` and the existing `break`. Indentation makes `not found` a completion message; `break` prevents that message after a success. Without `break`, finding a match would still allow the loop to exhaust and print `not found` afterward.

## Use three inputs to check a not-found repair

For your own search code, check an empty input, a match on the last item, and no match. The empty input catches a message placed inside the body. The last-item match catches the assumption that visiting every item always leads to `else`. The no-match input checks that the failure message prints once.

If a result is still surprising, follow the indentation from `else` to its owning statement, then write the exit event for that loop. With nested loops, trace the inner and outer exits separately. With a `return` or exception, follow control out of the loop instead of jumping to its next statement.

For later review, save one program you misread with its output and ledger. Predict it again before uncovering the answer, then explain what changed your prediction. Regular recall and spaced review can help you retain the distinction; keep writing fresh code too. Paper works. If you prefer Nibomo for your own prompts, the [getting-started guide](/docs/getting-started/) covers setup. All eight programs and answers are available on this page.

*Production note: AI tools substantially drafted and edited this worksheet and generated its illustration. Its eight complete programs were executed in separate CPython 3.14.7 processes on macOS 26.6.1 ARM64, and the displayed outputs were checked against those runs. These are small synchronous control-flow examples; they don't test asynchronous loops or exits modified by `finally`. Nibomo is Kirill Markin's product, and this article is published on its marketing site.*
