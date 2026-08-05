# design.md — AI event website in Faro

> Fictional teaching artifact for reviewing the Claude Design output before implementation. Use it with `requirements.md` and `design-system.md`.

## 1. Experience direction

The website should present an accessible, practical event connected to the Algarve. The WordPress community organizes the initiative, but the experience must not assume WordPress or development knowledge.

## 2. Priority structure

1. Hero with proposition, date, venue, and registration CTA.
2. Benefits for hotels, restaurants, agencies, and local professionals.
3. Agenda with Business and Tech tracks comparable by time.
4. Speakers and sessions with clearly identified fictional data.
5. Paths for registration, speakers, volunteers, and sponsors.
6. Venue, contact, frequently asked questions, and a demonstration-content notice.

## 3. Responsive layout

- Desktop: 12-column grid, main content limited to 1200 px, and a two-track agenda.
- Tablet: 8-column grid and agenda switching between combined and track views.
- Mobile: one column, an earlier primary CTA, and chronologically ordered sessions.
- Compact header and anchor navigation; no information depends on hover alone.

## 4. Core behaviors

- Agenda filters keep time, track, and session visible.
- Forms are demonstrations and end with fictional confirmation.
- AI-assisted features are labeled and provide a non-AI alternative.
- Loading, empty, success, and error states use direct, actionable messages.

## 5. Content and data

- Use fictional or authorized names, images, prices, contacts, and logos.
- Do not invent information still open in `requirements.md`; label it “to be confirmed.”
- Keep the language welcoming and explain technical terms when unavoidable.

## 6. Accessibility

- WCAG AA minimum contrast, visible focus, and complete keyboard navigation.
- One `h1`, consistent heading hierarchy, and links with explicit purpose.
- Informative images have alt text; decorative elements are ignored by assistive technology.
- Touch targets are at least 44 × 44 px and reduced-motion preferences are respected.

## 7. Visual acceptance criteria

- Proposition, date, venue, and CTA are understood in under one minute.
- Both tracks can be compared on desktop and understood on mobile.
- Visitors can identify where AI assists and who makes the final decision.
- The page remains editable with WordPress blocks and global styles.

## 8. Open decisions

- Final name, logo, and lead photograph.
- Capacity of 100 or 150 people.
- Ticket types and prices.
- AI-assisted features included in the first prototype.
