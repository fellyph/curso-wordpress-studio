---
source_id: import-export
locale: pt-BR
counterpart: ../en/import-export.md
workshop_track: facilitator
stability: stable
section_order: formats|new-site|existing-site|export|workshop|conflict
---
# Importar e exportar no WordPress Studio

## Formatos

Para criar um site a partir de backup, a documentação lista `.tar.gz`, `.zip`, `.wpress`, exportações do Local e do WordPress Playground. Um site existente também pode receber um arquivo `.sql`.

O changelog 1.17 adiciona a importação de arquivos de exportação do WordPress em WXR/XML. Na verificação deste projeto, a página específica de Import & Export ainda não tinha incorporado essa opção.

## Criar um site a partir de uma importação

Selecione **Add site**, escolha a opção de importação, informe o arquivo, defina o nome e revise as configurações. O Studio 1.17 também integra importações ao novo fluxo de criação de sites.

## Atualizar um site existente

Na aba **Import / Export**, arraste ou selecione o arquivo e confirme. ZIP ou TAR podem substituir o conteúdo local; SQL modifica o banco existente. Faça uma exportação antes de testar arquivos desconhecidos.

## Exportar

**Export entire site** gera um arquivo do site; **Export database** gera SQL. As exportações de site não incluem `.git` e `node_modules`. Revise o arquivo antes de enviá-lo a terceiros.

## Uso no workshop

Importação e exportação não fazem parte do percurso do participante. O instrutor usa um arquivo importado ou Blueprint para recuperar rapidamente o site inicial e mantém uma exportação do resultado final como alternativa offline.

## Divergência oficial

WXR/XML é tratado como `official_conflict` até que a página de Import & Export e o changelog estejam alinhados. Demonstre o recurso somente depois de um teste na versão 1.17.x do evento.
