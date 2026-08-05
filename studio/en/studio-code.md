---
source_id: studio-code
locale: en
counterpart: ../pt-BR/studio-code.md
workshop_track: core
stability: volatile
section_order: access|capabilities|workflow|inputs|commands|models|safety
---
# Studio Code

## Access and requirements

Studio Code is the coding agent integrated into WordPress Studio and Studio CLI. On desktop, open a site and select the **Studio Code** tab.

Current access requires a WordPress.com login and a saved payment method for abuse prevention. The feature remains free during beta but has a monthly limit shared across the account's sites. Confirm access and remaining usage before the event.

## Capabilities

Studio Code can read and edit site files, create themes, plugins, and content, run WP-CLI, validate blocks, capture screenshots, use Agent Skills, and assist with Preview or publishing. These capabilities can change files and the database; the participant remains responsible for scope, review, and acceptance.

Since 1.16, the agent can create blank or child themes. Since 1.17, it can also receive global instructions and reports monthly usage-limit errors more consistently.

## Recommended workflow

1. Provide context, the brief, and assets.
2. Ask the agent to inspect the site and propose a plan.
3. Approve the plan before allowing changes.
4. Run one small step at a time.
5. Review the diff, Site Editor, front end, and screenshots.
6. Record open decisions and review again after corrections.

## Files, images, and sessions

On desktop, drag files, use the attachment button, or paste an image directly into the conversation. In the CLI, provide paths. Sessions persist and can be listed, resumed, or deleted with `studio code sessions`.

## Slash commands and surfaces

Available commands change. In the terminal, current documentation includes `/browser`, `/login`, `/logout`, `/api-key`, `/model`, `/provider`, `/clear`, `/exit`, `/preview`, and `/publish`. `/annotate`, `/need-for-speed`, `/rank-me-up`, and `/taxonomist` are documented for desktop and terminal.

`/preview` and `/publish` are terminal slash commands. On desktop, use the interface or request the action in conversation; do not teach these two as desktop shortcuts.

## Models and volatile information

When models appear in exercises or slides, treat the list as a dated workshop snapshot. Use [Current state](current-state.md) and check the model picker the day before the event. Select a model by task type: fast iteration, complex architecture, or independent review.

## Safety and fallback

Do not use production during the workshop. Limit permissions, review commands, and never include secrets in prompts or assets. If Studio Code is unavailable because of login, payment method, usage limit, or network access, use the supplied starter site and continue in the Site Editor.
