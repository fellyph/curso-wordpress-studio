# Design System — AI event in Faro

> Fictional teaching example. Tokens and components must be validated in Claude Design and WordPress before implementation.

## 1. Principles

- **Accessible:** readable for technical and non-technical audiences.
- **Local:** inspired by Algarve light, the Atlantic, and architecture without tourist clichés.
- **Practical:** recognizable primary actions and easy-to-scan content.
- **Human:** AI assistance is always explained and supervised.

## 2. Color tokens

| Token | Value | Use |
| --- | --- | --- |
| `--color-ink` | `#10182D` | Primary text and dark backgrounds |
| `--color-ocean` | `#2756D8` | Links, focus, and primary actions |
| `--color-sun` | `#E8794F` | Highlights and secondary calls |
| `--color-lime` | `#C7E08A` | Positive signals and details |
| `--color-sand` | `#F5F1E8` | Light background |
| `--color-paper` | `#FFFFFF` | Surfaces and content |

## 3. Typography

- Headings: expressive sans-serif, 700–800 weight, and compact line height.
- Body: readable sans-serif, 400–500 weight, and at least 1.5 line height.
- Agenda data: monospaced type only for times, tracks, and metadata.
- Suggested scale: 16, 18, 24, 32, 48, and 72 px.

## 4. Spacing and shape

- Base unit: 8 px; scale: 4, 8, 16, 24, 32, 48, 64, and 96 px.
- Small radius: 8 px; medium: 16 px; circle: 999 px.
- Maximum content width: 1200 px.
- Borders: 1–2 px; use shadows only when they communicate real elevation.

## 5. Essential components

- Header and anchor navigation.
- Primary, secondary, and text buttons.
- Event hero and essential-information strip.
- Session, speaker, and track cards.
- Responsive agenda and filter controls.
- Forms, validation messages, and confirmation.
- “AI-assisted” notice with explanation and human alternative.
- Footer with venue, contact, organization, and fictional prototype status.

## 6. States and interaction

- Visible focus with a 3 px `--color-ocean` ring, or `--color-lime` on dark backgrounds.
- Hover reinforces contrast without being the only action indicator.
- Disabled states remain readable and explain why the action is unavailable.
- Errors explain the problem and correction; success confirms the next step.

## 7. Images and icons

- Prioritize authorized images of the Algarve, community, and real work situations.
- Avoid generic robots, digital brains, and fake interfaces.
- Use one simple icon set, with a text label when the action is not obvious.

## 8. Accessibility and handoff

- Verify WCAG AA, keyboard, 200% zoom, reduced motion, and touch targets.
- Map tokens to `theme.json` and use editable blocks and patterns.
- Record exceptions and approved decisions in `design.md`.
