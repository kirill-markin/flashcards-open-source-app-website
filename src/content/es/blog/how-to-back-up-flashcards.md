---
title: "Cómo hacer copia de seguridad de flashcards en 2026: backup de Anki, exportación de Quizlet y un mazo que siga siendo tuyo"
description: "¿Necesitas un plan de copia de seguridad de flashcards de verdad en 2026? Aquí tienes cómo hacer backup de Anki, exportar lo que Quizlet realmente permite, guardar los archivos multimedia, conservar una copia en texto plano y evitar quedarte atrapado en una sola app de estudio."
image: "/blog/how-to-back-up-flashcards.png"
date: "2026-06-15"
keywords:
  - "copia de seguridad de flashcards"
  - "cómo hacer copia de seguridad de flashcards"
  - "backup de anki"
  - "exportar mazo de anki"
  - "exportación de quizlet"
  - "backup de flashcards"
  - "copia de seguridad de datos de estudio"
  - "flashcards de código abierto"
  - "flashcards en texto plano"
---

Un mazo de flashcards parece poca cosa hasta que intentas reconstruirlo.

Entonces, de repente, son 1800 tarjetas, dos años de historial de repaso, un montón de capturas de pantalla y un fin de semana bastante pesado que no pensabas gastar arreglando exportaciones.

Por eso **hacer copia de seguridad de flashcards** es una búsqueda práctica en 2026. La gente no la hace porque las copias de seguridad suenen responsables. La hace porque por fin se dio cuenta de cuánto tiempo de estudio tiene atrapado dentro de una sola app.

Esta guía va al grano: cómo mantener tus tarjetas portables, legibles y recuperables si ahora usas Anki, tiras a veces de exportaciones de Quizlet o quieres que tu próximo mazo sea más fácil de conservar como propio.

![Escritorio de estudio cálido con copia de seguridad de flashcards, apuntes fuente, archivos multimedia y una pantalla de exportación en el portátil](/blog/how-to-back-up-flashcards.png)

## Por qué esto se siente más urgente en 2026

El **2 de febrero de 2026**, en los foros de Anki se publicó el anuncio ["Anki's Growing Up"](https://forums.ankiweb.net/t/ankis-growing-up/68610) sobre la transición de propiedad del proyecto.

Ese anuncio no significó que tu mazo pasara a ser inseguro de la noche a la mañana. Pero sí le recordó a mucha gente una distinción útil: confiar en una herramienta no es lo mismo que ser dueño de tus datos de estudio.

En el lado de Quizlet pasa algo parecido, solo que de una forma menos dramática. La vía de exportación existe, pero es más limitada de lo que la gente espera. Si tus tarjetas importan, la portabilidad no es algo que convenga dejar para la noche en que quieras migrar.

## La sincronización ayuda. Una copia de seguridad te rescata.

Mucha gente dice que ya tiene copia de seguridad cuando en realidad quiere decir que su mazo se sincroniza entre dispositivos.

Mejor que nada, sí. Lo mismo, no.

La sincronización protege la comodidad. Una copia de seguridad protege la recuperación.

Si una mala edición, una importación rota o un borrado accidental se sincronizan en todas partes, lo único que has hecho es repartir el problema más rápido.

## La pila aburrida de copias de seguridad que yo sí usaría

La primera regla útil es dejar de buscar un único formato perfecto de copia de seguridad.

Yo mantendría cuatro capas:

1. una copia completa en el formato nativo de la app
2. una copia en texto plano o Markdown del contenido importante de las tarjetas
3. una copia de los archivos multimedia o de los archivos fuente originales
4. una segunda ubicación fuera del dispositivo que usas todos los días

Suena un poco excesivo hasta que falla una capa y las otras tres te salvan el mazo.

Cada capa cubre un fallo distinto:

- la copia nativa de la app te ayuda a restaurar la estructura del mazo y el estado de repaso
- el texto plano mantiene el contenido portable
- la copia de medios protege las imágenes, el audio y los adjuntos que el formato de texto puede perder
- el almacenamiento en una segunda ubicación te protege si pierdes el portátil, el teléfono o la unidad local

Si solo guardas la capa nativa de la app, estás confiando en que un producto siga siendo legible para siempre. Si solo guardas texto plano, pierdes el estado de repaso y muchas veces también los archivos multimedia. Esta combinación funciona porque cada capa hace un trabajo distinto.

## Para Anki, guarda tanto la copia de recuperación como la copia portable

Aquí es donde muchos planes de backup de Anki se quedan a medio camino.

La [documentación de copias de seguridad de Anki](https://docs.ankiweb.net/backups.html) deja clara la separación:

- las copias automáticas incluyen el texto de las tarjetas y la información de planificación
- las copias automáticas no incluyen sonidos ni archivos de imagen
- una exportación manual `.colpkg` con `include media` crea una copia más completa de la colección

La [documentación de exportación de Anki](https://docs.ankiweb.net/exporting.html) añade el otro detalle importante: un paquete de colección exporta toda tu colección con la planificación incluida.

Así que yo mantendría tres hábitos en Anki, no uno:

1. dejar que Anki mantenga sus copias automáticas normales para una recuperación rápida
2. hacer una exportación `.colpkg` periódica con medios como punto real de restauración
3. exportar el contenido importante de las notas como texto plano cuando quieras portabilidad fuera de Anki

Ese tercer paso importa porque una copia de seguridad de Anki sirve bien para restaurar Anki. Sirve bastante menos para inspeccionar el mazo más adelante con herramientas normales.

Merece la pena decir otro detalle en voz alta porque mucha gente lo aprende por las malas: el patrón seguro es exportar bien y luego guardar esa exportación. No consiste en "apuntar Dropbox a la base de datos en vivo y esperar que eso cuente como backup de Anki".

## Para Quizlet, exporta pronto y asume menos de lo que te gustaría

La exportación de Quizlet es útil. No es una copia completa de tu configuración de estudio.

A fecha de **15 de junio de 2026**, la [página de ayuda de exportación de Quizlet](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) dice que puedes exportar términos y definiciones de tus propios sets. Los límites prácticos importan tanto o más:

- los sets copiados no se pueden exportar
- no hay exportación de imágenes
- la exportación está disponible en la web, no en la app

Así que, si un set de Quizlet te importa, expórtalo mientras siga siendo:

- tuyo
- principalmente de texto
- fácil de identificar
- todavía cercano al material fuente original

No esperes a la noche en que quieras migrar. No esperes a haber olvidado qué sets eran copiados. No des por hecho que las capturas de pantalla son un formato de copia de seguridad real.

Por eso el repositorio ya tiene una guía específica sobre [exportar sets de Quizlet y convertirlos en flashcards con FSRS](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). El paso de exportación no tiene glamour, pero es el que decide si luego tienes una salida real.

## El texto plano es la copia de seguridad de flashcards más infravalorada

Si tuviera que conservar una sola copia extra además de la copia nativa de la app, casi siempre elegiría texto plano o Markdown.

No conserva todo. Precisamente por eso es útil. Mantiene vivo el contenido de las tarjetas fuera del producto que este año, por casualidad, las alojó.

Una copia en texto plano es fea de la forma correcta:

- puedes abrirla en cualquier máquina
- puedes inspeccionarla sin herramientas especiales
- puedes buscar en ella rápido
- puedes versionarla
- puedes reutilizarla luego en una nueva ruta de importación
- puedes pasársela a otra herramienta sin tener que raspar tu propia vida de estudio a base de capturas

Esto importa aún más ahora porque muchos mazos se construyen a partir de notas, transcripciones, OCR, PDFs y limpieza asistida por IA. Cuando la parte útil queda guardada como texto legible, tus opciones futuras mejoran muchísimo.

Por eso también [Flashcards](/features/) es un buen destino después de la limpieza. El producto actual admite chat con IA con texto plano y archivos adjuntos, así que una exportación limpia no tiene por qué quedarse como material muerto de respaldo. Puede convertirse en borrador para un mazo mejor.

## Haz copia también de la fuente, no solo de la tarjeta final

Este es el hábito que la gente suele saltarse cuando piensa solo en términos de apps.

Si estudias a partir de:

- tus propias notas en Markdown
- una exportación en texto plano de otra app
- OCR de páginas escritas a mano
- fragmentos de transcripciones
- tus propias listas de vocabulario
- registros de errores de bancos de preguntas

entonces esos archivos fuente también forman parte de la copia de seguridad.

A veces reconstruir desde la fuente es más fácil que restaurar un mazo viejo y desordenado. A veces el mazo está hinchado, pero las notas fuente siguen limpias.

A veces no quieres recuperar todas las tarjetas antiguas. Quieres un conjunto más pequeño y mejor a partir del material que todavía importa.

Por eso importan las copias del material fuente. Más adelante te dan dos opciones honestas: restaurar el mazo viejo si eso es lo más fácil o reconstruir las partes buenas si eso tiene más sentido.

## Los medios son donde muchos planes de copia fallan en silencio

Los mazos respaldados por texto son el caso fácil. El problema empieza cuando el mazo depende de:

- imágenes de anatomía
- capturas de diagramas
- audio de pronunciación
- fotos de pizarra
- recortes de apuntes escritos a mano
- material de estudio tipo image occlusion

Si tu copia guarda el texto pero pierde los archivos, puede que técnicamente hayas conservado el mazo mientras que, en la práctica, hayas perdido justo aquello que estabas estudiando.

Por eso los archivos multimedia necesitan su propio punto de control y su propia carpeta, no una promesa vaga de que probablemente están adjuntos en algún sitio.

Para Anki, eso significa usar la ruta de exportación que incluye medios cuando quieras una copia real de la colección. Para Quizlet, significa aceptar pronto la limitación de la exportación y guardar por separado las imágenes originales o los materiales fuente. Para tus propios flujos asistidos por IA, significa conservar en un sitio claro y obvio el PDF original, el lote de capturas, la transcripción o la exportación de notas.

Yo prefiero tener una carpeta aburrida llamada `flashcards-sources-2026-06` a pasar una mala noche descubriendo que guardé los prompts pero no los diagramas.

## Una buena copia de seguridad de flashcards también te facilita migrar

Esta es la parte que mucha gente pasa por alto. Las copias de seguridad no sirven solo para recuperarte de un desastre.

También sirven para el día en que decides que el flujo de trabajo ya ha superado a la herramienta.

Eso es lo que hizo útil la conversación sobre la propiedad de Anki. Incluso la gente que no pensaba irse empezó a pensar en portabilidad. Ese instinto fue sano.

Si tu material está respaldado como:

- una exportación completa de la colección
- una copia portable en texto
- archivos fuente conservados

entonces moverte más adelante se vuelve mucho menos dramático.

Eso es cierto tanto si te mueves desde Anki, desde Quizlet o desde alguna herramienta de estudio con IA que era buena generando y floja en el repaso a largo plazo.

Si ahora mismo tu problema está en el lado de Anki, aquí ya tienes la continuación práctica:

- [Cómo migrar desde Anki en 2026](/blog/migrate-from-anki-txt-export-open-source-flashcards/)

Si el problema es más amplio y tiene que ver con propiedad e inspectabilidad, la siguiente lectura encaja aquí:

- [Aplicación Flashcards de código abierto y autoalojada para repetición espaciada](/blog/self-hosted-open-source-flashcards-app-for-spaced-repetition/)

## Dónde encaja Flashcards si quieres que tu próximo mazo sea más fácil de conservar

Si yo fuera a crear un mazo nuevo pensando en la propiedad de los datos, me fijaría primero en unas cuantas cualidades del producto:

- código abierto
- una opción alojada ahora y una opción autoalojada después
- clientes offline-first donde de verdad importe
- tarjetas sencillas de anverso y reverso que sigan siendo portables
- IA conectada a datos reales, no solo a demos de generación puntual

Esa es la dirección en la que ya se está moviendo [Flashcards](/).

La documentación pública actual basta para concretar esa dirección:

- la [documentación de arquitectura](/docs/architecture/) describe el modelo de espacio de trabajo compartido entre web, iOS y agentes externos
- el cliente de iOS está documentado como SQLite local más sincronización
- el flujo para agentes externos empieza desde una URL pública de descubrimiento
- la [guía de self-hosting](/docs/self-hosting/) te da una ruta real para ejecutar tú mismo el stack

Eso no elimina la necesidad de copias de seguridad. Nada lo hace.

Sí te da una base más sana para el próximo mazo:

- conservar el texto fuente en bruto
- redactar o limpiar tarjetas en la app
- repasar con FSRS
- mantener la pila inspeccionable
- mantener disponible la opción de autoalojar si algún día te interesa

Eso se acerca mucho más a la propiedad que dejar todo tu trabajo de memoria metido en una única interfaz cerrada y esperar que la historia de exportación siga siendo buena más adelante.

## La checklist de backup de flashcards que yo sí guardaría

Si quieres la versión útil más corta, haz esto:

1. Exporta una copia completa desde la app que usas ahora.
2. Guarda una copia en texto plano o Markdown del contenido importante de las tarjetas.
3. Guarda los medios o los archivos fuente originales en una carpeta aparte.
4. Pon una copia en un segundo dispositivo o en una ubicación de almacenamiento en la nube.
5. Repite la copia después de cambios importantes en el mazo, no solo una vez al año.
6. Al empezar mazos nuevos, prioriza herramientas y flujos que mantengan abiertas la exportación y la opción de autoalojar.

Eso basta para cubrir la mayor parte del riesgo real sin convertir el estudio en un hobby de gestión de archivos.

## La regla práctica para hacer copia de seguridad de flashcards en 2026

Si te dolería perder tu mazo, merece una copia de seguridad aburrida.

Guarda la copia nativa completa de la app. Guarda el texto portable. Guarda los medios. Guarda una copia en otro sitio. Luego construye la siguiente etapa de tu flujo de estudio en un producto que no convierta la portabilidad en una misión secundaria.

Si quieres un lugar más limpio para hacer eso con el próximo mazo, empieza por [Getting Started](/docs/getting-started/), revisa [Features](/features/) y ten presente la [Self-Hosting Guide](/docs/self-hosting/).

Esa es la versión de **hacer copia de seguridad de flashcards** en la que confío en 2026: exportaciones aburridas, texto legible, archivos multimedia separados y una pila de estudio que te deje opciones más adelante.
