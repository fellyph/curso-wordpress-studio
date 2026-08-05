---
source_id: wordpress-com-mcp
locale: en
counterpart: ../pt-BR/wordpress-com-mcp.md
workshop_track: advanced
stability: volatile
section_order: distinction|requirements|endpoint|clients|permissions|tools|workflow|workshop
---
# WordPress.com MCP

## Difference from Studio MCP

WordPress.com MCP reads and maintains remote sites connected to an account. Studio MCP controls local environments. Do not use the names interchangeably.

## Requirements

Access requires a compatible account and plan, MCP enabled, and OAuth authentication. Confirm eligibility and permissions on the disposable site used for the demonstration.

## Endpoint

```text
https://public-api.wordpress.com/wpcom/v2/mcp/v1
```

An HTTP 401 response without OAuth is expected and does not mean the link is broken.

## Clients

Compatible clients, including Codex and Claude Code, can connect over HTTP and complete OAuth login. Do not copy tokens into workshop files.

## Permissions

Read-only tools start enabled; write access must be allowed. Create, update, and delete operations require an explanation, human confirmation, and `user_confirmed: true`. Revoke the connection after testing.

## Tool catalog

Tool families cover content, Site Editor context, site, and account. Because schemas change, use `action: list` and `action: describe` on the relevant tool before sending data.

## Safe workflow

1. List sites without writing.
2. Choose disposable staging.
3. Read theme, presets, patterns, plugins, and activity.
4. Enable only the required write access.
5. Propose content before creating it.
6. Create drafts only.
7. Check `_content_warnings` and review in WP Admin.
8. Revoke the connection.

## Workshop use

WordPress.com MCP is not part of the four-hour session. Keep this reference for advanced training and separate demonstration preparation.

