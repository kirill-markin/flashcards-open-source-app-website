---
title: "Common Network Ports: TCP/UDP Chart and Practice Quiz"
description: "Learn common network ports by service, transport, and endpoint role. Practice DNS, DHCP, SNMP, email, and web distinctions with explained answers."
date: "2026-09-25"
image: "/blog/common-network-ports.png"
keywords:
  - "common network ports"
  - "common port numbers"
  - "TCP UDP ports"
  - "SNMP 161 vs 162"
  - "DNS TCP or UDP"
  - "network ports quiz"
---

A DNS reply can arrive at your laptop on port 53024. DNS still uses service port 53; you're looking at the other end of the conversation. That small distinction explains why memorizing a list of common network ports doesn't always help when you open a packet capture.

Learn each association as **service + transport + endpoint role**. For example: DNS, UDP, server receiving a query on port 53. Then reverse the conversation and work out where the reply goes.

The chart below is a beginner selection, followed by an original worksheet you can complete on paper. It isn't the full port registry or a complete certification checklist. If you're studying for an exam, use its current official objectives to decide which additional services you need.

![A cook serving soup through one cafeteria hatch while a diner returns a used plate through a separate opening](/blog/common-network-ports.png)

## Common network ports at a glance

`TCP 53` and `UDP 53` are separate transport-and-port combinations. A service can use both. This chart shows conventional uses, not every registered transport or possible implementation.

| Port / transport | Service or role |
| --- | --- |
| 20 / TCP | FTP active data source |
| 21 / TCP | FTP control |
| 22 / TCP | SSH remote access |
| 23 / TCP | Telnet terminal |
| 25 / TCP | SMTP mail relay |
| 53 / UDP, TCP | DNS |
| 67 / UDP | DHCPv4 server |
| 68 / UDP | DHCPv4 client |
| 80 / TCP | HTTP |
| 110 / TCP | POP3 mail access |
| 123 / UDP | NTP time sync |
| 143 / TCP | IMAP mail access |
| 161 / UDP | SNMP agent |
| 162 / UDP | SNMP notification receiver |
| 443 / TCP, UDP | HTTPS |
| 465 / TCP | Mail submission, implicit TLS |
| 587 / TCP | Mail submission, often STARTTLS |
| 993 / TCP | IMAP, implicit TLS |
| 995 / TCP | POP3, implicit TLS |

Most entries identify a service's receiving port. The FTP 20 entry is different: it identifies the server's conventional **source** port for an active-mode data connection. The sections below explain that exception and the paired ports.

Use the [IANA port registry](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml) to check assignments, then the protocol specification to understand behavior. For example, IANA registers Telnet for TCP and UDP, while [Telnet itself specifies a TCP connection](https://www.rfc-editor.org/rfc/rfc854.html). A registration alone doesn't show what a typical implementation uses.

## Read the two ends before naming the service

A TCP or UDP port helps a host deliver traffic to the right application endpoint. Read it together with the host's IP address and the transport. In a packet, the **source port** belongs to the sending endpoint and the **destination port** belongs to the receiving endpoint. The same endpoint is the source when it sends and the destination when it receives.

Consider this invented direct exchange, with no address or port translation in between:

```text
DNS query, UDP:
laptop:53024  ->  resolver:53

DNS reply, UDP:
resolver:53  ->  laptop:53024
```

The laptop chose 53024 as its temporary, or ephemeral, source port for this exchange. The resolver receives the query at its DNS service port and replies to the client's selected port. **53024 is an example, not another DNS port to memorize.** DNS server access on both UDP and TCP port 53 is specified in [RFC 1035](https://www.rfc-editor.org/rfc/rfc1035.html#section-4.2).

Now read the reply alone. Its destination port is 53024, yet it belongs to the same DNS exchange. Looking only at destination ports would miss the relationship.

This example doesn't mean every client picks a temporary port. DHCPv4 uses a defined client port, and FTP has a separate data connection. Start with the actual protocol and endpoint roles before generalizing.

## The port pairs worth untangling

### DNS can use TCP for ordinary queries

Conventional DNS uses **UDP 53 and TCP 53**. UDP is common for queries, but “TCP is only for zone transfers” is an incorrect rule. A full DNS implementation must support TCP, and a client can choose it before trying UDP. Retrying a truncated UDP response over TCP is another reason you may see it. [RFC 7766 explains DNS transport selection](https://www.rfc-editor.org/rfc/rfc7766.html#section-5).

Port 53 describes conventional DNS here. Encrypted DNS transports have their own specifications and shouldn't be squeezed into the rule “all DNS traffic uses 53.”

### DHCPv4 has a server port and a client port

For a direct client/server exchange, remember **client 68 → server 67**, with the response traveling **server 67 → client 68**, over UDP. These are DHCPv4 roles; don't carry the numbers into DHCPv6. Relays also need separate attention when reading a real capture. [RFC 2131 defines the DHCP ports and delivery rules](https://www.rfc-editor.org/rfc/rfc2131.html#section-4.1).

The useful memory check is “who receives this message?” A server response goes to the client's 68, even though a chart often lists DHCP as simply “67/68.”

### SNMP 161 vs 162 means different receiving jobs

For the usual UDP mapping, an SNMP agent receives management requests on **161**. A notification receiver, often part of the monitoring system, receives traps and informs on **162**. These receiving roles are specified in [RFC 3417](https://www.rfc-editor.org/rfc/rfc3417.html#section-3.2).

Polling means the monitoring station asks the agent for information, such as an interface counter. The reply returns to the endpoint that sent that request. A trap is a separate notification from the agent, so it goes to the notification listener on 162. Calling 162 the “SNMP response port” mixes up those two conversations.

### FTP control and data are separate conversations

An FTP client connects to the server's **TCP 21** control service. In classic active mode, the server initiates the data connection from **TCP 20** to a client-specified listening endpoint. In passive mode, the server supplies a data endpoint and the client connects to it. The passive data destination is not fixed at 20. These connection roles come from [the FTP specification](https://www.rfc-editor.org/rfc/rfc959.html#section-5.2). Active and passive describe who initiates the data connection; either mode can carry an upload or a download.

That makes “FTP = ports 20 and 21” a useful starting association, but an incomplete description of a transfer. A working control connection doesn't establish that the separate data connection can work.

### HTTPS includes a UDP case

HTTPS with HTTP/1.1 or HTTP/2 commonly uses **TCP 443**. HTTP/3 runs over QUIC, which uses UDP, commonly **UDP 443** for HTTPS. HTTP/3 can also be advertised on another UDP port. The [HTTP/3 specification](https://www.rfc-editor.org/rfc/rfc9114.html#section-3) explains this UDP connection and alternative ports; the [HTTPS default is 443](https://www.rfc-editor.org/rfc/rfc9110.html#section-4.2.2).

So a UDP 443 observation is compatible with modern web traffic. It doesn't prove that the traffic is HTTP/3, or that the application is trustworthy.

### Email ports tell you which job is happening

**SMTP relay on 25** moves mail between servers. **Submission on 587** accepts outgoing mail from a user's client, commonly with STARTTLS to upgrade the connection to TLS. **465** is submission with implicit TLS, where TLS starts immediately. See the specifications for [submission versus relay](https://www.rfc-editor.org/rfc/rfc6409.html#section-3.1) and [email over TLS](https://www.rfc-editor.org/rfc/rfc8314.html#section-3).

Reading delivered mail is a different job: [POP3 uses TCP 110](https://www.rfc-editor.org/rfc/rfc1939.html#section-3), and [IMAP uses TCP 143](https://www.rfc-editor.org/rfc/rfc9051.html#section-2.1). Their implicit-TLS counterparts are 995 and 993. A port number alone doesn't show that a STARTTLS upgrade succeeded; check the connection evidence and configuration.

## Network ports quiz: fill in the receiving endpoint

Cover the answers below. For each concrete exchange, write the **service, transport, and receiving endpoint with its port**. For questions about evidence, state what you can and can't conclude. Treat temporary port numbers as supplied examples and assume no address or port translation changes them.

1. A laptop sends a conventional DNS query over UDP from port 54170 to a resolver's standard port. What receives the query? Where should the reply go?
2. The same resolver answers an ordinary DNS query over TCP 53. A classmate says this must be a zone transfer. What should you correct?
3. A DHCPv4 client and server communicate directly on one subnet. Fill both arrows: `client:? → server:?` and `server:? → client:?`. Include the transport.
4. A monitoring station sends an SNMP polling request from UDP 55010 to a switch agent's standard port. Give the request destination and the reply destination.
5. The switch separately sends an SNMP trap to the monitoring system's standard notification listener. What receives it? Would the polling reply in question 4 use the same destination port?
6. An FTP client has a working control connection. The server then advertises passive data port 50112. Which endpoint receives the new data connection, on which transport and port? Is TCP 20 required as that connection's destination?
7. A browser has selected HTTP/3 for an HTTPS endpoint on its default port. What transport and destination port should you expect? Could HTTP/2 HTTPS use the same transport-and-port pair?
8. A mail client is configured to submit outgoing mail using implicit TLS. Which conventional destination port fits? Name the receiving role. Then name the implicit-TLS port it would use to read mail through IMAP.
9. A packet has destination TCP 443. You have no process, handshake, or application data. Can you conclude that it's a safe HTTPS application? State what the number actually tells you.

### Explained answers

1. **DNS, UDP, resolver:53.** The reply goes to **laptop:54170**, from resolver:53. If you gave the reply destination as 53, you kept the service port but lost the direction of the conversation.
2. **DNS, TCP, resolver:53 remains a valid ordinary-query destination.** TCP isn't restricted to zone transfers. The transport alone doesn't identify the DNS operation.
3. **DHCPv4 over UDP: client:68 → server:67; server:67 → client:68.** If you used a temporary client port, you applied the earlier DNS example too broadly.
4. **SNMP over UDP: request to switch:161; reply to monitoring-station:55010.** The agent's polling reply returns to the supplied requester endpoint. Choosing 162 for the reply mixes up a response with a notification.
5. **SNMP, UDP, monitoring-system:162.** This is a trap sent to a notification receiver. Question 4's polling reply goes to 55010. The destination's job changed, even though both messages involve monitoring.
6. **FTP data, TCP, server:50112.** In this passive-mode example, the client initiates the data connection to the advertised server port. TCP 20 isn't its destination. If you answered 21, you identified the control connection rather than the separate data connection.
7. **HTTP/3 over QUIC, UDP, server:443.** [HTTP/2 runs over TCP](https://www.rfc-editor.org/rfc/rfc9113.html#section-2), so its conventional HTTPS pair is TCP 443. Keeping the number but dropping the transport hides the distinction.
8. **Mail submission over TCP to the submission server's 465; IMAP with implicit TLS over TCP to the mailbox server's 993.** Submission sends outgoing mail; IMAP accesses delivered mail. Port 25 would describe the usual SMTP relay role, not the requested implicit-TLS submission service.
9. **No. TCP 443 is the conventional HTTPS association.** It doesn't establish the application, a successful TLS handshake, or the safety of what the application does. Confirm the service configuration and actual connection evidence.

## Use your wrong answers to choose the next exercise

A single score hides different problems. Group your mistakes by what you misread:

- **Questions 1, 3, 4, or 5:** draw both endpoints before writing numbers. Then label each message as a request, reply, or separate notification. This catches the mistake of sending every packet to a service's familiar port.
- **Questions 2, 6, 7, or 8:** keep the qualifying detail in your answer: ordinary DNS query, passive FTP, HTTP/3, or implicit-TLS submission. Those details determine which association applies.
- **Question 9:** separate an observed number from a confirmed application. A packet addressed to TCP 443 gives you a likely service to investigate; it doesn't certify what is running there.

Only make a flashcard for a distinction you keep missing. For example:

```text
Front: An SNMP manager polls from UDP 55220.
Where does the agent's reply go?

Back: To the manager's UDP 55220.
UDP 162 receives notifications, such as traps.
```

Retry the exchange with a different temporary port. If you still answer 55220, you've memorized the example instead of following the reply.

The optional [Common Network Port Numbers flashcards](/catalog/packages/common-network-port-numbers-flashcards/) deck has 88 cards covering foundational concepts and 38 service mappings. It's a general companion, not an exam checklist. For certification study, the [Network+ flashcards guide](/blog/comptia-network-plus-flashcards/) connects recall practice with labs, subnetting, and exam objectives.
