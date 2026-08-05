---
source_id: current-state
locale: en
counterpart: ../pt-BR/current-state.md
workshop_track: facilitator
stability: volatile
section_order: baseline|requirements|models|changes|ui|conflicts|checklist
---
# Current WordPress Studio state

## Editorial baseline

This project uses WordPress Studio 1.17.0 as its stable reference release. It was verified on August 4, 2026 against public documentation and the official release.

## Requirements that can block participants

- Studio Code requires a WordPress.com login and a saved payment method.
- Free beta usage has a monthly account-level limit.
- Preview requires a WordPress.com login but not paid hosting.
- Sync and WordPress.com MCP depend on specific accounts, plans, and permissions and are outside the core path.
- Claude Design is in beta for Pro, Max, Team, and Enterprise plans; on Enterprise, the capability is off by default. Review the [announcement](https://www.anthropic.com/news/claude-design-anthropic-labs), [Get started](https://support.claude.com/en/articles/14604416-get-started-with-claude-design), and [Design System setup](https://support.claude.com/en/articles/14604397-set-up-your-design-system-in-claude-design) guides before the workshop.
- `design.md` is a workshop convention, not a documented native export format. Ask for decisions to be recorded in that file and apply human review.

## Documented models

On August 3, 2026, the Studio Code page lists Claude Sonnet 5 as the default, Claude Opus 4.8, and GPT 5.6 Sol. This list is volatile: check the model picker before every event and do not repeat it on core slides.

## Relevant changes in 1.16 and 1.17

- Images can be pasted directly into the conversation.
- Studio Code can create blank or child themes.
- Global agent instructions and clearer usage-limit messages are available.
- Site creation accepts imports, and the changelog records WXR/XML support.
- Settings gained an Agentic UI view with tabs and a default directory.
- The CLI added `studio ui` and aliases for help, version, and path.
- Xdebug-enabled sites can display a dedicated indicator.

## Classic interface and Agentic UI

Step-by-step documentation still spans the classic interface and Agentic UI features. The core path uses the stable flow available on every machine. Screenshots or instructions specific to Agentic UI must be labeled as a variation and verified on the event build.

## Conflicts and pending tests

- The 1.17 changelog records WXR/XML import, but the Import & Export page had not incorporated it when verified.
- Preview documentation does not state that the local site must be running. Test this before the event.
- Blueprint credential, path, and runtime exceptions must be verified before they become workshop instructions.

## Update checklist

Seven days before the event, review the [changelog](https://developer.wordpress.com/docs/developer-tools/studio/changelog/), [Studio Code](https://developer.wordpress.com/docs/developer-tools/studio/studio-code/), [roadmap](https://developer.wordpress.com/docs/developer-tools/studio/roadmap/), and [beta features](https://developer.wordpress.com/docs/developer-tools/studio/roadmap/beta-features/). Forty-eight hours before the event, run the complete flow on 1.17.x and record the test in `sources.json`.
