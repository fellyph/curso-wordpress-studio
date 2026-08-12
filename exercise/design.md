# design.md — AI Day Faro

Registo das decisões de design aprovadas para o site do evento.
Convenção do workshop: **este ficheiro precisa de revisão humana.**

Última atualização: 12 de agosto de 2026.
Implementação de referência: `AI Day Faro.dc.html`.
Sistema de design: `styles.css` + `readme.md` neste projeto.

---

## 1. Decisões fechadas

### Estrutura
- **Uma página longa com âncoras**, não site multi-página. Secções na ordem:
  hero → para quem é → agenda → inscrição → participar → local → perguntas → contacto → rodapé.
- **Barra fixa** no topo com navegação em pills e um CTA permanente "Comprar bilhete".
- **Faixa de protótipo** permanente abaixo da barra: "Nomes, preços e submissões são fictícios".

### Identidade
- Base preto quente `#1E1B18`; acento único amarelo ácido `#E8FF52`.
- Archivo (800 para display em caixa alta, 400/500/600 para corpo) + IBM Plex Mono para etiquetas.
- Pills como motivo dominante. Sem sombras. Sem ícones. Sem emoji.
- Base derivada da referência visual enviada em `uploads/referencias-1785958117200.png`.

### Idioma e tom
- Português de Portugal.
- Quatro regras de tom do briefing aplicadas literalmente: acolhedor, prático, claro, confiável.
- Nenhuma afirmação sem base: o que não está decidido aparece escrito como não decidido.

### Agenda
- Duas trilhas em paralelo — **Business (Sala Ria)** e **Tech (Sala Ilha)** — numa grelha
  hora × trilha, para permitir comparação direta.
- Blocos comuns (credenciamento, abertura, intervalos, almoço, encerramento) atravessam as duas colunas.
- Filtro de trilha ("Ver ambas / Business / Tech"). Ao filtrar, a coluna escolhida ocupa a largura
  inteira e o cabeçalho acompanha — não fica coluna vazia.
- Palestrantes e títulos são **fictícios** e estão marcados como tal.

### Inscrição
- Fluxo de três passos: **Bilhete → Dados → Confirmação**, com barra de progresso.
- Bilhete geral **40 €** (decisão do cliente), com almoço e cafés incluídos.
  Bilhetes fictícios adicionais: Estudante 15 €, Apoiante 90 €.
- Validação mínima (nome + email com @) antes de confirmar.
- Termina com referência fictícia `FARO-26-####` e etiqueta "Confirmação fictícia".
  Sem pagamento, sem envio, sem armazenamento.

### Participação
- Três caminhos separados em tabs: **Palestrante**, **Voluntário**, **Patrocinador**.
- Cada um tem copy própria, formulário próprio e confirmação fictícia própria.

### Local
- Endereço, capacidade, acessos, transportes, estacionamento e almoço numa lista de factos.
- **Mapa ilustrativo** desenhado em CSS, marcado "MAPA ILUSTRATIVO — NÃO À ESCALA".
- Placeholder de foto da sala, com descrição do que deve entrar lá.

### IA
Três funcionalidades assistidas entram no protótipo, todas etiquetadas e todas com alternativa humana:

1. **Sugestão de sessões por interesse** — chips de interesse; sugere até 3 sessões e explica porquê.
   A agenda completa continua visível acima; a IA não filtra nem esconde.
2. **Revisão de proposta de palestra** — resume a proposta e aponta campos ausentes.
   Não aprova, não recusa, não classifica. A seleção é humana.
3. **Perguntas e respostas** — responde apenas com o que está publicado na página; quando não sabe,
   diz que não sabe e encaminha para o formulário de contacto.

O formulário de contacto é deliberadamente **sem IA**.
O sistema tem um interruptor global (`showAiFeatures`) que remove todos os blocos de IA de uma vez.

### Acessibilidade
- Contraste AA como mínimo; foco visível `2px` amarelo com offset em todos os controlos.
- Estados selecionados expostos com `aria-pressed` / `aria-selected`, não apenas por cor.
- Alvos de toque ≥ 44px. Grelhas fluidas sem media queries para o essencial — desktop e telemóvel
  desde o primeiro rascunho.

---

## 2. Decisões pendentes de escolha do cliente

- **Hero — decidido: opção B.** É o hero por omissão do protótipo. A opção A fica implementada e
  alternável na barra, para revisitar quando houver fotografia real.
  - **A** — hero full-bleed com placeholder de imagem, título sobreposto em amarelo. Mais atmosférico,
    depende de haver uma boa fotografia de Faro.
  - **B** — bloco amarelo tipográfico com tabela de factos ao lado. Funciona sem qualquer imagem e
    entrega data, local, lugares e preço acima da dobra.
  - Recomendação: **B** enquanto não houver fotografia real; **A** quando houver.
- **Cor de acento — decidido.** Fica o amarelo ácido `#E8FF52`. O coral `#FF7A45` sai de cena e
  permanece em `tokens/colors.css` apenas como acento alternativo para edições futuras.
- **Imagens — decidido.** Ficam os placeholders marcados (hachura amarela + descrição em mono)
  até haver fotografia real. Nenhuma imagem gerada.

---

## 3. Questões em aberto (do briefing, ainda sem resposta)

| Questão | Estado atual no protótipo |
| --- | --- |
| 100 ou 150 participantes? | Comunicamos **100 lugares**; o texto diz que 150 está em avaliação |
| Nome final e assets de marca | "AI Day Faro" como nome de trabalho; **sem logótipo**, wordmark em tipo |
| Modalidades, preços e reembolso | Geral 40 € fixado; estudante/apoiante fictícios; reembolso "em definição" |
| Critérios e prazos de submissão | Formulário existe; prazos declarados como "por definir" |
| Que IA entra no primeiro protótipo | As três acima; decisão a confirmar com a organização |

---

## 4. Fora de âmbito nesta fase

Pagamentos, credenciais, integrações de produção, envio real de formulários, gravação de vídeo,
e qualquer conteúdo que não possa ser marcado como fictício.
