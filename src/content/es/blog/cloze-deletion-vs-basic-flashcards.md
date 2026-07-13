---
title: "Cloze deletion vs flashcards básicas: cuándo ayuda el contexto y cuándo revela la respuesta"
description: "Compara cloze deletion y flashcards básicas, descubre cuándo el contexto ayuda o revela la respuesta y aplica una regla práctica para crear tarjetas claras con FSRS."
date: "2026-07-13"
image: "/blog/cloze-deletion-vs-basic-flashcards.png"
keywords:
  - "cloze deletion vs flashcards básicas"
  - "tarjetas cloze de Anki"
  - "tarjetas básicas vs tarjetas cloze"
  - "flashcards para rellenar huecos"
  - "cuándo usar cloze deletion"
  - "diferencia entre cloze y tarjeta básica"
  - "flashcards cloze con IA"
  - "convertir tarjetas cloze en tarjetas básicas"
---

Dos tarjetas pueden evaluar el mismo dato y, aun así, hacer trabajar tu memoria de formas distintas:

- `El nodo sinoauricular está en la aurícula [...].`
- `¿En qué aurícula se encuentra el nodo sinoauricular?`

La versión cloze te pide completar una palabra que falta dentro de una oración. La tarjeta básica te pide recordar la relación a partir de una pregunta explícita. Al decidir entre **cloze deletion y flashcards básicas**, el contexto solo se justifica si acota lo que debes recordar sin revelar la respuesta.

Elige cloze cuando la oración visible forme parte de lo que necesitas aprender. Elige una tarjeta básica de anverso y reverso cuando necesites recordar el dato sin esa oración, cuando varias respuestas puedan encajar en el hueco o cuando la gramática revele demasiado. Ninguno de los dos formatos es siempre mejor.

![Escritorio cálido con una pieza ausente en una frase tipo cloze junto a una mano que da la vuelta a una tarjeta básica de anverso y reverso](/blog/cloze-deletion-vs-basic-flashcards.png)

## Cloze deletion vs flashcards básicas: la diferencia práctica

Una tarjeta cloze oculta parte de una oración y te pide completar el texto que falta. Anki, por ejemplo, convierte `Canberra se fundó en {{c1::1913}}` en una tarjeta que muestra el año como un hueco. Los distintos números de cloze pueden generar tarjetas separadas a partir de una sola nota, como explica la [documentación oficial de Anki sobre tarjetas cloze](https://docs.ankiweb.net/editing.html#cloze-deletion).

Una tarjeta básica guarda una pregunta explícita en el anverso y una respuesta en el reverso:

- Anverso: ¿En qué año se fundó Canberra?
- Reverso: 1913.

Una tarjeta cloze mantiene visible parte de la redacción original. Una tarjeta básica emplea una pista de recuperación explícita. Esa diferencia influye en cuánto contexto recibes, con qué facilidad puedes evaluar la respuesta y si la tarjeta funciona fuera del párrafo original.

| Si necesitas... | Empieza por | Por qué |
| --- | --- | --- |
| Recordar un término omitido dentro de una oración significativa | Cloze | La oración aporta contexto útil |
| Usar una palabra correctamente en un idioma o una expresión técnica | Cloze | El uso y la gramática pueden formar parte del objetivo |
| Recordar un dato sin la oración original | Básica | La pregunta se sostiene por sí sola |
| Explicar una causa, una distinción o un procedimiento | Básica | Una pregunta directa define la respuesta esperada |
| Evaluar con honestidad varias respuestas plausibles | Básica | La respuesta puede expresar una idea válida en vez de una palabra exacta |
| Redactar varias tarjetas pequeñas a partir de un texto original claro | Candidatas cloze y una revisión posterior | Ocultar texto es rápido, pero todas las pistas necesitan revisión |

La tabla es un punto de partida. Una pregunta básica vaga puede ser peor que una tarjeta cloze precisa, y un mismo dato puede merecer ambos formatos cuando ponen a prueba recuerdos realmente distintos. Los retoques meramente estéticos solo generan repasos duplicados.

## Usa cloze cuando el contexto sea parte de lo que quieres recordar

El contexto ayuda cuando se parece al entorno en el que usarás la respuesta. Quien aprende un idioma puede necesitar elegir una preposición dentro de una oración. Un estudiante de medicina puede tener que relacionar una estructura con su ubicación. Un desarrollador puede necesitar el término exacto de un comando o de una expresión propia de un protocolo.

Estas flashcards cloze conservan contexto útil:

- `She is responsible [...] preparing the monthly report.` → `for`
- `El nodo sinoauricular está en la aurícula [...].` → `derecha`
- `El código de estado HTTP [...] significa Not Found.` → `404`

Cada oración acota la tarea sin eliminarla. Las palabras que quedan visibles también reflejan un uso probable: completar una oración, recordar una relación anatómica o conectar un código de estado con su significado.

Las [Veinte reglas para formular el conocimiento](https://www.supermemo.com/en/blog/twenty-rules-of-formulating-knowledge) de SuperMemo presentan la eliminación cloze como una forma rápida de convertir material original que ya entiendes en tarjetas de repaso. La misma guía recomienda el principio de información mínima y una redacción breve y sin ambigüedades. Ocultar una sola palabra dentro de un párrafo de un libro de texto incumple ambos objetivos.

El contexto también puede evitar ambigüedades. `GRE` significa cosas distintas según el campo, así que una pista como `bioquímica: GRE` identifica el significado que se quiere recordar. El contexto útil identifica qué debes recordar; el excesivo completa la respuesta por ti.

## Comprueba que ninguna tarjeta cloze revele la respuesta

Que una tarjeta revele la respuesta es un fallo de diseño, no una propiedad inherente de las tarjetas cloze. Ocurre cuando la oración visible te permite completar un patrón sin recuperar de la memoria el conocimiento que querías aprender.

Presta atención a estas formas habituales de revelar la respuesta:

- La gramática revela la forma. `Estas células [...] oxígeno` puede dejar claro que la respuesta debe ser un verbo en plural aunque todavía no entiendas el concepto.
- Uno de los términos de una pareja queda visible. `El refuerzo positivo añade un estímulo; el refuerzo [...] elimina uno` hace que sea fácil adivinar `negativo` por contraste.
- Una parte de la palabra da una pista ortográfica. El manual de Anki muestra que ocultar solo una parte de `Canberra` puede dejar `C[...]` visible.
- Las unidades o etiquetas reducen demasiado las respuestas posibles. `La dosis es [...] mg` puede convertirse en un ejercicio de reconocer un número cuando la verdadera habilidad consiste en elegir la dosis adecuada para una situación.
- La redacción repetida de la fuente se convierte en una huella. Recuerdas qué oración procedía de qué diapositiva en vez del dato en sí.

Una prueba rápida detecta muchas de estas pistas: ¿alguien que no conoce el tema podría adivinar con bastante seguridad a partir de la gramática, los opuestos, la forma de la palabra o el orden del mazo? Si la respuesta es sí, reescribe la tarjeta.

Esta tarjeta es fácil por el motivo equivocado:

- Cloze: `La división parasimpática es lo contrario de la división [...].`
- Respuesta: `simpática`

Una versión básica puede evaluar la distinción útil:

- Anverso: ¿En qué se diferencian las divisiones simpática y parasimpática en cuanto a su efecto habitual sobre la frecuencia cardíaca?
- Reverso: La actividad simpática suele aumentarla; la parasimpática suele reducirla.

La tarjeta reescrita funciona fuera de la oración original y te da un criterio de evaluación claro.

## Elige tarjetas básicas para recordar sin la oración original y admitir respuestas flexibles

Las tarjetas básicas funcionan especialmente bien para causas, comparaciones, decisiones y procedimientos. Estos objetivos rara vez caben en una sola palabra omitida, y forzarlos dentro de una oración suele crear varias respuestas aceptables.

Compara estas versiones:

- Tarjeta cloze poco precisa: `Para un bien normal, la demanda [...] cuando aumentan los ingresos del consumidor.`
- Tarjeta básica, anverso: Para un bien normal, ¿qué ocurre con la demanda cuando aumentan los ingresos del consumidor?
- Tarjeta básica, reverso: La demanda aumenta, lo que desplaza la curva de demanda hacia la derecha.

`Aumenta`, `sube` y `crece` podrían completar la tarjeta cloze. La tarjeta básica te permite evaluar la idea en vez de ajustarte al verbo preferido por el autor.

Las tarjetas básicas también funcionan mejor cuando ya no tendrás a mano la redacción original. Una pregunta puede especificar la fórmula cuyas condiciones necesitas recordar o el procedimiento cuyo siguiente paso debes indicar.

Mantén el reverso breve. Divide una tarjeta cuando un solo anverso exija cuatro puntos independientes. La [guía para hacer mejores flashcards](/es/blog/how-to-make-better-flashcards/) profundiza en la claridad de las preguntas y el tamaño de las tarjetas, mientras que [qué debería ir en una flashcard](/es/blog/what-should-go-on-a-flashcard/) ayuda a decidir si el dato merece un repaso programado.

## Usa una regla de decisión de 30 segundos

Antes de guardar una tarjeta, define con exactitud qué quieres recordar. Después, responde a cinco preguntas:

1. ¿La oración que rodea el hueco se parece al contexto en el que usaré este conocimiento?
2. ¿El contexto visible deja una única respuesta esperada sin revelarla?
3. ¿Necesito recordar este dato sin la redacción original?
4. ¿Podrían dos personas que conocen el tema dar respuestas correctas distintas?
5. ¿Puedo evaluar la respuesta de forma rápida y coherente?

Elige cloze cuando respondas sí a las dos primeras y no a las dos siguientes. Elige una tarjeta básica cuando importe recordar el dato de forma independiente, cuando haya varias formulaciones válidas o cuando necesites una pregunta directa para delimitar la respuesta. Si la respuesta a la última pregunta es no, probablemente el problema sea el tamaño de la tarjeta, no el formato.

A menudo hay una tercera decisión mejor: no crear todavía la tarjeta. Deja en tus apuntes el material confuso, provisional o que no entiendes bien hasta que puedas expresar con claridad qué quieres recuperar de la memoria. Las reglas de SuperMemo anteponen la comprensión a la memorización por el mismo motivo.

La recuperación importa más que la etiqueta. En experimentos con pasajes en prosa, las pruebas repetidas produjeron una mejor retención posterior que estudiar el material varias veces, aunque volver a estudiarlo aumentó la confianza. El [resumen publicado sobre el efecto de las pruebas](https://www.psychologicalscience.org/journals/psychological-science/j.1467-9280.2006.01693.x/) no compara las tarjetas cloze con las básicas. Sí respalda la idea más general de que ambos formatos deben hacerte recuperar una respuesta en vez de limitarte a releerla.

## Pide a la IA dos propuestas, no un mazo terminado

Las flashcards cloze con IA se pueden redactar rápido porque un modelo puede copiar una oración y ocultar una expresión. Ese atajo también arrastra elementos innecesarios del original, pistas accidentales y afirmaciones sin respaldo. Pide ambos formatos para poder comparar las pistas de recuperación.

Proporciona al modelo el texto original y una tarea de edición bien delimitada:

```text
Usa solo la fuente proporcionada. Identifica datos que sean útiles para recordarlos más adelante.

Para cada dato:
1. Escribe una propuesta cloze con exactamente un [HUECO].
2. Escribe una propuesta básica con las etiquetas explícitas Anverso y Reverso.
3. Recomienda Cloze, Básica o Descartar y justifica la elección en una sola frase.
4. Indica la página, sección, marca de tiempo o frase breve que permite verificar la respuesta.

Reglas:
- Pon a prueba un solo dato o una sola decisión por propuesta.
- Conserva contexto suficiente para evitar ambigüedades, pero no reveles la respuesta.
- Conserva los matices, unidades y condiciones de la fuente.
- No añadas datos procedentes de conocimientos generales.
- Si la respuesta no se puede verificar en la fuente proporcionada, responde Descartar.
- Señala los casos con más de una respuesta razonable.

Fuente:
[pega el texto o adjunta el archivo]
```

Comprueba tú mismo el pasaje citado de la fuente. Elige la mejor propuesta, reescríbela en el idioma en el que vayas a repasarla y elimina la otra. La recomendación del modelo es una sugerencia editorial, no una prueba.

En un lote grande, revisa primero los números, las fechas, las excepciones, las negaciones, las afirmaciones médicas o jurídicas y todo lo que contenga `siempre` o `nunca`. La [guía para limpiar flashcards generadas con IA](/es/blog/how-to-fix-ai-flashcards/) cubre el proceso de verificación más amplio.

## Convierte con criterio el material cloze heredado

Puede que heredes material cloze útil de apuntes antiguos o de un mazo creado para otro sistema. Copiar el marcado en el anverso de una tarjeta básica no crea una funcionalidad cloze nativa. Extrae el dato que quieres recordar, conserva solo el contexto necesario y escribe una pregunta explícita.

- Cloze antigua: `La válvula {{c1::mitral}} se encuentra entre la {{c2::aurícula izquierda}} y el {{c3::ventrículo izquierdo}}.`
- Anverso: ¿Qué válvula se encuentra entre la aurícula izquierda y el ventrículo izquierdo?
- Reverso: La válvula mitral.

Esta nota contiene tres marcadores cloze, pero una sola tarjeta de anverso y reverso puede bastar. Crea tarjetas separadas sobre las cavidades solo cuando también necesites recordar esos datos.

Cuando una tarjeta cloze ponga a prueba el uso de una lengua en contexto, conserva la oración y haz explícita la tarea. Un anverso convencional puede decir `Completa la oración con la preposición correcta: She is responsible [...] preparing the report.`; el reverso contiene `for`. La oración sigue siendo útil sin depender de una sintaxis especial ni de la generación automática de tarjetas.

Los mazos heredados mezclan material útil con las pistas y prioridades de otra persona. [Cómo estudiar un mazo de Anki ya preparado](/es/blog/how-to-study-a-premade-anki-deck/) explica por qué editar y borrar forman parte del proceso de adopción.

## FSRS programa los repasos; la calidad de las tarjetas sigue en tus manos

Cuando una tarjeta ya está clara, FSRS se encarga de decidir cuándo debe volver a aparecer. El proyecto de código abierto FSRS modela la memoria mediante la dificultad, la estabilidad y la recuperabilidad; su [repositorio oficial](https://github.com/open-spaced-repetition/free-spaced-repetition-scheduler) describe el modelo e incluye enlaces a distintas implementaciones.

FSRS no puede detectar que una tarjeta cloze revela la respuesta o que un anverso básico admite tres respuestas distintas. Cuando marcas como correcta una tarjeta fácil de adivinar, el planificador recibe un repaso satisfactorio. No puede saber si recuperaste el dato buscado o completaste una oración conocida.

Audita un lote pequeño antes de que se acumulen los repasos:

- Un objetivo de recuperación por tarjeta.
- Contexto suficiente para identificar el objetivo, pero ninguna pista que delate la forma de la respuesta.
- Una respuesta justificable o una regla de evaluación clara.
- Todos los datos comprobados con su fuente.
- Sin versiones cloze y básicas duplicadas que pongan a prueba lo mismo.
- Un anverso que tenga sentido sin la página original.

Dudar repetidamente durante el repaso aporta información útil. Reescribe una tarjeta si piensas una y otra vez `Conocía la idea, pero no la palabra exacta`, o si el patrón de la oración te da la respuesta antes de que recuperes el dato de la memoria. [Active recall y repetición espaciada](/es/blog/active-recall-vs-spaced-repetition/) explica en qué se diferencian la recuperación y la programación, y la [guía de configuración de FSRS](/es/blog/fsrs-settings/) cubre los ajustes de los intervalos una vez que las tarjetas están bien redactadas.

## Cómo aborda Flashcards Open Source App esta elección

Las [funcionalidades de Flashcards Open Source App](/es/features/) usan el formato explícito de anverso y reverso. La app no ofrece sintaxis cloze nativa, renderizado cloze ni generación automática de notas cloze. Si partes de material cloze, convierte el dato que quieres recordar en una pregunta de anverso y reverso como se muestra arriba.

Para redactar con ayuda de la IA, puedes partir de un chat o adjuntar un archivo y obtener propuestas de tarjetas de anverso y reverso que después podrás revisar y editar. Comprueba cada dato con su fuente. Durante el repaso, evalúas las tarjetas con Again, Hard, Good o Easy, y FSRS usa ese historial para elegir los próximos intervalos; no corrige la redacción.

Al comparar **cloze deletion y flashcards básicas**, elige una tarjeta cloze cuando tu herramienta lo admita y la oración visible cree la pista de recuperación adecuada. Elige una pregunta básica cuando necesites recordar sin contexto, aceptar formulaciones flexibles o guardar el contenido en un formato explícito de anverso y reverso. El contexto justo hace más precisa la recuperación. Demasiado contexto convierte el repaso en un juego de adivinanzas.
