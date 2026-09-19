---
title: "Les meilleures applications de flashcards open source en 2026 : 6 options FOSS comparées"
description: "Comparez six applications de flashcards open source maintenues : couverture du code, données hors ligne, synchronisation, import Anki, export, auto-hébergement et restauration."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "meilleures applications de flashcards open source"
  - "application de flashcards open source"
  - "répétition espacée open source"
  - "flashcards auto-hébergées"
  - "application de flashcards hors ligne"
  - "alternative open source à Anki"
  - "flashcards FOSS"
---

Anki reste en 2026 la meilleure application de flashcards open source pour la plupart des gens. Le choix devient intéressant dès que « open source » n'est plus votre seul critère non négociable.

Vous avez peut-être besoin d'une application web sur votre propre serveur. Ou d'un deck que vous pouvez lire en Markdown brut. Ou d'un système de notes privé qui fabrique les flashcards. Chacun de ces besoins mène à un produit différent, et un dépôt GitHub public ne suffit pas à trancher.

Un client de bureau ouvert peut cohabiter avec une application iPhone fermée. Un conteneur Docker peut héberger une interface web sans synchroniser les clients natifs. Un import peut récupérer le texte tout en perdant les modèles, les médias et les années d'historique de révision qui faisaient la valeur de la collection.

Six projets ont passé cette revue. J'ai comparé leur code sous licence, leur dernière version stable, les données locales, le planificateur, la synchronisation, la migration depuis Anki, l'export et le périmètre exact de l'auto-hébergement. Cette dernière frontière compte plus que ne l'admettent la plupart des listes de fonctionnalités.

> **Transparence :** je m'appelle Kirill Markin et je développe [Nibomo](https://nibomo.com/), l'une des six applications ci-dessous. Son dépôt MIT couvre l'application web, les clients natifs, le backend, la synchronisation et l'infrastructure. Je ne l'ai pas classée en tête. Anki reste le choix par défaut le plus sûr, Mnemosyne propose un chemin de migration depuis Anki plus établi, et plusieurs options de cette liste sont bien plus simples à administrer.

**Faits vérifiés :** 5 septembre 2026. Les versions stables sont distinguées du travail qui n'existe que sur une branche par défaut.

![Un randonneur compare six sacs à dos ouverts et teste un kit de secours avant de choisir une application de flashcards open source](/blog/best-open-source-flashcard-apps-2026-v2.png)

## La réponse courte

| Votre exigence principale | Meilleur choix | Pourquoi | Le piège à tester en premier |
| --- | --- | --- | --- |
| Un système généraliste fiable ou une collection complexe déjà constituée | [Anki](https://apps.ankiweb.net/) | Cartes et modèles mûrs, FSRS, extensions, clients sur de nombreuses plateformes et exports de paquets complets | L'application iOS officielle et AnkiWeb ne font pas partie du code open source de bureau ; l'auto-hébergement vous donne la synchronisation, pas AnkiWeb |
| Une alternative de bureau ciblée avec un import Anki établi | [Mnemosyne](https://mnemosyne-proj.org/) | Étude locale, import des types de cartes et des données d'apprentissage d'Anki, et un serveur de synchronisation que vous pouvez faire tourner vous-même | La version 2.11 reste la dernière version stable ; Android permet de réviser mais pas de modifier |
| Notes et flashcards dans une même base de connaissances locale | [SiYuan](https://b3log.org/siyuan/en/) | Applications natives hors ligne, FSRS intégré et une vraie application web hébergée par Docker | Les clients Docker ne peuvent pas se synchroniser avec les applications natives, et plusieurs commandes d'import/export y sont indisponibles |
| Du code pour le web, le mobile, le backend et l'infrastructure | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Un seul monorepo MIT avec un déploiement de production documenté | La pile de production prise en charge est centrée sur AWS, et la migration depuis Anki se fait avec des pertes |
| Une application de bureau plus jeune, local-first, avec import APKG direct | [Recall](https://github.com/Madlezz/Recall) | FSRS, builds de bureau, une PWA, des bases de données locales et un relais chiffré optionnel | L'import ne garde qu'un instantané de la planification, traite les deux premiers champs de la note et ignore l'audio |
| Des decks Markdown lisibles par un humain, sans dépendance réseau | [Essentialist](https://github.com/essentialist-app/essentialist) | Des fichiers de deck en texte simple et une application bureau/Android volontairement hors ligne | Il n'y a pas de synchronisation, et la progression vit dans une base de données cachée à part |

Ce tableau n'est pas une note de fonctionnalités. Partez de la panne que vous ne pouvez pas accepter. Si vous avez dix ans de révisions Anki, la fidélité de la migration compte plus qu'une interface plus propre. Si vous gérez un déploiement pour un établissement scolaire, l'accès par navigateur et une restauration éprouvée comptent peut-être plus que les extensions.

## Ce qui compte comme application de flashcards open source

J'ai appliqué quatre filtres :

1. **L'expérience d'étude principale a du code publié et une licence open source explicite.** Un répertoire d'intégrations autour d'un cœur non publié ne compte pas.
2. **La répétition espacée fonctionne aujourd'hui.** Une ligne sur une feuille de route ou un mode quiz générique ne suffit pas.
3. **Il existe un build publié ou un déploiement officiel clairement documenté.** Des commits récents ne transforment pas à eux seuls un prototype en recommandation sûre.
4. **Les sources officielles exposent assez la frontière des données pour l'auditer.** Il me fallait des réponses concrètes sur le stockage hors ligne, la synchronisation, l'import/export ou l'hébergement, pas une promesse vague que les utilisateurs « possèdent leurs données ».

Le nombre d'étoiles n'était pas un seuil. Elles récompensent l'ancienneté et la visibilité autant que l'adéquation du produit. La maturité compte quand même. Anki, Mnemosyne et SiYuan ont des versions et des modèles de fonctionnement établis. Recall et Essentialist ont gagné des places plus étroites parce que leur comportement publié est documenté assez précisément pour permettre une recommandation ciblée.

« Maintenu » demande aussi deux vérifications. Une version taguée dit ce que les utilisateurs peuvent installer ; la branche par défaut dit où va le projet. Essentialist en est l'exemple le plus net. Sa version stable documente SM-2, alors que sa branche actuelle documente FSRS. Le tableau ci-dessous retient SM-2.

## Six applications de flashcards FOSS comparées

| Application | Version stable vérifiée | Plateformes | Données hors ligne | Planificateur | Synchronisation | Migration depuis Anki et porte de sortie | Périmètre auto-hébergé |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5 août 2026 | Windows, macOS, Linux ; clients Android et iOS séparés ; AnkiWeb | Les clients installés étudient à partir de collections locales | FSRS ou l'ancien SM-2 | AnkiWeb ou le serveur de synchronisation officiel auto-hébergé | Importe du texte, des APKG/COLPKG et des bases Mnemosyne ; exporte du texte ou des paquets avec médias et planification au choix | **Serveur de synchronisation uniquement.** Pas d'AnkiWeb auto-hébergé ni d'interface d'étude dans le navigateur |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12 novembre 2023 ; le dépôt est resté actif en 2026 | Windows, macOS, Linux, Android ; révision limitée dans le navigateur | Le bureau travaille en local ; Android révise hors ligne mais ne peut pas modifier | Notation adaptative du rappel de 0 à 5 | Synchronisation intégrée vers une instance de bureau ou sans interface | Documente officiellement un import Anki complet avec les types de cartes personnalisés et les données d'apprentissage ; son export de partage n'est pas une sauvegarde complète | **Synchronisation plus révision limitée dans le navigateur.** Le serveur web n'a aucune fonction de sécurité |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30 août 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS ; navigateur via Docker | Les clients natifs gardent l'espace de travail en local | FSRS | Synchronisation officielle E2EE payante ou intégration payante S3/WebDAV tierce | L'application générale importe du Markdown et des données et exporte plusieurs formats de documents et de données ; aucun importateur APKG documenté | **Application web complète.** Docker ne peut pas synchroniser les clients natifs et retire certaines commandes d'import/export |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1er septembre 2026 | Web, iOS, Android | IndexedDB sur le web ; SQLite sur iOS ; Room au-dessus de SQLite sur Android ; les écritures locales attendent en file avant la synchronisation | FSRS | Backend hébergé ou déployé par l'opérateur | Son propre ZIP déplace les cartes, les tags, les métadonnées de source et les médias référencés, mais pas les decks, l'état d'apprentissage, les réglages ni les comptes ; aucun importateur APKG | **Pile web/backend complète.** Le déploiement de production est centré sur AWS ; les builds natifs privés sont séparés |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31 juillet 2026 | Windows, macOS, Linux ; PWA installable | SQLite sur le bureau ; IndexedDB dans le navigateur ; ni compte ni télémétrie par défaut | FSRS | Synchronisation par dossier sur le bureau ou relais chiffré Cloudflare Worker/R2 optionnel | L'import APKG sur le bureau lit les deux premiers champs, les decks, les tags, un instantané approximatif de la planification et les images ; exports JSON et archive Recall | **Relais d'instantanés chiffrés uniquement.** Il n'héberge pas la PWA |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10 octobre 2025 ; le code est resté actif en 2026 | APK Android, DMG macOS, Flatpak Linux ; Windows depuis les sources | Aucun accès réseau ; le contenu des decks est en Markdown | Version stable : SM-2 ; branche par défaut : FSRS | Aucune | Le Markdown conserve le contenu des cartes ; une base de données cachée associée conserve la progression | **Rien à héberger.** Sauvegardez ensemble le fichier Markdown et sa base associée |

## 1. Anki est le choix par défaut le plus sûr

Anki gagne sur les aspects peu spectaculaires. Il sait représenter des types de notes complexes, générer des cartes sœurs à partir de modèles, garder les médias avec la collection et porter des années de données de planification. La version stable de bureau retenue pour cet audit est la [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Le build plus récent 26.09b2 est marqué comme bêta, il ne sert donc pas de référence ici.

La frontière open source est mixte. Le [dépôt de bureau est en AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), avec des exceptions listées pour les composants embarqués. [AnkiDroid](https://github.com/ankidroid/Anki-Android) est un projet Android open source distinct. AnkiMobile et AnkiWeb sont des surfaces officielles, mais leur code n'est pas inclus dans ces dépôts. La version détaillée se trouve dans notre article qui examine si Anki est vraiment open source.

Les clients installés gardent des collections locales, la révision ordinaire marche donc sans connexion. AnkiWeb est la surface en ligne. Si le comportement hors ligne décide de votre choix, notre article sur le fonctionnement d'Anki sans connexion sépare ce qui reste en local de ce qui attend la synchronisation.

Anki prend en charge [FSRS et son planificateur plus ancien](https://docs.ankiweb.net/deck-options.html). Ses formats d'export sont le meilleur point de départ de ce groupe pour une migration. Un [COLPKG contient toute la collection avec la planification](https://docs.ankiweb.net/exporting.html), tandis que les exports APKG peuvent inclure les informations de planification et les médias si vous cochez ces options. Anki importe aussi du texte, des paquets Anki et des bases Mnemosyne 2.0.

Ce paquet source riche ne promet pas un import parfait ailleurs. La destination doit quand même comprendre les modèles, les règles de génération de cartes, les références aux médias et les champs du planificateur qu'il contient. Elle dispose simplement de plus d'informations qu'avec un fichier CSV.

Le [serveur officiel auto-hébergé](https://docs.ankiweb.net/sync-server.html) est volontairement minimal. Il synchronise les clients Anki compatibles ; il ne fournit ni AnkiWeb, ni révision dans le navigateur, ni portail de comptes. Il écoute en HTTP non chiffré par défaut, et le guide recommande de le garder sur un réseau local ou de placer devant lui un VPN ou un proxy inverse HTTPS. Les versions du client et du serveur doivent aussi rester compatibles.

Choisissez Anki quand la fidélité de la collection, les modèles, les extensions ou la large couverture de clients passent en premier. Regardez ailleurs seulement quand une frontière précise, comme une interface web auto-hébergée ou une pile mobile entièrement publiée, compte davantage.

## 2. Mnemosyne garde l'étude locale au centre

Mnemosyne ressemble à un outil d'étude de bureau parce que c'est exactement ce qu'il est. Il ne traîne derrière lui ni base de connaissances ni plateforme cloud. Vous obtenez une base de données locale, un déroulé classique de répétition espacée, un compagnon de révision Android et un serveur de synchronisation qui peut tourner sur un poste de bureau ou une machine sans interface.

Sa dernière version stable reste la [2.11 de novembre 2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). Le dépôt a reçu des changements en 2026, mais cela n'en fait pas pour autant un installeur stable. Testez la 2.11 sur les systèmes d'exploitation que vous comptez garder ces prochaines années.

La licence demande elle aussi plus qu'un seul badge. La [carte des licences à la racine](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) attribue la LGPL v3 à openSM2sync et des conditions distinctes au reste de Mnemosyne. La [licence du programme principal](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) applique l'AGPL v3 plus une clause supplémentaire qui impose de garder le nom Mnemosyne clairement visible dans les travaux dérivés, la forme exacte étant à discuter avec les mainteneurs. Lisez ce texte avant de redistribuer un build modifié.

Le [client Android révise hors ligne mais ne peut pas modifier les cartes](https://mnemosyne-proj.org/help/android-client). D'autres appareils peuvent passer par un serveur de révision web lancé depuis l'application de bureau, mais la page officielle des fonctionnalités prévient que ce serveur n'a aucune fonction de sécurité. C'est une interface pratique sur un réseau local, pas une application web publique aboutie.

La migration est le meilleur argument de Mnemosyne face à l'idée de rester simplement sur Anki. La page officielle des fonctionnalités documente un [import Anki complet, avec les types de cartes personnalisés et les données d'apprentissage](https://mnemosyne-proj.org/features). Sa [synchronisation intégrée](https://mnemosyne-proj.org/help/syncing) fusionne les cartes et les données d'apprentissage et peut viser une machine que vous contrôlez.

La commande d'export normale est un piège pour les sauvegardes. Elle sert à partager des cartes choisies et laisse de côté vos données d'apprentissage. Pour déplacer ou restaurer le système complet, le [guide multi-ordinateurs](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) vous dit de copier tout le répertoire de données.

Mnemosyne est ici l'alternative open source ciblée la plus solide face à Anki. En échange, la cadence des versions stables est lente, l'édition mobile est limitée et la surface web exige une frontière réseau soignée.

## 3. SiYuan fonctionne quand les notes sont le vrai système

SiYuan est une application de gestion des connaissances axée sur la confidentialité, avec des flashcards intégrées au même modèle de blocs et de documents. C'est utile quand vos notes créent le matériel de révision. Cela fait beaucoup de machinerie quand vous voulez seulement une file de cartes.

Le [dépôt AGPL-3.0](https://github.com/siyuan-note/siyuan) réunit l'interface, le noyau, les applications mobiles, la couche de données et le composant FSRS. La version [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2) est la version stable vérifiée ici. Les clients de bureau et mobiles stockent l'espace de travail en local et continuent de fonctionner hors ligne.

La synchronisation ne fait pas partie de l'offre gratuite en stockage local. La [page officielle des tarifs](https://b3log.org/siyuan/en/pricing.html) propose une synchronisation officielle chiffrée de bout en bout avec l'abonnement, tandis que les fonctions Pro payantes ajoutent des intégrations vers votre propre stockage S3 ou WebDAV. Le projet met aussi en garde contre le fait de placer un espace de travail actif dans un dossier de synchronisation de fichiers générique, car les modifications simultanées peuvent corrompre ou écraser des données.

Docker fait tourner une vraie application web, mais ne se transforme pas en serveur de synchronisation pour les applications installées. La [documentation Docker de la v3.8.2](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) indique que les clients de bureau et mobiles ne peuvent pas s'y connecter. Docker retire aussi l'import Markdown et l'export PDF, HTML et Word. Ces commandes existent dans l'application native plus large, donc recopier la liste générale des fonctionnalités dans un plan de déploiement Docker induirait en erreur.

Je n'ai trouvé aucun importateur APKG officiel. SiYuan sait déplacer du Markdown et ses propres formats de données, mais une collection Anki demande une reconstruction plus réfléchie.

Choisissez SiYuan quand la base de connaissances est le produit principal et que les flashcards y ont leur place. Si vous voulez un remplaçant direct d'Anki, Mnemosyne et Anki ont des frontières de migration plus claires.

## 4. Nibomo expose plus de la pile, et vous demande de la faire tourner

Nibomo publie la frontière produit la plus large de cette comparaison. Le monorepo MIT comprend l'application web, les clients iOS et Android, le backend, le service d'authentification, la synchronisation, l'application d'administration, les migrations de base de données et l'infrastructure AWS. La version stable utilisée ici est la [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Le travail ultérieur sur la branche par défaut ne compte pas comme comportement publié.

L'[architecture](/docs/architecture/) est offline-first, mais « hors ligne » veut dire quelque chose d'un peu différent sur chaque client. L'application web garde sa source de vérité locale dans IndexedDB. iOS s'appuie sur SQLite, et Android sur Room au-dessus de SQLite. Les changements sont écrits en local et mis en file dans une outbox avant la synchronisation. Ce choix encaisse une connexion interrompue ; il ne rend pas le stockage du navigateur permanent et ne dispense pas de tester un démarrage à froid sur chaque appareil.

Le paquet ZIP de Nibomo sert à transférer du contenu, pas à sauvegarder un compte. En v1.23.0, son [schéma de paquet](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) porte le contenu recto et verso, les tags, le type de carte, les métadonnées de source et les métadonnées du paquet ; les médias référencés sont regroupés à part. Il ne porte ni la structure des decks, ni l'historique de révision, ni l'état FSRS, ni les réglages de l'espace de travail, ni les comptes.

Il n'y a pas d'importateur APKG en v1.23.0. Le flux documenté de migration depuis Anki en TXT/CSV part du texte exporté pour reconstruire les cartes et demande une relecture humaine. Les modèles, l'état de planification, la structure des decks et les médias embarqués ne survivent pas automatiquement à cette route. C'est raisonnable pour un deck de texte simple et un mauvais choix pour une collection très personnalisée.

Le [guide d'auto-hébergement](/docs/self-hosting/) est tout aussi explicite. La production s'appuie sur une pile AWS CDK avec RDS, Cognito, API Gateway et Lambda, S3 et CloudFront, des secrets, des alarmes et des sauvegardes. Le DNS Cloudflare, l'e-mail Resend et la configuration Sentry se situent hors d'AWS. Docker Compose sert au développement local ; ce n'est pas le paquet de production pris en charge. Les opérateurs qui veulent des binaires iOS ou Android privés les compilent et les distribuent séparément.

Choisissez Nibomo quand posséder toute la frontière source web/natif/backend justifie ce travail d'administration. Choisissez Anki ou Mnemosyne quand préserver une collection existante est l'exigence la plus dure.

## 5. Recall est moderne, mais lisez bien son importateur

Recall est la plus jeune des recommandations principales. Elle entre dans la liste parce que [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) fournit des builds de bureau versionnés, une PWA installable, un stockage local explicite, FSRS, des exports de données et une conception documentée pour la synchronisation auto-hébergée.

L'application de bureau sous licence MIT s'appuie sur SQLite ; la PWA sur IndexedDB. Aucune des deux n'a besoin d'un compte, et le projet indique que la télémétrie est désactivée par défaut. Les versions de bureau couvrent Windows, macOS et Linux.

L'importateur APKG est utile, mais l'expression « review history » du README est trop généreuse pour l'implémentation taguée. Le [code de l'importateur en v1.3.0](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) ne lit pas le journal de révision d'Anki. Il lit l'état actuel de la carte, l'intervalle, le nombre de répétitions et d'oublis, plus la stabilité et la difficulté FSRS quand Anki les a enregistrées. Pour les cartes plus anciennes sans ces champs FSRS, Recall les estime à partir des valeurs SM-2.

La conversion du contenu a elle aussi des angles vifs. L'importateur prend les deux premiers champs de la note comme recto et verso au lieu de reproduire les types de notes et les modèles d'Anki. Il garde les noms de decks et les tags. Il extrait les formats d'image courants et réécrit leurs références, mais ignore l'audio et les autres médias. Comme l'importateur est une commande Tauri, la migration APKG directe est une fonction de bureau, pas une fonction de la PWA dans le navigateur.

C'est bien mieux qu'une reconstruction en texte brut, mais ce n'est pas la fidélité de la collection. Testez les textes à trous, les cartes sœurs, les champs supplémentaires, le HTML/CSS, les images, l'audio, les dates d'échéance et les notes répétées avant de confier un gros déménagement à cet outil.

Recall a deux voies de synchronisation. Le bureau peut écrire un instantané dans un dossier géré par Dropbox, Drive ou un autre outil de synchronisation de fichiers. Le relais optionnel emploie un Cloudflare Worker et un bucket R2. D'après la [conception de la synchronisation](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md) telle qu'elle est taguée, les clients chiffrent les instantanés en AES-GCM avant l'envoi ; le relais voit du texte chiffré, pas les données des cartes ni la clé. Les mises à jour reposent sur une concurrence optimiste et réessaient une fois en cas de conflit, mais elles fusionnent toujours des instantanés complets plutôt que des champs. Il n'existe pas de relais public financé par le mainteneur : vous le déployez et vous saisissez son URL.

Les exports JSON et archive Recall vous donnent une porte de sortie. Restaurez-en un dans un profil vierge avant d'appeler ça une sauvegarde.

Choisissez Recall si vous voulez une expérience de bureau/PWA moderne et local-first, et si vous acceptez un projet jeune plus un importateur qui préserve un instantané utile plutôt que tout le système Anki.

## 6. Essentialist rend le deck facile à lire, pas tout son état

Essentialist a la plus petite frontière de cette liste. Chaque deck est un fichier Markdown que vous pouvez ouvrir dans un éditeur de texte, garder sous gestion de versions ou copier avec des outils de fichiers ordinaires. L'application ne fait volontairement aucune requête réseau.

La dernière version stable est la [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Ses fichiers incluent des builds Android, macOS et Linux ; les utilisateurs Windows compilent depuis les sources. Le [README de la version taguée](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) identifie SM-2 comme planificateur.

Le [README de la branche par défaut](https://github.com/essentialist-app/essentialist/blob/main/README.md) identifie maintenant FSRS, et le dépôt a reçu des changements de code en 2026. C'est une direction utile, pas une raison d'étiqueter le binaire de 2025 comme FSRS.

Le Markdown couvre aussi moins de choses qu'il n'y paraît. Le texte des cartes vit dans le fichier visible, tandis que la progression vit dans une base de données cachée nommée `.<deck file>.db`. Copier `sample.md` sans `.sample.md.db` sauve les questions et les réponses mais perd l'état d'apprentissage.

Il n'y a ni synchronisation entre appareils intégrée ni serveur. Vous pouvez placer les fichiers dans votre propre dossier synchronisé, mais la gestion des conflits et la restauration deviennent alors votre problème.

Choisissez Essentialist quand du Markdown lisible et un flux de travail sans réseau sont le but. Ce n'est pas un système multi-appareils sans couture, et un seul fichier visible ne fait pas une sauvegarde complète.

## Quatre projets actifs à surveiller

Ces projets ont du vrai travail 2026 derrière eux. Ils restent hors des six principaux parce qu'une recommandation demande plus qu'un code source intéressant.

| Projet | Ce qui est déjà concret | Ce qui empêche encore une recommandation dans la liste principale |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | Code AGPL, planificateurs FSRS/SM-2/Leitner, déploiement Docker, un service géré, import CSV et export de données | Créé en juillet 2026 ; aucune version applicative taguée. Sa release GitHub est un pack audio plutôt qu'un jalon de l'application |
| [Openlet](https://github.com/ChloeVPin/openlet) | Application web MIT avec FSRS, import CSV, occlusion d'image et une architecture Supabase/Vercel documentée | Aucune version taguée, et la documentation officielle ne définit pas encore une frontière complète pour le hors ligne, l'export et la restauration en auto-hébergement |
| [Prep](https://github.com/Zamua/prep-app) | Code MIT, FSRS, usage hébergé et un déploiement documenté sur le runtime celld, lui-même auto-hébergeable | Aucune version taguée ; auto-héberger veut aussi dire faire tourner celld et du stockage objet, pas déployer un binaire de flashcards autonome |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | Application mobile Kotlin en GPLv3, FSRS/SM-2, une version Android et un import APKG avec modèles et médias | Créé en 2026 ; iOS demande une compilation depuis les sources, et la documentation officielle ne définit pas de synchronisation générale de téléphone à téléphone |

Plusieurs noms connus échouent au filtre pour des raisons plus simples. Le [dépôt open source](https://github.com/mochi-cards/open-source) de Mochi rassemble des intégrations, pas l'application principale. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) est open source et auto-hébergeable, mais son README officiel place toujours la répétition espacée sous « Features coming soon ». [OpenCards](https://github.com/holgerbrandl/opencards) n'a plus publié depuis la [v2.5.1 de janvier 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1), et son dépôt n'a plus reçu de changement de code depuis 2018.

Si l'accès au code source est optionnel, la [comparaison plus large des alternatives à Anki](/blog/best-anki-alternatives/) inclut des produits qui répondent à une autre question.

## Testez la migration en cinq couches distinctes

« Importe Anki » ne sert presque à rien sans la phrase suivante. Une migration peut réussir dans une couche et échouer dans les quatre autres.

| Couche | Ce qu'il faut comparer | Le signal de réussite trompeur |
| --- | --- | --- |
| Contenu des cartes | Chaque champ, marqueur de trou, tag, caractère spécial et note répétée | Le nombre total de cartes est proche |
| Structure | Types de notes, modèles, cartes sœurs générées et decks imbriqués | Le texte du recto et du verso est apparu quelque part |
| Médias | Les images et l'audio ont été copiés, se résolvent en local et se lisent hors ligne | L'importateur a reconnu les noms de fichiers |
| État d'apprentissage | Journal de révision, état, date d'échéance, intervalle, oublis et paramètres du planificateur | Les cartes importées sont là, mais repartent discrètement à zéro |
| Sortie et restauration | Un export ou une sauvegarde documentée peut reconstruire le même système ailleurs | Un export texte lisible est traité comme une sauvegarde complète |

Construisez un deck de test volontairement retors avant de déplacer la vraie collection. Mettez-y des champs supplémentaires, des textes à trous, des modèles recto et verso, des decks imbriqués, des tags, des images, de l'audio et assez d'historique de révision pour voir si la destination l'a gardé.

Gardez la sauvegarde source intacte. Après l'import, comparez séparément le nombre de notes, de cartes et de médias. Inspectez les dates d'échéance au lieu de croire un message « planification importée ». Révisez hors ligne sur chaque appareil que vous comptez utiliser. Créez ensuite des modifications contradictoires et jetables sur deux appareils, et regardez ce que fait la synchronisation.

Faites tourner les deux systèmes pendant quelques jours. Supprimer l'ancienne collection est la dernière étape, pas la preuve que la nouvelle a fonctionné.

## L'auto-hébergement n'est complet qu'après une restauration

Les produits ci-dessus emploient « auto-hébergé » pour des formes très différentes :

- Anki et Mnemosyne font tourner des **services de synchronisation** pendant que les clients installés restent l'interface d'étude.
- SiYuan en Docker fait tourner une **application web** que les clients natifs ne peuvent pas prendre pour serveur de synchronisation.
- Recall fait tourner un **relais d'instantanés chiffrés**, pas la PWA elle-même.
- Nibomo déploie une **pile web et backend complète**, tandis que les applications natives restent des builds séparés.
- Essentialist n'a **aucun serveur** ; la frontière de propriété se limite aux fichiers locaux.

Une fois ce périmètre clair, testez la partie que les opérateurs ont tendance à repousser :

1. Créez des cartes, joignez des médias, terminez des révisions et synchronisez depuis deux clients.
2. Capturez chaque base de données, bucket de stockage objet, fichier local, secret et valeur de configuration documentés.
3. Restaurez dans un compte vide, une machine vierge ou un déploiement isolé.
4. Comparez le nombre de cartes, les médias, l'historique de révision, l'état d'échéance, la connexion et la synchronisation des clients.
5. Mettez à jour la copie restaurée et terminez un nouveau cycle de révision.

Si la reconstruction dépend encore de l'ancienne machine, vous avez un service qui tourne. Vous n'avez pas de sauvegarde vérifiée.

## Questions fréquentes

### Quelle est la meilleure application de flashcards open source en 2026 ?

Anki est le meilleur choix par défaut pour la plupart des apprenants. Il combine un modèle de collection mûr, FSRS, une large couverture de clients et les formats de sauvegarde et d'export maison les plus riches. La réserve : ses surfaces officielles iOS et web ne sont pas couvertes par le dépôt open source de bureau, et son serveur auto-hébergé fournit la synchronisation plutôt que l'étude dans le navigateur.

### Quelle est la meilleure alternative open source à Anki ?

Mnemosyne est l'alternative ciblée la plus établie et documente officiellement l'import des types de cartes personnalisés et des données d'apprentissage d'Anki. Recall a l'air plus moderne et importe les fichiers APKG directement sur le bureau, mais il convertit les deux premiers champs de la note, ne garde qu'un instantané de la planification, importe les images plutôt que l'audio et ne reprend pas le journal de révision complet.

### Puis-je auto-héberger Anki ?

Oui, vous pouvez faire tourner le serveur de synchronisation officiel d'Anki pour les clients compatibles. Non, ce n'est pas un remplacement auto-hébergé d'AnkiWeb : il n'y a pas d'interface d'étude dans le navigateur.

### Open source veut-il dire hors ligne ?

Non. L'open source décrit la licence et l'accès au code source. Le comportement hors ligne dépend de l'endroit où le client stocke les données et des actions qui réclament un service. L'inverse est vrai aussi : une application peut garder ses données en local sans publier le code de son cœur.

### L'auto-hébergement garantit-il la portabilité ?

Non. L'auto-hébergement décide de l'endroit où tourne un service. La portabilité dépend des exports, des sauvegardes complètes et d'une restauration que vous avez réellement testée. Une base de données sur votre serveur peut rester difficile à migrer, et un deck Markdown lisible peut quand même omettre l'état de révision stocké à côté.

## Ma recommandation

Gardez ou choisissez **Anki** sauf si l'une de ses frontières vous pose un vrai problème. Prenez **Mnemosyne** pour une étude de bureau locale et ciblée avec un import Anki établi. Passez à **SiYuan** quand les flashcards ont leur place dans une base de connaissances plus large. Envisagez **Nibomo** quand posséder tout le code web/natif/backend justifie une pile de production AWS. Choisissez **Recall** pour un client moderne local-first, après avoir testé ses limites de conversion. Choisissez **Essentialist** quand le Markdown brut et l'absence totale d'accès réseau comptent plus que la synchronisation.

La meilleure application de flashcards open source n'est pas le dépôt à la plus longue liste de fonctionnalités. C'est celle dont les frontières de code, de données hors ligne, de migration, de synchronisation, d'hébergement et de restauration correspondent au système que vous êtes réellement prêt à assumer.
