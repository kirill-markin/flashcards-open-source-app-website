---
title: "Quizlet propose-t-il une API publique en 2026 ? État actuel et alternatives sûres"
description: "Quizlet propose-t-il une API ? Au 18 août 2026, aucune API publique en libre-service n'est documentée. Comparez les alternatives officiellement prises en charge."
image: "/blog/quizlet-api.png"
date: "2026-08-18"
updated: "2026-10-03"
keywords:
  - "API Quizlet"
  - "Quizlet propose-t-il une API"
  - "API publique Quizlet"
  - "API développeur Quizlet"
  - "alternative à l'API Quizlet"
  - "automatiser les flashcards"
---

Au 18 août 2026, Quizlet ne documente ni API publique en libre-service pour les développeurs, ni portail public destiné aux développeurs. Un développeur indépendant ne dispose actuellement d'aucune procédure officielle pour enregistrer une application, obtenir une clé API Quizlet et utiliser des points d'accès documentés pour lire ou écrire des données de flashcards.

Ce constat concerne la documentation publique de Quizlet, pas ses systèmes internes. Quizlet propose bien des intégrations avec d'autres produits et des partenaires. Son application ChatGPT et son module complémentaire Google Classroom en sont deux exemples actuels. Aucune de ces intégrations ne donne aux autres applications accès à une API Quizlet généraliste.

**Informations vérifiées :** le 18 août 2026.

> **Transparence :** je suis Kirill Markin et je développe Nibomo, dont l'Agent API et le serveur MCP figurent parmi les alternatives ci-dessous. Nibomo n'est pas compatible avec Quizlet et n'importe pas automatiquement les sets Quizlet.

![Un développeur compare l'export Quizlet, l'intégration dans une page, les intégrations avec des produits précis et une API de flashcards documentée](/blog/quizlet-api.png)

## Réponse courte : aucune API Quizlet en libre-service n'est documentée

Si vous avez cherché « Quizlet propose-t-il une API ? » pour automatiser Quizlet lui-même, la réponse pratique actuelle est la suivante : **aucune API publique en libre-service n'est documentée**.

Vues de l'extérieur, plusieurs fonctions officielles peuvent faire penser à une API. Elles répondent à des besoins plus précis :

| Votre besoin | Solution prise en charge | Utile pour | Ce qu'elle ne fournit pas |
|---|---|---|---|
| Transférer le texte d'un set que vous avez créé | [Export depuis le site web de Quizlet](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | Copier une seule fois les termes et les définitions | Images, export des sets copiés, historique de révision ou accès API |
| Afficher un set public sur un site web ou une page de plateforme pédagogique (LMS) | [Intégration Quizlet dans une page](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | Afficher dans votre page une activité de révision portant la marque Quizlet | Données de cartes structurées ou accès en lecture et écriture |
| Transformer une conversation ChatGPT en set Quizlet | [Application Quizlet dans ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | Créer un set et en voir l'aperçu avec `@Quizlet` | Identifiants ou points d'accès pour votre propre application |
| Assigner des activités Quizlet dans Google Classroom | [Module complémentaire Quizlet pour Google Classroom](https://quizlet.com/blog/quizlet-google-classroom-add-on) | Trouver, assigner et suivre des activités dans Classroom | API généraliste pour un logiciel pédagogique sur mesure |
| Développer votre propre intégration Quizlet | Aucune voie en libre-service n'est documentée à ce jour | Un accord avec un partenaire précis peut exister | Inscription publique, clés API ou contrat documenté pour les cartes |
| Automatiser votre propre espace de travail de flashcards | [Agent API de Nibomo](/fr/docs/api/) ou [connecteur MCP](/fr/docs/mcp-connector/) | Lire et écrire régulièrement des cartes et des paquets dans un espace de travail donné | Compatibilité avec Quizlet ou import automatique depuis Quizlet |

La distinction est simple : copier une fois le texte de vos propres cartes relève de l'export. Afficher une activité Quizlet sur une autre page relève de l'intégration dans une page. Une intégration avec un produit précis fonctionne uniquement dans le parcours prévu par ce produit. Un logiciel qui crée, lit et modifie régulièrement des cartes a besoin d'une API documentée en lecture et écriture.

## Export, intégration dans une page et accès partenaire ne sont pas des API publiques

Une API publique fournit aux développeurs externes un contrat : documentation, authentification, opérations prises en charge, règles d'utilisation et moyen d'obtenir des identifiants. Aucune des interfaces publiques actuelles de Quizlet ne propose ce parcours complet en libre-service.

L'**export** Quizlet est un transfert manuel. Le créateur d'un set peut utiliser le site web pour choisir l'ordre des termes et des définitions, sélectionner **Copier le texte (Copy text)** et coller le résultat ailleurs. Quizlet précise que l'export des images est indisponible, que les sets copiés ne peuvent pas être exportés et que cette fonction existe uniquement sur le site web. Cela convient à une migration ponctuelle menée avec soin. Cela ne permet pas à un logiciel de maintenir deux systèmes synchronisés.

Une **intégration dans une page** sert à présenter une activité, sans donner accès aux données. Quizlet permet de copier le HTML d'un set public en mode Associer (Match), Apprendre (Learn), Test (Test), Cartes (Flashcards) ou Orthographe (Spell). L'activité intégrée conserve le logo Quizlet et les apprenants utilisent l'interface Quizlet. Votre application ne reçoit pas les cartes du set sous forme d'enregistrements qu'elle pourrait modifier.

Une **intégration avec un produit précis** suit un parcours convenu entre les partenaires. Quizlet peut travailler avec ChatGPT ou Google Classroom sans proposer la même interface à tous les développeurs. Ces lancements prouvent l'existence des intégrations annoncées ; ils ne prouvent pas qu'elles reposent sur une API publique Quizlet accessible à tous.

C'est aussi pourquoi un ancien wrapper ou une requête visible dans les outils de développement du navigateur ne constitue pas une API Quizlet prise en charge. Il manque la documentation publique et un contrat stable pour les développeurs.

## Choisissez la solution adaptée à votre besoin

### Pour une sauvegarde ou une migration ponctuelle, utilisez l'export

Utilisez la procédure officielle d'export Quizlet pour un set que vous avez créé. Puisque cette procédure se termine par **Copier le texte (Copy text)**, conservez la première copie collée telle quelle avant de nettoyer les séparateurs ou de faire correspondre les champs. Vous conservez les termes et les définitions ; vous ne téléchargez pas un fichier de paquet restaurable. Les images et l'historique de révision ne sont pas transférés.

La marche à suivre se trouve dans [Comment exporter des sets Quizlet en 2026](/fr/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Elle explique comment conserver une copie brute et une copie de travail, utiliser UTF-8, gérer les tabulations et les définitions sur plusieurs lignes, et distinguer le transfert du contenu des cartes de celui des données de planification des révisions.

L'export convient à un transfert ponctuel. Il ne convient pas à la création quotidienne de cartes, à la synchronisation ou aux modifications répétées par un logiciel.

### Pour afficher une activité, utilisez l'intégration officielle dans une page

Si les apprenants doivent réviser un set Quizlet public depuis le site d'un cours ou une page de LMS, utilisez le code d'intégration fourni sur le site web de Quizlet. Choisissez l'activité, sélectionnez **Copier le HTML (Copy HTML)** et ajoutez le résultat à la page. Les apprenants disposent d'une activité Quizlet interactive ; le site qui l'accueille ne reçoit aucun flux de données brutes des cartes.

Cela suffit souvent à un enseignant. Parler d'API rend simplement le besoin plus compliqué qu'il ne l'est.

### Pour ChatGPT ou Google Classroom, utilisez l'intégration prévue

L'annonce ChatGPT publiée par Quizlet le 10 mars 2026 décrit un parcours précis : connecter l'application Quizlet, commencer une demande avec `@Quizlet`, voir l'aperçu du set généré dans ChatGPT, puis l'ouvrir dans Quizlet pour le personnaliser et réviser. C'est une façon officiellement prise en charge de créer un set Quizlet à partir de cette conversation. Elle ne fournit pas d'identifiants d'accès à l'API Quizlet réutilisables par votre bot, votre script ou votre site web.

L'annonce Google Classroom de Quizlet du 30 juin 2026 est tout aussi précise. Le module complémentaire permet aux enseignants de trouver et d'assigner des activités, notamment des questions d'entraînement, des flashcards et des jeux, puis de suivre la participation et les progrès dans Classroom. Quizlet indique qu'il nécessite Google Workspace for Education Plus ; les enseignants peuvent avoir besoin que leur administrateur informatique leur accorde les autorisations nécessaires ou mette le module à leur disposition.

Si l'un de ces parcours répond déjà à votre objectif, utilisez-le. Si vous avez besoin d'une application sur mesure, aucune de ces intégrations ne remplace un accès public pour les développeurs.

### Pour une automatisation régulière, choisissez une interface documentée en lecture et écriture

Une automatisation régulière exige que votre logiciel puisse effectuer le même travail de façon fiable à plusieurs reprises : créer des cartes à partir de notes, lister les paquets, mettre à jour les réponses ou gérer un espace de travail dans la durée. Un export par le presse-papiers ne peut pas fournir ce contrat.

La solution sûre est un système de flashcards qui documente explicitement l'authentification des logiciels externes et les opérations de lecture et d'écriture qu'il prend en charge. Cela peut vous conduire à choisir une alternative à l'API Quizlet pour le travail automatisé, tout en conservant Quizlet pour les activités de révision proposées par son application.

## Ce que propose réellement Nibomo comme alternative à l'API Quizlet

Nibomo publie deux voies d'accès au même ensemble limité de données propres à chaque utilisateur :

- L'[Agent API externe](/fr/docs/api/) a pour point d'entrée `GET https://api.nibomo.com/v1/`. La réponse de découverte guide un agent dans les étapes de connexion par code à usage unique envoyé par e-mail, de création d'une clé API et de sélection d'un espace de travail. Les lectures utilisent une route de requête de type SQL ; les écritures passent par une route d'exécution distincte.
- Le [serveur MCP distant](/fr/docs/mcp-connector/) est disponible à `https://mcp.nibomo.com/mcp`. Les clients MCP disposent de huit outils : `list_workspaces`, `sql_query`, `sql_execute`, `get_guide` et les outils de révision `next_review_card`, `reveal_answer` et `submit_review`.

`get_usage_limits` permet de consulter, strictement en lecture seule, la formule du compte, ses limites et sa consommation d'IA pour le mois en cours ; cet outil ne lit ni ne modifie les cartes.

Les deux voies d'accès sont limitées à un espace de travail donné. Les ressources publiées sont `workspace`, `cards`, `decks` et `review_events`, et les résultats sont plafonnés à 100 lignes par instruction. L'interface de type SQL utilise un dialecte limité, pas du PostgreSQL brut. Il n'existe aucun schéma OpenAPI : les processus qui reposent sur des clients générés à partir d'OpenAPI auront donc besoin d'une autre interface.

Cela peut aider un développeur ou un agent IA à automatiser la gestion de ses propres flashcards. Cela ne permet pas de lire une URL Quizlet, de maintenir une copie synchronisée d'un compte Quizlet ou d'agir comme un client Quizlet non documenté. Il n'existe aucun import automatique depuis Quizlet. Pour une migration, exportez d'abord les termes et les définitions de votre propre set, relisez le texte, puis faites correspondre son contenu aux champs des cartes de destination. Le système de destination crée son propre état de révision ; l'historique Quizlet n'est pas transféré.

Pour les différences entre les produits au-delà de l'accès API, consultez le [comparatif avec une alternative open source à Quizlet](/blog/quizlet-alternative/).

## Les requêtes privées du navigateur ne sont pas un raccourci sûr

L'interface web de Quizlet envoie des requêtes réseau, comme toute application web moderne. Trouver l'une de ces requêtes n'en fait pas un point d'accès pris en charge pour votre programme.

Les points d'accès privés du navigateur peuvent dépendre de cookies de session, de formats internes, de mécanismes de protection contre les abus et d'hypothèses liées à l'interface actuelle. Ils peuvent changer sans versionnement public ni instructions de migration. Plus directement, les [conditions d'utilisation de Quizlet](https://quizlet.com/tos), mises à jour pour la dernière fois le 28 mai 2026, interdisent le scraping et les autres formes d'extraction automatisée, ainsi que l'utilisation automatisée non autorisée du service.

C'est une base fragile et risquée pour un script personnel, et plus encore pour un produit. Je ne fournirai ici ni points d'accès supposés ni étapes de rétro-ingénierie.

Pour votre propre set, utilisez l'export si vous avez besoin d'un transfert ponctuel. Intégrez un set public dans une page si les apprenants doivent y accéder depuis cette page. Utilisez les intégrations ChatGPT ou Google Classroom pour les parcours précis auxquels elles sont destinées. Pour des lectures et des écritures régulières, choisissez un logiciel qui documente son contrat d'automatisation, ou gardez la partie Quizlet manuelle jusqu'à ce que Quizlet en publie un.

## Comment savoir si la situation change

Quizlet pourrait lancer un programme pour les développeurs après la date de vérification des informations de cet article. Le signal à rechercher est un portail officiel pour les développeurs ou une documentation expliquant qui peut s'inscrire, comment fonctionne l'authentification, quelles opérations sur les cartes sont prises en charge et quelles règles d'utilisation s'appliquent.

Un nouveau wrapper tiers ne changerait pas la réponse. Une nouvelle collaboration avec un partenaire précis non plus. Tant que Quizlet ne documente pas un accès en libre-service pour les développeurs, examinez avec prudence les affirmations sur l'existence actuelle d'une API Quizlet et choisissez la solution prise en charge qui correspond à votre besoin réel.
