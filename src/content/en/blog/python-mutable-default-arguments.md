---
title: "Python Mutable Default Arguments: Trace and Fix Shared State"
description: "Trace Python mutable default arguments with checked output exercises. Compare None, rebinding, empty caller lists, and fresh function definitions."
date: "2026-10-24"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/5be229561840d823eb0578dfa5abc000ed304b3d05256283b33b5da27b57204e.webp"
keywords:
  - "Python mutable default arguments"
  - "default list Python"
  - "default arguments evaluated once"
  - "None sentinel"
  - "Python function shared state"
---

A function returns `['north']`. You save the result, call the function again, and your saved list now contains `['north', 'west']`. Your variable still refers to the same object. The later call changed that object.

This can happen with **Python mutable default arguments** because an omitted argument reuses a value saved when the function was defined. If that value is a list, successive calls can append to the same list.

The usual repair is to default to `None`, check `if items is None:`, and create `items = []` inside that block. It gives each omitted call a fresh list. It still lets the function change a supplied list, including an empty one. The call ledger and six exercises below show why both parts matter, and when returning a copy is a better fit.

![One friend adds amber sea glass to a jar another friend holds, beside a separate empty jar](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/5be229561840d823eb0578dfa5abc000ed304b3d05256283b33b5da27b57204e.webp)

## The default list exists before the first call

Python evaluates a default argument expression when execution reaches the function definition, then saves the result with that function. Later calls that omit the argument use the saved value. The [Python tutorial on default argument values](https://docs.python.org/3.14/tutorial/controlflow.html#default-argument-values) documents this timing.

In `bucket: list[str] = []`, evaluating `[]` creates a list. A call without `bucket` binds its local parameter to that saved list. An append changes the list itself; the next omitted call receives it with those changes still present.

Keep two steps separate when tracing the code:

- **Definition time:** evaluate the default expression and save its result with the function.
- **Call time:** bind each parameter to the argument supplied by the caller, or to its saved default when the argument is omitted.

An explicitly supplied list becomes the argument for that call. It doesn't replace or reset the saved default. This follows the binding rules in the [function definition reference](https://docs.python.org/3.14/reference/compound_stmts.html#function-definitions).

## Follow three calls through one ledger

Read this as one complete program. In particular, the `print` statements run after all three calls.

```python
def remember(label: str, bucket: list[str] = []) -> list[str]:
    bucket.append(label)
    return bucket

first = remember("north")
explicit = remember("east", ["start"])
second = remember("west")
print(first)
print(explicit)
print(second)
print(first is second, first is explicit)
```

Label the default list `D` and the explicitly supplied list `E`. These are labels for the objects in your notes, not extra Python variables.

| After this step | List D | List E | References to keep |
| --- | --- | --- | --- |
| Execute `def remember(...)` | `[]` | Doesn't exist yet | The function saves D as its default |
| `first = remember("north")` | `['north']` | Doesn't exist yet | `first → D` |
| `explicit = remember("east", ["start"])` | `['north']` | `['start', 'east']` | `first → D`, `explicit → E` |
| `second = remember("west")` | `['north', 'west']` | `['start', 'east']` | `first → D`, `second → D`, `explicit → E` |

The output is:

```text
['north', 'west']
['start', 'east']
['north', 'west']
True False
```

Returning D doesn't copy it. `first` refers to D throughout the program, so printing it after the third call shows the added `"west"`. The explicit call appends to E and leaves D alone. When the third call omits `bucket`, it returns to D.

Here `is` checks object identity: whether both names refer to the same list. `==` checks equality of values. Two separate empty lists would compare equal while failing the identity check.

The function keeps its default available after a call returns. Any other reference to that object, such as `first`, can observe later changes too. For more practice following shared references inside containers, see the [Python shallow vs deep copy worksheet](/blog/python-shallow-vs-deep-copy-practice/).

## Six exercises to predict before running

Run each snippet as a separate program with fresh definitions. Before running it, predict every printed line, including each `True` or `False`. Note when each list is created and whether the operation changes that list or makes a new one.

For exercise 3, also describe what happens to a supplied list. Exercise 4 asks you to preserve that behavior for both empty and nonempty lists. Attempt all six before reading the answer section.

### 1. Reassign the name used in the default

```python
seed: list[str] = ["old"]
def add(label: str, bucket: list[str] = seed) -> list[str]:
    bucket.append(label)
    return bucket
seed = ["new"]
print(add("x"))
print(seed)
```

Does the call receive the list that `seed` names at call time, or the list saved when `def` ran?

### 2. Change one operator

```python
def extend(value: int, items: list[int] = []) -> list[int]:
    items += [value]
    return items

def combine(value: int, items: list[int] = []) -> list[int]:
    items = items + [value]
    return items
print(extend(2))
print(extend(5))
print(combine(2))
print(combine(5))
```

The two functions have separate default lists. Within each function, decide whether the operation changes its saved list or binds `items` to a new list.

### 3. Allocate only when the argument is missing

```python
def add(value: int, items: list[int] | None = None) -> list[int]:
    if items is None:
        items = []
    items.append(value)
    return items
left = add(2)
right = add(5)
caller: list[int] = []
result = add(8, caller)
print(left, right)
print(left is right)
print(caller, result is caller)
```

Does fixing the omitted-argument case also stop the function from changing caller-owned lists?

### 4. Replace the check with `or []`

```python
def add(value: int, items: list[int] | None = None) -> list[int]:
    items = items or []
    items.append(value)
    return items
empty: list[int] = []
full: list[int] = [3]
a = add(8, empty)
b = add(9, full)
print(empty, a, a is empty)
print(full, b, b is full)
```

After predicting the output, repair the function so that every explicitly supplied list is changed and returned, whether it starts empty or nonempty. Calls with no list must still get a fresh one.

### 5. Put the list inside a tuple

```python
def add(value: int, state: tuple[list[int]] = ([],)) -> list[int]:
    state[0].append(value)
    return state[0]
print(add(2))
print(add(5))
```

The tuple is immutable. Decide whether that prevents changes to the list it contains.

### 6. Execute the inner definition twice

```python
from collections.abc import Callable

def make_collector() -> Callable[[str], list[str]]:
    def collect(label: str, items: list[str] = []) -> list[str]:
        items.append(label)
        return items
    return collect
f = make_collector()
g = make_collector()
a = f("red")
b = f("blue")
c = g("green")
print(a, b, c)
print(a is b, a is c)
```

Count executions of the inner `def`, then count calls to each resulting function.

## Check the output and explain the object

### 1. Rebinding `seed` leaves the saved default alone

```text
['old', 'x']
['new']
```

At `def add(...)`, evaluating `seed` gives the original `['old']` list. The function saves that list as its default. Later, `seed = ["new"]` binds the name `seed` to a newly created list. This is rebinding: changing which object a name refers to.

The assignment leaves the original list and the function's reference to it unchanged. Calling `add("x")` therefore appends to the old list. On a diagram, move the arrow from `seed` to the new list while leaving the default arrow pointing to the old one. The default expression isn't evaluated again at call time.

### 2. List `+=` mutates; list `+` creates a result

```text
[2]
[2, 5]
[2]
[5]
```

For these built-in lists, `items += [value]` extends the existing list in place. Both calls to `extend` change its saved default. Notice the print timing: the first line is printed before the second call adds `5`. It stays `[2]` in the output even though the list changes afterward.

In `combine`, `items + [value]` creates a new list, and assignment binds the local name `items` to it. The saved default stays empty. Each call uses that same empty default to build a separate one-element result. The [Python FAQ on shared default values](https://docs.python.org/3.14/faq/programming.html#why-are-default-values-shared-between-objects) explains why changing a saved mutable object affects subsequent calls.

Reusing a list doesn't make it accumulate values unless something mutates it. `combine` avoids that mutation, although `None` or a required input makes the intended interface clearer. Keep the operator rule specific to built-in lists: other types can implement `+=` differently.

### 3. `None` separates missing input from an empty list

```text
[2] [5]
False
[8] True
```

The saved default is `None`. Each omitted call enters the `if` block and evaluates `[]` inside the body, creating a fresh list. `left` and `right` therefore refer to separate lists.

The empty `caller` list is not `None`, so it passes through the check unchanged. The append then changes that supplied list, and the function returns it. This is why `[8] True` is part of the answer even after the shared-default problem is fixed.

The contract is **a fresh list for omitted input; mutation of the supplied list otherwise**. Passing `None` explicitly also selects the fresh-list path. Here `None` is a sentinel, a value used to mean “no list supplied.” This convention works when explicit `None` and omission should mean the same thing. If your API must distinguish them, this signature isn't enough.

### 4. `or []` gives empty and nonempty lists different treatment

```text
[] [8] False
[3, 9] [3, 9] True
```

An empty list is false in a Boolean context. In the first call, `items or []` evaluates the right-hand `[]` and gives `items` a new list. The append changes that new list and leaves the caller's `empty` list alone.

A nonempty list is true in a Boolean context, so the second call keeps the supplied `full` list. Appending changes it, and `b` refers to it too. `or` selects an operand here; it doesn't turn either list into a Boolean.

The requested repair is the explicit check from exercise 3:

```python
def add(value: int, items: list[int] | None = None) -> list[int]:
    if items is None:
        items = []
    items.append(value)
    return items
```

With this replacement, the first output line would be `[8] [8] True`; the second would remain `[3, 9] [3, 9] True`. Both supplied lists are changed and returned. Both versions allocate a fresh list for omitted input, but only the explicit `None` check also preserves the requested behavior for an empty supplied list.

### 5. The tuple still reaches a mutable list

```text
[2]
[2, 5]
```

Evaluating `([],)` creates a list and a tuple that refers to it. The saved default is the tuple. Its immutability prevents replacing its element; the list reached through that element remains mutable.

`state[0].append(value)` changes that inner list. Both omitted calls reach it, so it contains `2` before the second call adds `5`. A tuple around a list doesn't create independence between calls. As in exercise 3, create the list inside the function body if each omitted call should get its own.

### 6. Each execution of `def` creates its own default

```text
['red', 'blue'] ['red', 'blue'] ['green']
True False
```

Each call to `make_collector()` executes the inner definition. That creates a new function and evaluates its `[]` default again. The functions reached through `f` and `g` therefore have separate default lists.

The calls `f("red")` and `f("blue")` share one default list. Both `a` and `b` refer to it, so both show `['red', 'blue']` when printing finally happens. `g("green")` changes the other function's separate list.

“Evaluated once” means once per execution of that function definition. It doesn't mean one list for every function ever created from the same source text. This distinction also explains why rerunning a definition in an interactive session can appear to reset the problem: you've created a new function with a new default.

## Choose the repair by what callers should observe

Before changing the signature, settle what callers should observe. Should omitted calls produce independent results? May the function change a supplied list? The `None` check creates independence for omitted calls while preserving mutation of supplied lists.

| Intended behavior | Suitable approach for these examples |
| --- | --- |
| A new list for every omitted call; supplied lists are appended to | Default to `None`, check `is None`, and allocate inside the body |
| Every caller provides the list, and the function may change it | Require an explicit `items: list[int]` argument and document the mutation |
| Return an extended list while leaving the caller's list unchanged | Require the input and construct a new result |

For the last contract, an explicit input makes the operation straightforward:

```python
def added(value: int, items: list[int]) -> list[int]:
    return [*items, value]
caller: list[int] = []
result = added(8, caller)
print(caller, result, result is caller)
```

```text
[] [8] False
```

The result is a new outer list containing the input elements followed by `value`. The caller's list stays empty. Existing elements are shared with the new list, not recursively copied. That shallow copy is sufficient here because the elements are immutable integers or strings. For nested mutable elements, work through the [copy worksheet](/blog/python-shallow-vs-deep-copy-practice/) before assuming the two structures are independent.

When reporting or fixing this bug, include the intended observations: “Two omitted calls return different lists” and, if mutation is intended, “Supplying an empty list changes and returns that exact list.” For a copying interface, use “The input list remains unchanged.” Check identity as well as contents when identity is part of the contract.

## Review the distinction you missed

After a missed exercise, cover the answer and explain which objects the function and its callers refer to. Then change one call or operation and predict the result again. That gives you another chance to apply the rule rather than recognize the same output.

For a few short flashcards, use self-contained prompts such as these:

| Front | Answer to retrieve |
| --- | --- |
| For `def f(items=[]): ...`, when is the list created, and what does an omitted call receive? | The list is created when `def` executes; an omitted call receives the function's saved list |
| After a default is set from `seed`, does `seed = ["new"]` replace that default? | No. Rebinding `seed` changes that name's reference; the function keeps its saved object |
| A function should append to every supplied list, including `[]`, but allocate when given `None`. Which condition selects allocation? | `if items is None:`; `items or []` also replaces an empty supplied list |
| Two calls execute an outer function that defines an inner function with `items=[]`. How many default lists are created? | Two, one for each execution of the inner definition; calls to either resulting function reuse its own list |

Regular retrieval and spaced review help keep these distinctions available over time. Keep the answer and its reason together, whether you review on paper or in [Nibomo](/). Continue solving fresh code variants too: remembering “defaults are evaluated once” is only part of tracing which object a particular call will change.

*Production note: AI tools substantially drafted and edited this article and generated its illustration. All eight complete example programs were executed with CPython 3.14.7 on macOS 26.6.1 ARM64, and their outputs were captured before drafting. The linked Python 3.14 documentation displayed version 3.14.9 when consulted on October 24, 2026.*
