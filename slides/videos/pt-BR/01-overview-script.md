# Roteiro do vídeo 01 — Definir o projeto com IA

**Duração estimada:** 5 minutos  
**Slides:** [01 · Definir o projeto com IA](./01-overview.html)  
**Material de apoio:** [notas da reunião fictícia](../../../workshop/pt-BR/event-meeting-notes.md)

## Gancho · antes do slide 1

Quanto custa começar a construir antes de entender o problema? Normalmente, custa retrabalho, margem e confiança. Por isso, antes de abrir qualquer ferramenta de construção, a primeira tarefa é definir com clareza o projeto que queremos entregar.

## Slide 1 · Antes de construir, defina o projeto

Quem trabalha à frente de uma agência conhece bem esta situação: muitas vezes, a parte mais importante de um projeto acontece antes da primeira linha de código. Ela acontece durante a conversa com o cliente.

Para tornar isso concreto, vou usar um caso inspirado em um projeto real no qual trabalhei recentemente: o site de um evento de tecnologia sobre inteligência artificial, em Faro, no sul de Portugal.

O evento teria duas trilhas. Em uma reunião com a comunidade organizadora, conversamos sobre a duração, o número esperado de participantes, o local e outras decisões importantes. A partir dessa experiência, preparei uma conversa fictícia para servir como matéria-prima do nosso exercício.

Neste primeiro vídeo, ainda não vamos escolher páginas, componentes ou tecnologia. Primeiro, vamos entender o que precisa ser construído e por quê.

**Transição:** E o ponto de partida para esse entendimento não é um prompt perfeito. É uma boa conversa.

## Slide 2 · Comece pela conversa

A conversa simulada representa uma reunião de descoberta com a organização do evento. Ela reúne o contexto do evento de IA em Faro, a proposta de duas trilhas e decisões práticas, como tempo, capacidade e localização.

O objetivo não é fingir que temos todas as respostas. É registrar o que foi dito com fidelidade e perceber também o que ainda precisa ser esclarecido.

Para a aula, transformamos essa conversa em notas fictícias e seguras para compartilhar. Assim, todos partem do mesmo material e podem observar como decisões de produto surgem de uma reunião, sem expor informações privadas de um cliente real.

**Transição:** Com a conversa registrada, a IA deixa de ser apenas uma ferramenta para gerar texto e passa a ajudar na interpretação do projeto.

## Slide 3 · A IA transforma falas em decisões

Como a inteligência artificial pode ajudar aqui? A gravação ou transcrição da reunião pode ser organizada por participante, tema e tipo de informação. A IA ajuda a separar quem disse o quê e a classificar o conteúdo.

A partir disso, conseguimos identificar quatro grupos importantes: o objetivo do site, os públicos que ele precisa atender, as funcionalidades mencionadas e as perguntas que continuam abertas.

Também podemos pedir que a IA diferencie fatos confirmados, decisões, hipóteses e dúvidas. Por exemplo: a localização já está decidida ou ainda é uma possibilidade? A inscrição será gratuita? Quem aprova a seleção de palestrantes? Quais dados realmente precisam ser coletados?

Essas perguntas melhoram o contexto, mas a validação continua sendo humana. A IA organiza e aponta lacunas; a equipe confirma o que vale como decisão.

**Transição:** Quando a conversa está clara, podemos avançar por três fases sem pular diretamente para a construção.

## Slide 4 · A conversa abre três fases

A primeira fase é a descoberta: ouvir, registrar e esclarecer. É aqui que reunimos o contexto e fazemos perguntas até que os pontos importantes estejam claros.

A segunda fase é transformar esse entendimento em requisitos. Vamos registrar propósito, público, funcionalidades, limites e perguntas abertas em um arquivo `requirements.md`. Esse arquivo será a fonte de verdade do projeto.

A terceira fase é explorar o design. Com os requisitos em mãos, podemos usar uma ferramenta como Claude Design ou Google Stitch para produzir os primeiros rascunhos da experiência.

No meu fluxo, escolhi Claude Design porque eu já utilizava Claude Max e essa opção era mais conveniente para o trabalho. Mas a ferramenta não é a parte essencial: você pode usar outra solução que cumpra o mesmo papel.

Como a equipe era enxuta, o primeiro protótipo ajudou a materializar a proposta rapidamente. Depois, uma pessoa de design participou do processo e melhorou esse protótipo. Ou seja, a IA não precisa excluir a participação humana; ela pode criar uma base mais concreta para a colaboração.

**Transição:** Tudo isso funciona melhor quando as notas da conversa são confiáveis.

## Slide 5 · Boas notas preservam o que a conversa revelou

Boas notas transformam a conversa em memória compartilhada. Elas preservam o contexto, as decisões, as dúvidas e os limites que precisam acompanhar o projeto.

Para quem trabalha em uma agência, isso também protege o escopo e a rentabilidade. Quanto melhor definirmos o começo, menor será a chance de descobrir tarde demais que cliente e equipe imaginavam entregas diferentes.

Esse cuidado reduz retrabalho e evita ciclos desnecessários com a inteligência artificial. Em vez de pedir variações sem direção, damos ao agente um contexto validado e critérios claros.

Agora temos a matéria-prima. No próximo vídeo, vamos transformar essas notas em um `requirements.md`: um documento curto, verificável e pronto para orientar a etapa de design.

**Fechamento:** Antes de construir, defina. Antes de pedir uma solução à IA, dê a ela um problema bem compreendido.
