---
title: "Cómo conectar Flashcards a Claude con MCP y crear tarjetas desde el chat"
description: "Una guía práctica para añadir el conector personalizado de Flashcards en Claude, revisar los permisos adecuados y pedirle a Claude que cree tarjetas de estudio directamente en tu workspace de Flashcards."
date: "2026-06-23"
image: "/blog/how-to-connect-flashcards-to-claude-with-mcp.png"
keywords:
  - "Claude MCP flashcards"
  - "cómo conectar Flashcards a Claude"
  - "conector personalizado de Flashcards para Claude"
  - "crear tarjetas en Claude"
  - "conector MCP de Flashcards"
  - "Claude con Flashcards"
  - "conector Claude Flashcards"
  - "tarjetas con Claude MCP"
  - "Flashcards remote MCP"
  - "workspace de Flashcards en Claude"
---

Ayer añadí una tarjeta de prueba a Flashcards desde Claude en menos de un minuto. La parte útil no fue la demo. La parte útil fue ver a Claude preguntar qué workspace usar, pedir aprobación para la acción de escritura y dejar la tarjeta dentro de la app real en vez de dejarla atrapada en el chat.

Esa es la razón práctica para buscar ahora mismo **Claude MCP flashcards**.

Si quieres que Claude cree tarjetas directamente en tu workspace de Flashcards, la configuración es corta: añade el conector personalizado de Flashcards, revisa los permisos de las herramientas, actívalo dentro del chat y aprueba la llamada de escritura cuando Claude esté listo para guardar una tarjeta.

![Claude conectado al servidor MCP de Flashcards para crear flashcards desde el chat](/blog/how-to-connect-flashcards-to-claude-with-mcp.png)

## Esto es un conector personalizado, no una app listada en ningún directorio

Primero, un detalle importante: Flashcards se conecta a Claude como un **conector personalizado** usando **remote MCP**.

Así que no te pongas a buscar una app de Flashcards ya listada dentro del directorio oficial de conectores de Claude. El flujo normal es abrir la [página de configuración de conectores](https://claude.ai/customize/connectors) de Claude, pulsar el botón `+`, elegir **Add custom connector** y pegar tú mismo la URL del MCP de Flashcards.

La URL exacta del conector de Flashcards es esta:

`https://mcp.flashcards-open-source-app.com/mcp`

Enlace directo: [mcp.flashcards-open-source-app.com/mcp](https://mcp.flashcards-open-source-app.com/mcp)

## Antes de conectarlo

Hay dos detalles que importan más de lo que parecen.

El primero es que Claude accede a los servidores remote MCP desde la infraestructura en la nube de Anthropic, no desde tu portátil. Eso significa que el servidor tiene que estar accesible en la Internet pública. Flashcards ya lo está, así que el endpoint MCP público de arriba es el que necesitas.

El segundo es que conviene tratar los permisos del conector como permisos reales de herramientas. Conéctalo solo a servidores en los que confíes, revisa lo que puede hacer cada herramienta y lee con cuidado las solicitudes de aprobación antes de permitir acciones de escritura.

## Cómo añadir el conector MCP de Flashcards en Claude

Para una cuenta individual de Claude, la ruta de configuración es esta:

1. Abre [Customize > Connectors](https://claude.ai/customize/connectors).
2. Haz clic en `+`.
3. Elige **Add custom connector**.
4. Escribe un nombre para el conector y pega `https://mcp.flashcards-open-source-app.com/mcp`.
5. Añade el conector.
6. Haz clic en **Connect** y completa el login si Claude te lo pide.
7. Revisa los permisos de las herramientas antes de empezar a usarlo en tus chats.

Si estás en un workspace Team o Enterprise, un Owner o Primary Owner puede añadir el conector personalizado desde **Organization settings > Connectors > Add > Custom > Web**. Aun así, cada usuario tiene que conectarlo y autenticarse por su lado.

## Configura los primeros permisos de forma conservadora

El conector de Flashcards que se ve aquí expone una superficie pequeña de herramientas:

- `list_workspaces` para listar los workspaces disponibles
- `sql_query` para acceso de lectura
- `sql_execute` para acciones de escritura, como crear tarjetas

Claude te deja poner cada herramienta en **Always allow**, **Needs approval** o **Blocked**.

Para una primera configuración, yo dejaría las herramientas de solo lectura en **Always allow** y la herramienta de escritura en **Needs approval**. Con eso, Claude tiene margen suficiente para inspeccionar tus workspaces y leer datos sin convertir la creación de tarjetas en una acción en segundo plano sin revisión.

Eso mismo muestra la captura de configuración del conector: `list_workspaces` y `sql_query` están permitidas, mientras que `sql_execute` sigue necesitando tu aprobación.

![Configuración del conector de Claude con los permisos del MCP de Flashcards, con las herramientas de lectura siempre permitidas y las de escritura sujetas a aprobación](/blog/claude-mcp-flashcards-connector-settings.png)

Puedes relajar eso más adelante si de verdad quieres hacerlo. Yo no empezaría por ahí.

## Activa el conector en el chat donde lo vayas a usar

Después de la configuración, abre una conversación en Claude y asegúrate de que el conector esté disponible ahí. El flujo actual te deja activar conectores desde el botón `+` o desde el menú `/` dentro de una conversación, y luego ajustar el acceso a herramientas para ese chat si hace falta.

Si Claude no está usando el conector cuando debería, revisa primero lo obvio:

- el conector de Flashcards está conectado en la configuración
- el conector está activado para el chat actual
- la herramienta de escritura no está bloqueada

Eso suele arreglar el clásico problema de "por qué Claude solo me da texto en vez de crear la tarjeta".

## Qué pedirle a Claude

Mantén el prompt sencillo. Claude no necesita ninguna ceremonia aquí.

Estos son buenos prompts para empezar:

```text
Crea una nueva flashcard en Flashcards.
Anverso: ¿Qué significa HTTP 404?
Reverso: El recurso solicitado no se encontró en el servidor.
Etiqueta: web-basics
Pregúntame qué workspace usar si no estás seguro.
```

```text
Antes de crear nada, lista mis workspaces de Flashcards y dime cuál parece mejor para tarjetas de estudio de idiomas.
```

```text
Crea una nueva flashcard de español en Flashcards.
Anverso: ¿Cómo se dice "I would like a coffee" en español?
Reverso: Me gustaría un café.
Etiquetas: spanish, travel
Usa mi workspace Personal.
```

Yo empezaría con una o dos tarjetas, no con cincuenta. La idea es confirmar el flujo del conector, la elección del workspace y el patrón de aprobaciones antes de lanzar algo más grande por lotes.

## Cómo es en la práctica el flujo de crear una tarjeta

Esta parte, por suerte, es bastante normal.

Le pides a Claude que cree una tarjeta en Flashcards. Si tienes más de un workspace y no hay uno obvio por defecto, Claude puede preguntarte dónde ponerla. Después de eso, Claude usa la herramienta de escritura y espera aprobación si `sql_execute` sigue en **Needs approval**.

Ese comportamiento es el correcto.

Conviene revisar la solicitud de escritura, aprobarla y dejar que Claude termine. En la captura de abajo, Claude preguntó qué workspace usar, ejecutó la acción de escritura de Flashcards y confirmó que la tarjeta de prueba se había añadido correctamente.

![Chat de Claude creando una flashcard de prueba a través del conector MCP de Flashcards después de preguntar qué workspace usar](/blog/claude-mcp-flashcards-create-card.png)

No necesitas preocuparte por el SQL en bruto salvo que quieras inspeccionar la llamada de la herramienta de cerca. Lo importante es el flujo:

1. pídele a Claude que cree la tarjeta
2. elige el workspace si Claude te lo pregunta
3. revisa y aprueba la acción de escritura
4. confirma que la tarjeta guardada se ve bien

Con eso basta para empezar a **crear flashcards en Claude** sin fingir que Claude es la app en la que vas a revisar el resultado final.

## Algunos límites honestos

Esta configuración es útil, pero no es magia.

Claude puede ayudarte a crear tarjetas dentro de Flashcards. También puede leer desde el conector, inspeccionar workspaces y consultar datos a través de las herramientas de lectura. Eso no significa que todas las tarjetas que redacte Claude vayan a ser buenas, ni que convenga aprobar a ciegas cada solicitud de escritura.

Yo seguiría tratando a Claude como la capa de borrador y entrada, y usaría Flashcards para las partes que importan después:

- pulir tarjetas flojas
- organizar mazos y etiquetas
- repasar con repetición espaciada
- estudiar desde tu workspace real en los dispositivos que ya usas

Si quieres mejores prompts para redactar tarjetas antes de conectar la capa de herramientas, [Cómo usar Claude para crear flashcards en 2026](/es/blog/how-to-use-claude-to-make-flashcards/) es un mejor punto de partida. Si tu objetivo es más amplio que crear tarjetas, [Cómo usar Claude para estudiar en 2026](/es/blog/how-to-use-claude-for-studying/) cubre un flujo más amplio.

## Después de que Claude cree la tarjeta, revísala en la app real

Esta es la parte que más me gusta de esta configuración. La tarjeta no se queda en una transcripción bonita de IA. Termina dentro de Flashcards, donde de verdad puedes repasarla más tarde.

Puedes abrir la app web alojada, comprobar la tarjeta en el móvil o seguir con tu flujo normal de estudio:

- [App web de Flashcards](https://app.flashcards-open-source-app.com/)
- [Flashcards para iPhone y iPad en la App Store](https://apps.apple.com/app/flashcards-open-source-app/id6760538964)
- [Flashcards para Android en Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&pcampaignid=web_share)

![Experiencia de repaso de Flashcards Open Source App en la app web alojada y en las apps móviles](/home/app-screens-showcase-en.png)

Si todavía no has usado el producto, [Primeros pasos](/es/docs/getting-started/) es la forma más rápida de empezar.

## La versión corta

Si buscabas **conectar Flashcards a Claude**, este es el flujo real:

1. abre la [configuración de conectores personalizados](https://claude.ai/customize/connectors) de Claude
2. añade `https://mcp.flashcards-open-source-app.com/mcp`
3. conecta el conector y revisa los permisos
4. deja abiertas las herramientas de lectura y mantén la escritura con aprobación al principio
5. activa el conector en tu chat
6. pídele a Claude que cree una tarjeta
7. aprueba la llamada de escritura
8. revisa la tarjeta guardada en Flashcards

Así pasas del chat de Claude a un workspace real de Flashcards sin integraciones inventadas, sin copiar y pegar a mano y sin perder el control sobre las acciones de escritura el primer día.
