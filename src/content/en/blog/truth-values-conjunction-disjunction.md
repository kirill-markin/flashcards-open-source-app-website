---
title: "Truth Values of AND, OR, and NOT: Examples and Practice"
description: "Find the truth values of AND, OR, and NOT with a truth table, a worked example using the number 4, practice questions with explanations, and review flashcards."
date: "2026-09-17"
image: "/blog/truth-values-conjunction-disjunction.png"
keywords:
  - "truth value of a conjunction"
  - "disjunction"
  - "truth table"
  - "negation of a statement"
  - "AND and OR in logic"
---

“The number 4 is even and greater than 10” is false, even though its first part is true. **A conjunction is true only when both statements that make it up are true.** Replace “and” with “or” in the same example, and the statement becomes true: inclusive OR requires at least one true statement. The numbers haven't changed, but the connective changes the result.

To solve this kind of problem, find the truth value of each part, then apply the rule for the connective. One true fact within a sentence isn't enough to determine the truth value of the whole sentence.

![Close-up of an old lunchbox with two latches; one is open and the other is still closed, so the box cannot open until both are released](/blog/truth-values-conjunction-disjunction.png)

## Start with the two simple statements

A logical statement is a sentence that makes a claim we can judge true or false. For example, “The number 4 is even” is true because 4 is divisible by 2 with no remainder. “The number 4 is greater than 10” is false.

Let's call the first statement `p` and the second `q`. These symbols stand for the two sentences without changing their meaning. Write each statement's truth value beside its symbol:

- `p`: The number 4 is even — true.
- `q`: The number 4 is greater than 10 — false.

Take care if a problem contains a variable. You can't tell whether “The number `x` is greater than 10” is true or false without knowing the value of `x` or having enough information to determine the result. Our examples use specific numbers so we can focus on the logical connective.

## A truth table for AND, OR, and NOT

Conjunction, written `∧`, means “and”: both statements must be true. Inclusive disjunction, written `∨`, means “or”: at least one statement must be true, and both can be true. Negation, written `¬`, reverses a statement's truth value. These rules are explained in [OpenStax's lesson on constructing truth tables](https://openstax.org/books/contemporary-mathematics/pages/2-3-constructing-truth-tables).

| `p` | `q` | AND `p ∧ q` | OR `p ∨ q` | NOT `¬p` |
| --- | --- | --- | --- | --- |
| True | True | True | True | False |
| True | False | False | True | False |
| False | True | False | True | True |
| False | False | False | False | True |

Read the table across a row. First choose the row matching the truth values of `p` and `q`, then move to the column for the operation you need. The last column depends only on `p`, so `¬p` doesn't change when `q` changes.

To help you remember: AND has only one true case, and inclusive OR has only one false case. You don't need to memorize four separate sentences for each operation if you understand what makes it true.

## Work through the number 4 example

Find the truth value of “The number 4 is even and greater than 10.”

1. Split the sentence at “and”: “4 is even” and “4 is greater than 10.”
2. Judge each part: the first is true, and the second is false.
3. Identify the operation: “and” means conjunction, `p ∧ q`.
4. Apply the rule: true AND false gives false because the two conditions aren't both met.

The full answer is: **The statement is false because 4 is not greater than 10, and AND requires both parts to be true.** Give the reason with your answer to show which part makes the conjunction false.

Now use the same two parts with other operations:

| Statement | Truth value | Reason |
| --- | --- | --- |
| 4 is even or greater than 10 | True | The first part is true, which is enough for inclusive OR |
| 4 is not greater than 10 | True | It negates the false statement “4 is greater than 10” |
| 4 is even and not greater than 10 | True | Both parts are true |

If you wrote “The conjunction is true because 4 is even,” you've checked only one part. Go back to the second part and check whether both conditions are met. Use the same check when the numbers or the order of the statements change.

## Why is OR still true when both parts are true?

We're using **inclusive OR** in this lesson. For example, “The number 12 is even or divisible by 3” is true. Both parts are true, and that doesn't make the disjunction false.

In everyday speech, “or” can mean choosing just one option, such as an offer that lets you choose one drink. That's why we shouldn't automatically apply its conversational meaning to the symbol `∨`. When a problem specifies “exactly one of the statements, but not both,” it describes exclusive OR: true when exactly one statement is true, and false when both are true or both are false. [OpenStax's lesson on compound statements](https://openstax.org/books/contemporary-mathematics/pages/2-2-compound-statements) explains this difference between uses of “or.”

## Pay attention to where NOT applies

The negation of “The number 4 is greater than 10” is “The number 4 is not greater than 10.” For real numbers, the negation of `x > 10` is `x ≤ 10`: the negation includes equality too.

Negating a compound statement requires attention to parentheses. Using the values from our first example, `p` is true and `q` is false:

- `¬(p ∧ q)` is true: evaluate the conjunction first to get false, then negate the result.
- `(¬p) ∧ q` is false: negate only `p`, making it false, then join it with the false statement `q` using AND.

In `¬(p ∧ q)`, the negation applies to everything inside the parentheses, so we evaluate the conjunction before negating it. In `(¬p) ∧ q`, the negation applies only to `p`. Its position is part of the problem and can change the answer, as it does here.

## Try these before reading the answers

For each question, write the truth value and a short reason. Pay particular attention to the first two questions: their simple statements are identical, and only the connective changes.

1. “The number 9 is odd and less than 5.”
2. “The number 9 is odd or less than 5.”
3. “The number 8 is odd or greater than 20.”
4. “The number 15 is not a multiple of 5.”
5. If `p` is false and `q` is true, what is the truth value of `p ∨ (¬q)`?
6. “The number 18 is even or a multiple of 3.” Find the statement's truth value and explain what happens when both parts are true.

### Answers with reasons

1. **False.** The number 9 is odd, but it isn't less than 5. True AND false gives false.
2. **True.** The truth values of the two parts haven't changed, but the true statement “9 is odd” is enough for inclusive OR.
3. **False.** The number 8 isn't odd and isn't greater than 20. This is the only false case for inclusive OR: both parts are false.
4. **False.** The number 15 is a multiple of 5 because `15 = 3 × 5`. The statement “15 is a multiple of 5” is true, so its negation is false.
5. **False.** Since `q` is true, `¬q` is false. That leaves false OR false, which is false.
6. **True.** The number 18 is even and a multiple of 3. Having both parts true makes inclusive OR true; it doesn't require exactly one true statement.

## Turn your mistake into a flashcard

Choose a card that addresses the reason for your mistake. If you mixed up the connectives, use the same truth values and change the operation in the question. If you made a mistake with negation, make it clear on the front of the card which part is being negated.

| Front of the card | Back of the card |
| --- | --- |
| `p` is true and `q` is false. What is the truth value of `p ∧ q`, and why? | False; AND requires both statements to be true |
| `p` is true and `q` is false. What is the truth value of `p ∨ q`? | True; at least one statement is true |
| What is the negation of `x > 10` for real numbers? | `x ≤ 10`; the negation includes equality |
| `p` is false and `q` is true. Evaluate `p ∨ (¬q)` | False; the negation of `q` is false, and false OR false gives false |

Answer before flipping the card, then work through an example with new numbers on paper. You can use paper flashcards or cards with a front and back in the app; the [getting started guide](/docs/getting-started/) explains how to begin. For more ways to use this approach, read [how to use flashcards for math](/blog/how-to-use-flashcards-for-math/) and [how to make clearer flashcards](/blog/how-to-make-better-flashcards/).
