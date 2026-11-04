---
title: "Topological Sort Practice: Indegrees, Valid Orders, and Cycles"
description: "Practice topological sort with six worked exercises: trace indegrees, check candidate orders, find cycles, and separate cycle vertices from blocked dependents."
date: "2026-11-04"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/64a080216947bc27b2ae49aa1b4225b335ae908bcab534796b40e598776aa222.webp"
keywords:
  - "topological sort practice"
  - "Kahn algorithm practice"
  - "indegree trace"
  - "cycle blocked vertices"
---

Task `D` needs both `A` and `B`. Finishing `A` removes one prerequisite, but `D` still has to wait. That small distinction drives an entire topological sort: a vertex becomes ready only when **all** its prerequisites have been processed.

This topological sort practice worksheet uses one graph, then adds cycles and independent tasks. Try the six exercises before checking the answers.

![A stagehand lifts a chair from one of two separate stacks in a community theatre](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/64a080216947bc27b2ae49aa1b4225b335ae908bcab534796b40e598776aa222.webp)

## Read every arrow as a prerequisite

The vertices are `A, B, C, D, E, F, G`. These are all the edges:

```text
A → D
B → D
B → E
C → E
D → F
E → F
F → G
```

An edge `u → v` means **u must appear before v**. A topological order contains every vertex exactly once and respects every edge. The two ends of an edge don't have to sit next to each other.

The **indegree** of a vertex counts its incoming edges. Initially, `D` has indegree two because `A` and `B` point to it. During the algorithm, the count tracks incoming edges from vertices still unprocessed.

Kahn's algorithm starts with all zero-indegree vertices. It outputs a ready vertex, removes its outgoing edges by decrementing their destinations' counts, and adds each destination that reaches zero. [OpenDSA's topological sort lesson](https://opendsa-server.cs.vt.edu/ODSA/Books/ucsc/cse101/spring-2025/CSE101P/html/GraphTopsort.html) describes this process using a queue.

Here, **always choose the alphabetically smallest currently ready vertex**. Recheck the ready set after every output. A first-in, first-out (FIFO) queue instead takes the oldest queued vertex and appends newly ready vertices at the back. Sorting its initial contents doesn't make later choices alphabetical.

## Six exercises to try first

1. **Trace the original graph.** Write the initial indegrees and ready set. After each output, record every remaining indegree and the next ready set.
2. **Check candidate orders.** Which sequences below are valid? For each invalid one, name an edge it violates. A valid answer needn't follow the alphabetical selection rule.
   - `A B D C E F G`
   - `C B E A D F G`
   - `A D B C E F G`
   - `A B C E F D G`
3. **Explain readiness.** After outputting `A, B`, why is `D` ready while `E` still waits? Does the graph require `C` before `D`?
4. **Introduce a cycle.** Add `G → B` to the original graph. Also add a new vertex `H` with edge `F → H`. Run the algorithm until it stops. List the leftover vertices, find two directed cycles, and identify a leftover vertex that belongs to no directed cycle.
5. **Add an independent task.** Return to the original graph and add isolated vertex `I`, with no incoming or outgoing edges. Give the alphabetical result. Then use FIFO instead, with initial queue `A, B, C, I`. Does the result change?
6. **Account for the running time.** With adjacency lists, why does FIFO Kahn's algorithm take `O(V + E)` time? What changes when a binary min-heap enforces the alphabetical rule?

## Check the indegree trace

For exercise 1, each row shows the state **after** outputting the named vertex. A dash marks a vertex already output.

| Output | A | B | C | D | E | F | G | Ready next |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| None yet | 0 | 0 | 0 | 2 | 2 | 2 | 1 | A, B, C |
| A | — | 0 | 0 | 1 | 2 | 2 | 1 | B, C |
| B | — | — | 0 | 0 | 1 | 2 | 1 | C, D |
| C | — | — | — | 0 | 0 | 2 | 1 | D, E |
| D | — | — | — | — | 0 | 1 | 1 | E |
| E | — | — | — | — | — | 0 | 1 | F |
| F | — | — | — | — | — | — | 0 | G |
| G | — | — | — | — | — | — | — | Empty |

The result is `A B C D E F G`. After `B`, both `C` and `D` are ready, so the alphabetical rule chooses `C`. A ready vertex is eligible for output; it doesn't have to come next.

## A different order can still be correct

For exercise 2, the first two candidates are valid. In `C B E A D F G`, `E` follows `B` and `C`; `D` follows `A` and `B`; and `F` follows `D` and `E`.

The third candidate violates `B → D`: it puts `D` before `B`. The fourth violates `D → F`: it puts `F` before `D`.

To validate an order, check that it contains every vertex exactly once. Record each vertex's position, then check `position(u) < position(v)` for every edge `u → v`. This also enforces prerequisites connected by longer paths.

For exercise 3, processing `A` and `B` removes both incoming edges of `D`. Only `B → E` has been removed from `E`; `C → E` remains. There is no path from `C` to `D`, so this graph allows `D` before `C`, as the first candidate demonstrates.

## Leftover vertices aren't a cycle list

In exercise 4, the initial ready set is `A, C`. Output `A`, then `C`. The ready set becomes empty with `B, D, E, F, G, H` left over.

Two cycles are `B → D → F → G → B` and `B → E → F → G → B`. Every vertex on either cycle waits for another vertex on that cycle. `H` waits for `F`, but has no outgoing edge and belongs to no directed cycle. Its remaining indegree is still one: a positive count shows that a vertex is blocked, but doesn't prove that it lies on a cycle.

The stop proves that a cycle exists among the leftovers. A full topological order exists exactly when the graph is acyclic; see [Princeton's directed graphs material](https://algs4.cs.princeton.edu/42digraph/).

## Independent vertices reveal the selection rule

For exercise 5, `I` is ready from the beginning. Alphabetical selection keeps choosing smaller ready vertices, producing `A B C D E F G I`.

FIFO starts with `A, B, C, I`. Processing `B` appends `D`; processing `C` appends `E`. Both join behind `I`, so the result is `A B C I D E F G`. Both orders respect every prerequisite. An isolated vertex still has to appear exactly once.

## Count edge visits separately from ready operations

For exercise 6, let `V` be the number of vertices and `E` the number of edges. Initialization examines all vertices and edges. With adjacency lists, processing visits each outgoing edge at most once, and each vertex enters and leaves the FIFO queue at most once. Constant-time queue operations give `O(V + E)` time. [Princeton's queue-based implementation](https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/TopologicalX.java.html) documents the same bound.

A binary min-heap makes each insertion and removal cost `O(log V)` in the worst case. Edge updates still total `O(E)`, giving `O(E + V log V)` time for the alphabetical variant. Extra working space is `O(V)`; storing the adjacency lists takes `O(V + E)`.

For more hand-tracing work, try [binary search practice](/blog/binary-search-practice/). For another example of counting total work across nested processing, see [nested loop time complexity](/blog/nested-loop-time-complexity/).

*Prepared with AI drafting and editorial assistance; the illustration is AI-generated. The original graph's valid orders, the indegree trace, and the cycle and isolated-vertex examples were checked with Python.*
