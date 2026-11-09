---
title: "Ordre des nouvelles cartes dans Anki : sélection, tri et vérification de la file d’attente"
description: "Un exemple à six cartes pour comprendre comment Anki sélectionne et trie les nouvelles cartes. Vérifiez les limites des sous-paquets, les positions dans la file et le paquet choisi pour la séance."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "ordre des nouvelles cartes dans Anki"
  - "ordre de sélection des nouvelles cartes dans Anki"
  - "ordre de tri des nouvelles cartes dans Anki"
  - "position croissante dans Anki"
  - "cartes Anki dans le désordre"
---

Dans Anki, une nouvelle carte en position 10 peut passer après une carte en position 60. Si vous étudiez un paquet parent avec la sélection **Par paquet** (*Deck*) et le tri **Dans l’ordre de sélection** (*Order gathered*), Anki peut terminer la sélection dans un sous-paquet avant de passer à celui qui contient la carte en position 10. Le tri par date de création dans le navigateur ne change que l’affichage du tableau.

L’ordre des nouvelles cartes se décide en deux temps. La **sélection** détermine quelles cartes Anki retient dans les limites du jour. Le **tri** fixe l’ordre de passage des cartes retenues. Pour trouver le bon réglage, vérifiez d’abord si Anki choisit les mauvaises cartes ou s’il présente les bonnes dans un ordre inattendu.

Ces instructions concernent les paquets ordinaires dans Anki sur ordinateur. L’exemple à six cartes est un calcul original sur papier, établi à partir du manuel et de la version publiée d’[Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3), tous deux vérifiés le 6 octobre 2026.

![Un homme tient un quatrième vinyle au-dessus d’une case vide d’un range-disques, à côté de trois disques. Derrière lui, deux bacs contiennent les albums qu’il n’a pas retenus.](/blog/anki-new-card-order.png)

## Choisir l’ordre de passage qui vous convient

Ouvrez les **Options** du paquet sur lequel vous cliquez pour étudier, puis cherchez la section **Ordre d’affichage** (*Display Order*). Quand vous étudiez un paquet parent, ses réglages d’ordre d’affichage s’appliquent à toute la séance, y compris aux cartes de ses sous-paquets.

| Résultat souhaité | Ordre de sélection des nouvelles cartes (*New Card Gather Order*) | Ordre de tri des nouvelles cartes (*New Card Sort Order*) |
| --- | --- | --- |
| Suivre les positions croissantes dans toute l’arborescence du paquet sélectionné | Par position croissante (*Ascending position*) | Dans l’ordre de sélection |
| Parcourir les sous-paquets par ordre alphabétique, puis suivre les positions dans chacun | Par paquet | Dans l’ordre de sélection |
| Garder les mêmes cartes et les présenter dans un ordre aléatoire | Le réglage de sélection de votre choix | Aléatoire (*Random*) |

Ces combinaisons suivent les règles de [sélection](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) et de [tri](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order) du manuel Anki, en anglais. L’option **Par position croissante** suit les positions enregistrées des nouvelles cartes. L’ordre d’insertion et le repositionnement manuel peuvent modifier ces positions, qui ne suivent donc pas forcément les dates de création.

Avant de modifier un réglage, vérifiez le préréglage associé au paquet et quels autres paquets l’utilisent. Les réglages d’ordre d’affichage sont communs à tous les paquets qui partagent ce préréglage. Si le changement doit s’appliquer à un seul paquet, suivez d’abord le [guide pour attribuer un préréglage à un seul paquet (en anglais)](/blog/anki-deck-options-presets/). Pour les limites quotidiennes, vous pouvez définir une valeur propre à **Ce paquet** (*This deck*) ou à **Aujourd’hui seulement** (*Today only*). L’ordre d’affichage, lui, se règle au niveau du préréglage.

## Quelles sont les quatre cartes retenues ?

Imaginez un paquet parent ordinaire nommé `OrderLab`, avec deux sous-paquets et seulement les six cartes ci-dessous. Chaque carte vient d’une note distincte de type **Basique** (*Basic*) qui ne génère qu’une carte. Les six cartes ont donc le même numéro de type de carte et aucune ne partage sa note avec une autre.

| Carte | Paquet | Position enregistrée |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Les six cartes sont nouvelles. Aucune n’est enfouie, suspendue ou placée dans un paquet filtré. Au départ, il n’y a ni autre carte, ni répétition d’apprentissage, ni révision. Vous n’avez encore rien étudié aujourd’hui. `OrderLab` n’a aucun paquet au-dessus de lui, et les limites de révision applicables laissent assez de place pour les six nouvelles cartes.

Sélectionnez **OrderLab** pour la séance. Sa limite effective de nouvelles cartes est de **4**. Celle de `01 First` est de **3** et celle de `02 Second` de **2**, sans dérogation temporaire. Gardez le tri **Dans l’ordre de sélection** dans les deux cas. Faites chaque calcul sur papier en repartant du même état initial de la collection, sans répondre aux cartes entre les deux comparaisons.

Avec la sélection **Par paquet**, Anki procède ainsi.

1. Il passe par `01 First` avant `02 Second`, dans l’ordre alphabétique.
2. Il retient **A, B, C** dans l’ordre de leurs positions. `01 First` a fourni trois cartes et il reste une place dans le paquet parent.
3. Il retient **D** dans `02 Second` et atteint la limite de quatre cartes du paquet parent.

L’ordre attendu de première apparition est **A → B → C → D**. E et F restent hors de la sélection.

Avec la sélection **Par position croissante**, Anki examine les cartes des deux sous-paquets dans l’ordre **D → A → E → B → F → C**. Les quatre premières respectent toutes les limites. Deux viennent de `02 Second` et deux de `01 First`, ce qui atteint le total de quatre. La sélection s’arrête là.

L’ordre attendu est **D → A → E → B**. C et F restent hors de la sélection. Le [code de sélection de la version publiée](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs) applique les limites des paquets et de leurs parents à mesure qu’Anki retient les cartes.

La limite de deux cartes de `02 Second` fixe un maximum. Avec **Par paquet**, `02 Second` ne fournit qu’une carte, car `01 First` a déjà pris trois des quatre places disponibles. Avec **Par position croissante**, les positions de cet exemple donnent deux cartes de chaque sous-paquet. Dans une autre collection, la répartition peut être différente.

## Que change l’ordre quand les six cartes sont retenues ?

Pour cette deuxième comparaison sur papier, prévoyez assez de places pour les six cartes. Fixez la limite du paquet parent à **6**, celle de `01 First` à **3** et celle de `02 Second` à **3**. Gardez le tri **Dans l’ordre de sélection**.

| Réglage de sélection | Limites du parent / `01 First` / `02 Second` | Ordre attendu de première apparition |
| --- | --- | --- |
| Par paquet | 6 / 3 / 3 | A → B → C → D → E → F |
| Par position croissante | 6 / 3 / 3 | D → A → E → B → F → C |

Les deux réglages retiennent les six cartes. Seul leur ordre de passage change. Si vous passez uniquement la limite du parent à six et laissez celle de `02 Second` à deux, Anki ne retient que cinq cartes. F reste exclue. Ces limites servent au calcul sur papier, sans recommandation d’augmenter le nombre de nouvelles cartes par jour.

## Le tri ne peut pas faire revenir une carte écartée

Revenez aux limites initiales de **4 / 3 / 2** et passez uniquement l’**Ordre de tri des nouvelles cartes** à **Aléatoire**.

| Réglage de sélection | Cartes que le tri aléatoire peut mélanger | Cartes qu’il ne peut pas ajouter |
| --- | --- | --- |
| Par paquet | A, B, C, D | E, F |
| Par position croissante | D, A, E, B | C, F |

Le [code de tri de la version publiée](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs) mélange les cartes déjà retenues. Pour chaque réglage de sélection, le tableau indique quelles cartes pourront passer. Leur ordre précis est imprévisible à partir de ce tableau.

L’option **Par type de carte, puis dans l’ordre de sélection** (*Card type, then order gathered*) s’applique elle aussi aux cartes déjà retenues. Les six cartes issues de notes de type Basique ont le même numéro de type de carte. Cette option conserve donc leur ordre de sélection dans cet exemple.

Prenons un exemple qui porte uniquement sur le tri. Quatre cartes issues de notes à plusieurs modèles ont déjà été retenues dans cet ordre : **W (type 2), X (type 1), Y (type 2), Z (type 1)**. Le tri par type de carte donne **X → Z → W → Y**. Le type 1 passe en premier et, au sein de chaque type, les cartes gardent leur ordre de sélection. Le calcul commence après la sélection. Les réglages d’enfouissement déterminent quelles cartes issues d’une même note peuvent être retenues à l’étape précédente.

Le numéro correspond à la position du modèle de carte au sein du type de note. Les rôles de « reconnaissance » ou de « production » dépendent de vos modèles. Vérifiez les questions elles-mêmes avant de compter sur ce tri pour faire passer d’abord toutes les questions dans le sens direct.

## Vérifier les positions dans le navigateur avant de les modifier

Ouvrez le **Navigateur** (*Browse*), passez en mode **Cartes** (*Cards*) et lancez une recherche dans l’arborescence du paquet. Pour `OrderLab`, utilisez cette commande.

```text
deck:OrderLab is:new
```

Dans le menu des en-têtes de colonne, affichez **Question**, **Carte** (*Card*), **Paquet** (*Deck*), **Échéance** (*Due*) et **Création** (*Created*). Pour une nouvelle carte, **Échéance** indique sa position dans la file et **Création** indique quand sa note a été créée. Le **Champ de tri** (*Sort Field*) affiche le contenu du champ de la note désigné pour le tri. Trier le tableau par une colonne change uniquement son affichage. Les positions enregistrées et le réglage de sélection utilisé pendant la séance restent les mêmes. La [documentation des colonnes du navigateur (en anglais)](https://docs.ankiweb.net/manual/browsing#columns) détaille ces différences.

La recherche `is:new` peut inclure des cartes nouvelles suspendues ou enfouies. Leur valeur dans la colonne **Échéance** s’affiche entre crochets. Cette recherche plus ciblée les exclut, ainsi que les cartes qui se trouvent actuellement dans un paquet filtré.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Le manuel Anki, en anglais, détaille la [recherche par état de carte](https://docs.ankiweb.net/manual/searching#card-state) et la [recherche par paquet](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes). Si le nom du paquet contient des espaces, mettez-le entre guillemets, comme dans `deck:"My Deck"`. Les résultats servent à examiner les cartes. Les limites et l’enfouissement automatique des cartes issues d’une même note peuvent encore réduire la file du jour. Notre [guide sur l’enfouissement et la suspension (en anglais)](/blog/anki-bury-vs-suspend/) explique dans quels cas ces cartes sont indisponibles.

Si les positions correspondent déjà à l’ordre voulu, laissez-les telles quelles. Si elles doivent changer, relevez les anciennes positions, sélectionnez précisément un petit groupe de nouvelles cartes, puis utilisez **Cartes → Repositionner** (*Cards → Reposition*). Vérifiez les options de la boîte de dialogue avant de valider. **Décaler la position des cartes existantes** (*Shift position of existing cards*) peut aussi déplacer des cartes qui occupent des positions plus élevées en dehors de la sélection. Sans décalage, les nouvelles positions peuvent coïncider avec des positions existantes. En cas d’égalité, la position seule ne suffit pas à prévoir l’ordre de passage. Consultez la [documentation de la commande Repositionner (en anglais)](https://docs.ankiweb.net/manual/browsing#cards).

Vous pouvez modifier la sélection ou le tri en conservant votre historique d’apprentissage et de révision. Pour ce diagnostic, concentrez-vous sur les positions des nouvelles cartes et l’ordre d’affichage.

## Vérifier le paquet choisi et les places qui restent aujourd’hui

Dans l’exemple initial, si vous sélectionnez directement `OrderLab::02 Second`, seules D, E et F sont candidates. Avec sa limite de deux nouvelles cartes, la sélection **Par position croissante** et le tri **Dans l’ordre de sélection**, attendez-vous à voir **D → E**. Les quatre places encore disponibles dans le paquet parent suffisent pour ces deux cartes, même si les limites des paquets ancêtres s’appliquent. En sélectionnant le parent avec le réglage **Par paquet** et les limites **4 / 3 / 2**, vous obtenez **A → B → C → D**.

Une séance lancée depuis `OrderLab` suit l’ordre d’affichage de `OrderLab`. Modifier ce réglage pour `02 Second` ne suffit donc pas à changer la séance lancée depuis le parent. Le paquet sélectionné fournit l’ordre d’affichage et fixe le plafond total, auquel s’ajoutent les limites applicables à chaque sous-paquet. L’option **Appliquer les limites des paquets parents** (*Limits start from top*) détermine si les limites des paquets ancêtres s’appliquent aussi lorsque vous étudiez directement un sous-paquet. Le manuel Anki, en anglais, décrit les [règles des sous-paquets](https://docs.ankiweb.net/manual/deck-options#subdecks) et le [réglage des limites des paquets ancêtres](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top).

Vérifiez aussi les limites de révision. Par défaut, la limite de révision s’applique également aux nouvelles cartes. L’option **Les nouvelles cartes ignorent la limite de révision** (*New cards ignore review limit*) modifie ce comportement. Cette option et **Appliquer les limites des paquets parents** s’appliquent à toute la collection, comme le montre le [code de l’interface des limites quotidiennes de la version publiée](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte). Relevez l’état de ces deux options avant d’estimer combien de nouvelles cartes vous pourrez voir aujourd’hui.

Dans le navigateur, utilisez l’**Aperçu** (*Preview*) pour examiner les questions sans y répondre. Lors de votre prochaine séance habituelle, notez les éléments suivants.

| À relever | Ce que cela permet de vérifier |
| --- | --- |
| Paquet choisi pour la séance, son préréglage et ses réglages de sélection et de tri | Quel ordre d’affichage s’applique à la séance ? |
| Cartes attendues et positions enregistrées | Le problème vient-il de la sélection ou de l’ordre de passage ? |
| Limites de nouvelles cartes et de révision, dérogations pour le paquet ou la journée et cartes déjà étudiées aujourd’hui | Combien de places reste-t-il ? |
| Limites des paquets ancêtres et état des deux options communes à toute la collection | Quels plafonds supplémentaires s’appliquent ? |
| Cartes enfouies, suspendues, placées dans un paquet filtré ou issues d’une même note | Parmi les cartes candidates, lesquelles risquent d’être indisponibles ? |
| Premières apparitions observées, relevées séparément des répétitions d’apprentissage | L’ordre des nouvelles cartes correspond-il à la prévision ? |

Les répétitions d’apprentissage peuvent s’intercaler dans la séance après votre réponse à une nouvelle carte. L’option **Ordre des nouvelles cartes et des révisions** (*New/Review Order*) place les nouvelles cartes avant, après ou parmi les révisions. La sélection et le tri restent des étapes distinctes. Le [code de construction de la file de la version publiée](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs) combine ces catégories après avoir trié les nouvelles cartes.

Vous pouvez arrêter le diagnostic quand les cartes attendues et leur ordre de première apparition correspondent à ce que vous observez. Si l’écart persiste, conservez les positions, les réglages, le paquet sélectionné, la version d’Anki et l’ordre observé. Relevez aussi les extensions susceptibles d’intervenir pour pouvoir cibler le diagnostic. Si votre objectif est de retravailler un sujet, suivez le [guide pour s’entraîner avec un paquet filtré sans modifier la planification (en anglais)](/blog/anki-filtered-decks-without-rescheduling/).
