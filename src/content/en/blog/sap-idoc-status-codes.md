---
title: "SAP IDoc Status Codes: Understand the Flow Before Memorizing"
description: "Learn eight SAP IDoc status codes with a two-system flow diagram, worked diagnostic examples, and practice answers for classic ALE/tRFC in S/4HANA 2025 FPS01."
date: "2026-11-01"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/ac180d6f4e7c4e45149fe31d3a1bc49ce8c6ae5442a9d04f4848bf9aa14656ac.webp"
keywords:
  - "SAP IDoc status codes"
  - "IDoc status 03 vs 12"
  - "IDoc status 51 vs 63"
  - "IDoc status 53"
  - "IDoc status 64"
  - "SAP ALE tRFC status"
  - "inbound and outbound IDoc status"
---

A sender IDoc at **03** and its matching receiver IDoc at **51** can both be telling the truth. The sender has handed its IDoc to tRFC; the receiver has recorded that the application document was not posted. Each status describes a different part of the flow on a separate local IDoc. To interpret the number, you need its system and direction.

This guide helps SAP learners and junior integration specialists read eight IDoc status codes and choose the next observation. It covers **classic on-premise ALE with tRFC and direct inbound application processing in SAP S/4HANA® 2025 FPS01 software**. The technical sources are SAP’s *IDoc Interface/ALE* documentation for **ABAP® platform 2025 FPS01, version 202510.001, build 915**. It is a focused learning guide, rather than an exhaustive status reference or an operational repair procedure.

*Independent, unofficial guide by Kirill Markin, with a companion deck contributed by Open Study Contributor. AI assisted the explanations, original diagram, and exercises; technical facts were checked against the version-pinned SAP sources linked below. No live SAP system was tested. This material is not affiliated with, sponsored by, or endorsed by SAP SE or its affiliates.*

## First locate the status in the flow

An IDoc carries application data in segments. Its status information records processing and errors, and SAP documents that this information is transferred separately from the IDoc itself. Read the sender’s and receiver’s status records in their own context. See [IDoc Structure][structure].

In this guide, **tRFC** means transactional remote function call. It carries the IDoc between systems; the receiving application’s posting is a later stage. SAP’s [Distribution Using Message Types][distribution] describes those separate stages.

The diagram below follows one sender-to-receiver relationship. **A-100 and B-900 are invented local IDoc labels**, not a shared IDoc number. The arrows show processing boundaries. The status annotations are examples of evidence at those boundaries, not a required sequence.

```text
SYSTEM A — SENDER
  Sending application
          |
  ALE outbound / dispatch
  Local outbound IDoc: A-100
    03: handed to tRFC
    12: Dispatch OK, if confirmed by dispatch check
          |
          v
       tRFC communication
          |
          | transmission to receiving system
          v
SYSTEM B — RECEIVER
  Local inbound IDoc: B-900, stored in database
          |
          | Application transfer
          |   64: ready for transfer
          |   63: transfer error
          v
  Direct inbound application processing
    51: application document not posted
    OR
    53: application document posted

The labels show possible status evidence, not steps
that every IDoc must pass through. Sender 03 and 12
do not report B-900’s application-posting result.
```

SAP’s [Distribution Using Message Types][distribution] separates communication from receiver storage and application posting. Transfer to the receiving application can happen immediately or later in background processing. An IDoc being stored at the receiver therefore does not, by itself, establish that its application document was posted.

Successful dispatch information is not automatically returned to the ALE communication layer. SAP describes a separate dispatch check that can establish **12**. A successful transmission therefore does not require an automatic **03 → 12** update, and the sender’s status cannot tell you the receiver’s posting result. Likewise, **64, 63, 51, and 53** identify different receiver states; they are not one required progression. See [Setting Dispatch Status to Dispatch OK][dispatch].

## Eight codes, with the next question beside each

Read these meanings within the flow and release stated above. **TID** means transaction ID: the identifier available in the tRFC-port status display at 03. The last column gives the next evidence to inspect. Corrective decisions need the actual error and system context.

| Code | Direction | Meaning in this scope | Next observation |
| --- | --- | --- | --- |
| **03** | Outbound | The IDoc has been handed to tRFC. | Read the TID and inspect the corresponding tRFC-call state when receiver arrival is unclear. |
| **12** | Outbound | The documented dispatch check confirmed sending to the receiving SAP system: Dispatch OK. | Identify the receiver IDoc and inspect its application evidence if the question concerns posting. |
| **64** | Inbound | Ready for transfer to the application. | Establish whether transfer is immediate or handled in background processing. |
| **63** | Inbound | Error passing the IDoc to the application. | Read the actual error message and available status long text. |
| **51** | Inbound | The application document was not posted. | Read application error detail in status records and an application log if one exists. |
| **53** | Inbound | The application document was posted in this direct inbound context. | Inspect an already linked application object, if present, for a specific business-document question. |
| **69** | Inbound history | Identifies an edited IDoc. | Read its history and distinguish the edited IDoc from the retained original. |
| **70** | Inbound history | Identifies the retained original of an edited IDoc, saved as a new IDoc record. | Keep that original distinct from the edited record. |

The definitions come from [Check the tRFC Status][trfc] for 03, [Dispatch OK][dispatch] for 12, [Posting IDocs in Parallel][parallel] for 64, [Error Handling][errors] for 51/63, [Testing Inbound Processing][inbound] for 51/53, and [IDoc Display][display] for 69/70, TIDs, and the conditional logs and object links. The inbound test documentation supplies the posting definitions used here; this guide uses those meanings for observation, without a test-tool procedure.

For **69 and 70**, the learning task ends at recognizing editing history. Neither number alone supplies a reason to change or process anything.

## Collect evidence before naming a cause

Start an observation note with **system, client/context, local IDoc number, and direction**. Then record the sender, recipient, and IDoc type from the control record. When comparing both sides, identify each local IDoc separately. [IDoc Display][display] describes the control, data, and status records available in the individual display.

For a selected IDoc, read the numeric status and its text, then the relevant status records and available long text. Traffic-light assignments can be customized, so a remembered color is a weak substitute for the code and message. See [Edit Status Groups][groups].

A useful observation note has room for the following:

```text
System / client / local IDoc / direction:
Sender and recipient / IDoc type:
Relevant numeric status and message:
Available status long text:
TID and corresponding tRFC-call evidence, if relevant:
Receiver IDoc evidence, if identified:
Application log or linked object, if present:
Question still unanswered:
```

Use a bounded monitor selection. SAP’s [Status Monitor for ALE Messages][monitor] documents filters such as IDoc number, dates, status, partner system, and message type; it recommends change date, status, and message type together for performance. From a grouped result, inspect the individual IDoc to see its records. **BD87 also supports manual processing**, so an observation exercise must stay within display functions.

An application-log link depends on the application having written a log. An application object must already be linked to appear in the documented object relationships. If either link is missing, record that limit and inspect the available status records: they can also contain application errors. See [IDoc Display][display] and [the inbound status explanation][inbound].

## Worked examples: what the code establishes

These are constructed teaching cases, with invented labels and no claimed production results.

![A courier checks his delivery receipt while a receiving clerk inspects the parcel beside a separate notebook.](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/ac180d6f4e7c4e45149fe31d3a1bc49ce8c6ae5442a9d04f4848bf9aa14656ac.webp)

### Sender 03, receiver not yet identified

You have outbound A-100 at **03**. A colleague says, “The receiving document must already be posted.” Your receiver search has not identified a matching inbound IDoc.

**What is established:** A-100 reached the tRFC handoff. SAP explicitly describes a sender at 03 whose IDoc has not yet arrived at the receiving system because the tRFC call has not executed. The number supplies no receiver posting result.

**Next observation:** read the TID from the tRFC-port/03 status display. Inspect the corresponding tRFC-call state in **SM58**, using the relevant selection context. Record what you find and keep receiver identification as an open question. A search that found no matching receiver IDoc has not, by itself, established that nothing arrived. This observation combines [Check the tRFC Status][trfc] with the TID detail in [IDoc Display][display].

### Sender 12, receiver 51

For this case, the local records have been correlated: sender A-200 is at **12**, while receiver B-400 is at **51**.

**What is established:** dispatch was confirmed on the sender; the application document was not posted on the receiver. Those statements are compatible. Transport and application posting are separate stages, as described in [Dispatch OK][dispatch], [Distribution Using Message Types][distribution], and [Error Handling][errors].

**Next observation:** inspect B-400’s error message in the status records and any available long text. Read the application log if one was written and is available. The number 51 alone does not identify a particular missing field, master-data issue, or other system-specific cause. Give the responsible operator the receiver identity, actual message, and context. The available displays are described in [IDoc Display][display] and [the status monitor][monitor].

### Receiver 64, with timing still unknown

Inbound B-500 is at **64**. The only supplied description is “It’s waiting.”

**What is established:** the IDoc is ready for application transfer. SAP documents immediate and background transfer arrangements. This number alone does not establish that the wait is a fault. See [Posting IDocs in Parallel][parallel] and [Transfer Control][distribution].

**Next observation:** establish whether this IDoc is expected to pass to the application immediately or through background processing. For background processing, identify the responsible owner and record the IDoc and timing context for them. This gives the owner evidence to assess the wait; the exercise ends before choosing or executing a job.

### Receiver 53, with a broader business question

Inbound B-600 is at **53**. Someone asks whether a particular business document now has the expected content.

**What is established:** the application document was posted in this direct inbound context. To check its expected content, you still need to inspect the particular application document.

**Next observation:** inspect an already linked application object if one is available, keeping the actual business question in view. The [posting definition][inbound] and [object relationships][display] support those two distinct observations. Status 53 alone is not a guarantee that every wider business objective has been completed.

## Practice without the table

Answer from memory before reading the explanations. Include the system, direction, or next observation wherever the question needs it.

1. Sender A-700 has 03 and its correlated receiver B-800 has 51. Are the records contradictory?
2. Sender A-710 has 12. Does this establish receiver application posting? Where would you look next?
3. Which inbound code explicitly identifies an error passing the IDoc to the application: 51 or 63? What should you read before naming a cause?
4. Receiver B-810 has 64. What processing context is missing before you label the wait an error?
5. Receiver B-820 has 51 but no application-log link. What evidence can still contain application error detail?
6. Receiver B-830 has 53. What does that establish, and what could help answer a question about its particular application document?
7. You encounter inbound records at 69 and 70. Which identifies the edited IDoc, and which identifies the retained original?
8. A monitor shows a reassuring traffic-light color. What should you read before interpreting the processing result?

### Answers and explanations

1. **No.** Sender 03 records tRFC handoff; receiver 51 records that the application document was not posted. They belong to different local IDocs. Inspect the receiver’s error evidence to investigate non-posting; the sender number does not explain its cause. Sources: [tRFC status][trfc], [Error Handling][errors].
2. **No.** Status 12 confirms dispatch in the documented check. Inspect the receiver IDoc and its application evidence to establish posting. A sender dispatch result cannot supply that separate application result. Sources: [Dispatch OK][dispatch], [Transfer Control][distribution].
3. **63.** It identifies the error in passing the IDoc to the application. Status 51 identifies an application document that was not posted. Read the actual error message and available status long text before assigning a cause. Sources: [Error Handling][errors], [status long text][monitor].
4. **Immediate versus background transfer.** Establish the arrangement and relevant process ownership. Status 64 means ready for transfer; it does not, by itself, prove a processing fault. Sources: [background processing][parallel], [Transfer Control][distribution].
5. **The status records, including available long text.** Application errors can be recorded there. An application-log link is conditional on the application writing a log, so its absence does not erase those other records. Sources: [inbound error display][inbound], [IDoc Display][display].
6. **Application document posted, within this direct inbound scope.** An already linked application object, if present, can help answer the specific document question. Keep the recorded posting result separate from a claim that all business objectives are complete. Sources: [posting status][inbound], [object relationships][display].
7. **69 identifies the edited IDoc; 70 identifies the retained original saved as a new IDoc record.** Inspect the history and relationship between them. Recognition of either status is not a processing instruction. Source: [IDoc Display][display].
8. **The numeric status and its message.** Traffic-light assignments can be customized. Use the individual status records and available long text when the question needs more detail. Sources: [status groups][groups], [individual display and long text][monitor].

## Practise the distinction as well as the number

Draw the two systems from memory, then place 03 and 12 beside the sender and 64, 63, 51, and 53 beside the receiver. Explain each label without drawing a mandatory chain through the codes. Keep 69/70 in a separate editing-history pair.

When you miss a question, identify the kind of miss. Forgetting “63 means error passing to application” needs a short definition prompt. Treating sender 12 as receiver posting needs a boundary question. Those are different retrieval tasks; a single large “explain all IDoc statuses” card hides the difference. The guide to [making better flashcards](/blog/how-to-make-better-flashcards/) gives more examples of focused front-and-back questions.

The companion [English SAP IDoc status-code deck](/catalog/packages/sap-idoc-status-codes/) offers practice with these eight meanings, sender/receiver distinctions, and nondestructive next observations. All answers needed for the exercises above are already on this page.

Regular recall practice makes you produce an answer before checking it. Spaced review returns to that material across later sessions; research on [retrieval practice](https://doi.org/10.1126/science.1152408) and [spacing](https://doi.org/10.1111/j.1467-9280.2008.02209.x) supports their use for longer-term retention. Neither provides a guarantee of permanent memory or one fixed review schedule for everyone. Practise explaining the evidence boundary, then use system-specific documentation and the responsible operator’s judgment for actual corrective decisions.

*SAP, SAP S/4HANA, and ABAP are trademarks or registered trademarks of SAP SE or its affiliates in Germany and in other countries.*

[structure]: https://help.sap.com/docs/ABAP_PLATFORM_NEW/8f3819b0c24149b5959ab31070b64058/4b38625bad7f74fee10000000a421937.html?version=202510.001&locale=en-US
[distribution]: https://help.sap.com/docs/ABAP_PLATFORM_NEW/8f3819b0c24149b5959ab31070b64058/324f367da3c04aa78dca396d50fadd99.html?version=202510.001&locale=en-US
[display]: https://help.sap.com/docs/ABAP_PLATFORM_NEW/8f3819b0c24149b5959ab31070b64058/4b4c78b74a712597e10000000a42189b.html?version=202510.001&locale=en-US
[trfc]: https://help.sap.com/docs/ABAP_PLATFORM_NEW/8f3819b0c24149b5959ab31070b64058/4ab7bfd56dbe6d8be10000000a42189c.html?version=202510.001&locale=en-US
[dispatch]: https://help.sap.com/docs/ABAP_PLATFORM_NEW/8f3819b0c24149b5959ab31070b64058/4abb49dd479926c4e10000000a42189b.html?version=202510.001&locale=en-US
[errors]: https://help.sap.com/docs/ABAP_PLATFORM_NEW/8f3819b0c24149b5959ab31070b64058/4ab0b2f4a19b6d83e10000000a42189c.html?version=202510.001&locale=en-US
[parallel]: https://help.sap.com/docs/ABAP_PLATFORM_NEW/8f3819b0c24149b5959ab31070b64058/4ab38b7f549a6d8ce10000000a42189c.html?version=202510.001&locale=en-US
[inbound]: https://help.sap.com/docs/ABAP_PLATFORM_NEW/8f3819b0c24149b5959ab31070b64058/4b4c3bba3b71265ce10000000a421937.html?version=202510.001&locale=en-US
[monitor]: https://help.sap.com/docs/ABAP_PLATFORM_NEW/8f3819b0c24149b5959ab31070b64058/4ab7c1736dbe6d8be10000000a42189c.html?version=202510.001&locale=en-US
[groups]: https://help.sap.com/docs/ABAP_PLATFORM_NEW/8f3819b0c24149b5959ab31070b64058/4ab7c04d6dbe6d8be10000000a42189c.html?version=202510.001&locale=en-US
