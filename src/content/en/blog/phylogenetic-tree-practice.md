---
title: "Phylogenetic Tree Practice: Common Ancestors and Rotated Branches"
description: "Practice reading rooted phylogenetic trees with original diagrams, worked common-ancestor comparisons, rotated branches, clades, and explained answers."
date: "2026-11-11"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/4532001ed66298740db0d61182ed77df72ffcbcdf874a4f39077902d93d941cb.webp"
keywords:
  - "phylogenetic tree practice"
  - "cladogram practice"
  - "most recent common ancestor"
  - "rotated phylogenetic tree"
  - "sister taxa"
---

Two tips can sit next to each other on a phylogenetic tree without being each other's closest relatives. Rotate a branch, and those neighbors change. The ancestry stays the same. For these practice questions, follow the connections back toward the root before choosing an answer.

This worksheet uses invented taxa **A–E**, with ten questions and complete answers below. The diagrams and explanations were developed with AI assistance; they don't represent measured relationships among real species.

![A craftsperson turns the lower arm of a wooden mobile while its branching cords stay connected](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/4532001ed66298740db0d61182ed77df72ffcbcdf874a4f39077902d93d941cb.webp)

## Start with one rooted tree

A phylogenetic tree represents a hypothesis about evolutionary relationships. On a **rooted** tree, the root represents the common ancestor of all the taxa shown; internal branching points represent common ancestors of their descendant groups. [OpenStax introduces rooted trees and their components](https://openstax.org/books/biology-2e/pages/20-1-organizing-life-on-earth).

In Tree 1, read outward from **R**, the root. Letters A–E label the terminal taxa, or tips; X, Y, and Z label internal nodes. The branches have no time or evolutionary-change scale, so these diagrams also serve as cladogram practice.

```text
Tree 1

R
|-- X
|   |-- A
|   `-- B
`-- Y
    |-- C
    `-- Z
        |-- D
        `-- E
```

In words: R divides into the A–B group and the C–D–E group. Inside the latter, Y divides into C and the D–E group. Z joins D and E.

The **most recent common ancestor (MRCA)** is the first shared ancestor you reach when tracing two lineages toward the root. For C and D, follow **C → Y** and **D → Z → Y**. They first meet at **Y**. R is also a common ancestor, but Y is more recent because it descends from R.

Now compare D's relationship to C and E. D and E meet at Z; D and C meet at Y. Since Z descends from Y, **D is more closely related to E than to C**. Counting printed spaces or intervening tip labels wouldn't establish that relationship.

## Try these before checking the answers

Use Tree 1 for questions 1–5. Write a node or a reason beside each answer.

1. What is the MRCA of B and D?
2. Is B more closely related to C or to E?
3. Which pairs of terminal taxa are sister taxa?
4. Do C and D alone form a clade? Do C, D, and E?
5. What is the sister group of C? What is the sister group of the A–B clade?

A **clade** includes an ancestor and all its descendants. **Sister groups** are the two lineages or clades emerging from the same immediate branching point on a bifurcating tree. A sister group can contain several tips. [David Baum's Nature Education explanation](https://www.nature.com/scitable/topicpage/reading-a-phylogenetic-tree-the-meaning-of-41956/) describes clades and how to read shared ancestry.

### Answers for Tree 1

**1. R.** B reaches X and then R. D reaches Z, Y, and then R. Their first shared node is R.

**2. Equally related to both on this tree.** The MRCA of B and C is R, and the MRCA of B and E is also R. C's position nearer to B in the printed tip order doesn't give it a closer relationship.

**3. A with B, and D with E.** Each pair consists of two tips branching directly from one node: X or Z. C has a sister group, but that group contains two taxa.

**4. C–D alone: no. C–D–E: yes.** The MRCA of C and D is Y. E also descends from Y, so leaving E out omits one of that ancestor's descendants. Y and all its descendants form the C–D–E clade.

**5. C's sister group is the D–E clade.** Y has two descendant branches: one leads to C and the other to Z and its descendants. The sister group of A–B is the entire C–D–E clade, because those two groups join at R.

## Same tree, different tip order

Rotation moves whole descendant branches around a node while keeping their connections intact. The [Digital Atlas of Ancient Life's tree-reading guide](https://www.digitalatlasofancientlife.org/learn/systematics/phylogenetics/reading-trees/) illustrates this property. Compare these two diagrams with Tree 1:

```text
Tree 2

R
|-- Y
|   |-- Z
|   |   |-- E
|   |   `-- D
|   `-- C
`-- X
    |-- B
    `-- A
```

```text
Tree 3

R
|-- U
|   |-- A
|   `-- C
`-- V
    |-- B
    `-- Z
        |-- D
        `-- E
```

Tree 2 places the C–D–E group first, reverses D and E, and reverses A and B. Tree 3 instead pairs A with C and puts B in the group containing D and E. Node letters help you trace the connections; matching letters alone don't establish that two trees are equivalent.

6. Which is equivalent to Tree 1: Tree 2, Tree 3, or both?
7. In Tree 3, is B more closely related to A or D?

**6. Tree 2 only.** Its internal descendant sets are still **A–B**, **D–E**, **C–D–E**, and **A–B–C–D–E**. Every group matches Tree 1. Tree 3 contains A–C and B–D–E instead, so its topology—the branching pattern—has changed.

**7. D.** In Tree 3, B and D meet at V, whereas B and A meet at R. V descends from R. Keeping your answer from Tree 1 would miss the changed connections.

## What the diagram leaves unresolved

For this next exercise, P is explicitly an **unresolved polytomy**: three descendant branches whose branching order hasn't been resolved.

```text
Tree 4

R
|-- X
|   |-- A
|   `-- B
`-- P
    |-- C
    |-- D
    `-- E
```

Here, R divides into A–B and C–D–E, just as before. Within C–D–E, all three tips connect directly to P.

8. Does Tree 4 identify D and E as an exclusive sister pair?
9. Does it establish that C, D, and E diverged simultaneously?
10. Back in Tree 1, did X occur before Z? Did Y occur before Z?

**8. No.** P gives no exclusive D–E grouping. A resolution could pair C–D, C–E, or D–E; this diagram doesn't select one. C–D–E still forms a clade.

**9. No.** An unresolved node leaves the order unknown. It doesn't establish simultaneous divergence. The [Open Tree of Life FAQ](https://github.com/OpenTreeOfLife/germinator/wiki/Open-Tree-FAQ#if-this-is-a-phylogenetic-tree-why-are-there-so-many-polytomies-n-way-branching-for-n--2) explains how polytomies in its synthetic tree reflect missing resolution rather than simultaneous origins.

**10. X versus Z: unknown. Y before Z: yes.** X and Z lie on separate descendant branches; Tree 1 supplies no dates to order them. Y is ancestral to Z, so their order is specified. An unscaled cladogram gives ancestry without measurable durations. Longer printed branches don't establish more elapsed time or more change; check the legend before interpreting lengths.

## Practice the decision you missed

If question 2 caused trouble, swap the two whole groups attached to R, placing A–B below C–D–E. Compare B's two MRCAs again: both remain R. For question 4, list every tip descended from Y before drawing a clade boundary. For question 10, separate an ancestor–descendant comparison from a comparison across separate branches.

The English [AP Biology flashcards](/catalog/packages/ap-biology-flashcards-complete-course-review/) include nodes, clades, common ancestry, and branch rotation. Regular recall and spaced review can help retain these ideas; use new diagrams alongside the cards so you also practice tracing unfamiliar trees.

Before your next answer, mark the root, trace the relevant lineages, and name their first shared ancestor. Then check that the conclusion survives a rotation.
