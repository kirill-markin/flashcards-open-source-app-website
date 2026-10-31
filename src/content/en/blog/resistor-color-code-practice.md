---
title: "Resistor Color Code Practice: 4 Bands, 5 Bands, and Tolerance"
description: "Practice four- and five-band resistor codes, fractional multipliers, and tolerance ranges. Includes worked examples and ten questions with explained answers."
date: "2026-10-31"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/5433c096e311344b3557a80a1f79e6121031c357db34845c87fe5f58b0dd8760.webp"
keywords:
  - "resistor color code practice"
  - "4 band resistor practice"
  - "5 band resistor color code"
  - "resistor tolerance range"
  - "resistor color code worksheet"
---

Yellow–violet–red–gold and yellow–violet–black–brown–brown both encode 4.7 kΩ. Their tolerance ranges differ: the first specifies ±5%, the second ±1%. The **nominal value** is the labeled resistance, rather than an exact measurement. Counting bands changes how you read the digits; the final band gives the tolerance around that nominal value.

This resistor color code practice covers conventional four- and five-band codes with a final tolerance band. Work through three examples, then try ten original questions with explained answers. Every sequence uses written color names, so you can solve the worksheet without distinguishing colors in a picture. Six-band codes and special manufacturer markings are outside this lesson's scope.

![A textile restorer examines woven trim with matching brown end bands and a different color sequence in each reading direction](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/5433c096e311344b3557a80a1f79e6121031c357db34845c87fe5f58b0dd8760.webp)

## Count the digits before multiplying

Read each sequence in its established direction, then assign the band roles:

| Code | Significant digits | Multiplier | Tolerance |
| --- | --- | --- | --- |
| Four bands | Bands 1–2 | Band 3 | Band 4 |
| Five bands | Bands 1–3 | Band 4 | Band 5 |

Join the significant digits into one number, then multiply. For example, digits 4 and 7 form **47**, while digits 4, 7, and 0 form **470**. The zero occupies a digit position; it doesn't mean “multiply by zero.” These ordinary layouts also appear in [DigiKey's resistor color code reference](https://www.digikey.com/en/resources/conversion-calculators/conversion-calculator-resistor-color-code).

The lookup below follows [Vishay's resistor color code chart](https://www.vishay.com/docs/49411/resistor_color_code_calculator.pdf). Gold and silver have no significant-digit value.

| Color | Digit | Multiplier |
| --- | ---: | ---: |
| Black | 0 | ×1 |
| Brown | 1 | ×10 |
| Red | 2 | ×100 |
| Orange | 3 | ×1,000 |
| Yellow | 4 | ×10,000 |
| Green | 5 | ×100,000 |
| Blue | 6 | ×1,000,000 |
| Violet | 7 | ×10,000,000 |
| Gray (grey) | 8 | ×100,000,000 |
| White | 9 | ×1,000,000,000 |
| Gold | — | ×0.1 |
| Silver | — | ×0.01 |

The tolerance colors needed here are **brown ±1%, red ±2%, gold ±5%, and silver ±10%**, also listed in Vishay's chart. Other tolerance colors exist; this is a practice lookup for the cases below.

A gold multiplier divides the digit number by 10. A silver multiplier divides it by 100. A final gold band means ±5%. Give a color its role before assigning its value.

For questions 1–9, use the supplied reading order when decoding a sequence, and write any requested code in that order. Question 10 deliberately withholds the direction. A gap before the tolerance band can help orient a physical resistor, but a written color list doesn't preserve spacing. Gold can occupy a multiplier position, and some five-band components use other marking schemes. Use the manufacturer's marking information when identification is uncertain.

## Three worked readings

For a nominal resistance `R` and tolerance fraction `t`, calculate:

```text
minimum = R × (1 − t)
maximum = R × (1 + t)
```

Use `0.05` for 5% and `0.01` for 1%. Keep one unit throughout a calculation. **1 kΩ = 1,000 Ω**; the [metric prefix guide](/blog/metric-prefixes-flashcards/) gives more practice with powers of ten.

The calculated range includes both endpoints. Keep the unrounded limits when deciding whether a value is inside it.

### Four bands: yellow–violet–red–gold

Yellow and violet give 47. Red is the multiplier ×100, and final gold means ±5%:

```text
R = 47 × 100 = 4,700 Ω = 4.7 kΩ
5% of R = 4,700 × 0.05 = 235 Ω
minimum = 4,700 − 235 = 4,465 Ω
maximum = 4,700 + 235 = 4,935 Ω
```

The result is **4.7 kΩ ±5%**, with a nominal tolerance range of **4,465–4,935 Ω**. The 5% applies to the nominal 4,700 Ω, not to the digit number 47 alone.

### Five bands: yellow–violet–black–brown–brown

There are now three significant digits: 470. The fourth band, brown, multiplies by 10. The fifth band, also brown, means ±1%:

```text
R = 470 × 10 = 4,700 Ω = 4.70 kΩ
1% of R = 4,700 × 0.01 = 47 Ω
range = 4,700 − 47 to 4,700 + 47
      = 4,653–4,747 Ω
```

This is the same nominal resistance as the four-band example, with a narrower stated tolerance. Here, the final brown band specifies ±1%; five bands alone don't establish that tolerance. Three encoded digits don't guarantee an exact measured resistance either. Read the tolerance band separately.

### Gold twice: yellow–violet–gold–gold

This is a four-band code. The third band is the multiplier ×0.1; the fourth is ±5%:

```text
R = 47 × 0.1 = 4.7 Ω
5% of R = 4.7 × 0.05 = 0.235 Ω
range = 4.7 − 0.235 to 4.7 + 0.235
      = 4.465–4.935 Ω
```

The answer is **4.7 Ω ±5%**, not 4.7 kΩ. The first and third examples differ by a factor of 1,000 because their multiplier bands differ.

## Ten resistor color code practice questions

Cover the answers and write the digit number, multiplier, and tolerance before calculating. For questions 1–5, find the nominal resistance, tolerance, and minimum–maximum range in ohms.

1. Red–red–brown–gold.
2. Orange–orange–black–silver.
3. Brown–black–black–red–brown.
4. Red–violet–black–gold–brown.
5. Blue–gray–silver–gold.
6. Encode **3.3 kΩ ±5%** using four bands. Also calculate its tolerance range in ohms.
7. Encode **3.30 kΩ ±1%** using five bands. Also calculate its tolerance range in ohms.
8. Treat **4.8 kΩ** as an exact value for this arithmetic exercise. Does it fall inside the calculated range for each of the first two worked examples: 4.7 kΩ ±5% and 4.70 kΩ ±1%?
9. Someone rounds the maximum for **4.7 kΩ ±5%** to 4.94 kΩ, then accepts an exact hypothetical value of **4.940 kΩ**. Check against the unrounded limit. How far inside or outside is that value?
10. A five-band resistor is transcribed as **brown–black–black–red–brown**, but no reading direction or spacing is recorded. Both ends are brown. Decode both directions under the conventional five-band scheme. Can the color list alone establish which value was intended?

### Answers and explanations

1. **220 Ω ±5%; 209–231 Ω.** The digits form 22 and brown multiplies by 10: `22 × 10 = 220`. Final gold gives a deviation of `220 × 0.05 = 11 Ω`. Subtract and add 11.
2. **33 Ω ±10%; 29.7–36.3 Ω.** Orange–orange gives 33. Black in the multiplier position means ×1, so the nominal value stays 33 Ω. Final silver means ±10%: `33 × 0.10 = 3.3 Ω`. Subtracting and adding 3.3 gives the range. Silver would mean ×0.01 in a multiplier position, but it occupies the tolerance position here.
3. **10,000 Ω ±1%; 9,900–10,100 Ω.** The three digits are 100, then red multiplies by 100: `100 × 100 = 10,000`. Brown at the end means ±1%, so the deviation is `10,000 × 0.01 = 100 Ω`. Ignoring the third digit would produce the wrong nominal value.
4. **27 Ω ±1%; 26.73–27.27 Ω.** Red–violet–black gives 270. Gold is the fourth band, so `270 × 0.1 = 27 Ω`. Final brown sets the deviation to `27 × 0.01 = 0.27 Ω`.
5. **0.68 Ω ±5%; 0.646–0.714 Ω.** Blue–gray gives 68. The silver multiplier makes `68 × 0.01 = 0.68 Ω`. Final gold gives a deviation of `0.68 × 0.05 = 0.034 Ω`. A nominal resistance below 1 Ω is a valid result here.
6. **Orange–orange–red–gold; 3,135–3,465 Ω.** Convert 3.3 kΩ to 3,300 Ω, then express it as `33 × 100`. The digits 3 and 3 are orange; ×100 is red; ±5% is gold. The deviation is `3,300 × 0.05 = 165 Ω`.
7. **Orange–orange–black–brown–brown; 3,267–3,333 Ω.** The nominal value is still 3,300 Ω. A conventional five-band code needs three digits, so use `330 × 10`: orange, orange, black, then brown for ×10 and brown for ±1%. The deviation is `3,300 × 0.01 = 33 Ω`. Changing from two encoded digits to three requires changing the multiplier too.
8. **Inside the ±5% range; outside the ±1% range.** Convert 4.8 kΩ to 4,800 Ω. It lies between 4,465 and 4,935 Ω, but exceeds the 4,747 Ω upper limit of the ±1% example by 53 Ω. Equal nominal values don't imply equal tolerance ranges.
9. **Outside by 5 Ω.** The exact upper limit is 4,935 Ω, or 4.935 kΩ. The hypothetical value is 4,940 Ω, so `4,940 − 4,935 = 5 Ω`. Rounding the boundary outward changes the decision. This is an exact arithmetic comparison; a real instrument reading also has measurement uncertainty, which the resistor's tolerance band doesn't describe.
10. **10 kΩ ±1% in the written direction; 120 Ω ±1% in reverse.** The first reading gives `100 × 100 = 10,000 Ω`. Reversing the list gives brown–red–black–black–brown: `120 × 1 = 120 Ω`. Both end in a valid brown tolerance band. The list alone cannot choose between them; it needs orientation evidence such as the actual marking layout or manufacturer information.

## Practice the step you missed

For each question you miss, write down the first wrong step. Then solve a related question that tests that step. If you treated gold as ±5% everywhere, compare yellow–violet–gold–gold with yellow–violet–red–gold and name each band's role. If you dropped the third digit, redo questions 6 and 7 together and explain why their multipliers differ.

A short recall prompt can isolate that step: “In a conventional five-band code, what does band 4 do?” Answer: it multiplies the three-digit number. Later, solve a whole sequence again without the lookup. Recalling a role and applying it in a calculation are both worth practicing.

The [resistor color code flashcards](/catalog/packages/resistor-color-code-flashcards/) give you short decoding, encoding, and nominal tolerance-range questions for conventional four- and five-band codes. The prompts use written color names, so you can focus on band roles and arithmetic.

Once you can read individual resistor values, use the [series and parallel circuit practice](/blog/series-parallel-circuit-practice/) to work out how connections change a network's resistance, current, and voltage.

*Production note: AI agents researched and wrote this worksheet, with two separate English editorial passes. The band calculations and tolerance ranges were checked with exact-rational Python arithmetic. The illustration is AI-generated. No physical measurements, classroom trial, or human expert review was performed.*
