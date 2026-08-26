---
name: editar-site
description: Ajuda qualquer pessoa da equipe Leterizza (técnica ou não) a fazer mudanças no site (landing page, Next.js) — texto, imagens, seções novas, formulários, layout, e mudanças maiores de funcionalidade também. Use esta skill sempre que alguém pedir pra mudar, adicionar, remover ou ajustar qualquer coisa visível no site, mesmo sem mencionar arquivo, componente ou termo técnico nenhum — "muda o texto do botão", "quero uma seção nova de depoimentos", "o formulário de contato não está validando o telefone direito" são todos exemplos de gatilho. Sempre termina o trabalho como uma branch + Pull Request pra revisão, nunca aplica direto no site no ar.
---

# Editar o Site Leterizza

Esta skill existe pra uma pessoa poder pedir uma mudança no site em português simples e ver ela acontecer de verdade — sem precisar saber onde o arquivo está, o que é uma branch, ou o que é um Pull Request. Você (Claude) cuida da parte técnica; a pessoa só confirma que ficou como ela queria.

## O que está fora do escopo, e por quê

Duas coisas são bloqueadas **tecnicamente** neste repositório (você vai receber um erro se tentar, não é só uma instrução) — não precisa nem tentar evitar, mas ajuda saber o motivo pra explicar pra quem pediu:

- **Configuração de versionamento** (`.git/`, `.github/`, `.claude/settings.json`, `.claude/hooks/`) — porque isso é infraestrutura do próprio sistema que garante que nenhuma mudança vai pro ar sem revisão. Mexer aqui poderia desligar essa proteção.
- **Segredos** (`.env*`, `.gitignore`) — chaves de API e configuração sensível. Nunca fazem parte de um pedido de "mudar o site".

**Fora isso, o escopo é amplo de propósito** — decisão explícita do Paulo: mudanças grandes (nova seção, novo formulário, reestruturar uma página inteira) são bem-vindas, não só texto/copy. O que substitui a restrição de escopo é **cuidado no processo**: testar visualmente antes de finalizar, e sempre passar por revisão humana antes de ir pro site de verdade (ver "Como fechar o trabalho", abaixo).

Se alguém pedir uma das duas coisas bloqueadas, ou algo que dependa delas (ex: "adiciona uma variável de ambiente nova"), explique o motivo em português simples e sugira que um desenvolvedor faça essa parte específica — não tente contornar.

## Como trabalhar

### 1. Entenda o pedido em linguagem simples

A pessoa não vai falar em termos técnicos. "O título da página inicial" pode significar `src/app/page.tsx`, ou pode ser um texto dentro de `Header.tsx` — não assuma, **procure pelo texto que ela descreveu** (`Grep` pelo texto visível, não pelo nome de arquivo que ela nunca vai saber). Se o pedido for ambíguo (mais de um lugar parece bater), mostre as opções em português — "achei isso em duas telas, qual delas?" — antes de editar.

### 2. Faça a mudança

Sem restrição de tamanho — pode ser trocar uma palavra ou reestruturar uma seção inteira. Só duas coisas realmente importam aqui:

- **Não precisa "economizar" a mudança pra parecer mais simples** — se o pedido é grande, faça o pedido inteiro.
- **Se o pedido puxar uma dependência nova** (uma lib nova no `package.json`, por exemplo) — isso é permitido, mas pesa mais: depois de instalar, rode o build (`npm run build`) antes de seguir pro passo de preview, porque dependência nova é a forma mais comum de algo quebrar silenciosamente.

### 3. Mostre visualmente antes de seguir

**Nunca considere o trabalho pronto só porque o código parece certo — pessoa não-técnica não lê diff.** Suba o site local (`npm run dev`) e abra a página que mudou no navegador, tire um print ou descreva a tela pra pessoa confirmar. Se a skill `run` deste projeto estiver disponível, use-a — ela já sabe como subir e navegar neste app. Confira também o console do navegador por erro (`read_console_messages` ou equivalente) — é aqui que "deixar pesado e com erros" (a preocupação que motivou o escopo desta skill) vira uma checagem concreta, não uma promessa vaga.

Se algo quebrou (erro de build, erro de console, tela em branco): não empurre pra frente mesmo assim. Reverta ou corrija, e só siga quando a tela realmente carregar limpa.

### 4. Durante o dia: acumule commits numa branch só, sem abrir PR a cada mudança

A pessoa provavelmente vai pedir várias mudanças ao longo do mesmo dia/sessão — cada uma vira um commit separado e bem explicado, todas na **mesma branch**, e só no fim tudo isso vira **um PR único** pra revisão. Não crie uma branch nova nem abra PR a cada pedido isolado — isso geraria uma PR pra cada texto trocado, o que ninguém quer revisar.

- **Primeira mudança da sessão**: crie uma branch nova a partir da atual (nunca trabalhe direto em cima do que já está no ar) — `git checkout -b conteudo/<data-ou-descrição-curta-do-dia>`, ex: `conteudo/2026-08-25`. Se já existir uma branch de trabalho do mesmo dia em andamento (confira com `git branch`), reaproveite ela em vez de criar outra.
- **Cada mudança**, depois de confirmada visualmente (passo 3): `git commit` com mensagem clara e específica do que mudou e por quê — quem for revisar no fim do dia vai ler essas mensagens pra entender o que aconteceu, então "mudanças no site" não serve, escreva o que de fato mudou.
- Depois de commitar, siga pro próximo pedido — não pare pra pedir aprovação de PR a cada commit.

### 5. Fim do dia: abra o PR só quando a pessoa pedir

Só abra o Pull Request quando a pessoa disser algo como "terminei por hoje", "pode mandar pra revisão", "fecha isso" — **nunca automaticamente depois de um commit qualquer**. Quando isso acontecer:

1. Rode `git log` na branch do dia pra ver todos os commits acumulados.
2. Abra o Pull Request (`gh pr create`) com uma descrição que resume **todas** as mudanças da branch, não só a última — quem revisa não acompanhou cada pedido no momento em que aconteceu, precisa entender a sessão inteira de uma vez.
3. **Push pra remoto está bloqueado tecnicamente nesta configuração** — se `gh pr create` (ou qualquer `git push`) for recusado, isso é esperado, não um bug: peça pra um desenvolvedor dar o push final e concluir a abertura do PR. Explique isso pra pessoa em vez de tentar contornar.
4. Avise a pessoa, claramente: **as mudanças não estão no ar ainda** — estão esperando revisão de um dev. Não prometa "já mudou" antes disso acontecer de verdade.

## O que fazer quando o pedido não é seguro

Se o pedido esbarrar num dos dois bloqueios reais (versionamento, segredos), ou se você genuinamente não souber fazer a mudança com segurança (ex: pedido que exigiria mexer em infraestrutura de deploy, DNS, ou serviço externo que você não tem visibilidade nenhuma) — não force. Explique o motivo em português simples, sem jargão ("isso mexe em como o site é publicado, precisa de um desenvolvedor pra essa parte") e sugira que a pessoa descreva o pedido pra um dev em vez de insistir em caminhos alternativos pra aplicar a mesma mudança.
