---
title: "Quizlet a-t-il un serveur MCP en 2026 ? Ce que Claude et Codex peuvent utiliser"
description: "Quizlet ne documente aucun serveur MCP en 2026. Comparez son application ChatGPT, l’export réservé aux créateurs et une méthode prudente pour un accès récurrent avec Claude ou Codex."
image: "/blog/quizlet-mcp-server.png"
date: "2026-09-12"
updated: "2026-10-03"
keywords:
  - "Quizlet MCP"
  - "serveur MCP Quizlet"
  - "connecteur Quizlet Claude"
  - "connecter Quizlet à Claude"
  - "Quizlet Codex"
  - "application Quizlet ChatGPT"
  - "alternative à l’API Quizlet"
---

Au 12 septembre 2026, la documentation publique de Quizlet ne décrit ni serveur MCP ni API publique en libre-service destinée aux développeurs. Si vous cherchez une URL MCP Quizlet à coller dans Claude, Codex ou un autre client MCP, la documentation de Quizlet ne propose aujourd’hui aucune procédure de configuration publique.

Quizlet dispose bien d’une application officielle dans ChatGPT. Elle permet de transformer une conversation ChatGPT en une nouvelle liste Quizlet, mais ce parcours précis ne constitue pas un serveur MCP Quizlet réutilisable. Si vous avez besoin qu’un agent accède régulièrement à des cartes existantes, la solution pratique consiste à exporter le texte d’une liste que vous avez créée, à conserver une copie brute, à vérifier le transfert et à utiliser un système de cartes de révision qui prend explicitement en charge la lecture et l’écriture par des agents.

**Vérification des faits :** 12 septembre 2026.

> **Transparence :** Je suis Kirill Markin et je développe Nibomo, dont le serveur MCP et l’Agent API figurent parmi les alternatives ci-dessous. Nibomo ne peut ni se connecter à un compte Quizlet ni importer une URL Quizlet.

![Un jardinier transporte un jeune plant depuis une serre fermée vers une plate-bande équipée d’un réseau ramifié d’irrigation au goutte-à-goutte](/blog/quizlet-mcp-server.png)

## L’application ChatGPT, l’export et MCP répondent à des besoins différents

Le [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) est un standard ouvert qui permet de connecter des applications d’IA à des systèmes externes. Un serveur MCP fournit normalement aux clients compatibles un point de terminaison connu et un ensemble défini d’outils qu’ils peuvent appeler.

L’[annonce officielle de Quizlet concernant ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) décrit un autre fonctionnement. Vous installez l’application Quizlet dans ChatGPT, commencez une requête par `@Quizlet`, prévisualisez les cartes générées dans ChatGPT, puis ouvrez la liste dans Quizlet pour la personnaliser et l’étudier.

C’est utile lorsque le besoin est de « transformer cette conversation ChatGPT en liste Quizlet ». L’annonce ne publie pas de point de terminaison MCP Quizlet général, ne donne pas à Claude ou Codex accès à votre bibliothèque Quizlet et ne propose pas d’identifiants de développeur réutilisables.

Cela ne dit rien de l’infrastructure privée ou interne de Quizlet. Il est uniquement question de l’interface que Quizlet présente dans sa documentation publique. Les limites plus générales de l’accès développeur sont abordées dans [Quizlet propose-t-il une API publique en 2026 ?](/fr/blog/quizlet-api/).

Voici la distinction à retenir :

| Ce que vous voulez réellement faire | Solution la mieux prise en charge aujourd’hui | À quoi vous attendre |
| --- | --- | --- |
| Créer une nouvelle liste Quizlet à partir d’une conversation ChatGPT | L’application officielle Quizlet dans ChatGPT | Un parcours dédié avec `@Quizlet` dans ChatGPT, puis un passage dans Quizlet pour modifier la liste et étudier |
| Déplacer les termes et définitions d’une liste que vous avez créée | L’export sur le site web de Quizlet | Une copie ponctuelle du texte, à conserver et à vérifier |
| Permettre à Claude, Codex ou un autre agent de lire ou modifier régulièrement des cartes de révision | Un système de cartes de révision disposant d’un serveur MCP ou d’une API pour agents documentés | Un accès authentifié à l’espace de travail de destination, pas à Quizlet |
| Développer un logiciel qui utilise les données d’un compte Quizlet | Attendre une documentation développeur officielle ou passer par un partenariat autorisé | Aucun contrat d’interface public pour une API ou un serveur MCP Quizlet en libre-service n’est documenté aujourd’hui |

L’application Quizlet dans ChatGPT couvre un parcours de création. L’export permet un transfert ponctuel. MCP permet un accès répété à un système qui expose volontairement des outils. Ces solutions ne sont pas interchangeables.

## Choisissez la solution prise en charge la plus directe

Si l’application officielle dans ChatGPT répond déjà au besoin, utilisez-la. Il n’y a aucune raison d’ajouter un second système simplement pour créer une liste Quizlet à partir d’une conversation.

Si vous avez seulement besoin d’une sauvegarde ou d’un transfert ponctuel, utilisez l’export de Quizlet. Si vous voulez qu’un agent revienne demain, retrouve un paquet, ajoute des cartes et les corrige, il vous faut une interface de lecture et d’écriture documentée du côté de la destination. Tant que Quizlet n’en publie pas, ce fonctionnement récurrent ne peut pas reposer sur une connexion directe prise en charge à votre compte Quizlet.

Pour un logiciel sur mesure conçu spécifiquement autour des données Quizlet, respectez la même limite. Une requête envoyée par le navigateur, une ancienne bibliothèque d’accès ou une intégration issue de rétro-ingénierie ne remplace pas une documentation développeur à jour.

## Préservez la possibilité de revenir en arrière après l’export d’une liste que vous avez créée

Les [instructions officielles d’export de Quizlet](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) indiquent que seul le créateur d’une liste peut l’exporter, et uniquement sur le site web. Le parcours est **Plus → Exporter → Copier le texte**. L’export comprend les termes et définitions ; Quizlet précise que les images ne peuvent pas être exportées et que les listes copiées ne sont pas éligibles.

Pour une liste que vous avez créée, un transfert prudent tient en quelques étapes :

1. Utilisez l’export du site web de Quizlet et collez le résultat dans un fichier texte brut.
2. Enregistrez une copie UTF-8 intacte avant de modifier les séparateurs, les sauts de ligne ou le texte.
3. Modifiez une copie de travail, pas l’export brut.
4. Vérifiez un échantillon du début, du milieu et de la fin, ainsi que les définitions sur plusieurs lignes et les caractères non latins.
5. Importez ou joignez la copie de travail, prévisualisez quelques rectos et versos, puis enregistrez les cartes seulement après cette vérification.
6. Conservez la liste Quizlet et le fichier brut jusqu’à ce que le paquet de destination ait été ouvert et testé.

Les vérifications complètes des séparateurs, du CSV et des fichiers sont détaillées dans [Comment exporter des listes Quizlet en 2026](/fr/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Une limite importante passe facilement inaperçue : l’export transfère le texte des cartes, mais pas les images Quizlet, les dossiers, l’historique d’étude, l’état de maîtrise ni la planification des révisions.

C’est pourquoi il faut pouvoir revenir sur le transfert. Si une définition sur plusieurs lignes devient deux cartes ou qu’un séparateur décale les champs, le fichier brut vous donne une référence intacte.

## Ce que Claude et Codex peuvent utiliser après l’export

Nibomo publie un point de terminaison MCP distant à l’adresse suivante :

`https://mcp.nibomo.com/mcp`

> [Se connecter à Claude](https://claude.ai/directory/nibomo) · [Documentation](/fr/docs/mcp-connector/)

La [documentation de son connecteur MCP](/fr/docs/mcp-connector/) définit huit outils : `list_workspaces`, `sql_query` pour la lecture, `sql_execute` pour l’écriture, `get_guide` pour les guides de référence, ainsi que `next_review_card`, `reveal_answer` et `submit_review` pour les révisions. Les clients MCP interactifs peuvent autoriser l’accès avec OAuth. Les agents en terminal peuvent aussi partir de la [documentation de l’Agent API](/fr/docs/api/) et utiliser le parcours HTTP publié.

`get_usage_limits` — consultation strictement en lecture seule de la formule du compte, de ses limites et de sa consommation d’IA pour le mois en cours ; cet outil ne lit ni ne modifie les cartes.

Cela ne fait pas de Nibomo un connecteur Quizlet. Le parcours pris en charge consiste à :

1. exporter le texte d’une liste Quizlet dont vous êtes le créateur ;
2. conserver le fichier brut et examiner une copie de travail ;
3. vérifier les cartes obtenues après la mise en correspondance des champs avant de les enregistrer dans Nibomo ;
4. connecter l’espace de travail Nibomo obtenu à un client compatible pour les lectures et écritures futures.

Pour Claude, les étapes de connexion figurent dans [Comment connecter Nibomo à Claude avec MCP](/fr/blog/how-to-connect-flashcards-to-claude-with-mcp/). Codex et les autres agents peuvent utiliser le parcours MCP ou Agent API documenté que leur environnement prend en charge.

Nibomo ne peut ni lire une URL Quizlet, ni maintenir une copie à l’identique d’un compte Quizlet, ni synchroniser les modifications apportées ensuite dans Quizlet, ni récupérer les images et l’historique d’étude absents de l’export. Il crée ses propres cartes et initialise leur planification des révisions à partir du contenu que vous choisissez de transférer.

Si vous cherchez à savoir si ce compromis vous convient au-delà de l’accès par des agents, consultez le [comparatif d’une alternative open source à Quizlet](/blog/quizlet-alternative/).

## Limitez les autorisations au strict nécessaire pour la tâche

Un contrat d’interface public réduit les incertitudes d’intégration, mais ne rend pas chaque action MCP sûre. OAuth authentifie la connexion. Il ne garantit pas qu’une carte générée par l’IA est correcte, n’empêche pas les données des cartes renvoyées de sortir du service de cartes de révision et ne détermine pas si une modification correspond à votre intention.

Nibomo sépare les opérations de lecture de ses outils d’écriture : `sql_execute` pour les cartes et les paquets, `submit_review` pour les révisions. Les informations d’authentification OAuth couvrent toutefois l’ensemble de l’interface du connecteur ; le blocage des outils et les modalités d’approbation dépendent donc du client. Commencez par un petit espace de travail sans données sensibles. Ne laissez l’agent lire que les données nécessaires à la tâche, exigez une approbation à chaque appel d’écriture lorsque le client le permet et examinez l’espace de travail ainsi que la modification proposée avant de l’accepter.

Ne connectez pas de contenu d’étude privé avant d’avoir vérifié les conditions de conservation et de traitement des données du client d’IA. Pour un premier transfert, une règle simple suffit : conservez l’export brut, prévisualisez quelques cartes, approuvez une écriture limitée et vérifiez le résultat dans l’application de destination avant d’aller plus loin.

## Ne transformez pas le trafic privé du navigateur en API

Une requête visible dans les outils de développement du navigateur n’est pas une API publique Quizlet. Les points de terminaison privés peuvent dépendre de cookies de session, de formats internes et de comportements qui changent sans préavis. Toute utilisation automatisée doit aussi respecter les [conditions d’utilisation de Quizlet](https://quizlet.com/tos) et les autorisations dont vous disposez pour le contenu.

Cet article ne fournit ni instructions d’extraction automatisée ni points de terminaison issus de rétro-ingénierie. Si l’application officielle dans ChatGPT répond au besoin, utilisez-la. Si vous avez créé la liste et avez besoin d’un transfert ponctuel, exportez-la. Si vous avez besoin de lectures et d’écritures récurrentes par un agent, transférez le contenu vérifié dans un système qui publie cette interface, puis gardez les opérations côté Quizlet manuelles tant que Quizlet ne documente pas une nouvelle solution.
