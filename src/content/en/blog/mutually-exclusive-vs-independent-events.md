---
title: "Mutually Exclusive vs Independent Events: Examples and Practice"
description: "Tell mutually exclusive and independent events apart with two checks, worked examples, a two-way table, and practice questions with explained answers."
date: "2026-09-27"
image: "/blog/mutually-exclusive-vs-independent-events.png"
keywords:
  - "mutually exclusive vs independent events"
  - "disjoint vs independent events"
  - "independent events examples"
  - "probability practice questions"
---

A token can be red and round at the same time. That rules out “mutually exclusive,” but it doesn't tell you whether red and round are independent. You need the counts for that. Change how the colors and shapes are paired, and independence can disappear even when the total number of red tokens and round tokens stays exactly the same.

**Mutually exclusive events share no outcomes. Independent events have an overlap probability equal to the product of their individual probabilities.** These are separate checks, and a pair can fail both.

We'll use finite, equally likely outcomes throughout: selecting one token or ticket, with every individual item having the same chance. That lets us check everything by counting.

![A shopkeeper rearranges blue and terracotta cups among differently colored saucers](/blog/mutually-exclusive-vs-independent-events.png)

## Two checks for mutually exclusive vs independent events

An event is a set of outcomes. If you select one token, “the token is red” is an event containing every red token you could select.

| Property | What to check | Mathematical condition |
|---|---|---|
| Mutually exclusive, also called disjoint | Do the events share any outcomes? | A ∩ B is empty |
| Independent | Does the probability of both equal the product of their individual probabilities? | P(A ∩ B) = P(A) × P(B) |

The symbol ∩ means “intersection”: outcomes belonging to both events. P(A ∩ B) is the probability that both occur on the same trial. In our finite, equally likely examples, an empty intersection is equivalent to P(A ∩ B) = 0. [OpenStax's lesson on independent and mutually exclusive events](https://openstax.org/books/introductory-statistics-2e/pages/3-2-independent-and-mutually-exclusive-events) covers these definitions.

Calculate the actual overlap from the information in the problem, then compare it with the product. Starting with P(A ∩ B) = P(A) × P(B) to calculate the overlap would assume the very independence you're trying to check.

## A table where overlapping events are independent

Imagine 30 tokens. Each token has one color, red or blue, and one shape, round or square. Select one of the 30 tokens uniformly at random.

| Color | Round | Square | Total |
|---|---:|---:|---:|
| Red | 6 | 4 | 10 |
| Blue | 12 | 8 | 20 |
| Total | 18 | 12 | 30 |

Let A mean “red” and B mean “round.” Count from the whole collection:

- P(A) = 10/30 = 1/3.
- P(B) = 18/30 = 3/5.
- P(A ∩ B) = 6/30 = 1/5.

Six tokens belong to both events, so A and B are **not mutually exclusive**. For independence, compare the product with that actual overlap:

**P(A) × P(B) = (1/3) × (3/5) = 1/5 = P(A ∩ B).**

The probabilities match. The events are **independent**, even though both describe the same selected token.

### Why the conditional denominator is ten

Suppose someone tells you the selected token is red. There are ten red tokens, and six of them are round. The chance of round is now 6/10 = 3/5, the same as 18/30 in the whole collection. Learning the color leaves the probability of round unchanged.

P(B | A) means “the probability of B given A.” For P(A) > 0, calculate it as:

**P(B | A) = P(A ∩ B) / P(A) = (6/30) / (10/30) = 6/10.**

Use ten as the count denominator because the given information restricts your attention to red tokens. Using 6/30 would answer a different question: the probability of selecting a token that is both red and round before learning its color. If choosing the given group is the missed step, use the [conditional probability two-way table flashcards](/catalog/packages/conditional-probability-two-way-table-flashcards/) for focused denominator practice.

Independence describes a relationship between probabilities. It doesn't establish a causal claim about color or shape.

## Keep the totals, change the answer

Now select one token uniformly from a different collection:

| Color | Round | Square | Total |
|---|---:|---:|---:|
| Red | 8 | 2 | 10 |
| Blue | 10 | 10 | 20 |
| Total | 18 | 12 | 30 |

All the row and column totals are unchanged. There are still 30 tokens, ten red and 18 round, so P(A) × P(B) is still 1/5, or 6/30.

But the actual overlap is now 8/30. Since **8/30 ≠ 6/30**, red and round are dependent. They also overlap, making them **neither mutually exclusive nor independent**.

The conditional check agrees: among red tokens, 8/10 are round, compared with 18/30 overall. Learning that the token is red now raises the probability of round from 3/5 to 4/5. The information changes your probability calculation; it doesn't change the token.

“They can happen together” settles only the mutual-exclusivity question. Independence still needs a calculation. Even knowing both individual probabilities isn't enough: these tables have identical totals but different answers.

## Why disjoint events with positive probabilities are dependent

Return to either collection and compare “red” with “blue.” Each token has exactly one color, so their intersection is empty. They're mutually exclusive.

Their individual probabilities are 1/3 and 2/3, whose product is 2/9. Their overlap probability is zero. Since 0 ≠ 2/9, they're dependent: learning that a token is red rules out blue completely.

The same reasoning works whenever both events have positive probability. Their product is positive, while disjoint events have zero overlap probability, so the independence equation cannot hold.

There is an exception. In our finite, equally likely setting, an empty event has probability zero and is both disjoint from and independent of any event: 0 = 0 × P(B). So “mutually exclusive events cannot be independent” needs the qualification **when both have positive probability**. The shortcut “probability zero means impossible” does not extend to continuous probability models.

## Try these probability practice questions

For each pair, decide whether it is mutually exclusive only, independent only, neither, or both. Write down the actual overlap probability and the product of the individual probabilities before looking at the answers.

For questions 1–4, select one numbered ticket uniformly from tickets 1 through 12.

1. A = an odd number; B = a multiple of 3.
2. A = a number from 1 through 4; B = a number from 9 through 12.
3. A = an even number; B = a multiple of 4.
4. A = a number greater than 12; B = an even number.
5. Select one token uniformly from a collection of 30 tokens. Ten are red and 18 are round. Exactly three are both red and round. Classify “red” and “round.”
6. Use the first token table. A = blue; B = square. Classify the events by calculating their probabilities.

### Answers and the reasoning to keep

**1. Independent only.** There are six odd tickets and four multiples of 3. The overlap is {3, 9}, so P(A ∩ B) = 2/12 = 1/6. The product is (6/12) × (4/12) = 1/6. They overlap and pass the independence test. Independence can occur between two properties of a single draw; separate draws aren't required.

**2. Mutually exclusive only.** The sets share no tickets, so the overlap probability is zero. Their product is (4/12) × (4/12) = 1/9. Tickets 5–8 belong to neither event. Mutually exclusive events don't have to cover every possible outcome.

**3. Neither.** The multiples of 4 are {4, 8, 12}, all even. The overlap probability is 3/12 = 1/4, while the product is (6/12) × (3/12) = 1/8. Knowing that the ticket is a multiple of 4 makes “even” certain; its probability was only 1/2 before that information.

**4. Both.** No ticket exceeds 12, so A is empty. The overlap probability is zero, and the product is 0 × (6/12) = 0. Use the product test here; conditioning on A would require division by zero.

**5. Neither.** The actual overlap is 3/30 = 1/10. Independence would require (10/30) × (18/30) = 1/5. An overlap smaller than the independence value fails the test just as an overlap larger than it does. The three shared tokens also rule out mutual exclusivity.

**6. Independent only.** Eight tokens are blue and square, giving P(A ∩ B) = 8/30 = 4/15. The product is (20/30) × (12/30) = 4/15. The equality holds, and the eight shared tokens rule out mutual exclusivity.

## Make the missed step your next flashcard

If you got a classification wrong, check where your reasoning broke. Another card asking for the definition of independence may not address the mistake.

| Mistake in your work | Flashcard front | Flashcard back |
|---|---|---|
| You treated overlap as proof of independence | Two events overlap. What calculation checks whether they are independent? | Compare the actual P(A ∩ B) with P(A) × P(B). |
| You thought disjoint events had to cover all outcomes | Must mutually exclusive events cover the sample space? | No. They need only have no shared outcomes. |
| You used all 30 tokens after being told the token was red | A collection has ten red tokens, six of them round. Given that a selected token is red, what fraction are round? | 6/10. The denominator counts only the red tokens. |

Keep one decision per card; the [guide to making better flashcards](/blog/how-to-make-better-flashcards/) gives more examples of narrow prompts. If your setup was correct and you only multiplied fractions incorrectly, practice that calculation on paper.

Then solve a fresh pair with different numbers. For a broader course plan, use the [AP Statistics flashcard guide](/blog/ap-statistics-flashcards/). Keep full calculations in your practice work, and use cards to recall the exact step you previously skipped.
