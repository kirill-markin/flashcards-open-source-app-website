---
title: "Python try/except/finally Practice: Trace Returns and Exceptions"
description: "Predict Python try, except, else, and finally output with checked exercises. Trace pending returns, propagated exceptions, and Python 3.14 SyntaxWarning."
date: "2026-10-31"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/0527ef0bf6af55ac61fe5759a5074ef1ba4f455904b1a027324b177130858338.webp"
keywords:
  - "Python try except finally practice"
  - "Python finally return"
  - "try else finally output"
  - "return in finally SyntaxWarning"
  - "exceptions in else"
---

`return 7` can start leaving a Python function while that function still has work to do. Its `finally` block runs before the caller receives the result. Reassigning a local variable there can leave the result unchanged; mutating a returned list can change what the caller sees. A second `return` can even hide an exception.

This **Python try/except/finally practice** worksheet separates those cases with ten complete programs: two worked inputs, seven output predictions, and one repair. Each program stands alone. Write your prediction before reading its answer, including whether the caller receives a result or catches an exception.

![A cook adds a final herb to a bowl held by a server before carrying it away](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/0527ef0bf6af55ac61fe5759a5074ef1ba4f455904b1a027324b177130858338.webp)

## Keep events separate from the pending outcome

Use a chronological ledger with two parts:

1. **Events:** what has already happened, including printed lines and changes to objects.
2. **Pending outcome:** what should happen next—continue normally, return a particular object, or propagate an exception to surrounding code.

“Pending outcome” is a tracing aid, not a Python variable. At `return expression`, evaluate the expression first. If it raises an exception, there is no result ready to return. If it succeeds, record the selected object before following execution into `finally`.

When `finally` finishes normally, the waiting outcome resumes. An executed `return` in `finally` replaces it. Cleanup can also raise an exception of its own; that exception propagates instead, with an earlier saved exception as its context. These are the [language reference's cleanup rules](https://docs.python.org/3.14/reference/compound_stmts.html#finally-clause). Replacing an outcome doesn't undo earlier events: a printed line stays printed, and an appended item stays appended.

Keep `else` separate. It runs when the `try` body reaches its end without an exception or an early exit such as `return`. Handling an exception doesn't send execution into `else`, and an exception raised inside `else` isn't caught by the preceding handlers. See the [reference for the full `try` statement](https://docs.python.org/3.14/reference/compound_stmts.html#the-try-statement).

The examples below use ordinary synchronous functions. They don't cover generators, asynchronous code, or exception groups. “Cleanup runs on the way out” describes Python control flow here; it doesn't guarantee that `finally` runs through a crash or forced process termination.

## Work through two inputs

Start with a successful conversion. This is a complete program:

```python
def read_number(text: str) -> int:
    try:
        number = int(text)
        print("try", number)
    except ValueError:
        print("except")
        return -1
    else:
        print("else")
        return number + 1
    finally:
        print("finally")
print("result", read_number("4"))
```

Standard output:

```text
try 4
else
finally
result 5
```

| Event | Printed now | Pending outcome |
| --- | --- | --- |
| Convert `"4"`, then print in `try` | `try 4` | Continue normally |
| Reach the end of `try`; enter `else` | `else` | Continue normally |
| Evaluate `number + 1` for `return` | Nothing | Return `5` |
| Execute `finally` | `finally` | Return `5` |
| Deliver the result to the caller's `print` | `result 5` | Call finished |

The outer `print` needs the function's result before it can print its line. That is why `finally` appears before `result 5`.

Now run the same function with invalid input:

```python
def read_number(text: str) -> int:
    try:
        number = int(text)
        print("try", number)
    except ValueError:
        print("except")
        return -1
    else:
        print("else")
        return number + 1
    finally:
        print("finally")
print("result", read_number("bad"))
```

Standard output:

```text
except
finally
result -1
```

This time, the ledger follows a different path:

| Event | Printed now | Pending outcome |
| --- | --- | --- |
| Evaluate `int("bad")`; it raises `ValueError` | Nothing | Find a matching handler |
| Enter `except ValueError` | `except` | Continue through the handler |
| Evaluate `return -1` | Nothing | Return `-1` |
| Execute `finally` | `finally` | Return `-1` |
| Deliver the result to the caller's `print` | `result -1` | Call finished |

There is no `try` print because conversion failed first. There is no `else` event because the `try` body raised an exception, even though the handler dealt with it.

The `-1` is an intentional demonstration result. In application code, give invalid input an explicit contract: a documented result or a specific error. These exercises use small artificial functions to expose control flow, rather than prescribe an error-handling policy.

## 1. Does a return enter `else`?

Predict every printed line. No exception occurs here.

```python
def choose() -> int:
    try:
        print("try")
        return 7
    except ValueError:
        print("except")
        return -1
    else:
        print("else")
        return 8
    finally:
        print("finally")
print("result", choose())
```

**Answer—standard output:**

```text
try
finally
result 7
```

The ledger is: print `try` → select return `7` → print `finally` → deliver `7`. Reaching `return` exits the `try` body early, so `else` is skipped. “No exception” alone doesn't establish that `else` runs; check how control leaves `try`.

The unused `ValueError` handler keeps the full structure visible. This function has no conversion or other operation that calls for that handler in real code.

## 2. What if the handler catches a different error?

Evaluate the expression after `return` before writing down a return value.

```python
def divide() -> float:
    try:
        print("try")
        return 8 / 0
    except ValueError:
        print("except")
        return -1.0
    finally:
        print("finally")
try:
    print("result", divide())
except ZeroDivisionError:
    print("caller caught ZeroDivisionError")
```

**Answer—standard output:**

```text
try
finally
caller caught ZeroDivisionError
```

`8 / 0` raises `ZeroDivisionError` before a result can be selected. The inner handler catches `ValueError`, so it doesn't match. On entry to `finally`, the pending outcome is propagation of `ZeroDivisionError`.

`finally` prints and finishes normally. The error then reaches the caller's matching handler. The caller's `print("result", ...)` never prints: evaluating its function-call argument failed.

The exception is unhandled inside `divide`, but handled by the outer program. There is no traceback or other standard-error output in this run.

## 3. Can the earlier `except` catch an error from `else`?

The exception type matches the inner handler. Check where it is raised.

```python
def convert() -> int:
    try:
        print("try")
        number = int("4")
    except ValueError:
        print("inner except")
        return -1
    else:
        print("else")
        raise ValueError("outside the try suite")
    finally:
        print("finally")
try:
    print("result", convert())
except ValueError:
    print("caller caught ValueError")
```

**Answer—standard output:**

```text
try
else
finally
caller caught ValueError
```

Conversion succeeds and execution enters `else`. The explicit `raise` then selects an exception to propagate. The preceding `except ValueError` handles errors from the `try` body; it doesn't cover its sibling `else` clause. After `finally` prints, the outer handler catches the error.

That boundary is useful in application code. Put only the operation whose errors you intend to handle inside `try`. Work in `else` can fail without being mistaken for a failure of that protected operation.

## 4. Does rebinding change a pending return?

Record the selected object before following the assignment in `finally`.

```python
def pick() -> int:
    number = 7
    try:
        return number
    finally:
        number = 99
        print("finally", number)
print("result", pick())
```

**Answer—standard output:**

```text
finally 99
result 7
```

The [return statement evaluates its expression before leaving](https://docs.python.org/3.14/reference/simple_stmts.html#the-return-statement). At `return number`, the selected object is the integer `7`. Assigning `99` binds the local name `number` to a different integer. It doesn't reevaluate the earlier return expression.

| Event | Local binding | Pending outcome |
| --- | --- | --- |
| Evaluate `return number` | `number → 7` | Return `7` |
| Assign `number = 99` | `number → 99` | Return `7` |
| Print inside `finally` | `number → 99` | Return `7` |

`finally` finishes normally, so the caller receives the selected result, `7`.

## 5. What if cleanup changes the returned object?

This time the return expression selects a mutable list.

```python
def collect() -> list[str]:
    items: list[str] = ["draft"]
    try:
        return items
    finally:
        items.append("checked")
print(collect())
```

**Answer—standard output:**

```text
['draft', 'checked']
```

Call the list `L` in your ledger. `return items` selects `L`, currently containing `['draft']`. The append changes that same `L` to `['draft', 'checked']`. The pending outcome still says “return `L`,” and the caller receives the changed list.

Selecting a return object doesn't freeze or copy it. Question 4 rebinds a name; this program mutates the selected object. The [shallow-versus-deep-copy worksheet](/blog/python-shallow-vs-deep-copy-practice/) gives more practice tracing names, shared objects, and changes to their contents.

This mutation is here to make the timing visible. When reading real cleanup code, inspect its effects on the returned object as well as its printed output.

## 6. Which return wins?

The next two programs deliberately use faulty cleanup. Predict standard output separately from compiler diagnostics; returning from `finally` is a pattern to remove from application code.

```python
def pick() -> int:
    try:
        return 7
    finally:
        return 99
print("result", pick())
```

**Answer—standard output:**

```text
result 99
```

The ledger first records a pending return of `7`. The return inside `finally` replaces it with `99`, so the caller receives `99`.

Compiling this source with CPython 3.14.7 produced this warning message on **standard error**:

```text
SyntaxWarning: 'return' in a 'finally' block
```

The captured diagnostic also named the source file, line 5, and the line `return 99`. File locations depend on where you save the snippet. The warning isn't a line printed by the function.

[PEP 765](https://peps.python.org/pep-0765/) specifies CPython 3.14's compile-time warning for control flow that exits a `finally` block, including this return. The checked run used `-Walways` and still compiled and executed. The warning doesn't repair the code or make Python ignore its second return. Because the warning occurs during compilation, executing already compiled code needn't show it again.

## 7. Can cleanup turn a failure into a result?

Keep the exception in the pending-outcome column until you see what `finally` does.

```python
def divide() -> float:
    try:
        return 8 / 0
    finally:
        return 99.0
print("result", divide())
```

**Answer—standard output:**

```text
result 99.0
```

The division raises `ZeroDivisionError`. While that exception is waiting to propagate, `finally` returns `99.0`, discarding the saved exception. The caller receives an ordinary result. There is no `ZeroDivisionError` traceback.

| Event | Pending outcome |
| --- | --- |
| Evaluate `8 / 0` | Propagate `ZeroDivisionError` |
| Execute `return 99.0` in `finally` | Return `99.0`; discard the saved exception |
| Resume the caller | Print `result 99.0` |

Compilation again produced `SyntaxWarning: 'return' in a 'finally' block` on standard error, with line 5 and `return 99.0` in the diagnostic. The compile-time warning and runtime exception suppression are separate facts. This program warned about the source, then executed code that hid the division failure.

## Repair the cleanup without hiding the exception

Change the faulty function so it performs the cleanup action and lets the caller handle the division error. Predict the result of removing the return from `finally`:

```python
def divide() -> float:
    try:
        return 8 / 0
    finally:
        print("cleanup")
try:
    print("result", divide())
except ZeroDivisionError:
    print("caller caught ZeroDivisionError")
```

**Answer—standard output:**

```text
cleanup
caller caught ZeroDivisionError
```

`print("cleanup")` stands in for a cleanup action. It finishes normally, leaving the pending `ZeroDivisionError` to propagate into the caller's specific handler. The repaired source produced no warning or other standard-error output.

This repair preserves the error; it doesn't make division by zero valid. Cleanup can itself fail, so check its operations when diagnosing an unexpected exception. For actual resource management, follow the resource's documented cleanup mechanism. Python's [cleanup tutorial](https://docs.python.org/3.14/tutorial/errors.html#defining-clean-up-actions) explains `finally` and introduces `with` for resources that support context management.

For a longer function, start where execution leaves the protected body. Record the selected result or exception, then trace cleanup statement by statement. Keep earlier events in the ledger even if cleanup replaces the pending outcome. When the result is mutable, keep tracking its contents until the caller receives it.

## Practice the distinction you missed

Change one statement in an exercise you missed. Predict its output and explain the pending outcome before running it. That gives you programming practice beyond recognizing an answer you've just read.

For later recall, keep a short prompt only when it targets a mistake you actually made. These examples keep the conditions attached:

| Prompt | Answer |
| --- | --- |
| In these synchronous functions, does `return` inside `try` run `else` before `finally`? | It skips `else`; `finally` runs before the return completes |
| A return has selected a list. What happens if `finally` appends to that list and finishes normally? | The same list is returned with the appended item |
| An exception is waiting to propagate. What does an executed `return` in `finally` do? | It discards the saved exception and returns its own value; CPython 3.14 warns about this source pattern |

Regular recall and spaced review can help retain these distinctions for later use, alongside writing and running code. Paper is enough. If you use Nibomo for your own practice cards, its [getting-started guide](/docs/getting-started/) covers setup. All code, outputs, and explanations needed for this worksheet are above.

*Production note: AI tools substantially drafted and edited this worksheet and generated its illustration. Automated execution checked its ten complete programs in separate CPython 3.14.7 processes with `-Walways` on macOS 26.6.1 ARM64; the output and warning messages shown come from those runs. The linked Python 3.14 documentation displayed version 3.14.10 when consulted on October 31, 2026. These are small synchronous control-flow examples, not resource-cleanup integration tests. Nibomo is Kirill Markin's product, and this article is published on its marketing site.*
