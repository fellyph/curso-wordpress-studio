---
source_id: custom-blueprints-guide
locale: pt-BR
counterpart: ../en/custom-blueprints-guide.md
workshop_track: advanced
stability: beta
section_order: purpose|structure|process|compatibility|networking|v2|workshop|tests
---
# Como criar Blueprints personalizados

## Quando criar um Blueprint

Crie uma receita personalizada quando uma equipe precisa reproduzir versões, plugins, temas, conteúdo e opções. Para o workshop iniciante, prefira Quick Start e mantenha o JSON como infraestrutura do instrutor.

## Estrutura recomendada

Um Blueprint normalmente contém `$schema`, `preferredVersions`, `features` e `steps`. Use recursos portáteis e URLs públicas estáveis; arquivos locais relativos precisam viajar com a receita.

## Processo de criação

1. Defina o resultado reproduzível.
2. Comece com poucas etapas.
3. Valide no schema público.
4. Teste no WordPress Playground.
5. Teste em um site novo do Studio 1.17.x.
6. Documente dependências, recursos, resultado esperado e recuperação.

## Compatibilidade com Studio 1.17

O guia oficial apresenta a matriz como válida para Studio 1.17.0. A maioria das funcionalidades segue o comportamento do Playground. Não mantenha listas históricas reconstruídas a partir de releases antigos.

## Networking e sobrescritas

No Studio, `features.networking` permanece ativo. Comportamentos de credenciais, diretório e runtime precisam de teste local antes de serem descritos como regra, porque a interface pode aplicar valores do site.

## Blueprints v2

Blueprints v2 está em desenvolvimento. A documentação informa que Blueprints v1 continuarão suportados. Não use recursos v2 no material principal enquanto não houver lançamento estável e documentação correspondente.

## Uso no workshop

O instrutor mantém dois artefatos: um Blueprint Quick Start validado e um pacote alternativo que restaura o site inicial. Participantes não editam o Blueprint durante as quatro horas.

## Testes obrigatórios

Confirme criação online e offline, recursos, caminhos relativos, versões, `landingPage`, conteúdo inicial, credenciais, domínio, runtime e recuperação após falha. Registre o teste em `sources.json`.
