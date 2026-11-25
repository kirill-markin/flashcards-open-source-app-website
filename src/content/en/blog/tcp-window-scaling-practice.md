---
title: "TCP Window Scaling: A Worked Receive Window Example"
description: "Decode both TCP Window Scale offers, calculate the advertised receive window, and find how much room is left for new data."
date: "2026-11-25"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/5e47c034c7d42a0d81e2559bf0d1d171f00b75f6e3322c97ab60b2085c672f05.webp"
keywords:
  - "TCP window scaling example"
  - "TCP receive window calculation"
  - "TCP advertised window"
  - "Wireshark calculated window size"
---

B's TCP header shows a Window value of 512. In this example trace, that value gives A a 65,536-byte window for sending data to B. A already has 16,000 unacknowledged bytes in that window, so there's room for another 49,536 bytes under B's advertised limit.

To get those numbers, use the scale B offered in the handshake, then compare the end of B's window with the sequence number A would use for its next byte.

![A librarian slides a metal bookend away from a row of books, leaving room for the books she is holding](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/5e47c034c7d42a0d81e2559bf0d1d171f00b75f6e3322c97ab60b2085c672f05.webp)

## Use the shift offered by the receiver of the data

For data traveling from A to B, B is the receiver. B sends ACKs back to A and advertises how much data it can accept. The ACK number marks the start of that range at the next sequence number B expects from A. The decoded Window gives the width of the range in bytes. The raw Window field is 16 bits, so the largest number it can hold is 65,535. [RFC 9293, TCP header fields](https://www.rfc-editor.org/rfc/rfc9293.html#section-3.1)

The Window Scale option carries a shift count. TCP enables scaling when both ends include the option in their SYN-bearing packets. For later packets, multiply the raw Window by two raised to the shift offered by the endpoint that sends the advertisement. A shift of 0 still counts as an offer and gives a multiplier of 1. The SYN and SYN+ACK Window fields are always in bytes as shown. [RFC 7323, Window Scale negotiation and calculation](https://www.rfc-editor.org/rfc/rfc7323.html#section-2.2)

These are the four packets leading up to A's data transfer. Seq and Ack are raw TCP sequence numbers.

| Step | Direction | Flags | Seq | Ack | Raw Window | Shift offered | Advertised window |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | A → B | SYN | 1000 | — | 4096 | 2 | 4,096 bytes |
| 2 | B → A | SYN, ACK | 9000 | 1001 | 8192 | 7 | 8,192 bytes |
| 3 | A → B | ACK | 1001 | 9001 | 2048 | — | 8,192 bytes |
| 4 | B → A | ACK | 9001 | 1001 | 512 | — | 65,536 bytes |

On the final handshake ACK in step 3, A's shift of 2 gives a multiplier of 4. A advertises `2048 × 4 = 8192` bytes for **B's data**, starting at sequence number 9001.

On the window update in step 4, B's shift of 7 gives a multiplier of `2⁷ = 128`. B advertises `512 × 128 = 65,536` bytes for **A's data**, starting at sequence number 1001. Two slips give very different answers. Applying A's multiplier of 4 gives 2,048 bytes, and multiplying by B's shift count of 7 gives 3,584 bytes.

Each SYN takes one sequence position. That's why these ACKs start at 1001 and 9001 when each side is still expecting its first data byte. [TCP sequence and acknowledgment number practice](/blog/tcp-sequence-acknowledgment-numbers/)

## Work out how much more data fits

A receives B's window update in step 4, then sends 16,000 bytes of TCP payload starting at sequence number 1001. The snapshot is from A's side. A has received no later ACK or window update from B, so all 16,000 bytes are outstanding and the latest ACK is still 1001. Assume A's congestion window allowed that much data to go out.

Add the decoded width to the ACK number to find the window's right edge. This is the first sequence position outside the window. To find the room for new data, subtract A's next sequence number from that edge. A result of zero or less leaves no room for ordinary new data. [RFC 9293, usable window calculation](https://www.rfc-editor.org/rfc/rfc9293.html#section-3.8.6.2)

| What to find | Calculation | Result |
| --- | --- | --- |
| First position outside B's window | `1001 + 65,536` | 66,537 |
| Last byte inside B's window | `66,537 − 1` | 66,536 |
| A's next position for new data | `1001 + 16,000` | 17,001 |
| Room for new data in B's window | `66,537 − 17,001` | 49,536 bytes |

A has used positions 1001 through 17,000, inclusive. That leaves positions 17,001 through 66,536 for new data. Since all 16,000 outstanding bytes fall inside this window, subtracting their length from its width gives the same result.

The 49,536 bytes answer a **receiver flow-control** question. A's congestion window puts a separate limit on how much data A can have outstanding. Depending on that limit, A may be able to send fewer bytes right now. [RFC 5681, congestion and receive windows](https://www.rfc-editor.org/rfc/rfc5681.html#section-2)

## Check what Wireshark knows about the scale

| Wireshark field | What it shows |
| --- | --- |
| `tcp.window_size_value` | The raw Window field from the TCP header |
| `tcp.window_size` | The calculated window size |
| `tcp.window_size_scalefactor` | The multiplier when known, `-1` when unknown, or `-2` when scaling is unused |

A capture that starts midstream can show the same positive number in the raw and calculated fields even when the scale is unknown. Check the scaling factor before using the calculated number as a byte count. If you're comparing the trace above with Wireshark's sequence display, the raw numbers are available as `tcp.seq_raw` and `tcp.ack_raw`. [Wireshark TCP field reference](https://www.wireshark.org/docs/dfref/t/tcp.html) · [Wireshark guide to relative sequence numbers and window scaling](https://wiki.wireshark.org/TCP_Relative_Sequence_Numbers)

A raw Window of zero gives zero bytes at any scale. The receiver is advertising no room for ordinary new data. TCP uses zero-window probes to check when the window has reopened. [RFC 9293, zero-window probing](https://www.rfc-editor.org/rfc/rfc9293.html#section-3.8.6.1)

## Try five TCP window scaling exercises

Each case is independent. Use valid post-handshake window updates and assume sequence numbers don't wrap around. For each advertisement, start by naming the endpoint that sent it and the data stream it covers.

1. Both endpoints offer scaling. A offers shift 1 and B offers shift 3. B → A has a raw Window of 250. How wide is the window, and whose data does it cover? What if A → B carries the same raw value?
2. You have both SYN-bearing packets. A offers shift 4 and B replies without a Window Scale option. A later advertises a raw Window of 512. How wide is the window?
3. Your capture starts midstream. B → A has a raw Window of 512, and Wireshark shows `-1` for the scaling factor. Can you calculate the window width from those fields?
4. B's latest ACK to A is 3000 with a decoded window of 800 bytes. A has already sent through position 3799 and has received no later ACK. How much room remains for new data?
5. B's shift is 2 and scaling is enabled. B → A carries `Ack=5000` and a raw Window of zero. A's next position for new data is 5000. Before A sends anything more, it accepts an update from B with the same ACK and a raw Window of 256. How much room is available at each point?

### Answers

1. **B advertises 2,000 bytes for A's data.** B's multiplier is `2³ = 8`, so `250 × 8 = 2000`. In the other direction, A's multiplier is `2¹ = 2`, so A advertises 500 bytes for B's data.
2. **512 bytes.** The complete handshake shows one offer, so each direction uses its raw Window field as a byte count.
3. **The width is unknown.** The raw 512 could represent 512 bytes if scaling is disabled or 65,536 bytes if B negotiated shift 7. Both fit the fields you can see.
4. **Zero bytes.** The first position outside the window is `3000 + 800 = 3800`. A's next new byte would also be 3800, so the outstanding data uses the entire advertised range.
5. **Zero bytes, then 1,024 bytes.** The update advertises `256 × 2² = 1024` bytes starting at 5000, moving the right edge to 6024. This can happen when the receiving application reads data that TCP has already acknowledged. [RFC 9293, receive-buffer space and window updates](https://www.rfc-editor.org/rfc/rfc9293.html#section-3.8.6.2)

## Put the step you missed on a flashcard

| Front | Back |
| --- | --- |
| Both sides offered Window Scale. A's shift is 2 and B's is 7. B → A advertises a raw Window of 512 after the handshake. How wide is B's window? | 65,536 bytes. B's multiplier is `2⁷ = 128`. |
| A's next byte would use sequence number 3800. The first position outside B's receive window is also 3800. How much room remains for A's new data? | Zero bytes. Position 3800 is outside the window. |

Answer the card from memory in your next review session. A few days later, swap the direction or change the numbers and solve the new example before checking. [How to make better flashcards](/blog/how-to-make-better-flashcards/)

*The trace and exercises are constructed teaching examples. The raw headers and byte ranges were checked in a synthetic packet capture with tcpdump 4.99.1. AI helped draft and edit the article and generate the cover illustration.*
