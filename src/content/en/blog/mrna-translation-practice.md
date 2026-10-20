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

Changing **GAA to GAG** leaves Glu in a translated sequence. Changing the same GAA to UAA ends translation at that position. Neither edit shifts the reading frame. A mutation's effect takes two checks: what happened to the triplet boundaries, and what the new codons actually specify.

This mRNA translation practice compares substitutions, insertions, and deletions of one artificial sequence, then gives seven mutation-only questions with explained answers. If grouping an unchanged sequence is still difficult, start with the [codon vs anticodon and reading-frame lesson](/blog/codon-vs-anticodon-practice/). Here, the work begins when the bases change.

![A person feeds a punched paper melody strip into a hand-cranked music box](/blog/mrna-translation-practice.png)

## Keep one baseline while changing the bases

Use the **standard genetic code**, mature mRNA written **5′→3′**, and the specified initiation AUG at **bases 1–3**. All edits retain that AUG. Count the initial Met and report the newly translated sequence before later processing. Stop at the first in-frame stop; if none is supplied, report only the translated fragment. These are classroom models, not real genes.

AUG specifies Met; UAA, UAG, and UGA are stops under [NCBI's standard code, table 1](https://www.ncbi.nlm.nih.gov/Taxonomy/Utils/wprintgc.cgi#SG1). Its compact table uses T where an RNA chart uses U. The supplied start avoids having to infer initiation from biological context, discussed in [OpenStax's protein synthesis chapter](https://openstax.org/books/biology-2e/pages/15-5-ribosomes-and-protein-synthesis).

Our baseline has 15 bases and gives four residues:

```text
Base positions:  1–3   4–6   7–9  10–12  13–15
Baseline:        AUG   GAA   CCU   GGC    UAA
Translation:     Met   Glu   Pro   Gly    stop
Joined sequence: 5′–AUGGAACCUGGCUAA–3′
```

Every variant below starts from that baseline independently. Positions refer to the **original** sequence, so inserting bases doesn't change the meaning of the next row's instructions.

### Write the edit before redrawing the triplets

First record the edit location and write the complete edited sequence without spaces. Only then group from the retained AUG. This makes it easier to catch a base accidentally dropped or duplicated during an insertion.

| Variant | Independent edit to the baseline | Edited sequence, 5′→3′, before grouping |
| --- | --- | --- |
| S1 | Replace A at base 6 with G: GAA → GAG | `AUGGAGCCUGGCUAA` |
| S2 | Replace A at base 5 with U: GAA → GUA | `AUGGUACCUGGCUAA` |
| S3 | Replace G at base 4 with U: GAA → UAA | `AUGUAACCUGGCUAA` |
| I1 | Insert U between original bases 3 and 4, just after AUG | `AUGUGAACCUGGCUAA` |
| I3-boundary | Insert UUU between original bases 3 and 4 | `AUGUUUGAACCUGGCUAA` |
| I3-inside | Insert UUU between original bases 4 and 5, after the G inside GAA | `AUGGUUUAACCUGGCUAA` |
| D1 | Delete G at original base 4 | `AUGAACCUGGCUAA` |
| D3 | Delete original bases 4–6, the whole GAA | `AUGCCUGGCUAA` |

The following ledger draws a triplet grid across each edited segment. **Groups after the first stop are shown only to audit the sequence; they aren't translated.** A final one- or two-base group is the remainder of that grid.

| Variant | Triplet grid from the retained AUG | Translation and residue count |
| --- | --- | --- |
| Baseline | `AUG / GAA / CCU / GGC / UAA` | Met–Glu–Pro–Gly; 4, then stop |
| S1 | `AUG / GAG / CCU / GGC / UAA` | Met–Glu–Pro–Gly; 4, then stop |
| S2 | `AUG / GUA / CCU / GGC / UAA` | Met–Val–Pro–Gly; 4, then stop |
| S3 | `AUG / UAA / CCU / GGC / UAA` | Met; 1, then stop |
| I1 | `AUG / UGA / ACC / UGG / CUA / A` | Met; 1, then stop |
| I3-boundary | `AUG / UUU / GAA / CCU / GGC / UAA` | Met–Phe–Glu–Pro–Gly; 5, then stop |
| I3-inside | `AUG / GUU / UAA / CCU / GGC / UAA` | Met–Val; 2, then stop |
| D1 | `AUG / AAC / CUG / GCU / AA` | Met–Asn–Leu–Ala; 4 in the supplied fragment, no stop shown |
| D3 | `AUG / CCU / GGC / UAA` | Met–Pro–Gly; 3, then stop |

### A substitution keeps the frame, but its outcome can differ

S1 is **synonymous**: GAA and GAG both specify Glu. S2 is **missense**: GUA specifies Val, replacing Glu. S3 is **nonsense**: UAA replaces an amino-acid codon with a stop. [OpenStax mutation types](https://openstax.org/books/biology-2e/pages/14-6-dna-repair) explains these coding outcomes, calling a substitution with no amino acid change “silent.”

All three variants still contain 15 bases with the same triplet boundaries. In S3, however, translation ends at the second codon. The nine bases `CCUGGCUAA` after that new stop contribute no residues. An unchanged frame doesn't guarantee an unchanged amino acid sequence or length.

### Inserting three bases inside a codon needs a closer look

I1 has 16 bases. The one-base insertion shifts the downstream grid and creates UGA immediately after AUG. Translation gives only Met. The ten bases after UGA are untranslated in this model; the final A is merely the remainder of the displayed grid.

An insertion or deletion whose size isn't divisible by three shifts the downstream reading frame in a coding sequence ([NHGRI's frameshift definition](https://www.genome.gov/genetics-glossary/Frameshift-Mutation)). Adding or removing three bases preserves downstream alignment. The codons touching the edit still need to be rebuilt.

Both three-base insertions have 18 bases, but placement changes the result:

```text
At the boundary: AUG + UUU + GAACCUGGCUAA
Inside GAA:     AUGG + UUU + AACCUGGCUAA
```

At the boundary, UUU adds Phe and leaves every baseline codon intact. Inside GAA, the original G joins two inserted Us to form **GUU**. The remaining inserted U joins the original AA to form **UAA**. The later CCU, GGC, and UAA retain their original grouping, but translation has already stopped after Met–Val.

**Preserving the downstream frame doesn't mean adding exactly one amino acid.** In this inside-codon example, a three-base insertion produces an earlier stop and a shorter sequence.

### A deletion can also remove the supplied stop from the frame

D1 contains 14 bases. Removing the first G after AUG gives `AAC / CUG / GCU`, followed by **AA**. Those complete codons specify Asn, Leu, and Ala. No in-frame stop appears in the supplied variant, so **Met–Asn–Leu–Ala is a fragment**, with two remaining bases. The original terminal UAA no longer occupies a single triplet.

D3 contains 12 bases. Removing the whole GAA at its boundary removes Glu while retaining CCU, GGC, and UAA. Its product is Met–Pro–Gly, three residues, then stop.

These comparisons establish sequences under the exercise rules. They don't establish normal protein function, disease effects, or later processing. Even “same amino acid sequence” is a narrower result than “no biological effect.”

## Seven mutation questions to try yourself

Use this **new baseline** for every question:

```text
5′–AUG UAC GGU AAA UGA–3′
    Met Tyr Gly Lys stop
```

It has 15 bases and four residues. Initiation stays at bases 1–3. Make each edit independently; base numbers refer to the original baseline. For each variant, write the joined sequence, regroup it, give the translated sequence and residue count, and classify the change. State any incomplete final group or early stop.

1. Replace U at **base 9**, the last base of GGU, with C. Has the amino acid sequence changed? Has the frame shifted?
2. Replace A at **base 11**, the middle base of AAA, with C. Identify the altered residue and explain whether a shorter product follows from this edit.
3. Replace C at **base 6**, the last base of UAC, with A. A learner keeps translating GGU and AAA afterward. Correct their product and classify the substitution.
4. Insert **C between original bases 3 and 4**, immediately after AUG. Find the new stop and explain what happens to the original terminal UGA.
5. Compare two independent insertions of **GGC**: (a) between original bases 6 and 7, after UAC; (b) between original bases 4 and 5, after the U inside UAC. Do both preserve the downstream frame? Do both simply add Gly?
6. Delete **U at original base 4**. Does retaining the original terminal letters UGA mean this supplied variant still has an in-frame stop?
7. Delete **original bases 4–6**, the whole UAC. Compare its frame and product with question 6. A learner calls this “normal function restored.” What does your sequence comparison actually establish?

## Answers with the edit visible

### 1. A synonymous substitution: four unchanged residues

```text
Edit:    AUGUACGG + C + AAAUGA
Joined:  AUGUACGGCAAAUGA
Grouped: AUG / UAC / GGC / AAA / UGA
Product: Met–Tyr–Gly–Lys
```

GGU and GGC both specify Gly. The sequence has 15 bases, no grid remainder, and four residues before the terminal stop. Neither the frame nor the amino acid sequence changes under this model.

### 2. A missense substitution: Lys becomes Thr

```text
Edit:    AUGUACGGUA + C + AUGA
Joined:  AUGUACGGUACAUGA
Grouped: AUG / UAC / GGU / ACA / UGA
Product: Met–Tyr–Gly–Thr
```

ACA specifies Thr. This 15-base variant preserves the frame and terminal stop, giving four residues. A changed amino acid doesn't itself imply a shorter product; here the length stays the same.

### 3. A nonsense substitution: one residue before the new stop

```text
Edit:    AUGUA + A + GGUAAAUGA
Joined:  AUGUAAGGUAAAUGA
Grouped: AUG / UAA / GGU / AAA / UGA
Product: Met
```

Replacing UAC with UAA creates a stop at bases 4–6 of the variant. The frame remains unchanged and the sequence still has 15 bases. The nine downstream bases add no Gly or Lys, so the product contains only the initial Met.

### 4. A one-base insertion: three residues, then an earlier stop

```text
Edit:    AUG + C + UACGGUAAAUGA
Joined:  AUGCUACGGUAAAUGA
Grouped: AUG / CUA / CGG / UAA / AUG / A
Product: Met–Leu–Arg
```

CUA specifies Leu and CGG specifies Arg. This **frameshift insertion** makes a 16-base variant and shifts the downstream frame. Its first stop is UAA at variant bases 10–12. The remaining four bases, `AUGA`, aren't translated; the final A is the grid remainder. The original terminal UGA letters now cross the last AUG/A boundary and don't form a stop codon in this frame.

### 5. Both insertions preserve the downstream frame; their local codons differ

```text
(a) Boundary edit: AUGUAC + GGC + GGUAAAUGA
    Joined:        AUGUACGGCGGUAAAUGA
    Grouped:       AUG / UAC / GGC / GGU / AAA / UGA
    Product:       Met–Tyr–Gly–Gly–Lys

(b) Inside edit:   AUGU + GGC + ACGGUAAAUGA
    Joined:        AUGUGGCACGGUAAAUGA
    Grouped:       AUG / UGG / CAC / GGU / AAA / UGA
    Product:       Met–Trp–His–Gly–Lys
```

Each variant has 18 bases, no grid remainder, and five residues before the terminal stop. Both are **in-frame insertions** that preserve the original GGU, AAA, and UGA downstream. Variant (a) adds Gly at a boundary. Variant (b) rebuilds the edited region as UGG and CAC, specifying Trp and His in place of the original Tyr. Neither the inserted letters' appearance as GGC nor their total of three bases tells you those local codons without regrouping.

### 6. A one-base deletion: four residues in an incomplete fragment

```text
Edit:    AUG + ACGGUAAAUGA
Joined:  AUGACGGUAAAUGA
Grouped: AUG / ACG / GUA / AAU / GA
Fragment: Met–Thr–Val–Asn
```

The 14-base variant has four complete sense codons, followed by two bases, GA. ACG specifies Thr, GUA specifies Val, and AAU specifies Asn. This **frameshift deletion** shifts the downstream frame; the terminal UGA letters cross the AAU/GA boundary. No in-frame stop is supplied, so four is the number of residues decoded from this fragment, not an established full product length.

### 7. A three-base deletion: Tyr is removed and the terminal stop stays

```text
Edit:    AUG + GGUAAAUGA
Joined:  AUGGGUAAAUGA
Grouped: AUG / GGU / AAA / UGA
Product: Met–Gly–Lys
```

This 12-base variant has no grid remainder. The **in-frame deletion** of UAC at a boundary preserves the downstream frame and removes Tyr, giving three residues before the retained stop. Question 6's one-base deletion instead changes the downstream codons and leaves no supplied stop. Here, “frame preserved” and “Tyr removed” are supported; a claim about normal function isn't.

## Make cards for mutation decisions

Choose a decision you missed and keep its baseline, edit, and start instruction together. Split a longer problem into prompts whose answers you can check independently.

| Card front | Card back |
| --- | --- |
| Standard code; start at the retained first AUG. In AUG GAA CCU GGC UAA, change GAA to GAG. Classify the substitution and give the product. | Synonymous; Met–Glu–Pro–Gly, four residues. GAG still specifies Glu and the frame stays the same. |
| Standard code; start at the retained first AUG. Insert UUU after the G inside GAA in AUG GAA CCU GGC UAA. Does a three-base insertion guarantee one extra residue? | No. AUG GUU UAA CCU GGC UAA gives Met–Val, then stop. The downstream frame is preserved, but the local edit creates UAA. |
| In a coding sequence with a retained start, does an unchanged reading frame establish an unchanged product? | No. A substitution can change a residue or create a stop; a three-base insertion or deletion can alter local codons. Retranslate the edited sequence. |
| After an edit, the supplied sequence has no in-frame stop and ends with two bases. What product length can you report? | Count only residues from the complete codons shown and call the result a fragment. Neither the two bases nor the missing continuation establishes its full length. |
| A mutation preserves the downstream frame. Does that establish normal protein function? | No. Frame alignment, amino acid sequence, and biological function are separate claims. These classroom sequences establish only the modeled translation. |

Use paper or, optionally, text cards in [Nibomo](/). If amino acid abbreviations are slowing the comparison down, the [amino acid side-chain chart](/blog/amino-acid-side-chain-chart/) pairs three-letter and one-letter codes. On a fresh attempt, record **edit → joined sequence → new triplets → first stop → product comparison**.

*This article was produced with AI-assisted research and writing. The artificial examples were checked against the cited standard genetic code; they are classroom models, not laboratory results or predictions for real genes.*
