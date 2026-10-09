---
title: "Mochi Templates: Move Existing Markdown Cards to Fields"
description: "Set up a Mochi template, map old Markdown into fields, and check the question, answer, and supporting text before changing existing cards."
date: "2026-10-09"
image: "/blog/mochi-templates-existing-cards.png"
keywords:
  - "Mochi templates"
  - "Mochi template fields"
  - "apply template to existing Mochi cards"
  - "Mochi Markdown cards"
  - "Mochi cards blank after template"
---

An existing Mochi card can look blank after you give it a template, even though its Markdown is still there. The template needs values in its fields; it doesn't turn your handwritten question and answer into those values. [Mochi's guidance on existing cards](https://mochi.cards/docs/templates/intro-to-templates/)

![A gardener ties vine stems to a wooden trellis while a long flowering branch remains free](/blog/mochi-templates-existing-cards.png)

The useful work is deciding where the old text belongs. A short answer is easy. A code block, explanation, and study note need their own destinations. A card with another reveal may need to keep its original layout.

The three-card rehearsal below gives you a reusable template and a complete text-to-field mapping before you change an original. It follows Mochi's official documentation, checked October 9, 2026. The cards and expected results are original worked examples, not a report of a hands-on app test.

## A deck default doesn't convert old cards

Adding a template to a deck makes it the default for new cards. Previously created cards aren't affected. Applying a template to an individual existing card is a separate change. [Mochi's template setup guide](https://mochi.cards/docs/getting-started/adding-a-template/)

A templated card displays the template's Markdown with field values inserted. Its own raw Markdown stays stored but isn't used for that display. [Mochi's card documentation](https://mochi.cards/docs/cards/)

Make a backup before working on the originals. Mochi documents **Settings → Export everything** for a native `.mochi` export and a separate user-directory backup. [Mochi backup instructions](https://mochi.cards/docs/getting-started/backing-up/) Our [Mochi backup and restore guide](/blog/mochi-backup-restore/) covers the choices.

Create an empty deck named `Template rehearsal`. We'll create fresh practice cards there and manually enter text from the examples. For your own rehearsal, keep the originals in their existing deck and copy their full Markdown somewhere you can compare it. Fresh practice cards don't carry the originals' review histories.

## Give the answer and explanation separate fields

In the rehearsal deck, choose **Add Template → New template** and name it `Question with support`. Rename the initial **Name** field to `Front`, then use **New field** to add `Back` and `Support`. These controls follow Mochi's [template creation walkthrough](https://mochi.cards/docs/getting-started/adding-a-template/). Use text fields for all three.

Put this Markdown in the template editor:

```markdown
## <<Front>>

---

<<Back>>

<<Support>>
```

Each field has a specific job in this layout:

| Field | What belongs here |
| --- | --- |
| `Front` | The question, including context needed to answer it |
| `Back` | The answer you want to recall |
| `Support` | An explanation, worked example, or reference shown with the answer |

The `---` line creates the side boundary. Mochi supports more than two sides, but this template has two: the question first, then the answer and supporting material together. [Mochi card sides](https://mochi.cards/docs/cards/)

There's no fixed “Explanation:” label. A card without supporting text can leave `Support` empty; a card with several useful paragraphs can keep them together there. Keep the field names and placeholders exactly as shown during this rehearsal. If you're starting from spreadsheet columns rather than handwritten cards, use the separate [Mochi CSV import guide](/blog/mochi-csv-import/).

## Start with one question and answer

Suppose this is an existing Markdown card:

```markdown
What does `list.pop()` return by default on a nonempty list?
---
The last item; it also removes that item from the list.
```

Use **New Card** in the rehearsal deck and fill the fields:

| Field | Value |
| --- | --- |
| `Front` | What does `list.pop()` return by default on a nonempty list? |
| `Back` | The last item; it also removes that item from the list. |
| `Support` | Leave empty |

Keep the backticks around `list.pop()`. Don't paste the source's `---` into a field: the template supplies that boundary. Save the practice card and inspect both sides.

The question should retain “on a nonempty list,” and the answer should retain both the returned item and the removal. Calling `pop()` on an empty list raises `IndexError`, so dropping the condition would change the question. [Python's list-method documentation](https://docs.python.org/3/tutorial/datastructures.html)

For this card, every part has a destination: question to `Front`, answer to `Back`, and separator to the template. An empty `Support` is intentional.

## Keep the code, explanation, and study note

The next source has more pieces:

````markdown
# If `b = a` and `a` is a list, what does `b` refer to?
---
The same list object as `a`.

**Example:**
```python
a = [1]
b = a
b.append(2)
print(a)  # [1, 2]
```

**Why:** Assignment gives the object another name. It doesn't copy the list.

Study note: Compare with `b = a.copy()` for a separate outer list.
````

The example follows Python's documented assignment behavior: both names refer to the same list, so a change through `b` is visible through `a`. [Python's assignment example](https://docs.python.org/3/tutorial/introduction.html#lists) The copy comparison is precise too: `list.copy()` makes a shallow copy, giving you a separate outer list without independently copying nested objects. [Python's list-copy documentation](https://docs.python.org/3/tutorial/datastructures.html)

Before entering anything, map every fragment:

| Source fragment | Destination or decision |
| --- | --- |
| Question text, including `b = a` and the list context | `Front`; keep the inline code |
| Leading `#` | Replace with the heading supplied by the template |
| `---` | Replace with the template's side separator |
| “The same list object as `a`.” | `Back`; keep the whole answer |
| `**Example:**` and the Python code block | `Support`; keep the label, code fences, and lines together |
| `**Why:**` paragraph | `Support`, after the example |
| Study note about `a.copy()` | `Support`, after the explanation |

Create another rehearsal card. Enter this in `Front`:

```markdown
If `b = a` and `a` is a list, what does `b` refer to?
```

Enter this in `Back`:

```markdown
The same list object as `a`.
```

Enter this whole block in `Support`, including the inner code fences:

````markdown
**Example:**
```python
a = [1]
b = a
b.append(2)
print(a)  # [1, 2]
```

**Why:** Assignment gives the object another name. It doesn't copy the list.

Study note: Compare with `b = a.copy()` for a separate outer list.
````

Save it, then compare the displayed card with the source:

| Before the reveal | After the reveal |
| --- | --- |
| Only the question, headed “If `b = a` and `a` is a list, what does `b` refer to?” | The answer, followed by the example, explanation, and study note |
| Inline code still marks `b = a`, `a`, and `b` | All four Python lines remain together in a code block |
| No example output or answer is visible | The copy comparison still says “separate outer list” |

The source's `#` becomes a level-two heading because our template uses `##`. That is the intended formatting change. No teaching text needs to disappear.

Check the field values as well as the displayed sides. In particular, `print(a)  # [1, 2]` should stay inside the code block. Moving that example to `Front` would expose the behavior the question asks you to recall. If you use reverse reviews, check the reverse prompt separately; our [Mochi reverse-card guide](/blog/mochi-reverse-cards/) covers that task.

## A third side needs another decision

Now consider a card that reveals an answer and then an explanation:

```markdown
What does `len([])` return?
---
0
---
The list is empty, so it contains zero items.
```

Every word would fit into our three fields. The reveal sequence wouldn't. Putting `0` in `Back` and the explanation in `Support` would show them together, combining the original second and third sides.

Record the exception instead of forcing a fit:

| Source fragment | Decision |
| --- | --- |
| Question | Keep on side one |
| First separator | Keep the first reveal boundary |
| `0` | Keep on side two |
| Second separator | Keep the explanation behind another reveal |
| Explanation | Keep on side three |

Leave this original card as Markdown. To rehearse it in the practice deck, use the **New Card** dropdown to choose no template, then enter the complete three-sided source. That choice is documented in [Mochi's deck-template controls](https://mochi.cards/docs/decks/templates/).

If many of your cards need this sequence, a separate three-sided template may be useful. For this exercise, keeping the exception intact is a complete decision: it preserves both the text and when you see it.

## If an old card already looks blank

Inspect its field values and the template placeholders. Empty fields can explain a blank-looking card; populated fields also need matching placeholders to appear in the layout. Mochi confirms that the original raw Markdown remains stored and becomes visible again when the template is removed. [Mochi's existing-card guidance](https://mochi.cards/docs/templates/intro-to-templates/)

Remove the template from that individual card to return to its raw Markdown display, then use the source to prepare a mapping. The cited documentation doesn't specify the exact existing-card control location, so the click path depends on your version. The deck's **Add Template** button sets a new-card default; it isn't a conversion command for old text.

Don't delete the card or replace it with your practice card just to recover the question. The rehearsal gives you field values to compare with the original.

## Take the finished mapping to one original

Choose one of your own cards that matches the first or second example. Keep cards with extra reveal boundaries outside this two-sided template. Before changing the chosen original:

1. Copy its full Markdown for comparison and assign a destination to every question, answer, code block, explanation, and reference. Account for headings and separators too.
2. Enter that mapping into a fresh rehearsal card. Compare field values and both displayed sides, including any links or attachments your card uses. Stop if something is missing or appears before its intended reveal.
3. Once the rehearsal matches, apply `Question with support` to the individual original and manually enter the prepared `Front`, `Back`, and `Support` values. Save it and repeat the comparison on that original before moving to another card.

Keep the stored raw Markdown while making this change. It is a reference, not a field that the template automatically synchronizes. Check the card's visible name too: Mochi derives a templated card's name from its primary field, which is `Front` in this setup. [Mochi card names](https://mochi.cards/docs/cards/)

This is a content migration. The rehearsal doesn't test review-history transfer or prove that an original's scheduling will remain unchanged after you change its template; check those separately if they're part of your requirements.

If the mapping exposes several unrelated questions in one card, splitting them is a separate study-design choice. Our [guide to making better flashcards](/blog/how-to-make-better-flashcards/) can help with that. You can give matching cards a consistent layout and leave the exceptions alone.
