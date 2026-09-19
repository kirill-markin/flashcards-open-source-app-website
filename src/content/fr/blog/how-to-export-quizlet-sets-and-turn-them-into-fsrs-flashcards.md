---
title: "Comment exporter des sets Quizlet en 2026 (et pourquoi Export a disparu)"
description: "Exportez un set Quizlet avec les étapes actuelles du site web. Si Export n'apparaît pas, vérifiez si vous avez créé le set, si vous en avez fait une copie ou si vous utilisez l'application mobile."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "comment exporter Quizlet"
  - "comment exporter des flashcards Quizlet"
  - "bouton Export Quizlet manquant"
  - "télécharger des flashcards Quizlet"
  - "Quizlet vers CSV"
  - "Quizlet vers Anki"
---

Si le bouton **Export** n'apparaît pas dans Quizlet, commencez par deux vérifications : avez-vous créé le set d'origine, et passez-vous par le site web de Quizlet ? Quizlet réserve l'export au créateur original du set, et la fonction n'existe que sur le site web. Une copie ne peut pas être exportée, même si elle figure maintenant dans votre bibliothèque.

Si vous remplissez ces conditions, l'export lui-même va vite : ouvrez le set sur le site web, choisissez **More → Export**, réglez l'ordre des termes et des définitions, puis sélectionnez **Copy text**. Quizlet ne télécharge aucun fichier de paquet. Il place le texte dans votre presse-papiers, sans les images.

**Informations vérifiées :** le 30 août 2026, d'après les [instructions officielles d'export de Quizlet](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

![Une archiviste compare deux jetons de propriété avant de remettre des cartes de texte appariées ; deux pochettes à documents sont prêtes et les photographies restent derrière la vitre](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## D'abord, le bouton Export devrait-il être là ?

Faites cette vérification avant d'essayer de télécharger vos flashcards Quizlet autrement :

| Votre situation | Export devrait-il être disponible ? | Étape suivante |
| --- | --- | --- |
| Vous avez créé le set d'origine et vous l'avez ouvert sur le site web de Quizlet | Oui, d'après la page d'aide de Quizlet | Suivez les étapes ci-dessous |
| Vous passez par l'application iOS ou Android | Non ; l'export existe uniquement sur le site web | Ouvrez Quizlet dans un navigateur et connectez-vous |
| Vous avez copié le set d'un autre utilisateur | Non ; Quizlet indique que les sets copiés ne peuvent pas être exportés | N'attendez pas d'une copie qu'elle débloque Export |
| Vous pouvez consulter le set mais vous ne l'avez pas créé | Non ; un accès en consultation ne fait pas de vous le créateur | Demandez un fichier source au créateur, ou reconstruisez le set à partir de matériel que vous pouvez employer |

Si vous avez créé le set d'origine et que le bouton d'export Quizlet reste absent, vérifiez que vous êtes connecté avec le compte propriétaire et que vous avez ouvert l'original, pas une copie. La page d'aide de Quizlet ne documente aucune deuxième voie d'export. À ce stade, contactez le support de Quizlet plutôt que de faire confiance à un téléchargeur qui prétend contourner la restriction.

## Comment exporter des flashcards Quizlet depuis le site web

Pour un set que vous avez créé :

1. Connectez-vous à Quizlet sur le site web.
2. Sélectionnez **Your library**.
3. Sélectionnez **Flashcard sets**.
4. Ouvrez le set que vous voulez exporter.
5. Ouvrez le menu **More**.
6. Sélectionnez **Export**.
7. Choisissez comment ordonner les termes et les définitions.
8. Sélectionnez **Copy text**.
9. Collez le résultat dans un éditeur de texte brut.

Le processus actuel s'arrête là. Il n'y a pas de bouton « téléchargement » à la fin.

Pour des cartes recto-verso classiques, je recommande une tabulation entre le terme et la définition, et un saut de ligne entre les cartes. Ce choix de séparateur est un conseil pratique, pas une exigence de Quizlet. Les tabulations se relisent en général plus facilement que les virgules, parce que les virgules reviennent très souvent à l'intérieur des définitions.

Un fichier propre de deux cartes ressemblerait à ceci, avec une tabulation au milieu de chaque ligne :

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## Ce que l'export Quizlet conserve

Quizlet décrit cette fonction de façon étroite : elle exporte les **termes et les définitions** d'un set dont vous êtes le créateur. Quizlet précise aussi que les images ne peuvent pas être exportées.

Le résultat collé est la limite la plus sûre à retenir. Si le texte, le séparateur ou le saut de ligne s'y trouvent, vous pouvez les conserver dans un fichier. La page d'aide de Quizlet ne promet pas de reprendre les dossiers, les modes d'étude, la mise en forme, le niveau de maîtrise, l'historique de révision ou la planification.

Vous obtenez donc une copie du texte des cartes, pas une sauvegarde Quizlet restaurable. La distinction compte aussi si vous cherchiez à « télécharger des flashcards Quizlet » : Quizlet copie le texte dans le presse-papiers, et c'est vous qui créez le fichier.

## Enregistrez une copie brute en UTF-8 avant de nettoyer quoi que ce soit

Gardez le processus réversible :

1. Collez l'export dans un éditeur de texte brut.
2. Enregistrez-le en UTF-8, par exemple sous `biology-quizlet-raw.txt`.
3. Dupliquez-le sous `biology-quizlet-working.txt`.
4. Laissez le fichier brut tranquille et ne modifiez que la copie de travail.

Avant d'importer le fichier de travail, contrôlez-le pendant que le set Quizlet est encore ouvert :

- Activez l'affichage des caractères invisibles et confirmez où se placent les tabulations et les sauts de ligne.
- Cherchez le séparateur que vous avez choisi à l'intérieur des termes et des définitions. Une tabulation en trop peut créer un troisième champ inattendu.
- Repérez les définitions qui contiennent leurs propres sauts de ligne ; elles peuvent passer pour des cartes supplémentaires.
- Comparez le début, le milieu et la fin du fichier avec Quizlet, y compris les définitions les plus longues.
- Fermez puis rouvrez le fichier, et vérifiez les accents, les écritures non latines, les symboles et les signes de ponctuation typographiques.
- Signalez les champs vides, les doublons et les lignes irrégulières au lieu de deviner en silence comment les réparer.

Ne comparez le nombre de lignes au nombre de cartes que si chaque carte occupe exactement une ligne. Les définitions multilignes cassent ce raccourci.

Gardez le fichier brut même quand la copie de travail semble bonne. Si un import décale un champ ou perd du contenu, il vous reste une référence intacte.

## Quizlet vers CSV : créez le fichier délibérément

Renommer un fichier `.txt` en `.csv` ne le convertit pas. Un CSV demande des séparateurs cohérents et des guillemets corrects autour des virgules, des guillemets et des contenus multilignes.

Pour créer un fichier CSV à partir de Quizlet sans risque :

1. Gardez intacte la sauvegarde du texte brut.
2. Ouvrez la copie de travail dans un tableur et sélectionnez exactement le séparateur employé dans Quizlet.
3. Vérifiez que chaque enregistrement attendu comporte deux colonnes : le terme et la définition.
4. Inspectez les guillemets, les séparateurs et les définitions multilignes.
5. Exportez en CSV UTF-8.
6. Rouvrez le CSV dans un aperçu neuf avant de vous en servir ailleurs.

Un tableur sait ajouter les guillemets dont le CSV a besoin. Un remplacement global des tabulations par des virgules n'y arrive pas de façon fiable.

## Passez le texte dans Nibomo comme brouillon à relire

[Nibomo](/features/) n'a pas d'importateur Quizlet direct. Dans l'application hébergée, la voie prévue pour un TXT ou un CSV est la rédaction assistée par IA à partir d'un fichier joint, pas une migration sans perte.

1. Gardez le fichier Quizlet brut en dehors de l'application.
2. Joignez le TXT nettoyé, ou le CSV que vous avez préparé, dans le chat IA de Nibomo.
3. Dites à l'assistant quel séparateur et quels champs le fichier emploie.
4. Demandez un petit aperçu et précisez explicitement de ne pas encore enregistrer de cartes.
5. Comparez le nombre de cartes proposé, les recto et les verso avec le fichier de travail.
6. N'enregistrez que les cartes que vous avez relues.

Le [guide de démarrage](/docs/getting-started/) documente le chat IA avec les données de l'espace de travail et les fichiers joints. Un prompt prudent pourrait ressembler à ceci :

> Lisez ce fichier comme des paires terme / définition séparées par des tabulations. N'enregistrez pas encore de cartes. Préparez un petit échantillon, conservez la formulation source et les caractères non latins, et listez à part les lignes mal formées, vides ou ambiguës au lieu de deviner.

Cette méthode aide quand les anciennes cartes ont aussi besoin d'un nettoyage. Elle ne prouve pas que chaque ligne est passée correctement. Reprenez la liste de contrôle de notre guide sur la correction des flashcards générées par IA, puis testez un petit paquet avant de créer le reste.

Les cartes créées dans Nibomo démarrent avec un historique d'apprentissage neuf. Le texte Quizlet ne contient ni les événements de révision ni l'état de planification nécessaires pour reprendre l'ancienne file.

> **Transparence :** je développe Nibomo. Ce processus décrit les limites actuelles du produit ; il ne promet pas une compatibilité complète avec Quizlet.

## Quizlet vers Anki : servez-vous de l'importateur de texte d'Anki

Le [manuel officiel d'import de texte](https://docs.ankiweb.net/importing/text-files.html) d'Anki accepte les fichiers texte brut en UTF-8 dont les champs sont séparés par des virgules, des points-virgules ou des tabulations.

Pour une copie de travail séparée par des tabulations :

1. Ouvrez le flux d'import d'Anki et sélectionnez le fichier texte UTF-8.
2. Confirmez dans l'aperçu qu'Anki a détecté une tabulation ; changez l'option de séparateur si ce n'est pas le cas.
3. Choisissez le type de note et le paquet de destination.
4. Associez le premier champ au recto et le second au verso.
5. Inspectez l'aperçu à la recherche de champs vides, décalés ou en trop.
6. Vérifiez le réglage des doublons et de la mise à jour avant d'importer.

Anki déduit le nombre de champs attendu de la première ligne qui n'est pas un commentaire. Dans les enregistrements suivants, les champs manquants restent vides et les champs en trop ne sont pas importés. D'où l'importance de l'aperçu, surtout quand un seul séparateur égaré suffit à changer la forme d'une ligne.

Les définitions multilignes demandent aussi un choix explicite. Anki accepte les champs entre guillemets qui s'étendent sur plusieurs lignes. Il peut aussi lire `<br>` comme un saut de ligne quand **Allow HTML in fields** est activé. Tenez-vous-en à une seule méthode et inspectez un échantillon copié avant d'importer le fichier complet.

Par défaut, Anki peut retrouver une note existante du même type grâce à son premier champ et mettre à jour les autres champs. Les options d'import permettent aussi d'ignorer les doublons ou de les ajouter comme nouvelles notes. Mettre à jour une note Anki existante peut préserver sa planification Anki, mais aucune planification Quizlet ne passe par le fichier texte.

## Gardez l'original jusqu'à ce que le nouveau paquet fonctionne

La voie officielle de Quizlet s'arrête à **Copy text**, pour les sets dont vous êtes le créateur et sur le site web. Les scripts de scraping, les endpoints privés supposés et les téléchargeurs tiers sont des méthodes distinctes, sans prise en charge officielle. Ils ne transforment pas un set copié ou consultable en lecture seule en export officiel.

Si vous avez besoin d'une automatisation récurrente plutôt que d'une copie ponctuelle, notre article sur l'état actuel de l'API Quizlet montre où s'arrête le périmètre pris en charge. Si le set n'est pas le vôtre, demandez un fichier source à son créateur ou reconstruisez un paquet plus petit à partir de vos propres notes. Nos conseils pour créer de meilleures flashcards peuvent vous aider à améliorer cette reconstruction au lieu de recopier chaque ancienne ligne.

Ne supprimez le set Quizlet d'origine qu'une fois que :

- le fichier brut en UTF-8 est enregistré dans un emplacement sauvegardé ;
- le fichier de travail se rouvre avec les caractères et les séparateurs attendus ;
- les champs multilignes, les champs vides, les doublons et les lignes irrégulières ont été vérifiés ;
- tout contexte visuel important a été reconstruit à partir d'une source que vous pouvez employer ; et
- un petit test a produit les bons recto et verso dans la destination.

Gardez ensuite le fichier texte brut. C'est la référence indépendante la plus simple quand un import ultérieur semble faux. Si vous hésitez encore sur la destination des cartes, notre comparatif des alternatives à Quizlet couvre les compromis plus larges.
