---
title: "Python Shallow vs Deep Copy: Predict the Output"
description: "Practice Python assignment, shallow copy, and deepcopy with nested-list output questions, object-identity checks, and explained answers."
date: "2026-10-18"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2f12c6702300b9f5ceb273d066c916c95076e0c3044e94da99131381eec200c3.webp"
keywords:
  - "Python shallow vs deep copy"
  - "Python copy practice"
  - "nested list copy"
  - "Python list aliasing"
  - "deepcopy shared references"
---

`a.copy()` gives you a new list. It doesn't promise new rows. After copying a nested list, `b[0].append(5)` can change what you see through `a`, while `b[0] = [5]` can leave `a` unchanged. The difference is which object each statement changes.

This **Python shallow vs deep copy** worksheet makes you trace those objects before running the code. Start with one worked example, then predict seven short snippets. The last one checks a detail that's easy to miss: a deep copy can preserve sharing between rows inside the result.

![A cabinetmaker pulls one handle of a two-handled drawer beside a separate matching drawer](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2f12c6702300b9f5ceb273d066c916c95076e0c3044e94da99131381eec200c3.webp)

## Track the object behind each name

Python assignment binds a name to an object; it doesn't copy that object. A shallow copy creates a new outer container with references to the original elements. For the built-in lists and dictionaries here, a deep copy also recursively copies the nested mutable containers. It remembers objects already copied during that operation. See the [Python copy documentation](https://docs.python.org/3.14/library/copy.html) for the underlying definitions.

Use three questions as you work:

1. Which object does this name or list slot refer to?
2. Does the operation change that object, or replace a reference in a slot?
3. Which other paths still reach the changed object?

**Mutation** changes an existing object. Appending to a list and updating a dictionary entry are mutations. **Replacing a slot** changes which object one position in the outer list refers to. That mutates the outer list without changing the object previously stored there. An **alias** is another reference to the same object.

The examples use built-in lists and dictionaries containing integers or strings. `is` checks object identity; `==` compares values. All identity questions below concern mutable containers, so there's no need to reason about whether Python reuses a particular integer or string object.

## Work through one object ledger

```python
a: list[list[int]] = [[2], [6]]
b: list[list[int]] = a.copy()
b[0].append(3)
b[1] = [9]
b.append([12])

print(a)
print(b)
print(a is b, a[0] is b[0], a[1] is b[1])
```

Call the original outer list `A`, its shallow copy `B`, and the original inner lists `R` and `S`. These are labels for your drawing, not Python variables or memory addresses.

| After this line | Name bindings | Contents of A | Contents of B | Inner objects |
| --- | --- | --- | --- | --- |
| `a = [[2], [6]]` | `a → A` | `[R, S]` | Doesn't exist yet | `R = [2]`, `S = [6]` |
| `b = a.copy()` | `a → A`, `b → B` | `[R, S]` | `[R, S]` | Both outer lists reach R and S |
| `b[0].append(3)` | Same | `[R, S]` | `[R, S]` | R becomes `[2, 3]` |
| `b[1] = [9]` | Same | `[R, S]` | `[R, T]` | New T is `[9]`; S remains `[6]` |
| `b.append([12])` | Same | `[R, S]` | `[R, T, U]` | New U is `[12]` |

The output is:

```text
[[2, 3], [6]]
[[2, 3], [9], [12]]
False True False
```

`b[0].append(3)` reaches R and changes it. A still reaches R through its first slot, so both printed structures show the added `3`. Assigning `[9]` to `b[1]` changes B's second slot; A's second slot still points to S. The final append adds a slot to B alone.

Keep the object labels in your drawing. Writing `[[2], [6]]` twice hides the fact that two different outer lists can reach the same inner lists.

## Seven questions before you open Python

Each snippet stands alone. Predict every printed line, including the identity checks. For each editing statement, name the object it changes. Try all seven before scrolling to the answers.

### 1. Two names

```python
a: list[list[int]] = [[4], [8]]
b: list[list[int]] = a
b.append([12])

print(a)
print(a is b)
```

### 2. A new outer list

```python
a: list[list[int]] = [[4], [8]]
b: list[list[int]] = a.copy()
b[0].append(5)
b.append([12])

print(a)
print(b)
print(a is b, a[0] is b[0])
```

### 3. Two ways to edit a row

```python
a: list[list[int]] = [[4], [8]]
b: list[list[int]] = a.copy()
b[0] = [99]
b[1].append(9)

print(a)
print(b)
print(a[0] is b[0], a[1] is b[1])
```

### 4. A small operator change

```python
a: list[list[int]] = [[4], [8]]
b: list[list[int]] = a.copy()
b[0] += [5]
b[1] = b[1] + [9]

print(a)
print(b)
print(a[0] is b[0], a[1] is b[1])
```

### 5. Copy the nested lists

```python
from copy import deepcopy

a: list[list[int]] = [[4], [8]]
b: list[list[int]] = deepcopy(a)
b[0].append(5)

print(a)
print(b)
print(a == b, a[0] is b[0])
```

### 6. Copy each row

```python
a: list[list[dict[str, int]]] = [[{"score": 4}], [{"score": 8}]]
b: list[list[dict[str, int]]] = [row.copy() for row in a]
b[0][0]["score"] = 99

print(a)
print(a[0] is b[0], a[0][0] is b[0][0])
```

### 7. One row appears twice

```python
from copy import deepcopy

row: list[int] = [0]
a: list[list[int]] = [row, row]
b: list[list[int]] = deepcopy(a)
b[0].append(7)

print(a)
print(b)
print(b[0] is b[1], b[0] is a[0])
```

## Compare your answers and object labels

### 1. Both names reach one outer list

```text
[[4], [8], [12]]
True
```

`b = a` gives the existing outer list another name. Appending through `b` adds a slot to the same list reached through `a`. No copy was created.

### 2. The outer lists differ; their rows are shared

```text
[[4, 5], [8]]
[[4, 5], [8], [12]]
False True
```

`a.copy()` creates a second outer list, but both first slots refer to the same `[4]` list. The nested append changes that shared row. The final append targets only the outer list reached through `b`, so `a` still has two rows.

### 3. Replacing a slot breaks one connection

```text
[[4], [8, 9]]
[[99], [8, 9]]
False True
```

`b[0] = [99]` creates a list and stores its reference in `b`'s first slot. The old `[4]` list stays unchanged and remains reachable through `a[0]`. The second row is still shared, so the append through `b[1]` also appears through `a[1]`.

Redraw the arrow from `b[0]` after the assignment. Leave the object reached by `a[0]` where it is.

### 4. Built-in list `+=` extends the existing object

```text
[[4, 5], [8]]
[[4, 5], [8, 9]]
True False
```

For a built-in list, `b[0] += [5]` extends the row in place, then assigns that same list back to the slot. Both outer lists still reach it. Python documents this behavior in its [mutable sequence operations](https://docs.python.org/3.14/library/stdtypes.html#mutable-sequence-types).

`b[1] + [9]` creates a new list. Assigning the result to `b[1]` replaces that slot's reference, leaving the original second row at `[8]`. The [augmented assignment reference](https://docs.python.org/3.14/reference/simple_stmts.html#augmented-assignment-statements) explains the operation and assignment steps. The result here depends on built-in list behavior; other types can handle `+=` differently.

### 5. The copied first row changes on its own

```text
[[4], [8]]
[[4, 5], [8]]
False False
```

Immediately after `deepcopy(a)`, the structures have equal values but distinct outer and inner lists. The append changes the copied first row. By the time `a == b` runs, their values differ, giving the first `False`. Their first rows remain different objects, giving the second.

The integers are immutable. To isolate this append, you need a separate list containing them; you don't need independently mutable copies of the numbers.

### 6. The copied rows still share their dictionaries

```text
[[{'score': 99}], [{'score': 8}]]
False True
```

The comprehension creates a new outer list, and `row.copy()` creates a new list for each row. Those rows still contain references to the original dictionaries. Both `b[0][0]` and `a[0][0]` reach the dictionary whose `"score"` entry is updated.

Add dictionary labels to your ledger. The first rows get different labels; their first dictionaries get the same one. Copying the rows would isolate an append to a row. It doesn't isolate edits to dictionaries already inside that row.

### 7. A deep copy preserves the repeated row relationship

```text
[[0], [0]]
[[0, 7], [0, 7]]
True False
```

The source has one inner row referenced by two outer slots. In this `deepcopy(a)` operation, that row gets one copied counterpart. Both slots in `b` refer to that counterpart. Appending through `b[0]` therefore also appears through `b[1]`, while the original row stays `[0]`.

The `memo` in the [copy documentation](https://docs.python.org/3.14/library/copy.html) records objects already copied during a copying pass. Here it lets both copied references reach the same copied row.

There are two separate requirements to check: mutable data in the copy should be independent of the source, and rows within the copy should be independent of one another. This `deepcopy(a)` meets the first requirement. It retains the source's repeated reference inside the result, so it doesn't meet the second.

## Choose a copy for the edit you intend

For these built-in containers, the planned edit determines how much copying you need:

| Requirement | Enough for this structure | Reason |
| --- | --- | --- |
| Another name should edit the same outer list | `b = a` | Both names reach it |
| Append, remove, or replace outer slots without changing `a`'s slots | `b = a.copy()` | The outer lists differ |
| Append to a row in a list of lists of integers without changing `a`'s rows | `b = [row.copy() for row in a]` | The row lists are copied too |
| Edit dictionaries inside rows without changing `a`'s dictionaries | `b = deepcopy(a)` | The nested mutable containers are copied |
| Create rows that can be edited independently of one another | Construct each row separately | Each position gets its own row |

Check source independence and row independence separately when the source already contains aliases. Custom objects and external resources have their own copying behavior; these examples establish the results for the built-in containers shown.

## Repair the initialization, then explain it

You need three independently editable rows, each starting with `0`. This version repeats a reference to one inner list:

```python
rows: list[list[int]] = [[0]] * 3
rows[0].append(7)

print(rows)
print(rows[0] is rows[1])
```

Predict the output, then replace only the initialization. The repaired result should be `[[0, 7], [0], [0]]`, with an identity check of `False`.

The broken version prints:

```text
[[0, 7], [0, 7], [0, 7]]
True
```

One repair is:

```python
rows: list[list[int]] = [[0] for _ in range(3)]
rows[0].append(7)

print(rows)
print(rows[0] is rows[1])
```

```text
[[0, 7], [0], [0]]
False
```

Each iteration evaluates `[0]` again, creating a fresh row. The [Python FAQ on multidimensional lists](https://docs.python.org/3.14/faq/programming.html#how-do-i-create-a-multidimensional-list) explains why list repetition shares existing elements and why constructing rows separately avoids the problem. A single `deepcopy(...)` around the broken initialization would preserve the sharing between its rows, just as in question 7.

State the requirement precisely: “Appending to one row must leave every other row unchanged.” That gives you a behavior to check. Asking for a deep copy alone doesn't specify whether sharing inside the result is acceptable.

## Keep cards for the mistakes you made

For any missed question, save a prompt that tests the distinction you missed. Put the code or object diagram on the front, and the result with its reason on the back. Choose from these prompts rather than memorizing the whole worksheet:

| If you missed… | Front | Answer to retrieve |
| --- | --- | --- |
| The outer versus inner list | After a shallow copy of `[[4], [8]]`, which object does a nested append change? | The shared inner list; both outer lists still reach it |
| Mutation versus replacement | Why can replacing `b`'s first slot leave `a`'s first slot unchanged? | They are different outer lists; only `b`'s reference is replaced |
| `+=` versus `+` | For a shared built-in list, how do `+= [5]` and `x = x + [5]` differ? | `+=` extends the existing list; `+` creates a new list that the assignment binds to `x` |
| The dictionary level | What remains shared after copying the outer list and every row in question 6? | The dictionaries inside the rows |
| The repeated row | If two slots reach one row, what happens to those paths in one `deepcopy` operation? | Both copied slots reach one copied row |

[What should go on a flashcard](/blog/what-should-go-on-a-flashcard/) can help you trim a prompt that asks for unrelated facts. The [coding interview flashcard guide](/blog/how-to-use-flashcards-for-coding-interviews/) connects this kind of review to solving problems. After explaining your missed case, change one operation and predict the output again before running it.

*Production note: AI tools substantially drafted and edited this article and generated its illustration. Automated checks executed the runnable examples using CPython 3.14.7. The linked Python 3.14 documentation displayed version 3.14.8 when consulted on October 18, 2026.*
