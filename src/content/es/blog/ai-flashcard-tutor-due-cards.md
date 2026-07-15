---
title: "Tutor de flashcards con IA en 2026: repasa tus tarjetas pendientes con Claude y MCP"
description: "Usa Claude como tutor de flashcards con IA mediante MCP: carga una pequeña instantánea de tarjetas pendientes, responde de una en una y registra tú las valoraciones de FSRS en la app."
date: "2026-07-15"
image: "/blog/ai-flashcard-tutor-due-cards.png"
keywords:
  - "tutor de flashcards con IA"
  - "IA para repasar mis flashcards"
  - "tutor de repetición espaciada con IA"
  - "Claude MCP para flashcards"
  - "tutor con IA para mis propias tarjetas"
  - "repaso de flashcards con IA"
  - "repasar tarjetas pendientes con IA"
  - "tutor de flashcards con MCP"
---

Diez tarjetas que ya puedes repasar. Una sola pregunta en pantalla. La respuesta guardada permanece oculta hasta que contestes.

Esa es la versión útil de un **tutor de flashcards con IA** en 2026: conecta Claude con tus tarjetas reales de Flashcards mediante MCP, carga una pequeña instantánea de solo lectura con las que ya puedes repasar y haz que espere entre preguntas. Durante la sesión puede revelar el reverso guardado de cada tarjeta y tomar nota de tus primeros intentos en el chat. Pero no puede completar el repaso oficial de FSRS. Aún tienes que registrar `Again`, `Hard`, `Good` o `Easy` en la app de Flashcards; hasta entonces, todas las tarjetas seguirán pendientes.

![Tutor de tarjetas con IA pregunta una tarjeta pendiente mientras la revisión oficial con FSRS espera en la app.](/blog/ai-flashcard-tutor-due-cards.png)

## El flujo de trabajo de dos minutos

Esta es la rutina completa antes de entrar en la configuración:

1. Añade a Claude el conector MCP remoto de Flashcards.
2. Permite `list_workspaces` y `sql_query` durante esta sesión.
3. Bloquea `sql_execute`, porque este ejercicio no necesita acceso de escritura.
4. Pega el prompt del tutor que aparece más abajo.
5. Confirma el espacio de trabajo y deja que Claude recupere hasta diez tarjetas que ya puedas repasar.
6. Responde a un anverso cada vez. Pide una sola pista, y solo cuando la necesites.
7. Después, abre [Flashcards](https://app.flashcards-open-source-app.com/) y completa los repasos oficiales con tus propias valoraciones de FSRS.

Ese último paso forma parte del flujo de trabajo. La sesión MCP añade una capa de práctica conversacional sobre tus tarjetas, pero no vacía la cola ni reprograma nada.

Si aún no has configurado el conector, [la guía para conectar Flashcards con Claude mediante MCP](/es/blog/how-to-connect-flashcards-to-claude-with-mcp/) explica la ruta actual por los menús. La URL del servidor es:

`https://mcp.flashcards-open-source-app.com/mcp`

## Configura Claude como tutor de flashcards solo para este ejercicio

El conector de Flashcards expone tres llamadas:

- `list_workspaces({})` enumera los espacios de trabajo a los que puede acceder tu cuenta.
- `sql_query({ sql, workspaceId? })` lee tarjetas mediante un dialecto SQL limitado.
- `sql_execute({ sql, workspaceId? })` puede crear, editar o eliminar tarjetas y mazos.

El argumento `workspaceId` solo se aplica a la llamada en la que lo incluyas. Pásalo para dirigir esa llamada al espacio de trabajo que hayas confirmado. Si lo omites, la herramienta usa el espacio de trabajo seleccionado como predeterminado. Indicar un ID no cambia ni guarda un nuevo valor predeterminado.

El conector en su conjunto no es de solo lectura. El servidor impide que `list_workspaces` y `sql_query` escriban, mientras que `sql_execute` sí puede modificar tarjetas y mazos. Flashcards utiliza actualmente un único alcance (scope) de OAuth, `flashcards`; no ofrece un alcance separado de solo lectura que el servidor haga cumplir.

Para este ejercicio, bloquea `sql_execute` en los permisos del conector de Claude. Esa es una política del cliente, no un permiso de OAuth más restringido que Flashcards haga cumplir. Si tu cliente pide aprobación en lugar de permitir un bloqueo estricto, rechaza todas las llamadas a `sql_execute`. El prompt también indica a Claude que no use esa herramienta, pero una frase en un prompt protege menos que un permiso configurado en el cliente.

Los clientes interactivos se autorizan mediante OAuth 2.1 con PKCE y registro dinámico de clientes (Dynamic Client Registration). No necesitas pegar una clave de API en Claude. La [documentación del conector MCP de Flashcards](/es/docs/mcp-connector/) recoge el contrato actual de autenticación y herramientas.

## Copia este prompt para practicar con tus tarjetas pendientes

El siguiente prompt usa los formatos documentados de las herramientas, los campos de las tarjetas y la regla que determina cuándo toca repasarlas. Una tarjeta se puede repasar cuando `due_at` tiene un valor nulo o cuando ya ha llegado la fecha y hora programadas. En este contrato, un valor nulo corresponde a una tarjeta nueva que aún no se ha estudiado.

```text
Usa el conector MCP de Flashcards como tutor y limítate a hacerme preguntas durante esta sesión.

Herramientas permitidas:
- Usa solo list_workspaces y sql_query.
- Nunca llames a sql_execute.
- Nunca crees, actualices, elimines, reprogrames ni marques ninguna tarjeta como repasada.

Preparación:
1. Llama a list_workspaces({}).
2. Si hay un solo espacio de trabajo, dime su nombre y pídeme que lo confirme.
3. Si hay varios espacios de trabajo, muéstrame sus nombres y pídeme que elija uno.
4. Detente y espera a que confirme el espacio de trabajo antes de leer las tarjetas.
5. Pasa el workspaceId confirmado a sql_query en esta llamada. No digas que esto cambia mi espacio de trabajo predeterminado.
6. Usa exactamente este SQL:

SELECT card_id, front_text, back_text, due_at, created_at
FROM cards
WHERE due_at IS NULL OR due_at <= NOW()
ORDER BY due_at ASC, created_at DESC, card_id ASC
LIMIT 10 OFFSET 0

Esta consulta carga una instantánea estable de las tarjetas que ya se pueden repasar. No reproduce el orden exacto de la pantalla Review de Flashcards. Las filas con due_at IS NULL corresponden a tarjetas nuevas que aún no se han estudiado y aparecen primero. No recuperes tarjetas programadas para el futuro.

Si la consulta no devuelve filas, dímelo y detente.

Dinámica del repaso:
- Muestra solo el front_text de la primera tarjeta. No reveles el back_text antes de que responda.
- Presenta una sola tarjeta cada vez y espera mi respuesta antes de continuar.
- No conviertas la pregunta en una pregunta de opción múltiple.
- Ofrece como máximo una pista breve, y solo si te la pido. La pista no debe revelar la respuesta.
- Después de mi respuesta o de que diga "No lo sé", revela el back_text guardado con la etiqueta clara "Respuesta guardada".
- Compara mi primera respuesta con la respuesta guardada. Anota ese intento solo para esta sesión como "recordada", "parcial" o "no recordada". Si hay dudas, pregúntame qué etiqueta corresponde.
- Conserva la nota del primer intento aunque una pista o corrección me ayude después. Nunca la conviertas en Again, Hard, Good o Easy.
- Pasa a la siguiente tarjeta solo cuando yo diga "siguiente" o confirme de otro modo que estoy listo.
- No repitas ninguna tarjeta dentro de esta sesión.

Al final, muestra una lista breve con el anverso de cada tarjeta y la nota de su primer intento. Deja claro que son solo notas del chat, que no se ha registrado ningún repaso, que la programación de FSRS no ha cambiado y que debo completar los repasos oficiales en la app de Flashcards.
```

Conserva `NOW()` en la consulta; esta superficie SQL no admite `CURRENT_TIMESTAMP`. La ordenación por tres columnas también importa. Primero aparecen las tarjetas nuevas que aún no se han estudiado. Entre ellas, salen antes las más recientes; después vienen las tarjetas programadas, desde la fecha de repaso pendiente más antigua, y `card_id` resuelve cualquier empate restante. El resultado es reproducible para una misma instantánea, pero no coincide con el orden exacto de la pantalla Review de la app.

Diez es el máximo, no el objetivo. Puedes terminar el ejercicio después de cinco tarjetas sin cambiar la consulta ni escribir nada.

## Así debería ser una ronda con el tutor

Claude muestra un solo anverso guardado. Respondes de memoria, preferiblemente en voz alta. Si te atascas, puedes pedir una pista. Entonces Claude revela el reverso guardado y lo compara con lo que has dicho.

La nota del primer intento se conserva aunque la pista haga evidente la respuesta. Así evitas un autoengaño bastante común: convertir «no la recordé, pero luego entendí la explicación» en «me la sabía». La etiqueta es deliberadamente aproximada. Sirve para detectar patrones en un lote de diez tarjetas, no como dato de entrada para el planificador.

La pausa antes de revelar cada respuesta hace casi todo el trabajo. Si el chat muestra todos los anversos y reversos de golpe, se convierte en otra página que leer. Una pregunta, un intento y una respuesta revelada hacen que el intercambio sea una verdadera sesión de práctica de recuperación.

## El ejercicio oral no es un repaso oficial de FSRS

Este límite merece una explicación directa: Flashcards MCP puede leer las tarjetas que ya puedes repasar, pero no puede enviar un evento de repaso. El recurso `review_events` y los campos de programación de las tarjetas —incluidos `due_at`, `reps`, `lapses`, `fsrs_card_state` y `fsrs_last_reviewed_at`— son de solo lectura a través de la superficie del agente. Incluso `sql_execute` solo puede modificar tarjetas y mazos. Claude no puede guardar una valoración `Again`, `Hard`, `Good` o `Easy`, actualizar la programación ni marcar el repaso como completado.

Por tanto, las tarjetas seguirán pendientes después del chat.

Abre la app web u otro cliente de Flashcards y responde de nuevo a las tarjetas dentro del flujo oficial de repaso. Valora tú mismo ese intento. Haber visto la respuesta en el chat puede facilitar la repetición inmediata, así que no conviertas automáticamente `recordada`, `parcial` o `no recordada` en una valoración. Si eso dificulta una evaluación honesta, usa el tutor con IA después de tu repaso habitual en la app, como sesión de explicación.

Si quieres entender mejor esta separación, [la recuperación activa pone a prueba lo que puedes producir ahora, mientras que la repetición espaciada programa lo que debe volver más adelante](/es/blog/active-recall-vs-spaced-repetition/). Esta sesión con Claude se ocupa de la primera tarea; la app, de la segunda.

## Por qué importa la pausa antes de ver la respuesta

La restricción útil es también la que resulta un poco incómoda: Claude tiene que esperar. Ver el reverso antes de intentar responder al anverso convierte la ronda en lectura. Ocultarlo crea un intento real de recuperación que sí puedes evaluar.

Un ensayo controlado aleatorizado de 2009 siguió a 40 residentes de pediatría y medicina de urgencias mientras aprendían dos temas médicos. Las pruebas repetidas, con preguntas de respuesta corta y retroalimentación, se hicieron de inmediato y en dos ocasiones más, a intervalos de unas dos semanas. Más de seis meses después, la puntuación media fue del 39 % para el material practicado con pruebas repetidas y del 26 % para el material estudiado repetidamente con hojas de repaso. [El resumen publicado recoge esa diferencia de 13 puntos porcentuales](https://pubmed.ncbi.nlm.nih.gov/19930508/).

Fue un estudio pequeño y limitado a la educación médica, no un ensayo sobre tutores con IA, y no demuestra que este flujo concreto con MCP mejore las notas. Sí respalda una decisión de diseño mucho más acotada: intentar responder antes de ver la solución. El prompt respeta ese límite al ocultar el reverso, limitar las pistas y conservar el primer intento.

## Usa el reverso guardado como referencia

Un tutor con IA puede mejorar, ampliar o sustituir sin avisar una respuesta mientras la evalúa. Eso es arriesgado cuando el objetivo consiste en repasar tus propias tarjetas.

El prompt indica a Claude que revele el `back_text` guardado y compare tu respuesta con ese texto. Puede explicar una discrepancia, pero la referencia del ejercicio permanece a la vista. Si el reverso es erróneo o está incompleto, corrige la tarjeta por separado después de la sesión con ayuda de una fuente fiable. No dejes que una corrección convincente se pierda en el chat ni des por buena la tarjeta original.

Para ampliar este enfoque centrado en las preguntas, [Cómo usar la IA para practicar la recuperación activa](/es/blog/how-to-use-ai-for-active-recall/) explica cómo evitar que las pistas y las explicaciones lleguen demasiado pronto.

## Privacidad y permisos antes de conectarte

Cuando Claude llama a `sql_query`, Flashcards envía los datos solicitados de las tarjetas al cliente externo de IA. El cliente o el proveedor del modelo elegido puede procesarlos o conservarlos según la configuración y las condiciones de tu cuenta. Esos datos ya no permanecen solo dentro de Flashcards.

Antes de usar un mazo privado, comprueba si puedes enviar su contenido a ese proveedor. Un mazo de vocabulario y unas tarjetas copiadas de notas de pacientes, documentos de tu empresa o un diario privado exigen decisiones muy distintas. Recupera solo el pequeño conjunto necesario para la sesión y evita mezclar en el mismo chat conectores sin relación entre sí o fuentes sensibles.

Bloquear `sql_execute` protege contra las escrituras si el cliente hace cumplir el bloqueo. No convierte la credencial OAuth en una credencial de solo lectura ni hace privado el texto devuelto. Si tu cliente no permite desactivar herramientas concretas ni someter cada llamada a tu aprobación, considera que la conexión tiene capacidad de escritura.

El análisis detallado de amenazas está en [¿Es seguro usar MCP con Flashcards?](/es/blog/is-mcp-safe-for-flashcards/). Para una sesión normal basta con una lista breve: verifica la URL de MCP, confirma el espacio de trabajo, bloquea las escrituras, solicita pocas filas y ten claro adónde van los datos devueltos.

## Mantén pequeño el lote de tarjetas pendientes

«IA, repasa mis flashcards conmigo» suena como una petición para cargar el mazo entero. Suele funcionar mejor si se limita a cinco o diez tarjetas.

Un lote pequeño te deja espacio para responder con calma, pedir una pista y entender por qué has fallado. También limita la cantidad de texto de las tarjetas que llega al cliente externo. Cuando termines los repasos oficiales en la app, empieza otro lote solo si aún puedes mantener la atención.

Evita pedir a Claude que elija «las tarjetas más importantes» a menos que tengas una regla concreta para definir esa importancia. La consulta de ejemplo aplica un criterio más limitado: incluye las tarjetas nuevas que aún no se han estudiado y las tarjetas programadas cuya fecha y hora de repaso ya han llegado. Las nuevas aparecen primero; después vienen las programadas, desde la fecha pendiente más antigua. Esa instantánea estable resulta útil para un ejercicio breve, pero no pretende reproducir el orden de la pantalla Review de la app. FSRS sigue decidiendo cuándo toca repasar; Claude solo cambia la forma de presentar cada pregunta.

## Preguntas frecuentes sobre Claude, MCP y las tarjetas pendientes

### ¿Puede Claude hacerme preguntas sobre mis propias flashcards?

Sí. Con el conector MCP de Flashcards, Claude puede leer una pequeña instantánea de las tarjetas del espacio de trabajo confirmado que ya puedes repasar, mostrar solo cada anverso, esperar tu respuesta y revelar el reverso guardado. El prompt anterior limita la sesión a `list_workspaces` y `sql_query`.

### ¿Claude marca una tarjeta como repasada cuando respondo?

No. La superficie del agente no puede enviar eventos de repaso ni cambiar los campos de programación de FSRS. Completa esos mismos repasos pendientes en la [app de Flashcards](https://app.flashcards-open-source-app.com/) para registrar tus valoraciones y asignar a las tarjetas sus próximas fechas de repaso.

### ¿La conexión MCP es de solo lectura?

El conector en su conjunto no es de solo lectura. `list_workspaces` y `sql_query` son herramientas de solo lectura; `sql_execute` puede escribir. La configuración de este ejercicio depende de que bloquees o rechaces `sql_execute` en el cliente. OAuth utiliza actualmente un único alcance `flashcards`, no autorizaciones separadas de lectura y escritura.

### ¿Puede la IA elegir Again, Hard, Good o Easy por mí?

No debería. Claude puede conservar notas aproximadas de la sesión, como `recordada`, `parcial` y `no recordada`, pero esas etiquetas no son valoraciones de FSRS. Elige tú mismo la valoración oficial en la app.

### ¿La consulta incluye también las tarjetas nuevas?

Sí. Las tarjetas nuevas que aún no se han estudiado tienen `due_at IS NULL`, por lo que se pueden repasar según la regla documentada. En esta consulta aparecen antes que las tarjetas programadas que ya están pendientes. Las tarjetas cuyo `due_at` está en el futuro quedan excluidas.

### ¿workspaceId cambia mi espacio de trabajo predeterminado?

No. Pasar `workspaceId` a `sql_query` dirige esa llamada al espacio de trabajo indicado. Si lo omites, se usa el predeterminado que esté seleccionado; incluirlo no guarda un nuevo valor predeterminado.

## Mantén acotado el tutor de flashcards con IA

La versión útil de un **tutor de flashcards con IA** tiene una tarea pequeña: cargar unos pocos anversos que ya puedas repasar, esperar tus respuestas, ofrecer ayuda limitada y revelar las respuestas que ya estaban guardadas en las tarjetas.

Mantén `sql_execute` bloqueado en el cliente y usa `sql_query`, que el servidor mantiene como herramienta de solo lectura, para obtener la instantánea. Trata las etiquetas de los primeros intentos como notas desechables del chat. Después, completa los repasos oficiales en Flashcards para que FSRS reciba tus valoraciones y vuelva a programar las tarjetas. Hasta que lo hagas, todas las tarjetas del chat seguirán pendientes.
