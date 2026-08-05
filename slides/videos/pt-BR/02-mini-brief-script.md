# Roteiro do vídeo 02 — Definir os requisitos do evento

**Duração estimada:** 5 minutos  
**Slides:** [02 · Definir os requisitos do evento](./02-mini-brief.html)  
**Materiais de apoio:** [notas da reunião](../../../workshop/pt-BR/event-meeting-notes.md) · [`requirements.md`](../../../workshop/pt-BR/requirements.md) · [Design System](../../../workshop/pt-BR/design-system.md) · [`design.md`](../../../workshop/pt-BR/design.md)

## Gancho · antes do slide 1

Antes de pedir à inteligência artificial que desenhe uma tela, precisamos responder a uma pergunta: quais decisões ela deve respeitar? É isso que transforma uma ideia aberta em um projeto com escopo, experiência e limites claros.

## Slide 1 · A conversa vira um brief do evento

Na fase anterior, organizamos a conversa com a equipe do evento. Agora vamos usar a inteligência artificial para encontrar, dentro desse material, o escopo e as funcionalidades do projeto.

É um processo simples e muito parecido com o que já fazemos em uma reunião de briefing. A IA pode agrupar necessidades, destacar decisões e apontar informações que estão faltando, mas continua cabendo à equipe confirmar o que realmente faz parte do projeto.

No nosso exemplo, a comunidade WordPress organiza um evento sobre inteligência artificial em Faro. Mas o site não deve conversar apenas com pessoas da comunidade WordPress. Ele precisa alcançar também o público geral do Algarve e mostrar que o evento é relevante para sua realidade.

**Transição:** Para dar foco a esse brief, começamos com três decisões fundamentais.

## Slide 2 · Três decisões dão foco ao evento

A primeira decisão é o propósito: por que esse evento existe? Neste caso, queremos aproximar a inteligência artificial dos negócios e da comunidade local.

A segunda é o público. Estamos falando com proprietários de hotéis, restaurantes e agências de viagens, além de profissionais curiosos que talvez não tenham experiência técnica nem qualquer relação anterior com WordPress.

A terceira é o tom de voz. A comunicação precisa ser acolhedora, prática, clara e sem jargão. O público deve sentir que consegue participar da conversa sobre IA, e não que o evento foi criado apenas para especialistas.

Essas três decisões não servem somente para escrever os textos do site. Elas influenciam a abordagem visual, a hierarquia da informação e a forma como o agente vai projetar as telas.

**Transição:** Depois de definir essa direção, registramos o acordo para que ele não dependa apenas da memória da equipe.

## Slide 3 · Registre o acordo

Criar um arquivo de requisitos não é uma obrigação da ferramenta, mas é uma prática que eu gosto de adotar. O `requirements.md` funciona como uma base compartilhada para o design e, mais tarde, para a implementação.

Além do propósito, do público e da voz, ele pode registrar a experiência esperada. O site será uma página única? Terá várias páginas? Algumas informações serão abertas em modais? Qual será o fluxo de navegação até a inscrição?

Também precisamos definir a plataforma prioritária. O projeto será pensado para desktop e mobile, seguirá uma abordagem mobile-first ou atenderá a um contexto exclusivamente móvel? Essa escolha pode mudar a navegação e a quantidade de informação mostrada em cada etapa.

O arquivo deve registrar ainda limites, dúvidas e critérios de aceite. E há uma decisão técnica importante: estamos criando um site WordPress. Assim, o agente de design já trabalha com um contexto compatível com a plataforma que será usada depois.

**Transição:** Com os requisitos definidos, o design precisa deixar dois artefatos reutilizáveis.

## Slide 4 · Dois artefatos orientam os rascunhos

O primeiro artefato é o Design System. Ele reúne cores, tipografia, componentes e padrões de interface. É o conjunto de regras que dá consistência às telas e evita que cada página pareça pertencer a um projeto diferente.

O segundo é o `design.md`. Nele, registramos as decisões visuais e de interação que foram adotadas durante a criação dos rascunhos.

Ferramentas como Claude Design ou Google Stitch nem sempre vão produzir exatamente esses arquivos da forma que esperamos. Por isso, precisamos pedir os artefatos de maneira explícita, revisar o resultado e completar o que estiver faltando.

Neste momento, ainda não precisamos decidir quais partes serão responsabilidade do tema e quais deverão virar plugin. Essa separação acontece melhor na etapa de implementação, dentro do Studio Code, quando podemos avaliar cada funcionalidade junto com o agente.

**Transição:** Agora temos contexto suficiente para transformar requisitos em uma proposta visual.

## Slide 5 · Claude Design transforma requisitos em rascunhos

Encerramos este ciclo com um `requirements.md` revisado. Ele reúne o acordo sobre propósito, público, voz, experiência, plataforma e limites.

O próximo passo é levar esse arquivo, as referências disponíveis e o Design System para Claude Design. A partir desse contexto, pedimos os primeiros rascunhos do site, comparamos alternativas e registramos as escolhas aprovadas no `design.md`.

Claude Design é a ferramenta que vou usar na demonstração, mas o processo também pode ser aplicado com Google Stitch ou outra solução de design assistido por IA. A ferramenta pode mudar; a qualidade do contexto continua sendo decisiva.

Essa primeira geração não é o resultado final. Ela é uma representação concreta do que entendemos até aqui, pronta para ser revisada antes da construção.

**Fechamento:** Requisitos claros dão direção ao design. No próximo módulo, vamos criar a base local do site para preparar a implementação.
