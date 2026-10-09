---
title: "VLSM Practice: Allocate Subnets and Check Your Plan"
description: "Work through VLSM practice with a full address ledger, then catch misaligned networks, overlapping blocks, and host requirements that exceed a parent subnet."
date: "2026-10-09"
image: "/blog/vlsm-practice.png"
keywords:
  - "VLSM practice"
  - "VLSM practice problems"
  - "variable length subnet masking"
  - "VLSM subnet allocation"
  - "overlapping subnets"
  - "subnet alignment"
---

Four LANs need addresses for 90, 40, 12, and 5 interfaces. That's 147 interfaces, but their subnets consume 216 addresses from a `/24`. Each LAN needs its own power-of-two block, with room for its network and broadcast addresses as well as its hosts.

This **VLSM practice** worksheet starts with that allocation, then gives you a broken plan to audit and four fresh problems to solve with the answers covered. You should already be able to calculate an individual subnet; the [IPv4 subnetting practice guide](/blog/ipv4-subnetting-practice/) covers masks, boundaries, broadcasts, and host ranges if those steps still feel slow.

![A cabinetmaker holds a wooden insert above a narrow gap beside three unequal boxes in a drawer](/blog/vlsm-practice.png)

## Size each LAN before choosing its address

**Variable-length subnet masking (VLSM)** uses different subnet masks within the same parent block. A LAN with five addressed interfaces can use a smaller block than one with 90. [Cisco's VLSM guide](https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13788-3.html) explains this approach and recommends allocating the largest subnets first.

All exercises here use conventional IPv4 LANs, with no growth allowance unless a question lists it. Every interface count **includes the gateway interface**. Count it once: 40 interfaces means 39 other interfaces plus one gateway. If a question instead gives end devices *plus* a gateway, add the gateway before sizing the subnet.

For prefix `/p`, the full block contains `2^(32 − p)` addresses. Conventional LAN host capacity is two fewer, excluding the network and directed broadcast addresses. Pick the smallest block whose host capacity meets the requirement:

| Prefix | Mask | Full block | Usable host capacity |
| --- | --- | ---: | ---: |
| `/25` | `255.255.255.128` | 128 | 126 |
| `/26` | `255.255.255.192` | 64 | 62 |
| `/27` | `255.255.255.224` | 32 | 30 |
| `/28` | `255.255.255.240` | 16 | 14 |
| `/29` | `255.255.255.248` | 8 | 6 |
| `/30` | `255.255.255.252` | 4 | 2 |

Six interfaces fit in a `/29`; seven require a `/28`. The gateway uses one of those host addresses, so include it in the requirement rather than subtracting it again from capacity.

The power-of-two blocks follow the prefix representation in [RFC 4632](https://www.rfc-editor.org/rfc/rfc4632.html#section-3.1). Don't apply subtract-two universally: a `/31` point-to-point link uses both addresses as endpoints under [RFC 3021](https://www.rfc-editor.org/rfc/rfc3021.html#section-2.1). These exercises stay with the LAN rules above.

The examples use the documentation blocks reserved by [RFC 5737](https://www.rfc-editor.org/rfc/rfc5737.html#section-3). Treat them as paper allocations.

## Allocate 90, 40, 12, and 5 interfaces

Start with the empty parent `203.0.113.0/24`, which spans `203.0.113.0–203.0.113.255`. Give each LAN one subnet and use the smallest block that fits:

- Office: 90 interfaces → `/25`, consuming 128 addresses.
- Workshop: 40 interfaces → `/26`, consuming 64 addresses.
- Lab: 12 interfaces → `/28`, consuming 16 addresses.
- Monitoring: 5 interfaces → `/29`, consuming 8 addresses.

Allocate from largest to smallest, beginning at the parent's network address. In this `/24`, a `/25` starts at a multiple of 128 in the last octet; a `/26` starts at a multiple of 64; a `/28` at a multiple of 16; and a `/29` at a multiple of 8.

| LAN | Required interfaces | Network | Full last-octet range | Usable host range | Broadcast | Host capacity |
| --- | ---: | --- | --- | --- | --- | ---: |
| Office | 90 | `203.0.113.0/25` | `.0–.127` | `203.0.113.1–203.0.113.126` | `203.0.113.127` | 126 |
| Workshop | 40 | `203.0.113.128/26` | `.128–.191` | `203.0.113.129–203.0.113.190` | `203.0.113.191` | 62 |
| Lab | 12 | `203.0.113.192/28` | `.192–.207` | `203.0.113.193–203.0.113.206` | `203.0.113.207` | 14 |
| Monitoring | 5 | `203.0.113.208/29` | `.208–.215` | `203.0.113.209–203.0.113.214` | `203.0.113.215` | 6 |

Each next network begins one address after the previous broadcast. Those starts also satisfy their own alignment rules: `128 ÷ 64 = 2`, `192 ÷ 16 = 12`, and `208 ÷ 8 = 26`.

The unallocated tail is `.216–.255`, containing `255 − 216 + 1 = 40` addresses. Record it as two aligned blocks:

| Unallocated block | Full range | Total addresses | Host capacity if used as one conventional LAN |
| --- | --- | ---: | ---: |
| `203.0.113.216/29` | `.216–.223` | 8 | 6 |
| `203.0.113.224/27` | `.224–.255` | 32 | 30 |

A new LAN needing 30 interfaces could use the `/27`, leaving the `/29` free. A single new LAN needing 35 interfaces requires a `/26`, which doesn't fit in this tail. Forty unallocated addresses aren't a 40-host subnet.

The assigned blocks total `128 + 64 + 16 + 8 = 216`; adding the unallocated space gives `216 + 40 = 256`, the whole parent. Their host capacities total 208. After the 147 required interfaces, 61 usable addresses remain **inside assigned LANs**. Those addresses belong to their existing subnets; they aren't whole blocks available to allocate to another LAN.

## Audit this deliberately broken plan

Use the same parent, but change Monitoring's requirement to **seven interfaces**. Someone proposes:

| LAN | Required interfaces | Proposed network |
| --- | ---: | --- |
| Office | 90 | `203.0.113.0/25` |
| Workshop | 40 | `203.0.113.160/26` |
| Lab | 12 | `203.0.113.176/28` |
| Monitoring | 7 | `203.0.113.192/29` |

Before reading the repair, write the actual full range of every row. Check four things: enough host capacity, an aligned network address, no shared addresses between LAN blocks, and containment within the parent. Compare **full ranges**, including network and broadcast addresses.

### The /26 doesn't start at .160

Workshop is misaligned. The `/26` boundaries are `.0`, `.64`, `.128`, and `.192`. Applying its mask to `.160` gives **`203.0.113.128/26`**, whose full range is `.128–.191`. Writing `.160/26` doesn't create a new 64-address block from `.160` to `.223`.

Lab's `203.0.113.176/28` is aligned and spans `.176–.191`. It therefore sits **inside Workshop's actual block**. Different written starting addresses don't prove that subnets are separate.

Monitoring's `.192/29` spans `.192–.199`. It is aligned and separate from those blocks, but its capacity is six. Seven interfaces need a `/28`.

Rebuild the allocation from the required sizes. One valid repair is:

| LAN | Repaired network | Full last-octet range | Host capacity |
| --- | --- | --- | ---: |
| Office | `203.0.113.0/25` | `.0–.127` | 126 |
| Workshop | `203.0.113.128/26` | `.128–.191` | 62 |
| Lab | `203.0.113.192/28` | `.192–.207` | 14 |
| Monitoring | `203.0.113.208/28` | `.208–.223` | 14 |

All four pass capacity, alignment, overlap, and containment checks. The blocks consume `128 + 64 + 16 + 16 = 224` addresses; `.224/27` remains unallocated.

Largest-first is a convenient planning method for an empty parent. It doesn't require the largest LAN to occupy the lowest addresses. For the same revised requirements, Office at `.128/25`, Workshop at `.0/26`, Lab at `.64/28`, and Monitoring at `.80/28` would also work. Their full ranges are `.128–.255`, `.0–.63`, `.64–.79`, and `.80–.95`, leaving `.96/27` free. Each block still meets all four checks.

## A larger request can break the whole plan

Return to the original five-interface Monitoring LAN. Now raise Workshop from 40 to 70 interfaces.

The new interface total is `90 + 70 + 12 + 5 = 177`, below 254. But 254 is the host capacity of the **unsplit** `/24`. Each separate LAN must fit its own rounded block:

```text
Office:      90 interfaces → /25 → 128 addresses
Workshop:    70 interfaces → /25 → 128 addresses
Lab:         12 interfaces → /28 →  16 addresses
Monitoring:   5 interfaces → /29 →   8 addresses
                                      ---
                                      280 addresses
```

These requirements exceed the parent's 256 addresses by 24. Even moving every existing allocation won't make them fit in this `/24`. The requirements or available parent space must change.

Checking the rounded total catches this failure before you start writing network addresses. A total that fits still needs an allocation audit, especially when some existing assignments must stay fixed.

## Four VLSM practice problems

Use the same conventional LAN rules. Every count includes the gateway, and no extra growth allowance is required. Keep the answer section covered until you've written your decisions and the ranges that prove them.

1. Inside an empty `192.0.2.0/24`, allocate LANs needing **55, 25, 9, and 2** interfaces. Start largest-first at the lowest address. Record networks, broadcasts, usable ranges, and the remaining space as aligned CIDR blocks.
2. Inside an empty `198.51.100.64/26`, allocate LANs needing **19, 13, and 6** interfaces. Use the same order and starting rule. What aligned block remains, and how many interfaces could a conventional LAN in it support?
3. Inside `198.51.100.0/24`, existing LANs occupy `198.51.100.0/26` and `198.51.100.128/26`. Their assignments must stay fixed. Can you add one LAN needing **70 interfaces**? Show the free ranges and the possible boundaries of the required subnet.
4. The parent is `192.0.2.64/26`. A proposed plan uses `192.0.2.96/27` for **20 interfaces** and `192.0.2.128/28` for **10 interfaces**. Identify which of the four audit checks fails, even though both proposed blocks are aligned and meet their host requirements.

## Answers and the checks behind them

### 1. The allocation consumes 116 addresses

The required sizes are `/26`, `/27`, `/28`, and `/30`: host capacities 62, 30, 14, and 2.

| Required interfaces | Network | Usable host range | Broadcast |
| ---: | --- | --- | --- |
| 55 | `192.0.2.0/26` | `192.0.2.1–192.0.2.62` | `192.0.2.63` |
| 25 | `192.0.2.64/27` | `192.0.2.65–192.0.2.94` | `192.0.2.95` |
| 9 | `192.0.2.96/28` | `192.0.2.97–192.0.2.110` | `192.0.2.111` |
| 2 | `192.0.2.112/30` | `192.0.2.113–192.0.2.114` | `192.0.2.115` |

The full blocks contain `64 + 32 + 16 + 4 = 116` addresses. Their network starts are multiples of their sizes, their ranges don't overlap, and all stay inside the parent.

The 140 remaining addresses, `.116–.255`, split into `192.0.2.116/30` (`.116–.119`), `192.0.2.120/29` (`.120–.127`), and `192.0.2.128/25` (`.128–.255`). Check the ledger: `116 + 4 + 8 + 128 = 256`.

### 2. Keep the smaller parent's endpoints

The parent spans `.64–.127`. The allocation is:

| Required interfaces | Network | Usable host range | Broadcast |
| ---: | --- | --- | --- |
| 19 | `198.51.100.64/27` | `198.51.100.65–198.51.100.94` | `198.51.100.95` |
| 13 | `198.51.100.96/28` | `198.51.100.97–198.51.100.110` | `198.51.100.111` |
| 6 | `198.51.100.112/29` | `198.51.100.113–198.51.100.118` | `198.51.100.119` |

`32 + 16 + 8 = 56` addresses are assigned. The remaining **`198.51.100.120/29`** spans `.120–.127`, containing eight addresses with capacity for six interfaces. The ledger totals 64 addresses, and no allocation escapes the parent's `.127` endpoint.

### 3. There are 128 free addresses, but no free /25

The free ranges are `.64–.127` and `.192–.255`, each 64 addresses long. Seventy interfaces require a `/25` with 126 host addresses.

Inside this parent, a `/25` can start only at `.0` or `.128`. The `.0–.127` candidate overlaps the first fixed LAN; the `.128–.255` candidate overlaps the second. Starting at `.64` would be misaligned. Joining the two separate free ranges wouldn't create one subnet either.

The new LAN **cannot fit while those assignments stay fixed**. If renumbering were allowed, the two `/26` LANs could occupy `.0–.127` together and leave `.128/25` free. Fixed assignments are the constraint that changes the answer here.

### 4. The second block is outside the parent

`192.0.2.96/27` spans `.96–.127`, inside the parent's `.64–.127` range. Its capacity is 30, enough for 20 interfaces.

`192.0.2.128/28` spans `.128–.143`. Its capacity is 14, enough for 10, and it doesn't overlap the first LAN. But **containment fails**: the entire block starts beyond the parent's broadcast address. A correctly sized and aligned subnet can still belong to the wrong parent.

## Save the error, then change the numbers

If you missed a problem, recalculate it before saving a flashcard. Keep the prompt focused on the decision you missed:

| Front | Back |
| --- | --- |
| What should you sum to check whether several LANs fit in a parent? | Each LAN's full rounded block size, including its network and broadcast addresses. |
| Can a `/26` inside a `/24` start at last octet 160? | No. Its boundaries are multiples of 64; `.160/26` belongs to the block starting at `.128`. |
| Does enough total free address space prove a new subnet fits? | No. The required aligned, contiguous block must be free and contained in the parent. |

The [guide to better flashcards](/blog/how-to-make-better-flashcards/) helps keep error-repair prompts small enough to grade. For a broader networking study plan, the [Network+ flashcards guide](/blog/comptia-network-plus-flashcards/) separates facts to review from calculations and labs to practice.

For another round, change Workshop in the original worked ledger to **62 interfaces**, then **63**, leaving the other requirements unchanged. Write the rounded sizes before choosing any addresses.

Check your result afterward: 62 still fits the existing `/26`, so the allocation consumes 216 addresses. At 63, Workshop needs a `/25`; the total jumps to 280 and the four LANs cannot fit in the `/24`. One extra interface can change the feasibility of the whole plan.
