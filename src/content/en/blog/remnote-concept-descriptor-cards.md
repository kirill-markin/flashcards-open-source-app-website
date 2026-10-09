---
title: "RemNote Concept and Descriptor Cards: Check Context and Direction"
description: "Build RemNote concept and descriptor cards from a small outline, then check reverse questions, hidden definitions, ambiguous answers, and parent context."
date: "2026-10-10"
image: "/blog/remnote-concept-descriptor-cards.png"
keywords:
  - "RemNote concept and descriptor cards"
  - "RemNote concept descriptor framework"
  - "RemNote reverse descriptor cards"
  - "RemNote parent context"
  - "RemNote answer showing on front"
---

A reverse descriptor in RemNote asks you to recall its parent concept. If a tile has a descriptor called `mark`, reversing that card tests which tile carries the mark. It doesn't ask you to recall the word “mark.” That detail can turn a tidy outline into a question you didn't intend. [RemNote's concept and descriptor guide](https://help.remnote.com/en/articles/6751778-creating-concept-descriptor-flashcards) documents this behavior.

RemNote concept and descriptor cards also change which parts of your notes appear as context. A concept's definition can stay hidden while its name remains useful—or gives something away. Read the whole front before deciding that a card tests recall.

![A woman holds an open nesting doll above a smaller yellow doll beside a closed doll with the same two blue dots](/blog/remnote-concept-descriptor-cards.png)

## Catch a definition leak first

Use a small fictional workshop puzzle. Its **Luma tile** may move one diagonal step and carries two blue dots. Spare tiles live in the gray box. These are invented rules for the exercise, so there's no outside subject knowledge to check.

The examples below are **documentation-derived expected behavior, not a hands-on RemNote test**. Tables describe the question and visible information rather than reproducing the exact interface. Compare them with your own previews before editing real study notes.

Paste this plaintext into an empty practice document:

```text
Workshop puzzle
  Luma tile >> a tile allowed to move one diagonal step.
    What move is allowed? >> one diagonal step
  Which box holds spare tiles? >> the gray box
```

The spaces express nesting; `>>` makes a basic forward card. RemNote's [text-import documentation](https://help.remnote.com/en/articles/9252072-how-to-import-flashcards-from-text) explains how pasted indentation becomes the outline hierarchy.

There are three expected questions. The child question has a problem: its parent already says “one diagonal step.” RemNote displays basic-card ancestor backs as context. Concept-card ancestor backs are hidden. [Official context rules](https://help.remnote.com/en/articles/8038791-can-i-make-my-cards-appear-in-a-specific-order).

Change **only the Luma parent** into a concept using `/turn into concept` or `/tc`, as documented in the [concept-creation guide](https://help.remnote.com/en/articles/6751778-creating-concept-descriptor-flashcards). Then use its arrow menu to select **forward-only**. Keep the child and box question unchanged.

If you'd rather replace the practice outline by pasting text, use this equivalent version. Replace the earlier outline; don't append a second copy:

```text
Workshop puzzle
  Luma tile :> a tile allowed to move one diagonal step.
    What move is allowed? >> one diagonal step
  Which box holds spare tiles? >> the gray box
```

| Child-card preview | Basic parent | Forward concept parent |
| --- | --- | --- |
| Context | Workshop puzzle; Luma tile **and its definition** | Workshop puzzle; Luma tile |
| Question | What move is allowed? | What move is allowed? |
| Answer to recall | One diagonal step, already supplied above | One diagonal step, absent from the parent context |
| Questions in the whole outline | 3 | 3 |

The `:>` delimiter makes the concept forward-only. Using `::` would also add a definition-to-name question. Keep the direction fixed while checking this leak, so a changed count doesn't distract from the changed front.

The box question is your control: it should still ask for **the gray box**, with `Workshop puzzle` as its context. If its question changes, inspect the nesting before doing more edits.

## A concept doesn't hide every ancestor

Try renaming the plain top-level heading to `One diagonal step`. The movement question now has its answer in the heading, even though the Luma definition is hidden. Restore `Workshop puzzle` after checking it.

The same mistake can happen inside a concept name. A name such as `Luma one-step diagonal tile` would expose the movement rule. Changing the card type cannot make that name a neutral cue. Concept treatment suppresses the ancestor's **definition**, not all text in the ancestry.

For this exercise, `Luma tile` gives the child question a subject without stating the move. In your own notes, inspect lecture headings, parent questions, and property values too. Basic and descriptor ancestor backs can remain visible; calling one nearby bullet a concept doesn't hide those other ancestors. [Ancestor display behavior](https://help.remnote.com/en/articles/8038791-can-i-make-my-cards-appear-in-a-specific-order).

## Turn the properties into descriptors

Now make the tile's properties explicit. Replace the practice outline with this version:

```text
Workshop puzzle
  Luma tile :> a tile allowed to move one diagonal step.
    legal move ;; one diagonal step
    mark ;; two blue dots
    source ;- Workshop rule sheet, section 2
  Which box holds spare tiles? >> the gray box
```

Here, `legal move` and `mark` are descriptors indented under the Luma concept. A concept names a thing; a descriptor names a property or question about it. `;;` creates a forward descriptor; `;-` keeps a descriptor value in the notes without generating a flashcard. [Concept/descriptor creation instructions](https://help.remnote.com/en/articles/6751778-creating-concept-descriptor-flashcards).

The `source` line is a sibling of the two properties, not their parent. It belongs in the notes, but this exercise doesn't ask you to memorize a sheet number. Its position also keeps the source value out of those properties' ancestor context.

Expect **four generated questions** at this point: the Luma definition, its legal move, its mark, and the box question. The source contributes none. The move question's wording has become a property label, but the required answer is still one diagonal step.

Next, click the arrow for `mark` and enable **both directions**. The [card-creation guide](https://help.remnote.com/en/articles/6025481-creating-flashcards) explains the direction menu and the preview button beside a card. Preview each direction separately.

Use the menu for this step. The official editor and plaintext-import guides show different bidirectional descriptor delimiters; a shortcut typed in the editor shouldn't be assumed to be the paste format. The code block above deliberately creates a forward descriptor, then you change its direction in the UI.

## Write down the five questions you expect

After enabling both directions for `mark`, the rehearsal should generate these five questions. `Workshop puzzle` supplies the broad context. The table states the intended task in plain English; it isn't a screenshot or a promise of exact screen wording.

| Question | Information needed on the front | Answer to recall |
| --- | --- | --- |
| Luma definition, forward | Luma tile; ask for its definition | A tile allowed to move one diagonal step |
| Legal move, forward | Luma tile; legal move; no Luma definition | One diagonal step |
| Mark, forward | Luma tile; mark; no Luma definition | Two blue dots |
| Mark, backward | Two blue dots as the mark; ask which concept has it | Luma tile |
| Spare-box control, forward | Which box holds spare tiles? | The gray box |

For the reverse mark question, the tested concept must be missing from the front. If `Luma tile` is already readable as the answer, inspect the rest of the context. Saying “mark” doesn't complete that question: the target is the tile's name.

The count is **1 concept direction + 1 move direction + 2 mark directions + 0 source directions + 1 control = 5**. It describes generated questions in this outline. It doesn't predict how many cards are due today, their practice order, or their review history.

There's some intentional overlap between the definition and movement questions. Keeping both here makes the definition-hiding check visible. In a real outline, keep both only if defining the object and recalling its property are useful separate tasks.

## Make the reverse answer ambiguous on purpose

Suppose the puzzle also has a **Neri tile**. Its rule is “a tile allowed to move one straight step,” but it also carries two blue dots. Add this subtree inside `Workshop puzzle`, alongside Luma rather than underneath it:

```text
  Neri tile :> a tile allowed to move one straight step.
    mark ;; two blue dots
```

Enable both directions for Neri's `mark` too. Preview each reverse mark card and read **everything visible**, including its ancestor context. With only `Workshop puzzle`, `mark`, and `two blue dots` to work from, the task is effectively **“Which tile has two blue dots?”** Both Luma and Neri satisfy it. If your preview supplies another cue, include that cue when judging the question.

The stored answer on one card may be Luma, but Neri is also a correct answer to this shared-mark prompt. Choosing one because you remember which card you just saw doesn't resolve the ambiguity.

Work through three possible answers before changing anything:

- **Luma tile:** satisfies the visible marking rule.
- **Neri tile:** also satisfies it; the shared mark can't distinguish them.
- **Mark:** names the property, so it answers a different question.

You can keep `mark` forward-only for both tiles if the useful task is remembering each tile's appearance. If you need to distinguish the tiles, write an explicit basic question outside either tile's ancestry:

```text
Workshop puzzle
  Which tile has two blue dots and may move one diagonal step? >> Luma tile
```

Place that question beside the concepts, not under Luma. The fictional rules support one answer, and the context doesn't print that answer for you. A question asking for **both** blue-dotted tiles would be another valid task, with a different answer boundary. Don't change the fictional rules merely to make the reverse card convenient.

Treat Neri as an optional extension: it adds questions beyond the original five. Return to the five-question Luma outline when checking the original ledger. For more examples of bounded prompts, see [how to make better flashcards](/blog/how-to-make-better-flashcards/).

## Convert one real outline after the rehearsal

Pick one concept and a few properties from your existing notes. Write the answers you want to recall before changing their card types. Then inspect every enabled direction with the preview button.

Check three things together: whether the front identifies the task, whether any ancestor supplies its answer, and whether another answer also satisfies the visible prompt. Compare the generated questions with your written plan, including a nearby question you left unchanged.

Use a forward descriptor when a concept should cue its property. Add the reverse direction when that property should identify the concept and does so clearly enough for your purpose. Keep reference-only properties out of the question count. If the questions look correct but don't appear in practice, continue with the separate [RemNote cards-not-showing guide](/blog/remnote-cards-not-showing/).

Stop after this one outline is understandable from its card fronts. You should be able to say why “Luma tile” completes the reverse mark question, why “mark” doesn't, and why hiding the definition still leaves a heading capable of giving the answer away.
