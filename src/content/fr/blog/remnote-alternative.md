---
title: "Alternatives à RemNote en 2026 : options gratuites et open source"
description: "Comparez les alternatives à RemNote sur les notes, les PDF, les cartes, le prix et l'auto-hébergement. Voyez ce qui migre, ce qui casse et comment répéter un changement sans risque."
date: "2026-03-19"
updated: "2026-08-31"
image: "/blog/remnote-alternative.png"
keywords:
  - "alternative à remnote"
  - "alternatives à remnote"
  - "remnote open source"
  - "alternative gratuite à remnote"
  - "remnote vs anki"
  - "alternative open source à remnote"
  - "alternative à remnote auto-hébergée"
  - "application de flashcards hors ligne"
---

RemNote appelle son export Anki **Flashcards Only**. Les puces sans carte sont ignorées, et le paquet ne contient ni vos notes liées, ni vos PDF, ni votre flux de travail Reader. Une application de remplacement peut accepter chaque question et chaque réponse tout en laissant derrière elle le système qui rendait ces cartes utiles.

La meilleure **alternative à RemNote** est celle qui règle votre raison de partir sans vous retirer au passage la partie de RemNote qui fonctionne encore. Pour certains, c'est le prix. Pour d'autres, ce sont de simples fichiers locaux, un système de cartes plus poussé ou du code source qu'ils peuvent faire tourner eux-mêmes.

> **Transparence :** Je suis Kirill Markin et je développe [Nibomo](/fr/), l'un des produits comparés ici. Nibomo ne remplace pas RemNote en entier. RemNote propose le flux intégré notes-et-PDF le plus solide de cette comparaison, tandis qu'Anki possède le système de cartes et les formats de migration les plus mûrs.

**Faits et prix vérifiés :** 31 août 2026. Les prix indiqués correspondent aux tarifs publics américains et à la facturation annuelle lorsque c'est précisé ; les taxes, les régions, les boutiques d'applications et les conditions de la bêta peuvent modifier le montant.

![Une conservatrice d'archives teste le transfert d'un petit échantillon depuis un dossier d'étude lié et intact vers des systèmes séparés de cartes, de fichiers et de blocs](/blog/remnote-alternative.png)

## Commencez par la raison qui vous pousse à partir

- **Le prix :** Vérifiez si RemNote Free couvre déjà votre flux de travail réel. L'offre inclut des notes, des flashcards et des appareils synchronisés sans limite, mais restreint les documents annotés et certaines fonctions avancées.
- **Un flux de cartes trop attaché aux notes :** Essayez Anki. Les cartes, les modèles, les imports et FSRS y ont plus de place pour devenir le système principal.
- **De simples fichiers de notes locaux :** Répartissez le travail entre Obsidian pour les notes Markdown et Anki pour les révisions. C'est moins intégré, mais la frontière de propriété est bien plus nette.
- **Des notes connectées open source, avec PDF et cartes intégrées :** Logseq est l'option la plus proche, avec une réserve sérieuse en 2026 : sa nouvelle version base de données est en bêta, sa nouvelle application iOS et la synchronisation en temps réel sont en alpha, et sa nouvelle application Android n'est pas encore ouverte aux tests.
- **Le code source et l'auto-hébergement pour une pile centrée sur les cartes :** Regardez Nibomo si les cartes recto/verso vous suffisent et si vous acceptez un planning remis à zéro et un vrai travail d'exploitation sur AWS.
- **La lecture de PDF, les surlignages liés et les cartes au même endroit :** Restez sur RemNote. Aucune des autres options ne reproduit ce flux proprement.

Cette dernière réponse passe facilement inaperçue. Changer d'outil n'est pas un progrès quand l'alternative règle une préférence de licence mais casse la session de révision de demain.

## Alternatives à RemNote : la matrice de décision

| Option | Meilleure raison de la choisir | Notes et PDF | Planificateur | Hors ligne et propriété des données | Prix vérifié le 31 août 2026 | Principale limite de migration |
|---|---|---|---|---|---|---|
| **Rester sur RemNote** | Les notes connectées, la lecture des sources et les cartes vont ensemble | Base de connaissances native et Reader avec surlignages PDF, notes et cartes liés | FSRS-6 en bêta, activation manuelle et entraînement des poids ; SM-2 reste l'option par défaut | Les applications de bureau et mobile fonctionnent hors ligne après connexion ; sur le bureau, des bases de connaissances uniquement locales sont possibles | Gratuit ; Pro 8 US$/mois en annuel ; Pro avec IA 18 US$/mois en annuel | L'export natif est le meilleur format pour restaurer dans RemNote, mais il omet actuellement les images et les PDF |
| **Anki** | Les cartes, les modèles, les extensions et la fidélité de la collection passent en premier | Pas d'espace intégré de notes connectées ni de lecture de PDF | Contrôles FSRS mûrs, paramètres optimisés, rétention souhaitée et simulation de charge | Collections locales sur bureau et mobile ; cœur de bureau ouvert et serveur de synchronisation officiel auto-hébergeable | Bureau, AnkiWeb et AnkiDroid sont gratuits ; l'application officielle AnkiMobile est payante sur iOS | RemNote exporte les cartes en `.apkg`, pas tout le système de notes ; vérifiez les données de planning et les médias avec un import de test |
| **Obsidian + Anki** | Vous voulez de simples notes Markdown locales sans renoncer à un planificateur mûr | Obsidian gère les notes et les pièces jointes locales ; Anki gère les cartes ; pas de boucle intégrée unique du Reader à la révision | FSRS d'Anki | Coffre Markdown local plus collection Anki locale ; Obsidian est gratuit mais propriétaire | Obsidian gratuit ; Sync en option à partir de 4 US$/mois en annuel ; tarifs Anki comme ci-dessus | Les exports Markdown et Anki de RemNote créent deux systèmes ; les liens vivants de RemNote entre notes, sources et cartes ne deviennent pas un flux portable unique |
| **Logseq** | Vous voulez précisément un outil de prise de notes en plan, open source et centré sur les notes, avec PDF et cartes intégrées | Blocs liés, annotation de PDF et révision de cartes à quatre niveaux | Planificateur intégré à quatre niveaux ; [la documentation rattache son nouvel algorithme](https://github.com/logseq/docs/blob/master/db-version.md#cards) au projet FSRS d'origine | Application sous licence AGPL ; les données de la version base de données s'exportent en SQLite, EDN ou Markdown standard avec pertes | Application gratuite et open source | La version base de données actuelle est en bêta ; sa nouvelle application iOS et la synchronisation en temps réel sont en alpha, sa nouvelle application Android n'est pas encore ouverte aux tests, et l'ancien état SRS de Logseq n'est pas compatible avec le nouvel algorithme de cartes |
| **Nibomo** | Vous voulez des cartes simples dans une pile web/mobile/backend ouverte | Pas de base de connaissances, de rétroliens, de lecteur PDF ni d'application de bureau native | FSRS-6 avec poids fixes et moins de réglages qu'Anki ou RemNote | Web, iOS et Android offline-first ; pile complète sous licence MIT avec un chemin de production AWS | Application hébergée gratuite pendant la bêta ; l'auto-hébergement ajoute des coûts d'infrastructure et de fournisseurs | Pas d'importateur direct RemNote ou Anki ; le contenu peut être reconstruit, mais l'historique de révision et l'état FSRS ne suivent pas |

Ce tableau ne donne pas une note aux fonctionnalités. Un étudiant qui vit dans les PDF peut perdre plus en passant à l'option « la plus ouverte » qu'il ne gagne avec sa licence. Quelqu'un avec un simple paquet de vocabulaire paie peut-être pour un système de notes dont il ne se sert plus. Partez de la ligne qui décrit votre contrainte, puis testez sa limite de migration.

Gratuit et open source sont deux filtres distincts. RemNote Free et Obsidian ne coûtent rien pour l'application de base mais restent propriétaires. Le cœur de bureau d'Anki, Logseq et Nibomo publient leur code ; AnkiMobile reste une application iOS payante, et auto-héberger Nibomo crée quand même des coûts cloud.

## Restez sur RemNote quand le produit, c'est le flux connecté

RemNote réunit les étapes que la plupart des alternatives séparent. Son [Reader](https://help.remnote.com/en/articles/6690975-learning-from-pdfs-and-files-with-the-remnote-reader) garde un PDF ouvert à côté de vos notes, colle des références qui pointent vers le surlignage exact et transforme ces notes ou ces surlignages en flashcards. L'offre Free permet d'annoter trois documents ; la [page de tarifs](https://www.remnote.com/pricing) actuelle indique des documents annotés sans limite sur Pro.

Son planificateur n'est plus une raison évidente de partir. RemNote documente maintenant [FSRS-6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) comme une option bêta que vous activez à la main. Après au moins 1 000 révisions, il peut entraîner les poids à partir de votre propre historique. Anki offre encore des contrôles plus fins, mais quelqu'un qui aime les notes et les PDF de RemNote n'a pas besoin de les abandonner juste pour passer à FSRS.

Le comportement hors ligne va aussi plus loin que « ça marche dans un onglet déjà ouvert ». Les [applications de bureau et mobile](https://help.remnote.com/en/articles/6752029-offline-mode) de RemNote permettent d'éditer des notes et de réviser des cartes hors ligne, une fois installées et la session ouverte. Le bureau garde une copie locale complète des images et des PDF. Sur mobile et sur le web, les médias non mis en cache peuvent manquer, et l'application web ne peut pas démarrer sans connexion depuis un onglet fermé ou rechargé.

Si vous avez lancé cette recherche pour une **alternative gratuite à RemNote**, testez l'offre Free avant de bouger. Si le problème est l'accès au code source, le mode local n'équivaut ni à l'open source ni à l'auto-hébergement. Notre guide distinct sur la question de savoir si RemNote est open source détaille cette frontière.

## RemNote vs Anki : choisissez quel objet est central

La distinction utile dans un comparatif **RemNote vs Anki** n'est pas « avec notes contre sans notes ». Anki stocke aussi des notes, mais une note Anki est un ensemble de champs que des [modèles de cartes](https://docs.ankiweb.net/templates/intro.html) transforment en cartes de révision. RemNote part de documents et de puces connectées qui peuvent devenir des cartes. L'un est un système mûr de production de cartes ; l'autre, un espace d'étude construit autour des notes et des sources.

Choisissez Anki quand les champs personnalisés, les variantes de cartes générées, les modèles HTML/CSS, les extensions ou des années d'historique de révision sont au centre. Ses [réglages FSRS](https://docs.ankiweb.net/deck-options.html#fsrs) actuels incluent l'optimisation des paramètres, la rétention souhaitée et la simulation de charge. Ses [exports](https://docs.ankiweb.net/exporting.html) peuvent conserver une collection complète en `.colpkg`, tandis que les paquets de decks `.apkg` peuvent embarquer les informations de planning, les préréglages et les médias.

RemNote offre une porte de sortie vers Anki, mais l'étiquette compte : l'[export Anki est « Flashcards Only »](https://help.remnote.com/en/articles/7898019-exporting-notes). Les puces sans carte sont exclues. RemNote garde le contexte parent dans les cartes exportées et aplatit le comportement des questions à choix multiple, mais cet export n'est pas votre base de connaissances, votre bibliothèque de PDF ni votre flux de lecture complet. La page officielle d'export de RemNote ne promet pas non plus que toutes vos données de planning arriveront dans Anki. Testez avant de considérer ce chemin comme sans perte.

Anki est le choix le plus solide ici quand les cartes passent en premier. Il ne remplace pas proprement le Reader de RemNote. Si vous annotez encore des articles et écrivez des notes connectées, associez-le à un outil de notes plutôt que de forcer Anki à en devenir un. Le [guide plus large des alternatives à Anki](/blog/best-anki-alternatives/) couvre d'autres options centrées sur les cartes.

## Obsidian plus Anki : des fichiers locaux, avec une séparation assumée

Certaines personnes qui cherchent des alternatives à RemNote n'ont pas besoin d'une autre application tout-en-un. Elles veulent des notes qui restent des fichiers ordinaires et un système de révision qui peut mûrir de son côté. Obsidian plus Anki, c'est la version propre de cette séparation.

[Obsidian enregistre les notes](https://obsidian.md/help/Files%2Band%2Bfolders/How%2BObsidian%2Bstores%2Bdata) en texte brut au format Markdown, dans un dossier local. L'application est gratuite et sans compte ; [Obsidian Sync](https://obsidian.md/pricing), en option, démarre à 4 US$ par mois en facturation annuelle. Obsidian n'est pas open source, mais les fichiers de notes se lisent directement et se sauvegardent avec des outils de fichiers ordinaires.

Prenez l'export Markdown de RemNote pour le côté notes et son export `.apkg` pour le côté cartes. Prévoyez du nettoyage. Un plan imbriqué exporté en Markdown lisible n'a rien à voir avec les références, les portails, les modèles ou les épingles PDF vivants de RemNote. Et dès que les notes et les cartes vivent dans deux applications, les modifications ne se propagent plus automatiquement de l'une à l'autre.

Cette option marche quand la propriété de fichiers locaux compte plus qu'une boucle fluide « surligner, lier, créer une carte, réviser ». C'est un mauvais marché quand cette boucle est précisément la raison pour laquelle vous aviez choisi RemNote.

## Logseq : l'option open source centrée sur les notes est en pleine transition

Logseq mérite sa place dans une comparaison d'**alternatives open source à RemNote** parce qu'il est vraiment centré sur les notes. Le [dépôt officiel sous licence AGPL](https://github.com/logseq/logseq) décrit une application de gestion des connaissances avec des blocs liés et de l'annotation de PDF. La [documentation actuelle de la version base de données](https://github.com/logseq/docs/blob/master/db-version.md#cards) ajoute des cartes intégrées : taguez un bloc, voyez quand il est dû et révisez-le selon quatre niveaux d'évaluation.

L'état actuel compte plus que la liste de fonctionnalités. Le dépôt de Logseq indique lui-même que la version base de données est en bêta, tandis que sa nouvelle application iOS et la synchronisation en temps réel sont en alpha ; la documentation actuelle de la version base de données précise que l'application Android n'est pas encore ouverte aux tests alpha. Logseq prévient explicitement qu'une perte de données est possible et recommande un graphe de test non critique plus des sauvegardes. Ses [notes de changement de la version base de données](https://github.com/logseq/docs/blob/master/db-version-changes.md#high-level-changes) indiquent aussi que le nouvel algorithme de cartes n'importe ni les propriétés ni les données SRS des anciennes flashcards Logseq.

La portabilité demande la même précision. La [documentation actuelle sur l'export de la version base de données](https://github.com/logseq/docs/blob/master/db-version.md#export-and-import) propose SQLite avec les fichiers joints, EDN et Markdown standard. Elle précise qu'EDN est le seul export modifiable qui capture entièrement les données du graphe, sans pour autant le recommander comme unique sauvegarde. Le Markdown standard omet les propriétés et les horodatages.

Logseq est donc l'option à évaluer quand l'open source, les notes liées, les PDF et les cartes intégrées comptent tous. Ce n'est pas celle que je prendrais pour déplacer en une journée une base de connaissances critique d'étudiant en médecine en août 2026. Faites-le tourner à côté de RemNote d'abord, et laissez la transition actuelle se stabiliser sur vos appareils réels.

## Nibomo : pile ouverte de bout en bout, modèle d'étude étroit

Nibomo fait presque l'arbitrage inverse de RemNote. Ses [fonctionnalités](/features/) tournent autour des cartes recto/verso en Markdown, des decks, des tags, des médias, de la révision FSRS, des clients offline-first et de la rédaction de cartes assistée par IA. Il n'y a pas de base de connaissances de notes connectées, pas de lecteur PDF, pas d'application de bureau native ni d'importateur RemNote direct.

La frontière du code source est large : le dépôt sous licence MIT contient le web, iOS, Android, l'authentification, le backend, la synchronisation et l'infrastructure. Le [guide d'auto-hébergement en production](/docs/self-hosting/) pris en charge s'appuie sur AWS CDK. Ce n'est pas un boîtier local qui démarre en une commande. Celui qui l'exploite assume les coûts cloud, les secrets, les migrations, la supervision, les sauvegardes, les tests de restauration et les applications mobiles compilées séparément.

La migration est la plus grosse limite pour qui utilise déjà RemNote. Nibomo importe ses propres paquets `flashcards.zip`, pas du Markdown RemNote ni des `.apkg` Anki. Ces paquets portent les cartes, les tags et les médias référencés, mais pas l'historique de révision, l'état FSRS, les réglages d'espace de travail, la structure complète des decks ni les comptes. Le chat IA peut transformer du texte exporté en brouillons de cartes à relire ; cela reconstruit le contenu, cela ne prolonge pas l'ancienne collection. Notre guide de migration depuis un export TXT montre cette étape avec pertes pas à pas.

Choisissez Nibomo pour un espace de cartes neuf ou simple quand l'accès au code de toute la pile compte. Gardez RemNote pour l'étude connectée, et choisissez Anki quand la fidélité de la migration ou une structure de cartes avancée compte. Pour la comparaison plus étroite des systèmes de cartes, voyez notre comparatif entre Anki et Nibomo ainsi que le [guide des applications de flashcards open source](/blog/best-open-source-flashcard-apps-2026/).

## Ce qui ne migrera pas proprement depuis RemNote

RemNote propose plusieurs exports utiles, mais aucun fichier ne recrée le produit ailleurs à lui seul.

- **L'export RemNote complet** est le meilleur format de restauration vers RemNote. Il omet actuellement les images et les PDF.
- **L'export Anki `.apkg`** ne contient que des flashcards. Les puces sans carte disparaissent sur ce chemin, et le résultat n'est pas votre système de notes liées.
- **Markdown, HTML, OPML et texte** rendent le contenu plus facile à lire ailleurs. Ils ne font pas comprendre à une autre application chaque relation ou chaque flux propre à RemNote.
- **Les surlignages et les sources PDF** demandent leur propre vérification. Le Reader de RemNote peut télécharger un PDF avec ses surlignages, mais ne partez pas du principe que l'export complet de la base de connaissances contient ce fichier.
- **Les réglages, les thèmes et les plugins** ne sont pas inclus dans une sauvegarde manuelle de RemNote, d'après la [documentation sur les sauvegardes](https://help.remnote.com/en/articles/6301627-remnote-backups).
- **L'état de révision** est à vérifier carte par carte dans la destination. Un import qui conserve la question et la réponse peut quand même relancer le planning à zéro.

C'est pour cela qu'« accepte le Markdown » ou « importe Anki » ne suffit pas. La portabilité a plusieurs couches : notes lisibles, médias utilisables, sources liées, structure des cartes et historique d'apprentissage.

## Répétez la sortie avant de résilier

Rendez le changement réversible. Une heure tranquille maintenant coûte moins cher que de découvrir un PDF manquant en pleine semaine d'examens.

1. Créez un nouvel export manuel **RemNote (Complete)** et gardez-le tel quel.
2. Sur le bureau, copiez les sauvegardes locales `.db.zip` et le dossier `files`. Téléchargez les PDF originaux ou annotés que vous ne pouvez pas remplacer.
3. Choisissez un petit échantillon bien tordu : notes imbriquées, références, un PDF, des images, des textes à trous ou des questions à choix multiple, des tags et des cartes avec un historique de révision significatif.
4. Exportez cet échantillon dans tous les formats dont l'option candidate a besoin, en général Markdown pour les notes et `.apkg` pour Anki.
5. Importez-le dans un coffre, un graphe, un profil ou un espace de travail jetable. Comparez côte à côte avec RemNote les décomptes, la mise en forme, les liens, les médias, les recto et verso des cartes et les échéances.
6. Travaillez hors ligne sur chaque appareil que vous comptez employer. Reconnectez-vous ensuite et vérifiez que les modifications et les révisions arrivent là où vous les attendez.
7. Restaurez la sauvegarde complète dans une base de connaissances RemNote locale et temporaire. Une archive téléchargée ne devient un plan de reprise qu'une fois que vous l'avez ouverte avec succès.
8. Étudiez dans les deux systèmes pendant au moins plusieurs vraies sessions. Ne résiliez qu'après que le remplaçant a survécu au flux quotidien, à un export et à une restauration.

Gardez les exports d'origine même après le changement. Un import réussi prouve la compatibilité avec la version du jour de la destination, pas un accès permanent à chaque morceau de l'ancien système.

## La liste courte, en pratique

- **Restez sur RemNote** si les notes liées et l'étude sur PDF sont la partie précieuse. Son offre Free ou une base de connaissances uniquement locale règle peut-être déjà votre contrainte.
- **Choisissez Anki** si les cartes, les modèles, les contrôles FSRS et la fidélité de la migration passent en premier.
- **Choisissez Obsidian plus Anki** si de simples fichiers de notes locaux justifient de faire tourner deux outils.
- **Évaluez Logseq** s'il vous faut des notes connectées open source et des cartes intégrées, mais gardez le test non critique tant que sa base de données et sa pile de synchronisation actuelles restent en bêta et en alpha.
- **Choisissez Nibomo** si un système de cartes neuf et simple et l'accès au code de toute la pile comptent plus que les notes, les PDF ou la continuité du planning.

Je développe Nibomo, et je garderais quand même RemNote pour un carnet connecté chargé de PDF, ou je choisirais Anki pour une collection complexe déjà installée. Nibomo est le choix le plus étroit : cartes recto/verso, pile ouverte et planning neuf.

Une fois que vous savez quelle limite vous pouvez accepter, ne testez que cette option-là. Si Nibomo convient, le [guide de démarrage](/docs/getting-started/) montre les points d'entrée hébergé et auto-hébergé. Si ce n'est pas le cas, rester sur RemNote est une décision valable aussi.
