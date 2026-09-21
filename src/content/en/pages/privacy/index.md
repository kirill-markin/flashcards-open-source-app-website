---
title: Privacy Policy
description: Privacy policy for Nibomo.
slug: privacy
sections:
  - type: legal_page
    lastUpdated: September 2026
---
## Operator and Scope

The hosted Nibomo service is operated by SAMO DANNI EOOD, company ID 207395566, VAT BG207395566, registered address bulv. Maritza 154, entrance D, floor 6 #14, 4018, Plovdiv, Bulgaria. Nibomo was created by Kirill Markin.

This policy applies to the hosted website, apps, API, and MCP service operated by us. A self-hosted instance is controlled by its operator, who is responsible for its privacy practices.

## Age

The hosted service is for people aged 13 or older. If the law where you live sets a higher minimum age for using an online service or consenting to data processing, that higher age applies. If you are under 18, you must have permission from a parent or legal guardian.

## Data We Process

Depending on how you use the hosted service, we process:

- account and authentication data, including your email address, internal user identifiers, login records, and authentication tokens;
- learning and workspace data, including cards, decks, settings, workspace memberships, review history, and sync metadata;
- files and media you upload or create, including images and temporary upload data;
- optional AI data, including prompts, chat history, card or workspace context, files and images included in a request, dictated audio, transcripts, model responses, and tool activity;
- support and feedback data, including messages, your contact email when supplied, app version, platform, locale, and related status information;
- operational and security data, including request identifiers, timestamps, IP address, user agent, route, response status, app version, device or platform details, and sanitized error diagnostics; and
- website and in-app product usage data described in the Analytics and Product Analytics sections below.

An email address is required to create and sign in to a hosted account. Without it, we cannot provide email authentication or account-based synchronization. Limited guest or local features may be available without a signed-in account.

## Purposes and Legal Bases

We process account, workspace, review, file, and requested AI data as necessary to provide the hosted service and perform our contract with you. We process support requests to respond to you and provide the requested assistance.

We process limited analytics, security, diagnostic, and service-improvement data for our legitimate interests in understanding use, preventing abuse, keeping the service secure, and fixing failures. We balance those interests against your rights and minimize or redact diagnostic data where practical. We may also process data when necessary to comply with a legal obligation or to establish, exercise, or defend legal claims. Where applicable law requires consent for a specific activity, we will rely on consent and you may withdraw it at any time.

We do not sell your personal data or use it for targeted advertising.

## Analytics and Cookies

The marketing website uses Vercel Web Analytics to measure page views and selected site click events. It operates without analytics cookies. For page views, Vercel can receive the event time, page URL and filtered query parameters, referrer, approximate location, browser, operating system, and device type. Our custom click events include limited properties such as locale, platform, link placement, or interaction type. We do not intentionally include names, email addresses, card content, or account identifiers in these events. Vercel aggregates the data and does not associate a data point with an individual or IP address; its daily visitor hash is discarded after 24 hours.

Separately, catalog install links send a click event to our own product analytics collector, with the public package version identifier, page interface language, browser device language, link placement, source category, and device category. This collector does not infer country from the click. These website click events are suppressed when the browser exposes Global Privacy Control or Do Not Track.

The hosted web app uses strictly necessary cookies such as `otp_session`, `session`, `refresh`, and `logged_in` to complete authentication, maintain a session, refresh access, and show signed-in state. Disabling these cookies prevents the browser login flow from working.

The hosted web app also sets one first-party analytics cookie, `analytics_visitor`, on the product domain. It holds a random visitor identifier, can be read by our own scripts in the browser, and expires after 13 months. We use it to recognize the same browser across visits, so product-usage events show a returning visitor instead of a new one every time. It is not strictly necessary. Where consent is required, including the EU/EEA and the UK, we set it only after you agree, and you can withdraw that consent later in the web app settings, after which the cookie is no longer used. The events themselves are kept while we need them for the purposes described in this policy.

## Product Analytics

The hosted web, iOS, and Android apps send us product-usage events. Those events go to our own infrastructure and are stored in our own database; we do not use a third-party analytics provider for them.

Events describe screens, review-session duration and counts, and whether actions succeed or fail. They can include installation and session identifiers and, where applicable, workspace and account identifiers. They do not include free text, card or deck content, or your email address.

Where supported by the client version, the interface language is captured when each event occurs, before offline queuing. Device language is separate and can differ from the interface language. Installation profiles hold current technical context, including platform, app and operating system versions, device language, and timezone, when supplied by the client. Some technical context also remains on individual events for compatibility. Older clients or events may lack interface language; we do not infer missing values from device language or timezone.

For audience analysis, we estimate the connection country from the IP address received by our API gateway for eligible direct app requests, at most once per installation per UTC day when it connects. We look up the address in a MaxMind GeoLite Country database held in our own AWS infrastructure. The address is processed in request memory, is not stored in product analytics, and is not sent to MaxMind. Our configured API Gateway access logs omit the raw IP address; network infrastructure still processes IP addresses to handle requests. Country is approximate, may be unknown or affected by a VPN, and does not identify residence, nationality, or precise location. Server relays, AI clients, and catalog-click requests do not supply installation country. We do not apply upload-time country to earlier offline events.

Country history consists of sparse observations, extending a period when the sampled country is unchanged and starting another when it changes. The period bounds do not prove daily activity or continuous presence between observations. Feedback separately records the connection country when the submission is first accepted, not when an offline draft was created.

This product includes GeoLite data created by MaxMind, available from [MaxMind](https://www.maxmind.com).

Withdrawing the analytics cookie consent described above stops the visitor identifier; the events themselves are still collected, and while you are signed in they remain linked to your account. There is no separate setting that turns in-app product-usage events off. Account deletion removes associated installation profiles and changes retained event identifiers and context as described in the Retention and Deletion section.

## Hosted AI and External AI Clients

OpenAI is the AI provider configured for hosted chat, transcription, and image-generation features. When you choose those features, we send OpenAI the request data needed to perform them, which may include your prompt, relevant chat and workspace context, attachments or images, dictated audio, and a pseudonymous safety identifier. Hosted text requests use `store: false`, which disables storage of response objects for later retrieval. Because these requests also use prompt caching, OpenAI may retain encrypted cache application state for up to 24 hours. Under OpenAI's current API controls, applicable abuse-monitoring logs may be retained for up to 30 days, while the transcription endpoint states that it retains neither abuse-monitoring content nor application state. OpenAI does not use API data to train its models unless the account holder explicitly opts in.

Hosted AI requests are also observed through Langfuse Cloud for debugging and service-quality analysis. Langfuse traces can include prompts, model responses, tool activity, user, workspace and session identifiers, and operational metadata. The implementation masks email addresses and secret-looking fields; custom transcription traces exclude raw audio bytes and attachment data.

When you connect Nibomo to an external AI client through the remote MCP service or Agent API, the data you ask that client to retrieve is also processed by the client and its AI or model provider. That separate processing is controlled by the client operator and governed by its terms and privacy policy.

## Processors and Recipients

We use the following service-provider categories for the hosted service:

- Amazon Web Services (AWS) for hosting, Cognito authentication, Postgres, file storage, backups, and operational logs;
- Resend for transactional authentication emails;
- OpenAI for optional hosted AI requests;
- Langfuse Cloud for hosted AI observability;
- Sentry for sanitized error and diagnostic reporting when enabled in the relevant hosted service or app build;
- Vercel for the marketing website and its cookie-free Web Analytics; and
- Cloudflare for DNS and domain management. Current Nibomo DNS records are DNS-only, so Cloudflare does not proxy hosted website or app HTTP traffic.

Data can also be disclosed to other members of a shared workspace according to the service's collaboration features, to an external client you authorize, to professional advisers under confidentiality duties, or to public authorities when disclosure is legally required.

## International Transfers

The primary hosted application runs in AWS's EU infrastructure. The configured Resend email region, Sentry data region, and Langfuse endpoint are also in Europe. Some providers, including OpenAI and Vercel, may process data outside your country or the European Economic Area. Where required, we use applicable adequacy decisions, data-processing agreements, and Standard Contractual Clauses or equivalent safeguards for those transfers.

## Retention and Deletion

- Account and hosted workspace data are kept while your account or the relevant shared workspace remains active. Account deletion removes your current account data, credentials, memberships, and sole-member workspaces from the live database. Content in a workspace that still has other members remains available to those members.
- Product analytics events remain after account deletion. For events linked to your account and linked guest identities, we replace account identifiers with a random value, remove identity links, and clear installation, session, workspace, request, device-model, operating-system, device-language, interface-language, timezone, and country fields. Associated installation profiles and their country history are deleted. This describes identifier removal, not a guarantee that retained events are anonymous in every context.
- Detailed country periods are excluded from audience reads once their last observation is older than 90 days. Daily cleanup deletes them; physical deletion can lag until a cleanup run succeeds. An unchanged period can start earlier than 90 days, but it is not a daily location record. The first known country is kept separately for the lifetime of the installation profile, until that profile is deleted.
- Feedback country stays with its feedback record and is deleted with that record through the account-deletion lifecycle; the 90-day country-history rule does not apply to feedback.
- Stored media is kept while the related active workspace content needs it and is deleted through the storage cleanup process after it is no longer referenced. Incomplete temporary uploads expire after 7 days.
- The database has 7 days of RDS automated backups and a separate daily AWS Backup plan with 35-day retention. Records deleted from the live service may remain in encrypted recovery backups until those backups expire; backups are used for disaster recovery, not normal service access.
- API Gateway access logs expire after 7 days. Other CloudWatch application logs currently have no automatic expiry configured and remain until they are manually deleted. We restrict their use to operations, security, and debugging and delete relevant entries when required to honor an applicable data-protection right.
- The current Sentry Developer plan provides a 30-day event lookback. Resend retains sent-email data for 30 days under its current standard service settings.
- OpenAI retention is described in the Hosted AI section. The current Langfuse project has no automatic retention period configured, so AI traces remain until they are manually deleted, the project is deleted, or a provider access limit applies. We delete identifiable traces when necessary to honor a valid deletion request.
- Support correspondence and records needed for legal or security matters are kept only as long as needed for the relevant purpose. Vercel's visitor hash expires after 24 hours; aggregated website statistics are retained under the Vercel project settings.

Deleting an account does not immediately remove copies already present in a scheduled backup or a provider log. Those copies expire or are deleted according to the periods above, unless a longer period is legally required.

## Your Rights

Depending on the law that applies to you, you may ask us to give you access to your personal data, correct it, delete it, restrict its use, or provide a portable copy. You may also object to processing based on legitimate interests and withdraw consent where processing is based on consent. These rights can be limited where the law allows, including when data must be retained for a legal obligation or the rights of another person.

You can delete your hosted account in the web, iOS, or Android app. For another request, contact us using the address below. We may need to verify your identity before completing a request.

You may complain to the data-protection authority where you live or work, or where you believe an infringement occurred. In Bulgaria, the supervisory authority is the [Commission for Personal Data Protection](https://cpdp.bg/en/).

## Security and Open Source

We use access controls, encryption in transit, encrypted AWS storage, and data minimization or redaction in diagnostic systems. No service can guarantee absolute security.

The public source code lets you inspect documented data-handling paths and the configuration committed to the repositories. Public source alone does not prove the current configuration or behavior of the hosted service.

## Contact

For privacy questions or rights requests, contact [kirill+flashcards@kirill-markin.com](mailto:kirill+flashcards@kirill-markin.com) or use the [support page](/support/).
