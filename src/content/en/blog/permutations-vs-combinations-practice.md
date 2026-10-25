---
title: "Permutations vs Combinations: Practice with Order and Repeats"
description: "Practice permutations vs combinations by defining outcomes, checking repeats, and solving explained problems on teams, roles, codes, and repeated letters."
date: "2026-10-23"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/194ed0e5f0b7c3922b9e37666c6878d17f402a3e0ebeae11294d97ef1287a137.webp"
keywords:
  - "permutations vs combinations"
  - "permutations and combinations practice"
  - "order matters"
  - "permutations with repetition"
  - "combinations examples"
  - "repeated letters"
---

Four people can fill two different roles in **12 ways**, but form a two-person team in only **six ways**. The people haven't changed. What counts as a different result has: swapping the two role holders changes the assignment; listing the same teammates in the opposite order changes nothing.

For permutations vs combinations, start by defining one complete outcome. Then check what changes that outcome and whether a choice can repeat. The tables below show exactly when dividing by a factorial works, including two different ways to handle repeated symbols.

These are invented counting problems with explicit rules. All practice questions have worked answers on this page.

![A woman rearranges four wooden folding chairs, two green and two red, while keeping the same set of chairs](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/194ed0e5f0b7c3922b9e37666c6878d17f402a3e0ebeae11294d97ef1287a137.webp)

## Decide what you're counting before choosing a formula

Suppose A, B, C, and D are four different people. An outcome for two roles might be “A is coordinator, B is recorder.” An outcome for a team is simply “A and B are selected.”

Use three checks:

1. **Write one valid outcome.** Include everything the question distinguishes: people, positions, roles, or a required lead.
2. **Swap two different selected items.** If the swap creates a different valid outcome, order or role assignment matters. If it describes the same result, it shouldn't be counted again. Check restrictions too: some swaps may be forbidden.
3. **Check reuse and restrictions.** Can the same person or symbol appear twice? Must the first digit be nonzero? Are you arranging a fixed collection of letters?

An ordered selection of distinct items without reuse is counted by a **permutation**. An unordered selection of distinct items without reuse is counted by a **combination**. Reusable symbols and identical items need their own checks; the word “repetition” alone doesn't tell you which calculation applies.

“Order matters” refers to the final result. Choosing A before B doesn't create a different team from choosing B before A. Giving A the coordinator role and B the recorder role does create a different assignment from reversing their roles.

## See all 12 sequences become six teams

Choose two different letters from A, B, C, and D. In an ordered result, AB and BA are different. There are four choices for the first position and three for the second:

**4 × 3 = 12 ordered outcomes.**

Now ignore order. Each row below is one unordered pair; its two sequences describe that same pair.

| Unordered pair | Ordered outcomes grouped together | Group size |
| --- | --- | ---: |
| A and B | AB, BA | 2 |
| A and C | AC, CA | 2 |
| A and D | AD, DA | 2 |
| B and C | BC, CB | 2 |
| B and D | BD, DB | 2 |
| C and D | CD, DC | 2 |

Every group has exactly two members, so **12 / 2 = 6 unordered pairs**. Division works because every desired pair appears in exactly two counted sequences.

For k different selected items, there are k! orders. The exclamation mark means factorial: **3! = 3 × 2 × 1 = 6**, and **0! = 1**. This gives the standard formulas for choosing k items from n distinct items without reuse:

| Result being counted | Formula | Four items, choose two |
| --- | --- | ---: |
| Ordered selection | P(n, k) = n! / (n − k)! | P(4, 2) = 12 |
| Unordered selection | C(n, k) = n! / (k! × (n − k)!) | C(4, 2) = 6 |

C(n, k) is a binomial coefficient, read “n choose k.” Calculators may label these operations nPr and nCr. For these formulas, n and k are whole numbers with 0 ≤ k ≤ n. [OpenStax's permutation lesson](https://openstax.org/books/contemporary-mathematics/pages/7-2-permutations) covers ordered selections; its [combination lesson](https://openstax.org/books/contemporary-mathematics/pages/7-3-combinations) explains the division by k!.

## Allow repeats, and the groups stop being equal

Change the rules: fill two positions using A, B, or C, and allow a symbol to be reused. Now AA is valid. Each position has three choices, giving **3 × 3 = 9 ordered outcomes**.

Ignore order again:

| Unordered selection, repeats allowed | Ordered outcomes grouped together | Group size |
| --- | --- | ---: |
| Two A symbols | AA | 1 |
| One A and one B | AB, BA | 2 |
| One A and one C | AC, CA | 2 |
| Two B symbols | BB | 1 |
| One B and one C | BC, CB | 2 |
| Two C symbols | CC | 1 |

There are **six unordered selections**, sometimes called multisets because an item may appear more than once: three matching pairs and three mixed pairs. But **9 / 2! = 4.5**, which cannot count them. AA has only one distinct order; AB has two. Dividing the total by two treats unequal groups as though they were equal.

For **ordered sequences with repetition**, n reusable symbols filling k positions give **nᵏ** outcomes, provided every symbol is allowed in every position. This case is often called “permutations with repetition.”

For **unordered selections with repetition**, there is a separate formula: **C(n + k − 1, k)** for selecting k items from n types, with unlimited copies of each type and no other restrictions. Here n is a positive whole number and k is a nonnegative whole number. For our table, it gives **C(3 + 2 − 1, 2) = C(4, 2) = 6**.

To see where it comes from, record how many A, B, and C symbols you chose. Use two stars for the chosen items and two bars to separate the three types: `*|*|` means one A, one B, and no C; `**||` means two A symbols. Choosing the two star positions among four slots gives C(4, 2). In general, k stars and n − 1 bars give n + k − 1 slots. Penn State explains this [stars-and-bars method in its counting lesson](https://online.stat.psu.edu/stat414/Lesson03#exm-example-nonnegativeints). If copies are limited, the unrestricted formula may count forbidden selections.

### Counting groups doesn't make them equally likely

This also matters for probability. Suppose each of two independent draws chooses A, B, or C with equal probability, with replacement. Every ordered sequence has probability **1/9**. After ignoring order, “two A symbols” has probability **1/9**, while “one A and one B” has probability **2/9**. Six possible unordered selections does **not** make them equally likely.

When replacement is forbidden, the available choices change after a draw. The [probability without replacement worksheet](/blog/probability-without-replacement/) follows those changing counts and probabilities step by step.

For short recall practice with those decisions, use the [probability without replacement flashcards](/catalog/packages/probability-without-replacement-flashcards/). They ask you to track what remains and distinguish one ordered path from an event that allows several orders.

## Reusable symbols differ from a fixed inventory

Reusable symbols let you choose A again whenever you fill another position. Arranging the letters in **MAMA** gives you a fixed inventory instead: you must use exactly two M letters and two A letters. You may swap existing copies, but you can't add new ones.

Temporarily label the identical copies M1, M2, A1, and A2. The four labeled objects have 4! orders. Removing the labels makes swapping the two M copies invisible, and likewise for the two A copies. Each visible arrangement has **2! × 2! = 4** labeled versions:

**4! / (2! × 2!) = 6 distinct arrangements.**

Here they all are: **AAMM, AMAM, AMMA, MAAM, MAMA, MMAA**.

Using 2⁴ = 16 would count four-position sequences made from reusable M and A symbols, including AAAA and MMMM. Those violate MAMA's fixed inventory. Using 4! = 24 would distinguish copies that the question treats as identical.

In general, arranging N items whose identical groups have sizes a, b, and so on gives **N! / (a! × b! × …)**, where those group sizes add to N. This counts arrangements in a row with no further restrictions. Penn State's [lesson on distinguishable permutations](https://online.stat.psu.edu/stat414/Lesson03#distinguishable-permutations) covers this fixed-inventory model.

## Mixed permutations and combinations practice

Before calculating, write a short description of one outcome and the rule that stops you counting it twice. Try these without looking at the worked answers.

1. **A team.** Seven different people volunteer. Select a team of three with no separate roles. How many teams are possible?
2. **Three roles.** The same seven people can fill coordinator, recorder, and presenter roles. Each role goes to a different person. How many assignments are possible?
3. **Reusable symbols.** A code has three positions, each containing A, B, C, or D. How many codes are possible if symbols may repeat? How many if they may not?
4. **A number or a code.** Use the digits 0, 1, 2, 3, and 4 without repetition. How many three-digit numbers can you make? How many three-position codes if a leading zero is allowed?
5. **A team with a lead.** Eight different people volunteer. Select four as a team and designate exactly one of the four as lead. The other three have no separate roles. How many results are possible?
6. **Repeated letters.** How many distinct arrangements use all five letters of LEVEL exactly once, treating copies of the same letter as identical?
7. **At least one senior.** A group has three senior members and four junior members, all different people. Select a team of three containing at least one senior. How many teams qualify? Explain why choosing a senior first, then two of the remaining six people, overcounts.
8. **Ignoring the draw order.** Two independent draws each choose A, B, or C uniformly, with replacement. Find the probability of two A symbols and the probability of one A and one B in either order. Can you assign probability 1/6 to each unordered selection?

## Worked answers

### 1. There are 35 teams

An outcome is a set of three people. The same three names listed in a different order describe the same team, so use a combination:

**C(7, 3) = (7 × 6 × 5) / (3 × 2 × 1) = 35.**

The numerator counts ordered selections. Each team appears in 3! = 6 orders, so division removes the repeated counting evenly.

### 2. There are 210 role assignments

An outcome specifies who holds each role. Swapping the coordinator and recorder changes the result. There are seven choices for coordinator, six remaining choices for recorder, and five for presenter:

**P(7, 3) = 7 × 6 × 5 = 210.**

Another route is to choose one of the 35 teams, then assign its three people to roles in 3! ways: **35 × 6 = 210**.

### 3. There are 64 codes with repeats, or 24 without

With reusable symbols, all four choices remain available in every position:

**4³ = 4 × 4 × 4 = 64.**

Without repeats, filling a position removes one available symbol:

**P(4, 3) = 4 × 3 × 2 = 24.**

ABC and BAC are different codes in either model. No factorial division is needed.

### 4. There are 48 numbers, or 60 codes

A three-digit number cannot start with zero. Fill the restricted position first: the first digit has four choices, 1 through 4. Four digits then remain for the second position, including zero, and three remain for the third:

**4 × 4 × 3 = 48 three-digit numbers.**

A code may start with zero, so it has:

**5 × 4 × 3 = 60 codes.**

For example, 012 is a valid code under these rules but doesn't represent a three-digit number. The difference comes from the first-position restriction, not from whether order matters.

### 5. There are 280 teams with a designated lead

Choose a four-person team, then choose its lead:

**C(8, 4) × 4 = 70 × 4 = 280.**

You can also choose the lead first, then select three teammates from the other seven:

**8 × C(7, 3) = 8 × 35 = 280.**

The lead is distinguished, but the other three members aren't. P(8, 4) would assign an unnecessary order to those three and overcount every result by 3!.

### 6. LEVEL has 30 distinct arrangements

The fixed inventory contains two L letters, two E letters, and one V. Divide out swaps of identical copies:

**5! / (2! × 2! × 1!) = 120 / 4 = 30.**

Order still matters: LEVEL and LEVLE are different arrangements. The denominator removes only the invisible swaps between identical letters.

### 7. There are 31 qualifying teams

Count all three-person teams, then subtract teams made entirely of juniors:

**C(7, 3) − C(4, 3) = 35 − 4 = 31.**

The tempting calculation **3 × C(6, 2) = 45** chooses a senior and then two more people. A team with one senior appears once; a team with two seniors appears twice, once for each senior chosen first; a team with three seniors appears three times. There is no common group size to use as a divisor. Subtracting all-junior teams avoids that problem.

Choosing a lead first worked in problem 5 because the final outcome retained that lead's identity. Here, “the senior chosen first” is only a construction step. It isn't part of the team you're counting.

### 8. The probabilities are 1/9 and 2/9

There are nine equally likely ordered outcomes. Only AA gives two A symbols, so its probability is **1/9**. Both AB and BA give one A and one B, so that probability is **2/9**.

The six unordered selections have different numbers of ordered outcomes behind them. Assigning each 1/6 would describe a different random procedure, one that chooses uniformly among those six selections.

## Keep the decision, then try a fresh problem

If you missed a question, save the decision that went wrong. A focused recall prompt might be: “When can I divide an ordered count by k!?” Its answer should include the condition: **when every desired unordered result corresponds to exactly k! counted ordered outcomes**. The repeated-symbol table gives a counterexample you can reconstruct.

The [guide to writing better flashcards](/blog/how-to-make-better-flashcards/) helps keep such prompts small. Pair recall with fresh counting problems so you still practice defining outcomes and doing the arithmetic. For an application of C(n, k) to choosing success positions, continue with the [binomial distribution practice worksheet](/blog/binomial-distribution-practice/).

*Production note: AI tools were used substantially for research, drafting, both editorial passes, and writing the exercises. Python enumeration checked the two outcome tables, the distinct arrangements of MAMA and LEVEL, and the team, role, code, and restricted-selection counts. The probability answers follow from the stated uniform independent draws. These checks don't establish classroom effectiveness or constitute review by a human mathematics educator. The illustration is AI-generated.*
