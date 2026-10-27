---
title: "Comment importer des flashcards dans Quizlet depuis Excel, Sheets ou du texte"
description: "Importez une liste de mots à deux colonnes dans Quizlet, choisissez les tabulations et les sauts de ligne, puis corrigez les définitions coupées, les cartes en trop et les problèmes CSV avant de publier."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "comment importer des flashcards dans Quizlet"
  - "format d'importation Quizlet"
  - "importer Excel dans Quizlet"
  - "Google Sheets vers Quizlet"
  - "import Quizlet avec tabulations"
---

« Red, green, blue » ressemble à une réponse de flashcard tout à fait ordinaire. Mais si vous utilisez la virgule pour séparer un terme de sa définition, ces mêmes virgules rendent la ligne ambiguë. Quelques signes de ponctuation peuvent vous obliger à reprendre une liste de mots pourtant prête à importer.

Pour importer des flashcards dans Quizlet depuis Excel, Google Sheets ou du texte, partez de deux colonnes : une pour les termes, l'autre pour les définitions. Copiez les données, collez-les dans le formulaire d'importation du site web, puis choisissez une tabulation entre les champs et un saut de ligne entre les cartes. Faites d'abord un essai avec quatre lignes pour vérifier chaque paire avant de transférer toute la liste.

![Un potier associe des tasses en céramique à leurs soucoupes sur des rangées distinctes avant de les ranger sur une étagère](/blog/how-to-import-flashcards-into-quizlet.png)

## Où trouver le formulaire d'importation de Quizlet

Quizlet décrit l'importation sur son site web : les champs peuvent être séparés par des virgules, des tabulations ou des tirets, et les cartes par des points-virgules ou des sauts de ligne. Les [instructions officielles d'importation](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) indiquent les étapes suivantes :

1. Connectez-vous et choisissez **Create → Flashcard set** (Créer → Liste de cartes).
2. Saisissez un titre, sélectionnez **Import** (Importer), puis collez votre texte.
3. Réglez les séparateurs en fonction du texte collé. Pour les exemples de cet article, choisissez **Tab** (tabulation) et **New line** (saut de ligne).
4. Sélectionnez **Import**, puis choisissez les langues des termes et des définitions.
5. Vérifiez les cartes avant de sélectionner **Create** pour enregistrer et publier la liste.

Ces instructions ont été vérifiées le 15 septembre 2026. Les exemples ci-dessous expliquent comment préparer et vérifier le texte ; ils ne décrivent pas un test effectué dans un compte connecté.

## Commencez par une petite plage de cellules

Dans Excel ou Google Sheets, placez chaque paire terme-définition sur une ligne. Voici un essai de quatre cartes :

| Terme | Définition |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Copiez uniquement les quatre lignes de données des deux colonnes. Si les en-têtes occupent la ligne 1, sélectionnez **A2:B5**. N'incluez pas les en-têtes dans la plage copiée.

Vous devez obtenir quatre cartes, avec les termes en espagnol et les définitions en anglais. La dernière carte doit conserver « colores primarios de la luz » d'un côté et « red, green, blue » de l'autre, sans couper ces expressions. Les virgules font partie de la réponse.

Une fois cet exemple compris, préparez votre propre feuille. Travaillez sur une copie pour garder l'original comme référence. Supprimez les lignes vides et excluez les notes et les colonnes supplémentaires de la sélection. Complétez les termes ou définitions manquants avant de copier.

Gardez les deux colonnes ensemble lors du tri. Trier uniquement les termes les dissocierait de leurs réponses : même avec le bon nombre de cartes, l'importation pourrait contenir des paires incorrectes.

## Le format texte brut utilise de vraies tabulations

Voici les quatre mêmes lignes au format texte séparé par des tabulations. Entre chaque terme et sa définition, il y a une véritable tabulation :

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

La tabulation est un caractère distinct. Plusieurs espaces peuvent lui ressembler à l'écran, mais ils ne peuvent pas la remplacer comme séparateur. Saisir les caractères `\t` n'insère pas non plus de tabulation. Si votre éditeur de texte rend cette opération difficile, placez les paires dans deux colonnes d'un tableur et copiez les cellules.

Chaque carte doit tenir sur une seule ligne dans le texte source. Une longue définition peut s'afficher sur deux lignes si la fenêtre est étroite, sans qu'un saut de ligne soit ajouté au contenu. En revanche, un saut de ligne inséré dans une cellule du tableur fait partie du texte. Supprimez ces sauts de ligne internes avant d'utiliser les sauts de ligne pour séparer les cartes.

Supprimez également les tabulations à l'intérieur des termes ou des définitions. Dans ce format, elles servent uniquement à séparer les deux champs.

## Si votre liste est un fichier CSV

Ouvrez le CSV dans un tableur avant de préparer l'importation. Un enregistrement CSV comme celui-ci contient deux champs lorsqu'il est interprété selon les règles du format concernant les guillemets :

```text
"colores primarios de la luz","red, green, blue"
```

La réponse entre guillemets contient des virgules. Un champ de texte qui découpe le contenu aux virgules n'est pas nécessairement un lecteur CSV : ne comptez donc pas sur les guillemets pour y préserver la réponse.

Dans Excel ou Google Sheets, vérifiez que l'enregistrement occupe exactement deux cellules. Copiez ensuite ces cellules pour obtenir du texte séparé par des tabulations. Si la réponse a été répartie dans des colonnes supplémentaires, corrigez d'abord les paramètres d'importation CSV du tableur. Copier une ligne mal interprétée ne ferait que transmettre l'erreur.

Vérifiez aussi les valeurs que le tableur pourrait réinterpréter. Si `0012` est un code que vous devez apprendre, le transformer en `12` modifie la carte. Comparez les identifiants, les dates, les guillemets et les mots accentués avec le fichier original avant de copier la plage.

## Quand les cartes ne correspondent pas à vos lignes

Servez-vous de l'essai pour repérer la première différence. Changez un seul élément à la fois, puis comparez le résultat aux quatre mêmes lignes sources.

| Symptôme | Problème de séparation probable | Correction |
| --- | --- | --- |
| Une réponse est coupée au niveau des virgules | La virgule est sélectionnée comme séparateur de champs | Préparez deux colonnes et sélectionnez Tab |
| « well-being » est coupé à l'intérieur du terme | Le tiret est sélectionné comme séparateur de champs | Conservez le trait d'union et séparez les champs par une tabulation |
| Une seule réponse devient plusieurs cartes | Le texte source contient des sauts de ligne internes | Placez la réponse sur une seule ligne dans le texte source |
| « Terme » et « Définition » apparaissent sur une carte | La ligne d'en-tête a été copiée | Sélectionnez uniquement les lignes de données |
| Les deux champs restent du même côté | Des espaces remplacent la tabulation | Copiez une plage de deux colonnes dans un tableur |

Par exemple, une réponse avec « first stage » et « second stage » sur deux lignes peut devenir `first stage; second stage`. Les deux parties restent ainsi sur une seule ligne. Gardez **New line** comme séparateur de cartes lorsque vous utilisez un point-virgule à l'intérieur d'une réponse.

Si les deux étapes méritent des questions distinctes, rédigez plutôt deux paires complètes. Le [guide pour créer de meilleures flashcards (en anglais)](/blog/how-to-make-better-flashcards/) peut vous aider à faire ce choix.

## Vérifiez le résultat avant de publier

Examinez les quatre cartes de l'essai. Pour votre liste complète, comparez les cartes importées à la source nettoyée :

- Le total correspond-il au nombre de lignes de données complètes ?
- La première et la dernière paire correspondent-elles à la source, avec leurs réponses complètes ?
- La ponctuation, les accents et les codes ont-ils été conservés sans modification ?
- Y a-t-il des faces vides, des en-têtes, des doublons ou des réponses associées aux mauvais termes ?
- Chaque réponse dont vous avez modifié les sauts de ligne garde-t-elle son sens ?

Lisez plusieurs paires ordinaires en plus de celles qui vous semblent suspectes. Un nombre de cartes correct ne suffit pas à repérer une mauvaise réponse associée à un terme valide. Si quelque chose ne va pas, corrigez la source avant de recommencer l'importation. Conservez le fichier nettoyé pour les corrections futures.

## Paires déjà rédigées ou cartes générées par l'IA ?

Quizlet décrit aussi la création de cartes assistée par l'IA à partir de contenu fourni dans sa [présentation de la création par IA](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai). Les formulations générées nécessitent une vérification du contenu à part entière. Pour une liste terme-définition déjà rédigée, l'importation structurée permet de vérifier le transfert en comparant le résultat aux paires d'origine.

Vous partez de paragraphes ? [Transformez vos notes en flashcards (en anglais)](/blog/turn-notes-into-flashcards/) avant de préparer le texte à importer. Vous déplacez une liste dans l'autre sens ? Consultez le [guide d'exportation Quizlet](/fr/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
