---
title: "Anki Resize Images: Fit Pictures Without Shrinking the File"
description: "Resize Anki pictures for review with scoped card styling. Compare wide, tall, and small images, find sizing conflicts, and check the result on your phone."
date: "2026-11-01"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/720414c618bb82de1244fcd45cd993495e55db163687d5abd681e9daba2c800e.webp"
keywords:
  - "Anki resize images"
  - "Anki image size"
  - "Anki image too large"
  - "Anki image CSS"
  - "Anki resize images without add-ons"
---

A tall screenshot can fit the width of your Anki card and still fill several screens. To make it take less review space, give it both a width limit and a height limit. With automatic dimensions, an ordinary image can shrink to fit while keeping its proportions.

The recipe below applies to pictures in the **Back field of a Basic note**. It changes their displayed size without rewriting the image files, and it needs no add-on. It won't reduce media storage or sync traffic.

AI agents researched, wrote, and edited this guide using official Anki documentation, released Anki 26.09.3 editor source, and CSS references, checked November 1, 2026. The three-image worksheet uses calculated results. No Anki session or device test was run for this article. The hero illustration was generated with AI.

![A man moves a slide projector on a trolley toward a wall showing a red rowboat](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/720414c618bb82de1244fcd45cd993495e55db163687d5abd681e9daba2c800e.webp)

## Choose which size you want to change

“Resize an image” can mean three different jobs:

| Your problem | Change this | Effect on the media file |
| --- | --- | --- |
| One picture needs a particular displayed size | That image's sizing in the note editor | Display sizing alone doesn't resample the file |
| Pictures across a note type take too much review space | The card template and Styling | Original files stay unchanged |
| The actual image has too many pixels or takes too much storage | A copy of the file in an image editor, then its attachment in Anki | Resampling changes pixel dimensions; compression settings affect bytes |

For a single picture on desktop Anki, click it in the field editor. If the editor has shrunk it, double-click it to expand it, or use the **Actual Size** image control. Then drag a corner resize handle. The editor's shrunken view is an editing convenience; check the card preview to see its review size.

In the released [26.09.3 editor implementation](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/editor/image-overlay/ImageOverlay.svelte), dragging a handle sets the image's HTML width attribute. It doesn't create a smaller image file. Card styling can still change the displayed result.

Use the shared recipe below when you want the same size limits for many images. It sets width and height to `auto`, so it can override widths chosen with the editor's resize handles. If a picture is absent altogether, start with [Anki images not showing](/blog/anki-images-not-showing/) instead.

## Check the note type before changing its template

**A template edit reaches every note using that template, across decks.** Selecting one card in Browse doesn't limit the edit to that card. Anki's [styling manual](https://docs.ankiweb.net/manual/templates/styling#card-styling) explains the shared scope.

For a contained trial, create a separate note type:

1. On desktop Anki, open **Tools → Manage Note Types → Add**.
2. Choose **Clone: Basic**, give it a name such as `Basic image sizing practice`, and close the window.
3. Open **Add**, choose that new type, and make a practice note with a question on the Front and an ordinary picture in the Back.

This follows Anki's [note-type creation instructions](https://docs.ankiweb.net/manual/editing#adding-a-note-type). Cloning creates a type; existing notes stay on their current type. A separate deck alone wouldn't isolate the styling.

Before editing a type you already use, copy its Front Template, Back Template, and Styling into a text file. For broader protection, keep a media-inclusive collection export; our [flashcard backup guide](/blog/how-to-back-up-flashcards/) explains that layer. You won't need to convert any existing notes to try this recipe.

Use ordinary image attachments here. Don't apply this recipe to native image-occlusion cards, SVG masks, or custom layouts with positioned overlays. Those need coordinated sizing so the picture and its overlays stay aligned. The [image-occlusion guide](/blog/anki-image-occlusion-modes/) covers that different card type.

## Put the limit around the Back field

With the practice note open, click **Cards…**, then **Back Template**. Anki documents these controls and their preview in the [templates manual](https://docs.ankiweb.net/manual/templates/intro#the-templates-screen).

Find the existing `{{Back}}` reference and replace just that reference with:

```html
<div class="study-image">{{Back}}</div>
```

For a standard Basic card, the complete Back Template will look like this:

```html
{{FrontSide}}

<hr id="answer">

<div class="study-image">{{Back}}</div>
```

Keep `{{FrontSide}}` and the answer divider. The divider's `id="answer"` also gives Anki its answer-scroll target, as the [field replacement documentation](https://docs.ankiweb.net/manual/templates/fields#basic-replacements) explains. If your template has other content, preserve it and wrap only `{{Back}}`.

Now open **Styling**. Add these rules at the bottom, **after the closing brace of the existing `.card` rule**:

```css
.study-image {
    max-width: 480px;
    margin-inline: auto;
}

.study-image img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 60vh;
}
```

The wrapper can be up to 480 CSS pixels wide and gets narrower when the card has less room. Each image has two limits: the wrapper's full width and 60% of the review viewport height. The `auto` dimensions let ordinary images retain their proportions when those limits apply.

These are maximums. The recipe doesn't enlarge a small image to fill the wrapper. MDN explains how [maximum width constrains width](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/max-width), and its [length reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/length#vh) defines viewport-height units. CSS pixels describe layout; they don't necessarily correspond one-for-one with your screen's hardware pixels.

The selector affects every image inside that wrapped Back field. It leaves images elsewhere in the template alone, including Front images repeated through `{{FrontSide}}`. It also narrows any text in the Back field to the wrapper's width. If that text wrapping is unwelcome, put images in a dedicated field and wrap that field instead; don't expand this into a global `img` rule.

## Compare a wide picture, a tall picture, and a small one

Use three separate practice notes with ordinary images. For this worksheet, assume intrinsic display dimensions of **1200 × 800**, **800 × 1200**, and **100 × 100 CSS pixels**. Assume no inline sizing, other conflicting rules, borders, or padding on the images.

For the first calculation, give the wrapper 480 CSS pixels of available width and assume a 600-CSS-pixel-high review viewport. The height ceiling is `0.6 × 600 = 360` pixels.

| Picture | Intrinsic size | Expected displayed size | What sets the limit |
| --- | --- | --- | --- |
| Wide | 1200 × 800 | 480 × 320 | Wrapper width |
| Tall | 800 × 1200 | 240 × 360 | Viewport height ceiling |
| Small | 100 × 100 | 100 × 100 | Neither ceiling requires shrinking |

The tall picture is the useful check. Fitting it to 480 pixels wide alone would leave it 720 pixels tall. The 360-pixel height cap scales it further, to 240 pixels wide.

Now reduce available wrapper width to **280 CSS pixels**, keeping the same viewport height:

| Picture | Expected displayed size at 280 pixels available |
| --- | --- |
| Wide | About 280 × 186.7 |
| Tall | 240 × 360 |
| Small | 100 × 100 |

For these assumptions, the scale factor is the smallest of `1`, `available width ÷ image width`, and `360 ÷ image height`. This follows the [CSS sizing rules for images with automatic width and height](https://www.w3.org/TR/CSS2/visudet.html#min-max-widths).

These are calculated examples, not captured Anki results. Your phone's available card width and review viewport depend on its client, orientation, and interface. A display advertised as 1080 pixels wide doesn't establish a 1080-CSS-pixel card area.

## If the result doesn't match, inspect one image

A picture can carry sizing inside the field as well as receive sizing from the template. In the note editor, select the Back field and open its underlying HTML with the **`</>`** control, documented under [editing features](https://docs.ankiweb.net/manual/editing#editing-features).

Compare these two examples:

```html
<img src="diagram.png" width="200">
```

```html
<img src="diagram.png" style="width: 200px; height: 300px;">
```

They aren't equivalent when our stylesheet applies. Its `width: auto` can override the HTML width attribute, so an earlier per-image width choice may stop controlling the review size. A normal inline `style` width wins over a normal stylesheet width, as MDN's [specificity guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity#inline_styles) describes. Maximum-size rules still apply unless another declaration overrides those too.

If you want this image to follow the shared automatic recipe, copy its original HTML somewhere safe. Then remove only its explicit width and height attributes and its inline width and height declarations. Keep its `src` and any unrelated attributes or styles. Preview that one note before making more edits.

| What you see | Inspect next |
| --- | --- |
| Shape looks stretched | Fixed width and height in the field or other template rules |
| Picture still overflows | Whether it is inside `study-image`; conflicting `min-width`, `max-width`, or `!important` rules |
| Unrelated pictures changed too | A global `img` rule or a wrapper around more fields than intended |
| The card still needs scrolling | Text and the total number of images, rather than one image's height |

The `60vh` ceiling applies **per image**. Three images plus an explanation can still make a long card. It doesn't reserve room for the question, answer buttons, and every other element. Identify the conflicting dimension or rule before adding `!important`; a blanket override can hide the cause.

## Finish on the device you study with

Preview the front and back of all three notes on desktop. Then sync and open them in review on your usual phone or tablet, in the orientations you use. Check that the wide image fits, the tall one leaves a usable card, and the small one stays readable. Also check an unrelated image and a Back field containing text.

If diagram labels become too small, increase `480px` for more width or `60vh` for more height, depending on which limit is shrinking the picture. The available card width still constrains it. Repeat the device check: a card that fits but hides the detail you need hasn't met the goal.

To undo this recipe, replace `<div class="study-image">{{Back}}</div>` with `{{Back}}` and remove only the two `.study-image` CSS blocks. Restore any per-image HTML you changed during diagnosis from your saved copy. If you used the separate practice type, your original Basic notes never received these edits.

The image files haven't been resampled, so there's no lost resolution to recover from this styling change. Keep the change only when the actual review card shows the details you need at a comfortable size.
