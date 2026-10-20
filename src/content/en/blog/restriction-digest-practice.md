---
title: "Restriction Digest Practice: Cuts, Fragments, and Gel Bands"
description: "Solve restriction digest practice problems with explained answers: linear versus circular DNA, fragment lengths, matching gel bands, and double-digest maps."
date: "2026-10-20"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3486f9cc473cd6d645faeb31578163576a48ca11235d8f98208245007bdefa0b.webp"
keywords:
  - "restriction digest practice"
  - "restriction enzyme practice problems"
  - "linear vs circular DNA fragments"
  - "restriction mapping practice"
  - "gel bands vs fragments"
---

Four cuts in a circular DNA molecule can produce four fragments and just one band on an ideal agarose gel. The arithmetic works: four equal-length pieces travel together. Counting the bands would give you the wrong fragment count.

Useful **restriction digest practice** keeps three questions separate: where did the DNA get cut, how many pieces did each molecule produce, and which lengths would appear together in a gel lane? Work through the circular example below, then try the eight questions on paper before reading their answers.

All maps and exercise data here are synthetic. They test the counting and mapping logic; they aren't results from a laboratory experiment.

![A jewelry repairer inspects a copper hoop opened at one point while it remains one continuous piece](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3486f9cc473cd6d645faeb31578163576a48ca11235d8f98208245007bdefa0b.webp)

## Decide what a “cut” means

Restriction enzymes cleave DNA at specific sites. A diagnostic digest uses the resulting fragment sizes to check a DNA construct, as described in [Addgene's diagnostic digest protocol](https://www.addgene.org/protocols/diagnostic-digest/).

Here, **one cut position means one cleavage across the double-stranded DNA molecule**. Don't count its two strands as two cuts. An enzyme name also isn't a cut count: one enzyme may have several sites on the same molecule.

Use these assumptions throughout, except where a question changes them:

- Each sample contains many copies of one DNA species, all with the same length and map.
- Digestion is complete: every specified cut position is cut on every copy.
- Cut coordinates are idealized boundaries measured in base pairs (**bp**). We aren't calculating staggered ends or overhang lengths from a sequence.
- No DNA is lost. Fragment lengths, counting repeated lengths separately, add up to the starting molecule's length.
- For an **ideal band prediction**, all products are linear, visible, and resolved from products of different lengths. Equal-length fragments share a band.

The exception to that last assumption is an uncut circle: it remains circular, so our linear-fragment band model doesn't apply to it.

### Linear and circular DNA have different starting boundaries

| Starting molecule | Distinct cut positions | Products per starting molecule |
| --- | ---: | --- |
| Linear DNA | n internal positions | n + 1 linear fragments |
| Circular DNA | n positions, with n at least 1 | n linear fragments |
| Circular DNA | 0 | One uncut circular molecule |

A line already has two ends. A circle's first cut opens it into one full-length line. [Steven Carr's circular restriction mapping resource](https://www.mun.ca/biology/scarr/Bio2250_Circular_restriction_mapping.html) explains this topology difference and how single and double digests constrain a map.

For a line, subtract along **0 → cut positions → total length**. For a circle, subtract between consecutive positions, then include the interval that crosses the coordinate origin. Positions 0 and the total length mark the same place on a circle.

## Work one map from coordinates to bands

Take a **6,000 bp circle** with cuts at **1,000, 2,500, and 4,500 bp**. There are three distinct cut positions, so a complete digest produces three fragments per starting molecule.

| Interval around the circle | Calculation | Fragment length |
| --- | --- | ---: |
| 1,000 → 2,500 | 2,500 − 1,000 | 1,500 bp |
| 2,500 → 4,500 | 4,500 − 2,500 | 2,000 bp |
| 4,500 → origin → 1,000 | (6,000 − 4,500) + 1,000 | 2,500 bp |

Check the total: **1,500 + 2,000 + 2,500 = 6,000 bp**. All three lengths differ, so the ideal lane has **three bands**, at 1,500, 2,000, and 2,500 bp.

The last interval is easy to lose. The coordinate origin is a label on the circle, not an extra cut that splits the 2,500 bp fragment.

### Change only the topology

Now use a **6,000 bp line** with the same three internal cut coordinates. Include the two existing ends:

**0 → 1,000 → 2,500 → 4,500 → 6,000**

The intervals are **1,000, 1,500, 2,000, and 1,500 bp**. That's four fragments, totaling 6,000 bp. The two 1,500 bp fragments share one size, so the ideal lane has **three bands**: 1,000, 1,500, and 2,000 bp.

| Result | Circular case | Linear case |
| --- | --- | --- |
| Cut positions | 3 | 3 |
| Fragment lengths, including repeats | 1,500; 2,000; 2,500 bp | 1,000; 1,500; 2,000; 1,500 bp |
| Fragments per starting molecule | 3 | 4 |
| Distinct ideal bands | 3 | 3 |

The same band count can come from different fragment counts. A lane contains products from many starting copies; “four fragments” here means four products **per starting molecule**, not four individual DNA molecules in the entire lane.

## Eight restriction enzyme practice problems

For the coordinate problems, put the cut positions in order, calculate fragment lengths **with repeats**, check their total, then group equal lengths into ideal bands. Keep bp units on lengths. Question 2 leaves the DNA circular; question 7 leaves a specified site uncut.

### 1. One cut at an off-center coordinate

A 5,000 bp circular molecule has one cut position, at 1,800 bp. After complete digestion, how many fragments are produced, and how long are they? Would moving that single site to 3,200 bp change the result?

### 2. No cuts at all

An enzyme has no cut sites on a 5,000 bp circle. A student applies “n cuts gives n fragments” and reports zero DNA products. Correct the answer. Can you use this article's ideal linear-fragment model to predict the uncut sample's bands?

### 3. Include both ends

A 7,200 bp linear molecule is cut at 900, 3,300, and 5,700 bp. Find the fragment lengths, fragment count, and ideal band sizes.

### 4. Four equal arcs

An 8,000 bp circle is cut at 1,000, 3,000, 5,000, and 7,000 bp. Predict the fragments and ideal bands. Does one band establish that each starting molecule was cut only once?

### 5. Count positions rather than enzyme names

A 9,000 bp circle has two sites for enzyme A, at 1,000 and 4,000 bp, and one site for enzyme B, at 6,500 bp. All three positions are distinct. Predict a complete A + B digest. A student expects two fragments because two enzymes were used. Explain what they counted incorrectly.

### 6. Spot the missing DNA in a calculation

Return to the 7,200 bp line in question 3. Its ideal bands are at 900, 1,500, and 2,400 bp. A student adds those three numbers, gets 4,800 bp, and concludes that 2,400 bp of DNA was lost. Use the map to check that claim.

### 7. Leave one site uncut

Return to the worked 6,000 bp circle, with sites at 1,000, 2,500, and 4,500 bp. In this simplified sample, **every copy is cut at 1,000 and 4,500 bp, and no copy is cut at 2,500 bp**. What products result? Identify which intervals would be separate fragments in a complete digest but remain connected here.

### 8. Rebuild a circular map

Three complete digests of a 6,000 bp circle give these **fragment lengths**, with every fragment listed:

| Digest | Fragment lengths |
| --- | --- |
| A alone | 2,000 and 4,000 bp |
| B alone | 6,000 bp |
| A + B | 1,000, 2,000, and 3,000 bp |

Assume A has two distinct sites, B has one, and none coincide. Which A fragment does B split? Draw one consistent map, assigning an A site coordinate 0. Check that your map reproduces all three digests. Would a reflected version of your map also fit the data?

## Check the reasoning behind your answers

### 1. The whole circle becomes one line

The answer is **one 5,000 bp linear fragment**, giving one ideal band at 5,000 bp. Following the circle from the cut back to itself gives:

**(5,000 − 1,800) + 1,800 = 5,000 bp.**

Moving the only cut to 3,200 bp still opens the same full-length molecule. The coordinate changes where the ends form, but it doesn't divide the circle into two separate pieces.

### 2. The molecule remains circular

There is **one uncut 5,000 bp circular molecule per starting copy**. No cleavage occurred, so no DNA disappeared. The circular n-fragment rule applies only when n is at least 1.

Don't assign the uncut sample a linear 5,000 bp band prediction. Its circular shape matters for migration; the real-gel discussion below explains that boundary.

### 3. Four fragments share three lengths

Use the ends as boundaries:

| Interval | Length |
| --- | ---: |
| 0 → 900 | 900 bp |
| 900 → 3,300 | 2,400 bp |
| 3,300 → 5,700 | 2,400 bp |
| 5,700 → 7,200 | 1,500 bp |

There are **four fragments** and **three ideal bands**, at **900, 1,500, and 2,400 bp**. Check the total with both copies of the repeated length:

**900 + 2,400 + 2,400 + 1,500 = 7,200 bp.**

### 4. One size can hide four products

Each adjacent interval is 2,000 bp, including the wraparound interval:

**(8,000 − 7,000) + 1,000 = 2,000 bp.**

The digest produces **four 2,000 bp fragments per starting molecule**. Their total is 4 × 2,000 = 8,000 bp. All have the same length, so the ideal lane has **one band at 2,000 bp**.

One band doesn't establish one cut. It identifies one resolved size under these assumptions. [New England Biolabs explains that equal-size fragments are indistinguishable on agarose gels](https://www.neb.com/faqs/why-are-there-extra-bands-visible-on-polyacrylamide-gels).

### 5. Three distinct positions give three fragments

Combine the cut positions from both enzymes: **1,000, 4,000, and 6,500 bp**. The circular intervals are:

- 4,000 − 1,000 = **3,000 bp**.
- 6,500 − 4,000 = **2,500 bp**.
- (9,000 − 6,500) + 1,000 = **3,500 bp**.

They sum to **9,000 bp** and give **three fragments**, with ideal bands at **2,500, 3,000, and 3,500 bp**. The student counted enzyme types. The fragment rule uses the distinct positions actually cut across the molecule.

### 6. The sum omitted a repeated length

The 2,400 bp band represents **two fragments per starting molecule** in this map. The correct accounting is:

**900 + 1,500 + (2 × 2,400) = 7,200 bp.**

Adding each distinct band size once gives 4,800 bp, but it throws away one 2,400 bp fragment from the calculation. The given map accounts for all the DNA. A list of band sizes alone doesn't necessarily tell you how many equal-length fragments contributed to each band.

### 7. Two neighboring intervals stay connected

Only the 1,000 and 4,500 bp boundaries are cut. The resulting lengths are:

**4,500 − 1,000 = 3,500 bp**

**(6,000 − 4,500) + 1,000 = 2,500 bp**

The answer is **two fragments**, with ideal bands at **2,500 and 3,500 bp**. The complete digest's 1,500 bp and 2,000 bp intervals remain connected through the uncut 2,500 bp site, making the 3,500 bp product. The other 2,500 bp interval remains unchanged. Total: **3,500 + 2,500 = 6,000 bp**.

This question deliberately gives every copy the same missed cut. A mixed partial digest may contain fully cut copies alongside incompletely cut copies, so its lane can include complete-digest products too. The arithmetic predicts the stated case; it doesn't identify the cause of an unexpected band in a real experiment.

### 8. B divides the 4,000 bp A fragment

A alone divides the circle into 2,000 and 4,000 bp intervals. Adding one distinct B cut splits one of those intervals into two and leaves the other unchanged.

The double digest still has a 2,000 bp fragment, while **1,000 + 3,000 = 4,000 bp**. B therefore lies inside the 4,000 bp A interval. It can't lie inside the 2,000 bp interval: two positive fragments from that interval couldn't include the observed 3,000 bp piece.

One consistent map, traveling around the circle, is:

**A at 0 → 2,000 bp → A at 2,000 → 3,000 bp → B at 5,000 → 1,000 bp → A at 0.**

Check each digest:

| Digest | Check against the proposed map |
| --- | --- |
| A alone | 0 → 2,000 gives 2,000 bp; the remaining arc gives 4,000 bp |
| B alone | One cut opens the full 6,000 bp circle |
| A + B | Consecutive arcs are 2,000, 3,000, and 1,000 bp |

A reflected map fits too. With A sites again labeled 0 and 2,000 bp, put B at **3,000 bp**: the double-digest intervals become **2,000, 1,000, and 3,000 bp**, and both single digests still match. This map is a reflection of the first, rotated to put an A site at 0. These digest lengths establish relative spacing, but supply no reference direction that distinguishes the two drawings.

## Where the ideal gel model stops

A band is a visible group of DNA molecules with similar migration through the gel. Our predictions assume different linear fragment lengths resolve separately. In a real gel, nearby sizes may remain unresolved; [Addgene's gel electrophoresis guide](https://www.addgene.org/protocols/gel-electrophoresis/) explains that gel concentration affects size separation. A faint or unresolved product can also defeat a simple visual count.

Uncut circular DNA needs particular care. Different conformations of the same plasmid can migrate differently and produce several bands, as shown in [Addgene's guide to plasmid verification](https://blog.addgene.org/plasmids-101-how-to-verify-your-plasmid). Don't read those positions as though each were a different linear fragment length.

For these practice problems, calculate the products first and group equal lengths second. For a real lane, you also need the experimental context before deciding why an observed pattern differs from the prediction.

## Keep the decision you missed, then try new numbers

If you missed question 4, a useful recall prompt is: “An 8,000 bp circle gives four 2,000 bp fragments. How many ideal agarose bands?” The answer is one. A broad prompt such as “Explain restriction digestion” wouldn't isolate that counting error.

These narrower prompts cover the other common slips:

| Recall prompt | Answer |
| --- | --- |
| A circular DNA molecule has one double-strand cut. How many products, and what topology? | One full-length linear product. |
| What interval is easy to omit when calculating circular fragment lengths from coordinates? | The interval from the last cut through the origin to the first cut. |
| When checking total DNA length, do repeated fragment lengths count once or separately? | Separately. Include every fragment, even when equal lengths share a band. |

The [guide to making better flashcards](/blog/how-to-make-better-flashcards/) explains how to keep a prompt answerable without the original worksheet. For using short recall alongside broader biology study, see the [AP Biology flashcard guide](/blog/how-to-use-flashcards-for-ap-biology/).

Then close the worked examples and try these two fresh transfer problems:

1. A **5,400 bp line** is cut at **600, 2,100, and 3,900 bp**. List all products, check their sum, and predict ideal bands.
2. Change only that molecule's topology to a **5,400 bp circle**, keeping the same cut coordinates. Recalculate the products. Explain what happened to the two end fragments from the linear case.

Check after solving: the line gives **600, 1,500, 1,800, and 1,500 bp**, totaling 5,400 bp, with **three ideal bands** at 600, 1,500, and 1,800 bp. The circle gives **1,500, 1,800, and 2,100 bp**, also totaling 5,400 bp, with **three ideal bands**. Its 2,100 bp wraparound fragment combines the line's 1,500 bp final interval and 600 bp initial interval. The other 1,500 bp fragment stays separate.

*AI tools assisted substantially with research, writing, editing, and original exercise construction. Exercise arithmetic was checked programmatically. The illustration is AI-generated. These synthetic problems have not been validated in a classroom or laboratory.*
