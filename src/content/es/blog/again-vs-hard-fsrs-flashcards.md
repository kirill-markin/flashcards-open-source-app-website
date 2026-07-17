---
title: "Again vs Hard en FSRS (2026): cómo usar las cuatro valoraciones"
description: "Aprende cuándo pulsar Again, Hard, Good o Easy en aplicaciones de flashcards con FSRS. Aplica una regla sencilla para valorar lo que recordaste, sin elegir según el intervalo siguiente."
date: "2026-07-17"
image: "/blog/again-vs-hard-fsrs-flashcards.png"
keywords:
  - "Again vs Hard en FSRS"
  - "Hard vs Again en Anki"
  - "Again Hard Good Easy"
  - "cómo valorar flashcards"
  - "valoraciones de FSRS"
  - "cuándo pulsar Again"
  - "cuándo pulsar Hard"
  - "valoraciones de repaso de flashcards"
  - "repaso de flashcards con dos botones"
---

Das la vuelta a una tarjeta y ves la respuesta que no pudiste recordar hace cinco segundos. Ahora te resulta totalmente familiar. `Again` parece demasiado severo. `Hard` ofrece un intervalo siguiente menos doloroso. Tu cursor empieza a negociar.

La regla para **Again vs Hard en FSRS** es sencilla: primero decide si lograste recordar la respuesta; solo después juzga el esfuerzo. Elige Again si no pudiste dar la respuesta que pedía la tarjeta o respondiste mal. Elige Hard únicamente si la recordaste correctamente y te costó mucho recuperarla.

Sigue los mismos dos pasos con cada tarjeta:

1. Decide si el intento fue un fallo o un acierto.
2. Después de un acierto, valora el esfuerzo como Hard, Good o Easy.

Este orden evita que un «casi me la sabía» acabe contando como acierto.

![Una mano decide si elegir Again o Hard entre las cuatro valoraciones de FSRS para flashcards sobre un escritorio de madera con luz cálida](/blog/again-vs-hard-fsrs-flashcards.png)

## Again vs Hard en FSRS: primero el fallo, después el esfuerzo

Las cuatro valoraciones registran dos decisiones: si recordaste la respuesta y, en caso afirmativo, cuánto te costó.

| ¿Qué ocurrió antes de revelar la respuesta? | Valoración | Significado práctico |
| --- | --- | --- |
| No pudiste dar la respuesta que pedía la tarjeta o respondiste mal | Again | Fallo al recordar |
| La recordaste correctamente tras mucha dificultad, duda o vacilación | Hard | Recuerdo correcto, pero difícil |
| La recordaste correctamente con un esfuerzo mental normal | Good | Recuerdo correcto con esfuerzo normal |
| La recordaste correctamente sin un esfuerzo apreciable | Easy | Recuerdo correcto y sin esfuerzo |

La [guía de botones de respuesta de Anki](https://docs.ankiweb.net/studying.html#answer-buttons) marca la misma diferencia: Again corresponde a una respuesta incorrecta o ausente, mientras que Hard corresponde a una respuesta correcta que llegó tras dudar o tardar. La [implementación de referencia py-fsrs](https://github.com/open-spaced-repetition/py-fsrs#quickstart) también define Again como olvido y las otras tres valoraciones como distintas formas de recordar.

## Again significa que no lograste recordar

Elige Again cuando diste una respuesta incorrecta, no respondiste o faltaba algo que la tarjeta exigía.

Algunas situaciones habituales para usar Again son:

- «No lo sé».
- La respuesta correcta solo se te ocurrió después de revelar el reverso.
- Diste la respuesta opuesta, la fórmula equivocada, la dirección incorrecta o una condición errónea.
- Necesitaste una pista que no formaba parte de la tarjeta.
- Solo recordaste una parte aunque la tarjeta exigía la respuesta completa.

Que la respuesta te resulte familiar después de revelarla no cambia el intento. Ver `matriz mitocondrial` y pensar «claro» demuestra que ahora la reconoces. El anverso evaluaba si podías recordarla antes de verla.

El [tutorial oficial de FSRS advierte que no debes pulsar Hard después de olvidar](https://github.com/open-spaced-repetition/fsrs4anki/blob/main/docs/tutorial.md), porque FSRS interpreta Hard como un recuerdo correcto. Si la respuesta nunca te vino a la mente, Hard registra un resultado que no ocurrió.

Again da al planificador un dato útil. El botón registra lo que pasó; no te castiga por haber tenido una mala mañana.

## Hard, Good y Easy indican que sí lograste recordar

Elige Hard cuando diste la respuesta que pedía la tarjeta y te resultó inusualmente difícil recuperarla.

Puede que:

- hicieras una pausa larga mientras la respuesta correcta se iba formando poco a poco
- sintieras muchas dudas, pero te decidieras por la respuesta correcta antes de revelar el reverso
- reconstruyeras la respuesta mediante varios pasos mentales
- recordaras la distinción correcta solo después de descartar una alternativa errónea pero tentadora

En todos esos casos, la respuesta debe ser correcta. Hard no significa «en su mayor parte estaba mal», «la reconocí después» ni «quiero volver a verla antes».

**Good** es la valoración normal cuando recuerdas correctamente. La respuesta te costó un esfuerzo habitual. Puede que hicieras una pausa breve o repasaras mentalmente cómo decirla, pero recordarla no supuso una lucha ni fue algo automático.

**Easy** corresponde a un recuerdo correcto y sin esfuerzo. La respuesta te vino con claridad y sin vacilaciones apreciables.

No existe un número universal de segundos que convierta Good en Hard. Una respuesta breve de vocabulario y una regla jurídica de varios pasos requieren tiempos distintos. FSRS no convierte tu tiempo de respuesta en una valoración; el [tutorial oficial señala que la duración del repaso no es un dato que FSRS use para programar](https://github.com/open-spaced-repetition/fsrs4anki/blob/main/docs/tutorial.md#faq). Juzga el esfuerzo en función de la tarea escrita en la tarjeta.

Si cada vez te cuesta decidir, quizá la tarjeta esté pidiendo demasiado.

## Las respuestas parciales dependen de lo que exija la tarjeta

Las respuestas parciales son el origen de casi todas las dudas razonables. Empieza por lo que el anverso pide exactamente.

Supón que el anverso dice:

> Nombra las tres ramas del tronco celíaco.

Recuerdas las arterias gástrica izquierda y esplénica, pero no la arteria hepática común. La tarjeta exige de forma explícita las tres. El intento falló, así que elige Again.

Ahora supón que el anverso dice:

> ¿Qué irriga el tronco celíaco?

Respondes que irriga el intestino anterior y después revelas un reverso que dice: «El intestino anterior y sus derivados a través de tres ramas principales». Si la tarjeta evalúa `intestino anterior`, el texto adicional puede ser una explicación y no contenido obligatorio. El intento puede contar como acierto.

El mismo principio funciona fuera de la medicina:

- Una tarjeta de idiomas evalúa el significado y usas un sinónimo válido en lugar de las palabras guardadas: normalmente cuenta como acierto.
- Una tarjeta de pronunciación evalúa la sílaba tónica y das el significado correcto con una acentuación incorrecta: es un fallo para esa tarjeta.
- Una tarjeta de fórmulas exige el signo negativo y lo omites: es un fallo.
- Una tarjeta de historia pregunta por la causa principal y el reverso también incluye un ejemplo opcional: omitir el ejemplo puede seguir contando como acierto.

El [manual de Anki propone una prueba práctica para las respuestas parciales](https://docs.ankiweb.net/studying.html#answer-buttons): pregúntate si la respuesta contaría como un fallo en la situación real en la que necesitas ese conocimiento. Si falta un detalle crucial, normalmente debes elegir Again. Si solo omites palabras no esenciales, el intento puede contar como acierto; después valoras el esfuerzo.

Si sigues debatiendo qué detalles cuentan, edita la tarjeta. Un anverso con un objetivo claro produce repasos más limpios que discutir contigo cada mañana si la respuesta cuenta o no. La [guía para hacer mejores flashcards](/es/blog/how-to-make-better-flashcards/) explica ese trabajo de reparación con más detalle.

## Una pista cambia el intento

Una pista puede ayudarte a aprender, pero la respuesta ya no salió sin ayuda.

Si el anverso pregunta por la capital de Burkina Faso y necesitas la pista «Empieza por U» antes de recordar Uagadugú, el intento original falló. Elige Again al registrar ese repaso.

Una ayuda incluida de antemano en el anverso forma parte de la tarjeta. Si el anverso siempre incluye una letra inicial, un diagrama, el contexto de una frase o una hoja de fórmulas, juzga la respuesta con esa ayuda presente. Estás valorando el intento con la tarjeta que diseñaste.

La tutoría con IA sigue la misma regla. Una IA puede revelar una pista, comparar textos o guardar una nota de la sesión. Esa nota no es una valoración de FSRS, y una comparación convincente no demuestra que ninguna de las respuestas sea correcta. Por eso, el [flujo de trabajo con un tutor de flashcards con IA](/es/blog/ai-flashcard-tutor-due-cards/) mantiene los intentos iniciales separados de los repasos oficiales.

## Valora por separado cada intento durante el reaprendizaje

Después de Again, una tarjeta de repaso puede volver durante la misma sesión si la aplicación usa un paso breve de reaprendizaje. Cuánto tarda en volver depende de la aplicación y de su configuración.

La [documentación de Anki sobre el reaprendizaje](https://docs.ankiweb.net/deck-options.html#relearning-steps) denomina *lapse* u olvido a pulsar Again en una tarjeta de repaso. Cuando hay pasos de reaprendizaje configurados, la tarjeta que has fallado pasa por ellos antes de volver al repaso normal.

Trata la reaparición como un intento nuevo:

1. En la primera aparición, fallas y eliges Again.
2. La tarjeta vuelve después del paso de reaprendizaje configurado.
3. Respondes de nuevo antes de revelar el reverso.
4. Si ahora la recuerdas correctamente, elige Hard, Good o Easy para ese nuevo intento.

El primer fallo ya consta en el historial de repasos. Un acierto posterior no lo borra, y el fallo anterior no te obliga a elegir Again otra vez. Cada pulsación registra el intento actual.

Recordar la respuesta cuando la tarjeta vuelve puede parecer sospechoso porque la viste hace poco. Es normal durante el reaprendizaje. Valora el intento actual con honestidad y deja que los pasos configurados se ocupen de la repetición a corto plazo.

## No elijas la valoración por el intervalo mostrado

Muchas pantallas de repaso muestran el próximo intervalo junto a cada botón. La vista previa te indica qué haría el planificador después de cada valoración. No es un menú de fechas.

Las [preguntas frecuentes oficiales sobre la valoración en FSRS](https://github.com/open-spaced-repetition/fsrs4anki/blob/main/docs/tutorial.md#faq) indican que debes valorar según lo bien que recordaste la información e ignorar los intervalos mostrados. Si pulsas Hard porque Good parece quedar «demasiado lejos», registras un acierto difícil que no ocurrió. Evitar Easy porque su intervalo asusta también distorsiona el historial de repasos.

Si los intervalos suelen parecerte demasiado agresivos o los repasos se acumulan, cambia la configuración del planificador. La retención deseada, los pasos de reaprendizaje y la carga de repasos se ajustan en la configuración y en tu plan de estudio; la [guía de configuración de FSRS](/es/blog/fsrs-settings/) explica esas decisiones.

El botón debe describir cómo respondiste. El planificador se ocupa de la fecha.

## Usar solo Again y Good es una simplificación válida

Los cuatro botones son útiles cuando puedes usarlos de forma constante. No hay premio por convertir cada repaso en un pequeño examen oral.

El hábito de usar dos botones funciona así:

- Again para cada fallo
- Good para cada acierto

Tanto el [manual de Anki](https://docs.ankiweb.net/studying.html#answer-buttons) como el [tutorial de FSRS](https://github.com/open-spaced-repetition/fsrs4anki/blob/main/docs/tutorial.md#faq) indican que repasar con Again y Good funciona. Este enfoque registra menos detalles sobre los aciertos difíciles y los que salen sin esfuerzo. También puede darte una regla fácil de seguir sin vacilar.

Es una simplificación válida. Conserva las cuatro valoraciones si Hard y Easy describen diferencias reales y repetibles en tus repasos. Usa Again y Good si elegir entre las otras opciones te hace dudar con cada tarjeta. El límite entre fallo y acierto no cambia en ninguno de los dos casos.

## Ejemplos y casos límite de Again vs Hard

Estos ejemplos aplican la misma regla respetando lo que pide cada tarjeta.

| Momento del repaso | Valoración | Por qué |
| --- | --- | --- |
| Para `abate`, terminas diciendo «disminuir en intensidad» después de que te costara mucho | Hard | El significado exigido llegó correctamente antes de revelar la respuesta |
| No puedes nombrar el nervio que inerva el deltoides; `nervio axilar` parece obvio después de revelar la respuesta | Again | Reconocerlo después no corrige el intento fallido |
| Respondes `apresurarse` para el alemán `sich beeilen`, mientras la tarjeta evalúa el significado y guarda `darse prisa` | Hard, Good o Easy | El sinónimo puede satisfacer el objetivo; después valoras el esfuerzo |
| Nombras el deber de cuidado, el incumplimiento y los daños, pero omites el nexo causal en una tarjeta que pide todos los elementos de la negligencia | Again | Falta una parte obligatoria de la lista |
| Derivas correctamente `x²eˣ` como `2xeˣ + x²eˣ` siguiendo los pasos habituales | Normalmente Good | El trabajo esperado para esta tarjeta importa más que la velocidad por sí sola |
| Respondes «aparato de Golgi» solo después de recibir una pista imprevista sobre sacos membranosos aplanados y apilados | Again | El intento original sin ayuda falló |
| Dices el concepto correcto y cometes un error al escribir en una tarjeta que no evalúa la ortografía | Hard, Good o Easy | El concepto es correcto; valora según lo difícil que fue recordarlo |

Los errores tipográficos muestran por qué importa lo que evalúa cada tarjeta. Un error tipográfico puede contar como fallo en una tarjeta de ortografía y como acierto en una tarjeta de conceptos. Del mismo modo, una derivación lenta puede ser normal en matemáticas e inusualmente difícil para un dato de una sola palabra. Estos ejemplos son decisiones sobre preguntas concretas, no leyes universales de valoración.

## Repetir Again es una señal sobre la calidad de la tarjeta

Que una tarjeta reciba Again varias veces puede indicar que el material es difícil. También puede revelar una tarjeta mal planteada.

Revisa esa tarjeta cuando:

- el anverso admite varias respuestas razonables
- el reverso contiene varios datos independientes
- entiendes el tema, pero no sabes qué respuesta espera la tarjeta
- dos tarjetas parecidas siguen interfiriendo entre sí
- el dato aporta demasiado poco valor para justificar el tiempo de repaso

Reescribe o divide la tarjeta, vuelve a estudiar el contenido o elimínala en vez de protegerla con Hard. La [guía para corregir flashcards leech](/es/blog/how-to-fix-leech-flashcards/) explica ese flujo de trabajo.

FSRS programa a partir de la señal que le das. No puede reparar una pregunta ambigua, decidir qué detalle ausente era importante ni verificar si tu respuesta oral era correcta.

## Cómo encajan las cuatro valoraciones de FSRS en Flashcards

Las [funcionalidades de Flashcards Open Source App](/es/features/) incluyen repasos de anverso y reverso con FSRS. Envías Again, Hard, Good o Easy, y el backend usa esa valoración para calcular cuándo toca el próximo repaso.

Aplica la misma regla de dos pasos en ese flujo:

1. Compara lo que respondiste con la respuesta que pedía la tarjeta.
2. Registra el fallo con Again; si acertaste, valora el esfuerzo como Hard, Good o Easy.

La aplicación registra la valoración que envías. Tú sigues comparando tu respuesta con el reverso guardado y decidiendo qué opción encaja. Esa decisión humana explica por qué importan una tarjeta clara y un hábito de valoración estable.

Si quieres probar el flujo de repaso, [abre la aplicación](https://app.flashcards-open-source-app.com/). La aplicación ofrece los cuatro botones y la programación con FSRS; valorar con honestidad sigue siendo cosa tuya.

## Preguntas frecuentes sobre Again, Hard, Good y Easy

### ¿Hard cuenta como fallo en FSRS?

No. Hard registra que recordaste correctamente, aunque con mucha dificultad. Usa Again cuando no lograste dar la respuesta que pedía la tarjeta.

### ¿Qué ocurre si estuve a punto de acertar?

Comprueba qué pedía la tarjeta. Si falta un dato crucial, una condición, un signo o un elemento obligatorio de una lista, normalmente debes elegir Again. Usar otras palabras u omitir un detalle opcional todavía puede contar como acierto. Reescribe la tarjeta si el requisito no está claro.

### ¿Debo pulsar Again por un error tipográfico?

Solo si la tarjeta evaluaba la ortografía. Un error tipográfico puede hacerte fallar una tarjeta de ortografía y aun así contar como acierto en una tarjeta de conceptos. Valora la tarea escrita en el anverso.

### ¿Qué ocurre si adiviné la respuesta correcta?

Fíjate en qué te pide la tarjeta. Una respuesta correcta de una sola palabra puede contar como acierto aunque tuvieras dudas; esas dudas pueden convertirla en Hard. Si la tarjeta exige una explicación, un cálculo o una razón y te limitaste a una conjetura sin explicación, la respuesta está incompleta.

### ¿Debo elegir Hard cuando Good muestra un intervalo largo?

No. Valora lo que recordaste, no el intervalo que quieres. Cambia la configuración o tu plan de estudio si necesitas ajustar la programación.

### ¿Puedo usar solo Again y Good con FSRS?

Sí. Usar Again para los fallos y Good para los aciertos es una simplificación válida. Las cuatro valoraciones añaden detalles útiles cuando puedes aplicarlas de forma constante.

### ¿Sabe FSRS si mi respuesta era correcta en cuanto a los hechos?

No. FSRS programa a partir de la valoración y del historial de repasos. Tú aún tienes que comparar tu respuesta con el reverso guardado y, cuando importe acertar, comprobar la propia tarjeta con una fuente de confianza.

## La regla Again vs Hard en FSRS debería ser aburrida

El hábito más fiable para **Again vs Hard en FSRS** es agradablemente aburrido: primero el fallo, después el esfuerzo.

Elige Again cuando no lograste dar la respuesta que pedía la tarjeta. Si recordaste correctamente, usa Hard cuando te costó mucho, Good cuando requirió un esfuerzo normal y Easy cuando no te costó esfuerzo. Juzga las respuestas parciales según lo que evalúa la tarjeta, cuenta las pistas imprevistas como ayuda e ignora el intervalo al elegir.

Si cuatro valoraciones generan más debate que información, usa Again y Good. Si la misma tarjeta sigue recibiendo Again, revisa la tarjeta en vez de suavizar la valoración.

Una pulsación honesta da a FSRS una señal más limpia que diez segundos negociando con el planificador.
