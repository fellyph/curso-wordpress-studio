---
source_id: agent-skills
locale: en
counterpart: ../pt-BR/agent-skills.md
workshop_track: challenge
stability: volatile
section_order: concept|catalog|location|installation|workshop|practice
---
# Agent Skills in WordPress Studio

## What they are

Agent Skills are specialized instructions that the agent reads before performing a type of work. They supplement the model with WordPress-specific practices; they do not replace review, testing, or permissions.

## Catalog

The catalog changes frequently. Relevant examples include Block Themes, Plugin Development, Block Development, REST API, Studio CLI, and WP-CLI & Ops. Use the [official catalog](https://developer.wordpress.com/docs/agent-skills/) instead of freezing a list in the workshop.

## Where they live

Site-level skills live in `.agents/skills/`. Studio can create integrations for compatible clients, such as a `.claude/skills` path, but `.agents/skills/` is the project reference.

## Installation

Use **Settings → Skills** for global installation. When the interface provides per-site configuration, use **Edit site → Overview** to enable only what that project needs.

## Workshop use

The core path does not require skill installation. Experienced participants can enable Block Themes to explore `theme.json`, templates, patterns, and style variations, or use a performance and accessibility skill in an optional challenge.

## Good practice

- Read the `SKILL.md` before authorizing changes.
- Install only relevant skills from trusted sources.
- Request a plan and acceptance criteria.
- Review files, commands, screenshots, and the result in WordPress.
- Treat the available skill list as volatile information.

