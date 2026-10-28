---
title: "Python Late Binding Closures: Predict When a Loop Value Is Read"
description: "Trace Python closures made in loops, compare immediate and delayed calls, and choose defaults, a factory, or partial with checked practice answers."
date: "2026-10-28"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/220494243e4fbed9b7507351ed7f2dd3006690836ac4994926c1497beb791330.webp"
keywords:
  - "Python late binding closures"
  - "lambda in loop Python"
  - "Python closure default argument"
  - "function factory Python"
  - "generator lambda late binding"
---

Three functions created in a loop can all return `2`. Call them during the loop, and they can return `0`, `1`, and `2`. Assign `9` after the loop in the same enclosing function, and the saved functions can all return `9` instead. The familiar “last loop value” explanation only covers one of those cases.

With **Python late binding closures**, creating a function doesn't automatically save the current value of every variable mentioned in its body. A closure can retain access to an enclosing binding and read its value when called. A binding is the association between a name and an object; later assignment can change which object that name refers to.

For the common loop repair, `lambda number=number: number` saves the current value as a default for the lambda's own parameter. Use a separate factory call when each returned function should have its own enclosing binding, or `functools.partial` when you're supplying arguments to an existing function. None of these approaches deep-copies the objects it receives. The exercises below show what each choice changes.

This worksheet uses nine complete programs with captured outputs: a worked example followed by eight prediction exercises. Treat each code block as a separate program. Before reading an answer, write down the output and which binding each call uses.

![An artist compares an earlier arms-down sketch with a model who has raised one arm](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/220494243e4fbed9b7507351ed7f2dd3006690836ac4994926c1497beb791330.webp)

## Follow the name until the call

A closure is a function that retains access to names from an enclosing function scope. In this program, `number` belongs to `make_readers`; `read` uses it without defining its own `number`.

```python
from collections.abc import Callable

def make_readers() -> list[Callable[[], int]]:
    readers: list[Callable[[], int]] = []
    for number in range(3):
        def read() -> int:
            return number
        readers.append(read)
    return readers

readers = make_readers()
print([read() for read in readers])
```

The output is:

```text
[2, 2, 2]
```

Each execution of `def read` creates a function. All three functions refer to the same enclosing `number` binding from this call to `make_readers`. The `for` loop updates that binding; it doesn't create a separate enclosing function scope for each iteration.

| Point in execution | What `number` refers to | What happens to the saved functions |
| --- | --- | --- |
| First iteration | `0` | Create and store the first reader; don't call it |
| Second iteration | `1` | Create and store another reader using the same binding |
| Third iteration | `2` | Create and store the third reader using the same binding |
| `make_readers` returns | Still `2` | The closures retain access to that binding |
| The final comprehension calls the readers | `2` | Each call reads `number` and returns `2` |

This applies to ordinary `def` functions as well as lambdas. The [Python FAQ's loop-function explanation](https://docs.python.org/3.14/faq/programming.html#why-do-lambdas-defined-in-a-loop-with-different-values-all-return-the-same-result) covers both forms. A lambda in a loop follows Python's usual name-resolution rules.

For each exercise, track three things: where the name is bound, what can update that binding, and when the function body executes. Those questions are enough to trace these examples without inspecting Python's internal closure objects.

## 1. Call now, then call later

Predict both lines. The loop stores results in one list and functions in the other.

```python
from collections.abc import Callable

def build() -> tuple[list[int], list[Callable[[], int]]]:
    immediate: list[int] = []
    delayed: list[Callable[[], int]] = []
    for number in range(3):
        def read() -> int:
            return number
        immediate.append(read())
        delayed.append(read)
    return immediate, delayed

immediate, delayed = build()
print(immediate)
print([read() for read in delayed])
```

**Answer:**

```text
[0, 1, 2]
[2, 2, 2]
```

`read()` executes immediately, while the current iteration's value is still bound to `number`. Its integer result goes into `immediate`. Storing `read` puts a callable in `delayed`; storing it doesn't execute its body.

The final comprehension calls those stored functions after `build` finishes. All read the enclosing binding's remaining value, `2`. Both lists were populated inside the same loop, but one holds results from calls during the loop and the other holds functions called afterward.

## 2. Change the binding after the loop

Don't apply “all functions return the last loop value” mechanically. Trace the assignment following the loop too.

```python
from collections.abc import Callable

def build() -> list[Callable[[], int]]:
    readers: list[Callable[[], int]] = []
    for number in range(3):
        readers.append(lambda: number)
    number = 9
    return readers

print([read() for read in build()])
```

**Answer:**

```text
[9, 9, 9]
```

The assignment rebinds the same enclosing `number` that the lambdas use. Their bodies execute afterward, so all return `9`. The loop's last value explained the worked example only because nothing changed that binding before the calls.

The [execution-model reference on name resolution](https://docs.python.org/3.14/reference/executionmodel.html#resolution-of-names) describes how enclosing scopes determine the binding a free name uses. Here, `number` is a free name in each lambda: the lambda uses it without binding a local `number`. Keep the binding's location and its value at call time separate in your notes.

## 3. A comprehension has its own binding

Here, a module-level assignment also uses the name `number`. Both lines call the same saved functions. Predict whether the assignment changes their answers.

```python
from collections.abc import Callable

def make_readers() -> list[Callable[[], int]]:
    readers = [lambda: number for number in range(3)]
    return readers

readers = make_readers()
print([read() for read in readers])
number = 99
print([read() for read in readers])
```

**Answer:**

```text
[2, 2, 2]
[2, 2, 2]
```

The comprehension's iteration binding is isolated from the module-level `number`. Within this execution of the comprehension, its lambdas share that comprehension binding. They are called after the list has been constructed, when it holds `2`. The [Python reference on comprehensions](https://docs.python.org/3.14/reference/expressions.html#displays-for-lists-sets-and-dictionaries) describes this scope separation.

Assigning `99` at module level changes a different binding. The saved readers still reach the comprehension's `number`, so their answers stay the same. An identical spelling doesn't mean two names belong to the same scope. A comprehension keeps its iteration variable out of the surrounding scope, but it doesn't give each lambda a separate iteration binding.

## 4. Use a default to save the iteration's value

The repeated `number` in this idiom has two roles. Predict the list and the explicit call.

```python
readers = [lambda number=number: number for number in range(3)]
print([read() for read in readers])
print(readers[0](40))
```

**Answer:**

```text
[0, 1, 2]
40
```

In `number=number`, the right-hand expression is evaluated when that lambda is created. Its result becomes a default for the lambda's own parameter on the left. The body now reads that local parameter. Calling the lambda without an argument uses its saved default; calling it with `40` supplies the parameter explicitly.

Using a default argument to fix a Python closure changes the function's interface: the returned callable accepts an argument that overrides the saved default for that call. The explicit `40` doesn't replace the default stored on the function. This interface may be acceptable for a small local helper. If callers must receive a zero-argument function, the factory in exercise 6 expresses that contract more clearly.

Default expressions and function bodies run at different times. The [Python tutorial on default argument values](https://docs.python.org/3.14/tutorial/controlflow.html#default-argument-values) documents the definition-time evaluation. The [mutable-default worksheet](/blog/python-mutable-default-arguments/) explores what happens when the saved value is a list reused by later calls.

## 5. Saving a reference doesn't copy its contents

Both lambdas below use defaults. Predict the effect of changing the original list, then replacing the module-level name.

```python
row: list[str] = ["original"]
reference = lambda saved=row: saved[0]
snapshot = lambda saved=tuple(row): saved[0]
row[0] = "changed"
print(reference(), snapshot())
row = ["replacement"]
print(reference(), snapshot())
```

**Answer:**

```text
changed original
changed original
```

`reference` saves a reference to the original list. Replacing that list's first element changes what `saved[0]` reads. Later, `row = ["replacement"]` binds the module name to a new list; the lambda's saved default still reaches the original list.

`snapshot` saves a tuple constructed when the lambda is defined. That tuple contains the original string. Changing the list's slot doesn't change the tuple's slot, so it continues to return `original`.

The tuple works as a snapshot for this list of strings. It doesn't recursively copy nested mutable elements. For nested lists or dictionaries, the [shallow-versus-deep-copy exercises](/blog/python-shallow-vs-deep-copy-practice/) help you trace what remains shared. Decide which contents must be independent before choosing a copy operation.

## 6. Give each function a separate factory call

A function factory returns another function. Predict the output, then identify which call creates each `number` binding.

```python
from collections.abc import Callable

def make_reader(number: int) -> Callable[[], int]:
    def read() -> int:
        return number
    return read

readers = [make_reader(number) for number in range(3)]
print([read() for read in readers])
```

**Answer:**

```text
[0, 1, 2]
```

Each call to `make_reader` creates a separate local parameter binding. Its returned `read` function keeps access to that call's `number`. The first reader reaches the binding from `make_reader(0)`, the next reaches the one from `make_reader(1)`, and the third reaches the one from `make_reader(2)`.

These are still closures with call-time lookup. The repair works by giving them separate bindings. It also keeps the returned function's zero-argument signature explicit. For a larger function body, a named, typed factory can make the intended lifetime easier to inspect than an extra lambda parameter. A factory still receives references to its arguments; passing a mutable object wouldn't copy it.

## 7. Bind an argument to an existing function

If a suitable function already exists, `functools.partial` can store some arguments now and accept the remaining ones later.

```python
from functools import partial

def multiply(factor: int, value: int) -> int:
    return factor * value

times = [partial(multiply, factor) for factor in range(3)]
print([function(5) for function in times])
```

**Answer:**

```text
[0, 5, 10]
```

Each `partial` stores the current integer argument passed to it. Calling the resulting object with `5` supplies `value`; the stored argument supplies `factor`. The [official `partial` documentation](https://docs.python.org/3.14/library/functools.html#functools.partial) describes how those arguments are combined.

This avoids writing a wrapper just to pass an argument to `multiply`. It still stores object references, so it doesn't offer a general deep-copy guarantee. Choose it when supplying part of an existing function's arguments states the operation clearly.

## 8. A generator changes when calls happen

Both lines consume functions from the same generator definition. In one case the consumer calls each function during iteration; in the other it stores them first.

```python
from collections.abc import Callable, Iterator

def make_readers() -> Iterator[Callable[[], int]]:
    for number in range(3):
        yield lambda: number

print([read() for read in make_readers()])
stored = list(make_readers())
print([read() for read in stored])
```

**Answer:**

```text
[0, 1, 2]
[2, 2, 2]
```

For the first line, the generator yields a lambda and pauses. The comprehension calls that lambda before asking for the next one. At those calls, the generator's `number` is successively `0`, `1`, and `2`.

`list(make_readers())` exhausts a separate generator, collecting its lambdas without calling them. When the final comprehension invokes them, that generator's shared binding holds `2`. The generator hasn't changed the lambdas' lookup rule. Its pauses let the first consumer call each function before the next assignment to `number`. Trace the consumer as carefully as the function creator.

## Choose the binding behavior you need

| Intended behavior | Suitable approach | Detail to check |
| --- | --- | --- |
| Read the current shared state whenever called | Keep the closure over the shared binding | Later rebinding affects later calls |
| Save this iteration's argument in a small helper | Use a default parameter | Callers can supply that parameter explicitly |
| Return a zero-argument reader with its own binding | Call a named factory for each reader | Each factory call creates a separate binding |
| Supply some arguments to an existing function now | Use `partial` | Remaining arguments still arrive at call time |
| Preserve data independently of later mutation | Choose an appropriate copy when saving it | Defaults, factories, and `partial` don't deep-copy automatically |

When debugging, write the required observation first: “The first stored function must return `0` even after the loop completes.” Then inspect its binding and call timing. If the requirement concerns changing list contents too, state that separately. Fixing late binding and copying data solve different parts of the contract.

For a quick recall check, cover the answers and explain three cases: why exercise 2 returns `9`, why exercise 5 still reads the original list, and why exercise 8 has different outputs. Keep any missed case with its complete code and explanation for later review. Regular recall and spaced review help retain the distinctions; use paper or [Nibomo](/), then try a fresh variant and predict it before running it.

*Production note: AI tools substantially drafted and edited this worksheet and generated its illustration. Its nine complete programs were executed with CPython 3.14.7 on macOS 26.6.1 ARM64, each with fresh globals; the outputs shown were captured from those runs. This checks the synchronous language examples, not GUI callbacks, asynchronous tasks, or threaded behavior. The linked Python 3.14 documentation displayed version 3.14.10 when consulted on October 28, 2026. Nibomo is Kirill Markin's product, and this article is published on its marketing site.*
