---
title: "How to Connect Nibomo Flashcards to Claude with MCP"
description: "Connect Nibomo to Claude Desktop or the browser with a remote MCP connector. Follow the verified connection steps, set tool permissions, and try saving your first flashcard."
date: "2026-06-23"
updated: "2026-09-20"
image: "/blog/how-to-connect-nibomo-to-claude-mcp.png"
keywords:
  - "Nibomo Claude connector"
  - "Claude MCP flashcards"
  - "connect Nibomo to Claude"
  - "create flashcards in Claude"
---

Claude can save flashcards directly to your Nibomo workspace through a custom MCP connector. You add one server URL, sign in to Nibomo, and choose which actions Claude can run without asking each time.

The setup below was checked in Claude Desktop on September 20, 2026. It covers the remote connector used by regular Claude chats in Desktop and the browser. For Claude Code, Codex, or another terminal agent, use the separate [agent login guide](/blog/claude-code-codex-openclaw-flashcards-login/).

![A library handover illustrating access to read material and approval before changes](/blog/how-to-connect-nibomo-to-claude-mcp.png)

## Add Nibomo in Claude's connector settings

You'll need a Nibomo account and access to custom connectors in Claude. Nibomo uses a remote MCP server, so there's nothing to install locally. Anthropic documents this connection method in its [custom connector guide](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp).

1. Open **Settings > Connectors** in Claude Desktop, or open [Connectors in the browser](https://claude.ai/customize/connectors).
2. Choose **Add custom connector**.
3. Enter **Nibomo** as the name and paste this server URL:

   ```text
   https://mcp.nibomo.com/mcp
   ```

4. Click **Continue**.
5. On the authentication screen, keep **Sign in now** and **Register automatically (DCR)** selected. Leave custom headers and advanced settings at their defaults.
6. Click **Add**, then **Connect**.

![Claude's Add custom connector dialog with Nibomo and the MCP server URL](/blog/claude-mcp-nibomo-add-connector.png)

## Sign in and allow access

Claude opens a browser to finish the connection. If it shows a confirmation first, choose **Continue connecting**.

The Nibomo authentication page uses `auth.flashcards-open-source-app.com`. It may recognize an existing Nibomo session; otherwise, sign in to your account. The consent screen says **Claude wants to connect to your Nibomo account** and describes access to read and write flashcards and review data.

Check that you're connecting the intended account, then click **Allow access**. When the page shows **Connected**, choose **Open desktop app** if you're using Claude Desktop. Back in connector settings, you should see **Nibomo** with `https://mcp.nibomo.com/mcp`.

## Keep writes on approval

The connector has tools for reading your study material, changing it, and recording reviews. Open Nibomo in **Settings > Connectors** to review its tool permissions. For the setup shown here, set the five read tools to **Always allow** and keep the two write tools on **Needs approval**:

| Permission | Tools |
| --- | --- |
| **Always allow** | Get flashcards usage guide; List flashcards workspaces; Next flashcard question; Reveal flashcard answer; Nibomo SQL query (read-only) |
| **Needs approval** | Nibomo SQL execute (write); Submit flashcard review |

This lets Claude find a workspace and read cards while asking before it changes data or submits a review. You can choose stricter permissions if you want to approve reads too.

![Nibomo connected in Claude with read tools allowed and write tools requiring approval](/blog/claude-mcp-flashcards-connector-settings.png)

## Try one card and check that it was saved

Open a conversation and make sure Nibomo is enabled in the chat's connector menu. Start with a small request that makes the destination and card content explicit:

```text
Use Nibomo to list my workspaces and ask me which one to use.
Then create one flashcard:
Front: What does HTTP 404 mean?
Back: The requested resource was not found on the server.
Tag: web-basics
```

Choose the workspace, review Claude's write request, and approve it if the content and destination are correct. Then open [Nibomo](https://app.flashcards-open-source-app.com/) and check that the saved card has the question on the front and the answer on the back. The walkthrough above verified the connection and saved permissions; it did not create a card. This first test checks that Claude can also save a card to your chosen workspace.

If Claude only writes the card in chat, check that Nibomo is connected in settings, enabled for that conversation, and that **Nibomo SQL execute (write)** isn't blocked. Ask it explicitly to save the card through Nibomo.

For larger batches, [How to Use Claude to Make Flashcards](/blog/how-to-use-claude-to-make-flashcards/) covers drafting useful questions and answers. If you're studying HTTP codes, you can also start with the existing [HTTP Status Code Flashcards deck](/catalog/packages/http-status-code-flashcards/).

## If you already use the older connector URL

The older `https://mcp.flashcards-open-source-app.com/mcp` endpoint still works. Use `https://mcp.nibomo.com/mcp` for a new connection, and expect to authorize Nibomo again when switching URLs.

To follow the sequence checked for this guide, open the older connector in **Settings > Connectors**, choose **Disconnect**, then **More options > Remove**. Add Nibomo using the steps above and confirm that it shows the new URL and the expected tools.

If you're new to the app, [Getting Started](/docs/getting-started/) covers the workspace and study flow after your first card is saved.
