---
source_id: custom-blueprints-guide
locale: en
counterpart: ../pt-BR/custom-blueprints-guide.md
workshop_track: advanced
stability: beta
section_order: purpose|structure|process|compatibility|networking|v2|workshop|tests
---
# How to create custom Blueprints

## When to create a Blueprint

Create a custom recipe when a team must reproduce versions, plugins, themes, content, and options. For the beginner workshop, prefer Quick Start and keep JSON as facilitator infrastructure.

## Recommended structure

A Blueprint commonly contains `$schema`, `preferredVersions`, `features`, and `steps`. Use portable resources and stable public URLs; relative local files must travel with the recipe.

## Creation process

1. Define the reproducible outcome.
2. Start with a small number of steps.
3. Validate against the public schema.
4. Test in WordPress Playground.
5. Test in a new Studio 1.17.x site.
6. Document dependencies, assets, expected result, and recovery.

## Studio 1.17 compatibility

The official guide presents its matrix as valid for Studio 1.17.0. Most features follow Playground behavior. Do not maintain historical lists reconstructed from older releases.

## Networking and overrides

In Studio, `features.networking` remains enabled. Credential, directory, and runtime behavior requires a local test before being described as a rule because the interface may apply site values.

## Blueprints v2

Blueprints v2 is in development. The documentation states that v1 Blueprints will remain supported. Do not use v2 features in the core material before a stable release and matching documentation exist.

## Workshop use

The facilitator maintains two artifacts: a validated Quick Start Blueprint and a fallback package that restores the starter site. Participants do not edit the Blueprint during the four-hour session.

## Required tests

Confirm online and offline creation, assets, relative paths, versions, `landingPage`, starter content, credentials, domain, runtime, and recovery after failure. Record the test in `sources.json`.

