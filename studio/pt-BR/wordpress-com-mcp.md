---
source_id: wordpress-com-mcp
locale: pt-BR
counterpart: ../en/wordpress-com-mcp.md
workshop_track: advanced
stability: volatile
section_order: distinction|requirements|endpoint|clients|permissions|tools|workflow|workshop
---
# MCP do WordPress.com

## Diferença para o MCP do Studio

MCP do WordPress.com consulta e mantém sites remotos ligados a uma conta. MCP do Studio controla ambientes locais. Não use os nomes como sinônimos.

## Requisitos

O acesso exige conta e plano compatíveis, MCP habilitado e autenticação OAuth. Confirme elegibilidade e permissões no site descartável usado para a demonstração.

## Endpoint

```text
https://public-api.wordpress.com/wpcom/v2/mcp/v1
```

Uma resposta HTTP 401 sem OAuth é esperada e não significa link quebrado.

## Clientes

Clientes compatíveis, incluindo Codex e Claude Code, podem se conectar por HTTP e concluir o login OAuth. Não copie tokens para arquivos do workshop.

## Permissões

Ferramentas somente leitura começam habilitadas; a escrita precisa ser liberada. Operações de create, update e delete exigem explicação, confirmação humana e `user_confirmed: true`. Revogue a conexão depois do teste.

## Catálogo de tools

As famílias cobrem conteúdo, contexto do Site Editor, site e conta. Como schemas mudam, use `action: list` e `action: describe` na própria tool antes de enviar dados.

## Fluxo seguro

1. Liste sites sem escrever.
2. Escolha staging descartável.
3. Consulte tema, presets, patterns, plugins e atividades.
4. Habilite somente a escrita necessária.
5. Proponha conteúdo antes de criar.
6. Crie apenas como rascunho.
7. Verifique `_content_warnings` e revise no WP Admin.
8. Revogue a conexão.

## Uso no workshop

MCP do WordPress.com não faz parte das quatro horas. Mantenha esta referência para formações avançadas e para preparar demonstrações separadas.
