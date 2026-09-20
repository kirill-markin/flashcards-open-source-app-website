---
title: "Comment connecter Nibomo à ChatGPT avec MCP"
description: "Connectez Nibomo à ChatGPT avec l’URL de son serveur MCP, autorisez l’accès via OAuth, choisissez les permissions et vérifiez la connexion en enregistrant une carte."
date: "2026-09-20"
image: "/blog/how-to-connect-nibomo-to-chatgpt-with-mcp.png"
keywords:
  - "connecter Nibomo à ChatGPT"
  - "Nibomo ChatGPT MCP"
  - "connecteur de cartes de révision ChatGPT"
  - "configuration MCP Nibomo"
---

Pour connecter Nibomo à ChatGPT, ajoutez son serveur MCP comme plugin personnalisé, puis connectez-vous à votre compte Nibomo. Les deux étapes sont nécessaires : Nibomo peut apparaître sur la page **Plugins** de ChatGPT avant que vous ayez terminé de vous connecter.

La connexion utilise MCP, un protocole qui permet à un assistant IA d’utiliser les outils d’une autre application. Vous saisissez l’adresse d’un serveur, autorisez l’accès, puis demandez à ChatGPT de travailler sur vos cartes de révision en langage courant. Aucune programmation n’est nécessaire.

![Un fleuriste présente un bouquet d’essai à un client pour obtenir son accord avant de préparer les autres](/blog/how-to-connect-nibomo-to-chatgpt-with-mcp.png)

Cette configuration passe par le mode développeur de ChatGPT. Vous ajouterez Nibomo directement à partir de l’URL de son serveur.

**Ce que nous avons pu vérifier :** Nous avons réalisé les captures d’écran le 20 septembre 2026 et enregistré le plugin personnalisé. La fenêtre de connexion ne s’est pas ouverte dans notre navigateur intégré. Nous n’avons donc pas pu terminer l’authentification OAuth ni tester les appels d’outils nécessitant une connexion au compte. Les instructions ci-dessous vous permettent de vérifier votre propre connexion ; nous n’avons pas vérifié la création de cartes avec cette configuration.

## Ajouter un plugin personnalisé

Vous aurez besoin d’un compte Nibomo et d’un compte ou d’un espace de travail ChatGPT donnant accès aux connexions MCP personnalisées. Si vous n’avez pas encore utilisé Nibomo, commencez par le [guide de démarrage](/docs/getting-started/) pour disposer d’un espace de travail à sélectionner.

Dans les paramètres de ChatGPT, ouvrez **Settings → Security and login → Developer mode** et activez le mode développeur. Ouvrez ensuite **Plugins**, puis utilisez le bouton **+** ou l’option **Create app** (« Créer une application ») pour ajouter une connexion. Lors de notre session, le formulaire s’intitulait **New Plugin** (« Nouveau plugin »). OpenAI décrit cette procédure dans son [guide Connect to ChatGPT](https://developers.openai.com/plugins/deploy/connect-chatgpt).

La disponibilité des options et leurs libellés peuvent varier selon le compte et l’espace de travail. Si le mode développeur ou l’option de création n’apparaît pas, consultez le guide officiel et les restrictions de votre espace de travail.

Remplissez le formulaire :

| Champ | Valeur |
| --- | --- |
| Name — nom | `Nibomo` |
| Description | `Consultez, créez et modifiez vos cartes, puis révisez-les grâce à la répétition espacée.` |
| Connection — connexion | Server URL — URL du serveur |
| Server URL — URL du serveur | `https://mcp.nibomo.com/mcp` |
| Authentication — authentification | OAuth |

Utilisez l’adresse complète, y compris le `/mcp` final. La description est facultative ; elle vous aide à reconnaître la connexion par la suite. Vous n’avez pas besoin de générer une clé API pour cette configuration OAuth.

![Formulaire New Plugin de ChatGPT avec l’URL du serveur MCP de Nibomo et l’authentification OAuth sélectionnée](/blog/chatgpt-mcp-nibomo-create-connector.png)

Lisez l’avertissement concernant les serveurs personnalisés, confirmez en avoir pris connaissance si vous souhaitez continuer, puis cliquez sur **Create** (« Créer »). Le bouton se trouve sous la zone visible dans la capture. La connexion personnalisée est alors ajoutée à votre compte. Sa présence ne signifie pas que Nibomo a été examiné ou référencé dans l’annuaire public d’OpenAI.

## Terminer la connexion à Nibomo

Dans la fenêtre **Add Nibomo to ChatGPT** (« Ajouter Nibomo à ChatGPT »), cliquez sur **Sign in with Nibomo** (« Se connecter avec Nibomo »), puis terminez la procédure d’autorisation avec le compte Nibomo qui contient vos cartes.

![Fenêtre Add Nibomo to ChatGPT avec le bouton Sign in with Nibomo, avant la connexion au compte](/blog/chatgpt-mcp-nibomo-sign-in.png)

Le service d’authentification de Nibomo utilise `auth.flashcards-open-source-app.com`. Il est normal de voir ce nom de domaine pendant la connexion, même si l’adresse MCP utilise `mcp.nibomo.com`.

Si aucune fenêtre de connexion ne s’ouvre, essayez la procédure dans votre navigateur habituel. Pour relancer la connexion, ouvrez **Nibomo → Plugin actions (…) → Manage → Connect another account** (« Connecter un autre compte »). Utilisez ensuite la vérification des espaces de travail décrite ci-dessous pour confirmer que ChatGPT peut accéder à votre compte.

## Choisir quand ChatGPT doit demander votre accord

Dans **Settings → Plugins → Permissions**, l’écran que nous avons capturé propose **Always ask** (« Toujours demander »), **Allow read actions** (« Autoriser les actions de lecture ») et **Allow low-risk actions** (« Autoriser les actions à faible risque »).

Choisissez **Allow read actions** pour autoriser ChatGPT à afficher les espaces de travail et à lire les cartes sans vous demander votre accord, tout en exigeant une validation avant les modifications. Choisissez **Always ask** si vous souhaitez aussi donner votre accord avant chaque lecture.

![Autorisations des plugins ChatGPT avec l’option Allow read actions sélectionnée](/blog/chatgpt-mcp-nibomo-permissions.png)

Ce réglage est global : il s’applique à l’ensemble des plugins. Toute modification concerne donc aussi vos autres plugins.

Pour Nibomo, afficher les espaces de travail, lire les cartes, récupérer les instructions, obtenir la prochaine question à réviser et révéler une réponse sont des actions de lecture. Créer ou modifier des cartes et enregistrer le résultat d’une révision sont des actions d’écriture. Vous pourrez voir des noms d’outils comme `list_workspaces`, `sql_query` ou `sql_execute` dans l’activité de ChatGPT, mais vous n’avez pas besoin d’écrire du SQL vous-même. La [documentation du connecteur MCP](/docs/mcp-connector/) décrit cette interface.

## Vérifier la connexion avec une seule carte

Ouvrez une conversation avec Nibomo sélectionné. Commencez par une demande qui ne modifie rien :

> Utilise Nibomo pour afficher mes espaces de travail. Ne crée et ne modifie rien.

Vérifiez que les espaces de travail affichés appartiennent bien à votre compte. Si ChatGPT ne peut pas appeler Nibomo ou vous demande de connecter un compte, revenez à l’étape de connexion au compte. Une fois la liste affichée, indiquez précisément dans quel espace de travail enregistrer la carte.

Demandez ensuite une proposition de carte :

> Propose une carte de révision sur le code HTTP 404. Mets uniquement une question au recto et la réponse au verso. Montre-moi les deux faces avant d’enregistrer quoi que ce soit.

Voici un exemple de carte adapté :

| Face | Contenu |
| --- | --- |
| Recto | Que signifie le code de statut HTTP 404 ? |
| Verso | Le serveur n’a pas trouvé la ressource demandée. Par exemple, l’URL peut pointer vers une page qui n’existe pas. |

Lorsque la proposition vous convient, indiquez la destination :

> Enregistre cette seule carte dans mon espace de travail Nibomo [nom de l’espace de travail]. Ne crée aucune autre carte.

Vérifiez la carte et l’espace de travail dans la demande de confirmation de ChatGPT avant d’autoriser l’écriture. Demandez ensuite à ChatGPT de récupérer la carte enregistrée dans Nibomo et de vous en afficher le contenu. Ouvrez Nibomo sur le Web ou sur votre téléphone avec le même compte, sélectionnez cet espace de travail et laissez la synchronisation se terminer. Retrouvez la carte et vérifiez ses deux faces dans l’application pour confirmer qu’elle a été correctement enregistrée.

## Si la connexion ne fonctionne toujours pas

Vérifiez d’abord l’URL configurée : `https://mcp.nibomo.com/mcp`. L’ancien nom de domaine MCP fonctionne toujours, mais si vous remplacez l’adresse d’une connexion existante par la nouvelle, connectez-vous à nouveau. Les jetons d’autorisation sont liés à l’adresse du serveur.

Si ChatGPT signale un échec d’enregistrement, demandez-lui de consulter l’espace de travail avant de tenter un nouvel enregistrement. Vous éviterez ainsi de créer un doublon lorsque le résultat du premier essai est incertain. Si la carte existe sur le serveur mais n’apparaît pas sur votre téléphone, vérifiez le compte, l’espace de travail et l’état de la synchronisation sur celui-ci.

Une fois ce test terminé, vous pouvez suivre la même méthode — proposition de carte, puis validation — pour vos propres supports de révision. Le [guide de création de cartes avec ChatGPT](/blog/how-to-use-chatgpt-to-make-flashcards/) explique comment choisir des questions utiles et limiter chaque carte à un seul point.
