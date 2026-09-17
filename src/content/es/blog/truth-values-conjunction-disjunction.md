---
title: "Valores de verdad de la conjunción y la disyunción: tabla y ejemplos resueltos"
description: "Aprende a determinar el valor de verdad de la conjunción, la disyunción y la negación con una tabla, el ejemplo del número 4, ejercicios resueltos y tarjetas."
date: "2026-09-17"
image: "/blog/truth-values-conjunction-disjunction.png"
keywords:
  - "valor de verdad de la conjunción"
  - "disyunción lógica"
  - "tabla de verdad"
  - "negación de una proposición"
  - "conjunción y disyunción en lógica"
---

«El número 4 es par y mayor que 10» es una proposición falsa, aunque su primera parte sea verdadera. **Una conjunción solo es verdadera cuando las dos proposiciones que la componen son verdaderas.** Sustituye «y» por «o» en el mismo ejemplo y la proposición pasa a ser verdadera: en la disyunción inclusiva basta con que al menos una de las dos partes sea verdadera. Los números no han cambiado, pero el conector sí ha cambiado el resultado.

Para resolver este tipo de ejercicios, determina el valor de cada parte y después aplica la regla del conector. Que una frase contenga un dato verdadero no basta para decidir si toda la frase es verdadera.

![Primer plano de una fiambrera antigua con dos cierres: uno está abierto y el otro sigue cerrado; para abrirla hay que abrir los dos](/blog/truth-values-conjunction-disjunction.png)

## Empieza por las dos proposiciones simples

Aquí, una proposición lógica es un enunciado que podemos calificar de verdadero o falso. Por ejemplo, la proposición «el número 4 es par» es verdadera, porque 4 es divisible entre 2 sin dejar resto. En cambio, «el número 4 es mayor que 10» es falsa.

Llamemos `p` a la primera y `q` a la segunda. Estos símbolos abrevian los enunciados sin cambiar su significado. Escribimos el valor de cada proposición junto a su símbolo:

- `p`: el número 4 es par — verdadero.
- `q`: el número 4 es mayor que 10 — falso.

Ten cuidado si el ejercicio incluye una variable. No podemos decidir si «el número `x` es mayor que 10» es verdadero o falso sin conocer el valor de `x` o unas condiciones que permitan determinarlo. En nuestros ejemplos usaremos números concretos para centrarnos en el conector lógico.

## Tabla de verdad de la conjunción, la disyunción y la negación

La conjunción, cuyo símbolo es `∧`, significa «y»: las dos proposiciones deben ser verdaderas. La disyunción inclusiva, cuyo símbolo es `∨`, significa «o»: basta con que una sea verdadera, y también incluye el caso en que ambas lo son. La negación, cuyo símbolo es `¬`, invierte el valor de la proposición. Estas reglas se explican en la [lección de OpenStax sobre la construcción de tablas de verdad](https://openstax.org/books/contemporary-mathematics/pages/2-3-constructing-truth-tables).

| `p` | `q` | Conjunción `p ∧ q` | Disyunción `p ∨ q` | Negación `¬p` |
| --- | --- | --- | --- | --- |
| Verdadero | Verdadero | Verdadero | Verdadero | Falso |
| Verdadero | Falso | Falso | Verdadero | Falso |
| Falso | Verdadero | Falso | Verdadero | Verdadero |
| Falso | Falso | Falso | Falso | Verdadero |

Lee la tabla por filas. Primero elige la fila que corresponde a los valores de `p` y `q`; después busca la columna de la operación que necesitas. La última columna solo depende de `p`, por eso su negación no cambia cuando cambia `q`.

Para recordarlo: la conjunción solo tiene un caso verdadero y la disyunción inclusiva solo tiene un caso falso. Si entiendes qué condición hace verdadera cada operación, no necesitas memorizar cuatro frases distintas para cada una.

## El ejemplo del número 4, paso a paso

Hay que determinar el valor de verdad de «el número 4 es par y mayor que 10».

1. Separa la frase por el conector «y»: «4 es par» y «4 es mayor que 10».
2. Evalúa cada parte: la primera es verdadera y la segunda es falsa.
3. Identifica la operación: «y» indica una conjunción, `p ∧ q`.
4. Aplica la regla: la conjunción de verdadero y falso da falso, porque las dos condiciones no se cumplen a la vez.

La respuesta completa es: **la proposición es falsa porque 4 no es mayor que 10 y la conjunción exige que ambas partes sean verdaderas.** Escribe el motivo junto a la respuesta para dejar claro qué parte hace falsa la conjunción.

Ahora usa las mismas dos partes con otras operaciones:

| Proposición | Valor | Motivo |
| --- | --- | --- |
| 4 es par o mayor que 10 | Verdadero | La primera parte es verdadera, y eso basta para la disyunción inclusiva |
| 4 no es mayor que 10 | Verdadero | Niega la proposición falsa «4 es mayor que 10» |
| 4 es par y no es mayor que 10 | Verdadero | Las dos partes son verdaderas |

Si has escrito «la conjunción es verdadera porque 4 es par», solo has comprobado una parte. Vuelve a la segunda y comprueba si ambas condiciones se cumplen a la vez. Esta corrección sigue siendo útil cuando cambian los números o el orden de las proposiciones.

## La disyunción también es verdadera cuando ambas partes lo son

En esta explicación usamos la **disyunción inclusiva**. Por ejemplo, la proposición «el número 12 es par o divisible entre 3» es verdadera. Las dos partes son verdaderas, y que lo sean a la vez no hace falsa la disyunción.

En una conversación cotidiana, «o» puede indicar que solo puedes elegir una opción, como en una oferta que permite escoger una bebida. Por eso no trasladamos automáticamente ese sentido al símbolo `∨`. Si el ejercicio exige «solo una de las dos proposiciones, pero no ambas», describe una disyunción exclusiva: es verdadera cuando exactamente una proposición es verdadera, y falsa cuando ambas son verdaderas o ambas son falsas. La [lección de OpenStax sobre proposiciones compuestas](https://openstax.org/books/contemporary-mathematics/pages/2-2-compound-statements) explica esta diferencia entre los usos de «o».

## Fíjate en dónde está la negación

La negación de «el número 4 es mayor que 10» es «el número 4 no es mayor que 10». Para los números reales, la negación de `x > 10` es `x ≤ 10`: la igualdad también queda incluida en la negación.

Para negar una proposición compuesta hay que prestar atención a los paréntesis. Con los valores del primer ejemplo, `p` es verdadera y `q` es falsa:

- `¬(p ∧ q)` es verdadera: primero calculamos la conjunción, que da falso, y después negamos el resultado.
- `(¬p) ∧ q` es falsa: primero negamos `p`, con lo que obtenemos falso, y después evaluamos su conjunción con `q`, que también es falsa.

En `¬(p ∧ q)`, la negación afecta a todo lo que hay dentro de los paréntesis; por eso calculamos el valor de la conjunción antes de negarlo. En `(¬p) ∧ q`, la negación solo afecta a `p`. Su posición forma parte del ejercicio y puede cambiar la respuesta, como ocurre aquí.

## Inténtalo antes de leer las respuestas

Escribe el valor de verdad y un motivo breve para cada pregunta. Compara especialmente las dos primeras: las proposiciones simples son las mismas y solo cambia el conector.

1. «El número 9 es impar y menor que 5».
2. «El número 9 es impar o menor que 5».
3. «El número 8 es impar o mayor que 20».
4. «El número 15 no es múltiplo de 5».
5. Si `p` es falsa y `q` es verdadera, ¿cuál es el valor de `p ∨ (¬q)`?
6. «El número 18 es par o múltiplo de 3». Determina el valor de la proposición y explica qué ocurre cuando ambas partes son verdaderas.

### Respuestas explicadas

1. **Falso.** El número 9 sí es impar, pero no es menor que 5. La conjunción de verdadero y falso da falso.
2. **Verdadero.** Los valores de las dos partes no han cambiado, pero para la disyunción inclusiva basta con la parte verdadera: «9 es impar».
3. **Falso.** El número 8 no es impar ni mayor que 20. Este es el único caso falso de la disyunción inclusiva: ambas partes son falsas.
4. **Falso.** El número 15 es múltiplo de 5 porque `15 = 3 × 5`. La proposición «15 es múltiplo de 5» es verdadera, así que su negación es falsa.
5. **Falso.** Como `q` es verdadera, `¬q` es falsa. La operación se convierte en una disyunción entre dos proposiciones falsas.
6. **Verdadero.** El número 18 es par y múltiplo de 3. Que ambas partes sean verdaderas hace verdadera la disyunción inclusiva: no exige que solo una de ellas sea verdadera.

## Convierte tu error en una tarjeta

Elige una tarjeta que te ayude a corregir la causa del error. Si has confundido los dos conectores, usa los mismos valores y cambia la operación de la pregunta. Si te has equivocado con la negación, deja clara su posición en el anverso de la tarjeta.

| Anverso | Reverso |
| --- | --- |
| `p` es verdadera y `q` es falsa. ¿Cuál es el valor de `p ∧ q`? ¿Por qué? | Falso; la conjunción exige que ambas proposiciones sean verdaderas |
| `p` es verdadera y `q` es falsa. ¿Cuál es el valor de `p ∨ q`? | Verdadero; hay al menos una proposición verdadera |
| ¿Cuál es la negación de `x > 10` para los números reales? | `x ≤ 10`; la negación incluye la igualdad |
| `p` es falsa y `q` es verdadera. Calcula `p ∨ (¬q)` | Falso; la negación de `q` es falsa y la disyunción de falso y falso da falso |

Responde antes de dar la vuelta a la tarjeta y después resuelve en papel un ejemplo con otros números. Puedes usar tarjetas de papel o tarjetas con anverso y reverso en la aplicación; la [guía de inicio](/es/docs/getting-started/) explica cómo empezar. Para ampliar este método, lee [cómo usar tarjetas para estudiar matemáticas](/es/blog/how-to-use-flashcards-for-math/) y [cómo escribir tarjetas más claras](/es/blog/how-to-make-better-flashcards/).
