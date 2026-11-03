---
title: "Python Negative Slicing: Practice Start, Stop, and Step"
description: "Predict Python slices with negative steps, omitted bounds, and empty results. Check eight original exercises against executed Python outputs."
date: "2026-11-03"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/09deb2003450b9291b6df1117b5e1e8c3121a46040ba65848e86e017b7c6f786.webp"
keywords:
  - "Python negative slicing"
  - "negative step slicing"
  - "Python slicing practice"
  - "Python slice omitted stop vs -1"
---

`values[-3:]` moves forward. `values[3::-1]` moves backward. A negative bound counts from the end; a negative step moves toward the beginning. Keeping those jobs separate makes Python negative slicing easier to trace.

Write the selected indexes before the values. The worked trace below shows how, then eight independent exercises test negative bounds, omitted stops, clipping, and errors. Predict each printed line before opening the answers.

![A person returns from a garden gate along a row of spaced stepping stones](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/09deb2003450b9291b6df1117b5e1e8c3121a46040ba65848e86e017b7c6f786.webp)

## Give start, stop, and step separate jobs

For built-in lists and strings, `sequence[start:stop:step]` selects values without changing the input. The stop is excluded. If you leave out the step, it is `1`.

| Part | Job |
| --- | --- |
| `start` | First candidate index |
| `stop` | Excluded boundary in the traversal direction |
| `step` | Amount added to the index each time |

An explicit negative bound counts from the end: on a sequence of length eight, `-2` refers to index `6`. It doesn't choose a direction. After resolving the bounds, a positive step keeps indexes less than the stop; a negative step keeps indexes greater than it. If the start already fails that condition, the result is empty. The [Python sequence reference](https://docs.python.org/3.14/library/stdtypes.html#common-sequence-operations) specifies these rules.

Missing bounds depend on the step's sign:

| Step | Omitted start | Omitted stop |
| --- | --- | --- |
| Positive | Index `0` | Boundary just after the last item |
| Negative | Last index | Boundary just before index `0` |

For out-of-range explicit bounds, first add the sequence length to negative bounds, then clip them. For a positive step, the allowed boundary range is `0` through the length. For a negative step, it is `-1` through the last index. Those endpoints can be boundaries outside the items; they aren't always indexes you can read. Exercise 6 uses both directions.

## Trace one backward slice

```python
letters: list[str] = ["a", "b", "c", "d", "e", "f", "g", "h"]
print(letters[-2:1:-2])
```

First put both index labels beside each value:

| Value | a | b | c | d | e | f | g | h |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| Negative index | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 |

Normalize the start: `8 + (-2) = 6`. The stop is already `1`; the step stays `-2`.

| Candidate index | Greater than stop 1? | Action |
| --- | --- | --- |
| 6 | Yes | Take `g` |
| 4 | Yes | Take `e` |
| 2 | Yes | Take `c` |
| 0 | No | Stop |

Output:

```text
['g', 'e', 'c']
```

The stop doesn't need to appear in the stepping sequence. Index `1` is still the boundary even though subtracting two never lands on it.

For another slice, reuse this small worksheet: **length → normalized bounds → step → candidate indexes → values**. Check the boundary before taking each candidate.

## An omitted stop is different from -1

With a negative step, leaving out the stop lets traversal continue through index `0`. Writing `-1` explicitly names the last element's index as the excluded boundary.

```python
values: list[int] = [10, 20, 30, 40, 50]
print(values[3::-1])
print(values[3:-1:-1])
```

Output:

```text
[40, 30, 20, 10]
[]
```

For the second line, explicit `-1` becomes `5 - 1 = 4`. Starting at `3` and moving backward cannot produce an index greater than `4`, so nothing is selected.

### Ask Python for the index trace

The [slice constructor](https://docs.python.org/3.14/library/functions.html#slice) lets you store the same selection as an object. `None` represents an omitted part. Its [indices(length) method](https://docs.python.org/3.14/reference/datamodel.html#slice.indices) accounts for missing and out-of-range bounds. Pass the returned integers to `range()` to see the selected indexes:

```python
values: list[int] = [10, 20, 30, 40, 50]
selection: slice = slice(3, None, -1)
start: int
stop: int
step: int
start, stop, step = selection.indices(len(values))

print((start, stop, step))
print(list(range(start, stop, step)))
print(values[selection])
print(values[start:stop:step])
```

Output:

```text
(3, -1, -1)
[3, 2, 1, 0]
[40, 30, 20, 10]
[]
```

That normalized stop of `-1` is a boundary before index `0` for the range. **Don't put the normalized triple back inside slicing brackets.** Brackets interpret that explicit `-1` as a negative bound again, producing the empty result on the last line. Keep the original `selection` for slicing and use its normalized triple for `range()`.

## Predict eight programs

Each program starts fresh. String results use `repr()` so an empty string appears as `''`. These exercises select list and string values only; they don't cover slice assignment or NumPy.

### 1. Negative bounds, forward direction

```python
values: list[int] = [2, 4, 6, 8, 10, 12]
print(values[-4:-1])
print(values[-1:-4])
```

### 2. The step chooses the direction

```python
word: str = "planet"
print(repr(word[4:1:-1]))
print(repr(word[1:4:-1]))
```

### 3. Where does an omitted start begin?

```python
word: str = "abcdefg"
print(repr(word[::-2]))
print(repr(word[-2::-2]))
```

### 4. Stop at zero or go through zero

```python
values: list[int] = [10, 20, 30, 40, 50]
print(values[4:0:-2])
print(values[4::-2])
```

### 5. An explicit last-element boundary

```python
values: list[int] = [6, 9, 12, 15, 18]
print(values[-1:-1:-1])
print(values[-1:0:-1])
```

### 6. Bounds outside the string

```python
word: str = "stapler"
print(repr(word[99:-99:-3]))
print(repr(word[-99:99:3]))
```

### 7. The second slice gets new indexes

```python
values: list[int] = [10, 20, 30, 40, 50, 60, 70, 80]
print(values[1:7:2][::-1])
print(values[6:0:-2])
```

### 8. Empty result or error?

```python
values: list[int] = [4, 8, 12]
print(values[50:60])

try:
    print(values[50])
except IndexError as error:
    print(type(error).__name__, str(error))

try:
    print(values[::0])
except ValueError as error:
    print(type(error).__name__, str(error))
```

## Answers and the indexes behind them

### 1. The bounds don't reverse traversal

```text
[6, 8, 10]
[]
```

Length six turns `-4:-1` into `2:5`. With step `1`, select indexes `2, 3, 4`. The second slice starts at `5` with stop `2`; it has no forward candidates.

### 2. Check the first candidate

```text
'ena'
''
```

The first slice selects indexes `4, 3, 2`. For the second, starting index `1` already fails the negative-step condition `index > 4`.

### 3. Starting one place earlier changes every pick

```text
'geca'
'fdb'
```

For a negative step, omitted start begins at the last index: `6`. The first slice visits `6, 4, 2, 0`. Explicit `-2` starts at `5`, giving `5, 3, 1`.

### 4. Zero is excluded when it's the stop

```text
[50, 30]
[50, 30, 10]
```

Stop `0` permits indexes `4, 2`. Omitted stop also permits `0`, so the second slice includes `10`.

### 5. Equal bounds select nothing

```text
[]
[18, 15, 12, 9]
```

Both explicit `-1` bounds become `4`. The first candidate fails `4 > 4`. The second line visits `4, 3, 2, 1`, stopping before `0`.

### 6. Clipping depends on the direction

```text
'rps'
'spr'
```

For the backward slice, the bounds normalize to `6, -1`, with step `-3`: select `6, 3, 0`. For the forward slice, they normalize to `0, 7`, with step `3`: select `0, 3, 6`. Oversized slice bounds are clipped rather than used as scalar indexes.

### 7. Chaining changes the sequence being indexed

```text
[60, 40, 20]
[70, 50, 30]
```

The first selection produces `[20, 40, 60]`; reversing that result gives the first line. The second line selects original indexes `6, 4, 2`. It starts at `70`, so it isn't another spelling of the first expression.

### 8. Clipping doesn't make every operation valid

```text
[]
IndexError list index out of range
ValueError slice step cannot be zero
```

The slice has no selected indexes. Scalar indexing asks for one actual item, so index `50` raises `IndexError`. A zero step raises `ValueError`; it doesn't mean an empty selection.

## Keep the distinction you missed

If question 4 caught you, save a small recall prompt: “Given `values = [10, 20, 30, 40, 50]`, predict `values[4:0:-2]` and `values[4::-2]`, including their indexes.” Keep both outputs and the excluded-zero explanation on the answer side. Change the length or step when you retry so you practice tracing rather than memorize one list.

For a related copy question, a list slice makes a new outer list while keeping references to its items. The [shallow vs deep copy worksheet](/blog/python-shallow-vs-deep-copy-practice/) explores what happens with nested mutable items. To practice ordering by values or keys, try the [Python sort() vs sorted() exercises](/blog/python-sort-vs-sorted-practice/).

*Production note: AI tools researched, drafted, and edited this article and generated its illustration. Automated checks executed every Python code block using CPython 3.14.7. The official Python 3.14 documentation was consulted on November 3, 2026.*
