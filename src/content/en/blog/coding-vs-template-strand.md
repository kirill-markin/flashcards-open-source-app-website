---
title: "Coding vs Template Strand: Transcription Practice"
description: "Work out RNA from coding or template DNA strands with labeled 5′ and 3′ ends, worked examples, and practice questions that explain common mistakes."
date: "2026-10-03"
image: "/blog/coding-vs-template-strand.png"
keywords:
  - "coding vs template strand"
  - "template strand to mRNA"
  - "coding strand to mRNA"
  - "transcription practice questions"
  - "reverse complement DNA to RNA"
---

A template strand written **3′–CTGAATGC–5′** gives the RNA segment **5′–GACUUACG–3′**. Keep those DNA letters but change the end labels to **5′–CTGAATGC–3′**, and the answer becomes **5′–GCAUUCAG–3′**. The base-pairing rules haven't changed. The direction has.

That's the trap in coding vs template strand questions. Before converting bases, identify which DNA strand you're given and which way it's written. Throughout this practice, we're working with **short, explicitly transcribed segments before RNA processing**, rather than deriving complete mature mRNAs.

![A printmaker compares a blue leaf print with its mirrored design on an inked linocut block](/blog/coding-vs-template-strand.png)

## Coding and template describe jobs for one gene

The **template strand** is the DNA strand RNA polymerase reads. Its **coding strand** partner matches the corresponding initial RNA sequence, with T where RNA has U. Coding is also called *sense* or *non-template*; template is also called *antisense*. [OpenStax explains these relationships](https://openstax.org/books/organic-chemistry/pages/28-4-transcription-of-dna).

For a short transcribed region, align the three sequences like this:

```text
Coding DNA:    5′–GACTTACG–3′
Template DNA:  3′–CTGAATGC–5′
RNA:           5′–GACUUACG–3′
```

The coding strand and RNA run in the same direction. The template runs in the opposite direction to each: template and coding DNA are **antiparallel**, as are the template and its aligned RNA complement. The [NHGRI gene-finding guide](https://www.genome.gov/25020001/online-education-kit-bioinformatics-finding-genes) illustrates the opposite directions of the DNA strands.

“Template” isn't a permanent top/bottom label. These roles apply to the gene being transcribed; another gene can use the opposite strand as its template. The promoter's location and orientation establish the transcription direction and template choice ([MIT introductory biology notes, PDF](https://ocw.mit.edu/courses/7-016-introductory-biology-fall-2018/1b4657e96df545e0edac86b7dd433cab_MIT7_016F18rec6.pdf)).

If your worksheet asks for mRNA, check whether it also specifies RNA processing. Removing introns can change the sequence of a mature mRNA ([NHGRI RNA fact sheet](https://www.genome.gov/about-genomics/educational-resources/fact-sheets/ribonucleic-acid-fact-sheet)). Our examples stop at transcription. They don't specify a protein reading frame, so there's no need to group bases into codons.

## Decide the direction before the bases

RNA polymerase reads its template **3′→5′** and builds RNA **5′→3′** ([MIT introductory biology notes, PDF](https://ocw.mit.edu/courses/7-016-introductory-biology-fall-2018/1b4657e96df545e0edac86b7dd433cab_MIT7_016F18rec6.pdf)). A worksheet can print the template either way around.

Use this order on paper:

1. **Identify the strand** from its label or the stated transcription direction together with the DNA end labels.
2. **Mark both ends.** Start at the template's 3′ end or the coding strand's 5′ end.
3. **Write RNA 5′→3′.** Complement a template; copy coding DNA with T→U.
4. **Check.** RNA complements the template and matches coding DNA apart from T/U when the sequences are aligned with their ends labeled.

The output should contain no T and, for these unprocessed segments, the same number of bases as the input.

| DNA input as printed | How to get the RNA in 5′→3′ order |
| --- | --- |
| Coding, 5′→3′ | Keep the order; replace T with U |
| Coding, 3′→5′ | Reverse the order; replace T with U |
| Template, 3′→5′ | Write the RNA complement in the printed order |
| Template, 5′→3′ | Reverse the order and write the RNA complement |

For **template DNA to RNA**, the base conversions are:

| Template DNA base | RNA base |
| --- | --- |
| A | U |
| T | A |
| C | G |
| G | C |

“Replace T with U” applies directly to the **coding** sequence. A template needs complementary bases.

## Three worked conversions

### A template already written 3′→5′

Given template DNA **3′–CTGAATGC–5′**, RNA polymerase would read the displayed segment from left to right. Write the RNA complement underneath:

```text
Template DNA:  3′–CTGAATGC–5′
RNA:           5′–GACUUACG–3′
```

Pair C with G, T with A, and each template A with U. The RNA is already 5′→3′; don't reverse it.

### A template written 5′→3′

Consider **5′–CTGAATGC–3′**. It has the same displayed letters as the previous example but opposite end labels, so it describes a different oriented DNA sequence. To rewrite the *same* strand in the opposite direction, you'd have to reverse the letters as well as the labels.

For this new template, polymerase would read from right to left. Complementing underneath gives:

```text
Template DNA:  5′–CTGAATGC–3′
Aligned RNA:   3′–GACUUACG–5′
```

The aligned RNA is displayed 3′→5′. Reverse the letters and end labels to report it 5′→3′:

```text
RNA answer:    5′–GCAUUCAG–3′
```

This is the **reverse complement**: complement, then reverse. Reversing the template first and then complementing also works. The tempting answer **5′–GACUUACG–3′** has the complementary letters in the wrong order. Swapping labels alone doesn't fix it.

### A coding strand written 5′→3′

Given coding DNA **5′–GACTTACG–3′**, keep the order and replace T with U:

```text
Coding DNA:    5′–GACTTACG–3′
RNA:           5′–GACUUACG–3′
```

Don't complement coding DNA. Polymerase uses its template partner, **3′–CTGAATGC–5′**, but the coding sequence gives you the same RNA directly.

## Read a wrong answer as a clue

Compare your result with the specific input you were given. Different mistakes need different fixes.

| What you notice | Likely mistake | What to check next |
| --- | --- | --- |
| Your RNA matches the template's letters apart from T/U | You treated the template as coding | Use complementary bases against the template |
| Your RNA complements a coding input | You treated coding as template | Match the coding sequence in the same 5′→3′ orientation |
| Your letters complement a 5′→3′ template straight across, but you labeled the output 5′→3′ | You forgot to reverse the written order | Label the aligned complement 3′→5′, then rewrite it from its 5′ end |
| Your RNA still contains T | You wrote a DNA sequence as the output | Use U in the RNA alphabet |

An ATG alone doesn't identify the coding strand or transcription start. Methionine codons also occur within genes ([NHGRI gene-finding guide](https://www.genome.gov/25020001/online-education-kit-bioinformatics-finding-genes)). Use the supplied strand label or transcription information; don't choose the role from a familiar triplet.

## Mixed transcription practice questions

Write each RNA segment **5′→3′**, with both ends labeled. Identify the strand role and any reversal needed. All displayed regions are transcribed; ignore processing and try these before reading the answers.

1. Coding DNA is **5′–TCGACATG–3′**. Write the corresponding RNA segment.
2. Template DNA is **3′–AGCCTTGA–5′**. Write the corresponding RNA segment.
3. Template DNA is **5′–AGCCTTGA–3′**. Write the corresponding RNA segment. Explain why it differs from question 2.
4. Coding DNA is **3′–CGATTCAG–5′**. Write the corresponding RNA segment.
5. The DNA region below is transcribed while RNA polymerase moves **from right to left**. Which strand is the template, and what RNA segment is made?

   ```text
   Top DNA:     5′–CAGTTCGA–3′
   Bottom DNA:  3′–GTCAAGCT–5′
   ```

6. A learner is given template DNA **5′–TACGGTCA–3′** and writes RNA **5′–AUGCCAGU–3′**. Identify the mistake and give the correct answer.
7. A question provides DNA **5′–ATGCCATC–3′** and asks for its RNA transcript, without stating the strand's role or transcription direction. Can you give a unique answer? Show how the two possible roles change the result.

### Answers, with the step that matters

**1. RNA: 5′–UCGACAUG–3′.** Coding DNA is already 5′→3′. Keep the order and replace T with U.

**2. RNA: 5′–UCGGAACU–3′.** Complement left to right. The RNA's 5′ end aligns with the template's 3′ end.

**3. RNA: 5′–UCAAGGCU–3′.** The aligned complement is **3′–UCGGAACU–5′**; reverse it. Opposite end labels make questions 2 and 3 different oriented sequences despite identical displayed letters.

**4. RNA: 5′–GACUUAGC–3′.** Rewrite coding DNA as **5′–GACTTAGC–3′**, then replace T with U. Reversing its display doesn't change its coding role.

**5. Top is template; RNA: 5′–UCGAACUG–3′.** Moving right to left takes polymerase along the top strand 3′→5′. Complement in that direction. As a check, rewrite bottom coding DNA from its 5′ end: **5′–TCGAACTG–3′**. Replacing T with U gives the same answer. For left-to-right transcription, the bottom would be template instead.

**6. RNA: 5′–UGACCGUA–3′.** The aligned complement is **3′–AUGCCAGU–5′**. The learner paired bases correctly but reported them in the wrong direction. Reverse the letters and labels to write RNA 5′→3′.

**7. No unique answer.** If the supplied strand is coding, RNA is **5′–AUGCCAUC–3′**. If it's template, RNA is the reverse complement, **5′–GAUGGCAU–3′**. ATG doesn't settle the role. You need a strand label or transcription information that determines it. If ends are also absent, you need orientation or a stated sequence-writing convention.

## Turn the error into a small flashcard

Record the failed step after a missed question. These cards target different errors; use them on paper or as text cards in Nibomo.

| Front | Back |
| --- | --- |
| Template DNA is 5′–CTGAATGC–3′. Write the unprocessed RNA segment 5′→3′. | 5′–GCAUUCAG–3′. The aligned complement is 3′–GACUUACG–5′; reverse its written order. |
| Coding DNA is 5′–TCGACATG–3′. Write the unprocessed RNA segment 5′→3′. | 5′–UCGACAUG–3′. Keep the order and replace T with U; coding DNA matches RNA rather than pairing with it. |
| A transcribed DNA segment is 5′–ATGCCATC–3′. Is that enough to identify its RNA sequence? | No. You need its coding/template role or transcription information that determines it. ATG alone doesn't supply the missing role. |

Keep roles and ends on conversion-card fronts, and put the answer plus a short reason on the back. Try fresh sequences and mix input types so you must choose the operation each time. The guide to [turning practice questions into flashcards](/blog/how-to-turn-practice-questions-into-flashcards/) covers this workflow; [making better flashcards](/blog/how-to-make-better-flashcards/) helps keep prompts focused.

Above your next answer space, write **strand role → input ends → RNA 5′→3′**. Make the copying, complementing, or reversing decision before starting the sequence.
