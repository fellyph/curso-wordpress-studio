# Video 02 script — Define the event requirements

**Estimated duration:** 5 minutes  
**Slides:** [02 · Define the event requirements](./02-mini-brief.html)  
**Supporting materials:** [meeting notes](../../../workshop/en/event-meeting-notes.md) · [`requirements.md`](../../../workshop/en/requirements.md) · [Design System](../../../workshop/en/design-system.md) · [`design.md`](../../../workshop/en/design.md)

## Hook · before slide 1

Before asking artificial intelligence to design a screen, we need to answer one question: which decisions must it respect? That is what turns an open idea into a project with a clear scope, experience, and boundaries.

## Slide 1 · The conversation becomes an event brief

In the previous phase, we organized the conversation with the event team. Now we will use AI to find the project's scope and functionality within that material.

It is a simple process, very similar to what we already do in a briefing meeting. AI can group needs, highlight decisions, and point out missing information, but the team is still responsible for confirming what truly belongs in the project.

In our example, the WordPress community is organizing an artificial intelligence event in Faro. The website, however, should not speak only to people in the WordPress community. It must also reach the wider Algarve audience and show why the event matters to their reality.

**Transition:** To focus this brief, we begin with three fundamental decisions.

## Slide 2 · Three decisions focus the event

The first decision is purpose: why does this event exist? In this case, we want to bring artificial intelligence closer to local businesses and the community.

The second is the audience. We are speaking to hotel, restaurant, and travel-agency owners, as well as curious professionals who may have no technical background or previous connection with WordPress.

The third is voice. Communication should be welcoming, practical, clear, and free of jargon. People should feel able to join the conversation about AI, rather than feel that the event was created only for specialists.

These three decisions do more than guide the website copy. They influence the visual approach, the information hierarchy, and how the agent will project the screens.

**Transition:** Once this direction is clear, we record the agreement so it does not depend only on the team's memory.

## Slide 3 · Record the agreement

Creating a requirements file is not something the tool requires, but it is a practice I like to adopt. `requirements.md` becomes a shared foundation for design and, later, implementation.

In addition to purpose, audience, and voice, it can record the expected experience. Will this be a single-page website? Will it have several pages? Will some information open in modals? What navigation flow will lead people to registration?

We also need to define the priority platform. Will the project target desktop and mobile, follow a mobile-first approach, or serve an exclusively mobile context? That choice can change navigation and the amount of information shown at each step.

The file should also record boundaries, questions, and acceptance criteria. There is one important technical decision as well: we are creating a WordPress website. This gives the design agent context that is compatible with the platform we will use later.

**Transition:** With requirements defined, the design should leave us with two reusable artifacts.

## Slide 4 · Two artifacts guide the drafts

The first artifact is the Design System. It brings together colors, typography, components, and interface patterns. These rules give the screens consistency and prevent every page from looking like a different project.

The second is `design.md`. It records the visual and interaction decisions adopted while creating the drafts.

Tools such as Claude Design or Google Stitch may not always produce these exact files in the way we expect. We therefore need to request the artifacts explicitly, review the result, and complete anything that is missing.

At this point, we do not need to decide which parts belong in the theme and which should become a plugin. That separation is better handled during implementation in Studio Code, where we can evaluate each piece of functionality with the agent.

**Transition:** We now have enough context to turn requirements into a visual proposal.

## Slide 5 · Claude Design turns requirements into drafts

We finish this cycle with a reviewed `requirements.md`. It records the agreement on purpose, audience, voice, experience, platform, and boundaries.

The next step is to take that file, the available references, and the Design System into Claude Design. From that context, we request the first website drafts, compare alternatives, and record the approved choices in `design.md`.

Claude Design is the tool I will use in the demonstration, but the same process can be applied with Google Stitch or another AI-assisted design solution. The tool may change; the quality of the context remains decisive.

This first generation is not the final result. It is a concrete representation of what we understand so far, ready for review before construction.

**Closing:** Clear requirements give direction to design. In the next module, we will create the site's local foundation and prepare it for implementation.
