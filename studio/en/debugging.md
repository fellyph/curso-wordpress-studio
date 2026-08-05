---
source_id: debugging
locale: en
counterpart: ../pt-BR/debugging.md
workshop_track: challenge
stability: stable
section_order: log|display|database|xdebug|challenge|safety
---
# Debugging in WordPress Studio

## Debug log

Enable `WP_DEBUG_LOG` in site settings to record errors in `wp-content/debug.log`. Reproduce the problem, read the evidence, and disable unnecessary logging after the test.

## Display errors

`WP_DEBUG_DISPLAY` shows errors on the page and can expose paths or technical details. Use it only locally. For demonstrations, prefer the log file and a small, controlled failure.

## phpMyAdmin

Studio provides phpMyAdmin for inspecting the local database. Do not change data without a prior export, and do not use examples containing real client information.

## Xdebug

Xdebug enables breakpoints and detailed inspection. Version 1.17 adds an indicator for Xdebug-enabled sites. This flow requires editor preparation and remains outside the beginner exercise.

## Optional challenge

Experienced participants can run a performance, SEO, or accessibility audit, record reproducible evidence, fix one issue, and validate again. Do not introduce errors into another participant's site.

## Safety

Logs, dumps, and screenshots can contain paths, tokens, or personal data. Review them before sharing, and exclude temporary artifacts from Preview with `.deployignore`.
