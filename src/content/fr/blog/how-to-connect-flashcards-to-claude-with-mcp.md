---
title: "Comment connecter les flashcards Nibomo à Claude avec MCP"
description: "Connectez Nibomo à Claude Desktop ou à Claude dans le navigateur avec un connecteur MCP distant. Suivez les étapes vérifiées, réglez les autorisations des outils et essayez d’enregistrer votre première carte."
date: "2026-06-23"
updated: "2026-09-20"
image: "/blog/how-to-connect-nibomo-to-claude-mcp.png"
keywords:
  - "connecteur Nibomo Claude"
  - "flashcards Claude MCP"
  - "connecter Nibomo à Claude"
  - "créer des cartes mémoire dans Claude"
---

Claude peut enregistrer des cartes mémoire directement dans votre espace de travail Nibomo grâce à un connecteur MCP personnalisé. Vous ajoutez une URL de serveur, vous vous connectez à Nibomo et vous choisissez les actions que Claude peut effectuer sans vous demander votre accord à chaque fois.

La configuration ci-dessous a été vérifiée dans Claude Desktop le 20 septembre 2026. Elle concerne le connecteur distant utilisé dans les conversations habituelles de Claude, dans l’application de bureau comme dans le navigateur. Pour Claude Code, Codex ou un autre agent en ligne de commande, consultez le [guide de connexion des agents](/blog/claude-code-codex-openclaw-flashcards-login/).

![Une remise de documents dans une bibliothèque illustre l’accès en lecture et l’accord requis avant toute modification](/blog/how-to-connect-nibomo-to-claude-mcp.png)

## Ajoutez Nibomo dans les paramètres des connecteurs de Claude

Il vous faut un compte Nibomo et l’accès aux connecteurs personnalisés dans Claude. Nibomo utilise un serveur MCP distant : vous n’avez donc rien à installer en local. Anthropic décrit cette méthode de connexion dans son [guide des connecteurs personnalisés](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp).

1. Ouvrez **Settings > Connectors** dans Claude Desktop, ou la [page Connectors dans le navigateur](https://claude.ai/customize/connectors).
2. Choisissez **Add custom connector**.
3. Saisissez **Nibomo** comme nom et collez cette URL de serveur :

   ```text
   https://mcp.nibomo.com/mcp
   ```

4. Cliquez sur **Continue**.
5. Sur l’écran d’authentification, gardez **Sign in now** et **Register automatically (DCR)** sélectionnés. Laissez les en-têtes personnalisés et les paramètres avancés à leurs valeurs par défaut.
6. Cliquez sur **Add**, puis sur **Connect**.

![La fenêtre Add custom connector de Claude avec le nom Nibomo et l’URL du serveur MCP](/blog/claude-mcp-nibomo-add-connector.png)

## Connectez-vous et autorisez l’accès

Claude ouvre un navigateur pour terminer la connexion. Si une confirmation s’affiche d’abord, choisissez **Continue connecting**.

La page d’authentification de Nibomo utilise `auth.flashcards-open-source-app.com`. Elle peut reconnaître une session Nibomo existante ; sinon, connectez-vous à votre compte. L’écran de consentement affiche **Claude wants to connect to your Nibomo account** et décrit l’accès en lecture et en écriture aux cartes et aux données de révision.

Vérifiez que vous connectez le bon compte, puis cliquez sur **Allow access**. Quand la page affiche **Connected**, choisissez **Open desktop app** si vous utilisez Claude Desktop. De retour dans les paramètres des connecteurs, vous devriez voir **Nibomo** avec l’URL `https://mcp.nibomo.com/mcp`.

## Soumettez les écritures à votre approbation

Le connecteur propose des outils pour lire vos supports d’étude, les modifier et enregistrer des révisions. Ouvrez Nibomo dans **Settings > Connectors** pour consulter les autorisations de ses outils. Pour reproduire la configuration présentée ici, réglez les cinq outils de lecture sur **Always allow** et gardez les deux outils d’écriture sur **Needs approval** :

| Autorisation | Outils |
| --- | --- |
| **Always allow** | Get flashcards usage guide; List flashcards workspaces; Next flashcard question; Reveal flashcard answer; Nibomo SQL query (read-only) |
| **Needs approval** | Nibomo SQL execute (write); Submit flashcard review |

Claude peut ainsi trouver un espace de travail et lire des cartes, tout en demandant votre accord avant de modifier des données ou de soumettre une révision. Vous pouvez choisir des autorisations plus strictes si vous voulez aussi approuver les lectures.

![Nibomo connecté dans Claude, avec les outils de lecture autorisés et les outils d’écriture soumis à approbation](/blog/claude-mcp-flashcards-connector-settings.png)

## Essayez avec une carte et vérifiez son enregistrement

Ouvrez une conversation et assurez-vous que Nibomo est activé dans le menu des connecteurs de cette conversation. Commencez par une petite demande qui précise la destination et le contenu de la carte :

```text
Utilise Nibomo pour lister mes espaces de travail et me demander lequel utiliser.
Crée ensuite une carte mémoire :
Recto : Que signifie le code HTTP 404 ?
Verso : La ressource demandée n’a pas été trouvée sur le serveur.
Étiquette : web-basics
```

Choisissez l’espace de travail, examinez la demande d’écriture de Claude et approuvez-la si le contenu et la destination sont corrects. Ouvrez ensuite [Nibomo](https://app.nibomo.com/) et vérifiez que la carte enregistrée contient la question au recto et la réponse au verso. La procédure ci-dessus a permis de vérifier la connexion et l’enregistrement des autorisations ; aucune carte n’a été créée lors de cette vérification. Ce premier essai sert à vérifier que Claude peut aussi enregistrer une carte dans l’espace de travail choisi.

Si Claude se contente d’écrire la carte dans la conversation, vérifiez que Nibomo est connecté dans les paramètres, activé pour cette conversation et que **Nibomo SQL execute (write)** n’est pas bloqué. Demandez-lui explicitement d’enregistrer la carte via Nibomo.

Pour créer des lots plus importants, le guide [Comment utiliser Claude pour créer des cartes mémoire](/blog/how-to-use-claude-to-make-flashcards/) explique comment rédiger des questions et des réponses utiles. Si vous étudiez les codes HTTP, vous pouvez aussi commencer par le [paquet de cartes sur les codes de statut HTTP](/catalog/packages/http-status-code-flashcards/) existant.

## Si vous utilisez déjà l’ancienne URL du connecteur

L’ancien point d’accès `https://mcp.flashcards-open-source-app.com/mcp` fonctionne toujours. Utilisez `https://mcp.nibomo.com/mcp` pour une nouvelle connexion et prévoyez d’autoriser à nouveau Nibomo si vous changez d’URL.

Pour suivre la procédure vérifiée pour ce guide, ouvrez l’ancien connecteur dans **Settings > Connectors**, choisissez **Disconnect**, puis **More options > Remove**. Ajoutez Nibomo en suivant les étapes ci-dessus et confirmez que la nouvelle URL et les outils attendus s’affichent.

Si vous découvrez l’application, le [guide de démarrage](/docs/getting-started/) présente l’espace de travail et le déroulement des révisions après l’enregistrement de votre première carte.
