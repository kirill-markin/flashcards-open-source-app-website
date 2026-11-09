---
title: "DNA Reverse Complement Practice for Both Strands"
description: "Find the DNA reverse complement and search both strands of a printed DNA fragment with worked examples, original practice questions, and an answer key."
date: "2026-11-09"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c83716b832187321e84fef25044e92882f0548c369e1451949fd3cf247486255.webp"
keywords:
  - "DNA reverse complement"
  - "reverse complement practice"
  - "complementary DNA strand"
  - "DNA strand orientation"
---

Write the bases that pair with **5′–AGTC–3′** directly underneath it and you get `TCAG`. Read that same complementary DNA strand from its 5′ end and you get `GACT`. The direction matters when you search for a pattern. It can be missing from the printed sequence and still appear on the other strand.

![A hiker looks back at a blue trail marker painted on a wooden post](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c83716b832187321e84fef25044e92882f0548c369e1451949fd3cf247486255.webp)

## Pair the bases, then find the 5′ end

In double-stranded DNA, A pairs with T and C pairs with G. The two strands are antiparallel, meaning they run in opposite directions. If the given strand runs 5′ to 3′ from left to right, its aligned partner runs 3′ to 5′. [See the strand diagram in the NHGRI gene-finding guide](https://www.genome.gov/25020001/online-education-kit-bioinformatics-finding-genes).

```text
Given strand       5′–AGTC–3′
Aligned partner    3′–TCAG–5′
```

The partner's 5′ end is on the right. Read from there to get **5′–GACT–3′**, the reverse complement of `AGTC`. If you got `TCAG`, you paired the bases correctly and still need to read from the right. If you got `CTGA`, you reversed the given letters and still need to pair the bases. [Biopython shows the two operations side by side](https://biopython.org/docs/latest/Tutorial/chapter_seq_objects.html#nucleotide-sequences-and-reverse-complements).

Keep the end labels attached to the letters as you work. If the given strand starts at 3′ on the left, the partner you write underneath already starts at 5′ on the left. You can report it in that order.

## Search both strands from one printed sequence

Look for an exact match to **5′–AACG–3′** in the fragment below. Call the printed strand the **reference (+)** and its partner the **− strand**. For either strand, count positions from 1 at the left end of the reference and include both endpoints in your answer.

```text
Reference (+)    5′–TTA CGTT CGTAA–3′
Partner (−)      3′–AAT GCAA GCATT–5′
```

There’s no `AACG` in the top row. The middle block of the bottom row reads `GCAA` from left to right. Read those same four bases from right to left, in the partner's 5′→3′ direction, and they spell `AACG`. The block covers reference positions **4–7 (−)**. If you write the whole partner as **5′–TTACGAACGTAA–3′** and count from its own 5′ end, the match is at **6–9**. Both counts point to the same four base pairs.

You can get the reference positions without writing the bottom row. Slide a four-base window along the reference one position at a time. Check each window for `AACG` to find a + match and for `CGTT`, the reverse complement of `AACG`, to find a − match. A `CGTT` window on the reference has `AACG` directly across from it when you read the partner 5′ to 3′.

The + and − labels here refer to the printed reference. Coding and template describe what each strand does for a particular gene during transcription. [Practice identifying the coding and template strands](/blog/coding-vs-template-strand/).

## Try these on paper

1. Write the aligned partner of **5′–CGTAA–3′** and label its ends. Then write that partner 5′ to 3′.
2. The given strand is **3′–TACGGC–5′**. Write its partner 5′ to 3′. Where would you start to read the given strand itself 5′ to 3′?
3. `AGGA` reads the same backward. Does its reverse complement also match the original?
4. Search **5′–TCAACGATCGTTAG–3′** for **5′–AACG–3′** on either strand. Give the reference positions and strand for each match.
5. Search **5′–CGAATTCG–3′** for **5′–GAATTC–3′** on either strand. How many strands have a match, and how many distinct spans does that cover?

## Answer key

1. **5′–TTACG–3′.** The aligned partner is **3′–GCATT–5′**. Start reading at the 5′ end on the right.
2. **5′–ATGCCG–3′.** The partner's 5′ end is already on the left. The given strand's 5′ end is on the right, so its sequence in that direction is **5′–CGGCAT–3′**. The reverse complement of `CGGCAT` is `ATGCCG`.
3. `AGGA` reverses to `AGGA`, and its reverse complement is **`TCCT`**.
4. **3–6 (+) and 9–12 (−).** The reference contains `AACG` at 3–6 and `CGTT` at 9–12.
5. **2–7 on both strands, one span.** The aligned partner of **5′–GAATTC–3′** is **3′–CTTAAG–5′**. Read it from the right and you get `GAATTC` again. A sequence that equals its reverse complement is a **reverse-complement palindrome**.

## Retry the step you missed tomorrow

Cover the right column and answer from memory. For the first prompt, write the end labels too.

| Front | Back |
| --- | --- |
| The aligned partner reads 3′–GCATT–5′. What do you report 5′ to 3′? | 5′–TTACG–3′. Start at the 5′ end on the right. |
| A reference window reads 5′–CGTT–3′. Which strand has 5′–AACG–3′ at that span? | The − strand. AACG is the reverse complement of CGTT. |

You’ll use the same direction check in the [PCR primer practice worksheet](/blog/pcr-primer-practice/).

*This worksheet was drafted with AI assistance. Example answers were checked against Biopython 1.88.*
