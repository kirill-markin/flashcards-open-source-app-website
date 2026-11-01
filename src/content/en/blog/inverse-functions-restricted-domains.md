---
title: "Inverse Functions with Restricted Domains: Practice and Answers"
description: "Practice inverse functions with restricted domains. Choose the square-root branch, carry interval endpoints, and catch wrong inverses with worked answers."
date: "2026-11-01"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/7cf1389e324a80f54df493809d0fc7b3cddc1bb68692138973a449f18b0e8d44.webp"
keywords:
  - "inverse functions with restricted domains"
  - "inverse of a quadratic function"
  - "restrict domain inverse function"
  - "inverse function practice"
  - "inverse domain and range"
---

For f(x) = (x − 2)² + 1 restricted to x ≤ 2, solving for x gives two candidates: 2 + √(t − 1) and 2 − √(t − 1). Only the minus branch returns an allowed original input. At output 5, the inverse must return 0, not 4.

That choice becomes easier when you carry the original domain through the calculation. Work through the branch check below, then try eight inverse-function problems with full answers. All functions, inputs, and square roots here are real; √ means the nonnegative square root.

![A woman returns from a shared canal landing along an open garden path while a gate closes the other branch](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/7cf1389e324a80f54df493809d0fc7b3cddc1bb68692138973a449f18b0e8d44.webp)

## An inverse needs one way back

A function is **one-to-one** when different allowed inputs give different outputs. Its inverse sends each output back to the input that produced it. [OpenStax's definition of inverse functions](https://openstax.org/books/calculus-volume-1/pages/1-4-inverse-functions) gives these two checks:

```text
f⁻¹(f(x)) = x    for every x in the domain of f
f(f⁻¹(t)) = t    for every t in the range of f
```

The inverse's domain is f's range; its range is f's domain. Here, “range” means outputs actually attained. A **codomain** is a declared target set, which may be larger. We find inverses on the attained range; an inverse on an entire declared codomain would also require f to reach every member of that set.

The notation f⁻¹ means “f inverse.” The reciprocal, 1/f(x), is a different operation.

On all real inputs, a quadratic repeats outputs on opposite sides of its vertex. A horizontal line through a repeated output meets the graph twice, so the function fails the horizontal line test. Restricting it to either whole arm makes it one-to-one, as explained in [Waterloo's lesson on quadratic inverses](https://courseware.cemc.uwaterloo.ca/44/assignments/1196/5). A smaller interval on one arm works too. The [University of Toronto's restricted-domain example](https://users.math.utoronto.ca/preparing-for-calculus/4_functions/we_4_inverse.html) shows how the original sign restriction determines the square-root choice.

## Choose the branch from the original inputs

Take the opening function:

```text
f(x) = (x − 2)² + 1,    x ≤ 2
Domain of f: (−∞, 2]
Range of f: [1, ∞)
```

The minimum output is 1 at x = 2. Moving left from 2 increases the squared distance without bound. To recover an input from an output t, solve:

```text
t = (x − 2)² + 1
(x − 2)² = t − 1
x − 2 = ±√(t − 1)
```

The ± expression describes both solutions to the quadratic equation before applying the restriction. Keeping both gives the **inverse relation of the unrestricted parabola**, with two outputs for each t > 1. Our restricted function permits only one of those original inputs.

Since x ≤ 2, we need x − 2 ≤ 0. Choose the negative square root:

```text
f⁻¹(t) = 2 − √(t − 1)
Domain of f⁻¹: [1, ∞)
Range of f⁻¹: (−∞, 2]
```

The inverse outputs original inputs. That's the branch test: does the proposed formula return values on the permitted side of 2?

### A formula-only check can hide the wrong branch

Call the correct candidate g₋(t) = 2 − √(t − 1), and the rejected candidate g₊(t) = 2 + √(t − 1), both defined for t ≥ 1. Substituting either expression into the polynomial expression (x − 2)² + 1 gives:

```text
(g₋(t) − 2)² + 1 = t
(g₊(t) − 2)² + 1 = t    for t ≥ 1
```

But for t > 1, g₊(t) > 2. The restricted f cannot accept that input. **The composition f(g₊(t)) is undefined for t > 1.** The polynomial simplification evaluates the same expression outside f's permitted domain; it doesn't establish a valid composition. At t = 1, both candidates return the vertex 2, and f(g₊(1)) = 1 is defined.

The other order exposes the wrong return value directly:

```text
f(0) = 5
g₊(f(0)) = g₊(5) = 4 ≠ 0
```

For the correct inverse, check both orders with their own domains:

```text
f(g₋(t)) = (−√(t − 1))² + 1 = t,    t ≥ 1

g₋(f(x)) = 2 − √((x − 2)²)
           = 2 − |x − 2|
           = 2 − (2 − x)
           = x,                       x ≤ 2
```

The absolute value matters: **√(u²) = |u|**, not always u. On x ≤ 2, |x − 2| = 2 − x. Each composition also has valid intermediate values: g₋ returns something ≤ 2, and f returns something ≥ 1.

## Half-open intervals survive the swap

Now restrict the same formula further, to **−1 ≤ x < 2**. It decreases throughout that interval. The included endpoint −1 produces 10; approaching the excluded endpoint 2 produces values approaching 1, without reaching it.

```text
f(x) = (x − 2)² + 1,    x in [−1, 2)
Range of f: (1, 10]

f⁻¹(t) = 2 − √(t − 1),    t in (1, 10]
Range of f⁻¹: [−1, 2)
```

The inverse formula hasn't changed. Its domain has. Although its radical is real for every t ≥ 1, this inverse accepts only **1 < t ≤ 10**. The original restricted function never produced 1 or anything above 10.

Check the endpoints by their values, not by copying brackets left to right: f⁻¹(10) = −1 is included. Substituting 1 into the radical expression gives 2, but both are excluded from the relevant intervals, so f⁻¹(1) is undefined. Square brackets include an endpoint; parentheses exclude it. Infinity always takes a parenthesis.

The composition identities now hold on these smaller sets: f⁻¹(f(x)) = x for x in [−1, 2), and f(f⁻¹(t)) = t for t in (1, 10]. The identities don't extend the domains.

This is also why [equation-domain checks](/blog/logarithmic-equations-practice/) and inverse-domain checks need different questions. A real radical tells you where an expression exists. An inverse must additionally accept exactly the original function's attained outputs.

## A downward parabola can need the plus branch

Consider h(x) = 5 − 2(x + 1)² on x ≥ −1. Its vertex is (−1, 5), and its outputs decrease from 5 without a lower bound.

```text
t = 5 − 2(x + 1)²
(x + 1)² = (5 − t)/2
x + 1 = √((5 − t)/2),    because x + 1 ≥ 0

h⁻¹(t) = −1 + √((5 − t)/2)
Domain of h⁻¹: (−∞, 5]
Range of h⁻¹: [−1, ∞)
```

For example, h(1) = −3 and h⁻¹(−3) = −1 + √4 = 1. The original domain is [−1, ∞), and its range is (−∞, 5], exactly the inverse's range and domain in reverse order. A negative leading coefficient changes which outputs are possible. **The chosen side of the vertex determines the square-root sign.** Here the right-hand arm needs plus, even though the parabola opens downward.

## Try eight restricted-domain inverse problems

For each invertible function, give the inverse formula, its domain, and its range. Keep exact square roots. For problem 5, explain why an inverse function doesn't exist on the given domain. For problem 7, repair the proposed answer.

1. a(x) = (x + 3)² − 4, with x ≥ −3.
2. b(x) = 2(x − 1)² + 3, with x ≤ 1.
3. c(x) = 7 − 3(x − 2)², with x ≤ 2.
4. d(x) = (x + 1)² − 2, with x in (−1, 2].
5. e(x) = (x − 3)², with x in [1, 4].
6. r(x) = 3 − √(x + 2), with x in [−2, 7).
7. m(x) = 4(x + 2)² − 5, with x ≥ −2. A proposed inverse is −2 − √((t + 5)/4), for t ≥ −5.
8. p(x) = x² − 6x + 13, with x ≥ 4.

## Worked answers

### 1. The right-hand arm

**a⁻¹(t) = −3 + √(t + 4)**, with domain [−4, ∞) and range [−3, ∞).

Solving (x + 3)² = t + 4 gives x + 3 = ±√(t + 4). Since x + 3 ≥ 0, take plus. The original minimum is −4 at x = −3, so its range supplies the inverse domain. As a check, a(−1) = 0 and a⁻¹(0) = −3 + 2 = −1.

### 2. A coefficient inside the radical

**b⁻¹(t) = 1 − √((t − 3)/2)**, with domain [3, ∞) and range (−∞, 1].

Subtract 3 and divide by 2 before taking the square root: (x − 1)² = (t − 3)/2. The restriction makes x − 1 nonpositive, so choose minus. The minimum output is 3. For x = −1, b(−1) = 11; the inverse returns 1 − √4 = −1.

### 3. Downward and on the left

**c⁻¹(t) = 2 − √((7 − t)/3)**, with domain (−∞, 7] and range (−∞, 2].

Rearrange to (x − 2)² = (7 − t)/3. Here x − 2 ≤ 0, so take minus. The original maximum is 7, attained at 2. Check c(0) = −5, then c⁻¹(−5) = 2 − √4 = 0. Compare this minus sign with the plus sign in the downward-parabola example above: the chosen arm changed.

### 4. An excluded vertex and an included outer endpoint

**d⁻¹(t) = −1 + √(t + 2)**, with domain (−2, 7] and range (−1, 2].

On this interval x + 1 > 0, so the plus branch applies. As x approaches −1 from above, d(x) approaches −2 without reaching it. At x = 2, d(x) = 7 is attained. Thus t = −2 is excluded and t = 7 is included. For an interior check, d(0) = −1 and d⁻¹(−1) = 0.

### 5. Crossing the vertex repeats an output

**No inverse function exists on [1, 4].** Both 2 and 4 lie in the domain, and e(2) = e(4) = 1. An inverse would have to send input 1 to two different outputs.

The range is [0, 4], but swapping sets alone doesn't produce an inverse function. One repair is to restrict the original domain to [1, 3]. Then the inverse is 3 − √t on [0, 4], with range [1, 3]. A quadratic equation's root count and a function's one-to-one property are related but distinct; [discriminant practice](/blog/discriminant-practice/) covers the former.

### 6. Squaring doesn't erase the inherited restriction

**r⁻¹(t) = (3 − t)² − 2**, with domain (0, 3] and range [−2, 7).

From t = 3 − √(x + 2), obtain √(x + 2) = 3 − t, then square. On the original domain, √(x + 2) runs from 0 inclusive to 3 exclusive. Therefore r's outputs run through (0, 3]. The inverse is a polynomial expression, but its domain is still (0, 3].

Check r(2) = 1 and r⁻¹(1) = 2. Extending the inverse formula to t = 4 would give −1, yet r(−1) = 2, not 4. Squaring hid the required sign 3 − t ≥ 0.

### 7. Repair the branch

**m⁻¹(t) = −2 + √((t + 5)/4)**, with domain [−5, ∞) and range [−2, ∞).

The proposed domain was correct: m's minimum is −5. Its sign was wrong. Since x + 2 ≥ 0, solving (x + 2)² = (t + 5)/4 requires plus. For x = 0, m(0) = 11. The proposed minus formula returns −4, outside m's domain; the corrected formula returns 0.

### 8. The domain starts beyond the vertex

**p⁻¹(t) = 3 + √(t − 4)**, with domain [5, ∞) and range [4, ∞).

Complete the square: p(x) = (x − 3)² + 4. Since x ≥ 4, x − 3 ≥ 1, so choose plus. The smallest allowed input is 4, giving the smallest output 5. The inverse domain starts at 5, even though its radical is real from 4 onward. Check p(5) = 8 and p⁻¹(8) = 5.

## Recall a decision, then solve a fresh problem

Use a short prompt for a decision you missed. Keep the complete algebra in written practice; the guide to [using flashcards for math](/blog/how-to-use-flashcards-for-math/) explains that division of work.

| Prompt | Answer |
| --- | --- |
| On x ≤ v, which branch recovers x from (x − v)² = U? | x = v − √U, with U ≥ 0. |
| What sets the inverse's domain? | The original restricted function's attained range. |
| What does √((x − v)²) simplify to? | \|x − v\|. Apply the original restriction before removing the absolute value. |
| Where must both identities hold? | f⁻¹(f(x)) = x on f's domain; f(f⁻¹(t)) = t on f's range, with valid intermediate inputs. |

Now find the inverse of **q(x) = 9 − (x − 4)² on [1, 4)**. State both intervals before checking the answer.

The function increases from q(1) = 0 toward 9, which it never reaches. Its range is [0, 9). Solving gives (x − 4)² = 9 − t; x < 4 selects the minus branch. Thus **q⁻¹(t) = 4 − √(9 − t)**, with domain [0, 9) and range [1, 4). Check q(2) = 5 and q⁻¹(5) = 2. At the included endpoint, q⁻¹(0) = 1. Substituting the excluded output 9 into the expression would return the excluded input 4.

*Preparation note: This article was written and edited with substantial AI assistance. The worked examples and exercises are original. Kirill Markin owns Nibomo.*
