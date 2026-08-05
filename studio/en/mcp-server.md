---
source_id: mcp-server
locale: en
counterpart: ../pt-BR/mcp-server.md
workshop_track: advanced
stability: volatile
section_order: distinction|start|capabilities|clients|permissions|workshop|verify
---
# MCP in WordPress Studio

## Local MCP and remote MCP

Studio's MCP server lets agent clients control local environments. It is different from WordPress.com MCP, which reads and maintains remote sites associated with an account.

## Start the server

```bash
studio mcp
```

Confirm the command and client configuration in the installed version. Do not expose the local server to untrusted networks.

## Capabilities

Documentation and the changelog record tools for listing and controlling sites, running WP-CLI, creating a Preview, and performing push, pull, import, and export operations. The catalog and schemas are volatile; inspect the tools actually exposed by the server.

## External clients

Configure a compatible client to start or connect to the local process. Keep the directory and target site explicit, and avoid global configurations that grant access to every project without need.

## Permissions and safety

- Start with read operations.
- Confirm the target site before every write.
- Review commands and arguments.
- Do not use production or client credentials.
- Stop the process and remove temporary configuration after the demonstration.

## Workshop use

Local MCP remains outside the four-hour agenda. It can appear in a facilitator appendix or a separate advanced course.

## Required verification

Before demonstrating, list the tools, capture their schemas, and run only read-only actions on a disposable site. Keep push, pull, import, and export features marked as changelog-dependent until locally confirmed.

