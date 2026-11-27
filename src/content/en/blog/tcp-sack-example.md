---
title: "TCP Selective Acknowledgment: A Worked SACK Example"
description: "Read a TCP cumulative ACK and its SACK blocks together, follow a byte gap across four arrivals, and try three practice questions with answers."
date: "2026-11-27"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/5cff4c8cf604711cf715f335b23ef5ca2f2770a6858a5670d510501002717fd9.webp"
keywords:
  - "TCP SACK example"
  - "TCP selective acknowledgment"
  - "SACK blocks"
  - "cumulative ACK"
  - "SACK left and right edge"
---

`Ack=1001` and `SACK [1121,1161)` can appear on the same TCP packet. The cumulative ACK says receiver B is still waiting for byte `1001`. The selective acknowledgment, or SACK, says B has bytes `1121` through `1160`. The square bracket includes byte `1121` and the parenthesis excludes byte `1161`. Between the ACK and the start of that block is a 120-byte gap, `[1001,1121)`. [RFC 9293, sequence numbers](https://www.rfc-editor.org/rfc/rfc9293.html#section-3.4), [RFC 2018, SACK blocks](https://www.rfc-editor.org/rfc/rfc2018.html#section-3)

![A printmaker hangs a blue botanical print between two groups on a drying line](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/5cff4c8cf604711cf715f335b23ef5ca2f2770a6858a5670d510501002717fd9.webp)

## Follow four arrivals at the receiver

A included **SACK-Permitted** in its SYN, so B can send SACK reports about A’s data. Both the cumulative ACK and the SACK edges in B’s reply refer to A’s byte stream. A can send SACK about B’s data if B included the option in its own SYN-bearing segment. [RFC 2018, SACK-Permitted](https://www.rfc-editor.org/rfc/rfc2018.html#section-2), [TCP sequence and acknowledgment numbers practice](/blog/tcp-sequence-acknowledgment-numbers/)

Start with `Ack=1001` after the handshake. This is a paper trace with a known arrival order. B keeps the out-of-order data, sends an ACK after each arrival, and has room in its TCP options to report every block shown. The sequence numbers stay below the wraparound point.

A segment with `Seq=1121` and 40 payload bytes covers `[1121,1161)`. Use that same range notation throughout the table. To get the length of any block here, subtract its left edge from its right edge. In the first row, that’s `1161 − 1121 = 40`. [RFC 2018, SACK option format](https://www.rfc-editor.org/rfc/rfc2018.html#section-3)

| Step | Data arriving at B from A | B’s cumulative ACK | B’s SACK blocks in reported order | Gaps below the highest received byte |
| --- | --- | --- | --- | --- |
| 1 | `Seq=1121`, 40 bytes | `1001` | `[1121,1161)` | `[1001,1121)` |
| 2 | `Seq=1041`, 40 bytes | `1001` | `[1041,1081)`, `[1121,1161)` | `[1001,1041)`, `[1081,1121)` |
| 3 | `Seq=1081`, 40 bytes | `1001` | `[1041,1161)` | `[1001,1041)` |
| 4 | `Seq=1001`, 40 bytes | `1161` | None | None |

In step 2, the lower block comes first because it contains the segment that just arrived. When an arrival leaves the cumulative ACK in place and B sends SACK, the block containing that segment has to go first. The remaining blocks can appear in any order. If the arrival moves the cumulative ACK forward, the first-block rule drops away. The cumulative ACK covers the newly contiguous bytes, and any blocks still beyond a gap can appear in SACK. [RFC 2018, receiver rules](https://www.rfc-editor.org/rfc/rfc2018.html#section-4)

In step 3, `[1081,1121)` joins the two buffered ranges into one block. Byte `1001` is still missing, so the cumulative ACK stays at `1001`. In step 4, the first gap closes and the ACK moves past all the bytes B had buffered. B has a continuous range through byte `1160` and now expects `1161`.

## Read the gap in a packet capture

Start with the cumulative ACK, then mark the reported blocks above it. In a live capture, a single header gives you a snapshot. Loss and reordering can produce the same gap. An ACK may have no SACK option because the receiver has no out-of-order data to report or because it never received SACK-Permitted. Even when SACK appears, limited TCP option space can leave some blocks out. Check nearby ACKs and follow the same byte range through later arrivals or retransmissions before concluding that a segment was lost. [RFC 2018, receiver rules](https://www.rfc-editor.org/rfc/rfc2018.html#section-4), [RFC 2018, examples](https://www.rfc-editor.org/rfc/rfc2018.html#section-7)

The sender uses SACK as a record of what the receiver reported and applies its own loss recovery rules to decide what to resend. SACK is advisory. A receiver can discard bytes it previously reported, so the sender keeps those bytes available until the cumulative ACK covers them. [RFC 2018, sender behavior](https://www.rfc-editor.org/rfc/rfc2018.html#section-5), [RFC 2018, receiver discarding data](https://www.rfc-editor.org/rfc/rfc2018.html#section-8)

Wireshark documents `tcp.ack_raw` for the raw acknowledgment number and `tcp.options.sack_le` and `tcp.options.sack_re` for the SACK edges. Before subtracting an ACK value from an edge, check that all values are raw or all relative to the same reference point in A’s stream. [Wireshark’s TCP field reference](https://www.wireshark.org/docs/dfref/t/tcp.html)

B’s ACK also carries an advertised receive window. The cumulative ACK gives the start of that window, and the TCP Window field gives its size after applying any negotiated scaling. A’s congestion window is a separate sender-side limit on data in flight. [Worked TCP window scaling example](/blog/tcp-window-scaling-practice/), [RFC 5681, TCP congestion control](https://www.rfc-editor.org/rfc/rfc5681.html#section-3.1)

## Try three SACK practice questions

Use the same assumptions as in the table. Sketch the ranges before looking at the answers.

1. B sends `Ack=2000` and reports its only buffered block as `SACK [2048,2112)`. How long is the first gap, and what’s the last byte in the reported block?
2. B expects `7000` and has buffered `[7020,7055)` and `[7090,7120)`. A segment arrives with `Seq=7000` and 20 payload bytes. What ACK and SACK does B send?
3. B expects `8960` and has buffered `[9000,9040)` and `[9060,9100)`. A segment arrives with `Seq=9040` and 20 payload bytes. What ACK and SACK does B send?

### Answers

1. The gap `[2000,2048)` is 48 bytes. The SACK block ends at byte `2111` because its right edge, `2112`, is exclusive.
2. B sends `Ack=7055` and `SACK [7090,7120)`. The new bytes join the first buffered block, moving the cumulative ACK to the start of the remaining gap, `[7055,7090)`.
3. B sends `Ack=8960` and `SACK [9000,9100)`. The new 20 bytes join the two buffered ranges. The first gap, `[8960,9000)`, keeps the cumulative ACK at `8960`.

For a flashcard, put “What’s the last byte in a SACK block of `[2048,2112)`?” on the front. Put “`2111`, because the right edge is exclusive” on the back.

*AI tools assisted with drafting and editing and generated the cover. The examples are original paper exercises. A small script checked the byte-range arithmetic.*
