---
title: "¿Quizlet tiene una API pública en 2026? Estado actual y alternativas seguras"
description: "¿Quizlet tiene una API? A 18 de agosto de 2026, no hay una API pública de autoservicio documentada. Compara las alternativas con soporte oficial."
image: "/blog/quizlet-api.png"
date: "2026-08-18"
keywords:
  - "API de Quizlet"
  - "Quizlet tiene API"
  - "API pública de Quizlet"
  - "API para desarrolladores de Quizlet"
  - "alternativa a la API de Quizlet"
  - "automatizar flashcards"
---

A 18 de agosto de 2026, la documentación pública de Quizlet no incluye una API para desarrolladores con acceso de autoservicio ni un portal público para desarrolladores. Un desarrollador independiente no dispone hoy de una vía oficial para registrar una aplicación, obtener una clave de API de Quizlet y usar endpoints documentados para leer o escribir datos de flashcards.

Esta conclusión se limita a la documentación pública de Quizlet; no describe sus sistemas internos. Quizlet sí ofrece integraciones propias y con socios. Su aplicación para ChatGPT y su complemento para Google Classroom son dos ejemplos actuales. Ninguno de ellos abre una API de Quizlet de uso general a otras aplicaciones.

**Información comprobada:** 18 de agosto de 2026.

> **Aviso de transparencia:** Soy Kirill Markin y desarrollo Flashcards Open Source App. Su Agent API y su servidor MCP aparecen como alternativas más adelante. Flashcards no es compatible con Quizlet ni importa automáticamente sets de Quizlet.

![Desarrollador que compara la exportación y la inserción de Quizlet, sus integraciones específicas y una API de flashcards documentada](/blog/quizlet-api.png)

## Respuesta corta: no hay una API de Quizlet de autoservicio documentada

Si has buscado «¿Quizlet tiene una API?» porque quieres automatizar el propio Quizlet, la respuesta práctica hoy es que **no hay ninguna API pública de autoservicio documentada**.

Desde fuera, varias funciones oficiales pueden parecer similares a una API. En realidad, resuelven tareas más acotadas:

| Lo que necesitas | Opción con soporte oficial | Para qué sirve | Lo que no ofrece |
|---|---|---|---|
| Trasladar el texto de un set que hayas creado | [Exportación desde el sitio web de Quizlet](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | Una copia puntual de términos y definiciones | Imágenes, exportación de sets copiados, historial de estudio o acceso mediante API |
| Insertar un set público en un sitio web o una página de un LMS | [Inserción de sets de Quizlet](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | Una actividad de estudio que conserva la marca de Quizlet dentro de tu página | Datos estructurados de las tarjetas o acceso de lectura y escritura |
| Convertir una conversación de ChatGPT en un set de Quizlet | [Aplicación de Quizlet para ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | Crear y previsualizar un set mediante `@Quizlet` | Credenciales o endpoints para tu propia aplicación |
| Asignar trabajo de Quizlet en Google Classroom | [Complemento de Quizlet para Google Classroom](https://quizlet.com/blog/quizlet-google-classroom-add-on) | Buscar, asignar y hacer un seguimiento de actividades en Classroom | Una API general para software educativo personalizado |
| Crear tu propia integración con Quizlet | Actualmente no hay ninguna vía de autoservicio documentada | Puede existir un acuerdo específico con un socio | Registro público, claves de API o un contrato documentado para los datos de las tarjetas |
| Automatizar tu propio espacio de trabajo de flashcards | [Agent API de Flashcards](/docs/api/) o [conector MCP](/docs/mcp-connector/) | Lecturas y escrituras recurrentes de tarjetas y mazos, limitadas a un espacio de trabajo | Compatibilidad con Quizlet o importación automática desde Quizlet |

La diferencia es sencilla: copiar una vez el texto de tus propias tarjetas es una exportación. Mostrar Quizlet en otra página es una inserción. Una integración específica solo funciona dentro del flujo del producto para el que se creó. Si un programa necesita crear, leer y editar tarjetas de forma recurrente, necesita una API de lectura y escritura documentada.

## La exportación, la inserción y el acceso para socios no equivalen a una API pública

Una API pública ofrece un contrato a los desarrolladores externos: documentación, autenticación, operaciones admitidas, reglas de uso y una forma de obtener credenciales. Ninguna de las opciones públicas actuales de Quizlet ofrece ese recorrido completo de autoservicio.

La **exportación** de Quizlet es una transferencia manual. Quien haya creado un set puede utilizar el sitio web para organizar sus términos y definiciones, seleccionar **Copy text** y pegar el resultado en otro lugar. Quizlet indica que no se pueden exportar imágenes ni sets copiados y que la función solo está disponible en el sitio web. Esto sirve para hacer con cuidado una migración puntual. No permite que el software mantenga sincronizados dos sistemas.

La **inserción** sirve para presentar el contenido, no para acceder a sus datos. Quizlet permite copiar el HTML de un set público en los modos Match, Learn, Test, Flashcards o Spell. La actividad insertada conserva el logotipo de Quizlet y los estudiantes interactúan con su interfaz. Tu aplicación no recibe el set como registros de tarjetas que pueda editar.

Una **integración específica** sigue su propio flujo de producto acordado. Quizlet puede trabajar con ChatGPT o Google Classroom sin ofrecer la misma interfaz a todos los desarrolladores. Estos lanzamientos demuestran que esas integraciones existen; no demuestran que detrás de ellas haya una API pública de Quizlet para uso general.

Por esa misma razón, un wrapper antiguo o una petición visible en las herramientas para desarrolladores del navegador no constituyen una API de Quizlet con soporte oficial. Faltan las dos piezas esenciales: documentación pública y un contrato estable para desarrolladores.

## Elige la vía que encaje con la tarea

### Para una copia de seguridad o una migración puntual, utiliza la exportación

Utiliza el flujo de exportación oficial de Quizlet para un set que hayas creado. Como el proceso termina con **Copy text**, conserva intacta la primera copia que pegues antes de limpiar los separadores o asignar los campos. Estás guardando términos y definiciones, no descargando un paquete de mazo que puedas restaurar. Las imágenes y el historial de estudio se quedan en Quizlet.

La lista práctica de comprobaciones está en [Cómo exportar sets de Quizlet en 2026](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Explica cómo conservar una copia original y otra de trabajo, usar UTF-8, revisar las tabulaciones y las definiciones de varias líneas, y distinguir entre trasladar el contenido de las tarjetas y trasladar el estado de programación.

La exportación encaja cuando el traslado se hace una sola vez. No sirve para crear contenido a diario, sincronizar sistemas ni hacer ediciones recurrentes desde otro software.

### Para mostrar el contenido, utiliza la inserción oficial

Si quieres que los estudiantes repasen un set público de Quizlet desde el sitio de una clase o una página de un LMS, utiliza el código de inserción que Quizlet proporciona en su sitio web. Elige la actividad, selecciona **Copy HTML** y añade el resultado a la página. Los estudiantes obtienen una actividad interactiva de Quizlet; el sitio que la aloja no recibe los datos brutos de las tarjetas.

A menudo, esto es todo lo que necesita un docente. Llamarlo API solo hace que el requisito parezca más complicado de lo que es.

### Para ChatGPT o Google Classroom, utiliza la integración específica

El anuncio de Quizlet para ChatGPT del 10 de marzo de 2026 describe un flujo concreto: conecta la aplicación de Quizlet, empieza el prompt con `@Quizlet`, previsualiza en ChatGPT el set generado y después ábrelo en Quizlet para personalizarlo y estudiar. Es una forma admitida de crear un set de Quizlet a partir de esa conversación. No entrega una credencial reutilizable de la API de Quizlet a tu bot, script o sitio web.

El anuncio de Quizlet para Google Classroom del 30 de junio de 2026 es igual de específico. El complemento permite a los educadores buscar y asignar actividades, como preguntas de práctica, flashcards y juegos, y hacer un seguimiento de la participación y el progreso dentro del flujo de Classroom. Quizlet indica que requiere Google Workspace for Education Plus; puede que los educadores tengan que pedir permiso a su administrador de TI o solicitarle que les proporcione el complemento.

Si cualquiera de estos flujos específicos ya coincide con tu objetivo, utilízalo. Si necesitas una aplicación personalizada, ninguna de estas integraciones sustituye el acceso público para desarrolladores.

### Para automatizar tareas recurrentes, elige una interfaz de lectura y escritura documentada

Automatizar tareas recurrentes exige que tu software pueda repetir el mismo trabajo de forma fiable: crear tarjetas a partir de apuntes, listar mazos, actualizar respuestas o gestionar un espacio de trabajo a lo largo del tiempo. Una exportación mediante el portapapeles no ofrece ese contrato.

La vía segura consiste en utilizar un sistema de flashcards que documente cómo se autentica el software externo y qué operaciones de lectura y escritura admite. Puede que eso implique elegir una alternativa a la API de Quizlet para el flujo automatizado y conservar Quizlet para las tareas de estudio que el servicio sí ofrece públicamente.

## Qué ofrece realmente Flashcards como alternativa mediante API

Flashcards Open Source App publica dos vías de acceso al mismo conjunto limitado de datos de cada usuario:

- La [Agent API externa](/docs/api/) empieza en `GET https://api.flashcards-open-source-app.com/v1/`. Su respuesta de descubrimiento guía al agente durante el inicio de sesión mediante OTP por correo electrónico, la creación de una clave de API y la selección del espacio de trabajo. Las lecturas utilizan una ruta de consultas de estilo SQL; las escrituras, una ruta de ejecución independiente.
- El [servidor MCP remoto](/docs/mcp-connector/) está disponible en `https://mcp.flashcards-open-source-app.com/mcp`. Los clientes MCP disponen de tres herramientas: `list_workspaces`, `sql_query` y `sql_execute`.

Ambas vías están limitadas al espacio de trabajo. Los recursos publicados son `workspace`, `cards`, `decks` y `review_events`, y los resultados tienen un límite de 100 filas por sentencia. La interfaz de estilo SQL utiliza un dialecto limitado; no proporciona acceso directo a PostgreSQL. Tampoco hay un esquema OpenAPI, así que los flujos que dependan de clientes generados a partir de OpenAPI necesitarán otra interfaz.

Estas opciones permiten a un desarrollador o a un agente de IA automatizar sus propias flashcards. No sirven para leer una URL de Quizlet, mantener una copia sincronizada de una cuenta de Quizlet ni actuar como un cliente de Quizlet no documentado. Tampoco hay un importador automático de Quizlet. Para migrar, exporta primero los términos y las definiciones de tu propio set, revisa el texto y después asigna cada elemento a los campos correspondientes de las tarjetas de destino. El nuevo sistema crea su propio estado de estudio; el historial de Quizlet no se transfiere.

Para conocer las diferencias entre ambos productos más allá del acceso mediante API, consulta la [comparación de la alternativa de código abierto a Quizlet](/blog/quizlet-alternative/).

## Las peticiones privadas del navegador no son un atajo seguro

La interfaz web de Quizlet hace peticiones de red, como cualquier aplicación web moderna. Encontrar una de esas peticiones no la convierte en un endpoint con soporte oficial para tu programa.

Los endpoints privados del navegador pueden depender de cookies de sesión, formatos internos, controles contra el abuso y supuestos ligados a la interfaz del momento. Pueden cambiar sin versionado público ni instrucciones de migración. Y, de forma más directa, las [Condiciones del servicio de Quizlet](https://quizlet.com/tos), actualizadas por última vez el 28 de mayo de 2026, prohíben el scraping y otros tipos de extracción automatizada, además del uso automatizado no autorizado del servicio.

Es una base frágil y arriesgada para un script personal, y mucho más para un producto. No voy a proponer endpoints ni explicar aquí cómo aplicar ingeniería inversa.

Para tu propio set, utiliza la exportación cuando necesites un traslado puntual. Inserta un set público cuando los estudiantes deban usarlo desde otra página. Recurre a la integración específica con ChatGPT o Google Classroom para esos flujos concretos. Si necesitas lecturas y escrituras recurrentes, elige un software que documente su contrato de automatización o mantén manual la parte de Quizlet hasta que la empresa publique uno.

## Cómo saber si la situación cambia

Quizlet podría lanzar un programa para desarrolladores después de la fecha de comprobación de este artículo. La señal que debes buscar es un portal oficial para desarrolladores o documentación que explique quién puede registrarse, cómo funciona la autenticación, qué operaciones con tarjetas se admiten y qué reglas de uso se aplican.

Otro wrapper de terceros no cambiaría la respuesta. Tampoco una nueva colaboración específica. Hasta que Quizlet documente un acceso de autoservicio para desarrolladores, trata con cautela las afirmaciones sobre una API actual de Quizlet y elige la vía con soporte oficial que encaje con tu tarea.
