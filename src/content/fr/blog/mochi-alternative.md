---
title: "Test de Mochi Flashcards (2026) : offre gratuite, usage hors ligne et comparaison avec Anki"
description: "Un test de Mochi Flashcards vérifié à la source : offre gratuite, applications hors ligne, notes Markdown, FSRS, synchronisation, import Anki, exports et limites de l'auto-hébergement."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "mochi flashcards"
  - "mochi cartes mémoire"
  - "mochi vs anki"
  - "anki vs mochi"
  - "mochi est-il gratuit"
  - "mochi hors ligne"
  - "mochi tarifs"
  - "mochi hébergement"
  - "flashcards markdown"
  - "mochi répétition espacée"
---

Mochi part d'un document Markdown, pas du formulaire recto-verso habituel. Ajoutez une ligne de trois tirets et le document gagne des faces à réviser. Laissez-le tel quel comme note, liez-le à une autre carte, ou archivez-le pour qu'il reste consultable sans entrer dans la file de révision.

Ce petit séparateur dit assez bien à qui les **flashcards Mochi** conviennent. Mochi va bien à quelqu'un qui veut ses notes et sa répétition espacée dans la même application local-first, surtout si Markdown, les liens bidirectionnels et une révision simple Remembered/Forgot lui semblent naturels. Il convainc moins un utilisateur d'Anki installé de longue date, dont la collection repose sur des variantes de cartes générées, du HTML/CSS personnalisé, du JavaScript, des extensions ou des réglages fins du planificateur.

Pour un usage sur un seul appareil, l'offre gratuite est bien plus qu'un essai : aucune inscription n'est demandée, et Mochi documente un usage hors ligne illimité. Le hic, c'est que la synchronisation entre appareils appartient à l'**offre Pro à US$5 par mois**. Pour un utilisateur d'Anki, le coût le plus lourd est ce que la migration fait perdre. Mochi sait importer un paquet Anki et son historique de révisions, mais il ne peut pas conserver chaque modèle, chaque style, chaque script, chaque réglage du planificateur ou chaque comportement d'extension.

> **Transparence :** Je suis Kirill Markin, et je développe [Nibomo](/fr/). Ce test de flux de travail est vérifié à la source ; je n'affirme pas avoir fait un essai pratique du produit. Il n'y a aucun lien d'affiliation. Mochi et Anki restent la comparaison principale ; mon produit n'apparaît que vers la fin, clairement identifié comme une alternative.

**Faits vérifiés :** 7 septembre 2026. La dernière [version de Mochi](https://mochi.cards/changelog/) visible était la 26.8.2, datée du 10 août 2026. Les prix et les détails des boutiques d'applications peuvent changer.

![Un restaurateur de livres teste un petit accordéon de cartes liées pendant que l'archive d'origine reste bien rangée dans sa boîte](/blog/mochi-alternative-v3.png)

## Le test en bref

- **Choisissez Mochi** si vous voulez des notes Markdown et des cartes au même endroit, un usage hors ligne sans compte sur un appareil, des liens bidirectionnels et une décision de révision binaire.
- **Choisissez Anki** s'il vous faut des types de notes mûrs, des modèles HTML/CSS, des extensions, une synchronisation hébergée gratuite, quatre notes de révision ou des réglages FSRS plus poussés.
- **Ne changez pas encore** si vous révisez déjà régulièrement et que vous ne savez pas nommer le problème de flux de travail que Mochi résoudrait. Une nouvelle interface ne suffit pas à mettre en jeu des années de données de planification et de cartes personnalisées.
- **Testez avant de migrer** si Anki abrite déjà votre collection de long terme. Mochi accepte les fichiers `.apkg` et sait récupérer l'historique de révisions, mais il convertit le HTML en Markdown et supprime le CSS et le JavaScript.

## Mochi et Anki d'un coup d'œil

| Décision | Mochi | Anki |
|---|---|---|
| À qui ça convient | Les adeptes de Markdown et de notes liées qui veulent leurs notes à côté des cartes de révision | Les apprenants qui veulent un système de flashcards mûr et configurable |
| Création de cartes | Un document Markdown gagne plusieurs faces quand vous ajoutez `---` ; les champs et les modèles existent aussi | Les notes contiennent des champs ; les modèles HTML/CSS génèrent une ou plusieurs cartes |
| Déroulé de la révision | Les nouvelles cartes passent d'abord par une phase d'apprentissage ; les cartes apprises utilisent Forgot / Remembered | Les cartes utilisent Again / Hard / Good / Easy |
| Planification | L'algorithme maison de Mochi par défaut ; FSRS en option | FSRS ou l'ancien SM-2, avec des outils de réglage FSRS plus complets |
| Usage gratuit | Aucune inscription et usage hors ligne illimité | Applications de bureau gratuites et synchronisation AnkiWeb gratuite ; l'application iOS officielle est payante |
| Synchronisation entre appareils | Pro, US$5 par mois | Gratuite via AnkiWeb |
| Plateformes | Web, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, l'application officielle AnkiMobile, l'application indépendante AnkiDroid |
| Formats portables | Exports natifs `.mochi`, Markdown et CSV | Formats natifs `.colpkg` et `.apkg`, plus du texte séparé par des tabulations |
| Données et hébergement | Local-first ; l'application principale n'est pas présentée comme open source, et aucun service de synchronisation auto-hébergé pris en charge n'est documenté | Le dépôt principal est sous licence AGPL ; un serveur de synchronisation auto-hébergé officiel est documenté |

La vraie ligne de partage, c'est **la simplicité centrée sur la note face au contrôle de toute la collection**.

## Autour de quoi l'interface de Mochi est construite

L'interface de Mochi devient plus claire dès que vous suivez une carte de bout en bout.

Chaque carte appartient à un paquet. Cliquez sur **New Card** et vous obtenez une page Markdown, pas des cases fixes pour la question et la réponse. Une seule carte peut contenir des titres, des listes, du code, des images, des champs structurés et des liens. Ajoutez `---` entre les blocs pour créer deux faces de révision ou plus. Écrivez `[[double brackets]]` pour renvoyer à une autre carte ; Mochi crée le lien inverse tout seul. La [présentation officielle des cartes](https://mochi.cards/docs/cards/) documente aussi des modèles dont les marqueurs affichent des valeurs de champs structurés.

Les cartes peuvent faire deux métiers sans vivre dans des systèmes séparés :

- une carte de révision utilise des faces et entre dans la répétition espacée ;
- une note de référence peut rester dans le même paquet et être archivée, ce qui la retire des files de nouvelles cartes et de cartes dues sans effacer son contenu, ses étiquettes, ses liens ni son historique.

Les [vues de paquet](https://mochi.cards/docs/decks/custom-views/) sont des combinaisons enregistrées de filtres, de tri et de mise en page. Vous pouvez garder une grille pour la navigation ordinaire, puis créer une autre vue pour une étiquette, l'échéance, une rétention faible ou les révisions récentes. Mochi permet aussi de transformer une vue en séance de bachotage sans toucher à la planification normale ni à l'historique de révisions. C'est plus concret que de qualifier l'interface d'« épurée » : le même paquet peut servir de carnet, de base filtrée et de file d'étude.

La [révision quotidienne](https://mochi.cards/docs/getting-started/reviewing-cards/) se fait en deux temps. Dans **New cards**, vous ajoutez la carte au calendrier de révision ou vous choisissez Again pour la revoir sous peu. Une fois apprise, une carte due dévoile la face suivante et demande **Forgot** ou **Remembered**. Si vous l'oubliez, Mochi la place dans une file de re-révision avant de remettre sa progression à zéro. La décision au moment de la révision reste donc volontairement étroite.

## Mochi est-il gratuit, et qu'est-ce qui marche hors ligne ?

Oui, mais « gratuit » et « hors ligne » ne veulent pas dire la même chose selon l'endroit où vous l'utilisez. Les [tarifs actuels de Mochi](https://mochi.cards/) annoncent :

- **Free :** US$0 pour toujours, sans inscription, avec un usage hors ligne illimité.
- **Pro :** US$5 par mois, avec la synchronisation entre appareils, la publication de paquets, les champs dynamiques, l'intégration IA et le support par e-mail.

Mochi tourne sur macOS, Windows, Linux, iOS, Android et le web. Son [guide de téléchargement et d'installation](https://mochi.cards/docs/getting-started/download-and-install/) trace la frontière pratique :

| Contexte | Ce que gratuit et hors ligne veulent dire |
|---|---|
| Application de bureau ou mobile installée | Vous pouvez utiliser Mochi hors ligne sans compte. Les données restent sur l'appareil, donc une seule application installée peut suffire à un flux de travail gratuit complet. |
| Application web sans Pro | Le contenu est gardé dans le stockage hors ligne du navigateur. Mochi prévient qu'un navigateur peut effacer ces données sans avertissement. |
| La même collection sur plusieurs appareils | La synchronisation automatique entre appareils est une fonction Pro, même si chaque application installée sait travailler hors ligne. |

L'usage hors ligne et la synchronisation sont deux promesses distinctes. Vous n'avez pas besoin de Pro seulement pour créer ou réviser dans une application téléchargée. Vous en avez besoin si la même collection à jour doit vous suivre automatiquement du portable au téléphone. Pour des données importantes sur l'offre gratuite, gardez une sauvegarde native plutôt que de faire d'un appareil — et surtout du stockage du navigateur — votre unique copie.

Si le comportement hors ligne est votre critère décisif, comparez le déroulé exact sur vos appareils avec notre article sur le fonctionnement d'Anki hors ligne et avec notre panorama plus large des applications de flashcards hors ligne.

## Les flashcards en Markdown sont la vraie raison de choisir Mochi

Le vrai avantage de Mochi tient à la façon dont Markdown change la matière que vous entretenez.

Une carte Mochi reste lisible comme du texte. Le même document peut contenir une explication courte, un bloc de code, des liens vers des idées voisines et des séparateurs entre les faces de révision. Les cartes acceptent aussi des champs et des modèles quand une structure répétée compte. Quand un modèle est appliqué, Mochi affiche le Markdown du modèle avec les marqueurs de champs et ignore le Markdown propre à la carte au moment du rendu, sans l'effacer.

Anki part d'un autre modèle. Une note stocke des champs, et les [modèles de carte](https://docs.ankiweb.net/templates/intro.html) décident quels champs apparaissent et quelles cartes sont générées. Les modèles utilisent du HTML, avec du CSS pour la mise en forme. Une seule note de vocabulaire peut donc produire une carte de reconnaissance et une carte de production tout en gardant les données sous-jacentes au même endroit.

Cette structure donne à Anki un plafond plus haut pour les mises en page conditionnelles, les variantes de cartes générées, les réponses saisies, les styles personnalisés et les flux étendus par des extensions. Elle veut aussi dire qu'Anki n'est pas une application native de flashcards en Markdown. Un flux Anki basé sur Markdown demande une couche de conversion ou une extension en plus.

La question pratique est simple : voulez-vous une note qui peut devenir une carte, ou un type de note structuré qui peut générer plusieurs cartes ? Mochi soigne le premier cas. Anki soigne le second.

## La répétition espacée de Mochi inclut désormais FSRS

Les comparatifs qui affirment que Mochi n'a pas FSRS sont périmés. Mochi a ajouté un aperçu de FSRS en 2025 et continue de publier des correctifs autour du planificateur. Cela dit, [l'algorithme maison de Mochi reste celui par défaut](https://mochi.cards/docs/reviewing/fsrs/).

L'algorithme par défaut change les intervalles avec des multiplicateurs fixes après chaque révision retenue ou oubliée. Passez à FSRS dans Review Settings et les cartes déjà apprises basculent sur FSRS sans perdre leur historique. Vous pouvez fixer une rétention cible, saisir des paramètres personnalisés et revenir en arrière plus tard.

Mochi garde ses notes binaires avec l'un comme l'autre planificateur :

- **Forgot** correspond au Again de FSRS.
- **Remembered** correspond au Good de FSRS.

La documentation de Mochi indique que la notation binaire fonctionne avec FSRS, au prix d'une partie de l'information qu'apporteraient Hard et Easy. Mochi accepte des paramètres personnalisés optimisés mais n'embarque pas d'optimiseur ; produire vos propres paramètres demande un optimiseur FSRS externe et l'historique de révisions Mochi.

Les [réglages FSRS d'Anki](https://docs.ankiweb.net/deck-options.html#fsrs) vont plus loin. La rétention souhaitée et les paramètres peuvent être liés à des préréglages, l'optimiseur intégré sait ajuster les paramètres à l'historique de révisions, et le simulateur estime le nombre de révisions ou les minutes d'étude selon les réglages. Anki enregistre aussi quatre résultats : Again, Hard, Good et Easy.

Ces boutons en plus ne servent que si vous les utilisez de façon constante. Le manuel d'Anki traite Hard comme un rappel réussi. Appuyer sur Hard quand vous avez oublié la réponse envoie à FSRS la mauvaise information et peut produire des intervalles trop longs.

Choisissez la révision binaire de Mochi si un simple réussi/raté garde la séance claire. Choisissez Anki si vous voulez le signal de notation supplémentaire et que vous comptez vous servir de son optimiseur, de ses contrôles de rétention, de ses préréglages ou de son simulateur de charge. Pour le planificateur plutôt que pour les applications, nous comparons ailleurs FSRS et SM-2.

## Les tarifs de Mochi et d'Anki règlent des coûts différents

Pour étudier sur un seul ordinateur, les deux applications peuvent ne rien coûter. Le coût apparaît ailleurs dès que d'autres appareils entrent dans le flux.

Mochi facture **US$5 par mois** la synchronisation Pro et la vend avec la publication, les champs dynamiques, l'intégration IA et le support. Les applications de bureau d'Anki sont gratuites, et le [site officiel d'Anki](https://apps.ankiweb.net/) décrit la synchronisation AnkiWeb comme gratuite. AnkiMobile est l'application officielle payante pour iPhone et iPad ; AnkiDroid est un client Android gratuit, développé de façon indépendante.

Donc « lequel est le moins cher ? » dépend de vos appareils :

- un ordinateur : les deux peuvent être gratuits ;
- plusieurs ordinateurs ou appareils Android : la synchronisation hébergée gratuite d'Anki évite un abonnement ;
- iPhone ou iPad : Anki ajoute un achat unique de l'application, tandis que Mochi met la synchronisation entre appareils derrière son abonnement Pro récurrent ;
- ceux qui veulent déjà la publication, les champs dynamiques ou l'intégration IA de Mochi verront la synchronisation comme un élément du lot plutôt que comme le coût entier.

Vérifiez l'App Store de votre région avant de comparer des totaux iOS exacts. Ce test ne fige pas un prix de boutique qui peut varier d'un marché à l'autre.

## L'hébergement de Mochi n'est pas la même chose que le local-first

Trois étiquettes se confondent souvent :

- **Local-first** veut dire que la copie de travail vit sur votre appareil et que l'application continue de fonctionner sans son service cloud.
- **Open source** veut dire que le code source est disponible sous une licence qui permet de l'inspecter et de le modifier.
- **Auto-hébergé** veut dire que le produit documente une façon prise en charge de faire tourner le service concerné sur votre propre infrastructure.

Mochi documente clairement son fonctionnement local-first. Il ne présente pas son application principale comme open source : le lien « Open source » dans le pied de page de son site public mène à [une collection d'intégrations](https://github.com/mochi-cards/open-source), pas à l'application principale. Son site officiel ne documente pas non plus de remplacement auto-hébergé pris en charge pour la synchronisation Pro.

Si vous cherchez **l'hébergement de Mochi** parce que vous voulez votre propre serveur, voilà la limite : vous pouvez garder vos données locales et des sauvegardes natives, mais le chemin documenté entre appareils passe par Mochi Pro. Le local-first donne un contrôle utile sur les données ; ce n'est pas de l'auto-hébergement.

Le dépôt principal d'Anki est [sous licence AGPL version 3 ou ultérieure](https://github.com/ankitects/anki/blob/main/LICENSE), avec des exceptions listées pour certains composants. Le manuel officiel documente aussi un [serveur de synchronisation auto-hébergé](https://docs.ankiweb.net/sync-server.html) pour les utilisateurs avancés. Ce serveur remplace la synchronisation AnkiWeb pour les clients compatibles ; ce n'est pas une copie auto-hébergée du site AnkiWeb, et Anki attend de celui qui l'exploite qu'il gère la ligne de commande, le réseau, le pare-feu, le protocole et les mises à jour.

## Ce qu'un import depuis Anki garde, et ce qu'il change

La [documentation d'import](https://mochi.cards/docs/import-and-export/importing/) de Mochi accepte les fichiers `.apkg` d'Anki, historique de révisions compris. Mais « importé » et « équivalent » ne donnent pas le même résultat.

Pendant l'import, Mochi convertit le HTML en Markdown et retire le CSS et le JavaScript. C'est une conversion de format entre deux modèles de cartes différents. Le matériel recto-verso simple est le cas le plus facile. Une carte qui dépend de styles, de logique de modèle, d'interactions saisies ou de JavaScript demande un examen après l'import.

L'historique de révisions réclame aussi un choix explicite à l'export. Le [manuel d'export](https://docs.ankiweb.net/exporting.html) d'Anki indique que **Include Scheduling Information** décide si l'historique part dans le paquet. Si vous laissez l'option décochée, Mochi ne peut pas récupérer un historique que le `.apkg` n'a jamais contenu.

Même quand l'historique arrive, ne comptez pas sur des échéances futures identiques. Les deux applications peuvent utiliser des planificateurs, des notes, une rétention cible, des paramètres, des paliers d'apprentissage et des réglages de paquet différents. Les événements conservés donnent des indices au nouveau planificateur ; ils ne rendent pas les deux systèmes identiques.

## Les sauvegardes natives et le texte portable ne font pas le même travail

Avant de déplacer quoi que ce soit, gardez une sauvegarde capable de restaurer le système d'origine. Un export lisible est utile, mais il n'est pas toujours restaurable.

Le [guide de sauvegarde](https://mochi.cards/docs/getting-started/backing-up/) de Mochi documente deux options natives :

- Copier tout le répertoire utilisateur conserve le contenu, l'historique de révisions, les pièces jointes, les réglages de l'application et l'état de connexion.
- Un export `.mochi` conserve les paquets, les cartes, les modèles et les champs, les pièces jointes, les étiquettes et les métadonnées, l'historique de révisions, l'ordre des cartes et la structure des paquets.

Les [exports Markdown et CSV](https://mochi.cards/docs/import-and-export/exporting/) de Mochi sont des formats de portabilité. Markdown crée un fichier par carte et des dossiers pour les sous-paquets, mais perd l'historique de révisions, l'ordre des cartes, les modèles et les étiquettes de métadonnées, sauf si ces étiquettes sont dans le Markdown. CSV peut exporter les champs des modèles ou les faces recto-verso rendues, mais ne conserve ni l'historique de révisions, ni les modèles, ni les étiquettes de métadonnées, sauf s'ils sont intégrés au contenu.

Anki fait une distinction voisine :

- Un `.colpkg` exporte toute la collection avec la planification et peut inclure les médias. À l'import, il remplace les cartes de la collection Anki visée.
- Un `.apkg` exporte un paquet et ses sous-paquets, avec des options pour la planification, les préréglages et les médias.
- Les notes en texte brut utilisent des champs séparés par des tabulations, avec la mise en forme HTML intégrée. Elles conservent le contenu modifiable, pas tout le comportement de la collection.

Repasser de Mochi à Anki veut normalement dire CSV. Anki sait [associer des colonnes de texte à des champs de note](https://docs.ankiweb.net/importing/text-files.html), mais les liens Mochi, le fonctionnement à plusieurs faces, les modèles et l'historique de révisions ne deviennent pas des objets Anki équivalents par ce fichier. Gardez l'export `.mochi` même une fois que la copie Anki a l'air correcte.

## Faites un test réversible avec un paquet représentatif

Une fenêtre de migration prouve qu'un fichier a été accepté. Elle ne prouve pas que votre vraie collection marche encore, ni que vous pouvez ramener du contenu utilisable. Testez les deux sens pendant que votre profil Anki habituel reste intact.

1. **Sauvegardez tout Anki.** Exportez un `.colpkg` avec les médias et rangez-le hors du profil de travail.
2. **Prouvez que la sauvegarde s'ouvre.** Créez un profil Anki temporaire vide et importez-y le `.colpkg`. L'import d'un paquet de collection remplace la collection visée, d'où l'intérêt du profil temporaire.
3. **Construisez un paquet représentatif dans ce profil temporaire.** Gardez-le assez petit pour l'inspecter carte par carte, mais mettez-y ce sur quoi vous comptez : cartes de base et inversées, textes à trous, modèles personnalisés, CSS, JavaScript, images, audio, équations, étiquettes, paquets imbriqués et historique de révisions.
4. **Exportez ce paquet en `.apkg`.** Incluez la planification, les préréglages et les médias quand ils comptent. Ces options mettent les données dans le paquet Anki ; elles ne promettent pas que Mochi reproduira chaque réglage.
5. **Importez dans un nouveau paquet Mochi.** Laissez votre profil Anki quotidien et sa file de cartes dues inchangés.
6. **Inspectez avant de réviser.** Comparez le contenu, la mise en forme, les champs, les médias, les étiquettes, la structure des paquets et l'historique. Regardez de près tout ce qui dépendait du HTML, du CSS, du JavaScript ou de variantes de cartes générées.
7. **Choisissez le planificateur exprès.** Mochi démarre avec son propre algorithme. N'activez FSRS que si c'est bien celui que vous comptez utiliser après l'essai.
8. **Révisez la copie pendant une semaine normale.** Jugez le flux d'écriture Markdown, l'étape New cards, la décision Remembered/Forgot, le comportement hors ligne et, si vous avez payé, la synchronisation sur les appareils que vous portez vraiment.
9. **Testez le chemin du retour.** Exportez le paquet de test Mochi en `.mochi` pour une sauvegarde native et en CSV pour Anki. Prenez le CSV avec valeurs de champs si les champs réutilisables comptent ; prenez le CSV des faces rendues si vous voulez surtout le recto-verso visible. Importez ce CSV dans un autre profil Anki vide et associez ses colonnes à un type de note adapté.
10. **Notez chaque perte acceptée.** Vérifiez l'aller et le retour séparément. Le style exact, le fonctionnement à plusieurs faces, le comportement des extensions, les variantes générées, les notes de révision, l'historique ou les échéances futures peuvent peser plus au quotidien que dans un tableau comparatif.

Le retour en CSV est une migration de contenu, pas une restauration complète de Mochi : il n'emporte ni historique de révisions, ni modèles, ni étiquettes de métadonnées, sauf si ces étiquettes sont intégrées au contenu. Si Mochi ne règle pas le problème que vous aviez nommé, supprimez le paquet de test et restez sur le profil Anki d'origine. Si ça marche, migrez un vrai paquet à la fois et gardez les sauvegardes `.colpkg` d'Anki et `.mochi` de Mochi pendant plusieurs cycles de révision ordinaires.

## À qui s'adressent les flashcards Mochi ?

Mochi convient bien quand :

- Markdown est déjà votre façon d'écrire et de penser ;
- les notes et les cartes de révision ont leur place dans le même espace lié ;
- vous voulez une petite décision Remembered/Forgot plutôt que quatre notes ;
- l'usage hors ligne sur un appareil couvre le flux gratuit, ou la synchronisation Pro vaut US$5 par mois ;
- votre collection est neuve ou assez simple pour qu'une conversion depuis Anki présente peu de risque.

Restez sur Anki quand :

- vos types de notes génèrent plusieurs variantes de cartes importantes ;
- les modèles HTML/CSS, le JavaScript, les extensions ou les paquets partagés font partie du système ;
- la synchronisation gratuite entre appareils compte plus que l'écriture en Markdown ;
- vous voulez l'optimiseur FSRS d'Anki, ses préréglages, ses quatre notes et son simulateur de charge ;
- des années de données de révision et de comportements personnalisés tournent déjà bien.

L'alternative à Mochi la plus sensée dépend de la raison pour laquelle aucun des deux ne convient. Pour une collection neuve et plus simple, les [fonctionnalités de Nibomo](/features/) comprennent les révisions FSRS, l'étude hors ligne et la synchronisation, le transfert portable des cartes, étiquettes et médias, l'accès pour les agents et un chemin d'auto-hébergement documenté. Je la développe, et ses limites comptent : elle ne remplace ni le carnet Markdown connecté de Mochi, ni le système mûr de modèles et d'extensions d'Anki. Le [guide de premiers pas](/docs/getting-started/) montre les chemins actuels : hébergé, mobile, agent et auto-hébergé.

## Pour finir

Mochi est plus qu'une interface Anki plus jolie. Son idée de fond, c'est qu'une note Markdown, une fiche de connaissances liée et une carte de répétition espacée peuvent être le même objet. L'offre gratuite couvre le travail hors ligne sans compte ; Pro ajoute les fonctions hébergées, dont la synchronisation entre appareils.

C'est un bon marché pour un apprenant qui démarre une collection neuve centrée sur Markdown. Passer d'Anki peut aussi valoir le coup si le test du paquet représentatif prouve que le Markdown natif et les révisions binaires suppriment de vrais frottements.

Pour un possesseur de collection Anki installée, la charge de la preuve va dans l'autre sens. Sauvegardez la collection, testez les cartes qui portent le plus de comportements personnalisés, et restez sur Anki à moins que Mochi n'améliore assez votre routine hebdomadaire pour justifier les fonctions précises de mise en forme, de modèles, de planification et d'écosystème laissées derrière.
