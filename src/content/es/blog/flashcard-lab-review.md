---
title: "Reseña de la app Flashcard Lab (2026): Google Sheets, repetición espaciada y alternativas"
description: "Una reseña de Flashcard Lab contrastada con fuentes que analiza su flujo de trabajo con Google Sheets, sus aplicaciones móviles, la repetición espaciada, los precios, los permisos y las alternativas."
date: "2026-08-12"
image: "/blog/flashcard-lab-review.png"
keywords:
  - "reseña de la app Flashcard Lab"
  - "reseña de Flashcard Lab"
  - "alternativa a Flashcard Lab"
  - "tarjetas de estudio en Google Sheets"
  - "precios de Flashcard Lab"
  - "Flashcard Lab vs Anki"
---

Flashcard Lab parte de una tabla conocida: preguntas en la primera columna, respuestas en la segunda y encabezados en la primera fila. En vez de importar esa tabla a un editor de mazos independiente, seleccionas la hoja de Google Sheets y estudias con Flashcard Lab. Para quienes ya preparan lecciones o listas de vocabulario en Sheets, esta diferencia es importante.

Esta **reseña de la app Flashcard Lab** se basa en el sitio web del producto, las fichas actuales de Android y iPhone, Chrome Web Store, Google Workspace Marketplace y la política de privacidad del proveedor. No es una prueba práctica. Las fuentes oficiales explican bien cómo se crean, capturan, imprimen y repasan las tarjetas, pero dejan sin documentar algunos comportamientos importantes del producto.

> **Aviso de transparencia:** Soy Kirill Markin y desarrollo [Flashcards Open Source App](/es/features/), una de las alternativas incluidas en esta reseña. Flashcard Lab ofrece un flujo de trabajo mejor adaptado a las hojas de cálculo. Flashcards destaca si das prioridad a un espacio dedicado para tarjetas con anverso y reverso, FSRS-6 documentado, el guardado local antes de sincronizar, el código con licencia MIT o el autoalojamiento de toda la plataforma por encima de la integración con Google Sheets. Anki sigue siendo la referencia consolidada para usuarios avanzados que prefieren trabajar en local.

**Datos comprobados:** 12 de agosto de 2026. Los precios que aparecen a continuación son los precios públicos de la App Store de Estados Unidos visibles en esa fecha. Los impuestos, los precios regionales, las promociones, los precios de compra dentro del complemento y las condiciones futuras de la beta pueden variar.

![Una impresora levanta una fila emparejada de una cuadrícula maestra de dos columnas junto a tarjetas de estudio impresas](/blog/flashcard-lab-review.png)

## La respuesta breve

- Elige **Flashcard Lab** si quieres crear y mantener las tarjetas en Google Sheets. La captura desde el navegador, la edición masiva en la hoja de cálculo, el repaso en el móvil y la impresión mediante Google Docs forman un flujo de trabajo práctico.
- Elige **Flashcards Open Source App** si buscas tarjetas con anverso y reverso bien definidos en un espacio de trabajo independiente de Google, FSRS-6 documentado, guardado local antes de sincronizar, código abierto y una vía de autoalojamiento con soporte. No ofrece integración en directo con Google Sheets.
- Elige **Anki** si necesitas clientes de escritorio consolidados, tipos de nota y plantillas avanzados, complementos, paquetes de colecciones establecidos o controles más detallados de FSRS.

No hay un ganador automático. La pregunta decisiva es dónde debe residir la copia de referencia de tu material de estudio: en una hoja de Google Sheets, en un espacio de trabajo abierto y específico para estudiar o en una colección local consolidada.

## Flashcard Lab vs Flashcards vs Anki

| Decisión | Flashcard Lab | Flashcards Open Source App | Anki |
| --- | --- | --- | --- |
| Para quién encaja mejor | Creación en hojas de cálculo, captura desde el navegador, impresión mediante Google Docs y repaso sencillo | Tarjetas centradas en el anverso y el reverso dentro de una plataforma abierta para web y móvil | Tarjetas locales consolidadas con plantillas, complementos y amplio soporte para migraciones |
| Fuente de referencia | Las filas de Google Sheets contienen preguntas, respuestas y texto complementario opcional | Las tarjetas del espacio de trabajo contienen de forma explícita el anverso, el reverso, las etiquetas, los mazos, los archivos multimedia y el estado del planificador | La colección local contiene notas, campos, tarjetas generadas, archivos multimedia y datos de planificación |
| Programación de repasos | El proveedor anuncia «repetición espaciada sencilla»; no se encontró ningún algoritmo público ni ninguna fórmula de intervalos | FSRS-6 documentado con las valoraciones Again, Hard, Good y Easy | Controles de FSRS consolidados, como la retención deseada, la optimización de parámetros, los preajustes y la simulación |
| Plataformas | Navegador, complemento de Google Sheets, extensión de Chrome, iPhone y Android | Web, iOS y Android; no hay aplicación de escritorio nativa | Windows, macOS, Linux, AnkiWeb, AnkiMobile y AnkiDroid |
| Uso sin conexión | No se encontró un contrato oficial completo sobre el uso sin conexión ni la sincronización posterior | Las tarjetas, los cambios y los repasos se guardan primero en local y se sincronizan al recuperar la conexión; el inicio de sesión y la carga inicial necesitan conexión | Los clientes instalados mantienen una colección local y funcionan sin conexión; AnkiWeb es el servicio para navegador |
| Flujo de trabajo con hojas de cálculo | Es el eje del producto; para el repaso habitual basado en Sheets no se describe ninguna importación a un mazo independiente | Las hojas de cálculo pueden adjuntarse como material de partida para crear borradores con IA que después deben revisarse, pero no se mantienen como tarjetas vinculadas en directo a Sheets | Importa texto delimitado en campos de notas; la hoja de origen no permanece vinculada |
| Precios comprobados el 12 de agosto de 2026 | Puntos de entrada gratuitos con funciones de pago; la ficha de iPhone de Estados Unidos mostraba Pro por US$17.99 y Elite por US$19.99 | Servicio alojado principal gratuito durante la beta; el software con licencia MIT es gratuito, pero la infraestructura y los proveedores necesarios para autoalojarlo cuestan dinero | Las versiones de escritorio, AnkiWeb y AnkiDroid son gratuitas; AnkiMobile costaba US$24.99 en Estados Unidos mediante un único pago |
| Código abierto / autoalojamiento | No se encontró ninguna distribución oficial del código principal ni para autoalojamiento | Aplicación e infraestructura de AWS con licencia MIT y una vía documentada para producción | Clientes de escritorio de código abierto y un servidor oficial de sincronización autoalojado; no es un AnkiWeb autoalojado |

La tabla se centra deliberadamente en el flujo de trabajo, no en sumar funciones. Flashcard Lab permite que la hoja siga siendo útil como una hoja de cálculo normal. Flashcards y Anki almacenan un estado de aprendizaje más completo dentro del sistema de estudio, a costa de abandonar el modelo centrado en Google Sheets.

## La hoja de Google Sheets sigue siendo el centro

La [ficha actual de Android](https://play.google.com/store/apps/details?id=com.tidisventures.flashcardlabmobile) presenta un esquema inicial sencillo: encabezados en la primera fila, preguntas en la primera columna y respuestas en la segunda. Indica que las columnas tercera y cuarta son opcionales y sirven para añadir texto complementario a la respuesta y a la pregunta. La [ficha de iPhone](https://apps.apple.com/us/app/flashcard-lab/id6469375646) describe esas columnas opcionales como sinónimos y reglas mnemotécnicas. Toma las dos primeras columnas como el núcleo común claramente definido y consulta la plantilla actual antes de depender de las columnas opcionales en las distintas interfaces.

Esa estructura explica el atractivo de las **tarjetas de estudio en Google Sheets**. Un profesor puede corregir un término repetido con las herramientas de autorrelleno, preparar una lista para la clase con un compañero y mantener las filas legibles fuera de la aplicación de repaso. Un estudiante puede ordenar vocabulario, limpiar contenido pegado o usar fórmulas antes de estudiarlo.

Flashcard Lab ofrece varias formas de trabajar con esas filas:

- El [sitio web del producto](https://flashcardlab.co/) anuncia repaso desde el navegador, tarjetas aleatorias, un modo que invierte respuesta y pregunta, imágenes, colores personalizados, repetición espaciada sencilla, creación de tarjetas a partir de PDF mediante IA y tarjetas imprimibles a través de Google Docs.
- La [extensión de Chrome](https://chromewebstore.google.com/detail/flashcard-lab/fomgbfkcdcnconmkcppfhakhoagmndkp) permite guardar el texto seleccionado de una página web en la hoja de Google Sheets elegida, obtener una definición de Dictionary.com y utilizar varios modos de repaso dentro de la propia extensión.
- El complemento de Google Sheets permite usar imágenes, enlaces de audio y funciones de repaso, generar tarjetas con IA a partir de archivos PDF y crear documentos imprimibles en Google Docs.
- Las aplicaciones para Android y iPhone permiten seleccionar hojas de Google Sheets y repasar en el teléfono. Cuando se consultaron, ambas fichas mostraban versiones publicadas en mayo de 2026.

El resultado es un ciclo coherente: recopilar contenido mientras navegas, editarlo en Sheets, repasarlo en el navegador o en la aplicación móvil e imprimirlo cuando conviene tener un juego físico. La frecuencia exacta de actualización y las reglas de sincronización entre estas interfaces no están documentadas públicamente. Por eso es más prudente hablar de un sistema «centrado en Sheets» que prometer una sincronización en tiempo real y sin conflictos.

Notion ya no forma parte de ese ciclo. Los historiales de las versiones móviles indican que la integración se retiró en 2024. Las capturas de pantalla antiguas que presentan Notion como una fuente actual están desfasadas.

## Por qué Flashcard Lab se ha ganado un lugar

### Edición masiva sin importar una y otra vez

Muchas aplicaciones de tarjetas pueden importar CSV o texto separado por tabulaciones. Sin embargo, tras la importación, la hoja de cálculo y el mazo se convierten en copias independientes. Flashcard Lab está pensado para repasar una hoja seleccionada, así que encaja con materiales que se mantienen mediante listas pegadas, fórmulas, edición compartida o cambios masivos frecuentes.

También ofrece una salida sencilla para el texto de las tarjetas. Si dejas de usar Flashcard Lab, las preguntas y respuestas continúan siendo legibles como filas. Es una forma útil de portabilidad, aunque no abarca todo el estado de aprendizaje.

### Captura desde el navegador para conceptos breves y vocabulario

La extensión de Chrome guarda el texto seleccionado desde el menú contextual y puede obtener una definición. Su ficha indica que añadir palabras, texto y definiciones es gratuito, mientras que el repaso ilimitado dentro de la extensión requiere funciones prémium.

Capturar contenido no significa comprobarlo. Una definición obtenida automáticamente puede ser incorrecta para esa frase, demasiado amplia o, sencillamente, demasiado larga para una tarjeta útil. Este flujo rápido tiene valor si revisas las filas resultantes antes de estudiarlas.

### Impresión sin rehacer las tarjetas

La impresión mediante Google Docs es una ventaja práctica para profesores, estaciones de aprendizaje en el aula, actividades de clasificación con tarjetas físicas y estudiantes que no pueden usar un dispositivo durante una sesión. Flashcard Lab convierte la hoja de Google Sheets en tarjetas imprimibles sin obligarte a hacer capturas de pantalla ni a usar una segunda herramienta de maquetación.

Si la impresión de Sheets a Docs es un requisito esencial, Flashcard Lab es la opción clara. Flashcards Open Source App no ofrece un flujo de trabajo equivalente, y la impresión no es el motivo por el que la mayoría de la gente elige Anki.

## Hay repetición espaciada, pero la fórmula no es pública

Flashcard Lab anuncia un modo de estudio con repetición espaciada. Sus fichas oficiales también describen la presentación aleatoria, las tarjetas invertidas, la repetición de palabras olvidadas y las vistas de resultados o progreso. Son funciones de repaso reales, pero no permiten identificar el planificador.

Las fuentes consultadas no mencionan FSRS, SM-2 ni ningún otro algoritmo. Tampoco publican la fórmula de los intervalos, muestran cómo cambia la fecha del próximo repaso con cada respuesta ni indican si el historial de repasos se almacena en la hoja de Google Sheets. Una **reseña de Flashcard Lab** responsable no puede rellenar esos vacíos con suposiciones.

Flashcards publica unas condiciones distintas. Su [documentación de FSRS-6](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) describe las valoraciones, el estado almacenado, los valores predeterminados y los límites actuales. Utiliza los pesos oficiales predeterminados en vez de optimizar pesos personales a partir del historial de cada estudiante.

Anki va más allá para quienes quieren ajustar el sistema. Sus [ajustes de FSRS](https://docs.ankiweb.net/deck-options.html#fsrs) incluyen la retención deseada, la optimización de parámetros, los preajustes y herramientas de simulación. Esto convierte a Anki en la opción consolidada en cuanto a planificación, pero no en un ganador automático para quien solo quiera repasar una hoja sin dedicar mucho tiempo a configurarlo.

Para saber más sobre los propios algoritmos, consulta [FSRS vs SM-2](/es/blog/fsrs-vs-sm-2/). No se puede afirmar que Flashcard Lab utilice uno u otro salvo que el proveedor publique más detalles.

## Las aplicaciones móviles no resuelven la duda sobre el uso sin conexión

Flashcard Lab cuenta actualmente con fichas para Android y iPhone, además de una interfaz web, un complemento y una extensión. Google Play mostraba una actualización del 6 de mayo de 2026. La ficha estadounidense de Apple mostraba la versión 2.7.1, publicada el 5 de mayo de 2026, y etiquetaba la aplicación como «Solo para iPhone».

Las páginas públicas no ofrecen un contrato completo sobre el uso sin conexión. No encontré ninguna promesa oficial que abarque abrir la aplicación desde cero sin conexión, mantener una colección totalmente local, editar sin conexión, poner en cola los repasos o gestionar conflictos al recuperar la conexión. Las fuentes tampoco explican cuándo se refleja exactamente en la hoja de Google Sheets un repaso hecho desde el móvil ni dónde se almacena el estado de progreso.

Esto es una incógnita, no una prueba de que el uso sin conexión falle. Aun así, quien piense estudiar durante un vuelo o con una conexión poco fiable no debería depender de un comportamiento que el proveedor no ha documentado.

Flashcards documenta que las tarjetas, los cambios y los repasos [se guardan primero en local](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/architecture.md#offline-first-sync), tanto en la web como en el móvil, y se sincronizan después de recuperar la conexión. La autenticación y la carga inicial del espacio de trabajo siguen necesitando conexión; la IA y los archivos multimedia que no estén en caché también tienen limitaciones sin conexión. Los clientes instalados de Anki conservan sus colecciones de trabajo en local. La [comparativa de aplicaciones de tarjetas sin conexión](/es/blog/best-offline-flashcards-app/) explica estas diferencias con más detalle.

## El precio de Flashcard Lab depende de dónde se use

No existe una única tabla pública de **precios de Flashcard Lab** que abarque de forma fiable el complemento, la extensión, la aplicación para Android, la aplicación para iPhone y la experiencia en el navegador.

La [ficha de Workspace Marketplace](https://workspace.google.com/marketplace/app/flashcard_lab/934660656831) indica que es «gratuito con funciones de pago». Señala como funciones prémium el repaso ilimitado, las imágenes, la impresión y las funciones de IA, y remite al menú de actualización del complemento para consultar el precio actual.

Google Play indica que el complemento es gratuito y que sus funciones prémium requieren un único pago para obtener acceso de por vida, pero no publica el importe. La aplicación para Android aparece marcada como una aplicación con anuncios y compras integradas.

El 12 de agosto de 2026, la ficha estadounidense de iPhone mostraba la aplicación como gratuita con estas compras:

- **Flashcard Lab Pro:** US$17.99
- **Flashcard Lab Elite:** US$19.99

La ficha pública no explica con suficiente claridad la duración ni si el derecho de acceso se comparte entre las distintas versiones como para relacionar ninguna de estas compras con el acceso de por vida descrito para el complemento. Consulta la pantalla de actualización de la versión que quieras usar; no des por hecho que una compra en iPhone desbloquea funciones de Google Sheets, Android, Chrome o el navegador.

Como referencia, las [funciones principales del servicio alojado de Flashcards son gratuitas durante la beta](/es/pricing/). Su software con licencia MIT puede autoalojarse, pero la infraestructura de AWS, el correo electrónico, la supervisión, los proveedores de IA, las copias de seguridad y el mantenimiento siguen costando dinero o tiempo. La aplicación de escritorio de Anki, AnkiWeb y AnkiDroid se ofrecen gratis; la aplicación oficial AnkiMobile costaba US$24.99 en Estados Unidos mediante un único pago cuando se comprobó.

## Revisa el acceso a Google y lo que afirma el proveedor sobre la privacidad

La pantalla de permisos de Marketplace indica que Flashcard Lab puede solicitar acceso para:

- ver, editar, crear y eliminar todos los documentos de Google Docs;
- ver y gestionar las hojas de cálculo en las que está instalada la aplicación;
- mostrar y ejecutar contenido web de terceros en cuadros de diálogo y barras laterales;
- ver la dirección de correo electrónico principal de la cuenta y la información personal básica.

Estos permisos son coherentes con la creación de documentos imprimibles y el trabajo dentro de Sheets, pero siguen otorgando un acceso importante. Revísalos desde la cuenta donde vayas a guardar el material de estudio. Las cuentas gestionadas por centros educativos también pueden requerir la aprobación del administrador.

La [política de privacidad](https://flashcardlab.co/privacy-policy?policy=flashcard-lab) del proveedor, fechada el 1 de marzo de 2024, indica que la aplicación lee una dirección de correo electrónico, los encabezados de las columnas y el contenido de las celdas. También afirma que puede escribir en Sheets después de que se conceda el permiso y el usuario inicie la acción. Según la política, la base de datos remota almacena direcciones de correo electrónico, ID de hojas de Google Sheets, ID de transacciones de pago y fechas de pago, pero no el contenido de las celdas de Google Sheets.

Estas son afirmaciones del proveedor, no una auditoría independiente. La página de Marketplace describe el acceso a Google solicitado; la política de privacidad explica cómo dice el proveedor que usa y almacena los datos; Apple y Google Play muestran declaraciones de privacidad facilitadas por el desarrollador. La política no detalla todos los flujos de datos de la creación de tarjetas a partir de PDF mediante IA. Evalúa por separado cualquier material sensible de centros educativos o clientes, los datos de salud y las investigaciones sin publicar antes de subirlos.

## Una hoja facilita trasladar las tarjetas, pero no es una copia de seguridad completa

Lo que puede afirmarse con mayor seguridad sobre la portabilidad es sencillo: puedes seguir leyendo y copiando las filas de preguntas y respuestas sin tener que descodificar un archivo de mazo propietario.

Las fuentes oficiales no demuestran que el historial de repasos, el estado de la repetición espaciada, los resultados de las pruebas, el comportamiento de las imágenes, las compras o todos los ajustes de la aplicación residan en la hoja. Una copia intacta protege el contenido visible de las tarjetas, pero no es automáticamente una copia de seguridad completa de Flashcard Lab.

Tampoco existe una migración sin pérdidas a Flashcards Open Source App. Flashcards no ofrece integración en directo con Google Sheets ni un importador de Flashcard Lab. Un CSV, una exportación de la hoja de cálculo o una hoja adjunta pueden servir como material de partida para crear un borrador con ayuda de IA, pero ese borrador debe revisarse y comienza con un estado de FSRS nuevo. Adjuntar una hoja de cálculo no equivale a mantener las tarjetas vinculadas a una hoja activa.

Anki ofrece una vía más convencional porque puede [importar texto delimitado en campos de notas](https://docs.ankiweb.net/importing/text-files.html). Aun así, tendrás que asignar las columnas, decidir qué hacer con el texto complementario opcional, comprobar los archivos multimedia y partir de una planificación nueva, salvo que un formato compatible transfiera el historial de forma explícita. Una hoja de Google Sheets no es un paquete de colección de Anki.

Antes de trasladar una hoja grande:

1. Duplícala y deja la copia intacta.
2. Registra los encabezados, las fórmulas, el número de filas, los enlaces a archivos multimedia y las columnas complementarias opcionales.
3. Prueba filas representativas que contengan texto multilínea, caracteres Unicode, celdas vacías, fórmulas, imágenes y enlaces.
4. Compara los anversos, los reversos y los textos complementarios resultantes antes de ampliar el proceso.
5. Da por hecho que el historial de repasos y el estado de planificación se quedan atrás, salvo que ambos productos documenten una vía de transferencia.

La exportación `flashcards.zip` de Flashcards tiene un límite similar: traslada las tarjetas activas, las etiquetas y los archivos multimedia a los que hacen referencia, pero no el historial de repasos, el estado de FSRS, los ajustes del espacio de trabajo, la estructura completa de los mazos ni los datos de la cuenta. El código abierto no convierte una exportación de contenido en una copia de seguridad completa.

## ¿Qué flujo de trabajo deberías elegir?

### Elige Flashcard Lab para un ciclo centrado en la hoja de cálculo

Flashcard Lab encaja cuando Google Sheets ya es el lugar de trabajo del material y la edición masiva, la colaboración, la captura desde el navegador o la impresión mediante Google Docs ahorran tiempo de verdad. Las opciones de repaso en el navegador y el móvil aportan comodidad sin pedirte que reconstruyas el contenido en un editor de mazos convencional.

Ten claras las contrapartidas antes de decidirte: permisos de Google importantes, un planificador sin una fórmula publicada, un funcionamiento completo sin conexión que no está claro, reglas exactas de sincronización entre versiones que no están documentadas y precios que debes comprobar en la versión que piensas usar.

### Elige Flashcards para un espacio de trabajo abierto e independiente de Google

Flashcards es la **alternativa a Flashcard Lab** más sólida cuando el objetivo es sacar de Google Sheets la fuente de referencia. Ofrece tarjetas con campos propios para el anverso y el reverso, FSRS-6 documentado, guardado local antes de sincronizar tanto en la web como en el móvil, acceso para agentes, código con licencia MIT y una vía respaldada para desplegar toda la plataforma.

No es un atajo para el flujo de trabajo actual basado en Sheets. No ofrece sincronización en directo con Sheets, un importador directo de Flashcard Lab, un cliente de escritorio nativo ni una migración sin pérdidas del historial de planificación. La [guía de primeros pasos](/es/docs/getting-started/) explica la opción alojada. La [guía de autoalojamiento](/es/docs/self-hosting/) describe la vía de producción centrada en AWS y el trabajo que exige al operador.

### Elige Anki para un control local consolidado

Si estás decidiendo entre **Flashcard Lab y Anki**, elige Anki cuando las colecciones locales de escritorio, las plantillas, los tipos de tarjeta cloze y otros tipos generados, los complementos, los paquetes establecidos, la importación directa de texto y los controles consolidados de FSRS justifiquen dedicar más tiempo a la configuración.

Anki convierte las filas de la hoja de cálculo en campos de notas importados; no mantiene la hoja como interfaz habitual de creación. Ese paso adicional resulta frustrante cuando Sheets es fundamental, pero tiene sentido cuando el destino debe admitir una colección compleja durante años.

Si ninguna de estas tres opciones encaja, la [guía más amplia de alternativas a Anki](/es/blog/best-anki-alternatives/) y la [comparativa de aplicaciones de tarjetas de código abierto](/es/blog/best-open-source-flashcard-apps-2026/) analizan más opciones. Para un profesor que, sobre todo, imprime tarjetas, puede incluso resultar más práctica una plantilla estable de Sheets y Docs que un sistema de repaso programado.

## Veredicto final

Flashcard Lab tiene una función clara: convertir las filas de una hoja de Google Sheets en tarjetas que se pueden repasar e imprimir, mientras la hoja de cálculo sigue siendo el centro de la creación. La captura desde el navegador, la edición masiva, el repaso en el móvil, la creación de tarjetas a partir de PDF mediante IA y la impresión mediante Google Docs hacen que resulte especialmente relevante para estudiantes y profesores que trabajan directamente con hojas de cálculo.

Los límites son igual de claros. La «repetición espaciada sencilla» no revela el algoritmo. Las fichas para móviles no establecen un funcionamiento completo sin conexión. Que la hoja sea legible no demuestra que el historial de repasos sea portátil. Los precios publicados para una versión no garantizan que la compra sirva para todas.

Elige Flashcard Lab por su flujo de trabajo completo con Google Sheets. Elige Flashcards por un espacio de trabajo abierto y dedicado, con FSRS-6 documentado y guardado local antes de sincronizar. Elige Anki por su control local consolidado y la profundidad que ofrece a los usuarios avanzados. La mejor opción es la que sitúa la fuente de referencia donde de verdad quieras mantenerla.
