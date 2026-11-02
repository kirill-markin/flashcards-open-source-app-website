---
title: "Matrix Multiplication Practice: Dimensions, Entries, and Order"
description: "Practice matrix multiplication with worked answers: check dimensions, calculate row-by-column entries, and see when reversing the order changes the result."
date: "2026-11-02"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/302ba96626dbe552ce0f54d46328f7e9c4e13cddd0239cde162e014a7fae18e2.webp"
keywords:
  - "matrix multiplication practice"
  - "matrix multiplication dimensions"
  - "AB vs BA"
  - "row by column multiplication"
---

A product of two matrices can have the right dimensions and still contain the wrong numbers. Checking the shape catches one kind of mistake. Checking which row and column produced an entry catches another.

This matrix multiplication practice worksheet separates those checks. Try seven original exercises covering rectangular products, an order that doesn't exist, and square products whose shapes match but whose entries disagree. The worked answers show every requested calculation. Use paper so you can keep the row and column selections beside your arithmetic.

![A printmaker compares two prints with an indigo circle and ochre stripe overlaid in opposite orders](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/302ba96626dbe552ce0f54d46328f7e9c4e13cddd0239cde162e014a7fae18e2.webp)

## Check dimensions before calculating

A matrix's dimensions are written **rows × columns**. For `AB`, the number of columns in `A` must equal the number of rows in `B`. The answer keeps the number of rows from `A` and the number of columns from `B`:

```text
A             B               AB
m x n         n x p           m x p
    ^         ^
    These must match.
```

Each entry of `AB` comes from one row of `A` and one column of `B`: multiply corresponding numbers, then add. Entry `(i, j)` uses row `i` and column `j`, counting from 1. Georgia Tech's [Interactive Linear Algebra chapter on matrix multiplication](https://textbooks.math.gatech.edu/ila/matrix-multiplication.html) explains this row-column rule and how matrix products represent combinations of linear transformations.

Before doing arithmetic, draw an empty answer with its predicted shape. For a `2 × 3` answer, that means two rows with three spaces each. Fill one row at a time: keep the same row of the left matrix while moving across the columns of the right matrix.

### One worked example

Calculate `WX`:

```text
W = [ 2  -1   3 ]     X = [  1   2 ]
    [ 0   4   1 ]         [  3   0 ]
                          [ -2   5 ]
```

The dimensions are `(2 × 3)(3 × 2)`, so `WX` is `2 × 2`. Its top-right entry uses row 1 of `W` and column 2 of `X`:

```text
(2)(2) + (-1)(0) + (3)(5) = 4 + 0 + 15 = 19
```

Calculate the other three positions in the same way:

```text
(1,1): (2)(1) + (-1)(3) + (3)(-2) = -7
(2,1): (0)(1) + (4)(3) + (1)(-2)  = 10
(2,2): (0)(2) + (4)(0) + (1)(5)   = 5

WX = [ -7  19 ]
     [ 10   5 ]
```

Each entry has three multiplication terms because the selected row and column each contain three numbers. If you've written only two terms, check for a missing pair.

## Seven matrix multiplication exercises

Try these before reading the answers. Write the dimension check for every requested product. If a product doesn't exist, identify the dimensions that fail to match. Each exercise defines its own matrices; `A` and `B` can change between questions.

### 1. Predict the shape

For each pair, decide whether `AB` and `BA` exist. Give the dimensions of every product that exists. No entries are needed.

| Pair | Dimensions of A | Dimensions of B |
| --- | --- | --- |
| a | `2 × 3` | `3 × 4` |
| b | `3 × 2` | `2 × 3` |
| c | `2 × 2` | `2 × 2` |

### 2. Find two entries without doing everything

Let `C = AB`. Find entries `(2, 3)` and `(3, 2)` of `C`. Write the chosen row and column for each.

```text
A = [  1   2 ]     B = [ 2   0   5 ]
    [ -3   4 ]         [ 1  -2   3 ]
    [  0  -1 ]
```

### 3. Compute a rectangular product

Find `AB`. Then give the dimensions of `BA` without calculating its entries.

```text
A = [ 1   2  -1 ]     B = [  2   1 ]
    [ 3   0   2 ]         [ -1   4 ]
                          [  3  -2 ]
```

### 4. Only one order works

Find `Cd`. Does `dC` exist?

```text
C = [ 2   0  -1 ]     d = [  4 ]
    [ 1   3   2 ]         [ -2 ]
                          [  5 ]
```

### 5. Both orders work, with different shapes

Find `rs` and `sr`. Keep brackets around the `1 × 1` matrix.

```text
r = [ 1  -2   3 ]     s = [  2 ]
                          [  0 ]
                          [ -1 ]
```

### 6. Same shape, different answer

Calculate `AB` and `BA`. Do these particular matrices commute, meaning `AB = BA`?

```text
A = [ 1   2 ]     B = [ 2   0 ]
    [ 0   1 ]         [ 3   1 ]
```

### 7. Diagnose a shape-correct answer

Someone multiplies numbers in matching positions and reports `R` as `PQ`. Is the answer correct? Repair all four entries.

```text
P = [ 2  -1 ]     Q = [  4   2 ]
    [ 3   0 ]         [ -2   5 ]

R = [  8  -2 ]
    [ -6   0 ]
```

## Answers with the calculations visible

### 1. Reverse the dimension check too

For pair a, `AB` exists: `(2 × 3)(3 × 4)` gives `2 × 4`. But `BA` would be `(3 × 4)(2 × 3)`. Its inner dimensions, 4 and 2, don't match, so `BA` is undefined.

For pair b, both products exist:

```text
AB: (3 x 2)(2 x 3) gives 3 x 3
BA: (2 x 3)(3 x 2) gives 2 x 2
```

For pair c, both products are `2 × 2` because both checks are `(2 × 2)(2 × 2)`. This establishes that the multiplications are allowed. Without entries, it doesn't establish that their results are equal.

### 2. The position chooses the inputs

`AB` is `3 × 3`. Entry `(2, 3)` uses row 2 of `A`, `[-3, 4]`, and column 3 of `B`, `[5, 3]`. Entry `(3, 2)` uses row 3, `[0, -1]`, and column 2, `[0, -2]`:

```text
(2,3): (-3)(5) + (4)(3)  = -15 + 12 = -3
(3,2): (0)(0) + (-1)(-2) = 0 + 2    = 2
```

The row number comes first. Reversing the position numbers selects different inputs and can change the answer.

### 3. Four entries, three pairs in each

The dimension check is `(2 × 3)(3 × 2)`, so `AB` is `2 × 2`:

```text
(1,1): (1)(2) + (2)(-1) + (-1)(3)  = -3
(1,2): (1)(1) + (2)(4) + (-1)(-2)  = 11
(2,1): (3)(2) + (0)(-1) + (2)(3)   = 12
(2,2): (3)(1) + (0)(4) + (2)(-2)   = -1

AB = [ -3  11 ]
     [ 12  -1 ]
```

`BA` also exists: `(3 × 2)(2 × 3)` gives `3 × 3`. Its different dimensions already rule out equality with `AB`.

### 4. A failed product has no entries to calculate

`Cd` has dimensions `(2 × 3)(3 × 1)`, giving `2 × 1`:

```text
(1,1): (2)(4) + (0)(-2) + (-1)(5) = 3
(2,1): (1)(4) + (3)(-2) + (2)(5)  = 8

Cd = [ 3 ]
     [ 8 ]
```

`dC` would have dimensions `(3 × 1)(2 × 3)`. The inner dimensions are 1 and 2, so it is undefined. Writing a zero matrix would be a different answer: zero entries can occur in a valid product, but this multiplication isn't defined.

### 5. A single entry versus nine entries

For `rs`, the dimensions are `(1 × 3)(3 × 1)`, giving `1 × 1`:

```text
rs = [ (1)(2) + (-2)(0) + (3)(-1) ] = [ -1 ]
```

For `sr`, the dimensions are `(3 × 1)(1 × 3)`, giving `3 × 3`. Each entry has just one multiplication term:

```text
sr = [ (2)(1)   (2)(-2)   (2)(3)  ]
     [ (0)(1)   (0)(-2)   (0)(3)  ]
     [ (-1)(1)  (-1)(-2)  (-1)(3) ]

   = [  2  -4   6 ]
     [  0   0   0 ]
     [ -1   2  -3 ]
```

The same six input numbers produce two differently shaped matrices. Order controls which rows meet which columns.

### 6. Equal dimensions don't guarantee equal products

Both dimension checks are `(2 × 2)(2 × 2)`. For `AB`:

```text
(1,1): (1)(2) + (2)(3) = 8
(1,2): (1)(0) + (2)(1) = 2
(2,1): (0)(2) + (1)(3) = 3
(2,2): (0)(0) + (1)(1) = 1

AB = [ 8  2 ]
     [ 3  1 ]
```

Reverse the inputs for `BA`:

```text
(1,1): (2)(1) + (0)(0) = 2
(1,2): (2)(2) + (0)(1) = 4
(2,1): (3)(1) + (1)(0) = 3
(2,2): (3)(2) + (1)(1) = 7

BA = [ 2  4 ]
     [ 3  7 ]
```

The top-left entries, 8 and 2, already disprove equality. These matrices don't commute. Matrix multiplication is **not commutative in general**; some particular pairs do commute. “The products are always different” would be too strong.

### 7. The shape passes; the method fails

`R` is the elementwise product: each entry multiplies only the numbers in the same position. Ordinary matrix multiplication combines a complete row and column:

```text
(1,1): (2)(4) + (-1)(-2) = 10
(1,2): (2)(2) + (-1)(5)  = -1
(2,1): (3)(4) + (0)(-2)  = 12
(2,2): (3)(2) + (0)(5)   = 6

PQ = [ 10  -1 ]
     [ 12   6 ]
```

Both `R` and `PQ` are `2 × 2`, so a shape check can't distinguish them. Recomputing the top-left entry reveals the wrong operation.

## Review the decision you missed

Label each miss: dimensions, row/column selection, arithmetic, reversed order, or elementwise multiplication. Retry that exercise on blank paper.

For a short recall prompt, ask: “`A` is `2 × 3` and `B` is `3 × 4`. Does `BA` exist?” Answer: “No. Its inner dimensions are 4 and 2.” Another useful prompt is: “What produces entry `(2, 3)` of `AB`?” Answer: “Row 2 of `A` multiplied by column 3 of `B`, pairing corresponding entries and adding their products.” Apply that answer to exercise 2 with the numbers visible.

For short review between paper problems, the [matrix multiplication flashcards](/catalog/packages/matrix-multiplication-flashcards/) cover dimension checks, row-by-column entries, and `AB` versus `BA`, with explained answers.

The [math flashcards guide](/blog/how-to-use-flashcards-for-math/) explains how to keep these reusable decisions separate from full solutions. Keep full matrix products in your practice too: knowing the rule and carrying out every entry are different tasks.

*This worksheet was drafted and edited with AI assistance; the illustration was AI-generated. Its numerical products were checked with Python calculations.*
