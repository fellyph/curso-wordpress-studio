---
locale: en
counterpart: ../pt-BR/plan.md
duration_minutes: 240
baseline_studio: 1.17.x
section_order: objective|outcomes|prerequisites|agenda|brief|exercises|challenges|fallback|guardrails|facilitator|success|slides|sources
---
# From brief to Preview: WordPress Studio workshop

## Goal and audience

By the end, first-time site creators and participants with prior experience should be able to turn a constrained idea into a local WordPress site, review human decisions, and share a Preview, because Studio brings creation, inspection, and feedback into one safe workflow.

The group follows one beginner path. Anyone who finishes early chooses an optional challenge without splitting facilitation into two classes.

## Outcomes and boundaries

Each participant finishes with:

- their own mini-brief;
- a one-page site in Studio;
- a first version built with Studio Code or the manual fallback;
- adjustments checked in the Site Editor and a mobile viewport;
- one round of feedback captured and applied;
- an updated public Preview.

Outside the core path: terminal use, required custom code, plugins, technical debugging, hands-on Sync, Liberate, MCP, a paid hosting plan, and every production action.

## Prerequisites and preflight

Send seven days before the event:

- install WordPress Studio 1.17.x on macOS, Windows, or Linux;
- confirm permission to run the app and trust its local certificate;
- create and connect a WordPress.com account;
- confirm Studio Code access, a saved payment method, and available monthly usage;
- bring only owned, fictional, or authorized text, images, and brand assets;
- update the browser.

At check-in, each person creates a test site, opens WP Admin, and confirms that the Preview tab is available. Anyone without Studio Code access receives the fallback path immediately.

## Four-hour agenda

| Time | Minutes | Block | Format and outcome |
| --- | ---: | --- | --- |
| 00:00–00:15 | 15 | Show the outcome | Short demo, local/remote flow, and guardrails. |
| 00:15–00:40 | 25 | Create the mini-brief | Individual work; complete, constrained brief. |
| 00:40–01:05 | 25 | Create the site | Quick Start, Studio orientation, and first Site Editor visit. |
| 01:05–01:50 | 45 | Build the first version | Approved Studio Code plan and one-page site. |
| 01:50–02:00 | 10 | Break | Pause and technical recovery. |
| 02:00–02:30 | 30 | Inspect and adjust | Site Editor, content, styles, headings, and mobile. |
| 02:30–03:00 | 30 | Apply Annotate | Specific visual feedback, reviewed diff, and screenshots. |
| 03:00–03:30 | 30 | Share a Preview | URL created and two peer comments received. |
| 03:30–03:45 | 15 | Correct and update | Feedback applied locally and Preview replaced. |
| 03:45–04:00 | 15 | Close and extend the loop | Handoff, Automattic for Agencies, Agent Skills, and MCP without a remote connection. |

## Participant mini-brief

The brief must fit on one page and answer:

1. What is the site's purpose?
2. Which specific audience is it for?
3. What is the single main action or CTA?
4. What tone should guide copy and visuals?
5. What are the three essential messages?
6. Which four or five sections make up the page?
7. Which text, images, and brand assets are available and authorized?

Default scope: a hero, two or three content sections, and a final CTA. No store, login, form with real data, external integration, or multiple pages.

## Exercises and observable outcomes

### 1. Show the complete cycle

**Duration:** 15 minutes. **Input:** the facilitator's finished site. **Observable outcome:** participants can point to where ideation, building, review, and sharing happen.

Show the finished site first, one small Annotate change, and the updated Preview. Do not teach commands at this stage. Explain that local is the construction space and Preview is a public, temporary copy.

### 2. Create an individual brief

**Duration:** 25 minutes. **Input:** mini-brief worksheet and optional asset pack. **Observable outcome:** all seven questions answered and the one-page scope approved by another person.

Create pairs only for review. Each participant remains responsible for their own project. If the scope has more than one primary CTA, more than five sections, or depends on an integration, reduce it before opening Studio.

### 3. Create and understand the site

**Duration:** 25 minutes. **Input:** Studio 1.17.x and a connected account. **Observable outcome:** Quick Start site running, WP Admin and Site Editor open, and file location identified.

Use **Add site → Build a new site → Quick Start**. Do not change PHP, WordPress, or runtime. The facilitator shows where to start or stop the site and open WP Admin, Site Editor, Studio Code, and Preview.

### 4. Plan and build with Studio Code

**Duration:** 45 minutes. **Input:** brief, assets, and Quick Start site. **Observable outcome:** approved short plan and first version with four or five sections.

Base prompt:

```text
Read the brief and assets before editing. Inspect this site and propose
a short plan for a page with four or five sections and one CTA.
Use native blocks, theme presets, and a structure editable in the Site Editor.
Preserve accessibility, responsive behavior, and heading hierarchy.
Do not implement anything before I approve the plan.
```

After approval, execute in stages. Review the diff and request desktop and mobile screenshots. Do not create a plugin or add dependencies without need.

### 5. Inspect in the Site Editor

**Duration:** 30 minutes. **Input:** first version. **Observable outcome:** every block is editable, there is one H1, the CTA works on desktop and mobile, and no sample copy remains.

Each person manually changes at least one piece of copy and one style. Check contrast, reading order, links, alt text, spacing, and keyboard navigation. Record one decision the agent should not make alone.

### 6. Apply feedback with Annotate

**Duration:** 30 minutes. **Input:** reviewed site. **Observable outcome:** two specific requests applied and the diff/screenshots consciously accepted.

Select two elements, describe the expected result and constraint, and send the annotations together. Examples: reduce hero height without hiding the CTA; increase contrast with an existing preset. Reject vague requests such as “make it look nicer.”

### 7. Create a Preview and peer review

**Duration:** 30 minutes. **Input:** local site without confidential data. **Observable outcome:** `wp.build` URL created and two objective comments received.

Name the Preview, share it with a partner, and review purpose clarity, confidence to click the CTA, mobile reading, and missing content. Remind participants that the URL is public, expires, and does not follow local changes automatically.

### 8. Correct and update

**Duration:** 15 minutes. **Input:** received feedback. **Observable outcome:** at least one local correction and an updated Preview.

Apply only feedback that fits the brief, review again in the Site Editor, and use **Update** on the Preview.

### 9. Close the loop and connect it to agency operations

**Duration:** 15 minutes. **Input:** completed journey and Automattic for Agencies materials. **Observable outcome:** participants explain the handoff and distinguish program benefits, Agent Skills, and MCP, including their permission boundaries.

In the first five minutes, distinguish Preview, export, Sync, and hosting without publishing or touching production. Then present the two extension videos. Relate WordPress.com and Jetpack to different portfolio needs; treat percentages as maximum benefits subject to current rules. Explain that Skills guide the agent and MCP connects authorized systems. Do not configure MCP, share client data, or perform remote writes.

## Optional challenges

Anyone who finishes a block early may choose one:

1. Create a style variation or explore `theme.json` without removing editability.
2. Run performance, SEO, and accessibility audits, fixing one reproducible finding.
3. Create `.deployignore`, explain each exclusion, and review what will be sent to Preview.

The challenge never changes the pair's schedule or becomes a prerequisite for the core outcome.

## Manual fallback

The facilitator provides a starter-site Blueprint or import, patterns for the four sections, removable sample copy, and local assets. If Studio Code fails because of login, payment method, usage limit, or network access:

1. open the supplied starter site;
2. choose the patterns in the Site Editor;
3. replace copy, images, colors, and CTA according to the brief;
4. perform the same manual review, Annotate when available, and Preview;
5. if Preview also fails, exchange review in person and demonstrate sharing on the facilitator's machine.

The fallback must still reach local site + Preview; only the automation changes.

## Guardrails

- AI proposes and executes; the person defines scope, approves, and accepts.
- Request a plan before large changes.
- Review diffs, commands, Site Editor, front end, and screenshots.
- Use only fictional, owned, or authorized content.
- Preview is public and temporary.
- Do not use production, Sync, MCP write, DNS, remote deletion, or client databases.
- Do not share passwords, tokens, personal data, logs, or backups.
- Generated content needs factual, editorial, visual, and accessibility review.

## Facilitator preparation

### One week before

- Review the changelog, Studio Code, Preview, and `studio/current-state.md`.
- Pin Studio 1.17.x on demonstration machines.
- Send preflight instructions and a technical-blocker form.
- Prepare licensed assets, a sample brief, and the finished site.
- Validate the Blueprint/import, SSL, and manual fallback.

### Forty-eight hours before

- Run the complete flow in PT-BR, EN, and ES without cached conversations.
- Confirm login, payment method, usage limit, and available models.
- Create, rename, update, and delete a Preview.
- Test stopped-site behavior and unstable network conditions.
- Store assets, import, and screenshots locally.

### On the day

- Confirm version, login, and Preview before starting.
- Form review pairs without sharing accounts.
- Identify fallback participants immediately.
- Display block timing and protect the break.
- Remove Previews and temporary data after the event.

## Success criteria

The workshop succeeds when each participant can:

1. explain their site's purpose, audience, and CTA;
2. show a one-page local site without sample content;
3. identify one accepted change and one decision kept under human responsibility;
4. edit content in the Site Editor;
5. explain the difference between the local site and Preview;
6. share a Preview and apply verifiable feedback;
7. state that Preview is neither hosting nor production publishing.

## Migration map for the 38 slides

| Slide | Current role | Decision | Future use |
| ---: | --- | --- | --- |
| 1 | Agency-focused title | Rewrite | “From brief to Preview,” mixed audience, four hours. |
| 2 | Technical deliverables | Rewrite | Brief, local site, review, and Preview. |
| 3 | Old agenda | Rewrite | Use this plan's 240-minute agenda. |
| 4 | Format and pairs | Rewrite | Individual project, peer review, and fallback. |
| 5 | Outcome first | Rewrite | Keep the opening; remove plugin and publishing. |
| 6 | Tool map | Rewrite | Show Studio, Studio Code, Site Editor, Annotate, and Preview only. |
| 7 | Development Blueprint | Rewrite | Quick Start for participants; facilitator fallback. |
| 8 | Local and remote | Keep | Update examples and emphasize public Preview. |
| 9 | Agent Skills | Move to appendix | Optional challenge for experienced participants. |
| 10 | Studio CLI | Move to appendix | Advanced reference; do not demonstrate. |
| 11 | Model strategy | Move to appendix | Volatile facilitator note. |
| 12 | Raiz Urbana client | Rewrite | Template for the seven individual-brief questions. |
| 13 | Exercise plugin | Remove | No plugin in the core path. |
| 14 | Landing-page divider | Rewrite | “From idea to first version.” |
| 15 | Prompt shape | Rewrite | Individual-brief base prompt. |
| 16 | Landing-page checkpoint | Rewrite | Observable Site Editor and mobile checklist. |
| 17 | Annotate divider | Keep | Update numbering and duration. |
| 18 | Annotate lab | Rewrite | Two specific requests, diff, and screenshots. |
| 19 | Spec-driven plugin | Remove | Outside the four-hour workshop. |
| 20 | Debug, performance, and SEO | Move to appendix | Optional challenge without a controlled error. |
| 21 | Preview divider | Keep | Update numbering. |
| 22 | Cross-pair Preview | Rewrite | Two feedback criteria tied to the brief. |
| 23 | Preview limits | Keep | Update source, naming, and pre-event test. |
| 24 | Sync divider | Move to appendix | Next steps, not hands-on. |
| 25 | Sync does not merge | Move to appendix | Guardrail for advanced training. |
| 26 | Safe Sync flow | Move to appendix | Advanced facilitator material. |
| 27 | Sync risks | Move to appendix | Advanced facilitator material. |
| 28 | Sync plan | Remove | Replace with correction and Preview Update. |
| 29 | Liberate | Move to appendix | Separate advanced course. |
| 30 | WordPress.com MCP | Move to appendix | Separate advanced course. |
| 31 | Prerequisites | Rewrite | 1.17.x, SSL, account, Studio Code, and fallback. |
| 32 | Account requirements | Rewrite | Login, payment method, usage limit, and Preview without paid hosting. |
| 33 | Infrastructure | Move to appendix | Facilitator checklist and fallback package. |
| 34 | Facilitator checklist | Move to appendix | Use seven-day, 48-hour, and event-day preparation. |
| 35 | Guardrails | Rewrite | Apply this plan's eight guardrails. |
| 36 | Claims to avoid | Rewrite | Focus on Studio Code, Preview, authorship, and production. |
| 37 | Success criteria | Rewrite | Use the seven observable criteria. |
| 38 | Next steps | Rewrite | Update Preview, export, and choose hosting after the workshop. |

## Plan sources

- [WordPress Studio](https://developer.wordpress.com/docs/developer-tools/studio/)
- [Studio Code](https://developer.wordpress.com/docs/developer-tools/studio/studio-code/)
- [Preview Sites](https://developer.wordpress.com/docs/developer-tools/studio/preview-sites/)
- [Blueprints](https://developer.wordpress.com/docs/developer-tools/studio/blueprints/)
- [Changelog](https://developer.wordpress.com/docs/developer-tools/studio/changelog/)

Use `studio/sources.json` for dates, stability status, and official conflicts.
