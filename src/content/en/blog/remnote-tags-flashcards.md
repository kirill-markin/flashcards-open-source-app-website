---
title: "RemNote Tags: Study a Subset Across Documents"
description: "Practice tagged RemNote flashcards across documents, check which nested questions join the queue, and build a focused portal without copying your notes."
date: "2026-10-06"
image: "/blog/remnote-tags-flashcards.png"
keywords:
  - "RemNote tags flashcards"
  - "study RemNote cards by tag"
  - "RemNote practice tagged cards"
  - "RemNote search portal flashcards"
  - "RemNote tagged descendants"
---

Two questions you want to review sit in different lecture documents. Tag one question and a heading above the other, and you may collect an extra question tucked under that heading. The notes stay organized, but the study session has a wider scope than you intended.

To study RemNote cards by tag, tag the individual questions when you want a precise selection. Tag a parent when you want its whole branch. Then check the selected cards separately from which ones are due today.

![A woman ties a blue ribbon to one canvas pouch beside two open travel bags, one marked with a matching ribbon](/blog/remnote-tags-flashcards.png)

## Start with the questions you actually want

Choose a tag name that describes this selection, such as `Scope check`. In each source document, put the cursor on the question bullet, type `##`, and select or create that tag. Tags group bullets across documents; the notes can stay where you wrote them. [RemNote's tag guide](https://help.remnote.com/en/articles/6030770-tags) explains the controls.

Open the tag's bullet and zoom into it. Use its practice options; for a tag that isn't a document, open **… → Flashcards**. A tagged parent brings its descendant cards into the tag's practice scope. [RemNote's practice guide](https://help.remnote.com/en/articles/6904503-practicing-specific-flashcards) shows this behavior.

Before doing that with a semester's notes, try a small example where every expected question has an identifier. You can then recognize an unwanted card without wondering whether a counter includes reverse questions or multiple cloze deletions.

## A six-question scope check

The following is an original exercise with invented answers. Its expected results follow the documentation checked on October 6, 2026; they aren't a report from a live RemNote test.

Create three temporary documents with the outline below. Make Q1–Q6 forward-only basic cards, one card per question. In the editor, `>>` creates that card type; keep the headings as plain notes. [Card-creation instructions](https://help.remnote.com/en/articles/6025481-creating-flashcards).

This block describes the structure. The bracketed tag instructions are annotations to perform in the editor, not text to paste into an answer.

```text
Document A
  Batch A                         [plain heading]
    Q1: What is the first token? >> amber     [add Scope check tag]
    Q2: What is the second token? >> circle

Document B
  Batch B                         [plain heading; add Scope check tag]
    Q3: What is the third token? >> triangle
    Q4: What is the fourth token? >> four

Document C
  Reference control               [plain heading; no flashcard]
    Q5: What is the fifth token? >> echo
  Unrelated section               [plain heading]
    Q6: What is the sixth token? >> dot
```

On the `Scope check` tag's own page, add a reference to the **Reference control heading**, using `[[` and selecting that bullet. Don't reference Q5 directly. Keep the tag page free of its own flashcards, extra portals, sources, and other links. None of the six questions should reference the tag in its text; use the actual tag control where indicated.

Your intended selection is **Q1 and Q3**. Write that down before opening practice. Here's the expected membership ledger for this deliberately imperfect setup:

| Question | Expected in tag scope? | Reason in this exercise |
| --- | --- | --- |
| Q1 | Yes | Tag applied to the question |
| Q2 | No | Neither it nor Batch A has the tag |
| Q3 | Yes | Under tagged Batch B |
| Q4 | Yes, though unwanted | Also under tagged Batch B |
| Q5 | No | Only its plain parent heading is referenced |
| Q6 | No | No connection to this selection |

That gives **three gathered cards for a two-card intention**. It describes membership, not today's due count. Q4 is the useful mistake: tagging a heading selected more material than the heading's name suggested.

Remove the tag from Batch B and apply it to Q3 instead. Both selected questions are now leaves: they have no child questions. Keep the rest of the exercise unchanged. The expected selection becomes **Q1 and Q3**, with Q2, Q4, Q5, and Q6 excluded.

This is a small change to the grouping. You don't need to move the questions out of their lecture documents or copy them into a new deck.

## Why the reference control matters

A reference and a tag are different connections: `[[` mentions a bullet, while `##` categorizes the current bullet. [RemNote's comparison](https://help.remnote.com/en/articles/6634227-what-s-the-difference-between-references-tags-and-portals) explains that distinction.

The simplified practice guide distinguishes a reference from a tag. Don't read that as a guarantee that references never contribute cards: the [detailed gathering rules](https://help.remnote.com/en/articles/8892109-how-does-remnote-decide-what-flashcards-are-part-of-a-document) include referenced and backreferencing bullets' own cards, without recursively gathering their descendants or other connections. Our control heading has no card of its own, so referencing it doesn't pull Q5 underneath it into this selection. Referencing Q5 itself could contribute Q5's own card.

If your real tag page has its own questions, references to question bullets, or linked sources, record those connections before comparing its results with this minimal exercise.

## An optional search portal for the leaf questions

Basic tag practice already solves the cross-document task. A search portal is useful when you also want a document showing the matching questions and updating as you change tags.

After repairing the tags in the exercise:

1. Create an otherwise empty document called `Focused review`.
2. Type `/isp` and press Enter to insert a search portal.
3. Open the portal's filter icon. In the visual query builder, choose **Is Directly Tagged With** and select `Scope check`.
4. Check the results before practicing. Q1 and Q3 should be the matching question bullets. Confirm both are visible in the portal; expand any collapsed content needed to see them and check for hidden bullets. If the results differ, revisit the actual tag placements in the source documents.

The [official search-portal guide](https://help.remnote.com/en/articles/7231624-search-portals) documents the insertion and query builder. As checked on October 6, 2026, it describes search portals as a Pro feature, with two trial search portals available on Free.

The [query guide](https://help.remnote.com/en/articles/6964961-searching-with-the-remnote-query-language) defines the direct-tag filter as excluding **tag inheritance**. That's about which bullets match the query. It doesn't promise to prune descendant flashcards from a matched parent. In the first setup, Q1 and Batch B match; displaying Batch B's child questions can still widen the portal's practice scope. After the repair, the matching leaves are Q1 and Q3.

Visible content matters for standard and search portals: expand the questions you want included before practicing the destination document. A tag's **List** view is an exception; it follows table gathering rules, so collapsing its children doesn't reliably narrow practice. [Gathering details](https://help.remnote.com/en/articles/8892109-how-does-remnote-decide-what-flashcards-are-part-of-a-document).

For a fixed selection, create standard portals to Q1 and Q3 with `((`, selecting each question bullet. Check that both questions are visible and keep the destination otherwise empty. A portal shows existing content, and edits inside it affect the original note. [Portal instructions](https://help.remnote.com/en/articles/6030742-portals).

## Audit the mode before rating anything

A correct selection can still produce fewer due reviews. For a separate scheduling example, suppose **Q1 and Q3 have both been reviewed before**, both are enabled, and their schedules now show Q1 due today and Q3 due next week. There are no waiting new cards in this two-card selection. After the tag repair, you would expect:

| Entry point or mode | Expected result in this hypothetical state |
| --- | --- |
| Tag scope | Q1 and Q3 belong to the selection |
| Search portal with the direct-tag filter | Q1 and Q3 match and are visible |
| Practice with Spaced Repetition | Q1 is due; Q3 isn't due yet |
| Practice All Flashcards | Q1 and Q3, regardless of those due dates |

Fresh cards need a separate check. Imported, shared, and AI-generated cards can wait to be learned; manually written cards normally enter the schedule when created. Document practice starts with due reviews and can reach waiting new cards afterward. A due-review count alone doesn't describe the entire session. [RemNote's new-card guide](https://help.remnote.com/en/articles/16213222-managing-new-cards) explains the distinction.

With answer recording on, all-card practice affects scheduling too. To audit the `Focused review` document without changing review history, select the all-card mode and use **Practice Without Recording Answer Choices**. The documentation supports this for documents and folders; don't assume the same control is available on a non-document tag. [Practice modes](https://help.remnote.com/en/articles/6904503-practicing-specific-flashcards).

Use this worksheet for your real selection:

| Check | What to record |
| --- | --- |
| Intention | Wanted question IDs and their source document/parent paths |
| Connections | Tags on leaves or parents; references, portals, and sources on the collection page |
| Expected scope | Included IDs and deliberately excluded IDs |
| Portal visibility, if used | Actual matching bullets; which questions are expanded or hidden |
| Session | Entry point, mode, answer recording, and previously reviewed versus waiting new cards |
| Observation | Question IDs actually shown; any due dates checked |

Inspect each question before rating it. If Q4 appears, check the parent tag or matched parent. If Q3 is absent from due reviews, check its schedule and waiting state with the [missing-card guide](/blog/remnote-cards-not-showing/). If one selected bullet generates several questions, use the [multi-line card guide](/blog/remnote-multi-line-cards/) to review its design.

Once the selection matches your written intention, use it for the study task you chose. Add another leaf tag when another question belongs; tag a whole branch only when you're ready to include its questions together.
