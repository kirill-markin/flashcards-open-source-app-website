---
title: "¿Cada cuánto debes repasar flashcards? Deja que FSRS fije el calendario"
description: "Consulta a diario las tarjetas pendientes, no todas. Descubre cómo FSRS adapta los intervalos a lo que recuerdas, la retención deseada y una carga sostenible."
date: "2026-07-19"
image: "/blog/how-often-should-you-review-flashcards.png"
keywords:
  - "cada cuánto repasar flashcards"
  - "debo repasar flashcards todos los días"
  - "mejor calendario de repaso de flashcards"
  - "calendario de repetición espaciada"
  - "calendario 1 3 7 de flashcards"
  - "calendario de repaso FSRS"
  - "cuándo repasar flashcards"
  - "repasos diarios de flashcards"
  - "intervalos de repaso de flashcards"
---

El lunes por la mañana, a las 7:40, abres un mazo de 600 tarjetas antes de trabajar y encuentras 23 pendientes. **¿Cada cuánto debes repasar flashcards?** Siempre que sea posible, consulta a diario la cola de tarjetas pendientes, pero no repases todas las tarjetas todos los días. Repasa las 23 que tocan y para. Deja que el intervalo siguiente de cada tarjeta se alargue o se acorte según lo bien que la hayas recordado de verdad.

![Una persona consulta la cola diaria de tarjetas pendientes de FSRS para saber cada cuánto repasar flashcards](/blog/how-often-should-you-review-flashcards.png)

Esa pequeña distinción elimina casi toda la confusión. «A diario» describe el hábito de consultar la cola. No significa que todas las tarjetas deban aparecer en todas las sesiones.

## ¿Debo repasar flashcards todos los días?

Consultar la cola a diario resulta útil porque asigna a las tarjetas pendientes un lugar predecible en tu rutina. Aun así, cada tarjeta sigue su propio calendario.

En un día normal:

- abre la cola de pendientes
- repasa las tarjetas que tocan
- añade tarjetas nuevas solo si caben en tu plan
- deja en paz las tarjetas programadas para más adelante
- cierra la aplicación cuando la cola esté vacía

Algunos días, todo te llevará apenas lo que dura una breve pausa para el café. Otros serán más pesados porque hace poco añadiste material o porque varias tarjetas difíciles han vuelto a la vez. El objetivo es crear una rutina que puedas retomar mañana, no completar una sesión heroica que te haga evitar el mazo durante tres días.

Si no puedes repasar a diario, elige la mayor frecuencia que puedas mantener. Repasar de lunes a viernes, por ejemplo, sigue dando al planificador datos reales sobre lo que recuerdas. Después del fin de semana tendrás más tarjetas atrasadas y algunos intervalos serán menos regulares, pero el sistema no habrá dejado de servir. Un hábito fiable de cinco días supera a un plan teórico de siete días que abandonas una y otra vez.

## Por qué el calendario 1-3-7 de flashcards no es universal

La pauta `1-3-7-14` es fácil de recordar: repasa al cabo de un día y después a los tres, siete y catorce días. Puede ser un punto de partida manual razonable cuando solo cuentas con tarjetas de papel y un calendario. No es un calendario universal para la memoria.

Piensa en dos tarjetas presentadas a la vez. Una pregunta por una palabra española que ya te resulta familiar y recuerdas de inmediato. La otra te pide distinguir entre dos rutas bioquímicas parecidas y la fallas dos veces. Asignar a ambas las mismas cuatro fechas siguientes ignora la evidencia que acabas de aportar.

También importa la fecha en la que necesitarás esos conocimientos. En un experimento de 2008 con más de 1.350 participantes, el intervalo entre sesiones asociado al mejor resultado en la prueba cambiaba según el tiempo que faltaba para la prueba final. Los plazos de retención más largos exigían intervalos distintos; el estudio no descubrió un calendario válido para cualquier objetivo ([Cepeda et al., 2008](https://escholarship.org/uc/item/0kp5q19x)).

Por eso, conviene tratar un **calendario 1-3-7 de flashcards** como una regla inicial para un sistema manual. El software puede tomar una decisión más específica para cada tarjeta sin obligarte a mantener cientos de fechas.

## Cómo fija FSRS el siguiente intervalo de repaso

FSRS es un planificador de repetición espaciada. Después de un repaso, actualiza un modelo del estado de memoria de esa tarjeta y calcula el siguiente intervalo. Tú aportas la señal útil: intentas responder antes de mostrar el reverso y después eliges Again, Hard, Good o Easy con honestidad.

En Flashcards Open Source App, el planificador actual es FSRS-6 y la retención deseada predeterminada es `0.90`. Los intervalos a largo plazo se calculan a partir de la estabilidad actual de la tarjeta, los días naturales transcurridos desde el último repaso, la retención deseada, el intervalo máximo y una variación determinista. Las tarjetas nuevas y las que has fallado también pueden pasar por pasos breves de aprendizaje o reaprendizaje antes de entrar o volver al repaso a largo plazo. Estos son datos específicos del producto documentados en el [documento público de referencia sobre la programación con FSRS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

Dicho sin tecnicismos:

- recordar algo bien y sin tropiezos puede justificar un intervalo más largo
- un acierto difícil suele ampliar menos el intervalo
- una tarjeta madura que fallas pasa por el reaprendizaje, mientras que una tarjeta nueva que fallas permanece en aprendizaje
- el historial de varios repasos aporta al planificador más información que un único calendario genérico

FSRS no examina tus pensamientos ni comprueba si la respuesta es correcta. Recibe la valoración que tú envías. Tampoco conoce el instante exacto en el que, de otro modo, olvidarías un dato. El intervalo es una decisión del planificador basada en un modelo y orientada a un objetivo de retención, no una promesa sobre lo que hará tu cerebro a las 15:15 del próximo jueves.

Si te cuesta distinguir Again de Hard, consulta la guía completa sobre [Again, Hard, Good y Easy](/blog/again-vs-hard-fsrs-flashcards/). Elegir el intervalo más conveniente en lugar de la valoración sincera envía una señal falsa al planificador.

## Cada tarjeta debe avanzar a una velocidad distinta

Resulta más fácil confiar en un calendario adaptativo cuando ves las tarjetas como historiales independientes y no como partes de un único plan para todo el mazo.

| Lo que ocurrió durante el repaso | Señal sincera | Dirección probable del intervalo |
| --- | --- | --- |
| Recordaste una palabra corriente de inmediato y con seguridad | Easy | Amplía más el intervalo |
| Deduciste la fórmula correcta con un esfuerzo normal | Good | Mantén el crecimiento normal del intervalo |
| Distinguiste correctamente dos conceptos parecidos tras un esfuerzo considerable | Hard | Usa un intervalo de acierto más prudente |
| No recordaste el nombre hasta que mostraste el reverso | Again | Registra el fallo y pasa antes por el reaprendizaje |

Son orientaciones, no números concretos de días garantizados. La misma valoración Good puede producir intervalos distintos en dos tarjetas porque su estabilidad, el tiempo transcurrido y los repasos anteriores no son iguales.

El diseño de la tarjeta también importa. Un enunciado vago que pide cinco datos a la vez producirá valoraciones confusas por muy inteligente que sea el planificador. Divide las tarjetas sobrecargadas, elimina los detalles de poco valor y deja claro qué respuesta exiges. FSRS programa la tarjeta que creaste; no puede reescribirla en silencio para convertirla en una mejor.

## Cómo es el hábito diario de consultar la cola de pendientes

Vincula el repaso a una señal que ya exista: el primer café, un trayecto en tren, la comida o el momento en que abres el portátil. La hora exacta importa menos que convertir la consulta en algo predecible.

Una sesión útil tiene cinco partes:

1. Empieza por los repasos pendientes antes de pasar a un lote de tarjetas nuevas.
2. Lee el anverso e intenta recordar de verdad la respuesta.
3. Muestra el reverso solo después de haber formulado una respuesta.
4. Valora el intento, no el intervalo que te gustaría recibir.
5. Para cuando la cola de pendientes esté vacía.

Ese cuarto paso decide si el calendario conserva información útil o se convierte en puro teatro. Pulsar Hard después de fallar porque Again hace volver la tarjeta demasiado pronto registra un acierto que no ocurrió. Pulsar Easy para quitarte de encima una tarjeta molesta causa el mismo daño en la dirección contraria.

Tampoco necesitas ir con prisas. Un repaso tranquilo y concentrado suele ser más rápido que comprobar dos veces cada respuesta y negociar con cada botón. Si la cola suele ocupar más tiempo del que tienes, la [guía para repasar flashcards más rápido](/blog/how-to-review-flashcards-faster/) explica con más detalle cómo limpiar las tarjetas y reducir la fricción de la sesión.

El repaso debe usar recuperación activa. Leer el anverso y pensar «sí, esto me lo sé» es reconocimiento, no un intento de recuperar la respuesta. La diferencia entre el planificador y el trabajo mental se explica en [recuperación activa frente a repetición espaciada](/blog/active-recall-vs-spaced-repetition/).

## ¿Qué debes hacer cuando no hay nada pendiente?

Puedes dar la sesión por terminada.

Una cola vacía significa que el planificador no tiene ningún repaso pendiente en ese momento. No necesitas recorrer las tarjetas programadas para más adelante solo para que la sesión parezca lo bastante seria. Adelantarlas una y otra vez consume tiempo en intentos de recuperación más tempranos y, a menudo, más fáciles, además de sustituir parte del calendario adaptativo por repeticiones extra que tú mismo has elegido.

Si todavía tienes tiempo para estudiar, úsalo con una intención clara:

- aprende el material de partida antes de convertirlo en tarjetas
- edita una tarjeta confusa que hayas detectado antes
- añade un pequeño lote planificado de tarjetas nuevas
- practica cómo aplicar los conocimientos en problemas, conversaciones o textos
- para y dedica el tiempo a otra cosa

Hay razones válidas para estudiar más allá de la cola de pendientes. Un examen puede exigir práctica específica. Si mañana tienes una presentación, ensayar puede estar justificado. También puedes querer una sesión corta de aprendizaje con tarjetas nuevas. Llama a esa actividad por su nombre, sin hacer pasar cada repaso extra por una exigencia de la repetición espaciada.

## Los días sin repasar y la acumulación de tarjetas cambian la carga de trabajo

Una fecha de repaso no es una fecha de caducidad. Si te saltas el martes, abre el mazo el miércoles y repasa todo lo atrasado. Para las tarjetas atrasadas en repaso a largo plazo, la siguiente actualización de FSRS utiliza los días naturales adicionales transcurridos y tu nueva valoración. Las tarjetas en aprendizaje y reaprendizaje siguen su ruta a corto plazo aunque las respondas más tarde, y la siguiente fecha de repaso se calcula a partir del momento en que realmente las repasas. Este comportamiento se documenta en la [especificación del planificador](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

Saltarte un solo día casi nunca exige un plan de rescate especial. Repasa las tarjetas pendientes, valóralas con normalidad y continúa. No reinicies el mazo ni marques tarjetas como Easy solo para hacer que el número baje más rápido.

Una gran acumulación exige otro plan de carga de trabajo:

- pausa la incorporación de tarjetas nuevas para que la cola deje de recibir más trabajo
- elige una cantidad diaria que puedas mantener
- avanza por la cola de pendientes que presenta la aplicación
- reescribe o elimina las tarjetas que no hacen más que hacerte perder tiempo
- mantén valoraciones sinceras aunque el progreso parezca lento

El planificador puede adaptarse después de repasos hechos con retraso, pero no puede hacer que una hora de repasos atrasados quepa en diez minutos. Tampoco puede garantizar que todas las tarjetas olvidadas se recuperen en el mismo plazo. Si varios días sin repasar se han convertido en un muro de repasos, usa el [plan específico para ponerte al día con tus flashcards](/blog/how-to-catch-up-on-flashcards-after-falling-behind/) en lugar de intentar acabar con todo en una noche.

## La fecha de un examen cambia la planificación

La repetición espaciada a largo plazo da por hecho que habrá un después. Un examen impone una fecha límite al mazo.

Planifica hacia atrás desde el día de la prueba. Introduce las tarjetas importantes con antelación suficiente para crear un historial de repasos útil, reduce o detén la entrada de tarjetas nuevas antes de los últimos días y sigue completando los repasos pendientes. Cuando se acerque el examen, añade práctica específica para los temas débiles y para cualquier material que la cola normal no vaya a mostrarte de nuevo antes de la prueba.

Esa práctica adicional es un repaso intensivo motivado por la fecha límite que se añade al calendario normal. Puede tener todo el sentido. Mantenla separada de la manipulación de valoraciones: una respuesta fallida sigue siendo Again aunque no te guste el intervalo corto, y una respuesta fácil no se convierte en Hard porque quieras volver a verla mañana.

La retención deseada también puede afectar a la carga de trabajo, pero cambiar un ajuste a última hora no es una máquina del tiempo. Según el [contrato de ajustes con efecto solo hacia delante de Flashcards](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md), los cambios en la configuración del espacio de trabajo solo afectan a repasos futuros; cambiar la retención deseada no recalcula las fechas ya programadas. La [guía completa para planificar un examen con FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) explica las fases de entrada, estabilización y repaso final sin convertir este artículo en una segunda guía para exámenes.

## Las flashcards de papel necesitan un equivalente manual

Las tarjetas de papel no pueden calcular un estado de memoria ni cambiar discretamente sus propias fechas. Tú tienes que crear la cola.

Un sistema sencillo de cajas basta:

- guarda las tarjetas nuevas y las que hayas fallado en una caja de repaso frecuente
- pasa las tarjetas acertadas a cajas que se repasen cada vez con menos frecuencia
- acerca una tarjeta cuando no consigas recordarla
- aléjala después de recordarla bien varias veces
- anota la próxima fecha de repaso en un separador o un calendario

Aquí es donde una pauta fija como 1-3-7-14 puede resultar práctica. Úsala para fijar los intervalos iniciales de tus cajas y después corrige el rumbo cuando los resultados no encajen. Una tarjeta difícil puede volver antes. Una estable puede alejarse más. Repasar cada noche toda la pila de tarjetas de papel no aporta nada.

El papel tiene cualidades útiles: no exige dispositivo ni cuenta y permite dibujar con facilidad. A cambio, añade trabajo administrativo. Debes llevar la cuenta de las fechas omitidas, decidir qué pila toca y aplicar siempre la misma regla para mover las tarjetas. Una aplicación se gana su sitio al encargarse de esa administración, no porque cambie la tarea básica de recuperar una respuesta.

## La retención deseada y las tarjetas nuevas dan forma al calendario

El **mejor calendario de repaso de flashcards** depende en parte de cuánta carga quieras asumir. La retención deseada indica a un planificador FSRS con qué probabilidad quieres recordar una tarjeta cuando llegue su fecha de repaso. Un objetivo más alto suele producir intervalos más cortos y más repasos, como explica el [manual oficial de Anki sobre FSRS](https://docs.ankiweb.net/deck-options.html#fsrs).

El manual señala que `0.90` es el valor predeterminado de Anki y advierte que la carga aumenta con rapidez cuando la retención deseada se acerca a `1.0`. Es un contexto general útil sobre FSRS, no una afirmación de que todas las opciones de Anki existan en Flashcards. Para consultar los valores predeterminados y los límites de este producto, usa el [documento del planificador de Flashcards](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

Un objetivo de `0.90` no significa «repasa cada tarjeta cada diez días» ni garantiza que aciertes exactamente el 90 % de las tarjetas en cada sesión corta. Orienta el cálculo del intervalo a partir de la estimación actual del estado de memoria de cada tarjeta.

Antes de subir la retención porque el calendario te parece demasiado relajado, comprueba el resto del sistema:

- ¿Tu semana habitual puede soportar más repasos?
- ¿Estás añadiendo tarjetas más rápido de lo que puedes mantenerlas?
- ¿Los fallos se deben al espaciado o a tarjetas poco claras y una comprensión insuficiente?
- ¿El objetivo más alto es temporal para un examen o permanente?

La [guía de configuración de FSRS](/blog/fsrs-settings/) profundiza en ese equilibrio. Si el volumen de repasos ya está creciendo, ajusta primero la entrada con un [límite sostenible de tarjetas nuevas al día](/blog/how-many-new-flashcards-per-day/).

## Lo que la investigación puede y no puede decirte

La investigación ofrece razones sólidas para espaciar los intentos de recuperación, pero no proporciona a cada estudiante una secuencia perfecta de fechas.

[Cepeda y sus colaboradores](https://escholarship.org/uc/item/0kp5q19x) mostraron que el intervalo útil cambiaba según el plazo de retención previsto. Su experimento incluía aprender una serie de datos, repasarlos una sola vez más y hacer una prueba final; respalda adaptar el espaciado al horizonte temporal, no tratar `1-3-7-14` como una ley universal. No puso a prueba FSRS-6 ni esta aplicación.

Una revisión sistemática de 2026 sobre educación médica incluyó 14 estudios; el metaanálisis abarcó 13 estudios y 21.415 estudiantes. El resultado conjunto favoreció la repetición espaciada frente al estudio convencional en pruebas objetivas, pero las intervenciones eran diversas: flashcards, preguntas de opción múltiple enviadas por correo electrónico y cuestionarios en el aula. Los autores pidieron de forma explícita más investigación sobre el diseño de las intervenciones y los resultados a largo plazo ([Maye & Hurley, 2026](https://doi.org/10.1111/tct.70353)).

Ese límite importa. La revisión respalda la repetición espaciada en contextos de educación médica. No establece un único intervalo óptimo, no demuestra que todas las aplicaciones de flashcards produzcan el mismo resultado ni indica que la programación pueda rescatar tarjetas inexactas y repasos hechos sin atención.

Usa la evidencia para tomar la decisión general: distribuye en el tiempo intentos reales de recuperación. Para el calendario concreto, usa el historial de tus tarjetas, tu objetivo y la carga de trabajo disponible.

## Deja que la cola de pendientes siga siendo agradablemente aburrida

La respuesta a **cada cuánto debes repasar flashcards** es lo bastante sencilla como para sobrevivir a una semana ajetreada: consulta a diario la cola de pendientes siempre que puedas, repasa lo que toque y deja en paz el resto del mazo.

Deja que las tarjetas fáciles y estables se alejen. Deja que las difíciles vuelvan con más cautela. Registra los fallos con honestidad. Cuando no haya nada pendiente, para o haz una actividad de aprendizaje claramente separada. Cuando la vida interrumpa la rutina, vuelve a la cola de tarjetas atrasadas sin reiniciar tu historial.

FSRS se ocupa de las fechas; tú, de recordar. Si quieres ese calendario sin mantener uno en papel, consulta las [funcionalidades de Flashcards](/features/) y la [guía para empezar](/docs/getting-started/). La rutina útil no es complicada: abre, intenta recordar, valora, cierra y vuelve mañana.
