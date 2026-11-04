---
title: "Longest Prefix Match Practice: Choose the Installed Route"
description: "Practice longest prefix matching with an installed routing table, eight destinations, worked ranges, and a clear distinction from administrative distance."
date: "2026-11-04"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/f77efbef201f19eb38d69d9d2c1e6f1f41454c6fc09117382b65a16f28fee402.webp"
keywords:
  - "longest prefix match practice"
  - "routing table practice"
  - "longest prefix match vs administrative distance"
  - "IPv4 forwarding table"
---

A packet for `10.42.12.173` matches all seven routes in the table below. The default route has administrative distance (AD) 1. The host route has AD 200. Which next hop gets the packet?

Work it out before looking at the answers. This **longest prefix match practice** set uses one installed routing table and eight destination addresses. Write every matching row, then circle the chosen prefix and next hop. That extra line of working catches guesses that happen to land on the right answer.

![A man selects the smallest of three nested embroidery hoops surrounding a tear in olive fabric](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/f77efbef201f19eb38d69d9d2c1e6f1f41454c6fc09117382b65a16f28fee402.webp)

## Start with what is already installed

For ordinary destination-based forwarding, choose the matching installed prefix with the largest prefix length. A `/25` is more specific than a `/24`; a `/32` matches one address. The prefix must contain the destination before its length matters. [RFC 1812's matching rules](https://www.rfc-editor.org/rfc/rfc1812.html#section-5.2.4.3) describe that sequence.

Assume the following routes are installed and available for forwarding. All next hops are resolved. AD values follow Cisco conventions. The labels `NH-A` through `NH-G` stand for different next hops, rather than literal IP addresses. Ignore policy routing, separate routing tables, and equal-cost multipath. This is a paper worksheet, not router command output.

| Row | Installed prefix | Source | Administrative distance | Next hop |
| --- | --- | --- | ---: | --- |
| A | `0.0.0.0/0` | Static | 1 | NH-A |
| B | `10.0.0.0/8` | Static | 1 | NH-B |
| C | `10.42.0.0/16` | OSPF | 110 | NH-C |
| D | `10.42.8.0/21` | OSPF | 110 | NH-D |
| E | `10.42.12.0/24` | OSPF | 110 | NH-E |
| F | `10.42.12.128/25` | Static, configured AD | 200 | NH-F |
| G | `10.42.12.173/32` | Static, configured AD | 200 | NH-G |

Keep this table unchanged unless a question explicitly removes a row. Each question starts independently from this original table.

## Find the range before comparing lengths

The awkward boundary here is row D. A `/21` has mask `255.255.248.0`. Third-octet blocks advance by `256 − 248 = 8`, so this block covers third octets `8–15`, with every fourth-octet value included.

| Row | Full matching range, inclusive |
| --- | --- |
| A | Every IPv4 destination |
| B | `10.0.0.0–10.255.255.255` |
| C | `10.42.0.0–10.42.255.255` |
| D | `10.42.8.0–10.42.15.255` |
| E | `10.42.12.0–10.42.12.255` |
| F | `10.42.12.128–10.42.12.255` |
| G | `10.42.12.173` only |

For F, the fourth octet starts at `128` and runs through `255`. For G, all 32 bits are fixed. Write those endpoints on paper if the nested prefixes start to blur together.

These are prefix membership ranges. Don't subtract a network address and broadcast address as you would when counting traditional LAN hosts. If calculating boundaries is the part that slows you down, the [IPv4 subnetting practice worksheet](/blog/ipv4-subnetting-practice/) works through that prerequisite separately.

## Eight routing table questions

For each destination, give **all matching rows, the chosen prefix, and its next hop**. Cover the answer section while you work.

1. `10.42.12.173`
2. `10.42.12.174`
3. `10.42.12.127`
4. `10.42.15.200`
5. `10.42.16.1`
6. `10.43.12.173`
7. `198.51.100.40`. Then remove default row A and answer again.
8. `10.42.12.200`, after row F is withdrawn. Assume no replacement for F is installed; all other rows remain.

For question 2, also explain whether row B's lower administrative distance changes your answer. For question 8, name the row that would have won before the withdrawal.

## Answers with every match shown

### 1. The exact host route wins

**Matches: A, B, C, D, E, F, G. Choose `10.42.12.173/32`, next hop NH-G.**

The address falls inside every nested range, including F's `.128–.255` block. G fixes the complete destination address. Its `/32` is longer than `/25`, `/24`, `/21`, `/16`, `/8`, and `/0`.

A next hop of NH-F would overlook an installed, matching host route.

### 2. One address later, the /32 stops matching

**Matches: A, B, C, D, E, F. Choose `10.42.12.128/25`, next hop NH-F.**

G contains `.173` alone, so `.174` misses it. F contains `.174` because `128 ≤ 174 ≤ 255`. Among the six remaining matches, `/25` is longest. Row B's AD 1 doesn't change this installed-prefix lookup; the answer remains NH-F even though F's AD is 200.

### 3. .127 falls just below the /25

**Matches: A, B, C, D, E. Choose `10.42.12.0/24`, next hop NH-E.**

F begins at `.128`, and `127 < 128`. E still contains `.127`, so `/24` wins. Reading only the first three octets would wrongly include F. The fourth-octet boundary is the deciding calculation here.

### 4. The /21 includes the whole third-octet block

**Matches: A, B, C, D. Choose `10.42.8.0/21`, next hop NH-D.**

`10.42.15.200` lies between `10.42.8.0` and `10.42.15.255`. E and F require third octet `12`; G requires its exact address. The `15` in this destination is still inside D's `8–15` block.

### 5. Crossing into 16 leaves the /21

**Matches: A, B, C. Choose `10.42.0.0/16`, next hop NH-C.**

D ends at `10.42.15.255`. The destination `10.42.16.1` is beyond that endpoint but remains inside C's range. A larger third-octet value doesn't mean a longer prefix match. Check membership against the written boundaries.

### 6. The familiar ending doesn't make a match

**Matches: A, B. Choose `10.0.0.0/8`, next hop NH-B.**

`10.43.12.173` has the same last two octets as G, but its second octet is `43`. C through G require `10.42`. Matching a suffix contributes nothing: the network bits must match from the beginning of the address.

### 7. Default, then no route

**Original table: A only. Choose `0.0.0.0/0`, next hop NH-A.**

Every nondefault row starts with `10`; this destination starts with `198`. With A removed, **no row matches and there is no next hop in this table**. Under the worksheet's assumptions, the router drops the packet. Don't invent a route that the question doesn't supply.

### 8. Withdrawal exposes the remaining /24

**After F is withdrawn: matches A, B, C, D, E. Choose `10.42.12.0/24`, next hop NH-E.**

G never matched `.200`. Before withdrawal, F would have matched and won with `/25`. Once F disappears, E is the longest remaining match. Removing one row doesn't remove the broader routes containing its range.

## Where administrative distance belongs

Suppose OSPF offers `10.42.12.0/24` with AD 110 and a configured static route has AD 200 for **that same prefix**. With both candidates otherwise valid, the lower AD favors the OSPF route for installation. [Cisco's administrative distance guide](https://www.cisco.com/c/en/us/support/docs/ip/border-gateway-protocol-bgp/15986-admin-distance.html) explains this comparison between sources before forwarding.

Row F is a different prefix, `/25`, so it can coexist with E's `/24`. Forwarding then uses the longest matching installed prefix. Don't sort this worksheet's rows by AD or compare their protocol metrics for each packet.

After checking your answers, close the page and retry the `.127`/`.174` pair. Then explain why D matches question 4 but not question 5. For more fresh exercises, [Kurose and Ross's interactive longest-prefix problems](https://gaia.cs.umass.edu/kurose_ross/interactive/longestprefix.php/index.php) use shorter binary addresses to practice the same matching decision.

*AI tools assisted substantially with research, writing, editing, and construction of these original exercises. Prefix ranges and every answer variant were checked with Python's `ipaddress` module. No router or simulator was tested, and the article has not been reviewed by a human networking expert. The illustration is AI-generated.*
