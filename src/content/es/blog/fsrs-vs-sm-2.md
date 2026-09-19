---
title: "FSRS vs SM-2: diferencias, carga de repasos y cómo cambiar en Anki"
description: "Compara FSRS con SM-2, entiende qué aportan las evaluaciones de retención y cambia el planificador de Anki sin reprogramar toda tu colección de golpe."
date: "2026-03-12"
updated: "2026-09-19"
image: "/blog/fsrs-vs-sm-2.png"
keywords:
  - "FSRS vs SM-2"
  - "SM-2 frente a FSRS"
  - "FSRS vs SM2 en Anki"
  - "es FSRS mejor que SM2"
  - "cambiar Anki a FSRS"
  - "algoritmo de repetición espaciada"
---

Anki te permite cambiar de planificador y conservar tus tarjetas y tu historial de repasos. La comparación **FSRS vs SM-2** plantea, por tanto, una cuestión práctica: cómo se elegirá la fecha del próximo repaso y si la nueva rutina encajará contigo.

Para la mayoría de quienes estudian con Anki y usan aplicaciones compatibles, **FSRS es una opción razonable para planificar los repasos a largo plazo**. Su modelo de memoria te permite fijar explícitamente cuánto quieres recordar y puede aprender de tu historial de repasos. Son buenos motivos para cambiar. No garantiza que mañana tengas menos tarjetas pendientes ni que ahorres un porcentaje concreto de tiempo.

**Datos verificados:** 19 de septiembre de 2026.

![Un panadero comprueba una pieza de masa con la yema del dedo mientras otras dos reposan bajo un paño](/blog/fsrs-vs-sm-2.png)

## Primero, ¿qué SM-2 estamos comparando?

El [algoritmo SM-2 original](https://super-memory.com/english/ol/sm2.htm) puntúa las respuestas de cero a cinco. Los primeros repasos acertados dan lugar a intervalos de uno y seis días. Después, cada intervalo se calcula multiplicando el anterior por un factor de facilidad, que cambia según las valoraciones de las respuestas.

El planificador clásico de Anki modifica ese diseño. Usa cuatro botones de respuesta, pasos de aprendizaje configurables y ajustes para los repasos atrasados, entre otras diferencias. Es habitual llamarlo «SM-2» por simplificar, pero la fórmula original y la implementación de Anki no son intercambiables. Las [preguntas frecuentes sobre el algoritmo de Anki](https://faqs.ankiweb.net/what-spaced-repetition-algorithm.html) explican esta distinción.

FSRS, abreviatura de Free Spaced Repetition Scheduler, modela el estado de memoria de cada tarjeta. La dificultad describe cuánto cuesta reforzar el recuerdo; la estabilidad, la lentitud con la que se desvanece; y la recuperabilidad estima la probabilidad de recordar la respuesta en este momento. Un optimizador ajusta los parámetros del modelo al historial de repasos, mientras que los valores predeterminados permiten que el planificador funcione sin ese historial. La guía oficial [ABC of FSRS](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/ABC-of-FSRS) y nuestra [explicación de FSRS](/es/blog/what-is-fsrs/) describen el modelo con más detalle.

| Pregunta | SM-2 original | Planificador clásico de Anki | FSRS |
| --- | --- | --- | --- |
| ¿Qué determina el aumento de los intervalos? | El intervalo anterior y el factor de facilidad | Reglas basadas en la facilidad con los ajustes de Anki | Estimaciones actualizadas de la memoria y un objetivo de recuerdo |
| ¿Se adapta a cada tarjeta? | Sí | Sí | Sí |
| ¿Puedes elegir directamente un objetivo de recuerdo? | No | No | Sí, mediante la retención deseada |
| ¿Puede ajustar los parámetros del modelo al historial de repasos? | No | No | Sí, cuando la aplicación incluye un optimizador |

Ambos enfoques se ajustan a tus respuestas. La diferencia relevante está en cómo FSRS relaciona esas respuestas con un modelo del olvido y con el objetivo de recuerdo elegido. La antigüedad de SM-2 no basta para descartarlo, y un intervalo más largo tampoco demuestra por sí solo que la planificación sea mejor.

## Qué puede decirte realmente la evidencia

Las afirmaciones sobre FSRS suelen mezclar tres preguntas: con qué precisión predice el recuerdo, con qué eficiencia planifica en una simulación y qué ocurre en las sesiones de estudio reales.

La **predicción del recuerdo** compara las probabilidades estimadas de recordar con los resultados de repasos posteriores. La [evaluación pública de modelos de repetición espaciada](https://github.com/open-spaced-repetition/srs-benchmark) los evalúa usando registros de repasos. Al leer los resultados, ten en cuenta la versión del modelo y las condiciones de evaluación, incluido el tratamiento de los repasos del mismo día. Una versión de investigación que aparece en una tabla de resultados puede ser distinta de la que usa tu aplicación. La tabla no es un experimento directo que compare tu tiempo de estudio con los dos planificadores de Anki.

También hay que saber interpretar las métricas. La pérdida logarítmica evalúa las predicciones de probabilidad y penaliza las predicciones erróneas que daban el resultado por casi seguro; la calibración comprueba si las tasas de acierto previstas coinciden con las observadas. La [explicación de las métricas de FSRS](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Metric) describe estas medidas. Ninguna mide directamente los minutos dedicados al estudio ni los resultados en exámenes.

La **simulación de la carga de trabajo** estima qué podría ocurrir según un modelo y unos supuestos concretos. Las afirmaciones sobre eficiencia de la [introducción a FSRS](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/ABC-of-FSRS) incluyen resultados de simulaciones. Ayudan a explicar los argumentos a favor de FSRS, pero no permiten saber cuántos repasos te ahorrarás con tu colección.

**Lo que ocurre en tu estudio** incluye cuánto recuerdas, el tiempo de repaso y si puedes mantener el ritmo. Tener menos tarjetas pendientes y olvidar más puede reflejar un equilibrio distinto entre esfuerzo y recuerdo. Para decidir si el cambio te ha ayudado, observa tanto la carga de trabajo como el recuerdo y mantén el material y los hábitos razonablemente comparables.

## ¿Te conviene cambiar ahora?

| Tu situación | Siguiente paso razonable |
| --- | --- |
| Las aplicaciones que usas admiten FSRS y quieres planificar con un objetivo de recuerdo | Activa FSRS con una transición gradual |
| Tu rutina funciona y tienes un examen dentro de pocos días | Espera a que pase antes de introducir una variable desconocida |
| Uno de tus dispositivos usa una aplicación incompatible | Actualiza esa aplicación antes de cambiar |
| Pulsas Difícil cuando has olvidado la respuesta | Corrige ese hábito de valoración antes de juzgar cualquiera de los dos planificadores |
| Te has atrasado tras una importación grande o varias sesiones perdidas | Revisa cuántas tarjetas añades y los repasos pendientes junto con la elección del planificador |
| Estás creando un pequeño planificador con fines educativos | El SM-2 original sirve para enseñar las reglas de intervalos basadas en la facilidad |

Los consejos sobre exámenes y repasos pendientes responden a un criterio práctico, no a conclusiones de un ensayo sobre planificadores. Tu limitación inmediata puede ser la cantidad de material que has añadido. Para ese problema, empieza por [por qué se acumulan los repasos de Anki](/es/blog/why-are-there-so-many-anki-reviews/).

## Cambia sin reorganizar todos los repasos pendientes

Consulta el [manual de FSRS de Anki](https://docs.ankiweb.net/deck-options.html#fsrs) para ver las opciones actuales:

1. Sincroniza, haz una copia de seguridad y comprueba la compatibilidad de las aplicaciones que usas y de los complementos de planificación.
2. Activa FSRS en las opciones del mazo. La activación afecta a todos los grupos de opciones (preajustes), no solo a un mazo.
3. Optimiza usando tu propio historial. Puedes usar los valores predeterminados si el historial es insuficiente; no copies los parámetros de otra persona.
4. Empieza con la retención deseada predeterminada del 90 %, salvo que tengas un motivo para cambiarla. Los objetivos más altos implican más repasos.
5. Deja desactivada la opción **Reprogramar tarjetas al cambiar (Reschedule cards on change)**. Así, la nueva planificación se aplica a medida que repasas las tarjetas, sin cambiar inmediatamente todas las fechas de repaso.

Nuestra [guía de ajustes de FSRS](/es/blog/fsrs-settings/) explica en detalle los pasos de aprendizaje, las opciones de retención y la optimización.

Valora siempre con el mismo criterio: **Otra vez (Again) significa que no has recordado la respuesta; Difícil (Hard) significa que la has recordado, pero con dificultad**. Valora la respuesta que has dado, en lugar de elegir el intervalo que prefieres. Consulta las [indicaciones de Anki sobre las valoraciones](https://docs.ankiweb.net/studying.html) y nuestra [guía sobre Otra vez y Difícil](/es/blog/again-vs-hard-fsrs-flashcards/) para valorar respuestas parciales.

## Lleva un pequeño registro de observaciones

Antes de cambiar, registra una semana típica; amplía el registro a varias semanas si tus horarios varían. Repite las mismas observaciones después. Es un registro práctico para tomar decisiones, no un experimento controlado. Copia la tabla y rellena las dos últimas columnas:

| Medida | Qué registrar siempre del mismo modo | Antes: fechas ___ | Después: fechas ___ |
| --- | --- | --- | --- |
| Intentos de repaso | Todos los intentos, incluidas las tarjetas repetidas | ___ | ___ |
| Tiempo de repaso | Minutos, usando el mismo método de medición | ___ | ___ |
| Recuerdo en los repasos programados | Respuestas acertadas / intentos para el mismo grupo de tarjetas; excluye el reaprendizaje inmediato | ___ / ___ | ___ / ___ |
| Tarjetas nuevas | Las tarjetas que añades realmente, incluidas las importaciones | ___ | ___ |
| Repasos atrasados | Días sin repasar y tarjetas pendientes al final de la semana | ___ | ___ |
| Otros cambios | Objetivo de retención, modificaciones de tarjetas, estudio fuera de la aplicación, hábitos de valoración, interrupciones | ___ | ___ |

Decide qué nivel de recuerdo consideras aceptable antes de mirar el resultado. Por ejemplo, anota el nivel mínimo de recuerdo que aceptarías y el tiempo semanal de repaso que puedes mantener. Son los límites que te has marcado, no una promesa de que un planificador vaya a cumplirlos.

Si añades la mitad de tarjetas nuevas, tener menos tarjetas pendientes no demuestra que FSRS haya causado la reducción. Si reescribes preguntas ambiguas, la mejora al recordar tiene otra explicación plausible. Registrar estos cambios es más útil que intentar que los números parezcan mejores.

Un cambio gradual también mezcla intervalos creados por ambos planificadores. Las tarjetas con intervalos largos pueden tardar meses en volver a aparecer, así que las primeras observaciones describen sobre todo la transición. Evita declarar un ganador después de un fin de semana tranquilo.

Si dedicas menos tiempo al repaso y sigues recordando un porcentaje aceptable de respuestas durante semanas comparables, tienes un motivo práctico para conservar la configuración. Si recuerdas menos de lo que consideras aceptable, revisa los días sin repasar, la calidad de las tarjetas, las valoraciones y tu objetivo antes de atribuir el cambio al algoritmo. Si el tiempo sigue siendo alto, comprueba si el material nuevo o los repasos atrasados lo explican.

Puedes tomar esta decisión sin salir de Anki. [Nibomo](/es/features/) también usa FSRS; elegirlo es una decisión aparte sobre cómo crear tarjetas, repasarlas y sincronizarlas. No necesitas migrar tu colección para usar FSRS.
