---
title: "Alternativas a RemNote en 2026: opciones gratuitas y de código abierto"
description: "Compara las alternativas a RemNote según cómo gestionan notas, PDF y tarjetas, su precio y el autoalojamiento. Descubre qué puedes migrar, qué se pierde y cómo ensayar un cambio seguro."
date: "2026-03-19"
updated: "2026-08-31"
image: "/blog/remnote-alternative.png"
keywords:
  - "alternativa a remnote"
  - "alternativas a remnote"
  - "remnote código abierto"
  - "alternativa gratuita a remnote"
  - "remnote vs anki"
  - "alternativa a remnote de código abierto"
  - "alternativa a remnote autoalojada"
  - "app de flashcards sin conexión"
---

RemNote llama **Flashcards Only** («Solo tarjetas») a su exportación para Anki. Las viñetas que no contienen tarjetas se omiten, y el paquete no incluye tus notas enlazadas, tus PDF ni el flujo de trabajo de Reader. Una alternativa puede importar todas las preguntas y respuestas y, aun así, dejar atrás el sistema que daba sentido a esas tarjetas.

La mejor **alternativa a RemNote** es la que resuelve tu motivo para cambiar sin quitarte por el camino la parte de RemNote que todavía funciona. Para algunas personas, el problema es el precio. Para otras, son los archivos locales normales, un sistema de tarjetas más completo o un código fuente que puedan ejecutar por su cuenta.

> **Aviso:** Soy Kirill Markin y desarrollo [Flashcards](/es/), uno de los productos que se comparan aquí. Flashcards no sustituye a RemNote por completo. RemNote ofrece el flujo integrado de notas y PDF más sólido de esta comparación, mientras que Anki tiene el sistema de tarjetas y los formatos de migración más maduros.

**Datos y precios comprobados:** 31 de agosto de 2026. Los importes indicados corresponden a los precios públicos de EE. UU. y a la facturación anual cuando así se especifica; los impuestos, la región, las tiendas de aplicaciones y las condiciones de la beta pueden cambiar el precio.

![Una conservadora de archivo prueba a transferir una pequeña muestra de un dosier de estudio enlazado e intacto a sistemas separados de fichas, archivos y bloques](/blog/remnote-alternative.png)

## Empieza por aclarar por qué quieres cambiar

- **Precio:** Comprueba si RemNote Free ya cubre tu flujo de trabajo real. No pone límites a las notas, las flashcards ni los dispositivos sincronizados, pero sí restringe la cantidad de documentos anotados y algunas funciones avanzadas.
- **Un flujo de tarjetas demasiado ligado a las notas:** Prueba Anki. Allí, las tarjetas, las plantillas, las importaciones y FSRS pueden ocupar el centro del sistema.
- **Archivos locales de notas en Markdown:** Divide el trabajo entre Obsidian para las notas y Anki para los repasos. La integración es menor, pero queda mucho más claro dónde están tus datos y quién los controla.
- **Notas conectadas de código abierto, con PDF y tarjetas integradas:** Logseq es la opción más parecida, con una salvedad importante en 2026: su nueva versión de base de datos está en beta, su nueva app para iOS y la sincronización en tiempo real están en fase alfa, y su nueva app para Android todavía no está disponible para pruebas.
- **Código fuente y autoalojamiento para un sistema centrado en tarjetas:** Plantéate Flashcards si te bastan las tarjetas de anverso y reverso, aceptas empezar con una programación nueva y estás dispuesto a asumir una carga operativa considerable en AWS.
- **Lectura de PDF, subrayados enlazados y tarjetas en un solo lugar:** Quédate con RemNote. Ninguna de las otras opciones reproduce bien ese flujo de trabajo.

Es fácil pasar por alto esta última respuesta. Cambiar no es avanzar si la alternativa resuelve una preocupación por la licencia, pero estropea la sesión de estudio de mañana.

## Alternativas a RemNote: matriz de decisión

| Opción | Mejor motivo para elegirla | Notas y PDF | Planificador de repasos | Uso sin conexión y control de los datos | Precio comprobado el 31 de agosto de 2026 | Principal límite de la migración |
|---|---|---|---|---|---|---|
| **Seguir con RemNote** | Las notas conectadas, la lectura de fuentes y las tarjetas deben estar juntas | Base de conocimientos integrada y Reader con subrayados de PDF, notas y tarjetas enlazados | FSRS-6 en beta, con activación manual y entrenamiento de pesos; SM-2 sigue siendo la opción predeterminada | Las apps de escritorio y móvil funcionan sin conexión después de iniciar sesión; en escritorio se pueden crear bases de conocimientos exclusivamente locales | Gratis; Pro: 8 US$/mes con facturación anual; Pro con IA: 18 US$/mes con facturación anual | La exportación nativa es la mejor opción para restaurar datos en RemNote, pero actualmente omite imágenes y PDF |
| **Anki** | Las tarjetas, las plantillas, los complementos y la fidelidad de la colección son lo primero | No integra un espacio de trabajo de notas conectadas ni lectura de PDF | Controles maduros de FSRS, parámetros optimizados, retención deseada y simulación de carga de trabajo | Colecciones locales en escritorio y móvil; núcleo de escritorio de código abierto y servidor oficial de sincronización autoalojado | Escritorio, AnkiWeb y AnkiDroid son gratis; la app oficial AnkiMobile es de pago en iOS | RemNote exporta las tarjetas a `.apkg`, no todo el sistema de notas; verifica los datos de programación y el contenido multimedia con una importación de prueba |
| **Obsidian + Anki** | Quieres notas locales en Markdown sin renunciar a un planificador de repasos maduro | Obsidian gestiona las notas y los archivos adjuntos locales; Anki gestiona las tarjetas; no hay un único flujo integrado desde Reader hasta el repaso | FSRS de Anki | Bóveda local de Markdown y colección local de Anki; Obsidian es gratis, pero propietario | Obsidian gratis; Sync opcional desde 4 US$/mes con facturación anual; precios de Anki indicados arriba | Las exportaciones de RemNote a Markdown y Anki crean dos sistemas; los enlaces activos de RemNote entre notas, fuentes y tarjetas no se convierten en un único flujo portátil |
| **Logseq** | Buscas específicamente una herramienta de esquemas de código abierto, centrada en las notas, con PDF y tarjetas integradas | Bloques enlazados, anotaciones en PDF y repasos de tarjetas con cuatro valoraciones | Planificador integrado de cuatro valoraciones; [la documentación relaciona su nuevo algoritmo](https://github.com/logseq/docs/blob/master/db-version.md#cards) con el proyecto FSRS original | App con licencia AGPL; los datos de la versión de base de datos pueden exportarse como SQLite, EDN o Markdown estándar con pérdidas | App gratuita y de código abierto | La versión de base de datos actual está en beta; su nueva app para iOS y la sincronización en tiempo real están en fase alfa, la nueva app para Android todavía no está disponible para pruebas y el estado SRS del Logseq antiguo no es compatible con el nuevo algoritmo de tarjetas |
| **Flashcards** | Quieres tarjetas sencillas en una plataforma de código abierto para web, móvil y backend | Sin base de conocimientos para notas, backlinks, lector de PDF ni app nativa de escritorio | FSRS-6 con pesos fijos y menos controles de ajuste que Anki o RemNote | Clientes web, iOS y Android diseñados para funcionar sin conexión; pila tecnológica completa con licencia MIT y una vía de producción en AWS | App alojada gratis durante la beta; el autoalojamiento añade costes de infraestructura y proveedores | Sin importador directo de RemNote o Anki; el contenido puede reconstruirse, pero el historial de repasos y el estado de FSRS no se transfieren |

Esta tabla no pretende puntuar las funciones. Un estudiante que trabaja mucho con PDF puede perder más al cambiar a la opción «más abierta» de lo que gana con su licencia. Alguien con un mazo sencillo de vocabulario quizá esté pagando por un sistema de notas que ya no usa. Empieza por la fila que refleje lo que necesitas y después pon a prueba los límites de la migración.

Gratis y de código abierto son dos filtros distintos. RemNote Free y Obsidian no cuestan nada en su versión básica, pero son productos propietarios. El núcleo de Anki para escritorio, Logseq y Flashcards tienen el código fuente publicado; AnkiMobile sigue siendo una app de pago para iOS, y autoalojar Flashcards también genera costes en la nube.

## Quédate con RemNote cuando el producto sea el flujo conectado

RemNote reúne pasos que la mayoría de las alternativas separan. Con su [Reader](https://help.remnote.com/en/articles/6690975-learning-from-pdfs-and-files-with-the-remnote-reader) puedes mantener un PDF abierto junto a las notas, pegar referencias que apuntan al subrayado exacto y convertir esas notas o subrayados en flashcards. El plan Free permite anotar tres documentos; la [página de precios](https://www.remnote.com/pricing) actual incluye documentos anotados sin límite en Pro.

Su planificador de repasos ya no es un motivo evidente para cambiar. RemNote documenta ahora [FSRS-6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) como una opción beta que se activa manualmente. Después de al menos 1.000 repasos, RemNote puede entrenar los pesos con tu propio historial. Anki sigue ofreciendo controles más avanzados, pero quien esté cómodo con las notas y los PDF de RemNote no necesita abandonarlos solo para usar FSRS.

El funcionamiento sin conexión también va más allá de «funciona en una pestaña abierta del navegador». Las [apps de escritorio y móvil de RemNote](https://help.remnote.com/en/articles/6752029-offline-mode) permiten editar notas y repasar tarjetas sin conexión después de instalarlas e iniciar sesión. La app de escritorio conserva una copia local completa de las imágenes y los PDF. En móvil y web pueden faltar los archivos multimedia que no estén en caché, y la app web no puede arrancar sin conexión si la pestaña se ha cerrado o recargado.

Si has empezado esta búsqueda por una **alternativa gratuita a RemNote**, prueba el plan Free antes de cambiar. Si el problema es el acceso al código fuente, el modo local no equivale a código abierto ni a autoalojamiento. La guía específica sobre [si RemNote es de código abierto](/es/blog/is-remnote-open-source/) explica este límite en detalle.

## RemNote frente a Anki: elige qué ocupa el centro

La distinción útil al comparar **RemNote frente a Anki** no es «notas frente a ausencia de notas». Anki también almacena notas, pero una nota de Anki es un conjunto de campos que las [plantillas de tarjetas](https://docs.ankiweb.net/templates/intro.html) convierten en tarjetas de repaso. RemNote parte de documentos y viñetas conectadas que pueden convertirse en tarjetas. Uno es un sistema maduro para producir tarjetas; el otro, un espacio de estudio organizado alrededor de notas y fuentes.

Elige Anki cuando lo esencial sean los campos personalizados, los distintos tipos de tarjeta generados, las plantillas HTML/CSS, los complementos o el historial de repasos acumulado durante años. Su [configuración actual de FSRS](https://docs.ankiweb.net/deck-options.html#fsrs) incluye la optimización de parámetros, la retención deseada y la simulación de carga de trabajo. Sus [exportaciones](https://docs.ankiweb.net/exporting.html) pueden conservar una colección completa en `.colpkg`, mientras que los paquetes de mazos `.apkg` pueden incluir información de programación, preajustes y contenido multimedia.

RemNote permite dar el salto a Anki, pero la etiqueta es importante: la [exportación a Anki se llama «Flashcards Only»](https://help.remnote.com/en/articles/7898019-exporting-notes). Se excluyen las viñetas que no contienen tarjetas. RemNote conserva el contexto de los elementos superiores en las tarjetas exportadas y simplifica el comportamiento de las preguntas de opción múltiple, pero esa exportación no es tu base de conocimientos, tu biblioteca de PDF ni tu flujo de lectura completo. La página oficial de exportación de RemNote tampoco promete que todos los datos de programación lleguen a Anki. Haz una prueba antes de considerar que la migración no tiene pérdidas.

Anki es la opción más sólida de esta lista si las tarjetas son lo primero. No es el sustituto más directo de RemNote Reader. Si todavía anotas artículos y escribes notas conectadas, combínalo con una herramienta de notas en lugar de forzar a Anki a convertirse en una. La [guía más amplia de alternativas a Anki](/es/blog/best-anki-alternatives/) incluye más opciones centradas en tarjetas.

## Obsidian más Anki: archivos locales y una división deliberada

Algunas personas que buscan alternativas a RemNote no necesitan otra app que lo haga todo. Quieren notas que sigan siendo archivos normales y un sistema de repasos que pueda madurar por separado. Obsidian más Anki es la forma más limpia de dividir esas funciones.

[Obsidian guarda las notas](https://obsidian.md/help/Files%2Band%2Bfolders/How%2BObsidian%2Bstores%2Bdata) como texto sin formato Markdown en una carpeta local. La app es gratuita y no requiere cuenta; [Obsidian Sync](https://obsidian.md/pricing), que es opcional, parte de 4 US$ al mes con facturación anual. Obsidian no es de código abierto, pero los archivos de notas se pueden leer directamente y respaldar con herramientas normales de gestión de archivos.

Usa la exportación Markdown de RemNote para las notas y su exportación `.apkg` para las tarjetas. Prepárate para limpiar el resultado. Un esquema jerárquico exportado como Markdown legible no equivale a las referencias, los portales, las plantillas ni los marcadores de PDF activos de RemNote. Además, cuando las notas y las tarjetas viven en dos apps, los cambios dejan de propagarse automáticamente entre ellas.

Esta opción funciona cuando controlar tus archivos locales pesa más que un ciclo fluido de «subrayar, enlazar, crear una tarjeta y repasar». No compensa si ese ciclo es precisamente el motivo por el que elegiste RemNote.

## Logseq: la opción de código abierto centrada en notas está en transición

Logseq merece aparecer en una comparación de **alternativas a RemNote de código abierto** porque realmente se centra en las notas. El [repositorio oficial con licencia AGPL](https://github.com/logseq/logseq) describe una app de gestión del conocimiento con bloques enlazados y anotación de PDF. La [documentación actual de la versión de base de datos](https://github.com/logseq/docs/blob/master/db-version.md#cards) añade tarjetas integradas: etiqueta un bloque, consulta cuándo toca repasarlo y valóralo con una de cuatro opciones.

El estado actual importa más que la lista de funciones. El propio repositorio de Logseq indica que la versión de base de datos está en beta y que su nueva app para iOS y la sincronización en tiempo real están en fase alfa; la documentación actual de la versión de base de datos señala que la app para Android todavía no está disponible para pruebas alfa. Logseq advierte expresamente de que se pueden perder datos y recomienda usar un grafo de prueba que no sea crítico, además de guardar copias de seguridad. Sus [notas sobre los cambios en la versión de base de datos](https://github.com/logseq/docs/blob/master/db-version-changes.md#high-level-changes) también indican que el nuevo algoritmo de tarjetas no importa las propiedades ni los datos SRS de las flashcards antiguas de Logseq.

La portabilidad exige la misma precisión. La [documentación actual sobre la exportación de la versión de base de datos](https://github.com/logseq/docs/blob/master/db-version.md#export-and-import) ofrece SQLite con archivos, EDN y Markdown estándar. Indica que EDN es la única exportación editable que captura por completo los datos del grafo, pero no recomienda usar EDN como única copia de seguridad. El Markdown estándar omite propiedades y marcas temporales.

Por tanto, Logseq es la opción que conviene evaluar cuando importan a la vez el código abierto, las notas enlazadas, los PDF y las tarjetas integradas. No es la opción que usaría para trasladar en un solo día una base de conocimientos crítica para unos estudios de Medicina en agosto de 2026. Primero pruébalo en paralelo con RemNote y espera a que la transición actual se estabilice en los dispositivos que realmente usas.

## Flashcards: código abierto en toda la pila, modelo de estudio limitado

Flashcards plantea casi el equilibrio opuesto a RemNote. Sus [funciones](/es/features/) se centran en tarjetas de anverso y reverso en Markdown, mazos, etiquetas, contenido multimedia, repasos con FSRS, clientes diseñados para funcionar sin conexión y creación de borradores de tarjetas asistida por IA. No tiene una base de conocimientos de notas conectadas, lector de PDF, app nativa de escritorio ni importador directo de RemNote.

El código abierto abarca toda la pila: el repositorio con licencia MIT incluye web, iOS, Android, autenticación, backend, sincronización e infraestructura. La [guía oficial de autoalojamiento para producción](/es/docs/self-hosting/) usa AWS CDK. No es una aplicación local que se instala con un solo comando. Quien lo despliega se hace cargo de los costes de la nube, los secretos, las migraciones, la monitorización, las copias de seguridad, las pruebas de restauración y las apps móviles, que deben compilarse por separado.

La migración es una limitación aún mayor para quien ya usa RemNote. Flashcards importa sus propios paquetes `flashcards.zip`, no archivos Markdown de RemNote ni `.apkg` de Anki. Esos paquetes contienen tarjetas, etiquetas y contenido multimedia referenciado, pero no el historial de repasos, el estado de FSRS, la configuración del espacio de trabajo, la estructura completa de los mazos ni las cuentas. El chat con IA puede convertir el texto exportado en borradores de tarjetas para que los revises; eso reconstruye el contenido, no continúa la colección anterior. La [guía de migración desde TXT](/es/blog/migrate-from-anki-txt-export-open-source-flashcards/) muestra paso a paso ese límite con pérdidas.

Elige Flashcards para un sistema de tarjetas nuevo o sencillo cuando te importe acceder al código de toda la pila. Conserva RemNote para un estudio conectado y elige Anki cuando sean prioritarias la fidelidad de la migración o una estructura de tarjetas avanzada. Para una comparación más específica de sistemas de tarjetas, consulta [Anki vs Flashcards](/es/blog/anki-vs-flashcards-open-source-app/) y la [guía de apps de flashcards de código abierto](/es/blog/best-open-source-flashcard-apps-2026/).

## Qué no se migrará bien desde RemNote

RemNote ofrece varias exportaciones útiles, pero ningún archivo reproduce por sí solo el producto en otro lugar.

- **La exportación completa de RemNote** es el mejor formato para restaurar datos en RemNote. Actualmente omite las imágenes y los PDF.
- **La exportación `.apkg` de Anki** solo contiene flashcards. Las viñetas que no tienen tarjetas desaparecen de esta vía, y el resultado no incluye tu sistema de notas enlazadas.
- **Markdown, HTML, OPML y texto** facilitan la lectura del contenido en otros sitios. No hacen que otra app comprenda todas las relaciones o flujos de trabajo específicos de RemNote.
- **Los subrayados y los documentos fuente en PDF** requieren una comprobación aparte. RemNote Reader permite descargar un PDF con subrayados, pero no des por hecho que la exportación completa de la base de conocimientos contiene ese archivo.
- **La configuración, los temas y los plugins** no se incluyen en una copia de seguridad manual de RemNote, según la [documentación sobre copias de seguridad](https://help.remnote.com/en/articles/6301627-remnote-backups).
- **El estado de los repasos** debe verificarse tarjeta por tarjeta en el destino. Aunque una importación conserve la pregunta y la respuesta, puede reiniciar la programación.

Por eso no basta con que una herramienta «admita Markdown» o «importe Anki». La portabilidad tiene varias capas: notas legibles, contenido multimedia utilizable, documentos fuente enlazados, estructura de tarjetas e historial de aprendizaje.

## Ensaya la salida antes de cancelar

Haz que el cambio sea reversible. Una hora tranquila ahora sale más barata que descubrir que falta un PDF durante la semana de exámenes.

1. Crea una nueva exportación manual **RemNote (Complete)** y guárdala sin modificar.
2. En el escritorio, copia las copias de seguridad locales `.db.zip` y la carpeta `files`. Descarga los PDF originales o anotados que no puedas reemplazar.
3. Elige una muestra pequeña con casos difíciles: notas anidadas, referencias, un PDF, imágenes, clozes o tarjetas de opción múltiple, etiquetas y tarjetas con un historial de repasos relevante.
4. Exporta esa muestra en todos los formatos que necesite la alternativa candidata, normalmente Markdown para las notas y `.apkg` para Anki.
5. Impórtala en una bóveda, un grafo, un perfil o un espacio de trabajo desechable. Compara con RemNote, uno al lado del otro, los recuentos, el formato, los enlaces, el contenido multimedia, los anversos y reversos de las tarjetas, y qué tarjetas están pendientes y para cuándo.
6. Trabaja sin conexión en todos los dispositivos que pienses utilizar. Luego vuelve a conectarte y confirma que los cambios y los repasos se sincronizan como esperabas.
7. Restaura la copia de seguridad completa en una base de conocimientos local y temporal de RemNote. Un archivo descargado solo se convierte en un plan de recuperación después de que hayas conseguido abrirlo.
8. Estudia con ambos sistemas durante varias sesiones reales. Cancela únicamente después de que el sustituto haya superado la prueba del flujo diario, una exportación y una restauración.

Conserva las exportaciones de origen incluso después del cambio. Una importación correcta demuestra la compatibilidad con la versión actual del destino, no un acceso permanente a cada parte del sistema anterior.

## La lista final más práctica

- **Quédate con RemNote** si lo valioso son las notas enlazadas y el estudio con PDF. Puede que su plan Free o una base de conocimientos solo local ya resuelvan tu restricción.
- **Elige Anki** si las tarjetas, las plantillas, los controles de FSRS y la fidelidad de la migración son lo primero.
- **Elige Obsidian más Anki** si tener archivos locales de notas en Markdown justifica usar dos herramientas.
- **Evalúa Logseq** si necesitas notas conectadas de código abierto y tarjetas integradas, pero no lo uses para nada crítico mientras su base de datos y su sistema de sincronización actuales sigan en fase beta y alfa.
- **Elige Flashcards** si un sistema nuevo y sencillo de tarjetas y el acceso al código de toda la pila pesan más que las notas, los PDF o la continuidad de la programación.

Desarrollo Flashcards y, aun así, mantendría RemNote para un cuaderno conectado que dependa mucho de PDF o elegiría Anki para una colección compleja y consolidada. Flashcards es la opción más limitada: tarjetas de anverso y reverso, una pila tecnológica abierta y una programación nueva.

Cuando sepas qué límite puedes aceptar, prueba solo esa opción. Si Flashcards encaja, la [guía de primeros pasos](/es/docs/getting-started/) explica cómo empezar tanto con la versión alojada como con la autoalojada. Si no encaja, seguir con RemNote también es una decisión válida.
