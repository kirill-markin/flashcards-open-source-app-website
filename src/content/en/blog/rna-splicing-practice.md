---
title: "RNA Splicing Practice Problems With Answers"
description: "Build mature mRNA from labeled exons and introns, compare exon inclusion and skipping, and trace new exon junctions with six explained practice problems."
date: "2026-11-05"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/1a049cf3837adde779094cc895f9c3caf38cc47e57ba09cb566c4ec19dca1c4e.webp"
keywords:
  - "RNA splicing practice problems"
  - "alternative splicing practice"
  - "exons and introns"
  - "pre-mRNA to mature mRNA"
---

Exon 1 ends in **GG**. In one mature mRNA below, the next two bases are **AA**. In the other, they're **UC**. Both come from the same pre-mRNA. Skipping exon 2 gives exon 1 a different neighbor.

Work through both versions on paper, then try six RNA splicing practice problems with explained answers. You'll build a mature mRNA, use short fragments to tell the two versions apart, and see what happens when a codon crosses an exon boundary.

![A person lifts a red wooden wagon away while the other three toy train pieces stay joined](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/1a049cf3837adde779094cc895f9c3caf38cc47e57ba09cb566c4ec19dca1c4e.webp)

## What stays in the mature mRNA

The **pre-mRNA** is the RNA copy made during transcription, before processing is complete. It contains both exons and introns in this example. Splicing removes introns and joins the exons that stay. The point where two exons meet in the spliced RNA is an **exon junction**. For a short overview, see the [NHGRI glossary entry on introns](https://www.genome.gov/genetics-glossary/Intron).

**Alternative splicing** can produce different versions, or **isoforms**, from the same pre-mRNA. In exon skipping, an exon is present in one version and absent in another. When exon 2 is skipped below, exon 1 joins straight to exon 3. For examples from human cells, see Figure 2 of [Dittmar and colleagues' study](https://pubmed.ncbi.nlm.nih.gov/22354987/).

Exons can include **untranslated regions (UTRs)** that stay in the mature mRNA. The 5′ UTR is before the start codon, and the 3′ UTR is after the stop codon. The 5′ cap and 3′ poly(A) tail come from separate processing steps. For a diagram that shows how these pieces fit together, see [Figure 15.11 in OpenStax Biology 2e](https://openstax.org/books/biology-2e/pages/15-4-rna-processing-in-eukaryotes).

The exercises start with RNA. If you need to get from DNA to RNA first, try the [coding vs template strand exercises](/blog/coding-vs-template-strand/).

## One pre-mRNA, two splice patterns

This classroom transcript has **37 bases**. `E` labels an exon, `I` labels an intron, and the positions are numbered from the 5′ end of the original pre-mRNA. The exercise gives you the block boundaries and both splice patterns. The mature mRNA sequences and lengths below leave out the cap and tail.

```text
Block         E1       I1       E2    I2       E3     I3       E4
Positions     1–6      7–12     13–15 16–21    22–25  26–31    32–37
Pre-mRNA   5′–CCAUGG | GUCUAG | AAC | GUAUAG | UCCG | GUGCAG | AUAAGG–3′
```

On paper, cross out the blocks that the splice pattern removes. Starting at the **5′ end**, copy the remaining blocks in order. Mark a `|` where two exons meet, then write the sequence again without the bars. Add the lengths of the exons you kept to check your base count.

### Isoform A keeps exon 2

Cross out I1, I2, and I3. The first junction is `GG|AA`. The `GG` comes from the end of exon 1 and the `AA` from the start of exon 2. Taking two bases from each side of the remaining junctions gives `AC|UC` for E2|E3 and `CG|AU` for E3|E4.

```text
Exon order    E1     | E2  | E3   | E4
With joins 5′–CCAUGG | AAC | UCCG | AUAAGG–3′
Joined     5′–CCAUGGAACUCCGAUAAGG–3′
```

The spliced sequence has **19 bases** (6 + 3 + 4 + 6).

### Isoform B skips exon 2

Cross out the stretch from I1 through I2, including E2, and then cross out I3. Now exon 1 joins directly to exon 3 at `GG|UC`. The `CG|AU` join between exons 3 and 4 is still there.

```text
Exon order    E1     | E3   | E4
With joins 5′–CCAUGG | UCCG | AUAAGG–3′
Joined     5′–CCAUGGUCCGAUAAGG–3′
```

The spliced sequence has **16 bases** (6 + 4 + 6). The three-base difference comes from E2. Both versions lose the same intron blocks.

## Six practice problems

Use the same pre-mRNA for all six problems. For the fragment questions, consider only isoforms A and B.

1. For a first rehearsal, cover the worked sequences and rebuild isoform A using only the pre-mRNA and the rule that A keeps E2. Write the sequence 5′→3′, mark every exon junction, and count how many bases were removed from the 37-base pre-mRNA.
2. A fragment contains **GGUC**, with a junction between its second and third bases. Which two exons supply those bases, and which isoform does that identify? Name the exon that was skipped.
3. A different fragment contains **CGAU**, also with a junction between its second and third bases. Which two exons meet there? Is that junction enough to tell A and B apart?
4. For both isoforms, the start is the **AUG at bases 3–5** and the stop is the **UAA in E4**. A classmate crosses out the first `CC` of E1 and the last `GG` of E4 because neither is translated. Should those bases stay in the mature mRNA? How do they differ from the `GUCUAG` block?
5. A learner writes **5′–CCAUGGUCCGGUGCAGAUAAGG–3′** for isoform B. Which block was copied by mistake? Repair the sequence and mark the restored junction.
6. In each isoform, group the bases into triplets starting at **AUG at bases 3–5**. What is the next codon in each isoform? Mark the exon junction within that codon.

## Answers with the joins visible

**1. Isoform A is 5′–CCAUGG|AAC|UCCG|AUAAGG–3′.** The joins are E1|E2, E2|E3, and E3|E4. I1, I2, and I3 each contribute six removed bases, so 37 − 18 = **19**. Without the bars, the sequence is **5′–CCAUGGAACUCCGAUAAGG–3′**.

**2. `GG|UC` is the E1|E3 junction in isoform B.** E1 supplies the final `GG` and E3 supplies the opening `UC`. With those two exons directly adjacent, E2 was skipped.

**3. `CG|AU` is the E3|E4 junction in both isoforms.** E3 ends in `CG` and E4 starts with `AU`. Either isoform could have supplied the fragment. To tell them apart, look at the junction after E1. It's `GG|AA` in A and `GG|UC` in B.

**4. Keep both pairs of bases.** `CC` lies before the stated AUG and is part of the **5′ UTR** in E1. `GG` lies after the stated UAA and is part of the **3′ UTR** in E4. Both pairs are present in the two spliced RNAs. `GUCUAG` is I1, which is removed from both.

**5. The extra block is I3, `GUGCAG`.** It sits between `UCCG` (E3) and `AUAAGG` (E4) in the learner's answer. Delete those six bases to restore E3|E4 at `CG|AU`. The repaired sequence is **5′–CCAUGG|UCCG|AUAAGG–3′**, or **5′–CCAUGGUCCGAUAAGG–3′** without the junction marks.

**6. The first codon after AUG is `G|AA` in A and `G|UC` in B.** The codon starts at base 6, the final `G` of E1. Its next two bases come from E2 in A and E3 in B. For more practice reading codons in mature RNA, try the [mRNA translation practice problems](/blog/mrna-translation-practice/).

## Recall one join at a time

Cover the answers and write the exon order from memory. Then pick a junction and name the two blocks that supply its bases. Try the same prompt again in a few days. Recalling the answer after a delay can help you remember it longer, as shown in a [study of spaced retrieval practice](https://pubmed.ncbi.nlm.nih.gov/17576148/).

Review exon junctions and compare isoforms with the [RNA splicing flashcards](/catalog/packages/rna-splicing-exon-junction-flashcards/). For broader review that also covers the 5′ cap and the poly(A) tail, try the English-language [AP Biology Complete Course Review deck](/catalog/packages/ap-biology-flashcards-complete-course-review/).

*AI assisted with the research and writing. The illustration is AI-generated. The RNA sequences were invented for these exercises.*
