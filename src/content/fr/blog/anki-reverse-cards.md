---
title: "Anki : ajouter des cartes inversées à des notes existantes"
description: "Ajoutez des cartes inversées à vos notes Anki existantes. Vérifiez les correspondances pour garder l’intervalle et l’historique de la carte d’origine."
date: "2026-10-02"
image: "/blog/anki-reverse-cards.png"
keywords:
  - "cartes inversées Anki"
  - "Anki Généralités (deux sens)"
  - "Anki Basique (carte inversée optionnelle)"
  - "ajouter des cartes inversées à des notes Anki"
  - "modifier le type de note Anki"
---

Vous pouvez reconnaître « la clé » au premier coup d’œil. Retrouver le mot à partir de « key (for a lock) » est un autre exercice. Dans Anki, il suffit de saisir la paire de mots une fois pour obtenir deux cartes à partir de la même note. Chaque carte suit son propre calendrier de révision. [Les notes et les champs dans le manuel d’Anki](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields)

Pour ajouter des **cartes inversées** à des notes de type **Basique** (*Basic*), sélectionnez les notes dans **Parcourir**, puis choisissez **Notes → Modifier le type de la note...**. Avec **Généralités (deux sens)** (*Basic (and reversed card)*), chaque note sélectionnée donne une carte dans chaque sens. Avec **Basique (carte inversée optionnelle)** (*Basic (optional reversed card)*), vous pouvez activer le sens inverse note par note. Associez la carte d’origine au nouveau type de carte qui pose la question dans le même sens. [Changer le type de note sur ordinateur, sur le forum d’Anki](https://forums.ankiweb.net/t/swap-front-to-back-for-testing-yourself/29805)

Cette procédure concerne Anki sur ordinateur. Elle s’appuie sur la documentation et le code source de la version publiée 26.09.3, consultés le 2 octobre 2026. Les résultats de l’exercice sont calculés sur le papier.

![Un joueur amateur de tennis de table s’entraîne à renvoyer la balle du revers, raquette à la main, dans une salle de quartier](/blog/anki-reverse-cards.png)

## Quelles questions réviser dans les deux sens ?

Anki propose trois types de notes pour cet exercice.

| Type de note | Questions générées |
| --- | --- |
| Basique | Recto → Verso |
| Généralités (deux sens) | Recto → Verso et Verso → Recto |
| Basique (carte inversée optionnelle) | Recto → Verso et, si le champ Ajouter le verso contient du texte, Verso → Recto |

Choisir les notes pour lesquelles activer le sens inverse est pratique quand un paquet mêle vocabulaire, explications et questions-réponses classiques. [Les types de notes standard dans le manuel d’Anki](https://docs.ankiweb.net/getting-started.html#note-types)

Prenez le verso actuel comme point de départ. Pouvez-vous donner une réponse précise en voyant seulement ce côté ? Vérifiez le sens du mot, la langue et la forme attendue.

Prenons trois notes de type Basique déjà présentes dans un paquet pour apprendre le français. La troisième rappelle pourquoi un cours fictif a lieu jeudi.

| Note | Recto actuel | Verso actuel | Ajouter le verso après conversion | Cartes attendues |
| --- | --- | --- | --- | --- |
| A | la clé | key (for a lock) | `y` | la clé → key (for a lock) et key (for a lock) → la clé |
| B | le vélo | bicycle | `y` | le vélo → bicycle et bicycle → le vélo |
| C | Pourquoi le cours a-t-il lieu jeudi ? | Le professeur n’est pas disponible mercredi. | vide | La question d’origine uniquement |

Pour A et B, incluez l’article dans la réponse attendue et décidez si vous acceptez aussi les synonymes. Si le paquet mélange plusieurs langues, indiquez sur la carte « bicycle » que vous cherchez le mot français. Décidez de la réponse attendue avant de créer la carte.

Pour C, « Le professeur n’est pas disponible mercredi » pourrait répondre à plusieurs questions. Difficile de retrouver précisément « Pourquoi le cours a-t-il lieu jeudi ? » à partir de cette seule phrase. Gardez la carte d’origine dans le sens question → réponse. Si vous souhaitez une autre carte, écrivez sa question. [Guide pour mieux formuler les questions de vos cartes mémoire (en anglais)](/blog/how-to-make-better-flashcards/)

## Convertir un petit lot de notes existantes

Utilisez cette procédure pour les notes de type **Basique** qui ont gardé les champs **Recto** (*Front*) et **Verso** (*Back*) et dont le modèle d’origine génère une seule carte dans le sens recto → verso. Si vous avez personnalisé les champs ou modifié les modèles, définissez les correspondances au cas par cas. Faites de même pour les notes de type **Texte à trous** (*Cloze*).

Synchronisez d’abord les modifications en attente sur vos autres appareils, puis récupérez-les en lançant la synchronisation sur l’ordinateur. Exportez votre collection avant d’en modifier la structure. [Guide des sauvegardes APKG et COLPKG et de l’option d’inclusion des médias (en anglais)](/blog/anki-apkg-vs-colpkg/)

1. Sur ordinateur, ouvrez **Parcourir**, passez en mode **Notes** et repérez les notes de type Basique à convertir. Commencez par un petit lot, comme A, B et C.
2. Sélectionnez uniquement ces notes et choisissez **Notes → Ajouter des étiquettes...**. Donnez-leur une étiquette encore inutilisée, par exemple `reverse-check-20261002`. Remplacez toute la recherche en cours par `tag:reverse-check-20261002` et vérifiez que seul le lot voulu s’affiche. Gardez cette recherche pour les contrôles qui suivent. Un filtre sur le type d’origine comme `note:Basique` (ou `note:Basic` si le type porte son nom anglais) écartera les notes converties. [Ajouter des étiquettes](https://docs.ankiweb.net/browsing.html#notes) · [Rechercher par étiquette](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)
3. Comparez le nombre de lignes du lot en mode **Notes**, puis en mode **Cartes**. Choisissez une carte dans le sens recto → verso que vous avez déjà révisée. Ouvrez **Cartes → Info...** et notez son intervalle ainsi qu’une révision facile à retrouver dans l’historique. Repassez en mode **Notes** et sélectionnez le lot. [Les informations sur une carte dans le manuel d’Anki](https://docs.ankiweb.net/stats.html#card-info)
4. Choisissez **Notes → Modifier le type de la note...**. Sélectionnez **Basique (carte inversée optionnelle)** pour suivre l’exercice, ou **Généralités (deux sens)** si toutes les notes sélectionnées doivent être révisées dans les deux sens.
5. Vérifiez les correspondances des champs et des types de cartes à l’aide du tableau ci-dessous, puis enregistrez.

La commande **Modifier le type de la note...** agit sur les notes sélectionnées. Modifier les modèles d’un type de note touche toutes les notes de ce type dans la collection, y compris dans les autres paquets, quelle que soit votre sélection. [Les types de notes dans Anki](https://docs.ankiweb.net/getting-started.html#note-types) · [Le fonctionnement des modèles de cartes](https://docs.ankiweb.net/templates/intro.html)

### Faire correspondre les champs et les types de cartes

Un **type de note** définit les champs et les questions qu’Anki peut générer. Dans cet exemple, chaque **type de carte** correspond à un sens, avec **Carte 1** pour le sens d’origine et **Carte 2** pour le sens inverse. Quand vous changez de type de note, vous indiquez où recopier le texte des champs et à quel nouveau type de carte rattacher les cartes existantes.

Pour chaque **nouvelle destination**, choisissez l’**ancienne source** indiquée dans le tableau. Dans Anki 26.09.3, le menu déroulant où vous choisissez la source se trouve avant le nom de la destination. [L’affichage des correspondances dans le code d’Anki 26.09.3](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/change-notetype/MapperRow.svelte)

| Correspondance | Nouvelle destination | Ancienne source à sélectionner |
| --- | --- | --- |
| Champ | Recto | Recto |
| Champ | Verso | Verso |
| Champ, type optionnel uniquement | Ajouter le verso | (Rien) |
| Type de carte | Carte 1, sens direct | Carte 1, sens direct d’origine |
| Type de carte | Carte 2, sens inverse | (Rien) |

En choisissant **(Rien)** pour **Ajouter le verso** (*Add Reverse*), vous laissez le nouveau champ vide. Pour **Carte 2**, **(Rien)** laisse à Anki le soin de créer une nouvelle carte dans le sens inverse dès que la note remplit les conditions.

Intervertir **Recto** et **Verso** change la question sur la carte d’origine. Associer l’ancienne **Carte 1** à la nouvelle **Carte 2** transfère sa progression à la question dans le sens inverse. Pour garder la question que vous avez déjà révisée dans le sens recto → verso, associez les champs et la **Carte 1** comme indiqué dans le tableau.

Anki conserve les cartes rattachées à un nouveau type de carte et supprime les anciennes cartes dont le type est resté sans correspondance. La conservation du calendrier de révision dépend de la conversion effectuée et des correspondances choisies. Elle concerne uniquement les cartes conservées. [Le changement de type de note dans le code d’Anki 26.09.3](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/notetype/notetypechange.rs)

## Renseigner le champ Ajouter le verso et comparer les totaux

Avec le type **Basique (carte inversée optionnelle)**, saisissez `y` dans le champ **Ajouter le verso** pour A et B et laissez-le vide pour C. N’importe quel texte dans ce champ active la carte inversée. Le `y` sert de repère et reste invisible sur les deux cartes. [Les règles de création des cartes inversées dans Anki](https://docs.ankiweb.net/templates/generation.html#reverse-cards)

Retrouvez le lot avec la recherche par étiquette. Vous devriez compter autant de lignes qu’indiqué dans le tableau.

| Étape | Notes | Cartes |
| --- | --- | --- |
| Avant la conversion | 3 | 3 |
| Type optionnel, champ Ajouter le verso vide pour les trois notes | 3 | 3 |
| Type optionnel, cartes inversées activées pour A et B | 3 | 5 |
| Autre possibilité, conversion des trois notes au type Généralités (deux sens) | 3 | 6 |

Dans le dernier cas, Anki crée aussi la carte inversée de C, même si elle vous aide peu à réviser. Si vous passez **N** notes à une seule carte au type optionnel et activez **R** cartes inversées, vous obtenez **N notes et N + R cartes**, à condition d’utiliser les modèles d’origine et de renseigner les champs **Recto** et **Verso**.

Relancez la recherche `tag:reverse-check-20261002` et passez en mode **Cartes**. Sélectionnez chaque ligne à tour de rôle pour vérifier la carte dans l’**Aperçu**. Le mode **Notes** regroupe les cartes d’une même note et limite l’aperçu à la première carte. [Les modes du navigateur et l’aperçu dans le manuel d’Anki](https://docs.ankiweb.net/browsing.html#editing-area)

Vous devez retrouver les deux questions prévues pour A et B, une seule pour C et toujours trois notes au total. Sur la carte d’origine que vous avez examinée, comparez l’intervalle et la révision dans l’historique à ce que vous aviez noté. La carte inversée part de zéro et suit sa propre progression, même si vous reconnaissez déjà le mot. Quand les résultats correspondent au tableau, reprenez les mêmes contrôles sur un lot plus grand.

## Quand une carte inversée n’apparaît pas en révision

Une carte inversée peut figurer dans **Parcourir** et manquer à l’appel pendant les révisions. Vérifiez son état et son échéance avant de modifier la note. Les limites quotidiennes ou l’enfouissement des cartes sœurs, celles qui viennent de la même note, peuvent retarder son apparition. [Les limites quotidiennes](https://docs.ankiweb.net/deck-options.html#daily-limits) · [Les options d’enfouissement](https://docs.ankiweb.net/deck-options.html#burying)

Pour retrouver une carte masquée, consultez le [guide sur l’enfouissement et la suspension (en anglais)](/blog/anki-bury-vs-suspend/). Si la recherche par étiquette en mode **Cartes** ne montre aucune carte inversée pour cette note, vérifiez son type ainsi que le contenu des champs **Ajouter le verso**, **Recto** et **Verso**.

## Mettre une carte inversée en pause ou la retirer

Pour garder la carte inversée et mettre ses révisions en pause, suspendez-la seule. [Guide de l’enfouissement et de la suspension (en anglais)](/blog/anki-bury-vs-suspend/)

Pour retirer une carte inversée optionnelle déjà créée, videz le champ **Ajouter le verso**. La carte devient vide, mais elle reste dans la collection jusqu’au nettoyage. Ouvrez **Outils → Chercher des cartes vides...** et vérifiez la liste avant de lancer la suppression. [La création et la suppression des cartes dans le manuel d’Anki](https://docs.ankiweb.net/manual/templates/generation#card-generation-%26-deletion)

La liste couvre toute la collection, quelle que soit la recherche en cours dans **Parcourir**. Examinez aussi les lignes qui concernent d’autres notes avant de décider si vous lancez la suppression. [Fonctionnement du nettoyage d’après le code d’Anki, dans le guide des textes à trous (en anglais)](/blog/anki-cloze-numbers/)

Dans **Parcourir**, la commande **Supprimer** retire la note et toutes ses cartes. Réservez-la aux notes que vous voulez supprimer en entier. [Supprimer une note dans le manuel d’Anki](https://docs.ankiweb.net/browsing.html#notes)

Le changement de type de note impose une synchronisation à sens unique. Si un autre appareil contient encore des modifications non synchronisées, traitez-les avant d’envoyer la collection convertie. Quand la collection sur l’ordinateur contient tout le travail à conserver, envoyez-la vers AnkiWeb. Sur vos autres appareils, téléchargez cette version depuis AnkiWeb quand Anki vous le demande. [Guide pour choisir entre l’envoi et le téléchargement (en anglais)](/blog/anki-sync-upload-or-download/) · [Les règles de synchronisation à sens unique dans le manuel d’Anki](https://docs.ankiweb.net/syncing.html#conflicts)
