---
title: "IPv4 Subnetting Practice: Network, Broadcast, and Host Ranges"
description: "Practice IPv4 subnetting with worked answers for network addresses, broadcasts, host ranges, and capacity. Catch boundary and cross-octet mistakes."
date: "2026-10-02"
image: "/blog/ipv4-subnetting-practice.png"
keywords:
  - "IPv4 subnetting practice"
  - "subnetting practice questions"
  - "network and broadcast address"
  - "usable host range"
  - "CIDR subnet mask"
---

`192.0.2.192/26` looks like an ordinary address until you calculate its boundary. It starts a subnet. Assigning it to a host would be the wrong answer even if you remembered that a `/26` has 62 traditional host addresses.

This **IPv4 subnetting practice** worksheet connects those mask anchors to actual decisions: finding the network and broadcast address, writing the usable host range, comparing addresses, and choosing capacity. Work through the three examples, then try the eight questions with the answers covered. Paper is enough; save a calculator for checking afterward.

![A woman lifts an interior bread slice from a row, with the two end heels set aside](/blog/ipv4-subnetting-practice.png)

## Keep the prefix attached to the address

An IPv4 address has 32 bits. In `/p` notation, the first `p` bits identify the network; the remaining `32 − p` bits are the host portion. The matching CIDR subnet mask has `p` consecutive ones followed by zeros. Use the supplied prefix throughout the calculation. [RFC 4632](https://www.rfc-editor.org/rfc/rfc4632.html) describes this classless representation.

The worked examples and questions use **conventional IPv4 LAN addressing** with prefixes from `/23` through `/30`:

- The **network address** has every host bit set to zero.
- The **directed broadcast address** has every host bit set to one.
- The **traditional usable host range** runs from network plus one to broadcast minus one.

Applying a bitwise AND to the address and mask gives the network address. [Cisco's subnetting guide](https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13788-3.html) explains this split. The decimal block method in the examples finds the same boundaries without writing all 32 bits.

With `h = 32 − p` host bits, total addresses equal `2^h`. Excluding the two endpoints leaves `2^h − 2` traditional host addresses. These are the counts in [Cisco's host-quantity reference](https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13790-8.html):

| Prefix | Subnet mask | Total addresses | Traditional host capacity |
| --- | --- | ---: | ---: |
| `/23` | `255.255.254.0` | 512 | 510 |
| `/24` | `255.255.255.0` | 256 | 254 |
| `/25` | `255.255.255.128` | 128 | 126 |
| `/26` | `255.255.255.192` | 64 | 62 |
| `/27` | `255.255.255.224` | 32 | 30 |
| `/28` | `255.255.255.240` | 16 | 14 |
| `/29` | `255.255.255.248` | 8 | 6 |
| `/30` | `255.255.255.252` | 4 | 2 |

“Usable” here describes the numeric range. It doesn't mean those addresses are unassigned or available in a real network.

Don't extend the subtract-two rule to every prefix. On an IPv4 `/31` point-to-point link, **both addresses identify endpoints**, as specified in [RFC 3021](https://www.rfc-editor.org/rfc/rfc3021.html#section-2.1). A `/32` identifies one address; [RFC 4632's prefix table](https://www.rfc-editor.org/rfc/rfc4632.html#section-3.1) lists it as a host route. Neither case uses the conventional LAN host-range calculation above.

The `192.0.2.x`, `198.51.100.x`, and `203.0.113.x` examples stay within the documentation blocks reserved by [RFC 5737](https://www.rfc-editor.org/rfc/rfc5737.html). The cross-octet examples use private `10.42.x.x` addresses. Treat the examples as paper exercises.

## Three worked examples

### A /26 with the host in the middle

Find the subnet containing `192.0.2.150/26`.

The mask is `255.255.255.192`. The first three octets are fixed; the fourth contains both network and host bits. Subtract that mask octet from 256 to get its block size: `256 − 192 = 64`.

```text
0–63     64–127     128–191     192–255
```

`150` falls in `128–191`. Keep `192.0.2` and use the block's endpoints:

| Result | Answer |
| --- | --- |
| Network | `192.0.2.128/26` |
| Broadcast | `192.0.2.191` |
| Usable host range | `192.0.2.129–192.0.2.190` |
| Total / traditional host addresses | 64 / 62 |

Check the inclusive count: `191 − 128 + 1 = 64`. Excluding the endpoints leaves 62 addresses. The supplied `.150` lies inside the host range.

When the prefix splits an octet, locate the input's block in that octet. Any later octets contain only host bits: set them to `0` for the network and `255` for the broadcast. Write those full endpoints before removing them from the usable range. For `/24`, there is no split octet; the first three octets are fixed and the whole fourth octet runs from `0` to `255`.

### A /27 right next to the broadcast

Now calculate `203.0.113.94/27`.

The mask is `255.255.255.224`, giving fourth-octet blocks of `256 − 224 = 32`. The nearby boundaries are `32`, `64`, `96`, and `128`. Since `64 ≤ 94 < 96`, the block begins at `64` and ends one below `96`.

```text
Network:    203.0.113.64/27
Broadcast:  203.0.113.95
Host range: 203.0.113.65–203.0.113.94
Capacity:   32 total; 30 traditional host addresses
```

The input is the last usable host. The broadcast is `.95`, even though the question gives you `.94`. Calculate the entire block rather than treating the input as one of its boundaries.

### A /23 that crosses an octet

For `10.42.7.201/23`, the mask is `255.255.254.0`. This time the prefix ends in the **third octet**. Its block size is `256 − 254 = 2`, so third-octet blocks begin at `0`, `2`, `4`, `6`, `8`, and so on.

`7` belongs to the `6–7` block. The fourth octet consists entirely of host bits and spans `0–255` for each of those two third-octet values:

```text
10.42.6.0 … 10.42.6.255, then 10.42.7.0 … 10.42.7.255
```

Use the beginning and end of that full sequence:

```text
Network:    10.42.6.0/23
Broadcast:  10.42.7.255
Host range: 10.42.6.1–10.42.7.254
Capacity:   512 total; 510 traditional host addresses
```

The count is `2 × 256 = 512`. A `/23` has nine host bits: one in the third octet and eight in the fourth. Applying the block size only to the fourth octet would miss the subnet's actual boundary.

Notice that `10.42.6.255` and `10.42.7.0` sit next to each other **inside** this host range. Their last octets look like familiar endpoints, but neither is an endpoint of this `/23`. Check the whole host portion under the supplied mask.

## Eight subnetting practice questions

For questions 1 and 2, write the mask, network, broadcast, host range, and traditional host capacity. For the others, write the requested decision **and the boundary or count that proves it**. Keep the answers below covered until you've finished.

Use the conventional LAN rules above for all eight questions. Capacity questions ask for one subnet with the fewest total addresses that fits the stated interface count, without extra growth allowance.

1. Calculate the subnet containing `198.51.100.173/28`.
2. Calculate the subnet containing `203.0.113.78/30`.
3. Is `192.0.2.192/26` a network address, broadcast address, or usable host address?
4. Is `198.51.100.239/28` a network address, broadcast address, or usable host address?
5. Do `192.0.2.126/26` and `192.0.2.129/26` belong to the same numerical subnet?
6. Is `10.42.9.0/23` a usable host address? Give its network and broadcast.
7. A LAN needs 45 addressed interfaces **including the gateway interface**. Which prefix fits with the fewest total addresses?
8. A LAN needs 62 addressed end-device interfaces **plus one gateway interface**. Which prefix fits with the fewest total addresses?

## Answers, with the step that catches the mistake

### 1. The /28 block is 160–175

`/28` is `255.255.255.240`, so the fourth-octet block size is 16. `173` lies between boundaries `160` and `176`.

```text
Network:    198.51.100.160/28
Broadcast:  198.51.100.175
Host range: 198.51.100.161–198.51.100.174
Capacity:   16 total; 14 traditional host addresses
```

If you wrote `.176` as the broadcast, you found the next network boundary and forgot to subtract one. The full block has `175 − 160 + 1 = 16` addresses.

### 2. The /30 has two host addresses

`/30` is `255.255.255.252`, giving four-address blocks. `78` falls in `76–79`.

```text
Network:    203.0.113.76/30
Broadcast:  203.0.113.79
Host range: 203.0.113.77–203.0.113.78
Capacity:   4 total; 2 traditional host addresses
```

The input is the second usable host. Four total addresses doesn't mean four assignable host addresses under the stated LAN rules.

### 3. .192 starts the /26 block

`192.0.2.192/26` is the **network address**. Fourth-octet boundaries are `0`, `64`, `128`, and `192`; this final block ends at `.255`. Its usable range is `192.0.2.193–192.0.2.254`.

An address presented with a prefix isn't automatically a host address. Here, every host bit is zero.

### 4. .239 ends the /28 block

`198.51.100.239/28` is the **broadcast address**. The block starts at `.224`; the next one starts at `.240`. Therefore broadcast is `.239`, and hosts run from `.225` through `.238`.

A broadcast address doesn't have to end in `.255`.

### 5. The two /26 addresses are in different blocks

`192.0.2.126/26` belongs to `192.0.2.64/26`, whose full block is `.64–.127`. `192.0.2.129/26` belongs to `192.0.2.128/26`, whose block is `.128–.191`.

Sharing the first three octets is insufficient under `/26`. Calculate both network addresses using the supplied prefix, then compare them. Matching numerical subnets also wouldn't prove connectivity: VLAN placement, interface configuration, and other network conditions still matter.

### 6. The .0 address is inside the /23

**Yes**, `10.42.9.0/23` is numerically usable under the stated rules.

```text
Network:    10.42.8.0/23
Broadcast:  10.42.9.255
Host range: 10.42.8.1–10.42.9.254
```

The third-octet block is `8–9`. In `.9.0`, the host bit in the third octet is one, even though the eight host bits in the fourth octet are zero. The complete host portion isn't all zeros, so this isn't the network address.

### 7. Forty-five interfaces need a /26

`/27` supplies 30 traditional host addresses, which is too few. `/26` supplies 62, so choose **`/26`**, mask `255.255.255.192`.

The gateway is already included in the stated 45. Count it once. It consumes one of the usable addresses; it doesn't create a third excluded endpoint in the capacity formula.

### 8. Sixty-two end devices plus a gateway need a /25

The requirement is `62 + 1 = 63` interfaces. A `/26` supplies only 62 traditional host addresses. Choose **`/25`**, mask `255.255.255.128`, with 126 traditional host addresses.

Count every interface that needs an address in this subnet. The gateway doesn't have to use the first usable address; its assignment comes from configuration.

## Keep the rule you missed on a card

Recalculate a missed question before turning it into a flashcard. Copying its whole answer can leave you remembering `.175` without remembering how you found it.

These four narrow cards repair the mistakes in this set:

| Front | Back |
| --- | --- |
| Which host-bit pattern identifies a conventional subnet's directed broadcast address? | Every host bit is one. Keep the network bits unchanged. |
| With mask `255.255.254.0`, which octet advances in blocks of two? | The third octet; the fourth spans `0–255`. |
| Does a final IPv4 octet of `.0` prove the address is a network address? | No. Check whether every host bit under the supplied mask is zero. |
| A requirement lists end-device interfaces plus a gateway interface. What count should subnet capacity cover? | Their sum. The gateway consumes a usable host address too. |

For a ready-made review companion, the [IPv4 Subnetting Practice flashcards](/catalog/packages/ipv4-subnetting-practice-flashcards/) cover boundaries, host ranges, capacity, and common mistakes in short prompts. Use them for recall and error repair between fresh calculations.

The [guide to better flashcards](/blog/how-to-make-better-flashcards/) explains how to keep each prompt small enough to grade. For a broader study plan, the [Network+ flashcards guide](/blog/comptia-network-plus-flashcards/) separates facts worth reviewing from calculations and labs worth doing.

Save the rules that slowed you down in your study deck. Then change the input addresses and calculate again with the answers hidden. For each calculation, check that the full block contains `2^(32 − p)` addresses and that the input lies between its endpoints. Explain the boundary before calling the answer finished.
