---
title: "How to Import SuperMemo Flashcards into Nibomo with XML"
description: "Export your own question-and-answer cards from SuperMemo for Windows as XML, then check the fronts and backs after importing them into Nibomo."
date: "2026-11-12"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c5238368263fcfa5f9e954a33a869b9b1a23948c5a0f154b82ada77ea6ab0215.webp"
keywords:
  - "SuperMemo to Nibomo"
  - "SuperMemo XML export"
  - "export SuperMemo flashcards"
---

SuperMemo for Windows can export one branch of your collection as XML. Start with a branch that holds a few question-and-answer items you wrote yourself. Once Nibomo's AI chat has imported them, you can check every front and back before moving a larger batch.

This guide covers the Windows desktop collection. SuperMemo.com is a separate language-learning service with its own courses, MemoCards, and course progress. The XML commands below come from the Windows manual. [SuperMemo.com MemoCards help](https://www.supermemo.com/en/faq/how-to-add-memocards)

![Hands comparing a three-frame railway film strip with matching black-and-white prints](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c5238368263fcfa5f9e954a33a869b9b1a23948c5a0f154b82ada77ea6ab0215.webp)

## Export one branch from SuperMemo for Windows

1. Open your collection. If the export controls are hidden, select **File → Level → Professional**. The Windows manual also documents **File → Backup** for keeping a copy of the original collection. [SuperMemo File menu](https://super-memory.org/archive/help/file.htm)
2. In the **Contents** window, right-click a branch containing a few of your own Q&A items. Choose **Export → XML** and save the file as something like `spanish-travel-test.xml`. The Contents command exports elements from the selected branch. The main menu's **File → Export → XML** covers the whole collection. [SuperMemo Contents menu](https://super-memory.org/archive/help/contmenu.htm)

SuperMemo's XML exchange can include learning data for use by other SuperMemo versions. Keep your original collection and backup for that data. Nibomo's AI import creates new cards with a fresh review schedule. [SuperMemo XML FAQ](https://www.super-memory.org/archive/help/faq/xml.htm)

## Send the XML to Nibomo's AI chat

1. In the [Nibomo web app](https://app.nibomo.com/?locale=en), open the workspace where you want to save the cards. Go to **Library → Import → Import from SuperMemo**. Use the web app if you can't find the SuperMemo option in your installed version.
2. Select **Choose files**, pick the `.xml` file, then select **Start import**. This sends the file to AI chat and requires an internet connection. The chat can save cards as it goes, so use an empty workspace if you want an easy way to count the test cards.
3. Open **Library → Cards** to check what's saved. If the import stops partway through, compare the saved cards with the source before retrying. You can ask the chat to continue with the missing items. [Nibomo import guide](/docs/import-flashcards/)

## Check the cards before moving another branch

For a branch with these three sample items, look for one saved card per row. This is an example of the expected result.

| Expected front | Expected back |
| --- | --- |
| Where is the station? | ¿Dónde está la estación? |
| What does `mañana` mean in `Hasta mañana`? | Tomorrow. |
| Can I pay by card? | ¿Puedo pagar con tarjeta? |

Open each card and compare both sides with the original. Three saved cards could still include a reversed pair or a missing accent in `estación`. If a pair is off, give the chat the exact question and answer from SuperMemo so it can fix that card before you import more. Check cards that depend on images or special formatting separately, and keep the SuperMemo collection for your templates, incremental-reading material, and review history.

*This AI-assisted guide uses the SuperMemo Windows manual and Nibomo's app source. The sample illustrates the checks to make on your own import.*
