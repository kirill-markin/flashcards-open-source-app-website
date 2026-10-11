---
title: "TCP Sequence and Acknowledgment Numbers: Worked Practice"
description: "Work through TCP sequence and acknowledgment numbers with a two-way trace, missing-byte example, SYN and FIN rules, and practice questions with answers."
date: "2026-10-11"
image: "/blog/tcp-sequence-acknowledgment-numbers.png"
keywords:
  - "TCP sequence and acknowledgment numbers"
  - "TCP sequence number practice"
  - "cumulative ACK"
  - "SYN FIN sequence numbers"
  - "TCP retransmission"
  - "Wireshark relative sequence numbers"
---

A segment starts at `Seq=1` and carries 80 bytes. The next byte is 81. But when the other endpoint replies with `Ack=81`, its own sequence number can still be 1. Those numbers belong to different directions of the connection.

Use these original paper exercises to calculate **TCP sequence and acknowledgment numbers** without mixing the two streams. Start with the complete handshake, follow a gap through retransmission, then cover the answers and try the practice questions. No packet capture or software setup is needed.

![A tile restorer fits a turquoise tile into a gap between completed sections of a stair border](/blog/tcp-sequence-acknowledgment-numbers.png)

## Keep a ledger for each direction

In an A → B segment, **Seq describes A's stream; Ack describes B's stream**. Seq identifies the first data byte, except when SYN is set: then it identifies the SYN, and data start one position later. Ack is meaningful when the ACK flag is set. These field meanings come from [RFC 9293's header definition](https://www.rfc-editor.org/rfc/rfc9293.html#section-3.1).

Data bytes have consecutive sequence positions; TCP and IP headers don't consume them. When a segment starts at the sender's next unused position and sends new data or a new SYN/FIN, calculate:

```text
Next unused position = Seq + payload bytes + SYN contribution + FIN contribution
```

SYN contributes 1 before data; FIN contributes 1 after data. The ACK flag contributes 0, so a pure ACK consumes no positions. This formula advances the sender's ledger for new positions; retransmission reuses positions already assigned. **Cumulative ACK** names the next expected position after the continuous received range, stopping at the first gap. [RFC 9293, section 3.4](https://www.rfc-editor.org/rfc/rfc9293.html#section-3.4) specifies these rules.

Use two columns on paper:

| Direction | Next position for new data |
| --- | --- |
| A → B | Advance only for A's new data or SYN/FIN |
| B → A | Advance only for B's new data or SYN/FIN |

All examples are constructed teaching traces. Payload length means **TCP data bytes**, excluding headers. Assume valid segments, enough capacity to accept the stated data, no sequence-number wraparound, and delivery in the listed order unless marked lost. Ignore SACK options, window behavior, and congestion control.

The rows show possible ACK values, not a requirement to reply immediately to every segment. A receiver can acknowledge several data segments together, as [RFC 9293's delayed-ACK rules](https://www.rfc-editor.org/rfc/rfc9293.html#section-3.8.6.3) explain.

## Follow the handshake and data in both directions

Use relative numbering with a complete handshake: each endpoint's SYN is position 0. Neither SYN carries data. Each row is sent after the preceding delivered row has been received.

| Step | Direction | Flags | Seq | Ack | Payload bytes | Positions occupied |
| --- | --- | --- | ---: | ---: | ---: | --- |
| 1 | A → B | SYN | 0 | — | 0 | A's SYN: 0 |
| 2 | B → A | SYN, ACK | 0 | 1 | 0 | B's SYN: 0 |
| 3 | A → B | ACK | 1 | 1 | 0 | None |
| 4 | A → B | ACK | 1 | 1 | 80 | A's data: 1–80 |
| 5 | B → A | ACK | 1 | 81 | 25 | B's data: 1–25 |
| 6 | A → B | ACK | 81 | 26 | 40 | A's data: 81–120 |
| 7 | B → A | ACK | 26 | 121 | 0 | None |

The dash in step 1 means the ACK field isn't meaningful: the ACK flag is absent.

At step 3, A has acknowledged B's SYN, but sends no data. A therefore uses `Seq=1` again in step 4. After 80 payload bytes, A's next unused position is `1 + 80 = 81`.

Step 5 combines B's first 25 data bytes with an acknowledgment of A's first 80. B's `Seq=1` and `Ack=81` can differ because they're reporting different streams. A receives those 25 bytes and uses `Ack=26` in step 6, while its own 40-byte payload starts at 81.

After step 7, write the ledger as **A next: 121; B next: 26**. B's empty acknowledgment hasn't moved B's next position to 27.

[Network ports](/blog/common-network-ports/) help identify endpoints. This ledger tracks progress within the connection; a port number isn't part of the byte calculation.

## A gap stops the cumulative ACK

Continue from that ledger. B expects A's position 121 and sends no more data. For this example, B **buffers and retains all later out-of-order bytes** until the missing range arrives. The responses shown are pure ACKs with B's `Seq=26`.

| Event | A → B transmission | What B now holds from this part of the stream | B's cumulative Ack |
| --- | --- | --- | ---: |
| 1 | `Seq=121`, 30 bytes, lost | Nothing new | No new response |
| 2 | `Seq=151`, 20 bytes, delivered | 151–170; gap at 121–150 | 121 |
| 3 | `Seq=171`, 15 bytes, delivered | 151–185; same gap | 121 |
| 4 | Retransmit `Seq=121`, 30 bytes, delivered | Contiguous 121–185 | 186 |

After event 3, A's next unused position is `171 + 15 = 186`. B still expects 121. Keep **the sender's progress** separate from **the receiver's contiguous progress**.

When the missing 30 bytes arrive, they join the 35 buffered bytes. The completed range has `185 − 121 + 1 = 65` bytes, and B's ACK jumps to 186. Writing 151 would ignore the bytes B retained. Writing 216 would count the retransmitted range twice.

After event 4, A's next position for new data is still **186**. Retransmitting 121–150 hasn't moved that position back to 151 or forward by another 30 bytes. Segment boundaries may change when retransmitting; this exercise happens to reuse the original 30-byte segment. [RFC 9293 permits repackaging retransmission data](https://www.rfc-editor.org/rfc/rfc9293.html#section-3.8.6).

An ACK confirms TCP receipt, not that the receiving application has read or processed the data. This distinction is explained in the [TCP design discussion in RFC 793](https://www.rfc-editor.org/rfc/rfc793.html#section-2.6), which RFC 9293 retains as background.

## Relative numbers aren't the raw header values

[Wireshark displays relative sequence and acknowledgment numbers by default](https://wiki.wireshark.org/TCP_Relative_Sequence_Numbers), using the first observed traffic to establish its reference. This changes the display, not the numbers transmitted in the headers. A real capture may start midway through a connection, so don't assume every displayed 0 represents a captured SYN.

For our complete-handshake example, suppose A's raw initial sequence number is 42000 and B's is 180000:

| Field in step 5 | Relative value | Raw value |
| --- | ---: | ---: |
| B's Seq | 1 | `180000 + 1 = 180001` |
| B's Ack of A | 81 | `42000 + 81 = 42081` |

Convert each field against the initial number of the stream it describes. Adding B's initial number to B's Ack would use the wrong ledger.

## Six TCP sequence number practice questions

Use the assumptions above. Each question is independent. Unless stated otherwise, data arrive contiguously with no SYN or FIN. Write both the answer and the byte range or calculation that supports it.

1. B expects 301. A sends 48 new payload bytes at `Seq=301` with the ACK flag set. What is A's next unused position, and what Ack can B send after receiving them?
2. B sends a pure ACK with `Seq=901, Ack=349`. B then sends 12 new data bytes without receiving any more A data. What are B's Seq and Ack on that data segment?
3. A sends `Seq=700` with 18 payload bytes and FIN set. B was expecting 700 and receives the whole segment. Which position belongs to FIN, and what Ack follows?
4. B expects 501. It receives and retains `Seq=541` with 20 bytes, then receives `Seq=501` with 25 bytes. What is B's cumulative Ack after each arrival, and what range is still missing?
5. A sends `Seq=1001` with 60 bytes. B receives them and sends a pure `Ack=1061`, but that ACK is lost. A retransmits the same 60 bytes. What Ack can B repeat, and what is A's next unused data position if A has sent nothing else?
6. A complete handshake used raw initial numbers A=25000 and B=90000. B sends a segment displayed as relative `Seq=41, Ack=121`. What are its two raw values?

## Check the reasoning

1. **349 for both.** The payload occupies 301–348; `301 + 48 = 349`. Setting ACK adds no sequence position. B's acknowledgment reports A's stream.
2. **`Seq=901, Ack=349`.** The pure ACK consumed nothing. B's 12 data bytes start at 901 and occupy 901–912, leaving its next unused position at 913. No new A data arrived, so the acknowledgment stays 349.
3. **FIN is 718; Ack is 719.** The 18 data bytes occupy 700–717. FIN follows them: `700 + 18 = 718`. Acknowledging the whole segment gives `700 + 18 + 1 = 719`.
4. **First 501, then 526; missing 526–540.** The later range 541–560 doesn't fill the first gap. The second arrival fills only 501–525. B now expects 526, with 15 positions still missing before its buffered range.
5. **Ack 1061; next unused data position 1061.** The retransmission repeats positions 1001–1060. B already has that range. Losing the ACK hasn't turned the repeated bytes into another 60 new positions.
6. **Raw Seq 90041; raw Ack 25121.** B's sequence field uses `90000 + 41`. Its acknowledgment of A uses `25000 + 121`.

## Save the distinction you missed

If you got a question wrong, make a small repair card about that particular mistake. The [guide to better flashcards](/blog/how-to-make-better-flashcards/) explains how to keep each prompt focused. You can use paper or your usual flashcard app.

| Mistake | Narrow prompt | Answer to recall |
| --- | --- | --- |
| Added one for an empty ACK | “Pure ACK, Seq=901, no data or SYN/FIN. Next unused position?” | 901; the ACK flag consumes zero positions |
| Used the reply's Seq as its Ack | “B → A has Seq=41, Ack=121. Which stream does each describe?” | Seq: B's; Ack: A's |
| Skipped the first missing byte | “Expect 526; retain 541–560. Cumulative Ack?” | 526, until the gap is filled |
| Forgot FIN after data | “Seq=700, 18 data bytes plus FIN. Ack for the whole segment?” | 719: 18 data positions plus one FIN position |

Then change the numbers and solve a new trace. For a transfer check, B expects 80, retains 110–129, and receives 80–109. It sends `Seq=400` with nine data bytes and an ACK. Write its Seq, Ack, and next unused position before reading on.

The answer is **Seq=400, Ack=130, next unused position=409**. Filling 80–109 connects the buffered range through 129; B's own nine outgoing bytes occupy 400–408. Explain those two directions separately. That's the calculation to retain.
