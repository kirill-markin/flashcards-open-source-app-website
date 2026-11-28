---
title: "How to Calculate TCP Retransmission Timeout (RTO) by Hand"
description: "Calculate TCP’s retransmission timeout from two RTT samples, work out retry deadlines, and see which ACK stops the timer. Three practice problems with answers."
date: "2026-11-28"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/0ae008802f17c915684606dc130fbd378da77a57c05ce9026a0ce2f05fec7240.webp"
keywords:
  - "TCP retransmission timeout"
  - "calculate TCP RTO"
  - "SRTT"
  - "RTTVAR"
  - "Karn's algorithm"
---

A TCP sender transmits a segment at `t = 2,000 ms`. The retransmission timeout (**RTO**) is `1,225 ms`, so if the timer runs out, the first retry goes out at `t = 3,225 ms`. The RTO comes from two earlier round-trip measurements of 400 ms and 600 ms. The order you do the arithmetic in changes the retry time.

![A ferry attendant holds a brass bell on a wooden landing as a rowboat emerges from mist.](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/0ae008802f17c915684606dc130fbd378da77a57c05ce9026a0ce2f05fec7240.webp)

## Calculate the RTO from two RTT samples

Use an established TCP connection for this paper trace. Each of the first two segments you time gets an acknowledgment (ACK) on its first send. The elapsed time from send to ACK is the round-trip time (**RTT**). TCP keeps a smoothed RTT (**SRTT**) and a smoothed estimate of how far samples deviate from it (**RTTVAR**). Use a clock granularity `G` of 10 ms and keep the calculations in milliseconds. [RFC 6298, RTO calculation](https://datatracker.ietf.org/doc/html/rfc6298#section-2), [RFC 6298, clock granularity](https://datatracker.ietf.org/doc/html/rfc6298#section-4)

RFC 6298 recommends an initial RTO of 1,000 ms before the first RTT sample. Once you have that sample, set `SRTT` to the sample and `RTTVAR` to half of it. Use the following formula after each sample. If it gives less than 1,000 ms, round up to 1,000 ms, the recommended floor used throughout this trace. [RFC 6298, steps 2.1–2.4](https://datatracker.ietf.org/doc/html/rfc6298#section-2)

```text
RTO = SRTT + max(G, 4 × RTTVAR)
```

For a later sample `R`, update RTTVAR first using the gap between the sample and the **old SRTT**. Then update SRTT. Use the recommended weights of `1/4` for RTTVAR and `1/8` for SRTT. [RFC 6298, step 2.3](https://datatracker.ietf.org/doc/html/rfc6298#section-2)

```text
RTTVAR = (3/4 × old RTTVAR) + (1/4 × abs(old SRTT − R))
SRTT   = (7/8 × old SRTT)   + (1/8 × R)
```

| RTT sample (ms) | RTTVAR (ms) | SRTT (ms) | RTO (ms) |
| ---: | --- | --- | --- |
| 400 | `400 / 2 = 200` | `400` | `400 + max(10, 800) = 1,200` |
| 600 | `150 + 50 = 200` | `350 + 75 = 425` | `425 + max(10, 800) = 1,225` |

The `50` in the second row is one quarter of the gap between `600` and `400`. Write down the old SRTT before you update it. Using `425` too soon gives an RTTVAR of `193.75 ms` and an RTO of `1,200 ms`, which puts the first retry 25 ms too early in this trace.

## Put the retries on a timeline

At `t = 2,000 ms`, the sender sends a single segment and starts the timer with the `1,225 ms` RTO. Each time the timer expires, the sender retransmits the segment, doubles the RTO, and starts the next wait. This doubling is called **exponential backoff**. The first retry starts a fresh `2,450 ms` wait at `t = 3,225 ms`, so the second retry is due at `t = 5,675 ms`. [RFC 6298, steps 5.1 and 5.4–5.6](https://datatracker.ietf.org/doc/html/rfc6298#section-5)

| Send time (ms) | Transmission | Time until expiry (ms) | Deadline (ms) |
| ---: | --- | ---: | ---: |
| 2,000 | Original send | 1,225 | 3,225 |
| 3,225 | First retry | 2,450 | 5,675 |
| 5,675 | Second retry | 4,900 | 10,575 |

An ACK arrives at `t = 5,800 ms` and covers all outstanding bytes. The sender switches off the timer, so there’s no retry at `t = 10,575 ms`. If an ACK acknowledges new data and leaves some data outstanding, the sender restarts the timer with the current RTO. [RFC 6298, steps 5.2–5.3](https://datatracker.ietf.org/doc/html/rfc6298#section-5), [TCP sequence and acknowledgment numbers](/blog/tcp-sequence-acknowledgment-numbers/)

Can you also use that ACK to measure RTT? With TCP timestamps disabled, all three sends could have prompted it. Measuring from the original send gives `3,800 ms`. Measuring from the last retry gives `125 ms`. The sender has no way to pick the right send, so **Karn’s algorithm** tells it to skip the sample. [RFC 6298, RTT sampling](https://datatracker.ietf.org/doc/html/rfc6298#section-3)

With more data in flight, three duplicate ACKs can trigger **fast retransmit** before the timer expires. A receiver can report the byte ranges that arrived out of order using selective acknowledgments (SACK) if the sender advertised SACK support. [RFC 5681, fast retransmit](https://datatracker.ietf.org/doc/html/rfc5681#section-3.2), [Worked TCP SACK example](/blog/tcp-sack-example/)

## Try three more calculations

Use the same 10 ms clock granularity and one-second floor.

1. Your first RTT sample is `120 ms`. What does the formula give, and what RTO do you use after applying the floor?
2. After an update, SRTT is `1,100 ms` and RTTVAR is `1 ms`. What’s the RTO?
3. Your first two RTT samples are `500 ms` and `700 ms`. You then send a segment at `t = 3,000 ms` with nothing else outstanding. When does the first retry happen? When is the second retry due if no ACK arrives? An ACK for the whole segment comes in at `t = 6,000 ms`. What happens to the timer, and can you take an RTT sample with TCP timestamps disabled?

### Answers

1. **360 ms before the floor, 1,000 ms after it.** RTTVAR is `60 ms`, so the raw result is `120 + max(10, 240) = 360 ms`.
2. **1,110 ms.** Four times RTTVAR is `4 ms`. The clock granularity sets the added term, giving `1,100 + max(10, 4) = 1,110 ms`.
3. **First retry at 4,475 ms. Second retry due at 7,425 ms.** The first sample gives an RTO of `1,500 ms`. The second gives an SRTT of `525 ms` and an RTTVAR of `237.5 ms`, so the RTO is `1,475 ms`. Add that to `3,000 ms` for the first retry, then add the doubled wait of `2,950 ms` to `4,475 ms` for the next deadline. The ACK at `6,000 ms` stops the timer. Either send could have prompted it, so skip the RTT sample.

*AI tools assisted with drafting and editing and generated the cover. A script checked the calculations in these paper exercises.*
