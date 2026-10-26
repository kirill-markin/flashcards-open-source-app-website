---
title: "JavaScript Promise.all Practice: Order, Rejection, and Missing Returns"
description: "Predict Promise.all output with six runnable exercises. Check input order, asynchronous callbacks, rejection without cancellation, and missing async-map returns."
date: "2026-10-26"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/b523641d2d92ad227cab5d799d9f0d584b8f241cb4a64dc60d5536eec74262df.webp"
keywords:
  - "JavaScript Promise.all practice"
  - "Promise.all result order"
  - "Promise.all rejection"
  - "Promise.all does not cancel"
  - "Promise.all async map missing return"
---

The second promise finishes first, but its value still comes second in a successful `Promise.all` result. If it rejects instead, the combined promise can reject while the first input is still pending. Result order, promise state, and callback timing are separate things to track.

These six JavaScript `Promise.all` practice exercises cover those distinctions, passing functions without calling them, and a missing return inside `async` map. Predict each program's printed lines before checking the answer key. All six answers and the missing-return repair are on this page.

![Two walkers wait on a wooden footbridge as their third companion approaches along an autumn path](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/b523641d2d92ad227cab5d799d9f0d584b8f241cb4a64dc60d5536eec74262df.webp)

## Run each exercise in its own file

Save one snippet at a time as `exercise.mjs` and run `node exercise.mjs` with Node.js 24. The `.mjs` extension makes the file a JavaScript module, allowing the top-level `await` used here. The six recorded runs used **Node.js v24.22.1 on macOS on October 26, 2026**.

Several exercises use [`Promise.withResolvers()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers), which returns an object with `promise`, `resolve`, and `reject` properties. That lets the code control settlement directly. In these examples, calling `resolve` with a string fulfills the promise; calling `reject` rejects it with the supplied reason. No timer races or external requests affect the answers.

A promise starts **pending** and can become **fulfilled** or **rejected**. Both final states are called **settled**. For your predictions, track each input separately from the combined promise returned by `Promise.all`.

## Six exercises before the answers

Write every output line in order and answer the question below each program. Run each snippet in its own file: several reuse the same variable names.

### 1. Pass the function without parentheses

```javascript
let calls = 0;
async function readName() {
  calls += 1;
  return "Ada";
}
const values = await Promise.all([readName, readName]);
console.log(calls);
console.log(values[0] === readName);
console.log((await Promise.all([readName(), readName()])).join(","));
console.log(calls);
```

Which expression actually calls `readName`? What does the first result array contain?

### 2. Fulfill the inputs in reverse order

```javascript
const left = Promise.withResolvers();
const right = Promise.withResolvers();
const combined = Promise.all([left.promise, right.promise]);
right.resolve("R");
console.log("right settled");
left.resolve("L");
console.log((await combined).join(","));
```

After `right.resolve("R")`, can `combined` fulfill yet? Which value belongs at index zero?

### 3. Compare empty input with plain values

```javascript
console.log("start");
Promise.all([]).then(() => console.log("empty callback"));
Promise.all([1, 2]).then(() => console.log("values callback"));
console.log("end");
```

Does either callback run before `"end"`? Does an already-fulfilled promise imply a synchronous `.then()` callback?

### 4. Reject while another input is pending

```javascript
const left = Promise.withResolvers();
const right = Promise.withResolvers();
const combined = Promise.all([left.promise, right.promise]);
right.reject(new Error("right failed"));
try {
  await combined;
} catch (error) {
  console.log(error.message);
}
console.log("left still has work");
left.resolve("left finished");
console.log(await left.promise);
```

What is the state of `left.promise` when the catch block runs? Can it still fulfill afterward?

### 5. Collect both outcomes with allSettled

```javascript
const left = Promise.withResolvers();
const right = Promise.withResolvers();
const combined = Promise.allSettled([left.promise, right.promise]);
right.reject("R failed");
left.resolve("L");
console.log(JSON.stringify(await combined));
```

Which outcome comes first in the result? Does the rejected input make this `await combined` throw?

### 6. Find the missing return in async map

```javascript
const values = await Promise.all(
  [2, 3].map(async (number) => {
    number * 10;
  }),
);
console.log(values.length);
console.log(values[0] === undefined);
console.log(values[1] === undefined);
```

The multiplication runs. Does its result become the callback's return value? Identify the smallest repair that would make `values` contain `20` and `30`.

## Answer key

Each output block is the exact standard output recorded for the corresponding program. The explanations show which steps produce it.

### 1. Passing readName doesn't call it

```text
0
true
Ada,Ada
2
```

In `[readName, readName]`, both entries refer to the same function object. Here, that function is a plain input value: `Promise.all` doesn't call it. The first result array therefore contains the `readName` function twice. Its body hasn't run, so `calls` is `0` and `values[0] === readName` is `true`.

The parentheses in `[readName(), readName()]` call the function twice while JavaScript constructs the array, before that array reaches `Promise.all`. Each call increments `calls` and returns a promise fulfilled with `"Ada"`. Collecting those values gives `"Ada,Ada"`, and the final count is `2`. MDN's [`Promise.all` examples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all#using_promise.all_with_async_functions) cover this distinction between passing async functions and calling them.

When an expected operation never starts, check whether you passed its function or called it.

### 2. Result order follows input order

```text
right settled
L,R
```

`left.promise` occupies index zero and `right.promise` occupies index one. After `right.resolve("R")`, the right input is fulfilled, the left input is pending, and `combined` is still pending. One fulfillment isn't enough to produce the result array.

Once both inputs have fulfilled and `await combined` resumes, the result is `["L", "R"]`. **`Promise.all` result order follows input order.** The [ECMAScript algorithm](https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-performpromiseall) stores each input's index and places its fulfillment value at that position.

For this program, the useful state trace is:

| Point in the program | Left input | Right input | Combined promise |
| --- | --- | --- | --- |
| After `Promise.all(...)` | Pending | Pending | Pending |
| After `right.resolve("R")` | Pending | Fulfilled with `"R"` | Pending |
| After `await combined` resumes | Fulfilled with `"L"` | Fulfilled with `"R"` | Fulfilled with `["L", "R"]` |

The final row describes the point after `await` resumes. Calling `left.resolve("L")` fulfills the left input immediately in this example, but the queued promise reactions still have to collect that value and fulfill `combined`.

### 3. Already fulfilled doesn't mean a synchronous callback

```text
start
end
empty callback
values callback
```

`Promise.all([])` returns an already-fulfilled promise with the value `[]`. Attaching `.then()` schedules its callback to run later. It doesn't interrupt the current synchronous statements, so `"end"` prints before `"empty callback"`.

`Promise.all([1, 2])` takes an extra step. It treats the two numbers as fulfilled inputs, but its own returned promise is pending when the call returns. The queued input reactions must record both values before that combined promise fulfills and queues `"values callback"`. The empty-input callback is already queued ahead of those reactions, so it prints first.

Keep **promise state** separate from **callback execution**: the empty case is already fulfilled, while the nonempty case fulfills asynchronously; both `.then()` callbacks run asynchronously. These rules are documented in the [`Promise.all` return value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all#return_value) and [promise timing guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#timing). The queued promise callbacks run as microtasks. This exercise asks about their order, not elapsed time.

### 4. The combined rejection leaves the left input pending

```text
right failed
left still has work
left finished
```

`right.reject(...)` rejects the right input with an `Error`. Its rejection handler then rejects `combined` with the same reason. The `await` throws into the catch block, which prints `"right failed"`. At this point, `left.promise` is still pending: its resolver hasn't been called.

After the catch, execution prints `"left still has work"`, fulfills the left input, and awaits that input directly. That produces `"left finished"`. The later fulfillment can't change `combined`; it remains rejected.

**`Promise.all` does not cancel other operations when an input rejects.** Its rejection lets the caller handle a failure while another input may still be pending. To cancel an underlying operation, use that operation's cancellation API if it has one; see MDN's [promise cancellation guidance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#cancellation).

Here, the left input is only a manually controlled promise. The printed label `"left still has work"` doesn't represent a real request. The run demonstrates that this promise can fulfill after the combined rejection; it doesn't test network cancellation.

### 5. allSettled returns a record for each input

```text
[{"status":"fulfilled","value":"L"},{"status":"rejected","reason":"R failed"}]
```

`JSON.stringify` prints the whole array on one line.

The right input rejects first, but `Promise.allSettled` waits for both inputs to settle and keeps their input order. The left outcome comes first, with `status: "fulfilled"` and `value: "L"`. The right outcome has `status: "rejected"` and `reason: "R failed"`. The combined promise fulfills with these records, so this `await` doesn't throw. See the documented [`allSettled` outcome fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled#return_value).

Choose `Promise.all` when you need every input to succeed before using the combined result. Choose `Promise.allSettled` when you need a record of each success and failure. If an input never settles, `allSettled` keeps waiting.

### 6. The async callbacks fulfill with undefined

```text
2
true
true
```

The callback's braces form a block body. The statement `number * 10;` computes a number and discards it. Each callback reaches the end without returning a value, so its promise fulfills with `undefined`. `map` still creates two promises; `Promise.all` collects their values into `[undefined, undefined]`. That explains the length of `2` and both `true` lines.

The smallest repair is `return number * 10;` inside the existing block. You can also replace the callback with `async (number) => number * 10`, whose expression body returns the multiplication result. Those return rules are described in the [async function reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#description) and [arrow function body reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body).

With either repair, the predicted value of `values` is `[20, 30]`. This repair is reasoned from the return rules; the recorded run covers the original broken snippet. Switching to `Promise.allSettled` wouldn't fix the missing return: both callbacks already succeed with `undefined`.

## Keep a prompt for the rule you missed

After checking an answer, write a short question about the step you missed. “Explain promises” is too broad to check a specific mistake. These prompts work on paper or as flashcards:

| Prompt | Answer to recover |
| --- | --- |
| The second input fulfills first. Where does its value go in a successful `Promise.all` result? | At index one, matching its input position. |
| `Promise.all([])` is already fulfilled. Can its `.then()` callback interrupt the current synchronous statements? | No. The callback runs asynchronously. |
| `await Promise.all(...)` throws. What does that establish about another input that was pending? | It doesn't establish that the other input finished or was cancelled. Track that input separately. |
| An async map callback has `{ number * 10; }`. What value does its promise fulfill with? | `undefined`. The block needs `return number * 10;`, or an expression body. |

The [guide to making better flashcards](/blog/how-to-make-better-flashcards/) has more examples of narrowing a prompt. On a later attempt, hide the answers and change one detail: reverse the input array in exercise 2 or add the return in exercise 6. Write your new prediction before running it. For another exercise in following execution step by step, try [recursion tracing practice](/blog/recursion-tracing-practice/).

*This worksheet was developed with substantial AI assistance; the illustration is AI-generated. An AI coding agent ran the six complete exercise snippets in separate `.mjs` files using Node.js v24.22.1 on macOS on October 26, 2026. All six exited successfully with the output shown and no standard-error output. The explanations and proposed repairs use code tracing and the linked documentation. The runs covered these CLI examples; they didn't test the repairs, browser behavior, network cancellation, performance, or learning outcomes.*
