---
title: "PCR Primer Practice: Forward, Reverse, and Product Length"
description: "Choose forward and reverse PCR primers from labeled DNA, check extension direction, and calculate product length with original practice and explained answers."
date: "2026-11-05"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/73a96d9b70deebec1f9de470a7c8ccc4cd6ca7df32dacf07f277fa4cb62aa3d6.webp"
keywords:
  - "PCR primer practice"
  - "forward reverse primer practice"
  - "reverse complement"
  - "PCR product length"
---

A reverse primer can have the right complementary bases and still be written backward. For the DNA segment **5′–ACGTTC–3′**, its aligned complement is **3′–TGCAAG–5′**. The primer sequence reported 5′→3′ is **GAACGT**. Relabeling TGCAAG as 5′→3′ would change the sequence.

This PCR primer practice worksheet uses one artificial DNA region to connect that reverse-complement step to primer binding, extension direction, and product length. Try the six questions before reading the answers. The six-base primers are deliberately short classroom examples, not laboratory designs.

![A craftsperson adjusts two inward-facing clamp jaws around a wooden block, illustrating the endpoints in PCR primer practice](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/73a96d9b70deebec1f9de470a7c8ccc4cd6ca7df32dacf07f277fa4cb62aa3d6.webp)

## Keep the ends attached to the letters

PCR uses a pair of primers that bind opposite DNA strands and provide starting points for DNA synthesis. [Addgene's PCR explanation](https://www.addgene.org/protocols/pcr/) describes primer binding and extension. DNA synthesis runs **5′→3′**, adding bases to a primer's **3′ end**. The two primers must therefore point inward across the region being copied.

For this worksheet, call the top strand **plus** and the bottom **minus**. Report every primer **5′→3′**. This matches the convention in [NCBI Primer-BLAST](https://www.ncbi.nlm.nih.gov/tools/primer-blast/): the forward primer sequence matches the plus strand, and the reverse primer sequence matches the minus strand, both read 5′→3′.

With the plus strand displayed 5′→3′ from left to right:

- The **forward primer** matches the left plus-strand site. It binds the minus strand and extends right.
- The **reverse primer** is the reverse complement of the right plus-strand site. It binds the plus strand and extends left.

Complementary bases are A–T and C–G. Aligned strands have opposite end labels. If you need that step separately, try the [coding vs template strand exercises](/blog/coding-vs-template-strand/). Here, both DNA strands serve as templates for copying; no transcription role needs to be inferred.

## One DNA region, with coordinates

Positions run **1–36 from left to right**, using plus-strand coordinates for both rows. Each block contains six base pairs. Spaces only help counting.

```text
Positions:   1–6    7–12   13–18  19–24  25–30  31–36
Plus:     5′–ATGCCA TCGTAA GACCTG TATCGG ACGTTC GATGCA–3′
Minus:    3′–TACGGT AGCATT CTGGAC ATAGCC TGCAAG CTACGT–5′
```

For questions 1–5, use the sites at **7–12** and **25–30**. Assume exact matching and no added primer tails. Calculate the product bounded by the two primers, including the primer sequences. Individual extension strands in the first PCR cycles can be longer; those aren't the product lengths requested here.

## Six questions to work on paper

1. Choose the forward primer for positions **7–12**, reporting it 5′→3′: **TCGTAA** or **AGCATT**. Which strand does it bind?
2. Choose the reverse primer for positions **25–30**, again 5′→3′: **ACGTTC**, **TGCAAG**, or **GAACGT**. Show the aligned complement before choosing.
3. Someone gives you only the minus-strand site **3′–TGCAAG–5′** at positions 25–30. Rewrite that same strand segment 5′→3′. Does being printed on the bottom mean the reverse primer binds the bottom strand?
4. Put both chosen primers on the full diagram. Give each primer's **3′ coordinate** and extension direction. Explain why drawing both arrows rightward fails the intended pair's orientation.
5. Calculate the bounded PCR product length. A learner gives **12 bp**, counting positions 13–24 between the sites. Correct the answer and write the product's plus-strand sequence 5′→3′.
6. Start again with the same 36-bp region, but move the forward site to **10–15** and the reverse site to **22–27**. Find both primers 5′→3′ and the new product length. How much shorter is it than question 5?

## Answers with the direction visible

### 1. Forward: 5′–TCGTAA–3′

It binds minus-strand **3′–AGCATT–5′** at positions 7–12. TCGTAA matches the plus strand because its complementary binding partner is the minus strand. AGCATT is the bottom site's displayed sequence, read 3′→5′; it isn't the forward primer reported 5′→3′.

### 2. Reverse: 5′–GAACGT–3′

```text
Plus site:         5′–ACGTTC–3′
Aligned primer:    3′–TGCAAG–5′
Reported primer:   5′–GAACGT–3′
```

TGCAAG is the complement in the displayed alignment. Reverse its written order to report the primer 5′→3′. ACGTTC copies the plus site; it doesn't give the reverse primer for that site.

### 3. Same segment, reversed display: 5′–GAACGT–3′

Start reading the supplied minus segment at its right-hand 5′ end. You get GAACGT. No base substitution is needed: you're rewriting the same oriented strand segment.

The reverse primer **matches** that minus-strand sequence and **binds the plus strand**. Matching one strand and binding its complementary partner are different relationships.

### 4. Forward extends right; reverse extends left

The forward primer's 3′ end sits at **position 12**. The reverse primer's 3′ end sits at **position 25**. Their inward extension directions are:

```text
Plus:    5′–ATGCCA TCGTAA GACCTG TATCGG ACGTTC GATGCA–3′
Reverse:                            ←3′–TGCAAG–5′
Forward:        5′–TCGTAA–3′→
Minus:   3′–TACGGT AGCATT CTGGAC ATAGCC TGCAAG CTACGT–5′
```

The reverse primer's leftmost end is 3′ when aligned with the displayed plus strand. Drawing its extension rightward would extend from its 5′ end, contrary to the synthesis rule.

### 5. The bounded product is 24 bp

Count from the forward site's outer boundary at **7** through the reverse site's outer boundary at **30**, including both endpoints:

```text
Length:       30 − 7 + 1 = 24 bp
Plus product: 5′–TCGTAAGACCTGTATCGGACGTTC–3′
```

The middle has 12 bp, but the product also includes both six-base primer sequences: **6 + 12 + 6 = 24**. Count the primer-defined outer boundaries, not only the gap or the two 3′ coordinates.

### 6. Moving both sites inward gives 18 bp

The plus segment at **10–15** is TAAGAC, giving forward primer **5′–TAAGAC–3′**. At **22–27**, the plus segment is CGGACG. Its aligned complement is **3′–GCCTGC–5′**, giving reverse primer **5′–CGTCCG–3′**.

```text
Length:       27 − 10 + 1 = 18 bp
Plus product: 5′–TAAGACCTGTATCGGACG–3′
```

The product is **6 bp shorter**: each outer boundary moved inward by three bases. The new 3′ coordinates are 15 for the forward primer and 22 for the reverse.

## Review the decision you missed

Cover one answer, redraw its aligned strands, and work out the sequence before checking. Revisit missed steps on later days. If the reverse complement caused trouble, use the [DNA reverse complement flashcards](/catalog/packages/dna-reverse-complement-flashcards/) to practice writing the aligned DNA partner and reading it from its 5′ end. If the product length was wrong, mark the two outer boundaries before counting.

The English [AP Biology complete course review deck](/catalog/packages/ap-biology-flashcards-complete-course-review/) includes broader PCR concepts, including why primers define boundaries and supply 3′ ends. Regular recall with spaced review helps you practice retrieving these concepts after a delay, supporting longer-term retention. Use it for broader biology review; the six sequence exercises above are specific to this worksheet. For a separate process, the [mRNA translation practice](/blog/mrna-translation-practice/) works on reading frames and mutations.

These answers establish orientation and arithmetic under the stated model. They don't establish primer suitability for real DNA; Primer-BLAST also considers specificity and melting-temperature criteria.

*AI assisted the research, writing, and sequence checks; Python checked the artificial complements, coordinates, and lengths. The illustration is AI-generated. These are classroom exercises, not experimental results.*
