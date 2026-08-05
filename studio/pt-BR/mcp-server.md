---
source_id: mcp-server
locale: pt-BR
counterpart: ../en/mcp-server.md
workshop_track: advanced
stability: volatile
section_order: distinction|start|capabilities|clients|permissions|workshop|verify
---
# MCP no WordPress Studio

## MCP local e MCP remoto

O servidor MCP do Studio permite que clientes de agentes controlem ambientes locais. Ele é diferente do MCP do WordPress.com, que consulta e mantém sites remotos associados a uma conta.

## Iniciar o servidor

```bash
studio mcp
```

O comando e a configuração do cliente devem ser confirmados na versão instalada. Não exponha o servidor local a redes não confiáveis.

## Capacidades

A documentação e o changelog registram ferramentas para listar e controlar sites, executar WP-CLI, criar Preview e realizar operações de `push`, `pull`, `import` e `export`. O catálogo e os schemas são voláteis; inspecione as ferramentas realmente expostas pelo servidor.

## Clientes externos

Configure um cliente compatível para iniciar ou conectar ao processo local. Mantenha o diretório e o site-alvo explícitos e evite configurações globais que concedam acesso a todos os projetos sem necessidade.

## Permissões e segurança

- Comece com ações de leitura.
- Confirme o site-alvo antes de qualquer escrita.
- Revise comandos e argumentos.
- Não use produção nem credenciais de clientes.
- Encerre o processo e remova configurações temporárias depois da demonstração.

## Uso no workshop

MCP local fica fora da agenda de quatro horas. Ele pode aparecer em um apêndice para instrutores ou em uma formação avançada separada.

## Verificação necessária

Antes de demonstrar, liste as ferramentas, capture seus schemas e execute somente ações de leitura em um site descartável. Recursos de `push`, `pull`, `import` e `export` devem permanecer marcados como dependentes do changelog até confirmação local.
