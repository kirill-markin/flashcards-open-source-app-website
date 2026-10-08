---
title: "Anki Blank Cards: Find the Field, Template, or Styling Fault"
description: "Diagnose blank Anki cards by checking fields, conditional templates, and text colors. Use a small repair worksheet before deleting useful questions."
date: "2026-10-08"
image: "/blog/anki-blank-cards.png"
keywords:
  - "Anki blank cards"
  - "Anki front of card blank"
  - "Anki text not showing"
  - "Anki card template fields"
  - "Anki night mode text invisible"
---

A question can still be in Anki's editor while its card shows no question during review. The front template may point to an empty field, a condition may hide the prompt, or the text may blend into the background. Those faults need different repairs.

**Start with the card you want to keep. Find its question in the fields, then check how the front template uses it.** Anki's [blank-front support page](https://anki.tenderapp.com/kb/card-appearance/the-front-of-this-card-is-blank) explains the field-and-template mismatch behind its warning. A card that merely looks blank also needs a formatting check.

This guide covers ordinary text cards in desktop Anki. The worksheet's expected results follow official documentation and released Anki 26.09.3 source, checked October 8, 2026. The examples weren't tested in Anki.

![A restorer slides a dark board behind etched glass to make its pale botanical pattern visible](/blog/anki-blank-cards.png)

## Follow the question from the editor to the front

Open **Browse**, switch to **Cards** mode, and select the affected card. Inspect its fields, then click **Cards…** to open **Front Template**, **Back Template**, and **Styling**. Check the selected card type, particularly when the note also produces a reverse.

A note stores the information; a card is one question generated from it. A populated note doesn't guarantee that every card uses the populated field. [Anki's notes and card types](https://docs.ankiweb.net/manual/getting-started#card-types)

Open the template window from the affected note. Opening it from **Tools → Manage Note Types** previews field-name placeholders, which can make a template look populated even when a real note isn't. Use the selected card's **Preview** in Browse to check its actual content. [Anki's template editor](https://docs.ankiweb.net/manual/templates/intro#the-templates-screen)

Use this worksheet to narrow the fault:

| What you find | Check next | Repair target |
| --- | --- | --- |
| The intended question is absent from every field. | Whether the source content was removed or never entered. | Restore or write the question before changing its display. |
| The question is in Front, but the front template contains only a different, empty field. | The exact field named between `{{` and `}}`. | Point the template to the populated question field. |
| The populated question sits inside a condition on an empty optional field. | The opening and closing conditional tags. | Let the question display independently of that optional field. |
| The template includes the question, but it disappears in dark mode or with a certain text color. | Styling and the field's own formatting. | Correct the rule or formatting hiding the text. |

Field names are case-sensitive: `{{Front}}` and `{{front}}` aren't interchangeable. Match spelling and capitalization against **Fields…**. A template error about an unknown field calls for a reference check; it doesn't prove that the stored question has disappeared. [Field replacement rules](https://docs.ankiweb.net/manual/templates/fields#basic-replacements)

If the missing content is a picture rather than text, use the [Anki images not showing guide](/blog/anki-images-not-showing/) to check the media file and its reference.

## Know which notes an edit will reach

Templates belong to a note type. Changing a shared template affects notes using it across the collection, including other decks. Styling is shared by that note type's cards too. Selecting one card or putting it in a separate deck doesn't isolate those edits. [Collection-wide note types](https://docs.ankiweb.net/manual/getting-started#note-types) and [shared styling](https://docs.ankiweb.net/manual/templates/styling#card-styling)

Before repairing your real type, copy its front template, back template, and styling somewhere you can restore them. Keep the affected note's original field content, including HTML if it carries formatting. For a collection export, the [APKG versus COLPKG guide](/blog/anki-apkg-vs-colpkg/) explains the choices.

With the affected card selected in Browse, open **Cards → Info** and record its **Card ID** and **Note ID**. For a studied card, also record its interval and one recognizable review-history entry. Anki documents the [ID location and search syntax](https://docs.ankiweb.net/manual/searching#object-ids), and the [interval and review history](https://docs.ankiweb.net/manual/stats#card-info).

Keep the existing card type while repairing its template. **Remove Card Type** removes that type's cards across the note type, including cards in other decks; it isn't limited to the selected card. The [released template editor](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/clayout.py#L615-L645) counts affected cards by note type and template before asking for confirmation.

The rehearsal below uses a clone and a fresh note. Don't move your reviewed notes into the clone merely to try the examples.

## Rehearse on one working card

Create a separate type before deliberately introducing a fault:

1. From the main window, open **Tools → Manage Note Types → Add**. Choose the **Clone** entry for an unmodified **Basic** type, click **OK**, and name it `Blank front rehearsal`. Close Manage Note Types.
2. Open **Add**, select that clone, and click **Fields…**. Add a field named exactly `Hint`; keep **Front** and **Back**.
3. Put `What is 7 × 8?` in **Front**, `56` in **Back**, and leave **Hint** empty. Add an unused tag such as `blank-front-rehearsal`.
4. With the clone's unchanged Basic templates, add the note. In Browse, search `tag:blank-front-rehearsal` and confirm that it finds only this note.
5. In **Cards** mode, select its card and use **Preview**. Check that the front asks `What is 7 × 8?` and the answer shows `56`. Compare the search in Notes and Cards modes: this baseline should have one note and one card. Record its Card ID in **Cards → Info**.

Anki documents [cloning and adding fields](https://docs.ankiweb.net/manual/editing#adding-a-note-type), [tag searches](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes), and [Browser preview](https://docs.ankiweb.net/manual/browsing#editing-area). Notes mode previews only a note's first card, so use Cards mode when checking a type with siblings.

Begin with that working card, then try the following faults one at a time on the clone. Save each template edit and reopen **Preview** in Browse to check the result. Restore the working front before moving on. Keep Front and Back unchanged throughout.

### An empty field is being used as the question

Open **Cards…** from the rehearsal note and replace its **Front Template** with:

```html
{{Hint}}
```

The question remains in **Front**, but the template asks for the empty **Hint**. Preview has no question to display and may show a blank-front warning. Repair the reference:

```html
{{Front}}
```

**Expected after repair:** the card again asks `What is 7 × 8?`, its answer remains `56`, and its fields haven't changed. Use its recorded Card ID for the final identity check below. This uses Anki's documented [field replacement behavior](https://docs.ankiweb.net/manual/templates/fields#basic-replacements).

### An optional hint is controlling the whole prompt

Try this **Front Template** next:

```html
{{#Hint}}
{{Front}}
{{/Hint}}
```

`{{#Hint}}` includes the enclosed content only when **Hint** has text. Because Hint is empty, it hides the populated Front too. `{{^Hint}}` means the opposite: include content when Hint is empty. [Anki's conditional replacement rules](https://docs.ankiweb.net/manual/templates/generation#conditional-replacement)

If every note should ask its question whether or not it has a hint, move the question outside the condition:

```html
{{Front}}
{{#Hint}}
<p>{{Hint}}</p>
{{/Hint}}
```

**Expected after repair:** with Hint empty, the question appears and there is no hint paragraph. Put `Think of 7 × 4, then double it.` in Hint to check the optional paragraph, then clear it. The question should stay visible in both cases.

Don't fill an optional field with meaningless text just to make the card appear. Decide whether the condition was intended to control that card's existence. For deliberately optional reverse questions, see the [reverse-card guide](/blog/anki-reverse-cards/).

### The words are there, but their color hides them

Restore the front to `{{Front}}` and leave Hint empty. On the clone only, use this **Styling** to create a controlled example:

```css
.card {
  font-size: 24px;
  color: #202020;
  background-color: white;
}
.card.nightMode {
  color: #202020;
  background-color: #202020;
}
```

Save the styling. Compare the card in light and dark themes using **Preferences → Appearance → Theme**, reopening Browser Preview after each change. Preferences is in the Anki menu on macOS and the Tools menu on Windows/Linux. [Anki's theme settings](https://docs.ankiweb.net/manual/preferences#appearance)

In this example, light mode has readable dark text; night mode gives the text and background the same color. In the `.card.nightMode` block, change only the text color:

```css
color: #f5f5f5;
```

**Expected after repair:** the question and answer are readable in both themes. The template still includes Front; no field content was removed. Anki documents the [night-mode selector](https://docs.ankiweb.net/manual/templates/styling#night-mode).

For your real type, inspect its existing rules rather than replacing all styling with this example. If one note stays invisible while others using the same template work, inspect that field's HTML and text color using the editor's **`</>`** control. The eraser removes formatting from selected text, including its color and bolding. Preserve the original, then clear unwanted formatting only on the affected text. [Anki's field-formatting controls](https://docs.ankiweb.net/manual/editing#editing-features)

## Finish the repair on the card you meant to keep

Apply the smallest relevant correction to the real fields, template, or styling. For a shared template change, preview both the affected note and another note using that type. Check any sibling card types as well.

Find the original card by replacing the Browse search with `cid:` followed by the Card ID you recorded. For example, `cid:123` is the documented syntax; use your own ID, not `123`. It should return that card in Cards mode. Check its Note ID in Info too. A matching count alone can't establish that you kept the original.

Then use your original Browse search to compare the surrounding notes and cards:

| Check | Passing result |
| --- | --- |
| Stored content | The intended question and answer remain in their fields. |
| Rendered front | The question is readable, with the intended optional content. |
| Answer | Revealing it still shows the correct response. |
| Themes | Text remains readable in light and dark mode. |
| Identity | The recorded Card ID still finds the intended question, attached to the same Note ID. |
| Notes and cards | The expected useful questions remain; unexpected count changes are investigated. |
| Studied card | Its recorded interval and review-history entry still match, before doing another review. |

For the rehearsal, the expected count stays **one note and one card**, with the same Card ID, through all three faults and repairs. Anki keeps existing cards that become empty after edits until a separate cleanup step. That's why the worksheet starts with a generated, working card. [Card generation and deletion](https://docs.ankiweb.net/manual/templates/generation#card-generation-%26-deletion)

**Repair a useful question before considering deletion.** Tools → Empty Cards checks for empty cards; readable text hidden by color needs a display repair. Its report covers the collection, and the released desktop dialog deletes cards from that report. [Anki 26.09.3 cleanup implementation](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/emptycards.py) For obsolete cards left by cloze renumbering, follow the existing [cloze-number cleanup instructions](/blog/anki-cloze-numbers/).

If fields, conditions, and colors don't explain the failure, keep the original template available and describe the remaining problem precisely: the note type and card type, which field contains the prompt, and whether it fails in Preview, study, light mode, or dark mode. That gives the next investigation a concrete starting point.
