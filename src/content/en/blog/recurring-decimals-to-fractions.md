---
title: "Recurring Decimals to Fractions: Worked Examples and a Quiz"
description: "Convert recurring decimals to fractions with clear repeating notation, worked mixed and leading-zero examples, and a practice quiz with explained answers."
date: "2026-09-24"
image: "/blog/recurring-decimals-to-fractions.png"
keywords:
  - "recurring decimals to fractions"
  - "repeating decimals to fractions"
  - "0.47 recurring as a fraction"
  - "mixed recurring decimals"
---

“0.47 recurring” could mean 0.474747… = 47/99 or 0.477777… = 43/90, depending on which digits repeat. The ordinary decimal 0.47 is different again: it equals 47/100. Before multiplying anything by 10 or 100, check the repeat marking.

To convert recurring decimals to fractions, call the number x and multiply it by powers of 10 until two equations have identical digits after the decimal point. Subtract one equation from the other, solve for x, and simplify the fraction. The worked examples below show how to choose those multipliers, including when zeros or non-repeating digits come first.

![A woman aligns repeating floral motifs on two wallpaper strips, leaving a loose end curled below the seam](/blog/recurring-decimals-to-fractions.png)

## First, say what repeats

Recurring and repeating mean the same thing here: a digit or block of digits continues forever. A bar above the repeating digits is a common notation, as shown in [OpenStax's explanation of repeating decimals](https://openstax.org/books/prealgebra-2e/pages/5-3-decimals-and-fractions).

In the examples below, **parentheses mark the repeating block**. So 0.(47) means 0.474747…, while 0.4(7) means 0.477777…. The parentheses are a plain-text notation for repetition, not multiplication.

| Written here | Meaning | Fraction in simplest form |
| --- | --- | --- |
| 0.47 | Stops after two decimal places | 47/100 |
| 0.(47) | 47 repeats forever | 47/99 |
| 0.4(7) | One 4, then 7 repeats forever | 43/90 |

If a question only says “0.47 recurring as a fraction,” check the original bar or dots. A bar over both digits means 0.(47); a bar over only the 7 means 0.4(7). In dot notation, dots over the first and last digits mark the repeating block, while a single dot marks a one-digit repeat. Plain 0.47, without any instruction that it repeats, is the terminating decimal 47/100.

Before reading the method, try this quick diagnostic: **for x = 0.4(7), which pair has the same digits after the decimal point: x and 100x, or 10x and 100x?** Write out the three decimals. Keep your answer beside you for the mixed-decimal example.

## When the whole decimal block repeats

Take 0.(47). Its block has two digits, so multiplying by 100 moves one complete block to the left of the decimal point:

```text
   x =  0.474747…
100x = 47.474747…
```

Both lines now have the same .474747… tail. Subtract the first equation from the second:

```text
100x − x = 47.474747… − 0.474747…
     99x = 47
       x = 47/99
```

This is an exact fraction. We haven't rounded either decimal. The common infinite tail cancels because it is the same number in both lines. OpenStax also uses multiplication and subtraction in its [repeating-decimal conversion exercise](https://openstax.org/books/contemporary-mathematics/pages/3-4-rational-numbers).

For a number between 0 and 1 whose repetition begins immediately after the decimal point, this gives a handy shortcut: put the repeating block over as many 9s as there are digits in the block, then simplify.

```text
0.(6)   = 6/9     = 2/3
0.(24)  = 24/99   = 8/33
0.(125) = 125/999
```

### Keep zeros inside the repeating block

For 0.(03), the block is 03. It has two digits even though its numerical value is 3:

```text
   x = 0.030303…
100x = 3.030303…
 99x = 3
   x = 3/99 = 1/33
```

Writing 3/9 would give 0.333333…, a different number. Count the positions in the block before dropping a leading zero from the numerator.

## For mixed recurring decimals, move past the non-repeating part

A mixed recurring decimal has some non-repeating digits after the decimal point before the repeating block starts. For 0.4(7), the 4 does not repeat; the 7 does.

First multiply by 10 to move the non-repeating digit past the decimal point. Then multiply that result by another 10 to move one whole repeating block:

```text
   x =  0.477777…
 10x =  4.777777…
100x = 47.777777…
```

The diagnostic answer is **10x and 100x**: both end in .777777…. Use these last two equations, whose decimal tails match:

```text
100x − 10x = 47.777777… − 4.777777…
       90x = 43
         x = 43/90
```

The denominator is 90 because we subtracted 10x from 100x. The numerator is 43 because we subtracted 4 from 47. This is where treating 0.4(7) as 47/99 goes wrong: that fraction makes the 4 repeat too.

### A longer example: 0.12(03)

Here the non-repeating part is 12 and the repeating block is 03. Each occupies two decimal places.

```text
     x =    0.12030303…
  100x =   12.03030303…
10000x = 1203.03030303…
```

Subtract the matching tails:

```text
10000x − 100x = 1203 − 12
        9900x = 1191
            x = 1191/9900 = 397/3300
```

Notice that the zero in 03 still takes a place. Moving just one further digit after 100x would leave .303030… instead of .030303…, so those tails would not cancel.

## Choose the multipliers before doing arithmetic

Count the non-repeating decimal digits first, then the repeating digits. The whole-number part doesn't count toward either length.

| Decimal | Non-repeating decimal digits | Repeating block length | Equations to subtract |
| --- | --- | --- | --- |
| 0.(47) | 0 | 2 | 100x − x |
| 0.4(7) | 1 | 1 | 100x − 10x |
| 0.12(03) | 2 | 2 | 10000x − 100x |
| 2.1(6) | 1 | 1 | 100x − 10x |

If you prefer a general rule, let m be the number of non-repeating decimal digits and n the length of the repeating block. Subtract 10^m times x from 10^(m+n) times x. Here ^ means “raised to the power,” so 10^2 = 100.

Before simplifying, the denominator is n nines followed by m zeros. To get the numerator, write the digits through one complete repeat as an integer, then subtract the integer formed by the digits before the repeat. For 0.12(03), that gives:

```text
(1203 − 12) / 9900 = 1191/9900 = 397/3300
```

The subtraction matters just as much as the nines and zeros. Writing 1203/9900 would include too much. If the rule is hard to remember, write the two equations instead.

Numbers with a whole-number part work the same way. Keep that part when multiplying and subtracting:

```text
   x =   2.166666…
 10x =  21.666666…
100x = 216.666666…
 90x = 216 − 21 = 195
   x = 195/90 = 13/6
```

For a negative recurring decimal, convert its positive magnitude and put the minus sign back: −0.4(7) = −43/90.

## Check the tails, then check the size

Before subtracting, read the decimal digits on both lines. They must match from the decimal point onward if you want the fractional parts to cancel directly.

For example, this attempted shortcut for x = 0.1(23) is wrong:

```text
100x = 12.323232…
   x =  0.123232…
```

The tails start .3232… and .1232…. Subtracting these equations is allowed, but claiming their decimal parts cancel to zero is not. Use 1000x = 123.232323… and 10x = 1.232323… instead. Then 990x = 122, giving x = 61/495.

After simplifying, compare the fraction's size with the original decimal. A fraction for 0.4(7) must fall between 0.47 and 0.48. A result such as 43/9 is clearly too large. Dividing the numerator by the denominator can check the opening digits, though a rounded calculator display alone doesn't prove an infinite pattern.

## Try these without looking at the answers

Cover the answers and work on paper. For each conversion, write the repeating block, the two equations you subtract, and the fraction in simplest form. For the error question, identify the first incorrect step before calculating the correct answer.

1. Convert 0.(8).
2. Convert 0.(27).
3. Convert 0.2(7).
4. Convert 0.(06).
5. Convert 0.03(6).
6. Convert 1.2(34).
7. For x = 0.5(12), someone writes 100x − x = 51 − 0, so x = 51/99. Explain the mistake and correct it.
8. A message says “0.36 recurring.” Give the fractions for both 0.(36) and 0.3(6).

### Answers with the step that matters

1. **8/9.** The block is 8. Subtract x = 0.888… from 10x = 8.888… to get 9x = 8.
2. **3/11.** The block is 27. Subtract x from 100x: 99x = 27. Reduce 27/99 by dividing both parts by 9.
3. **5/18.** The block is 7, after one non-repeating digit. Subtract 10x = 2.777… from 100x = 27.777…: 90x = 25. Simplify 25/90.
4. **2/33.** The block is 06, so it still needs a factor of 100. Subtract x from 100x: 99x = 6. Simplify 6/99.
5. **11/300.** There are two non-repeating digits, 03, before the block 6. Subtract 100x = 3.666… from 1000x = 36.666…: 900x = 33. Simplify 33/900.
6. **611/495.** Subtract 10x = 12.343434… from 1000x = 1234.343434…: 990x = 1222. Divide both parts of 1222/990 by 2. The result is greater than 1, as expected.
7. **169/330.** The proposed tails .212121… and .512121… do not match. Subtract 10x = 5.121212… from 1000x = 512.121212… instead: 990x = 507. Simplify 507/990 by dividing both parts by 3.
8. **4/11 and 11/30.** For 0.(36), 99x = 36, so x = 36/99 = 4/11. For 0.3(6), 90x = 36 − 3 = 33, so x = 33/90 = 11/30. The repeat marking changes the value.

## Use your mistakes to choose what to review

Check your working as well as your final fractions. Missing questions 3, 5, or 6 suggests checking where the repeat starts and which multipliers you chose. A mistake on question 4 is a reason to check whether you counted the zero in the repeating block. If your unsimplified fraction matches the answer but your final fraction differs, practice dividing the numerator and denominator by the same common factor.

Keep a review card for the step you missed. These prompts target specific errors:

| Front | Back |
| --- | --- |
| Expand 0.(47) and 0.4(7). What repeats in each? | 0.474747… repeats 47; 0.477777… repeats only 7. |
| For x = 0.12(03), which two multiples have matching decimal tails? | 10000x and 100x. Move past 12, then shift the complete two-digit block 03. |
| Why is 0.(06) equal to 6/99 rather than 6/9? | The block 06 occupies two places, so use 100x − x = 99x. Then simplify 6/99 to 2/33. |
| After finding 90x = 25, how do you simplify x = 25/90? | Divide both numerator and denominator by 5: x = 5/18. |

Answer before revealing the back. On another day, solve a fresh example with different digits to check whether you can still choose the multipliers yourself. Our guide to [using flashcards for math](/blog/how-to-use-flashcards-for-math/) explains how to build this kind of review around problem practice.

If simplifying fractions or familiar decimal equivalents slowed you down, the [fractions, decimals, and percentages deck](/catalog/packages/fractions-decimals-percentages-flashcards/) offers foundational practice. It doesn't teach recurring-decimal algebra; use the worked examples and quiz here for that step.
