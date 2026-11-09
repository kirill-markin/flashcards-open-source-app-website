---
title: "How to Copy an Anki Note With Create Copy"
description: "Copy an Anki note into the same deck or another deck, edit the copy, and check which cards have review history."
date: "2026-11-09"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/66549760dd51398c436b277176d24d706f5ed3a85273a29bcaef544e293273fe.webp"
keywords:
  - "copy an Anki note"
  - "Anki Create Copy"
  - "duplicate one Anki card"
  - "copy Anki card to another deck"
---

In Anki desktop, select a card in **Browse** and choose **Notes → Create Copy**. This opens an editable copy in the **Add** window. Choose a deck and click **Add** to save it as a separate note. Its cards start fresh, while the original cards keep their review history. [Anki’s Browse menu](https://docs.ankiweb.net/manual/browsing#notes)

Say you already study *le pont* and want to practice the word in a sentence. You can turn the copy into a sentence prompt and keep the original word pair in rotation.

![A hand holds a pothos cutting in a glass of water beside a mature potted pothos](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/66549760dd51398c436b277176d24d706f5ed3a85273a29bcaef544e293273fe.webp)

## Copy one note to the deck you want

1. Open **Browse** and select one row. You can start in **Cards** or **Notes** mode. In Cards mode, Anki copies the note behind the selected card.
2. Choose **Notes → Create Copy**. The **Add** window opens with the original note type, fields, and tags filled in. The deck starts out as the current card’s home deck.
3. Edit the fields and tags in **Add**. To put the copy in another deck, click the deck name and choose the destination. For the sentence example, change the Front to *Le pont traverse la rivière.* and the Back to *The bridge crosses the river.*
4. Click **Add**. Anki creates a new note and generates cards from its templates. A template with a **Deck Override** can send its card to a different deck from the one you chose.

[Anki’s Add window](https://docs.ankiweb.net/manual/editing#adding-cards-and-notes) · [Released Browse source](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/qt/aqt/browser/browser.py#L828-L834) · [Released Add editor source](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/ts/routes/editor/NoteEditor.svelte#L1023-L1103) · [How to check a Deck Override](/blog/anki-deck-override/)

Anki can highlight the first field as a duplicate as soon as the copy opens. It checks that field against other notes of the same type, even in other decks. Changing only the Back leaves the match in place on a Basic note. Give the Front a distinct prompt for a variant, or click **Add** with the matching text if you meant to keep it. [Anki’s duplicate check](https://docs.ankiweb.net/manual/editing#duplicate-check) · [Released Add validation](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/ts/routes/editor/NoteEditor.svelte#L549-L599)

## See which cards and reviews belong to the copy

In a test collection, the *le pont* note used **Basic (and reversed card)**. Both directions were rated **Easy** once before the note was copied. The sentence version went into **French examples** with one extra tag.

| What changed | Original note | Sentence copy |
| --- | --- | --- |
| Front | le pont | Le pont traverse la rivière. |
| Back | the bridge | The bridge crosses the river. |
| Tags | `chapter_4`, `french` | `chapter_4`, `french`, `sentence_practice` |
| Deck | French | French examples |
| Note and cards | Same Note ID and two Card IDs as before | New Note ID and two new Card IDs |
| Review history | One review per card, with intervals preserved | Both cards new, zero reviews |

To check your copy, switch **Browse** to **Cards** mode and search for its text or a tag you added, such as `tag:sentence_practice`. Replace the whole search so an old deck filter can’t hide a result. Check the **Deck** column for each card. You can enable it from the column header’s right-click menu. [Anki’s Browse columns](https://docs.ankiweb.net/manual/browsing#columns)

Select a row from each version and open **Cards → Info**. Compare the **Note ID** and the review history at the bottom. To see all cards from one note, search `nid:123` using its Note ID in place of `123`. In the test, adding `is:new` to that search found both sentence cards. The same filter found zero cards for the reviewed original. [Card Info](https://docs.ankiweb.net/manual/stats#card-info) · [Anki’s Note ID searches](https://docs.ankiweb.net/manual/searching#object-ids)

The note type controls how many cards you get. The standard **Basic** type makes one, and **Basic (and reversed card)** makes two even when you start from one card row. Each note has its own field values and tags, but both still use the same templates. A template edit can change how both versions look. [Anki’s card templates](https://docs.ankiweb.net/manual/templates/intro)

To move existing cards and keep studying them with their current history, select those cards and use **Cards → Change Deck**. To practice the same prompt in the opposite direction, you can add a reverse card to the existing note. [Anki’s card actions](https://docs.ankiweb.net/manual/browsing#cards) · [How to add a reverse card](/blog/anki-reverse-cards/)

*AI assisted with research, writing, editing, and the illustration. The desktop steps were checked against Anki’s manual and released UI source. A separate automated test ran the example in a disposable collection using the Anki 26.09.4 backend on macOS.*
