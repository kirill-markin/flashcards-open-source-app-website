---
title: "Comment repérer les doublons dans Anki et choisir les cartes à garder"
description: "Repérez les cartes en double dans Anki et comparez les notes pour choisir laquelle garder. Un exercice montre comment vérifier que vos cartes conservent leur historique de révision."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "cartes en double Anki"
  - "trouver les doublons Anki"
  - "supprimer les notes en double Anki"
  - "notes en double Anki"
  - "historique de révision Anki"
---

Anki vous présente comme nouvelle une question que vous avez déjà révisée. Un import a peut-être ajouté une copie, ou vous voyez une deuxième carte issue de la même note. En supprimant une ligne dans le navigateur de cartes, vous risquez de supprimer toutes les cartes de la note, y compris celle qui pose la question dans le sens que vous vouliez garder.

Pour faire le tri dans les **cartes en double dans Anki**, commencez par vérifier si elles proviennent de la même note. Si elles viennent de notes distinctes, utilisez **Notes → Find Duplicates** pour repérer les doublons possibles. Comparez le contenu des notes et l’historique de chaque carte, puis choisissez quelle note garder dans chaque groupe. Un champ identique vous indique quelles notes examiner de plus près avant toute suppression.

Les étapes ci-dessous concernent Anki sur ordinateur. Elles s’appuient sur la documentation et le code source de la version publiée, consultés le 4 octobre 2026. L’exercice présente un cas fictif et les résultats attendus d’après ces sources.

![Un membre d’un club d’échecs compare une tour claire en trop à deux tours usées sur un échiquier en bois](/blog/anki-duplicate-cards.png)

## Repérer l’origine de la répétition

Une note contient des champs comme **Front** (recto) et **Back** (verso). Les modèles génèrent les cartes à partir de ces champs. Une même note de vocabulaire peut produire une carte pour reconnaître un mot et une autre pour le retrouver à partir de sa traduction, chacune avec ses propres échéances. Ce sont des cartes sœurs. [Les notes et les champs dans le manuel d’Anki](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields)

Dans le navigateur (**Browse**), passez en mode **Cards** et ouvrez **Cards → Info** pour chaque ligne suspecte. Comparez les identifiants de note. Si les identifiants sont identiques, les cartes appartiennent à la même note. S’ils diffèrent, les notes sont distinctes. Dans `nid:123`, remplacez `123` par un identifiant réel pour afficher les cartes de la note dans tous les paquets. [La recherche par identifiant dans Anki](https://docs.ankiweb.net/searching.html#object-ids)

| Ce que vous voyez | Explication probable | Que faire |
| --- | --- | --- |
| Même note, questions dans les deux sens | Cartes sœurs créées volontairement | Vérifiez si les deux questions vous sont utiles |
| Même note, questions identiques à l’écran | Modèles de carte peut-être en double | Comparez les modèles et leurs aperçus |
| Notes différentes, questions apparemment identiques | Notes potentiellement en double | Comparez les notes en entier avant d’en choisir une |

Si vous avez créé des cartes sœurs volontairement, notre guide explique l’intérêt de réviser dans les deux sens. Pour mettre une seule carte en pause tout en la gardant dans la collection, suspendez-la. [Guide des cartes inversées (en anglais)](/blog/anki-reverse-cards/) · [Guide de la suspension des cartes (en anglais)](/blog/anki-bury-vs-suspend/)

Si les modèles sont identiques, suivez la procédure de diagnostic d’Anki. Supprimer un modèle est une opération à part entière, car elle touche toutes les notes du même type, y compris dans les autres paquets. [Résoudre les problèmes de cartes en double dans Anki](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html)

## Définir où chercher les notes en double

Ouvrez **Notes → Find Duplicates** et sélectionnez le champ à comparer, par exemple **Front**. Par défaut, Anki inclut tous les types de notes qui contiennent ce champ. Délimitez la recherche avec **Optional filter**, puis cliquez sur **Search**. [Les commandes de recherche de doublons dans le manuel d’Anki](https://docs.ankiweb.net/browsing.html#finding-duplicates)

Pour limiter la recherche à un paquet nommé `Cleanup practice`, saisissez cette expression.

```text
deck:"Cleanup practice"
```

La recherche dans un paquet inclut ses sous-paquets. Si des copies peuvent se trouver dans des paquets différents, retirez le filtre pour chercher dans toute la collection. Même si la recherche dans un seul paquet ne donne aucun résultat, une copie peut se trouver ailleurs. [La syntaxe de recherche par paquet dans Anki](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Cliquez sur un groupe de résultats pour examiner ses notes. **Tag Duplicates** ajoute le tag `duplicate` à toutes les notes du groupe, y compris celle que vous garderez. **Évitez de supprimer en bloc les résultats de `tag:duplicate`.** Servez-vous du tag pour retrouver les notes à examiner, puis sélectionnez une par une celles à supprimer. [Code de la version publiée d’Anki](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py)

La recherche compare le contenu du champ choisi. Pour retrouver deux questions formulées différemment qui portent sur la même chose, il faudra parfois chercher à la main. Deux questions formulées à l’identique peuvent aussi porter sur des langues ou des cours différents.

## Trois cas pour s’entraîner

Imaginez six notes dans `Cleanup practice`, un paquet sans sous-paquets. A et B utilisent les modèles d’origine de **Basic (and reversed card)** et produisent deux cartes chacune. Les notes C à F utilisent **Basic** et produisent une carte chacune. Les huit cartes sont dans ce paquet. Les lettres servent de repères pour l’exercice. Dans Anki, les identifiants de note et de carte sont des nombres.

| Notes | Recto → Verso | État d’apprentissage fictif | Décision |
| --- | --- | --- | --- |
| A et B | `le vélo` → `bicycle` | A a 12 révisions en reconnaissance et 3 en production. Les deux cartes de B sont nouvelles | Gardez A et examinez d’abord B en vue de la supprimer |
| C et D | `Chemical symbol for silver?` → `Ag` | 20 révisions pour C et 6 pour D | Comparez les historiques et choisissez quelle carte continuer à réviser |
| E et F | `bank` → `financial institution` pour E, `bank` → `side of a river` pour F | Deux sens différents | Gardez les deux notes et précisez le contexte dans chaque question |

La recherche sur le champ **Front** peut faire ressortir ces trois paires. Seule la première se prête à une décision rapide. Avant de considérer B comme redondante, comparez **tous les champs**, les médias, les tags, le type de note et le sens des questions dans l’aperçu. B contient peut-être un enregistrement de prononciation qui manque à A, ou génère une question absente des cartes de A.

Si un élément sert le même objectif d’apprentissage, copiez-le dans la note que vous gardez et vérifiez l’aperçu. Conservez aussi les tags utiles de la note d’origine. Si vous changez ce que la question cherche à vous faire mémoriser, créez une nouvelle carte avec son propre historique.

Pour choisir entre C et D, le nombre de révisions est un indice parmi d’autres. Examinez les dates et les évaluations des révisions, l’intervalle actuel et les échéances des deux cartes. Si vous avez révisé une carte plus souvent, c’est peut-être parce que vous avez dû réapprendre sa réponse plusieurs fois. Vérifiez que la question et la réponse vous sont utiles, puis choisissez quelle carte continuer à réviser en tenant compte de son historique. Si les réponses se contredisent, vérifiez d’abord votre source. Le nombre de révisions ne permet pas de déterminer quelle réponse est juste.

**Les historiques ne fusionnent pas** lorsque vous gardez C et supprimez D. La carte C conserve son propre état d’apprentissage. L’écran **Card Info** présente l’historique de chaque carte. Les révisions des notes supprimées restent visibles dans les statistiques de la collection entière. Elles disparaissent des statistiques par paquet et ne sont pas transférées à la carte conservée. [Informations sur les cartes](https://docs.ankiweb.net/stats.html#card-info) · [Statistiques des notes supprimées](https://docs.ankiweb.net/stats.html#more)

Si vous hésitez, remettez la suppression à plus tard. Notez les points à vérifier et, au besoin, suspendez les cartes que vous envisagez de supprimer le temps d’y voir clair.

## Supprimer un doublon confirmé et vérifier le résultat

Avant toute suppression dans votre collection, synchronisez vos autres appareils pour envoyer à AnkiWeb les modifications en attente, puis synchronisez Anki sur ordinateur pour les récupérer. Dans **File → Export**, enregistrez un **Anki Collection Package (`.colpkg`)** en activant **Include Media**. Ce fichier contient tous les paquets, les échéances de leurs cartes et l’historique de révision. Gardez-le en lieu sûr. L’importation remplace la collection du profil ouvert par celle de la sauvegarde, sans fusionner les deux. [Synchronisation dans le manuel d’Anki](https://docs.ankiweb.net/syncing.html) · [Export de la collection](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Pour vous entraîner avant de supprimer une note, créez un profil distinct via **File → Switch Profile** et importez-y la sauvegarde. Laissez ce profil d’essai déconnecté d’AnkiWeb. Chaque profil possède sa propre collection. Si vous connectez les deux au même compte, une collection peut écraser l’autre. [Fonctionnement des profils](https://docs.ankiweb.net/profiles.html) · [Sauvegarde et importation avec APKG et COLPKG (en anglais)](/blog/anki-apkg-vs-colpkg/)

Dans l’exercice, A1 désigne la carte de reconnaissance de A et A2 sa carte de production. B1 et B2 désignent les cartes correspondantes de B. Dans **Cards → Info**, relevez les identifiants réels des deux cartes de A, leurs échéances, leurs intervalles et quelques entrées faciles à retrouver dans l’historique. Relevez aussi l’identifiant de la note B. Comparez l’état avant et après la suppression au cours de la même session, sans réviser les cartes de A ou de B ni modifier leurs échéances.

Pour supprimer les notes en double une par une, procédez ainsi.

1. Dans le navigateur, remplacez la recherche en cours par une recherche `nid:` avec l’identifiant réel de B. En mode **Cards**, inspectez chaque résultat et affichez un aperçu des deux sens. Dans votre collection, vérifiez aussi si d’autres cartes de la même note se trouvent dans d’autres paquets en laissant le filtre de paquet de côté.
2. Passez en mode **Notes**. Vérifiez que la note B à supprimer est le seul résultat, sélectionnez cette note seule, puis choisissez **Notes → Delete**. Cette commande supprime la note sélectionnée et toutes ses cartes, même si vous l’utilisez sur une seule ligne en mode **Cards**. [La commande Delete dans le manuel d’Anki](https://docs.ankiweb.net/browsing.html#notes)
3. Relancez la recherche par identifiant de note pour B. Elle doit maintenant renvoyer zéro résultat. Recherchez les identifiants de carte de A avec `cid:`, en les séparant par une virgule, puis comparez les informations affichées pour les deux cartes avec celles que vous avez relevées.
4. Recherchez `deck:"Cleanup practice"` et comparez le nombre de lignes en mode **Notes** et en mode **Cards**. Vérifiez les notes restantes à l’aide du tableau ci-dessous.

Si vous avez supprimé uniquement B, voici ce que vous devriez voir.

| Point à vérifier | Avant | Résultat attendu après suppression |
| --- | --- | --- |
| Tout le paquet de l’exercice | 6 notes / 8 cartes | 5 notes / 6 cartes |
| Cartes sur « le vélo » | A1, A2, B1, B2 | A1 et A2 seulement |
| Identifiants des cartes de A, échéances, intervalles et historique | Les valeurs relevées | Les mêmes cartes, échéances, intervalles et entrées dans l’historique |
| Recherche par identifiant de la note B | Les deux cartes de B | Aucun résultat |
| Notes sur le symbole chimique de l’argent et les sens de « bank » | C, D, E, F | Les mêmes quatre notes |

Ici, la suppression d’une note retire deux cartes. Supprimer A donnerait les mêmes totaux que supprimer B et ferait disparaître les cartes déjà étudiées que vous vouliez garder. Vérifiez les identifiants en plus des totaux. Pendant le tri, laissez les cartes conservées avec leur état d’apprentissage et leurs échéances actuelles.

Un graphique de révision couvrant toute la collection peut encore compter les révisions des cartes supprimées. Pour vérifier que la carte conservée a gardé sa progression, contrôlez son identifiant et les informations de l’écran **Info**.

Une fois les résultats du premier groupe vérifiés, passez au suivant et décidez quelle note garder dans ce groupe. Si vous avez fait un essai sur une copie, reproduisez d’abord la suppression dans votre profil habituel. Vérifiez cette collection, synchronisez Anki sur ordinateur, puis synchronisez vos autres appareils avant d’y reprendre les révisions.

Si les doublons viennent d’un import, consultez notre guide avant le prochain import. Si vous aviez dupliqué une note pour la classer sous plusieurs thèmes, les tags permettent de la retrouver sous chacun de ces thèmes avec un seul historique à suivre. [Mise à jour des notes par CSV (en anglais)](/blog/anki-csv-update-existing-notes/) · [Tags et paquets (en anglais)](/blog/anki-tags-vs-decks/)
