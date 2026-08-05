---
source_id: cli
locale: pt-BR
counterpart: ../en/cli.md
workshop_track: advanced
stability: volatile
section_order: install|structure|auth|sites|blueprints|preview|wpcli|code|ui|help|workshop
---
# Studio CLI

## Instalação

A Studio CLI pode ser ativada em **Settings → Studio CLI** ou instalada pelo método oficial. O pacote npm continua disponível:

```bash
npm install -g wp-studio
```

Ela não é requisito do workshop de quatro horas.

## Estrutura dos comandos

Use `studio <recurso> <ação>`. Os recursos incluem sites, Blueprints, Preview, autenticação, Sync, importação/exportação, WP-CLI e Studio Code. Opções e aliases mudam; confirme sempre com `--help`.

## Autenticação

```bash
studio auth login
studio auth logout
```

Login libera operações ligadas à conta WordPress.com. Não armazene tokens em scripts ou materiais compartilhados.

## Sites locais

```bash
studio site list
studio site create
studio site start
studio site stop
studio site status
```

Use `--format=json` somente quando a saída for consumida por automação.

## Blueprints

```bash
studio blueprint list
studio blueprint use quick-start --name "Workshop site"
```

O slug real deve ser confirmado na versão instalada.

## Preview Sites

```bash
studio preview create
studio preview update <host>
studio preview list
```

Preview exige autenticação. A opção `--all` permite listar Previews além do site atual quando disponível.

## WP-CLI

```bash
studio wp option get blogname
studio wp plugin list
```

O comando executa WP-CLI no contexto do site. Confirme o alvo antes de qualquer escrita.

## Studio Code

```bash
studio code
studio code --path /caminho/para/site
studio code sessions list
studio code sessions resume latest
```

Slash commands como `/preview` e `/publish` pertencem ao terminal.

## UI e aliases em 1.17

O changelog 1.17 registra `studio ui` em builds de release e aliases para help, version e path. Esses itens devem permanecer `needs_local_test` até serem confirmados em uma instalação estável 1.17.x.

## Ajuda da versão instalada

```bash
studio --version
studio --help
studio site --help
studio preview --help
```

Essa saída é a fonte operacional para flags e aliases.

## Uso no workshop

CLI aparece apenas como referência avançada. O percurso principal usa a interface desktop para reduzir pré-requisitos e risco de executar comandos no site errado.
