---
title: "¿Es seguro usar MCP con Flashcards? Permisos, privacidad y acceso de escritura en 2026"
description: "¿Es seguro usar MCP con Flashcards? Revisa qué protege OAuth, qué puede leer o cambiar un cliente de IA y cómo reducir los riesgos antes de conectarte."
date: "2026-07-12"
image: "/blog/is-mcp-safe-for-flashcards.png"
keywords:
  - "es seguro usar MCP con Flashcards"
  - "seguridad de MCP en Flashcards"
  - "privacidad de MCP"
  - "seguridad OAuth en MCP"
  - "acceso de solo lectura con MCP"
  - "acceso de escritura con MCP"
  - "privacidad de flashcards con IA"
  - "inyección de prompts en MCP"
---

El 20 de mayo de 2026, la NSA publicó una guía de seguridad de 17 páginas sobre Model Context Protocol. Eso importa cuando un mazo contiene algo más que vocabulario público. Una conexión MCP de Flashcards puede devolver al cliente de IA tarjetas, metadatos del espacio de trabajo e historial de repaso. Con esa misma credencial de acceso completo, el cliente también puede invocar una herramienta que modifica tarjetas o las marca como eliminadas. Para saber **si es seguro usar MCP con Flashcards**, hay que comprobar dos cosas: si esos datos pueden llegar al cliente elegido y si este puede usar la herramienta de escritura.

OAuth protege la autorización y el intercambio de tokens. El servidor de Flashcards, por su parte, limita lo que pueden hacer sus herramientas. Ninguno de esos controles puede decidir si un cambio es acertado, mantener dentro de Flashcards los datos recuperados ni garantizar que el cliente de IA pedirá permiso antes de escribir.

Los límites que de verdad importan son concretos: hasta dónde llega cada herramienta, qué reglas impone Flashcards y qué protecciones dependen solo de tu cliente.

![Escritorio cálido con zonas separadas para permisos de lectura y escritura en MCP de Flashcards](/blog/is-mcp-safe-for-flashcards.png)

## ¿Es seguro usar MCP con Flashcards? Sigue la ruta real de los datos

En una sesión MCP remota pueden intervenir cuatro partes:

1. tú
2. la aplicación de IA o el cliente MCP donde haces la solicitud
3. un proveedor del modelo, cuando el procesamiento del modelo ocurre fuera de ese cliente
4. el servidor MCP y el backend de Flashcards

Algunos productos reúnen las funciones de cliente y proveedor del modelo. Otros envían los resultados de las herramientas a un servicio distinto. Lo único garantizado es que Flashcards devuelve los datos solicitados al cliente MCP autenticado. Lo que suceda después depende de la arquitectura, el plan y la configuración del cliente. El resultado puede entrar en el contexto de un modelo, quedarse en la infraestructura de un proveedor o pasar a otro servicio que lo procese.

Los riesgos concretos se concentran en tres puntos. Una lectura puede revelar el texto de las tarjetas, la estructura de los mazos, la configuración del espacio de trabajo o los eventos de repaso. Una escritura puede crear tarjetas no deseadas, cambiar contenido o marcar tarjetas y mazos como eliminados. El agente, además, puede malinterpretar tu solicitud o tomar como órdenes las instrucciones que encuentre en material importado.

Las [recomendaciones de la NSA sobre MCP de mayo de 2026](https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4496698/nsa-releases-security-design-considerations-for-ai-driven-automation-leveraging/) señalan una distinción importante. La autenticación, la autorización y la validación siguen siendo necesarias. Aun así, las llamadas dinámicas a herramientas, el contexto compartido y la confianza implícita crean riesgos que esos controles no resuelven. Un mazo público para aprender idiomas y otro creado a partir de notas confidenciales de un cliente requieren decisiones distintas.

## Qué protege OAuth en Flashcards

Flashcards usa un flujo de código de autorización con PKCE y Dynamic Client Registration para los clientes MCP interactivos. Apruebas la conexión en el navegador y PKCE vincula el intercambio del código al cliente que lo inició. El servidor también comprueba que el token de acceso se haya emitido para el recurso MCP de Flashcards. La [guía del conector MCP de Flashcards](/es/docs/mcp-connector/) incluye el endpoint y los metadatos de descubrimiento.

Estas medidas protegen el inicio de sesión y el intercambio de tokens. La [especificación estable de autorización de MCP del 25 de noviembre de 2025](https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization) exige PKCE para este flujo y tokens específicos para cada recurso. También aclara que la autorización es opcional en las implementaciones de MCP en general. Por eso, que un conector use OAuth no dice nada sobre otro servidor.

Flashcards solo anuncia un alcance (scope) de OAuth: `flashcards`. No ofrece por separado un permiso OAuth de solo lectura y otro de lectura y escritura. Sus credenciales autorizan todas las funciones del conector. Por eso, decir que una configuración es «de solo lectura» significa únicamente que el cliente de IA ha desactivado o bloqueado `sql_execute`. El servidor sí impide que `sql_query` escriba. La misma credencial sigue autorizando `sql_execute` si el cliente envía esa llamada.

Bloquear herramientas en el cliente es un control operativo útil. La concesión de OAuth no cambia y ese ajuste no limita a un cliente malicioso o comprometido que conserve la credencial.

## Qué pueden hacer realmente las tres herramientas MCP de Flashcards

El conector no acepta PostgreSQL arbitrario. Expone un dialecto SQL cuyas reglas aplica un analizador. Cada herramienta tiene un alcance distinto:

| Herramienta | Alcance actual | ¿Modifica datos? | Ajuste prudente en el cliente |
| --- | --- | --- | --- |
| `list_workspaces` | Muestra hasta 100 espacios de trabajo a los que puede acceder el usuario, junto con su ID, nombre, número de tarjetas activas y última actividad; también indica cuál es el predeterminado | No | Actívala solo si aceptas que el cliente reciba estos metadatos de la cuenta |
| `sql_query` | Lee `workspace`, `cards`, `decks` y `review_events` en el espacio de trabajo solicitado | No | Actívala para una tarea de lectura bien delimitada y solicita solo las columnas necesarias |
| `sql_execute` | Inserta, actualiza o marca como eliminados registros de `cards` y `decks` en el espacio de trabajo solicitado | Sí | Déjala desactivada salvo que el cliente pueda limitar las escrituras de una forma que consideres aceptable |

La [guía de MCP](/es/docs/mcp-connector/) y la [referencia de la API](/es/docs/api/) describen el dialecto público. La implementación añade algunos detalles de seguridad que conviene conocer antes de decidir cuánto confiar en el conector.

### Cómo se elige realmente el espacio de trabajo

Cada llamada SQL apunta a un solo espacio de trabajo. Antes de ejecutar la instrucción, Flashcards vuelve a comprobar que el usuario mantiene el acceso. Así impide que alguien indique el ID de un espacio de trabajo ajeno.

El espacio de trabajo seleccionado solo actúa como valor predeterminado. Si omites `workspaceId`, la herramienta usa ese valor. Si proporcionas un ID, la conexión puede dirigirse a cualquier espacio de trabajo al que tenga acceso el usuario. `list_workspaces` solo muestra los ID de los espacios de trabajo que devuelve; el límite de 100 resultados no es una barrera de aislamiento, porque indicar explícitamente un `workspaceId` todavía permite dirigirse a cualquier espacio de trabajo al que tenga acceso el usuario.

Un espacio de trabajo de prueba ayuda a entender cómo presenta el cliente las llamadas a herramientas. También reduce las consecuencias de un error involuntario si la llamada se mantiene dentro de él. Pero no crea una barrera de aislamiento estricta: esa misma conexión puede indicar cualquier otro espacio de trabajo accesible. Para aislar de verdad los datos, necesitas otra cuenta sin acceso al espacio de trabajo real o un despliegue independiente.

### Qué puede revelar el acceso de solo lectura

`list_workspaces` y `sql_query` no pueden modificar el estado de las tarjetas. Tampoco pueden reparar datos ni recalcular la programación de los repasos. Esta separación la impone el servidor. Si `sql_execute` no está disponible para el cliente, es mucho menos probable que una llamada accidental cambie la base de datos.

Aun así, los datos devueltos salen del backend de Flashcards. Una consulta sobre temas que todavía no dominas puede incluir el texto de las tarjetas y los eventos de repaso. Incluso una tarjeta breve puede contener datos de un paciente, el nombre de un sistema interno, un ejemplo personal en otro idioma o notas para una entrevista.

La [política de privacidad de Flashcards](/es/privacy/) se aplica a los datos solicitados mediante MCP y la API para agentes. En el límite del protocolo, Flashcards entrega el resultado al cliente MCP. Que después también lo reciba un proveedor del modelo aparte, cuánto tiempo lo conserve cada servicio y si puede usarse para entrenamiento dependen de la configuración del cliente y de las condiciones del proveedor. No confundas el acceso «de solo lectura» con una garantía de privacidad.

### El acceso de escritura es más limitado que el acceso total a la base de datos

`sql_execute` acepta `INSERT`, `UPDATE` y `DELETE`, aunque solo para `cards` y `decks`. Los recursos `workspace` y `review_events` son de solo lectura. Los campos de programación de las tarjetas —incluidas las fechas de vencimiento, el número de repasos y el estado persistente de FSRS— también son de solo lectura en este dialecto. MCP no puede registrar un repaso ni reescribir directamente el estado de programación de FSRS.

Tanto `UPDATE` como `DELETE` exigen una cláusula `WHERE`. Esto impide ejecutar una instrucción sin filtro. Sin embargo, una condición válida pero amplia todavía puede coincidir con muchas filas. La validación sintáctica no puede saber si ese filtro expresa tu intención.

Para tarjetas y mazos, `DELETE` fija una marca temporal de eliminación que utiliza la sincronización; no borra de inmediato la fila de la base de datos. Los elementos eliminados dejan de aparecer entre los datos activos y el conector MCP no incluye herramientas para deshacer la acción ni restaurarlos. Para el usuario, una eliminación accidental sigue exigiendo recuperar los elementos por otra vía o desde una copia de seguridad.

Los [Términos del servicio](/es/terms/) piden a los usuarios que revisen los resultados generados por IA antes de aplicar cambios. Aquí es especialmente importante: Flashcards puede validar el tipo de instrucción, el recurso, las columnas y el límite de filas. No puede validar el motivo por el que querías hacer el cambio.

## Las aprobaciones se controlan en el cliente

Flashcards marca `sql_query` con `readOnlyHint` y `sql_execute` con `destructiveHint`. En el [esquema estable de MCP del 25 de noviembre de 2025](https://modelcontextprotocol.io/specification/2025-11-25/schema), las anotaciones de las herramientas son solo indicaciones. Ayudan a un cliente compatible a elegir una política de aprobación, pero no la imponen.

Cuando Flashcards recibe una llamada a `sql_execute` válida y autenticada, la ejecuta de inmediato. No aparece una segunda pantalla de confirmación en Flashcards. Cualquier pausa para pedir aprobación humana ocurre en el cliente de IA, antes de que la petición llegue al servidor.

El comportamiento depende del cliente. Por ejemplo, la [documentación de OpenAI sobre el modo desarrollador](https://developers.openai.com/api/docs/guides/developer-mode) indica que las acciones de escritura requieren confirmación de forma predeterminada. El modo también permite recordar una decisión durante una conversación. Su [página de ayuda sobre las aplicaciones MCP](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt-beta) explica que las solicitudes de confirmación dependen de los permisos de la aplicación, el contexto y los controles del espacio de trabajo. Otros clientes pueden ofrecer controles distintos o ninguno.

Usa la opción más estricta que ofrezca realmente tu cliente:

- Si permite desactivar herramientas individuales, mantén `sql_execute` desactivada hasta que una tarea la necesite.
- Si puede exigir aprobación para cada cambio, activa esa opción y no permitas que el cliente recuerde las aprobaciones de escritura.
- Cuando te muestre una llamada propuesta, revisa el `workspaceId`, cada instrucción, las condiciones `WHERE` y el número de registros que esperas encontrar.
- Si no puede bloquear la herramienta de escritura ni detenerse de forma fiable antes de las llamadas, trata la conexión como si tuviera permiso de escritura desde el primer momento.

Estos ajustes reducen la posibilidad de cometer un error. La respuesta del modelo sigue necesitando criterio humano.

## Qué implica el límite de 100 filas por instrucción

Cada instrucción puede devolver o afectar un máximo de 100 registros. Cada lote admite hasta 50 instrucciones. Por tanto, una sola llamada autenticada a una herramienta puede afectar, en teoría, hasta 5.000 registros: 100 × 50, si todas las instrucciones alcanzan el máximo. Es mucho más que confirmar una sola tarjeta.

Los lotes de cambios son atómicos: o se completan todas las instrucciones o falla la transacción. La atomicidad evita que los cambios queden aplicados a medias si una instrucción produce un error. No evalúa tu intención ni permite deshacer un lote válido una vez confirmada la transacción.

El resultado serializado tiene además un límite de 48.000 caracteres. Este límite se aplica después de ejecutar el cambio y solo protege el tamaño de la respuesta MCP. Una modificación puede quedar confirmada antes de que se rechace un resultado demasiado grande. Para medir el impacto, toma como referencia el máximo de 100 filas por instrucción y consulta con `sql_query` cualquier objetivo amplio antes de escribir.

## La inyección de prompts puede venir del material de estudio

Las tarjetas de Flashcards contienen lenguaje natural: justo lo que interpreta un cliente de IA. Los apuntes importados pueden incluir instrucciones ocultas, prompts citados o texto escrito por una persona en la que no confías. Si un agente lee ese material mientras tiene disponible una herramienta de escritura, puede tomar los datos como una orden nueva.

No hace falta que OAuth falle para que esto cause problemas. El cliente autorizado ya tiene permiso para intentar la escritura.

El [informe completo de la NSA sobre seguridad de MCP](https://www.nsa.gov/Portals/75/documents/Cybersecurity/CSI_MCP_SECURITY.pdf) describe la salida de las herramientas y del modelo como una entrada no fiable para el siguiente paso de una cadena de procesamiento. Recomienda límites estrictos para los recursos, validación de parámetros, revisión de los resultados y el principio de mínimo privilegio. Estas medidas reducen el riesgo, pero no hacen imposible la inyección de prompts.

Flashcards aporta límites útiles en el servidor. Su analizador rechaza tipos de instrucciones y recursos no admitidos. La herramienta MCP tampoco puede convertirse en un intérprete de comandos ni en una conexión sin restricciones a la base de datos. Aun así, una instrucción inyectada puede pedir un cambio sintácticamente válido en tarjetas accesibles. El servidor recibe una petición permitida sin ver la conversación que convenció al modelo de enviarla.

Para tareas sensibles, limita la sesión a una fuente de confianza, un solo espacio de trabajo para la solicitud y únicamente las herramientas necesarias. Evita mezclar en la misma ejecución del agente una importación que no sea de confianza, conectores no relacionados y escrituras desatendidas en Flashcards. Una sesión más acotada facilita detectar llamadas sospechosas, aunque no crea una barrera de aislamiento.

## La privacidad de los datos después de Flashcards depende del cliente y del modelo

Flashcards sigue siendo el sistema de referencia, pero el contenido solicitado viaja al cliente MCP. A partir de ahí, cada producto lo trata de forma distinta. El cliente puede ejecutar el modelo por su cuenta, recurrir a otro proveedor, guardar los resultados de las herramientas en el historial de la conversación, ponerlos a disposición de los administradores del espacio de trabajo o usarlos con funciones de memoria. Cada arquitectura crea un límite de privacidad distinto.

OpenAI ofrece un ejemplo concreto. Su [documentación actual sobre las aplicaciones en ChatGPT](https://help.openai.com/en/articles/11487775-connector) indica que los datos recuperados de las aplicaciones pueden usarse como contexto para la respuesta e interactuar con la memoria o la búsqueda web. También explica que la configuración predeterminada para usar datos en el entrenamiento difiere entre las cuentas Business, Enterprise y Edu y los planes personales que tienen activado «Improve the model for everyone». Son reglas específicas de OpenAI, no un comportamiento general de MCP.

Comprueba qué cliente, tipo de cuenta, política del espacio de trabajo, región y configuración vas a usar. Busca sus reglas sobre conservación, entrenamiento, memoria, acceso de administradores, subencargados del tratamiento y eliminación. Si la documentación no aclara si el material confidencial puede salir del cliente, no hagas la prueba con un mazo real.

Eliminar la cuenta alojada, desconectar el conector y borrar las copias guardadas por otros servicios son operaciones distintas. La [política de privacidad de Flashcards](/es/privacy/) explica cómo eliminar los datos alojados. Flashcards no puede borrar datos que ya haya conservado un cliente o proveedor del modelo; usa también los controles de ese proveedor.

## Desconectar y revocar credenciales son pasos distintos

La implementación actual de OAuth de Flashcards emite tokens de acceso válidos durante una hora y tokens de actualización (refresh tokens) rotatorios sin vencimiento fijo. Flashcards no ofrece una interfaz de usuario para revocar conexiones OAuth ni un endpoint público de revocación. Al desconectar el conector, el cliente puede descartar sus credenciales. Esa acción en el cliente no garantiza que los tokens queden invalidados en el servidor.

Las claves `fca_` de la API para agentes sin interfaz (headless) son otro tipo de credencial. Esas claves se pueden revocar desde **Agent Connections** en Flashcards. Mantén separadas las dos vías de autenticación al documentar cómo cerrar el acceso.

Si tu modelo de amenazas exige una revocación OAuth inmediata en el servidor, el conector OAuth actual no ofrece ese control al usuario. Esta limitación importa más para una conexión sensible y duradera que para un mazo público desechable.

## Una lista práctica antes de conectarte

1. Clasifica el material de origen. Los apuntes públicos, la información personal, el contenido confidencial del empleador y los datos regulados no deberían compartir una misma política de acceso. Si no tienes autorización para enviar el material al cliente y a sus procesadores, no lo expongas mediante MCP.
2. Verifica la URL del servidor. El endpoint documentado es `https://mcp.flashcards-open-source-app.com/mcp`. Evita dominios que se le parezcan y definiciones de conectores copiadas de fuentes desconocidas.
3. Lee las políticas de ambas partes. Empieza por la [política de privacidad de Flashcards](/es/privacy/) y comprueba después las reglas de conservación, entrenamiento, memoria, registro de actividad y eliminación del cliente de IA concreto.
4. Decide si basta con un espacio de trabajo aparte. Sirve para ensayar, pero la conexión todavía puede dirigirse a otros espacios de trabajo de la misma cuenta. Usa otra cuenta o despliegue cuando necesites un aislamiento estricto.
5. Empieza con `sql_execute` bloqueada en el cliente. Si el cliente no permite bloquearla, reconoce antes de conectarte que la credencial OAuth conserva la capacidad de escritura.
6. Solicita solo los datos necesarios. Selecciona únicamente las columnas y filas que necesita la respuesta y no incluyas en la conversación secretos ajenos a la tarea.
7. Haz una copia de seguridad verificada antes de aplicar cambios masivos. La [guía de copias de seguridad de Flashcards](/es/blog/how-to-back-up-flashcards/) explica el proceso general.
8. Comprueba con `sql_query` todas las actualizaciones o eliminaciones amplias antes de ejecutarlas. Prefiere los ID exactos de tarjetas o mazos, compara el número de coincidencias con lo que esperabas y divide el cambio en instrucciones pequeñas.
9. Usa las aprobaciones del cliente cuando existan. Confirma cada vez el espacio de trabajo y la carga útil completa; no des por hecho que la indicación de operación destructiva obligará al cliente a pedir confirmación.
10. Cierra el acceso de forma deliberada. Desconecta el conector OAuth y elimina del cliente las credenciales almacenadas, sin olvidar la limitación actual de revocación en el servidor. Revoca las claves `fca_` en Agent Connections y gestiona por separado la eliminación posterior de los datos.

Para configurar la conexión después de tomar estas decisiones, consulta [Cómo conectar Flashcards a Claude con MCP](/es/blog/how-to-connect-flashcards-to-claude-with-mcp/). La guía explica los pasos; esta lista te ayuda a decidir si la conexión debería tener acceso a un mazo concreto.

## Cómo ayudan el código abierto y el autohospedaje

El conector de Flashcards tiene varias propiedades útiles: herramientas separadas de lectura y escritura, una lista cerrada de instrucciones permitidas, comprobaciones de acceso al espacio de trabajo en cada llamada, campos de programación de solo lectura y código fuente público. Estos controles facilitan inspeccionar y limitar su alcance. Reducen el riesgo, pero no pueden garantizar que un cliente sea seguro ni que el modelo tome la decisión correcta.

Un [despliegue autohospedado](/es/docs/self-hosting/) puede trasladar el almacenamiento y las operaciones de Flashcards a una infraestructura bajo tu control. Pero las consultas que envíes a un servicio de IA externo seguirán llevando datos de las tarjetas fuera de ese despliegue. La ruta del modelo y del cliente debe cumplir el mismo estándar de privacidad que la base de datos.

## Una regla sencilla para decidir

Usa las herramientas de lectura de MCP cuando aceptes que los datos solicitados salgan de Flashcards por la ruta del cliente elegido, las condiciones del proveedor te resulten aceptables y la tarea justifique esa divulgación. Considera que la conexión tiene acceso completo salvo que tu cliente haya bloqueado realmente `sql_execute`.

Activa la herramienta de escritura solo para una tarea bien delimitada, cuando el cliente pueda detenerse antes de cada llamada importante, hayas comprobado previamente qué filas afectará y exista una copia de seguridad utilizable. Recuerda que un lote puede modificar mucho más de 100 registros y que MCP no ofrece una función para deshacer una eliminación.

No uses la conexión MCP si el mazo no se puede compartir con el cliente o sus procesadores o si no están claras las políticas que regirán los datos después de salir de Flashcards. Tampoco la uses si necesitas aislamiento estricto entre espacios de trabajo de una misma cuenta, si es obligatoria la revocación inmediata de OAuth o si el flujo requiere escrituras destructivas sin supervisión. En esos casos, usa Flashcards sin MCP o elige un despliegue y una ruta de modelo cuyo flujo de datos completo cumpla tus requisitos.
