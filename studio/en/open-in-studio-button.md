---
source_id: open-in-studio-button
locale: en
counterpart: ../pt-BR/open-in-studio-button.md
workshop_track: facilitator
stability: stable
section_order: purpose|inputs|behavior|workshop|safety
---
# Open in WordPress Studio button

## Purpose

The **Open in WordPress Studio** button starts local-site creation from a shared Blueprint. It is useful in workshop materials, README files, videos, and resource pages.

## Accepted inputs

The official generator accepts a public Blueprint URL, raw JSON, or Base64-encoded JSON.

## Behavior

If Studio is installed, the link opens the creation flow. Otherwise, the participant is sent to the download page and must open the link again after installation.

## Workshop use

The facilitator prepares a button for the fallback starter site. Test the link on macOS and Windows, and provide an equivalent local file in case the network fails.

## Safety

Validate the Blueprint before publishing it. Do not include secrets, tokens, credentials, or private URLs. Use only plugins, themes, content, and assets that may be redistributed.

