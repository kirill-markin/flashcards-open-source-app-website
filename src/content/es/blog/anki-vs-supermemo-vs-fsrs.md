---
title: "Anki vs SuperMemo vs FSRS (2026): qué es cada uno y cuál elegir"
description: "Anki vs SuperMemo vs FSRS, explicado: compara Anki, los dos productos actuales de SuperMemo, el planificador FSRS, las valoraciones de repaso y qué opción encaja mejor con cada flujo de trabajo."
date: "2026-08-03"
image: "/blog/anki-vs-supermemo-vs-fsrs.png"
keywords:
  - "Anki vs SuperMemo vs FSRS"
  - "Anki FSRS"
  - "algoritmo SuperMemo"
  - "planificador FSRS"
  - "algoritmo de repetición espaciada"
  - "Again Hard Good Easy"
  - "Anki vs SuperMemo"
  - "FSRS vs SM-2"
---

Puedes usar FSRS dentro de Anki. Desde el lanzamiento de SuperMemo 20, FSRS también puede formar parte de un producto de SuperMemo. Este dato aclara buena parte de la confusión en torno a **Anki vs SuperMemo vs FSRS**: no son tres alternativas mutuamente excluyentes.

Anki es un producto y un ecosistema de flashcards. SuperMemo puede referirse a dos productos actuales o a una larga familia de algoritmos. FSRS es un planificador que otros productos pueden implementar. Esta guía separa primero esas categorías y después compara las decisiones que realmente puedes tomar.

> **Declaración de intereses:** Soy Kirill Markin y desarrollo [Flashcards Open Source App](/features/), que aparece más abajo como una implementación práctica de FSRS. No la presento como la ganadora por defecto y señalo en qué aspectos importa que su ecosistema sea más joven.

**Datos comprobados:** 3 de agosto de 2026.

![Dos máquinas de aprendizaje diferentes muestran en su interior el mismo mecanismo de planificación FSRS en color verde azulado](/blog/anki-vs-supermemo-vs-fsrs.png)

## La respuesta corta: Anki y SuperMemo son productos; FSRS es un planificador

Este es el modelo mental más claro:

- **Anki** es una aplicación y un ecosistema de flashcards con aplicación de escritorio, sincronización mediante AnkiWeb, clientes móviles compatibles, plantillas de tarjetas flexibles, mazos compartidos y complementos. La versión actual de Anki incluye FSRS como alternativa a su planificador anterior.
- **SuperMemo 20 for Windows** es una aplicación para Windows orientada a la gestión del conocimiento y la lectura incremental. Su Algorithm Arena ejecuta varios algoritmos de planificación, incluido FSRS, y pondera sus predicciones según el rendimiento que obtienen con los datos del usuario.
- **SuperMemo.com** es un servicio alojado independiente para aprender idiomas en web, iOS y Android. Ofrece cursos y MemoCards creadas por los usuarios mediante su propio método SuperMemo documentado.
- **FSRS** son las siglas de Free Spaced Repetition Scheduler. Calcula cuándo toca repasar a partir del historial de repasos, las valoraciones, los parámetros del modelo y un objetivo de retención. No es un editor de tarjetas, un sistema de cuentas, un servicio de sincronización, un mercado de mazos ni una interfaz de estudio.

Por tanto, «Anki FSRS» no es una contradicción. Significa que Anki es el producto y FSRS, el planificador seleccionado en su interior.

## Anki vs SuperMemo vs FSRS de un vistazo

| Opción | Qué es | Planificación | Mejor encaje | Principal limitación |
| --- | --- | --- | --- | --- |
| [Anki](https://docs.ankiweb.net/getting-started.html) | Producto y ecosistema consolidado de flashcards | FSRS integrado o el planificador anterior de Anki; FSRS se activa de forma global | Colecciones existentes, plantillas personalizadas, complementos, mazos compartidos y flujos de trabajo consolidados en Anki | Pasar a otro producto puede exigir un trabajo de migración considerable |
| [SuperMemo 20 for Windows](https://supermemo.store/products/supermemo-20-for-windows) | Producto propietario para Windows de gestión del conocimiento y lectura incremental | Algorithm Arena incluye SM-2, SM-15, SM-19, SM-20 y FSRS | Lectura incremental, árboles de conocimiento e importaciones desde documentos, páginas web, correo electrónico y vídeo | Producto exclusivo para Windows; independiente de SuperMemo.com |
| [SuperMemo.com](https://www.supermemo.com/en/app) | Servicio alojado para aprender idiomas en web, iOS y Android | Método propietario de SuperMemo; las páginas públicas actuales no lo identifican como SM-18, SM-20 o FSRS | Cursos de idiomas preparados, MemoCards y estudio alojado entre dispositivos | No es el producto para Windows y su planificador exacto no es público |
| [FSRS](https://github.com/open-spaced-repetition/fsrs4anki) | Planificador y proyecto de código abierto | Lo implementa un producto anfitrión o una biblioteca | Desarrolladores y usuarios que quieren una lógica de planificación que puedan inspeccionar | Por sí solo no ofrece tarjetas, editor, sincronización ni interfaz de estudio |
| [Flashcards Open Source App](/features/) | Producto de flashcards de código abierto más reciente, construido alrededor de FSRS | FSRS-6 con los pesos oficiales predeterminados fijados y ajustes de planificación configurables por espacio de trabajo | Web, iOS, Android, alojamiento propio, API y flujos de trabajo con agentes de IA | Ecosistema más pequeño que Anki y todavía sin pesos FSRS personalizados |

Las filas no son simétricas a propósito. Anki y Flashcards ofrecen flujos completos de trabajo con flashcards. SuperMemo 20 combina la planificación de repasos con un sistema mucho más amplio de lectura y gestión del conocimiento. SuperMemo.com ofrece una experiencia alojada para aprender idiomas. FSRS aporta la lógica de planificación a otros programas.

## Qué ofrece Anki en realidad

Anki es mucho más que un algoritmo de repetición espaciada. Su valor reside en todo el ecosistema construido alrededor de la planificación: notas que generan tarjetas, [plantillas de tarjetas](https://docs.ankiweb.net/templates/intro.html) programables, archivos multimedia, organización de mazos, [complementos](https://docs.ankiweb.net/addons.html), formatos de importación y exportación y [sincronización de colecciones](https://docs.ankiweb.net/syncing.html).

Esto importa cuando alguien dice que quiere dejar Anki «por FSRS». La versión actual de Anki ya admite FSRS. Según el [manual de FSRS de Anki](https://docs.ankiweb.net/deck-options.html#fsrs), FSRS es una alternativa al planificador anterior de Anki, basado en SuperMemo 2. Su activación es global: no se puede limitar a un solo preajuste. **Desired retention** establece el objetivo del modelo para la probabilidad de recordar una tarjeta cuando llega el momento de repasarla; aumentarlo suele acortar los intervalos y añadir repasos. Anki también puede ajustar los parámetros de FSRS a un historial de repasos compatible mediante la acción **Optimize**.

La formulación del manual exige una precisión histórica. **SM-2 es uno de los primeros algoritmos del linaje de SuperMemo, no un sinónimo del SuperMemo actual.** Llamar «SM-2 heredado» al planificador anterior de Anki sigue la documentación de Anki e identifica la familia de algoritmos en la que se basa. No implica que todos sus detalles de implementación sean idénticos a los del SM-2 original publicado hace décadas. Para una comparación técnica más específica, consulta [FSRS vs SM-2](/blog/fsrs-vs-sm-2/).

Si tienes una colección consolidada que depende de plantillas personalizadas, complementos, archivos multimedia o años de historial de repasos, cambiar de producto exige una migración considerable. Cambiar el planificador de Anki puede requerir mucho menos esfuerzo que abandonar Anki. La comparación más amplia entre [Anki y Flashcards](/blog/anki-vs-flashcards-open-source-app/) aborda las diferencias entre ambos productos.

## Ahora «SuperMemo» necesita un calificativo

El nombre **SuperMemo** puede referirse a una línea de productos, un servicio en línea, un método o una familia de algoritmos. Cualquier comparación que los trate como una única aplicación actual partirá de una premisa equivocada.

### SuperMemo 20 for Windows

[SuperMemo 20 for Windows](https://supermemo.store/products/supermemo-20-for-windows) se [lanzó el 1 de abril de 2026](https://supermemo.store/products/supermemo-20-upgrade). Se vende con una licencia de pago único para Windows 10 y 11 y está orientado al trabajo con el conocimiento más allá de las flashcards habituales de anverso y reverso. Su página de producto documenta la lectura incremental y flujos de trabajo con PDF, EPUB, correo electrónico, páginas web, imágenes y YouTube.

Su función de planificación más destacada es **Algorithm Arena**. Según la página del producto, SM-2, SM-15, SM-19, SM-20 y FSRS se ejecutan en paralelo, hacen predicciones y reciben una ponderación acorde con su capacidad predictiva sobre los datos del usuario. Eso describe el comportamiento documentado por el proveedor. No constituye una prueba independiente de que SuperMemo 20 ofrezca a todos los estudiantes mejores resultados que otra aplicación.

Algorithm Arena deja claro el error de categorías: FSRS puede ejecutarse *dentro de SuperMemo 20*. No son alternativas mutuamente excluyentes.

### El servicio alojado SuperMemo.com

La [aplicación actual de SuperMemo.com](https://www.supermemo.com/en/app) es un servicio alojado para aprender idiomas, disponible en el navegador, iOS y Android. Se centra en cursos de idiomas preparados, planes de aprendizaje, MemoCards y otras funciones lingüísticas. Los cursos pueden descargarse para estudiar en el móvil, pero la [documentación sobre el uso sin conexión](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) enumera limitaciones importantes: funciones como añadir MemoCards, la IA, la búsqueda, las estadísticas y el editor de cursos no están disponibles sin conexión.

El servicio alojado describe su planificador como propietario y documenta su propio método SuperMemo y su flujo de repaso. Sus páginas públicas no indican que el planificador actual sea SM-18, SM-20 o FSRS, así que este artículo no le asigna ninguna de esas etiquetas.

Esta distinción cambia la recomendación de compra. Quien busque lectura incremental en Windows debería evaluar SuperMemo 20. Quien quiera un curso alojado de español o inglés debería evaluar SuperMemo.com. Comparten nombre e historia, pero sus experiencias de uso no son intercambiables.

## El algoritmo SuperMemo es una familia, no una sola fórmula

La historia de SuperMemo abarca distintas generaciones de algoritmos de planificación. La [historia oficial del algoritmo SuperMemo](https://supermemo.guru/wiki/History_of_SuperMemo_algorithm) recorre los cambios de SM-4, SM-5, SM-6, SM-8, SM-11, SM-15, SM-17 y SM-18, y fecha en 2019 los cambios de la función de estabilidad de SM-18. La documentación actual de SuperMemo 20 presenta SM-19 y SM-20 como generaciones posteriores y los sitúa junto a algoritmos anteriores y FSRS en Algorithm Arena.

Por eso, afirmaciones como «Anki usa el algoritmo SuperMemo» son demasiado imprecisas para resultar útiles. ¿Qué generación? ¿Qué implementación de producto? ¿Qué ajustes y reglas de valoración?

SM-2 tiene importancia histórica porque influyó en muchos planificadores de flashcards. El software actual de SuperMemo para Windows ha pasado por muchas generaciones posteriores de algoritmos. El servicio alojado SuperMemo.com no publica suficientes detalles actuales para equipararlo sin más a un algoritmo numerado concreto del producto para Windows.

## Qué modela el planificador FSRS

[FSRS4Anki](https://github.com/open-spaced-repetition/fsrs4anki) describe dos componentes principales: un planificador y un optimizador. El planificador calcula cuándo toca repasar cada tarjeta. El optimizador puede ajustar los parámetros al historial de repasos cuando el producto anfitrión admite ese proceso. Ninguno de los dos proporciona mazos, edición, cuentas, sincronización ni una pantalla de estudio.

El [ABC de FSRS](https://github.com/open-spaced-repetition/fsrs4anki/wiki/ABC-of-FSRS) presenta un modelo que suele explicarse con tres variables: dificultad, estabilidad y recuperabilidad. La [documentación del algoritmo FSRS](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm) las define con cuidado:

- **Recuperabilidad (R)** es la probabilidad actual, según el modelo, de que recuerdes el elemento.
- **Estabilidad (S)** es la duración del intervalo tras el cual la recuperabilidad predicha alcanza el 90% según el modelo.
- **Dificultad (D)** es la estimación del modelo de lo difícil que resulta aumentar la estabilidad del recuerdo para ese elemento.

Son estados del modelo inferidos a partir de los datos de repaso, no mediciones directas de una huella de memoria en el cerebro. La recuperabilidad predicha de una tarjeta puede resultar útil, pero no deja de ser una predicción condicionada por su historial de repasos, las valoraciones, la implementación y los parámetros.

**Desired retention** convierte ese modelo en una programación concreta de repasos. El planificador estima cuándo alcanzará la recuperabilidad el objetivo elegido y calcula un intervalo sujeto a las reglas del producto anfitrión. Hablar de un «intervalo basado en un objetivo» es más preciso que afirmar que la fecha obtenida es un momento perfecto demostrado o universalmente óptimo.

## Again, Hard, Good, Easy y por qué las etiquetas no se traducen automáticamente

Las valoraciones de repaso son señales que se introducen en un sistema de planificación. Sus nombres y escalas cambian según el producto, por lo que traducirlas de forma directa puede alterar su significado.

| Sistema | Valoraciones visibles | Qué establecen las etiquetas |
| --- | --- | --- |
| Anki con FSRS | Again, Hard, Good, Easy | Again indica que no se logró recordar. Hard, Good y Easy indican que sí se recordó, con un esfuerzo decreciente. |
| Flashcards | Again, Hard, Good, Easy | Separa el fallo del acierto del mismo modo. La API usa 0–3 y asigna esos valores internamente a los grados 1–4 de FSRS. |
| SuperMemo.com alojado | Don't know, Almost, Know | Una escala de producto con tres opciones documentada en la [página del método SuperMemo](https://www.supermemo.com/en/supermemo-method). No debe asignarse mecánicamente a las cuatro valoraciones de FSRS. |
| SuperMemo 20 for Windows | Flujo de valoración de SuperMemo para escritorio | Una interfaz de producto distinta cuyas valoraciones se pasan a varios algoritmos de Algorithm Arena. No deduzcas su significado a partir de las tres etiquetas del servicio alojado. |

La distinción de FSRS con más consecuencias es Again frente a Hard. El [manual de Anki](https://docs.ankiweb.net/deck-options.html#fsrs) explica que FSRS interpreta Hard como un recuerdo satisfactorio y Again como un fallo. Elegir Hard porque el siguiente intervalo parece más conveniente registra un hecho que no ocurrió. La guía práctica sobre [Again vs Hard](/blog/again-vs-hard-fsrs-flashcards/) explica con detalle las respuestas parciales y los casos límite.

## Cómo implementa Flashcards FSRS hoy

Flashcards usa FSRS como componente del producto, no como una etiqueta imprecisa de «repetición inteligente». La implementación se verificó con el repositorio de código fuente en el commit `9cb013f78767c081f5385a53daa5e4b9fe69d3b6` el 3 de agosto de 2026.

El planificador del backend reproduce el flujo oficial de `ts-fsrs` 5.2.3 y fija los pesos oficiales predeterminados de FSRS-6. El backend, iOS y Android contienen tres implementaciones independientes del planificador, mientras que la aplicación web reutiliza el módulo del backend en vez de mantener una cuarta copia. Unos vectores de prueba de referencia compartidos garantizan el mismo comportamiento de planificación en todas esas implementaciones.

Cada tarjeta conserva la estabilidad, la dificultad, el momento del último repaso, los días programados, el estado del flujo (`new`, `learning`, `review` o `relearning`) y, cuando corresponde, el paso actual a corto plazo. La transición se basa en la hora real del repaso en el cliente, no en la hora posterior a la que un servidor llega a procesarlo.

Los valores predeterminados del espacio de trabajo son:

- FSRS-6
- retención deseada de `0.90`
- pasos de aprendizaje de `1` y `10` minutos
- un paso de reaprendizaje de `10` minutos
- un intervalo máximo de `36,500` días
- dispersión aleatoria (*fuzz*) activada

Los espacios de trabajo pueden cambiar la retención deseada, los pasos, el intervalo máximo y la dispersión para los repasos futuros. Flashcards **no** personaliza ni ofrece actualmente pesos de FSRS por usuario: los pesos de v1 son valores predeterminados fijados. Esta es una diferencia importante frente a los productos que ajustan parámetros a partir del historial individual. La [guía de configuración de FSRS](/blog/fsrs-settings/) explica las consecuencias para la carga de trabajo sin dar por sentado que haya que tocar todos los controles.

En la pantalla web de repaso, Flashcards muestra una vista previa del siguiente intervalo calculado para Again, Hard, Good y Easy. Las valoraciones `0`, `1`, `2` y `3` del usuario o de la API se asignan internamente a los grados `1` a `4` de FSRS. Again registra un fallo al recordar; Hard, Good y Easy indican que sí se recordó, con un esfuerzo decreciente. Todos los clientes muestran un recordatorio cuando se usa Hard con frecuencia: si no recordaste una respuesta, corresponde elegir Again.

Así, el planificador puede inspeccionarse y mantiene un comportamiento coherente entre plataformas. Eso no hace prescindibles unas tarjetas de calidad, unas valoraciones sinceras ni completar los repasos.

## ¿Qué opción encaja con tu flujo de trabajo?

### Ya tienes una colección importante en Anki

Por lo general, conviene seguir con Anki y plantearse activar FSRS allí. Tus plantillas, complementos, archivos multimedia, estructura de mazos e historial de repasos pueden valer más que la novedad de otra interfaz. Confirma que todos tus clientes admitan FSRS y comprueba primero la compatibilidad de los complementos, sobre todo la de aquellos que modifiquen la planificación o los intervalos.

### Quieres trabajar a fondo con lectura incremental en Windows

Evalúa SuperMemo 20 for Windows. Su combinación de árboles de conocimiento, lectura incremental, importación de documentos y páginas web y Algorithm Arena es muy distinta de la que ofrece una aplicación centrada en flashcards. Prueba el flujo de trabajo en sí, no solo la lista de algoritmos.

### Quieres cursos de idiomas preparados y alojados

Evalúa SuperMemo.com. Su producto web y móvil está diseñado alrededor de cursos de idiomas y MemoCards. Confirma que sus limitaciones sin conexión encajen con tu rutina de estudio y no des por hecho que el planificador sea el SM-20 del producto para Windows o que funcione como Algorithm Arena.

### Estás desarrollando una aplicación o eligiendo un planificador auditable

Evalúa las implementaciones y bibliotecas de FSRS. Su documentación, fórmulas y proyectos de referencia abiertos permiten inspeccionar el planificador. Aun así, tendrás que decidir cómo funcionan las valoraciones, qué ajustes pueden cambiar los usuarios, cómo se sincronizan los repasos, cómo se conserva el estado de las tarjetas y cómo comprobarás que el comportamiento coincida entre plataformas.

### Quieres un flujo moderno y de código abierto para web, móvil y agentes

Evalúa [Flashcards Open Source App](/features/). Combina FSRS-6 con web, iOS, Android, alojamiento propio, una API pública y acceso para agentes de IA. Su limitación es la madurez: su ecosistema es más joven que el de Anki y no iguala la riqueza de sus plantillas, complementos y mazos compartidos, ni su fidelidad al migrar colecciones. Conserva Anki para las colecciones que dependan de esas fortalezas.

## Un planificador no rescata un sistema de estudio débil

Ninguna comparación responsable de Anki vs SuperMemo vs FSRS puede prometer un ganador universal para el aprendizaje. Un planificador puede obtener predicciones mejor calibradas en una evaluación comparativa y seguir siendo solo una parte del resultado.

Los resultados reales siguen dependiendo de:

- si las tarjetas evalúan una sola cosa clara
- si valoras con honestidad los fallos al recordar
- si el historial de repasos es representativo
- si la retención deseada y el ritmo de incorporación crean una carga sostenible
- si completas los repasos pendientes o los dejas pasar una y otra vez
- si los flujos de edición, lectura y móvil del producto encajan con tu vida
- si el material de partida es correcto y merece la pena recordarlo

La documentación del proveedor explica el comportamiento del producto. Las evaluaciones predictivas comparan modelos con unos datos y unas métricas determinados. Ninguna de las dos cosas demuestra que un producto ayude a todos los estudiantes a recordar más.

## La conclusión útil sobre Anki vs SuperMemo vs FSRS

La respuesta práctica a **Anki vs SuperMemo vs FSRS** empieza por abandonar la falsa elección entre tres opciones.

Usa **Anki con FSRS** cuando quieras el ecosistema consolidado de Anki y un planificador FSRS actual. Evalúa **SuperMemo 20 for Windows** cuando sean fundamentales la lectura incremental y un sistema avanzado de gestión del conocimiento en Windows; FSRS ya participa en su Algorithm Arena. Evalúa **SuperMemo.com** por separado cuando el objetivo real sean los cursos de idiomas alojados. Evalúa las **implementaciones de FSRS** cuando estés desarrollando o auditando la propia capa de planificación.

Flashcards encaja si buscas una opción moderna y de código abierto para web, móvil, alojamiento propio y agentes. Ofrece una implementación de FSRS-6 con pesos fijados y paridad comprobada mediante pruebas, aunque su ecosistema de producto es más joven.

Elige el flujo de trabajo que puedas mantener y configura después el algoritmo de repetición espaciada dentro de él. El producto te lleva hasta el repaso. El planificador elige una fecha basada en un modelo. Tus tarjetas, tus valoraciones y tu constancia siguen aportando la señal de aprendizaje.
