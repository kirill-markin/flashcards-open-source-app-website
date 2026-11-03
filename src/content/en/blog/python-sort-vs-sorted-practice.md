---
title: "Python sort() vs sorted(): Predict Mutation, Returns, and Ties"
description: "Practice Python sort() vs sorted() with output questions about aliases, return values, stable ties, and sorting records in two passes."
date: "2026-11-03"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/aacd3556bf03864d1c3920600a2e6513861cd2236d293995bf39dc05d6bca61d.webp"
keywords:
  - "Python sort vs sorted"
  - "list.sort returns None"
  - "Python stable sort"
  - "Python sorting practice"
---

`result = values.sort()` can leave `values` in the right order and `result` equal to `None`. The sorting worked. The assignment stored the method's return value, which is separate from the list it changed.

To trace Python `sort()` vs `sorted()`, track two things: which list each name refers to, and what each call returns. Then check the sorting key. Equal-key items keep their incoming order, even with `reverse=True`.

Start with the worked ledger, then predict seven independent programs. Write every printed line before running anything. If an answer differs, find the first statement where your trace went wrong; that's the part to practice.

![A wardrobe volunteer arranges three equally long coats beside two shorter jackets on a clothes rail](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/aacd3556bf03864d1c3920600a2e6513861cd2236d293995bf39dc05d6bca61d.webp)

## Choose which list should change

| Call | Where the ordered items end up | Return value |
| --- | --- | --- |
| `values.sort()` | In the existing list | `None` |
| `sorted(values)` | In a new list | The new list |

Use `values.sort()` when you want to reorder the existing list. Use `ordered = sorted(values)` when you want a separate list and want to leave the input's order alone. The [list.sort() reference](https://docs.python.org/3.14/library/stdtypes.html#list.sort) describes this distinction.

`list.sort()` is a list method; `sorted()` also accepts other iterables, such as tuples. Both support `key=` and `reverse=`. A **key** is the value used to order an item: with `key=len`, words are ordered by length. See the [Python 3.14 Sorting HOWTO](https://docs.python.org/3.14/howto/sorting.html) for these sorting options.

An **alias** is another name for the same list. **Mutation** changes that list. Assigning a new list to a name changes the name's binding, leaving other names attached to the old list. Equal printed values don't tell you whether two names refer to one object.

## A worked ledger with two lists

```python
values: list[int] = [7, 2, 5]
alias: list[int] = values
ascending: list[int] = sorted(values)
result: None = alias.sort(reverse=True)
values = ascending

print(values)
print(alias)
print(result)
print(values is ascending, values is alias)
```

Label the first list `A` and the new list `B`. These labels describe objects in the trace; they aren't extra Python variables.

| After this statement | Names reaching A | A's contents | Names reaching B | B's contents |
| --- | --- | --- | --- | --- |
| `values = [7, 2, 5]` | `values` | `[7, 2, 5]` | — | — |
| `alias = values` | `values`, `alias` | `[7, 2, 5]` | — | — |
| `ascending = sorted(values)` | `values`, `alias` | `[7, 2, 5]` | `ascending` | `[2, 5, 7]` |
| `result = alias.sort(reverse=True)` | `values`, `alias` | `[7, 5, 2]` | `ascending` | `[2, 5, 7]` |
| `values = ascending` | `alias` | `[7, 5, 2]` | `values`, `ascending` | `[2, 5, 7]` |

Output:

```text
[2, 5, 7]
[7, 5, 2]
None
True False
```

The sort targets A through `alias`. The final assignment then moves the name `values` to B. It neither moves `alias` nor changes either list's contents. Keep `result` outside the two list columns: it refers to `None`.

If you expected both printed lists to match, check the last row. Moving `values` to B doesn't redirect every name that previously reached A.

## Predict seven outputs

Each program starts fresh. The snippets use built-in lists, integers, strings, and tuples; no custom comparison behavior is involved. `is` checks identity, while `==` checks equality.

For questions 4–6, write the key beside each item before moving anything. A **stable sort** keeps equal-key items in the order they had immediately before that call. That guarantee also applies with `reverse=True`; see the HOWTO's [stability discussion](https://docs.python.org/3.14/howto/sorting.html#sort-stability-and-complex-sorts) and [note on reverse](https://docs.python.org/3.14/howto/sorting.html#odds-and-ends).

### 1. The call succeeded

```python
values: list[int] = [6, 1, 4]
result: None = values.sort()

print(result)
print(values)
```

### 2. The name moves

```python
values: list[int] = [8, 3, 5]
alias: list[int] = values
values = sorted(values)
alias.append(1)

print(values)
print(alias)
print(values is alias)
```

### 3. Already in order

```python
values: list[int] = [2, 4, 9]
ordered: list[int] = sorted(values)

print(values == ordered, values is ordered)
```

### 4. Three words tie

```python
words: list[str] = ["pear", "fig", "plum", "kiwi", "a"]
ordered: list[str] = sorted(words, key=len)

print(ordered)
print(words)
```

### 5. Descending versus reversing

```python
words: list[str] = ["pear", "fig", "plum", "kiwi", "a"]
descending: list[str] = sorted(words, key=len, reverse=True)
flipped: list[str] = list(reversed(sorted(words, key=len)))

print(descending)
print(flipped)
```

### 6. Which pass sets the main priority?

Each ticket is `(name, priority_rank, minutes)`. Smaller ranks should come first, with shorter tickets first inside each rank. `itemgetter(2)` reads the item at index 2, the minutes; `itemgetter(1)` reads the rank.

```python
from operator import itemgetter

tickets: list[tuple[str, int, int]] = [
    ("oak", 2, 5),
    ("ash", 1, 8),
    ("elm", 2, 3),
    ("fir", 1, 3),
    ("yew", 1, 3),
]
tickets.sort(key=itemgetter(2))
print([ticket[0] for ticket in tickets])
tickets.sort(key=itemgetter(1))
print([ticket[0] for ticket in tickets])
```

### 7. A new order with shared rows

```python
from operator import itemgetter

rows: list[list[int]] = [[8, 80], [3, 30]]
ordered: list[list[int]] = sorted(rows, key=itemgetter(0))
ordered[0][0] = 9

print(rows)
print(ordered)
print(ordered is rows, ordered[0] is rows[1])
```

## Check your answers

### 1. None is the return value

```text
None
[1, 4, 6]
```

The first print shows the stored return value; the second shows the changed list. If you wrote `[1, 4, 6]` on both lines, you treated `sort()` as though it returned the list it sorted. For the same reason, `values = values.sort()` would leave the name `values` referring to `None`.

### 2. The append reaches the old list

```text
[3, 5, 8]
[8, 3, 5, 1]
False
```

After `values = sorted(values)`, draw two boxes. `values` reaches `[3, 5, 8]`, while `alias` still reaches `[8, 3, 5]`. The append adds `1` to the second box. The first list stays as it was.

### 3. Equal values, separate lists

```text
True False
```

The list was already in ascending order, so the two lists compare equal. They still have separate identities. A prediction of `True True` would assume that `sorted()` reuses its input when no rearrangement is needed.

### 4. The key doesn't include alphabetical order

```text
['a', 'fig', 'pear', 'plum', 'kiwi']
['pear', 'fig', 'plum', 'kiwi', 'a']
```

The keys are `4, 3, 4, 4, 1`. Within the length-four group, `pear` arrived before `plum`, which arrived before `kiwi`. That sequence survives. Predicting `kiwi, pear, plum` adds an alphabetical tie-breaker that the code never requested. The second printed line checks that `words` kept its input order.

### 5. Reversing flips the tied group too

```text
['pear', 'plum', 'kiwi', 'fig', 'a']
['kiwi', 'plum', 'pear', 'fig', 'a']
```

Both results have lengths `4, 4, 4, 3, 1`. In `descending`, the tied words remain `pear, plum, kiwi`. The whole-list reversal in `flipped` turns that group around too. Checking only the lengths would miss the difference.

### 6. The last pass groups by rank

```text
['elm', 'fir', 'yew', 'oak', 'ash']
['fir', 'yew', 'ash', 'elm', 'oak']
```

After the minutes pass, the three-minute tickets appear as `elm, fir, yew`. This is the input order for the rank pass. That second pass places `fir, yew, ash` in rank one and `elm, oak` in rank two. Within each rank, the minutes order survives. `fir` stays before `yew` because both their rank and minutes tie.

Here, rank is the primary key and minutes is the secondary key. To get the requested order, sort by **minutes first, rank last**. The second pass can keep the first pass's work because it's stable.

### 7. Sorting didn't clone the rows

```text
[[8, 80], [9, 30]]
[[9, 30], [8, 80]]
False True
```

`ordered[0]` and `rows[1]` reach the same row. Changing its first element from `3` to `9` is visible through both paths. The outer lists retain their separate arrangements, so `ordered` now starts with `9`, then `8`. The earlier sort doesn't run again when the row changes.

A separate outer list can still share mutable items with its input. For more practice tracing nested mutation and replacement, use the [Python shallow vs deep copy worksheet](/blog/python-shallow-vs-deep-copy-practice/).

## Turn a wrong prediction into a small recall prompt

Keep the code that exposed your mistake, then ask for the missing distinction:

| Missed question | Prompt to answer without running code |
| --- | --- |
| 1 | After `result = values.sort()`, what does each name refer to? |
| 2–3 | Which names share a list after `values = sorted(values)`? |
| 4–5 | With equal length keys, which order survives `reverse=True`? |
| 6 | Which key must the final pass use for rank-first ordering? |
| 7 | Which original row can `ordered[0][0] = 9` still change? |

Put the relevant output and one sentence explaining it on the answer side. Later, change the input order or a key and predict again. Keep enough code to reconstruct the result: memorizing a list of words won't help you trace a different program.

*Production note: AI tools researched, drafted, edited, and illustrated this article. Automated checks executed the worked example and all seven question programs using CPython 3.14.7. The official Python 3.14 documentation was consulted on November 3, 2026.*
