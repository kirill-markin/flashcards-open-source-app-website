---
title: "Alternatives à Anki en 2026 : ce que vous gardez, perdez et gagnez en changeant"
description: "Comparez sept alternatives à Anki sur la fidélité de migration, l'usage hors ligne, la planification, le prix, l'accès au code et l'auto-hébergement — et voyez quand garder Anki est plus sûr."
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "alternatives à Anki"
  - "alternative à Anki"
  - "applications comme Anki"
  - "alternative à Anki open source"
  - "alternatives gratuites à Anki"
  - "alternative à Anki pour iOS"
  - "migrer depuis Anki"
---

Un import Anki peut se terminer sans la moindre erreur et effacer quand même ce qui fait marcher votre paquet. Le texte arrive. Les cartes s'ouvrent. Puis vous remarquez que le CSS a disparu, qu'un champ audio est vide, que toutes les cartes sont redevenues neuves, ou qu'une note ne produit plus les variantes de carte attendues.

C'est la partie coûteuse de la comparaison des alternatives à Anki. Un éditeur plus propre ou un forfait moins cher se voient avant de changer. Le comportement des modèles, l'historique des révisions, les dates d'échéance, les modules complémentaires, les médias hors ligne et le chemin de retour se découvrent plutôt une fois les dégâts faits.

Cette comparaison commence à cette frontière. Elle couvre sept applications comme Anki, ce que chacune peut reprendre d'une collection existante, ce qui change après l'import, et quand garder Anki reste le résultat le plus sûr.

> **Transparence :** Je suis Kirill Markin et je développe [Nibomo](https://nibomo.com/), l'un des produits ci-dessous. Je l'ai inclus pour son code ouvert, son auto-hébergement et ses flux de travail avec agents. Ce n'est pas le gagnant par défaut : il n'a pas d'importateur `.apkg` direct, sa migration depuis Anki perd de l'information, et faire tourner la pile auto-hébergée est un vrai travail d'infrastructure.

**Données vérifiées :** 28 août 2026. Les prix sont les tarifs publics américains ou les prix locaux affichés disponibles à cette date. Les taxes, les régions, les offres éducatives et la facturation via les boutiques d'applications peuvent changer le montant.

![Un horloger vérifie si le mouvement rodé d'une montre de poche entrera dans un autre boîtier](/blog/best-anki-alternatives.png)

## La réponse courte avant de déplacer quoi que ce soit

Gardez Anki par défaut. Changez seulement quand une autre application supprime un problème récurrent qui vaut la migration.

Trois produits acceptent les archives Anki avec les données d'apprentissage, mais chaque promesse s'arrête à un endroit différent :

- **Mnemosyne** documente un import Anki complet avec les types de cartes personnalisés et les données d'apprentissage. C'est ce qui colle le mieux ici à un flux de bureau local, traditionnel et open source, même s'il n'a pas d'application iOS native.
- **Mochi** importe les fichiers `.apkg` avec l'historique des révisions. Il convertit le HTML en Markdown, retire le CSS et le JavaScript, et remplace les quatre boutons de révision d'Anki par Remembered ou Forgot.
- **RemNote** importe les fichiers `.apkg`, la plupart des types de notes et l'historique des révisions. Son guide actuel précise aussi que les cartes importées vont dans une file **Need to Learn** séparée : ne lisez donc pas « historique des révisions importé » comme « file Anki du jour copiée à l'identique ».

Les quatre autres demandent de reconstruire le contenu, pas de migrer une collection :

- **Quizlet** est utile pour les sets publics, les classes, les jeux et la pratique guidée.
- **Brainscape** donne à un groupe une boucle de confiance plus simple, de 1 à 5.
- **SuperMemo**, c'est passer à sa méthode propriétaire et à son catalogue de cours.
- **Nibomo** vous donne des clients web et natifs sous licence MIT, un backend auto-hébergeable, une API et un accès MCP. Son flux relu à partir d'un TXT ou d'un CSV ne conserve pas l'état d'apprentissage d'Anki.

Si vos cartes dépendent du rendu exact, des modules complémentaires ou de la file de révision actuelle, rester sur Anki n'est pas de l'indécision. C'est la réponse.

## D'abord, comptez ce qu'il y a vraiment dans votre collection Anki

Un « paquet » n'est pas un objet portable unique. Avant de comparer les produits, séparez les éléments que vous pourriez déplacer.

| Partie de la collection | Ce qu'Anki peut placer dans une archive | Ce qu'une destination doit prendre en charge explicitement |
| --- | --- | --- |
| **Contenu des notes** | Champs de texte et HTML stocké | Correspondance des champs, textes à trous, texte non latin, code et sauts de ligne |
| **Génération des cartes** | Types de notes et modèles de cartes | Cartes avant/arrière, champs personnalisés, comportement du CSS et du JavaScript |
| **Médias** | Images, audio et autres fichiers locaux quand **Include media** est activé | Extraction des fichiers, références, formats pris en charge et synchronisation entre appareils |
| **Organisation** | Paquets, sous-paquets, étiquettes et préréglages de paquet optionnels | Hiérarchie, sens des étiquettes, préréglages et périmètres d'étude |
| **État d'apprentissage** | Informations de planification et historique des révisions quand ils sont inclus | Dates d'échéance, intervalles, oublis et conversion vers le planificateur de destination |
| **Code du flux de travail** | Les modules complémentaires ne font pas partie de l'archive du paquet | Un remplacement pour les outils du navigateur de cartes, les modifications en lot, la génération de notes et les autres comportements des modules |

Le [manuel d'export d'Anki](https://docs.ankiweb.net/exporting.html) documente toutes ces options d'archive. Un importateur de texte ne voit que la première ligne, et peut-être les étiquettes. Un importateur `.apkg` direct voit plus de choses, mais chaque produit décide de ce qu'il convertit et de ce qu'il jette.

C'est pourquoi « importe Anki » reste trop vague pour guider un changement. Posez trois questions distinctes :

1. **La carte veut-elle toujours dire la même chose ?** Vérifiez les champs, les variantes de carte générées, les textes à trous, les médias et le rendu.
2. **La destination sait-elle ce que j'ai appris ?** Vérifiez les événements de révision, l'état actuel, les dates d'échéance et la première vraie file.
3. **Puis-je repartir ?** Exportez depuis la destination et regardez ce que le format de sortie contient réellement.

Un importateur peut réussir la première question et échouer aux deux autres.

## Ce qui survit à la migration

| Produit | Voie d'import depuis Anki | État d'apprentissage | Principale perte à tester |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [Import `.apkg` direct](https://help.remnote.com/en/articles/6751471-importing-from-anki) pour la plupart des types de notes, les médias et l'historique des révisions | L'historique arrive, mais les cartes importées entrent dans la file **Need to Learn** séparée de RemNote | CSS lourd, JavaScript personnalisé, certaines synthèses vocales générées et champs d'occlusion d'image renommés |
| [Mochi](https://mochi.cards/) | [Import `.apkg` direct](https://mochi.cards/docs/import-and-export/importing/) avec l'historique des révisions | L'historique arrive ; la documentation ne promet ni file Anki ni dates d'échéance identiques | Le HTML devient du Markdown ; le CSS et le JavaScript sont retirés ; les notations suivantes sont binaires |
| [Mnemosyne](https://mnemosyne-proj.org/) | Le projet documente un [import Anki complet](https://mnemosyne-proj.org/features) avec les types de cartes personnalisés et les données d'apprentissage | Les données d'apprentissage arrivent dans un planificateur différent | Le comportement exact des modèles, l'état d'échéance converti et le rendu des cartes restent à tester |
| [Quizlet](https://quizlet.com/) | [Coller des termes et des définitions](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Aucun depuis Anki | Types de notes, modèles, paquets, structure des médias et toutes les données de planification |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX ou ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Aucun depuis Anki | Modèles, modules complémentaires, règles sur les médias et toutes les données de planification |
| [SuperMemo](https://www.supermemo.com/) | [Coller des lignes question-réponse délimitées](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), jusqu'à 100 d'un coup | Aucun depuis Anki | Structure de la collection, médias, modèles et toutes les données de planification |
| [Nibomo](https://nibomo.com/) | Rédaction assistée par IA et relue, à partir d'un TXT ou d'un CSV Anki | Aucun depuis Anki | Pas de prise en charge de `.apkg` ; les modèles, la fidélité des médias, la hiérarchie des paquets et toutes les données de planification restent derrière |

## Prix, usage hors ligne, planification et propriété

| Produit | Prix vérifié le 28 août 2026 | Limite hors ligne | Planificateur | Code source et auto-hébergement |
| --- | --- | --- | --- | --- |
| **RemNote** | [Gratuit ; Pro à 8 $/mois, facturé 96 $/an](https://www.remnote.com/pricing) | Les applications installées permettent de modifier et de réviser hors ligne une fois connecté. Le bureau garde tous les médias de la base de connaissances ; le mobile ne met en cache que quelques images récentes. Le web a besoin d'un onglet déjà ouvert. | [Anki SM-2 ou FSRS v6 en bêta](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Cœur propriétaire ; aucune voie d'auto-hébergement prise en charge n'est documentée |
| **Mochi** | [Gratuit hors ligne ; synchronisation Pro à 5 $/mois](https://mochi.cards/#pricing-section) | Les applications installées fonctionnent entièrement hors ligne, sans compte. Le stockage du navigateur peut être vidé. | [Le planificateur de Mochi ou FSRS](https://mochi.cards/docs/reviewing/fsrs/), les deux avec Remembered / Forgot | Cœur propriétaire ; les dépôts publics contiennent des intégrations, pas une application auto-hébergeable |
| **Mnemosyne** | Gratuit | [Usage local sur le bureau et révision hors ligne sur Android](https://mnemosyne-proj.org/download-mnemosyne.php) ; Android ne permet pas de modifier. Pas d'application iOS native. | Planification adaptative à partir de notes de rappel de 0 à 5 | Licences de code spécifiques à chaque composant ; serveur de synchronisation à faire tourner soi-même, sur un poste de bureau ou une machine sans interface |
| **Quizlet** | Usage de base gratuit ; [Plus à 35,99 $/an, Plus Unlimited à 44,99 $/an](https://quizlet.com/upgrade?source=signup) | Les sets téléchargés fonctionnent hors ligne dans les applications iOS et Android, avec Flashcards et Match. | [Répétition espacée sur le web](https://quizlet.com/features/spaced-repetition) pour les sets de 100 termes et plus ; le mobile est toujours annoncé comme à venir. Learn reste une pratique adaptative distincte. | Service hébergé propriétaire ; aucune voie d'auto-hébergement prise en charge |
| **Brainscape** | [Gratuit ; Pro à 7,99 $/mois en facturation annuelle](https://www.brainscape.com/pricing) | [Le mobile peut garder le travail fait hors ligne et synchroniser plus tard les classes déjà téléchargées](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other) ; la documentation ne promet pas une bibliothèque locale complète. | [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/), noté de 1 à 5 | Service hébergé propriétaire ; aucune voie d'auto-hébergement prise en charge |
| **SuperMemo** | Compte gratuit avec limites ; [35,99 PLN/mois ou 359 PLN/an](https://www.supermemo.com/en/premium-subscription) | Les cours téléchargés sur mobile fonctionnent hors ligne ; l'édition, l'IA, la recherche, les enregistrements et les statistiques, non. | [Méthode SuperMemo propriétaire](https://www.supermemo.com/en/supermemo-method) | Service hébergé propriétaire ; aucune voie d'auto-hébergement prise en charge |
| **Nibomo** | [Cœur hébergé gratuit pendant la bêta ; logiciel gratuit à auto-héberger](/pricing/), plus vos coûts d'infrastructure | Les applications natives écrivent en local après une connexion en ligne et l'hydratation initiale de l'espace de travail ; les médias distants doivent déjà être en cache. | [FSRS](/docs/architecture/#scheduling) | MIT ; le déploiement de production pris en charge est une pile complète centrée sur AWS |

Ces tableaux ne sont pas des classements. Un importateur direct peut compter plus que toutes les autres fonctions si vous avez 30 000 cartes matures. Une application iPhone native peut décider du résultat si c'est là que vous révisez. L'accès au code ne compte que si vous, ou quelqu'un en qui vous avez confiance, allez maintenir ce code.

Chaque produit ici a une porte d'entrée gratuite, mais les alternatives gratuites à Anki ne sont pas gratuites à migrer. Le prix d'un abonnement se calcule vite. Reconstruire des modèles, vérifier les médias et repartir de zéro sur un historique de révisions coûte souvent bien plus.

## RemNote : mettre les cartes dans des notes reliées

RemNote change l'endroit d'où viennent les cartes. Au lieu de tenir un paquet à côté des notes de cours, vous créez des cartes dans un plan, un document ou un flux de travail sur PDF. C'est une vraie raison de quitter Anki si copier du matériel entre une application de notes et une application de cartes est devenu la partie coûteuse.

Sa voie de migration est large, mais la file demande des mots précis. Le [guide d'import Anki actuel de RemNote](https://help.remnote.com/en/articles/6751471-importing-from-anki) vous dit d'exporter un `.apkg` avec les informations de planification, les préréglages de paquet et les médias. Il importe l'historique des révisions et la plupart des types de notes, y compris les cartes basiques, les textes à trous et les cartes d'occlusion d'image courantes.

Le même guide dit que les cartes fraîchement importées sont dirigées vers une file **Need to Learn** séparée. Autrement dit, l'historique est disponible pour RemNote, mais la documentation ne promet pas que votre file d'échéances Anki actuelle réapparaisse telle quelle. Le CSS lourd est aussi abandonné, le JavaScript personnalisé n'est pas pris en charge, une partie de la synthèse vocale à la volée ne marche pas, et l'import d'occlusion d'image dépend des noms de notes et de champs attendus.

Passez un paquet représentatif et inspectez à la fois les cartes et la première file. Un import qui a l'air propre ne couvre que la moitié du test.

Les applications installées, bureau et mobile, fonctionnent hors ligne après installation et connexion. Le [guide hors ligne](https://help.remnote.com/en/articles/6752029-offline-mode) trace une frontière importante sur les médias : le bureau stocke toutes les images et tous les PDF de la base de connaissances, tandis que le mobile ne met en cache que quelques images récentes. L'application web peut continuer dans un onglet déjà ouvert, mais elle ne peut pas démarrer à froid hors ligne.

Prenez RemNote quand des notes reliées valent le changement de modèle de collection. Gardez Anki si les modèles de cartes et les modules complémentaires sont le système, pas la décoration autour.

## Mochi : du Markdown local avec un export natif complet

Mochi est une cible de migration plus modeste, pour qui veut des données locales, des cartes en Markdown et moins de commandes à l'écran. Ses applications installées tournent sur toutes les grandes plateformes de bureau et mobiles, et elles servent [entièrement hors ligne, sans compte](https://mochi.cards/docs/getting-started/download-and-install/). La synchronisation est la partie payante, à 5 $ par mois.

L'importateur Anki direct emporte l'historique des révisions, ce qui place Mochi bien devant les options limitées au texte. La conversion est aussi inhabituellement explicite : Mochi retire le CSS et le JavaScript et convertit le HTML en Markdown. Ça marche quand le sens vit dans le texte et dans des pièces jointes ordinaires. C'est un avertissement quand le modèle porte le sens.

Mochi propose maintenant deux planificateurs. Son propre algorithme reste celui par défaut, tandis que [FSRS peut être activé](https://mochi.cards/docs/reviewing/fsrs/) sans réinitialiser la progression Mochi existante. FSRS déduit l'état des cartes de l'historique de révisions dont Mochi dispose. La notation reste binaire — Remembered ou Forgot — même sous FSRS, donc les utilisateurs d'Anki qui s'appuient sur Hard et Easy comme signaux distincts doivent s'attendre à un rythme quotidien différent.

Récupérer ses données est plus clair que dans la plupart des applications propriétaires. Un [export natif `.mochi`](https://mochi.cards/docs/import-and-export/exporting/) contient les cartes, les modèles, les pièces jointes, les étiquettes, la structure des paquets et l'historique des révisions. Markdown et CSV s'inspectent plus facilement ailleurs, mais ils laissent de côté l'historique des révisions et d'autres métadonnées.

Les dépôts GitHub publics de Mochi contiennent des [intégrations et des outils liés](https://github.com/mochi-cards/open-source), pas l'application principale ni un serveur de synchronisation pris en charge. Choisissez Mochi pour l'usage hors ligne et la portabilité, pas pour le contrôle du code.

## Mnemosyne : la voie open source sur le bureau

Mnemosyne est ce qui se rapproche le plus de la forme classique « un programme et une base locale ». La version actuelle gère Windows, macOS et Linux, avec un client Android pour réviser hors ligne. Sa page de fonctionnalités documente des cartes riches, des étiquettes hiérarchiques, des greffons, une échelle de révision de 0 à 5 et un import Anki complet avec types de cartes personnalisés et données d'apprentissage.

C'est la migration open source la plus directe de cette liste quand vous voulez quitter Anki sans entrer dans un gros système de notes ou un service cloud. Il a aussi un [serveur de synchronisation intégré](https://mnemosyne-proj.org/help/syncing) qui peut tourner sur un poste de bureau ou une machine sans interface et fusionner les données d'apprentissage de plusieurs clients.

Les aspérités font partie de la décision. Le client Android [ne permet pas de modifier les cartes](https://mnemosyne-proj.org/help/android-client). Les utilisateurs iOS doivent réviser via le serveur web qui tourne sur une autre machine, et la page officielle de ce serveur prévient qu'il n'a aucune fonction de sécurité. Gérer sa propre synchronisation veut aussi dire garder le serveur joignable, configurer le réseau et sauvegarder le répertoire de données.

Les licences sont plus précises qu'une simple étiquette « GPL » : le [fichier de licence du projet](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) renvoie à des conditions différentes selon le composant. La [licence du cœur](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) utilise l'AGPL v3 avec une clause supplémentaire sur le nom et l'attribution, tandis qu'[openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) utilise la LGPL v3. Lisez ces fichiers si modifier ou redistribuer fait partie de votre plan.

## Quizlet : changez pour la classe, pas pour la fidélité de la collection

Quizlet remplit un autre rôle. Les sets d'étude publics, les classes pour enseignants, le partage, Match, Test, Learn et les activités de groupe se confient plus facilement à une classe qu'un profil Anki personnalisé.

La frontière de migration, c'est le texte brut. Quizlet peut transformer des lignes collées en termes et définitions, mais il ne lit pas un `.apkg` et ne reconstruit ni types de notes, ni modèles, ni planification, ni historique des révisions. Les créateurs peuvent [exporter leurs propres sets sous forme de texte copié](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), sans les images ; les sets copiés d'autres utilisateurs ne peuvent pas être exportés. C'est de la portabilité de contenu, pas de collection.

La planification chez Quizlet est en train de changer. Son nouveau flux [Spaced Repetition](https://quizlet.com/features/spaced-repetition) s'active automatiquement sur le web pour les sets d'au moins 100 termes et utilise les notations Repeat, Hard, Okay et Easy. Quizlet annonce toujours la prise en charge mobile comme à venir. Learn reste une voie de pratique adaptative distincte, avec des limites d'usage payantes.

Hors ligne veut dire les applications mobiles, pas le site web. Quizlet enregistre automatiquement huit sets récents et vous laisse en télécharger d'autres ; [Flashcards et Match fonctionnent hors ligne](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps), puis la progression se synchronise après reconnexion.

Venez ici quand la distribution et l'activité en classe sont le but. Reconstruire une planification personnelle mature juste pour gagner ces fonctions est en général un mauvais échange.

## Brainscape : moins de décisions sur le planificateur, moins de profondeur à la migration

Brainscape demande une note de confiance de 1 à 5 et se sert de ce signal pour ramener plus tôt les cartes faibles. La formule complète n'est pas publiée, mais l'interaction s'explique facilement dans une classe partagée.

Il accepte les fichiers CSV, TXT, XLSX et ODS. C'est pratique pour des cartes recto-verso, mais ça veut dire que les modèles, les modules complémentaires, les règles sur les médias et les données d'apprentissage Anki restent derrière. Exporter une sauvegarde personnelle est une fonction Pro et produit des fichiers qui s'ouvrent dans un tableur et se réimportent plus tard.

Le centre d'aide actuel de Brainscape dit que son site web et ses applications mobiles partagent désormais les mêmes fonctions principales pour trouver, créer, partager et étudier. Il décrit aussi l'usage mobile hors ligne, la resynchronisation manuelle et la mise à jour des classes déjà téléchargées sur l'appareil. Ça donne un chemin de reconnexion praticable, mais pas la promesse que tout le compte existe comme bibliothèque locale complète.

L'export de paquets personnels reste une [fonction Pro](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). Il n'y a ni publication officielle du code ni voie d'auto-hébergement.

Brainscape mérite un coup d'œil quand Anki paraît trop compliqué à configurer pour les gens qui doivent juste étudier. Ce n'est pas une bonne porte de sortie pour quelqu'un qui se sert déjà bien de cette configuration.

## SuperMemo : choisissez la méthode, acceptez de repartir de zéro

Le service SuperMemo.com actuel est une plateforme d'apprentissage des langues sur le web, iOS et Android, bâtie autour de la méthode de planification propriétaire de SuperMemo. Il est distinct de l'ancien logiciel Windows que les utilisateurs de longue date connaissent peut-être.

C'est une décision de méthode et de catalogue, pas une migration Anki propre. SuperMemo permet la [création en masse en collant des lignes question-réponse délimitées](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), avec une limite de 100 cartes par import. Je n'ai trouvé ni importateur `.apkg` officiel actuel, ni voie d'export utilisateur pour le service hébergé. Les modèles, les modules complémentaires, la structure des médias et l'historique des révisions ne passent donc pas par cette voie documentée.

Les cours téléchargés s'étudient hors ligne dans les applications mobiles. Le [guide hors ligne](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) exclut les fonctions d'IA, l'ajout de MemoCards, la recherche, les enregistrements, les statistiques et l'éditeur de cours : préparez le matériel et synchronisez avant de couper la connexion.

Choisissez SuperMemo parce que vous voulez sa méthode ou son catalogue de cours assez fort pour recommencer une planification. Si préserver votre planification existante est la priorité, il résout le mauvais problème.

## Nibomo : accès au code sur toute la pile, avec l'import Anki le plus faible

Nibomo expose une large frontière de propriété. Le [dépôt sous licence MIT](https://github.com/kirill-markin/flashcards-open-source-app) contient l'application web, les clients iOS et Android, le backend, la synchronisation hors ligne, l'infrastructure, l'[API publique](/docs/api/) et le [serveur MCP](/docs/mcp-connector/). Les révisions utilisent [FSRS](/docs/architecture/#scheduling). Web, iOS et Android écrivent d'abord en local, ajoutent les changements à une outbox et synchronisent après reconnexion.

Ça n'en fait pas un produit compatible Anki. Nibomo ne sait lire ni `.apkg` ni `.colpkg`. La migration Anki par TXT prise en charge est un flux de rédaction assistée par IA et relue, pour des cartes surtout textuelles. Elle ne conserve ni les modèles, ni les modules complémentaires, ni la hiérarchie des paquets, ni les dates d'échéance, ni les intervalles, ni les événements de révision. Les références de médias dans un fichier TXT ne sont pas des fichiers médias, donc les paquets riches en médias demandent une reconstruction et une vérification séparées.

L'archive `flashcards.zip` de Nibomo est elle aussi plus étroite qu'une sauvegarde. Elle déplace les cartes, les étiquettes et les médias liés entre espaces de travail Nibomo. Elle ne déplace pas l'historique des révisions, l'état FSRS, les structures de paquets complètes, les réglages d'espace de travail ni les comptes.

Le cœur hébergé est [gratuit pendant la bêta](/pricing/). Auto-héberger la pile de production n'est pas une installation Docker en une commande : le [guide d'auto-hébergement](/docs/self-hosting/) utilise AWS CDK et demande des services AWS, plus Cloudflare, Resend, Sentry, des secrets, des migrations, des sauvegardes, des restaurations et des mises à niveau. Docker Compose est la voie de développement, pas le déploiement de production pris en charge.

Prenez Nibomo quand le code complet et un backend contrôlé par l'opérateur sont la raison du changement, et que vos cartes sont assez simples pour être reconstruites sans risque. [Ouvrez l'application hébergée](https://app.flashcards-open-source-app.com/) pour essayer un petit paquet temporaire. Gardez Anki — ou testez RemNote, Mochi ou Mnemosyne — quand la fidélité de l'état d'apprentissage passe en premier.

## Quelle alternative à Anki marche sur iOS sans mauvaise surprise à la migration ?

Une « alternative à Anki pour iOS » peut vouloir dire deux choses : une application iPhone native, ou un remplacement pour l'[achat unique d'AnkiMobile à 24,99 $](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387).

RemNote, Mochi, Quizlet, Brainscape, SuperMemo et Nibomo ont tous des applications iOS. Mnemosyne, non. Reste la question de la migration :

- **Mochi** préserve plus que les options iOS limitées au texte : il importe l'historique des révisions d'un `.apkg`, avec conversion en Markdown et notation binaire.
- **RemNote** importe aussi l'historique des révisions d'un `.apkg`, mais testez sa file **Need to Learn** plutôt que de supposer que la planification Anki du jour survit.
- **Quizlet** convient à la distribution en classe, mais sa voie depuis Anki se limite au texte et son nouveau flux de répétition espacée n'est pas encore sur mobile.
- **Nibomo** est l'option à code ouvert avec un client iOS natif, mais sa migration Anki réinitialise l'état d'apprentissage.
- **Brainscape** et **SuperMemo** n'ont de sens que si leur méthode de révision vaut de reconstruire les cartes et la planification.

Avant de quitter AnkiMobile pour son prix, comparez-le au coût d'un abonnement et aux heures nécessaires pour réparer une migration. Un achat unique peut revenir moins cher qu'une application gratuite qui transforme une collection mature en chantier manuel.

## Quand garder Anki est plus sûr

Rester est une décision, pas un échec à choisir quelque chose de plus récent. Gardez Anki si l'un de ces points est vrai :

- votre collection dépend de modèles personnalisés, de CSS, de JavaScript ou de modules complémentaires ;
- Image Occlusion, l'audio ou d'autres médias portent un sens essentiel ;
- une note génère plusieurs variantes de carte qui doivent rester liées ;
- des années d'historique de révisions et les dates d'échéance actuelles valent plus qu'un nouvel éditeur ;
- vous dépendez d'un flux de bureau ou d'une combinaison de plateformes que l'alternative n'égale pas ;
- le mode hors ligne du remplaçant ne marche que sur une surface que vous n'utiliserez pas ;
- vous voulez l'auto-hébergement en théorie mais pas administrer, sécuriser, sauvegarder et mettre à niveau un serveur ;
- l'alternative ne règle aucun problème récurrent au-delà d'une interface plus propre.

Anki offre toujours un écosystème mature de modules complémentaires, des modèles de notes et de cartes flexibles, les réglages FSRS et l'ancien planificateur, des clients installés en local et des formats d'archive capables de transporter la collection. Aucun des produits ci-dessus ne reproduit tout ça.

Pour une comparaison plus étroite des frontières de propriété, lisez [le guide des applications de cartes mémoire open source](/blog/best-open-source-flashcard-apps-2026/). Si le comportement hors ligne décide, notre comparatif des applications de cartes mémoire hors ligne sépare les applications installées, le contenu en cache et les onglets de navigateur.

## Une checklist de migration qui peut encore finir par « non »

Ne commencez pas par toute votre collection. Construisez un test qui a le droit d'échouer.

1. **Créez une archive de secours.** Exportez un `.colpkg` avec les médias, rangez-le hors du profil Anki et gardez une deuxième copie ailleurs.
2. **Prenez le paquet le plus gênant.** Incluez des textes à trous, des champs personnalisés, des cartes avant et arrière, des paquets imbriqués, des étiquettes, des images, de l'audio et assez d'historique de révisions pour exposer la conversion de planification.
3. **Exportez le format que la destination accepte vraiment.** Utilisez `.apkg` avec la planification, les préréglages et les médias pour un importateur direct. Prenez Notes in Plain Text seulement si vous acceptez une reconstruction du contenu seul.
4. **Notez une référence de départ.** Nombre de notes, nombre de cartes, noms d'étiquettes et de paquets, nombre de médias, quelques dates d'échéance et intervalles, et le nombre de cartes attendu pour chaque type de note.
5. **Importez dans un espace temporaire.** N'écrasez pas le profil source et ne fusionnez pas le premier test dans une bibliothèque de destination permanente.
6. **Inspectez séparément le contenu et l'état d'apprentissage.** Un recto et un verso corrects ne prouvent pas que les textes à trous, les médias, les cartes sœurs, l'historique des révisions ou la prochaine échéance ont survécu.
7. **Démarrez à froid hors ligne sur chaque appareil réel.** Révisez, modifiez, fermez complètement l'application, rouvrez-la sans connexion, puis reconnectez-vous et vérifiez un autre appareil.
8. **Observez la file avant de la faire diverger.** Comparez le premier lot dû et quelques intervalles avant de noter les mêmes cartes de production dans les deux applications. Après la première révision ailleurs, les deux planifications sont indépendantes.
9. **Testez la sortie avant de vous engager.** Exportez depuis la destination et regardez ce que vous pourriez récupérer si vous la quittez l'an prochain.
10. **Gardez Anki et la sauvegarde intacte.** N'effacez ni l'un ni l'autre tant que le remplaçant n'a pas survécu à un usage normal et que vous n'avez pas consciemment accepté chaque perte.

Si la destination n'accepte que du texte, suivez le flux complet et sûr d'export TXT depuis Anki. Il sépare le `.colpkg` de secours du fichier de travail portable et rend la remise à zéro explicite.

## Décidez dans cet ordre

Commencez par la partie que vous ne pouvez pas vous permettre de perdre :

1. Si les modèles exacts, les modules complémentaires ou la file actuelle sont essentiels, gardez Anki sauf si un `.apkg` représentatif prouve le contraire.
2. Si les notes et les cartes doivent devenir un seul système, testez RemNote. Vérifiez la file **Need to Learn**, pas seulement les pages importées.
3. Si le Markdown local et des exports inspectables comptent plus que le rendu d'Anki, testez Mochi.
4. Si vous voulez une application de bureau open source ciblée avec import Anki direct, testez Mnemosyne — et vérifiez que ses limites mobiles collent à votre routine.
5. Si le vrai problème est la distribution en classe ou une boucle de révision partagée plus simple, reconstruisez un petit set dans Quizlet ou Brainscape.
6. Si vous voulez spécifiquement la méthode de SuperMemo, acceptez une planification neuve. Si vous voulez spécifiquement le code de toute la pile, l'auto-hébergement, l'API et l'accès MCP, acceptez la reconstruction de contenu avec pertes de Nibomo et le travail d'opérateur.

Pour une vue fonction par fonction de trois modèles très différents, comparez Anki, Quizlet et Nibomo côte à côte.

La règle utile est simple : changez quand le gain est précis et que la perte a survécu à un vrai test. Si votre paquet représentatif ne franchit pas la frontière proprement, garder Anki n'est pas le repli conservateur. C'est le résultat de la comparaison.
