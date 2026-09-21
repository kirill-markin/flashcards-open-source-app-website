---
title: "Cómo conectar Nibomo Flashcards a Claude con MCP"
description: "Conecta Nibomo a Claude Desktop o a Claude en el navegador con un conector MCP remoto. Sigue los pasos de conexión verificados, configura los permisos de las herramientas y prueba a guardar tu primera tarjeta."
date: "2026-06-23"
updated: "2026-09-20"
image: "/blog/how-to-connect-nibomo-to-claude-mcp.png"
keywords:
  - "conector Nibomo Claude"
  - "tarjetas Claude MCP"
  - "conectar Nibomo a Claude"
  - "crear tarjetas en Claude"
---

Claude puede guardar tarjetas directamente en tu espacio de trabajo de Nibomo mediante un conector MCP personalizado. Añades la URL de un servidor, inicias sesión en Nibomo y eliges qué acciones puede ejecutar Claude sin pedirte permiso cada vez.

La configuración que aparece a continuación se comprobó en Claude Desktop el 20 de septiembre de 2026. Los pasos sirven para el conector remoto que usan las conversaciones de Claude en la aplicación de escritorio y en el navegador. Para Claude Code, Codex u otro agente de terminal, consulta la [guía de inicio de sesión para agentes](/es/blog/claude-code-codex-openclaw-flashcards-login/).

![Una entrega de material en una biblioteca ilustra el acceso de lectura y la aprobación antes de hacer cambios](/blog/how-to-connect-nibomo-to-claude-mcp.png)

## Añade Nibomo en los ajustes de conectores de Claude

Necesitarás una cuenta de Nibomo y acceso a los conectores personalizados de Claude. Nibomo usa un servidor MCP remoto, así que no tienes que instalar nada localmente. Anthropic explica este método de conexión en su [guía de conectores personalizados](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp).

1. Abre **Settings > Connectors** (Ajustes > Conectores) en Claude Desktop, o abre [Conectores en el navegador](https://claude.ai/customize/connectors).
2. Elige **Add custom connector** para añadir un conector personalizado.
3. Escribe **Nibomo** como nombre y pega esta URL del servidor:

   ```text
   https://mcp.nibomo.com/mcp
   ```

4. Haz clic en **Continue** para continuar.
5. En la pantalla de autenticación, deja seleccionadas las opciones **Sign in now** (iniciar sesión ahora) y **Register automatically (DCR)** (registrar automáticamente). Mantén los valores predeterminados de las cabeceras personalizadas y los ajustes avanzados.
6. Haz clic en **Add** para añadirlo y después en **Connect** para conectarlo.

![Cuadro Add custom connector de Claude con Nibomo y la URL del servidor MCP](/blog/claude-mcp-nibomo-add-connector.png)

## Inicia sesión y permite el acceso

Claude abre un navegador para completar la conexión. Si primero muestra una confirmación, elige **Continue connecting** para continuar con la conexión.

La página de autenticación de Nibomo usa `auth.flashcards-open-source-app.com`. Puede reconocer una sesión de Nibomo existente; si no lo hace, inicia sesión en tu cuenta. La pantalla de consentimiento dice **Claude wants to connect to your Nibomo account** —Claude quiere conectarse a tu cuenta de Nibomo— y describe el acceso para leer y escribir tarjetas y datos de repaso.

Comprueba que estás conectando la cuenta que quieres y haz clic en **Allow access** para permitir el acceso. Cuando la página muestre **Connected** (conectado), elige **Open desktop app** para abrir la aplicación de escritorio si usas Claude Desktop. De vuelta en los ajustes de conectores, deberías ver **Nibomo** con `https://mcp.nibomo.com/mcp`.

## Exige aprobación para las acciones de escritura

El conector tiene herramientas para leer tu material de estudio, modificarlo y registrar repasos. Abre Nibomo en **Settings > Connectors** para revisar los permisos de sus herramientas. Para la configuración que se muestra aquí, establece las cinco herramientas de lectura en **Always allow** (permitir siempre) y deja las dos herramientas de escritura en **Needs approval** (requiere aprobación):

| Permiso | Herramientas |
| --- | --- |
| **Always allow** | Get flashcards usage guide; List flashcards workspaces; Next flashcard question; Reveal flashcard answer; Nibomo SQL query (read-only) |
| **Needs approval** | Nibomo SQL execute (write); Submit flashcard review |

Esto permite que Claude encuentre un espacio de trabajo y lea tarjetas, pero le obliga a pedir permiso antes de modificar datos o registrar un repaso. Puedes elegir permisos más estrictos si también quieres aprobar las lecturas.

![Nibomo conectado en Claude con las herramientas de lectura permitidas y las de escritura sujetas a aprobación](/blog/claude-mcp-flashcards-connector-settings.png)

## Prueba con una tarjeta y comprueba que se ha guardado

Abre una conversación y asegúrate de que Nibomo está activado en el menú de conectores del chat. Empieza con una petición sencilla que indique claramente el destino y el contenido de la tarjeta:

```text
Usa Nibomo para listar mis espacios de trabajo y pregúntame cuál usar.
Después, crea una tarjeta:
Anverso: ¿Qué significa HTTP 404?
Reverso: El recurso solicitado no se encontró en el servidor.
Etiqueta: web-basics
```

Elige el espacio de trabajo, revisa la solicitud de escritura de Claude y apruébala si el contenido y el destino son correctos. Después, abre [Nibomo](https://app.nibomo.com/) y comprueba que la tarjeta guardada tiene la pregunta en el anverso y la respuesta en el reverso. Al verificar los pasos anteriores se comprobaron la conexión y los permisos guardados; no se creó ninguna tarjeta. Esta primera prueba te permite comprobar que Claude también puede guardar una tarjeta en el espacio de trabajo que has elegido.

Si Claude solo escribe la tarjeta en el chat, comprueba que Nibomo está conectado en los ajustes, activado para esa conversación y que la herramienta **Nibomo SQL execute (write)** no está bloqueada. Pídele explícitamente que guarde la tarjeta a través de Nibomo.

Para crear lotes más grandes, [Cómo usar Claude para crear tarjetas](/es/blog/how-to-use-claude-to-make-flashcards/) explica cómo redactar preguntas y respuestas útiles. Si estás estudiando códigos HTTP, también puedes empezar con el [mazo de tarjetas de códigos de estado HTTP](/es/catalog/packages/http-status-code-flashcards/).

## Si ya usas la URL anterior del conector

El endpoint anterior, `https://mcp.flashcards-open-source-app.com/mcp`, sigue funcionando. Usa `https://mcp.nibomo.com/mcp` para una conexión nueva y ten en cuenta que tendrás que volver a autorizar Nibomo al cambiar de URL.

Para seguir la secuencia comprobada en esta guía, abre el conector anterior en **Settings > Connectors**, elige **Disconnect** para desconectarlo y después **More options > Remove** (Más opciones > Eliminar). Añade Nibomo siguiendo los pasos anteriores y confirma que muestra la URL nueva y las herramientas esperadas.

Si acabas de empezar con la app, [Primeros pasos](/es/docs/getting-started/) explica cómo usar el espacio de trabajo y estudiar después de guardar tu primera tarjeta.
