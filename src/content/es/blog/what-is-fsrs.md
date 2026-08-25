---
title: "¿Qué es FSRS? Cómo funciona el planificador de repetición espaciada (2026)"
description: "FSRS predice cuándo podrías olvidar cada tarjeta y programa el próximo repaso según tu retención deseada. Descubre cómo encajan las valoraciones, los estados de memoria y los ajustes."
date: "2026-08-25"
image: "/blog/what-is-fsrs.png"
keywords:
  - "qué es FSRS"
  - "repetición espaciada FSRS"
  - "cómo funciona FSRS"
  - "Free Spaced Repetition Scheduler"
  - "algoritmo FSRS"
  - "Anki FSRS"
  - "retención deseada"
---

Das la vuelta a una tarjeta, recuerdas la respuesta con cierto esfuerzo y pulsas Good. La tarjeta desaparece durante un tiempo. En otra pulsas Again y vuelve mucho antes. FSRS no sabe que una respuesta era de anatomía y la otra, de español. Solo tiene en cuenta cuándo repasaste, el estado de memoria actual de la tarjeta y la valoración que elegiste.

**FSRS, siglas de Free Spaced Repetition Scheduler, es un algoritmo de planificación de código abierto que estima la probabilidad de que recuerdes cada tarjeta y elige la fecha del siguiente repaso según un objetivo de retención.** Utiliza el historial de repasos, el tiempo transcurrido y las cuatro valoraciones: Again, Hard, Good y Easy. La aplicación sigue gestionando las tarjetas, la pantalla de repaso, los pasos de aprendizaje y las demás funciones del producto.

Esa es la respuesta breve a **qué es FSRS**. Para entender cómo funciona, necesitas conocer tres magnitudes —Dificultad, Estabilidad y Recuperabilidad— y un detalle importante: no todas se comportan como puntuaciones almacenadas.

**Datos comprobados:** 25 de agosto de 2026.

![Una cuidadora de invernadero revisa tres depósitos de plantas con distintos niveles de agua y rellena el que alcanzó su umbral](/blog/what-is-fsrs.png)

## FSRS es el planificador, no la aplicación de tarjetas

Anki puede usar FSRS. Flashcards Open Source App usa FSRS. Otros productos y bibliotecas también pueden implementarlo. El [proyecto open-spaced-repetition](https://github.com/open-spaced-repetition) publica abiertamente el modelo, sus implementaciones y las herramientas relacionadas.

El producto y el planificador cumplen funciones distintas:

| Capa | Qué hace |
| --- | --- |
| Aplicación de tarjetas | Guarda las tarjetas, muestra la pantalla de repaso, sincroniza los datos y registra la valoración que eliges |
| Planificador FSRS | Actualiza el estado de memoria de la tarjeta y calcula un intervalo adecuado para el siguiente repaso |
| Optimizador de FSRS | Ajusta los parámetros del modelo al historial de repasos cuando la aplicación ofrece esta opción |
| Tú | Decides qué debe evaluar la tarjeta, das una respuesta y valoras el intento con honestidad |

Esta diferencia aclara expresiones como **Anki FSRS**. Anki es la aplicación; FSRS es el planificador que se activa en ella. También importa al comparar [Anki, SuperMemo y FSRS](/es/blog/anki-vs-supermemo-vs-fsrs/): Anki y SuperMemo son productos, mientras que FSRS puede formar parte de un producto.

El optimizador no interviene directamente en la planificación diaria. El planificador puede empezar con los parámetros predeterminados. Más adelante, un optimizador puede analizar un historial de repasos compatible y encontrar parámetros que se ajusten mejor a esos datos. No reescribe tus tarjetas ni decide qué importancia tiene el material para ti.

## El modelo mental de FSRS: dos estados persistentes y una estimación puntual

La [documentación oficial del algoritmo FSRS](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm) describe un modelo de Dificultad–Estabilidad–Recuperabilidad, que suele abreviarse como DSR. En FSRS-6, la Dificultad y la Estabilidad forman el estado de memoria que pasa de un repaso al siguiente. La Recuperabilidad se calcula para un momento concreto a partir de la Estabilidad y del tiempo transcurrido.

Esta diferencia es importante. La Recuperabilidad disminuye a medida que pasa el tiempo, aunque nadie modifique la tarjeta. El planificador puede calcularla cuando la necesita en vez de tratarla como un tercer valor fijo.

### Dificultad: cuánto cuesta reforzar este recuerdo

La **Dificultad** estima lo difícil que resulta aumentar la estabilidad del recuerdo asociado a una tarjeta. Según el modelo, una tarjeta con mayor dificultad tiende a ganar menos estabilidad tras un repaso acertado que otra más fácil en las mismas condiciones.

No es una puntuación objetiva sobre la complejidad del tema. FSRS no ha leído tu definición de anatomía ni ha comprobado tu gramática española. La Dificultad es una estimación interna que se obtiene del patrón de repasos y de las valoraciones de esa tarjeta.

### Estabilidad: cuánto tarda en desvanecerse el recuerdo

La **Estabilidad** describe la lentitud con la que se desvanece el recuerdo. Más concretamente, es el intervalo tras el cual la probabilidad de recordar que predice el modelo se reduce al 90%.

Ese 90% forma parte de la definición de Estabilidad, aunque hayas elegido una retención deseada diferente. La Estabilidad es una escala dentro del modelo de memoria; no equivale automáticamente al siguiente intervalo de la tarjeta. Después de un repaso acertado suele aumentar, por lo que puede pasar más tiempo hasta que la tarjeta alcance el mismo nivel de recuerdo previsto.

### Recuperabilidad: la probabilidad de recordar ahora mismo

La **Recuperabilidad** es la probabilidad que predice el modelo de que puedas recordar la tarjeta en este momento. Poco después de un repaso acertado es alta; a medida que pasa el tiempo, disminuye siguiendo la curva de olvido del modelo.

La Recuperabilidad es una predicción, no una lectura directa de tu cerebro. FSRS no puede saber con certeza si recordarás la respuesta cuando aparezca la tarjeta. Estima esa probabilidad a partir del estado de la tarjeta, el tiempo transcurrido, los parámetros y el historial de repasos.

Las tres magnitudes encajan en un modelo mental bastante sencillo:

- La Dificultad influye en la facilidad con la que cambia la Estabilidad.
- La Estabilidad determina la rapidez con la que disminuye la Recuperabilidad.
- La Recuperabilidad sitúa la tarjeta en esa curva en el momento actual.

## Cómo funciona FSRS durante un repaso real

Cuando una tarjeta ya ha llegado a la fase de repaso a largo plazo, el ciclo de planificación es, a grandes rasgos, el siguiente:

1. FSRS calcula la Recuperabilidad actual a partir de la Estabilidad de la tarjeta y del tiempo transcurrido desde el último repaso.
2. Revelas la respuesta y eliges Again, Hard, Good o Easy.
3. FSRS actualiza la Dificultad y la Estabilidad a partir de esa valoración y del estado anterior de la tarjeta.
4. Calcula cuándo se acercará la Recuperabilidad prevista a tu retención deseada.
5. La aplicación aplica las reglas pertinentes, como el intervalo máximo o el fuzz, y guarda cuándo toca el siguiente repaso.

Las [fórmulas publicadas de FSRS](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) definen esas actualizaciones. No necesitas calcularlas mientras estudias. Lo importante en la práctica es que el siguiente intervalo procede de una estimación propia de cada tarjeta que va cambiando, no de una secuencia fija como «un día, luego tres días y después una semana».

### Una tarjeta, varios repasos

Pensemos en una tarjeta que pregunta por la función del hipocampo. Los intervalos exactos dependen de la aplicación, los ajustes, el momento del repaso, los parámetros y la valoración. Por eso, esta secuencia es deliberadamente cualitativa.

| Momento del repaso | Tu valoración | Qué ocurre después |
| --- | --- | --- |
| Ves la tarjeta nueva y recuerdas la respuesta con normalidad | Good | La aplicación puede continuar con un paso de aprendizaje configurado antes de que la tarjeta llegue al repaso a largo plazo |
| Más adelante, la tarjeta llega al repaso a largo plazo y recordarla exige mucho esfuerzo | Hard | FSRS lo trata como un acierto difícil y asigna el intervalo más corto entre las opciones de recuerdo correcto a largo plazo para ese estado |
| En un repaso posterior, no consigues dar la respuesta | Again | FSRS aplica la actualización correspondiente al fallo; la aplicación también puede hacer que la tarjeta pase por un paso de reaprendizaje |
| La tarjeta vuelve y la recuerdas con normalidad | Good | FSRS actualiza la Dificultad y la Estabilidad a partir del nuevo acierto y calcula otro intervalo según el objetivo de retención |

La secuencia importa. Hard registra que lograste recordar; Again registra un fallo. Pulsar Again tampoco borra el historial anterior ni convierte la tarjeta en una tarjeta nueva y vacía.

## Qué indican a FSRS Again, Hard, Good y Easy

Los cuatro botones describen cómo fue el intento que acabas de hacer:

- **Again:** no lograste recordar la respuesta requerida o respondiste mal.
- **Hard:** la recordaste correctamente, pero con mucha dificultad o vacilación.
- **Good:** la recordaste correctamente con un esfuerzo normal.
- **Easy:** la recordaste correctamente con poco o ningún esfuerzo apreciable.

La [documentación oficial de Anki sobre FSRS](https://docs.ankiweb.net/deck-options.html#fsrs) deja muy claro el límite fundamental: Again significa fallo, mientras que Hard significa que sí recordaste la respuesta. Pulsar Hard después de olvidar envía al planificador una señal incorrecta y puede alargar demasiado los intervalos posteriores.

Elige la valoración según lo que hayas recordado, no según el intervalo que aparece encima del botón. Si Good manda la tarjeta más lejos de lo que esperabas, se trata de una cuestión de ajustes. Cambiar la valoración para conseguir una fecha concreta altera el historial de repasos en vez de corregir la configuración.

Las respuestas parciales y las tarjetas imprecisas complican esta decisión más de lo que sugieren las cuatro etiquetas. La guía detallada sobre [Again vs Hard](/es/blog/again-vs-hard-fsrs-flashcards/) explica esos casos. Una regla breve y fiable es decidir primero si hubo un fallo y después valorar el esfuerzo: usa Again si fallaste; elige Hard, Good o Easy solo si acertaste.

FSRS acepta la valoración que envías. No evalúa de forma objetiva tu respuesta oral o escrita.

## Desired retention convierte el modelo en una fecha de repaso

**Desired retention**, o retención deseada, es la probabilidad de recordar que quieres que el planificador tenga como objetivo cuando llegue el momento de repasar una tarjeta. Si la configuras en `0.90`, el planificador intenta mostrarla de nuevo cerca del momento en que el modelo predice una probabilidad del 90% de recordarla correctamente.

Es un objetivo del modelo, no una promesa de que siempre acertarás exactamente nueve de cada diez tarjetas. Las predicciones pueden ser imperfectas, tus hábitos al valorar pueden cambiar y las condiciones reales de estudio son complejas.

Aquí aparece una relación útil con la Estabilidad. Como la Estabilidad se define con una Recuperabilidad del 90%, cuando la desired retention está configurada en `0.90`, el intervalo a largo plazo calculado para una tarjeta de repaso está estrechamente ligado a su Estabilidad. El redondeo, el fuzz y el límite del intervalo máximo aún pueden modificar la fecha que ves. Si una tarjeta sigue en fase de aprendizaje, se rige por el flujo de pasos cortos de la aplicación.

El efecto sobre la carga de trabajo es directo:

- Una desired retention más alta hace que las tarjetas vuelvan antes y genera más repasos.
- Una desired retention más baja permite intervalos más largos y más olvidos.

La [sección del manual de Anki sobre desired retention](https://docs.ankiweb.net/deck-options.html#desired-retention) advierte de que la carga aumenta con rapidez a medida que el objetivo se acerca al 100%. No existe un único valor adecuado para todos los mazos y objetivos.

El optimizador no aprende la desired retention: esta refleja tu objetivo de estudio. Los parámetros describen el modelo de memoria; el objetivo de retención indica al planificador en qué punto de ese modelo quieres repasar.

Para elegir un valor en la práctica y entender cómo afecta a la carga, consulta la [guía de configuración de FSRS](/es/blog/fsrs-settings/).

## El optimizador es opcional y tú sigues eligiendo la desired retention

Las fórmulas de FSRS utilizan un conjunto de pesos, normalmente llamados **parámetros**, para actualizar la Dificultad y la Estabilidad y modelar el olvido. Una implementación puede usar los parámetros predeterminados. Si la aplicación ofrece un optimizador, también puede ajustar los parámetros a un historial de repasos compatible.

En la versión actual de Anki, la acción **Optimize** analiza el historial de repasos y genera parámetros adaptados a esos datos. La [documentación de Anki sobre los parámetros](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) recomienda no editar los valores manualmente ni copiar los parámetros de otra persona. Otras aplicaciones con FSRS pueden utilizar los valores predeterminados sin ofrecer esta función.

Aquí, «optimizado» tiene un significado limitado: según el optimizador, los parámetros se ajustan mejor a los datos de repaso proporcionados. No significa que las tarjetas sean correctas, que el plan de estudio tenga sentido o que todas las predicciones futuras vayan a acertar.

Los valores predeterminados siguen siendo importantes. El planificador puede funcionar sin un ajuste personalizado y aun así mantener un estado de memoria distinto para cada tarjeta.

## Los learning steps funcionan en una escala temporal distinta

Las tarjetas nuevas suelen aparecer de nuevo a los pocos minutos, antes de que empiece el espaciado a largo plazo. Una tarjeta de repaso que hayas fallado también puede volver pronto. Las aplicaciones de tarjetas llaman **learning steps** y **relearning steps** a estos intervalos breves.

- Los learning steps son intervalos breves configurados para la fase en la que se introduce una tarjeta nueva.
- Los relearning steps son intervalos breves que se aplican después de pulsar Again en una tarjeta que ya había llegado al repaso a largo plazo.
- Una vez que la tarjeta se gradúa, su siguiente intervalo a largo plazo procede del modelo de memoria de FSRS.

Por eso, cambiar un learning step de diez minutos no es lo mismo que cambiar la desired retention. El paso controla directamente una repetición a corto plazo. La desired retention determina los intervalos a largo plazo basados en el modelo. Según la implementación, el planificador puede seguir actualizando la memoria durante el aprendizaje; por tanto, los learning steps delimitan una fase del flujo de trabajo, no una teoría de la memoria independiente.

La [guía actual de Anki sobre learning steps con FSRS](https://docs.ankiweb.net/deck-options.html#learning-steps) recomienda usar pasos que puedan completarse el mismo día. También ofrece una opción experimental para que FSRS gestione la planificación a corto plazo cuando los campos de pasos están vacíos. Otras aplicaciones pueden tomar decisiones diferentes, así que comprueba qué admite la tuya antes de copiar la configuración de Anki.

## Lo que FSRS no puede decidir por ti

FSRS puede programar con precisión datos de entrada deficientes. Las tarjetas no mejoran por el mero hecho de que los intervalos sean sofisticados.

El planificador no puede:

- entender qué significa la tarjeta
- comprobar si la respuesta guardada es verdadera o sigue estando actualizada
- decidir si una respuesta parcial debe contar
- corregir una pregunta ambigua o un reverso sobrecargado
- saber si el dato es importante para tus objetivos
- hacer sostenible por sí solo un flujo excesivo de tarjetas nuevas
- garantizar que completes los repasos cuando correspondan

Imagina una tarjeta que pregunta: «Explica el sistema inmunitario». Pulsar Again repetidamente puede generar más repasos, pero ningún planificador puede convertir una pregunta tan amplia en una única tarea clara de recuperación. La solución está en el editor de tarjetas. La [guía para crear mejores tarjetas](/es/blog/how-to-make-better-flashcards/) explica esa parte.

Este límite ayuda a diagnosticar los problemas de estudio. Si los intervalos a largo plazo parecen extraños, revisa los ajustes, el historial de valoraciones o la implementación. Si el reverso de la tarjeta te hace dudar constantemente, revisa la calidad de la tarjeta. Una cola enorme puede deberse al ritmo al que añades tarjetas nuevas, no al propio algoritmo FSRS.

## Cómo implementa Flashcards el algoritmo FSRS

> **Aviso:** Soy Kirill Markin y desarrollo [Flashcards Open Source App](/es/features/). Esta sección describe el comportamiento ya disponible en el producto; no implica que todos los estudiantes deban dejar otra aplicación.

Flashcards implementa actualmente **FSRS-6** reproduciendo el flujo de planificación oficial de `ts-fsrs` 5.2.3. Utiliza las valoraciones estándar Again, Hard, Good y Easy. Los planificadores del backend, iOS y Android siguen el mismo comportamiento, mientras que el flujo de repaso web reutiliza el planificador del backend.

Los valores predeterminados actuales son una desired retention de `0.90`, learning steps de 1 y 10 minutos, un relearning step de 10 minutos, un intervalo máximo de 36 500 días y el fuzz activado. Los propietarios de cada espacio de trabajo pueden modificar estos ajustes. Los cambios solo afectan a los repasos futuros; las fechas de repaso existentes no se recalculan sin avisar.

Flashcards fija los pesos predeterminados oficiales de FSRS-6 en v1. Los usuarios no pueden modificarlos y, por ahora, el producto no ajusta parámetros FSRS personalizados a partir del historial de cada usuario. Esta limitación es importante al compararlo con el optimizador de Anki.

La [especificación pública del planificador FSRS de Flashcards](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) documenta el modelo de estado actual, los valores predeterminados, los límites de los ajustes y las reglas de paridad entre plataformas. La [página general de funcionalidades](/es/features/) muestra cómo encaja el planificador en el producto, en lugar de presentar FSRS como si fuera una aplicación independiente.

## Preguntas frecuentes sobre FSRS

### ¿Qué significan las siglas FSRS?

FSRS significa **Free Spaced Repetition Scheduler**. Es un planificador de código abierto que calcula cuándo deben volver a aparecer las tarjetas.

### ¿FSRS es solo para Anki?

No. Anki incluye una implementación de FSRS, pero FSRS es un planificador que otras aplicaciones y bibliotecas también pueden implementar. Funciones como la edición, la sincronización, las importaciones y la interfaz de repaso pertenecen a la aplicación que lo integra.

### ¿Sabe FSRS si mi respuesta es correcta?

No. FSRS recibe la valoración que registra la aplicación. Tú sigues comparando tu respuesta con la tarjeta y decidiendo si el intento corresponde a Again, Hard, Good o Easy.

### ¿Se almacenan en una tarjeta la Dificultad, la Estabilidad y la Recuperabilidad?

No necesariamente. En FSRS-6, la Dificultad y la Estabilidad forman el estado de memoria que se conserva. La Recuperabilidad se calcula para un momento concreto a partir de la Estabilidad y del tiempo transcurrido. Una aplicación puede guardar otros campos de planificación para gestionar su propio flujo de trabajo.

### ¿Una desired retention del 90% significa que recordaré el 90% de todo?

No. Indica al planificador que tenga como objetivo una probabilidad prevista de recuerdo del 90% cuando llegue el momento de repasar las tarjetas. No es una garantía para cada tarjeta, sesión de estudio, examen o situación real.

### ¿Necesito parámetros de FSRS optimizados?

No para empezar. FSRS puede utilizar los parámetros predeterminados. Si tu aplicación permite optimizarlos y tienes un historial de repasos útil, unos parámetros ajustados pueden reflejar mejor ese historial. No copies los parámetros de otra persona.

### ¿Es FSRS mejor que SM-2?

Utilizan modelos de planificación diferentes. FSRS añade un objetivo de retención explícito y actualiza un modelo de memoria propio de cada tarjeta, en vez de basarse en la misma estructura de intervalos y factor de facilidad. La [comparación específica entre FSRS y SM-2](/es/blog/fsrs-vs-sm-2/) analiza la evidencia y las ventajas e inconvenientes sin mezclarlos con las funciones de las aplicaciones.

### ¿Qué ajuste de FSRS debería entender primero?

Empieza por la desired retention, porque expresa directamente el equilibrio entre recuerdo y carga de trabajo. Después, revisa los learning steps y relearning steps. No modifiques los parámetros del modelo a menos que tu aplicación ofrezca un proceso de optimización compatible.

## Recuerda quién hace qué

La aplicación muestra la tarjeta. Tú decides si la recordaste. FSRS actualiza la Dificultad y la Estabilidad, calcula la Recuperabilidad para el momento actual y programa otro repaso según la desired retention. Los learning steps se encargan de las repeticiones a corto plazo, y un optimizador opcional puede ajustar los parámetros del modelo al historial de repasos.

Este reparto indica dónde corregir cada problema. Ajusta la configuración cuando la carga o los intervalos a largo plazo no parezcan adecuados. Edita la tarjeta cuando la pregunta o la respuesta estén mal. Valora el intento con honestidad en el momento del repaso.

FSRS puede elegir una fecha basándose en el modelo. La señal útil sigue empezando con una tarjeta clara y el botón que pulsas.
