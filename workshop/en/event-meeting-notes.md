# Fictional meeting notes - AI event in Faro

> Fictional teaching material for the workshop definition stage. It was created from the supplied agenda brief and does not represent a real organization, published website, or ticketing operation.

## Meeting context

- **Event:** WordPress Day Faro 2026, focused on artificial intelligence.
- **Proposed date:** October 24, 2026.
- **Proposed venue:** Hotel AP Eva Senses, Faro, Portugal.
- **Planning audience:** 100 attendees. The brief also mentions serving 150 people; the team must confirm that figure with the venue and catering provider before committing.
- **Goal:** strengthen the Algarve community, showcase local initiatives, and connect attendees with WordPress community references from other regions.

## Fictional participants

- **Marta Silva** - event coordination.
- **Rui Costa** - programme and speaker relations.
- **Inês Duarte** - communications and community.
- **Tiago Martins** - owner of the first digital prototype.

## Conversation record

**Marta:** We need a simple, clear site that is ready to validate the event proposition. Explaining the agenda, accepting registrations, and making paths for speakers, volunteers, and sponsors easy are the priority.

**Rui:** The programme will have two parallel tracks: Business and Tech. We should plan for 14 speakers in total: five 30-minute talks per track, including five minutes for questions, and two 10-minute light talks per track. Opening and closing will be in the main room.

**Inês:** Algarve representation matters. The target is for half of the speakers to be local, while submission quality remains the main criterion. Business categories include GEO, content creation, automation, design, and success cases. The Tech track covers AI for WordPress and plugins, automation, AI application development, and WordPress solutions with AI.

**Marta:** The site must not claim that AI decides who takes part. It can help the team organize information and prepare a first reading, always with human approval.

**Tiago:** I will use **Claude Design** for the first prototype. Before building, we need a product plan that turns this brief into screens, flows, and sample data. The prototype will be a demonstration, without payments, real credentials, or real submissions.

**Inês:** We also need to make the venue easy to find: map, address, and availability. The agenda should include two coffee breaks, lunch, and 10-minute speaker-change buffers to absorb delays.

## Definition decisions

1. The workshop's first stage is **Define and plan**. It ends with a prototype plan for Claude Design; build and review belong to later stages.
2. The initial product is a responsive event website with fictional content and demo data.
3. Priority screens are: home, agenda, track details, speakers, registration/tickets, participation forms, sponsors, contact, and venue.
4. The agenda will show two parallel tracks, a 10:00 opening, 17:00 closing, two coffee breaks, lunch, and changeover buffers. Session times and names are drafts to be confirmed.
5. Any AI use must be explicitly labeled as assistance. Final decisions on talks, contacts, and external communications remain with the human team.

## First-prototype capabilities

| Area | Need | Expected prototype outcome |
| --- | --- | --- |
| Discovery | Explain the proposition, date, venue, and audience | Home page with a registration CTA and agenda |
| Agenda | Compare Business and Tech tracks | Grid by time, session, and track |
| Registration | Simulate a ticket purchase | Demonstration flow without real payment |
| Participation | Capture speaker, volunteer, and sponsor interest | Three independent forms with fictional confirmation |
| Venue | Support travel planning | Address, illustrative map, and venue hours |
| Contact | Receive questions | Demonstration form and fictional channels |

## AI-assisted capabilities to explore

| Capability | User | How AI helps | Required limit |
| --- | --- | --- | --- |
| Agenda assistant | Attendee | Suggests sessions from stated interests | A suggestion is not a final recommendation; the agenda remains visible and editable |
| Proposal triage | Organizing team | Summarizes a submission, identifies track/category, and flags missing fields | Never automatically accepts, rejects, or ranks speakers |
| FAQ assistant | Visitor | Answers from published event content | Routes unresolved questions to human contact; does not invent information |
| Communications draft | Organizing team | Prepares a first confirmation-message draft | Requires human review before any sending |

## Plan for Claude Design

**Prompt goal:** create a first visual experience for the WordPress Day Faro 2026 website, with a welcoming, professional tone tied to the Algarve technology community.

**Requested structure:**

1. Home with hero, event summary, fictional countdown, and registration/participation CTAs.
2. Agenda with complete view and track filtering.
3. Pages or panels for Business and Tech, using the brief's categories.
4. Speaker, volunteer, sponsor, and contact forms, all in demonstration mode.
5. Registration/ticket page that simulates confirmation without payment processing.
6. Venue block with Hotel AP Eva Senses, Faro, address, and illustrative map.
7. AI elements labeled “AI-assisted,” with a short explanation, an opt-out, and a human route.

**Demo data:** use fictional speakers, sessions, prices, email addresses, and logos. Do not use credentials, payments, personal addresses, or production integrations.

**Acceptance criteria:** the prototype explains the event in under one minute, lets people compare the two tracks, makes every main action easy to find, and clarifies where AI assistance and human review apply.

## Open questions

- Confirm whether operational capacity is 100 or 150 people.
- Set the final event name and visual identity.
- Define ticket prices, tiers, and refund policy before implementing payment.
- Confirm speaker-submission criteria, deadline, and channel.
- Validate privacy, consent, and data-retention policy for the forms.
- Confirm whether the agenda assistant and proposal triage are part of the MVP or conceptual demonstrations.

## Next workshop step

Turn these notes into `requirements.md`, recording purpose, audiences, tone of voice, capabilities, boundaries, and open questions. After human review, attach the requirements and visual references to Claude Design to explore the Design System, first drafts, and the decision record in `design.md`. Site implementation and review will be covered in later stages of the journey.
