---
title: "Python Generator Exhausted: Trace What Consumed It"
description: "Diagnose an empty second pass with checked Python examples, partial-consumption traces, fresh-source fixes, and practice with explained answers."
date: "2026-10-29"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/abbd9e9fe6ca831027c3a48d29ea55ed97150997d803edbf4cb9c562e9ead81d.webp"
keywords:
  - "Python generator exhausted"
  - "Python iterator exhaustion"
  - "iterate twice over generator"
  - "any consumes iterator"
  - "iterable vs iterator"
---

A generator can produce every expected value in one loop, then skip the body of the next loop entirely. No error, just no values left. An earlier `list(...)`, membership check, or call to `any(...)` may have consumed the input before the loop you are debugging even starts.

**An exhausted Python generator doesn't restart when you loop over it again.** To iterate twice over a generator's complete result, create a fresh generator with restartable input, or collect the result into a list before the first pass. If you only need to continue after an early stop, the same iterator supplies whatever remains.

The ten programs below were executed with CPython 3.14.7. Two opening examples establish the iterable-versus-iterator distinction; seven question groups then let you trace the less obvious consumers. Treat each code block as a separate program. Before reading an answer, predict the output and write down which values remain available.

![A dressmaker checks blue ribbon remaining on a cardboard reel beside lengths already cut](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/abbd9e9fe6ca831027c3a48d29ea55ed97150997d803edbf4cb9c562e9ead81d.webp)

## A list can start another pass; its iterator keeps its place

An **iterable** lets Python obtain an iterator. An **iterator** supplies successive items and tracks its progress. Every iterator is also iterable, so accepting an iterable doesn't promise that you can traverse it twice. Reuse depends on the particular object's contract.

Start with a list, which can supply a new iterator for each pass:

```python
values = [4, 0, 7]
print(list(values))
print(list(values))
items = iter(values)
print(list(items))
print(list(items))
```

Output:

```text
[4, 0, 7]
[4, 0, 7]
[4, 0, 7]
[]
```

The first two calls each traverse `values` from the beginning. The third call consumes all three items from `items`. The fourth call receives that same iterator after it has run out.

The original list still holds its elements. Consuming its iterator advances the iterator; it doesn't remove elements from the list. The [iterator protocol](https://docs.python.org/3.14/library/stdtypes.html#iterator-types) requires an iterator to keep raising `StopIteration` once it has reported exhaustion. A `for` loop handles that signal by ending normally, which explains the silent second pass.

Generators follow this protocol too. As [Python's generator tutorial](https://docs.python.org/3.14/tutorial/classes.html#generators) explains, requesting an item resumes the generator's suspended execution. Looping over the same generator object continues from its current position; calling the generator function creates a new object.

## Calling `iter()` again doesn't reset an iterator

Calling `iter()` on an existing iterator returns that iterator. Both names below therefore move the same cursor:

```python
items = iter([4, 0, 7])
alias = iter(items)
print(alias is items)
print(next(items))
print(next(alias))
print(list(items))
```

Output:

```text
True
4
0
[7]
```

`alias is items` is `True`: both names refer to one object. The first `next()` takes `4`; the second takes `0`, even though it uses a different name. The final call gets only `7`.

Returning itself is part of the [iterator contract](https://docs.python.org/3.14/library/stdtypes.html#iterator-types). Neither an alias nor another `iter()` call creates an independent pass.

For the questions, use a **consumption ledger** with three columns: the operation, the items it takes, and the tail left afterward. This catches partial consumption as well as complete exhaustion.

## 1. What does `break` leave behind?

Predict both output lines, including the values available after the loop exits.

```python
items = iter([4, 0, 7])
for value in items:
    print(value)
    break
print(list(items))
```

**Answer:**

```text
4
[0, 7]
```

The loop requests `4`, prints it, and reaches `break`. It makes no request for `0` or `7`. The final `list(items)` collects those two remaining values.

| Operation | Items taken from `items` | Remaining tail afterward |
| --- | --- | --- |
| Create `items` | None | `4, 0, 7` |
| Enter the first loop iteration | `4` | `0, 7` |
| Execute `break` | None | `0, 7` |
| Evaluate `list(items)` | `0, 7` | Empty |

A shorter second pass can therefore come from a loop that stopped early. `break` leaves the iterator at its current position; it doesn't rewind it or drain the remaining input.

## 2. How much does `any()` consume?

Predict all four lines. Account for the item that makes `any()` return `True`.

```python
items = iter([0, 0, 7, 9])
print(any(items))
print(list(items))
print(any(items))
print(all(items))
```

**Answer:**

```text
True
[9]
False
True
```

The first `any(items)` takes both zeros and then `7`, the first truthy item. **The decisive item is consumed too.** Short-circuiting means `any()` stops requesting more items after `7`; it doesn't put `7` back. Only `9` remains.

| Operation | Items taken | Result | Remaining tail |
| --- | --- | --- | --- |
| `any(items)` | `0, 0, 7` | `True` | `9` |
| `list(items)` | `9` | `[9]` | Empty |
| `any(items)` | None | `False` | Empty |
| `all(items)` | None | `True` | Empty |

[`any()` stops at a truthy item](https://docs.python.org/3.14/library/functions.html#any), while [`all()` stops at a falsy item](https://docs.python.org/3.14/library/functions.html#all). If neither finds its stopping item, it consumes the input to the end. On empty input, `any()` returns `False` and `all()` returns `True`.

Here, the intervening `list(items)` takes the last item. The final two calls examine empty input, so their results say nothing about the truth values of the original four numbers.

## 3. Does a membership check keep the matching item?

Trace both searches: one finds its target, and one reaches the end.

```python
items = iter([4, 0, 7, 9])
print(7 in items)
print(list(items))
missing = iter([4, 0, 7, 9])
print(8 in missing)
print(list(missing))
```

**Answer:**

```text
True
[9]
False
[]
```

For these built-in list iterators, membership searches advance until they find a match or run out. `7 in items` consumes `4`, `0`, and the matching `7`, leaving `9`. The unsuccessful search for `8` consumes all four items from `missing`.

This behavior depends on the object being searched. The [membership reference](https://docs.python.org/3.14/reference/expressions.html#membership-test-operations) describes both custom membership methods and iteration-based searching. Testing `7 in values` on a list doesn't remove its elements. Testing `7 in items` here advances an existing iterator.

Include membership checks in your ledger, even when they look like read-only questions. For an iterator search, answering the question uses up input.

## 4. Is a new generator enough?

Both calls below create a new generator. Follow their input before predicting the second result.

```python
source = iter([4, 0, 7])
def make_values():
    yield from source
print(list(make_values()))
print(list(make_values()))
```

**Answer:**

```text
[4, 0, 7]
[]
```

Each call creates a generator with fresh execution state, but both generators draw from the single `source` iterator outside the function. The first pass exhausts it. The second generator reaches `yield from source` with nothing left upstream.

Compare that with a source created inside the generator body:

```python
def make_values():
    yield from [4, 0, 7]
print(list(make_values()))
print(list(make_values()))
```

**Answer:**

```text
[4, 0, 7]
[4, 0, 7]
```

Each execution now creates its own list and traverses all three values. Moving the input creation inside the function gives each generator fresh input in this particular program.

A generator factory—a function that creates a generator—repairs the second pass only when its source supports the required restart. Check that contract all the way upstream. Recomputing from a source and replaying one captured result are different requirements; a new computation doesn't by itself promise identical data.

If the yielded values are functions, there is a separate timing question: when do they read their enclosing variables? The [Python closure worksheet](/blog/python-late-binding-closures/) covers that case.

## 5. Can `list()` recover an item already consumed?

Work out what `saved` contains when the first item has already been taken.

```python
items = iter([4, 0, 7])
print(next(items))
saved = list(items)
print(saved)
print(list(saved))
print(list(items))
```

**Answer:**

```text
4
[0, 7]
[0, 7]
[]
```

`next(items)` consumes `4`. The subsequent `list(items)` collects only `0` and `7`, then exhausts the iterator. The stored list can supply repeated passes over those two items. It has no record of `4`.

Collecting values into a container is often called *materializing*. The [list constructor](https://docs.python.org/3.14/library/stdtypes.html#list) collects the items the iterable supplies now. To capture the complete result, materialize before any consumer takes a prefix. The input must finish, and the collected result must fit in memory.

The list stores references to the yielded objects. If you also need independent nested data, use the [shallow-versus-deep-copy worksheet](/blog/python-shallow-vs-deep-copy-practice/) to work through that separate decision.

## 6. What does `tee()` give each consumer?

Two consumers can also share a source while keeping separate positions. Predict the output when one branch advances ahead of the other.

```python
from itertools import tee
source = iter([4, 0, 7])
left, right = tee(source)
print(next(left))
print(list(right))
print(list(left))
```

**Answer:**

```text
4
[4, 0, 7]
[0, 7]
```

`left` takes `4`. `right` then receives all three items, including the `4` already seen by `left`. Finally, `left` receives its remaining `0` and `7`.

[`itertools.tee()`](https://docs.python.org/3.14/library/itertools.html#itertools.tee) buffers values that a lagging branch still needs. Uneven progress can therefore require substantial storage. Both branches receive the same yielded objects; `tee()` doesn't deep-copy them or rerun the source's computation.

Split before the consumption you want to share. **After splitting this iterator, consume `left` and `right`, and stop reading `source` directly.** A direct call such as `next(source)` bypasses the branches' buffering and can take an item they needed.

`tee()` starts at the source's current position; it cannot recover an earlier prefix. If one consumer will finish the whole finite sequence before the other starts, storing a list usually makes the intended reuse clearer. This small example establishes the output, not memory use or performance.

## 7. Can `bool()` tell you whether an iterator is empty?

The first line consumes this `map()` iterator. Predict what the remaining three lines print.

```python
items = map(str, [4, 0, 7])
print(list(items))
print(bool(items))
print(next(items, "finished"))
print(list(items))
```

**Answer:**

```text
['4', '0', '7']
True
finished
[]
```

The exhausted map iterator still tests as true. `bool(items)` doesn't request another item, and its result doesn't tell you whether this iterator has any left. Python's [truth-testing rules](https://docs.python.org/3.14/library/stdtypes.html#truth-value-testing) depend on the object's type; they aren't a general iterator-emptiness protocol. [`map()` returns an iterator](https://docs.python.org/3.14/library/functions.html#map).

[`next(iterator, default)`](https://docs.python.org/3.14/library/functions.html#next) returns the supplied default on exhaustion, which explains `finished`. Without a default, it raises `StopIteration`. The final `list(items)` again finds no items.

`any(items)` is also unsuitable as a general emptiness test: it consumes input and can return `False` for a nonempty sequence of falsy values. A deliberate `next()` probe tells you whether an item was available, but a successful probe takes that item. Keep it for later processing if you need it.

## Choose the repair from the required second pass

The right fix depends on what the next consumer should receive. Decide that before replacing the iterator.

| Required behavior | Approach | What to check |
| --- | --- | --- |
| Continue after an early stop | Keep consuming the same iterator | Earlier consumers have already taken the prefix |
| Compute the whole result again | Call a generator factory whose source can restart | Fresh generator state doesn't restart a shared upstream iterator |
| Read one captured result several times | Collect it into a list before consumption | The input must finish and fit in memory; collecting a tail saves only that tail |
| Let two consumers advance separately through one source | Split with `tee()` before either consumer starts | Use the branches, stop reading the original iterator, and allow for buffering |

When a second loop is empty, trace backward from it. Identify the iterator object, including other names that refer to it. Record each earlier consumer and the prefix it took: loops, conversions, `next()`, `any()`, `all()`, and iterator membership searches. If a fresh generator is empty too, follow its upstream source. That ledger shows where the input went and which repair matches the intended second pass.

For later practice, save a question you missed with its complete program, output, and ledger. Regular recall and spaced review can help retain the distinction between a consumed prefix and an exhausted source. Then try a fresh program before running it. Paper works; you can also keep your own prompts in [Nibomo](/), using the [getting-started guide](/docs/getting-started/). The complete answers are above.

*Production note: AI tools substantially drafted and edited this worksheet and generated its illustration. Its ten complete programs were executed with CPython 3.14.7 on macOS 26.6.1 ARM64, each with fresh globals; the outputs shown were captured from those runs. These are small synchronous examples, not measurements of memory use or performance, or tests of file, database, asynchronous, or threaded sources. The linked Python 3.14 documentation displayed version 3.14.10 when consulted on October 29, 2026. Nibomo is Kirill Markin's product, and this article is published on its marketing site.*
