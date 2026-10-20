---
title: "Les meilleurs réglages FSRS pour Anki en 2026 : rétention, étapes et charge de révision"
description: "Choisissez des réglages FSRS prudents pour la rétention souhaitée, les étapes d’apprentissage, l’optimisation, la replanification et la charge de travail dans Anki 26.08 avec FSRS-6."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "réglages FSRS"
  - "meilleurs réglages FSRS"
  - "réglages FSRS Anki"
  - "rétention souhaitée FSRS"
  - "étapes d’apprentissage FSRS"
  - "simulateur FSRS"
  - "optimiser les paramètres FSRS"
  - "FSRS-6"
---

Passer la rétention souhaitée d’Anki de 90 % à 95 % semble être un petit changement. Cela ne représente pourtant pas 5 % de travail en plus. FSRS doit raccourcir les intervalles à mesure que la cible augmente, et une collection utilisée depuis longtemps peut générer beaucoup plus de révisions. Si vous activez aussi **Reschedule cards on change**, une partie de ce travail peut arriver immédiatement.

Les meilleurs réglages FSRS ne se résument donc pas à une série de paramètres à copier. Ils découlent de plusieurs décisions : définir une charge de travail tenable, choisir un objectif de mémorisation dans cette limite, ajuster le modèle à votre propre historique et conserver les échéances existantes, sauf si vous souhaitez délibérément les recalculer.

Les intitulés et comportements ci-dessous correspondent à [Anki 26.08](https://github.com/ankitects/anki/releases/tag/26.08) et à ses réglages FSRS-6. Pour comprendre d’abord le modèle, lisez [Qu’est-ce que FSRS ?](/blog/what-is-fsrs/). Si vous hésitez encore entre les algorithmes de planification, commencez par [FSRS ou SM-2](/blog/fsrs-vs-sm-2/).

> **Transparence :** je suis Kirill Markin et je développe [Nibomo](/fr/features/). Anki propose un ajustement personnalisé des paramètres et des outils expérimentaux de simulation de la charge de travail que Nibomo ne propose pas actuellement. La comparaison en fin d’article expose clairement ces différences.

**Informations vérifiées :** 8 septembre 2026.

![Un éclusier teste l’écoulement de l’eau sur une maquette avant de modifier l’écluse grandeur nature](/blog/fsrs-settings-v2.png)

## Par quels réglages commencer ?

Pour la plupart des utilisateurs d’Anki, voici des choix de départ prudents, et non des réglages universels :

| Réglage ou habitude | Choix de départ prudent | Pourquoi |
| --- | --- | --- |
| Rétention souhaitée | `0.90` | C’est la valeur par défaut d’Anki, qui équilibre mémorisation et charge de révision. |
| Paramètres FSRS | Utilisez **Optimize Current Preset** ; ne copiez pas de poids et ne les modifiez pas à la main | L’optimiseur ajuste le modèle à votre historique de révision. |
| Fréquence d’optimisation | Une fois par mois au maximum ; une optimisation tous les quelques mois suffit généralement | Anki ne recommande pas d’optimiser fréquemment. |
| Étapes d’apprentissage | Gardez un petit nombre d’étapes réalisables dans la journée | Les longues séries d’étapes retardent le passage à la planification fondée sur le modèle. |
| Étapes de réapprentissage | Limitez leur nombre et gardez chaque intervalle inférieur à un jour | La même limite s’applique après un échec sur une carte en révision. |
| Replanification lors d’un changement, **Reschedule cards on change** | Désactivée | Les nouveaux réglages peuvent prendre effet lors des prochaines révisions sans recalculer la file du jour. |
| Intervalle maximal | Conservez la valeur par défaut de 100 ans | Un plafond plus court fait revenir plus souvent les cartes déjà bien mémorisées. |
| Nouvelles cartes par jour | Fixez ce nombre en fonction d’une charge tenable | Chaque nouvelle carte crée du travail d’apprentissage maintenant et des révisions plus tard. |
| Again ou Hard | Again signifie un échec de rappel ; Hard, un rappel réussi avec difficulté | Des évaluations incorrectes donnent au modèle un historique incorrect. |

Si vos révisions restent gérables et que votre configuration est déjà proche de celle-ci, il n’y a peut-être rien à corriger. Passer du temps sur les réglages, ce n’est pas étudier.

## Distinguez trois décisions

On confond souvent rétention souhaitée, paramètres FSRS et charge quotidienne. Ces réglages ont des rôles différents :

- **La rétention souhaitée** est votre objectif de mémorisation. Vous la choisissez selon vos objectifs et le temps disponible pour étudier.
- **Les paramètres FSRS** ajustent le modèle de mémoire à l’historique de révision. L’optimiseur d’Anki les calcule.
- **Les limites de nouvelles cartes et de révisions** déterminent la quantité de contenu introduite et le nombre de cartes arrivées à échéance qu’Anki peut afficher chaque jour.

Cette distinction facilite beaucoup le diagnostic. Une file de révision importante ne signifie pas forcément que vos paramètres sont mauvais. Un paquet à fort enjeu n’a pas forcément besoin de son propre préréglage de paramètres. Et réduire la rétention souhaitée ne corrigera pas un rythme d’ajout qui n’a jamais été tenable.

## Choisissez la rétention souhaitée selon la charge, pas selon votre ambition

La rétention souhaitée indique à FSRS la probabilité avec laquelle vous souhaitez vous souvenir de la réponse au moment où la carte arrive à échéance. À `0.90`, FSRS planifie les révisions autour d’une probabilité de rappel estimée à 90 %. C’est une cible du modèle, pas la garantie d’obtenir exactement 90 % de bonnes réponses à chaque séance ou examen.

Le compromis fonctionne dans les deux sens :

- Augmenter la rétention souhaitée raccourcit les intervalles et multiplie les révisions.
- La réduire allonge les intervalles et augmente les échecs.
- Une rétention trop basse entraîne davantage de réapprentissage après les échecs, ce qui peut absorber une partie du temps que vous espériez gagner.

Anki utilise 90 % par défaut. Ses [conseils sur la rétention souhaitée](https://docs.ankiweb.net/deck-options.html#desired-retention) préviennent que la charge augmente rapidement à l’approche de 100 % et recommandent de rester sous 97 %. L’[explication officielle de la rétention optimale](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) décrit l’autre extrémité de la courbe : une rétention très faible peut aussi être peu efficace, car les cartes oubliées demandent davantage de travail.

Commencez à `0.90`, puis ne changez cette valeur qu’après avoir examiné la charge. Une cible plus élevée peut se justifier lorsque l’oubli a un coût réel. Une cible plus basse peut se justifier lorsque les révisions prennent la place d’un apprentissage plus utile. Aucun de ces changements ne corrige les cartes vagues, les évaluations qui ne reflètent pas le rappel réel ou un excès de nouvelles cartes.

### La rétention d’un paquet et les paramètres d’un préréglage n’ont pas la même portée

Dans Anki 26.08, le réglage de rétention souhaitée, **Desired retention**, peut s’appliquer au préréglage partagé (**Shared Preset**) ou au paquet seul (**This deck**). Vous pouvez donc conserver un même préréglage de paramètres pour des paquets apparentés tout en donnant à un paquet précis sa propre cible de rétention.

Utilisez ce réglage propre au paquet lorsque le coût de l’oubli diffère. Un paquet préparant à un examen de qualification professionnelle peut justifier une cible plus élevée qu’un paquet de référence peu prioritaire, même si tous deux utilisent le même modèle ajusté.

Choisir **This deck** ne rend pas les paramètres FSRS propres à ce paquet. Par défaut, Anki les ajuste à partir de l’historique de révision de tous les paquets associés au préréglage courant. Si des groupes de paquets présentent des difficultés subjectives très différentes, des préréglages distincts permettent de les ajuster séparément.

## Help Me Decide et le simulateur répondent à des questions différentes

Anki 26.08 propose deux outils expérimentaux distincts :

- **Help Me Decide (Experimental)** affiche une courbe personnalisée reliant rétention et charge de travail. Utilisez-le pour répondre à cette question : « Quelle cible de rétention correspond au nombre de révisions ou au temps que je peux y consacrer durablement ? »
- **FSRS Simulator (Experimental)** estime le comportement d’une configuration au fil du temps. Utilisez-le pour comparer des changements de rétention, de rythme d’ajout de cartes, de limites de révision et d’intervalle maximal.

La [documentation du simulateur FSRS](https://docs.ankiweb.net/deck-options.html#the-simulator) énumère ses principales données d’entrée :

- le nombre de jours à simuler
- le nombre de nouvelles cartes supplémentaires à simuler
- le nombre de nouvelles cartes par jour
- le nombre maximal de révisions par jour
- l’intervalle maximal
- la rétention souhaitée et les paramètres FSRS du préréglage

La simulation utilise aussi les états de mémoire réels des cartes du préréglage. Pour une collection utilisée depuis longtemps, cela la rend plus utile que de multiplier le nombre de cartes à réviser aujourd’hui par un pourcentage générique.

Simulez trois scénarios avant de modifier votre configuration :

1. Votre rétention et votre rythme d’ajout actuels.
2. La cible de rétention que vous envisagez.
3. La même cible avec moins de nouvelles cartes par jour.

Le troisième scénario teste une autre possibilité courante : conserver l’objectif de mémorisation et ralentir l’arrivée de nouveau contenu. Si la charge prévue devient gérable, vous n’avez pas besoin d’accepter davantage d’oublis pour alléger la file. Pour approfondir ce sujet, lisez [Combien de nouvelles cartes de révision par jour ?](/blog/how-many-new-flashcards-per-day/).

Ces deux outils fournissent des estimations. Les jours sans révision, les cartes modifiées, le nouveau contenu et l’évolution de vos habitudes d’évaluation peuvent éloigner la charge réelle de la courbe. Servez-vous de la comparaison pour choisir une direction, pas pour prévoir à la carte près vos révisions dans plusieurs mois.

Les anciens guides mentionnent parfois **Compute Minimum Recommended Retention**, ou CMRR. Anki a supprimé cette fonction dans la version 25.07. Ce n’est plus la méthode actuelle pour choisir la rétention souhaitée.

## Optimisez les paramètres FSRS à partir de votre propre historique

La rétention souhaitée exprime votre objectif. Les paramètres FSRS décrivent la façon dont le modèle s’ajuste à vos révisions.

Dans Anki 26.08, utilisez **Optimize Current Preset** pour ajuster les paramètres du préréglage actif. Par défaut, Anki inclut l’historique de révision de tous les paquets qui utilisent ce préréglage ; vous pouvez modifier la recherche pour restreindre les données utilisées. **Optimize All Presets** met à jour tous les préréglages en une seule opération.

Ne saisissez pas les poids à la main et ne les copiez pas depuis Reddit, une vidéo ou le paquet d’une autre personne. Ses cartes, son rythme de révision et ses habitudes d’évaluation ne constituent pas votre historique. Une belle série de [poids FSRS-6](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) n’est pas une méthode d’étude transposable.

Relancez l’optimisation seulement après avoir accumulé suffisamment de nouvelles révisions. Le manuel d’Anki indique qu’une fois par mois suffit, tandis que les conseils intégrés à la version 26.08 parlent d’une fois tous les quelques mois. La conclusion pratique reste la même : aucune raison d’optimiser chaque semaine, encore moins après chaque séance.

### Utilisez le diagnostic avec le préréglage courant

Activez **Check health when optimizing (slow)** si vous voulez qu’Anki évalue dans quelle mesure FSRS peut s’adapter à l’historique du préréglage courant. Ce diagnostic fonctionne avec **Optimize Current Preset**, pas avec **Optimize All Presets**.

Si le résultat est mauvais, examinez les données avant de toucher aux poids. Les [conseils d’Anki sur les paramètres FSRS](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) citent des causes fréquentes : un historique inférieur à quelques centaines de révisions, l’utilisation de Hard après un échec et le fait de ne pas appuyer sur Again quand le rappel échoue. Avec peu d’historique exploitable, gardez les valeurs par défaut et optimisez plus tard au lieu d’emprunter les paramètres d’un autre utilisateur.

## Again signifie un échec ; Hard reste une réussite

Cette habitude compte autant que les réglages.

Utilisez **Again** quand vous n’avez pas pu donner la réponse attendue ou que vous vous êtes trompé. Utilisez **Hard** uniquement si vous avez retrouvé la bonne réponse, mais au prix d’un effort important ou après une longue hésitation. Good et Easy correspondent aussi à des réussites.

Appuyer sur Hard pour éviter le court intervalle d’Again enregistre une réussite après un échec. FSRS apprend alors à partir du mauvais événement. Choisissez le bouton qui décrit votre rappel, pas l’intervalle qui vous arrange parmi ceux affichés au-dessus des boutons.

Les cartes ambiguës compliquent une évaluation honnête. Si une question demande cinq faits et que vous en retrouvez quatre, le problème de planification a commencé dans l’éditeur. Divisez ou reformulez la carte. Pour les cartes sur lesquelles vous échouez malgré les révisions répétées, consultez [Comment corriger les cartes qui bloquent votre apprentissage](/blog/how-to-fix-leech-flashcards/).

## Gardez des étapes FSRS courtes, ou laissez-les vides en connaissance de cause

Les étapes d’apprentissage et de réapprentissage déterminent quand une carte réapparaît à court terme, avant que la planification habituelle à long terme prenne le relais. Elles ne constituent pas une autre cible de rétention.

Anki recommande de respecter deux règles avec FSRS :

- chaque étape doit être inférieure à un jour et pouvoir être terminée le jour même
- le nombre de répétitions dans la journée doit rester faible

Les longues séries comme `1m 10m 1d 3d` transposent une ancienne habitude de SM-2 à FSRS. Les étapes d’un jour ou plus retardent la planification fondée sur le modèle et peuvent rendre les indications des boutons déroutantes, par exemple lorsque Hard affiche un intervalle plus long que Good.

Une courte séquence comme `1m 10m`, avec une étape de réapprentissage de `10m`, constitue un point de départ prudent si elle convient à vos séances. Multiplier les répétitions dans la journée n’est pas automatiquement préférable.

Anki 26.08 permet aussi de laisser vide le champ des étapes d’apprentissage, celui des étapes de réapprentissage, ou les deux. Lorsque FSRS est activé, un champ vide lui délègue la planification à court terme correspondante. Cette fonction est expérimentale : même après une réponse Again, la carte peut ne revenir qu’un jour plus tard, voire davantage. Gardez de courtes étapes manuelles si vous avez besoin d’un retour prévisible le jour même ; videz un champ seulement si vous acceptez délibérément que FSRS choisisse ce délai.

## Désactivez Reschedule cards on change pour une transition progressive

Lorsque **Reschedule cards on change** est désactivé, ce qui est le réglage par défaut, activer FSRS ou modifier la rétention souhaitée ou les paramètres ne réécrit pas immédiatement les échéances existantes. La nouvelle configuration s’applique au fil des révisions suivantes, et la file évolue progressivement.

Enregistrer l’un de ces changements FSRS avec l’option activée recalcule immédiatement les échéances. Selon la nouvelle cible et l’état des cartes, beaucoup peuvent arriver à échéance d’un coup. Anki ajoute aussi des entrées de révision pour les cartes replanifiées, ce qui augmente la taille de la collection.

Cette option n’est utile que si vous souhaitez réellement un recalcul rétroactif. Pour une collection utilisée depuis longtemps :

1. Faites une nouvelle sauvegarde et assurez-vous de savoir annuler le changement ou restaurer la sauvegarde.
2. Lancez le simulateur avec les réglages envisagés.
3. Choisissez un seul changement de configuration ; ne cumulez pas plusieurs expériences.
4. Au moment d’enregistrer, activez la replanification uniquement si vous souhaitez réécrire immédiatement les échéances et pouvez absorber la charge qui en résulte.

Anki recommande explicitement une sauvegarde lors du passage de SM-2 à FSRS avec replanification. Le [guide de sauvegarde des cartes de révision](/blog/how-to-back-up-flashcards/) explique plus largement pourquoi la procédure de récupération compte autant que le fichier de sauvegarde.

## Gardez un intervalle maximal généreux

L’intervalle maximal d’Anki est fixé à 100 ans par défaut. Cela paraît étrange, jusqu’à ce qu’on se rappelle qu’il s’agit d’un plafond, pas de la promesse que chaque carte déjà bien mémorisée disparaîtra pendant un siècle.

Abaisser ce plafond fait revenir plus tôt les cartes bien connues et augmente la charge de travail. Au plafond, Hard, Good et Easy peuvent tous afficher le même délai, puisqu’aucun ne peut dépasser le maximum.

Un intervalle maximal plus court peut se justifier lorsqu’un examen impose une échéance réelle, que le contenu change souvent ou qu’une règle professionnelle exige une exposition répétée, indépendamment de la mémorisation estimée. Adaptez ce plafond à votre calendrier et aux résultats du simulateur, plutôt que de choisir un petit nombre par inquiétude. [Comment préparer un examen avec FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) traite de ce cas plus précis.

Pour un apprentissage ordinaire à long terme, gardez un plafond généreux. La rétention souhaitée détermine déjà à quel niveau de rappel estimé une révision doit être déclenchée.

## Tenez compte des nouvelles cartes dans la charge de travail

FSRS peut répartir les révisions ; il ne peut pas rendre tenable un ajout illimité de contenu. Chaque nouvelle carte crée du travail d’apprentissage maintenant et des révisions plus tard.

Quand la file devient trop lourde, examinez ces points avant de réduire la rétention souhaitée :

- le nombre de nouvelles cartes par jour
- les imports volumineux ou les lots de cartes générées
- un plafond quotidien de révisions qui masque régulièrement des cartes arrivées à échéance
- les cartes récalcitrantes et les formulations vagues qui multiplient les tentatives
- les jours sans révision

Utilisez **Additional new cards to simulate** lorsque vous savez qu’un paquet va s’agrandir. Une prévision fondée uniquement sur la collection actuelle ne représentera pas la charge après un import important.

Si la charge prévue est trop élevée, réduisez le rythme d’ajout et relancez la simulation. Vous conservez ainsi votre objectif de mémorisation sans demander à l’algorithme d’accepter davantage d’oublis.

## Anki et Nibomo proposent des réglages FSRS différents

Les deux produits utilisent FSRS-6, mais les réglages FSRS d’Anki ne correspondent pas exactement à ceux de Nibomo.

| Fonctionnalité | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Rétention souhaitée | **Shared Preset** ou **This deck** | Configurable par espace de travail ; valeur par défaut `0.90` |
| Paramètres FSRS | **Optimize Current Preset** ou **Optimize All Presets** à partir de l’historique de révision | Les poids officiels par défaut de FSRS-6 sont fixes et non configurables par l’utilisateur dans la v1 |
| Étapes d’apprentissage | Configurables ; la planification par FSRS lorsque le champ est vide est expérimentale | Configurables par espace de travail ; valeur par défaut `1m 10m` |
| Étapes de réapprentissage | Configurables ; la planification par FSRS lorsque le champ est vide est expérimentale | Configurables par espace de travail ; valeur par défaut `10m` |
| Intervalle maximal | 100 ans par défaut | 36 500 jours par défaut, soit également 100 ans |
| Changements de réglages | Prochaines révisions par défaut ; replanification rétroactive facultative | Prochaines révisions uniquement ; les échéances existantes ne sont pas recalculées |
| Outils d’estimation de la charge | **Help Me Decide (Experimental)** et **FSRS Simulator (Experimental)** | Aucun simulateur de charge équivalent dans la v1 |

Nibomo utilise les évaluations habituelles Again, Hard, Good et Easy et conserve un état de mémoire FSRS pour chaque carte. Ses algorithmes de planification côté backend, iOS et Android sont des implémentations indépendantes maintenues de façon à produire le même comportement ; les révisions sur le Web réutilisent l’algorithme du backend au lieu d’en ajouter une quatrième copie.

Ces limites et valeurs par défaut sont documentées dans la [spécification publique de la planification FSRS de Nibomo](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Le compromis est simple : Nibomo fournit une configuration FSRS-6 pratique à l’échelle de l’espace de travail, tandis qu’Anki permet de choisir plus finement à quels paquets appliquer les réglages et propose un ajustement personnalisé ainsi que des simulations. Si ces fonctions sont essentielles pour vous, Anki est le choix le plus adapté.

## Une méthode plus prudente pour une collection déjà bien établie

Si vous disposez déjà de plusieurs mois ou années d’historique de révision, procédez dans cet ordre :

1. **Respectez le sens des évaluations.** Again correspond à un échec ; Hard, à une réussite difficile.
2. **Optimisez le préréglage courant.** Utilisez votre propre historique plutôt que de modifier ou copier des poids.
3. **Lancez le diagnostic si nécessaire.** Traitez un historique limité ou incohérent comme un problème de données.
4. **Utilisez Help Me Decide.** Choisissez une plage de rétention selon le nombre de révisions ou le temps que vous pouvez y consacrer durablement.
5. **Lancez le simulateur.** Comparez la configuration actuelle, la cible envisagée et un rythme d’ajout plus faible.
6. **Modifiez un seul réglage actif.** Ajustez d’abord la rétention ou le rythme d’ajout, puis observez la file réelle.
7. **Gardez des étapes courtes.** Supprimez les séries d’étapes d’apprentissage et de réapprentissage d’un jour ou plus ; ne laissez les champs vides qu’à titre d’expérience.
8. **Conservez un intervalle maximal généreux.** Ne le raccourcissez que pour une échéance ou une exigence précise.
9. **Laissez la replanification désactivée.** Si vous avez besoin d’un recalcul immédiat, sauvegardez d’abord et prévoyez la charge qui en résultera.

En procédant dans cet ordre, vous gardez aussi longtemps que possible la possibilité de revenir sur les changements apportés à une planification déjà bien établie. Elle évite aussi de confondre trois problèmes distincts — l’ajustement du modèle, l’objectif de mémorisation et le flux de nouveau contenu — dans un seul casse-tête de réglages.

## Questions fréquentes sur les meilleurs réglages FSRS

### 90 % est-il le meilleur taux de rétention souhaitée pour FSRS ?

C’est le point de départ général le plus prudent : il s’agit de la valeur par défaut d’Anki, qui évite la zone où la charge de travail augmente le plus vite, à mesure que la rétention approche de 100 %. La meilleure valeur pour un paquet dépend du coût de l’oubli et de la charge que vous pouvez tenir dans la durée. Consultez **Help Me Decide (Experimental)** avant de la modifier.

### Dois-je fixer la rétention souhaitée à 95 % ?

Seulement après avoir examiné les révisions ou les minutes supplémentaires nécessaires. Un paquet bien conçu et à fort enjeu peut justifier 95 % ; une vaste collection étudiée sans urgence peut devenir inutilement lourde. N’activez pas la replanification rétroactive en même temps, sauf si vous souhaitez délibérément recalculer immédiatement les échéances.

### À quelle fréquence dois-je optimiser les paramètres FSRS ?

Une fois par mois est déjà suffisamment fréquent, et les conseils intégrés à Anki 26.08 indiquent qu’une fois tous les quelques mois suffit. Optimisez après avoir accumulé suffisamment de nouvelles révisions, pas selon un rythme quotidien ou hebdomadaire.

### Faut-il laisser les étapes d’apprentissage FSRS vides ?

Laisser vides les étapes d’apprentissage ou de réapprentissage permet à Anki 26.08 de déléguer la planification à court terme correspondante à FSRS. La fonction est expérimentale : même après Again, la prochaine révision peut être programmée un jour plus tard, voire davantage. Quelques étapes réalisables dans la journée restent le choix prudent.

### Modifier les réglages FSRS replanifie-t-il les cartes Anki existantes ?

Pas par défaut. Lorsque **Reschedule cards on change** est désactivé, les nouveaux réglages affectent les prochaines révisions sans recalculer immédiatement la file. L’activer modifie les échéances et peut rendre immédiatement nécessaire la révision de nombreuses cartes ; faites donc d’abord une sauvegarde.

### CMRR fait-il encore partie d’Anki ?

Non. Anki a supprimé Compute Minimum Recommended Retention dans la version 25.07. Dans Anki 26.08, utilisez **Help Me Decide (Experimental)** et **FSRS Simulator (Experimental)** pour comparer rétention et charge de travail estimée.

### Nibomo utilise-t-il les mêmes réglages qu’Anki ?

Nibomo utilise FSRS-6 et permet de régler la rétention souhaitée, les étapes d’apprentissage et de réapprentissage, l’intervalle maximal et la variation aléatoire des intervalles, appelée fuzz, par espace de travail. Il ne reprend pas l’ensemble des réglages d’Anki : les poids sont fixes dans la v1, les changements s’appliquent uniquement aux révisions futures et il n’y a ni optimisation personnalisée des paramètres ni simulateur de charge.

## Fixez la charge avant le pourcentage

De bons réglages FSRS mettent la file de révision au service d’un véritable programme d’étude. Commencez à 90 %, estimez le travail, maîtrisez le rythme d’ajout de cartes et augmentez la rétention uniquement si mieux mémoriser justifie les révisions supplémentaires. Gardez des étapes courtes, un intervalle maximal généreux et des évaluations fidèles à vos résultats.

Puis quittez l’écran des réglages. L’algorithme a davantage besoin de révisions régulières que d’une nouvelle soirée passée à le peaufiner.
