---
title: "Codon vs Anticodon: Direction and Reading Frame Practice"
description: "Practice codon and anticodon directions, read an mRNA sequence in the stated frame, and fix stop-codon mistakes with worked examples and explained answers."
date: "2026-10-10"
image: "/blog/codon-vs-anticodon-practice.png"
keywords:
  - "codon vs anticodon"
  - "codon anticodon practice"
  - "anticodon 5 prime to 3 prime"
  - "reading frame practice"
  - "mRNA to amino acid sequence"
---

An mRNA codon **5′–GCU–3′** pairs with **3′–CGA–5′**. Write that same anticodon from its 5′ end, and it becomes **5′–AGC–3′**. Both anticodon answers can be correct. The end labels decide which one you've written.

Codon vs anticodon questions often hide a second decision: which three mRNA bases belong together? A correctly oriented sequence can still give the wrong amino acids if you start grouping at the wrong base. Work through the examples, then cover the answers and try the eight mixed questions.

![A person compares two beaded curtain strands where an extra white bead shifts a repeating three-color pattern](/blog/codon-vs-anticodon-practice.png)

## Set the exercise rules before converting anything

A **codon** is a three-base unit in the mRNA reading frame. An **anticodon** is a three-base region of a tRNA that pairs with a codon. The paired regions run in opposite directions: they are *antiparallel*. A codon table uses **mRNA codons written 5′→3′**. [OpenStax's translation chapter](https://openstax.org/books/organic-chemistry/pages/28-5-translation-of-rna-protein-biosynthesis) shows both the codon table and the reversal needed to report an anticodon 5′→3′.

All examples here are original, simplified exercises. Use:

- the **standard genetic code**;
- strict **Watson–Crick RNA pairing**, A–U and C–G;
- supplied mature mRNA segments, with no splicing or DNA-to-RNA conversion to perform;
- the start site or reading frame stated in each question;
- the newly translated peptide, before any later processing.

Real tRNAs can recognize more than one codon through **wobble pairing**, which relaxes pairing at the codon's third position. Our calculated anticodons aren't a list of actual cellular tRNAs or all the codons they recognize. [Molecular Biology of the Cell](https://www.ncbi.nlm.nih.gov/books/NBK26829/) explains this limit.

If your starting material is DNA, first use the [coding vs template strand practice](/blog/coding-vs-template-strand/) to obtain the requested RNA. A DNA strand label alone doesn't supply the translation start site.

## Pair first, then report the requested direction

For the codon **5′–GCU–3′**, write the complement underneath with opposite ends:

```text
mRNA codon:       5′–GCU–3′
Paired anticodon: 3′–CGA–5′
```

Each aligned pair is valid: G–C, C–G, U–A. To report the **anticodon 5′→3′**, read the lower line from its 5′ end:

```text
Anticodon answer: 5′–AGC–3′
```

The letters and labels reverse together. Writing **5′–CGA–3′** would describe a different oriented triplet. It isn't another way to label the lower line.

When both sequences are reported 5′→3′, they are **reverse complements**. They don't pair straight across in that display:

| Sequence being reported | 5′→3′ form |
| --- | --- |
| mRNA codon | 5′–GCU–3′ |
| Anticodon | 5′–AGC–3′ |

For an amino acid lookup, use **GCU**, which specifies alanine (**Ala**). Looking up AGC would answer a question about a different mRNA codon.

### Work backward from an anticodon

Suppose the supplied anticodon is **5′–CAG–3′**. Complement it antiparallel, then rewrite the mRNA in table order:

```text
Given anticodon:  5′–CAG–3′
Aligned mRNA:     3′–GUC–5′
mRNA for lookup:  5′–CUG–3′
```

Look up **CUG → leucine (Leu)**. CAG in an mRNA table specifies glutamine (Gln), but CAG was the anticodon in this question.

Use **Table 28.1** in [OpenStax's translation chapter](https://openstax.org/books/organic-chemistry/pages/28-5-translation-of-rna-protein-biosynthesis) for the amino acid assignments throughout this worksheet. Follow first, second, then third base of the **5′→3′ mRNA codon**.

## Mark the start before drawing triplet boundaries

Here is a short, hypothetical mature mRNA segment:

```text
5′–CCAUGGCUAUGUACUGAGGA–3′
```

For this exercise, **translation starts at the AUG occupying bases 3–5**, counting from the displayed 5′ end. Bases 1–2 are untranslated. Group from that specified A:

```text
mRNA:    5′–CC | AUG | GCU | AUG | UAC | UGA | GGA–3′
Meaning:    UTR  Met   Ala   Met   Tyr   stop  UTR
```

The peptide is **Met–Ala–Met–Tyr**, written from its N-terminus to its C-terminus. UTR means *untranslated region*. The leading CC and downstream GGA remain part of this mRNA segment; they contribute no amino acids to this peptide.

The AUG at bases 9–11 adds another methionine within the same peptide. It doesn't restart the sequence. In real translation, initiation depends on surrounding signals; “find any AUG” and “always use the first AUG” aren't general rules for selecting a start site. [OpenStax's protein synthesis chapter](https://openstax.org/books/biology-2e/pages/15-5-ribosomes-and-protein-synthesis) distinguishes initiation from internal AUGs and discusses start-site context. Here, the question supplies the site.

Stop at **UGA, bases 15–17**, the first in-frame stop after the stated start. The downstream GGA occupies bases 18–20. Under our standard-code exercise rules, UAA, UAG, and UGA are termination signals. A release factor recognizes a stop instead of an amino-acid-bearing tRNA, so don't add “Stop” as a residue or invent a stop anticodon. [The Cell's translation chapter](https://www.ncbi.nlm.nih.gov/books/NBK9849/) explains termination by release factors.

A supplied start site tells you where translation begins. A supplied frame may instead describe a fragment of a coding region whose translation began upstream. For that fragment, keep the established frame and decode the complete codons shown; don't search for a new AUG.

For an **mRNA-to-amino-acid sequence** question, use this order:

1. Rewrite the mRNA 5′→3′ if needed. Reverse its display; don't complement it into another molecule.
2. Mark the supplied start, or the first complete codon in the supplied frame.
3. Draw successive, nonoverlapping triplets from that point.
4. Look up each mRNA codon and stop at the first in-frame termination signal.

### A one-base offset changes what you look up

Take a separate fragment **5′–GCAUGACCUAGC–3′**. These are three possible groupings of the same bases, not three claims about where a real gene starts. Letters outside complete triplets are retained in parentheses:

| First base of a complete triplet | Grouping of the displayed fragment | Complete-codon decoding, stopping at a stop |
| --- | --- | --- |
| Base 1 | 5′–GCA / UGA / CCU / AGC–3′ | Ala, then stop |
| Base 2 | 5′–(G) / CAU / GAC / CUA / (GC)–3′ | His–Asp–Leu; no stop shown in this frame |
| Base 3 | 5′–(GC) / AUG / ACC / UAG / (C)–3′ | Met–Thr, then stop |

UGA is a stop in the first grouping. Its letters aren't a codon in the other two. The reading frame determines the triplets, as [OpenStax's genetic code chapter](https://openstax.org/books/biology-2e/pages/15-1-the-genetic-code) explains. An offset in your answer isn't a mutation in the molecule; you have grouped an unchanged sequence differently.

## Eight mixed practice questions

Use the rules above and the linked codon table. Label both ends of every RNA answer. For anticodon questions, report the strict complement requested here; don't expand the answer using wobble.

1. The mRNA codon is **5′–GAC–3′**. Write its anticodon aligned underneath it, then report that anticodon 5′→3′. Which amino acid does the mRNA codon specify?
2. An anticodon is **5′–UGG–3′**. Infer its paired mRNA codon in 5′→3′ order and identify the amino acid.
3. A learner gives **5′–UUC–3′** as the anticodon for **5′–AAG–3′**. The complementary letters look familiar. Report the correct anticodon **5′→3′** and explain the label error.
4. A learner looks up the anticodon **5′–GUC–3′** in an mRNA table and answers “valine.” Infer the codon and correct the amino acid under strict pairing.
5. Translate **5′–GGUAUGCCAAAGUAGGCU–3′**, starting at **AUG, bases 4–6**. Identify the untranslated bases, give the peptide, and explain why the final GCU adds no alanine.
6. A fragment is **5′–GCUAAGCCU–3′**. The question says only “give the amino acid sequence.” No start or frame is supplied. Is there a unique answer? Show the complete triplets beginning at base 1 and at base 2 to support your decision.
7. Translation has already started upstream. The next mRNA codon begins at **base 2** of **5′–AUGGACCUAGC–3′**. Decode the complete codons from that position. Should the AUG at bases 1–3 make you change the stated frame?
8. A learner decodes **5′–AUGGCUUGACCA–3′**, starting at **AUG, bases 1–3**, as “Met–Ala–Stop–Pro.” They also propose an amino-acid-bearing tRNA for UGA. Correct both parts.

## Answers and the step each one tests

**1. Paired anticodon: 3′–CUG–5′; reported anticodon: 5′–GUC–3′; amino acid: aspartate (Asp).** GAC is the mRNA lookup. The paired line is a direct complement with opposite end labels; reverse it to report 5′→3′.

**2. Codon: 5′–CCA–3′; amino acid: proline (Pro).** Under the given **5′–UGG–3′** anticodon, the aligned mRNA is **3′–ACC–5′**. Read that mRNA from its 5′ end before lookup.

**3. Correct anticodon: 5′–CUU–3′.** The learner has written the direct complement but given it the same direction as the codon. Relabeling it **3′–UUC–5′** repairs the paired display. To give the requested 5′→3′ answer, reverse the letters and labels together.

**4. Codon: 5′–GAC–3′; amino acid: Asp.** The aligned mRNA complement of the supplied anticodon is **3′–CAG–5′**. Reverse it to obtain GAC. Valine would be correct for an *mRNA codon* GUC; it isn't the answer for this anticodon.

**5. Peptide: Met–Pro–Lys.** The grouping is **5′–GGU / AUG / CCA / AAG / UAG / GCU–3′**. GGU, bases 1–3, is upstream of the stipulated start. UAG, bases 13–15, terminates the peptide. GCU, bases 16–18, lies downstream of that stop and is untranslated in this exercise. Neither the leading GGU nor the trailing GCU is included.

**6. No unique answer.** Beginning complete triplets at base 1 gives **5′–GCU / AAG / CCU–3′ → Ala–Lys–Pro**. Beginning at base 2 gives **5′–(G) / CUA / AGC / (CU)–3′ → Leu–Ser** for the complete codons. These are possible decodings, not evidence of a translation start site. Ask for the reading frame or initiation information that establishes it. The 5′ label establishes direction, not the first coding base.

**7. Trp–Thr, then stop.** Keep the supplied offset: **5′–(A) / UGG / ACC / UAG / (C)–3′**. The overlapping AUG at bases 1–3 isn't a codon in this frame and doesn't override a frame that translation has already established. The final C is too short to form another complete codon in the displayed fragment.

**8. Peptide: Met–Ala.** The grouping is **5′–AUG / GCU / UGA / CCA–3′**. UGA is a termination signal, not a third amino acid; CCA is downstream and contributes no Pro. Under the stated rules, a release factor handles this stop. Don't assign an amino-acid-bearing tRNA or an anticodon to UGA.

## Make a card for the decision you missed

Choose one or two cards after checking your work. Keep the orientation and frame information on the front, even when it feels obvious immediately after solving the worksheet.

| Card front | Card back |
| --- | --- |
| Use strict A–U/C–G pairing. mRNA codon: 5′–GAC–3′. Report the anticodon 5′→3′. | 5′–GUC–3′. Pair as 3′–CUG–5′ first, then reverse the display. |
| Use strict pairing and the standard code. Anticodon: 5′–UGG–3′. Which mRNA codon and amino acid correspond to it? | 5′–CCA–3′; Pro. Use the mRNA reverse complement for the table lookup. |
| Standard code; translation starts at bases 1–3 of 5′–AUGGCUUGACCA–3′. Give the peptide before processing. | Met–Ala. UGA stops translation; downstream CCA contributes no residue. |

These prompts work on paper or as text flashcards. The guide to [turning practice questions into flashcards](/blog/how-to-turn-practice-questions-into-flashcards/) helps narrow a missed question to its failed step. After you can identify the amino acids, the [amino acid side-chain chart](/blog/amino-acid-side-chain-chart/) is a separate next task for learning their properties.

Try a fresh sequence after reviewing a card. Write **molecule → ends → frame → mRNA lookup** above the answer space, and make each choice before filling in the bases.
