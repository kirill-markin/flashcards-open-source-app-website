---
title: Importer des cartes mémoire dans Nibomo
description: Récupérez vos cartes de Quizlet, d’Anki ou d’une autre application. Choisissez le bon format d’export et vérifiez le résultat avant d’importer un gros volume de cartes.
---

Ouvrez [Nibomo](https://app.nibomo.com/?locale=fr), sélectionnez l’espace de travail qui doit recevoir les cartes, puis ouvrez **Bibliothèque > Importer**. Dans **Depuis une autre app**, choisissez l’application que vous utilisiez. Chaque application a sa propre option, même quand elle partage son format de fichier avec une autre.

Les options ci-dessous sont disponibles dans l’application web. Si vous ne trouvez pas le menu ou l’option voulue sur iPhone, iPad, Mac ou Android, utilisez l’application web. Si vous utilisez Nibomo en tant qu’invité sur votre appareil, connectez-vous d’abord sur cet appareil. Puis connectez-vous à l’application web avec le même compte Nibomo et choisissez l’espace de travail de destination avant l’importation.

## Choisir la source des cartes

| Source | Ce qu’il vous faut | Méthode d’importation |
| --- | --- | --- |
| Quizlet | Le texte exporté et copié | Collez-le dans l’écran d’importation de Quizlet |
| Anki | Un paquet `.apkg` ou une collection `.colpkg` | Choisir des fichiers |
| Noji | `.csv` ou `.ofc` | Choisir des fichiers |
| Knowt | `.pdf` | Choisir des fichiers |
| RemNote | `.apkg`, `.md` ou `.txt` | Choisir des fichiers |
| Brainscape | `.csv` | Choisir des fichiers |
| StudySmarter | `.csv` | Choisir des fichiers |
| Cram | `.csv` | Choisir des fichiers |
| Mochi | `.mochi` | Choisir des fichiers |
| SuperMemo | `.xml` | Choisir des fichiers |
| AlgoApp (anciennement AnkiApp) | `.zip` ou `.xml` | Choisir des fichiers |
| Autre application | `.csv`, `.txt`, `.xlsx`, `.pdf`, `.json`, `.xml`, `.md`, `.docx` ou `.zip` | Choisissez les fichiers dans **Importer depuis une autre app** |
| Feuille de calcul | Des lignes copiées contenant le recto et le verso de chaque carte | Collez-les dans **Importer depuis une feuille de calcul** |
| Nibomo | Un `flashcards.zip` exporté depuis Nibomo | Consultez l’aperçu dans **Importer depuis Nibomo** |

Si le menu affiche l’ancien nom d’AlgoApp, cherchez **AnkiApp**. Anki a une option distincte.

Si vous avez un ancien fichier Excel au format `.xls`, enregistrez-le en `.xlsx` ou en `.csv` avant l’importation. Vous pouvez aussi copier les colonnes du recto et du verso et [les coller dans l’outil d’importation depuis une feuille de calcul](#coller-depuis-une-feuille-de-calcul).

## Importer depuis une autre application de cartes mémoire

1. Dans l’application d’origine, exportez les cartes que vous voulez transférer. Dans Quizlet, ouvrez votre liste, choisissez **Exporter** et copiez le texte. Utilisez une tabulation entre le terme et sa définition et un retour à la ligne entre les cartes. L’exportation est disponible uniquement sur le site web de Quizlet et seulement pour les listes originales que vous avez créées vous-même.
2. Dans Nibomo, ouvrez **Bibliothèque > Importer** et choisissez l’option qui correspond à votre application. Pour Quizlet, collez le texte copié. Pour les autres sources, sélectionnez les fichiers exportés. Si votre application ne figure pas dans le menu mais fournit un fichier pris en charge, par exemple un PDF, choisissez **Importer depuis une autre app**.
3. Sélectionnez **Lancer l’importation**. Nibomo ouvre un nouveau chat IA et envoie la demande d’importation avec les fichiers ou le texte collé. Une connexion Internet est nécessaire. Chaque fichier importé via le chat IA peut peser jusqu’à **30 Mio**. Si votre fichier est plus volumineux, essayez d’exporter séparément des paquets ou des listes plus petits.
4. Vérifiez le résultat dans la **Bibliothèque**. Le chat IA peut enregistrer les cartes par lots au fur et à mesure. Si l’importation s’interrompt, vérifiez quelles cartes sont déjà dans Nibomo et demandez au chat de traiter les cartes restantes avant de relancer l’importation de tout le fichier.

### Commencer par un petit lot

Conservez l’export d’origine et commencez par un petit paquet ou une petite liste. Comparez le nombre de cartes et vérifiez le recto et le verso de quelques cartes, les étiquettes, les images et la mise en forme dont vous avez besoin. Pour voir un échantillon avant l’enregistrement, joignez le fichier d’export à un nouveau chat IA et demandez un aperçu de quelques cartes sans les enregistrer. Vous pouvez ainsi formuler votre propre demande au lieu de sélectionner **Lancer l’importation**.

Les cartes importées par le chat IA arrivent comme de nouvelles cartes dans Nibomo. L’historique et les dates de révision restent dans l’application d’origine. La part de l’organisation, de la mise en forme et des médias qui est conservée dépend du contenu de l’export et de ce que le chat IA peut en lire. Vérifiez le résultat avant d’utiliser les cartes importées ou de supprimer quoi que ce soit dans l’application d’origine.

## Coller depuis une feuille de calcul

Pour importer de simples paires recto verso, ouvrez **Bibliothèque > Importer > Importer depuis une feuille de calcul**. Copiez deux colonnes de votre feuille de calcul sans la ligne d’en-tête, puis collez-les dans l’écran d’importation. Pour des cellules copiées depuis un tableur, choisissez **Tabulation** entre le recto et le verso et **Nouvelle ligne** entre les cartes. Changez les séparateurs si votre texte en utilise d’autres.

Vérifiez l’aperçu des cartes, corrigez les lignes incomplètes et choisissez les étiquettes à appliquer. Sélectionnez ensuite **Importer** pour enregistrer les cartes. Cette méthode fonctionne sans chat IA.

## Importer un ZIP de Nibomo

Pour un fichier `flashcards.zip` précédemment exporté depuis Nibomo, ouvrez **Bibliothèque > Importer > Importer depuis Nibomo**. Sélectionnez le ZIP sans le décompresser. Dans l’aperçu, vérifiez le nombre de cartes et de fichiers multimédias ainsi que les éventuels avertissements, puis confirmez l’importation et examinez les cartes et les médias dans la **Bibliothèque**. Cette méthode permet de transférer les cartes, les étiquettes et les médias inclus dans le fichier. Elle fonctionne sans chat IA.
