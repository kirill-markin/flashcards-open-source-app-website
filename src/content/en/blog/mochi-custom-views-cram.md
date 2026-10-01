---
title: "Mochi Custom Views: Cram an Exact Subset of Cards"
description: "Create a Mochi custom view for extra practice, check which cards belong in it, and use Cram without changing regular scheduling or review history."
date: "2026-10-01"
image: "/blog/mochi-custom-views-cram.png"
keywords:
  - "Mochi custom views"
  - "Mochi cram mode"
  - "Mochi tag filter"
  - "review a subset in Mochi"
  - "Mochi exam review"
---

Suppose tomorrow's quiz covers four questions in your Mochi deck. One card is due today, one isn't due yet, one is new, and one is archived. Opening the normal review queue won't give you that exact rehearsal set. Filtering by a broad chapter tag might also bring along lecture notes you don't want to practice.

**Mochi custom views** save filters, sorting, and display options for existing cards. They don't create another deck or duplicate your cards. Use a view to choose the material, then **Cram** to rehearse it outside normal scheduling. Checking the selection and choosing the session mode are separate steps. [Mochi custom-view documentation](https://mochi.cards/docs/decks/custom-views/)

This guide follows Mochi's official documentation, checked October 1, 2026. The card set and membership worksheet below are original examples; the observation column is yours to fill in.

![A puppeteer rehearses with two cloth puppets while the others stay in their backstage storage pockets](/blog/mochi-custom-views-cram.png)

## Decide which cards belong before opening Cram

For this example, the parent deck is **Biology**, with **Membranes** and **Lab** subdecks. The quiz requires four recall prompts, A–D. Everything else stays outside this particular session.

Write the inclusion rule first:

> Include A, B, C, and D from Biology and its subdecks, regardless of whether they are new, due, not due, or archived. Exclude notes and questions outside this quiz's scope.

The letters are worksheet labels, not Mochi card IDs. Replace them with identifiable titles from your own deck. Leave the observation column blank until you've inspected your view.

| Label and card | Location | Current status | Expected in view? | Actually visible? |
| --- | --- | --- | --- | --- |
| A — Define osmosis | Biology | Due today | Yes | — |
| B — Predict an animal cell's response to a hypotonic solution | Biology | Learned, not due | Yes | — |
| C — Predict a plant cell's response to a hypertonic solution | Biology → Membranes | New | Yes | — |
| D — Explain why isotonic conditions don't mean water stops moving | Biology → Membranes | Archived | Yes | — |
| E — Explain active transport | Biology | New | No: outside this quiz | — |
| F — Membrane lecture summary | Biology | Archived | No: reference note | — |
| G — Describe the osmosis lab setup | Biology → Lab | Learned, not due | No: outside this quiz | — |
| H — Identify an enzyme's active site | Biology | Due today | No: different topic | — |

The expected set contains **four cards: A, B, C, and D**. A count of four is only half the check. A view containing A, B, C, and F has the right count, but D is missing and F doesn't belong. Check both the expected questions and the material you meant to exclude.

For a larger exam, make this list from the syllabus or the questions you need to answer. Starting with whatever a filter happens to return makes missing material harder to notice.

## Build one view with one clear tag

Use a dedicated tag, `#unit-3-rehearsal`, on A–D only. A broad `#unit-3` tag could reasonably belong to F and G too. The narrower tag records the exact membership you chose. Adding it changes the original cards' tags; it doesn't move them.

Mochi documents adding tags in Markdown or manually, then choosing **Tags** in the filters and entering a tag as `#tag-name`. Views can also include cards from subdecks. [Mochi tag filters and view options](https://mochi.cards/docs/decks/custom-views/)

1. Open **Biology**. Use the create-view icon next to the default view, usually **Grid View**. Mochi's [creating-views guide](https://mochi.cards/docs/getting-started/creating-views/) includes screenshots to help locate it.
2. Select the new view and name it **Unit 3 rehearsal**. Open **Filters**, choose **Tags**, and enter `#unit-3-rehearsal`.
3. Include subdeck cards so C and D are within scope. Clear other restrictions that conflict with the inclusion rule, including due-only, new-only, or archived-card exclusions. Check for a leftover search term too.
4. Choose a sorting order for the rehearsal. Fill in the worksheet by checking every expected and excluded card against the visible set.

View settings save automatically as you adjust them. The saved configuration keeps selecting matching cards; it isn't a frozen copy of today's four. Adding the rehearsal tag to another card can change the set next time you open the view. [Mochi saved views](https://mochi.cards/docs/decks/custom-views/)

This example uses one tag so you can compare the result directly with the list. The cited documentation doesn't define how multiple tag entries combine, so don't build an exact set around an assumed AND/OR rule.

## Repair the selection, then recount

If the worksheet doesn't match, identify the missing and unexpected cards before changing anything. Change one restriction or mistaken tag at a time, then compare the whole set again. The patterns below are clues to investigate, not observed app-test results or proof of a single cause.

| Mismatch | Check and repair |
| --- | --- |
| Only A appears | Look for a due-status restriction. Remove it so B, C, and D can be included too. |
| Only C appears | Look for a new-only restriction. Newness isn't this session's membership rule. |
| C and D are missing | Check whether subdeck cards are included, then inspect their tags individually. |
| One expected card is missing | Compare its actual tag with `#unit-3-rehearsal`. Check spelling and punctuation rather than assuming similar-looking tags match. |
| F or G appears | Check whether you selected the broader `#unit-3` tag or assigned the rehearsal tag to extra material. Correct the filter or the mistaken tag. |
| D is missing but the other three appear | Check for an archived-card exclusion. This rehearsal deliberately includes D. |
| A, B, C, and F appear | Repair both errors: find what excludes D and what includes F. The count can stay at four while both mistakes remain. |

Archiving doesn't decide whether a card belongs in an exam subset. Mochi excludes archived cards from **New cards** and **Due today**, retains their content and history, and still allows them to be viewed or crammed. Archived D is a required recall prompt; archived F is a reference note. Their purpose in this quiz decides membership. [Mochi archiving documentation](https://mochi.cards/docs/reviewing/archiving/)

You don't need to unarchive D just to cram it. If F slips in, repair the view or its tag. Changing archive status affects participation in ordinary review queues and doesn't fix the inclusion rule.

## Start Cram after the identities match

Select **Unit 3 rehearsal**. If the controls aren't visible, open **Filters**, then click **Cram**. The session respects the selected view's filters and sorting; only visible cards enter it. [Mochi view-based Cram instructions](https://mochi.cards/docs/getting-started/creating-views/)

In Mochi cram mode, cards don't have to be due and can be archived. **Remembered** and **Forgot** responses don't update intervals or review history. Sorting determines presentation order, and you can stop without completing the session. [Mochi Cram documentation](https://mochi.cards/docs/reviewing/cramming/)

That protection applies to Cram responses. Editing a prompt, adding a tag, moving a card, or changing archive status still changes the original card or its organization. If you want a record of missed questions, keep a separate rehearsal note: for example, “D: confused equal movement with no movement.” Cram won't add that attempt to the card's regular review history.

Cram also doesn't replace the normal process for bringing new cards into scheduled study. Mochi's **New cards** workflow has a separate **Add to reviews** action. Use that workflow when you want C to join regular reviews, rather than expecting the extra rehearsal to enroll it. [Mochi learning and review guide](https://mochi.cards/docs/getting-started/reviewing-cards/)

If an answer is hard to judge, fix the prompt before repeating it. The [Mochi typed-answer guide](/blog/mochi-typed-answers/) has examples of distinguishing valid alternatives from incomplete answers. For a broader deadline plan, see [how to study for an exam with FSRS](/blog/how-to-study-for-an-exam-with-fsrs/). The [Mochi comparison](/blog/mochi-alternative/) covers the wider product decision.

Before the next rehearsal, compare the visible cards with the worksheet again. When the quiz scope changes, update the intended list first, then adjust the tags or view to match it.
