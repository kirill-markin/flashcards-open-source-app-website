---
title: "Cómo usar ChatGPT y Codex para estudiar en 2026: guarda flashcards con MCP"
description: "Usa ChatGPT Study Mode para detectar puntos débiles, guarda con Codex y Flashcards MCP las tarjetas que elijas en la app de escritorio y repásalas con FSRS."
date: "2026-08-02"
image: "/blog/how-to-use-chatgpt-codex-for-studying.png"
keywords:
  - "cómo usar ChatGPT y Codex para estudiar"
  - "flashcards MCP con ChatGPT"
  - "flashcards con Codex"
  - "flashcards MCP con Codex"
  - "MCP en la aplicación de escritorio de ChatGPT"
  - "flujo de estudio con ChatGPT y Codex"
---

Ayer, ChatGPT me preguntó por qué una muestra más grande suele producir un intervalo de confianza más estrecho. Solté tres frases con mucha seguridad y, no sé muy bien cómo, evité decir «error estándar». Ese punto débil sí merecía una tarjeta. El resto de nuestra conversación de estadística podía quedarse en el chat.

Si estás intentando descubrir **cómo usar ChatGPT y Codex para estudiar**, este es el flujo que yo usaría: deja que ChatGPT saque a la luz una laguna real, elige tú mismo la tarjeta y deja que Codex la guarde mediante el conector MCP de Flashcards. La tarjeta termina en tu colección de Flashcards, donde FSRS puede volver a mostrártela más adelante.

Aquí no se trata de pedirle a ChatGPT que genere un mazo entero a partir de un capítulo. Es un pequeño traspaso de la tutoría al repaso a largo plazo. El conector te ahorra copiar y pegar; no decide qué debes memorizar.

![Flujo de estudio con ChatGPT y Codex que lleva los puntos débiles elegidos mediante MCP a flashcards repasadas con FSRS](/blog/how-to-use-chatgpt-codex-for-studying.png)

## El reparto útil: ChatGPT enseña, Codex guarda y Flashcards programa los repasos

Cada parte tiene una tarea concreta:

1. **ChatGPT Study Mode** hace preguntas, da pistas y te ayuda a trabajar el material.
2. **Tú** decides qué errores merecen una tarjeta permanente.
3. **Codex en la aplicación de escritorio de ChatGPT o Codex CLI** usa Flashcards MCP para crear o corregir las tarjetas que has aprobado.
4. **Flashcards** registra tus repasos y programa el siguiente con FSRS.

La [guía actual de Study Mode de OpenAI](https://help.openai.com/en/articles/11780217-chatgpt-study-mode-faq) describe un tutor que puede avanzar paso a paso, hacerte un cuestionario con una pregunta cada vez y usar apuntes, imágenes o PDF que hayas subido. Así puedes descubrir qué cosas todavía no eres capaz de explicar de memoria.

Solo el tercer paso necesita MCP. Piensa en él como un puente que permite a Codex utilizar un conjunto pequeño de herramientas autorizadas de Flashcards. Esas herramientas pueden mostrar tus espacios de trabajo (`workspaces`), leer los datos de estudio permitidos y modificar tarjetas o mazos después de que apruebes la acción de escritura.

## Primero, usa ChatGPT para detectar un punto débil real

Abre una conversación normal de ChatGPT y activa Study Mode. En ChatGPT web, escribe `@study` en el cuadro de texto y selecciona **Study**. También funciona en Temporary Chats, pero no en conversaciones dentro de un GPT o un Project. Limita la fuente: una sección de una clase, unas páginas de apuntes o los ejercicios que acabas de terminar.

Yo empezaría con esto:

```text
Enséñame este material como un tutor. Haz una pregunta cada vez y espera mi
respuesta. Da pistas antes de explicar la respuesta completa. Cuando me
equivoque o tarde en responder, anota qué me faltó exactamente. No hagas
flashcards todavía.
```

Responde antes de pedir ayuda. Una explicación fluida puede parecerte familiar aunque cinco segundos antes no hubieras sido capaz de formular la idea por tu cuenta.

Al final, pide a ChatGPT que muestre una lista breve de tarjetas candidatas:

```text
Muéstrame solo las ideas que olvidé, confundí o no pude explicar con claridad.
Para cada una, propón un anverso concreto y un reverso breve. Basa las tarjetas
en el material que te he dado. No guardes nada todavía.
```

Después toma tú la decisión importante. Conserva una tarjeta cuando necesites dominar esa idea más allá de esta conversación y la respuesta se pueda comprobar con claridad. Descarta las preguntas de calentamiento, los datos que ya conocías, las peticiones demasiado amplias como «explica el capítulo» y cualquier tarjeta que te daría pereza corregir la semana que viene.

Para el ejemplo de estadística, una tarjeta útil podría ser:

```text
Anverso: ¿Por qué una muestra más grande suele estrechar un intervalo de confianza?
Reverso: Porque reduce el error estándar y hace que la estimación sea más precisa.
```

Tres párrafos sobre intervalos de confianza ayudaron durante la tutoría. Para el repaso basta con una distinción concreta.

## Usa Codex dentro de la aplicación de escritorio de ChatGPT para el traspaso mediante MCP

El 9 de julio de 2026, la aplicación independiente de Codex se integró en la **aplicación de escritorio de ChatGPT** para macOS y Windows. Codex conserva su propia vista y su historial de chats, junto a las vistas Chat y Work de ChatGPT. OpenAI explica el cambio en su guía [What's new](https://learn.chatgpt.com/docs/whats-new#use-codex-in-the-chatgpt-desktop-app).

Descarga o actualiza la [aplicación de escritorio de ChatGPT](https://learn.chatgpt.com/docs/app) y selecciona **Codex** cuando quieras guardar las tarjetas. Desde **New chat**, puedes abrir un chat existente de ChatGPT e incorporarlo a una conversación de Codex. También puedes pegar solo la lista de tarjetas aprobadas. En ambos casos, Study Mode y el paso de MCP con Codex siguen funcionando por separado dentro de una misma aplicación de escritorio.

Si tus apuntes ya están en archivos de tu ordenador, puedes quedarte en Codex y usar el mismo prompt de tutoría con una pregunta cada vez. Indícale que no escriba tarjetas hasta que apruebes una vista previa. Para la mayoría de los estudiantes, ChatGPT Study Mode es el tutor más sencillo; Codex se ocupa del traspaso cuando entran en juego archivos locales o herramientas MCP.

## Conecta Codex al servidor MCP de Flashcards

Se configura en pocos pasos desde la aplicación de escritorio:

1. Abre **Settings > MCP servers** en la aplicación de escritorio de ChatGPT.
2. Selecciona **Add server**.
3. Ponle el nombre `Flashcards`, elige **Streamable HTTP** e introduce esta URL:

```text
https://mcp.flashcards-open-source-app.com/mcp
```

4. Guarda el servidor y selecciona **Restart**.
5. Cuando la aplicación se reinicie, selecciona **Authenticate** y completa en el navegador el inicio de sesión OAuth de Flashcards.
6. Escribe `/mcp` en Codex para confirmar que el servidor está conectado.

Estos pasos siguen la [configuración actual de MCP para la aplicación de escritorio de ChatGPT y Codex](https://learn.chatgpt.com/docs/extend/mcp) de OpenAI. Flashcards usa OAuth para el inicio de sesión interactivo, así que no tienes que pegar una clave de API en una sesión normal de escritorio. La [documentación de Flashcards MCP](/es/docs/mcp-connector/) incluye todos los detalles sobre la autenticación y las herramientas por si necesitas resolver un problema de conexión.

Revisa cada cambio antes de aprobarlo. Listar workspaces es una operación de solo lectura; crear, reescribir, reorganizar o eliminar tarjetas guardadas no lo es. Si tu centro educativo o empresa administra ChatGPT, su administrador también puede limitar los servidores o herramientas MCP que tienes permitido activar.

## Guarda solo las tarjetas que has aprobado

Cambia a Codex en la aplicación de escritorio y dale la lista final de candidatos. Yo usaría un prompt como este:

```text
Usa el servidor MCP de Flashcards. Primero, lista mis workspaces y pregúntame
dónde deben guardarse estas tarjetas. Muéstrame los anversos, los reversos, las
etiquetas y cualquier cambio en los mazos antes de escribir nada. Crea solo las
tarjetas que yo apruebe. Después de la escritura, vuelve a leer las tarjetas
guardadas para que pueda comprobarlas.
```

Codex debería empezar con la herramienta de solo lectura que lista los workspaces. Cuando elijas el workspace y cómo organizar las tarjetas, podrá preparar la escritura. Antes de aprobarla, comprueba el workspace, los anversos, los reversos, las etiquetas, los cambios en los mazos y el número de registros afectados.

El conector ofrece tres herramientas:

| Herramienta | Qué puede hacer | ¿Escribe datos? |
| --- | --- | --- |
| `list_workspaces` | Lista los workspaces de Flashcards a los que puedes acceder | No |
| `sql_query` | Lee datos permitidos de workspaces, tarjetas, mazos y repasos | No |
| `sql_execute` | Crea, edita o elimina tarjetas y mazos permitidos | Sí |

Los nombres parecen técnicos porque el conector usa una interfaz limitada parecida a SQL. No necesitas escribir SQL. Pide el resultado con palabras normales y revisa el cambio propuesto.

Esto no es acceso sin restricciones a la base de datos. Cada solicitud queda limitada a un workspace autorizado, y el servidor solo acepta las lecturas y escrituras de tarjetas o mazos que documenta. La [guía de seguridad de MCP](/es/blog/is-mcp-safe-for-flashcards/) explica con más detalle cómo circulan los datos, los límites, las aprobaciones y el riesgo de borrado.

## Codex puede ordenar el mazo después de la sesión de estudio

El mismo conector resulta útil cuando una tarjeta resulta ambigua o termina en el lugar equivocado. Empieza con una inspección de solo lectura:

```text
Lee las tarjetas de mi mazo Estadística que mencionan intervalos de confianza.
Señala duplicados y tarjetas que evalúan más de una idea. No cambies nada.
```

Después aprueba un cambio pequeño y exacto:

```text
Reescribe solo las dos tarjetas que he seleccionado usando los anversos y
reversos que acabamos de revisar. Organízalas para que aparezcan en el mazo
Inferencia. Muéstrame los valores finales antes de la escritura y vuelve a leer
las tarjetas guardadas después.
```

En Flashcards, los mazos son filtros guardados. Colocar una tarjeta en otro mazo puede implicar cambiar sus etiquetas, así que revísalas también. Puedes usar el mismo método de revisar primero y aprobar después para crear un mazo, reorganizar un conjunto pequeño o eliminar tarjetas que hayas identificado de forma explícita. «Elimina todo lo que parezca malo» es una petición arriesgada en cualquier herramienta con acceso real de escritura.

## El repaso real con FSRS sigue haciéndose en Flashcards

El conector MCP puede leer el historial de repasos y los campos permitidos del estado y la programación de FSRS. Su herramienta de escritura no puede crear eventos de repaso (`review_events`), registrar una valoración Again, Hard, Good o Easy ni cambiar el estado o la programación de FSRS. Esos campos son de solo lectura a través de este conector.

Abre la [app web de Flashcards](https://app.flashcards-open-source-app.com/) o una app móvil cuando toque repasar las tarjetas. Intenta recordar la respuesta, revela el reverso y elige allí tu valoración. Flashcards registra el repaso y FSRS decide cuándo debe volver la tarjeta.

Codex sí puede hacerte un cuestionario informal a partir de los datos de tarjetas que autorices. Trátalo como una práctica adicional. No sustituye el repaso programado en Flashcards. La [guía del tutor de flashcards con IA](/es/blog/ai-flashcard-tutor-due-cards/) explica esta diferencia con un flujo completo de preguntas.

## Codex CLI usa la misma configuración MCP

La mayoría de los estudiantes puede saltarse el terminal. Codex CLI resulta práctico cuando el material de estudio ya está en archivos Markdown, apuntes de código o una carpeta con documentos del curso.

Añade el servidor remoto con:

```bash
codex mcp add flashcards --url https://mcp.flashcards-open-source-app.com/mcp
codex mcp login flashcards
```

Usa `codex mcp list` para comprobar el servidor guardado y después `/mcp` dentro de Codex CLI para inspeccionar las herramientas activas. La vista de Codex en la aplicación de escritorio, Codex CLI y la extensión del IDE comparten `config.toml` cuando se ejecutan en el mismo equipo. Configura el servidor una vez, reinicia el otro cliente local si hace falta y también debería aparecer allí. ChatGPT web no usa ese archivo.

Para una sesión sin interfaz gráfica (headless) en la que OAuth mediante el navegador no resulte práctico, Flashcards acepta una clave de agente de larga duración con el prefijo `fca_` como token Bearer. Guarda la clave en una variable de entorno y registra su nombre, no la propia clave:

```bash
codex mcp add flashcards \
  --url https://mcp.flashcards-open-source-app.com/mcp \
  --bearer-token-env-var FLASHCARDS_MCP_TOKEN
```

La [guía de la API de Flashcards](/es/docs/api/) explica cómo obtener la clave de agente. Trátala como una contraseña y no la incluyas en prompts, capturas de pantalla, el historial del shell ni el control de versiones. OAuth es la opción más sencilla cuando puedes iniciar sesión desde el navegador.

## ChatGPT web tiene una ruta de conexión diferente

ChatGPT web no lee los servidores MCP guardados en tu `config.toml` local de Codex. En la web, las herramientas que dependen de servidores MCP remotos se ofrecen mediante plugins de **ChatGPT Work**, y los administradores del workspace pueden controlar qué plugins y herramientas están disponibles.

Las apps MCP personalizadas se configuran por otra vía en la web. Usan el Developer mode de ChatGPT, y su disponibilidad y sus permisos de escritura dependen de la cuenta y del workspace. Si tu workspace permite añadir o publicar una, sigue la [guía actual del Developer mode y las apps MCP](https://help.openai.com/en/articles/12584461-developer-mode-apps-and-full-mcp-connectors-in-chatgpt-beta) de OpenAI y comprueba las acciones habilitadas antes de dar por hecho que la herramienta de escritura de Flashcards va a funcionar.

En la práctica, tienes cuatro opciones:

- estudiar en ChatGPT y después usar Codex en la aplicación de escritorio para guardar mediante MCP las tarjetas que has aprobado
- usar Codex CLI o la vista de Codex en la aplicación de escritorio tanto para la tutoría como para crear tarjetas mediante MCP
- usar un plugin de ChatGPT web aprobado por el workspace o una app MCP personalizada cuando ofrezca las herramientas que necesitas
- copiar a mano las tarjetas elegidas

## Copiar a mano sigue siendo una buena opción

Pierdes muy poco si decides no usar el conector. Pide a ChatGPT las tarjetas finales aprobadas en bloques sencillos de anverso y reverso:

```text
Devuelve solo las tarjetas que he seleccionado. Pon un anverso claro y un
reverso breve en cada bloque. Indica en una línea aparte en qué mazo irá cada
tarjeta o qué etiquetas llevará. No añadas tarjetas ni datos nuevos.
```

Léelas una vez, copia las que pasen el filtro a Flashcards y continúa con el repaso normal. Copiarlas a mano es una opción sensata para material privado, una cuenta educativa gestionada por el centro o cualquier persona que no quiera que un cliente de IA lea los datos de sus tarjetas guardadas.

La guía complementaria [Cómo convertir ChatGPT Study Mode en flashcards](/es/blog/how-to-turn-chatgpt-study-mode-into-flashcards/) se centra en ese flujo de tutoría sin conector. [Cómo usar ChatGPT para crear flashcards](/es/blog/how-to-use-chatgpt-to-make-flashcards/) aborda la creación de borradores de tarjetas a partir de apuntes de forma más amplia. Si también estudias con herramientas de Anthropic, [Cómo usar Claude para estudiar](/es/blog/how-to-use-claude-for-studying/) muestra el ciclo paralelo de tutoría a MCP con la configuración independiente del conector de Claude.

## Mantén el traspaso más pequeño que la lección

Una buena sesión de estudio con ChatGPT puede durar veinte minutos y acabar en tres tarjetas. No pasa nada. La conversación te ayudó a entender el tema; las tarjetas solo tienen que conservar las lagunas que importarán más adelante.

Mi **flujo de estudio con ChatGPT y Codex** preferido es sencillo: deja que ChatGPT te haga preguntas, detecta dónde falla tu memoria, aprueba unas pocas tarjetas claras, guárdalas mediante Flashcards MCP y completa el repaso real con FSRS en Flashcards. El conector elimina el trabajo de copiar y pegar. Tú sigues decidiendo qué merece tu tiempo más adelante.
