---
title: "mRNA Translation Practice: Reading Frames, Stops, and Mutations"
description: "Translate mRNA into amino acids with worked reading-frame examples, original practice questions, and answers explaining start, stop, and mutation mistakes."
date: "2026-10-14"
image: "/blog/mrna-translation-practice.png"
keywords:
  - "mRNA translation practice"
  - "reading frame practice"
  - "mRNA to amino acid sequence"
  - "start and stop codons"
  - "frameshift practice"
---

The sequence **5′–AUGCUAAGGUGA–3′** contains the letters `UAA`. Yet, starting at its first AUG, it produces **Met–Leu–Arg** before stopping at UGA. The UAA crosses a codon boundary. Finding three familiar letters somewhere in a sequence isn't enough; they have to sit in the frame you're translating.

To translate mRNA into an amino acid sequence, choose the specified start, draw the triplets, and keep their boundaries. The three worked examples below show the method; seven practice questions let you check it. All sequences are original, artificial classroom examples.

![A person feeds a punched paper melody strip into a hand-cranked music box](/blog/mrna-translation-practice.png)

## Set the rules before translating

For every problem here, use the **standard genetic code** and the **initiation AUG specified by the exercise**. Treat each input as a segment of already mature mRNA; there's no splicing step to infer. Write the newly translated amino acid sequence, counting the initial methionine. We aren't predicting later protein processing or identifying real genes.

A **codon** is a group of three nucleotides that specifies an amino acid or a stop signal ([NHGRI's codon definition](https://www.genome.gov/genetics-glossary/Codon)). Read the mRNA **5′→3′**. Once initiation establishes the frame, use consecutive, non-overlapping triplets. The resulting amino acid sequence runs from its N terminus toward its C terminus ([OpenStax on translation](https://openstax.org/books/biology-2e/pages/15-5-ribosomes-and-protein-synthesis)).

In this model, **AUG gives Met**, and **UAA, UAG, and UGA are stops**. A stop adds no amino acid. A later in-frame AUG adds another Met; it doesn't reset the frame. These assignments use [NCBI's standard code, table 1](https://www.ncbi.nlm.nih.gov/Taxonomy/Utils/wprintgc.cgi#SG1). Its compact table prints T; use U for the corresponding RNA codon.

The start is given deliberately. Real initiation depends on biological context; finding the first AUG or the longest open reading frame in arbitrary letters doesn't establish a real gene. [OpenStax discusses initiation context](https://openstax.org/books/biology-2e/pages/15-5-ribosomes-and-protein-synthesis).

If you still need to get RNA from DNA, do that separately with the [coding vs template strand practice](/blog/coding-vs-template-strand/). Those transcription examples stop before RNA processing and don't specify a translation frame; don't silently treat them as complete mature mRNAs.

## Work it out with a sequence ledger

Before opening a codon chart, put the sequence in 5′→3′ order. Mark the specified start. Split off any prefix, then group triplets from that AUG. Look up each complete codon in that order, stopping at the first in-frame stop. Keep downstream bases visible, but leave them out of this translation product.

### 1. A prefix and a stop both stay outside the amino acid count

**Given:** `5′–CCAUGGCUUUUUAGGGA–3′`. Initiation is at the AUG beginning at base 3, counting from the 5′ end as base 1.

```text
5′–CC | AUG GCU UUU | UAG | GGA–3′
 prefix   residues   stop  downstream
```

| Part | Bases | Positions in the supplied segment | What to record |
| --- | --- | --- | --- |
| Prefix before the selected start | CC | 1–2 | Outside this translation product |
| Initiation codon | AUG | 3–5 | Met, residue 1 |
| Next complete triplet | GCU | 6–8 | Ala, residue 2 |
| Next complete triplet | UUU | 9–11 | Phe, residue 3 |
| First in-frame stop | UAG | 12–14 | Stop; no residue |
| Bases after that stop | GGA | 15–17 | Outside this translation product |

**Answer: Met–Ala–Phe, three amino acid residues.** You can write `AUG GCU UUU UAG` as the codon sequence, including its termination signal. For the amino acid sequence, write only the three residues.

The two-base prefix doesn't need to form a triplet. The first translated codon starts at base 3 because that's the specified initiation site. Grouping the whole segment from base 1 would put the bars in the wrong places.

### 2. The UAA you can see isn't in the frame

**Given:** `5′–AUGCUAAGGUGA–3′`. Initiation is at the first AUG.

```text
Selected frame:  AUG | CUA | AGG | UGA
Translation:    Met   Leu   Arg   stop
```

The apparent UAA uses bases **5–7**: the U and A at the end of CUA, plus the first A of AGG. The selected frame instead groups bases 4–6 as CUA and bases 7–9 as AGG.

**Answer: Met–Leu–Arg, three residues.** The first stop in those triplets is UGA. Circling every UAA, UAG, or UGA substring before marking the frame would give the wrong answer here.

For reading frame practice, make the bars part of your answer. They show why a stop counts, or why it doesn't.

### 3. Change the same sequence in three different ways

Start with this baseline, initiating at its first AUG:

```text
5′–AUG GAA CCU GGC UAA–3′
    Met Glu Pro Gly stop
```

Its product is **Met–Glu–Pro–Gly**. Each row below makes one independent change to that baseline; the changes don't accumulate.

| Change | Triplets from the same initiation AUG | Result |
| --- | --- | --- |
| Replace the middle A in GAA with U | AUG GUA CCU GGC UAA | Met–Val–Pro–Gly |
| Insert one U immediately after AUG | AUG UGA ACC UGG CUA, then one leftover A | Met, then stop at the second codon |
| Insert UUU immediately after AUG | AUG UUU GAA CCU GGC UAA | Met–Phe–Glu–Pro–Gly |

The **substitution** changes GAA to GUA without moving the boundaries. Here, Glu becomes Val. A substitution can also leave the encoded amino acid unchanged or turn an amino-acid codon into a stop. Replacing one base with another keeps the triplet alignment.

For the one-base insertion, write the joined sequence before regrouping:

```text
Baseline:   AUG +     GAACCUGGCUAA
Insert U:   AUG + U + GAACCUGGCUAA
Regroup:    AUG | UGA | ACC | UGG | CUA | A
```

The new second codon is UGA, so translation stops after the initial Met. The later groups show the changed alignment, but they aren't translated in this product. Inserting or deleting a number of coding-region bases that isn't divisible by three changes the downstream frame—a **frameshift** ([NHGRI's frameshift definition](https://www.genome.gov/genetics-glossary/Frameshift-Mutation)).

The three-base insertion adds a complete UUU at a codon boundary. Every original downstream triplet keeps its grouping, and Phe is added after Met. This is an **in-frame insertion**. A three-base insertion within a codon would also preserve the downstream frame, but you would need to regroup the codons around the insertion site. Neither case establishes how a real protein would function. [OpenStax's genetic-code explanation](https://openstax.org/books/biology-2e/pages/15-1-the-genetic-code) gives the triplet basis for comparing these changes.

## Seven practice questions

Try these before reading the answer key. Use a standard-code chart if needed. For each translation, show the codon boundaries and give the amino acid sequence. Include the initial Met, exclude the stop, and say when the supplied segment is incomplete. All initiation sites are specified below.

1. **Prefix and counting.** Translate `5′–GGAAUGACCUACUGACCC–3′`, initiating at the AUG beginning at base 4. How many residues are produced?
2. **A selected later start.** Translate `5′–AUGGCCAUGUCUAAAUAG–3′`, initiating at the **second AUG**, bases 7–9. Which bases are the prefix for this translation?
3. **A false early stop.** For `5′–AUGGUAACCUAG–3′`, initiating at the first AUG, a student says, “There is UAA, so stop before translating ACC.” Is that correct? Show the frame.
4. **RNA printed backward.** The same mRNA segment is printed `3′–AGUCCUGUA–5′`. Rewrite it 5′→3′, then initiate at the AUG at its 5′ end. You already have RNA; no complementary strand is requested.
5. **No supplied stop.** Translate the complete codons in `5′–AUGAACGGUCA–3′`, initiating at the first AUG. What can you conclude about the last two bases and the completeness of the product?
6. **A substitution creates a stop.** The baseline is `5′–AUG UAC GAA UGA–3′`. Change the C in UAC to A, retaining the initial AUG as the initiation site. Give both amino acid sequences and say whether the frame shifts.
7. **One-base vs three-base deletion.** Start from `5′–AUG GAA CCU GGC UAA–3′` and retain its initiation AUG. In separate variants, (a) delete the first G immediately after AUG; (b) delete the entire GAA triplet. Regroup both sequences. Which shifts the frame, and does either supplied variant lack an in-frame stop?

## Answer key: check the boundaries first

### 1. Met–Thr–Tyr; three residues

```text
5′–GGA | AUG ACC UAC UGA | CCC–3′
```

The prefix GGA is outside the selected translation. AUG, ACC, and UAC give three residues; UGA terminates it. The downstream CCC adds none.

### 2. Met–Ser–Lys

```text
5′–AUGGCC | AUG UCU AAA UAG–3′
```

The prefix is **AUGGCC**, bases 1–6. This exercise explicitly selects the second AUG. If initiation had instead been specified at base 1, the product would be **Met–Ala–Met–Ser–Lys**: the second AUG would add an internal Met. Both readings preserve triplet boundaries here, but only the specified start answers this question.

### 3. The student's stop is out of frame

```text
AUG | GUA | ACC | UAG
Met   Val   Thr   stop
```

The product is **Met–Val–Thr**. UAA spans bases 5–7, crossing the GUA/ACC boundary. The in-frame stop is UAG.

### 4. Reverse the order, then translate

```text
As printed:  3′–AGUCCUGUA–5′
Reordered:   5′–AUG UCC UGA–3′
Translation:    Met Ser stop
```

The answer is **Met–Ser**. Reversing the displayed RNA changes its reading order. Complementing it would create a different strand and wouldn't solve this problem.

### 5. Met–Asn–Gly is only the translated fragment

```text
AUG | AAC | GGU | CA
Met   Asn   Gly   incomplete triplet
```

CA contains two bases, so it can't specify another residue on its own. No in-frame stop is supplied. Report **Met–Asn–Gly for the complete codons shown**, with two leftover bases; don't claim that the full translation product ends at Gly. The segment may continue beyond what you've been given.

### 6. Met–Tyr–Glu becomes Met, then stop

```text
Baseline:  AUG | UAC | GAA | UGA
Variant:   AUG | UAA | GAA | UGA
```

The substitution changes UAC to UAA, producing an earlier stop. It's a **nonsense substitution**: a codon that specified an amino acid now specifies termination. The reading frame stays the same. GAA remains downstream of the new stop and adds no Glu to this variant's product.

### 7. Only the one-base deletion shifts the downstream frame

```text
(a) Delete one G:  AUG | AAC | CUG | GCU | AA
(b) Delete GAA:    AUG | CCU | GGC | UAA
```

Variant (a) gives the fragment **Met–Asn–Leu–Ala**, then two leftover bases. It's a frameshift, and **no in-frame stop appears in the supplied segment**. The original UAA letters at the end no longer form a complete codon in the selected frame.

Variant (b) gives **Met–Pro–Gly**, then stops. Removing three bases at this codon boundary removes Glu while preserving the later triplets. It's an in-frame deletion.

## Turn the mistake into a decision card

If you missed a question, save the decision that failed. A whole worksheet on one flashcard makes it hard to tell what you've actually recalled. The [practice-question-to-flashcard guide](/blog/how-to-turn-practice-questions-into-flashcards/) explains how to split a missed problem into a short prompt and a checkable answer.

| Card front | Card back |
| --- | --- |
| In AUG CUA AGG UGA, does the visible UAA terminate translation from the first AUG? | No. It crosses the CUA/AGG boundary. The in-frame UGA stops translation after Met–Leu–Arg. |
| A sequence has two AUGs. Which one should this classroom exercise use? | The specified initiation AUG. If the instruction doesn't establish a start or frame, ask for that information rather than inventing a real gene prediction. |
| Does a stop codon count as an amino acid residue? | No. Count the initial Met and subsequent sense codons up to the first in-frame stop. |
| Insert one base vs three bases after the start: what should you check first? | Redraw the triplets. One base shifts downstream boundaries; three preserve the downstream frame, though the sequence can still change. |
| What can you report from AUG AAC GGU CA with no supplied stop? | Met–Asn–Gly from the complete codons, plus two leftover bases. It's a fragment, not an established full product. |

Keep the cards in a notebook or, optionally, as text cards in [Nibomo](/). On the next attempt, use a fresh sequence so you have to make the decision again. If the amino acid abbreviations are slowing you down, the [amino acid side chain chart](/blog/amino-acid-side-chain-chart/) pairs the three-letter and one-letter codes.

*This article was produced with AI-assisted research and writing. The artificial examples were checked against the cited standard genetic code; they are classroom models, not laboratory results or predictions for real genes.*
