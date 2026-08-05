---
source_id: blueprints
locale: pt-BR
counterpart: ../en/blueprints.md
workshop_track: facilitator
stability: stable
section_order: concept|workshop|gallery|create|example|compatibility|sharing
---
# Blueprints no WordPress Studio

## O que é um Blueprint

Um Blueprint é uma receita JSON para construir um site WordPress reproduzível. Ele pode definir versões, instalar temas e plugins, importar conteúdo, alterar opções e executar etapas. Studio e WordPress Playground usam o mesmo schema de base.

## Uso no workshop

O instrutor usa Blueprints para reduzir variação de ambiente. Participantes escolhem **Quick Start** pela interface e não precisam escrever JSON. O Blueprint alternativo pode incluir conteúdo, padrões e recursos necessários para continuar sem Studio Code.

## Opções da galeria

- **Quick Start:** base acessível, próxima de um site WordPress.com Business.
- **Development:** ferramentas como Query Monitor, Plugin Check, Theme Check e Create Block Theme.
- **Commerce:** WooCommerce e extensões para projetos de loja.
- **Blueprints Gallery:** receitas adicionais para visual, conteúdo, desenvolvimento e testes.

## Criar pela interface

1. Selecione **Add site**.
2. Escolha **Build a new site**.
3. Selecione um Blueprint da galeria ou **Choose blueprint file**.
4. Defina o nome e revise as opções avançadas.
5. Confirme em **Add site**.

## Exemplo mínimo

```json
{
  "$schema": "https://playground.wordpress.net/blueprint-schema.json",
  "preferredVersions": {
    "php": "8.3",
    "wp": "latest"
  },
  "steps": [
    {
      "step": "setSiteOptions",
      "options": {
        "blogname": "Workshop site"
      }
    }
  ]
}
```

Valide receitas no schema e teste em uma instalação limpa antes de distribuí-las.

## Compatibilidade

O guia oficial agora descreve a matriz com base no Studio 1.17.0. A maioria dos recursos funciona como no Playground; `features.networking` é uma exceção porque a rede permanece ativa no Studio. Blueprints v2 está em desenvolvimento, e a documentação afirma que receitas v1 continuarão compatíveis.

Não reutilize a antiga tabela baseada em Studio 1.6. Para opções de credenciais, diretório e runtime, faça um teste real antes de publicar instruções.

## Compartilhamento

Distribua uma receita com o [botão Open in WordPress Studio](open-in-studio-button.md). Nunca inclua tokens, segredos ou URLs privadas. Mantenha uma cópia local para eventos com rede instável.
